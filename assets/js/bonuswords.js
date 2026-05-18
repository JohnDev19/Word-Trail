'use strict';

const BONUS_WORD_POOL = [
  'HE','ME','WE','BE','GO','NO','SO','TO','UP','US',
  'IF','OF','ON','OR','AT','BY','IN','IS','IT','MY',
  'AN','AS','AM','AH','OH','HI','YO','OK','AX','OX',
  'EX','PI','EM','EN','ER','EH','HA','HO','ID','NU',
  'MU','NA','NE','OP','RE','SH','SI','TA','TI','UH',
  'UM','UN','UT','VI','WO','YA','YE','ZA','HER','HIM',
  'HIS','THE','AND','BUT','CAN','DID','FOR','GET','HAD',
  'HAS','HOW','ITS','NEW','OFF','OLD','ONE','OUR','OUT',
  'SEE','TOO','USE','WAS','WHO','WHY','AGO','AIR','ALL',
  'ANY','APE','ARC','ART','ASK','BAD','BAG','BAN','BAR',
  'BED','BEG','BET','BIG','BUY','CRY','CUT','DAY','DIE',
  'DUE','EAR','EAT','END','FEE','GOD','LIE','LIT','OIL',
  'RAN','REF','RIG','RIP','SIN','TAR','VAN','VET','ADD',
  'ADO','AFT','AID','AIM','ALE','ALT','ANT','APT','ARK',
  'AVE','AWE','AWL','AWN','AYE','BAA','BAH','BEE','BEN',
  'BOD','BOO','BOP','BOT','BRA','BRO','BUB','BUG','BUM',
  'BUR','BUS','CAD','CAM','CAR','CAW','CEE','COB','COG',
  'COP','COT','COX','COY','CUB','CUE','CUR','DAM','DEE',
  'DEN','DEX','DOC','DOE','DON','DUN','DUO','DYE','EEK',
  'EME','ERE','ERG','EVE','FAX','FEZ','FIE','FOE','FOP',
  'GAL','GEE','GIP','GOO','GOY','GUL','HAH','HEM','HEP',
  'HEW','HOD','HOE','HON','HOY','HUH','HUP','JEE','JOE',
  'JUS','KEG','KEX','KID','KIN','KIP','KOA','KOB','KOP',
  'KOR','LAC','LAM','LAV','LEA','LEE','LEK','LEU','LEX',
  'LEY','LIT','LOO','LOP','LOR','LUX','LYE','NAB','NAP',
];

const BONUS_MIN_LENGTH = 2;
const BONUS_MAX_LENGTH = 3;
const BONUS_SEED_COUNT = 3;

function _ensureBonusStyles() {
  if (document.getElementById('bonus-hint-styles')) return;
  const style = document.createElement('style');
  style.id = 'bonus-hint-styles';
  style.textContent = `
    #bonus-hint-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-family: inherit;
      color: var(--zen-gold);
      background: rgba(201, 168, 76, 0.12);
      border: 1px solid rgba(201, 168, 76, 0.45);
      border-radius: 20px;
      padding: 3px 10px 3px 8px;
      letter-spacing: 0.04em;
      pointer-events: none;
      white-space: nowrap;
      z-index: 10;
    }
    .bonus-hint-gem {
      font-size: 0.6rem;
      animation: bonusGemPulse 2.4s ease-in-out infinite;
    }
    @keyframes bonusGemPulse {
      0%, 100% { opacity: 0.5; }
      50%       { opacity: 1;   }
    }
    .grid-cell.bonus-cell {
      background: linear-gradient(135deg,
        rgba(201,168,76,0.38) 0%,
        rgba(255,215,80,0.28) 50%,
        rgba(201,168,76,0.38) 100%
      ) !important;
      color: #fff8dc !important;
      border-color: rgba(201,168,76,0.65) !important;
      box-shadow: 0 0 10px rgba(201,168,76,0.45), inset 0 0 6px rgba(255,215,80,0.2) !important;
      animation: bonusCellReveal 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes bonusCellReveal {
      0%   { transform: scale(0.75); opacity: 0.4; filter: brightness(2.5); }
      55%  { transform: scale(1.18); filter: brightness(1.6); }
      100% { transform: scale(1);    opacity: 1;  filter: brightness(1); }
    }
    [data-skin="circle"]  .grid-cell.bonus-cell { border-radius: 50% !important; }
    [data-skin="diamond"] .grid-cell.bonus-cell { clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%) !important; }
    [data-skin="hexagon"] .grid-cell.bonus-cell { clip-path: polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%) !important; }
  `;
  document.head.appendChild(style);
}

