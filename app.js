
// ╔══════════════════════════════════════════╗
// ║           DATA: ALL ACT TOPICS          ║
// ╚══════════════════════════════════════════╝
const data = {
  math: {
    title: 'ACT Math',
    desc: '45 questions · 50 minutes · 4 answer choices per question',
    categories: [
      {
        name: 'Pre-Algebra & Arithmetic',
        topics: [
          {name:'Number Types & Properties', diff:'easy', expl:`<strong>Real numbers</strong> include rational (fractions, decimals that end or repeat) and irrational numbers (like π and √2). <strong>Integers</strong> are whole numbers (…-2,-1,0,1,2…). Know the difference between <strong>prime</strong> (divisible only by 1 and itself), <strong>composite</strong>, even/odd, and positive/negative numbers.<br><br><strong>Key rules:</strong><br>• Product of two negatives = positive<br>• Sum of two evens = even<br>• Sum of two odds = even<br>• Product of odd × even = even<br><br><strong>ACT trap:</strong> How many integers between 1 and 100 are divisible by 3? Remember boundaries: inclusive vs exclusive counts.`},
          {name:'Factors, Multiples & Divisibility', diff:'easy', expl:`<strong>GCF (Greatest Common Factor):</strong> The largest number that divides evenly into two or more numbers. Find by listing factors or using prime factorization — keep only shared primes with the lowest exponents.<br><br><strong>LCM (Least Common Multiple):</strong> The smallest number that is a multiple of two or more numbers. Take all prime factors with the highest exponents.<br><br><strong>Divisibility rules:</strong><br>• 2: last digit even<br>• 3: sum of digits divisible by 3<br>• 4: last two digits divisible by 4<br>• 5: last digit 0 or 5<br>• 6: divisible by 2 AND 3<br>• 9: sum of digits divisible by 9<br>• 10: ends in 0<br><br><strong>ACT strategy:</strong> For consecutive integers problem, check if the product is divisible by n!.`},
          {name:'Fractions, Decimals & Percentages', diff:'medium', expl:`Three ways to express the same value.<br><br><strong>Conversions:</strong><br>• Fraction → Decimal: divide numerator by denominator<br>• Decimal → Percent: multiply by 100<br>• Percent → Fraction: put over 100 and simplify<br><br><strong>Percent change formula:</strong> <code>(new − old) / old × 100</code>. A $40 shirt on sale for $30 is a <strong>25% decrease</strong>.<br><br><strong>Advanced percent problems:</strong><br>• Successive increases/decreases don't cancel out!<br>• 15% of a number is 30 → <code>0.15x = 30</code> → <code>x = 200</code><br>• Mixture problems: weighted average = (part1 + part2) / total<br><br><strong>ACT tip:</strong> Convert everything to decimals or fractions before calculating.`},
          {name:'Ratios & Proportions', diff:'medium', expl:`A <strong>ratio</strong> compares two quantities (e.g., 3:4). A <strong>proportion</strong> says two ratios are equal: <code>a/b = c/d</code>.<br><br><strong>Cross-multiply</strong> to solve: <code>a × d = b × c</code>.<br><br>If 3 oranges cost $2, how much for 15 oranges? Set up <code>3/2 = 15/x</code>, cross-multiply: <code>3x = 30</code>, so <code>x = $10</code>.<br><br><strong>Key concepts:</strong><br>• Unit rates: miles per gallon = total miles ÷ total gallons<br>• Scale drawings: use ratio to convert drawing → real<br>• Proportions in similar figures: corresponding sides are proportional<br><br><strong>ACT trap:</strong> ratio of boys to girls is 3:4 — boys = 3x, girls = 4x, total = 7x.`},
          {name:'Scientific Notation', diff:'easy', expl:`Used for very large or very small numbers. Format: <code>a × 10ⁿ</code> where 1 ≤ a < 10.<br><br><code>3.5 × 10⁶ = 3,500,000</code> (move decimal right 6)<br><code>4.2 × 10⁻³ = 0.0042</code> (move decimal left 3)<br><br><strong>Operations:</strong><br>• Multiplication: <code>(a×10ᵐ)(b×10ⁿ) = ab × 10ᵐ⁺ⁿ</code><br>• Division: <code>(a×10ᵐ)/(b×10ⁿ) = (a/b) × 10ᵐ⁻ⁿ</code><br><br><strong>Common ACT task:</strong> Convert between standard form and scientific notation, or compare sizes. Positive exponent = large number, negative = small number.`},
          {name:'Mean, Median, Mode & Range', diff:'easy', expl:`<strong>Mean:</strong> Sum divided by count (the average).<br><strong>Median:</strong> Middle value when sorted. If two middle values, average them.<br><strong>Mode:</strong> Most frequent value.<br><strong>Range:</strong> Max − Min.<br><br><strong>Advanced:</strong><br>• Weighted mean: different values have different weights<br>• Missing value problem: use mean formula backwards<br>• Combined sets: new mean = (sum1 + sum2) / (n1 + n2)<br><br><strong>ACT favorite:</strong> An outlier pulls the mean but doesn't affect median much. If mean > median, distribution is skewed right.`},
          {name:'Basic Probability', diff:'medium', expl:`<strong>Probability = desired outcomes / total outcomes</strong><br><br>Probability of rolling a 5 on a die: <code>1/6</code>.<br>Probability of NOT rolling a 5: <code>1 − 1/6 = 5/6</code>.<br><br><strong>AND (both):</strong> multiply probabilities.<br><strong>OR (either):</strong> add probabilities, then subtract overlap.<br><br><strong>Key concepts:</strong><br>• With replacement: probabilities stay the same<br>• Without replacement: total decreases, probabilities change<br>• Mutually exclusive: P(A and B) = 0<br>• Independent: P(A and B) = P(A) × P(B)<br><br><strong>ACT tip:</strong> Count total outcomes systematically using lists or tree diagrams.`},
          {name:'Order of Operations (PEMDAS)', diff:'easy', expl:`<strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication/<strong>D</strong>ivision (left to right) → <strong>A</strong>ddition/<strong>S</strong>ubtraction (left to right).<br><br>Example: <code>3 + 4 × 2</code><br>= <code>3 + 8</code> (multiplication first!)<br>= <code>11</code> (NOT 14!)<br><br><strong>Common traps:</strong><br>• Negative numbers: <code>−3² = −9</code>, but <code>(−3)² = 9</code><br>• Fractions: treat numerator and denominator separately<br>• Absolute value: like parentheses — do first<br><br><strong>ACT strategy:</strong> Rewrite complex expressions step by step. Don't try to do it all in your head.`},
        ]
      },
      {
        name: 'Elementary Algebra',
        topics: [
          {name:'Solving Linear Equations', diff:'easy', expl:`Get the variable alone on one side. Whatever you do to one side, do to the other.<br><br>Example: <code>3x + 5 = 20</code><br>Subtract 5: <code>3x = 15</code><br>Divide by 3: <code>x = 5</code><br><br><strong>Advanced cases:</strong><br>• Variables on both sides: collect on one side first<br>• Fractions: multiply EVERYTHING by LCD first<br>• Decimals: multiply by power of 10 to clear decimals<br>• Distribution: expand first, then collect<br><br><strong>Always check:</strong> Plug answer back into original equation.`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-linear-equations-and-inequalities-easier/a/v2-sat-lesson-solving-linear-equations-and-inequalities'},
          {name:'Linear Inequalities', diff:'medium', expl:`Solved like equations, but with one crucial difference: <strong>if you multiply or divide by a negative number, flip the inequality sign.</strong><br><br>Example: <code>−2x > 6</code><br>Divide by −2: <code>x < −3</code> (flipped!)<br><br><strong>Graphing:</strong><br>• Open circle for < or > (point not included)<br>• Closed circle for ≤ or ≥ (point included)<br>• Shade direction: test a point (0,0)<br><br><strong>Compound inequalities:</strong><br>• AND: overlap of both graphs<br>• OR: union of both graphs<br><br><strong>Absolute value inequalities:</strong><br>• <code>|x| < a</code> → <code>−a < x < a</code><br>• <code>|x| > a</code> → <code>x < −a</code> or <code>x > a</code>`},
          {name:'Evaluating Expressions', diff:'easy', expl:`Plug in the given values and simplify.<br><br>Example: If <code>x = 3</code> and <code>y = −1</code>, evaluate <code>2x² − 3y</code>.<br><code>2(3)² − 3(−1)</code><br><code>= 2(9) + 3</code><br><code>= 18 + 3 = 21</code><br><br><strong>Common errors:</strong><br>• Forgetting order of operations inside the expression<br>• Mishandling negative signs — they're the #1 source of careless errors<br>• Confusing <code>−3²</code> (−9) with <code>(−3)²</code> (9)<br><br><strong>ACT strategy:</strong> Use parentheses liberally when substituting.`},
          {name:'Combining Like Terms', diff:'easy', expl:`Terms with the same variable and exponent can be combined by adding or subtracting their coefficients.<br><br>Example: <code>3x² + 5x − 2x² + 7x</code><br>= <code>(3x² − 2x²) + (5x + 7x)</code><br>= <code>x² + 12x</code><br><br><strong>Rules:</strong><br>• CAN combine: same variable, same exponent<br>• CANNOT combine: different exponents, different variables<br>• Constants can combine with each other<br><br><strong>Tip:</strong> Rearrange terms by grouping like terms together first, then combine.`},
          {name:'FOIL & Multiplying Binomials', diff:'medium', expl:`<strong>F</strong>irst <strong>O</strong>uter <strong>I</strong>nner <strong>L</strong>ast<br><br><code>(x + 3)(x + 5)</code><br>First: <code>x × x = x²</code><br>Outer: <code>x × 5 = 5x</code><br>Inner: <code>3 × x = 3x</code><br>Last: <code>3 × 5 = 15</code><br>Result: <code>x² + 8x + 15</code><br><br><strong>Special patterns to memorize:</strong><br>• <code>(a+b)² = a² + 2ab + b²</code><br>• <code>(a−b)² = a² − 2ab + b²</code><br>• <code>(a+b)(a−b) = a² − b²</code> (difference of squares)<br><br><strong>ACT shortcut:</strong> If you see a perfect square trinomial, factor instantly: <code>x² + 6x + 9 = (x+3)²</code>`},
          {name:'Factoring Quadratics', diff:'medium', expl:`Reverse of FOIL. Find two numbers that multiply to <code>c</code> and add to <code>b</code>.<br><br>Example: <code>x² + 7x + 12</code><br>What multiplies to 12 and adds to 7? <strong>3 and 4!</strong><br>Answer: <code>(x + 3)(x + 4)</code><br><br><strong>Cases:</strong><br>• <code>x² + bx + c</code>: find factors of c that sum to b<br>• <code>x² − bx + c</code>: both factors negative<br>• <code>x² + bx − c</code>: factors have opposite signs<br>• <code>ax² + bx + c</code>: use grouping or trial and error<br><br><strong>Difference of squares:</strong> <code>x² − 25 = (x+5)(x−5)</code><br><br><strong>Always check:</strong> Multiply your factors back to verify.`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:advanced-math-easier/x0fcc98a58ba3bea7:factoring-quadratic-and-polynomial-expressions-easier/a/v2-sat-lesson-factoring-quadratic-and-polynomial-expressions'},
          {name:'Solving Quadratic Equations', diff:'medium', expl:`Three methods:<br><br>1. <strong>Factoring:</strong> Set = 0, factor, set each factor = 0. Fastest when it works.<br><br>2. <strong>Quadratic Formula:</strong> For <code>ax² + bx + c = 0</code>:<br><code>x = [−b ± √(b² − 4ac)] / 2a</code><br>Works every time, but slower.<br><br>3. <strong>Completing the Square:</strong> Less common on ACT but useful for vertex form.<br><br><strong>The discriminant</strong> (<code>b² − 4ac</code>) tells you:<br>• Positive → 2 real roots<br>• Zero → 1 real root (repeated)<br>• Negative → 0 real roots (complex)<br><br><strong>ACT strategy:</strong> Try factoring first. If stuck, use the formula.`},
          {name:'Word Problems Setup', diff:'hard', expl:`The hardest part is translating English into math. Look for keywords:<br><br>• is / equals → <code>=</code><br>• more than → <code>+</code><br>• less than → <code>−</code> (order matters!)<br>• of → <code>×</code><br>• per → division or rate<br>• consecutive integers → <code>x, x+1, x+2</code><br>• older/younger → add/subtract years<br><br>Define your variable first: Let <code>x</code> = … then build the equation piece by piece.<br><br><strong>Common types:</strong> age, distance/rate/time, mixture, work, coin problems. Practice is the only way to get faster.`},
        ]
      },
      {
        name: 'Intermediate Algebra',
        topics: [
          {name:'Systems of Equations', diff:'medium', expl:`Two methods:<br><br><strong>Substitution:</strong> Solve one equation for a variable, plug into the other. Best when a variable has coefficient 1.<br><br><strong>Elimination:</strong> Add/subtract equations to cancel one variable. Multiply first if needed to get opposite coefficients.<br><br>Example: <code>x + y = 10</code> and <code>x − y = 4</code>. Add them: <code>2x = 14</code>, so <code>x = 7, y = 3</code>.<br><br><strong>Solution types:</strong><br>• 1 solution: lines intersect<br>• 0 solutions: parallel (same slope, different intercept)<br>• Infinite solutions: same line<br><br><strong>ACT tip:</strong> If coefficients are messy, substitution is often safer.`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-systems-of-linear-equations-easier/a/v2-sat-lesson-solving-systems-of-linear-equations'},
          {name:'Absolute Value Equations', diff:'medium', expl:`<code>|x| = 3</code> means <code>x = 3</code> OR <code>x = −3</code>. Absolute value gives distance from zero, so you always get two cases (unless it equals 0).<br><br>Example: <code>|2x − 1| = 5</code><br>Case 1: <code>2x − 1 = 5</code> → <code>x = 3</code><br>Case 2: <code>2x − 1 = −5</code> → <code>x = −2</code><br><br><strong>Inequalities:</strong><br>• <code>|x| < 4</code> → distance from zero is less than 4 → <code>−4 < x < 4</code><br>• <code>|x| > 4</code> → distance from zero is more than 4 → <code>x < −4</code> or <code>x > 4</code><br><br><strong>No solution:</strong> <code>|x| = −5</code> has no solution (absolute value can't be negative).`},
          {name:'Rational Expressions', diff:'hard', expl:`Fractions with variables. Key steps:<br><br>1. <strong>Factor</strong> numerator and denominator<br>2. <strong>Cancel</strong> common factors<br>3. Find <strong>restrictions</strong>: denominator ≠ 0<br><br>Example: <code>(x²−4)/(x+2) = (x+2)(x−2)/(x+2) = x−2</code> (but x ≠ −2!)<br><br><strong>Operations:</strong><br>• Multiplication: factor, cancel, multiply remaining<br>• Division: flip second fraction, then multiply<br>• Addition/Subtraction: find LCD first, then combine<br><br><strong>ACT warning:</strong> Always state restrictions. If original denominator is 0, that value is excluded.`},
          {name:'Exponents & Radicals', diff:'medium', expl:`Essential rules:<br>• <code>xᵃ × xᵇ = xᵃ⁺ᵇ</code><br>• <code>xᵃ / xᵇ = xᵃ⁻ᵇ</code><br>• <code>(xᵃ)ᵇ = xᵃᵇ</code><br>• <code>x⁻ᵃ = 1/xᵃ</code><br>• <code>x^(1/n) = ⁿ√x</code> (fractional exponents are roots!)<br><br>Example: <code>8^(2/3) = (³√8)² = 2² = 4</code>.<br><br><strong>Radical rules:</strong><br>• <code>√a × √b = √(ab)</code><br>• <code>√a / √b = √(a/b)</code><br>• CANNOT split over addition/subtraction!<br><br><strong>Rationalizing:</strong> Multiply by conjugate to eliminate radicals in denominator.`},
          {name:'Logarithms', diff:'hard', expl:`A logarithm is the inverse of an exponent.<br><br><code>log_b(x) = y</code> means <code>bʸ = x</code>.<br><br><strong>Key rules:</strong><br>• <code>log(xy) = log(x) + log(y)</code><br>• <code>log(x/y) = log(x) − log(y)</code><br>• <code>log(xⁿ) = n·log(x)</code><br>• <code>log_b(b) = 1</code> and <code>log_b(1) = 0</code><br><br><strong>Change of base:</strong> <code>log_b(a) = log(a) / log(b)</code> (any base)<br><br>ACT logs are straightforward — just rewrite in exponential form if stuck.`},
          {name:'Complex Numbers', diff:'hard', expl:`<code>i = √(−1)</code>, so <code>i² = −1</code>.<br><br>Complex numbers have form <code>a + bi</code>.<br>To add: <code>(3+2i) + (1−5i) = 4 − 3i</code><br>To multiply: FOIL as usual, then replace <code>i²</code> with <code>−1</code>.<br><br><strong>Powers of i cycle:</strong> <code>i¹=i, i²=−1, i³=−i, i⁴=1</code>, then repeats.<br><br><strong>Division:</strong> multiply by conjugate:<br><code>(3+2i)/(1−i) = (3+2i)(1+i) / ((1−i)(1+i)) = (3+5i+2i²) / (1−i²) = (1+5i) / 2</code>`},
          {name:'Sequences & Series', diff:'medium', expl:`<strong>Arithmetic:</strong> Add a constant difference each time. nth term: <code>aₙ = a₁ + (n−1)d</code>.<br><br><strong>Geometric:</strong> Multiply by a constant ratio each time. nth term: <code>aₙ = a₁ × rⁿ⁻¹</code>.<br><br>Example: 3, 6, 12, 24… is geometric with r=2. The 5th term: <code>3 × 2⁴ = 48</code>.<br><br><strong>Sums:</strong><br>• Arithmetic sum: <code>n/2 × (a₁ + aₙ)</code> or <code>n/2 × [2a₁ + (n−1)d]</code><br>• Geometric sum: <code>a₁(1−rⁿ)/(1−r)</code> for r ≠ 1<br><br>ACT usually just asks for the next term or a specific term.`},
        ]
      },
      {
        name: 'Coordinate Geometry',
        topics: [
          {name:'Slope of a Line', diff:'easy', expl:`<strong>Slope = rise/run = (y₂ − y₁)/(x₂ − x₁)</strong><br><br>Positive slope: line goes up to the right ↗<br>Negative slope: line goes down to the right ↘<br>Zero slope: horizontal line<br>Undefined slope: vertical line<br><br><strong>Relationships:</strong><br>• Parallel lines have <strong>equal</strong> slopes<br>• Perpendicular lines have <strong>negative reciprocal</strong> slopes (product = −1)<br><br><strong>From equation:</strong> In <code>y = mx + b</code>, m is the slope. In <code>Ax + By = C</code>, slope = <code>−A/B</code>.`},
          {name:'Equations of Lines', diff:'medium', expl:`<strong>Slope-intercept form:</strong> <code>y = mx + b</code> (m = slope, b = y-intercept)<br><strong>Point-slope form:</strong> <code>y − y₁ = m(x − x₁)</code><br><strong>Standard form:</strong> <code>Ax + By = C</code><br><br>Given two points, find slope first, then plug into point-slope form.<br><br><strong>Special cases:</strong><br>• Horizontal: <code>y = c</code> (slope = 0)<br>• Vertical: <code>x = c</code> (undefined slope, not a function!)<br><br>The ACT will ask you to identify or write the equation in any form.`},
          {name:'Distance & Midpoint Formulas', diff:'medium', expl:`<strong>Distance:</strong> <code>d = √[(x₂−x₁)² + (y₂−y₁)²]</code> — this is just the Pythagorean Theorem on the coordinate plane.<br><br><strong>Midpoint:</strong> <code>((x₁+x₂)/2, (y₁+y₂)/2)</code> — average the x's, average the y's.<br><br>Example: Midpoint of (2,5) and (8,−1) is <code>((2+8)/2, (5+(−1))/2) = (5, 2)</code>.<br><br><strong>3D extension:</strong> Add z-coordinate: <code>d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]</code><br><br><strong>ACT strategy:</strong> Distance formula is often hidden in Pythagorean problems.`},
          {name:'Circles in the Coordinate Plane', diff:'medium', expl:`Standard form: <code>(x − h)² + (y − k)² = r²</code><br>Center: <code>(h, k)</code>, Radius: <code>r</code><br><br>Example: <code>(x − 3)² + (y + 2)² = 25</code> has center (3, −2) and radius 5.<br><br><strong>Completing the square:</strong> If given <code>x² + y² + 6x − 4y = 12</code>, complete the square for both x and y to get standard form.<br><br><strong>Tangent lines:</strong> A tangent touches the circle at exactly one point. The radius to the tangent point is perpendicular to the tangent line.`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:circle-equations-easier/a/v2-sat-lesson-circle-equations'},
          {name:'Graphing Inequalities', diff:'medium', expl:`<code>y > 2x + 1</code> means shade ABOVE the line.<br><code>y < 2x + 1</code> means shade BELOW.<br><br><strong>Line styles:</strong><br>• Dashed for < or > (boundary not included)<br>• Solid for ≤ or ≥ (boundary included)<br><br>To test which side to shade, plug in (0,0): if it satisfies, shade that side.<br><br><strong>Systems of inequalities:</strong> Graph both, shade the overlapping region. The solution is the intersection.`},
        ]
      },
      {
        name: 'Plane Geometry',
        topics: [
          {name:'Angles & Parallel Lines', diff:'easy', expl:`When a line crosses two parallel lines:<br>• <strong>Corresponding angles</strong> are equal<br>• <strong>Alternate interior angles</strong> are equal<br>• <strong>Same-side interior angles</strong> sum to 180°<br>• <strong>Vertical angles</strong> are always equal<br><br>Supplementary angles sum to 180°. Complementary angles sum to 90°.<br><br><strong>Polygon angles:</strong><br>• Sum of interior angles: <code>(n−2) × 180°</code><br>• Each interior angle of regular polygon: <code>(n−2) × 180° / n</code>`},
          {name:'Triangles', diff:'medium', expl:`• All angles sum to <strong>180°</strong><br>• Area = <strong>½ × base × height</strong><br>• <strong>Pythagorean Theorem:</strong> <code>a² + b² = c²</code> (right triangles only)<br><br><strong>Special right triangles:</strong><br>30°-60°-90°: sides in ratio <code>x : x√3 : 2x</code><br>45°-45°-90°: sides in ratio <code>x : x : x√2</code><br><br><strong>Triangle Inequality:</strong> sum of any two sides > third side<br><br>The largest angle faces the longest side. ACT loves altitude problems in triangles.`},
          {name:'Similar & Congruent Triangles', diff:'medium', expl:`<strong>Congruent:</strong> Same shape AND size (SSS, SAS, ASA, AAS).<br><strong>Similar:</strong> Same shape, different size (AA is enough!).<br><br>In similar triangles, corresponding sides are <strong>proportional</strong>. If ΔABC ~ ΔDEF and AB=4, DE=8, BC=6, then EF=<strong>12</strong> (scale factor is 2).<br><br><strong>Area ratio:</strong> If sides are in ratio k:1, areas are in ratio <code>k²:1</code>.<br><br>ACT loves testing similarity with overlapping triangles and parallel lines.`},
          {name:'Quadrilaterals & Polygons', diff:'medium', expl:`<strong>Sum of interior angles</strong> of an n-sided polygon: <code>(n−2) × 180°</code><br><br>• Square: 4 equal sides, 4 right angles, Area = s²<br>• Rectangle: opposite sides equal, Area = l×w<br>• Parallelogram: Area = base×height (NOT side×side!)<br>• Trapezoid: Area = ½(b₁+b₂)×h (average of parallel sides × height)<br>• Rhombus: 4 equal sides, diagonals are perpendicular<br><br><strong>Regular polygons:</strong> all sides equal, all angles equal. Each interior angle = <code>(n−2) × 180° / n</code>`},
          {name:'Circles', diff:'medium', expl:`• <strong>Circumference:</strong> <code>C = 2πr</code> or <code>C = πd</code><br>• <strong>Area:</strong> <code>A = πr²</code><br>• <strong>Arc length:</strong> <code>(θ/360°) × 2πr</code><br>• <strong>Sector area:</strong> <code>(θ/360°) × πr²</code><br><br>An <strong>inscribed angle</strong> is half the measure of its intercepted arc. A central angle equals its arc. An angle inscribed in a semicircle is always 90°.<br><br><strong>Tangent properties:</strong> tangent ⊥ radius at point of contact. From external point, tangents to circle are equal length.`},
          {name:'3D Geometry', diff:'medium', expl:`• <strong>Cube:</strong> Volume = s³, Surface Area = 6s²<br>• <strong>Rectangular prism:</strong> V = l×w×h, SA = 2(lw+lh+wh)<br>• <strong>Cylinder:</strong> V = πr²h, SA = 2πr²+2πrh<br>• <strong>Cone:</strong> V = ⅓πr²h<br>• <strong>Sphere:</strong> V = ⁴⁄₃πr³, SA = 4πr²<br><br><strong>Space diagonal:</strong> For a rectangular prism: <code>d = √(l² + w² + h²)</code><br><br>ACT often asks for volume or surface area directly — just plug into the formula. They sometimes provide the formula in the question.`},
        ]
      },
      {
        name: 'Trigonometry',
        topics: [
          {name:'SOH-CAH-TOA', diff:'medium', expl:`For right triangles only:<br>• <strong>sin(θ) = Opposite/Hypotenuse</strong><br>• <strong>cos(θ) = Adjacent/Hypotenuse</strong><br>• <strong>tan(θ) = Opposite/Adjacent</strong><br><br>Example: In a right triangle with opposite=3 and hypotenuse=5, sin(θ)=3/5=0.6.<br><br>Use inverse functions (sin⁻¹ on calculator) to find the angle when you know the ratio.<br><br><strong>Angles of elevation/depression:</strong> Always measured from horizontal. Draw the horizontal line first.`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:right-triangle-trigonometry-easier/a/v2-sat-lesson-right-triangle-trigonometry'},
          {name:'Reciprocal Trig Functions', diff:'hard', expl:`• <strong>csc(θ) = 1/sin(θ)</strong><br>• <strong>sec(θ) = 1/cos(θ)</strong><br>• <strong>cot(θ) = 1/tan(θ)</strong><br><br>Rare on ACT, but good to know. If you see csc(θ)=2, rewrite as sin(θ)=1/2, then solve.<br><br>Also: <code>tan(θ) = sin(θ)/cos(θ)</code>.<br><br><strong>Key identity:</strong> <code>sin²θ + cos²θ = 1</code> (Pythagorean identity).`},
          {name:'Unit Circle & Special Angles', diff:'hard', expl:`Memorize these values:<br><br>| θ | sin | cos | tan |<br>|---|---|---|---|<br>| 0° | 0 | 1 | 0 |<br>| 30° | ½ | √3/2 | 1/√3 |<br>| 45° | √2/2 | √2/2 | 1 |<br>| 60° | √3/2 | ½ | √3 |<br>| 90° | 1 | 0 | undefined |<br><br><strong>Conversions:</strong> <strong>180° = π radians</strong>. Multiply by π/180 to convert.<br><br><strong>Reference angles:</strong> Find acute angle with x-axis, then determine sign based on quadrant.`},
          {name:'Law of Sines & Cosines', diff:'hard', expl:`For NON-right triangles:<br><br><strong>Law of Sines:</strong> <code>sin(A)/a = sin(B)/b = sin(C)/c</code><br>Use when you know: 2 angles + 1 side (AAS/ASA) or 2 sides + non-included angle (SSA).<br><br><strong>Law of Cosines:</strong> <code>c² = a² + b² − 2ab·cos(C)</code><br>Use when you know: 2 sides + included angle (SAS) or 3 sides (SSS).<br><br><strong>Ambiguous case (SSA):</strong> May have 0, 1, or 2 solutions.`},
        ]
      },
      {
        name: 'Functions',
        topics: [
          {name:'Function Notation', diff:'easy', expl:`<code>f(x)</code> means the output when the input is x.<br><br>If <code>f(x) = 2x + 3</code>, then <code>f(4) = 2(4) + 3 = 11</code>.<br><br>For <code>f(g(x))</code>, work inside out: compute <code>g(x)</code> first, then plug that into <code>f</code>.<br><br>Watch for: <code>f(x+1)</code> means replace every <code>x</code> with <code>(x+1)</code>.<br><br><strong>Key idea:</strong> f is the machine, x is the input, f(x) is the output.`},
          {name:'Domain & Range', diff:'medium', expl:`<strong>Domain:</strong> All possible x-values (inputs).<br><strong>Range:</strong> All possible y-values (outputs).<br><br><strong>Restrictions:</strong><br>• Denominator ≠ 0<br>• Under a square root must be ≥ 0<br>• Under a log must be > 0<br><br>Example: f(x) = √(x−2) has domain x ≥ 2. Range: y ≥ 0.<br><br><strong>Interval notation:</strong> [2, ∞) means 2 ≤ x < ∞. (2, ∞) means 2 < x < ∞.`},
          {name:'Function Transformations', diff:'medium', expl:`<code>f(x) + k</code> → shift UP by k<br><code>f(x) − k</code> → shift DOWN by k<br><code>f(x + k)</code> → shift LEFT by k (counterintuitive!)<br><code>f(x − k)</code> → shift RIGHT by k<br><code>−f(x)</code> → reflect across x-axis<br><code>f(−x)</code> → reflect across y-axis<br><code>a·f(x)</code> → vertical stretch if a>1, shrink if 0<a<1<br><br><strong>Combined:</strong> <code>−2f(x+3)</code> = shift left 3, stretch vertically by 2, reflect over x-axis.<br><br>ACT often tests: given a graph, what's the equation?`},
          {name:'Composition & Inverses', diff:'hard', expl:`<strong>Composition:</strong> <code>(f∘g)(x) = f(g(x))</code>. Plug g(x) into f.<br><br><strong>Inverse:</strong> Swap x and y, then solve for y. Notation: <code>f⁻¹(x)</code>.<br><br>Example: f(x) = 2x+3. Write y=2x+3, swap: x=2y+3, solve: y=(x−3)/2, so f⁻¹(x)=(x−3)/2.<br><br><strong>Graphically:</strong> inverse functions are reflections across the line y=x.<br><br><strong>Verification:</strong> <code>f(f⁻¹(x)) = x</code> and <code>f⁻¹(f(x)) = x</code>.`},
        ]
      },
      {
        name: 'Statistics & Probability',
        topics: [
          {name:'Counting Principles', diff:'medium', expl:`<strong>Fundamental Counting Principle:</strong> If event A has m outcomes and event B has n outcomes, then A followed by B has m×n outcomes.<br><br><strong>Permutations</strong> (order matters): <code>nPr = n!/(n−r)!</code><br><strong>Combinations</strong> (order doesn't matter): <code>nCr = n!/[r!(n−r)!]</code><br><br><strong>Tip:</strong> If arrangement or order → permutation. If group or committee → combination.<br><br><strong>Circular arrangements:</strong> (n−1)! for distinct objects around a circle.`},
          {name:'Advanced Probability', diff:'hard', expl:`<strong>AND (both):</strong> P(A and B) = P(A) × P(B|A)<br><strong>OR (either):</strong> P(A or B) = P(A) + P(B) − P(A and B)<br><strong>Conditional:</strong> P(A|B) = P(A and B)/P(B)<br><br>Example: Drawing two aces from a deck without replacement:<br>P = (4/52) × (3/51) = 12/2652 ≈ 0.0045<br><br>With replacement: (4/52) × (4/52) — much simpler.<br><br><strong>Mutually exclusive:</strong> P(A or B) = P(A) + P(B) (no overlap).<br><br><strong>Independent:</strong> P(A and B) = P(A) × P(B).`},
          {name:'Expected Value', diff:'hard', expl:`The weighted average of all possible outcomes.<br><br>Example: A game costs $5. You win $20 with probability 0.1, $10 with probability 0.2, and $0 otherwise. Expected value = 0.1(20) + 0.2(10) + 0.7(0) − 5 = 2+2+0−5 = <strong>−$1</strong>. On average, you lose $1 per play.<br><br><strong>Formula:</strong> EV = Σ [outcome × probability]<br><br>ACT expected value questions are rare — maybe 1 per test at most. Look for games, insurance, or raffle problems.`},
          {name:'Scatterplots & Lines of Best Fit', diff:'medium', expl:`A <strong>line of best fit</strong> (regression line) shows the trend in a scatterplot.<br><br>• Positive correlation: as x increases, y increases<br>• Negative correlation: as x increases, y decreases<br>• No correlation: no clear pattern<br><br>The ACT may ask you to estimate a value from the line or identify which equation best fits the data. Don't overthink — look at the overall trend, not individual points.<br><br><strong>Extrapolation warning:</strong> Predicting beyond the data range is risky.`},
        ]
      },
    ]
  },
  english: {
    title: 'ACT English',
    desc: '50 questions · 35 minutes · Grammar, style & rhetoric',
    categories: [
      {
        name: 'Punctuation',
        topics: [
          {name:'Commas', diff:'medium', expl:`The most-tested punctuation mark on the ACT.<br><br><strong>Use commas:</strong><br>• After introductory phrases: After the game, we went home.<br>• Around nonessential clauses: My dog, who is very old, sleeps all day.<br>• In lists: I bought apples, bananas, and oranges.<br>• Between coordinate adjectives: a cold, rainy day<br><br><strong>Don't use commas:</strong><br>• Between subject and verb: The cat, sat down.<br>• With restrictive that clauses (no commas around essential info).<br>• To join two complete sentences alone (comma splice!)<br><br><strong>Test:</strong> Remove the clause — does sentence still make sense? If yes, use commas.`, khan:'https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:digital-sat-grammar-practice/x0d47bcec73eb6c4b:boundaries-punctuation/a/grammar-guide-punctuation'},
          {name:'Semicolons', diff:'medium', expl:`A semicolon joins two complete, related sentences WITHOUT a conjunction.<br><br>Correct: I studied all night; I aced the test.<br>Wrong: I studied all night; and I aced the test. (don't use both)<br><br>Also correct with conjunctive adverbs: It rained; however, we still went.<br><br><strong>With transitions:</strong> The results were inconclusive; however, further research is needed.<br><br>Think of a semicolon as a soft period — it connects two ideas that belong together.`, khan:'https://www.khanacademy.org/humanities/grammar/punctuation-the-colon-semicolon-and-more/introduction-to-colons/v/linking-function-of-the-colon-the-colon-and-semicolon-punctuation-khan-academy'},
          {name:'Colons', diff:'medium', expl:`A colon must follow a <strong>complete sentence</strong> and introduces something: a list, an explanation, or a quote.<br><br>Correct: I need three things: milk, eggs, and bread.<br>Wrong: I need: milk, eggs, and bread. (I need is not a complete sentence.)<br><br>Correct: She had one goal: to win.<br><br>If you can replace the colon with namely or that is, it's probably right.<br><br><strong>After colon:</strong> Capitalize first word if it's a proper noun or complete sentence.`, khan:'https://www.khanacademy.org/humanities/grammar/punctuation-the-colon-semicolon-and-more/introduction-to-colons/v/the-colon-as-a-separator-the-colon-and-semicolon-punctuation-khan-academy'},
          {name:'Apostrophes', diff:'easy', expl:`Two uses only:<br><br>1. <strong>Possession:</strong> the dog's bone (singular), the dogs' bones (plural)<br>2. <strong>Contractions:</strong> it's = it is, don't = do not<br><br><strong>Its vs. It's:</strong> This is tested relentlessly. Its is possessive (like his/her). It's = it is. If you can replace with it is, use the apostrophe.<br><br>Wrong: The cat licked it's paw. (wrong — no apostrophe for possessive its)<br>Correct: The cat licked its paw.<br><br><strong>Plural nouns:</strong> Never use apostrophe for simple plurals: CDs, 1990s, apples.`},
          {name:'Dashes & Parentheses', diff:'medium', expl:`<strong>Dashes</strong> — set off dramatic interruptions or emphasis. More forceful than commas.<br><br>The answer — surprisingly — was wrong.<br><br><strong>Parentheses</strong> (like this) set off quieter asides, less emphasis than dashes.<br><br>If a dash opens an interruption, a second dash must close it (unless it ends the sentence). Same as commas for nonessential clauses — the sentence must make sense if you remove the material between dashes.`},
        ]
      },
      {
        name: 'Sentence Structure',
        topics: [
          {name:'Run-ons & Comma Splices', diff:'medium', expl:`A <strong>run-on</strong> joins two complete sentences with NO punctuation.<br>A <strong>comma splice</strong> joins them with ONLY a comma.<br><br>Wrong: I love pizza it's delicious. (run-on)<br>Wrong: I love pizza, it's delicious. (comma splice)<br><br>Four ways to fix:<br>1. Period: I love pizza. It's delicious.<br>2. Semicolon: I love pizza; it's delicious.<br>3. Comma + FANBOYS: I love pizza, and it's delicious.<br>4. Subordinating conjunction: I love pizza because it's delicious.`, khan:'https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:digital-sat-grammar-practice/x0d47bcec73eb6c4b:boundaries-linking-clauses/v/linking-clauses-video'},
          {name:'Sentence Fragments', diff:'easy', expl:`A fragment is an incomplete sentence — missing a subject, a verb, or standing as a dependent clause alone.<br><br>Wrong: Because the experiment failed. (dependent clause — needs a main clause)<br>Correct: Because the experiment failed, we started over.<br><br>Wrong: Running through the park on a sunny day. (no subject, no main verb)<br>Correct: I was running through the park on a sunny day.<br><br>On the ACT, if a sentence feels incomplete, it probably is. Read it aloud in your head.`},
          {name:'Parallel Structure', diff:'medium', expl:`Items in a list or comparison must have the same grammatical form.<br><br>Wrong: She likes swimming, biking, and to run. (mixing gerunds and infinitive)<br>Correct: She likes swimming, biking, and running.<br>Correct: She likes to swim, to bike, and to run.<br><br>Paired conjunctions too:<br>Wrong: He is not only smart but also works hard. (adjective vs. verb phrase)<br>Correct: He is not only smart but also hardworking.<br><br>If you hear an awkward rhythm in a list, suspect a parallelism error.`, khan:'https://www.khanacademy.org/humanities/grammar'},
          {name:'Verb Tense Consistency', diff:'medium', expl:`Don't shift tenses without a reason.<br><br>Wrong: She walked to the store and buys milk. (past → present for no reason)<br>Correct: She walked to the store and bought milk.<br><br>When a passage is in the past, stay in the past. When it's in the present, stay present. Only shift if the timeline actually changes.<br><br>Also: use <strong>past perfect</strong> (had walked) for an action completed before another past action.`},
        ]
      },
      {
        name: 'Grammar & Usage',
        topics: [
          {name:'Subject-Verb Agreement', diff:'medium', expl:`The verb must match the subject in number.<br><br>Singular subject → singular verb: The dog runs.<br>Plural subject → plural verb: The dogs run.<br><br><strong>Tricky cases:</strong><br>• Ignore prepositional phrases: The box of chocolates <strong>is</strong> on the table.<br>• Indefinite pronouns: each, everyone, anybody, neither, either are always singular<br>• None can be singular or plural depending on context<br>• Collective nouns: The team <strong>wins</strong> (one unit) vs The team <strong>disagree</strong> (individual members)`, khan:'https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:digital-sat-grammar-practice/x0d47bcec73eb6c4b:boundaries-punctuation/a/grammar-guide-punctuation'},
          {name:'Pronoun Agreement & Case', diff:'medium', expl:`<strong>Agreement:</strong> Pronouns match their antecedent in number.<br>Wrong: Each student must bring their book. (each is singular)<br>Correct: Each student must bring his or her book.<br><br><strong>Case:</strong><br>Subject: I, he, she, we, they, who<br>Object: me, him, her, us, them, whom<br><br>Correct: Between you and <strong>me</strong><br>Correct: <strong>Who</strong> called?<br>Correct: To <strong>whom</strong> did you speak?<br><br><strong>Test:</strong> Replace with he/him. He called → who. To him → whom.`},
          {name:'Modifiers: Dangling & Misplaced', diff:'hard', expl:`A modifier must be next to what it describes.<br><br><strong>Dangling modifier</strong> (nothing to modify):<br>Wrong: Walking to school, the rain started. (the rain wasn't walking!)<br>Correct: Walking to school, I got caught in the rain.<br><br><strong>Misplaced modifier</strong> (modifying wrong thing):<br>Wrong: I saw a dog riding my bike. (the dog was riding your bike?)<br>Correct: Riding my bike, I saw a dog.<br><br>Always check: is the introductory phrase describing the subject that immediately follows?`},
          {name:'Comparisons', diff:'medium', expl:`Compare like things only.<br><br>Wrong: Her grades are higher than her brother. (comparing grades to brother)<br>Correct: Her grades are higher than her brother's. (comparing grades to grades)<br><br><strong>Comparative vs. Superlative:</strong><br>Comparative (-er / more): for two things — better, faster, more beautiful<br>Superlative (-est / more): for three+ things — best, fastest, most beautiful<br><br>Wrong: Of the two options, this is the best.<br>Correct: Of the two options, this is the better.`},
          {name:'Adjectives vs. Adverbs', diff:'easy', expl:`<strong>Adjectives</strong> modify nouns: a quick runner<br><strong>Adverbs</strong> modify verbs, adjectives, or other adverbs (often end in -ly): ran quickly<br><br>Wrong: She sings beautiful. (needs adverb)<br>Correct: She sings beautifully.<br><br>With linking verbs (is, seems, feels, looks, smells), use adjectives:<br>Correct: The flower smells good. (not well — unless you're saying the flower is healthy!)<br><br><strong>Common pairs:</strong> good/well, bad/badly, real/really.`},
        ]
      },
      {
        name: 'Rhetorical Skills',
        topics: [
          {name:'Add/Delete Questions', diff:'medium', expl:`Should a sentence be added or deleted? Ask:<br><br>1. Does it relate to the paragraph's <strong>main idea</strong>?<br>2. Does it add <strong>new, relevant</strong> information?<br>3. Does it match the <strong>tone</strong> of the passage?<br><br>The ACT prefers essays that are focused and concise. If a sentence is off-topic or repeats something already said, DELETE it — even if it's factually true and well-written.<br><br>Read the sentences before and after; the right answer keeps the paragraph cohesive.`},
          {name:'Transitions', diff:'medium', expl:`Transition words signal logical relationships:<br><br>• <strong>Addition:</strong> furthermore, moreover, also, in addition<br>• <strong>Contrast:</strong> however, but, yet, on the other hand, nevertheless<br>• <strong>Cause/Effect:</strong> therefore, thus, consequently, as a result<br>• <strong>Sequence:</strong> first, then, subsequently, finally<br>• <strong>Example:</strong> for instance, for example, specifically<br><br>Read the two sentences the transition connects. What's their relationship? Pick the transition that matches that logic.`},
          {name:'Organization & Paragraph Order', diff:'medium', expl:`Questions about moving sentences or paragraphs test logical flow.<br><br>Look for clues:<br>• <strong>Pronouns:</strong> This theory… — the previous sentence must introduce the theory.<br>• <strong>Chronology:</strong> Events should be in time order.<br>• <strong>Topic sentences:</strong> A paragraph's first sentence should introduce its subject.<br><br>Tip: Read the sentences in the proposed new order. Does the flow feel smoother or more logical?`},
          {name:'Conciseness & Redundancy', diff:'easy', expl:`The ACT values tight, efficient writing. When multiple answers are grammatically correct, the <strong>shortest</strong> one is usually best.<br><br>Wrong: She returned back to the store. (returned already means went back)<br>Correct: She returned to the store.<br><br>Common redundancies to avoid:<br>• past history → history<br>• completely finished → finished<br>• advance planning → planning<br>• end result → result<br><br>If you can remove a word without changing meaning, remove it.`},
          {name:'Tone & Style', diff:'medium', expl:`Match the passage's register. A formal academic essay shouldn't use slang; a personal narrative shouldn't sound like a textbook.<br><br>Ask: What is the author's purpose? Who is the audience?<br><br>Wrong in formal essay: The results were totally awesome.<br>Correct: The results were significant.<br><br>Wrong in personal narrative: The individual proceeded to acquire sustenance.<br>Correct: I went to get some food.<br><br>Choose the option that sounds like the rest of the passage.`},
        ]
      },
      {
        name: 'Commonly Confused Words',
        topics: [
          {name:'Affect vs Effect', diff:'medium', expl:`<strong>Affect</strong> = verb (to influence): The weather affects my mood.<br><strong>Effect</strong> = noun (result): The effect was dramatic.<br><br>Rare: Effect can be a verb meaning to bring about (to effect change). Affect can be a noun in psychology (emotional affect). But 95% of the time: affect=verb, effect=noun.<br><br><strong>Memory trick:</strong> <strong>A</strong>ffect = <strong>A</strong>ction (verb). <strong>E</strong>ffect = <strong>E</strong>nd result (noun).`},
          {name:'Than vs Then', diff:'easy', expl:`<strong>Than</strong> = comparison: She is taller than me.<br><strong>Then</strong> = time/sequence: We ate, then we left.<br><br>If you're comparing, use than. If you're talking about what happened next, use then.<br><br><strong>Memory trick:</strong> <strong>Th</strong>an has <strong>a</strong> for comp<strong>a</strong>rison. <strong>Th</strong>en has <strong>e</strong> for tim<strong>e</strong>/sequ<strong>e</strong>nce.`},
          {name:'Who vs Whom', diff:'medium', expl:`<strong>Who</strong> = subject (does the action). <strong>Whom</strong> = object (receives the action).<br><br>Trick: Replace with he/him. If he fits, use who. If him fits, use whom.<br><br>___ called? → He called. → <strong>Who</strong><br>To ___ did you give it? → To him. → <strong>Whom</strong><br><br>The ACT tests this less often now, but it still appears.<br><br><strong>After preposition:</strong> almost always whom (to whom, with whom, for whom).`},
          {name:'Its vs It\'s', diff:'easy', expl:`<strong>It's</strong> = it is (contraction)<br><strong>Its</strong> = possessive (belongs to it)<br><br>Test: replace with it is. If the sentence still makes sense, use it's. If not, use its.<br><br>Correct: It's going to rain. (= It is going to rain. ✓)<br>Correct: The dog wagged its tail. (= The dog wagged it is tail. ✗ → use its)<br><br>This is one of the most-tested distinctions on the ACT.<br><br><strong>Possessive rule:</strong> His, hers, ours, yours, theirs, its — NO APOSTROPHE.`},
          {name:'Their/There/They\'re', diff:'easy', expl:`<strong>Their</strong> = possessive (belongs to them)<br><strong>There</strong> = location<br><strong>They're</strong> = they are<br><br>Correct: They're going to their house over there.<br><br><strong>Memory tricks:</strong><br>• Their has heir → inheritance/possession<br>• There has here → location<br>• They're has they + are<br><br>Don't let this be the question you miss — it's free points if you slow down and check.`},
        ]
      },
    ]
  },
  reading: {
    title: 'ACT Reading',
    desc: '36 questions · 40 minutes · 4 passage types',
    categories: [
      {
        name: 'Key Ideas & Details',
        topics: [
          {name:'Main Idea / Central Theme', diff:'medium', expl:`The main idea is what the entire passage is about — its primary argument or thesis.<br><br>To find it:<br>• Read the first and last paragraphs carefully — the thesis often lives there.<br>• Ask: If I had to summarize this in one sentence, what would I say?<br>• Eliminate answers that are too narrow (just a detail) or too broad (goes beyond the text).<br><br><strong>ACT strategy:</strong> Wrong answers often sound plausible but focus on minor details rather than the core argument. The right answer is broad enough to cover the whole passage.`},
          {name:'Locating Specific Details', diff:'easy', expl:`These are look-up questions — the answer is stated directly in the passage.<br><br>Strategy:<br>1. Read the question and identify a keyword<br>2. Scan the passage for that keyword<br>3. Read 2-3 lines around it<br>4. Match to the answer choice<br><br>Don't rely on memory. Go back to the passage every time. The ACT will often use exact phrasing from the text in the right answer, and slightly twisted phrasing in wrong ones.`},
          {name:'Cause & Effect', diff:'medium', expl:`These questions ask why something happened or what resulted from an event.<br><br>Look for signal words: because, since, as a result, consequently, led to, caused, therefore, thus.<br><br>Strategy: Find the event in the passage, then look immediately before (for causes) or after (for effects). The ACT rarely makes you infer far — the relationship is usually stated nearby.<br><br>Beware of answer choices that reverse the cause and effect.`},
          {name:'Making Inferences', diff:'hard', expl:`An inference is a logical conclusion based on evidence in the text — NOT a guess.<br><br>Golden rule: <strong>Every correct inference must be directly supportable by the text.</strong> If you can't point to a specific line that supports it, it's probably wrong.<br><br>Example: If the passage says She slammed the door and didn't say goodbye, you can infer she was angry — but you CAN'T infer she hated the person (too strong, not directly supported).<br><br>ACT inferences are conservative. Pick the answer that requires the smallest logical leap.`},
        ]
      },
      {
        name: 'Craft & Structure',
        topics: [
          {name:'Vocabulary in Context', diff:'medium', expl:`These questions ask what a word most nearly means as used in the passage.<br><br>Don't rely on your prior knowledge of the word — the ACT often tests secondary or uncommon meanings. <strong>Go back and read the sentence</strong>, then predict what meaning fits before looking at the choices.<br><br>Example: He had a <em>sharp</em> mind. Sharp here means intelligent/quick, not pointy/edged.<br><br>Plug your predicted meaning into the sentence mentally. The right answer should fit seamlessly.`},
          {name:'Author\'s Purpose & Tone', diff:'medium', expl:`What is the author trying to accomplish?<br><br>Common purposes: to inform, to persuade, to entertain, to describe, to analyze, to criticize.<br><br><strong>Tone</strong> is the author's attitude: admiring, critical, neutral, humorous, concerned, hopeful, skeptical, etc.<br><br>How to identify: Look at word choice. The policy was implemented (neutral) vs. The disastrous policy was imposed (critical). Pay attention to adjectives and adverbs — they reveal the author's stance.`},
          {name:'Text Structure', diff:'medium', expl:`How is the passage built? Common structures:<br><br>• <strong>Chronological:</strong> Events in time order<br>• <strong>Cause/Effect:</strong> Explains why something happened<br>• <strong>Compare/Contrast:</strong> Similarities and differences<br>• <strong>Problem/Solution:</strong> Identifies a problem and proposes solutions<br>• <strong>Claim/Evidence:</strong> Makes an argument and supports it<br><br>Identifying the structure helps with main idea, paragraph function, and organization questions. Ask: What is the author doing in this paragraph?<br><br><strong>Signal words:</strong> first, however, therefore, similarly, for example indicate structure.`},
          {name:'Point of View', diff:'medium', expl:`<strong>First person</strong> (I, we): Author is a participant or narrator<br><strong>Second person</strong> (you): Rare — author addresses the reader directly<br><strong>Third person limited</strong> (he, she): Narrator knows one character's thoughts<br><strong>Third person omniscient</strong>: Narrator knows all characters' thoughts<br><br>For paired passages especially: identify each author's perspective. Do they agree? Disagree? Approach the topic from different angles? The questions will ask you to compare them.`},
        ]
      },
      {
        name: 'Integration of Knowledge',
        topics: [
          {name:'Claims & Evidence', diff:'medium', expl:`These questions ask which evidence best supports a claim, or what claim a piece of evidence supports.<br><br>Strategy:<br>1. Identify the claim in the question<br>2. Go to the passage and find where the author makes or supports that claim<br>3. Look for facts, statistics, examples, or quotes that back it up<br>4. Match to the right answer<br><br>Wrong answers often cite information from the wrong part of the passage, or twist the evidence to support a slightly different claim.`},
          {name:'Paired Passages', diff:'hard', expl:`Two passages on the same topic, often from different perspectives.<br><br>Approach:<br>1. Read Passage 1 and answer its questions<br>2. Read Passage 2 and answer its questions<br>3. Answer the comparison questions last (you'll have both fresh in mind)<br><br>Comparison questions ask:<br>• Where do the authors AGREE?<br>• Where do they DISAGREE?<br>• How would Author 1 respond to Author 2's argument?<br><br>Create a mental (or scratch-paper) Venn diagram of their positions.`},
          {name:'Visual/Quantitative Integration', diff:'medium', expl:`Some passages include a graph, chart, or table.<br><br>These questions ask you to connect the data to the text. Usually 1-2 per test.<br><br>Strategy:<br>1. Read the question — it will tell you what to look for<br>2. Check the visual for the relevant data<br>3. Connect it to what the passage says about that data<br><br>Common: Based on the passage and the graph, which statement is true? Eliminate answers that contradict either the passage OR the graph. Both must support the right answer.`},
        ]
      },
      {
        name: 'Passage Types',
        topics: [
          {name:'Literary Narrative / Prose Fiction', diff:'medium', expl:`Excerpts from novels, short stories, or memoirs. Focus on characters, emotions, and relationships.<br><br>Key skills:<br>• Track the narrator's attitude and emotional shifts<br>• Identify character motivations (why did they do that?)<br>• Notice descriptive language and what it reveals<br>• Look for internal conflict or realization moments<br><br>These passages often have more inference questions. The right answer is the one most consistent with the character's personality and the story's tone.`},
          {name:'Social Studies', diff:'medium', expl:`Topics: history, economics, psychology, sociology, anthropology.<br><br>These passages are usually argument-driven. The author has a thesis and supports it with evidence.<br><br>Key skills:<br>• Identify the thesis in the first paragraph<br>• Track how each paragraph supports it<br>• Notice cause/effect relationships<br>• Pay attention to dates, names, and specific studies mentioned<br><br>Questions focus on the argument's logic: what claim is made, how is it supported, what counterarguments exist?`},
          {name:'Humanities', diff:'medium', expl:`Topics: art, music, philosophy, cultural criticism, personal essays.<br><br>These are often the most abstract passages. The author may be describing an artistic movement, analyzing a philosophical idea, or reflecting on a cultural phenomenon.<br><br>Key skills:<br>• Grasp the central thesis or aesthetic argument<br>• Understand the author's value judgments (what do they admire? criticize?)<br>• Track comparisons between artists, periods, or ideas<br>• Don't get lost in fancy language — focus on what the author is arguing`},
          {name:'Natural Sciences', diff:'medium', expl:`Topics: biology, chemistry, physics, astronomy, geology, medicine.<br><br>These passages explain scientific phenomena, experiments, or discoveries. They're dense with information but logically structured.<br><br>Key skills:<br>• Identify the main scientific concept being explained<br>• Track the sequence of a process or experiment<br>• Understand cause/effect relationships<br>• Don't panic if you don't know the science — everything you need is in the passage<br><br>These passages often have the most straightforward, factual questions. Go back to the text and find the answer.`},
        ]
      },
    ]
  },
  science: {
    title: 'ACT Science',
    desc: '40 questions · 40 minutes · Optional (+$4)',
    categories: [
      {
        name: 'Data Representation',
        topics: [
          {name:'Reading Graphs & Charts', diff:'easy', expl:`The most fundamental ACT Science skill. You'll see line graphs, bar charts, scatterplots, and pie charts.<br><br>Before answering questions, spend 15 seconds orienting:<br>1. <strong>Read the axes labels</strong> — what's being measured?<br>2. <strong>Note the units</strong> — seconds? meters? percent?<br>3. <strong>Check the legend</strong> — what do different lines/bars/colors represent?<br>4. <strong>Spot the trend</strong> — increasing, decreasing, or no pattern?<br><br><strong>Types:</strong><br>• Line graphs: trends over time<br>• Bar charts: comparing categories<br>• Scatterplots: correlation between two variables<br>• Pie charts: parts of a whole<br><br>Most questions just require finding the right data point. Don't overthink.`},
          {name:'Reading Tables', diff:'easy', expl:`Tables present data in rows and columns. The key is knowing which row and column to look at.<br><br>Strategy:<br>1. Read the column headers and row labels<br>2. Note any footnotes or conditions<br>3. For each question, identify exactly which cell(s) you need<br>4. Watch for patterns: as one variable increases, does another increase or decrease?<br><br>Many table questions are simple lookups. Others ask you to identify trends across multiple rows. Take your time reading the table correctly — speed comes from accuracy, not rushing.`},
          {name:'Interpolation & Extrapolation', diff:'medium', expl:`<strong>Interpolation:</strong> Estimating a value BETWEEN known data points. Usually reliable — just follow the trend.<br><br><strong>Extrapolation:</strong> Predicting a value BEYOND the given data. Less certain — you're extending the trend.<br><br>Example: If a graph shows temperature rising 2° per minute from 20° at 0 min to 30° at 5 min, you can interpolate 26° at 3 min, or extrapolate 40° at 10 min (assuming the trend continues).<br><br>ACT extrapolation questions usually say if the trend continues… — just extend the line.`},
          {name:'Identifying Trends & Patterns', diff:'medium', expl:`Look for relationships between variables:<br><br>• <strong>Direct relationship:</strong> as one increases, the other increases<br>• <strong>Inverse relationship:</strong> as one increases, the other decreases<br>• <strong>No relationship:</strong> no clear pattern<br>• <strong>Exponential:</strong> curve gets steeper and steeper<br>• <strong>Plateau:</strong> levels off after a certain point<br><br>Pro tip: Describe the trend in words before looking at the answer choices. Then match your description. This prevents you from being tricked by cleverly-worded wrong answers.`},
        ]
      },
      {
        name: 'Research Summaries',
        topics: [
          {name:'Experimental Design', diff:'medium', expl:`Every experiment has:<br><br>• <strong>Independent variable:</strong> What the scientist deliberately changes<br>• <strong>Dependent variable:</strong> What is measured/observed (the result)<br>• <strong>Control variables:</strong> Everything kept the same<br>• <strong>Control group:</strong> The baseline — receives no treatment or the standard treatment<br><br>Example: Testing if fertilizer helps plants grow. Independent = amount of fertilizer. Dependent = plant height. Controls = same water, light, soil. Control group = plants with no fertilizer.<br><br>Most Research Summary questions hinge on understanding this setup.`},
          {name:'Comparing Experiments', diff:'medium', expl:`Often you'll see Experiment 1, Experiment 2, Experiment 3 — similar but with one key difference.<br><br>Ask yourself: What changed between experiments? That changed variable is what the scientist is testing.<br><br>Questions may ask:<br>• Why was Experiment 2 done? (to test a different variable or confirm results)<br>• How would results change if we modified a variable?<br>• What conclusion is consistent with BOTH experiments?<br><br>Make a quick mental table: what was the same, what was different, and what was the result?`},
          {name:'Hypothesis Support', diff:'hard', expl:`A hypothesis is a proposed explanation. The results either support it or don't.<br><br>Key question types:<br>• Do the results support the hypothesis? → Yes if data matches prediction, No if it contradicts<br>• Which hypothesis is supported by the data? → Compare each hypothesis against results<br>• What would support the hypothesis? → Predict what data WOULD look like if the hypothesis were true<br><br>Be objective. Don't let what sounds right override what the data actually shows. The data is always right on the ACT.`},
        ]
      },
      {
        name: 'Conflicting Viewpoints',
        topics: [
          {name:'Understanding Multiple Hypotheses', diff:'hard', expl:`This passage type presents 2-4 different explanations for the same phenomenon (e.g., why did the dinosaurs go extinct?).<br><br>Strategy:<br>1. Read the phenomenon description first<br>2. Read Scientist 1's view and note: what do they believe? WHY?<br>3. Read Scientist 2's view. Note: where do they AGREE with Scientist 1? Where do they DISAGREE?<br>4. Repeat for any additional viewpoints<br><br>Make a quick T-chart on scratch paper: points of agreement vs. disagreement.<br><br>These are the most time-consuming questions. Some students save this passage for last.`},
          {name:'Identifying Agreement & Disagreement', diff:'medium', expl:`These questions ask explicitly: Scientist 1 and Scientist 2 would most likely agree/disagree on which point?<br><br>For AGREEMENT: Both must say it or clearly imply it. If one doesn't mention it, they might not disagree — but you can't say they agree.<br><br>For DISAGREEMENT: One must say (or imply) yes, the other no. If both are silent on a topic, there's no demonstrated disagreement.<br><br>Stick to what's actually stated. Don't infer beliefs beyond what each viewpoint explicitly says.`},
          {name:'New Evidence Questions', diff:'hard', expl:`Which viewpoint would be most weakened/supported by this new evidence?<br><br>Approach:<br>1. Understand what the new evidence shows<br>2. Check each viewpoint: does this evidence support or undermine their position?<br>3. If evidence contradicts what a viewpoint predicts → weakened<br>4. If evidence matches what a viewpoint predicts → strengthened<br><br>Example: If Scientist 1 says the event was fast and Scientist 2 says it was slow, and new evidence shows it happened in under 100 years, Scientist 1 is strengthened and Scientist 2 is weakened.`},
        ]
      },
      {
        name: 'Background Knowledge — Biology',
        topics: [
          {name:'Cell Structure', diff:'easy', expl:`You may need basic knowledge:<br>• <strong>Nucleus:</strong> contains DNA, controls the cell<br>• <strong>Mitochondria:</strong> produces energy (ATP) through cellular respiration<br>• <strong>Ribosomes:</strong> make proteins<br>• <strong>Cell membrane:</strong> controls what enters and exits<br>• <strong>Chloroplasts:</strong> in plant cells only — photosynthesis<br><br><strong>Prokaryotic vs Eukaryotic:</strong> Prokaryotes (bacteria) have no nucleus. Eukaryotes (plants, animals, fungi) have a nucleus and organelles.<br><br>The passage usually provides context, but knowing organelles helps you read faster.`},
          {name:'DNA, Genes & Proteins', diff:'medium', expl:`Basic facts that help on the ACT:<br>• DNA is the genetic blueprint<br>• DNA → RNA → Protein (Central Dogma)<br>• Genes are segments of DNA that code for proteins<br>• Mutations are changes in DNA sequence — they can be harmful, neutral, or beneficial<br>• <strong>Natural selection:</strong> organisms with advantageous traits survive and reproduce more<br><br>The ACT won't ask you to transcribe DNA to RNA cold, but passages may describe gene expression experiments.`},
          {name:'Ecology & Ecosystems', diff:'easy', expl:`• <strong>Food chains:</strong> producers → primary consumers → secondary consumers → decomposers<br>• <strong>Predator-prey:</strong> cycles — as prey increase, predators increase (with a lag), then prey decrease, predators decrease…<br>• <strong>Carrying capacity:</strong> maximum population an ecosystem can sustain<br>• <strong>Symbiosis:</strong> mutualism (both benefit), parasitism (one benefits, one harmed), commensalism (one benefits, one unaffected)<br><br>Common graph: population vs. time showing cyclical patterns.`},
        ]
      },
      {
        name: 'Background Knowledge — Chemistry',
        topics: [
          {name:'States of Matter', diff:'easy', expl:`• <strong>Solid:</strong> fixed shape & volume, particles packed tightly<br>• <strong>Liquid:</strong> fixed volume, takes shape of container<br>• <strong>Gas:</strong> no fixed shape or volume, particles spread out<br><br>Phase changes:<br>Melting (solid→liquid), Freezing (liquid→solid)<br>Vaporization/Boiling (liquid→gas), Condensation (gas→liquid)<br>Sublimation (solid→gas, like dry ice)<br><br>Water freezes at 0°C and boils at 100°C. These specific values are worth memorizing.<br><br><strong>Energy:</strong> Melting/boiling requires energy (endothermic). Freezing/condensing releases energy (exothermic).`},
          {name:'pH Scale', diff:'easy', expl:`<strong>pH 0-6:</strong> Acidic (more H⁺ ions) — lemon juice, stomach acid<br><strong>pH 7:</strong> Neutral — pure water<br><strong>pH 8-14:</strong> Basic/alkaline (more OH⁻ ions) — baking soda, bleach<br><br>Each pH unit is a 10× change in acidity. pH 3 is 10× more acidic than pH 4, and 100× more acidic than pH 5.<br><br>The ACT may test this in a passage about enzyme activity or water quality.<br><br><strong>Buffers:</strong> resist pH changes by absorbing/releasing H⁺ ions.`},
          {name:'Reaction Rates', diff:'medium', expl:`Reactions speed up when:<br>• <strong>Temperature increases</strong> (particles move faster, collide more)<br>• <strong>Concentration increases</strong> (more particles to collide)<br>• <strong>Surface area increases</strong> (more exposed to react)<br>• <strong>Catalysts are added</strong> (lower activation energy without being consumed)<br><br>Enzymes are biological catalysts. They're specific to their substrate (lock and key model).<br><br>These concepts appear frequently in Research Summary passages about chemical or biological experiments.`},
        ]
      },
      {
        name: 'Background Knowledge — Physics',
        topics: [
          {name:'Density & Buoyancy', diff:'easy', expl:`<strong>Density = Mass / Volume</strong><br><br>An object floats if its density is LESS than the fluid it's in. An object sinks if it's MORE dense.<br><br>Water density = 1 g/cm³. Objects with density < 1 float, > 1 sink.<br><br>This explains why ice floats (density ~0.92) and why hot air rises (heated air expands, becomes less dense).<br><br>The ACT loves density questions in science passages — they're really just math questions in disguise.`},
          {name:'Energy', diff:'medium', expl:`• <strong>Kinetic energy:</strong> energy of motion. KE = ½mv² (increases with mass and especially speed!)<br>• <strong>Potential energy:</strong> stored energy. Gravitational PE = mgh (mass × gravity × height)<br>• <strong>Conservation of energy:</strong> energy cannot be created or destroyed, only transformed (KE ↔ PE)<br><br>Example: A roller coaster at the top has max PE. As it drops, PE converts to KE. At the bottom, KE is max and PE is min.<br><br>Heat is energy transfer from hot to cold. Specific heat = energy needed to raise 1g by 1°C.`},
          {name:'Forces & Motion', diff:'medium', expl:`<strong>Newton's Laws:</strong><br>1st: Object at rest stays at rest; object in motion stays in motion (unless a force acts).<br>2nd: <code>F = ma</code> (Force = mass × acceleration)<br>3rd: Every action has an equal and opposite reaction.<br><br><strong>Gravity:</strong> pulls objects toward Earth at <code>g ≈ 9.8 m/s²</code>. All objects fall at the same rate (ignoring air resistance).<br><br><strong>Friction:</strong> opposes motion. Static friction (object at rest) > kinetic friction (object moving).<br><br><strong>Acceleration:</strong> rate of change of velocity. <code>a = Δv/Δt</code>.`},
        ]
      },
      {
        name: 'Background Knowledge — Earth & Space',
        topics: [
          {name:'Plate Tectonics', diff:'easy', expl:`Earth's crust is divided into plates that move.<br><br>• <strong>Convergent boundaries:</strong> plates collide → mountains, volcanoes, trenches<br>• <strong>Divergent boundaries:</strong> plates separate → new crust forms, mid-ocean ridges<br>• <strong>Transform boundaries:</strong> plates slide past each other → earthquakes<br><br>Fossils of the same species on different continents support continental drift. This is a classic ACT Conflicting Viewpoints topic — the passage may present different theories about what causes plate motion.`},
          {name:'Greenhouse Effect', diff:'medium', expl:`Greenhouse gases (CO₂, methane, water vapor) trap heat in Earth's atmosphere.<br><br>• Sunlight passes through the atmosphere and warms the Earth<br>• Earth radiates heat back as infrared<br>• Greenhouse gases absorb some of this infrared, keeping the planet warm<br>• More greenhouse gases = more heat trapped = global warming<br><br>This topic appears in Data Representation and Conflicting Viewpoints passages. Be prepared to interpret graphs of CO₂ vs. temperature over time.`},
          {name:'The Solar System', diff:'easy', expl:`• Planets orbit the Sun in elliptical (nearly circular) paths<br>• Inner planets (Mercury, Venus, Earth, Mars): rocky, small<br>• Outer planets (Jupiter, Saturn, Uranus, Neptune): gas giants, large<br>• <strong>Gravity</strong> keeps planets in orbit — stronger when closer to the Sun<br>• The Moon orbits Earth; its gravity causes tides<br><br>ACT passages may describe discoveries about exoplanets or compare planetary atmospheres. The science is explained in the passage — just read carefully.`},
        ]
      },
    ]
  },
  "past tests": {
    title: 'Past Tests',
    desc: 'Full-length ACT practice tests',
    categories: [
      {
        name: 'Math Section',
        topics: [
          {name: 'Math Test 1', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%201.pdf?id=163821451'}
        ]
      }
    ]
  }
};
const mathQuestionBank = {
  "Number Types & Properties": [
    {
      "q": "How many prime numbers are between 1 and 20?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 2,
      "explanation": "The primes between 1 and 20 are 2, 3, 5, 7, 11, 13, 17, 19. That is 8 primes."
    },
    {
      "q": "What is the product of (-4) × (-6)?",
      "options": [
        "-24",
        "24",
        "-10",
        "10"
      ],
      "answer": 1,
      "explanation": "The product of two negative numbers is always positive: (-4) × (-6) = 24."
    },
    {
      "q": "Which statement is always true?",
      "options": [
        "The sum of two odd numbers is odd",
        "The sum of two even numbers is even",
        "The product of two even numbers is odd",
        "The sum of an even and odd is even"
      ],
      "answer": 1,
      "explanation": "The sum of two even numbers is always even. The sum of two odds is even. The sum of even+odd is odd."
    },
    {
      "q": "How many integers between 1 and 100 are divisible by 3?",
      "options": [
        "32",
        "33",
        "34",
        "35"
      ],
      "answer": 1,
      "explanation": "100 ÷ 3 = 33.33, so there are 33 integers divisible by 3 (3, 6, 9, ..., 99)."
    },
    {
      "q": "Which of the following is an irrational number?",
      "options": [
        "√9",
        "√16",
        "√2",
        "√25"
      ],
      "answer": 2,
      "explanation": "√2 is irrational because its decimal expansion never repeats or terminates. √9=3, √16=4, √25=5 are integers."
    },
    {
      "q": "Which statement is true about Number Types & Properties?",
      "options": [
        "Product of two negatives = positive",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Product of two negatives = positive"
    },
    {
      "q": "True or False: Sum of two odds = even",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Number Types & Properties."
    },
    {
      "q": "True or False: Product of odd × even = even",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Number Types & Properties."
    }
  ],
  "Factors, Multiples & Divisibility": [
    {
      "q": "What is the GCF of 36 and 54?",
      "options": [
        "6",
        "9",
        "12",
        "18"
      ],
      "answer": 3,
      "explanation": "36 = 2² × 3², 54 = 2 × 3³. Common factors with lowest exponents: 2¹ × 3² = 18."
    },
    {
      "q": "What is the LCM of 8 and 12?",
      "options": [
        "24",
        "36",
        "48",
        "96"
      ],
      "answer": 0,
      "explanation": "LCM uses highest exponents: 8 = 2³, 12 = 2² × 3. LCM = 2³ × 3 = 24."
    },
    {
      "q": "Which number is divisible by 6?",
      "options": [
        "112",
        "123",
        "216",
        "401"
      ],
      "answer": 2,
      "explanation": "A number divisible by 6 must be divisible by both 2 and 3. 216 is even and its digits sum to 9, which is divisible by 3."
    },
    {
      "q": "Which number is divisible by 9?",
      "options": [
        "123",
        "234",
        "345",
        "456"
      ],
      "answer": 1,
      "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. 2+3+4=9, so 234 is divisible by 9."
    },
    {
      "q": "Which statement is true about Factors, Multiples & Divisibility?",
      "options": [
        "2: last digit even",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: 2: last digit even"
    },
    {
      "q": "True or False: 4: last two digits divisible by 4",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Factors, Multiples & Divisibility."
    },
    {
      "q": "True or False: 5: last digit 0 or 5",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Factors, Multiples & Divisibility."
    },
    {
      "q": "True or False: 6: divisible by 2 AND 3",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Factors, Multiples & Divisibility."
    }
  ],
  "Fractions, Decimals & Percentages": [
    {
      "q": "A shirt costs $40 and is on sale for $30. What percent decrease is this?",
      "options": [
        "20%",
        "25%",
        "30%",
        "33%"
      ],
      "answer": 1,
      "explanation": "Percent change = (new - old) / old × 100 = (30-40)/40 × 100 = -25%. The absolute decrease is 25%."
    },
    {
      "q": "What is 0.75 as a percent?",
      "options": [
        "7.5%",
        "75%",
        "0.75%",
        "750%"
      ],
      "answer": 1,
      "explanation": "To convert a decimal to a percent, multiply by 100: 0.75 × 100 = 75%."
    },
    {
      "q": "If 15% of a number is 30, what is the number?",
      "options": [
        "100",
        "150",
        "200",
        "450"
      ],
      "answer": 2,
      "explanation": "Set up the equation: 0.15x = 30. Divide both sides by 0.15: x = 30 / 0.15 = 200."
    },
    {
      "q": "A price increases by 20%, then decreases by 20%. The final price is:",
      "options": [
        "The same as the original",
        "4% less than the original",
        "4% more than the original",
        "20% less than the original"
      ],
      "answer": 1,
      "explanation": "Successive increases/decreases don't cancel out. If original is $100: $100 × 1.2 = $120, then $120 × 0.8 = $96. That's 4% less than original."
    },
    {
      "q": "Which equation represents the formula in Fractions, Decimals & Percentages?",
      "options": [
        "0.15x  =  30",
        " 30 = 0.15x ",
        "0.15x  ×  30",
        "0.15x  +  30"
      ],
      "answer": 0,
      "explanation": "The correct formula is 0.15x = 30."
    },
    {
      "q": "Which statement is true about Fractions, Decimals & Percentages?",
      "options": [
        "Fraction → Decimal: divide numerator by denominator",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Fraction → Decimal: divide numerator by denominator"
    },
    {
      "q": "True or False: Percent → Fraction: put over 100 and simplify",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Fractions, Decimals & Percentages."
    },
    {
      "q": "True or False: Successive increases/decreases don't cancel out!",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Fractions, Decimals & Percentages."
    },
    {
      "q": "True or False: 15% of a number is 30 → 0.15x = 30 → x = 200",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Fractions, Decimals & Percentages."
    }
  ],
  "Ratios & Proportions": [
    {
      "q": "If the ratio of boys to girls is 3:4 and there are 21 boys, how many girls are there?",
      "options": [
        "24",
        "28",
        "32",
        "35"
      ],
      "answer": 1,
      "explanation": "Set up proportion: 3/4 = 21/x. Cross-multiply: 3x = 84, so x = 28."
    },
    {
      "q": "A car travels 300 miles on 10 gallons of gas. What is the unit rate (miles per gallon)?",
      "options": [
        "20 mpg",
        "25 mpg",
        "30 mpg",
        "35 mpg"
      ],
      "answer": 2,
      "explanation": "Unit rate = total miles ÷ total gallons = 300 ÷ 10 = 30 mpg."
    },
    {
      "q": "On a map, 1 inch = 5 miles. If two cities are 3.5 inches apart on the map, what is the actual distance?",
      "options": [
        "12.5 miles",
        "15 miles",
        "17.5 miles",
        "20 miles"
      ],
      "answer": 2,
      "explanation": "Actual distance = 3.5 inches × 5 miles/inch = 17.5 miles."
    },
    {
      "q": "Which equation represents the formula in Ratios & Proportions?",
      "options": [
        "a/b  =  c/d",
        " c/d = a/b ",
        "a/b  ×  c/d",
        "a/b  +  c/d"
      ],
      "answer": 0,
      "explanation": "The correct formula is a/b = c/d."
    },
    {
      "q": "Which statement is true about Ratios & Proportions?",
      "options": [
        "Unit rates: miles per gallon = total miles ÷ total gallons",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Unit rates: miles per gallon = total miles ÷ total gallons"
    },
    {
      "q": "True or False: Proportions in similar figures: corresponding sides are proportional",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Ratios & Proportions."
    }
  ],
  "Scientific Notation": [
    {
      "q": "What is 5,200,000 in scientific notation?",
      "options": [
        "5.2 × 10^5",
        "5.2 × 10^6",
        "52 × 10^5",
        "5.2 × 10^7"
      ],
      "answer": 1,
      "explanation": "Move the decimal 6 places to the left: 5.2 × 10^6. The coefficient must be between 1 and 10."
    },
    {
      "q": "What is the product of (2 × 10^3) and (3 × 10^4)?",
      "options": [
        "6 × 10^7",
        "6 × 10^12",
        "6 × 10^1",
        "6 × 10^4"
      ],
      "answer": 0,
      "explanation": "Multiply coefficients: 2 × 3 = 6. Add exponents: 10^3 × 10^4 = 10^(3+4) = 10^7. Result: 6 × 10^7."
    },
    {
      "q": "Which is the largest?",
      "options": [
        "2 × 10^5",
        "3 × 10^4",
        "5 × 10^3",
        "9 × 10^2"
      ],
      "answer": 0,
      "explanation": "Compare exponents first: 10^5 > 10^4 > 10^3 > 10^2. So 2 × 10^5 is largest."
    },
    {
      "q": "Which equation represents the formula in Scientific Notation?",
      "options": [
        "3.5 × 10⁶  =  3,500,000",
        " 3,500,000 = 3.5 × 10⁶ ",
        "3.5 × 10⁶  ×  3,500,000",
        "3.5 × 10⁶  +  3,500,000"
      ],
      "answer": 0,
      "explanation": "The correct formula is 3.5 × 10⁶ = 3,500,000."
    },
    {
      "q": "Which statement is true about Scientific Notation?",
      "options": [
        "Multiplication: (a×10ᵐ)(b×10ⁿ) = ab × 10ᵐ⁺ⁿ",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Multiplication: (a×10ᵐ)(b×10ⁿ) = ab × 10ᵐ⁺ⁿ"
    }
  ],
  "Mean, Median, Mode & Range": [
    {
      "q": "What is the median of 3, 7, 1, 9, 5?",
      "options": [
        "1",
        "5",
        "7",
        "9"
      ],
      "answer": 1,
      "explanation": "First sort: 1, 3, 5, 7, 9. The middle value is 5."
    },
    {
      "q": "A set has mean 20. If 15 is added to the set, the new mean becomes 18. How many numbers were originally in the set?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": 1,
      "explanation": "Let n be original count. Original sum = 20n. New sum = 20n+15, new count = n+1. (20n+15)/(n+1) = 18. Solving: 20n+15 = 18n+18, 2n = 3, n = 5."
    },
    {
      "q": "A set has mean 10 and median 8. If we add 100 to the set, what happens to the mean?",
      "options": [
        "It increases slightly",
        "It increases significantly",
        "It stays the same",
        "It decreases"
      ],
      "answer": 1,
      "explanation": "An outlier (100) pulls the mean up significantly because the mean is affected by extreme values. The median would change less."
    },
    {
      "q": "Which statement is true about Mean, Median, Mode & Range?",
      "options": [
        "Weighted mean: different values have different weights",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Weighted mean: different values have different weights"
    },
    {
      "q": "True or False: Combined sets: new mean = (sum1 + sum2) / (n1 + n2)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Mean, Median, Mode & Range."
    }
  ],
  "Basic Probability": [
    {
      "q": "What is the probability of rolling a sum of 7 with two standard dice?",
      "options": [
        "1/6",
        "1/9",
        "1/12",
        "1/36"
      ],
      "answer": 0,
      "explanation": "There are 6 favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Total outcomes = 36. Probability = 6/36 = 1/6."
    },
    {
      "q": "A bag has 3 red and 2 blue marbles. What is the probability of drawing a red marble?",
      "options": [
        "1/5",
        "2/5",
        "3/5",
        "4/5"
      ],
      "answer": 2,
      "explanation": "Probability = desired outcomes / total outcomes = 3/5."
    },
    {
      "q": "What is the probability of flipping two heads in a row with a fair coin?",
      "options": [
        "1/2",
        "1/3",
        "1/4",
        "1/8"
      ],
      "answer": 2,
      "explanation": "P(heads) × P(heads) = (1/2) × (1/2) = 1/4. For independent events, multiply probabilities."
    },
    {
      "q": "Which equation represents the formula in Basic Probability?",
      "options": [
        "1 − 1/6  =  5/6",
        " 5/6 = 1 − 1/6 ",
        "1 − 1/6  ×  5/6",
        "1 − 1/6  +  5/6"
      ],
      "answer": 0,
      "explanation": "The correct formula is 1 − 1/6 = 5/6."
    },
    {
      "q": "Which statement is true about Basic Probability?",
      "options": [
        "With replacement: probabilities stay the same",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: With replacement: probabilities stay the same"
    },
    {
      "q": "True or False: Mutually exclusive: P(A and B) = 0",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Basic Probability."
    },
    {
      "q": "True or False: Independent: P(A and B) = P(A) × P(B)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Basic Probability."
    }
  ],
  "Order of Operations (PEMDAS)": [
    {
      "q": "What is the value of 6 + 2 × 3?",
      "options": [
        "12",
        "24",
        "18",
        "10"
      ],
      "answer": 0,
      "explanation": "Multiplication comes before addition: 2 × 3 = 6, then 6 + 6 = 12."
    },
    {
      "q": "What is -3²?",
      "options": [
        "9",
        "-9",
        "6",
        "-6"
      ],
      "answer": 1,
      "explanation": "Exponents come before negation: 3² = 9, so -3² = -(3²) = -9. If it were (-3)², the answer would be 9."
    },
    {
      "q": "What is (8 + 4) ÷ 3?",
      "options": [
        "4",
        "3",
        "2",
        "1"
      ],
      "answer": 0,
      "explanation": "Parentheses first: 8 + 4 = 12. Then division: 12 ÷ 3 = 4."
    },
    {
      "q": "Which statement is true about Order of Operations (PEMDAS)?",
      "options": [
        "Negative numbers: −3² = −9, but (−3)² = 9",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Negative numbers: −3² = −9, but (−3)² = 9"
    },
    {
      "q": "True or False: Absolute value: like parentheses — do first",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Order of Operations (PEMDAS)."
    }
  ],
  "Linear Inequalities": [
    {
      "q": "Solve: -3x > 12",
      "options": [
        "x > -4",
        "x < -4",
        "x > 4",
        "x < 4"
      ],
      "answer": 1,
      "explanation": "Divide by -3 and flip the inequality sign: x < -4. This is the #1 ACT trap - always flip when dividing by negative!"
    },
    {
      "q": "Which represents the solution to x + 2 ≤ 5?",
      "options": [
        "x ≤ 3 (closed circle, shade left)",
        "x ≥ 3 (closed circle, shade right)",
        "x < 3 (open circle, shade left)",
        "x > 3 (open circle, shade right)"
      ],
      "answer": 0,
      "explanation": "Subtract 2: x ≤ 3. Closed circle because ≤ includes 3. Shade left because x is less than 3."
    },
    {
      "q": "Which statement is true about Linear Inequalities?",
      "options": [
        "Open circle for  (point not included)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Open circle for  (point not included)"
    },
    {
      "q": "True or False: Shade direction: test a point (0,0)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Linear Inequalities."
    },
    {
      "q": "True or False: AND: overlap of both graphs",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Linear Inequalities."
    },
    {
      "q": "True or False: OR: union of both graphs",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Linear Inequalities."
    }
  ],
  "Evaluating Expressions": [
    {
      "q": "Which equation represents the formula in Evaluating Expressions?",
      "options": [
        "x  =  3",
        " 3 = x ",
        "x  ×  3",
        "x  +  3"
      ],
      "answer": 0,
      "explanation": "The correct formula is x = 3."
    },
    {
      "q": "Which statement is true about Evaluating Expressions?",
      "options": [
        "Forgetting order of operations inside the expression",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Forgetting order of operations inside the expression"
    },
    {
      "q": "True or False: Confusing −3² (−9) with (−3)² (9)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Evaluating Expressions."
    }
  ],
  "Combining Like Terms": [
    {
      "q": "Which statement is true about Combining Like Terms?",
      "options": [
        "CAN combine: same variable, same exponent",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: CAN combine: same variable, same exponent"
    },
    {
      "q": "True or False: Constants can combine with each other",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Combining Like Terms."
    }
  ],
  "FOIL & Multiplying Binomials": [
    {
      "q": "Factor: x² - 9",
      "options": [
        "(x-3)²",
        "(x+3)(x-3)",
        "(x+9)(x-9)",
        "(x-9)²"
      ],
      "answer": 1,
      "explanation": "Difference of squares: a² - b² = (a+b)(a-b). So x² - 9 = (x+3)(x-3)."
    },
    {
      "q": "Factor: x² + 5x + 6",
      "options": [
        "(x+2)(x+3)",
        "(x+1)(x+6)",
        "(x+5)(x+1)",
        "(x-2)(x-3)"
      ],
      "answer": 0,
      "explanation": "Find two numbers that multiply to 6 and add to 5: 2 and 3. So (x+2)(x+3)."
    },
    {
      "q": "What is (x + 5)²?",
      "options": [
        "x² + 10x + 25",
        "x² + 25",
        "x² + 5x + 25",
        "x² + 10x + 5"
      ],
      "answer": 0,
      "explanation": "Perfect square pattern: (a+b)² = a² + 2ab + b². So (x+5)² = x² + 10x + 25."
    },
    {
      "q": "Which equation represents the formula in FOIL & Multiplying Binomials?",
      "options": [
        "x × x  =  x²",
        " x² = x × x ",
        "x × x  ×  x²",
        "x × x  +  x²"
      ],
      "answer": 0,
      "explanation": "The correct formula is x × x = x²."
    },
    {
      "q": "Which statement is true about FOIL & Multiplying Binomials?",
      "options": [
        "(a+b)² = a² + 2ab + b²",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: (a+b)² = a² + 2ab + b²"
    },
    {
      "q": "True or False: (a+b)(a−b) = a² − b² (difference of squares)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for FOIL & Multiplying Binomials."
    }
  ],
  "Solving Quadratic Equations": [
    {
      "q": "What are the solutions to x² - 5x + 6 = 0?",
      "options": [
        "x = 2, 3",
        "x = -2, -3",
        "x = 1, 6",
        "x = -1, -6"
      ],
      "answer": 0,
      "explanation": "Factor: (x-2)(x-3) = 0. Set each factor to 0: x = 2 or x = 3."
    },
    {
      "q": "How many real solutions does x² + 4x + 4 = 0 have?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 1,
      "explanation": "This factors to (x+2)² = 0. The discriminant b² - 4ac = 16 - 16 = 0, so there is 1 repeated real root: x = -2."
    },
    {
      "q": "Which equation represents the formula in Solving Quadratic Equations?",
      "options": [
        "ax² + bx + c  =  0",
        " 0 = ax² + bx + c ",
        "ax² + bx + c  ×  0",
        "ax² + bx + c  +  0"
      ],
      "answer": 0,
      "explanation": "The correct formula is ax² + bx + c = 0."
    },
    {
      "q": "Which statement is true about Solving Quadratic Equations?",
      "options": [
        "Positive → 2 real roots",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Positive → 2 real roots"
    },
    {
      "q": "True or False: Negative → 0 real roots (complex)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Solving Quadratic Equations."
    }
  ],
  "Word Problems Setup": [
    {
      "q": "Which equation represents the formula in Word Problems Setup?",
      "options": [
        " = ",
        " = ",
        " × ",
        " + "
      ],
      "answer": 0,
      "explanation": "The correct formula is =."
    },
    {
      "q": "Which statement is true about Word Problems Setup?",
      "options": [
        "less than → − (order matters!)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: less than → − (order matters!)"
    },
    {
      "q": "True or False: less than → − (order matters!)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Word Problems Setup."
    },
    {
      "q": "True or False: per → division or rate",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Word Problems Setup."
    }
  ],
  "Absolute Value Equations": [
    {
      "q": "Solve: |x - 2| = 5",
      "options": [
        "x = 7",
        "x = -3",
        "x = 7 or x = -3",
        "x = 3 or x = -7"
      ],
      "answer": 2,
      "explanation": "Absolute value gives two cases: x - 2 = 5 → x = 7, or x - 2 = -5 → x = -3."
    },
    {
      "q": "Solve: |x + 3| = -2",
      "options": [
        "x = -5 or x = -1",
        "x = -1",
        "x = -5",
        "No solution"
      ],
      "answer": 3,
      "explanation": "Absolute value cannot equal a negative number. |x + 3| is always ≥ 0, so it can never equal -2."
    },
    {
      "q": "Which equation represents the formula in Absolute Value Equations?",
      "options": [
        "|x|  =  3",
        " 3 = |x| ",
        "|x|  ×  3",
        "|x|  +  3"
      ],
      "answer": 0,
      "explanation": "The correct formula is |x| = 3."
    },
    {
      "q": "Which statement is true about Absolute Value Equations?",
      "options": [
        "|x|  → distance from zero is less than 4 → −4",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: |x|  → distance from zero is less than 4 → −4"
    }
  ],
  "Rational Expressions": [
    {
      "q": "Which equation represents the formula in Rational Expressions?",
      "options": [
        "(x²−4)/(x+2)  =  (x+2)(x−2)/(x+2) = x−2",
        " (x+2)(x−2)/(x+2) = x−2 = (x²−4)/(x+2) ",
        "(x²−4)/(x+2)  ×  (x+2)(x−2)/(x+2) = x−2",
        "(x²−4)/(x+2)  +  (x+2)(x−2)/(x+2) = x−2"
      ],
      "answer": 0,
      "explanation": "The correct formula is (x²−4)/(x+2) = (x+2)(x−2)/(x+2) = x−2."
    },
    {
      "q": "Which statement is true about Rational Expressions?",
      "options": [
        "Multiplication: factor, cancel, multiply remaining",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Multiplication: factor, cancel, multiply remaining"
    },
    {
      "q": "True or False: Addition/Subtraction: find LCD first, then combine",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Rational Expressions."
    }
  ],
  "Exponents & Radicals": [
    {
      "q": "Simplify: (2³)²",
      "options": [
        "2⁵",
        "2⁶",
        "4³",
        "8²"
      ],
      "answer": 1,
      "explanation": "Power rule: (a^m)^n = a^(mn). So (2³)² = 2^(3×2) = 2⁶ = 64."
    },
    {
      "q": "What is 8^(2/3)?",
      "options": [
        "2",
        "4",
        "8",
        "16"
      ],
      "answer": 1,
      "explanation": "8^(2/3) = (cube root of 8)² = 2² = 4. The denominator of the fractional exponent tells you the root."
    },
    {
      "q": "Simplify: 2⁻³",
      "options": [
        "-8",
        "-6",
        "1/8",
        "1/6"
      ],
      "answer": 2,
      "explanation": "Negative exponent means reciprocal: 2⁻³ = 1/(2³) = 1/8."
    },
    {
      "q": "Simplify: √8 × √2",
      "options": [
        "√16",
        "4",
        "16",
        "√10"
      ],
      "answer": 1,
      "explanation": "√a × √b = √(ab). So √8 × √2 = √16 = 4. Alternatively: √8 = 2√2, so 2√2 × √2 = 2 × 2 = 4."
    },
    {
      "q": "Which equation represents the formula in Exponents & Radicals?",
      "options": [
        "xᵃ × xᵇ  =  xᵃ⁺ᵇ",
        " xᵃ⁺ᵇ = xᵃ × xᵇ ",
        "xᵃ × xᵇ  ×  xᵃ⁺ᵇ",
        "xᵃ × xᵇ  +  xᵃ⁺ᵇ"
      ],
      "answer": 0,
      "explanation": "The correct formula is xᵃ × xᵇ = xᵃ⁺ᵇ."
    },
    {
      "q": "True or False: (xᵃ)ᵇ = xᵃᵇ",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Exponents & Radicals."
    },
    {
      "q": "True or False: x^(1/n) = ⁿ√x (fractional exponents are roots!)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Exponents & Radicals."
    }
  ],
  "Logarithms": [
    {
      "q": "Which equation represents the formula in Logarithms?",
      "options": [
        "log_b(x)  =  y",
        " y = log_b(x) ",
        "log_b(x)  ×  y",
        "log_b(x)  +  y"
      ],
      "answer": 0,
      "explanation": "The correct formula is log_b(x) = y."
    },
    {
      "q": "Which statement is true about Logarithms?",
      "options": [
        "log(xy) = log(x) + log(y)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: log(xy) = log(x) + log(y)"
    },
    {
      "q": "True or False: log(xⁿ) = n·log(x)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Logarithms."
    },
    {
      "q": "True or False: log_b(b) = 1 and log_b(1) = 0",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Logarithms."
    }
  ],
  "Complex Numbers": [
    {
      "q": "Which equation represents the formula in Complex Numbers?",
      "options": [
        "i  =  √(−1)",
        " √(−1) = i ",
        "i  ×  √(−1)",
        "i  +  √(−1)"
      ],
      "answer": 0,
      "explanation": "The correct formula is i = √(−1)."
    }
  ],
  "Sequences & Series": [
    {
      "q": "Which equation represents the formula in Sequences & Series?",
      "options": [
        "aₙ  =  a₁ + (n−1)d",
        " a₁ + (n−1)d = aₙ ",
        "aₙ  ×  a₁ + (n−1)d",
        "aₙ  +  a₁ + (n−1)d"
      ],
      "answer": 0,
      "explanation": "The correct formula is aₙ = a₁ + (n−1)d."
    },
    {
      "q": "Which statement is true about Sequences & Series?",
      "options": [
        "Arithmetic sum: n/2 × (a₁ + aₙ) or n/2 × [2a₁ + (n−1)d]",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Arithmetic sum: n/2 × (a₁ + aₙ) or n/2 × [2a₁ + (n−1)d]"
    }
  ],
  "Slope of a Line": [
    {
      "q": "What is the slope of the line passing through (2,3) and (5,9)?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "Slope = (y2-y1)/(x2-x1) = (9-3)/(5-2) = 6/3 = 2."
    },
    {
      "q": "What is the slope of a line perpendicular to y = 2x + 1?",
      "options": [
        "2",
        "-2",
        "1/2",
        "-1/2"
      ],
      "answer": 3,
      "explanation": "Perpendicular lines have negative reciprocal slopes. The slope of y = 2x + 1 is 2, so perpendicular slope is -1/2."
    },
    {
      "q": "Which equation represents the formula in Slope of a Line?",
      "options": [
        "y  =  mx + b",
        " mx + b = y ",
        "y  ×  mx + b",
        "y  +  mx + b"
      ],
      "answer": 0,
      "explanation": "The correct formula is y = mx + b."
    },
    {
      "q": "Which statement is true about Slope of a Line?",
      "options": [
        "Parallel lines have equal slopes",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Parallel lines have equal slopes"
    }
  ],
  "Equations of Lines": [
    {
      "q": "What is the equation of a line with slope 2 and y-intercept -3?",
      "options": [
        "y = 2x - 3",
        "y = -3x + 2",
        "y = 2x + 3",
        "y = 3x - 2"
      ],
      "answer": 0,
      "explanation": "Slope-intercept form: y = mx + b. Here m=2 and b=-3, so y = 2x - 3."
    },
    {
      "q": "What is the equation of a line with slope 3 passing through (1, 2)?",
      "options": [
        "y - 2 = 3(x - 1)",
        "y + 2 = 3(x + 1)",
        "y = 3x + 2",
        "y = 3x - 1"
      ],
      "answer": 0,
      "explanation": "Point-slope form: y - y₁ = m(x - x₁). With slope 3 and point (1,2): y - 2 = 3(x - 1)."
    },
    {
      "q": "Which equation represents the formula in Equations of Lines?",
      "options": [
        "y  =  mx + b",
        " mx + b = y ",
        "y  ×  mx + b",
        "y  +  mx + b"
      ],
      "answer": 0,
      "explanation": "The correct formula is y = mx + b."
    },
    {
      "q": "Which statement is true about Equations of Lines?",
      "options": [
        "Horizontal: y = c (slope = 0)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Horizontal: y = c (slope = 0)"
    }
  ],
  "Distance & Midpoint Formulas": [
    {
      "q": "What is the distance between (0,0) and (3,4)?",
      "options": [
        "5",
        "7",
        "25",
        "12"
      ],
      "answer": 0,
      "explanation": "Distance = √((3-0)² + (4-0)²) = √(9+16) = √25 = 5."
    },
    {
      "q": "What is the midpoint of (2,5) and (8,-1)?",
      "options": [
        "(5, 2)",
        "(6, 3)",
        "(4, 4)",
        "(7, 1)"
      ],
      "answer": 0,
      "explanation": "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) = ((2+8)/2, (5+(-1))/2) = (10/2, 4/2) = (5, 2)."
    },
    {
      "q": "Which equation represents the formula in Distance & Midpoint Formulas?",
      "options": [
        "d  =  √[(x₂−x₁)² + (y₂−y₁)²]",
        " √[(x₂−x₁)² + (y₂−y₁)²] = d ",
        "d  ×  √[(x₂−x₁)² + (y₂−y₁)²]",
        "d  +  √[(x₂−x₁)² + (y₂−y₁)²]"
      ],
      "answer": 0,
      "explanation": "The correct formula is d = √[(x₂−x₁)² + (y₂−y₁)²]."
    }
  ],
  "Graphing Inequalities": [
    {
      "q": "Which statement is true about Graphing Inequalities?",
      "options": [
        "Dashed for  (boundary not included)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Dashed for  (boundary not included)"
    }
  ],
  "Angles & Parallel Lines": [
    {
      "q": "Which statement is true about Angles & Parallel Lines?",
      "options": [
        "Corresponding angles are equal",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Corresponding angles are equal"
    },
    {
      "q": "True or False: Same-side interior angles sum to 180°",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Angles & Parallel Lines."
    },
    {
      "q": "True or False: Vertical angles are always equal",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Angles & Parallel Lines."
    },
    {
      "q": "True or False: Sum of interior angles: (n−2) × 180°",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Angles & Parallel Lines."
    }
  ],
  "Triangles": [
    {
      "q": "In a right triangle with legs 3 and 4, what is the hypotenuse?",
      "options": [
        "5",
        "6",
        "7",
        "25"
      ],
      "answer": 0,
      "explanation": "Pythagorean Theorem: a² + b² = c². 3² + 4² = 9 + 16 = 25, so c = 5."
    },
    {
      "q": "What is the area of a triangle with base 8 and height 5?",
      "options": [
        "20",
        "25",
        "30",
        "40"
      ],
      "answer": 0,
      "explanation": "Area = ½ × base × height = ½ × 8 × 5 = 20."
    },
    {
      "q": "In a 45°-45°-90° triangle, if one leg is 5, what is the hypotenuse?",
      "options": [
        "5√2",
        "10",
        "5",
        "5√3"
      ],
      "answer": 0,
      "explanation": "45°-45°-90° triangle has sides in ratio x : x : x√2. If leg = 5, hypotenuse = 5√2."
    },
    {
      "q": "Which equation represents the formula in Triangles?",
      "options": [
        "a² + b²  =  c²",
        " c² = a² + b² ",
        "a² + b²  ×  c²",
        "a² + b²  +  c²"
      ],
      "answer": 0,
      "explanation": "The correct formula is a² + b² = c²."
    },
    {
      "q": "Which statement is true about Triangles?",
      "options": [
        "All angles sum to 180°",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: All angles sum to 180°"
    },
    {
      "q": "True or False: Pythagorean Theorem: a² + b² = c² (right triangles only)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Triangles."
    }
  ],
  "Quadrilaterals & Polygons": [
    {
      "q": "Which statement is true about Quadrilaterals & Polygons?",
      "options": [
        "Square: 4 equal sides, 4 right angles, Area = s²",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Square: 4 equal sides, 4 right angles, Area = s²"
    },
    {
      "q": "True or False: Parallelogram: Area = base×height (NOT side×side!)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Quadrilaterals & Polygons."
    },
    {
      "q": "True or False: Trapezoid: Area = ½(b₁+b₂)×h (average of parallel sides × height)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Quadrilaterals & Polygons."
    },
    {
      "q": "True or False: Rhombus: 4 equal sides, diagonals are perpendicular",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Quadrilaterals & Polygons."
    }
  ],
  "Circles": [
    {
      "q": "What is the circumference of a circle with radius 3?",
      "options": [
        "3π",
        "6π",
        "9π",
        "12π"
      ],
      "answer": 1,
      "explanation": "Circumference = 2πr = 2π(3) = 6π."
    },
    {
      "q": "What is the area of a circle with diameter 10?",
      "options": [
        "10π",
        "25π",
        "50π",
        "100π"
      ],
      "answer": 1,
      "explanation": "Radius = diameter/2 = 5. Area = πr² = π(5)² = 25π."
    },
    {
      "q": "What is the center of the circle (x+2)² + (y-3)² = 16?",
      "options": [
        "(2, -3)",
        "(-2, 3)",
        "(2, 3)",
        "(-2, -3)"
      ],
      "answer": 1,
      "explanation": "Standard form: (x-h)² + (y-k)² = r². Here h=-2, k=3, so center is (-2, 3)."
    },
    {
      "q": "Which equation represents the formula in Circles?",
      "options": [
        "C  =  2πr",
        " 2πr = C ",
        "C  ×  2πr",
        "C  +  2πr"
      ],
      "answer": 0,
      "explanation": "The correct formula is C = 2πr."
    },
    {
      "q": "Which statement is true about Circles?",
      "options": [
        "Circumference: C = 2πr or C = πd",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Circumference: C = 2πr or C = πd"
    },
    {
      "q": "True or False: Arc length: (θ/360°) × 2πr",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Circles."
    },
    {
      "q": "True or False: Sector area: (θ/360°) × πr²",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Circles."
    }
  ],
  "3D Geometry": [
    {
      "q": "Which equation represents the formula in 3D Geometry?",
      "options": [
        "d  =  √(l² + w² + h²)",
        " √(l² + w² + h²) = d ",
        "d  ×  √(l² + w² + h²)",
        "d  +  √(l² + w² + h²)"
      ],
      "answer": 0,
      "explanation": "The correct formula is d = √(l² + w² + h²)."
    },
    {
      "q": "Which statement is true about 3D Geometry?",
      "options": [
        "Cube: Volume = s³, Surface Area = 6s²",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Cube: Volume = s³, Surface Area = 6s²"
    },
    {
      "q": "True or False: Cylinder: V = πr²h, SA = 2πr²+2πrh",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for 3D Geometry."
    },
    {
      "q": "True or False: Cone: V = ⅓πr²h",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for 3D Geometry."
    },
    {
      "q": "True or False: Sphere: V = ⁴⁄₃πr³, SA = 4πr²",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for 3D Geometry."
    }
  ],
  "Reciprocal Trig Functions": [
    {
      "q": "Which equation represents the formula in Reciprocal Trig Functions?",
      "options": [
        "tan(θ)  =  sin(θ)/cos(θ)",
        " sin(θ)/cos(θ) = tan(θ) ",
        "tan(θ)  ×  sin(θ)/cos(θ)",
        "tan(θ)  +  sin(θ)/cos(θ)"
      ],
      "answer": 0,
      "explanation": "The correct formula is tan(θ) = sin(θ)/cos(θ)."
    },
    {
      "q": "Which statement is true about Reciprocal Trig Functions?",
      "options": [
        "csc(θ) = 1/sin(θ)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: csc(θ) = 1/sin(θ)"
    },
    {
      "q": "True or False: cot(θ) = 1/tan(θ)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Reciprocal Trig Functions."
    }
  ],
  "Law of Sines & Cosines": [
    {
      "q": "Which equation represents the formula in Law of Sines & Cosines?",
      "options": [
        "sin(A)/a  =  sin(B)/b = sin(C)/c",
        " sin(B)/b = sin(C)/c = sin(A)/a ",
        "sin(A)/a  ×  sin(B)/b = sin(C)/c",
        "sin(A)/a  +  sin(B)/b = sin(C)/c"
      ],
      "answer": 0,
      "explanation": "The correct formula is sin(A)/a = sin(B)/b = sin(C)/c."
    }
  ],
  "Function Notation": [
    {
      "q": "If f(x) = 2x + 1, what is f(3)?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2,
      "explanation": "Substitute x=3: f(3) = 2(3) + 1 = 6 + 1 = 7."
    },
    {
      "q": "What is the domain of f(x) = √(x - 2)?",
      "options": [
        "x > 2",
        "x ≥ 2",
        "x > 0",
        "All real numbers"
      ],
      "answer": 1,
      "explanation": "The expression under the square root must be ≥ 0. So x - 2 ≥ 0, which gives x ≥ 2."
    },
    {
      "q": "Which equation represents the formula in Function Notation?",
      "options": [
        "f(x)  =  2x + 3",
        " 2x + 3 = f(x) ",
        "f(x)  ×  2x + 3",
        "f(x)  +  2x + 3"
      ],
      "answer": 0,
      "explanation": "The correct formula is f(x) = 2x + 3."
    }
  ],
  "Domain & Range": [
    {
      "q": "If f(x) = 2x + 1, what is f(3)?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2,
      "explanation": "Substitute x=3: f(3) = 2(3) + 1 = 6 + 1 = 7."
    },
    {
      "q": "What is the domain of f(x) = √(x - 2)?",
      "options": [
        "x > 2",
        "x ≥ 2",
        "x > 0",
        "All real numbers"
      ],
      "answer": 1,
      "explanation": "The expression under the square root must be ≥ 0. So x - 2 ≥ 0, which gives x ≥ 2."
    },
    {
      "q": "Which statement is true about Domain & Range?",
      "options": [
        "Under a square root must be ≥ 0",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Under a square root must be ≥ 0"
    },
    {
      "q": "True or False: Under a log must be > 0",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Domain & Range."
    }
  ],
  "Composition & Inverses": [
    {
      "q": "Which equation represents the formula in Composition & Inverses?",
      "options": [
        "(f∘g)(x)  =  f(g(x))",
        " f(g(x)) = (f∘g)(x) ",
        "(f∘g)(x)  ×  f(g(x))",
        "(f∘g)(x)  +  f(g(x))"
      ],
      "answer": 0,
      "explanation": "The correct formula is (f∘g)(x) = f(g(x))."
    }
  ],
  "Counting Principles": [
    {
      "q": "Which equation represents the formula in Counting Principles?",
      "options": [
        "nPr  =  n!/(n−r)!",
        " n!/(n−r)! = nPr ",
        "nPr  ×  n!/(n−r)!",
        "nPr  +  n!/(n−r)!"
      ],
      "answer": 0,
      "explanation": "The correct formula is nPr = n!/(n−r)!."
    }
  ],
  "Scatterplots & Lines of Best Fit": [
    {
      "q": "Which statement is true about Scatterplots & Lines of Best Fit?",
      "options": [
        "Positive correlation: as x increases, y increases",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Positive correlation: as x increases, y increases"
    },
    {
      "q": "True or False: No correlation: no clear pattern",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Scatterplots & Lines of Best Fit."
    }
  ],
  "Transitions": [
    {
      "q": "Which statement is true about Transitions?",
      "options": [
        "Addition: furthermore, moreover, also, in addition",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Addition: furthermore, moreover, also, in addition"
    },
    {
      "q": "True or False: Cause/Effect: therefore, thus, consequently, as a result",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Transitions."
    },
    {
      "q": "True or False: Sequence: first, then, subsequently, finally",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Transitions."
    },
    {
      "q": "True or False: Example: for instance, for example, specifically",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Transitions."
    }
  ],
  "Organization & Paragraph Order": [
    {
      "q": "Which statement is true about Organization & Paragraph Order?",
      "options": [
        "Pronouns: This theory… — the previous sentence must introduce the theory.",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Pronouns: This theory… — the previous sentence must introduce the theory."
    },
    {
      "q": "True or False: Topic sentences: A paragraph's first sentence should introduce its subject.",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Organization & Paragraph Order."
    }
  ],
  "Conciseness & Redundancy": [
    {
      "q": "Which statement is true about Conciseness & Redundancy?",
      "options": [
        "past history → history",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: past history → history"
    },
    {
      "q": "True or False: advance planning → planning",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Conciseness & Redundancy."
    },
    {
      "q": "True or False: end result → result",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Conciseness & Redundancy."
    }
  ],
  "Main Idea / Central Theme": [
    {
      "q": "Which statement is true about Main Idea / Central Theme?",
      "options": [
        "Read the first and last paragraphs carefully — the thesis often lives there.",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Read the first and last paragraphs carefully — the thesis often lives there."
    },
    {
      "q": "True or False: Eliminate answers that are too narrow (just a detail) or too broad (goes beyond the text).",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Main Idea / Central Theme."
    }
  ],
  "Text Structure": [
    {
      "q": "Which statement is true about Text Structure?",
      "options": [
        "Chronological: Events in time order",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Chronological: Events in time order"
    },
    {
      "q": "True or False: Compare/Contrast: Similarities and differences",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Text Structure."
    },
    {
      "q": "True or False: Problem/Solution: Identifies a problem and proposes solutions",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Text Structure."
    },
    {
      "q": "True or False: Claim/Evidence: Makes an argument and supports it",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Text Structure."
    }
  ],
  "Paired Passages": [
    {
      "q": "Which statement is true about Paired Passages?",
      "options": [
        "Where do the authors AGREE?",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Where do the authors AGREE?"
    },
    {
      "q": "True or False: How would Author 1 respond to Author 2's argument?",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Paired Passages."
    }
  ],
  "Literary Narrative / Prose Fiction": [
    {
      "q": "Which statement is true about Literary Narrative / Prose Fiction?",
      "options": [
        "Track the narrator's attitude and emotional shifts",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Track the narrator's attitude and emotional shifts"
    },
    {
      "q": "True or False: Notice descriptive language and what it reveals",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Literary Narrative / Prose Fiction."
    },
    {
      "q": "True or False: Look for internal conflict or realization moments",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Literary Narrative / Prose Fiction."
    }
  ],
  "Social Studies": [
    {
      "q": "Which statement is true about Social Studies?",
      "options": [
        "Identify the thesis in the first paragraph",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Identify the thesis in the first paragraph"
    },
    {
      "q": "True or False: Notice cause/effect relationships",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Social Studies."
    },
    {
      "q": "True or False: Pay attention to dates, names, and specific studies mentioned",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Social Studies."
    }
  ],
  "Humanities": [
    {
      "q": "Which statement is true about Humanities?",
      "options": [
        "Grasp the central thesis or aesthetic argument",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Grasp the central thesis or aesthetic argument"
    },
    {
      "q": "True or False: Track comparisons between artists, periods, or ideas",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Humanities."
    },
    {
      "q": "True or False: Don't get lost in fancy language — focus on what the author is arguing",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Humanities."
    }
  ],
  "Natural Sciences": [
    {
      "q": "Which statement is true about Natural Sciences?",
      "options": [
        "Identify the main scientific concept being explained",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Identify the main scientific concept being explained"
    },
    {
      "q": "True or False: Understand cause/effect relationships",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Natural Sciences."
    },
    {
      "q": "True or False: Don't panic if you don't know the science — everything you need is in the passage",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Natural Sciences."
    }
  ],
  "Reading Graphs & Charts": [
    {
      "q": "Which statement is true about Reading Graphs & Charts?",
      "options": [
        "Line graphs: trends over time",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Line graphs: trends over time"
    },
    {
      "q": "True or False: Scatterplots: correlation between two variables",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Reading Graphs & Charts."
    },
    {
      "q": "True or False: Pie charts: parts of a whole",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Reading Graphs & Charts."
    }
  ],
  "Identifying Trends & Patterns": [
    {
      "q": "Which statement is true about Identifying Trends & Patterns?",
      "options": [
        "Direct relationship: as one increases, the other increases",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Direct relationship: as one increases, the other increases"
    },
    {
      "q": "True or False: No relationship: no clear pattern",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Identifying Trends & Patterns."
    },
    {
      "q": "True or False: Exponential: curve gets steeper and steeper",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Identifying Trends & Patterns."
    },
    {
      "q": "True or False: Plateau: levels off after a certain point",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Identifying Trends & Patterns."
    }
  ],
  "Experimental Design": [
    {
      "q": "Which statement is true about Experimental Design?",
      "options": [
        "Independent variable: What the scientist deliberately changes",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Independent variable: What the scientist deliberately changes"
    },
    {
      "q": "True or False: Control variables: Everything kept the same",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Experimental Design."
    },
    {
      "q": "True or False: Control group: The baseline — receives no treatment or the standard treatment",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Experimental Design."
    }
  ],
  "Comparing Experiments": [
    {
      "q": "Which statement is true about Comparing Experiments?",
      "options": [
        "Why was Experiment 2 done? (to test a different variable or confirm results)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Why was Experiment 2 done? (to test a different variable or confirm results)"
    },
    {
      "q": "True or False: What conclusion is consistent with BOTH experiments?",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Comparing Experiments."
    }
  ],
  "Hypothesis Support": [
    {
      "q": "Which statement is true about Hypothesis Support?",
      "options": [
        "Do the results support the hypothesis? → Yes if data matches prediction, No if it contradicts",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Do the results support the hypothesis? → Yes if data matches prediction, No if it contradicts"
    },
    {
      "q": "True or False: What would support the hypothesis? → Predict what data WOULD look like if the hypothesis were true",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Hypothesis Support."
    }
  ],
  "Cell Structure": [
    {
      "q": "Which statement is true about Cell Structure?",
      "options": [
        "Nucleus: contains DNA, controls the cell",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Nucleus: contains DNA, controls the cell"
    },
    {
      "q": "True or False: Ribosomes: make proteins",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Cell Structure."
    },
    {
      "q": "True or False: Cell membrane: controls what enters and exits",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Cell Structure."
    },
    {
      "q": "True or False: Chloroplasts: in plant cells only — photosynthesis",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Cell Structure."
    }
  ],
  "DNA, Genes & Proteins": [
    {
      "q": "Which statement is true about DNA, Genes & Proteins?",
      "options": [
        "DNA is the genetic blueprint",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: DNA is the genetic blueprint"
    },
    {
      "q": "True or False: Genes are segments of DNA that code for proteins",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for DNA, Genes & Proteins."
    },
    {
      "q": "True or False: Mutations are changes in DNA sequence — they can be harmful, neutral, or beneficial",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for DNA, Genes & Proteins."
    },
    {
      "q": "True or False: Natural selection: organisms with advantageous traits survive and reproduce more",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for DNA, Genes & Proteins."
    }
  ],
  "Ecology & Ecosystems": [
    {
      "q": "Which statement is true about Ecology & Ecosystems?",
      "options": [
        "Food chains: producers → primary consumers → secondary consumers → decomposers",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Food chains: producers → primary consumers → secondary consumers → decomposers"
    },
    {
      "q": "True or False: Carrying capacity: maximum population an ecosystem can sustain",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Ecology & Ecosystems."
    },
    {
      "q": "True or False: Symbiosis: mutualism (both benefit), parasitism (one benefits, one harmed), commensalism (one benefits, one unaffected)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Ecology & Ecosystems."
    }
  ],
  "States of Matter": [
    {
      "q": "Which statement is true about States of Matter?",
      "options": [
        "Solid: fixed shape & volume, particles packed tightly",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Solid: fixed shape & volume, particles packed tightly"
    },
    {
      "q": "True or False: Gas: no fixed shape or volume, particles spread out",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for States of Matter."
    }
  ],
  "Reaction Rates": [
    {
      "q": "Which statement is true about Reaction Rates?",
      "options": [
        "Temperature increases (particles move faster, collide more)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Temperature increases (particles move faster, collide more)"
    },
    {
      "q": "True or False: Surface area increases (more exposed to react)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Reaction Rates."
    },
    {
      "q": "True or False: Catalysts are added (lower activation energy without being consumed)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Reaction Rates."
    }
  ],
  "Energy": [
    {
      "q": "Which statement is true about Energy?",
      "options": [
        "Kinetic energy: energy of motion. KE = ½mv² (increases with mass and especially speed!)",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Kinetic energy: energy of motion. KE = ½mv² (increases with mass and especially speed!)"
    },
    {
      "q": "True or False: Conservation of energy: energy cannot be created or destroyed, only transformed (KE ↔ PE)",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Energy."
    }
  ],
  "Forces & Motion": [
    {
      "q": "Which equation represents the formula in Forces & Motion?",
      "options": [
        "F  =  ma",
        " ma = F ",
        "F  ×  ma",
        "F  +  ma"
      ],
      "answer": 0,
      "explanation": "The correct formula is F = ma."
    }
  ],
  "Plate Tectonics": [
    {
      "q": "Which statement is true about Plate Tectonics?",
      "options": [
        "Convergent boundaries: plates collide → mountains, volcanoes, trenches",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Convergent boundaries: plates collide → mountains, volcanoes, trenches"
    },
    {
      "q": "True or False: Transform boundaries: plates slide past each other → earthquakes",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Plate Tectonics."
    }
  ],
  "Greenhouse Effect": [
    {
      "q": "Which statement is true about Greenhouse Effect?",
      "options": [
        "Sunlight passes through the atmosphere and warms the Earth",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Sunlight passes through the atmosphere and warms the Earth"
    },
    {
      "q": "True or False: Greenhouse gases absorb some of this infrared, keeping the planet warm",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Greenhouse Effect."
    },
    {
      "q": "True or False: More greenhouse gases = more heat trapped = global warming",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for Greenhouse Effect."
    }
  ],
  "The Solar System": [
    {
      "q": "Which statement is true about The Solar System?",
      "options": [
        "Planets orbit the Sun in elliptical (nearly circular) paths",
        "None of the above",
        "It depends",
        "Not enough info"
      ],
      "answer": 0,
      "explanation": "Key concept: Planets orbit the Sun in elliptical (nearly circular) paths"
    },
    {
      "q": "True or False: Outer planets (Jupiter, Saturn, Uranus, Neptune): gas giants, large",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for The Solar System."
    },
    {
      "q": "True or False: Gravity keeps planets in orbit — stronger when closer to the Sun",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for The Solar System."
    },
    {
      "q": "True or False: The Moon orbits Earth; its gravity causes tides",
      "options": [
        "True",
        "False",
        "Only sometimes",
        "Depends"
      ],
      "answer": 0,
      "explanation": "This is a key rule for The Solar System."
    }
  ]
};





// ╔══════════════════════════════════════════╗
// ║              ROUTING LOGIC              ║
// ╚══════════════════════════════════════════╝
let currentView = 'home';
let currentCategory = null;
let currentTopic = null;
let currentSection = null;
const main = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');
const navButtons = document.querySelectorAll('.topbar nav button');
function navigate(view, section, category, topic) {
  currentView = view;
  currentSection = section;
  currentCategory = category;
  currentTopic = topic;
  searchInput.value = '';
  navButtons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-view="${view === 'home' ? 'home' : section}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  render();
  window.scrollTo(0,0);
}
function render() {
  if (currentTopic != null) return renderTopicDetail();
  if (currentCategory != null) return renderTopicList();
  if (currentView === 'section') return renderCategoryGrid();
  return renderHome();
}
// ── HOME ──────────────────────
function renderHome() {
  main.innerHTML = `
    <div class="hero-section">
      <h1>Free ACT Revision — Topic by Topic</h1>
      <p>Master every topic on the ACT with clear explanations and video lessons. Choose a subject to get started.</p>
    </div>
    <div class="subject-grid">
      <div class="subject-card math" onclick="navigate('section','math')">
        <span class="icon">📐</span>
        <h3>Math</h3>
        <p>45 questions · 50 min · Pre-Algebra through Trigonometry · ${countTopics('math')} topics</p>
      </div>
      <div class="subject-card english" onclick="navigate('section','english')">
        <span class="icon">📝</span>
        <h3>English</h3>
        <p>50 questions · 35 min · Grammar, usage & rhetoric · ${countTopics('english')} topics</p>
      </div>
      <div class="subject-card reading" onclick="navigate('section','reading')">
        <span class="icon">📖</span>
        <h3>Reading</h3>
        <p>36 questions · 40 min · 4 passage types · ${countTopics('reading')} topics</p>
      </div>
      <div class="subject-card science" onclick="navigate('section','science')">
        <span class="icon">🔬</span>
        <h3>Science</h3>
        <p>40 questions · 40 min · Data analysis & reasoning · ${countTopics('science')} topics</p>
      </div>
    </div>
  `;
}
// ── CATEGORY GRID ─────────────
function renderCategoryGrid() {
  const sec = data[currentSection];
  let html = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>${sec.title}</strong>
    </div>
    <div class="section-header">
      <h2>${sec.title}</h2>
      <p>${sec.desc} — Select a category below</p>
    </div>
    <div class="cat-grid">
  `;
  sec.categories.forEach((cat, i) => {
    html += `
      <div class="cat-card" onclick="navigate('section','${currentSection}',${i})">
        <h4>${cat.name}</h4>
        <span class="count">${cat.topics.length} topics</span>
      </div>
    `;
  });
  html += '</div>';
  main.innerHTML = html;
}
// ── TOPIC LIST ────────────────
function getExcerpt(html, maxLen = 130) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = (tmp.textContent || tmp.innerText || '').trim();
  return text.length > maxLen ? text.slice(0, maxLen).trim() + '…' : text;
}

function renderTopicList() {
  const cat = data[currentSection].categories[currentCategory];
  let html = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <button onclick="navigate('section','${currentSection}')">${data[currentSection].title}</button>
      <span>/</span>
      <strong>${cat.name}</strong>
    </div>
    <div class="section-header">
      <h2>${cat.name}</h2>
      <p>${cat.topics.length} topics — click any topic for an AI explanation</p>
    </div>
    <div class="topic-list" id="topicListContainer">
  `;
  cat.topics.forEach((t, i) => {
    const diffClass = t.diff === 'easy' ? 'easy' : t.diff === 'medium' ? 'medium' : 'hard';
    const excerpt = getExcerpt(t.expl);
    html += `
      <div class="topic-row" data-searchable="${t.name.toLowerCase()} ${cat.name.toLowerCase()} ${excerpt.toLowerCase()}" onclick="navigate('section','${currentSection}',${currentCategory},${i})">
        <div>
          <span class="tname">${t.name}</span>
          <span class="tdesc">${excerpt}</span>
        </div>
        <div class="tmeta">
          <span class="difficulty ${diffClass}">${t.diff}</span>
          <span style="color:var(--text2);font-size:.8rem">→</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  main.innerHTML = html;
}
// ── TOPIC DETAIL ──────────────
function renderTopicDetail() {
  const cat = data[currentSection].categories[currentCategory];
  const topic = cat.topics[currentTopic];
  let html = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <button onclick="navigate('section','${currentSection}')">${data[currentSection].title}</button>
      <span>/</span>
      <button onclick="navigate('section','${currentSection}',${currentCategory})">${cat.name}</button>
      <span>/</span>
      <strong>${topic.name}</strong>
    </div>
    <button class="back-btn" onclick="navigate('section','${currentSection}',${currentCategory})">← Back to ${cat.name}</button>
    <div class="detail-panel">
      <div class="detail-header">
        <h3>${topic.name}</h3>
        <span class="difficulty ${topic.diff === 'easy' ? 'easy' : topic.diff === 'medium' ? 'medium' : 'hard'}" style="display:inline-block;margin-bottom:.75rem">${topic.diff === 'easy' ? '🟢 Easy' : topic.diff === 'medium' ? '🟡 Medium' : '🔴 Hard'}</span>
      </div>
      ${topic.khan ? `<a href="${topic.khan}" target="_blank" rel="noopener" class="yt-btn" style="background:#28a6b5">📚 Khan Academy Lesson</a>` : ''}
      ${topic.pdf ? `<a href="${topic.pdf}" target="_blank" rel="noopener" class="yt-btn" style="background:#5c6bc0">📄 Open Past Test</a>` : ''}
    </div>
    <div class="detail-tabs">
      <button class="tab-btn active" data-tab="learn" onclick="showTab('learn')">📖 Learn</button>
      <button class="tab-btn" data-tab="test" onclick="showTab('test')">✏️ Test</button>
    </div>
    <div class="tab-panel active" id="tabLearn">
      <div class="ai-explanation">
        ${topic.expl}
      </div>
    </div>
    <div class="tab-panel" id="tabTest">
      <div id="testArea"></div>
    </div>
  `;
  main.innerHTML = html;
  if (currentSection === 'math') {
    const testArea = document.getElementById('testArea');
    if (testArea && typeof renderTestConfigHTML === 'function') {
      testArea.innerHTML = renderTestConfigHTML();
    }
  }
}
// ── SEARCH ────────────────────
function doSearch() {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    // Restore current view
    if (currentTopic !== null) navigate('section', currentSection, currentCategory, currentTopic);
    else if (currentCategory !== null) navigate('section', currentSection, currentCategory);
    else if (currentSection) navigate('section', currentSection);
    else navigate('home');
    return;
  }
  // Search all topics across all sections
  let results = [];
  for (const [sectionKey, sectionData] of Object.entries(data)) {
    sectionData.categories.forEach((cat, ci) => {
      cat.topics.forEach((t, ti) => {
        const haystack = `${t.name} ${cat.name} ${sectionData.title}`.toLowerCase();
        if (haystack.includes(q)) {
          results.push({ section: sectionKey, sectionTitle: sectionData.title, catIdx: ci, catName: cat.name, topicIdx: ti, topic: t });
        }
      });
    });
  }
  if (results.length === 0) {
    main.innerHTML = `<div class="no-results"><h3>😕 No topics found for "<em>${q}</em>"</h3><p>Try a different search term like "slope," "commas," or "probability."</p></div>`;
    return;
  }
  let html = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>Search: "${q}"</strong>
    </div>
    <div class="section-header">
      <h2>Search Results</h2>
      <p>${results.length} topic${results.length>1?'s':''} found</p>
    </div>
    <div class="topic-list">
  `;
  results.forEach(r => {
    const diffClass = r.topic.diff === 'easy' ? 'easy' : r.topic.diff === 'medium' ? 'medium' : 'hard';
    const excerpt = getExcerpt(r.topic.expl);
    html += `
      <div class="topic-row" onclick="navigate('section','${r.section}',${r.catIdx},${r.topicIdx})">
        <div>
          <span class="tname">${highlight(r.topic.name, q)} <span style="color:var(--text2);font-weight:400;font-size:.82rem">— ${r.sectionTitle} · ${r.catName}</span></span>
          <span class="tdesc">${excerpt}</span>
        </div>
        <div class="tmeta">
          <span class="difficulty ${diffClass}">${r.topic.diff}</span>
          <span style="color:var(--text2);font-size:.8rem">→</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  main.innerHTML = html;
}
function highlight(text, query) {
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}
function countTopics(section) {
  return data[section].categories.reduce((sum, c) => sum + c.topics.length, 0);
}
// ── NAV CLICKS ────────────────
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    if (view === 'home') navigate('home');
    else navigate('section', view);
  });
});
// ── TEST TABS & QUIZ ENGINE ───────
let testState = null;
function startTest() {
  const countInput = document.getElementById('testQuestionCount');
  const timeInput = document.getElementById('testTimeLimit');
  const requested = parseInt(countInput.value, 10) || 10;
  const minutes = parseInt(timeInput.value, 10) || 0;
  const topic = data[currentSection].categories[currentCategory].topics[currentTopic];
  const bank = mathQuestionBank[topic.name];
  if (!bank || bank.length === 0) {
    alert('No questions available for this topic yet.');
    return;
  }
  const count = Math.max(10, Math.min(requested, bank.length));
  if (bank.length < 10) {
    alert(`This topic has only ${bank.length} questions available. Starting test with all ${bank.length} questions.`);
  }
  const indices = Array.from({length: bank.length}, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const selected = indices.slice(0, count);
  testState = {
    questions: selected.map(i => ({...bank[i], index: i})),
    answers: new Array(count).fill(null),
    submitted: false,
    startTime: Date.now(),
    timeLimit: minutes > 0 ? minutes * 60 : null,
    remaining: minutes > 0 ? minutes * 60 : null
  };
  renderTest();
  if (testState.timeLimit) testState._timer = setInterval(tickTimer, 1000);
}
function tickTimer() {
  if (!testState || testState.submitted || !testState.timeLimit) return;
  testState.remaining--;
  const el = document.getElementById('testTimer');
  if (el) el.textContent = formatTime(testState.remaining);
  if (testState.remaining <= 0) {
    clearInterval(testState._timer);
    submitTest();
  }
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}
function renderTest() {
  if (!testState) return;
  const topic = data[currentSection].categories[currentCategory].topics[currentTopic];
  let html = '<div class="test-container">';
  html += '<div class="test-header"><h3>Test: ' + topic.name + '</h3>';
  if (testState.timeLimit) {
    html += '<span id="testTimer" class="timer">' + formatTime(testState.remaining) + '</span>';
  }
  html += '</div>';
  html += '<div class="questions-list">';
  testState.questions.forEach((q, i) => {
    const answered = testState.answers[i] !== null;
    html += '<div class="question-card ' + (answered ? 'answered' : '') + '">';
    html += '<div class="q-header"><span class="q-num">Q' + (i+1) + '</span>';
    if (testState.submitted) {
      const correct = testState.answers[i] === q.answer;
      html += '<span class="result-badge ' + (correct ? 'correct' : 'wrong') + '">' + (correct ? 'Correct' : 'Incorrect') + '</span>';
    }
    html += '</div>';
    html += '<p class="q-text">' + (i+1) + '. ' + q.q + '</p>';
    html += '<div class="options">';
    q.options.forEach((opt, oi) => {
      const selected = testState.answers[i] === oi;
      const isCorrect = oi === q.answer;
      let cls = 'option';
      if (testState.submitted && isCorrect) cls += ' correct-option';
      if (selected && testState.submitted && !isCorrect) cls += ' wrong-option';
      html += '<label class="' + cls + '">';
      html += '<input type="radio" name="q' + i + '" value="' + oi + '" ' + (selected ? 'checked' : '') + (testState.submitted ? ' disabled' : '') + ' onchange="selectAnswer(' + i + ', ' + oi + ')">';
      html += '<span>' + opt + '</span></label>';
    });
    html += '</div>';
    if (testState.submitted) {
      html += '<div class="q-explanation"><strong>Explanation:</strong> ' + q.explanation + '</div>';
    }
    html += '</div>';
  });
  html += '</div>';
  if (!testState.submitted) {
    html += '<button class="submit-test-btn" onclick="submitTest()">Submit Test</button>';
  } else {
    const correct = testState.questions.reduce((s, q, i) => s + (testState.answers[i] === q.answer ? 1 : 0), 0);
    html += '<div class="score-panel"><strong>Score: ' + correct + '/' + testState.questions.length + '</strong>';
    html += '<button class="retry-btn" onclick="retryTest()">Try Again</button></div>';
  }
  html += '</div>';
  const container = document.getElementById('testArea');
  if (container) container.innerHTML = html;
}
function selectAnswer(qIndex, optionIndex) {
  if (!testState || testState.submitted) return;
  testState.answers[qIndex] = optionIndex;
  renderTest();
}
function submitTest() {
  if (!testState || testState.submitted) return;
  if (testState._timer) clearInterval(testState._timer);
  testState.submitted = true;
  testState.endTime = Date.now();
  renderTest();
}
function retryTest() {
  testState = null;
  const testArea = document.getElementById('testArea');
  if (testArea && typeof renderTestConfigHTML === 'function') {
    testArea.innerHTML = renderTestConfigHTML();
  }
}
function showTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });
  const btn = document.querySelector('[data-tab="' + tab + '"]');
  if (btn) btn.classList.add('active');
  const panel = document.getElementById(tab === 'learn' ? 'tabLearn' : 'tabTest');
  if (panel) { panel.classList.add('active'); panel.style.display = 'block'; }
  if (tab === 'test') {
    if (currentSection !== 'math') {
      const ta = document.getElementById('testArea');
      if (ta) ta.innerHTML = '<p class="no-results">Tests are only available for Math topics.</p>';
      return;
    }
    if (!testState) {
      const ta = document.getElementById('testArea');
      if (ta && typeof renderTestConfigHTML === 'function') ta.innerHTML = renderTestConfigHTML();
    } else {
      renderTest();
    }
  }
}
function renderTestConfigHTML() {
  return '<div class="test-config">' +
    '<h4>Test Settings</h4>' +
    '<div class="config-row"><label>Questions: <input type="number" id="testQuestionCount" min="10" value="10"></label></div>' +
    '<div class="config-row"><label>Time (minutes, 0 = untimed): <input type="number" id="testTimeLimit" min="0" max="30" value="0"></label></div>' +
    '<button class="start-test-btn" onclick="startTest()">Start Test</button>' +
    '</div>';
}
