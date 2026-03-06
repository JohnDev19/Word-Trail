// ============================================================
// WORD TRAIL
// Help screen accordion
// ============================================================

const HELP_SECTIONS = [
  {
    id: 'how-to-play',
    icon: 'fas fa-hand-pointer',
    title: 'How to Play',
    content: () => `
      <div class="help-divider"></div>
      <div class="help-steps">
        <div class="help-step">
          <div class="help-step-num">1</div>
          <div class="help-step-text">
            <strong>Find hidden words</strong> in the grid by swiping across letters in a straight line.
          </div>
        </div>
        <div class="help-step">
          <div class="help-step-num">2</div>
          <div class="help-step-text">
            <strong>Start on the first letter</strong> of the word and drag in any direction — horizontal, vertical, or diagonal.
          </div>
        </div>
        <div class="help-step">
          <div class="help-step-num">3</div>
          <div class="help-step-text">
            <strong>Lift your finger</strong> to confirm. If the word is correct it lights up and gets crossed off the list.
          </div>
        </div>
        <div class="help-step">
          <div class="help-step-num">4</div>
          <div class="help-step-text">
            <strong>Find all words</strong> to complete the level and move on.
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'directions',
    icon: 'fas fa-compass',
    title: 'Word Directions',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:12px;">
        Words can be placed in up to <strong>8 directions</strong>. More directions unlock at higher levels.
      </p>
      <div class="help-dir-grid">
        <div class="help-dir-cell">
          <div class="help-dir-arrow">→</div>
          <div class="help-dir-label">Left to Right</div>
        </div>
        <div class="help-dir-cell">
          <div class="help-dir-arrow">↓</div>
          <div class="help-dir-label">Top to Bottom</div>
        </div>
        <div class="help-dir-cell">
          <div class="help-dir-arrow">↘</div>
          <div class="help-dir-label">Diagonal ↘</div>
        </div>
        <div class="help-dir-cell">
          <div class="help-dir-arrow">←</div>
          <div class="help-dir-label">Reversed →</div>
        </div>
        <div class="help-dir-cell">
          <div class="help-dir-arrow">↑</div>
          <div class="help-dir-label">Bottom to Top</div>
        </div>
        <div class="help-dir-cell">
          <div class="help-dir-arrow">↙</div>
          <div class="help-dir-label">Diagonal ↙</div>
        </div>
      </div>
      <p class="help-text" style="margin-top:12px;">
        Reversed and diagonal directions unlock after <strong>Level 20</strong>.
      </p>
    `,
  },
  {
    id: 'word-list',
    icon: 'fas fa-list-check',
    title: 'Word List',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        The word list scrolls along the top of the game screen. Each chip shows a word to find.
      </p>
      <div class="help-chip-row">
        <div class="help-chip unfound">LOTUS</div>
        <div class="help-chip unfound">RIVER</div>
        <div class="help-chip found">ZEN</div>
      </div>
      <p class="help-text" style="margin-top:12px;">
        <strong>Strikethrough</strong> means the word has been found. The list automatically scrolls to the next unfound word after each correct answer.
      </p>
      ${_helpClueNote()}
    `,
  },
  {
    id: 'scoring',
    icon: 'fas fa-star',
    title: 'Scoring & Stars',
    content: () => `
      <div class="help-divider"></div>
      <div class="help-score-table">
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-font"></i> Word length</div>
          <div class="help-score-val">Length × 10 pts</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-fire"></i> Combo bonus</div>
          <div class="help-score-val">+5 pts per streak</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-arrow-up"></i> Level multiplier</div>
          <div class="help-score-val">Scales with level</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-lightbulb"></i> Hint penalty</div>
          <div class="help-score-val">−5 pts per hint</div>
        </div>
      </div>
      <p class="help-text" style="margin-top:12px;">
        At the end of each level you earn <strong>1–3 stars</strong>:
      </p>
      <div class="help-tips" style="margin-top:8px;">
        <div class="help-tip">
          <div class="help-tip-icon">⭐⭐⭐</div>
          <div class="help-tip-text">All words found with <strong>no hints used</strong></div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon">⭐⭐</div>
          <div class="help-tip-text">All words found with <strong>1 hint used</strong></div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon">⭐</div>
          <div class="help-tip-text">All words found with <strong>2 or more hints</strong></div>
        </div>
      </div>
    `,
  },
  {
    id: 'combos',
    icon: 'fas fa-fire',
    title: 'Combos',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        Find words <strong>back to back without a wrong guess</strong> to build a combo streak.
        The higher your combo, the bigger the bonus points and the more intense the sound.
      </p>
      <div class="help-tips">
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-fire" style="color:var(--zen-gold)"></i></div>
          <div class="help-tip-text">A wrong guess <strong>resets your combo</strong> to zero. Stay accurate!</div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-bolt" style="color:var(--zen-sky)"></i></div>
          <div class="help-tip-text">Combo 10+ triggers a full fanfare and screen vibration.</div>
        </div>
      </div>
    `,
  },
  {
    id: 'hints',
    icon: 'fas fa-lightbulb',
    title: 'Hints',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        Tap the <strong>Hint</strong> button during a level to reveal the first cell of the next unfound word.
      </p>
      <div class="help-tips">
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-3"></i></div>
          <div class="help-tip-text">You get <strong>3 hints per level</strong>. They do not carry over.</div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-minus" style="color:var(--zen-lotus)"></i></div>
          <div class="help-tip-text">Each hint costs <strong>5 points</strong> from your level score.</div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-star" style="color:var(--zen-gold)"></i></div>
          <div class="help-tip-text">Using any hints means you <strong>cannot earn 3 stars</strong> that level.</div>
        </div>
      </div>
    `,
  },
  {
    id: 'paths',
    icon: 'fas fa-route',
    title: 'Paths & Unlocks',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        Word Trail has <strong>7 themed paths</strong>. Each path has its own word pool.
        Complete all words in a path to unlock the next one.
      </p>
      <div class="help-path-row">
        <div class="help-path-badge"><i class="fas fa-paw"></i> Animals</div>
        <div class="help-path-arrow"><i class="fas fa-arrow-right"></i></div>
        <div class="help-path-badge"><i class="fas fa-leaf"></i> Nature</div>
        <div class="help-path-arrow"><i class="fas fa-arrow-right"></i></div>
        <div class="help-path-locked"><i class="fas fa-lock"></i> Cosmos</div>
      </div>
      <p class="help-text" style="margin-top:12px;">
        Once <strong>all 7 paths are mastered</strong>, Free Play unlocks — all words from all paths become available in any order, endlessly.
      </p>
      <div class="help-tips" style="margin-top:10px;">
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-infinity" style="color:var(--zen-gold)"></i></div>
          <div class="help-tip-text"><strong>Free Play</strong> — every word from every path rotates freely once all are mastered.</div>
        </div>
      </div>
    `,
  },
  {
    id: 'difficulty',
    icon: 'fas fa-chart-line',
    title: 'Difficulty Scaling',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        The game gets harder as your level increases. No settings to change — it adapts automatically.
      </p>
      <div class="help-score-table">
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-hashtag"></i> Levels 1–3</div>
          <div class="help-score-val">3 words · → ↓ only</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-hashtag"></i> Level 20+</div>
          <div class="help-score-val">Reversed directions</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-hashtag"></i> Level 40+</div>
          <div class="help-score-val">Diagonals added</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-hashtag"></i> Level 130+</div>
          <div class="help-score-val">Up to 10 words</div>
        </div>
      </div>
    `,
  },
  {
    id: 'coins',
    icon: 'fas fa-coins',
    title: 'Coins & Shop',
    content: () => `
      <div class="help-divider"></div>
      <p class="help-text" style="margin-bottom:10px;">
        You earn <strong>coins</strong> at the end of every level based on your score.
      </p>
      <div class="help-tips">
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-coins" style="color:var(--zen-gold)"></i></div>
          <div class="help-tip-text">Coins = <strong>Score ÷ 8 + Level</strong> per completed level.</div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-store" style="color:var(--icon-accent-color)"></i></div>
          <div class="help-tip-text">Spend coins in the <strong>Shop</strong> on themes and grid skins. Tap the coin badge on the menu to open it.</div>
        </div>
        <div class="help-tip">
          <div class="help-tip-icon"><i class="fas fa-palette" style="color:var(--zen-sky)"></i></div>
          <div class="help-tip-text"><strong>Grid skins</strong> change the shape of grid cells — circle, diamond, or hexagon.</div>
        </div>
      </div>
    `,
  },
  {
    id: 'settings-help',
    icon: 'fas fa-sliders',
    title: 'Settings',
    content: () => `
      <div class="help-divider"></div>
      <div class="help-score-table">
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-music"></i> Music</div>
          <div class="help-score-val" style="color:var(--zen-muted);font-weight:400;">Ambient background track</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-volume-high"></i> SFX</div>
          <div class="help-score-val" style="color:var(--zen-muted);font-weight:400;">All sound effects + ambient</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-mobile-screen"></i> Vibrate</div>
          <div class="help-score-val" style="color:var(--zen-muted);font-weight:400;">Haptic feedback</div>
        </div>
        <div class="help-score-row">
          <div class="help-score-label"><i class="fas fa-tag"></i> Clues</div>
          <div class="help-score-val" style="color:var(--zen-muted);font-weight:400;">Shows hints under word chips</div>
        </div>
      </div>
    `,
  },
];

function _helpClueNote() {
  return `
    <div class="help-tip" style="margin-top:10px;">
      <div class="help-tip-icon"><i class="fas fa-tag" style="color:var(--zen-sky)"></i></div>
      <div class="help-tip-text">
        <strong>Clues</strong> appear below each word chip when enabled in Settings.
        They give a hint about the word's meaning.
      </div>
    </div>
  `;
}

function toggleHelpCard(id) {
  const card = document.getElementById('help-card-' + id);
  if (!card) return;
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.help-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

function buildHelpScreen() {
  const body = document.getElementById('help-body');
  if (!body) return;
  if (body.dataset.built === '1') return;
  body.dataset.built = '1';

  const hero = document.createElement('div');
  hero.className = 'help-hero';
  hero.innerHTML = `
    <div class="help-hero-icon"><i class="fas fa-circle-question"></i></div>
    <div class="help-hero-text">
      <div class="help-hero-title">How to play Word Trail</div>
      <div class="help-hero-sub">Swipe to find hidden words. Build combos. Master all paths.</div>
    </div>
  `;
  body.appendChild(hero);

  const groups = [
    { label: 'Gameplay',   ids: ['how-to-play','directions','word-list','combos','hints'] },
    { label: 'Progression', ids: ['scoring','paths','difficulty'] },
    { label: 'Other',      ids: ['coins','settings-help'] },
  ];

  groups.forEach(group => {
    const lbl = document.createElement('span');
    lbl.className = 'help-section-label';
    lbl.textContent = group.label;
    body.appendChild(lbl);

    group.ids.forEach(id => {
      const section = HELP_SECTIONS.find(s => s.id === id);
      if (!section) return;

      const card = document.createElement('div');
      card.className = 'help-card';
      card.id = 'help-card-' + id;
      card.innerHTML = `
        <div class="help-card-header" onclick="toggleHelpCard('${id}')">
          <div class="help-card-icon"><i class="${section.icon}"></i></div>
          <div class="help-card-title">${section.title}</div>
          <i class="fas fa-chevron-down help-card-chevron"></i>
        </div>
        <div class="help-card-body">
          ${section.content()}
        </div>
      `;
      body.appendChild(card);
    });
  });

  const footer = document.createElement('div');
  footer.className = 'help-footer';
  footer.innerHTML = `<div class="help-footer-text">WORD TRAIL · TAP A CARD TO EXPAND</div>`;
  body.appendChild(footer);
}

function refreshHelp() {
  buildHelpScreen();
}