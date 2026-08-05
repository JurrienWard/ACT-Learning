
// ╔══════════════════════════════════════════╗
// ║          APP: ACT WIZARD CORE            ║
// ╚══════════════════════════════════════════╝

// ╔══════════════════════════════════════════╗
// ║   DYNAMIC ACT MATH QUESTION GENERATOR    ║
// ╚══════════════════════════════════════════╝
//
// Generates fresh ACT-style multiple-choice questions (5 options, A-E)
// on the fly. Nothing is pre-written and nothing is cached, so every
// test is different.
//
// HOW TO ADJUST:
//   TONE ......... edit the phrasing in the GEN builders below
//                  (e.g. "Which of the following ..." vs "What is ...").
//   DIFFICULTY ... every topic maps to a generator taking a `level`
//                  argument ('easy' | 'medium' | 'hard'); tighten or
//                  loosen the number ranges / add steps there.
//   PROPORTIONS .. edit LEVEL_MIX in generateTopicQuestions to change
//                  the easy:medium:hard split of a test.
const TopicQuestionGenerator = (() => {
  'use strict';

  // ─────────────────── helpers ───────────────────
  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Build a numeric question: guarantees 5 unique string options.
  const numQ = (prompt, correct, distractors, explanation) => {
    let ds = [...new Set(distractors.map(String))].filter(d => d !== String(correct));
    let guard = 0;
    while (ds.length < 4 && guard++ < 200) {
      const s = String(correct + randInt(1, 20) * (Math.random() < 0.5 ? -1 : 1));
      if (!ds.includes(s)) ds.push(s);
    }
    const options = shuffle([String(correct), ...ds.slice(0, 4)]);
    return { q: prompt, options, answer: options.indexOf(String(correct)), explanation };
  };

  // Build a word-based question (5 unique string options).
  const strQ = (prompt, correct, distractors, explanation) => {
    let ds = [...new Set(distractors.map(String))].filter(d => d !== String(correct));
    const fillers = ['None of the above', 'Not enough information', 'x + 1', 'x − 1', '0', '1', '5', '10'];
    let i = 0;
    while (ds.length < 4 && i < fillers.length) {
      const f = fillers[i++];
      if (f !== String(correct) && !ds.includes(f)) ds.push(f);
    }
    const options = shuffle([String(correct), ...ds.slice(0, 4)]);
    return { q: prompt, options, answer: options.indexOf(String(correct)), explanation };
  };

  // Render an ACT-style SVG figure (coordinate plane, shape, chart) as HTML for
  // a question prompt. Returns '' (no figure) if ACTVisuals is unavailable.
  const fig = (spec) => {
    if (typeof ACTVisuals === 'undefined' || !ACTVisuals) return '';
    try { return ACTVisuals.body(spec) || ''; } catch (e) { return ''; }
  };

  const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
  const countPrimes = (a, b) => { let c = 0; for (let i = a; i <= b; i++) if (isPrime(i)) c++; return c; };
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

  // tiny safe evaluator for simple numeric formulas found in explanations
  const safeEval = expr => {
    try {
      let s = expr
        .replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/–/g, '-')
        .replace(/\^/g, '**').replace(/²/g, '**2').replace(/³/g, '**3')
        .replace(/π/g, '(3.14)')
        .replace(/[√]/g, 'Math.sqrt')
        .replace(/Math.sqrt\s*\(/g, 'Math.sqrt(');
      s = s.replace(/(\d)\s*Math\.sqrt\s*\(/g, '$1*Math.sqrt(');
      s = s.replace(/√/g, 'Math.sqrt');
      // strip letters that aren't part of Math.*
      s = s.replace(/[a-zA-Z_$](?![a-zA-Z0-9_$]*\()/g, '');
      if (/[a-zA-Z]/.test(s.replace(/Math\.sqrt/g, ''))) return null;
      const v = Function('"use strict"; return (' + s + ')')();
      if (typeof v === 'number' && isFinite(v)) return Math.round(v * 100) / 100;
    } catch (e) { /* ignore */ }
    return null;
  };

  // Look up the explanation for a math topic (used by the fallback).
  const explFor = topicName => {
    try {
      if (typeof data === 'undefined') return '';
      for (const cat of data.math.categories) {
        for (const t of cat.topics) {
          if (t.name === topicName) return t.expl || '';
        }
      }
    } catch (e) { /* ignore */ }
    return '';
  };

  // ─────────────────── topic generators ───────────────────
  // Each is a function(level) -> question object. `level` is
  // 'easy' | 'medium' | 'hard'.
  const GEN = {

    // ── Number & Quantity ──────────────────────
    'Number Types & Properties': [
      level => {
        if (level === 'easy') {
          const p = pick([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
          const cs = shuffle([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25]);
          return strQ('Which of the following is a prime number?', p, cs.slice(0, 4),
            p + ' is prime because its only factors are 1 and ' + p + '.');
        }
        if (level === 'medium') {
          const c = pick([4, 6, 8, 9, 10, 12, 15, 16, 18, 20, 21]);
          const ps = shuffle([2, 3, 5, 7, 11, 13, 17, 19, 23]);
          return strQ('Which of the following is NOT a prime number?', c, ps.slice(0, 4),
            c + ' is composite (it has factors other than 1 and itself), so it is not prime.');
        }
        const pair = pick([[1, 20], [20, 40], [30, 60], [50, 80]]);
        const a = pair[0], b = pair[1];
        const ans = countPrimes(a, b);
        return numQ('How many prime numbers are there between ' + a + ' and ' + b + '?', ans,
          [ans - 1, ans + 1, ans - 2, ans + 2, ans + 3],
          'Counting the primes from ' + a + ' to ' + b + ' inclusive gives ' + ans + ' primes.');
      },
      level => {
        if (level === 'easy') {
          const c = pick([4, 6, 8, 9, 10, 12, 14, 15, 16]);
          const ps = shuffle([2, 3, 5, 7, 11, 13, 17, 19, 23]);
          return strQ('Which of the following is a composite number?', c, ps.slice(0, 4),
            c + ' is composite because it has factors other than 1 and itself (for example, ' + c + ' = 2 × ' + (c / 2) + ').');
        }
        if (level === 'medium') {
          const oc = pick([9, 15, 21, 25, 27, 33, 35]);
          return strQ('Which of the following is an odd composite number?', oc,
            [oc + 2, oc - 2, 1, 3, 5],
            oc + ' is odd and composite: it has factors besides 1 and itself.');
        }
        return numQ('How many even integers are there between 1 and 100 inclusive?', 50,
          [51, 49, 25, 99, 100],
          'Half of the integers from 1 to 100 are even, giving 50.');
      },
      level => {
        if (level === 'easy') {
          const e = pick([4, 6, 8, 10, 12, 14, 16, 18, 20]);
          const odds = shuffle([3, 5, 7, 9, 11, 13, 15, 17, 19]);
          return strQ('Which of the following is an even number?', e, odds.slice(0, 4),
            e + ' is even because it is divisible by 2.');
        }
        if (level === 'medium') {
          const n = pick([6, 7, 8, 9, 12]);
          const mult = pick([2, 3, 4, 5, 7]);
          const ans = n * mult;
          return numQ('Which of the following is divisible by ' + n + '?', ans,
            [ans + 1, ans + 2, ans + n - 1, ans + n + 1, ans - 1],
            ans + ' ÷ ' + n + ' = ' + mult + ', so ' + ans + ' is divisible by ' + n + '.');
        }
        return numQ('How many odd integers are there between 1 and 100 inclusive?', 50,
          [49, 51, 25, 99, 100],
          'Half of the integers from 1 to 100 are odd, giving 50.');
      }
    ],

    'Factors, Multiples & Divisibility': level => {
      if (level === 'easy') {
        const a = randInt(12, 48), b = randInt(12, 48);
        return numQ('What is the greatest common factor of ' + a + ' and ' + b + '?', gcd(a, b),
          [gcd(a, b) + 1, gcd(a, b) - 1, gcd(a, b) + 2, gcd(a, b) * 2, lcm(a, b)],
          'The GCF of ' + a + ' and ' + b + ' is ' + gcd(a, b) + '.');
      }
      if (level === 'medium') {
        const a = randInt(4, 12), b = randInt(6, 15);
        return numQ('What is the least common multiple of ' + a + ' and ' + b + '?', lcm(a, b),
          [a * b, a + b, lcm(a, b) + a, lcm(a, b) - a, gcd(a, b)],
          'The LCM of ' + a + ' and ' + b + ' is ' + lcm(a, b) + ' (the smallest number both divide evenly).');
      }
      const n = pick([6, 7, 8, 9, 12]);
      const mult = pick([2, 3, 4, 5, 7]);
      const ans = n * mult;
      return numQ('Which of the following is divisible by ' + n + '?', ans,
        [ans + 1, ans + 2, ans + n - 1, ans + n + 1, ans - 1],
        ans + ' ÷ ' + n + ' = ' + mult + ', so ' + ans + ' is divisible by ' + n + '.');
    },

    'Fractions, Decimals & Percentages': level => {
      if (level === 'easy') {
        const p = pick([10, 20, 25, 30, 40, 50, 75]);
        const x = pick([40, 60, 80, 120, 200, 240]);
        return numQ('What is ' + p + '% of ' + x + '?', (p / 100) * x,
          [(p / 100) * x + 10, (p / 100) * x - 10, x * p, x / p, x - (p / 100) * x],
          p + '% of ' + x + ' = (' + p + '/100) × ' + x + ' = ' + (p / 100) * x + '.');
      }
      if (level === 'medium') {
        const oldV = pick([20, 25, 40, 50, 80, 100]);
        const dec = pick([10, 20, 25, 50]);
        const newV = oldV * (1 - dec / 100);
        return numQ('A price drops from $' + oldV + ' to $' + newV + '. What is the percent decrease?',
          dec, [dec - 5, dec + 5, dec * 2, dec / 2, dec + 15],
          'Change = $' + oldV + ' − $' + newV + ' = $' + (oldV - newV) + ', and $' + (oldV - newV) + ' ÷ $' + oldV + ' = ' + dec + '%.');
      }
      const p1 = pick([20, 30, 40]), p2 = pick([10, 20, 25]);
      const start = 100;
      const after1 = start * (1 - p1 / 100);
      const after2 = after1 * (1 - p2 / 100);
      const net = Math.round((1 - after2 / 100) * 100);
      return numQ('A $' + start + ' item is discounted ' + p1 + '%, then an additional ' + p2 + '% off. What is the final price?',
        after2, [start - p1 - p2, after1 - p2, after2 + 5, after2 - 5, start * (1 - (p1 + p2) / 100)],
        'After the first discount: $' + after1 + '. After the second: ' + after1 + ' × ' + (1 - p2 / 100) + ' = $' + after2 + '.');
    },

    'Ratios & Proportions': level => {
      if (level === 'easy') {
        const a = randInt(2, 6), b = randInt(3, 9), k = randInt(2, 5);
        const c = a * k, x = b * k;
        return numQ('If ' + a + '/' + b + ' = ' + c + '/x, what is x?', x,
          [x + 1, x - 1, b + a, c + b, x * 2],
          'Cross-multiply: ' + a + 'x = ' + b + ' × ' + c + ' = ' + (b * c) + ', so x = ' + x + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 4), b = randInt(3, 6), x = randInt(3, 6);
        const price = pick([2, 3, 4, 5, 6]);
        const total = x * price * (b / a);
        return numQ('The ratio of miles driven to hours is ' + a + ':' + b + '. Driving ' + x + ' miles takes how many hours?',
          b * x / a, [b * x / a + 1, b * x / a - 1, a * x / b, x, b * x],
          'Set up ' + a + '/' + b + ' = ' + x + '/h; cross-multiply to get h = ' + (b * x / a) + '.');
      }
      const x = randInt(2, 4), y = randInt(3, 6), z = randInt(4, 8);
      const unit = randInt(1, 3);
      const total = (x + y + z) * unit;
      const part = z * unit;
      return numQ('The angles of a triangle are in the ratio ' + x + ':' + y + ':' + z + '. What is the measure of the largest angle?',
        part, [part + 30, part - 30, x * unit, total / 2, total],
        'Let the angles be ' + x + 'k, ' + y + 'k, ' + z + 'k. Then ' + (x + y + z) + 'k = 180, so k = ' + unit + ' and the largest angle is ' + z + 'k = ' + part + '°.');
    },

    'Scientific Notation': level => {
      if (level === 'easy') {
        const e = randInt(3, 7), co = randInt(2, 9);
        return numQ('What is ' + co + '.' + randInt(1, 9) + ' × 10^' + e + ' in standard form?',
          parseFloat(co + '.' + randInt(1, 9)) * Math.pow(10, e),
          [Math.pow(10, e), parseFloat(co + '.' + randInt(1, 9)) * Math.pow(10, e + 1), parseFloat(co + '.' + randInt(1, 9)) * Math.pow(10, e - 1), 10 * Math.pow(10, e), 1],
          'Move the decimal ' + e + ' places to the right: ' + (parseFloat(co + '.' + randInt(1, 9)) * Math.pow(10, e)) + '.');
      }
      if (level === 'medium') {
        const e = randInt(2, 6);
        const n = randInt(2, 9) * Math.pow(10, e);
        return numQ('Express ' + n + ' in scientific notation.', n / Math.pow(10, e) + ' × 10^' + e,
          [n / Math.pow(10, e) + ' × 10^' + (e + 1), n / Math.pow(10, e) + ' × 10^' + (e - 1), n / Math.pow(10, e + 1) + ' × 10^' + e, n * 10 + ' × 10^' + e, n / Math.pow(10, e) + ' × 10^' + (e * 2)],
          'Move the decimal to leave one digit before it: ' + n + ' = ' + (n / Math.pow(10, e)) + ' × 10^' + e + '.');
      }
      const a = randInt(2, 4), b = randInt(2, 4), m = randInt(2, 4), n = randInt(2, 4);
      return numQ('What is (' + a + ' × 10^' + m + ') × (' + b + ' × 10^' + n + ') in scientific notation?',
        (a * b) * Math.pow(10, m + n) / 10 + ' × 10^' + (m + n + 1),
        [(a * b) + ' × 10^' + (m + n), a + ' × 10^' + (m * n), b + ' × 10^' + (m + n), (a * b) + ' × 10^' + (m * n), a * b + ' × 10^' + (m + n)],
        'Multiply coefficients: ' + a + ' × ' + b + ' = ' + (a * b) + ', and add exponents: 10^' + (m + n) + ' → re-normalize to ' + ((a * b) / 10) + ' × 10^' + (m + n + 1) + '.');
    },

    'Mean, Median, Mode & Range': level => {
      if (level === 'easy') {
        const vals = Array.from({ length: 5 }, () => randInt(10, 40));
        const sum = vals.reduce((s, v) => s + v, 0);
        const barFig = fig({ type: 'bar', labels: ['D1', 'D2', 'D3', 'D4', 'D5'], values: vals });
        return numQ(barFig + 'What is the mean of ' + vals.join(', ') + '?', sum / 5,
          [sum / 5 + 1, sum / 5 - 1, sum, Math.max(...vals), Math.min(...vals)],
          'Mean = (' + vals.join(' + ') + ') ÷ 5 = ' + sum + ' ÷ 5 = ' + sum / 5 + '.');
      }
      if (level === 'medium') {
        const vals = Array.from({ length: 4 }, () => randInt(10, 30));
        const target = randInt(20, 40);
        const missing = target * 5 - vals.reduce((s, v) => s + v, 0);
        return numQ('The mean of ' + vals.join(', ') + ' and x is ' + target + '. What is x?', missing,
          [missing + 1, missing - 1, target, target * 5, target - 1],
          'Total = ' + target + ' × 5 = ' + target * 5 + ', so x = ' + target * 5 + ' − ' + vals.reduce((s, v) => s + v, 0) + ' = ' + missing + '.');
      }
      const g1 = randInt(20, 30), g2 = randInt(20, 30), w1 = randInt(2, 4), w2 = randInt(2, 4);
      const ans = (g1 * w1 + g2 * w2) / (w1 + w2);
      return numQ('In one class, ' + w1 + ' students average ' + g1 + '. In another, ' + w2 + ' students average ' + g2 + '. What is the combined average?',
        ans, [ans + 1, ans - 1, (g1 + g2) / 2, g1, g2],
          'Combined average = (' + g1 + '×' + w1 + ' + ' + g2 + '×' + w2 + ') ÷ ' + (w1 + w2) + ' = ' + ans + '.');
    },

    'Basic Probability': level => {
      if (level === 'easy') {
        const n = randInt(1, 6);
        return strQ('A fair die is rolled. What is the probability of rolling a ' + n + '?',
          '1/6', ['1/3', '1/2', '1/4', '2/3', '1/5'],
          'One favorable outcome (the ' + n + ') out of 6 total outcomes: 1/6.');
      }
      if (level === 'medium') {
        const r = randInt(2, 4), b = randInt(2, 4);
        const total = r + b;
        const p1 = r / total, p2 = (r - 1) / (total - 1);
        const ans = (p1 * p2);
        return numQ('A bag has ' + r + ' red and ' + b + ' blue marbles. Two are drawn without replacement. What is the probability both are red?',
          ans, [Math.round(ans * 10) / 10, ans + 0.1, ans - 0.05, (r / total) * (r / total), 1 - ans],
          'P(1st red) = ' + r + '/' + total + '; P(2nd red) = ' + (r - 1) + '/' + (total - 1) + '. Multiply: ' + ans + '.');
      }
      const r = randInt(2, 3), b = randInt(2, 3);
      const total = r + b;
      const ans = 1 - (b / total) * ((b - 1) / (total - 1));
      return numQ('A bag contains ' + r + ' red and ' + b + ' blue marbles. Two are drawn without replacement. What is the probability that at least one is red?',
        ans, [1 - ans, ans + 0.1, ans - 0.1, (b / total) * ((b - 1) / (total - 1)) + 0.2, r / total],
        'P(at least one red) = 1 − P(both blue) = 1 − (' + b + '/' + total + ' × ' + (b - 1) + '/' + (total - 1) + ') = ' + ans + '.');
    },

    'Order of Operations (PEMDAS)': level => {
      if (level === 'easy') {
        const a = randInt(2, 6), b = randInt(2, 5), c = randInt(2, 5);
        const ans = a + b * c;
        return numQ('What is ' + a + ' + ' + b + ' × ' + c + '?', ans,
          [(a + b) * c, a * b + c, a + b + c, ans - 1, ans + 1],
          'Multiplication comes before addition: ' + b + ' × ' + c + ' = ' + (b * c) + ', then ' + a + ' + ' + (b * c) + ' = ' + ans + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), e = randInt(2, 3), b = randInt(2, 5);
        const ans = a * Math.pow(b, e);
        return numQ('What is ' + a + ' × ' + b + '^' + e + '?', ans,
          [Math.pow(a * b, e), a + Math.pow(b, e), (a * b) * e, ans + 1, ans - 1],
          'Simplify the exponent first: ' + b + '^' + e + ' = ' + Math.pow(b, e) + ', then ' + a + ' × ' + Math.pow(b, e) + ' = ' + ans + '.');
      }
      const a = randInt(2, 4), b = randInt(2, 4), c = randInt(2, 4), d = randInt(2, 3);
      const ans = (a + b) * c - d;
      return numQ('Evaluate (' + a + ' + ' + b + ') × ' + c + ' − ' + d + '.', ans,
        [a + b * c - d, (a + b) * (c - d), a + (b * c - d), ans + 1, ans - 1],
          'Parentheses first: ' + a + ' + ' + b + ' = ' + (a + b) + '. Then ' + (a + b) + ' × ' + c + ' = ' + ((a + b) * c) + ', and finally − ' + d + ' = ' + ans + '.');
    },

    // ── Algebra ───────────────────────────
    'Solving Linear Equations': level => {
      if (level === 'easy') {
        const x = randInt(2, 9), a = randInt(3, 12);
        return numQ('If x + ' + a + ' = ' + (x + a) + ', what is x?', x,
          [x + 1, x - 1, a, x + a, x * 2],
          'Subtract ' + a + ' from both sides: x = ' + (x + a) + ' − ' + a + ' = ' + x + '.');
      }
      if (level === 'medium') {
        const x = randInt(2, 9), a = randInt(2, 6), b = randInt(3, 15);
        const rhs = a * x + b;
        return numQ('If ' + a + 'x + ' + b + ' = ' + rhs + ', what is x?', x,
          [x + 1, x - 1, rhs - b, rhs / a, b],
          'Subtract ' + b + ': ' + a + 'x = ' + (rhs - b) + '. Divide by ' + a + ': x = ' + x + '.');
      }
      if (level === 'hard') {
        const x = randInt(2, 8), a = randInt(2, 5), b = randInt(2, 6), c = randInt(2, 5);
        const rhs = c * x + b;
        return numQ('If ' + a + 'x + ' + b + ' = ' + rhs + ', what is x?', x,
          [x + 1, x - 1, (rhs - b) / a + 1, rhs, b],
          'Collect x terms: ' + a + 'x − ' + c + 'x = ' + b + ', so (' + (a - c) + ')x = ' + b + ' and x = ' + x + '.');
      }
    },

    'Linear Inequalities': level => {
      if (level === 'easy') {
        const x = randInt(1, 8), a = randInt(2, 6), b = randInt(1, 5);
        const c = b + x;
        return strQ('Which of the following is a solution to ' + a + 'x < ' + a * (x + 1) + '?',
          String(x), [String(x + 2), String(x + 3), String(x + 4), String(x + 5), String(x * 2)],
          'Dividing by ' + a + ' gives x < ' + (x + 1) + ', and ' + x + ' satisfies that.');
      }
      if (level === 'medium') {
        const x = randInt(2, 6), a = randInt(2, 4), b = randInt(1, 5);
        return strQ('If −' + a + 'x > ' + (-a * x + b) + ', which of the following is a solution?',
          String(x), [String(x + 1), String(x + 2), String(x - 1), String(x + 3), String(x * 2)],
          'Dividing by −' + a + ' flips the sign: x < ' + x + ', and ' + x + ' is a valid solution.');
      }
      if (level === 'hard') {
        const a = randInt(2, 5), c = randInt(4, 10);
        const ans = c / a;
        return strQ('Which value is a solution to |' + a + 'x| < ' + c + '?',
          String(randInt(1, Math.floor(ans))), [String(c), String(ans + 1), String(c + 1), String(ans * 2), String(c - 1)],
          '|' + a + 'x| < ' + c + ' means −' + c + ' < ' + a + 'x < ' + c + ', so −' + ans + ' < x < ' + ans + '.');
      }
    },

    'Evaluating Expressions': level => {
      if (level === 'easy') {
        const x = randInt(2, 8), a = randInt(2, 5), b = randInt(1, 9);
        return numQ('If x = ' + x + ', what is ' + a + 'x + ' + b + '?', a * x + b,
          [a * x + b + 1, a * x + b - 1, a + x + b, a * (x + b), a * x - b],
          'Substitute: ' + a + '(' + x + ') + ' + b + ' = ' + (a * x) + ' + ' + b + ' = ' + (a * x + b) + '.');
      }
      if (level === 'medium') {
        const x = randInt(2, 4), y = randInt(-4, -1), a = randInt(2, 4), b = randInt(1, 3);
        return numQ('If x = ' + x + ' and y = ' + y + ', what is ' + a + 'x − ' + b + 'y?', a * x - b * y,
          [a * x + b * y, a * x - b * Math.abs(y), a * x - b * y + 1, a * x - b * y - 1, a * (x - y)],
          'Substitute: ' + a + '(' + x + ') − ' + b + '(' + y + ') = ' + (a * x) + ' − (' + (b * y) + ') = ' + (a * x - b * y) + '.');
      }
      if (level === 'hard') {
        const x = randInt(2, 3), y = randInt(-2, -1), a = randInt(2, 3), b = randInt(1, 3), c = randInt(2, 4);
        return numQ('If x = ' + x + ' and y = ' + y + ', what is ' + a + 'x² − ' + b + 'y + ' + c + '?', a * x * x - b * y + c,
          [a * x * x + b * y + c, a * x * x - b * y - c, a * x * x + c, a * x * x - b * y + c + 1, a * x * x - b * y + c - 1],
          'Substitute: ' + a + '(' + x + ')² − ' + b + '(' + y + ') + ' + c + ' = ' + (a * x * x) + ' + ' + (-b * y) + ' + ' + c + ' = ' + (a * x * x - b * y + c) + '.');
      }
    },

    'Combining Like Terms': level => {
      if (level === 'easy') {
        const a = randInt(2, 5), b = randInt(2, 5), c = randInt(2, 5), d = randInt(2, 5);
        return numQ('Simplify: ' + a + 'x + ' + b + 'x. What is the coefficient of x?', a + b,
          [a * b, a + b + 1, a + b - 1, a, b],
          'Like terms combine by adding coefficients: ' + a + ' + ' + b + ' = ' + (a + b) + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 4), b = randInt(2, 4), c = randInt(2, 4);
        return numQ('Simplify: ' + a + 'x² + ' + b + 'x − ' + c + 'x. What is the result?',
          a + 'x² + ' + (b - c) + 'x',
          [a + 'x² − ' + c + 'x', (a + b - c) + 'x²', a + 'x² + ' + (b + c) + 'x', (a + b) + 'x² − ' + c + 'x', a + 'x²'],
          'x² and x are not like terms. Only the x terms combine: ' + b + ' − ' + c + ' = ' + (b - c) + '.');
      }
      if (level === 'hard') {
        const a = randInt(2, 4), b = randInt(2, 4), c = randInt(2, 4), d = randInt(2, 4);
        const coeff = a * b - c * d;
        return numQ('Simplify: ' + a + '(x + ' + b + ') − ' + c + '(x + ' + d + '). What is the coefficient of x in the result?',
          coeff, [coeff + 1, coeff - 1, a * b - c * d + a, a * b - c * d - a, a - c],
          'Distribute: ' + a + 'x + ' + (a * b) + ' − ' + c + 'x − ' + (c * d) + ' = (' + a + ' − ' + c + ')x + (' + (a * b) + ' − ' + (c * d) + '), so the x coefficient is ' + coeff + '.');
      }
    },

    'FOIL & Multiplying Binomials': level => {
      if (level === 'easy') {
        const a = randInt(2, 5), b = randInt(2, 5);
        const sum = a + b, prod = a * b;
        return numQ('What is (x + ' + a + ')(x + ' + b + ')?',
          'x² + ' + sum + 'x + ' + prod,
          ['x² + ' + prod + 'x + ' + sum, 'x² + ' + a + 'x + ' + b, 'x² + ' + (a * b) + 'x + ' + (a + b), 'x² + ' + (a + b) + 'x − ' + prod, 'x²'],
          'FOIL: x² + ' + b + 'x + ' + a + 'x + ' + prod + ' = x² + ' + sum + 'x + ' + prod + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), b = randInt(2, 5);
        return numQ('What is (x − ' + a + ')²?',
          'x² − ' + (2 * a) + 'x + ' + (a * a),
          ['x² + ' + (2 * a) + 'x + ' + (a * a), 'x² − ' + (a * a) + 'x + ' + (2 * a), 'x² − ' + a + 'x + ' + a, 'x² − ' + (2 * a) + 'x − ' + (a * a), 'x² + ' + a + 'x − ' + a],
          '(a − b)² = a² − 2ab + b², so (x − ' + a + ')² = x² − ' + (2 * a) + 'x + ' + (a * a) + '.');
      }
      if (level === 'hard') {
        const a = randInt(2, 4), b = randInt(2, 4), c = randInt(2, 4), d = randInt(2, 4);
        const xc = a * c, xc2 = a * d + b * c, cst = b * d;
        return numQ('What is (' + a + 'x + ' + b + ')(' + c + 'x + ' + d + ')?',
          xc + 'x² + ' + xc2 + 'x + ' + cst,
          [xc + 'x² + ' + (b * d) + 'x + ' + xc2, xc + 'x² + ' + (a + c) + 'x + ' + cst, (a + c) + 'x² + ' + xc2 + 'x + ' + cst, xc + 'x² + ' + xc2 + 'x − ' + cst, cst + 'x² + ' + xc2 + 'x + ' + xc],
          'FOIL: ' + xc + 'x² + ' + (a * d) + 'x + ' + (b * c) + 'x + ' + cst + ' = ' + xc + 'x² + ' + xc2 + 'x + ' + cst + '.');
      }
    },

    'Factoring Quadratics': level => {
      if (level === 'easy') {
        const a = randInt(1, 4), b = randInt(2, 6);
        const sum = a + b, prod = a * b;
        return numQ('Which is the factorization of x² + ' + sum + 'x + ' + prod + '?',
          '(x + ' + a + ')(x + ' + b + ')',
          ['(x − ' + a + ')(x − ' + b + ')', '(x + ' + prod + ')(x + 1)', '(x + ' + sum + ')(x + 1)', '(x + ' + a + ')(x − ' + b + ')', '(x + ' + (a * b) + ')(x + 1)'],
          'Find two numbers that multiply to ' + prod + ' and add to ' + sum + ': ' + a + ' and ' + b + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), b = randInt(2, 5);
        return numQ('Which is the factorization of x² − ' + (b * b) + '?',
          '(x − ' + b + ')(x + ' + b + ')',
          ['(x − ' + b + ')²', '(x + ' + b + ')²', '(x − ' + b + ')(x − ' + b + ')', '(x − ' + (b * b) + ')(x + 1)', '(x + ' + b + ')(x + ' + b + ')'],
          'Difference of squares: a² − b² = (a − b)(a + b), so x² − ' + (b * b) + ' = (x − ' + b + ')(x + ' + b + ').');
      }
      if (level === 'hard') {
        const a = randInt(2, 4), b = randInt(2, 4);
        const sum = a + b, prod = a * b;
        return numQ('What are the solutions of x² − ' + sum + 'x + ' + prod + ' = 0?',
          'x = ' + a + ' and x = ' + b,
          ['x = −' + a + ' and x = −' + b, 'x = ' + sum + ' and x = ' + prod, 'x = 0 and x = ' + prod, 'x = ' + prod + ' and x = 1', 'x = ' + sum + ' only'],
          'Factor: (x − ' + a + ')(x − ' + b + ') = 0, so x = ' + a + ' or x = ' + b + '.');
      }
    },

    'Solving Quadratic Equations': level => {
      if (level === 'easy') {
        const a = randInt(2, 6);
        return numQ('If x² = ' + (a * a) + ', what is the positive value of x?', a,
          [a + 1, a - 1, a * a, Math.sqrt(a), 2 * a],
          'Taking the positive square root: x = √' + (a * a) + ' = ' + a + '.');
      }
      if (level === 'medium') {
        const a = randInt(1, 3), b = randInt(2, 5);
        const sum = a + b, prod = a * b;
        return numQ('What are the solutions of x² + ' + sum + 'x + ' + prod + ' = 0?',
          'x = −' + a + ' and x = −' + b,
          ['x = ' + a + ' and x = ' + b, 'x = ' + sum + ' and x = ' + prod, 'x = −' + sum + ' and x = −' + prod, 'x = −' + a + ' and x = ' + b, 'x = −1 and x = ' + prod],
          'Factor: (x + ' + a + ')(x + ' + b + ') = 0, so x = −' + a + ' or x = −' + b + '.');
      }
      if (level === 'hard') {
        const a = randInt(1, 4), b = randInt(1, 4);
        const disc = b * b + 4 * a;
        return numQ('For x² − ' + b + 'x − ' + a + ' = 0, what is the discriminant?',
          disc, [disc + 1, disc - 1, b * b - 4 * a, b * b, 4 * a],
          'Discriminant = b² − 4ac = (' + b + ')² − 4(1)(−' + a + ') = ' + disc + '.');
      }
    },

    'Word Problems Setup': [
      level => {
        if (level === 'easy') {
          return strQ('A number is tripled and then 5 is added. Which expression represents the result?',
            '3x + 5', ['3(x + 5)', 'x + 3 + 5', '3x − 5', '5x + 3', 'x/3 + 5'],
            '"Tripled" means 3x; "then 5 is added" gives 3x + 5.');
        }
        if (level === 'medium') {
          const x = randInt(3, 8);
          const total = 3 * x + 3;
          return numQ('The sum of three consecutive integers is ' + total + '. What is the smallest?', x,
            [x + 1, x - 1, x + 2, total / 3, total],
            'Let the integers be n, n+1, n+2. Then 3n + 3 = ' + total + ', so n = ' + x + '.');
        }
        const r = randInt(40, 60), t = randInt(2, 4);
        return numQ('A train travels at ' + r + ' mph for ' + t + ' hours. How far does it travel?', r * t,
          [r + t, r * t + 10, r * t - 10, r / t, (r + 10) * t],
          'Distance = rate × time = ' + r + ' × ' + t + ' = ' + (r * t) + ' miles.');
      },
      level => {
        if (level === 'easy') {
          return strQ('A number is doubled and then 3 is subtracted. Which expression represents the result?',
            '2x − 3', ['2(x − 3)', 'x + 2 − 3', '2x + 3', '3x − 2', 'x/2 − 3'],
            '"Doubled" means 2x; "then 3 is subtracted" gives 2x − 3.');
        }
        if (level === 'medium') {
          const a = randInt(1, 3);
          const target = 4 * a + 4;
          return numQ('The sum of two consecutive even integers is ' + target + '. What is the smaller one?', 2 * a,
            [2 * a + 1, 2 * a - 1, 2 * a + 2, a, target / 2],
            'Let them be n and n + 2. Then 2n + 2 = ' + target + ', so n = ' + (2 * a) + '.');
        }
        const pct = pick([20, 25, 50]);
        const finalV = pick([120, 150, 200]);
        const orig = finalV / (1 + pct / 100);
        return numQ('A price is increased by ' + pct + '% to $' + finalV + '. What was the original price?',
          orig, [orig + 1, orig - 1, finalV - pct, finalV * (1 - pct / 100), finalV / pct],
          'Original × 1.' + pct + ' = ' + finalV + ', so original = ' + finalV + ' ÷ 1.' + pct + ' = $' + orig + '.');
      },
      level => {
        if (level === 'easy') {
          return strQ('A number is divided by 4 and then 2 is added. Which expression represents the result?',
            'x/4 + 2', ['4/x + 2', 'x/4 − 2', 'x/(4 + 2)', '4x + 2', '2x + 4'],
            '"Divided by 4" is x/4; "then 2 is added" gives x/4 + 2.');
        }
        if (level === 'medium') {
          const x = randInt(2, 6);
          return numQ('Five more than twice a number is ' + (2 * x + 5) + '. What is the number?', x,
            [x + 1, x - 1, 2 * x, x + 5, (2 * x + 5) / 2],
            '"Twice a number" is 2n; "five more" gives 2n + 5 = ' + (2 * x + 5) + ', so n = ' + x + '.');
        }
        const k = pick([2, 3]);
        const now = pick([10, 12, 14]);
        return numQ('Sam is ' + k + ' times as old as Alex. In 2 years Sam will be ' + (k * now + 2) + '. How old is Alex now?',
          now, [now + 1, now - 1, k * now, now / k, now + 2],
          'Sam now: ' + (k * now) + '. In 2 years: ' + (k * now) + ' + 2 = ' + (k * now + 2) + '. Alex = ' + now + '.');
      }
    ],

    // ── Algebra / Intermediate Algebra ────────────────
    'Systems of Equations': level => {
      if (level === 'easy') {
        let a = randInt(2, 5), b = randInt(2, 5), c = randInt(2, 5), d = randInt(2, 5);
        const x = randInt(2, 6), y = randInt(2, 6);
        const eq1 = a * x + b * y, eq2 = c * x - d * y;
        return strQ('If ' + a + 'x + ' + b + 'y = ' + eq1 + ' and ' + c + 'x − ' + d + 'y = ' + eq2 + ', what is the value of x?',
          String(x), [String(x + 1), String(x - 1), String(y), String(x * y), String(x + y)],
          'Eliminate y: add/subtract the equations to solve, giving x = ' + x + '.');
      }
      if (level === 'medium') {
        const x = randInt(2, 5), y = randInt(3, 7);
        return numQ('If x + y = ' + (x + y) + ' and x − y = ' + (x - y) + ', what is the value of x?', x,
          [x + 1, x - 1, y, x + y, x * y],
          'Adding the equations: 2x = ' + (2 * x) + ', so x = ' + x + '.');
      }
      if (level === 'hard') {
        const x = randInt(1, 4), y = randInt(1, 4);
        const eq1 = '2x + ' + (y) + 'y = ' + (2 * x + y);
        const eq2 = 'x − y = ' + (x - y);
        return numQ('The system ' + eq1 + ' and ' + eq2 + ' has how many solutions?',
          'Exactly one', ['No solutions', 'Infinitely many', 'Two', 'Three', 'Zero or more'],
          'The lines have different slopes, so they intersect at exactly one point (' + x + ', ' + y + ').');
      }
    },

    'Absolute Value Equations': level => {
      if (level === 'easy') {
        const a = randInt(3, 8);
        return strQ('What is one solution to |x| = ' + a + '?', String(a),
          [String(a + 1), String(a - 1), String(2 * a), String(a / 2), '0'],
          '|x| = ' + a + ' means x = ' + a + ' or x = −' + a + '.');
      }
      if (level === 'medium') {
        const x = randInt(2, 6), a = randInt(1, 3), b = randInt(2, 7);
        const rhs = Math.abs(a * x + b);
        return strQ('Which is a solution of |' + a + 'x + ' + b + '| = ' + rhs + '?', String(x),
          [String(x + 1), String(x - 1), String(-x), String(b), String(a)],
          'Solve ' + a + 'x + ' + b + ' = ' + rhs + ' → x = ' + x + ' (the other solution is x = ' + ((-rhs - b) / a) + ').');
      }
      if (level === 'hard') {
        const a = randInt(2, 4), c = randInt(6, 12);
        return strQ('If |' + a + 'x| < ' + c + ', which of the following is a possible value of x?',
          String(randInt(1, Math.floor(c / a) - 1)),
          [String(c), String(c + 1), String(Math.floor(c / a) + 1), String(c / a + 1), String(-c)],
          'The solution is −' + (c / a) + ' < x < ' + (c / a) + '.');
      }
    },

    'Rational Expressions': [
      level => {
        if (level === 'easy') {
          const a = randInt(2, 5);
          return strQ('Which is the simplified form of (x² − ' + (a * a) + ')/(x − ' + a + ')?',
            'x + ' + a, ['x − ' + a, 'x² + ' + a, 'x + ' + (a * a), 'x − ' + (a * a), 'x² − ' + a],
            'Factor the numerator: (x − ' + a + ')(x + ' + a + '), then cancel (x − ' + a + ') → x + ' + a + '.');
        }
        if (level === 'medium') {
          const a = randInt(2, 6);
          return strQ('For what value of x is the expression 3/(x − ' + a + ') undefined?',
            'x = ' + a, ['x = −' + a, 'x = 0', 'x = 3', 'x = ' + (a + 1), 'x = 1'],
            'The expression is undefined when the denominator is 0: x − ' + a + ' = 0 → x = ' + a + '.');
        }
        const a = randInt(1, 3), b = randInt(2, 5);
        const x = a + b;
        return numQ('If 2/x = ' + a + '/' + (a * x) + ', what is x?', x,
          [x + 1, x - 1, a, b, a * b],
          'Cross-multiply: 2·' + (a * x) + ' = ' + a + '·x → ' + (2 * a * x) + ' = ' + a + 'x, so x = ' + x + '.');
      },
      level => {
        if (level === 'easy') {
          const a = randInt(2, 5);
          return strQ('Which is the simplified form of (x² − ' + (a * a) + ')/(x + ' + a + ')?',
            'x − ' + a, ['x + ' + a, 'x² − ' + a, 'x − ' + (a * a), 'x + ' + (a * a), 'x² + ' + a],
            'Factor: (x − ' + a + ')(x + ' + a + '), cancel (x + ' + a + ') → x − ' + a + '.');
        }
        if (level === 'medium') {
          const a = randInt(2, 5), b = randInt(2, 5);
          return strQ('For what values of x is the expression x/((x − ' + a + ')(x − ' + b + ')) undefined?',
            'x = ' + a + ' or x = ' + b,
            ['x = 0', 'x = −' + a + ' or x = −' + b, 'x = ' + a + ' only', 'x = ' + b + ' only', 'x = ' + a + ' and x = ' + b + ' and x = 0'],
            'The denominator is zero at each factor: x = ' + a + ' and x = ' + b + '.');
        }
        const a = randInt(2, 4), b = randInt(3, 6);
        return numQ('If 1/(x − ' + a + ') = ' + b + ', what is x?', a + 1 / b,
          [a + b, a - b, a + 1 / b + 1, a + 1 / b - 1, a * b],
          'Reciprocals: x − ' + a + ' = 1/' + b + ', so x = ' + a + ' + 1/' + b + ' = ' + (a + 1 / b) + '.');
      },
      level => {
        if (level === 'easy') {
          const a = randInt(2, 5);
          return strQ('Which is the simplified form of (x² − ' + (a * a) + ')/x for x ≠ 0?',
            'x − ' + a + '²/x', ['x − ' + a + 'x', 'x − ' + (a * a), 'x + ' + a + '²/x', '1 − ' + a, 'x² − ' + a],
            'Split the fraction: x²/x − ' + (a * a) + '/x = x − ' + (a * a) + '/x.');
        }
        if (level === 'medium') {
          const a = randInt(2, 5);
          return strQ('What is the value of (x + ' + a + ')/(x − ' + a + ') when x = ' + (a + 1) + '?',
            (2 * a + 1), [(2 * a + 2), (2 * a), a, a + 1, 2 * a + 3],
            'Plug in: (' + (a + 1) + ' + ' + a + ')/(' + (a + 1) + ' − ' + a + ') = ' + (2 * a + 1) + '/1 = ' + (2 * a + 1) + '.');
        }
        const a = randInt(2, 4);
        return strQ('Which value makes the rational expression (x² − ' + (a * a) + ')/(x − ' + a + ') undefined (before simplifying)?',
          String(a), [String(-a), '0', String(a - 1), String(a + 1), String(a * a)],
          'Even though it simplifies to x + ' + a + ', the original expression is undefined at x = ' + a + '.');
      }
    ],

    'Exponents & Radicals': level => {
      if (level === 'easy') {
        const a = randInt(2, 4), b = randInt(2, 4), m = randInt(2, 3), n = randInt(1, 3);
        return numQ('What is x^' + m + ' × x^' + n + '?',
          'x^' + (m + n), ['x^' + (m * n), 'x^' + (m - n), 'x^' + (m + n + 1), 'x^' + (m + n - 1), 'x^(2' + m + ')'],
          'When multiplying, add exponents: x^' + m + ' × x^' + n + ' = x^' + (m + n) + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), e = randInt(2, 3);
        return numQ('What is the value of ' + a + '^(2/' + e + ')?',
          Math.pow(a, 2 / e),
          [Math.pow(a, e), a * 2, a * e, Math.pow(a, 1 / e), a],
          'The denominator is the root: ' + a + '^(1/' + e + ') = ' + Math.pow(a, 1 / e) + ', squared = ' + Math.round(Math.pow(a, 2 / e) * 100) / 100 + '.');
      }
      if (level === 'hard') {
        const a = randInt(2, 4);
        return numQ('What is √' + (a * a * 2) + ' in simplified form?',
          a + '√2', [a * 2, a + '√' + (a * a), '√' + (a * a) + '√2', a * a + '√2', '2√' + (a * a)],
          '√' + (a * a * 2) + ' = √' + (a * a) + ' · √2 = ' + a + '√2.');
      }
    },

    'Logarithms': level => {
      if (level === 'easy') {
        const b = randInt(2, 5), e = randInt(2, 4);
        return numQ('What is log_' + b + '(' + Math.pow(b, e) + ')?', e,
          [e + 1, e - 1, b, Math.pow(b, e), 1],
          'log_' + b + '(x) = y means ' + b + '^y = x, and ' + b + '^' + e + ' = ' + Math.pow(b, e) + ', so y = ' + e + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), b = randInt(2, 5);
        return numQ('What is log_' + a + '(' + (a * b) + ') + log_' + a + '(b)?',
          2 * (Math.log(b) / Math.log(a)) !== undefined ? 2 : 2,
          [1, 0, a + b, Math.log(b) / Math.log(a)],
          'This uses log rules; a cleaner version: log_b(xy) = log_b(x) + log_b(y).');
      }
      if (level === 'hard') {
        const b = randInt(2, 4), e = randInt(2, 4);
        return numQ('If log_' + b + '(x) = ' + e + ', what is x?', Math.pow(b, e),
          [e * b, b * e, Math.pow(b, e) + 1, Math.pow(b, e) - 1, e + b],
          'Rewrite in exponential form: x = ' + b + '^' + e + ' = ' + Math.pow(b, e) + '.');
      }
    },

    'Complex Numbers': level => {
      if (level === 'easy') {
        const n = randInt(1, 4);
        const vals = { 1: 'i', 2: '−1', 3: '−i', 4: '1' };
        return strQ('What is i^' + n + '?', vals[n],
          [vals[(n % 4) + 1], vals[((n + 1) % 4) + 1], vals[((n + 2) % 4) + 1], 'i²', '1'],
          'The powers of i cycle: i, −1, −i, 1. i^' + n + ' = ' + vals[n] + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 4), b = randInt(2, 4), c = randInt(2, 4);
        return numQ('What is (' + a + ' + ' + b + 'i) + (' + c + ' − ' + b + 'i)?', a + c,
          [a + c + b, a + c - b, a + c + 'i', b + c, a + b],
          'Add real parts: ' + a + ' + ' + c + ' = ' + (a + c) + '. The imaginary parts ' + b + 'i and −' + b + 'i cancel.');
      }
      if (level === 'hard') {
        const a = randInt(2, 3), b = randInt(2, 3);
        const ans = a * a + b * b;
        return numQ('What is the product (' + a + ' + ' + b + 'i)(' + a + ' − ' + b + 'i)?', ans,
          [ans - 1, ans + 1, a * a, b * b, a * a - b * b],
          'This is a difference of squares: ' + a + '² + ' + b + '² = ' + ans + ' (the i terms cancel).');
      }
    },

    'Sequences & Series': level => {
      if (level === 'easy') {
        const a1 = randInt(2, 8), d = randInt(2, 5);
        const terms = [a1, a1 + d, a1 + 2 * d, a1 + 3 * d];
        return numQ('What is the next term in the arithmetic sequence ' + terms.join(', ') + ', …?',
          a1 + 4 * d, [a1 + 3 * d + 1, a1 + 4 * d + d, a1 + 3 * d, a1 + 5 * d, a1 + 2 * d],
          'The common difference is ' + d + ', so the next term is ' + (a1 + 3 * d) + ' + ' + d + ' = ' + (a1 + 4 * d) + '.');
      }
      if (level === 'medium') {
        const a1 = randInt(2, 5), r = randInt(2, 3), n = randInt(4, 5);
        return numQ('What is the ' + n + 'th term of the geometric sequence ' + a1 + ', ' + (a1 * r) + ', ' + (a1 * r * r) + ', …?',
          a1 * Math.pow(r, n - 1),
          [a1 * Math.pow(r, n), a1 * r * n, a1 + (n - 1) * (a1 * r - a1), a1 * Math.pow(r, n - 2), a1 * r * (n - 1)],
          'nth term = a₁·r^(n−1) = ' + a1 + ' × ' + r + '^' + (n - 1) + ' = ' + (a1 * Math.pow(r, n - 1)) + '.');
      }
      if (level === 'hard') {
        const a1 = randInt(3, 7), d = randInt(2, 4), n = randInt(4, 6);
        const an = a1 + (n - 1) * d;
        return numQ('What is the sum of the first ' + n + ' terms of the arithmetic sequence starting ' + a1 + ', ' + (a1 + d) + ', …?',
          (n / 2) * (a1 + an),
          [(n / 2) * (a1 + an) + d, n * a1, (n / 2) * (2 * a1 + (n - 1) * d) + 1, n * an, (n / 2) * (a1 + an) - d],
          'Sum = n/2 × (a₁ + aₙ) = ' + n + '/2 × (' + a1 + ' + ' + an + ') = ' + (n / 2) * (a1 + an) + '.');
      }
    },

    // ── Geometry / Coordinate Geometry ────────────────
    'Slope of a Line': level => {
      if (level === 'easy') {
        const x1 = randInt(1, 5), y1 = randInt(1, 8), dx = randInt(2, 5), dy = randInt(2, 6);
        const x2 = x1 + dx, y2 = y1 + dy, m = dy / dx, b = y1 - m * x1;
        const figHTML = fig({
          type: 'plane',
          xMin: Math.max(-1, Math.min(x1, x2) - 2), xMax: Math.max(x1, x2) + 2,
          yMin: Math.max(-1, Math.min(y1, y2) - 2), yMax: Math.max(y1, y2) + 2,
          line: { m, b }, pts: [[x1, y1], [x2, y2]]
        });
        return numQ(figHTML + 'What is the slope of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ')?',
          dy / dx, [dx / dy, -dy / dx, dy + dx, dy - dx, (dy + dx) / dx],
          'Slope = (y₂ − y₁)/(x₂ − x₁) = ' + dy + '/' + dx + ' = ' + (dy / dx) + '.');
      }
      if (level === 'medium') {
        const m = randInt(2, 4);
        const figHTML = fig({ type: 'plane', line: { m, b: 0 }, xMin: -5, xMax: 5, yMin: -5, yMax: 5 });
        return strQ(figHTML + 'A line has slope ' + m + '. What is the slope of a line perpendicular to it?',
          '−1/' + m, ['1/' + m, String(-m), String(m), '−' + m + '/1', '1'],
          'Perpendicular slopes are negative reciprocals: −1/' + m + '.');
      }
      if (level === 'hard') {
        const m = randInt(2, 4), b = randInt(1, 5);
        const figHTML = fig({ type: 'plane', line: { m: -3 / b, b: (3 + b) / b }, xMin: -5, xMax: 5, yMin: -5, yMax: 5 });
        return numQ(figHTML + 'What is the slope of the line 3x + ' + (b) + 'y = ' + (3 + b) + '?',
          -3 / b, [3 / b, -b / 3, b / 3, -3, 3],
          'From Ax + By = C, slope = −A/B = −3/' + b + '.');
      }
    },

    'Equations of Lines': level => {
      if (level === 'easy') {
        const m = randInt(2, 4), b = randInt(1, 6);
        const strHTML = fig({ type: 'plane', line: { m, b }, xMin: -5, xMax: 5, yMin: -5, yMax: 6 });
        return strQ(strHTML + 'Which equation has slope ' + m + ' and y-intercept ' + b + '?',
          'y = ' + m + 'x + ' + b,
          ['y = ' + b + 'x + ' + m, 'y = ' + m + 'x − ' + b, 'y = −' + m + 'x + ' + b, 'y = x + ' + (m + b), 'y = ' + m + 'x'],
          'Slope-intercept form is y = mx + b, giving y = ' + m + 'x + ' + b + '.');
      }
      if (level === 'medium') {
        const x1 = randInt(1, 4), y1 = randInt(1, 6), m = randInt(2, 3);
        const b = y1 - m * x1;
        return strQ('What is the equation of the line with slope ' + m + ' through (' + x1 + ', ' + y1 + ')?',
          'y = ' + m + 'x + ' + b,
          ['y = ' + m + 'x − ' + b, 'y = ' + b + 'x + ' + m, 'y = ' + m + 'x', 'y = −' + m + 'x + ' + b, 'y = ' + m + 'x + ' + (b + 1)],
          'Using y = mx + b: ' + y1 + ' = ' + m + '(' + x1 + ') + b → b = ' + b + '.');
      }
      if (level === 'hard') {
        const m = randInt(2, 3), b1 = randInt(2, 4), x1 = randInt(1, 4);
        const b = b1;
        return strQ('What is the equation of the line parallel to y = ' + m + 'x + ' + b1 + ' through (' + x1 + ', ' + (m * x1 + b) + ')?',
          'y = ' + m + 'x + ' + b,
          ['y = ' + m + 'x + ' + (b + 1), 'y = −' + m + 'x + ' + b, 'y = ' + m + 'x − ' + b, 'y = x + ' + b, 'y = ' + m + 'x'],
          'Parallel lines share slope ' + m + '. Plug in the point to find b = ' + b + '.');
      }
    },

    'Distance & Midpoint Formulas': level => {
      if (level === 'easy') {
        const x1 = randInt(2, 6), x2 = x1 + randInt(2, 6), y1 = randInt(2, 6), y2 = y1 + randInt(2, 6);
        const midFig = fig({ type: 'plane', xMin: 0, xMax: 10, yMin: 0, yMax: 10, pts: [[x1, y1], [x2, y2]], line: { m: (y2 - y1) / (x2 - x1), b: y1 - (y2 - y1) / (x2 - x1) * x1 } });
        return numQ(midFig + 'What is the midpoint of (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ')?',
          '(' + (x1 + x2) / 2 + ', ' + (y1 + y2) / 2 + ')',
          ['(' + x1 + ', ' + y1 + ')', '(' + (x1 + x2) + ', ' + (y1 + y2) + ')', '(' + (x2 - x1) / 2 + ', ' + (y2 - y1) / 2 + ')', '(' + x2 + ', ' + y2 + ')', '(' + (x1 + y1) / 2 + ', ' + (x2 + y2) / 2 + ')'],
          'Midpoint = average of coordinates: ((' + x1 + ' + ' + x2 + ')/2, (' + y1 + ' + ' + y2 + ')/2) = (' + (x1 + x2) / 2 + ', ' + (y1 + y2) / 2 + ').');
      }
      if (level === 'medium') {
        const a = randInt(3, 6), b = randInt(4, 8);
        const hyp = Math.sqrt(a * a + b * b);
        const distFig = fig({ type: 'plane', xMin: 0, xMax: 8, yMin: 0, yMax: 9 });
        return numQ(distFig + 'What is the distance between (0, 0) and (' + a + ', ' + b + ')?',
          hyp, [a + b, a * b, hyp + 1, hyp - 1, Math.sqrt(Math.abs(a - b))],
          'Distance = √(' + a + '² + ' + b + '²) = √' + (a * a + b * b) + ' = ' + hyp + '.');
      }
      if (level === 'hard') {
        const mx = randInt(3, 7), my = randInt(3, 7), x1 = randInt(1, 3), y1 = randInt(1, 3);
        return numQ('The midpoint of a segment is (' + mx + ', ' + my + ') and one endpoint is (' + x1 + ', ' + y1 + '). What is the other endpoint?',
          '(' + (2 * mx - x1) + ', ' + (2 * my - y1) + ')',
          ['(' + (mx + x1) + ', ' + (my + y1) + ')', '(' + (mx - x1) + ', ' + (my - y1) + ')', '(' + (2 * x1 - mx) + ', ' + (2 * y1 - my) + ')', '(' + mx + ', ' + my + ')', '(' + (x1 - mx) + ', ' + (y1 - my) + ')'],
          'Other endpoint = (2·' + mx + ' − ' + x1 + ', 2·' + my + ' − ' + y1 + ') = (' + (2 * mx - x1) + ', ' + (2 * my - y1) + ').');
      }
    },

    'Circles in the Coordinate Plane': level => {
      if (level === 'easy') {
        const h = randInt(1, 5), k = randInt(1, 5), r = randInt(2, 5);
        const cFig = fig({ type: 'plane', xMin: 0, xMax: 7, yMin: 0, yMax: 7, pts: [[h, k]] });
        return strQ(cFig + 'What is the center of the circle (x − ' + h + ')² + (y − ' + k + ')² = ' + (r * r) + '?',
          '(' + h + ', ' + k + ')',
          ['(−' + h + ', −' + k + ')', '(' + k + ', ' + h + ')', '(' + h + ', −' + k + ')', '(−' + h + ', ' + k + ')', '(' + r + ', ' + r + ')'],
          'Center is (h, k) with the signs flipped from the equation: (' + h + ', ' + k + ').');
      }
      if (level === 'medium') {
        const h = randInt(1, 4), k = randInt(1, 4), r = randInt(2, 5);
        const rFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return strQ(rFig + 'What is the radius of the circle (x − ' + h + ')² + (y + ' + k + ')² = ' + (r * r) + '?',
          String(r), [String(r + 1), String(r - 1), String(r * r), String(k), String(h)],
          'r² = ' + (r * r) + ', so r = ' + r + '.');
      }
      if (level === 'hard') {
        const h = randInt(2, 4), k = randInt(1, 3), r = randInt(2, 4);
        const hFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return numQ(hFig + 'A circle has center (' + h + ', ' + k + ') and radius ' + r + '. What is its equation?',
          '(x − ' + h + ')² + (y − ' + k + ')² = ' + (r * r),
          ['(x + ' + h + ')² + (y + ' + k + ')² = ' + (r * r), '(x − ' + h + ')² + (y + ' + k + ')² = ' + r, '(x − ' + h + ')² + (y − ' + k + ')² = ' + r, '(x + ' + h + ')² + (y − ' + k + ')² = ' + (r * r), 'x² + y² = ' + (r * r)],
          'Standard form: (x − h)² + (y − k)² = r² → (x − ' + h + ')² + (y − ' + k + ')² = ' + (r * r) + '.');
      }
    },

    'Graphing Inequalities': level => {
      if (level === 'easy') {
        const m = randInt(1, 3), b = randInt(1, 4);
        const gFig = fig({ type: 'plane', xMin: -4, xMax: 4, yMin: -4, yMax: 6, line: { m, b, dash: true }, shade: { m, b, above: true } });
        return strQ(gFig + 'For y > ' + m + 'x + ' + b + ', which side of the boundary line is shaded?',
          'Above the line', ['Below the line', 'Left of the line', 'Right of the line', 'Both sides', 'Neither'],
          'For y > mx + b, shade above the line.');
      }
      if (level === 'medium') {
        const m = randInt(2, 4), b = randInt(2, 5);
        const gFig = fig({ type: 'plane', xMin: -4, xMax: 4, yMin: -4, yMax: 6, line: { m, b, dash: true }, shade: { m, b, above: false } });
        return strQ('Which inequality describes the graph shaded below a dashed line y = ' + m + 'x + ' + b + '?',
          'y < ' + m + 'x + ' + b,
          ['y > ' + m + 'x + ' + b, 'y ≤ ' + m + 'x + ' + b, 'y ≥ ' + m + 'x + ' + b, 'y = ' + m + 'x + ' + b, 'y < −' + m + 'x + ' + b],
          'Below the line is y < mx + b; dashed means strict (<).');
      }
      if (level === 'hard') {
        const m = randInt(1, 2), b = randInt(2, 4), m2 = randInt(1, 2), b2 = randInt(1, 3);
        const gFig = fig({ type: 'plane', xMin: -4, xMax: 4, yMin: -1, yMax: 7, line: { m, b, dash: true } });
        return strQ(gFig + 'A point lies in the region where y > ' + m + 'x + ' + b + ' AND y < ' + m2 + 'x + ' + b2 + '. Where is it?',
          'In the overlap of the two shaded regions',
          ['Below both lines', 'Above both lines', 'On the boundary', 'Nowhere', 'In either region'],
          'A system of inequalities is satisfied in the overlapping (intersection) region.');
      }
    },

    // ── Geometry / Plane Geometry ─────────────────────
    'Angles & Parallel Lines': level => {
      if (level === 'easy') {
        const a = randInt(30, 80);
        return numQ('Two angles are vertical. One measures ' + a + '°. What is the other?', a,
          [180 - a, a + 10, a - 10, 90, 180],
          'Vertical angles are always equal: ' + a + '°.');
      }
      if (level === 'medium') {
        const a = randInt(40, 130);
        return numQ('Two angles form a linear pair (supplementary). One measures ' + a + '°. What is the other?', 180 - a,
          [a, a + 10, a - 10, 90 - a, 360 - a],
          'Supplementary angles sum to 180°: 180 − ' + a + ' = ' + (180 - a) + '°.');
      }
      if (level === 'hard') {
        const a = randInt(3, 6);
        return numQ('Two parallel lines are cut by a transversal. Alternate interior angles are congruent and one is ' + (10 * a) + '°. What is its same-side interior partner?',
          180 - 10 * a, [10 * a, 90, 10 * a + 10, 180 - 10 * a + 10, 180 - 10 * a - 10],
          'Same-side interior angles are supplementary: 180 − ' + (10 * a) + ' = ' + (180 - 10 * a) + '°.');
      }
    },

    'Triangles': level => {
      if (level === 'easy') {
        const a = randInt(30, 80), b = randInt(30, 90 - a);
        return numQ('A triangle has angles ' + a + '° and ' + b + '°. What is the third angle?', 180 - a - b,
          [a + b, 180 - a + b, 90, 180 - a - b + 10, 180 - a - b - 10],
          'Angles sum to 180°: 180 − ' + a + ' − ' + b + ' = ' + (180 - a - b) + '°.');
      }
      if (level === 'medium') {
        const a = pick([3, 5, 6, 8, 9]), b = pick([4, 12, 8, 15, 12]);
        const hyp = Math.sqrt(a * a + b * b);
        const triFig = fig({ type: 'shape', shape: 'right', labels: { a: String(a), b: String(b), h: String(Math.round(hyp * 100) / 100) } });
        return numQ(triFig + 'A right triangle has legs ' + a + ' and ' + b + '. What is the hypotenuse?', hyp,
          [a + b, a * b, hyp + 1, hyp - 1, Math.sqrt(a * a - b * b)],
          'Pythagorean theorem: c = √(' + a + '² + ' + b + '²) = √' + (a * a + b * b) + ' = ' + (Math.round(hyp * 100) / 100) + '.');
      }
      if (level === 'hard') {
        const s = randInt(3, 6);
        const triFig = fig({ type: 'shape', shape: 'right', labels: { a: String(s), h: String(2 * s), angle: '30°' } });
        return numQ(triFig + 'In a 30-60-90 triangle, the short leg is ' + s + '. What is the hypotenuse?', 2 * s,
          [s * Math.sqrt(3), s, s * 2 * Math.sqrt(3), s * 4, s * Math.sqrt(2)],
          'In a 30-60-90 triangle the hypotenuse is twice the short leg: 2 × ' + s + ' = ' + (2 * s) + '.');
      }
    },

    'Similar & Congruent Triangles': level => {
      if (level === 'easy') {
        const a = randInt(2, 5), k = randInt(2, 4);
        return numQ('Triangle A is similar to triangle B with scale factor ' + k + '. If a side of A is ' + a + ', how long is the corresponding side of B?',
          a * k, [a + k, a * k + 1, a * k - 1, a / k, k],
          'Multiply by the scale factor: ' + a + ' × ' + k + ' = ' + (a * k) + '.');
      }
      if (level === 'medium') {
        const a = randInt(3, 6), b = randInt(4, 8), k = randInt(2, 3);
        return numQ('Triangle A has sides ' + a + ' and ' + b + '. Triangle B is similar with scale factor ' + k + '. What is the corresponding side for ' + a + ' in B?',
          a * k, [b * k, a + k, a * k - 1, a * k + 1, a],
          'Corresponding sides scale by ' + k + ': ' + a + ' × ' + k + ' = ' + (a * k) + '.');
      }
      if (level === 'hard') {
        const s = randInt(2, 5), k = randInt(2, 3);
        return numQ('Two similar triangles have a scale factor of ' + k + '. The smaller has area ' + (s * s) + '. What is the area of the larger?',
          (s * s) * k * k, [(s * s) * k, s * s + k * k, s * s * 2 * k, (s * s) * k * k + 1, s * s],
          'Areas scale by the square of the scale factor: ' + (s * s) + ' × ' + (k * k) + ' = ' + ((s * s) * k * k) + '.');
      }
    },

    'Quadrilaterals & Polygons': [
      level => {
        if (level === 'easy') {
          const n = randInt(5, 8);
          return numQ('What is the sum of the interior angles of a ' + n + '-sided polygon?', (n - 2) * 180,
            [n * 180, (n - 2) * 90, (n + 2) * 180, n * 90, 360],
            'Sum = (n − 2) × 180° = (' + n + ' − 2) × 180 = ' + ((n - 2) * 180) + '°.');
        }
        if (level === 'medium') {
          const n = randInt(5, 8);
          return numQ('What is each interior angle of a regular ' + n + '-gon?', ((n - 2) * 180) / n,
            [360 / n, (n - 2) * 180, ((n - 2) * 180) / n + 1, ((n - 2) * 180) / n - 1, n * 90],
            'Each angle = (n − 2) × 180 ÷ n = ' + ((n - 2) * 180 / n) + '°.');
        }
        const n = randInt(5, 8);
        return numQ('A regular polygon has interior angles summing to ' + ((n - 2) * 180) + '°. How many sides does it have?',
          n, [n + 1, n - 1, n + 2, n / 2, 360 / n],
          'Sum = (n − 2) × 180 = ' + ((n - 2) * 180) + ', so n − 2 = ' + (n - 2) + ' and n = ' + n + '.');
      },
      level => {
        if (level === 'easy') {
          return numQ('What is the sum of the exterior angles of any convex polygon?', 360,
            [180, 540, 720, 90, 180 * 4],
            'Exterior angles of any convex polygon always sum to 360°.');
        }
        if (level === 'medium') {
          const n = randInt(5, 8);
          return numQ('What is each exterior angle of a regular ' + n + '-gon?', 360 / n,
            [(n - 2) * 180 / n, 360 / (n + 1), 360 / n + 10, 360 / n - 10, 180 - 360 / n],
            'Each exterior angle = 360/n = 360/' + n + ' = ' + (360 / n) + '°.');
        }
        const n = randInt(5, 8);
        return numQ('How many diagonals does a ' + n + '-sided polygon have?', n * (n - 3) / 2,
          [n * (n - 3) / 2 + 1, n * (n - 3) / 2 - 1, n * (n - 1) / 2, n * 2, n + 1],
          'Diagonals = n(n − 3)/2 = ' + n + '(' + (n - 3) + ')/2 = ' + (n * (n - 3) / 2) + '.');
      },
      level => {
        if (level === 'easy') {
          const l = randInt(4, 9), w = randInt(2, 5);
          return numQ('A rectangle is ' + l + ' by ' + w + '. What is its area?', l * w,
            [2 * (l + w), l + w, l * w + 1, l * w - 1, l + 2 * w],
            'Area = length × width = ' + l + ' × ' + w + ' = ' + (l * w) + '.');
        }
        if (level === 'medium') {
          const n = randInt(6, 9);
          const angle = (n - 2) * 180 / n;
          return numQ('A regular polygon has each interior angle ' + angle + '°. How many sides does it have?',
            n, [n + 1, n - 1, n + 2, 360 / angle, angle / 60],
            'Each angle = (n − 2)·180/n = ' + angle + ' → n = ' + n + '.');
        }
        const l = randInt(6, 10), w = randInt(3, 6);
        return numQ('A rectangle has length ' + l + ' and perimeter ' + (2 * (l + w)) + '. What is its width?', w,
          [w + 1, w - 1, 2 * w, l, l - w],
          'Perimeter = 2(l + w) = ' + (2 * (l + w)) + ', so l + w = ' + (l + w) + ' and w = ' + (l + w) + ' − ' + l + ' = ' + w + '.');
      }
    ],

    'Circles': level => {
      if (level === 'easy') {
        const r = randInt(3, 7);
        const cFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return numQ(cFig + 'A circle has radius ' + r + '. What is its area?', Math.PI * r * r,
          [2 * Math.PI * r, Math.PI * r, Math.PI * r * r / 2, Math.PI * r * r + 1, Math.PI * r * r - 1],
          'Area = πr² = π × ' + r + '² = ' + Math.PI * r * r + 'π.');
      }
      if (level === 'medium') {
        const r = randInt(3, 6), theta = pick([60, 90, 120, 180]);
        const cFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return numQ(cFig + 'A circle has radius ' + r + '. What is the length of the arc subtended by a ' + theta + '° central angle?',
          (theta / 360) * 2 * Math.PI * r,
          [(theta / 360) * Math.PI * r * r, (theta / 360) * 2 * Math.PI * r + 1, 2 * Math.PI * r, (theta / 360) * Math.PI * r, (360 / theta) * 2 * Math.PI * r],
          'Arc length = (θ/360) × 2πr = (' + theta + '/360) × 2π(' + r + ') = ' + (theta / 360) * 2 * Math.PI * r + 'π.');
      }
      if (level === 'hard') {
        const r = randInt(3, 6), theta = pick([45, 60, 90]);
        const cFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return numQ(cFig + 'A circle has radius ' + r + '. What is the area of the sector with a ' + theta + '° central angle?',
          (theta / 360) * Math.PI * r * r,
          [(theta / 360) * 2 * Math.PI * r, (theta / 360) * Math.PI * r * r + 1, Math.PI * r * r, (theta / 360) * Math.PI * r, (360 - theta) / 360 * Math.PI * r * r],
          'Sector area = (θ/360) × πr² = (' + theta + '/360) × π(' + r + '²) = ' + (theta / 360) * Math.PI * r * r + 'π.');
      }
    },

    '3D Geometry': level => {
      if (level === 'easy') {
        const s = randInt(2, 6);
        const cFig = fig({ type: 'shape', shape: 'cube', labels: { s: String(s) } });
        return numQ(cFig + 'What is the volume of a cube with side length ' + s + '?', s * s * s,
          [6 * s * s, s * s, 3 * s, s * s * s + 1, s * s * s - 1],
          'Volume = s³ = ' + s + '³ = ' + (s * s * s) + '.');
      }
      if (level === 'medium') {
        const r = randInt(2, 5), h = randInt(3, 7);
        const cFig = fig({ type: 'shape', shape: 'prism', labels: { h: String(h) } });
        return numQ(cFig + 'What is the volume of a cylinder with radius ' + r + ' and height ' + h + '?', Math.PI * r * r * h,
          [Math.PI * r * h, 2 * Math.PI * r * h, Math.PI * r * r * h + 1, Math.PI * r * r * h - 1, (1 / 3) * Math.PI * r * r * h],
          'Volume = πr²h = π × ' + r + '² × ' + h + ' = ' + Math.PI * r * r * h + 'π.');
      }
      if (level === 'hard') {
        const r = randInt(2, 4);
        const cFig = fig({ type: 'shape', shape: 'circle', labels: { r: String(r) } });
        return numQ(cFig + 'What is the volume of a sphere with radius ' + r + '?', (4 / 3) * Math.PI * r * r * r,
          [Math.PI * r * r * r, 4 * Math.PI * r * r, 2 * Math.PI * r, (4 / 3) * Math.PI * r * r * r + 1, (4 / 3) * Math.PI * r * r * r - 1],
          'Sphere volume = (4/3)πr³ = (4/3)π × ' + r + '³ = ' + (4 / 3) * Math.PI * r * r * r + 'π.');
      }
    },

    // ── Geometry / Trigonometry ───────────────────────
    'SOH-CAH-TOA': level => {
      if (level === 'easy') {
        const theta = pick([30, 45, 60]), hyp = randInt(6, 12);
        const sinV = { 30: 0.5, 45: Math.SQRT1_2, 60: Math.sqrt(3) / 2 };
        const sFig = fig({ type: 'shape', shape: 'right', labels: { h: String(hyp), angle: theta + '°' } });
        return numQ(sFig + 'In a right triangle, the hypotenuse is ' + hyp + ' and one angle is ' + theta + '°. What is the side opposite that angle?',
          sinV[theta] * hyp,
          [sinV[theta] * hyp + 1, sinV[theta] * hyp - 1, hyp / 2, hyp * 2, Math.sqrt(3) * hyp / 2],
          'sin ' + theta + '° = opposite/hypotenuse, so opposite = ' + hyp + ' × sin ' + theta + '° = ' + (sinV[theta] * hyp) + '.');
      }
      if (level === 'medium') {
        const theta = pick([30, 45, 60]);
        const sFig = fig({ type: 'shape', shape: 'right', labels: { angle: theta + '°' } });
        return strQ(sFig + 'In a right triangle, sin θ = ' + (theta === 30 ? '1/2' : theta === 45 ? '√2/2' : '√3/2') + '. What is θ?',
          theta + '°', [(theta + 15) % 90 + '°', (theta + 30) % 90 + '°', '90°', (theta - 15) + '°', (theta - 30) + '°'],
          'sin ' + theta + '° = ' + (theta === 30 ? '1/2' : theta === 45 ? '√2/2' : '√3/2') + ', so θ = ' + theta + '°.');
      }
      if (level === 'hard') {
        const theta = 30, adj = randInt(4, 8);
        const sFig = fig({ type: 'shape', shape: 'right', labels: { b: String(adj), angle: theta + '°' } });
        return numQ(sFig + 'In a right triangle, cos ' + theta + '° = adjacent/hypotenuse. If the adjacent side is ' + adj + ', what is the hypotenuse?',
          adj / (Math.sqrt(3) / 2),
          [adj * 2, adj / 2, adj * (Math.sqrt(3) / 2), adj + 2, adj * Math.sqrt(3)],
          'cos 30° = √3/2, so hyp = ' + adj + ' ÷ (√3/2) = ' + (adj / (Math.sqrt(3) / 2)) + '.');
      }
    },

    'Reciprocal Trig Functions': level => {
      if (level === 'easy') {
        const b = randInt(2, 4);
        return strQ('If sin θ = ' + b + '/5, what is csc θ?', '5/' + b,
          ['5/1', '1/' + b, '5/(5-' + b + ')', b + '/5', '5'],
          'csc θ = 1/sin θ = 1 ÷ (' + b + '/5) = 5/' + b + '.');
      }
      if (level === 'medium') {
        const a = pick([3, 5, 8]), b = pick([4, 12, 15]);
        const hyp = Math.sqrt(a * a + b * b);
        return numQ('In a right triangle with legs ' + a + ' and ' + b + ', what is sec θ where θ is opposite side ' + a + '?',
          hyp / b, [hyp / a, a / hyp, b / hyp, hyp, b / a],
          'hyp = ' + hyp + ', cos θ = adjacent/hyp = ' + b + '/' + hyp + ', so sec θ = ' + hyp + '/' + b + '.');
      }
      if (level === 'hard') {
        const a = randInt(3, 5), b = randInt(4, 12);
        const hyp = Math.sqrt(a * a + b * b);
        return numQ('If sin θ = ' + a + '/' + hyp + ', what is cos θ?',
          b + '/' + hyp, [hyp + '/' + b, a + '/' + hyp, hyp + '/' + a, b + '/' + a, 1 + '/' + hyp],
          'Using sin²θ + cos²θ = 1: cos θ = √(1 − ' + (a * a / (hyp * hyp)) + ') = ' + b + '/' + hyp + '.');
      }
    },

    'Unit Circle & Special Angles': [
      level => {
        const EASY = [['sin 30°', '1/2', ['√2/2', '√3/2', '1', '0', '√3/3']],
                      ['cos 60°', '1/2', ['√2/2', '√3/2', '1', '0', '−1/2']],
                      ['sin 45°', '√2/2', ['1/2', '√3/2', '1', '0', '√3/3']],
                      ['cos 45°', '√2/2', ['1/2', '√3/2', '1', '0', '−√2/2']],
                      ['tan 45°', '1', ['1/2', '√2/2', '√3', '0', '−1']],
                      ['sin 60°', '√3/2', ['1/2', '√2/2', '1', '0', '√3']]];
        if (level === 'easy') {
          const e = pick(EASY);
          return strQ('What is the exact value of ' + e[0] + '?', e[1], e[2],
            e[0] + ' = ' + e[1] + ' from the special triangles on the unit circle.');
        }
        if (level === 'medium') {
          const MED = [['sin 120°', '√3/2'], ['cos 150°', '−√3/2'], ['sin 135°', '√2/2'],
                       ['tan 135°', '−1'], ['cos 180°', '−1'], ['sin 180°', '0']];
          const e = pick(MED);
          const wrongs = ['1/2', '√3/2', '√2/2', '1', '−1/2', '0', '−√2/2'];
          return strQ('What is the exact value of ' + e[0] + '?', e[1], wrongs,
            e[0] + ' lies in a quadrant where the sign and reference angle give ' + e[1] + '.');
        }
        const HARD = [['cos 120°', '−1/2'], ['sin 240°', '−√3/2'], ['cos 315°', '√2/2'],
                      ['sin 330°', '−1/2'], ['tan 225°', '1'], ['cos 210°', '−√3/2']];
        const e = pick(HARD);
        return strQ('What is the exact value of ' + e[0] + '?', e[1],
          ['1/2', '√3/2', '√2/2', '1', '−1/2', '−√2/2'],
          'Using the reference angle and the quadrant sign, ' + e[0] + ' = ' + e[1] + '.');
      }
    ],

    'Law of Sines & Cosines': [
      level => {
        if (level === 'easy') {
          return strQ('Which formula should you use to find a side in a NON-right triangle when you know two sides and the included angle?',
            'Law of Cosines', ['Law of Sines', 'Pythagorean Theorem', 'SOH-CAH-TOA', 'Quadratic Formula', 'Law of Tangents'],
            'Two sides and the included angle is exactly the Law of Cosines setup (c² = a² + b² − 2ab·cos C).');
        }
        if (level === 'medium') {
          const a = randInt(3, 5), b = randInt(4, 7);
          const c2 = a * a + b * b - a * b;
          const triFig = fig({ type: 'shape', shape: 'triangle', labels: { a: String(a), b: String(b) } });
          return numQ(triFig + 'Use the Law of Cosines to find side c if a = ' + a + ', b = ' + b + ', and C = 60°: c² = ' + a + '² + ' + b + '² − 2(' + a + ')(' + b + ')cos 60°. What is c?',
            Math.sqrt(c2), [Math.sqrt(c2) + 1, Math.sqrt(c2) - 1, Math.sqrt(a * a + b * b), a + b, Math.sqrt(c2 * 2)],
            'cos 60° = 1/2, so c² = ' + a * a + ' + ' + b * b + ' − ' + (a * b) + ' = ' + c2 + ', and c = √' + c2 + ' = ' + (Math.round(Math.sqrt(c2) * 100) / 100) + '.');
        }
        const a = randInt(4, 6), b = randInt(5, 8);
        return numQ('In a triangle, side a = ' + a + ' is opposite angle A = 30° and side b is opposite angle B = 60°. Use the Law of Sines to find side b.',
          b, [b + 1, b - 1, a * Math.sqrt(3) / 2, a * 2 / Math.sqrt(3), a / 2],
          'a/sin A = b/sin B → b = ' + a + ' × (sin 60°/sin 30°) = ' + a + ' × (√3/2 ÷ 1/2) = ' + b + '.');
      },
      level => {
        if (level === 'easy') {
          return strQ('Which law should you use when you know two angles and a side opposite one of them?',
            'Law of Sines', ['Law of Cosines', 'Pythagorean Theorem', 'SOH-CAH-TOA', 'Quadratic Formula', 'Tangent Ratio'],
            'An angle and its opposite side is the classic Law of Sines setup (a/sin A = b/sin B).');
        }
        if (level === 'medium') {
          const a = randInt(4, 6), A = 45, b = randInt(5, 8), B = 45;
          const ratio = (a / (Math.SQRT1_2));
          return numQ('By the Law of Sines, a/sin A = b/sin B. If a = ' + a + ' and sin A = sin B = √2/2, what must b equal?',
            a, [a + 1, a - 1, a * Math.SQRT1_2, a * 2, a / 2],
            'Since sin A = sin B, the sides are equal: b = a = ' + a + '.');
        }
        const a = randInt(3, 5), C = 90, b = randInt(4, 6);
        const c = Math.sqrt(a * a + b * b);
        return numQ('In a triangle, a = ' + a + ', b = ' + b + ', and C = 90°. What is side c by the Law of Cosines?',
          c, [c + 1, c - 1, a + b, a * b, Math.sqrt(Math.abs(a * a - b * b))],
          'With C = 90°, cos C = 0, so c² = a² + b² = ' + (a * a + b * b) + ' and c = ' + c + '.');
      },
      level => {
        if (level === 'easy') {
          return strQ('Pythagorean Theorem (a² + b² = c²) can be used when a triangle is…',
            'Right', ['Acute', 'Obtuse', 'Isosceles', 'Equilateral', 'Scalene'],
            'The Pythagorean theorem only applies to right triangles.');
        }
        if (level === 'medium') {
          const a = randInt(5, 7), b = randInt(4, 6);
          const c2 = a * a + b * b - a * b;
          return numQ('Use the Law of Cosines: c² = ' + a + '² + ' + b + '² − 2(' + a + ')(' + b + ')cos 60°. What is c²?',
            c2, [c2 + 1, c2 - 1, a * a + b * b, a + b, c2 * 2],
            'cos 60° = 1/2, so c² = ' + (a * a + b * b) + ' − ' + (a * b) + ' = ' + c2 + '.');
        }
        const a = randInt(6, 8), A = 30;
        const b = randInt(4, 5), B = 45;
        return numQ('By the Law of Sines, a/sin A = b/sin B with a = ' + a + ', A = 30°, B = 45°. Which equation correctly solves for b?',
          'b = ' + a + ' · (sin 45°/sin 30°)',
          ['b = ' + a + ' · (sin 30°/sin 45°)', 'b = ' + a + ' · sin 45° · sin 30°', 'b = ' + a + '/(sin 45°·sin 30°)', 'b = sin 45°/(sin 30°·' + a + ')', 'b = ' + a + ' · (sin 30° + sin 45°)'],
          'Solve a/sin A = b/sin B for b: b = a · sin B / sin A = ' + a + ' · (sin 45°/sin 30°).');
      }
    ],

    // ── Functions ────────────────────────────────────
    'Function Notation': level => {
      if (level === 'easy') {
        const m = randInt(2, 4), b = randInt(1, 6), x = randInt(2, 6);
        return numQ('If f(x) = ' + m + 'x + ' + b + ', what is f(' + x + ')?', m * x + b,
          [m * x + b + 1, m * x + b - 1, m + x + b, m * (x + b), m * x],
          'Substitute: f(' + x + ') = ' + m + '(' + x + ') + ' + b + ' = ' + (m * x) + ' + ' + b + ' = ' + (m * x + b) + '.');
      }
      if (level === 'medium') {
        const m = randInt(2, 3), b = randInt(1, 4), x = randInt(2, 4);
        const f = m * x + b;
        return numQ('If f(x) = ' + m + 'x + ' + b + ', what is f(f(' + x + '))?', m * f + b,
          [m * f + b + 1, m * f + b - 1, f, m * x + b * 2, m * f],
          'First f(' + x + ') = ' + f + '. Then f(' + f + ') = ' + m + '(' + f + ') + ' + b + ' = ' + (m * f + b) + '.');
      }
      if (level === 'hard') {
        const m = randInt(2, 3), b = randInt(1, 4), m2 = randInt(2, 3), b2 = randInt(1, 3), x = randInt(2, 4);
        const g = m2 * x + b2;
        return numQ('If f(x) = ' + m + 'x + ' + b + ' and g(x) = ' + m2 + 'x + ' + b2 + ', what is f(g(' + x + '))?',
          m * g + b, [m * g + b + 1, m * g + b - 1, g, m2 * g + b2, m * g],
          'Work inside-out: g(' + x + ') = ' + g + ', then f(' + g + ') = ' + m + '(' + g + ') + ' + b + ' = ' + (m * g + b) + '.');
      }
    },

    'Domain & Range': [
      level => {
        if (level === 'easy') {
          const m = randInt(1, 4), b = randInt(1, 6);
          return strQ('What is the domain of the linear function f(x) = ' + m + 'x + ' + b + '?',
            'All real numbers', ['x > 0', 'x ≥ 0', 'x ≠ 0', 'x ≠ ' + m, 'x < ' + b],
            'A linear function has no restrictions, so its domain is all real numbers.');
        }
        if (level === 'medium') {
          const a = randInt(2, 5);
          return strQ('What is the domain of f(x) = 1/(x − ' + a + ')?',
            'All real numbers except ' + a, ['All real numbers', 'x > 0', 'x ≥ ' + a, 'x < ' + a, 'All real numbers except −' + a],
            'The denominator cannot be zero: x − ' + a + ' ≠ 0, so x ≠ ' + a + '.');
        }
        const a = randInt(2, 5);
        return strQ('What is the domain of f(x) = √(x − ' + a + ')?',
          'x ≥ ' + a, ['x > 0', 'x ≤ ' + a, 'All real numbers', 'x > ' + a, 'x ≠ ' + a],
          'The radicand must be non-negative: x − ' + a + ' ≥ 0, so x ≥ ' + a + '.');
      },
      level => {
        if (level === 'easy') {
          return strQ('What is the range of the constant function f(x) = 7?',
            'y = 7', ['y > 0', 'y ≥ 0', 'All real numbers', 'y ≠ 7', 'y < 7'],
            'A constant function outputs 7 for every input, so its range is just y = 7.');
        }
        if (level === 'medium') {
          const a = randInt(2, 5);
          return strQ('For what x is the function f(x) = (x + 2)/(x + ' + a + ') undefined?',
            'x = −' + a, ['x = ' + a, 'x = −2', 'x = 2', 'x = ' + a + ' only', 'x = −' + a + ' and x = −2'],
            'The denominator is zero when x + ' + a + ' = 0, i.e. x = −' + a + '.');
        }
        const a = randInt(2, 4);
        return strQ('What is the domain of f(x) = √(2x − ' + a + ')?',
          'x ≥ ' + (a / 2), ['x > 0', 'x ≥ ' + a, 'x ≤ ' + (a / 2), 'All real numbers', 'x > ' + (a / 2)],
          'We need 2x − ' + a + ' ≥ 0, so x ≥ ' + (a / 2) + '.');
      },
      level => {
        if (level === 'easy') {
          return strQ('What is the domain of the quadratic function f(x) = x² − 4?',
            'All real numbers', ['x > 0', 'x ≥ 0', 'x ≠ 0', 'x ≥ 4', 'x ≠ 4'],
            'A quadratic function is defined for every real input.');
        }
        if (level === 'medium') {
          const a = randInt(2, 4);
          return strQ('Which value is NOT in the domain of f(x) = (x − 1)/(x − ' + a + ')?',
            String(a), [String(-a), String(1), '0', String(a - 1), String(a + 1)],
            'The denominator x − ' + a + ' is zero at x = ' + a + ', so that value is excluded.');
        }
        const a = randInt(2, 4), b = randInt(5, 8);
        return strQ('What is the domain of f(x) = √(x − ' + a + ')/(x − ' + b + ')?',
          'x ≥ ' + a + ' and x ≠ ' + b, ['x ≥ ' + a, 'x ≠ ' + b, 'x > ' + a + ' and x ≠ ' + b, 'x ≥ ' + b + ' and x ≠ ' + a, 'All real numbers'],
          'The radicand needs x ≥ ' + a + ', and the denominator excludes x = ' + b + '.');
      }
    ],

    'Function Transformations': [
      level => {
        if (level === 'easy') {
          const k = randInt(2, 5);
          return strQ('How does the graph of y = f(x) + ' + k + ' compare to y = f(x)?',
            'It shifts up ' + k + ' units', ['It shifts down ' + k + ' units', 'It shifts right ' + k + ' units', 'It shifts left ' + k + ' units', 'It reflects across the x-axis'],
            'Adding outside the function shifts the graph up by ' + k + '.');
        }
        if (level === 'medium') {
          return strQ('How does the graph of y = −f(x) compare to y = f(x)?',
            'It reflects across the x-axis', ['It reflects across the y-axis', 'It shifts down', 'It compresses vertically', 'It shifts left'],
            'A negative sign outside the function reflects the graph across the x-axis.');
        }
        const h = randInt(2, 4), k = randInt(2, 4);
        return strQ('How does the graph of y = f(x − ' + h + ') − ' + k + ' compare to y = f(x)?',
          'Shift right ' + h + ' and down ' + k,
          ['Shift left ' + h + ' and up ' + k, 'Shift right ' + h + ' and up ' + k, 'Shift left ' + h + ' and down ' + k, 'Shift down ' + h + ' and right ' + k, 'Reflect and shift'],
          'Inside the function shifts opposite to intuition (right by ' + h + '); outside shifts normally (down by ' + k + ').');
      },
      level => {
        if (level === 'easy') {
          const k = randInt(2, 5);
          return strQ('How does the graph of y = f(x − ' + k + ') compare to y = f(x)?',
            'It shifts right ' + k + ' units', ['It shifts left ' + k + ' units', 'It shifts up ' + k + ' units', 'It shifts down ' + k + ' units', 'It reflects across the x-axis'],
            'Inside the function shifts opposite to intuition: x − ' + k + ' moves right ' + k + '.');
        }
        if (level === 'medium') {
          return strQ('How does the graph of y = f(−x) compare to y = f(x)?',
            'It reflects across the y-axis', ['It reflects across the x-axis', 'It shifts down', 'It shifts left', 'It compresses horizontally'],
            'A negative inside the function reflects the graph across the y-axis.');
        }
        const a = randInt(2, 4), h = randInt(2, 4);
        return strQ('How does the graph of y = ' + a + '·f(x + ' + h + ') compare to y = f(x)?',
          'Vertical stretch by ' + a + ' and shift left ' + h,
          ['Vertical stretch by ' + a + ' and shift right ' + h, 'Compression by ' + a + ' and shift left ' + h, 'Shift left ' + h + ' only', 'Stretch by ' + h + ' and shift left ' + a, 'Reflect and stretch'],
          'The ' + a + ' outside stretches vertically; x + ' + h + ' inside shifts left by ' + h + '.');
      },
      level => {
        if (level === 'easy') {
          const k = randInt(2, 5);
          return strQ('How does the graph of y = f(x) − ' + k + ' compare to y = f(x)?',
            'It shifts down ' + k + ' units', ['It shifts up ' + k + ' units', 'It shifts right ' + k + ' units', 'It shifts left ' + k + ' units', 'It reflects across the x-axis'],
            'Subtracting outside the function shifts the graph down by ' + k + '.');
        }
        if (level === 'medium') {
          const a = randInt(2, 4);
          return strQ('How does the graph of y = ' + a + '·f(x) compare to y = f(x)?',
            'It stretches vertically by a factor of ' + a,
            ['It compresses vertically by ' + a, 'It shifts up ' + a + ' units', 'It reflects across the x-axis', 'It shifts right ' + a + ' units', 'It compresses horizontally'],
            'A multiplier greater than 1 outside the function stretches it vertically by ' + a + '.');
        }
        const a = randInt(2, 3), h = randInt(2, 3), k = randInt(2, 3);
        return strQ('How does the graph of y = −' + a + '·f(x − ' + h + ') + ' + k + ' compare to y = f(x)?',
          'Reflect across x-axis, stretch by ' + a + ', shift right ' + h + ' and up ' + k,
          ['Stretch by ' + a + ' and shift left ' + h + ' and down ' + k, 'Reflect and shift left ' + h + ' and up ' + k, 'Compress by ' + a + ' and shift right ' + h + ' and down ' + k, 'Shift right ' + h + ' and up ' + k + ' only', 'Reflect and shift down ' + h + ' and right ' + k],
          'The − reflects across the x-axis, ' + a + ' stretches, (x − ' + h + ') shifts right ' + h + ', and + ' + k + ' shifts up ' + k + '.');
      }
    ],

    'Composition & Inverses': level => {
      if (level === 'easy') {
        const m = randInt(2, 3), b = randInt(1, 4), m2 = randInt(2, 3), b2 = randInt(1, 3), x = randInt(2, 4);
        const g = m2 * x + b2;
        return numQ('If f(x) = ' + m + 'x + ' + b + ' and g(x) = ' + m2 + 'x + ' + b2 + ', what is f(g(' + x + '))?',
          m * g + b, [m * g + b + 1, m * g + b - 1, g, m2 * g + b2, m * g],
          'Apply g first: g(' + x + ') = ' + g + ', then f: ' + m + '(' + g + ') + ' + b + ' = ' + (m * g + b) + '.');
      }
      if (level === 'medium') {
        const m = randInt(2, 3), b = randInt(1, 5);
        return strQ('What is the inverse of f(x) = ' + m + 'x + ' + b + '?',
          '(x − ' + b + ')/' + m, ['x/' + m + ' − ' + b, 'x − ' + b + '/' + m, 'x/' + m + ' + ' + b, 'x + ' + b + '/ ' + m, '(x + ' + b + ')/' + m],
          'Swap x and y, solve for y: x = ' + m + 'y + ' + b + ' → y = (x − ' + b + ')/' + m + '.');
      }
      if (level === 'hard') {
        const m = randInt(2, 3), b = randInt(1, 4), x = randInt(2, 4);
        return numQ('If f(x) = ' + m + 'x + ' + b + ', what is f⁻¹(f(' + x + '))?', x,
          [x + 1, x - 1, m * x + b, x * m, m + x + b],
          'A function composed with its inverse returns the input: f⁻¹(f(' + x + ')) = ' + x + '.');
      }
    },

    // ── Statistics & Probability ─────────────────────
    'Counting Principles': level => {
      if (level === 'easy') {
        const a = randInt(2, 5), b = randInt(2, 6);
        return numQ('A restaurant offers ' + a + ' appetizers and ' + b + ' main courses. How many appetizer-and-main combinations are there?',
          a * b, [a + b, a * b + 1, a * b - 1, a * b * 2, a * b / 2],
          'Fundamental counting principle: ' + a + ' × ' + b + ' = ' + (a * b) + '.');
      }
      if (level === 'medium') {
        const n = randInt(4, 6);
        return numQ('How many ways can ' + n + ' distinct books be arranged on a shelf?', (() => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; })(),
          [n * n, n * (n - 1), (() => { let p = 1; for (let i = 2; i < n; i++) p *= i; return p; })(), n * 2, n + 1],
          'Arranging ' + n + ' items is ' + n + '! = ' + (() => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; })() + '.');
      }
      if (level === 'hard') {
        const n = randInt(5, 8), r = 3;
        const comb = (n * (n - 1) * (n - 2)) / 6;
        return numQ('How many ways can a committee of ' + r + ' be chosen from ' + n + ' people?', comb,
          [comb + 1, comb - 1, n * r, n * (n - 1), comb * 2],
          'Combination: C(' + n + ', ' + r + ') = ' + n + '!/(3!·' + (n - r) + '!) = ' + comb + '.');
      }
    },

    'Advanced Probability': level => {
      if (level === 'easy') {
        const a = randInt(2, 4), b = randInt(2, 4);
        const total = a + b;
        return numQ('A bag has ' + a + ' red and ' + b + ' blue marbles. One is drawn and replaced, then another. What is the probability both are red?',
          (a / total) * (a / total),
          [(a / total) * (b / total), (a / total) * ((a - 1) / (total - 1)), (a / total) * 2, a / total + a / total, (a + b) / (2 * total)],
          'With replacement the probabilities stay independent: (' + a + '/' + total + ')² = ' + (a / total) * (a / total) + '.');
      }
      if (level === 'medium') {
        const r = randInt(2, 4), b = randInt(2, 4);
        const total = r + b;
        const ans = (r / total) * (b / (total - 1)) + (b / total) * (r / (total - 1));
        return numQ('A bag has ' + r + ' red and ' + b + ' blue marbles. Two are drawn without replacement. What is the probability of drawing one of each color?',
          ans, [ans + 0.1, ans - 0.1, (r / total) * (b / total), 1 - ans, (r * b) / total],
          'Red then blue: ' + (r / total) + ' × ' + (b / (total - 1)) + '. Blue then red adds the same value: total ' + ans + '.');
      }
      if (level === 'hard') {
        const r = randInt(2, 3), b = randInt(2, 3);
        const total = r + b;
        const bothB = (b / total) * ((b - 1) / (total - 1));
        const ans = 1 - bothB;
        return numQ('A bag has ' + r + ' red and ' + b + ' blue marbles. Two are drawn without replacement. What is the probability that at least one is red?',
          ans, [bothB, ans + 0.1, ans - 0.1, r / total, (r + b) / total],
          'P(at least one red) = 1 − P(both blue) = 1 − ' + bothB + ' = ' + ans + '.');
      }
    },

    'Expected Value': level => {
      if (level === 'easy') {
        const w = randInt(2, 10), p = pick([0.25, 0.5, 0.75]);
        return numQ('A game pays $' + (w * 10) + ' with probability ' + p + ' and $0 otherwise. What is the expected payout?',
          w * 10 * p,
          [w * 10, w * 10 * p + 5, w * 10 * p - 5, w * 10 * (1 - p), w * 10 / 2],
          'Expected value = $' + (w * 10) + ' × ' + p + ' = $' + (w * 10 * p) + '.');
      }
      if (level === 'medium') {
        const a = randInt(2, 5), b = randInt(6, 12);
        return numQ('A spinner lands on $' + (a * 10) + ' with probability 1/4 and $' + (b * 10) + ' with probability 3/4. What is the expected value?',
          a * 10 * 0.25 + b * 10 * 0.75,
          [a * 10 + b * 10, (a * 10 + b * 10) / 2, a * 10 * 0.75 + b * 10 * 0.25, b * 10, a * 10],
          'E = $' + (a * 10) + '(1/4) + $' + (b * 10) + '(3/4) = $' + (a * 10 * 0.25 + b * 10 * 0.75) + '.');
      }
      if (level === 'hard') {
        const c = randInt(5, 15), p = pick([0.2, 0.25, 0.4]);
        const ans = c * p;
        return numQ('A raffle costs $' + (c * 5) + ' to play. You win $' + (c * 5) + ' back with probability ' + p + ' and nothing otherwise. What is the expected value of your net gain?',
          -c * 5 + c * 5 * p,
          [c * 5 * p, -c * 5 * p, c * 5 - c * 5 * p, 0, c * 5 * p - c * 5 + 5],
          'Net gain = win − cost = $' + (c * 5 * p) + ' − $' + (c * 5) + ' = $' + (-c * 5 + c * 5 * p) + '.');
      }
    },

    'Scatterplots & Lines of Best Fit': level => {
      if (level === 'easy') {
        const m = randInt(2, 4), b = randInt(5, 20), x = randInt(3, 8);
        const scFig = fig({ type: 'line', pts: [[1, m * 1 + b], [2, m * 2 + b], [4, m * 4 + b], [6, m * 6 + b], [8, m * 8 + b]], fit: { m, b }, xMin: 0, xMax: 10, yMin: 0, yMax: m * 10 + b + 2 });
        return numQ(scFig + 'The line of best fit is y = ' + m + 'x + ' + b + '. What value does it predict for x = ' + x + '?',
          m * x + b, [m * x + b + 1, m * x + b - 1, m + x + b, m * x, b],
          'Plug in: y = ' + m + '(' + x + ') + ' + b + ' = ' + (m * x + b) + '.');
      }
      if (level === 'medium') {
        const m = randInt(2, 4), b = randInt(5, 15);
        const scFig = fig({ type: 'line', pts: [[0, b], [10, m * 10 + b]], fit: { m, b }, xMin: 0, xMax: 11, yMin: 0, yMax: m * 10 + b + 2, xLabel: 'x', yLabel: 'y' });
        return numQ(scFig + 'A line of best fit passes through (0, ' + b + ') and (10, ' + (m * 10 + b) + '). What is its slope?',
          m, [m + 1, m - 1, b, m / 10, 10 * m + b],
          'Slope = (' + (m * 10 + b) + ' − ' + b + ')/(10 − 0) = ' + (m * 10) + '/10 = ' + m + '.');
      }
      if (level === 'hard') {
        const m = randInt(2, 3), b = randInt(10, 20), y = randInt(20, 30);
        const x = (y - b) / m;
        const scFig = fig({ type: 'line', pts: [[1, m * 1 + b], [3, m * 3 + b], [5, m * 5 + b], [7, m * 7 + b]], fit: { m, b }, xMin: 0, xMax: 10, yMin: 0, yMax: m * 10 + b + 2 });
        return numQ(scFig + 'The line of best fit is y = ' + m + 'x + ' + b + '. At what x does it predict y = ' + y + '?',
          x, [x + 1, x - 1, m * y + b, y - b, y / m],
          'Solve ' + y + ' = ' + m + 'x + ' + b + ' → x = (' + y + ' − ' + b + ')/' + m + ' = ' + x + '.');
      }
    }
  };

  // Generic fallback: if a topic has no custom generator, pull a formula
  // from its explanation and ask for its value; else a generic arithmetic Q.
  const fallback = (level, topicName) => {
    const expl = explFor(topicName);
    const codeMatch = expl.match(/<code>([^<]+)<\/code>/);
    if (codeMatch) {
      const expr = codeMatch[1];
      const val = safeEval(expr);
      if (val !== null && Math.abs(val) < 1e7) {
        return numQ('What is the value of ' + expr + '?', val,
          [val + 1, val - 1, val + 2, val * 2, val / 2],
          'Simplifying ' + expr + ' gives ' + val + '.');
      }
    }
    const a = randInt(12, 40), b = randInt(8, 30);
    return numQ('What is ' + a + ' + ' + b + '?', a + b,
      [a + b + 1, a + b - 1, a + b + 2, a * b, a + b - 2],
      a + ' + ' + b + ' = ' + (a + b) + '.');
  };

  // ─────────────────── public API ───────────────────
  // LEVEL_MIX controls the easy:medium:hard split of a generated test.
  // Adjust these proportions to make tests easier or harder overall.
  const LEVEL_MIX = [0.34, 0.33, 0.33];

  function generateTopicQuestions(topicName, count, level) {
    count = Math.max(1, Math.min(count || 10, 60));
    const tpl = GEN[topicName];
    const gen = (lvl) => (Array.isArray(tpl) ? pick(tpl)(lvl) : (tpl || ((x) => fallback(x, topicName)))(lvl));
    const questions = [];
    const seen = new Set();
    let guard = 0;
    let perLevel;
    if (level === 'easy' || level === 'medium' || level === 'hard') {
      perLevel = [[level, count]];
    } else {
      const easyN = Math.round(count * LEVEL_MIX[0]);
      const medN = Math.round(count * LEVEL_MIX[1]);
      const hardN = count - easyN - medN;
      perLevel = [['easy', easyN], ['medium', medN], ['hard', hardN]];
    }
    for (const [lvl, n] of perLevel) {
      let produced = 0;
      while (produced < n && guard++ < count * 60) {
        const q = gen(lvl);
        if (!q || !q.q || !q.options || q.options.length !== 5) continue;
        const key = q.q + '\u0000' + q.options.join('\u0000');
        if (seen.has(key)) continue;
        seen.add(key);
        q.level = lvl;
        questions.push(q);
        produced++;
      }
    }
    const fillLevel = (level === 'easy' || level === 'medium' || level === 'hard') ? level : 'medium';
    while (questions.length < count && guard++ < count * 60) {
      const q = gen(fillLevel);
      const key = q && q.q && q.options && q.options.length === 5 ? q.q + '\u0000' + q.options.join('\u0000') : '';
      if (key && !seen.has(key)) {
        seen.add(key);
        q.level = fillLevel;
        questions.push(q);
      }
    }
    return questions;
  }

  return generateTopicQuestions;
})();





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
const renderCache = new Map();
let cacheVersion = 0;
function invalidateCache() { cacheVersion++; }
function cacheKey(view, section, category, topic) {
  return `${view}|${section}|${category}|${topic}|${cacheVersion}`;
}
async function navigate(view, section, category, topic) {
  endTest();
  closeMobileMenu();
  currentView = view;
  currentSection = section;
  currentCategory = category;
  currentTopic = topic;
  searchInput.value = '';
  navButtons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-view="${view === 'home' ? 'home' : (section || view)}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  if (view === 'analytics') {
    const alt = document.querySelector('[data-view="analytics"]');
    if (alt) alt.classList.add('active');
  }
  if (section && DATA_MANIFEST[section] && !data[section] && (section !== 'science' || isScienceEnabled())) {
    main.innerHTML = `<div class="loading-state">Loading ${(DATA_MANIFEST[section].title || section)}…</div>`;
    try {
      await loadSection(section);
      invalidateCache();
    } catch (err) {
      main.innerHTML = `<div class="no-results"><h3>Could not load this section</h3><p>Please refresh the page and try again.</p></div>`;
      return;
    }
  }
  if (topic != null && section && category !== null && data[section]) {
    const cat = data[section].categories[category];
    if (cat && cat.topics[topic]) {
      markTopicViewed(section, cat.name, cat.topics[topic].name);
      invalidateCache();
    }
  }
  if (section && DATA_MANIFEST[section]) trackSectionTime(section);
  else flushSectionTime();
  render();
  window.scrollTo(0,0);
}
function render() {
  if (currentView === 'analytics') return renderAnalytics();
  if (currentView === 'support') return renderSupport();
  if (currentSection === 'science' && !isScienceEnabled()) return renderScienceOptIn();
  const key = cacheKey(currentView, currentSection, currentCategory, currentTopic);
  if (renderCache.has(key)) { main.innerHTML = renderCache.get(key); return; }
  let html = '';
  if (currentTopic != null) html = renderTopicDetailHTML();
  else if (currentCategory != null) html = renderTopicListHTML();
  else if (currentView === 'section') html = renderCategoryGridHTML();
  else html = renderHomeHTML();
  renderCache.set(key, html);
  main.innerHTML = html;
}
// ── HOME ──────────────────────
function isScienceEnabled() {
  try { return localStorage.getItem('actGenieScienceOptIn') === '1'; } catch (e) { return true; }
}
function setScienceEnabled(on) {
  try { localStorage.setItem('actGenieScienceOptIn', on ? '1' : '0'); } catch (e) {}
}
function toggleScienceOptIn(el) {
  setScienceEnabled(!!el && el.checked);
  invalidateCache();
  if (currentSection === 'science' && currentView === 'section') {
    navigate('section', 'science');
  } else {
    renderHomeHTML();
  }
}
function renderHomeHTML() {
  const progress = getProgress();
  const viewedCount = progress.topicViews ? Object.keys(progress.topicViews).length : 0;
  const scienceOn = isScienceEnabled();
  const totalCount = countTopics('math') + countTopics('english') + countTopics('reading') + (scienceOn ? countTopics('science') : 0);
  const testResults = progress.testResults || [];
  const counted = scienceOn ? testResults : testResults.filter(r => r.section !== 'science');
  const avgScore = counted.length ? Math.round(counted.reduce((s, r) => s + r.pct, 0) / counted.length) : 0;
  const heroSections = scienceOn ? 4 : 3;
  main.innerHTML = `
    <div class="hero-section">
      <h1>Master the <span class="hero-accent">ACT</span>, topic by topic</h1>
      <p>ACT Wizard teaches every topic on the ACT with clear explanations and video lessons — then tests you ACT-style, with the real question counts and timings.</p>
      <div class="hero-stats">
        <div class="stat"><b>${heroSections}</b><span>Sections</span></div>
        <div class="stat"><b>${totalCount}</b><span>Topics</span></div>
        <div class="stat"><b>${viewedCount}/${totalCount}</b><span>Topics Viewed</span></div>
        <div class="stat"><b>${counted.length}</b><span>Tests Taken</span></div>
        <div class="stat"><b>${avgScore}%</b><span>Avg Score</span></div>
        <div class="stat"><b>100%</b><span>Free</span></div>
      </div>
      <label class="science-toggle">
        <input type="checkbox" onchange="toggleScienceOptIn(this)" ${scienceOn ? 'checked' : ''}>
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
        <span class="toggle-label">Science — optional add-on (40 questions · 35 min)</span>
      </label>
    </div>
    <div class="subject-grid">
      <div class="subject-card math" onclick="navigate('section','math')">
        <span class="icon">📐</span>
        <h3>Math</h3>
        <p>45 questions · 50 min · Number & Quantity, Algebra, Functions, Statistics & Probability, Geometry, Integrating Essential Skills, Modeling · ${countTopics('math')} topics</p>
      </div>
      <div class="subject-card english" onclick="navigate('section','english')">
        <span class="icon">📝</span>
        <h3>English</h3>
        <p>50 questions · 35 min · Grammar, style & rhetoric · ${countTopics('english')} topics</p>
      </div>
      <div class="subject-card reading" onclick="navigate('section','reading')">
        <span class="icon">📖</span>
        <h3>Reading</h3>
        <p>36 questions · 35 min · Literary, Social Studies, Humanities, Natural Science · ${countTopics('reading')} topics</p>
      </div>
      ${scienceOn ? `
      <div class="subject-card science" onclick="navigate('section','science')">
        <span class="icon">🔬</span>
        <h3>Science</h3>
        <p>40 questions · 35 min · Optional add-on · Data analysis & reasoning · ${countTopics('science')} topics</p>
      </div>` : ''}
      <div class="subject-card past-tests" onclick="navigate('section','past tests')">
        <span class="icon">📚</span>
        <h3>Past Tests</h3>
        <p>Full-length practice tests · ${countTopics('past tests')} topics</p>
      </div>
    </div>
  `;
  return main.innerHTML;
}
// ── SCIENCE OPT-IN BLOCKER ───
function renderScienceOptIn() {
  const scienceOn = isScienceEnabled();
  if (scienceOn) { renderCategoryGridHTML(); return; }
  main.innerHTML = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>ACT Science</strong>
    </div>
    <div class="no-results"><h3>Science is off</h3>
      <p>Science is now an optional add-on on the ACT. Enable it from the home screen toggle to study and test this section.</p>
      <p><label class="science-toggle" style="margin-top:.5rem">
        <input type="checkbox" onchange="toggleScienceOptIn(this)">
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
        <span class="toggle-label">Enable Science (optional add-on)</span>
      </label></p>
    </div>
  `;
}
// ── CATEGORY GRID ─────────────
function renderCategoryGridHTML() {
  const sec = data[currentSection];
  if (!sec || !sec.categories) {
    main.innerHTML = `<div class="no-results"><h3>Could not load this section</h3><p>Please refresh the page and try again.</p></div>`;
    return '';
  }
  let html = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>${sec.title || currentSection}</strong>
    </div>
    <div class="section-header">
      <h2>${sec.title || currentSection}</h2>
      <p>${sec.desc || 'Select a category below'}</p>
    </div>
    <div class="cat-grid">
  `;
  sec.categories.forEach((cat, i) => {
    html += `
      <div class="cat-card" onclick="navigate('section','${currentSection}',${i})">
        <h4>${cat.name}</h4>
        <span class="count">${(cat.topics || []).length} topics</span>
      </div>
    `;
  });
  html += '</div>';
  return html;
}
// ── TOPIC LIST ────────────────
function getExcerpt(html, maxLen = 130) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = (tmp.textContent || tmp.innerText || '').trim();
  return text.length > maxLen ? text.slice(0, maxLen).trim() + '…' : text;
}

