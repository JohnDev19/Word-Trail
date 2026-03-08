// ============================================================
// WORD TRAIL
// ============================================================

// ─────────────────────────────────────────────
// THEME DEFINITIONS
// ─────────────────────────────────────────────
const THEMES = {
  default: {
    name: 'Forest',
    icon: '🌿',
    desc: 'Deep forest zen',
    locked: false,
    cost: 0,
    menuImages: [
      'assets/images/menu/zen-bg-menu1.jpg',
      'assets/images/menu/zen-bg-menu2.jpg',
      'assets/images/menu/zen-bg-menu3.jpg',
    ],
    music: 'assets/sounds/zen-default.mp3',
  },
  sakura: {
    name: 'Sakura',
    icon: '🌸',
    desc: 'Cherry blossom serenity',
    locked: true,
    cost: 2000,
    menuImages: [
      'assets/images/menu/zen-bg-sakura1.jpg',
      'assets/images/menu/zen-bg-sakura2.jpg',
      'assets/images/menu/zen-bg-sakura3.jpg',
    ],
    music: 'assets/sounds/zen-sakura.mp3',
  },
  ocean: {
    name: 'Ocean',
    icon: '🌊',
    desc: 'Abyssal depths',
    locked: true,
    cost: 3000,
    menuImages: [
      'assets/images/menu/zen-bg-ocean1.jpg',
      'assets/images/menu/zen-bg-ocean2.jpg',
      'assets/images/menu/zen-bg-ocean3.jpg',
    ],
    music: 'assets/sounds/zen-ocean.mp3',
  },
  cosmos: {
    name: 'Cosmos',
    icon: '🌌',
    desc: 'Infinite starfields',
    locked: true,
    cost: 4000,
    menuImages: [
      'assets/images/menu/zen-bg-cosmos1.jpg',
      'assets/images/menu/zen-bg-cosmos2.jpg',
      'assets/images/menu/zen-bg-cosmos3.jpg',
    ],
    music: 'assets/sounds/zen-cosmos.mp3',
  },
};

const THEME_ORDER = ['default', 'sakura', 'ocean', 'cosmos'];

// ─────────────────────────────────────────────
// CATEGORY BACKGROUND IMAGES
// ─────────────────────────────────────────────
const CAT_BG_IMAGES = {
  animals:  ['assets/images/animals/bg1.jpg','assets/images/animals/bg2.jpg','assets/images/animals/bg3.jpg','assets/images/animals/bg4.jpg','assets/images/animals/bg5.jpg', 'assets/images/animals/bg6.jpg','assets/images/animals/bg7.jpg','assets/images/animals/bg8.jpg','assets/images/animals/bg9.jpg','assets/images/animals/bg10.jpg'],
  nature:   ['assets/images/nature/bg1.jpg','assets/images/nature/bg2.jpg','assets/images/nature/bg3.jpg','assets/images/nature/bg4.jpg','assets/images/nature/bg5.jpg', 'assets/images/nature/bg6.jpg','assets/images/nature/bg7.jpg','assets/images/nature/bg8.jpg','assets/images/nature/bg9.jpg','assets/images/nature/bg10.jpg'],
  cosmos:   ['assets/images/cosmos/bg1.jpg','assets/images/cosmos/bg2.jpg','assets/images/cosmos/bg3.jpg','assets/images/cosmos/bg4.jpg','assets/images/cosmos/bg5.jpg'],
  zen:      ['assets/images/zen/bg1.jpg','assets/images/zen/bg2.jpg','assets/images/zen/bg3.jpg','assets/images/zen/bg4.jpg','assets/images/zen/bg5.jpg'],
  ocean:    ['assets/images/ocean/bg1.jpg','assets/images/ocean/bg2.jpg','assets/images/ocean/bg3.jpg','assets/images/ocean/bg4.jpg','assets/images/ocean/bg5.jpg'],
  seasons:  ['assets/images/seasons/bg1.jpg','assets/images/seasons/bg2.jpg','assets/images/seasons/bg3.jpg','assets/images/seasons/bg4.jpg','assets/images/seasons/bg5.jpg'],
  mystical: ['assets/images/mystical/bg1.jpg','assets/images/mystical/bg2.jpg','assets/images/mystical/bg3.jpg','assets/images/mystical/bg4.jpg','assets/images/mystical/bg5.jpg'],
};

// ─────────────────────────────────────────────
// LEVEL TITLES
// ─────────────────────────────────────────────
const LEVEL_TITLES = [
  { level: 1,   title: "Seedling",           desc: "Just beginning the path",              icon: "fas fa-seedling"           },
  { level: 8,   title: "Trail Walker",        desc: "Finding your first footing",           icon: "fas fa-shoe-prints"        },
  { level: 18,  title: "Forest Seeker",       desc: "Eyes open, mind beginning to calm",    icon: "fas fa-tree"               },
  { level: 30,  title: "Stream Follower",     desc: "Learning to go with the flow",         icon: "fas fa-water"              },
  { level: 45,  title: "Stone Carver",        desc: "Patience shaping something permanent", icon: "fas fa-mountain"           },
  { level: 60,  title: "Wind Reader",         desc: "Sensing what others miss",             icon: "fas fa-wind"               },
  { level: 78,  title: "Dawn Walker",         desc: "Rising before the rest of the world",  icon: "fas fa-sun"                },
  { level: 95,  title: "Zen Apprentice",      desc: "Discipline is becoming second nature", icon: "fas fa-yin-yang"           },
  { level: 115, title: "Word Weaver",         desc: "Language begins to flow through you",  icon: "fas fa-pen-nib"            },
  { level: 135, title: "Night Scout",         desc: "Comfort in navigating the unknown",    icon: "fas fa-moon"               },
  { level: 155, title: "Storm Walker",        desc: "Unbothered by difficulty or confusion", icon: "fas fa-bolt"              },
  { level: 175, title: "Deep Reader",         desc: "Finding layers where others see plain", icon: "fas fa-book-open"         },
  { level: 200, title: "Path Keeper",         desc: "Guardian of the way forward",          icon: "fas fa-map"                },
  { level: 225, title: "Wandering Sage",      desc: "Wisdom deepens with each step taken",  icon: "fas fa-scroll"            },
  { level: 255, title: "Lotus Master",        desc: "Rooted deep, always rising upward",    icon: "fas fa-spa"                },
  { level: 285, title: "Celestial Eye",       desc: "Seeing patterns beyond the grid",      icon: "fas fa-eye"                },
  { level: 320, title: "Dragon Scholar",      desc: "Fierce intellect, serene presence",    icon: "fas fa-dragon"             },
  { level: 355, title: "Void Dancer",         desc: "Moving gracefully between the letters", icon: "fas fa-infinity"         },
  { level: 390, title: "Grand Seeker",        desc: "Approaching the summit of one trail",  icon: "fas fa-compass"            },
  { level: 430, title: "Word Sovereign",      desc: "Mastery over language and the grid",   icon: "fas fa-crown"              },
  { level: 470, title: "Zenith Walker",       desc: "The summit was just a new beginning",  icon: "fas fa-star"               },
  { level: 520, title: "Ember Keeper",        desc: "The inner flame burns steady and true", icon: "fas fa-fire-flame-curved" },
  { level: 570, title: "Echo Listener",       desc: "Words resonate long after they're found", icon: "fas fa-ear-listen"    },
  { level: 620, title: "Tide Watcher",        desc: "Patient as the eternal ocean's pull",  icon: "fas fa-water"             },
  { level: 675, title: "Root Binder",         desc: "Anchored in deep, hard-won knowledge", icon: "fas fa-leaf"              },
  { level: 730, title: "Sky Scribe",          desc: "Writing meanings across open skies",   icon: "fas fa-cloud"             },
  { level: 790, title: "Iron Pilgrim",        desc: "Forged stronger by relentless seeking", icon: "fas fa-shield"           },
  { level: 850, title: "Rune Keeper",         desc: "Ancient letters bend to your will",    icon: "fas fa-font"              },
  { level: 920, title: "Mist Caller",         desc: "Finding clarity deep inside the haze", icon: "fas fa-smog"              },
  { level: 990, title: "Phantom Seeker",      desc: "Chasing meanings unseen by others",    icon: "fas fa-ghost"             },
  { level: 1060, title: "Meridian Lord",      desc: "Standing at the crossing of all paths", icon: "fas fa-globe"            },
  { level: 1140, title: "Veil Piercer",       desc: "Truth revealed through quiet patience", icon: "fas fa-eye-slash"        },
  { level: 1220, title: "Astral Scribe",      desc: "Words flow outward like distant starlight", icon: "fas fa-star-half-stroke" },
  { level: 1300, title: "Thunder Sage",       desc: "Immense power held in perfect balance", icon: "fas fa-cloud-bolt"      },
  { level: 1380, title: "Abyssal Reader",     desc: "No depth can conceal a word from you",  icon: "fas fa-magnifying-glass" },
  { level: 1450, title: "Eternal Pilgrim",    desc: "The journey itself became the reward",  icon: "fas fa-person-hiking"   },
  { level: 1520, title: "Cosmos Weaver",      desc: "Stitching galaxies together with language", icon: "fas fa-atom"        },
  { level: 1600, title: "Oracle of Words",    desc: "Answers arrive before the questions do", icon: "fas fa-circle-question" },
  { level: 1680, title: "Grand Zenith",       desc: "Among the highest word-walkers ever",   icon: "fas fa-mountain-sun"   },
  { level: 1760, title: "Infinite Seeker",    desc: "True mastery has no final form",        icon: "fas fa-infinity"        },
  { level: 1400, title: "Word Transcendent",  desc: "Beyond the trail — you are the path",   icon: "fas fa-meteor"         },
];

// ─────────────────────────────────────────────
// PER-CATEGORY AMBIENT SFX
// ─────────────────────────────────────────────
const CAT_AMBIENT = {
  animals:  'assets/sounds/ambient-animals.mp3',
  nature:   'assets/sounds/ambient-nature.mp3',
  cosmos:   'assets/sounds/ambient-cosmos.mp3',
  zen:      'assets/sounds/ambient-zen.mp3',
  ocean:    'assets/sounds/ambient-ocean.mp3',
  seasons:  'assets/sounds/ambient-seasons.mp3',
  mystical: 'assets/sounds/ambient-mystical.mp3',
};

let _ambientAudio      = null;
let _ambientFadeTimer  = null;
let _ambientCurrentCat = null;
let _ambientPrimed     = false;
let _ambientPrimedCat  = null;
let _ambientLoopTimer  = null;
const AMBIENT_FADE_OUT_MS = 2800;
const AMBIENT_FADE_IN_MS  = 2800;

function _scheduleAmbientLoop(audioRef, targetVol) {
  audioRef._loopTarget = targetVol;

  function _onEnded() {
    if (audioRef !== _ambientAudio) return;
    audioRef.currentTime = 0;
    audioRef._fadingOut  = false;
    audioRef.play().catch(() => {});
    _fadeAmbientTo(targetVol, AMBIENT_FADE_IN_MS);
    _scheduleAmbientLoop(audioRef, targetVol);
  }

  function _onTimeUpdate() {
    if (audioRef !== _ambientAudio) {
      audioRef.removeEventListener('timeupdate', _onTimeUpdate);
      audioRef.removeEventListener('ended', _onEnded);
      return;
    }
    if (!audioRef.duration || isNaN(audioRef.duration)) return;
    const timeLeft = audioRef.duration - audioRef.currentTime;
    if (timeLeft <= AMBIENT_FADE_OUT_MS / 1000 + 0.1 && !audioRef._fadingOut) {
      audioRef._fadingOut = true;
      audioRef.removeEventListener('timeupdate', _onTimeUpdate);
      audioRef.removeEventListener('ended', _onEnded);
      _fadeAmbientTo(0, AMBIENT_FADE_OUT_MS, () => {
        if (audioRef !== _ambientAudio) return;
        audioRef.currentTime = 0;
        audioRef._fadingOut  = false;
        audioRef.play().catch(() => {});
        _fadeAmbientTo(targetVol, AMBIENT_FADE_IN_MS);
        _scheduleAmbientLoop(audioRef, targetVol);
      });
    }
  }

  audioRef.removeEventListener('timeupdate', audioRef._loopTimeUpdate);
  audioRef.removeEventListener('ended', audioRef._loopEnded);
  audioRef._loopTimeUpdate = _onTimeUpdate;
  audioRef._loopEnded      = _onEnded;
  audioRef.addEventListener('timeupdate', _onTimeUpdate);
  audioRef.addEventListener('ended', _onEnded);
}

function primeAmbient(catKey) {
  if (!S.settings.sfx) return;
  const src = CAT_AMBIENT[catKey];
  if (!src) return;
  if (_ambientPrimedCat === catKey && _ambientAudio) return;

  if (_ambientAudio) { _ambientAudio.pause(); _ambientAudio = null; }

  _ambientPrimed    = false;
  _ambientPrimedCat = catKey;

  const a = new Audio(src);
  a.loop   = false;
  a.volume = 0;
  a.play().then(() => {
    a.pause();
    a.currentTime = 0;
    _ambientAudio  = a;
    _ambientPrimed = true;
  }).catch(() => {
    _ambientPrimed = false;
  });
}

function startCatAmbient(catKey) {
  if (!S.settings.sfx) return;
  const src = CAT_AMBIENT[catKey];
  if (!src) return;

  if (_ambientCurrentCat === catKey && _ambientAudio && !_ambientAudio.paused) return;

  _ambientCurrentCat = catKey;

  if (_ambientAudio && _ambientPrimed && _ambientPrimedCat === catKey) {
    _ambientAudio.loop   = false;
    _ambientAudio.volume = 0;
    _ambientAudio.play().catch(() => {});
    _fadeAmbientTo(0.70, 2400);
    _ambientPrimed = false;
    _scheduleAmbientLoop(_ambientAudio, 0.70);
  } else {
    if (_ambientAudio) { _ambientAudio.pause(); _ambientAudio = null; }
    const a = new Audio(src);
    a.loop   = false;
    a.volume = 0;
    _ambientAudio = a;
    a.play().catch(() => {});
    _fadeAmbientTo(0.70, 2400);
    _scheduleAmbientLoop(a, 0.70);
  }
}

function stopCatAmbient(fadeDurationMs = 2400) {
  if (_ambientFadeTimer)  { clearInterval(_ambientFadeTimer);  _ambientFadeTimer  = null; }
  if (_ambientLoopTimer)  { clearTimeout(_ambientLoopTimer);   _ambientLoopTimer  = null; }
  const dying        = _ambientAudio;
  _ambientAudio      = null;
  _ambientCurrentCat = null;
  _ambientPrimed     = false;
  _ambientPrimedCat  = null;
  if (!dying) return;
  const steps    = 30;
  const interval = fadeDurationMs / steps;
  const startVol = dying.volume;
  let step = 0;
  const t = setInterval(() => {
    step++;
    dying.volume = Math.max(0, startVol - (startVol / steps) * step);
    if (step >= steps) { clearInterval(t); dying.pause(); dying.currentTime = 0; }
  }, interval);
}

