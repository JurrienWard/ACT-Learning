(function () {
  'use strict';
  data["math"] = {
    "title": "ACT Math",
    "desc": "45 questions · 50 minutes · 5 answer choices per question. Topics span pre-algebra through trigonometry, with algebra, geometry, and word problems weighted heaviest. Know the formulas cold, use your calculator wisely, and practice pacing to finish strong.",
    "categories": [
        {
            "name": "Number & Quantity",
            "topics": [
{
            "name": "Number Types & Properties",
            "diff": "easy",
            "visual": {"type":"numberLine","min":-10,"max":10,"marks":[{"v":-5,"filled":true},{"v":0,"filled":true},{"v":5,"filled":true}],"caption":""},
            "expl": `<strong>Real numbers</strong> are every number you can place on a number line: rational numbers (fractions, terminating and repeating decimals like 1/3 and 0.5) and irrational numbers (like π and √2, which never terminate or repeat). <strong>Integers</strong> are the whole numbers and their negatives (…, −2, −1, 0, 1, 2, …). The <strong>natural numbers</strong> are the counting numbers 1, 2, 3, … — the only difference from integers is that zero and the negatives are excluded.<br><br><strong>Prime</strong> numbers have exactly two factors (2, 3, 5, 7, 11…) while <strong>composite</strong> numbers have more than two (4, 6, 8, 9…). The number 1 is neither prime nor composite, and 2 is the only even prime — every other even number has 2 as a factor.<br><br>Key rules to memorize:<br>• Negative × Negative = Positive<br>• Even + Even = Even, Odd + Odd = Even, Even + Odd = Odd<br>• Odd × Odd = Odd, Odd × Even = Even, Even × Even = Even<br><br>These parity facts can decide a problem without any computation — a real time-saver on the early questions.
<div class="example-box">
  <strong>Question:</strong> How many integers between 1 and 100 are divisible by 3?
  <div class="step-box"><span class="step-num">1</span> The first multiple is 3 and the last is 99.</div>
  <div class="step-box"><span class="step-num">2</span> Multiples of 3 form an arithmetic sequence: 3, 6, 9, …, 99 with common difference 3.</div>
  <div class="step-box"><span class="step-num">3</span> Count them: (99 − 3) ÷ 3 + 1 = 96 ÷ 3 + 1 = 32 + 1 = 33.</div>
  <strong>Answer:</strong> 33 integers. The +1 is essential — without it you undercount by one.
</div>
<div class="example-box">
  <strong>Question:</strong> Which of the following is NOT an integer? 8, −4, 0, 3.5, √9.
  <div class="step-box"><span class="step-num">1</span> Integers include negatives, zero, and whole numbers — so −4 and 0 are integers.</div>
  <div class="step-box"><span class="step-num">2</span> √9 = 3, which is an integer. Only 3.5 fails (a terminating decimal / fraction).</div>
  <strong>Answer:</strong> 3.5. Watch for radical expressions that secretly simplify to whole numbers.
</div>
<div class="warning-box">On the ACT, "between 1 and 100" usually means <strong>inclusive</strong> (both 1 and 100 are candidates) unless it says "exclusive" or "not including." Always read the boundary conditions before counting. When stuck on a classify-the-number question, test each choice against the definition rather than guessing.</div>`
          },
{
            "name": "Factors, Multiples & Divisibility",
            "diff": "easy",
            "visual": {"type":"numberLine","min":0,"max":24,"marks":[{"v":6,"filled":true},{"v":12,"filled":true},{"v":18,"filled":true},{"v":24,"filled":true}],"caption":""},
            "expl": `A <strong>factor</strong> divides a number evenly; a <strong>multiple</strong> is the product of a number and an integer. The <strong>GCF</strong> (Greatest Common Factor) is the largest factor two numbers share; the <strong>LCM</strong> (Least Common Multiple) is the smallest multiple they share.<br><br>Quick divisibility checks worth knowing:<br>• Divisible by 2 → ends in an even digit<br>• Divisible by 3 → digit sum is divisible by 3<br>• Divisible by 5 → ends in 0 or 5<br>• Divisible by 9 → digit sum is divisible by 9<br>• Divisible by 10 → ends in 0<br><br>These let you eliminate answer choices in seconds without dividing.
<div class="formula-box">GCF: take shared prime factors at the lowest exponent<br>LCM: take all prime factors at the highest exponent<br>Handy check: GCF × LCM = product of the two numbers</div>
<div class="example-box">
  <strong>Question:</strong> Find the GCF and LCM of 24 and 36.
  <div class="step-box"><span class="step-num">1</span> Prime factorize: 24 = 2³ × 3, 36 = 2² × 3².</div>
  <div class="step-box"><span class="step-num">2</span> GCF: shared primes at lowest exponents → 2² × 3 = 12.</div>
  <div class="step-box"><span class="step-num">3</span> LCM: all primes at highest exponents → 2³ × 3² = 72.</div>
  <strong>Answer:</strong> GCF = 12, LCM = 72. Quick check: 24 × 36 = 864 = 12 × 72. ✔
</div>
<div class="example-box">
  <strong>Question:</strong> A red light blinks every 4 seconds and a blue light blinks every 6 seconds. If both blink together now, when will they next blink together?
  <div class="step-box"><span class="step-num">1</span> This is an LCM problem: find the first time both cycles line up.</div>
  <div class="step-box"><span class="step-num">2</span> LCM(4, 6): 4 = 2², 6 = 2 × 3 → 2² × 3 = 12.</div>
  <strong>Answer:</strong> 12 seconds later. "Both together again" wording is the ACT's code for LCM; "split into equal largest groups" points to the GCF.
</div>
<div class="warning-box">A classic trap: for consecutive integers, the product is divisible by n!. Example: the product of 4 consecutive integers is always divisible by 24 (= 4!). Also, the GCF can never exceed the smaller number, and the LCM can never be smaller than the larger one — use those bounds to spot impossible answer choices.</div>`
          },
{
            "name": "Scientific Notation",
            "diff": "easy",
            "visual": {"type":"line","pts":[[0,1],[1,10],[2,100],[3,1000]],"xMin":0,"xMax":3,"yMin":0,"yMax":1000,"xLabel":"n","yLabel":"10ⁿ","caption":"Powers of ten"},
            "expl": `Scientific notation writes a number as a coefficient times a power of ten, keeping the coefficient between 1 and 10. It is how the ACT handles very large and very small numbers without long strings of zeros — expect it around population, distance, and measurement problems.
<div class="formula-box">a × 10ⁿ, where 1 ≤ a &lt; 10<br>Positive n → big numbers; negative n → small numbers<br>To compare two numbers, compare the exponent first, then the coefficient</div>
<div class="example-box">
  <strong>Question:</strong> Write 3.5 × 10⁶ in standard form, and 4.2 × 10⁻³ in standard form.
  <div class="step-box"><span class="step-num">1</span> Positive exponent: move the decimal 6 places right: 3.500000 → 3,500,000.</div>
  <div class="step-box"><span class="step-num">2</span> Negative exponent: move the decimal 3 places left: 4.2 → 0.0042.</div>
  <strong>Answer:</strong> 3,500,000 and 0.0042. Exponent positive → right; negative → left.
</div>
<div class="example-box">
  <strong>Question:</strong> A culture has 6 × 10⁴ cells, each 5 × 10⁻⁶ cm wide. If the cells line up end to end, how wide is the row?
  <div class="step-box"><span class="step-num">1</span> Multiply counts and sizes: (6 × 10⁴)(5 × 10⁻⁶).</div>
  <div class="step-box"><span class="step-num">2</span> Numbers and powers separately: 6 × 5 = 30, 10⁴ × 10⁻⁶ = 10⁻².</div>
  <div class="step-box"><span class="step-num">3</span> 30 × 10⁻² = 0.30 = 3 × 10⁻¹ cm.</div>
  <strong>Answer:</strong> 3 × 10⁻¹ cm. Combine coefficients, add exponents, then re-normalize.
</div>
<div class="warning-box">When multiplying in scientific notation: (a × 10ᵐ)(b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ, then re-normalize if the new coefficient is ≥ 10 (e.g., 12 × 10⁵ → 1.2 × 10⁶). For division, subtract exponents: 10ᵐ ÷ 10ⁿ = 10ᵐ⁻ⁿ. On your calculator, use the EE or ×10ⁿ key instead of typing out the zeros.</div>`
          },
{
            "name": "Order of Operations (PEMDAS)",
            "diff": "easy",
            "visual": {"type":"line","pts":[[1,8],[2,11]],"xMin":0,"xMax":3,"yMin":0,"yMax":12,"caption":"Step 1: 4×2 = 8, Step 2: 3+8 = 11"},
            "expl": `Always simplify in this order: <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right) → <strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right).<br><br>Treat multiplication/division as one level and addition/subtraction as one level — within each level you work strictly left to right, not multiplication-before-division.
<div class="example-box">
  <strong>Question:</strong> Evaluate 3 + 4 × 2.
  <div class="step-box"><span class="step-num">1</span> Multiplication before addition: 4 × 2 = 8.</div>
  <div class="step-box"><span class="step-num">2</span> Then add: 3 + 8 = 11.</div>
  <strong>Answer:</strong> 11 — <strong>not</strong> 14. Adding left-to-right first is the classic mistake.
</div>
<div class="example-box">
  <strong>Question:</strong> Evaluate (5 − 2)² × 3 − 4.
  <div class="step-box"><span class="step-num">1</span> Parentheses first: (5 − 2) = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Exponent: 3² = 9.</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 9 × 3 = 27, then subtract: 27 − 4 = 23.</div>
  <strong>Answer:</strong> 23. Work inside-out: parentheses, then exponents, then multiply, then add/subtract.
</div>
<div class="warning-box">Two huge traps:<br>• −3² = −9 but (−3)² = 9 — the exponent applies only to the 3, not the minus sign, unless the minus is inside parentheses.<br>• With multiplication and division, work strictly left to right: 8 ÷ 2 × 4 = 16, not 1.</div>`
          }
            ]
        },
        {
            "name": "Algebra",
            "topics": [
{
            "name": "Solving Linear Equations",
            "diff": "easy",
            "visual": {"type":"numberLine","min":0,"max":10,"marks":[{"v":5,"filled":true}],"caption":"3x + 5 = 20 → x = 5"},
            "khan": "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-linear-equations-and-inequalities-easier/a/v2-sat-lesson-solving-linear-equations-and-inequalities",
            "expl": `Get the variable alone on one side by doing the same operation to both sides of the equation — whatever you do to one side, you must do to the other. This keeps the equation balanced.
<div class="example-box">
  <strong>Question:</strong> Solve 3x + 5 = 20.
  <div class="step-box"><span class="step-num">1</span> Subtract 5 from both sides: 3x = 15.</div>
  <div class="step-box"><span class="step-num">2</span> Divide both sides by 3: x = 5.</div>
  <div class="step-box"><span class="step-num">3</span> Check: 3(5) + 5 = 20 ✔</div>
  <strong>Answer:</strong> x = 5. Always plug back in to verify.
</div>
<div class="example-box">
  <strong>Question:</strong> Solve 5x − 7 = 3x + 9.
  <div class="step-box"><span class="step-num">1</span> Collect variables on one side: subtract 3x from both sides → 2x − 7 = 9.</div>
  <div class="step-box"><span class="step-num">2</span> Add 7 to both sides: 2x = 16.</div>
  <div class="step-box"><span class="step-num">3</span> Divide by 2: x = 8.</div>
  <strong>Answer:</strong> x = 8. Variables on both sides: move the smaller coefficient first to keep numbers positive.
</div>
<div class="warning-box">If variables appear on both sides, collect them on one side <em>first</em>. If fractions are present, multiply every term by the LCD to clear them before solving. When a question asks "what value makes this equation true," the answer choices are usually integers — substitute them in to check quickly.</div>`
          },
{
            "name": "Linear Inequalities",
            "diff": "medium",
            "visual": {"type":"numberLine","min":-6,"max":2,"marks":[{"v":-3,"filled":false}],"caption":"x < −3"},
            "expl": `Solved like equations with one crucial exception: <strong>multiplying or dividing by a negative flips the inequality sign</strong>. Adding or subtracting never changes the direction.
<div class="formula-box">−2x &gt; 6 → divide by −2 → x &lt; −3</div>
<div class="example-box">
  <strong>Question:</strong> Solve and graph −2x &gt; 6.
  <div class="step-box"><span class="step-num">1</span> Divide both sides by −2.</div>
  <div class="step-box"><span class="step-num">2</span> Flip the sign: x &lt; −3.</div>
  <div class="step-box"><span class="step-num">3</span> Graph: open circle at −3, arrow pointing left.</div>
  <strong>Answer:</strong> x &lt; −3. Open circle because −3 is not included.
</div>
<div class="example-box">
  <strong>Question:</strong> Solve 2x + 1 ≤ 9 and graph the solution.
  <div class="step-box"><span class="step-num">1</span> Subtract 1: 2x ≤ 8.</div>
  <div class="step-box"><span class="step-num">2</span> Divide by 2 (positive, no flip): x ≤ 4.</div>
  <div class="step-box"><span class="step-num">3</span> Graph: closed (filled) circle at 4, arrow left.</div>
  <strong>Answer:</strong> x ≤ 4. Closed circle because 4 is included.
</div>
<div class="warning-box">Compound inequalities: "AND" graphs overlap (intersection); "OR" graphs combine (union). Absolute value: |x| &lt; a becomes −a &lt; x &lt; a, but |x| &gt; a splits into x &lt; −a or x &gt; a. Testing a convenient value (like 0) in the original inequality confirms which side is shaded.</div>`
          },
{
            "name": "Evaluating Expressions",
            "diff": "easy",
            "visual": {"type":"numberLine","min":0,"max":24,"marks":[{"v":21,"filled":true}],"caption":"2(3)² − 3(−1) = 21"},
            "expl": `Substitute the given values for the variables, then simplify using the order of operations. The most reliable technique is to wrap each substitution in parentheses so signs and exponents do not get lost.
<div class="example-box">
  <strong>Question:</strong> If x = 3 and y = −1, evaluate 2x² − 3y.
  <div class="step-box"><span class="step-num">1</span> Substitute with parentheses: 2(3)² − 3(−1).</div>
  <div class="step-box"><span class="step-num">2</span> Exponent first: 2(9) − 3(−1).</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 18 + 3.</div>
  <strong>Answer:</strong> 21. Using parentheses around substitutions prevents sign errors.
</div>
<div class="example-box">
  <strong>Question:</strong> If a = 4 and b = −2, evaluate a² − 3ab + b².
  <div class="step-box"><span class="step-num">1</span> Substitute: (4)² − 3(4)(−2) + (−2)².</div>
  <div class="step-box"><span class="step-num">2</span> Powers: 16 − 3(4)(−2) + 4.</div>
  <div class="step-box"><span class="step-num">3</span> Multiply the middle term: 16 − (−24) + 4 = 16 + 24 + 4.</div>
  <strong>Answer:</strong> 44. Two negatives multiplied give a positive, so −3(4)(−2) = +24.
</div>
<div class="warning-box">The #1 source of careless errors is mishandling negatives: −3² = −9, but (−3)² = 9. When substituting a negative, wrap it in parentheses. On the calculator, enter negatives with parentheses too, and always re-read the expression once after substituting.</div>`
          },
{
            "name": "Combining Like Terms",
            "diff": "easy",
            "visual": {"type":"bar","labels":["x²","x"],"values":[1,12],"gold":false,"caption":"x² + 12x (coefficients combined)"},
            "expl": `Like terms have the same variables raised to the same exponents. Combine them by adding or subtracting their coefficients only — the variable part stays untouched.
<div class="example-box">
  <strong>Question:</strong> Simplify 3x² + 5x − 2x² + 7x.
  <div class="step-box"><span class="step-num">1</span> Group like terms: (3x² − 2x²) + (5x + 7x).</div>
  <div class="step-box"><span class="step-num">2</span> Combine x² terms: 3 − 2 = 1 → x².</div>
  <div class="step-box"><span class="step-num">3</span> Combine x terms: 5 + 7 = 12 → 12x.</div>
  <strong>Answer:</strong> x² + 12x. You cannot combine x² with x — different exponents.
</div>
<div class="example-box">
  <strong>Question:</strong> Simplify 4x + 3 − 2x + 7 + 5x.
  <div class="step-box"><span class="step-num">1</span> Group x-terms: (4x − 2x + 5x).</div>
  <div class="step-box"><span class="step-num">2</span> Combine: 4 − 2 + 5 = 7 → 7x.</div>
  <div class="step-box"><span class="step-num">3</span> Combine constants: 3 + 7 = 10.</div>
  <strong>Answer:</strong> 7x + 10. Scan for x-terms, x²-terms, and constants separately — three little piles.
</div>
<div class="warning-box">Constants combine only with constants, and different variables (x vs. y) never combine. Rewrite the expression with like terms adjacent before adding. A common trap is mistaking 2x for x² — check whether the answer choices distinguish them before you commit.</div>`
          },
{
            "name": "FOIL & Multiplying Binomials",
            "diff": "medium",
            "visual": {"type":"shape","shape":"rect","labels":{"w":"x+3","h":"x+5"},"caption":"Area model: (x+3)(x+5)"},
            "expl": `FOIL stands for <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast — the four products in (a + b)(c + d). Add the four results and combine any like terms in the middle.
<div class="example-box">
  <strong>Question:</strong> Expand (x + 3)(x + 5).
  <div class="step-box"><span class="step-num">1</span> First: x × x = x².</div>
  <div class="step-box"><span class="step-num">2</span> Outer: x × 5 = 5x. Inner: 3 × x = 3x.</div>
  <div class="step-box"><span class="step-num">3</span> Last: 3 × 5 = 15.</div>
  <div class="step-box"><span class="step-num">4</span> Combine the middle terms: 5x + 3x = 8x.</div>
  <strong>Answer:</strong> x² + 8x + 15.
</div>
<div class="example-box">
  <strong>Question:</strong> Expand (2x − 1)(x + 4).
  <div class="step-box"><span class="step-num">1</span> First: 2x · x = 2x². Outer: 2x · 4 = 8x.</div>
  <div class="step-box"><span class="step-num">2</span> Inner: (−1) · x = −x. Last: (−1) · 4 = −4.</div>
  <div class="step-box"><span class="step-num">3</span> Combine: 8x − x = 7x.</div>
  <strong>Answer:</strong> 2x² + 7x − 4. Keep the negative sign attached to its term throughout.
</div>
<div class="warning-box">Memorize the three perfect-square patterns — they appear constantly:<br>• (a + b)² = a² + 2ab + b²<br>• (a − b)² = a² − 2ab + b²<br>• (a + b)(a − b) = a² − b² (difference of squares)<br>Notice (x + 5)² = x² + 10x + 25 — the middle term is <strong>not</strong> optional.</div>`
          },
{
            "name": "Factoring Quadratics",
            "diff": "medium",
            "visual": {"type":"shape","shape":"rect","labels":{"w":"x+3","h":"x-3"},"caption":"x² − 9 = (x+3)(x−3)"},
            "khan": "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:advanced-math-easier/x0fcc98a58ba3bea7:factoring-quadratic-and-polynomial-expressions-easier/a/v2-sat-lesson-factoring-quadratic-and-polynomial-expressions",
            "expl": `Factoring reverses FOIL: for x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>. Those two numbers become the constants in (x + _)(x + _).
<div class="example-box">
  <strong>Question:</strong> Factor x² + 7x + 12.
  <div class="step-box"><span class="step-num">1</span> Look for two numbers whose product is 12 and sum is 7.</div>
  <div class="step-box"><span class="step-num">2</span> Factor pairs of 12: (1,12), (2,6), (3,4). The pair (3,4) sums to 7.</div>
  <div class="step-box"><span class="step-num">3</span> Write the binomials: (x + 3)(x + 4).</div>
  <div class="step-box"><span class="step-num">4</span> Verify with FOIL: x² + 4x + 3x + 12 = x² + 7x + 12 ✔</div>
  <strong>Answer:</strong> (x + 3)(x + 4).
</div>
<div class="example-box">
  <strong>Question:</strong> Factor x² − 9 completely.
  <div class="step-box"><span class="step-num">1</span> Recognize the difference of squares: x² − 3².</div>
  <div class="step-box"><span class="step-num">2</span> Factor as (x + 3)(x − 3).</div>
  <strong>Answer:</strong> (x + 3)(x − 3). Any a² − b² factors into (a + b)(a − b) — no middle term to hunt for.
</div>
<div class="warning-box">Watch the sign patterns:<br>• x² − bx + c → both factors negative<br>• x² + bx − c → opposite signs, bigger factor positive<br>• x² − b² → difference of squares (x + b)(x − b)<br>On the ACT, factoring is often the fastest route to solving — check whether the answer choices are factored or expanded first.</div>`
          },
{
            "name": "Solving Quadratic Equations",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-6,"xMax":4,"yMin":-2,"yMax":2,"pts":[[2,0],[3,0]],"caption":"Roots of x² − 5x + 6 = 0"},
            "expl": `Three methods to solve ax² + bx + c = 0:<br>1. <strong>Factoring</strong> — fastest when it works<br>2. <strong>Quadratic Formula</strong> — always works<br>3. <strong>Completing the square</strong> — useful for vertex form
<div class="formula-box">x = [−b ± √(b² − 4ac)] / 2a<br>Discriminant D = b² − 4ac: D &gt; 0 → 2 roots; D = 0 → 1 root; D &lt; 0 → no real roots</div>
<div class="example-box">
  <strong>Question:</strong> Solve x² − 5x + 6 = 0 by factoring.
  <div class="step-box"><span class="step-num">1</span> Find two numbers multiplying to 6 and adding to −5: −2 and −3.</div>
  <div class="step-box"><span class="step-num">2</span> Factor: (x − 2)(x − 3) = 0.</div>
  <div class="step-box"><span class="step-num">3</span> Set each factor to zero: x = 2 or x = 3.</div>
  <strong>Answer:</strong> x = 2 and x = 3. Zero-product property: if ab = 0, then a = 0 or b = 0.
</div>
<div class="example-box">
  <strong>Question:</strong> Solve 2x² + 5x − 3 = 0 using the quadratic formula.
  <div class="step-box"><span class="step-num">1</span> a = 2, b = 5, c = −3. Compute D = 25 − 4(2)(−3) = 25 + 24 = 49.</div>
  <div class="step-box"><span class="step-num">2</span> x = (−5 ± √49)/(4) = (−5 ± 7)/4.</div>
  <div class="step-box"><span class="step-num">3</span> Two answers: (−5 + 7)/4 = 1/2 and (−5 − 7)/4 = −3.</div>
  <strong>Answer:</strong> x = 1/2 and x = −3. A perfect-square discriminant (49 = 7²) means rational roots.
</div>
<div class="warning-box">Before solving, get the equation into standard form (everything on one side, = 0). If the discriminant is negative, the answer choices will include "no real solution" — do not force a fake answer. When answers contain √, the quadratic formula (not factoring) was intended.</div>`
          },
{
            "name": "Word Problems Setup",
            "diff": "hard",
            "visual": {"type":"bar","labels":["x","x+1","x+2"],"values":[11,12,13],"gold":false,"caption":"Consecutive integers summing to 36"},
            "expl": `The hardest part of word problems is translating English into math. Learn the keyword code:<br>• is / equals → =<br>• more than → +<br>• less than → − (order matters!)<br>• of → ×<br>• per → ÷ (rate)<br>• consecutive integers → x, x+1, x+2
<div class="example-box">
  <strong>Question:</strong> The sum of three consecutive integers is 36. Find them.
  <div class="step-box"><span class="step-num">1</span> Define: let the integers be x, x+1, x+2.</div>
  <div class="step-box"><span class="step-num">2</span> Build the equation: x + (x+1) + (x+2) = 36.</div>
  <div class="step-box"><span class="step-num">3</span> Combine: 3x + 3 = 36 → 3x = 33 → x = 11.</div>
  <strong>Answer:</strong> 11, 12, 13. Always define your variable first, then build the equation piece by piece.
</div>
<div class="example-box">
  <strong>Question:</strong> A rectangle's length is 3 more than twice its width, and the perimeter is 30. Find the width.
  <div class="step-box"><span class="step-num">1</span> Let width = w, so length = 2w + 3.</div>
  <div class="step-box"><span class="step-num">2</span> Perimeter: 2(length + width) = 30 → 2(2w + 3 + w) = 30.</div>
  <div class="step-box"><span class="step-num">3</span> Simplify: 2(3w + 3) = 30 → 6w + 6 = 30 → 6w = 24 → w = 4.</div>
  <strong>Answer:</strong> Width 4, length 11. Check: 2(11 + 4) = 30 ✔. Each sentence of the problem produces one equation or expression.
</div>
<div class="warning-box">"3 less than x" means x − 3, <strong>not</strong> 3 − x. "A is 4 more than B" means A = B + 4. Getting the order backwards is the most common setup error. If stuck, try the answer choices: plug each one in and see which satisfies every condition.</div>`
          },
{
            "name": "Systems of Equations",
            "diff": "medium",
            "visual": {"type":"plane","xMin":0,"xMax":10,"yMin":0,"yMax":10,"line":{"m":-1,"b":10},"pts":[[7,3]],"caption":"Intersection at (7, 3)"},
            "khan": "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-systems-of-linear-equations-easier/a/v2-sat-lesson-solving-systems-of-linear-equations",
            "expl": `Solve two equations together to find where they both are true — the point that satisfies every equation. Two main methods:<br>• <strong>Substitution</strong> — solve for one variable and plug in<br>• <strong>Elimination</strong> — add/subtract to cancel a variable
<div class="example-box">
  <strong>Question:</strong> Solve x + y = 10 and x − y = 4.
  <div class="step-box"><span class="step-num">1</span> Add the equations to eliminate y: 2x = 14.</div>
  <div class="step-box"><span class="step-num">2</span> Divide: x = 7.</div>
  <div class="step-box"><span class="step-num">3</span> Plug into x + y = 10: 7 + y = 10 → y = 3.</div>
  <strong>Answer:</strong> (7, 3). Check: 7 − 3 = 4 ✔
</div>
<div class="example-box">
  <strong>Question:</strong> Solve 2x + 3y = 13 and x − y = 4.
  <div class="step-box"><span class="step-num">1</span> Solve the second equation for x: x = y + 4.</div>
  <div class="step-box"><span class="step-num">2</span> Substitute: 2(y + 4) + 3y = 13 → 2y + 8 + 3y = 13 → 5y = 5.</div>
  <div class="step-box"><span class="step-num">3</span> y = 1, then x = 1 + 4 = 5.</div>
  <strong>Answer:</strong> (5, 1). Substitution shines when one equation already has a lone variable.
</div>
<div class="warning-box">Three possible outcomes:<br>• 1 solution → lines intersect<br>• 0 solutions → parallel lines (same slope)<br>• Infinite solutions → same line. If elimination produces 0 = 0, the system has infinitely many solutions; if it produces 0 = 5, there is none. If one equation is a multiple of the other, the system is dependent — infinite solutions.</div>`
          },
{
            "name": "Absolute Value Equations",
            "diff": "medium",
            "visual": {"type":"numberLine","min":-5,"max":5,"marks":[{"v":-2,"filled":true},{"v":3,"filled":true}],"caption":"|2x − 1| = 5 → x = 3, −2"},
            "expl": `Absolute value measures distance from zero, so |x| = 3 has two solutions: x = 3 and x = −3. Any absolute-value equation splits into two ordinary equations — one positive, one negative.
<div class="example-box">
  <strong>Question:</strong> Solve |2x − 1| = 5.
  <div class="step-box"><span class="step-num">1</span> Split into two cases: 2x − 1 = 5 or 2x − 1 = −5.</div>
  <div class="step-box"><span class="step-num">2</span> Case 1: 2x = 6 → x = 3.</div>
  <div class="step-box"><span class="step-num">3</span> Case 2: 2x = −4 → x = −2.</div>
  <strong>Answer:</strong> x = 3 and x = −2. Always produce both cases unless the value is 0.
</div>
<div class="example-box">
  <strong>Question:</strong> Solve |x + 4| = 2x.
  <div class="step-box"><span class="step-num">1</span> Case 1: x + 4 = 2x → x = 4.</div>
  <div class="step-box"><span class="step-num">2</span> Case 2: x + 4 = −2x → 3x = −4 → x = −4/3.</div>
  <div class="step-box"><span class="step-num">3</span> Check in the original: x = 4 works (8 = 8), but x = −4/3 gives |8/3| = −8/3, which is false.</div>
  <strong>Answer:</strong> Only x = 4. When a variable sits on both sides, ALWAYS verify each candidate — extraneous roots get created.
</div>
<div class="warning-box">For inequalities:<br>• |x| &lt; 4 becomes −4 &lt; x &lt; 4 (an "and" sandwich)<br>• |x| &gt; 4 becomes x &lt; −4 or x &gt; 4.<br>And remember |x| = −5 has <strong>no solution</strong> — absolute value can never be negative.</div>`
          },
{
            "name": "Rational Expressions",
            "diff": "hard",
            "visual": {"type":"numberLine","min":-4,"max":2,"marks":[{"v":-2,"filled":false}],"caption":"Domain excludes x = −2"},
            "expl": `Rational expressions are fractions with variables. Simplify by factoring and canceling common factors — but only factors, never terms that are added or subtracted.
<div class="formula-box">Restriction: values that make the denominator zero are excluded.</div>
<div class="example-box">
  <strong>Question:</strong> Simplify (x² − 4)/(x + 2).
  <div class="step-box"><span class="step-num">1</span> Factor the numerator: (x + 2)(x − 2).</div>
  <div class="step-box"><span class="step-num">2</span> Cancel the common factor (x + 2).</div>
  <div class="step-box"><span class="step-num">3</span> Note the restriction: x ≠ −2 (denominator can't be zero).</div>
  <strong>Answer:</strong> x − 2, with x ≠ −2. State restrictions even though they're "gone" after canceling.
</div>
<div class="example-box">
  <strong>Question:</strong> Simplify 3/(x + 1) + 2/(x + 1).
  <div class="step-box"><span class="step-num">1</span> Same denominator, so add numerators: (3 + 2)/(x + 1).</div>
  <div class="step-box"><span class="step-num">2</span> Result: 5/(x + 1), with x ≠ −1.</div>
  <strong>Answer:</strong> 5/(x + 1). With matching denominators, rational expressions combine like ordinary fractions.
</div>
<div class="warning-box">To add or subtract rational expressions, find the LCD first, then combine numerators. To divide, flip the second fraction and multiply. Never cancel terms that are added — only factors. Check every answer against the restriction: a choice that equals the simplified form but breaks the denominator at the excluded value is wrong.</div>`
          },
{
            "name": "Exponents & Radicals",
            "diff": "medium",
            "visual": {"type":"line","pts":[[1,2],[2,4],[3,8],[4,16]],"xMin":0,"xMax":5,"yMin":0,"yMax":16,"xLabel":"n","yLabel":"2ⁿ","caption":"Exponential growth 2ⁿ"},
            "expl": `Master these core exponent rules:<br>• xᵃ × xᵇ = xᵃ⁺ᵇ<br>• xᵃ ÷ xᵇ = xᵃ⁻ᵇ<br>• (xᵃ)ᵇ = xᵃᵇ<br>• x⁻ᵃ = 1/xᵃ<br>• x^(1/n) = ⁿ√x — fractional exponents are roots!
<div class="example-box">
  <strong>Question:</strong> Evaluate 8^(2/3).
  <div class="step-box"><span class="step-num">1</span> Read the exponent as a root then a power: ³√8 squared.</div>
  <div class="step-box"><span class="step-num">2</span> ³√8 = 2.</div>
  <div class="step-box"><span class="step-num">3</span> 2² = 4.</div>
  <strong>Answer:</strong> 4. The bottom of the fraction is the root, the top is the power.
</div>
<div class="example-box">
  <strong>Question:</strong> Simplify (x⁴ · x⁻²) / x³.
  <div class="step-box"><span class="step-num">1</span> Combine the numerator exponents: x⁴ · x⁻² = x⁴⁻² = x².</div>
  <div class="step-box"><span class="step-num">2</span> Divide: x² ÷ x³ = x²⁻³ = x⁻¹.</div>
  <strong>Answer:</strong> 1/x. A negative exponent at the end means "flip to the denominator."
</div>
<div class="warning-box">√a × √b = √(ab) and √a ÷ √b = √(a/b), but you can <strong>never</strong> split √(a + b) into √a + √b. When you see a radical in a denominator, rationalize by multiplying by the conjugate. On the calculator, enter fractional exponents in parentheses: 8^(2/3), never 8^2/3.</div>`
          },
{
            "name": "Logarithms",
            "diff": "hard",
            "visual": {"type":"line","pts":[[1,0],[2,1],[4,2],[8,3]],"xMin":0,"xMax":9,"yMin":0,"yMax":3,"xLabel":"x","yLabel":"log₂x","caption":"log₂ 8 = 3"},
            "expl": `A logarithm answers "what exponent gives this result?" It is the inverse operation of exponentiation, exactly as division undoes multiplication.
<div class="formula-box">log_b(x) = y means bʸ = x<br>log(xy) = log(x) + log(y)<br>log(x/y) = log(x) − log(y)<br>log(xⁿ) = n·log(x)</div>
<div class="example-box">
  <strong>Question:</strong> Solve log₂(8) = x.
  <div class="step-box"><span class="step-num">1</span> Rewrite in exponential form: 2ˣ = 8.</div>
  <div class="step-box"><span class="step-num">2</span> Express 8 as a power of 2: 2ˣ = 2³.</div>
  <div class="step-box"><span class="step-num">3</span> Since bases match, set exponents equal: x = 3.</div>
  <strong>Answer:</strong> x = 3. Stuck? Converting to exponential form almost always unblocks you.
</div>
<div class="example-box">
  <strong>Question:</strong> Solve log₅(x) = 2.
  <div class="step-box"><span class="step-num">1</span> Rewrite in exponential form: 5² = x.</div>
  <div class="step-box"><span class="step-num">2</span> Compute: x = 25.</div>
  <strong>Answer:</strong> x = 25. Every log question starts the same way — rewrite bʸ = x and solve the ordinary exponential.
</div>
<div class="warning-box">Change of base: log_b(a) = log(a) ÷ log(b) for any base — needed when the answer uses a different base than the problem. log_b(b) = 1 and log_b(1) = 0 are free points. Never apply log rules to a sum inside a single log: log(x + y) has no simple expansion.</div>`
          },
{
            "name": "Complex Numbers",
            "diff": "hard",
            "visual": {"type":"plane","xMin":-1,"xMax":4,"yMin":-1,"yMax":3,"pts":[[3,2]],"caption":"3 + 2i on the complex plane"},
            "expl": `Complex numbers have the form a + bi, where i = √(−1), so i² = −1. The real part is a, the imaginary part is b — treat i like a variable whose square becomes −1.
<div class="formula-box">i powers cycle: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then repeat</div>
<div class="example-box">
  <strong>Question:</strong> Compute (3 + 2i)(1 − i).
  <div class="step-box"><span class="step-num">1</span> FOIL: 3 − 3i + 2i − 2i².</div>
  <div class="step-box"><span class="step-num">2</span> Combine i terms: 3 − i − 2i².</div>
  <div class="step-box"><span class="step-num">3</span> Replace i² with −1: 3 − i + 2 = 5 − i.</div>
  <strong>Answer:</strong> 5 − i. Always substitute i² = −1 before finishing.
</div>
<div class="example-box">
  <strong>Question:</strong> Simplify (4 + 3i) + (2 − 5i) and evaluate i³³.
  <div class="step-box"><span class="step-num">1</span> Add real parts and imaginary parts separately: (4 + 2) + (3 − 5)i = 6 − 2i.</div>
  <div class="step-box"><span class="step-num">2</span> For i³³, divide the exponent by 4: 33 ÷ 4 = 8 remainder 1.</div>
  <div class="step-box"><span class="step-num">3</span> Remainder 1 means the first power in the cycle: i³³ = i.</div>
  <strong>Answer:</strong> 6 − 2i and i. The remainder after dividing the exponent by 4 pinpoints the cycle value.
</div>
<div class="warning-box">To divide complex numbers, multiply top and bottom by the <strong>conjugate</strong> (a − bi). Example: (3 + 2i)/(1 − i) → multiply by (1 + i)/(1 + i) to make the denominator real. And i⁴ⁿ = 1 — divide the exponent by 4 to find its place in the cycle.</div>`
          },
{
            "name": "Sequences & Series",
            "diff": "medium",
            "visual": {"type":"line","pts":[[1,3],[2,6],[3,12],[4,24],[5,48]],"xMin":0,"xMax":6,"yMin":0,"yMax":48,"xLabel":"n","yLabel":"term","caption":"Geometric, ratio 2"},
            "expl": `<strong>Arithmetic</strong> sequences add a constant difference d; <strong>geometric</strong> sequences multiply by a constant ratio r. Identify which type first — it decides every formula you use.
<div class="formula-box">Arithmetic nth term: aₙ = a₁ + (n − 1)d<br>Geometric nth term: aₙ = a₁ × rⁿ⁻¹<br>Arithmetic sum: Sₙ = n/2 × (a₁ + aₙ)</div>
<div class="example-box">
  <strong>Question:</strong> What is the 5th term of 3, 6, 12, 24, …?
  <div class="step-box"><span class="step-num">1</span> Identify: ratio r = 6/3 = 2, first term a₁ = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Use the geometric formula: a₅ = 3 × 2⁴.</div>
  <div class="step-box"><span class="step-num">3</span> Compute: 3 × 16 = 48.</div>
  <strong>Answer:</strong> 48. Use the formula, not repeated multiplication — faster and error-proof.
</div>
<div class="example-box">
  <strong>Question:</strong> Find the 10th term of 5, 9, 13, 17, …
  <div class="step-box"><span class="step-num">1</span> Arithmetic with d = 4 and a₁ = 5.</div>
  <div class="step-box"><span class="step-num">2</span> a₁₀ = 5 + (10 − 1)(4) = 5 + 36.</div>
  <strong>Answer:</strong> 41. Watch the term count: for the 10th term you add d nine times, not ten.
</div>
<div class="warning-box">The ACT usually asks only for a specific term or the next term. To decide arithmetic vs. geometric, check if consecutive terms differ by a constant (arithmetic) or are multiplied by a constant (geometric). Beware fake patterns where the difference itself grows — those are neither type.</div>`
          }
            ]
        },
        {
            "name": "Functions",
            "topics": [
{
            "name": "Function Notation",
            "diff": "easy",
            "visual": {"type":"plane","xMin":-2,"xMax":6,"yMin":-2,"yMax":10,"line":{"m":3,"b":-2},"pts":[[4,10]],"caption":"f(x) = 3x − 2, so f(4) = 10"},
            "expl": `f(x) reads as "f of x" — the output of function f when the input is x. It is a machine: put an input in, get exactly one output out.
<div class="example-box">
  <strong>Question:</strong> If f(x) = 3x − 2, find f(4).
  <div class="step-box"><span class="step-num">1</span> Replace every x with 4: f(4) = 3(4) − 2.</div>
  <div class="step-box"><span class="step-num">2</span> Compute: 12 − 2 = 10.</div>
  <strong>Answer:</strong> f(4) = 10. Just substitute — the notation is the instruction.
</div>
<div class="example-box">
  <strong>Question:</strong> If f(x) = x² + 1, find f(f(2)).
  <div class="step-box"><span class="step-num">1</span> Inside first: f(2) = 2² + 1 = 5.</div>
  <div class="step-box"><span class="step-num">2</span> Now feed the output back in: f(5) = 5² + 1 = 26.</div>
  <strong>Answer:</strong> 26. Nested functions always work inside-out — evaluate the innermost call first.
</div>
<div class="warning-box">On a graph, f(a) is the y-value of the point with x-coordinate a. The ACT also loves f(f(x)) (a function applied to its own output) and f(g(x)) — work from the inside out. Watch for answer choices that confuse f(x) with x itself; substitute, don't eyeball.</div>`
          },
{
            "name": "Domain & Range",
            "diff": "medium",
            "visual": {"type":"numberLine","min":0,"max":6,"marks":[{"v":3,"filled":false}],"caption":"f(x) = 1/(x − 3): domain excludes x = 3"},
            "expl": `<strong>Domain</strong> = all possible x-values (inputs); <strong>Range</strong> = all possible y-values (outputs). Restrictions come from only two places: division by zero and even roots of negative numbers.
<div class="example-box">
  <strong>Question:</strong> State the domain of f(x) = 1/(x − 3).
  <div class="step-box"><span class="step-num">1</span> The denominator can't be zero: x − 3 ≠ 0.</div>
  <div class="step-box"><span class="step-num">2</span> So x ≠ 3.</div>
  <strong>Answer:</strong> All real numbers except x = 3. Restriction sources: division by zero and even roots of negatives.
</div>
<div class="example-box">
  <strong>Question:</strong> State the domain of f(x) = √(x − 2).
  <div class="step-box"><span class="step-num">1</span> The radicand can't be negative: x − 2 ≥ 0.</div>
  <div class="step-box"><span class="step-num">2</span> So x ≥ 2.</div>
  <strong>Answer:</strong> x ≥ 2. For even roots, set the inside ≥ 0 and solve the inequality.
</div>
<div class="warning-box">On graphs, read the domain left-to-right and the range bottom-to-top. Open circles exclude endpoints, closed circles include them. For √(x): domain x ≥ 0. For 1/x: domain excludes 0. When answer choices are intervals, decide the endpoint (included vs. excluded) and the direction separately.</div>`
          },
{
            "name": "Function Transformations",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"line":{"m":1,"b":3,"dash":true},"pts":[[2,0]],"caption":"y = f(x − 2) + 3: shift right 2, up 3"},
            "expl": `Transformations shift, stretch, and flip the parent graph. The single rule to remember: changes <em>inside</em> the function affect x and move oppositely; changes <em>outside</em> affect y and move normally.
<div class="formula-box">y = f(x) + k → shift UP by k (k &gt; 0)<br>y = f(x − h) → shift RIGHT by h<br>y = −f(x) → reflect over the x-axis<br>y = f(−x) → reflect over the y-axis<br>y = a·f(x) → vertical stretch by a (a &gt; 1)</div>
<div class="example-box">
  <strong>Question:</strong> Describe the graph of y = f(x − 2) + 3 compared to y = f(x).
  <div class="step-box"><span class="step-num">1</span> x − 2 inside: shift right 2 units (inside is always counterintuitive).</div>
  <div class="step-box"><span class="step-num">2</span> + 3 outside: shift up 3 units.</div>
  <strong>Answer:</strong> The graph shifts right 2 and up 3.
</div>
<div class="example-box">
  <strong>Question:</strong> Describe y = −f(x) − 1 relative to y = f(x).
  <div class="step-box"><span class="step-num">1</span> The leading − flips the graph over the x-axis.</div>
  <div class="step-box"><span class="step-num">2</span> The − 1 outside shifts it down 1 unit.</div>
  <strong>Answer:</strong> Reflect over the x-axis, then shift down 1. Track one test point (like a vertex) through each step.
</div>
<div class="warning-box">Inside the function (affecting x) moves the graph <strong>opposite</strong> to intuition: x − 2 moves right, x + 2 moves left. Outside (affecting y) moves normally: +2 up, −2 down. Absolute value flips the negative part of the graph upward. Test with a known point — the vertex of y = x² is easiest to track.</div>`
          },
{
            "name": "Composition & Inverses",
            "diff": "hard",
            "visual": {"type":"plane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"line":{"m":1,"b":0,"dash":true},"caption":"Inverse reflects across y = x"},
            "expl": `<strong>Composition</strong> chains functions; an <strong>inverse</strong> undoes a function — they are exact opposites the way division undoes multiplication.
<div class="formula-box">(f∘g)(x) = f(g(x)) — apply g first, then f<br>f⁻¹(f(x)) = x and f(f⁻¹(x)) = x</div>
<div class="example-box">
  <strong>Question:</strong> If f(x) = 2x + 1 and g(x) = x², find f(g(3)) and f⁻¹(x).
  <div class="step-box"><span class="step-num">1</span> g(3) = 9.</div>
  <div class="step-box"><span class="step-num">2</span> f(g(3)) = f(9) = 2(9) + 1 = 19.</div>
  <div class="step-box"><span class="step-num">3</span> For the inverse: swap x and y in y = 2x + 1 → x = 2y + 1 → y = (x − 1)/2.</div>
  <strong>Answer:</strong> f(g(3)) = 19, f⁻¹(x) = (x − 1)/2.
</div>
<div class="example-box">
  <strong>Question:</strong> If f(x) = x³, find f⁻¹(27).
  <div class="step-box"><span class="step-num">1</span> The inverse of cubing is the cube root: f⁻¹(x) = ³√x.</div>
  <div class="step-box"><span class="step-num">2</span> f⁻¹(27) = ³√27 = 3.</div>
  <strong>Answer:</strong> 3. Verify: f(3) = 27, and composing gives you back your input — the definition of an inverse.
</div>
<div class="warning-box">Work composition from the inside out. To find an inverse algebraically: swap x and y, then solve for y. The graph of an inverse is the reflection of the original across the line y = x. If an answer choice for f⁻¹(x) doesn't satisfy f(f⁻¹(x)) = x, it's wrong — always test with a simple value.</div>`
          }
            ]
        },
        {
            "name": "Geometry",
            "topics": [
{
            "name": "Slope of a Line",
            "diff": "easy",
            "visual": {"type":"plane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"line":{"m":2,"b":0},"pts":[[1,2],[4,8]],"caption":"m = (8−2)/(4−1) = 2"},
            "expl": `Slope measures steepness: rise over run between two points. A positive slope rises left to right, negative falls, zero is horizontal, and undefined is vertical.
<div class="formula-box">m = (y₂ − y₁)/(x₂ − x₁)</div>
<div class="example-box">
  <strong>Question:</strong> Find the slope through (1, 2) and (4, 8).
  <div class="step-box"><span class="step-num">1</span> Label: (x₁,y₁) = (1,2), (x₂,y₂) = (4,8).</div>
  <div class="step-box"><span class="step-num">2</span> Rise = 8 − 2 = 6. Run = 4 − 1 = 3.</div>
  <div class="step-box"><span class="step-num">3</span> Slope = 6/3 = 2.</div>
  <strong>Answer:</strong> m = 2. Positive slope rises to the right.
</div>
<div class="example-box">
  <strong>Question:</strong> What is the slope of the line 3x + 2y = 12?
  <div class="step-box"><span class="step-num">1</span> Solve for y: 2y = −3x + 12 → y = −3/2 x + 6.</div>
  <div class="step-box"><span class="step-num">2</span> The coefficient of x is the slope.</div>
  <strong>Answer:</strong> m = −3/2. Shortcut for standard form Ax + By = C: slope = −A/B = −3/2.
</div>
<div class="warning-box">Key relationships: parallel lines have <strong>equal</strong> slopes; perpendicular lines have <strong>negative reciprocal</strong> slopes (product = −1). From Ax + By = C, slope = −A/B. Vertical lines have undefined slope; horizontal lines have slope 0. Drawing a quick sketch beats memorizing sign conventions.</div>`
          },
{
            "name": "Equations of Lines",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"line":{"m":3,"b":-1},"pts":[[2,5],[4,11]],"caption":"y = 3x − 1"},
            "expl": `Three common forms — know how to convert between them:<br>• <strong>Slope-intercept:</strong> y = mx + b<br>• <strong>Point-slope:</strong> y − y₁ = m(x − x₁)<br>• <strong>Standard:</strong> Ax + By = C
<div class="example-box">
  <strong>Question:</strong> Write the equation of the line through (2, 5) and (4, 11).
  <div class="step-box"><span class="step-num">1</span> Find slope: (11 − 5)/(4 − 2) = 6/2 = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Use point-slope with (2, 5): y − 5 = 3(x − 2).</div>
  <div class="step-box"><span class="step-num">3</span> Simplify to slope-intercept: y = 3x − 1.</div>
  <strong>Answer:</strong> y = 3x − 1. Verify by plugging in both points.
</div>
<div class="example-box">
  <strong>Question:</strong> Write the equation of the line through (0, 4) that is parallel to y = 2x + 1.
  <div class="step-box"><span class="step-num">1</span> Parallel lines share a slope, so m = 2.</div>
  <div class="step-box"><span class="step-num">2</span> The point (0, 4) gives the y-intercept directly: b = 4.</div>
  <strong>Answer:</strong> y = 2x + 4. A point with x = 0 hands you the intercept for free.
</div>
<div class="warning-box">Horizontal lines are y = c (slope 0); vertical lines are x = c (undefined slope — and <strong>not a function</strong>). The ACT frequently asks you to pick the equation matching a graph: read off the y-intercept and slope visually. Two points always give one line — if the answers are lines, try each quickly.</div>`
          },
{
            "name": "Distance & Midpoint Formulas",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-2,"xMax":9,"yMin":-2,"yMax":6,"pts":[[2,5],[8,-1]],"caption":"Midpoint (5, 2), distance 6√2"},
            "expl": `Distance is just the Pythagorean theorem on the coordinate plane, and the midpoint is the average of the coordinates.
<div class="formula-box">d = √[(x₂ − x₁)² + (y₂ − y₁)²]<br>Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div>
<div class="example-box">
  <strong>Question:</strong> Find the midpoint and distance between (2, 5) and (8, −1).
  <div class="step-box"><span class="step-num">1</span> Midpoint x: (2 + 8)/2 = 5.</div>
  <div class="step-box"><span class="step-num">2</span> Midpoint y: (5 + (−1))/2 = 2.</div>
  <div class="step-box"><span class="step-num">3</span> Distance: √[(8−2)² + (−1−5)²] = √(36 + 36) = √72 = 6√2.</div>
  <strong>Answer:</strong> Midpoint (5, 2), distance 6√2.
</div>
<div class="example-box">
  <strong>Question:</strong> Point M(3, 7) is the midpoint of AB, and A is (1, 3). Find B.
  <div class="step-box"><span class="step-num">1</span> Midpoint x: (1 + x_B)/2 = 3 → 1 + x_B = 6 → x_B = 5.</div>
  <div class="step-box"><span class="step-num">2</span> Midpoint y: (3 + y_B)/2 = 7 → y_B = 11.</div>
  <strong>Answer:</strong> B = (5, 11). Double the midpoint, subtract the known endpoint — no solving needed.
</div>
<div class="warning-box">The distance formula is often disguised as a Pythagorean problem: draw the right triangle, find the legs (differences in x and y), then solve for the hypotenuse. Simplify radicals fully to match answer choices. If two distances are equal, you can often compare squared distances to avoid square roots.</div>`
          },
{
            "name": "Circles in the Coordinate Plane",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-5,"xMax":9,"yMin":-5,"yMax":5,"pts":[[3,-2],[8,-2]],"caption":"Center (3,−2), radius 5"},
            "khan": "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:circle-equations-easier/a/v2-sat-lesson-circle-equations",
            "expl": `The standard equation of a circle makes the center and radius instantly visible — one of the highest-value formulas on the exam.
<div class="formula-box">(x − h)² + (y − k)² = r² — center (h, k), radius r</div>
<div class="example-box">
  <strong>Question:</strong> Give the center and radius of (x − 3)² + (y + 2)² = 25.
  <div class="step-box"><span class="step-num">1</span> Match to standard form: h = 3, k = −2 (the +2 flips sign).</div>
  <div class="step-box"><span class="step-num">2</span> r² = 25, so r = 5.</div>
  <strong>Answer:</strong> Center (3, −2), radius 5. Note the center coordinates always have flipped signs from the equation.
</div>
<div class="example-box">
  <strong>Question:</strong> A circle has center (1, 2) and passes through (4, 6). Write its equation.
  <div class="step-box"><span class="step-num">1</span> Radius is the distance from center to the point: √[(4−1)² + (6−2)²].</div>
  <div class="step-box"><span class="step-num">2</span> √(9 + 16) = √25 = 5, so r² = 25.</div>
  <strong>Answer:</strong> (x − 1)² + (y − 2)² = 25. Finding r from a point on the circle is a distance problem in disguise.
</div>
<div class="warning-box">If given x² + y² + 6x − 4y = 12, <strong>complete the square</strong> for x and y separately to reach standard form. A tangent line touches the circle at exactly one point, and the radius to that point is perpendicular to the tangent — that right angle often hides a Pythagorean setup.</div>`
          },
{
            "name": "Graphing Inequalities",
            "diff": "medium",
            "visual": {"type":"plane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"line":{"m":2,"b":1,"dash":true},"shade":{"m":2,"b":1,"above":true},"caption":"y > 2x + 1, dashed line shaded above"},
            "expl": `Graph the boundary line first, then shade the correct side.<br>• <strong>Solid line</strong> for ≤ or ≥ (boundary included)<br>• <strong>Dashed line</strong> for &lt; or &gt; (boundary excluded)<br>• y &gt; mx + b → shade <strong>above</strong>; y &lt; mx + b → shade <strong>below</strong>
<div class="example-box">
  <strong>Question:</strong> Shade the region for y &gt; 2x + 1.
  <div class="step-box"><span class="step-num">1</span> Draw the boundary y = 2x + 1 as a dashed line.</div>
  <div class="step-box"><span class="step-num">2</span> Test a point not on the line, e.g., (0, 0): 0 &gt; 1? No.</div>
  <div class="step-box"><span class="step-num">3</span> Since (0,0) fails, shade the side <strong>opposite</strong> it.</div>
  <strong>Answer:</strong> Dashed line, shaded above the line.
</div>
<div class="example-box">
  <strong>Question:</strong> Describe the region y ≤ −x + 2.
  <div class="step-box"><span class="step-num">1</span> Boundary y = −x + 2 drawn as a <strong>solid</strong> line (≤ includes it).</div>
  <div class="step-box"><span class="step-num">2</span> Test (0, 0): 0 ≤ 2? Yes.</div>
  <div class="step-box"><span class="step-num">3</span> Shade the side containing (0, 0), which is below the line.</div>
  <strong>Answer:</strong> Solid line, shading below. Testing the origin is the fastest way to pick a side.
</div>
<div class="warning-box">For systems of inequalities, graph each one and the solution is the <strong>overlapping</strong> region. Testing the origin is the fastest way to decide which side to shade. When answer choices are graphs, check one boundary and one shading decision at a time instead of re-reading every choice.</div>`
          },
{
            "name": "Angles & Parallel Lines",
            "diff": "easy",
            "visual": {"type":"shape","shape":"parallelogram","labels":{"b":"4","h":"3"},"caption":"Parallel sides; same-side interior angles sum to 180°"},
            "expl": `When a transversal crosses two parallel lines, it creates sets of equal and supplementary angles.<br>• <strong>Corresponding</strong> angles: equal<br>• <strong>Alternate interior</strong> angles: equal<br>• <strong>Alternate exterior</strong> angles: equal<br>• <strong>Same-side interior</strong> angles: sum to 180°<br><br>Practically, all acute angles look alike and all obtuse angles look alike in a transversal diagram — there are only two distinct angle sizes.
<div class="example-box">
  <strong>Question:</strong> Two parallel lines are cut by a transversal. One interior angle is 65°. Find its same-side interior partner.
  <div class="step-box"><span class="step-num">1</span> Same-side interior angles are supplementary.</div>
  <div class="step-box"><span class="step-num">2</span> 180° − 65° = 115°.</div>
  <strong>Answer:</strong> 115°. Adjacent angles at an intersection also sum to 180° (a straight line).
</div>
<div class="example-box">
  <strong>Question:</strong> Parallel lines are cut by a transversal and one angle measures 50°. What is the alternate interior angle?
  <div class="step-box"><span class="step-num">1</span> Alternate interior angles sit on opposite sides of the transversal, inside the parallel lines.</div>
  <div class="step-box"><span class="step-num">2</span> They are always equal.</div>
  <strong>Answer:</strong> 50°. Also equal: the vertical angle and the corresponding angle.
</div>
<div class="warning-box">Vertical angles are always equal. If lines are <strong>not</strong> parallel, none of the equal-angle rules apply — the ACT will mark this with "if and only if" phrasing. A straight angle is 180°; a right angle is 90°. Label the diagram as you go — a marked figure is half the solution.</div>`
          },
{
            "name": "Triangles",
            "diff": "medium",
            "visual": {"type":"shape","shape":"right","labels":{"a":"6","b":"8","h":"10"},"caption":"6-8-10 right triangle; area = 24"},
            "expl": `Every triangle has these fundamentals:<br>• Angles sum to <strong>180°</strong><br>• Area = ½ × base × height<br>• Pythagorean theorem for right triangles: a² + b² = c²<br>• Side lengths: the longest side is opposite the largest angle<br>• Triangle inequality: any two sides must sum to more than the third
<div class="example-box">
  <strong>Question:</strong> A right triangle has legs 6 and 8. Find the hypotenuse and area.
  <div class="step-box"><span class="step-num">1</span> Hypotenuse: c² = 6² + 8² = 36 + 64 = 100.</div>
  <div class="step-box"><span class="step-num">2</span> c = 10. (It's a 6-8-10 Pythagorean triple.)</div>
  <div class="step-box"><span class="step-num">3</span> Area = ½ × 6 × 8 = 24.</div>
  <strong>Answer:</strong> Hypotenuse 10, area 24. The height is the perpendicular leg, not the slanted side.
</div>
<div class="example-box">
  <strong>Question:</strong> Two angles of a triangle are 35° and 55°. Find the third and identify the triangle.
  <div class="step-box"><span class="step-num">1</span> Third angle = 180° − 35° − 55° = 90°.</div>
  <div class="step-box"><span class="step-num">2</span> A 90° angle makes it a right triangle.</div>
  <strong>Answer:</strong> 90°, a right triangle. The 180° angle-sum rule unlocks any missing angle.
</div>
<div class="warning-box">Memorize the common Pythagorean triples — 3-4-5, 5-12-13, 8-15-17, 7-24-25 — and the special triangles 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2). They save enormous time. The area formula needs a perpendicular height — in an obtuse triangle the height may fall outside the base.</div>`
          },
{
            "name": "Similar & Congruent Triangles",
            "diff": "medium",
            "visual": {"type":"shape","shape":"triangle","labels":{"a":"3","b":"4","c":"5","A":"90°","B":"53°","C":"37°"},"caption":"Similar triangles scale by one factor"},
            "expl": `<strong>Congruent</strong> triangles are identical in size and shape; <strong>similar</strong> triangles have the same shape but scaled sizes. Every pair of similar triangles shares one scale factor — find it once, then scale everything.
<div class="formula-box">Similar triangles: corresponding angles equal, corresponding sides proportional (ratio = scale factor)<br>Areas scale by (scale factor)²; volumes scale by (scale factor)³</div>
<div class="example-box">
  <strong>Question:</strong> Triangle A has sides 3, 4, 5. A similar triangle B has a long side of 15. Find its short side.
  <div class="step-box"><span class="step-num">1</span> Scale factor = 15/5 = 3.</div>
  <div class="step-box"><span class="step-num">2</span> Multiply every side by 3: short side = 3 × 3 = 9.</div>
  <strong>Answer:</strong> 9. Set up a proportion (3/9 = 5/15) to double-check.
</div>
<div class="example-box">
  <strong>Question:</strong> Two similar rectangles have scale factor 2. If the small rectangle has area 6, what is the large rectangle's area?
  <div class="step-box"><span class="step-num">1</span> Lengths scale by 2, but area scales by 2² = 4.</div>
  <div class="step-box"><span class="step-num">2</span> Area = 6 × 4 = 24.</div>
  <strong>Answer:</strong> 24. Area multiplies by the scale factor squared — a favorite ACT twist.
</div>
<div class="warning-box">Congruence shortcuts: SSS, SAS, ASA, AAS (and HL for right triangles). AAA proves <strong>similarity</strong> but <strong>not</strong> congruence. If a triangle inside another is stated as similar, immediately write the proportional sides ratio. Match corresponding sides by position — the small side corresponds to the small side.</div>`
          },
{
            "name": "Quadrilaterals & Polygons",
            "diff": "medium",
            "visual": {"type":"shape","shape":"hexagon","labels":{},"caption":"Regular hexagon: each interior angle 120°"},
            "expl": `Polygon basics:<br>• Sum of interior angles of an n-gon = (n − 2) × 180°<br>• Each interior angle of a regular n-gon = (n − 2) × 180° / n<br>• Sum of exterior angles = 360° (always!)
<div class="example-box">
  <strong>Question:</strong> What is each interior angle of a regular hexagon?
  <div class="step-box"><span class="step-num">1</span> n = 6, so interior sum = (6 − 2) × 180° = 720°.</div>
  <div class="step-box"><span class="step-num">2</span> Regular = equal angles: 720° ÷ 6 = 120°.</div>
  <strong>Answer:</strong> 120°. Each exterior angle is 360°/6 = 60°, and 120° + 60° = 180° ✔
</div>
<div class="example-box">
  <strong>Question:</strong> How many sides does a polygon have if each interior angle is 144°?
  <div class="step-box"><span class="step-num">1</span> Each exterior angle = 180° − 144° = 36°.</div>
  <div class="step-box"><span class="step-num">2</span> Exterior angles sum to 360°: n = 360° ÷ 36° = 10.</div>
  <strong>Answer:</strong> 10 sides (a decagon). Working with exterior angles avoids the interior formula entirely.
</div>
<div class="warning-box">Quadrilateral facts the ACT loves: rectangles have right angles and equal diagonals; parallelograms have opposite sides parallel and equal, opposite angles equal; a square is a rectangle, a rhombus, <em>and</em> a parallelogram. Area of a parallelogram = base × height (the perpendicular height, not the slanted side).</div>`
          },
{
            "name": "Circles",
            "diff": "medium",
            "visual": {"type":"shape","shape":"circle","labels":{"r":"6","d":"12"},"caption":"C = 2πr, A = πr²"},
            "expl": `Circle formulas to have memorized:<br>• <strong>Circumference:</strong> C = 2πr (or πd)<br>• <strong>Area:</strong> A = πr²<br>• Arc length (central angle θ in degrees): (θ/360) × 2πr<br>• Sector area: (θ/360) × πr²<br><br>Arc length and sector area are just the circle's circumference and area scaled by the fraction θ/360.
<div class="example-box">
  <strong>Question:</strong> A circle has radius 6. Find the arc length and sector area for a 60° central angle.
  <div class="step-box"><span class="step-num">1</span> Arc length = (60/360) × 2π(6) = (1/6) × 12π = 2π.</div>
  <div class="step-box"><span class="step-num">2</span> Sector area = (60/360) × π(6)² = (1/6) × 36π = 6π.</div>
  <strong>Answer:</strong> Arc 2π, sector area 6π. The fraction (θ/360) scales the full circle.
</div>
<div class="example-box">
  <strong>Question:</strong> A circle has area 36π. Find its circumference.
  <div class="step-box"><span class="step-num">1</span> πr² = 36π → r² = 36 → r = 6.</div>
  <div class="step-box"><span class="step-num">2</span> C = 2π(6) = 12π.</div>
  <strong>Answer:</strong> 12π. Given area, extract r first, then plug into any other formula.
</div>
<div class="warning-box">A tangent line touches a circle at one point and is perpendicular to the radius at that point. An inscribed angle is half its intercepted arc; a diameter subtends a 90° inscribed angle — a favorite hidden-right-triangle setup. Keep π symbolic unless the answer choices contain decimals; the ACT usually wants exact forms.</div>`
          },
{
            "name": "3D Geometry",
            "diff": "medium",
            "visual": {"type":"shape","shape":"prism","labels":{},"caption":"V = lwh, space diagonal d = √(l² + w² + h²)"},
            "expl": `Key volume and surface-area formulas:<br>• <strong>Cube:</strong> V = s³, SA = 6s²<br>• <strong>Rectangular prism:</strong> V = lwh<br>• <strong>Cylinder:</strong> V = πr²h, SA = 2πr² + 2πrh<br>• <strong>Cone:</strong> V = (1/3)πr²h<br>• <strong>Sphere:</strong> V = (4/3)πr³, SA = 4πr²
<div class="example-box">
  <strong>Question:</strong> A cylinder has radius 3 and height 5. Find its volume and surface area.
  <div class="step-box"><span class="step-num">1</span> Volume = π(3)²(5) = 45π.</div>
  <div class="step-box"><span class="step-num">2</span> Surface area = 2π(3)² + 2π(3)(5) = 18π + 30π = 48π.</div>
  <strong>Answer:</strong> Volume 45π, surface area 48π. Two circular bases + the rolled-up rectangle.
</div>
<div class="example-box">
  <strong>Question:</strong> A rectangular prism is 3 × 4 × 12. Find the length of its space diagonal.
  <div class="step-box"><span class="step-num">1</span> Use the 3D Pythagorean theorem: d = √(3² + 4² + 12²).</div>
  <div class="step-box"><span class="step-num">2</span> √(9 + 16 + 144) = √169 = 13.</div>
  <strong>Answer:</strong> 13. Notice the hidden 3-4-5 and 5-12-13 triples — the numbers are chosen to simplify.
</div>
<div class="warning-box">A right circular cone and a cylinder with the same base and height have volumes in ratio 1:3. If a solid is "inscribed" in another (like a cube in a sphere), use the Pythagorean theorem in 3D: d = √(l² + w² + h²). Doubling every dimension multiplies volume by 8 (2³) — a fast check against careless arithmetic.</div>`
          },
{
            "name": "SOH-CAH-TOA",
            "diff": "medium",
            "visual": {"type":"shape","shape":"right","labels":{"a":"3","b":"4","h":"5","angle":"θ"},"caption":"sin θ = 3/5, cos θ = 4/5, tan θ = 3/4"},
            "khan": "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:geometry-and-trigonometry-easier/x0fcc98a58ba3bea7:right-triangle-trigonometry-easier/a/v2-sat-lesson-right-triangle-trigonometry",
            "expl": `For right triangles only, the three trig ratios relate angles to side lengths.
<div class="formula-box">sin θ = Opposite/Hypotenuse<br>cos θ = Adjacent/Hypotenuse<br>tan θ = Opposite/Adjacent</div>
<div class="example-box">
  <strong>Question:</strong> A right triangle has angle 30° and hypotenuse 10. Find the side opposite the 30° angle.
  <div class="step-box"><span class="step-num">1</span> We know hyp and want opposite → use sine: sin 30° = opposite/10.</div>
  <div class="step-box"><span class="step-num">2</span> sin 30° = 1/2, so opposite/10 = 1/2.</div>
  <div class="step-box"><span class="step-num">3</span> Opposite = 5.</div>
  <strong>Answer:</strong> 5 — and it matches the 30-60-90 pattern (short leg = half the hypotenuse).
</div>
<div class="example-box">
  <strong>Question:</strong> In a right triangle, the side opposite θ is 8 and the adjacent side is 6. Find tan θ.
  <div class="step-box"><span class="step-num">1</span> tan θ = Opposite/Adjacent.</div>
  <div class="step-box"><span class="step-num">2</span> tan θ = 8/6 = 4/3.</div>
  <strong>Answer:</strong> 4/3. You never needed the hypotenuse — pick the ratio that uses only what you have.
</div>
<div class="warning-box">Decide which ratio by what you <em>have</em> and what you <em>want</em>: opposite+hyp → sin, adjacent+hyp → cos, opposite+adjacent → tan. To find an angle, use the inverse functions (sin⁻¹, cos⁻¹, tan⁻¹). Redraw the triangle and label the known sides before writing any ratio.</div>`
          },
{
            "name": "Reciprocal Trig Functions",
            "diff": "hard",
            "visual": {"type":"shape","shape":"right","labels":{"a":"3","b":"4","h":"5","angle":"θ"},"caption":"3-4-5: sin θ = 4/5, sec θ = 5/3"},
            "expl": `The reciprocal trig functions are just one-over the basic ones — no new triangles, no new angles.
<div class="formula-box">csc θ = 1/sin θ<br>sec θ = 1/cos θ<br>cot θ = 1/tan θ = cos θ/sin θ</div>
<div class="example-box">
  <strong>Question:</strong> If sin θ = 2/3 in a right triangle, find csc θ.
  <div class="step-box"><span class="step-num">1</span> csc is the reciprocal of sin.</div>
  <div class="step-box"><span class="step-num">2</span> csc θ = 1 ÷ (2/3) = 3/2.</div>
  <strong>Answer:</strong> 3/2. Flip the fraction — don't compute the angle.
</div>
<div class="example-box">
  <strong>Question:</strong> If cos θ = 3/5, find sin θ and sec θ.
  <div class="step-box"><span class="step-num">1</span> Draw the reference triangle: adjacent 3, hypotenuse 5, so opposite = √(25 − 9) = 4.</div>
  <div class="step-box"><span class="step-num">2</span> sin θ = 4/5; sec θ = 1/(3/5) = 5/3.</div>
  <strong>Answer:</strong> sin θ = 4/5, sec θ = 5/3. The 3-4-5 triangle reappears whenever you see these numbers.
</div>
<div class="warning-box">Memorize the reciprocal pairs: csc ↔ sin, sec ↔ cos, cot ↔ tan. A common ACT move is asking for a reciprocal directly from a given ratio, or using the identity sin²θ + cos²θ = 1 to find the third ratio. Check your answer keeps the same sign as the original ratio.</div>`
          },
{
            "name": "Unit Circle & Special Angles",
            "diff": "hard",
            "visual": {"type":"shape","shape":"circle","labels":{"r":"1"},"caption":"Unit circle: cos 120° = −1/2, sin 225° = −√2/2"},
            "expl": `The unit circle links angles to exact trig values. The special angles appear constantly: 0°, 30°, 45°, 60°, 90° (and their multiples in other quadrants). Find the reference angle, then apply the quadrant sign.
<div class="formula-box">Special values: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2<br>cos is the same list reversed: cos 60° = 1/2, cos 45° = √2/2, cos 30° = √3/2</div>
<div class="example-box">
  <strong>Question:</strong> Find the exact value of cos 120°.
  <div class="step-box"><span class="step-num">1</span> 120° is in Quadrant II (90°–180°), where cosine is negative.</div>
  <div class="step-box"><span class="step-num">2</span> Reference angle = 180° − 120° = 60°.</div>
  <div class="step-box"><span class="step-num">3</span> cos 60° = 1/2, apply the sign: −1/2.</div>
  <strong>Answer:</strong> −1/2. Quadrant decides the sign; the reference angle decides the magnitude.
</div>
<div class="example-box">
  <strong>Question:</strong> Find the exact value of sin 225°.
  <div class="step-box"><span class="step-num">1</span> 225° is in Quadrant III, where sine is negative.</div>
  <div class="step-box"><span class="step-num">2</span> Reference angle = 225° − 180° = 45°.</div>
  <div class="step-box"><span class="step-num">3</span> sin 45° = √2/2, apply the sign: −√2/2.</div>
  <strong>Answer:</strong> −√2/2. Same recipe every time: quadrant → sign, reference angle → value.
</div>
<div class="warning-box">Sign rules (ASTC: All, Sine, Tangent, Cosine positive by quadrant from QI clockwise): QI all positive, QII sine positive, QIII tangent positive, QIV cosine positive. Radian conversions: 180° = π, 90° = π/2, 45° = π/4, 30° = π/6. If answers are in radians, convert before comparing.</div>`
          },
{
            "name": "Law of Sines & Cosines",
            "diff": "hard",
            "visual": {"type":"shape","shape":"triangle","labels":{"a":"7","b":"5","c":"√39","C":"60°"},"caption":"c² = 7² + 5² − 2(7)(5)cos 60° = 39"},
            "expl": `For <strong>non-right</strong> triangles, these two laws are the workhorses.
<div class="formula-box">Law of Sines: a/sin A = b/sin B = c/sin C<br>Law of Cosines: c² = a² + b² − 2ab·cos C</div>
<div class="example-box">
  <strong>Question:</strong> Triangle has sides a = 7, b = 5, and angle C = 60° between them. Find side c.
  <div class="step-box"><span class="step-num">1</span> Use the Law of Cosines (we have two sides and the included angle).</div>
  <div class="step-box"><span class="step-num">2</span> c² = 7² + 5² − 2(7)(5)cos 60°.</div>
  <div class="step-box"><span class="step-num">3</span> cos 60° = 1/2: c² = 49 + 25 − 35 = 39.</div>
  <div class="step-box"><span class="step-num">4</span> c = √39.</div>
  <strong>Answer:</strong> c = √39.
</div>
<div class="example-box">
  <strong>Question:</strong> In triangle ABC, angle A = 30°, side a = 4, and angle B = 45°. Find side b.
  <div class="step-box"><span class="step-num">1</span> An angle and its opposite side are known → Law of Sines: 4/sin 30° = b/sin 45°.</div>
  <div class="step-box"><span class="step-num">2</span> sin 30° = 1/2 and sin 45° = √2/2.</div>
  <div class="step-box"><span class="step-num">3</span> b = 4 × (√2/2) / (1/2) = 4√2.</div>
  <strong>Answer:</strong> b = 4√2. Keep the exact special-angle values — don't round unless the choices force it.
</div>
<div class="warning-box">Use the Law of Sines when you know an angle and its opposite side (two such pairs). Use the Law of Cosines when you know two sides and the included angle, or all three sides. The ambiguous (SSA) case rarely appears on the ACT — if it does, both triangles fit. A trig formula with a 90° angle should collapse into the Pythagorean theorem — good self-check.</div>`
          }
            ]
        },
        {
            "name": "Statistics & Probability",
            "topics": [
{
            "name": "Mean, Median, Mode & Range",
            "diff": "easy",
            "visual": {"type":"bar","labels":["3","4","4","5","8"],"values":[3,4,4,5,8],"gold":false,"caption":"Sorted data: mean 4.8, median 4, mode 4"},
            "expl": `Measures of center summarize a data set.<br>• <strong>Mean</strong>: sum ÷ count (the average)<br>• <strong>Median</strong>: middle value after sorting (average of the two middle values when the count is even)<br>• <strong>Mode</strong>: most frequent value (there can be none, or more than one)<br>• <strong>Range</strong>: max − min — a measure of spread, not of center
<div class="example-box">
  <strong>Question:</strong> Find the mean, median, mode, and range of {4, 8, 3, 5, 4}.
  <div class="step-box"><span class="step-num">1</span> Sort: 3, 4, 4, 5, 8.</div>
  <div class="step-box"><span class="step-num">2</span> Mean = (3+4+4+5+8) ÷ 5 = 24 ÷ 5 = 4.8.</div>
  <div class="step-box"><span class="step-num">3</span> Median = middle (3rd) value = 4.</div>
  <div class="step-box"><span class="step-num">4</span> Mode = 4 (appears twice). Range = 8 − 3 = 5.</div>
  <strong>Answer:</strong> Mean 4.8, median 4, mode 4, range 5.
</div>
<div class="example-box">
  <strong>Question:</strong> The mean of 5 numbers is 8. One number is removed, and the mean of the remaining four is 7. Which number was removed?
  <div class="step-box"><span class="step-num">1</span> Total of all 5 = 5 × 8 = 40.</div>
  <div class="step-box"><span class="step-num">2</span> Total of remaining 4 = 4 × 7 = 28.</div>
  <div class="step-box"><span class="step-num">3</span> Removed number = 40 − 28 = 12.</div>
  <strong>Answer:</strong> 12. Work backwards from totals — the mean × count trick reverses instantly.
</div>
<div class="warning-box">An outlier pulls the <strong>mean</strong> but barely moves the <strong>median</strong>. If mean &gt; median, the data is skewed right — a favorite ACT inference question. Always sort before finding the median, and remember the mean can be a non-integer even when every data value is an integer.</div>`
          },
{
            "name": "Basic Probability",
            "diff": "medium",
            "visual": {"type":"bar","labels":["Not 5","5"],"values":[5,1],"gold":false,"caption":"P(not 5) = 5/6"},
            "expl": `Probability measures how likely an outcome is — always a number between 0 and 1 (or 0% to 100%).
<div class="formula-box">P(event) = favorable outcomes ÷ total outcomes<br>P(not A) = 1 − P(A)<br>P(A and B) = P(A) × P(B) (independent events)<br>P(A or B) = P(A) + P(B) − P(both)</div>
<div class="example-box">
  <strong>Question:</strong> Roll one fair die. What is the probability of NOT rolling a 5?
  <div class="step-box"><span class="step-num">1</span> Total outcomes = 6.</div>
  <div class="step-box"><span class="step-num">2</span> P(5) = 1/6.</div>
  <div class="step-box"><span class="step-num">3</span> Complement: 1 − 1/6 = 5/6.</div>
  <strong>Answer:</strong> 5/6. Using the complement is almost always faster than counting "not" outcomes directly.
</div>
<div class="example-box">
  <strong>Question:</strong> A spinner has 4 equal sections numbered 1–4. What is P(spinning a 2 or an even number)?
  <div class="step-box"><span class="step-num">1</span> P(2) = 1/4 and P(even) = 2/4 (sections 2 and 4).</div>
  <div class="step-box"><span class="step-num">2</span> The outcomes overlap (2 is both), so P(both) = 1/4.</div>
  <div class="step-box"><span class="step-num">3</span> P(2 or even) = 1/4 + 2/4 − 1/4 = 2/4 = 1/2.</div>
  <strong>Answer:</strong> 1/2. Favorable sections {2, 4} of 4. The "or" rule subtracts the double-counted overlap.
</div>
<div class="warning-box">Watch for <strong>with vs. without replacement</strong>. Drawing a card and putting it back keeps probabilities the same; not replacing it changes both the numerator and denominator for the next draw. Convert answers to the same format — decimals vs. fractions — before comparing against the choices.</div>`
          },
{
            "name": "Counting Principles",
            "diff": "medium",
            "visual": {"type":"bar","labels":["1st","2nd","3rd"],"values":[9,9,8],"gold":false,"caption":"9 × 9 × 8 = 648 codes"},
            "expl": `Counting tells you <em>how many</em> outcomes or arrangements exist without listing them all.
<div class="formula-box">Fundamental Counting Principle: if A has m choices and B has n choices, A then B has m × n choices<br>Permutations: nPr = n!/(n − r)! (order matters)<br>Combinations: nCr = n!/[r!(n − r)!] (order doesn't matter)</div>
<div class="example-box">
  <strong>Question:</strong> How many different 3-digit codes can be made from the digits 0–9 if no digit repeats and the first digit can't be 0?
  <div class="step-box"><span class="step-num">1</span> First digit: 9 choices (1–9).</div>
  <div class="step-box"><span class="step-num">2</span> Second digit: 9 choices (10 digits minus the one used).</div>
  <div class="step-box"><span class="step-num">3</span> Third digit: 8 choices.</div>
  <strong>Answer:</strong> 9 × 9 × 8 = 648 codes. Multiply the choices at each stage.
</div>
<div class="example-box">
  <strong>Question:</strong> A committee of 3 is chosen from 8 students. How many committees are possible?
  <div class="step-box"><span class="step-num">1</span> Order does not matter (ABC = ACB), so use combinations: 8C3.</div>
  <div class="step-box"><span class="step-num">2</span> 8!/(3!·5!) = (8 × 7 × 6)/(3 × 2 × 1).</div>
  <div class="step-box"><span class="step-num">3</span> Cancel: (8 × 7 × 6)/6 = 56.</div>
  <strong>Answer:</strong> 56 committees. When order doesn't matter, divide by r! to remove duplicate orderings.
</div>
<div class="warning-box">Decide permutation vs. combination: does order matter? Arranging books on a shelf = permutation (AB ≠ BA). Choosing a committee = combination (AB = BA). Factorials: 5! = 5 × 4 × 3 × 2 × 1 = 120. Cancel factorials before multiplying — it keeps the numbers small and the arithmetic easy.</div>`
          },
{
            "name": "Advanced Probability",
            "diff": "hard",
            "visual": {"type":"bar","labels":["Red","Blue"],"values":[3,2],"gold":false,"caption":"3 red, 2 blue; P(both red) = 3/10"},
            "expl": `Advanced probability handles <em>dependent</em> events and conditional probability — situations where one outcome changes the odds of the next.
<div class="formula-box">P(A and B) = P(A) × P(B|A) — for dependent events<br>P(B|A) = P(A and B) / P(A)<br>P(A or B) = P(A) + P(B) − P(A and B)</div>
<div class="example-box">
  <strong>Question:</strong> A bag has 3 red and 2 blue marbles. Draw two without replacement. What is P(both red)?
  <div class="step-box"><span class="step-num">1</span> P(first red) = 3/5.</div>
  <div class="step-box"><span class="step-num">2</span> P(second red | first red) = 2/4 (one red is gone).</div>
  <div class="step-box"><span class="step-num">3</span> Multiply: 3/5 × 2/4 = 6/20 = 3/10.</div>
  <strong>Answer:</strong> 3/10. "Without replacement" always changes the second probability.
</div>
<div class="example-box">
  <strong>Question:</strong> Of 20 students, 12 play soccer and 8 play tennis; 3 play both. If a student plays soccer, what is the probability they also play tennis?
  <div class="step-box"><span class="step-num">1</span> This is conditional: P(tennis | soccer) = P(both) / P(soccer).</div>
  <div class="step-box"><span class="step-num">2</span> = (3/20) ÷ (12/20) = 3/12 = 1/4.</div>
  <strong>Answer:</strong> 1/4. "Given that" language means restrict the whole problem to the smaller group.
</div>
<div class="warning-box">Mutually exclusive events: P(A and B) = 0. Independent events: P(A and B) = P(A) × P(B) with no conditional adjustment. On the ACT, "given that" (conditional) language is the cue to divide by the restricted total. Reduce final fractions to match answer choices.</div>`
          },
{
            "name": "Expected Value",
            "diff": "hard",
            "visual": {"type":"bar","labels":["$10","$2","$0"],"values":[2.5,1,0],"gold":false,"caption":"E = 2.5 + 1 + 0 = $3.50"},
            "expl": `Expected value is the weighted average of all possible outcomes — the "long-run average" you'd see after repeating an experiment many times. It is <strong>not</strong> a guaranteed single result.
<div class="formula-box">E = Σ [value × probability]</div>
<div class="example-box">
  <strong>Question:</strong> A game pays $10 with probability 1/4, $2 with probability 1/2, and $0 otherwise. What is the expected payout?
  <div class="step-box"><span class="step-num">1</span> List each outcome and its probability: $10 (0.25), $2 (0.5), $0 (0.25).</div>
  <div class="step-box"><span class="step-num">2</span> Multiply each by its probability: 10(0.25) = 2.5, 2(0.5) = 1, 0(0.25) = 0.</div>
  <div class="step-box"><span class="step-num">3</span> Sum: 2.5 + 1 + 0 = 3.5.</div>
  <strong>Answer:</strong> $3.50 expected payout. Probabilities must sum to 1 before you start.
</div>
<div class="example-box">
  <strong>Question:</strong> A raffle sells tickets for $2. One winner of 500 tickets gets $100. What is the expected gain (or loss) per ticket?
  <div class="step-box"><span class="step-num">1</span> Expected winnings = 100 × (1/500) = $0.20.</div>
  <div class="step-box"><span class="step-num">2</span> Cost to play: −$2.</div>
  <div class="step-box"><span class="step-num">3</span> Net expected gain = 0.20 − 2 = −$1.80.</div>
  <strong>Answer:</strong> −$1.80, an expected loss. Subtract the cost of playing to find true expected value.
</div>
<div class="warning-box">Expected value can be negative or fractional — it's an average, not a possible single outcome. The ACT often frames it as a "fair game": the fair price to play equals the expected value. Double-check that all probabilities add to 1 — a missing outcome quietly shifts the answer.</div>`
          },
{
            "name": "Scatterplots & Lines of Best Fit",
            "diff": "medium",
            "visual": {"type":"line","pts":[[10,40],[20,58],[30,80],[25,68]],"fit":{"m":2,"b":20},"xMin":10,"xMax":30,"yMin":40,"yMax":80,"xLabel":"x","yLabel":"y","caption":"Best fit: y = 2x + 20"},
            "expl": `A <strong>line of best fit</strong> (regression line) summarizes the trend in a scatterplot. Estimate values by reading the line, not individual points — points scatter around the line on purpose.
<div class="example-box">
  <strong>Question:</strong> A line of best fit passes through (10, 40) and (30, 80). Estimate the value at x = 20.
  <div class="step-box"><span class="step-num">1</span> Slope = (80 − 40)/(30 − 10) = 40/20 = 2.</div>
  <div class="step-box"><span class="step-num">2</span> At x = 20 (halfway between 10 and 30), y is halfway between 40 and 80.</div>
  <div class="step-box"><span class="step-num">3</span> y = 60. (Or use y = 2x + 20: 2(20) + 20 = 60.)</div>
  <strong>Answer:</strong> 60. Reading the line is always preferred over reading individual points.
</div>
<div class="example-box">
  <strong>Question:</strong> A best-fit line for study time vs. mistakes has slope −3. Predict the change when study time increases from 4 to 6 hours.
  <div class="step-box"><span class="step-num">1</span> Δx = 2 hours.</div>
  <div class="step-box"><span class="step-num">2</span> Δy = slope × Δx = (−3)(2) = −6.</div>
  <strong>Answer:</strong> About 6 fewer mistakes. Use slope as the rate of change to move along the line.
</div>
<div class="warning-box">Positive slope = increasing trend; negative slope = decreasing; flat = no correlation. Correlation (r) tells strength and direction, <em>not</em> causation. Don't extrapolate far beyond the data range — lines of best fit are only reliable where data exists. Read axes carefully: a slope of "3" means 3 units per 1 unit on the <em>actual</em> scale.</div>`
          }
            ]
        },
        {
            "name": "Integrating Essential Skills",
            "topics": [
{
            "name": "Fractions, Decimals & Percentages",
            "diff": "medium",
            "visual": {"type":"bar","labels":["1/2","1/4","3/4","1/5"],"values":[50,25,75,20],"gold":false,"caption":"Equivalent percentages"},
            "expl": `Fractions, decimals, and percentages are three ways of writing the same value. <strong>Percent change</strong> measures growth or shrink relative to the original amount.<br><br>Memorize these conversions to save time: 1/2 = 0.5 = 50%, 1/4 = 25%, 3/4 = 75%, 1/3 ≈ 33.3%, 2/3 ≈ 66.7%, 1/5 = 20%, 1/8 = 12.5%.
<div class="formula-box">Percent change = (new − old) ÷ old × 100%<br>Percent of a number: p% of x = (p/100) × x<br>Increase by p% → multiply by (1 + p/100); decrease → multiply by (1 − p/100)</div>
<div class="example-box">
  <strong>Question:</strong> A $40 shirt is on sale for $30. What is the percent decrease?
  <div class="step-box"><span class="step-num">1</span> Change = old − new = 40 − 30 = $10.</div>
  <div class="step-box"><span class="step-num">2</span> Divide by the original: 10 ÷ 40 = 0.25.</div>
  <div class="step-box"><span class="step-num">3</span> Convert to a percent: 0.25 × 100 = 25%.</div>
  <strong>Answer:</strong> 25% decrease. Always divide by the <strong>original</strong>, not the new value.
</div>
<div class="example-box">
  <strong>Question:</strong> A restaurant bill is $48. What is a 15% tip, and what is the total paid?
  <div class="step-box"><span class="step-num">1</span> 15% of 48 = (15/100) × 48 = 7.2.</div>
  <div class="step-box"><span class="step-num">2</span> Total = 48 + 7.2 = 55.2.</div>
  <div class="step-box"><span class="step-num">3</span> Faster: multiply 48 × 1.15 = 55.2 in one step.</div>
  <strong>Answer:</strong> $7.20 tip, $55.20 total. A single multiplier (1 + p/100) handles the tip and the total at once.
</div>
<div class="warning-box">Successive percent changes do <strong>not</strong> cancel. A 20% increase followed by a 20% decrease = 0.96× the original (−4%), not 100%. Work step-by-step on the running amount, and never add percentages across separate steps. Convert everything to decimals on your calculator to avoid fraction-entry errors.</div>`
          },
{
            "name": "Ratios & Proportions",
            "diff": "medium",
            "visual": {"type":"bar","labels":["3","4"],"values":[3,4],"gold":false,"caption":"A 3:4 ratio"},
            "expl": `A <strong>ratio</strong> compares two quantities (3:4). A <strong>proportion</strong> states two ratios are equal, and you solve it by <strong>cross-multiplying</strong>. Unit rates — cost per item, miles per hour — are ratios simplified so the second quantity equals 1.
<div class="formula-box">a/b = c/d ⟺ a × d = b × c<br>Unit rate = total ÷ count</div>
<div class="example-box">
  <strong>Question:</strong> If 3 oranges cost $2, how much do 15 oranges cost?
  <div class="step-box"><span class="step-num">1</span> Set up the proportion: 3/2 = 15/x.</div>
  <div class="step-box"><span class="step-num">2</span> Cross-multiply: 3x = 15 × 2 = 30.</div>
  <div class="step-box"><span class="step-num">3</span> Solve: x = 30 ÷ 3 = 10.</div>
  <strong>Answer:</strong> $10. The ratio method: 15 is 5× the 3 oranges, so cost is 5 × $2 = $10.
</div>
<div class="example-box">
  <strong>Question:</strong> On a map, 1 inch represents 20 miles. A trail measures 3.5 inches. How long is the trail?
  <div class="step-box"><span class="step-num">1</span> Set up: 1/20 = 3.5/x.</div>
  <div class="step-box"><span class="step-num">2</span> Cross-multiply: x = 3.5 × 20 = 70.</div>
  <strong>Answer:</strong> 70 miles. For "how many times bigger" problems, find the multiplier first instead of cross-multiplying.
</div>
<div class="warning-box">If a ratio is boys:girls = 3:4, treat the parts as 3x and 4x. Total = 7x. A common trap is adding the ratio parts as the actual count — 3 boys and 4 girls is only correct when x = 1. Also make sure the same units appear on both sides of a proportion before you solve.</div>`
          },
{
            "name": "Direct & Inverse Variation",
            "diff": "medium",
            "visual": {"type":"text","text":"Direct: y = kx\nInverse: y = k/x"},
            "expl": `Direct variation: y = kx. Inverse variation: y = k/x.<br><br>Find k from given values, then solve for unknown.<br><div class="example-box">
  <strong>Question:</strong> If y varies directly as x, and y = 10 when x = 2, find y when x = 7.
  <div class="step-box"><span class="step-num">1</span> 10 = k*2 -> k = 5</div>
  <div class="step-box"><span class="step-num">2</span> y = 5*7 = 35</div>
  <strong>Answer:</strong> 35
</div>`},
{
            "name": "Rates & Work Problems",
            "diff": "medium",
            "visual": {"type":"text","text":"Combined rate = sum of individual rates"},
            "expl": `Work problems: combined rate = sum of individual rates.<br><div class="example-box">
  <strong>Question:</strong> John paints a house in 6 hrs, Sam in 4 hrs. Time together?
  <div class="step-box"><span class="step-num">1</span> John's rate = 1/6 house/hr</div>
  <div class="step-box"><span class="step-num">2</span> Sam's rate = 1/4 house/hr</div>
  <div class="step-box"><span class="step-num">3</span> Combined rate = 1/6 + 1/4 = 5/12 house/hr</div>
  <div class="step-box"><span class="step-num">4</span> Time = 1 / (5/12) = 12/5 = 2.4 hrs</div>
  <strong>Answer:</strong> 2.4 hours
</div>`},
{
            "name": "Data Analysis from Tables & Charts",
            "diff": "medium",
            "visual": {"type":"text","text":"Bar chart: Math 30, Science 25, English 20, History 15, Art 10"},
            "expl": `Read data from tables/charts. Calculate percentages, totals, differences.<br><div class="example-box">
  <strong>Question:</strong> Survey: 100 students. Math:30, Science:25, English:20, History:15, Art:10. What % chose Science?
  <div class="step-box"><span class="step-num">1</span> Science = 25</div>
  <div class="step-box"><span class="step-num">2</span> Total = 100</div>
  <div class="step-box"><span class="step-num">3</span> % = (25/100)*100 = 25%</div>
  <strong>Answer:</strong> 25%
</div>`}
            ]
        },
        {
            "name": "Modeling",
            "topics": [
{
            "name": "Interpreting Models & Graphs",
            "diff": "hard",
            "visual": {"type":"text","text":"Linear model: y = 2x + 5"},
            "expl": `Interpret mathematical models in context.<br><div class="example-box">
  <strong>Question:</strong> Phone plan: $20/month + $0.10/min. Write cost C(m) and interpret.
  <div class="step-box"><span class="step-num">1</span> C(m) = 20 + 0.10m</div>
  <div class="step-box"><span class="step-num">2</span> Slope = 0.10 = $0.10 per minute</div>
  <div class="step-box"><span class="step-num">3</span> Y-intercept = 20 = $20 base fee</div>
  <strong>Answer:</strong> C = 0.10m + 20; slope=$0.10/min, intercept=$20/month
</div>`}
            ]
        }
      ]
  };
})();
