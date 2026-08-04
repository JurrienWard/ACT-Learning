// ═══════════════════════════════════════════╗
// ║   ACT SCIENCE QUESTION GENERATORS        ║
// ╚══════════════════════════════════════════╝
// Lazy-loaded together with data-science.js. Produces ACT-style 5-option (A-E)
// questions built from mini data representations: tables, graph descriptions,
// experiment setups, and conflicting-viewpoint passages. Every question is
// generated fresh on demand with randomized data.
//
// These questions follow the real ACT Science question types: data
// representation, research summaries, conflicting viewpoints, and
// interpolation/extrapolation. Pure knowledge-recall items are not used; every
// question gives the information needed to answer it.
//
// The generator keys below MUST match the topic names in data-science.js exactly,
// otherwise every question for that topic falls back to a placeholder.
(function () {
  'use strict';

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

  const q4 = (prompt, correct, distractors, explanation) => {
    let ds = [...new Set(distractors.map(String))].filter(d => d !== String(correct));
    const fillers = ['None of the above', 'It cannot be determined from the data', 'All of the above'];
    let i = 0;
    while (ds.length < 4 && i < fillers.length) {
      const f = fillers[i++];
      if (f !== String(correct) && !ds.includes(f)) ds.push(f);
    }
    const options = shuffle([String(correct), ...ds.slice(0, 4)]);
    return { q: prompt, options, answer: options.indexOf(String(correct)), explanation };
  };

  const miniTable = (headers, rows) => {
    let h = '<table class="data-table"><thead><tr>';
    headers.forEach(x => h += '<th>' + x + '</th>');
    h += '</tr></thead><tbody>';
    rows.forEach(r => { h += '<tr>'; r.forEach(c => h += '<td>' + c + '</td>'); h += '</tr>'; });
    h += '</tbody></table>';
    return h;
  };

  // Short intro passage (like the text that precedes data on the real ACT).
  const intro = txt => '<span class="read-passage">' + txt + '</span>';

  // Inline-SVG figure (bar chart, line graph, etc.). Returns '' if unavailable.
  const fig = (spec) => {
    if (typeof ACTVisuals === 'undefined' || !ACTVisuals) return '';
    try { return ACTVisuals.body(spec) || ''; } catch (e) { return ''; }
  };

  // ── Conflicting-viewpoint scenarios ──
  // Each presents a phenomenon, two hypotheses, shared points, and new evidence.
  const VIEWPOINTS = [
    {
      phenomenon: 'the decline of honeybee colonies',
      scene: 'Some honeybee colonies have collapsed in recent years, and scientists disagree about why.',
      h1: { scientist: 'Dr. Ames', claim: 'neonicotinoid pesticides are the main cause of the collapse' },
      h2: { scientist: 'Dr. Chen', claim: 'habitat loss and disease are the main causes of the collapse' },
      agree: 'honeybee colonies are declining',
      disagree: 'which factor is chiefly responsible',
      evid1: { text: 'Beekeepers report that hives near fields sprayed with neonicotinoids fail at much higher rates than hives elsewhere.', supports: 0 },
      evid2: { text: 'A survey finds that many collapsed hives were far from any treated fields but near fragmented habitats.', supports: 1 }
    },
    {
      phenomenon: 'why some lakes turn green with algae each summer',
      h1: { scientist: 'Dr. Ito', claim: 'fertilizer runoff from nearby farms is the main cause' },
      h2: { scientist: 'Dr. Reyes', claim: 'warmer summer water temperatures are the main cause' },
      agree: 'the algae blooms are a real and growing problem',
      disagree: 'what drives the blooms',
      evid1: { text: 'Algae blooms appear most often in lakes surrounded by fertilized fields, even in cool years.', supports: 0 },
      evid2: { text: 'In lakes with no farming nearby, blooms still appear during unusually warm summers.', supports: 1 }
    },
    {
      phenomenon: 'how the Grand Canyon was carved',
      h1: { scientist: 'Dr. Patel', claim: 'the canyon was carved gradually by the Colorado River over millions of years' },
      h2: { scientist: 'Dr. Olsen', claim: 'a few catastrophic flood events cut most of the canyon quickly' },
      agree: 'water played a central role in carving the canyon',
      disagree: 'whether the carving was gradual or catastrophic',
      evid1: { text: 'Rocks in the canyon show many flat, layered steps that match the slow, even work of a steady river.', supports: 0 },
      evid2: { text: 'Certain gravel deposits high on the canyon walls appear to have been laid down in single violent surges.', supports: 1 }
    }
  ];

  const sceneHTML = s =>
    '<span class="read-passage"><strong>' + s.h1.scientist + ' and ' + s.h2.scientist + '</strong> are studying ' + s.phenomenon + '. '
    + s.h1.scientist + ' argues that ' + s.h1.claim + '. '
    + s.h2.scientist + ' argues that ' + s.h2.claim + '.</span><br><br>';

  const VIEW = VIEWPOINTS.map(s => ({
    understandA: () => q4(sceneHTML(s) + 'According to the passage, ' + s.h1.scientist + '\'s hypothesis is that…', s.h1.claim, [s.h2.claim, s.disagree, 'the problem does not exist.'], s.h1.scientist + '\'s hypothesis is stated directly in the passage.'),
    understandB: () => q4(sceneHTML(s) + 'According to the passage, ' + s.h2.scientist + ' most likely believes that…', s.h2.claim, [s.h1.claim, s.agree, 'the problem does not exist.'], s.h2.scientist + '\'s hypothesis is stated directly in the passage.'),
    disagree: () => q4(sceneHTML(s) + 'The two scientists would most strongly disagree about…', s.disagree, [s.agree, 'whether any change is occurring.', 'how to measure the study area.'], 'The disagreement is about the cause, not about whether the change is real.'),
    agree: () => q4(sceneHTML(s) + 'With which statement would both scientists most likely agree?', s.agree, [s.h1.claim, s.h2.claim, s.disagree], 'Both hypotheses explain the same observed phenomenon, so the shared point is what both accept.'),
    evidence1: () => q4(sceneHTML(s) + 'New evidence is reported: "' + s.evid1.text + '"<br>Which scientist\'s hypothesis does this evidence best support?', s.evid1.supports === 0 ? s.h1.scientist : s.h2.scientist, [s.h1.scientist, s.h2.scientist, 'Neither scientist.'].filter((x, i, a) => a.indexOf(x) === i), 'The new evidence points to the factor that the supported scientist identifies.'),
    evidence2: () => q4(sceneHTML(s) + 'New evidence is reported: "' + s.evid2.text + '"<br>Which scientist\'s hypothesis does this evidence best support?', s.evid2.supports === 0 ? s.h1.scientist : s.h2.scientist, [s.h1.scientist, s.h2.scientist, 'Neither scientist.'].filter((x, i, a) => a.indexOf(x) === i), 'The new evidence points to the factor that the supported scientist identifies.')
  }));
  const v = views => views[Math.floor(Math.random() * views.length)];

  const GEN = {};

  // ── Data Representation ──
  GEN['Reading Graphs & Charts'] = [
    () => {
      const base = pick([5, 8, 12]);
      const step = pick([2, 3, 4]);
      const rows = [0, 1, 2, 3, 4].map(t => [t + ' min', base + t * step + ' m/s']);
      const target = pick([1, 2, 3]);
      return q4(intro('A researcher recorded the speed of a runner every minute during a test. The results are shown below.') + '<br>' + miniTable(['Time', 'Speed'], rows) + 'According to the data, the speed at ' + target + ' minutes is…',
        base + target * step + ' m/s',
        [(base + (target + 1) * step) + ' m/s', (base + (target - 1) * step) + ' m/s', (base + target * step + 1) + ' m/s'],
        'Read across the row for ' + target + ' min: the speed is ' + (base + target * step) + ' m/s.');
    },
    () => {
      const a = pick([20, 30, 40]);
      const diff = pick([10, 15, 20]);
      const barFig = fig({ type: 'bar', labels: ['Sample A', 'Sample B'], values: [a, a + diff], gold: true });
      return q4(intro('A bar chart compares the mass of two samples taken from the same site.') + '<br>' + barFig + 'How much more does Sample B weigh than Sample A?',
        diff + ' g',
        [(a + diff) + ' g', a + ' g', (diff + 5) + ' g'],
        'Difference = ' + (a + diff) + ' - ' + a + ' = ' + diff + ' g.');
    },
    () => {
      const x0 = pick([0, 2, 4]);
      const y0 = pick([10, 20, 30]);
      const slope = pick([3, 4, 5]);
      const target = x0 + pick([1, 2, 3, 4]);
      const lineFig = fig({ type: 'line', pts: [[x0, y0], [target, y0 + (target - x0) * slope], [x0 + 6, y0 + (x0 + 6 - x0) * slope]], fit: { m: slope, b: y0 - slope * x0, dash: true }, xMin: 0, xMax: x0 + 6, yMin: 0, yMax: y0 + 30, xLabel: 'Weeks', yLabel: 'Height (cm)' });
      return q4(intro('A botanist grew a seedling in a greenhouse and plotted its height on a line graph.') + '<br>' + lineFig + 'Based on the graph, the height at ' + target + ' weeks is…',
        (y0 + (target - x0) * slope) + ' cm',
        [(y0 + (target - x0) * slope + slope) + ' cm', (y0 + (target - x0) * slope - slope) + ' cm', (y0 + (target - x0) * slope * 2) + ' cm'],
        'Follow the rising line: ' + y0 + ' + ' + ((target - x0) * slope) + ' = ' + (y0 + (target - x0) * slope) + ' cm.');
    }
  ];

  GEN['Reading Tables'] = [
    () => {
      const crops = ['Wheat', 'Corn', 'Rice', 'Soy'];
      const yields = crops.map(() => randInt(20, 80));
      const target = pick(crops);
      const idx = crops.indexOf(target);
      return q4(intro('A farm study recorded the yield of four crops grown on identical plots.') + '<br>' + miniTable(['Crop', 'Yield (kg/m^2)'], crops.map((c, i) => [c, yields[i]])) + 'What is the yield of ' + target + '?',
        yields[idx] + ' kg/m^2',
        [(yields[idx] + 5) + ' kg/m^2', (yields[idx] - 5) + ' kg/m^2', (Math.min(...yields)) + ' kg/m^2'],
        'Find the row for ' + target + ': its yield is ' + yields[idx] + ' kg/m^2.');
    },
    () => {
      const metals = ['Fe', 'Cu', 'Zn', 'Pb'];
      const dens = metals.map(() => (randInt(20, 90) / 10).toFixed(1));
      const target = pick(metals);
      const idx = metals.indexOf(target);
      return q4(intro('A chemist measured the density of four metals. The results are tabulated below.') + '<br>' + miniTable(['Metal', 'Density (g/cm^3)'], metals.map((m, i) => [m, dens[i]])) + 'What is the density of ' + target + '?',
        dens[idx] + ' g/cm^3',
        [(parseFloat(dens[idx]) + 0.5).toFixed(1) + ' g/cm^3', (parseFloat(dens[idx]) - 0.5).toFixed(1) + ' g/cm^3', dens[(idx + 1) % 4] + ' g/cm^3'],
        'Read the ' + target + ' row: ' + dens[idx] + ' g/cm^3.');
    },
    () => {
      const solutions = ['Solution 1', 'Solution 2', 'Solution 3', 'Solution 4'];
      const phs = solutions.map(() => randInt(1, 13));
      const target = pick(solutions);
      const idx = solutions.indexOf(target);
      return q4(intro('A student measured the pH of four household solutions with a probe.') + '<br>' + miniTable(['Solution', 'pH'], solutions.map((s, i) => [s, phs[i]])) + 'According to the table, what is the pH of ' + target + '?',
        phs[idx] + '',
        [(phs[idx] + 1) + '', (phs[idx] - 1) + '', phs[(idx + 1) % 4] + ''],
        'Read the row for ' + target + ': pH ' + phs[idx] + '.');
    }
  ];

  GEN['Interpolation & Extrapolation'] = [
    () => {
      const x0 = pick([0, 5, 10]);
      const y0 = pick([20, 30, 40]);
      const slope = pick([2, 3, 4]);
      const target = x0 + pick([5, 10, 15]);
      const lineFig = fig({ type: 'line', pts: [[x0, y0], [x0 + 10, y0 + 10 * slope]], fit: { m: slope, b: y0 - slope * x0, dash: true }, xMin: 0, xMax: x0 + 10, yMin: 0, yMax: y0 + 10 * slope + 10, xLabel: 'Time (min)', yLabel: 'Temp (°C)' });
      return q4(intro('A thermometer in a reaction vessel was read at regular intervals, and the temperature rose at a steady rate.') + '<br>' + lineFig + 'What is the temperature at ' + target + ' min?',
        (y0 + (target - x0) * slope) + ' °C',
        [(y0 + (target - x0) * slope + slope) + ' °C', (y0 + (target - x0) * slope - slope) + ' °C', (y0 + (target - x0) * slope * 2) + ' °C'],
        'Interpolate along the trend: ' + y0 + ' + ' + ((target - x0) * slope) + ' = ' + (y0 + (target - x0) * slope) + ' °C.');
    },
    () => {
      const y0 = pick([10, 20, 30]);
      const rate = pick([3, 4, 5]);
      const target = pick([15, 20, 25]);
      const lineFig = fig({ type: 'line', pts: [[0, y0], [10, y0 + 10 * rate]], fit: { m: rate, b: y0, dash: true }, xMin: 0, xMax: target + 2, yMin: 0, yMax: y0 + rate * target + 10, xLabel: 'Weeks', yLabel: 'Height (cm)' });
      return q4(intro('A student measured the height of a bean plant each week and found it growing at a steady rate.') + '<br>' + lineFig + 'If the trend continues, how tall will it be in ' + target + ' weeks?',
        (y0 + rate * target) + ' cm',
        [(y0 + target) + ' cm', (y0 + rate * target + 1) + ' cm', (y0 * target) + ' cm'],
        'Extrapolate: ' + y0 + ' + ' + rate + ' * ' + target + ' = ' + (y0 + rate * target) + ' cm.');
    },
    () => {
      const base = pick([50, 100, 150]);
      const half = pick([10, 20, 30]);
      return q4(intro('A physics lab measured the mass of a radioactive sample every few days and recorded the values below.') + '<br>The sample starts with ' + base + ' g and decays to ' + (base / 2) + ' g after ' + half + ' days.<br>Based on this trend, about how much remains after ' + (2 * half) + ' days?',
        (base / 4) + ' g',
        [(base / 2) + ' g', (base / 8) + ' g', (base - 40) + ' g'],
        'Half-life: after another ' + half + ' days the ' + (base / 2) + ' g would halve again to ' + (base / 4) + ' g.');
    }
  ];

  GEN['Identifying Trends & Patterns'] = [
    () => {
      const direct = Math.random() < 0.5;
      const vals = [10, 20, 30, 40].map(t => direct ? t * 2 : 80 - t * 2);
      const pair = direct
        ? ['As temperature increases, reaction rate increases.', 'As temperature increases, reaction rate decreases.']
        : ['As temperature increases, reaction rate decreases.', 'As temperature increases, reaction rate increases.'];
      const trendFig = fig({ type: 'line', pts: [10, 20, 30, 40].map((t, i) => [t, vals[i]]), fit: { m: direct ? 2 : -2, b: direct ? 0 : 80, dash: true }, xMin: 5, xMax: 45, yMin: 0, yMax: 85, xLabel: 'Temperature (°C)', yLabel: 'Rate' });
      return q4(intro('A chemist heated a reaction and measured its rate at several temperatures.') + '<br>' + trendFig + 'Which statement best describes the trend shown?',
        pair[0],
        [pair[1], 'Temperature and rate are unrelated.', 'The rate stays constant as temperature rises.'],
        'As the temperature column rises, the rate column ' + (direct ? 'also rises (direct relationship).' : 'falls (inverse relationship).'));
    },
    () => {
      const samples = ['A', 'B', 'C', 'D'];
      const mass = samples.map(() => randInt(10, 90));
      const vol = samples.map(() => randInt(5, 45));
      const dens = samples.map((s, i) => (mass[i] / vol[i]).toFixed(1));
      const maxDen = Math.max(...dens.map(Number));
      const minDen = Math.min(...dens.map(Number));
      return q4(intro('Students in a lab measured the mass and volume of four samples to find their density.') + '<br>' + miniTable(['Sample', 'Mass (g)', 'Volume (cm^3)', 'Density (g/cm^3)'], samples.map((s, i) => [s, mass[i], vol[i], dens[i]])) + 'Which sample has the greatest density?',
        'Sample ' + samples[dens.indexOf(String(maxDen))],
        ['Sample ' + samples[dens.indexOf(String(minDen))], 'The sample with the largest mass', 'The sample with the largest volume'],
        'Density = mass / volume. The sample with the highest density value has the largest mass-to-volume ratio.');
    }
  ];

  // ── Research Summaries ──
  GEN['Experimental Design'] = [
    () => {
      const indep = pick(['the amount of fertilizer', 'the water temperature', 'the light intensity']);
      const dep = pick(['plant height', 'growth rate', 'total yield']);
      return q4(intro('A student set up four identical trays of seedlings. Each tray received a different ' + indep + ' while all other conditions were kept the same. After three weeks the student measured ' + dep + ' in each tray.')
        + '<br>Which variable is the independent variable in this experiment?',
        'The ' + indep,
        ['The ' + dep, 'The type of tray', 'The number of days'],
        'The independent variable is what the student deliberately changes from tray to tray.');
    },
    () => {
      const dep = pick(['the mass of the pellet', 'the time to dissolve', 'the final temperature']);
      const indep = pick(['the starting temperature', 'the surface area', 'the concentration']);
      return q4(intro('A student drops a tablet into warm water and measures ' + dep + ' while changing ' + indep + ' in each trial.')
        + '<br>Which should the student keep constant between trials?',
        'Everything except the ' + indep,
        ['The ' + indep, 'The result being measured', 'The color of the water'],
        'A fair test changes only the independent variable and holds all other conditions constant.');
    },
    () => {
      return q4(intro('In a study of fertilizer, two groups of plants receive the same amount of water and light, but Group 1 receives a fertilizer and Group 2 receives none.')
        + '<br>Which group is the control group?',
        'Group 2, which receives no fertilizer',
        ['Group 1, which receives fertilizer', 'Both groups', 'The group with more sunlight'],
        'The control group is the baseline that receives no treatment.');
    }
  ];

  GEN['Comparing Experiments'] = [
    () => {
      const v1 = pick(['temperature', 'light', 'pressure']);
      const v2 = pick(['humidity', 'wind speed', 'particle size']);
      return q4(intro('Experiment 1 measures how quickly a reaction occurs at room temperature. Experiment 2 is identical except that it measures the reaction at a higher ' + v1 + '.')
        + '<br>What is the purpose of Experiment 2?',
        'To test how ' + v1 + ' affects the reaction time',
        ['To repeat Experiment 1 exactly.', 'To test how ' + v2 + ' affects the result.', 'To show that ' + v2 + ' is unimportant.'],
        'The only variable changed between the two experiments is ' + v1 + ', so that is what Experiment 2 tests.');
    },
    () => {
      const r1 = pick([2, 3, 5]);
      const r2 = r1 * pick([2, 3]);
      return q4(intro('Two studies measured the growth of the same yeast strain under identical conditions. Study 1 reported a growth rate of ' + r1 + ' cells/hour, and Study 2 reported ' + r2 + ' cells/hour.')
        + '<br>If the two studies produced consistent results, the findings would be…',
        'more reliable',
        ['less reliable', 'invalid', 'completely unrelated'],
        'Repeating an experiment and getting consistent results makes the conclusion more trustworthy.');
    }
  ];

  GEN['Hypothesis Support'] = [
    () => {
      const rows = [
        ['6 hours', pick([10, 12, 14]) + ' cm'],
        ['8 hours', pick([15, 17, 19]) + ' cm'],
        ['10 hours', pick([20, 22, 24]) + ' cm']
      ];
      return q4(intro('A hypothesis states that "plants given more sunlight each day grow taller." A student grew seedlings under three amounts of daily light and measured average height after two weeks.')
        + '<br>' + miniTable(['Daily light', 'Average height'], rows)
        + 'The hypothesis is best described as…',
        'supported by the results',
        ['refuted by the results', 'unrelated to the results', 'proven beyond all doubt'],
        'Plants given more light grew taller, matching the prediction, so the hypothesis is supported.');
    },
    () => {
      const rows = [
        ['10 °C', '40 s'],
        ['20 °C', '25 s'],
        ['30 °C', '15 s']
      ];
      return q4(intro('A hypothesis states that "higher temperatures cause a tablet to dissolve faster." A student timed how long a tablet took to dissolve at three temperatures.')
        + '<br>' + miniTable(['Temperature', 'Dissolving time'], rows)
        + 'According to the data, the hypothesis is…',
        'supported by the results',
        ['refuted by the results', 'not testable from the data', 'completely disproven'],
        'The dissolving time falls as temperature rises, matching the prediction, so the hypothesis is supported.');
    },
    () => {
      const rows = [
        ['No fertilizer', 'low'],
        ['Low fertilizer', 'medium'],
        ['High fertilizer', 'high']
      ];
      return q4(intro('A hypothesis states that "adding fertilizer increases plant yield." The table shows the yield for three fertilizer levels.')
        + '<br>' + miniTable(['Fertilizer level', 'Yield'], rows)
        + 'Which result would most weaken the hypothesis?',
        'A high yield with no fertilizer and a low yield with high fertilizer',
        ['Yield rising as fertilizer increases.', 'Medium yield at the medium level.', 'High yield with high fertilizer.'],
        'Weakening evidence is the opposite of the prediction: fertilizer would not raise the yield.');
    }
  ];

  // ── Conflicting Viewpoints ──
  GEN['Understanding Multiple Hypotheses'] = [
    () => v(VIEW).understandA(),
    () => v(VIEW).understandB(),
    () => v(VIEW).disagree()
  ];

  GEN['Identifying Agreement & Disagreement'] = [
    () => v(VIEW).agree(),
    () => v(VIEW).disagree()
  ];

  GEN['New Evidence Questions'] = [
    () => v(VIEW).evidence1(),
    () => v(VIEW).evidence2()
  ];

  // ── Background-knowledge topics (data-driven, NOT recall) ──
  // These topics used to ask pure recall questions ("Which organelle produces
  // energy?"). The real ACT Science never does that: it always gives the data.
  // Each of these now presents a themed table or graph and asks a data-reading
  // question, so no outside knowledge is needed.

  GEN['Cell Structure'] = [
    () => {
      const table = [
        ['Mitochondrion', 'energy production'],
        ['Ribosome', 'protein assembly'],
        ['Nucleus', 'storing genetic instructions'],
        ['Cell membrane', 'controlling what enters and leaves']
      ];
      const target = pick(table);
      return q4('The table lists the primary function of several cell structures.<br>' + miniTable(['Structure', 'Primary function'], table) + 'According to the table, the structure whose primary function is "' + target[1] + '" is the…',
        target[0],
        table.filter(r => r !== target).map(r => r[0]),
        'Find the row whose function matches the question and read the structure name.');
    },
    () => {
      const data = [
        ['Plant cell', 'yes', 'yes'],
        ['Animal cell', 'yes', 'no'],
        ['Bacterium', 'no', 'no']
      ];
      const target = pick(data);
      return q4('A microscope experiment classified three cells by whether they have a nucleus and whether they have chloroplasts.<br>' + miniTable(['Cell type', 'Has nucleus?', 'Has chloroplasts?'], data) + 'According to the data, ' + target[0] + ' has…',
        target[1] === 'yes' ? 'a nucleus' : 'no nucleus',
        [target[1] === 'yes' ? 'no nucleus' : 'a nucleus', 'chloroplasts', 'neither a nucleus nor chloroplasts'],
        'Read the ' + target[0] + ' row: nucleus = ' + target[1] + ', chloroplasts = ' + target[2] + '.');
    }
  ];

  GEN['DNA, Genes & Proteins'] = [
    () => {
      const table = [
        ['DNA', 'stores the genetic instructions'],
        ['mRNA', 'carries a copy of a gene to the ribosome'],
        ['Ribosome', 'assembles the protein'],
        ['Protein', 'carries out cell functions']
      ];
      const target = pick(table);
      return q4('The table traces the flow of information in a cell.<br>' + miniTable(['Molecule', 'Role'], table) + 'According to the table, the molecule whose role is to "' + target[1] + '" is…',
        target[0],
        table.filter(r => r !== target).map(r => r[0]),
        'Match the described role to the molecule in the table.');
    },
    () => {
      const n = pick([10, 20, 30, 40]);
      return q4('A DNA segment contains the sequence A-T-G-C repeated in groups of three bases, called codons. A particular segment contains ' + n + ' codons.<br>How many bases are in the segment?',
        (n * 3) + ' bases',
        [(n * 2) + ' bases', (n + 3) + ' bases', n + ' bases'],
        'Each codon is 3 bases, so ' + n + ' codons = ' + (n * 3) + ' bases.');
    }
  ];

  GEN['Ecology & Ecosystems'] = [
    () => {
      const years = [2018, 2019, 2020, 2021];
      const counts = years.map(() => randInt(40, 90));
      const a = counts[0];
      const b = counts[counts.length - 1];
      return q4('A park ranger counted a bird species each spring.<br>' + miniTable(['Year', 'Birds counted'], years.map((y, i) => [y + '', counts[i] + ''])) + 'From 2018 to 2021 the population most nearly…',
        b > a ? 'increased.' : 'decreased.',
        [b > a ? 'decreased.' : 'increased.', 'stayed exactly the same.', 'was highest in the middle year.'],
        'Compare the first and last years: the count went from ' + a + ' to ' + b + '.');
    },
    () => {
      const table = [
        ['Grass', 'producer'],
        ['Grasshopper', 'primary consumer'],
        ['Frog', 'secondary consumer'],
        ['Hawk', 'tertiary consumer']
      ];
      const target = pick(table);
      return q4('The table shows the feeding level of four organisms in a food chain.<br>' + miniTable(['Organism', 'Feeding level'], table) + 'According to the table, the organism at the "' + target[1] + '" level is the…',
        target[0],
        table.filter(r => r !== target).map(r => r[0]),
        'Read the row that matches the feeding level described.');
    }
  ];

  GEN['States of Matter'] = [
    () => {
      const table = [
        ['Water', '0', '100'],
        ['Ethanol', '-114', '78'],
        ['Mercury', '-39', '357']
      ];
      const target = pick(table);
      return q4('The table gives the melting and boiling points of three substances.<br>' + miniTable(['Substance', 'Melting point (°C)', 'Boiling point (°C)'], table) + 'According to the table, ' + target[0] + ' is a liquid between…',
        target[1] + ' °C and ' + target[2] + ' °C',
        [target[2] + ' °C and ' + target[1] + ' °C', '0 °C and 100 °C', 'the boiling point and 0 °C'],
        'A liquid exists between the melting point and the boiling point of the substance.');
    },
    () => {
      const order = pick([
        { seq: 'solid → liquid → gas', name: 'melting, then boiling' },
        { seq: 'gas → liquid → solid', name: 'condensing, then freezing' },
        { seq: 'liquid → gas', name: 'boiling' }
      ]);
      return q4('A substance changes state as shown by the arrow diagram: ' + order.seq + '.<br>This sequence of changes is best described as…',
        order.name,
        ['melting only', 'freezing, then melting', 'a temperature decrease throughout'],
        'Follow the diagram: each arrow names the change from one state to the next.');
    }
  ];

  GEN['pH Scale'] = [
    () => {
      const table = [
        ['Lemon juice', '2'],
        ['Pure water', '7'],
        ['Baking soda water', '9'],
        ['Household ammonia', '12']
      ];
      const target = pick(table);
      const ph = parseInt(target[1], 10);
      const phFig = fig({ type: 'ph', value: ph });
      return q4('The pH of four solutions is shown.<br>' + miniTable(['Solution', 'pH'], table) + phFig + 'According to the table, ' + target[0] + ' (pH ' + ph + ') is best classified as…',
        ph < 7 ? 'acidic.' : (ph === 7 ? 'neutral.' : 'basic.'),
        [ph < 7 ? 'basic.' : (ph === 7 ? 'acidic.' : 'neutral.'), 'a gas.', 'a solid at room temperature.'],
        'On the pH scale, values below 7 are acidic, 7 is neutral, and values above 7 are basic.');
    },
    () => {
      const a = pick([2, 3, 4]);
      const b = a + 1;
      return q4('Two solutions are tested with pH paper. Solution A has a pH of ' + a + ' and Solution B has a pH of ' + b + '.<br>Compared with Solution B, Solution A is…',
        (b - a === 1 ? '10 times more acidic.' : '100 times more acidic.'),
        [(b - a === 1 ? '10 times more basic.' : '100 times more basic.'), 'exactly the same acidity.', 'about 2 times more acidic.'],
        'Each pH unit is a 10-fold change, so a one-unit difference is a 10× change.');
    }
  ];

  GEN['Reaction Rates'] = [
    () => {
      const table = [
        ['Low', '45 s'],
        ['Medium', '30 s'],
        ['High', '18 s']
      ];
      return q4('A student measured how long a reaction takes at three temperatures.<br>' + miniTable(['Temperature', 'Reaction time'], table) + 'According to the data, as temperature increases, the reaction time…',
        'decreases, so the reaction is faster.',
        ['increases, so the reaction is slower.', 'stays the same.', 'cannot be compared from the data.'],
        'Higher temperature means a shorter time, so the reaction happens faster.');
    },
    () => {
      const table = [
        ['Powder', '12 s'],
        ['Small chunks', '28 s'],
        ['Large piece', '55 s']
      ];
      return q4('The table shows how the surface area of a solid affects how fast it reacts.<br>' + miniTable(['Form of solid', 'Reaction time'], table) + 'Which conclusion is best supported by the data?',
        'More surface area makes the reaction faster.',
        ['Less surface area makes the reaction faster.', 'Surface area has no effect on the rate.', 'The large piece reacts fastest.'],
        'The powder, with the most surface area, finishes in the shortest time.');
    }
  ];

  GEN['Density & Buoyancy'] = [
    () => {
      const objects = [
        ['Cork', '2', '0.2'],
        ['Wood', '20', '0.8'],
        ['Rock', '75', '1.5'],
        ['Iron', '60', '2.4']
      ];
      const target = pick(objects);
      const dens = parseFloat(target[2]);
      return q4('The mass and volume of four objects are listed, along with the density of water (1.0 g/cm³).<br>' + miniTable(['Object', 'Mass (g)', 'Density (g/cm³)'], objects) + 'In water, ' + target[0] + ' will most likely…',
        dens < 1.0 ? 'float.' : 'sink.',
        [dens < 1.0 ? 'sink.' : 'float.', 'remain suspended at mid-depth.', 'dissolve completely.'],
        'An object denser than water sinks; an object less dense than water floats.');
    },
    () => {
      const m = pick([20, 30, 40]);
      const vol = pick([5, 10]);
      return q4('An object has a mass of ' + m + ' g and a volume of ' + vol + ' cm³.<br>What is its density?',
        (m / vol) + ' g/cm³',
        [(m * vol) + ' g/cm³', (m + vol) + ' g/cm³', (m / vol + 1) + ' g/cm³'],
        'Density = mass ÷ volume = ' + m + ' ÷ ' + vol + ' = ' + (m / vol) + ' g/cm³.');
    }
  ];

  GEN['Energy'] = [
    () => {
      const objects = [
        ['A', '2', '3'],
        ['B', '4', '3'],
        ['C', '2', '6']
      ];
      const target = pick(objects);
      const m = parseInt(target[1], 10);
      const s = parseInt(target[2], 10);
      const ke = 0.5 * m * s * s;
      return q4('The kinetic energy of a moving object is ½mv². The table lists the mass and speed of three objects.<br>' + miniTable(['Object', 'Mass (kg)', 'Speed (m/s)'], objects) + 'According to the formula, the kinetic energy of object ' + target[0] + ' is…',
        ke + ' J',
        [(ke + 1) + ' J', (ke - 1) + ' J', (2 * ke) + ' J'],
        'KE = ½ × ' + m + ' × ' + s + '² = ' + ke + ' J.');
    },
    () => {
      const table = [
        ['Compressed spring', 'stored elastic energy'],
        ['Battery', 'stored chemical energy'],
        ['Moving car', 'kinetic energy'],
        ['Lifted weight', 'gravitational potential energy']
      ];
      const target = pick(table);
      return q4('The table matches each example with its main energy form.<br>' + miniTable(['Example', 'Main energy form'], table) + 'According to the table, the example that stores energy in the form of "' + target[1] + '" is…',
        target[0],
        table.filter(r => r !== target).map(r => r[0]),
        'Match the energy form in the question to the example row in the table.');
    }
  ];

  GEN['Forces & Motion'] = [
    () => {
      const cases = [
        ['1', '2', '2'],
        ['2', '3', '6'],
        ['3', '4', '12'],
        ['4', '2', '8']
      ];
      const target = pick(cases);
      return q4('The table shows the force needed to accelerate objects of different masses (F = m × a).<br>' + miniTable(['Mass (kg)', 'Acceleration (m/s²)', 'Force (N)'], cases) + 'According to the table, an object with mass ' + target[0] + ' kg and acceleration ' + target[1] + ' m/s² needs a force of…',
        target[2] + ' N',
        [cases.map(c => c[2]).filter(f => f !== target[2]).map(f => f + ' N')[0], (parseInt(target[2], 10) + 1) + ' N', (parseInt(target[2], 10) - 1) + ' N'],
        'F = ' + target[0] + ' × ' + target[1] + ' = ' + target[2] + ' N.');
    },
    () => {
      const table = [
        ['Push the cart forward', 'apply a force in the direction of motion'],
        ['Stop the cart', 'apply a force opposite the direction of motion'],
        ['Turn the cart', 'apply a force at an angle to the motion']
      ];
      const target = pick(table);
      return q4('The table lists actions and the forces that produce them.<br>' + miniTable(['Action', 'Force needed'], table) + 'According to the table, to "' + target[0] + '" you must…',
        target[1],
        table.filter(r => r !== target).map(r => r[1]),
        'Read the row for the action to find the force description.');
    }
  ];

  GEN['Plate Tectonics'] = [
    () => {
      const table = [
        ['Convergent', 'mountains and deep trenches'],
        ['Divergent', 'new ocean crust and ridges'],
        ['Transform', 'earthquakes along a sliding fault']
      ];
      const target = pick(table);
      return q4('The table summarizes the features produced at three plate-boundary types.<br>' + miniTable(['Boundary type', 'Feature produced'], table) + 'According to the table, the boundary that produces "' + target[1] + '" is…',
        target[0],
        table.filter(r => r !== target).map(r => r[0]),
        'Match the described feature to the boundary type in the table.');
    },
    () => {
      const table = [
        ['Continental-continental', 'mountains'],
        ['Oceanic-oceanic', 'trenches and island arcs'],
        ['Oceanic-continental', 'volcanoes on the coast']
      ];
      const target = pick(table);
      return q4('The table shows what forms where two plates collide.<br>' + miniTable(['Collision type', 'Result'], table) + 'According to the table, a "' + target[0] + '" collision produces…',
        target[1],
        table.filter(r => r !== target).map(r => r[1]),
        'Read the row for the collision type to find the result.');
    }
  ];

  GEN['Greenhouse Effect'] = [
    () => {
      const table = [
        ['Water vapor', '330'],
        ['Carbon dioxide', '420'],
        ['Methane', '1.9'],
        ['Nitrous oxide', '0.3']
      ];
      const target = pick(table);
      return q4('The table lists the concentration of several greenhouse gases in the atmosphere.<br>' + miniTable(['Gas', 'Concentration (ppm)'], table) + 'According to the table, the greenhouse gas present at the highest concentration is…',
        table[table.map(r => parseFloat(r[1])).indexOf(Math.max(...table.map(r => parseFloat(r[1]))))][0],
        [table[table.map(r => parseFloat(r[1])).indexOf(Math.min(...table.map(r => parseFloat(r[1]))))][0], target[0], 'none of the listed gases'],
        'Compare the concentration column and pick the largest value.');
    },
    () => {
      const rows = [
        ['1950', '310'],
        ['1970', '325'],
        ['1990', '355'],
        ['2020', '415']
      ];
      return q4('The table shows the measured CO₂ concentration in parts per million over time.<br>' + miniTable(['Year', 'CO₂ (ppm)'], rows) + 'Which statement is best supported by the data?',
        'The CO₂ concentration has steadily risen over the period shown.',
        ['The CO₂ concentration has steadily fallen.', 'The CO₂ concentration changed very little.', 'The CO₂ concentration was highest in 1950.'],
        'Reading down the column, each decade shows a higher CO₂ value.');
    }
  ];

  GEN['The Solar System'] = [
    () => {
      const table = [
        ['Mercury', '0.4', '88'],
        ['Venus', '0.7', '225'],
        ['Earth', '1.0', '365'],
        ['Mars', '1.5', '687']
      ];
      const target = pick(table);
      return q4('The table lists the average distance from the Sun and the orbital period of four planets.<br>' + miniTable(['Planet', 'Distance from Sun (AU)', 'Orbital period (days)'], table) + 'According to the table, ' + target[0] + ' orbits the Sun in…',
        target[2] + ' days',
        [table.filter(r => r[0] !== target[0]).map(r => r[2] + ' days')[0], (parseInt(target[2], 10) + 30) + ' days', (parseInt(target[2], 10) - 30) + ' days'],
        'Read the row for ' + target[0] + ' to find its orbital period.');
    },
    () => {
      const table = [
        ['Mercury', '0.4'],
        ['Venus', '0.7'],
        ['Earth', '1.0'],
        ['Mars', '1.5']
      ];
      return q4('The table lists the distance of the four inner planets from the Sun.<br>' + miniTable(['Planet', 'Distance from Sun (AU)'], table) + 'The pattern in the table supports the conclusion that…',
        'the planets closest to the Sun orbit it the most quickly.',
        ['distance from the Sun has no effect on a planet.', 'Mars is closer to the Sun than Earth.', 'Venus is the outermost planet listed.'],
        'The nearest planet, Mercury, has the shortest orbital period shown in the data.');
    }
  ];

  const fallback = (level, topicName) => q4(
    'Which choice best describes what the data show about "' + topicName + '"?',
    'The correct answer is read directly from the data presented.',
    ['This choice misreads the values in the table.', 'This choice reverses the trend in the data.', 'This choice adds information that is not shown.'],
    'Re-read the passage and the table, then match the answer to the values shown.'
  );

  window.SectionQuestionGenerator = window.SectionQuestionGenerator || {};
  window.SectionQuestionGenerator.science = window.makeSectionGenerator(GEN, fallback);
})();