function _fadeAmbientTo(targetVol, durationMs, onDone) {
  if (!_ambientAudio) { if (onDone) onDone(); return; }
  if (_ambientFadeTimer) { clearInterval(_ambientFadeTimer); _ambientFadeTimer = null; }
  const steps    = 20;
  const interval = durationMs / steps;
  const startVol = _ambientAudio ? _ambientAudio.volume : 0;
  const delta    = (targetVol - startVol) / steps;
  let step = 0;
  const ref = _ambientAudio;
  _ambientFadeTimer = setInterval(() => {
    step++;
    if (!ref) { clearInterval(_ambientFadeTimer); _ambientFadeTimer = null; if (onDone) onDone(); return; }
    ref.volume = Math.min(1, Math.max(0, startVol + delta * step));
    if (step >= steps) {
      ref.volume = targetVol;
      clearInterval(_ambientFadeTimer);
      _ambientFadeTimer = null;
      if (onDone) onDone();
    }
  }, interval);
}


function getTitleForLevel(l) {
  let t = LEVEL_TITLES[0];
  for (const lt of LEVEL_TITLES) { if (l >= lt.level) t = lt; else break; }
  return t;
}
function getNextTitle(l) {
  for (const lt of LEVEL_TITLES) { if (lt.level > l) return lt; }
  return null;
}

const CAT_ORDER = ['animals', 'nature', 'cosmos', 'zen', 'ocean', 'seasons', 'mystical'];

// ─────────────────────────────────────────────
// DIFFICULTY SCALING
// ─────────────────────────────────────────────
function getDifficultyConfig(catKey) {
  const lv = S.currentLevel;

  let wordCount;
  if      (lv <= 3)   wordCount = 3;
  else if (lv <= 15)  wordCount = 5;
  else if (lv <= 40)  wordCount = 6;
  else if (lv <= 80)  wordCount = 7;
  else if (lv <= 130) wordCount = 8;
  else if (lv <= 190) wordCount = 9;
  else                wordCount = 10;

  let dirs = ['H', 'V'];
  if (lv >= 20) dirs.push('HR', 'VR');
  if (lv >= 40) dirs.push('DR', 'DL');
  if (lv >= 65) dirs.push('DRR', 'DLR');

  const absMax = lv <= 3 ? 4 : 13;
  let prefMin, prefMax;
  if      (lv <= 3)   { prefMin = 3; prefMax = 4; }
  else if (lv <= 20)  { prefMin = 3; prefMax = 5; }
  else if (lv <= 40)  { prefMin = 3; prefMax = 6; }
  else if (lv <= 65)  { prefMin = 3; prefMax = 7; }
  else if (lv <= 90)  { prefMin = 3; prefMax = 8; }
  else if (lv <= 130) { prefMin = 4; prefMax = 10; }
  else                { prefMin = 5; prefMax = 13; }

  return { wordCount, dirs, prefMin, prefMax, absMax };
}

function computeGridSize(words) {
  if (!words || words.length === 0) return 8;
  const lv         = S.currentLevel;
  const longestLen = Math.max(...words.map(w => w.w.length));
  const totalChars = words.reduce((s, w) => s + w.w.length, 0);
  const byLength   = longestLen + 1;
  const byDensity  = Math.ceil(Math.sqrt(totalChars * 2.2));
  const minGrid    = lv <= 3 ? 4 : 5;
  return Math.min(14, Math.max(minGrid, byLength, byDensity));
}

// ─────────────────────────────────────────────
// SAVE STATE
// ─────────────────────────────────────────────
let S = {
  currentLevel: 1,
  score: 0,
  coins: 0,
  streak: 0,
  totalWordsFound: 0,
  settings: { music: true, sfx: true, vibrate: true, clues: true, theme: 'default' },
  unlockedThemes: ['default'],
  currentGame: null,
  savedGame: null,
  activityLog: [],
  lastCat: 'animals',
  unlockedCats: ['animals'],
  usedWords: { animals: [] },
  catSession: { animals: 0 },
  catCycles: { animals: 0 },
  allPathsComplete: false,
  allPathsShownCinematic: false,
  gridSkin: 'default',
  ownedSkins: ['default'],
  shownUnlocks: [],
};

// ─────────────────────────────────────────────
// ALL PATHS COMPLETE CHECK
// ─────────────────────────────────────────────
function areAllPathsComplete() {
  return CAT_ORDER.every(key => {
    const cat   = CATEGORIES[key];
    const found = S.usedWords[key] || [];
    return cat && cat.words.every(w => found.includes(w.w));
  });
}

function resetAllPathsForReplay() {
  CAT_ORDER.forEach(key => {
    S.usedWords[key]  = [];
    S.catCycles[key]  = (S.catCycles[key] || 0) + 1;
  });
  CAT_ORDER.forEach(key => {
    if (!S.unlockedCats.includes(key)) S.unlockedCats.push(key);
    if (!S.catSession[key]) S.catSession[key] = 0;
  });
  S.allPathsComplete = true;
  save();
}

// ─────────────────────────────────────────────
// MENU BACKGROUND SYSTEM
// ─────────────────────────────────────────────
let _menuLayerFront = null;
let _menuLayerBack  = null;
let menuBgIndex = 0;
let menuBgTimer = null;
const MENU_BG_INTERVAL = 300000;

const MENU_FADE_MS    = 2800;
const MENU_FADE_EASE  = 'cubic-bezier(0.45, 0, 0.25, 1)';

function _buildMenuBgLayers() {
  const menuEl = document.getElementById('screen-menu');
  if (!menuEl || _menuLayerFront) return;

  _menuLayerBack = document.createElement('div');
  _menuLayerBack.className = 'menu-bg-layer';
  _menuLayerBack.id = 'menu-bg-back';
  _menuLayerBack.style.cssText = `
    position:absolute;inset:0;background-size:cover;background-position:center;
    z-index:1;pointer-events:none;opacity:0;will-change:opacity;
  `;

  _menuLayerFront = document.createElement('div');
  _menuLayerFront.className = 'menu-bg-layer';
  _menuLayerFront.id = 'menu-bg-front';
  _menuLayerFront.style.cssText = `
    position:absolute;inset:0;background-size:cover;background-position:center;
    z-index:2;pointer-events:none;opacity:1;will-change:opacity;
  `;

  menuEl.insertBefore(_menuLayerBack,  menuEl.firstChild);
  menuEl.insertBefore(_menuLayerFront, menuEl.firstChild);
}

function getMenuImages() {
  const td = THEMES[S.settings.theme] || THEMES.default;
  return td.menuImages || [];
}

function preloadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload  = () => resolve(src);
    img.onerror = () => resolve(src);
    img.src = src;
  });
}

function setMenuBgDirect(src, animate = false) {
  _buildMenuBgLayers();
  _menuLayerFront.style.transition  = 'none';
  _menuLayerBack.style.transition   = 'none';
  _menuLayerFront.style.backgroundImage = `url('${src}')`;
  _menuLayerBack.style.backgroundImage  = `url('${src}')`;
  _menuLayerBack.style.opacity = '0';

  if (animate) {
    _menuLayerFront.style.opacity   = '0';
    _menuLayerFront.style.transform = 'scale(1.08)';
    _menuLayerFront.classList.remove('menu-bg-reveal');
    void _menuLayerFront.offsetWidth;
    _menuLayerFront.classList.add('menu-bg-reveal');
    setTimeout(() => {
      _menuLayerFront.style.opacity   = '1';
      _menuLayerFront.style.transform = 'scale(1)';
      _menuLayerFront.classList.remove('menu-bg-reveal');
    }, 1450);
  } else {
    _menuLayerFront.style.opacity   = '1';
    _menuLayerFront.style.transform = 'scale(1)';
  }
}

let _menuFadeInProgress = false;
async function crossfadeMenuBg(src) {
  if (_menuFadeInProgress) return;
  _menuFadeInProgress = true;
  _buildMenuBgLayers();

  await preloadImage(src);

  _menuLayerBack.style.transition       = 'none';
  _menuLayerBack.style.opacity          = '0';
  _menuLayerBack.style.backgroundImage  = `url('${src}')`;

  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  const t = `opacity ${MENU_FADE_MS}ms ${MENU_FADE_EASE}`;
  _menuLayerBack.style.transition  = t;
  _menuLayerFront.style.transition = t;

  _menuLayerBack.style.opacity  = '1';
  _menuLayerFront.style.opacity = '0';

  setTimeout(() => {
    _menuLayerFront.style.transition      = 'none';
    _menuLayerFront.style.backgroundImage = `url('${src}')`;
    _menuLayerFront.style.opacity         = '1';
    _menuLayerBack.style.transition       = 'none';
    _menuLayerBack.style.opacity          = '0';
    _menuFadeInProgress = false;
  }, MENU_FADE_MS + 80);
}

function initMenuBg() {
  const images = getMenuImages();
  if (!images.length) return;
  menuBgIndex = Math.floor(Math.random() * images.length);
  setMenuBgDirect(images[menuBgIndex], true);
  startMenuBgRotation();
}

function startMenuBgRotation() {
  if (menuBgTimer) clearInterval(menuBgTimer);
  menuBgTimer = setInterval(() => {
    const images = getMenuImages();
    if (!images.length) return;
    menuBgIndex = (menuBgIndex + 1) % images.length;
    crossfadeMenuBg(images[menuBgIndex]);
  }, MENU_BG_INTERVAL);
}

function stopMenuBgRotation() {
  if (menuBgTimer) { clearInterval(menuBgTimer); menuBgTimer = null; }
}

function refreshMenuBgForTheme() {
  _menuFadeInProgress = false;
  menuBgIndex = 0;
  const images = getMenuImages();
  if (!images.length) return;
  setMenuBgDirect(images[0]);
  startMenuBgRotation();
}

// ─────────────────────────────────────────────
// GAME BACKGROUND SYSTEM 
// ─────────────────────────────────────────────

const GAME_BG_OVERLAY_OPACITY = 0.62;
const GAME_FADE_MS   = 2400;
const GAME_FADE_EASE = 'cubic-bezier(0.45, 0, 0.25, 1)';
const BG_ROTATE_INTERVAL = 2 * 60 * 1000; // 2 mins lang

let _gameBgFront    = null;
let _gameBgBack     = null;
let bgCurrentIndex  = 0;
let bgRotateTimer   = null;
let _gameFadeActive = false;
let _currentCatKey  = null;

function _buildGameBgLayers() {
  const gameEl = document.getElementById('screen-game');
  if (_gameBgFront) return;

  _gameBgBack = document.createElement('div');
  _gameBgBack.id = 'game-bg-back';
  _gameBgBack.style.cssText = `
    position:absolute;inset:0;
    background-size:cover;background-position:center;
    pointer-events:none;will-change:opacity;
    z-index:1;opacity:0;
  `;

  _gameBgFront = document.createElement('div');
  _gameBgFront.id = 'game-bg-front';
  _gameBgFront.style.cssText = `
    position:absolute;inset:0;
    background-size:cover;background-position:center;
    pointer-events:none;will-change:opacity;
    z-index:2;opacity:1;
  `;

  const overlay = document.createElement('div');
  overlay.id = 'game-bg-overlay';
  overlay.style.cssText = `
    position:absolute;inset:0;
    z-index:3;
    pointer-events:none;
    background:
      linear-gradient(to bottom,
        rgba(0,0,0,0.72) 0%,
        rgba(0,0,0,0.45) 30%,
        rgba(0,0,0,0.10) 55%,
        rgba(0,0,0,0.00) 70%
      ),
      rgba(0,0,0,${GAME_BG_OVERLAY_OPACITY});
  `;

  gameEl.insertBefore(overlay,      gameEl.firstChild);
  gameEl.insertBefore(_gameBgFront, gameEl.firstChild);
  gameEl.insertBefore(_gameBgBack,  gameEl.firstChild);

  Array.from(gameEl.children).forEach(child => {
    if (child !== _gameBgBack && child !== _gameBgFront && child !== overlay) {
      child.style.position = 'relative';
      child.style.zIndex   = '4';
    }
  });
}

function ensureBgLayers() { _buildGameBgLayers(); }

function getCatBgImages(catKey) {
  return CAT_BG_IMAGES[catKey] || CAT_BG_IMAGES['animals'];
}

function setGameBgDirect(src) {
  _buildGameBgLayers();
  _gameBgFront.style.transition      = 'none';
  _gameBgBack.style.transition       = 'none';
  _gameBgFront.style.backgroundImage = `url('${src}')`;
  _gameBgBack.style.backgroundImage  = `url('${src}')`;
  _gameBgFront.style.opacity         = '1';
  _gameBgBack.style.opacity          = '0';
}

async function crossfadeGameBg(src) {
  if (_gameFadeActive) return;
  _gameFadeActive = true;
  _buildGameBgLayers();

  await preloadImage(src);

  _gameBgBack.style.transition      = 'none';
  _gameBgBack.style.opacity         = '0';
  _gameBgBack.style.backgroundImage = `url('${src}')`;

  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  const t = `opacity ${GAME_FADE_MS}ms ${GAME_FADE_EASE}`;
  _gameBgBack.style.transition  = t;
  _gameBgFront.style.transition = t;

  _gameBgBack.style.opacity  = '1';
  _gameBgFront.style.opacity = '0';

  setTimeout(() => {
    _gameBgFront.style.transition      = 'none';
    _gameBgFront.style.backgroundImage = `url('${src}')`;
    _gameBgFront.style.opacity         = '1';
    _gameBgBack.style.transition       = 'none';
    _gameBgBack.style.opacity          = '0';
    _gameFadeActive = false;
  }, GAME_FADE_MS + 80);
}

function initGameBgForCategory(catKey) {
  stopBgRotation();
  _gameFadeActive = false;

  if (_gameBgFront) { _gameBgFront.remove(); _gameBgFront = null; }
  if (_gameBgBack)  { _gameBgBack.remove();  _gameBgBack  = null; }
  const ov = document.getElementById('game-bg-overlay');
  if (ov) ov.remove();

  _currentCatKey = catKey;
  bgCurrentIndex = Math.floor(Math.random() * getCatBgImages(catKey).length);

  _buildGameBgLayers();
  setGameBgDirect(getCatBgImages(catKey)[bgCurrentIndex]);
  startBgRotation();
}

