(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver(r => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function s(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = s(r);
    fetch(r.href, i)
  }
})();

function Ms(e, t) {
  const s = Object.create(null),
    n = e.split(",");
  for (let r = 0; r < n.length; r++) s[n[r]] = !0;
  return t ? r => !!s[r.toLowerCase()] : r => !!s[r]
}
const W = {},
  Ye = [],
  he = () => {},
  Or = () => !1,
  Pr = /^on[^a-z]/,
  Kt = e => Pr.test(e),
  Ss = e => e.startsWith("onUpdate:"),
  X = Object.assign,
  Rs = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1)
  },
  $r = Object.prototype.hasOwnProperty,
  P = (e, t) => $r.call(e, t),
  T = Array.isArray,
  Ge = e => wt(e) === "[object Map]",
  Vt = e => wt(e) === "[object Set]",
  tn = e => wt(e) === "[object Date]",
  S = e => typeof e == "function",
  J = e => typeof e == "string",
  mt = e => typeof e == "symbol",
  D = e => e !== null && typeof e == "object",
  Fn = e => D(e) && S(e.then) && S(e.catch),
  Ln = Object.prototype.toString,
  wt = e => Ln.call(e),
  Fr = e => wt(e).slice(8, -1),
  Nn = e => wt(e) === "[object Object]",
  ks = e => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Pt = Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Jt = e => {
    const t = Object.create(null);
    return s => t[s] || (t[s] = e(s))
  },
  Lr = /-(\w)/g,
  we = Jt(e => e.replace(Lr, (t, s) => s ? s.toUpperCase() : "")),
  Nr = /\B([A-Z])/g,
  nt = Jt(e => e.replace(Nr, "-$1").toLowerCase()),
  Zt = Jt(e => e.charAt(0).toUpperCase() + e.slice(1)),
  cs = Jt(e => e ? `on${Zt(e)}` : ""),
  gt = (e, t) => !Object.is(e, t),
  $t = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t)
  },
  Ut = (e, t, s) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: s
    })
  },
  Bn = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  };
let sn;
const ms = () => sn || (sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function js(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = J(n) ? Dr(n) : js(n);
      if (r)
        for (const i in r) t[i] = r[i]
    }
    return t
  } else {
    if (J(e)) return e;
    if (D(e)) return e
  }
}
const Br = /;(?![^(]*\))/g,
  Ur = /:([^]+)/,
  Wr = /\/\*[^]*?\*\//g;

function Dr(e) {
  const t = {};
  return e.replace(Wr, "").split(Br).forEach(s => {
    if (s) {
      const n = s.split(Ur);
      n.length > 1 && (t[n[0].trim()] = n[1].trim())
    }
  }), t
}

function me(e) {
  let t = "";
  if (J(e)) t = e;
  else if (T(e))
    for (let s = 0; s < e.length; s++) {
      const n = me(e[s]);
      n && (t += n + " ")
    } else if (D(e))
      for (const s in e) e[s] && (t += s + " ");
  return t.trim()
}
const Hr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  qr = Ms(Hr);

function Un(e) {
  return !!e || e === ""
}

function zr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++) s = Yt(e[n], t[n]);
  return s
}

function Yt(e, t) {
  if (e === t) return !0;
  let s = tn(e),
    n = tn(t);
  if (s || n) return s && n ? e.getTime() === t.getTime() : !1;
  if (s = mt(e), n = mt(t), s || n) return e === t;
  if (s = T(e), n = T(t), s || n) return s && n ? zr(e, t) : !1;
  if (s = D(e), n = D(t), s || n) {
    if (!s || !n) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        u = t.hasOwnProperty(o);
      if (l && !u || !l && u || !Yt(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}

function Kr(e, t) {
  return e.findIndex(s => Yt(s, t))
}
const Y = e => J(e) ? e : e == null ? "" : T(e) || D(e) && (e.toString === Ln || !S(e.toString)) ? JSON.stringify(e, Wn, 2) : String(e),
  Wn = (e, t) => t && t.__v_isRef ? Wn(e, t.value) : Ge(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((s, [n, r]) => (s[`${n} =>`] = r, s), {})
  } : Vt(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : D(t) && !T(t) && !Nn(t) ? String(t) : t;
let de;
class Dn {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const s = de;
      try {
        return de = this, t()
      } finally {
        de = s
      }
    }
  }
  on() {
    de = this
  }
  off() {
    de = this.parent
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function Vr(e) {
  return new Dn(e)
}

function Jr(e, t = de) {
  t && t.active && t.effects.push(e)
}

function Zr() {
  return de
}
const Os = e => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
  },
  Hn = e => (e.w & Pe) > 0,
  qn = e => (e.n & Pe) > 0,
  Yr = ({
    deps: e
  }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++) e[t].w |= Pe
  },
  Gr = e => {
    const {
      deps: t
    } = e;
    if (t.length) {
      let s = 0;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        Hn(r) && !qn(r) ? r.delete(e) : t[s++] = r, r.w &= ~Pe, r.n &= ~Pe
      }
      t.length = s
    }
  },
  gs = new WeakMap;
let ut = 0,
  Pe = 1;
const _s = 30;
let fe;
const qe = Symbol(""),
  bs = Symbol("");
class Ps {
  constructor(t, s = null, n) {
    this.fn = t, this.scheduler = s, this.active = !0, this.deps = [], this.parent = void 0, Jr(this, n)
  }
  run() {
    if (!this.active) return this.fn();
    let t = fe,
      s = je;
    for (; t;) {
      if (t === this) return;
      t = t.parent
    }
    try {
      return this.parent = fe, fe = this, je = !0, Pe = 1 << ++ut, ut <= _s ? Yr(this) : nn(this), this.fn()
    } finally {
      ut <= _s && Gr(this), Pe = 1 << --ut, fe = this.parent, je = s, this.parent = void 0, this.deferStop && this.stop()
    }
  }
  stop() {
    fe === this ? this.deferStop = !0 : this.active && (nn(this), this.onStop && this.onStop(), this.active = !1)
  }
}

function nn(e) {
  const {
    deps: t
  } = e;
  if (t.length) {
    for (let s = 0; s < t.length; s++) t[s].delete(e);
    t.length = 0
  }
}
let je = !0;
const zn = [];

function rt() {
  zn.push(je), je = !1
}

function it() {
  const e = zn.pop();
  je = e === void 0 ? !0 : e
}

function le(e, t, s) {
  if (je && fe) {
    let n = gs.get(e);
    n || gs.set(e, n = new Map);
    let r = n.get(s);
    r || n.set(s, r = Os()), Kn(r)
  }
}

function Kn(e, t) {
  let s = !1;
  ut <= _s ? qn(e) || (e.n |= Pe, s = !Hn(e)) : s = !e.has(fe), s && (e.add(fe), fe.deps.push(e))
}

function Ie(e, t, s, n, r, i) {
  const o = gs.get(e);
  if (!o) return;
  let l = [];
  if (t === "clear") l = [...o.values()];
  else if (s === "length" && T(e)) {
    const u = Number(n);
    o.forEach((d, _) => {
      (_ === "length" || _ >= u) && l.push(d)
    })
  } else switch (s !== void 0 && l.push(o.get(s)), t) {
    case "add":
      T(e) ? ks(s) && l.push(o.get("length")) : (l.push(o.get(qe)), Ge(e) && l.push(o.get(bs)));
      break;
    case "delete":
      T(e) || (l.push(o.get(qe)), Ge(e) && l.push(o.get(bs)));
      break;
    case "set":
      Ge(e) && l.push(o.get(qe));
      break
  }
  if (l.length === 1) l[0] && xs(l[0]);
  else {
    const u = [];
    for (const d of l) d && u.push(...d);
    xs(Os(u))
  }
}

function xs(e, t) {
  const s = T(e) ? e : [...e];
  for (const n of s) n.computed && rn(n);
  for (const n of s) n.computed || rn(n)
}

function rn(e, t) {
  (e !== fe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Xr = Ms("__proto__,__v_isRef,__isVue"),
  Vn = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(mt)),
  Qr = $s(),
  ei = $s(!1, !0),
  ti = $s(!0),
  on = si();

function si() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
    e[t] = function (...s) {
      const n = F(this);
      for (let i = 0, o = this.length; i < o; i++) le(n, "get", i + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(F)) : r
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
    e[t] = function (...s) {
      rt();
      const n = F(this)[t].apply(this, s);
      return it(), n
    }
  }), e
}

function ni(e) {
  const t = F(this);
  return le(t, "has", e), t.hasOwnProperty(e)
}

function $s(e = !1, t = !1) {
  return function (n, r, i) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && i === (e ? t ? xi : Xn : t ? Gn : Yn).get(n)) return n;
    const o = T(n);
    if (!e) {
      if (o && P(on, r)) return Reflect.get(on, r, i);
      if (r === "hasOwnProperty") return ni
    }
    const l = Reflect.get(n, r, i);
    return (mt(r) ? Vn.has(r) : Xr(r)) || (e || le(n, "get", r), t) ? l : ne(l) ? o && ks(r) ? l : l.value : D(l) ? e ? Qn(l) : Ns(l) : l
  }
}
const ri = Jn(),
  ii = Jn(!0);

function Jn(e = !1) {
  return function (s, n, r, i) {
    let o = s[n];
    if (et(o) && ne(o) && !ne(r)) return !1;
    if (!e && (!Wt(r) && !et(r) && (o = F(o), r = F(r)), !T(s) && ne(o) && !ne(r))) return o.value = r, !0;
    const l = T(s) && ks(n) ? Number(n) < s.length : P(s, n),
      u = Reflect.set(s, n, r, i);
    return s === F(i) && (l ? gt(r, o) && Ie(s, "set", n, r) : Ie(s, "add", n, r)), u
  }
}

function oi(e, t) {
  const s = P(e, t);
  e[t];
  const n = Reflect.deleteProperty(e, t);
  return n && s && Ie(e, "delete", t, void 0), n
}

function li(e, t) {
  const s = Reflect.has(e, t);
  return (!mt(t) || !Vn.has(t)) && le(e, "has", t), s
}

function ai(e) {
  return le(e, "iterate", T(e) ? "length" : qe), Reflect.ownKeys(e)
}
const Zn = {
    get: Qr,
    set: ri,
    deleteProperty: oi,
    has: li,
    ownKeys: ai
  },
  ci = {
    get: ti,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  ui = X({}, Zn, {
    get: ei,
    set: ii
  }),
  Fs = e => e,
  Gt = e => Reflect.getPrototypeOf(e);

function Mt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = F(e),
    i = F(t);
  s || (t !== i && le(r, "get", t), le(r, "get", i));
  const {
    has: o
  } = Gt(r), l = n ? Fs : s ? Ws : _t;
  if (o.call(r, t)) return l(e.get(t));
  if (o.call(r, i)) return l(e.get(i));
  e !== r && e.get(t)
}

