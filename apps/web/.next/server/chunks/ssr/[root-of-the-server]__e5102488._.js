module.exports = [
  18622,
  (a, b, c) => {
    b.exports = a.x('next/dist/compiled/next-server/app-page-turbo.runtime.prod.js', () =>
      require('next/dist/compiled/next-server/app-page-turbo.runtime.prod.js')
    );
  },
  93442,
  (a, b, c) => {
    'use strict';
    b.exports = a.r(18622);
  },
  27473,
  (a, b, c) => {
    'use strict';
    b.exports = a.r(93442).vendored['react-ssr'].ReactJsxRuntime;
  },
  95591,
  (a) => {
    'use strict';
    a.s(['default', () => c]);
    var b = a.i(27473);
    function c({ error: a }) {
      return (0, b.jsx)('html', {
        children: (0, b.jsx)('body', {
          children: (0, b.jsx)('main', {
            className: 'min-h-dvh grid place-items-center p-8 bg-[hsl(var(--bg))]',
            children: (0, b.jsxs)('div', {
              className: 'max-w-xl',
              children: [
                (0, b.jsx)('h1', {
                  className: 'text-2xl font-semibold text-[hsl(var(--text))] mb-3',
                  children: 'Something went wrong',
                }),
                (0, b.jsx)('pre', {
                  className: 'text-sm text-[hsl(var(--text-muted))] whitespace-pre-wrap',
                  children: a.message,
                }),
              ],
            }),
          }),
        }),
      });
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e5102488._.js.map