function resetBgForThemeChange() {
  initGameBgForCategory(_currentCatKey || G.catKey || 'animals');
}

function startBgRotation() {
  if (bgRotateTimer) clearInterval(bgRotateTimer);
  bgRotateTimer = setInterval(() => {
    const images = getCatBgImages(_currentCatKey || G.catKey || 'animals');
    bgCurrentIndex = (bgCurrentIndex + 1) % images.length;
    crossfadeGameBg(images[bgCurrentIndex]);
  }, BG_ROTATE_INTERVAL);
}

function stopBgRotation() {
  if (bgRotateTimer) { clearInterval(bgRotateTimer); bgRotateTimer = null; }
}

function rotateBgImage() {
  const images = getCatBgImages(_currentCatKey || G.catKey || 'animals');
  bgCurrentIndex = (bgCurrentIndex + 1) % images.length;
  crossfadeGameBg(images[bgCurrentIndex]);
}

// ─────────────────────────────────────────────
// ACTIVE GAME STATE
// ─────────────────────────────────────────────
let G = {
  grid: [], gridSize: 0,
  words: [],
  foundWords: [],
  foundCells: [],
  bonusWords: [],
  foundBonusWords: [],
  score: 0,
  selecting: false, startCell: null, currentCells: [],
  combo: 0, hintUsed: 0,
  catKey: 'animals', catName: 'Animals',
};

// ─────────────────────────────────────────────
// IN-GAME MUSIC & SFX
// ─────────────────────────────────────────────
let bgMusic = null;
let bgMusicFadeTimer = null;
let _musicPrimed = false;

function getGameMusicSrc() {
  const td = THEMES[S.settings.theme] || THEMES.default;
  return td.music || 'assets/sounds/zen-default.mp3';
}

function primeBgMusic() {
  if (!S.settings.music) return;
  stopBgMusic();
  _musicPrimed = false;
  const src = getGameMusicSrc();
  bgMusic = new Audio(src);
  bgMusic.loop   = true;
  bgMusic.volume = 0;
  bgMusic.play().then(() => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    _musicPrimed = true;
  }).catch(() => {
    _musicPrimed = false;
  });
}

function startBgMusic() {
  if (!S.settings.music) return;
  if (bgMusic && _musicPrimed) {
    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});
    fadeMusicTo(0.95, 1400);
    _musicPrimed = false;
  } else {
    stopBgMusic();
    const src = getGameMusicSrc();
    bgMusic = new Audio(src);
    bgMusic.loop   = true;
    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});
    fadeMusicTo(0.45, 1400);
  }
}

function continueBgMusic() {
  if (!S.settings.music) return;
  if (bgMusic && !bgMusic.paused) { fadeMusicTo(0.95, 900); }
  else startBgMusic();
}

function fadeMusicTo(targetVol, durationMs) {
  if (!bgMusic) return;
  if (bgMusicFadeTimer) clearInterval(bgMusicFadeTimer);
  const steps = 30, interval = durationMs / steps;
  const startVol = bgMusic.volume, delta = (targetVol - startVol) / steps;
  let step = 0;
  bgMusicFadeTimer = setInterval(() => {
    step++;
    if (!bgMusic) { clearInterval(bgMusicFadeTimer); return; }
    bgMusic.volume = Math.min(1, Math.max(0, startVol + delta * step));
    if (step >= steps) { bgMusic.volume = targetVol; clearInterval(bgMusicFadeTimer); bgMusicFadeTimer = null; }
  }, interval);
}

function stopBgMusic() {
  if (bgMusicFadeTimer) { clearInterval(bgMusicFadeTimer); bgMusicFadeTimer = null; }
  if (bgMusic) { bgMusic.pause(); bgMusic.currentTime = 0; bgMusic = null; }
  _musicPrimed = false;
}

function pauseBgMusicSoft() { fadeMusicTo(0.08, 400); }
function resumeBgMusicSoft() { fadeMusicTo(0.95, 600); }

let audioCtx = null, sfxGain = null;
function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    sfxGain = audioCtx.createGain(); sfxGain.gain.value = 1.10;
    sfxGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function tone(freq, type, dur, t, gain = 0.25) {
  if (!S.settings.sfx) return;
  try {
    const ctx = getCtx(); const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(sfxGain); o.type = type;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.start(t); o.stop(t + dur + 0.05);
  } catch (e) {}
}

function playSound(id) {
  if (!S.settings.sfx) return;
  try {
    const ctx = getCtx(), now = ctx.currentTime;
    switch (id) {
      case 'click': {
        const fund = 370;
        const o1 = ctx.createOscillator(), g1 = ctx.createGain();
        o1.connect(g1); g1.connect(sfxGain);
        o1.type = 'sine';
        o1.frequency.setValueAtTime(fund, now);
        g1.gain.setValueAtTime(0, now);
        g1.gain.linearRampToValueAtTime(0.13, now + 0.004);
        g1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
        o1.start(now); o1.stop(now + 0.95);
        const o2 = ctx.createOscillator(), g2 = ctx.createGain();
        o2.connect(g2); g2.connect(sfxGain);
        o2.type = 'sine';
        o2.frequency.setValueAtTime(fund * 2.76, now);
        g2.gain.setValueAtTime(0, now);
        g2.gain.linearRampToValueAtTime(0.05, now + 0.003);
        g2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        o2.start(now); o2.stop(now + 0.40);
        break;
      }
      case 'select': {
        const freqs = [392, 440, 523, 587, 659];
        const freq  = freqs[Math.floor(Math.random() * freqs.length)];
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(sfxGain);
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.10, now + 0.005);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.10);
        o.start(now); o.stop(now + 0.12);
        break;
      }
      case 'drag-cell': {
        const pentatonic = [523, 587, 659, 784, 880, 988, 1047];
        const idx = Math.min((G.currentCells ? G.currentCells.length - 1 : 0), pentatonic.length - 1);
        const freq = pentatonic[idx];
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(sfxGain);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.08, now + 0.004);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        o.start(now); o.stop(now + 0.10);
        break;
      }
      case 'correct': tone(523,'sine',0.12,now,0.28); tone(659,'sine',0.14,now+0.1,0.28); tone(784,'sine',0.16,now+0.2,0.28); tone(1046,'sine',0.18,now+0.32,0.22); break;
      case 'wrong': {
        const o1 = ctx.createOscillator(), g1 = ctx.createGain();
        o1.connect(g1); g1.connect(sfxGain);
        o1.type = 'sine';
        o1.frequency.setValueAtTime(200, now);
        o1.frequency.exponentialRampToValueAtTime(160, now + 0.25);
        g1.gain.setValueAtTime(0, now);
        g1.gain.linearRampToValueAtTime(0.15, now + 0.006);
        g1.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        o1.start(now); o1.stop(now + 0.60);
        const o2 = ctx.createOscillator(), g2 = ctx.createGain();
        o2.connect(g2); g2.connect(sfxGain);
        o2.type = 'sine';
        o2.frequency.setValueAtTime(310, now);
        g2.gain.setValueAtTime(0, now);
        g2.gain.linearRampToValueAtTime(0.06, now + 0.004);
        g2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        o2.start(now); o2.stop(now + 0.20);
        if (S.settings.vibrate && navigator.vibrate) navigator.vibrate([18]);
        break;
      }
      case 'hint':    tone(660,'sine',0.1,now,0.18); tone(880,'triangle',0.12,now+0.12,0.2); break;
      case 'shuffle': for(let i=0;i<7;i++) tone(180+i*70,'square',0.04,now+i*0.035,0.08); break;
      case 'combo':   tone(880,'triangle',0.1,now,0.12); tone(1100,'triangle',0.1,now+0.08,0.15); break;
      case 'unlock':  [440,550,660,880].forEach((f,i)=>tone(f,'triangle',0.2,now+i*0.1,0.3)); break;
      case 'buy':     [523,659,784,1046,1319].forEach((f,i)=>tone(f,'sine',0.25,now+i*0.08,0.3)); break;
      case 'levelup': [523,659,784,1046,1319,1568].forEach((f,i)=>tone(f,'sine',0.3,now+i*0.09,0.35)); break;
      case 'complete':[262,330,392,523,659,784,1046].forEach((f,i)=>tone(f,'sine',0.35,now+i*0.11,0.45)); if(S.settings.vibrate&&navigator.vibrate) navigator.vibrate([100,50,200,50,300]); break;
      case 'already-found': {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(sfxGain);
        o.type = 'sine';
        o.frequency.setValueAtTime(1046, now);
        o.frequency.exponentialRampToValueAtTime(1318, now + 0.12);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.10, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        o.start(now); o.stop(now + 0.30);
        break;
      }
      case 'deny': {
        const od = ctx.createOscillator(), gd = ctx.createGain();
        od.connect(gd); gd.connect(sfxGain);
        od.type = 'sine';
        od.frequency.setValueAtTime(180, now);
        od.frequency.exponentialRampToValueAtTime(120, now + 0.5);
        gd.gain.setValueAtTime(0, now);
        gd.gain.linearRampToValueAtTime(0.18, now + 0.012);
        gd.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        od.start(now); od.stop(now + 0.75);
        const od2 = ctx.createOscillator(), gd2 = ctx.createGain();
        od2.connect(gd2); gd2.connect(sfxGain);
        od2.type = 'sine';
        od2.frequency.setValueAtTime(360, now);
        od2.frequency.exponentialRampToValueAtTime(240, now + 0.4);
        gd2.gain.setValueAtTime(0, now);
        gd2.gain.linearRampToValueAtTime(0.07, now + 0.008);
        gd2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        od2.start(now); od2.stop(now + 0.5);
        break;
      }
    }
  } catch (e) {}
}

function playCorrectByLength(len) {
  if (!S.settings.sfx) return;
  try {
    const ctx = getCtx(), now = ctx.currentTime;

    const scales = {
      3: [330, 415, 494, 659],
      4: [370, 466, 554, 740],
      5: [392, 494, 587, 784],
      6: [440, 554, 659, 880],
      7: [494, 622, 740, 988],
      8: [523, 659, 784, 1046],
      9: [587, 740, 880, 1175],
    };
    const notes = scales[Math.min(len, 9)] || scales[9];
    const vol   = 0.22 + Math.min(len, 10) * 0.012;

    notes.forEach((freq, i) => {
      tone(freq, 'sine', 0.13 + i * 0.02, now + i * 0.10, vol);
    });

    if (len >= 8) {
      tone(notes[3] * 2, 'sine', 0.10, now + 0.42, vol * 0.5);
    }
  } catch (e) {}
}

function playComboByIntensity(combo) {
  if (!S.settings.sfx) return;
  try {
    const ctx = getCtx(), now = ctx.currentTime;

    if (combo === 2) {
      tone(659, 'triangle', 0.10, now,      0.14);
      tone(880, 'triangle', 0.12, now + 0.09, 0.16);
    }

    else if (combo === 3) {
      tone(659,  'triangle', 0.12, now,        0.18);
      tone(880,  'triangle', 0.13, now + 0.08, 0.20);
      tone(1100, 'triangle', 0.14, now + 0.17, 0.22);
    }

    else if (combo === 4) {
      tone(659,  'sine',     0.12, now,        0.20);
      tone(880,  'triangle', 0.14, now + 0.08, 0.22);
      tone(1100, 'triangle', 0.15, now + 0.16, 0.24);
      tone(1320, 'sine',     0.16, now + 0.25, 0.26);
    }

    else if (combo === 5) {
      [659, 784, 880, 1046, 1320].forEach((f, i) => {
        tone(f, 'triangle', 0.14 + i * 0.01, now + i * 0.08, 0.22 + i * 0.02);
      });
    }

    else if (combo <= 9) {
      const speed  = Math.max(0.05, 0.09 - (combo - 6) * 0.008);
      const freqs  = [659, 784, 880, 1046, 1175, 1320];
      const count  = Math.min(3 + (combo - 6), freqs.length);
      freqs.slice(0, count).forEach((f, i) => {
        tone(f, 'triangle', 0.14, now + i * speed, 0.28);
      });
      tone(220, 'sine', 0.18, now, 0.18);
    }

    else {
      [220, 440, 659, 880, 1046, 1320, 1760].forEach((f, i) => {
        tone(f, i % 2 === 0 ? 'sine' : 'triangle', 0.18, now + i * 0.045, 0.32);
      });
      tone(2093, 'sine', 0.12, now + 0.35, 0.20);
      if (S.settings.vibrate && navigator.vibrate) navigator.vibrate([30, 20, 30]);
    }

  } catch (e) {}
}

function playBonusWordSound(len) {
  if (!S.settings.sfx) return;
  try {
    const ctx = getCtx(), now = ctx.currentTime;
    const baseFreqs = [
      523, 659, 784, 1046, 1319
    ];
    const count = Math.min(3 + Math.floor((len - 3) / 2), baseFreqs.length);
    baseFreqs.slice(0, count).forEach((freq, i) => {
      tone(freq, 'sine', 0.14 + i * 0.02, now + i * 0.07, 0.20);
      tone(freq * 2, 'sine', 0.08, now + i * 0.07 + 0.04, 0.10);
    });
    tone(2093, 'sine', 0.06, now + count * 0.07, 0.08);
    if (S.settings.vibrate && navigator.vibrate) navigator.vibrate([15, 10, 25]);
  } catch (e) {}
}

// ─────────────────────────────────────────────
// SAVE / LOAD
// ─────────────────────────────────────────────
function save() {
  try { localStorage.setItem('wt_v6', JSON.stringify(S)); } catch (e) {}
}
function load() {
  try {
    const d = localStorage.getItem('wt_v6');
    if (d) {
      const p = JSON.parse(d);
      if (!p.unlockedCats)    p.unlockedCats    = ['animals'];
      if (!p.usedWords)       p.usedWords       = { animals: [] };
      if (!p.lastCat)         p.lastCat         = 'animals';
      if (!p.catSession)      p.catSession      = { animals: 0 };
      if (!p.unlockedThemes)  p.unlockedThemes  = ['default'];
      if (!p.catCycles)       p.catCycles       = {};
      if (!('savedGame' in p)) p.savedGame      = null;
      if (!('allPathsComplete' in p))          p.allPathsComplete         = false;
      if (!('allPathsShownCinematic' in p))    p.allPathsShownCinematic   = false;
      if (!p.gridSkin)    p.gridSkin    = 'default';
      if (!p.ownedSkins)  p.ownedSkins  = ['default'];
      if (!p.shownUnlocks) p.shownUnlocks = [];
      Object.assign(S, p);
    }
    const old = localStorage.getItem('wt_v5');
    if (old && !d) {
      const op = JSON.parse(old);
      S.currentLevel    = op.currentLevel    || 1;
      S.score           = op.score           || 0;
      S.coins           = op.coins           || 0;
      S.streak          = op.streak          || 0;
      S.totalWordsFound = op.totalWordsFound || 0;
      if (op.settings) Object.assign(S.settings, op.settings);
      if (op.unlockedCats)  S.unlockedCats  = op.unlockedCats;
      if (op.usedWords)     S.usedWords     = op.usedWords;
      if (op.catSession)    S.catSession    = op.catSession;
    }
  } catch (e) {}
}