function St(e, t = !1) {
  const s = this.__v_raw,
    n = F(s),
    r = F(e);
  return t || (e !== r && le(n, "has", e), le(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r)
}

function Rt(e, t = !1) {
  return e = e.__v_raw, !t && le(F(e), "iterate", qe), Reflect.get(e, "size", e)
}

function ln(e) {
  e = F(e);
  const t = F(this);
  return Gt(t).has.call(t, e) || (t.add(e), Ie(t, "add", e, e)), this
}

function an(e, t) {
  t = F(t);
  const s = F(this),
    {
      has: n,
      get: r
    } = Gt(s);
  let i = n.call(s, e);
  i || (e = F(e), i = n.call(s, e));
  const o = r.call(s, e);
  return s.set(e, t), i ? gt(t, o) && Ie(s, "set", e, t) : Ie(s, "add", e, t), this
}

function cn(e) {
  const t = F(this),
    {
      has: s,
      get: n
    } = Gt(t);
  let r = s.call(t, e);
  r || (e = F(e), r = s.call(t, e)), n && n.call(t, e);
  const i = t.delete(e);
  return r && Ie(t, "delete", e, void 0), i
}

function un() {
  const e = F(this),
    t = e.size !== 0,
    s = e.clear();
  return t && Ie(e, "clear", void 0, void 0), s
}

function kt(e, t) {
  return function (n, r) {
    const i = this,
      o = i.__v_raw,
      l = F(o),
      u = t ? Fs : e ? Ws : _t;
    return !e && le(l, "iterate", qe), o.forEach((d, _) => n.call(r, u(d), u(_), i))
  }
}

function jt(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      i = F(r),
      o = Ge(i),
      l = e === "entries" || e === Symbol.iterator && o,
      u = e === "keys" && o,
      d = r[e](...n),
      _ = s ? Fs : t ? Ws : _t;
    return !t && le(i, "iterate", u ? bs : qe), {
      next() {
        const {
          value: w,
          done: A
        } = d.next();
        return A ? {
          value: w,
          done: A
        } : {
          value: l ? [_(w[0]), _(w[1])] : _(w),
          done: A
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Re(e) {
  return function (...t) {
    return e === "delete" ? !1 : this
  }
}

function di() {
  const e = {
      get(i) {
        return Mt(this, i)
      },
      get size() {
        return Rt(this)
      },
      has: St,
      add: ln,
      set: an,
      delete: cn,
      clear: un,
      forEach: kt(!1, !1)
    },
    t = {
      get(i) {
        return Mt(this, i, !1, !0)
      },
      get size() {
        return Rt(this)
      },
      has: St,
      add: ln,
      set: an,
      delete: cn,
      clear: un,
      forEach: kt(!1, !0)
    },
    s = {
      get(i) {
        return Mt(this, i, !0)
      },
      get size() {
        return Rt(this, !0)
      },
      has(i) {
        return St.call(this, i, !0)
      },
      add: Re("add"),
      set: Re("set"),
      delete: Re("delete"),
      clear: Re("clear"),
      forEach: kt(!0, !1)
    },
    n = {
      get(i) {
        return Mt(this, i, !0, !0)
      },
      get size() {
        return Rt(this, !0)
      },
      has(i) {
        return St.call(this, i, !0)
      },
      add: Re("add"),
      set: Re("set"),
      delete: Re("delete"),
      clear: Re("clear"),
      forEach: kt(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
    e[i] = jt(i, !1, !1), s[i] = jt(i, !0, !1), t[i] = jt(i, !1, !0), n[i] = jt(i, !0, !0)
  }), [e, s, t, n]
}
const [fi, pi, hi, mi] = di();

function Ls(e, t) {
  const s = t ? e ? mi : hi : e ? pi : fi;
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(P(s, r) && r in n ? s : n, r, i)
}
const gi = {
    get: Ls(!1, !1)
  },
  _i = {
    get: Ls(!1, !0)
  },
  bi = {
    get: Ls(!0, !1)
  },
  Yn = new WeakMap,
  Gn = new WeakMap,
  Xn = new WeakMap,
  xi = new WeakMap;

function yi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0
  }
}

function vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yi(Fr(e))
}

function Ns(e) {
  return et(e) ? e : Bs(e, !1, Zn, gi, Yn)
}

function wi(e) {
  return Bs(e, !1, ui, _i, Gn)
}

function Qn(e) {
  return Bs(e, !0, ci, bi, Xn)
}

function Bs(e, t, s, n, r) {
  if (!D(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = r.get(e);
  if (i) return i;
  const o = vi(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? n : s);
  return r.set(e, l), l
}

function Xe(e) {
  return et(e) ? Xe(e.__v_raw) : !!(e && e.__v_isReactive)
}

function et(e) {
  return !!(e && e.__v_isReadonly)
}

function Wt(e) {
  return !!(e && e.__v_isShallow)
}

function er(e) {
  return Xe(e) || et(e)
}

function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e
}

function Us(e) {
  return Ut(e, "__v_skip", !0), e
}
const _t = e => D(e) ? Ns(e) : e,
  Ws = e => D(e) ? Qn(e) : e;

function tr(e) {
  je && fe && (e = F(e), Kn(e.dep || (e.dep = Os())))
}

function sr(e, t) {
  e = F(e);
  const s = e.dep;
  s && xs(s)
}

function ne(e) {
  return !!(e && e.__v_isRef === !0)
}

function nr(e) {
  return Ci(e, !1)
}

function Ci(e, t) {
  return ne(e) ? e : new Ai(e, t)
}
class Ai {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : F(t), this._value = s ? t : _t(t)
  }
  get value() {
    return tr(this), this._value
  }
  set value(t) {
    const s = this.__v_isShallow || Wt(t) || et(t);
    t = s ? t : F(t), gt(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : _t(t), sr(this))
  }
}

function Ei(e) {
  return ne(e) ? e.value : e
}
const Ii = {
  get: (e, t, s) => Ei(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ne(r) && !ne(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n)
  }
};

function rr(e) {
  return Xe(e) ? e : new Proxy(e, Ii)
}
class Ti {
  constructor(t, s, n, r) {
    this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ps(t, () => {
      this._dirty || (this._dirty = !0, sr(this))
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n
  }
  get value() {
    const t = F(this);
    return tr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
  }
  set value(t) {
    this._setter(t)
  }
}

function Mi(e, t, s = !1) {
  let n, r;
  const i = S(e);
  return i ? (n = e, r = he) : (n = e.get, r = e.set), new Ti(n, r, i || !r, s)
}

function Oe(e, t, s, n) {
  let r;
  try {
    r = n ? e(...n) : e()
  } catch (i) {
    Xt(i, t, s)
  }
  return r
}

function ge(e, t, s, n) {
  if (S(e)) {
    const i = Oe(e, t, s, n);
    return i && Fn(i) && i.catch(o => {
      Xt(o, t, s)
    }), i
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(ge(e[i], t, s, n));
  return r
}

function Xt(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      l = s;
    for (; i;) {
      const d = i.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, o, l) === !1) return
      }
      i = i.parent
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Oe(u, null, 10, [e, o, l]);
      return
    }
  }
  Si(e, s, r, n)
}

function Si(e, t, s, n = !0) {
  console.error(e)
}
let bt = !1,
  ys = !1;
const se = [];
let ve = 0;
const Qe = [];
let Ae = null,
  We = 0;
const ir = Promise.resolve();
let Ds = null;

function Ri(e) {
  const t = Ds || ir;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function ki(e) {
  let t = ve + 1,
    s = se.length;
  for (; t < s;) {
    const n = t + s >>> 1;
    xt(se[n]) < e ? t = n + 1 : s = n
  }
  return t
}

function Hs(e) {
  (!se.length || !se.includes(e, bt && e.allowRecurse ? ve + 1 : ve)) && (e.id == null ? se.push(e) : se.splice(ki(e.id), 0, e), or())
}

function or() {
  !bt && !ys && (ys = !0, Ds = ir.then(ar))
}

function ji(e) {
  const t = se.indexOf(e);
  t > ve && se.splice(t, 1)
}

function Oi(e) {
  T(e) ? Qe.push(...e) : (!Ae || !Ae.includes(e, e.allowRecurse ? We + 1 : We)) && Qe.push(e), or()
}

function dn(e, t = bt ? ve + 1 : 0) {
  for (; t < se.length; t++) {
    const s = se[t];
    s && s.pre && (se.splice(t, 1), t--, s())
  }
}

function lr(e) {
  if (Qe.length) {
    const t = [...new Set(Qe)];
    if (Qe.length = 0, Ae) {
      Ae.push(...t);
      return
    }
    for (Ae = t, Ae.sort((s, n) => xt(s) - xt(n)), We = 0; We < Ae.length; We++) Ae[We]();
    Ae = null, We = 0
  }
}
const xt = e => e.id == null ? 1 / 0 : e.id,
  Pi = (e, t) => {
    const s = xt(e) - xt(t);
    if (s === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1
    }
    return s
  };

function ar(e) {
  ys = !1, bt = !0, se.sort(Pi);
  const t = he;
  try {
    for (ve = 0; ve < se.length; ve++) {
      const s = se[ve];
      s && s.active !== !1 && Oe(s, null, 14)
    }
  } finally {
    ve = 0, se.length = 0, lr(), bt = !1, Ds = null, (se.length || Qe.length) && ar()
  }
}

function $i(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || W;
  let r = s;
  const i = t.startsWith("update:"),
    o = i && t.slice(7);
  if (o && o in n) {
    const _ = `${o==="modelValue"?"model":o}Modifiers`,
      {
        number: w,
        trim: A
      } = n[_] || W;
    A && (r = s.map(R => J(R) ? R.trim() : R)), w && (r = s.map(Bn))
  }
  let l, u = n[l = cs(t)] || n[l = cs(we(t))];
  !u && i && (u = n[l = cs(nt(t))]), u && ge(u, e, 6, r);
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = !0, ge(d, e, 6, r)
  }
}

function cr(e, t, s = !1) {
  const n = t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!S(e)) {
    const u = d => {
      const _ = cr(d, t, !0);
      _ && (l = !0, X(o, _))
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  return !i && !l ? (D(e) && n.set(e, null), null) : (T(i) ? i.forEach(u => o[u] = null) : X(o, i), D(e) && n.set(e, o), o)
}

function Qt(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), P(e, t[0].toLowerCase() + t.slice(1)) || P(e, nt(t)) || P(e, t))
}
let ce = null,
  es = null;

function Dt(e) {
  const t = ce;
  return ce = e, es = e && e.type.__scopeId || null, t
}

function Fi(e) {
  es = e
}

function Li() {
  es = null
}

function Ni(e, t = ce, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && wn(-1);
    const i = Dt(t);
    let o;
    try {
      o = e(...r)
    } finally {
      Dt(i), n._d && wn(1)
    }
    return o
  };
  return n._n = !0, n._c = !0, n._d = !0, n
}

function us(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: u,
    emit: d,
    render: _,
    renderCache: w,
    data: A,
    setupState: R,
    ctx: q,
    inheritAttrs: O
  } = e;
  let Z, Q;
  const ee = Dt(e);
  try {
    if (s.shapeFlag & 4) {
      const k = r || n;
      Z = ye(_.call(k, k, w, i, R, A, q)), Q = u
    } else {
      const k = t;
      Z = ye(k.length > 1 ? k(i, {
        attrs: u,
        slots: l,
        emit: d
      }) : k(i, null)), Q = t.props ? u : Bi(u)
    }
  } catch (k) {
    ht.length = 0, Xt(k, e, 1), Z = K(Ke)
  }
  let te = Z;
  if (Q && O !== !1) {
    const k = Object.keys(Q),
      {
        shapeFlag: Se
      } = te;
    k.length && Se & 7 && (o && k.some(Ss) && (Q = Ui(Q, o)), te = tt(te, Q))
  }
  return s.dirs && (te = tt(te), te.dirs = te.dirs ? te.dirs.concat(s.dirs) : s.dirs), s.transition && (te.transition = s.transition), Z = te, Dt(ee), Z
}
const Bi = e => {
    let t;
    for (const s in e)(s === "class" || s === "style" || Kt(s)) && ((t || (t = {}))[s] = e[s]);
    return t
  },
  Ui = (e, t) => {
    const s = {};
    for (const n in e)(!Ss(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s
  };

function Wi(e, t, s) {
  const {
    props: n,
    children: r,
    component: i
  } = e, {
    props: o,
    children: l,
    patchFlag: u
  } = t, d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return n ? fn(n, o, d) : !!o;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        const A = _[w];
        if (o[A] !== n[A] && !Qt(d, A)) return !0
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? fn(n, o, d) : !0 : !!o;
  return !1
}

function fn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Qt(s, i)) return !0
  }
  return !1
}

function Di({
  vnode: e,
  parent: t
}, s) {
  for (; t && t.subTree === e;)(e = t.vnode).el = s, t = t.parent
}
const Hi = e => e.__isSuspense;

function qi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Oi(e)
}
const Ot = {};

function ds(e, t, s) {
  return ur(e, t, s)
}

function ur(e, t, {
  immediate: s,
  deep: n,
  flush: r,
  onTrack: i,
  onTrigger: o
} = W) {
  var l;
  const u = Zr() === ((l = G) == null ? void 0 : l.scope) ? G : null;
  let d, _ = !1,
    w = !1;
  if (ne(e) ? (d = () => e.value, _ = Wt(e)) : Xe(e) ? (d = () => e, n = !0) : T(e) ? (w = !0, _ = e.some(k => Xe(k) || Wt(k)), d = () => e.map(k => {
      if (ne(k)) return k.value;
      if (Xe(k)) return He(k);
      if (S(k)) return Oe(k, u, 2)
    })) : S(e) ? t ? d = () => Oe(e, u, 2) : d = () => {
      if (!(u && u.isUnmounted)) return A && A(), ge(e, u, 3, [R])
    } : d = he, t && n) {
    const k = d;
    d = () => He(k())
  }
  let A, R = k => {
      A = ee.onStop = () => {
        Oe(k, u, 4)
      }
    },
    q;
  if (vt)
    if (R = he, t ? s && ge(t, u, 3, [d(), w ? [] : void 0, R]) : d(), r === "sync") {
      const k = Ho();
      q = k.__watcherHandles || (k.__watcherHandles = [])
    } else return he;
  let O = w ? new Array(e.length).fill(Ot) : Ot;
  const Z = () => {
    if (ee.active)
      if (t) {
        const k = ee.run();
        (n || _ || (w ? k.some((Se, ot) => gt(Se, O[ot])) : gt(k, O))) && (A && A(), ge(t, u, 3, [k, O === Ot ? void 0 : w && O[0] === Ot ? [] : O, R]), O = k)
      } else ee.run()
  };
  Z.allowRecurse = !!t;
  let Q;
  r === "sync" ? Q = Z : r === "post" ? Q = () => oe(Z, u && u.suspense) : (Z.pre = !0, u && (Z.id = u.uid), Q = () => Hs(Z));
  const ee = new Ps(d, Q);
  t ? s ? Z() : O = ee.run() : r === "post" ? oe(ee.run.bind(ee), u && u.suspense) : ee.run();
  const te = () => {
    ee.stop(), u && u.scope && Rs(u.scope.effects, ee)
  };
  return q && q.push(te), te
}

function zi(e, t, s) {
  const n = this.proxy,
    r = J(e) ? e.includes(".") ? dr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  S(t) ? i = t : (i = t.handler, s = t);
  const o = G;
  st(this);
  const l = ur(r, i.bind(n), s);
  return o ? st(o) : ze(), l
}

function dr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n
  }
}

function He(e, t) {
  if (!D(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
  if (t.add(e), ne(e)) He(e.value, t);
  else if (T(e))
    for (let s = 0; s < e.length; s++) He(e[s], t);
  else if (Vt(e) || Ge(e)) e.forEach(s => {
    He(s, t)
  });
  else if (Nn(e))
    for (const s in e) He(e[s], t);
  return e
}

function Ki(e, t) {
  const s = ce;
  if (s === null) return e;
  const n = rs(s) || s.proxy,
    r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, l, u, d = W] = t[i];
    o && (S(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && He(l), r.push({
      dir: o,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }))
  }
  return e
}

function Be(e, t, s, n) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let u = l.dir[n];
    u && (rt(), ge(u, s, 8, [e.el, l, e, t]), it())
  }
}
const Ft = e => !!e.type.__asyncLoader,
  fr = e => e.type.__isKeepAlive;

function Vi(e, t) {
  pr(e, "a", t)
}

function Ji(e, t) {
  pr(e, "da", t)
}

function pr(e, t, s = G) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r;) {
      if (r.isDeactivated) return;
      r = r.parent
    }
    return e()
  });
  if (ts(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent;) fr(r.parent.vnode) && Zi(n, t, s, r), r = r.parent
  }
}

function Zi(e, t, s, n) {
  const r = ts(t, e, n, !0);
  mr(() => {
    Rs(n[t], r)
  }, s)
}

function ts(e, t, s = G, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      i = t.__weh || (t.__weh = (...o) => {
        if (s.isUnmounted) return;
        rt(), st(s);
        const l = ge(t, s, e, o);
        return ze(), it(), l
      });
    return n ? r.unshift(i) : r.push(i), i
  }
}
const Te = e => (t, s = G) => (!vt || e === "sp") && ts(e, (...n) => t(...n), s),
  Yi = Te("bm"),
  hr = Te("m"),
  Gi = Te("bu"),
  Xi = Te("u"),
  Qi = Te("bum"),
  mr = Te("um"),
  eo = Te("sp"),
  to = Te("rtg"),
  so = Te("rtc");

function no(e, t = G) {
  ts("ec", e, t)
}
const gr = "components";

function ro(e, t) {
  return oo(gr, e, !0, t) || e
}
const io = Symbol.for("v-ndc");

function oo(e, t, s = !0, n = !1) {
  const r = ce || G;
  if (r) {
    const i = r.type;
    if (e === gr) {
      const l = Bo(i, !1);
      if (l && (l === t || l === we(t) || l === Zt(we(t)))) return i
    }
    const o = pn(r[e] || i[e], t) || pn(r.appContext[e], t);
    return !o && n ? i : o
  }
}

function pn(e, t) {
  return e && (e[t] || e[we(t)] || e[Zt(we(t))])
}