// ─────────────────────────────────────────────
// BUILD LOOKUP
// ─────────────────────────────────────────────
function buildBonusLookup() {
  const set = new Set();
  BONUS_WORD_POOL.forEach(w => {
    if (w.length >= BONUS_MIN_LENGTH && w.length <= BONUS_MAX_LENGTH) set.add(w);
  });
  return set;
}

// ─────────────────────────────────────────────
// SEED BONUS WORDS SA GRID
// ─────────────────────────────────────────────
function seedBonusWords(grid, gridSize, placedWords, dirs) {
  const DMAP = {
    H:   [0,  1], V:   [1,  0], DR:  [1,  1], DL:  [1, -1],
    HR:  [0, -1], VR:  [-1, 0], DRR: [-1, -1], DLR: [-1,  1],
  };
  const allDirKeys = Object.keys(DMAP);
  const mainCellSet = new Set(
    placedWords.flatMap(pw => pw.cells.map(c => `${c.r},${c.c}`))
  );

  const eligible = BONUS_WORD_POOL.filter(w =>
    w.length >= BONUS_MIN_LENGTH && w.length <= BONUS_MAX_LENGTH
  );

  const pool = [...eligible];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const seeded = [];
  const seededCellSet = new Set();
  let count = 0;
  const usedDirKeys = (dirs && dirs.length) ? dirs : allDirKeys;

  for (const word of pool) {
    if (count >= BONUS_SEED_COUNT) break;
    const w = word.toUpperCase();
    let placed = false;

    for (let attempt = 0; attempt < 500 && !placed; attempt++) {
      const dirKey = usedDirKeys[Math.floor(Math.random() * usedDirKeys.length)];
      const [dr, dc] = DMAP[dirKey] || [0, 1];
      const sr = Math.floor(Math.random() * gridSize);
      const sc = Math.floor(Math.random() * gridSize);

      const cells = [];
      let valid = true;
      for (let i = 0; i < w.length; i++) {
        const r = sr + i * dr;
        const c = sc + i * dc;
        if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) { valid = false; break; }
        if (mainCellSet.has(`${r},${c}`) && grid[r][c] !== w[i]) { valid = false; break; }
        cells.push({ r, c });
      }
      if (!valid || cells.length !== w.length) continue;

      const collidesWithSeeded = cells.some(cell =>
        seededCellSet.has(`${cell.r},${cell.c}`) && grid[cell.r][cell.c] !== w[cells.indexOf(cell)]
      );
      if (collidesWithSeeded) continue;

      cells.forEach((cell, i) => {
        grid[cell.r][cell.c] = w[i];
        seededCellSet.add(`${cell.r},${cell.c}`);
      });
      seeded.push({ w, cells, isBonus: true, found: false, intentional: true });
      placed = true;
      count++;
    }
  }

  return seeded;
}

// ─────────────────────────────────────────────
// SCAN GRID PARA SA ACCIDENTAL BONUS WORDS
// ─────────────────────────────────────────────
function scanGridForBonusWords(grid, gridSize, placedWords) {
  const lookup = buildBonusLookup();
  const placedStrings = new Set(placedWords.map(pw => pw.w.toUpperCase()));

  const DIRS = [
    [0,1],[1,0],[1,1],[1,-1],
    [0,-1],[-1,0],[-1,-1],[-1,1],
  ];

  const foundKeys = new Set();
  const results   = [];

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      for (const [dr, dc] of DIRS) {
        let str = '';
        const cells = [];
        for (let step = 0; step < BONUS_MAX_LENGTH; step++) {
          const nr = r + step * dr;
          const nc = c + step * dc;
          if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize) break;
          str += grid[nr][nc];
          cells.push({ r: nr, c: nc });
          if (str.length >= BONUS_MIN_LENGTH && lookup.has(str) && !placedStrings.has(str)) {
            const key = cells.map(cl => `${cl.r},${cl.c}`).join('|');
            if (!foundKeys.has(key)) {
              foundKeys.add(key);
              results.push({
                w: str,
                cells: cells.map(cl => ({ ...cl })),
                isBonus: true, found: false, intentional: false,
              });
            }
          }
        }
      }
    }
  }
  return results;
}