// ─────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────
function applyTheme(t) {
  document.getElementById('app').setAttribute('data-theme', t);
  buildThemeOptions();
}

function setTheme(t) {
  const td = THEMES[t];
  if (!td) return;
  if (!S.unlockedThemes.includes(t)) {
    if (S.coins < td.cost) {
      playSound('deny');
      _shakeShopCard(t, 'theme');
      return;
    }
    S.coins -= td.cost;
    S.unlockedThemes.push(t);
    save();
    refreshMenu();
    refreshShop();
    playSound('buy');
  }
  const prev = S.settings.theme;
  if (prev === t) return;
  S.settings.theme = t;
  applyTheme(t);
  refreshMenuBgForTheme();
  save();
  playSound('click');
  refreshShop();
}

function _shakeShopCard(key, type) {
  document.querySelectorAll(type === 'theme' ? '.theme-shop-card' : '.skin-card').forEach(c => {
    if (c.dataset.key === key) {
      c.style.animation = 'none';
      c.offsetWidth;
      c.style.animation = 'shopShake 0.35s ease';
      setTimeout(() => c.style.animation = '', 360);
    }
  });
}

function getCurrentScreen() {
  const active = document.querySelector('.screen.active');
  return active ? active.id.replace('screen-', '') : '';
}

// ─────────────────────────────────────────────
// SCREEN NAV
// ─────────────────────────────────────────────
function showScreen(name, dir = 'right') {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + name);
  if (!el) return;
  el.classList.add('active');
  const cls = dir === 'left' ? 'slide-in-left' : dir === 'up' ? 'slide-in-up' : 'slide-in-right';
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 460);

  if (name === 'menu')     refreshMenu();
  if (name === 'stats')    refreshStats();
  if (name === 'progress') refreshProgress();
  if (name === 'category') refreshCategoryScreen();
  if (name === 'shop') refreshShop();
  if (name === 'help') refreshHelp();

  if (name !== 'game') {
    stopBgRotation();
    stopBgMusic();
    stopCatAmbient();
    clearCurrentWordDisplay();
  }

  playSound('click');
}

function openModal(id)  { document.getElementById(id).classList.add('visible'); }
function closeModal(id) { document.getElementById(id).classList.remove('visible'); }

// ─────────────────────────────────────────────
// PARTICLES
// ─────────────────────────────────────────────
function makeParticles(id, n) {}

// ─────────────────────────────────────────────
// LOADING — 10 seconds
// ─────────────────────────────────────────────
function initLoad() {
  const bar = document.getElementById('loading-bar');
  const txt = document.getElementById('loading-text');
  const msgs = ['LOADING...', 'PLACING WORDS...', 'DRAWING PATH...', 'ALMOST READY...', 'READY'];

  const DURATION = 10000;
  const TICK     = 80;
  const totalTicks = DURATION / TICK;
  let tickCount = 0;
  let pct = 0;

  const iv = setInterval(() => {
    tickCount++;
    const target = (tickCount / totalTicks) * 100;
    pct = Math.min(pct + (target - pct) * 0.18 + 0.3, 100);
    bar.style.width = pct + '%';
    txt.textContent = msgs[Math.min(Math.floor(pct / 25), 4)];

    if (tickCount >= totalTicks) {
      clearInterval(iv);
      bar.style.width = '100%';
      txt.textContent = 'READY';
      setTimeout(() => {
        showScreen('menu');
        initMenuBg();
      }, 500);
    }
  }, TICK);
}

// ─────────────────────────────────────────────
// MENU
// ─────────────────────────────────────────────
function refreshMenu() {
  document.getElementById('menu-coins').textContent  = S.coins;
  document.getElementById('menu-streak').textContent = S.streak;
  document.getElementById('menu-title-display').textContent = getTitleForLevel(S.currentLevel).title;
  const hasResume = !!S.savedGame;
  document.getElementById('play-text').textContent  = hasResume ? 'CONTINUE' : 'PLAY';
}

function handleMenuPlay() {
  playSound('click');
  if (S.savedGame) resumeGame();
  else showScreen('category');
}

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
function refreshStats() {
  document.getElementById('st-streak').textContent = S.streak;
  document.getElementById('st-level').textContent  = S.currentLevel;
  document.getElementById('st-score').textContent  = S.score;
  document.getElementById('st-words').textContent  = S.totalWordsFound;
  const curT  = getTitleForLevel(S.currentLevel);
  const nextT = getNextTitle(S.currentLevel);
  document.getElementById('journey-title-name').textContent = curT.title;
  document.getElementById('journey-title-desc').textContent = curT.desc;
  document.getElementById('journey-title-icon').className   = curT.icon;
  if (nextT) {
    const prog = S.currentLevel - curT.level, needed = nextT.level - curT.level;
    const pct  = Math.round((prog / needed) * 100);
    document.getElementById('journey-title-progress-lbl').textContent = `${prog} / ${needed} levels to "${nextT.title}"`;
    document.getElementById('journey-title-bar').style.width = pct + '%';
  } else {
    document.getElementById('journey-title-progress-lbl').textContent = 'Zenith reached!';
    document.getElementById('journey-title-bar').style.width = '100%';
  }
  const wrap = document.getElementById('streak-days-wrap'); wrap.innerHTML = '';
  const days  = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = (new Date().getDay() + 6) % 7;
  days.forEach((d, i) => {
    const el = document.createElement('div'); el.className = 'streak-day';
    if (S.activityLog && S.activityLog.includes(i)) el.classList.add('active');
    if (i === today) el.classList.add('today');
    el.textContent = d; wrap.appendChild(el);
  });
  const ml = document.getElementById('milestones-list'); ml.innerHTML = '';
  LEVEL_TITLES.forEach((t, idx) => {
    const nextMilestone = LEVEL_TITLES[idx + 1];
    const done   = nextMilestone ? S.currentLevel >= nextMilestone.level : S.currentLevel >= t.level;
    const isNext = !done && S.currentLevel >= t.level;
    const div    = document.createElement('div');
    div.className = 'milestone-item' + (!done && !isNext ? ' locked' : '');
    const dc = done ? 'done' : isNext ? 'next' : 'locked';
    div.innerHTML = `<div class="milestone-dot ${dc}"><i class="${t.icon}"></i></div><div><div class="milestone-name">${t.title}</div><div class="milestone-sub">Level ${t.level}</div></div><div class="milestone-reward">${done ? '<i class="fas fa-check" style="color:var(--zen-jade)"></i>' : isNext ? '<span style="color:var(--zen-gold)">Active</span>' : '<span style="color:var(--zen-muted)">Locked</span>'}</div>`;
    ml.appendChild(div);
  });
}

// ─────────────────────────────────────────────
// GRID SKIN SHOP
// ─────────────────────────────────────────────
const GRID_SKINS = [
  { key: 'default',  name: 'Classic',  price: 0,   desc: 'Square cells',   previewClass: 'skin-default'  },
  { key: 'circle',   name: 'Circle',   price: 2000, desc: 'Rounded cells',  previewClass: 'skin-circle'   },
  { key: 'diamond',  name: 'Diamond',  price: 3000, desc: 'No border',      previewClass: 'skin-diamond'  },
  { key: 'hexagon',  name: 'Hexagon',  price: 4000, desc: 'Beehive grid',   previewClass: 'skin-hexagon'  },
];

const SKIN_PREVIEW_PATTERN = [
  1, 0, 0,
  0, 1, 2,
  0, 2, 1,
];

function applyGridSkin(skin) {
  const grid = document.getElementById('word-grid');
  if (grid) grid.setAttribute('data-skin', skin || 'default');
  const gameEl = document.getElementById('screen-game');
  if (gameEl) gameEl.setAttribute('data-skin', skin || 'default');
}

function openShop() {
  let backdrop = document.getElementById('shop-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'shop-backdrop';
    backdrop.className = 'shop-panel-backdrop';
    backdrop.onclick = (e) => { if (e.target === backdrop) closeShop(); };

    const panel = document.createElement('div');
    panel.id = 'shop-panel';
    panel.className = 'shop-panel';

    panel.innerHTML = `
      <div class="shop-panel-handle"></div>
      <div class="shop-panel-head">
        <div class="shop-panel-title"><i class="fas fa-store" style="margin-right:8px;font-size:12px"></i>Shop</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="shop-panel-coins" id="shop-coins-display">
            <i class="fas fa-coins"></i> <span id="shop-coins-val">${S.coins}</span>
          </div>
          <div class="shop-panel-close" onclick="closeShop()"><i class="fas fa-times"></i></div>
        </div>
      </div>
      <div class="shop-panel-body" id="shop-panel-body"></div>
    `;

    backdrop.appendChild(panel);
    document.getElementById('app').appendChild(backdrop);
  }

  refreshShop();
  requestAnimationFrame(() => {
    backdrop.classList.add('visible');
    document.getElementById('shop-panel').classList.add('visible');
  });
  playSound('click');
}

function closeShop() {
  const backdrop = document.getElementById('shop-backdrop');
  const panel    = document.getElementById('shop-panel');
  if (!backdrop) return;
  backdrop.classList.remove('visible');
  panel.classList.remove('visible');
  playSound('click');
}

function refreshShop() {
  const coinsVal = document.getElementById('shop-coins-val');
  if (coinsVal) coinsVal.textContent = S.coins;

  const themeGrid = document.getElementById('theme-shop-grid');
  if (themeGrid) {
    themeGrid.innerHTML = '';
    THEME_ORDER.forEach(key => {
      const td         = THEMES[key];
      const isUnlocked = S.unlockedThemes.includes(key);
      const isActive   = S.settings.theme === key;
      const bgImg      = (td.menuImages && td.menuImages[0]) || '';

      const card = document.createElement('div');
      card.className = `theme-shop-card ${isActive ? 'active-skin' : ''} ${!isUnlocked ? 'locked-skin' : ''}`;
      card.dataset.key = key;
      card.onclick = () => setTheme(key);
      card.innerHTML = `
        ${isActive ? '<div class="skin-card-active-badge"><i class="fas fa-check"></i></div>' : ''}
        <div class="theme-shop-bg" style="background-image:url('${bgImg}')"></div>
        <div class="theme-shop-info">
          <div class="skin-card-name">${td.icon} ${td.name}</div>
          <div style="font-size:10px;color:var(--zen-muted);margin-top:2px;">${td.desc}</div>
          ${isActive
            ? `<div class="skin-card-owned" style="color:var(--icon-accent-color);margin-top:6px;">✓ Active</div>`
            : isUnlocked
              ? `<div class="skin-card-owned" style="margin-top:6px;">Owned · Tap to apply</div>`
              : `<div class="skin-card-price" style="margin-top:6px;"><i class="fas fa-coins"></i> ${td.cost}</div>`}
        </div>
      `;
      themeGrid.appendChild(card);
    });
  }

  const skinGrid = document.getElementById('skin-cards-grid');
  if (skinGrid) {
    skinGrid.innerHTML = '';
    GRID_SKINS.forEach(skin => {
      const owned    = S.ownedSkins.includes(skin.key);
      const isActive = S.gridSkin === skin.key;

      const card = document.createElement('div');
      card.className = `skin-card ${isActive ? 'active-skin' : ''} ${!owned ? 'locked-skin' : ''}`;
      card.dataset.key = skin.key;
      card.onclick = () => handleSkinTap(skin.key);

      let previewHTML = '<div class="skin-preview-wrap">';
      SKIN_PREVIEW_PATTERN.forEach(type => {
        const cls    = type === 1 ? 'preview-found' : type === 2 ? 'preview-sel' : '';
        const letter = ['Z','E','N'][Math.floor(Math.random() * 3)];
        previewHTML += `<div class="skin-preview-cell ${skin.previewClass} ${cls}">${skin.key === 'diamond' ? '' : letter}</div>`;
      });
      previewHTML += '</div>';

      card.innerHTML = `
        ${isActive ? '<div class="skin-card-active-badge"><i class="fas fa-check"></i></div>' : ''}
        ${previewHTML}
        <div class="skin-card-name">${skin.name}</div>
        <div style="font-size:10px;color:var(--zen-muted);margin-top:-4px;">${skin.desc}</div>
        ${isActive
          ? `<div class="skin-card-owned" style="color:var(--icon-accent-color);">✓ Equipped</div>`
          : owned
            ? `<div class="skin-card-owned">Owned · Tap to equip</div>`
            : `<div class="skin-card-price"><i class="fas fa-coins"></i> ${skin.price}</div>`}
      `;
      skinGrid.appendChild(card);
    });
  }
}

function handleSkinTap(skinKey) {
  const skin = GRID_SKINS.find(s => s.key === skinKey);
  if (!skin) return;

  if (S.ownedSkins.includes(skinKey)) {
    S.gridSkin = skinKey;
    save();
    applyGridSkin(skinKey);
    refreshShop();
    playSound('click');
    return;
  }

  if (S.coins < skin.price) {
    playSound('deny');
    const cards = document.querySelectorAll('.skin-card');
    cards.forEach(c => {
      if (c.querySelector('.skin-card-name') && c.querySelector('.skin-card-name').textContent === skin.name) {
        c.style.animation = 'none';
        c.offsetWidth;
        c.style.animation = 'shopShake 0.35s ease';
        setTimeout(() => c.style.animation = '', 360);
      }
    });
    return;
  }

  S.coins -= skin.price;
  S.ownedSkins.push(skinKey);
  S.gridSkin = skinKey;
  save();
  applyGridSkin(skinKey);
  refreshShop();
  refreshMenu();
  playSound('buy');
}