function Ee(e, t, s, n) {
  let r;
  const i = s && s[n];
  if (T(e) || J(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++) r[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o])
  } else if (D(e))
    if (e[Symbol.iterator]) r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const d = o[l];
        r[l] = t(e[d], d, l, i && i[l])
      }
    }
  else r = [];
  return s && (s[n] = r), r
}
const vs = e => e ? Mr(e) ? rs(e) || e.proxy : vs(e.parent) : null,
  pt = X(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => vs(e.parent),
    $root: e => vs(e.root),
    $emit: e => e.emit,
    $options: e => qs(e),
    $forceUpdate: e => e.f || (e.f = () => Hs(e.update)),
    $nextTick: e => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: e => zi.bind(e)
  }),
  fs = (e, t) => e !== W && !e.__isScriptSetup && P(e, t),
  lo = {
    get({
      _: e
    }, t) {
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: u
      } = e;
      let d;
      if (t[0] !== "$") {
        const R = o[t];
        if (R !== void 0) switch (R) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t]
        } else {
          if (fs(n, t)) return o[t] = 1, n[t];
          if (r !== W && P(r, t)) return o[t] = 2, r[t];
          if ((d = e.propsOptions[0]) && P(d, t)) return o[t] = 3, i[t];
          if (s !== W && P(s, t)) return o[t] = 4, s[t];
          ws && (o[t] = 0)
        }
      }
      const _ = pt[t];
      let w, A;
      if (_) return t === "$attrs" && le(e, "get", t), _(e);
      if ((w = l.__cssModules) && (w = w[t])) return w;
      if (s !== W && P(s, t)) return o[t] = 4, s[t];
      if (A = u.config.globalProperties, P(A, t)) return A[t]
    },
    set({
      _: e
    }, t, s) {
      const {
        data: n,
        setupState: r,
        ctx: i
      } = e;
      return fs(r, t) ? (r[t] = s, !0) : n !== W && P(n, t) ? (n[t] = s, !0) : P(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: s,
        ctx: n,
        appContext: r,
        propsOptions: i
      }
    }, o) {
      let l;
      return !!s[o] || e !== W && P(e, o) || fs(t, o) || (l = i[0]) && P(l, o) || P(n, o) || P(pt, o) || P(r.config.globalProperties, o)
    },
    defineProperty(e, t, s) {
      return s.get != null ? e._.accessCache[t] = 0 : P(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
    }
  };

function hn(e) {
  return T(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}
let ws = !0;

function ao(e) {
  const t = qs(e),
    s = e.proxy,
    n = e.ctx;
  ws = !1, t.beforeCreate && mn(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: u,
    inject: d,
    created: _,
    beforeMount: w,
    mounted: A,
    beforeUpdate: R,
    updated: q,
    activated: O,
    deactivated: Z,
    beforeDestroy: Q,
    beforeUnmount: ee,
    destroyed: te,
    unmounted: k,
    render: Se,
    renderTracked: ot,
    renderTriggered: Ct,
    errorCaptured: $e,
    serverPrefetch: is,
    expose: Fe,
    inheritAttrs: lt,
    components: At,
    directives: Et,
    filters: os
  } = t;
  if (d && co(d, n, null), o)
    for (const H in o) {
      const B = o[H];
      S(B) && (n[H] = B.bind(s))
    }
  if (r) {
    const H = r.call(s, s);
    D(H) && (e.data = Ns(H))
  }
  if (ws = !0, i)
    for (const H in i) {
      const B = i[H],
        Le = S(B) ? B.bind(s, s) : S(B.get) ? B.get.bind(s, s) : he,
        It = !S(B) && S(B.set) ? B.set.bind(s) : he,
        Ne = Wo({
          get: Le,
          set: It
        });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: _e => Ne.value = _e
      })
    }
  if (l)
    for (const H in l) _r(l[H], n, s, H);
  if (u) {
    const H = S(u) ? u.call(s) : u;
    Reflect.ownKeys(H).forEach(B => {
      go(B, H[B])
    })
  }
  _ && mn(_, e, "c");

  function re(H, B) {
    T(B) ? B.forEach(Le => H(Le.bind(s))) : B && H(B.bind(s))
  }
  if (re(Yi, w), re(hr, A), re(Gi, R), re(Xi, q), re(Vi, O), re(Ji, Z), re(no, $e), re(so, ot), re(to, Ct), re(Qi, ee), re(mr, k), re(eo, is), T(Fe))
    if (Fe.length) {
      const H = e.exposed || (e.exposed = {});
      Fe.forEach(B => {
        Object.defineProperty(H, B, {
          get: () => s[B],
          set: Le => s[B] = Le
        })
      })
    } else e.exposed || (e.exposed = {});
  Se && e.render === he && (e.render = Se), lt != null && (e.inheritAttrs = lt), At && (e.components = At), Et && (e.directives = Et)
}

function co(e, t, s = he) {
  T(e) && (e = Cs(e));
  for (const n in e) {
    const r = e[n];
    let i;
    D(r) ? "default" in r ? i = Lt(r.from || n, r.default, !0) : i = Lt(r.from || n) : i = Lt(r), ne(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: o => i.value = o
    }) : t[n] = i
  }
}

function mn(e, t, s) {
  ge(T(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}

function _r(e, t, s, n) {
  const r = n.includes(".") ? dr(s, n) : () => s[n];
  if (J(e)) {
    const i = t[e];
    S(i) && ds(r, i)
  } else if (S(e)) ds(r, e.bind(s));
  else if (D(e))
    if (T(e)) e.forEach(i => _r(i, t, s, n));
    else {
      const i = S(e.handler) ? e.handler.bind(s) : t[e.handler];
      S(i) && ds(r, i, e)
    }
}

function qs(e) {
  const t = e.type,
    {
      mixins: s,
      extends: n
    } = t,
    {
      mixins: r,
      optionsCache: i,
      config: {
        optionMergeStrategies: o
      }
    } = e.appContext,
    l = i.get(t);
  let u;
  return l ? u = l : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(d => Ht(u, d, o, !0)), Ht(u, t, o)), D(t) && i.set(t, u), u
}

function Ht(e, t, s, n = !1) {
  const {
    mixins: r,
    extends: i
  } = t;
  i && Ht(e, i, s, !0), r && r.forEach(o => Ht(e, o, s, !0));
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = uo[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o]
    } return e
}
const uo = {
  data: gn,
  props: _n,
  emits: _n,
  methods: dt,
  computed: dt,
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  components: dt,
  directives: dt,
  watch: po,
  provide: gn,
  inject: fo
};

function gn(e, t) {
  return t ? e ? function () {
    return X(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t)
  } : t : e
}

function fo(e, t) {
  return dt(Cs(e), Cs(t))
}

function Cs(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t
  }
  return e
}

function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function dt(e, t) {
  return e ? X(Object.create(null), e, t) : t
}

function _n(e, t) {
  return e ? T(e) && T(t) ? [...new Set([...e, ...t])] : X(Object.create(null), hn(e), hn(t ?? {})) : t
}

function po(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = X(Object.create(null), e);
  for (const n in t) s[n] = ie(e[n], t[n]);
  return s
}

function br() {
  return {
    app: null,
    config: {
      isNativeTag: Or,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let ho = 0;

function mo(e, t) {
  return function (n, r = null) {
    S(n) || (n = X({}, n)), r != null && !D(r) && (r = null);
    const i = br(),
      o = new Set;
    let l = !1;
    const u = i.app = {
      _uid: ho++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qo,
      get config() {
        return i.config
      },
      set config(d) {},
      use(d, ..._) {
        return o.has(d) || (d && S(d.install) ? (o.add(d), d.install(u, ..._)) : S(d) && (o.add(d), d(u, ..._))), u
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), u
      },
      component(d, _) {
        return _ ? (i.components[d] = _, u) : i.components[d]
      },
      directive(d, _) {
        return _ ? (i.directives[d] = _, u) : i.directives[d]
      },
      mount(d, _, w) {
        if (!l) {
          const A = K(n, r);
          return A.appContext = i, _ && t ? t(A, d) : e(A, d, w), l = !0, u._container = d, d.__vue_app__ = u, rs(A.component) || A.component.proxy
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__)
      },
      provide(d, _) {
        return i.provides[d] = _, u
      },
      runWithContext(d) {
        qt = u;
        try {
          return d()
        } finally {
          qt = null
        }
      }
    };
    return u
  }
}
let qt = null;

function go(e, t) {
  if (G) {
    let s = G.provides;
    const n = G.parent && G.parent.provides;
    n === s && (s = G.provides = Object.create(n)), s[e] = t
  }
}

function Lt(e, t, s = !1) {
  const n = G || ce;
  if (n || qt) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : qt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && S(t) ? t.call(n && n.proxy) : t
  }
}

function _o(e, t, s, n = !1) {
  const r = {},
    i = {};
  Ut(i, ns, 1), e.propsDefaults = Object.create(null), xr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  s ? e.props = n ? r : wi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function bo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: {
      patchFlag: o
    }
  } = e, l = F(r), [u] = e.propsOptions;
  let d = !1;
  if ((n || o > 0) && !(o & 16)) {
    if (o & 8) {
      const _ = e.vnode.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        let A = _[w];
        if (Qt(e.emitsOptions, A)) continue;
        const R = t[A];
        if (u)
          if (P(i, A)) R !== i[A] && (i[A] = R, d = !0);
          else {
            const q = we(A);
            r[q] = As(u, l, q, R, e, !1)
          }
        else R !== i[A] && (i[A] = R, d = !0)
      }
    }
  } else {
    xr(e, t, r, i) && (d = !0);
    let _;
    for (const w in l)(!t || !P(t, w) && ((_ = nt(w)) === w || !P(t, _))) && (u ? s && (s[w] !== void 0 || s[_] !== void 0) && (r[w] = As(u, l, w, void 0, e, !0)) : delete r[w]);
    if (i !== l)
      for (const w in i)(!t || !P(t, w)) && (delete i[w], d = !0)
  }
  d && Ie(e, "set", "$attrs")
}

function xr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let u in t) {
      if (Pt(u)) continue;
      const d = t[u];
      let _;
      r && P(r, _ = we(u)) ? !i || !i.includes(_) ? s[_] = d : (l || (l = {}))[_] = d : Qt(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, o = !0)
    }
  if (i) {
    const u = F(s),
      d = l || W;
    for (let _ = 0; _ < i.length; _++) {
      const w = i[_];
      s[w] = As(r, u, w, d[w], e, !P(d, w))
    }
  }
  return o
}

function As(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = P(o, "default");
    if (l && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && S(u)) {
        const {
          propsDefaults: d
        } = r;
        s in d ? n = d[s] : (st(r), n = d[s] = u.call(null, t), ze())
      } else n = u
    }
    o[0] && (i && !l ? n = !1 : o[1] && (n === "" || n === nt(s)) && (n = !0))
  }
  return n
}

function yr(e, t, s = !1) {
  const n = t.propsCache,
    r = n.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let u = !1;
  if (!S(e)) {
    const _ = w => {
      u = !0;
      const [A, R] = yr(w, t, !0);
      X(o, A), R && l.push(...R)
    };
    !s && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_)
  }
  if (!i && !u) return D(e) && n.set(e, Ye), Ye;
  if (T(i))
    for (let _ = 0; _ < i.length; _++) {
      const w = we(i[_]);
      bn(w) && (o[w] = W)
    } else if (i)
      for (const _ in i) {
        const w = we(_);
        if (bn(w)) {
          const A = i[_],
            R = o[w] = T(A) || S(A) ? {
              type: A
            } : X({}, A);
          if (R) {
            const q = vn(Boolean, R.type),
              O = vn(String, R.type);
            R[0] = q > -1, R[1] = O < 0 || q < O, (q > -1 || P(R, "default")) && l.push(w)
          }
        }
      }
  const d = [o, l];
  return D(e) && n.set(e, d), d
}

function bn(e) {
  return e[0] !== "$"
}

function xn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : ""
}

function yn(e, t) {
  return xn(e) === xn(t)
}

function vn(e, t) {
  return T(t) ? t.findIndex(s => yn(s, e)) : S(t) && yn(t, e) ? 0 : -1
}
const vr = e => e[0] === "_" || e === "$stable",
  zs = e => T(e) ? e.map(ye) : [ye(e)],
  xo = (e, t, s) => {
    if (t._n) return t;
    const n = Ni((...r) => zs(t(...r)), s);
    return n._c = !1, n
  },
  wr = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (vr(r)) continue;
      const i = e[r];
      if (S(i)) t[r] = xo(r, i, n);
      else if (i != null) {
        const o = zs(i);
        t[r] = () => o
      }
    }
  },
  Cr = (e, t) => {
    const s = zs(t);
    e.slots.default = () => s
  },
  yo = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (e.slots = F(t), Ut(t, "_", s)) : wr(t, e.slots = {})
    } else e.slots = {}, t && Cr(e, t);
    Ut(e.slots, ns, 1)
  },
  vo = (e, t, s) => {
    const {
      vnode: n,
      slots: r
    } = e;
    let i = !0,
      o = W;
    if (n.shapeFlag & 32) {
      const l = t._;
      l ? s && l === 1 ? i = !1 : (X(r, t), !s && l === 1 && delete r._) : (i = !t.$stable, wr(t, r)), o = t
    } else t && (Cr(e, t), o = {
      default: 1
    });
    if (i)
      for (const l in r) !vr(l) && !(l in o) && delete r[l]
  };

function Es(e, t, s, n, r = !1) {
  if (T(e)) {
    e.forEach((A, R) => Es(A, t && (T(t) ? t[R] : t), s, n, r));
    return
  }
  if (Ft(n) && !r) return;
  const i = n.shapeFlag & 4 ? rs(n.component) || n.component.proxy : n.el,
    o = r ? null : i,
    {
      i: l,
      r: u
    } = e,
    d = t && t.r,
    _ = l.refs === W ? l.refs = {} : l.refs,
    w = l.setupState;
  if (d != null && d !== u && (J(d) ? (_[d] = null, P(w, d) && (w[d] = null)) : ne(d) && (d.value = null)), S(u)) Oe(u, l, 12, [o, _]);
  else {
    const A = J(u),
      R = ne(u);
    if (A || R) {
      const q = () => {
        if (e.f) {
          const O = A ? P(w, u) ? w[u] : _[u] : u.value;
          r ? T(O) && Rs(O, i) : T(O) ? O.includes(i) || O.push(i) : A ? (_[u] = [i], P(w, u) && (w[u] = _[u])) : (u.value = [i], e.k && (_[e.k] = u.value))
        } else A ? (_[u] = o, P(w, u) && (w[u] = o)) : R && (u.value = o, e.k && (_[e.k] = o))
      };
      o ? (q.id = -1, oe(q, s)) : q()
    }
  }
}
const oe = qi;

function wo(e) {
  return Co(e)
}

