#!/usr/bin/env python3
"""
Local question generator for ACT Genie.
Generates 10-15 ACT-specific practice questions per Math topic.
No external APIs required.
"""
from pathlib import Path
import re
import json
import random

ROOT = Path("/home/jurrien/Desktop/The Brain/Projects/act-genie")
app_path = ROOT / "app.js"
output_path = ROOT / "generated_questions.json"

text = app_path.read_text()

# Extract topics and explanations
pattern = re.compile(r"{name:'([^']+)', diff:'[^']+', expl:`([^`]+)`}")
matches = pattern.findall(text)
topics = {name: expl for name, expl in matches}

print(f"Found {len(topics)} total topics")

def clean(text):
    """Remove HTML tags."""
    return re.sub(r"<[^>]+>", "", text)

def extract_formulas(expl):
    """Extract formula/code blocks."""
    return re.findall(r"<code>([^<]+)</code>", expl)

def extract_bullets(expl):
    """Extract bullet points."""
    bullets = []
    for line in expl.split("<br>"):
        line = clean(line).strip()
        if line.startswith("•") or line.startswith("-"):
            bullets.append(line.lstrip("•-").strip())
    return bullets

def extract_numbers(expl):
    """Extract numbers with context."""
    return re.findall(r"\b\d+\.?\d*\b", expl)

# ACT-specific question templates
def act_number_types_questions(topic_name, expl, clean_expl):
    """ACT-style number properties questions."""
    questions = []
    bullets = extract_bullets(expl)
    
    # Q1: Prime/composite identification
    questions.append({
        "q": "How many prime numbers are between 1 and 20?",
        "options": ["6", "7", "8", "9"],
        "answer": 2,
        "explanation": "The primes between 1 and 20 are 2, 3, 5, 7, 11, 13, 17, 19. That is 8 primes."
    })
    
    # Q2: Product of negatives
    questions.append({
        "q": "What is the product of (-4) × (-6)?",
        "options": ["-24", "24", "-10", "10"],
        "answer": 1,
        "explanation": "The product of two negative numbers is always positive: (-4) × (-6) = 24."
    })
    
    # Q3: Sum properties
    questions.append({
        "q": "Which statement is always true?",
        "options": [
            "The sum of two odd numbers is odd",
            "The sum of two even numbers is even",
            "The product of two even numbers is odd",
            "The sum of an even and odd is even"
        ],
        "answer": 1,
        "explanation": "The sum of two even numbers is always even. The sum of two odds is even. The sum of even+odd is odd."
    })
    
    # Q4: Integer boundaries trap
    questions.append({
        "q": "How many integers between 1 and 100 are divisible by 3?",
        "options": ["32", "33", "34", "35"],
        "answer": 1,
        "explanation": "100 ÷ 3 = 33.33, so there are 33 integers divisible by 3 (3, 6, 9, ..., 99)."
    })
    
    # Q5: Rational vs irrational
    questions.append({
        "q": "Which of the following is an irrational number?",
        "options": ["√9", "√16", "√2", "√25"],
        "answer": 2,
        "explanation": "√2 is irrational because its decimal expansion never repeats or terminates. √9=3, √16=4, √25=5 are integers."
    })
    
    return questions

def act_factors_multiples_questions(topic_name, expl, clean_expl):
    """ACT-style factors and multiples questions."""
    questions = []
    
    # Q1: GCF
    questions.append({
        "q": "What is the GCF of 36 and 54?",
        "options": ["6", "9", "12", "18"],
        "answer": 3,
        "explanation": "36 = 2² × 3², 54 = 2 × 3³. Common factors with lowest exponents: 2¹ × 3² = 18."
    })
    
    # Q2: LCM
    questions.append({
        "q": "What is the LCM of 8 and 12?",
        "options": ["24", "36", "48", "96"],
        "answer": 0,
        "explanation": "LCM uses highest exponents: 8 = 2³, 12 = 2² × 3. LCM = 2³ × 3 = 24."
    })
    
    # Q3: Divisibility by 6
    questions.append({
        "q": "Which number is divisible by 6?",
        "options": ["112", "123", "216", "401"],
        "answer": 2,
        "explanation": "A number divisible by 6 must be divisible by both 2 and 3. 216 is even and its digits sum to 9, which is divisible by 3."
    })
    
    # Q4: Divisibility by 9
    questions.append({
        "q": "Which number is divisible by 9?",
        "options": ["123", "234", "345", "456"],
        "answer": 1,
        "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. 2+3+4=9, so 234 is divisible by 9."
    })
    
    return questions

