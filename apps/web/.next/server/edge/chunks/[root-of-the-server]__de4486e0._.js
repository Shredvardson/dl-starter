(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'chunks/[root-of-the-server]__de4486e0._.js',
  51615,
  (e, t, n) => {
    t.exports = e.x('node:buffer', () => require('node:buffer'));
  },
  80302,
  (e, t, n) => {
    'use strict';
    n._ = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  35193,
  (e, t, n) => {
    'use strict';
    t.exports = ['chrome 64', 'edge 79', 'firefox 67', 'opera 51', 'safari 12'];
  },
  19275,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(n, {
        APP_BUILD_MANIFEST: function () {
          return b;
        },
        APP_CLIENT_INTERNALS: function () {
          return Q;
        },
        APP_PATHS_MANIFEST: function () {
          return v;
        },
        APP_PATH_ROUTES_MANIFEST: function () {
          return _;
        },
        AdapterOutputType: function () {
          return a;
        },
        BARREL_OPTIMIZATION_PREFIX: function () {
          return V;
        },
        BLOCKED_PAGES: function () {
          return C;
        },
        BUILD_ID_FILE: function () {
          return R;
        },
        BUILD_MANIFEST: function () {
          return y;
        },
        CLIENT_PUBLIC_FILES_PATH: function () {
          return L;
        },
        CLIENT_REFERENCE_MANIFEST: function () {
          return G;
        },
        CLIENT_STATIC_FILES_PATH: function () {
          return M;
        },
        CLIENT_STATIC_FILES_RUNTIME_AMP: function () {
          return et;
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN: function () {
          return H;
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function () {
          return q;
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function () {
          return er;
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function () {
          return ei;
        },
        CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function () {
          return ee;
        },
        CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function () {
          return en;
        },
        COMPILER_INDEXES: function () {
          return o;
        },
        COMPILER_NAMES: function () {
          return i;
        },
        CONFIG_FILES: function () {
          return Z;
        },
        DEFAULT_RUNTIME_WEBPACK: function () {
          return ea;
        },
        DEFAULT_SANS_SERIF_FONT: function () {
          return ec;
        },
        DEFAULT_SERIF_FONT: function () {
          return el;
        },
        DEV_CLIENT_MIDDLEWARE_MANIFEST: function () {
          return D;
        },
        DEV_CLIENT_PAGES_MANIFEST: function () {
          return N;
        },
        DYNAMIC_CSS_MANIFEST: function () {
          return X;
        },
        EDGE_RUNTIME_WEBPACK: function () {
          return eo;
        },
        EDGE_UNSUPPORTED_NODE_APIS: function () {
          return eh;
        },
        EXPORT_DETAIL: function () {
          return k;
        },
        EXPORT_MARKER: function () {
          return I;
        },
        FUNCTIONS_CONFIG_MANIFEST: function () {
          return $;
        },
        IMAGES_MANIFEST: function () {
          return O;
        },
        INTERCEPTION_ROUTE_REWRITE_MANIFEST: function () {
          return Y;
        },
        MIDDLEWARE_BUILD_MANIFEST: function () {
          return W;
        },
        MIDDLEWARE_MANIFEST: function () {
          return P;
        },
        MIDDLEWARE_REACT_LOADABLE_MANIFEST: function () {
          return K;
        },
        MODERN_BROWSERSLIST_TARGET: function () {
          return r.default;
        },
        NEXT_BUILTIN_DOCUMENT: function () {
          return B;
        },
        NEXT_FONT_MANIFEST: function () {
          return x;
        },
        PAGES_MANIFEST: function () {
          return h;
        },
        PHASE_DEVELOPMENT_SERVER: function () {
          return p;
        },
        PHASE_EXPORT: function () {
          return l;
        },
        PHASE_INFO: function () {
          return m;
        },
        PHASE_PRODUCTION_BUILD: function () {
          return c;
        },
        PHASE_PRODUCTION_SERVER: function () {
          return d;
        },
        PHASE_TEST: function () {
          return f;
        },
        PRERENDER_MANIFEST: function () {
          return w;
        },
        REACT_LOADABLE_MANIFEST: function () {
          return z;
        },
        ROUTES_MANIFEST: function () {
          return E;
        },
        RSC_MODULE_TYPES: function () {
          return em;
        },
        SERVER_DIRECTORY: function () {
          return j;
        },
        SERVER_FILES_MANIFEST: function () {
          return T;
        },
        SERVER_PROPS_ID: function () {
          return eu;
        },
        SERVER_REFERENCE_MANIFEST: function () {
          return J;
        },
        STATIC_PROPS_ID: function () {
          return es;
        },
        STATIC_STATUS_PAGES: function () {
          return ed;
        },
        STRING_LITERAL_DROP_BUNDLE: function () {
          return F;
        },
        SUBRESOURCE_INTEGRITY_MANIFEST: function () {
          return S;
        },
        SYSTEM_ENTRYPOINTS: function () {
          return eg;
        },
        TRACE_OUTPUT_VERSION: function () {
          return ep;
        },
        TURBOPACK_CLIENT_BUILD_MANIFEST: function () {
          return A;
        },
        TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function () {
          return U;
        },
        TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function () {
          return ef;
        },
        UNDERSCORE_NOT_FOUND_ROUTE: function () {
          return s;
        },
        UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function () {
          return u;
        },
        WEBPACK_STATS: function () {
          return g;
        },
      }));
    let r = e.r(80302)._(e.r(35193)),
      i = { client: 'client', server: 'server', edgeServer: 'edge-server' };
    var a = (function (e) {
      return (
        (e.PAGES = 'PAGES'),
        (e.PAGES_API = 'PAGES_API'),
        (e.APP_PAGE = 'APP_PAGE'),
        (e.APP_ROUTE = 'APP_ROUTE'),
        (e.PRERENDER = 'PRERENDER'),
        (e.STATIC_FILE = 'STATIC_FILE'),
        (e.MIDDLEWARE = 'MIDDLEWARE'),
        e
      );
    })({});
    let o = { [i.client]: 0, [i.server]: 1, [i.edgeServer]: 2 },
      s = '/_not-found',
      u = '' + s + '/page',
      l = 'phase-export',
      c = 'phase-production-build',
      d = 'phase-production-server',
      p = 'phase-development-server',
      f = 'phase-test',
      m = 'phase-info',
      h = 'pages-manifest.json',
      g = 'webpack-stats.json',
      v = 'app-paths-manifest.json',
      _ = 'app-path-routes-manifest.json',
      y = 'build-manifest.json',
      b = 'app-build-manifest.json',
      $ = 'functions-config-manifest.json',
      S = 'subresource-integrity-manifest',
      x = 'next-font-manifest',
      I = 'export-marker.json',
      k = 'export-detail.json',
      w = 'prerender-manifest.json',
      E = 'routes-manifest.json',
      O = 'images-manifest.json',
      T = 'required-server-files.json',
      N = '_devPagesManifest.json',
      P = 'middleware-manifest.json',
      U = '_clientMiddlewareManifest.json',
      A = 'client-build-manifest.json',
      D = '_devMiddlewareManifest.json',
      z = 'react-loadable-manifest.json',
      j = 'server',
      Z = ['next.config.js', 'next.config.mjs', 'next.config.ts'],
      R = 'BUILD_ID',
      C = ['/_document', '/_app', '/_error'],
      L = 'public',
      M = 'static',
      F = '__NEXT_DROP_CLIENT_FILE__',
      B = '__NEXT_BUILTIN_DOCUMENT__',
      V = '__barrel_optimize__',
      G = 'client-reference-manifest',
      J = 'server-reference-manifest',
      W = 'middleware-build-manifest',
      K = 'middleware-react-loadable-manifest',
      Y = 'interception-route-rewrite-manifest',
      X = 'dynamic-css-manifest',
      H = 'main',
      q = '' + H + '-app',
      Q = 'app-pages-internals',
      ee = 'react-refresh',
      et = 'amp',
      en = 'webpack',
      er = 'polyfills',
      ei = Symbol(er),
      ea = 'webpack-runtime',
      eo = 'edge-runtime-webpack',
      es = '__N_SSG',
      eu = '__N_SSP',
      el = {
        name: 'Times New Roman',
        xAvgCharWidth: 821,
        azAvgWidth: 854.3953488372093,
        unitsPerEm: 2048,
      },
      ec = { name: 'Arial', xAvgCharWidth: 904, azAvgWidth: 934.5116279069767, unitsPerEm: 2048 },
      ed = ['/500'],
      ep = 1,
      ef = 6e3,
      em = { client: 'client', server: 'server' },
      eh = [
        'clearImmediate',
        'setImmediate',
        'BroadcastChannel',
        'ByteLengthQueuingStrategy',
        'CompressionStream',
        'CountQueuingStrategy',
        'DecompressionStream',
        'DomException',
        'MessageChannel',
        'MessageEvent',
        'MessagePort',
        'ReadableByteStreamController',
        'ReadableStreamBYOBRequest',
        'ReadableStreamDefaultController',
        'TransformStreamDefaultController',
        'WritableStreamDefaultController',
      ],
      eg = new Set([H, ee, et, q]);
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  19692,
  (e, t, n) => {
    t.exports = e.r(19275);
  },
  93228,
  (e) => {
    'use strict';
    let t, n, r, i, a;
    e.s([], 93228);
    let o = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      s = globalThis,
      u = '10.10.0';
    function l() {
      return (c(s), s);
    }
    function c(e) {
      let t = (e.__SENTRY__ = e.__SENTRY__ || {});
      return ((t.version = t.version || u), (t[u] = t[u] || {}));
    }
    function d(e, t, n = s) {
      let r = (n.__SENTRY__ = n.__SENTRY__ || {}),
        i = (r[u] = r[u] || {});
      return i[e] || (i[e] = t());
    }
    let p = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
      f = {};
    function m(e) {
      if (!('console' in s)) return e();
      let t = s.console,
        n = {},
        r = Object.keys(f);
      r.forEach((e) => {
        let r = f[e];
        ((n[e] = t[e]), (t[e] = r));
      });
      try {
        return e();
      } finally {
        r.forEach((e) => {
          t[e] = n[e];
        });
      }
    }
    function h(e, ...t) {
      o &&
        (function () {
          return o ? d('loggerSettings', () => ({ enabled: !1 })) : { enabled: !1 };
        })().enabled &&
        m(() => {
          s.console[e](`Sentry Logger [${e}]:`, ...t);
        });
    }
    let g = {
        log: function (...e) {
          h('log', ...e);
        },
        warn: function (...e) {
          h('warn', ...e);
        },
        error: function (...e) {
          h('error', ...e);
        },
      },
      v = /\(error: (.*)\)/,
      _ = /captureMessage|captureException/;
    function y(...e) {
      let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
      return (e, n = 0, r = 0) => {
        let i = [],
          a = e.split('\n');
        for (let e = n; e < a.length; e++) {
          let n = a[e];
          n.length > 1024 && (n = n.slice(0, 1024));
          let o = v.test(n) ? n.replace(v, '$1') : n;
          if (!o.match(/\S*Error: /)) {
            for (let e of t) {
              let t = e(o);
              if (t) {
                i.push(t);
                break;
              }
            }
            if (i.length >= 50 + r) break;
          }
        }
        var o = i.slice(r);
        if (!o.length) return [];
        let s = Array.from(o);
        return (
          /sentryWrapped/.test(b(s).function || '') && s.pop(),
          s.reverse(),
          _.test(b(s).function || '') && (s.pop(), _.test(b(s).function || '') && s.pop()),
          s
            .slice(0, 50)
            .map((e) => ({
              ...e,
              filename: e.filename || b(s).filename,
              function: e.function || '?',
            }))
        );
      };
    }
    function b(e) {
      return e[e.length - 1] || {};
    }
    let $ = '<anonymous>';
    function S(e) {
      try {
        if (!e || 'function' != typeof e) return $;
        return e.name || $;
      } catch {
        return $;
      }
    }
    function x(e) {
      let t = e.exception;
      if (t) {
        let e = [];
        try {
          return (
            t.values.forEach((t) => {
              t.stacktrace.frames && e.push(...t.stacktrace.frames);
            }),
            e
          );
        } catch {}
      }
    }
    let I = {},
      k = {};
    function w(e, t) {
      ((I[e] = I[e] || []), I[e].push(t));
    }
    function E(e, t) {
      if (!k[e]) {
        k[e] = !0;
        try {
          t();
        } catch (t) {
          o && g.error(`Error while instrumenting ${e}`, t);
        }
      }
    }
    function O(e, t) {
      let n = e && I[e];
      if (n)
        for (let r of n)
          try {
            r(t);
          } catch (t) {
            o &&
              g.error(
                `Error while triggering instrumentation handler.
Type: ${e}
Name: ${S(r)}
Error:`,
                t
              );
          }
    }
    let T = null;
    function N() {
      ((T = s.onerror),
        (s.onerror = function (e, t, n, r, i) {
          return (
            O('error', { column: r, error: i, line: n, msg: e, url: t }),
            !!T && T.apply(this, arguments)
          );
        }),
        (s.onerror.__SENTRY_INSTRUMENTED__ = !0));
    }
    let P = null;
    function U() {
      ((P = s.onunhandledrejection),
        (s.onunhandledrejection = function (e) {
          return (O('unhandledrejection', e), !P || P.apply(this, arguments));
        }),
        (s.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
    }
    let A = Object.prototype.toString;
    function D(e) {
      switch (A.call(e)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
        case '[object WebAssembly.Exception]':
          return !0;
        default:
          return M(e, Error);
      }
    }
    function z(e, t) {
      return A.call(e) === `[object ${t}]`;
    }
    function j(e) {
      return z(e, 'String');
    }
    function Z(e) {
      return (
        'object' == typeof e &&
        null !== e &&
        '__sentry_template_string__' in e &&
        '__sentry_template_values__' in e
      );
    }
    function R(e) {
      return null === e || Z(e) || ('object' != typeof e && 'function' != typeof e);
    }
    function C(e) {
      return z(e, 'Object');
    }
    function L(e) {
      return !!(e?.then && 'function' == typeof e.then);
    }
    function M(e, t) {
      try {
        return e instanceof t;
      } catch {
        return !1;
      }
    }
    function F(e) {
      return !!('object' == typeof e && null !== e && (e.__isVue || e._isVue));
    }
    function B(e) {
      return 'undefined' != typeof Request && M(e, Request);
    }
    function V(e, t = 0) {
      return 'string' != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
    }
    function G(e, t, n = !1) {
      return !!j(e) && (z(t, 'RegExp') ? t.test(e) : !!j(t) && (n ? e === t : e.includes(t)));
    }
    function J(e, t = [], n = !1) {
      return t.some((t) => G(e, t, n));
    }
    function W(e, t, n) {
      if (!(t in e)) return;
      let r = e[t];
      if ('function' != typeof r) return;
      let i = n(r);
      'function' == typeof i &&
        (function (e, t) {
          try {
            let n = t.prototype || {};
            ((e.prototype = t.prototype = n), K(e, '__sentry_original__', t));
          } catch {}
        })(i, r);
      try {
        e[t] = i;
      } catch {
        o && g.log(`Failed to replace method "${t}" in object`, e);
      }
    }
    function K(e, t, n) {
      try {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
      } catch {
        o && g.log(`Failed to add non-enumerable property "${t}" to object`, e);
      }
    }
    function Y(e) {
      if (D(e)) return { message: e.message, name: e.name, stack: e.stack, ...H(e) };
      if (!('undefined' != typeof Event && M(e, Event))) return e;
      {
        let t = { type: e.type, target: X(e.target), currentTarget: X(e.currentTarget), ...H(e) };
        return ('undefined' != typeof CustomEvent && M(e, CustomEvent) && (t.detail = e.detail), t);
      }
    }
    function X(e) {
      try {
        return 'undefined' != typeof Element && M(e, Element)
          ? (function (e, t = {}) {
              if (!e) return '<unknown>';
              try {
                let n,
                  r = e,
                  i = [],
                  a = 0,
                  o = 0,
                  u = Array.isArray(t) ? t : t.keyAttrs,
                  l = (!Array.isArray(t) && t.maxStringLength) || 80;
                for (
                  ;
                  r &&
                  a++ < 5 &&
                  ((n = (function (e, t) {
                    let n = [];
                    if (!e?.tagName) return '';
                    if (s.HTMLElement && e instanceof HTMLElement && e.dataset) {
                      if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                      if (e.dataset.sentryElement) return e.dataset.sentryElement;
                    }
                    n.push(e.tagName.toLowerCase());
                    let r = t?.length
                      ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)])
                      : null;
                    if (r?.length)
                      r.forEach((e) => {
                        n.push(`[${e[0]}="${e[1]}"]`);
                      });
                    else {
                      e.id && n.push(`#${e.id}`);
                      let t = e.className;
                      if (t && j(t)) for (let e of t.split(/\s+/)) n.push(`.${e}`);
                    }
                    for (let t of ['aria-label', 'type', 'name', 'title', 'alt']) {
                      let r = e.getAttribute(t);
                      r && n.push(`[${t}="${r}"]`);
                    }
                    return n.join('');
                  })(r, u)),
                  'html' !== n && (!(a > 1) || !(o + 3 * i.length + n.length >= l)));

                )
                  (i.push(n), (o += n.length), (r = r.parentNode));
                return i.reverse().join(' > ');
              } catch {
                return '<unknown>';
              }
            })(e)
          : Object.prototype.toString.call(e);
      } catch {
        return '<unknown>';
      }
    }
    function H(e) {
      if ('object' != typeof e || null === e) return {};
      {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }
    }
    function q(e = s.crypto || s.msCrypto) {
      let t = () => 16 * Math.random();
      try {
        if (e?.randomUUID) return e.randomUUID().replace(/-/g, '');
        e?.getRandomValues &&
          (t = () => {
            let t = new Uint8Array(1);
            return (e.getRandomValues(t), t[0]);
          });
      } catch {}
      return '10000000100040008000100000000000'.replace(/[018]/g, (e) =>
        (e ^ ((15 & t()) >> (e / 4))).toString(16)
      );
    }
    function Q(e) {
      return e.exception?.values?.[0];
    }
    function ee(e) {
      let { message: t, event_id: n } = e;
      if (t) return t;
      let r = Q(e);
      return r
        ? r.type && r.value
          ? `${r.type}: ${r.value}`
          : r.type || r.value || n || '<unknown>'
        : n || '<unknown>';
    }
    function et(e, t) {
      let n = Q(e);
      if (!n) return;
      let r = n.mechanism;
      if (((n.mechanism = { type: 'generic', handled: !0, ...r, ...t }), t && 'data' in t)) {
        let e = { ...r?.data, ...t.data };
        n.mechanism.data = e;
      }
    }
    function en(e) {
      if (
        (function (e) {
          try {
            return e.__sentry_captured__;
          } catch {}
        })(e)
      )
        return !0;
      try {
        K(e, '__sentry_captured__', !0);
      } catch {}
      return !1;
    }
    function er() {
      return Date.now() / 1e3;
    }
    function ei() {
      return (
        t ??
        (t = (function () {
          let { performance: e } = s;
          if (!e?.now || !e.timeOrigin) return er;
          let t = e.timeOrigin;
          return () => (t + e.now()) / 1e3;
        })())
      )();
    }
    function ea(e, t = {}) {
      if (
        (t.user &&
          (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
          e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        (e.timestamp = t.timestamp || ei()),
        t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : q()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        'number' == typeof t.started && (e.started = t.started),
        e.ignoreDuration)
      )
        e.duration = void 0;
      else if ('number' == typeof t.duration) e.duration = t.duration;
      else {
        let t = e.timestamp - e.started;
        e.duration = t >= 0 ? t : 0;
      }
      (t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        'number' == typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status));
    }
    function eo(e, t, n = 2) {
      if (!t || 'object' != typeof t || n <= 0) return t;
      if (e && 0 === Object.keys(t).length) return e;
      let r = { ...e };
      for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = eo(r[e], t[e], n - 1));
      return r;
    }
    function es() {
      return q().substring(16);
    }
    let eu = '_sentrySpan';
    function el(e, t) {
      t ? K(e, eu, t) : delete e[eu];
    }
    class ec {
      constructor() {
        ((this._notifyingListeners = !1),
          (this._scopeListeners = []),
          (this._eventProcessors = []),
          (this._breadcrumbs = []),
          (this._attachments = []),
          (this._user = {}),
          (this._tags = {}),
          (this._extra = {}),
          (this._contexts = {}),
          (this._sdkProcessingMetadata = {}),
          (this._propagationContext = { traceId: q(), sampleRand: Math.random() }));
      }
      clone() {
        let e = new ec();
        return (
          (e._breadcrumbs = [...this._breadcrumbs]),
          (e._tags = { ...this._tags }),
          (e._extra = { ...this._extra }),
          (e._contexts = { ...this._contexts }),
          this._contexts.flags &&
            (e._contexts.flags = { values: [...this._contexts.flags.values] }),
          (e._user = this._user),
          (e._level = this._level),
          (e._session = this._session),
          (e._transactionName = this._transactionName),
          (e._fingerprint = this._fingerprint),
          (e._eventProcessors = [...this._eventProcessors]),
          (e._attachments = [...this._attachments]),
          (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
          (e._propagationContext = { ...this._propagationContext }),
          (e._client = this._client),
          (e._lastEventId = this._lastEventId),
          el(e, this[eu]),
          e
        );
      }
      setClient(e) {
        this._client = e;
      }
      setLastEventId(e) {
        this._lastEventId = e;
      }
      getClient() {
        return this._client;
      }
      lastEventId() {
        return this._lastEventId;
      }
      addScopeListener(e) {
        this._scopeListeners.push(e);
      }
      addEventProcessor(e) {
        return (this._eventProcessors.push(e), this);
      }
      setUser(e) {
        return (
          (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
          this._session && ea(this._session, { user: e }),
          this._notifyScopeListeners(),
          this
        );
      }
      getUser() {
        return this._user;
      }
      setTags(e) {
        return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this);
      }
      setTag(e, t) {
        return ((this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this);
      }
      setExtras(e) {
        return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this);
      }
      setExtra(e, t) {
        return ((this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this);
      }
      setFingerprint(e) {
        return ((this._fingerprint = e), this._notifyScopeListeners(), this);
      }
      setLevel(e) {
        return ((this._level = e), this._notifyScopeListeners(), this);
      }
      setTransactionName(e) {
        return ((this._transactionName = e), this._notifyScopeListeners(), this);
      }
      setContext(e, t) {
        return (
          null === t ? delete this._contexts[e] : (this._contexts[e] = t),
          this._notifyScopeListeners(),
          this
        );
      }
      setSession(e) {
        return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this);
      }
      getSession() {
        return this._session;
      }
      update(e) {
        if (!e) return this;
        let t = 'function' == typeof e ? e(this) : e,
          {
            tags: n,
            extra: r,
            user: i,
            contexts: a,
            level: o,
            fingerprint: s = [],
            propagationContext: u,
          } = (t instanceof ec ? t.getScopeData() : C(t) ? e : void 0) || {};
        return (
          (this._tags = { ...this._tags, ...n }),
          (this._extra = { ...this._extra, ...r }),
          (this._contexts = { ...this._contexts, ...a }),
          i && Object.keys(i).length && (this._user = i),
          o && (this._level = o),
          s.length && (this._fingerprint = s),
          u && (this._propagationContext = u),
          this
        );
      }
      clear() {
        return (
          (this._breadcrumbs = []),
          (this._tags = {}),
          (this._extra = {}),
          (this._user = {}),
          (this._contexts = {}),
          (this._level = void 0),
          (this._transactionName = void 0),
          (this._fingerprint = void 0),
          (this._session = void 0),
          el(this, void 0),
          (this._attachments = []),
          this.setPropagationContext({ traceId: q(), sampleRand: Math.random() }),
          this._notifyScopeListeners(),
          this
        );
      }
      addBreadcrumb(e, t) {
        let n = 'number' == typeof t ? t : 100;
        if (n <= 0) return this;
        let r = { timestamp: er(), ...e, message: e.message ? V(e.message, 2048) : e.message };
        return (
          this._breadcrumbs.push(r),
          this._breadcrumbs.length > n &&
            ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
            this._client?.recordDroppedEvent('buffer_overflow', 'log_item')),
          this._notifyScopeListeners(),
          this
        );
      }
      getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
      }
      clearBreadcrumbs() {
        return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
      }
      addAttachment(e) {
        return (this._attachments.push(e), this);
      }
      clearAttachments() {
        return ((this._attachments = []), this);
      }
      getScopeData() {
        return {
          breadcrumbs: this._breadcrumbs,
          attachments: this._attachments,
          contexts: this._contexts,
          tags: this._tags,
          extra: this._extra,
          user: this._user,
          level: this._level,
          fingerprint: this._fingerprint || [],
          eventProcessors: this._eventProcessors,
          propagationContext: this._propagationContext,
          sdkProcessingMetadata: this._sdkProcessingMetadata,
          transactionName: this._transactionName,
          span: this[eu],
        };
      }
      setSDKProcessingMetadata(e) {
        return ((this._sdkProcessingMetadata = eo(this._sdkProcessingMetadata, e, 2)), this);
      }
      setPropagationContext(e) {
        return ((this._propagationContext = e), this);
      }
      getPropagationContext() {
        return this._propagationContext;
      }
      captureException(e, t) {
        let n = t?.event_id || q();
        if (!this._client)
          return (o && g.warn('No client configured on scope - will not capture exception!'), n);
        let r = Error('Sentry syntheticException');
        return (
          this._client.captureException(
            e,
            { originalException: e, syntheticException: r, ...t, event_id: n },
            this
          ),
          n
        );
      }
      captureMessage(e, t, n) {
        let r = n?.event_id || q();
        if (!this._client)
          return (o && g.warn('No client configured on scope - will not capture message!'), r);
        let i = Error(e);
        return (
          this._client.captureMessage(
            e,
            t,
            { originalException: e, syntheticException: i, ...n, event_id: r },
            this
          ),
          r
        );
      }
      captureEvent(e, t) {
        let n = t?.event_id || q();
        return (
          this._client
            ? this._client.captureEvent(e, { ...t, event_id: n }, this)
            : o && g.warn('No client configured on scope - will not capture event!'),
          n
        );
      }
      _notifyScopeListeners() {
        this._notifyingListeners ||
          ((this._notifyingListeners = !0),
          this._scopeListeners.forEach((e) => {
            e(this);
          }),
          (this._notifyingListeners = !1));
      }
    }
    function ed() {
      return d('defaultCurrentScope', () => new ec());
    }
    function ep() {
      return d('defaultIsolationScope', () => new ec());
    }
    class ef {
      constructor(e, t) {
        let n, r;
        ((n = e || new ec()),
          (r = t || new ec()),
          (this._stack = [{ scope: n }]),
          (this._isolationScope = r));
      }
      withScope(e) {
        let t,
          n = this._pushScope();
        try {
          t = e(n);
        } catch (e) {
          throw (this._popScope(), e);
        }
        return L(t)
          ? t.then(
              (e) => (this._popScope(), e),
              (e) => {
                throw (this._popScope(), e);
              }
            )
          : (this._popScope(), t);
      }
      getClient() {
        return this.getStackTop().client;
      }
      getScope() {
        return this.getStackTop().scope;
      }
      getIsolationScope() {
        return this._isolationScope;
      }
      getStackTop() {
        return this._stack[this._stack.length - 1];
      }
      _pushScope() {
        let e = this.getScope().clone();
        return (this._stack.push({ client: this.getClient(), scope: e }), e);
      }
      _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
      }
    }
    function em() {
      let e = c(l());
      return (e.stack = e.stack || new ef(ed(), ep()));
    }
    function eh(e) {
      return em().withScope(e);
    }
    function eg(e, t) {
      let n = em();
      return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
    }
    function ev(e) {
      return em().withScope(() => e(em().getIsolationScope()));
    }
    function e_(e) {
      let t = c(e);
      return t.acs
        ? t.acs
        : {
            withIsolationScope: ev,
            withScope: eh,
            withSetScope: eg,
            withSetIsolationScope: (e, t) => ev(t),
            getCurrentScope: () => em().getScope(),
            getIsolationScope: () => em().getIsolationScope(),
          };
    }
    function ey() {
      return e_(l()).getCurrentScope();
    }
    function eb() {
      return e_(l()).getIsolationScope();
    }
    function e$() {
      return d('globalScope', () => new ec());
    }
    function eS(...e) {
      let t = e_(l());
      if (2 === e.length) {
        let [n, r] = e;
        return n ? t.withSetScope(n, r) : t.withScope(r);
      }
      return t.withScope(e[0]);
    }
    function ex() {
      return ey().getClient();
    }
    function eI(e) {
      let { traceId: t, parentSpanId: n, propagationSpanId: r } = e.getPropagationContext(),
        i = { trace_id: t, span_id: r || es() };
      return (n && (i.parent_span_id = n), i);
    }
    let ek = 'sentry.source',
      ew = 'sentry.sample_rate',
      eE = 'sentry.op',
      eO = 'sentry.origin',
      eT = 'sentry.custom_span_name',
      eN = 'sentry.profile_id',
      eP = 'sentry.exclusive_time';
    function eU(e) {
      if (e < 400 && e >= 100) return { code: 1 };
      if (e >= 400 && e < 500)
        switch (e) {
          case 401:
            return { code: 2, message: 'unauthenticated' };
          case 403:
            return { code: 2, message: 'permission_denied' };
          case 404:
            return { code: 2, message: 'not_found' };
          case 409:
            return { code: 2, message: 'already_exists' };
          case 413:
            return { code: 2, message: 'failed_precondition' };
          case 429:
            return { code: 2, message: 'resource_exhausted' };
          case 499:
            return { code: 2, message: 'cancelled' };
          default:
            return { code: 2, message: 'invalid_argument' };
        }
      if (e >= 500 && e < 600)
        switch (e) {
          case 501:
            return { code: 2, message: 'unimplemented' };
          case 503:
            return { code: 2, message: 'unavailable' };
          case 504:
            return { code: 2, message: 'deadline_exceeded' };
          default:
            return { code: 2, message: 'internal_error' };
        }
      return { code: 2, message: 'unknown_error' };
    }
    let eA = '_sentryScope',
      eD = '_sentryIsolationScope';
    function ez(e, t, n) {
      e && (K(e, eD, n), K(e, eA, t));
    }
    function ej(e) {
      return { scope: e[eA], isolationScope: e[eD] };
    }
    let eZ = 'sentry-',
      eR = /^sentry-/;
    function eC(e) {
      let t = eM(e);
      if (!t) return;
      let n = Object.entries(t).reduce(
        (e, [t, n]) => (t.match(eR) && (e[t.slice(eZ.length)] = n), e),
        {}
      );
      return Object.keys(n).length > 0 ? n : void 0;
    }
    function eL(e) {
      if (e) {
        var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${eZ}${t}`] = n), e), {});
        return 0 !== Object.keys(t).length
          ? Object.entries(t).reduce((e, [t, n], r) => {
              let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                a = 0 === r ? i : `${e},${i}`;
              return a.length > 8192
                ? (o &&
                    g.warn(
                      `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`
                    ),
                  e)
                : a;
            }, '')
          : void 0;
      }
    }
    function eM(e) {
      if (e && (j(e) || Array.isArray(e)))
        return Array.isArray(e)
          ? e.reduce(
              (e, t) => (
                Object.entries(eF(t)).forEach(([t, n]) => {
                  e[t] = n;
                }),
                e
              ),
              {}
            )
          : eF(e);
    }
    function eF(e) {
      return e
        .split(',')
        .map((e) =>
          e.split('=').map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          })
        )
        .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
    }
    let eB = /^o(\d+)\./,
      eV = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function eG(e, t = !1) {
      let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: u } = e;
      return `${s}://${u}${t && i ? `:${i}` : ''}@${n}${a ? `:${a}` : ''}/${r ? `${r}/` : r}${o}`;
    }
    function eJ(e) {
      return {
        protocol: e.protocol,
        publicKey: e.publicKey || '',
        pass: e.pass || '',
        host: e.host,
        port: e.port || '',
        path: e.path || '',
        projectId: e.projectId,
      };
    }
    function eW(e) {
      let t,
        n = e.getOptions(),
        { host: r } = e.getDsn() || {};
      return (
        n.orgId
          ? (t = String(n.orgId))
          : r &&
            (t = (function (e) {
              let t = e.match(eB);
              return t?.[1];
            })(r)),
        t
      );
    }
    function eK(e) {
      if ('boolean' == typeof e) return Number(e);
      let t = 'string' == typeof e ? parseFloat(e) : e;
      if (!('number' != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t;
    }
    let eY = RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
    function eX(e) {
      let t;
      if (!e) return;
      let n = e.match(eY);
      if (n)
        return (
          '1' === n[3] ? (t = !0) : '0' === n[3] && (t = !1),
          { traceId: n[1], parentSampled: t, parentSpanId: n[2] }
        );
    }
    function eH(e = q(), t = es(), n) {
      let r = '';
      return (void 0 !== n && (r = n ? '-1' : '-0'), `${e}-${t}${r}`);
    }
    let eq = !1;
    function eQ(e) {
      let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
        i = r ? t : e6(e).parent_span_id,
        a = ej(e).scope;
      return {
        parent_span_id: i,
        span_id: r ? a?.getPropagationContext().propagationSpanId || es() : t,
        trace_id: n,
      };
    }
    function e0(e) {
      return e && e.length > 0
        ? e.map(({ context: { spanId: e, traceId: t, traceFlags: n, ...r }, attributes: i }) => ({
            span_id: e,
            trace_id: t,
            sampled: 1 === n,
            attributes: i,
            ...r,
          }))
        : void 0;
    }
    function e1(e) {
      return 'number' == typeof e
        ? e4(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1e9
          : e instanceof Date
            ? e4(e.getTime())
            : ei();
    }
    function e4(e) {
      return e > 0x2540be3ff ? e / 1e3 : e;
    }
    function e6(e) {
      var t;
      if ('function' == typeof e.getSpanJSON) return e.getSpanJSON();
      let { spanId: n, traceId: r } = e.spanContext();
      if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
        let { attributes: t, startTime: i, name: a, endTime: o, status: s, links: u } = e;
        return {
          span_id: n,
          trace_id: r,
          data: t,
          description: a,
          parent_span_id:
            'parentSpanId' in e
              ? e.parentSpanId
              : 'parentSpanContext' in e
                ? e.parentSpanContext?.spanId
                : void 0,
          start_timestamp: e1(i),
          timestamp: e1(o) || void 0,
          status: e9(s),
          op: t[eE],
          origin: t[eO],
          links: e0(u),
        };
      }
      return { span_id: n, trace_id: r, start_timestamp: 0, data: {} };
    }
    function e2(e) {
      let { traceFlags: t } = e.spanContext();
      return 1 === t;
    }
    function e9(e) {
      if (e && 0 !== e.code) return 1 === e.code ? 'ok' : e.message || 'unknown_error';
    }
    let e3 = '_sentryChildSpans',
      e5 = '_sentryRootSpan';
    function e8(e, t) {
      let n = e[e5] || e;
      (K(t, e5, n), e[e3] ? e[e3].add(t) : K(e, e3, new Set([t])));
    }
    function e7(e) {
      return e[e5] || e;
    }
    function te() {
      let e = e_(l());
      return e.getActiveSpan ? e.getActiveSpan() : ey()[eu];
    }
    function tt() {
      eq ||
        (m(() => {
          console.warn(
            '[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.'
          );
        }),
        (eq = !0));
    }
    let tn = !1;
    function tr() {
      if (!tn) {
        ((e.tag = 'sentry_tracingErrorCallback'), (tn = !0));
        let t = 'error';
        (w(t, e), E(t, N));
        let n = 'unhandledrejection';
        (w(n, e), E(n, U));
      }
      function e() {
        let e = te(),
          t = e && e7(e);
        if (t) {
          let e = 'internal_error';
          (o && g.log(`[Tracing] Root span: ${e} -> Global error occurred`),
            t.setStatus({ code: 2, message: e }));
        }
      }
    }
    function ti(e, t, n = [t], r = 'npm') {
      let i = e._metadata || {};
      (i.sdk ||
        (i.sdk = {
          name: `sentry.javascript.${t}`,
          packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: u })),
          version: u,
        }),
        (e._metadata = i));
    }
    function ta(e) {
      return 'isRelative' in e;
    }
    function to(e, t) {
      let n = 0 >= e.indexOf('://') && 0 !== e.indexOf('//'),
        r = t ?? (n ? 'thismessage:/' : void 0);
      try {
        if ('canParse' in URL && !URL.canParse(e, r)) return;
        let t = new URL(e, r);
        if (n) return { isRelative: n, pathname: t.pathname, search: t.search, hash: t.hash };
        return t;
      } catch {}
    }
    function ts(e) {
      if (!e) return {};
      let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
      if (!t) return {};
      let n = t[6] || '',
        r = t[8] || '';
      return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
    }
    function tu(e) {
      return e.split(/[?#]/, 1)[0];
    }
    function tl(e) {
      let { protocol: t, host: n, path: r } = e,
        i =
          n
            ?.replace(/^.*@/, '[filtered]:[filtered]@')
            .replace(/(:80)$/, '')
            .replace(/(:443)$/, '') || '';
      return `${t ? `${t}://` : ''}${i}${r}`;
    }
    var tc,
      td,
      tp,
      tf,
      tm,
      th,
      tg,
      tv,
      t_ = e.i(51615);
    function ty(t, n = 100, r = Infinity) {
      try {
        return (function t(
          n,
          r,
          i = Infinity,
          a = Infinity,
          o = (function () {
            let e = new WeakSet();
            return [
              function (t) {
                return !!e.has(t) || (e.add(t), !1);
              },
              function (t) {
                e.delete(t);
              },
            ];
          })()
        ) {
          let [s, u] = o;
          if (
            null == r ||
            ['boolean', 'string'].includes(typeof r) ||
            ('number' == typeof r && Number.isFinite(r))
          )
            return r;
          let l = (function (t, n) {
            try {
              if ('domain' === t && n && 'object' == typeof n && n._events) return '[Domain]';
              if ('domainEmitter' === t) return '[DomainEmitter]';
              if (n === e.g) return '[Global]';
              if ('undefined' != typeof document && n === document) return '[Document]';
              if (F(n)) return '[VueViewModel]';
              if (C(n) && 'nativeEvent' in n && 'preventDefault' in n && 'stopPropagation' in n)
                return '[SyntheticEvent]';
              if ('number' == typeof n && !Number.isFinite(n)) return `[${n}]`;
              if ('function' == typeof n) return `[Function: ${S(n)}]`;
              if ('symbol' == typeof n) return `[${String(n)}]`;
              if ('bigint' == typeof n) return `[BigInt: ${String(n)}]`;
              let r = (function (e) {
                let t = Object.getPrototypeOf(e);
                return t?.constructor ? t.constructor.name : 'null prototype';
              })(n);
              if (/^HTML(\w*)Element$/.test(r)) return `[HTMLElement: ${r}]`;
              return `[object ${r}]`;
            } catch (e) {
              return `**non-serializable** (${e})`;
            }
          })(n, r);
          if (!l.startsWith('[object ')) return l;
          if (r.__sentry_skip_normalization__) return r;
          let c =
            'number' == typeof r.__sentry_override_normalization_depth__
              ? r.__sentry_override_normalization_depth__
              : i;
          if (0 === c) return l.replace('object ', '');
          if (s(r)) return '[Circular ~]';
          if (r && 'function' == typeof r.toJSON)
            try {
              let e = r.toJSON();
              return t('', e, c - 1, a, o);
            } catch {}
          let d = Array.isArray(r) ? [] : {},
            p = 0,
            f = Y(r);
          for (let e in f) {
            if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
            if (p >= a) {
              d[e] = '[MaxProperties ~]';
              break;
            }
            let n = f[e];
            ((d[e] = t(e, n, c - 1, a, o)), p++);
          }
          return (u(r), d);
        })('', t, n, r);
      } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
      }
    }
    function tb(e, t = []) {
      return [e, t];
    }
    function t$(e, t) {
      for (let n of e[1]) {
        let e = n[0].type;
        if (t(n, e)) return !0;
      }
      return !1;
    }
    function tS(e) {
      let t = c(s);
      return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
    }
    let tx = {
      session: 'session',
      sessions: 'session',
      attachment: 'attachment',
      transaction: 'transaction',
      event: 'error',
      client_report: 'internal',
      user_report: 'default',
      profile: 'profile',
      profile_chunk: 'profile',
      replay_event: 'replay',
      replay_recording: 'replay',
      check_in: 'monitor',
      feedback: 'feedback',
      span: 'span',
      raw_security: 'security',
      log: 'log_item',
    };
    function tI(e) {
      if (!e?.sdk) return;
      let { name: t, version: n } = e.sdk;
      return { name: t, version: n };
    }
    let tk = 'production';
    function tw(e) {
      if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
      let t = e || ex()?.getOptions();
      return !!t && (null != t.tracesSampleRate || !!t.tracesSampler);
    }
    let tE = '_frozenDsc';
    function tO(e, t) {
      let n = t.getOptions(),
        { publicKey: r } = t.getDsn() || {},
        i = {
          environment: n.environment || tk,
          release: n.release,
          public_key: r,
          trace_id: e,
          org_id: eW(t),
        };
      return (t.emit('createDsc', i), i);
    }
    function tT(e, t) {
      let n = t.getPropagationContext();
      return n.dsc || tO(n.traceId, e);
    }
    function tN(e) {
      let t = ex();
      if (!t) return {};
      let n = e7(e),
        r = e6(n),
        i = r.data,
        a = n.spanContext().traceState,
        o = a?.get('sentry.sample_rate') ?? i[ew] ?? i['sentry.previous_trace_sample_rate'];
      function s(e) {
        return (('number' == typeof o || 'string' == typeof o) && (e.sample_rate = `${o}`), e);
      }
      let u = n[tE];
      if (u) return s(u);
      let l = a?.get('sentry.dsc'),
        c = l && eC(l);
      if (c) return s(c);
      let d = tO(e.spanContext().traceId, t),
        p = i[ek],
        f = r.description;
      return (
        'url' !== p && f && (d.transaction = f),
        tw() &&
          ((d.sampled = String(e2(n))),
          (d.sample_rand =
            a?.get('sentry.sample_rand') ??
            ej(n).scope?.getPropagationContext().sampleRand.toString())),
        s(d),
        t.emit('createDsc', d, n),
        d
      );
    }
    function tP(e, t) {
      if (!t?.length || !e.description) return !1;
      for (let r of t) {
        var n;
        if ('string' == typeof (n = r) || n instanceof RegExp) {
          if (G(e.description, r)) return !0;
          continue;
        }
        if (!r.name && !r.op) continue;
        let t = !r.name || G(e.description, r.name),
          i = !r.op || (e.op && G(e.op, r.op));
        if (t && i) return !0;
      }
      return !1;
    }
    let tU = [];
    function tA(e, t) {
      for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
    }
    function tD(e, t, n) {
      if (n[t.name]) {
        o && g.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
      }
      if (
        ((n[t.name] = t),
        -1 === tU.indexOf(t.name) &&
          'function' == typeof t.setupOnce &&
          (t.setupOnce(), tU.push(t.name)),
        t.setup && 'function' == typeof t.setup && t.setup(e),
        'function' == typeof t.preprocessEvent)
      ) {
        let n = t.preprocessEvent.bind(t);
        e.on('preprocessEvent', (t, r) => n(t, r, e));
      }
      if ('function' == typeof t.processEvent) {
        let n = t.processEvent.bind(t),
          r = Object.assign((t, r) => n(t, r, e), { id: t.name });
        e.addEventProcessor(r);
      }
      o && g.log(`Integration installed: ${t.name}`);
    }
    function tz(e) {
      let t = [];
      e.message && t.push(e.message);
      try {
        let n = e.exception.values[e.exception.values.length - 1];
        n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
      } catch {}
      return t;
    }
    function tj(e) {
      return new tR((t) => {
        t(e);
      });
    }
    function tZ(e) {
      return new tR((t, n) => {
        n(e);
      });
    }
    class tR {
      constructor(e) {
        ((this._state = 0), (this._handlers = []), this._runExecutor(e));
      }
      then(e, t) {
        return new tR((n, r) => {
          (this._handlers.push([
            !1,
            (t) => {
              if (e)
                try {
                  n(e(t));
                } catch (e) {
                  r(e);
                }
              else n(t);
            },
            (e) => {
              if (t)
                try {
                  n(t(e));
                } catch (e) {
                  r(e);
                }
              else r(e);
            },
          ]),
            this._executeHandlers());
        });
      }
      catch(e) {
        return this.then((e) => e, e);
      }
      finally(e) {
        return new tR((t, n) => {
          let r, i;
          return this.then(
            (t) => {
              ((i = !1), (r = t), e && e());
            },
            (t) => {
              ((i = !0), (r = t), e && e());
            }
          ).then(() => {
            if (i) return void n(r);
            t(r);
          });
        });
      }
      _executeHandlers() {
        if (0 === this._state) return;
        let e = this._handlers.slice();
        ((this._handlers = []),
          e.forEach((e) => {
            e[0] ||
              (1 === this._state && e[1](this._value),
              2 === this._state && e[2](this._value),
              (e[0] = !0));
          }));
      }
      _runExecutor(e) {
        let t = (e, t) => {
            if (0 === this._state) {
              if (L(t)) return void t.then(n, r);
              ((this._state = e), (this._value = t), this._executeHandlers());
            }
          },
          n = (e) => {
            t(1, e);
          },
          r = (e) => {
            t(2, e);
          };
        try {
          e(n, r);
        } catch (e) {
          r(e);
        }
      }
    }
    function tC(e, t) {
      let {
        extra: n,
        tags: r,
        user: i,
        contexts: a,
        level: o,
        sdkProcessingMetadata: s,
        breadcrumbs: u,
        fingerprint: l,
        eventProcessors: c,
        attachments: d,
        propagationContext: p,
        transactionName: f,
        span: m,
      } = t;
      (tL(e, 'extra', n),
        tL(e, 'tags', r),
        tL(e, 'user', i),
        tL(e, 'contexts', a),
        (e.sdkProcessingMetadata = eo(e.sdkProcessingMetadata, s, 2)),
        o && (e.level = o),
        f && (e.transactionName = f),
        m && (e.span = m),
        u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]),
        l.length && (e.fingerprint = [...e.fingerprint, ...l]),
        c.length && (e.eventProcessors = [...e.eventProcessors, ...c]),
        d.length && (e.attachments = [...e.attachments, ...d]),
        (e.propagationContext = { ...e.propagationContext, ...p }));
    }
    function tL(e, t, n) {
      e[t] = eo(e[t], n, 1);
    }
    let tM = "Not capturing exception because it's already been captured.",
      tF = 'Discarded session because of missing or non-string release',
      tB = Symbol.for('SentryInternalError'),
      tV = Symbol.for('SentryDoNotSendEventError');
    function tG(e) {
      return { message: e, [tB]: !0 };
    }
    function tJ(e) {
      return { message: e, [tV]: !0 };
    }
    function tW(e) {
      return !!e && 'object' == typeof e && tB in e;
    }
    function tK(e) {
      return !!e && 'object' == typeof e && tV in e;
    }
    class tY {
      constructor(e) {
        if (
          ((this._options = e),
          (this._integrations = {}),
          (this._numProcessing = 0),
          (this._outcomes = {}),
          (this._hooks = {}),
          (this._eventProcessors = []),
          e.dsn
            ? (this._dsn = (function (e) {
                let t =
                  'string' == typeof e
                    ? (function (e) {
                        let t = eV.exec(e);
                        if (!t)
                          return void m(() => {
                            console.error(`Invalid Sentry Dsn: ${e}`);
                          });
                        let [n, r, i = '', a = '', o = '', s = ''] = t.slice(1),
                          u = '',
                          l = s,
                          c = l.split('/');
                        if ((c.length > 1 && ((u = c.slice(0, -1).join('/')), (l = c.pop())), l)) {
                          let e = l.match(/^\d+/);
                          e && (l = e[0]);
                        }
                        return eJ({
                          host: a,
                          pass: i,
                          path: u,
                          projectId: l,
                          port: o,
                          protocol: n,
                          publicKey: r,
                        });
                      })(e)
                    : eJ(e);
                if (
                  t &&
                  (function (e) {
                    if (!o) return !0;
                    let { port: t, projectId: n, protocol: r } = e;
                    return (
                      !['protocol', 'publicKey', 'host', 'projectId'].find(
                        (t) => !e[t] && (g.error(`Invalid Sentry Dsn: ${t} missing`), !0)
                      ) &&
                      (n.match(/^\d+$/)
                        ? 'http' !== r && 'https' !== r
                          ? (g.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
                          : !(t && isNaN(parseInt(t, 10))) ||
                            (g.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                        : (g.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
                    );
                  })(t)
                )
                  return t;
              })(e.dsn))
            : o && g.warn('No DSN provided, client will not send events.'),
          this._dsn)
        ) {
          let t = (function (e, t, n) {
            return (
              t ||
              `${(function (e) {
                let t = e.protocol ? `${e.protocol}:` : '',
                  n = e.port ? `:${e.port}` : '';
                return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ''}/api/`;
              })(e)}${e.projectId}/envelope/?${(function (e, t) {
                let n = { sentry_version: '7' };
                return (
                  e.publicKey && (n.sentry_key = e.publicKey),
                  t && (n.sentry_client = `${t.name}/${t.version}`),
                  new URLSearchParams(n).toString()
                );
              })(e, n)}`
            );
          })(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
          this._transport = e.transport({
            tunnel: this._options.tunnel,
            recordDroppedEvent: this.recordDroppedEvent.bind(this),
            ...e.transportOptions,
            url: t,
          });
        }
      }
      captureException(e, t, n) {
        let r = q();
        if (en(e)) return (o && g.log(tM), r);
        let i = { event_id: r, ...t };
        return (
          this._process(this.eventFromException(e, i).then((e) => this._captureEvent(e, i, n))),
          i.event_id
        );
      }
      captureMessage(e, t, n, r) {
        let i = { event_id: q(), ...n },
          a = Z(e) ? e : String(e),
          o = R(e) ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
        return (this._process(o.then((e) => this._captureEvent(e, i, r))), i.event_id);
      }
      captureEvent(e, t, n) {
        let r = q();
        if (t?.originalException && en(t.originalException)) return (o && g.log(tM), r);
        let i = { event_id: r, ...t },
          a = e.sdkProcessingMetadata || {},
          s = a.capturedSpanScope,
          u = a.capturedSpanIsolationScope;
        return (this._process(this._captureEvent(e, i, s || n, u)), i.event_id);
      }
      captureSession(e) {
        (this.sendSession(e), ea(e, { init: !1 }));
      }
      getDsn() {
        return this._dsn;
      }
      getOptions() {
        return this._options;
      }
      getSdkMetadata() {
        return this._options._metadata;
      }
      getTransport() {
        return this._transport;
      }
      flush(e) {
        let t = this._transport;
        return t
          ? (this.emit('flush'),
            this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e)))
          : tj(!0);
      }
      close(e) {
        return this.flush(e).then((e) => ((this.getOptions().enabled = !1), this.emit('close'), e));
      }
      getEventProcessors() {
        return this._eventProcessors;
      }
      addEventProcessor(e) {
        this._eventProcessors.push(e);
      }
      init() {
        (this._isEnabled() ||
          this._options.integrations.some(({ name: e }) => e.startsWith('Spotlight'))) &&
          this._setupIntegrations();
      }
      getIntegrationByName(e) {
        return this._integrations[e];
      }
      addIntegration(e) {
        let t = this._integrations[e.name];
        (tD(this, e, this._integrations), t || tA(this, [e]));
      }
      sendEvent(e, t = {}) {
        this.emit('beforeSendEvent', e, t);
        let n = (function (e, t, n, r) {
          let i = tI(n),
            a = e.type && 'replay_event' !== e.type ? e.type : 'event';
          !(function (e, t) {
            if (!t) return;
            let n = e.sdk || {};
            e.sdk = {
              ...n,
              name: n.name || t.name,
              version: n.version || t.version,
              integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
              packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
              settings:
                e.sdk?.settings || t.settings ? { ...e.sdk?.settings, ...t.settings } : void 0,
            };
          })(e, n?.sdk);
          let o = (function (e, t, n, r) {
            let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
            return {
              event_id: e.event_id,
              sent_at: new Date().toISOString(),
              ...(t && { sdk: t }),
              ...(!!n && r && { dsn: eG(r) }),
              ...(i && { trace: i }),
            };
          })(e, i, r, t);
          return (delete e.sdkProcessingMetadata, tb(o, [[{ type: a }, e]]));
        })(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (let e of t.attachments || [])
          n = (function (e, t) {
            let [n, r] = e;
            return [n, [...r, t]];
          })(
            n,
            (function (e) {
              let t = 'string' == typeof e.data ? tS(e.data) : e.data;
              return [
                {
                  type: 'attachment',
                  length: t.length,
                  filename: e.filename,
                  content_type: e.contentType,
                  attachment_type: e.attachmentType,
                },
                t,
              ];
            })(e)
          );
        let r = this.sendEnvelope(n);
        r && r.then((t) => this.emit('afterSendEvent', e, t), null);
      }
      sendSession(e) {
        let { release: t, environment: n = tk } = this._options;
        if ('aggregates' in e) {
          let r = e.attrs || {};
          if (!r.release && !t) {
            o && g.warn(tF);
            return;
          }
          ((r.release = r.release || t), (r.environment = r.environment || n), (e.attrs = r));
        } else {
          if (!e.release && !t) {
            o && g.warn(tF);
            return;
          }
          ((e.release = e.release || t), (e.environment = e.environment || n));
        }
        this.emit('beforeSendSession', e);
        let r = (function (e, t, n, r) {
          let i = tI(n);
          return tb(
            {
              sent_at: new Date().toISOString(),
              ...(i && { sdk: i }),
              ...(!!r && t && { dsn: eG(t) }),
            },
            ['aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e.toJSON()]]
          );
        })(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(r);
      }
      recordDroppedEvent(e, t, n = 1) {
        if (this._options.sendClientReports) {
          let r = `${e}:${t}`;
          (o && g.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ''}`),
            (this._outcomes[r] = (this._outcomes[r] || 0) + n));
        }
      }
      on(e, t) {
        let n = (this._hooks[e] = this._hooks[e] || []);
        return (
          n.push(t),
          () => {
            let e = n.indexOf(t);
            e > -1 && n.splice(e, 1);
          }
        );
      }
      emit(e, ...t) {
        let n = this._hooks[e];
        n && n.forEach((e) => e(...t));
      }
      sendEnvelope(e) {
        return (this.emit('beforeEnvelope', e), this._isEnabled() && this._transport)
          ? this._transport
              .send(e)
              .then(null, (e) => (o && g.error('Error while sending envelope:', e), e))
          : (o && g.error('Transport disabled'), tj({}));
      }
      _setupIntegrations() {
        let { integrations: e } = this._options;
        ((this._integrations = (function (e, t) {
          let n = {};
          return (
            t.forEach((t) => {
              t && tD(e, t, n);
            }),
            n
          );
        })(this, e)),
          tA(this, e));
      }
      _updateSessionFromEvent(e, t) {
        let n = 'fatal' === t.level,
          r = !1,
          i = t.exception?.values;
        if (i)
          for (let e of ((r = !0), i)) {
            let t = e.mechanism;
            if (t?.handled === !1) {
              n = !0;
              break;
            }
          }
        let a = 'ok' === e.status;
        ((a && 0 === e.errors) || (a && n)) &&
          (ea(e, { ...(n && { status: 'crashed' }), errors: e.errors || Number(r || n) }),
          this.captureSession(e));
      }
      _isClientDoneProcessing(e) {
        return new tR((t) => {
          let n = 0,
            r = setInterval(() => {
              0 == this._numProcessing
                ? (clearInterval(r), t(!0))
                : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
            }, 1);
        });
      }
      _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
      }
      _prepareEvent(e, t, a, u) {
        let l = this.getOptions(),
          c = Object.keys(this._integrations);
        return (
          !t.integrations && c?.length && (t.integrations = c),
          this.emit('preprocessEvent', e, t),
          e.type || u.setLastEventId(e.event_id || t.event_id),
          (function (e, t, a, u, l, c) {
            var d, p, f, m, h, v;
            let { normalizeDepth: _ = 3, normalizeMaxBreadth: y = 1e3 } = e,
              b = {
                ...t,
                event_id: t.event_id || a.event_id || q(),
                timestamp: t.timestamp || er(),
              },
              $ = a.integrations || e.integrations.map((e) => e.name);
            ((function (e, t) {
              let { environment: n, release: r, dist: i, maxValueLength: a = 250 } = t;
              ((e.environment = e.environment || n || tk),
                !e.release && r && (e.release = r),
                !e.dist && i && (e.dist = i));
              let o = e.request;
              o?.url && (o.url = V(o.url, a));
            })(b, e),
              (d = b),
              (p = $).length > 0 &&
                ((d.sdk = d.sdk || {}),
                (d.sdk.integrations = [...(d.sdk.integrations || []), ...p])),
              l && l.emit('applyFrameMetadata', t),
              void 0 === t.type &&
                (function (e, t) {
                  let a = (function (e) {
                    let t = s._sentryDebugIds;
                    if (!t) return {};
                    let a = Object.keys(t);
                    return i && a.length === r
                      ? i
                      : ((r = a.length),
                        (i = a.reduce((r, i) => {
                          n || (n = {});
                          let a = n[i];
                          if (a) r[a[0]] = a[1];
                          else {
                            let a = e(i);
                            for (let e = a.length - 1; e >= 0; e--) {
                              let o = a[e],
                                s = o?.filename,
                                u = t[i];
                              if (s && u) {
                                ((r[s] = u), (n[i] = [s, u]));
                                break;
                              }
                            }
                          }
                          return r;
                        }, {})));
                  })(t);
                  e.exception?.values?.forEach((e) => {
                    e.stacktrace?.frames?.forEach((e) => {
                      e.filename && (e.debug_id = a[e.filename]);
                    });
                  });
                })(b, e.stackParser));
            let S = (function (e, t) {
              if (!t) return e;
              let n = e ? e.clone() : new ec();
              return (n.update(t), n);
            })(u, a.captureContext);
            a.mechanism && et(b, a.mechanism);
            let x = l ? l.getEventProcessors() : [],
              I = e$().getScopeData();
            (c && tC(I, c.getScopeData()), S && tC(I, S.getScopeData()));
            let k = [...(a.attachments || []), ...I.attachments];
            k.length && (a.attachments = k);
            let { fingerprint: w, span: E, breadcrumbs: O, sdkProcessingMetadata: T } = I;
            return (
              (function (e, t) {
                let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t;
                (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
                  Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
                  Object.keys(i).length && (e.user = { ...i, ...e.user }),
                  Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
                  o && (e.level = o),
                  s && 'transaction' !== e.type && (e.transaction = s));
              })(b, I),
              E &&
                (function (e, t) {
                  ((e.contexts = { trace: eQ(t), ...e.contexts }),
                    (e.sdkProcessingMetadata = {
                      dynamicSamplingContext: tN(t),
                      ...e.sdkProcessingMetadata,
                    }));
                  let n = e6(e7(t)).description;
                  n && !e.transaction && 'transaction' === e.type && (e.transaction = n);
                })(b, E),
              (f = b),
              (m = w),
              (f.fingerprint = f.fingerprint
                ? Array.isArray(f.fingerprint)
                  ? f.fingerprint
                  : [f.fingerprint]
                : []),
              m && (f.fingerprint = f.fingerprint.concat(m)),
              f.fingerprint.length || delete f.fingerprint,
              (function (e, t) {
                let n = [...(e.breadcrumbs || []), ...t];
                e.breadcrumbs = n.length ? n : void 0;
              })(b, O),
              (h = b),
              (v = T),
              (h.sdkProcessingMetadata = { ...h.sdkProcessingMetadata, ...v }),
              (function e(t, n, r, i = 0) {
                return new tR((a, s) => {
                  let u = t[i];
                  if (null === n || 'function' != typeof u) a(n);
                  else {
                    let l = u({ ...n }, r);
                    (o && u.id && null === l && g.log(`Event processor "${u.id}" dropped event`),
                      L(l)
                        ? l.then((n) => e(t, n, r, i + 1).then(a)).then(null, s)
                        : e(t, l, r, i + 1)
                            .then(a)
                            .then(null, s));
                  }
                });
              })([...x, ...I.eventProcessors], b, a).then((e) =>
                (e &&
                  (function (e) {
                    let t = {};
                    if (
                      (e.exception?.values?.forEach((e) => {
                        e.stacktrace?.frames?.forEach((e) => {
                          e.debug_id &&
                            (e.abs_path
                              ? (t[e.abs_path] = e.debug_id)
                              : e.filename && (t[e.filename] = e.debug_id),
                            delete e.debug_id);
                        });
                      }),
                      0 === Object.keys(t).length)
                    )
                      return;
                    ((e.debug_meta = e.debug_meta || {}),
                      (e.debug_meta.images = e.debug_meta.images || []));
                    let n = e.debug_meta.images;
                    Object.entries(t).forEach(([e, t]) => {
                      n.push({ type: 'sourcemap', code_file: e, debug_id: t });
                    });
                  })(e),
                'number' == typeof _ && _ > 0)
                  ? (function (e, t, n) {
                      if (!e) return null;
                      let r = {
                        ...e,
                        ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                            ...e,
                            ...(e.data && { data: ty(e.data, t, n) }),
                          })),
                        }),
                        ...(e.user && { user: ty(e.user, t, n) }),
                        ...(e.contexts && { contexts: ty(e.contexts, t, n) }),
                        ...(e.extra && { extra: ty(e.extra, t, n) }),
                      };
                      return (
                        e.contexts?.trace &&
                          r.contexts &&
                          ((r.contexts.trace = e.contexts.trace),
                          e.contexts.trace.data &&
                            (r.contexts.trace.data = ty(e.contexts.trace.data, t, n))),
                        e.spans &&
                          (r.spans = e.spans.map((e) => ({
                            ...e,
                            ...(e.data && { data: ty(e.data, t, n) }),
                          }))),
                        e.contexts?.flags &&
                          r.contexts &&
                          (r.contexts.flags = ty(e.contexts.flags, 3, n)),
                        r
                      );
                    })(e, _, y)
                  : e
              )
            );
          })(l, e, t, a, this, u).then(
            (e) => (
              null === e ||
                (this.emit('postprocessEvent', e, t),
                (e.contexts = { trace: eI(a), ...e.contexts }),
                (e.sdkProcessingMetadata = {
                  dynamicSamplingContext: tT(this, a),
                  ...e.sdkProcessingMetadata,
                })),
              e
            )
          )
        );
      }
      _captureEvent(e, t = {}, n = ey(), r = eb()) {
        return (
          o && tX(e) && g.log(`Captured error event \`${tz(e)[0] || '<unknown>'}\``),
          this._processEvent(e, t, n, r).then(
            (e) => e.event_id,
            (e) => {
              o && (tK(e) ? g.log(e.message) : tW(e) ? g.warn(e.message) : g.warn(e));
            }
          )
        );
      }
      _processEvent(e, t, n, r) {
        let i = this.getOptions(),
          { sampleRate: a } = i,
          o = tH(e),
          s = tX(e),
          u = e.type || 'error',
          l = `before send for type \`${u}\``,
          c = void 0 === a ? void 0 : eK(a);
        if (s && 'number' == typeof c && Math.random() > c)
          return (
            this.recordDroppedEvent('sample_rate', 'error'),
            tZ(
              tJ(
                `Discarding event because it's not included in the random sample (sampling rate = ${a})`
              )
            )
          );
        let d = 'replay_event' === u ? 'replay' : u;
        return this._prepareEvent(e, t, n, r)
          .then((e) => {
            if (null === e)
              throw (
                this.recordDroppedEvent('event_processor', d),
                tJ('An event processor returned `null`, will not send event.')
              );
            return t.data && !0 === t.data.__sentry__
              ? e
              : (function (e, t) {
                  let n = `${t} must return \`null\` or a valid event.`;
                  if (L(e))
                    return e.then(
                      (e) => {
                        if (!C(e) && null !== e) throw tG(n);
                        return e;
                      },
                      (e) => {
                        throw tG(`${t} rejected with ${e}`);
                      }
                    );
                  if (!C(e) && null !== e) throw tG(n);
                  return e;
                })(
                  (function (e, t, n, r) {
                    let {
                        beforeSend: i,
                        beforeSendTransaction: a,
                        beforeSendSpan: o,
                        ignoreSpans: s,
                      } = t,
                      u = n;
                    if (tX(u) && i) return i(u, r);
                    if (tH(u)) {
                      if (o || s) {
                        let t = (function (e) {
                          let {
                            trace_id: t,
                            parent_span_id: n,
                            span_id: r,
                            status: i,
                            origin: a,
                            data: o,
                            op: s,
                          } = e.contexts?.trace ?? {};
                          return {
                            data: o ?? {},
                            description: e.transaction,
                            op: s,
                            parent_span_id: n,
                            span_id: r ?? '',
                            start_timestamp: e.start_timestamp ?? 0,
                            status: i,
                            timestamp: e.timestamp,
                            trace_id: t ?? '',
                            origin: a,
                            profile_id: o?.[eN],
                            exclusive_time: o?.[eP],
                            measurements: e.measurements,
                            is_segment: !0,
                          };
                        })(u);
                        if (s?.length && tP(t, s)) return null;
                        if (o) {
                          let e = o(t);
                          if (e)
                            u = eo(n, {
                              type: 'transaction',
                              timestamp: e.timestamp,
                              start_timestamp: e.start_timestamp,
                              transaction: e.description,
                              contexts: {
                                trace: {
                                  trace_id: e.trace_id,
                                  span_id: e.span_id,
                                  parent_span_id: e.parent_span_id,
                                  op: e.op,
                                  status: e.status,
                                  origin: e.origin,
                                  data: {
                                    ...e.data,
                                    ...(e.profile_id && { [eN]: e.profile_id }),
                                    ...(e.exclusive_time && { [eP]: e.exclusive_time }),
                                  },
                                },
                              },
                              measurements: e.measurements,
                            });
                          else tt();
                        }
                        if (u.spans) {
                          let t = [],
                            n = u.spans;
                          for (let e of n) {
                            if (s?.length && tP(e, s)) {
                              let t = e.parent_span_id,
                                r = e.span_id;
                              if (t)
                                for (let e of n) e.parent_span_id === r && (e.parent_span_id = t);
                              continue;
                            }
                            if (o) {
                              let n = o(e);
                              n ? t.push(n) : (tt(), t.push(e));
                            } else t.push(e);
                          }
                          let r = u.spans.length - t.length;
                          (r && e.recordDroppedEvent('before_send', 'span', r), (u.spans = t));
                        }
                      }
                      if (a) {
                        if (u.spans) {
                          let e = u.spans.length;
                          u.sdkProcessingMetadata = {
                            ...n.sdkProcessingMetadata,
                            spanCountBeforeProcessing: e,
                          };
                        }
                        return a(u, r);
                      }
                    }
                    return u;
                  })(this, i, e, t),
                  l
                );
          })
          .then((i) => {
            if (null === i) {
              if ((this.recordDroppedEvent('before_send', d), o)) {
                let t = 1 + (e.spans || []).length;
                this.recordDroppedEvent('before_send', 'span', t);
              }
              throw tJ(`${l} returned \`null\`, will not send event.`);
            }
            let a = n.getSession() || r.getSession();
            if ((s && a && this._updateSessionFromEvent(a, i), o)) {
              let e =
                (i.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
                (i.spans ? i.spans.length : 0);
              e > 0 && this.recordDroppedEvent('before_send', 'span', e);
            }
            let u = i.transaction_info;
            return (
              o &&
                u &&
                i.transaction !== e.transaction &&
                (i.transaction_info = { ...u, source: 'custom' }),
              this.sendEvent(i, t),
              i
            );
          })
          .then(null, (e) => {
            if (tK(e) || tW(e)) throw e;
            throw (
              this.captureException(e, {
                mechanism: { handled: !1, type: 'internal' },
                data: { __sentry__: !0 },
                originalException: e,
              }),
              tG(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
            );
          });
      }
      _process(e) {
        (this._numProcessing++,
          e.then(
            (e) => (this._numProcessing--, e),
            (e) => (this._numProcessing--, e)
          ));
      }
      _clearOutcomes() {
        let e = this._outcomes;
        return (
          (this._outcomes = {}),
          Object.entries(e).map(([e, t]) => {
            let [n, r] = e.split(':');
            return { reason: n, category: r, quantity: t };
          })
        );
      }
      _flushOutcomes() {
        var e;
        o && g.log('Flushing outcomes...');
        let t = this._clearOutcomes();
        if (0 === t.length) {
          o && g.log('No outcomes to send');
          return;
        }
        if (!this._dsn) {
          o && g.log('No dsn provided, will not send outcomes');
          return;
        }
        o && g.log('Sending outcomes:', t);
        let n = tb((e = this._options.tunnel && eG(this._dsn)) ? { dsn: e } : {}, [
          [{ type: 'client_report' }, { timestamp: er(), discarded_events: t }],
        ]);
        this.sendEnvelope(n);
      }
    }
    function tX(e) {
      return void 0 === e.type;
    }
    function tH(e) {
      return 'transaction' === e.type;
    }
    function tq(e, t) {
      return t
        ? eS(t, () => {
            let n = te(),
              r = n ? eQ(n) : eI(t);
            return [n ? tN(n) : tT(e, t), r];
          })
        : [void 0, void 0];
    }
    function tQ(e, t) {
      var n;
      let r = t ?? ((n = e), t0().get(n)) ?? [];
      if (0 === r.length) return;
      let i = e.getOptions(),
        a = (function (e, t, n, r) {
          let i = {};
          return (
            t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
            n && r && (i.dsn = eG(r)),
            tb(i, [
              [
                {
                  type: 'log',
                  item_count: e.length,
                  content_type: 'application/vnd.sentry.items.log+json',
                },
                { items: e },
              ],
            ])
          );
        })(r, i._metadata, i.tunnel, e.getDsn());
      (t0().set(e, []), e.emit('flushLogs'), e.sendEnvelope(a));
    }
    function t0() {
      return d('clientToLogBufferMap', () => new WeakMap());
    }
    function t1(e, t) {
      return e(t.stack || '', 1);
    }
    function t4(e, t) {
      let n = { type: t.name || t.constructor.name, value: t.message },
        r = t1(e, t);
      return (r.length && (n.stacktrace = { frames: r }), n);
    }
    class t6 extends tY {
      constructor(e) {
        if ((tr(), super(e), (this._logWeight = 0), this._options.enableLogs)) {
          let e = this;
          (e.on('flushLogs', () => {
            ((e._logWeight = 0), clearTimeout(e._logFlushIdleTimeout));
          }),
            e.on('afterCaptureLog', (t) => {
              ((e._logWeight += (function (e) {
                let t = 0;
                return (
                  e.message && (t += 2 * e.message.length),
                  e.attributes &&
                    Object.values(e.attributes).forEach((e) => {
                      Array.isArray(e)
                        ? (t += e.length * t9(e[0]))
                        : R(e)
                          ? (t += t9(e))
                          : (t += 100);
                    }),
                  t
                );
              })(t)),
                e._logWeight >= 8e5
                  ? tQ(e)
                  : (e._logFlushIdleTimeout = setTimeout(() => {
                      tQ(e);
                    }, 5e3)));
            }),
            e.on('flush', () => {
              tQ(e);
            }));
        }
      }
      eventFromException(e, t) {
        let n = (function (e, t, n, r) {
          let i = (r?.data && r.data.mechanism) || { handled: !0, type: 'generic' },
            [a, o] = (function (e, t, n, r) {
              if (D(n)) return [n, void 0];
              if (((t.synthetic = !0), C(n))) {
                let t = {
                    __serialized__: (function e(t, n = 3, r = 102400) {
                      let i = ty(t, n);
                      return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r
                        ? e(t, n - 1, r)
                        : i;
                    })(n, e?.getOptions().normalizeDepth),
                  },
                  i = (function (e) {
                    for (let t in e)
                      if (Object.prototype.hasOwnProperty.call(e, t)) {
                        let n = e[t];
                        if (n instanceof Error) return n;
                      }
                  })(n);
                if (i) return [i, t];
                let a = (function (e) {
                    if ('name' in e && 'string' == typeof e.name) {
                      let t = `'${e.name}' captured as exception`;
                      return (
                        'message' in e &&
                          'string' == typeof e.message &&
                          (t += ` with message '${e.message}'`),
                        t
                      );
                    }
                    if ('message' in e && 'string' == typeof e.message) return e.message;
                    let t = (function (e, t = 40) {
                      let n = Object.keys(Y(e));
                      n.sort();
                      let r = n[0];
                      if (!r) return '[object has no keys]';
                      if (r.length >= t) return V(r, t);
                      for (let e = n.length; e > 0; e--) {
                        let r = n.slice(0, e).join(', ');
                        if (!(r.length > t)) {
                          if (e === n.length) return r;
                          return V(r, t);
                        }
                      }
                      return '';
                    })(e);
                    if (z(e, 'ErrorEvent'))
                      return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
                    let n = (function (e) {
                      try {
                        let t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : void 0;
                      } catch {}
                    })(e);
                    return `${n && 'Object' !== n ? `'${n}'` : 'Object'} captured as exception with keys: ${t}`;
                  })(n),
                  o = r?.syntheticException || Error(a);
                return ((o.message = a), [o, t]);
              }
              let i = r?.syntheticException || Error(n);
              return ((i.message = `${n}`), [i, void 0]);
            })(e, i, n, r),
            s = { exception: { values: [t4(t, a)] } };
          return (
            o && (s.extra = o),
            !(function (e, t, n) {
              let r = (e.exception = e.exception || {}),
                i = (r.values = r.values || []),
                a = (i[0] = i[0] || {});
              (a.value || (a.value = t || ''), a.type || (a.type = n || 'Error'));
            })(s, void 0, void 0),
            et(s, i),
            { ...s, event_id: r?.event_id }
          );
        })(this, this._options.stackParser, e, t);
        return ((n.level = 'error'), tj(n));
      }
      eventFromMessage(e, t = 'info', n) {
        return tj(
          (function (e, t, n = 'info', r, i) {
            let a = { event_id: r?.event_id, level: n };
            if (i && r?.syntheticException) {
              let n = t1(e, r.syntheticException);
              n.length &&
                ((a.exception = { values: [{ value: t, stacktrace: { frames: n } }] }),
                et(a, { synthetic: !0 }));
            }
            if (Z(t)) {
              let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
              return ((a.logentry = { message: e, params: n }), a);
            }
            return ((a.message = t), a);
          })(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        );
      }
      captureException(e, t, n) {
        return (t2(t), super.captureException(e, t, n));
      }
      captureEvent(e, t, n) {
        return (
          !e.type && e.exception?.values && e.exception.values.length > 0 && t2(t),
          super.captureEvent(e, t, n)
        );
      }
      captureCheckIn(e, t, n) {
        let r = 'checkInId' in e && e.checkInId ? e.checkInId : q();
        if (!this._isEnabled())
          return (o && g.warn('SDK not enabled, will not capture check-in.'), r);
        let { release: i, environment: a, tunnel: s } = this.getOptions(),
          u = {
            check_in_id: r,
            monitor_slug: e.monitorSlug,
            status: e.status,
            release: i,
            environment: a,
          };
        ('duration' in e && (u.duration = e.duration),
          t &&
            (u.monitor_config = {
              schedule: t.schedule,
              checkin_margin: t.checkinMargin,
              max_runtime: t.maxRuntime,
              timezone: t.timezone,
              failure_issue_threshold: t.failureIssueThreshold,
              recovery_threshold: t.recoveryThreshold,
            }));
        let [l, c] = tq(this, n);
        c && (u.contexts = { trace: c });
        let d = (function (e, t, n, r, i) {
          let a = { sent_at: new Date().toISOString() };
          return (
            n?.sdk && (a.sdk = { name: n.sdk.name, version: n.sdk.version }),
            r && i && (a.dsn = eG(i)),
            t && (a.trace = t),
            tb(a, [[{ type: 'check_in' }, e]])
          );
        })(u, l, this.getSdkMetadata(), s, this.getDsn());
        return (o && g.log('Sending checkin:', e.monitorSlug, e.status), this.sendEnvelope(d), r);
      }
      _prepareEvent(e, t, n, r) {
        return (
          this._options.platform && (e.platform = e.platform || this._options.platform),
          this._options.runtime &&
            (e.contexts = { ...e.contexts, runtime: e.contexts?.runtime || this._options.runtime }),
          this._options.serverName && (e.server_name = e.server_name || this._options.serverName),
          super._prepareEvent(e, t, n, r)
        );
      }
    }
    function t2(e) {
      let t = eb().getScopeData().sdkProcessingMetadata.requestSession;
      if (t) {
        let n = e?.mechanism?.handled ?? !0;
        n && 'crashed' !== t.status ? (t.status = 'errored') : n || (t.status = 'crashed');
      }
    }
    function t9(e) {
      return 'string' == typeof e
        ? 2 * e.length
        : 'number' == typeof e
          ? 8
          : 4 * ('boolean' == typeof e);
    }
    function t3(e, t, n = () => {}) {
      var r, i, a;
      let o;
      try {
        o = e();
      } catch (e) {
        throw (t(e), n(), e);
      }
      return (
        (r = o),
        (i = t),
        (a = n),
        L(r)
          ? r.then(
              (e) => (a(), e),
              (e) => {
                throw (i(e), a(), e);
              }
            )
          : (a(), r)
      );
    }
    function t5(e, t, n) {
      let r, i;
      if (!tw(e)) return [!1];
      'function' == typeof e.tracesSampler
        ? ((r = e.tracesSampler({
            ...t,
            inheritOrSampleWith: (e) =>
              'number' == typeof t.parentSampleRate
                ? t.parentSampleRate
                : 'boolean' == typeof t.parentSampled
                  ? Number(t.parentSampled)
                  : e,
          })),
          (i = !0))
        : void 0 !== t.parentSampled
          ? (r = t.parentSampled)
          : void 0 !== e.tracesSampleRate && ((r = e.tracesSampleRate), (i = !0));
      let a = eK(r);
      if (void 0 === a)
        return (
          o &&
            g.warn(
              `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`
            ),
          [!1]
        );
      if (!a)
        return (
          o &&
            g.log(
              `[Tracing] Discarding transaction because ${'function' == typeof e.tracesSampler ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`
            ),
          [!1, a, i]
        );
      let s = n < a;
      return (
        !s &&
          o &&
          g.log(
            `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`
          ),
        [s, a, i]
      );
    }
    class t8 {
      constructor(e) {
        ((this._maxSize = e), (this._cache = new Map()));
      }
      get size() {
        return this._cache.size;
      }
      get(e) {
        let t = this._cache.get(e);
        if (void 0 !== t) return (this._cache.delete(e), this._cache.set(e, t), t);
      }
      set(e, t) {
        (this._cache.size >= this._maxSize && this._cache.delete(this._cache.keys().next().value),
          this._cache.set(e, t));
      }
      remove(e) {
        let t = this._cache.get(e);
        return (t && this._cache.delete(e), t);
      }
      clear() {
        this._cache.clear();
      }
      keys() {
        return Array.from(this._cache.keys());
      }
      values() {
        let e = [];
        return (this._cache.forEach((t) => e.push(t)), e);
      }
    }
    function t7(e) {
      if (!e || 0 === e.length) return;
      let t = {};
      return (
        e.forEach((e) => {
          let n = e.attributes || {},
            r = n['sentry.measurement_unit'],
            i = n['sentry.measurement_value'];
          'string' == typeof r && 'number' == typeof i && (t[e.name] = { value: i, unit: r });
        }),
        t
      );
    }
    async function ne(e) {
      let t = ex();
      return t
        ? t.flush(e)
        : (o && g.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
    }
    function nt(e) {
      if (!o) return;
      let {
          description: t = '< unknown name >',
          op: n = '< unknown op >',
          parent_span_id: r,
        } = e6(e),
        { spanId: i } = e.spanContext(),
        a = e2(e),
        s = e7(e),
        u = s === e,
        l = `[Tracing] Starting ${a ? 'sampled' : 'unsampled'} ${u ? 'root ' : ''}span`,
        c = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
      if ((r && c.push(`parent ID: ${r}`), !u)) {
        let { op: e, description: t } = e6(s);
        (c.push(`root ID: ${s.spanContext().spanId}`),
          e && c.push(`root op: ${e}`),
          t && c.push(`root description: ${t}`));
      }
      g.log(`${l}
  ${c.join('\n  ')}`);
    }
    function nn(e) {
      if (!o) return;
      let { description: t = '< unknown name >', op: n = '< unknown op >' } = e6(e),
        { spanId: r } = e.spanContext(),
        i = e7(e) === e,
        a = `[Tracing] Finishing "${n}" ${i ? 'root ' : ''}span "${t}" with ID ${r}`;
      g.log(a);
    }
    function nr(e, t) {
      return !!e && 'object' == typeof e && !!e[t];
    }
    function ni(e) {
      return 'string' == typeof e
        ? e
        : e
          ? nr(e, 'url')
            ? e.url
            : e.toString
              ? e.toString()
              : ''
          : '';
    }
    function na(e) {
      return '/' === e[e.length - 1] ? e.slice(0, -1) : e;
    }
    class no {
      constructor(e = {}) {
        ((this._traceId = e.traceId || q()), (this._spanId = e.spanId || es()));
      }
      spanContext() {
        return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
      }
      end(e) {}
      setAttribute(e, t) {
        return this;
      }
      setAttributes(e) {
        return this;
      }
      setStatus(e) {
        return this;
      }
      updateName(e) {
        return this;
      }
      isRecording() {
        return !1;
      }
      addEvent(e, t, n) {
        return this;
      }
      addLink(e) {
        return this;
      }
      addLinks(e) {
        return this;
      }
      recordException(e, t) {}
    }
    class ns {
      constructor(e = {}) {
        ((this._traceId = e.traceId || q()),
          (this._spanId = e.spanId || es()),
          (this._startTime = e.startTimestamp || ei()),
          (this._links = e.links),
          (this._attributes = {}),
          this.setAttributes({ [eO]: 'manual', [eE]: e.op, ...e.attributes }),
          (this._name = e.name),
          e.parentSpanId && (this._parentSpanId = e.parentSpanId),
          'sampled' in e && (this._sampled = e.sampled),
          e.endTimestamp && (this._endTime = e.endTimestamp),
          (this._events = []),
          (this._isStandaloneSpan = e.isStandalone),
          this._endTime && this._onSpanEnded());
      }
      addLink(e) {
        return (this._links ? this._links.push(e) : (this._links = [e]), this);
      }
      addLinks(e) {
        return (this._links ? this._links.push(...e) : (this._links = e), this);
      }
      recordException(e, t) {}
      spanContext() {
        let { _spanId: e, _traceId: t, _sampled: n } = this;
        return { spanId: e, traceId: t, traceFlags: +!!n };
      }
      setAttribute(e, t) {
        return (void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this);
      }
      setAttributes(e) {
        return (Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this);
      }
      updateStartTime(e) {
        this._startTime = e1(e);
      }
      setStatus(e) {
        return ((this._status = e), this);
      }
      updateName(e) {
        return ((this._name = e), this.setAttribute(ek, 'custom'), this);
      }
      end(e) {
        this._endTime || ((this._endTime = e1(e)), nn(this), this._onSpanEnded());
      }
      getSpanJSON() {
        return {
          data: this._attributes,
          description: this._name,
          op: this._attributes[eE],
          parent_span_id: this._parentSpanId,
          span_id: this._spanId,
          start_timestamp: this._startTime,
          status: e9(this._status),
          timestamp: this._endTime,
          trace_id: this._traceId,
          origin: this._attributes[eO],
          profile_id: this._attributes[eN],
          exclusive_time: this._attributes[eP],
          measurements: t7(this._events),
          is_segment: (this._isStandaloneSpan && e7(this) === this) || void 0,
          segment_id: this._isStandaloneSpan ? e7(this).spanContext().spanId : void 0,
          links: e0(this._links),
        };
      }
      isRecording() {
        return !this._endTime && !!this._sampled;
      }
      addEvent(e, t, n) {
        o && g.log('[Tracing] Adding an event to span:', e);
        let r = nu(t) ? t : n || ei(),
          i = nu(t) ? {} : t || {},
          a = { name: e, time: e1(r), attributes: i };
        return (this._events.push(a), this);
      }
      isStandaloneSpan() {
        return !!this._isStandaloneSpan;
      }
      _onSpanEnded() {
        let e = ex();
        if ((e && e.emit('spanEnd', this), !(this._isStandaloneSpan || this === e7(this)))) return;
        if (this._isStandaloneSpan)
          return void (this._sampled
            ? (function (e) {
                let t = ex();
                if (!t) return;
                let n = e[1];
                if (!n || 0 === n.length) return t.recordDroppedEvent('before_send', 'span');
                t.sendEnvelope(e);
              })(
                (function (e, t) {
                  let n = tN(e[0]),
                    r = t?.getDsn(),
                    i = t?.getOptions().tunnel,
                    a = {
                      sent_at: new Date().toISOString(),
                      ...(!!n.trace_id && !!n.public_key && { trace: n }),
                      ...(!!i && r && { dsn: eG(r) }),
                    },
                    { beforeSendSpan: o, ignoreSpans: s } = t?.getOptions() || {},
                    u = s?.length ? e.filter((e) => !tP(e6(e), s)) : e,
                    l = e.length - u.length;
                  l && t?.recordDroppedEvent('before_send', 'span', l);
                  let c = o
                      ? (e) => {
                          let t = e6(e),
                            n = o(t);
                          return n || (tt(), t);
                        }
                      : e6,
                    d = [];
                  for (let e of u) {
                    let t = c(e);
                    t && d.push([{ type: 'span' }, t]);
                  }
                  return tb(a, d);
                })([this], e)
              )
            : (o &&
                g.log(
                  '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'
                ),
              e && e.recordDroppedEvent('sample_rate', 'span')));
        let t = this._convertSpanToTransaction();
        t && (ej(this).scope || ey()).captureEvent(t);
      }
      _convertSpanToTransaction() {
        if (!nl(e6(this))) return;
        this._name ||
          (o && g.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
          (this._name = '<unlabeled transaction>'));
        let { scope: e, isolationScope: t } = ej(this),
          n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (!0 !== this._sampled) return;
        let r = (function (e) {
            let t = new Set();
            return (
              !(function e(n) {
                if (!t.has(n) && e2(n))
                  for (let r of (t.add(n), n[e3] ? Array.from(n[e3]) : [])) e(r);
              })(e),
              Array.from(t)
            );
          })(this)
            .filter((e) => {
              var t;
              return e !== this && !((t = e) instanceof ns && t.isStandaloneSpan());
            })
            .map((e) => e6(e))
            .filter(nl),
          i = this._attributes[ek];
        (delete this._attributes[eT],
          r.forEach((e) => {
            delete e.data[eT];
          }));
        let a = {
            contexts: {
              trace: (function (e) {
                let { spanId: t, traceId: n } = e.spanContext(),
                  { data: r, op: i, parent_span_id: a, status: o, origin: s, links: u } = e6(e);
                return {
                  parent_span_id: a,
                  span_id: t,
                  trace_id: n,
                  data: r,
                  op: i,
                  status: o,
                  origin: s,
                  links: u,
                };
              })(this),
            },
            spans:
              r.length > 1e3
                ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3)
                : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: 'transaction',
            sdkProcessingMetadata: {
              capturedSpanScope: e,
              capturedSpanIsolationScope: t,
              dynamicSamplingContext: tN(this),
            },
            request: n,
            ...(i && { transaction_info: { source: i } }),
          },
          s = t7(this._events);
        return (
          s &&
            Object.keys(s).length &&
            (o &&
              g.log(
                '[Measurements] Adding measurements to transaction event',
                JSON.stringify(s, void 0, 2)
              ),
            (a.measurements = s)),
          a
        );
      }
    }
    function nu(e) {
      return (e && 'number' == typeof e) || e instanceof Date || Array.isArray(e);
    }
    function nl(e) {
      return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
    }
    let nc = '__SENTRY_SUPPRESS_TRACING__';
    function nd(e, t, n) {
      let r = ex(),
        i = r?.getOptions() || {},
        { name: a = '' } = e,
        s = { spanAttributes: { ...e.attributes }, spanName: a, parentSampled: n };
      r?.emit('beforeSampling', s, { decision: !1 });
      let u = s.parentSampled ?? n,
        l = s.spanAttributes,
        c = t.getPropagationContext(),
        [d, p, f] = t.getScopeData().sdkProcessingMetadata[nc]
          ? [!1]
          : t5(
              i,
              {
                name: a,
                parentSampled: u,
                attributes: l,
                parentSampleRate: eK(c.dsc?.sample_rate),
              },
              c.sampleRand
            ),
        m = new ns({
          ...e,
          attributes: { [ek]: 'custom', [ew]: void 0 !== p && f ? p : void 0, ...l },
          sampled: d,
        });
      return (
        !d &&
          r &&
          (o &&
            g.log('[Tracing] Discarding root span because its trace was not chosen to be sampled.'),
          r.recordDroppedEvent('sample_rate', 'transaction')),
        r && r.emit('spanStart', m),
        m
      );
    }
    function np(e) {
      return e.split(',').some((e) => e.trim().startsWith(eZ));
    }
    function nf(e, t) {
      let n = ex(),
        r = eb();
      if (!n) return;
      let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = 100 } = n.getOptions();
      if (a <= 0) return;
      let o = { timestamp: er(), ...e },
        s = i ? m(() => i(o, t)) : o;
      null !== s && (n.emit && n.emit('beforeAddBreadcrumb', s, t), r.addBreadcrumb(s, a));
    }
    let nm = Symbol.for('SentryBufferFullError');
    function nh(e) {
      return parseInt(e || '', 10) || void 0;
    }
    function ng(e, t) {
      let n = x(e),
        r = x(t);
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
      for (let e = 0; e < r.length; e++) {
        let t = r[e],
          i = n[e];
        if (
          t.filename !== i.filename ||
          t.lineno !== i.lineno ||
          t.colno !== i.colno ||
          t.function !== i.function
        )
          return !1;
      }
      return !0;
    }
    function nv(e, t) {
      let n = e.fingerprint,
        r = t.fingerprint;
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r)) return !1;
      try {
        return n.join('') === r.join('');
      } catch {
        return !1;
      }
    }
    function n_(e) {
      return e.exception?.values?.[0];
    }
    let ny = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
      /^ResizeObserver loop completed with undelivered notifications.$/,
      /^Cannot redefine property: googletag$/,
      /^Can't find variable: gmo$/,
      /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
      'can\'t redefine non-configurable property "solana"',
      "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
      "Can't find variable: _AutofillCallbackHandler",
      /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
      /^Java exception was raised during method invocation$/,
    ];
    function nb(e = {}, t = {}) {
      return {
        allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
        denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
        ignoreErrors: [
          ...(e.ignoreErrors || []),
          ...(t.ignoreErrors || []),
          ...(e.disableErrorDefaults ? [] : ny),
        ],
        ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
      };
    }
    function n$(e) {
      try {
        let t = [...(e.exception?.values ?? [])]
            .reverse()
            .find((e) => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length),
          n = t?.stacktrace?.frames;
        return n
          ? (function (e = []) {
              for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (n && '<anonymous>' !== n.filename && '[native code]' !== n.filename)
                  return n.filename || null;
              }
              return null;
            })(n)
          : null;
      } catch {
        return (o && g.error(`Cannot extract url for event ${ee(e)}`), null);
      }
    }
    let nS = new WeakMap();
    function nx(e, t) {
      ((e.mechanism = e.mechanism || { type: 'generic', handled: !0 }),
        (e.mechanism = {
          ...e.mechanism,
          ...('AggregateError' === e.type && { is_exception_group: !0 }),
          exception_id: t,
        }));
    }
    function nI(e, t, n, r) {
      ((e.mechanism = e.mechanism || { type: 'generic', handled: !0 }),
        (e.mechanism = {
          ...e.mechanism,
          type: 'chained',
          source: t,
          exception_id: n,
          parent_id: r,
        }));
    }
    function nk() {
      'console' in s &&
        p.forEach(function (e) {
          e in s.console &&
            W(s.console, e, function (t) {
              return (
                (f[e] = t),
                function (...t) {
                  O('console', { args: t, level: e });
                  let n = f[e];
                  n?.apply(s.console, t);
                }
              );
            });
        });
    }
    function nw(e) {
      return 'util' in s && 'function' == typeof s.util.format
        ? s.util.format(...e)
        : (function (e, t) {
            if (!Array.isArray(e)) return '';
            let n = [];
            for (let t = 0; t < e.length; t++) {
              let r = e[t];
              try {
                F(r) ? n.push('[VueViewModel]') : n.push(String(r));
              } catch {
                n.push('[value cannot be serialized]');
              }
            }
            return n.join(' ');
          })(e, 0);
    }
    let nE = [
        'X-Client-IP',
        'X-Forwarded-For',
        'Fly-Client-IP',
        'CF-Connecting-IP',
        'Fastly-Client-Ip',
        'True-Client-Ip',
        'X-Real-IP',
        'X-Cluster-Client-IP',
        'X-Forwarded',
        'Forwarded-For',
        'Forwarded',
        'X-Vercel-Forwarded-For',
      ],
      nO = { cookies: !0, data: !0, headers: !0, query_string: !0, url: !0 },
      nT = new Map();
    function nN(e) {
      return Symbol.for(e);
    }
    var nP = new (function e(t) {
        var n = this;
        ((n._currentContext = t ? new Map(t) : new Map()),
          (n.getValue = function (e) {
            return n._currentContext.get(e);
          }),
          (n.setValue = function (t, r) {
            var i = new e(n._currentContext);
            return (i._currentContext.set(t, r), i);
          }),
          (n.deleteValue = function (t) {
            var r = new e(n._currentContext);
            return (r._currentContext.delete(t), r);
          }));
      })(),
      nU = function (e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      },
      nA = function (e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      nD = (function () {
        function e() {}
        return (
          (e.prototype.active = function () {
            return nP;
          }),
          (e.prototype.with = function (e, t, n) {
            for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
            return t.call.apply(t, nA([n], nU(r), !1));
          }),
          (e.prototype.bind = function (e, t) {
            return t;
          }),
          (e.prototype.enable = function () {
            return this;
          }),
          (e.prototype.disable = function () {
            return this;
          }),
          e
        );
      })(),
      nz = 'object' == typeof globalThis ? globalThis : 'object' == typeof self ? self : e.g,
      nj = '1.9.0',
      nZ = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
      nR = (function (e) {
        var t = new Set([e]),
          n = new Set(),
          r = e.match(nZ);
        if (!r)
          return function () {
            return !1;
          };
        var i = { major: +r[1], minor: +r[2], patch: +r[3], prerelease: r[4] };
        if (null != i.prerelease)
          return function (t) {
            return t === e;
          };
        function a(e) {
          return (n.add(e), !1);
        }
        return function (e) {
          if (t.has(e)) return !0;
          if (n.has(e)) return !1;
          var r = e.match(nZ);
          if (!r) return a(e);
          var o = { major: +r[1], minor: +r[2], patch: +r[3], prerelease: r[4] };
          if (null != o.prerelease || i.major !== o.major) return a(e);
          if (0 === i.major)
            return i.minor === o.minor && i.patch <= o.patch ? (t.add(e), !0) : a(e);
          return i.minor <= o.minor ? (t.add(e), !0) : a(e);
        };
      })(nj),
      nC = Symbol.for('opentelemetry.js.api.' + nj.split('.')[0]);
    function nL(e, t, n, r) {
      void 0 === r && (r = !1);
      var i,
        a = (nz[nC] = null != (i = nz[nC]) ? i : { version: nj });
      if (!r && a[e]) {
        var o = Error('@opentelemetry/api: Attempted duplicate registration of API: ' + e);
        return (n.error(o.stack || o.message), !1);
      }
      if (a.version !== nj) {
        var o = Error(
          '@opentelemetry/api: Registration of version v' +
            a.version +
            ' for ' +
            e +
            ' does not match previously registered API v' +
            nj
        );
        return (n.error(o.stack || o.message), !1);
      }
      return (
        (a[e] = t),
        n.debug('@opentelemetry/api: Registered a global for ' + e + ' v' + nj + '.'),
        !0
      );
    }
    function nM(e) {
      var t,
        n,
        r = null == (t = nz[nC]) ? void 0 : t.version;
      if (r && nR(r)) return null == (n = nz[nC]) ? void 0 : n[e];
    }
    function nF(e, t) {
      t.debug('@opentelemetry/api: Unregistering a global for ' + e + ' v' + nj + '.');
      var n = nz[nC];
      n && delete n[e];
    }
    var nB = function (e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      },
      nV = function (e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      nG = (function () {
        function e(e) {
          this._namespace = e.namespace || 'DiagComponentLogger';
        }
        return (
          (e.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return nJ('debug', this._namespace, e);
          }),
          (e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return nJ('error', this._namespace, e);
          }),
          (e.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return nJ('info', this._namespace, e);
          }),
          (e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return nJ('warn', this._namespace, e);
          }),
          (e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return nJ('verbose', this._namespace, e);
          }),
          e
        );
      })();
    function nJ(e, t, n) {
      var r = nM('diag');
      if (r) return (n.unshift(t), r[e].apply(r, nV([], nB(n), !1)));
    }
    !(function (e) {
      ((e[(e.NONE = 0)] = 'NONE'),
        (e[(e.ERROR = 30)] = 'ERROR'),
        (e[(e.WARN = 50)] = 'WARN'),
        (e[(e.INFO = 60)] = 'INFO'),
        (e[(e.DEBUG = 70)] = 'DEBUG'),
        (e[(e.VERBOSE = 80)] = 'VERBOSE'),
        (e[(e.ALL = 9999)] = 'ALL'));
    })(tc || (tc = {}));
    var nW = function (e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      },
      nK = function (e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      nY = (function () {
        function e() {
          function e(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              var r = nM('diag');
              if (r) return r[e].apply(r, nK([], nW(t), !1));
            };
          }
          var t = this;
          ((t.setLogger = function (e, n) {
            if ((void 0 === n && (n = { logLevel: tc.INFO }), e === t)) {
              var r,
                i,
                a,
                o = Error(
                  'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
                );
              return (t.error(null != (r = o.stack) ? r : o.message), !1);
            }
            'number' == typeof n && (n = { logLevel: n });
            var s = nM('diag'),
              u = (function (e, t) {
                function n(n, r) {
                  var i = t[n];
                  return 'function' == typeof i && e >= r ? i.bind(t) : function () {};
                }
                return (
                  e < tc.NONE ? (e = tc.NONE) : e > tc.ALL && (e = tc.ALL),
                  (t = t || {}),
                  {
                    error: n('error', tc.ERROR),
                    warn: n('warn', tc.WARN),
                    info: n('info', tc.INFO),
                    debug: n('debug', tc.DEBUG),
                    verbose: n('verbose', tc.VERBOSE),
                  }
                );
              })(null != (i = n.logLevel) ? i : tc.INFO, e);
            if (s && !n.suppressOverrideMessage) {
              var l = null != (a = Error().stack) ? a : '<failed to generate stacktrace>';
              (s.warn('Current logger will be overwritten from ' + l),
                u.warn('Current logger will overwrite one already registered from ' + l));
            }
            return nL('diag', u, t, !0);
          }),
            (t.disable = function () {
              nF('diag', t);
            }),
            (t.createComponentLogger = function (e) {
              return new nG(e);
            }),
            (t.verbose = e('verbose')),
            (t.debug = e('debug')),
            (t.info = e('info')),
            (t.warn = e('warn')),
            (t.error = e('error')));
        }
        return (
          (e.instance = function () {
            return (this._instance || (this._instance = new e()), this._instance);
          }),
          e
        );
      })(),
      nX = function (e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      },
      nH = function (e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      nq = 'context',
      nQ = new nD(),
      n0 = (function () {
        function e() {}
        return (
          (e.getInstance = function () {
            return (this._instance || (this._instance = new e()), this._instance);
          }),
          (e.prototype.setGlobalContextManager = function (e) {
            return nL(nq, e, nY.instance());
          }),
          (e.prototype.active = function () {
            return this._getContextManager().active();
          }),
          (e.prototype.with = function (e, t, n) {
            for (var r, i = [], a = 3; a < arguments.length; a++) i[a - 3] = arguments[a];
            return (r = this._getContextManager()).with.apply(r, nH([e, t, n], nX(i), !1));
          }),
          (e.prototype.bind = function (e, t) {
            return this._getContextManager().bind(e, t);
          }),
          (e.prototype._getContextManager = function () {
            return nM(nq) || nQ;
          }),
          (e.prototype.disable = function () {
            (this._getContextManager().disable(), nF(nq, nY.instance()));
          }),
          e
        );
      })(),
      n1 = n0.getInstance();
    !(function (e) {
      ((e[(e.NONE = 0)] = 'NONE'), (e[(e.SAMPLED = 1)] = 'SAMPLED'));
    })(td || (td = {}));
    var n4 = '0000000000000000',
      n6 = '00000000000000000000000000000000',
      n2 = { traceId: n6, spanId: n4, traceFlags: td.NONE },
      n9 = (function () {
        function e(e) {
          (void 0 === e && (e = n2), (this._spanContext = e));
        }
        return (
          (e.prototype.spanContext = function () {
            return this._spanContext;
          }),
          (e.prototype.setAttribute = function (e, t) {
            return this;
          }),
          (e.prototype.setAttributes = function (e) {
            return this;
          }),
          (e.prototype.addEvent = function (e, t) {
            return this;
          }),
          (e.prototype.addLink = function (e) {
            return this;
          }),
          (e.prototype.addLinks = function (e) {
            return this;
          }),
          (e.prototype.setStatus = function (e) {
            return this;
          }),
          (e.prototype.updateName = function (e) {
            return this;
          }),
          (e.prototype.end = function (e) {}),
          (e.prototype.isRecording = function () {
            return !1;
          }),
          (e.prototype.recordException = function (e, t) {}),
          e
        );
      })(),
      n3 = nN('OpenTelemetry Context Key SPAN');
    function n5(e) {
      return e.getValue(n3) || void 0;
    }
    function n8() {
      return n5(n0.getInstance().active());
    }
    function n7(e, t) {
      return e.setValue(n3, t);
    }
    function re(e) {
      return e.deleteValue(n3);
    }
    function rt(e, t) {
      return n7(e, new n9(t));
    }
    function rn(e) {
      var t;
      return null == (t = n5(e)) ? void 0 : t.spanContext();
    }
    var rr = /^([0-9a-f]{32})$/i,
      ri = /^[0-9a-f]{16}$/i;
    function ra(e) {
      return rr.test(e) && e !== n6;
    }
    function ro(e) {
      var t;
      return ra(e.traceId) && ((t = e.spanId), ri.test(t) && t !== n4);
    }
    function rs(e) {
      return new n9(e);
    }
    var ru = n0.getInstance(),
      rl = (function () {
        function e() {}
        return (
          (e.prototype.startSpan = function (e, t, n) {
            if ((void 0 === n && (n = ru.active()), null == t ? void 0 : t.root)) return new n9();
            var r,
              i = n && rn(n);
            return 'object' == typeof (r = i) &&
              'string' == typeof r.spanId &&
              'string' == typeof r.traceId &&
              'number' == typeof r.traceFlags &&
              ro(i)
              ? new n9(i)
              : new n9();
          }),
          (e.prototype.startActiveSpan = function (e, t, n, r) {
            if (!(arguments.length < 2)) {
              2 == arguments.length
                ? (o = t)
                : 3 == arguments.length
                  ? ((i = t), (o = n))
                  : ((i = t), (a = n), (o = r));
              var i,
                a,
                o,
                s = null != a ? a : ru.active(),
                u = this.startSpan(e, i, s),
                l = n7(s, u);
              return ru.with(l, o, void 0, u);
            }
          }),
          e
        );
      })(),
      rc = new rl(),
      rd = (function () {
        function e(e, t, n, r) {
          ((this._provider = e), (this.name = t), (this.version = n), (this.options = r));
        }
        return (
          (e.prototype.startSpan = function (e, t, n) {
            return this._getTracer().startSpan(e, t, n);
          }),
          (e.prototype.startActiveSpan = function (e, t, n, r) {
            var i = this._getTracer();
            return Reflect.apply(i.startActiveSpan, i, arguments);
          }),
          (e.prototype._getTracer = function () {
            if (this._delegate) return this._delegate;
            var e = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return e ? ((this._delegate = e), this._delegate) : rc;
          }),
          e
        );
      })(),
      rp = new ((function () {
        function e() {}
        return (
          (e.prototype.getTracer = function (e, t, n) {
            return new rl();
          }),
          e
        );
      })())(),
      rf = (function () {
        function e() {}
        return (
          (e.prototype.getTracer = function (e, t, n) {
            var r;
            return null != (r = this.getDelegateTracer(e, t, n)) ? r : new rd(this, e, t, n);
          }),
          (e.prototype.getDelegate = function () {
            var e;
            return null != (e = this._delegate) ? e : rp;
          }),
          (e.prototype.setDelegate = function (e) {
            this._delegate = e;
          }),
          (e.prototype.getDelegateTracer = function (e, t, n) {
            var r;
            return null == (r = this._delegate) ? void 0 : r.getTracer(e, t, n);
          }),
          e
        );
      })(),
      rm = 'trace',
      rh = (function () {
        function e() {
          ((this._proxyTracerProvider = new rf()),
            (this.wrapSpanContext = rs),
            (this.isSpanContextValid = ro),
            (this.deleteSpan = re),
            (this.getSpan = n5),
            (this.getActiveSpan = n8),
            (this.getSpanContext = rn),
            (this.setSpan = n7),
            (this.setSpanContext = rt));
        }
        return (
          (e.getInstance = function () {
            return (this._instance || (this._instance = new e()), this._instance);
          }),
          (e.prototype.setGlobalTracerProvider = function (e) {
            var t = nL(rm, this._proxyTracerProvider, nY.instance());
            return (t && this._proxyTracerProvider.setDelegate(e), t);
          }),
          (e.prototype.getTracerProvider = function () {
            return nM(rm) || this._proxyTracerProvider;
          }),
          (e.prototype.getTracer = function (e, t) {
            return this.getTracerProvider().getTracer(e, t);
          }),
          (e.prototype.disable = function () {
            (nF(rm, nY.instance()), (this._proxyTracerProvider = new rf()));
          }),
          e
        );
      })().getInstance();
    (!(function (e) {
      ((e[(e.INTERNAL = 0)] = 'INTERNAL'),
        (e[(e.SERVER = 1)] = 'SERVER'),
        (e[(e.CLIENT = 2)] = 'CLIENT'),
        (e[(e.PRODUCER = 3)] = 'PRODUCER'),
        (e[(e.CONSUMER = 4)] = 'CONSUMER'));
    })(tp || (tp = {})),
      (function (e) {
        ((e[(e.NOT_RECORD = 0)] = 'NOT_RECORD'),
          (e[(e.RECORD = 1)] = 'RECORD'),
          (e[(e.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED'));
      })(tf || (tf = {})));
    var rg = nY.instance();
    !(function (e) {
      ((e[(e.UNSET = 0)] = 'UNSET'), (e[(e.OK = 1)] = 'OK'), (e[(e.ERROR = 2)] = 'ERROR'));
    })(tm || (tm = {}));
    var rv = function (e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      },
      r_ = function (e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      },
      ry = (function () {
        function e(e) {
          this._entries = e ? new Map(e) : new Map();
        }
        return (
          (e.prototype.getEntry = function (e) {
            var t = this._entries.get(e);
            if (t) return Object.assign({}, t);
          }),
          (e.prototype.getAllEntries = function () {
            return Array.from(this._entries.entries()).map(function (e) {
              var t = rv(e, 2);
              return [t[0], t[1]];
            });
          }),
          (e.prototype.setEntry = function (t, n) {
            var r = new e(this._entries);
            return (r._entries.set(t, n), r);
          }),
          (e.prototype.removeEntry = function (t) {
            var n = new e(this._entries);
            return (n._entries.delete(t), n);
          }),
          (e.prototype.removeEntries = function () {
            for (var t, n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
            var a = new e(this._entries);
            try {
              for (var o = r_(r), s = o.next(); !s.done; s = o.next()) {
                var u = s.value;
                a._entries.delete(u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = o.return) && n.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return a;
          }),
          (e.prototype.clear = function () {
            return new e();
          }),
          e
        );
      })(),
      rb = Symbol('BaggageEntryMetadata'),
      r$ = nY.instance();
    function rS(e) {
      return (void 0 === e && (e = {}), new ry(new Map(Object.entries(e))));
    }
    var rx = (function () {
        function e() {}
        return (
          (e.prototype.inject = function (e, t) {}),
          (e.prototype.extract = function (e, t) {
            return e;
          }),
          (e.prototype.fields = function () {
            return [];
          }),
          e
        );
      })(),
      rI = {
        get: function (e, t) {
          if (null != e) return e[t];
        },
        keys: function (e) {
          return null == e ? [] : Object.keys(e);
        },
      },
      rk = {
        set: function (e, t, n) {
          null != e && (e[t] = n);
        },
      },
      rw = nN('OpenTelemetry Baggage Key');
    function rE(e) {
      return e.getValue(rw) || void 0;
    }
    function rO() {
      return rE(n0.getInstance().active());
    }
    function rT(e, t) {
      return e.setValue(rw, t);
    }
    function rN(e) {
      return e.deleteValue(rw);
    }
    var rP = 'propagation',
      rU = new rx(),
      rA = (function () {
        function e() {
          ((this.createBaggage = rS),
            (this.getBaggage = rE),
            (this.getActiveBaggage = rO),
            (this.setBaggage = rT),
            (this.deleteBaggage = rN));
        }
        return (
          (e.getInstance = function () {
            return (this._instance || (this._instance = new e()), this._instance);
          }),
          (e.prototype.setGlobalPropagator = function (e) {
            return nL(rP, e, nY.instance());
          }),
          (e.prototype.inject = function (e, t, n) {
            return (void 0 === n && (n = rk), this._getGlobalPropagator().inject(e, t, n));
          }),
          (e.prototype.extract = function (e, t, n) {
            return (void 0 === n && (n = rI), this._getGlobalPropagator().extract(e, t, n));
          }),
          (e.prototype.fields = function () {
            return this._getGlobalPropagator().fields();
          }),
          (e.prototype.disable = function () {
            nF(rP, nY.instance());
          }),
          (e.prototype._getGlobalPropagator = function () {
            return nM(rP) || rU;
          }),
          e
        );
      })().getInstance();
    let rD = 'telemetry.sdk.language',
      rz = 'telemetry.sdk.name',
      rj = 'telemetry.sdk.version',
      rZ = {
        [rz]: 'opentelemetry',
        'process.runtime.name': 'browser',
        [rD]: 'webjs',
        [rj]: '2.1.0',
      },
      rR = (e) => null !== e && 'object' == typeof e && 'function' == typeof e.then;
    class rC {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, t) {
        let n = new rC({}, t);
        return (
          (n._rawAttributes = rF(e)),
          (n._asyncAttributesPending = e.filter(([e, t]) => rR(t)).length > 0),
          n
        );
      }
      constructor(e, t) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([e, t]) => (rR(t) && (this._asyncAttributesPending = !0), [e, t])
        )),
          (this._rawAttributes = rF(this._rawAttributes)),
          (this._schemaUrl = (function (e) {
            if ('string' == typeof e || void 0 === e) return e;
            rg.warn(
              'Schema URL must be string or undefined, got %s. Schema URL will be ignored.',
              e
            );
          })(t?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [t, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [t, rR(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            rg.error('Accessing resource attributes before async attributes settled'),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [t, n] of this._rawAttributes) {
          if (rR(n)) {
            rg.debug(`Unsettled resource attribute ${t} skipped`);
            continue;
          }
          null != n && (e[t] ??= n);
        }
        return (this._asyncAttributesPending || (this._memoizedAttributes = e), e);
      }
      getRawAttributes() {
        return this._rawAttributes;
      }
      get schemaUrl() {
        return this._schemaUrl;
      }
      merge(e) {
        if (null == e) return this;
        let t = (function (e, t) {
          let n = e?.schemaUrl,
            r = t?.schemaUrl,
            i = void 0 === r || '' === r;
          return void 0 === n || '' === n
            ? r
            : i || n === r
              ? n
              : void rg.warn(
                  'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
                  n,
                  r
                );
        })(this, e);
        return rC.FromAttributeList(
          [...e.getRawAttributes(), ...this.getRawAttributes()],
          t ? { schemaUrl: t } : void 0
        );
      }
    }
    function rL(e, t) {
      return rC.FromAttributeList(Object.entries(e), t);
    }
    function rM() {
      return rL({ 'service.name': 'unknown_service', [rD]: rZ[rD], [rz]: rZ[rz], [rj]: rZ[rj] });
    }
    function rF(e) {
      return e.map(([e, t]) =>
        rR(t)
          ? [
              e,
              t.catch((t) => {
                rg.debug('promise rejection for resource attribute: %s - %s', e, t);
              }),
            ]
          : [e, t]
      );
    }
    void 0 === globalThis.performance &&
      (globalThis.performance = { timeOrigin: 0, now: () => Date.now() });
    class rB extends t6 {
      constructor(e) {
        (ti(e, 'vercel-edge'),
          (e._metadata = e._metadata || {}),
          super({
            ...e,
            platform: 'javascript',
            runtime: { name: 'vercel-edge' },
            serverName: e.serverName || process.env.SENTRY_NAME,
          }));
      }
      async flush(e) {
        let t = this.traceProvider;
        return (
          await t?.forceFlush(),
          this.getOptions().sendClientReports && this._flushOutcomes(),
          super.flush(e)
        );
      }
    }
    let rV = nN('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
    function rG(e) {
      let t = {};
      if ('object' != typeof e || null == e) return t;
      for (let [r, i] of Object.entries(e)) {
        var n;
        if (!('string' == typeof (n = r) && n.length > 0)) {
          rg.warn(`Invalid attribute key: ${r}`);
          continue;
        }
        if (!rJ(i)) {
          rg.warn(`Invalid attribute value set for key: ${r}`);
          continue;
        }
        Array.isArray(i) ? (t[r] = i.slice()) : (t[r] = i);
      }
      return t;
    }
    function rJ(e) {
      return (
        null == e ||
        (Array.isArray(e)
          ? (function (e) {
              let t;
              for (let n of e)
                if (null != n) {
                  if (!t) {
                    if (rW(n)) {
                      t = typeof n;
                      continue;
                    }
                    return !1;
                  }
                  if (typeof n !== t) return !1;
                }
              return !0;
            })(e)
          : rW(e))
      );
    }
    function rW(e) {
      switch (typeof e) {
        case 'number':
        case 'boolean':
        case 'string':
          return !0;
      }
      return !1;
    }
    function rK(e) {
      try {
        var t;
        rg.error(
          ((t = e),
          'string' == typeof t
            ? t
            : JSON.stringify(
                (function (e) {
                  let t = {},
                    n = e;
                  for (; null !== n; )
                    (Object.getOwnPropertyNames(n).forEach((e) => {
                      if (t[e]) return;
                      let r = n[e];
                      r && (t[e] = String(r));
                    }),
                      (n = Object.getPrototypeOf(n)));
                  return t;
                })(t)
              ))
        );
      } catch {}
    }
    function rY(e) {
      let t = process.env[e];
      if (null == t || '' === t.trim()) return;
      let n = Number(t);
      return isNaN(n)
        ? void rg.warn(
            `Unknown value ${JSON.stringify(t, null, 2)} for ${e}, expected a number, using defaults`
          )
        : n;
    }
    let rX = { timeOrigin: 0, now: () => Date.now() },
      rH = 'exception.type',
      rq = 'exception.message',
      rQ = 'http.method',
      r0 = 'http.url',
      r1 = 'http.status_code',
      r4 = 'http.request.method',
      r6 = 'http.response.status_code',
      r2 = 'url.full';
    function r9(e) {
      return [Math.trunc(e / 1e3), Math.round((e % 1e3) * 1e6)];
    }
    function r3() {
      return rX.timeOrigin;
    }
    function r5(e) {
      return (
        Array.isArray(e) && 2 === e.length && 'number' == typeof e[0] && 'number' == typeof e[1]
      );
    }
    function r8(e) {
      return r5(e) || 'number' == typeof e || e instanceof Date;
    }
    function r7(e, t) {
      let n = [e[0] + t[0], e[1] + t[1]];
      return (n[1] >= 1e9 && ((n[1] -= 1e9), (n[0] += 1)), n);
    }
    let ie = Function.prototype.toString,
      it = ie.call(Object),
      ir = Object.getPrototypeOf,
      ii = Object.prototype,
      ia = ii.hasOwnProperty,
      io = Symbol ? Symbol.toStringTag : void 0,
      is = ii.toString;
    function iu(e) {
      var t, n, r;
      if (
        null == (t = e) ||
        'object' != typeof t ||
        '[object Object]' !==
          (null == (n = e)
            ? void 0 === n
              ? '[object Undefined]'
              : '[object Null]'
            : io && io in Object(n)
              ? (function (e) {
                  let t = ia.call(e, io),
                    n = e[io],
                    r = !1;
                  try {
                    ((e[io] = void 0), (r = !0));
                  } catch (e) {}
                  let i = is.call(e);
                  return (r && (t ? (e[io] = n) : delete e[io]), i);
                })(n)
              : ((r = n), is.call(r)))
      )
        return !1;
      let i = ir(e);
      if (null === i) return !0;
      let a = ia.call(i, 'constructor') && i.constructor;
      return 'function' == typeof a && a instanceof a && ie.call(a) === it;
    }
    function il(e) {
      return id(e) ? e.slice() : e;
    }
    function ic(e, t, n) {
      let r = n.get(e[t]) || [];
      for (let n = 0, i = r.length; n < i; n++) {
        let i = r[n];
        if (i.key === t && i.obj === e) return !0;
      }
      return !1;
    }
    function id(e) {
      return Array.isArray(e);
    }
    function ip(e) {
      return 'function' == typeof e;
    }
    function im(e) {
      return !ih(e) && !id(e) && !ip(e) && 'object' == typeof e;
    }
    function ih(e) {
      return (
        'string' == typeof e ||
        'number' == typeof e ||
        'boolean' == typeof e ||
        void 0 === e ||
        e instanceof Date ||
        e instanceof RegExp ||
        null === e
      );
    }
    class ig {
      __init() {
        this.attributes = {};
      }
      __init2() {
        this.links = [];
      }
      __init3() {
        this.events = [];
      }
      __init4() {
        this._droppedAttributesCount = 0;
      }
      __init5() {
        this._droppedEventsCount = 0;
      }
      __init6() {
        this._droppedLinksCount = 0;
      }
      __init7() {
        this.status = { code: tm.UNSET };
      }
      __init8() {
        this.endTime = [0, 0];
      }
      __init9() {
        this._ended = !1;
      }
      __init10() {
        this._duration = [-1, -1];
      }
      constructor(e) {
        (ig.prototype.__init.call(this),
          ig.prototype.__init2.call(this),
          ig.prototype.__init3.call(this),
          ig.prototype.__init4.call(this),
          ig.prototype.__init5.call(this),
          ig.prototype.__init6.call(this),
          ig.prototype.__init7.call(this),
          ig.prototype.__init8.call(this),
          ig.prototype.__init9.call(this),
          ig.prototype.__init10.call(this));
        let t = Date.now();
        ((this._spanContext = e.spanContext),
          (this._performanceStartTime = rX.now()),
          (this._performanceOffset = t - (this._performanceStartTime + r3())),
          (this._startTimeProvided = null != e.startTime),
          (this._spanLimits = e.spanLimits),
          (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0),
          (this._spanProcessor = e.spanProcessor),
          (this.name = e.name),
          (this.parentSpanContext = e.parentSpanContext),
          (this.kind = e.kind),
          (this.links = e.links || []),
          (this.startTime = this._getTime(e.startTime ?? t)),
          (this.resource = e.resource),
          (this.instrumentationScope = e.scope),
          null != e.attributes && this.setAttributes(e.attributes),
          this._spanProcessor.onStart(this, e.context));
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e, t) {
        if (null == t || this._isSpanEnded()) return this;
        if (0 === e.length) return (rg.warn(`Invalid attribute key: ${e}`), this);
        if (!rJ(t)) return (rg.warn(`Invalid attribute value set for key: ${e}`), this);
        let { attributeCountLimit: n } = this._spanLimits;
        return (
          void 0 !== n &&
          Object.keys(this.attributes).length >= n &&
          !Object.prototype.hasOwnProperty.call(this.attributes, e)
            ? this._droppedAttributesCount++
            : (this.attributes[e] = this._truncateToSize(t)),
          this
        );
      }
      setAttributes(e) {
        for (let [t, n] of Object.entries(e)) this.setAttribute(t, n);
        return this;
      }
      addEvent(e, t, n) {
        if (this._isSpanEnded()) return this;
        let { eventCountLimit: r } = this._spanLimits;
        if (0 === r) return (rg.warn('No events allowed.'), this._droppedEventsCount++, this);
        (void 0 !== r &&
          this.events.length >= r &&
          (0 === this._droppedEventsCount && rg.debug('Dropping extra events.'),
          this.events.shift(),
          this._droppedEventsCount++),
          r8(t) && (r8(n) || (n = t), (t = void 0)));
        let i = rG(t);
        return (
          this.events.push({
            name: e,
            attributes: i,
            time: this._getTime(n),
            droppedAttributesCount: 0,
          }),
          this
        );
      }
      addLink(e) {
        return (this.links.push(e), this);
      }
      addLinks(e) {
        return (this.links.push(...e), this);
      }
      setStatus(e) {
        return (
          this._isSpanEnded() ||
            ((this.status = { ...e }),
            null != this.status.message &&
              'string' != typeof e.message &&
              (rg.warn(
                `Dropping invalid status.message of type '${typeof e.message}', expected 'string'`
              ),
              delete this.status.message)),
          this
        );
      }
      updateName(e) {
        return (this._isSpanEnded() || (this.name = e), this);
      }
      end(e) {
        var t, n;
        let r, i;
        if (this._isSpanEnded())
          return void rg.error(
            `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`
          );
        ((this._ended = !0),
          (this.endTime = this._getTime(e)),
          (this._duration =
            ((t = this.startTime),
            (r = (n = this.endTime)[0] - t[0]),
            (i = n[1] - t[1]) < 0 && ((r -= 1), (i += 1e9)),
            [r, i])),
          this._duration[0] < 0 &&
            (rg.warn(
              'Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.',
              this.startTime,
              this.endTime
            ),
            (this.endTime = this.startTime.slice()),
            (this._duration = [0, 0])),
          this._droppedEventsCount > 0 &&
            rg.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
          this._spanProcessor.onEnd(this));
      }
      _getTime(e) {
        if ('number' == typeof e && e <= rX.now()) {
          var t = e + this._performanceOffset;
          return r7(r9(r3()), r9('number' == typeof t ? t : rX.now()));
        }
        if ('number' == typeof e) return r9(e);
        if (e instanceof Date) return r9(e.getTime());
        if (r5(e)) return e;
        if (this._startTimeProvided) return r9(Date.now());
        let n = rX.now() - this._performanceStartTime;
        return r7(this.startTime, r9(n));
      }
      isRecording() {
        return !1 === this._ended;
      }
      recordException(e, t) {
        let n = {};
        ('string' == typeof e
          ? (n[rq] = e)
          : e &&
            (e.code ? (n[rH] = e.code.toString()) : e.name && (n[rH] = e.name),
            e.message && (n[rq] = e.message),
            e.stack && (n['exception.stacktrace'] = e.stack)),
          n[rH] || n[rq]
            ? this.addEvent('exception', n, t)
            : rg.warn(`Failed to record an exception ${e}`));
      }
      get duration() {
        return this._duration;
      }
      get ended() {
        return this._ended;
      }
      get droppedAttributesCount() {
        return this._droppedAttributesCount;
      }
      get droppedEventsCount() {
        return this._droppedEventsCount;
      }
      get droppedLinksCount() {
        return this._droppedLinksCount;
      }
      _isSpanEnded() {
        if (this._ended) {
          let e = Error(
            `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`
          );
          rg.warn(
            `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
            e
          );
        }
        return this._ended;
      }
      _truncateToLimitUtil(e, t) {
        return e.length <= t ? e : e.substring(0, t);
      }
      _truncateToSize(e) {
        let t = this._attributeValueLengthLimit;
        return t <= 0
          ? (rg.warn(`Attribute value limit must be positive, got ${t}`), e)
          : 'string' == typeof e
            ? this._truncateToLimitUtil(e, t)
            : Array.isArray(e)
              ? e.map((e) => ('string' == typeof e ? this._truncateToLimitUtil(e, t) : e))
              : e;
      }
    }
    !(function (e) {
      ((e[(e.NOT_RECORD = 0)] = 'NOT_RECORD'),
        (e[(e.RECORD = 1)] = 'RECORD'),
        (e[(e.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED'));
    })(th || (th = {}));
    class iv {
      shouldSample() {
        return { decision: th.NOT_RECORD };
      }
      toString() {
        return 'AlwaysOffSampler';
      }
    }
    class i_ {
      shouldSample() {
        return { decision: th.RECORD_AND_SAMPLED };
      }
      toString() {
        return 'AlwaysOnSampler';
      }
    }
    class iy {
      constructor(e) {
        ((this._root = e.root),
          this._root ||
            (rK(Error('ParentBasedSampler must have a root sampler configured')),
            (this._root = new i_())),
          (this._remoteParentSampled = e.remoteParentSampled ?? new i_()),
          (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new iv()),
          (this._localParentSampled = e.localParentSampled ?? new i_()),
          (this._localParentNotSampled = e.localParentNotSampled ?? new iv()));
      }
      shouldSample(e, t, n, r, i, a) {
        let o = rh.getSpanContext(e);
        return o && ro(o)
          ? o.isRemote
            ? o.traceFlags & td.SAMPLED
              ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a)
              : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a)
            : o.traceFlags & td.SAMPLED
              ? this._localParentSampled.shouldSample(e, t, n, r, i, a)
              : this._localParentNotSampled.shouldSample(e, t, n, r, i, a)
          : this._root.shouldSample(e, t, n, r, i, a);
      }
      toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
      }
    }
    class ib {
      constructor(e = 0) {
        ((this._ratio = e),
          (this._ratio = this._normalize(e)),
          (this._upperBound = Math.floor(0xffffffff * this._ratio)));
      }
      shouldSample(e, t) {
        return {
          decision:
            ra(t) && this._accumulate(t) < this._upperBound ? th.RECORD_AND_SAMPLED : th.NOT_RECORD,
        };
      }
      toString() {
        return `TraceIdRatioBased{${this._ratio}}`;
      }
      _normalize(e) {
        return 'number' != typeof e || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
      }
      _accumulate(e) {
        let t = 0;
        for (let n = 0; n < e.length / 8; n++) {
          let r = 8 * n;
          t = (t ^ parseInt(e.slice(r, r + 8), 16)) >>> 0;
        }
        return t;
      }
    }
    function i$() {
      return {
        sampler: iS(),
        forceFlushTimeoutMillis: 3e4,
        generalLimits: {
          attributeValueLengthLimit: rY('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? 1 / 0,
          attributeCountLimit: rY('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128,
        },
        spanLimits: {
          attributeValueLengthLimit: rY('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? 1 / 0,
          attributeCountLimit: rY('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
          linkCountLimit: rY('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
          eventCountLimit: rY('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
          attributePerEventCountLimit: rY('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
          attributePerLinkCountLimit: rY('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128,
        },
      };
    }
    function iS() {
      let e =
        (function (e) {
          let t = process.env[e];
          if (null != t && '' !== t.trim()) return t;
        })('OTEL_TRACES_SAMPLER') ?? 'parentbased_always_on';
      switch (e) {
        case 'always_on':
          return new i_();
        case 'always_off':
          return new iv();
        case 'parentbased_always_on':
          return new iy({ root: new i_() });
        case 'parentbased_always_off':
          return new iy({ root: new iv() });
        case 'traceidratio':
          return new ib(ix());
        case 'parentbased_traceidratio':
          return new iy({ root: new ib(ix()) });
        default:
          return (
            rg.error(
              `OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "parentbased_always_on".`
            ),
            new iy({ root: new i_() })
          );
      }
    }
    function ix() {
      let e = rY('OTEL_TRACES_SAMPLER_ARG');
      return null == e
        ? (rg.error('OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1.'), 1)
        : e < 0 || e > 1
          ? (rg.error(
              `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to 1.`
            ),
            1)
          : e;
    }
    let iI = 1 / 0;
    class ik {
      constructor() {
        (ik.prototype.__init.call(this), ik.prototype.__init2.call(this));
      }
      __init() {
        this.generateTraceId = iE(16);
      }
      __init2() {
        this.generateSpanId = iE(8);
      }
    }
    let iw = t_.Buffer.allocUnsafe(16);
    function iE(e) {
      return function () {
        for (let t = 0; t < e / 4; t++)
          iw.writeUInt32BE((0x100000000 * Math.random()) >>> 0, 4 * t);
        for (let t = 0; t < e; t++)
          if (iw[t] > 0) break;
          else t === e - 1 && (iw[e - 1] = 1);
        return iw.toString('hex', 0, e);
      };
    }
    class iO {
      constructor(e, t, n, r) {
        let i = (function (e) {
          let t = { sampler: iS() },
            n = i$(),
            r = Object.assign({}, n, t, e);
          return (
            (r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {})),
            (r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
            r
          );
        })(t);
        ((this._sampler = i.sampler),
          (this._generalLimits = i.generalLimits),
          (this._spanLimits = i.spanLimits),
          (this._idGenerator = t.idGenerator || new ik()),
          (this._resource = n),
          (this._spanProcessor = r),
          (this.instrumentationScope = e));
      }
      startSpan(e, t = {}, n = n1.active()) {
        let r, i, a;
        t.root && (n = rh.deleteSpan(n));
        let o = rh.getSpan(n);
        if (!0 === n.getValue(rV))
          return (
            rg.debug('Instrumentation suppressed, returning Noop Span'),
            rh.wrapSpanContext(n2)
          );
        let s = o?.spanContext(),
          u = this._idGenerator.generateSpanId();
        s && rh.isSpanContextValid(s)
          ? ((i = s.traceId), (a = s.traceState), (r = s))
          : (i = this._idGenerator.generateTraceId());
        let l = t.kind ?? tp.INTERNAL,
          c = (t.links ?? []).map((e) => ({ context: e.context, attributes: rG(e.attributes) })),
          d = rG(t.attributes),
          p = this._sampler.shouldSample(n, i, e, l, d, c);
        a = p.traceState ?? a;
        let f = {
          traceId: i,
          spanId: u,
          traceFlags: p.decision === tf.RECORD_AND_SAMPLED ? td.SAMPLED : td.NONE,
          traceState: a,
        };
        if (p.decision === tf.NOT_RECORD)
          return (
            rg.debug('Recording is off, propagating context in a non-recording span'),
            rh.wrapSpanContext(f)
          );
        let m = rG(Object.assign(d, p.attributes));
        return new ig({
          resource: this._resource,
          scope: this.instrumentationScope,
          context: n,
          spanContext: f,
          name: e,
          kind: l,
          links: c,
          parentSpanContext: r,
          attributes: m,
          startTime: t.startTime,
          spanProcessor: this._spanProcessor,
          spanLimits: this._spanLimits,
        });
      }
      startActiveSpan(e, t, n, r) {
        let i, a, o;
        if (arguments.length < 2) return;
        2 == arguments.length
          ? (o = t)
          : 3 == arguments.length
            ? ((i = t), (o = n))
            : ((i = t), (a = n), (o = r));
        let s = a ?? n1.active(),
          u = this.startSpan(e, i, s),
          l = rh.setSpan(s, u);
        return n1.with(l, o, void 0, u);
      }
      getGeneralLimits() {
        return this._generalLimits;
      }
      getSpanLimits() {
        return this._spanLimits;
      }
    }
    class iT {
      constructor(e) {
        this._spanProcessors = e;
      }
      forceFlush() {
        let e = [];
        for (let t of this._spanProcessors) e.push(t.forceFlush());
        return new Promise((t) => {
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch((e) => {
              (rK(e || Error('MultiSpanProcessor: forceFlush failed')), t());
            });
        });
      }
      onStart(e, t) {
        for (let n of this._spanProcessors) n.onStart(e, t);
      }
      onEnd(e) {
        for (let t of this._spanProcessors) t.onEnd(e);
      }
      shutdown() {
        let e = [];
        for (let t of this._spanProcessors) e.push(t.shutdown());
        return new Promise((t, n) => {
          Promise.all(e).then(() => {
            t();
          }, n);
        });
      }
    }
    !(function (e) {
      ((e[(e.resolved = 0)] = 'resolved'),
        (e[(e.timeout = 1)] = 'timeout'),
        (e[(e.error = 2)] = 'error'),
        (e[(e.unresolved = 3)] = 'unresolved'));
    })(tg || (tg = {}));
    class iN {
      __init() {
        this._tracers = new Map();
      }
      constructor(e = {}) {
        iN.prototype.__init.call(this);
        let t = (function (...e) {
          let t = e.shift(),
            n = new WeakMap();
          for (; e.length > 0; )
            t = (function e(t, n, r = 0, i) {
              let a;
              if (!(r > 20)) {
                if ((r++, ih(t) || ih(n) || ip(n))) a = il(n);
                else if (id(t)) {
                  if (((a = t.slice()), id(n)))
                    for (let e = 0, t = n.length; e < t; e++) a.push(il(n[e]));
                  else if (im(n)) {
                    let e = Object.keys(n);
                    for (let t = 0, r = e.length; t < r; t++) {
                      let r = e[t];
                      a[r] = il(n[r]);
                    }
                  }
                } else if (im(t))
                  if (im(n)) {
                    var o, s;
                    if (((o = t), (s = n), !(iu(o) && iu(s)))) return n;
                    a = Object.assign({}, t);
                    let u = Object.keys(n);
                    for (let o = 0, s = u.length; o < s; o++) {
                      let s = u[o],
                        l = n[s];
                      if (ih(l)) void 0 === l ? delete a[s] : (a[s] = l);
                      else {
                        let o = a[s];
                        if (ic(t, s, i) || ic(n, s, i)) delete a[s];
                        else {
                          if (im(o) && im(l)) {
                            let e = i.get(o) || [],
                              r = i.get(l) || [];
                            (e.push({ obj: t, key: s }),
                              r.push({ obj: n, key: s }),
                              i.set(o, e),
                              i.set(l, r));
                          }
                          a[s] = e(a[s], l, r, i);
                        }
                      }
                    }
                  } else a = n;
                return a;
              }
            })(t, e.shift(), 0, n);
          return t;
        })(
          {},
          i$(),
          (function (e) {
            let t = Object.assign({}, e.spanLimits);
            return (
              (t.attributeCountLimit =
                e.spanLimits?.attributeCountLimit ??
                e.generalLimits?.attributeCountLimit ??
                rY('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ??
                rY('OTEL_ATTRIBUTE_COUNT_LIMIT') ??
                128),
              (t.attributeValueLengthLimit =
                e.spanLimits?.attributeValueLengthLimit ??
                e.generalLimits?.attributeValueLengthLimit ??
                rY('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
                rY('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
                iI),
              Object.assign({}, e, { spanLimits: t })
            );
          })(e)
        );
        ((this._resource = t.resource ?? rM()),
          (this._config = Object.assign({}, t, { resource: this._resource })));
        let n = [];
        (e.spanProcessors?.length && n.push(...e.spanProcessors),
          (this._activeSpanProcessor = new iT(n)));
      }
      getTracer(e, t, n) {
        let r = `${e}@${t || ''}:${n?.schemaUrl || ''}`;
        return (
          this._tracers.has(r) ||
            this._tracers.set(
              r,
              new iO(
                { name: e, version: t, schemaUrl: n?.schemaUrl },
                this._config,
                this._resource,
                this._activeSpanProcessor
              )
            ),
          this._tracers.get(r)
        );
      }
      forceFlush() {
        let e = this._config.forceFlushTimeoutMillis,
          t = this._activeSpanProcessor._spanProcessors.map(
            (t) =>
              new Promise((n) => {
                let r,
                  i = setTimeout(() => {
                    (n(Error(`Span processor did not completed within timeout period of ${e} ms`)),
                      (r = tg.timeout));
                  }, e);
                t.forceFlush()
                  .then(() => {
                    (clearTimeout(i), r !== tg.timeout && n((r = tg.resolved)));
                  })
                  .catch((e) => {
                    (clearTimeout(i), (r = tg.error), n(e));
                  });
              })
          );
        return new Promise((e, n) => {
          Promise.all(t)
            .then((t) => {
              let r = t.filter((e) => e !== tg.resolved);
              r.length > 0 ? n(r) : e();
            })
            .catch((e) => n([e]));
        });
      }
      shutdown() {
        return this._activeSpanProcessor.shutdown();
      }
    }
    let iP = nN('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
    function iU(e) {
      return e.setValue(iP, !0);
    }
    function iA(e) {
      return !0 === e.getValue(iP);
    }
    let iD = 'baggage';
    class iz {
      inject(e, t, n) {
        let r = rA.getBaggage(e);
        if (!r || iA(e)) return;
        let i = r
          .getAllEntries()
          .map(([e, t]) => {
            let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
            return (void 0 !== t.metadata && (n += ';' + t.metadata.toString()), n);
          })
          .filter((e) => e.length <= 4096)
          .slice(0, 180)
          .reduce((e, t) => {
            let n = `${e}${'' !== e ? ',' : ''}${t}`;
            return n.length > 8192 ? e : n;
          }, '');
        i.length > 0 && n.set(t, iD, i);
      }
      extract(e, t, n) {
        let r = n.get(t, iD),
          i = Array.isArray(r) ? r.join(',') : r;
        if (!i) return e;
        let a = {};
        return 0 === i.length ||
          (i.split(',').forEach((e) => {
            let t = (function (e) {
              var t;
              let n,
                r = e.split(';');
              if (r.length <= 0) return;
              let i = r.shift();
              if (!i) return;
              let a = i.indexOf('=');
              if (a <= 0) return;
              let o = decodeURIComponent(i.substring(0, a).trim()),
                s = decodeURIComponent(i.substring(a + 1).trim());
              return (
                r.length > 0 &&
                  ('string' != typeof (t = r.join(';')) &&
                    (r$.error('Cannot create baggage metadata from unknown type: ' + typeof t),
                    (t = '')),
                  (n = {
                    __TYPE__: rb,
                    toString: function () {
                      return t;
                    },
                  })),
                { key: o, value: s, metadata: n }
              );
            })(e);
            if (t) {
              let e = { value: t.value };
              (t.metadata && (e.metadata = t.metadata), (a[t.key] = e));
            }
          }),
          0 === Object.entries(a).length)
          ? e
          : rA.setBaggage(e, rA.createBaggage(a));
      }
      fields() {
        return [iD];
      }
    }
    let ij = '[_0-9a-z-*/]',
      iZ = `[a-z]${ij}{0,255}`,
      iR = `[a-z0-9]${ij}{0,240}@[a-z]${ij}{0,13}`,
      iC = RegExp(`^(?:${iZ}|${iR})$`),
      iL = /^[ -~]{0,255}[!-~]$/,
      iM = /,|=/;
    class iF {
      __init() {
        this._internalState = new Map();
      }
      constructor(e) {
        (iF.prototype.__init.call(this), e && this._parse(e));
      }
      set(e, t) {
        let n = this._clone();
        return (
          n._internalState.has(e) && n._internalState.delete(e),
          n._internalState.set(e, t),
          n
        );
      }
      unset(e) {
        let t = this._clone();
        return (t._internalState.delete(e), t);
      }
      get(e) {
        return this._internalState.get(e);
      }
      serialize() {
        return this._keys()
          .reduce((e, t) => (e.push(t + '=' + this.get(t)), e), [])
          .join(',');
      }
      _parse(e) {
        !(e.length > 512) &&
          ((this._internalState = e
            .split(',')
            .reverse()
            .reduce((e, t) => {
              let n = t.trim(),
                r = n.indexOf('=');
              if (-1 !== r) {
                let i = n.slice(0, r),
                  a = n.slice(r + 1, t.length);
                iC.test(i) && iL.test(a) && !iM.test(a) && e.set(i, a);
              }
              return e;
            }, new Map())),
          this._internalState.size > 32 &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, 32)
            )));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        let e = new iF();
        return ((e._internalState = new Map(this._internalState)), e);
      }
    }
    let iB = 'sentry.parentIsRemote';
    function iV(e) {
      return 'parentSpanId' in e
        ? e.parentSpanId
        : 'parentSpanContext' in e
          ? e.parentSpanContext?.spanId
          : void 0;
    }
    function iG(e) {
      return !!e.attributes && 'object' == typeof e.attributes;
    }
    let iJ = 'sentry-trace',
      iW = 'baggage',
      iK = 'sentry.dsc',
      iY = 'sentry.sampled_not_recording',
      iX = 'sentry.url',
      iH = nN('sentry_scopes'),
      iq = nN('sentry_fork_isolation_scope'),
      iQ = nN('sentry_fork_set_scope'),
      i0 = nN('sentry_fork_set_isolation_scope'),
      i1 = '_scopeContext';
    function i4(e) {
      return e.getValue(iH);
    }
    function i6(e, t) {
      return e.setValue(iH, t);
    }
    function i2(e) {
      let { traceFlags: t, traceState: n } = e,
        r = !!n && '1' === n.get(iY);
      if (t === td.SAMPLED) return !0;
      if (r) return !1;
      let i = n ? n.get(iK) : void 0,
        a = i ? eC(i) : void 0;
      return a?.sampled === 'true' || (a?.sampled !== 'false' && void 0);
    }
    function i9(e, t, n) {
      let r = t[r4] || t[rQ];
      if (r)
        return (function ({ name: e, kind: t, attributes: n }, r) {
          let i = ['http'];
          switch (t) {
            case tp.CLIENT:
              i.push('client');
              break;
            case tp.SERVER:
              i.push('server');
          }
          n['sentry.http.prefetch'] && i.push('prefetch');
          let {
            urlPath: a,
            url: o,
            query: s,
            fragment: u,
            hasRoute: l,
          } = (function (e, t) {
            let n = e['http.target'],
              r = e[r0] || e[r2],
              i = e['http.route'],
              a = 'string' == typeof r ? ts(r) : void 0,
              o = a ? tl(a) : void 0,
              s = a?.search || void 0,
              u = a?.hash || void 0;
            return 'string' == typeof i
              ? { urlPath: i, url: o, query: s, fragment: u, hasRoute: !0 }
              : t === tp.SERVER && 'string' == typeof n
                ? { urlPath: tu(n), url: o, query: s, fragment: u, hasRoute: !1 }
                : a
                  ? { urlPath: o, url: o, query: s, fragment: u, hasRoute: !1 }
                  : 'string' == typeof n
                    ? { urlPath: tu(n), url: o, query: s, fragment: u, hasRoute: !1 }
                    : { urlPath: void 0, url: o, query: s, fragment: u, hasRoute: !1 };
          })(n, t);
          if (!a) return { ...i5(e, n), op: i.join('.') };
          let c = n['sentry.graphql.operation'],
            d = `${r} ${a}`,
            p = c
              ? `${d} (${(function (e) {
                  if (Array.isArray(e)) {
                    let t = e.slice().sort();
                    return t.length <= 5
                      ? t.join(', ')
                      : `${t.slice(0, 5).join(', ')}, +${t.length - 5}`;
                  }
                  return `${e}`;
                })(c)})`
              : d,
            f = {};
          (o && (f.url = o), s && (f['http.query'] = s), u && (f['http.fragment'] = u));
          let m = t === tp.CLIENT || t === tp.SERVER,
            h = n[eO] || 'manual',
            g = !`${h}`.startsWith('auto'),
            v = 'custom' === n[ek],
            _ = n[eT],
            { description: y, source: b } =
              v || null != _ || (!m && g)
                ? i5(e, n)
                : { description: p, source: l || '/' === a ? 'route' : 'url' };
          return { op: i.join('.'), description: y, source: b, data: f };
        })({ attributes: t, name: e, kind: n }, r);
      let i = t['db.system'],
        a = 'string' == typeof t[eE] && t[eE].startsWith('cache.');
      if (i && !a)
        return (function ({ attributes: e, name: t }) {
          let n = e[eT];
          if ('string' == typeof n) return { op: 'db', description: n, source: e[ek] || 'custom' };
          if ('custom' === e[ek]) return { op: 'db', description: t, source: 'custom' };
          let r = e['db.statement'];
          return { op: 'db', description: r ? r.toString() : t, source: 'task' };
        })({ attributes: t, name: e });
      let o = 'custom' === t[ek] ? 'custom' : 'route';
      if (t['rpc.service']) return { ...i5(e, t, 'route'), op: 'rpc' };
      if (t['messaging.system']) return { ...i5(e, t, o), op: 'message' };
      let s = t['faas.trigger'];
      return s
        ? { ...i5(e, t, o), op: s.toString() }
        : { op: void 0, description: e, source: 'custom' };
    }
    function i3(e) {
      let t = iG(e) ? e.attributes : {};
      return i9(e.name ? e.name : '<unknown>', t, 'number' == typeof e.kind ? e.kind : tp.INTERNAL);
    }
    function i5(e, t, n = 'custom') {
      let r = t[ek] || n,
        i = t[eT];
      return i && 'string' == typeof i
        ? { description: i, source: r }
        : { description: e, source: r };
    }
    function i8() {
      return rh.getActiveSpan();
    }
    let i7 = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    function ae({ dsc: e, sampled: t }) {
      let n = e ? eL(e) : void 0,
        r = new iF(),
        i = n ? r.set(iK, n) : r;
      return !1 === t ? i.set(iY, '1') : i;
    }
    let at = new Set();
    function an(e) {
      at.add(e);
    }
    class ar extends iz {
      constructor() {
        (super(), an('SentryPropagator'), (this._urlMatchesTargetsMap = new t8(100)));
      }
      inject(e, t, n) {
        if (iA(e)) {
          i7 && g.log('[Tracing] Not injecting trace data for url because tracing is suppressed.');
          return;
        }
        let r = rh.getSpan(e),
          i =
            r &&
            (function (e) {
              let t = e6(e).data,
                n = t[r0] || t[r2];
              if ('string' == typeof n) return n;
              let r = e.spanContext().traceState?.get(iX);
              if (r) return r;
            })(r);
        if (
          !(function (e, t, n) {
            if ('string' != typeof e || !t) return !0;
            let r = n?.get(e);
            if (void 0 !== r) return (i7 && !r && g.log(ai, e), r);
            let i = J(e, t);
            return (n?.set(e, i), i7 && !i && g.log(ai, e), i);
          })(i, ex()?.getOptions()?.tracePropagationTargets, this._urlMatchesTargetsMap)
        ) {
          i7 &&
            g.log(
              '[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:',
              i
            );
          return;
        }
        let a = (function (e) {
            try {
              let t = e[iW];
              return Array.isArray(t) ? t.join(',') : t;
            } catch {
              return;
            }
          })(t),
          o = rA.getBaggage(e) || rA.createBaggage({}),
          { dynamicSamplingContext: s, traceId: u, spanId: l, sampled: c } = aa(e);
        if (a) {
          let e = eM(a);
          e &&
            Object.entries(e).forEach(([e, t]) => {
              o = o.setEntry(e, { value: t });
            });
        }
        (s &&
          (o = Object.entries(s).reduce(
            (e, [t, n]) => (n ? e.setEntry(`${eZ}${t}`, { value: n }) : e),
            o
          )),
          u && u !== n6 && n.set(t, iJ, eH(u, l, c)),
          super.inject(rA.setBaggage(e, o), t, n));
      }
      extract(e, t, n) {
        let r = n.get(t, iJ),
          i = n.get(t, iW);
        return as(ao(e, { sentryTrace: r ? (Array.isArray(r) ? r[0] : r) : void 0, baggage: i }));
      }
      fields() {
        return [iJ, iW];
      }
    }
    let ai =
      '[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:';
    function aa(e, t = {}) {
      let n = rh.getSpan(e);
      if (n?.spanContext().isRemote) {
        let e = n.spanContext();
        return {
          dynamicSamplingContext: tN(n),
          traceId: e.traceId,
          spanId: void 0,
          sampled: i2(e),
        };
      }
      if (n) {
        let e = n.spanContext();
        return {
          dynamicSamplingContext: tN(n),
          traceId: e.traceId,
          spanId: e.spanId,
          sampled: i2(e),
        };
      }
      let r = t.scope || i4(e)?.scope || ey(),
        i = t.client || ex(),
        a = r.getPropagationContext();
      return {
        dynamicSamplingContext: i ? tT(i, r) : void 0,
        traceId: a.traceId,
        spanId: a.propagationSpanId,
        sampled: a.sampled,
      };
    }
    function ao(e, { sentryTrace: t, baggage: n }) {
      let {
          traceId: r,
          parentSpanId: i,
          sampled: a,
          dsc: o,
        } = (function (e, t) {
          let n = eX(e),
            r = eC(t);
          if (!n?.traceId) return { traceId: q(), sampleRand: Math.random() };
          let i = (function (e, t) {
            let n = eK(t?.sample_rand);
            if (void 0 !== n) return n;
            let r = eK(t?.sample_rate);
            return r && e?.parentSampled !== void 0
              ? e.parentSampled
                ? Math.random() * r
                : r + Math.random() * (1 - r)
              : Math.random();
          })(n, r);
          r && (r.sample_rand = i.toString());
          let { traceId: a, parentSpanId: o, parentSampled: s } = n;
          return { traceId: a, parentSpanId: o, sampled: s, dsc: r || {}, sampleRand: i };
        })(t, n),
        s = ex(),
        u = eC(n);
      if (
        !i ||
        (s &&
          !(function (e, t) {
            let n = eW(e);
            return t && n && t !== n
              ? (g.log(
                  `Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`
                ),
                !1)
              : !e.getOptions().strictTraceContinuation ||
                  ((!t || !!n) && (!!t || !n)) ||
                  (g.log(
                    `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`
                  ),
                  !1);
          })(s, u?.org_id))
      )
        return e;
      let l = (function ({ spanId: e, traceId: t, sampled: n, dsc: r }) {
        let i = ae({ dsc: r, sampled: n });
        return {
          traceId: t,
          spanId: e,
          isRemote: !0,
          traceFlags: n ? td.SAMPLED : td.NONE,
          traceState: i,
        };
      })({ traceId: r, spanId: i, sampled: a, dsc: o });
      return rh.setSpanContext(e, l);
    }
    function as(e) {
      let t = i4(e);
      return i6(e, {
        scope: t ? t.scope : ey().clone(),
        isolationScope: t ? t.isolationScope : eb(),
      });
    }
    function au(e, t) {
      let n = ap(),
        { name: r, parentSpan: i } = e;
      return ag(i)(() => {
        let i = am(e.scope, e.forceTransaction),
          a = e.onlyIfParent && !rh.getSpan(i) ? iU(i) : i,
          o = af(e);
        return n.startActiveSpan(r, o, a, (e) =>
          t3(
            () => t(e),
            () => {
              void 0 === e6(e).status && e.setStatus({ code: tm.ERROR });
            },
            () => e.end()
          )
        );
      });
    }
    function al(e, t) {
      let n = ap(),
        { name: r, parentSpan: i } = e;
      return ag(i)(() => {
        let i = am(e.scope, e.forceTransaction),
          a = e.onlyIfParent && !rh.getSpan(i) ? iU(i) : i,
          o = af(e);
        return n.startActiveSpan(r, o, a, (e) =>
          t3(
            () => t(e, () => e.end()),
            () => {
              void 0 === e6(e).status && e.setStatus({ code: tm.ERROR });
            }
          )
        );
      });
    }
    function ac(e) {
      let t = ap(),
        { name: n, parentSpan: r } = e;
      return ag(r)(() => {
        let r = am(e.scope, e.forceTransaction),
          i = e.onlyIfParent && !rh.getSpan(r) ? iU(r) : r,
          a = af(e);
        return t.startSpan(n, a, i);
      });
    }
    function ad(e, t) {
      let n = e ? rh.setSpan(n1.active(), e) : rh.deleteSpan(n1.active());
      return n1.with(n, () => t(ey()));
    }
    function ap() {
      let e = ex();
      return e?.tracer || rh.getTracer('@sentry/opentelemetry', u);
    }
    function af(e) {
      var t;
      let { startTime: n, attributes: r, kind: i, op: a, links: o } = e,
        s = 'number' == typeof n ? ((t = n) < 0x2540be3ff ? 1e3 * t : t) : n;
      return { attributes: a ? { [eE]: a, ...r } : r, kind: i, links: o, startTime: s };
    }
    function am(e, t) {
      let n = (function (e) {
          if (e) {
            let t = e[i1];
            if (t) return t;
          }
          return n1.active();
        })(e),
        r = rh.getSpan(n);
      if (!r || !t) return n;
      let i = rh.deleteSpan(n),
        { spanId: a, traceId: o } = r.spanContext(),
        s = i2(r.spanContext()),
        u = ae({ dsc: tN(e7(r)), sampled: s }),
        l = {
          traceId: o,
          spanId: a,
          isRemote: !0,
          traceFlags: s ? td.SAMPLED : td.NONE,
          traceState: u,
        };
      return rh.setSpanContext(i, l);
    }
    function ah(e, t) {
      let n = as(ao(n1.active(), e));
      return n1.with(n, t);
    }
    function ag(e) {
      return void 0 !== e ? (t) => ad(e, t) : (e) => e();
    }
    function av(e) {
      let t = iU(n1.active());
      return n1.with(t, e);
    }
    function a_({ span: e, scope: t, client: n } = {}) {
      let r = (t && t[i1]) ?? n1.active();
      if (e) {
        let { scope: t } = ej(e);
        r = (t && t[i1]) || rh.setSpan(n1.active(), e);
      }
      let {
        traceId: i,
        spanId: a,
        sampled: o,
        dynamicSamplingContext: s,
      } = aa(r, { scope: t, client: n });
      return { 'sentry-trace': eH(i, a, o), baggage: eL(s) };
    }
    function ay(e) {
      return !0 === e.attributes[iB] ? void 0 : iV(e);
    }
    function ab(e, t) {
      let n = e.get(t.id);
      return n?.span
        ? n
        : n && !n.span
          ? ((n.span = t.span), (n.parentNode = t.parentNode), n)
          : (e.set(t.id, t), t);
    }
    let a$ = {
      1: 'cancelled',
      2: 'unknown_error',
      3: 'invalid_argument',
      4: 'deadline_exceeded',
      5: 'not_found',
      6: 'already_exists',
      7: 'permission_denied',
      8: 'resource_exhausted',
      9: 'failed_precondition',
      10: 'aborted',
      11: 'out_of_range',
      12: 'unimplemented',
      13: 'internal_error',
      14: 'unavailable',
      15: 'data_loss',
      16: 'unauthenticated',
    };
    function aS(e) {
      let t = iG(e) ? e.attributes : {},
        n = e.status ? e.status : void 0;
      if (n) {
        if (n.code === tm.OK) return { code: 1 };
        else if (n.code === tm.ERROR) {
          let e;
          if (void 0 === n.message) {
            let e = ax(t);
            if (e) return e;
          }
          return n.message && ((e = n.message), Object.values(a$).includes(e))
            ? { code: 2, message: n.message }
            : { code: 2, message: 'unknown_error' };
        }
      }
      let r = ax(t);
      return r || (n?.code === tm.UNSET ? { code: 1 } : { code: 2, message: 'unknown_error' });
    }
    function ax(e) {
      let t = e[r6] || e[r1],
        n = e['rpc.grpc.status_code'],
        r = 'number' == typeof t ? t : 'string' == typeof t ? parseInt(t) : void 0;
      return 'number' == typeof r
        ? eU(r)
        : 'string' == typeof n
          ? { code: 2, message: a$[n] || 'unknown_error' }
          : void 0;
    }
    class aI {
      constructor(e) {
        ((this._finishedSpanBucketSize = e?.timeout || 300),
          (this._finishedSpanBuckets = Array(this._finishedSpanBucketSize).fill(void 0)),
          (this._lastCleanupTimestampInS = Math.floor(Date.now() / 1e3)),
          (this._spansToBucketEntry = new WeakMap()),
          (this._sentSpans = new Map()),
          (this._debouncedFlush = (function (e, t, n) {
            let r,
              i,
              a,
              o = n?.maxWait ? Math.max(n.maxWait, 1) : 0,
              s = n?.setTimeoutImpl || setTimeout;
            function u() {
              return (l(), (r = e()));
            }
            function l() {
              (void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), (i = a = void 0));
            }
            function c() {
              return (i && clearTimeout(i), (i = s(u, 1)), o && void 0 === a && (a = s(u, o)), r);
            }
            return (
              (c.cancel = l),
              (c.flush = function () {
                return void 0 !== i || void 0 !== a ? u() : r;
              }),
              c
            );
          })(this.flush.bind(this), 1, { maxWait: 100 })));
      }
      export(e) {
        let t = Math.floor(Date.now() / 1e3);
        if (this._lastCleanupTimestampInS !== t) {
          let e = 0;
          (this._finishedSpanBuckets.forEach((n, r) => {
            n &&
              n.timestampInS <= t - this._finishedSpanBucketSize &&
              ((e += n.spans.size), (this._finishedSpanBuckets[r] = void 0));
          }),
            e > 0 &&
              i7 &&
              g.log(
                `SpanExporter dropped ${e} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`
              ),
            (this._lastCleanupTimestampInS = t));
        }
        let n = t % this._finishedSpanBucketSize,
          r = this._finishedSpanBuckets[n] || { timestampInS: t, spans: new Set() };
        ((this._finishedSpanBuckets[n] = r), r.spans.add(e), this._spansToBucketEntry.set(e, r));
        let i = ay(e);
        (!i || this._sentSpans.has(i)) && this._debouncedFlush();
      }
      flush() {
        let e = this._finishedSpanBuckets.flatMap((e) => (e ? Array.from(e.spans) : []));
        this._flushSentSpanCache();
        let t = this._maybeSend(e),
          n = t.size,
          r = e.length - n;
        i7 &&
          g.log(
            `SpanExporter exported ${n} spans, ${r} spans are waiting for their parent spans to finish`
          );
        let i = Date.now() + 3e5;
        for (let e of t) {
          this._sentSpans.set(e.spanContext().spanId, i);
          let t = this._spansToBucketEntry.get(e);
          t && t.spans.delete(e);
        }
        this._debouncedFlush.cancel();
      }
      clear() {
        ((this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0)),
          this._sentSpans.clear(),
          this._debouncedFlush.cancel());
      }
      _maybeSend(e) {
        let t = (function (e) {
            let t = new Map();
            for (let n of e)
              !(function (e, t) {
                let n = t.spanContext().spanId,
                  r = ay(t);
                if (!r) return ab(e, { id: n, span: t, children: [] });
                let i = (function (e, t) {
                    let n = e.get(t);
                    return n || ab(e, { id: t, children: [] });
                  })(e, r),
                  a = ab(e, { id: n, span: t, parentNode: i, children: [] });
                i.children.push(a);
              })(t, n);
            return Array.from(t, function ([e, t]) {
              return t;
            });
          })(e),
          n = new Set();
        for (let e of this._getCompletedRootNodes(t)) {
          let t = e.span;
          n.add(t);
          let r = (function (e) {
            let { op: t, description: n, data: r, origin: i = 'manual', source: a } = ak(e),
              o = ej(e),
              s = e.attributes[ew],
              u = { [ek]: a, [ew]: s, [eE]: t, [eO]: i, ...r, ...aw(e.attributes) },
              { links: l } = e,
              { traceId: c, spanId: d } = e.spanContext(),
              p = {
                parent_span_id: iV(e),
                span_id: d,
                trace_id: c,
                data: u,
                origin: i,
                op: t,
                status: e9(aS(e)),
                links: e0(l),
              },
              f = u[r6];
            return {
              contexts: {
                trace: p,
                otel: { resource: e.resource.attributes },
                ...('number' == typeof f ? { response: { status_code: f } } : void 0),
              },
              spans: [],
              start_timestamp: e1(e.startTime),
              timestamp: e1(e.endTime),
              transaction: n,
              type: 'transaction',
              sdkProcessingMetadata: {
                capturedSpanScope: o.scope,
                capturedSpanIsolationScope: o.isolationScope,
                sampleRate: s,
                dynamicSamplingContext: tN(e),
              },
              ...(a && { transaction_info: { source: a } }),
            };
          })(t);
          if (e.parentNode && this._sentSpans.has(e.parentNode.id)) {
            let e = r.contexts?.trace?.data;
            e && (e['sentry.parent_span_already_sent'] = !0);
          }
          let i = r.spans || [];
          for (let t of e.children)
            !(function e(t, n, r) {
              let i = t.span;
              if ((i && r.add(i), !i))
                return void t.children.forEach((t) => {
                  e(t, n, r);
                });
              let a = i.spanContext().spanId,
                o = i.spanContext().traceId,
                s = iV(i),
                { attributes: u, startTime: l, endTime: c, links: d } = i,
                { op: p, description: f, data: m, origin: h = 'manual' } = ak(i),
                g = { [eO]: h, [eE]: p, ...aw(u), ...m },
                v = aS(i),
                _ = {
                  span_id: a,
                  trace_id: o,
                  data: g,
                  description: f,
                  parent_span_id: s,
                  start_timestamp: e1(l),
                  timestamp: e1(c) || void 0,
                  status: e9(v),
                  op: p,
                  origin: h,
                  measurements: t7(i.events),
                  links: e0(d),
                };
              (n.push(_),
                t.children.forEach((t) => {
                  e(t, n, r);
                }));
            })(t, i, n);
          r.spans =
            i.length > 1e3
              ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3)
              : i;
          let a = t7(t.events);
          (a && (r.measurements = a), ey().captureEvent(r, void 0));
        }
        return n;
      }
      _flushSentSpanCache() {
        let e = Date.now();
        for (let [t, n] of this._sentSpans.entries()) n <= e && this._sentSpans.delete(t);
      }
      _nodeIsCompletedRootNodeOrHasSentParent(e) {
        return !!e.span && (!e.parentNode || this._sentSpans.has(e.parentNode.id));
      }
      _getCompletedRootNodes(e) {
        return e.filter((e) => this._nodeIsCompletedRootNodeOrHasSentParent(e));
      }
    }
    function ak(e) {
      let {
          op: t,
          source: n,
          origin: r,
        } = (function (e) {
          let t = e.attributes,
            n = t[eO];
          return { origin: n, op: t[eE], source: t[ek] };
        })(e),
        { op: i, description: a, source: o, data: s } = i3(e);
      return {
        op: t || i,
        description: a,
        source: n || o,
        origin: r,
        data: {
          ...s,
          ...(function (e) {
            let t = e.attributes,
              n = {};
            e.kind !== tp.INTERNAL && (n['otel.kind'] = tp[e.kind]);
            let r = t[r1];
            r && (n[r6] = r);
            let i = (function (e) {
              if (!iG(e)) return {};
              let t = e.attributes[r2] || e.attributes[r0],
                n = { url: t, 'http.method': e.attributes[r4] || e.attributes[rQ] };
              !n['http.method'] && n.url && (n['http.method'] = 'GET');
              try {
                if ('string' == typeof t) {
                  let e = ts(t);
                  ((n.url = tl(e)),
                    e.search && (n['http.query'] = e.search),
                    e.hash && (n['http.fragment'] = e.hash));
                }
              } catch {}
              return n;
            })(e);
            return (
              i.url && (n.url = i.url),
              i['http.query'] && (n['http.query'] = i['http.query'].slice(1)),
              i['http.fragment'] && (n['http.fragment'] = i['http.fragment'].slice(1)),
              n
            );
          })(e),
        },
      };
    }
    function aw(e) {
      let t = { ...e };
      return (delete t[ew], delete t[iB], delete t[eT], t);
    }
    class aE {
      constructor(e) {
        (an('SentrySpanProcessor'), (this._exporter = new aI(e)));
      }
      async forceFlush() {
        this._exporter.flush();
      }
      async shutdown() {
        this._exporter.clear();
      }
      onStart(e, t) {
        let n = rh.getSpan(t),
          r = i4(t);
        (n && !n.spanContext().isRemote && e8(n, e),
          n?.spanContext().isRemote && e.setAttribute(iB, !0),
          t === nP && (r = { scope: ed(), isolationScope: ep() }),
          r && ez(e, r.scope, r.isolationScope),
          nt(e));
        let i = ex();
        i?.emit('spanStart', e);
      }
      onEnd(e) {
        nn(e);
        let t = ex();
        (t?.emit('spanEnd', e), this._exporter.export(e));
      }
    }
    class aO {
      constructor(e) {
        ((this._client = e), an('SentrySampler'));
      }
      shouldSample(e, t, n, r, i, a) {
        let o = this._client.getOptions(),
          s = (function (e) {
            let t = rh.getSpan(e);
            return t && ro(t.spanContext()) ? t : void 0;
          })(e),
          u = s?.spanContext();
        if (!tw(o)) return aT({ decision: void 0, context: e, spanAttributes: i });
        let l = i[rQ] || i[r4];
        if (r === tp.CLIENT && l && (!s || u?.isRemote))
          return aT({ decision: void 0, context: e, spanAttributes: i });
        let c = s
          ? (function (e, t, n) {
              let r = e.spanContext();
              if (ro(r) && r.traceId === t) {
                if (r.isRemote) {
                  let t = i2(e.spanContext());
                  return (
                    i7 &&
                      g.log(`[Tracing] Inheriting remote parent's sampled decision for ${n}: ${t}`),
                    t
                  );
                }
                let t = i2(r);
                return (
                  i7 && g.log(`[Tracing] Inheriting parent's sampled decision for ${n}: ${t}`),
                  t
                );
              }
            })(s, t, n)
          : void 0;
        if (!(!s || u?.isRemote))
          return aT({
            decision: c ? th.RECORD_AND_SAMPLED : th.NOT_RECORD,
            context: e,
            spanAttributes: i,
          });
        let { description: d, data: p, op: f } = i9(n, i, r),
          m = { ...p, ...i };
        f && (m[eE] = f);
        let h = { decision: !0 };
        if (
          (this._client.emit(
            'beforeSampling',
            { spanAttributes: m, spanName: d, parentSampled: c, parentContext: u },
            h
          ),
          !h.decision)
        )
          return aT({ decision: void 0, context: e, spanAttributes: i });
        let { isolationScope: v } = i4(e) ?? {},
          _ = u?.traceState ? u.traceState.get(iK) : void 0,
          y = _ ? eC(_) : void 0,
          b = eK(y?.sample_rand) ?? Math.random(),
          [$, S, x] = t5(
            o,
            {
              name: d,
              attributes: m,
              normalizedRequest: v?.getScopeData().sdkProcessingMetadata.normalizedRequest,
              parentSampled: c,
              parentSampleRate: eK(y?.sample_rate),
            },
            b
          ),
          I = `${l}`.toUpperCase();
        return 'OPTIONS' === I || 'HEAD' === I
          ? (i7 && g.log(`[Tracing] Not sampling span because HTTP method is '${I}' for ${n}`),
            aT({
              decision: th.NOT_RECORD,
              context: e,
              spanAttributes: i,
              sampleRand: b,
              downstreamTraceSampleRate: 0,
            }))
          : ($ ||
              void 0 !== c ||
              (i7 &&
                g.log(
                  '[Tracing] Discarding root span because its trace was not chosen to be sampled.'
                ),
              this._client.recordDroppedEvent('sample_rate', 'transaction')),
            {
              ...aT({
                decision: $ ? th.RECORD_AND_SAMPLED : th.NOT_RECORD,
                context: e,
                spanAttributes: i,
                sampleRand: b,
                downstreamTraceSampleRate: x ? S : void 0,
              }),
              attributes: { [ew]: x ? S : void 0 },
            });
      }
      toString() {
        return 'SentrySampler';
      }
    }
    function aT({
      decision: e,
      context: t,
      spanAttributes: n,
      sampleRand: r,
      downstreamTraceSampleRate: i,
    }) {
      let a = (function (e, t) {
        let n = rh.getSpan(e),
          r = n?.spanContext(),
          i = r?.traceState || new iF(),
          a = t[r0] || t[r2];
        return (a && 'string' == typeof a && (i = i.set(iX, a)), i);
      })(t, n);
      return (void 0 !== i && (a = a.set('sentry.sample_rate', `${i}`)),
      void 0 !== r && (a = a.set('sentry.sample_rand', `${r}`)),
      void 0 == e)
        ? { decision: th.NOT_RECORD, traceState: a }
        : e === th.NOT_RECORD
          ? { decision: e, traceState: a.set(iY, '1') }
          : { decision: e, traceState: a };
    }
    let aN = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      aP = new WeakMap();
    class aU {
      constructor(e = 30) {
        ((this.$ = []), (this._taskProducers = []), (this._bufferSize = e));
      }
      add(e) {
        return this._taskProducers.length >= this._bufferSize
          ? Promise.reject(nm)
          : (this._taskProducers.push(e), Promise.resolve({}));
      }
      drain(e) {
        let t = [...this._taskProducers];
        return (
          (this._taskProducers = []),
          new Promise((n) => {
            let r = setTimeout(() => {
              e && e > 0 && n(!1);
            }, e);
            Promise.all(t.map((e) => e().then(null, () => {}))).then(() => {
              (clearTimeout(r), n(!0));
            });
          })
        );
      }
    }
    function aA(e) {
      return (function (
        e,
        t,
        n = (function (e) {
          let t = [];
          function n(e) {
            return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
          }
          return {
            $: t,
            add: function (r) {
              if (!(void 0 === e || t.length < e)) return tZ(nm);
              let i = r();
              return (
                -1 === t.indexOf(i) && t.push(i),
                i.then(() => n(i)).then(null, () => n(i).then(null, () => {})),
                i
              );
            },
            drain: function (e) {
              return new tR((n, r) => {
                let i = t.length;
                if (!i) return n(!0);
                let a = setTimeout(() => {
                  e && e > 0 && n(!1);
                }, e);
                t.forEach((e) => {
                  tj(e).then(() => {
                    --i || (clearTimeout(a), n(!0));
                  }, r);
                });
              });
            },
          };
        })(e.bufferSize || 64)
      ) {
        let r = {};
        return {
          send: function (i) {
            let a = [];
            if (
              (t$(i, (t, n) => {
                let i = tx[n];
                !(function (e, t, n = Date.now()) {
                  return (e[t] || e.all || 0) > n;
                })(r, i)
                  ? a.push(t)
                  : e.recordDroppedEvent('ratelimit_backoff', i);
              }),
              0 === a.length)
            )
              return tj({});
            let s = tb(i[0], a),
              u = (t) => {
                t$(s, (n, r) => {
                  e.recordDroppedEvent(t, tx[r]);
                });
              };
            return n
              .add(() =>
                t({
                  body: (function (e) {
                    let [t, n] = e,
                      r = JSON.stringify(t);
                    function i(e) {
                      'string' == typeof r
                        ? (r = 'string' == typeof e ? r + e : [tS(r), e])
                        : r.push('string' == typeof e ? tS(e) : e);
                    }
                    for (let e of n) {
                      let [t, n] = e;
                      if (
                        (i(`
${JSON.stringify(t)}
`),
                        'string' == typeof n || n instanceof Uint8Array)
                      )
                        i(n);
                      else {
                        let e;
                        try {
                          e = JSON.stringify(n);
                        } catch {
                          e = JSON.stringify(ty(n));
                        }
                        i(e);
                      }
                    }
                    return 'string' == typeof r
                      ? r
                      : (function (e) {
                          let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                            n = 0;
                          for (let r of e) (t.set(r, n), (n += r.length));
                          return t;
                        })(r);
                  })(s),
                }).then(
                  (e) => (
                    void 0 !== e.statusCode &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      o &&
                      g.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                    (r = (function (e, { statusCode: t, headers: n }, r = Date.now()) {
                      let i = { ...e },
                        a = n?.['x-sentry-rate-limits'],
                        o = n?.['retry-after'];
                      if (a)
                        for (let e of a.trim().split(',')) {
                          let [t, n, , , a] = e.split(':', 5),
                            o = parseInt(t, 10),
                            s = (isNaN(o) ? 60 : o) * 1e3;
                          if (n)
                            for (let e of n.split(';'))
                              'metric_bucket' === e
                                ? (!a || a.split(';').includes('custom')) && (i[e] = r + s)
                                : (i[e] = r + s);
                          else i.all = r + s;
                        }
                      else
                        o
                          ? (i.all =
                              r +
                              (function (e, t = Date.now()) {
                                let n = parseInt(`${e}`, 10);
                                if (!isNaN(n)) return 1e3 * n;
                                let r = Date.parse(`${e}`);
                                return isNaN(r) ? 6e4 : r - t;
                              })(o, r))
                          : 429 === t && (i.all = r + 6e4);
                      return i;
                    })(r, e)),
                    e
                  ),
                  (e) => {
                    throw (
                      u('network_error'),
                      o && g.error('Encountered error running transport request:', e),
                      e
                    );
                  }
                )
              )
              .then(
                (e) => e,
                (e) => {
                  if (e === nm)
                    return (
                      o && g.error('Skipped sending event because buffer is full.'),
                      u('queue_overflow'),
                      tj({})
                    );
                  throw e;
                }
              );
          },
          flush: (e) => n.drain(e),
        };
      })(
        e,
        function (t) {
          let n = { body: t.body, method: 'POST', headers: e.headers, ...e.fetchOptions };
          var r = () =>
            fetch(e.url, n).then((e) => ({
              statusCode: e.status,
              headers: {
                'x-sentry-rate-limits': e.headers.get('X-Sentry-Rate-Limits'),
                'retry-after': e.headers.get('Retry-After'),
              },
            }));
          let i = e_(l());
          return i.suppressTracing
            ? i.suppressTracing(r)
            : eS((e) => {
                e.setSDKProcessingMetadata({ [nc]: !0 });
                let t = r();
                return (e.setSDKProcessingMetadata({ [nc]: void 0 }), t);
              });
        },
        new aU(e.bufferSize)
      );
    }
    let aD = ['addListener', 'on', 'once', 'prependListener', 'prependOnceListener'];
    class az {
      constructor() {
        (az.prototype.__init.call(this), az.prototype.__init2.call(this));
      }
      bind(e, t) {
        return 'object' == typeof t && null !== t && 'on' in t
          ? this._bindEventEmitter(e, t)
          : 'function' == typeof t
            ? this._bindFunction(e, t)
            : t;
      }
      _bindFunction(e, t) {
        let n = this,
          r = function (...r) {
            return n.with(e, () => t.apply(this, r));
          };
        return (
          Object.defineProperty(r, 'length', {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: t.length,
          }),
          r
        );
      }
      _bindEventEmitter(e, t) {
        return (
          void 0 !== this._getPatchMap(t) ||
            (this._createPatchMap(t),
            aD.forEach((n) => {
              void 0 !== t[n] && (t[n] = this._patchAddListener(t, t[n], e));
            }),
            'function' == typeof t.removeListener &&
              (t.removeListener = this._patchRemoveListener(t, t.removeListener)),
            'function' == typeof t.off && (t.off = this._patchRemoveListener(t, t.off)),
            'function' == typeof t.removeAllListeners &&
              (t.removeAllListeners = this._patchRemoveAllListeners(t, t.removeAllListeners))),
          t
        );
      }
      _patchRemoveListener(e, t) {
        let n = this;
        return function (r, i) {
          let a = n._getPatchMap(e)?.[r];
          if (void 0 === a) return t.call(this, r, i);
          let o = a.get(i);
          return t.call(this, r, o || i);
        };
      }
      _patchRemoveAllListeners(e, t) {
        let n = this;
        return function (r) {
          let i = n._getPatchMap(e);
          return (
            void 0 !== i &&
              (0 == arguments.length ? n._createPatchMap(e) : void 0 !== i[r] && delete i[r]),
            t.apply(this, arguments)
          );
        };
      }
      _patchAddListener(e, t, n) {
        let r = this;
        return function (i, a) {
          if (r._wrapped) return t.call(this, i, a);
          let o = r._getPatchMap(e);
          void 0 === o && (o = r._createPatchMap(e));
          let s = o[i];
          void 0 === s && ((s = new WeakMap()), (o[i] = s));
          let u = r.bind(n, a);
          (s.set(a, u), (r._wrapped = !0));
          try {
            return t.call(this, i, u);
          } finally {
            r._wrapped = !1;
          }
        };
      }
      _createPatchMap(e) {
        let t = Object.create(null);
        return ((e[this._kOtListeners] = t), t);
      }
      _getPatchMap(e) {
        return e[this._kOtListeners];
      }
      __init() {
        this._kOtListeners = Symbol('OtListeners');
      }
      __init2() {
        this._wrapped = !1;
      }
    }
    class aj extends az {
      constructor() {
        super();
        let e = s.AsyncLocalStorage;
        e
          ? (this._asyncLocalStorage = new e())
          : (aN &&
              g.warn(
                "Tried to register AsyncLocalStorage async context strategy in a runtime that doesn't support AsyncLocalStorage."
              ),
            (this._asyncLocalStorage = {
              getStore() {},
              run(e, t, ...n) {
                return t.apply(this, n);
              },
              disable() {},
            }));
      }
      active() {
        return this._asyncLocalStorage.getStore() ?? nP;
      }
      with(e, t, n, ...r) {
        let i = null == n ? t : t.bind(n);
        return this._asyncLocalStorage.run(e, i, ...r);
      }
      enable() {
        return this;
      }
      disable() {
        return (this._asyncLocalStorage.disable(), this);
      }
    }
    let aZ = y([
      90,
      (function (e) {
        let t = /^\s*[-]{4,}$/,
          n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
          r = /at (?:async )?(.+?) \(data:(.*?),/;
        return (i) => {
          let a = i.match(r);
          if (a) return { filename: `<data:${a[2]}>`, function: a[1] };
          let o = i.match(n);
          if (o) {
            let t, n, r, i, a;
            if (o[1]) {
              let e = (r = o[1]).lastIndexOf('.');
              if (('.' === r[e - 1] && e--, e > 0)) {
                ((t = r.slice(0, e)), (n = r.slice(e + 1)));
                let i = t.indexOf('.Module');
                i > 0 && ((r = r.slice(i + 1)), (t = t.slice(0, i)));
              }
              i = void 0;
            }
            (n && ((i = t), (a = n)),
              '<anonymous>' === n && ((a = void 0), (r = void 0)),
              void 0 === r && ((a = a || '?'), (r = i ? `${i}.${a}` : a)));
            let s = o[2]?.startsWith('file://') ? o[2].slice(7) : o[2],
              u = 'native' === o[5];
            return (
              s?.match(/\/[A-Z]:/) && (s = s.slice(1)),
              s || !o[5] || u || (s = o[5]),
              {
                filename: s ? decodeURI(s) : void 0,
                module: e ? e(s) : void 0,
                function: r,
                lineno: nh(o[3]),
                colno: nh(o[4]),
                in_app: (function (e, t = !1) {
                  return (
                    !(
                      t ||
                      (e &&
                        !e.startsWith('/') &&
                        !e.match(/^[A-Z]:/) &&
                        !e.startsWith('.') &&
                        !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
                    ) &&
                    void 0 !== e &&
                    !e.includes('node_modules/')
                  );
                })(s || '', u),
              }
            );
          }
          if (i.match(t)) return { filename: i };
        };
      })(void 0),
    ]);
    function aR(e) {
      let t;
      return [
        {
          name: 'Dedupe',
          processEvent(e) {
            if (e.type) return e;
            try {
              var n, r;
              if (
                ((n = e),
                (r = t) &&
                  ((function (e, t) {
                    let n = e.message,
                      r = t.message;
                    return (
                      (!!n || !!r) &&
                      (!n || !!r) &&
                      (!!n || !r) &&
                      n === r &&
                      !!nv(e, t) &&
                      !!ng(e, t) &&
                      !0
                    );
                  })(n, r) ||
                    (function (e, t) {
                      let n = n_(t),
                        r = n_(e);
                      return (
                        !!n &&
                        !!r &&
                        n.type === r.type &&
                        n.value === r.value &&
                        !!nv(e, t) &&
                        !!ng(e, t)
                      );
                    })(n, r)))
              )
                return (
                  o &&
                    g.warn('Event dropped due to being a duplicate of previously captured event.'),
                  null
                );
            } catch {}
            return (t = e);
          },
        },
        ((e = {}) => ({
          ...((e = {}) => {
            let t;
            return {
              name: 'EventFilters',
              setup(n) {
                t = nb(e, n.getOptions());
              },
              processEvent: (n, r, i) => (
                t || (t = nb(e, i.getOptions())),
                !(function (e, t) {
                  if (e.type) {
                    if (
                      'transaction' === e.type &&
                      (function (e, t) {
                        if (!t?.length) return !1;
                        let n = e.transaction;
                        return !!n && J(n, t);
                      })(e, t.ignoreTransactions)
                    )
                      return (
                        o &&
                          g.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ee(e)}`),
                        !0
                      );
                  } else {
                    var n, r, i;
                    if (((n = e), (r = t.ignoreErrors), r?.length && tz(n).some((e) => J(e, r))))
                      return (
                        o &&
                          g.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ee(e)}`),
                        !0
                      );
                    if (
                      ((i = e),
                      i.exception?.values?.length &&
                        !i.message &&
                        !i.exception.values.some(
                          (e) => e.stacktrace || (e.type && 'Error' !== e.type) || e.value
                        ))
                    )
                      return (
                        o &&
                          g.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${ee(e)}`),
                        !0
                      );
                    if (
                      (function (e, t) {
                        if (!t?.length) return !1;
                        let n = n$(e);
                        return !!n && J(n, t);
                      })(e, t.denyUrls)
                    )
                      return (
                        o &&
                          g.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ee(e)}.
Url: ${n$(e)}`),
                        !0
                      );
                    if (
                      !(function (e, t) {
                        if (!t?.length) return !0;
                        let n = n$(e);
                        return !n || J(n, t);
                      })(e, t.allowUrls)
                    )
                      return (
                        o &&
                          g.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ee(e)}.
Url: ${n$(e)}`),
                        !0
                      );
                  }
                  return !1;
                })(n, t)
                  ? n
                  : null
              ),
            };
          })(e),
          name: 'InboundFilters',
        }))(),
        {
          name: 'FunctionToString',
          setupOnce() {
            a = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...e) {
                let t = this.__sentry_original__,
                  n = nS.has(ex()) && void 0 !== t ? t : this;
                return a.apply(n, e);
              };
            } catch {}
          },
          setup(e) {
            nS.set(e, !0);
          },
        },
        ((e = {}) => {
          let t = e.limit || 5,
            n = e.key || 'cause';
          return {
            name: 'LinkedErrors',
            preprocessEvent(e, r, i) {
              !(function (e, t, n, r, i, a) {
                if (!i.exception?.values || !a || !M(a.originalException, Error)) return;
                let o =
                  i.exception.values.length > 0
                    ? i.exception.values[i.exception.values.length - 1]
                    : void 0;
                o &&
                  (i.exception.values = (function e(t, n, r, i, a, o, s, u) {
                    if (o.length >= r + 1) return o;
                    let l = [...o];
                    if (M(i[a], Error)) {
                      nx(s, u);
                      let o = t(n, i[a]),
                        c = l.length;
                      (nI(o, a, c, u), (l = e(t, n, r, i[a], a, [o, ...l], o, c)));
                    }
                    return (
                      Array.isArray(i.errors) &&
                        i.errors.forEach((i, o) => {
                          if (M(i, Error)) {
                            nx(s, u);
                            let c = t(n, i),
                              d = l.length;
                            (nI(c, `errors[${o}]`, d, u), (l = e(t, n, r, i, a, [c, ...l], c, d)));
                          }
                        }),
                      l
                    );
                  })(e, t, r, a.originalException, n, i.exception.values, o, 0));
              })(t4, i.getOptions().stackParser, n, t, e, r);
            },
          };
        })(),
        ((e = {}) => {
          let t = void 0 === e.breadcrumbs || e.breadcrumbs,
            n = e.shouldCreateSpanForRequest,
            r = new t8(100),
            i = new t8(100),
            a = {};
          function o(e) {
            let t = ex();
            if (!t) return !1;
            let n = t.getOptions();
            if (void 0 === n.tracePropagationTargets) return !0;
            let r = i.get(e);
            if (void 0 !== r) return r;
            let a = J(e, n.tracePropagationTargets);
            return (i.set(e, a), a);
          }
          function u(e) {
            if (void 0 === n) return !0;
            let t = r.get(e);
            if (void 0 !== t) return t;
            let i = n(e);
            return (r.set(e, i), i);
          }
          return {
            name: 'WinterCGFetch',
            setupOnce() {
              !(function (e, t) {
                let n = 'fetch';
                (w(n, e),
                  E(n, () =>
                    (function (e, t = !1) {
                      W(s, 'fetch', function (t) {
                        return function (...n) {
                          let r = Error(),
                            { method: i, url: a } = (function (e) {
                              if (0 === e.length) return { method: 'GET', url: '' };
                              if (2 === e.length) {
                                let [t, n] = e;
                                return {
                                  url: ni(t),
                                  method: nr(n, 'method') ? String(n.method).toUpperCase() : 'GET',
                                };
                              }
                              let t = e[0];
                              return {
                                url: ni(t),
                                method: nr(t, 'method') ? String(t.method).toUpperCase() : 'GET',
                              };
                            })(n),
                            o = {
                              args: n,
                              fetchData: { method: i, url: a },
                              startTimestamp: 1e3 * ei(),
                              virtualError: r,
                              headers: (function (e) {
                                let [t, n] = e;
                                try {
                                  if (
                                    'object' == typeof n &&
                                    null !== n &&
                                    'headers' in n &&
                                    n.headers
                                  )
                                    return new Headers(n.headers);
                                  if (B(t)) return new Headers(t.headers);
                                } catch {}
                              })(n),
                            };
                          return (
                            e || O('fetch', { ...o }),
                            t.apply(s, n).then(
                              async (t) => (
                                e
                                  ? e(t)
                                  : O('fetch', { ...o, endTimestamp: 1e3 * ei(), response: t }),
                                t
                              ),
                              (e) => {
                                if (
                                  (O('fetch', { ...o, endTimestamp: 1e3 * ei(), error: e }),
                                  D(e) &&
                                    void 0 === e.stack &&
                                    ((e.stack = r.stack), K(e, 'framesToPop', 1)),
                                  e instanceof TypeError &&
                                    ('Failed to fetch' === e.message ||
                                      'Load failed' === e.message ||
                                      'NetworkError when attempting to fetch resource.' ===
                                        e.message))
                                )
                                  try {
                                    let t = new URL(o.fetchData.url);
                                    e.message = `${e.message} (${t.host})`;
                                  } catch {}
                                throw e;
                              }
                            )
                          );
                        };
                      });
                    })(void 0, void 0)
                  ));
              })((e) => {
                let n = ex();
                n &&
                  aP.get(n) &&
                  !(function (e, t) {
                    var n, r;
                    let i = t?.getDsn(),
                      a = t?.getOptions().tunnel;
                    return (
                      (function (e, t) {
                        let n = to(e);
                        return (
                          !(!n || ta(n)) &&
                          !!t &&
                          n.host.includes(t.host) &&
                          /(^|&|\?)sentry_key=/.test(n.search)
                        );
                      })(e, i) || ((n = e), !!(r = a) && na(n) === na(r))
                    );
                  })(e.fetchData.url, n) &&
                  (!(function (e, t, n, r, i) {
                    if (!e.fetchData) return;
                    let { method: a, url: o } = e.fetchData,
                      s = tw() && t(o);
                    if (e.endTimestamp && s) {
                      let t = e.fetchData.__span;
                      if (!t) return;
                      let n = r[t];
                      n &&
                        ((function (e, t) {
                          if (t.response) {
                            var n = t.response.status;
                            e.setAttribute('http.response.status_code', n);
                            let r = eU(n);
                            'unknown_error' !== r.message && e.setStatus(r);
                            let i = t.response?.headers?.get('content-length');
                            if (i) {
                              let t = parseInt(i);
                              t > 0 && e.setAttribute('http.response_content_length', t);
                            }
                          } else t.error && e.setStatus({ code: 2, message: 'internal_error' });
                          e.end();
                        })(n, e),
                        delete r[t]);
                      return;
                    }
                    let { spanOrigin: u = 'auto.http.browser', propagateTraceparent: c = !1 } =
                        'object' == typeof i ? i : { spanOrigin: i },
                      d = !!te(),
                      p =
                        s && d
                          ? (function (e) {
                              let t = e_(l());
                              if (t.startInactiveSpan) return t.startInactiveSpan(e);
                              let n = (function (e) {
                                  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
                                  if (e.startTime) {
                                    let n = { ...t };
                                    return (
                                      (n.startTimestamp = e1(e.startTime)),
                                      delete n.startTime,
                                      n
                                    );
                                  }
                                  return t;
                                })(e),
                                { forceTransaction: r, parentSpan: i } = e;
                              return (
                                e.scope
                                  ? (t) => eS(e.scope, t)
                                  : void 0 !== i
                                    ? (e) =>
                                        (function (e, t) {
                                          let n = e_(l());
                                          return n.withActiveSpan
                                            ? n.withActiveSpan(e, t)
                                            : eS((n) => (el(n, e || void 0), t(n)));
                                        })(i, e)
                                    : (e) => e()
                              )(() => {
                                let t = ey(),
                                  a = (function (e, t) {
                                    if (t) return t;
                                    if (null === t) return;
                                    let n = e[eu];
                                    if (!n) return;
                                    let r = ex();
                                    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan
                                      ? e7(n)
                                      : n;
                                  })(t, i);
                                return e.onlyIfParent && !a
                                  ? new no()
                                  : (function ({
                                      parentSpan: e,
                                      spanArguments: t,
                                      forceTransaction: n,
                                      scope: r,
                                    }) {
                                      let i;
                                      if (!tw()) {
                                        let r = new no();
                                        if (n || !e) {
                                          let e = {
                                            sampled: 'false',
                                            sample_rate: '0',
                                            transaction: t.name,
                                            ...tN(r),
                                          };
                                          K(r, tE, e);
                                        }
                                        return r;
                                      }
                                      let a = eb();
                                      if (e && !n)
                                        ((i = (function (e, t, n) {
                                          let { spanId: r, traceId: i } = e.spanContext(),
                                            a =
                                              !t.getScopeData().sdkProcessingMetadata[nc] && e2(e),
                                            o = a
                                              ? new ns({
                                                  ...n,
                                                  parentSpanId: r,
                                                  traceId: i,
                                                  sampled: a,
                                                })
                                              : new no({ traceId: i });
                                          e8(e, o);
                                          let s = ex();
                                          return (
                                            s &&
                                              (s.emit('spanStart', o),
                                              n.endTimestamp && s.emit('spanEnd', o)),
                                            o
                                          );
                                        })(e, r, t)),
                                          e8(e, i));
                                      else if (e) {
                                        let n = tN(e),
                                          { traceId: a, spanId: o } = e.spanContext(),
                                          s = e2(e);
                                        K(
                                          (i = nd({ traceId: a, parentSpanId: o, ...t }, r, s)),
                                          tE,
                                          n
                                        );
                                      } else {
                                        let {
                                          traceId: e,
                                          dsc: n,
                                          parentSpanId: o,
                                          sampled: s,
                                        } = {
                                          ...a.getPropagationContext(),
                                          ...r.getPropagationContext(),
                                        };
                                        ((i = nd({ traceId: e, parentSpanId: o, ...t }, r, s)),
                                          n && K(i, tE, n));
                                      }
                                      return (nt(i), ez(i, r, a), i);
                                    })({
                                      parentSpan: a,
                                      spanArguments: n,
                                      forceTransaction: r,
                                      scope: t,
                                    });
                              });
                            })(
                              (function (e, t, n) {
                                let r = to(e);
                                return {
                                  name: r
                                    ? `${t} ${(function (e) {
                                        if (ta(e)) return e.pathname;
                                        let t = new URL(e);
                                        return (
                                          (t.search = ''),
                                          (t.hash = ''),
                                          ['80', '443'].includes(t.port) && (t.port = ''),
                                          t.password && (t.password = '%filtered%'),
                                          t.username && (t.username = '%filtered%'),
                                          t.toString()
                                        );
                                      })(r)}`
                                    : t,
                                  attributes: (function (e, t, n, r) {
                                    let i = {
                                      url: e,
                                      type: 'fetch',
                                      'http.method': n,
                                      [eO]: r,
                                      [eE]: 'http.client',
                                    };
                                    return (
                                      t &&
                                        (ta(t) ||
                                          ((i['http.url'] = t.href),
                                          (i['server.address'] = t.host)),
                                        t.search && (i['http.query'] = t.search),
                                        t.hash && (i['http.fragment'] = t.hash)),
                                      i
                                    );
                                  })(e, r, t, n),
                                };
                              })(o, a, u)
                            )
                          : new no();
                    if (
                      ((e.fetchData.__span = p.spanContext().spanId),
                      (r[p.spanContext().spanId] = p),
                      n(e.fetchData.url))
                    ) {
                      let t = e.args[0],
                        n = e.args[1] || {},
                        r = (function (e, t, n, r) {
                          var i;
                          let a = (function (e = {}) {
                              let t = e.client || ex();
                              if (
                                !(function () {
                                  let e = ex();
                                  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
                                })() ||
                                !t
                              )
                                return {};
                              let n = e_(l());
                              if (n.getTraceData) return n.getTraceData(e);
                              let r = e.scope || ey(),
                                i = e.span || te(),
                                a = i
                                  ? (function (e) {
                                      let { traceId: t, spanId: n } = e.spanContext();
                                      return eH(t, n, e2(e));
                                    })(i)
                                  : (function (e) {
                                      let {
                                        traceId: t,
                                        sampled: n,
                                        propagationSpanId: r,
                                      } = e.getPropagationContext();
                                      return eH(t, r, n);
                                    })(r),
                                o = eL(i ? tN(i) : tT(t, r));
                              if (!eY.test(a))
                                return (
                                  g.warn('Invalid sentry-trace data. Cannot generate trace data'),
                                  {}
                                );
                              let s = { 'sentry-trace': a, baggage: o };
                              if (e.propagateTraceparent) {
                                let e = (function (e) {
                                  let {
                                    traceId: t,
                                    parentSpanId: n,
                                    parentSampled: r,
                                  } = eX(e) || {};
                                  if (t && n) return `00-${t}-${n}-${r ? '01' : '00'}`;
                                })(a);
                                e && (s.traceparent = e);
                              }
                              return s;
                            })({ span: n, propagateTraceparent: r }),
                            o = a['sentry-trace'],
                            s = a.baggage,
                            u = a.traceparent;
                          if (!o) return;
                          let c = t.headers || (B(e) ? e.headers : void 0);
                          if (!c) return { ...a };
                          if (((i = c), 'undefined' != typeof Headers && M(i, Headers))) {
                            let e = new Headers(c);
                            if (
                              (e.get('sentry-trace') || e.set('sentry-trace', o),
                              r && u && !e.get('traceparent') && e.set('traceparent', u),
                              s)
                            ) {
                              let t = e.get('baggage');
                              t ? np(t) || e.set('baggage', `${t},${s}`) : e.set('baggage', s);
                            }
                            return e;
                          }
                          if (Array.isArray(c)) {
                            let e = [...c];
                            (c.find((e) => 'sentry-trace' === e[0]) || e.push(['sentry-trace', o]),
                              r &&
                                u &&
                                !c.find((e) => 'traceparent' === e[0]) &&
                                e.push(['traceparent', u]));
                            let t = c.find((e) => 'baggage' === e[0] && np(e[1]));
                            return (s && !t && e.push(['baggage', s]), e);
                          }
                          {
                            let e = 'sentry-trace' in c ? c['sentry-trace'] : void 0,
                              t = 'traceparent' in c ? c.traceparent : void 0,
                              n = 'baggage' in c ? c.baggage : void 0,
                              i = n ? (Array.isArray(n) ? [...n] : [n]) : [],
                              a = n && (Array.isArray(n) ? n.find((e) => np(e)) : np(n));
                            s && !a && i.push(s);
                            let l = {
                              ...c,
                              'sentry-trace': e ?? o,
                              baggage: i.length > 0 ? i.join(',') : void 0,
                            };
                            return (r && u && !t && (l.traceparent = u), l);
                          }
                        })(t, n, tw() && d ? p : void 0, c);
                      r && ((e.args[1] = n), (n.headers = r));
                    }
                    let f = ex();
                    if (f) {
                      let t = {
                        input: e.args,
                        response: e.response,
                        startTimestamp: e.startTimestamp,
                        endTimestamp: e.endTimestamp,
                      };
                      f.emit('beforeOutgoingRequestSpan', p, t);
                    }
                  })(e, u, o, a, { spanOrigin: 'auto.http.wintercg_fetch' }),
                  t &&
                    (function (e) {
                      let { startTimestamp: t, endTimestamp: n } = e;
                      if (!n) return;
                      let r = { method: e.fetchData.method, url: e.fetchData.url };
                      if (e.error)
                        nf(
                          { category: 'fetch', data: r, level: 'error', type: 'http' },
                          { data: e.error, input: e.args, startTimestamp: t, endTimestamp: n }
                        );
                      else {
                        let i = e.response;
                        ((r.request_body_size = e.fetchData.request_body_size),
                          (r.response_body_size = e.fetchData.response_body_size),
                          (r.status_code = i?.status));
                        let a = { input: e.args, response: i, startTimestamp: t, endTimestamp: n },
                          o = (function (e) {
                            if (void 0 !== e)
                              return e >= 400 && e < 500 ? 'warning' : e >= 500 ? 'error' : void 0;
                          })(r.status_code);
                        nf({ category: 'fetch', data: r, type: 'http', level: o }, a);
                      }
                    })(e));
              });
            },
            setup(e) {
              aP.set(e, !0);
            },
          };
        })(),
        ((e = {}) => {
          let t = new Set(e.levels || p);
          return {
            name: 'Console',
            setup(e) {
              let n = 'console';
              (w(n, ({ args: n, level: r }) => {
                ex() === e &&
                  t.has(r) &&
                  (function (e, t) {
                    let n = {
                      category: 'console',
                      data: { arguments: t, logger: 'console' },
                      level:
                        'warn' === e
                          ? 'warning'
                          : ['fatal', 'error', 'warning', 'log', 'info', 'debug'].includes(e)
                            ? e
                            : 'log',
                      message: nw(t),
                    };
                    if ('assert' === e)
                      if (!1 !== t[0]) return;
                      else {
                        let e = t.slice(1);
                        ((n.message =
                          e.length > 0 ? `Assertion failed: ${nw(e)}` : 'Assertion failed'),
                          (n.data.arguments = e));
                      }
                    nf(n, { input: t, level: e });
                  })(r, n);
              }),
                E(n, nk));
            },
          };
        })(),
        ...(e.sendDefaultPii
          ? [
              ((e = {}) => {
                let t = { ...nO, ...e.include };
                return {
                  name: 'RequestData',
                  processEvent(e, n, r) {
                    let { sdkProcessingMetadata: i = {} } = e,
                      { normalizedRequest: a, ipAddress: o } = i,
                      s = { ...t, ip: t.ip ?? r.getOptions().sendDefaultPii };
                    return (
                      a &&
                        (function (e, t, n, r) {
                          if (
                            ((e.request = {
                              ...e.request,
                              ...(function (e, t) {
                                let n = {},
                                  r = { ...e.headers };
                                return (
                                  t.headers &&
                                    ((n.headers = r),
                                    t.cookies || delete r.cookie,
                                    t.ip ||
                                      nE.forEach((e) => {
                                        delete r[e];
                                      })),
                                  (n.method = e.method),
                                  t.url && (n.url = e.url),
                                  t.cookies &&
                                    (n.cookies =
                                      e.cookies ||
                                      (r?.cookie
                                        ? (function (e) {
                                            let t = {},
                                              n = 0;
                                            for (; n < e.length; ) {
                                              let r = e.indexOf('=', n);
                                              if (-1 === r) break;
                                              let i = e.indexOf(';', n);
                                              if (-1 === i) i = e.length;
                                              else if (i < r) {
                                                n = e.lastIndexOf(';', r - 1) + 1;
                                                continue;
                                              }
                                              let a = e.slice(n, r).trim();
                                              if (void 0 === t[a]) {
                                                let n = e.slice(r + 1, i).trim();
                                                34 === n.charCodeAt(0) && (n = n.slice(1, -1));
                                                try {
                                                  t[a] =
                                                    -1 !== n.indexOf('%')
                                                      ? decodeURIComponent(n)
                                                      : n;
                                                } catch {
                                                  t[a] = n;
                                                }
                                              }
                                              n = i + 1;
                                            }
                                            return t;
                                          })(r.cookie)
                                        : void 0) ||
                                      {}),
                                  t.query_string && (n.query_string = e.query_string),
                                  t.data && (n.data = e.data),
                                  n
                                );
                              })(t, r),
                            }),
                            r.ip)
                          ) {
                            var i;
                            let r =
                              (t.headers &&
                                ((i = t.headers),
                                nE
                                  .map((e) => {
                                    let t = i[e],
                                      n = Array.isArray(t) ? t.join(';') : t;
                                    return 'Forwarded' === e
                                      ? (function (e) {
                                          if (!e) return null;
                                          for (let t of e.split(';'))
                                            if (t.startsWith('for=')) return t.slice(4);
                                          return null;
                                        })(n)
                                      : n?.split(',').map((e) => e.trim());
                                  })
                                  .reduce((e, t) => (t ? e.concat(t) : e), [])
                                  .find((e) => {
                                    var t;
                                    return (
                                      null !== e &&
                                      ((t = e),
                                      /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(
                                        t
                                      ))
                                    );
                                  }) || null)) ||
                              n.ipAddress;
                            r && (e.user = { ...e.user, ip_address: r });
                          }
                        })(e, a, { ipAddress: o }, s),
                      e
                    );
                  },
                };
              })(),
            ]
          : []),
      ];
    }
    Symbol.toStringTag;
    var aC = e.i(19692);
    let aL = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    async function aM() {
      try {
        (aL && g.log('Flushing events...'), await ne(2e3), aL && g.log('Done flushing events'));
      } catch (e) {
        aL && g.log('Error while flushing events:\n', e);
      }
    }
    let aF = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
    function aB(...e) {
      let t = '',
        n = !1;
      for (let r = e.length - 1; r >= -1 && !n; r--) {
        let i = r >= 0 ? e[r] : '/';
        i && ((t = `${i}/${t}`), (n = '/' === i.charAt(0)));
      }
      return (
        (t = (function (e, t) {
          let n = 0;
          for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            '.' === r
              ? e.splice(t, 1)
              : '..' === r
                ? (e.splice(t, 1), n++)
                : n && (e.splice(t, 1), n--);
          }
          if (t) for (; n--; ) e.unshift('..');
          return e;
        })(
          t.split('/').filter((e) => !!e),
          !n
        ).join('/')),
        (n ? '/' : '') + t || '.'
      );
    }
    function aV(e) {
      let t = 0;
      for (; t < e.length && '' === e[t]; t++);
      let n = e.length - 1;
      for (; n >= 0 && '' === e[n]; n--);
      return t > n ? [] : e.slice(t, n - t + 1);
    }
    function aG(e, t) {
      if (e instanceof Promise) throw Error(t);
    }
    (e.s(
      [
        '$brand',
        () => aK,
        '$input',
        () => cH,
        '$output',
        () => cX,
        'NEVER',
        () => aJ,
        'TimePrecision',
        () => dg,
        'ZodAny',
        () => mp,
        'ZodArray',
        () => mS,
        'ZodBase64',
        () => fF,
        'ZodBase64URL',
        () => fV,
        'ZodBigInt',
        () => mt,
        'ZodBigIntFormat',
        () => mr,
        'ZodBoolean',
        () => f7,
        'ZodCIDRv4',
        () => fR,
        'ZodCIDRv6',
        () => fL,
        'ZodCUID',
        () => fI,
        'ZodCUID2',
        () => fw,
        'ZodCatch',
        () => hn,
        'ZodCodec',
        () => hu,
        'ZodCustom',
        () => hb,
        'ZodCustomStringFormat',
        () => fX,
        'ZodDate',
        () => mb,
        'ZodDefault',
        () => m2,
        'ZodDiscriminatedUnion',
        () => mP,
        'ZodE164',
        () => fJ,
        'ZodEmail',
        () => fu,
        'ZodEmoji',
        () => fb,
        'ZodEnum',
        () => mV,
        'ZodError',
        () => pQ,
        'ZodFile',
        () => mY,
        'ZodFirstPartyTypeKind',
        () => tv,
        'ZodFunction',
        () => h_,
        'ZodGUID',
        () => fc,
        'ZodIPv4',
        () => fD,
        'ZodIPv6',
        () => fj,
        'ZodISODate',
        () => pJ,
        'ZodISODateTime',
        () => pV,
        'ZodISODuration',
        () => pX,
        'ZodISOTime',
        () => pK,
        'ZodIntersection',
        () => mA,
        'ZodIssueCode',
        () => hT,
        'ZodJWT',
        () => fK,
        'ZodKSUID',
        () => fU,
        'ZodLazy',
        () => hm,
        'ZodLiteral',
        () => mW,
        'ZodMap',
        () => mL,
        'ZodNaN',
        () => hi,
        'ZodNanoID',
        () => fS,
        'ZodNever',
        () => mg,
        'ZodNonOptional',
        () => m8,
        'ZodNull',
        () => mc,
        'ZodNullable',
        () => m1,
        'ZodNumber',
        () => f1,
        'ZodNumberFormat',
        () => f6,
        'ZodObject',
        () => mk,
        'ZodOptional',
        () => mQ,
        'ZodPipe',
        () => ho,
        'ZodPrefault',
        () => m3,
        'ZodPromise',
        () => hg,
        'ZodReadonly',
        () => hc,
        'ZodRealError',
        () => p0,
        'ZodRecord',
        () => mZ,
        'ZodSet',
        () => mF,
        'ZodString',
        () => fa,
        'ZodStringFormat',
        () => fs,
        'ZodSuccess',
        () => he,
        'ZodSymbol',
        () => mo,
        'ZodTemplateLiteral',
        () => hp,
        'ZodTransform',
        () => mH,
        'ZodTuple',
        () => mz,
        'ZodType',
        () => fr,
        'ZodULID',
        () => fO,
        'ZodURL',
        () => fv,
        'ZodUUID',
        () => fp,
        'ZodUndefined',
        () => mu,
        'ZodUnion',
        () => mT,
        'ZodUnknown',
        () => mm,
        'ZodVoid',
        () => m_,
        'ZodXID',
        () => fN,
        '_ZodString',
        () => fi,
        '_default',
        () => m9,
        '_function',
        () => hy,
        'any',
        () => mf,
        'array',
        () => mx,
        'base64',
        () => fB,
        'base64url',
        () => fG,
        'bigint',
        () => mn,
        'boolean',
        () => me,
        'catch',
        () => hr,
        'check',
        () => h$,
        'cidrv4',
        () => fC,
        'cidrv6',
        () => fM,
        'clone',
        () => o$,
        'codec',
        () => hl,
        'coerce',
        () => hC,
        'config',
        () => aq,
        'core',
        () => pM,
        'cuid',
        () => fk,
        'cuid2',
        () => fE,
        'custom',
        () => hS,
        'date',
        () => m$,
        'decode',
        () => p3,
        'decodeAsync',
        () => p8,
        'discriminatedUnion',
        () => mU,
        'e164',
        () => fW,
        'email',
        () => fl,
        'emoji',
        () => f$,
        'encode',
        () => p9,
        'encodeAsync',
        () => p5,
        'endsWith',
        () => pe,
        'enum',
        () => mG,
        'file',
        () => mX,
        'flattenError',
        () => o0,
        'float32',
        () => f9,
        'float64',
        () => f3,
        'formatError',
        () => o1,
        'function',
        () => hy,
        'getErrorMap',
        () => hP,
        'globalRegistry',
        () => c0,
        'gt',
        () => dJ,
        'gte',
        () => dW,
        'guid',
        () => fd,
        'hash',
        () => f0,
        'hex',
        () => fQ,
        'hostname',
        () => fq,
        'httpUrl',
        () => fy,
        'includes',
        () => d8,
        'instanceof',
        () => hk,
        'int',
        () => f2,
        'int32',
        () => f5,
        'int64',
        () => mi,
        'intersection',
        () => mD,
        'ipv4',
        () => fz,
        'ipv6',
        () => fZ,
        'iso',
        () => hA,
        'json',
        () => hE,
        'jwt',
        () => fY,
        'keyof',
        () => mI,
        'ksuid',
        () => fA,
        'lazy',
        () => hh,
        'length',
        () => d2,
        'literal',
        () => mK,
        'locales',
        () => hU,
        'looseObject',
        () => mO,
        'lowercase',
        () => d3,
        'lt',
        () => dV,
        'lte',
        () => dG,
        'map',
        () => mM,
        'maxLength',
        () => d4,
        'maxSize',
        () => dQ,
        'mime',
        () => pn,
        'minLength',
        () => d6,
        'minSize',
        () => d0,
        'multipleOf',
        () => dq,
        'nan',
        () => ha,
        'nanoid',
        () => fx,
        'nativeEnum',
        () => mJ,
        'negative',
        () => dY,
        'never',
        () => mv,
        'nonnegative',
        () => dH,
        'nonoptional',
        () => m7,
        'nonpositive',
        () => dX,
        'normalize',
        () => pi,
        'null',
        () => md,
        'nullable',
        () => m4,
        'nullish',
        () => m6,
        'number',
        () => f4,
        'object',
        () => mw,
        'optional',
        () => m0,
        'overwrite',
        () => pr,
        'parse',
        () => p1,
        'parseAsync',
        () => p4,
        'partialRecord',
        () => mC,
        'pipe',
        () => hs,
        'positive',
        () => dK,
        'prefault',
        () => m5,
        'preprocess',
        () => hO,
        'prettifyError',
        () => o2,
        'promise',
        () => hv,
        'property',
        () => pt,
        'readonly',
        () => hd,
        'record',
        () => mR,
        'refine',
        () => hx,
        'regex',
        () => d9,
        'regexes',
        () => pF,
        'registry',
        () => cQ,
        'safeDecode',
        () => fe,
        'safeDecodeAsync',
        () => fn,
        'safeEncode',
        () => p7,
        'safeEncodeAsync',
        () => ft,
        'safeParse',
        () => p6,
        'safeParseAsync',
        () => p2,
        'set',
        () => mB,
        'setErrorMap',
        () => hN,
        'size',
        () => d1,
        'startsWith',
        () => d7,
        'strictObject',
        () => mE,
        'string',
        () => fo,
        'stringFormat',
        () => fH,
        'stringbool',
        () => hw,
        'success',
        () => ht,
        'superRefine',
        () => hI,
        'symbol',
        () => ms,
        'templateLiteral',
        () => hf,
        'toJSONSchema',
        () => pC,
        'toLowerCase',
        () => po,
        'toUpperCase',
        () => ps,
        'transform',
        () => mq,
        'treeifyError',
        () => o4,
        'trim',
        () => pa,
        'tuple',
        () => mj,
        'uint32',
        () => f8,
        'uint64',
        () => ma,
        'ulid',
        () => fT,
        'undefined',
        () => ml,
        'union',
        () => mN,
        'unknown',
        () => mh,
        'uppercase',
        () => d5,
        'url',
        () => f_,
        'util',
        () => pB,
        'uuid',
        () => ff,
        'uuidv4',
        () => fm,
        'uuidv6',
        () => fh,
        'uuidv7',
        () => fg,
        'void',
        () => my,
        'xid',
        () => fP,
      ],
      16752
    ),
      e.s([], 57514),
      e.s(
        [
          '$ZodAsyncError',
          () => aY,
          '$ZodEncodeError',
          () => aX,
          '$brand',
          () => aK,
          '$constructor',
          () => aW,
          'NEVER',
          () => aJ,
          'config',
          () => aq,
          'globalConfig',
          () => aH,
        ],
        56632
      ));
    let aJ = Object.freeze({ status: 'aborted' });
    function aW(e, t, n) {
      function r(n, r) {
        var i;
        for (let a in (Object.defineProperty(n, '_zod', { value: n._zod ?? {}, enumerable: !1 }),
        (i = n._zod).traits ?? (i.traits = new Set()),
        n._zod.traits.add(e),
        t(n, r),
        o.prototype))
          a in n || Object.defineProperty(n, a, { value: o.prototype[a].bind(n) });
        ((n._zod.constr = o), (n._zod.def = r));
      }
      let i = n?.Parent ?? Object;
      class a extends i {}
      function o(e) {
        var t;
        let i = n?.Parent ? new a() : this;
        for (let n of (r(i, e), (t = i._zod).deferred ?? (t.deferred = []), i._zod.deferred)) n();
        return i;
      }
      return (
        Object.defineProperty(a, 'name', { value: e }),
        Object.defineProperty(o, 'init', { value: r }),
        Object.defineProperty(o, Symbol.hasInstance, {
          value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(o, 'name', { value: e }),
        o
      );
    }
    let aK = Symbol('zod_brand');
    class aY extends Error {
      constructor() {
        super('Encountered Promise during synchronous parse. Use .parseAsync() instead.');
      }
    }
    class aX extends Error {
      constructor(e) {
        (super(`Encountered unidirectional transform during encode: ${e}`),
          (this.name = 'ZodEncodeError'));
      }
    }
    let aH = {};
    function aq(e) {
      return (e && Object.assign(aH, e), aH);
    }
    function aQ(e) {
      return e;
    }
    function a0(e) {
      return e;
    }
    function a1(e) {}
    function a4(e) {
      throw Error();
    }
    function a6(e) {}
    function a2(e) {
      let t = Object.values(e).filter((e) => 'number' == typeof e);
      return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
    }
    function a9(e, t = '|') {
      return e.map((e) => oI(e)).join(t);
    }
    function a3(e, t) {
      return 'bigint' == typeof t ? t.toString() : t;
    }
    function a5(e) {
      return {
        get value() {
          {
            let t = e();
            return (Object.defineProperty(this, 'value', { value: t }), t);
          }
        },
      };
    }
    function a8(e) {
      return null == e;
    }
    function a7(e) {
      let t = +!!e.startsWith('^'),
        n = e.endsWith('$') ? e.length - 1 : e.length;
      return e.slice(t, n);
    }
    function oe(e, t) {
      let n = (e.toString().split('.')[1] || '').length,
        r = t.toString(),
        i = (r.split('.')[1] || '').length;
      if (0 === i && /\d?e-\d?/.test(r)) {
        let e = r.match(/\d?e-(\d?)/);
        e?.[1] && (i = Number.parseInt(e[1]));
      }
      let a = n > i ? n : i;
      return (
        (Number.parseInt(e.toFixed(a).replace('.', '')) %
          Number.parseInt(t.toFixed(a).replace('.', ''))) /
        10 ** a
      );
    }
    e.s(
      [
        'BIGINT_FORMAT_RANGES',
        () => oE,
        'Class',
        () => oY,
        'NUMBER_FORMAT_RANGES',
        () => ow,
        'aborted',
        () => oz,
        'allowsEval',
        () => of,
        'assert',
        () => a6,
        'assertEqual',
        () => aQ,
        'assertIs',
        () => a1,
        'assertNever',
        () => a4,
        'assertNotEqual',
        () => a0,
        'assignProp',
        () => oi,
        'base64ToUint8Array',
        () => oB,
        'base64urlToUint8Array',
        () => oG,
        'cached',
        () => a5,
        'captureStackTrace',
        () => od,
        'cleanEnum',
        () => oF,
        'cleanRegex',
        () => a7,
        'clone',
        () => o$,
        'cloneDef',
        () => oo,
        'createTransparentProxy',
        () => ox,
        'defineLazy',
        () => on,
        'esc',
        () => oc,
        'escapeRegex',
        () => ob,
        'extend',
        () => oN,
        'finalizeIssue',
        () => oR,
        'floatSafeRemainder',
        () => oe,
        'getElementAtPath',
        () => os,
        'getEnumValues',
        () => a2,
        'getLengthableOrigin',
        () => oL,
        'getParsedType',
        () => ov,
        'getSizableOrigin',
        () => oC,
        'hexToUint8Array',
        () => oW,
        'isObject',
        () => op,
        'isPlainObject',
        () => om,
        'issue',
        () => oM,
        'joinValues',
        () => a9,
        'jsonStringifyReplacer',
        () => a3,
        'merge',
        () => oU,
        'mergeDefs',
        () => oa,
        'normalizeParams',
        () => oS,
        'nullish',
        () => a8,
        'numKeys',
        () => og,
        'objectClone',
        () => or,
        'omit',
        () => oT,
        'optionalKeys',
        () => ok,
        'partial',
        () => oA,
        'pick',
        () => oO,
        'prefixIssues',
        () => oj,
        'primitiveTypes',
        () => oy,
        'promiseAllObject',
        () => ou,
        'propertyKeyTypes',
        () => o_,
        'randomString',
        () => ol,
        'required',
        () => oD,
        'safeExtend',
        () => oP,
        'shallowClone',
        () => oh,
        'stringifyPrimitive',
        () => oI,
        'uint8ArrayToBase64',
        () => oV,
        'uint8ArrayToBase64url',
        () => oJ,
        'uint8ArrayToHex',
        () => oK,
        'unwrapMessage',
        () => oZ,
      ],
      83086
    );
    let ot = Symbol('evaluating');
    function on(e, t, n) {
      let r;
      Object.defineProperty(e, t, {
        get() {
          if (r !== ot) return (void 0 === r && ((r = ot), (r = n())), r);
        },
        set(n) {
          Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
      });
    }
    function or(e) {
      return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
    }
    function oi(e, t, n) {
      Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
    }
    function oa(...e) {
      let t = {};
      for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
      return Object.defineProperties({}, t);
    }
    function oo(e) {
      return oa(e._zod.def);
    }
    function os(e, t) {
      return t ? t.reduce((e, t) => e?.[t], e) : e;
    }
    function ou(e) {
      let t = Object.keys(e);
      return Promise.all(t.map((t) => e[t])).then((e) => {
        let n = {};
        for (let r = 0; r < t.length; r++) n[t[r]] = e[r];
        return n;
      });
    }
    function ol(e = 10) {
      let t = 'abcdefghijklmnopqrstuvwxyz',
        n = '';
      for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
      return n;
    }
    function oc(e) {
      return JSON.stringify(e);
    }
    let od = 'captureStackTrace' in Error ? Error.captureStackTrace : (...e) => {};
    function op(e) {
      return 'object' == typeof e && null !== e && !Array.isArray(e);
    }
    let of = a5(() => {
      if ('undefined' != typeof navigator && navigator?.userAgent?.includes('Cloudflare'))
        return !1;
      try {
        return (Function(''), !0);
      } catch (e) {
        return !1;
      }
    });
    function om(e) {
      if (!1 === op(e)) return !1;
      let t = e.constructor;
      if (void 0 === t) return !0;
      let n = t.prototype;
      return !1 !== op(n) && !1 !== Object.prototype.hasOwnProperty.call(n, 'isPrototypeOf');
    }
    function oh(e) {
      return om(e) ? { ...e } : e;
    }
    function og(e) {
      let t = 0;
      for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
      return t;
    }
    let ov = (e) => {
        let t = typeof e;
        switch (t) {
          case 'undefined':
            return 'undefined';
          case 'string':
            return 'string';
          case 'number':
            return Number.isNaN(e) ? 'nan' : 'number';
          case 'boolean':
            return 'boolean';
          case 'function':
            return 'function';
          case 'bigint':
            return 'bigint';
          case 'symbol':
            return 'symbol';
          case 'object':
            if (Array.isArray(e)) return 'array';
            if (null === e) return 'null';
            if (e.then && 'function' == typeof e.then && e.catch && 'function' == typeof e.catch)
              return 'promise';
            if ('undefined' != typeof Map && e instanceof Map) return 'map';
            if ('undefined' != typeof Set && e instanceof Set) return 'set';
            if ('undefined' != typeof Date && e instanceof Date) return 'date';
            if ('undefined' != typeof File && e instanceof File) return 'file';
            return 'object';
          default:
            throw Error(`Unknown data type: ${t}`);
        }
      },
      o_ = new Set(['string', 'number', 'symbol']),
      oy = new Set(['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined']);
    function ob(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function o$(e, t, n) {
      let r = new e._zod.constr(t ?? e._zod.def);
      return ((!t || n?.parent) && (r._zod.parent = e), r);
    }
    function oS(e) {
      if (!e) return {};
      if ('string' == typeof e) return { error: () => e };
      if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error('Cannot specify both `message` and `error` params');
        e.error = e.message;
      }
      return (delete e.message, 'string' == typeof e.error) ? { ...e, error: () => e.error } : e;
    }
    function ox(e) {
      let t;
      return new Proxy(
        {},
        {
          get: (n, r, i) => (t ?? (t = e()), Reflect.get(t, r, i)),
          set: (n, r, i, a) => (t ?? (t = e()), Reflect.set(t, r, i, a)),
          has: (n, r) => (t ?? (t = e()), Reflect.has(t, r)),
          deleteProperty: (n, r) => (t ?? (t = e()), Reflect.deleteProperty(t, r)),
          ownKeys: (n) => (t ?? (t = e()), Reflect.ownKeys(t)),
          getOwnPropertyDescriptor: (n, r) => (
            t ?? (t = e()),
            Reflect.getOwnPropertyDescriptor(t, r)
          ),
          defineProperty: (n, r, i) => (t ?? (t = e()), Reflect.defineProperty(t, r, i)),
        }
      );
    }
    function oI(e) {
      return 'bigint' == typeof e ? e.toString() + 'n' : 'string' == typeof e ? `"${e}"` : `${e}`;
    }
    function ok(e) {
      return Object.keys(e).filter(
        (t) => 'optional' === e[t]._zod.optin && 'optional' === e[t]._zod.optout
      );
    }
    let ow = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      oE = {
        int64: [BigInt('-9223372036854775808'), BigInt('9223372036854775807')],
        uint64: [BigInt(0), BigInt('18446744073709551615')],
      };
    function oO(e, t) {
      let n = e._zod.def,
        r = oa(e._zod.def, {
          get shape() {
            let e = {};
            for (let r in t) {
              if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
              t[r] && (e[r] = n.shape[r]);
            }
            return (oi(this, 'shape', e), e);
          },
          checks: [],
        });
      return o$(e, r);
    }
    function oT(e, t) {
      let n = e._zod.def,
        r = oa(e._zod.def, {
          get shape() {
            let r = { ...e._zod.def.shape };
            for (let e in t) {
              if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
              t[e] && delete r[e];
            }
            return (oi(this, 'shape', r), r);
          },
          checks: [],
        });
      return o$(e, r);
    }
    function oN(e, t) {
      if (!om(t)) throw Error('Invalid input to extend: expected a plain object');
      let n = e._zod.def.checks;
      if (n && n.length > 0)
        throw Error(
          'Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.'
        );
      let r = oa(e._zod.def, {
        get shape() {
          let n = { ...e._zod.def.shape, ...t };
          return (oi(this, 'shape', n), n);
        },
        checks: [],
      });
      return o$(e, r);
    }
    function oP(e, t) {
      if (!om(t)) throw Error('Invalid input to safeExtend: expected a plain object');
      let n = {
        ...e._zod.def,
        get shape() {
          let n = { ...e._zod.def.shape, ...t };
          return (oi(this, 'shape', n), n);
        },
        checks: e._zod.def.checks,
      };
      return o$(e, n);
    }
    function oU(e, t) {
      let n = oa(e._zod.def, {
        get shape() {
          let n = { ...e._zod.def.shape, ...t._zod.def.shape };
          return (oi(this, 'shape', n), n);
        },
        get catchall() {
          return t._zod.def.catchall;
        },
        checks: [],
      });
      return o$(e, n);
    }
    function oA(e, t, n) {
      let r = oa(t._zod.def, {
        get shape() {
          let r = t._zod.def.shape,
            i = { ...r };
          if (n)
            for (let t in n) {
              if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
              n[t] && (i[t] = e ? new e({ type: 'optional', innerType: r[t] }) : r[t]);
            }
          else for (let t in r) i[t] = e ? new e({ type: 'optional', innerType: r[t] }) : r[t];
          return (oi(this, 'shape', i), i);
        },
        checks: [],
      });
      return o$(t, r);
    }
    function oD(e, t, n) {
      let r = oa(t._zod.def, {
        get shape() {
          let r = t._zod.def.shape,
            i = { ...r };
          if (n)
            for (let t in n) {
              if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
              n[t] && (i[t] = new e({ type: 'nonoptional', innerType: r[t] }));
            }
          else for (let t in r) i[t] = new e({ type: 'nonoptional', innerType: r[t] });
          return (oi(this, 'shape', i), i);
        },
        checks: [],
      });
      return o$(t, r);
    }
    function oz(e, t = 0) {
      if (!0 === e.aborted) return !0;
      for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
      return !1;
    }
    function oj(e, t) {
      return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
    }
    function oZ(e) {
      return 'string' == typeof e ? e : e?.message;
    }
    function oR(e, t, n) {
      let r = { ...e, path: e.path ?? [] };
      return (
        e.message ||
          (r.message =
            oZ(e.inst?._zod.def?.error?.(e)) ??
            oZ(t?.error?.(e)) ??
            oZ(n.customError?.(e)) ??
            oZ(n.localeError?.(e)) ??
            'Invalid input'),
        delete r.inst,
        delete r.continue,
        t?.reportInput || delete r.input,
        r
      );
    }
    function oC(e) {
      return e instanceof Set
        ? 'set'
        : e instanceof Map
          ? 'map'
          : e instanceof File
            ? 'file'
            : 'unknown';
    }
    function oL(e) {
      return Array.isArray(e) ? 'array' : 'string' == typeof e ? 'string' : 'unknown';
    }
    function oM(...e) {
      let [t, n, r] = e;
      return 'string' == typeof t ? { message: t, code: 'custom', input: n, inst: r } : { ...t };
    }
    function oF(e) {
      return Object.entries(e)
        .filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10)))
        .map((e) => e[1]);
    }
    function oB(e) {
      let t = atob(e),
        n = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
      return n;
    }
    function oV(e) {
      let t = '';
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return btoa(t);
    }
    function oG(e) {
      let t = e.replace(/-/g, '+').replace(/_/g, '/'),
        n = '='.repeat((4 - (t.length % 4)) % 4);
      return oB(t + n);
    }
    function oJ(e) {
      return oV(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    function oW(e) {
      let t = e.replace(/^0x/, '');
      if (t.length % 2 != 0) throw Error('Invalid hex string length');
      let n = new Uint8Array(t.length / 2);
      for (let e = 0; e < t.length; e += 2) n[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
      return n;
    }
    function oK(e) {
      return Array.from(e)
        .map((e) => e.toString(16).padStart(2, '0'))
        .join('');
    }
    class oY {
      constructor(...e) {}
    }
    function oX() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'characters', verb: 'to have' },
              file: { unit: 'bytes', verb: 'to have' },
              array: { unit: 'items', verb: 'to have' },
              set: { unit: 'items', verb: 'to have' },
            },
            t = {
              regex: 'input',
              email: 'email address',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO datetime',
              date: 'ISO date',
              time: 'ISO time',
              duration: 'ISO duration',
              ipv4: 'IPv4 address',
              ipv6: 'IPv6 address',
              cidrv4: 'IPv4 range',
              cidrv6: 'IPv6 range',
              base64: 'base64-encoded string',
              base64url: 'base64url-encoded string',
              json_string: 'JSON string',
              e164: 'E.164 number',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Invalid input: expected ${n.expected}, received ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Invalid input: expected ${oI(n.values[0])}`;
                return `Invalid option: expected one of ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Too big: expected ${n.origin ?? 'value'} to have ${t}${n.maximum.toString()} ${r.unit ?? 'elements'}`;
                return `Too big: expected ${n.origin ?? 'value'} to be ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Too small: expected ${n.origin} to have ${t}${n.minimum.toString()} ${r.unit}`;
                return `Too small: expected ${n.origin} to be ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Invalid string: must start with "${n.prefix}"`;
                if ('ends_with' === n.format) return `Invalid string: must end with "${n.suffix}"`;
                if ('includes' === n.format) return `Invalid string: must include "${n.includes}"`;
                if ('regex' === n.format) return `Invalid string: must match pattern ${n.pattern}`;
                return `Invalid ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Invalid number: must be a multiple of ${n.divisor}`;
              case 'unrecognized_keys':
                return `Unrecognized key${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Invalid key in ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Invalid input';
              case 'invalid_element':
                return `Invalid value in ${n.origin}`;
            }
          };
        })(),
      };
    }
    (aq(oX()),
      e.i(57514),
      e.s(
        [
          '$ZodAny',
          () => lg,
          '$ZodArray',
          () => lS,
          '$ZodAsyncError',
          () => aY,
          '$ZodBase64',
          () => lt,
          '$ZodBase64URL',
          () => lr,
          '$ZodBigInt',
          () => ld,
          '$ZodBigIntFormat',
          () => lp,
          '$ZodBoolean',
          () => lc,
          '$ZodCIDRv4',
          () => u8,
          '$ZodCIDRv6',
          () => u7,
          '$ZodCUID',
          () => uH,
          '$ZodCUID2',
          () => uq,
          '$ZodCatch',
          () => lQ,
          '$ZodCheck',
          () => ug,
          '$ZodCheckBigIntFormat',
          () => uS,
          '$ZodCheckEndsWith',
          () => uz,
          '$ZodCheckGreaterThan',
          () => uy,
          '$ZodCheckIncludes',
          () => uA,
          '$ZodCheckLengthEquals',
          () => uO,
          '$ZodCheckLessThan',
          () => u_,
          '$ZodCheckLowerCase',
          () => uP,
          '$ZodCheckMaxLength',
          () => uw,
          '$ZodCheckMaxSize',
          () => ux,
          '$ZodCheckMimeType',
          () => uR,
          '$ZodCheckMinLength',
          () => uE,
          '$ZodCheckMinSize',
          () => uI,
          '$ZodCheckMultipleOf',
          () => ub,
          '$ZodCheckNumberFormat',
          () => u$,
          '$ZodCheckOverwrite',
          () => uC,
          '$ZodCheckProperty',
          () => uZ,
          '$ZodCheckRegex',
          () => uN,
          '$ZodCheckSizeEquals',
          () => uk,
          '$ZodCheckStartsWith',
          () => uD,
          '$ZodCheckStringFormat',
          () => uT,
          '$ZodCheckUpperCase',
          () => uU,
          '$ZodCodec',
          () => l6,
          '$ZodCustom',
          () => cn,
          '$ZodCustomStringFormat',
          () => ls,
          '$ZodDate',
          () => lb,
          '$ZodDefault',
          () => lW,
          '$ZodDiscriminatedUnion',
          () => lN,
          '$ZodE164',
          () => li,
          '$ZodEmail',
          () => uW,
          '$ZodEmoji',
          () => uY,
          '$ZodEncodeError',
          () => aX,
          '$ZodEnum',
          () => lL,
          '$ZodError',
          () => oq,
          '$ZodFile',
          () => lF,
          '$ZodFunction',
          () => l7,
          '$ZodGUID',
          () => uG,
          '$ZodIPv4',
          () => u3,
          '$ZodIPv6',
          () => u5,
          '$ZodISODate',
          () => u6,
          '$ZodISODateTime',
          () => u4,
          '$ZodISODuration',
          () => u9,
          '$ZodISOTime',
          () => u2,
          '$ZodIntersection',
          () => lP,
          '$ZodJWT',
          () => lo,
          '$ZodKSUID',
          () => u1,
          '$ZodLazy',
          () => ct,
          '$ZodLiteral',
          () => lM,
          '$ZodMap',
          () => lj,
          '$ZodNaN',
          () => l0,
          '$ZodNanoID',
          () => uX,
          '$ZodNever',
          () => l_,
          '$ZodNonOptional',
          () => lX,
          '$ZodNull',
          () => lh,
          '$ZodNullable',
          () => lJ,
          '$ZodNumber',
          () => lu,
          '$ZodNumberFormat',
          () => ll,
          '$ZodObject',
          () => lw,
          '$ZodObjectJIT',
          () => lE,
          '$ZodOptional',
          () => lG,
          '$ZodPipe',
          () => l1,
          '$ZodPrefault',
          () => lY,
          '$ZodPromise',
          () => ce,
          '$ZodReadonly',
          () => l3,
          '$ZodRealError',
          () => oQ,
          '$ZodRecord',
          () => lz,
          '$ZodRegistry',
          () => cq,
          '$ZodSet',
          () => lR,
          '$ZodString',
          () => uB,
          '$ZodStringFormat',
          () => uV,
          '$ZodSuccess',
          () => lq,
          '$ZodSymbol',
          () => lf,
          '$ZodTemplateLiteral',
          () => l8,
          '$ZodTransform',
          () => lB,
          '$ZodTuple',
          () => lA,
          '$ZodType',
          () => uF,
          '$ZodULID',
          () => uQ,
          '$ZodURL',
          () => uK,
          '$ZodUUID',
          () => uJ,
          '$ZodUndefined',
          () => lm,
          '$ZodUnion',
          () => lT,
          '$ZodUnknown',
          () => lv,
          '$ZodVoid',
          () => ly,
          '$ZodXID',
          () => u0,
          '$brand',
          () => aK,
          '$constructor',
          () => aW,
          '$input',
          () => cH,
          '$output',
          () => cX,
          'Doc',
          () => uL,
          'JSONSchema',
          () => pL,
          'JSONSchemaGenerator',
          () => pR,
          'NEVER',
          () => aJ,
          'TimePrecision',
          () => dg,
          '_any',
          () => dZ,
          '_array',
          () => pu,
          '_base64',
          () => dp,
          '_base64url',
          () => df,
          '_bigint',
          () => dN,
          '_boolean',
          () => dO,
          '_catch',
          () => pw,
          '_check',
          () => pz,
          '_cidrv4',
          () => dc,
          '_cidrv6',
          () => dd,
          '_coercedBigint',
          () => dP,
          '_coercedBoolean',
          () => dT,
          '_coercedDate',
          () => dF,
          '_coercedNumber',
          () => dS,
          '_coercedString',
          () => c4,
          '_cuid',
          () => dn,
          '_cuid2',
          () => dr,
          '_custom',
          () => pU,
          '_date',
          () => dM,
          '_decode',
          () => sa,
          '_decodeAsync',
          () => sl,
          '_default',
          () => px,
          '_discriminatedUnion',
          () => pc,
          '_e164',
          () => dm,
          '_email',
          () => c6,
          '_emoji',
          () => de,
          '_encode',
          () => sr,
          '_encodeAsync',
          () => ss,
          '_endsWith',
          () => pe,
          '_enum',
          () => pg,
          '_file',
          () => py,
          '_float32',
          () => dI,
          '_float64',
          () => dk,
          '_gt',
          () => dJ,
          '_gte',
          () => dW,
          '_guid',
          () => c2,
          '_includes',
          () => d8,
          '_int',
          () => dx,
          '_int32',
          () => dw,
          '_int64',
          () => dU,
          '_intersection',
          () => pd,
          '_ipv4',
          () => du,
          '_ipv6',
          () => dl,
          '_isoDate',
          () => d_,
          '_isoDateTime',
          () => dv,
          '_isoDuration',
          () => db,
          '_isoTime',
          () => dy,
          '_jwt',
          () => dh,
          '_ksuid',
          () => ds,
          '_lazy',
          () => pN,
          '_length',
          () => d2,
          '_literal',
          () => p_,
          '_lowercase',
          () => d3,
          '_lt',
          () => dV,
          '_lte',
          () => dG,
          '_map',
          () => pm,
          '_max',
          () => dG,
          '_maxLength',
          () => d4,
          '_maxSize',
          () => dQ,
          '_mime',
          () => pn,
          '_min',
          () => dW,
          '_minLength',
          () => d6,
          '_minSize',
          () => d0,
          '_multipleOf',
          () => dq,
          '_nan',
          () => dB,
          '_nanoid',
          () => dt,
          '_nativeEnum',
          () => pv,
          '_negative',
          () => dY,
          '_never',
          () => dC,
          '_nonnegative',
          () => dH,
          '_nonoptional',
          () => pI,
          '_nonpositive',
          () => dX,
          '_normalize',
          () => pi,
          '_null',
          () => dj,
          '_nullable',
          () => pS,
          '_number',
          () => d$,
          '_optional',
          () => p$,
          '_overwrite',
          () => pr,
          '_parse',
          () => o9,
          '_parseAsync',
          () => o5,
          '_pipe',
          () => pE,
          '_positive',
          () => dK,
          '_promise',
          () => pP,
          '_property',
          () => pt,
          '_readonly',
          () => pO,
          '_record',
          () => pf,
          '_refine',
          () => pA,
          '_regex',
          () => d9,
          '_safeDecode',
          () => sf,
          '_safeDecodeAsync',
          () => sv,
          '_safeEncode',
          () => sd,
          '_safeEncodeAsync',
          () => sh,
          '_safeParse',
          () => o7,
          '_safeParseAsync',
          () => st,
          '_set',
          () => ph,
          '_size',
          () => d1,
          '_startsWith',
          () => d7,
          '_string',
          () => c1,
          '_stringFormat',
          () => pZ,
          '_stringbool',
          () => pj,
          '_success',
          () => pk,
          '_superRefine',
          () => pD,
          '_symbol',
          () => dD,
          '_templateLiteral',
          () => pT,
          '_toLowerCase',
          () => po,
          '_toUpperCase',
          () => ps,
          '_transform',
          () => pb,
          '_trim',
          () => pa,
          '_tuple',
          () => pp,
          '_uint32',
          () => dE,
          '_uint64',
          () => dA,
          '_ulid',
          () => di,
          '_undefined',
          () => dz,
          '_union',
          () => pl,
          '_unknown',
          () => dR,
          '_uppercase',
          () => d5,
          '_url',
          () => c7,
          '_uuid',
          () => c9,
          '_uuidv4',
          () => c3,
          '_uuidv6',
          () => c5,
          '_uuidv7',
          () => c8,
          '_void',
          () => dL,
          '_xid',
          () => da,
          'clone',
          () => o$,
          'config',
          () => aq,
          'decode',
          () => so,
          'decodeAsync',
          () => sc,
          'encode',
          () => si,
          'encodeAsync',
          () => su,
          'flattenError',
          () => o0,
          'formatError',
          () => o1,
          'globalConfig',
          () => aH,
          'globalRegistry',
          () => c0,
          'isValidBase64',
          () => le,
          'isValidBase64URL',
          () => ln,
          'isValidJWT',
          () => la,
          'locales',
          () => cY,
          'parse',
          () => o3,
          'parseAsync',
          () => o8,
          'prettifyError',
          () => o2,
          'regexes',
          () => ca,
          'registry',
          () => cQ,
          'safeDecode',
          () => sm,
          'safeDecodeAsync',
          () => s_,
          'safeEncode',
          () => sp,
          'safeEncodeAsync',
          () => sg,
          'safeParse',
          () => se,
          'safeParseAsync',
          () => sn,
          'toDotPath',
          () => o6,
          'toJSONSchema',
          () => pC,
          'treeifyError',
          () => o4,
          'util',
          () => ci,
          'version',
          () => uM,
        ],
        11952
      ),
      e.s([], 84380),
      e.i(84380),
      e.i(56632),
      e.s(
        [
          '_decode',
          () => sa,
          '_decodeAsync',
          () => sl,
          '_encode',
          () => sr,
          '_encodeAsync',
          () => ss,
          '_parse',
          () => o9,
          '_parseAsync',
          () => o5,
          '_safeDecode',
          () => sf,
          '_safeDecodeAsync',
          () => sv,
          '_safeEncode',
          () => sd,
          '_safeEncodeAsync',
          () => sh,
          '_safeParse',
          () => o7,
          '_safeParseAsync',
          () => st,
          'decode',
          () => so,
          'decodeAsync',
          () => sc,
          'encode',
          () => si,
          'encodeAsync',
          () => su,
          'parse',
          () => o3,
          'parseAsync',
          () => o8,
          'safeDecode',
          () => sm,
          'safeDecodeAsync',
          () => s_,
          'safeEncode',
          () => sp,
          'safeEncodeAsync',
          () => sg,
          'safeParse',
          () => se,
          'safeParseAsync',
          () => sn,
        ],
        1466
      ),
      e.s(
        [
          '$ZodError',
          () => oq,
          '$ZodRealError',
          () => oQ,
          'flattenError',
          () => o0,
          'formatError',
          () => o1,
          'prettifyError',
          () => o2,
          'toDotPath',
          () => o6,
          'treeifyError',
          () => o4,
        ],
        94098
      ));
    let oH = (e, t) => {
        ((e.name = '$ZodError'),
          Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, a3, 2)),
          Object.defineProperty(e, 'toString', { value: () => e.message, enumerable: !1 }));
      },
      oq = aW('$ZodError', oH),
      oQ = aW('$ZodError', oH, { Parent: Error });
    function o0(e, t = (e) => e.message) {
      let n = {},
        r = [];
      for (let i of e.issues)
        i.path.length > 0
          ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
          : r.push(t(i));
      return { formErrors: r, fieldErrors: n };
    }
    function o1(e, t) {
      let n =
          t ||
          function (e) {
            return e.message;
          },
        r = { _errors: [] },
        i = (e) => {
          for (let t of e.issues)
            if ('invalid_union' === t.code && t.errors.length)
              t.errors.map((e) => i({ issues: e }));
            else if ('invalid_key' === t.code) i({ issues: t.issues });
            else if ('invalid_element' === t.code) i({ issues: t.issues });
            else if (0 === t.path.length) r._errors.push(n(t));
            else {
              let e = r,
                i = 0;
              for (; i < t.path.length; ) {
                let r = t.path[i];
                (i === t.path.length - 1
                  ? ((e[r] = e[r] || { _errors: [] }), e[r]._errors.push(n(t)))
                  : (e[r] = e[r] || { _errors: [] }),
                  (e = e[r]),
                  i++);
              }
            }
        };
      return (i(e), r);
    }
    function o4(e, t) {
      let n =
          t ||
          function (e) {
            return e.message;
          },
        r = { errors: [] },
        i = (e, t = []) => {
          var a, o;
          for (let s of e.issues)
            if ('invalid_union' === s.code && s.errors.length)
              s.errors.map((e) => i({ issues: e }, s.path));
            else if ('invalid_key' === s.code) i({ issues: s.issues }, s.path);
            else if ('invalid_element' === s.code) i({ issues: s.issues }, s.path);
            else {
              let e = [...t, ...s.path];
              if (0 === e.length) {
                r.errors.push(n(s));
                continue;
              }
              let i = r,
                u = 0;
              for (; u < e.length; ) {
                let t = e[u],
                  r = u === e.length - 1;
                ('string' == typeof t
                  ? (i.properties ?? (i.properties = {}),
                    (a = i.properties)[t] ?? (a[t] = { errors: [] }),
                    (i = i.properties[t]))
                  : (i.items ?? (i.items = []),
                    (o = i.items)[t] ?? (o[t] = { errors: [] }),
                    (i = i.items[t])),
                  r && i.errors.push(n(s)),
                  u++);
              }
            }
        };
      return (i(e), r);
    }
    function o6(e) {
      let t = [];
      for (let n of e.map((e) => ('object' == typeof e ? e.key : e)))
        'number' == typeof n
          ? t.push(`[${n}]`)
          : 'symbol' == typeof n
            ? t.push(`[${JSON.stringify(String(n))}]`)
            : /[^\w$]/.test(n)
              ? t.push(`[${JSON.stringify(n)}]`)
              : (t.length && t.push('.'), t.push(n));
      return t.join('');
    }
    function o2(e) {
      let t = [];
      for (let n of [...e.issues].sort((e, t) => (e.path ?? []).length - (t.path ?? []).length))
        (t.push(`✖ ${n.message}`), n.path?.length && t.push(`  → at ${o6(n.path)}`));
      return t.join('\n');
    }
    let o9 = (e) => (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !1 }) : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new aY();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => oR(e, a, aq())));
          throw (od(t, i?.callee), t);
        }
        return o.value;
      },
      o3 = o9(oQ),
      o5 = (e) => async (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => oR(e, a, aq())));
          throw (od(t, i?.callee), t);
        }
        return o.value;
      },
      o8 = o5(oQ),
      o7 = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new aY();
        return a.issues.length
          ? { success: !1, error: new (e ?? oq)(a.issues.map((e) => oR(e, i, aq()))) }
          : { success: !0, data: a.value };
      },
      se = o7(oQ),
      st = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => oR(e, i, aq()))) }
            : { success: !0, data: a.value }
        );
      },
      sn = st(oQ),
      sr = (e) => (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return o9(e)(t, n, i);
      },
      si = sr(oQ),
      sa = (e) => (t, n, r) => o9(e)(t, n, r),
      so = sa(oQ),
      ss = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return o5(e)(t, n, i);
      },
      su = ss(oQ),
      sl = (e) => async (t, n, r) => o5(e)(t, n, r),
      sc = sl(oQ),
      sd = (e) => (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return o7(e)(t, n, i);
      },
      sp = sd(oQ),
      sf = (e) => (t, n, r) => o7(e)(t, n, r),
      sm = sf(oQ),
      sh = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return st(e)(t, n, i);
      },
      sg = sh(oQ),
      sv = (e) => async (t, n, r) => st(e)(t, n, r),
      s_ = sv(oQ);
    (e.i(1466),
      e.i(94098),
      e.s(
        [
          '$ZodAny',
          () => lg,
          '$ZodArray',
          () => lS,
          '$ZodBase64',
          () => lt,
          '$ZodBase64URL',
          () => lr,
          '$ZodBigInt',
          () => ld,
          '$ZodBigIntFormat',
          () => lp,
          '$ZodBoolean',
          () => lc,
          '$ZodCIDRv4',
          () => u8,
          '$ZodCIDRv6',
          () => u7,
          '$ZodCUID',
          () => uH,
          '$ZodCUID2',
          () => uq,
          '$ZodCatch',
          () => lQ,
          '$ZodCodec',
          () => l6,
          '$ZodCustom',
          () => cn,
          '$ZodCustomStringFormat',
          () => ls,
          '$ZodDate',
          () => lb,
          '$ZodDefault',
          () => lW,
          '$ZodDiscriminatedUnion',
          () => lN,
          '$ZodE164',
          () => li,
          '$ZodEmail',
          () => uW,
          '$ZodEmoji',
          () => uY,
          '$ZodEnum',
          () => lL,
          '$ZodFile',
          () => lF,
          '$ZodFunction',
          () => l7,
          '$ZodGUID',
          () => uG,
          '$ZodIPv4',
          () => u3,
          '$ZodIPv6',
          () => u5,
          '$ZodISODate',
          () => u6,
          '$ZodISODateTime',
          () => u4,
          '$ZodISODuration',
          () => u9,
          '$ZodISOTime',
          () => u2,
          '$ZodIntersection',
          () => lP,
          '$ZodJWT',
          () => lo,
          '$ZodKSUID',
          () => u1,
          '$ZodLazy',
          () => ct,
          '$ZodLiteral',
          () => lM,
          '$ZodMap',
          () => lj,
          '$ZodNaN',
          () => l0,
          '$ZodNanoID',
          () => uX,
          '$ZodNever',
          () => l_,
          '$ZodNonOptional',
          () => lX,
          '$ZodNull',
          () => lh,
          '$ZodNullable',
          () => lJ,
          '$ZodNumber',
          () => lu,
          '$ZodNumberFormat',
          () => ll,
          '$ZodObject',
          () => lw,
          '$ZodObjectJIT',
          () => lE,
          '$ZodOptional',
          () => lG,
          '$ZodPipe',
          () => l1,
          '$ZodPrefault',
          () => lY,
          '$ZodPromise',
          () => ce,
          '$ZodReadonly',
          () => l3,
          '$ZodRecord',
          () => lz,
          '$ZodSet',
          () => lR,
          '$ZodString',
          () => uB,
          '$ZodStringFormat',
          () => uV,
          '$ZodSuccess',
          () => lq,
          '$ZodSymbol',
          () => lf,
          '$ZodTemplateLiteral',
          () => l8,
          '$ZodTransform',
          () => lB,
          '$ZodTuple',
          () => lA,
          '$ZodType',
          () => uF,
          '$ZodULID',
          () => uQ,
          '$ZodURL',
          () => uK,
          '$ZodUUID',
          () => uJ,
          '$ZodUndefined',
          () => lm,
          '$ZodUnion',
          () => lT,
          '$ZodUnknown',
          () => lv,
          '$ZodVoid',
          () => ly,
          '$ZodXID',
          () => u0,
          'clone',
          () => o$,
          'isValidBase64',
          () => le,
          'isValidBase64URL',
          () => ln,
          'isValidJWT',
          () => la,
        ],
        54098
      ),
      e.s(
        [
          '$ZodAny',
          () => lg,
          '$ZodArray',
          () => lS,
          '$ZodBase64',
          () => lt,
          '$ZodBase64URL',
          () => lr,
          '$ZodBigInt',
          () => ld,
          '$ZodBigIntFormat',
          () => lp,
          '$ZodBoolean',
          () => lc,
          '$ZodCIDRv4',
          () => u8,
          '$ZodCIDRv6',
          () => u7,
          '$ZodCUID',
          () => uH,
          '$ZodCUID2',
          () => uq,
          '$ZodCatch',
          () => lQ,
          '$ZodCodec',
          () => l6,
          '$ZodCustom',
          () => cn,
          '$ZodCustomStringFormat',
          () => ls,
          '$ZodDate',
          () => lb,
          '$ZodDefault',
          () => lW,
          '$ZodDiscriminatedUnion',
          () => lN,
          '$ZodE164',
          () => li,
          '$ZodEmail',
          () => uW,
          '$ZodEmoji',
          () => uY,
          '$ZodEnum',
          () => lL,
          '$ZodFile',
          () => lF,
          '$ZodFunction',
          () => l7,
          '$ZodGUID',
          () => uG,
          '$ZodIPv4',
          () => u3,
          '$ZodIPv6',
          () => u5,
          '$ZodISODate',
          () => u6,
          '$ZodISODateTime',
          () => u4,
          '$ZodISODuration',
          () => u9,
          '$ZodISOTime',
          () => u2,
          '$ZodIntersection',
          () => lP,
          '$ZodJWT',
          () => lo,
          '$ZodKSUID',
          () => u1,
          '$ZodLazy',
          () => ct,
          '$ZodLiteral',
          () => lM,
          '$ZodMap',
          () => lj,
          '$ZodNaN',
          () => l0,
          '$ZodNanoID',
          () => uX,
          '$ZodNever',
          () => l_,
          '$ZodNonOptional',
          () => lX,
          '$ZodNull',
          () => lh,
          '$ZodNullable',
          () => lJ,
          '$ZodNumber',
          () => lu,
          '$ZodNumberFormat',
          () => ll,
          '$ZodObject',
          () => lw,
          '$ZodObjectJIT',
          () => lE,
          '$ZodOptional',
          () => lG,
          '$ZodPipe',
          () => l1,
          '$ZodPrefault',
          () => lY,
          '$ZodPromise',
          () => ce,
          '$ZodReadonly',
          () => l3,
          '$ZodRecord',
          () => lz,
          '$ZodSet',
          () => lR,
          '$ZodString',
          () => uB,
          '$ZodStringFormat',
          () => uV,
          '$ZodSuccess',
          () => lq,
          '$ZodSymbol',
          () => lf,
          '$ZodTemplateLiteral',
          () => l8,
          '$ZodTransform',
          () => lB,
          '$ZodTuple',
          () => lA,
          '$ZodType',
          () => uF,
          '$ZodULID',
          () => uQ,
          '$ZodURL',
          () => uK,
          '$ZodUUID',
          () => uJ,
          '$ZodUndefined',
          () => lm,
          '$ZodUnion',
          () => lT,
          '$ZodUnknown',
          () => lv,
          '$ZodVoid',
          () => ly,
          '$ZodXID',
          () => u0,
          'isValidBase64',
          () => le,
          'isValidBase64URL',
          () => ln,
          'isValidJWT',
          () => la,
        ],
        15320
      ),
      e.s(
        [
          '$ZodCheck',
          () => ug,
          '$ZodCheckBigIntFormat',
          () => uS,
          '$ZodCheckEndsWith',
          () => uz,
          '$ZodCheckGreaterThan',
          () => uy,
          '$ZodCheckIncludes',
          () => uA,
          '$ZodCheckLengthEquals',
          () => uO,
          '$ZodCheckLessThan',
          () => u_,
          '$ZodCheckLowerCase',
          () => uP,
          '$ZodCheckMaxLength',
          () => uw,
          '$ZodCheckMaxSize',
          () => ux,
          '$ZodCheckMimeType',
          () => uR,
          '$ZodCheckMinLength',
          () => uE,
          '$ZodCheckMinSize',
          () => uI,
          '$ZodCheckMultipleOf',
          () => ub,
          '$ZodCheckNumberFormat',
          () => u$,
          '$ZodCheckOverwrite',
          () => uC,
          '$ZodCheckProperty',
          () => uZ,
          '$ZodCheckRegex',
          () => uN,
          '$ZodCheckSizeEquals',
          () => uk,
          '$ZodCheckStartsWith',
          () => uD,
          '$ZodCheckStringFormat',
          () => uT,
          '$ZodCheckUpperCase',
          () => uU,
        ],
        35870
      ),
      e.s(
        [
          'base64',
          () => sB,
          'base64url',
          () => sV,
          'bigint',
          () => s0,
          'boolean',
          () => s6,
          'browserEmail',
          () => sZ,
          'cidrv4',
          () => sM,
          'cidrv6',
          () => sF,
          'cuid',
          () => sy,
          'cuid2',
          () => sb,
          'date',
          () => sY,
          'datetime',
          () => sq,
          'domain',
          () => sJ,
          'duration',
          () => sk,
          'e164',
          () => sW,
          'email',
          () => sU,
          'emoji',
          () => sR,
          'extendedDuration',
          () => sw,
          'guid',
          () => sE,
          'hex',
          () => s8,
          'hostname',
          () => sG,
          'html5Email',
          () => sA,
          'idnEmail',
          () => sj,
          'integer',
          () => s1,
          'ipv4',
          () => sC,
          'ipv6',
          () => sL,
          'ksuid',
          () => sx,
          'lowercase',
          () => s3,
          'md5_base64',
          () => un,
          'md5_base64url',
          () => ur,
          'md5_hex',
          () => ut,
          'nanoid',
          () => sI,
          'null',
          () => s2,
          'number',
          () => s4,
          'rfc5322Email',
          () => sD,
          'sha1_base64',
          () => ua,
          'sha1_base64url',
          () => uo,
          'sha1_hex',
          () => ui,
          'sha256_base64',
          () => uu,
          'sha256_base64url',
          () => ul,
          'sha256_hex',
          () => us,
          'sha384_base64',
          () => ud,
          'sha384_base64url',
          () => up,
          'sha384_hex',
          () => uc,
          'sha512_base64',
          () => um,
          'sha512_base64url',
          () => uh,
          'sha512_hex',
          () => uf,
          'string',
          () => sQ,
          'time',
          () => sH,
          'ulid',
          () => s$,
          'undefined',
          () => s9,
          'unicodeEmail',
          () => sz,
          'uppercase',
          () => s5,
          'uuid',
          () => sO,
          'uuid4',
          () => sT,
          'uuid6',
          () => sN,
          'uuid7',
          () => sP,
          'xid',
          () => sS,
        ],
        9054
      ));
    let sy = /^[cC][^\s-]{8,}$/,
      sb = /^[0-9a-z]+$/,
      s$ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
      sS = /^[0-9a-vA-V]{20}$/,
      sx = /^[A-Za-z0-9]{27}$/,
      sI = /^[a-zA-Z0-9_-]{21}$/,
      sk =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      sw =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
      sE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      sO = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      sT = sO(4),
      sN = sO(6),
      sP = sO(7),
      sU =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      sA =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      sD =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      sz = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      sj = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      sZ =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    function sR() {
      return RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u');
    }
    let sC =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      sL =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
      sM =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      sF =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      sB = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      sV = /^[A-Za-z0-9_-]*$/,
      sG =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
      sJ = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      sW = /^\+(?:[0-9]){6,14}[0-9]$/,
      sK =
        '(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))',
      sY = RegExp(`^${sK}$`);
    function sX(e) {
      let t = '(?:[01]\\d|2[0-3]):[0-5]\\d';
      return 'number' == typeof e.precision
        ? -1 === e.precision
          ? `${t}`
          : 0 === e.precision
            ? `${t}:[0-5]\\d`
            : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function sH(e) {
      return RegExp(`^${sX(e)}$`);
    }
    function sq(e) {
      let t = sX({ precision: e.precision }),
        n = ['Z'];
      (e.local && n.push(''), e.offset && n.push('([+-](?:[01]\\d|2[0-3]):[0-5]\\d)'));
      let r = `${t}(?:${n.join('|')})`;
      return RegExp(`^${sK}T(?:${r})$`);
    }
    let sQ = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ''}}` : '[\\s\\S]*';
        return RegExp(`^${t}$`);
      },
      s0 = /^\d+n?$/,
      s1 = /^\d+$/,
      s4 = /^-?\d+(?:\.\d+)?/i,
      s6 = /true|false/i,
      s2 = /null/i,
      s9 = /undefined/i,
      s3 = /^[^A-Z]*$/,
      s5 = /^[^a-z]*$/,
      s8 = /^[0-9a-fA-F]*$/;
    function s7(e, t) {
      return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
    }
    function ue(e) {
      return RegExp(`^[A-Za-z0-9-_]{${e}}$`);
    }
    let ut = /^[0-9a-fA-F]{32}$/,
      un = s7(22, '=='),
      ur = ue(22),
      ui = /^[0-9a-fA-F]{40}$/,
      ua = s7(27, '='),
      uo = ue(27),
      us = /^[0-9a-fA-F]{64}$/,
      uu = s7(43, '='),
      ul = ue(43),
      uc = /^[0-9a-fA-F]{96}$/,
      ud = s7(64, ''),
      up = ue(64),
      uf = /^[0-9a-fA-F]{128}$/,
      um = s7(86, '=='),
      uh = ue(86),
      ug = aW('$ZodCheck', (e, t) => {
        var n;
        (e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
      }),
      uv = { number: 'number', bigint: 'bigint', object: 'date' },
      u_ = aW('$ZodCheckLessThan', (e, t) => {
        ug.init(e, t);
        let n = uv[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
          t.value < r && (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value <= t.value : r.value < t.value) ||
              r.issues.push({
                origin: n,
                code: 'too_big',
                maximum: t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uy = aW('$ZodCheckGreaterThan', (e, t) => {
        ug.init(e, t);
        let n = uv[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
          t.value > r && (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value >= t.value : r.value > t.value) ||
              r.issues.push({
                origin: n,
                code: 'too_small',
                minimum: t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      ub = aW('$ZodCheckMultipleOf', (e, t) => {
        (ug.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error('Cannot mix number and bigint in multiple_of check.');
            ('bigint' == typeof n.value
              ? n.value % t.value === BigInt(0)
              : 0 === oe(n.value, t.value)) ||
              n.issues.push({
                origin: typeof n.value,
                code: 'not_multiple_of',
                divisor: t.value,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      u$ = aW('$ZodCheckNumberFormat', (e, t) => {
        (ug.init(e, t), (t.format = t.format || 'float64'));
        let n = t.format?.includes('int'),
          r = n ? 'int' : 'number',
          [i, a] = ow[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = s1));
        }),
          (e._zod.check = (o) => {
            let s = o.value;
            if (n) {
              if (!Number.isInteger(s))
                return void o.issues.push({
                  expected: r,
                  format: t.format,
                  code: 'invalid_type',
                  continue: !1,
                  input: s,
                  inst: e,
                });
              if (!Number.isSafeInteger(s))
                return void (s > 0
                  ? o.issues.push({
                      input: s,
                      code: 'too_big',
                      maximum: Number.MAX_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: e,
                      origin: r,
                      continue: !t.abort,
                    })
                  : o.issues.push({
                      input: s,
                      code: 'too_small',
                      minimum: Number.MIN_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: e,
                      origin: r,
                      continue: !t.abort,
                    }));
            }
            (s < i &&
              o.issues.push({
                origin: 'number',
                input: s,
                code: 'too_small',
                minimum: i,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              s > a &&
                o.issues.push({
                  origin: 'number',
                  input: s,
                  code: 'too_big',
                  maximum: a,
                  inst: e,
                }));
          }));
      }),
      uS = aW('$ZodCheckBigIntFormat', (e, t) => {
        ug.init(e, t);
        let [n, r] = oE[t.format];
        (e._zod.onattach.push((e) => {
          let i = e._zod.bag;
          ((i.format = t.format), (i.minimum = n), (i.maximum = r));
        }),
          (e._zod.check = (i) => {
            let a = i.value;
            (a < n &&
              i.issues.push({
                origin: 'bigint',
                input: a,
                code: 'too_small',
                minimum: n,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              a > r &&
                i.issues.push({
                  origin: 'bigint',
                  input: a,
                  code: 'too_big',
                  maximum: r,
                  inst: e,
                }));
          }));
      }),
      ux = aW('$ZodCheckMaxSize', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < n && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            r.size <= t.maximum ||
              n.issues.push({
                origin: oC(r),
                code: 'too_big',
                maximum: t.maximum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uI = aW('$ZodCheckMinSize', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > n && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            r.size >= t.minimum ||
              n.issues.push({
                origin: oC(r),
                code: 'too_small',
                minimum: t.minimum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uk = aW('$ZodCheckSizeEquals', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.size), (n.maximum = t.size), (n.size = t.size));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.size;
            if (i === t.size) return;
            let a = i > t.size;
            n.issues.push({
              origin: oC(r),
              ...(a
                ? { code: 'too_big', maximum: t.size }
                : { code: 'too_small', minimum: t.size }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      }),
      uw = aW('$ZodCheckMaxLength', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < n && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length <= t.maximum) return;
            let i = oL(r);
            n.issues.push({
              origin: i,
              code: 'too_big',
              maximum: t.maximum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      }),
      uE = aW('$ZodCheckMinLength', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > n && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length >= t.minimum) return;
            let i = oL(r);
            n.issues.push({
              origin: i,
              code: 'too_small',
              minimum: t.minimum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      }),
      uO = aW('$ZodCheckLengthEquals', (e, t) => {
        var n;
        (ug.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !a8(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.length;
            if (i === t.length) return;
            let a = oL(r),
              o = i > t.length;
            n.issues.push({
              origin: a,
              ...(o
                ? { code: 'too_big', maximum: t.length }
                : { code: 'too_small', minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      }),
      uT = aW('$ZodCheckStringFormat', (e, t) => {
        var n, r;
        (ug.init(e, t),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.format = t.format),
              t.pattern && (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t.pattern)));
          }),
          t.pattern
            ? ((n = e._zod).check ??
              (n.check = (n) => {
                ((t.pattern.lastIndex = 0),
                  t.pattern.test(n.value) ||
                    n.issues.push({
                      origin: 'string',
                      code: 'invalid_format',
                      format: t.format,
                      input: n.value,
                      ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                      inst: e,
                      continue: !t.abort,
                    }));
              }))
            : ((r = e._zod).check ?? (r.check = () => {})));
      }),
      uN = aW('$ZodCheckRegex', (e, t) => {
        (uT.init(e, t),
          (e._zod.check = (n) => {
            ((t.pattern.lastIndex = 0),
              t.pattern.test(n.value) ||
                n.issues.push({
                  origin: 'string',
                  code: 'invalid_format',
                  format: 'regex',
                  input: n.value,
                  pattern: t.pattern.toString(),
                  inst: e,
                  continue: !t.abort,
                }));
          }));
      }),
      uP = aW('$ZodCheckLowerCase', (e, t) => {
        (t.pattern ?? (t.pattern = s3), uT.init(e, t));
      }),
      uU = aW('$ZodCheckUpperCase', (e, t) => {
        (t.pattern ?? (t.pattern = s5), uT.init(e, t));
      }),
      uA = aW('$ZodCheckIncludes', (e, t) => {
        ug.init(e, t);
        let n = ob(t.includes),
          r = new RegExp('number' == typeof t.position ? `^.{${t.position}}${n}` : n);
        ((t.pattern = r),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
          }),
          (e._zod.check = (n) => {
            n.value.includes(t.includes, t.position) ||
              n.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'includes',
                includes: t.includes,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uD = aW('$ZodCheckStartsWith', (e, t) => {
        ug.init(e, t);
        let n = RegExp(`^${ob(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.startsWith(t.prefix) ||
              n.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'starts_with',
                prefix: t.prefix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uz = aW('$ZodCheckEndsWith', (e, t) => {
        ug.init(e, t);
        let n = RegExp(`.*${ob(t.suffix)}$`);
        (t.pattern ?? (t.pattern = n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.endsWith(t.suffix) ||
              n.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'ends_with',
                suffix: t.suffix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      });
    function uj(e, t, n) {
      e.issues.length && t.issues.push(...oj(n, e.issues));
    }
    let uZ = aW('$ZodCheckProperty', (e, t) => {
        (ug.init(e, t),
          (e._zod.check = (e) => {
            let n = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {});
            if (n instanceof Promise) return n.then((n) => uj(n, e, t.property));
            uj(n, e, t.property);
          }));
      }),
      uR = aW('$ZodCheckMimeType', (e, t) => {
        ug.init(e, t);
        let n = new Set(t.mime);
        (e._zod.onattach.push((e) => {
          e._zod.bag.mime = t.mime;
        }),
          (e._zod.check = (r) => {
            n.has(r.value.type) ||
              r.issues.push({
                code: 'invalid_value',
                values: t.mime,
                input: r.value.type,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      uC = aW('$ZodCheckOverwrite', (e, t) => {
        (ug.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      });
    e.s(['Doc', () => uL], 33938);
    class uL {
      constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
      }
      indented(e) {
        ((this.indent += 1), e(this), (this.indent -= 1));
      }
      write(e) {
        if ('function' == typeof e) {
          (e(this, { execution: 'sync' }), e(this, { execution: 'async' }));
          return;
        }
        let t = e.split('\n').filter((e) => e),
          n = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t.map((e) => e.slice(n)).map((e) => ' '.repeat(2 * this.indent) + e))
          this.content.push(e);
      }
      compile() {
        return Function(
          ...this?.args,
          [...(this?.content ?? ['']).map((e) => `  ${e}`)].join('\n')
        );
      }
    }
    e.s(['version', () => uM], 37644);
    let uM = { major: 4, minor: 1, patch: 5 },
      uF = aW('$ZodType', (e, t) => {
        var n;
        (e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = uM));
        let r = [...(e._zod.def.checks ?? [])];
        for (let t of (e._zod.traits.has('$ZodCheck') && r.unshift(e), r))
          for (let n of t._zod.onattach) n(e);
        if (0 === r.length)
          ((n = e._zod).deferred ?? (n.deferred = []),
            e._zod.deferred?.push(() => {
              e._zod.run = e._zod.parse;
            }));
        else {
          let t = (e, t, n) => {
              let r,
                i = oz(e);
              for (let a of t) {
                if (a._zod.def.when) {
                  if (!a._zod.def.when(e)) continue;
                } else if (i) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && n?.async === !1) throw new aY();
                if (r || o instanceof Promise)
                  r = (r ?? Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (i || (i = oz(e, t))));
                  });
                else {
                  if (e.issues.length === t) continue;
                  i || (i = oz(e, t));
                }
              }
              return r ? r.then(() => e) : e;
            },
            n = (n, i, a) => {
              if (oz(n)) return ((n.aborted = !0), n);
              let o = t(i, r, a);
              if (o instanceof Promise) {
                if (!1 === a.async) throw new aY();
                return o.then((t) => e._zod.parse(t, a));
              }
              return e._zod.parse(o, a);
            };
          e._zod.run = (i, a) => {
            if (a.skipChecks) return e._zod.parse(i, a);
            if ('backward' === a.direction) {
              let t = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
              return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
            }
            let o = e._zod.parse(i, a);
            if (o instanceof Promise) {
              if (!1 === a.async) throw new aY();
              return o.then((e) => t(e, r, a));
            }
            return t(o, r, a);
          };
        }
        e['~standard'] = {
          validate: (t) => {
            try {
              let n = se(e, t);
              return n.success ? { value: n.data } : { issues: n.error?.issues };
            } catch (n) {
              return sn(e, t).then((e) =>
                e.success ? { value: e.data } : { issues: e.error?.issues }
              );
            }
          },
          vendor: 'zod',
          version: 1,
        };
      }),
      uB = aW('$ZodString', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? sQ(e._zod.bag)),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = String(n.value);
              } catch (e) {}
            return (
              'string' == typeof n.value ||
                n.issues.push({
                  expected: 'string',
                  code: 'invalid_type',
                  input: n.value,
                  inst: e,
                }),
              n
            );
          }));
      }),
      uV = aW('$ZodStringFormat', (e, t) => {
        (uT.init(e, t), uB.init(e, t));
      }),
      uG = aW('$ZodGUID', (e, t) => {
        (t.pattern ?? (t.pattern = sE), uV.init(e, t));
      }),
      uJ = aW('$ZodUUID', (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ?? (t.pattern = sO(e));
        } else t.pattern ?? (t.pattern = sO());
        uV.init(e, t);
      }),
      uW = aW('$ZodEmail', (e, t) => {
        (t.pattern ?? (t.pattern = sU), uV.init(e, t));
      }),
      uK = aW('$ZodURL', (e, t) => {
        (uV.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim(),
                i = new URL(r);
              (t.hostname &&
                ((t.hostname.lastIndex = 0),
                t.hostname.test(i.hostname) ||
                  n.issues.push({
                    code: 'invalid_format',
                    format: 'url',
                    note: 'Invalid hostname',
                    pattern: sG.source,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })),
                t.protocol &&
                  ((t.protocol.lastIndex = 0),
                  t.protocol.test(
                    i.protocol.endsWith(':') ? i.protocol.slice(0, -1) : i.protocol
                  ) ||
                    n.issues.push({
                      code: 'invalid_format',
                      format: 'url',
                      note: 'Invalid protocol',
                      pattern: t.protocol.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                t.normalize ? (n.value = i.href) : (n.value = r));
              return;
            } catch (r) {
              n.issues.push({
                code: 'invalid_format',
                format: 'url',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      }),
      uY = aW('$ZodEmoji', (e, t) => {
        (t.pattern ?? (t.pattern = sR()), uV.init(e, t));
      }),
      uX = aW('$ZodNanoID', (e, t) => {
        (t.pattern ?? (t.pattern = sI), uV.init(e, t));
      }),
      uH = aW('$ZodCUID', (e, t) => {
        (t.pattern ?? (t.pattern = sy), uV.init(e, t));
      }),
      uq = aW('$ZodCUID2', (e, t) => {
        (t.pattern ?? (t.pattern = sb), uV.init(e, t));
      }),
      uQ = aW('$ZodULID', (e, t) => {
        (t.pattern ?? (t.pattern = s$), uV.init(e, t));
      }),
      u0 = aW('$ZodXID', (e, t) => {
        (t.pattern ?? (t.pattern = sS), uV.init(e, t));
      }),
      u1 = aW('$ZodKSUID', (e, t) => {
        (t.pattern ?? (t.pattern = sx), uV.init(e, t));
      }),
      u4 = aW('$ZodISODateTime', (e, t) => {
        (t.pattern ?? (t.pattern = sq(t)), uV.init(e, t));
      }),
      u6 = aW('$ZodISODate', (e, t) => {
        (t.pattern ?? (t.pattern = sY), uV.init(e, t));
      }),
      u2 = aW('$ZodISOTime', (e, t) => {
        (t.pattern ?? (t.pattern = sH(t)), uV.init(e, t));
      }),
      u9 = aW('$ZodISODuration', (e, t) => {
        (t.pattern ?? (t.pattern = sk), uV.init(e, t));
      }),
      u3 = aW('$ZodIPv4', (e, t) => {
        (t.pattern ?? (t.pattern = sC),
          uV.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.format = 'ipv4';
          }));
      }),
      u5 = aW('$ZodIPv6', (e, t) => {
        (t.pattern ?? (t.pattern = sL),
          uV.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.format = 'ipv6';
          }),
          (e._zod.check = (n) => {
            try {
              new URL(`http://[${n.value}]`);
            } catch {
              n.issues.push({
                code: 'invalid_format',
                format: 'ipv6',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      }),
      u8 = aW('$ZodCIDRv4', (e, t) => {
        (t.pattern ?? (t.pattern = sM), uV.init(e, t));
      }),
      u7 = aW('$ZodCIDRv6', (e, t) => {
        (t.pattern ?? (t.pattern = sF),
          uV.init(e, t),
          (e._zod.check = (n) => {
            let [r, i] = n.value.split('/');
            try {
              if (!i) throw Error();
              let e = Number(i);
              if (`${e}` !== i || e < 0 || e > 128) throw Error();
              new URL(`http://[${r}]`);
            } catch {
              n.issues.push({
                code: 'invalid_format',
                format: 'cidrv6',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      });
    function le(e) {
      if ('' === e) return !0;
      if (e.length % 4 != 0) return !1;
      try {
        return (atob(e), !0);
      } catch {
        return !1;
      }
    }
    let lt = aW('$ZodBase64', (e, t) => {
      (t.pattern ?? (t.pattern = sB),
        uV.init(e, t),
        e._zod.onattach.push((e) => {
          e._zod.bag.contentEncoding = 'base64';
        }),
        (e._zod.check = (n) => {
          le(n.value) ||
            n.issues.push({
              code: 'invalid_format',
              format: 'base64',
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
        }));
    });
    function ln(e) {
      if (!sV.test(e)) return !1;
      let t = e.replace(/[-_]/g, (e) => ('-' === e ? '+' : '/'));
      return le(t.padEnd(4 * Math.ceil(t.length / 4), '='));
    }
    let lr = aW('$ZodBase64URL', (e, t) => {
        (t.pattern ?? (t.pattern = sV),
          uV.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.contentEncoding = 'base64url';
          }),
          (e._zod.check = (n) => {
            ln(n.value) ||
              n.issues.push({
                code: 'invalid_format',
                format: 'base64url',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      li = aW('$ZodE164', (e, t) => {
        (t.pattern ?? (t.pattern = sW), uV.init(e, t));
      });
    function la(e, t = null) {
      try {
        let n = e.split('.');
        if (3 !== n.length) return !1;
        let [r] = n;
        if (!r) return !1;
        let i = JSON.parse(atob(r));
        if (('typ' in i && i?.typ !== 'JWT') || !i.alg || (t && (!('alg' in i) || i.alg !== t)))
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }
    let lo = aW('$ZodJWT', (e, t) => {
        (uV.init(e, t),
          (e._zod.check = (n) => {
            la(n.value, t.alg) ||
              n.issues.push({
                code: 'invalid_format',
                format: 'jwt',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      ls = aW('$ZodCustomStringFormat', (e, t) => {
        (uV.init(e, t),
          (e._zod.check = (n) => {
            t.fn(n.value) ||
              n.issues.push({
                code: 'invalid_format',
                format: t.format,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      lu = aW('$ZodNumber', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? s4),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = Number(n.value);
              } catch (e) {}
            let i = n.value;
            if ('number' == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n;
            let a =
              'number' == typeof i
                ? Number.isNaN(i)
                  ? 'NaN'
                  : Number.isFinite(i)
                    ? void 0
                    : 'Infinity'
                : void 0;
            return (
              n.issues.push({
                expected: 'number',
                code: 'invalid_type',
                input: i,
                inst: e,
                ...(a ? { received: a } : {}),
              }),
              n
            );
          }));
      }),
      ll = aW('$ZodNumber', (e, t) => {
        (u$.init(e, t), lu.init(e, t));
      }),
      lc = aW('$ZodBoolean', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = s6),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = !!n.value;
              } catch (e) {}
            let i = n.value;
            return (
              'boolean' == typeof i ||
                n.issues.push({ expected: 'boolean', code: 'invalid_type', input: i, inst: e }),
              n
            );
          }));
      }),
      ld = aW('$ZodBigInt', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = s0),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = BigInt(n.value);
              } catch (e) {}
            return (
              'bigint' == typeof n.value ||
                n.issues.push({
                  expected: 'bigint',
                  code: 'invalid_type',
                  input: n.value,
                  inst: e,
                }),
              n
            );
          }));
      }),
      lp = aW('$ZodBigInt', (e, t) => {
        (uS.init(e, t), ld.init(e, t));
      }),
      lf = aW('$ZodSymbol', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              'symbol' == typeof r ||
                t.issues.push({ expected: 'symbol', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      lm = aW('$ZodUndefined', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = s9),
          (e._zod.values = new Set([void 0])),
          (e._zod.optin = 'optional'),
          (e._zod.optout = 'optional'),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              void 0 === r ||
                t.issues.push({ expected: 'undefined', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      lh = aW('$ZodNull', (e, t) => {
        (uF.init(e, t),
          (e._zod.pattern = s2),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              null === r ||
                t.issues.push({ expected: 'null', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      lg = aW('$ZodAny', (e, t) => {
        (uF.init(e, t), (e._zod.parse = (e) => e));
      }),
      lv = aW('$ZodUnknown', (e, t) => {
        (uF.init(e, t), (e._zod.parse = (e) => e));
      }),
      l_ = aW('$ZodNever', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: 'never', code: 'invalid_type', input: t.value, inst: e }),
            t
          )));
      }),
      ly = aW('$ZodVoid', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              void 0 === r ||
                t.issues.push({ expected: 'void', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      lb = aW('$ZodDate', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = new Date(n.value);
              } catch (e) {}
            let i = n.value,
              a = i instanceof Date;
            return (
              (a && !Number.isNaN(i.getTime())) ||
                n.issues.push({
                  expected: 'date',
                  code: 'invalid_type',
                  input: i,
                  ...(a ? { received: 'Invalid Date' } : {}),
                  inst: e,
                }),
              n
            );
          }));
      });
    function l$(e, t, n) {
      (e.issues.length && t.issues.push(...oj(n, e.issues)), (t.value[n] = e.value));
    }
    let lS = aW('$ZodArray', (e, t) => {
      (uF.init(e, t),
        (e._zod.parse = (n, r) => {
          let i = n.value;
          if (!Array.isArray(i))
            return (
              n.issues.push({ expected: 'array', code: 'invalid_type', input: i, inst: e }),
              n
            );
          n.value = Array(i.length);
          let a = [];
          for (let e = 0; e < i.length; e++) {
            let o = i[e],
              s = t.element._zod.run({ value: o, issues: [] }, r);
            s instanceof Promise ? a.push(s.then((t) => l$(t, n, e))) : l$(s, n, e);
          }
          return a.length ? Promise.all(a).then(() => n) : n;
        }));
    });
    function lx(e, t, n, r) {
      (e.issues.length && t.issues.push(...oj(n, e.issues)),
        void 0 === e.value ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value));
    }
    function lI(e) {
      let t = Object.keys(e.shape);
      for (let n of t)
        if (!e.shape[n]._zod.traits.has('$ZodType'))
          throw Error(`Invalid element at key "${n}": expected a Zod schema`);
      let n = ok(e.shape);
      return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
    }
    function lk(e, t, n, r, i, a) {
      let o = [],
        s = i.keySet,
        u = i.catchall._zod,
        l = u.def.type;
      for (let i of Object.keys(t)) {
        if (s.has(i)) continue;
        if ('never' === l) {
          o.push(i);
          continue;
        }
        let a = u.run({ value: t[i], issues: [] }, r);
        a instanceof Promise ? e.push(a.then((e) => lx(e, n, i, t))) : lx(a, n, i, t);
      }
      return (o.length && n.issues.push({ code: 'unrecognized_keys', keys: o, input: t, inst: a }),
      e.length)
        ? Promise.all(e).then(() => n)
        : n;
    }
    let lw = aW('$ZodObject', (e, t) => {
        let n;
        uF.init(e, t);
        let r = a5(() => lI(t));
        on(e._zod, 'propValues', () => {
          let e = t.shape,
            n = {};
          for (let t in e) {
            let r = e[t]._zod;
            if (r.values) for (let e of (n[t] ?? (n[t] = new Set()), r.values)) n[t].add(e);
          }
          return n;
        });
        let i = t.catchall;
        e._zod.parse = (t, a) => {
          n ?? (n = r.value);
          let o = t.value;
          if (!op(o))
            return (
              t.issues.push({ expected: 'object', code: 'invalid_type', input: o, inst: e }),
              t
            );
          t.value = {};
          let s = [],
            u = n.shape;
          for (let e of n.keys) {
            let n = u[e]._zod.run({ value: o[e], issues: [] }, a);
            n instanceof Promise ? s.push(n.then((n) => lx(n, t, e, o))) : lx(n, t, e, o);
          }
          return i ? lk(s, o, t, a, r.value, e) : s.length ? Promise.all(s).then(() => t) : t;
        };
      }),
      lE = aW('$ZodObjectJIT', (e, t) => {
        let n, r;
        lw.init(e, t);
        let i = e._zod.parse,
          a = a5(() => lI(t)),
          o = !aH.jitless,
          s = o && of.value,
          u = t.catchall;
        e._zod.parse = (l, c) => {
          r ?? (r = a.value);
          let d = l.value;
          return op(d)
            ? o && s && c?.async === !1 && !0 !== c.jitless
              ? (n ||
                  (n = ((e) => {
                    let t = new uL(['shape', 'payload', 'ctx']),
                      n = a.value,
                      r = (e) => {
                        let t = oc(e);
                        return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                      };
                    t.write('const input = payload.value;');
                    let i = Object.create(null),
                      o = 0;
                    for (let e of n.keys) i[e] = `key_${o++}`;
                    for (let e of (t.write('const newResult = {}'), n.keys)) {
                      let n = i[e],
                        a = oc(e);
                      (t.write(`const ${n} = ${r(e)};`),
                        t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${a}, ...iss.path] : [${a}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${n}.value;
        }
      `));
                    }
                    (t.write('payload.value = newResult;'), t.write('return payload;'));
                    let s = t.compile();
                    return (t, n) => s(e, t, n);
                  })(t.shape)),
                (l = n(l, c)),
                u)
                ? lk([], d, l, c, r, e)
                : l
              : i(l, c)
            : (l.issues.push({ expected: 'object', code: 'invalid_type', input: d, inst: e }), l);
        };
      });
    function lO(e, t, n, r) {
      for (let n of e) if (0 === n.issues.length) return ((t.value = n.value), t);
      let i = e.filter((e) => !oz(e));
      return 1 === i.length
        ? ((t.value = i[0].value), i[0])
        : (t.issues.push({
            code: 'invalid_union',
            input: t.value,
            inst: n,
            errors: e.map((e) => e.issues.map((e) => oR(e, r, aq()))),
          }),
          t);
    }
    let lT = aW('$ZodUnion', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'optin', () =>
            t.options.some((e) => 'optional' === e._zod.optin) ? 'optional' : void 0
          ),
          on(e._zod, 'optout', () =>
            t.options.some((e) => 'optional' === e._zod.optout) ? 'optional' : void 0
          ),
          on(e._zod, 'values', () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
          }),
          on(e._zod, 'pattern', () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return RegExp(`^(${e.map((e) => a7(e.source)).join('|')})$`);
            }
          }));
        let n = 1 === t.options.length,
          r = t.options[0]._zod.run;
        e._zod.parse = (i, a) => {
          if (n) return r(i, a);
          let o = !1,
            s = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: i.value, issues: [] }, a);
            if (t instanceof Promise) (s.push(t), (o = !0));
            else {
              if (0 === t.issues.length) return t;
              s.push(t);
            }
          }
          return o ? Promise.all(s).then((t) => lO(t, i, e, a)) : lO(s, i, e, a);
        };
      }),
      lN = aW('$ZodDiscriminatedUnion', (e, t) => {
        lT.init(e, t);
        let n = e._zod.parse;
        on(e._zod, 'propValues', () => {
          let e = {};
          for (let n of t.options) {
            let r = n._zod.propValues;
            if (!r || 0 === Object.keys(r).length)
              throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
            for (let [t, n] of Object.entries(r))
              for (let r of (e[t] || (e[t] = new Set()), n)) e[t].add(r);
          }
          return e;
        });
        let r = a5(() => {
          let e = t.options,
            n = new Map();
          for (let r of e) {
            let e = r._zod.propValues?.[t.discriminator];
            if (!e || 0 === e.size)
              throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
            for (let t of e) {
              if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
              n.set(t, r);
            }
          }
          return n;
        });
        e._zod.parse = (i, a) => {
          let o = i.value;
          if (!op(o))
            return (
              i.issues.push({ code: 'invalid_type', expected: 'object', input: o, inst: e }),
              i
            );
          let s = r.value.get(o?.[t.discriminator]);
          return s
            ? s._zod.run(i, a)
            : t.unionFallback
              ? n(i, a)
              : (i.issues.push({
                  code: 'invalid_union',
                  errors: [],
                  note: 'No matching discriminator',
                  discriminator: t.discriminator,
                  input: o,
                  path: [t.discriminator],
                  inst: e,
                }),
                i);
        };
      }),
      lP = aW('$ZodIntersection', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => lU(e, t, n))
              : lU(e, i, a);
          }));
      });
    function lU(e, t, n) {
      if (
        (t.issues.length && e.issues.push(...t.issues),
        n.issues.length && e.issues.push(...n.issues),
        oz(e))
      )
        return e;
      let r = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n))
          return { valid: !0, data: t };
        if (om(t) && om(n)) {
          let r = Object.keys(n),
            i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
            a = { ...t, ...n };
          for (let r of i) {
            let i = e(t[r], n[r]);
            if (!i.valid) return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
            a[r] = i.data;
          }
          return { valid: !0, data: a };
        }
        if (Array.isArray(t) && Array.isArray(n)) {
          if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
          let r = [];
          for (let i = 0; i < t.length; i++) {
            let a = e(t[i], n[i]);
            if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
            r.push(a.data);
          }
          return { valid: !0, data: r };
        }
        return { valid: !1, mergeErrorPath: [] };
      })(t.value, n.value);
      if (!r.valid)
        throw Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
      return ((e.value = r.data), e);
    }
    let lA = aW('$ZodTuple', (e, t) => {
      uF.init(e, t);
      let n = t.items,
        r = n.length - [...n].reverse().findIndex((e) => 'optional' !== e._zod.optin);
      e._zod.parse = (i, a) => {
        let o = i.value;
        if (!Array.isArray(o))
          return (i.issues.push({ input: o, inst: e, expected: 'tuple', code: 'invalid_type' }), i);
        i.value = [];
        let s = [];
        if (!t.rest) {
          let t = o.length > n.length,
            a = o.length < r - 1;
          if (t || a)
            return (
              i.issues.push({
                ...(t
                  ? { code: 'too_big', maximum: n.length }
                  : { code: 'too_small', minimum: n.length }),
                input: o,
                inst: e,
                origin: 'array',
              }),
              i
            );
        }
        let u = -1;
        for (let e of n) {
          if (++u >= o.length && u >= r) continue;
          let t = e._zod.run({ value: o[u], issues: [] }, a);
          t instanceof Promise ? s.push(t.then((e) => lD(e, i, u))) : lD(t, i, u);
        }
        if (t.rest)
          for (let e of o.slice(n.length)) {
            u++;
            let n = t.rest._zod.run({ value: e, issues: [] }, a);
            n instanceof Promise ? s.push(n.then((e) => lD(e, i, u))) : lD(n, i, u);
          }
        return s.length ? Promise.all(s).then(() => i) : i;
      };
    });
    function lD(e, t, n) {
      (e.issues.length && t.issues.push(...oj(n, e.issues)), (t.value[n] = e.value));
    }
    let lz = aW('$ZodRecord', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!om(i))
              return (
                n.issues.push({ expected: 'record', code: 'invalid_type', input: i, inst: e }),
                n
              );
            let a = [];
            if (t.keyType._zod.values) {
              let o,
                s = t.keyType._zod.values;
              for (let e of ((n.value = {}), s))
                if ('string' == typeof e || 'number' == typeof e || 'symbol' == typeof e) {
                  let o = t.valueType._zod.run({ value: i[e], issues: [] }, r);
                  o instanceof Promise
                    ? a.push(
                        o.then((t) => {
                          (t.issues.length && n.issues.push(...oj(e, t.issues)),
                            (n.value[e] = t.value));
                        })
                      )
                    : (o.issues.length && n.issues.push(...oj(e, o.issues)),
                      (n.value[e] = o.value));
                }
              for (let e in i) s.has(e) || (o = o ?? []).push(e);
              o &&
                o.length > 0 &&
                n.issues.push({ code: 'unrecognized_keys', input: i, inst: e, keys: o });
            } else
              for (let o of ((n.value = {}), Reflect.ownKeys(i))) {
                if ('__proto__' === o) continue;
                let s = t.keyType._zod.run({ value: o, issues: [] }, r);
                if (s instanceof Promise)
                  throw Error('Async schemas not supported in object keys currently');
                if (s.issues.length) {
                  (n.issues.push({
                    code: 'invalid_key',
                    origin: 'record',
                    issues: s.issues.map((e) => oR(e, r, aq())),
                    input: o,
                    path: [o],
                    inst: e,
                  }),
                    (n.value[s.value] = s.value));
                  continue;
                }
                let u = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                u instanceof Promise
                  ? a.push(
                      u.then((e) => {
                        (e.issues.length && n.issues.push(...oj(o, e.issues)),
                          (n.value[s.value] = e.value));
                      })
                    )
                  : (u.issues.length && n.issues.push(...oj(o, u.issues)),
                    (n.value[s.value] = u.value));
              }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      }),
      lj = aW('$ZodMap', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!(i instanceof Map))
              return (
                n.issues.push({ expected: 'map', code: 'invalid_type', input: i, inst: e }),
                n
              );
            let a = [];
            for (let [o, s] of ((n.value = new Map()), i)) {
              let u = t.keyType._zod.run({ value: o, issues: [] }, r),
                l = t.valueType._zod.run({ value: s, issues: [] }, r);
              u instanceof Promise || l instanceof Promise
                ? a.push(
                    Promise.all([u, l]).then(([t, a]) => {
                      lZ(t, a, n, o, i, e, r);
                    })
                  )
                : lZ(u, l, n, o, i, e, r);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      });
    function lZ(e, t, n, r, i, a, o) {
      (e.issues.length &&
        (o_.has(typeof r)
          ? n.issues.push(...oj(r, e.issues))
          : n.issues.push({
              code: 'invalid_key',
              origin: 'map',
              input: i,
              inst: a,
              issues: e.issues.map((e) => oR(e, o, aq())),
            })),
        t.issues.length &&
          (o_.has(typeof r)
            ? n.issues.push(...oj(r, t.issues))
            : n.issues.push({
                origin: 'map',
                code: 'invalid_element',
                input: i,
                inst: a,
                key: r,
                issues: t.issues.map((e) => oR(e, o, aq())),
              })),
        n.value.set(e.value, t.value));
    }
    let lR = aW('$ZodSet', (e, t) => {
      (uF.init(e, t),
        (e._zod.parse = (n, r) => {
          let i = n.value;
          if (!(i instanceof Set))
            return (n.issues.push({ input: i, inst: e, expected: 'set', code: 'invalid_type' }), n);
          let a = [];
          for (let e of ((n.value = new Set()), i)) {
            let i = t.valueType._zod.run({ value: e, issues: [] }, r);
            i instanceof Promise ? a.push(i.then((e) => lC(e, n))) : lC(i, n);
          }
          return a.length ? Promise.all(a).then(() => n) : n;
        }));
    });
    function lC(e, t) {
      (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
    }
    let lL = aW('$ZodEnum', (e, t) => {
        uF.init(e, t);
        let n = a2(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => o_.has(typeof e))
              .map((e) => ('string' == typeof e ? ob(e) : e.toString()))
              .join('|')})$`
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (
              r.has(a) || t.issues.push({ code: 'invalid_value', values: n, input: a, inst: e }),
              t
            );
          }));
      }),
      lM = aW('$ZodLiteral', (e, t) => {
        if ((uF.init(e, t), 0 === t.values.length))
          throw Error('Cannot create literal schema with no valid values');
        ((e._zod.values = new Set(t.values)),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => ('string' == typeof e ? ob(e) : e ? ob(e.toString()) : String(e))).join('|')})$`
          )),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            return (
              e._zod.values.has(i) ||
                n.issues.push({ code: 'invalid_value', values: t.values, input: i, inst: e }),
              n
            );
          }));
      }),
      lF = aW('$ZodFile', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              r instanceof File ||
                t.issues.push({ expected: 'file', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      lB = aW('$ZodTransform', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (n, r) => {
            if ('backward' === r.direction) throw new aX(e.constructor.name);
            let i = t.transform(n.value, n);
            if (r.async)
              return (i instanceof Promise ? i : Promise.resolve(i)).then(
                (e) => ((n.value = e), n)
              );
            if (i instanceof Promise) throw new aY();
            return ((n.value = i), n);
          }));
      });
    function lV(e, t) {
      return e.issues.length && void 0 === t ? { issues: [], value: void 0 } : e;
    }
    let lG = aW('$ZodOptional', (e, t) => {
        (uF.init(e, t),
          (e._zod.optin = 'optional'),
          (e._zod.optout = 'optional'),
          on(e._zod, 'values', () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0
          ),
          on(e._zod, 'pattern', () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${a7(e.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if ('optional' === t.innerType._zod.optin) {
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise ? r.then((t) => lV(t, e.value)) : lV(r, e.value);
            }
            return void 0 === e.value ? e : t.innerType._zod.run(e, n);
          }));
      }),
      lJ = aW('$ZodNullable', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'optin', () => t.innerType._zod.optin),
          on(e._zod, 'optout', () => t.innerType._zod.optout),
          on(e._zod, 'pattern', () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${a7(e.source)}|null)$`) : void 0;
          }),
          on(e._zod, 'values', () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0
          ),
          (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n))));
      }),
      lW = aW('$ZodDefault', (e, t) => {
        (uF.init(e, t),
          (e._zod.optin = 'optional'),
          on(e._zod, 'values', () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) return t.innerType._zod.run(e, n);
            if (void 0 === e.value) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => lK(e, t)) : lK(r, t);
          }));
      });
    function lK(e, t) {
      return (void 0 === e.value && (e.value = t.defaultValue), e);
    }
    let lY = aW('$ZodPrefault', (e, t) => {
        (uF.init(e, t),
          (e._zod.optin = 'optional'),
          on(e._zod, 'values', () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            'backward' === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      }),
      lX = aW('$ZodNonOptional', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'values', () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => lH(t, e)) : lH(i, e);
          }));
      });
    function lH(e, t) {
      return (
        e.issues.length ||
          void 0 !== e.value ||
          e.issues.push({ code: 'invalid_type', expected: 'nonoptional', input: e.value, inst: t }),
        e
      );
    }
    let lq = aW('$ZodSuccess', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) throw new aX('ZodSuccess');
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise
              ? r.then((t) => ((e.value = 0 === t.issues.length), e))
              : ((e.value = 0 === r.issues.length), e);
          }));
      }),
      lQ = aW('$ZodCatch', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'optin', () => t.innerType._zod.optin),
          on(e._zod, 'optout', () => t.innerType._zod.optout),
          on(e._zod, 'values', () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise
              ? r.then(
                  (r) => (
                    (e.value = r.value),
                    r.issues.length &&
                      ((e.value = t.catchValue({
                        ...e,
                        error: { issues: r.issues.map((e) => oR(e, n, aq())) },
                        input: e.value,
                      })),
                      (e.issues = [])),
                    e
                  )
                )
              : ((e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: r.issues.map((e) => oR(e, n, aq())) },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e);
          }));
      }),
      l0 = aW('$ZodNaN', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (t, n) => (
            ('number' == typeof t.value && Number.isNaN(t.value)) ||
              t.issues.push({ input: t.value, inst: e, expected: 'nan', code: 'invalid_type' }),
            t
          )));
      }),
      l1 = aW('$ZodPipe', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'values', () => t.in._zod.values),
          on(e._zod, 'optin', () => t.in._zod.optin),
          on(e._zod, 'optout', () => t.out._zod.optout),
          on(e._zod, 'propValues', () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => l4(e, t.in, n)) : l4(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => l4(e, t.out, n)) : l4(r, t.out, n);
          }));
      });
    function l4(e, t, n) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, n);
    }
    let l6 = aW('$ZodCodec', (e, t) => {
      (uF.init(e, t),
        on(e._zod, 'values', () => t.in._zod.values),
        on(e._zod, 'optin', () => t.in._zod.optin),
        on(e._zod, 'optout', () => t.out._zod.optout),
        on(e._zod, 'propValues', () => t.in._zod.propValues),
        (e._zod.parse = (e, n) => {
          if ('forward' === (n.direction || 'forward')) {
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => l2(e, t, n)) : l2(r, t, n);
          }
          {
            let r = t.out._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => l2(e, t, n)) : l2(r, t, n);
          }
        }));
    });
    function l2(e, t, n) {
      if (e.issues.length) return ((e.aborted = !0), e);
      if ('forward' === (n.direction || 'forward')) {
        let r = t.transform(e.value, e);
        return r instanceof Promise ? r.then((r) => l9(e, r, t.out, n)) : l9(e, r, t.out, n);
      }
      {
        let r = t.reverseTransform(e.value, e);
        return r instanceof Promise ? r.then((r) => l9(e, r, t.in, n)) : l9(e, r, t.in, n);
      }
    }
    function l9(e, t, n, r) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : n._zod.run({ value: t, issues: e.issues }, r);
    }
    let l3 = aW('$ZodReadonly', (e, t) => {
      (uF.init(e, t),
        on(e._zod, 'propValues', () => t.innerType._zod.propValues),
        on(e._zod, 'values', () => t.innerType._zod.values),
        on(e._zod, 'optin', () => t.innerType._zod.optin),
        on(e._zod, 'optout', () => t.innerType._zod.optout),
        (e._zod.parse = (e, n) => {
          if ('backward' === n.direction) return t.innerType._zod.run(e, n);
          let r = t.innerType._zod.run(e, n);
          return r instanceof Promise ? r.then(l5) : l5(r);
        }));
    });
    function l5(e) {
      return ((e.value = Object.freeze(e.value)), e);
    }
    let l8 = aW('$ZodTemplateLiteral', (e, t) => {
        uF.init(e, t);
        let n = [];
        for (let e of t.parts)
          if ('object' == typeof e && null !== e) {
            if (!e._zod.pattern)
              throw Error(
                `Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`
              );
            let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
            if (!t) throw Error(`Invalid template literal part: ${e._zod.traits}`);
            let r = +!!t.startsWith('^'),
              i = t.endsWith('$') ? t.length - 1 : t.length;
            n.push(t.slice(r, i));
          } else if (null === e || oy.has(typeof e)) n.push(ob(`${e}`));
          else throw Error(`Invalid template literal part: ${e}`);
        ((e._zod.pattern = RegExp(`^${n.join('')}$`)),
          (e._zod.parse = (n, r) => (
            'string' != typeof n.value
              ? n.issues.push({
                  input: n.value,
                  inst: e,
                  expected: 'template_literal',
                  code: 'invalid_type',
                })
              : ((e._zod.pattern.lastIndex = 0),
                e._zod.pattern.test(n.value) ||
                  n.issues.push({
                    input: n.value,
                    inst: e,
                    code: 'invalid_format',
                    format: t.format ?? 'template_literal',
                    pattern: e._zod.pattern.source,
                  })),
            n
          )));
      }),
      l7 = aW(
        '$ZodFunction',
        (e, t) => (
          uF.init(e, t),
          (e._def = t),
          (e._zod.def = t),
          (e.implement = (t) => {
            if ('function' != typeof t) throw Error('implement() must be called with a function');
            return function (...n) {
              let r = Reflect.apply(t, this, e._def.input ? o3(e._def.input, n) : n);
              return e._def.output ? o3(e._def.output, r) : r;
            };
          }),
          (e.implementAsync = (t) => {
            if ('function' != typeof t)
              throw Error('implementAsync() must be called with a function');
            return async function (...n) {
              let r = e._def.input ? await o8(e._def.input, n) : n,
                i = await Reflect.apply(t, this, r);
              return e._def.output ? await o8(e._def.output, i) : i;
            };
          }),
          (e._zod.parse = (t, n) => (
            'function' != typeof t.value
              ? t.issues.push({
                  code: 'invalid_type',
                  expected: 'function',
                  input: t.value,
                  inst: e,
                })
              : e._def.output && 'promise' === e._def.output._zod.def.type
                ? (t.value = e.implementAsync(t.value))
                : (t.value = e.implement(t.value)),
            t
          )),
          (e.input = (...t) => {
            let n = e.constructor;
            return new n(
              Array.isArray(t[0])
                ? {
                    type: 'function',
                    input: new lA({ type: 'tuple', items: t[0], rest: t[1] }),
                    output: e._def.output,
                  }
                : { type: 'function', input: t[0], output: e._def.output }
            );
          }),
          (e.output = (t) =>
            new e.constructor({ type: 'function', input: e._def.input, output: t })),
          e
        )
      ),
      ce = aW('$ZodPromise', (e, t) => {
        (uF.init(e, t),
          (e._zod.parse = (e, n) =>
            Promise.resolve(e.value).then((e) =>
              t.innerType._zod.run({ value: e, issues: [] }, n)
            )));
      }),
      ct = aW('$ZodLazy', (e, t) => {
        (uF.init(e, t),
          on(e._zod, 'innerType', () => t.getter()),
          on(e._zod, 'pattern', () => e._zod.innerType._zod.pattern),
          on(e._zod, 'propValues', () => e._zod.innerType._zod.propValues),
          on(e._zod, 'optin', () => e._zod.innerType._zod.optin ?? void 0),
          on(e._zod, 'optout', () => e._zod.innerType._zod.optout ?? void 0),
          (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n)));
      }),
      cn = aW('$ZodCustom', (e, t) => {
        (ug.init(e, t),
          uF.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => cr(t, n, r, e));
            cr(i, n, r, e);
          }));
      });
    function cr(e, t, n, r) {
      if (!e) {
        let e = {
          code: 'custom',
          input: n,
          inst: r,
          path: [...(r._zod.def.path ?? [])],
          continue: !r._zod.def.abort,
        };
        (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(oM(e)));
      }
    }
    (e.i(15320), e.i(54098), e.i(35870), e.i(37644));
    var ci = e.i(83086),
      ca = e.i(9054);
    function co() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'حرف', verb: 'أن يحوي' },
              file: { unit: 'بايت', verb: 'أن يحوي' },
              array: { unit: 'عنصر', verb: 'أن يحوي' },
              set: { unit: 'عنصر', verb: 'أن يحوي' },
            },
            t = {
              regex: 'مدخل',
              email: 'بريد إلكتروني',
              url: 'رابط',
              emoji: 'إيموجي',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'تاريخ ووقت بمعيار ISO',
              date: 'تاريخ بمعيار ISO',
              time: 'وقت بمعيار ISO',
              duration: 'مدة بمعيار ISO',
              ipv4: 'عنوان IPv4',
              ipv6: 'عنوان IPv6',
              cidrv4: 'مدى عناوين بصيغة IPv4',
              cidrv6: 'مدى عناوين بصيغة IPv6',
              base64: 'نَص بترميز base64-encoded',
              base64url: 'نَص بترميز base64url-encoded',
              json_string: 'نَص على هيئة JSON',
              e164: 'رقم هاتف بمعيار E.164',
              jwt: 'JWT',
              template_literal: 'مدخل',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `مدخلات غير مقبولة: يفترض إدخال ${n.expected}، ولكن تم إدخال ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `مدخلات غير مقبولة: يفترض إدخال ${oI(n.values[0])}`;
                return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? 'القيمة'} ${t} ${n.maximum.toString()} ${r.unit ?? 'عنصر'}`;
                return `أكبر من اللازم: يفترض أن تكون ${n.origin ?? 'القيمة'} ${t} ${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${t} ${n.minimum.toString()} ${r.unit}`;
                return `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${t} ${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"`;
                if ('ends_with' === n.format) return `نَص غير مقبول: يجب أن ينتهي بـ "${n.suffix}"`;
                if ('includes' === n.format) return `نَص غير مقبول: يجب أن يتضمَّن "${n.includes}"`;
                if ('regex' === n.format) return `نَص غير مقبول: يجب أن يطابق النمط ${n.pattern}`;
                return `${t[n.format] ?? n.format} غير مقبول`;
              case 'not_multiple_of':
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
              case 'unrecognized_keys':
                return `معرف${n.keys.length > 1 ? 'ات' : ''} غريب${n.keys.length > 1 ? 'ة' : ''}: ${a9(n.keys, '، ')}`;
              case 'invalid_key':
                return `معرف غير مقبول في ${n.origin}`;
              case 'invalid_union':
              default:
                return 'مدخل غير مقبول';
              case 'invalid_element':
                return `مدخل غير مقبول في ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cs() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'simvol', verb: 'olmalıdır' },
              file: { unit: 'bayt', verb: 'olmalıdır' },
              array: { unit: 'element', verb: 'olmalıdır' },
              set: { unit: 'element', verb: 'olmalıdır' },
            },
            t = {
              regex: 'input',
              email: 'email address',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO datetime',
              date: 'ISO date',
              time: 'ISO time',
              duration: 'ISO duration',
              ipv4: 'IPv4 address',
              ipv6: 'IPv6 address',
              cidrv4: 'IPv4 range',
              cidrv6: 'IPv6 range',
              base64: 'base64-encoded string',
              base64url: 'base64url-encoded string',
              json_string: 'JSON string',
              e164: 'E.164 number',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Yanlış dəyər: g\xf6zlənilən ${n.expected}, daxil olan ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Yanlış dəyər: g\xf6zlənilən ${oI(n.values[0])}`;
                return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${n.origin ?? 'dəyər'} ${t}${n.maximum.toString()} ${r.unit ?? 'element'}`;
                return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${n.origin ?? 'dəyər'} ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `\xc7ox ki\xe7ik: g\xf6zlənilən ${n.origin} ${t}${n.minimum.toString()} ${r.unit}`;
                return `\xc7ox ki\xe7ik: g\xf6zlənilən ${n.origin} ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Yanlış mətn: "${n.prefix}" ilə başlamalıdır`;
                if ('ends_with' === n.format) return `Yanlış mətn: "${n.suffix}" ilə bitməlidir`;
                if ('includes' === n.format) return `Yanlış mətn: "${n.includes}" daxil olmalıdır`;
                if ('regex' === n.format)
                  return `Yanlış mətn: ${n.pattern} şablonuna uyğun olmalıdır`;
                return `Yanlış ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Yanlış ədəd: ${n.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
              case 'unrecognized_keys':
                return `Tanınmayan a\xe7ar${n.keys.length > 1 ? 'lar' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `${n.origin} daxilində yanlış a\xe7ar`;
              case 'invalid_union':
                return 'Yanlış dəyər';
              case 'invalid_element':
                return `${n.origin} daxilində yanlış dəyər`;
              default:
                return `Yanlış dəyər`;
            }
          };
        })(),
      };
    }
    function cu(e, t, n, r) {
      let i = Math.abs(e),
        a = i % 10,
        o = i % 100;
      return o >= 11 && o <= 19 ? r : 1 === a ? t : a >= 2 && a <= 4 ? n : r;
    }
    function cl() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: { one: 'сімвал', few: 'сімвалы', many: 'сімвалаў' }, verb: 'мець' },
              array: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
              set: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
              file: { unit: { one: 'байт', few: 'байты', many: 'байтаў' }, verb: 'мець' },
            },
            t = {
              regex: 'увод',
              email: 'email адрас',
              url: 'URL',
              emoji: 'эмодзі',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO дата і час',
              date: 'ISO дата',
              time: 'ISO час',
              duration: 'ISO працягласць',
              ipv4: 'IPv4 адрас',
              ipv6: 'IPv6 адрас',
              cidrv4: 'IPv4 дыяпазон',
              cidrv6: 'IPv6 дыяпазон',
              base64: 'радок у фармаце base64',
              base64url: 'радок у фармаце base64url',
              json_string: 'JSON радок',
              e164: 'нумар E.164',
              jwt: 'JWT',
              template_literal: 'увод',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Няправільны ўвод: чакаўся ${n.expected}, атрымана ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'лік';
                    case 'object':
                      if (Array.isArray(e)) return 'масіў';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Няправільны ўвод: чакалася ${oI(n.values[0])}`;
                return `Няправільны варыянт: чакаўся адзін з ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r) {
                  let e = cu(Number(n.maximum), r.unit.one, r.unit.few, r.unit.many);
                  return `Занадта вялікі: чакалася, што ${n.origin ?? 'значэнне'} павінна ${r.verb} ${t}${n.maximum.toString()} ${e}`;
                }
                return `Занадта вялікі: чакалася, што ${n.origin ?? 'значэнне'} павінна быць ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r) {
                  let e = cu(Number(n.minimum), r.unit.one, r.unit.few, r.unit.many);
                  return `Занадта малы: чакалася, што ${n.origin} павінна ${r.verb} ${t}${n.minimum.toString()} ${e}`;
                }
                return `Занадта малы: чакалася, што ${n.origin} павінна быць ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Няправільны радок: павінен пачынацца з "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Няправільны радок: павінен заканчвацца на "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Няправільны радок: павінен змяшчаць "${n.includes}"`;
                if ('regex' === n.format)
                  return `Няправільны радок: павінен адпавядаць шаблону ${n.pattern}`;
                return `Няправільны ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Няправільны лік: павінен быць кратным ${n.divisor}`;
              case 'unrecognized_keys':
                return `Нераспазнаны ${n.keys.length > 1 ? 'ключы' : 'ключ'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Няправільны ключ у ${n.origin}`;
              case 'invalid_union':
                return 'Няправільны ўвод';
              case 'invalid_element':
                return `Няправільнае значэнне ў ${n.origin}`;
              default:
                return `Няправільны ўвод`;
            }
          };
        })(),
      };
    }
    function cc() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caràcters', verb: 'contenir' },
              file: { unit: 'bytes', verb: 'contenir' },
              array: { unit: 'elements', verb: 'contenir' },
              set: { unit: 'elements', verb: 'contenir' },
            },
            t = {
              regex: 'entrada',
              email: 'adreça electrònica',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'data i hora ISO',
              date: 'data ISO',
              time: 'hora ISO',
              duration: 'durada ISO',
              ipv4: 'adreça IPv4',
              ipv6: 'adreça IPv6',
              cidrv4: 'rang IPv4',
              cidrv6: 'rang IPv6',
              base64: 'cadena codificada en base64',
              base64url: 'cadena codificada en base64url',
              json_string: 'cadena JSON',
              e164: 'número E.164',
              jwt: 'JWT',
              template_literal: 'entrada',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Tipus inv\xe0lid: s'esperava ${n.expected}, s'ha rebut ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Valor inv\xe0lid: s'esperava ${oI(n.values[0])}`;
                return `Opci\xf3 inv\xe0lida: s'esperava una de ${a9(n.values, ' o ')}`;
              case 'too_big': {
                let t = n.inclusive ? 'com a màxim' : 'menys de',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Massa gran: s'esperava que ${n.origin ?? 'el valor'} contingu\xe9s ${t} ${n.maximum.toString()} ${r.unit ?? 'elements'}`;
                return `Massa gran: s'esperava que ${n.origin ?? 'el valor'} fos ${t} ${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? 'com a mínim' : 'més de',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Massa petit: s'esperava que ${n.origin} contingu\xe9s ${t} ${n.minimum.toString()} ${r.unit}`;
                return `Massa petit: s'esperava que ${n.origin} fos ${t} ${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Format inv\xe0lid: ha de comen\xe7ar amb "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Format inv\xe0lid: ha d'acabar amb "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Format inv\xe0lid: ha d'incloure "${n.includes}"`;
                if ('regex' === n.format)
                  return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${n.pattern}`;
                return `Format inv\xe0lid per a ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Clau${n.keys.length > 1 ? 's' : ''} no reconeguda${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Clau inv\xe0lida a ${n.origin}`;
              case 'invalid_union':
                return 'Entrada invàlida';
              case 'invalid_element':
                return `Element inv\xe0lid a ${n.origin}`;
              default:
                return `Entrada inv\xe0lida`;
            }
          };
        })(),
      };
    }
    function cd() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'znaků', verb: 'mít' },
              file: { unit: 'bajtů', verb: 'mít' },
              array: { unit: 'prvků', verb: 'mít' },
              set: { unit: 'prvků', verb: 'mít' },
            },
            t = {
              regex: 'regulární výraz',
              email: 'e-mailová adresa',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'datum a čas ve formátu ISO',
              date: 'datum ve formátu ISO',
              time: 'čas ve formátu ISO',
              duration: 'doba trvání ISO',
              ipv4: 'IPv4 adresa',
              ipv6: 'IPv6 adresa',
              cidrv4: 'rozsah IPv4',
              cidrv6: 'rozsah IPv6',
              base64: 'řetězec zakódovaný ve formátu base64',
              base64url: 'řetězec zakódovaný ve formátu base64url',
              json_string: 'řetězec ve formátu JSON',
              e164: 'číslo E.164',
              jwt: 'JWT',
              template_literal: 'vstup',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Neplatn\xfd vstup: oček\xe1v\xe1no ${n.expected}, obdrženo ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'číslo';
                    case 'string':
                      return 'řetězec';
                    case 'boolean':
                      return 'boolean';
                    case 'bigint':
                      return 'bigint';
                    case 'function':
                      return 'funkce';
                    case 'symbol':
                      return 'symbol';
                    case 'undefined':
                      return 'undefined';
                    case 'object':
                      if (Array.isArray(e)) return 'pole';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Neplatn\xfd vstup: oček\xe1v\xe1no ${oI(n.values[0])}`;
                return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Hodnota je př\xedliš velk\xe1: ${n.origin ?? 'hodnota'} mus\xed m\xedt ${t}${n.maximum.toString()} ${r.unit ?? 'prvků'}`;
                return `Hodnota je př\xedliš velk\xe1: ${n.origin ?? 'hodnota'} mus\xed b\xfdt ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Hodnota je př\xedliš mal\xe1: ${n.origin ?? 'hodnota'} mus\xed m\xedt ${t}${n.minimum.toString()} ${r.unit ?? 'prvků'}`;
                return `Hodnota je př\xedliš mal\xe1: ${n.origin ?? 'hodnota'} mus\xed b\xfdt ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Neplatn\xfd řetězec: mus\xed končit na "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Neplatn\xfd řetězec: mus\xed obsahovat "${n.includes}"`;
                if ('regex' === n.format)
                  return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${n.pattern}`;
                return `Neplatn\xfd form\xe1t ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${n.divisor}`;
              case 'unrecognized_keys':
                return `Nezn\xe1m\xe9 kl\xedče: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Neplatn\xfd kl\xedč v ${n.origin}`;
              case 'invalid_union':
                return 'Neplatný vstup';
              case 'invalid_element':
                return `Neplatn\xe1 hodnota v ${n.origin}`;
              default:
                return `Neplatn\xfd vstup`;
            }
          };
        })(),
      };
    }
    function cp() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'tegn', verb: 'havde' },
              file: { unit: 'bytes', verb: 'havde' },
              array: { unit: 'elementer', verb: 'indeholdt' },
              set: { unit: 'elementer', verb: 'indeholdt' },
            },
            t = {
              string: 'streng',
              number: 'tal',
              boolean: 'boolean',
              array: 'liste',
              object: 'objekt',
              set: 'sæt',
              file: 'fil',
            },
            n = {
              regex: 'input',
              email: 'e-mailadresse',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO dato- og klokkeslæt',
              date: 'ISO-dato',
              time: 'ISO-klokkeslæt',
              duration: 'ISO-varighed',
              ipv4: 'IPv4-område',
              ipv6: 'IPv6-område',
              cidrv4: 'IPv4-spektrum',
              cidrv6: 'IPv6-spektrum',
              base64: 'base64-kodet streng',
              base64url: 'base64url-kodet streng',
              json_string: 'JSON-streng',
              e164: 'E.164-nummer',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (r) => {
            var i, a, o, s;
            switch (r.code) {
              case 'invalid_type':
                return `Ugyldigt input: forventede ${t[(i = r.expected)] ?? i}, fik ${
                  t[
                    (a = ((e) => {
                      let t = typeof e;
                      switch (t) {
                        case 'number':
                          return Number.isNaN(e) ? 'NaN' : 'tal';
                        case 'object':
                          if (Array.isArray(e)) return 'liste';
                          if (null === e) return 'null';
                          if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                            return e.constructor.name;
                          return 'objekt';
                      }
                      return t;
                    })(r.input))
                  ] ?? a
                }`;
              case 'invalid_value':
                if (1 === r.values.length) return `Ugyldig v\xe6rdi: forventede ${oI(r.values[0])}`;
                return `Ugyldigt valg: forventede en af f\xf8lgende ${a9(r.values, '|')}`;
              case 'too_big': {
                let n = r.inclusive ? '<=' : '<',
                  i = e[r.origin] ?? null,
                  a = t[(o = r.origin)] ?? o;
                if (i)
                  return `For stor: forventede ${a ?? 'value'} ${i.verb} ${n} ${r.maximum.toString()} ${i.unit ?? 'elementer'}`;
                return `For stor: forventede ${a ?? 'value'} havde ${n} ${r.maximum.toString()}`;
              }
              case 'too_small': {
                let n = r.inclusive ? '>=' : '>',
                  i = e[r.origin] ?? null,
                  a = t[(s = r.origin)] ?? s;
                if (i)
                  return `For lille: forventede ${a} ${i.verb} ${n} ${r.minimum.toString()} ${i.unit}`;
                return `For lille: forventede ${a} havde ${n} ${r.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === r.format)
                  return `Ugyldig streng: skal starte med "${r.prefix}"`;
                if ('ends_with' === r.format) return `Ugyldig streng: skal ende med "${r.suffix}"`;
                if ('includes' === r.format)
                  return `Ugyldig streng: skal indeholde "${r.includes}"`;
                if ('regex' === r.format)
                  return `Ugyldig streng: skal matche m\xf8nsteret ${r.pattern}`;
                return `Ugyldig ${n[r.format] ?? r.format}`;
              case 'not_multiple_of':
                return `Ugyldigt tal: skal v\xe6re deleligt med ${r.divisor}`;
              case 'unrecognized_keys':
                return `${r.keys.length > 1 ? 'Ukendte nøgler' : 'Ukendt nøgle'}: ${a9(r.keys, ', ')}`;
              case 'invalid_key':
                return `Ugyldig n\xf8gle i ${r.origin}`;
              case 'invalid_union':
                return 'Ugyldigt input: matcher ingen af de tilladte typer';
              case 'invalid_element':
                return `Ugyldig v\xe6rdi i ${r.origin}`;
              default:
                return 'Ugyldigt input';
            }
          };
        })(),
      };
    }
    function cf() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'Zeichen', verb: 'zu haben' },
              file: { unit: 'Bytes', verb: 'zu haben' },
              array: { unit: 'Elemente', verb: 'zu haben' },
              set: { unit: 'Elemente', verb: 'zu haben' },
            },
            t = {
              regex: 'Eingabe',
              email: 'E-Mail-Adresse',
              url: 'URL',
              emoji: 'Emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO-Datum und -Uhrzeit',
              date: 'ISO-Datum',
              time: 'ISO-Uhrzeit',
              duration: 'ISO-Dauer',
              ipv4: 'IPv4-Adresse',
              ipv6: 'IPv6-Adresse',
              cidrv4: 'IPv4-Bereich',
              cidrv6: 'IPv6-Bereich',
              base64: 'Base64-codierter String',
              base64url: 'Base64-URL-codierter String',
              json_string: 'JSON-String',
              e164: 'E.164-Nummer',
              jwt: 'JWT',
              template_literal: 'Eingabe',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Ung\xfcltige Eingabe: erwartet ${n.expected}, erhalten ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'Zahl';
                    case 'object':
                      if (Array.isArray(e)) return 'Array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Ung\xfcltige Eingabe: erwartet ${oI(n.values[0])}`;
                return `Ung\xfcltige Option: erwartet eine von ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Zu gro\xdf: erwartet, dass ${n.origin ?? 'Wert'} ${t}${n.maximum.toString()} ${r.unit ?? 'Elemente'} hat`;
                return `Zu gro\xdf: erwartet, dass ${n.origin ?? 'Wert'} ${t}${n.maximum.toString()} ist`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Zu klein: erwartet, dass ${n.origin} ${t}${n.minimum.toString()} ${r.unit} hat`;
                return `Zu klein: erwartet, dass ${n.origin} ${t}${n.minimum.toString()} ist`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ung\xfcltiger String: muss mit "${n.prefix}" beginnen`;
                if ('ends_with' === n.format)
                  return `Ung\xfcltiger String: muss mit "${n.suffix}" enden`;
                if ('includes' === n.format)
                  return `Ung\xfcltiger String: muss "${n.includes}" enthalten`;
                if ('regex' === n.format)
                  return `Ung\xfcltiger String: muss dem Muster ${n.pattern} entsprechen`;
                return `Ung\xfcltig: ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Ung\xfcltige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
              case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Unbekannte Schlüssel' : 'Unbekannter Schlüssel'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Ung\xfcltiger Schl\xfcssel in ${n.origin}`;
              case 'invalid_union':
                return 'Ungültige Eingabe';
              case 'invalid_element':
                return `Ung\xfcltiger Wert in ${n.origin}`;
              default:
                return `Ung\xfcltige Eingabe`;
            }
          };
        })(),
      };
    }
    function cm() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'karaktrojn', verb: 'havi' },
              file: { unit: 'bajtojn', verb: 'havi' },
              array: { unit: 'elementojn', verb: 'havi' },
              set: { unit: 'elementojn', verb: 'havi' },
            },
            t = {
              regex: 'enigo',
              email: 'retadreso',
              url: 'URL',
              emoji: 'emoĝio',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO-datotempo',
              date: 'ISO-dato',
              time: 'ISO-tempo',
              duration: 'ISO-daŭro',
              ipv4: 'IPv4-adreso',
              ipv6: 'IPv6-adreso',
              cidrv4: 'IPv4-rango',
              cidrv6: 'IPv6-rango',
              base64: '64-ume kodita karaktraro',
              base64url: 'URL-64-ume kodita karaktraro',
              json_string: 'JSON-karaktraro',
              e164: 'E.164-nombro',
              jwt: 'JWT',
              template_literal: 'enigo',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Nevalida enigo: atendiĝis ${n.expected}, riceviĝis ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'nombro';
                    case 'object':
                      if (Array.isArray(e)) return 'tabelo';
                      if (null === e) return 'senvalora';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Nevalida enigo: atendiĝis ${oI(n.values[0])}`;
                return `Nevalida opcio: atendiĝis unu el ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Tro granda: atendiĝis ke ${n.origin ?? 'valoro'} havu ${t}${n.maximum.toString()} ${r.unit ?? 'elementojn'}`;
                return `Tro granda: atendiĝis ke ${n.origin ?? 'valoro'} havu ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Tro malgranda: atendiĝis ke ${n.origin} havu ${t}${n.minimum.toString()} ${r.unit}`;
                return `Tro malgranda: atendiĝis ke ${n.origin} estu ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Nevalida karaktraro: devas finiĝi per "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Nevalida karaktraro: devas inkluzivi "${n.includes}"`;
                if ('regex' === n.format)
                  return `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}`;
                return `Nevalida ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Nekonata${n.keys.length > 1 ? 'j' : ''} ŝlosilo${n.keys.length > 1 ? 'j' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Nevalida ŝlosilo en ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Nevalida enigo';
              case 'invalid_element':
                return `Nevalida valoro en ${n.origin}`;
            }
          };
        })(),
      };
    }
    function ch() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caracteres', verb: 'tener' },
              file: { unit: 'bytes', verb: 'tener' },
              array: { unit: 'elementos', verb: 'tener' },
              set: { unit: 'elementos', verb: 'tener' },
            },
            t = {
              regex: 'entrada',
              email: 'dirección de correo electrónico',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'fecha y hora ISO',
              date: 'fecha ISO',
              time: 'hora ISO',
              duration: 'duración ISO',
              ipv4: 'dirección IPv4',
              ipv6: 'dirección IPv6',
              cidrv4: 'rango IPv4',
              cidrv6: 'rango IPv6',
              base64: 'cadena codificada en base64',
              base64url: 'URL codificada en base64',
              json_string: 'cadena JSON',
              e164: 'número E.164',
              jwt: 'JWT',
              template_literal: 'entrada',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Entrada inv\xe1lida: se esperaba ${n.expected}, recibido ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'número';
                    case 'object':
                      if (Array.isArray(e)) return 'arreglo';
                      if (null === e) return 'nulo';
                      if (Object.getPrototypeOf(e) !== Object.prototype) return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Entrada inv\xe1lida: se esperaba ${oI(n.values[0])}`;
                return `Opci\xf3n inv\xe1lida: se esperaba una de ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Demasiado grande: se esperaba que ${n.origin ?? 'valor'} tuviera ${t}${n.maximum.toString()} ${r.unit ?? 'elementos'}`;
                return `Demasiado grande: se esperaba que ${n.origin ?? 'valor'} fuera ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Demasiado peque\xf1o: se esperaba que ${n.origin} tuviera ${t}${n.minimum.toString()} ${r.unit}`;
                return `Demasiado peque\xf1o: se esperaba que ${n.origin} fuera ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Cadena inv\xe1lida: debe comenzar con "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Cadena inv\xe1lida: debe terminar en "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Cadena inv\xe1lida: debe incluir "${n.includes}"`;
                if ('regex' === n.format)
                  return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${n.pattern}`;
                return `Inv\xe1lido ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Llave${n.keys.length > 1 ? 's' : ''} desconocida${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Llave inv\xe1lida en ${n.origin}`;
              case 'invalid_union':
                return 'Entrada inválida';
              case 'invalid_element':
                return `Valor inv\xe1lido en ${n.origin}`;
              default:
                return `Entrada inv\xe1lida`;
            }
          };
        })(),
      };
    }
    function cg() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'کاراکتر', verb: 'داشته باشد' },
              file: { unit: 'بایت', verb: 'داشته باشد' },
              array: { unit: 'آیتم', verb: 'داشته باشد' },
              set: { unit: 'آیتم', verb: 'داشته باشد' },
            },
            t = {
              regex: 'ورودی',
              email: 'آدرس ایمیل',
              url: 'URL',
              emoji: 'ایموجی',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'تاریخ و زمان ایزو',
              date: 'تاریخ ایزو',
              time: 'زمان ایزو',
              duration: 'مدت زمان ایزو',
              ipv4: 'IPv4 آدرس',
              ipv6: 'IPv6 آدرس',
              cidrv4: 'IPv4 دامنه',
              cidrv6: 'IPv6 دامنه',
              base64: 'base64-encoded رشته',
              base64url: 'base64url-encoded رشته',
              json_string: 'JSON رشته',
              e164: 'E.164 عدد',
              jwt: 'JWT',
              template_literal: 'ورودی',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `ورودی نامعتبر: می‌بایست ${n.expected} می‌بود، ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'عدد';
                    case 'object':
                      if (Array.isArray(e)) return 'آرایه';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)} دریافت شد`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `ورودی نامعتبر: می‌بایست ${oI(n.values[0])} می‌بود`;
                return `گزینه نامعتبر: می‌بایست یکی از ${a9(n.values, '|')} می‌بود`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `خیلی بزرگ: ${n.origin ?? 'مقدار'} باید ${t}${n.maximum.toString()} ${r.unit ?? 'عنصر'} باشد`;
                return `خیلی بزرگ: ${n.origin ?? 'مقدار'} باید ${t}${n.maximum.toString()} باشد`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `خیلی کوچک: ${n.origin} باید ${t}${n.minimum.toString()} ${r.unit} باشد`;
                return `خیلی کوچک: ${n.origin} باید ${t}${n.minimum.toString()} باشد`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `رشته نامعتبر: باید با "${n.prefix}" شروع شود`;
                if ('ends_with' === n.format) return `رشته نامعتبر: باید با "${n.suffix}" تمام شود`;
                if ('includes' === n.format) return `رشته نامعتبر: باید شامل "${n.includes}" باشد`;
                if ('regex' === n.format)
                  return `رشته نامعتبر: باید با الگوی ${n.pattern} مطابقت داشته باشد`;
                return `${t[n.format] ?? n.format} نامعتبر`;
              case 'not_multiple_of':
                return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
              case 'unrecognized_keys':
                return `کلید${n.keys.length > 1 ? 'های' : ''} ناشناس: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `کلید ناشناس در ${n.origin}`;
              case 'invalid_union':
              default:
                return `ورودی نامعتبر`;
              case 'invalid_element':
                return `مقدار نامعتبر در ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cv() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'merkkiä', subject: 'merkkijonon' },
              file: { unit: 'tavua', subject: 'tiedoston' },
              array: { unit: 'alkiota', subject: 'listan' },
              set: { unit: 'alkiota', subject: 'joukon' },
              number: { unit: '', subject: 'luvun' },
              bigint: { unit: '', subject: 'suuren kokonaisluvun' },
              int: { unit: '', subject: 'kokonaisluvun' },
              date: { unit: '', subject: 'päivämäärän' },
            },
            t = {
              regex: 'säännöllinen lauseke',
              email: 'sähköpostiosoite',
              url: 'URL-osoite',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO-aikaleima',
              date: 'ISO-päivämäärä',
              time: 'ISO-aika',
              duration: 'ISO-kesto',
              ipv4: 'IPv4-osoite',
              ipv6: 'IPv6-osoite',
              cidrv4: 'IPv4-alue',
              cidrv6: 'IPv6-alue',
              base64: 'base64-koodattu merkkijono',
              base64url: 'base64url-koodattu merkkijono',
              json_string: 'JSON-merkkijono',
              e164: 'E.164-luku',
              jwt: 'JWT',
              template_literal: 'templaattimerkkijono',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Virheellinen tyyppi: odotettiin ${n.expected}, oli ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Virheellinen sy\xf6te: t\xe4ytyy olla ${oI(n.values[0])}`;
                return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Liian suuri: ${r.subject} t\xe4ytyy olla ${t}${n.maximum.toString()} ${r.unit}`.trim();
                return `Liian suuri: arvon t\xe4ytyy olla ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Liian pieni: ${r.subject} t\xe4ytyy olla ${t}${n.minimum.toString()} ${r.unit}`.trim();
                return `Liian pieni: arvon t\xe4ytyy olla ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${n.includes}"`;
                if ('regex' === n.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${n.pattern}`;
                return `Virheellinen ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Virheellinen luku: t\xe4ytyy olla luvun ${n.divisor} monikerta`;
              case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Tuntemattomat avaimet' : 'Tuntematon avain'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return 'Virheellinen avain tietueessa';
              case 'invalid_union':
                return 'Virheellinen unioni';
              case 'invalid_element':
                return 'Virheellinen arvo joukossa';
              default:
                return `Virheellinen sy\xf6te`;
            }
          };
        })(),
      };
    }
    function c_() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caractères', verb: 'avoir' },
              file: { unit: 'octets', verb: 'avoir' },
              array: { unit: 'éléments', verb: 'avoir' },
              set: { unit: 'éléments', verb: 'avoir' },
            },
            t = {
              regex: 'entrée',
              email: 'adresse e-mail',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'date et heure ISO',
              date: 'date ISO',
              time: 'heure ISO',
              duration: 'durée ISO',
              ipv4: 'adresse IPv4',
              ipv6: 'adresse IPv6',
              cidrv4: 'plage IPv4',
              cidrv6: 'plage IPv6',
              base64: 'chaîne encodée en base64',
              base64url: 'chaîne encodée en base64url',
              json_string: 'chaîne JSON',
              e164: 'numéro E.164',
              jwt: 'JWT',
              template_literal: 'entrée',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Entr\xe9e invalide : ${n.expected} attendu, ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'nombre';
                    case 'object':
                      if (Array.isArray(e)) return 'tableau';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)} re\xe7u`;
              case 'invalid_value':
                if (1 === n.values.length) return `Entr\xe9e invalide : ${oI(n.values[0])} attendu`;
                return `Option invalide : une valeur parmi ${a9(n.values, '|')} attendue`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Trop grand : ${n.origin ?? 'valeur'} doit ${r.verb} ${t}${n.maximum.toString()} ${r.unit ?? 'élément(s)'}`;
                return `Trop grand : ${n.origin ?? 'valeur'} doit \xeatre ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Trop petit : ${n.origin} doit ${r.verb} ${t}${n.minimum.toString()} ${r.unit}`;
                return `Trop petit : ${n.origin} doit \xeatre ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Cha\xeene invalide : doit commencer par "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Cha\xeene invalide : doit se terminer par "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Cha\xeene invalide : doit inclure "${n.includes}"`;
                if ('regex' === n.format)
                  return `Cha\xeene invalide : doit correspondre au mod\xe8le ${n.pattern}`;
                return `${t[n.format] ?? n.format} invalide`;
              case 'not_multiple_of':
                return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Cl\xe9${n.keys.length > 1 ? 's' : ''} non reconnue${n.keys.length > 1 ? 's' : ''} : ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Cl\xe9 invalide dans ${n.origin}`;
              case 'invalid_union':
                return 'Entrée invalide';
              case 'invalid_element':
                return `Valeur invalide dans ${n.origin}`;
              default:
                return `Entr\xe9e invalide`;
            }
          };
        })(),
      };
    }
    function cy() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caractères', verb: 'avoir' },
              file: { unit: 'octets', verb: 'avoir' },
              array: { unit: 'éléments', verb: 'avoir' },
              set: { unit: 'éléments', verb: 'avoir' },
            },
            t = {
              regex: 'entrée',
              email: 'adresse courriel',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'date-heure ISO',
              date: 'date ISO',
              time: 'heure ISO',
              duration: 'durée ISO',
              ipv4: 'adresse IPv4',
              ipv6: 'adresse IPv6',
              cidrv4: 'plage IPv4',
              cidrv6: 'plage IPv6',
              base64: 'chaîne encodée en base64',
              base64url: 'chaîne encodée en base64url',
              json_string: 'chaîne JSON',
              e164: 'numéro E.164',
              jwt: 'JWT',
              template_literal: 'entrée',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Entr\xe9e invalide : attendu ${n.expected}, re\xe7u ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Entr\xe9e invalide : attendu ${oI(n.values[0])}`;
                return `Option invalide : attendu l'une des valeurs suivantes ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '≤' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Trop grand : attendu que ${n.origin ?? 'la valeur'} ait ${t}${n.maximum.toString()} ${r.unit}`;
                return `Trop grand : attendu que ${n.origin ?? 'la valeur'} soit ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '≥' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Trop petit : attendu que ${n.origin} ait ${t}${n.minimum.toString()} ${r.unit}`;
                return `Trop petit : attendu que ${n.origin} soit ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Cha\xeene invalide : doit commencer par "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Cha\xeene invalide : doit se terminer par "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Cha\xeene invalide : doit inclure "${n.includes}"`;
                if ('regex' === n.format)
                  return `Cha\xeene invalide : doit correspondre au motif ${n.pattern}`;
                return `${t[n.format] ?? n.format} invalide`;
              case 'not_multiple_of':
                return `Nombre invalide : doit \xeatre un multiple de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Cl\xe9${n.keys.length > 1 ? 's' : ''} non reconnue${n.keys.length > 1 ? 's' : ''} : ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Cl\xe9 invalide dans ${n.origin}`;
              case 'invalid_union':
                return 'Entrée invalide';
              case 'invalid_element':
                return `Valeur invalide dans ${n.origin}`;
              default:
                return `Entr\xe9e invalide`;
            }
          };
        })(),
      };
    }
    function cb() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'אותיות', verb: 'לכלול' },
              file: { unit: 'בייטים', verb: 'לכלול' },
              array: { unit: 'פריטים', verb: 'לכלול' },
              set: { unit: 'פריטים', verb: 'לכלול' },
            },
            t = {
              regex: 'קלט',
              email: 'כתובת אימייל',
              url: 'כתובת רשת',
              emoji: "אימוג'י",
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'תאריך וזמן ISO',
              date: 'תאריך ISO',
              time: 'זמן ISO',
              duration: 'משך זמן ISO',
              ipv4: 'כתובת IPv4',
              ipv6: 'כתובת IPv6',
              cidrv4: 'טווח IPv4',
              cidrv6: 'טווח IPv6',
              base64: 'מחרוזת בבסיס 64',
              base64url: 'מחרוזת בבסיס 64 לכתובות רשת',
              json_string: 'מחרוזת JSON',
              e164: 'מספר E.164',
              jwt: 'JWT',
              template_literal: 'קלט',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `קלט לא תקין: צריך ${n.expected}, התקבל ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `קלט לא תקין: צריך ${oI(n.values[0])}`;
                return `קלט לא תקין: צריך אחת מהאפשרויות  ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `גדול מדי: ${n.origin ?? 'value'} צריך להיות ${t}${n.maximum.toString()} ${r.unit ?? 'elements'}`;
                return `גדול מדי: ${n.origin ?? 'value'} צריך להיות ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `קטן מדי: ${n.origin} צריך להיות ${t}${n.minimum.toString()} ${r.unit}`;
                return `קטן מדי: ${n.origin} צריך להיות ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `מחרוזת לא תקינה: חייבת להתחיל ב"${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `מחרוזת לא תקינה: חייבת להסתיים ב "${n.suffix}"`;
                if ('includes' === n.format) return `מחרוזת לא תקינה: חייבת לכלול "${n.includes}"`;
                if ('regex' === n.format)
                  return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${n.pattern}`;
                return `${t[n.format] ?? n.format} לא תקין`;
              case 'not_multiple_of':
                return `מספר לא תקין: חייב להיות מכפלה של ${n.divisor}`;
              case 'unrecognized_keys':
                return `מפתח${n.keys.length > 1 ? 'ות' : ''} לא מזוה${n.keys.length > 1 ? 'ים' : 'ה'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `מפתח לא תקין ב${n.origin}`;
              case 'invalid_union':
                return 'קלט לא תקין';
              case 'invalid_element':
                return `ערך לא תקין ב${n.origin}`;
              default:
                return `קלט לא תקין`;
            }
          };
        })(),
      };
    }
    function c$() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'karakter', verb: 'legyen' },
              file: { unit: 'byte', verb: 'legyen' },
              array: { unit: 'elem', verb: 'legyen' },
              set: { unit: 'elem', verb: 'legyen' },
            },
            t = {
              regex: 'bemenet',
              email: 'email cím',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO időbélyeg',
              date: 'ISO dátum',
              time: 'ISO idő',
              duration: 'ISO időintervallum',
              ipv4: 'IPv4 cím',
              ipv6: 'IPv6 cím',
              cidrv4: 'IPv4 tartomány',
              cidrv6: 'IPv6 tartomány',
              base64: 'base64-kódolt string',
              base64url: 'base64url-kódolt string',
              json_string: 'JSON string',
              e164: 'E.164 szám',
              jwt: 'JWT',
              template_literal: 'bemenet',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${n.expected}, a kapott \xe9rt\xe9k ${((
                  e
                ) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'szám';
                    case 'object':
                      if (Array.isArray(e)) return 'tömb';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${oI(n.values[0])}`;
                return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `T\xfal nagy: ${n.origin ?? 'érték'} m\xe9rete t\xfal nagy ${t}${n.maximum.toString()} ${r.unit ?? 'elem'}`;
                return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${n.origin ?? 'érték'} t\xfal nagy: ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${n.origin} m\xe9rete t\xfal kicsi ${t}${n.minimum.toString()} ${r.unit}`;
                return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${n.origin} t\xfal kicsi ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `\xc9rv\xe9nytelen string: "${n.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                if ('ends_with' === n.format)
                  return `\xc9rv\xe9nytelen string: "${n.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                if ('includes' === n.format)
                  return `\xc9rv\xe9nytelen string: "${n.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                if ('regex' === n.format)
                  return `\xc9rv\xe9nytelen string: ${n.pattern} mint\xe1nak kell megfelelnie`;
                return `\xc9rv\xe9nytelen ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `\xc9rv\xe9nytelen sz\xe1m: ${n.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
              case 'unrecognized_keys':
                return `Ismeretlen kulcs${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `\xc9rv\xe9nytelen kulcs ${n.origin}`;
              case 'invalid_union':
                return 'Érvénytelen bemenet';
              case 'invalid_element':
                return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${n.origin}`;
              default:
                return `\xc9rv\xe9nytelen bemenet`;
            }
          };
        })(),
      };
    }
    function cS() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'karakter', verb: 'memiliki' },
              file: { unit: 'byte', verb: 'memiliki' },
              array: { unit: 'item', verb: 'memiliki' },
              set: { unit: 'item', verb: 'memiliki' },
            },
            t = {
              regex: 'input',
              email: 'alamat email',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'tanggal dan waktu format ISO',
              date: 'tanggal format ISO',
              time: 'jam format ISO',
              duration: 'durasi format ISO',
              ipv4: 'alamat IPv4',
              ipv6: 'alamat IPv6',
              cidrv4: 'rentang alamat IPv4',
              cidrv6: 'rentang alamat IPv6',
              base64: 'string dengan enkode base64',
              base64url: 'string dengan enkode base64url',
              json_string: 'string JSON',
              e164: 'angka E.164',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Input tidak valid: diharapkan ${n.expected}, diterima ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Input tidak valid: diharapkan ${oI(n.values[0])}`;
                return `Pilihan tidak valid: diharapkan salah satu dari ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Terlalu besar: diharapkan ${n.origin ?? 'value'} memiliki ${t}${n.maximum.toString()} ${r.unit ?? 'elemen'}`;
                return `Terlalu besar: diharapkan ${n.origin ?? 'value'} menjadi ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Terlalu kecil: diharapkan ${n.origin} memiliki ${t}${n.minimum.toString()} ${r.unit}`;
                return `Terlalu kecil: diharapkan ${n.origin} menjadi ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `String tidak valid: harus dimulai dengan "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `String tidak valid: harus berakhir dengan "${n.suffix}"`;
                if ('includes' === n.format)
                  return `String tidak valid: harus menyertakan "${n.includes}"`;
                if ('regex' === n.format)
                  return `String tidak valid: harus sesuai pola ${n.pattern}`;
                return `${t[n.format] ?? n.format} tidak valid`;
              case 'not_multiple_of':
                return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
              case 'unrecognized_keys':
                return `Kunci tidak dikenali ${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Kunci tidak valid di ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Input tidak valid';
              case 'invalid_element':
                return `Nilai tidak valid di ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cx() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'stafi', verb: 'að hafa' },
              file: { unit: 'bæti', verb: 'að hafa' },
              array: { unit: 'hluti', verb: 'að hafa' },
              set: { unit: 'hluti', verb: 'að hafa' },
            },
            t = {
              regex: 'gildi',
              email: 'netfang',
              url: 'vefslóð',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO dagsetning og tími',
              date: 'ISO dagsetning',
              time: 'ISO tími',
              duration: 'ISO tímalengd',
              ipv4: 'IPv4 address',
              ipv6: 'IPv6 address',
              cidrv4: 'IPv4 range',
              cidrv6: 'IPv6 range',
              base64: 'base64-encoded strengur',
              base64url: 'base64url-encoded strengur',
              json_string: 'JSON strengur',
              e164: 'E.164 tölugildi',
              jwt: 'JWT',
              template_literal: 'gildi',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Rangt gildi: \xde\xfa sl\xf3st inn ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'númer';
                    case 'object':
                      if (Array.isArray(e)) return 'fylki';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)} \xfear sem \xe1 a\xf0 vera ${n.expected}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Rangt gildi: gert r\xe1\xf0 fyrir ${oI(n.values[0])}`;
                return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin ?? 'gildi'} hafi ${t}${n.maximum.toString()} ${r.unit ?? 'hluti'}`;
                return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin ?? 'gildi'} s\xe9 ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin} hafi ${t}${n.minimum.toString()} ${r.unit}`;
                return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${n.origin} s\xe9 ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${n.suffix}"`;
                if ('includes' === n.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${n.includes}"`;
                if ('regex' === n.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${n.pattern}`;
                return `Rangt ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${n.divisor}`;
              case 'unrecognized_keys':
                return `\xd3\xfeekkt ${n.keys.length > 1 ? 'ir lyklar' : 'ur lykill'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Rangur lykill \xed ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Rangt gildi';
              case 'invalid_element':
                return `Rangt gildi \xed ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cI() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caratteri', verb: 'avere' },
              file: { unit: 'byte', verb: 'avere' },
              array: { unit: 'elementi', verb: 'avere' },
              set: { unit: 'elementi', verb: 'avere' },
            },
            t = {
              regex: 'input',
              email: 'indirizzo email',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'data e ora ISO',
              date: 'data ISO',
              time: 'ora ISO',
              duration: 'durata ISO',
              ipv4: 'indirizzo IPv4',
              ipv6: 'indirizzo IPv6',
              cidrv4: 'intervallo IPv4',
              cidrv6: 'intervallo IPv6',
              base64: 'stringa codificata in base64',
              base64url: 'URL codificata in base64',
              json_string: 'stringa JSON',
              e164: 'numero E.164',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Input non valido: atteso ${n.expected}, ricevuto ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'numero';
                    case 'object':
                      if (Array.isArray(e)) return 'vettore';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Input non valido: atteso ${oI(n.values[0])}`;
                return `Opzione non valida: atteso uno tra ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Troppo grande: ${n.origin ?? 'valore'} deve avere ${t}${n.maximum.toString()} ${r.unit ?? 'elementi'}`;
                return `Troppo grande: ${n.origin ?? 'valore'} deve essere ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Troppo piccolo: ${n.origin} deve avere ${t}${n.minimum.toString()} ${r.unit}`;
                return `Troppo piccolo: ${n.origin} deve essere ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Stringa non valida: deve iniziare con "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Stringa non valida: deve terminare con "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Stringa non valida: deve includere "${n.includes}"`;
                if ('regex' === n.format)
                  return `Stringa non valida: deve corrispondere al pattern ${n.pattern}`;
                return `Invalid ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
              case 'unrecognized_keys':
                return `Chiav${n.keys.length > 1 ? 'i' : 'e'} non riconosciut${n.keys.length > 1 ? 'e' : 'a'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Chiave non valida in ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Input non valido';
              case 'invalid_element':
                return `Valore non valido in ${n.origin}`;
            }
          };
        })(),
      };
    }
    function ck() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: '文字', verb: 'である' },
              file: { unit: 'バイト', verb: 'である' },
              array: { unit: '要素', verb: 'である' },
              set: { unit: '要素', verb: 'である' },
            },
            t = {
              regex: '入力値',
              email: 'メールアドレス',
              url: 'URL',
              emoji: '絵文字',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO日時',
              date: 'ISO日付',
              time: 'ISO時刻',
              duration: 'ISO期間',
              ipv4: 'IPv4アドレス',
              ipv6: 'IPv6アドレス',
              cidrv4: 'IPv4範囲',
              cidrv6: 'IPv6範囲',
              base64: 'base64エンコード文字列',
              base64url: 'base64urlエンコード文字列',
              json_string: 'JSON文字列',
              e164: 'E.164番号',
              jwt: 'JWT',
              template_literal: '入力値',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `無効な入力: ${n.expected}が期待されましたが、${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : '数値';
                    case 'object':
                      if (Array.isArray(e)) return '配列';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}が入力されました`;
              case 'invalid_value':
                if (1 === n.values.length) return `無効な入力: ${oI(n.values[0])}が期待されました`;
                return `無効な選択: ${a9(n.values, '、')}のいずれかである必要があります`;
              case 'too_big': {
                let t = n.inclusive ? '以下である' : 'より小さい',
                  r = e[n.origin] ?? null;
                if (r)
                  return `大きすぎる値: ${n.origin ?? '値'}は${n.maximum.toString()}${r.unit ?? '要素'}${t}必要があります`;
                return `大きすぎる値: ${n.origin ?? '値'}は${n.maximum.toString()}${t}必要があります`;
              }
              case 'too_small': {
                let t = n.inclusive ? '以上である' : 'より大きい',
                  r = e[n.origin] ?? null;
                if (r)
                  return `小さすぎる値: ${n.origin}は${n.minimum.toString()}${r.unit}${t}必要があります`;
                return `小さすぎる値: ${n.origin}は${n.minimum.toString()}${t}必要があります`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `無効な文字列: "${n.prefix}"で始まる必要があります`;
                if ('ends_with' === n.format)
                  return `無効な文字列: "${n.suffix}"で終わる必要があります`;
                if ('includes' === n.format)
                  return `無効な文字列: "${n.includes}"を含む必要があります`;
                if ('regex' === n.format)
                  return `無効な文字列: パターン${n.pattern}に一致する必要があります`;
                return `無効な${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `無効な数値: ${n.divisor}の倍数である必要があります`;
              case 'unrecognized_keys':
                return `認識されていないキー${n.keys.length > 1 ? '群' : ''}: ${a9(n.keys, '、')}`;
              case 'invalid_key':
                return `${n.origin}内の無効なキー`;
              case 'invalid_union':
                return '無効な入力';
              case 'invalid_element':
                return `${n.origin}内の無効な値`;
              default:
                return `無効な入力`;
            }
          };
        })(),
      };
    }
    function cw() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'តួអក្សរ', verb: 'គួរមាន' },
              file: { unit: 'បៃ', verb: 'គួរមាន' },
              array: { unit: 'ធាតុ', verb: 'គួរមាន' },
              set: { unit: 'ធាតុ', verb: 'គួរមាន' },
            },
            t = {
              regex: 'ទិន្នន័យបញ្ចូល',
              email: 'អាសយដ្ឋានអ៊ីមែល',
              url: 'URL',
              emoji: 'សញ្ញាអារម្មណ៍',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'កាលបរិច្ឆេទ និងម៉ោង ISO',
              date: 'កាលបរិច្ឆេទ ISO',
              time: 'ម៉ោង ISO',
              duration: 'រយៈពេល ISO',
              ipv4: 'អាសយដ្ឋាន IPv4',
              ipv6: 'អាសយដ្ឋាន IPv6',
              cidrv4: 'ដែនអាសយដ្ឋាន IPv4',
              cidrv6: 'ដែនអាសយដ្ឋាន IPv6',
              base64: 'ខ្សែអក្សរអ៊ិកូដ base64',
              base64url: 'ខ្សែអក្សរអ៊ិកូដ base64url',
              json_string: 'ខ្សែអក្សរ JSON',
              e164: 'លេខ E.164',
              jwt: 'JWT',
              template_literal: 'ទិន្នន័យបញ្ចូល',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${n.expected} ប៉ុន្តែទទួលបាន ${((
                  e
                ) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'មិនមែនជាលេខ (NaN)' : 'លេខ';
                    case 'object':
                      if (Array.isArray(e)) return 'អារេ (Array)';
                      if (null === e) return 'គ្មានតម្លៃ (null)';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${oI(n.values[0])}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `ធំពេក៖ ត្រូវការ ${n.origin ?? 'តម្លៃ'} ${t} ${n.maximum.toString()} ${r.unit ?? 'ធាតុ'}`;
                return `ធំពេក៖ ត្រូវការ ${n.origin ?? 'តម្លៃ'} ${t} ${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r) return `តូចពេក៖ ត្រូវការ ${n.origin} ${t} ${n.minimum.toString()} ${r.unit}`;
                return `តូចពេក៖ ត្រូវការ ${n.origin} ${t} ${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${n.suffix}"`;
                if ('includes' === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${n.includes}"`;
                if ('regex' === n.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${n.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
              case 'unrecognized_keys':
                return `រកឃើញសោមិនស្គាល់៖ ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
              case 'invalid_union':
              default:
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
              case 'invalid_element':
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cE() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: '문자', verb: 'to have' },
              file: { unit: '바이트', verb: 'to have' },
              array: { unit: '개', verb: 'to have' },
              set: { unit: '개', verb: 'to have' },
            },
            t = {
              regex: '입력',
              email: '이메일 주소',
              url: 'URL',
              emoji: '이모지',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO 날짜시간',
              date: 'ISO 날짜',
              time: 'ISO 시간',
              duration: 'ISO 기간',
              ipv4: 'IPv4 주소',
              ipv6: 'IPv6 주소',
              cidrv4: 'IPv4 범위',
              cidrv6: 'IPv6 범위',
              base64: 'base64 인코딩 문자열',
              base64url: 'base64url 인코딩 문자열',
              json_string: 'JSON 문자열',
              e164: 'E.164 번호',
              jwt: 'JWT',
              template_literal: '입력',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `잘못된 입력: 예상 타입은 ${n.expected}, 받은 타입은 ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}입니다`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `잘못된 입력: 값은 ${oI(n.values[0])} 이어야 합니다`;
                return `잘못된 옵션: ${a9(n.values, '또는 ')} 중 하나여야 합니다`;
              case 'too_big': {
                let t = n.inclusive ? '이하' : '미만',
                  r = '미만' === t ? '이어야 합니다' : '여야 합니다',
                  i = e[n.origin] ?? null,
                  a = i?.unit ?? '요소';
                if (i)
                  return `${n.origin ?? '값'}이 너무 큽니다: ${n.maximum.toString()}${a} ${t}${r}`;
                return `${n.origin ?? '값'}이 너무 큽니다: ${n.maximum.toString()} ${t}${r}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '이상' : '초과',
                  r = '이상' === t ? '이어야 합니다' : '여야 합니다',
                  i = e[n.origin] ?? null,
                  a = i?.unit ?? '요소';
                if (i)
                  return `${n.origin ?? '값'}이 너무 작습니다: ${n.minimum.toString()}${a} ${t}${r}`;
                return `${n.origin ?? '값'}이 너무 작습니다: ${n.minimum.toString()} ${t}${r}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `잘못된 문자열: "${n.prefix}"(으)로 시작해야 합니다`;
                if ('ends_with' === n.format)
                  return `잘못된 문자열: "${n.suffix}"(으)로 끝나야 합니다`;
                if ('includes' === n.format)
                  return `잘못된 문자열: "${n.includes}"을(를) 포함해야 합니다`;
                if ('regex' === n.format)
                  return `잘못된 문자열: 정규식 ${n.pattern} 패턴과 일치해야 합니다`;
                return `잘못된 ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
              case 'unrecognized_keys':
                return `인식할 수 없는 키: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `잘못된 키: ${n.origin}`;
              case 'invalid_union':
              default:
                return `잘못된 입력`;
              case 'invalid_element':
                return `잘못된 값: ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cO() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'знаци', verb: 'да имаат' },
              file: { unit: 'бајти', verb: 'да имаат' },
              array: { unit: 'ставки', verb: 'да имаат' },
              set: { unit: 'ставки', verb: 'да имаат' },
            },
            t = {
              regex: 'внес',
              email: 'адреса на е-пошта',
              url: 'URL',
              emoji: 'емоџи',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO датум и време',
              date: 'ISO датум',
              time: 'ISO време',
              duration: 'ISO времетраење',
              ipv4: 'IPv4 адреса',
              ipv6: 'IPv6 адреса',
              cidrv4: 'IPv4 опсег',
              cidrv6: 'IPv6 опсег',
              base64: 'base64-енкодирана низа',
              base64url: 'base64url-енкодирана низа',
              json_string: 'JSON низа',
              e164: 'E.164 број',
              jwt: 'JWT',
              template_literal: 'внес',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Грешен внес: се очекува ${n.expected}, примено ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'број';
                    case 'object':
                      if (Array.isArray(e)) return 'низа';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Invalid input: expected ${oI(n.values[0])}`;
                return `Грешана опција: се очекува една ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Премногу голем: се очекува ${n.origin ?? 'вредноста'} да има ${t}${n.maximum.toString()} ${r.unit ?? 'елементи'}`;
                return `Премногу голем: се очекува ${n.origin ?? 'вредноста'} да биде ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Премногу мал: се очекува ${n.origin} да има ${t}${n.minimum.toString()} ${r.unit}`;
                return `Премногу мал: се очекува ${n.origin} да биде ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Неважечка низа: мора да започнува со "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Неважечка низа: мора да завршува со "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Неважечка низа: мора да вклучува "${n.includes}"`;
                if ('regex' === n.format)
                  return `Неважечка низа: мора да одгоара на патернот ${n.pattern}`;
                return `Invalid ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Грешен број: мора да биде делив со ${n.divisor}`;
              case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Непрепознаени клучеви' : 'Непрепознаен клуч'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Грешен клуч во ${n.origin}`;
              case 'invalid_union':
                return 'Грешен внес';
              case 'invalid_element':
                return `Грешна вредност во ${n.origin}`;
              default:
                return `Грешен внес`;
            }
          };
        })(),
      };
    }
    function cT() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'aksara', verb: 'mempunyai' },
              file: { unit: 'bait', verb: 'mempunyai' },
              array: { unit: 'elemen', verb: 'mempunyai' },
              set: { unit: 'elemen', verb: 'mempunyai' },
            },
            t = {
              regex: 'input',
              email: 'alamat e-mel',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'tarikh masa ISO',
              date: 'tarikh ISO',
              time: 'masa ISO',
              duration: 'tempoh ISO',
              ipv4: 'alamat IPv4',
              ipv6: 'alamat IPv6',
              cidrv4: 'julat IPv4',
              cidrv6: 'julat IPv6',
              base64: 'string dikodkan base64',
              base64url: 'string dikodkan base64url',
              json_string: 'string JSON',
              e164: 'nombor E.164',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Input tidak sah: dijangka ${n.expected}, diterima ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'nombor';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Input tidak sah: dijangka ${oI(n.values[0])}`;
                return `Pilihan tidak sah: dijangka salah satu daripada ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Terlalu besar: dijangka ${n.origin ?? 'nilai'} ${r.verb} ${t}${n.maximum.toString()} ${r.unit ?? 'elemen'}`;
                return `Terlalu besar: dijangka ${n.origin ?? 'nilai'} adalah ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Terlalu kecil: dijangka ${n.origin} ${r.verb} ${t}${n.minimum.toString()} ${r.unit}`;
                return `Terlalu kecil: dijangka ${n.origin} adalah ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `String tidak sah: mesti bermula dengan "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `String tidak sah: mesti berakhir dengan "${n.suffix}"`;
                if ('includes' === n.format)
                  return `String tidak sah: mesti mengandungi "${n.includes}"`;
                if ('regex' === n.format)
                  return `String tidak sah: mesti sepadan dengan corak ${n.pattern}`;
                return `${t[n.format] ?? n.format} tidak sah`;
              case 'not_multiple_of':
                return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
              case 'unrecognized_keys':
                return `Kunci tidak dikenali: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Kunci tidak sah dalam ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Input tidak sah';
              case 'invalid_element':
                return `Nilai tidak sah dalam ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cN() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'tekens' },
              file: { unit: 'bytes' },
              array: { unit: 'elementen' },
              set: { unit: 'elementen' },
            },
            t = {
              regex: 'invoer',
              email: 'emailadres',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO datum en tijd',
              date: 'ISO datum',
              time: 'ISO tijd',
              duration: 'ISO duur',
              ipv4: 'IPv4-adres',
              ipv6: 'IPv6-adres',
              cidrv4: 'IPv4-bereik',
              cidrv6: 'IPv6-bereik',
              base64: 'base64-gecodeerde tekst',
              base64url: 'base64 URL-gecodeerde tekst',
              json_string: 'JSON string',
              e164: 'E.164-nummer',
              jwt: 'JWT',
              template_literal: 'invoer',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Ongeldige invoer: verwacht ${n.expected}, ontving ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'getal';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Ongeldige invoer: verwacht ${oI(n.values[0])}`;
                return `Ongeldige optie: verwacht \xe9\xe9n van ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Te lang: verwacht dat ${n.origin ?? 'waarde'} ${t}${n.maximum.toString()} ${r.unit ?? 'elementen'} bevat`;
                return `Te lang: verwacht dat ${n.origin ?? 'waarde'} ${t}${n.maximum.toString()} is`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Te kort: verwacht dat ${n.origin} ${t}${n.minimum.toString()} ${r.unit} bevat`;
                return `Te kort: verwacht dat ${n.origin} ${t}${n.minimum.toString()} is`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ongeldige tekst: moet met "${n.prefix}" beginnen`;
                if ('ends_with' === n.format)
                  return `Ongeldige tekst: moet op "${n.suffix}" eindigen`;
                if ('includes' === n.format)
                  return `Ongeldige tekst: moet "${n.includes}" bevatten`;
                if ('regex' === n.format)
                  return `Ongeldige tekst: moet overeenkomen met patroon ${n.pattern}`;
                return `Ongeldig: ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
              case 'unrecognized_keys':
                return `Onbekende key${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Ongeldige key in ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Ongeldige invoer';
              case 'invalid_element':
                return `Ongeldige waarde in ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cP() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'tegn', verb: 'å ha' },
              file: { unit: 'bytes', verb: 'å ha' },
              array: { unit: 'elementer', verb: 'å inneholde' },
              set: { unit: 'elementer', verb: 'å inneholde' },
            },
            t = {
              regex: 'input',
              email: 'e-postadresse',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO dato- og klokkeslett',
              date: 'ISO-dato',
              time: 'ISO-klokkeslett',
              duration: 'ISO-varighet',
              ipv4: 'IPv4-område',
              ipv6: 'IPv6-område',
              cidrv4: 'IPv4-spekter',
              cidrv6: 'IPv6-spekter',
              base64: 'base64-enkodet streng',
              base64url: 'base64url-enkodet streng',
              json_string: 'JSON-streng',
              e164: 'E.164-nummer',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Ugyldig input: forventet ${n.expected}, fikk ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'tall';
                    case 'object':
                      if (Array.isArray(e)) return 'liste';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Ugyldig verdi: forventet ${oI(n.values[0])}`;
                return `Ugyldig valg: forventet en av ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `For stor(t): forventet ${n.origin ?? 'value'} til \xe5 ha ${t}${n.maximum.toString()} ${r.unit ?? 'elementer'}`;
                return `For stor(t): forventet ${n.origin ?? 'value'} til \xe5 ha ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `For lite(n): forventet ${n.origin} til \xe5 ha ${t}${n.minimum.toString()} ${r.unit}`;
                return `For lite(n): forventet ${n.origin} til \xe5 ha ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ugyldig streng: m\xe5 starte med "${n.prefix}"`;
                if ('ends_with' === n.format) return `Ugyldig streng: m\xe5 ende med "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Ugyldig streng: m\xe5 inneholde "${n.includes}"`;
                if ('regex' === n.format)
                  return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${n.pattern}`;
                return `Ugyldig ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${n.divisor}`;
              case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Ukjente nøkler' : 'Ukjent nøkkel'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Ugyldig n\xf8kkel i ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Ugyldig input';
              case 'invalid_element':
                return `Ugyldig verdi i ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cU() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'harf', verb: 'olmalıdır' },
              file: { unit: 'bayt', verb: 'olmalıdır' },
              array: { unit: 'unsur', verb: 'olmalıdır' },
              set: { unit: 'unsur', verb: 'olmalıdır' },
            },
            t = {
              regex: 'giren',
              email: 'epostagâh',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO hengâmı',
              date: 'ISO tarihi',
              time: 'ISO zamanı',
              duration: 'ISO müddeti',
              ipv4: 'IPv4 nişânı',
              ipv6: 'IPv6 nişânı',
              cidrv4: 'IPv4 menzili',
              cidrv6: 'IPv6 menzili',
              base64: 'base64-şifreli metin',
              base64url: 'base64url-şifreli metin',
              json_string: 'JSON metin',
              e164: 'E.164 sayısı',
              jwt: 'JWT',
              template_literal: 'giren',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `F\xe2sit giren: umulan ${n.expected}, alınan ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'numara';
                    case 'object':
                      if (Array.isArray(e)) return 'saf';
                      if (null === e) return 'gayb';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `F\xe2sit giren: umulan ${oI(n.values[0])}`;
                return `F\xe2sit tercih: m\xfbteberler ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Fazla b\xfcy\xfck: ${n.origin ?? 'value'}, ${t}${n.maximum.toString()} ${r.unit ?? 'elements'} sahip olmalıydı.`;
                return `Fazla b\xfcy\xfck: ${n.origin ?? 'value'}, ${t}${n.maximum.toString()} olmalıydı.`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Fazla k\xfc\xe7\xfck: ${n.origin}, ${t}${n.minimum.toString()} ${r.unit} sahip olmalıydı.`;
                return `Fazla k\xfc\xe7\xfck: ${n.origin}, ${t}${n.minimum.toString()} olmalıydı.`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `F\xe2sit metin: "${n.prefix}" ile başlamalı.`;
                if ('ends_with' === n.format) return `F\xe2sit metin: "${n.suffix}" ile bitmeli.`;
                if ('includes' === n.format)
                  return `F\xe2sit metin: "${n.includes}" ihtiv\xe2 etmeli.`;
                if ('regex' === n.format) return `F\xe2sit metin: ${n.pattern} nakşına uymalı.`;
                return `F\xe2sit ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `F\xe2sit sayı: ${n.divisor} katı olmalıydı.`;
              case 'unrecognized_keys':
                return `Tanınmayan anahtar ${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `${n.origin} i\xe7in tanınmayan anahtar var.`;
              case 'invalid_union':
                return 'Giren tanınamadı.';
              case 'invalid_element':
                return `${n.origin} i\xe7in tanınmayan kıymet var.`;
              default:
                return `Kıymet tanınamadı.`;
            }
          };
        })(),
      };
    }
    function cA() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'توکي', verb: 'ولري' },
              file: { unit: 'بایټس', verb: 'ولري' },
              array: { unit: 'توکي', verb: 'ولري' },
              set: { unit: 'توکي', verb: 'ولري' },
            },
            t = {
              regex: 'ورودي',
              email: 'بریښنالیک',
              url: 'یو آر ال',
              emoji: 'ایموجي',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'نیټه او وخت',
              date: 'نېټه',
              time: 'وخت',
              duration: 'موده',
              ipv4: 'د IPv4 پته',
              ipv6: 'د IPv6 پته',
              cidrv4: 'د IPv4 ساحه',
              cidrv6: 'د IPv6 ساحه',
              base64: 'base64-encoded متن',
              base64url: 'base64url-encoded متن',
              json_string: 'JSON متن',
              e164: 'د E.164 شمېره',
              jwt: 'JWT',
              template_literal: 'ورودي',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `ناسم ورودي: باید ${n.expected} وای, مګر ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'عدد';
                    case 'object':
                      if (Array.isArray(e)) return 'ارې';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)} ترلاسه شو`;
              case 'invalid_value':
                if (1 === n.values.length) return `ناسم ورودي: باید ${oI(n.values[0])} وای`;
                return `ناسم انتخاب: باید یو له ${a9(n.values, '|')} څخه وای`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `ډیر لوی: ${n.origin ?? 'ارزښت'} باید ${t}${n.maximum.toString()} ${r.unit ?? 'عنصرونه'} ولري`;
                return `ډیر لوی: ${n.origin ?? 'ارزښت'} باید ${t}${n.maximum.toString()} وي`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `ډیر کوچنی: ${n.origin} باید ${t}${n.minimum.toString()} ${r.unit} ولري`;
                return `ډیر کوچنی: ${n.origin} باید ${t}${n.minimum.toString()} وي`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format) return `ناسم متن: باید د "${n.prefix}" سره پیل شي`;
                if ('ends_with' === n.format)
                  return `ناسم متن: باید د "${n.suffix}" سره پای ته ورسيږي`;
                if ('includes' === n.format) return `ناسم متن: باید "${n.includes}" ولري`;
                if ('regex' === n.format) return `ناسم متن: باید د ${n.pattern} سره مطابقت ولري`;
                return `${t[n.format] ?? n.format} ناسم دی`;
              case 'not_multiple_of':
                return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
              case 'unrecognized_keys':
                return `ناسم ${n.keys.length > 1 ? 'کلیډونه' : 'کلیډ'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `ناسم کلیډ په ${n.origin} کې`;
              case 'invalid_union':
              default:
                return `ناسمه ورودي`;
              case 'invalid_element':
                return `ناسم عنصر په ${n.origin} کې`;
            }
          };
        })(),
      };
    }
    function cD() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'znaków', verb: 'mieć' },
              file: { unit: 'bajtów', verb: 'mieć' },
              array: { unit: 'elementów', verb: 'mieć' },
              set: { unit: 'elementów', verb: 'mieć' },
            },
            t = {
              regex: 'wyrażenie',
              email: 'adres email',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'data i godzina w formacie ISO',
              date: 'data w formacie ISO',
              time: 'godzina w formacie ISO',
              duration: 'czas trwania ISO',
              ipv4: 'adres IPv4',
              ipv6: 'adres IPv6',
              cidrv4: 'zakres IPv4',
              cidrv6: 'zakres IPv6',
              base64: 'ciąg znaków zakodowany w formacie base64',
              base64url: 'ciąg znaków zakodowany w formacie base64url',
              json_string: 'ciąg znaków w formacie JSON',
              e164: 'liczba E.164',
              jwt: 'JWT',
              template_literal: 'wejście',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Nieprawidłowe dane wejściowe: oczekiwano ${n.expected}, otrzymano ${((
                  e
                ) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'liczba';
                    case 'object':
                      if (Array.isArray(e)) return 'tablica';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Nieprawidłowe dane wejściowe: oczekiwano ${oI(n.values[0])}`;
                return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Za duża wartość: oczekiwano, że ${n.origin ?? 'wartość'} będzie mieć ${t}${n.maximum.toString()} ${r.unit ?? 'elementów'}`;
                return `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? 'wartość'} będzie wynosić ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Za mała wartość: oczekiwano, że ${n.origin ?? 'wartość'} będzie mieć ${t}${n.minimum.toString()} ${r.unit ?? 'elementów'}`;
                return `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? 'wartość'} będzie wynosić ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${n.includes}"`;
                if ('regex' === n.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${n.pattern}`;
                return `Nieprawidłow(y/a/e) ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
              case 'unrecognized_keys':
                return `Nierozpoznane klucze${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Nieprawidłowy klucz w ${n.origin}`;
              case 'invalid_union':
                return 'Nieprawidłowe dane wejściowe';
              case 'invalid_element':
                return `Nieprawidłowa wartość w ${n.origin}`;
              default:
                return `Nieprawidłowe dane wejściowe`;
            }
          };
        })(),
      };
    }
    function cz() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'caracteres', verb: 'ter' },
              file: { unit: 'bytes', verb: 'ter' },
              array: { unit: 'itens', verb: 'ter' },
              set: { unit: 'itens', verb: 'ter' },
            },
            t = {
              regex: 'padrão',
              email: 'endereço de e-mail',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'data e hora ISO',
              date: 'data ISO',
              time: 'hora ISO',
              duration: 'duração ISO',
              ipv4: 'endereço IPv4',
              ipv6: 'endereço IPv6',
              cidrv4: 'faixa de IPv4',
              cidrv6: 'faixa de IPv6',
              base64: 'texto codificado em base64',
              base64url: 'URL codificada em base64',
              json_string: 'texto JSON',
              e164: 'número E.164',
              jwt: 'JWT',
              template_literal: 'entrada',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Tipo inv\xe1lido: esperado ${n.expected}, recebido ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'número';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'nulo';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Entrada inv\xe1lida: esperado ${oI(n.values[0])}`;
                return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Muito grande: esperado que ${n.origin ?? 'valor'} tivesse ${t}${n.maximum.toString()} ${r.unit ?? 'elementos'}`;
                return `Muito grande: esperado que ${n.origin ?? 'valor'} fosse ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Muito pequeno: esperado que ${n.origin} tivesse ${t}${n.minimum.toString()} ${r.unit}`;
                return `Muito pequeno: esperado que ${n.origin} fosse ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Texto inv\xe1lido: deve come\xe7ar com "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Texto inv\xe1lido: deve terminar com "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Texto inv\xe1lido: deve incluir "${n.includes}"`;
                if ('regex' === n.format)
                  return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${n.pattern}`;
                return `${t[n.format] ?? n.format} inv\xe1lido`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${n.divisor}`;
              case 'unrecognized_keys':
                return `Chave${n.keys.length > 1 ? 's' : ''} desconhecida${n.keys.length > 1 ? 's' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Chave inv\xe1lida em ${n.origin}`;
              case 'invalid_union':
                return 'Entrada inválida';
              case 'invalid_element':
                return `Valor inv\xe1lido em ${n.origin}`;
              default:
                return `Campo inv\xe1lido`;
            }
          };
        })(),
      };
    }
    function cj(e, t, n, r) {
      let i = Math.abs(e),
        a = i % 10,
        o = i % 100;
      return o >= 11 && o <= 19 ? r : 1 === a ? t : a >= 2 && a <= 4 ? n : r;
    }
    function cZ() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: { one: 'символ', few: 'символа', many: 'символов' }, verb: 'иметь' },
              file: { unit: { one: 'байт', few: 'байта', many: 'байт' }, verb: 'иметь' },
              array: {
                unit: { one: 'элемент', few: 'элемента', many: 'элементов' },
                verb: 'иметь',
              },
              set: { unit: { one: 'элемент', few: 'элемента', many: 'элементов' }, verb: 'иметь' },
            },
            t = {
              regex: 'ввод',
              email: 'email адрес',
              url: 'URL',
              emoji: 'эмодзи',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO дата и время',
              date: 'ISO дата',
              time: 'ISO время',
              duration: 'ISO длительность',
              ipv4: 'IPv4 адрес',
              ipv6: 'IPv6 адрес',
              cidrv4: 'IPv4 диапазон',
              cidrv6: 'IPv6 диапазон',
              base64: 'строка в формате base64',
              base64url: 'строка в формате base64url',
              json_string: 'JSON строка',
              e164: 'номер E.164',
              jwt: 'JWT',
              template_literal: 'ввод',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Неверный ввод: ожидалось ${n.expected}, получено ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'число';
                    case 'object':
                      if (Array.isArray(e)) return 'массив';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Неверный ввод: ожидалось ${oI(n.values[0])}`;
                return `Неверный вариант: ожидалось одно из ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r) {
                  let e = cj(Number(n.maximum), r.unit.one, r.unit.few, r.unit.many);
                  return `Слишком большое значение: ожидалось, что ${n.origin ?? 'значение'} будет иметь ${t}${n.maximum.toString()} ${e}`;
                }
                return `Слишком большое значение: ожидалось, что ${n.origin ?? 'значение'} будет ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r) {
                  let e = cj(Number(n.minimum), r.unit.one, r.unit.few, r.unit.many);
                  return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${t}${n.minimum.toString()} ${e}`;
                }
                return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Неверная строка: должна начинаться с "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Неверная строка: должна заканчиваться на "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Неверная строка: должна содержать "${n.includes}"`;
                if ('regex' === n.format)
                  return `Неверная строка: должна соответствовать шаблону ${n.pattern}`;
                return `Неверный ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Неверное число: должно быть кратным ${n.divisor}`;
              case 'unrecognized_keys':
                return `Нераспознанн${n.keys.length > 1 ? 'ые' : 'ый'} ключ${n.keys.length > 1 ? 'и' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Неверный ключ в ${n.origin}`;
              case 'invalid_union':
                return 'Неверные входные данные';
              case 'invalid_element':
                return `Неверное значение в ${n.origin}`;
              default:
                return `Неверные входные данные`;
            }
          };
        })(),
      };
    }
    function cR() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'znakov', verb: 'imeti' },
              file: { unit: 'bajtov', verb: 'imeti' },
              array: { unit: 'elementov', verb: 'imeti' },
              set: { unit: 'elementov', verb: 'imeti' },
            },
            t = {
              regex: 'vnos',
              email: 'e-poštni naslov',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO datum in čas',
              date: 'ISO datum',
              time: 'ISO čas',
              duration: 'ISO trajanje',
              ipv4: 'IPv4 naslov',
              ipv6: 'IPv6 naslov',
              cidrv4: 'obseg IPv4',
              cidrv6: 'obseg IPv6',
              base64: 'base64 kodiran niz',
              base64url: 'base64url kodiran niz',
              json_string: 'JSON niz',
              e164: 'E.164 številka',
              jwt: 'JWT',
              template_literal: 'vnos',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Neveljaven vnos: pričakovano ${n.expected}, prejeto ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'število';
                    case 'object':
                      if (Array.isArray(e)) return 'tabela';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Neveljaven vnos: pričakovano ${oI(n.values[0])}`;
                return `Neveljavna možnost: pričakovano eno izmed ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Preveliko: pričakovano, da bo ${n.origin ?? 'vrednost'} imelo ${t}${n.maximum.toString()} ${r.unit ?? 'elementov'}`;
                return `Preveliko: pričakovano, da bo ${n.origin ?? 'vrednost'} ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Premajhno: pričakovano, da bo ${n.origin} imelo ${t}${n.minimum.toString()} ${r.unit}`;
                return `Premajhno: pričakovano, da bo ${n.origin} ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Neveljaven niz: mora se začeti z "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Neveljaven niz: mora se končati z "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Neveljaven niz: mora vsebovati "${n.includes}"`;
                if ('regex' === n.format)
                  return `Neveljaven niz: mora ustrezati vzorcu ${n.pattern}`;
                return `Neveljaven ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
              case 'unrecognized_keys':
                return `Neprepoznan${n.keys.length > 1 ? 'i ključi' : ' ključ'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Neveljaven ključ v ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Neveljaven vnos';
              case 'invalid_element':
                return `Neveljavna vrednost v ${n.origin}`;
            }
          };
        })(),
      };
    }
    function cC() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'tecken', verb: 'att ha' },
              file: { unit: 'bytes', verb: 'att ha' },
              array: { unit: 'objekt', verb: 'att innehålla' },
              set: { unit: 'objekt', verb: 'att innehålla' },
            },
            t = {
              regex: 'reguljärt uttryck',
              email: 'e-postadress',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO-datum och tid',
              date: 'ISO-datum',
              time: 'ISO-tid',
              duration: 'ISO-varaktighet',
              ipv4: 'IPv4-intervall',
              ipv6: 'IPv6-intervall',
              cidrv4: 'IPv4-spektrum',
              cidrv6: 'IPv6-spektrum',
              base64: 'base64-kodad sträng',
              base64url: 'base64url-kodad sträng',
              json_string: 'JSON-sträng',
              e164: 'E.164-nummer',
              jwt: 'JWT',
              template_literal: 'mall-literal',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Ogiltig inmatning: f\xf6rv\xe4ntat ${n.expected}, fick ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'antal';
                    case 'object':
                      if (Array.isArray(e)) return 'lista';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Ogiltig inmatning: f\xf6rv\xe4ntat ${oI(n.values[0])}`;
                return `Ogiltigt val: f\xf6rv\xe4ntade en av ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `F\xf6r stor(t): f\xf6rv\xe4ntade ${n.origin ?? 'värdet'} att ha ${t}${n.maximum.toString()} ${r.unit ?? 'element'}`;
                return `F\xf6r stor(t): f\xf6rv\xe4ntat ${n.origin ?? 'värdet'} att ha ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `F\xf6r lite(t): f\xf6rv\xe4ntade ${n.origin ?? 'värdet'} att ha ${t}${n.minimum.toString()} ${r.unit}`;
                return `F\xf6r lite(t): f\xf6rv\xe4ntade ${n.origin ?? 'värdet'} att ha ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Ogiltig str\xe4ng: m\xe5ste sluta med "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${n.includes}"`;
                if ('regex' === n.format)
                  return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${n.pattern}"`;
                return `Ogiltig(t) ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Ogiltigt tal: m\xe5ste vara en multipel av ${n.divisor}`;
              case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Okända nycklar' : 'Okänd nyckel'}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Ogiltig nyckel i ${n.origin ?? 'värdet'}`;
              case 'invalid_union':
              default:
                return 'Ogiltig input';
              case 'invalid_element':
                return `Ogiltigt v\xe4rde i ${n.origin ?? 'värdet'}`;
            }
          };
        })(),
      };
    }
    function cL() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'எழுத்துக்கள்', verb: 'கொண்டிருக்க வேண்டும்' },
              file: { unit: 'பைட்டுகள்', verb: 'கொண்டிருக்க வேண்டும்' },
              array: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
              set: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
            },
            t = {
              regex: 'உள்ளீடு',
              email: 'மின்னஞ்சல் முகவரி',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO தேதி நேரம்',
              date: 'ISO தேதி',
              time: 'ISO நேரம்',
              duration: 'ISO கால அளவு',
              ipv4: 'IPv4 முகவரி',
              ipv6: 'IPv6 முகவரி',
              cidrv4: 'IPv4 வரம்பு',
              cidrv6: 'IPv6 வரம்பு',
              base64: 'base64-encoded சரம்',
              base64url: 'base64url-encoded சரம்',
              json_string: 'JSON சரம்',
              e164: 'E.164 எண்',
              jwt: 'JWT',
              template_literal: 'input',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${n.expected}, பெறப்பட்டது ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'எண் அல்லாதது' : 'எண்';
                    case 'object':
                      if (Array.isArray(e)) return 'அணி';
                      if (null === e) return 'வெறுமை';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${oI(n.values[0])}`;
                return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${a9(n.values, '|')} இல் ஒன்று`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? 'மதிப்பு'} ${t}${n.maximum.toString()} ${r.unit ?? 'உறுப்புகள்'} ஆக இருக்க வேண்டும்`;
                return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? 'மதிப்பு'} ${t}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${t}${n.minimum.toString()} ${r.unit} ஆக இருக்க வேண்டும்`;
                return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${t}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `தவறான சரம்: "${n.prefix}" இல் தொடங்க வேண்டும்`;
                if ('ends_with' === n.format)
                  return `தவறான சரம்: "${n.suffix}" இல் முடிவடைய வேண்டும்`;
                if ('includes' === n.format)
                  return `தவறான சரம்: "${n.includes}" ஐ உள்ளடக்க வேண்டும்`;
                if ('regex' === n.format)
                  return `தவறான சரம்: ${n.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                return `தவறான ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
              case 'unrecognized_keys':
                return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? 'கள்' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `${n.origin} இல் தவறான விசை`;
              case 'invalid_union':
                return 'தவறான உள்ளீடு';
              case 'invalid_element':
                return `${n.origin} இல் தவறான மதிப்பு`;
              default:
                return `தவறான உள்ளீடு`;
            }
          };
        })(),
      };
    }
    function cM() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'ตัวอักษร', verb: 'ควรมี' },
              file: { unit: 'ไบต์', verb: 'ควรมี' },
              array: { unit: 'รายการ', verb: 'ควรมี' },
              set: { unit: 'รายการ', verb: 'ควรมี' },
            },
            t = {
              regex: 'ข้อมูลที่ป้อน',
              email: 'ที่อยู่อีเมล',
              url: 'URL',
              emoji: 'อิโมจิ',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'วันที่เวลาแบบ ISO',
              date: 'วันที่แบบ ISO',
              time: 'เวลาแบบ ISO',
              duration: 'ช่วงเวลาแบบ ISO',
              ipv4: 'ที่อยู่ IPv4',
              ipv6: 'ที่อยู่ IPv6',
              cidrv4: 'ช่วง IP แบบ IPv4',
              cidrv6: 'ช่วง IP แบบ IPv6',
              base64: 'ข้อความแบบ Base64',
              base64url: 'ข้อความแบบ Base64 สำหรับ URL',
              json_string: 'ข้อความแบบ JSON',
              e164: 'เบอร์โทรศัพท์ระหว่างประเทศ (E.164)',
              jwt: 'โทเคน JWT',
              template_literal: 'ข้อมูลที่ป้อน',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${n.expected} แต่ได้รับ ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'ไม่ใช่ตัวเลข (NaN)' : 'ตัวเลข';
                    case 'object':
                      if (Array.isArray(e)) return 'อาร์เรย์ (Array)';
                      if (null === e) return 'ไม่มีค่า (null)';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${oI(n.values[0])}`;
                return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? 'ไม่เกิน' : 'น้อยกว่า',
                  r = e[n.origin] ?? null;
                if (r)
                  return `เกินกำหนด: ${n.origin ?? 'ค่า'} ควรมี${t} ${n.maximum.toString()} ${r.unit ?? 'รายการ'}`;
                return `เกินกำหนด: ${n.origin ?? 'ค่า'} ควรมี${t} ${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? 'อย่างน้อย' : 'มากกว่า',
                  r = e[n.origin] ?? null;
                if (r)
                  return `น้อยกว่ากำหนด: ${n.origin} ควรมี${t} ${n.minimum.toString()} ${r.unit}`;
                return `น้อยกว่ากำหนด: ${n.origin} ควรมี${t} ${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${n.suffix}"`;
                if ('includes' === n.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${n.includes}" อยู่ในข้อความ`;
                if ('regex' === n.format)
                  return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${n.pattern}`;
                return `รูปแบบไม่ถูกต้อง: ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
              case 'unrecognized_keys':
                return `พบคีย์ที่ไม่รู้จัก: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `คีย์ไม่ถูกต้องใน ${n.origin}`;
              case 'invalid_union':
                return 'ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้';
              case 'invalid_element':
                return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
              default:
                return `ข้อมูลไม่ถูกต้อง`;
            }
          };
        })(),
      };
    }
    function cF() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'karakter', verb: 'olmalı' },
              file: { unit: 'bayt', verb: 'olmalı' },
              array: { unit: 'öğe', verb: 'olmalı' },
              set: { unit: 'öğe', verb: 'olmalı' },
            },
            t = {
              regex: 'girdi',
              email: 'e-posta adresi',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO tarih ve saat',
              date: 'ISO tarih',
              time: 'ISO saat',
              duration: 'ISO süre',
              ipv4: 'IPv4 adresi',
              ipv6: 'IPv6 adresi',
              cidrv4: 'IPv4 aralığı',
              cidrv6: 'IPv6 aralığı',
              base64: 'base64 ile şifrelenmiş metin',
              base64url: 'base64url ile şifrelenmiş metin',
              json_string: 'JSON dizesi',
              e164: 'E.164 sayısı',
              jwt: 'JWT',
              template_literal: 'Şablon dizesi',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Ge\xe7ersiz değer: beklenen ${n.expected}, alınan ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `Ge\xe7ersiz değer: beklenen ${oI(n.values[0])}`;
                return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `\xc7ok b\xfcy\xfck: beklenen ${n.origin ?? 'değer'} ${t}${n.maximum.toString()} ${r.unit ?? 'öğe'}`;
                return `\xc7ok b\xfcy\xfck: beklenen ${n.origin ?? 'değer'} ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `\xc7ok k\xfc\xe7\xfck: beklenen ${n.origin} ${t}${n.minimum.toString()} ${r.unit}`;
                return `\xc7ok k\xfc\xe7\xfck: beklenen ${n.origin} ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ge\xe7ersiz metin: "${n.prefix}" ile başlamalı`;
                if ('ends_with' === n.format) return `Ge\xe7ersiz metin: "${n.suffix}" ile bitmeli`;
                if ('includes' === n.format)
                  return `Ge\xe7ersiz metin: "${n.includes}" i\xe7ermeli`;
                if ('regex' === n.format) return `Ge\xe7ersiz metin: ${n.pattern} desenine uymalı`;
                return `Ge\xe7ersiz ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Ge\xe7ersiz sayı: ${n.divisor} ile tam b\xf6l\xfcnebilmeli`;
              case 'unrecognized_keys':
                return `Tanınmayan anahtar${n.keys.length > 1 ? 'lar' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `${n.origin} i\xe7inde ge\xe7ersiz anahtar`;
              case 'invalid_union':
                return 'Geçersiz değer';
              case 'invalid_element':
                return `${n.origin} i\xe7inde ge\xe7ersiz değer`;
              default:
                return `Ge\xe7ersiz değer`;
            }
          };
        })(),
      };
    }
    function cB() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'символів', verb: 'матиме' },
              file: { unit: 'байтів', verb: 'матиме' },
              array: { unit: 'елементів', verb: 'матиме' },
              set: { unit: 'елементів', verb: 'матиме' },
            },
            t = {
              regex: 'вхідні дані',
              email: 'адреса електронної пошти',
              url: 'URL',
              emoji: 'емодзі',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'дата та час ISO',
              date: 'дата ISO',
              time: 'час ISO',
              duration: 'тривалість ISO',
              ipv4: 'адреса IPv4',
              ipv6: 'адреса IPv6',
              cidrv4: 'діапазон IPv4',
              cidrv6: 'діапазон IPv6',
              base64: 'рядок у кодуванні base64',
              base64url: 'рядок у кодуванні base64url',
              json_string: 'рядок JSON',
              e164: 'номер E.164',
              jwt: 'JWT',
              template_literal: 'вхідні дані',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Неправильні вхідні дані: очікується ${n.expected}, отримано ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'число';
                    case 'object':
                      if (Array.isArray(e)) return 'масив';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Неправильні вхідні дані: очікується ${oI(n.values[0])}`;
                return `Неправильна опція: очікується одне з ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Занадто велике: очікується, що ${n.origin ?? 'значення'} ${r.verb} ${t}${n.maximum.toString()} ${r.unit ?? 'елементів'}`;
                return `Занадто велике: очікується, що ${n.origin ?? 'значення'} буде ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Занадто мале: очікується, що ${n.origin} ${r.verb} ${t}${n.minimum.toString()} ${r.unit}`;
                return `Занадто мале: очікується, що ${n.origin} буде ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Неправильний рядок: повинен починатися з "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Неправильний рядок: повинен закінчуватися на "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Неправильний рядок: повинен містити "${n.includes}"`;
                if ('regex' === n.format)
                  return `Неправильний рядок: повинен відповідати шаблону ${n.pattern}`;
                return `Неправильний ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Неправильне число: повинно бути кратним ${n.divisor}`;
              case 'unrecognized_keys':
                return `Нерозпізнаний ключ${n.keys.length > 1 ? 'і' : ''}: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Неправильний ключ у ${n.origin}`;
              case 'invalid_union':
                return 'Неправильні вхідні дані';
              case 'invalid_element':
                return `Неправильне значення у ${n.origin}`;
              default:
                return `Неправильні вхідні дані`;
            }
          };
        })(),
      };
    }
    function cV() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'حروف', verb: 'ہونا' },
              file: { unit: 'بائٹس', verb: 'ہونا' },
              array: { unit: 'آئٹمز', verb: 'ہونا' },
              set: { unit: 'آئٹمز', verb: 'ہونا' },
            },
            t = {
              regex: 'ان پٹ',
              email: 'ای میل ایڈریس',
              url: 'یو آر ایل',
              emoji: 'ایموجی',
              uuid: 'یو یو آئی ڈی',
              uuidv4: 'یو یو آئی ڈی وی 4',
              uuidv6: 'یو یو آئی ڈی وی 6',
              nanoid: 'نینو آئی ڈی',
              guid: 'جی یو آئی ڈی',
              cuid: 'سی یو آئی ڈی',
              cuid2: 'سی یو آئی ڈی 2',
              ulid: 'یو ایل آئی ڈی',
              xid: 'ایکس آئی ڈی',
              ksuid: 'کے ایس یو آئی ڈی',
              datetime: 'آئی ایس او ڈیٹ ٹائم',
              date: 'آئی ایس او تاریخ',
              time: 'آئی ایس او وقت',
              duration: 'آئی ایس او مدت',
              ipv4: 'آئی پی وی 4 ایڈریس',
              ipv6: 'آئی پی وی 6 ایڈریس',
              cidrv4: 'آئی پی وی 4 رینج',
              cidrv6: 'آئی پی وی 6 رینج',
              base64: 'بیس 64 ان کوڈڈ سٹرنگ',
              base64url: 'بیس 64 یو آر ایل ان کوڈڈ سٹرنگ',
              json_string: 'جے ایس او این سٹرنگ',
              e164: 'ای 164 نمبر',
              jwt: 'جے ڈبلیو ٹی',
              template_literal: 'ان پٹ',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `غلط ان پٹ: ${n.expected} متوقع تھا، ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'نمبر';
                    case 'object':
                      if (Array.isArray(e)) return 'آرے';
                      if (null === e) return 'نل';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)} موصول ہوا`;
              case 'invalid_value':
                if (1 === n.values.length) return `غلط ان پٹ: ${oI(n.values[0])} متوقع تھا`;
                return `غلط آپشن: ${a9(n.values, '|')} میں سے ایک متوقع تھا`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `بہت بڑا: ${n.origin ?? 'ویلیو'} کے ${t}${n.maximum.toString()} ${r.unit ?? 'عناصر'} ہونے متوقع تھے`;
                return `بہت بڑا: ${n.origin ?? 'ویلیو'} کا ${t}${n.maximum.toString()} ہونا متوقع تھا`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `بہت چھوٹا: ${n.origin} کے ${t}${n.minimum.toString()} ${r.unit} ہونے متوقع تھے`;
                return `بہت چھوٹا: ${n.origin} کا ${t}${n.minimum.toString()} ہونا متوقع تھا`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `غلط سٹرنگ: "${n.prefix}" سے شروع ہونا چاہیے`;
                if ('ends_with' === n.format) return `غلط سٹرنگ: "${n.suffix}" پر ختم ہونا چاہیے`;
                if ('includes' === n.format) return `غلط سٹرنگ: "${n.includes}" شامل ہونا چاہیے`;
                if ('regex' === n.format) return `غلط سٹرنگ: پیٹرن ${n.pattern} سے میچ ہونا چاہیے`;
                return `غلط ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
              case 'unrecognized_keys':
                return `غیر تسلیم شدہ کی${n.keys.length > 1 ? 'ز' : ''}: ${a9(n.keys, '، ')}`;
              case 'invalid_key':
                return `${n.origin} میں غلط کی`;
              case 'invalid_union':
                return 'غلط ان پٹ';
              case 'invalid_element':
                return `${n.origin} میں غلط ویلیو`;
              default:
                return `غلط ان پٹ`;
            }
          };
        })(),
      };
    }
    function cG() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'ký tự', verb: 'có' },
              file: { unit: 'byte', verb: 'có' },
              array: { unit: 'phần tử', verb: 'có' },
              set: { unit: 'phần tử', verb: 'có' },
            },
            t = {
              regex: 'đầu vào',
              email: 'địa chỉ email',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ngày giờ ISO',
              date: 'ngày ISO',
              time: 'giờ ISO',
              duration: 'khoảng thời gian ISO',
              ipv4: 'địa chỉ IPv4',
              ipv6: 'địa chỉ IPv6',
              cidrv4: 'dải IPv4',
              cidrv6: 'dải IPv6',
              base64: 'chuỗi mã hóa base64',
              base64url: 'chuỗi mã hóa base64url',
              json_string: 'chuỗi JSON',
              e164: 'số E.164',
              jwt: 'JWT',
              template_literal: 'đầu vào',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${n.expected}, nhận được ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'số';
                    case 'object':
                      if (Array.isArray(e)) return 'mảng';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${oI(n.values[0])}`;
                return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Qu\xe1 lớn: mong đợi ${n.origin ?? 'giá trị'} ${r.verb} ${t}${n.maximum.toString()} ${r.unit ?? 'phần tử'}`;
                return `Qu\xe1 lớn: mong đợi ${n.origin ?? 'giá trị'} ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `Qu\xe1 nhỏ: mong đợi ${n.origin} ${r.verb} ${t}${n.minimum.toString()} ${r.unit}`;
                return `Qu\xe1 nhỏ: mong đợi ${n.origin} ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${n.suffix}"`;
                if ('includes' === n.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${n.includes}"`;
                if ('regex' === n.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${n.pattern}`;
                return `${t[n.format] ?? n.format} kh\xf4ng hợp lệ`;
              case 'not_multiple_of':
                return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${n.divisor}`;
              case 'unrecognized_keys':
                return `Kh\xf3a kh\xf4ng được nhận dạng: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Kh\xf3a kh\xf4ng hợp lệ trong ${n.origin}`;
              case 'invalid_union':
                return 'Đầu vào không hợp lệ';
              case 'invalid_element':
                return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${n.origin}`;
              default:
                return `Đầu v\xe0o kh\xf4ng hợp lệ`;
            }
          };
        })(),
      };
    }
    function cJ() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: '字符', verb: '包含' },
              file: { unit: '字节', verb: '包含' },
              array: { unit: '项', verb: '包含' },
              set: { unit: '项', verb: '包含' },
            },
            t = {
              regex: '输入',
              email: '电子邮件',
              url: 'URL',
              emoji: '表情符号',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO日期时间',
              date: 'ISO日期',
              time: 'ISO时间',
              duration: 'ISO时长',
              ipv4: 'IPv4地址',
              ipv6: 'IPv6地址',
              cidrv4: 'IPv4网段',
              cidrv6: 'IPv6网段',
              base64: 'base64编码字符串',
              base64url: 'base64url编码字符串',
              json_string: 'JSON字符串',
              e164: 'E.164号码',
              jwt: 'JWT',
              template_literal: '输入',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `无效输入：期望 ${n.expected}，实际接收 ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? '非数字(NaN)' : '数字';
                    case 'object':
                      if (Array.isArray(e)) return '数组';
                      if (null === e) return '空值(null)';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `无效输入：期望 ${oI(n.values[0])}`;
                return `无效选项：期望以下之一 ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `数值过大：期望 ${n.origin ?? '值'} ${t}${n.maximum.toString()} ${r.unit ?? '个元素'}`;
                return `数值过大：期望 ${n.origin ?? '值'} ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r) return `数值过小：期望 ${n.origin} ${t}${n.minimum.toString()} ${r.unit}`;
                return `数值过小：期望 ${n.origin} ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format) return `无效字符串：必须以 "${n.prefix}" 开头`;
                if ('ends_with' === n.format) return `无效字符串：必须以 "${n.suffix}" 结尾`;
                if ('includes' === n.format) return `无效字符串：必须包含 "${n.includes}"`;
                if ('regex' === n.format) return `无效字符串：必须满足正则表达式 ${n.pattern}`;
                return `无效${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `无效数字：必须是 ${n.divisor} 的倍数`;
              case 'unrecognized_keys':
                return `出现未知的键(key): ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `${n.origin} 中的键(key)无效`;
              case 'invalid_union':
                return '无效输入';
              case 'invalid_element':
                return `${n.origin} 中包含无效值(value)`;
              default:
                return `无效输入`;
            }
          };
        })(),
      };
    }
    function cW() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: '字元', verb: '擁有' },
              file: { unit: '位元組', verb: '擁有' },
              array: { unit: '項目', verb: '擁有' },
              set: { unit: '項目', verb: '擁有' },
            },
            t = {
              regex: '輸入',
              email: '郵件地址',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'ISO 日期時間',
              date: 'ISO 日期',
              time: 'ISO 時間',
              duration: 'ISO 期間',
              ipv4: 'IPv4 位址',
              ipv6: 'IPv6 位址',
              cidrv4: 'IPv4 範圍',
              cidrv6: 'IPv6 範圍',
              base64: 'base64 編碼字串',
              base64url: 'base64url 編碼字串',
              json_string: 'JSON 字串',
              e164: 'E.164 數值',
              jwt: 'JWT',
              template_literal: '輸入',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `無效的輸入值：預期為 ${n.expected}，但收到 ${((e) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(e)) return 'array';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length) return `無效的輸入值：預期為 ${oI(n.values[0])}`;
                return `無效的選項：預期為以下其中之一 ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `數值過大：預期 ${n.origin ?? '值'} 應為 ${t}${n.maximum.toString()} ${r.unit ?? '個元素'}`;
                return `數值過大：預期 ${n.origin ?? '值'} 應為 ${t}${n.maximum.toString()}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `數值過小：預期 ${n.origin} 應為 ${t}${n.minimum.toString()} ${r.unit}`;
                return `數值過小：預期 ${n.origin} 應為 ${t}${n.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format) return `無效的字串：必須以 "${n.prefix}" 開頭`;
                if ('ends_with' === n.format) return `無效的字串：必須以 "${n.suffix}" 結尾`;
                if ('includes' === n.format) return `無效的字串：必須包含 "${n.includes}"`;
                if ('regex' === n.format) return `無效的字串：必須符合格式 ${n.pattern}`;
                return `無效的 ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `無效的數字：必須為 ${n.divisor} 的倍數`;
              case 'unrecognized_keys':
                return `無法識別的鍵值${n.keys.length > 1 ? '們' : ''}：${a9(n.keys, '、')}`;
              case 'invalid_key':
                return `${n.origin} 中有無效的鍵值`;
              case 'invalid_union':
                return '無效的輸入值';
              case 'invalid_element':
                return `${n.origin} 中有無效的值`;
              default:
                return `無效的輸入值`;
            }
          };
        })(),
      };
    }
    function cK() {
      return {
        localeError: (() => {
          let e = {
              string: { unit: 'àmi', verb: 'ní' },
              file: { unit: 'bytes', verb: 'ní' },
              array: { unit: 'nkan', verb: 'ní' },
              set: { unit: 'nkan', verb: 'ní' },
            },
            t = {
              regex: 'ẹ̀rọ ìbáwọlé',
              email: 'àdírẹ́sì ìmẹ́lì',
              url: 'URL',
              emoji: 'emoji',
              uuid: 'UUID',
              uuidv4: 'UUIDv4',
              uuidv6: 'UUIDv6',
              nanoid: 'nanoid',
              guid: 'GUID',
              cuid: 'cuid',
              cuid2: 'cuid2',
              ulid: 'ULID',
              xid: 'XID',
              ksuid: 'KSUID',
              datetime: 'àkókò ISO',
              date: 'ọjọ́ ISO',
              time: 'àkókò ISO',
              duration: 'àkókò tó pé ISO',
              ipv4: 'àdírẹ́sì IPv4',
              ipv6: 'àdírẹ́sì IPv6',
              cidrv4: 'àgbègbè IPv4',
              cidrv6: 'àgbègbè IPv6',
              base64: 'ọ̀rọ̀ tí a kọ́ ní base64',
              base64url: 'ọ̀rọ̀ base64url',
              json_string: 'ọ̀rọ̀ JSON',
              e164: 'nọ́mbà E.164',
              jwt: 'JWT',
              template_literal: 'ẹ̀rọ ìbáwọlé',
            };
          return (n) => {
            switch (n.code) {
              case 'invalid_type':
                return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${n.expected}, \xe0mọ̀ a r\xed ${((
                  e
                ) => {
                  let t = typeof e;
                  switch (t) {
                    case 'number':
                      return Number.isNaN(e) ? 'NaN' : 'nọ́mbà';
                    case 'object':
                      if (Array.isArray(e)) return 'akopọ';
                      if (null === e) return 'null';
                      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
                        return e.constructor.name;
                  }
                  return t;
                })(n.input)}`;
              case 'invalid_value':
                if (1 === n.values.length)
                  return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${oI(n.values[0])}`;
                return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${a9(n.values, '|')}`;
              case 'too_big': {
                let t = n.inclusive ? '<=' : '<',
                  r = e[n.origin] ?? null;
                if (r)
                  return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${n.origin ?? 'iye'} ${r.verb} ${t}${n.maximum} ${r.unit}`;
                return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${t}${n.maximum}`;
              }
              case 'too_small': {
                let t = n.inclusive ? '>=' : '>',
                  r = e[n.origin] ?? null;
                if (r)
                  return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${n.origin} ${r.verb} ${t}${n.minimum} ${r.unit}`;
                return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${t}${n.minimum}`;
              }
              case 'invalid_format':
                if ('starts_with' === n.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${n.prefix}"`;
                if ('ends_with' === n.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${n.suffix}"`;
                if ('includes' === n.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${n.includes}"`;
                if ('regex' === n.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${n.pattern}`;
                return `Aṣ\xecṣe: ${t[n.format] ?? n.format}`;
              case 'not_multiple_of':
                return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${n.divisor}`;
              case 'unrecognized_keys':
                return `Bọt\xecn\xec \xe0\xecmọ̀: ${a9(n.keys, ', ')}`;
              case 'invalid_key':
                return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${n.origin}`;
              case 'invalid_union':
              default:
                return 'Ìbáwọlé aṣìṣe';
              case 'invalid_element':
                return `Iye aṣ\xecṣe n\xedn\xfa ${n.origin}`;
            }
          };
        })(),
      };
    }
    (e.s(
      [
        'ar',
        () => co,
        'az',
        () => cs,
        'be',
        () => cl,
        'ca',
        () => cc,
        'cs',
        () => cd,
        'da',
        () => cp,
        'de',
        () => cf,
        'en',
        () => oX,
        'eo',
        () => cm,
        'es',
        () => ch,
        'fa',
        () => cg,
        'fi',
        () => cv,
        'fr',
        () => c_,
        'frCA',
        () => cy,
        'he',
        () => cb,
        'hu',
        () => c$,
        'id',
        () => cS,
        'is',
        () => cx,
        'it',
        () => cI,
        'ja',
        () => ck,
        'kh',
        () => cw,
        'ko',
        () => cE,
        'mk',
        () => cO,
        'ms',
        () => cT,
        'nl',
        () => cN,
        'no',
        () => cP,
        'ota',
        () => cU,
        'pl',
        () => cD,
        'ps',
        () => cA,
        'pt',
        () => cz,
        'ru',
        () => cZ,
        'sl',
        () => cR,
        'sv',
        () => cC,
        'ta',
        () => cL,
        'th',
        () => cM,
        'tr',
        () => cF,
        'ua',
        () => cB,
        'ur',
        () => cV,
        'vi',
        () => cG,
        'yo',
        () => cK,
        'zhCN',
        () => cJ,
        'zhTW',
        () => cW,
      ],
      3188
    ),
      e.s([], 89223),
      e.i(89223));
    var cY = e.i(3188);
    e.s(
      [
        '$ZodRegistry',
        () => cq,
        '$input',
        () => cH,
        '$output',
        () => cX,
        'globalRegistry',
        () => c0,
        'registry',
        () => cQ,
      ],
      63084
    );
    let cX = Symbol('ZodOutput'),
      cH = Symbol('ZodInput');
    class cq {
      constructor() {
        ((this._map = new Map()), (this._idmap = new Map()));
      }
      add(e, ...t) {
        let n = t[0];
        if ((this._map.set(e, n), n && 'object' == typeof n && 'id' in n)) {
          if (this._idmap.has(n.id)) throw Error(`ID ${n.id} already exists in the registry`);
          this._idmap.set(n.id, e);
        }
        return this;
      }
      clear() {
        return ((this._map = new Map()), (this._idmap = new Map()), this);
      }
      remove(e) {
        let t = this._map.get(e);
        return (
          t && 'object' == typeof t && 'id' in t && this._idmap.delete(t.id),
          this._map.delete(e),
          this
        );
      }
      get(e) {
        let t = e._zod.parent;
        if (t) {
          let n = { ...(this.get(t) ?? {}) };
          delete n.id;
          let r = { ...n, ...this._map.get(e) };
          return Object.keys(r).length ? r : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
    }
    function cQ() {
      return new cq();
    }
    let c0 = cQ();
    function c1(e, t) {
      return new e({ type: 'string', ...oS(t) });
    }
    function c4(e, t) {
      return new e({ type: 'string', coerce: !0, ...oS(t) });
    }
    function c6(e, t) {
      return new e({
        type: 'string',
        format: 'email',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function c2(e, t) {
      return new e({ type: 'string', format: 'guid', check: 'string_format', abort: !1, ...oS(t) });
    }
    function c9(e, t) {
      return new e({ type: 'string', format: 'uuid', check: 'string_format', abort: !1, ...oS(t) });
    }
    function c3(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v4',
        ...oS(t),
      });
    }
    function c5(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v6',
        ...oS(t),
      });
    }
    function c8(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v7',
        ...oS(t),
      });
    }
    function c7(e, t) {
      return new e({ type: 'string', format: 'url', check: 'string_format', abort: !1, ...oS(t) });
    }
    function de(e, t) {
      return new e({
        type: 'string',
        format: 'emoji',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function dt(e, t) {
      return new e({
        type: 'string',
        format: 'nanoid',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function dn(e, t) {
      return new e({ type: 'string', format: 'cuid', check: 'string_format', abort: !1, ...oS(t) });
    }
    function dr(e, t) {
      return new e({
        type: 'string',
        format: 'cuid2',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function di(e, t) {
      return new e({ type: 'string', format: 'ulid', check: 'string_format', abort: !1, ...oS(t) });
    }
    function da(e, t) {
      return new e({ type: 'string', format: 'xid', check: 'string_format', abort: !1, ...oS(t) });
    }
    function ds(e, t) {
      return new e({
        type: 'string',
        format: 'ksuid',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function du(e, t) {
      return new e({ type: 'string', format: 'ipv4', check: 'string_format', abort: !1, ...oS(t) });
    }
    function dl(e, t) {
      return new e({ type: 'string', format: 'ipv6', check: 'string_format', abort: !1, ...oS(t) });
    }
    function dc(e, t) {
      return new e({
        type: 'string',
        format: 'cidrv4',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function dd(e, t) {
      return new e({
        type: 'string',
        format: 'cidrv6',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function dp(e, t) {
      return new e({
        type: 'string',
        format: 'base64',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function df(e, t) {
      return new e({
        type: 'string',
        format: 'base64url',
        check: 'string_format',
        abort: !1,
        ...oS(t),
      });
    }
    function dm(e, t) {
      return new e({ type: 'string', format: 'e164', check: 'string_format', abort: !1, ...oS(t) });
    }
    function dh(e, t) {
      return new e({ type: 'string', format: 'jwt', check: 'string_format', abort: !1, ...oS(t) });
    }
    (e.i(63084),
      e.i(33938),
      e.s(
        [
          'TimePrecision',
          () => dg,
          '_any',
          () => dZ,
          '_array',
          () => pu,
          '_base64',
          () => dp,
          '_base64url',
          () => df,
          '_bigint',
          () => dN,
          '_boolean',
          () => dO,
          '_catch',
          () => pw,
          '_check',
          () => pz,
          '_cidrv4',
          () => dc,
          '_cidrv6',
          () => dd,
          '_coercedBigint',
          () => dP,
          '_coercedBoolean',
          () => dT,
          '_coercedDate',
          () => dF,
          '_coercedNumber',
          () => dS,
          '_coercedString',
          () => c4,
          '_cuid',
          () => dn,
          '_cuid2',
          () => dr,
          '_custom',
          () => pU,
          '_date',
          () => dM,
          '_default',
          () => px,
          '_discriminatedUnion',
          () => pc,
          '_e164',
          () => dm,
          '_email',
          () => c6,
          '_emoji',
          () => de,
          '_endsWith',
          () => pe,
          '_enum',
          () => pg,
          '_file',
          () => py,
          '_float32',
          () => dI,
          '_float64',
          () => dk,
          '_gt',
          () => dJ,
          '_gte',
          () => dW,
          '_guid',
          () => c2,
          '_includes',
          () => d8,
          '_int',
          () => dx,
          '_int32',
          () => dw,
          '_int64',
          () => dU,
          '_intersection',
          () => pd,
          '_ipv4',
          () => du,
          '_ipv6',
          () => dl,
          '_isoDate',
          () => d_,
          '_isoDateTime',
          () => dv,
          '_isoDuration',
          () => db,
          '_isoTime',
          () => dy,
          '_jwt',
          () => dh,
          '_ksuid',
          () => ds,
          '_lazy',
          () => pN,
          '_length',
          () => d2,
          '_literal',
          () => p_,
          '_lowercase',
          () => d3,
          '_lt',
          () => dV,
          '_lte',
          () => dG,
          '_map',
          () => pm,
          '_max',
          () => dG,
          '_maxLength',
          () => d4,
          '_maxSize',
          () => dQ,
          '_mime',
          () => pn,
          '_min',
          () => dW,
          '_minLength',
          () => d6,
          '_minSize',
          () => d0,
          '_multipleOf',
          () => dq,
          '_nan',
          () => dB,
          '_nanoid',
          () => dt,
          '_nativeEnum',
          () => pv,
          '_negative',
          () => dY,
          '_never',
          () => dC,
          '_nonnegative',
          () => dH,
          '_nonoptional',
          () => pI,
          '_nonpositive',
          () => dX,
          '_normalize',
          () => pi,
          '_null',
          () => dj,
          '_nullable',
          () => pS,
          '_number',
          () => d$,
          '_optional',
          () => p$,
          '_overwrite',
          () => pr,
          '_pipe',
          () => pE,
          '_positive',
          () => dK,
          '_promise',
          () => pP,
          '_property',
          () => pt,
          '_readonly',
          () => pO,
          '_record',
          () => pf,
          '_refine',
          () => pA,
          '_regex',
          () => d9,
          '_set',
          () => ph,
          '_size',
          () => d1,
          '_startsWith',
          () => d7,
          '_string',
          () => c1,
          '_stringFormat',
          () => pZ,
          '_stringbool',
          () => pj,
          '_success',
          () => pk,
          '_superRefine',
          () => pD,
          '_symbol',
          () => dD,
          '_templateLiteral',
          () => pT,
          '_toLowerCase',
          () => po,
          '_toUpperCase',
          () => ps,
          '_transform',
          () => pb,
          '_trim',
          () => pa,
          '_tuple',
          () => pp,
          '_uint32',
          () => dE,
          '_uint64',
          () => dA,
          '_ulid',
          () => di,
          '_undefined',
          () => dz,
          '_union',
          () => pl,
          '_unknown',
          () => dR,
          '_uppercase',
          () => d5,
          '_url',
          () => c7,
          '_uuid',
          () => c9,
          '_uuidv4',
          () => c3,
          '_uuidv6',
          () => c5,
          '_uuidv7',
          () => c8,
          '_void',
          () => dL,
          '_xid',
          () => da,
        ],
        73844
      ));
    let dg = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
    function dv(e, t) {
      return new e({
        type: 'string',
        format: 'datetime',
        check: 'string_format',
        offset: !1,
        local: !1,
        precision: null,
        ...oS(t),
      });
    }
    function d_(e, t) {
      return new e({ type: 'string', format: 'date', check: 'string_format', ...oS(t) });
    }
    function dy(e, t) {
      return new e({
        type: 'string',
        format: 'time',
        check: 'string_format',
        precision: null,
        ...oS(t),
      });
    }
    function db(e, t) {
      return new e({ type: 'string', format: 'duration', check: 'string_format', ...oS(t) });
    }
    function d$(e, t) {
      return new e({ type: 'number', checks: [], ...oS(t) });
    }
    function dS(e, t) {
      return new e({ type: 'number', coerce: !0, checks: [], ...oS(t) });
    }
    function dx(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'safeint',
        ...oS(t),
      });
    }
    function dI(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float32',
        ...oS(t),
      });
    }
    function dk(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float64',
        ...oS(t),
      });
    }
    function dw(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'int32',
        ...oS(t),
      });
    }
    function dE(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'uint32',
        ...oS(t),
      });
    }
    function dO(e, t) {
      return new e({ type: 'boolean', ...oS(t) });
    }
    function dT(e, t) {
      return new e({ type: 'boolean', coerce: !0, ...oS(t) });
    }
    function dN(e, t) {
      return new e({ type: 'bigint', ...oS(t) });
    }
    function dP(e, t) {
      return new e({ type: 'bigint', coerce: !0, ...oS(t) });
    }
    function dU(e, t) {
      return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'int64',
        ...oS(t),
      });
    }
    function dA(e, t) {
      return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'uint64',
        ...oS(t),
      });
    }
    function dD(e, t) {
      return new e({ type: 'symbol', ...oS(t) });
    }
    function dz(e, t) {
      return new e({ type: 'undefined', ...oS(t) });
    }
    function dj(e, t) {
      return new e({ type: 'null', ...oS(t) });
    }
    function dZ(e) {
      return new e({ type: 'any' });
    }
    function dR(e) {
      return new e({ type: 'unknown' });
    }
    function dC(e, t) {
      return new e({ type: 'never', ...oS(t) });
    }
    function dL(e, t) {
      return new e({ type: 'void', ...oS(t) });
    }
    function dM(e, t) {
      return new e({ type: 'date', ...oS(t) });
    }
    function dF(e, t) {
      return new e({ type: 'date', coerce: !0, ...oS(t) });
    }
    function dB(e, t) {
      return new e({ type: 'nan', ...oS(t) });
    }
    function dV(e, t) {
      return new u_({ check: 'less_than', ...oS(t), value: e, inclusive: !1 });
    }
    function dG(e, t) {
      return new u_({ check: 'less_than', ...oS(t), value: e, inclusive: !0 });
    }
    function dJ(e, t) {
      return new uy({ check: 'greater_than', ...oS(t), value: e, inclusive: !1 });
    }
    function dW(e, t) {
      return new uy({ check: 'greater_than', ...oS(t), value: e, inclusive: !0 });
    }
    function dK(e) {
      return dJ(0, e);
    }
    function dY(e) {
      return dV(0, e);
    }
    function dX(e) {
      return dG(0, e);
    }
    function dH(e) {
      return dW(0, e);
    }
    function dq(e, t) {
      return new ub({ check: 'multiple_of', ...oS(t), value: e });
    }
    function dQ(e, t) {
      return new ux({ check: 'max_size', ...oS(t), maximum: e });
    }
    function d0(e, t) {
      return new uI({ check: 'min_size', ...oS(t), minimum: e });
    }
    function d1(e, t) {
      return new uk({ check: 'size_equals', ...oS(t), size: e });
    }
    function d4(e, t) {
      return new uw({ check: 'max_length', ...oS(t), maximum: e });
    }
    function d6(e, t) {
      return new uE({ check: 'min_length', ...oS(t), minimum: e });
    }
    function d2(e, t) {
      return new uO({ check: 'length_equals', ...oS(t), length: e });
    }
    function d9(e, t) {
      return new uN({ check: 'string_format', format: 'regex', ...oS(t), pattern: e });
    }
    function d3(e) {
      return new uP({ check: 'string_format', format: 'lowercase', ...oS(e) });
    }
    function d5(e) {
      return new uU({ check: 'string_format', format: 'uppercase', ...oS(e) });
    }
    function d8(e, t) {
      return new uA({ check: 'string_format', format: 'includes', ...oS(t), includes: e });
    }
    function d7(e, t) {
      return new uD({ check: 'string_format', format: 'starts_with', ...oS(t), prefix: e });
    }
    function pe(e, t) {
      return new uz({ check: 'string_format', format: 'ends_with', ...oS(t), suffix: e });
    }
    function pt(e, t, n) {
      return new uZ({ check: 'property', property: e, schema: t, ...oS(n) });
    }
    function pn(e, t) {
      return new uR({ check: 'mime_type', mime: e, ...oS(t) });
    }
    function pr(e) {
      return new uC({ check: 'overwrite', tx: e });
    }
    function pi(e) {
      return pr((t) => t.normalize(e));
    }
    function pa() {
      return pr((e) => e.trim());
    }
    function po() {
      return pr((e) => e.toLowerCase());
    }
    function ps() {
      return pr((e) => e.toUpperCase());
    }
    function pu(e, t, n) {
      return new e({ type: 'array', element: t, ...oS(n) });
    }
    function pl(e, t, n) {
      return new e({ type: 'union', options: t, ...oS(n) });
    }
    function pc(e, t, n, r) {
      return new e({ type: 'union', options: n, discriminator: t, ...oS(r) });
    }
    function pd(e, t, n) {
      return new e({ type: 'intersection', left: t, right: n });
    }
    function pp(e, t, n, r) {
      let i = n instanceof uF,
        a = i ? r : n;
      return new e({ type: 'tuple', items: t, rest: i ? n : null, ...oS(a) });
    }
    function pf(e, t, n, r) {
      return new e({ type: 'record', keyType: t, valueType: n, ...oS(r) });
    }
    function pm(e, t, n, r) {
      return new e({ type: 'map', keyType: t, valueType: n, ...oS(r) });
    }
    function ph(e, t, n) {
      return new e({ type: 'set', valueType: t, ...oS(n) });
    }
    function pg(e, t, n) {
      return new e({
        type: 'enum',
        entries: Array.isArray(t) ? Object.fromEntries(t.map((e) => [e, e])) : t,
        ...oS(n),
      });
    }
    function pv(e, t, n) {
      return new e({ type: 'enum', entries: t, ...oS(n) });
    }
    function p_(e, t, n) {
      return new e({ type: 'literal', values: Array.isArray(t) ? t : [t], ...oS(n) });
    }
    function py(e, t) {
      return new e({ type: 'file', ...oS(t) });
    }
    function pb(e, t) {
      return new e({ type: 'transform', transform: t });
    }
    function p$(e, t) {
      return new e({ type: 'optional', innerType: t });
    }
    function pS(e, t) {
      return new e({ type: 'nullable', innerType: t });
    }
    function px(e, t, n) {
      return new e({
        type: 'default',
        innerType: t,
        get defaultValue() {
          return 'function' == typeof n ? n() : oh(n);
        },
      });
    }
    function pI(e, t, n) {
      return new e({ type: 'nonoptional', innerType: t, ...oS(n) });
    }
    function pk(e, t) {
      return new e({ type: 'success', innerType: t });
    }
    function pw(e, t, n) {
      return new e({
        type: 'catch',
        innerType: t,
        catchValue: 'function' == typeof n ? n : () => n,
      });
    }
    function pE(e, t, n) {
      return new e({ type: 'pipe', in: t, out: n });
    }
    function pO(e, t) {
      return new e({ type: 'readonly', innerType: t });
    }
    function pT(e, t, n) {
      return new e({ type: 'template_literal', parts: t, ...oS(n) });
    }
    function pN(e, t) {
      return new e({ type: 'lazy', getter: t });
    }
    function pP(e, t) {
      return new e({ type: 'promise', innerType: t });
    }
    function pU(e, t, n) {
      let r = oS(n);
      return (r.abort ?? (r.abort = !0), new e({ type: 'custom', check: 'custom', fn: t, ...r }));
    }
    function pA(e, t, n) {
      return new e({ type: 'custom', check: 'custom', fn: t, ...oS(n) });
    }
    function pD(e) {
      let t = pz(
        (n) => (
          (n.addIssue = (e) => {
            'string' == typeof e
              ? n.issues.push(oM(e, n.value, t._zod.def))
              : (e.fatal && (e.continue = !1),
                e.code ?? (e.code = 'custom'),
                e.input ?? (e.input = n.value),
                e.inst ?? (e.inst = t),
                e.continue ?? (e.continue = !t._zod.def.abort),
                n.issues.push(oM(e)));
          }),
          e(n.value, n)
        )
      );
      return t;
    }
    function pz(e, t) {
      let n = new ug({ check: 'custom', ...oS(t) });
      return ((n._zod.check = e), n);
    }
    function pj(e, t) {
      let n = oS(t),
        r = n.truthy ?? ['true', '1', 'yes', 'on', 'y', 'enabled'],
        i = n.falsy ?? ['false', '0', 'no', 'off', 'n', 'disabled'];
      'sensitive' !== n.case &&
        ((r = r.map((e) => ('string' == typeof e ? e.toLowerCase() : e))),
        (i = i.map((e) => ('string' == typeof e ? e.toLowerCase() : e))));
      let a = new Set(r),
        o = new Set(i),
        s = e.Codec ?? l6,
        u = e.Boolean ?? lc,
        l = new s({
          type: 'pipe',
          in: new (e.String ?? uB)({ type: 'string', error: n.error }),
          out: new u({ type: 'boolean', error: n.error }),
          transform: (e, t) => {
            let r = e;
            return (
              'sensitive' !== n.case && (r = r.toLowerCase()),
              !!a.has(r) ||
                (!o.has(r) &&
                  (t.issues.push({
                    code: 'invalid_value',
                    expected: 'stringbool',
                    values: [...a, ...o],
                    input: t.value,
                    inst: l,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (e, t) => (!0 === e ? r[0] || 'true' : i[0] || 'false'),
          error: n.error,
        });
      return l;
    }
    function pZ(e, t, n, r = {}) {
      let i = oS(r),
        a = {
          ...oS(r),
          check: 'string_format',
          type: 'string',
          format: t,
          fn: 'function' == typeof n ? n : (e) => n.test(e),
          ...i,
        };
      return (n instanceof RegExp && (a.pattern = n), new e(a));
    }
    (e.i(73844), e.s(['JSONSchemaGenerator', () => pR, 'toJSONSchema', () => pC], 9041));
    class pR {
      constructor(e) {
        ((this.counter = 0),
          (this.metadataRegistry = e?.metadata ?? c0),
          (this.target = e?.target ?? 'draft-2020-12'),
          (this.unrepresentable = e?.unrepresentable ?? 'throw'),
          (this.override = e?.override ?? (() => {})),
          (this.io = e?.io ?? 'output'),
          (this.seen = new Map()));
      }
      process(e, t = { path: [], schemaPath: [] }) {
        var n;
        let r = e._zod.def,
          i = this.seen.get(e);
        if (i) return (i.count++, t.schemaPath.includes(e) && (i.cycle = t.path), i.schema);
        let a = { schema: {}, count: 1, cycle: void 0, path: t.path };
        this.seen.set(e, a);
        let o = e._zod.toJSONSchema?.();
        if (o) a.schema = o;
        else {
          let n = { ...t, schemaPath: [...t.schemaPath, e], path: t.path },
            i = e._zod.parent;
          if (i) ((a.ref = i), this.process(i, n), (this.seen.get(i).isParent = !0));
          else {
            let t = a.schema;
            switch (r.type) {
              case 'string': {
                t.type = 'string';
                let {
                  minimum: n,
                  maximum: r,
                  format: i,
                  patterns: o,
                  contentEncoding: s,
                } = e._zod.bag;
                if (
                  ('number' == typeof n && (t.minLength = n),
                  'number' == typeof r && (t.maxLength = r),
                  i &&
                    ((t.format =
                      {
                        guid: 'uuid',
                        url: 'uri',
                        datetime: 'date-time',
                        json_string: 'json-string',
                        regex: '',
                      }[i] ?? i),
                    '' === t.format && delete t.format),
                  s && (t.contentEncoding = s),
                  o && o.size > 0)
                ) {
                  let e = [...o];
                  1 === e.length
                    ? (t.pattern = e[0].source)
                    : e.length > 1 &&
                      (a.schema.allOf = [
                        ...e.map((e) => ({
                          ...('draft-7' === this.target ||
                          'draft-4' === this.target ||
                          'openapi-3.0' === this.target
                            ? { type: 'string' }
                            : {}),
                          pattern: e.source,
                        })),
                      ]);
                }
                break;
              }
              case 'number': {
                let {
                  minimum: n,
                  maximum: r,
                  format: i,
                  multipleOf: a,
                  exclusiveMaximum: o,
                  exclusiveMinimum: s,
                } = e._zod.bag;
                ('string' == typeof i && i.includes('int')
                  ? (t.type = 'integer')
                  : (t.type = 'number'),
                  'number' == typeof s &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((t.minimum = s), (t.exclusiveMinimum = !0))
                      : (t.exclusiveMinimum = s)),
                  'number' == typeof n &&
                    ((t.minimum = n),
                    'number' == typeof s &&
                      'draft-4' !== this.target &&
                      (s >= n ? delete t.minimum : delete t.exclusiveMinimum)),
                  'number' == typeof o &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((t.maximum = o), (t.exclusiveMaximum = !0))
                      : (t.exclusiveMaximum = o)),
                  'number' == typeof r &&
                    ((t.maximum = r),
                    'number' == typeof o &&
                      'draft-4' !== this.target &&
                      (o <= r ? delete t.maximum : delete t.exclusiveMaximum)),
                  'number' == typeof a && (t.multipleOf = a));
                break;
              }
              case 'boolean':
              case 'success':
                t.type = 'boolean';
                break;
              case 'bigint':
                if ('throw' === this.unrepresentable)
                  throw Error('BigInt cannot be represented in JSON Schema');
                break;
              case 'symbol':
                if ('throw' === this.unrepresentable)
                  throw Error('Symbols cannot be represented in JSON Schema');
                break;
              case 'null':
                'openapi-3.0' === this.target
                  ? ((t.type = 'string'), (t.nullable = !0), (t.enum = [null]))
                  : (t.type = 'null');
                break;
              case 'any':
              case 'unknown':
                break;
              case 'undefined':
                if ('throw' === this.unrepresentable)
                  throw Error('Undefined cannot be represented in JSON Schema');
                break;
              case 'void':
                if ('throw' === this.unrepresentable)
                  throw Error('Void cannot be represented in JSON Schema');
                break;
              case 'never':
                t.not = {};
                break;
              case 'date':
                if ('throw' === this.unrepresentable)
                  throw Error('Date cannot be represented in JSON Schema');
                break;
              case 'array': {
                let { minimum: i, maximum: a } = e._zod.bag;
                ('number' == typeof i && (t.minItems = i),
                  'number' == typeof a && (t.maxItems = a),
                  (t.type = 'array'),
                  (t.items = this.process(r.element, { ...n, path: [...n.path, 'items'] })));
                break;
              }
              case 'object': {
                ((t.type = 'object'), (t.properties = {}));
                let e = r.shape;
                for (let r in e)
                  t.properties[r] = this.process(e[r], {
                    ...n,
                    path: [...n.path, 'properties', r],
                  });
                let i = new Set(
                  [...new Set(Object.keys(e))].filter((e) => {
                    let t = r.shape[e]._zod;
                    return 'input' === this.io ? void 0 === t.optin : void 0 === t.optout;
                  })
                );
                (i.size > 0 && (t.required = Array.from(i)),
                  r.catchall?._zod.def.type === 'never'
                    ? (t.additionalProperties = !1)
                    : r.catchall
                      ? r.catchall &&
                        (t.additionalProperties = this.process(r.catchall, {
                          ...n,
                          path: [...n.path, 'additionalProperties'],
                        }))
                      : 'output' === this.io && (t.additionalProperties = !1));
                break;
              }
              case 'union':
                t.anyOf = r.options.map((e, t) =>
                  this.process(e, { ...n, path: [...n.path, 'anyOf', t] })
                );
                break;
              case 'intersection': {
                let e = this.process(r.left, { ...n, path: [...n.path, 'allOf', 0] }),
                  i = this.process(r.right, { ...n, path: [...n.path, 'allOf', 1] }),
                  a = (e) => 'allOf' in e && 1 === Object.keys(e).length;
                t.allOf = [...(a(e) ? e.allOf : [e]), ...(a(i) ? i.allOf : [i])];
                break;
              }
              case 'tuple': {
                t.type = 'array';
                let i = 'draft-2020-12' === this.target ? 'prefixItems' : 'items',
                  a =
                    'draft-2020-12' === this.target || 'openapi-3.0' === this.target
                      ? 'items'
                      : 'additionalItems',
                  o = r.items.map((e, t) => this.process(e, { ...n, path: [...n.path, i, t] })),
                  s = r.rest
                    ? this.process(r.rest, {
                        ...n,
                        path: [
                          ...n.path,
                          a,
                          ...('openapi-3.0' === this.target ? [r.items.length] : []),
                        ],
                      })
                    : null;
                'draft-2020-12' === this.target
                  ? ((t.prefixItems = o), s && (t.items = s))
                  : 'openapi-3.0' === this.target
                    ? ((t.items = { anyOf: o }),
                      s && t.items.anyOf.push(s),
                      (t.minItems = o.length),
                      s || (t.maxItems = o.length))
                    : ((t.items = o), s && (t.additionalItems = s));
                let { minimum: u, maximum: l } = e._zod.bag;
                ('number' == typeof u && (t.minItems = u),
                  'number' == typeof l && (t.maxItems = l));
                break;
              }
              case 'record':
                ((t.type = 'object'),
                  ('draft-7' === this.target || 'draft-2020-12' === this.target) &&
                    (t.propertyNames = this.process(r.keyType, {
                      ...n,
                      path: [...n.path, 'propertyNames'],
                    })),
                  (t.additionalProperties = this.process(r.valueType, {
                    ...n,
                    path: [...n.path, 'additionalProperties'],
                  })));
                break;
              case 'map':
                if ('throw' === this.unrepresentable)
                  throw Error('Map cannot be represented in JSON Schema');
                break;
              case 'set':
                if ('throw' === this.unrepresentable)
                  throw Error('Set cannot be represented in JSON Schema');
                break;
              case 'enum': {
                let e = a2(r.entries);
                (e.every((e) => 'number' == typeof e) && (t.type = 'number'),
                  e.every((e) => 'string' == typeof e) && (t.type = 'string'),
                  (t.enum = e));
                break;
              }
              case 'literal': {
                let e = [];
                for (let t of r.values)
                  if (void 0 === t) {
                    if ('throw' === this.unrepresentable)
                      throw Error('Literal `undefined` cannot be represented in JSON Schema');
                  } else if ('bigint' == typeof t)
                    if ('throw' === this.unrepresentable)
                      throw Error('BigInt literals cannot be represented in JSON Schema');
                    else e.push(Number(t));
                  else e.push(t);
                if (0 === e.length);
                else if (1 === e.length) {
                  let n = e[0];
                  ((t.type = null === n ? 'null' : typeof n),
                    'draft-4' === this.target || 'openapi-3.0' === this.target
                      ? (t.enum = [n])
                      : (t.const = n));
                } else
                  (e.every((e) => 'number' == typeof e) && (t.type = 'number'),
                    e.every((e) => 'string' == typeof e) && (t.type = 'string'),
                    e.every((e) => 'boolean' == typeof e) && (t.type = 'string'),
                    e.every((e) => null === e) && (t.type = 'null'),
                    (t.enum = e));
                break;
              }
              case 'file': {
                let n = { type: 'string', format: 'binary', contentEncoding: 'binary' },
                  { minimum: r, maximum: i, mime: a } = e._zod.bag;
                (void 0 !== r && (n.minLength = r),
                  void 0 !== i && (n.maxLength = i),
                  a
                    ? 1 === a.length
                      ? ((n.contentMediaType = a[0]), Object.assign(t, n))
                      : (t.anyOf = a.map((e) => ({ ...n, contentMediaType: e })))
                    : Object.assign(t, n));
                break;
              }
              case 'transform':
                if ('throw' === this.unrepresentable)
                  throw Error('Transforms cannot be represented in JSON Schema');
                break;
              case 'nullable': {
                let e = this.process(r.innerType, n);
                'openapi-3.0' === this.target
                  ? ((a.ref = r.innerType), (t.nullable = !0))
                  : (t.anyOf = [e, { type: 'null' }]);
                break;
              }
              case 'nonoptional':
              case 'promise':
              case 'optional':
                (this.process(r.innerType, n), (a.ref = r.innerType));
                break;
              case 'default':
                (this.process(r.innerType, n),
                  (a.ref = r.innerType),
                  (t.default = JSON.parse(JSON.stringify(r.defaultValue))));
                break;
              case 'prefault':
                (this.process(r.innerType, n),
                  (a.ref = r.innerType),
                  'input' === this.io &&
                    (t._prefault = JSON.parse(JSON.stringify(r.defaultValue))));
                break;
              case 'catch': {
                let e;
                (this.process(r.innerType, n), (a.ref = r.innerType));
                try {
                  e = r.catchValue(void 0);
                } catch {
                  throw Error('Dynamic catch values are not supported in JSON Schema');
                }
                t.default = e;
                break;
              }
              case 'nan':
                if ('throw' === this.unrepresentable)
                  throw Error('NaN cannot be represented in JSON Schema');
                break;
              case 'template_literal': {
                let n = e._zod.pattern;
                if (!n) throw Error('Pattern not found in template literal');
                ((t.type = 'string'), (t.pattern = n.source));
                break;
              }
              case 'pipe': {
                let e =
                  'input' === this.io ? ('transform' === r.in._zod.def.type ? r.out : r.in) : r.out;
                (this.process(e, n), (a.ref = e));
                break;
              }
              case 'readonly':
                (this.process(r.innerType, n), (a.ref = r.innerType), (t.readOnly = !0));
                break;
              case 'lazy': {
                let t = e._zod.innerType;
                (this.process(t, n), (a.ref = t));
                break;
              }
              case 'custom':
                if ('throw' === this.unrepresentable)
                  throw Error('Custom types cannot be represented in JSON Schema');
                break;
              case 'function':
                if ('throw' === this.unrepresentable)
                  throw Error('Function types cannot be represented in JSON Schema');
            }
          }
        }
        let s = this.metadataRegistry.get(e);
        return (
          s && Object.assign(a.schema, s),
          'input' === this.io &&
            (function e(t, n) {
              let r = n ?? { seen: new Set() };
              if (r.seen.has(t)) return !1;
              r.seen.add(t);
              let i = t._zod.def;
              switch (i.type) {
                case 'string':
                case 'number':
                case 'bigint':
                case 'boolean':
                case 'date':
                case 'symbol':
                case 'undefined':
                case 'null':
                case 'any':
                case 'unknown':
                case 'never':
                case 'void':
                case 'literal':
                case 'enum':
                case 'nan':
                case 'file':
                case 'template_literal':
                case 'custom':
                case 'success':
                case 'catch':
                case 'function':
                  return !1;
                case 'array':
                  return e(i.element, r);
                case 'object':
                  for (let t in i.shape) if (e(i.shape[t], r)) return !0;
                  return !1;
                case 'union':
                  for (let t of i.options) if (e(t, r)) return !0;
                  return !1;
                case 'intersection':
                  return e(i.left, r) || e(i.right, r);
                case 'tuple':
                  for (let t of i.items) if (e(t, r)) return !0;
                  if (i.rest && e(i.rest, r)) return !0;
                  return !1;
                case 'record':
                case 'map':
                  return e(i.keyType, r) || e(i.valueType, r);
                case 'set':
                  return e(i.valueType, r);
                case 'promise':
                case 'optional':
                case 'nonoptional':
                case 'nullable':
                case 'readonly':
                case 'default':
                case 'prefault':
                  return e(i.innerType, r);
                case 'lazy':
                  return e(i.getter(), r);
                case 'transform':
                  return !0;
                case 'pipe':
                  return e(i.in, r) || e(i.out, r);
              }
              throw Error(`Unknown schema type: ${i.type}`);
            })(e) &&
            (delete a.schema.examples, delete a.schema.default),
          'input' === this.io &&
            a.schema._prefault &&
            ((n = a.schema).default ?? (n.default = a.schema._prefault)),
          delete a.schema._prefault,
          this.seen.get(e).schema
        );
      }
      emit(e, t) {
        let n = {
            cycles: t?.cycles ?? 'ref',
            reused: t?.reused ?? 'inline',
            external: t?.external ?? void 0,
          },
          r = this.seen.get(e);
        if (!r) throw Error('Unprocessed schema. This is a bug in Zod.');
        let i = (e) => {
            let t = 'draft-2020-12' === this.target ? '$defs' : 'definitions';
            if (n.external) {
              let r = n.external.registry.get(e[0])?.id,
                i = n.external.uri ?? ((e) => e);
              if (r) return { ref: i(r) };
              let a = e[1].defId ?? e[1].schema.id ?? `schema${this.counter++}`;
              return ((e[1].defId = a), { defId: a, ref: `${i('__shared')}#/${t}/${a}` });
            }
            if (e[1] === r) return { ref: '#' };
            let i = `#/${t}/`,
              a = e[1].schema.id ?? `__schema${this.counter++}`;
            return { defId: a, ref: i + a };
          },
          a = (e) => {
            if (e[1].schema.$ref) return;
            let t = e[1],
              { ref: n, defId: r } = i(e);
            ((t.def = { ...t.schema }), r && (t.defId = r));
            let a = t.schema;
            for (let e in a) delete a[e];
            a.$ref = n;
          };
        if ('throw' === n.cycles)
          for (let e of this.seen.entries()) {
            let t = e[1];
            if (t.cycle)
              throw Error(`Cycle detected: #/${t.cycle?.join('/')}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let t of this.seen.entries()) {
          let r = t[1];
          if (e === t[0]) {
            a(t);
            continue;
          }
          if (n.external) {
            let r = n.external.registry.get(t[0])?.id;
            if (e !== t[0] && r) {
              a(t);
              continue;
            }
          }
          if (
            this.metadataRegistry.get(t[0])?.id ||
            r.cycle ||
            (r.count > 1 && 'ref' === n.reused)
          ) {
            a(t);
            continue;
          }
        }
        let o = (e, t) => {
          let n = this.seen.get(e),
            r = n.def ?? n.schema,
            i = { ...r };
          if (null === n.ref) return;
          let a = n.ref;
          if (((n.ref = null), a)) {
            o(a, t);
            let e = this.seen.get(a).schema;
            e.$ref &&
            ('draft-7' === t.target || 'draft-4' === t.target || 'openapi-3.0' === t.target)
              ? ((r.allOf = r.allOf ?? []), r.allOf.push(e))
              : (Object.assign(r, e), Object.assign(r, i));
          }
          n.isParent || this.override({ zodSchema: e, jsonSchema: r, path: n.path ?? [] });
        };
        for (let e of [...this.seen.entries()].reverse()) o(e[0], { target: this.target });
        let s = {};
        if (
          ('draft-2020-12' === this.target
            ? (s.$schema = 'https://json-schema.org/draft/2020-12/schema')
            : 'draft-7' === this.target
              ? (s.$schema = 'http://json-schema.org/draft-07/schema#')
              : 'draft-4' === this.target
                ? (s.$schema = 'http://json-schema.org/draft-04/schema#')
                : 'openapi-3.0' === this.target || console.warn(`Invalid target: ${this.target}`),
          n.external?.uri)
        ) {
          let t = n.external.registry.get(e)?.id;
          if (!t) throw Error('Schema is missing an `id` property');
          s.$id = n.external.uri(t);
        }
        Object.assign(s, r.def);
        let u = n.external?.defs ?? {};
        for (let e of this.seen.entries()) {
          let t = e[1];
          t.def && t.defId && (u[t.defId] = t.def);
        }
        n.external ||
          (Object.keys(u).length > 0 &&
            ('draft-2020-12' === this.target ? (s.$defs = u) : (s.definitions = u)));
        try {
          return JSON.parse(JSON.stringify(s));
        } catch (e) {
          throw Error('Error converting schema to JSON.');
        }
      }
    }
    function pC(e, t) {
      if (e instanceof cq) {
        let n = new pR(t),
          r = {};
        for (let t of e._idmap.entries()) {
          let [e, r] = t;
          n.process(r);
        }
        let i = {},
          a = { registry: e, uri: t?.uri, defs: r };
        for (let r of e._idmap.entries()) {
          let [e, o] = r;
          i[e] = n.emit(o, { ...t, external: a });
        }
        return (
          Object.keys(r).length > 0 &&
            (i.__shared = { ['draft-2020-12' === n.target ? '$defs' : 'definitions']: r }),
          { schemas: i }
        );
      }
      let n = new pR(t);
      return (n.process(e), n.emit(e, t));
    }
    (e.i(9041), e.s([], 1119));
    var pL = e.i(1119),
      pM = e.i(11952);
    e.s(
      [
        'ZodAny',
        () => mp,
        'ZodArray',
        () => mS,
        'ZodBase64',
        () => fF,
        'ZodBase64URL',
        () => fV,
        'ZodBigInt',
        () => mt,
        'ZodBigIntFormat',
        () => mr,
        'ZodBoolean',
        () => f7,
        'ZodCIDRv4',
        () => fR,
        'ZodCIDRv6',
        () => fL,
        'ZodCUID',
        () => fI,
        'ZodCUID2',
        () => fw,
        'ZodCatch',
        () => hn,
        'ZodCodec',
        () => hu,
        'ZodCustom',
        () => hb,
        'ZodCustomStringFormat',
        () => fX,
        'ZodDate',
        () => mb,
        'ZodDefault',
        () => m2,
        'ZodDiscriminatedUnion',
        () => mP,
        'ZodE164',
        () => fJ,
        'ZodEmail',
        () => fu,
        'ZodEmoji',
        () => fb,
        'ZodEnum',
        () => mV,
        'ZodFile',
        () => mY,
        'ZodFunction',
        () => h_,
        'ZodGUID',
        () => fc,
        'ZodIPv4',
        () => fD,
        'ZodIPv6',
        () => fj,
        'ZodIntersection',
        () => mA,
        'ZodJWT',
        () => fK,
        'ZodKSUID',
        () => fU,
        'ZodLazy',
        () => hm,
        'ZodLiteral',
        () => mW,
        'ZodMap',
        () => mL,
        'ZodNaN',
        () => hi,
        'ZodNanoID',
        () => fS,
        'ZodNever',
        () => mg,
        'ZodNonOptional',
        () => m8,
        'ZodNull',
        () => mc,
        'ZodNullable',
        () => m1,
        'ZodNumber',
        () => f1,
        'ZodNumberFormat',
        () => f6,
        'ZodObject',
        () => mk,
        'ZodOptional',
        () => mQ,
        'ZodPipe',
        () => ho,
        'ZodPrefault',
        () => m3,
        'ZodPromise',
        () => hg,
        'ZodReadonly',
        () => hc,
        'ZodRecord',
        () => mZ,
        'ZodSet',
        () => mF,
        'ZodString',
        () => fa,
        'ZodStringFormat',
        () => fs,
        'ZodSuccess',
        () => he,
        'ZodSymbol',
        () => mo,
        'ZodTemplateLiteral',
        () => hp,
        'ZodTransform',
        () => mH,
        'ZodTuple',
        () => mz,
        'ZodType',
        () => fr,
        'ZodULID',
        () => fO,
        'ZodURL',
        () => fv,
        'ZodUUID',
        () => fp,
        'ZodUndefined',
        () => mu,
        'ZodUnion',
        () => mT,
        'ZodUnknown',
        () => mm,
        'ZodVoid',
        () => m_,
        'ZodXID',
        () => fN,
        '_ZodString',
        () => fi,
        '_default',
        () => m9,
        '_function',
        () => hy,
        'any',
        () => mf,
        'array',
        () => mx,
        'base64',
        () => fB,
        'base64url',
        () => fG,
        'bigint',
        () => mn,
        'boolean',
        () => me,
        'catch',
        () => hr,
        'check',
        () => h$,
        'cidrv4',
        () => fC,
        'cidrv6',
        () => fM,
        'codec',
        () => hl,
        'cuid',
        () => fk,
        'cuid2',
        () => fE,
        'custom',
        () => hS,
        'date',
        () => m$,
        'discriminatedUnion',
        () => mU,
        'e164',
        () => fW,
        'email',
        () => fl,
        'emoji',
        () => f$,
        'enum',
        () => mG,
        'file',
        () => mX,
        'float32',
        () => f9,
        'float64',
        () => f3,
        'function',
        () => hy,
        'guid',
        () => fd,
        'hash',
        () => f0,
        'hex',
        () => fQ,
        'hostname',
        () => fq,
        'httpUrl',
        () => fy,
        'instanceof',
        () => hk,
        'int',
        () => f2,
        'int32',
        () => f5,
        'int64',
        () => mi,
        'intersection',
        () => mD,
        'ipv4',
        () => fz,
        'ipv6',
        () => fZ,
        'json',
        () => hE,
        'jwt',
        () => fY,
        'keyof',
        () => mI,
        'ksuid',
        () => fA,
        'lazy',
        () => hh,
        'literal',
        () => mK,
        'looseObject',
        () => mO,
        'map',
        () => mM,
        'nan',
        () => ha,
        'nanoid',
        () => fx,
        'nativeEnum',
        () => mJ,
        'never',
        () => mv,
        'nonoptional',
        () => m7,
        'null',
        () => md,
        'nullable',
        () => m4,
        'nullish',
        () => m6,
        'number',
        () => f4,
        'object',
        () => mw,
        'optional',
        () => m0,
        'partialRecord',
        () => mC,
        'pipe',
        () => hs,
        'prefault',
        () => m5,
        'preprocess',
        () => hO,
        'promise',
        () => hv,
        'readonly',
        () => hd,
        'record',
        () => mR,
        'refine',
        () => hx,
        'set',
        () => mB,
        'strictObject',
        () => mE,
        'string',
        () => fo,
        'stringFormat',
        () => fH,
        'stringbool',
        () => hw,
        'success',
        () => ht,
        'superRefine',
        () => hI,
        'symbol',
        () => ms,
        'templateLiteral',
        () => hf,
        'transform',
        () => mq,
        'tuple',
        () => mj,
        'uint32',
        () => f8,
        'uint64',
        () => ma,
        'ulid',
        () => fT,
        'undefined',
        () => ml,
        'union',
        () => mN,
        'unknown',
        () => mh,
        'url',
        () => f_,
        'uuid',
        () => ff,
        'uuidv4',
        () => fm,
        'uuidv6',
        () => fh,
        'uuidv7',
        () => fg,
        'void',
        () => my,
        'xid',
        () => fP,
      ],
      42514
    );
    var pF = ca,
      pB = ci;
    e.s(
      [
        'ZodISODate',
        () => pJ,
        'ZodISODateTime',
        () => pV,
        'ZodISODuration',
        () => pX,
        'ZodISOTime',
        () => pK,
        'date',
        () => pW,
        'datetime',
        () => pG,
        'duration',
        () => pH,
        'time',
        () => pY,
      ],
      61977
    );
    let pV = aW('ZodISODateTime', (e, t) => {
      (u4.init(e, t), fs.init(e, t));
    });
    function pG(e) {
      return dv(pV, e);
    }
    let pJ = aW('ZodISODate', (e, t) => {
      (u6.init(e, t), fs.init(e, t));
    });
    function pW(e) {
      return d_(pJ, e);
    }
    let pK = aW('ZodISOTime', (e, t) => {
      (u2.init(e, t), fs.init(e, t));
    });
    function pY(e) {
      return dy(pK, e);
    }
    let pX = aW('ZodISODuration', (e, t) => {
      (u9.init(e, t), fs.init(e, t));
    });
    function pH(e) {
      return db(pX, e);
    }
    (e.s(
      [
        'decode',
        () => p3,
        'decodeAsync',
        () => p8,
        'encode',
        () => p9,
        'encodeAsync',
        () => p5,
        'parse',
        () => p1,
        'parseAsync',
        () => p4,
        'safeDecode',
        () => fe,
        'safeDecodeAsync',
        () => fn,
        'safeEncode',
        () => p7,
        'safeEncodeAsync',
        () => ft,
        'safeParse',
        () => p6,
        'safeParseAsync',
        () => p2,
      ],
      72129
    ),
      e.s(['ZodError', () => pQ, 'ZodRealError', () => p0], 23969));
    let pq = (e, t) => {
        (oq.init(e, t),
          (e.name = 'ZodError'),
          Object.defineProperties(e, {
            format: { value: (t) => o1(e, t) },
            flatten: { value: (t) => o0(e, t) },
            addIssue: {
              value: (t) => {
                (e.issues.push(t), (e.message = JSON.stringify(e.issues, a3, 2)));
              },
            },
            addIssues: {
              value: (t) => {
                (e.issues.push(...t), (e.message = JSON.stringify(e.issues, a3, 2)));
              },
            },
            isEmpty: { get: () => 0 === e.issues.length },
          }));
      },
      pQ = aW('ZodError', pq),
      p0 = aW('ZodError', pq, { Parent: Error }),
      p1 = o9(p0),
      p4 = o5(p0),
      p6 = o7(p0),
      p2 = st(p0),
      p9 = sr(p0),
      p3 = sa(p0),
      p5 = ss(p0),
      p8 = sl(p0),
      p7 = sd(p0),
      fe = sf(p0),
      ft = sh(p0),
      fn = sv(p0),
      fr = aW(
        'ZodType',
        (e, t) => (
          uF.init(e, t),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, '_def', { value: t }),
          (e.check = (...n) =>
            e.clone({
              ...t,
              checks: [
                ...(t.checks ?? []),
                ...n.map((e) =>
                  'function' == typeof e
                    ? { _zod: { check: e, def: { check: 'custom' }, onattach: [] } }
                    : e
                ),
              ],
            })),
          (e.clone = (t, n) => o$(e, t, n)),
          (e.brand = () => e),
          (e.register = (t, n) => (t.add(e, n), e)),
          (e.parse = (t, n) => p1(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => p6(e, t, n)),
          (e.parseAsync = async (t, n) => p4(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => p2(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => p9(e, t, n)),
          (e.decode = (t, n) => p3(e, t, n)),
          (e.encodeAsync = async (t, n) => p5(e, t, n)),
          (e.decodeAsync = async (t, n) => p8(e, t, n)),
          (e.safeEncode = (t, n) => p7(e, t, n)),
          (e.safeDecode = (t, n) => fe(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => ft(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => fn(e, t, n)),
          (e.refine = (t, n) => e.check(hx(t, n))),
          (e.superRefine = (t) => e.check(pD(t))),
          (e.overwrite = (t) => e.check(pr(t))),
          (e.optional = () => m0(e)),
          (e.nullable = () => m4(e)),
          (e.nullish = () => m0(m4(e))),
          (e.nonoptional = (t) => m7(e, t)),
          (e.array = () => mx(e)),
          (e.or = (t) => mN([e, t])),
          (e.and = (t) => mD(e, t)),
          (e.transform = (t) => hs(e, mq(t))),
          (e.default = (t) => m9(e, t)),
          (e.prefault = (t) => m5(e, t)),
          (e.catch = (t) => hr(e, t)),
          (e.pipe = (t) => hs(e, t)),
          (e.readonly = () => hd(e)),
          (e.describe = (t) => {
            let n = e.clone();
            return (c0.add(n, { description: t }), n);
          }),
          Object.defineProperty(e, 'description', {
            get: () => c0.get(e)?.description,
            configurable: !0,
          }),
          (e.meta = (...t) => {
            if (0 === t.length) return c0.get(e);
            let n = e.clone();
            return (c0.add(n, t[0]), n);
          }),
          (e.isOptional = () => e.safeParse(void 0).success),
          (e.isNullable = () => e.safeParse(null).success),
          e
        )
      ),
      fi = aW('_ZodString', (e, t) => {
        (uB.init(e, t), fr.init(e, t));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          (e.regex = (...t) => e.check(d9(...t))),
          (e.includes = (...t) => e.check(d8(...t))),
          (e.startsWith = (...t) => e.check(d7(...t))),
          (e.endsWith = (...t) => e.check(pe(...t))),
          (e.min = (...t) => e.check(d6(...t))),
          (e.max = (...t) => e.check(d4(...t))),
          (e.length = (...t) => e.check(d2(...t))),
          (e.nonempty = (...t) => e.check(d6(1, ...t))),
          (e.lowercase = (t) => e.check(d3(t))),
          (e.uppercase = (t) => e.check(d5(t))),
          (e.trim = () => e.check(pa())),
          (e.normalize = (...t) => e.check(pi(...t))),
          (e.toLowerCase = () => e.check(po())),
          (e.toUpperCase = () => e.check(ps())));
      }),
      fa = aW('ZodString', (e, t) => {
        (uB.init(e, t),
          fi.init(e, t),
          (e.email = (t) => e.check(c6(fu, t))),
          (e.url = (t) => e.check(c7(fv, t))),
          (e.jwt = (t) => e.check(dh(fK, t))),
          (e.emoji = (t) => e.check(de(fb, t))),
          (e.guid = (t) => e.check(c2(fc, t))),
          (e.uuid = (t) => e.check(c9(fp, t))),
          (e.uuidv4 = (t) => e.check(c3(fp, t))),
          (e.uuidv6 = (t) => e.check(c5(fp, t))),
          (e.uuidv7 = (t) => e.check(c8(fp, t))),
          (e.nanoid = (t) => e.check(dt(fS, t))),
          (e.guid = (t) => e.check(c2(fc, t))),
          (e.cuid = (t) => e.check(dn(fI, t))),
          (e.cuid2 = (t) => e.check(dr(fw, t))),
          (e.ulid = (t) => e.check(di(fO, t))),
          (e.base64 = (t) => e.check(dp(fF, t))),
          (e.base64url = (t) => e.check(df(fV, t))),
          (e.xid = (t) => e.check(da(fN, t))),
          (e.ksuid = (t) => e.check(ds(fU, t))),
          (e.ipv4 = (t) => e.check(du(fD, t))),
          (e.ipv6 = (t) => e.check(dl(fj, t))),
          (e.cidrv4 = (t) => e.check(dc(fR, t))),
          (e.cidrv6 = (t) => e.check(dd(fL, t))),
          (e.e164 = (t) => e.check(dm(fJ, t))),
          (e.datetime = (t) => e.check(pG(t))),
          (e.date = (t) => e.check(pW(t))),
          (e.time = (t) => e.check(pY(t))),
          (e.duration = (t) => e.check(pH(t))));
      });
    function fo(e) {
      return c1(fa, e);
    }
    let fs = aW('ZodStringFormat', (e, t) => {
        (uV.init(e, t), fi.init(e, t));
      }),
      fu = aW('ZodEmail', (e, t) => {
        (uW.init(e, t), fs.init(e, t));
      });
    function fl(e) {
      return c6(fu, e);
    }
    let fc = aW('ZodGUID', (e, t) => {
      (uG.init(e, t), fs.init(e, t));
    });
    function fd(e) {
      return c2(fc, e);
    }
    let fp = aW('ZodUUID', (e, t) => {
      (uJ.init(e, t), fs.init(e, t));
    });
    function ff(e) {
      return c9(fp, e);
    }
    function fm(e) {
      return c3(fp, e);
    }
    function fh(e) {
      return c5(fp, e);
    }
    function fg(e) {
      return c8(fp, e);
    }
    let fv = aW('ZodURL', (e, t) => {
      (uK.init(e, t), fs.init(e, t));
    });
    function f_(e) {
      return c7(fv, e);
    }
    function fy(e) {
      return c7(fv, { protocol: /^https?$/, hostname: pF.domain, ...pB.normalizeParams(e) });
    }
    let fb = aW('ZodEmoji', (e, t) => {
      (uY.init(e, t), fs.init(e, t));
    });
    function f$(e) {
      return de(fb, e);
    }
    let fS = aW('ZodNanoID', (e, t) => {
      (uX.init(e, t), fs.init(e, t));
    });
    function fx(e) {
      return dt(fS, e);
    }
    let fI = aW('ZodCUID', (e, t) => {
      (uH.init(e, t), fs.init(e, t));
    });
    function fk(e) {
      return dn(fI, e);
    }
    let fw = aW('ZodCUID2', (e, t) => {
      (uq.init(e, t), fs.init(e, t));
    });
    function fE(e) {
      return dr(fw, e);
    }
    let fO = aW('ZodULID', (e, t) => {
      (uQ.init(e, t), fs.init(e, t));
    });
    function fT(e) {
      return di(fO, e);
    }
    let fN = aW('ZodXID', (e, t) => {
      (u0.init(e, t), fs.init(e, t));
    });
    function fP(e) {
      return da(fN, e);
    }
    let fU = aW('ZodKSUID', (e, t) => {
      (u1.init(e, t), fs.init(e, t));
    });
    function fA(e) {
      return ds(fU, e);
    }
    let fD = aW('ZodIPv4', (e, t) => {
      (u3.init(e, t), fs.init(e, t));
    });
    function fz(e) {
      return du(fD, e);
    }
    let fj = aW('ZodIPv6', (e, t) => {
      (u5.init(e, t), fs.init(e, t));
    });
    function fZ(e) {
      return dl(fj, e);
    }
    let fR = aW('ZodCIDRv4', (e, t) => {
      (u8.init(e, t), fs.init(e, t));
    });
    function fC(e) {
      return dc(fR, e);
    }
    let fL = aW('ZodCIDRv6', (e, t) => {
      (u7.init(e, t), fs.init(e, t));
    });
    function fM(e) {
      return dd(fL, e);
    }
    let fF = aW('ZodBase64', (e, t) => {
      (lt.init(e, t), fs.init(e, t));
    });
    function fB(e) {
      return dp(fF, e);
    }
    let fV = aW('ZodBase64URL', (e, t) => {
      (lr.init(e, t), fs.init(e, t));
    });
    function fG(e) {
      return df(fV, e);
    }
    let fJ = aW('ZodE164', (e, t) => {
      (li.init(e, t), fs.init(e, t));
    });
    function fW(e) {
      return dm(fJ, e);
    }
    let fK = aW('ZodJWT', (e, t) => {
      (lo.init(e, t), fs.init(e, t));
    });
    function fY(e) {
      return dh(fK, e);
    }
    let fX = aW('ZodCustomStringFormat', (e, t) => {
      (ls.init(e, t), fs.init(e, t));
    });
    function fH(e, t, n = {}) {
      return pZ(fX, e, t, n);
    }
    function fq(e) {
      return pZ(fX, 'hostname', pF.hostname, e);
    }
    function fQ(e) {
      return pZ(fX, 'hex', pF.hex, e);
    }
    function f0(e, t) {
      let n = t?.enc ?? 'hex',
        r = `${e}_${n}`,
        i = pF[r];
      if (!i) throw Error(`Unrecognized hash format: ${r}`);
      return pZ(fX, r, i, t);
    }
    let f1 = aW('ZodNumber', (e, t) => {
      (lu.init(e, t),
        fr.init(e, t),
        (e.gt = (t, n) => e.check(dJ(t, n))),
        (e.gte = (t, n) => e.check(dW(t, n))),
        (e.min = (t, n) => e.check(dW(t, n))),
        (e.lt = (t, n) => e.check(dV(t, n))),
        (e.lte = (t, n) => e.check(dG(t, n))),
        (e.max = (t, n) => e.check(dG(t, n))),
        (e.int = (t) => e.check(f2(t))),
        (e.safe = (t) => e.check(f2(t))),
        (e.positive = (t) => e.check(dJ(0, t))),
        (e.nonnegative = (t) => e.check(dW(0, t))),
        (e.negative = (t) => e.check(dV(0, t))),
        (e.nonpositive = (t) => e.check(dG(0, t))),
        (e.multipleOf = (t, n) => e.check(dq(t, n))),
        (e.step = (t, n) => e.check(dq(t, n))),
        (e.finite = () => e));
      let n = e._zod.bag;
      ((e.minValue = Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
        (e.maxValue = Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
        (e.isInt = (n.format ?? '').includes('int') || Number.isSafeInteger(n.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = n.format ?? null));
    });
    function f4(e) {
      return d$(f1, e);
    }
    let f6 = aW('ZodNumberFormat', (e, t) => {
      (ll.init(e, t), f1.init(e, t));
    });
    function f2(e) {
      return dx(f6, e);
    }
    function f9(e) {
      return dI(f6, e);
    }
    function f3(e) {
      return dk(f6, e);
    }
    function f5(e) {
      return dw(f6, e);
    }
    function f8(e) {
      return dE(f6, e);
    }
    let f7 = aW('ZodBoolean', (e, t) => {
      (lc.init(e, t), fr.init(e, t));
    });
    function me(e) {
      return dO(f7, e);
    }
    let mt = aW('ZodBigInt', (e, t) => {
      (ld.init(e, t),
        fr.init(e, t),
        (e.gte = (t, n) => e.check(dW(t, n))),
        (e.min = (t, n) => e.check(dW(t, n))),
        (e.gt = (t, n) => e.check(dJ(t, n))),
        (e.gte = (t, n) => e.check(dW(t, n))),
        (e.min = (t, n) => e.check(dW(t, n))),
        (e.lt = (t, n) => e.check(dV(t, n))),
        (e.lte = (t, n) => e.check(dG(t, n))),
        (e.max = (t, n) => e.check(dG(t, n))),
        (e.positive = (t) => e.check(dJ(BigInt(0), t))),
        (e.negative = (t) => e.check(dV(BigInt(0), t))),
        (e.nonpositive = (t) => e.check(dG(BigInt(0), t))),
        (e.nonnegative = (t) => e.check(dW(BigInt(0), t))),
        (e.multipleOf = (t, n) => e.check(dq(t, n))));
      let n = e._zod.bag;
      ((e.minValue = n.minimum ?? null),
        (e.maxValue = n.maximum ?? null),
        (e.format = n.format ?? null));
    });
    function mn(e) {
      return dN(mt, e);
    }
    let mr = aW('ZodBigIntFormat', (e, t) => {
      (lp.init(e, t), mt.init(e, t));
    });
    function mi(e) {
      return dU(mr, e);
    }
    function ma(e) {
      return dA(mr, e);
    }
    let mo = aW('ZodSymbol', (e, t) => {
      (lf.init(e, t), fr.init(e, t));
    });
    function ms(e) {
      return dD(mo, e);
    }
    let mu = aW('ZodUndefined', (e, t) => {
      (lm.init(e, t), fr.init(e, t));
    });
    function ml(e) {
      return dz(mu, e);
    }
    let mc = aW('ZodNull', (e, t) => {
      (lh.init(e, t), fr.init(e, t));
    });
    function md(e) {
      return dj(mc, e);
    }
    let mp = aW('ZodAny', (e, t) => {
      (lg.init(e, t), fr.init(e, t));
    });
    function mf() {
      return dZ(mp);
    }
    let mm = aW('ZodUnknown', (e, t) => {
      (lv.init(e, t), fr.init(e, t));
    });
    function mh() {
      return dR(mm);
    }
    let mg = aW('ZodNever', (e, t) => {
      (l_.init(e, t), fr.init(e, t));
    });
    function mv(e) {
      return dC(mg, e);
    }
    let m_ = aW('ZodVoid', (e, t) => {
      (ly.init(e, t), fr.init(e, t));
    });
    function my(e) {
      return dL(m_, e);
    }
    let mb = aW('ZodDate', (e, t) => {
      (lb.init(e, t),
        fr.init(e, t),
        (e.min = (t, n) => e.check(dW(t, n))),
        (e.max = (t, n) => e.check(dG(t, n))));
      let n = e._zod.bag;
      ((e.minDate = n.minimum ? new Date(n.minimum) : null),
        (e.maxDate = n.maximum ? new Date(n.maximum) : null));
    });
    function m$(e) {
      return dM(mb, e);
    }
    let mS = aW('ZodArray', (e, t) => {
      (lS.init(e, t),
        fr.init(e, t),
        (e.element = t.element),
        (e.min = (t, n) => e.check(d6(t, n))),
        (e.nonempty = (t) => e.check(d6(1, t))),
        (e.max = (t, n) => e.check(d4(t, n))),
        (e.length = (t, n) => e.check(d2(t, n))),
        (e.unwrap = () => e.element));
    });
    function mx(e, t) {
      return pu(mS, e, t);
    }
    function mI(e) {
      return mG(Object.keys(e._zod.def.shape));
    }
    let mk = aW('ZodObject', (e, t) => {
      (lE.init(e, t),
        fr.init(e, t),
        pB.defineLazy(e, 'shape', () => t.shape),
        (e.keyof = () => mG(Object.keys(e._zod.def.shape))),
        (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: mh() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: mh() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: mv() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (t) => pB.extend(e, t)),
        (e.safeExtend = (t) => pB.safeExtend(e, t)),
        (e.merge = (t) => pB.merge(e, t)),
        (e.pick = (t) => pB.pick(e, t)),
        (e.omit = (t) => pB.omit(e, t)),
        (e.partial = (...t) => pB.partial(mQ, e, t[0])),
        (e.required = (...t) => pB.required(m8, e, t[0])));
    });
    function mw(e, t) {
      return new mk({
        type: 'object',
        get shape() {
          return (pB.assignProp(this, 'shape', e ? pB.objectClone(e) : {}), this.shape);
        },
        ...pB.normalizeParams(t),
      });
    }
    function mE(e, t) {
      return new mk({
        type: 'object',
        get shape() {
          return (pB.assignProp(this, 'shape', pB.objectClone(e)), this.shape);
        },
        catchall: mv(),
        ...pB.normalizeParams(t),
      });
    }
    function mO(e, t) {
      return new mk({
        type: 'object',
        get shape() {
          return (pB.assignProp(this, 'shape', pB.objectClone(e)), this.shape);
        },
        catchall: mh(),
        ...pB.normalizeParams(t),
      });
    }
    let mT = aW('ZodUnion', (e, t) => {
      (lT.init(e, t), fr.init(e, t), (e.options = t.options));
    });
    function mN(e, t) {
      return new mT({ type: 'union', options: e, ...pB.normalizeParams(t) });
    }
    let mP = aW('ZodDiscriminatedUnion', (e, t) => {
      (mT.init(e, t), lN.init(e, t));
    });
    function mU(e, t, n) {
      return new mP({ type: 'union', options: t, discriminator: e, ...pB.normalizeParams(n) });
    }
    let mA = aW('ZodIntersection', (e, t) => {
      (lP.init(e, t), fr.init(e, t));
    });
    function mD(e, t) {
      return new mA({ type: 'intersection', left: e, right: t });
    }
    let mz = aW('ZodTuple', (e, t) => {
      (lA.init(e, t), fr.init(e, t), (e.rest = (t) => e.clone({ ...e._zod.def, rest: t })));
    });
    function mj(e, t, n) {
      let r = t instanceof uF,
        i = r ? n : t;
      return new mz({ type: 'tuple', items: e, rest: r ? t : null, ...pB.normalizeParams(i) });
    }
    let mZ = aW('ZodRecord', (e, t) => {
      (lz.init(e, t), fr.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType));
    });
    function mR(e, t, n) {
      return new mZ({ type: 'record', keyType: e, valueType: t, ...pB.normalizeParams(n) });
    }
    function mC(e, t, n) {
      let r = o$(e);
      return (
        (r._zod.values = void 0),
        new mZ({ type: 'record', keyType: r, valueType: t, ...pB.normalizeParams(n) })
      );
    }
    let mL = aW('ZodMap', (e, t) => {
      (lj.init(e, t), fr.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType));
    });
    function mM(e, t, n) {
      return new mL({ type: 'map', keyType: e, valueType: t, ...pB.normalizeParams(n) });
    }
    let mF = aW('ZodSet', (e, t) => {
      (lR.init(e, t),
        fr.init(e, t),
        (e.min = (...t) => e.check(d0(...t))),
        (e.nonempty = (t) => e.check(d0(1, t))),
        (e.max = (...t) => e.check(dQ(...t))),
        (e.size = (...t) => e.check(d1(...t))));
    });
    function mB(e, t) {
      return new mF({ type: 'set', valueType: e, ...pB.normalizeParams(t) });
    }
    let mV = aW('ZodEnum', (e, t) => {
      (lL.init(e, t), fr.init(e, t), (e.enum = t.entries), (e.options = Object.values(t.entries)));
      let n = new Set(Object.keys(t.entries));
      ((e.extract = (e, r) => {
        let i = {};
        for (let r of e)
          if (n.has(r)) i[r] = t.entries[r];
          else throw Error(`Key ${r} not found in enum`);
        return new mV({ ...t, checks: [], ...pB.normalizeParams(r), entries: i });
      }),
        (e.exclude = (e, r) => {
          let i = { ...t.entries };
          for (let t of e)
            if (n.has(t)) delete i[t];
            else throw Error(`Key ${t} not found in enum`);
          return new mV({ ...t, checks: [], ...pB.normalizeParams(r), entries: i });
        }));
    });
    function mG(e, t) {
      return new mV({
        type: 'enum',
        entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
        ...pB.normalizeParams(t),
      });
    }
    function mJ(e, t) {
      return new mV({ type: 'enum', entries: e, ...pB.normalizeParams(t) });
    }
    let mW = aW('ZodLiteral', (e, t) => {
      (lM.init(e, t),
        fr.init(e, t),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, 'value', {
          get() {
            if (t.values.length > 1)
              throw Error(
                'This schema contains multiple valid literal values. Use `.values` instead.'
              );
            return t.values[0];
          },
        }));
    });
    function mK(e, t) {
      return new mW({
        type: 'literal',
        values: Array.isArray(e) ? e : [e],
        ...pB.normalizeParams(t),
      });
    }
    let mY = aW('ZodFile', (e, t) => {
      (lF.init(e, t),
        fr.init(e, t),
        (e.min = (t, n) => e.check(d0(t, n))),
        (e.max = (t, n) => e.check(dQ(t, n))),
        (e.mime = (t, n) => e.check(pn(Array.isArray(t) ? t : [t], n))));
    });
    function mX(e) {
      return py(mY, e);
    }
    let mH = aW('ZodTransform', (e, t) => {
      (lB.init(e, t),
        fr.init(e, t),
        (e._zod.parse = (n, r) => {
          if ('backward' === r.direction) throw new aX(e.constructor.name);
          n.addIssue = (r) => {
            'string' == typeof r
              ? n.issues.push(pB.issue(r, n.value, t))
              : (r.fatal && (r.continue = !1),
                r.code ?? (r.code = 'custom'),
                r.input ?? (r.input = n.value),
                r.inst ?? (r.inst = e),
                n.issues.push(pB.issue(r)));
          };
          let i = t.transform(n.value, n);
          return i instanceof Promise ? i.then((e) => ((n.value = e), n)) : ((n.value = i), n);
        }));
    });
    function mq(e) {
      return new mH({ type: 'transform', transform: e });
    }
    let mQ = aW('ZodOptional', (e, t) => {
      (lG.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function m0(e) {
      return new mQ({ type: 'optional', innerType: e });
    }
    let m1 = aW('ZodNullable', (e, t) => {
      (lJ.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function m4(e) {
      return new m1({ type: 'nullable', innerType: e });
    }
    function m6(e) {
      return m0(m4(e));
    }
    let m2 = aW('ZodDefault', (e, t) => {
      (lW.init(e, t),
        fr.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
    });
    function m9(e, t) {
      return new m2({
        type: 'default',
        innerType: e,
        get defaultValue() {
          return 'function' == typeof t ? t() : pB.shallowClone(t);
        },
      });
    }
    let m3 = aW('ZodPrefault', (e, t) => {
      (lY.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function m5(e, t) {
      return new m3({
        type: 'prefault',
        innerType: e,
        get defaultValue() {
          return 'function' == typeof t ? t() : pB.shallowClone(t);
        },
      });
    }
    let m8 = aW('ZodNonOptional', (e, t) => {
      (lX.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function m7(e, t) {
      return new m8({ type: 'nonoptional', innerType: e, ...pB.normalizeParams(t) });
    }
    let he = aW('ZodSuccess', (e, t) => {
      (lq.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function ht(e) {
      return new he({ type: 'success', innerType: e });
    }
    let hn = aW('ZodCatch', (e, t) => {
      (lQ.init(e, t),
        fr.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
    });
    function hr(e, t) {
      return new hn({
        type: 'catch',
        innerType: e,
        catchValue: 'function' == typeof t ? t : () => t,
      });
    }
    let hi = aW('ZodNaN', (e, t) => {
      (l0.init(e, t), fr.init(e, t));
    });
    function ha(e) {
      return dB(hi, e);
    }
    let ho = aW('ZodPipe', (e, t) => {
      (l1.init(e, t), fr.init(e, t), (e.in = t.in), (e.out = t.out));
    });
    function hs(e, t) {
      return new ho({ type: 'pipe', in: e, out: t });
    }
    let hu = aW('ZodCodec', (e, t) => {
      (ho.init(e, t), l6.init(e, t));
    });
    function hl(e, t, n) {
      return new hu({
        type: 'pipe',
        in: e,
        out: t,
        transform: n.decode,
        reverseTransform: n.encode,
      });
    }
    let hc = aW('ZodReadonly', (e, t) => {
      (l3.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function hd(e) {
      return new hc({ type: 'readonly', innerType: e });
    }
    let hp = aW('ZodTemplateLiteral', (e, t) => {
      (l8.init(e, t), fr.init(e, t));
    });
    function hf(e, t) {
      return new hp({ type: 'template_literal', parts: e, ...pB.normalizeParams(t) });
    }
    let hm = aW('ZodLazy', (e, t) => {
      (ct.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.getter()));
    });
    function hh(e) {
      return new hm({ type: 'lazy', getter: e });
    }
    let hg = aW('ZodPromise', (e, t) => {
      (ce.init(e, t), fr.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function hv(e) {
      return new hg({ type: 'promise', innerType: e });
    }
    let h_ = aW('ZodFunction', (e, t) => {
      (l7.init(e, t), fr.init(e, t));
    });
    function hy(e) {
      return new h_({
        type: 'function',
        input: Array.isArray(e?.input) ? mj(e?.input) : (e?.input ?? mx(mh())),
        output: e?.output ?? mh(),
      });
    }
    let hb = aW('ZodCustom', (e, t) => {
      (cn.init(e, t), fr.init(e, t));
    });
    function h$(e) {
      let t = new ug({ check: 'custom' });
      return ((t._zod.check = e), t);
    }
    function hS(e, t) {
      return pU(hb, e ?? (() => !0), t);
    }
    function hx(e, t = {}) {
      return pA(hb, e, t);
    }
    function hI(e) {
      return pD(e);
    }
    function hk(e, t = { error: `Input not instance of ${e.name}` }) {
      let n = new hb({
        type: 'custom',
        check: 'custom',
        fn: (t) => t instanceof e,
        abort: !0,
        ...pB.normalizeParams(t),
      });
      return ((n._zod.bag.Class = e), n);
    }
    let hw = (...e) => pj({ Codec: hu, Boolean: f7, String: fa }, ...e);
    function hE(e) {
      let t = hh(() => mN([fo(e), f4(), me(), md(), mx(t), mR(fo(), t)]));
      return t;
    }
    function hO(e, t) {
      return hs(mq(e), t);
    }
    (e.i(42514),
      e.s(
        [
          'endsWith',
          () => pe,
          'gt',
          () => dJ,
          'gte',
          () => dW,
          'includes',
          () => d8,
          'length',
          () => d2,
          'lowercase',
          () => d3,
          'lt',
          () => dV,
          'lte',
          () => dG,
          'maxLength',
          () => d4,
          'maxSize',
          () => dQ,
          'mime',
          () => pn,
          'minLength',
          () => d6,
          'minSize',
          () => d0,
          'multipleOf',
          () => dq,
          'negative',
          () => dY,
          'nonnegative',
          () => dH,
          'nonpositive',
          () => dX,
          'normalize',
          () => pi,
          'overwrite',
          () => pr,
          'positive',
          () => dK,
          'property',
          () => pt,
          'regex',
          () => d9,
          'size',
          () => d1,
          'startsWith',
          () => d7,
          'toLowerCase',
          () => po,
          'toUpperCase',
          () => ps,
          'trim',
          () => pa,
          'uppercase',
          () => d5,
        ],
        99027
      ),
      e.s([], 34462),
      e.i(34462),
      e.i(99027),
      e.i(23969),
      e.i(72129),
      e.s(
        [
          '$brand',
          () => aK,
          'ZodFirstPartyTypeKind',
          () => tv,
          'ZodIssueCode',
          () => hT,
          'config',
          () => aq,
          'getErrorMap',
          () => hP,
          'setErrorMap',
          () => hN,
        ],
        28044
      ),
      e.s(
        [
          'ZodFirstPartyTypeKind',
          () => tv,
          'ZodIssueCode',
          () => hT,
          'getErrorMap',
          () => hP,
          'setErrorMap',
          () => hN,
        ],
        10351
      ));
    let hT = {
      invalid_type: 'invalid_type',
      too_big: 'too_big',
      too_small: 'too_small',
      invalid_format: 'invalid_format',
      not_multiple_of: 'not_multiple_of',
      unrecognized_keys: 'unrecognized_keys',
      invalid_union: 'invalid_union',
      invalid_key: 'invalid_key',
      invalid_element: 'invalid_element',
      invalid_value: 'invalid_value',
      custom: 'custom',
    };
    function hN(e) {
      aq({ customError: e });
    }
    function hP() {
      return aq().customError;
    }
    (tv || (tv = {}), e.i(10351), e.i(28044));
    var pF = ca,
      pB = ci,
      hU = cY,
      hA = e.i(61977);
    function hD(e) {
      return c4(fa, e);
    }
    function hz(e) {
      return dS(f1, e);
    }
    function hj(e) {
      return dT(f7, e);
    }
    function hZ(e) {
      return dP(mt, e);
    }
    function hR(e) {
      return dF(mb, e);
    }
    e.s(
      [
        'bigint',
        () => hZ,
        'boolean',
        () => hj,
        'date',
        () => hR,
        'number',
        () => hz,
        'string',
        () => hD,
      ],
      68995
    );
    var hC = e.i(68995),
      hL = e.i(16752),
      hL = hL;
    let hM = (function (e) {
      let t = 'object' == typeof e.client ? e.client : {},
        n = 'object' == typeof e.server ? e.server : {},
        r = e.shared,
        i = e.runtimeEnv ? e.runtimeEnv : { ...process.env, ...e.experimental__runtimeEnv };
      return (function (e) {
        let t = e.runtimeEnvStrict ?? e.runtimeEnv ?? process.env;
        if (e.emptyStringAsUndefined) for (let [e, n] of Object.entries(t)) '' === n && delete t[e];
        if (e.skipValidation) return t;
        let n = 'object' == typeof e.client ? e.client : {},
          r = 'object' == typeof e.server ? e.server : {},
          i = 'object' == typeof e.shared ? e.shared : {},
          a = e.isServer ?? !0,
          o = a ? { ...r, ...i, ...n } : { ...n, ...i },
          s =
            e.createFinalSchema?.(o, a)['~standard'].validate(t) ??
            (function (e, t) {
              let n = {},
                r = [];
              for (let i in e) {
                let a = e[i]['~standard'].validate(t[i]);
                if (
                  (aG(a, `Validation must be synchronous, but ${i} returned a Promise.`), a.issues)
                ) {
                  r.push(
                    ...a.issues.map((e) => ({
                      ...e,
                      message: e.message,
                      path: [i, ...(e.path ?? [])],
                    }))
                  );
                  continue;
                }
                n[i] = a.value;
              }
              return r.length ? { issues: r } : { value: n };
            })(o, t);
        aG(s, 'Validation must be synchronous');
        let u =
            e.onValidationError ??
            ((e) => {
              throw (
                console.error('❌ Invalid environment variables:', e),
                Error('Invalid environment variables')
              );
            }),
          l =
            e.onInvalidAccess ??
            (() => {
              throw Error(
                '❌ Attempted to access a server-side environment variable on the client'
              );
            });
        return s.issues
          ? u(s.issues)
          : new Proxy(
              Object.assign(
                (e.extends ?? []).reduce((e, t) => Object.assign(e, t), {}),
                s.value
              ),
              {
                get(t, n) {
                  if ('string' == typeof n && '__esModule' !== n && '$$typeof' !== n)
                    return a || (e.clientPrefix && (n.startsWith(e.clientPrefix) || n in i))
                      ? Reflect.get(t, n)
                      : l(n);
                },
              }
            );
      })({ ...e, shared: r, client: t, server: n, clientPrefix: 'NEXT_PUBLIC_', runtimeEnv: i });
    })({
      server: {
        NODE_ENV: hL.enum(['development', 'test', 'production']).default('development'),
        SENTRY_DSN: hL.string().url().optional(),
        SENTRY_ORG: hL.string().optional(),
        SENTRY_PROJECT: hL.string().optional(),
        DATABASE_URL: hL.string().url().optional(),
        SUPABASE_URL: hL.string().url().optional(),
        SUPABASE_ANON_KEY: hL.string().min(1).optional(),
        STRIPE_WEBHOOK_SECRET: hL.string().optional(),
      },
      client: {
        NEXT_PUBLIC_APP_NAME: hL.string().default('DL Starter'),
        NEXT_PUBLIC_POSTHOG_KEY: hL.string().optional(),
        NEXT_PUBLIC_SENTRY_DSN: hL.string().url().optional(),
      },
      runtimeEnv: {
        NODE_ENV: 'production',
        SENTRY_DSN: process.env.SENTRY_DSN,
        SENTRY_ORG: process.env.SENTRY_ORG,
        SENTRY_PROJECT: process.env.SENTRY_PROJECT,
        DATABASE_URL: process.env.DATABASE_URL,
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
      },
      emptyStringAsUndefined: !0,
    });
    (hM.SENTRY_DSN || hM.NEXT_PUBLIC_SENTRY_DSN) &&
      (function (e = {}) {
        if ((tr(), process.env.NEXT_PHASE === aC.PHASE_PRODUCTION_BUILD)) return;
        let t = aR(e);
        t.push(
          (({ distDirName: e }) => {
            let t = e.replace(/(\/|\\)$/, ''),
              n = RegExp(`.*${t.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')}`);
            return {
              ...((e = {}) => {
                let t = e.root,
                  n = e.prefix || 'app:///',
                  r = 'window' in s && !!s.window,
                  i =
                    e.iteratee ||
                    (function ({ isBrowser: e, root: t, prefix: n }) {
                      return (r) => {
                        if (!r.filename) return r;
                        let i =
                            /^[a-zA-Z]:\\/.test(r.filename) ||
                            (r.filename.includes('\\') && !r.filename.includes('/')),
                          a = /^\//.test(r.filename);
                        if (e) {
                          if (t) {
                            let e = r.filename;
                            0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                          }
                        } else if (i || a) {
                          let e = i
                              ? r.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/')
                              : r.filename,
                            a = t
                              ? (function (e, t) {
                                  ((e = aB(e).slice(1)), (t = aB(t).slice(1)));
                                  let n = aV(e.split('/')),
                                    r = aV(t.split('/')),
                                    i = Math.min(n.length, r.length),
                                    a = i;
                                  for (let e = 0; e < i; e++)
                                    if (n[e] !== r[e]) {
                                      a = e;
                                      break;
                                    }
                                  let o = [];
                                  for (let e = a; e < n.length; e++) o.push('..');
                                  return (o = o.concat(r.slice(a))).join('/');
                                })(t, e)
                              : (function (e) {
                                  let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                                    n = aF.exec(t);
                                  return n ? n.slice(1) : [];
                                })(e)[2] || '';
                          r.filename = `${n}${a}`;
                        }
                        return r;
                      };
                    })({ isBrowser: r, root: t, prefix: n });
                return {
                  name: 'RewriteFrames',
                  processEvent(e) {
                    let t = e;
                    return (
                      e.exception &&
                        Array.isArray(e.exception.values) &&
                        (t = (function (e) {
                          try {
                            return {
                              ...e,
                              exception: {
                                ...e.exception,
                                values: e.exception.values.map((e) => {
                                  var t;
                                  return {
                                    ...e,
                                    ...(e.stacktrace && {
                                      stacktrace: {
                                        ...(t = e.stacktrace),
                                        frames: t?.frames?.map((e) => i(e)),
                                      },
                                    }),
                                  };
                                }),
                              },
                            };
                          } catch {
                            return e;
                          }
                        })(t)),
                      t
                    );
                  },
                };
              })({ iteratee: (e) => ((e.filename = e.filename?.replace(n, 'app:///_next')), e) }),
              name: 'DistDirRewriteFrames',
            };
          })({ distDirName: '.next' })
        );
        let n = {
          defaultIntegrations: t,
          release: '00ee10857f6757b115ef0e493e592c555dbd4df8',
          ...e,
        };
        ti(n, 'nextjs', ['nextjs', 'vercel-edge']);
        let r = (function (e = {}) {
          var t, n;
          function r() {
            let e = i4(n1.active());
            return e || { scope: ed(), isolationScope: ep() };
          }
          function i() {
            return r().scope;
          }
          function a() {
            return r().isolationScope;
          }
          if (
            ((t = {
              withScope: function (e) {
                let t = n1.active();
                return n1.with(t, () => e(i()));
              },
              withSetScope: function (e, t) {
                let n = e[i1] || n1.active();
                return n1.with(n.setValue(iQ, e), () => t(e));
              },
              withSetIsolationScope: function (e, t) {
                let n = n1.active();
                return n1.with(n.setValue(i0, e), () => t(a()));
              },
              withIsolationScope: function (e) {
                let t = n1.active();
                return n1.with(t.setValue(iq, !0), () => e(a()));
              },
              getCurrentScope: i,
              getIsolationScope: a,
              startSpan: au,
              startSpanManual: al,
              startInactiveSpan: ac,
              getActiveSpan: i8,
              suppressTracing: av,
              getTraceData: a_,
              continueTrace: ah,
              withActiveSpan: ad,
            }),
            (c(l()).acs = t),
            ey().update(e.initialScope),
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = aR(e)),
            void 0 === e.dsn && process.env.SENTRY_DSN && (e.dsn = process.env.SENTRY_DSN),
            void 0 === e.tracesSampleRate && process.env.SENTRY_TRACES_SAMPLE_RATE)
          ) {
            let t = parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE);
            isFinite(t) && (e.tracesSampleRate = t);
          }
          if (void 0 === e.release) {
            let t = (function (e) {
              if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
              if (s.SENTRY_RELEASE?.id) return s.SENTRY_RELEASE.id;
              let t =
                  process.env.GITHUB_SHA ||
                  process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_SHA ||
                  process.env.CI_BUILD_REF ||
                  process.env.CI_COMMIT_SHA ||
                  process.env.BITBUCKET_COMMIT,
                n =
                  process.env.APPVEYOR_PULL_REQUEST_HEAD_COMMIT ||
                  process.env.APPVEYOR_REPO_COMMIT ||
                  process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ||
                  process.env.AWS_COMMIT_ID ||
                  process.env.BUILD_SOURCEVERSION ||
                  process.env.GIT_CLONE_COMMIT_HASH ||
                  process.env.BUDDY_EXECUTION_REVISION ||
                  process.env.BUILDKITE_COMMIT ||
                  process.env.CIRCLE_SHA1 ||
                  process.env.CIRRUS_CHANGE_IN_REPO ||
                  process.env.CF_REVISION ||
                  process.env.CM_COMMIT ||
                  process.env.CF_PAGES_COMMIT_SHA ||
                  process.env.DRONE_COMMIT_SHA ||
                  process.env.FC_GIT_COMMIT_SHA ||
                  process.env.HEROKU_TEST_RUN_COMMIT_VERSION ||
                  process.env.HEROKU_SLUG_COMMIT ||
                  process.env.RAILWAY_GIT_COMMIT_SHA ||
                  process.env.RENDER_GIT_COMMIT ||
                  process.env.SEMAPHORE_GIT_SHA ||
                  process.env.TRAVIS_PULL_REQUEST_SHA ||
                  process.env.VERCEL_GIT_COMMIT_SHA ||
                  process.env.VERCEL_GITHUB_COMMIT_SHA ||
                  process.env.VERCEL_GITLAB_COMMIT_SHA ||
                  process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
                  process.env.ZEIT_GITHUB_COMMIT_SHA ||
                  process.env.ZEIT_GITLAB_COMMIT_SHA ||
                  process.env.ZEIT_BITBUCKET_COMMIT_SHA,
                r =
                  process.env.CI_COMMIT_ID ||
                  process.env.SOURCE_COMMIT ||
                  process.env.SOURCE_VERSION ||
                  process.env.GIT_COMMIT ||
                  process.env.COMMIT_REF ||
                  process.env.BUILD_VCS_NUMBER ||
                  process.env.CI_COMMIT_SHA;
              return t || n || r || void 0;
            })();
            void 0 !== t && (e.release = t);
          }
          e.environment =
            e.environment ||
            process.env.SENTRY_ENVIRONMENT ||
            (function (e) {
              let t = process.env.VERCEL_ENV;
              return t ? `vercel-${t}` : void 0;
            })() ||
            'production';
          let o = new rB({
            ...e,
            stackParser: Array.isArray((n = e.stackParser || aZ)) ? y(...n) : n,
            integrations: (function (e) {
              let t,
                n = e.defaultIntegrations || [],
                r = e.integrations;
              if (
                (n.forEach((e) => {
                  e.isDefaultInstance = !0;
                }),
                Array.isArray(r))
              )
                t = [...n, ...r];
              else if ('function' == typeof r) {
                let e = r(n);
                t = Array.isArray(e) ? e : [e];
              } else t = n;
              let i = {};
              return (
                t.forEach((e) => {
                  let { name: t } = e,
                    n = i[t];
                  (n && !n.isDefaultInstance && e.isDefaultInstance) || (i[t] = e);
                }),
                Object.values(i)
              );
            })(e),
            transport: e.transport || aA,
          });
          return (
            ey().setClient(o),
            o.init(),
            e.skipOpenTelemetrySetup ||
              ((function (e) {
                var t;
                e.getOptions().debug &&
                  (rg.disable(),
                  rg.setLogger(
                    { error: g.error, warn: g.warn, info: g.log, debug: g.log, verbose: g.log },
                    tc.DEBUG
                  ));
                let n = new iN({
                    sampler: new aO(e),
                    resource: rM().merge(
                      rL({
                        'service.name': 'edge',
                        'service.namespace': 'sentry',
                        'service.version': u,
                      })
                    ),
                    forceFlushTimeoutMillis: 500,
                    spanProcessors: [new aE({ timeout: e.getOptions().maxSpanWaitDuration })],
                  }),
                  r =
                    ((t = aj),
                    class extends t {
                      constructor(...e) {
                        (super(...e), an('SentryContextManager'));
                      }
                      with(e, t, n, ...r) {
                        let i = i4(e),
                          a = i?.scope || ey(),
                          o = i?.isolationScope || eb(),
                          s = !0 === e.getValue(iq),
                          u = e.getValue(iQ),
                          l = e.getValue(i0),
                          c = u || a.clone(),
                          d = i6(e, { scope: c, isolationScope: l || (s ? o.clone() : o) })
                            .deleteValue(iq)
                            .deleteValue(iQ)
                            .deleteValue(i0);
                        return (K(c, i1, d), super.with(d, t, n, ...r));
                      }
                    });
                (rh.setGlobalTracerProvider(n),
                  rA.setGlobalPropagator(new ar()),
                  n1.setGlobalContextManager(new r()),
                  (e.traceProvider = n));
              })(o),
              (function () {
                if (!aN) return;
                let e = Array.from(at),
                  t = ['SentryContextManager', 'SentryPropagator'];
                for (let n of (tw() && t.push('SentrySpanProcessor'), t))
                  e.includes(n) ||
                    g.error(
                      `You have to set up the ${n}. Without this, the OpenTelemetry & Sentry integration will not work properly.`
                    );
                e.includes('SentrySampler') ||
                  g.warn(
                    'You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`.'
                  );
              })()),
            o.on('createDsc', (e, t) => {
              if (!t) return;
              let n = e6(t).data[ek],
                { description: r } = t.name ? i3(t) : { description: void 0 };
              if (('url' !== n && r && (e.transaction = r), tw())) {
                let n = i2(t.spanContext());
                e.sampled = void 0 == n ? void 0 : String(n);
              }
            }),
            o.on('preprocessEvent', (e) => {
              let t = i8();
              if (t && 'transaction' !== e.type)
                return (
                  (e.contexts = { trace: eQ(t), ...e.contexts }),
                  (e.sdkProcessingMetadata = {
                    dynamicSamplingContext: tN(e7(t)),
                    ...e.sdkProcessingMetadata,
                  }),
                  e
                );
            }),
            o
          );
        })(n);
        (r?.on('spanStart', (e) => {
          let t = e6(e).data;
          (t?.['next.span_type'] !== void 0 && e.setAttribute(eO, 'auto'),
            t?.['next.span_type'] === 'Middleware.execute' &&
              (e.setAttribute(eE, 'http.server.middleware'), e.setAttribute(ek, 'url')));
        }),
          r?.on('preprocessEvent', (e) => {
            'transaction' === e.type &&
              e.contexts?.trace?.data?.['next.span_type'] === 'Middleware.execute' &&
              e.contexts?.trace?.data?.['next.span_name'] &&
              e.transaction &&
              (e.transaction = tu(e.contexts.trace.data['next.span_name']));
          }),
          r?.on('spanEnd', (e) => {
            e === e7(e) &&
              (function (e) {
                let t = s[Symbol.for('@vercel/request-context')],
                  n = t?.get?.();
                n?.waitUntil && n.waitUntil(e);
              })(aM());
          }));
        try {
          e$().setTag('turbopack', !0);
        } catch {}
      })({
        dsn: hM.SENTRY_DSN || hM.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 'production' === hM.NODE_ENV ? 0.1 : 1,
      });
  },
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__de4486e0._.js.map