function Co(e, t) {
  const s = ms();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: u,
    setText: d,
    setElementText: _,
    parentNode: w,
    nextSibling: A,
    setScopeId: R = he,
    insertStaticContent: q
  } = e, O = (a, c, f, m = null, h = null, x = null, v = !1, b = null, y = !!c.dynamicChildren) => {
    if (a === c) return;
    a && !ct(a, c) && (m = Tt(a), _e(a, h, x, !0), a = null), c.patchFlag === -2 && (y = !1, c.dynamicChildren = null);
    const {
      type: g,
      ref: E,
      shapeFlag: C
    } = c;
    switch (g) {
      case ss:
        Z(a, c, f, m);
        break;
      case Ke:
        Q(a, c, f, m);
        break;
      case Nt:
        a == null && ee(c, f, m, v);
        break;
      case V:
        At(a, c, f, m, h, x, v, b, y);
        break;
      default:
        C & 1 ? Se(a, c, f, m, h, x, v, b, y) : C & 6 ? Et(a, c, f, m, h, x, v, b, y) : (C & 64 || C & 128) && g.process(a, c, f, m, h, x, v, b, y, Ve)
    }
    E != null && h && Es(E, a && a.ref, x, c || a, !c)
  }, Z = (a, c, f, m) => {
    if (a == null) n(c.el = l(c.children), f, m);
    else {
      const h = c.el = a.el;
      c.children !== a.children && d(h, c.children)
    }
  }, Q = (a, c, f, m) => {
    a == null ? n(c.el = u(c.children || ""), f, m) : c.el = a.el
  }, ee = (a, c, f, m) => {
    [a.el, a.anchor] = q(a.children, c, f, m, a.el, a.anchor)
  }, te = ({
    el: a,
    anchor: c
  }, f, m) => {
    let h;
    for (; a && a !== c;) h = A(a), n(a, f, m), a = h;
    n(c, f, m)
  }, k = ({
    el: a,
    anchor: c
  }) => {
    let f;
    for (; a && a !== c;) f = A(a), r(a), a = f;
    r(c)
  }, Se = (a, c, f, m, h, x, v, b, y) => {
    v = v || c.type === "svg", a == null ? ot(c, f, m, h, x, v, b, y) : is(a, c, h, x, v, b, y)
  }, ot = (a, c, f, m, h, x, v, b) => {
    let y, g;
    const {
      type: E,
      props: C,
      shapeFlag: I,
      transition: M,
      dirs: j
    } = a;
    if (y = a.el = o(a.type, x, C && C.is, C), I & 8 ? _(y, a.children) : I & 16 && $e(a.children, y, null, m, h, x && E !== "foreignObject", v, b), j && Be(a, null, m, "created"), Ct(y, a, a.scopeId, v, m), C) {
      for (const N in C) N !== "value" && !Pt(N) && i(y, N, null, C[N], x, a.children, m, h, Ce);
      "value" in C && i(y, "value", null, C.value), (g = C.onVnodeBeforeMount) && xe(g, m, a)
    }
    j && Be(a, null, m, "beforeMount");
    const U = (!h || h && !h.pendingBranch) && M && !M.persisted;
    U && M.beforeEnter(y), n(y, c, f), ((g = C && C.onVnodeMounted) || U || j) && oe(() => {
      g && xe(g, m, a), U && M.enter(y), j && Be(a, null, m, "mounted")
    }, h)
  }, Ct = (a, c, f, m, h) => {
    if (f && R(a, f), m)
      for (let x = 0; x < m.length; x++) R(a, m[x]);
    if (h) {
      let x = h.subTree;
      if (c === x) {
        const v = h.vnode;
        Ct(a, v, v.scopeId, v.slotScopeIds, h.parent)
      }
    }
  }, $e = (a, c, f, m, h, x, v, b, y = 0) => {
    for (let g = y; g < a.length; g++) {
      const E = a[g] = b ? ke(a[g]) : ye(a[g]);
      O(null, E, c, f, m, h, x, v, b)
    }
  }, is = (a, c, f, m, h, x, v) => {
    const b = c.el = a.el;
    let {
      patchFlag: y,
      dynamicChildren: g,
      dirs: E
    } = c;
    y |= a.patchFlag & 16;
    const C = a.props || W,
      I = c.props || W;
    let M;
    f && Ue(f, !1), (M = I.onVnodeBeforeUpdate) && xe(M, f, c, a), E && Be(c, a, f, "beforeUpdate"), f && Ue(f, !0);
    const j = h && c.type !== "foreignObject";
    if (g ? Fe(a.dynamicChildren, g, b, f, m, j, x) : v || B(a, c, b, null, f, m, j, x, !1), y > 0) {
      if (y & 16) lt(b, c, C, I, f, m, h);
      else if (y & 2 && C.class !== I.class && i(b, "class", null, I.class, h), y & 4 && i(b, "style", C.style, I.style, h), y & 8) {
        const U = c.dynamicProps;
        for (let N = 0; N < U.length; N++) {
          const z = U[N],
            ue = C[z],
            Je = I[z];
          (Je !== ue || z === "value") && i(b, z, ue, Je, h, a.children, f, m, Ce)
        }
      }
      y & 1 && a.children !== c.children && _(b, c.children)
    } else !v && g == null && lt(b, c, C, I, f, m, h);
    ((M = I.onVnodeUpdated) || E) && oe(() => {
      M && xe(M, f, c, a), E && Be(c, a, f, "updated")
    }, m)
  }, Fe = (a, c, f, m, h, x, v) => {
    for (let b = 0; b < c.length; b++) {
      const y = a[b],
        g = c[b],
        E = y.el && (y.type === V || !ct(y, g) || y.shapeFlag & 70) ? w(y.el) : f;
      O(y, g, E, null, m, h, x, v, !0)
    }
  }, lt = (a, c, f, m, h, x, v) => {
    if (f !== m) {
      if (f !== W)
        for (const b in f) !Pt(b) && !(b in m) && i(a, b, f[b], null, v, c.children, h, x, Ce);
      for (const b in m) {
        if (Pt(b)) continue;
        const y = m[b],
          g = f[b];
        y !== g && b !== "value" && i(a, b, g, y, v, c.children, h, x, Ce)
      }
      "value" in m && i(a, "value", f.value, m.value)
    }
  }, At = (a, c, f, m, h, x, v, b, y) => {
    const g = c.el = a ? a.el : l(""),
      E = c.anchor = a ? a.anchor : l("");
    let {
      patchFlag: C,
      dynamicChildren: I,
      slotScopeIds: M
    } = c;
    M && (b = b ? b.concat(M) : M), a == null ? (n(g, f, m), n(E, f, m), $e(c.children, f, E, h, x, v, b, y)) : C > 0 && C & 64 && I && a.dynamicChildren ? (Fe(a.dynamicChildren, I, f, h, x, v, b), (c.key != null || h && c === h.subTree) && Ar(a, c, !0)) : B(a, c, f, E, h, x, v, b, y)
  }, Et = (a, c, f, m, h, x, v, b, y) => {
    c.slotScopeIds = b, a == null ? c.shapeFlag & 512 ? h.ctx.activate(c, f, m, v, y) : os(c, f, m, h, x, v, y) : Zs(a, c, y)
  }, os = (a, c, f, m, h, x, v) => {
    const b = a.component = Po(a, m, h);
    if (fr(a) && (b.ctx.renderer = Ve), $o(b), b.asyncDep) {
      if (h && h.registerDep(b, re), !a.el) {
        const y = b.subTree = K(Ke);
        Q(null, y, c, f)
      }
      return
    }
    re(b, a, c, f, h, x, v)
  }, Zs = (a, c, f) => {
    const m = c.component = a.component;
    if (Wi(a, c, f))
      if (m.asyncDep && !m.asyncResolved) {
        H(m, c, f);
        return
      } else m.next = c, ji(m.update), m.update();
    else c.el = a.el, m.vnode = c
  }, re = (a, c, f, m, h, x, v) => {
    const b = () => {
        if (a.isMounted) {
          let {
            next: E,
            bu: C,
            u: I,
            parent: M,
            vnode: j
          } = a, U = E, N;
          Ue(a, !1), E ? (E.el = j.el, H(a, E, v)) : E = j, C && $t(C), (N = E.props && E.props.onVnodeBeforeUpdate) && xe(N, M, E, j), Ue(a, !0);
          const z = us(a),
            ue = a.subTree;
          a.subTree = z, O(ue, z, w(ue.el), Tt(ue), a, h, x), E.el = z.el, U === null && Di(a, z.el), I && oe(I, h), (N = E.props && E.props.onVnodeUpdated) && oe(() => xe(N, M, E, j), h)
        } else {
          let E;
          const {
            el: C,
            props: I
          } = c, {
            bm: M,
            m: j,
            parent: U
          } = a, N = Ft(c);
          if (Ue(a, !1), M && $t(M), !N && (E = I && I.onVnodeBeforeMount) && xe(E, U, c), Ue(a, !0), C && as) {
            const z = () => {
              a.subTree = us(a), as(C, a.subTree, a, h, null)
            };
            N ? c.type.__asyncLoader().then(() => !a.isUnmounted && z()) : z()
          } else {
            const z = a.subTree = us(a);
            O(null, z, f, m, a, h, x), c.el = z.el
          }
          if (j && oe(j, h), !N && (E = I && I.onVnodeMounted)) {
            const z = c;
            oe(() => xe(E, U, z), h)
          }(c.shapeFlag & 256 || U && Ft(U.vnode) && U.vnode.shapeFlag & 256) && a.a && oe(a.a, h), a.isMounted = !0, c = f = m = null
        }
      },
      y = a.effect = new Ps(b, () => Hs(g), a.scope),
      g = a.update = () => y.run();
    g.id = a.uid, Ue(a, !0), g()
  }, H = (a, c, f) => {
    c.component = a;
    const m = a.vnode.props;
    a.vnode = c, a.next = null, bo(a, c.props, m, f), vo(a, c.children, f), rt(), dn(), it()
  }, B = (a, c, f, m, h, x, v, b, y = !1) => {
    const g = a && a.children,
      E = a ? a.shapeFlag : 0,
      C = c.children,
      {
        patchFlag: I,
        shapeFlag: M
      } = c;
    if (I > 0) {
      if (I & 128) {
        It(g, C, f, m, h, x, v, b, y);
        return
      } else if (I & 256) {
        Le(g, C, f, m, h, x, v, b, y);
        return
      }
    }
    M & 8 ? (E & 16 && Ce(g, h, x), C !== g && _(f, C)) : E & 16 ? M & 16 ? It(g, C, f, m, h, x, v, b, y) : Ce(g, h, x, !0) : (E & 8 && _(f, ""), M & 16 && $e(C, f, m, h, x, v, b, y))
  }, Le = (a, c, f, m, h, x, v, b, y) => {
    a = a || Ye, c = c || Ye;
    const g = a.length,
      E = c.length,
      C = Math.min(g, E);
    let I;
    for (I = 0; I < C; I++) {
      const M = c[I] = y ? ke(c[I]) : ye(c[I]);
      O(a[I], M, f, null, h, x, v, b, y)
    }
    g > E ? Ce(a, h, x, !0, !1, C) : $e(c, f, m, h, x, v, b, y, C)
  }, It = (a, c, f, m, h, x, v, b, y) => {
    let g = 0;
    const E = c.length;
    let C = a.length - 1,
      I = E - 1;
    for (; g <= C && g <= I;) {
      const M = a[g],
        j = c[g] = y ? ke(c[g]) : ye(c[g]);
      if (ct(M, j)) O(M, j, f, null, h, x, v, b, y);
      else break;
      g++
    }
    for (; g <= C && g <= I;) {
      const M = a[C],
        j = c[I] = y ? ke(c[I]) : ye(c[I]);
      if (ct(M, j)) O(M, j, f, null, h, x, v, b, y);
      else break;
      C--, I--
    }
    if (g > C) {
      if (g <= I) {
        const M = I + 1,
          j = M < E ? c[M].el : m;
        for (; g <= I;) O(null, c[g] = y ? ke(c[g]) : ye(c[g]), f, j, h, x, v, b, y), g++
      }
    } else if (g > I)
      for (; g <= C;) _e(a[g], h, x, !0), g++;
    else {
      const M = g,
        j = g,
        U = new Map;
      for (g = j; g <= I; g++) {
        const ae = c[g] = y ? ke(c[g]) : ye(c[g]);
        ae.key != null && U.set(ae.key, g)
      }
      let N, z = 0;
      const ue = I - j + 1;
      let Je = !1,
        Xs = 0;
      const at = new Array(ue);
      for (g = 0; g < ue; g++) at[g] = 0;
      for (g = M; g <= C; g++) {
        const ae = a[g];
        if (z >= ue) {
          _e(ae, h, x, !0);
          continue
        }
        let be;
        if (ae.key != null) be = U.get(ae.key);
        else
          for (N = j; N <= I; N++)
            if (at[N - j] === 0 && ct(ae, c[N])) {
              be = N;
              break
            } be === void 0 ? _e(ae, h, x, !0) : (at[be - j] = g + 1, be >= Xs ? Xs = be : Je = !0, O(ae, c[be], f, null, h, x, v, b, y), z++)
      }
      const Qs = Je ? Ao(at) : Ye;
      for (N = Qs.length - 1, g = ue - 1; g >= 0; g--) {
        const ae = j + g,
          be = c[ae],
          en = ae + 1 < E ? c[ae + 1].el : m;
        at[g] === 0 ? O(null, be, f, en, h, x, v, b, y) : Je && (N < 0 || g !== Qs[N] ? Ne(be, f, en, 2) : N--)
      }
    }
  }, Ne = (a, c, f, m, h = null) => {
    const {
      el: x,
      type: v,
      transition: b,
      children: y,
      shapeFlag: g
    } = a;
    if (g & 6) {
      Ne(a.component.subTree, c, f, m);
      return
    }
    if (g & 128) {
      a.suspense.move(c, f, m);
      return
    }
    if (g & 64) {
      v.move(a, c, f, Ve);
      return
    }
    if (v === V) {
      n(x, c, f);
      for (let C = 0; C < y.length; C++) Ne(y[C], c, f, m);
      n(a.anchor, c, f);
      return
    }
    if (v === Nt) {
      te(a, c, f);
      return
    }
    if (m !== 2 && g & 1 && b)
      if (m === 0) b.beforeEnter(x), n(x, c, f), oe(() => b.enter(x), h);
      else {
        const {
          leave: C,
          delayLeave: I,
          afterLeave: M
        } = b, j = () => n(x, c, f), U = () => {
          C(x, () => {
            j(), M && M()
          })
        };
        I ? I(x, j, U) : U()
      }
    else n(x, c, f)
  }, _e = (a, c, f, m = !1, h = !1) => {
    const {
      type: x,
      props: v,
      ref: b,
      children: y,
      dynamicChildren: g,
      shapeFlag: E,
      patchFlag: C,
      dirs: I
    } = a;
    if (b != null && Es(b, null, f, a, !0), E & 256) {
      c.ctx.deactivate(a);
      return
    }
    const M = E & 1 && I,
      j = !Ft(a);
    let U;
    if (j && (U = v && v.onVnodeBeforeUnmount) && xe(U, c, a), E & 6) jr(a.component, f, m);
    else {
      if (E & 128) {
        a.suspense.unmount(f, m);
        return
      }
      M && Be(a, null, c, "beforeUnmount"), E & 64 ? a.type.remove(a, c, f, h, Ve, m) : g && (x !== V || C > 0 && C & 64) ? Ce(g, c, f, !1, !0) : (x === V && C & 384 || !h && E & 16) && Ce(y, c, f), m && Ys(a)
    }(j && (U = v && v.onVnodeUnmounted) || M) && oe(() => {
      U && xe(U, c, a), M && Be(a, null, c, "unmounted")
    }, f)
  }, Ys = a => {
    const {
      type: c,
      el: f,
      anchor: m,
      transition: h
    } = a;
    if (c === V) {
      kr(f, m);
      return
    }
    if (c === Nt) {
      k(a);
      return
    }
    const x = () => {
      r(f), h && !h.persisted && h.afterLeave && h.afterLeave()
    };
    if (a.shapeFlag & 1 && h && !h.persisted) {
      const {
        leave: v,
        delayLeave: b
      } = h, y = () => v(f, x);
      b ? b(a.el, x, y) : y()
    } else x()
  }, kr = (a, c) => {
    let f;
    for (; a !== c;) f = A(a), r(a), a = f;
    r(c)
  }, jr = (a, c, f) => {
    const {
      bum: m,
      scope: h,
      update: x,
      subTree: v,
      um: b
    } = a;
    m && $t(m), h.stop(), x && (x.active = !1, _e(v, a, c, f)), b && oe(b, c), oe(() => {
      a.isUnmounted = !0
    }, c), c && c.pendingBranch && !c.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve())
  }, Ce = (a, c, f, m = !1, h = !1, x = 0) => {
    for (let v = x; v < a.length; v++) _e(a[v], c, f, m, h)
  }, Tt = a => a.shapeFlag & 6 ? Tt(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : A(a.anchor || a.el), Gs = (a, c, f) => {
    a == null ? c._vnode && _e(c._vnode, null, null, !0) : O(c._vnode || null, a, c, null, null, null, f), dn(), lr(), c._vnode = a
  }, Ve = {
    p: O,
    um: _e,
    m: Ne,
    r: Ys,
    mt: os,
    mc: $e,
    pc: B,
    pbc: Fe,
    n: Tt,
    o: e
  };
  let ls, as;
  return t && ([ls, as] = t(Ve)), {
    render: Gs,
    hydrate: ls,
    createApp: mo(Gs, ls)
  }
}