def act_fractions_decimals_questions(topic_name, expl, clean_expl):
    """ACT-style fraction/decimal/percent questions."""
    questions = []
    
    # Q1: Percent decrease
    questions.append({
        "q": "A shirt costs $40 and is on sale for $30. What percent decrease is this?",
        "options": ["20%", "25%", "30%", "33%"],
        "answer": 1,
        "explanation": "Percent change = (new - old) / old × 100 = (30-40)/40 × 100 = -25%. The absolute decrease is 25%."
    })
    
    # Q2: Decimal to percent
    questions.append({
        "q": "What is 0.75 as a percent?",
        "options": ["7.5%", "75%", "0.75%", "750%"],
        "answer": 1,
        "explanation": "To convert a decimal to a percent, multiply by 100: 0.75 × 100 = 75%."
    })
    
    # Q3: Percent of a number
    questions.append({
        "q": "If 15% of a number is 30, what is the number?",
        "options": ["100", "150", "200", "450"],
        "answer": 2,
        "explanation": "Set up the equation: 0.15x = 30. Divide both sides by 0.15: x = 30 / 0.15 = 200."
    })
    
    # Q4: Successive percent change trap
    questions.append({
        "q": "A price increases by 20%, then decreases by 20%. The final price is:",
        "options": [
            "The same as the original",
            "4% less than the original",
            "4% more than the original",
            "20% less than the original"
        ],
        "answer": 1,
        "explanation": "Successive increases/decreases don't cancel out. If original is $100: $100 × 1.2 = $120, then $120 × 0.8 = $96. That's 4% less than original."
    })
    
    return questions

def act_ratios_proportions_questions(topic_name, expl, clean_expl):
    """ACT-style ratio/proportion questions."""
    questions = []
    
    # Q1: Basic ratio
    questions.append({
        "q": "If the ratio of boys to girls is 3:4 and there are 21 boys, how many girls are there?",
        "options": ["24", "28", "32", "35"],
        "answer": 1,
        "explanation": "Set up proportion: 3/4 = 21/x. Cross-multiply: 3x = 84, so x = 28."
    })
    
    # Q2: Unit rate
    questions.append({
        "q": "A car travels 300 miles on 10 gallons of gas. What is the unit rate (miles per gallon)?",
        "options": ["20 mpg", "25 mpg", "30 mpg", "35 mpg"],
        "answer": 2,
        "explanation": "Unit rate = total miles ÷ total gallons = 300 ÷ 10 = 30 mpg."
    })
    
    # Q3: Scale drawing
    questions.append({
        "q": "On a map, 1 inch = 5 miles. If two cities are 3.5 inches apart on the map, what is the actual distance?",
        "options": ["12.5 miles", "15 miles", "17.5 miles", "20 miles"],
        "answer": 2,
        "explanation": "Actual distance = 3.5 inches × 5 miles/inch = 17.5 miles."
    })
    
    return questions

def act_scientific_notation_questions(topic_name, expl, clean_expl):
    """ACT-style scientific notation questions."""
    questions = []
    
    # Q1: Standard to scientific
    questions.append({
        "q": "What is 5,200,000 in scientific notation?",
        "options": ["5.2 × 10^5", "5.2 × 10^6", "52 × 10^5", "5.2 × 10^7"],
        "answer": 1,
        "explanation": "Move the decimal 6 places to the left: 5.2 × 10^6. The coefficient must be between 1 and 10."
    })
    
    # Q2: Multiplication
    questions.append({
        "q": "What is the product of (2 × 10^3) and (3 × 10^4)?",
        "options": ["6 × 10^7", "6 × 10^12", "6 × 10^1", "6 × 10^4"],
        "answer": 0,
        "explanation": "Multiply coefficients: 2 × 3 = 6. Add exponents: 10^3 × 10^4 = 10^(3+4) = 10^7. Result: 6 × 10^7."
    })
    
    # Q3: Comparison
    questions.append({
        "q": "Which is the largest?",
        "options": ["2 × 10^5", "3 × 10^4", "5 × 10^3", "9 × 10^2"],
        "answer": 0,
        "explanation": "Compare exponents first: 10^5 > 10^4 > 10^3 > 10^2. So 2 × 10^5 is largest."
    })
    
    return questions

