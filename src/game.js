(() => {
  const s1 = document.getElementById("c"),
    _G = (o) => o.getContext("2d"),
    _D = () => document.createElement("canvas"),
    d = _G(s1),
    G1 = [
      {
        name: "FACIL",
        sb: 8,
        sr: 0.004,
        sm: 4,
        gb: 12,
        gn: 6,
        gp: 0.008,
        gc: 8,
        wt: [45, 17, 6, 20, 8, 4],
      },
      {
        name: "DIFICIL",
        sb: 12,
        sr: 0.006,
        sm: 6,
        gb: 8,
        gn: 5,
        gp: 0.01,
        gc: 8,
        wt: [35, 17, 8, 24, 10, 6],
      },
      {
        name: "INFIERNO",
        sb: 15,
        sr: 0.009,
        sm: 9,
        gb: 6,
        gn: 3,
        gp: 0.006,
        gc: 6,
        wt: [18, 22, 10, 30, 12, 8],
      },
    ];
  function Et(t) {
    return 0.92 - ((t + 0.86) / 1.72) * 0.8;
  }
  const t0 = [
      [6, 10, 28],
      [16, 6, 50],
      [36, 6, 44],
      [50, 8, 14],
    ],
    S = (t, o, e) => (t < o ? o : t > e ? e : t),
    Rt = (t, o, e) => t + (o - t) * e,
    h = Math.round,
    M = Math.floor,
    T = Math.sin,
    N = Math.abs,
    F = Math.min,
    x = Math.max,
    _P = Math.pow,
    _R = Math.random,
    _H = Math.hypot,
    _C = Math.ceil,
    _Q = Math.sqrt,
    _A = Math.atan2,
    _O = Math.cos,
    _I = Math.PI,
    _E = (o, k, f) => o.addEventListener(k, f),
    _N = () => performance.now(),
    _K = (a) => requestAnimationFrame(a);
  Object.defineProperty(d, "a", { set: (v) => (d.globalAlpha = v) });
  d.f = d.fillRect.bind(d);
  let r = 0,
    k = 0,
    at = 1;
  function St() {
    const t = innerWidth,
      o = innerHeight,
      s = x(1, h(t / o >= 1.33 ? o / 180 : t / 200));
    ((r = M(t / s)),
      (k = M(o / s)),
      (s1.width = r),
      (s1.height = k),
      (s1.style.width = r * s + "px"),
      (s1.style.height = k * s + "px"),
      (at = s));
  }
  (_E(window, "resize", St), St());
  let O,
    i1,
    A1 = 1,
    m,
    p1,
    Z,
    D1,
    U,
    H,
    F1,
    y1,
    M1,
    o1,
    d1,
    E1,
    Z1,
    k1,
    z1,
    U1,
    m1,
    P1,
    Y1,
    ct,
    rt,
    L1,
    E = 0,
    Ls = 0,
    C1,
    B1,
    V1,
    j1,
    R1 = Number(Ot("mordisco_best") || 0),
    Q1 = Ot("mordisco_mute") === "1";
  const t1 = new Set();
  let I1,
    v1,
    S1,
    W1 = 10,
    bo;
  function Ot(t) {
    try {
      return localStorage.getItem(t);
    } catch {
      return null;
    }
  }
  function lt(t, o) {
    try {
      localStorage.setItem(t, o);
    } catch {}
  }
  let T1 = null;
  function X1() {
    if (!T1)
      try {
        T1 = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
        T1 = null;
      }
    return (T1 && T1.state === "suspended" && T1.resume(), T1);
  }
  function e1(t, o, e, f, n, w = 0) {
    if (Q1) return;
    const a = X1();
    if (!a) return;
    const T = a.currentTime + w,
      c = a.createOscillator(),
      l = a.createGain();
    ((c.type = e || "square"),
      c.frequency.setValueAtTime(t, T),
      n && c.frequency.exponentialRampToValueAtTime(x(30, t + n), T + o),
      l.gain.setValueAtTime(f || 0.05, T),
      l.gain.exponentialRampToValueAtTime(1e-4, T + o),
      c.connect(l).connect(a.destination),
      c.start(T),
      c.stop(T + o));
  }
  let mi = 0,
    nx = 0;
  function mu() {
    if (O !== "PLAY" || Q1 || !T1) return;
    const d = T1.currentTime;
    nx < d && (nx = d);
    for (; nx < d + 0.12; nx += 0.19 - 0.003 * bo.n, mi++) {
      const w = nx - d,
        k = mi & 7,
        b = (mi >> 3) & 3,
        g = mi >> 5,
        r = [0, -4, -2, -5][b],
        s = 0.17 - 0.003 * bo.n,
        q = [0, b ? 4 : 3, 7, 12, b ? 16 : 15];
      (e1(73.4 * 2 ** ((r + ((k & 3) > 2) * 12) / 12), s, "square", 0.04, 0, w),
        (k & 3) < 1 && e1(150, 0.12, "sine", 0.1, -120, w),
        (k & 3) == 2 && e1(300, 0.09, "sawtooth", 0.04, -250, w),
        m >= 1200 &&
          g % 4 < 3 &&
          e1(
            293.7 * 2 ** ((r + q[(g & 1 ? "23432434" : "01210212")[k]]) / 12),
            s * 0.9,
            "square",
            0.025,
            0,
            w,
          ));
    }
  }
  const SN = {
    switch: [[620, 0.08, "triangle", 0.045, 320]],
    coin: [[900, 0.1, "square", 0.04, 420]],
    hit: [[120, 0.3, "sawtooth", 0.08, -70]],
    bite: [[70, 0.35, "sawtooth", 0.06, -20]],
    over: [[90, 0.9, "sawtooth", 0.09, -50]],
    start: [[440, 0.12, "square", 0.05, 220]],
  };
  function n1(t) {
    (SN[t] || []).map((a) => e1(...a));
  }
  function hu(...q) {
    ((U = F(3, U + 1)),
      (H = 8),
      (y1 = 0.18),
      (o1 = 0.5),
      (M1 = 1),
      (d1 = 0.25),
      q.map(n1),
      U >= 3 && tt());
  }
  function It() {
    ((O = "PLAY"),
      (i1 = "SIDE"),
      (m = 0),
      (p1 = 0),
      (Z = 0.5),
      (D1 = 0),
      (U = 0),
      (H = 0),
      (F1 = 0),
      (y1 = 0),
      (M1 = 0),
      (o1 = 0),
      (d1 = 0),
      (E1 = 0),
      (Z1 = 2.4),
      (k1 = 0),
      (z1 = 0),
      (U1 = 0.8),
      (m1 = []),
      (P1 = []),
      (I1 = []),
      (v1 = 0),
      (S1 = []),
      (Y1 = 25),
      (bo = { s: 4, t: 1.5, l: [], n: 0, d: 0, on: 0, h: 0, a: 0 }),
      (ct = 0),
      (rt = 0),
      (L1 = 0),
      (C1 = 1),
      (B1 = 6),
      (V1 = 10),
      (j1 = 28),
      t1.clear());
  }
  function $1() {
    (X1(), It(), (mi = 0), n1("start"));
  }
  function Tt() {
    O !== "TITLE" && O !== "OVER"
      ? O !== "PAUSE"
        ? O === "PLAY" &&
          ((i1 = i1 === "SIDE" ? "FRONT" : "SIDE"), (z1 = 0.16), n1("switch"))
        : (O = "PLAY")
      : $1();
  }
  function tt() {
    ((O = "EATEN"),
      (E1 = 0),
      (Ls = i1 === "SIDE" && F1 < -0.05 * r ? 1 : 0),
      (o1 = 0.65),
      (R1 = x(R1, L1)),
      lt("mordisco_best", String(R1)),
      n1("over"));
  }
  function o0(t) {
    ((t.h = !0),
      (t.t === "bar"
        ? i1 === "FRONT"
          ? t.a > 0.3
          : Z > t.b + 0.03 || Z < t.a - 0.03
        : t.t === "slot"
          ? i1 === "FRONT" && N(p1 - t.g) < t.w + 0.03
          : i1 === "SIDE") ||
        hu("hit"));
  }
  function bu(t) {
    if (m < 1200 || bo.d) return;
    bo.on = 1;
    if (bo.a < 1) {
      bo.a = F(1, bo.a + t / 1.2);
      return;
    }
    if ((bo.t -= t) > 0) {
      if (bo.s === 1 || bo.s === 2) {
        const c = bo.l.some((i) => N(Z - 0.84 + 0.16 * i) < 0.08),
          q = bo.s === 1 ? bo.t / 0.3 : 0;
        c &&
          (i1 !== "SIDE" || q * r <= 0.3 * r + F1) &&
          !bo.h &&
          ((bo.h = 1), hu("hit"));
      }
      return;
    }
    const s = (bo.s + 1) % 5;
    if (s === 0) {
      const k = A1 > 1 && bo.n > 2 ? 2 : 1,
        L = [];
      for (; L.length < k;) {
        const c = M(5 * _R());
        !L.includes(c) && (L.length || !bo.l.includes(c)) && L.push(c);
      }
      ((bo.l = L), bo.n++, (bo.h = 0));
    }
    s === 4 && bo.n >= 10
      ? ((bo.d = 1), (bo.on = 0))
      : ((bo.s = s),
        (bo.t = [[0.8, 0.6, 0.45][A1], 0.3, 0.35, 0.45, [0.5, 0.35, 0.25][A1]][s]));
  }
  function tn(a, b, c, e, u0, u1, ph, wv) {
    const dx = c - a,
      dy = e - b,
      l = _H(dx, dy) || 1,
      n = F(90, M(l / 2.5) + 2);
    for (const g of [0, 1, 2])
      for (let j = 0; j <= n; j++) {
        const u = j / n,
          w = T(7 * u - 4 * E + ph) * wv * ((u0 + u1) / 2) * u,
          p = a + dx * u - (dy / l) * w,
          y = b + dy * u + (dx / l) * w,
          q = (u0 + (u1 - u0) * u) / 2 + 1 - g;
        (g > 1
          ? i(p - q, y - 1.5 * q, q, q, "#c8408a")
          : i(p - q, y - q, 2 * q, 2 * q, g ? "#8a1c58" : q1),
          g && (j + 4 * E) % 5 < 1 && i(p - 1, y + 0.2 * q, 2, 2, "#ff7096"));
      }
  }
  let bk = 0,
    bc;
  function bm(R, f, l) {
    if (bk !== 2 * R + f) ((bk = 2 * R + f), (bc = {}));
    if (bc[l]) return bc[l];
    const Z = h(3.4 * R),
      c = _D(),
      g = ((c.width = c.height = Z), _G(c)),
      o = Z / 2,
      P = f
        ? [[0, -0.3, 0.85, 1.05], [0, 0.3, 0.95, 0.7]]
        : [[0.3, -0.3, 0.8, 1.05], [-0.15, 0.25, 0.8, 0.8]],
      S = (X, Y) => {
        let b = 9,
          a = 0,
          z = 0;
        for (const e of P) {
          const u = ((X + 0.5 - o) / R - e[0]) / e[2],
            v = ((Y + 0.5 - o) / R - e[1]) / e[3],
            s = u * u + v * v;
          s < b && ((b = s), (a = u), (z = v));
        }
        return [b, a, z];
      };
    for (let Y = 0; Y < Z; Y++)
      for (let X = 0; X < Z; X++) {
        const [b, u, v] = S(X, Y),
          A = (X + 0.5 - o) / R,
          B = (Y + 0.5 - o) / R;
        let p;
        if (b < 1) {
          let n = M(2 + 2.2 * (0.6 * _Q(1 - b) - 0.5 * u - 0.6 * v) + 0.12 * ([0, 2, 3, 1][(X & 1) + 2 * (Y & 1)] - 1.5));
          for (const q of [[0.15, -0.9, 0.12], [0.5, -0.6, 0.1], [-0.05, -0.5, 0.08], [0.4, -0.15, 0.1], [0.7, -0.9, 0.07], [0.1, -0.15, 0.06], [0.3, -0.8, 0.1]])
            ((f ? N(A) : A) - q[0]) ** 2 + (B - q[1]) ** 2 < q[2] * q[2] && n++;
          p = ["#301", "#614", "#816", "#b37", "#e69", "#fad"][x(0, F(5, n))];
          for (const e of f ? [-0.42, 0.42] : [-0.5]) {
            const a = A - e,
              c = B - (f ? 0.2 : 0.1),
              s = a * a + c * c;
            s < 0.06 && (p = l ? (N(c) < 0.04 ? "#301" : p) : s < 0.03 ? (N(a) < 0.13 && N(c) < 0.04 ? "#100" : (a + 0.1) ** 2 + (c + 0.1) ** 2 < 0.004 ? "#fff" : "#fe6") : "#102");
          }
        } else [1, -1].some((j) => S(X + j, Y)[0] < 1 || S(X, Y + j)[0] < 1) && (p = q1);
        p && ((g.fillStyle = p), g.fillRect(X, Y, 1, 1));
      }
    return (bc[l] = c);
  }
  function bb(f) {
    if (!bo.on) return;
    const R = h((f ? 0.11 : 0.26) * k);
    let c = f ? r / 2 : h(r - 0.75 * R);
    const y = f ? 0.46 * k : 0.45 * k;
    if (f) d.a = 0.85 * F(1, bo.a * 1.5);
    else c += (1 - bo.a) * R * 2.2;
    for (let j = 0; j < 4; j++) {
      const s = j - 1.5;
      f
        ? tn(c + 0.6 * R * s, y + 0.6 * R, c + 1.7 * R * s + 3 * T(2 * E + j), y + 1.6 * R, 0.08 * k, 0.03 * k, j, 0.3)
        : tn(c - 0.3 * R, y + 0.5 * R * s, c - R * (1.2 + 0.4 * (j & 1)), y + 1.1 * R * s + 4 * T(2 * E + j), 0.09 * k, 0.04 * k, j, 0.3);
    }
    const B = bm(R, f, E % 4 < 0.15);
    (d.drawImage(B, h(c - B.width / 2), h(y + 0.1 * R - B.width / 2 + 1.5 * T(2 * E))), (d.a = 1));
  }
  function bq(f) {
    if (!bo.on || bo.s > 3) return;
    const s = bo.s,
      e = s === 1 ? bo.t / 0.3 : s === 2 ? 0 : s === 3 ? 1 - bo.t / 0.45 : 1;
    for (const c of bo.l)
      if (!f) {
        const y = h1(0.84 - 0.16 * c),
          g = 0.1152 * k;
        s
          ? tn(r + 4, y, r * e, y, g, 0.8 * g, c, 0.2)
          : i(0, y - g / 2, r, g, "rgba(255,200,60,.3)");
      } else {
        const p = -0.688 + 0.344 * c,
          v = K1(3 + (s ? 53 * e : 0)),
          x0 = r / 2 + p * v.hw * 0.86,
          w = 0.344 * v.hw * 0.86,
          y = 0.46 * k + 0.414 * k * v.s;
        s
          ? tn(r / 2, 0.52 * k, x0, 0.46 * k + 0.37 * k * v.s, 0.03 * k, w, c, 0.1)
          : i(x0 - w / 2, y, w, k - y, "rgba(255,200,60,.3)");
      }
  }
  function it() {
    return F(1, U / 3 + (H > 0 ? F(0.22, ((8 - H) / 8) * 0.22) : 0));
  }
  function e0(t) {
    if (((E += t), v1 > 0 && (v1 -= t), O === "PLAY")) {
      z1 > 0 && (z1 -= t);
      const o = t0[F(3, C1 - 1)],
        e = F(1, 1.5 * t);
      ((B1 += (o[0] - B1) * e),
        (V1 += (o[1] - V1) * e),
        (j1 += (o[2] - j1) * e),
        M1 > 0 && (M1 = x(0, M1 - 1.8 * t)),
        o1 > 0 && (o1 = x(0, o1 - 1.6 * t)),
        d1 > 0 && (d1 = x(0, d1 - 2.2 * t)),
        U > 0
          ? ((U1 -= t), U1 <= 0 && (U1 = Rt(1.3, 0.5, U / 3)))
          : (U1 = 0.6),
        H > 0 &&
          ((H -= t),
          H <= 0 && ((H = 0), U > 0 && (U--, U > 0 && (H = 8)))),
        y1 > 0 && (y1 = x(0, y1 - t)));
      const f = H > 0 ? x(0.4, 1 - 0.2 * U) : 1;
      if (
        ((Z1 -= t),
        Z1 <= 0 && k1 === 0 && ((k1 = 1e-4), n1("bite")),
        k1 > 0 && ((k1 += t), k1 >= 0.5 && ((k1 = 0), (Z1 = Rt(4, 1.8, it())))),
        y1 <= 0)
      ) {
        if (i1 === "SIDE") {
          let l = 0;
          (t1.has("KeyW") && (l += 1),
            t1.has("KeyS") && (l -= 1),
            (Z = S(Z + 0.95 * l * t, 0.12, 0.92)),
            (p1 = ((0.92 - Z) / 0.8) * 1.72 - 0.86));
          const s = H > 0 ? (0.01 + 0.03 * U) * r : 0,
            p = t1.has("KeyD") ? 0.08 * r : 0;
          ((F1 = S(F1 + (p - s) * t, -0.13 * r, 0.05 * r)),
            F1 <= -0.13 * r && tt());
        } else {
          let l = 0;
          (t1.has("KeyA") && (l -= 1),
            t1.has("KeyD") && (l += 1),
            (p1 = S(p1 + 2.5 * l * f * t, -0.86, 0.86)),
            (Z = Et(p1)));
        }
        const n = G1[A1],
          a = (n.sb + F(m * n.sr, n.sm)) * f;
        ((D1 = m), (m += a * t), (W1 = a));
        const c = M(m / 300) + 1;
        (c > C1 && (C1 = c),
          (L1 = M(m) + 10 * rt),
          (function () {
            const l = G1[A1];
            for (; Y1 < (bo.d ? m + 70 : F(m + 70, 1200));) {
              let s;
              if (ct < 3) s = "bar";
              else {
                const p = 100 * _R(),
                  g = l.wt;
                s =
                  p < g[0]
                    ? "bar"
                    : p < g[0] + g[1]
                      ? "spike"
                      : p < g[0] + g[1] + g[2]
                        ? "reward"
                        : p < g[0] + g[1] + g[2] + g[3]
                          ? "slot"
                          : p < g[0] + g[1] + g[2] + g[3] + g[4]
                            ? "medusa"
                            : "piraña";
              }
              (s === "medusa" && C1 < 2
                ? (s = "")
                : s === "piraña" && C1 < 3 && (s = ""),
                s === "reward"
                  ? P1.push({ z: Y1, y: 0.25 + 0.5 * _R(), g: !1 })
                  : s === "medusa"
                    ? I1.push({
                        z: Y1,
                        y: 0.14 + 0.55 * _R(),
                        v: 0.05 + 0.035 * _R(),
                        p: 6.28 * _R(),
                        h: 0,
                        e: 0,
                      })
                    : s === "piraña"
                      ? S1.push({
                          z: Y1,
                          y: 0.14 + 0.62 * _R(),
                          p: 6.28 * _R(),
                          s: 0,
                          k: 0,
                          u: 0,
                          v: 0,
                        })
                      : s &&
                        (function () {
                          const p = {
                            z: Y1,
                            t: s,
                            h: !1,
                            d: M(99 * _R()),
                          };
                          (s === "bar"
                            ? ((p.l = _R() < 0.5),
                              (p.a = p.l ? 0 : 0.62),
                              (p.b = p.l ? 0.38 : 1))
                            : s === "slot" &&
                              ((p.g = 1.4 * _R() - 0.7),
                              (p.w = 0.3 + 0.1 * _R())),
                            m1.push(p));
                        })(),
                ct++,
                (Y1 +=
                  l.gb + _R() * l.gn + F(m * l.gp, l.gc)));
            }
          })());
        for (const l of m1) !l.h && D1 < l.z && m >= l.z && o0(l);
        for (const l of P1)
          !l.g &&
            D1 < l.z &&
            m >= l.z &&
            i1 === "SIDE" &&
            N(Z - l.y) < 0.28 &&
            ((l.g = !0),
            rt++,
            U > 0 && H > 0 && (H = x(0.001, H - 2)),
            n1("coin"));
        ((m1 = m1.filter((l) => l.z > m - 25)),
          (P1 = P1.filter((l) => l.z > m - 25 && !l.g)),
          P0(t),
          bu(t),
          E0(t));
      }
    } else
      O === "EATEN"
        ? (o1 > 0 && (o1 = x(0, o1 - 1.6 * t)),
          (E1 = F(1, E1 + t / (Ls ? 1.6 : 1))),
          Ls === 1 && E1 > 0.4 && ((Ls = 2), (o1 = 0.6), n1("bite")),
          E1 >= 1 && (O = "OVER"))
        : O === "OVER" && (E1 = x(0, E1 - 1.5 * t));
  }
  const x1 = "#0a1220",
    st = "#15263a",
    J1 = "#233f58",
    ot = "#3a6781",
    kt = "#6ba3b4",
    xt = "#3fae3a",
    et = "#7fdcf0",
    nt = "#e4fdff",
    f1 = "#0b1433",
    ht = "#112250",
    a1 = "#2b4c92",
    W = "#05060f",
    q1 = "#6fe9ff",
    n0 = [58, 103, 129],
    f0 = [16, 30, 46],
    a0 = [107, 163, 180],
    zt = [8, 16, 28],
    w = (t) => (t = 43758.5453 * T(127.1 * t + 311.7)) - M(t),
    L = (t, o, e) => "rgb(" + t.map((f, n) => h(f + (o[n] - f) * e)) + ")";
  function i(t, o, e, f, n) {
    n && (d.fillStyle = n);
    const a = h(t),
      c = h(o);
    d.f(a, c, h(t + e) - a, h(o + f) - c);
  }
  function X(t, o, e, f, n) {
    (d.save(),
      (d.shadowColor = f),
      (d.shadowBlur = e),
      (d.a = n),
      (d.fillStyle = f),
      d.beginPath(),
      d.arc(t, o, e, 0, 6.283),
      d.fill(),
      d.restore());
  }
  function u1(t, o) {
    const e = t[0].length,
      f = _D();
    ((f.width = e), (f.height = t.length));
    const n = _G(f);
    return (
      t.forEach((a, c) => {
        for (let l = 0; l < e; l++) {
          const s = o[a[l]];
          s && ((n.fillStyle = s), n.fillRect(l, c, 1, 1));
        }
      }),
      f
    );
  }
  function N1(t, o, e) {
    d.drawImage(t, h(o), h(e));
  }
  const c0 = [...Array(43)].map((_, i) =>
    parseInt(
      "8odl9qbabl7yo13o10bcbi5pn133myi3xeg7iy5l7x8kql9g8kzl9pb66n0yi27i22i65hwthw2mnbodr8t3jhjjgui4po0ebfzmmqohboge0000020sw3ok0cg77m03k".slice(
        i * 3,
        i * 3 + 3,
      ),
      36,
    ),
  );
  function Pt(t, o) {
    return 4 * t.length * o - o;
  }
  function V(t, o, e, f, n, a, c) {
    t = String(t).toUpperCase();
    let l = h(a === "c" ? o - Pt(t, f) / 2 : a === "r" ? o - Pt(t, f) : o);
    e = h(e);
    const s = (p, g, b) => {
      d.fillStyle = b;
      for (let y = 0; y < t.length; y++) {
        const A =
          c0["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .:/-!*".indexOf(t[y])];
        if (A)
          for (let I = 0; I < 15; I++)
            (A >> (14 - I)) & 1 &&
              d.f(
                l + p + 4 * y * f + (I % 3) * f,
                e + g + ((I / 3) | 0) * f,
                f,
                f,
              );
      }
    };
    if (c)
      for (const p of [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
      ])
        s(p[0] * (f > 4 ? 2 : 1), p[1] * (f > 4 ? 2 : 1), c);
    s(0, 0, n);
  }
  const Lt = {
      k: "#0d1126",
      b: "#b4c2dc",
      h: "#eef4ff",
      d: "#7384a8",
      o: "#e6701a",
      O: "#ffa63a",
      y: "#f2c230",
      e: "#0d1126",
    },
    r0 = { ...Lt, b: "#dba3b6", h: "#ffe0e8", d: "#a85c7c" },
    tl = ["k...", "kk..", "kok.", "kOok", "kok.", "kk..", "k..."],
    l0 = ["....", "....", ...tl],
    i0 = ["....", ...tl, "...."],
    s0 = [
      "..kkkk......",
      ".koOOok.....",
      "kkkddkkkk...",
      "kbbbbbbbbkk.",
      "bbhhbbbbbbkk",
      "bbbbbbbbyykk",
      "dbbbbbbbyeyk",
      "kdbbooobbykk",
      ".kkdoOodkkk.",
    ],
    Ct = (t) =>
      [l0, i0].map((o) =>
        u1(
          s0.map((e, f) => o[f] + e),
          t,
        ),
      ),
    k0 = [Ct(Lt), Ct(r0)],
    Nt = [
      "...kkkk...",
      "..koOOok..",
      "..kbhhbk..",
      ".kbbhbbdk.",
      ".kbbbbbdk.",
      ".kdbbbbdk.",
      "..kddddk..",
      ".kokkkkok.",
      "kOokkkkoOk",
      "kok....kok",
    ],
    p0 = [u1(Nt, Lt), u1(Nt, r0)],
    Gt = [".kk.kk.", "krhrrrk", "krrrrrk", ".krrrk.", "..krk..", "...k..."],
    d0 = [
      u1(Gt, { k: "#2a0a1c", r: "#ff4d6d", h: "#ffc2d0" }),
      u1(Gt, { k: "#4a1c34", r: "#1a0a16" }),
    ],
    u0 = u1(
      [
        ".X....",
        "X.X...",
        "X..X..",
        "X...X.",
        "X....X",
        "X...X.",
        "X..X..",
        "X.X...",
        ".X....",
      ],
      { X: "#14f03c" },
    ),
    g0 = [
      {
        k: "#6a1636",
        r: "#c43058",
        p: "#ff7b9a",
        l: "#ffb4c4",
        w: "#ffe4ea",
        o: "#e0503c",
        t: "#b8384c",
        T: "#e0626a",
      },
      {
        k: "#0a3a5a",
        r: "#1a62b8",
        p: "#3ac8ff",
        l: "#a8f0ff",
        w: "#fff",
        o: "#ffe14a",
        t: "#2a8fd0",
        T: "#a8f0ff",
      },
    ],
    b0 = [
      "...rrrrr...",
      "..rplllpr..",
      ".rpwwllppr.",
      "rpwlppppppr",
      "rpppppppppr",
      "rrppppppprr",
      ".krkokokrk.",
    ],
    A0 = [
      [
        "..t.t.t.t..",
        "..T.t..T.t.",
        ".t..T.t..T.",
        "..t.t..t...",
        ".T...t..T..",
        "..t.....t..",
      ],
      [
        ".t.t.t.t...",
        ".T.t..T.t..",
        "..t..T.t..T",
        ".t.t..t....",
        "..T...t..T.",
        ".t.....t...",
      ],
    ],
    Dt = g0.map((t) => A0.map((o) => u1(b0.concat(o), t))),
    Ft = {
      k: "#0d1126",
      G: "#2a7a3e",
      g: "#58bf48",
      l: "#b4f06a",
      r: "#d9532c",
      R: "#8c2a1c",
      f: "#26385a",
      F: "#6b86bd",
      w: "#f4fbff",
      e: "#ff2f2f",
      p: "#1a0408",
    },
    m0 = [
      ".......kkkk...",
      "......kfFFfk..",
      "....kkkGGfffk.",
      "..kGGGGGGGGGGk",
      ".kGlllllGGGGGG",
      "kGlepggggggggG",
      "kwwkgggggggggg",
      "kwkwkgggRRrrrr",
      ".kwkkrrrrrrrrr",
      "..kkkkRRrrrrrk",
      "...kkkkkkkkkk.",
      "..............",
    ],
    w0 = ((a) => [a, a.map((r, i) => (i % 10 === 1 ? "....." : r))])([
      ".....",
      "....k",
      "...kk",
      "..kFk",
      ".kfFk",
      "kfFfk",
      "kffFk",
      "kfFfk",
      ".kfFk",
      "..kFk",
      "...kk",
      "....k",
    ]),
    y0 = [0, 1].map((t) =>
      w0.map((o) =>
        u1(
          m0.map((e, f) => ((e += o[f]), t ? e.replace(/[ep]/g, "k") : e)),
          Ft,
        ),
      ),
    ),
    M0 = [0, 1].map((t) =>
      u1(
        [
          "....kkk....",
          "...kGGGk...",
          "..kGllGGk..",
          ".kGlgggggk.",
          "kfGegggeGfk",
          "kFgpgggpgFk",
          ".kkwkwkwkk.",
          "..kwwwwwk..",
          "..kkRrRkk..",
          "....kkk....",
        ].map((o) => (t ? o.replace(/[ep]/g, "k") : o)),
        Ft,
      ),
    );
  function E0(t) {
    for (const o of S1) {
      const e = m - o.z,
        f = 20 * (Z - o.y);
      if (((o.k += t), o.s === 0)) {
        if (e < 0 && _H(e, f) < 13 + 0.5 * W1) {
          const n = W1,
            a = 28 + n,
            c = e * e + f * f,
            l = x(
              0.05,
              (2 * e * n + _Q(4 * (a * a * c - n * n * f * f))) /
                (2 * (a * a - n * n)),
            );
          ((o.u = (e + n * l) / l),
            (o.v = f / l / 20),
            (o.x = m + n * l),
            (o.j = Z),
            (o.s = 1),
            (o.k = 0),
            e1(900, 0.12, "square", 0.03, -500));
        }
      } else if (o.s === 1) {
        o.k > 0.3 && ((o.s = 2), e1(160, 0.25, "sawtooth", 0.05, -80));
      } else ((o.z += o.u * t), (o.y += o.v * t));
      !o.q &&
        _H(m - o.z, 20 * (Z - o.y)) < 2.6 &&
        ((o.q = 1), hu("bite", "hit"));
    }
    S1 = S1.filter((o) => !o.q && o.z > m - 25 && o.z < m + 120);
  }
  function R0(t) {
    const o = t(m),
      e = h1(Z);
    for (const f of S1) {
      if (f.z < m - 16 || f.z > m + 45) continue;
      let n = t(f.z),
        a = h1(f.y) + T(1.7 * E + f.p),
        c = o - n,
        l = e - a;
      const s = f.s;
      s
        ? n > t(f.x) && pl(n, a, t(f.x), h1(f.j))
        : m < f.z &&
          _H(m - f.z, 20 * (Z - f.y)) < 30 + 0.5 * W1 &&
          pl(n, a, o, e, 1);
      s === 2
        ? ((c = ((f.u - W1) * r) / 60), (l = -f.v * 0.72 * k))
        : s === 1 && ((n += h(2 * T(90 * E))), (a += h(2 * T(77 * E))));
      const p = c > 0 ? -1 : 1,
        g = h(3 * (_A(l, -N(c)) - _I)) / 3,
        b = _H(c, l) || 1;
      (s === 1 && X(n, a, 11, "#ff2a2a", 0.1),
        s === 2 &&
          ((d.a = 0.4),
          dt(
            n - (c / b) * 10,
            a - (l / b) * 10,
            n - (c / b) * 24,
            a - (l / b) * 24,
            "#bff",
          ),
          (d.a = 1)),
        d.save(),
        d.translate(h(n), h(a)),
        d.scale(p, 1),
        d.rotate(g),
        d.drawImage(
          y0[(E + f.p) % 3.3 < 0.15 ? 1 : 0][
            M((s === 2 ? 18 : 5) * E + f.p) & 1
          ],
          -9,
          -6,
        ),
        d.restore());
    }
  }
  function S0(t, o, e, f) {
    const n = K1(o),
      a = n.s * 1.375,
      c = S((52 - o) / 22, 0, 1) * S((o + 3) / 5, 0, 1);
    if (c < 0.02) return;
    const l =
        e +
        S(1.154 - 2.1 * t.y, -0.86, 0.86) * n.hw * 0.86 +
        (t.s === 1 ? h(2 * T(90 * E)) : 0),
      s = f + 0.81 * n.hh + 1.2 * a * T(2.4 * E + t.p),
      p = x(2, h(11 * a)),
      g = x(2, h(10 * a * (1 + 0.07 * T(5 * E + t.p))));
    (t.s === 1 && X(l, s, h(8 * a) + 1, "#ff2a2a", 0.1 * c),
      (d.a = c),
      d.drawImage(
        M0[(E + t.p) % 3.3 < 0.15 ? 1 : 0],
        h(l - p / 2),
        h(s - g / 2),
        p,
        g,
      ),
      (d.a = 1));
  }
  const O0 = u1(
    [
      ".......k.......",
      "......kpk......",
      "......kpk......",
      ".....kprrk.....",
      ".....kpwrk.....",
      "....kprwrrk....",
      "....kprwrrk....",
      "...kprrwrrrk...",
      "...kprrrrrrk...",
      "..kprrrwrrrrk..",
      "..kprrrrrrrrk..",
      ".kprrrrrrrrrrk.",
      "kkkkkkkkkkkkkkk",
    ],
    { k: "#2a0a14", r: "#e8182c", p: "#ff7080", w: "#fff" },
  );
  function I0() {
    const t = K1(3),
      o = h(0.1 * k),
      e = h(k / 36);
    for (const f of S1) {
      if (
        (f.s !== 1 && f.s !== 2) ||
        f.z < m - 1 ||
        (f.s === 1 && M(12 * E) & 1)
      )
        continue;
      const n = h(r / 2 + S(1.154 - 2.1 * f.y, -0.86, 0.86) * t.hw * 0.86);
      X(n, o + 6, 24, "#ff2a2a", 0.06 + 0.03 * T(12 * E));
      for (let a = 0; a < 10; a++)
        ((d.a = 0.08 * (1 - a / 10)),
          i(n - 1, o + 14 + a * e, 3, e, "#ff2a2a"));
      ((d.a = 1), N1(O0, n - 7, o));
    }
  }
  function pl(t, o, e, f, p) {
    const n = x(1, _C(x(N(e - t), N(f - o))));
    d.a = p ? 0.75 : 0.9;
    for (let c = 0; c <= n; c++)
      (!p || (((c - M(20 * E)) % 6) + 6) % 6 < 2) &&
        i(t + ((e - t) * c) / n, o + ((f - o) * c) / n, 2, 2, "#ff2a2a");
    d.a = 1;
  }
  function dt(t, o, e, f, n) {
    const a = x(1, _C(x(N(e - t), N(f - o))));
    for (let c = 0; c <= a; c++)
      i(t + ((e - t) * c) / a, o + ((f - o) * c) / a, 1, 1, n);
  }
  function ut(t, o, e, f, n, a) {
    for (let c = 0; c < e; c++) {
      if (w(9 * c + 1.7 * n) < 0.7 * a) continue;
      let l = 6.283 * w(4.1 * c + 0.37 * n),
        s = t,
        p = o;
      const g = 4 + ((3 * w(c + n)) | 0);
      for (let b = 0; b < g; b++) {
        l += 2.6 * (w(5 * c + 2.3 * b + n) - 0.5);
        const y = s + ((_O(l) * f) / g) * 1.5,
          A = p + ((T(l) * f) / g) * 1.5;
        (dt(s, p, y, A, "#38b0f0"), i(y, A, 1, 1, "#e8fdff"), (s = y), (p = A));
      }
    }
  }
  function Ut(t, o) {
    if (v1 <= 0) return;
    const e = 1 - v1 / 0.55,
      f = M(22 * E);
    (X(t, o, h(8 + 9 * (1 - e)), "#ffe14a", 0.16 * (1 - e)),
      X(t, o, 12, "#3fe6ff", 0.08 * (1 - e)),
      ut(t, o, 7, 12 + 16 * (1 - e), f, e));
    for (let n = 0; n < 14; n++) {
      if (w(5 * n + f) < 0.8 * e) continue;
      const a = 6.283 * w(7.3 * n + 1),
        c = 3 + (12 + 30 * w(3.1 * n + 5)) * _P(e, 0.55),
        l = t + _O(a) * c,
        s = o + T(a) * c * 0.85 + 9 * e * e,
        p = 1 + 3 * (1 - e),
        g = e < 0.35 ? "#fff4c0" : e < 0.7 ? "#ffd23a" : "#ff8a1e";
      (dt(l, s, l - _O(a) * p, s - T(a) * p, g), i(l, s, 1, 1, "#ff8a1e"));
    }
  }
  function T0(t) {
    for (const o of I1) {
      if (o.z < m - 4 || o.z > m + 45) continue;
      const e = t(o.z),
        f = h1(o.y) + 1.5 * T(2.4 * E + o.p),
        n = o.h && (o.e > 0 || M(9 * E + o.p) % 4 == 0) ? 1 : 0;
      (X(e, f, 12, n ? "#3fe6ff" : "#ff4d7d", n ? 0.1 : 0.05),
        N1(Dt[n][M(3 * E + o.p) & 1], e - 5, f - 6),
        n && ut(e, f, 2, 9, M(14 * E), 0));
    }
  }
  function x0(t, o, e, f) {
    const n = K1(o),
      a = n.s * 1.375,
      c =
        S((52 - o) / 22, 0, 1) *
        S(o / 3, 0, 1) *
        S((1.25 - N(t.x)) / 0.3, 0, 1);
    if (c < 0.02) return;
    const l = e + t.x * n.hw * 0.86,
      s = f + 0.81 * n.hh + 1.2 * a * T(2.4 * E + t.p),
      p = t.h && (t.e > 0 || M(9 * E + t.p) % 4 == 0) ? 1 : 0,
      g = x(2, h(11 * a)),
      b = x(2, h(13 * a));
    (X(l, s, h(9 * a) + 1, p ? "#3fe6ff" : "#ff4d7d", (p ? 0.1 : 0.05) * c),
      (d.a = c),
      d.drawImage(Dt[p][M(3 * E + t.p) & 1], h(l - g / 2), h(s - b / 2), g, b),
      (d.a = 1),
      p && c > 0.3 && ut(l, s, 2, 9 * a, M(14 * E), 0));
  }
  function z0(t) {
    ((t.h = 1),
      (t.e = 0.8),
      (v1 = 0.55),
      hu("hit"));
  }
  function P0(t) {
    for (const o of I1)
      ((o.y = F(0.96, o.y + o.v * t)),
        (o.x = S(1.154 - 2.1 * o.y, -0.86, 0.86)),
        o.e > 0 && (o.e -= t),
        !o.h &&
          D1 < o.z &&
          m >= o.z &&
          (i1 === "SIDE" ? N(Z - o.y) < 0.09 : N(p1 - o.x) < 0.13) &&
          z0(o));
    I1 = I1.filter((o) => o.z > m - 25);
  }
  function h1(t) {
    return 0.86 * k - t * k * 0.72;
  }
  const ft = (t) =>
      h(h1(0.08 + 0.045 * T(0.12 * t) + 0.03 * T(0.031 * t + 1.7))),
    gt = (t) => h(h1(1) - 0.02 * k + T(0.09 * t + 2) * k * 0.015);
  function Yt(t, o, e, f, n, a, c) {
    const l = t * (r / 60) * o + E * e,
      s = M(l / f) - 1,
      p = M((l + r) / f) + 1,
      g = a.length - 1;
    for (let b = s; b <= p; b++) {
      if (w(1.7 * b + n) < 0.22) continue;
      const y = h(f * (0.5 + 0.45 * w(b + 2 * n))),
        A = b * f + (f - y) * w(3 * b + n),
        I = k * (0.36 + 0.28 * w(b + 4 * n)) + 1.5 * T(0.6 * E + 2 * b + n),
        C = k * (0.2 + 0.24 * w(5 * b + n));
      for (let q = 0; q < y; q++) {
        const g1 = h(A - l) + q;
        if (g1 < 0 || g1 >= r) continue;
        const c1 = q / y,
          Y = _P(1 - _P(N(2 * c1 - 1), 2.6), 0.55),
          u = M((A + q) / 2),
          R = S(Y + 0.3 * (w(u + 7 * n + b) - 0.5), 0, 1),
          r1 = S(Y + 0.3 * (w(u + 3 * n + 5 * b) - 0.5), 0, 1),
          v = h(I - C * R),
          K = h(I + C * r1);
        for (let $ = v, G = 0; $ < K; $ += 6, G++) {
          let Q =
            M(2.6 * w(9 * M((A + q) / 8 + $ / 14) + 3 * b + n)) +
            (c1 < 0.5 ? 1 : 0) -
            ($ > I + 0.5 * C ? 1 : 0);
          ((d.fillStyle = a[S(Q, 0, g)]), d.f(g1, $, 1, F(6, K - $)));
        }
        c && K > v && (i(g1, v, 1, 1, c), i(g1, K - 1, 1, 1, a[0]));
      }
    }
  }
  function bt(t, o) {
    const e = r / 60,
      f = 0.3 * r,
      n = t * e,
      a = [B1, V1, j1];
    for (let c = 0; c < 16; c++) {
      const l = 1 - N((c / 15) * 2 - 1),
        s = 0.5 + 1.5 * l * l;
      i(
        0,
        (k * c) / 16,
        r,
        k / 16 + 1,
        "rgb(" + h(B1 * s) + "," + h(V1 * s) + "," + h(j1 * s) + ")",
      );
    }
    (Yt(
      t,
      0.1,
      1.2,
      70,
      1,
      [
        L(a, [0, 0, 0], 0.5),
        L(a, [22, 40, 60], 0.28),
        L(a, [40, 70, 96], 0.24),
      ],
      null,
    ),
      (function () {
        d.fillStyle = "#8fd3e8";
        for (let c = 0; c < 3; c++) {
          const l = k * (0.28 + 0.2 * c) + 3 * T(0.4 * E + 2 * c);
          for (let s = 0; s < 7; s++) {
            const p =
              ((((61 * s + E * (5 + 3 * c) * (1 & c ? -1 : 1)) % (r + 60)) +
                r +
                60) %
                (r + 60)) -
              30;
            ((d.a = 0.045),
              d.f(h(p), h(l), h(36 + 30 * w(s + 9 * c)), 3),
              d.f(h(p) + 6, h(l) + 3, 24, 2));
          }
        }
        d.a = 1;
      })(),
      Yt(
        t,
        0.24,
        2.4,
        44,
        9,
        [
          L(a, [8, 16, 28], 0.55),
          L(a, [30, 54, 78], 0.42),
          L(a, [58, 100, 124], 0.36),
          L(a, [104, 158, 176], 0.32),
        ],
        L(a, [107, 163, 180], 0.3),
      ));
    for (let c = 0; c < r; c++) {
      const l = t + (c - f - o) / e,
        s = h(c + n),
        p = ft(l) + (w(M(s / 3) + 9) > 0.72 ? -1 : 0),
        g = gt(l);
      (i(c, p, 1, k - p, st),
        i(c, p, 1, 1, kt),
        i(c, p + 1, 1, 2, ot),
        i(c, p + 3, 1, 1, J1));
      for (let C = 1; ; C++) {
        const q = k - 9 * C;
        if (q < p + 5) break;
        (i(c, q, 1, 1, x1),
          (s + 9 * (1 & C)) % 18 == 0
            ? i(c, q, 1, 9, x1)
            : w(0.37 * s + C) > 0.93 && i(c, q + 3, 1, 1, J1));
      }
      const b = w(M(s / 4) + 55);
      if (b > 0.6) {
        const C = 1 + M(7 * (b - 0.6)) + (w(1.3 * s) > 0.6 ? 1 : 0);
        (i(c, p - C, 1, C + 2, xt), w(s) > 0.5 && i(c, p - C, 1, 1, "#9be04f"));
      }
      (i(c, 0, 1, g, x1),
        i(c, g - 6, 1, 4, st),
        i(c, g - 3, 1, 2, J1),
        i(c, g - 1, 1, 1, ot));
      const y = s / 7,
        A = M(y),
        I = y - A;
      if (w(A + 33) > 0.5) {
        const C = h(9 * w(A + 5) * (1 - N(2 * I - 1)));
        C > 0 && (i(c, g, 1, C, J1), i(c, g + C - 1, 1, 1, ot));
      }
      b < 0.18 && w(s) > 0.4 && i(c, g, 1, 2 + M(3 * w(2 * s)), xt);
    }
  }
  function Bt() {
    ((d.fillStyle = "#000"),
      [
        [10, 0.16],
        [6, 0.14],
        [3, 0.14],
      ].forEach((t) => {
        ((d.a = t[1]),
          d.f(0, 0, r, t[0]),
          d.f(0, k - t[0], r, t[0]),
          d.f(0, t[0], t[0], k - 2 * t[0]),
          d.f(r - t[0], t[0], t[0], k - 2 * t[0]));
      }),
      (d.a = 1));
  }
  function Vt() {
    const t = it();
    if (t < 0.01) return;
    d.fillStyle = "#d01840";
    const o = 0.55 + 0.45 * T(E * (4 + 6 * t)),
      e = 0.4 * t * o;
    ([
      [8, 1],
      [5, 1.4],
      [2, 1.8],
    ].forEach((f) => {
      d.a = e / f[1];
      const n = f[0] * (0.5 + t);
      (d.f(0, 0, r, n),
        d.f(0, k - n, r, n),
        d.f(0, n, n, k - 2 * n),
        d.f(r - n, n, n, k - 2 * n));
    }),
      (d.a = 1));
  }
  function jt(t, o, e, f) {
    const n = e < o ? -1 : 1,
      a = N(e - o);
    for (let c = 0; c <= a; c++) {
      const l = o + n * c,
        s = x(1, h(6.2 - (c / a) * 4.3 + 1.5 * (w(c + 7 * f) - 0.5)));
      (i(t - s - 1, l, 1, 1, x1),
        i(t + s, l, 1, 1, x1),
        i(t - s, l, 2 * s, 1, J1),
        i(t - s, l, 2, 1, kt),
        i(t - s + 2, l, 1, 1, ot),
        i(t + s - 2, l, 2, 1, st),
        w(3 * c + f) > 0.88 && i(t - 1 + M(3 * w(c + f)), l, 1, 1, x1));
    }
    (i(t - 1, e + n, 3, 1, x1), n < 0 && i(t, e, 1, 1, kt));
  }
  function L0(t, o) {
    for (let e = -2; e <= 2; e++) {
      const f = t + 4 * e,
        n = 7 + (1 & e ? 0 : 3);
      for (let a = 0; a < n; a++) {
        const c = h(2.4 * (1 - a / n) + 0.4);
        (i(f - c - 1, o - a - 1, 1, 1, "#2a3f66"),
          i(f + c + 1, o - a - 1, 1, 1, "#2a3f66"),
          i(f - c, o - a - 1, 2 * c + 1, 1, a < 0.5 * n ? "#cfe6ff" : "#fff"),
          i(f + c - 1, o - a - 1, 1, 1, "#7d9fd6"));
      }
      i(f, o - n - 1, 1, 1, "#2a3f66");
    }
  }
  function C0(t, o, e, f) {
    i(t - 5, o, 10, e - o, "#2a1f4d");
    for (let n = o, a = 0; n < e; n += 8, a++)
      (i(t - 5, n, 10, 1, "#150f2e"),
        i(t - 5 + (1 & a ? 2 : -1) + 3, n, 1, 8, "#150f2e"),
        w(a + f) > 0.7 && i(t - 3, n + 3, 3, 1, "#4a3a86"));
    (i(t - 5, o, 1, e - o, "#6a54b8"),
      i(t - 4, o, 1, e - o, "#4a3a86"),
      i(t + 4, o, 1, e - o, "#150f2e"),
      i(t - 6, o, 1, e - o, "#0a0618"),
      i(t + 5, o, 1, e - o, "#0a0618"));
  }
  function v0(t, o, e) {
    X(t, o, 10, "#3fe6ff", 0.07);
    const f = h(4 + e);
    ((t = h(t)), (o = h(o)));
    for (let n = -f; n <= f; n++) {
      const a = f - N(n);
      (i(t - a, o + n, 2 * a + 1, 1, "#2a8fd0"),
        a > 1 && i(t - a + 1, o + n, 2 * a - 1, 1, "#7fe8ff"));
    }
    (i(t - 1, o - 2, 2, 2, "#fff"),
      T(8 * E + t) > 0.3 &&
        (i(t - f - 2, o, 2, 1, "#fff"),
        i(t + f + 1, o, 2, 1, "#fff"),
        i(t, o - f - 2, 1, 2, "#fff"),
        i(t, o + f + 1, 1, 2, "#fff")));
  }
  function Jt(t, o, u) {
    const e = 0.5 * k,
      f = -0.03 * r,
      n = u || 0.17 * r,
      a = [f, e - (t * (0.06 * k * o)) / 2],
      c = [n, e - (t * (0.86 * k * o)) / 2],
      l = [f + 0.35 * (n - f), c[1] + 0.15 * (a[1] - c[1])],
      s = [],
      p = [];
    for (let y = 0; y <= 48; y++) {
      const A = y / 48,
        I = 1 - A;
      s.push([
        I * I * a[0] + 2 * I * A * l[0] + A * A * c[0],
        I * I * a[1] + 2 * I * A * l[1] + A * A * c[1],
      ]);
    }
    let g = 0;
    const b = h(n) + 6;
    for (let y = 0; y <= b; y++)
      if (y <= n) {
        for (; g < 47 && s[g + 1][0] < y;) g++;
        const A = s[g],
          I = s[g + 1];
        p.push(
          h(A[1] + (I[1] - A[1]) * S((y - A[0]) / (I[0] - A[0] || 1), 0, 1)),
        );
      } else {
        const A = (y - n) / 6;
        p.push(h(t > 0 ? c[1] * (1 - A) : c[1] + (k - c[1]) * A));
      }
    return { e: p, x1: n, xe: b };
  }
  function qt(t, o, e) {
    for (let f = 0; f <= o.xe; f++) {
      const n = o.e[f],
        a = f / o.x1,
        c = e * (0.5 + 0.5 * S(a, 0, 1)),
        l = t > 0 ? f % 6 : (f + 3) % 6,
        s = f <= o.x1 ? h(c * (1 - N(l - 2.5) / 3)) : 0;
      if (t > 0) {
        if ((i(f, 0, 1, n, f1), n > 4 && f % 3 == 1))
          for (let p = 3 + 3 * ((f / 3) & 1); p < n - 3; p += 6)
            i(f, p, 1, 1, ht);
        (i(f, n - 1, 1, 1, a1),
          s > 0 &&
            (i(f, n, 1, s, et),
            i(f, n, 1, 1, "#2aa6c4"),
            s > 2 && i(f, n + 1, 1, s - 2, nt)));
      } else {
        if ((i(f, n, 1, k - n, f1), k - n > 4 && f % 3 == 1))
          for (let p = n + 3 + 3 * ((f / 3) & 1); p < k - 3; p += 6)
            i(f, p, 1, 1, ht);
        (i(f, n, 1, 1, a1),
          s > 0 &&
            (i(f, n - s, 1, s, et),
            i(f, n - 1, 1, 1, "#2aa6c4"),
            s > 2 && i(f, n - s + 1, 1, s - 2, nt)));
      }
    }
  }
  function At(t, u) {
    const o = k1 > 0 ? T(_I * F(1, k1 / 0.5)) : 0,
      e = t !== void 0 ? t : 1 - 0.85 * o,
      f = Jt(1, e, u),
      n = Jt(-1, e, u),
      a = f.x1,
      Q = a - 0.17 * r;
    d.fillStyle = "#05030c";
    for (let y = 0; y <= a; y++) {
      const A = y < 0.4 * a ? 1 : 1 - (y - 0.4 * a) / (0.6 * a);
      ((d.a = _C(4 * S(A, 0, 1)) / 4),
        d.f(y, f.e[y], 1, n.e[y] - f.e[y]));
    }
    ((d.a = 1), qt(1, f, 0.1 * k), qt(-1, n, 0.1 * k));
    const c = h(0.05 * r + 0.3 * Q),
      l = h(0.09 * k),
      s = 0.6 + 0.4 * T(3 * E);
    (X(c + 1, l + 1, 7, q1, 0.05 * s),
      i(c - 2, l - 2, 5, 5, "#0a3a5a"),
      i(c - 1, l - 1, 3, 3, q1),
      i(c, l, 1, 1, "#fff"));
    const p = 2 * T(1.7 * E),
      g = 0.205 * r + p + 0.8 * Q,
      b = 0.15 * k + T(2.3 * E);
    for (let y = 0; y <= 24; y++) {
      const A = y / 24;
      i(
        0.035 * r + (g - 0.035 * r) * A,
        b * (1 - (1 - A) * (1 - A)),
        1,
        1,
        "#2a5ca8",
      );
    }
    (X(g, b, 24, q1, 0.045),
      X(g, b, 9, "#aff4ff", 0.08),
      i(g - 2, b - 2, 5, 5, "#1a7aa8"),
      i(g - 1, b - 1, 3, 3, "#aff8ff"),
      i(g, b, 1, 1, "#fff"));
  }
  function mt(t, o, e) {
    X(t, o, 15, q1, 0.05);
    const f = (d1 > 0 && (30 * E) & 1) || U > 0 ? 1 : 0;
    e === "S" ? N1(k0[f][(7 * E) & 1], t - 8, o - 5) : N1(p0[f], t - 5, o - 5);
  }
  const K1 = (t) => {
    const o = 8 / (8 + x(t, 0.2));
    return { s: o, hw: 0.46 * r * o, hh: 0.46 * k * o };
  };
  function wt(t, o, e, f, n, a, c) {
    const l = e - t,
      s = f - o;
    if (l < 1 || s < 1) return;
    const p = (b) => L(a[b], c, n);
    i(t, o, l, s, p(0));
    const g = x(1, F(6, M(s / 5)));
    for (let b = 0; b < g; b++) {
      const y = o + (s * b) / g;
      b && i(t, y, l, 1, p(1));
      for (let A = 1 & b ? 0.5 : 0; A < 5; A++)
        i(t + (l * A) / 5, y, 1, s / g, p(1));
    }
    (i(t, o, l, 1, p(2)), i(t, f - 1, l, 1, p(1)));
  }
  function _Z(t, o, e, f, n, a) {
    const c = (a ? k : r) / e;
    for (let l = 0; l < e; l++) {
      const s = (l + 0.5) * c + (n || 0);
      for (let p = 0; p < f; p++) {
        const g = c * (1 - p / f) * 0.94,
          y = o > 0 ? t + p : t - p - 1;
        a
          ? (i(y, s - g / 2, 1, g, et),
            p > 1 && g > 3 && i(y, s - 0.2 * g, 1, 0.4 * g, nt))
          : (i(s - g / 2, y, g, 1, et),
            p > 1 && g > 3 && i(s - 0.2 * g, y, 0.4 * g, 1, nt));
      }
    }
  }
  function Zt(t, o) {
    const e = h(2 + 0.3 * t);
    (i(0, 0, r, e, f1),
      i(0, k - e, r, e, f1),
      i(0, e, r, 1, a1),
      i(0, k - e - 1, r, 1, a1));
    const f = h(r / 26);
    (_Z(e, 1, f, t, o, 0), _Z(k - e, -1, f, t, o, 0));
  }
  let yt = null,
    Qt = "";
  function N0(t) {
    const o = _D();
    ((o.width = r), (o.height = k));
    const e = _G(o),
      f = e.createImageData(r, k),
      n = f.data,
      a = [
        [8, 15, 24],
        [16, 30, 44],
        [26, 48, 66],
        [40, 72, 94],
        [64, 108, 130],
      ],
      c = [
        [43, 120, 40],
        [63, 174, 58],
        [155, 224, 79],
      ],
      l = r / 2,
      s = 0.46 * k,
      p = 1 + 0.04 * t;
    for (let g = 0; g < k; g++)
      for (let b = 0; b < r; b++) {
        const y = (b - l) / r,
          A = (g - s) / k,
          I = _A(A, y),
          C = 4 * (g * r + b),
          q =
            0.16 *
              _P(w(M(b / 5) + 9 * t + (A < 0 ? 0 : 50)), 2) *
              (N(A) > 0.22 ? 1 : 0) +
            0.1 *
              _P(w(M(g / 6) + 13 * t + (y < 0 ? 0 : 70)), 3) *
              (N(A) < 0.3 ? 1 : 0),
          g1 =
            _P(_P(N(y / (0.44 * p)), 3) + _P(N(A / 0.45), 3), 1 / 3) +
            0.12 * (w(M(7 * I) + 17 * t) - 0.5) -
            q +
            0.03 * (w(3 * M(b / 4) + 5 * M(g / 4) + t) - 0.5);
        if (g1 < 1) continue;
        const c1 =
          _P(_P(N(y / 0.62), 3) + _P(N(A / 0.6), 3), 1 / 3) +
          0.12 * (w(M(6 * I) + 5 * t) - 0.5);
        if ((c1 > 0.8 && w(2.3 * b + 1.9 * g + t) < (c1 - 0.8) / 0.2) || c1 > 1)
          continue;
        const Y = g1 - 1;
        let u =
          1 +
          M(2.5 * w(7 * M(b / 6 + g / 9) + 13 * M(g / 5 - b / 13) + 31 * t)) +
          (b < l ? 1 : 0);
        Y < 0.03
          ? (u = y < 0 && A < 0.3 ? 4 : 3)
          : (Y < 0.1 || c1 > 0.9) && (u = F(u, 1));
        const R =
          A > 0.1 && Y < 0.3 && w(7 * M(b / 3) + 11 * M(g / 3) + t) > 0.95
            ? c[M(3 * w(3 * b + g))]
            : a[S(u, 0, 4)];
        ((n[C] = R[0]), (n[C + 1] = R[1]), (n[C + 2] = R[2]), (n[C + 3] = 255));
      }
    return (e.putImageData(f, 0, 0), o);
  }
  function _t() {
    const t = 0.38 * r,
      o = 0.14 * k,
      e = 0.88 * k - o / 2;
    return [
      { x: 0.21 * r - t / 2, y: e, w: t, h: o, a: "retry" },
      { x: 0.83 * r - t / 2, y: e, w: t, h: o, a: "home" },
    ];
  }
  const TC = matchMedia("(pointer:coarse)").matches;
  function Mn() {
    const H = 35,
      y = h((1.11 * k + 9 - H) / 2 + 4),
      v = h(F(r - 6, 196)),
      a = h((r - v) / 2);
    ((d.a = 0.62),
      i(a, y - 4, v, H, W),
      (d.a = 1),
      (d.strokeStyle = a1),
      d.strokeRect(a + 0.5, y - 3.5, v - 1, H - 1),
      (TC
        ? ["ARRASTRA PARA MOVER", "TAP CAMBIA DE VISTA"]
        : ["W/A/S/D LATERAL  A/D FRONTAL", "ESPACIO VISTA  ESC PAUSA  M SONIDO"]
      )
        .concat("3 CHOQUES Y TE COMEN / AGUANTA 8 S Y CURAS 1")
        .map((s, j) =>
          V(s, r / 2, y + 10 * j + 2, 1, j > 1 ? "#ff8aa0" : nt, "c", W),
        ));
  }
  function Ht() {
    const t = x(5, 0.02 * r),
      o = x(18, 0.09 * k),
      e = F(0.26 * r, (0.92 * r - 2 * t) / 3),
      f = (r - 3 * e - 2 * t) / 2,
      n = 0.75 * k;
    return [0, 1, 2].map((a) => ({ x: f + a * (e + t), y: n, w: e, h: o }));
  }
  function Wt(t, o, e, f) {
    var n, a, c, l, s;
    (i(t.x, t.y, t.w, t.h, e ? "#bff4ff" : f1),
      (n = h(t.x)),
      (a = h(t.y)),
      (c = h(t.w)),
      (l = h(t.h)),
      i(n, a, c, 1, (s = e ? "#fff" : a1)),
      i(n, a + l - 1, c, 1, s),
      i(n, a, 1, l, s),
      i(n + c - 1, a, 1, l, s),
      i(n + 1, a + l - 2, c - 2, 1, e ? "#7fc8e0" : "#060d24"),
      i(n + 1, a + l, c - 2, 1, "#030510"),
      e || i(t.x + 1, t.y + 1, t.w - 2, 1, ht),
      V(
        o,
        t.x + t.w / 2,
        t.y + t.h / 2 - 2.5 * f,
        f,
        e ? "#05122a" : "#9fdcec",
        "c",
      ));
  }
  function G0() {
    if (
      (d.setTransform(1, 0, 0, 1, 0, 0),
      (d.imageSmoothingEnabled = !1),
      O === "TITLE")
    )
      (function () {
        bt(4 * E, 0);
        const t = x(2, F(M((0.82 * r) / 31), M((0.14 * k) / 5))),
          o = 0.1 * k,
          e = 0.5 + 0.5 * T(2 * E);
        (X(r / 2, o + 2.5 * t, h(0.28 * r), q1, 0.025 + 0.01 * e),
          Zt(h(0.06 * k), (10 * E) % 26),
          At(0.92),
          V("MORDISCO", r / 2, o + 3, t, "#0b3a66", "c", W),
          V("MORDISCO", r / 2, o, t, "#53d6f0", "c", W),
          d.save(),
          d.beginPath(),
          d.rect(0, 0, r, o + 2 * t),
          d.clip(),
          V("MORDISCO", r / 2, o, t, "#d8fbff", "c"),
          d.restore(),
          V("NO TE DEJES COMER", r / 2, o + 6 * t, 1, "#9fdcec", "c", W));
        const f = 0.36 * k + 2 * T(2 * E);
        mt(r / 2, f, "S");
        Mn();
        const l = Ht(),
          s = l[0].w >= 72 ? 2 : 1;
        for (let p = 0; p < 3; p++) Wt(l[p], G1[p].name, p === A1, s);
        T(3 * E) > -0.2 &&
          V(
            TC ? "TAP ELIGE MODO Y EMPIEZA" : "CLIC ELIGE MODO  ESPACIO EMPIEZA",
            r / 2,
            h(0.9 * k) + 2,
            1,
            "#ffd23a",
            "c",
            W,
          );
      })();
    else if (O === "OVER")
      (function () {
        ((d.fillStyle = "#000"),
          d.f(0, 0, r, k),
          (d.a = _C(5 * (1 - E1)) / 5));
        const t = x(2, F(M((0.9 * r) / 43), M((0.1 * k) / 5))),
          o = k >= 150 ? 2 : 1,
          e = (s, c, y, z, q) => {
            ((d.shadowColor = q),
              (d.shadowBlur = 6),
              V(s, c, y - 2.5 * z, z, q, "c"),
              (d.shadowBlur = 0));
          };
        (e("TE COMIERON", r / 2, 0.19 * k, t, "#ff1a1a"),
          e("PUNTAJE: " + L1, r / 2, 0.37 * k, o, "#e8a010"),
          e("MEJOR PUNTAJE: " + R1, r / 2, 0.55 * k, o, "#e8a010"),
          e("MODO: " + G1[A1].name, r / 2, 0.72 * k, o, "#e8a010"));
        for (const n of _t())
          e(
            n.a === "retry" ? "REINTENTAR" : "INICIO",
            n.x + n.w / 2,
            0.88 * k,
            o,
            n.a === "retry" ? "#fff" : "#ff1a1a",
          );
        d.a = 1;
      })();
    else if (
      (d.save(),
      d.translate(
        h((2 * _R() - 1) * o1 * r * 0.02),
        h((2 * _R() - 1) * o1 * k * 0.02),
      ),
      i1 === "SIDE"
        ? (function () {
            const t = r / 60,
              o = 0.3 * r,
              e = O === "EATEN" && !Ls ? -0.13 * r : F1,
              f = (n) => o + e + (n - m) * t;
            (bt(m, e), bb(0), bq(0));
            for (const n of P1)
              n.g ||
                n.z < m - 2 ||
                n.z > m + 45 ||
                v0(f(n.z), h1(n.y), 0.8 * T(6 * E + n.z));
            for (const n of m1) {
              if (n.z < m - 3 || n.z > m + 45) continue;
              const a = h(f(n.z));
              if (n.t === "bar")
                n.l
                  ? jt(a, ft(n.z) + 3, h(h1(n.b)), n.d)
                  : jt(a, gt(n.z) - 3, h(h1(n.a)), n.d);
              else if (n.t === "slot") {
                C0(a, gt(n.z) - 2, ft(n.z) + 3, n.d);
                const c = h(h1(Et(n.g)));
                (X(a, c, 11, "#20ff50", 0.07), N1(u0, a - 3, c - 4));
              } else L0(a, ft(n.z) + 1);
            }
            (T0(f),
              R0(f),
              O !== "EATEN" && At(),
              mt(((n) => h(0.3 * r + n))(e), h1(Z), "S"),
              Ut(h(0.3 * r + e), h1(Z)),
              Bt(),
              Vt());
          })()
        : (function () {
            const t = r / 2,
              o = 0.46 * k,
              e = [3, 5, 10];
            i(0, 0, r, k, L([21, 40, 62], e, 0.3));
            const f = (u) => 0.96 + 0.3 * w(5.1 * u + 2),
              n = (u) => 0.07 * (w(3.7 * u + 1) - 0.5) * r;
            for (let u = M((m - 3 - 6) / 8); ; u++) {
              const R = 8 * u - m + 3;
              if (R > 56) break;
              if (R < -6) continue;
              const r1 = 8 / (8 + R),
                v = S(R / 50, 0.25, 0.97),
                K = 0.44 * r * r1 * f(u),
                $ = 0.45 * k * r1 * f(u),
                G = t + n(u) * r1,
                Q = 10 * w(2.3 * u) - 5,
                j = L([31 + Q, 55 + Q, 78 + Q], e, v);
              for (let D = x(0, h(o - $)); D <= F(k - 1, h(o + $)); D++) {
                const J = (D + 0.5 - o) / $;
                if (N(J) >= 1) continue;
                const P = K * _P(1 - _P(N(J), 3), 1 / 3),
                  l1 = M(22 * J + 22),
                  b1 = x(1, 0.025 * P);
                (i(G - P, D, 2 * P, 1, j),
                  i(G - P, D, b1, 1, L([96, 154, 176], e, v + 0.1)),
                  i(G + P - b1, D, b1, 1, L([8, 16, 28], e, v)));
                for (let B = 0; B < 3; B++) {
                  const _ = w(17 * u + 5 * l1 + 31 * B),
                    w1 = w(29 * u + 3 * l1 + 13 * B + 7);
                  (_ > 0.6 &&
                    i(
                      G - P + 0.16 * P * B,
                      D,
                      P * (0.04 + 0.1 * w(9 * _)),
                      1,
                      L(_ > 0.82 ? [50, 86, 110] : [17, 32, 48], e, v + 0.1),
                    ),
                    w1 > 0.6 &&
                      i(
                        G + P - 0.16 * P * B - 0.1 * P,
                        D,
                        P * (0.04 + 0.1 * w(9 * w1)),
                        1,
                        L(w1 > 0.82 ? [44, 78, 100] : [17, 32, 48], e, v + 0.1),
                      ));
                }
                R < 30 &&
                  w(7 * u + 3 * l1) > 0.93 &&
                  i(
                    G - P + 2 * b1,
                    D,
                    x(2, 0.03 * P),
                    1,
                    L([63, 174, 58], e, v),
                  );
              }
            }
            const a = 3.5,
              c = [46, 82, 102],
              l = [38, 70, 90],
              s = [54, 94, 114],
              p = [63, 174, 58],
              g = (u) => o + (0.414 * k * 8) / (8 + u),
              b = M((m - 3 - 3) / a),
              y = M((m - 3 + 58) / a);
            for (let u = b; u <= y; u++) {
              const R = u * a - m + 3,
                r1 = R + a,
                v = g(R),
                K = g(r1);
              for (let G = x(0, h(K)); G < F(k, h(v)); G++) {
                const Q = (G + 0.5 - o) / (0.414 * k),
                  j = 0.46 * r * 0.86 * Q;
                if (j < 1) continue;
                const D = S(8 / Q - 8, 0, 60) / 42,
                  J = _P(S(D, 0, 1), 0.7);
                for (let P = -1; P < 8; P++) {
                  const l1 = 0.25 * (P + (1 & u ? 0.5 : 0)) - 1,
                    b1 = l1 + 0.25,
                    B = S(l1, -1, 1),
                    _ = S(b1, -1, 1);
                  if (_ <= B) continue;
                  const w1 = w(13 * u + 7 * P + 3 * (1 & u));
                  (i(
                    t + B * j,
                    G,
                    (_ - B) * j + 0.5,
                    1,
                    L(
                      w1 > 0.66 ? s : w1 > 0.33 ? c : l,
                      e,
                      S(J + 0.7 * _P(N((B + _) / 2), 2), 0, 1),
                    ),
                  ),
                    l1 >= -1 && i(t + B * j, G, 1, 1, L(zt, e, J)),
                    G === h(v) - 1
                      ? i(t + B * j, G, (_ - B) * j + 0.5, 1, L(zt, e, J))
                      : G === h(K) &&
                        R < 34 &&
                        i(
                          t + B * j,
                          G,
                          (_ - B) * j + 0.5,
                          1,
                          L(s, e, F(1, J + 0.15)),
                        ),
                    R < 24 &&
                      G === h(v) - 2 &&
                      w(5 * u + 3 * P) > 0.9 &&
                      i(t + B * j, G - 1, x(2, h(7 * Q)), 2, L(p, e, J)));
                }
              }
            }
            (yt && Qt === r + "x" + k) ||
              ((yt = [0, 1, 2, 3].map(N0)), (Qt = r + "x" + k));
            const A = m1
              .filter((u) => u.z > m - 1 && u.z < m + 45)
              .map((u) => ({ d: u.z - m + 3, o: u }))
              .concat(
                I1.filter((u) => u.z > m - 3 && u.z < m + 45).map((u) => ({
                  d: u.z - m + 3,
                  m: u,
                })),
              )
              .concat(
                S1.filter((u) => u.z > m - 6 && u.z < m + 55).map((u) => ({
                  d: u.z - m + 3,
                  p: u,
                })),
              );
            for (let u = M((m - 3 - 6) / 8); 8 * u - m + 3 < 56; u++)
              A.push({ d: 8 * u - m + 3, j: u });
            A.sort((u, R) => R.d - u.d);
            for (const u of A) {
              if (u.m) {
                x0(u.m, u.d, t, o);
                continue;
              }
              if (u.p) {
                S0(u.p, u.d, t, o);
                continue;
              }
              if (!u.o) {
                const D = (8 / (8 + u.d)) * f(u.j);
                if (u.d < -6) continue;
                ((d.a = S((54 - u.d) / 24, 0, 1)),
                  d.drawImage(
                    yt[((u.j % 4) + 4) % 4],
                    h(t + (8 * n(u.j)) / (8 + u.d) - t * D),
                    h(o * (1 - D)),
                    h(r * D),
                    h(k * D),
                  ),
                  (d.a = 1));
                continue;
              }
              const R = u.o,
                r1 = u.d,
                v = K1(r1),
                K = S((r1 - 2) / 52, 0, 0.9),
                $ = t - 0.86 * v.hw,
                G = t + 0.86 * v.hw,
                Q = o - 0.9 * v.hh,
                j = o + 0.9 * v.hh;
              if (R.t === "bar") {
                const D = o + (0.5 - R.a) * v.hh * 1.62,
                  J = o + (0.5 - R.b) * v.hh * 1.62;
                wt($, F(D, J), G, x(D, J), K, [n0, f0, a0], e);
              } else if (R.t === "slot") {
                const D = t + (R.g - R.w) * v.hw * 0.86,
                  J = t + (R.g + R.w) * v.hw * 0.86,
                  P = [
                    [70, 52, 130],
                    [22, 14, 50],
                    [150, 120, 220],
                  ];
                (wt($, Q, D, j, K, P, e),
                  wt(J, Q, G, j, K, P, e),
                  i(D - 1, Q, 2, j - Q, L([255, 200, 60], e, K)),
                  i(J - 1, Q, 2, j - Q, L([255, 200, 60], e, K)));
              } else {
                const J = 0.86 * v.hw,
                  P = (2 * J) / 8,
                  l1 = 0.22 * v.hh;
                for (let b1 = 0; b1 < 8; b1++) {
                  const B = t + 0.92 * (((b1 + 0.5) / 8) * 2 - 1) * J;
                  for (let _ = 0; _ < l1; _++) {
                    const w1 = P * (1 - _ / l1);
                    i(
                      B - w1 / 2,
                      j - _ - 1,
                      w1,
                      1,
                      L(_ < 0.5 * l1 ? [207, 230, 255] : [255, 255, 255], e, K),
                    );
                  }
                  i(
                    B - 0.3 * P,
                    j - 0.5 * l1,
                    1,
                    0.5 * l1,
                    L([125, 159, 214], e, K),
                  );
                }
              }
            }
            bb(1);
            const I = K1(3),
              C = h(t + p1 * I.hw * 0.86),
              q = h(o + 0.81 * I.hh);
            (mt(C, q, "R"), Ut(C, q), bq(1));
            const g1 = F(1, it() + 0.35 * M1),
              c1 = h(1.4 * (0.015 * r + 0.085 * r * g1)),
              Y = h(2 + 0.3 * c1);
            if (
              (i(0, 0, r, Y, f1),
              i(0, k - Y, r, Y, f1),
              i(0, 0, Y, k, f1),
              i(r - Y, 0, Y, k, f1),
              i(0, Y, r, 1, a1),
              i(0, k - Y - 1, r, 1, a1),
              i(Y, 0, 1, k, a1),
              i(r - Y - 1, 0, 1, k, a1),
              _Z(Y, 1, 12, c1, 0, 0),
              _Z(k - Y, -1, 12, c1, 0, 0),
              _Z(Y, 1, 7, c1, 0, 1),
              _Z(r - Y, -1, 7, c1, 0, 1),
              k1 > 0 && O === "PLAY")
            ) {
              const u = T(_I * F(1, k1 / 0.5)),
                R = k * (0.02 + 0.46 * u),
                r1 = h(F(0.5 * R, 0.13 * k));
              (i(0, 0, r, R, f1),
                i(0, k - R, r, R, f1),
                i(0, R, r, 1, a1),
                i(0, k - R - 1, r, 1, a1),
                _Z(R, 1, 12, r1, 0, 0),
                _Z(k - R, -1, 12, r1, 0, 0));
            }
            (I0(), Bt(), Vt());
          })(),
      d.restore(),
      O === "EATEN")
    )
      (function () {
        if (i1 === "SIDE")
          Ls
            ? At(
                1 - 0.85 * S((E1 - 0.4) / 0.15, 0, 1),
                0.17 * r + (0.13 * r + F1 + 16) * S(E1 / 0.4, 0, 1) ** 2,
              )
            : At(1 - 0.85 * F(1, 1.5 * E1));
        else {
          const t = F(1, 2 * E1),
            o = k * (0.04 + 0.3 * t),
            e = h(0.1 * k);
          (i(0, 0, r, o, f1),
            i(0, k - o, r, o, f1),
            _Z(o, 1, 12, e, 0, 0),
            _Z(k - o, -1, 12, e, 0, 0));
        }
        ((d.fillStyle = "#000"),
          (d.a = _C(6 * S(Ls ? (E1 - 0.6) / 0.4 : E1, 0, 1)) / 6),
          d.f(0, 0, r, k),
          (d.a = 1));
      })();
    else {
      if (
        ((function () {
          if (z1 <= 0) return;
          const t = z1 / 0.16;
          ((d.fillStyle = "#bff"), (d.a = 0.5 + 0.5 * t));
          for (let o = 0; o < 9; o++) {
            const e = ((o + 0.5) / 9) * k,
              f = t > 0.5 ? 2 : 1;
            d.f(0, h(e), r, f);
          }
          d.a = 1;
        })(),
        d1 > 0)
      ) {
        d.fillStyle = "#ffd6de";
        const t = h(x(1, 0.03 * r * d1));
        (d.f(0, 0, r, t),
          d.f(0, k - t, r, t),
          d.f(0, t, t, k - 2 * t),
          d.f(r - t, t, t, k - 2 * t));
      }
      ((function () {
        const t = r < 300 || at >= 3.2 ? 1 : 2,
          o = x(3, h(0.015 * r));
        (V("PUNTOS " + String(L1).padStart(4, "0"), o, o, t, "#fff", "l", W),
          V(
            "MEJOR " + String(R1).padStart(4, "0"),
            r - o,
            o,
            t,
            "#9fdcec",
            "r",
            W,
          ));
        for (let e = 0; e < 3; e++)
          N1(d0[e >= U ? 0 : 1], r / 2 + 11 * (e - 1) - 3, o);
        (H > 0 &&
          i(
            r / 2 - 16,
            o + 9,
            h((32 * H) / 8),
            2,
            U > 1 ? "#ff6a80" : "#7fe8ff",
          ),
          bo.on && bo.a >= 1 && V("ATAQUE " + bo.n + "/10", o, k - o - 5 * t, t, "#ffb0c8", "l", W),
          V(G1[A1].name, r - o, k - o - 5 * t, t, "#6b8fb0", "r", W));
      })(),
        O === "PAUSE" &&
          (function () {
            ((d.fillStyle = "#04030c"),
              (d.a = 0.8),
              d.f(0, 0, r, k),
              (d.a = 1));
            const t = x(2, F(M((0.5 * r) / 23), M((0.1 * k) / 5)));
            (i(0, 0.38 * k, r, 1, a1),
              i(0, 0.6 * k, r, 1, a1),
              V("PAUSA", r / 2, 0.4 * k, t, "#d8fbff", "c", W),
              V("ESC PARA SEGUIR", r / 2, 0.4 * k + 7 * t, 1, "#9fdcec", "c"));
          })());
    }
  }
  (_E(window, "keydown", (t) => {
    const o = t.code;
    if (((o !== "Space" && o !== "Tab") || t.preventDefault(), !t.repeat)) {
      if (o !== "Space") {
        if (o !== "Escape")
          return o === "KeyM"
            ? ((Q1 = !Q1), void lt("mordisco_mute", Q1 ? "1" : "0"))
            : void t1.add(o);
        O === "PLAY" ? (O = "PAUSE") : O === "PAUSE" && (O = "PLAY");
      } else Tt();
    }
  }),
    _E(window, "keyup", (t) => t1.delete(t.code)),
    _E(window, "blur", () => {
      (O === "PLAY" && (O = "PAUSE"), t1.clear());
    }),
    _E(document, "visibilitychange", () => {
      document.hidden && O === "PLAY" && (O = "PAUSE");
    }));
  let z = null;
  function Xt(t) {
    const o = s1.getBoundingClientRect();
    return {
      x: ((t.clientX - o.left) * r) / o.width,
      y: ((t.clientY - o.top) * k) / o.height,
    };
  }
  (_E(s1, "pointerdown", (t) => {
    X1();
    try {
      s1.setPointerCapture(t.pointerId);
    } catch {}
    const o = Xt(t);
    z = {
      id: t.pointerId,
      x: o.x,
      y: o.y,
      sx: o.x,
      sy: o.y,
      t: _N(),
      moved: !1,
    };
  }),
    _E(s1, "pointermove", (t) => {
      if (!z || t.pointerId !== z.id) return;
      const o = Xt(t),
        e = o.x - z.x,
        f = o.y - z.y;
      ((N(o.x - z.sx) + N(o.y - z.sy)) * at > 14 && (z.moved = !0),
        z.moved &&
          O === "PLAY" &&
          ((p1 = S(p1 + e * (1.7 / r), -0.86, 0.86)),
          i1 === "SIDE" && (Z = S(Z - f * (0.9 / k), 0.12, 0.92))),
        (z.x = o.x),
        (z.y = o.y));
    }),
    _E(s1, "pointerup", function (t) {
      if (z && t.pointerId === z.id) {
        if (!z.moved && _N() - z.t < 400)
          if (O === "TITLE") {
            const o = Ht();
            for (let e = 0; e < 3; e++) {
              const f = o[e];
              if (
                z.x >= f.x &&
                z.x <= f.x + f.w &&
                z.y >= f.y &&
                z.y <= f.y + f.h
              ) {
                A1 = e;
                break;
              }
            }
            $1();
          } else if (O === "OVER") {
            const o = _t();
            for (const e of o)
              if (
                z.x >= e.x &&
                z.x <= e.x + e.w &&
                z.y >= e.y &&
                z.y <= e.y + e.h
              )
                return (
                  e.a === "retry" ? $1() : (It(), (O = "TITLE")),
                  void (z = null)
                );
          } else Tt();
        z = null;
      }
    }),
    _E(s1, "pointercancel", () => {
      z = null;
    }));
  let $t = _N(),
    Mt = 0;
  (It(), (O = "TITLE"));
  _K(function t(o) {
    let e = (o - $t) / 1e3;
    (($t = o), e > 0.1 && (e = 0.1), (Mt += e));
    const f = 1 / 120;
    let n = 0;
    for (; Mt >= f && n++ < 8;) (e0(f), (Mt -= f));
    (mu(), G0(), _K(t));
  });
})();