function Ue({
  effect: e,
  update: t
}, s) {
  e.allowRecurse = t.allowRecurse = s
}

function Ar(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (T(n) && T(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = ke(r[i]), l.el = o.el), s || Ar(o, l)), l.type === ss && (l.el = o.el)
    }
}

function Ao(e) {
  const t = e.slice(),
    s = [0];
  let n, r, i, o, l;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue
      }
      for (i = 0, o = s.length - 1; i < o;) l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n)
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0;) s[i] = o, o = t[o];
  return s
}
const Eo = e => e.__isTeleport,
  V = Symbol.for("v-fgt"),
  ss = Symbol.for("v-txt"),
  Ke = Symbol.for("v-cmt"),
  Nt = Symbol.for("v-stc"),
  ht = [];
let pe = null;

function $(e = !1) {
  ht.push(pe = e ? null : [])
}

function Io() {
  ht.pop(), pe = ht[ht.length - 1] || null
}
let yt = 1;

function wn(e) {
  yt += e
}

function Er(e) {
  return e.dynamicChildren = yt > 0 ? pe || Ye : null, Io(), yt > 0 && pe && pe.push(e), e
}

function L(e, t, s, n, r, i) {
  return Er(p(e, t, s, n, r, i, !0))
}

function To(e, t, s, n, r) {
  return Er(K(e, t, s, n, r, !0))
}

function Mo(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function ct(e, t) {
  return e.type === t.type && e.key === t.key
}
const ns = "__vInternal",
  Ir = ({
    key: e
  }) => e ?? null,
  Bt = ({
    ref: e,
    ref_key: t,
    ref_for: s
  }) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || ne(e) || S(e) ? {
    i: ce,
    r: e,
    k: t,
    f: !!s
  } : e : null);

function p(e, t = null, s = null, n = 0, r = null, i = e === V ? 0 : 1, o = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ir(t),
    ref: t && Bt(t),
    scopeId: es,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return l ? (Ks(u, s), i & 128 && e.normalize(u)) : s && (u.shapeFlag |= J(s) ? 8 : 16), yt > 0 && !o && pe && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && pe.push(u), u
}
const K = So;

function So(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === io) && (e = Ke), Mo(e)) {
    const l = tt(e, t, !0);
    return s && Ks(l, s), yt > 0 && !i && pe && (l.shapeFlag & 6 ? pe[pe.indexOf(e)] = l : pe.push(l)), l.patchFlag |= -2, l
  }
  if (Uo(e) && (e = e.__vccOpts), t) {
    t = Ro(t);
    let {
      class: l,
      style: u
    } = t;
    l && !J(l) && (t.class = me(l)), D(u) && (er(u) && !T(u) && (u = X({}, u)), t.style = js(u))
  }
  const o = J(e) ? 1 : Hi(e) ? 128 : Eo(e) ? 64 : D(e) ? 4 : S(e) ? 2 : 0;
  return p(e, t, s, n, r, o, i, !0)
}

function Ro(e) {
  return e ? er(e) || ns in e ? X({}, e) : e : null
}

function tt(e, t, s = !1) {
  const {
    props: n,
    ref: r,
    patchFlag: i,
    children: o
  } = e, l = t ? ko(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ir(l),
    ref: t && t.ref ? s && r ? T(r) ? r.concat(Bt(t)) : [r, Bt(t)] : Bt(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== V ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}

function Is(e = " ", t = 0) {
  return K(ss, null, e, t)
}

function Tr(e, t) {
  const s = K(Nt, null, e);
  return s.staticCount = t, s
}

function ft(e = "", t = !1) {
  return t ? ($(), To(Ke, null, e)) : K(Ke, null, e)
}

function ye(e) {
  return e == null || typeof e == "boolean" ? K(Ke) : T(e) ? K(V, null, e.slice()) : typeof e == "object" ? ke(e) : K(ss, null, String(e))
}

function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e)
}

function Ks(e, t) {
  let s = 0;
  const {
    shapeFlag: n
  } = e;
  if (t == null) t = null;
  else if (T(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ks(e, r()), r._c && (r._d = !0));
      return
    } else {
      s = 32;
      const r = t._;
      !r && !(ns in t) ? t._ctx = ce : r === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else S(t) ? (t = {
    default: t,
    _ctx: ce
  }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Is(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s
}

function ko(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class") t.class !== n.class && (t.class = me([t.class, n.class]));
      else if (r === "style") t.style = js([t.style, n.style]);
    else if (Kt(r)) {
      const i = t[r],
        o = n[r];
      o && i !== o && !(T(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
    } else r !== "" && (t[r] = n[r])
  }
  return t
}

function xe(e, t, s, n = null) {
  ge(e, t, 7, [s, n])
}
const jo = br();
let Oo = 0;

function Po(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || jo,
    i = {
      uid: Oo++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Dn(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yr(n, r),
      emitsOptions: cr(n, r),
      emit: null,
      emitted: null,
      propsDefaults: W,
      inheritAttrs: n.inheritAttrs,
      ctx: W,
      data: W,
      props: W,
      attrs: W,
      slots: W,
      refs: W,
      setupState: W,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return i.ctx = {
    _: i
  }, i.root = t ? t.root : i, i.emit = $i.bind(null, i), e.ce && e.ce(i), i
}
let G = null,
  Vs, Ze, Cn = "__VUE_INSTANCE_SETTERS__";
(Ze = ms()[Cn]) || (Ze = ms()[Cn] = []), Ze.push(e => G = e), Vs = e => {
  Ze.length > 1 ? Ze.forEach(t => t(e)) : Ze[0](e)
};
const st = e => {
    Vs(e), e.scope.on()
  },
  ze = () => {
    G && G.scope.off(), Vs(null)
  };

function Mr(e) {
  return e.vnode.shapeFlag & 4
}
let vt = !1;

function $o(e, t = !1) {
  vt = t;
  const {
    props: s,
    children: n
  } = e.vnode, r = Mr(e);
  _o(e, s, r, t), yo(e, n);
  const i = r ? Fo(e, t) : void 0;
  return vt = !1, i
}

function Fo(e, t) {
  const s = e.type;
  e.accessCache = Object.create(null), e.proxy = Us(new Proxy(e.ctx, lo));
  const {
    setup: n
  } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? No(e) : null;
    st(e), rt();
    const i = Oe(n, e, 0, [e.props, r]);
    if (it(), ze(), Fn(i)) {
      if (i.then(ze, ze), t) return i.then(o => {
        An(e, o, t)
      }).catch(o => {
        Xt(o, e, 0)
      });
      e.asyncDep = i
    } else An(e, i, t)
  } else Sr(e, t)
}

function An(e, t, s) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : D(t) && (e.setupState = rr(t)), Sr(e, s)
}
let En;

function Sr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && En && !n.render) {
      const r = n.template || qs(e).template;
      if (r) {
        const {
          isCustomElement: i,
          compilerOptions: o
        } = e.appContext.config, {
          delimiters: l,
          compilerOptions: u
        } = n, d = X(X({
          isCustomElement: i,
          delimiters: l
        }, o), u);
        n.render = En(r, d)
      }
    }
    e.render = n.render || he
  }
  st(e), rt(), ao(e), it(), ze()
}

function Lo(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
    get(t, s) {
      return le(e, "get", "$attrs"), t[s]
    }
  }))
}

function No(e) {
  const t = s => {
    e.exposed = s || {}
  };
  return {
    get attrs() {
      return Lo(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function rs(e) {
  if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(rr(Us(e.exposed)), {
    get(t, s) {
      if (s in t) return t[s];
      if (s in pt) return pt[s](e)
    },
    has(t, s) {
      return s in t || s in pt
    }
  }))
}

function Bo(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Uo(e) {
  return S(e) && "__vccOpts" in e
}
const Wo = (e, t) => Mi(e, t, vt),
  Do = Symbol.for("v-scx"),
  Ho = () => Lt(Do),
  qo = "3.3.4",
  zo = "http://www.w3.org/2000/svg",
  De = typeof document < "u" ? document : null,
  In = De && De.createElement("template"),
  Ko = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, s, n) => {
      const r = t ? De.createElementNS(zo, e) : De.createElement(e, s ? {
        is: s
      } : void 0);
      return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r
    },
    createText: e => De.createTextNode(e),
    createComment: e => De.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => De.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, s, n, r, i) {
      const o = s ? s.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)););
      else {
        In.innerHTML = n ? `<svg>${e}</svg>` : e;
        const l = In.content;
        if (n) {
          const u = l.firstChild;
          for (; u.firstChild;) l.appendChild(u.firstChild);
          l.removeChild(u)
        }
        t.insertBefore(l, s)
      }
      return [o ? o.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
    }
  };

function Vo(e, t, s) {
  const n = e._vtc;
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}

function Jo(e, t, s) {
  const n = e.style,
    r = J(s);
  if (s && !r) {
    if (t && !J(t))
      for (const i in t) s[i] == null && Ts(n, i, "");
    for (const i in s) Ts(n, i, s[i])
  } else {
    const i = n.display;
    r ? t !== s && (n.cssText = s) : t && e.removeAttribute("style"), "_vod" in e && (n.display = i)
  }
}
const Tn = /\s*!important$/;

function Ts(e, t, s) {
  if (T(s)) s.forEach(n => Ts(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s);
  else {
    const n = Zo(e, t);
    Tn.test(s) ? e.setProperty(nt(n), s.replace(Tn, ""), "important") : e[n] = s
  }
}
const Mn = ["Webkit", "Moz", "ms"],
  ps = {};

function Zo(e, t) {
  const s = ps[t];
  if (s) return s;
  let n = we(t);
  if (n !== "filter" && n in e) return ps[t] = n;
  n = Zt(n);
  for (let r = 0; r < Mn.length; r++) {
    const i = Mn[r] + n;
    if (i in e) return ps[t] = i
  }
  return t
}
const Sn = "http://www.w3.org/1999/xlink";

function Yo(e, t, s, n, r) {
  if (n && t.startsWith("xlink:")) s == null ? e.removeAttributeNS(Sn, t.slice(6, t.length)) : e.setAttributeNS(Sn, t, s);
  else {
    const i = qr(t);
    s == null || i && !Un(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : s)
  }
}

function Go(e, t, s, n, r, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    n && o(n, r, i), e[t] = s ?? "";
    return
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = s;
    const d = l === "OPTION" ? e.getAttribute("value") : e.value,
      _ = s ?? "";
    d !== _ && (e.value = _), s == null && e.removeAttribute(t);
    return
  }
  let u = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean" ? s = Un(s) : s == null && d === "string" ? (s = "", u = !0) : d === "number" && (s = 0, u = !0)
  }
  try {
    e[t] = s
  } catch {}
  u && e.removeAttribute(t)
}

function Rr(e, t, s, n) {
  e.addEventListener(t, s, n)
}

function Xo(e, t, s, n) {
  e.removeEventListener(t, s, n)
}

function Qo(e, t, s, n, r = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (n && o) o.value = n;
  else {
    const [l, u] = el(t);
    if (n) {
      const d = i[t] = nl(n, r);
      Rr(e, l, d, u)
    } else o && (Xo(e, l, o, u), i[t] = void 0)
  }
}
const Rn = /(?:Once|Passive|Capture)$/;

function el(e) {
  let t;
  if (Rn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Rn);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t]
}
let hs = 0;
const tl = Promise.resolve(),
  sl = () => hs || (tl.then(() => hs = 0), hs = Date.now());

function nl(e, t) {
  const s = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    ge(rl(n, s.value), t, 5, [n])
  };
  return s.value = e, s.attached = sl(), s
}

function rl(e, t) {
  if (T(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0
    }, t.map(n => r => !r._stopped && n && n(r))
  } else return t
}
const kn = /^on[a-z]/,
  il = (e, t, s, n, r = !1, i, o, l, u) => {
    t === "class" ? Vo(e, n, r) : t === "style" ? Jo(e, s, n) : Kt(t) ? Ss(t) || Qo(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ol(e, t, n, r)) ? Go(e, t, n, i, o, l, u) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yo(e, t, n, r))
  };

function ol(e, t, s, n) {
  return n ? !!(t === "innerHTML" || t === "textContent" || t in e && kn.test(t) && S(s)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || kn.test(t) && J(s) ? !1 : t in e
}
const jn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return T(t) ? s => $t(t, s) : t
  },
  ll = {
    deep: !0,
    created(e, {
      value: t,
      modifiers: {
        number: s
      }
    }, n) {
      const r = Vt(t);
      Rr(e, "change", () => {
        const i = Array.prototype.filter.call(e.options, o => o.selected).map(o => s ? Bn(zt(o)) : zt(o));
        e._assign(e.multiple ? r ? new Set(i) : i : i[0])
      }), e._assign = jn(n)
    },
    mounted(e, {
      value: t
    }) {
      On(e, t)
    },
    beforeUpdate(e, t, s) {
      e._assign = jn(s)
    },
    updated(e, {
      value: t
    }) {
      On(e, t)
    }
  };

