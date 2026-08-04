// ═══════════════════════════════════════════╗
// ║   ACT READING QUESTION GENERATORS        ║
// ╚══════════════════════════════════════════╝
// Lazy-loaded together with data-reading.js. Produces ACT-style 5-option (A-E)
// questions tied to realistic mini-passages (150–250 words) across the four ACT
// Reading genres: literary fiction, social studies, humanities, natural science.
//
// There is NO static passage or question bank. Every passage is produced by a
// template FACTORY that randomizes names, places, years, and numbers on each
// call. Each fresh passage yields questions whose prompts, answers, and
// explanations reference that run's actual randomized values — so two tests
// are never identical.
//
// The generator keys below MUST match the topic names in data-reading.js exactly,
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

  // Build a 5-option question object with a shuffled answer index.
  const q4 = (prompt, correct, distractors, explanation) => {
    const ds = [...new Set(distractors.map(String))].filter(d => d !== String(correct));
    const fillers = ['None of the above', 'The passage does not provide enough information', 'All of the above'];
    let i = 0;
    while (ds.length < 4 && i < fillers.length) {
      const f = fillers[i++];
      if (f !== String(correct) && !ds.includes(f)) ds.push(f);
    }
    const options = shuffle([String(correct), ...ds.slice(0, 4)]);
    return { q: prompt, options, answer: options.indexOf(String(correct)), explanation };
  };

  // Render a mini passage inline (paragraph breaks become <br>).
  const passageHTML = p =>
    '<span class="read-passage"><em>"' + p.title + '"</em> <span class="dim">(' + p.source + ')</span><br>'
    + p.paras.join('<br><br>') + '</span>';

  const withPassage = (p, item) =>
    q4(passageHTML(p) + '<br><br>' + item.q, item.a, item.ds, item.why);

  // ─────────────────────────────────────────────
  //  FICTION — scene 1
  // ─────────────────────────────────────────────
  const fictionScene1 = () => {
    const who = pick(['Miriam', 'Elena', 'Nadia', 'Priya', 'Thea', 'Rosa', 'June', 'Ingrid']);
    const place = pick(['a fishing harbor', 'a railway town', 'the port of Sedgwick', 'a hillside village', 'a district near the river']);
    const year = randInt(1880, 2020);
    const paras = [
      'In ' + year + ', ' + who + ' arrived in ' + place + ' with nothing but a worn valise and a plan. No one on the platform knew her, and she preferred it that way; the less said about the road behind her, the sooner the new life could begin.',
      'The first week went to a rented room and quiet errands. She studied the faces of the people who ran the small shops and the line of the street in the evening light. What she watched for, carefully, was whether this place would hold her or only shelter her for a season. After one month she knew, though she told no one: the answer to that question was already settled.'
    ];
    return {
      title: 'The Arrival',
      source: 'adapted from a short work of literary fiction',
      genre: 'fiction',
      paras,
      mainIdea: 'A newcomer to a town quietly measures whether her new life will hold, uncertain but resolved.',
      facts: [
        { q: 'According to the passage, where did ' + who + ' arrive?', a: place, ds: ['a far-off seaport', 'the capital city', 'a coastal resort'], why: 'The passage states she arrived in ' + place + '.' },
        { q: 'What did ' + who + ' bring with her on the journey?', a: 'a worn bag', ds: ['a new house key', 'a letter', 'a full register of her work'], why: 'The passage says she carried "a worn bag."' },
        { q: 'During her first week, ' + who + ' most likely…', a: 'looked carefully at the people and streets around her.', ds: ['signed the papers of the move at once', 'left again before the month ended', 'closed her window and hid'], why: 'She studied the faces and the line of the street.' }
      ],
      vocab: [
        { word: 'errands', sentence: 'The week went to a rented room and quiet errands.', a: 'small routine tasks', ds: ['loud celebrations', 'formal speeches', 'long journeys'], why: 'Errands are small daily tasks.' }
      ],
      inference: [
        { q: 'The phrase "the answer to that question was already settled" suggests that ' + who + ' had…', a: 'quietly reached a decision while she watched', ds: ['changed her mind about staying', 'announced her plan to the town', 'still hoped to leave that week'], why: 'The private doubt had hardened into a settled answer.' }
      ],
      cause: [],
      purpose: { q: 'The author\'s main purpose is to…', a: 'show how a stranger begins to test whether a new place will hold her', ds: ['compare two routes across a region', 'explain how to rent a room', 'argue that travel is pointless'], why: 'The passage centers on her quiet measuring of the place.' },
      tone: { a: 'observant and slightly melancholy', ds: ['jubilant and carefree', 'excited and hurried', 'dizzying and loud'], why: 'The careful steps and private doubt set the tone.' },
      structure: { a: 'the arrival, then its private aftermath', ds: ['a strict chronological account of a voyage', 'a debate between two neighbors', 'a list of reasons to move'], why: 'It opens with the arrival and closes on the settled answer.' },
      pov: { a: 'third person limited, centered on ' + who + '.', ds: ['first person, told by ' + who, 'a second-person address to the reader', 'an omniscient narrator'], why: 'The narration stays close to her, in the third person.' },
      claims: []
    };
  };

  // ── FICTION — scene 2 (kept house) ──────────────────────
  const fictionScene2 = () => {
    const who = pick(['Rosa', 'June', 'Ingrid', 'Elena', 'Priya']);
    const place = pick(['the fair town of Calder', 'a mining town', 'Redon', 'the shore village of Sellwern']);
    const year = randInt(1900, 1975);
    const paras = [
      'For years the house ' + who + ' kept stood at the edge of ' + place + ', its garden overgrown. Every summer she returned to open the shutters, and every late autumn she closed them again and left for the season. The house was the one fixed point of her year.',
      'When a letter came in ' + year + ' offering to buy, and the price was far more than ' + who + ' had expected, she held the page a long time. In the end she sold it, packed the whole of her life into a single car, and drove away without once answering the question of whether she was leaving a building or a habit.'
    ];
    return {
      title: 'The Kept House',
      source: 'adapted from a short story',
      genre: 'fiction',
      paras,
      mainIdea: 'A woman sells a family house she has kept by habit, unsure whether she is leaving a building or the routines around it.',
      facts: [
        { q: 'Who kept the house in ' + place + '?', a: who, ds: ['a cousin', 'a hired caretaker', 'the town bank'], why: 'The passage centers on ' + who + ', the keeper.' },
        { q: 'For how long each year did ' + who + ' stay at the house in ' + place + '?', a: 'for the summer season', ds: ['all winter', 'only once in her life', 'for no time at all'], why: 'She came each summer and left each late autumn.' },
        { q: 'What made ' + who + ' decide to sell in ' + year + '?', a: 'a letter offering a price far above what she expected', ds: ['a clerk ordering the sale', 'a fire that destroyed it', 'the end of the year'], why: 'The unexpectedly high offer led to the sale.' }
      ],
      vocab: [
        { word: 'fixed point', sentence: 'the house was the one fixed point of her year', a: 'the one constant thing in her routine', ds: ['government building', 'painful chore', 'private meeting'], why: 'It was the constant arranging of her seasons.' }
      ],
      inference: [
        { q: 'The close suggests that ' + who + ' was…', a: 'unsure whether selling was right or wrong', ds: ['delighted by the profit above all', 'indifferent to the house', 'certain she would return'], why: 'She could not say whether she was leaving a building or a habit.' }
      ],
      cause: [],
      purpose: { a: 'to portray the quiet weight of a habit and a sale', ds: ['to compare housing prices across towns', 'to argue that old houses are worthless', 'to instruct in roof repair'], why: 'The narrative centers on the habit of keeping.' },
      tone: { a: 'wry and slightly sad', ds: ['cheerful and quick', 'hard and unforgiving', 'bright and cluttered'], why: 'The close is bittersweet.' },
      structure: { a: 'a repeated summer ritual, then a single sale', ds: ['a strict day-by-day timeline', 'a debate of two opinions', 'a survey of the area'], why: 'It moves from the annual returns to one final sale.' },
      pov: { a: 'third person limited', ds: ['first person', 'second person', 'a full omniscient view'], why: 'It follows ' + who + ' as "she".' },
      claims: []
    };
  };

  // ── SOCIAL STUDIES ─────────────────────────────────────
  const socialScene = () => {
    const place = pick(['a harbor city', 'a canal town', 'a prairie county', 'a river settlement']);
    const startYear = randInt(1840, 1880);
    const firstCost = randInt(80, 180);
    const laterCost = randInt(1, 15);
    const waveYear = startYear + randInt(35, 70);
    const paras = [
      'When the project in ' + place + ' was launched in ' + startYear + ', critics called it a folly that would never repay its cost. Within a decade, however, the doubts dissolved. Freight that once cost about ' + firstCost + ' dollars a ton now moved for under ' + laterCost + ' dollars, and the town\'s warehouses and docks doubled in value within a few seasons.',
      'Success bred imitation, and by ' + waveYear + ' a cluster of copies in neighboring regions had overreached and failed. The original, however, endured; its narrow route survived and kept ' + place + ' a commercial center for half a century afterward.'
    ];
    return {
      title: 'The ' + place + ' Project',
      source: 'adapted from historical accounts',
      genre: 'social',
      paras,
      mainIdea: 'A once-mocked project in ' + place + ' succeeded and shifted regional trade before its imitators collapsed.',
      facts: [
        { q: 'When was the project in ' + place + ' launched?', a: startYear + '', ds: [laterCost + '', (startYear + 50) + '', (startYear - 20) + ''], why: 'The passage sets the launch in ' + startYear + '.' },
        { q: 'The cost of freight fell from about ' + firstCost + ' dollars a ton to about…', a: laterCost + '', ds: [firstCost + '', (laterCost * 10) + '', (firstCost + 40) + ''], why: 'The passage says it "moved for under ' + laterCost + ' dollars."' },
        { q: 'The wave of imitators failed…', a: 'by ' + waveYear + '.', ds: ['during the first year', 'before launching', 'never'], why: 'The text says "by ' + waveYear + ' a cluster ... had overreached and failed."' }
      ],
      vocab: [
        { word: 'folly', sentence: 'critics called it growing-into folly', a: 'an unwise, wasteful plan', ds: ['a careful and sound plan', 'a generous gift', 'a quick and easy success'], why: 'Critics saw the project as wasteful and foolish.' }
      ],
      inference: [
        { q: 'The survival of the original route amid collapsed imitations suggests that it…', a: 'was tied into a larger and steadier system of trade', ds: ['enjoyed a strict monopoly', 'was forbidden to be copied', 'required no public money'], why: 'The original endured for half a century while the copies failed.' }
      ],
      cause: [
        { q: 'The project succeeded despite early doubt because it…', a: 'lowered the cost of moving freight', ds: ['required no upkeep', 'ended all local jobs', 'turned a profit within a year'], why: 'Cheap freight drew trade and raised the value of the town.' }
      ],
      purpose: { a: 'to explain the success and long legacy of a once-ridiculed project', ds: ['to argue against all public works', 'to give a manual of the town', 'to list the rival towns'], why: 'The account traces the rise and its lasting effect.' },
      tone: { a: 'steady and informed', ds: ['joyful and free', 'furious and accusing', 'hazy and dreamy'], why: 'The account is measured.' },
      structure: { a: 'from doubt, to success, to the failed imitation', ds: ['a strict biography of one ship', 'a debate of two opinions', 'a list of places'], why: 'It moves from doubt to vindication to collapse.' },
      pov: { a: 'an outside historical narrator', ds: ['an engineer who built it', 'a local governor', 'a traveling merchant'], why: 'The account is written from a general view.' },
      claims: [
        { q: 'Which detail best supports the idea that the project had become profitable?', a: 'Its warehouses and docks doubled in value within a few seasons.', ds: ['Critics once called it a folly.', 'It was built through the region.', 'It opened in ' + startYear + '.'], why: 'The rising value of the town\'s property is direct evidence of commercial success.' }
      ]
    };
  };

  // ── HUMANITIES ───────────────────────────────────────────
  const humanScene = () => {
    const form = pick(['jazz', 'photography', 'sculpture', 'cinema']);
    const earlier = pick(['the blues', 'drawn craft', 'academism', 'the folk tune']);
    const later = pick(['bebop', 'modernism', 'the new wave', 'the studio era']);
    const paras = [
      form + ' did not arrive finished; it grew through a series of reinventions. Early practitioners of ' + earlier + ' set some terms, and a later generation of ' + later + ' took up those same habits and both honored and rebuilt them.',
      'By the middle of the century, the principles of economy, purpose, and audience had come to rule ' + later + '. The later movement understood itself not as beginning entirely new ground but as finishing ideas the earlier group had raised.'
    ];
    return {
      title: 'Roots of ' + form,
      source: 'adapted from an essay on the arts',
      genre: 'humanities',
      paras,
      mainIdea: 'The late style of ' + form + ' took its terms from an earlier form and finished what that earlier group began.',
      facts: [
        { q: 'The earlier contribution to ' + form + ' that is described is…', a: earlier, ds: [later, 'engineering', 'the church'], why: 'The passage names ' + earlier + ' as the earlier step.' },
        { q: 'The later movement in ' + form + ' that is named is…', a: later, ds: [earlier, 'the chapel', 'a new academy'], why: 'The passage names ' + later + ' as the younger wave.' }
      ],
      vocab: [
        { word: 'reinvention', sentence: 'grew through a series of reinventions', a: 'a new way of working out an approach', ds: ['an exact copy', 'a disastrous failure', 'a government rule'], why: 'The form was repeatedly worked out anew.' }
      ],
      inference: [
        { q: 'The author implies that the later group saw itself as…', a: 'finishing a project the earlier style started', ds: ['beginning something entirely new', 'rejecting the earlier style', 'abandoning all prior art'], why: 'The essay says it understood itself as finishing earlier ideas.' }
      ],
      cause: [],
      purpose: { a: 'to explain an artistic tradition as a continuous evolution', ds: ['to attack the modern style', 'to give a full biography', 'to compare two buildings'], why: 'The essay surveys how ' + form + ' developed.' },
      tone: { a: 'thoughtful and informed', ds: ['sarcastic and cutting', 'shrill and alarmed', 'cold and mechanical'], why: 'The tone is considered.' },
      structure: { a: 'a chain from early terms to later practice', ds: ['a debate of two sides', 'a court report', 'a proven map'], why: 'It moves from the earlier to the later.' },
      pov: { a: 'an essayist reflecting on the arts', ds: ['a touring performer', 'a wealthy patron', 'an amateur at home'], why: 'The view belongs to the essayist.' },
      claims: []
    };
  };

  // ── NATURAL SCIENCE ──────────────────────────────────────
  const scienceScene = () => {
    const unit = pick(['turtle', 'wildflower', 'nest']);
    const planet = pick(['temperature', 'rainfall', 'runoff']);
    const year0 = randInt(1970, 2010);
    const c0 = randInt(120, 240);
    const c1 = c0 + randInt(40, 120);
    const paras = [
      'Biologists recorded the number of ' + unit + ' in a region each year. In ' + year0 + ' the count stood at about ' + c0 + ', and for more than a decade it stayed within a narrow band. ' + planet + ' was then measured to rise, and by the later year the ' + unit + ' count reached about ' + c1 + '.',
      'Researchers who examined the trend concluded that the increase in ' + planet + ' acted not on the ' + unit + ' directly but through the rest of the ecosystem, altering the food each ' + unit + ' had available.'
    ];
    return {
      title: 'A ' + unit + ' Count',
      source: 'adapted from an article on ecosystem ecology',
      genre: 'science',
      paras,
      mainIdea: 'A rising count of ' + unit + ' tracked a rise in ' + planet + ' that changed the food available to them.',
      facts: [
        { q: 'About when did the count of ' + unit + ' first begin to rise?', a: year0 + '', ds: [(year0 + 20) + '', (year0 - 10) + '', (c0 + 40) + ''], why: 'The data show the rise beginning after ' + year0 + '.' },
        { q: 'The count of ' + unit + ' reached approximately…', a: c1 + '', ds: [c0 + '', (c1 + 60) + '', (c0 + 40) + ''], why: 'The passage states the count reached about ' + c1 + '.' }
      ],
      vocab: [
        { word: 'stable', sentence: 'the count stayed within a stable band', a: 'steady and unchanged', ds: ['rising sharply', 'growing quickly', 'dropping to zero'], why: 'A "stable band" means little range of change.' }
      ],
      inference: [
        { q: 'The evidence that the change acted indirectly suggests that…', a: 'the shift in its food was the real cause', ds: ['the ' + unit + ' were unaffected', 'the change was immediate', 'the ecosystem was irrelevant'], why: 'The indirect path passed the effect through the food supply.' }
      ],
      cause: [
        { q: 'The count of ' + unit + ' rose mainly because…', a: 'their food became more plentiful.', ds: ['the ' + planet + ' fell sharply', 'the ' + unit + ' grew larger', 'predators disappeared'], why: 'The rise in ' + planet + ' helped the food supply.' }
      ],
      purpose: { a: 'to explain how a changed factor moved through the food web', ds: ['to advocate for a new law', 'to provide hunting instructions', 'to advertise the region'], why: 'It traces the chain of cause.' },
      tone: { a: 'scientific and clear', ds: ['humorous and loose', 'alarmist and shrill', 'dreamy and vague'], why: 'The reporting is measured.' },
      structure: { a: 'from baseline counts to the changed result', ds: ['a debate of two views', 'a personal memory', 'a list of rules'], why: 'It opens with the study and closes with the cause.' },
      pov: { a: 'an outside science writer', ds: ['a field diary', 'a senior surveyor', 'a local mayor'], why: 'The observation is third person and general.' },
      claims: []
    };
  };

  // ── assemble the scene factories ─────────────────────────
  const FICTION = [fictionScene1, fictionScene2];
  const SOCIAL = [socialScene];
  const HUMAN = [humanScene];
  const SCIENCE = [scienceScene];
  const ALL = FICTION.concat(SOCIAL).concat(HUMAN).concat(SCIENCE);

  // skill builders: each takes a scene-factory and returns a question generator
  const mainIdeaQ = fn => () => {
    const p = fn();
    const correct = p.mainIdea;
    const others = shuffle(ALL.map(f => f().mainIdea)).filter(x => x !== correct).slice(0, 3);
    return q4(passageHTML(p) + '<br><br>Which choice best states the main idea of the passage?',
      correct, others, 'The main idea covers the whole passage; the others are too narrow, too broad, or not stated.');
  };
  const detailsQ = fn => () => { const p = fn(); const f = pick(p.facts); return withPassage(p, f); };
  const causeQ = fn => () => { const p = fn(); const c = pick(p.cause); return withPassage(p, c); };
  const inferQ = fn => () => { const p = fn(); const i = pick(p.inference); return withPassage(p, i); };
  const vocabQ = fn => () => { const p = fn(); const v = pick(p.vocab); return q4(passageHTML(p) + '<br><br>As it is used in the passage, the word "' + v.word + '" most nearly means…', v.a, v.ds, v.why); };
  const purposeQ = fn => () => { const p = fn(); const x = p.purpose; return withPassage(p, x); };
  const toneQ = fn => () => { const p = fn(); const x = p.tone; return q4(passageHTML(p) + '<br><br>The tone of the passage is best described as…', x.a, x.ds, x.why); };
  const structureQ = fn => () => { const p = fn(); const x = p.structure; return q4(passageHTML(p) + '<br><br>How is the passage most clearly organized?', x.a, x.ds, x.why); };
  const povQ = fn => () => { const p = fn(); const x = p.pov; return q4(passageHTML(p) + '<br><br>From whose point of view is the passage most likely told?', x.a, x.ds, x.why); };
  const claimsQ = fn => () => { const p = fn(); const c = pick(p.claims); return withPassage(p, c); };

  // Only apply a skill to scenes that actually carry that data.
  const only = (fns, has) => fns.filter(f => { const p = f(); return has(p); });

  // ── pairwise comparison generator ────────────────────────
  // Two short passages hold opposing views on a shared topic; both authors and
  // the topic are randomized. Generates a full 4-question set per run.
  const PAIR_TOPICS = [
    {
      topic: 'how city streets should move people',
      aSide: 'expand public transit',
      bSide: 'widen the roads for private cars',
      aArg: 'dedicated lanes carry far more riders per hour and cost less land over time',
      bArg: 'flexible, on-demand routes serve more people for a fraction of the price',
      shared: 'cities need to move people more effectively'
    },
    {
      topic: 'how screen use affects children',
      aSide: 'treat it as largely harmless',
      bSide: 'treat it with caution',
      aArg: 'the feared studies rarely separate screens from family circumstance',
      bArg: 'the daily habits of sleep and conversation are already being displaced',
      shared: 'what children actually do online matters'
    },
    {
      topic: 'whether cities benefit from tall buildings',
      aSide: 'see density as a virtue',
      bSide: 'warn that tall blocks break the street',
      aArg: 'more units on less land lowers rent and shortens commutes',
      bArg: 'tower walls strip light and air from the ground-level street',
      shared: 'fairly housed, well-served streets are the goal'
    }
  ];

  const pairScene = () => {
    const t = pick(PAIR_TOPICS);
    const p1 = {
      title: 'Essay One',
      source: 'essay on ' + t.topic,
      paras: ['Modern cities need a single clear answer, and ' + t.a + ' is it. ' + t.aArg + ' — figures any city can reach and afford.', 'Investing there is the responsible reading of the same daily numbers that said ' + t.b + ', and the correct response is not balance but direction.']
    };
    const p2 = {
      title: 'Essay Two',
      source: 'second essay on ' + t.topic,
      paras: ['The fashionable answer is ' + t.b + ', but cities realize that ' + t.bArg + '.', 'The honest goods are small, incremental, and far cheaper than a new wholesale ' + t.a + '. A mobile mix outperforms both extremes.']
    };
    const pairHTML = '<span class="read-passage"><em>"' + p1.title + '"</em><br>' + p1.paras.join('<br><br>') + '<br><br><br><em>"' + p2.title + '"</em><br>' + p2.paras.join('<br><br>') + '</span>';
    const items = [
      { q: 'The main point the two essays disagree about is…', a: 'the right way to handle ' + t.topic + '.', ds: ['whether people commute', 'what a city "is"', 'the age of the buildings'], why: 'One favors ' + t.a + ', the other ' + t.b + ' — a direct clash.' },
      { q: 'Which statement would both authors most likely accept?', a: t.shared + '.', ds: [t.aArg, t.bArg, 'the other essay is dishonest'], why: 'Their shared claim is the common ground both would grant.' },
      { q: 'Essay One argues for…', a: t.a + '.', ds: [t.b + '.', 'ignoring ' + t.topic, 'a total ban'], why: 'The first essay champions ' + t.a + '.' },
      { q: 'Essay Two most directly challenges Essay One by…', a: 'arguing the rival option cost less and serves more.', ds: ['conceding every dispute', 'asking for more time', 'denying the topic exists'], why: 'It counters ' + t.a + ' with ' + t.bSide + '.' }
    ];
    return { html: pairHTML, items };
  };

  const pairQ = () => {
    const pt = pairScene();
    const item = pick(pt.items);
    return q4(pt.html + '<br><br>' + item.q, item.a, item.ds, item.why);
  };

  // ── GEN (topic name → array of generators) ────────────────
  const GEN = {};

  // Key Ideas & Details
  GEN['Main Idea / Central Theme'] = ALL.map(mainIdeaQ);
  GEN['Locating Specific Details'] = ALL.map(detailsQ);
  GEN['Making Inferences'] = ALL.map(inferQ);
  GEN['Cause & Effect'] = only(ALL, p => p.cause && p.cause.length).map(causeQ);
  GEN['Visual/Quantitative Integration'] = ALL.map(detailsQ);

  // Craft & Structure
  GEN['Vocabulary in Context'] = ALL.map(vocabQ);
  GEN["Author's Purpose & Tone"] = ALL.flatMap(f => [purposeQ(f), toneQ(f)]);
  GEN['Text Structure'] = ALL.map(structureQ);
  GEN['Point of View'] = ALL.map(povQ);

  // Integration of Knowledge
  GEN['Claims & Evidence'] = only(ALL, p => p.claims && p.claims.length).map(claimsQ);
  GEN['Paired Passages'] = [pairQ, pairQ, pairQ, pairQ];

  // Passage types
  GEN['Literary Narrative / Prose Fiction'] = FICTION.map(mainIdeaQ).concat(FICTION.map(detailsQ));
  GEN['Social Studies'] = SOCIAL.map(mainIdeaQ);
  GEN['Humanities'] = HUMAN.map(mainIdeaQ);
  GEN['Natural Sciences'] = SCIENCE.map(mainIdeaQ);

  const fallback = (level, topicName) => q4(
    'Which choice best answers the following question about "' + topicName + '"?',
    'The correct answer is supported directly by the passage.',
    ['This choice adds details the passage never mentions.', 'This choice contradicts what the passage states.', 'This choice is too narrow or too broad.'],
    'Return to the passage and match the answer to the text. Correct answers are supported directly; wrong ones add or contradict details.'
  );

  window.SectionQuestionGenerator = window.SectionQuestionGenerator || {};
  window.SectionQuestionGenerator.reading = window.makeSectionGenerator(GEN, fallback);
})();