// ═══════════════════════════════════════════╗
// ║   ACT ENGLISH QUESTION GENERATORS        ║
// ╚══════════════════════════════════════════╝
// Lazy-loaded together with data-english.js. Produces ACT-style 5-option (A-E)
// questions tied to short embedded passages, like the real ACT English test:
// each item presents a sentence/paragraph with an underlined portion and asks
// for the best alternative, or whether to keep/delete the underlined part.
// NOTE: The question text does NOT include the answer choices. The test UI
// renders the choices separately as A/B/C/D/E buttons below the passage.
// The generator keys below MUST match the topic names in data-english.js
// exactly, otherwise every question for that topic falls back to a placeholder.
(function () {
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

  // Build a 5-option question. `choices` should be an array of strings where
  // exactly one is the correct revision. `correctIndex` tells which one is right.
  const q4 = (prompt, choices, correctIndex, explanation) => {
    const base = choices.slice();
    const correct = base[correctIndex];
    const padded = base.length < 5 ? [...base, 'None of the above'] : base.slice();
    const options = shuffle(padded);
    const answer = options.indexOf(correct);
    return { q: prompt, options, answer, explanation };
  };

  const stems = [
    'Which choice best revises the underlined portion?',
    'In the following sentence, the underlined portion may or may not be correct. Choose the best alternative.',
    'Select the best version of the underlined portion.',
    'Which revision best corrects the underlined portion?',
    'Choose the option that best revises the underlined portion.'
  ];

  // topic -> list of { text, underline, choices, correct, explanation }
  const BANK = {
    'Commas': [
      {
        text: 'Dr. Alvarez, the new director, will speak at the ceremony.',
        underline: 'the new director',
        choices: ['No change', 'the new director;', 'the new director.', 'the director'],
        correct: 0,
        explanation: 'The appositive "the new director" is nonessential, so the commas are correct.'
      },
      {
        text: 'After the rain stopped we went outside to play.',
        underline: 'After the rain stopped',
        choices: ['After the rain stopped,', 'After, the rain stopped', 'After the rain, stopped', 'No change'],
        correct: 0,
        explanation: 'An introductory phrase should be followed by a comma before the main clause.'
      },
      {
        text: 'The cat, sat quietly by the window all afternoon.',
        underline: 'The cat, sat',
        choices: ['The cat sat', 'The cat, sat', 'The cat; sat', 'No change'],
        correct: 0,
        explanation: 'Do not place a comma between a subject and its verb.'
      },
      {
        text: 'Because it was raining, the game was postponed.',
        underline: 'Because it was raining,',
        choices: ['No change', 'Because it was raining;', 'Because, it was raining,', 'Because it was raining'],
        correct: 0,
        explanation: 'A comma after the introductory dependent clause is correct.'
      }
    ],

    'Semicolons': [
      {
        text: 'I finished my homework; then I went out with friends.',
        underline: 'homework; then',
        choices: ['No change', 'homework, then', 'homework then', 'homework: then'],
        correct: 0,
        explanation: 'A semicolon correctly joins two related independent clauses.'
      },
      {
        text: 'The concert was sold out; however, we found tickets online.',
        underline: 'out; however,',
        choices: ['No change', 'out, however,', 'out however,', 'out, however'],
        correct: 0,
        explanation: 'A semicolon before "however" correctly joins the two independent clauses.'
      },
      {
        text: 'The test was difficult; most students failed it.',
        underline: 'difficult; most',
        choices: ['No change', 'difficult, most', 'difficult most', 'difficult: most'],
        correct: 0,
        explanation: 'The semicolon correctly joins two complete sentences.'
      },
      {
        text: 'She loves cooking; her brother prefers baking.',
        underline: 'cooking; her',
        choices: ['No change', 'cooking her', 'cooking, her', 'cooking: her'],
        correct: 0,
        explanation: 'The semicolon joins two related independent clauses.'
      }
    ],

    'Colons': [
      {
        text: 'You will need three things: a pencil, paper, and patience.',
        underline: 'things: a pencil',
        choices: ['No change', 'things; a pencil', 'things, a pencil', 'things a pencil'],
        correct: 0,
        explanation: 'A colon introduces a list after a complete sentence.'
      },
      {
        text: 'The reason is simple: the store was closed.',
        underline: 'simple: the store',
        choices: ['No change', 'simple; the store', 'simple, the store', 'simple the store'],
        correct: 0,
        explanation: 'A colon introduces an explanation after a complete clause.'
      },
      {
        text: 'Her goals for the year: to save money and to exercise more.',
        underline: 'Her goals for the year:',
        choices: ['Her goals for the year are', 'Her goals for the year:', 'Her goals, for the year,', 'No change'],
        correct: 0,
        explanation: 'A colon must follow a complete sentence; "Her goals for the year" is a fragment, so a verb is needed.'
      },
      {
        text: 'The museum displays artifacts from three eras: ancient, medieval, and modern.',
        underline: 'eras: ancient',
        choices: ['No change', 'eras; ancient', 'eras, ancient', 'eras ancient'],
        correct: 0,
        explanation: 'A colon introduces the list of eras.'
      }
    ],

    'Apostrophes': [
      {
        text: 'The childrens toys were scattered across the floor.',
        underline: 'childrens',
        choices: ["children's", "childrens'", 'childrens', 'No change'],
        correct: 0,
        explanation: '"Children" is an irregular plural, so the possessive adds an apostrophe and s: "children\'s."'
      },
      {
        text: "The boss's office is on the third floor.",
        underline: "boss's",
        choices: ['No change', "boss'", 'bosss', 'bosses'],
        correct: 0,
        explanation: 'A singular possessive noun ends in -’s: "boss\'s."'
      },
      {
        text: 'Its raining outside, so bring an umbrella.',
        underline: 'Its',
        choices: ["It's", "Its'", 'Its', 'It is'],
        correct: 0,
        explanation: '"It\'s" is the contraction of "it is"; the possessive "its" has no apostrophe.'
      },
      {
        text: 'The dog wagged its tail happily.',
        underline: 'its',
        choices: ["it's", "its'", 'it is', 'its'],
        correct: 3,
        explanation: 'The possessive form of "it" is "its," with no apostrophe.'
      }
    ],

    'Dashes & Parentheses': [
      {
        text: 'Her essay—the best in the class—won the contest.',
        underline: '—the best in the class—',
        choices: ['No change', ', the best in the class,', '(the best in the class)', ' the best in the class '],
        correct: 0,
        explanation: 'The em dashes correctly set off the interrupting remark; omitting the punctuation creates a run-on.'
      },
      {
        text: 'The study (published in 2020) was widely cited.',
        underline: '(published in 2020)',
        choices: ['No change', '—published in 2020—', ', published in 2020,', '; published in 2020;'],
        correct: 0,
        explanation: 'Parentheses correctly enclose the nonessential detail; a semicolon would wrongly separate the subject from the verb.'
      },
      {
        text: 'One thing is certain—the project will be finished on time.',
        underline: 'certain—the',
        choices: ['No change', 'certain: the', 'certain, the', 'certain the'],
        correct: 0,
        explanation: 'A dash can introduce an explanation or a dramatic clarification.'
      },
      {
        text: 'The coach—not the players—was blamed for the loss.',
        underline: '—not the players—',
        choices: ['No change', ', not the players,', '(not the players)', ' not the players '],
        correct: 0,
        explanation: 'The em dashes set off the contrasting remark; omitting them creates a run-on.'
      }
    ],

    'Run-ons & Comma Splices': [
      {
        text: 'The train was late we missed our connection.',
        underline: 'late we missed',
        choices: ['late; we missed', 'late, we missed', 'late; and we missed', 'No change'],
        correct: 0,
        explanation: 'Two independent clauses need a semicolon (or a period), not a comma.'
      },
      {
        text: 'She enjoys painting, he prefers sculpture.',
        underline: 'painting, he',
        choices: ['painting; he', 'painting he', 'painting he;', 'No change'],
        correct: 0,
        explanation: 'This comma splice is fixed by placing a semicolon between the two clauses.'
      },
      {
        text: 'The exam was canceled, which surprised everyone.',
        underline: 'canceled, which',
        choices: ['No change', 'canceled; which', 'canceled which', 'canceled; and which'],
        correct: 0,
        explanation: '"Which" begins a subordinate clause, so the comma is correct.'
      },
      {
        text: 'He studied all night, therefore he was exhausted the next day.',
        underline: 'night, therefore',
        choices: ['night; therefore,', 'night, therefore', 'night therefore', 'No change'],
        correct: 0,
        explanation: '"Therefore" introduces a new clause, so use a semicolon before it and a comma after it.'
      }
    ],

    'Sentence Fragments': [
      {
        text: 'Because the roads were icy. The schools closed early.',
        underline: 'Because the roads were icy.',
        choices: ['Because the roads were icy,', 'Because the roads were icy;', 'Because the roads were icy', 'No change'],
        correct: 0,
        explanation: 'A dependent clause cannot stand alone; join it to the main clause with a comma.'
      },
      {
        text: 'The team celebrated their victory in the locker room. Dancing and shouting.',
        underline: 'Dancing and shouting.',
        choices: ['They danced and shouted.', 'dancing and shouting.', 'dancing, and shouting', 'No change'],
        correct: 0,
        explanation: 'A verb-phrase fragment must be completed with a subject: "They danced and shouted."'
      },
      {
        text: 'Walking to school. I saw a rainbow.',
        underline: 'Walking to school.',
        choices: ['As I walked to school,', 'Walking to school,', 'Walking to school;', 'No change'],
        correct: 0,
        explanation: 'Turn the fragment into a dependent clause joined to the main sentence.'
      },
      {
        text: 'To win the championship. The team practiced every day.',
        underline: 'To win the championship.',
        choices: ['To win the championship,', 'To win the championship;', 'To win the championship', 'No change'],
        correct: 0,
        explanation: 'An infinitive phrase cannot stand alone; join it to the main clause.'
      }
    ],

    'Parallel Structure': [
      {
        text: 'She likes hiking, swimming, and to bike.',
        underline: 'to bike',
        choices: ['biking', 'to bike', 'bike', 'No change'],
        correct: 0,
        explanation: 'Keep the items in a list in the same form: hiking, swimming, biking.'
      },
      {
        text: 'The job requires patience, attention to detail, and being organized.',
        underline: 'being organized',
        choices: ['organization', 'being organized', 'organizing', 'No change'],
        correct: 0,
        explanation: 'Use nouns throughout the list: patience, attention to detail, organization.'
      },
      {
        text: 'He wanted neither to study nor attending the event.',
        underline: 'attending the event',
        choices: ['to attend the event', 'attending the event', 'attend the event', 'No change'],
        correct: 0,
        explanation: '"Neither...nor" needs parallel forms: "to study" pairs with "to attend."'
      },
      {
        text: 'The coach told the players to warm up, stretch, and to cool down afterward.',
        underline: 'to cool down',
        choices: ['cool down', 'to cool down', 'cooling down', 'No change'],
        correct: 0,
        explanation: 'The word "to" applies to the whole list: to warm up, stretch, and cool down.'
      }
    ],

    'Verb Tense Consistency': [
      {
        text: 'Every morning she walks to school and then buys a coffee.',
        underline: 'buys',
        choices: ['No change', 'bought', 'will buy', 'had bought'],
        correct: 0,
        explanation: 'Present-tense verbs stay consistent: walks and buys.'
      },
      {
        text: 'Yesterday, I go to the store and bought milk.',
        underline: 'go',
        choices: ['went', 'go', 'gone', 'No change'],
        correct: 0,
        explanation: '"Yesterday" signals the past tense, so "went" is needed.'
      },
      {
        text: 'By the time we arrived, the movie has already started.',
        underline: 'has already started',
        choices: ['had already started', 'has already started', 'was already started', 'No change'],
        correct: 0,
        explanation: 'The past perfect "had started" matches the earlier past action.'
      },
      {
        text: 'She will finish her report, and then she presented it to the class.',
        underline: 'presented',
        choices: ['will present', 'presented', 'presents', 'No change'],
        correct: 0,
        explanation: 'The future tense must be consistent: "will finish" pairs with "will present."'
      }
    ],

    'Subject-Verb Agreement': [
      {
        text: 'The group of students are planning a field trip.',
        underline: 'are planning',
        choices: ['is planning', 'are planning', 'were planning', 'No change'],
        correct: 0,
        explanation: 'The subject is "group," which is singular, so the verb is "is planning."'
      },
      {
        text: 'Neither the coach nor the players was ready for overtime.',
        underline: 'was ready',
        choices: ['were ready', 'was ready', 'is ready', 'No change'],
        correct: 0,
        explanation: 'With "neither...nor," the verb agrees with the nearer subject, "players" (plural).'
      },
      {
        text: 'There are several reasons for the delay.',
        underline: 'are several',
        choices: ['No change', 'is several', 'was several', 'be several'],
        correct: 0,
        explanation: 'The subject "reasons" is plural, so "are" is correct.'
      },
      {
        text: 'Each of the runners have a number pinned to their shirt.',
        underline: 'have a number',
        choices: ['has a number', 'have a number', 'are having a number', 'No change'],
        correct: 0,
        explanation: '"Each" is singular, so the verb should be "has a number."'
      },
      {
        text: 'The students, along with their teacher, is visiting the museum.',
        underline: 'is visiting',
        choices: ['are visiting', 'is visiting', 'was visiting', 'No change'],
        correct: 0,
        explanation: 'The subject "students" is plural; "along with their teacher" does not change the verb.'
      }
    ],

    'Pronoun Agreement & Case': [
      {
        text: 'Each student must bring their own supplies to class.',
        underline: 'their own',
        choices: ['his or her own', 'their own', 'its own', 'No change'],
        correct: 0,
        explanation: '"Each student" is singular, so the singular "his or her" is preferred.'
      },
      {
        text: 'Between you and I, this plan will never work.',
        underline: 'you and I',
        choices: ['you and me', 'you and I', 'me and you', 'No change'],
        correct: 0,
        explanation: 'The object of a preposition takes the objective case: "you and me."'
      },
      {
        text: 'Maria and him are organizing the fundraiser.',
        underline: 'Maria and him',
        choices: ['Maria and he', 'Maria and him', 'Him and Maria', 'No change'],
        correct: 0,
        explanation: 'The subject of a sentence takes the subjective case: "Maria and he."'
      },
      {
        text: 'The manager asked Sarah and I to lead the meeting.',
        underline: 'Sarah and I',
        choices: ['Sarah and me', 'Sarah and I', 'me and Sarah', 'No change'],
        correct: 0,
        explanation: '"Sarah and me" is the object of the verb "asked."'
      }
    ],

    'Modifiers: Dangling & Misplaced': [
      {
        text: 'Walking through the park, the flowers looked beautiful.',
        underline: 'Walking through the park',
        choices: ['As we walked through the park', 'Walking through the park', 'Walked through the park', 'No change'],
        correct: 0,
        explanation: 'The modifier must refer to a person, not to "the flowers."'
      },
      {
        text: 'Having finished the assignment, the computer was turned off.',
        underline: 'Having finished the assignment',
        choices: ['After I finished the assignment', 'Having finished the assignment', 'Finished the assignment', 'No change'],
        correct: 0,
        explanation: 'A computer cannot finish an assignment; the modifier needs a person.'
      },
      {
        text: 'The waiter served the soup to the customer that was boiling hot.',
        underline: 'to the customer that was boiling hot',
        choices: ['that was boiling hot to the customer', 'to the customer that was boiling hot', 'that was boiling hot, to the customer', 'No change'],
        correct: 0,
        explanation: '"That was boiling hot" should describe the soup, not the customer.'
      },
      {
        text: 'Racing down the street, the mailbox was hit by the car.',
        underline: 'Racing down the street',
        choices: ['As the car raced down the street', 'Racing down the street', 'Racing, the street', 'No change'],
        correct: 0,
        explanation: 'A mailbox cannot race; the modifier must attach to the car.'
      }
    ],

    'Comparisons': [
      {
        text: 'Of the two candidates, Maria is the most qualified.',
        underline: 'the most qualified',
        choices: ['the more qualified', 'the most qualified', 'most qualified', 'No change'],
        correct: 0,
        explanation: 'Use the comparative form when comparing two things: "the more qualified."'
      },
      {
        text: 'This movie is better than any movie I have seen this year.',
        underline: 'any movie',
        choices: ['any other movie', 'any movie', 'any of the movies', 'No change'],
        correct: 0,
        explanation: '"Any movie" wrongly includes this movie itself; use "any other movie."'
      },
      {
        text: 'Of the three routes, the coastal highway is the more scenic.',
        underline: 'the more scenic',
        choices: ['the most scenic', 'the more scenic', 'most scenic', 'No change'],
        correct: 0,
        explanation: 'Use the superlative form when comparing three or more: "the most scenic."'
      },
      {
        text: 'Her grades are better than her brother.',
        underline: 'her brother',
        choices: ["her brother's", 'her brother', 'her brothers', 'No change'],
        correct: 0,
        explanation: 'Compare grades with grades: "her brother\'s (grades)."'
      }
    ],

    'Adjectives vs. Adverbs': [
      {
        text: 'She performed impressively on the final exam.',
        underline: 'impressively',
        choices: ['No change', 'impressive', 'impressively of', 'most impressive'],
        correct: 0,
        explanation: 'An adverb modifies the action verb "performed."'
      },
      {
        text: 'The soup tasted deliciously after we added salt.',
        underline: 'deliciously',
        choices: ['delicious', 'deliciously', 'more deliciously', 'No change'],
        correct: 0,
        explanation: '"Tasted" is a linking verb, so it takes a predicate adjective: "delicious."'
      },
      {
        text: 'He ran quick to catch the bus.',
        underline: 'quick',
        choices: ['quickly', 'quick', 'quicker', 'No change'],
        correct: 0,
        explanation: 'An adverb modifies the verb "ran": "quickly."'
      },
      {
        text: 'The team played good in the championship game.',
        underline: 'good',
        choices: ['well', 'good', 'goodly', 'No change'],
        correct: 0,
        explanation: '"Played" is an action verb, so the adverb "well" is needed.'
      }
    ],

    'Add/Delete Questions': [
      {
        text: 'The novel, which was published in 1925, remains a classic of American literature.',
        underline: 'which was published in 1925',
        choices: ['No change', 'DELETE the underlined portion.', 'published in 1925', 'which had been published in 1925'],
        correct: 0,
        explanation: 'The clause adds relevant factual context and should be kept.'
      },
      {
        text: 'The committee discussed the budget, the schedule, and the next meeting date, all of which took place on Tuesday.',
        underline: 'all of which took place on Tuesday',
        choices: ['DELETE the underlined portion.', 'No change', 'all of which took place on a Tuesday', 'which all took place on Tuesday'],
        correct: 0,
        explanation: 'The detail is irrelevant to the meeting\'s content and should be deleted.'
      },
      {
        text: 'The athlete trained daily for months, and she also wore blue socks, to prepare for the marathon.',
        underline: 'and she also wore blue socks',
        choices: ['DELETE the underlined portion.', 'No change', 'and she also wore blue socks,', 'moreover, she wore blue socks'],
        correct: 0,
        explanation: 'The detail about the socks is irrelevant; deleting it keeps the sentence focused.'
      },
      {
        text: 'The recipe requires three eggs, two cups of flour, and one cup of sugar; the dish serves eight people.',
        underline: 'the dish serves eight people',
        choices: ['No change', 'DELETE the underlined portion.', 'the dish serving eight people', 'and the dish serves eight people'],
        correct: 0,
        explanation: 'The serving size is useful information and should be kept.'
      }
    ],

    'Transitions': [
      {
        text: 'The weather was beautiful; however, we decided to stay inside.',
        underline: 'however',
        choices: ['No change', 'therefore', 'consequently', 'meanwhile'],
        correct: 0,
        explanation: '"However" signals the contrast between the nice weather and staying indoors.'
      },
      {
        text: 'She studied all night; therefore, she was exhausted the next day.',
        underline: 'therefore',
        choices: ['No change', 'however', 'on the other hand', 'nevertheless'],
        correct: 0,
        explanation: '"Therefore" signals cause and effect.'
      },
      {
        text: "The company's profits rose, despite the weak economy.",
        underline: 'despite',
        choices: ['No change', 'because of', 'in addition to', 'as a result of'],
        correct: 0,
        explanation: '"Despite" signals the contrast between the weak economy and rising profits.'
      },
      {
        text: 'The train was delayed, so we missed the meeting.',
        underline: 'so',
        choices: ['No change', 'but', 'however', 'yet'],
        correct: 0,
        explanation: '"So" signals the result of the delay.'
      },
      {
        text: 'He failed the test; however, he did not study.',
        underline: 'however',
        choices: ['because', 'however', 'therefore', 'No change'],
        correct: 0,
        explanation: 'The clause gives the reason for the failure, so "because" is needed.'
      },
      {
        text: 'The new policy was popular with employees, therefore, the manager kept it.',
        underline: 'therefore,',
        choices: ['so', 'therefore,', 'however,', 'No change'],
        correct: 0,
        explanation: '"So" joins cause and effect without creating a comma splice.'
      }
    ],

    'Organization & Paragraph Order': [
      {
        text: 'The town was founded in 1875. First, settlers built homes near the river. Next, they cleared land for farming.',
        underline: 'First, settlers built homes near the river.',
        choices: ['No change', 'DELETE the underlined sentence.', 'Move the underlined sentence to the end of the paragraph.', 'Combine the underlined sentence with the first sentence.'],
        correct: 0,
        explanation: 'The sentences follow a logical order: founding, then first steps, then next steps.'
      },
      {
        text: 'She opened the oven. The cookies were golden brown. Then she took them out to cool.',
        underline: 'Then she took them out to cool.',
        choices: ['No change', 'DELETE the underlined sentence.', 'Move the underlined sentence to the beginning of the paragraph.', 'Replace the underlined sentence with "The cookies cooled on the counter."'],
        correct: 0,
        explanation: 'The sequence is logical: open the oven, see the cookies, then remove them.'
      },
      {
        text: 'The committee met to plan the event. They chose the date first. Then they decided on a venue. Finally, they discussed the budget.',
        underline: 'Then they decided on a venue.',
        choices: ['No change', 'Move the underlined sentence to the end of the paragraph.', 'DELETE the underlined sentence.', 'Move the underlined sentence to the beginning.'],
        correct: 0,
        explanation: 'The order (date, venue, budget) is logical and should be kept.'
      },
      {
        text: 'She mixed the ingredients. She baked the cake for thirty minutes. First, she preheated the oven.',
        underline: 'First, she preheated the oven.',
        choices: ['Move the underlined sentence to the beginning of the paragraph.', 'No change', 'DELETE the underlined sentence.', 'Move the underlined sentence to the middle.'],
        correct: 0,
        explanation: 'Preheating the oven must come before mixing the ingredients and baking.'
      }
    ],

    'Conciseness & Redundancy': [
      {
        text: 'The final decision was decided by the committee.',
        underline: 'was decided by',
        choices: ['was made by', 'was decided by', 'was being decided by', 'No change'],
        correct: 0,
        explanation: '"Decision was decided" is redundant; use "was made by."'
      },
      {
        text: 'In my opinion, I think the plan is risky.',
        underline: 'In my opinion, I think',
        choices: ['I think', 'In my opinion, I think', 'In my opinion', 'No change'],
        correct: 0,
        explanation: '"In my opinion" and "I think" repeat the same idea; keep just one.'
      },
      {
        text: 'The reason why he left was because the meeting was boring.',
        underline: 'The reason why he left was because',
        choices: ['He left because', 'The reason why he left was because', 'The reason he left was', 'No change'],
        correct: 0,
        explanation: '"The reason why" and "was because" are redundant; simplify the sentence.'
      },
      {
        text: 'The two twins looked exactly alike.',
        underline: 'The two twins',
        choices: ['The twins', 'The two twins', 'The two, twins', 'No change'],
        correct: 0,
        explanation: '"Twins" already means two people, so "two" is redundant.'
      },
      {
        text: 'At this point in time, the committee has no plan.',
        underline: 'At this point in time',
        choices: ['Currently', 'At this point in time', 'At this time', 'No change'],
        correct: 0,
        explanation: '"Currently" is the most concise of the choices.'
      }
    ],

    'Tone & Style': [
      {
        text: "The senator's speech was totally, like, awesome and stuff.",
        underline: 'totally, like, awesome and stuff',
        choices: ['forceful and memorable', 'totally, like, awesome and stuff', 'cool and really great', 'No change'],
        correct: 0,
        explanation: 'Formal writing requires formal language, not casual slang.'
      },
      {
        text: "The committee's decision was not good for the community.",
        underline: 'not good for the community',
        choices: ['detrimental to the community', 'not good for the community', 'bad, real bad, for the community', 'No change'],
        correct: 0,
        explanation: '"Detrimental" is more precise and formal.'
      },
      {
        text: 'The scientists were super excited about their findings.',
        underline: 'super excited',
        choices: ['exhilarated', 'super excited', 'really, really excited', 'No change'],
        correct: 0,
        explanation: 'Formal writing favors precise vocabulary over informal intensifiers.'
      },
      {
        text: "The museum's new exhibit is kinda interesting.",
        underline: 'kinda interesting',
        choices: ['engaging', 'kinda interesting', 'sort of interesting', 'No change'],
        correct: 0,
        explanation: '"Kinda" is informal; "engaging" fits the formal tone.'
      }
    ],

    'Affect vs Effect': [
      {
        text: 'The new law will effect how schools fund sports programs.',
        underline: 'effect',
        choices: ['affect', 'effect', 'have effect on', 'No change'],
        correct: 0,
        explanation: 'As a verb meaning "to influence," use "affect."'
      },
      {
        text: 'The medicine had a positive effect on her symptoms.',
        underline: 'effect',
        choices: ['No change', 'affect', "affect's", 'effective'],
        correct: 0,
        explanation: 'As a noun meaning "result," use "effect."'
      },
      {
        text: "The storm's affect on the crops was devastating.",
        underline: 'affect',
        choices: ['effect', 'affect', 'effective', 'No change'],
        correct: 0,
        explanation: 'The noun meaning "result" is spelled "effect."'
      },
      {
        text: 'How will the budget cuts effect the new program?',
        underline: 'effect',
        choices: ['affect', 'effect', 'affects', 'No change'],
        correct: 0,
        explanation: 'The verb "affect" means to influence.'
      }
    ],

    'Than vs Then': [
      {
        text: 'She is taller then her brother.',
        underline: 'then',
        choices: ['than', 'then', 'then,', 'No change'],
        correct: 0,
        explanation: 'Comparisons use "than."'
      },
      {
        text: 'First we studied, and then we took a break.',
        underline: 'then',
        choices: ['No change', 'than', 'then,', 'than,'],
        correct: 0,
        explanation: 'A sequence of events uses "then."'
      },
      {
        text: 'Nothing matters more then your health.',
        underline: 'then',
        choices: ['than', 'then', 'than,', 'No change'],
        correct: 0,
        explanation: 'A comparison ("more than") uses "than."'
      },
      {
        text: 'We will discuss this later, then we will vote.',
        underline: 'later, then',
        choices: ['later, and then', 'later, then', 'later then', 'No change'],
        correct: 0,
        explanation: '"And then" properly joins the two actions.'
      }
    ],

    'Who vs Whom': [
      {
        text: 'Who should we invite to the party?',
        underline: 'Who',
        choices: ['Whom', 'Who', 'Whose', 'No change'],
        correct: 0,
        explanation: '"Whom" is the object of the verb "invite."'
      },
      {
        text: 'The teacher who taught me physics is retiring.',
        underline: 'who',
        choices: ['No change', 'whom', 'whose', 'which'],
        correct: 0,
        explanation: '"Who" is the subject of the clause "who taught me."'
      },
      {
        text: 'She is the author whom wrote the bestseller.',
        underline: 'whom',
        choices: ['who', 'whom', 'whose', 'No change'],
        correct: 0,
        explanation: '"Who" is the subject of the verb "wrote."'
      },
      {
        text: 'To whom did you send the package?',
        underline: 'whom',
        choices: ['No change', 'who', 'whose', 'whom,'],
        correct: 0,
        explanation: '"Whom" follows the preposition "to."'
      }
    ],

    "Its vs It's": [
      {
        text: 'The company lost its biggest client last year.',
        underline: 'its',
        choices: ['No change', "it's", "its'", 'it is'],
        correct: 0,
        explanation: 'The possessive pronoun "its" has no apostrophe.'
      },
      {
        text: "Its been a pleasure working with you.",
        underline: 'Its',
        choices: ["It's", 'Its', "Its'", 'It'],
        correct: 0,
        explanation: '"It\'s" means "it has" (or "it is").'
      },
      {
        text: 'The bird built its nest in the oak tree.',
        underline: 'its',
        choices: ['No change', "it's", "its'", 'it'],
        correct: 0,
        explanation: '"Its" shows possession: the nest belongs to the bird.'
      },
      {
        text: "It's important to arrive on time.",
        underline: "It's",
        choices: ['No change', 'Its', "Its'", 'It'],
        correct: 0,
        explanation: '"It\'s" is the contraction of "it is."'
      }
    ],

    "Their/There/They're": [
      {
        text: 'The students left there backpacks in the classroom.',
        underline: 'there',
        choices: ['their', 'there', "they're", 'No change'],
        correct: 0,
        explanation: '"Their" shows possession.'
      },
      {
        text: 'Their going to the museum tomorrow.',
        underline: 'Their',
        choices: ["They're", 'Their', 'There', 'No change'],
        correct: 0,
        explanation: '"They\'re" means "they are."'
      },
      {
        text: 'Please put the boxes over their by the door.',
        underline: 'their',
        choices: ['there', 'their', "they're", 'No change'],
        correct: 0,
        explanation: '"There" indicates a place.'
      },
      {
        text: 'The volunteers, who meet every Saturday, are proud of there work.',
        underline: 'there work',
        choices: ['their work', 'there work', "they're work", 'No change'],
        correct: 0,
        explanation: '"Their work" shows possession.'
      },
      {
        text: "They're are several reasons to visit the coast.",
        underline: "They're",
        choices: ['There', "They're", 'Their', 'No change'],
        correct: 0,
        explanation: '"There are" introduces the existence of something.'
      }
    ]
  };

  const GEN = {};
  Object.keys(BANK).forEach(topic => {
    GEN[topic] = BANK[topic].map(item => {
      const stem = pick(stems);
      const prompt = stem + '\n\n"' + item.text.replace(item.underline, '<u>' + item.underline + '</u>') + '"';
      return () => q4(prompt, item.choices, item.correct, item.explanation);
    });
  });

  const fallback = (level, topicName) => q4(
    'Which choice best revises the underlined portion for "' + topicName + '"?',
    ['Keep the underlined portion exactly as it is.', 'Revise for style only.', 'Delete the underlined portion.', 'Add a transition before it.'],
    0,
    'Review the Learn tab for the rule behind ' + topicName + '.');

  window.SectionQuestionGenerator = window.SectionQuestionGenerator || {};
  window.SectionQuestionGenerator.english = window.makeSectionGenerator(GEN, fallback);
})();