function On(e, t) {
  const s = e.multiple;
  if (!(s && !T(t) && !Vt(t))) {
    for (let n = 0, r = e.options.length; n < r; n++) {
      const i = e.options[n],
        o = zt(i);
      if (s) T(t) ? i.selected = Kr(t, o) > -1 : i.selected = t.has(o);
      else if (Yt(zt(i), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n);
        return
      }
    }!s && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}

function zt(e) {
  return "_value" in e ? e._value : e.value
}
const al = X({
  patchProp: il
}, Ko);
let Pn;

function cl() {
  return Pn || (Pn = wo(al))
}
const ul = (...e) => {
  const t = cl().createApp(...e),
    {
      mount: s
    } = t;
  return t.mount = n => {
    const r = dl(n);
    if (!r) return;
    const i = t._component;
    !S(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const o = s(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
  }, t
};

function dl(e) {
  return J(e) ? document.querySelector(e) : e
}
const Me = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t) s[n] = r;
    return s
  },
  fl = {},
  pl = Tr('<li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-extrabold text-3xl sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl px-5 sm:p-0 md:px-0 lg:px-0 xl:px-5 text-center sm:text-center text-red-700"><a href="#about" class="inline">Nosotros</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-extrabold text-3xl sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl px-5 sm:p-0 md:px-0 lg:px-0 xl:px-5 text-center sm:text-center text-red-700"><a href="#admins" class="inline">Los admins</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-extrabold text-3xl sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl px-5 sm:p-0 md:px-0 lg:px-0 xl:px-5 text-center sm:text-center text-red-700"><a href="#timeline" class="inline">Línea de tiempo</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-extrabold text-3xl sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl px-5 sm:p-0 md:px-0 lg:px-0 xl:px-5 text-center sm:text-center text-red-700"><a href="#slider" class="inline">Eventos</a></li>', 4);

function hl(e, t) {
  return pl
}
const ml = Me(fl, [
    ["render", hl]
  ]),
  Js = "/assets/logo_bordes-97c09425.png",
  gl = {
    components: {
      Links: ml
    },
    name: "Navbar",
    setup() {
      let e = nr(!1);
      const t = () => {
          e.value = !e.value
        },
        s = n => {
          const r = document.getElementById("mobile-menu-button");
          r && !r.contains(n.target) && (e.value = !1)
        };
      return hr(() => {
        document.addEventListener("click", s)
      }), {
        showMenu: e,
        toggleNav: t
      }
    }
  },
  _l = {
    class: "bg-black top-0 z-10 sticky w-screen md:w-screen"
  },
  bl = {
    class: "pl-0 px-6 sm:py-5 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first sm:mr-16 sm:ml-32 md:ml-[20px] lg:mr-[0px] lg:ml-[55px] xl:pl-[90px] 2xl:mr-28"
  },
  xl = {
    class: "flex items-center justify-between mt-0"
  },
  yl = p("button", {
    type: "button",
    class: "text-red-800 hover:text-gray-900 focus:outline-none focus:text-gray-800",
    id: "mobile-menu-button"
  }, [p("svg", {
    viewBox: "0 0 24 24",
    class: "w-14 h-14 fill-current"
  }, [p("path", {
    "fill-rule": "evenodd",
    d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  })])], -1),
  vl = [yl],
  wl = {
    class: "hidden md:block"
  },
  Cl = {
    class: "flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 lg:space-x-16 xl:space-x-0 2xl:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
  },
  Al = p("img", {
    src: Js,
    class: "w-48 2xl:mr-[150px]",
    alt: "Logo Taqueria de Wesker"
  }, null, -1),
  El = {
    class: "w-full relative md:hidden z-0 top-[-56px] sm:ml-[-128px]"
  };

function Il(e, t, s, n, r, i) {
  const o = ro("Links");
  return $(), L("div", _l, [p("nav", bl, [p("div", xl, [p("div", {
    onClick: t[0] || (t[0] = (...l) => n.toggleNav && n.toggleNav(...l)),
    class: "flex md:hidden ml-[300px] sm:ml-[450px] bg-white bg-opacity-0"
  }, vl)]), p("div", wl, [p("ul", Cl, [Al, K(o)])]), p("div", El, [n.showMenu ? ($(), L("div", {
    key: 0,
    onClick: t[1] || (t[1] = (...l) => n.toggleNav && n.toggleNav(...l)),
    class: me([n.showMenu ? "bg-black opacity-25" : "", "absolute w-screen h-screen md:h-screen md:w-screen"])
  }, null, 2)) : ft("", !0), p("div", {
    class: "absolute w-10/12 sm:w-3/4 bg-black",
    onClick: t[2] || (t[2] = (...l) => n.toggleNav && n.toggleNav(...l))
  }, [p("img", {
    src: Js,
    class: me(["md:hidden w-full p-8", n.showMenu ? "flex" : "hidden"]),
    alto: "Logo Taqueria de Wesker"
  }, null, 2), p("ul", {
    class: me([n.showMenu ? "flex flex-col justify-start opacity-100 w-full" : "hidden", "flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-black h-screen md:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"])
  }, [K(o)], 2)])])])])
}
const Tl = Me(gl, [
  ["render", Il]
]);
const Ml = {
    name: "YouTubeCarousel",
    data() {
      return {
        videos: [{
          videoId: "Qi-atfC1CWk"
        }, {
          videoId: "xPixWV8T4lY"
        }, {
          videoId: "sdT_rFNHHmA"
        }],
        currentIndex: 0
      }
    },
    computed: {
      currentVideo() {
        return this.videos[this.currentIndex]
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex === this.videos.length - 1 ? this.currentIndex = 0 : this.currentIndex++
      },
      prevSlide() {
        this.currentIndex === 0 ? this.currentIndex = this.videos.length - 1 : this.currentIndex--
      }
    }
  },
  Sl = {
    class: "container px-4 bg-black border border-gray-800 w-full"
  },
  Rl = p("h2", {
    class: "text-3xl font-bold text-center mb-6 text-red-800"
  }, " Un poco de nosotros ", -1),
  kl = {
    class: "relative pb-10"
  },
  jl = {
    class: "carousel-container aspect-w-16 aspect-h-9 pb-10 w-full"
  },
  Ol = {
    class: "carousel-track"
  },
  Pl = ["src"],
  $l = {
    class: "carousel-nav mt-0 flex justify-between"
  };

function Fl(e, t, s, n, r, i) {
  return $(), L("div", Sl, [Rl, p("div", kl, [p("div", jl, [p("div", Ol, [($(!0), L(V, null, Ee(r.videos, (o, l) => ($(), L("div", {
    key: l,
    class: me(["carousel-slide aspect-w-16 aspect-h-9 transition-opacity", {
      "carousel-active": l === r.currentIndex
    }])
  }, [p("iframe", {
    src: "https://www.youtube.com/embed/" + o.videoId,
    frameborder: "0",
    allowfullscreen: "",
    class: "w-full h-96"
  }, null, 8, Pl)], 2))), 128))])]), p("div", $l, [p("button", {
    class: "carousel-prev px-6 py-4 bg-red-800 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed",
    onClick: t[0] || (t[0] = (...o) => i.prevSlide && i.prevSlide(...o))
  }, " Anterior "), p("button", {
    class: "carousel-next px-6 py-4 bg-red-800 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed",
    onClick: t[1] || (t[1] = (...o) => i.nextSlide && i.nextSlide(...o))
  }, " Siguiente ")])])])
}
const Ll = Me(Ml, [
  ["render", Fl]
]);
const Nl = {
    data() {
      return {
        currentSlide: 0,
        profiles: [{
          name: "Irene Boyzo",
          profession: "Ada la mesera",
          bio: "Lic. en Comunicación y Artes Escénicas",
          image: "/assets/Axo/IMG_1299.jpg"
        }, {
          name: "Miguel Delgado",
          profession: "Leon Salsas Borrachas",
          bio: "Lic. en Ciencias de la Informática",
          image: "/assets/logo_bordes-97c09425.png"
        }, {
          name: "Einar Torres",
          profession: "Carlos El De La Caja",
          bio: "Lic. en Administración de Empresas de Entretenimiento y Comunicación",
          image: "/assets/Axo/IMG_1239.jpg"
        }, {
          name: "JC Guevara",
          profession: "JCUnited02",
          bio: "Lic. en Administración de Empresas Turísticas",
          image: "/assets/Axo/IMG_1541.jpg"
        }, {
          name: "Maritza Salas",
          profession: "Helenita Insistente",
          bio: "Consultora MUA",
          image: "/assets/Axo/IMG_1434.jpg"
        }, {
          name: "Beatriz Zeferino",
          profession: "Lic. Químico Farmacéutico Biólogo",
          bio: "Felix Tonatiuh",
          image: "/assets/logo_bordes-97c09425.png"
        }, {
          name: "Virgilio Mendoza",
          profession: "Lic. en Ciencias de la Comunicación y Análisis Político",
          bio: "El Tío Vergil Wesker",
          image: "/assets/Axo/IMG_1159.jpg"
        }, {
          name: "Betzabeth Tula",
          profession: "Sherry La Edecán",
          bio: "Lic. en Educación Primaria",
          image: "/assets/logo_bordes-97c09425.png"
        }, {
          name: "Alonso Fitta",
          profession: "Frittangas",
          bio: "Lic. en Diseño Gráfico",
          image: "/assets/Toy_Fest/Taqueria/IMG_1952.JPG"
        }, {
          name: "Nancy Lugo",
          profession: "Nemesio Botarga",
          bio: "Cirujano Dentista",
          image: "/assets/logo_bordes-97c09425.png"
        }, {
          name: "José Francisco",
          profession: "???",
          bio: "Lic. en Contaduría Pública",
          image: "/assets/logo_bordes-97c09425.png"
        }]
      }
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.profiles.length
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.profiles.length) % this.profiles.length
      }
    }
  },
  Bl = {
    class: "relative bg-black"
  },
  Ul = {
    class: "flex justify-center items-center"
  },
  Wl = ["src", "alt"],
  Dl = {
    class: "carousel-content"
  },
  Hl = {
    class: "carousel-name text-gray-300 text-2xl font-bold text-center"
  },
  ql = {
    class: "carousel-profession text-gray-300 text-center"
  },
  zl = {
    class: "carousel-bio text-gray-300 text-center"
  };