// ─────────────────────────────────────────────
// PROGRESS SCREEN
// ─────────────────────────────────────────────
function refreshProgress() {
  const TOTAL_WORDS_ALL = CAT_ORDER.reduce((sum, k) => sum + (CATEGORIES[k] ? CATEGORIES[k].words.length : 0), 0);
  const totalFound = CAT_ORDER.reduce((sum, k) => sum + (S.usedWords[k] ? S.usedWords[k].length : 0), 0);
  const totalLeft  = TOTAL_WORDS_ALL - totalFound;
  const overallPct = TOTAL_WORDS_ALL > 0 ? Math.round((totalFound / TOTAL_WORDS_ALL) * 100) : 0;

  document.getElementById('prog-total-words').textContent  = totalFound;
  document.getElementById('prog-total-left').textContent   = totalLeft;
  document.getElementById('prog-cats-unlocked').textContent = `${S.unlockedCats.length}/${CAT_ORDER.length}`;
  document.getElementById('prog-overall-fill').style.width = overallPct + '%';
  document.getElementById('prog-overall-pct').textContent  = overallPct + '% complete';

  const nextUnlockEl = document.getElementById('prog-next-unlock-card');
  nextUnlockEl.innerHTML = '';

  if (S.allPathsComplete) {
    nextUnlockEl.innerHTML = `
      <div class="prog-unlock-card prog-unlock-done">
        <div class="prog-unlock-header">
          <div class="prog-unlock-icon" style="background:rgba(201,168,76,0.15);color:var(--zen-gold);border-color:rgba(201,168,76,0.3)"><i class="fas fa-crown"></i></div>
          <div class="prog-unlock-info">
            <div class="prog-unlock-name" style="color:var(--zen-gold)">All Paths Mastered</div>
            <div class="prog-unlock-sub">Every word found — play freely across all paths</div>
          </div>
        </div>
      </div>`;
  } else {
    let nextLock = null;
    for (let i = 0; i < CAT_ORDER.length; i++) {
      if (!S.unlockedCats.includes(CAT_ORDER[i])) { nextLock = { key: CAT_ORDER[i], prevKey: CAT_ORDER[i - 1] }; break; }
    }
    if (nextLock) {
      const cat      = CATEGORIES[nextLock.key];
      const prevCat  = CATEGORIES[nextLock.prevKey];
      const prevTotal   = prevCat ? prevCat.words.length : 0;
      const prevFound   = S.usedWords[nextLock.prevKey] ? S.usedWords[nextLock.prevKey].length : 0;
      const prevRemain  = prevTotal - prevFound;
      const pct         = prevTotal > 0 ? Math.round((prevFound / prevTotal) * 100) : 0;
      nextUnlockEl.innerHTML = `
        <div class="prog-unlock-card">
          <div class="prog-unlock-header">
            <div class="prog-unlock-icon"><i class="${cat.icon}"></i></div>
            <div class="prog-unlock-info">
              <div class="prog-unlock-name">${cat.name}</div>
              <div class="prog-unlock-sub">Find all <strong>${prevCat.name}</strong> words to unlock</div>
            </div>
            <div class="prog-unlock-lock"><i class="fas fa-lock"></i></div>
          </div>
          <div class="prog-unlock-body">
            <div class="prog-unlock-row">
              <span class="prog-unlock-lbl">${prevCat.name} words found</span>
              <span class="prog-unlock-val">${prevFound} / ${prevTotal}</span>
            </div>
            <div class="prog-unlock-bar-bg"><div class="prog-unlock-bar-fill" style="width:${pct}%"></div></div>
            <div class="prog-unlock-remain">
              <i class="fas fa-flag-checkered" style="color:var(--zen-gold);font-size:11px"></i>
              ${prevRemain} word${prevRemain !== 1 ? 's' : ''} left to unlock ${cat.name}
            </div>
          </div>
        </div>`;
    } else {
      nextUnlockEl.innerHTML = `
        <div class="prog-unlock-card prog-unlock-done">
          <div class="prog-unlock-header">
            <div class="prog-unlock-icon" style="background:rgba(201,168,76,0.15);color:var(--zen-gold);border-color:rgba(201,168,76,0.3)"><i class="fas fa-check-double"></i></div>
            <div class="prog-unlock-info">
              <div class="prog-unlock-name" style="color:var(--zen-gold)">All Paths Unlocked!</div>
              <div class="prog-unlock-sub">You've opened every category</div>
            </div>
          </div>
        </div>`;
    }
  }

  const catList = document.getElementById('prog-cat-list');
  catList.innerHTML = '';
  CAT_ORDER.forEach((key, i) => {
    const cat        = CATEGORIES[key];
    const isUnlocked = S.unlockedCats.includes(key);
    const foundCount = isUnlocked && S.usedWords[key] ? S.usedWords[key].length : 0;
    const total      = cat ? cat.words.length : 0;
    const pct        = total > 0 ? Math.round((foundCount / total) * 100) : 0;
    const sessions   = isUnlocked && S.catSession && S.catSession[key] ? S.catSession[key] : 0;
    const cfg        = isUnlocked ? getDifficultyConfig(key) : null;
    const isComplete = isUnlocked && foundCount >= total;
    const isActive   = S.lastCat === key && isUnlocked;
    const prevKey    = i > 0 ? CAT_ORDER[i - 1] : null;
    const prevCat    = prevKey ? CATEGORIES[prevKey] : null;
    const prevRemain = prevKey ? getRemainingCount(prevKey) : 0;

    const card = document.createElement('div');
    card.className = `prog-cat-card ${isUnlocked ? '' : 'prog-cat-locked'}`;
    card.innerHTML = `
      <div class="prog-cat-header">
        <div class="prog-cat-icon ${isUnlocked ? '' : 'prog-cat-icon-locked'}">
          <i class="${isUnlocked ? cat.icon : 'fas fa-lock'}"></i>
        </div>
        <div class="prog-cat-meta">
          <div class="prog-cat-name">${cat ? cat.name : key}</div>
          ${isUnlocked
            ? `<div class="prog-cat-sub">${sessions} session${sessions !== 1 ? 's' : ''} · ${isComplete ? '<span style="color:var(--zen-gold)">Complete!</span>' : foundCount + ' / ' + total + ' words'}</div>`
            : `<div class="prog-cat-sub prog-cat-sub-locked">Locked — complete previous path</div>`}
        </div>
        <div class="prog-cat-pct ${isComplete ? 'prog-pct-done' : ''}">${isUnlocked ? pct + '%' : '<i class="fa-solid fa-key"></i>'}</div>
      </div>
      ${isUnlocked ? `
      <div class="prog-cat-bar-wrap">
        <div class="prog-cat-bar-bg">
          <div class="prog-cat-bar-fill ${isComplete ? 'prog-fill-done' : ''}" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="prog-cat-detail-row">
        <span class="prog-cat-detail-item"><i class="fas fa-check-circle" style="color:var(--zen-jade)"></i> ${foundCount} found</span>
        <span class="prog-cat-detail-item"><i class="fas fa-hourglass-half" style="color:var(--zen-sky)"></i> ${total - foundCount} remaining</span>
        ${cfg ? `<span class="prog-cat-detail-item"><i class="fas fa-table-cells" style="color:var(--zen-muted)"></i> auto grid</span>` : ''}
        ${isComplete ? `<span class="prog-cat-detail-item" style="color:var(--zen-gold)"><i class="fas fa-star"></i> Mastered</span>` : ''}
      </div>` : ''}`;
    catList.appendChild(card);
  });
}

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────
function buildThemeOptions() {
  const container = document.getElementById('theme-options-container');
  if (!container) return;
  container.innerHTML = '';
  THEME_ORDER.forEach(key => {
    const td         = THEMES[key];
    const isUnlocked = S.unlockedThemes.includes(key);
    const isActive   = S.settings.theme === key;
    const bgImg      = (td.menuImages && td.menuImages[0]) || '';
    const div = document.createElement('div');
    div.className = `theme-opt ${isActive ? 'selected' : ''} ${!isUnlocked ? 'theme-locked' : ''}`;
    div.onclick   = () => setTheme(key);
    div.innerHTML = `
      <div class="theme-opt-bg" style="background-image:url('${bgImg}')"></div>
      <div class="theme-opt-overlay"></div>
      <div class="theme-opt-content">
        <div class="theme-opt-name">${td.name}</div>
        <div class="theme-opt-desc">${isUnlocked ? td.desc : `₱ ${td.cost} coins`}</div>
      </div>
      ${isActive
        ? `<div class="theme-opt-check"><i class="fas fa-check"></i></div>`
        : !isUnlocked
          ? `<div class="theme-lock-badge"><i class="fas fa-lock"></i> ${td.cost}</div>`
          : ''}
    `;
    container.appendChild(div);
  });
}

function toggleSetting(k) {
  S.settings[k] = !S.settings[k];
  const t = document.getElementById('toggle-' + k);
  if (t) t.classList.toggle('on', S.settings[k]);
  if (k === 'music') {
    if (!S.settings.music) stopBgMusic();
    else if (getCurrentScreen() === 'game') startBgMusic();
  }
  if (k === 'sfx') {
    if (!S.settings.sfx) stopCatAmbient();
    else if (getCurrentScreen() === 'game' && G.catKey) startCatAmbient(G.catKey);
  }
  save(); playSound('click');
}

function confirmReset() { openModal('reset-modal'); }
function doReset() {
  S.currentLevel    = 1; S.score = 0; S.coins = 0; S.streak = 0;
  S.totalWordsFound = 0; S.currentGame = null; S.activityLog = [];
  S.lastCat         = 'animals'; S.unlockedCats  = ['animals'];
  S.usedWords       = { animals: [] }; S.catSession = { animals: 0 };
  S.savedGame       = null; S.unlockedThemes = ['default'];
  S.settings.theme  = 'default';
  S.allPathsComplete       = false;
  S.allPathsShownCinematic = false;
  applyTheme('default');
  save(); closeModal('reset-modal'); showScreen('menu', 'left');
  toast({ title: 'Progress Reset', desc: 'Starting fresh from Level 1' });
}

// ─────────────────────────────────────────────
// CATEGORY UNLOCK LOGIC
// ─────────────────────────────────────────────
function isCategoryFullyExhausted(catKey) {
  const cat   = CATEGORIES[catKey];
  const found = S.usedWords[catKey] || [];
  return cat.words.every(w => found.includes(w.w));
}

function checkAndUnlockCategories() {
  let anyNew = false;
  for (let i = 1; i < CAT_ORDER.length; i++) {
    const key     = CAT_ORDER[i];
    const prevKey = CAT_ORDER[i - 1];
    if (S.unlockedCats.includes(key)) continue;
    if (!S.unlockedCats.includes(prevKey)) continue;
    if (isCategoryFullyExhausted(prevKey)) {
      S.unlockedCats.push(key);
      if (!S.usedWords[key])  S.usedWords[key]  = [];
      if (!S.catSession[key]) S.catSession[key] = 0;
      if (!S.catCycles)       S.catCycles = {};
      if (!S.catCycles[key])  S.catCycles[key]  = 0;
      anyNew = true;
    }
  }
  if (anyNew) save();
  return anyNew;
}

function getAvailableWords(catKey) {
  const cat  = CATEGORIES[catKey];
  const used = S.usedWords[catKey] || [];
  if (S.allPathsComplete) return cat.words;
  return cat.words.filter(w => !used.includes(w.w));
}

function getRemainingCount(catKey) {
  if (S.allPathsComplete) return CATEGORIES[catKey].words.length;
  return getAvailableWords(catKey).length;
}

function selectWordsForSession(catKey, diffCfg) {
  const cat   = CATEGORIES[catKey];
  let pool;

  if (S.allPathsComplete) {
    pool = [...cat.words];
  } else {
    const used  = S.usedWords[catKey] || [];
    pool = cat.words.filter(w => !used.includes(w.w));
  }

  const inGrid = (w) => w.w.length >= 3 && w.w.length <= diffCfg.absMax;
  const inPref = (w) => w.w.length >= diffCfg.prefMin && w.w.length <= diffCfg.prefMax;

  const rnd = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const prefPool = rnd(pool.filter(w => inGrid(w) && inPref(w)));
  const anyPool  = rnd(pool.filter(w => inGrid(w) && !inPref(w)));

  const selected   = [];
  const inSelected = () => new Set(selected.map(x => x.w));
  const take   = (arr) => {
    for (const w of arr) {
      if (selected.length >= diffCfg.wordCount) break;
      if (!inSelected().has(w.w)) selected.push(w);
    }
  };

  take(prefPool);
  take(anyPool);

  if (selected.length === 0) {
    const fallback = rnd(pool);
    take(fallback);
  }

  return selected;
}

// ─────────────────────────────────────────────
// CATEGORY SCREEN
// ─────────────────────────────────────────────
function refreshCategoryScreen() {
  checkAndUnlockCategories();
  const container = document.getElementById('cat-cards-container');
  if (!container) return;
  container.innerHTML = '';
  document.getElementById('cat-level-num').textContent = S.currentLevel;
  const activeCat = S.lastCat || 'animals';
  const cfg = getDifficultyConfig(activeCat);
  document.getElementById('cat-diff-desc').textContent =
    `${cfg.wordCount} words · ${cfg.prefMin}–${cfg.prefMax} letters · ${getDirLabel(cfg.dirs)}`;

  for (let i = 0; i < CAT_ORDER.length; i++) {
    const key        = CAT_ORDER[i];
    const cat        = CATEGORIES[key];
    const isUnlocked = S.allPathsComplete ? true : S.unlockedCats.includes(key);
    const remaining  = getRemainingCount(key);
    const totalWords = cat.words.length;
    const foundCount = (S.usedWords[key] || []).length;
    const isComplete = !S.allPathsComplete && isUnlocked && remaining === 0;
    const isActive   = S.lastCat === key && isUnlocked;
    const prevKey    = i > 0 ? CAT_ORDER[i - 1] : null;
    const prevCat    = prevKey ? CATEGORIES[prevKey] : null;
    const prevRemain = prevKey ? (S.allPathsComplete ? 0 : getRemainingCount(prevKey)) : 0;

    const card = document.createElement('div');
    card.className = `cat-card ${isUnlocked ? 'unlocked' : 'locked'} ${isActive ? 'active-cat' : ''} ${isComplete ? 'complete-cat' : ''}`;
    if (isUnlocked) card.onclick = () => startGame(key);

    const progressPct = isUnlocked ? Math.round((foundCount / totalWords) * 100) : 0;
    const lockedDesc   = prevCat ? `Find all ${prevCat.name} words · ${prevRemain} left` : 'Locked';
    const catCfg      = isUnlocked ? getDifficultyConfig(key) : null;
    const diffHint    = catCfg ? `${catCfg.wordCount} words · ${catCfg.prefMin}–${catCfg.prefMax} letters · ${getDirLabel(catCfg.dirs)}` : '';

    const freeReplayBadge = S.allPathsComplete
      ? `<div class="cat-complete-badge" style="background:rgba(201,168,76,0.12);color:var(--zen-gold);border-color:rgba(201,168,76,0.3)"><i class="fas fa-infinity"></i> Free Play</div>`
      : '';

    card.innerHTML = `
      <div class="cat-card-inner">
        <div class="cat-icon-wrap ${isUnlocked ? '' : 'locked-icon'}">
          <i class="${isUnlocked ? cat.icon : 'fas fa-lock'}"></i>
        </div>
        <div class="cat-info">
          <div class="cat-name">${cat.name}</div>
          ${isUnlocked
            ? `<div class="cat-sub">${S.allPathsComplete ? 'Free play · all words' : (isComplete ? 'All words found' : `${remaining} remaining · ${foundCount}/${totalWords}`)}</div>
               <div class="cat-diff-hint">${diffHint}</div>`
            : `<div class="cat-sub locked-sub">${lockedDesc}</div>`}
          ${isComplete ? `<div class="cat-complete-badge"><i class="fas fa-check-circle"></i> Complete</div>` : ''}
          ${freeReplayBadge}
        </div>
        ${isUnlocked ? '<i class="fas fa-chevron-right cat-arrow"></i>' : ''}
      </div>
      <div class="cat-progress-wrap ${isUnlocked ? '' : 'locked-progress'}">
        <div class="cat-progress-bar">
          <div class="cat-progress-fill ${isUnlocked ? '' : 'locked-fill'}"
            style="width:${isUnlocked ? (S.allPathsComplete ? 100 : progressPct) : Math.min(100, Math.round(((totalWords - prevRemain) / totalWords) * 100))}%">
          </div>
        </div>
        <span class="cat-pct-lbl">${isUnlocked ? (S.allPathsComplete ? '∞' : progressPct + '%') : '<i class="fa-solid fa-key"></i>'}</span>
      </div>`;
    container.appendChild(card);
  }
}

