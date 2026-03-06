// ═══════════════════════════════════════════════════════════
// WORD TRAIL — praise
// ═══════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// ELECTRIC BONUS FLASH
// ─────────────────────────────────────────────
function spawnElectricBonus(wrap, word, comboBonus, combo) {
  const screenFlash = document.createElement('div');
  screenFlash.className = 'electric-screen-flash';
  wrap.appendChild(screenFlash);
  setTimeout(() => screenFlash.remove(), 420);

  const flash = document.createElement('div');
  flash.className   = 'found-flash bonus-flash';
  flash.textContent = word + ' +' + comboBonus + '!';
  wrap.appendChild(flash);

  if (combo >= 3) {
    const badge = document.createElement('div');
    badge.className   = 'combo-badge';
    badge.textContent = '⚡ x' + combo + ' COMBO';
    wrap.appendChild(badge);
    setTimeout(() => badge.remove(), 1150);
  }

  requestAnimationFrame(() => {
    const wRect = wrap.getBoundingClientRect();
    const fRect = flash.getBoundingClientRect();
    const cx    = fRect.left - wRect.left + fRect.width  / 2;
    const cy    = fRect.top  - wRect.top  + fRect.height / 2;

    const SPARK_COUNT = 10;
    for (let i = 0; i < SPARK_COUNT; i++) {
      const spark   = document.createElement('div');
      spark.className = 'lightning-spark';

      const angle   = (i / SPARK_COUNT) * Math.PI * 2 + Math.random() * 0.4;
      const dist1   = 16 + Math.random() * 20;
      const dist2   = 34 + Math.random() * 30;
      const len     = 10 + Math.random() * 18;

      spark.style.left   = (cx + Math.cos(angle) * 6) + 'px';
      spark.style.top    = (cy + Math.sin(angle) * 6) + 'px';
      spark.style.height = len + 'px';
      spark.style.setProperty('--spark-dy',  (Math.sin(angle) * -dist1) + 'px');
      spark.style.setProperty('--spark-dy2', (Math.sin(angle) * -dist2) + 'px');
      spark.style.transform         = 'rotate(' + (angle * 180 / Math.PI + 90) + 'deg)';
      spark.style.animationDelay    = (Math.random() * 55) + 'ms';
      spark.style.animationDuration = (380 + Math.random() * 140) + 'ms';

      wrap.appendChild(spark);
      setTimeout(() => spark.remove(), 620);
    }

    const ARC_COUNT = 6;
    for (let i = 0; i < ARC_COUNT; i++) {
      const arc = document.createElement('div');
      arc.className = 'lightning-arc';

      const side   = i % 2 === 0 ? 1 : -1;
      const yOff   = (Math.random() - 0.5) * fRect.height;
      const arcLen = 18 + Math.random() * 28;
      const dx1    = side * (6  + Math.random() * 12);
      const dx2    = side * (14 + Math.random() * 18);

      arc.style.left   = (side > 0 ? cx + fRect.width / 2 : cx - fRect.width / 2 - arcLen) + 'px';
      arc.style.top    = (cy + yOff) + 'px';
      arc.style.width  = arcLen + 'px';
      arc.style.setProperty('--arc-dx',  dx1 + 'px');
      arc.style.setProperty('--arc-dx2', dx2 + 'px');
      arc.style.animationDelay    = (Math.random() * 90) + 'ms';
      arc.style.animationDuration = (320 + Math.random() * 110) + 'ms';

      wrap.appendChild(arc);
      setTimeout(() => arc.remove(), 560);
    }
  });

  setTimeout(() => flash.remove(), 1200);
}