def act_mean_median_mode_questions(topic_name, expl, clean_expl):
    """ACT-style statistics questions."""
    questions = []
    
    # Q1: Median
    questions.append({
        "q": "What is the median of 3, 7, 1, 9, 5?",
        "options": ["1", "5", "7", "9"],
        "answer": 1,
        "explanation": "First sort: 1, 3, 5, 7, 9. The middle value is 5."
    })
    
    # Q2: Missing value
    questions.append({
        "q": "A set has mean 20. If 15 is added to the set, the new mean becomes 18. How many numbers were originally in the set?",
        "options": ["4", "5", "6", "7"],
        "answer": 1,
        "explanation": "Let n be original count. Original sum = 20n. New sum = 20n+15, new count = n+1. (20n+15)/(n+1) = 18. Solving: 20n+15 = 18n+18, 2n = 3, n = 5."
    })
    
    # Q3: Outlier effect
    questions.append({
        "q": "A set has mean 10 and median 8. If we add 100 to the set, what happens to the mean?",
        "options": [
            "It increases slightly",
            "It increases significantly",
            "It stays the same",
            "It decreases"
        ],
        "answer": 1,
        "explanation": "An outlier (100) pulls the mean up significantly because the mean is affected by extreme values. The median would change less."
    })
    
    return questions

def act_probability_questions(topic_name, expl, clean_expl):
    """ACT-style probability questions."""
    questions = []
    
    # Q1: Basic probability
    questions.append({
        "q": "What is the probability of rolling a sum of 7 with two standard dice?",
        "options": ["1/6", "1/9", "1/12", "1/36"],
        "answer": 0,
        "explanation": "There are 6 favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Total outcomes = 36. Probability = 6/36 = 1/6."
    })
    
    # Q2: Without replacement
    questions.append({
        "q": "A bag has 3 red and 2 blue marbles. What is the probability of drawing a red marble?",
        "options": ["1/5", "2/5", "3/5", "4/5"],
        "answer": 2,
        "explanation": "Probability = desired outcomes / total outcomes = 3/5."
    })
    
    # Q3: AND probability
    questions.append({
        "q": "What is the probability of flipping two heads in a row with a fair coin?",
        "options": ["1/2", "1/3", "1/4", "1/8"],
        "answer": 2,
        "explanation": "P(heads) × P(heads) = (1/2) × (1/2) = 1/4. For independent events, multiply probabilities."
    })
    
    return questions

def act_pemdas_questions(topic_name, expl, clean_expl):
    """ACT-style order of operations questions."""
    questions = []
    
    # Q1: Basic order
    questions.append({
        "q": "What is the value of 6 + 2 × 3?",
        "options": ["12", "24", "18", "10"],
        "answer": 0,
        "explanation": "Multiplication comes before addition: 2 × 3 = 6, then 6 + 6 = 12."
    })
    
    # Q2: Negative exponent trap
    questions.append({
        "q": "What is -3²?",
        "options": ["9", "-9", "6", "-6"],
        "answer": 1,
        "explanation": "Exponents come before negation: 3² = 9, so -3² = -(3²) = -9. If it were (-3)², the answer would be 9."
    })
    
    # Q3: Fractions in order
    questions.append({
        "q": "What is (8 + 4) ÷ 3?",
        "options": ["4", "3", "2", "1"],
        "answer": 0,
        "explanation": "Parentheses first: 8 + 4 = 12. Then division: 12 ÷ 3 = 4."
    })
    
    return questions

