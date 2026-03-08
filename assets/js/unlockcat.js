/* ═══════════════════════════════════════════════════════════════
   WORD TRAIL — Unlock Category
   ═══════════════════════════════════════════════════════════════ */

'use strict';

var _ucPendingNewCat  = null;
var _ucPendingPrevCat = null;

var UC_STORIES = {
  animals: {
    title: 'The Wild Awakens',
    theme: { bg: '#0a1a0e', accent: '#6ecf85', accent2: '#3a8c50', particle: '#b8f0c8', glow: 'rgba(110,207,133,0.22)', overlay: 'rgba(10,26,14,0.45)' },
    beats: [
      { label: 'Chapter I',   title: 'Into the Wild',   line: 'Every creature carries a name\nsharpened by ancient tongues.',        scene: 'forest' },
      { label: 'Chapter II',  title: 'The First Step',  line: 'You have learned to listen\nto the language of the forest.',          scene: 'forest' },
      { label: 'Chapter III', title: 'A Trail Begins',  line: 'The animals have spoken.\nA new path stirs ahead.',                   scene: 'forest' },
    ],
  },
  nature: {
    title: 'The Living World',
    theme: { bg: '#081408', accent: '#72d484', accent2: '#48984c', particle: '#c0f0b0', glow: 'rgba(114,212,132,0.20)', overlay: 'rgba(8,20,8,0.42)' },
    beats: [
      { label: 'Chapter I',   title: 'Roots and Branches', line: 'Beneath the forest floor, roots\nhold the memory of every storm.',       scene: 'nature' },
      { label: 'Chapter II',  title: 'The Green Tongue',   line: 'Nature does not speak in words—\nbut in patterns, seasons, and growth.', scene: 'nature' },
      { label: 'Chapter III', title: 'A New Grove',        line: 'You walked the animal trail.\nNow the living world reveals itself.',      scene: 'nature' },
    ],
  },
  cosmos: {
    title: 'Beyond the Veil',
    theme: { bg: '#04040f', accent: '#6b6ff5', accent2: '#3c3fa8', particle: '#b0b4ff', glow: 'rgba(107,111,245,0.18)', overlay: 'rgba(4,4,15,0.6)' },
    beats: [
      { label: 'Chapter I',   title: 'The First Light',  line: 'Before language existed,\nstars were already naming themselves.',        scene: 'cosmos' },
      { label: 'Chapter II',  title: 'Infinite Grammar', line: 'Every constellation is a sentence\nwritten across a billion years.',     scene: 'cosmos' },
      { label: 'Chapter III', title: 'The Sky Opens',    line: "You have learned the earth's tongue.\nNow the cosmos calls you upward.", scene: 'cosmos' },
    ],
  },
  zen: {
    title: 'The Inner Path',
    theme: { bg: '#06101a', accent: '#5dbcd8', accent2: '#2e7896', particle: '#aae4f8', glow: 'rgba(93,188,216,0.20)', overlay: 'rgba(6,16,26,0.42)' },
    beats: [
      { label: 'Chapter I',   title: 'Still Water',    line: 'A single breath contains\nmore words than a library.',                 scene: 'zen' },
      { label: 'Chapter II',  title: 'The Silence',    line: 'The master does not search for words.\nShe waits, and they arrive.',   scene: 'zen' },
      { label: 'Chapter III', title: 'The Gate Opens', line: 'You have named sky and earth.\nNow enter the space between.',         scene: 'zen' },
    ],
  },
  ocean: {
    title: 'The Deep Below',
    theme: { bg: '#01080f', accent: '#1db8a8', accent2: '#0d6e64', particle: '#74e8de', glow: 'rgba(29,184,168,0.16)', overlay: 'rgba(1,8,15,0.62)' },
    beats: [
      { label: 'Chapter I',   title: 'Descent',           line: 'Below the surface, where\nlight becomes legend.',                     scene: 'ocean' },
      { label: 'Chapter II',  title: 'Pressure and Grace', line: 'The ocean swallows words whole\nand returns them as echoes.',        scene: 'ocean' },
      { label: 'Chapter III', title: 'The Abyss Waits',   line: 'You have found stillness.\nNow plunge into the deep.',               scene: 'ocean' },
    ],
  },
  seasons: {
    title: 'The Turning Wheel',
    theme: { bg: '#100800', accent: '#d4882a', accent2: '#7a4c10', particle: '#f0c070', glow: 'rgba(212,136,42,0.16)', overlay: 'rgba(16,8,0,0.55)' },
    beats: [
      { label: 'Chapter I',   title: 'The Cycle',      line: 'Time does not move in lines.\nIt spirals, and every turn brings new words.', scene: 'seasons' },
      { label: 'Chapter II',  title: 'Frost to Bloom', line: 'Each season is a chapter.\nEach chapter, a world.',                         scene: 'seasons' },
      { label: 'Chapter III', title: 'The Wheel Turns', line: 'You have walked the depths.\nNow witness the great turning.',              scene: 'seasons' },
    ],
  },
  mystical: {
    title: 'Ancient Mysteries',
    theme: { bg: '#060010', accent: '#a855e8', accent2: '#5e1a8a', particle: '#d4a0ff', glow: 'rgba(168,85,232,0.18)', overlay: 'rgba(6,0,16,0.6)' },
    beats: [
      { label: 'Chapter I',   title: 'The Old Tongue',   line: 'Some words were never\nmeant to be spoken aloud.',      scene: 'mystical' },
      { label: 'Chapter II',  title: 'Runes and Sigils', line: 'Carved in stone before\nthe first empire drew breath.', scene: 'mystical' },
      { label: 'Chapter III', title: 'The Final Veil',   line: 'Six trails walked. Six worlds named.\nOne mystery remains.', scene: 'mystical' },
    ],
  },
};

var _ucSceneParticles = [];

function _ucInitParticles(W, H, theme, scene) {
  _ucSceneParticles = [];
  var count = scene === 'cosmos' ? 90 : 55;
  for (var i = 0; i < count; i++) {
    _ucSceneParticles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18, vy: -(0.08 + Math.random() * 0.22),
      r: 0.6 + Math.random() * 2.2, alpha: 0.05 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2, speed: 0.4 + Math.random() * 1.4,
    });
  }
}

function _ucHex(n) { var h = Math.max(0, Math.min(255, Math.round(n))).toString(16); return h.length < 2 ? '0' + h : h; }
function _ucRand(seed) { return ((Math.sin(seed) * 43758.5453123) % 1 + 1) % 1; }

var _ucState = {};
function _ucGetState(key, initFn) { if (!_ucState[key]) _ucState[key] = initFn(); return _ucState[key]; }
function _ucResetScene(key) { delete _ucState[key]; }

