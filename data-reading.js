(function () {
  'use strict';
  data["reading"] = {
    title: "ACT Reading",
    desc: "36 questions · 40 minutes · Literary, Social Studies, Humanities, and Natural Science passages",
    categories: [
      {
        name: "Key Ideas & Details",
        topics: [
          {
            name: "Main Idea / Central Theme",
            diff: "medium",
            expl: `The main idea is what the entire passage is about — its primary argument or thesis, stated in a way that covers the whole piece rather than just one piece of it.<br><br>To find it:<br>• Read the first and last paragraphs carefully — the thesis often lives there, frequently in the first sentence or two of the opening paragraph.<br>• Ask: If I had to summarize this in one sentence, what would I say?<br>• Eliminate answers that are too narrow (just a detail) or too broad (goes beyond the text).<br><br><strong>ACT strategy:</strong> Wrong answers often sound plausible but focus on minor details rather than the core argument. The right answer is broad enough to cover the whole passage but specific enough to match what the author actually claims.<br><br><div class="example-box">
  <strong>Question:</strong> "Forest fires are often portrayed solely as disasters, yet ecologists now frame them as regeneration events. A century of aggressive fire suppression has left many forests overcrowded, starving healthy growth of light and water. Today, controlled burns deliberately mimic the rhythms fire once brought." Which of the following best states the central idea of this passage?
  <div class="step-box"><span class="step-num">1</span> Read the first sentence for the author's angle: fires are "regeneration forces," not just disasters.</div>
  <div class="step-box"><span class="step-num">2</span> Test the middle sentences against that claim — suppression "left forests overcrowded," and controlled burns "restore" balance.</div>
  <div class="step-box"><span class="step-num">3</span> Choose the answer broad enough to cover the suppression backstory AND the controlled-burn response.</div>
  <strong>Answer:</strong> "Fire, though often seen as destructive, plays a beneficial role in forest health that modern land managers are working to restore." Each detail (suppression, overcrowding, controlled burns) feeds that claim. An answer like "Smoke hurts firefighters" is too narrow and unsupported; "Nature is unpredictable" is far too broad.
</div><div class="warning-box">A "topic" (what a passage is <strong>about</strong>, e.g., "fires") is NOT the same as a "main idea" (what the author <strong>says</strong> about it, e.g., "fires benefit forests"). An answer choice that just names the subject, with no claim attached, is almost always a trap.</div>`
          },
          {
            name: "Locating Specific Details",
            diff: "easy",
            expl: `These are look-up questions — the answer is stated directly in the passage, and your job is simply to find it fast and accurately.<br><br>Strategy:<br>1. Read the question and identify a keyword (usually a proper noun, number, date, or distinctive phrase)<br>2. Scan the passage for that keyword<br>3. Read 2-3 lines around it<br>4. Match to the answer choice<br><br>Don't rely on memory. Go back to the passage every time. The ACT will often use exact phrasing from the text in the right answer, and slightly twisted phrasing in wrong ones.<br><br><div class="example-box">
  <strong>Question:</strong> "The Thompson expedition departed in June 1841, outfitted with 40 mules and provisions intended to last until winter. The mapmaking crew, unlike earlier parties, carried waterproofed instruments and recorded readings at dawn."<br>According to the passage, the Thompson expedition differed from earlier parties because it carried:<br>F. more mules.<br>G. waterproofed instruments.<br>H. provisions for two years.<br>J. a smaller crew.
  <div class="step-box"><span class="step-num">1</span> Identify the keyword: "unlike earlier parties" zeroes you in on the comparison clause.</div>
  <div class="step-box"><span class="step-num">2</span> Read closely: the comparison is "carried a thermometer" that was waterproofed and recorded at dawn.</div>
  <div class="step-box"><span class="step-num">3</span> Match directly: choice G restates that detail nearly word-for-word.</div>
  <strong>Answer:</strong> G. "waterproofed instruments" — a near-verbatim match to the passage. F and H reuse words from the passage (40 mules, "until April") but answer a question the passage never asks.
</div><div class="warning-box">The biggest trap is <strong>false matching</strong>: an answer that uses real vocabulary and numbers from the passage but swaps a key modifier or reverses the relationship. Always verify the exact claim the question asks, not just that the words look familiar.</div>`
          },
          {
            name: "Cause & Effect",
            diff: "medium",
            expl: `These questions ask why something happened or what resulted from an event. The ACT wants you to trace a real causal chain stated (or strongly implied) in the text — not invent one.<br><br>Look for signal words: because, since, as a result, consequently, led to, caused, therefore, thus.<br><br>Strategy: Find the event in the passage, then look immediately before (for causes) or after (for effects). The ACT rarely makes you infer far — the relationship is usually stated nearby.<br><br>Beware of answer choices that reverse the cause and effect or that mistake a correlation for a cause.<br><br><div class="example-box">
  <strong>Question:</strong> "Because the bridge lacked expansion joints, the summer heat forced its steel girders to buckle and push apart the roadway's sealing. Consequently, the maintenance crew closed the upper deck for repairs." According to the passage, the upper deck closed because the heat:<br>F. warped the steel girders and split the roadway sealing.<br>G. inflated the crew's workload over the winter.<br>H. caused engineers to install the joints.<br>J. made the river rise beneath the bridge.
  <div class="step-box"><span class="step-num">1</span> Work the causal chain: no joints → heat → girders buckle → sealing splits → crew closes deck.</div>
  <div class="step-box"><span class="step-num">2</span> The first link in the chain is the heat damaging the girders and the sealing.</div>
  <div class="step-box"><span class="step-num">3</span> Pick the option that names that direct cause, not a side detail.</div>
  <strong>Answer:</strong> F. "buckled the steel" and "split the sealing" describe the exact causal mechanism. Choice H reverses the order (the joints arrived because of, not despite, the past) — a classic ACT reversal trap.
</div><div class="warning-box">ACT cause-and-effect questions love the <strong>reversal trap</strong> — swapping which thing caused the other, or implying the effect came before the cause. Read the chain left to right in the passage, and match the direction to the answer phrase exactly.</div>`
          },
          {
            name: "Making Inferences",
            diff: "hard",
            expl: `An inference is a logical conclusion based on evidence in the text — NOT a guess.<br><br>Golden rule: <strong>Every correct inference must be directly supportable by the text.</strong> If you can't point to a specific line that supports it, it's probably wrong.<br><br>Example: If the passage says "She slammed the door and didn't say goodbye," you can infer she was angry — but you CAN'T infer she hated the person (too strong, not directly supported).<br><br>ACT inferences are conservative. Pick the answer that requires the smallest logical leap — the one that stays closest to what the text literally supports.<br><br><div class="example-box">
  <strong>Question:</strong> "By late October the crew had abandoned the radio schedule. Mail had stopped from the colony, and Johan was seen loading his surveying rolls onto the train." It is most reasonable to infer from the passage that:<br>F. The colony had run out of coal.<br>G. Johan's surveying work in the field was ending.<br>H. The train was out of service all winter.<br>J. The mail service had been cut permanently.
  <div class="step-box"><span class="step-num">1</span> Look only at what is stated: the mailbox went quiet, and Johan packed up his survey equipment.</div>
  <div class="step-box"><span class="step-num">2</span> The smallest leap: Johan is loading the very tools of his field job, suggesting that work is winding down.</div>
  <div class="step-box"><span class="step-num">3</span> Reject leaps: none of F, H, or J is forced by the lines given; each adds a claim the text never makes.</div>
  <strong>Answer:</strong> G. It requires the least added assumption. F invents an unmentioned resource problem; H and J take one silent occasion and extend it to an absolute conclusion.
</div><div class="warning-box">Extreme words — <strong>always, never, only, clearly, proved, permanently</strong> — are red flags in inference choices. When you massively shade what the text supports, the ACT may be sneaking an overreach in; the safer inference of the smallest step usually wins.</div>`
          },
        ]
      },
      {
        name: "Craft & Structure",
        topics: [
          {
            name: "Vocabulary in Context",
            diff: "medium",
            expl: `These questions ask how a word is used most nearly to mean — as the word is USED among the passage, not its dictionary definition. The tested word is often a simple one with an unusual or secondary meaning.<br><br>Don't rely on your prior knowledge of the word. <strong>Go back and read the sentence</strong>, then predict what the meaning fits before you look at the choices.<br><br>Example: "He had a <em>sharp</em> mind." Sharp here means intelligent/quick, not pointy/edged — and the surrounding sentences make that clear.<br><br>Plug your predicted meaning into the sentence mentally. The right answer should fit seamlessly in place of the word.<br><br><div class="example-box">
  <strong>Question:</strong> "The retiree turned his attention to the garden, tending rows of tomatoes with the museum's mint toward habits he had once reserved for the lab." In line 5, the word <em>draft</em> most nearly means:<br>F. printed.<br>G. recruited.<br>H. a rough outline.<br>I. a sudden cold air current.
  <div class="step-box"><span class="step-num">1</span> Locate "method/tool" in the sentence and read what it stands with: careful habits transferred from a lab world.</div>
  <div class="step-box"><span class="step-num">2</span> Predict: the word is describing care/precision carried over to gardening.</div>
  <div class="step-box"><span class="step-num">3</span> Plug options: "tended with careful care" fits well; "a sudden cold air" makes no sense in context.</div>
  <strong>Answer:</strong> B. In context, the word carries the meaning of care and precision, not a physical bound draft or air draft. F, and base meanings sound plausible but don't fit the context.
</div><div class="warning-box">When starting, the ACT usually lists the "dictionary" meaning first (like "air" for a word such as a cloud) to catch students who lean on memory instead of context. Always go back and read the exact sentence; the single-word guess is rarely the answer.</div>`
          },
          {
            name: "Author's Purpose & Tone",
            diff: "medium",
            expl: `What is the author trying to accomplish? That's the purpose. The tone is the overall attitude the author takes toward the subject — and both together define the passage's personality.<br><br>Common purposes: to inform, to persuade, to entertain, to describe, to analyze, to criticize.<br><br><strong>Tone</strong> is the author's attitude: admiring, critical, neutral, humorous, concerned, hopeful, skeptical, etc.<br><br>How to identify: Look at word choice. "The policy was implemented" (neutral) vs. "The disastrous policy was imposed" (critical). Pay attention to adjectives and adverbs — they reveal the author's stance. Also ask: is the author agreeing, celebrating, warning, mocking?<br><br><div class="example-box">
  <strong>Question:</strong> "For all the talk of a city finally 'whole,' the new rail line arrives too late for the block families who watched their street s cheap during the decades of neglect." The author's primary purpose is to:<br>F. celebrate a long-awaited infrastructure project.<br>G. criticize a project that seems that overlooked some communities.<br>H. explain the technical workings of rail systems.<br>J. narrate a family memory.
  <div class="step-box"><span class="step-num">1</span> Note the emotionally charged words: "too late," "neglect," the skeptical insider "whole."</div>
  <div class="step-box"><span class="step-num">2</span> Ask which strategy best matches a warning/critical stance.</div>
  <div class="step-box"><span class="step-num">3</span> Eliminate G because they describe a cheerful alignment, and eliminate the ones that describe informational tone.</div>
  <strong>Answer:</strong> G. The author uses irony ("a city 'whole'") and hardship words to flag a critique. F gets the topic right but the direction wrong (it celebrates); "explaining mechanics" (H) is a purpose the passage never serves.
</div><div class="warning-box">Purpose and tone often travel together, but read carefully: an author can be <strong>informative about a topic while being critical toward it</strong>. Don't pick a choice because it names the topic — match the option to the author's ACTUAL stance, which word choice reveals.</div>`
          },
          {
            name: "Text Structure",
            diff: "medium",
            expl: `How is the passage built? Recognizing the skeleton helps you answer main-idea, paragraph-function, and organization questions quickly. Common structures:<br><br>• <strong>Chronological:</strong> Events in time order<br>• <strong>Cause/Effect:</strong> Explains why something happened<br>• <strong>Compare/Contrast:</strong> Similarities and differences<br>• <strong>Problem/Solution:</strong> Identifies a problem and proposes solutions<br>• <strong>Claim/Evidence:</strong> Makes an argument and supports it<br><br>As you read, ask: <em>What is the author doing in this paragraph?</em> Introduce a problem? Present evidence? Counter an objection?<br><br>Signal words reveal structure: <strong>first, then</strong> (chronological), <strong>however, on the other hand</strong> (contrast), <strong>similarly</strong> (comparison), <strong>therefore, as a result</strong> (cause/effect), <strong>for example, in addition</strong> (support/evidence).<br><br><div class="example-box">
  <strong>Question:</strong> The final paragraph of a passage begins: "Some analysts warn that the program will raise costs. Yet the pilot cities reported 20% fewer overdue services, suggesting the opposite." The relationship between the two sentences is best described as:<br>F. a problem followed by its solution.<br>G. an objection followed by a countering piece of evidence.<br>H. two details arranged in order of time.<br>I. a theory followed by a definition.
  <div class="step-box"><span class="step-num">1</span> Identify the function of each sentence: "Some analysts warn..." states a counterargument.</div>
  <div class="step-box"><span class="step-num">2</span> "Yet the pilot cities reported..." introduces evidence not agreeing, quickly clashing with that objection.</div>
  <div class="step-box"><span class="step-num">3</span> Match that move to an answer: an objection meets counter-evidence.</div>
  <strong>Answer:</strong> G. "Yet" is the signal of the turn from objection to rebuttal. F misses the debate tone (no "problem then fix"), J fails (no timeline), I fails (a claim vs. a counterweight, not a new claim).
</div><div class="warning-box">When a question asks "the relationship between the clauses," focus on the <strong>junction word</strong> (however, moreover, therefore, for example). The connector usually maps straight onto one of the structure names in the answer choices — highlight the relationship of "but/and/results/reason" first.</div>`
          },
          {
            name: "Point of View",
            diff: "medium",
            expl: `Perspective — whose eyes we see through — shapes every passage.<br><br><strong>First person</strong> (I, we): Author is a participant or narrator, inside the events.<br><strong>Second person</strong> (you): Rare — author addresses the reader directly.<br><strong>Third person limited</strong> (he, she): Narrator knows one character's thoughts.<br><strong>Third person omniscient</strong>: Narrator knows all characters' thoughts.<br><br>Identify who the "I" or the narrator is and what they can know. A first-person narrator's opinions are their own, NOT necessarily the author's, and certainly not an omniscient truth.<br><br>For paired passages especially: identify each author's perspective. Do they agree? Disagree? Approach the topic from different angles? The questions will ask you to compare them.<br><br><div class="example-box">
  <strong>Question:</strong> "From my doorway I watched Ana check letter after letter, hopeful the parcel would hold the answer. She did not see me." The passage is narrated from:<br>F. An omniscient third-person perspective that knows Ana's hope.<br>G. A first-person perspective limited to the narrator's own observation.<br>H. An objective fact report that give no interior feelings.<br>I. A second-person perspective speaking directly to Ana.
  <div class="step-box"><span class="step-num">1</span> Check the pronouns: "my doorway," "I watched" → first-person narration.</div>
  <div class="step-box"><span class="step-num">2</span> Check the limits: the narrator knows only what he sees, and that Ana is hopeful.</div>
  <div class="step-box"><span class="step-num">3</span> The word "hopeful" — is that the narrator's interpretation? Yes; we don't get Ana's inner thoughts.</div>
  <strong>Answer:</strong> G. First-person limits the reader to the narrator's observations ("I saw" = an only guessing her hope). F attributes omniscience; H fades the feeling when the emotions are right there; I (-you-) is not used.
</div><div class="warning-box">An easy mix: <strong>first-person</strong> (an "I" telling a story of themselves) vs. <strong>third-person limited</strong> (a shelter narrator showing ONE character's thoughts). Look for "I" vs. "he/she" to tell them apart; both can be equally limited and subjective.</div>`
          },
        ]
      },
      {
        name: "Integration of Knowledge",
        topics: [
          {
            name: "Claims & Evidence",
            diff: "medium",
            expl: `These questions ask which evidence best supports a claim, or what claim a piece of evidence supports. They reward tying a specific fact, statistic, or example back to the invisible piece of reasoning it serves.<br><br>Strategy:<br>1. Identify the claim in the question<br>2. Go to the passage and find where the author makes or supports that claim<br>3. Look for facts, statistics, examples, or quotes that back it up<br>4. Match the right evidence to that specific claim<br><br>Wrong answers often cite information from the wrong part of the passage, or twist the evidence to support a slightly different claim.<br><br><div class="example-box">
  <strong>Question:</strong> The claim "the town's economy no longer depends on the mill" would be best supported by stating:<br>F. the mill employed 400 people in 1990.<br>G. last year, three tech firms and a bento launch brought the unemployment to its lowest level, while the mill employed only 40.<br>H. the mill was built in 1872 on the river.<br>I. the mill director supported the new tax plan.
  <div class="step-box"><span class="step-num">1</span> Isolate the claim: the mill is no longer the town's economic backbone.</div>
  <div class="step-box"><span class="step-num">2</span> Look for the evidence that COMPARES or CONTRASTS other industries with the mill's shrinking role.</div>
  <div class="step-box"><span class="step-num">3</span> The winning evidence shows new industries dominating while the mill's share sinks.</div>
  <strong>Answer:</strong> G. It directly compares (low unemployment from tech firms, mill down to a stub share) — proving dependence has shifted, a facet the claim needs. F and H give context but never show the mill ceasing to be the sole driver.
</div><div class="warning-box">The wrong choices are usually plasma: a fact that is TRUE in the passage but supports a DIFFERENT claim. Before choosing, spell out in your head "this evidence makes ________ true" — if the blank isn't the claim asked about, it's a trap for a throwaway detail.</div>`
          },
          {
            name: "Paired Passages",
            diff: "hard",
            expl: `Two passages on the same topic, often from different centuries, sources, or points of view — and the questions pit them against each other.<br><br>Approach:<br>1. Read Passage 1 and answer any questions that refer to Passage 1 only<br>2. Read Passage 2 and answer its only questions<br>3. Answer the comparison questions last (you'll have both fresh in mind)<br><br>Comparison questions ask:<br>• Where do the authors AGREE?<br>• Where do they DISAGREE?<br>• How would Author 1 respond to Author 2's argument?<br>• Which statement would BOTH authors support/reject?<br><br>Create a mental (or scratch-paper) Venn diagram of their positions. Track what they genuinely agree on (a shared premise) versus where they part ways (different conclusions, different priorities).<br><br><div class="example-box">
  <strong>Question:</strong> Passage 1 argues that public libraries' primary gift is free access to books. Passage 2 argues the same institutions' real value is as a community meeting space, conceding that a physical collection is secondary. Both authors would most likely agree that:<br>F. public libraries should charge a small fee.<br>G. libraries serve a valuable social role.<br>H. e-books have replaced physical libraries.<br>I. only books deserve support.
  <div class="step-box"><span class="step-num">1</span> Ask for Dr. Each passage says libraries worth something — the object ("a place worth keeping").</div>
  <div class="step-box"><span class="step-num">2</span> Check the surface difference: Patient 1 = books; Patient 2 = space — but both a value.</div>
  <div class="step-box"><span class="step-num">3</span> The answers that would kill one author's point (fee, replacement, only books) can't work.</div>
  <strong>Answer:</strong> G. It stays at the level of common ground. F and I each serve one author at the expense of the other, and H contradicts both.
</div><div class="warning-box">For "both would agree" questions, the correct answer is almost always the <strong>broadest floor</strong> they share, not the specific passion of either author. If an answer reflects only Passage 1's framing, it's wrong even if it's a correct fact about Passage 1.</div>`
          },
          {
            name: "Visual/Quantitative Integration",
            diff: "medium",
            expl: `Some passages include a graph, chart, or table, and the questions combine its data with the passage's written claims.<br><br>These questions ask you to connect the data to the text. While 1-2 to 2 per test, they're highly mixable.<br><br>Strategy:<br>1. Read the question first — it tells you what trend or relationship to look for<br>2. Read the visual (its title, its labels, you current units) for the relevant values<br>3. Connect the data to what the passage says about that data<br>4. Test every answer against BOTH the visual AND the text<br><br>Eliminate anything that contradicts the graph OR the passage — the right answer must be consistent with both at the same time.<br><br><div class="example-box">
  <strong>Question:</strong> On a passage about drought, the accompanying graph shows the region's annual rainfall dipping below the historical 20 cm average in 3 of the last 5 years. According to the passage and the graph, the region's water supply: <br>F. Since it's in a state of occasional drought.<br>B. Is consistently above average every year.<br>H. Has risen steadily since the graph began.<br>I. Is measured only by river flow.
  <div class="step-box"><span class="step-num">1</span> Read the graph: the rainfall in 3 of 5 recent years sits below the 20 cm line.</div>
  <div class="step-box"><span class="step-num">2</span> Bridge to the passage: the text ties below-average rainfall to drought conditions.</div>
  <div class="step-box"><span class="step-num">3</span> Eliminate Extremes: an "always below" and a "steady rise" flatly contradict the graph-trend.</div>
  <strong>Answer:</strong> F. The data and the passage together support "recently drier, occasionally drought-risky." G and H overclaim or contradict what the graph shows; I adds a claim (river flow alone) that meets support from neither text.
</div><div class="warning-box">The single most common trap: picking an answer that the passage fully supports but that conflicts with your glance at the data — or vice versa. Train yourself to double-check the CLUE: test each choice against BOTH the words and the numbers.</div>`
          },
        ]
      },
      {
        name: "Passage Types",
        topics: [
          {
            name: "Literary Narrative / Prose Fiction",
            diff: "medium",
            expl: `Excerpts from novels, short stories, or memoirs. The workhorse of Literary Reading passages, and the most character-driven of the four types. Focus on characters, emotions, and relationships.<br><br>Key skills:<br>• Track the narrator's attitude and emotional shifts<br>• Identify character motivations (why did they do what they did?)<br>• Notice descriptive language and what it reveals about mood or tension<br>• Look for internal conflict or a pivotal realization moment<br><br>These passages often carry more inference questions. The right answer is the one most consistent with the character's personality and the story's tone — not a snap judgment or a leap.<br><br><div class="example-box">
  <strong>Question:</strong> "Jean set three plates and then, hesitating, returned the third to the shelf. The was she'd planned for the guest turned into a bowl of soup the two sisters shared, and though neither said a word, both sat closer by the lantern than was strictly necessary." The narrator's primary sense at this moment is most nearly:<br>F. relief that the evening went exactly as planned.<br>G. hunger.<br>H. resilience built on denial.<br>I. never, awkwardly acting for comfort.
  <div class="step-box"><span class="step-num">1</span> Trace the details and their emotional weight: the third plate is put away, the meal shrinks, yet they both move closer.</div>
  <div class="step-box"><span class="step-num">2</span> These describe a family coping after a loss — comfort in closeness, not celebration <br>3. Test for extreme. "exactly as planned" / "resilience" add judgement beyond the text.<br></div>
  <strong>Answer:</strong> H. The observable action (drawing closer without a word) weakly suggests an unspoken comfort, keeping it less specific and therefore safer than F or I. G drastically avoids the scene.
</div><div class="warning-box">Fiction inference questions punish overreach: 'anger,' 'jealousy,' or 'hatred' are frequent wrong answers that window the tent to an extreme. Always choose the emotion that the character's concrete Action — not your own reaction — supports.</div>`
          },
          {
            name: "Social Studies",
            diff: "medium",
            expl: `Topics: history, economics, psychology, sociology, anthropology. These passages are usually argument-driven: the author takes a thesis and backs it up with evidence, examples, and occasionally statistics.<br><br>Key skills:<br>• Identify the thesis in the first paragraph<br>• Track how each paragraph supports it<br>• Notice cause/effect relationships and connecting threads<br>• Pay attention to dates, named figures, and the specific studies/events mentioned<br><br>Questions focus on the argument's logic: what claim is made, how is it supported, what counterarguments exist, and what trend is used as foundation.<br><br><div class="example-box">
  <strong>Question:</strong> An excerpt argues that a nation's education reforms of the 1860s achieved literacy gains only among wealthy landowners. Supporting passage: "As the decade for secondary schooling expanded, records show admissions concentrated in districts with high rates of property holding; poor districts saw enrollment rise less than 3%." The bulk of the author's argument is built on:<br>
  F. anecdotal claims.<br>G. statistical data about enrollment and districts.<br>H. expert medical testimony.<br>I. a personal memory.
  <div class="step-box"><span class="step-num">1</span> Identify the thesis: education reform helped land credit areas rather than the poor.</div>
  <div class="step-box"><span class="step-num">2</span> Notice the evidence: percentages, "less than 3%," district-by-district records.</div>
  <div class="step-box"><span class="step-num">3</span> Judge the type of evidence and match the answer to it.</div>
  <strong>Answer:</strong> G. The claim rests on numerical enrollment records gathered by district — quantitative data. F ("stories") and I ("personal memory") are the wrong evidence type, and H invents medical testimony that isn't in the excerpt.
</div><div class="warning-box">Social Studies answers love to trip you up with the "district it" spectrum: a qualifying phrase (much/little, "less than 3%") is often the whole point. Pay attention to whether the evidence supports INSERT nation-wide trends or <i>one subgroup</i> — the boundaries of the claim decide the right answer.</div>`
          },
          {
            name: "Humanities",
            diff: "medium",
            expl: `Topics: art, music, philosophy, cultural criticism, personal essays. These are often the most abstract passages on the ACT, where the author is describing an artistic movement, analyzing a philosophical idea, or reflecting on a cultural phenomenon.<br><br>Key skills:<br>• Grasp the central thesis or aesthetic argument<br>• Understand the author's value judgments (what do they admire? criticize?)<br>• Track the comparisons between artists, periods, or ideas<br>• Don't get lost in the fancy language — translate abstract claims into plain "the author thinks X is good/bad/historical."<br><br>Every ruffled passage still has a sharp, specific claim underneath the ornament. Find the argument, discount the decoration.<br><br><div class="example-box">
  <strong>Question:</strong> "The folk revival of the 1960s is too often remembered as M Disney, polished nostalgia. Yet in its best moment, it treated ballads with the seriousness of archives: singing versions of songs, not neat abbreviation. It was one workshop enterprise, not a salon." The author's attitude toward the folk revival is most clearly:<br>
  F. dismissive because it was you "of nostalgia."<br>G. mixed, wary of the kitsch but admiring of the archival mission.<br>H. hostile to the entire musical century.<br>I. neutral, purely descriptive.
  <div class="step-box"><span class="step-num">1</span> Pull the value judgments: "misunderstood," "respect," "one workshop enterprise," contrast of "polished nostalgia."</div>
  <div class="step-box"><span class="step-num">2</span> Decide whether those opinions are one sided or balanced: it defends the revival against a common knock.</div>
  <div class="step-box"><span class="step-num">3</span> Match the balanced stance — reject a summary choice not matching the mix.</div>
  <strong>Answer:</strong> G. The author critiques the polished/misunderstood angle yet praises the archival seriousness — a distinguishing approval. F misreads the critique as the total attitude; H groups, J is fact forget the open existence of feelings throughout.
</div><div class="warning-box">Humanities passages make 'fancy language' appear in both the text AND the answers. A glittering answer choice that quotes an eloquent phrase can still be <strong>out of scope</strong> or overstate the author's stance. Translate the author's judgments into plain words, then inspect the plain meaning behind each option.</div>`
          },
          {
            name: "Natural Sciences",
            diff: "medium",
            expl: `Topics: biology, chemistry, physics, astronomy, geology, medicine. These passages explain scientific phenomena, experiments, or discoveries, and they're dense with information but logically structure. The good news: every fact you need is IN the passage, no outside science knowledge required.<br><br>Key skills:<br>• Identify the main scientific concept or process being explained<br>• Track the sequence of a process or experiment<br>• Understand cause/effect relationships<br>• Look for the twist or novelty — what the discovery/discovery source against a previous assumption<br><br>Don't panic if you don't recognize the topic. Go back to the text and find exactly what's supported and what's up.<br><br><div class="example-box">
  <strong>Question:</strong> A passage describes a study in which a bacterial enzyme was heat-shocked; the team noted that the enzyme's ferments fell 40% but the reaction time doubled the second trial. According to the passage, the authors were able to conclude that enzymes: <br>F. Are unaffected by heat.<br>B. Lose some activity under heat shock.<br>H. Triple their speed when heated.<br>I. Only work inside living cells.
  <div class="step-box"><span class="step-num">1</span> Locate the finding: heat shock produced "40% lower" fermentation yet still ran.</div>
  <div class="step-box"><span class="step-num">2</span> Translate: the enzyme worked, but a dimmed activity—it didn't stop, and it didn't speed up.</div>
  <div class="step-box"><span class="step-num">3</span> Eliminate the absolute options ("unaffected", "triple", "only inside cells") that the data contradicts.</div>
  <strong>Answer:</strong> G. The report's numbers support a partial loss of function under heat. F, H contradict the data outright; I brings an outside claim ("in living cells") that the passage never states, a rental ACT should you would not fill in.
</div><div class="warning-box">In science passages the wrong answers usually break in an ornamental way: overstating an effect, or importing outside assumptions. A favorite half-truth cite actual numbers from the passage but adds a <strong>word the passage never says</strong> (like "permanent" or "only)." Stick to what the text — and only the text — allows.</div>`
          },
        ]
      },
    ]
  };
})();