def act_linear_equations_questions(topic_name, expl, clean_expl):
    """ACT-style linear equation questions."""
    questions = []
    
    # Q1: Basic solve
    questions.append({
        "q": "Solve for x: 4x - 7 = 9",
        "options": ["x = 4", "x = 2", "x = 3", "x = 5"],
        "answer": 0,
        "explanation": "Add 7 to both sides: 4x = 16. Divide by 4: x = 4."
    })
    
    # Q2: Distribution
    questions.append({
        "q": "Solve for x: 2(x + 3) = 14",
        "options": ["x = 4", "x = 5", "x = 6", "x = 7"],
        "answer": 0,
        "explanation": "Distribute: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4."
    })
    
    # Q3: Variables on both sides
    questions.append({
        "q": "Solve for x: 3x + 2 = x + 10",
        "options": ["x = 4", "x = 5", "x = 6", "x = 7"],
        "answer": 0,
        "explanation": "Subtract x from both sides: 2x + 2 = 10. Subtract 2: 2x = 8. Divide by 2: x = 4."
    })
    
    # Q4: Fraction coefficients
    questions.append({
        "q": "Solve for x: (1/2)x = 6",
        "options": ["x = 3", "x = 6", "x = 12", "x = 8"],
        "answer": 2,
        "explanation": "Multiply both sides by 2: x = 12."
    })
    
    return questions

def act_inequalities_questions(topic_name, expl, clean_expl):
    """ACT-style inequality questions."""
    questions = []
    
    # Q1: Flip sign trap
    questions.append({
        "q": "Solve: -3x > 12",
        "options": ["x > -4", "x < -4", "x > 4", "x < 4"],
        "answer": 1,
        "explanation": "Divide by -3 and flip the inequality sign: x < -4. This is the #1 ACT trap - always flip when dividing by negative!"
    })
    
    # Q2: Graphing
    questions.append({
        "q": "Which represents the solution to x + 2 ≤ 5?",
        "options": [
            "x ≤ 3 (closed circle, shade left)",
            "x ≥ 3 (closed circle, shade right)",
            "x < 3 (open circle, shade left)",
            "x > 3 (open circle, shade right)"
        ],
        "answer": 0,
        "explanation": "Subtract 2: x ≤ 3. Closed circle because ≤ includes 3. Shade left because x is less than 3."
    })
    
    return questions

def act_absolute_value_questions(topic_name, expl, clean_expl):
    """ACT-style absolute value questions."""
    questions = []
    
    # Q1: Two cases
    questions.append({
        "q": "Solve: |x - 2| = 5",
        "options": ["x = 7", "x = -3", "x = 7 or x = -3", "x = 3 or x = -7"],
        "answer": 2,
        "explanation": "Absolute value gives two cases: x - 2 = 5 → x = 7, or x - 2 = -5 → x = -3."
    })
    
    # Q2: No solution
    questions.append({
        "q": "Solve: |x + 3| = -2",
        "options": ["x = -5 or x = -1", "x = -1", "x = -5", "No solution"],
        "answer": 3,
        "explanation": "Absolute value cannot equal a negative number. |x + 3| is always ≥ 0, so it can never equal -2."
    })
    
    return questions

def act_exponents_radicals_questions(topic_name, expl, clean_expl):
    """ACT-style exponents and radicals questions."""
    questions = []
    
    # Q1: Power rule
    questions.append({
        "q": "Simplify: (2³)²",
        "options": ["2⁵", "2⁶", "4³", "8²"],
        "answer": 1,
        "explanation": "Power rule: (a^m)^n = a^(mn). So (2³)² = 2^(3×2) = 2⁶ = 64."
    })
    
    # Q2: Fractional exponent
    questions.append({
        "q": "What is 8^(2/3)?",
        "options": ["2", "4", "8", "16"],
        "answer": 1,
        "explanation": "8^(2/3) = (cube root of 8)² = 2² = 4. The denominator of the fractional exponent tells you the root."
    })
    
    # Q3: Negative exponent
    questions.append({
        "q": "Simplify: 2⁻³",
        "options": ["-8", "-6", "1/8", "1/6"],
        "answer": 2,
        "explanation": "Negative exponent means reciprocal: 2⁻³ = 1/(2³) = 1/8."
    })
    
    # Q4: Radical multiplication
    questions.append({
        "q": "Simplify: √8 × √2",
        "options": ["√16", "4", "16", "√10"],
        "answer": 1,
        "explanation": "√a × √b = √(ab). So √8 × √2 = √16 = 4. Alternatively: √8 = 2√2, so 2√2 × √2 = 2 × 2 = 4."
    })
    
    return questions