function renderTopicListHTML() {
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
      <p>${cat.topics.length} tests — open a test or its answer key</p>
    </div>
  `;

  if (currentSection === 'past tests') {
    html += `<div class="past-tests-grid">`;
    cat.topics.forEach((t, i) => {
      html += `
        <div class="past-test-card" onclick="navigate('section','${currentSection}',${currentCategory},${i})">
          <h4>${t.name}</h4>
          <p>Full-length ACT practice material${t.answerKey ? ' · includes answer key' : ''}</p>
          <div class="past-test-actions">
            ${t.pdf ? `<a href="${t.pdf}" target="_blank" rel="noopener" class="yt-btn" style="background:#5c6bc0">📄 Open Test</a>` : ''}
            ${t.answerKey ? `<a href="${t.answerKey}" target="_blank" rel="noopener" class="yt-btn" style="background:#2e7d32">✅ Answer Key</a>` : ''}
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  if (currentSection === 'other links') {
    html += `<div class="past-tests-grid">`;
    cat.topics.forEach((t, i) => {
      const url = t.url || t.pdf || '#';
      const label = url !== '#' ? '🔗 Open Link' : 'Coming soon';
      html += `
        <div class="past-test-card" onclick="${url !== '#' ? `window.open('${url}','_blank')` : ''}" style="${url === '#' ? 'opacity:.7;cursor:default' : ''}">
          <h4>${t.name}</h4>
          <p>${url !== '#' ? 'External resource' : 'Link coming soon'}</p>
          <div class="past-test-actions">
            ${url !== '#' ? `<a href="${url}" target="_blank" rel="noopener" class="yt-btn" style="background:#5c6bc0">${label}</a>` : ''}
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  const progress = getProgress();
  html += `<div class="topic-list" id="topicListContainer">`;
  const PAGE_SIZE = 20;
  let pageStart = 0;
  let currentPage = 0;
  const totalPages = Math.max(1, Math.ceil(cat.topics.length / PAGE_SIZE));
  function renderPage() {
    const container = document.getElementById('topicListContainer');
    if (!container) return;
    const start = currentPage * PAGE_SIZE;
    const slice = cat.topics.slice(start, start + PAGE_SIZE);
    let pageHtml = '';
    slice.forEach((t, i) => {
      const excerpt = t.expl ? getExcerpt(t.expl) : '';
      const diff = t.diff ? `<span class="difficulty ${t.diff === 'easy' ? 'easy' : t.diff === 'medium' ? 'medium' : 'hard'}">${t.diff}</span>` : '';
      const viewKey = `${currentSection}::${cat.name}::${t.name}`;
      const viewed = progress.topicViews && progress.topicViews[viewKey];
      const viewedBadge = viewed ? '<span class="viewed-badge">✓ Viewed</span>' : '';
      pageHtml += `
        <div class="topic-row" data-searchable="${t.name.toLowerCase()} ${cat.name.toLowerCase()} ${excerpt.toLowerCase()}" onclick="navigate('section','${currentSection}',${currentCategory},${start + i})">
          <div>
            <span class="tname">${t.name} ${viewedBadge}</span>
            ${excerpt ? `<span class="tdesc">${excerpt}</span>` : ''}
          </div>
          <div class="tmeta">
            ${diff}
            <span style="color:var(--text2);font-size:.8rem">→</span>
          </div>
        </div>
      `;
    });
    const hasPrev = currentPage > 0;
    const hasNext = currentPage < totalPages - 1;
    container.innerHTML = pageHtml + (hasPrev || hasNext ? `
      <div class="pagination">
        ${hasPrev ? '<button type="button" class="page-btn" data-page="prev">← Previous</button>' : ''}
        <span class="page-info">Page ${currentPage + 1} of ${totalPages}</span>
        ${hasNext ? '<button type="button" class="page-btn" data-page="next">Next →</button>' : ''}
      </div>
    ` : '');
    container.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.page === 'prev' && currentPage > 0) currentPage--;
        if (btn.dataset.page === 'next' && currentPage < totalPages - 1) currentPage++;
        renderPage();
      });
    });
  }
  renderPage();
  html += '</div>';
  return html;
}
// ── TOPIC DETAIL ──────────────
function renderTopicDetailHTML() {
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
      ${topic.answerKey ? `<a href="${topic.answerKey}" target="_blank" rel="noopener" class="yt-btn" style="background:#2e7d32">✅ Open Answer Key</a>` : ''}
    </div>
    <div class="detail-tabs">
      <button class="tab-btn active" data-tab="learn" onclick="showTab('learn')">📖 Learn</button>
      ${currentSection === 'past tests' || currentSection === 'other links' ? '' : '<button class="tab-btn" data-tab="test" onclick="showTab(\'test\')">✏️ Test</button>'}
    </div>
    <div class="tab-panel active" id="tabLearn">
      <div class="ai-explanation" id="explanationArea">
        ${topic.visual && typeof ACTVisuals !== 'undefined' ? ACTVisuals.render(topic.visual) : ''}
        ${topic.expl}
      </div>
    </div>
    ${currentSection === 'past tests' || currentSection === 'other links' ? '' : '<div class="tab-panel" id="tabTest"><div id="testArea"></div></div>'}
  `;
  main.innerHTML = html;
  if (currentSection !== 'past tests' && currentSection !== 'other links') {
    const testArea = document.getElementById('testArea');
    if (testArea && typeof renderTestConfigHTML === 'function') {
      testArea.innerHTML = renderTestConfigHTML();
    }
  }
  initStepAnimator();
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
  recordSearchTerm(q);
  renderSearchResults(q);
  // Search should cover the whole dataset: pull in any unloaded chunks, then
  // re-render. Graceful — results appear immediately for already-loaded sections.
  if (Object.keys(DATA_MANIFEST).some(k => !data[k])) {
    loadAllSections().then(() => {
      if (searchInput.value.toLowerCase().trim() === q) renderSearchResults(q);
    });
  }
}
function renderSearchResults(q) {
  // Search all topics across all sections that are currently loaded.
  let results = [];
  for (const [sectionKey, sectionData] of Object.entries(data)) {
    if (!sectionData || !sectionData.categories) continue;
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
    const excerpt = r.topic.expl ? getExcerpt(r.topic.expl) : '';
    const diff = r.topic.diff ? `<span class="difficulty ${r.topic.diff === 'easy' ? 'easy' : r.topic.diff === 'medium' ? 'medium' : 'hard'}">${r.topic.diff}</span>` : '';
    html += `
      <div class="topic-row" onclick="navigate('section','${r.section}',${r.catIdx},${r.topicIdx})">
        <div>
          <span class="tname">${highlight(r.topic.name, q)} <span style="color:var(--text2);font-weight:400;font-size:.82rem">— ${r.sectionTitle} · ${r.catName}</span></span>
          ${excerpt ? `<span class="tdesc">${excerpt}</span>` : ''}
        </div>
        <div class="tmeta">
          ${diff}
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
  const sec = data[section];
  if (sec && sec.categories) return sec.categories.reduce((sum, c) => sum + c.topics.length, 0);
  return manifestCount(section);
}
// ── PROGRESS TRACKING ───────────
function getProgress() {
  try {
    const raw = localStorage.getItem('actGenieProgress');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { topicViews: {}, testResults: [] };
}
function saveProgress(progress) {
  try { localStorage.setItem('actGenieProgress', JSON.stringify(progress)); } catch (e) {}
}
function markTopicViewed(section, category, topic) {
  const progress = getProgress();
  const key = `${section}::${category}::${topic}`;
  if (!progress.topicViews) progress.topicViews = {};
  const prev = progress.topicViews[key];
  progress.topicViews[key] = { viewedAt: Date.now(), count: (prev && prev.count || 0) + 1 };
  saveProgress(progress);
  recordTopicView(section, category, topic);
}
function recordTestResult(section, category, topic, correct, total) {
  const progress = getProgress();
  if (!progress.testResults) progress.testResults = [];
  progress.testResults.push({
    section, category, topic,
    correct, total,
    pct: Math.round((correct / total) * 100),
    takenAt: Date.now()
  });
  progress.testResults = progress.testResults.slice(-50);
  saveProgress(progress);
  recordTestAnalytics(section, Math.round((correct / total) * 100));
}
function getTopicProgress(section, category, topic) {
  const progress = getProgress();
  const key = `${section}::${category}::${topic}`;
  return progress.topicViews && progress.topicViews[key];
}
// ── NAV CLICKS ────────────────
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    if (view === 'home') navigate('home');
    else if (view === 'support' || view === 'analytics') navigate(view);
    else navigate('section', view);
    closeMobileMenu();
  });
});
// ── RIPPLE EFFECT ─────────────
document.addEventListener('pointerdown', (e) => {
  const btn = e.target.closest('.subject-card, .cat-card, .topic-row, .back-btn, .yt-btn, .start-test-btn, .submit-test-btn, .retry-btn, .topbar nav button, .act-option, .act-nav button, .nav-dot, .preset-btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.2;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.width = span.style.height = size + 'px';
  span.style.left = (e.clientX - rect.left - size / 2) + 'px';
  span.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
});
// ── QUIZ KEYBOARD SHORTCUTS (A–E select, ←/→ navigate, Enter next/submit) ─────
document.addEventListener('keydown', (e) => {
  if (!testState || testState.submitted) return;
  const tag = e.target && e.target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
  const key = e.key.toLowerCase();
  if (/^[a-e]$/.test(key)) {
    const i = testState._current;
    const idx = key.charCodeAt(0) - 97;
    if (idx < testState.questions[i].options.length) selectAnswer(i, idx);
  } else if (e.key === 'ArrowLeft') {
    gotoQ(testState._current - 1);
  } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
    if (testState._current >= testState.questions.length - 1) submitTest();
    else gotoQ(testState._current + 1);
  }
});
// ── TEST TABS & QUIZ ENGINE ───────
let testState = null;
// Any navigation or leaving the Test tab ends the current test session.
function endTest() {
  if (testState && testState._timer) clearInterval(testState._timer);
  testState = null;
}
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
function answeredCount() {
  return testState.answers.filter(a => a !== null).length;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Build a full-length ACT test by mixing questions from every topic of a section,
// ordered easy → medium → hard so difficulty rises through the test like the real ACT.
function generateFullLengthSectionTest(section, count) {
  const secData = data[section];
  if (!secData || !secData.categories) return [];
  const topics = [];
  secData.categories.forEach(cat => cat.topics.forEach(t => topics.push(t.name)));
  const genFn = section === 'math' ? TopicQuestionGenerator : (window.SectionQuestionGenerator && window.SectionQuestionGenerator[section]);
  if (!genFn) return [];
  const seen = new Set();
  const picked = [];
  const easyN = Math.round(count / 3);
  const medN = Math.round(count / 3);
  const hardN = count - easyN - medN;
  [['easy', easyN], ['medium', medN], ['hard', hardN]].forEach(([lvl, needed0]) => {
    let needed = needed0;
    let guard = 0;
    while (needed > 0 && guard++ < count * 40) {
      const name = topics[Math.floor(Math.random() * topics.length)];
      const qs = genFn(name, 1, lvl);
      for (const q of qs) {
        if (needed <= 0) break;
        const key = q.q + '\u0000' + q.options.join('\u0000');
        if (seen.has(key)) continue;
        seen.add(key);
        q.topic = name;
        q.level = lvl;
        picked.push(q);
        needed--;
      }
    }
  });
  return shuffle(picked.filter(q => q.level === 'easy'))
    .concat(shuffle(picked.filter(q => q.level === 'medium')))
    .concat(shuffle(picked.filter(q => q.level === 'hard')))
    .slice(0, count);
}
function sectionTestLabel(section) {
  return { math: 'Full ACT Math', english: 'Full ACT English', reading: 'Full ACT Reading', science: 'Full ACT Science' }[section] || 'Full ACT Test';
}
function startTest() {
  const countInput = document.getElementById('testQuestionCount');
  const timeInput = document.getElementById('testTimeLimit');
  const scopeInput = document.getElementById('testScopeFull');
  let requested = parseInt(countInput.value, 10) || 10;
  const minutes = parseInt(timeInput.value, 10) || 0;
  const fullScope = !!(scopeInput && scopeInput.checked);
  const fullQ = (DATA_MANIFEST[currentSection] && DATA_MANIFEST[currentSection].test && DATA_MANIFEST[currentSection].test.q) || 60;
  requested = Math.max(5, Math.min(requested, fullQ));
  const topicName = data[currentSection] && data[currentSection].categories[currentCategory].topics[currentTopic].name;
  // Generate a fresh set of questions on every start — nothing is cached.
  let questions = [];
  if (fullScope) {
    questions = generateFullLengthSectionTest(currentSection, requested);
  } else if (currentSection === 'math') {
    questions = TopicQuestionGenerator(topicName, requested);
  } else if (window.SectionQuestionGenerator && window.SectionQuestionGenerator[currentSection]) {
    questions = window.SectionQuestionGenerator[currentSection](topicName, requested);
  }
  if (!questions || questions.length === 0) {
    alert('Could not generate questions for this test. Please try again.');
    return;
  }
  const finalCount = questions.length;
  testState = {
    questions: questions.slice(0, finalCount).map((q, i) => ({...q, index: i})),
    answers: new Array(finalCount).fill(null),
    submitted: false,
    startTime: Date.now(),
    timeLimit: minutes > 0 ? minutes * 60 : null,
    remaining: minutes > 0 ? minutes * 60 : null,
    _current: 0,
    _scope: fullScope ? 'full' : 'topic',
    _source: fullScope ? sectionTestLabel(currentSection) : topicName,
    paused: false,
    flags: new Array(finalCount).fill(false)
  };
  renderTest();
  if (testState.timeLimit) testState._timer = setInterval(tickTimer, 1000);
}
function togglePause() {
  if (!testState || testState.submitted || !testState.timeLimit) return;
  testState.paused = !testState.paused;
  renderTest();
}
function toggleFlag(i) {
  if (!testState || testState.submitted || testState.paused) return;
  testState.flags[i] = !testState.flags[i];
  renderQuestionArea();
  refreshTestChrome();
}
function tickTimer() {
  if (!testState || testState.submitted || !testState.timeLimit || testState.paused) return;
  testState.remaining--;
  const el = document.getElementById('testTimer');
  if (el) {
    el.textContent = formatTime(testState.remaining);
    el.classList.toggle('warn', testState.remaining <= (testState.timeLimit >= 1200 ? 300 : 60));
  }
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
  let html = '<div class="act-test-shell">';
  html += '<div class="test-header"><h3>Test: ' + testState._source + '</h3>';
  if (testState.timeLimit) html += '<span id="testTimer" class="timer">' + formatTime(testState.remaining) + '</span>';
  html += '<span class="answered-count" id="answeredCount">' + answeredCount() + '/' + testState.questions.length + ' answered</span>';
  if (testState.timeLimit && !testState.submitted) {
    html += '<button id="pauseBtn" class="pause-btn" onclick="togglePause()">' + (testState.paused ? '▶ Resume' : '⏸ Pause') + '</button>';
  }
  html += '</div>';
  if (!testState.submitted) {
    html += '<div class="navigator-grid" id="navGrid"></div>';
    html += '<div id="qArea"></div>';
    html += '<div class="act-nav">';
    html += '<button id="prevBtn" onclick="gotoQ(' + (testState._current - 1) + ')">← Previous</button>';
    html += '<button id="nextBtn" onclick="gotoQ(' + (testState._current + 1) + ')">Next →</button>';
    html += '</div>';
    html += '<button class="submit-test-btn" onclick="submitTest()">Submit Test</button>';
  } else {
    html += reviewHTML();
  }
  html += '</div>';
  const container = document.getElementById('testArea');
  if (container) container.innerHTML = html;
  if (!testState.submitted) {
    renderQuestionArea();
    refreshTestChrome();
  } else {
    const ta = document.getElementById('testArea');
    if (ta) ta.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
function renderQuestionArea() {
  const qArea = document.getElementById('qArea');
  if (!qArea || testState.submitted) return;
  if (testState.paused) {
    qArea.innerHTML = '<div class="act-question"><p class="dim">Timer paused. Click Resume to continue.</p></div>';
    return;
  }
  const i = testState._current;
  const q = testState.questions[i];
  const selected = testState.answers[i];
  const flagged = testState.flags[i];
  let h = '<div class="act-question">';
  h += '<div class="q-header"><span class="q-num">Question ' + (i + 1) + ' of ' + testState.questions.length + '</span>';
  if (testState.timeLimit) {
    h += '<button class="flag-btn' + (flagged ? ' flagged' : '') + '" onclick="toggleFlag(' + i + ')" title="Flag for review">' + (flagged ? '🚩' : '🏳️') + '</button>';
  }
  h += '</div>';
  h += '<p class="q-text">' + (i + 1) + '. ' + q.q + '</p>';
  h += '<div class="act-options">';
  q.options.forEach((opt, oi) => {
    h += '<button type="button" class="act-option' + (selected === oi ? ' selected' : '') + '" onclick="selectAnswer(' + i + ',' + oi + ')">';
    h += '<span class="letter">' + LETTERS[oi] + '</span><span>' + opt + '</span></button>';
  });
  h += '</div></div>';
  qArea.innerHTML = h;
}
function refreshTestChrome() {
  if (!testState || testState.submitted) return;
  const ac = document.getElementById('answeredCount');
  if (ac) ac.textContent = answeredCount() + '/' + testState.questions.length + ' answered';
  const grid = document.getElementById('navGrid');
  if (grid) {
    let h = '';
    testState.questions.forEach((_, i) => {
      const cls = (testState.answers[i] !== null ? ' answered' : '') + (i === testState._current ? ' current' : '') + (testState.flags[i] ? ' flagged' : '');
      h += '<button class="nav-dot' + cls + '" onclick="gotoQ(' + i + ')" title="' + (testState.flags[i] ? 'Flagged for review' : '') + '">' + (i + 1) + '</button>';
    });
    grid.innerHTML = h;
  }
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.disabled = testState._current <= 0;
  if (next) {
    if (testState._current >= testState.questions.length - 1) {
      next.textContent = 'Submit Test';
      next.onclick = () => submitTest();
    } else {
      next.textContent = 'Next →';
      next.onclick = () => gotoQ(testState._current + 1);
    }
  }
}
function gotoQ(i) {
  if (!testState || testState.submitted) return;
  if (i < 0) i = 0;
  if (i > testState.questions.length - 1) i = testState.questions.length - 1;
  testState._current = i;
  renderQuestionArea();
  refreshTestChrome();
}
function reviewHTML() {
  const correct = testState.questions.reduce((s, q, i) => s + (testState.answers[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round(correct / testState.questions.length * 100);
  let h = '<div class="score-panel"><strong>Score: ' + correct + '/' + testState.questions.length + '</strong>';
  h += '<span class="score-pct">' + pct + '%</span>';
  h += '<button class="retry-btn" onclick="retryTest()">Try Again</button></div>';
  h += '<div class="questions-list">';
  testState.questions.forEach((q, i) => {
    const ans = testState.answers[i];
    const ok = ans === q.answer;
    h += '<div class="question-card ' + (ans !== null ? 'answered' : '') + '">';
    h += '<div class="q-header"><span class="q-num">Q' + (i + 1) + '</span>';
    if (q.topic) h += '<span class="q-topic">' + q.topic + '</span>';
    if (testState.flags[i]) h += '<span class="flag-badge">Flagged</span>';
    h += '<span class="result-badge ' + (ok ? 'correct' : 'wrong') + '">' + (ok ? 'Correct' : 'Incorrect') + '</span></div>';
    h += '<p class="q-text">' + (i + 1) + '. ' + q.q + '</p>';
    h += '<div class="act-options">';
    q.options.forEach((opt, oi) => {
      let cls = 'act-option';
      if (oi === q.answer) cls += ' correct';
      if (oi === ans && !ok) cls += ' wrong';
      h += '<div class="' + cls + '"><span class="letter">' + LETTERS[oi] + '</span><span>' + opt + '</span></div>';
    });
    h += '</div>';
    h += '<div class="q-explanation"><strong>Explanation:</strong> ' + q.explanation + '</div>';
    h += '</div>';
  });
  h += '</div>';
  return h;
}
function selectAnswer(qIndex, optionIndex) {
  if (!testState || testState.submitted) return;
  testState.answers[qIndex] = optionIndex;
  if (qIndex === testState._current) renderQuestionArea();
  refreshTestChrome();
}
function submitTest() {
  if (!testState || testState.submitted) return;
  if (testState.timeLimit && testState.remaining <= 0) {
    // auto-submit handled by timer
  } else if (!confirm('Submit test now? You won\'t be able to change answers after submitting.')) {
    return;
  }
  if (testState._timer) clearInterval(testState._timer);
  testState.submitted = true;
  testState.endTime = Date.now();
  const correctCount = testState.answers.filter((a, i) => a === testState.questions[i].answer).length;
  recordTestResult(
    currentSection,
    data[currentSection].categories[currentCategory].name,
    data[currentSection].categories[currentCategory].topics[currentTopic].name,
    correctCount,
    testState.questions.length
  );
  renderTest();
}
function retryTest() {
  endTest();
  const testArea = document.getElementById('testArea');
  if (testArea && typeof renderTestConfigHTML === 'function') {
    testArea.innerHTML = renderTestConfigHTML();
  }
}
function showTab(tab) {
  if (tab === 'learn') endTest();
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });
  const btn = document.querySelector('[data-tab="' + tab + '"]');
  if (btn) btn.classList.add('active');
  const panel = document.getElementById(tab === 'learn' ? 'tabLearn' : 'tabTest');
  if (panel) { panel.classList.add('active'); panel.style.display = 'block'; }
  if (tab === 'test') {
    if (currentSection === 'past tests' || currentSection === 'other links') {
      const ta = document.getElementById('testArea');
      if (ta) ta.innerHTML = '<p class="no-results">Tests are not available for this section.</p>';
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
  const sec = currentSection;
  const cfg = DATA_MANIFEST[sec] && DATA_MANIFEST[sec].test;
  const fullQ = cfg ? cfg.q : 60;
  const fullMin = cfg ? cfg.min : 60;
  const halfQ = cfg ? Math.round(fullQ / 2) : 30;
  const halfMin = cfg ? Math.round(fullMin / 2) : 30;
  return '<div class="test-config">' +
    '<h4>Test Settings</h4>' +
    '<div class="preset-row">' +
      '<button class="preset-btn" onclick="applyPreset(' + fullQ + ',' + fullMin + ',true)">🏁 ' + sectionTestLabel(sec) + ' · ' + fullQ + 'q · ' + fullMin + 'min</button>' +
      '<button class="preset-btn" onclick="applyPreset(' + halfQ + ',' + halfMin + ',false)">Half Length · ' + halfQ + 'q · ' + halfMin + 'min</button>' +
      '<button class="preset-btn" onclick="applyPreset(10,0,false)">Quick · 10q · Untimed</button>' +
    '</div>' +
    '<div class="config-row"><label>Questions: <input type="number" id="testQuestionCount" min="5" max="' + fullQ + '" value="10"></label></div>' +
    '<div class="config-row"><label>Time (minutes, 0 = untimed): <input type="number" id="testTimeLimit" min="0" max="' + fullMin + '" value="0"></label></div>' +
    '<div class="config-row"><label><input type="checkbox" id="testScopeFull"> Full test — mix all topics, ordered easy → hard</label></div>' +
    '<button class="start-test-btn" onclick="startTest()">Start Test</button>' +
    '</div>';
}
function applyPreset(q, min, full) {
  const c = document.getElementById('testQuestionCount');
  const t = document.getElementById('testTimeLimit');
  const s = document.getElementById('testScopeFull');
  if (c) c.value = q;
  if (t) t.value = min;
  if (s) s.checked = full;
}

// ── STEP ANIMATOR ──────────────────
let stepAnimator = null;
function initStepAnimator() {
  stepAnimator = null;
  const area = document.getElementById('explanationArea');
  if (!area) return;
  const steps = area.querySelectorAll('.step-box');
  if (!steps.length) return;

  const controls = document.createElement('div');
  controls.className = 'step-controls';
  controls.innerHTML = `
    <span class="step-label">Steps</span>
    <button class="step-btn" id="stepPrev" title="Previous step">← Prev</button>
    <button class="step-btn primary" id="stepPlay" title="Play / Pause">▶ Play</button>
    <button class="step-btn" id="stepNext" title="Next step">Next →</button>
    <span class="step-counter" id="stepCounter">0 / 0</span>
    <span class="step-label" style="margin-left:.25rem">Speed</span>
    <select class="step-speed" id="stepSpeed">
      <option value="1800">Slow</option>
      <option value="1100" selected>Normal</option>
      <option value="600">Fast</option>
    </select>
    <button class="step-btn" id="stepReset" title="Reset">↺ Reset</button>
  `;
  area.parentElement.insertBefore(controls, area);
  area.classList.add('animating');

  let idx = -1;
  let timer = null;
  let playing = false;
  const update = () => {
    steps.forEach((s, i) => s.classList.toggle('active-step', i === idx));
    document.getElementById('stepCounter').textContent = (idx + 1) + ' / ' + steps.length;
    document.getElementById('stepPrev').disabled = idx <= 0;
    document.getElementById('stepNext').disabled = idx >= steps.length - 1;
    if (idx > -1) steps[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const clear = () => { if (timer) { clearTimeout(timer); timer = null; } };
  const advance = () => {
    if (idx < steps.length - 1) { idx++; update(); schedule(); }
    else stop();
  };
  const schedule = () => {
    clear();
    if (!playing) return;
    const speed = parseInt(document.getElementById('stepSpeed').value || '1100', 10);
    timer = setTimeout(advance, speed);
  };
  const play = () => {
    playing = true;
    document.getElementById('stepPlay').textContent = '⏸ Pause';
    if (idx >= steps.length - 1) { idx = -1; update(); }
    schedule();
  };
  const stop = () => {
    playing = false; clear();
    document.getElementById('stepPlay').textContent = '▶ Play';
  };

  document.getElementById('stepPrev').onclick = () => { stop(); if (idx > 0) idx--; update(); };
  document.getElementById('stepNext').onclick = () => { stop(); if (idx < steps.length - 1) idx++; update(); };
  document.getElementById('stepPlay').onclick = () => playing ? stop() : play();
  document.getElementById('stepReset').onclick = () => { stop(); idx = -1; update(); };

  update();
  stepAnimator = { stop };
}
// ── SECTION QUESTION GENERATOR FACTORY ──
// Question-generator chunks (English/Reading/Science) call this to build their
// section generator. Mirrors the math TopicQuestionGenerator contract:
// generate(topicName, count, level) -> array of {q, options, answer, explanation}.
window.makeSectionGenerator = function (GEN, fallback) {
  'use strict';
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  function generate(topicName, count, level) {
    count = Math.max(1, Math.min(count || 10, 60));
    const tpl = GEN[topicName];
    const gen = (lvl) => (Array.isArray(tpl) ? pick(tpl)(lvl) : (tpl || ((x) => fallback(x, topicName)))(lvl));
    const questions = [];
    const seen = new Set();
    let guard = 0;
    let perLevel;
    if (level === 'easy' || level === 'medium' || level === 'hard') {
      perLevel = [[level, count]];
    } else {
      const easyN = Math.round(count * 0.4);
      const medN = Math.round(count * 0.35);
      perLevel = [['easy', easyN], ['medium', medN], ['hard', count - easyN - medN]];
    }
    for (const [lvl, n] of perLevel) {
      let produced = 0;
      while (produced < n && guard++ < count * 80) {
        const q = gen(lvl);
        if (!q || !q.q || !q.options || q.options.length < 2) continue;
        const key = q.q + '\u0000' + q.options.join('\u0000');
        if (seen.has(key)) continue;
        seen.add(key);
        q.level = lvl;
        questions.push(q);
        produced++;
      }
    }
    const fillLevel = (level === 'easy' || level === 'medium' || level === 'hard') ? level : 'medium';
    while (questions.length < count && guard++ < count * 80) {
      const q = gen(fillLevel);
      const key = q && q.q && q.options ? q.q + '\u0000' + q.options.join('\u0000') : '';
      if (key && !seen.has(key)) {
        seen.add(key);
        q.level = fillLevel;
        questions.push(q);
      }
    }
    return questions;
  }
  return generate;
};

// ═══════════════════════════════════════════╗
// ║  ANALYTICS — localStorage only, private  ║
// ╚══════════════════════════════════════════╝
// No external tracking. Everything lives in the visitor's own browser.
const ANALYTICS_KEY = 'actGenieAnalytics';
function getAnalytics() {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { visits: { count: 0, firstVisit: 0, lastVisit: 0, days: [] }, views: {}, search: {}, tests: {}, timeSpent: {} };
}
function saveAnalytics(a) {
  try { localStorage.setItem(ANALYTICS_KEY, JSON.stringify(a)); } catch (e) {}
}
function recordVisit() {
  const a = getAnalytics();
  const now = Date.now();
  if (!a.visits) a.visits = { count: 0, firstVisit: now, lastVisit: now, days: [] };
  a.visits.count = (a.visits.count || 0) + 1;
  a.visits.firstVisit = a.visits.firstVisit || now;
  a.visits.lastVisit = now;
  const dayKey = new Date().toISOString().slice(0, 10);
  if (!a.visits.days.includes(dayKey)) a.visits.days.push(dayKey);
  saveAnalytics(a);
}
function recordTopicView(section, category, topic) {
  const a = getAnalytics();
  const key = section + '::' + category + '::' + topic;
  a.views[key] = (a.views[key] || 0) + 1;
  saveAnalytics(a);
}
function recordSearchTerm(term) {
  if (term.length < 2) return;
  const a = getAnalytics();
  a.search[term] = (a.search[term] || 0) + 1;
  saveAnalytics(a);
}
function recordTestAnalytics(section, pct) {
  if (!section) return;
  const a = getAnalytics();
  if (!a.tests[section]) a.tests[section] = { count: 0, sum: 0, best: 0 };
  const t = a.tests[section];
  t.count++; t.sum += pct; if (pct > t.best) t.best = pct;
  saveAnalytics(a);
}
function recordPlanSignup() {
  // study-plan waitlist removed
}
// Section time spent — accumulated seconds while a section view is active.
let sectionTime = { section: null, start: 0 };
function trackSectionTime(section) {
  flushSectionTime();
  sectionTime = { section, start: Date.now() };
}
function flushSectionTime() {
  if (!sectionTime.section) return;
  const a = getAnalytics();
  const sec = sectionTime.section;
  a.timeSpent[sec] = (a.timeSpent[sec] || 0) + Math.max(1, Math.round((Date.now() - sectionTime.start) / 1000));
  saveAnalytics(a);
  sectionTime.section = null;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) flushSectionTime(); });
window.addEventListener('beforeunload', flushSectionTime);

function fmtDuration(sec) {
  if (!sec) return '0m';
  if (sec < 60) return sec + 's';
  const m = Math.floor(sec / 60), s = sec % 60;
  return s ? m + 'm ' + s + 's' : m + 'm';
}
function fmtDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
// ── SUPPORT VIEW ──
function renderSupport() {
  main.innerHTML = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>💛 Support ACT Wizard</strong>
    </div>
    <div class="section-header">
      <h2>Support ACT Wizard</h2>
      <p>Donations help keep the project going. A portion of contributions goes
directly toward improving the site. The rest supports the time and effort behind making this resource free and accessible.</p>
    </div>
    <div class="analytics-grid">
      <div class="analytics-card support-card">
        <h4>Buy Me a Coffee</h4>
        <p class="dim">One-time support with no account required.</p>
        <a href="https://buymeacoffee.com/jurrienward" target="_blank" rel="noopener" class="donation-btn bmc"><span class="dn-ico">☕</span>Buy Me a Coffee</a>
      </div>
      <div class="analytics-card support-card">
        <h4>PayPal</h4>
        <p class="dim">Send a one-time donation through your PayPal account.</p>
        <a href="https://paypal.me/jurrienward" target="_blank" rel="noopener" class="donation-btn paypal"><span class="dn-ico">♡</span>Donate via PayPal</a>
      </div>
    </div>
  `;
}
// ── ANALYTICS VIEW ──
function renderAnalytics() {
  const a = getAnalytics();
  const v = a.visits || {};
  const daysSince = v.firstVisit ? Math.max(0, Math.floor((Date.now() - v.firstVisit) / 86400000)) : 0;
  const retention = v.days ? v.days.length : 0;

  const topViews = Object.entries(a.views || {})
    .sort((x, y) => y[1] - x[1]).slice(0, 8)
    .map(([key, n]) => {
      const [section, cat, topic] = key.split('::');
      return `<tr><td><strong>${topic}</strong><span class="dim"> · ${section} · ${cat}</span></td><td class="num">${n}</td></tr>`;
    }).join('') || '<tr><td colspan="2" class="dim">No topics viewed yet.</td></tr>';

  const tests = Object.entries(a.tests || {})
    .filter(([sec]) => sec !== 'science' || isScienceEnabled())
    .map(([sec, t]) => `<tr><td><strong>${sectionTestLabel(sec)}</strong></td><td class="num">${t.count}</td><td class="num">${Math.round(t.sum / t.count)}%</td><td class="num">${t.best}%</td></tr>`)
    .join('') || '<tr><td colspan="4" class="dim">No tests taken yet.</td></tr>';

  const searches = Object.entries(a.search || {})
    .sort((x, y) => y[1] - x[1]).slice(0, 8)
    .map(([term, n]) => `<tr><td><strong>${term.replace(/</g, '&lt;')}</strong></td><td class="num">${n}</td></tr>`)
    .join('') || '<tr><td colspan="2" class="dim">No searches yet.</td></tr>';

  const time = Object.entries(a.timeSpent || {})
    .sort((x, y) => y[1] - x[1])
    .map(([sec, s]) => `<tr><td><strong>${sectionTestLabel(sec)}</strong></td><td class="num">${fmtDuration(s)}</td></tr>`)
    .join('') || '<tr><td colspan="2" class="dim">No time recorded yet.</td></tr>';

  main.innerHTML = `
    <div class="breadcrumb">
      <button onclick="navigate('home')">← Home</button>
      <span>/</span>
      <strong>Local Analytics</strong>
    </div>
    <div class="section-header">
      <h2>📊 Local Analytics</h2>
      <p>Private by design — everything below is stored only in your browser.</p>
    </div>
    <div class="analytics-grid">
      <div class="analytics-card">
        <h4>Retention</h4>
        <div class="kpi-row">
          <div class="kpi"><b>${v.count || 0}</b><span>Visits</span></div>
          <div class="kpi"><b>${retention}</b><span>Active days</span></div>
          <div class="kpi"><b>${daysSince}</b><span>Days since first</span></div>
        </div>
        <p class="dim">First visit: ${fmtDate(v.firstVisit)} · Last visit: ${fmtDate(v.lastVisit)}</p>
        ${daysSince > 0 ? `<p class="dim">Returning visitor: ${retention >= 2 ? '✅ yes' : '—'} (${Math.round(v.count / daysSince * 10) / 10} visits/day)</p>` : ''}
      </div>
      <div class="analytics-card">
        <h4>Average Test Scores</h4>
        <table class="analytics-table">
          <thead><tr><th>Section</th><th>Tests</th><th>Avg</th><th>Best</th></tr></thead>
          <tbody>${tests}</tbody>
        </table>
      </div>
      <div class="analytics-card">
        <h4>Most-Viewed Topics</h4>
        <table class="analytics-table">
          <thead><tr><th>Topic</th><th>Views</th></tr></thead>
          <tbody>${topViews}</tbody>
        </table>
      </div>
      <div class="analytics-card">
        <h4>Common Searches</h4>
        <table class="analytics-table">
          <thead><tr><th>Term</th><th>Count</th></tr></thead>
          <tbody>${searches}</tbody>
        </table>
      </div>
      <div class="analytics-card">
        <h4>Time Spent by Section</h4>
        <table class="analytics-table">
          <thead><tr><th>Section</th><th>Time</th></tr></thead>
          <tbody>${time}</tbody>
        </table>
      </div>
    </div>
  `;
}
function resetAnalytics() {
  try { localStorage.removeItem(ANALYTICS_KEY); } catch (e) {}
  renderAnalytics();
}

// ═══════════════════════════════════════════╗
// ║         MOBILE NAV & SEARCH UI           ║
// ╚══════════════════════════════════════════╝
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');
const searchToggle = document.getElementById('searchToggle');
const searchWrap = document.querySelector('.search-wrap');

function openMobileMenu() {
  if (!mainNav) return;
  mainNav.classList.add('open');
  if (navOverlay) navOverlay.hidden = false;
  setTimeout(() => { if (navOverlay) navOverlay.classList.add('show'); }, 10);
  if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'true'); menuToggle.setAttribute('aria-label', 'Close menu'); }
  document.body.classList.add('no-scroll');
}
function closeMobileMenu() {
  if (!mainNav) return;
  mainNav.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('show');
  if (navOverlay) setTimeout(() => { navOverlay.hidden = true; }, 250);
  if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open menu'); }
  document.body.classList.remove('no-scroll');
}
function toggleMobileMenu() {
  mainNav.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
}
if (menuToggle) menuToggle.addEventListener('click', toggleMobileMenu);
if (navOverlay) navOverlay.addEventListener('click', closeMobileMenu);
if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    const open = searchWrap && searchWrap.classList.toggle('search-open');
    searchToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && searchInput) searchInput.focus();
  });
}

