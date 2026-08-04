const data = {
  math: {
    title: 'ACT Math',
    desc: '45 questions · 50 minutes · 5 answer choices per question',
    categories: [
      {
        name: 'Pre-Algebra & Arithmetic',
        topics: [
          {name:'Number Types & Properties', diff:'easy', expl:`<strong>Real numbers</strong> are every number you can place on a number line: rational numbers (fractions, terminating and repeating decimals) and irrational numbers (like π and √2). <strong>Integers</strong> are the whole numbers and their negatives (…, −2, −1, 0, 1, 2, …).<br><br><strong>Prime</strong> numbers have exactly two factors (2, 3, 5, 7, 11…) while <strong>composite</strong> numbers have more than two (4, 6, 8, 9…). The number 1 is neither prime nor composite.<br><br>Key rules to memorize:<br>• Negative × Negative = Positive<br>• Even + Even = Even, Odd + Odd = Even<br>• Odd × Odd = Odd, Odd × Even = Even<div class="example-box">
  <strong>Question:</strong> How many integers between 1 and 100 are divisible by 3?
  <div class="step-box"><span class="step-num">1</span> The first multiple is 3 and the last is 99.</div>
  <div class="step-box"><span class="step-num">2</span> Multiples of 3 form an arithmetic sequence: 3, 6, 9, …, 99 with common difference 3.</div>
  <div class="step-box"><span class="step-num">3</span> Count them: (99 − 3) ÷ 3 + 1 = 96 ÷ 3 + 1 = 32 + 1 = 33.</div>
  <strong>Answer:</strong> 33 integers. The +1 is essential — without it you undercount by one.
</div><div class="warning-box">On the ACT, "between 1 and 100" usually means <strong>inclusive</strong> (both 1 and 100 are candidates) unless it says "exclusive" or "not including." Always read the boundary conditions.</div>`},
          {name:'Factors, Multiples & Divisibility', diff:'easy', expl:`A <strong>factor</strong> divides a number evenly; a <strong>multiple</strong> is the product of a number and an integer. The <strong>GCF</strong> (Greatest Common Factor) is the largest factor two numbers share; the <strong>LCM</strong> (Least Common Multiple) is the smallest multiple they share.<div class="formula-box">GCF: take shared prime factors at the lowest exponent<br>LCM: take all prime factors at the highest exponent</div><div class="example-box">
  <strong>Question:</strong> Find the GCF and LCM of 24 and 36.
  <div class="step-box"><span class="step-num">1</span> Prime factorize: 24 = 2³ × 3, 36 = 2² × 3².</div>
  <div class="step-box"><span class="step-num">2</span> GCF: shared primes at lowest exponents → 2² × 3 = 12.</div>
  <div class="step-box"><span class="step-num">3</span> LCM: all primes at highest exponents → 2³ × 3² = 72.</div>
  <strong>Answer:</strong> GCF = 12, LCM = 72. Quick check: 24 × 36 = 864 = 12 × 72. ✔
</div><div class="warning-box">A classic trap: for consecutive integers, the product is divisible by n!. Example: the product of 4 consecutive integers is always divisible by 24 (= 4!).</div>`},
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
          {name:'Scientific Notation', diff:'easy', expl:`Scientific notation writes a number as a coefficient times a power of ten, keeping the coefficient between 1 and 10.<div class="formula-box">a × 10ⁿ, where 1 ≤ a &lt; 10<br>Positive n → big numbers; negative n → small numbers</div><div class="example-box">
  <strong>Question:</strong> Write 3.5 × 10⁶ in standard form, and 4.2 × 10⁻³ in standard form.
  <div class="step-box"><span class="step-num">1</span> Positive exponent: move the decimal 6 places right: 3.500000 → 3,500,000.</div>
  <div class="step-box"><span class="step-num">2</span> Negative exponent: move the decimal 3 places left: 4.2 → 0.0042.</div>
  <strong>Answer:</strong> 3,500,000 and 0.0042. Exponent positive → right; negative → left.
</div><div class="warning-box">When multiplying in scientific notation: (a × 10ᵐ)(b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ, then re-normalize if the new coefficient is ≥ 10 (e.g., 12 × 10⁵ → 1.2 × 10⁶).</div>`},
          {name:'Mean, Median, Mode & Range', diff:'easy', expl:`Measures of center summarize a data set.<br>• <strong>Mean</strong>: sum ÷ count (the average)<br>• <strong>Median</strong>: middle value after sorting (average of two middle values)<br>• <strong>Mode</strong>: most frequent value<br>• <strong>Range</strong>: max − min<div class="example-box">
  <strong>Question:</strong> Find the mean, median, mode, and range of {4, 8, 3, 5, 4}.
  <div class="step-box"><span class="step-num">1</span> Sort: 3, 4, 4, 5, 8.</div>
  <div class="step-box"><span class="step-num">2</span> Mean = (3+4+4+5+8) ÷ 5 = 24 ÷ 5 = 4.8.</div>
  <div class="step-box"><span class="step-num">3</span> Median = middle (3rd) value = 4.</div>
  <div class="step-box"><span class="step-num">4</span> Mode = 4 (appears twice). Range = 8 − 3 = 5.</div>
  <strong>Answer:</strong> Mean 4.8, median 4, mode 4, range 5.
</div><div class="warning-box">An outlier pulls the <strong>mean</strong> but barely moves the <strong>median</strong>. If mean &gt; median, the data is skewed right — a favorite ACT inference question.</div>`},
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
</div><div class="warning-box">Two huge traps:<br>• −3² = −9 but (−3)² = 9 — the exponent applies only to the 3, not the minus sign, unless the minus is inside parentheses.<br>• With multiplication and division, work strictly left to right: 8 ÷ 2 × 4 = 16, not 1.</div>`},
        ]
      },
      {
        name: 'Elementary Algebra',
        topics: [
          {name:'Solving Linear Equations', diff:'easy', expl:`Get the variable alone on one side by doing the same operation to both sides.<div class="example-box">
  <strong>Question:</strong> Solve 3x + 5 = 20.
  <div class="step-box"><span class="step-num">1</span> Subtract 5 from both sides: 3x = 15.</div>
  <div class="step-box"><span class="step-num">2</span> Divide both sides by 3: x = 5.</div>
  <div class="step-box"><span class="step-num">3</span> Check: 3(5) + 5 = 20 ✔</div>
  <strong>Answer:</strong> x = 5. Always plug back in to verify.
</div><div class="warning-box">If variables appear on both sides, collect them on one side <em>first</em>. If fractions are present, multiply every term by the LCD to clear them before solving.</div>`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-linear-equations-and-inequalities-easier/a/v2-sat-lesson-solving-linear-equations-and-inequalities'},
          {name:'Linear Inequalities', diff:'medium', expl:`Solved like equations with one crucial exception: <strong>multiplying or dividing by a negative flips the inequality sign</strong>.<div class="formula-box">−2x &gt; 6 → divide by −2 → x &lt; −3</div><div class="example-box">
  <strong>Question:</strong> Solve and graph −2x &gt; 6.
  <div class="step-box"><span class="step-num">1</span> Divide both sides by −2.</div>
  <div class="step-box"><span class="step-num">2</span> Flip the sign: x &lt; −3.</div>
  <div class="step-box"><span class="step-num">3</span> Graph: open circle at −3, arrow pointing left.</div>
  <strong>Answer:</strong> x &lt; −3. Open circle because −3 is not included.
</div><div class="warning-box">Compound inequalities: "AND" graphs overlap (intersection); "OR" graphs combine (union). Absolute value: |x| &lt; a becomes −a &lt; x &lt; a, but |x| &gt; a splits into x &lt; −a or x &gt; a.</div>`},
          {name:'Evaluating Expressions', diff:'easy', expl:`Substitute the given values for the variables, then simplify using the order of operations.<div class="example-box">
  <strong>Question:</strong> If x = 3 and y = −1, evaluate 2x² − 3y.
  <div class="step-box"><span class="step-num">1</span> Substitute with parentheses: 2(3)² − 3(−1).</div>
  <div class="step-box"><span class="step-num">2</span> Exponent first: 2(9) − 3(−1).</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 18 + 3.</div>
  <strong>Answer:</strong> 21. Using parentheses around substitutions prevents sign errors.
</div><div class="warning-box">The #1 source of careless errors is mishandling negatives: −3² = −9, but (−3)² = 9. When substituting a negative, wrap it in parentheses.</div>`},
          {name:'Combining Like Terms', diff:'easy', expl:`Like terms have the same variables raised to the same exponents. Combine them by adding or subtracting their coefficients only.<div class="example-box">
  <strong>Question:</strong> Simplify 3x² + 5x − 2x² + 7x.
  <div class="step-box"><span class="step-num">1</span> Group like terms: (3x² − 2x²) + (5x + 7x).</div>
  <div class="step-box"><span class="step-num">2</span> Combine x² terms: 3 − 2 = 1 → x².</div>
  <div class="step-box"><span class="step-num">3</span> Combine x terms: 5 + 7 = 12 → 12x.</div>
  <strong>Answer:</strong> x² + 12x. You cannot combine x² with x — different exponents.
</div><div class="warning-box">Constants combine only with constants, and different variables (x vs. y) never combine. Rewrite the expression with like terms adjacent before adding.</div>`},
          {name:'FOIL & Multiplying Binomials', diff:'medium', expl:`FOIL stands for <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast — the four products in (a + b)(c + d).<div class="example-box">
  <strong>Question:</strong> Expand (x + 3)(x + 5).
  <div class="step-box"><span class="step-num">1</span> First: x × x = x².</div>
  <div class="step-box"><span class="step-num">2</span> Outer: x × 5 = 5x. Inner: 3 × x = 3x.</div>
  <div class="step-box"><span class="step-num">3</span> Last: 3 × 5 = 15.</div>
  <div class="step-box"><span class="step-num">4</span> Combine the middle terms: 5x + 3x = 8x.</div>
  <strong>Answer:</strong> x² + 8x + 15.
</div><div class="warning-box">Memorize the three perfect-square patterns — they appear constantly:<br>• (a + b)² = a² + 2ab + b²<br>• (a − b)² = a² − 2ab + b²<br>• (a + b)(a − b) = a² − b² (difference of squares)</div>`},
          {name:'Factoring Quadratics', diff:'medium', expl:`Factoring reverses FOIL: for x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>.<div class="example-box">
  <strong>Question:</strong> Factor x² + 7x + 12.
  <div class="step-box"><span class="step-num">1</span> Look for two numbers whose product is 12 and sum is 7.</div>
  <div class="step-box"><span class="step-num">2</span> Factor pairs of 12: (1,12), (2,6), (3,4). The pair (3,4) sums to 7.</div>
  <div class="step-box"><span class="step-num">3</span> Write the binomials: (x + 3)(x + 4).</div>
  <div class="step-box"><span class="step-num">4</span> Verify with FOIL: x² + 4x + 3x + 12 = x² + 7x + 12 ✔</div>
  <strong>Answer:</strong> (x + 3)(x + 4).
</div><div class="warning-box">Watch the sign patterns:<br>• x² − bx + c → both factors negative<br>• x² + bx − c → opposite signs, bigger factor positive<br>• x² − b² → difference of squares (x + b)(x − b)</div>`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:advanced-math-easier/x0fcc98a58ba3bea7:factoring-quadratic-and-polynomial-expressions-easier/a/v2-sat-lesson-factoring-quadratic-and-polynomial-expressions'},
          {name:'Solving Quadratic Equations', diff:'medium', expl:`Three methods to solve ax² + bx + c = 0:<br>1. <strong>Factoring</strong> — fastest when it works<br>2. <strong>Quadratic Formula</strong> — always works<br>3. <strong>Completing the square</strong> — useful for vertex form<div class="formula-box">x = [−b ± √(b² − 4ac)] / 2a<br>Discriminant D = b² − 4ac: D &gt; 0 → 2 roots; D = 0 → 1 root; D &lt; 0 → no real roots</div><div class="example-box">
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
</div><div class="warning-box">"3 less than x" means x − 3, <strong>not</strong> 3 − x. "A is 4 more than B" means A = B + 4. Getting the order backwards is the most common setup error.</div>`},
        ]
      },
      {
        name: 'Intermediate Algebra',
        topics: [
          {name:'Systems of Equations', diff:'medium', expl:`Solve two equations together to find where they both are true. Two main methods:<br>• <strong>Substitution</strong> — solve for one variable and plug in<br>• <strong>Elimination</strong> — add/subtract to cancel a variable<div class="example-box">
  <strong>Question:</strong> Solve x + y = 10 and x − y = 4.
  <div class="step-box"><span class="step-num">1</span> Add the equations to eliminate y: 2x = 14.</div>
  <div class="step-box"><span class="step-num">2</span> Divide: x = 7.</div>
  <div class="step-box"><span class="step-num">3</span> Plug into x + y = 10: 7 + y = 10 → y = 3.</div>
  <strong>Answer:</strong> (7, 3). Check: 7 − 3 = 4 ✔
</div><div class="warning-box">Three possible outcomes:<br>• 1 solution → lines intersect<br>• 0 solutions → parallel lines (same slope)<br>• Infinite solutions → same line. If elimination produces 0 = 0, the system has infinitely many solutions.</div>`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-systems-of-linear-equations-easier/a/v2-sat-lesson-solving-systems-of-linear-equations'},
          {name:'Absolute Value Equations', diff:'medium', expl:`Absolute value measures distance from zero, so |x| = 3 has two solutions: x = 3 and x = −3.<div class="example-box">
  <strong>Question:</strong> Solve |2x − 1| = 5.
  <div class="step-box"><span class="step-num">1</span> Split into two cases: 2x − 1 = 5 or 2x − 1 = −5.</div>
  <div class="step-box"><span class="step-num">2</span> Case 1: 2x = 6 → x = 3.</div>
  <div class="step-box"><span class="step-num">3</span> Case 2: 2x = −4 → x = −2.</div>
  <strong>Answer:</strong> x = 3 and x = −2. Always produce both cases unless the value is 0.
</div><div class="warning-box">For inequalities:<br>• |x| &lt; 4 becomes −4 &lt; x &lt; 4 (an "and" sandwich)<br>• |x| &gt; 4 becomes x &lt; −4 or x &gt; 4.<br>And remember |x| = −5 has <strong>no solution</strong> — absolute value can never be negative.</div>`},
          {name:'Rational Expressions', diff:'hard', expl:`Rational expressions are fractions with variables. Simplify by factoring and canceling common factors.<div class="formula-box">Restriction: values that make the denominator zero are excluded.</div><div class="example-box">
  <strong>Question:</strong> Simplify (x² − 4)/(x + 2).
  <div class="step-box"><span class="step-num">1</span> Factor the numerator: (x + 2)(x − 2).</div>
  <div class="step-box"><span class="step-num">2</span> Cancel the common factor (x + 2).</div>
  <div class="step-box"><span class="step-num">3</span> Note the restriction: x ≠ −2 (denominator can't be zero).</div>
  <strong>Answer:</strong> x − 2, with x ≠ −2. State restrictions even though they're "gone" after canceling.
</div><div class="warning-box">To add or subtract rational expressions, find the LCD first, then combine numerators. To divide, flip the second fraction and multiply. Never cancel terms that are added — only factors.</div>`},
          {name:'Exponents & Radicals', diff:'medium', expl:`Master these core exponent rules:<br>• xᵃ × xᵇ = xᵃ⁺ᵇ<br>• xᵃ ÷ xᵇ = xᵃ⁻ᵇ<br>• (xᵃ)ᵇ = xᵃᵇ<br>• x⁻ᵃ = 1/xᵃ<br>• x^(1/n) = ⁿ√x — fractional exponents are roots!<div class="example-box">
  <strong>Question:</strong> Evaluate 8^(2/3).
  <div class="step-box"><span class="step-num">1</span> Read the exponent as a root then a power: ³√8 squared.</div>
  <div class="step-box"><span class="step-num">2</span> ³√8 = 2.</div>
  <div class="step-box"><span class="step-num">3</span> 2² = 4.</div>
  <strong>Answer:</strong> 4. The bottom of the fraction is the root, the top is the power.
</div><div class="warning-box">√a × √b = √(ab) and √a ÷ √b = √(a/b), but you can <strong>never</strong> split √(a + b) into √a + √b. And when you see a radical in a denominator, rationalize by multiplying by the conjugate.</div>`},
          {name:'Logarithms', diff:'hard', expl:`A logarithm answers "what exponent gives this result?"<div class="formula-box">log_b(x) = y means bʸ = x<br>log(xy) = log(x) + log(y)<br>log(x/y) = log(x) − log(y)<br>log(xⁿ) = n·log(x)</div><div class="example-box">
  <strong>Question:</strong> Solve log₂(8) = x.
  <div class="step-box"><span class="step-num">1</span> Rewrite in exponential form: 2ˣ = 8.</div>
  <div class="step-box"><span class="step-num">2</span> Express 8 as a power of 2: 2ˣ = 2³.</div>
  <div class="step-box"><span class="step-num">3</span> Since bases match, set exponents equal: x = 3.</div>
  <strong>Answer:</strong> x = 3. Stuck? Converting to exponential form almost always unblocks you.
</div><div class="warning-box">Change of base: log_b(a) = log(a) ÷ log(b) for any base — needed when the answer uses a different base than the problem. log_b(b) = 1 and log_b(1) = 0 are free points.</div>`},
          {name:'Complex Numbers', diff:'hard', expl:`Complex numbers have the form a + bi, where i = √(−1), so i² = −1.<div class="formula-box">i powers cycle: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then repeat</div><div class="example-box">
  <strong>Question:</strong> Compute (3 + 2i)(1 − i).
  <div class="step-box"><span class="step-num">1</span> FOIL: 3 − 3i + 2i − 2i².</div>
  <div class="step-box"><span class="step-num">2</span> Combine i terms: 3 − i − 2i².</div>
  <div class="step-box"><span class="step-num">3</span> Replace i² with −1: 3 − i + 2 = 5 − i.</div>
  <strong>Answer:</strong> 5 − i. Always substitute i² = −1 before finishing.
</div><div class="warning-box">To divide complex numbers, multiply top and bottom by the <strong>conjugate</strong> (a − bi). Example: (3 + 2i)/(1 − i) → multiply by (1 + i)/(1 + i) to make the denominator real. And i⁴ⁿ = 1 — divide the exponent by 4 to find its place in the cycle.</div>`},
          {name:'Sequences & Series', diff:'medium', expl:`<strong>Arithmetic</strong> sequences add a constant difference d; <strong>geometric</strong> sequences multiply by a constant ratio r.<div class="formula-box">Arithmetic nth term: aₙ = a₁ + (n − 1)d<br>Geometric nth term: aₙ = a₁ × rⁿ⁻¹<br>Arithmetic sum: Sₙ = n/2 × (a₁ + aₙ)</div><div class="example-box">
  <strong>Question:</strong> What is the 5th term of 3, 6, 12, 24, …?
  <div class="step-box"><span class="step-num">1</span> Identify: ratio r = 6/3 = 2, first term a₁ = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Use the geometric formula: a₅ = 3 × 2⁴.</div>
  <div class="step-box"><span class="step-num">3</span> Compute: 3 × 16 = 48.</div>
  <strong>Answer:</strong> 48. Use the formula, not repeated multiplication — faster and error-proof.
</div><div class="warning-box">The ACT usually asks only for a specific term or the next term. To decide arithmetic vs. geometric, check if consecutive terms differ by a constant (arithmetic) or are multiplied by a constant (geometric).</div>`},
        ]
      },
      {
        name: 'Coordinate Geometry',
        topics: [
          {name:'Slope of a Line', diff:'easy', expl:`Slope measures steepness: rise over run between two points.<div class="formula-box">m = (y₂ − y₁)/(x₂ − x₁)</div><div class="example-box">
  <strong>Question:</strong> Find the slope through (1, 2) and (4, 8).
  <div class="step-box"><span class="step-num">1</span> Label: (x₁,y₁) = (1,2), (x₂,y₂) = (4,8).</div>
  <div class="step-box"><span class="step-num">2</span> Rise = 8 − 2 = 6. Run = 4 − 1 = 3.</div>
  <div class="step-box"><span class="step-num">3</span> Slope = 6/3 = 2.</div>
  <strong>Answer:</strong> m = 2. Positive slope rises to the right.
</div><div class="warning-box">Key relationships: parallel lines have <strong>equal</strong> slopes; perpendicular lines have <strong>negative reciprocal</strong> slopes (product = −1). From Ax + By = C, slope = −A/B. Vertical lines have undefined slope; horizontal lines have slope 0.</div>`},
          {name:'Equations of Lines', diff:'medium', expl:`Three common forms — know how to convert between them:<br>• <strong>Slope-intercept:</strong> y = mx + b<br>• <strong>Point-slope:</strong> y − y₁ = m(x − x₁)<br>• <strong>Standard:</strong> Ax + By = C<div class="example-box">
  <strong>Question:</strong> Write the equation of the line through (2, 5) and (4, 11).
  <div class="step-box"><span class="step-num">1</span> Find slope: (11 − 5)/(4 − 2) = 6/2 = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Use point-slope with (2, 5): y − 5 = 3(x − 2).</div>
  <div class="step-box"><span class="step-num">3</span> Simplify to slope-intercept: y = 3x − 1.</div>
  <strong>Answer:</strong> y = 3x − 1. Verify by plugging in both points.
</div><div class="warning-box">Horizontal lines are y = c (slope 0); vertical lines are x = c (undefined slope — and <strong>not a function</strong>). The ACT frequently asks you to pick the equation matching a graph: read off the y-intercept and slope visually.</div>`},
          {name:'Distance & Midpoint Formulas', diff:'medium', expl:`Distance is just the Pythagorean theorem on the coordinate plane.<div class="formula-box">d = √[(x₂ − x₁)² + (y₂ − y₁)²]<br>Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div><div class="example-box">
  <strong>Question:</strong> Find the midpoint and distance between (2, 5) and (8, −1).
  <div class="step-box"><span class="step-num">1</span> Midpoint x: (2 + 8)/2 = 5.</div>
  <div class="step-box"><span class="step-num">2</span> Midpoint y: (5 + (−1))/2 = 2.</div>
  <div class="step-box"><span class="step-num">3</span> Distance: √[(8−2)² + (−1−5)²] = √(36 + 36) = √72 = 6√2.</div>
  <strong>Answer:</strong> Midpoint (5, 2), distance 6√2.
</div><div class="warning-box">The distance formula is often disguised as a Pythagorean problem: draw the right triangle, find the legs (differences in x and y), then solve for the hypotenuse. Simplify radicals fully to match answer choices.</div>`},
          {name:'Circles in the Coordinate Plane', diff:'medium', expl:`The standard equation of a circle makes the center and radius instantly visible.<div class="formula-box">(x − h)² + (y − k)² = r² — center (h, k), radius r</div><div class="example-box">
  <strong>Question:</strong> Give the center and radius of (x − 3)² + (y + 2)² = 25.
  <div class="step-box"><span class="step-num">1</span> Match to standard form: h = 3, k = −2 (the +2 flips sign).</div>
  <div class="step-box"><span class="step-num">2</span> r² = 25, so r = 5.</div>
  <strong>Answer:</strong> Center (3, −2), radius 5. Note the center coordinates always have flipped signs from the equation.
</div><div class="warning-box">If given x² + y² + 6x − 4y = 12, <strong>complete the square</strong> for x and y separately to reach standard form. A tangent line touches the circle at exactly one point, and the radius to that point is perpendicular to the tangent.</div>`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:circle-equations-easier/a/v2-sat-lesson-circle-equations'},
          {name:'Graphing Inequalities', diff:'medium', expl:`Graph the boundary line first, then shade the correct side.<br>• <strong>Solid line</strong> for ≤ or ≥ (boundary included)<br>• <strong>Dashed line</strong> for &lt; or &gt; (boundary excluded)<br>• y &gt; mx + b → shade <strong>above</strong>; y &lt; mx + b → shade <strong>below</strong><div class="example-box">
  <strong>Question:</strong> Shade the region for y &gt; 2x + 1.
  <div class="step-box"><span class="step-num">1</span> Draw the boundary y = 2x + 1 as a dashed line.</div>
  <div class="step-box"><span class="step-num">2</span> Test a point not on the line, e.g., (0, 0): 0 &gt; 1? No.</div>
  <div class="step-box"><span class="step-num">3</span> Since (0,0) fails, shade the side <strong>opposite</strong> it.</div>
  <strong>Answer:</strong> Dashed line, shaded above the line.
</div><div class="warning-box">For systems of inequalities, graph each one and the solution is the <strong>overlapping</strong> region. Testing the origin is the fastest way to decide which side to shade.</div>`},
        ]
      },
      {
        name: 'Plane Geometry',
        topics: [
          {name:'Angles & Parallel Lines', diff:'easy', expl:`When a transversal crosses two parallel lines, it creates sets of equal and supplementary angles.<br>• <strong>Corresponding</strong> angles: equal<br>• <strong>Alternate interior</strong> angles: equal<br>• <strong>Alternate exterior</strong> angles: equal<br>• <strong>Same-side interior</strong> angles: sum to 180°<div class="example-box">
  <strong>Question:</strong> Two parallel lines are cut by a transversal. One interior angle is 65°. Find its same-side interior partner.
  <div class="step-box"><span class="step-num">1</span> Same-side interior angles are supplementary.</div>
  <div class="step-box"><span class="step-num">2</span> 180° − 65° = 115°.</div>
  <strong>Answer:</strong> 115°. Adjacent angles at an intersection also sum to 180° (a straight line).
</div><div class="warning-box">Vertical angles are always equal. If lines are <strong>not</strong> parallel, none of the equal-angle rules apply — the ACT will mark this with "if and only if" phrasing. A straight angle is 180°; a right angle is 90°.</div>`},
          {name:'Triangles', diff:'medium', expl:`Every triangle has these fundamentals:<br>• Angles sum to <strong>180°</strong><br>• Area = ½ × base × height<br>• Pythagorean theorem for right triangles: a² + b² = c²<br>• Side lengths: the longest side is opposite the largest angle<div class="example-box">
  <strong>Question:</strong> A right triangle has legs 6 and 8. Find the hypotenuse and area.
  <div class="step-box"><span class="step-num">1</span> Hypotenuse: c² = 6² + 8² = 36 + 64 = 100.</div>
  <div class="step-box"><span class="step-num">2</span> c = 10. (It's a 6-8-10 Pythagorean triple.)</div>
  <div class="step-box"><span class="step-num">3</span> Area = ½ × 6 × 8 = 24.</div>
  <strong>Answer:</strong> Hypotenuse 10, area 24. The height is the perpendicular leg, not the slanted side.
</div><div class="warning-box">Memorize the common Pythagorean triples — 3-4-5, 5-12-13, 8-15-17, 7-24-25 — and the special triangles 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2). They save enormous time.</div>`},
          {name:'Similar & Congruent Triangles', diff:'medium', expl:`<strong>Congruent</strong> triangles are identical in size and shape; <strong>similar</strong> triangles have the same shape but scaled sizes.<div class="formula-box">Similar triangles: corresponding angles equal, corresponding sides proportional (ratio = scale factor)</div><div class="example-box">
  <strong>Question:</strong> Triangle A has sides 3, 4, 5. A similar triangle B has a long side of 15. Find its short side.
  <div class="step-box"><span class="step-num">1</span> Scale factor = 15/5 = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Multiply every side by 3: short side = 3 × 3 = 9.</div>
  <strong>Answer:</strong> 9. Set up a proportion (3/9 = 5/15) to double-check.
</div><div class="warning-box">Congruence shortcuts: SSS, SAS, ASA, AAS (and HL for right triangles). AAA proves <strong>similarity</strong> but <strong>not</strong> congruence. If a triangle inside another is stated as similar, immediately write the proportional sides ratio.</div>`},
          {name:'Quadrilaterals & Polygons', diff:'medium', expl:`Polygon basics:<br>• Sum of interior angles of an n-gon = (n − 2) × 180°<br>• Each interior angle of a regular n-gon = (n − 2) × 180° / n<br>• Sum of exterior angles = 360° (always!)<div class="example-box">
  <strong>Question:</strong> What is each interior angle of a regular hexagon?
  <div class="step-box"><span class="step-num">1</span> n = 6, so interior sum = (6 − 2) × 180° = 720°.</div>
  <div class="step-box"><span class="step-num">2</span> Regular = equal angles: 720° ÷ 6 = 120°.</div>
  <strong>Answer:</strong> 120°. Each exterior angle is 360°/6 = 60°, and 120° + 60° = 180° ✔
</div><div class="warning-box">Quadrilateral facts the ACT loves: rectangles have right angles and equal diagonals; parallelograms have opposite sides parallel and equal, opposite angles equal; a square is a rectangle, a rhombus, <em>and</em> a parallelogram. Area of a parallelogram = base × height (the perpendicular height, not the slanted side).</div>`},
          {name:'Circles', diff:'medium', expl:`Circle formulas to have memorized:<br>• <strong>Circumference:</strong> C = 2πr (or πd)<br>• <strong>Area:</strong> A = πr²<br>• Arc length (central angle θ in degrees): (θ/360) × 2πr<br>• Sector area: (θ/360) × πr²<div class="example-box">
  <strong>Question:</strong> A circle has radius 6. Find the arc length and sector area for a 60° central angle.
  <div class="step-box"><span class="step-num">1</span> Arc length = (60/360) × 2π(6) = (1/6) × 12π = 2π.</div>
  <div class="step-box"><span class="step-num">2</span> Sector area = (60/360) × π(6)² = (1/6) × 36π = 6π.</div>
  <strong>Answer:</strong> Arc 2π, sector area 6π. The fraction (θ/360) scales the full circle.
</div><div class="warning-box">A tangent line touches a circle at one point and is perpendicular to the radius at that point. An inscribed angle is half its intercepted arc; a diameter subtends a 90° inscribed angle — a favorite hidden-right-triangle setup.</div>`},
          {name:'3D Geometry', diff:'medium', expl:`Key volume and surface-area formulas:<br>• <strong>Cube:</strong> V = s³, SA = 6s²<br>• <strong>Rectangular prism:</strong> V = lwh<br>• <strong>Cylinder:</strong> V = πr²h, SA = 2πr² + 2πrh<br>• <strong>Cone:</strong> V = (1/3)πr²h<br>• <strong>Sphere:</strong> V = (4/3)πr³, SA = 4πr²<div class="example-box">
  <strong>Question:</strong> A cylinder has radius 3 and height 5. Find its volume and surface area.
  <div class="step-box"><span class="step-num">1</span> Volume = π(3)²(5) = 45π.</div>
  <div class="step-box"><span class="step-num">2</span> Surface area = 2π(3)² + 2π(3)(5) = 18π + 30π = 48π.</div>
  <strong>Answer:</strong> Volume 45π, surface area 48π. Two circular bases + the rolled-up rectangle.
</div><div class="warning-box">A right circular cone and a cylinder with the same base and height have volumes in ratio 1:3. If a solid is "inscribed" in another (like a cube in a sphere), use the Pythagorean theorem in 3D: d = √(l² + w² + h²).</div>`},
        ]
      },
      {
        name: 'Trigonometry',
        topics: [
          {name:'SOH-CAH-TOA', diff:'medium', expl:`For right triangles only, the three trig ratios relate angles to side lengths.<div class="formula-box">sin θ = Opposite/Hypotenuse<br>cos θ = Adjacent/Hypotenuse<br>tan θ = Opposite/Adjacent</div><div class="example-box">
  <strong>Question:</strong> A right triangle has angle 30° and hypotenuse 10. Find the side opposite the 30° angle.
  <div class="step-box"><span class="step-num">1</span> We know hyp and want opposite → use sine: sin 30° = opposite/10.</div>
  <div class="step-box"><span class="step-num">2</span> sin 30° = 1/2, so opposite/10 = 1/2.</div>
  <div class="step-box"><span class="step-num">3</span> Opposite = 5.</div>
  <strong>Answer:</strong> 5 — and it matches the 30-60-90 pattern (short leg = half the hypotenuse).
</div><div class="warning-box">Decide which ratio by what you <em>have</em> and what you <em>want</em>: opposite+hyp → sin, adjacent+hyp → cos, opposite+adjacent → tan. To find an angle, use the inverse functions (sin⁻¹, cos⁻¹, tan⁻¹).</div>`, khan:'https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:right-triangle-trigonometry-easier/a/v2-sat-lesson-right-triangle-trigonometry'},
          {name:'Reciprocal Trig Functions', diff:'hard', expl:`The reciprocal trig functions are just one-over the basic ones.<div class="formula-box">csc θ = 1/sin θ<br>sec θ = 1/cos θ<br>cot θ = 1/tan θ = cos θ/sin θ</div><div class="example-box">
  <strong>Question:</strong> If sin θ = 2/3 in a right triangle, find csc θ.
  <div class="step-box"><span class="step-num">1</span> csc is the reciprocal of sin.</div>
  <div class="step-box"><span class="step-num">2</span> csc θ = 1 ÷ (2/3) = 3/2.</div>
  <strong>Answer:</strong> 3/2. Flip the fraction — don't compute the angle.
</div><div class="warning-box">Memorize the reciprocal pairs: csc ↔ sin, sec ↔ cos, cot ↔ tan. A common ACT move is asking for a reciprocal directly from a given ratio, or using the identity sin²θ + cos²θ = 1 to find the third ratio.</div>`},
          {name:'Unit Circle & Special Angles', diff:'hard', expl:`The unit circle links angles to exact trig values. The special angles appear constantly: 0°, 30°, 45°, 60°, 90° (and their multiples in other quadrants).<div class="formula-box">Special values: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2<br>cos is the same list reversed: cos 60° = 1/2, cos 45° = √2/2, cos 30° = √3/2</div><div class="example-box">
  <strong>Question:</strong> Find the exact value of cos 120°.
  <div class="step-box"><span class="step-num">1</span> 120° is in Quadrant II (90°–180°), where cosine is negative.</div>
  <div class="step-box"><span class="step-num">2</span> Reference angle = 180° − 120° = 60°.</div>
  <div class="step-box"><span class="step-num">3</span> cos 60° = 1/2, apply the sign: −1/2.</div>
  <strong>Answer:</strong> −1/2. Quadrant decides the sign; the reference angle decides the magnitude.
</div><div class="warning-box">Sign rules (ASTC: All, Sine, Tangent, Cosine positive by quadrant from QI clockwise): QI all positive, QII sine positive, QIII tangent positive, QIV cosine positive. Radian conversions: 180° = π, 90° = π/2, 45° = π/4, 30° = π/6.</div>`},
          {name:'Law of Sines & Cosines', diff:'hard', expl:`For <strong>non-right</strong> triangles, these two laws are the workhorses.<div class="formula-box">Law of Sines: a/sin A = b/sin B = c/sin C<br>Law of Cosines: c² = a² + b² − 2ab·cos C</div><div class="example-box">
  <strong>Question:</strong> Triangle has sides a = 7, b = 5, and angle C = 60° between them. Find side c.
  <div class="step-box"><span class="step-num">1</span> Use the Law of Cosines (we have two sides and the included angle).</div>
  <div class="step-box"><span class="step-num">2</span> c² = 7² + 5² − 2(7)(5)cos 60°.</div>
  <div class="step-box"><span class="step-num">3</span> cos 60° = 1/2: c² = 49 + 25 − 35 = 39.</div>
  <div class="step-box"><span class="step-num">4</span> c = √39.</div>
  <strong>Answer:</strong> c = √39.
</div><div class="warning-box">Use the Law of Sines when you know an angle and its opposite side (two such pairs). Use the Law of Cosines when you know two sides and the included angle, or all three sides. The ambiguous (SSA) case rarely appears on the ACT — if it does, both triangles fit.</div>`},
        ]
      },
      {
        name: 'Functions',
        topics: [
          {name:'Function Notation', diff:'easy', expl:`f(x) reads as "f of x" — the output of function f when the input is x.<div class="example-box">
  <strong>Question:</strong> If f(x) = 3x − 2, find f(4).
  <div class="step-box"><span class="step-num">1</span> Replace every x with 4: f(4) = 3(4) − 2.</div>
  <div class="step-box"><span class="step-num">2</span> Compute: 12 − 2 = 10.</div>
  <strong>Answer:</strong> f(4) = 10. Just substitute — the notation is the instruction.
</div><div class="warning-box">On a graph, f(a) is the y-value of the point with x-coordinate a. The ACT also loves f(f(x)) (a function applied to its own output) and f(g(x)) — work from the inside out.</div>`},
          {name:'Domain & Range', diff:'medium', expl:`<strong>Domain</strong> = all possible x-values (inputs); <strong>Range</strong> = all possible y-values (outputs).<div class="example-box">
  <strong>Question:</strong> State the domain of f(x) = 1/(x − 3).
  <div class="step-box"><span class="step-num">1</span> The denominator can't be zero: x − 3 ≠ 0.</div>
  <div class="step-box"><span class="step-num">2</span> So x ≠ 3.</div>
  <strong>Answer:</strong> All real numbers except x = 3. Restriction sources: division by zero and even roots of negatives.
</div><div class="warning-box">On graphs, read the domain left-to-right and the range bottom-to-top. Open circles exclude endpoints, closed circles include them. For √(x): domain x ≥ 0. For 1/x: domain excludes 0.</div>`},
          {name:'Function Transformations', diff:'medium', expl:`Transformations shift, stretch, and flip the parent graph.<div class="formula-box">y = f(x) + k → shift UP by k (k &gt; 0)<br>y = f(x − h) → shift RIGHT by h<br>y = −f(x) → reflect over the x-axis<br>y = f(−x) → reflect over the y-axis<br>y = a·f(x) → vertical stretch by a (a &gt; 1)</div><div class="example-box">
  <strong>Question:</strong> Describe the graph of y = f(x − 2) + 3 compared to y = f(x).
  <div class="step-box"><span class="step-num">1</span> x − 2 inside: shift right 2 units (inside is always counterintuitive).</div>
  <div class="step-box"><span class="step-num">2</span> + 3 outside: shift up 3 units.</div>
  <strong>Answer:</strong> The graph shifts right 2 and up 3.
</div><div class="warning-box">Inside the function (affecting x) moves the graph <strong>opposite</strong> to intuition: x − 2 moves right, x + 2 moves left. Outside (affecting y) moves normally: +2 up, −2 down. Absolute value flips the negative part of the graph upward.</div>`},
          {name:'Composition & Inverses', diff:'hard', expl:`<strong>Composition</strong> chains functions; an <strong>inverse</strong> undoes a function.<div class="formula-box">(f∘g)(x) = f(g(x)) — apply g first, then f<br>f⁻¹(f(x)) = x and f(f⁻¹(x)) = x</div><div class="example-box">
  <strong>Question:</strong> If f(x) = 2x + 1 and g(x) = x², find f(g(3)) and f⁻¹(x).
  <div class="step-box"><span class="step-num">1</span> g(3) = 9.</div>
  <div class="step-box"><span class="step-num">2</span> f(g(3)) = f(9) = 2(9) + 1 = 19.</div>
  <div class="step-box"><span class="step-num">3</span> For the inverse: swap x and y in y = 2x + 1 → x = 2y + 1 → y = (x − 1)/2.</div>
  <strong>Answer:</strong> f(g(3)) = 19, f⁻¹(x) = (x − 1)/2.
</div><div class="warning-box">Work composition from the inside out. To find an inverse algebraically: swap x and y, then solve for y. The graph of an inverse is the reflection of the original across the line y = x.</div>`},
        ]
      },
      {
        name: 'Statistics & Probability',
        topics: [
          {name:'Counting Principles', diff:'medium', expl:`Counting tells you <em>how many</em> outcomes or arrangements exist.<div class="formula-box">Fundamental Counting Principle: if A has m choices and B has n choices, A then B has m × n choices<br>Permutations: nPr = n!/(n − r)! (order matters)<br>Combinations: nCr = n!/[r!(n − r)!] (order doesn't matter)</div><div class="example-box">
  <strong>Question:</strong> How many different 3-digit codes can be made from the digits 0–9 if no digit repeats and the first digit can't be 0?
  <div class="step-box"><span class="step-num">1</span> First digit: 9 choices (1–9).</div>
  <div class="step-box"><span class="step-num">2</span> Second digit: 9 choices (10 digits minus the one used).</div>
  <div class="step-box"><span class="step-num">3</span> Third digit: 8 choices.</div>
  <strong>Answer:</strong> 9 × 9 × 8 = 648 codes. Multiply the choices at each stage.
</div><div class="warning-box">Decide permutation vs. combination: does order matter? Arranging books on a shelf = permutation (AB ≠ BA). Choosing a committee = combination (AB = BA). Factorials: 5! = 5 × 4 × 3 × 2 × 1 = 120.</div>`},
          {name:'Advanced Probability', diff:'hard', expl:`Advanced probability handles <em>dependent</em> events and conditional probability.<div class="formula-box">P(A and B) = P(A) × P(B|A) — for dependent events<br>P(B|A) = P(A and B) / P(A)<br>P(A or B) = P(A) + P(B) − P(A and B)</div><div class="example-box">
  <strong>Question:</strong> A bag has 3 red and 2 blue marbles. Draw two without replacement. What is P(both red)?
  <div class="step-box"><span class="step-num">1</span> P(first red) = 3/5.</div>
  <div class="step-box"><span class="step-num">2</span> P(second red | first red) = 2/4 (one red is gone).</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 3/5 × 2/4 = 6/20 = 3/10.</div>
  <strong>Answer:</strong> 3/10. "Without replacement" always changes the second probability.
</div><div class="warning-box">Mutually exclusive events: P(A and B) = 0. Independent events: P(A and B) = P(A) × P(B) with no conditional adjustment. On the ACT, "given that" (conditional) language is the cue to divide by the restricted total.</div>`},
          {name:'Expected Value', diff:'hard', expl:`Expected value is the weighted average of all possible outcomes — the "long-run average."<div class="formula-box">E = Σ [value × probability]</div><div class="example-box">
  <strong>Question:</strong> A game pays $10 with probability 1/4, $2 with probability 1/2, and $0 otherwise. What is the expected payout?
  <div class="step-box"><span class="step-num">1</span> List each outcome and its probability: $10 (0.25), $2 (0.5), $0 (0.25).</div>
  <div class="step-box"><span class="step-num">2</span> Multiply each by its probability: 10(0.25) = 2.5, 2(0.5) = 1, 0(0.25) = 0.</div>
  <div class="step-box"><span class="step-num">3</span> Sum: 2.5 + 1 + 0 = 3.5.</div>
  <strong>Answer:</strong> $3.50 expected payout. Probabilities must sum to 1 before you start.
</div><div class="warning-box">Expected value can be negative or fractional — it's an average, not a possible single outcome. The ACT often frames it as a "fair game": the fair price to play equals the expected value.</div>`},
          {name:'Scatterplots & Lines of Best Fit', diff:'medium', expl:`A <strong>line of best fit</strong> (regression line) summarizes the trend in a scatterplot.<div class="example-box">
  <strong>Question:</strong> A line of best fit passes through (10, 40) and (30, 80). Estimate the value at x = 20.
  <div class="step-box"><span class="step-num">1</span> Slope = (80 − 40)/(30 − 10) = 40/20 = 2.</div>
  <div class="step-box"><span class="step-num">2</span> At x = 20 (halfway between 10 and 30), y is halfway between 40 and 80.</div>
  <div class="step-box"><span class="step-num">3</span> y = 60. (Or use y = 2x + 20: 2(20) + 20 = 60.)</div>
  <strong>Answer:</strong> 60. Reading the line is always preferred over reading individual points.
</div><div class="warning-box">Positive slope = increasing trend; negative slope = decreasing; flat = no correlation. Correlation (r) tells strength and direction, <em>not</em> causation. Don't extrapolate far beyond the data range — lines of best fit are only reliable where data exists.</div>`},
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
    desc: '36 questions · 40 minutes · Literary, Social Studies, Humanities, and Natural Science passages',
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
    desc: '40 questions · 40 minutes · Optional add-on · Data analysis & reasoning',
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
    desc: 'Full-length ACT practice tests by subject',
    categories: [
      {
        name: 'Math',
        topics: [
          {name: 'Practice Test 1', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%201.pdf?id=163821451', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%201%20Answer%20Key.pdf?id=163821424'},
          {name: 'Practice Test 2', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%202.pdf?id=163821452', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%202%20Answer%20Key.pdf?id=163821425'},
          {name: 'Practice Test 3', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%203.pdf?id=163821454', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%203%20Answer%20Key.pdf?id=163821426'},
          {name: 'Practice Test 4', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%204.pdf?id=163821456', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%204%20Answers.pdf?id=163821460'},
          {name: 'Practice Test 5', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%205.pdf?id=163821439', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%205%20Answers.pdf?id=163821457'},
          {name: 'Practice Test 6', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%206.pdf?id=163821453', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%206%20Answers.pdf?id=163821461'},
          {name: 'Practice Test 7', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%207.pdf?id=163821444'},
          {name: 'Practice Test 8', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%208.pdf?id=163821445', answerKey: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%208%20Answers.pdf?id=163821459'},
          {name: 'Practice Test 9 + Answers', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%209%20+%20Answers.pdf?id=163821462'},
          {name: 'Practice Test 10 + Answers', pdf: 'https://www.mymathscloud.com/api/download/modules/University/SAT-ACT/ACT/Practice%20Test%2010%20+%20Answers.pdf?id=163821458'}
        ]
      },
      {
        name: 'English',
        topics: [
          {name: 'English Test 1', pdf: ''},
          {name: 'English Test 2', pdf: ''}
        ]
      },
      {
        name: 'Reading',
        topics: [
          {name: 'Reading Test 1', pdf: ''},
          {name: 'Reading Test 2', pdf: ''}
        ]
      },
      {
        name: 'Science',
        topics: [
          {name: 'Science Test 1', pdf: ''},
          {name: 'Science Test 2', pdf: ''}
        ]
      }
    ]
  },
  "other links": {
    title: 'Other Links',
    desc: 'Helpful ACT resources and study links',
    categories: [
      {
        name: 'Resources',
        topics: [
          {name: 'ACT Official Site', url: 'https://www.act.org'},
          {name: 'ACT Test Prep', url: 'https://www.act.org/content/act/en/free-act-test-prep.html'},
          {name: 'MyMathsCloud ACT', url: 'https://www.mymathscloud.com/modules/university/admissions-tests-sat-act/act'}
        ]
      }
    ]
  }
};