function getDirLabel(dirs) {
  if (dirs.length <= 2) return '→ ↓ only';
  if (dirs.length <= 4) return '+ Reversed';
  if (dirs.length <= 6) return '+ Diagonals';
  return 'All directions';
}

// ─────────────────────────────────────────────
// GRID BUILDER
// ─────────────────────────────────────────────
const DMAP = {
  H:   [0,  1], V:   [1,  0], DR:  [1,  1], DL:  [1, -1],
  HR:  [0, -1], VR:  [-1, 0], DRR: [-1,-1], DLR: [-1, 1],
};

function buildGrid(words, gridSize, dirs) {
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  const placedWords = [];

  for (const wordObj of words) {
    const word = wordObj.w;
    let placed = false;
    for (let attempt = 0; attempt < 500 && !placed; attempt++) {
      const dir = dirs[Math.floor(Math.random() * dirs.length)];
      const [dr, dc] = DMAP[dir];
      const rowRange = gridSize - (word.length - 1) * Math.abs(dr);
      const colRange = gridSize - (word.length - 1) * Math.abs(dc);
      if (rowRange <= 0 || colRange <= 0) continue;
      let sr = Math.floor(Math.random() * Math.max(1, rowRange));
      let sc = Math.floor(Math.random() * Math.max(1, colRange));
      if (dr < 0) sr = gridSize - 1 - Math.floor(Math.random() * Math.max(1, rowRange));
      if (dc < 0) sc = gridSize - 1 - Math.floor(Math.random() * Math.max(1, colRange));
      let valid = true;
      for (let i = 0; i < word.length; i++) {
        const r = sr + i * dr, c = sc + i * dc;
        if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) { valid = false; break; }
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) { valid = false; break; }
      }
      if (!valid) continue;
      const cells = [];
      for (let i = 0; i < word.length; i++) {
        const r = sr + i * dr, c = sc + i * dc;
        grid[r][c] = word[i]; cells.push({ r, c });
      }
      placedWords.push({ ...wordObj, cells, found: false });
      placed = true;
    }
    if (!placed) {
      outer:
      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c <= gridSize - word.length; c++) {
          let valid = true;
          for (let i = 0; i < word.length; i++) {
            if (grid[r][c + i] !== '' && grid[r][c + i] !== word[i]) { valid = false; break; }
          }
          if (valid) {
            const cells = [];
            for (let i = 0; i < word.length; i++) { grid[r][c + i] = word[i]; cells.push({ r, c: c + i }); }
            placedWords.push({ ...wordObj, cells, found: false });
            break outer;
          }
        }
      }
    }
  }
  
  if (S.currentLevel >= 30 && placedWords.length >= 2) {
    const DMAP_ALL = {
      H:[0,1],V:[1,0],DR:[1,1],DL:[1,-1],
      HR:[0,-1],VR:[-1,0],DRR:[-1,-1],DLR:[-1,1],
    };
    const allDirVecs = Object.values(DMAP_ALL);
    const chainCount = S.currentLevel >= 75 ? 3 : S.currentLevel >= 50 ? 2 : 1;
    let chainsFormed = 0;

    for (let ci = 0; ci < placedWords.length - 1 && chainsFormed < chainCount; ci++) {
      const anchor = placedWords[ci];
      const anchorEnd = anchor.cells[anchor.cells.length - 1];
      const word = placedWords[ci + 1];
      if (word.cells.length === 0) continue;

      const w = word.w;
      let chained = false;

      for (const [dr, dc] of allDirVecs) {
        if (chained) break;
        const cells = [];
        let valid = true;
        for (let i = 0; i < w.length; i++) {
          const r = anchorEnd.r + i * dr;
          const c = anchorEnd.c + i * dc;
          if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) { valid = false; break; }
          const existing = grid[r][c];
          if (i === 0) {
            if (existing !== w[0]) { valid = false; break; }
          } else {
            if (existing !== '' && existing !== w[i]) { valid = false; break; }
          }
          cells.push({ r, c });
        }
        if (!valid || cells.length !== w.length) continue;

        const alreadyPlaced = placedWords.find(pw =>
          pw.cells.length === cells.length &&
          pw.cells.every((cell, i) => cell.r === cells[i].r && cell.c === cells[i].c)
        );
        if (alreadyPlaced) continue;

        for (let i = 1; i < w.length; i++) {
          grid[cells[i].r][cells[i].c] = w[i];
        }
        word.cells = cells;
        chained = true;
        chainsFormed++;
      }
    }
  }

  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
for (let r = 0; r < gridSize; r++)
  for (let c = 0; c < gridSize; c++)
    if (!grid[r][c]) grid[r][c] = alpha[Math.floor(Math.random() * 26)];

const placedCellKeys = new Set(
  placedWords.flatMap(pw => pw.cells.map(c => `${c.r},${c.c}`))
);
const allDirs = [[0,1],[1,0],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]];
let changed = true;
let passes  = 0;
while (changed && passes++ < 12) {
  changed = false;
  for (const pw of placedWords) {
    const word = pw.w;
    for (const [dr, dc] of allDirs) {
      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
          let match = true;
          const cells = [];
          for (let i = 0; i < word.length; i++) {
            const nr = r + i * dr, nc = c + i * dc;
            if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize) { match = false; break; }
            if (grid[nr][nc] !== word[i]) { match = false; break; }
            cells.push({ r: nr, c: nc });
          }
          if (!match) continue;

          const isIntentional =
            pw.cells.length === cells.length &&
            pw.cells.every((cell, i) => cell.r === cells[i].r && cell.c === cells[i].c);
          if (isIntentional) continue;

          for (const cell of cells) {
            if (!placedCellKeys.has(`${cell.r},${cell.c}`)) {
              let replacement;
              do {
                replacement = alpha[Math.floor(Math.random() * 26)];
              } while (replacement === grid[cell.r][cell.c]);
              grid[cell.r][cell.c] = replacement;
              changed = true;
              break;
            }
          }
        }
      }
    }
  }
}

return { grid, placedWords };
}

// ─────────────────────────────────────────────
// RENDER GRID
// ─────────────────────────────────────────────
function renderGrid(animate = false) {
  const wrap = document.getElementById('grid-wrap');
  const sz   = G.gridSize;
  const ww   = wrap.clientWidth - 18, wh = wrap.clientHeight - 4;
  const cellSize = Math.floor(Math.min(ww / sz, wh / sz));
  const fontSize = Math.max(Math.floor(cellSize * 0.40), 7);

  const gridEl = document.getElementById('word-grid');
  gridEl.innerHTML = '';
  gridEl.style.gridTemplateColumns = `repeat(${sz},${cellSize}px)`;
  gridEl.style.gridTemplateRows    = `repeat(${sz},${cellSize}px)`;

  const freshGrid = gridEl.cloneNode(true);
  gridEl.parentNode.replaceChild(freshGrid, gridEl);

  for (let r = 0; r < sz; r++) {
    for (let c = 0; c < sz; c++) {
      const cell = document.createElement('div');
      cell.className   = 'grid-cell';
      cell.textContent = G.grid[r][c];
      cell.style.fontSize = fontSize + 'px';
      cell.style.width    = cellSize + 'px';
      cell.style.height   = cellSize + 'px';
      cell.dataset.r = r;
      cell.dataset.c = c;
      if (G.foundCells.some(f => f.r === r && f.c === c)) cell.classList.add('found-cell');
      if (animate) {
        const diag = r + c;
        cell.style.animationDelay = (diag * 28) + 'ms';
        cell.classList.add('cell-pop-in');
      }
      freshGrid.appendChild(cell);
    }
  }

  freshGrid.addEventListener('mousedown', onStart);
  freshGrid.addEventListener('touchstart', onStart, { passive: false });
  freshGrid.addEventListener('mousemove',  onMove);
  freshGrid.addEventListener('touchmove',  onMove, { passive: false });
  freshGrid.addEventListener('mouseup',    onEnd);
  freshGrid.addEventListener('touchend',   onEnd);
  document.removeEventListener('mouseup', onEnd); document.addEventListener('mouseup', onEnd);
}

// ─────────────────────────────────────────────
// CURRENT WORD DISPLAY
// ─────────────────────────────────────────────
let _cwdFlashTimer = null;

function updateCurrentWordDisplay(letters, state = 'selecting') {
  const container = document.getElementById('current-word-letters');
  if (!container) return;

  if (state !== 'selecting') {
    const kids = Array.from(container.children);
    kids.forEach((el, i) => {
      el.style.animation = 'none';
      el.className = 'cwl-letter';
      if (state === 'wrong')   el.classList.add('wrong');
      if (state === 'correct') el.classList.add('correct');
      if (letters && letters[i] !== undefined) el.textContent = letters[i];
    });
    return;
  }

  if (!letters || letters.length === 0) {
    container.innerHTML = '';
    return;
  }

  const existing = Array.from(container.children);
  const newLen   = letters.length;
  const oldLen   = existing.length;

  for (let i = 0; i < Math.min(oldLen, newLen); i++) {
    if (existing[i].textContent !== letters[i]) {
      existing[i].style.animation = 'none';
      existing[i].textContent = letters[i];
      existing[i].className  = 'cwl-letter';
    }
  }

  for (let i = oldLen; i < newLen; i++) {
    const el = document.createElement('span');
    el.className  = 'cwl-letter';
    el.textContent = letters[i];
    container.appendChild(el);
  }

  while (container.children.length > newLen) {
    container.removeChild(container.lastChild);
  }
}

function clearCurrentWordDisplay() {
  const container = document.getElementById('current-word-letters');
  if (container) container.innerHTML = '';
  if (_cwdFlashTimer) { clearTimeout(_cwdFlashTimer); _cwdFlashTimer = null; }
}

function flashCurrentWordResult(letters, state) {
  updateCurrentWordDisplay(letters, state);
  if (_cwdFlashTimer) clearTimeout(_cwdFlashTimer);
  _cwdFlashTimer = setTimeout(() => {
    clearCurrentWordDisplay();
    _cwdFlashTimer = null;
  }, 420);
}

// ─────────────────────────────────────────────
// INPUT
// ─────────────────────────────────────────────
function cellAt(x, y) {
  const g = document.getElementById('word-grid'); if (!g) return null;
  for (const c of g.querySelectorAll('.grid-cell')) {
    const r = c.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return c;
  }
  return null;
}

function onStart(e) {
  e.preventDefault();
  const pt = e.touches ? e.touches[0] : e;
  const cell = cellAt(pt.clientX, pt.clientY); if (!cell) return;
  G.selecting = true;
  G.startCell = { r: +cell.dataset.r, c: +cell.dataset.c };
  G.currentCells = [{ r: G.startCell.r, c: G.startCell.c }];
  clearSel(); cell.classList.add('selected');
  playSound('select');
  updateCurrentWordDisplay([G.grid[G.startCell.r][G.startCell.c]], 'selecting');
}

function onMove(e) {
  if (!G.selecting) return;
  e.preventDefault();
  const pt = e.touches ? e.touches[0] : e;
  const cell = cellAt(pt.clientX, pt.clientY); if (!cell) return;
  const r = +cell.dataset.r, c = +cell.dataset.c;
  const { r: sr, c: sc } = G.startCell;
  const dr = r - sr, dc = c - sc;
  let cells = [];
  if (dr === 0 && dc === 0) {
    cells = [{ r, c }];
  } else if (dr === 0) {
    const step = dc > 0 ? 1 : -1;
    for (let x = sc; dc > 0 ? x <= c : x >= c; x += step) cells.push({ r, c: x });
  } else if (dc === 0) {
    const step = dr > 0 ? 1 : -1;
    for (let x = sr; dr > 0 ? x <= r : x >= r; x += step) cells.push({ r: x, c });
  } else if (Math.abs(dr) === Math.abs(dc)) {
    const rs = dr > 0 ? 1 : -1, cs = dc > 0 ? 1 : -1;
    for (let i = 0; i <= Math.abs(dr); i++) cells.push({ r: sr + i * rs, c: sc + i * cs });
  } else {
    if (Math.abs(dr) >= Math.abs(dc)) {
      const step = dr > 0 ? 1 : -1;
      for (let x = sr; dr > 0 ? x <= r : x >= r; x += step) cells.push({ r: x, c: sc });
    } else {
      const step = dc > 0 ? 1 : -1;
      for (let x = sc; dc > 0 ? x <= c : x >= c; x += step) cells.push({ r: sr, c: x });
    }
  }

  const prevLen = G.currentCells.length;
  G.currentCells = cells;

  if (cells.length !== prevLen) {
    playSound('drag-cell');
  }

  clearSel();
  cells.forEach(({ r, c }) => {
    const el = document.querySelector(`.grid-cell[data-r="${r}"][data-c="${c}"]`);
    if (el && !el.classList.contains('found-cell')) el.classList.add('selected');
  });

  const letters = cells.map(({ r, c }) => G.grid[r][c]);
  updateCurrentWordDisplay(letters, 'selecting');
}

function onEnd(e) {
  if (e && e.type === 'touchend') e.preventDefault();
  if (!G.selecting) return;
  G.selecting = false; checkWord();
}