def act_foil_factoring_questions(topic_name, expl, clean_expl):
    """ACT-style FOIL/factoring questions."""
    questions = []
    
    # Q1: Difference of squares
    questions.append({
        "q": "Factor: x² - 9",
        "options": ["(x-3)²", "(x+3)(x-3)", "(x+9)(x-9)", "(x-9)²"],
        "answer": 1,
        "explanation": "Difference of squares: a² - b² = (a+b)(a-b). So x² - 9 = (x+3)(x-3)."
    })
    
    # Q2: Standard factoring
    questions.append({
        "q": "Factor: x² + 5x + 6",
        "options": ["(x+2)(x+3)", "(x+1)(x+6)", "(x+5)(x+1)", "(x-2)(x-3)"],
        "answer": 0,
        "explanation": "Find two numbers that multiply to 6 and add to 5: 2 and 3. So (x+2)(x+3)."
    })
    
    # Q3: Perfect square
    questions.append({
        "q": "What is (x + 5)²?",
        "options": ["x² + 10x + 25", "x² + 25", "x² + 5x + 25", "x² + 10x + 5"],
        "answer": 0,
        "explanation": "Perfect square pattern: (a+b)² = a² + 2ab + b². So (x+5)² = x² + 10x + 25."
    })
    
    return questions

def act_quadratic_questions(topic_name, expl, clean_expl):
    """ACT-style quadratic equation questions."""
    questions = []
    
    # Q1: Factoring
    questions.append({
        "q": "What are the solutions to x² - 5x + 6 = 0?",
        "options": ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = -1, -6"],
        "answer": 0,
        "explanation": "Factor: (x-2)(x-3) = 0. Set each factor to 0: x = 2 or x = 3."
    })
    
    # Q2: Discriminant
    questions.append({
        "q": "How many real solutions does x² + 4x + 4 = 0 have?",
        "options": ["0", "1", "2", "3"],
        "answer": 1,
        "explanation": "This factors to (x+2)² = 0. The discriminant b² - 4ac = 16 - 16 = 0, so there is 1 repeated real root: x = -2."
    })
    
    return questions

def act_slope_questions(topic_name, expl, clean_expl):
    """ACT-style slope questions."""
    questions = []
    
    # Q1: Slope formula
    questions.append({
        "q": "What is the slope of the line passing through (2,3) and (5,9)?",
        "options": ["1", "2", "3", "4"],
        "answer": 1,
        "explanation": "Slope = (y2-y1)/(x2-x1) = (9-3)/(5-2) = 6/3 = 2."
    })
    
    # Q2: Perpendicular slope
    questions.append({
        "q": "What is the slope of a line perpendicular to y = 2x + 1?",
        "options": ["2", "-2", "1/2", "-1/2"],
        "answer": 3,
        "explanation": "Perpendicular lines have negative reciprocal slopes. The slope of y = 2x + 1 is 2, so perpendicular slope is -1/2."
    })
    
    return questions

def act_lines_questions(topic_name, expl, clean_expl):
    """ACT-style equations of lines questions."""
    questions = []
    
    # Q1: Slope-intercept
    questions.append({
        "q": "What is the equation of a line with slope 2 and y-intercept -3?",
        "options": ["y = 2x - 3", "y = -3x + 2", "y = 2x + 3", "y = 3x - 2"],
        "answer": 0,
        "explanation": "Slope-intercept form: y = mx + b. Here m=2 and b=-3, so y = 2x - 3."
    })
    
    # Q2: Point-slope
    questions.append({
        "q": "What is the equation of a line with slope 3 passing through (1, 2)?",
        "options": [
            "y - 2 = 3(x - 1)",
            "y + 2 = 3(x + 1)",
            "y = 3x + 2",
            "y = 3x - 1"
        ],
        "answer": 0,
        "explanation": "Point-slope form: y - y₁ = m(x - x₁). With slope 3 and point (1,2): y - 2 = 3(x - 1)."
    })
    
    return questions

def act_distance_midpoint_questions(topic_name, expl, clean_expl):
    """ACT-style distance/midpoint questions."""
    questions = []
    
    # Q1: Distance
    questions.append({
        "q": "What is the distance between (0,0) and (3,4)?",
        "options": ["5", "7", "25", "12"],
        "answer": 0,
        "explanation": "Distance = √((3-0)² + (4-0)²) = √(9+16) = √25 = 5."
    })
    
    # Q2: Midpoint
    questions.append({
        "q": "What is the midpoint of (2,5) and (8,-1)?",
        "options": ["(5, 2)", "(6, 3)", "(4, 4)", "(7, 1)"],
        "answer": 0,
        "explanation": "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) = ((2+8)/2, (5+(-1))/2) = (10/2, 4/2) = (5, 2)."
    })
    
    return questions

