/* ═══════════════════════════════════════════╗
   ║   ACT VISUALS — inline-SVG figure library ║
   ╚══════════════════════════════════════════╝
   Renders ACT-style diagrams (coordinate planes, geometric figures, charts,
   number lines) as self-contained inline SVG strings. Theme-aware via CSS
   variables, so it matches the site's light/dark styling with no image assets.

   - Tests: generators embed the SVG strings directly into question prompts.
   - Descriptions: a topic may carry a `visual` spec rendered via
     ACTVisuals.render(spec) (used by renderTopicDetail).
*/
(function () {
  'use strict';

  // ── helpers ──
  const esc = (s) => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const r1 = (n) => { const r = Math.round(n * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1); };
  const niceStep = (span) => {
    const raw = span / 8;
    const mag = Math.pow(10, Math.floor(Math.log10(Math.max(raw, 1e-9))));
    for (const m of [1, 2, 2.5, 5, 10]) { if (m * mag >= raw) return m * mag; }
    return 10 * mag;
  };
  const lbl = (v) => { const r = r1(v); return r.endsWith('.0') ? String(Math.round(v)) : r; };
  const num = (v) => (typeof v === 'number' && !isNaN(v)) ? v : 0;

  function svg(viewW, viewH, inner, cls) {
    return '<svg class="act-fig' + (cls ? ' ' + cls : '') + '" viewBox="0 0 ' + viewW + ' ' + viewH
      + '" role="img" aria-hidden="true">' + inner + '</svg>';
  }
  function wrap(body, caption) {
    return '<figure class="act-figure">' + body + (caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '') + '</figure>';
  }

  // ── shared text helper ──
  const text = (x, y, str, extra) =>
    '<text x="' + r1(x) + '" y="' + r1(y) + '" class="fig-label" text-anchor="middle"' + (extra ? ' ' + extra : '') + '>' + esc(str) + '</text>';

  // ============================================================
  //  COORDINATE PLANE
  //  opts: { xMin,xMax,yMin,yMax, line:{m,b,color,dash}, pts:[[x,y],...],
  //          shade:{m,b,above:bool,color} }
  // ============================================================
  function plane(opts) {
    const o = opts || {};
    const W = 300, H = 300, PAD = 36;
    const xMin = o.xMin !== undefined ? o.xMin : -5;
    const xMax = o.xMax !== undefined ? o.xMax : 5;
    const yMin = o.yMin !== undefined ? o.yMin : -5;
    const yMax = o.yMax !== undefined ? o.yMax : 5;
    const X = v => PAD + (v - xMin) / (xMax - xMin) * (W - 2 * PAD);
    const Y = v => H - PAD - (v - yMin) / (yMax - yMin) * (H - 2 * PAD);
    const x0 = X(0), y0 = Y(0);
    const step = niceStep(Math.max(xMax - xMin, yMax - yMin));
    let inner = '';

    // grid
    for (let gx = Math.ceil(xMin / step) * step; gx <= xMax; gx += step) {
      if (Math.abs(gx) < step * 1e-6) continue;
      inner += '<line x1="' + r1(X(gx)) + '" y1="' + PAD + '" x2="' + r1(X(gx)) + '" y2="' + (H - PAD) + '" class="fig-grid"/>';
    }
    for (let gy = Math.ceil(yMin / step) * step; gy <= yMax; gy += step) {
      if (Math.abs(gy) < step * 1e-6) continue;
      inner += '<line x1="' + PAD + '" y1="' + r1(Y(gy)) + '" x2="' + (W - PAD) + '" y2="' + r1(Y(gy)) + '" class="fig-grid"/>';
    }

    // shading region
    if (o.shade) inner += shadeRegion(o.shade, X, Y, xMin, xMax, yMin, yMax);

    // line
    if (o.line) inner += drawBoundary(o.line, X, Y, xMin, xMax, yMin, yMax);

    // points
    if (o.pts) o.pts.forEach(p => {
      inner += '<circle cx="' + r1(X(num(p[0]))) + '" cy="' + r1(Y(num(p[1]))) + '" r="3.6" class="fig-point"/>';
    });

    // axes (on top)
    inner += '<line x1="' + PAD + '" y1="' + r1(y0) + '" x2="' + (W - PAD) + '" y2="' + r1(y0) + '" class="fig-axis"/>';
    inner += '<line x1="' + r1(x0) + '" y1="' + PAD + '" x2="' + r1(x0) + '" y2="' + (H - PAD) + '" class="fig-axis"/>';
    inner += '<path class="fig-arrow" d="M ' + r1(x0) + ' ' + PAD + ' l -3 6 l 3 6 l 3 -6 Z"/>';
    inner += '<path class="fig-arrow" d="M ' + (W - PAD) + ' ' + r1(y0) + ' l -6 -3 l -6 3 l 6 3 Z"/>';
    inner += '<text x="' + r1(x0 - 5) + '" y="' + r1(y0 + 4) + '" class="fig-tick" text-anchor="end">0</text>';
    inner += '<text x="' + (W - PAD + 8) + '" y="' + r1(y0 + 4) + '" class="fig-label" text-anchor="middle">x</text>';
    inner += '<text x="' + r1(x0 - 10) + '" y="' + (PAD + 4) + '" class="fig-label" text-anchor="end">y</text>';

    // tick labels
    for (let gx = Math.ceil(xMin / step) * step; gx <= xMax; gx += step) {
      if (Math.abs(gx) < step * 1e-6) continue;
      inner += '<text x="' + r1(X(gx)) + '" y="' + r1(y0 + 14) + '" class="fig-tick" text-anchor="middle">' + lbl(gx) + '</text>';
    }
    for (let gy = Math.ceil(yMin / step) * step; gy <= yMax; gy += step) {
      if (Math.abs(gy) < step * 1e-6) continue;
      inner += '<text x="' + r1(x0 - 6) + '" y="' + r1(Y(gy) + 3) + '" class="fig-tick" text-anchor="end">' + lbl(gy) + '</text>';
    }
    return svg(W, H, inner);
  }

  function drawBoundary(line, X, Y, xMin, xMax, yMin, yMax) {
    const { m = 0, b = 0 } = line;
    // clip line segment to the visible box
    let x1 = xMin, x2 = xMax;
    const y1 = m * x1 + b, y2 = m * x2 + b;
    const pad = (yMax - yMin) * 0.3;
    if (y1 < yMin - pad) x1 = (yMin - pad - b) / m;
    if (y1 > yMax + pad) x1 = (yMax + pad - b) / m;
    if (y2 < yMin - pad) x2 = (yMin - pad - b) / m;
    if (y2 > yMax + pad) x2 = (yMax + pad - b) / m;
    const cls = 'fig-line' + (line.color ? ' ' + line.color : '');
    return '<line x1="' + r1(X(x1)) + '" y1="' + r1(Y(m * x1 + b)) + '" x2="' + r1(X(x2)) + '" y2="' + r1(Y(m * x2 + b)) + '" class="' + cls + '"' + (line.dash ? ' stroke-dasharray="6 5"' : '') + '/>';
  }

  function shadeRegion(s, X, Y, xMin, xMax, yMin, yMax) {
    const edge = s.above ? yMax : yMin;
    let pts = '';
    const xs = [xMin, xMin + (xMax - xMin) / 3, xMin + 2 * (xMax - xMin) / 3, xMax];
    for (const x of xs) {
      const yy = s.m * x + s.b;
      pts += r1(X(x)) + ',' + r1(Y(yy)) + ' ';
    }
    for (let i = xs.length - 1; i >= 0; i--) {
      const x = xs[i];
      pts += r1(X(x)) + ',' + r1(Y(edge)) + (i ? ' ' : '');
    }
    return '<polygon points="' + pts + '" class="fig-shade"/>';
  }

  // ============================================================
  //  NUMBER LINE
  //  opts: { min,max, marks:[{v, filled, label}], arrows:bool }
  // ============================================================
  function numberLine(opts) {
    const o = opts || {};
    const W = 320, H = 64, PAD = 24;
    const min = o.min !== undefined ? o.min : 0;
    const max = o.max !== undefined ? o.max : 10;
    const X = v => PAD + (v - min) / (max - min) * (W - 2 * PAD);
    const step = niceStep(max - min);
    let inner = '';
    inner += '<line x1="' + PAD + '" y1="30" x2="' + (W - PAD) + '" y2="30" class="fig-axis"/>';
    inner += '<text x="' + (PAD - 4) + '" y="34" class="fig-label">◀</text>';
    inner += '<text x="' + (W - PAD + 4) + '" y="34" class="fig-label">▶</text>';
    for (let v = Math.ceil(min / step) * step; v <= max; v += step) {
      const vv = Math.round(v * 100) / 100;
      inner += '<line x1="' + r1(X(vv)) + '" y1="26" x2="' + r1(X(vv)) + '" y2="34" class="fig-tick-line"/>';
      inner += '<text x="' + r1(X(vv)) + '" y="48" class="fig-tick" text-anchor="middle">' + lbl(vv) + '</text>';
    }
    if (o.marks) o.marks.forEach(mk => {
      inner += '<circle cx="' + r1(X(mk.v)) + '" cy="30" r="5" class="fig-line' + (mk.filled !== false ? ' fig-filled' : '') + '"/>';
      if (mk.label) inner += '<text x="' + r1(X(mk.v)) + '" y="14" class="fig-label" text-anchor="middle">' + esc(mk.label) + '</text>';
    });
    return svg(W, H, inner);
  }

  // ============================================================
  //  BAR CHART
  //  opts: { labels:[], values:[], gold:bool, yLabel }
  // ============================================================
  function barChart(opts) {
    const o = opts || {};
    const labels = o.labels || [], values = o.values || [];
    const W = 320, H = 220, PADL = 44, PADB = 30, PADT = 12;
    const maxV = Math.max.apply(null, values.map(v => Math.abs(num(v))).concat([1]));
    const plotW = W - PADL - 14, plotH = H - PADB - PADT;
    const y0 = PADT + plotH;
    const X = i => PADL + (i + 0.5) * plotW / values.length;
    const Y = v => y0 - (Math.abs(v) / maxV) * plotH;
    let inner = '';
    inner += '<line x1="' + PADL + '" y1="' + r1(y0) + '" x2="' + (W - 14) + '" y2="' + r1(y0) + '" class="fig-axis"/>';
    for (let gi = 0; gi <= 4; gi++) {
      const gv = maxV * gi / 4;
      const gy = Y(gv);
      inner += '<line x1="' + PADL + '" y1="' + r1(gy) + '" x2="' + (W - 14) + '" y2="' + r1(gy) + '" class="fig-grid"/>';
      inner += '<text x="' + (PADL - 6) + '" y="' + r1(gy + 3) + '" class="fig-tick" text-anchor="end">' + lbl(gv) + '</text>';
    }
    const barW = Math.min(plotW / values.length * 0.55, 40);
    values.forEach((v, i) => {
      const x = X(i) - barW / 2;
      inner += '<rect x="' + r1(x) + '" y="' + r1(Y(v)) + '" width="' + r1(barW) + '" height="' + r1(Math.max(1, y0 - Y(v))) + '" class="fig-bar' + (o.gold ? ' gold' : '') + '" rx="2"/>';
      if (labels[i] !== undefined) inner += '<text x="' + r1(X(i)) + '" y="' + (y0 + 15) + '" class="fig-tick" text-anchor="middle">' + esc(labels[i]) + '</text>';
    });
    if (o.yLabel) inner += '<text x="' + (PADL - 34) + '" y="' + r1(y0 / 2) + '" class="fig-label" text-anchor="middle" transform="rotate(-90 ' + (PADL - 34) + ' ' + r1(y0 / 2) + ')">' + esc(o.yLabel) + '</text>';
    return svg(W, H, inner);
  }

  // ============================================================
  //  LINE / SCATTER GRAPH
  //  opts: { pts:[[x,y],...], fit:{m,b,dash}, xLabel, xMin,xMax,yMin,yMax }
  // ============================================================
  function lineGraph(opts) {
    const o = opts || {};
    const pts = o.pts || [];
    const W = 320, H = 230, PADL = 50, PADB = 30, PADT = 14;
    const xs = pts.map(p => num(p[0]));
    const ys = pts.map(p => num(p[1]));
    const xMin = o.xMin !== undefined ? o.xMin : (xs.length ? Math.min.apply(null, xs) : 0);
    const xMax = o.xMax !== undefined ? o.xMax : (xs.length ? Math.max.apply(null, xs) : 10);
    const yMin = o.yMin !== undefined ? o.yMin : Math.min.apply(null, ys.concat([0]));
    const yMax = o.yMax !== undefined ? o.yMax : Math.max.apply(null, ys.concat([1]));
    const plotW = W - PADL - 14, plotH = H - PADB - PADT;
    const X = v => PADL + (v - xMin) / (xMax - xMin) * plotW;
    const Y = v => PADT + plotH - (v - yMin) / (yMax - yMin) * plotH;
    const y0 = PADT + plotH;
    let inner = '';
    inner += '<line x1="' + PADL + '" y1="' + r1(y0) + '" x2="' + (W - 14) + '" y2="' + r1(y0) + '" class="fig-axis"/>';
    // left axis with min/max
    inner += '<text x="' + (PADL - 6) + '" y="' + r1(Y(yMax) + 3) + '" class="fig-tick" text-anchor="end">' + lbl(yMax) + '</text>';
    inner += '<text x="' + (PADL - 6) + '" y="' + r1(Y(yMin) + 3) + '" class="fig-tick" text-anchor="end">' + lbl(yMin) + '</text>';

    // fit line
    if (o.fit) {
      const fy1 = o.fit.m * xMin + o.fit.b, fy2 = o.fit.m * xMax + o.fit.b;
      inner += '<line x1="' + r1(X(xMin)) + '" y1="' + r1(Y(fy1)) + '" x2="' + r1(X(xMax)) + '" y2="' + r1(Y(fy2)) + '" class="fig-line" stroke-dasharray="' + (o.fit.dash ? '6 5' : '0') + '"/>';
    }
    // data line
    let d = '';
    pts.forEach((p, i) => {
      const x = X(num(p[0])), y = Y(num(p[1]));
      d += (i ? 'L' : 'M') + r1(x) + ' ' + r1(y) + ' ';
      inner += '<circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="3.4" class="fig-point"/>';
    });
    if (pts.length > 1) inner += '<path d="' + d + '" fill="none" class="fig-line"/>';
    if (o.xLabel) inner += '<text x="' + Math.round((PADL + W - 14) / 2) + '" y="' + (H - 7) + '" class="fig-tick" text-anchor="middle">' + esc(o.xLabel) + '</text>';
    return svg(W, H, inner);
  }
  const scatter = (o) => lineGraph(o);

  // ============================================================
  //  GEOMETRIC FIGURE
  //  opts: { shape:'triangle|right|rect|square|circle|trapezoid|parallelogram|hexagon|cube',
  //          labels:{...}, rightAngle:true }
  // ============================================================
  function geomFigure(opts) {
    const o = opts || {};
    const shp = o.shape || 'triangle';
    const W = 300, H = 220, L = 46, R = 254, T = 30, B = 186;
    let inner = '';
    const lb = o.labels || {};

    if (shp === 'triangle' || shp === 'scalene') {
      const px = L + (R - L) * 0.4;
      inner = '<polygon points="' + L + ',' + B + ' ' + R + ',' + B + ' ' + px + ',' + T + '" class="fig-shape"/>';
      inner += '<text x="' + (L - 8) + '" y="' + (B + 4) + '" class="fig-label" text-anchor="middle">' + esc(lb.A || 'A') + '</text>';
      inner += '<text x="' + (R + 8) + '" y="' + (B + 4) + '" class="fig-label" text-anchor="middle">' + esc(lb.B || 'B') + '</text>';
      inner += '<text x="' + px + '" y="' + (T - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.C || 'C') + '</text>';
      inner += '<text x="' + ((L + R) / 2) + '" y="' + (B - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.c || '') + '</text>';
      inner += '<text x="' + ((px + L) / 2) + '" y="' + ((B + T) / 2) + '" class="fig-label" text-anchor="middle">' + esc(lb.b || '') + '</text>';
      inner += '<text x="' + ((px + R) / 2) + '" y="' + ((B + T) / 2) + '" class="fig-label" text-anchor="middle">' + esc(lb.a || '') + '</text>';
    } else if (shp === 'right') {
      // right triangle: right angle at bottom-left
      inner = '<polygon points="' + L + ',' + B + ' ' + R + ',' + B + ' ' + L + ',' + T + '" class="fig-shape"/>';
      if (o.rightAngle !== false) {
        const s = 16;
        inner += '<polyline points="' + (L + s) + ',' + B + ' ' + (L + s) + ',' + (B - s) + ' ' + L + ',' + (B - s) + '" class="fig-axis" fill="none"/>';
      }
      // hypotenuse (diagonal) length label
      inner += '<text x="' + ((L + R) / 2 + 4) + '" y="' + ((B + T) / 2) + '" class="fig-label" text-anchor="middle">' + esc(lb.h || lb.c || '') + '</text>';
      inner += '<text x="' + ((L + R) / 2) + '" y="' + (B + 14) + '" class="fig-label" text-anchor="middle">' + esc(lb.adj || lb.b || '') + '</text>';
      inner += '<text x="' + (L - 6) + '" y="' + ((B + T) / 2) + '" class="fig-label" text-anchor="end">' + esc(lb.opp || lb.a || '') + '</text>';
      if (lb.angle) inner += '<text x="' + (L + 22) + '" y="' + (B - 10) + '" class="fig-label" text-anchor="middle">' + esc(lb.angle) + '</text>';
    } else if (shp === 'rect' || shp === 'rectangle') {
      const w = 190, h = 108;
      const x0 = (W - w) / 2, y0 = (H - h) / 2;
      inner = '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" class="fig-shape"/>';
      inner += '<text x="' + (x0 + w / 2) + '" y="' + (y0 - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.w || lb.l || '') + '</text>';
      inner += '<text x="' + (x0 - 10) + '" y="' + (y0 + h / 2) + '" class="fig-label" text-anchor="end">' + esc(lb.h || lb.wid || '') + '</text>';
    } else if (shp === 'square') {
      const s = 150, x0 = (W - s) / 2, y0 = (H - s) / 2;
      inner = '<rect x="' + x0 + '" y="' + y0 + '" width="' + s + '" height="' + s + '" class="fig-shape"/>';
      inner += '<text x="' + (x0 + s / 2) + '" y="' + (y0 - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.s || '') + '</text>';
    } else if (shp === 'circle') {
      const cx = W / 2, cy = H / 2, rad = 84;
      inner = '<circle cx="' + cx + '" cy="' + cy + '" r="' + rad + '" class="fig-shape"/>';
      inner += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + rad) + '" y2="' + cy + '" class="fig-axis"/>';
      inner += '<circle cx="' + cx + '" cy="' + cy + '" r="2.6" class="fig-filled"/>';
      inner += '<text x="' + (cx + rad / 2) + '" y="' + (cy - 6) + '" class="fig-label" text-anchor="middle">' + esc(lb.r || '') + '</text>';
      inner += '<text x="' + cx + '" y="' + (cy + rad + 16) + '" class="fig-label" text-anchor="middle">' + esc(lb.d || '') + '</text>';
    } else if (shp === 'trapezoid') {
      inner = '<polygon points="' + L + ',' + B + ' ' + R + ',' + B + ' ' + (R - 34) + ',' + T + ' ' + (L + 34) + ',' + T + '" class="fig-shape"/>';
      inner += '<text x="' + ((L + R) / 2) + '" y="' + (B - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.b1 || '') + '</text>';
      inner += '<text x="' + ((L + R) / 2) + '" y="' + (T - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.b2 || '') + '</text>';
      inner += '<text x="' + ((R - 34 + R) / 2 + 10) + '" y="' + ((B + T) / 2) + '" class="fig-label" text-anchor="middle">' + esc(lb.h || '') + '</text>';
    } else if (shp === 'parallelogram') {
      const sh = 30;
      inner = '<polygon points="' + (L + sh) + ',' + B + ' ' + R + ',' + B + ' ' + (R - sh) + ',' + T + ' ' + L + ',' + T + '" class="fig-shape"/>';
      inner += '<text x="' + ((L + R) / 2) + '" y="' + (B - 8) + '" class="fig-label" text-anchor="middle">' + esc(lb.b || '') + '</text>';
    } else if (shp === 'hexagon') {
      const cx = W / 2, cy = H / 2, rad = 78;
      let pts = '';
      for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; pts += r1(cx + rad * Math.cos(a)) + ',' + r1(cy + rad * Math.sin(a)) + ' '; }
      inner = '<polygon points="' + pts + '" class="fig-shape"/>';
    } else if (shp === 'cube') {
      return svg(W, H, cubeInner(o), 'act-fig-shape');
    } else if (shp === 'prism') {
      return svg(W, H, prismInner(o), 'act-fig-shape');
    }
    return svg(W, H, inner, 'act-fig-shape');
  }

  function cubeInner(o) {
    const x0 = 70, y0 = 46, s = 120, off = 34;
    const lb = o.labels || {};
    return ''
      + '<polygon points="' + x0 + ',' + (y0 - off) + ' ' + (x0 + s) + ',' + (y0 - off) + ' ' + (x0 + s + off) + ',' + (y0 - off + off) + ' ' + (x0 + off) + ',' + (y0 + off) + '" class="act-cube-top"/>'
      + '<polygon points="' + (x0 + s) + ',' + (y0 - off) + ' ' + (x0 + s + off) + ',' + (y0 - off + off) + ' ' + (x0 + s + off) + ',' + (y0 + s) + ' ' + (x0 + s) + ',' + (y0 + s - off + off) + '" class="act-cube-side"/>'
      + '<rect x="' + x0 + '" y="' + y0 + '" width="' + s + '" height="' + s + '" class="fig-shape"/>';
  }

  function prismInner(o) {
    const x0 = 60, y0 = 50, w = 170, h = 90, d = 40;
    const lb = o.labels || {};
    return ''
      + '<polygon points="' + x0 + ',' + y0 + ' ' + (x0 + w) + ',' + y0 + ' ' + (x0 + w + d) + ',' + (y0 + d) + ' ' + (x0 + d) + ',' + (y0 + d) + '" class="act-cube-top"/>'
      + '<polygon points="' + (x0 + w) + ',' + y0 + ' ' + (x0 + w + d) + ',' + (y0 + d) + ' ' + (x0 + w + d) + ',' + (y0 + h + d) + ' ' + (x0 + w) + ',' + (y0 + h) + '" class="act-cube-side"/>'
      + '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" class="fig-shape"/>';
  }

  // ============================================================
  //  PH SCALE
  //  opts: { value }
  // ============================================================
  function phScale(opts) {
    const o = opts || {};
    const W = 320, H = 90, PAD = 30;
    const v = o.value !== undefined ? Math.max(0, Math.min(14, o.value)) : 7;
    const X = x => PAD + x / 14 * (W - 2 * PAD);
    let inner = '<defs><linearGradient id="figPh" x1="0" y1="0" x2="1" y2="0">'
      + '<stop offset="0%" stop-color="#dc2626"/><stop offset="50%" stop-color="#fbbf24"/>'
      + '<stop offset="100%" stop-color="#2563eb"/></linearGradient></defs>';
    inner += '<rect x="' + PAD + '" y="26" width="' + (W - 2 * PAD) + '" height="16" rx="8" fill="url(#figPh)"/>';
    for (let i = 0; i <= 14; i += 1) {
      inner += '<line x1="' + r1(X(i)) + '" y1="42" x2="' + r1(X(i)) + '" y2="' + (i % 7 === 0 ? 50 : 46) + '" class="fig-tick-line"/>';
      if (i % 7 === 0) inner += '<text x="' + r1(X(i)) + '" y="62" class="fig-tick" text-anchor="middle">' + i + '</text>';
    }
    inner += '<circle cx="' + r1(X(v)) + '" cy="34" r="8" class="fig-point" stroke-width="2"/>';
    inner += '<text x="' + r1(X(v)) + '" y="80" class="fig-label" text-anchor="middle">pH ' + v + '</text>';
    return svg(W, H, inner);
  }

  // ============================================================
  //  PUBLIC API
  // ============================================================
  const RENDERERS = {
    plane, numberline: numberLine, numberLine,
    bar: barChart, barChart,
    line: lineGraph, lineGraph,
    scatter,
    shape: geomFigure, figure: geomFigure, geometry: geomFigure,
    ph: phScale, phScale
  };

  function render(spec) {
    if (!spec || !spec.type) return '';
    const fn = RENDERERS[spec.type];
    const body = fn ? fn(spec) : '';
    if (!body) return '';
    return wrap(body, spec.caption);
  }

  // helper for generators: figure object -> svg string (no wrapper)
  function body(spec) {
    if (!spec || !spec.type) return '';
    const fn = RENDERERS[spec.type];
    return fn ? fn(spec) : '';
  }

  window.ACTVisuals = {
    render,
    body,
    plane, numberLine, barChart, lineGraph, scatter, geomFigure, phScale,
    esc
  };
})();