var UC_SCENES = {

  // ══════════════════════════════════════════════════════════
  // FOREST
  // ══════════════════════════════════════════════════════════
  forest: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var ST = _ucGetState('forest', function() {
      var flies = [];
      for (var i = 0; i < 65; i++) {
        flies.push({
          x: Math.random()*W,
          y: H*0.25 + Math.random()*H*0.6,
          vx: (Math.random()-0.5)*0.55,
          vy: (Math.random()-0.5)*0.35,
          phase: Math.random()*Math.PI*2,
          freq: 0.35 + Math.random()*0.9,
          r: 1.8 + Math.random()*2.8,
          trail: [],
          col: Math.random()>0.4 ? '#aaff88' : (Math.random()>0.5 ? '#ffee88' : '#88ffcc'),
          glowR: 10 + Math.random()*20,
        });
      }
      var trees = [];
      for (var d = 0; d < 4; d++) {
        var treeCount = 4 + d*3;
        for (var j = 0; j < treeCount; j++) {
          trees.push({
            x: (j/treeCount + _ucRand(d*100+j)*0.22)*W,
            yBase: H*(0.60 + d*0.09),
            h: H*(0.32 - d*0.04) + _ucRand(d*200+j)*H*0.14,
            w: W*(0.035 + _ucRand(d*300+j)*0.045),
            depth: d,
          });
        }
      }
      var motes = [];
      for (var m = 0; m < 80; m++) {
        motes.push({
          x: Math.random()*W, y: Math.random()*H*0.85,
          vx: (Math.random()-0.5)*0.12,
          vy: -0.04 - Math.random()*0.12,
          r: 0.5 + Math.random()*1.5,
          alpha: 0.08 + Math.random()*0.35,
          phase: Math.random()*Math.PI*2,
        });
      }
      return { flies, trees, motes, time: 0 };
    });
    ST.time += dt;
    var et = ST.time;

    ctx.clearRect(0,0,W,H);

    var sky = ctx.createLinearGradient(0,0,0,H);
    sky.addColorStop(0,'#1a2e10');
    sky.addColorStop(0.18,'#2a4818');
    sky.addColorStop(0.38,'#3d6622');
    sky.addColorStop(0.55,'#5a7e30');
    sky.addColorStop(0.72,'#4a6018');
    sky.addColorStop(1,'#1a2808');
    ctx.fillStyle = sky; ctx.fillRect(0,0,W,H);

    var sunbeamSource = { x: W*0.62, y: -H*0.05 };
    var haze = ctx.createRadialGradient(sunbeamSource.x, sunbeamSource.y, 0, sunbeamSource.x, H*0.35, H*0.9);
    haze.addColorStop(0,'rgba(255,220,100,0.22)');
    haze.addColorStop(0.2,'rgba(220,180,60,0.10)');
    haze.addColorStop(0.5,'rgba(180,140,40,0.05)');
    haze.addColorStop(1,'transparent');
    ctx.fillStyle = haze; ctx.fillRect(0,0,W,H);

    for (var li = 0; li < 6; li++) {
      var lxB = W*(0.12 + li*0.14) + Math.sin(et*0.18 + li*1.1)*W*0.04;
      var lAngle = (li - 2.5)*0.12;
      var lLen = H*0.92;
      var lw = 8 + li*5 + Math.sin(et*0.4 + li)*6;
      var lA = 0.10 + 0.06*Math.sin(et*0.3 + li*0.7);
      var lsg = ctx.createLinearGradient(lxB, 0, lxB + Math.sin(lAngle)*lLen*0.3, lLen);
      lsg.addColorStop(0,'rgba(255,215,90,'+lA+')');
      lsg.addColorStop(0.28,'rgba(220,180,55,'+(lA*0.55)+')');
      lsg.addColorStop(0.6,'rgba(180,140,40,'+(lA*0.18)+')');
      lsg.addColorStop(1,'transparent');
      ctx.save();
      ctx.globalAlpha = 0.85 + 0.15*Math.sin(et*0.5+li);
      ctx.beginPath();
      ctx.moveTo(lxB - lw, 0);
      ctx.lineTo(lxB + lw, 0);
      ctx.lineTo(lxB + lw*5 + Math.sin(lAngle)*lLen*0.35, lLen);
      ctx.lineTo(lxB - lw*5 + Math.sin(lAngle)*lLen*0.35, lLen);
      ctx.closePath();
      ctx.fillStyle = lsg; ctx.fill();
      ctx.restore();
    }

    ctx.save();
    for (var s = 0; s < 22; s++) {
      var sx = _ucRand(s*7+1)*W, sy = _ucRand(s*7+2)*H*0.28;
      var sa = 0.04 + 0.10*Math.abs(Math.sin(et*(_ucRand(s*7+3)*1.4+0.3)+s));
      ctx.globalAlpha = sa; ctx.fillStyle = '#e8f8e0';
      ctx.beginPath(); ctx.arc(sx, sy, 0.65, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();

    for (var fl = 0; fl < 4; fl++) {
      var fogY = H*(0.50 + fl*0.10);
      var fogOff = Math.sin(et*(0.07+fl*0.03)+fl*1.8)*W*0.05;
      var fogG = ctx.createLinearGradient(0, fogY-28, 0, fogY+55);
      fogG.addColorStop(0,'transparent');
      fogG.addColorStop(0.4,'rgba(120,200,100,'+(0.055-fl*0.010)+')');
      fogG.addColorStop(0.7,'rgba(80,160,70,'+(0.032-fl*0.006)+')');
      fogG.addColorStop(1,'transparent');
      ctx.save(); ctx.translate(fogOff,0);
      ctx.fillStyle = fogG; ctx.fillRect(-W*0.1, fogY-28, W*1.2, 83);
      ctx.restore();
    }

    var gg = ctx.createLinearGradient(0,H*0.70,0,H);
    gg.addColorStop(0,'rgba(90,180,50,0.18)');
    gg.addColorStop(0.4,'rgba(60,140,35,0.10)');
    gg.addColorStop(1,'transparent');
    ctx.fillStyle = gg; ctx.fillRect(0,H*0.70,W,H*0.30);

    var depthCols = ['#040e02','#061404','#0a1c06','#0e2408'];
    var depthAlphas = [1.0, 0.90, 0.80, 0.68];
    for (var d = 3; d >= 0; d--) {
      ctx.save();
      ctx.globalAlpha = depthAlphas[d];
      ctx.fillStyle = depthCols[d];
      for (var j = 0; j < ST.trees.length; j++) {
        var tr = ST.trees[j];
        if (tr.depth !== d) continue;
        var sway = Math.sin(et*(0.22+d*0.04)+tr.x*0.009)*(2.5-d*0.5);
        ctx.beginPath();
        for (var xi = -1; xi <= 1; xi += 0.06) {
          var cx2 = tr.x + xi*tr.w*2.0 + sway;
          var cy2 = tr.yBase - tr.h*(1 - xi*xi*0.72) + Math.sin(xi*5 + et*0.28)*(tr.h*0.07);
          if (xi <= -1+0.001) ctx.moveTo(cx2, tr.yBase); else ctx.lineTo(cx2, cy2);
        }
        ctx.lineTo(tr.x + tr.w*0.5 + sway, tr.yBase);
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }

    for (var mi2 = 0; mi2 < 12; mi2++) {
      var mx2 = _ucRand(mi2*13+5)*W;
      var my2 = H*0.74 + _ucRand(mi2*13+6)*H*0.12;
      var mAlpha = 0.15 + 0.15*Math.abs(Math.sin(et*1.4+mi2*0.8));
      ctx.save(); ctx.globalAlpha = mAlpha;
      var mg2 = ctx.createRadialGradient(mx2, my2, 0, mx2, my2, 12);
      mg2.addColorStop(0,'rgba(140,255,180,0.8)');
      mg2.addColorStop(0.5,'rgba(80,220,120,0.3)');
      mg2.addColorStop(1,'transparent');
      ctx.fillStyle = mg2; ctx.beginPath(); ctx.arc(mx2, my2, 12, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    for (var i = 0; i < ST.flies.length; i++) {
      var f = ST.flies[i];
      f.vx += (Math.random()-0.5)*0.14;
      f.vy += (Math.random()-0.5)*0.09 - 0.008;
      var spd = Math.sqrt(f.vx*f.vx + f.vy*f.vy);
      if (spd > 0.95) { f.vx *= 0.95/spd; f.vy *= 0.95/spd; }
      f.x += f.vx; f.y += f.vy;
      if (f.x < 0) { f.x = 0; f.vx = Math.abs(f.vx); }
      if (f.x > W) { f.x = W; f.vx = -Math.abs(f.vx); }
      if (f.y < H*0.22) f.vy = Math.abs(f.vy);
      if (f.y > H*0.90) f.vy = -Math.abs(f.vy);
      f.trail.push({x: f.x, y: f.y});
      if (f.trail.length > 22) f.trail.shift();
      var blink = Math.pow(Math.sin(et*f.freq*Math.PI*2 + f.phase)*0.5+0.5, 2.2);
      if (blink < 0.06) continue;
      ctx.save();
      for (var ti = 1; ti < f.trail.length; ti++) {
        var ta = (ti/f.trail.length)*blink*0.55;
        ctx.globalAlpha = ta*0.45;
        ctx.strokeStyle = f.col;
        ctx.lineWidth = f.r*ta*0.85;
        ctx.beginPath();
        ctx.moveTo(f.trail[ti-1].x, f.trail[ti-1].y);
        ctx.lineTo(f.trail[ti].x, f.trail[ti].y);
        ctx.stroke();
      }
      var fg = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.glowR*blink*1.2);
      fg.addColorStop(0,'rgba(180,255,140,'+( 0.42*blink)+')');
      fg.addColorStop(0.35,'rgba(120,230,100,'+(0.18*blink)+')');
      fg.addColorStop(1,'transparent');
      ctx.globalAlpha = blink; ctx.fillStyle = fg;
      ctx.beginPath(); ctx.arc(f.x, f.y, f.glowR*blink*1.2, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = blink*0.97;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r*blink*0.95, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    for (var m = 0; m < ST.motes.length; m++) {
      var mo = ST.motes[m];
      mo.x += mo.vx + Math.sin(et*0.4+mo.phase)*0.18;
      mo.y += mo.vy;
      if (mo.y < -5) { mo.y = H*0.85; mo.x = Math.random()*W; }
      var shaftZone = false;
      for (var li2 = 0; li2 < 6; li2++) {
        var szx = W*(0.12+li2*0.14);
        if (Math.abs(mo.x - szx) < W*0.08) { shaftZone = true; break; }
      }
      if (!shaftZone) continue;
      var mA = mo.alpha*(0.5+0.5*Math.abs(Math.sin(et*1.8+mo.phase)));
      ctx.save(); ctx.globalAlpha = mA;
      ctx.fillStyle = 'rgba(255,240,180,1)';
      ctx.beginPath(); ctx.arc(mo.x, mo.y, mo.r, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }
  },

  // ══════════════════════════════════════════════════════════
  // NATURE
  // ══════════════════════════════════════════════════════════
  nature: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var ST = _ucGetState('nature', function() {
      var spores = [];
      for (var i = 0; i < 80; i++) {
        spores.push({
          x: Math.random()*W, y: H*0.3 + Math.random()*H*0.7,
          vx: (Math.random()-0.5)*0.28,
          vy: -(0.18+Math.random()*0.50),
          r: 0.9 + Math.random()*2.0,
          phase: Math.random()*Math.PI*2,
          col: Math.random()>0.5 ? 'rgba(180,255,160,': (Math.random()>0.5 ? 'rgba(220,255,180,': 'rgba(140,255,200,'),
        });
      }
      return { spores, time: 0 };
    });
    ST.time += dt;
    var et = ST.time;

    ctx.clearRect(0,0,W,H);

    var sky = ctx.createLinearGradient(0,0,0,H);
    sky.addColorStop(0,'#040d14');
    sky.addColorStop(0.18,'#061814');
    sky.addColorStop(0.38,'#082012');
    sky.addColorStop(0.58,'#0a280e');
    sky.addColorStop(0.78,'#0c2a0a');
    sky.addColorStop(1,'#061006');
    ctx.fillStyle = sky; ctx.fillRect(0,0,W,H);

    ctx.save();
    for (var s = 0; s < 80; s++) {
      var sx = _ucRand(s*5+1)*W, sy = _ucRand(s*5+2)*H*0.46;
      var sa = 0.10 + 0.35*Math.abs(Math.sin(et*(_ucRand(s*5+3)*1.2+0.25)+s*1.6));
      ctx.globalAlpha = sa;
      ctx.fillStyle = s%5===0 ? '#ffe8d0' : (s%5===1 ? '#d8f0ff' : '#f0f8e8');
      ctx.beginPath(); ctx.arc(sx, sy, 0.7+_ucRand(s*5+4)*1.1, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();

    var mx = W*0.72, my = H*0.14;
    var moonPulse = 1 + Math.sin(et*0.45)*0.012;
    var moonR = Math.min(W,H)*0.072;
    var mhalo = ctx.createRadialGradient(mx,my,moonR*0.8,mx,my,moonR*6);
    mhalo.addColorStop(0,'rgba(200,240,200,0.10)');
    mhalo.addColorStop(0.4,'rgba(140,200,160,0.04)');
    mhalo.addColorStop(1,'transparent');
    ctx.fillStyle = mhalo; ctx.fillRect(0,0,W,H);
    var mg = ctx.createRadialGradient(mx-moonR*0.2,my-moonR*0.2,0,mx,my,moonR*moonPulse);
    mg.addColorStop(0,'rgba(248,255,238,0.96)');
    mg.addColorStop(0.5,'rgba(210,248,210,0.82)');
    mg.addColorStop(0.78,'rgba(160,220,170,0.38)');
    mg.addColorStop(1,'transparent');
    ctx.save(); ctx.beginPath(); ctx.arc(mx,my,moonR*moonPulse*1.15,0,Math.PI*2);
    ctx.fillStyle = mg; ctx.fill(); ctx.restore();

    var auroraColors = [
      [50,240,120], [80,255,160], [40,200,180], [120,255,140],
      [60,230,200], [100,255,120], [30,210,160],
    ];
    for (var ai = 0; ai < 7; ai++) {
      var col = auroraColors[ai % auroraColors.length];
      var waveAmp = H*(0.05+ai*0.016);
      var baseY2 = H*(0.05+ai*0.055);
      var speed2 = 0.22 + ai*0.065;
      var thickness = H*(0.038 + Math.sin(et*0.38+ai)*0.014);
      var aAlpha = (0.10-ai*0.01)*(0.55+0.45*Math.sin(et*0.55+ai*1.25));
      ctx.save(); ctx.globalAlpha = aAlpha;
      ctx.beginPath();
      var steps = 28;
      for (var xi = 0; xi <= steps; xi++) {
        var xp = (xi/steps)*W;
        var yp = baseY2 + Math.sin(xp*0.011+et*speed2+ai*0.85)*waveAmp + Math.sin(xp*0.006+et*speed2*0.58+ai)*waveAmp*0.42;
        if (xi===0) ctx.moveTo(xp, yp); else ctx.lineTo(xp, yp);
      }
      for (var xi2 = steps; xi2 >= 0; xi2--) {
        var xp2 = (xi2/steps)*W;
        var yp2 = baseY2 + thickness + Math.sin(xp2*0.011+et*speed2+ai*0.85+0.32)*waveAmp*0.72;
        ctx.lineTo(xp2, yp2);
      }
      ctx.closePath();
      var ag2 = ctx.createLinearGradient(0,baseY2-waveAmp,0,baseY2+thickness+waveAmp);
      ag2.addColorStop(0,'transparent');
      ag2.addColorStop(0.28,'rgba('+col[0]+','+col[1]+','+col[2]+',1)');
      ag2.addColorStop(0.65,'rgba('+col[0]+','+col[1]+','+col[2]+',0.6)');
      ag2.addColorStop(1,'transparent');
      ctx.fillStyle = ag2; ctx.fill(); ctx.restore();
    }

    var lakeY = H*0.60;
    var lakeG = ctx.createLinearGradient(0,lakeY,0,H);
    lakeG.addColorStop(0,'rgba(30,100,60,0.55)');
    lakeG.addColorStop(0.2,'rgba(20,80,45,0.38)');
    lakeG.addColorStop(0.65,'rgba(8,40,20,0.20)');
    lakeG.addColorStop(1,'rgba(2,10,6,0.90)');
    ctx.fillStyle = lakeG; ctx.fillRect(0,lakeY,W,H-lakeY);

    ctx.save();
    for (var li3 = 0; li3 < 18; li3++) {
      var ly = lakeY + li3*((H-lakeY)/18);
      var lAlpha = (0.08 + 0.07*Math.abs(Math.sin(et*0.85+li3*0.65)))*(1-li3/20);
      ctx.globalAlpha = lAlpha;
      ctx.strokeStyle = 'rgba(140,255,180,1)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      for (var lx = 0; lx <= W; lx += 3) {
        var lwy = ly + Math.sin(lx*0.032+et*1.35+li3*0.55)*2.2;
        if (lx===0) ctx.moveTo(lx,lwy); else ctx.lineTo(lx,lwy);
      }
      ctx.stroke();
    }
    ctx.restore();

    var reflG = ctx.createLinearGradient(0,lakeY,0,H);
    reflG.addColorStop(0,'rgba(200,255,200,0.14)');
    reflG.addColorStop(0.4,'rgba(140,220,160,0.06)');
    reflG.addColorStop(1,'transparent');
    ctx.save(); ctx.globalAlpha = 0.7+0.3*Math.sin(et*0.6);
    var reflW = W*0.08;
    ctx.fillStyle = reflG;
    ctx.fillRect(W*0.72-reflW/2 + Math.sin(et*0.5)*W*0.01, lakeY, reflW, H-lakeY);
    ctx.restore();

    for (var i = 0; i < ST.spores.length; i++) {
      var sp = ST.spores[i];
      sp.x += sp.vx + Math.sin(et*0.75+sp.phase)*0.35;
      sp.y += sp.vy;
      if (sp.y < -12) { sp.y = H*0.82 + Math.random()*H*0.18; sp.x = Math.random()*W; }
      if (sp.x < 0) sp.x = W; if (sp.x > W) sp.x = 0;
      var ya = Math.min(1, (H*0.78-sp.y)/(H*0.45));
      if (ya <= 0) continue;
      var spAlpha = ya*(0.22+0.28*Math.abs(Math.sin(et*1.1+sp.phase)));
      ctx.save(); ctx.globalAlpha = spAlpha;
      var spg = ctx.createRadialGradient(sp.x,sp.y,0,sp.x,sp.y,sp.r*4.5);
      spg.addColorStop(0,'rgba(200,255,180,0.5)');
      spg.addColorStop(0.45,'rgba(140,230,160,0.15)');
      spg.addColorStop(1,'transparent');
      ctx.fillStyle = spg; ctx.beginPath(); ctx.arc(sp.x,sp.y,sp.r*4.5,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = '#e8fff0';
      ctx.beginPath(); ctx.arc(sp.x,sp.y,sp.r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    ctx.save(); ctx.globalAlpha = 0.95; ctx.fillStyle = '#020802';
    ctx.beginPath(); ctx.moveTo(0,H);
    for (var x = 0; x <= W; x += 4) {
      var th = Math.sin(x*0.018+0.6)*H*0.11 + Math.sin(x*0.042+1.5)*H*0.05;
      ctx.lineTo(x, H*0.72+th);
    }
    ctx.lineTo(W,H); ctx.closePath(); ctx.fill(); ctx.restore();
  },

  cosmos: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var STAR_RGBS=['255,255,255','255,232,192','192,216,255','255,208,224','208,255,216','255,224,160','200,200,255'];
    var ST = _ucGetState('cosmos', function() {
      var stars=[];
      for(var i=0;i<300;i++){var ci=Math.floor(Math.random()*STAR_RGBS.length);stars.push({x:Math.random()*W,y:Math.random()*H,r:0.22+Math.random()*0.52,alpha:0.06+Math.random()*0.32,phase:Math.random()*Math.PI*2,speed:0.08+Math.random()*0.55,rgb:STAR_RGBS[ci],tier:0});}
      for(var i2=0;i2<80;i2++){var ci2=Math.floor(Math.random()*STAR_RGBS.length);stars.push({x:Math.random()*W,y:Math.random()*H,r:0.7+Math.random()*1.3,alpha:0.28+Math.random()*0.62,phase:Math.random()*Math.PI*2,speed:0.18+Math.random()*1.1,rgb:STAR_RGBS[ci2],tier:1});}
      for(var i3=0;i3<18;i3++){var ci3=Math.floor(Math.random()*STAR_RGBS.length);stars.push({x:Math.random()*W,y:Math.random()*H,r:1.8+Math.random()*2.5,alpha:0.68+Math.random()*0.32,phase:Math.random()*Math.PI*2,speed:0.12+Math.random()*0.45,rgb:STAR_RGBS[ci3],tier:2,giant:Math.random()>0.52});}
      var shooters=[];for(var j=0;j<4;j++) shooters.push({t:j*0.25,dur:0.06+Math.random()*0.06});
      return {stars,shooters,time:0,spiralAngle:0};
    });
    ST.time+=dt; ST.spiralAngle+=dt*0.06;
    ctx.clearRect(0,0,W,H); ctx.fillStyle='#000'; ctx.fillRect(0,0,W,H);
    var gcx=W*0.52,gcy=H*0.42,galR=Math.min(W,H)*0.45;
    var galG=ctx.createRadialGradient(gcx,gcy,0,gcx,gcy,galR);galG.addColorStop(0,'rgba(180,160,220,0.08)');galG.addColorStop(0.2,'rgba(100,80,160,0.05)');galG.addColorStop(0.5,'rgba(60,40,120,0.025)');galG.addColorStop(1,'transparent');ctx.fillStyle=galG;ctx.fillRect(0,0,W,H);
    var nebData=[{x:0.35,y:0.30,rx:0.30,ry:0.18,col:[100,80,200],a:0.055,sp:0.5},{x:0.65,y:0.50,rx:0.25,ry:0.16,col:[180,60,120],a:0.045,sp:0.7},{x:0.45,y:0.60,rx:0.28,ry:0.14,col:[60,140,200],a:0.040,sp:0.4},{x:0.20,y:0.50,rx:0.20,ry:0.12,col:[120,200,80],a:0.030,sp:0.9},{x:0.75,y:0.28,rx:0.22,ry:0.10,col:[220,150,40],a:0.025,sp:0.6},{x:0.50,y:0.44,rx:0.15,ry:0.10,col:[160,180,255],a:0.035,sp:0.3}];
    for(var ni=0;ni<nebData.length;ni++){var nd=nebData[ni],pulse=0.7+0.3*Math.sin(ST.time*nd.sp+ni*1.1),nx=nd.x*W,ny=nd.y*H;ctx.save();ctx.globalAlpha=nd.a*pulse;ctx.scale(1,nd.ry/nd.rx);var ng=ctx.createRadialGradient(nx,ny/(nd.ry/nd.rx),0,nx,ny/(nd.ry/nd.rx),nd.rx*W);ng.addColorStop(0,'rgba('+nd.col+',0.9)');ng.addColorStop(0.4,'rgba('+nd.col+',0.35)');ng.addColorStop(0.75,'rgba('+nd.col+',0.08)');ng.addColorStop(1,'transparent');ctx.fillStyle=ng;ctx.beginPath();ctx.arc(nx,ny/(nd.ry/nd.rx),nd.rx*W,0,Math.PI*2);ctx.fill();ctx.restore();}
    ctx.save();ctx.globalAlpha=0.04;for(var arm=0;arm<2;arm++){ctx.strokeStyle=arm===0?'rgba(200,180,255,1)':'rgba(180,220,255,1)';ctx.lineWidth=1.5;ctx.beginPath();for(var sp=0;sp<400;sp++){var spr=sp*0.6,spa=sp*0.12+arm*Math.PI+ST.spiralAngle,spx=gcx+Math.cos(spa)*spr,spy=gcy+Math.sin(spa)*spr*0.4;if(sp===0) ctx.moveTo(spx,spy); else ctx.lineTo(spx,spy);}ctx.stroke();}ctx.restore();
    for(var i=0;i<ST.stars.length;i++){var s=ST.stars[i],tw=s.tier===0?0.38+0.62*Math.abs(Math.sin(ST.time*s.speed+s.phase)):0.24+0.76*Math.abs(Math.sin(ST.time*s.speed+s.phase));ctx.save();if(s.tier===2){var hR=s.r*(s.giant?14:8),hg=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,hR);hg.addColorStop(0,'rgba('+s.rgb+','+(0.20*tw)+')');hg.addColorStop(0.4,'rgba('+s.rgb+','+(0.06*tw)+')');hg.addColorStop(1,'transparent');ctx.globalAlpha=1;ctx.fillStyle=hg;ctx.beginPath();ctx.arc(s.x,s.y,hR,0,Math.PI*2);ctx.fill();ctx.globalAlpha=s.alpha*tw*(s.giant?0.42:0.26);ctx.strokeStyle='rgba('+s.rgb+',1)';ctx.lineWidth=s.giant?0.9:0.5;var fl=s.r*(s.giant?22:12);ctx.beginPath();ctx.moveTo(s.x-fl,s.y);ctx.lineTo(s.x+fl,s.y);ctx.moveTo(s.x,s.y-fl);ctx.lineTo(s.x,s.y+fl);ctx.stroke();if(s.giant){ctx.globalAlpha=s.alpha*tw*0.16;var fd=fl*0.6;ctx.beginPath();ctx.moveTo(s.x-fd,s.y-fd);ctx.lineTo(s.x+fd,s.y+fd);ctx.moveTo(s.x+fd,s.y-fd);ctx.lineTo(s.x-fd,s.y+fd);ctx.stroke();}ctx.globalAlpha=s.alpha*tw;ctx.fillStyle='rgba('+s.rgb+',1)';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=s.alpha*tw*0.72;ctx.fillStyle='#ffffff';ctx.beginPath();ctx.arc(s.x,s.y,s.r*0.44,0,Math.PI*2);ctx.fill();}else if(s.tier===1){ctx.globalAlpha=1;var mg2=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*5);mg2.addColorStop(0,'rgba('+s.rgb+','+(0.22*tw)+')');mg2.addColorStop(1,'transparent');ctx.fillStyle=mg2;ctx.beginPath();ctx.arc(s.x,s.y,s.r*5,0,Math.PI*2);ctx.fill();ctx.globalAlpha=s.alpha*tw;ctx.fillStyle='rgba('+s.rgb+',1)';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}else{ctx.globalAlpha=s.alpha*tw;ctx.fillStyle='rgba('+s.rgb+',1)';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}ctx.restore();}
    for(var si=0;si<ST.shooters.length;si++){var sh=ST.shooters[si],stNorm=((ST.time*0.4+sh.t)%1);if(stNorm>sh.dur) continue;var prog=stNorm/sh.dur,stx=W*(0.85-prog*0.7)+si*W*0.06,sty=H*(0.05+prog*0.18)+si*H*0.04,tailLen=80+si*25;var stg=ctx.createLinearGradient(stx-tailLen,sty+tailLen*0.28,stx,sty);stg.addColorStop(0,'transparent');stg.addColorStop(0.5,'rgba(200,220,255,0.3)');stg.addColorStop(1,'rgba(255,255,255,0.95)');ctx.save();ctx.globalAlpha=Math.sin(prog*Math.PI);ctx.lineWidth=1.4;ctx.strokeStyle=stg;ctx.beginPath();ctx.moveTo(stx-tailLen,sty+tailLen*0.28);ctx.lineTo(stx,sty);ctx.stroke();ctx.restore();}
    var px=gcx+W*0.08,py=gcy-H*0.06;for(var pi=0;pi<3;pi++){var pr=6+pi*12+Math.sin(ST.time*2.5+pi*0.9)*4,pa=(0.12-pi*0.03)*(0.5+0.5*Math.sin(ST.time*2.5+pi));ctx.save();ctx.globalAlpha=pa;ctx.strokeStyle='rgba(200,200,255,1)';ctx.lineWidth=0.6;ctx.beginPath();ctx.arc(px,py,pr,0,Math.PI*2);ctx.stroke();ctx.restore();}
    ctx.save();ctx.globalAlpha=0.9;var psg=ctx.createRadialGradient(px,py,0,px,py,4);psg.addColorStop(0,'#ffffff');psg.addColorStop(0.5,'rgba(200,210,255,0.8)');psg.addColorStop(1,'transparent');ctx.fillStyle=psg;ctx.beginPath();ctx.arc(px,py,4,0,Math.PI*2);ctx.fill();ctx.restore();
  },

  // ══════════════════════════════════════════════════════════
  // ZEN
  // ══════════════════════════════════════════════════════════
  zen: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var ST = _ucGetState('zen', function() {
      var koi = [];
      var koiCols = [
        ['#ff5030','#ff8860'],
        ['#ff7010','#ffaa44'],
        ['#ffffff','#ffe8c0'],
        ['#ff3050','#ff7090'],
        ['#ff9020','#ffc060'],
      ];
      for (var i = 0; i < 6; i++) {
        var col = koiCols[i % koiCols.length];
        koi.push({
          x: W*(0.2+Math.random()*0.6), y: H*(0.55+Math.random()*0.28),
          vx: (Math.random()-0.5)*0.8, vy: (Math.random()-0.5)*0.4,
          angle: Math.random()*Math.PI*2, length: 20+Math.random()*16,
          col, wavePhase: Math.random()*Math.PI*2, waveSpeed: 2+Math.random(),
          trail: [],
        });
      }
      var petals = [];
      for (var j = 0; j < 42; j++) {
        petals.push({
          x: Math.random()*W, y: Math.random()*H*0.75,
          vx: (Math.random()-0.5)*0.5,
          vy: 0.18 + Math.random()*0.28,
          rot: Math.random()*Math.PI*2, rotV: (Math.random()-0.5)*0.05,
          size: 3.5 + Math.random()*5,
          opacity: 0.65 + Math.random()*0.35,
          col: Math.random()>0.5 ? 'rgba(255,180,195,' : (Math.random()>0.5 ? 'rgba(255,210,220,' : 'rgba(255,160,185,'),
        });
      }
      var lanterns = [];
      for (var l = 0; l < 5; l++) {
        lanterns.push({
          x: W*(0.08+l*0.21),
          y: H*(0.44+Math.sin(l*1.3)*0.06),
          phase: l*0.8,
          size: 8 + l%2*3,
        });
      }
      return { koi, petals, ripples: [], lanterns, time: 0, nextRipple: 1.2 };
    });
    ST.time += dt;
    var et = ST.time;

    ctx.clearRect(0,0,W,H);

    var sky = ctx.createLinearGradient(0,0,0,H*0.58);
    sky.addColorStop(0,'#06080f');
    sky.addColorStop(0.28,'#0a1020');
    sky.addColorStop(0.58,'#0e1828');
    sky.addColorStop(1,'#101e2e');
    ctx.fillStyle = sky; ctx.fillRect(0,0,W,H*0.58);

    ctx.save();
    for (var s = 0; s < 50; s++) {
      var sx = _ucRand(s*7+1)*W, sy = _ucRand(s*7+2)*H*0.44;
      var sa = 0.08 + 0.28*Math.abs(Math.sin(et*(_ucRand(s*7+3)*1.1+0.25)+s*1.4));
      ctx.globalAlpha = sa; ctx.fillStyle = '#e8e0ff';
      ctx.beginPath(); ctx.arc(sx, sy, 0.6+_ucRand(s*7+4)*0.9, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();

    var mx2 = W*0.74, my2 = H*0.17;
    var moonR2 = Math.min(W,H)*0.078;
    for (var ci = 3; ci >= 0; ci--) {
      var cR = moonR2*(2.5+ci*2.2);
      var cA = (0.05-ci*0.01)*(0.7+0.3*Math.sin(et*0.45));
      var cG = ctx.createRadialGradient(mx2,my2,moonR2*0.4,mx2,my2,cR);
      cG.addColorStop(0,'rgba(255,240,200,'+cA+')');
      cG.addColorStop(0.5,'rgba(220,200,160,'+(cA*0.4)+')');
      cG.addColorStop(1,'transparent');
      ctx.fillStyle = cG; ctx.fillRect(0,0,W,H);
    }
    var moonG2 = ctx.createRadialGradient(mx2-moonR2*0.22,my2-moonR2*0.22,0,mx2,my2,moonR2);
    moonG2.addColorStop(0,'rgba(255,253,238,0.96)');
    moonG2.addColorStop(0.45,'rgba(248,238,210,0.88)');
    moonG2.addColorStop(0.78,'rgba(220,210,180,0.45)');
    moonG2.addColorStop(1,'transparent');
    ctx.save(); ctx.beginPath(); ctx.arc(mx2,my2,moonR2*1.12,0,Math.PI*2);
    ctx.fillStyle = moonG2; ctx.fill(); ctx.restore();

    ctx.save(); ctx.fillStyle = '#04060a'; ctx.globalAlpha = 0.96;
    for (var ti = 0; ti < 4; ti++) {
      var tx = W*(0.03+ti*0.06);
      var ty = H*(0.50-ti*0.012);
      var th2 = H*(0.16+ti%2*0.04);
      for (var tier = 0; tier < 4; tier++) {
        var tierY = ty - tier*th2*0.26;
        var tierW = W*(0.028+ti*0.004)*(1-tier*0.22);
        ctx.beginPath();
        ctx.moveTo(tx, tierY-th2*0.32);
        ctx.lineTo(tx-tierW, tierY);
        ctx.lineTo(tx+tierW, tierY);
        ctx.closePath(); ctx.fill();
      }
      ctx.fillRect(tx-W*0.006, ty, W*0.012, H*0.04);
    }
    var pgx = W*0.82, pgy = H*0.52;
    ctx.fillRect(pgx-W*0.018, pgy-H*0.16, W*0.036, H*0.16);
    for (var rt = 0; rt < 4; rt++) {
      var ry = pgy-H*0.16-rt*H*0.048;
      var rw = W*(0.048-rt*W*0.0001);
      ctx.beginPath();
      ctx.moveTo(pgx, ry-H*0.028);
      ctx.lineTo(pgx-rw, ry);
      ctx.lineTo(pgx+rw, ry);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
    var pgGlow = ctx.createRadialGradient(pgx, pgy-H*0.18, 0, pgx, pgy-H*0.18, W*0.06);
    pgGlow.addColorStop(0,'rgba(255,200,100,0.18)');
    pgGlow.addColorStop(1,'transparent');
    ctx.fillStyle = pgGlow; ctx.fillRect(0,0,W,H);

    for (var l = 0; l < ST.lanterns.length; l++) {
      var lan = ST.lanterns[l];
      var lSwing = Math.sin(et*0.55+lan.phase)*W*0.008;
      var lx = lan.x + lSwing, ly = lan.y;
      var lAlpha = 0.75 + 0.25*Math.sin(et*1.8+lan.phase);
      ctx.save(); ctx.globalAlpha = lAlpha*0.5;
      var lgG = ctx.createRadialGradient(lx, ly, 0, lx, ly, lan.size*3.5);
      lgG.addColorStop(0,'rgba(255,190,60,0.55)');
      lgG.addColorStop(0.45,'rgba(220,140,40,0.18)');
      lgG.addColorStop(1,'transparent');
      ctx.fillStyle = lgG; ctx.beginPath(); ctx.arc(lx,ly,lan.size*3.5,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = lAlpha;
      ctx.fillStyle = 'rgba(255,160,40,0.85)';
      ctx.beginPath(); ctx.ellipse(lx,ly,lan.size*0.7,lan.size,0,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = 0.3; ctx.strokeStyle = 'rgba(200,180,140,1)'; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(lx,0); ctx.lineTo(lx,ly-lan.size); ctx.stroke();
      ctx.restore();
    }

    var waterY = H*0.52;
    var waterG = ctx.createLinearGradient(0,waterY,0,H);
    waterG.addColorStop(0,'rgba(10,30,55,0.98)');
    waterG.addColorStop(0.2,'rgba(8,22,42,0.95)');
    waterG.addColorStop(0.5,'rgba(5,14,28,0.90)');
    waterG.addColorStop(1,'rgba(2,6,14,0.98)');
    ctx.fillStyle = waterG; ctx.fillRect(0,waterY,W,H-waterY);

    var refW = W*0.06 + Math.sin(et*0.5)*W*0.01;
    var refG = ctx.createLinearGradient(0,waterY,0,H);
    refG.addColorStop(0,'rgba(255,245,210,0.22)');
    refG.addColorStop(0.4,'rgba(255,235,180,0.10)');
    refG.addColorStop(1,'transparent');
    ctx.save(); ctx.globalAlpha = 0.7+0.3*Math.sin(et*0.7);
    ctx.fillStyle = refG;
    ctx.fillRect(mx2-refW/2+Math.sin(et*0.4)*W*0.008, waterY, refW, H-waterY);
    ctx.restore();

    ctx.save();
    for (var ci2 = 0; ci2 < 10; ci2++) {
      var cx3 = W*(0.08+ci2*0.10), cy3 = waterY+H*0.12+ci2*H*0.025;
      var cr = 12+Math.sin(et*1.4+ci2)*7;
      var cg2 = ctx.createRadialGradient(cx3,cy3,0,cx3,cy3,cr);
      cg2.addColorStop(0,'rgba(120,200,255,0.10)');
      cg2.addColorStop(1,'transparent');
      ctx.globalAlpha = 0.45+0.35*Math.sin(et*1.6+ci2);
      ctx.fillStyle = cg2; ctx.beginPath(); ctx.ellipse(cx3,cy3,Math.max(1,cr),Math.max(1,cr*0.28),Math.sin(et*0.38+ci2)*0.5,0,Math.PI*2); ctx.fill();
    }
    ctx.restore();

    if (ST.time > ST.nextRipple) {
      ST.ripples.push({ x:W*(0.18+Math.random()*0.64), y:waterY+H*0.06+Math.random()*H*0.22, r:0, maxR:60+Math.random()*70 });
      ST.nextRipple = ST.time + 0.7 + Math.random()*1.4;
    }
    for (var ri = ST.ripples.length-1; ri >= 0; ri--) {
      var rip = ST.ripples[ri];
      rip.r += dt*28;
      if (rip.r > rip.maxR) { ST.ripples.splice(ri,1); continue; }
      var rAlpha = (1-rip.r/rip.maxR)*0.22;
      ctx.save(); ctx.globalAlpha = rAlpha;
      ctx.strokeStyle = 'rgba(180,230,255,1)'; ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.ellipse(rip.x,rip.y,Math.max(0.1,rip.r),Math.max(0.1,rip.r*0.25),0,0,Math.PI*2); ctx.stroke();
      ctx.restore();
    }

    for (var ki = 0; ki < ST.koi.length; ki++) {
      var kf = ST.koi[ki];
      var kcx = W/2, kcy = waterY+(H-waterY)*0.42;
      var kdx = kcx-kf.x, kdy = kcy-kf.y, kdist = Math.sqrt(kdx*kdx+kdy*kdy);
      if (kdist > W*0.28) { kf.vx += kdx/kdist*0.022; kf.vy += kdy/kdist*0.022; }
      kf.vx += (Math.random()-0.5)*0.05;
      kf.vy += (Math.random()-0.5)*0.03;
      var kspeed = Math.sqrt(kf.vx*kf.vx+kf.vy*kf.vy);
      if (kspeed > 0.9) { kf.vx *= 0.9/kspeed; kf.vy *= 0.9/kspeed; }
      kf.x += kf.vx; kf.y += kf.vy;
      kf.angle = Math.atan2(kf.vy, kf.vx);
      if (kf.y < waterY+8) kf.vy = Math.abs(kf.vy);
      if (kf.y > H-8) kf.vy = -Math.abs(kf.vy);
      if (kf.x < 8) kf.vx = Math.abs(kf.vx);
      if (kf.x > W-8) kf.vx = -Math.abs(kf.vx);
      kf.trail.push({x:kf.x, y:kf.y});
      if (kf.trail.length > 24) kf.trail.shift();
      ctx.save();
      for (var kti = 1; kti < kf.trail.length; kti++) {
        ctx.globalAlpha = (kti/kf.trail.length)*0.15;
        ctx.strokeStyle = 'rgba(220,240,255,1)';
        ctx.lineWidth = kf.length*0.20*(kti/kf.trail.length);
        ctx.beginPath();
        ctx.moveTo(kf.trail[kti-1].x, kf.trail[kti-1].y);
        ctx.lineTo(kf.trail[kti].x, kf.trail[kti].y);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.28;
      var kglow = ctx.createRadialGradient(kf.x,kf.y,0,kf.x,kf.y,kf.length*0.9);
      kglow.addColorStop(0,'rgba(255,180,100,0.4)');
      kglow.addColorStop(1,'transparent');
      ctx.fillStyle = kglow; ctx.beginPath(); ctx.arc(kf.x,kf.y,kf.length*0.9,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = 0.88;
      ctx.save(); ctx.translate(kf.x,kf.y); ctx.rotate(kf.angle);
      var fa = kf.vx >= 0 ? 1 : -1;
      ctx.scale(fa, 1);
      var wave = Math.sin(et*kf.waveSpeed+kf.wavePhase)*0.30;
      var bodyG2 = ctx.createLinearGradient(-kf.length*0.5,0,kf.length*0.5,0);
      bodyG2.addColorStop(0,kf.col[1]+'00');
      bodyG2.addColorStop(0.28,kf.col[0]);
      bodyG2.addColorStop(0.68,kf.col[0]);
      bodyG2.addColorStop(1,kf.col[1]+'80');
      ctx.fillStyle = bodyG2;
      ctx.beginPath(); ctx.ellipse(0,wave*kf.length*0.12,kf.length*0.5,kf.length*0.20,0,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = 'rgba(255,255,240,0.7)';
      ctx.beginPath(); ctx.ellipse(0,wave*kf.length*0.10,kf.length*0.28,kf.length*0.08,0,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = 0.65;
      ctx.fillStyle = kf.col[1];
      ctx.beginPath();
      ctx.moveTo(-kf.length*0.46,0);
      ctx.lineTo(-kf.length*0.88, kf.length*0.20+wave*kf.length*0.14);
      ctx.lineTo(-kf.length*0.88,-kf.length*0.20+wave*kf.length*0.14);
      ctx.closePath(); ctx.fill();
      ctx.restore(); ctx.restore();
    }

    for (var pi = 0; pi < ST.petals.length; pi++) {
      var pet = ST.petals[pi];
      pet.x += pet.vx + Math.sin(et*0.65+pet.rot)*0.45;
      pet.y += pet.vy;
      pet.rot += pet.rotV;
      if (pet.y > H+12) { pet.y = -12; pet.x = Math.random()*W; }
      var pAlpha = pet.opacity * (pet.y < waterY ? 1.0 : 0.45);
      ctx.save(); ctx.translate(pet.x, pet.y); ctx.rotate(pet.rot);
      ctx.globalAlpha = pAlpha;
      var petG2 = ctx.createRadialGradient(0,0,0,0,0,pet.size);
      petG2.addColorStop(0,pet.col+'0.98)');
      petG2.addColorStop(0.6,pet.col+'0.65)');
      petG2.addColorStop(1,pet.col+'0.0)');
      ctx.fillStyle = petG2;
      ctx.beginPath(); ctx.ellipse(0,0,pet.size,pet.size*0.55,0,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }
  },

  ocean: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var ST = _ucGetState('ocean', function() {
      var schools = [];
      var sCols = ['0,215,195', '55,185,255', '0,168,238', '80,240,210'];
      for (var g = 0; g < 4; g++) {
        var fish = [];
        var dir = g % 2 === 0 ? 1 : -1;
        for (var fi = 0; fi < 28; fi++) {
          fish.push({
            x: Math.random() * W,
            y: H * (0.14 + g * 0.16) + (Math.random() - 0.5) * H * 0.10,
            vx: dir * (0.38 + Math.random() * 0.52),
            vy: (Math.random() - 0.5) * 0.14,
            phase: Math.random() * Math.PI * 2,
            sz: 2.8 + Math.random() * 3.2,
          });
        }
        schools.push({ fish, col: sCols[g] });
      }
      var bubbles = [];
      for (var bi = 0; bi < 55; bi++) {
        bubbles.push({ x: Math.random()*W, y: H*0.32+Math.random()*H*0.68, r: 1.2+Math.random()*3.8, vy: -(0.20+Math.random()*0.50), phase: Math.random()*Math.PI*2 });
      }
      var kelp = [];
      for (var ki = 0; ki < 18; ki++) {
        var segs = [];
        for (var ks = 0; ks < 9; ks++) segs.push({ speed: 0.32+Math.random()*0.44, phase: Math.random()*Math.PI*2 });
        kelp.push({ x: (ki/18+_ucRand(ki*17+3)*0.05)*W, h: H*(0.06+_ucRand(ki*23+1)*0.10), w: 1.6+_ucRand(ki*7+2)*2.4, segs });
      }
      return { schools, bubbles, kelp, et: 0 };
    });
    ST.et += dt;
    var et = ST.et;
    ctx.clearRect(0,0,W,H);
    var bg = ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#000610'); bg.addColorStop(0.25,'#000d20'); bg.addColorStop(0.65,'#001428'); bg.addColorStop(1,'#000006');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    var ag2 = ctx.createRadialGradient(W*0.5,H*0.28,0,W*0.5,H*0.28,W*0.72);
    ag2.addColorStop(0,'rgba(0,68,128,0.07)'); ag2.addColorStop(0.6,'rgba(0,38,88,0.03)'); ag2.addColorStop(1,'transparent');
    ctx.fillStyle=ag2; ctx.fillRect(0,0,W,H);
    for (var li=0;li<8;li++) {
      var lxB=W*(0.04+li*0.12),lwB=6+_ucRand(li*3+1)*14,lOff=Math.sin(et*(0.34+li*0.08)+li*1.4)*W*0.028;
      var lLen=H*(0.50+Math.sin(et*0.22+li*1.0)*0.07),lA=0.07+0.04*Math.sin(et*0.55+li*0.9);
      var lg=ctx.createLinearGradient(lxB+lOff,0,lxB+lOff,lLen);
      lg.addColorStop(0,'rgba(52,172,232,'+lA+')'); lg.addColorStop(0.3,'rgba(34,132,192,'+(lA*0.50)+')'); lg.addColorStop(0.7,'rgba(14,92,162,'+(lA*0.14)+')'); lg.addColorStop(1,'transparent');
      ctx.save(); ctx.beginPath(); ctx.moveTo(lxB+lOff-lwB,0); ctx.lineTo(lxB+lOff+lwB,0); ctx.lineTo(lxB+lOff+lwB*4.5,lLen); ctx.lineTo(lxB+lOff-lwB*4.5,lLen); ctx.closePath(); ctx.fillStyle=lg; ctx.fill(); ctx.restore();
    }
    ctx.save();
    for(var bp=0;bp<80;bp++){
      var bpx=_ucRand(bp*7+1)*W,bpy=H*0.04+_ucRand(bp*7+2)*H*0.92;
      var bpa=0.022+0.082*Math.abs(Math.sin(et*(_ucRand(bp*7+3)*1.6+0.25)+bp*2.3));
      var bpC=bp%3===0?'rgba(0,222,202,':(bp%3===1?'rgba(52,182,252,':'rgba(0,192,172,');
      ctx.globalAlpha=bpa; ctx.fillStyle=bpC+'1)';
      ctx.beginPath(); ctx.arc(bpx,bpy,0.6+_ucRand(bp*7+4)*1.8,0,Math.PI*2); ctx.fill();
    }
    ctx.restore();
    for(var gi=0;gi<ST.schools.length;gi++){
      var sc=ST.schools[gi],fcx=0,fcy=0;
      for(var fi2=0;fi2<sc.fish.length;fi2++){fcx+=sc.fish[fi2].x;fcy+=sc.fish[fi2].y;}
      fcx/=sc.fish.length;fcy/=sc.fish.length;
      for(var fi3=0;fi3<sc.fish.length;fi3++){
        var f=sc.fish[fi3];
        f.vx+=(fcx-f.x)*0.004+Math.sin(et*0.9+f.phase)*0.012;
        f.vy+=(fcy-f.y)*0.004+Math.cos(et*0.7+f.phase*1.2)*0.006;
        var fsp=Math.sqrt(f.vx*f.vx+f.vy*f.vy);
        if(fsp>1.3){f.vx*=1.3/fsp;f.vy*=1.3/fsp;}
        f.x+=f.vx;f.y+=f.vy;
        if(f.x<-30) f.x=W+30;if(f.x>W+30) f.x=-30;
        if(f.y<H*0.06) f.y=H*0.06;if(f.y>H*0.9) f.y=H*0.9;
        var fa=f.vx>=0?1:-1;
        var fbr=0.42+0.25*Math.abs(Math.sin(et*2.5+f.phase));
        ctx.save();
        ctx.globalAlpha=fbr*0.28;
        var fg2=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.sz*4.5);
        fg2.addColorStop(0,'rgba('+sc.col+',0.55)');fg2.addColorStop(1,'transparent');
        ctx.fillStyle=fg2;ctx.beginPath();ctx.arc(f.x,f.y,f.sz*4.5,0,Math.PI*2);ctx.fill();
        ctx.globalAlpha=fbr;ctx.fillStyle='rgba('+sc.col+',1)';
        ctx.save();ctx.translate(f.x,f.y);ctx.scale(fa,1);
        ctx.beginPath();ctx.ellipse(0,0,f.sz*1.9,f.sz*0.52,0,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.moveTo(-f.sz*1.9,0);ctx.lineTo(-f.sz*3.2,-f.sz*0.92);ctx.lineTo(-f.sz*3.2,f.sz*0.92);ctx.closePath();ctx.fill();
        ctx.restore();ctx.restore();
      }
    }
    for(var bub=0;bub<ST.bubbles.length;bub++){
      var bb=ST.bubbles[bub];bb.y+=bb.vy;bb.x+=Math.sin(et*1.3+bb.phase)*0.55;
      if(bb.y<-12){bb.y=H*0.6+Math.random()*H*0.4;bb.x=Math.random()*W;}
      var bfade=Math.min(1,Math.max(0,(H*0.72-bb.y)/(H*0.55)));if(bfade<=0) continue;
      ctx.save();ctx.globalAlpha=bfade*(0.10+0.09*Math.sin(et*2.4+bb.phase));
      ctx.strokeStyle='rgba(108,222,252,1)';ctx.lineWidth=0.8;ctx.beginPath();ctx.arc(bb.x,bb.y,bb.r,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=bfade*0.30;ctx.fillStyle='rgba(192,238,255,1)';
      ctx.beginPath();ctx.arc(bb.x-bb.r*0.3,bb.y-bb.r*0.3,bb.r*0.3,0,Math.PI*2);ctx.fill();ctx.restore();
    }
    ctx.save();
    for(var ki2=0;ki2<ST.kelp.length;ki2++){
      var kp=ST.kelp[ki2],kA=0.09+0.06*Math.sin(et*0.45+ki2*0.8);
      ctx.strokeStyle='rgba(0,168,108,'+kA+')';ctx.lineWidth=kp.w;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(kp.x,H);var kAccX=kp.x;
      for(var ks2=0;ks2<kp.segs.length;ks2++){var segR2=(ks2+1)/kp.segs.length,ksway=Math.sin(et*kp.segs[ks2].speed+kp.segs[ks2].phase+ks2*0.6)*ks2*4.5;kAccX=kp.x+ksway;ctx.lineTo(kAccX,H-segR2*kp.h);}
      ctx.stroke();
    }
    ctx.restore();
    var sbG=ctx.createLinearGradient(0,H*0.84,0,H);sbG.addColorStop(0,'transparent');sbG.addColorStop(0.5,'rgba(0,92,72,0.07)');sbG.addColorStop(1,'rgba(0,52,42,0.12)');ctx.fillStyle=sbG;ctx.fillRect(0,H*0.84,W,H*0.16);
  },

  seasons: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    ctx.clearRect(0,0,W,H);
    var bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#0a0500');bg.addColorStop(0.4,theme.bg);bg.addColorStop(1,'#000');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    var sunX=W*0.5,sunY=H*0.42,sunR=W*0.14;
    var sg1=ctx.createRadialGradient(sunX,sunY,0,sunX,sunY,sunR*3.2);sg1.addColorStop(0,theme.accent+_ucHex(Math.round(0.12*255)));sg1.addColorStop(0.35,theme.accent+_ucHex(Math.round(0.06*255)));sg1.addColorStop(1,'transparent');ctx.fillStyle=sg1;ctx.fillRect(0,0,W,H);
    var sg2=ctx.createRadialGradient(sunX,sunY,0,sunX,sunY,sunR);sg2.addColorStop(0,'#fff8e8');sg2.addColorStop(0.35,theme.accent+'cc');sg2.addColorStop(0.7,theme.accent+'44');sg2.addColorStop(1,'transparent');ctx.fillStyle=sg2;ctx.fillRect(0,0,W,H);
    var hg=ctx.createLinearGradient(0,sunY-12,0,sunY+55);hg.addColorStop(0,'transparent');hg.addColorStop(0.5,theme.accent+_ucHex(Math.round(0.14*255)));hg.addColorStop(1,'transparent');ctx.fillStyle=hg;ctx.fillRect(0,sunY-12,W,67);
    for(var j=0;j<_ucSceneParticles.length;j++){var p=_ucSceneParticles[j],py=(p.y+t*p.speed*H*0.18)%H,wobble=Math.sin(p.phase+t*2.5)*9,rot=p.phase+t*p.speed*4;ctx.save();ctx.globalAlpha=p.alpha*0.65;ctx.fillStyle=theme.particle;ctx.translate(p.x+wobble,py);ctx.rotate(rot);ctx.fillRect(-p.r,-p.r*0.5,p.r*2,p.r);ctx.restore();}
    _ucDrawTreeline(ctx,W,H,theme,t);
  },

  mystical: function(canvas, theme, t, dt) {
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    var ST = _ucGetState('mystical', function() {
      var motes=[];for(var i=0;i<60;i++) motes.push({angle:Math.random()*Math.PI*2,orbR:28+Math.random()*140,speed:(Math.random()<0.5?1:-1)*(0.12+Math.random()*0.42),size:0.7+Math.random()*2.0,alpha:0.05+Math.random()*0.28,phase:Math.random()*Math.PI*2,col:Math.random()>0.55?'accent':'particle'});
      return {et:0,motes};
    });
    ST.et+=dt;var et=ST.et;var cx=W/2,cy=H*0.44;
    ctx.clearRect(0,0,W,H);
    var bg=ctx.createRadialGradient(cx,cy*0.9,0,cx,cy,H*0.92);bg.addColorStop(0,theme.accent+'1a');bg.addColorStop(0.35,theme.bg);bg.addColorStop(1,'#000');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    for(var ring=0;ring<5;ring++){var rr=48+ring*40,rpulse=0.5+0.5*Math.sin(et*1.1+ring*0.65),ral=(0.07+rpulse*0.08)*(1-ring*0.14);ctx.save();ctx.globalAlpha=ral;ctx.strokeStyle=ring%2===0?theme.accent:theme.particle;ctx.lineWidth=ring===0?1.4:0.7;ctx.setLineDash(ring===0?[]:[4+ring,5+ring*2]);ctx.lineDashOffset=et*24*(ring%2===0?-1:1);ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);ctx.restore();}
    var pts=[];for(var i=0;i<5;i++){var ang=i*(Math.PI*2/5)-Math.PI/2+et*0.18;pts.push({x:cx+Math.cos(ang)*76,y:cy+Math.sin(ang)*76});}
    [[0,2],[2,4],[4,1],[1,3],[3,0]].forEach(function(pair,idx){var p1=pts[pair[0]],p2=pts[pair[1]],lf=(et*1.4+idx*0.2)%1,pal=Math.sin(lf*Math.PI)*0.32;ctx.save();ctx.globalAlpha=pal;ctx.strokeStyle=theme.particle;ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);ctx.stroke();var sx=p1.x+(p2.x-p1.x)*lf,sy=p1.y+(p2.y-p1.y)*lf;ctx.globalAlpha=Math.min(1,pal*3);ctx.fillStyle=theme.particle;ctx.beginPath();ctx.arc(sx,sy,2.8,0,Math.PI*2);ctx.fill();ctx.restore();});
    for(var mi=0;mi<ST.motes.length;mi++){var m=ST.motes[mi];m.angle+=m.speed*dt;var mx3=cx+Math.cos(m.angle)*m.orbR,my3=cy+Math.sin(m.angle)*m.orbR*0.54,ma=m.alpha*(0.3+0.7*Math.abs(Math.sin(et*2.2+m.phase)));ctx.save();ctx.globalAlpha=ma;ctx.fillStyle=m.col==='accent'?theme.accent:theme.particle;ctx.beginPath();ctx.arc(mx3,my3,m.size,0,Math.PI*2);ctx.fill();ctx.restore();}
    var cpulse=0.10+0.05*Math.sin(et*Math.PI*1.6);var cg3=ctx.createRadialGradient(cx,cy,0,cx,cy,55);cg3.addColorStop(0,theme.accent+_ucHex(Math.round(cpulse*255)));cg3.addColorStop(0.5,theme.accent+'0c');cg3.addColorStop(1,'transparent');ctx.fillStyle=cg3;ctx.fillRect(0,0,W,H);
  },
};

function _ucDrawMotes(ctx,W,H,theme,t,dt,mode,cx,cy){for(var j=0;j<_ucSceneParticles.length;j++){var p=_ucSceneParticles[j],px,py,alpha;if(mode==='up'){py=((p.y-t*p.speed*H*0.12)%H+H)%H;px=p.x+Math.sin(p.phase+t*1.4)*5;alpha=p.alpha*(0.12+Math.sin(p.phase+t*2.5)*0.08);}else{var angle=p.phase+t*p.speed*0.8,rad=28+p.alpha*130;px=(cx||W/2)+Math.cos(angle)*rad;py=(cy||H/2)+Math.sin(angle)*rad;alpha=0.06+Math.sin(p.phase+t*3)*0.04;}ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle=theme.particle;ctx.beginPath();ctx.arc(px,py,p.r,0,Math.PI*2);ctx.fill();ctx.restore();}}
function _ucDrawTreeline(ctx,W,H,theme,t){var hy=H*0.7;ctx.save();ctx.globalAlpha=0.45+t*0.12;ctx.fillStyle='#000';ctx.beginPath();ctx.moveTo(0,H);for(var x=0;x<=W;x+=5){var h1=Math.sin(x*0.025+1.2)*22+Math.sin(x*0.055+0.4)*12;ctx.lineTo(x,hy+h1);}ctx.lineTo(W,H);ctx.closePath();ctx.fill();ctx.restore();}
function _ucDrawCaustics(ctx,W,H,theme,t){ctx.save();ctx.globalAlpha=0.025+t*0.015;ctx.strokeStyle=theme.accent;ctx.lineWidth=0.5;for(var i=0;i<14;i++){var x1=(Math.sin(i*2.4+t*0.8)*0.5+0.5)*W,y1=(Math.cos(i*1.7+t*0.6)*0.5+0.5)*H,x2=(Math.sin(i*3.1+t*0.5+1)*0.5+0.5)*W,y2=(Math.cos(i*2.2+t*0.7+2)*0.5+0.5)*H;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}ctx.restore();}

var _ucRaf=null,_ucRafRunning=false,_ucRafStart=null,_ucRafScene=null,_ucRafTheme=null,_ucRafLastTime=null,_ucTotalDur=5000;

function _ucStartCanvas(scene,theme,durationMs){
  var prevScene=_ucRafScene;_ucStopCanvas();_ucRafTheme=theme;_ucTotalDur=durationMs||5000;_ucRafRunning=true;_ucRafStart=null;_ucRafLastTime=null;
  var canvas=document.getElementById('uc-story-canvas');if(!canvas){_ucRafScene=scene;return;}
  if(scene!==prevScene){_ucRafScene=scene;_ucResetScene(scene);var dpr=window.devicePixelRatio||1,rect=canvas.getBoundingClientRect();if(rect.width>0&&rect.height>0){canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;var ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);}else{canvas.width=390;canvas.height=844;}}else{_ucRafScene=scene;}
  (function loop(ts){if(!_ucRafRunning) return;if(!_ucRafStart){_ucRafStart=ts;_ucRafLastTime=ts;}var elapsed=ts-_ucRafStart,dt=Math.min((ts-_ucRafLastTime)/1000,0.05);_ucRafLastTime=ts;var progress=Math.min(elapsed/_ucTotalDur,1);var c=document.getElementById('uc-story-canvas');if(c){var fn=UC_SCENES[_ucRafScene];if(fn) fn(c,_ucRafTheme,progress,dt);}var fill=document.querySelector('.uc-progress-fill');if(fill) fill.style.width=(progress*100)+'%';_ucRaf=requestAnimationFrame(loop);})(performance.now());
}

function _ucStopCanvas(){_ucRafRunning=false;if(_ucRaf){cancelAnimationFrame(_ucRaf);_ucRaf=null;}var canvas=document.getElementById('uc-story-canvas');if(canvas){var ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);}}

function _ucEnsureDOM(){
  if(document.getElementById('uc-root')) return;
  var root=document.createElement('div');root.id='uc-root';
  root.innerHTML=['<div id="uc-story">','<canvas id="uc-story-canvas"></canvas>','<div class="uc-grain-overlay"></div>','<div class="uc-vignette"></div>','<div class="uc-scanline-h"></div>','<div class="uc-letterbox-top"></div>','<div class="uc-letterbox-bot"></div>','<div class="uc-chapter-label" id="uc-chapter-label">PATH UNLOCKED</div>','<div class="uc-progress-track">','<div class="uc-progress-fill" id="uc-progress-fill"></div>','</div>','<div id="uc-story-text">','<div class="uc-beat-label" id="uc-beat-label"></div>','<div class="uc-story-title" id="uc-story-title"></div>','<div class="uc-story-divider" id="uc-story-divider"></div>','<div class="uc-story-line" id="uc-story-line"></div>','</div>','<div class="uc-story-dots" id="uc-story-dots"></div>','<div class="uc-tap-hint">TAP TO CONTINUE</div>','<div class="uc-story-skip" id="uc-story-skip">SKIP</div>','<div class="uc-cat-reveal-name" id="uc-cat-reveal-name"></div>','</div>','<div id="uc-panel">','<div class="uc-panel-glow"></div>','<div class="uc-panel-nav"><div class="uc-panel-nav-title">PATH UNLOCKED</div></div>','<div class="uc-path-row" id="uc-path-row"></div>','<div class="uc-track" id="uc-track"></div>','</div>'].join('');
  var app=document.getElementById('app')||document.body;app.appendChild(root);
}

var _ucBeatTimer=null,_ucRevealTimer=null,_BEAT_DUR=5000,_REVEAL_OFFSET=2400;

function _ucShowBeat(storyEl,storyData,beatIdx){
  var beat=storyData.beats[beatIdx];
  document.querySelectorAll('#uc-story-dots .uc-dot').forEach(function(d,i){d.classList.toggle('active',i===beatIdx);});
  var labelEl=document.getElementById('uc-beat-label'),titleEl=document.getElementById('uc-story-title'),divEl=document.getElementById('uc-story-divider'),lineEl=document.getElementById('uc-story-line');
  if(labelEl) labelEl.classList.remove('visible');if(titleEl) titleEl.classList.remove('visible');if(divEl) divEl.classList.remove('visible');if(lineEl) lineEl.classList.remove('visible');
  setTimeout(function(){if(labelEl){labelEl.textContent=beat.label;labelEl.classList.add('visible');}if(titleEl){titleEl.textContent=beat.title;titleEl.classList.add('visible');}if(divEl){divEl.classList.add('visible');}if(lineEl){lineEl.innerHTML=beat.line.replace(/\n/g,'<br>');lineEl.classList.add('visible');}},280);
  _ucStartCanvas(beat.scene,storyData.theme,_BEAT_DUR);
}

function _ucRunStory(storyData,prevCatKey,newCatKey){
  var storyEl=document.getElementById('uc-story'),dotsWrap=document.getElementById('uc-story-dots');if(!storyEl) return;
  if(dotsWrap){dotsWrap.innerHTML='';storyData.beats.forEach(function(_,i){var d=document.createElement('div');d.className='uc-dot'+(i===0?' active':'');dotsWrap.appendChild(d);});}
  var track=document.querySelector('.uc-progress-track');if(track){track.querySelectorAll('.uc-progress-seg').forEach(function(el){el.remove();});for(var s=1;s<storyData.beats.length;s++){var seg=document.createElement('div');seg.className='uc-progress-seg';seg.style.left=((s/storyData.beats.length)*100)+'%';track.appendChild(seg);}}
  storyEl.style.background=storyData.theme.bg;storyEl.classList.add('uc-story-visible');requestAnimationFrame(function(){requestAnimationFrame(function(){storyEl.classList.add('uc-story-in');});});
  var revealEl=document.getElementById('uc-cat-reveal-name');if(revealEl){var cat=(typeof CATEGORIES!=='undefined'&&CATEGORIES[newCatKey])?CATEGORIES[newCatKey]:{name:newCatKey};revealEl.textContent=cat.name.toUpperCase();revealEl.classList.remove('show','hide');}
  var beatIdx=0;_ucShowBeat(storyEl,storyData,0);
  function advance(){if(_ucRevealTimer){clearTimeout(_ucRevealTimer);_ucRevealTimer=null;}if(revealEl){revealEl.classList.remove('show');revealEl.classList.add('hide');}beatIdx++;if(beatIdx<storyData.beats.length){_ucShowBeat(storyEl,storyData,beatIdx);if(beatIdx===storyData.beats.length-1){_ucRevealTimer=setTimeout(function(){if(revealEl){revealEl.classList.remove('hide');revealEl.classList.add('show');}},_REVEAL_OFFSET);}_ucBeatTimer=setTimeout(advance,_BEAT_DUR);}else{_ucToPanel(prevCatKey,newCatKey);}}
  _ucBeatTimer=setTimeout(advance,_BEAT_DUR);
  var skipBtn=document.getElementById('uc-story-skip');if(skipBtn){var newSkip=skipBtn.cloneNode(true);skipBtn.parentNode.replaceChild(newSkip,skipBtn);newSkip.addEventListener('click',function(e){e.stopPropagation();_ucClearTimers();if(revealEl){revealEl.classList.remove('show','hide');}_ucToPanel(prevCatKey,newCatKey);});}
  function _tapHandler(e){if(e.target.id==='uc-story-skip') return;if(_ucBeatTimer){clearTimeout(_ucBeatTimer);_ucBeatTimer=null;}if(_ucRevealTimer){clearTimeout(_ucRevealTimer);_ucRevealTimer=null;}if(revealEl){revealEl.classList.remove('show');revealEl.classList.add('hide');}advance();if(beatIdx>=storyData.beats.length){storyEl.removeEventListener('click',_tapHandler);}}
  storyEl.addEventListener('click',_tapHandler);
}

function _ucClearTimers(){if(_ucBeatTimer){clearTimeout(_ucBeatTimer);_ucBeatTimer=null;}if(_ucRevealTimer){clearTimeout(_ucRevealTimer);_ucRevealTimer=null;}}

function _ucBuildPathRow(prevCatKey,newCatKey){
  var row=document.getElementById('uc-path-row');if(!row) return;row.innerHTML='';
  var ORDER=['animals','nature','cosmos','zen','ocean','seasons','mystical'],prevIdx=ORDER.indexOf(prevCatKey),newIdx=ORDER.indexOf(newCatKey);
  ORDER.forEach(function(key,i){if(i>0){var conn=document.createElement('div'),cls='uc-path-connector';if(i-1<prevIdx) cls+=' done';else if(i-1===prevIdx) cls+=' active';conn.className=cls;row.appendChild(conn);}var node=document.createElement('div');node.className='uc-path-node';var dot=document.createElement('div');dot.className='uc-path-node-dot '+(i<prevIdx?'done':i===prevIdx?'done':i===newIdx?'new':'locked');var lbl=document.createElement('div');lbl.className='uc-path-node-lbl';var cat=(typeof CATEGORIES!=='undefined'&&CATEGORIES[key])?CATEGORIES[key]:{name:key};lbl.textContent=cat.name.slice(0,5);node.appendChild(dot);node.appendChild(lbl);row.appendChild(node);});
}

function _ucBuildPanel(prevCatKey,newCatKey){
  var track=document.getElementById('uc-track');if(!track) return;track.innerHTML='';
  var prevCat=(typeof CATEGORIES!=='undefined'&&CATEGORIES[prevCatKey])?CATEGORIES[prevCatKey]:{name:prevCatKey,icon:'fas fa-star'};
  var newCat=(typeof CATEGORIES!=='undefined'&&CATEGORIES[newCatKey])?CATEGORIES[newCatKey]:{name:newCatKey,icon:'fas fa-star'};
  var story=UC_STORIES[newCatKey]||{};var wordCount=(typeof CATEGORIES!=='undefined'&&CATEGORIES[newCatKey])?CATEGORIES[newCatKey].words.length:'—';
  var outCard=document.createElement('div');outCard.className='uc-cat-card uc-card-out';outCard.innerHTML='<div class="uc-card-icon-wrap" style="opacity:0.3;border-color:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;"><i class="'+prevCat.icon+'" style="color:rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:38px;line-height:1;"></i></div><div class="uc-card-name" style="opacity:0.22;color:rgba(255,255,255,0.3);animation:none;">'+prevCat.name+'</div><div class="uc-card-desc" style="opacity:0.15;animation:none;">Path Complete</div>';
  var inCard=document.createElement('div');inCard.className='uc-cat-card uc-card-in';inCard.innerHTML='<div class="uc-card-new-badge"><i class="fas fa-unlock" style="font-size:8px"></i> NEW PATH</div><div class="uc-card-icon-wrap"><i class="'+newCat.icon+'" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:38px;line-height:1;pointer-events:none;animation:ucCatIconReveal 0.4s ease 1.65s both;"></i><div class="uc-lock-overlay" style="z-index:2;"><i class="fas fa-lock"></i></div><div class="uc-unlock-burst"></div><div class="uc-unlock-burst uc-unlock-burst2"></div><div class="uc-unlock-burst uc-unlock-burst3"></div></div><div class="uc-card-name">'+newCat.name+'</div><div class="uc-card-desc">'+(story.title||'A new trail opens before you.')+'</div><div class="uc-card-words-row"><i class="fas fa-book-open" style="font-size:11px"></i><span>'+wordCount+' words to discover</span></div><button class="uc-play-btn" id="uc-play-btn"><i class="fas fa-play" style="font-size:11px"></i> BEGIN THIS PATH</button>';
  track.appendChild(outCard);track.appendChild(inCard);
  setTimeout(function(){var btn=document.getElementById('uc-play-btn');if(btn) btn.addEventListener('click',function(){_ucLaunchGame(newCatKey);});},2200);
}

function _ucToPanel(prevCatKey,newCatKey){
  _ucStopCanvas();var storyEl=document.getElementById('uc-story'),panelEl=document.getElementById('uc-panel');if(!storyEl||!panelEl) return;
  storyEl.classList.remove('uc-story-in');storyEl.classList.add('uc-story-out');
  setTimeout(function(){storyEl.classList.remove('uc-story-visible','uc-story-out');storyEl.style.display='none';_ucBuildPathRow(prevCatKey,newCatKey);_ucBuildPanel(prevCatKey,newCatKey);panelEl.classList.remove('uc-panel-visible');panelEl.style.display='flex';panelEl.style.opacity='1';void panelEl.offsetHeight;panelEl.classList.add('uc-panel-visible');if(typeof playSound==='function') playSound('unlock');},580);
}

function _ucLaunchGame(catKey){
  if(typeof playSound==='function') playSound('click');var root=document.getElementById('uc-root');
  if(root){root.style.transition='opacity 0.42s ease';root.style.opacity='0';setTimeout(function(){root.classList.remove('uc-active');root.style.opacity='';root.style.transition='';var storyEl=document.getElementById('uc-story'),panelEl=document.getElementById('uc-panel');if(storyEl){storyEl.classList.remove('uc-story-visible','uc-story-in','uc-story-out');storyEl.style.display='';}if(panelEl){panelEl.classList.remove('uc-panel-visible');panelEl.style.display='';panelEl.style.opacity='';}},440);}
  if(typeof S!=='undefined') S.lastCat=catKey;setTimeout(function(){if(typeof startGame==='function') startGame(catKey);},460);
}

function ucOnCategoryComplete(catKey){}

function _ucAlreadyShown(key) {
  return (typeof S !== 'undefined' && S.shownUnlocks && S.shownUnlocks.includes(key));
}
function _ucMarkShown(key) {
  if (typeof S !== 'undefined') {
    if (!S.shownUnlocks) S.shownUnlocks = [];
    if (!S.shownUnlocks.includes(key)) {
      S.shownUnlocks.push(key);
      if (typeof save === 'function') save();
    }
  }
}

function ucCheckPendingUnlock(prevCatKey) {
  var ORDER = ['animals','nature','cosmos','zen','ocean','seasons','mystical'];
  if (typeof S === 'undefined' || !S.unlockedCats) return;
  for (var i = 1; i < ORDER.length; i++) {
    var key = ORDER[i];
    var prevKey = ORDER[i - 1];
    if (prevKey !== prevCatKey) continue;
    if (!S.unlockedCats.includes(key)) continue;
    if (_ucAlreadyShown(key)) continue;
    if (typeof CATEGORIES === 'undefined') continue;
    var prevCat = CATEGORIES[prevKey];
    if (!prevCat) continue;
    var used = S.usedWords[prevKey] || [];
    var allFound = prevCat.words.filter(function(w){ return !w.isBonus; }).every(function(w) { return used.includes(w.w); });
    if (!allFound) continue;
    _ucPendingNewCat = key;
    _ucPendingPrevCat = prevCatKey;
    _ucMarkShown(key);
    break;
  }
}

function showCategoryUnlockCinematic(prevCatKey,newCatKey){
  _ucEnsureDOM();_ucStopCanvas();_ucClearTimers();
  var root=document.getElementById('uc-root'),storyEl=document.getElementById('uc-story'),panelEl=document.getElementById('uc-panel');if(!root) return;
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});root.classList.add('uc-active');
  if(storyEl){storyEl.classList.remove('uc-story-visible','uc-story-in','uc-story-out');storyEl.style.display='';}
  if(panelEl){panelEl.classList.remove('uc-panel-visible');panelEl.style.display='';panelEl.style.opacity='';}
  if(typeof fadeMusicTo==='function') fadeMusicTo(0.06,1100);
  var storyData=UC_STORIES[newCatKey]||UC_STORIES.animals;_ucRunStory(storyData,prevCatKey,newCatKey);
}

// ═══════════════════════════════════════════════════════════════════
// GRAND FINALE
// ═══════════════════════════════════════════════════════════════════

var UC_FINALE_BEATS = [
  { label: 'The Journey',  title: 'Every Word',        line: 'You have walked seven worlds.\nEvery name. Every sound. Every trail.', scene: 'grand_all'     },
  { label: 'The Mastery',  title: 'The Still Point',   line: 'At the centre of all paths\nthere is only silence — and knowing.',    scene: 'grand_mandala' },
  { label: 'The Return',   title: 'The Eternal Trail', line: 'The trail does not end.\nIt breathes, and begins again.',              scene: 'grand_cosmos'  },
  { label: 'Free',         title: 'Choose Freely',     line: 'All paths are open.\nAll words await you — once more.',               scene: 'grand_dawn'    },
];

var UC_FINALE_THEME = {
  bg: '#04040e', accent: '#c9a84c', accentRGB: '201,168,76',
  accent2: '#5fa882', accent2RGB: '95,168,130',
  accent3: '#818cf8', accent3RGB: '129,140,248',
  particle: '#ffd080', highlight: '#fff5d0',
};

var BEAT_DURATION_FINALE = 5000;

UC_SCENES.grand_all = (function() {
  var W=0,H=0,orbs=[],sparks=[],warpLines=[],dustField=[];
  var CAT_COLORS=['95,168,130','129,140,248','106,173,204','45,212,191','240,160,64','192,132,252','201,168,76'];
  var CAT_NAMES=['Animals','Nature','Cosmos','Zen','Ocean','Seasons','Mystical'];
  return {
    init:function(canvas,theme){
      W=canvas.width;H=canvas.height;orbs=[];sparks=[];warpLines=[];dustField=[];
      for(var i=0;i<7;i++){
        orbs.push({
          angle:(i/7)*Math.PI*2,speed:0.16+(i%3)*0.04,r:Math.min(W,H)*(0.23+Math.sin(i*1.1)*0.05),
          size:Math.min(W,H)*(0.024+i*0.003),color:CAT_COLORS[i],name:CAT_NAMES[i],
          trail:[],pulse:Math.random()*Math.PI*2,ringR:Math.min(W,H)*(0.032+i*0.002),
        });
      }
      for(var j=0;j<180;j++){sparks.push({angle:Math.random()*Math.PI*2,r:Math.random()*Math.min(W,H)*0.42,speed:(Math.random()-0.5)*0.35,size:0.5+Math.random()*1.8,alpha:0.04+Math.random()*0.35,phase:Math.random()*Math.PI*2,color:CAT_COLORS[Math.floor(Math.random()*7)]});}
      for(var k=0;k<500;k++){dustField.push({x:Math.random()*W,y:Math.random()*H,r:0.2+Math.random()*0.8,alpha:0.02+Math.random()*0.18,phase:Math.random()*Math.PI*2,speed:0.1+Math.random()*0.9,col:CAT_COLORS[Math.floor(Math.random()*7)]});}
      for(var l=0;l<28;l++){warpLines.push({angle:l/28*Math.PI*2,speed:0.025+Math.random()*0.05,len:Math.random()*0.14+0.04,col:CAT_COLORS[l%7]});}
    },
    tick:function(canvas,theme,t,dt){
      var ctx=canvas.getContext('2d');W=canvas.width;H=canvas.height;ctx.clearRect(0,0,W,H);var cx=W/2,cy=H/2,elapsed=t*5;
      var bg1=ctx.createRadialGradient(cx*0.8,cy*0.7,0,cx,cy,Math.max(W,H)*0.9);bg1.addColorStop(0,'rgba(28,10,52,1)');bg1.addColorStop(0.4,'rgba(8,4,22,1)');bg1.addColorStop(0.8,'rgba(2,2,12,1)');bg1.addColorStop(1,'rgba(0,0,4,1)');ctx.fillStyle=bg1;ctx.fillRect(0,0,W,H);
      var nebWash=ctx.createLinearGradient(0,0,W,H);nebWash.addColorStop(0,'rgba(40,8,80,0.18)');nebWash.addColorStop(0.3,'rgba(8,20,60,0.12)');nebWash.addColorStop(0.6,'rgba(4,40,30,0.10)');nebWash.addColorStop(1,'rgba(60,20,10,0.08)');ctx.fillStyle=nebWash;ctx.fillRect(0,0,W,H);
      ctx.save();for(var di=0;di<dustField.length;di++){var d=dustField[di],da=d.alpha*(0.4+0.6*Math.abs(Math.sin(elapsed*d.speed+d.phase)));ctx.globalAlpha=da;ctx.fillStyle='rgba('+d.col+',1)';ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill();}ctx.restore();
      for(var ni=0;ni<7;ni++){var nc_ang=(ni/7)*Math.PI*2+elapsed*0.04,nc_r=Math.min(W,H)*(0.28+Math.sin(ni*0.9+elapsed*0.2)*0.06),nc_x=cx+Math.cos(nc_ang)*nc_r*0.55,nc_y=cy+Math.sin(nc_ang)*nc_r*0.28,nc_size=Math.min(W,H)*(0.14+Math.sin(ni*1.3)*0.04),nb_pulse=0.5+0.5*Math.sin(elapsed*0.6+ni*0.8);ctx.save();ctx.globalAlpha=(0.028+ni*0.002)*nb_pulse;var nbg=ctx.createRadialGradient(nc_x,nc_y,0,nc_x,nc_y,nc_size);nbg.addColorStop(0,'rgba('+CAT_COLORS[ni]+',1)');nbg.addColorStop(0.35,'rgba('+CAT_COLORS[ni]+',0.4)');nbg.addColorStop(0.7,'rgba('+CAT_COLORS[ni]+',0.08)');nbg.addColorStop(1,'transparent');ctx.fillStyle=nbg;ctx.beginPath();ctx.arc(nc_x,nc_y,nc_size,0,Math.PI*2);ctx.fill();ctx.restore();}
      ctx.save();for(var wi=0;wi<warpLines.length;wi++){var wl=warpLines[wi];wl.angle+=wl.speed*dt;var wr1=Math.min(W,H)*(0.06+t*0.18),wr2=Math.min(W,H)*(0.06+t*0.18+wl.len*(0.5+t*0.5));ctx.globalAlpha=(0.04+t*0.06)*(0.5+0.5*Math.sin(elapsed*2+wi));ctx.strokeStyle='rgba('+wl.col+',0.8)';ctx.lineWidth=0.6+t*0.4;ctx.beginPath();ctx.moveTo(cx+Math.cos(wl.angle)*wr1,cy+Math.sin(wl.angle)*wr1);ctx.lineTo(cx+Math.cos(wl.angle)*wr2,cy+Math.sin(wl.angle)*wr2);ctx.stroke();}ctx.restore();
      for(var ri=0;ri<8;ri++){var rr=Math.min(W,H)*(0.04+ri*0.052),rp=0.5+0.5*Math.sin(elapsed*1.1+ri*0.72),ral=(0.04+ri*0.006)*rp;ctx.save();ctx.globalAlpha=ral;ctx.strokeStyle=ri%3===0?'rgba(201,168,76,1)':(ri%3===1?'rgba(129,140,248,0.8)':'rgba(95,168,130,0.6)');ctx.lineWidth=ri===0?1.5:(ri<3?0.8:0.5);ctx.setLineDash([3+ri,6+ri*1.5]);ctx.lineDashOffset=-elapsed*(22+ri*7)*(ri%2===0?1:-1);ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);ctx.restore();}
      ctx.save();for(var ci2=0;ci2<orbs.length;ci2++){var oa=orbs[ci2],ob=orbs[(ci2+2)%orbs.length],pxa=cx+Math.cos(oa.angle)*oa.r*1.0,pya=cy+Math.sin(oa.angle)*oa.r*0.5,pxb=cx+Math.cos(ob.angle)*ob.r*1.0,pyb=cy+Math.sin(ob.angle)*ob.r*0.5,la=0.03+0.03*Math.sin(elapsed*0.7+ci2*0.6),cg2=ctx.createLinearGradient(pxa,pya,pxb,pyb);cg2.addColorStop(0,'rgba('+oa.color+','+la+')');cg2.addColorStop(1,'rgba('+ob.color+','+la+')');ctx.globalAlpha=1;ctx.strokeStyle=cg2;ctx.lineWidth=0.5;ctx.beginPath();ctx.moveTo(pxa,pya);ctx.lineTo(pxb,pyb);ctx.stroke();}ctx.restore();
      sparks.forEach(function(sp){sp.angle+=sp.speed*dt;});sparks.forEach(function(sp){var sx=cx+Math.cos(sp.angle)*sp.r,sy=cy+Math.sin(sp.angle)*sp.r*0.55,sa=sp.alpha*(0.4+0.6*Math.abs(Math.sin(elapsed*2.8+sp.phase)));ctx.save();ctx.globalAlpha=sa;var spg=ctx.createRadialGradient(sx,sy,0,sx,sy,sp.size*2.5);spg.addColorStop(0,'rgba('+sp.color+',0.8)');spg.addColorStop(1,'transparent');ctx.fillStyle=spg;ctx.beginPath();ctx.arc(sx,sy,sp.size*2.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba('+sp.color+',1)';ctx.beginPath();ctx.arc(sx,sy,sp.size*0.7,0,Math.PI*2);ctx.fill();ctx.restore();});
      orbs.forEach(function(orb,idx){orb.angle+=orb.speed*dt;orb.pulse+=dt*2.2;var pf=0.88+0.12*Math.sin(orb.pulse),px=cx+Math.cos(orb.angle)*orb.r,py=cy+Math.sin(orb.angle)*orb.r*0.5;orb.trail.push({x:px,y:py});if(orb.trail.length>32) orb.trail.shift();ctx.save();if(orb.trail.length>3){for(var ti=1;ti<orb.trail.length;ti++){var trat=ti/orb.trail.length;ctx.globalAlpha=trat*0.55*Math.sin(trat*Math.PI*0.5);ctx.strokeStyle='rgba('+orb.color+',1)';ctx.lineWidth=orb.size*0.9*trat;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(orb.trail[Math.max(0,ti-1)].x,orb.trail[Math.max(0,ti-1)].y);ctx.lineTo(orb.trail[ti].x,orb.trail[ti].y);ctx.stroke();}}
      ctx.globalAlpha=1;var haloSizes=[orb.size*9,orb.size*5,orb.size*2.5],haloOps=[0.12,0.28,0.55];haloSizes.forEach(function(hs,hi){var hg=ctx.createRadialGradient(px,py,0,px,py,hs*pf);hg.addColorStop(0,'rgba('+orb.color+','+(haloOps[hi]*pf)+')');hg.addColorStop(0.5,'rgba('+orb.color+','+(haloOps[hi]*0.3*pf)+')');hg.addColorStop(1,'transparent');ctx.fillStyle=hg;ctx.beginPath();ctx.arc(px,py,hs*pf,0,Math.PI*2);ctx.fill();});
      ctx.save();ctx.translate(px,py);ctx.scale(1,0.22);ctx.globalAlpha=0.35*pf;ctx.strokeStyle='rgba('+orb.color+',1)';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(0,0,orb.size*1.8,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=0.12*pf;ctx.lineWidth=4;ctx.beginPath();ctx.arc(0,0,orb.size*1.8,0,Math.PI*2);ctx.stroke();ctx.restore();
      var sphereG=ctx.createRadialGradient(px-orb.size*0.3,py-orb.size*0.3,0,px,py,orb.size*pf);sphereG.addColorStop(0,'rgba(255,255,255,0.7)');sphereG.addColorStop(0.2,'rgba('+orb.color+',0.95)');sphereG.addColorStop(0.7,'rgba('+orb.color+',0.6)');sphereG.addColorStop(1,'rgba('+orb.color+',0.15)');ctx.globalAlpha=0.95;ctx.fillStyle=sphereG;ctx.beginPath();ctx.arc(px,py,orb.size*pf,0,Math.PI*2);ctx.fill();ctx.globalAlpha=0.75;ctx.fillStyle='rgba(255,255,255,0.9)';ctx.beginPath();ctx.arc(px-orb.size*0.28,py-orb.size*0.28,orb.size*0.25,0,Math.PI*2);ctx.fill();ctx.restore();});
      ctx.save();var novaPulse=0.22+0.12*Math.sin(elapsed*3.8);for(var ni2=0;ni2<4;ni2++){var nr=Math.min(W,H)*(0.025+ni2*0.02)+Math.sin(elapsed*2.2+ni2*0.8)*Math.min(W,H)*0.008;ctx.globalAlpha=(0.18-ni2*0.04)*(0.5+0.5*Math.sin(elapsed*2.5+ni2));ctx.strokeStyle=ni2%2===0?'rgba(255,240,180,1)':'rgba(201,168,76,1)';ctx.lineWidth=2-ni2*0.3;ctx.beginPath();ctx.arc(cx,cy,nr,0,Math.PI*2);ctx.stroke();}
      var novaG=ctx.createRadialGradient(cx,cy,0,cx,cy,Math.min(W,H)*0.12);novaG.addColorStop(0,'rgba(255,252,220,'+novaPulse+')');novaG.addColorStop(0.18,'rgba(255,220,100,'+(novaPulse*0.6)+')');novaG.addColorStop(0.45,'rgba(201,168,76,0.08)');novaG.addColorStop(1,'transparent');ctx.globalAlpha=1;ctx.fillStyle=novaG;ctx.fillRect(0,0,W,H);
      ctx.globalAlpha=0.55+0.2*Math.sin(elapsed*4.5);ctx.strokeStyle='rgba(255,248,210,1)';ctx.lineWidth=0.8;var fl2=Math.min(W,H)*0.07;for(var sp2=0;sp2<8;sp2++){var sang=sp2*Math.PI/4+elapsed*0.3;ctx.globalAlpha=(0.4+0.15*Math.sin(elapsed*3+sp2))*(1-sp2*0.03);ctx.lineWidth=1.2-sp2*0.08;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(sang)*fl2*(1-sp2%2*0.4),cy+Math.sin(sang)*fl2*(1-sp2%2*0.4));ctx.stroke();}
      ctx.globalAlpha=1;var coreDot=ctx.createRadialGradient(cx,cy,0,cx,cy,6);coreDot.addColorStop(0,'#ffffff');coreDot.addColorStop(0.4,'rgba(255,248,200,0.9)');coreDot.addColorStop(1,'transparent');ctx.fillStyle=coreDot;ctx.beginPath();ctx.arc(cx,cy,6+Math.sin(elapsed*5)*2,0,Math.PI*2);ctx.fill();ctx.restore();
    },
    destroy:function(){orbs=[];sparks=[];warpLines=[];dustField=[];}
  };
})();

UC_SCENES.grand_mandala = (function(){
  var W=0,H=0,motes=[],petals=[],threads=[];
  return {
    init:function(canvas,theme){
      W=canvas.width;H=canvas.height;motes=[];petals=[];threads=[];
      for(var i=0;i<80;i++){motes.push({angle:Math.random()*Math.PI*2,r:Math.random()*Math.min(W,H)*0.4,speed:(Math.random()-0.5)*0.28,size:0.8+Math.random()*2.5,op:0.08+Math.random()*0.40,phase:Math.random()*Math.PI*2,col:['201,168,76','255,210,110','180,150,60','255,240,160','220,180,80'][Math.floor(Math.random()*5)],layer:Math.floor(Math.random()*3)});}
      var petalCount=32;for(var j=0;j<petalCount;j++){petals.push({angle:j/petalCount*Math.PI*2,r:Math.min(W,H)*0.14,size:Math.min(W,H)*0.028,col:j%2===0?'rgba(255,200,80,0.25)':'rgba(201,168,76,0.18)',speed:0.08+Math.random()*0.04,phase:j*0.2});}
      for(var k=0;k<12;k++){threads.push({a1:Math.random()*Math.PI*2,a2:Math.random()*Math.PI*2,r1:Math.min(W,H)*(0.06+Math.random()*0.18),r2:Math.min(W,H)*(0.06+Math.random()*0.18),speed:0.05+Math.random()*0.08,col:['201,168,76','255,200,80','180,140,40'][Math.floor(Math.random()*3)]});}
    },
    tick:function(canvas,theme,t,dt){
      var ctx=canvas.getContext('2d');W=canvas.width;H=canvas.height;ctx.clearRect(0,0,W,H);var cx=W/2,cy=H/2,elapsed=t*5;
      var bg=ctx.createRadialGradient(cx,cy*0.85,0,cx,cy,Math.max(W,H)*0.85);bg.addColorStop(0,'rgba(48,22,8,0.95)');bg.addColorStop(0.25,'rgba(20,8,4,1)');bg.addColorStop(0.6,'rgba(8,4,2,1)');bg.addColorStop(1,'rgba(0,0,0,1)');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
      var atmG=ctx.createRadialGradient(cx,cy,Math.min(W,H)*0.22,cx,cy,Math.min(W,H)*0.65);atmG.addColorStop(0,'rgba(201,168,76,0.04)');atmG.addColorStop(0.5,'rgba(150,100,20,0.02)');atmG.addColorStop(1,'transparent');ctx.fillStyle=atmG;ctx.fillRect(0,0,W,H);
      threads.forEach(function(th,thi){th.a1+=th.speed*dt*0.7;th.a2-=th.speed*dt*0.5;var tx1=cx+Math.cos(th.a1)*th.r1,ty1=cy+Math.sin(th.a1)*th.r1*0.55,tx2=cx+Math.cos(th.a2)*th.r2,ty2=cy+Math.sin(th.a2)*th.r2*0.55;ctx.save();ctx.globalAlpha=(0.04+0.03*Math.sin(elapsed*0.8+thi*0.6));ctx.strokeStyle='rgba('+th.col+',1)';ctx.lineWidth=0.4;ctx.beginPath();ctx.moveTo(tx1,ty1);ctx.lineTo(tx2,ty2);ctx.stroke();ctx.restore();});
      ctx.save();for(var tri=0;tri<5;tri++){var trSize=Math.min(W,H)*(0.055+tri*0.072),trAlpha=(0.08-tri*0.01)*(0.6+0.4*Math.sin(elapsed*0.9+tri*0.55)),trRot=elapsed*(tri%2===0?0.09:-0.07)+tri*Math.PI/10;ctx.globalAlpha=trAlpha;for(var tDir=0;tDir<2;tDir++){var pts3=[];for(var v=0;v<3;v++){var va=trRot+v/3*Math.PI*2+(tDir===0?-Math.PI/2:Math.PI/6);pts3.push({x:cx+Math.cos(va)*trSize*(tDir===0?1:0.92),y:cy+Math.sin(va)*trSize*(tDir===0?1:0.92)});}var tg=ctx.createLinearGradient(pts3[0].x,pts3[0].y,pts3[2].x,pts3[2].y);tg.addColorStop(0,'rgba(255,220,100,1)');tg.addColorStop(0.5,'rgba(201,168,76,1)');tg.addColorStop(1,'rgba(160,120,40,1)');ctx.strokeStyle=tg;ctx.lineWidth=0.8-tri*0.1;ctx.beginPath();pts3.forEach(function(pt,pi){if(pi===0) ctx.moveTo(pt.x,pt.y); else ctx.lineTo(pt.x,pt.y);});ctx.closePath();ctx.stroke();}}ctx.restore();
      var ringRadii=[0.04,0.075,0.115,0.158,0.205,0.255,0.308,0.365,0.425];ringRadii.forEach(function(rf,ri){var rr=Math.min(W,H)*rf,prog=Math.min(t*(ringRadii.length/(ri+1)*1.4),1),rAlpha=(0.07+ri*0.006)*prog*(0.65+0.35*Math.sin(elapsed*0.55+ri*0.85));ctx.save();ctx.globalAlpha=rAlpha;var ringCols=['rgba(201,168,76,1)','rgba(255,210,100,1)','rgba(180,140,50,1)'];ctx.strokeStyle=ringCols[ri%3];ctx.lineWidth=ri<2?1.2:(ri<5?0.7:0.4);ctx.setLineDash([2+ri*0.5,4+ri*1.8]);ctx.lineDashOffset=-elapsed*(38+ri*9)*(ri%2===0?1:-1);ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);var spokes=4+ri*2;for(var s=0;s<spokes;s++){var sa=s/spokes*Math.PI*2+elapsed*(ri%2===0?0.11:-0.09)+ri*0.15,sr1=rr*(ri===0?0.1:0.87),sr2=rr;ctx.globalAlpha=rAlpha*0.55;ctx.lineWidth=0.3;ctx.setLineDash([]);ctx.beginPath();ctx.moveTo(cx+Math.cos(sa)*sr1,cy+Math.sin(sa)*sr1);ctx.lineTo(cx+Math.cos(sa)*sr2,cy+Math.sin(sa)*sr2);ctx.stroke();if(ri>2&&ri<7){ctx.globalAlpha=rAlpha*1.2;ctx.fillStyle='rgba(255,220,100,1)';ctx.beginPath();ctx.arc(cx+Math.cos(sa)*sr2,cy+Math.sin(sa)*sr2,0.8,0,Math.PI*2);ctx.fill();}}ctx.restore();});
      petals.forEach(function(pet,pi){var pa=pet.angle+elapsed*(pi<16?pet.speed:-pet.speed*0.7),pr=pi<16?Math.min(W,H)*0.14:Math.min(W,H)*0.22,ppx=cx+Math.cos(pa)*pr,ppy=cy+Math.sin(pa)*pr*0.6,pAlpha=(0.18+0.1*Math.sin(elapsed*2.5+pet.phase))*(0.4+t*0.6);ctx.save();ctx.translate(ppx,ppy);ctx.rotate(pa+(pi<16?0:Math.PI));ctx.globalAlpha=pAlpha;var petG=ctx.createLinearGradient(-pet.size*2,0,pet.size*2,0);petG.addColorStop(0,'rgba(255,220,100,0)');petG.addColorStop(0.4,'rgba(255,200,80,0.4)');petG.addColorStop(0.6,'rgba(201,168,76,0.4)');petG.addColorStop(1,'rgba(255,220,100,0)');ctx.fillStyle=petG;ctx.beginPath();ctx.ellipse(0,0,pet.size*2.2,pet.size*0.7,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=pAlpha*0.5;ctx.strokeStyle='rgba(255,210,80,1)';ctx.lineWidth=0.4;ctx.stroke();ctx.restore();});
      motes.forEach(function(m){m.angle+=m.speed*(1+m.layer*0.3)*dt;var mr=m.r*(1+m.layer*0.15),mpx=cx+Math.cos(m.angle)*mr,mpy=cy+Math.sin(m.angle)*mr*0.55,ma=m.op*(0.35+0.65*Math.abs(Math.sin(elapsed*3.2+m.phase)));ctx.save();ctx.globalAlpha=ma;var mg3=ctx.createRadialGradient(mpx,mpy,0,mpx,mpy,m.size*4.5);mg3.addColorStop(0,'rgba('+m.col+',0.7)');mg3.addColorStop(0.4,'rgba('+m.col+',0.2)');mg3.addColorStop(1,'transparent');ctx.fillStyle=mg3;ctx.beginPath();ctx.arc(mpx,mpy,m.size*4.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,245,190,1)';ctx.beginPath();ctx.arc(mpx,mpy,m.size*0.65,0,Math.PI*2);ctx.fill();ctx.restore();});
      var bPulse=0.5+0.5*Math.sin(elapsed*Math.PI*1.8);for(var bl=0;bl<5;bl++){var blR=Math.min(W,H)*(0.012+bl*0.018)*(0.8+0.2*Math.sin(elapsed*3+bl*0.6)),blA=(0.35-bl*0.06)*bPulse;ctx.save();ctx.globalAlpha=blA;var blG=ctx.createRadialGradient(cx,cy,0,cx,cy,blR);blG.addColorStop(0,'rgba(255,252,220,1)');blG.addColorStop(0.4,'rgba(255,220,100,0.6)');blG.addColorStop(0.7,'rgba(201,168,76,0.2)');blG.addColorStop(1,'transparent');ctx.fillStyle=blG;ctx.beginPath();ctx.arc(cx,cy,blR,0,Math.PI*2);ctx.fill();ctx.restore();}
      ctx.save();ctx.globalAlpha=0.45+0.2*Math.sin(elapsed*4.8);ctx.strokeStyle='rgba(255,248,200,1)';ctx.lineWidth=0.6;var starLen=Math.min(W,H)*0.045;for(var sp3=0;sp3<8;sp3++){var sa3=sp3*Math.PI/4+elapsed*0.15,sl=starLen*(sp3%2===0?1:0.6);ctx.globalAlpha=(0.4+0.15*Math.sin(elapsed*4+sp3))*(sp3%2===0?1:0.5);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(sa3)*sl,cy+Math.sin(sa3)*sl);ctx.stroke();}ctx.restore();
    },
    destroy:function(){motes=[];petals=[];threads=[];}
  };
})();

UC_SCENES.grand_cosmos = (function(){
  var W=0,H=0,stars=[],nebClouds=[],debris=[],streamers=[];
  var ALL_COLS=['201,168,76','95,168,130','129,140,248','106,173,204','192,132,252','240,160,64','45,212,191'];
  return {
    init:function(canvas,theme){
      W=canvas.width;H=canvas.height;stars=[];nebClouds=[];debris=[];streamers=[];
      var STAR_RGBS=['255,255,255','255,232,192','192,216,255','255,208,224','208,255,216','255,224,160','200,200,255'];
      for(var i=0;i<400;i++){var tier=i<250?0:(i<340?1:(i<385?2:3)),ci=Math.floor(Math.random()*STAR_RGBS.length);stars.push({x:Math.random()*W,y:Math.random()*H,r:tier===0?0.2+Math.random()*0.5:(tier===1?0.6+Math.random()*1.2:(tier===2?1.4+Math.random()*2.2:2.8+Math.random()*4)),alpha:tier===0?0.06+Math.random()*0.28:(tier===1?0.3+Math.random()*0.6:(tier===2?0.6+Math.random()*0.38:0.75+Math.random()*0.25)),phase:Math.random()*Math.PI*2,speed:0.15+Math.random()*1.8,rgb:STAR_RGBS[ci],tier,giant:tier===3&&Math.random()>0.4});}
      ALL_COLS.forEach(function(c,i){for(var n=0;n<2;n++){nebClouds.push({x:0.04+Math.random()*0.92,y:0.04+Math.random()*0.92,rx:0.07+Math.random()*0.20,ry:0.04+Math.random()*0.12,col:c,phase:i*0.55+n*2.1,speed:0.18+Math.random()*0.55,baseOp:0.022+Math.random()*0.038+(n===0?0.01:0)});}});
      for(var j=0;j<50;j++){debris.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*1.4,vy:(Math.random()-0.5)*0.9,r:0.4+Math.random()*1.5,alpha:0.06+Math.random()*0.28,col:ALL_COLS[Math.floor(Math.random()*ALL_COLS.length)]});}
      for(var k=0;k<3;k++){streamers.push({offset:k*Math.PI*2/3,col:ALL_COLS[k*2]});}
    },
    tick:function(canvas,theme,t,dt){
      var ctx=canvas.getContext('2d');W=canvas.width;H=canvas.height;ctx.clearRect(0,0,W,H);ctx.fillStyle='#000008';ctx.fillRect(0,0,W,H);var elapsed=t*5;
      var atmWash=ctx.createRadialGradient(W*0.4,H*0.4,0,W*0.5,H*0.5,Math.max(W,H)*0.85);atmWash.addColorStop(0,'rgba(12,4,28,0.6)');atmWash.addColorStop(0.5,'rgba(4,8,20,0.4)');atmWash.addColorStop(1,'rgba(0,0,8,0.8)');ctx.fillStyle=atmWash;ctx.fillRect(0,0,W,H);
      nebClouds.forEach(function(nc){var pulse=0.55+0.45*Math.sin(elapsed*nc.speed+nc.phase),nx=nc.x*W,ny=nc.y*H,ry_ratio=nc.ry/nc.rx;ctx.save();ctx.globalAlpha=nc.baseOp*pulse*(0.4+t*0.6);ctx.scale(1,ry_ratio);var ng=ctx.createRadialGradient(nx,ny/ry_ratio,0,nx,ny/ry_ratio,nc.rx*W);ng.addColorStop(0,'rgba('+nc.col+',0.9)');ng.addColorStop(0.4,'rgba('+nc.col+',0.35)');ng.addColorStop(0.75,'rgba('+nc.col+',0.08)');ng.addColorStop(1,'transparent');ctx.fillStyle=ng;ctx.beginPath();ctx.arc(nx,ny/ry_ratio,nc.rx*W,0,Math.PI*2);ctx.fill();ctx.restore();});
      var gcx=W*0.5,gcy=H*0.44;ctx.save();for(var arm=0;arm<3;arm++){ctx.globalAlpha=0.025+arm*0.005+t*0.018;ctx.strokeStyle=arm===0?'rgba(220,200,255,1)':(arm===1?'rgba(180,230,255,1)':'rgba(255,220,180,1)');ctx.lineWidth=1.0-arm*0.2;ctx.beginPath();for(var sp=0;sp<380;sp++){var sar=sp*0.62,saa=sp*0.11+arm*Math.PI*0.67+elapsed*0.045,spx=gcx+Math.cos(saa)*sar,spy=gcy+Math.sin(saa)*sar*0.44;if(sp===0) ctx.moveTo(spx,spy); else ctx.lineTo(spx,spy);}ctx.stroke();}ctx.restore();
      stars.forEach(function(s){var tw=s.tier<2?0.25+0.75*Math.abs(Math.sin(elapsed*s.speed+s.phase)):0.5+0.5*Math.abs(Math.sin(elapsed*s.speed*0.6+s.phase));ctx.save();if(s.tier>=2){var hR=s.r*(s.giant?16:9),hg=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,hR);hg.addColorStop(0,'rgba('+s.rgb+','+(0.22*tw)+')');hg.addColorStop(0.35,'rgba('+s.rgb+','+(0.07*tw)+')');hg.addColorStop(1,'transparent');ctx.globalAlpha=1;ctx.fillStyle=hg;ctx.beginPath();ctx.arc(s.x,s.y,hR,0,Math.PI*2);ctx.fill();ctx.globalAlpha=s.alpha*tw*(s.giant?0.5:0.3);ctx.strokeStyle='rgba('+s.rgb+',1)';ctx.lineWidth=s.giant?1.0:0.6;var fl=s.r*(s.giant?24:14);ctx.beginPath();ctx.moveTo(s.x-fl,s.y);ctx.lineTo(s.x+fl,s.y);ctx.moveTo(s.x,s.y-fl);ctx.lineTo(s.x,s.y+fl);ctx.stroke();if(s.giant){ctx.globalAlpha=s.alpha*tw*0.2;var fd=fl*0.65;ctx.beginPath();ctx.moveTo(s.x-fd,s.y-fd);ctx.lineTo(s.x+fd,s.y+fd);ctx.moveTo(s.x+fd,s.y-fd);ctx.lineTo(s.x-fd,s.y+fd);ctx.stroke();}}if(s.tier>=1){var mgS=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*(s.tier>=2?6:5));mgS.addColorStop(0,'rgba('+s.rgb+','+(0.26*tw)+')');mgS.addColorStop(1,'transparent');ctx.globalAlpha=1;ctx.fillStyle=mgS;ctx.beginPath();ctx.arc(s.x,s.y,s.r*(s.tier>=2?6:5),0,Math.PI*2);ctx.fill();}ctx.globalAlpha=s.alpha*tw;ctx.fillStyle='rgba('+s.rgb+',1)';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();if(s.tier>=2){ctx.globalAlpha=s.alpha*tw*0.7;ctx.fillStyle='#ffffff';ctx.beginPath();ctx.arc(s.x,s.y,s.r*0.4,0,Math.PI*2);ctx.fill();}ctx.restore();});
      debris.forEach(function(d){d.x+=d.vx*dt;d.y+=d.vy*dt;if(d.x<0) d.x=W;if(d.x>W) d.x=0;if(d.y<0) d.y=H;if(d.y>H) d.y=0;ctx.save();ctx.globalAlpha=d.alpha*(0.2+t*0.8);var dg=ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*3);dg.addColorStop(0,'rgba('+d.col+',0.6)');dg.addColorStop(1,'transparent');ctx.fillStyle=dg;ctx.beginPath();ctx.arc(d.x,d.y,d.r*3,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba('+d.col+',1)';ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill();ctx.restore();});
      for(var si=0;si<5;si++){var sn=((elapsed*0.28+si*0.2)%1);if(sn>0.14) continue;var sp2=sn/0.14,stx=W*(0.92-sp2*0.78)+si*W*0.04,sty=H*(0.04+sp2*0.22)+si*H*0.05,stg2=ctx.createLinearGradient(stx-120,sty+42,stx,sty);stg2.addColorStop(0,'transparent');stg2.addColorStop(0.5,'rgba(220,230,255,0.25)');stg2.addColorStop(1,'rgba(255,255,255,0.95)');ctx.save();ctx.globalAlpha=Math.sin(sp2*Math.PI);ctx.lineWidth=1.6;ctx.strokeStyle=stg2;ctx.beginPath();ctx.moveTo(stx-120,sty+42);ctx.lineTo(stx,sty);ctx.stroke();ctx.restore();}
      var sweep=ctx.createLinearGradient(0,H*0.48,W,H*0.54);ALL_COLS.forEach(function(c,i){sweep.addColorStop(i/6,'rgba('+c+','+(0.028+Math.sin(elapsed*1.8+i)*0.015)+')');});ctx.fillStyle=sweep;ctx.fillRect(0,H*0.46,W,H*0.08);
    },
    destroy:function(){stars=[];nebClouds=[];debris=[];streamers=[];}
  };
})();

UC_SCENES.grand_dawn = (function(){
  var W=0,H=0,rays=[],floaters=[],birds=[],cloudLayers=[];
  return {
    init:function(canvas,theme){
      W=canvas.width;H=canvas.height;rays=[];floaters=[];birds=[];cloudLayers=[];
      for(var i=0;i<22;i++){rays.push({angle:-0.62+i*0.058,width:4+Math.random()*20,op:0.05+Math.random()*0.14,speed:0.20+Math.random()*0.50,phase:Math.random()*Math.PI*2});}
      for(var j=0;j<70;j++){floaters.push({x:Math.random()*W,y:H*(0.35+Math.random()*0.65),vx:(Math.random()-0.5)*0.32,vy:-(0.18+Math.random()*0.75),size:1+Math.random()*3.5,col:['201,168,76','255,220,120','255,200,80','240,180,60','255,240,160'][Math.floor(Math.random()*5)],phase:Math.random()*Math.PI*2,op:0.12+Math.random()*0.50});}
      for(var b=0;b<12;b++){birds.push({x:Math.random()*W*1.5-W*0.25,y:H*(0.2+Math.random()*0.22),vx:0.45+Math.random()*1.1,wingPhase:Math.random()*Math.PI*2});}
      for(var c=0;c<5;c++){cloudLayers.push({y:0.55+c*0.04,speed:0.012+c*0.008,alpha:0.06-c*0.01,col:c<2?'220,160,60':'180,100,30'});}
    },
    tick:function(canvas,theme,t,dt){
      var ctx=canvas.getContext('2d');W=canvas.width;H=canvas.height;ctx.clearRect(0,0,W,H);var elapsed=t*5,hy=H*0.56;
      var sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#000306');sky.addColorStop(0.18,'rgba(2,8,16,'+(0.9+t*0.05)+')');sky.addColorStop(0.38,'rgba(35,12,4,'+(0.6+t*0.15)+')');sky.addColorStop(0.52,'rgba(90,35,6,'+(0.55+t*0.12)+')');sky.addColorStop(0.62,'rgba(160,65,10,'+(0.5+t*0.1)+')');sky.addColorStop(0.72,'rgba(210,110,15,'+(0.42+t*0.08)+')');sky.addColorStop(0.82,'rgba(201,168,76,'+(0.28+t*0.10)+')');sky.addColorStop(1,'rgba(80,55,10,0.2)');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
      ctx.save();for(var s=0;s<45;s++){var sx=_ucRand(s*7+1)*W,sy=_ucRand(s*7+2)*H*0.38,sa=Math.max(0,(0.35-t*0.38))*Math.abs(Math.sin(elapsed*_ucRand(s*7+3)+s));if(sa<=0) continue;ctx.globalAlpha=sa;ctx.fillStyle='#cceeff';ctx.beginPath();ctx.arc(sx,sy,0.7+_ucRand(s*7+4)*0.5,0,Math.PI*2);ctx.fill();}ctx.restore();
      var hgR=W*(0.5+t*0.5),hg=ctx.createRadialGradient(W/2,hy,0,W/2,hy,hgR);hg.addColorStop(0,'rgba(255,200,80,'+(0.22+t*0.20)+')');hg.addColorStop(0.15,'rgba(220,130,25,'+(0.14+t*0.12)+')');hg.addColorStop(0.4,'rgba(180,70,8,'+(0.06+t*0.05)+')');hg.addColorStop(1,'transparent');ctx.fillStyle=hg;ctx.fillRect(0,0,W,H);
      var sunProgress=Math.max(0,t*1.65-0.28),sunR=Math.min(W,H)*0.06,sunY=hy+sunR*(1.2-sunProgress*1.5);
      if(sunProgress>0){for(var cl=6;cl>=0;cl--){var cR=sunR*(2.2+cl*2.2),cA=(0.035-cl*0.004)*sunProgress*(0.7+0.3*Math.sin(elapsed*1.5)),cG=ctx.createRadialGradient(W/2,sunY,sunR*0.3,W/2,sunY,cR);cG.addColorStop(0,'rgba(255,235,130,'+cA+')');cG.addColorStop(0.4,'rgba(220,150,35,'+(cA*0.45)+')');cG.addColorStop(0.75,'rgba(180,80,10,'+(cA*0.12)+')');cG.addColorStop(1,'transparent');ctx.fillStyle=cG;ctx.fillRect(0,0,W,H);}ctx.save();ctx.beginPath();ctx.rect(0,0,W,hy+2);ctx.clip();ctx.globalAlpha=Math.min(1,sunProgress*1.2);var sdg=ctx.createRadialGradient(W/2-sunR*0.15,sunY-sunR*0.15,0,W/2,sunY,sunR);sdg.addColorStop(0,'#fffde8');sdg.addColorStop(0.35,'rgba(255,248,180,0.95)');sdg.addColorStop(0.7,'rgba(255,220,100,0.5)');sdg.addColorStop(1,'rgba(255,190,60,0.15)');ctx.fillStyle=sdg;ctx.beginPath();ctx.arc(W/2,sunY,sunR,0,Math.PI*2);ctx.fill();ctx.globalAlpha=sunProgress*0.35;ctx.strokeStyle='rgba(255,240,160,0.7)';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(W/2,sunY,sunR*0.92,0,Math.PI*2);ctx.stroke();ctx.restore();}
      rays.forEach(function(ray,ri){var pulse=0.62+0.38*Math.sin(elapsed*ray.speed*Math.PI*2+ray.phase);ctx.save();ctx.globalAlpha=ray.op*pulse*Math.min(t*2.8,1);ctx.translate(W/2,hy);ctx.rotate(ray.angle);var rg=ctx.createLinearGradient(0,0,0,-H*1.1);rg.addColorStop(0,'rgba(255,215,90,0.8)');rg.addColorStop(0.2,'rgba(255,180,50,0.25)');rg.addColorStop(0.55,'rgba(220,130,25,0.07)');rg.addColorStop(1,'transparent');ctx.fillStyle=rg;var rw=ray.width*(0.5+t*0.5);ctx.beginPath();ctx.moveTo(-rw/2,0);ctx.lineTo(rw/2,0);ctx.lineTo(rw*3.2,-H*1.1);ctx.lineTo(-rw*3.2,-H*1.1);ctx.closePath();ctx.fill();ctx.restore();});
      cloudLayers.forEach(function(cl2,cli){var cOff=Math.sin(elapsed*cl2.speed+cli*2.2)*W*0.04;ctx.save();ctx.globalAlpha=cl2.alpha*(0.3+t*0.7);var clg=ctx.createLinearGradient(0,H*cl2.y-18,0,H*cl2.y+28);clg.addColorStop(0,'transparent');clg.addColorStop(0.4,'rgba('+cl2.col+',0.7)');clg.addColorStop(1,'transparent');ctx.fillStyle=clg;ctx.fillRect(-W*0.05+cOff,H*cl2.y-18,W*1.1,46);ctx.restore();});
      var groundG=ctx.createLinearGradient(0,hy,0,H);groundG.addColorStop(0,'rgba(201,168,76,'+(0.20+t*0.12)+')');groundG.addColorStop(0.08,'rgba(70,35,8,0.20)');groundG.addColorStop(0.35,'rgba(14,8,2,0.55)');groundG.addColorStop(1,'rgba(0,0,0,0.9)');ctx.fillStyle=groundG;ctx.fillRect(0,hy,W,H-hy);
      var mtCols=['rgba(0,0,0,0.96)','rgba(4,2,1,0.92)','rgba(8,4,2,0.85)'],mtOffsets=[0.0,0.04,0.08];mtCols.forEach(function(mc,mi){ctx.save();ctx.fillStyle=mc;ctx.beginPath();ctx.moveTo(0,H);for(var x=0;x<=W;x+=3){var mh=Math.sin(x*0.012+mi*1.3)*H*(0.06-mi*0.008)+Math.sin(x*0.028+mi*0.7+2)*H*(0.04-mi*0.006)+Math.sin(x*0.007+mi*2)*H*0.038;ctx.lineTo(x,hy*(1+mtOffsets[mi])+mh);}ctx.lineTo(W,H);ctx.closePath();ctx.fill();ctx.restore();});
      floaters.forEach(function(fl){fl.x+=fl.vx+Math.sin(elapsed*0.55+fl.phase)*0.42;fl.y+=fl.vy;if(fl.y<-12){fl.y=H*(0.45+Math.random()*0.55);fl.x=Math.random()*W;}var fa=Math.min(1,Math.max(0,(hy-fl.y)/(hy*0.55)))*fl.op*Math.min(t*3.5,1);if(fa<=0) return;ctx.save();ctx.globalAlpha=fa;var fg2=ctx.createRadialGradient(fl.x,fl.y,0,fl.x,fl.y,fl.size*4.5);fg2.addColorStop(0,'rgba('+fl.col+',0.55)');fg2.addColorStop(0.4,'rgba('+fl.col+',0.15)');fg2.addColorStop(1,'transparent');ctx.fillStyle=fg2;ctx.beginPath();ctx.arc(fl.x,fl.y,fl.size*4.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,252,220,0.95)';ctx.beginPath();ctx.arc(fl.x,fl.y,fl.size*0.55,0,Math.PI*2);ctx.fill();ctx.restore();});
      birds.forEach(function(bird){bird.x+=bird.vx;if(bird.x>W+40){bird.x=-40;bird.y=H*(0.18+Math.random()*0.22);}bird.wingPhase+=dt*5.5;var wing=Math.sin(bird.wingPhase)*0.26,bAlpha=Math.min(1,t*5)*0.62;if(bAlpha<=0) return;ctx.save();ctx.globalAlpha=bAlpha;ctx.fillStyle='rgba(0,0,0,0.85)';ctx.beginPath();ctx.moveTo(bird.x,bird.y);ctx.bezierCurveTo(bird.x-7,bird.y-9-wing*14,bird.x-15,bird.y-7-wing*11,bird.x-20,bird.y);ctx.bezierCurveTo(bird.x-15,bird.y+wing*5,bird.x-7,bird.y+wing*7,bird.x,bird.y);ctx.bezierCurveTo(bird.x+7,bird.y+wing*7,bird.x+15,bird.y+wing*5,bird.x+20,bird.y);ctx.bezierCurveTo(bird.x+15,bird.y-7-wing*11,bird.x+7,bird.y-9-wing*14,bird.x,bird.y);ctx.fill();ctx.restore();});
      if(sunProgress>0.3){ctx.save();ctx.globalAlpha=Math.min(1,sunProgress-0.3)*0.18;var flareG=ctx.createRadialGradient(W/2,sunY,0,W/2,sunY,Math.min(W,H)*0.06);flareG.addColorStop(0,'rgba(255,255,240,0.9)');flareG.addColorStop(0.5,'rgba(255,240,180,0.3)');flareG.addColorStop(1,'transparent');ctx.fillStyle=flareG;ctx.beginPath();ctx.arc(W/2,sunY,Math.min(W,H)*0.06,0,Math.PI*2);ctx.fill();ctx.restore();}
    },
    destroy:function(){rays=[];floaters=[];birds=[];cloudLayers=[];}
  };
})();

function _ucEnsureFinaleDOM() {
  if (document.getElementById('uc-finale-root')) return;
  var root = document.createElement('div');
  root.id = 'uc-finale-root';
  root.style.cssText = 'position:absolute;inset:0;z-index:600;display:none;background:#000;overflow:hidden;pointer-events:none;';
  root.innerHTML = [
    '<canvas id="uc-finale-canvas" style="position:absolute;inset:0;width:100%;height:100%;display:block;"></canvas>',
    '<div id="uc-finale-vignette" style="position:absolute;inset:0;pointer-events:none;z-index:2;',
       'background:radial-gradient(ellipse 88% 88% at 50% 50%,transparent 50%,rgba(0,0,0,0.22) 75%,rgba(0,0,0,0.52) 100%);"></div>',
    '<div id="uc-finale-badge" style="position:absolute;top:calc(env(safe-area-inset-top,0px) + 20px);left:50%;transform:translateX(-50%);z-index:10;',
       'font-family:Tenor Sans,sans-serif;font-size:8px;letter-spacing:5px;color:rgba(255,255,255,0.28);',
       'text-transform:uppercase;white-space:nowrap;opacity:0;transition:opacity 0.6s ease 1s;">ALL PATHS COMPLETE</div>',
    '<div id="uc-finale-text" style="position:absolute;bottom:96px;left:28px;right:28px;z-index:10;text-align:center;pointer-events:none;">',
      '<div id="uc-finale-eyebrow" style="font-family:Tenor Sans,sans-serif;font-size:8px;letter-spacing:5px;',
         'color:rgba(255,255,255,0.32);text-transform:uppercase;margin-bottom:12px;',
         'opacity:0;transform:translateY(6px);transition:opacity 0.5s ease,transform 0.5s ease;"></div>',
      '<div id="uc-finale-title" style="font-family:Cormorant Garamond,serif;font-weight:600;font-size:32px;',
         'line-height:1.15;color:#fff;letter-spacing:1px;text-shadow:0 0 60px rgba(255,255,255,0.15),0 2px 40px rgba(0,0,0,0.6);',
         'opacity:0;transform:translateY(14px);transition:opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.12s,transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.12s;"></div>',
      '<div id="uc-finale-divider" style="width:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent);',
         'margin:14px auto;transition:width 0.8s cubic-bezier(0.16,1,0.3,1) 0.28s;"></div>',
      '<div id="uc-finale-line" style="font-family:Cormorant Garamond,serif;font-weight:300;font-style:italic;font-size:15px;',
         'line-height:1.85;color:rgba(255,255,255,0.5);opacity:0;transform:translateY(8px);',
         'transition:opacity 0.6s ease 0.32s,transform 0.6s ease 0.32s;"></div>',
    '</div>',
    '<div id="uc-finale-dots" style="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);display:flex;gap:5px;z-index:10;opacity:0;transition:opacity 0.5s ease 1.5s;"></div>',
    '<div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);font-size:8px;',
       'font-family:Tenor Sans,sans-serif;color:rgba(255,255,255,0.14);letter-spacing:2px;text-transform:uppercase;',
       'z-index:10;white-space:nowrap;animation:ucTapPulse 2.2s ease-in-out 4s infinite;">TAP TO ADVANCE</div>',
    '<div id="uc-finale-skip" style="position:absolute;bottom:24px;right:22px;z-index:10;',
       'font-family:Tenor Sans,sans-serif;font-size:9px;letter-spacing:2.5px;color:rgba(255,255,255,0.18);',
       'text-transform:uppercase;cursor:pointer;padding:12px 16px;pointer-events:all;',
       'opacity:0;transition:opacity 0.5s ease 2.5s;">SKIP</div>',
  ].join('');
  var app=document.getElementById('app')||document.body; app.appendChild(root);
}

var _ucFinaleRaf=null,_ucFinaleRunning=false,_ucFinaleStart=null,_ucFinaleScene=null;

function _ucFinaleStartCanvas(sceneName) {
  _ucFinaleStopCanvas();
  _ucFinaleRunning=true; _ucFinaleStart=null; _ucFinaleScene=sceneName;
  var canvas=document.getElementById('uc-finale-canvas');
  if(!canvas) return;
  var dpr=window.devicePixelRatio||1;
  var cw=(canvas.offsetWidth||canvas.parentElement&&canvas.parentElement.offsetWidth||390);
  var ch=(canvas.offsetHeight||canvas.parentElement&&canvas.parentElement.offsetHeight||800);
  canvas.width=Math.max(cw,100)*dpr; canvas.height=Math.max(ch,200)*dpr;
  var ctx=canvas.getContext('2d'); ctx.scale(dpr,dpr);
  var inst=UC_SCENES[sceneName];
  if(!inst) return;
  inst.init(canvas,UC_FINALE_THEME);
  var lastTs=null;
  (function loop(ts){
    if(!_ucFinaleRunning) return;
    if(!_ucFinaleStart) _ucFinaleStart=ts;
    if(!lastTs) lastTs=ts;
    var dt=Math.min((ts-lastTs)/1000,0.055); lastTs=ts;
    var elapsed=(ts-_ucFinaleStart)/1000;
    var t=Math.min(elapsed/(BEAT_DURATION_FINALE/1000),1);
    inst.tick(canvas,UC_FINALE_THEME,t,dt);
    _ucFinaleRaf=requestAnimationFrame(loop);
  })(performance.now());
}

function _ucFinaleStopCanvas(){
  _ucFinaleRunning=false;
  if(_ucFinaleRaf){cancelAnimationFrame(_ucFinaleRaf);_ucFinaleRaf=null;}
  if(_ucFinaleScene&&UC_SCENES[_ucFinaleScene]&&UC_SCENES[_ucFinaleScene].destroy){
    UC_SCENES[_ucFinaleScene].destroy();
  }
}

var _ucFinaleBeatTimer=null,_ucFinaleTimelineRaf=null,_ucFinaleTimelineStart=null;
var _ucFinaleTotalDuration=UC_FINALE_BEATS.length*BEAT_DURATION_FINALE;

function _ucFinaleStartTimeline(){
  _ucFinaleStopTimeline();
  _ucFinaleTimelineStart=performance.now();
  var fill=document.getElementById('uc-finale-fill');
  (function tick(){
    if(!_ucFinaleTimelineStart) return;
    var elapsed=performance.now()-_ucFinaleTimelineStart;
    var pct=Math.min((elapsed/_ucFinaleTotalDuration)*100,100);
    if(fill) fill.style.width=pct+'%';
    if(elapsed<_ucFinaleTotalDuration) _ucFinaleTimelineRaf=requestAnimationFrame(tick);
  })();
}

function _ucFinaleStopTimeline(){
  if(_ucFinaleTimelineRaf){cancelAnimationFrame(_ucFinaleTimelineRaf);_ucFinaleTimelineRaf=null;}
  _ucFinaleTimelineStart=null;
}

function _ucFinaleShowBeat(idx,onDone){
  var beat=UC_FINALE_BEATS[idx];
  var eyeEl=document.getElementById('uc-finale-eyebrow'),titleEl=document.getElementById('uc-finale-title');
  var divEl=document.getElementById('uc-finale-divider'),lineEl=document.getElementById('uc-finale-line');
  var dotsEl=document.getElementById('uc-finale-dots');
  if(dotsEl){Array.from(dotsEl.children).forEach(function(d,i){if(i===idx){d.style.width='36px';d.style.background='rgba(201,168,76,0.88)';d.style.boxShadow='0 0 8px rgba(201,168,76,0.65)';}else{d.style.width='28px';d.style.background='rgba(255,255,255,0.14)';d.style.boxShadow='none';}});}
  [eyeEl,titleEl,divEl,lineEl].forEach(function(el){if(el){el.style.opacity='0';el.style.transform='translateY('+(el===divEl?'0':'8px')+')';if(el===divEl) el.style.width='0';}});
  setTimeout(function(){
    if(eyeEl) eyeEl.textContent=beat.label;if(titleEl) titleEl.textContent=beat.title;if(lineEl) lineEl.innerHTML=beat.line.replace(/\n/g,'<br>');
    requestAnimationFrame(function(){
      if(eyeEl){eyeEl.style.opacity='1';eyeEl.style.transform='translateY(0)';}
      if(titleEl){titleEl.style.opacity='1';titleEl.style.transform='translateY(0)';}
      if(divEl){divEl.style.opacity='1';divEl.style.width='80px';}
      if(lineEl){lineEl.style.opacity='1';lineEl.style.transform='translateY(0)';}
    });
  },300);
  _ucFinaleStartCanvas(beat.scene);
  _ucFinaleBeatTimer=setTimeout(function(){if(onDone) onDone();},BEAT_DURATION_FINALE);
}

function _ucFinaleRunSequence(callback){
  var root=document.getElementById('uc-finale-root'),badge=document.getElementById('uc-finale-badge');
  var dotsWrap=document.getElementById('uc-finale-dots'),skipBtn=document.getElementById('uc-finale-skip');
  if(!root) return;
  if(dotsWrap){
    dotsWrap.innerHTML='';
    UC_FINALE_BEATS.forEach(function(_,i){
      var d=document.createElement('div');
      d.style.cssText='width:'+(i===0?'36px':'28px')+';height:3px;border-radius:2px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);cursor:pointer;'+(i===0?'background:rgba(201,168,76,0.88);box-shadow:0 0 8px rgba(201,168,76,0.65);':'background:rgba(255,255,255,0.14);');
      dotsWrap.appendChild(d);
    });
    dotsWrap.style.opacity='1';
  }
  root.style.display='block'; root.style.opacity='0'; root.style.pointerEvents='all';
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.style.transition='opacity 0.9s ease';root.style.opacity='1';setTimeout(function(){if(badge) badge.style.opacity='1';},250);});});
  var beatIdx=0,skipped=false;
  function advance(){if(skipped) return;beatIdx++;if(beatIdx<UC_FINALE_BEATS.length){_ucFinaleShowBeat(beatIdx,advance);}else{finishFinale();}}
  function finishFinale(){skipped=true;_ucFinaleStopCanvas();_ucFinaleStopTimeline();if(_ucFinaleBeatTimer){clearTimeout(_ucFinaleBeatTimer);_ucFinaleBeatTimer=null;}root.style.transition='opacity 0.7s ease';root.style.opacity='0';setTimeout(function(){root.style.display='none';root.style.pointerEvents='none';root.style.opacity='';root.style.transition='';if(callback) callback();},720);}
  _ucFinaleShowBeat(0,advance);
  if(skipBtn){skipBtn.style.opacity='0.18';skipBtn.addEventListener('click',function onSkip(){skipBtn.removeEventListener('click',onSkip);if(_ucFinaleBeatTimer){clearTimeout(_ucFinaleBeatTimer);_ucFinaleBeatTimer=null;}finishFinale();});}
  function tapHandler(e){if(e.target.id==='uc-finale-skip') return;if(skipped) return;if(_ucFinaleBeatTimer){clearTimeout(_ucFinaleBeatTimer);_ucFinaleBeatTimer=null;}beatIdx++;if(beatIdx<UC_FINALE_BEATS.length){_ucFinaleShowBeat(beatIdx,advance);}else{root.removeEventListener('click',tapHandler);finishFinale();}}
  root.addEventListener('click',tapHandler);
}

function showAllPathsCompleteCinematic(callback){
  _ucEnsureFinaleDOM();_ucFinaleStopCanvas();_ucFinaleStopTimeline();
  if(_ucFinaleBeatTimer){clearTimeout(_ucFinaleBeatTimer);_ucFinaleBeatTimer=null;}
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  if(typeof fadeMusicTo==='function') fadeMusicTo(0.05,1200);
  _ucFinaleRunSequence(callback);
}

window.showCategoryUnlockCinematic=showCategoryUnlockCinematic;
window.showAllPathsCompleteCinematic=showAllPathsCompleteCinematic;
window.ucOnCategoryComplete=ucOnCategoryComplete;
window.ucCheckPendingUnlock=ucCheckPendingUnlock;

try{Object.defineProperty(window,'_ucPendingNewCat',{get:function(){return _ucPendingNewCat;},set:function(v){_ucPendingNewCat=v;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'_ucPendingPrevCat',{get:function(){return _ucPendingPrevCat;},set:function(v){_ucPendingPrevCat=v;},configurable:true});}catch(e){};