function Kl(e, t, s, n, r, i) {
  return $(), L("div", Bl, [($(!0), L(V, null, Ee(r.profiles, (o, l) => ($(), L("div", {
    class: me(["carousel-item", {
      active: l === r.currentSlide
    }]),
    key: l
  }, [p("div", Ul, [p("img", {
    src: o.image,
    alt: o.name,
    class: "carousel-image"
  }, null, 8, Wl)]), p("div", Dl, [p("h3", Hl, Y(o.name), 1), p("p", ql, Y(o.profession), 1), p("p", zl, Y(o.bio), 1)])], 2))), 128)), p("button", {
    class: "carousel-prev",
    onClick: t[0] || (t[0] = (...o) => i.prevSlide && i.prevSlide(...o))
  }, "‹"), p("button", {
    class: "carousel-next",
    onClick: t[1] || (t[1] = (...o) => i.nextSlide && i.nextSlide(...o))
  }, "›")])
}
const Vl = Me(Nl, [
    ["render", Kl],
    ["__scopeId", "data-v-d09603a1"]
  ]),
  Jl = {
    data() {
      return {
        selectedSection: "section1",
        section1Events: [{
          title: "El comienzo de todo",
          date: "Antes de 1914",
          description: "<p>Nace Alcina Dimitrescu</p>"
        }, {
          title: "Muere Eva",
          date: "1918",
          description: "<p>Hija de la Madre Miranda, que por la pandemia de gripe española, cae en depresión, llega a una cueva y descubre la megamiceta al infectarse.</p>"
        }, {
          title: "Dr. Oswell Earl Spencer",
          date: "1923",
          description: "<p>Nace el Dr. Oswell Earl Spencer.</p>"
        }, {
          title: "Virus Progenitor",
          date: "1930",
          description: "<p>Un miembro de la familia Ashford descubre el virus Progenitor.</p>"
        }, {
          title: "Robert Kendo",
          date: "1958",
          description: "<p>Nace Robert Kendo.</p>"
        }, {
          title: "Castillo Dimitrescu",
          date: "23 de junio de 1958",
          description: "<p>Cuando la sirvienta Adela manchó por accidente uno de sus vestidos, Daniela como castigo le cortó el rostro con un cuchillo.</p>"
        }, {
          title: "Umbrella",
          date: "1960",
          description: "<p>Umbrella se vuelve una multinacional independiente del gobierno de los Estados Unidos.</p>"
        }, {
          title: "Barry Burton",
          date: "1960",
          description: "<p>Nace Barry Burton.</p>"
        }, {
          title: "Albert Wesker",
          date: "1960",
          description: "<p>Nace Albert Wesker.</p>"
        }, {
          title: "Alex Wesker",
          date: "1960",
          description: "<p>Nace Alex Wesker.</p>"
        }, {
          title: "Fundación de los S.T.A.R.S.",
          date: "1960",
          description: "<p>Se funda en Nueva York el grupo de élite S.T.A.R.S un grupo de antiguos oficiales del ejército y miembros retirados de la CIA y el FBI, liderados por Marco Palmieri, ex jefe de la Agencia Nacional de Seguridad y Defensa.</p>"
        }, {
          title: "S.T.A.R.S. en Raccoon City",
          date: "1967",
          description: "<p>Se funda el grupo S.T.A.R.S en Raccoon City, Brian Irons es un miembro fundador.</p>"
        }, {
          title: "Chris Redfield",
          date: "1973",
          description: "<p>Nace Chris Redfield.</p>"
        }, {
          title: "Ada Wong y Jill Valentine",
          date: "1974",
          description: "<p>Nacen Ada Wong y Jill Valentine.</p>"
        }, {
          title: "Leon Scott Kennedy",
          date: "1977",
          description: "<p>Nace Leon Scott Kennedy.</p>"
        }, {
          title: "Claire Redfield",
          date: "1979",
          description: "<p>Nace Claire Redfield.</p>"
        }, {
          title: "Rebecca Chambers",
          date: "1980",
          description: "<p>Nace Rebecca Chambers.</p>"
        }],
        section2Events: [{
          title: "Primeras apariciones extrañas.",
          date: "Mayo de 1998",
          description: "<p>Empiezan extrañas apariciones de monstruos en forma de perros o humanos, también aparecen cadáveres con mordeduras. La policía piensa que se trata de un grupo de caníbales.</p>"
        }, {
          title: "La cuarta víctima",
          date: "2 de junio de 1998",
          description: "<p>Se encuentra a la cuarta víctima de los 'asesinos caníbales' de Raccoon City, Anna Mitaki y se eleva el número de muertes misteriosas a siete.</p>"
        }, {
          title: "El ascenso de Wesker.",
          date: "Diciembre de 1997",
          description: "<p>Albert Wesker es ascendido a capitán de los S.T.A.R.S.</p>"
        }, {
          title: "Desapariciones en las montañas Arklay.",
          date: "21 de julio de 1998",
          description: "<p>Desaparecen tres excursionistas en las montañas Arklay. El jefe de la policía Brian Irons pone a trabajar en el caso a los S.T.A.R.S.</p>"
        }, {
          title: "Deanne Rusch y Christopher Smith",
          date: "22 de julio de 1998",
          description: "<p>Deanne Rusch y Christopher Smith, octava y novena víctimas son encontrados en el Victory Park.</p>"
        }, {
          title: "Tren privado de Umbrella Corp. Ecliptic Express",
          date: "23 de julio de 1998",
          description: "<p>El tren privado de la corporación Umbrella, Ecliptic Express, es atacado por sanguijuelas controladas por James Marcus, siendo convertidos en zombies.</p><br> <p>Dos horas después el equipo Bravo de STARS es enviado en helicóptero a las Montañas Arklay y tienen un aterrizaje forzoso donde se separan para buscar sobrevivientes.</p><br><p>Rebecca Chamber y Billy Coen hacen equipo contra los monstruos del tren hasta llegar al laboratorio de Umbrella. </p>"
        }, {
          title: "Tren privado de Umbrella Corp. Ecliptic Express",
          date: "23 de julio de 1998",
          description: "<p>El tren privado de la corporación Umbrella, Ecliptic Express, es atacado por sanguijuelas controladas por James Marcus, siendo convertidos en zombies.</p><br> <p>Dos horas después el equipo Bravo de STARS es enviado en helicóptero a las Montañas Arklay y tienen un aterrizaje forzoso donde se separan para buscar sobrevivientes.</p><br><p>Rebecca Chamber y Billy Coen hacen equipo contra los monstruos del tren hasta llegar al laboratorio de Umbrella. </p>"
        }, {
          title: "Resident Evil 0",
          date: "24 de julio de 1998",
          description: "<p>Durante las primeras horas Billy y Rebecca pelean contra el Proto Tyrant de la base de Umbrella así como también como la Reina Sanguijuela que controlaba a Marcus. La base es destruida en una explosión.</p> <br> <p>Billy y Rebecca se separan, la última regresa al bosque y termina en la mansión Spencer.</p> <br> <p>Ocurre el incidente en el bosque de las montañas Arklay. El equipo Alpha es enviado a investigar el paradero del equipo Bravo. Se encuentran con el helicóptero dañado y son atacados por Cerberus hasta llegar a la Mansión Spencer. </p>"
        }, {
          title: "Resident Evil 1",
          date: "25 de julio de 1998",
          description: "<p>Se descubre la traición de Wesker, mientras que Jill, Chris, y Barry pelean contra los BOWs, entre éstos la víctima de los experimentos Wesker y Birkin conocida como Lisa Trevor. Wesker libera el Tyrant T-002 pero termina siendo asesinado por este, para luego revivir gracias a una muestra del Virus Progenitor. </p> <br> <p>Jill, Chris, Rebecca y Barry escapan con la ayuda de Brad Vickers y la mansión es destruida.</p> "
        }, {
          title: "Hunk y el equipo Wolfpack",
          date: "23 de septiembre de 1998",
          description: "<p> El agente Hunk junto con el equipo Wolfpack entran en el laboratorio Nest, justo debajo de Raccoon City, para recuperar las muestras del Virus T y G. William Birkins se ve acorralado y termina siendo herido y al borde de la muerte. </p> <br> <p>Para escapar de la muerte se inyecta con una muestra del Virus G.  Al mutar rápidamente logra deshacerse del equipo de Hunk y destruye las muestras del Virus T. </p> <br> <p>Las ratas esparcen la infección por el sistema de agua potable infectando a Raccoon City. Hunk queda inconsciente. </p>"
        }, {
          title: "Ataque en el estadio",
          date: "24 de septiembre de 1998",
          description: "<p>Durante el juego de los Raccoon Sharks el estadio Warren es atacado por zombies. En el bar Jacks un grupo de civiles es atacado y se dirigen al Zoológico de Raccoon City. </p>"
        }, {
          title: "El ejército llega a Raccoon City",
          date: "25 de septiembre de 1998",
          description: "<p>El Ejército Estadounidense sitia  Raccoon City bloqueando las entradas y salidas. El hospital Spencer's Memorial se empieza a llenar con infectados.</p>"
        }, {
          title: "Kevin Ryman",
          date: "26 de septiembre de 1998",
          description: "<p>El grupo de Kevin Ryman escapa haciendo uso del sistema de drenaje para llegar al laboratorio de Umbrella y salir de Raccoon City.</p>"
        }, {
          title: "Caída del hospital",
          date: "27 de septiembre de 1998",
          description: "<p>Se registra la caída del hospital Spencer 's Memorial, los infectados atacan al equipo de médicos.</p>"
        }, {
          title: "Jill Valentine intenta escapar",
          date: "28 de septiembre de 1998",
          description: "<p>Jill Valentine es atacada en su departamento, al salir con vida se dirige a la RPD donde encuentra a su compañero Brad Vickers y al BOW conocido como Nemesis, Vickers termina muerto e infectado.</p> <br> <p>Jill logra escapar y también encontrarse con miembros del equipo UBCS, entre ellos Carlos Oliveira y Nicolai Zinoviev. Durante una pelea Jill es infectada con el virus T y queda resguardada en la torre de reloj.</p>"
        }, {
          title: "Resident Evil 2",
          date: "29 de septiembre de 1998",
          description: "<p>El oficial Leon Kennedy y la joven Claire Redfield, hermana de Chris, llegan a Raccoon City en medio del brote del Virus T, juntos se dirigen a la estación de policía RPD. En el lugar encuentran a Sherry Birkin, hija de William y Annette, también a Ada Wong, espía encubierta de la Organización. En la RPD se enfrentan a zombis, lickers y también a un nuevo tipo de T-003 conocido como Mr.X.</p> <br> <p> Con la ayuda del reportero Ben Bertolucci tanto Ada como León logran llegar a la base Nest de Umbrella. Mientras tanto Claire y Sherry conocen al Jefe de Policía Brian Irons. Sherry termina siendo infectada por William y Claire la lleva a Nest para conseguir la cura.</p> "
        }, {
          title: "Claire consigue la muestra.",
          date: "30 de septiembre de 1998",
          description: "<p>Con la ayuda del reportero Ben Bertolucci tanto Ada como León logran llegar a la base Nest de Umbrella. Mientras tanto Claire y Sherry conocen al Jefe de Policía Brian Irons. Sherry termina siendo infectada por William y Claire la lleva a Nest para conseguir la cura</p> <br> <p>Claire se enfrenta a William mientras que Leon se enfrenta a  un mutado Mr.X para abordar el tren de escape y dar el antídoto a Sherry.</p> <br> <p>El Agente Hunk se despierta del coma y procede a ser evacuado de Raccoon City tras atravesar la RPD y consigue llevar una muestra del virus T consigo.</p>"
        }, {
          title: "Destrucción de Raccoon City",
          date: "1 de octubre de 1998",
          description: "<p>El desastre en Raccoon City es inminente, el gobierno de los Estados Unidos decide usar un misil balístico para destruir la ciudad.</p> <br> <p> Jill Valentine despierta después de recibir la cura por parte de Carlos Oliviera. Una vez más se enfrenta a Nemesis hasta terminar él. Nicolai abandona Raccoon city en el último helicóptero disponible.</p> <br> <p>Carlos decide en un último intento usar la radio y logra hacer contacto con el viejo amigo de Jill, Barry Burton, son recogidos junto antes de que el misil balístico destruyera Raccoon City.</p> <br> <p>A las afueras de la ciudad el público mira lo que era antes una ciudad, entre los espectadores se encuentra Curtis Miller devastado al saber que su familia ha perecido en la detonación. </p>"
        }, {
          title: "El virus T en Sheena Island",
          date: "23 de noviembre de 1998",
          description: "<p>Vincent Goldman libera el virus T en Sheena Island, la mayoría de la población perece por el virus y otros a manos de su ejército.</p>"
        }, {
          title: "Muerte de Vincent",
          date: "25 de noviembre de 1998",
          description: "<p>Vincent intenta asesinar a Ark Thompson quien se hacía pasar por él. Ambos caen de un helicóptero. Vincent muere y Ark termina inconsciente y con pérdida de memoria.</p>"
        }, {
          title: "Ark se dirige a Umbrella",
          date: "26 de noviembre de 1998",
          description: "<p>Ark despierta y encuentra el camino a la fábrica de Umbrella donde se enfrenta a algunos T-003. Gracias  a la ayuda de Lott Klein y su hermana Lily Ark recupera la memoria. Antes de huir se enfrenta a un tyrant mejorado de nombre Hypnos. Sheena Island es destruida por el sistema de autodestrucción de Umbrella.</p>"
        }, {
          title: "Resident Evil Code: Veronica",
          date: "17 de diciembre de 1998",
          description: "<p>Claire sigue en busca de Chris y se infiltra en las instalaciones de Umbrella París. Se enfrenta a un escuadrón de soldados y termina capturada por Rodrigo Juan Raval. Es transportada a Rockfort Island, base de operaciones de Umbrella y comandada por Alfred Ashford.</p>"
        }, {
          title: "Albert Wesker ordena el ataque a Rockfort Island",
          date: "27 de diciembre de 1998",
          description: "<p>El equipo HFC ataca Rockfort Island por órdenes de Albert Wesker, mientras tanto Claire es liberada por Rodrigo al ver que la isla es una causa perdida. Al intentar escapar Claire se encuentra con Steve Burnside, otro prisionero, ambos hacen equipo. Durante la noche terminan peleando contra varios zombies, BOWs,y un Tyrant modelo T-078. Claire y Steve se enfrentan a Alfred Ashford y terminan en la estación Antártica de Umbrella.</p> <br> <p>Durante el tiempo del vuelo Chris llega a Rockfort Island y encuentra a Rodrigo para terminar siguiendo los pasos  de Claire y llegar a la base de Umbrella. </p>"
        }, {
          title: "Albert Wesker ordena el ataque a Rockfort Island",
          date: "27 de diciembre de 1998",
          description: "<p>El equipo HFC ataca Rockfort Island por órdenes de Albert Wesker, mientras tanto Claire es liberada por Rodrigo al ver que la isla es una causa perdida. Al intentar escapar Claire se encuentra con Steve Burnside, otro prisionero, ambos hacen equipo. Durante la noche terminan peleando contra varios zombies, BOWs,y un Tyrant modelo T-078. Claire y Steve se enfrentan a Alfred Ashford y terminan en la estación Antártica de Umbrella.</p> <br> <p>Durante el tiempo del vuelo Chris llega a Rockfort Island y encuentra a Rodrigo para terminar siguiendo los pasos  de Claire y llegar a la base de Umbrella. </p>"
        }, {
          title: "El escape de los Redfield y muerte de Alexia",
          date: "28 de diciembre de 1998",
          description: "<p>Al llegar a la base de Antártica tanto Claire como Steve despiertan para terminar peleando contra Alfred y Alexia, Steve es capturado y se le infecta con el T-Veronica. Claire acaba con Nosferatu, antes padre de los Ashford pero convertido en un monstruo por sus hijos.</p> <br> <p> Wesker y Chris tienen un corto encuentro con Alexia y esta termina mutando y mostrando el poder del T-Veronica. Mientras tanto Claire lucha contra un Steve mutado, este último en un momento de voluntad pura decide proteger a Claire, regresa a la normalidad y muere después de ser atacado por Alexia.</p> <br> <p>Claire y Chris acaba con Alexia gracias a la ayuda de un arma especial dejada por Alexander Ashford. En una última pelea Wesker y Chris se enfrentan cara a cara, Wesker resulta herido y decide retirarse con el cuerpo de Steve al poseer una muestra del T-Veronica. Los hermanos Redfield escapan y el laboratorio es destruido. </p>"
        }],
        section3Events: [{
          title: "Comienzan los juicios",
          date: "1999-2000",
          description: "<p>Comienzan los juicios a Umbrella Corporation, Spencer contrata a los mejores abogados, contrata testigos falsos en respuesta a la orden de cierre del gobierno de los Estados Unidos. </p>"
        }, {
          title: "Javier Hidalgo y Albert Wesker",
          date: "2002",
          description: "<p>Wesker vende el virus T-Veronica al capo de la droga Javier Hidalgo.</p>"
        }, {
          title: "Asalto a la fortaleza secreta de Umbrella en Rusia",
          date: "Febrero de 2003",
          description: "<p>En un asalto a la fortaleza secreta de Umbrella en Rusia, Wesker termina indirectamente de ayudar a Chris y Jill, derrota a Sergei, guarda los datos de la computadora principal, la Reina Roja y la desconecta.</p> <br> <p>Más adelante, en el mismo año, testificaría personalmente en los juicios en contra de Umbrella, haciendo a Oswell Spencer uno de los hombres más buscados del mundo.</p> <br> <p>Se funda la B.S.A.A.</p>"
        }, {
          title: "Wesker y Jack Krauser",
          date: "2004",
          description: "<p>Wesker planea hacer resurgir Umbrella bajo sus términos, mandando a Krauser como encubierto al culto de Osmund Saddler.</p> <br> <p>Envía a Ada Wong, con la misión de recuperar una muestra de Las Plagas. </p> <br> <p>Ada traiciona a Wesker, bajó las órdenes de un grupo conocido como S, roba e intercambia la muestra.</p>"
        }, {
          title: "Wesker encuentra a Spencer",
          date: "2006",
          description: "<p>Tras una búsqueda extenuante, Wesker encuentra a Spencer; en dónde descubre que siempre ha sido un experimento, en una ataque de furia asesina al científico.</p> <br> <p>Jill y Chris aparecen justo después del asesinato, enfrentándose en un combate feroz en dónde casi es asesinado Chris Redfield, Jill en un intento desesperado se lanza con Wesker chocando contra una ventana y cayendo al mar. </p> <br> <p>La B.S.A.A realiza una búsqueda intensiva, pero a los meses concluyen la investigación dándola por muerta.</p>"
        }],
        section4Events: [{
          title: "Muerte de Albert Wesker",
          date: "2009",
          description: "<p> Albert Wesker muere en un volcán a manos de Sheva Alomar, Chris Redfield, Jill Valentine y Josh Stone.</p>"
        }, {
          title: "Creación de Eveline",
          date: "2014",
          description: "<p>Crean a Eveline (nombre clave E-001), arma de Las Conexiones.</p>"
        }, {
          title: "Muerte de Eveline",
          date: "2017",
          description: "<p>Eveline es asesinada por Ethan Winters.</p>"
        }, {
          title: "Resident Evil Village",
          date: "9 de febrero de 2021",
          description: "<p>Mueren Donna Benevento, Salvatore Moreau, Karl Heisenberg, Daniela, Bella, Cassandra y Alcina Dimitrescu.</p>"
        }, {
          title: "Muere Ethan Winters",
          date: "10 de febrero de 2021",
          description: "<p>Mueren Ethan Winters y madre Miranda.</p>"
        }]
      }
    }
  },
  Zl = {
    class: "flex items-center justify-center bg-black"
  },
  Yl = {
    class: "container mx-auto mt-0 pl-5"
  },
  Gl = p("h1", {
    class: "text-3xl font-bold pt-5 mb-4 text-gray-200"
  }, " Línea de tiempo ", -1),
  Xl = {
    class: "flex justify-center"
  },
  Ql = p("option", {
    value: "section1"
  }, "ANTECEDENTES", -1),
  ea = p("option", {
    value: "section2"
  }, "LA INFECCIÓN", -1),
  ta = p("option", {
    value: "section3"
  }, "EL FINAL DE UMBRELLA", -1),
  sa = p("option", {
    value: "section4"
  }, "NUEVAS AMENAZAS", -1),
  na = [Ql, ea, ta, sa],
  ra = {
    class: "dark:bg-black dark:text-gray-100"
  },
  ia = {
    class: "container px-4 py-5 mx-auto space-y-8 lg:max-w-3xl"
  },
  oa = {
    class: "space-y-8"
  },
  la = {
    class: "space-y-4"
  },
  aa = {
    class: "flex items-center space-x-3"
  },
  ca = p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    class: "w-5 h-5 fill-current dark:text-red-600"
  }, [p("path", {
    d: "M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
  }), p("polygon", {
    points: "221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
  })], -1),
  ua = {
    class: "mb-1 text-lg font-bold md:text-xl mt-6"
  },
  da = {
    class: "flex font-medium"
  },
  fa = ["innerHTML"],
  pa = {
    class: "flex items-center space-x-3"
  },
  ha = p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    class: "w-5 h-5 fill-current dark:text-red-800"
  }, [p("path", {
    d: "M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
  }), p("polygon", {
    points: "221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
  })], -1),
  ma = {
    class: "mb-1 text-lg font-bold md:text-xl mt-6"
  },
  ga = {
    class: "flex font-medium"
  },
  _a = ["innerHTML"],
  ba = {
    class: "flex items-center space-x-3"
  },
  xa = p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    class: "w-5 h-5 fill-current dark:text-red-800"
  }, [p("path", {
    d: "M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
  }), p("polygon", {
    points: "221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
  })], -1),
  ya = {
    class: "mb-1 text-lg font-bold md:text-xl mt-6"
  },
  va = {
    class: "flex font-medium"
  },
  wa = ["innerHTML"],
  Ca = {
    class: "flex items-center space-x-3"
  },
  Aa = p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    class: "w-5 h-5 fill-current dark:text-red-800"
  }, [p("path", {
    d: "M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
  }), p("polygon", {
    points: "221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
  })], -1),
  Ea = {
    class: "mb-1 text-lg font-bold md:text-xl mt-6"
  },
  Ia = {
    class: "flex font-medium"
  },
  Ta = ["innerHTML"];