function clearSel() {
  document.querySelectorAll('.grid-cell.selected').forEach(c => c.classList.remove('selected'));
}

// ─────────────────────────────────────────────
// WORD CHECKING
// ─────────────────────────────────────────────
function checkWord() {
  if (!G.currentCells || !G.currentCells.length) { clearSel(); clearCurrentWordDisplay(); return; }
  const sel = G.currentCells;
  const str = sel.map(({ r, c }) => G.grid[r][c]).join('');
  let foundWord = null;

  for (const pw of G.words) {
    if (pw.w !== str) continue;
    const fwd = pw.cells.length === sel.length && pw.cells.every((cell, i) => cell.r === sel[i].r && cell.c === sel[i].c);
    if (fwd) { foundWord = pw; break; }
  }

  if (foundWord) {
    if (foundWord.found) {
      playSound('already-found');
      clearSel();
      clearCurrentWordDisplay();
      G.currentCells = [];
      return;
    }
    flashCurrentWordResult(str.split(''), 'correct');
    onWordFound(foundWord);
    G.currentCells = [];
    return;
  }

  if (G.bonusWords && G.bonusWords.length) {
    let matchedBonus = null;
    for (const bw of G.bonusWords) {
      if (bw.w !== str) continue;
      const match = bw.cells.length === sel.length && bw.cells.every((cell, i) => cell.r === sel[i].r && cell.c === sel[i].c);
      if (match) { matchedBonus = bw; break; }
    }
    if (matchedBonus) {
      if (matchedBonus.found) {
        playSound('already-found');
        clearSel();
        clearCurrentWordDisplay();
        G.currentCells = [];
        return;
      }
      onBonusWordFound(matchedBonus);
      G.currentCells = [];
      return;
    }
  }

  playSound('wrong');
  const gridWrap = document.getElementById('grid-wrap');
  gridWrap.classList.remove('grid-shake');
  void gridWrap.offsetWidth;
  gridWrap.classList.add('grid-shake');
  setTimeout(() => gridWrap.classList.remove('grid-shake'), 400);

  flashCurrentWordResult(str.split(''), 'wrong');
  G.currentCells.forEach(({ r, c }) => {
    const el = document.querySelector(`.grid-cell[data-r="${r}"][data-c="${c}"]`);
    if (el) { el.classList.remove('selected'); el.classList.add('wrong-flash'); setTimeout(() => el.classList.remove('wrong-flash'), 400); }
  });
  G.combo = 0; updateComboDisplay();
  G.currentCells = [];
}

// ─────────────────────────────────────────────
// UNLOCK CINEMATIC SYSTEM
// ─────────────────────────────────────────────

function onWordFound(pw) {
  pw.found = true;
  G.foundWords.push(pw.w);
  pw.cells.forEach(({ r, c }) => { G.foundCells.push({ r, c }); });
  pw.cells.forEach(({ r, c }) => {
    const el = document.querySelector(`.grid-cell[data-r="${r}"][data-c="${c}"]`);
    if (el) { el.classList.remove('selected'); el.classList.add('found-cell'); }
  });

  playCorrectByLength(pw.w.length);
G.combo++;
if (G.combo > 1) playComboByIntensity(G.combo);

  const base       = pw.w.length * 10;
  const comboBonus = (G.combo - 1) * 5;
  const levelMult  = 1 + (S.currentLevel - 1) / 199;
  const earned     = Math.round((base + comboBonus) * levelMult);

  G.score += earned; S.score += earned;
  document.getElementById('game-score-display').textContent = G.score;

  if (S.savedGame) {
    S.savedGame.foundCells = G.foundCells.map(c => ({ ...c }));
    S.savedGame.score = G.score;
    S.savedGame.combo = G.combo;
    const snap = S.savedGame.words && S.savedGame.words.find(w => w.w === pw.w);
    if (snap) snap.found = true;
    S.savedGame.foundWords = [...G.foundWords];
    save();
  }

  const wrap = document.getElementById('grid-wrap');
  if (comboBonus > 0) {
    spawnElectricBonus(wrap, pw.w, comboBonus, G.combo);
  } else {
    const flash = document.createElement('div');
    flash.className   = 'found-flash';
    flash.textContent = pw.w;
    wrap.appendChild(flash);
    setTimeout(() => flash.remove(), 950);
  }

  refreshWordChips(); updateProgressBar(); updateComboDisplay();
  if (G.foundWords.length >= G.words.length) setTimeout(showComplete, 900);
}

function onBonusWordFound(bw) {
  bw.found = true;
  if (typeof ucUpdateBonusHint === 'function') ucUpdateBonusHint(G.bonusWords);
  G.foundBonusWords.push(bw.w);
  flashCurrentWordResult(bw.w.split(''), 'correct');

  bw.cells.forEach(({ r, c }) => {
    G.foundCells.push({ r, c });
    const el = document.querySelector(`.grid-cell[data-r="${r}"][data-c="${c}"]`);
    if (el) {
      el.classList.remove('selected');
      el.classList.add('bonus-cell');
    }
  });

  const coins = typeof getBonusWordCoins === 'function' ? getBonusWordCoins(bw.w) : 10;
  S.coins += coins;
  S.score += coins * 2;
  G.score += coins * 2;
  document.getElementById('game-score-display').textContent = G.score;

  playBonusWordSound(bw.w.length);

  const wrap = document.getElementById('grid-wrap');
  spawnElectricBonus(wrap, bw.w, coins, 0);

  if (S.savedGame) {
    S.savedGame.foundBonusWords = [...G.foundBonusWords];
    S.savedGame.score = G.score;
    const snap = S.savedGame.bonusWords && S.savedGame.bonusWords.find(w => w.w === bw.w);
    if (snap) snap.found = true;
    save();
  }
}

function refreshWordChips() {
  document.querySelectorAll('.word-chip').forEach(chip => {
    chip.classList.toggle('found', G.foundWords.includes(chip.dataset.word));
  });

  const firstUnfound = document.querySelector('.word-chip:not(.found)');
  if (firstUnfound) {
    firstUnfound.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }
}

function updateProgressBar() {
  const pct = (G.foundWords.length / G.words.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('words-found-count').textContent = `${G.foundWords.length}/${G.words.length} words`;
}

function updateComboDisplay() {
  document.getElementById('combo-display').textContent = G.combo > 1 ? `🔥 x${G.combo} COMBO` : '';
}

// ─────────────────────────────────────────────
// HINT
// ─────────────────────────────────────────────
function useHint() {
  const maxHints = 3;
  const rem = maxHints - G.hintUsed;
  if (rem <= 0) { toast({ title: 'No Hints Left', desc: 'All 3 hints have been used' }); return; }
  const unfound = G.words.filter(w => !w.found);
  if (!unfound.length) return;
  const target   = unfound[0];
  const firstCell = target.cells[0];
  const el = document.querySelector(`.grid-cell[data-r="${firstCell.r}"][data-c="${firstCell.c}"]`);
  if (el) { el.classList.add('hint-cell'); setTimeout(() => el.classList.remove('hint-cell'), 3500); }
  G.hintUsed++;
  G.score = Math.max(0, G.score - 5);
  document.getElementById('hint-count').textContent  = maxHints - G.hintUsed;
  document.getElementById('game-score-display').textContent = G.score;
  playSound('hint');
}

// ─────────────────────────────────────────────
// PRE-GAME LOADER
// ─────────────────────────────────────────────
function showPregameLoader(catKey, onComplete) {
  const stale = document.getElementById('pregame-overlay');
  if (stale) stale.remove();

  const cat = CATEGORIES[catKey];
  const COLS = 7, ROWS = 5;
  const pool = cat.words.flatMap(w => w.w.split('')).join('');
  const letters = Array.from({ length: COLS * ROWS }, (_, i) =>
    pool[i % pool.length] || String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );

  const overlay = document.createElement('div');
  overlay.id = 'pregame-overlay';

  Object.assign(overlay.style, {
    position:       'absolute',
    top:            '0',
    left:           '0',
    width:          '100%',
    height:         '100%',
    zIndex:         '999',
    background:     'var(--zen-bg)',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '20px',
    opacity:        '0',
    transition:     'opacity 0.22s ease',
  });

  const gridWrap = document.createElement('div');
  Object.assign(gridWrap.style, {
    display:               'grid',
    gridTemplateColumns:   `repeat(${COLS}, 28px)`,
    gridTemplateRows:      `repeat(${ROWS}, 28px)`,
    gap:                   '4px',
  });

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement('div');
      cell.className   = 'pregame-cell';
      cell.textContent  = letters[r * COLS + c];
      gridWrap.appendChild(cell);
      cells.push({ el: cell, r, c });
    }
  }

  const iconWrap = document.createElement('div');
  Object.assign(iconWrap.style, {
    width:          '56px',
    height:         '56px',
    borderRadius:   '16px',
    background:     'var(--icon-accent-bg)',
    border:         '1px solid var(--icon-accent-border)',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    fontSize:       '24px',
    color:          'var(--icon-accent-color)',
    marginBottom:   '-8px',
  });
  iconWrap.innerHTML = `<i class="${cat.icon}"></i>`;

  const catLabel = document.createElement('div');
  Object.assign(catLabel.style, {
    fontFamily:     "'Cinzel', serif",
    fontSize:       '14px',
    fontWeight:     '600',
    color:          'var(--zen-text)',
    letterSpacing:  '2px',
    textTransform:  'uppercase',
  });
  catLabel.textContent = cat.name;

  const label = document.createElement('div');
  label.className  = 'pregame-label';
  label.textContent = 'Placing words...';

  const barWrap = document.createElement('div');
  Object.assign(barWrap.style, {
    width:        '160px',
    height:       '3px',
    background:   'rgba(255,255,255,0.08)',
    borderRadius: '2px',
    overflow:     'hidden',
    marginTop:    '4px',
  });
  const barFill = document.createElement('div');
  Object.assign(barFill.style, {
    height:           '100%',
    width:            '0%',
    background:       'linear-gradient(90deg, var(--zen-jade), var(--zen-sky))',
    borderRadius:     '2px',
    transition:       'width 0.3s ease',
  });
  barWrap.appendChild(barFill);

  overlay.appendChild(iconWrap);
  overlay.appendChild(catLabel);
  overlay.appendChild(gridWrap);
  overlay.appendChild(label);
  overlay.appendChild(barWrap);

  const appEl = document.getElementById('app');
  appEl.appendChild(overlay);

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-game').classList.add('active');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  }));

  const totalDiags = COLS + ROWS - 1;
  let waveStep = 0;
  const SWEEP_LEN = totalDiags + 4;
  const waveIv = setInterval(() => {
    const diag = waveStep % SWEEP_LEN;
    cells.forEach(({ el, r, c }) => {
      const cellDiag = r + c;
      el.classList.toggle('lit', cellDiag === diag || cellDiag === diag - 1);
    });
    waveStep++;
  }, 60);

  const TOTAL_DURATION = 10000;
  const TICK_MS        = 80;
  const totalTicks     = TOTAL_DURATION / TICK_MS;
  let tickCount = 0;
  const msgs = ['Placing words...', 'Building the grid...', 'Shuffling letters...', 'Drawing the path...', 'Almost ready...', 'Go!'];

  const barIv = setInterval(() => {
    tickCount++;
    const progress = Math.min((tickCount / totalTicks) * 100, 100);
    barFill.style.width = progress + '%';
    const msgIdx = Math.min(Math.floor(progress / (100 / (msgs.length - 1))), msgs.length - 1);
    label.textContent = msgs[msgIdx];

    if (tickCount >= totalTicks) {
      clearInterval(barIv);
      clearInterval(waveIv);
      barFill.style.width = '100%';
      label.textContent   = 'Go!';
      cells.forEach(({ el }) => el.classList.remove('lit'));

      setTimeout(() => {
        overlay.style.transition = 'opacity 0.35s ease';
        overlay.style.opacity    = '0';
        setTimeout(() => {
          if (overlay.parentNode) overlay.remove();
          onComplete();
        }, 370);
      }, 250);
    }
  }, TICK_MS);
}

// ─────────────────────────────────────────────
// GAME ENTRY ANIMATION
// ─────────────────────────────────────────────
function animateGameEntry() {
  const gameEl      = document.getElementById('screen-game');
  const animTargets = gameEl.querySelectorAll('.game-nav, .cat-info-bar, .word-list-scroll, .hint-btn, .current-word-bar, .progress-bar-wrap, #bonus-hint-badge')

  animTargets.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'none';
  });

  applyGridSkin(S.gridSkin || 'default');
  renderGrid(false);

  requestAnimationFrame(() => {
    const gridEl   = document.getElementById('word-grid');
    const allCells = Array.from(gridEl.querySelectorAll('.grid-cell'));
    const sz       = G.gridSize;
    const maxDiag  = (sz - 1) + (sz - 1);

    allCells.forEach(cell => {
      cell.style.opacity   = '0';
      cell.style.transform = 'scale(0.6)';
      cell.style.transition = 'none';
    });

    const DIAG_DELAY = 38;
    for (let d = 0; d <= maxDiag; d++) {
      const diagCells = allCells.filter(cell => (+cell.dataset.r + +cell.dataset.c) === d);
      setTimeout(() => {
        diagCells.forEach(cell => {
          cell.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
          cell.style.opacity    = '1';
          cell.style.transform  = 'scale(1)';
        });
      }, d * DIAG_DELAY);
    }

    const waveFinish = maxDiag * DIAG_DELAY + 250;
    setTimeout(() => {
      animTargets.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          el.style.opacity    = '1';
          el.style.transform  = 'translateY(0)';
        }, i * 60);
      });
    }, waveFinish);
  });
}

// ─────────────────────────────────────────────
// START GAME
// ─────────────────────────────────────────────
function startGame(catKey) {
  playSound('click');
  S.lastCat = catKey;
  const built = buildGameState(catKey);
  if (!built) return;

  stopMenuBgRotation();
  primeBgMusic();
  primeAmbient(catKey);

  showPregameLoader(catKey, () => {
    initGameBgForCategory(catKey);
startBgMusic();
startCatAmbient(catKey);
if (typeof ucShowBonusHint === 'function' && G.bonusWords && G.bonusWords.length) {
  ucShowBonusHint(G.bonusWords);
}
animateGameEntry();
playSound('shuffle');
  });
}