// ─────────────────────────────────────────────
// BONUS WORD APPEARANCE CHANCE (rare 15% lang)
// ─────────────────────────────────────────────
const BONUS_APPEARANCE_CHANCE = 0.15;

// ─────────────────────────────────────────────
// BUILD FINAL BONUS WORD LIST
// ─────────────────────────────────────────────
function buildBonusWordList(grid, gridSize, placedWords, dirs) {
  if (Math.random() > BONUS_APPEARANCE_CHANCE) return [];

  const usedSet = new Set(
    (typeof S !== 'undefined' && Array.isArray(S.bonusUsedWords))
      ? S.bonusUsedWords
      : []
  );

  const eligible = BONUS_WORD_POOL.filter(w =>
    w.length >= BONUS_MIN_LENGTH && w.length <= BONUS_MAX_LENGTH
  );

  if (eligible.filter(w => !usedSet.has(w)).length === 0) {
    if (typeof S !== 'undefined') S.bonusUsedWords = [];
    usedSet.clear();
  }

  const seeded  = seedBonusWords(grid, gridSize, placedWords, dirs);
  const scanned = scanGridForBonusWords(grid, gridSize, placedWords);

  const seededKeys = new Set(seeded.map(sw => sw.cells.map(c => `${c.r},${c.c}`).join('|')));
  const usedWords  = new Set(seeded.map(sw => sw.w));
  const merged     = [...seeded];

  for (const sw of scanned) {
    const key = sw.cells.map(c => `${c.r},${c.c}`).join('|');
    if (!seededKeys.has(key) && !usedWords.has(sw.w)) {
      merged.push(sw);
      usedWords.add(sw.w);
    }
  }

  const filtered = merged.filter(bw => !usedSet.has(bw.w));
  const result   = filtered.slice(0, 3);

  if (typeof S !== 'undefined' && Array.isArray(S.bonusUsedWords)) {
    result.forEach(bw => {
      if (!S.bonusUsedWords.includes(bw.w)) S.bonusUsedWords.push(bw.w);
    });
  }

  return result;
}

// ─────────────────────────────────────────────
// COINS PER BONUS WORD
// ─────────────────────────────────────────────
function getBonusWordCoins(word) {
  return word.length <= 2 ? 5 : 10;
}

function ucShowBonusHint(bonusWords) {
  const old = document.getElementById('bonus-hint-badge');
  if (old) old.remove();

  const total = bonusWords.filter(bw => !bw.found).length;
  if (total === 0) return;

  _ensureBonusStyles();

  const badge = document.createElement('div');
  badge.id = 'bonus-hint-badge';
  badge.innerHTML = `<span class="bonus-hint-gem">✦</span><span id="bonus-hint-text">${total} hidden word${total !== 1 ? 's' : ''}</span>`;

  const hintBtn = document.querySelector('.hint-btn');
  if (hintBtn && hintBtn.parentNode) {
    const row = hintBtn.parentNode;
    row.style.display        = 'flex';
    row.style.alignItems     = 'center';
    row.style.justifyContent = 'space-between';
    badge.style.marginRight  = 'auto';
    row.insertBefore(badge, hintBtn);
  }
}

// ─────────────────────────────────────────────
// BONUS HINT BADGE
// ─────────────────────────────────────────────
function ucUpdateBonusHint(bonusWords) {
  const badge = document.getElementById('bonus-hint-badge');
  if (!badge) return;

  const remaining = bonusWords.filter(bw => !bw.found).length;

  if (remaining === 0) {
    badge.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    badge.style.opacity    = '0';
    badge.style.transform  = 'translateY(-6px)';
    setTimeout(() => { if (badge.parentNode) badge.remove(); }, 470);
    return;
  }

  const txt = document.getElementById('bonus-hint-text');
  if (txt) txt.textContent = `${remaining} hidden word${remaining !== 1 ? 's' : ''}`;
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────
window.buildBonusWordList  = buildBonusWordList;
window.getBonusWordCoins   = getBonusWordCoins;
window.ucShowBonusHint     = ucShowBonusHint;
window.ucUpdateBonusHint   = ucUpdateBonusHint;
window.BONUS_WORD_POOL     = BONUS_WORD_POOL;