function Ma(e, t, s, n, r, i) {
  return $(), L(V, null, [p("div", Zl, [p("div", Yl, [Gl, p("div", Xl, [Ki(p("select", {
    "onUpdate:modelValue": t[0] || (t[0] = o => r.selectedSection = o),
    class: "mr-2 bg-red-800 hover:bg-red-800 text-white font-bold py-5 px-5 rounded"
  }, na, 512), [
    [ll, r.selectedSection]
  ])])])]), p("section", ra, [p("div", ia, [p("div", oa, [p("div", null, [p("ul", la, [r.selectedSection === "section1" ? ($(!0), L(V, {
    key: 0
  }, Ee(r.section1Events, (o, l) => ($(), L("li", {
    class: "space-y-1",
    key: l
  }, [p("div", aa, [ca, p("div", null, [p("h3", ua, Y(o.date), 1), p("h4", da, Y(o.title), 1)])]), p("div", {
    innerHTML: o.description,
    class: "text-gray-200 pl-8"
  }, null, 8, fa)]))), 128)) : ft("", !0), r.selectedSection === "section2" ? ($(!0), L(V, {
    key: 1
  }, Ee(r.section2Events, (o, l) => ($(), L("li", {
    class: "space-y-1",
    key: l
  }, [p("div", pa, [ha, p("div", null, [p("h3", ma, Y(o.date), 1), p("h4", ga, Y(o.title), 1)])]), p("div", {
    innerHTML: o.description,
    class: "text-gray-200 pl-8"
  }, null, 8, _a)]))), 128)) : ft("", !0), r.selectedSection === "section3" ? ($(!0), L(V, {
    key: 2
  }, Ee(r.section3Events, (o, l) => ($(), L("li", {
    class: "space-y-1",
    key: l
  }, [p("div", ba, [xa, p("div", null, [p("h3", ya, Y(o.date), 1), p("h4", va, Y(o.title), 1)])]), p("div", {
    innerHTML: o.description,
    class: "text-gray-200 pl-8"
  }, null, 8, wa)]))), 128)) : ft("", !0), r.selectedSection === "section4" ? ($(!0), L(V, {
    key: 3
  }, Ee(r.section4Events, (o, l) => ($(), L("li", {
    class: "space-y-1",
    key: l
  }, [p("div", Ca, [Aa, p("div", null, [p("h3", Ea, Y(o.date), 1), p("h4", Ia, Y(o.title), 1)])]), p("div", {
    innerHTML: o.description,
    class: "text-gray-200 pl-8"
  }, null, 8, Ta)]))), 128)) : ft("", !0)])])])])])], 64)
}
const Sa = Me(Jl, [
  ["render", Ma]
]);
const Ra = {
    data() {
      return {
        currentIndex: 0,
        images: [{
          image: "/assets/Toy_Fest/Taqueria/IMG_2006.jpeg",
          description: "Toy Fest",
          caption: "14 de mayo de 2023"
        }, {
          image: "/assets/Toy_Fest/Taqueria/IMG_2269.jpeg",
          description: "Collabs",
          caption: "interesantes"
        }, {
          image: "/assets/Toy_Fest/Taqueria/IMG_2005.jpeg",
          description: "La mercancía de",
          caption: "ElFrittangas13"
        }, {
          image: "/assets/Toy_Fest/Taqueria/IMG_2009.jpeg",
          description: "La comida de",
          caption: "La Fábrica de Dulce"
        }]
      }
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex]
      }
    },
    mounted() {
      setInterval(this.nextImage, 5e3)
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }
    }
  },
  ka = e => (Fi("data-v-7a4ce1f6"), e = e(), Li(), e),
  ja = {
    class: "flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center"
  },
  Oa = ka(() => p("h1", {
    class: "py-6 font-black text-4xl"
  }, "Los eventos", -1)),
  Pa = {
    class: "w-full md:w-1/2"
  },
  $a = {
    class: "carousel"
  },
  Fa = ["src", "alt"],
  La = {
    class: "w-full md:w-1/2"
  },
  Na = {
    class: "carousel-description"
  },
  Ba = {
    class: "text-2xl font-bold mb-4"
  };

function Ua(e, t, s, n, r, i) {
  return $(), L("div", ja, [Oa, p("div", Pa, [p("div", $a, [($(!0), L(V, null, Ee(r.images, (o, l) => ($(), L("img", {
    key: l,
    src: o.image,
    alt: o.description,
    class: me([{
      active: l === r.currentIndex
    }, "carousel-image"])
  }, null, 10, Fa))), 128))])]), p("div", La, [p("div", Na, [p("h3", Ba, Y(i.currentImage.description), 1), p("p", null, Y(i.currentImage.caption), 1)])])])
}
const Wa = Me(Ra, [
  ["render", Ua],
  ["__scopeId", "data-v-7a4ce1f6"]
]);
const Da = {
    data() {
      return {
        currentIndex: 0,
        images: [{
          image: "/assets/Axo/IMG_1526.jpeg",
          description: "Axo Matsuri",
          caption: "Ada La Mesera y la troca"
        }, {
          image: "/assets/Axo/IMG_1473.jpeg",
          description: "La Taquería junto a",
          caption: "Corporación Umbrella México"
        }, {
          image: "/assets/Axo/IMG_1376(2).jpeg",
          description: "Todo el grupo",
          caption: "unido"
        }, {
          image: "/assets/Axo/IMG_1347.jpeg",
          description: "La poderosa",
          caption: ""
        }]
      }
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex]
      }
    },
    mounted() {
      setInterval(this.nextImage, 5e3)
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }
    }
  },
  Ha = {
    class: "flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center"
  },
  qa = {
    class: "w-full md:w-1/2"
  },
  za = {
    class: "carousel"
  },
  Ka = ["src", "alt"],
  Va = {
    class: "w-full md:w-1/2"
  },
  Ja = {
    class: "carousel-description"
  },
  Za = {
    class: "text-2xl font-bold mb-4"
  };

function Ya(e, t, s, n, r, i) {
  return $(), L("div", Ha, [p("div", qa, [p("div", za, [($(!0), L(V, null, Ee(r.images, (o, l) => ($(), L("img", {
    key: l,
    src: o.image,
    alt: o.description,
    class: me([{
      active: l === r.currentIndex
    }, "carousel-image"])
  }, null, 10, Ka))), 128))])]), p("div", Va, [p("div", Ja, [p("h3", Za, Y(i.currentImage.description), 1), p("p", null, Y(i.currentImage.caption), 1)])])])
}
const Ga = Me(Da, [
  ["render", Ya],
  ["__scopeId", "data-v-5a49773b"]
]);
const Xa = {
    data() {
      return {
        currentIndex: 0,
        images: [{
          image: "/assets/Zombie_Fest/IMG_3613.jpg",
          description: "Zombie Fest 2023",
          caption: ""
        }, {
          image: "/assets/Zombie_Fest/IMG_3629.jpg",
          description: "Zombie Fest 2023",
          caption: ""
        }, {
          image: "/assets/Zombie_Fest/IMG_3667.jpg",
          description: "Zombie Fest 2023",
          caption: ""
        }]
      }
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex]
      }
    },
    mounted() {
      setInterval(this.nextImage, 5e3)
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }
    }
  },
  Qa = {
    class: "flex flex-col md:flex-row py-5 bg-black text-red-700 font-bold text-3xl text-center"
  },
  ec = {
    class: "w-full md:w-1/2"
  },
  tc = {
    class: "carousel"
  },
  sc = ["src", "alt"],
  nc = {
    class: "w-full md:w-1/2"
  },
  rc = {
    class: "carousel-description"
  },
  ic = {
    class: "text-2xl font-bold mb-4"
  };

function oc(e, t, s, n, r, i) {
  return $(), L("div", Qa, [p("div", ec, [p("div", tc, [($(!0), L(V, null, Ee(r.images, (o, l) => ($(), L("img", {
    key: l,
    src: o.image,
    alt: o.description,
    class: me([{
      active: l === r.currentIndex
    }, "carousel-image"])
  }, null, 10, sc))), 128))])]), p("div", nc, [p("div", rc, [p("h3", ic, Y(i.currentImage.description), 1), p("p", null, Y(i.currentImage.caption), 1)])])])
}
const lc = Me(Xa, [
    ["render", oc],
    ["__scopeId", "data-v-1fd498c0"]
  ]),
  ac = {
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  },
  cc = {
    class: "bg-white shadow dark:bg-black"
  },
  uc = {
    class: "w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col justify-center items-center"
  },
  dc = p("a", {
    href: "https://linktr.ee/taqueriawesker?utm_source=linktree_admin_share",
    class: "flex items-center mb-4 sm:mb-0"
  }, [p("img", {
    src: Js,
    class: "h-auto mr-3 sm:h-20",
    alt: "Logo Taqueria de Wesker"
  })], -1),
  fc = {
    class: "flex justify-center mt-5 space-x-6"
  },
  pc = Tr('<a href="https://www.facebook.com/taqueriawesker" class="text-white hover:text-neutral-600"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="https://twitter.com/Taqueria_Wesker" class="text-white hover:text-gray-600"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="https://www.instagram.com/lataqueriadewesker/" class="text-white hover:text-gray-600"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="https://youtube.com/@lataqueriadewesker" class="text-white hover:text-gray-600"><span class="sr-only">YouTube</span><svg aria-hidden="true" fill="currentColor" class="bi bi-youtube w-6 h-6" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>', 4),
  hc = {
    href: "https://discord.gg/dnSnPKkXw7",
    class: "text-white hover:text-gray-600"
  },
  mc = p("span", {
    class: "sr-only"
  }, "Discord", -1),
  gc = {
    style: {
      color: "white"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "22",
    fill: "currentColor",
    class: "bi bi-discord",
    viewBox: "0 0 16 16"
  },
  _c = p("path", {
    d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
    fill: "white"
  }, null, -1),
  bc = [_c],
  xc = {
    href: "https://www.tiktok.com/@taqueriaweskeroficial",
    class: "text-white hover:text-gray-600"
  },
  yc = p("span", {
    class: "sr-only"
  }, "TikTok", -1),
  vc = {
    style: {
      color: "white"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-tiktok",
    viewBox: "0 0 16 16"
  },
  wc = p("path", {
    d: "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z",
    fill: "white"
  }, null, -1),
  Cc = [wc],
  Ac = p("hr", {
    class: "my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8 w-full"
  }, null, -1),
  Ec = {
    class: "block text-sm text-gray-500 text-center dark:text-gray-400"
  },
  Ic = p("a", {
    href: "https://flowbite.com/",
    class: "hover:underline"
  }, "La Taquería de Wesker™", -1),
  Tc = p("p", null, "Todos los derechos reservados.", -1);

function Mc(e, t, s, n, r, i) {
  return $(), L("footer", cc, [p("div", uc, [dc, p("div", fc, [pc, p("a", hc, [mc, ($(), L("svg", gc, bc))]), p("a", xc, [yc, ($(), L("svg", vc, Cc))])]), Ac, p("span", Ec, [Is(" © " + Y(r.currentYear) + " ", 1), Ic, Is(". "), Tc])])])
}
const Sc = Me(ac, [
    ["render", Mc]
  ]),
  Rc = {
    class: "bg-white"
  },
  kc = {
    __name: "App",
    setup(e) {
      return (t, s) => ($(), L("div", Rc, [K(Tl), K(Ll), K(Vl), K(Sa), K(Wa), K(Ga), K(lc), K(Sc)]))
    }
  };
var jc = !1;
/*!
 * pinia v2.1.3
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const Oc = Symbol();
var $n;
(function (e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})($n || ($n = {}));

function Pc() {
  const e = Vr(!0),
    t = e.run(() => nr({}));
  let s = [],
    n = [];
  const r = Us({
    install(i) {
      r._a = i, i.provide(Oc, r), i.config.globalProperties.$pinia = r, n.forEach(o => s.push(o)), n = []
    },
    use(i) {
      return !this._a && !jc ? n.push(i) : s.push(i), this
    },
    _p: s,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return r
}
ul(kc).use(Pc()).mount("#app");