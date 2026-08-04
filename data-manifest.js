// ╔══════════════════════════════════════════╗
// ║   DATA MANIFEST + LAZY-LOADER            ║
// ╚══════════════════════════════════════════╝
//
// The full topic dataset used to ship as one 91KB `data.js`. It is now split
// into per-section chunks that are fetched only when the user first navigates
// to that section. `data` is the shared accumulator; each chunk merges its
// section into it (e.g. `data['math'] = {...}`).
//
// `loadSection(key)` returns a promise that resolves once the chunk (and its
// optional question-generator chunk) is ready. Unloaded sections simply don't
// exist in `data` yet, so code must treat `data[section]` as possibly-missing.

const DATA_MANIFEST = {
  math: {
    file: 'data-math.js',
    gen: null,
    count: 46,
    title: 'ACT Math',
    desc: '45 questions · 50 minutes · 5 answer choices per question',
    test: { q: 45, min: 50 }
  },
  english: {
    file: 'data-english.js',
    gen: 'generators-english.js',
    count: 24,
    title: 'ACT English',
    desc: '50 questions · 35 minutes · Grammar, style & rhetoric',
    test: { q: 50, min: 35 }
  },
  reading: {
    file: 'data-reading.js',
    gen: 'generators-reading.js',
    count: 15,
    title: 'ACT Reading',
    desc: '36 questions · 40 minutes · Literary, Social Studies, Humanities, and Natural Science passages',
    test: { q: 36, min: 40 }
  },
  science: {
    file: 'data-science.js',
    gen: 'generators-science.js',
    count: 22,
    title: 'ACT Science',
    desc: '40 questions · 40 minutes · Optional add-on · Data analysis & reasoning',
    test: { q: 40, min: 40 }
  },
  'past tests': {
    file: 'data-past-tests.js',
    gen: null,
    count: 16,
    title: 'Past Tests',
    desc: 'Full-length ACT practice tests by subject',
    test: null
  },
  'other links': {
    file: 'data-other-links.js',
    gen: null,
    count: 3,
    title: 'Other Links',
    desc: 'Helpful ACT resources and study links',
    test: null
  }
};

const data = {};
const loadedSections = new Set();
const loadingPromises = {};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

// Load a section's data chunk (and its question generators, if any).
function loadSection(key) {
  if (!DATA_MANIFEST[key]) return Promise.resolve();
  if (loadedSections.has(key) || data[key]) return Promise.resolve();
  if (loadingPromises[key]) return loadingPromises[key];
  const entry = DATA_MANIFEST[key];
  const jobs = [loadScript(entry.file)];
  if (entry.gen) jobs.push(loadScript(entry.gen));
  loadingPromises[key] = Promise.all(jobs).then(() => {
    loadedSections.add(key);
    delete loadingPromises[key];
  }).catch((err) => {
    delete loadingPromises[key];
    throw err;
  });
  return loadingPromises[key];
}

// Load every section (used by search so results cover the whole dataset).
function loadAllSections() {
  return Promise.all(Object.keys(DATA_MANIFEST).map(loadSection));
}

// Topic count for a section, using the manifest until its chunk is loaded.
function manifestCount(section) {
  return (DATA_MANIFEST[section] && DATA_MANIFEST[section].count) || 0;
}