def act_circles_questions(topic_name, expl, clean_expl):
    """ACT-style circle questions."""
    questions = []
    
    # Q1: Circumference
    questions.append({
        "q": "What is the circumference of a circle with radius 3?",
        "options": ["3π", "6π", "9π", "12π"],
        "answer": 1,
        "explanation": "Circumference = 2πr = 2π(3) = 6π."
    })
    
    # Q2: Area
    questions.append({
        "q": "What is the area of a circle with diameter 10?",
        "options": ["10π", "25π", "50π", "100π"],
        "answer": 1,
        "explanation": "Radius = diameter/2 = 5. Area = πr² = π(5)² = 25π."
    })
    
    # Q3: Center/radius from equation
    questions.append({
        "q": "What is the center of the circle (x+2)² + (y-3)² = 16?",
        "options": ["(2, -3)", "(-2, 3)", "(2, 3)", "(-2, -3)"],
        "answer": 1,
        "explanation": "Standard form: (x-h)² + (y-k)² = r². Here h=-2, k=3, so center is (-2, 3)."
    })
    
    return questions

def act_triangles_questions(topic_name, expl, clean_expl):
    """ACT-style triangle questions."""
    questions = []
    
    # Q1: Pythagorean theorem
    questions.append({
        "q": "In a right triangle with legs 3 and 4, what is the hypotenuse?",
        "options": ["5", "6", "7", "25"],
        "answer": 0,
        "explanation": "Pythagorean Theorem: a² + b² = c². 3² + 4² = 9 + 16 = 25, so c = 5."
    })
    
    # Q2: Area
    questions.append({
        "q": "What is the area of a triangle with base 8 and height 5?",
        "options": ["20", "25", "30", "40"],
        "answer": 0,
        "explanation": "Area = ½ × base × height = ½ × 8 × 5 = 20."
    })
    
    # Q3: Special right triangle
    questions.append({
        "q": "In a 45°-45°-90° triangle, if one leg is 5, what is the hypotenuse?",
        "options": ["5√2", "10", "5", "5√3"],
        "answer": 0,
        "explanation": "45°-45°-90° triangle has sides in ratio x : x : x√2. If leg = 5, hypotenuse = 5√2."
    })
    
    return questions

def act_trigonometry_questions(topic_name, expl, clean_expl):
    """ACT-style trigonometry questions."""
    questions = []
    
    # Q1: SOH-CAH-TOA
    questions.append({
        "q": "In a right triangle, if sin(θ) = 3/5, what is cos(θ)?",
        "options": ["3/5", "4/5", "3/4", "4/3"],
        "answer": 1,
        "explanation": "Use Pythagorean identity sin² + cos² = 1. cos² = 1 - (3/5)² = 1 - 9/25 = 16/25. So cos(θ) = 4/5."
    })
    
    # Q2: Special angle
    questions.append({
        "q": "What is sin(30°)?",
        "options": ["0", "1/2", "√2/2", "√3/2"],
        "answer": 1,
        "explanation": "At 30°, sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3."
    })
    
    return questions

def act_functions_questions(topic_name, expl, clean_expl):
    """ACT-style function questions."""
    questions = []
    
    # Q1: Function notation
    questions.append({
        "q": "If f(x) = 2x + 1, what is f(3)?",
        "options": ["5", "6", "7", "8"],
        "answer": 2,
        "explanation": "Substitute x=3: f(3) = 2(3) + 1 = 6 + 1 = 7."
    })
    
    # Q2: Domain
    questions.append({
        "q": "What is the domain of f(x) = √(x - 2)?",
        "options": ["x > 2", "x ≥ 2", "x > 0", "All real numbers"],
        "answer": 1,
        "explanation": "The expression under the square root must be ≥ 0. So x - 2 ≥ 0, which gives x ≥ 2."
    })
    
    return questions

