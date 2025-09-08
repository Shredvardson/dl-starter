(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'chunks/apps_web_285b313e._.js',
  47842,
  (e) => {
    'use strict';
    async function s() {
      process.env.SENTRY_DSN && (await Promise.resolve().then(() => e.i(93228)));
    }
    (e.s(['register', () => s]), (globalThis._sentryNextJsVersion = '15.5.2'));
  },
  27828,
  (e, s, t) => {
    self._ENTRIES ||= {};
    let n = Promise.resolve().then(() => e.i(47842));
    (n.catch(() => {}),
      (self._ENTRIES.middleware_instrumentation = new Proxy(n, {
        get(e, s) {
          if ('then' === s) return (s, t) => e.then(s, t);
          let t = (...t) => e.then((e) => (0, e[s])(...t));
          return ((t.then = (t, n) => e.then((e) => e[s]).then(t, n)), t);
        },
      })));
  },
]);

//# sourceMappingURL=apps_web_285b313e._.js.map
