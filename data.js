const data = {
  math: {
    title: 'ACT Math',
    desc: '45 questions · 50 minutes · 5 answer choices per question',
    categories: [
      {
        name: 'Number & Quantity',
        topics: [
          {name:'Number Types & Properties', diff:'easy', expl:`<strong>Real numbers</strong> are every number you can place on a number line: rational numbers (fractions, terminating and repeating decimals) and irrational numbers (like π and √2). <strong>Integers</strong> are the whole numbers and their negatives (…, −2, −1, 0, 1, 2, …).<br><br><strong>Prime</strong> numbers have exactly two factors (2, 3, 5, 7, 11…) while <strong>composite</strong> numbers have more than two (4, 6, 8, 9…). The number 1 is neither prime nor composite, and 2 is the only even prime.<br><br>Key rules to memorize:<br>• Negative × Negative = Positive<br>• Even + Even = Even, Odd + Odd = Even<br>• Odd × Odd = Odd, Odd × Even = Even<div class="example-box">
  <strong>Question:</strong> How many integers between 1 and 100 are divisible by 3?
  <div class="step-box"><span class="step-num">1</span> The first multiple is 3 and the last is 99.</div>
  <div class="step-box"><span class="step-num">2</span> Multiples of 3 form an arithmetic sequence: 3, 6, 9, …, 99 with common difference 3.</div>
  <div class="step-box"><span class="step-num">3</span> Count them: (99 − 3) ÷ 3 + 1 = 96 ÷ 3 + 1 = 32 + 1 = 33.</div>
  <strong>Answer:</strong> 33 integers. The +1 is essential — without it you undercount by one.
</div><div class="warning-box">On the ACT, "between 1 and 100" usually means <strong>inclusive</strong> unless it says "exclusive" or "not including." Always read the boundary conditions before counting.</div>`},
          {name:'Factors, Multiples & Divisibility', diff:'easy', expl:`A <strong>factor</strong> divides a number evenly; a <strong>multiple</strong> is the product of a number and an integer. The <strong>GCF</strong> (Greatest Common Factor) is the largest factor two numbers share; the <strong>LCM</strong> (Least Common Multiple) is the smallest multiple they share.<div class="formula-box">GCF: take shared prime factors at the lowest exponent<br>LCM: take all prime factors at the highest exponent<br>Handy check: GCF × LCM = product of the two numbers</div><div class="example-box">
  <strong>Question:</strong> Find the GCF and LCM of 24 and 36.
  <div class="step-box"><span class="step-num">1</span> Prime factorize: 24 = 2³ × 3, 36 = 2² × 3².</div>
  <div class="step-box"><span class="step-num">2</span> GCF: shared primes at lowest exponents → 2² × 3 = 12.</div>
  <div class="step-box"><span class="step-num">3</span> LCM: all primes at highest exponents → 2³ × 3² = 72.</div>
  <strong>Answer:</strong> GCF = 12, LCM = 72. Quick check: 24 × 36 = 864 = 12 × 72. ✔
</div><div class="warning-box">A classic trap: for consecutive integers, the product is divisible by n!. Example: the product of 4 consecutive integers is always divisible by 24 (= 4!). Also, the GCF can never exceed the smaller number, and the LCM can never be smaller than the larger one.</div>`},
          {name:'Fractions, Decimals & Percentages', diff:'medium', expl:`Fractions, decimals, and percentages are three ways of writing the same value. <strong>Percent change</strong> measures growth or shrink relative to the original amount.<div class="formula-box">Percent change = (new − old) ÷ old × 100%<br>Percent of a number: p% of x = (p/100) × x</div><div class="example-box">
  <strong>Question:</strong> A $40 shirt is on sale for $30. What is the percent decrease?
  <div class="step-box"><span class="step-num">1</span> Change = old − new = 40 − 30 = $10.</div>
  <div class="step-box"><span class="step-num">2</span> Divide by the original: 10 ÷ 40 = 0.25.</div>
  <div class="step-box"><span class="step-num">3</span> Convert to a percent: 0.25 × 100 = 25%.</div>
  <strong>Answer:</strong> 25% decrease. Always divide by the <strong>original</strong>, not the new value.
</div><div class="warning-box">Successive percent changes do <strong>not</strong> cancel. A 20% increase followed by a 20% decrease = 0.96× the original (−4%), not 100%. Work step-by-step on the running amount.</div>`},
          {name:'Ratios & Proportions', diff:'medium', expl:`A <strong>ratio</strong> compares two quantities (3:4). A <strong>proportion</strong> states two ratios are equal, and you solve it by <strong>cross-multiplying</strong>.<div class="formula-box">a/b = c/d ⟺ a × d = b × c</div><div class="example-box">
  <strong>Question:</strong> If 3 oranges cost $2, how much do 15 oranges cost?
  <div class="step-box"><span class="step-num">1</span> Set up the proportion: 3/2 = 15/x.</div>
  <div class="step-box"><span class="step-num">2</span> Cross-multiply: 3x = 15 × 2 = 30.</div>
  <div class="step-box"><span class="step-num">3</span> Solve: x = 30 ÷ 3 = 10.</div>
  <strong>Answer:</strong> $10. The ratio method: 15 is 5× the 3 oranges, so cost is 5 × $2 = $10.
</div><div class="warning-box">If a ratio is boys:girls = 3:4, treat the parts as 3x and 4x. Total = 7x. A common trap is adding the ratio parts as the actual count — 3 boys and 4 girls is only correct when x = 1.</div>`},
          {name:'Scientific Notation', diff:'easy', expl:`Scientific notation writes a number as a coefficient times a power of ten, keeping the coefficient between 1 and 10. It is how the ACT handles very large and very small numbers without long strings of zeros — expect it around population, distance, and measurement problems.<div class="formula-box">a × 10ⁿ, where 1 ≤ a < 10<br>Positive n → big numbers; negative n → small numbers<br>To compare two numbers, compare the exponent first, then the coefficient</div><div class="example-box">
  <strong>Question:</strong> Write 3.5 × 10⁶ in standard form, and 4.2 × 10⁻³ in standard form.
  <div class="step-box"><span class="step-num">1</span> Positive exponent: move the decimal 6 places right: 3.500000 → 3,500,000.</div>
  <div class="step-box"><span class="step-num">2</span> Negative exponent: move the decimal 3 places left: 4.2 → 0.0042.</div>
  <strong>Answer:</strong> 3,500,000 and 0.0042. Exponent positive → right; negative → left.
</div><div class="example-box">
  <strong>Question:</strong> A culture has 6 × 10⁴ cells, each 5 × 10⁻⁶ cm wide. If the cells line up end to end, how wide is the row?
  <div class="step-box"><span class="step-num">1</span> Multiply counts and sizes: (6 × 10⁴)(5 × 10⁻⁶).</div>
  <div class="step-box"><span class="step-num">2</span> Numbers and powers separately: 6 × 5 = 30, 10⁴ × 10⁻⁶ = 10⁻².</div>
  <div class="step-box"><span class="step-num">3</span> 30 × 10⁻² = 0.30 = 3 × 10⁻¹ cm.</div>
  <strong>Answer:</strong> 3 × 10⁻¹ cm. Combine coefficients, add exponents, then re-normalize.
</div><div class="warning-box">When multiplying in scientific notation: (a × 10ᵐ)(b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ, then re-normalize if the new coefficient is ≥ 10 (e.g., 12 × 10⁵ → 1.2 × 10⁶). For division, subtract exponents.</div>`},
          {name:'Mean, Median, Mode & Range', diff:'easy', expl:`Measures of center summarize a data set.<br>• <strong>Mean</strong>: sum ÷ count (the average)<br>• <strong>Median</strong>: middle value after sorting (average of two middle values)<br>• <strong>Mode</strong>: most frequent value<br>• <strong>Range</strong>: max − min<div class="example-box">
  <strong>Question:</strong> Find the mean, median, mode, and range of {4, 8, 3, 5, 4}.
  <div class="step-box"><span class="step-num">1</span> Sort: 3, 4, 4, 5, 8.</div>
  <div class="step-box"><span class="step-num">2</span> Mean = (3+4+4+5+8) ÷ 5 = 24 ÷ 5 = 4.8.</div>
  <div class="step-box"><span class="step-num">3</span> Median = middle (3rd) value = 4.</div>
  <div class="step-box"><span class="step-num">4</span> Mode = 4 (appears twice). Range = 8 − 3 = 5.</div>
  <strong>Answer:</strong> Mean 4.8, median 4, mode 4, range 5.
</div><div class="warning-box">An outlier pulls the <strong>mean</strong> but barely moves the <strong>median</strong>. If mean > median, the data is skewed right — a favorite ACT inference question.</div>`},
          {name:'Basic Probability', diff:'medium', expl:`Probability measures how likely an outcome is.<div class="formula-box">P(event) = favorable outcomes ÷ total outcomes<br>P(not A) = 1 − P(A)<br>P(A and B) = P(A) × P(B) (independent)<br>P(A or B) = P(A) + P(B) − P(both)</div><div class="example-box">
  <strong>Question:</strong> Roll one fair die. What is the probability of NOT rolling a 5?
  <div class="step-box"><span class="step-num">1</span> Total outcomes = 6.</div>
  <div class="step-box"><span class="step-num">2</span> P(5) = 1/6.</div>
  <div class="step-box"><span class="step-num">3</span> Complement: 1 − 1/6 = 5/6.</div>
  <strong>Answer:</strong> 5/6. Using the complement is almost always faster than counting "not" outcomes directly.
</div><div class="warning-box">Watch for <strong>with vs. without replacement</strong>. Drawing a card and putting it back keeps probabilities the same; not replacing it changes both the numerator and denominator for the next draw.</div>`},
          {name:'Order of Operations (PEMDAS)', diff:'easy', expl:`Always simplify in this order: <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right) → <strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right).<div class="example-box">
  <strong>Question:</strong> Evaluate 3 + 4 × 2.
  <div class="step-box"><span class="step-num">1</span> Multiplication before addition: 4 × 2 = 8.</div>
  <div class="step-box"><span class="step-num">2</span> Then add: 3 + 8 = 11.</div>
  <strong>Answer:</strong> 11 — <strong>not</strong> 14. Adding left-to-right first is the classic mistake.
</div><div class="warning-box">Two huge traps:<br>• −3² = −9 but (−3)² = 9 — the exponent applies only to the 3, not the minus sign, unless the minus is inside parentheses.<br>• With multiplication and division, work strictly left to right: 8 ÷ 2 × 4 = 16, not 1.</div>`}
        ]
      },
      {
        name: 'Algebra',
        topics: [
          {name:'Solving Linear Equations', diff:'easy', expl:`Get the variable alone on one side by doing the same operation to both sides of the equation — whatever you do to one side, you must do to the other. This keeps the equation balanced.<div class="example-box">
  <strong>Question:</strong> Solve 3x + 5 = 20.
  <div class="step-box"><span class="step-num">1</span> Subtract 5 from both sides: 3x = 15.</div>
  <div class="step-box"><span class="step-num">2</span> Divide both sides by 3: x = 5.</div>
  <div class="step-box"><span class="step-num">3</span> Check: 3(5) + 5 = 20 ✔</div>
  <strong>Answer:</strong> x = 5. Always plug back in to verify.
</div><div class="warning-box">If variables appear on both sides, collect them on one side <em>first</em>. If fractions are present, multiply every term by the LCD to clear them before solving. When a question asks "what value makes this equation true," the answer choices are usually integers — substitute them in to check quickly.</div>`},
          {name:'Linear Inequalities', diff:'medium', expl:`Solved like equations with one crucial exception: <strong>multiplying or dividing by a negative flips the inequality sign</strong>. Adding or subtracting never changes the direction.<div class="formula-box">−2x > 6 → divide by −2 → x < −3</div><div class="example-box">
  <strong>Question:</strong> Solve and graph −2x > 6.
  <div class="step-box"><span class="step-num">1</span> Divide both sides by −2.</div>
  <div class="step-box"><span class="step-num">2</span> Flip the sign: x < −3.</div>
  <div class="step-box"><span class="step-num">3</span> Graph: open circle at −3, arrow pointing left.</div>
  <strong>Answer:</strong> x < −3. Open circle because −3 is not included.
</div><div class="warning-box">Compound inequalities: "AND" graphs overlap (intersection); "OR" graphs combine (union). Absolute value: |x| < a becomes −a < x < a, but |x| > a splits into x < −a or x > a.</div>`},
          {name:'Evaluating Expressions', diff:'easy', expl:`Substitute the given values for the variables, then simplify using the order of operations. The most reliable technique is to wrap each substitution in parentheses so signs and exponents do not get lost.<div class="example-box">
  <strong>Question:</strong> If x = 3 and y = −1, evaluate 2x² − 3y.
  <div class="step-box"><span class="step-num">1</span> Substitute with parentheses: 2(3)² − 3(−1).</div>
  <div class="step-box"><span class="step-num">2</span> Exponent first: 2(9) − 3(−1).</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 18 + 3.</div>
  <strong>Answer:</strong> 21. Using parentheses around substitutions prevents sign errors.
</div><div class="example-box">
  <strong>Question:</strong> If a = 4 and b = −2, evaluate a² − 3ab + b².
  <div class="step-box"><span class="step-num">1</span> Substitute: (4)² − 3(4)(−2) + (−2)².</div>
  <div class="step-box"><span class="step-num">2</span> Powers: 16 − 3(4)(−2) + 4.</div>
  <div class="step-box"><span class="step-num">3</span> Multiply the middle term: 16 − (−24) + 4 = 16 + 24 + 4.</div>
  <strong>Answer:</strong> 44. Two negatives multiplied give a positive, so −3(4)(−2) = +24.
</div><div class="warning-box">The #1 source of careless errors is mishandling negatives: −3² = −9, but (−3)² = 9. When substituting a negative, wrap it in parentheses. On the calculator, enter negatives with parentheses too, and always re-read the expression once after substituting.</div>`},
          {name:'Combining Like Terms', diff:'easy', expl:`Like terms have the same variables raised to the same exponents. Combine them by adding or subtracting their coefficients only — the variable part stays untouched.<div class="example-box">
  <strong>Question:</strong> Simplify 3x² + 5x − 2x² + 7x.
  <div class="step-box"><span class="step-num">1</span> Group like terms: (3x² − 2x²) + (5x + 7x).</div>
  <div class="step-box"><span class="step-num">2</span> Combine x² terms: 3 − 2 = 1 → x².</div>
  <div class="step-box"><span class="step-num">3</span> Combine x terms: 5 + 7 = 12 → 12x.</div>
  <strong>Answer:</strong> x² + 12x. You cannot combine x² with x — different exponents.
</div><div class="warning-box">Constants combine only with constants, and different variables (x vs. y) never combine. Rewrite the expression with like terms adjacent before adding. A common trap is mistaking 2x for x² — check whether the answer choices distinguish them before you commit.</div>`},
          {name:'FOIL & Multiplying Binomials', diff:'medium', expl:`FOIL stands for <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast — the four products in (a + b)(c + d). Add the four results and combine any like terms in the middle.<div class="example-box">
  <strong>Question:</strong> Expand (x + 3)(x + 5).
  <div class="step-box"><span class="step-num">1</span> First: x × x = x².</div>
  <div class="step-box"><span class="step-num">2</span> Outer: x × 5 = 5x. Inner: 3 × x = 3x.</div>
  <div class="step-box"><span class="step-num">3</span> Last: 3 × 5 = 15.</div>
  <div class="step-box"><span class="step-num">4</span> Combine the middle terms: 5x + 3x = 8x.</div>
  <strong>Answer:</strong> x² + 8x + 15.
</div><div class="warning-box">Memorize the three perfect-square patterns — they appear constantly:<br>• (a + b)² = a² + 2ab + b²<br>• (a − b)² = a² − 2ab + b²<br>• (a + b)(a − b) = a² − b² (difference of squares)<br>Notice (x + 5)² = x² + 10x + 25 — the middle term is <strong>not</strong> optional.</div>`},
          {name:'Factoring Quadratics', diff:'medium', expl:`Factoring reverses FOIL: for x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>. Those two numbers become the constants in (x + _)(x + _).<div class="example-box">
  <strong>Question:</strong> Factor x² + 7x + 12.
  <div class="step-box"><span class="step-num">1</span> Look for two numbers whose product is 12 and sum is 7.</div>
  <div class="step-box"><span class="step-num">2</span> Factor pairs of 12: (1,12), (2,6), (3,4). The pair (3,4) sums to 7.</div>
  <div class="step-box"><span class="step-num">3</span> Write the binomials: (x + 3)(x + 4).</div>
  <div class="step-box"><span class="step-num">4</span> Verify with FOIL: x² + 4x + 3x + 12 = x² + 7x + 12 ✔</div>
  <strong>Answer:</strong> (x + 3)(x + 4).
</div><div class="warning-box">Watch the sign patterns:<br>• x² − bx + c → both factors negative<br>• x² + bx − c → opposite signs, bigger factor positive<br>• x² − b² → difference of squares (x + b)(x − b)<br>On the ACT, factoring is often the fastest route to solving — check whether the answer choices are factored or expanded first.</div>`},
          {name:'Solving Quadratic Equations', diff:'medium', expl:`Three methods to solve ax² + bx + c = 0:<br>1. <strong>Factoring</strong> — fastest when it works<br>2. <strong>Quadratic Formula</strong> — always works<br>3. <strong>Completing the square</strong> — useful for vertex form<div class="formula-box">x = [−b ± √(b² − 4ac)] / 2a<br>Discriminant D = b² − 4ac: D > 0 → 2 roots; D = 0 → 1 root; D < 0 → no real roots</div><div class="example-box">
  <strong>Question:</strong> Solve x² − 5x + 6 = 0 by factoring.
  <div class="step-box"><span class="step-num">1</span> Find two numbers multiplying to 6 and adding to −5: −2 and −3.</div>
  <div class="step-box"><span class="step-num">2</span> Factor: (x − 2)(x − 3) = 0.</div>
  <div class="step-box"><span class="step-num">3</span> Set each factor to zero: x = 2 or x = 3.</div>
  <strong>Answer:</strong> x = 2 and x = 3. Zero-product property: if ab = 0, then a = 0 or b = 0.
</div><div class="warning-box">Before solving, get the equation into standard form (everything on one side, = 0). If the discriminant is negative, the answer choices will include "no real solution" — do not force a fake answer.</div>`},
          {name:'Word Problems Setup', diff:'hard', expl:`The hardest part of word problems is translating English into math. Learn the keyword code:<br>• is / equals → =<br>• more than → +<br>• less than → − (order matters!)<br>• of → ×<br>• per → ÷ (rate)<br>• consecutive integers → x, x+1, x+2<div class="example-box">
  <strong>Question:</strong> The sum of three consecutive integers is 36. Find them.
  <div class="step-box"><span class="step-num">1</span> Define: let the integers be x, x+1, x+2.</div>
  <div class="step-box"><span class="step-num">2</span> Build the equation: x + (x+1) + (x+2) = 36.</div>
  <div class="step-box"><span class="step-num">3</span> Combine: 3x + 3 = 36 → 3x = 33 → x = 11.</div>
  <strong>Answer:</strong> 11, 12, 13. Always define your variable first, then build the equation piece by piece.
</div><div class="warning-box">"3 less than x" means x − 3, <strong>not</strong> 3 − x. "A is 4 more than B" means A = B + 4. Getting the order backwards is the most common setup error.</div>`}
        ]
      },
      {
        name: 'Functions',
        topics: [
          {name:'Function Notation', diff:'easy', expl:`f(x) reads as "f of x" — the output of function f when the input is x.<div class="example-box">
  <strong>Question:</strong> If f(x) = 2x + 3, what is f(4)?
  <div class="step-box"><span class="step-num">1</span> Replace x with 4: f(4) = 2(4) + 3.</div>
  <div class="step-box"><span class="step-num">2</span> Simplify: 8 + 3 = 11.</div>
  <strong>Answer:</strong> 11. Function notation is just substitution with a fancy name.
</div>`},
          {name:'Domain & Range', diff:'medium', expl:`<strong>Domain</strong> = all possible x-values (inputs); <strong>Range</strong> = all possible y-values (outputs).<div class="example-box">
  <strong>Question:</strong> For f(x) = √x, what is the domain?
  <div class="step-box"><span class="step-num">1</span> You cannot take the square root of a negative number in real functions.</div>
  <div class="step-box"><span class="step-num">2</span> So x must be ≥ 0.</div>
  <strong>Answer:</strong> Domain is x ≥ 0, or [0, ∞). Range is y ≥ 0 as well.
</div><div class="warning-box">Watch for division by zero and square roots of negatives when finding domains. Also watch endpoints: is the boundary included or excluded?</div>`},
          {name:'Function Transformations', diff:'medium', expl:`Transformations shift, stretch, and flip the parent graph.<div class="formula-box">y = f(x) + k → shift UP by k (k > 0)<br>y = f(x − h) → shift RIGHT by h<br>y = −f(x) → reflect over the x-axis<br>y = f(−x) → reflect over the y-axis<br>y = a·f(x) → vertical stretch by a (a > 1)</div><div class="example-box">
  <strong>Question:</strong> Starting from y = x², describe y = (x − 2)² + 3.
  <div class="step-box"><span class="step-num">1</span> (x − 2) shifts the graph RIGHT 2.</div>
  <div class="step-box"><span class="step-num">2</span> +3 shifts the graph UP 3.</div>
  <strong>Answer:</strong> Shift right 2, up 3. The vertex moves from (0,0) to (2,3).
</div><div class="warning-box">A common trap is reading (x − 2) as a leftward shift. Inside the function, horizontal changes go <strong>backwards</strong>: +h goes left, −h goes right.</div>`},
          {name:'Composition & Inverses', diff:'hard', expl:`<strong>Composition</strong> chains functions; an <strong>inverse</strong> undoes a function.<div class="formula-box">(f∘g)(x) = f(g(x)) — apply g first, then f<br>f⁻¹(f(x)) = x and f(f⁻¹(x)) = x</div><div class="example-box">
  <strong>Question:</strong> If f(x) = 2x + 1, find f⁻¹(x).
  <div class="step-box"><span class="step-num">1</span> Replace f(x) with y: y = 2x + 1.</div>
  <div class="step-box"><span class="step-num">2</span> Swap x and y: x = 2y + 1.</div>
  <div class="step-box"><span class="step-num">3</span> Solve for y: y = (x − 1)/2.</div>
  <strong>Answer:</strong> f⁻¹(x) = (x − 1)/2. An inverse undoes the original operation.
</div>`}
        ]
      },
      {
        name: 'Statistics & Probability',
        topics: [
          {name:'Interpreting Data & Graphs', diff:'easy', expl:`ACT Math often presents data in tables or graphs and asks you to extract trends, compare values, or draw conclusions. Before reading answer choices, identify what the axes/labels show and what the question is actually asking for.<div class="example-box">
  <strong>Question:</strong> A bar chart shows heights of students in two classes. Which class has the higher average?
  <div class="step-box"><span class="step-num">1</span> Read the y-axis values for each class.</div>
  <div class="step-box"><span class="step-num">2</span> Compare the clusters/means.</div>
  <strong>Answer:</strong> The class with taller bars on average. Graph questions reward reading the labels before doing any math.
</div>`},
          {name:'Probability & Counting', diff:'medium', expl:`Probability is favorable outcomes ÷ total outcomes. Counting problems use permutations (order matters) or combinations (order does not matter).<div class="formula-box">P(event) = favorable / total<br>Combinations: nCr = n! / (r!(n−r)!)<br>Permutations: nPr = n! / (n−r)!</div><div class="example-box">
  <strong>Question:</strong> A committee of 3 is chosen from 5 people. How many possible committees?
  <div class="step-box"><span class="step-num">1</span> Order does not matter → combination.</div>
  <div class="step-box"><span class="step-num">2</span> 5C3 = 5! / (3!·2!) = 10.</div>
  <strong>Answer:</strong> 10. If order mattered, use permutations instead.
</div>`},
          {name:'Distribution & Inference', diff:'medium', expl:`You may see distributions summarized by mean, median, mode, range, or standard deviation. A change in one value can shift mean and median differently — outliers pull the mean more than the median.<div class="warning-box">If a new extreme value is added to a data set, the mean moves more than the median. That is a very common ACT inference question.</div>`}
        ]
      },
      {
        name: 'Geometry',
        topics: [
          {name:'Triangles & Quadrilaterals', diff:'easy', expl:`Every triangle has these fundamentals:<br>• Angles sum to <strong>180°</strong><br>• Area = ½ × base × height<br>• Pythagorean theorem for right triangles: a² + b² = c²<br>• Side lengths: the longest side is opposite the largest angle<div class="example-box">
  <strong>Question:</strong> A triangle has angles 35° and 65°. What is the third angle?
  <div class="step-box"><span class="step-num">1</span> Sum of angles = 180°.</div>
  <div class="step-box"><span class="step-num">2</span> Third angle = 180 − 35 − 65 = 80°.</div>
  <strong>Answer:</strong> 80°.
</div>`},
          {name:'Circles', diff:'medium', expl:`Circle formulas to have memorized:<br>• <strong>Circumference:</strong> C = 2πr (or πd)<br>• <strong>Area:</strong> A = πr²<br>• Arc length (central angle θ in degrees): (θ/360) × 2πr<br>• Sector area: (θ/360) × πr²<div class="example-box">
  <strong>Question:</strong> Find the circumference of a circle with radius 7.
  <div class="step-box"><span class="step-num">1</span> C = 2πr = 2π(7) = 14π.</div>
  <strong>Answer:</strong> 14π.
</div><div class="warning-box">When a circle is drawn on the coordinate plane, the center and radius are often given or can be read from the equation (x − h)² + (y − k)² = r².</div>`},
          {name:'3D Geometry', diff:'medium', expl:`Key volume and surface-area formulas:<br>• <strong>Cube:</strong> V = s³, SA = 6s²<br>• <strong>Rectangular prism:</strong> V = lwh<br>• <strong>Cylinder:</strong> V = πr²h, SA = 2πr² + 2πrh<br>• <strong>Cone:</strong> V = (1/3)πr²h<br>• <strong>Sphere:</strong> V = (4/3)πr³, SA = 4πr²<div class="example-box">
  <strong>Question:</strong> A cylinder has radius 3 and height 10. Find its volume.
  <div class="step-box"><span class="step-num">1</span> V = πr²h.</div>
  <div class="step-box"><span class="step-num">2</span> V = π(3)²(10) = 90π.</div>
  <strong>Answer:</strong> 90π.
</div><div class="warning-box">Surface-area problems often require adding multiple face areas. Draw the net or label each face if you cannot visualize it.</div>`}
        ]
      },
      {
        name: 'Integrating Essential Skills',
        desc: '20% — multi-step real-world problems combining rates, percentages, averages, area/volume, and proportional reasoning.',
        topics: [
          {name:'Rates, Ratios & Proportional Reasoning', diff:'medium', expl:`Multi-step problems often hinge on ratios or rates: speed = distance/time, density = mass/volume, unit price = cost/quantity. Set up a proportion and keep units consistent.<div class="example-box">
  <strong>Question:</strong> A car travels 180 miles in 3 hours. At the same speed, how far in 5 hours?
  <div class="step-box"><span class="step-num">1</span> Rate = 180/3 = 60 mph.</div>
  <div class="step-box"><span class="step-num">2</span> Distance = 60 × 5 = 300 miles.</div>
  <strong>Answer:</strong> 300 miles. The rate stays constant; scale the time and distance together.
</div>`},
          {name:'Area, Surface Area & Volume Applications', diff:'medium', expl:`These problems apply geometry formulas inside word problems: find the area of a floor before buying tile, or the volume of a pool before filling it.<div class="warning-box">Draw a quick sketch and label the knowns/unknowns. The geometry is usually straightforward; the challenge is translating the wording into the right formula.</div>`}
        ]
      },
      {
        name: 'Modeling',
        desc: 'Interpret and refine models across math topics.',
        topics: [
          {name:'Interpreting Models', diff:'medium', expl:`Modeling questions give you an equation, graph, or table and ask what it represents or how it changes. Identify the variables, the rate of change, and any intercepts before answering.<div class="warning-box">The model is already provided — your job is to read it correctly, not rebuild it. Check units and whether the relationship is linear, quadratic, or exponential before choosing an answer.</div>`}
        ]
      }
    ]
  },
  english: {
    title: 'ACT English',
    desc: '50 questions · 35 minutes · Grammar, style & rhetoric. You read short passages and choose the best fix for each underlined phrase, so editing in context is everything.',
    categories: [
      {
        name: 'Conventions of Standard English',
        topics: [
          {name:'Commas', diff:'medium', expl:`The most-tested punctuation mark on the ACT. Master the five main uses and you will bank a lot of points.<br><br><strong>Use commas:</strong><br>• After introductory phrases<br>• Around nonessential clauses<br>• In lists<br>• Between coordinate adjectives<br>• Before a conjunction joining two complete sentences<br><br><strong>Don't use commas:</strong><br>• Between subject and verb<br>• With restrictive that clauses<br>• To join two complete sentences alone (comma splice)<br>• Just because you would pause when reading aloud<div class="example-box">
  <strong>Question:</strong> My oldest sister, who grew up in rural Ohio has a deep appreciation for quiet nights.
  A. NO CHANGE
  B. My oldest sister who grew up in rural Ohio, has
  C. My oldest sister, who grew up in rural Ohio, has
  D. My oldest sister who grew up in rural Ohio has
  <div class="step-box"><span class="step-num">1</span> Test the clause: removing it still leaves a complete sentence, so it is nonessential.</div>
  <div class="step-box"><span class="step-num">2</span> Nonessential clauses must be enclosed by commas on each side.</div>
  <div class="step-box"><span class="step-num">3</span> Only C places commas both before and after the clause.</div>
  <strong>Answer:</strong> C. Option A lacks the closing comma; B omits the opening comma; D wrongly treats the clause as essential.
</div><div class="warning-box">A comma between a subject and its verb is an automatic wrong answer. Decide commas by structure, not by how you would pause when reading aloud.</div>`},
          {name:'Semicolons & Colons', diff:'medium', expl:`<strong>Semicolons</strong> join two complete, related sentences WITHOUT a conjunction. Think of it as a soft period: either side must stand alone.<br><br><strong>Colons</strong> must follow a complete sentence and introduce something: a list, an explanation, or a quote.<div class="example-box">
  <strong>Question:</strong> The museum has an impressive collection; and the Sunday tours are free.
  A. NO CHANGE
  B. collection, and the Sunday tours are free
  C. collection. The Sunday tours are free
  D. collection the Sunday tours are free
  <div class="step-box"><span class="step-num">1</span> Both halves are complete sentences, so a splice needs a conjunction or stronger break.</div>
  <div class="step-box"><span class="step-num">2</span> B uses a comma plus "and," the standard way to join two independent clauses.</div>
  <strong>Answer:</strong> B. A comma plus a FANBOYS conjunction properly joins two independent clauses.
</div><div class="warning-box">A semicolon must never sit beside a FANBOYS conjunction. If the word after the semicolon is and/but/or, the answer is wrong.</div>`},
          {name:'Apostrophes & Dashes', diff:'easy', expl:`<strong>Apostrophes</strong> have two jobs: possession and contractions.<br><br>Possession: the dog's bone (one owner), the dogs' bones (many owners)<br>Contractions: it's = it is, don't = do not<br><br><strong>Its vs. It's:</strong> its (possessive, no apostrophe); it's = it is. If you can swap in "it is," use the apostrophe.<br><br><strong>Dashes</strong> set off dramatic interruptions; parentheses set off quieter asides. Both must open and close properly.<div class="example-box">
  <strong>Question:</strong> The summit — normally a demanding eight-hour climb, is a rite of passage.
  A. NO CHANGE
  B. climb — is
  C. climb, is
  D. climb: is
  <div class="step-box"><span class="step-num">1</span> The opener is a dash, so the closer must also be a dash.</div>
  <div class="step-box"><span class="step-num">2</span> With both dashes in place the sentence reads cleanly.</div>
  <strong>Answer:</strong> B. Match the opening dash with a closing dash.
</div>`},
          {name:'Sentence Structure: Fragments & Run-ons', diff:'medium', expl:`A <strong>fragment</strong> is incomplete: it lacks a subject, verb, or main clause. A <strong>run-on</strong> joins two complete sentences with no punctuation. A <strong>comma splice</strong> joins them with only a comma.<div class="example-box">
  <strong>Question:</strong> The lake froze early that year, skaters crossed it every day.
  A. NO CHANGE
  B. year and skaters crossed it every day
  C. year, and skaters crossed it every day
  D. year: and skaters crossed it every day
  <div class="step-box"><span class="step-num">1</span> Both halves are complete sentences, so a comma alone creates a splice.</div>
  <div class="step-box"><span class="step-num">2</span> We must add a conjunction or change the mark.</div>
  <div class="step-box"><span class="step-num">3</span> C joins a comma with "and," the correct combo.</div>
  <strong>Answer:</strong> C. A comma plus a FANBOYS conjunction properly joins two independent clauses.
</div><div class="warning-box">The shortest-looking option is not automatically right. Read both halves as full sentences first.</div>`}
        ]
      },
      {
        name: 'Production of Writing',
        topics: [
          {name:'Add/Delete Questions', diff:'medium', expl:`Should the writer add a sentence, or delete one? Ask three questions:<br><br>1. Does it advance the paragraph's <strong>main idea</strong>?<br>2. Does it add <strong>new, relevant</strong> information?<br>3. Does it match the <strong>tone</strong> of the passage?<br><br>The ACT values focused, concise paragraphs. If a sentence is off-topic, repeats an idea already stated, or belongs elsewhere, DELETE it.<div class="example-box">
  <strong>Question:</strong> A paragraph celebrates the honeybee's role in pollinating crops. The writer considers adding: "Honeybees can lift twice their body weight." Should it be added?
  A. Yes, because it provides a comforting new fact.
  B. No, because it mentions a trait unrelated to pollination.
  C. Yes, because all bee facts improve the essay.
  D. No, because it is grammatically incorrect.
  <div class="step-box"><span class="step-num">1</span> The paragraph's subject is pollination.</div>
  <div class="step-box"><span class="step-num">2</span> "Can lift twice body weight" is off-topic.</div>
  <strong>Answer:</strong> B. Reject the sentence because it shifts away from the focus.
</div><div class="warning-box">True and interesting are not success conditions. Focus and freshness are the questions.</div>`},
          {name:'Transitions', diff:'medium', expl:`Transition words signal the logical relationship between ideas. Read both surrounding sentences and name that relationship before choosing a word.<br><br>• Addition: furthermore, moreover, also<br>• Contrast: however, but, yet, in contrast<br>• Cause/Effect: therefore, thus, consequently<br>• Sequence: first, then, subsequently<br>• Example: for instance, for example<br><br>Match your selection to the same logic.<div class="example-box">
  <strong>Question:</strong> Many students cut back on sleep to study; consequently, they are exhausted.
  A. however
  B. consequently
  C. likewise
  D. first
  <div class="step-box"><span class="step-num">1</span> The relationship: little sleep causes exhaustion.</div>
  <div class="step-box"><span class="step-num">2</span> We need a cause-and-effect word.</div>
  <strong>Answer:</strong> B. "Consequently" marks the result.
</div><div class="warning-box">Do not choose a transition just because it sounds good. Name the relationship before you scan the options.</div>`},
          {name:'Organization & Paragraph Order', diff:'medium', expl:`Questions about moving sentences test logical flow.<br><br>Look for clues:<br>• <strong>Pronoun cues:</strong> "This theory…" needs a prior introduction<br>• <strong>Chronology:</strong> events in time order<br>• <strong>Topic sentences:</strong> first sentence introduces what follows<br><br>Strategy: read the sentences in the proposed new order. Does the flow feel smoother?<div class="example-box">
  <strong>Question:</strong> A paragraph begins with "This rival theory argues the opposite," but the first paragraph never describes that rival theory. Best fix?
  A. Delete the phrase
  B. Add a sentence describing the rival theory earlier
  C. Move it to the end
  D. No change
  <div class="step-box"><span class="step-num">1</span> "This rival theory" needs a clear reference already introduced.</div>
  <div class="step-box"><span class="step-num">2</span> The passage must introduce the theory first.</div>
  <strong>Answer:</strong> B. Supply the missing antecedent.
</div>`}
        ]
      },
      {
        name: 'Knowledge of Language',
        topics: [
          {name:'Conciseness & Redundancy', diff:'easy', expl:`The ACT prizes tight, efficient writing. When several answers are grammatically correct, the <strong>shortest</strong> one is usually best.<br><br>Common redundancies:<br>• past history → history<br>• completely finished → finished<br>• end result → result<br>• reason why → reason<br>• share together → share<div class="example-box">
  <strong>Question:</strong> Consider: "highly unique new innovation" — pick the cleanest fix.
  <div class="step-box"><span class="step-num">1</span> "Unique" means one-of-a-kind; "highly" and "new" both repeat that.</div>
  <div class="step-box"><span class="step-num">2</span> The clean version: "a unique innovation."</div>
  <strong>Answer:</strong> Drop the redundant words and keep the precise noun.
</div><div class="warning-box">Conciseness wins when it cuts only redundancy. Never cut a word that carries necessary meaning.</div>`},
          {name:'Tone & Style', diff:'medium', expl:`Match the passage's register. A formal argument should not use slang; a personal memoir should not sound like a clinical report.<br><br>Ask: What is the author's purpose and audience? Then choose wording that fits.<div class="example-box">
  <strong>Question:</strong> In a formal funding proposal: "the program is kind of a big deal".
  A. the program is kind of a big deal
  B. the program is quite significant
  C. the program rocks
  D. the program works
  <div class="step-box"><span class="step-num">1</span> The tone must be formal.</div>
  <div class="step-box"><span class="step-num">2</span> "Kind of a big deal" and "rocks" are informal.</div>
  <strong>Answer:</strong> B. Choose the option that matches the piece's formal register.
</div><div class="warning-box">Register, not correctness, is the test. Read the sentences around the blank and mirror their formality.</div>`}
        ]
      }
    ]
  },
  reading: {
    title: 'ACT Reading',
    desc: '36 questions · 35 minutes · Literary, Social Studies, Humanities, and Natural Science passages',
    categories: [
      {
        name: 'Key Ideas & Details (44–52%)',
        topics: [
          {name:'Main Idea / Central Theme', diff:'medium', expl:`The main idea is what the entire passage is about — its primary argument or thesis.<br><br>To find it:<br>• Read the first and last paragraphs carefully — the thesis often lives there.<br>• Ask: If I had to summarize this in one sentence, what would I say?<br>• Eliminate answers that are too narrow (just a detail) or too broad (goes beyond the text).<br><br><strong>ACT strategy:</strong> Wrong answers often sound plausible but focus on minor details rather than the core argument. The right answer is broad enough to cover the whole passage.`},
          {name:'Locating Specific Details', diff:'easy', expl:`These are look-up questions — the answer is stated directly in the passage.<br><br>Strategy:<br>1. Read the question and identify a keyword<br>2. Scan the passage for that keyword<br>3. Read 2-3 lines around it<br>4. Match to the answer choice<br><br>Don't rely on memory. Go back to the passage every time. The ACT will often use exact phrasing from the text in the right answer, and slightly twisted phrasing in wrong ones.`},
          {name:'Cause & Effect', diff:'medium', expl:`These questions ask why something happened or what resulted from an event.<br><br>Look for signal words: because, since, as a result, consequently, led to, caused, therefore, thus.<br><br>Strategy: Find the event in the passage, then look immediately before (for causes) or after (for effects). The ACT rarely makes you infer far — the relationship is usually stated nearby.<br><br>Beware of answer choices that reverse the cause and effect.`},
          {name:'Making Inferences', diff:'hard', expl:`An inference is a logical conclusion based on evidence in the text — NOT a guess.<br><br>Golden rule: <strong>Every correct inference must be directly supportable by the text.</strong> If you can't point to a specific line that supports it, it's probably wrong.<br><br>Example: If the passage says She slammed the door and didn't say goodbye, you can infer she was angry — but you CAN'T infer she hated the person (too strong, not directly supported).<br><br>ACT inferences are conservative. Pick the answer that requires the smallest logical leap.`}
        ]
      },
      {
        name: 'Craft & Structure (26–33%)',
        topics: [
          {name:'Vocabulary in Context', diff:'medium', expl:`These questions ask how a word is used most nearly to mean — as the word is USED among the passage, not its dictionary definition. The tested word is often a simple one with an unusual or secondary meaning.<br><br>Don't rely on your prior knowledge of the word. <strong>Go back and read the sentence</strong>, then predict what meaning fits before looking at the choices.<br><br>Example: "He had a <em>sharp</em> mind." Sharp here means intelligent/quick, not pointy/edged — and the surrounding sentences make that clear.<br><br>Plug your predicted meaning into the sentence mentally. The right answer should fit seamlessly in place of the word.`},
          {name:'Author\'s Purpose & Tone', diff:'medium', expl:`What is the author trying to accomplish? That's the purpose. The tone is the overall attitude the author takes toward the subject — and both together define the passage's personality.<br><br>Common purposes: to inform, to persuade, to entertain, to describe, to analyze, to criticize.<br><br><strong>Tone</strong> is the author's attitude: admiring, critical, neutral, humorous, concerned, hopeful, skeptical, etc.<br><br>How to identify: Look at word choice. "The policy was implemented" (neutral) vs. "The disastrous policy was imposed" (critical). Pay attention to adjectives and adverbs — they reveal the author's stance. Also ask: is the author agreeing, celebrating, warning, mocking?`},
          {name:'Text Structure', diff:'medium', expl:`How is the passage built? Common structures:<br><br>• <strong>Chronological:</strong> Events in time order<br>• <strong>Cause/Effect:</strong> Explains why something happened<br>• <strong>Compare/Contrast:</strong> Similarities and differences<br>• <strong>Problem/Solution:</strong> Identifies a problem and proposes solutions<br>• <strong>Claim/Evidence:</strong> Makes an argument and supports it<br><br>Identifying the structure helps with main idea, paragraph function, and organization questions. Ask: What is the author doing in this paragraph?<br><br><strong>Signal words:</strong> first, however, therefore, similarly, for example indicate structure.`},
          {name:'Point of View', diff:'medium', expl:`Perspective — whose eyes we see through — shapes every passage.<br><br><strong>First person</strong> (I, we): Author is a participant or narrator, inside the events.<br><strong>Second person</strong> (you): Rare — author addresses the reader directly.<br><strong>Third person limited</strong> (he, she): Narrator knows one character's thoughts.<br><strong>Third person omniscient</strong>: Narrator knows all characters' thoughts.<br><br>Identify who the "I" or the narrator is and what they can know. A first-person narrator's opinions are their own, NOT necessarily the author's, and certainly not an omniscient truth.<br><br>For paired passages especially: identify each author's perspective. Do they agree? Disagree? Approach the topic from different angles? The questions will ask you to compare them.`}
        ]
      },
      {
        name: 'Integration of Knowledge & Ideas (19–26%)',
        topics: [
          {name:'Claims & Evidence', diff:'medium', expl:`These questions ask which evidence best supports a claim, or what claim a piece of evidence supports.<br><br>Strategy:<br>1. Identify the claim in the question<br>2. Go to the passage and find where the author makes or supports that claim<br>3. Look for facts, statistics, examples, or quotes that back it up<br>4. Match to the right answer<br><br>Wrong answers often cite information from the wrong part of the passage, or twist the evidence to support a slightly different claim.`},
          {name:'Paired Passages', diff:'hard', expl:`Two passages on the same topic, often from different perspectives.<br><br>Approach:<br>1. Read Passage 1 and answer its questions<br>2. Read Passage 2 and answer its questions<br>3. Answer the comparison questions last (you'll have both fresh in mind)<br><br>Comparison questions ask:<br>• Where do the authors AGREE?<br>• Where do they DISAGREE?<br>• How would Author 1 respond to Author 2's argument?<br><br>Create a mental (or scratch-paper) Venn diagram of their positions.`},
          {name:'Visual/Quantitative Integration', diff:'medium', expl:`Some passages include a graph, chart, or table, and the questions combine its data with the passage's written claims.<br><br>These questions ask you to connect the data to the text. While 1-2 to 2 per test, they're highly mixable.<br><br>Strategy:<br>1. Read the question first — it tells you what trend or relationship to look for<br>2. Read the visual (its title, its labels, you current units) for the relevant values<br>3. Connect the data to what the passage says about that data<br>4. Test every answer against BOTH the visual AND the text<br><br>Eliminate anything that contradicts the graph OR the passage — the right answer must be consistent with both at the same time.`}
        ]
      }
    ]
  },
  science: {
    title: 'ACT Science',
    desc: '40 questions · 35 minutes · Optional add-on · Data analysis & reasoning. Read graphs and tables carefully, trace experiment designs, and weigh competing viewpoints — nearly every answer comes straight from the passage.',
    categories: [
      {
        name: 'Data Representation (38–50%)',
        topics: [
          {name:'Reading Graphs & Charts', diff:'easy', expl:`The most fundamental ACT Science skill. You'll see line graphs, bar charts, scatterplots, and pie charts. Questions on this topic rarely require memorized science facts — the answer is almost always sitting in the display if you read it correctly.<br><br>Before answering any question, spend 15 seconds orienting:<br>1. <strong>Read the axes labels</strong> — what's being measured?<br>2. <strong>Note the units</strong> — seconds? meters? percent?<br>3. <strong>Check the legend</strong> — what do different lines/bars/colors represent?<br>4. <strong>Spot the trend</strong> — increasing, decreasing, or no pattern?<br><br><strong>Types:</strong><br>• Line graphs: trends over time<br>• Bar charts: comparing categories<br>• Scatterplots: correlation between two variables<br>• Pie charts: parts of a whole<br><br>Most questions just require finding the right data point. Don't overthink — trace from the axis to the curve and back, and always confirm which series a question means.`},
          {name:'Reading Tables', diff:'easy', expl:`Tables present data in rows and columns. The key is knowing which row and column to look at. Table questions reward careful reading far more than science recall — the numbers you need are already on the page.<br><br>Strategy:<br>1. Read the column headers and row labels<br>2. Note any footnotes or conditions<br>3. For each question, identify exactly which cell(s) you need<br>4. Watch for patterns: as one variable increases, does another increase or decrease?<br><br>Many table questions are simple lookups. Others ask you to identify trends across multiple rows or columns. Take your time reading the table correctly — speed comes from accuracy, not rushing.`},
          {name:'Interpolation & Extrapolation', diff:'medium', expl:`<strong>Interpolation:</strong> Estimating a value BETWEEN known data points (for example, a value at a time between two measured times). It is usually reliable because you are filling a gap in an established trend.<br><br><strong>Extrapolation:</strong> Predicting a value BEYOND the given data (for example, past the last measured time). It is less certain because you extend a trend into a range the experiment never measured — the real relationship could bend.<br><br>Example: If a graph shows temperature rising 2° per minute from 20° at 0 min to 30° at 5 min, you can interpolate 26° at 3 min, or extrapolate 40° at 10 min — but only if the trend continues at a constant rate.`},
          {name:'Identifying Trends & Patterns', diff:'medium', expl:`Look for relationships between variables:<br><br>• <strong>Direct relationship:</strong> as one variable increases, the other increases<br>• <strong>Inverse relationship:</strong> as one increases, the other decreases<br>• <strong>No relationship:</strong> no clear pattern, the points scatter randomly<br>• <strong>Exponential:</strong> the curve gets steeper and steeper as values climb<br>• <strong>Plateau / logarithmic:</strong> the effect levels off after a certain point even as the input keeps rising<br><br>Pro tip: describe the trend in your own words before looking at answers — "as time increases, the population rises, then levels off." Then match your description against each choice so you are not tricked by a cleverly-worded answer that reverses the direction.`}
        ]
      },
      {
        name: 'Research Summaries (50–56%)',
        topics: [
          {name:'Experimental Design', diff:'medium', expl:`Every experiment has:<br><br>• <strong>Independent variable:</strong> what the scientist deliberately changes (the input, usually on the x-axis)<br>• <strong>Dependent variable:</strong> what is measured or observed — the result (usually the y-axis)<br>• <strong>Control variables:</strong> everything kept the same so the outcome can be blamed on the independent variable alone<br>• <strong>Control group:</strong> the baseline that receives no treatment or the standard treatment<br><br>Most Research Summary questions hinge on this setup. Naming the variable that was deliberately changed and the variable that was measured is the single best time investment for these passages.`},
          {name:'Comparing Experiments', diff:'medium', expl:`Often you'll see Experiment 1, Experiment 2, Experiment 3 — similar setups that each differ in exactly one key way.<br><br>Ask yourself: what changed between experiments? That changed variable is what the later experiment is trying to test or hold constant.<br><br>Questions may ask:<br>• Why was Experiment 2 done? (typically to test a different variable or confirm results)<br>• How would the results change if a variable were modified?<br>• What conclusion is consistent with BOTH experiments?<br><br>Make a quick mental table — what was the same, what was different, and what was the result — so you compare deliberately rather than scanning the passage repeatedly.`},
          {name:'Hypothesis Support', diff:'hard', expl:`A hypothesis is a proposed explanation. The results either support it, contradict it, or leave it open. Key question types:<br><br>• Do the results support the hypothesis? → Yes if the data match what the hypothesis predicts, No if it contradicts<br>• Which hypothesis is supported by the data? → Compare each hypothesis against the results<br>• What would support the hypothesis? → Predict what the data WOULD look like if the hypothesis were true<br><br>Be objective. Don't let what sounds right override what the data actually shows. On the ACT the data comes straight from the passage and is treated as correct.`}
        ]
      },
      {
        name: 'Conflicting Viewpoints',
        topics: [
          {name:'Understanding Multiple Hypotheses', diff:'hard', expl:`This passage type presents 2-4 different explanations for the same phenomenon (e.g., why dinosaurs went extinct). Each explains the same basic facts but with a different cause and often a different time scale or mechanism.<br><br>Strategy:<br>1. Read the phenomenon description first — what is everyone explaining?<br>2. Read Scientist 1's view and note what they believe and WHY<br>3. Read Scientist 2's view: where do they AGREE with Scientist 1? Where do they DISAGREE?<br>4. Repeat for any additional viewpoints.<br><br>Make a quick T-chart on scratch paper: points of agreement vs. points of disagreement. These are the most time-consuming passages; many students save them for last.`},
          {name:'Identifying Agreement & Disagreement', diff:'medium', expl:`These questions ask explicitly whether Scientist 1 and Scientist 2 would agree or disagree on a given point.<br><br>For AGREEMENT: Both must say it (or clearly imply it). If one doesn't mention it, you cannot say they agree.<br>For DISAGREEMENT: One must say (or imply) yes and the other no. If both are silent on a topic, there is no demonstrated disagreement.<br><br>Stick strictly to what is stated. Do not infer beliefs beyond what each viewpoint actually says.`},
          {name:'New Evidence Questions', diff:'hard', expl:`Which viewpoint would be most weakened or strengthened by newly presented evidence?<br><br>Approach:<br>1. Understand what the new evidence actually shows<br>2. Check each viewpoint: does this evidence support or undermine their claim?<br>3. If the evidence contradicts what a viewpoint predicts → weakened<br>4. If the evidence matches what a viewpoint predicts → strengthened<br><br>You accept the new evidence as given and decide whose position it supports; do not try to judge the evidence itself.`}
        ]
      },
      {
        name: 'Scientific Investigation (18–32%)',
        desc: 'Understand experimental design, variables, controls, and methods.',
        topics: [
          {name:'Experimental Design', diff:'medium', expl:`ACT Science passages often ask you to evaluate how well an experiment was designed. A strong experiment changes only one independent variable, holds all controls constant, and measures one clear dependent variable. When comparing studies, ask what changed between them and whether the groups are comparable.<br><br><strong>Key questions:</strong><br>• Was only one variable changed between groups?<br>• Were all other conditions kept the same?<br>• Is there a clear baseline or control group?<br>• Could another factor explain the difference?<br><br>Spotting weak design is half the battle — if the test asks why an experiment was repeated or why a control group exists, the answer is always about isolating one factor.`},
          {name:'Variables & Controls', diff:'easy', expl:`The three variable types that appear in almost every ACT Science Research Summary.<br><br>• <strong>Independent variable:</strong> what the scientist deliberately changes<br>• <strong>Dependent variable:</strong> what is measured as a result<br>• <strong>Control variables:</strong> everything kept the same so the result can be attributed to the independent variable alone<br><br><strong>Control group:</strong> the baseline that receives no treatment or a standard treatment — without it, you cannot say whether the treatment did anything.<br><br>If a question asks what was changed between two experiments, look for the one thing that differs; everything else is held constant on purpose.`},
          {name:'Interpreting Methods', diff:'medium', expl:`Science passages describe a procedure — a sequence of steps the researcher actually performed. Your job is to read that procedure and determine what each step was meant to measure or control.<br><br><strong>Reading strategy:</strong><br>1. Identify the goal of the passage before reading the details.<br>2. For each experimental group, list what was changed and what was measured.<br>3. Note the units and conditions — they determine whether a result is significant.<br>4. If the passage describes multiple trials, the repeated measurement is almost always the dependent variable.<br><br>A method question is rarely a fact recall — it is a careful reading of what the experiment actually did.`}
        ]
      }
    ]
  }
};