# Map topics to their ACT-specific generators
ACT_GENERATORS = {
    "Number Types & Properties": act_number_types_questions,
    "Factors, Multiples & Divisibility": act_factors_multiples_questions,
    "Fractions, Decimals & Percentages": act_fractions_decimals_questions,
    "Ratios & Proportions": act_ratios_proportions_questions,
    "Scientific Notation": act_scientific_notation_questions,
    "Mean, Median, Mode & Range": act_mean_median_mode_questions,
    "Basic Probability": act_probability_questions,
    "Order of Operations (PEMDAS)": act_pemdas_questions,
    "Solving Linear Equations": act_linear_equations_questions,
    "Linear Inequalities": act_inequalities_questions,
    "Absolute Value Equations": act_absolute_value_questions,
    "Exponents & Radicals": act_exponents_radicals_questions,
    "FOIL & Multiplying Binomials": act_foil_factoring_questions,
    "Factoring Quadratics": act_foil_factoring_questions,
    "Solving Quadratic Equations": act_quadratic_questions,
    "Slope of a Line": act_slope_questions,
    "Equations of Lines": act_lines_questions,
    "Distance & Midpoint Formulas": act_distance_midpoint_questions,
    "Circles": act_circles_questions,
    "Triangles": act_triangles_questions,
    "SOH-CAH-TOA": act_trigonometry_questions,
    "Function Notation": act_functions_questions,
    "Domain & Range": act_functions_questions,
}

def generate_questions(topic_name, expl):
    """Generate 10-15 ACT-specific practice questions per topic."""
    questions = []
    clean_expl = clean(expl)
    
    # Use ACT-specific generator if available
    if topic_name in ACT_GENERATORS:
        questions = ACT_GENERATORS[topic_name](topic_name, expl, clean_expl)
    
    # Fall back to generic templates if needed
    if len(questions) < 10:
        formulas = extract_formulas(expl)
        bullets = extract_bullets(expl)
        numbers = extract_numbers(expl)
        
        # Add formula questions
        if formulas:
            for formula in formulas[:2]:
                if "=" in formula and len(formula) < 60:
                    lhs, rhs = formula.split("=", 1)
                    questions.append({
                        "q": f"Which equation represents the formula in {topic_name}?",
                        "options": [
                            f"{lhs} = {rhs}",
                            f"{rhs} = {lhs}",
                            f"{lhs} × {rhs}",
                            f"{lhs} + {rhs}"
                        ],
                        "answer": 0,
                        "explanation": f"The correct formula is {formula}."
                    })
        
        # Add bullet-based questions
        if bullets:
            for bullet in bullets[:4]:
                if 15 < len(bullet) < 150:
                    questions.append({
                        "q": f"Which statement is true about {topic_name}?",
                        "options": [bullet, "None of the above", "It depends", "Not enough info"],
                        "answer": 0,
                        "explanation": f"Key concept: {bullet}"
                    })
        
        # Add True/False questions
        if bullets:
            for bullet in bullets[2:5]:
                if 10 < len(bullet) < 120:
                    questions.append({
                        "q": f"True or False: {bullet}",
                        "options": ["True", "False", "Only sometimes", "Depends"],
                        "answer": 0,
                        "explanation": f"This is a key rule for {topic_name}."
                    })
    
    # Deduplicate
    seen = set()
    unique_questions = []
    for q in questions:
        if q['q'] not in seen:
            seen.add(q['q'])
            unique_questions.append(q)
    
    return unique_questions[:15]

# Generate questions for all Math topics
generated_bank = {}
for topic_name, expl in topics.items():
    qs = generate_questions(topic_name, expl)
    if qs:
        generated_bank[topic_name] = qs

print(f"\nGenerated questions for {len(generated_bank)} Math topics")
print(f"Total questions: {sum(len(v) for v in generated_bank.values())}")

# Save to JSON
with open(output_path, "w") as f:
    json.dump(generated_bank, f, indent=2)

print(f"Saved to {output_path}")

# Show sample
print("\n=== Sample Questions ===")
for topic, qs in list(generated_bank.items())[:3]:
    print(f"\n{topic} ({len(qs)} questions):")
    for i, q in enumerate(qs[:2], 1):
        print(f"  Q{i}: {q['q'][:100]}")
        print(f"      Answer: {q['options'][q['answer']]}")