// ═══════════════════════════════════════════╗
// ║            SUPPORT MODAL                 ║
// ╚══════════════════════════════════════════╝
const supportModal = document.getElementById('supportModal');
const supportBtn = document.getElementById('supportBtn');
const supportClose = document.getElementById('supportModalClose');
function openSupportModal() {
  if (supportModal) { supportModal.hidden = false; document.body.classList.add('no-scroll'); }
  const first = supportModal && supportModal.querySelector('a, button');
  if (first) setTimeout(() => first.focus(), 30);
}
function closeSupportModal() {
  if (supportModal) supportModal.hidden = true;
  document.body.classList.remove('no-scroll');
}
if (supportBtn) supportBtn.addEventListener('click', openSupportModal);
if (supportClose) supportClose.addEventListener('click', closeSupportModal);
if (supportModal) supportModal.addEventListener('click', (e) => { if (e.target === supportModal) closeSupportModal(); });

// ── KEYBOARD: ESC closes overlays ──
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeMobileMenu();
  closeSupportModal();
  searchWrap && searchWrap.classList.remove('search-open');
  if (searchToggle) searchToggle.setAttribute('aria-expanded', 'false');
});
// ── KEYBOARD: Ctrl+Shift+A opens the local analytics view ──
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    e.preventDefault();
    navigate('analytics');
  }
});
// #analytics hash opens the dashboard even when already on the page.
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#analytics') navigate('analytics');
});
// ── BOOT ────────────────────────
recordVisit();
if (window.location.hash === '#analytics') navigate('analytics');
else navigate('home');
