(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  71653,
  (e) => {
    'use strict';
    e.s(['default', () => s]);
    var t = e.i(36109);
    function s(e) {
      let { error: s } = e;
      return (0, t.jsx)('html', {
        children: (0, t.jsx)('body', {
          children: (0, t.jsx)('main', {
            className: 'min-h-dvh grid place-items-center p-8 bg-[hsl(var(--bg))]',
            children: (0, t.jsxs)('div', {
              className: 'max-w-xl',
              children: [
                (0, t.jsx)('h1', {
                  className: 'text-2xl font-semibold text-[hsl(var(--text))] mb-3',
                  children: 'Something went wrong',
                }),
                (0, t.jsx)('pre', {
                  className: 'text-sm text-[hsl(var(--text-muted))] whitespace-pre-wrap',
                  children: s.message,
                }),
              ],
            }),
          }),
        }),
      });
    }
  },
]);

//# sourceMappingURL=780b6e482daa1b91.js.map