// ─────────────────────────────────────────────
// NEXT LEVEL
// ─────────────────────────────────────────────
function nextLevel() {
  playSound('click');
  if (typeof _ucPendingNewCat !== 'undefined' && _ucPendingNewCat) {
    const prev = _ucPendingPrevCat;
    const next = _ucPendingNewCat;
    if (typeof _ucPendingNewCat  !== 'undefined') _ucPendingNewCat  = null;
if (typeof _ucPendingPrevCat !== 'undefined') _ucPendingPrevCat = null;
    showCategoryUnlockCinematic(prev, next);
  } else {
    const catKey = S.lastCat;
    const built  = buildGameState(catKey);
    if (!built) return;
    showScreen('game', 'right');
    requestAnimationFrame(() => {
    setTimeout(() => {
      renderGrid(false);
      continueBgMusic();
      if (_ambientAudio && _ambientCurrentCat === catKey) {
        _fadeAmbientTo(0.70, 900);
      } else {
        startCatAmbient(catKey);
      }
      playSound('shuffle');
    }, 60);
  });
  }
}

// ─────────────────────────────────────────────
// CHOOSE PATH
// ─────────────────────────────────────────────
function goChoosePath() {
  playSound('click');
  if (S.allPathsComplete && !S.allPathsShownCinematic) {
    S.allPathsShownCinematic = true;
    save();
    if (typeof showAllPathsCompleteCinematic === 'function') {
      showAllPathsCompleteCinematic(() => {
        showScreen('category', 'left');
      });
    } else {
      showScreen('category', 'left');
    }
  } else {
    showScreen('category', 'left');
  }
}

// ─────────────────────────────────────────────
// BUILD GAME STATE
// ─────────────────────────────────────────────
function buildGameState(catKey) {
  const cat     = CATEGORIES[catKey];
  const diffCfg = getDifficultyConfig(catKey);

  const wordsToUse = selectWordsForSession(catKey, diffCfg);

  if (wordsToUse.length === 0) {
    return false;
  }

  const gridSize = computeGridSize(wordsToUse);

  const { grid, placedWords } = buildGrid(wordsToUse, gridSize, diffCfg.dirs);
  
  const bonusWords = typeof buildBonusWordList === 'function'
    ? buildBonusWordList(grid, gridSize, placedWords, diffCfg.dirs)
    : [];

  if (!S.catSession) S.catSession = {};
  S.catSession[catKey] = (S.catSession[catKey] || 0) + 1;

  G = {
    grid, gridSize,
    words: placedWords, foundWords: [], foundCells: [],
    bonusWords,
    foundBonusWords: [],
    score: 0,
    selecting: false, startCell: null, currentCells: [],
    combo: 0, hintUsed: 0,
    catKey, catName: cat.name,
  };

  S.currentGame = { level: S.currentLevel, catKey };
  S.savedGame = {
    grid:      grid.map(row => [...row]),
    gridSize,
    words:     placedWords.map(pw => ({ ...pw, cells: pw.cells.map(c => ({ ...c })) })),
    bonusWords: bonusWords.map(bw => ({ ...bw, cells: bw.cells.map(c => ({ ...c })) })),
    foundWords: [], foundCells: [],
    foundBonusWords: [],
    score: 0, combo: 0, hintUsed: 0,
    catKey, catName: cat.name, level: S.currentLevel,
  };
  save();

  document.getElementById('game-level-display').textContent = S.currentLevel;
  document.getElementById('game-score-display').textContent = 0;
  document.getElementById('game-cat-name').textContent      = cat.name;
  document.getElementById('hint-count').textContent         = 3;

  clearCurrentWordDisplay();

  const wl = document.getElementById('word-list');
  wl.innerHTML = '';
  for (const pw of placedWords) {
    const chip = document.createElement('div');
    chip.className   = 'word-chip';
    chip.dataset.word = pw.w;
    chip.innerHTML   = `${pw.w}${S.settings.clues ? `<span class="chip-clue">${pw.c}</span>` : ''}`;
    wl.appendChild(chip);
  }

  updateProgressBar(); updateComboDisplay();
  requestAnimationFrame(() => {
    const scroll = document.querySelector('.word-list-scroll');
    if (scroll) scroll.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const wl = document.getElementById('word-list');
    if (wl) wl.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });
  return true;
}

// ─────────────────────────────────────────────
// SHOW COMPLETE
// ─────────────────────────────────────────────
function showComplete() {
  fadeMusicTo(0.15, 1000);
_fadeAmbientTo(0.08, 1000);
  playSound('complete');
  clearCurrentWordDisplay();

  const catKey = G.catKey;
  const isMystical = catKey === 'mystical';

  if (!S.usedWords[catKey]) S.usedWords[catKey] = [];
  for (const pw of G.words) {
    if (pw.found && !S.usedWords[catKey].includes(pw.w)) {
      S.usedWords[catKey].push(pw.w);
    }
  }

  const coinsEarned = Math.floor(G.score / 8) + S.currentLevel;
  S.coins           += coinsEarned;
  S.totalWordsFound += G.foundWords.length;

  const allFound = G.foundWords.length >= G.words.length;
  const stars    = allFound ? (G.hintUsed === 0 ? 3 : G.hintUsed <= 1 ? 2 : 1) : 1;

  document.getElementById('cs-score').textContent = G.score;
  document.getElementById('cs-words').textContent = G.foundWords.length;
  document.getElementById('cs-coins').textContent = '+' + coinsEarned;
  document.getElementById('cs-level').textContent = Math.min(S.currentLevel + 1, 9999);

  const oldLevel = S.currentLevel;
  const oldTitle = getTitleForLevel(oldLevel);
  S.currentLevel = Math.min(S.currentLevel + 1, 9999);
  const newTitle = getTitleForLevel(S.currentLevel);
  S.currentGame = null;
  S.savedGame   = null;
  const today = (new Date().getDay() + 6) % 7;
  if (!S.activityLog.includes(today)) { S.activityLog.push(today); S.streak++; }

  checkAndUnlockCategories();
  const justCompletedAll = !S.allPathsComplete && areAllPathsComplete();
  if (justCompletedAll) {
    S.allPathsComplete       = true;
    S.allPathsShownCinematic = false;
    resetAllPathsForReplay();
  }

  save();
  if (typeof ucCheckPendingUnlock === 'function') ucCheckPendingUnlock(catKey);

  const banner = document.getElementById('title-unlock-banner');
  if (newTitle.level !== oldTitle.level) {
    document.getElementById('title-unlock-name').textContent = newTitle.title;
    banner.classList.add('show');
  } else {
    banner.classList.remove('show');
  }

  document.getElementById('complete-level-title').textContent = `${oldTitle.title}  ·  Level ${oldLevel}`;

  const btnsEl = document.querySelector('.complete-btns');
  if (btnsEl) {
    if (isMystical && (justCompletedAll || S.allPathsComplete)) {
      btnsEl.innerHTML = `
        <button class="modal-btn primary" onclick="goChoosePath()">
          <i class="fas fa-compass"></i> CHOOSE PATH
        </button>`;
    } else {
      btnsEl.innerHTML = `
        <button class="modal-btn primary" onclick="nextLevel()"><i class="fas fa-arrow-right"></i> NEXT LEVEL</button>
        <button class="modal-btn ghost" onclick="goChoosePath()"><i class="fas fa-compass"></i> CHOOSE PATH</button>
        <button class="modal-btn ghost" onclick="showScreen('menu','left')"><i class="fas fa-house"></i> MENU</button>`;
    }
  }

  [1, 2, 3].forEach(i => {
  const s = document.getElementById('star-' + i);
    s.classList.remove('earned');
    if (i <= stars) {
      setTimeout(() => {
        s.classList.add('earned');
        try {
          const ctx = getCtx(), now = ctx.currentTime;
          const starFreqs = [
            [392, 523, 659],   // star 1 — warm low chord
            [523, 659, 784],   // star 2 — mid bright chord
            [659, 880, 1046],  // star 3 — high shimmer chord
          ];
          const freqs = starFreqs[i - 1];
          freqs.forEach((freq, fi) => {
            tone(freq, 'sine', 0.18 + fi * 0.02, now + fi * 0.045, 0.22 + fi * 0.02);
          });
          if (i === 3) {
            tone(1568, 'sine', 0.12, now + 0.18, 0.18);
            tone(2093, 'sine', 0.08, now + 0.26, 0.14);
            if (S.settings.vibrate && navigator.vibrate) navigator.vibrate([20, 10, 40]);
          }
        } catch(e) {}
      }, 300 + i * 280);
    }
  });

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-complete').classList.add('active');
  document.getElementById('screen-complete').classList.add('slide-in-up');
  setTimeout(() => document.getElementById('screen-complete').classList.remove('slide-in-up'), 460);

  confetti();
  setTimeout(() => playSound('levelup'), 700);
}

// ─────────────────────────────────────────────
// PAUSE
// ─────────────────────────────────────────────
function openPause() { pauseBgMusicSoft(); _fadeAmbientTo(0.08, 400); openModal('pause-modal'); playSound('click'); }
function closePause() { resumeBgMusicSoft(); _fadeAmbientTo(0.70, 600); closeModal('pause-modal'); playSound('click'); }
function restartLevel() { closePause(); stopCatAmbient(300); S.savedGame = null; save(); startGame(G.catKey); }
function quitToMenu()  {
  closePause();
  S.currentGame = null; save();
  stopBgMusic(); stopCatAmbient(); stopBgRotation();
  clearCurrentWordDisplay();
  showScreen('menu', 'left');
}

// ─────────────────────────────────────────────
// RESUME SAVED GAME
// ─────────────────────────────────────────────
function resumeGame() {
  const snap = S.savedGame; if (!snap) return;
  G = {
    grid:            snap.grid.map(row => [...row]),
    gridSize:        snap.gridSize,
    words:           snap.words.map(pw => ({ ...pw, cells: pw.cells.map(c => ({ ...c })) })),
    foundWords:      [...snap.foundWords],
    foundCells:      snap.foundCells.map(c => ({ ...c })),
    bonusWords:      (snap.bonusWords || []).map(bw => ({ ...bw, cells: bw.cells.map(c => ({ ...c })) })),
    foundBonusWords: [...(snap.foundBonusWords || [])],
    score:           snap.score,
    selecting: false, startCell: null, currentCells: [],
    combo:           snap.combo    || 0,
    hintUsed:        snap.hintUsed || 0,
    catKey:          snap.catKey,
    catName:         snap.catName,
  };
  S.lastCat     = snap.catKey;
  S.currentGame = { level: snap.level, catKey: snap.catKey };

  document.getElementById('game-level-display').textContent = snap.level;
  document.getElementById('game-score-display').textContent = snap.score;
  document.getElementById('game-cat-name').textContent      = snap.catName;
  document.getElementById('hint-count').textContent         = 3 - (snap.hintUsed || 0);

  clearCurrentWordDisplay();

  const wl = document.getElementById('word-list');
  wl.innerHTML = '';
  for (const pw of G.words) {
    const chip = document.createElement('div');
    chip.className   = 'word-chip' + (pw.found ? ' found' : '');
    chip.dataset.word = pw.w;
    chip.innerHTML   = `${pw.w}${S.settings.clues ? `<span class="chip-clue">${pw.c}</span>` : ''}`;
    wl.appendChild(chip);
  }

  updateProgressBar(); updateComboDisplay();

  stopMenuBgRotation();
  primeBgMusic();
  primeAmbient(snap.catKey);

  showPregameLoader(snap.catKey, () => {
    initGameBgForCategory(snap.catKey);
    startBgMusic();
    startCatAmbient(snap.catKey);
    if (typeof ucShowBonusHint === 'function' && G.bonusWords && G.bonusWords.length) {
  ucShowBonusHint(G.bonusWords);
}
animateGameEntry();
requestAnimationFrame(() => {
  for (const bw of G.bonusWords) {
        if (!bw.found) continue;
        bw.cells.forEach(({ r, c }) => {
          const el = document.querySelector(`.grid-cell[data-r="${r}"][data-c="${c}"]`);
          if (el) el.classList.add('bonus-cell');
        });
      }
      if (typeof ucShowBonusHint === 'function' && G.bonusWords && G.bonusWords.length) {
        ucShowBonusHint(G.bonusWords);
      }
    });
    playSound('shuffle');
  });
}

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
function confetti() {
  const canvas = document.getElementById('confetti-canvas'); if (!canvas) return;
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d');
  const cols = ['#c9a84c','#5fa882','#6aadcc','#c46f8a','#e8edf5','#7c9cbf'];
  const pts  = Array.from({ length: 75 }, () => ({
    x: Math.random() * canvas.width, y: -30 + Math.random() * -80,
    w: 5 + Math.random() * 9, h: 8 + Math.random() * 12,
    col: cols[Math.floor(Math.random() * cols.length)],
    vy: 1.5 + Math.random() * 4, vx: (Math.random() - 0.5) * 3,
    rot: Math.random() * 360, rs: (Math.random() - 0.5) * 12, op: 1,
  }));
  let fr = 0;
  (function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let any = false;
    pts.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.rs;
      if (fr > 60) p.op -= 0.012;
      if (p.y < canvas.height && p.op > 0) any = true;
      ctx.save(); ctx.globalAlpha = Math.max(0, p.op);
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    fr++;
    if (any && fr < 180) requestAnimationFrame(anim);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
let toastTimer = null;
function toast(msg) {
  let title, desc;
  if (typeof msg === 'string') { title = msg; desc = null; }
  else { title = msg.title; desc = msg.desc || null; }

  const existing = document.getElementById('toast-bar');
  if (existing) existing.remove();
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }

  const t = document.createElement('div');
  t.id        = 'toast-bar';
  t.className = 'toast-bar';
  t.innerHTML = `
    <div class="toast-inner">
      <div class="toast-title">${title}</div>
      ${desc ? `<div class="toast-desc">${desc}</div>` : ''}
    </div>`;
  document.getElementById('app').appendChild(t);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => t.classList.add('toast-visible'));
  });
  toastTimer = setTimeout(() => {
    t.classList.remove('toast-visible');
    setTimeout(() => t.remove(), 380);
    toastTimer = null;
  }, 3000);
}

// ─────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────
window.addEventListener('load', () => {
  load();
  ['music', 'sfx', 'vibrate', 'clues'].forEach(k => {
    const el = document.getElementById('toggle-' + k);
    if (el) el.classList.toggle('on', S.settings[k]);
  });
  applyTheme(S.settings.theme || 'default');
  applyGridSkin(S.gridSkin || 'default');
  buildThemeOptions();
  initLoad();
});

function _unlockAudio() { try { getCtx(); } catch(e) {} }
document.addEventListener('touchstart', _unlockAudio, { once: true });
document.addEventListener('click',      _unlockAudio, { once: true });

window.addEventListener('resize', () => {
  if (document.getElementById('screen-game').classList.contains('active')) {
    setTimeout(() => renderGrid(false), 200);
  }
});

document.addEventListener('contextmenu', e => e.preventDefault());