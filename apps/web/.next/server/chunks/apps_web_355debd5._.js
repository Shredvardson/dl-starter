module.exports = [
  39444,
  (s) => {
    'use strict';
    async function e() {
      process.env.SENTRY_DSN && (await s.A(92282));
    }
    (s.s(['register', () => e]), (globalThis._sentryNextJsVersion = '15.5.2'));
  },
  92282,
  (s) => {
    s.v((e) =>
      Promise.all(
        ['server/chunks/[root-of-the-server]__b5cd4015._.js', 'server/chunks/_d7d34528._.js'].map(
          (e) => s.l(e)
        )
      ).then(() => e(3872))
    );
  },
];

//# sourceMappingURL=apps_web_355debd5._.js.map
