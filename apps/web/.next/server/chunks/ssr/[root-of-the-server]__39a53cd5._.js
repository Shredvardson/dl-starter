module.exports = [
  89578,
  (a) => {
    a.v({
      className: 'geist_a71539c9-module__T19VSG__className',
      variable: 'geist_a71539c9-module__T19VSG__variable',
    });
  },
  35214,
  (a) => {
    a.v({
      className: 'geist_mono_8d43a2aa-module__8Li5zG__className',
      variable: 'geist_mono_8d43a2aa-module__8Li5zG__variable',
    });
  },
  77930,
  (a) => {
    'use strict';
    a.s(['default', () => jq, 'metadata', () => jp], 77930);
    var b,
      c = a.i(88859),
      d = a.i(89578);
    let e = {
      className: d.default.className,
      style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
    };
    null != d.default.variable && (e.variable = d.default.variable);
    var f = a.i(35214);
    let g = {
      className: f.default.className,
      style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
    };
    function h(a, b) {
      if (a instanceof Promise) throw Error(b);
    }
    (null != f.default.variable && (g.variable = f.default.variable),
      a.s(
        [
          '$brand',
          () => k,
          '$input',
          () => ey,
          '$output',
          () => ex,
          'NEVER',
          () => i,
          'TimePrecision',
          () => e$,
          'ZodAny',
          () => hW,
          'ZodArray',
          () => h4,
          'ZodBase64',
          () => ho,
          'ZodBase64URL',
          () => hq,
          'ZodBigInt',
          () => hL,
          'ZodBigIntFormat',
          () => hN,
          'ZodBoolean',
          () => hJ,
          'ZodCIDRv4',
          () => hk,
          'ZodCIDRv6',
          () => hm,
          'ZodCUID',
          () => g6,
          'ZodCUID2',
          () => g8,
          'ZodCatch',
          () => iO,
          'ZodCodec',
          () => iU,
          'ZodCustom',
          () => i4,
          'ZodCustomStringFormat',
          () => hw,
          'ZodDate',
          () => h2,
          'ZodDefault',
          () => iG,
          'ZodDiscriminatedUnion',
          () => id,
          'ZodE164',
          () => hs,
          'ZodEmail',
          () => gS,
          'ZodEmoji',
          () => g2,
          'ZodEnum',
          () => is,
          'ZodError',
          () => gz,
          'ZodFile',
          () => ix,
          'ZodFirstPartyTypeKind',
          () => b,
          'ZodFunction',
          () => i2,
          'ZodGUID',
          () => gU,
          'ZodIPv4',
          () => hg,
          'ZodIPv6',
          () => hi,
          'ZodISODate',
          () => gs,
          'ZodISODateTime',
          () => gq,
          'ZodISODuration',
          () => gw,
          'ZodISOTime',
          () => gu,
          'ZodIntersection',
          () => ig,
          'ZodIssueCode',
          () => jd,
          'ZodJWT',
          () => hu,
          'ZodKSUID',
          () => he,
          'ZodLazy',
          () => i$,
          'ZodLiteral',
          () => iv,
          'ZodMap',
          () => io,
          'ZodNaN',
          () => iQ,
          'ZodNanoID',
          () => g4,
          'ZodNever',
          () => h$,
          'ZodNonOptional',
          () => iK,
          'ZodNull',
          () => hU,
          'ZodNullable',
          () => iD,
          'ZodNumber',
          () => hB,
          'ZodNumberFormat',
          () => hD,
          'ZodObject',
          () => h7,
          'ZodOptional',
          () => iB,
          'ZodPipe',
          () => iS,
          'ZodPrefault',
          () => iI,
          'ZodPromise',
          () => i0,
          'ZodReadonly',
          () => iW,
          'ZodRealError',
          () => gA,
          'ZodRecord',
          () => ik,
          'ZodSet',
          () => iq,
          'ZodString',
          () => gP,
          'ZodStringFormat',
          () => gR,
          'ZodSuccess',
          () => iM,
          'ZodSymbol',
          () => hQ,
          'ZodTemplateLiteral',
          () => iY,
          'ZodTransform',
          () => iz,
          'ZodTuple',
          () => ii,
          'ZodType',
          () => gN,
          'ZodULID',
          () => ha,
          'ZodURL',
          () => g_,
          'ZodUUID',
          () => gW,
          'ZodUndefined',
          () => hS,
          'ZodUnion',
          () => ib,
          'ZodUnknown',
          () => hY,
          'ZodVoid',
          () => h0,
          'ZodXID',
          () => hc,
          '_ZodString',
          () => gO,
          '_default',
          () => iH,
          '_function',
          () => i3,
          'any',
          () => hX,
          'array',
          () => h5,
          'base64',
          () => hp,
          'base64url',
          () => hr,
          'bigint',
          () => hM,
          'boolean',
          () => hK,
          'catch',
          () => iP,
          'check',
          () => i5,
          'cidrv4',
          () => hl,
          'cidrv6',
          () => hn,
          'clone',
          () => V,
          'codec',
          () => iV,
          'coerce',
          () => jn,
          'config',
          () => o,
          'core',
          () => gn,
          'cuid',
          () => g7,
          'cuid2',
          () => g9,
          'custom',
          () => i6,
          'date',
          () => h3,
          'decode',
          () => gG,
          'decodeAsync',
          () => gI,
          'discriminatedUnion',
          () => ie,
          'e164',
          () => ht,
          'email',
          () => gT,
          'emoji',
          () => g3,
          'encode',
          () => gF,
          'encodeAsync',
          () => gH,
          'endsWith',
          () => fK,
          'enum',
          () => it,
          'file',
          () => iy,
          'flattenError',
          () => aA,
          'float32',
          () => hF,
          'float64',
          () => hG,
          'formatError',
          () => aB,
          'function',
          () => i3,
          'getErrorMap',
          () => jf,
          'globalRegistry',
          () => eB,
          'gt',
          () => fs,
          'gte',
          () => ft,
          'guid',
          () => gV,
          'hash',
          () => hA,
          'hex',
          () => hz,
          'hostname',
          () => hy,
          'httpUrl',
          () => g1,
          'includes',
          () => fI,
          'instanceof',
          () => i9,
          'int',
          () => hE,
          'int32',
          () => hH,
          'int64',
          () => hO,
          'intersection',
          () => ih,
          'ipv4',
          () => hh,
          'ipv6',
          () => hj,
          'iso',
          () => jh,
          'json',
          () => jb,
          'jwt',
          () => hv,
          'keyof',
          () => h6,
          'ksuid',
          () => hf,
          'lazy',
          () => i_,
          'length',
          () => fE,
          'literal',
          () => iw,
          'locales',
          () => jg,
          'looseObject',
          () => ia,
          'lowercase',
          () => fG,
          'lt',
          () => fq,
          'lte',
          () => fr,
          'map',
          () => ip,
          'maxLength',
          () => fC,
          'maxSize',
          () => fz,
          'mime',
          () => fM,
          'minLength',
          () => fD,
          'minSize',
          () => fA,
          'multipleOf',
          () => fy,
          'nan',
          () => iR,
          'nanoid',
          () => g5,
          'nativeEnum',
          () => iu,
          'negative',
          () => fv,
          'never',
          () => h_,
          'nonnegative',
          () => fx,
          'nonoptional',
          () => iL,
          'nonpositive',
          () => fw,
          'normalize',
          () => fO,
          'null',
          () => hV,
          'nullable',
          () => iE,
          'nullish',
          () => iF,
          'number',
          () => hC,
          'object',
          () => h8,
          'optional',
          () => iC,
          'overwrite',
          () => fN,
          'parse',
          () => gB,
          'parseAsync',
          () => gC,
          'partialRecord',
          () => im,
          'pipe',
          () => iT,
          'positive',
          () => fu,
          'prefault',
          () => iJ,
          'preprocess',
          () => jc,
          'prettifyError',
          () => aE,
          'promise',
          () => i1,
          'property',
          () => fL,
          'readonly',
          () => iX,
          'record',
          () => il,
          'refine',
          () => i7,
          'regex',
          () => fF,
          'regexes',
          () => go,
          'registry',
          () => eA,
          'safeDecode',
          () => gK,
          'safeDecodeAsync',
          () => gM,
          'safeEncode',
          () => gJ,
          'safeEncodeAsync',
          () => gL,
          'safeParse',
          () => gD,
          'safeParseAsync',
          () => gE,
          'set',
          () => ir,
          'setErrorMap',
          () => je,
          'size',
          () => fB,
          'startsWith',
          () => fJ,
          'strictObject',
          () => h9,
          'string',
          () => gQ,
          'stringFormat',
          () => hx,
          'stringbool',
          () => ja,
          'success',
          () => iN,
          'superRefine',
          () => i8,
          'symbol',
          () => hR,
          'templateLiteral',
          () => iZ,
          'toJSONSchema',
          () => gl,
          'toLowerCase',
          () => fQ,
          'toUpperCase',
          () => fR,
          'transform',
          () => iA,
          'treeifyError',
          () => aC,
          'trim',
          () => fP,
          'tuple',
          () => ij,
          'uint32',
          () => hI,
          'uint64',
          () => hP,
          'ulid',
          () => hb,
          'undefined',
          () => hT,
          'union',
          () => ic,
          'unknown',
          () => hZ,
          'uppercase',
          () => fH,
          'url',
          () => g0,
          'util',
          () => gp,
          'uuid',
          () => gX,
          'uuidv4',
          () => gY,
          'uuidv6',
          () => gZ,
          'uuidv7',
          () => g$,
          'void',
          () => h1,
          'xid',
          () => hd,
        ],
        13887
      ),
      a.s([], 82292),
      a.s(
        [
          '$ZodAsyncError',
          () => l,
          '$ZodEncodeError',
          () => m,
          '$brand',
          () => k,
          '$constructor',
          () => j,
          'NEVER',
          () => i,
          'config',
          () => o,
          'globalConfig',
          () => n,
        ],
        40604
      ));
    let i = Object.freeze({ status: 'aborted' });
    function j(a, b, c) {
      function d(c, d) {
        var e;
        for (let f in (Object.defineProperty(c, '_zod', { value: c._zod ?? {}, enumerable: !1 }),
        (e = c._zod).traits ?? (e.traits = new Set()),
        c._zod.traits.add(a),
        b(c, d),
        g.prototype))
          f in c || Object.defineProperty(c, f, { value: g.prototype[f].bind(c) });
        ((c._zod.constr = g), (c._zod.def = d));
      }
      let e = c?.Parent ?? Object;
      class f extends e {}
      function g(a) {
        var b;
        let e = c?.Parent ? new f() : this;
        for (let c of (d(e, a), (b = e._zod).deferred ?? (b.deferred = []), e._zod.deferred)) c();
        return e;
      }
      return (
        Object.defineProperty(f, 'name', { value: a }),
        Object.defineProperty(g, 'init', { value: d }),
        Object.defineProperty(g, Symbol.hasInstance, {
          value: (b) => (!!c?.Parent && b instanceof c.Parent) || b?._zod?.traits?.has(a),
        }),
        Object.defineProperty(g, 'name', { value: a }),
        g
      );
    }
    let k = Symbol('zod_brand');
    class l extends Error {
      constructor() {
        super('Encountered Promise during synchronous parse. Use .parseAsync() instead.');
      }
    }
    class m extends Error {
      constructor(a) {
        (super(`Encountered unidirectional transform during encode: ${a}`),
          (this.name = 'ZodEncodeError'));
      }
    }
    let n = {};
    function o(a) {
      return (a && Object.assign(n, a), n);
    }
    function p(a) {
      return a;
    }
    function q(a) {
      return a;
    }
    function r(a) {}
    function s(a) {
      throw Error();
    }
    function t(a) {}
    function u(a) {
      let b = Object.values(a).filter((a) => 'number' == typeof a);
      return Object.entries(a)
        .filter(([a, c]) => -1 === b.indexOf(+a))
        .map(([a, b]) => b);
    }
    function v(a, b = '|') {
      return a.map((a) => Y(a)).join(b);
    }
    function w(a, b) {
      return 'bigint' == typeof b ? b.toString() : b;
    }
    function x(a) {
      return {
        get value() {
          {
            let b = a();
            return (Object.defineProperty(this, 'value', { value: b }), b);
          }
        },
      };
    }
    function y(a) {
      return null == a;
    }
    function z(a) {
      let b = +!!a.startsWith('^'),
        c = a.endsWith('$') ? a.length - 1 : a.length;
      return a.slice(b, c);
    }
    function A(a, b) {
      let c = (a.toString().split('.')[1] || '').length,
        d = b.toString(),
        e = (d.split('.')[1] || '').length;
      if (0 === e && /\d?e-\d?/.test(d)) {
        let a = d.match(/\d?e-(\d?)/);
        a?.[1] && (e = Number.parseInt(a[1]));
      }
      let f = c > e ? c : e;
      return (
        (Number.parseInt(a.toFixed(f).replace('.', '')) %
          Number.parseInt(b.toFixed(f).replace('.', ''))) /
        10 ** f
      );
    }
    a.s(
      [
        'BIGINT_FORMAT_RANGES',
        () => _,
        'Class',
        () => av,
        'NUMBER_FORMAT_RANGES',
        () => $,
        'aborted',
        () => ah,
        'allowsEval',
        () => N,
        'assert',
        () => t,
        'assertEqual',
        () => p,
        'assertIs',
        () => r,
        'assertNever',
        () => s,
        'assertNotEqual',
        () => q,
        'assignProp',
        () => E,
        'base64ToUint8Array',
        () => ap,
        'base64urlToUint8Array',
        () => ar,
        'cached',
        () => x,
        'captureStackTrace',
        () => L,
        'cleanEnum',
        () => ao,
        'cleanRegex',
        () => z,
        'clone',
        () => V,
        'cloneDef',
        () => G,
        'createTransparentProxy',
        () => X,
        'defineLazy',
        () => C,
        'esc',
        () => K,
        'escapeRegex',
        () => U,
        'extend',
        () => ac,
        'finalizeIssue',
        () => ak,
        'floatSafeRemainder',
        () => A,
        'getElementAtPath',
        () => H,
        'getEnumValues',
        () => u,
        'getLengthableOrigin',
        () => am,
        'getParsedType',
        () => R,
        'getSizableOrigin',
        () => al,
        'hexToUint8Array',
        () => at,
        'isObject',
        () => M,
        'isPlainObject',
        () => O,
        'issue',
        () => an,
        'joinValues',
        () => v,
        'jsonStringifyReplacer',
        () => w,
        'merge',
        () => ae,
        'mergeDefs',
        () => F,
        'normalizeParams',
        () => W,
        'nullish',
        () => y,
        'numKeys',
        () => Q,
        'objectClone',
        () => D,
        'omit',
        () => ab,
        'optionalKeys',
        () => Z,
        'partial',
        () => af,
        'pick',
        () => aa,
        'prefixIssues',
        () => ai,
        'primitiveTypes',
        () => T,
        'promiseAllObject',
        () => I,
        'propertyKeyTypes',
        () => S,
        'randomString',
        () => J,
        'required',
        () => ag,
        'safeExtend',
        () => ad,
        'shallowClone',
        () => P,
        'stringifyPrimitive',
        () => Y,
        'uint8ArrayToBase64',
        () => aq,
        'uint8ArrayToBase64url',
        () => as,
        'uint8ArrayToHex',
        () => au,
        'unwrapMessage',
        () => aj,
      ],
      10527
    );
    let B = Symbol('evaluating');
    function C(a, b, c) {
      let d;
      Object.defineProperty(a, b, {
        get() {
          if (d !== B) return (void 0 === d && ((d = B), (d = c())), d);
        },
        set(c) {
          Object.defineProperty(a, b, { value: c });
        },
        configurable: !0,
      });
    }
    function D(a) {
      return Object.create(Object.getPrototypeOf(a), Object.getOwnPropertyDescriptors(a));
    }
    function E(a, b, c) {
      Object.defineProperty(a, b, { value: c, writable: !0, enumerable: !0, configurable: !0 });
    }
    function F(...a) {
      let b = {};
      for (let c of a) Object.assign(b, Object.getOwnPropertyDescriptors(c));
      return Object.defineProperties({}, b);
    }
    function G(a) {
      return F(a._zod.def);
    }
    function H(a, b) {
      return b ? b.reduce((a, b) => a?.[b], a) : a;
    }
    function I(a) {
      let b = Object.keys(a);
      return Promise.all(b.map((b) => a[b])).then((a) => {
        let c = {};
        for (let d = 0; d < b.length; d++) c[b[d]] = a[d];
        return c;
      });
    }
    function J(a = 10) {
      let b = 'abcdefghijklmnopqrstuvwxyz',
        c = '';
      for (let d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)];
      return c;
    }
    function K(a) {
      return JSON.stringify(a);
    }
    let L = 'captureStackTrace' in Error ? Error.captureStackTrace : (...a) => {};
    function M(a) {
      return 'object' == typeof a && null !== a && !Array.isArray(a);
    }
    let N = x(() => {
      if ('undefined' != typeof navigator && navigator?.userAgent?.includes('Cloudflare'))
        return !1;
      try {
        return (Function(''), !0);
      } catch (a) {
        return !1;
      }
    });
    function O(a) {
      if (!1 === M(a)) return !1;
      let b = a.constructor;
      if (void 0 === b) return !0;
      let c = b.prototype;
      return !1 !== M(c) && !1 !== Object.prototype.hasOwnProperty.call(c, 'isPrototypeOf');
    }
    function P(a) {
      return O(a) ? { ...a } : a;
    }
    function Q(a) {
      let b = 0;
      for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b++;
      return b;
    }
    let R = (a) => {
        let b = typeof a;
        switch (b) {
          case 'undefined':
            return 'undefined';
          case 'string':
            return 'string';
          case 'number':
            return Number.isNaN(a) ? 'nan' : 'number';
          case 'boolean':
            return 'boolean';
          case 'function':
            return 'function';
          case 'bigint':
            return 'bigint';
          case 'symbol':
            return 'symbol';
          case 'object':
            if (Array.isArray(a)) return 'array';
            if (null === a) return 'null';
            if (a.then && 'function' == typeof a.then && a.catch && 'function' == typeof a.catch)
              return 'promise';
            if ('undefined' != typeof Map && a instanceof Map) return 'map';
            if ('undefined' != typeof Set && a instanceof Set) return 'set';
            if ('undefined' != typeof Date && a instanceof Date) return 'date';
            if ('undefined' != typeof File && a instanceof File) return 'file';
            return 'object';
          default:
            throw Error(`Unknown data type: ${b}`);
        }
      },
      S = new Set(['string', 'number', 'symbol']),
      T = new Set(['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined']);
    function U(a) {
      return a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function V(a, b, c) {
      let d = new a._zod.constr(b ?? a._zod.def);
      return ((!b || c?.parent) && (d._zod.parent = a), d);
    }
    function W(a) {
      if (!a) return {};
      if ('string' == typeof a) return { error: () => a };
      if (a?.message !== void 0) {
        if (a?.error !== void 0) throw Error('Cannot specify both `message` and `error` params');
        a.error = a.message;
      }
      return (delete a.message, 'string' == typeof a.error) ? { ...a, error: () => a.error } : a;
    }
    function X(a) {
      let b;
      return new Proxy(
        {},
        {
          get: (c, d, e) => (b ?? (b = a()), Reflect.get(b, d, e)),
          set: (c, d, e, f) => (b ?? (b = a()), Reflect.set(b, d, e, f)),
          has: (c, d) => (b ?? (b = a()), Reflect.has(b, d)),
          deleteProperty: (c, d) => (b ?? (b = a()), Reflect.deleteProperty(b, d)),
          ownKeys: (c) => (b ?? (b = a()), Reflect.ownKeys(b)),
          getOwnPropertyDescriptor: (c, d) => (
            b ?? (b = a()),
            Reflect.getOwnPropertyDescriptor(b, d)
          ),
          defineProperty: (c, d, e) => (b ?? (b = a()), Reflect.defineProperty(b, d, e)),
        }
      );
    }
    function Y(a) {
      return 'bigint' == typeof a ? a.toString() + 'n' : 'string' == typeof a ? `"${a}"` : `${a}`;
    }
    function Z(a) {
      return Object.keys(a).filter(
        (b) => 'optional' === a[b]._zod.optin && 'optional' === a[b]._zod.optout
      );
    }
    let $ = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      _ = {
        int64: [BigInt('-9223372036854775808'), BigInt('9223372036854775807')],
        uint64: [BigInt(0), BigInt('18446744073709551615')],
      };
    function aa(a, b) {
      let c = a._zod.def,
        d = F(a._zod.def, {
          get shape() {
            let a = {};
            for (let d in b) {
              if (!(d in c.shape)) throw Error(`Unrecognized key: "${d}"`);
              b[d] && (a[d] = c.shape[d]);
            }
            return (E(this, 'shape', a), a);
          },
          checks: [],
        });
      return V(a, d);
    }
    function ab(a, b) {
      let c = a._zod.def,
        d = F(a._zod.def, {
          get shape() {
            let d = { ...a._zod.def.shape };
            for (let a in b) {
              if (!(a in c.shape)) throw Error(`Unrecognized key: "${a}"`);
              b[a] && delete d[a];
            }
            return (E(this, 'shape', d), d);
          },
          checks: [],
        });
      return V(a, d);
    }
    function ac(a, b) {
      if (!O(b)) throw Error('Invalid input to extend: expected a plain object');
      let c = a._zod.def.checks;
      if (c && c.length > 0)
        throw Error(
          'Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.'
        );
      let d = F(a._zod.def, {
        get shape() {
          let c = { ...a._zod.def.shape, ...b };
          return (E(this, 'shape', c), c);
        },
        checks: [],
      });
      return V(a, d);
    }
    function ad(a, b) {
      if (!O(b)) throw Error('Invalid input to safeExtend: expected a plain object');
      let c = {
        ...a._zod.def,
        get shape() {
          let c = { ...a._zod.def.shape, ...b };
          return (E(this, 'shape', c), c);
        },
        checks: a._zod.def.checks,
      };
      return V(a, c);
    }
    function ae(a, b) {
      let c = F(a._zod.def, {
        get shape() {
          let c = { ...a._zod.def.shape, ...b._zod.def.shape };
          return (E(this, 'shape', c), c);
        },
        get catchall() {
          return b._zod.def.catchall;
        },
        checks: [],
      });
      return V(a, c);
    }
    function af(a, b, c) {
      let d = F(b._zod.def, {
        get shape() {
          let d = b._zod.def.shape,
            e = { ...d };
          if (c)
            for (let b in c) {
              if (!(b in d)) throw Error(`Unrecognized key: "${b}"`);
              c[b] && (e[b] = a ? new a({ type: 'optional', innerType: d[b] }) : d[b]);
            }
          else for (let b in d) e[b] = a ? new a({ type: 'optional', innerType: d[b] }) : d[b];
          return (E(this, 'shape', e), e);
        },
        checks: [],
      });
      return V(b, d);
    }
    function ag(a, b, c) {
      let d = F(b._zod.def, {
        get shape() {
          let d = b._zod.def.shape,
            e = { ...d };
          if (c)
            for (let b in c) {
              if (!(b in e)) throw Error(`Unrecognized key: "${b}"`);
              c[b] && (e[b] = new a({ type: 'nonoptional', innerType: d[b] }));
            }
          else for (let b in d) e[b] = new a({ type: 'nonoptional', innerType: d[b] });
          return (E(this, 'shape', e), e);
        },
        checks: [],
      });
      return V(b, d);
    }
    function ah(a, b = 0) {
      if (!0 === a.aborted) return !0;
      for (let c = b; c < a.issues.length; c++) if (a.issues[c]?.continue !== !0) return !0;
      return !1;
    }
    function ai(a, b) {
      return b.map((b) => (b.path ?? (b.path = []), b.path.unshift(a), b));
    }
    function aj(a) {
      return 'string' == typeof a ? a : a?.message;
    }
    function ak(a, b, c) {
      let d = { ...a, path: a.path ?? [] };
      return (
        a.message ||
          (d.message =
            aj(a.inst?._zod.def?.error?.(a)) ??
            aj(b?.error?.(a)) ??
            aj(c.customError?.(a)) ??
            aj(c.localeError?.(a)) ??
            'Invalid input'),
        delete d.inst,
        delete d.continue,
        b?.reportInput || delete d.input,
        d
      );
    }
    function al(a) {
      return a instanceof Set
        ? 'set'
        : a instanceof Map
          ? 'map'
          : a instanceof File
            ? 'file'
            : 'unknown';
    }
    function am(a) {
      return Array.isArray(a) ? 'array' : 'string' == typeof a ? 'string' : 'unknown';
    }
    function an(...a) {
      let [b, c, d] = a;
      return 'string' == typeof b ? { message: b, code: 'custom', input: c, inst: d } : { ...b };
    }
    function ao(a) {
      return Object.entries(a)
        .filter(([a, b]) => Number.isNaN(Number.parseInt(a, 10)))
        .map((a) => a[1]);
    }
    function ap(a) {
      let b = atob(a),
        c = new Uint8Array(b.length);
      for (let a = 0; a < b.length; a++) c[a] = b.charCodeAt(a);
      return c;
    }
    function aq(a) {
      let b = '';
      for (let c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
      return btoa(b);
    }
    function ar(a) {
      let b = a.replace(/-/g, '+').replace(/_/g, '/'),
        c = '='.repeat((4 - (b.length % 4)) % 4);
      return ap(b + c);
    }
    function as(a) {
      return aq(a).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    function at(a) {
      let b = a.replace(/^0x/, '');
      if (b.length % 2 != 0) throw Error('Invalid hex string length');
      let c = new Uint8Array(b.length / 2);
      for (let a = 0; a < b.length; a += 2) c[a / 2] = Number.parseInt(b.slice(a, a + 2), 16);
      return c;
    }
    function au(a) {
      return Array.from(a)
        .map((a) => a.toString(16).padStart(2, '0'))
        .join('');
    }
    class av {
      constructor(...a) {}
    }
    function aw() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'characters', verb: 'to have' },
              file: { unit: 'bytes', verb: 'to have' },
              array: { unit: 'items', verb: 'to have' },
              set: { unit: 'items', verb: 'to have' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Invalid input: expected ${c.expected}, received ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Invalid input: expected ${Y(c.values[0])}`;
                return `Invalid option: expected one of ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Too big: expected ${c.origin ?? 'value'} to have ${b}${c.maximum.toString()} ${d.unit ?? 'elements'}`;
                return `Too big: expected ${c.origin ?? 'value'} to be ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Too small: expected ${c.origin} to have ${b}${c.minimum.toString()} ${d.unit}`;
                return `Too small: expected ${c.origin} to be ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Invalid string: must start with "${c.prefix}"`;
                if ('ends_with' === c.format) return `Invalid string: must end with "${c.suffix}"`;
                if ('includes' === c.format) return `Invalid string: must include "${c.includes}"`;
                if ('regex' === c.format) return `Invalid string: must match pattern ${c.pattern}`;
                return `Invalid ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Invalid number: must be a multiple of ${c.divisor}`;
              case 'unrecognized_keys':
                return `Unrecognized key${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Invalid key in ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Invalid input';
              case 'invalid_element':
                return `Invalid value in ${c.origin}`;
            }
          };
        })(),
      };
    }
    (o(aw()),
      a.i(82292),
      a.s(
        [
          '$ZodAny',
          () => c$,
          '$ZodArray',
          () => c4,
          '$ZodAsyncError',
          () => l,
          '$ZodBase64',
          () => cL,
          '$ZodBase64URL',
          () => cN,
          '$ZodBigInt',
          () => cV,
          '$ZodBigIntFormat',
          () => cW,
          '$ZodBoolean',
          () => cU,
          '$ZodCIDRv4',
          () => cI,
          '$ZodCIDRv6',
          () => cJ,
          '$ZodCUID',
          () => cx,
          '$ZodCUID2',
          () => cy,
          '$ZodCatch',
          () => dA,
          '$ZodCheck',
          () => b$,
          '$ZodCheckBigIntFormat',
          () => b4,
          '$ZodCheckEndsWith',
          () => ch,
          '$ZodCheckGreaterThan',
          () => b1,
          '$ZodCheckIncludes',
          () => cf,
          '$ZodCheckLengthEquals',
          () => ca,
          '$ZodCheckLessThan',
          () => b0,
          '$ZodCheckLowerCase',
          () => cd,
          '$ZodCheckMaxLength',
          () => b8,
          '$ZodCheckMaxSize',
          () => b5,
          '$ZodCheckMimeType',
          () => ck,
          '$ZodCheckMinLength',
          () => b9,
          '$ZodCheckMinSize',
          () => b6,
          '$ZodCheckMultipleOf',
          () => b2,
          '$ZodCheckNumberFormat',
          () => b3,
          '$ZodCheckOverwrite',
          () => cl,
          '$ZodCheckProperty',
          () => cj,
          '$ZodCheckRegex',
          () => cc,
          '$ZodCheckSizeEquals',
          () => b7,
          '$ZodCheckStartsWith',
          () => cg,
          '$ZodCheckStringFormat',
          () => cb,
          '$ZodCheckUpperCase',
          () => ce,
          '$ZodCodec',
          () => dE,
          '$ZodCustom',
          () => dN,
          '$ZodCustomStringFormat',
          () => cR,
          '$ZodDate',
          () => c2,
          '$ZodDefault',
          () => du,
          '$ZodDiscriminatedUnion',
          () => dc,
          '$ZodE164',
          () => cO,
          '$ZodEmail',
          () => ct,
          '$ZodEmoji',
          () => cv,
          '$ZodEncodeError',
          () => m,
          '$ZodEnum',
          () => dm,
          '$ZodError',
          () => ay,
          '$ZodFile',
          () => dp,
          '$ZodFunction',
          () => dK,
          '$ZodGUID',
          () => cr,
          '$ZodIPv4',
          () => cG,
          '$ZodIPv6',
          () => cH,
          '$ZodISODate',
          () => cD,
          '$ZodISODateTime',
          () => cC,
          '$ZodISODuration',
          () => cF,
          '$ZodISOTime',
          () => cE,
          '$ZodIntersection',
          () => dd,
          '$ZodJWT',
          () => cQ,
          '$ZodKSUID',
          () => cB,
          '$ZodLazy',
          () => dM,
          '$ZodLiteral',
          () => dn,
          '$ZodMap',
          () => di,
          '$ZodNaN',
          () => dB,
          '$ZodNanoID',
          () => cw,
          '$ZodNever',
          () => c0,
          '$ZodNonOptional',
          () => dx,
          '$ZodNull',
          () => cZ,
          '$ZodNullable',
          () => dt,
          '$ZodNumber',
          () => cS,
          '$ZodNumberFormat',
          () => cT,
          '$ZodObject',
          () => c8,
          '$ZodObjectJIT',
          () => c9,
          '$ZodOptional',
          () => ds,
          '$ZodPipe',
          () => dC,
          '$ZodPrefault',
          () => dw,
          '$ZodPromise',
          () => dL,
          '$ZodReadonly',
          () => dH,
          '$ZodRealError',
          () => az,
          '$ZodRecord',
          () => dh,
          '$ZodRegistry',
          () => ez,
          '$ZodSet',
          () => dk,
          '$ZodString',
          () => cp,
          '$ZodStringFormat',
          () => cq,
          '$ZodSuccess',
          () => dz,
          '$ZodSymbol',
          () => cX,
          '$ZodTemplateLiteral',
          () => dJ,
          '$ZodTransform',
          () => dq,
          '$ZodTuple',
          () => df,
          '$ZodType',
          () => co,
          '$ZodULID',
          () => cz,
          '$ZodURL',
          () => cu,
          '$ZodUUID',
          () => cs,
          '$ZodUndefined',
          () => cY,
          '$ZodUnion',
          () => db,
          '$ZodUnknown',
          () => c_,
          '$ZodVoid',
          () => c1,
          '$ZodXID',
          () => cA,
          '$brand',
          () => k,
          '$constructor',
          () => j,
          '$input',
          () => ey,
          '$output',
          () => ex,
          'Doc',
          () => cm,
          'JSONSchema',
          () => gm,
          'JSONSchemaGenerator',
          () => gk,
          'NEVER',
          () => i,
          'TimePrecision',
          () => e$,
          '_any',
          () => fj,
          '_array',
          () => fS,
          '_base64',
          () => eW,
          '_base64url',
          () => eX,
          '_bigint',
          () => fc,
          '_boolean',
          () => fa,
          '_catch',
          () => f8,
          '_check',
          () => gh,
          '_cidrv4',
          () => eU,
          '_cidrv6',
          () => eV,
          '_coercedBigint',
          () => fd,
          '_coercedBoolean',
          () => fb,
          '_coercedDate',
          () => fo,
          '_coercedNumber',
          () => e4,
          '_coercedString',
          () => eD,
          '_cuid',
          () => eN,
          '_cuid2',
          () => eO,
          '_custom',
          () => ge,
          '_date',
          () => fn,
          '_decode',
          () => aP,
          '_decodeAsync',
          () => aT,
          '_default',
          () => f5,
          '_discriminatedUnion',
          () => fU,
          '_e164',
          () => eY,
          '_email',
          () => eE,
          '_emoji',
          () => eL,
          '_encode',
          () => aN,
          '_encodeAsync',
          () => aR,
          '_endsWith',
          () => fK,
          '_enum',
          () => f$,
          '_file',
          () => f1,
          '_float32',
          () => e6,
          '_float64',
          () => e7,
          '_gt',
          () => fs,
          '_gte',
          () => ft,
          '_guid',
          () => eF,
          '_includes',
          () => fI,
          '_int',
          () => e5,
          '_int32',
          () => e8,
          '_int64',
          () => fe,
          '_intersection',
          () => fV,
          '_ipv4',
          () => eS,
          '_ipv6',
          () => eT,
          '_isoDate',
          () => e0,
          '_isoDateTime',
          () => e_,
          '_isoDuration',
          () => e2,
          '_isoTime',
          () => e1,
          '_jwt',
          () => eZ,
          '_ksuid',
          () => eR,
          '_lazy',
          () => gc,
          '_length',
          () => fE,
          '_literal',
          () => f0,
          '_lowercase',
          () => fG,
          '_lt',
          () => fq,
          '_lte',
          () => fr,
          '_map',
          () => fY,
          '_max',
          () => fr,
          '_maxLength',
          () => fC,
          '_maxSize',
          () => fz,
          '_mime',
          () => fM,
          '_min',
          () => ft,
          '_minLength',
          () => fD,
          '_minSize',
          () => fA,
          '_multipleOf',
          () => fy,
          '_nan',
          () => fp,
          '_nanoid',
          () => eM,
          '_nativeEnum',
          () => f_,
          '_negative',
          () => fv,
          '_never',
          () => fl,
          '_nonnegative',
          () => fx,
          '_nonoptional',
          () => f6,
          '_nonpositive',
          () => fw,
          '_normalize',
          () => fO,
          '_null',
          () => fi,
          '_nullable',
          () => f4,
          '_number',
          () => e3,
          '_optional',
          () => f3,
          '_overwrite',
          () => fN,
          '_parse',
          () => aF,
          '_parseAsync',
          () => aH,
          '_pipe',
          () => f9,
          '_positive',
          () => fu,
          '_promise',
          () => gd,
          '_property',
          () => fL,
          '_readonly',
          () => ga,
          '_record',
          () => fX,
          '_refine',
          () => gf,
          '_regex',
          () => fF,
          '_safeDecode',
          () => aX,
          '_safeDecodeAsync',
          () => a_,
          '_safeEncode',
          () => aV,
          '_safeEncodeAsync',
          () => aZ,
          '_safeParse',
          () => aJ,
          '_safeParseAsync',
          () => aL,
          '_set',
          () => fZ,
          '_size',
          () => fB,
          '_startsWith',
          () => fJ,
          '_string',
          () => eC,
          '_stringFormat',
          () => gj,
          '_stringbool',
          () => gi,
          '_success',
          () => f7,
          '_superRefine',
          () => gg,
          '_symbol',
          () => fg,
          '_templateLiteral',
          () => gb,
          '_toLowerCase',
          () => fQ,
          '_toUpperCase',
          () => fR,
          '_transform',
          () => f2,
          '_trim',
          () => fP,
          '_tuple',
          () => fW,
          '_uint32',
          () => e9,
          '_uint64',
          () => ff,
          '_ulid',
          () => eP,
          '_undefined',
          () => fh,
          '_union',
          () => fT,
          '_unknown',
          () => fk,
          '_uppercase',
          () => fH,
          '_url',
          () => eK,
          '_uuid',
          () => eG,
          '_uuidv4',
          () => eH,
          '_uuidv6',
          () => eI,
          '_uuidv7',
          () => eJ,
          '_void',
          () => fm,
          '_xid',
          () => eQ,
          'clone',
          () => V,
          'config',
          () => o,
          'decode',
          () => aQ,
          'decodeAsync',
          () => aU,
          'encode',
          () => aO,
          'encodeAsync',
          () => aS,
          'flattenError',
          () => aA,
          'formatError',
          () => aB,
          'globalConfig',
          () => n,
          'globalRegistry',
          () => eB,
          'isValidBase64',
          () => cK,
          'isValidBase64URL',
          () => cM,
          'isValidJWT',
          () => cP,
          'locales',
          () => ew,
          'parse',
          () => aG,
          'parseAsync',
          () => aI,
          'prettifyError',
          () => aE,
          'regexes',
          () => dQ,
          'registry',
          () => eA,
          'safeDecode',
          () => aY,
          'safeDecodeAsync',
          () => a0,
          'safeEncode',
          () => aW,
          'safeEncodeAsync',
          () => a$,
          'safeParse',
          () => aK,
          'safeParseAsync',
          () => aM,
          'toDotPath',
          () => aD,
          'toJSONSchema',
          () => gl,
          'treeifyError',
          () => aC,
          'util',
          () => dP,
          'version',
          () => cn,
        ],
        52495
      ),
      a.s([], 64065),
      a.i(64065),
      a.i(40604),
      a.s(
        [
          '_decode',
          () => aP,
          '_decodeAsync',
          () => aT,
          '_encode',
          () => aN,
          '_encodeAsync',
          () => aR,
          '_parse',
          () => aF,
          '_parseAsync',
          () => aH,
          '_safeDecode',
          () => aX,
          '_safeDecodeAsync',
          () => a_,
          '_safeEncode',
          () => aV,
          '_safeEncodeAsync',
          () => aZ,
          '_safeParse',
          () => aJ,
          '_safeParseAsync',
          () => aL,
          'decode',
          () => aQ,
          'decodeAsync',
          () => aU,
          'encode',
          () => aO,
          'encodeAsync',
          () => aS,
          'parse',
          () => aG,
          'parseAsync',
          () => aI,
          'safeDecode',
          () => aY,
          'safeDecodeAsync',
          () => a0,
          'safeEncode',
          () => aW,
          'safeEncodeAsync',
          () => a$,
          'safeParse',
          () => aK,
          'safeParseAsync',
          () => aM,
        ],
        90222
      ),
      a.s(
        [
          '$ZodError',
          () => ay,
          '$ZodRealError',
          () => az,
          'flattenError',
          () => aA,
          'formatError',
          () => aB,
          'prettifyError',
          () => aE,
          'toDotPath',
          () => aD,
          'treeifyError',
          () => aC,
        ],
        30458
      ));
    let ax = (a, b) => {
        ((a.name = '$ZodError'),
          Object.defineProperty(a, '_zod', { value: a._zod, enumerable: !1 }),
          Object.defineProperty(a, 'issues', { value: b, enumerable: !1 }),
          (a.message = JSON.stringify(b, w, 2)),
          Object.defineProperty(a, 'toString', { value: () => a.message, enumerable: !1 }));
      },
      ay = j('$ZodError', ax),
      az = j('$ZodError', ax, { Parent: Error });
    function aA(a, b = (a) => a.message) {
      let c = {},
        d = [];
      for (let e of a.issues)
        e.path.length > 0
          ? ((c[e.path[0]] = c[e.path[0]] || []), c[e.path[0]].push(b(e)))
          : d.push(b(e));
      return { formErrors: d, fieldErrors: c };
    }
    function aB(a, b) {
      let c =
          b ||
          function (a) {
            return a.message;
          },
        d = { _errors: [] },
        e = (a) => {
          for (let b of a.issues)
            if ('invalid_union' === b.code && b.errors.length)
              b.errors.map((a) => e({ issues: a }));
            else if ('invalid_key' === b.code) e({ issues: b.issues });
            else if ('invalid_element' === b.code) e({ issues: b.issues });
            else if (0 === b.path.length) d._errors.push(c(b));
            else {
              let a = d,
                e = 0;
              for (; e < b.path.length; ) {
                let d = b.path[e];
                (e === b.path.length - 1
                  ? ((a[d] = a[d] || { _errors: [] }), a[d]._errors.push(c(b)))
                  : (a[d] = a[d] || { _errors: [] }),
                  (a = a[d]),
                  e++);
              }
            }
        };
      return (e(a), d);
    }
    function aC(a, b) {
      let c =
          b ||
          function (a) {
            return a.message;
          },
        d = { errors: [] },
        e = (a, b = []) => {
          var f, g;
          for (let h of a.issues)
            if ('invalid_union' === h.code && h.errors.length)
              h.errors.map((a) => e({ issues: a }, h.path));
            else if ('invalid_key' === h.code) e({ issues: h.issues }, h.path);
            else if ('invalid_element' === h.code) e({ issues: h.issues }, h.path);
            else {
              let a = [...b, ...h.path];
              if (0 === a.length) {
                d.errors.push(c(h));
                continue;
              }
              let e = d,
                i = 0;
              for (; i < a.length; ) {
                let b = a[i],
                  d = i === a.length - 1;
                ('string' == typeof b
                  ? (e.properties ?? (e.properties = {}),
                    (f = e.properties)[b] ?? (f[b] = { errors: [] }),
                    (e = e.properties[b]))
                  : (e.items ?? (e.items = []),
                    (g = e.items)[b] ?? (g[b] = { errors: [] }),
                    (e = e.items[b])),
                  d && e.errors.push(c(h)),
                  i++);
              }
            }
        };
      return (e(a), d);
    }
    function aD(a) {
      let b = [];
      for (let c of a.map((a) => ('object' == typeof a ? a.key : a)))
        'number' == typeof c
          ? b.push(`[${c}]`)
          : 'symbol' == typeof c
            ? b.push(`[${JSON.stringify(String(c))}]`)
            : /[^\w$]/.test(c)
              ? b.push(`[${JSON.stringify(c)}]`)
              : (b.length && b.push('.'), b.push(c));
      return b.join('');
    }
    function aE(a) {
      let b = [];
      for (let c of [...a.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length))
        (b.push(`✖ ${c.message}`), c.path?.length && b.push(`  → at ${aD(c.path)}`));
      return b.join('\n');
    }
    let aF = (a) => (b, c, d, e) => {
        let f = d ? Object.assign(d, { async: !1 }) : { async: !1 },
          g = b._zod.run({ value: c, issues: [] }, f);
        if (g instanceof Promise) throw new l();
        if (g.issues.length) {
          let b = new (e?.Err ?? a)(g.issues.map((a) => ak(a, f, o())));
          throw (L(b, e?.callee), b);
        }
        return g.value;
      },
      aG = aF(az),
      aH = (a) => async (b, c, d, e) => {
        let f = d ? Object.assign(d, { async: !0 }) : { async: !0 },
          g = b._zod.run({ value: c, issues: [] }, f);
        if ((g instanceof Promise && (g = await g), g.issues.length)) {
          let b = new (e?.Err ?? a)(g.issues.map((a) => ak(a, f, o())));
          throw (L(b, e?.callee), b);
        }
        return g.value;
      },
      aI = aH(az),
      aJ = (a) => (b, c, d) => {
        let e = d ? { ...d, async: !1 } : { async: !1 },
          f = b._zod.run({ value: c, issues: [] }, e);
        if (f instanceof Promise) throw new l();
        return f.issues.length
          ? { success: !1, error: new (a ?? ay)(f.issues.map((a) => ak(a, e, o()))) }
          : { success: !0, data: f.value };
      },
      aK = aJ(az),
      aL = (a) => async (b, c, d) => {
        let e = d ? Object.assign(d, { async: !0 }) : { async: !0 },
          f = b._zod.run({ value: c, issues: [] }, e);
        return (
          f instanceof Promise && (f = await f),
          f.issues.length
            ? { success: !1, error: new a(f.issues.map((a) => ak(a, e, o()))) }
            : { success: !0, data: f.value }
        );
      },
      aM = aL(az),
      aN = (a) => (b, c, d) => {
        let e = d ? Object.assign(d, { direction: 'backward' }) : { direction: 'backward' };
        return aF(a)(b, c, e);
      },
      aO = aN(az),
      aP = (a) => (b, c, d) => aF(a)(b, c, d),
      aQ = aP(az),
      aR = (a) => async (b, c, d) => {
        let e = d ? Object.assign(d, { direction: 'backward' }) : { direction: 'backward' };
        return aH(a)(b, c, e);
      },
      aS = aR(az),
      aT = (a) => async (b, c, d) => aH(a)(b, c, d),
      aU = aT(az),
      aV = (a) => (b, c, d) => {
        let e = d ? Object.assign(d, { direction: 'backward' }) : { direction: 'backward' };
        return aJ(a)(b, c, e);
      },
      aW = aV(az),
      aX = (a) => (b, c, d) => aJ(a)(b, c, d),
      aY = aX(az),
      aZ = (a) => async (b, c, d) => {
        let e = d ? Object.assign(d, { direction: 'backward' }) : { direction: 'backward' };
        return aL(a)(b, c, e);
      },
      a$ = aZ(az),
      a_ = (a) => async (b, c, d) => aL(a)(b, c, d),
      a0 = a_(az);
    (a.i(90222),
      a.i(30458),
      a.s(
        [
          '$ZodAny',
          () => c$,
          '$ZodArray',
          () => c4,
          '$ZodBase64',
          () => cL,
          '$ZodBase64URL',
          () => cN,
          '$ZodBigInt',
          () => cV,
          '$ZodBigIntFormat',
          () => cW,
          '$ZodBoolean',
          () => cU,
          '$ZodCIDRv4',
          () => cI,
          '$ZodCIDRv6',
          () => cJ,
          '$ZodCUID',
          () => cx,
          '$ZodCUID2',
          () => cy,
          '$ZodCatch',
          () => dA,
          '$ZodCodec',
          () => dE,
          '$ZodCustom',
          () => dN,
          '$ZodCustomStringFormat',
          () => cR,
          '$ZodDate',
          () => c2,
          '$ZodDefault',
          () => du,
          '$ZodDiscriminatedUnion',
          () => dc,
          '$ZodE164',
          () => cO,
          '$ZodEmail',
          () => ct,
          '$ZodEmoji',
          () => cv,
          '$ZodEnum',
          () => dm,
          '$ZodFile',
          () => dp,
          '$ZodFunction',
          () => dK,
          '$ZodGUID',
          () => cr,
          '$ZodIPv4',
          () => cG,
          '$ZodIPv6',
          () => cH,
          '$ZodISODate',
          () => cD,
          '$ZodISODateTime',
          () => cC,
          '$ZodISODuration',
          () => cF,
          '$ZodISOTime',
          () => cE,
          '$ZodIntersection',
          () => dd,
          '$ZodJWT',
          () => cQ,
          '$ZodKSUID',
          () => cB,
          '$ZodLazy',
          () => dM,
          '$ZodLiteral',
          () => dn,
          '$ZodMap',
          () => di,
          '$ZodNaN',
          () => dB,
          '$ZodNanoID',
          () => cw,
          '$ZodNever',
          () => c0,
          '$ZodNonOptional',
          () => dx,
          '$ZodNull',
          () => cZ,
          '$ZodNullable',
          () => dt,
          '$ZodNumber',
          () => cS,
          '$ZodNumberFormat',
          () => cT,
          '$ZodObject',
          () => c8,
          '$ZodObjectJIT',
          () => c9,
          '$ZodOptional',
          () => ds,
          '$ZodPipe',
          () => dC,
          '$ZodPrefault',
          () => dw,
          '$ZodPromise',
          () => dL,
          '$ZodReadonly',
          () => dH,
          '$ZodRecord',
          () => dh,
          '$ZodSet',
          () => dk,
          '$ZodString',
          () => cp,
          '$ZodStringFormat',
          () => cq,
          '$ZodSuccess',
          () => dz,
          '$ZodSymbol',
          () => cX,
          '$ZodTemplateLiteral',
          () => dJ,
          '$ZodTransform',
          () => dq,
          '$ZodTuple',
          () => df,
          '$ZodType',
          () => co,
          '$ZodULID',
          () => cz,
          '$ZodURL',
          () => cu,
          '$ZodUUID',
          () => cs,
          '$ZodUndefined',
          () => cY,
          '$ZodUnion',
          () => db,
          '$ZodUnknown',
          () => c_,
          '$ZodVoid',
          () => c1,
          '$ZodXID',
          () => cA,
          'clone',
          () => V,
          'isValidBase64',
          () => cK,
          'isValidBase64URL',
          () => cM,
          'isValidJWT',
          () => cP,
        ],
        58488
      ),
      a.s(
        [
          '$ZodAny',
          () => c$,
          '$ZodArray',
          () => c4,
          '$ZodBase64',
          () => cL,
          '$ZodBase64URL',
          () => cN,
          '$ZodBigInt',
          () => cV,
          '$ZodBigIntFormat',
          () => cW,
          '$ZodBoolean',
          () => cU,
          '$ZodCIDRv4',
          () => cI,
          '$ZodCIDRv6',
          () => cJ,
          '$ZodCUID',
          () => cx,
          '$ZodCUID2',
          () => cy,
          '$ZodCatch',
          () => dA,
          '$ZodCodec',
          () => dE,
          '$ZodCustom',
          () => dN,
          '$ZodCustomStringFormat',
          () => cR,
          '$ZodDate',
          () => c2,
          '$ZodDefault',
          () => du,
          '$ZodDiscriminatedUnion',
          () => dc,
          '$ZodE164',
          () => cO,
          '$ZodEmail',
          () => ct,
          '$ZodEmoji',
          () => cv,
          '$ZodEnum',
          () => dm,
          '$ZodFile',
          () => dp,
          '$ZodFunction',
          () => dK,
          '$ZodGUID',
          () => cr,
          '$ZodIPv4',
          () => cG,
          '$ZodIPv6',
          () => cH,
          '$ZodISODate',
          () => cD,
          '$ZodISODateTime',
          () => cC,
          '$ZodISODuration',
          () => cF,
          '$ZodISOTime',
          () => cE,
          '$ZodIntersection',
          () => dd,
          '$ZodJWT',
          () => cQ,
          '$ZodKSUID',
          () => cB,
          '$ZodLazy',
          () => dM,
          '$ZodLiteral',
          () => dn,
          '$ZodMap',
          () => di,
          '$ZodNaN',
          () => dB,
          '$ZodNanoID',
          () => cw,
          '$ZodNever',
          () => c0,
          '$ZodNonOptional',
          () => dx,
          '$ZodNull',
          () => cZ,
          '$ZodNullable',
          () => dt,
          '$ZodNumber',
          () => cS,
          '$ZodNumberFormat',
          () => cT,
          '$ZodObject',
          () => c8,
          '$ZodObjectJIT',
          () => c9,
          '$ZodOptional',
          () => ds,
          '$ZodPipe',
          () => dC,
          '$ZodPrefault',
          () => dw,
          '$ZodPromise',
          () => dL,
          '$ZodReadonly',
          () => dH,
          '$ZodRecord',
          () => dh,
          '$ZodSet',
          () => dk,
          '$ZodString',
          () => cp,
          '$ZodStringFormat',
          () => cq,
          '$ZodSuccess',
          () => dz,
          '$ZodSymbol',
          () => cX,
          '$ZodTemplateLiteral',
          () => dJ,
          '$ZodTransform',
          () => dq,
          '$ZodTuple',
          () => df,
          '$ZodType',
          () => co,
          '$ZodULID',
          () => cz,
          '$ZodURL',
          () => cu,
          '$ZodUUID',
          () => cs,
          '$ZodUndefined',
          () => cY,
          '$ZodUnion',
          () => db,
          '$ZodUnknown',
          () => c_,
          '$ZodVoid',
          () => c1,
          '$ZodXID',
          () => cA,
          'isValidBase64',
          () => cK,
          'isValidBase64URL',
          () => cM,
          'isValidJWT',
          () => cP,
        ],
        40851
      ),
      a.s(
        [
          '$ZodCheck',
          () => b$,
          '$ZodCheckBigIntFormat',
          () => b4,
          '$ZodCheckEndsWith',
          () => ch,
          '$ZodCheckGreaterThan',
          () => b1,
          '$ZodCheckIncludes',
          () => cf,
          '$ZodCheckLengthEquals',
          () => ca,
          '$ZodCheckLessThan',
          () => b0,
          '$ZodCheckLowerCase',
          () => cd,
          '$ZodCheckMaxLength',
          () => b8,
          '$ZodCheckMaxSize',
          () => b5,
          '$ZodCheckMimeType',
          () => ck,
          '$ZodCheckMinLength',
          () => b9,
          '$ZodCheckMinSize',
          () => b6,
          '$ZodCheckMultipleOf',
          () => b2,
          '$ZodCheckNumberFormat',
          () => b3,
          '$ZodCheckOverwrite',
          () => cl,
          '$ZodCheckProperty',
          () => cj,
          '$ZodCheckRegex',
          () => cc,
          '$ZodCheckSizeEquals',
          () => b7,
          '$ZodCheckStartsWith',
          () => cg,
          '$ZodCheckStringFormat',
          () => cb,
          '$ZodCheckUpperCase',
          () => ce,
        ],
        12956
      ),
      a.s(
        [
          'base64',
          () => bp,
          'base64url',
          () => bq,
          'bigint',
          () => bA,
          'boolean',
          () => bD,
          'browserEmail',
          () => bj,
          'cidrv4',
          () => bn,
          'cidrv6',
          () => bo,
          'cuid',
          () => a1,
          'cuid2',
          () => a2,
          'date',
          () => bv,
          'datetime',
          () => by,
          'domain',
          () => bs,
          'duration',
          () => a7,
          'e164',
          () => bt,
          'email',
          () => be,
          'emoji',
          () => bk,
          'extendedDuration',
          () => a8,
          'guid',
          () => a9,
          'hex',
          () => bI,
          'hostname',
          () => br,
          'html5Email',
          () => bf,
          'idnEmail',
          () => bi,
          'integer',
          () => bB,
          'ipv4',
          () => bl,
          'ipv6',
          () => bm,
          'ksuid',
          () => a5,
          'lowercase',
          () => bG,
          'md5_base64',
          () => bM,
          'md5_base64url',
          () => bN,
          'md5_hex',
          () => bL,
          'nanoid',
          () => a6,
          'null',
          () => bE,
          'number',
          () => bC,
          'rfc5322Email',
          () => bg,
          'sha1_base64',
          () => bP,
          'sha1_base64url',
          () => bQ,
          'sha1_hex',
          () => bO,
          'sha256_base64',
          () => bS,
          'sha256_base64url',
          () => bT,
          'sha256_hex',
          () => bR,
          'sha384_base64',
          () => bV,
          'sha384_base64url',
          () => bW,
          'sha384_hex',
          () => bU,
          'sha512_base64',
          () => bY,
          'sha512_base64url',
          () => bZ,
          'sha512_hex',
          () => bX,
          'string',
          () => bz,
          'time',
          () => bx,
          'ulid',
          () => a3,
          'undefined',
          () => bF,
          'unicodeEmail',
          () => bh,
          'uppercase',
          () => bH,
          'uuid',
          () => ba,
          'uuid4',
          () => bb,
          'uuid6',
          () => bc,
          'uuid7',
          () => bd,
          'xid',
          () => a4,
        ],
        77955
      ));
    let a1 = /^[cC][^\s-]{8,}$/,
      a2 = /^[0-9a-z]+$/,
      a3 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
      a4 = /^[0-9a-vA-V]{20}$/,
      a5 = /^[A-Za-z0-9]{27}$/,
      a6 = /^[a-zA-Z0-9_-]{21}$/,
      a7 =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      a8 =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
      a9 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      ba = (a) =>
        a
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      bb = ba(4),
      bc = ba(6),
      bd = ba(7),
      be =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      bf =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      bg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      bh = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      bi = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      bj =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    function bk() {
      return RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u');
    }
    let bl =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      bm =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
      bn =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      bo =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      bp = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      bq = /^[A-Za-z0-9_-]*$/,
      br =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
      bs = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      bt = /^\+(?:[0-9]){6,14}[0-9]$/,
      bu =
        '(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))',
      bv = RegExp(`^${bu}$`);
    function bw(a) {
      let b = '(?:[01]\\d|2[0-3]):[0-5]\\d';
      return 'number' == typeof a.precision
        ? -1 === a.precision
          ? `${b}`
          : 0 === a.precision
            ? `${b}:[0-5]\\d`
            : `${b}:[0-5]\\d\\.\\d{${a.precision}}`
        : `${b}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function bx(a) {
      return RegExp(`^${bw(a)}$`);
    }
    function by(a) {
      let b = bw({ precision: a.precision }),
        c = ['Z'];
      (a.local && c.push(''), a.offset && c.push('([+-](?:[01]\\d|2[0-3]):[0-5]\\d)'));
      let d = `${b}(?:${c.join('|')})`;
      return RegExp(`^${bu}T(?:${d})$`);
    }
    let bz = (a) => {
        let b = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ''}}` : '[\\s\\S]*';
        return RegExp(`^${b}$`);
      },
      bA = /^\d+n?$/,
      bB = /^\d+$/,
      bC = /^-?\d+(?:\.\d+)?/i,
      bD = /true|false/i,
      bE = /null/i,
      bF = /undefined/i,
      bG = /^[^A-Z]*$/,
      bH = /^[^a-z]*$/,
      bI = /^[0-9a-fA-F]*$/;
    function bJ(a, b) {
      return RegExp(`^[A-Za-z0-9+/]{${a}}${b}$`);
    }
    function bK(a) {
      return RegExp(`^[A-Za-z0-9-_]{${a}}$`);
    }
    let bL = /^[0-9a-fA-F]{32}$/,
      bM = bJ(22, '=='),
      bN = bK(22),
      bO = /^[0-9a-fA-F]{40}$/,
      bP = bJ(27, '='),
      bQ = bK(27),
      bR = /^[0-9a-fA-F]{64}$/,
      bS = bJ(43, '='),
      bT = bK(43),
      bU = /^[0-9a-fA-F]{96}$/,
      bV = bJ(64, ''),
      bW = bK(64),
      bX = /^[0-9a-fA-F]{128}$/,
      bY = bJ(86, '=='),
      bZ = bK(86),
      b$ = j('$ZodCheck', (a, b) => {
        var c;
        (a._zod ?? (a._zod = {}), (a._zod.def = b), (c = a._zod).onattach ?? (c.onattach = []));
      }),
      b_ = { number: 'number', bigint: 'bigint', object: 'date' },
      b0 = j('$ZodCheckLessThan', (a, b) => {
        b$.init(a, b);
        let c = b_[typeof b.value];
        (a._zod.onattach.push((a) => {
          let c = a._zod.bag,
            d = (b.inclusive ? c.maximum : c.exclusiveMaximum) ?? 1 / 0;
          b.value < d && (b.inclusive ? (c.maximum = b.value) : (c.exclusiveMaximum = b.value));
        }),
          (a._zod.check = (d) => {
            (b.inclusive ? d.value <= b.value : d.value < b.value) ||
              d.issues.push({
                origin: c,
                code: 'too_big',
                maximum: b.value,
                input: d.value,
                inclusive: b.inclusive,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      b1 = j('$ZodCheckGreaterThan', (a, b) => {
        b$.init(a, b);
        let c = b_[typeof b.value];
        (a._zod.onattach.push((a) => {
          let c = a._zod.bag,
            d = (b.inclusive ? c.minimum : c.exclusiveMinimum) ?? -1 / 0;
          b.value > d && (b.inclusive ? (c.minimum = b.value) : (c.exclusiveMinimum = b.value));
        }),
          (a._zod.check = (d) => {
            (b.inclusive ? d.value >= b.value : d.value > b.value) ||
              d.issues.push({
                origin: c,
                code: 'too_small',
                minimum: b.value,
                input: d.value,
                inclusive: b.inclusive,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      b2 = j('$ZodCheckMultipleOf', (a, b) => {
        (b$.init(a, b),
          a._zod.onattach.push((a) => {
            var c;
            (c = a._zod.bag).multipleOf ?? (c.multipleOf = b.value);
          }),
          (a._zod.check = (c) => {
            if (typeof c.value != typeof b.value)
              throw Error('Cannot mix number and bigint in multiple_of check.');
            ('bigint' == typeof c.value
              ? c.value % b.value === BigInt(0)
              : 0 === A(c.value, b.value)) ||
              c.issues.push({
                origin: typeof c.value,
                code: 'not_multiple_of',
                divisor: b.value,
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      b3 = j('$ZodCheckNumberFormat', (a, b) => {
        (b$.init(a, b), (b.format = b.format || 'float64'));
        let c = b.format?.includes('int'),
          d = c ? 'int' : 'number',
          [e, f] = $[b.format];
        (a._zod.onattach.push((a) => {
          let d = a._zod.bag;
          ((d.format = b.format), (d.minimum = e), (d.maximum = f), c && (d.pattern = bB));
        }),
          (a._zod.check = (g) => {
            let h = g.value;
            if (c) {
              if (!Number.isInteger(h))
                return void g.issues.push({
                  expected: d,
                  format: b.format,
                  code: 'invalid_type',
                  continue: !1,
                  input: h,
                  inst: a,
                });
              if (!Number.isSafeInteger(h))
                return void (h > 0
                  ? g.issues.push({
                      input: h,
                      code: 'too_big',
                      maximum: Number.MAX_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: a,
                      origin: d,
                      continue: !b.abort,
                    })
                  : g.issues.push({
                      input: h,
                      code: 'too_small',
                      minimum: Number.MIN_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: a,
                      origin: d,
                      continue: !b.abort,
                    }));
            }
            (h < e &&
              g.issues.push({
                origin: 'number',
                input: h,
                code: 'too_small',
                minimum: e,
                inclusive: !0,
                inst: a,
                continue: !b.abort,
              }),
              h > f &&
                g.issues.push({
                  origin: 'number',
                  input: h,
                  code: 'too_big',
                  maximum: f,
                  inst: a,
                }));
          }));
      }),
      b4 = j('$ZodCheckBigIntFormat', (a, b) => {
        b$.init(a, b);
        let [c, d] = _[b.format];
        (a._zod.onattach.push((a) => {
          let e = a._zod.bag;
          ((e.format = b.format), (e.minimum = c), (e.maximum = d));
        }),
          (a._zod.check = (e) => {
            let f = e.value;
            (f < c &&
              e.issues.push({
                origin: 'bigint',
                input: f,
                code: 'too_small',
                minimum: c,
                inclusive: !0,
                inst: a,
                continue: !b.abort,
              }),
              f > d &&
                e.issues.push({
                  origin: 'bigint',
                  input: f,
                  code: 'too_big',
                  maximum: d,
                  inst: a,
                }));
          }));
      }),
      b5 = j('$ZodCheckMaxSize', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.size;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag.maximum ?? 1 / 0;
            b.maximum < c && (a._zod.bag.maximum = b.maximum);
          }),
          (a._zod.check = (c) => {
            let d = c.value;
            d.size <= b.maximum ||
              c.issues.push({
                origin: al(d),
                code: 'too_big',
                maximum: b.maximum,
                inclusive: !0,
                input: d,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      b6 = j('$ZodCheckMinSize', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.size;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag.minimum ?? -1 / 0;
            b.minimum > c && (a._zod.bag.minimum = b.minimum);
          }),
          (a._zod.check = (c) => {
            let d = c.value;
            d.size >= b.minimum ||
              c.issues.push({
                origin: al(d),
                code: 'too_small',
                minimum: b.minimum,
                inclusive: !0,
                input: d,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      b7 = j('$ZodCheckSizeEquals', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.size;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag;
            ((c.minimum = b.size), (c.maximum = b.size), (c.size = b.size));
          }),
          (a._zod.check = (c) => {
            let d = c.value,
              e = d.size;
            if (e === b.size) return;
            let f = e > b.size;
            c.issues.push({
              origin: al(d),
              ...(f
                ? { code: 'too_big', maximum: b.size }
                : { code: 'too_small', minimum: b.size }),
              inclusive: !0,
              exact: !0,
              input: c.value,
              inst: a,
              continue: !b.abort,
            });
          }));
      }),
      b8 = j('$ZodCheckMaxLength', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.length;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag.maximum ?? 1 / 0;
            b.maximum < c && (a._zod.bag.maximum = b.maximum);
          }),
          (a._zod.check = (c) => {
            let d = c.value;
            if (d.length <= b.maximum) return;
            let e = am(d);
            c.issues.push({
              origin: e,
              code: 'too_big',
              maximum: b.maximum,
              inclusive: !0,
              input: d,
              inst: a,
              continue: !b.abort,
            });
          }));
      }),
      b9 = j('$ZodCheckMinLength', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.length;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag.minimum ?? -1 / 0;
            b.minimum > c && (a._zod.bag.minimum = b.minimum);
          }),
          (a._zod.check = (c) => {
            let d = c.value;
            if (d.length >= b.minimum) return;
            let e = am(d);
            c.issues.push({
              origin: e,
              code: 'too_small',
              minimum: b.minimum,
              inclusive: !0,
              input: d,
              inst: a,
              continue: !b.abort,
            });
          }));
      }),
      ca = j('$ZodCheckLengthEquals', (a, b) => {
        var c;
        (b$.init(a, b),
          (c = a._zod.def).when ??
            (c.when = (a) => {
              let b = a.value;
              return !y(b) && void 0 !== b.length;
            }),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag;
            ((c.minimum = b.length), (c.maximum = b.length), (c.length = b.length));
          }),
          (a._zod.check = (c) => {
            let d = c.value,
              e = d.length;
            if (e === b.length) return;
            let f = am(d),
              g = e > b.length;
            c.issues.push({
              origin: f,
              ...(g
                ? { code: 'too_big', maximum: b.length }
                : { code: 'too_small', minimum: b.length }),
              inclusive: !0,
              exact: !0,
              input: c.value,
              inst: a,
              continue: !b.abort,
            });
          }));
      }),
      cb = j('$ZodCheckStringFormat', (a, b) => {
        var c, d;
        (b$.init(a, b),
          a._zod.onattach.push((a) => {
            let c = a._zod.bag;
            ((c.format = b.format),
              b.pattern && (c.patterns ?? (c.patterns = new Set()), c.patterns.add(b.pattern)));
          }),
          b.pattern
            ? ((c = a._zod).check ??
              (c.check = (c) => {
                ((b.pattern.lastIndex = 0),
                  b.pattern.test(c.value) ||
                    c.issues.push({
                      origin: 'string',
                      code: 'invalid_format',
                      format: b.format,
                      input: c.value,
                      ...(b.pattern ? { pattern: b.pattern.toString() } : {}),
                      inst: a,
                      continue: !b.abort,
                    }));
              }))
            : ((d = a._zod).check ?? (d.check = () => {})));
      }),
      cc = j('$ZodCheckRegex', (a, b) => {
        (cb.init(a, b),
          (a._zod.check = (c) => {
            ((b.pattern.lastIndex = 0),
              b.pattern.test(c.value) ||
                c.issues.push({
                  origin: 'string',
                  code: 'invalid_format',
                  format: 'regex',
                  input: c.value,
                  pattern: b.pattern.toString(),
                  inst: a,
                  continue: !b.abort,
                }));
          }));
      }),
      cd = j('$ZodCheckLowerCase', (a, b) => {
        (b.pattern ?? (b.pattern = bG), cb.init(a, b));
      }),
      ce = j('$ZodCheckUpperCase', (a, b) => {
        (b.pattern ?? (b.pattern = bH), cb.init(a, b));
      }),
      cf = j('$ZodCheckIncludes', (a, b) => {
        b$.init(a, b);
        let c = U(b.includes),
          d = new RegExp('number' == typeof b.position ? `^.{${b.position}}${c}` : c);
        ((b.pattern = d),
          a._zod.onattach.push((a) => {
            let b = a._zod.bag;
            (b.patterns ?? (b.patterns = new Set()), b.patterns.add(d));
          }),
          (a._zod.check = (c) => {
            c.value.includes(b.includes, b.position) ||
              c.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'includes',
                includes: b.includes,
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      cg = j('$ZodCheckStartsWith', (a, b) => {
        b$.init(a, b);
        let c = RegExp(`^${U(b.prefix)}.*`);
        (b.pattern ?? (b.pattern = c),
          a._zod.onattach.push((a) => {
            let b = a._zod.bag;
            (b.patterns ?? (b.patterns = new Set()), b.patterns.add(c));
          }),
          (a._zod.check = (c) => {
            c.value.startsWith(b.prefix) ||
              c.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'starts_with',
                prefix: b.prefix,
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      ch = j('$ZodCheckEndsWith', (a, b) => {
        b$.init(a, b);
        let c = RegExp(`.*${U(b.suffix)}$`);
        (b.pattern ?? (b.pattern = c),
          a._zod.onattach.push((a) => {
            let b = a._zod.bag;
            (b.patterns ?? (b.patterns = new Set()), b.patterns.add(c));
          }),
          (a._zod.check = (c) => {
            c.value.endsWith(b.suffix) ||
              c.issues.push({
                origin: 'string',
                code: 'invalid_format',
                format: 'ends_with',
                suffix: b.suffix,
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      });
    function ci(a, b, c) {
      a.issues.length && b.issues.push(...ai(c, a.issues));
    }
    let cj = j('$ZodCheckProperty', (a, b) => {
        (b$.init(a, b),
          (a._zod.check = (a) => {
            let c = b.schema._zod.run({ value: a.value[b.property], issues: [] }, {});
            if (c instanceof Promise) return c.then((c) => ci(c, a, b.property));
            ci(c, a, b.property);
          }));
      }),
      ck = j('$ZodCheckMimeType', (a, b) => {
        b$.init(a, b);
        let c = new Set(b.mime);
        (a._zod.onattach.push((a) => {
          a._zod.bag.mime = b.mime;
        }),
          (a._zod.check = (d) => {
            c.has(d.value.type) ||
              d.issues.push({
                code: 'invalid_value',
                values: b.mime,
                input: d.value.type,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      cl = j('$ZodCheckOverwrite', (a, b) => {
        (b$.init(a, b),
          (a._zod.check = (a) => {
            a.value = b.tx(a.value);
          }));
      });
    a.s(['Doc', () => cm], 16243);
    class cm {
      constructor(a = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = a));
      }
      indented(a) {
        ((this.indent += 1), a(this), (this.indent -= 1));
      }
      write(a) {
        if ('function' == typeof a) {
          (a(this, { execution: 'sync' }), a(this, { execution: 'async' }));
          return;
        }
        let b = a.split('\n').filter((a) => a),
          c = Math.min(...b.map((a) => a.length - a.trimStart().length));
        for (let a of b.map((a) => a.slice(c)).map((a) => ' '.repeat(2 * this.indent) + a))
          this.content.push(a);
      }
      compile() {
        return Function(
          ...this?.args,
          [...(this?.content ?? ['']).map((a) => `  ${a}`)].join('\n')
        );
      }
    }
    a.s(['version', () => cn], 65474);
    let cn = { major: 4, minor: 1, patch: 5 },
      co = j('$ZodType', (a, b) => {
        var c;
        (a ?? (a = {}), (a._zod.def = b), (a._zod.bag = a._zod.bag || {}), (a._zod.version = cn));
        let d = [...(a._zod.def.checks ?? [])];
        for (let b of (a._zod.traits.has('$ZodCheck') && d.unshift(a), d))
          for (let c of b._zod.onattach) c(a);
        if (0 === d.length)
          ((c = a._zod).deferred ?? (c.deferred = []),
            a._zod.deferred?.push(() => {
              a._zod.run = a._zod.parse;
            }));
        else {
          let b = (a, b, c) => {
              let d,
                e = ah(a);
              for (let f of b) {
                if (f._zod.def.when) {
                  if (!f._zod.def.when(a)) continue;
                } else if (e) continue;
                let b = a.issues.length,
                  g = f._zod.check(a);
                if (g instanceof Promise && c?.async === !1) throw new l();
                if (d || g instanceof Promise)
                  d = (d ?? Promise.resolve()).then(async () => {
                    (await g, a.issues.length !== b && (e || (e = ah(a, b))));
                  });
                else {
                  if (a.issues.length === b) continue;
                  e || (e = ah(a, b));
                }
              }
              return d ? d.then(() => a) : a;
            },
            c = (c, e, f) => {
              if (ah(c)) return ((c.aborted = !0), c);
              let g = b(e, d, f);
              if (g instanceof Promise) {
                if (!1 === f.async) throw new l();
                return g.then((b) => a._zod.parse(b, f));
              }
              return a._zod.parse(g, f);
            };
          a._zod.run = (e, f) => {
            if (f.skipChecks) return a._zod.parse(e, f);
            if ('backward' === f.direction) {
              let b = a._zod.parse({ value: e.value, issues: [] }, { ...f, skipChecks: !0 });
              return b instanceof Promise ? b.then((a) => c(a, e, f)) : c(b, e, f);
            }
            let g = a._zod.parse(e, f);
            if (g instanceof Promise) {
              if (!1 === f.async) throw new l();
              return g.then((a) => b(a, d, f));
            }
            return b(g, d, f);
          };
        }
        a['~standard'] = {
          validate: (b) => {
            try {
              let c = aK(a, b);
              return c.success ? { value: c.data } : { issues: c.error?.issues };
            } catch (c) {
              return aM(a, b).then((a) =>
                a.success ? { value: a.data } : { issues: a.error?.issues }
              );
            }
          },
          vendor: 'zod',
          version: 1,
        };
      }),
      cp = j('$ZodString', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = [...(a?._zod.bag?.patterns ?? [])].pop() ?? bz(a._zod.bag)),
          (a._zod.parse = (c, d) => {
            if (b.coerce)
              try {
                c.value = String(c.value);
              } catch (a) {}
            return (
              'string' == typeof c.value ||
                c.issues.push({
                  expected: 'string',
                  code: 'invalid_type',
                  input: c.value,
                  inst: a,
                }),
              c
            );
          }));
      }),
      cq = j('$ZodStringFormat', (a, b) => {
        (cb.init(a, b), cp.init(a, b));
      }),
      cr = j('$ZodGUID', (a, b) => {
        (b.pattern ?? (b.pattern = a9), cq.init(a, b));
      }),
      cs = j('$ZodUUID', (a, b) => {
        if (b.version) {
          let a = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[b.version];
          if (void 0 === a) throw Error(`Invalid UUID version: "${b.version}"`);
          b.pattern ?? (b.pattern = ba(a));
        } else b.pattern ?? (b.pattern = ba());
        cq.init(a, b);
      }),
      ct = j('$ZodEmail', (a, b) => {
        (b.pattern ?? (b.pattern = be), cq.init(a, b));
      }),
      cu = j('$ZodURL', (a, b) => {
        (cq.init(a, b),
          (a._zod.check = (c) => {
            try {
              let d = c.value.trim(),
                e = new URL(d);
              (b.hostname &&
                ((b.hostname.lastIndex = 0),
                b.hostname.test(e.hostname) ||
                  c.issues.push({
                    code: 'invalid_format',
                    format: 'url',
                    note: 'Invalid hostname',
                    pattern: br.source,
                    input: c.value,
                    inst: a,
                    continue: !b.abort,
                  })),
                b.protocol &&
                  ((b.protocol.lastIndex = 0),
                  b.protocol.test(
                    e.protocol.endsWith(':') ? e.protocol.slice(0, -1) : e.protocol
                  ) ||
                    c.issues.push({
                      code: 'invalid_format',
                      format: 'url',
                      note: 'Invalid protocol',
                      pattern: b.protocol.source,
                      input: c.value,
                      inst: a,
                      continue: !b.abort,
                    })),
                b.normalize ? (c.value = e.href) : (c.value = d));
              return;
            } catch (d) {
              c.issues.push({
                code: 'invalid_format',
                format: 'url',
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
            }
          }));
      }),
      cv = j('$ZodEmoji', (a, b) => {
        (b.pattern ?? (b.pattern = bk()), cq.init(a, b));
      }),
      cw = j('$ZodNanoID', (a, b) => {
        (b.pattern ?? (b.pattern = a6), cq.init(a, b));
      }),
      cx = j('$ZodCUID', (a, b) => {
        (b.pattern ?? (b.pattern = a1), cq.init(a, b));
      }),
      cy = j('$ZodCUID2', (a, b) => {
        (b.pattern ?? (b.pattern = a2), cq.init(a, b));
      }),
      cz = j('$ZodULID', (a, b) => {
        (b.pattern ?? (b.pattern = a3), cq.init(a, b));
      }),
      cA = j('$ZodXID', (a, b) => {
        (b.pattern ?? (b.pattern = a4), cq.init(a, b));
      }),
      cB = j('$ZodKSUID', (a, b) => {
        (b.pattern ?? (b.pattern = a5), cq.init(a, b));
      }),
      cC = j('$ZodISODateTime', (a, b) => {
        (b.pattern ?? (b.pattern = by(b)), cq.init(a, b));
      }),
      cD = j('$ZodISODate', (a, b) => {
        (b.pattern ?? (b.pattern = bv), cq.init(a, b));
      }),
      cE = j('$ZodISOTime', (a, b) => {
        (b.pattern ?? (b.pattern = bx(b)), cq.init(a, b));
      }),
      cF = j('$ZodISODuration', (a, b) => {
        (b.pattern ?? (b.pattern = a7), cq.init(a, b));
      }),
      cG = j('$ZodIPv4', (a, b) => {
        (b.pattern ?? (b.pattern = bl),
          cq.init(a, b),
          a._zod.onattach.push((a) => {
            a._zod.bag.format = 'ipv4';
          }));
      }),
      cH = j('$ZodIPv6', (a, b) => {
        (b.pattern ?? (b.pattern = bm),
          cq.init(a, b),
          a._zod.onattach.push((a) => {
            a._zod.bag.format = 'ipv6';
          }),
          (a._zod.check = (c) => {
            try {
              new URL(`http://[${c.value}]`);
            } catch {
              c.issues.push({
                code: 'invalid_format',
                format: 'ipv6',
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
            }
          }));
      }),
      cI = j('$ZodCIDRv4', (a, b) => {
        (b.pattern ?? (b.pattern = bn), cq.init(a, b));
      }),
      cJ = j('$ZodCIDRv6', (a, b) => {
        (b.pattern ?? (b.pattern = bo),
          cq.init(a, b),
          (a._zod.check = (c) => {
            let [d, e] = c.value.split('/');
            try {
              if (!e) throw Error();
              let a = Number(e);
              if (`${a}` !== e || a < 0 || a > 128) throw Error();
              new URL(`http://[${d}]`);
            } catch {
              c.issues.push({
                code: 'invalid_format',
                format: 'cidrv6',
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
            }
          }));
      });
    function cK(a) {
      if ('' === a) return !0;
      if (a.length % 4 != 0) return !1;
      try {
        return (atob(a), !0);
      } catch {
        return !1;
      }
    }
    let cL = j('$ZodBase64', (a, b) => {
      (b.pattern ?? (b.pattern = bp),
        cq.init(a, b),
        a._zod.onattach.push((a) => {
          a._zod.bag.contentEncoding = 'base64';
        }),
        (a._zod.check = (c) => {
          cK(c.value) ||
            c.issues.push({
              code: 'invalid_format',
              format: 'base64',
              input: c.value,
              inst: a,
              continue: !b.abort,
            });
        }));
    });
    function cM(a) {
      if (!bq.test(a)) return !1;
      let b = a.replace(/[-_]/g, (a) => ('-' === a ? '+' : '/'));
      return cK(b.padEnd(4 * Math.ceil(b.length / 4), '='));
    }
    let cN = j('$ZodBase64URL', (a, b) => {
        (b.pattern ?? (b.pattern = bq),
          cq.init(a, b),
          a._zod.onattach.push((a) => {
            a._zod.bag.contentEncoding = 'base64url';
          }),
          (a._zod.check = (c) => {
            cM(c.value) ||
              c.issues.push({
                code: 'invalid_format',
                format: 'base64url',
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      cO = j('$ZodE164', (a, b) => {
        (b.pattern ?? (b.pattern = bt), cq.init(a, b));
      });
    function cP(a, b = null) {
      try {
        let c = a.split('.');
        if (3 !== c.length) return !1;
        let [d] = c;
        if (!d) return !1;
        let e = JSON.parse(atob(d));
        if (('typ' in e && e?.typ !== 'JWT') || !e.alg || (b && (!('alg' in e) || e.alg !== b)))
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }
    let cQ = j('$ZodJWT', (a, b) => {
        (cq.init(a, b),
          (a._zod.check = (c) => {
            cP(c.value, b.alg) ||
              c.issues.push({
                code: 'invalid_format',
                format: 'jwt',
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      cR = j('$ZodCustomStringFormat', (a, b) => {
        (cq.init(a, b),
          (a._zod.check = (c) => {
            b.fn(c.value) ||
              c.issues.push({
                code: 'invalid_format',
                format: b.format,
                input: c.value,
                inst: a,
                continue: !b.abort,
              });
          }));
      }),
      cS = j('$ZodNumber', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = a._zod.bag.pattern ?? bC),
          (a._zod.parse = (c, d) => {
            if (b.coerce)
              try {
                c.value = Number(c.value);
              } catch (a) {}
            let e = c.value;
            if ('number' == typeof e && !Number.isNaN(e) && Number.isFinite(e)) return c;
            let f =
              'number' == typeof e
                ? Number.isNaN(e)
                  ? 'NaN'
                  : Number.isFinite(e)
                    ? void 0
                    : 'Infinity'
                : void 0;
            return (
              c.issues.push({
                expected: 'number',
                code: 'invalid_type',
                input: e,
                inst: a,
                ...(f ? { received: f } : {}),
              }),
              c
            );
          }));
      }),
      cT = j('$ZodNumber', (a, b) => {
        (b3.init(a, b), cS.init(a, b));
      }),
      cU = j('$ZodBoolean', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = bD),
          (a._zod.parse = (c, d) => {
            if (b.coerce)
              try {
                c.value = !!c.value;
              } catch (a) {}
            let e = c.value;
            return (
              'boolean' == typeof e ||
                c.issues.push({ expected: 'boolean', code: 'invalid_type', input: e, inst: a }),
              c
            );
          }));
      }),
      cV = j('$ZodBigInt', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = bA),
          (a._zod.parse = (c, d) => {
            if (b.coerce)
              try {
                c.value = BigInt(c.value);
              } catch (a) {}
            return (
              'bigint' == typeof c.value ||
                c.issues.push({
                  expected: 'bigint',
                  code: 'invalid_type',
                  input: c.value,
                  inst: a,
                }),
              c
            );
          }));
      }),
      cW = j('$ZodBigInt', (a, b) => {
        (b4.init(a, b), cV.init(a, b));
      }),
      cX = j('$ZodSymbol', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (b, c) => {
            let d = b.value;
            return (
              'symbol' == typeof d ||
                b.issues.push({ expected: 'symbol', code: 'invalid_type', input: d, inst: a }),
              b
            );
          }));
      }),
      cY = j('$ZodUndefined', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = bF),
          (a._zod.values = new Set([void 0])),
          (a._zod.optin = 'optional'),
          (a._zod.optout = 'optional'),
          (a._zod.parse = (b, c) => {
            let d = b.value;
            return (
              void 0 === d ||
                b.issues.push({ expected: 'undefined', code: 'invalid_type', input: d, inst: a }),
              b
            );
          }));
      }),
      cZ = j('$ZodNull', (a, b) => {
        (co.init(a, b),
          (a._zod.pattern = bE),
          (a._zod.values = new Set([null])),
          (a._zod.parse = (b, c) => {
            let d = b.value;
            return (
              null === d ||
                b.issues.push({ expected: 'null', code: 'invalid_type', input: d, inst: a }),
              b
            );
          }));
      }),
      c$ = j('$ZodAny', (a, b) => {
        (co.init(a, b), (a._zod.parse = (a) => a));
      }),
      c_ = j('$ZodUnknown', (a, b) => {
        (co.init(a, b), (a._zod.parse = (a) => a));
      }),
      c0 = j('$ZodNever', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (b, c) => (
            b.issues.push({ expected: 'never', code: 'invalid_type', input: b.value, inst: a }),
            b
          )));
      }),
      c1 = j('$ZodVoid', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (b, c) => {
            let d = b.value;
            return (
              void 0 === d ||
                b.issues.push({ expected: 'void', code: 'invalid_type', input: d, inst: a }),
              b
            );
          }));
      }),
      c2 = j('$ZodDate', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (c, d) => {
            if (b.coerce)
              try {
                c.value = new Date(c.value);
              } catch (a) {}
            let e = c.value,
              f = e instanceof Date;
            return (
              (f && !Number.isNaN(e.getTime())) ||
                c.issues.push({
                  expected: 'date',
                  code: 'invalid_type',
                  input: e,
                  ...(f ? { received: 'Invalid Date' } : {}),
                  inst: a,
                }),
              c
            );
          }));
      });
    function c3(a, b, c) {
      (a.issues.length && b.issues.push(...ai(c, a.issues)), (b.value[c] = a.value));
    }
    let c4 = j('$ZodArray', (a, b) => {
      (co.init(a, b),
        (a._zod.parse = (c, d) => {
          let e = c.value;
          if (!Array.isArray(e))
            return (
              c.issues.push({ expected: 'array', code: 'invalid_type', input: e, inst: a }),
              c
            );
          c.value = Array(e.length);
          let f = [];
          for (let a = 0; a < e.length; a++) {
            let g = e[a],
              h = b.element._zod.run({ value: g, issues: [] }, d);
            h instanceof Promise ? f.push(h.then((b) => c3(b, c, a))) : c3(h, c, a);
          }
          return f.length ? Promise.all(f).then(() => c) : c;
        }));
    });
    function c5(a, b, c, d) {
      (a.issues.length && b.issues.push(...ai(c, a.issues)),
        void 0 === a.value ? c in d && (b.value[c] = void 0) : (b.value[c] = a.value));
    }
    function c6(a) {
      let b = Object.keys(a.shape);
      for (let c of b)
        if (!a.shape[c]._zod.traits.has('$ZodType'))
          throw Error(`Invalid element at key "${c}": expected a Zod schema`);
      let c = Z(a.shape);
      return { ...a, keys: b, keySet: new Set(b), numKeys: b.length, optionalKeys: new Set(c) };
    }
    function c7(a, b, c, d, e, f) {
      let g = [],
        h = e.keySet,
        i = e.catchall._zod,
        j = i.def.type;
      for (let e of Object.keys(b)) {
        if (h.has(e)) continue;
        if ('never' === j) {
          g.push(e);
          continue;
        }
        let f = i.run({ value: b[e], issues: [] }, d);
        f instanceof Promise ? a.push(f.then((a) => c5(a, c, e, b))) : c5(f, c, e, b);
      }
      return (g.length && c.issues.push({ code: 'unrecognized_keys', keys: g, input: b, inst: f }),
      a.length)
        ? Promise.all(a).then(() => c)
        : c;
    }
    let c8 = j('$ZodObject', (a, b) => {
        let c;
        co.init(a, b);
        let d = x(() => c6(b));
        C(a._zod, 'propValues', () => {
          let a = b.shape,
            c = {};
          for (let b in a) {
            let d = a[b]._zod;
            if (d.values) for (let a of (c[b] ?? (c[b] = new Set()), d.values)) c[b].add(a);
          }
          return c;
        });
        let e = b.catchall;
        a._zod.parse = (b, f) => {
          c ?? (c = d.value);
          let g = b.value;
          if (!M(g))
            return (
              b.issues.push({ expected: 'object', code: 'invalid_type', input: g, inst: a }),
              b
            );
          b.value = {};
          let h = [],
            i = c.shape;
          for (let a of c.keys) {
            let c = i[a]._zod.run({ value: g[a], issues: [] }, f);
            c instanceof Promise ? h.push(c.then((c) => c5(c, b, a, g))) : c5(c, b, a, g);
          }
          return e ? c7(h, g, b, f, d.value, a) : h.length ? Promise.all(h).then(() => b) : b;
        };
      }),
      c9 = j('$ZodObjectJIT', (a, b) => {
        let c, d;
        c8.init(a, b);
        let e = a._zod.parse,
          f = x(() => c6(b)),
          g = !n.jitless,
          h = g && N.value,
          i = b.catchall;
        a._zod.parse = (j, k) => {
          d ?? (d = f.value);
          let l = j.value;
          return M(l)
            ? g && h && k?.async === !1 && !0 !== k.jitless
              ? (c ||
                  (c = ((a) => {
                    let b = new cm(['shape', 'payload', 'ctx']),
                      c = f.value,
                      d = (a) => {
                        let b = K(a);
                        return `shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`;
                      };
                    b.write('const input = payload.value;');
                    let e = Object.create(null),
                      g = 0;
                    for (let a of c.keys) e[a] = `key_${g++}`;
                    for (let a of (b.write('const newResult = {}'), c.keys)) {
                      let c = e[a],
                        f = K(a);
                      (b.write(`const ${c} = ${d(a)};`),
                        b.write(`
        if (${c}.issues.length) {
          payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${f}, ...iss.path] : [${f}]
          })));
        }
        
        if (${c}.value === undefined) {
          if (${f} in input) {
            newResult[${f}] = undefined;
          }
        } else {
          newResult[${f}] = ${c}.value;
        }
      `));
                    }
                    (b.write('payload.value = newResult;'), b.write('return payload;'));
                    let h = b.compile();
                    return (b, c) => h(a, b, c);
                  })(b.shape)),
                (j = c(j, k)),
                i)
                ? c7([], l, j, k, d, a)
                : j
              : e(j, k)
            : (j.issues.push({ expected: 'object', code: 'invalid_type', input: l, inst: a }), j);
        };
      });
    function da(a, b, c, d) {
      for (let c of a) if (0 === c.issues.length) return ((b.value = c.value), b);
      let e = a.filter((a) => !ah(a));
      return 1 === e.length
        ? ((b.value = e[0].value), e[0])
        : (b.issues.push({
            code: 'invalid_union',
            input: b.value,
            inst: c,
            errors: a.map((a) => a.issues.map((a) => ak(a, d, o()))),
          }),
          b);
    }
    let db = j('$ZodUnion', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'optin', () =>
            b.options.some((a) => 'optional' === a._zod.optin) ? 'optional' : void 0
          ),
          C(a._zod, 'optout', () =>
            b.options.some((a) => 'optional' === a._zod.optout) ? 'optional' : void 0
          ),
          C(a._zod, 'values', () => {
            if (b.options.every((a) => a._zod.values))
              return new Set(b.options.flatMap((a) => Array.from(a._zod.values)));
          }),
          C(a._zod, 'pattern', () => {
            if (b.options.every((a) => a._zod.pattern)) {
              let a = b.options.map((a) => a._zod.pattern);
              return RegExp(`^(${a.map((a) => z(a.source)).join('|')})$`);
            }
          }));
        let c = 1 === b.options.length,
          d = b.options[0]._zod.run;
        a._zod.parse = (e, f) => {
          if (c) return d(e, f);
          let g = !1,
            h = [];
          for (let a of b.options) {
            let b = a._zod.run({ value: e.value, issues: [] }, f);
            if (b instanceof Promise) (h.push(b), (g = !0));
            else {
              if (0 === b.issues.length) return b;
              h.push(b);
            }
          }
          return g ? Promise.all(h).then((b) => da(b, e, a, f)) : da(h, e, a, f);
        };
      }),
      dc = j('$ZodDiscriminatedUnion', (a, b) => {
        db.init(a, b);
        let c = a._zod.parse;
        C(a._zod, 'propValues', () => {
          let a = {};
          for (let c of b.options) {
            let d = c._zod.propValues;
            if (!d || 0 === Object.keys(d).length)
              throw Error(`Invalid discriminated union option at index "${b.options.indexOf(c)}"`);
            for (let [b, c] of Object.entries(d))
              for (let d of (a[b] || (a[b] = new Set()), c)) a[b].add(d);
          }
          return a;
        });
        let d = x(() => {
          let a = b.options,
            c = new Map();
          for (let d of a) {
            let a = d._zod.propValues?.[b.discriminator];
            if (!a || 0 === a.size)
              throw Error(`Invalid discriminated union option at index "${b.options.indexOf(d)}"`);
            for (let b of a) {
              if (c.has(b)) throw Error(`Duplicate discriminator value "${String(b)}"`);
              c.set(b, d);
            }
          }
          return c;
        });
        a._zod.parse = (e, f) => {
          let g = e.value;
          if (!M(g))
            return (
              e.issues.push({ code: 'invalid_type', expected: 'object', input: g, inst: a }),
              e
            );
          let h = d.value.get(g?.[b.discriminator]);
          return h
            ? h._zod.run(e, f)
            : b.unionFallback
              ? c(e, f)
              : (e.issues.push({
                  code: 'invalid_union',
                  errors: [],
                  note: 'No matching discriminator',
                  discriminator: b.discriminator,
                  input: g,
                  path: [b.discriminator],
                  inst: a,
                }),
                e);
        };
      }),
      dd = j('$ZodIntersection', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (a, c) => {
            let d = a.value,
              e = b.left._zod.run({ value: d, issues: [] }, c),
              f = b.right._zod.run({ value: d, issues: [] }, c);
            return e instanceof Promise || f instanceof Promise
              ? Promise.all([e, f]).then(([b, c]) => de(a, b, c))
              : de(a, e, f);
          }));
      });
    function de(a, b, c) {
      if (
        (b.issues.length && a.issues.push(...b.issues),
        c.issues.length && a.issues.push(...c.issues),
        ah(a))
      )
        return a;
      let d = (function a(b, c) {
        if (b === c || (b instanceof Date && c instanceof Date && +b == +c))
          return { valid: !0, data: b };
        if (O(b) && O(c)) {
          let d = Object.keys(c),
            e = Object.keys(b).filter((a) => -1 !== d.indexOf(a)),
            f = { ...b, ...c };
          for (let d of e) {
            let e = a(b[d], c[d]);
            if (!e.valid) return { valid: !1, mergeErrorPath: [d, ...e.mergeErrorPath] };
            f[d] = e.data;
          }
          return { valid: !0, data: f };
        }
        if (Array.isArray(b) && Array.isArray(c)) {
          if (b.length !== c.length) return { valid: !1, mergeErrorPath: [] };
          let d = [];
          for (let e = 0; e < b.length; e++) {
            let f = a(b[e], c[e]);
            if (!f.valid) return { valid: !1, mergeErrorPath: [e, ...f.mergeErrorPath] };
            d.push(f.data);
          }
          return { valid: !0, data: d };
        }
        return { valid: !1, mergeErrorPath: [] };
      })(b.value, c.value);
      if (!d.valid)
        throw Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
      return ((a.value = d.data), a);
    }
    let df = j('$ZodTuple', (a, b) => {
      co.init(a, b);
      let c = b.items,
        d = c.length - [...c].reverse().findIndex((a) => 'optional' !== a._zod.optin);
      a._zod.parse = (e, f) => {
        let g = e.value;
        if (!Array.isArray(g))
          return (e.issues.push({ input: g, inst: a, expected: 'tuple', code: 'invalid_type' }), e);
        e.value = [];
        let h = [];
        if (!b.rest) {
          let b = g.length > c.length,
            f = g.length < d - 1;
          if (b || f)
            return (
              e.issues.push({
                ...(b
                  ? { code: 'too_big', maximum: c.length }
                  : { code: 'too_small', minimum: c.length }),
                input: g,
                inst: a,
                origin: 'array',
              }),
              e
            );
        }
        let i = -1;
        for (let a of c) {
          if (++i >= g.length && i >= d) continue;
          let b = a._zod.run({ value: g[i], issues: [] }, f);
          b instanceof Promise ? h.push(b.then((a) => dg(a, e, i))) : dg(b, e, i);
        }
        if (b.rest)
          for (let a of g.slice(c.length)) {
            i++;
            let c = b.rest._zod.run({ value: a, issues: [] }, f);
            c instanceof Promise ? h.push(c.then((a) => dg(a, e, i))) : dg(c, e, i);
          }
        return h.length ? Promise.all(h).then(() => e) : e;
      };
    });
    function dg(a, b, c) {
      (a.issues.length && b.issues.push(...ai(c, a.issues)), (b.value[c] = a.value));
    }
    let dh = j('$ZodRecord', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (c, d) => {
            let e = c.value;
            if (!O(e))
              return (
                c.issues.push({ expected: 'record', code: 'invalid_type', input: e, inst: a }),
                c
              );
            let f = [];
            if (b.keyType._zod.values) {
              let g,
                h = b.keyType._zod.values;
              for (let a of ((c.value = {}), h))
                if ('string' == typeof a || 'number' == typeof a || 'symbol' == typeof a) {
                  let g = b.valueType._zod.run({ value: e[a], issues: [] }, d);
                  g instanceof Promise
                    ? f.push(
                        g.then((b) => {
                          (b.issues.length && c.issues.push(...ai(a, b.issues)),
                            (c.value[a] = b.value));
                        })
                      )
                    : (g.issues.length && c.issues.push(...ai(a, g.issues)),
                      (c.value[a] = g.value));
                }
              for (let a in e) h.has(a) || (g = g ?? []).push(a);
              g &&
                g.length > 0 &&
                c.issues.push({ code: 'unrecognized_keys', input: e, inst: a, keys: g });
            } else
              for (let g of ((c.value = {}), Reflect.ownKeys(e))) {
                if ('__proto__' === g) continue;
                let h = b.keyType._zod.run({ value: g, issues: [] }, d);
                if (h instanceof Promise)
                  throw Error('Async schemas not supported in object keys currently');
                if (h.issues.length) {
                  (c.issues.push({
                    code: 'invalid_key',
                    origin: 'record',
                    issues: h.issues.map((a) => ak(a, d, o())),
                    input: g,
                    path: [g],
                    inst: a,
                  }),
                    (c.value[h.value] = h.value));
                  continue;
                }
                let i = b.valueType._zod.run({ value: e[g], issues: [] }, d);
                i instanceof Promise
                  ? f.push(
                      i.then((a) => {
                        (a.issues.length && c.issues.push(...ai(g, a.issues)),
                          (c.value[h.value] = a.value));
                      })
                    )
                  : (i.issues.length && c.issues.push(...ai(g, i.issues)),
                    (c.value[h.value] = i.value));
              }
            return f.length ? Promise.all(f).then(() => c) : c;
          }));
      }),
      di = j('$ZodMap', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (c, d) => {
            let e = c.value;
            if (!(e instanceof Map))
              return (
                c.issues.push({ expected: 'map', code: 'invalid_type', input: e, inst: a }),
                c
              );
            let f = [];
            for (let [g, h] of ((c.value = new Map()), e)) {
              let i = b.keyType._zod.run({ value: g, issues: [] }, d),
                j = b.valueType._zod.run({ value: h, issues: [] }, d);
              i instanceof Promise || j instanceof Promise
                ? f.push(
                    Promise.all([i, j]).then(([b, f]) => {
                      dj(b, f, c, g, e, a, d);
                    })
                  )
                : dj(i, j, c, g, e, a, d);
            }
            return f.length ? Promise.all(f).then(() => c) : c;
          }));
      });
    function dj(a, b, c, d, e, f, g) {
      (a.issues.length &&
        (S.has(typeof d)
          ? c.issues.push(...ai(d, a.issues))
          : c.issues.push({
              code: 'invalid_key',
              origin: 'map',
              input: e,
              inst: f,
              issues: a.issues.map((a) => ak(a, g, o())),
            })),
        b.issues.length &&
          (S.has(typeof d)
            ? c.issues.push(...ai(d, b.issues))
            : c.issues.push({
                origin: 'map',
                code: 'invalid_element',
                input: e,
                inst: f,
                key: d,
                issues: b.issues.map((a) => ak(a, g, o())),
              })),
        c.value.set(a.value, b.value));
    }
    let dk = j('$ZodSet', (a, b) => {
      (co.init(a, b),
        (a._zod.parse = (c, d) => {
          let e = c.value;
          if (!(e instanceof Set))
            return (c.issues.push({ input: e, inst: a, expected: 'set', code: 'invalid_type' }), c);
          let f = [];
          for (let a of ((c.value = new Set()), e)) {
            let e = b.valueType._zod.run({ value: a, issues: [] }, d);
            e instanceof Promise ? f.push(e.then((a) => dl(a, c))) : dl(e, c);
          }
          return f.length ? Promise.all(f).then(() => c) : c;
        }));
    });
    function dl(a, b) {
      (a.issues.length && b.issues.push(...a.issues), b.value.add(a.value));
    }
    let dm = j('$ZodEnum', (a, b) => {
        co.init(a, b);
        let c = u(b.entries),
          d = new Set(c);
        ((a._zod.values = d),
          (a._zod.pattern = RegExp(
            `^(${c
              .filter((a) => S.has(typeof a))
              .map((a) => ('string' == typeof a ? U(a) : a.toString()))
              .join('|')})$`
          )),
          (a._zod.parse = (b, e) => {
            let f = b.value;
            return (
              d.has(f) || b.issues.push({ code: 'invalid_value', values: c, input: f, inst: a }),
              b
            );
          }));
      }),
      dn = j('$ZodLiteral', (a, b) => {
        if ((co.init(a, b), 0 === b.values.length))
          throw Error('Cannot create literal schema with no valid values');
        ((a._zod.values = new Set(b.values)),
          (a._zod.pattern = RegExp(
            `^(${b.values.map((a) => ('string' == typeof a ? U(a) : a ? U(a.toString()) : String(a))).join('|')})$`
          )),
          (a._zod.parse = (c, d) => {
            let e = c.value;
            return (
              a._zod.values.has(e) ||
                c.issues.push({ code: 'invalid_value', values: b.values, input: e, inst: a }),
              c
            );
          }));
      }),
      dp = j('$ZodFile', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (b, c) => {
            let d = b.value;
            return (
              d instanceof File ||
                b.issues.push({ expected: 'file', code: 'invalid_type', input: d, inst: a }),
              b
            );
          }));
      }),
      dq = j('$ZodTransform', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (c, d) => {
            if ('backward' === d.direction) throw new m(a.constructor.name);
            let e = b.transform(c.value, c);
            if (d.async)
              return (e instanceof Promise ? e : Promise.resolve(e)).then(
                (a) => ((c.value = a), c)
              );
            if (e instanceof Promise) throw new l();
            return ((c.value = e), c);
          }));
      });
    function dr(a, b) {
      return a.issues.length && void 0 === b ? { issues: [], value: void 0 } : a;
    }
    let ds = j('$ZodOptional', (a, b) => {
        (co.init(a, b),
          (a._zod.optin = 'optional'),
          (a._zod.optout = 'optional'),
          C(a._zod, 'values', () =>
            b.innerType._zod.values ? new Set([...b.innerType._zod.values, void 0]) : void 0
          ),
          C(a._zod, 'pattern', () => {
            let a = b.innerType._zod.pattern;
            return a ? RegExp(`^(${z(a.source)})?$`) : void 0;
          }),
          (a._zod.parse = (a, c) => {
            if ('optional' === b.innerType._zod.optin) {
              let d = b.innerType._zod.run(a, c);
              return d instanceof Promise ? d.then((b) => dr(b, a.value)) : dr(d, a.value);
            }
            return void 0 === a.value ? a : b.innerType._zod.run(a, c);
          }));
      }),
      dt = j('$ZodNullable', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'optin', () => b.innerType._zod.optin),
          C(a._zod, 'optout', () => b.innerType._zod.optout),
          C(a._zod, 'pattern', () => {
            let a = b.innerType._zod.pattern;
            return a ? RegExp(`^(${z(a.source)}|null)$`) : void 0;
          }),
          C(a._zod, 'values', () =>
            b.innerType._zod.values ? new Set([...b.innerType._zod.values, null]) : void 0
          ),
          (a._zod.parse = (a, c) => (null === a.value ? a : b.innerType._zod.run(a, c))));
      }),
      du = j('$ZodDefault', (a, b) => {
        (co.init(a, b),
          (a._zod.optin = 'optional'),
          C(a._zod, 'values', () => b.innerType._zod.values),
          (a._zod.parse = (a, c) => {
            if ('backward' === c.direction) return b.innerType._zod.run(a, c);
            if (void 0 === a.value) return ((a.value = b.defaultValue), a);
            let d = b.innerType._zod.run(a, c);
            return d instanceof Promise ? d.then((a) => dv(a, b)) : dv(d, b);
          }));
      });
    function dv(a, b) {
      return (void 0 === a.value && (a.value = b.defaultValue), a);
    }
    let dw = j('$ZodPrefault', (a, b) => {
        (co.init(a, b),
          (a._zod.optin = 'optional'),
          C(a._zod, 'values', () => b.innerType._zod.values),
          (a._zod.parse = (a, c) => (
            'backward' === c.direction || (void 0 === a.value && (a.value = b.defaultValue)),
            b.innerType._zod.run(a, c)
          )));
      }),
      dx = j('$ZodNonOptional', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'values', () => {
            let a = b.innerType._zod.values;
            return a ? new Set([...a].filter((a) => void 0 !== a)) : void 0;
          }),
          (a._zod.parse = (c, d) => {
            let e = b.innerType._zod.run(c, d);
            return e instanceof Promise ? e.then((b) => dy(b, a)) : dy(e, a);
          }));
      });
    function dy(a, b) {
      return (
        a.issues.length ||
          void 0 !== a.value ||
          a.issues.push({ code: 'invalid_type', expected: 'nonoptional', input: a.value, inst: b }),
        a
      );
    }
    let dz = j('$ZodSuccess', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (a, c) => {
            if ('backward' === c.direction) throw new m('ZodSuccess');
            let d = b.innerType._zod.run(a, c);
            return d instanceof Promise
              ? d.then((b) => ((a.value = 0 === b.issues.length), a))
              : ((a.value = 0 === d.issues.length), a);
          }));
      }),
      dA = j('$ZodCatch', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'optin', () => b.innerType._zod.optin),
          C(a._zod, 'optout', () => b.innerType._zod.optout),
          C(a._zod, 'values', () => b.innerType._zod.values),
          (a._zod.parse = (a, c) => {
            if ('backward' === c.direction) return b.innerType._zod.run(a, c);
            let d = b.innerType._zod.run(a, c);
            return d instanceof Promise
              ? d.then(
                  (d) => (
                    (a.value = d.value),
                    d.issues.length &&
                      ((a.value = b.catchValue({
                        ...a,
                        error: { issues: d.issues.map((a) => ak(a, c, o())) },
                        input: a.value,
                      })),
                      (a.issues = [])),
                    a
                  )
                )
              : ((a.value = d.value),
                d.issues.length &&
                  ((a.value = b.catchValue({
                    ...a,
                    error: { issues: d.issues.map((a) => ak(a, c, o())) },
                    input: a.value,
                  })),
                  (a.issues = [])),
                a);
          }));
      }),
      dB = j('$ZodNaN', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (b, c) => (
            ('number' == typeof b.value && Number.isNaN(b.value)) ||
              b.issues.push({ input: b.value, inst: a, expected: 'nan', code: 'invalid_type' }),
            b
          )));
      }),
      dC = j('$ZodPipe', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'values', () => b.in._zod.values),
          C(a._zod, 'optin', () => b.in._zod.optin),
          C(a._zod, 'optout', () => b.out._zod.optout),
          C(a._zod, 'propValues', () => b.in._zod.propValues),
          (a._zod.parse = (a, c) => {
            if ('backward' === c.direction) {
              let d = b.out._zod.run(a, c);
              return d instanceof Promise ? d.then((a) => dD(a, b.in, c)) : dD(d, b.in, c);
            }
            let d = b.in._zod.run(a, c);
            return d instanceof Promise ? d.then((a) => dD(a, b.out, c)) : dD(d, b.out, c);
          }));
      });
    function dD(a, b, c) {
      return a.issues.length
        ? ((a.aborted = !0), a)
        : b._zod.run({ value: a.value, issues: a.issues }, c);
    }
    let dE = j('$ZodCodec', (a, b) => {
      (co.init(a, b),
        C(a._zod, 'values', () => b.in._zod.values),
        C(a._zod, 'optin', () => b.in._zod.optin),
        C(a._zod, 'optout', () => b.out._zod.optout),
        C(a._zod, 'propValues', () => b.in._zod.propValues),
        (a._zod.parse = (a, c) => {
          if ('forward' === (c.direction || 'forward')) {
            let d = b.in._zod.run(a, c);
            return d instanceof Promise ? d.then((a) => dF(a, b, c)) : dF(d, b, c);
          }
          {
            let d = b.out._zod.run(a, c);
            return d instanceof Promise ? d.then((a) => dF(a, b, c)) : dF(d, b, c);
          }
        }));
    });
    function dF(a, b, c) {
      if (a.issues.length) return ((a.aborted = !0), a);
      if ('forward' === (c.direction || 'forward')) {
        let d = b.transform(a.value, a);
        return d instanceof Promise ? d.then((d) => dG(a, d, b.out, c)) : dG(a, d, b.out, c);
      }
      {
        let d = b.reverseTransform(a.value, a);
        return d instanceof Promise ? d.then((d) => dG(a, d, b.in, c)) : dG(a, d, b.in, c);
      }
    }
    function dG(a, b, c, d) {
      return a.issues.length
        ? ((a.aborted = !0), a)
        : c._zod.run({ value: b, issues: a.issues }, d);
    }
    let dH = j('$ZodReadonly', (a, b) => {
      (co.init(a, b),
        C(a._zod, 'propValues', () => b.innerType._zod.propValues),
        C(a._zod, 'values', () => b.innerType._zod.values),
        C(a._zod, 'optin', () => b.innerType._zod.optin),
        C(a._zod, 'optout', () => b.innerType._zod.optout),
        (a._zod.parse = (a, c) => {
          if ('backward' === c.direction) return b.innerType._zod.run(a, c);
          let d = b.innerType._zod.run(a, c);
          return d instanceof Promise ? d.then(dI) : dI(d);
        }));
    });
    function dI(a) {
      return ((a.value = Object.freeze(a.value)), a);
    }
    let dJ = j('$ZodTemplateLiteral', (a, b) => {
        co.init(a, b);
        let c = [];
        for (let a of b.parts)
          if ('object' == typeof a && null !== a) {
            if (!a._zod.pattern)
              throw Error(
                `Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`
              );
            let b = a._zod.pattern instanceof RegExp ? a._zod.pattern.source : a._zod.pattern;
            if (!b) throw Error(`Invalid template literal part: ${a._zod.traits}`);
            let d = +!!b.startsWith('^'),
              e = b.endsWith('$') ? b.length - 1 : b.length;
            c.push(b.slice(d, e));
          } else if (null === a || T.has(typeof a)) c.push(U(`${a}`));
          else throw Error(`Invalid template literal part: ${a}`);
        ((a._zod.pattern = RegExp(`^${c.join('')}$`)),
          (a._zod.parse = (c, d) => (
            'string' != typeof c.value
              ? c.issues.push({
                  input: c.value,
                  inst: a,
                  expected: 'template_literal',
                  code: 'invalid_type',
                })
              : ((a._zod.pattern.lastIndex = 0),
                a._zod.pattern.test(c.value) ||
                  c.issues.push({
                    input: c.value,
                    inst: a,
                    code: 'invalid_format',
                    format: b.format ?? 'template_literal',
                    pattern: a._zod.pattern.source,
                  })),
            c
          )));
      }),
      dK = j(
        '$ZodFunction',
        (a, b) => (
          co.init(a, b),
          (a._def = b),
          (a._zod.def = b),
          (a.implement = (b) => {
            if ('function' != typeof b) throw Error('implement() must be called with a function');
            return function (...c) {
              let d = Reflect.apply(b, this, a._def.input ? aG(a._def.input, c) : c);
              return a._def.output ? aG(a._def.output, d) : d;
            };
          }),
          (a.implementAsync = (b) => {
            if ('function' != typeof b)
              throw Error('implementAsync() must be called with a function');
            return async function (...c) {
              let d = a._def.input ? await aI(a._def.input, c) : c,
                e = await Reflect.apply(b, this, d);
              return a._def.output ? await aI(a._def.output, e) : e;
            };
          }),
          (a._zod.parse = (b, c) => (
            'function' != typeof b.value
              ? b.issues.push({
                  code: 'invalid_type',
                  expected: 'function',
                  input: b.value,
                  inst: a,
                })
              : a._def.output && 'promise' === a._def.output._zod.def.type
                ? (b.value = a.implementAsync(b.value))
                : (b.value = a.implement(b.value)),
            b
          )),
          (a.input = (...b) => {
            let c = a.constructor;
            return new c(
              Array.isArray(b[0])
                ? {
                    type: 'function',
                    input: new df({ type: 'tuple', items: b[0], rest: b[1] }),
                    output: a._def.output,
                  }
                : { type: 'function', input: b[0], output: a._def.output }
            );
          }),
          (a.output = (b) =>
            new a.constructor({ type: 'function', input: a._def.input, output: b })),
          a
        )
      ),
      dL = j('$ZodPromise', (a, b) => {
        (co.init(a, b),
          (a._zod.parse = (a, c) =>
            Promise.resolve(a.value).then((a) =>
              b.innerType._zod.run({ value: a, issues: [] }, c)
            )));
      }),
      dM = j('$ZodLazy', (a, b) => {
        (co.init(a, b),
          C(a._zod, 'innerType', () => b.getter()),
          C(a._zod, 'pattern', () => a._zod.innerType._zod.pattern),
          C(a._zod, 'propValues', () => a._zod.innerType._zod.propValues),
          C(a._zod, 'optin', () => a._zod.innerType._zod.optin ?? void 0),
          C(a._zod, 'optout', () => a._zod.innerType._zod.optout ?? void 0),
          (a._zod.parse = (b, c) => a._zod.innerType._zod.run(b, c)));
      }),
      dN = j('$ZodCustom', (a, b) => {
        (b$.init(a, b),
          co.init(a, b),
          (a._zod.parse = (a, b) => a),
          (a._zod.check = (c) => {
            let d = c.value,
              e = b.fn(d);
            if (e instanceof Promise) return e.then((b) => dO(b, c, d, a));
            dO(e, c, d, a);
          }));
      });
    function dO(a, b, c, d) {
      if (!a) {
        let a = {
          code: 'custom',
          input: c,
          inst: d,
          path: [...(d._zod.def.path ?? [])],
          continue: !d._zod.def.abort,
        };
        (d._zod.def.params && (a.params = d._zod.def.params), b.issues.push(an(a)));
      }
    }
    (a.i(40851), a.i(58488), a.i(12956), a.i(65474));
    var dP = a.i(10527),
      dQ = a.i(77955);
    function dR() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'حرف', verb: 'أن يحوي' },
              file: { unit: 'بايت', verb: 'أن يحوي' },
              array: { unit: 'عنصر', verb: 'أن يحوي' },
              set: { unit: 'عنصر', verb: 'أن يحوي' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `مدخلات غير مقبولة: يفترض إدخال ${c.expected}، ولكن تم إدخال ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `مدخلات غير مقبولة: يفترض إدخال ${Y(c.values[0])}`;
                return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return ` أكبر من اللازم: يفترض أن تكون ${c.origin ?? 'القيمة'} ${b} ${c.maximum.toString()} ${d.unit ?? 'عنصر'}`;
                return `أكبر من اللازم: يفترض أن تكون ${c.origin ?? 'القيمة'} ${b} ${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()} ${d.unit}`;
                return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `نَص غير مقبول: يجب أن يبدأ بـ "${c.prefix}"`;
                if ('ends_with' === c.format) return `نَص غير مقبول: يجب أن ينتهي بـ "${c.suffix}"`;
                if ('includes' === c.format) return `نَص غير مقبول: يجب أن يتضمَّن "${c.includes}"`;
                if ('regex' === c.format) return `نَص غير مقبول: يجب أن يطابق النمط ${c.pattern}`;
                return `${b[c.format] ?? c.format} غير مقبول`;
              case 'not_multiple_of':
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${c.divisor}`;
              case 'unrecognized_keys':
                return `معرف${c.keys.length > 1 ? 'ات' : ''} غريب${c.keys.length > 1 ? 'ة' : ''}: ${v(c.keys, '، ')}`;
              case 'invalid_key':
                return `معرف غير مقبول في ${c.origin}`;
              case 'invalid_union':
              default:
                return 'مدخل غير مقبول';
              case 'invalid_element':
                return `مدخل غير مقبول في ${c.origin}`;
            }
          };
        })(),
      };
    }
    function dS() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'simvol', verb: 'olmalıdır' },
              file: { unit: 'bayt', verb: 'olmalıdır' },
              array: { unit: 'element', verb: 'olmalıdır' },
              set: { unit: 'element', verb: 'olmalıdır' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Yanlış dəyər: g\xf6zlənilən ${c.expected}, daxil olan ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Yanlış dəyər: g\xf6zlənilən ${Y(c.values[0])}`;
                return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? 'dəyər'} ${b}${c.maximum.toString()} ${d.unit ?? 'element'}`;
                return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? 'dəyər'} ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`;
                return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Yanlış mətn: "${c.prefix}" ilə başlamalıdır`;
                if ('ends_with' === c.format) return `Yanlış mətn: "${c.suffix}" ilə bitməlidir`;
                if ('includes' === c.format) return `Yanlış mətn: "${c.includes}" daxil olmalıdır`;
                if ('regex' === c.format)
                  return `Yanlış mətn: ${c.pattern} şablonuna uyğun olmalıdır`;
                return `Yanlış ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Yanlış ədəd: ${c.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
              case 'unrecognized_keys':
                return `Tanınmayan a\xe7ar${c.keys.length > 1 ? 'lar' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `${c.origin} daxilində yanlış a\xe7ar`;
              case 'invalid_union':
                return 'Yanlış dəyər';
              case 'invalid_element':
                return `${c.origin} daxilində yanlış dəyər`;
              default:
                return `Yanlış dəyər`;
            }
          };
        })(),
      };
    }
    function dT(a, b, c, d) {
      let e = Math.abs(a),
        f = e % 10,
        g = e % 100;
      return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d;
    }
    function dU() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: { one: 'сімвал', few: 'сімвалы', many: 'сімвалаў' }, verb: 'мець' },
              array: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
              set: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
              file: { unit: { one: 'байт', few: 'байты', many: 'байтаў' }, verb: 'мець' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Няправільны ўвод: чакаўся ${c.expected}, атрымана ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'лік';
                    case 'object':
                      if (Array.isArray(a)) return 'масіў';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Няправільны ўвод: чакалася ${Y(c.values[0])}`;
                return `Няправільны варыянт: чакаўся адзін з ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d) {
                  let a = dT(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many);
                  return `Занадта вялікі: чакалася, што ${c.origin ?? 'значэнне'} павінна ${d.verb} ${b}${c.maximum.toString()} ${a}`;
                }
                return `Занадта вялікі: чакалася, што ${c.origin ?? 'значэнне'} павінна быць ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d) {
                  let a = dT(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many);
                  return `Занадта малы: чакалася, што ${c.origin} павінна ${d.verb} ${b}${c.minimum.toString()} ${a}`;
                }
                return `Занадта малы: чакалася, што ${c.origin} павінна быць ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Няправільны радок: павінен пачынацца з "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Няправільны радок: павінен заканчвацца на "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Няправільны радок: павінен змяшчаць "${c.includes}"`;
                if ('regex' === c.format)
                  return `Няправільны радок: павінен адпавядаць шаблону ${c.pattern}`;
                return `Няправільны ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Няправільны лік: павінен быць кратным ${c.divisor}`;
              case 'unrecognized_keys':
                return `Нераспазнаны ${c.keys.length > 1 ? 'ключы' : 'ключ'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Няправільны ключ у ${c.origin}`;
              case 'invalid_union':
                return 'Няправільны ўвод';
              case 'invalid_element':
                return `Няправільнае значэнне ў ${c.origin}`;
              default:
                return `Няправільны ўвод`;
            }
          };
        })(),
      };
    }
    function dV() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caràcters', verb: 'contenir' },
              file: { unit: 'bytes', verb: 'contenir' },
              array: { unit: 'elements', verb: 'contenir' },
              set: { unit: 'elements', verb: 'contenir' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Tipus inv\xe0lid: s'esperava ${c.expected}, s'ha rebut ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Valor inv\xe0lid: s'esperava ${Y(c.values[0])}`;
                return `Opci\xf3 inv\xe0lida: s'esperava una de ${v(c.values, ' o ')}`;
              case 'too_big': {
                let b = c.inclusive ? 'com a màxim' : 'menys de',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Massa gran: s'esperava que ${c.origin ?? 'el valor'} contingu\xe9s ${b} ${c.maximum.toString()} ${d.unit ?? 'elements'}`;
                return `Massa gran: s'esperava que ${c.origin ?? 'el valor'} fos ${b} ${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? 'com a mínim' : 'més de',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Massa petit: s'esperava que ${c.origin} contingu\xe9s ${b} ${c.minimum.toString()} ${d.unit}`;
                return `Massa petit: s'esperava que ${c.origin} fos ${b} ${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Format inv\xe0lid: ha de comen\xe7ar amb "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Format inv\xe0lid: ha d'acabar amb "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Format inv\xe0lid: ha d'incloure "${c.includes}"`;
                if ('regex' === c.format)
                  return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${c.pattern}`;
                return `Format inv\xe0lid per a ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Clau${c.keys.length > 1 ? 's' : ''} no reconeguda${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Clau inv\xe0lida a ${c.origin}`;
              case 'invalid_union':
                return 'Entrada invàlida';
              case 'invalid_element':
                return `Element inv\xe0lid a ${c.origin}`;
              default:
                return `Entrada inv\xe0lida`;
            }
          };
        })(),
      };
    }
    function dW() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'znaků', verb: 'mít' },
              file: { unit: 'bajtů', verb: 'mít' },
              array: { unit: 'prvků', verb: 'mít' },
              set: { unit: 'prvků', verb: 'mít' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Neplatn\xfd vstup: oček\xe1v\xe1no ${c.expected}, obdrženo ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'číslo';
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
                      if (Array.isArray(a)) return 'pole';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Neplatn\xfd vstup: oček\xe1v\xe1no ${Y(c.values[0])}`;
                return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? 'hodnota'} mus\xed m\xedt ${b}${c.maximum.toString()} ${d.unit ?? 'prvků'}`;
                return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? 'hodnota'} mus\xed b\xfdt ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? 'hodnota'} mus\xed m\xedt ${b}${c.minimum.toString()} ${d.unit ?? 'prvků'}`;
                return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? 'hodnota'} mus\xed b\xfdt ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Neplatn\xfd řetězec: mus\xed končit na "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Neplatn\xfd řetězec: mus\xed obsahovat "${c.includes}"`;
                if ('regex' === c.format)
                  return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${c.pattern}`;
                return `Neplatn\xfd form\xe1t ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${c.divisor}`;
              case 'unrecognized_keys':
                return `Nezn\xe1m\xe9 kl\xedče: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Neplatn\xfd kl\xedč v ${c.origin}`;
              case 'invalid_union':
                return 'Neplatný vstup';
              case 'invalid_element':
                return `Neplatn\xe1 hodnota v ${c.origin}`;
              default:
                return `Neplatn\xfd vstup`;
            }
          };
        })(),
      };
    }
    function dX() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'tegn', verb: 'havde' },
              file: { unit: 'bytes', verb: 'havde' },
              array: { unit: 'elementer', verb: 'indeholdt' },
              set: { unit: 'elementer', verb: 'indeholdt' },
            },
            b = {
              string: 'streng',
              number: 'tal',
              boolean: 'boolean',
              array: 'liste',
              object: 'objekt',
              set: 'sæt',
              file: 'fil',
            },
            c = {
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
          return (d) => {
            var e, f, g, h;
            switch (d.code) {
              case 'invalid_type':
                return `Ugyldigt input: forventede ${b[(e = d.expected)] ?? e}, fik ${
                  b[
                    (f = ((a) => {
                      let b = typeof a;
                      switch (b) {
                        case 'number':
                          return Number.isNaN(a) ? 'NaN' : 'tal';
                        case 'object':
                          if (Array.isArray(a)) return 'liste';
                          if (null === a) return 'null';
                          if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                            return a.constructor.name;
                          return 'objekt';
                      }
                      return b;
                    })(d.input))
                  ] ?? f
                }`;
              case 'invalid_value':
                if (1 === d.values.length) return `Ugyldig v\xe6rdi: forventede ${Y(d.values[0])}`;
                return `Ugyldigt valg: forventede en af f\xf8lgende ${v(d.values, '|')}`;
              case 'too_big': {
                let c = d.inclusive ? '<=' : '<',
                  e = a[d.origin] ?? null,
                  f = b[(g = d.origin)] ?? g;
                if (e)
                  return `For stor: forventede ${f ?? 'value'} ${e.verb} ${c} ${d.maximum.toString()} ${e.unit ?? 'elementer'}`;
                return `For stor: forventede ${f ?? 'value'} havde ${c} ${d.maximum.toString()}`;
              }
              case 'too_small': {
                let c = d.inclusive ? '>=' : '>',
                  e = a[d.origin] ?? null,
                  f = b[(h = d.origin)] ?? h;
                if (e)
                  return `For lille: forventede ${f} ${e.verb} ${c} ${d.minimum.toString()} ${e.unit}`;
                return `For lille: forventede ${f} havde ${c} ${d.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === d.format)
                  return `Ugyldig streng: skal starte med "${d.prefix}"`;
                if ('ends_with' === d.format) return `Ugyldig streng: skal ende med "${d.suffix}"`;
                if ('includes' === d.format)
                  return `Ugyldig streng: skal indeholde "${d.includes}"`;
                if ('regex' === d.format)
                  return `Ugyldig streng: skal matche m\xf8nsteret ${d.pattern}`;
                return `Ugyldig ${c[d.format] ?? d.format}`;
              case 'not_multiple_of':
                return `Ugyldigt tal: skal v\xe6re deleligt med ${d.divisor}`;
              case 'unrecognized_keys':
                return `${d.keys.length > 1 ? 'Ukendte nøgler' : 'Ukendt nøgle'}: ${v(d.keys, ', ')}`;
              case 'invalid_key':
                return `Ugyldig n\xf8gle i ${d.origin}`;
              case 'invalid_union':
                return 'Ugyldigt input: matcher ingen af de tilladte typer';
              case 'invalid_element':
                return `Ugyldig v\xe6rdi i ${d.origin}`;
              default:
                return 'Ugyldigt input';
            }
          };
        })(),
      };
    }
    function dY() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'Zeichen', verb: 'zu haben' },
              file: { unit: 'Bytes', verb: 'zu haben' },
              array: { unit: 'Elemente', verb: 'zu haben' },
              set: { unit: 'Elemente', verb: 'zu haben' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Ung\xfcltige Eingabe: erwartet ${c.expected}, erhalten ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'Zahl';
                    case 'object':
                      if (Array.isArray(a)) return 'Array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Ung\xfcltige Eingabe: erwartet ${Y(c.values[0])}`;
                return `Ung\xfcltige Option: erwartet eine von ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Zu gro\xdf: erwartet, dass ${c.origin ?? 'Wert'} ${b}${c.maximum.toString()} ${d.unit ?? 'Elemente'} hat`;
                return `Zu gro\xdf: erwartet, dass ${c.origin ?? 'Wert'} ${b}${c.maximum.toString()} ist`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ${d.unit} hat`;
                return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ist`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ung\xfcltiger String: muss mit "${c.prefix}" beginnen`;
                if ('ends_with' === c.format)
                  return `Ung\xfcltiger String: muss mit "${c.suffix}" enden`;
                if ('includes' === c.format)
                  return `Ung\xfcltiger String: muss "${c.includes}" enthalten`;
                if ('regex' === c.format)
                  return `Ung\xfcltiger String: muss dem Muster ${c.pattern} entsprechen`;
                return `Ung\xfcltig: ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Ung\xfcltige Zahl: muss ein Vielfaches von ${c.divisor} sein`;
              case 'unrecognized_keys':
                return `${c.keys.length > 1 ? 'Unbekannte Schlüssel' : 'Unbekannter Schlüssel'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Ung\xfcltiger Schl\xfcssel in ${c.origin}`;
              case 'invalid_union':
                return 'Ungültige Eingabe';
              case 'invalid_element':
                return `Ung\xfcltiger Wert in ${c.origin}`;
              default:
                return `Ung\xfcltige Eingabe`;
            }
          };
        })(),
      };
    }
    function dZ() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'karaktrojn', verb: 'havi' },
              file: { unit: 'bajtojn', verb: 'havi' },
              array: { unit: 'elementojn', verb: 'havi' },
              set: { unit: 'elementojn', verb: 'havi' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Nevalida enigo: atendiĝis ${c.expected}, riceviĝis ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'nombro';
                    case 'object':
                      if (Array.isArray(a)) return 'tabelo';
                      if (null === a) return 'senvalora';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Nevalida enigo: atendiĝis ${Y(c.values[0])}`;
                return `Nevalida opcio: atendiĝis unu el ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Tro granda: atendiĝis ke ${c.origin ?? 'valoro'} havu ${b}${c.maximum.toString()} ${d.unit ?? 'elementojn'}`;
                return `Tro granda: atendiĝis ke ${c.origin ?? 'valoro'} havu ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Tro malgranda: atendiĝis ke ${c.origin} havu ${b}${c.minimum.toString()} ${d.unit}`;
                return `Tro malgranda: atendiĝis ke ${c.origin} estu ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Nevalida karaktraro: devas komenciĝi per "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Nevalida karaktraro: devas finiĝi per "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Nevalida karaktraro: devas inkluzivi "${c.includes}"`;
                if ('regex' === c.format)
                  return `Nevalida karaktraro: devas kongrui kun la modelo ${c.pattern}`;
                return `Nevalida ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Nevalida nombro: devas esti oblo de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Nekonata${c.keys.length > 1 ? 'j' : ''} ŝlosilo${c.keys.length > 1 ? 'j' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Nevalida ŝlosilo en ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Nevalida enigo';
              case 'invalid_element':
                return `Nevalida valoro en ${c.origin}`;
            }
          };
        })(),
      };
    }
    function d$() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caracteres', verb: 'tener' },
              file: { unit: 'bytes', verb: 'tener' },
              array: { unit: 'elementos', verb: 'tener' },
              set: { unit: 'elementos', verb: 'tener' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Entrada inv\xe1lida: se esperaba ${c.expected}, recibido ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'número';
                    case 'object':
                      if (Array.isArray(a)) return 'arreglo';
                      if (null === a) return 'nulo';
                      if (Object.getPrototypeOf(a) !== Object.prototype) return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Entrada inv\xe1lida: se esperaba ${Y(c.values[0])}`;
                return `Opci\xf3n inv\xe1lida: se esperaba una de ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Demasiado grande: se esperaba que ${c.origin ?? 'valor'} tuviera ${b}${c.maximum.toString()} ${d.unit ?? 'elementos'}`;
                return `Demasiado grande: se esperaba que ${c.origin ?? 'valor'} fuera ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Demasiado peque\xf1o: se esperaba que ${c.origin} tuviera ${b}${c.minimum.toString()} ${d.unit}`;
                return `Demasiado peque\xf1o: se esperaba que ${c.origin} fuera ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Cadena inv\xe1lida: debe comenzar con "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Cadena inv\xe1lida: debe terminar en "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Cadena inv\xe1lida: debe incluir "${c.includes}"`;
                if ('regex' === c.format)
                  return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${c.pattern}`;
                return `Inv\xe1lido ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Llave${c.keys.length > 1 ? 's' : ''} desconocida${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Llave inv\xe1lida en ${c.origin}`;
              case 'invalid_union':
                return 'Entrada inválida';
              case 'invalid_element':
                return `Valor inv\xe1lido en ${c.origin}`;
              default:
                return `Entrada inv\xe1lida`;
            }
          };
        })(),
      };
    }
    function d_() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'کاراکتر', verb: 'داشته باشد' },
              file: { unit: 'بایت', verb: 'داشته باشد' },
              array: { unit: 'آیتم', verb: 'داشته باشد' },
              set: { unit: 'آیتم', verb: 'داشته باشد' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `ورودی نامعتبر: می‌بایست ${c.expected} می‌بود، ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'عدد';
                    case 'object':
                      if (Array.isArray(a)) return 'آرایه';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)} دریافت شد`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `ورودی نامعتبر: می‌بایست ${Y(c.values[0])} می‌بود`;
                return `گزینه نامعتبر: می‌بایست یکی از ${v(c.values, '|')} می‌بود`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `خیلی بزرگ: ${c.origin ?? 'مقدار'} باید ${b}${c.maximum.toString()} ${d.unit ?? 'عنصر'} باشد`;
                return `خیلی بزرگ: ${c.origin ?? 'مقدار'} باید ${b}${c.maximum.toString()} باشد`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} باشد`;
                return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} باشد`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `رشته نامعتبر: باید با "${c.prefix}" شروع شود`;
                if ('ends_with' === c.format) return `رشته نامعتبر: باید با "${c.suffix}" تمام شود`;
                if ('includes' === c.format) return `رشته نامعتبر: باید شامل "${c.includes}" باشد`;
                if ('regex' === c.format)
                  return `رشته نامعتبر: باید با الگوی ${c.pattern} مطابقت داشته باشد`;
                return `${b[c.format] ?? c.format} نامعتبر`;
              case 'not_multiple_of':
                return `عدد نامعتبر: باید مضرب ${c.divisor} باشد`;
              case 'unrecognized_keys':
                return `کلید${c.keys.length > 1 ? 'های' : ''} ناشناس: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `کلید ناشناس در ${c.origin}`;
              case 'invalid_union':
              default:
                return `ورودی نامعتبر`;
              case 'invalid_element':
                return `مقدار نامعتبر در ${c.origin}`;
            }
          };
        })(),
      };
    }
    function d0() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'merkkiä', subject: 'merkkijonon' },
              file: { unit: 'tavua', subject: 'tiedoston' },
              array: { unit: 'alkiota', subject: 'listan' },
              set: { unit: 'alkiota', subject: 'joukon' },
              number: { unit: '', subject: 'luvun' },
              bigint: { unit: '', subject: 'suuren kokonaisluvun' },
              int: { unit: '', subject: 'kokonaisluvun' },
              date: { unit: '', subject: 'päivämäärän' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Virheellinen tyyppi: odotettiin ${c.expected}, oli ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Virheellinen sy\xf6te: t\xe4ytyy olla ${Y(c.values[0])}`;
                return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Liian suuri: ${d.subject} t\xe4ytyy olla ${b}${c.maximum.toString()} ${d.unit}`.trim();
                return `Liian suuri: arvon t\xe4ytyy olla ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Liian pieni: ${d.subject} t\xe4ytyy olla ${b}${c.minimum.toString()} ${d.unit}`.trim();
                return `Liian pieni: arvon t\xe4ytyy olla ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${c.includes}"`;
                if ('regex' === c.format)
                  return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${c.pattern}`;
                return `Virheellinen ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Virheellinen luku: t\xe4ytyy olla luvun ${c.divisor} monikerta`;
              case 'unrecognized_keys':
                return `${c.keys.length > 1 ? 'Tuntemattomat avaimet' : 'Tuntematon avain'}: ${v(c.keys, ', ')}`;
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
    function d1() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caractères', verb: 'avoir' },
              file: { unit: 'octets', verb: 'avoir' },
              array: { unit: 'éléments', verb: 'avoir' },
              set: { unit: 'éléments', verb: 'avoir' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Entr\xe9e invalide : ${c.expected} attendu, ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'nombre';
                    case 'object':
                      if (Array.isArray(a)) return 'tableau';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)} re\xe7u`;
              case 'invalid_value':
                if (1 === c.values.length) return `Entr\xe9e invalide : ${Y(c.values[0])} attendu`;
                return `Option invalide : une valeur parmi ${v(c.values, '|')} attendue`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Trop grand : ${c.origin ?? 'valeur'} doit ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? 'élément(s)'}`;
                return `Trop grand : ${c.origin ?? 'valeur'} doit \xeatre ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Trop petit : ${c.origin} doit ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`;
                return `Trop petit : ${c.origin} doit \xeatre ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Cha\xeene invalide : doit commencer par "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Cha\xeene invalide : doit inclure "${c.includes}"`;
                if ('regex' === c.format)
                  return `Cha\xeene invalide : doit correspondre au mod\xe8le ${c.pattern}`;
                return `${b[c.format] ?? c.format} invalide`;
              case 'not_multiple_of':
                return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Cl\xe9${c.keys.length > 1 ? 's' : ''} non reconnue${c.keys.length > 1 ? 's' : ''} : ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Cl\xe9 invalide dans ${c.origin}`;
              case 'invalid_union':
                return 'Entrée invalide';
              case 'invalid_element':
                return `Valeur invalide dans ${c.origin}`;
              default:
                return `Entr\xe9e invalide`;
            }
          };
        })(),
      };
    }
    function d2() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caractères', verb: 'avoir' },
              file: { unit: 'octets', verb: 'avoir' },
              array: { unit: 'éléments', verb: 'avoir' },
              set: { unit: 'éléments', verb: 'avoir' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Entr\xe9e invalide : attendu ${c.expected}, re\xe7u ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Entr\xe9e invalide : attendu ${Y(c.values[0])}`;
                return `Option invalide : attendu l'une des valeurs suivantes ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '≤' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Trop grand : attendu que ${c.origin ?? 'la valeur'} ait ${b}${c.maximum.toString()} ${d.unit}`;
                return `Trop grand : attendu que ${c.origin ?? 'la valeur'} soit ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '≥' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Trop petit : attendu que ${c.origin} ait ${b}${c.minimum.toString()} ${d.unit}`;
                return `Trop petit : attendu que ${c.origin} soit ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Cha\xeene invalide : doit commencer par "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Cha\xeene invalide : doit inclure "${c.includes}"`;
                if ('regex' === c.format)
                  return `Cha\xeene invalide : doit correspondre au motif ${c.pattern}`;
                return `${b[c.format] ?? c.format} invalide`;
              case 'not_multiple_of':
                return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Cl\xe9${c.keys.length > 1 ? 's' : ''} non reconnue${c.keys.length > 1 ? 's' : ''} : ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Cl\xe9 invalide dans ${c.origin}`;
              case 'invalid_union':
                return 'Entrée invalide';
              case 'invalid_element':
                return `Valeur invalide dans ${c.origin}`;
              default:
                return `Entr\xe9e invalide`;
            }
          };
        })(),
      };
    }
    function d3() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'אותיות', verb: 'לכלול' },
              file: { unit: 'בייטים', verb: 'לכלול' },
              array: { unit: 'פריטים', verb: 'לכלול' },
              set: { unit: 'פריטים', verb: 'לכלול' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `קלט לא תקין: צריך ${c.expected}, התקבל ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `קלט לא תקין: צריך ${Y(c.values[0])}`;
                return `קלט לא תקין: צריך אחת מהאפשרויות  ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `גדול מדי: ${c.origin ?? 'value'} צריך להיות ${b}${c.maximum.toString()} ${d.unit ?? 'elements'}`;
                return `גדול מדי: ${c.origin ?? 'value'} צריך להיות ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()} ${d.unit}`;
                return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `מחרוזת לא תקינה: חייבת להתחיל ב"${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `מחרוזת לא תקינה: חייבת להסתיים ב "${c.suffix}"`;
                if ('includes' === c.format) return `מחרוזת לא תקינה: חייבת לכלול "${c.includes}"`;
                if ('regex' === c.format)
                  return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${c.pattern}`;
                return `${b[c.format] ?? c.format} לא תקין`;
              case 'not_multiple_of':
                return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`;
              case 'unrecognized_keys':
                return `מפתח${c.keys.length > 1 ? 'ות' : ''} לא מזוה${c.keys.length > 1 ? 'ים' : 'ה'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `מפתח לא תקין ב${c.origin}`;
              case 'invalid_union':
                return 'קלט לא תקין';
              case 'invalid_element':
                return `ערך לא תקין ב${c.origin}`;
              default:
                return `קלט לא תקין`;
            }
          };
        })(),
      };
    }
    function d4() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'karakter', verb: 'legyen' },
              file: { unit: 'byte', verb: 'legyen' },
              array: { unit: 'elem', verb: 'legyen' },
              set: { unit: 'elem', verb: 'legyen' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${c.expected}, a kapott \xe9rt\xe9k ${((
                  a
                ) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'szám';
                    case 'object':
                      if (Array.isArray(a)) return 'tömb';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${Y(c.values[0])}`;
                return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `T\xfal nagy: ${c.origin ?? 'érték'} m\xe9rete t\xfal nagy ${b}${c.maximum.toString()} ${d.unit ?? 'elem'}`;
                return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${c.origin ?? 'érték'} t\xfal nagy: ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} m\xe9rete t\xfal kicsi ${b}${c.minimum.toString()} ${d.unit}`;
                return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} t\xfal kicsi ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `\xc9rv\xe9nytelen string: "${c.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
                if ('ends_with' === c.format)
                  return `\xc9rv\xe9nytelen string: "${c.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
                if ('includes' === c.format)
                  return `\xc9rv\xe9nytelen string: "${c.includes}" \xe9rt\xe9ket kell tartalmaznia`;
                if ('regex' === c.format)
                  return `\xc9rv\xe9nytelen string: ${c.pattern} mint\xe1nak kell megfelelnie`;
                return `\xc9rv\xe9nytelen ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `\xc9rv\xe9nytelen sz\xe1m: ${c.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
              case 'unrecognized_keys':
                return `Ismeretlen kulcs${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `\xc9rv\xe9nytelen kulcs ${c.origin}`;
              case 'invalid_union':
                return 'Érvénytelen bemenet';
              case 'invalid_element':
                return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${c.origin}`;
              default:
                return `\xc9rv\xe9nytelen bemenet`;
            }
          };
        })(),
      };
    }
    function d5() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'karakter', verb: 'memiliki' },
              file: { unit: 'byte', verb: 'memiliki' },
              array: { unit: 'item', verb: 'memiliki' },
              set: { unit: 'item', verb: 'memiliki' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Input tidak valid: diharapkan ${c.expected}, diterima ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Input tidak valid: diharapkan ${Y(c.values[0])}`;
                return `Pilihan tidak valid: diharapkan salah satu dari ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Terlalu besar: diharapkan ${c.origin ?? 'value'} memiliki ${b}${c.maximum.toString()} ${d.unit ?? 'elemen'}`;
                return `Terlalu besar: diharapkan ${c.origin ?? 'value'} menjadi ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Terlalu kecil: diharapkan ${c.origin} memiliki ${b}${c.minimum.toString()} ${d.unit}`;
                return `Terlalu kecil: diharapkan ${c.origin} menjadi ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `String tidak valid: harus dimulai dengan "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `String tidak valid: harus berakhir dengan "${c.suffix}"`;
                if ('includes' === c.format)
                  return `String tidak valid: harus menyertakan "${c.includes}"`;
                if ('regex' === c.format)
                  return `String tidak valid: harus sesuai pola ${c.pattern}`;
                return `${b[c.format] ?? c.format} tidak valid`;
              case 'not_multiple_of':
                return `Angka tidak valid: harus kelipatan dari ${c.divisor}`;
              case 'unrecognized_keys':
                return `Kunci tidak dikenali ${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Kunci tidak valid di ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Input tidak valid';
              case 'invalid_element':
                return `Nilai tidak valid di ${c.origin}`;
            }
          };
        })(),
      };
    }
    function d6() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'stafi', verb: 'að hafa' },
              file: { unit: 'bæti', verb: 'að hafa' },
              array: { unit: 'hluti', verb: 'að hafa' },
              set: { unit: 'hluti', verb: 'að hafa' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Rangt gildi: \xde\xfa sl\xf3st inn ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'númer';
                    case 'object':
                      if (Array.isArray(a)) return 'fylki';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)} \xfear sem \xe1 a\xf0 vera ${c.expected}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Rangt gildi: gert r\xe1\xf0 fyrir ${Y(c.values[0])}`;
                return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${c.origin ?? 'gildi'} hafi ${b}${c.maximum.toString()} ${d.unit ?? 'hluti'}`;
                return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${c.origin ?? 'gildi'} s\xe9 ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${c.origin} hafi ${b}${c.minimum.toString()} ${d.unit}`;
                return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${c.origin} s\xe9 ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${c.suffix}"`;
                if ('includes' === c.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${c.includes}"`;
                if ('regex' === c.format)
                  return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${c.pattern}`;
                return `Rangt ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${c.divisor}`;
              case 'unrecognized_keys':
                return `\xd3\xfeekkt ${c.keys.length > 1 ? 'ir lyklar' : 'ur lykill'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Rangur lykill \xed ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Rangt gildi';
              case 'invalid_element':
                return `Rangt gildi \xed ${c.origin}`;
            }
          };
        })(),
      };
    }
    function d7() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caratteri', verb: 'avere' },
              file: { unit: 'byte', verb: 'avere' },
              array: { unit: 'elementi', verb: 'avere' },
              set: { unit: 'elementi', verb: 'avere' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Input non valido: atteso ${c.expected}, ricevuto ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'numero';
                    case 'object':
                      if (Array.isArray(a)) return 'vettore';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Input non valido: atteso ${Y(c.values[0])}`;
                return `Opzione non valida: atteso uno tra ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Troppo grande: ${c.origin ?? 'valore'} deve avere ${b}${c.maximum.toString()} ${d.unit ?? 'elementi'}`;
                return `Troppo grande: ${c.origin ?? 'valore'} deve essere ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Troppo piccolo: ${c.origin} deve avere ${b}${c.minimum.toString()} ${d.unit}`;
                return `Troppo piccolo: ${c.origin} deve essere ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Stringa non valida: deve iniziare con "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Stringa non valida: deve terminare con "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Stringa non valida: deve includere "${c.includes}"`;
                if ('regex' === c.format)
                  return `Stringa non valida: deve corrispondere al pattern ${c.pattern}`;
                return `Invalid ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Numero non valido: deve essere un multiplo di ${c.divisor}`;
              case 'unrecognized_keys':
                return `Chiav${c.keys.length > 1 ? 'i' : 'e'} non riconosciut${c.keys.length > 1 ? 'e' : 'a'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Chiave non valida in ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Input non valido';
              case 'invalid_element':
                return `Valore non valido in ${c.origin}`;
            }
          };
        })(),
      };
    }
    function d8() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: '文字', verb: 'である' },
              file: { unit: 'バイト', verb: 'である' },
              array: { unit: '要素', verb: 'である' },
              set: { unit: '要素', verb: 'である' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `無効な入力: ${c.expected}が期待されましたが、${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : '数値';
                    case 'object':
                      if (Array.isArray(a)) return '配列';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}が入力されました`;
              case 'invalid_value':
                if (1 === c.values.length) return `無効な入力: ${Y(c.values[0])}が期待されました`;
                return `無効な選択: ${v(c.values, '、')}のいずれかである必要があります`;
              case 'too_big': {
                let b = c.inclusive ? '以下である' : 'より小さい',
                  d = a[c.origin] ?? null;
                if (d)
                  return `大きすぎる値: ${c.origin ?? '値'}は${c.maximum.toString()}${d.unit ?? '要素'}${b}必要があります`;
                return `大きすぎる値: ${c.origin ?? '値'}は${c.maximum.toString()}${b}必要があります`;
              }
              case 'too_small': {
                let b = c.inclusive ? '以上である' : 'より大きい',
                  d = a[c.origin] ?? null;
                if (d)
                  return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${d.unit}${b}必要があります`;
                return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${b}必要があります`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `無効な文字列: "${c.prefix}"で始まる必要があります`;
                if ('ends_with' === c.format)
                  return `無効な文字列: "${c.suffix}"で終わる必要があります`;
                if ('includes' === c.format)
                  return `無効な文字列: "${c.includes}"を含む必要があります`;
                if ('regex' === c.format)
                  return `無効な文字列: パターン${c.pattern}に一致する必要があります`;
                return `無効な${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `無効な数値: ${c.divisor}の倍数である必要があります`;
              case 'unrecognized_keys':
                return `認識されていないキー${c.keys.length > 1 ? '群' : ''}: ${v(c.keys, '、')}`;
              case 'invalid_key':
                return `${c.origin}内の無効なキー`;
              case 'invalid_union':
                return '無効な入力';
              case 'invalid_element':
                return `${c.origin}内の無効な値`;
              default:
                return `無効な入力`;
            }
          };
        })(),
      };
    }
    function d9() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'តួអក្សរ', verb: 'គួរមាន' },
              file: { unit: 'បៃ', verb: 'គួរមាន' },
              array: { unit: 'ធាតុ', verb: 'គួរមាន' },
              set: { unit: 'ធាតុ', verb: 'គួរមាន' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${c.expected} ប៉ុន្តែទទួលបាន ${((
                  a
                ) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'មិនមែនជាលេខ (NaN)' : 'លេខ';
                    case 'object':
                      if (Array.isArray(a)) return 'អារេ (Array)';
                      if (null === a) return 'គ្មានតម្លៃ (null)';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${Y(c.values[0])}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `ធំពេក៖ ត្រូវការ ${c.origin ?? 'តម្លៃ'} ${b} ${c.maximum.toString()} ${d.unit ?? 'ធាតុ'}`;
                return `ធំពេក៖ ត្រូវការ ${c.origin ?? 'តម្លៃ'} ${b} ${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d) return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()} ${d.unit}`;
                return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${c.suffix}"`;
                if ('includes' === c.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${c.includes}"`;
                if ('regex' === c.format)
                  return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${c.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${c.divisor}`;
              case 'unrecognized_keys':
                return `រកឃើញសោមិនស្គាល់៖ ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`;
              case 'invalid_union':
              default:
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
              case 'invalid_element':
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`;
            }
          };
        })(),
      };
    }
    function ea() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: '문자', verb: 'to have' },
              file: { unit: '바이트', verb: 'to have' },
              array: { unit: '개', verb: 'to have' },
              set: { unit: '개', verb: 'to have' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `잘못된 입력: 예상 타입은 ${c.expected}, 받은 타입은 ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}입니다`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `잘못된 입력: 값은 ${Y(c.values[0])} 이어야 합니다`;
                return `잘못된 옵션: ${v(c.values, '또는 ')} 중 하나여야 합니다`;
              case 'too_big': {
                let b = c.inclusive ? '이하' : '미만',
                  d = '미만' === b ? '이어야 합니다' : '여야 합니다',
                  e = a[c.origin] ?? null,
                  f = e?.unit ?? '요소';
                if (e)
                  return `${c.origin ?? '값'}이 너무 큽니다: ${c.maximum.toString()}${f} ${b}${d}`;
                return `${c.origin ?? '값'}이 너무 큽니다: ${c.maximum.toString()} ${b}${d}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '이상' : '초과',
                  d = '이상' === b ? '이어야 합니다' : '여야 합니다',
                  e = a[c.origin] ?? null,
                  f = e?.unit ?? '요소';
                if (e)
                  return `${c.origin ?? '값'}이 너무 작습니다: ${c.minimum.toString()}${f} ${b}${d}`;
                return `${c.origin ?? '값'}이 너무 작습니다: ${c.minimum.toString()} ${b}${d}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `잘못된 문자열: "${c.prefix}"(으)로 시작해야 합니다`;
                if ('ends_with' === c.format)
                  return `잘못된 문자열: "${c.suffix}"(으)로 끝나야 합니다`;
                if ('includes' === c.format)
                  return `잘못된 문자열: "${c.includes}"을(를) 포함해야 합니다`;
                if ('regex' === c.format)
                  return `잘못된 문자열: 정규식 ${c.pattern} 패턴과 일치해야 합니다`;
                return `잘못된 ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `잘못된 숫자: ${c.divisor}의 배수여야 합니다`;
              case 'unrecognized_keys':
                return `인식할 수 없는 키: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `잘못된 키: ${c.origin}`;
              case 'invalid_union':
              default:
                return `잘못된 입력`;
              case 'invalid_element':
                return `잘못된 값: ${c.origin}`;
            }
          };
        })(),
      };
    }
    function eb() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'знаци', verb: 'да имаат' },
              file: { unit: 'бајти', verb: 'да имаат' },
              array: { unit: 'ставки', verb: 'да имаат' },
              set: { unit: 'ставки', verb: 'да имаат' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Грешен внес: се очекува ${c.expected}, примено ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'број';
                    case 'object':
                      if (Array.isArray(a)) return 'низа';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Invalid input: expected ${Y(c.values[0])}`;
                return `Грешана опција: се очекува една ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Премногу голем: се очекува ${c.origin ?? 'вредноста'} да има ${b}${c.maximum.toString()} ${d.unit ?? 'елементи'}`;
                return `Премногу голем: се очекува ${c.origin ?? 'вредноста'} да биде ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Премногу мал: се очекува ${c.origin} да има ${b}${c.minimum.toString()} ${d.unit}`;
                return `Премногу мал: се очекува ${c.origin} да биде ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Неважечка низа: мора да започнува со "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Неважечка низа: мора да завршува со "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Неважечка низа: мора да вклучува "${c.includes}"`;
                if ('regex' === c.format)
                  return `Неважечка низа: мора да одгоара на патернот ${c.pattern}`;
                return `Invalid ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Грешен број: мора да биде делив со ${c.divisor}`;
              case 'unrecognized_keys':
                return `${c.keys.length > 1 ? 'Непрепознаени клучеви' : 'Непрепознаен клуч'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Грешен клуч во ${c.origin}`;
              case 'invalid_union':
                return 'Грешен внес';
              case 'invalid_element':
                return `Грешна вредност во ${c.origin}`;
              default:
                return `Грешен внес`;
            }
          };
        })(),
      };
    }
    function ec() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'aksara', verb: 'mempunyai' },
              file: { unit: 'bait', verb: 'mempunyai' },
              array: { unit: 'elemen', verb: 'mempunyai' },
              set: { unit: 'elemen', verb: 'mempunyai' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Input tidak sah: dijangka ${c.expected}, diterima ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'nombor';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Input tidak sah: dijangka ${Y(c.values[0])}`;
                return `Pilihan tidak sah: dijangka salah satu daripada ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Terlalu besar: dijangka ${c.origin ?? 'nilai'} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? 'elemen'}`;
                return `Terlalu besar: dijangka ${c.origin ?? 'nilai'} adalah ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Terlalu kecil: dijangka ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`;
                return `Terlalu kecil: dijangka ${c.origin} adalah ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `String tidak sah: mesti bermula dengan "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `String tidak sah: mesti berakhir dengan "${c.suffix}"`;
                if ('includes' === c.format)
                  return `String tidak sah: mesti mengandungi "${c.includes}"`;
                if ('regex' === c.format)
                  return `String tidak sah: mesti sepadan dengan corak ${c.pattern}`;
                return `${b[c.format] ?? c.format} tidak sah`;
              case 'not_multiple_of':
                return `Nombor tidak sah: perlu gandaan ${c.divisor}`;
              case 'unrecognized_keys':
                return `Kunci tidak dikenali: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Kunci tidak sah dalam ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Input tidak sah';
              case 'invalid_element':
                return `Nilai tidak sah dalam ${c.origin}`;
            }
          };
        })(),
      };
    }
    function ed() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'tekens' },
              file: { unit: 'bytes' },
              array: { unit: 'elementen' },
              set: { unit: 'elementen' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Ongeldige invoer: verwacht ${c.expected}, ontving ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'getal';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Ongeldige invoer: verwacht ${Y(c.values[0])}`;
                return `Ongeldige optie: verwacht \xe9\xe9n van ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Te lang: verwacht dat ${c.origin ?? 'waarde'} ${b}${c.maximum.toString()} ${d.unit ?? 'elementen'} bevat`;
                return `Te lang: verwacht dat ${c.origin ?? 'waarde'} ${b}${c.maximum.toString()} is`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} ${d.unit} bevat`;
                return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} is`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ongeldige tekst: moet met "${c.prefix}" beginnen`;
                if ('ends_with' === c.format)
                  return `Ongeldige tekst: moet op "${c.suffix}" eindigen`;
                if ('includes' === c.format)
                  return `Ongeldige tekst: moet "${c.includes}" bevatten`;
                if ('regex' === c.format)
                  return `Ongeldige tekst: moet overeenkomen met patroon ${c.pattern}`;
                return `Ongeldig: ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Ongeldig getal: moet een veelvoud van ${c.divisor} zijn`;
              case 'unrecognized_keys':
                return `Onbekende key${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Ongeldige key in ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Ongeldige invoer';
              case 'invalid_element':
                return `Ongeldige waarde in ${c.origin}`;
            }
          };
        })(),
      };
    }
    function ee() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'tegn', verb: 'å ha' },
              file: { unit: 'bytes', verb: 'å ha' },
              array: { unit: 'elementer', verb: 'å inneholde' },
              set: { unit: 'elementer', verb: 'å inneholde' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Ugyldig input: forventet ${c.expected}, fikk ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'tall';
                    case 'object':
                      if (Array.isArray(a)) return 'liste';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Ugyldig verdi: forventet ${Y(c.values[0])}`;
                return `Ugyldig valg: forventet en av ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `For stor(t): forventet ${c.origin ?? 'value'} til \xe5 ha ${b}${c.maximum.toString()} ${d.unit ?? 'elementer'}`;
                return `For stor(t): forventet ${c.origin ?? 'value'} til \xe5 ha ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()} ${d.unit}`;
                return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ugyldig streng: m\xe5 starte med "${c.prefix}"`;
                if ('ends_with' === c.format) return `Ugyldig streng: m\xe5 ende med "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Ugyldig streng: m\xe5 inneholde "${c.includes}"`;
                if ('regex' === c.format)
                  return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${c.pattern}`;
                return `Ugyldig ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${c.divisor}`;
              case 'unrecognized_keys':
                return `${c.keys.length > 1 ? 'Ukjente nøkler' : 'Ukjent nøkkel'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Ugyldig n\xf8kkel i ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Ugyldig input';
              case 'invalid_element':
                return `Ugyldig verdi i ${c.origin}`;
            }
          };
        })(),
      };
    }
    function ef() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'harf', verb: 'olmalıdır' },
              file: { unit: 'bayt', verb: 'olmalıdır' },
              array: { unit: 'unsur', verb: 'olmalıdır' },
              set: { unit: 'unsur', verb: 'olmalıdır' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `F\xe2sit giren: umulan ${c.expected}, alınan ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'numara';
                    case 'object':
                      if (Array.isArray(a)) return 'saf';
                      if (null === a) return 'gayb';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `F\xe2sit giren: umulan ${Y(c.values[0])}`;
                return `F\xe2sit tercih: m\xfbteberler ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Fazla b\xfcy\xfck: ${c.origin ?? 'value'}, ${b}${c.maximum.toString()} ${d.unit ?? 'elements'} sahip olmalıydı.`;
                return `Fazla b\xfcy\xfck: ${c.origin ?? 'value'}, ${b}${c.maximum.toString()} olmalıydı.`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} ${d.unit} sahip olmalıydı.`;
                return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} olmalıydı.`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `F\xe2sit metin: "${c.prefix}" ile başlamalı.`;
                if ('ends_with' === c.format) return `F\xe2sit metin: "${c.suffix}" ile bitmeli.`;
                if ('includes' === c.format)
                  return `F\xe2sit metin: "${c.includes}" ihtiv\xe2 etmeli.`;
                if ('regex' === c.format) return `F\xe2sit metin: ${c.pattern} nakşına uymalı.`;
                return `F\xe2sit ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `F\xe2sit sayı: ${c.divisor} katı olmalıydı.`;
              case 'unrecognized_keys':
                return `Tanınmayan anahtar ${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `${c.origin} i\xe7in tanınmayan anahtar var.`;
              case 'invalid_union':
                return 'Giren tanınamadı.';
              case 'invalid_element':
                return `${c.origin} i\xe7in tanınmayan kıymet var.`;
              default:
                return `Kıymet tanınamadı.`;
            }
          };
        })(),
      };
    }
    function eg() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'توکي', verb: 'ولري' },
              file: { unit: 'بایټس', verb: 'ولري' },
              array: { unit: 'توکي', verb: 'ولري' },
              set: { unit: 'توکي', verb: 'ولري' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `ناسم ورودي: باید ${c.expected} وای, مګر ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'عدد';
                    case 'object':
                      if (Array.isArray(a)) return 'ارې';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)} ترلاسه شو`;
              case 'invalid_value':
                if (1 === c.values.length) return `ناسم ورودي: باید ${Y(c.values[0])} وای`;
                return `ناسم انتخاب: باید یو له ${v(c.values, '|')} څخه وای`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `ډیر لوی: ${c.origin ?? 'ارزښت'} باید ${b}${c.maximum.toString()} ${d.unit ?? 'عنصرونه'} ولري`;
                return `ډیر لوی: ${c.origin ?? 'ارزښت'} باید ${b}${c.maximum.toString()} وي`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} ولري`;
                return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} وي`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format) return `ناسم متن: باید د "${c.prefix}" سره پیل شي`;
                if ('ends_with' === c.format)
                  return `ناسم متن: باید د "${c.suffix}" سره پای ته ورسيږي`;
                if ('includes' === c.format) return `ناسم متن: باید "${c.includes}" ولري`;
                if ('regex' === c.format) return `ناسم متن: باید د ${c.pattern} سره مطابقت ولري`;
                return `${b[c.format] ?? c.format} ناسم دی`;
              case 'not_multiple_of':
                return `ناسم عدد: باید د ${c.divisor} مضرب وي`;
              case 'unrecognized_keys':
                return `ناسم ${c.keys.length > 1 ? 'کلیډونه' : 'کلیډ'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `ناسم کلیډ په ${c.origin} کې`;
              case 'invalid_union':
              default:
                return `ناسمه ورودي`;
              case 'invalid_element':
                return `ناسم عنصر په ${c.origin} کې`;
            }
          };
        })(),
      };
    }
    function eh() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'znaków', verb: 'mieć' },
              file: { unit: 'bajtów', verb: 'mieć' },
              array: { unit: 'elementów', verb: 'mieć' },
              set: { unit: 'elementów', verb: 'mieć' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Nieprawidłowe dane wejściowe: oczekiwano ${c.expected}, otrzymano ${((
                  a
                ) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'liczba';
                    case 'object':
                      if (Array.isArray(a)) return 'tablica';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Nieprawidłowe dane wejściowe: oczekiwano ${Y(c.values[0])}`;
                return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Za duża wartość: oczekiwano, że ${c.origin ?? 'wartość'} będzie mieć ${b}${c.maximum.toString()} ${d.unit ?? 'elementów'}`;
                return `Zbyt duż(y/a/e): oczekiwano, że ${c.origin ?? 'wartość'} będzie wynosić ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Za mała wartość: oczekiwano, że ${c.origin ?? 'wartość'} będzie mieć ${b}${c.minimum.toString()} ${d.unit ?? 'elementów'}`;
                return `Zbyt mał(y/a/e): oczekiwano, że ${c.origin ?? 'wartość'} będzie wynosić ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${c.includes}"`;
                if ('regex' === c.format)
                  return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${c.pattern}`;
                return `Nieprawidłow(y/a/e) ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Nieprawidłowa liczba: musi być wielokrotnością ${c.divisor}`;
              case 'unrecognized_keys':
                return `Nierozpoznane klucze${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Nieprawidłowy klucz w ${c.origin}`;
              case 'invalid_union':
                return 'Nieprawidłowe dane wejściowe';
              case 'invalid_element':
                return `Nieprawidłowa wartość w ${c.origin}`;
              default:
                return `Nieprawidłowe dane wejściowe`;
            }
          };
        })(),
      };
    }
    function ei() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'caracteres', verb: 'ter' },
              file: { unit: 'bytes', verb: 'ter' },
              array: { unit: 'itens', verb: 'ter' },
              set: { unit: 'itens', verb: 'ter' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Tipo inv\xe1lido: esperado ${c.expected}, recebido ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'número';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'nulo';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Entrada inv\xe1lida: esperado ${Y(c.values[0])}`;
                return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Muito grande: esperado que ${c.origin ?? 'valor'} tivesse ${b}${c.maximum.toString()} ${d.unit ?? 'elementos'}`;
                return `Muito grande: esperado que ${c.origin ?? 'valor'} fosse ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Muito pequeno: esperado que ${c.origin} tivesse ${b}${c.minimum.toString()} ${d.unit}`;
                return `Muito pequeno: esperado que ${c.origin} fosse ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Texto inv\xe1lido: deve come\xe7ar com "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Texto inv\xe1lido: deve terminar com "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Texto inv\xe1lido: deve incluir "${c.includes}"`;
                if ('regex' === c.format)
                  return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${c.pattern}`;
                return `${b[c.format] ?? c.format} inv\xe1lido`;
              case 'not_multiple_of':
                return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${c.divisor}`;
              case 'unrecognized_keys':
                return `Chave${c.keys.length > 1 ? 's' : ''} desconhecida${c.keys.length > 1 ? 's' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Chave inv\xe1lida em ${c.origin}`;
              case 'invalid_union':
                return 'Entrada inválida';
              case 'invalid_element':
                return `Valor inv\xe1lido em ${c.origin}`;
              default:
                return `Campo inv\xe1lido`;
            }
          };
        })(),
      };
    }
    function ej(a, b, c, d) {
      let e = Math.abs(a),
        f = e % 10,
        g = e % 100;
      return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d;
    }
    function ek() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: { one: 'символ', few: 'символа', many: 'символов' }, verb: 'иметь' },
              file: { unit: { one: 'байт', few: 'байта', many: 'байт' }, verb: 'иметь' },
              array: {
                unit: { one: 'элемент', few: 'элемента', many: 'элементов' },
                verb: 'иметь',
              },
              set: { unit: { one: 'элемент', few: 'элемента', many: 'элементов' }, verb: 'иметь' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Неверный ввод: ожидалось ${c.expected}, получено ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'число';
                    case 'object':
                      if (Array.isArray(a)) return 'массив';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Неверный ввод: ожидалось ${Y(c.values[0])}`;
                return `Неверный вариант: ожидалось одно из ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d) {
                  let a = ej(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many);
                  return `Слишком большое значение: ожидалось, что ${c.origin ?? 'значение'} будет иметь ${b}${c.maximum.toString()} ${a}`;
                }
                return `Слишком большое значение: ожидалось, что ${c.origin ?? 'значение'} будет ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d) {
                  let a = ej(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many);
                  return `Слишком маленькое значение: ожидалось, что ${c.origin} будет иметь ${b}${c.minimum.toString()} ${a}`;
                }
                return `Слишком маленькое значение: ожидалось, что ${c.origin} будет ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Неверная строка: должна начинаться с "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Неверная строка: должна заканчиваться на "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Неверная строка: должна содержать "${c.includes}"`;
                if ('regex' === c.format)
                  return `Неверная строка: должна соответствовать шаблону ${c.pattern}`;
                return `Неверный ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Неверное число: должно быть кратным ${c.divisor}`;
              case 'unrecognized_keys':
                return `Нераспознанн${c.keys.length > 1 ? 'ые' : 'ый'} ключ${c.keys.length > 1 ? 'и' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Неверный ключ в ${c.origin}`;
              case 'invalid_union':
                return 'Неверные входные данные';
              case 'invalid_element':
                return `Неверное значение в ${c.origin}`;
              default:
                return `Неверные входные данные`;
            }
          };
        })(),
      };
    }
    function el() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'znakov', verb: 'imeti' },
              file: { unit: 'bajtov', verb: 'imeti' },
              array: { unit: 'elementov', verb: 'imeti' },
              set: { unit: 'elementov', verb: 'imeti' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Neveljaven vnos: pričakovano ${c.expected}, prejeto ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'število';
                    case 'object':
                      if (Array.isArray(a)) return 'tabela';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Neveljaven vnos: pričakovano ${Y(c.values[0])}`;
                return `Neveljavna možnost: pričakovano eno izmed ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Preveliko: pričakovano, da bo ${c.origin ?? 'vrednost'} imelo ${b}${c.maximum.toString()} ${d.unit ?? 'elementov'}`;
                return `Preveliko: pričakovano, da bo ${c.origin ?? 'vrednost'} ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Premajhno: pričakovano, da bo ${c.origin} imelo ${b}${c.minimum.toString()} ${d.unit}`;
                return `Premajhno: pričakovano, da bo ${c.origin} ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Neveljaven niz: mora se začeti z "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Neveljaven niz: mora se končati z "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Neveljaven niz: mora vsebovati "${c.includes}"`;
                if ('regex' === c.format)
                  return `Neveljaven niz: mora ustrezati vzorcu ${c.pattern}`;
                return `Neveljaven ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Neveljavno število: mora biti večkratnik ${c.divisor}`;
              case 'unrecognized_keys':
                return `Neprepoznan${c.keys.length > 1 ? 'i ključi' : ' ključ'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Neveljaven ključ v ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Neveljaven vnos';
              case 'invalid_element':
                return `Neveljavna vrednost v ${c.origin}`;
            }
          };
        })(),
      };
    }
    function em() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'tecken', verb: 'att ha' },
              file: { unit: 'bytes', verb: 'att ha' },
              array: { unit: 'objekt', verb: 'att innehålla' },
              set: { unit: 'objekt', verb: 'att innehålla' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Ogiltig inmatning: f\xf6rv\xe4ntat ${c.expected}, fick ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'antal';
                    case 'object':
                      if (Array.isArray(a)) return 'lista';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Ogiltig inmatning: f\xf6rv\xe4ntat ${Y(c.values[0])}`;
                return `Ogiltigt val: f\xf6rv\xe4ntade en av ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `F\xf6r stor(t): f\xf6rv\xe4ntade ${c.origin ?? 'värdet'} att ha ${b}${c.maximum.toString()} ${d.unit ?? 'element'}`;
                return `F\xf6r stor(t): f\xf6rv\xe4ntat ${c.origin ?? 'värdet'} att ha ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? 'värdet'} att ha ${b}${c.minimum.toString()} ${d.unit}`;
                return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? 'värdet'} att ha ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Ogiltig str\xe4ng: m\xe5ste sluta med "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${c.includes}"`;
                if ('regex' === c.format)
                  return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${c.pattern}"`;
                return `Ogiltig(t) ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Ogiltigt tal: m\xe5ste vara en multipel av ${c.divisor}`;
              case 'unrecognized_keys':
                return `${c.keys.length > 1 ? 'Okända nycklar' : 'Okänd nyckel'}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Ogiltig nyckel i ${c.origin ?? 'värdet'}`;
              case 'invalid_union':
              default:
                return 'Ogiltig input';
              case 'invalid_element':
                return `Ogiltigt v\xe4rde i ${c.origin ?? 'värdet'}`;
            }
          };
        })(),
      };
    }
    function en() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'எழுத்துக்கள்', verb: 'கொண்டிருக்க வேண்டும்' },
              file: { unit: 'பைட்டுகள்', verb: 'கொண்டிருக்க வேண்டும்' },
              array: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
              set: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${c.expected}, பெறப்பட்டது ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'எண் அல்லாதது' : 'எண்';
                    case 'object':
                      if (Array.isArray(a)) return 'அணி';
                      if (null === a) return 'வெறுமை';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${Y(c.values[0])}`;
                return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${v(c.values, '|')} இல் ஒன்று`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? 'மதிப்பு'} ${b}${c.maximum.toString()} ${d.unit ?? 'உறுப்புகள்'} ஆக இருக்க வேண்டும்`;
                return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? 'மதிப்பு'} ${b}${c.maximum.toString()} ஆக இருக்க வேண்டும்`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ${d.unit} ஆக இருக்க வேண்டும்`;
                return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ஆக இருக்க வேண்டும்`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `தவறான சரம்: "${c.prefix}" இல் தொடங்க வேண்டும்`;
                if ('ends_with' === c.format)
                  return `தவறான சரம்: "${c.suffix}" இல் முடிவடைய வேண்டும்`;
                if ('includes' === c.format)
                  return `தவறான சரம்: "${c.includes}" ஐ உள்ளடக்க வேண்டும்`;
                if ('regex' === c.format)
                  return `தவறான சரம்: ${c.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                return `தவறான ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `தவறான எண்: ${c.divisor} இன் பலமாக இருக்க வேண்டும்`;
              case 'unrecognized_keys':
                return `அடையாளம் தெரியாத விசை${c.keys.length > 1 ? 'கள்' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `${c.origin} இல் தவறான விசை`;
              case 'invalid_union':
                return 'தவறான உள்ளீடு';
              case 'invalid_element':
                return `${c.origin} இல் தவறான மதிப்பு`;
              default:
                return `தவறான உள்ளீடு`;
            }
          };
        })(),
      };
    }
    function eo() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'ตัวอักษร', verb: 'ควรมี' },
              file: { unit: 'ไบต์', verb: 'ควรมี' },
              array: { unit: 'รายการ', verb: 'ควรมี' },
              set: { unit: 'รายการ', verb: 'ควรมี' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${c.expected} แต่ได้รับ ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'ไม่ใช่ตัวเลข (NaN)' : 'ตัวเลข';
                    case 'object':
                      if (Array.isArray(a)) return 'อาร์เรย์ (Array)';
                      if (null === a) return 'ไม่มีค่า (null)';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${Y(c.values[0])}`;
                return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? 'ไม่เกิน' : 'น้อยกว่า',
                  d = a[c.origin] ?? null;
                if (d)
                  return `เกินกำหนด: ${c.origin ?? 'ค่า'} ควรมี${b} ${c.maximum.toString()} ${d.unit ?? 'รายการ'}`;
                return `เกินกำหนด: ${c.origin ?? 'ค่า'} ควรมี${b} ${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? 'อย่างน้อย' : 'มากกว่า',
                  d = a[c.origin] ?? null;
                if (d)
                  return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()} ${d.unit}`;
                return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${c.suffix}"`;
                if ('includes' === c.format)
                  return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${c.includes}" อยู่ในข้อความ`;
                if ('regex' === c.format)
                  return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${c.pattern}`;
                return `รูปแบบไม่ถูกต้อง: ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${c.divisor} ได้ลงตัว`;
              case 'unrecognized_keys':
                return `พบคีย์ที่ไม่รู้จัก: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `คีย์ไม่ถูกต้องใน ${c.origin}`;
              case 'invalid_union':
                return 'ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้';
              case 'invalid_element':
                return `ข้อมูลไม่ถูกต้องใน ${c.origin}`;
              default:
                return `ข้อมูลไม่ถูกต้อง`;
            }
          };
        })(),
      };
    }
    function ep() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'karakter', verb: 'olmalı' },
              file: { unit: 'bayt', verb: 'olmalı' },
              array: { unit: 'öğe', verb: 'olmalı' },
              set: { unit: 'öğe', verb: 'olmalı' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Ge\xe7ersiz değer: beklenen ${c.expected}, alınan ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `Ge\xe7ersiz değer: beklenen ${Y(c.values[0])}`;
                return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? 'değer'} ${b}${c.maximum.toString()} ${d.unit ?? 'öğe'}`;
                return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? 'değer'} ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`;
                return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ge\xe7ersiz metin: "${c.prefix}" ile başlamalı`;
                if ('ends_with' === c.format) return `Ge\xe7ersiz metin: "${c.suffix}" ile bitmeli`;
                if ('includes' === c.format)
                  return `Ge\xe7ersiz metin: "${c.includes}" i\xe7ermeli`;
                if ('regex' === c.format) return `Ge\xe7ersiz metin: ${c.pattern} desenine uymalı`;
                return `Ge\xe7ersiz ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Ge\xe7ersiz sayı: ${c.divisor} ile tam b\xf6l\xfcnebilmeli`;
              case 'unrecognized_keys':
                return `Tanınmayan anahtar${c.keys.length > 1 ? 'lar' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `${c.origin} i\xe7inde ge\xe7ersiz anahtar`;
              case 'invalid_union':
                return 'Geçersiz değer';
              case 'invalid_element':
                return `${c.origin} i\xe7inde ge\xe7ersiz değer`;
              default:
                return `Ge\xe7ersiz değer`;
            }
          };
        })(),
      };
    }
    function eq() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'символів', verb: 'матиме' },
              file: { unit: 'байтів', verb: 'матиме' },
              array: { unit: 'елементів', verb: 'матиме' },
              set: { unit: 'елементів', verb: 'матиме' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Неправильні вхідні дані: очікується ${c.expected}, отримано ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'число';
                    case 'object':
                      if (Array.isArray(a)) return 'масив';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Неправильні вхідні дані: очікується ${Y(c.values[0])}`;
                return `Неправильна опція: очікується одне з ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Занадто велике: очікується, що ${c.origin ?? 'значення'} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? 'елементів'}`;
                return `Занадто велике: очікується, що ${c.origin ?? 'значення'} буде ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Занадто мале: очікується, що ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`;
                return `Занадто мале: очікується, що ${c.origin} буде ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Неправильний рядок: повинен починатися з "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Неправильний рядок: повинен закінчуватися на "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Неправильний рядок: повинен містити "${c.includes}"`;
                if ('regex' === c.format)
                  return `Неправильний рядок: повинен відповідати шаблону ${c.pattern}`;
                return `Неправильний ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Неправильне число: повинно бути кратним ${c.divisor}`;
              case 'unrecognized_keys':
                return `Нерозпізнаний ключ${c.keys.length > 1 ? 'і' : ''}: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Неправильний ключ у ${c.origin}`;
              case 'invalid_union':
                return 'Неправильні вхідні дані';
              case 'invalid_element':
                return `Неправильне значення у ${c.origin}`;
              default:
                return `Неправильні вхідні дані`;
            }
          };
        })(),
      };
    }
    function er() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'حروف', verb: 'ہونا' },
              file: { unit: 'بائٹس', verb: 'ہونا' },
              array: { unit: 'آئٹمز', verb: 'ہونا' },
              set: { unit: 'آئٹمز', verb: 'ہونا' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `غلط ان پٹ: ${c.expected} متوقع تھا، ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'نمبر';
                    case 'object':
                      if (Array.isArray(a)) return 'آرے';
                      if (null === a) return 'نل';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)} موصول ہوا`;
              case 'invalid_value':
                if (1 === c.values.length) return `غلط ان پٹ: ${Y(c.values[0])} متوقع تھا`;
                return `غلط آپشن: ${v(c.values, '|')} میں سے ایک متوقع تھا`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `بہت بڑا: ${c.origin ?? 'ویلیو'} کے ${b}${c.maximum.toString()} ${d.unit ?? 'عناصر'} ہونے متوقع تھے`;
                return `بہت بڑا: ${c.origin ?? 'ویلیو'} کا ${b}${c.maximum.toString()} ہونا متوقع تھا`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `بہت چھوٹا: ${c.origin} کے ${b}${c.minimum.toString()} ${d.unit} ہونے متوقع تھے`;
                return `بہت چھوٹا: ${c.origin} کا ${b}${c.minimum.toString()} ہونا متوقع تھا`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `غلط سٹرنگ: "${c.prefix}" سے شروع ہونا چاہیے`;
                if ('ends_with' === c.format) return `غلط سٹرنگ: "${c.suffix}" پر ختم ہونا چاہیے`;
                if ('includes' === c.format) return `غلط سٹرنگ: "${c.includes}" شامل ہونا چاہیے`;
                if ('regex' === c.format) return `غلط سٹرنگ: پیٹرن ${c.pattern} سے میچ ہونا چاہیے`;
                return `غلط ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `غلط نمبر: ${c.divisor} کا مضاعف ہونا چاہیے`;
              case 'unrecognized_keys':
                return `غیر تسلیم شدہ کی${c.keys.length > 1 ? 'ز' : ''}: ${v(c.keys, '، ')}`;
              case 'invalid_key':
                return `${c.origin} میں غلط کی`;
              case 'invalid_union':
                return 'غلط ان پٹ';
              case 'invalid_element':
                return `${c.origin} میں غلط ویلیو`;
              default:
                return `غلط ان پٹ`;
            }
          };
        })(),
      };
    }
    function es() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'ký tự', verb: 'có' },
              file: { unit: 'byte', verb: 'có' },
              array: { unit: 'phần tử', verb: 'có' },
              set: { unit: 'phần tử', verb: 'có' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${c.expected}, nhận được ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'số';
                    case 'object':
                      if (Array.isArray(a)) return 'mảng';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${Y(c.values[0])}`;
                return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Qu\xe1 lớn: mong đợi ${c.origin ?? 'giá trị'} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? 'phần tử'}`;
                return `Qu\xe1 lớn: mong đợi ${c.origin ?? 'giá trị'} ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`;
                return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${c.suffix}"`;
                if ('includes' === c.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${c.includes}"`;
                if ('regex' === c.format)
                  return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${c.pattern}`;
                return `${b[c.format] ?? c.format} kh\xf4ng hợp lệ`;
              case 'not_multiple_of':
                return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${c.divisor}`;
              case 'unrecognized_keys':
                return `Kh\xf3a kh\xf4ng được nhận dạng: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Kh\xf3a kh\xf4ng hợp lệ trong ${c.origin}`;
              case 'invalid_union':
                return 'Đầu vào không hợp lệ';
              case 'invalid_element':
                return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${c.origin}`;
              default:
                return `Đầu v\xe0o kh\xf4ng hợp lệ`;
            }
          };
        })(),
      };
    }
    function et() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: '字符', verb: '包含' },
              file: { unit: '字节', verb: '包含' },
              array: { unit: '项', verb: '包含' },
              set: { unit: '项', verb: '包含' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `无效输入：期望 ${c.expected}，实际接收 ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? '非数字(NaN)' : '数字';
                    case 'object':
                      if (Array.isArray(a)) return '数组';
                      if (null === a) return '空值(null)';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `无效输入：期望 ${Y(c.values[0])}`;
                return `无效选项：期望以下之一 ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `数值过大：期望 ${c.origin ?? '值'} ${b}${c.maximum.toString()} ${d.unit ?? '个元素'}`;
                return `数值过大：期望 ${c.origin ?? '值'} ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d) return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`;
                return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format) return `无效字符串：必须以 "${c.prefix}" 开头`;
                if ('ends_with' === c.format) return `无效字符串：必须以 "${c.suffix}" 结尾`;
                if ('includes' === c.format) return `无效字符串：必须包含 "${c.includes}"`;
                if ('regex' === c.format) return `无效字符串：必须满足正则表达式 ${c.pattern}`;
                return `无效${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `无效数字：必须是 ${c.divisor} 的倍数`;
              case 'unrecognized_keys':
                return `出现未知的键(key): ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `${c.origin} 中的键(key)无效`;
              case 'invalid_union':
                return '无效输入';
              case 'invalid_element':
                return `${c.origin} 中包含无效值(value)`;
              default:
                return `无效输入`;
            }
          };
        })(),
      };
    }
    function eu() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: '字元', verb: '擁有' },
              file: { unit: '位元組', verb: '擁有' },
              array: { unit: '項目', verb: '擁有' },
              set: { unit: '項目', verb: '擁有' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `無效的輸入值：預期為 ${c.expected}，但收到 ${((a) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'number';
                    case 'object':
                      if (Array.isArray(a)) return 'array';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length) return `無效的輸入值：預期為 ${Y(c.values[0])}`;
                return `無效的選項：預期為以下其中之一 ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `數值過大：預期 ${c.origin ?? '值'} 應為 ${b}${c.maximum.toString()} ${d.unit ?? '個元素'}`;
                return `數值過大：預期 ${c.origin ?? '值'} 應為 ${b}${c.maximum.toString()}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()} ${d.unit}`;
                return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format) return `無效的字串：必須以 "${c.prefix}" 開頭`;
                if ('ends_with' === c.format) return `無效的字串：必須以 "${c.suffix}" 結尾`;
                if ('includes' === c.format) return `無效的字串：必須包含 "${c.includes}"`;
                if ('regex' === c.format) return `無效的字串：必須符合格式 ${c.pattern}`;
                return `無效的 ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `無效的數字：必須為 ${c.divisor} 的倍數`;
              case 'unrecognized_keys':
                return `無法識別的鍵值${c.keys.length > 1 ? '們' : ''}：${v(c.keys, '、')}`;
              case 'invalid_key':
                return `${c.origin} 中有無效的鍵值`;
              case 'invalid_union':
                return '無效的輸入值';
              case 'invalid_element':
                return `${c.origin} 中有無效的值`;
              default:
                return `無效的輸入值`;
            }
          };
        })(),
      };
    }
    function ev() {
      return {
        localeError: (() => {
          let a = {
              string: { unit: 'àmi', verb: 'ní' },
              file: { unit: 'bytes', verb: 'ní' },
              array: { unit: 'nkan', verb: 'ní' },
              set: { unit: 'nkan', verb: 'ní' },
            },
            b = {
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
          return (c) => {
            switch (c.code) {
              case 'invalid_type':
                return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${c.expected}, \xe0mọ̀ a r\xed ${((
                  a
                ) => {
                  let b = typeof a;
                  switch (b) {
                    case 'number':
                      return Number.isNaN(a) ? 'NaN' : 'nọ́mbà';
                    case 'object':
                      if (Array.isArray(a)) return 'akopọ';
                      if (null === a) return 'null';
                      if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
                        return a.constructor.name;
                  }
                  return b;
                })(c.input)}`;
              case 'invalid_value':
                if (1 === c.values.length)
                  return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${Y(c.values[0])}`;
                return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${v(c.values, '|')}`;
              case 'too_big': {
                let b = c.inclusive ? '<=' : '<',
                  d = a[c.origin] ?? null;
                if (d)
                  return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${c.origin ?? 'iye'} ${d.verb} ${b}${c.maximum} ${d.unit}`;
                return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${b}${c.maximum}`;
              }
              case 'too_small': {
                let b = c.inclusive ? '>=' : '>',
                  d = a[c.origin] ?? null;
                if (d)
                  return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${c.origin} ${d.verb} ${b}${c.minimum} ${d.unit}`;
                return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${b}${c.minimum}`;
              }
              case 'invalid_format':
                if ('starts_with' === c.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${c.prefix}"`;
                if ('ends_with' === c.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${c.suffix}"`;
                if ('includes' === c.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${c.includes}"`;
                if ('regex' === c.format)
                  return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${c.pattern}`;
                return `Aṣ\xecṣe: ${b[c.format] ?? c.format}`;
              case 'not_multiple_of':
                return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${c.divisor}`;
              case 'unrecognized_keys':
                return `Bọt\xecn\xec \xe0\xecmọ̀: ${v(c.keys, ', ')}`;
              case 'invalid_key':
                return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${c.origin}`;
              case 'invalid_union':
              default:
                return 'Ìbáwọlé aṣìṣe';
              case 'invalid_element':
                return `Iye aṣ\xecṣe n\xedn\xfa ${c.origin}`;
            }
          };
        })(),
      };
    }
    (a.s(
      [
        'ar',
        () => dR,
        'az',
        () => dS,
        'be',
        () => dU,
        'ca',
        () => dV,
        'cs',
        () => dW,
        'da',
        () => dX,
        'de',
        () => dY,
        'en',
        () => aw,
        'eo',
        () => dZ,
        'es',
        () => d$,
        'fa',
        () => d_,
        'fi',
        () => d0,
        'fr',
        () => d1,
        'frCA',
        () => d2,
        'he',
        () => d3,
        'hu',
        () => d4,
        'id',
        () => d5,
        'is',
        () => d6,
        'it',
        () => d7,
        'ja',
        () => d8,
        'kh',
        () => d9,
        'ko',
        () => ea,
        'mk',
        () => eb,
        'ms',
        () => ec,
        'nl',
        () => ed,
        'no',
        () => ee,
        'ota',
        () => ef,
        'pl',
        () => eh,
        'ps',
        () => eg,
        'pt',
        () => ei,
        'ru',
        () => ek,
        'sl',
        () => el,
        'sv',
        () => em,
        'ta',
        () => en,
        'th',
        () => eo,
        'tr',
        () => ep,
        'ua',
        () => eq,
        'ur',
        () => er,
        'vi',
        () => es,
        'yo',
        () => ev,
        'zhCN',
        () => et,
        'zhTW',
        () => eu,
      ],
      24716
    ),
      a.s([], 55757),
      a.i(55757));
    var ew = a.i(24716);
    a.s(
      [
        '$ZodRegistry',
        () => ez,
        '$input',
        () => ey,
        '$output',
        () => ex,
        'globalRegistry',
        () => eB,
        'registry',
        () => eA,
      ],
      26381
    );
    let ex = Symbol('ZodOutput'),
      ey = Symbol('ZodInput');
    class ez {
      constructor() {
        ((this._map = new Map()), (this._idmap = new Map()));
      }
      add(a, ...b) {
        let c = b[0];
        if ((this._map.set(a, c), c && 'object' == typeof c && 'id' in c)) {
          if (this._idmap.has(c.id)) throw Error(`ID ${c.id} already exists in the registry`);
          this._idmap.set(c.id, a);
        }
        return this;
      }
      clear() {
        return ((this._map = new Map()), (this._idmap = new Map()), this);
      }
      remove(a) {
        let b = this._map.get(a);
        return (
          b && 'object' == typeof b && 'id' in b && this._idmap.delete(b.id),
          this._map.delete(a),
          this
        );
      }
      get(a) {
        let b = a._zod.parent;
        if (b) {
          let c = { ...(this.get(b) ?? {}) };
          delete c.id;
          let d = { ...c, ...this._map.get(a) };
          return Object.keys(d).length ? d : void 0;
        }
        return this._map.get(a);
      }
      has(a) {
        return this._map.has(a);
      }
    }
    function eA() {
      return new ez();
    }
    let eB = eA();
    function eC(a, b) {
      return new a({ type: 'string', ...W(b) });
    }
    function eD(a, b) {
      return new a({ type: 'string', coerce: !0, ...W(b) });
    }
    function eE(a, b) {
      return new a({ type: 'string', format: 'email', check: 'string_format', abort: !1, ...W(b) });
    }
    function eF(a, b) {
      return new a({ type: 'string', format: 'guid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eG(a, b) {
      return new a({ type: 'string', format: 'uuid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eH(a, b) {
      return new a({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v4',
        ...W(b),
      });
    }
    function eI(a, b) {
      return new a({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v6',
        ...W(b),
      });
    }
    function eJ(a, b) {
      return new a({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v7',
        ...W(b),
      });
    }
    function eK(a, b) {
      return new a({ type: 'string', format: 'url', check: 'string_format', abort: !1, ...W(b) });
    }
    function eL(a, b) {
      return new a({ type: 'string', format: 'emoji', check: 'string_format', abort: !1, ...W(b) });
    }
    function eM(a, b) {
      return new a({
        type: 'string',
        format: 'nanoid',
        check: 'string_format',
        abort: !1,
        ...W(b),
      });
    }
    function eN(a, b) {
      return new a({ type: 'string', format: 'cuid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eO(a, b) {
      return new a({ type: 'string', format: 'cuid2', check: 'string_format', abort: !1, ...W(b) });
    }
    function eP(a, b) {
      return new a({ type: 'string', format: 'ulid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eQ(a, b) {
      return new a({ type: 'string', format: 'xid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eR(a, b) {
      return new a({ type: 'string', format: 'ksuid', check: 'string_format', abort: !1, ...W(b) });
    }
    function eS(a, b) {
      return new a({ type: 'string', format: 'ipv4', check: 'string_format', abort: !1, ...W(b) });
    }
    function eT(a, b) {
      return new a({ type: 'string', format: 'ipv6', check: 'string_format', abort: !1, ...W(b) });
    }
    function eU(a, b) {
      return new a({
        type: 'string',
        format: 'cidrv4',
        check: 'string_format',
        abort: !1,
        ...W(b),
      });
    }
    function eV(a, b) {
      return new a({
        type: 'string',
        format: 'cidrv6',
        check: 'string_format',
        abort: !1,
        ...W(b),
      });
    }
    function eW(a, b) {
      return new a({
        type: 'string',
        format: 'base64',
        check: 'string_format',
        abort: !1,
        ...W(b),
      });
    }
    function eX(a, b) {
      return new a({
        type: 'string',
        format: 'base64url',
        check: 'string_format',
        abort: !1,
        ...W(b),
      });
    }
    function eY(a, b) {
      return new a({ type: 'string', format: 'e164', check: 'string_format', abort: !1, ...W(b) });
    }
    function eZ(a, b) {
      return new a({ type: 'string', format: 'jwt', check: 'string_format', abort: !1, ...W(b) });
    }
    (a.i(26381),
      a.i(16243),
      a.s(
        [
          'TimePrecision',
          () => e$,
          '_any',
          () => fj,
          '_array',
          () => fS,
          '_base64',
          () => eW,
          '_base64url',
          () => eX,
          '_bigint',
          () => fc,
          '_boolean',
          () => fa,
          '_catch',
          () => f8,
          '_check',
          () => gh,
          '_cidrv4',
          () => eU,
          '_cidrv6',
          () => eV,
          '_coercedBigint',
          () => fd,
          '_coercedBoolean',
          () => fb,
          '_coercedDate',
          () => fo,
          '_coercedNumber',
          () => e4,
          '_coercedString',
          () => eD,
          '_cuid',
          () => eN,
          '_cuid2',
          () => eO,
          '_custom',
          () => ge,
          '_date',
          () => fn,
          '_default',
          () => f5,
          '_discriminatedUnion',
          () => fU,
          '_e164',
          () => eY,
          '_email',
          () => eE,
          '_emoji',
          () => eL,
          '_endsWith',
          () => fK,
          '_enum',
          () => f$,
          '_file',
          () => f1,
          '_float32',
          () => e6,
          '_float64',
          () => e7,
          '_gt',
          () => fs,
          '_gte',
          () => ft,
          '_guid',
          () => eF,
          '_includes',
          () => fI,
          '_int',
          () => e5,
          '_int32',
          () => e8,
          '_int64',
          () => fe,
          '_intersection',
          () => fV,
          '_ipv4',
          () => eS,
          '_ipv6',
          () => eT,
          '_isoDate',
          () => e0,
          '_isoDateTime',
          () => e_,
          '_isoDuration',
          () => e2,
          '_isoTime',
          () => e1,
          '_jwt',
          () => eZ,
          '_ksuid',
          () => eR,
          '_lazy',
          () => gc,
          '_length',
          () => fE,
          '_literal',
          () => f0,
          '_lowercase',
          () => fG,
          '_lt',
          () => fq,
          '_lte',
          () => fr,
          '_map',
          () => fY,
          '_max',
          () => fr,
          '_maxLength',
          () => fC,
          '_maxSize',
          () => fz,
          '_mime',
          () => fM,
          '_min',
          () => ft,
          '_minLength',
          () => fD,
          '_minSize',
          () => fA,
          '_multipleOf',
          () => fy,
          '_nan',
          () => fp,
          '_nanoid',
          () => eM,
          '_nativeEnum',
          () => f_,
          '_negative',
          () => fv,
          '_never',
          () => fl,
          '_nonnegative',
          () => fx,
          '_nonoptional',
          () => f6,
          '_nonpositive',
          () => fw,
          '_normalize',
          () => fO,
          '_null',
          () => fi,
          '_nullable',
          () => f4,
          '_number',
          () => e3,
          '_optional',
          () => f3,
          '_overwrite',
          () => fN,
          '_pipe',
          () => f9,
          '_positive',
          () => fu,
          '_promise',
          () => gd,
          '_property',
          () => fL,
          '_readonly',
          () => ga,
          '_record',
          () => fX,
          '_refine',
          () => gf,
          '_regex',
          () => fF,
          '_set',
          () => fZ,
          '_size',
          () => fB,
          '_startsWith',
          () => fJ,
          '_string',
          () => eC,
          '_stringFormat',
          () => gj,
          '_stringbool',
          () => gi,
          '_success',
          () => f7,
          '_superRefine',
          () => gg,
          '_symbol',
          () => fg,
          '_templateLiteral',
          () => gb,
          '_toLowerCase',
          () => fQ,
          '_toUpperCase',
          () => fR,
          '_transform',
          () => f2,
          '_trim',
          () => fP,
          '_tuple',
          () => fW,
          '_uint32',
          () => e9,
          '_uint64',
          () => ff,
          '_ulid',
          () => eP,
          '_undefined',
          () => fh,
          '_union',
          () => fT,
          '_unknown',
          () => fk,
          '_uppercase',
          () => fH,
          '_url',
          () => eK,
          '_uuid',
          () => eG,
          '_uuidv4',
          () => eH,
          '_uuidv6',
          () => eI,
          '_uuidv7',
          () => eJ,
          '_void',
          () => fm,
          '_xid',
          () => eQ,
        ],
        30439
      ));
    let e$ = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
    function e_(a, b) {
      return new a({
        type: 'string',
        format: 'datetime',
        check: 'string_format',
        offset: !1,
        local: !1,
        precision: null,
        ...W(b),
      });
    }
    function e0(a, b) {
      return new a({ type: 'string', format: 'date', check: 'string_format', ...W(b) });
    }
    function e1(a, b) {
      return new a({
        type: 'string',
        format: 'time',
        check: 'string_format',
        precision: null,
        ...W(b),
      });
    }
    function e2(a, b) {
      return new a({ type: 'string', format: 'duration', check: 'string_format', ...W(b) });
    }
    function e3(a, b) {
      return new a({ type: 'number', checks: [], ...W(b) });
    }
    function e4(a, b) {
      return new a({ type: 'number', coerce: !0, checks: [], ...W(b) });
    }
    function e5(a, b) {
      return new a({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'safeint',
        ...W(b),
      });
    }
    function e6(a, b) {
      return new a({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float32',
        ...W(b),
      });
    }
    function e7(a, b) {
      return new a({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float64',
        ...W(b),
      });
    }
    function e8(a, b) {
      return new a({ type: 'number', check: 'number_format', abort: !1, format: 'int32', ...W(b) });
    }
    function e9(a, b) {
      return new a({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'uint32',
        ...W(b),
      });
    }
    function fa(a, b) {
      return new a({ type: 'boolean', ...W(b) });
    }
    function fb(a, b) {
      return new a({ type: 'boolean', coerce: !0, ...W(b) });
    }
    function fc(a, b) {
      return new a({ type: 'bigint', ...W(b) });
    }
    function fd(a, b) {
      return new a({ type: 'bigint', coerce: !0, ...W(b) });
    }
    function fe(a, b) {
      return new a({ type: 'bigint', check: 'bigint_format', abort: !1, format: 'int64', ...W(b) });
    }
    function ff(a, b) {
      return new a({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'uint64',
        ...W(b),
      });
    }
    function fg(a, b) {
      return new a({ type: 'symbol', ...W(b) });
    }
    function fh(a, b) {
      return new a({ type: 'undefined', ...W(b) });
    }
    function fi(a, b) {
      return new a({ type: 'null', ...W(b) });
    }
    function fj(a) {
      return new a({ type: 'any' });
    }
    function fk(a) {
      return new a({ type: 'unknown' });
    }
    function fl(a, b) {
      return new a({ type: 'never', ...W(b) });
    }
    function fm(a, b) {
      return new a({ type: 'void', ...W(b) });
    }
    function fn(a, b) {
      return new a({ type: 'date', ...W(b) });
    }
    function fo(a, b) {
      return new a({ type: 'date', coerce: !0, ...W(b) });
    }
    function fp(a, b) {
      return new a({ type: 'nan', ...W(b) });
    }
    function fq(a, b) {
      return new b0({ check: 'less_than', ...W(b), value: a, inclusive: !1 });
    }
    function fr(a, b) {
      return new b0({ check: 'less_than', ...W(b), value: a, inclusive: !0 });
    }
    function fs(a, b) {
      return new b1({ check: 'greater_than', ...W(b), value: a, inclusive: !1 });
    }
    function ft(a, b) {
      return new b1({ check: 'greater_than', ...W(b), value: a, inclusive: !0 });
    }
    function fu(a) {
      return fs(0, a);
    }
    function fv(a) {
      return fq(0, a);
    }
    function fw(a) {
      return fr(0, a);
    }
    function fx(a) {
      return ft(0, a);
    }
    function fy(a, b) {
      return new b2({ check: 'multiple_of', ...W(b), value: a });
    }
    function fz(a, b) {
      return new b5({ check: 'max_size', ...W(b), maximum: a });
    }
    function fA(a, b) {
      return new b6({ check: 'min_size', ...W(b), minimum: a });
    }
    function fB(a, b) {
      return new b7({ check: 'size_equals', ...W(b), size: a });
    }
    function fC(a, b) {
      return new b8({ check: 'max_length', ...W(b), maximum: a });
    }
    function fD(a, b) {
      return new b9({ check: 'min_length', ...W(b), minimum: a });
    }
    function fE(a, b) {
      return new ca({ check: 'length_equals', ...W(b), length: a });
    }
    function fF(a, b) {
      return new cc({ check: 'string_format', format: 'regex', ...W(b), pattern: a });
    }
    function fG(a) {
      return new cd({ check: 'string_format', format: 'lowercase', ...W(a) });
    }
    function fH(a) {
      return new ce({ check: 'string_format', format: 'uppercase', ...W(a) });
    }
    function fI(a, b) {
      return new cf({ check: 'string_format', format: 'includes', ...W(b), includes: a });
    }
    function fJ(a, b) {
      return new cg({ check: 'string_format', format: 'starts_with', ...W(b), prefix: a });
    }
    function fK(a, b) {
      return new ch({ check: 'string_format', format: 'ends_with', ...W(b), suffix: a });
    }
    function fL(a, b, c) {
      return new cj({ check: 'property', property: a, schema: b, ...W(c) });
    }
    function fM(a, b) {
      return new ck({ check: 'mime_type', mime: a, ...W(b) });
    }
    function fN(a) {
      return new cl({ check: 'overwrite', tx: a });
    }
    function fO(a) {
      return fN((b) => b.normalize(a));
    }
    function fP() {
      return fN((a) => a.trim());
    }
    function fQ() {
      return fN((a) => a.toLowerCase());
    }
    function fR() {
      return fN((a) => a.toUpperCase());
    }
    function fS(a, b, c) {
      return new a({ type: 'array', element: b, ...W(c) });
    }
    function fT(a, b, c) {
      return new a({ type: 'union', options: b, ...W(c) });
    }
    function fU(a, b, c, d) {
      return new a({ type: 'union', options: c, discriminator: b, ...W(d) });
    }
    function fV(a, b, c) {
      return new a({ type: 'intersection', left: b, right: c });
    }
    function fW(a, b, c, d) {
      let e = c instanceof co,
        f = e ? d : c;
      return new a({ type: 'tuple', items: b, rest: e ? c : null, ...W(f) });
    }
    function fX(a, b, c, d) {
      return new a({ type: 'record', keyType: b, valueType: c, ...W(d) });
    }
    function fY(a, b, c, d) {
      return new a({ type: 'map', keyType: b, valueType: c, ...W(d) });
    }
    function fZ(a, b, c) {
      return new a({ type: 'set', valueType: b, ...W(c) });
    }
    function f$(a, b, c) {
      return new a({
        type: 'enum',
        entries: Array.isArray(b) ? Object.fromEntries(b.map((a) => [a, a])) : b,
        ...W(c),
      });
    }
    function f_(a, b, c) {
      return new a({ type: 'enum', entries: b, ...W(c) });
    }
    function f0(a, b, c) {
      return new a({ type: 'literal', values: Array.isArray(b) ? b : [b], ...W(c) });
    }
    function f1(a, b) {
      return new a({ type: 'file', ...W(b) });
    }
    function f2(a, b) {
      return new a({ type: 'transform', transform: b });
    }
    function f3(a, b) {
      return new a({ type: 'optional', innerType: b });
    }
    function f4(a, b) {
      return new a({ type: 'nullable', innerType: b });
    }
    function f5(a, b, c) {
      return new a({
        type: 'default',
        innerType: b,
        get defaultValue() {
          return 'function' == typeof c ? c() : P(c);
        },
      });
    }
    function f6(a, b, c) {
      return new a({ type: 'nonoptional', innerType: b, ...W(c) });
    }
    function f7(a, b) {
      return new a({ type: 'success', innerType: b });
    }
    function f8(a, b, c) {
      return new a({
        type: 'catch',
        innerType: b,
        catchValue: 'function' == typeof c ? c : () => c,
      });
    }
    function f9(a, b, c) {
      return new a({ type: 'pipe', in: b, out: c });
    }
    function ga(a, b) {
      return new a({ type: 'readonly', innerType: b });
    }
    function gb(a, b, c) {
      return new a({ type: 'template_literal', parts: b, ...W(c) });
    }
    function gc(a, b) {
      return new a({ type: 'lazy', getter: b });
    }
    function gd(a, b) {
      return new a({ type: 'promise', innerType: b });
    }
    function ge(a, b, c) {
      let d = W(c);
      return (d.abort ?? (d.abort = !0), new a({ type: 'custom', check: 'custom', fn: b, ...d }));
    }
    function gf(a, b, c) {
      return new a({ type: 'custom', check: 'custom', fn: b, ...W(c) });
    }
    function gg(a) {
      let b = gh(
        (c) => (
          (c.addIssue = (a) => {
            'string' == typeof a
              ? c.issues.push(an(a, c.value, b._zod.def))
              : (a.fatal && (a.continue = !1),
                a.code ?? (a.code = 'custom'),
                a.input ?? (a.input = c.value),
                a.inst ?? (a.inst = b),
                a.continue ?? (a.continue = !b._zod.def.abort),
                c.issues.push(an(a)));
          }),
          a(c.value, c)
        )
      );
      return b;
    }
    function gh(a, b) {
      let c = new b$({ check: 'custom', ...W(b) });
      return ((c._zod.check = a), c);
    }
    function gi(a, b) {
      let c = W(b),
        d = c.truthy ?? ['true', '1', 'yes', 'on', 'y', 'enabled'],
        e = c.falsy ?? ['false', '0', 'no', 'off', 'n', 'disabled'];
      'sensitive' !== c.case &&
        ((d = d.map((a) => ('string' == typeof a ? a.toLowerCase() : a))),
        (e = e.map((a) => ('string' == typeof a ? a.toLowerCase() : a))));
      let f = new Set(d),
        g = new Set(e),
        h = a.Codec ?? dE,
        i = a.Boolean ?? cU,
        j = new h({
          type: 'pipe',
          in: new (a.String ?? cp)({ type: 'string', error: c.error }),
          out: new i({ type: 'boolean', error: c.error }),
          transform: (a, b) => {
            let d = a;
            return (
              'sensitive' !== c.case && (d = d.toLowerCase()),
              !!f.has(d) ||
                (!g.has(d) &&
                  (b.issues.push({
                    code: 'invalid_value',
                    expected: 'stringbool',
                    values: [...f, ...g],
                    input: b.value,
                    inst: j,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (a, b) => (!0 === a ? d[0] || 'true' : e[0] || 'false'),
          error: c.error,
        });
      return j;
    }
    function gj(a, b, c, d = {}) {
      let e = W(d),
        f = {
          ...W(d),
          check: 'string_format',
          type: 'string',
          format: b,
          fn: 'function' == typeof c ? c : (a) => c.test(a),
          ...e,
        };
      return (c instanceof RegExp && (f.pattern = c), new a(f));
    }
    (a.i(30439), a.s(['JSONSchemaGenerator', () => gk, 'toJSONSchema', () => gl], 5489));
    class gk {
      constructor(a) {
        ((this.counter = 0),
          (this.metadataRegistry = a?.metadata ?? eB),
          (this.target = a?.target ?? 'draft-2020-12'),
          (this.unrepresentable = a?.unrepresentable ?? 'throw'),
          (this.override = a?.override ?? (() => {})),
          (this.io = a?.io ?? 'output'),
          (this.seen = new Map()));
      }
      process(a, b = { path: [], schemaPath: [] }) {
        var c;
        let d = a._zod.def,
          e = this.seen.get(a);
        if (e) return (e.count++, b.schemaPath.includes(a) && (e.cycle = b.path), e.schema);
        let f = { schema: {}, count: 1, cycle: void 0, path: b.path };
        this.seen.set(a, f);
        let g = a._zod.toJSONSchema?.();
        if (g) f.schema = g;
        else {
          let c = { ...b, schemaPath: [...b.schemaPath, a], path: b.path },
            e = a._zod.parent;
          if (e) ((f.ref = e), this.process(e, c), (this.seen.get(e).isParent = !0));
          else {
            let b = f.schema;
            switch (d.type) {
              case 'string': {
                b.type = 'string';
                let {
                  minimum: c,
                  maximum: d,
                  format: e,
                  patterns: g,
                  contentEncoding: h,
                } = a._zod.bag;
                if (
                  ('number' == typeof c && (b.minLength = c),
                  'number' == typeof d && (b.maxLength = d),
                  e &&
                    ((b.format =
                      {
                        guid: 'uuid',
                        url: 'uri',
                        datetime: 'date-time',
                        json_string: 'json-string',
                        regex: '',
                      }[e] ?? e),
                    '' === b.format && delete b.format),
                  h && (b.contentEncoding = h),
                  g && g.size > 0)
                ) {
                  let a = [...g];
                  1 === a.length
                    ? (b.pattern = a[0].source)
                    : a.length > 1 &&
                      (f.schema.allOf = [
                        ...a.map((a) => ({
                          ...('draft-7' === this.target ||
                          'draft-4' === this.target ||
                          'openapi-3.0' === this.target
                            ? { type: 'string' }
                            : {}),
                          pattern: a.source,
                        })),
                      ]);
                }
                break;
              }
              case 'number': {
                let {
                  minimum: c,
                  maximum: d,
                  format: e,
                  multipleOf: f,
                  exclusiveMaximum: g,
                  exclusiveMinimum: h,
                } = a._zod.bag;
                ('string' == typeof e && e.includes('int')
                  ? (b.type = 'integer')
                  : (b.type = 'number'),
                  'number' == typeof h &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((b.minimum = h), (b.exclusiveMinimum = !0))
                      : (b.exclusiveMinimum = h)),
                  'number' == typeof c &&
                    ((b.minimum = c),
                    'number' == typeof h &&
                      'draft-4' !== this.target &&
                      (h >= c ? delete b.minimum : delete b.exclusiveMinimum)),
                  'number' == typeof g &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((b.maximum = g), (b.exclusiveMaximum = !0))
                      : (b.exclusiveMaximum = g)),
                  'number' == typeof d &&
                    ((b.maximum = d),
                    'number' == typeof g &&
                      'draft-4' !== this.target &&
                      (g <= d ? delete b.maximum : delete b.exclusiveMaximum)),
                  'number' == typeof f && (b.multipleOf = f));
                break;
              }
              case 'boolean':
              case 'success':
                b.type = 'boolean';
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
                  ? ((b.type = 'string'), (b.nullable = !0), (b.enum = [null]))
                  : (b.type = 'null');
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
                b.not = {};
                break;
              case 'date':
                if ('throw' === this.unrepresentable)
                  throw Error('Date cannot be represented in JSON Schema');
                break;
              case 'array': {
                let { minimum: e, maximum: f } = a._zod.bag;
                ('number' == typeof e && (b.minItems = e),
                  'number' == typeof f && (b.maxItems = f),
                  (b.type = 'array'),
                  (b.items = this.process(d.element, { ...c, path: [...c.path, 'items'] })));
                break;
              }
              case 'object': {
                ((b.type = 'object'), (b.properties = {}));
                let a = d.shape;
                for (let d in a)
                  b.properties[d] = this.process(a[d], {
                    ...c,
                    path: [...c.path, 'properties', d],
                  });
                let e = new Set(
                  [...new Set(Object.keys(a))].filter((a) => {
                    let b = d.shape[a]._zod;
                    return 'input' === this.io ? void 0 === b.optin : void 0 === b.optout;
                  })
                );
                (e.size > 0 && (b.required = Array.from(e)),
                  d.catchall?._zod.def.type === 'never'
                    ? (b.additionalProperties = !1)
                    : d.catchall
                      ? d.catchall &&
                        (b.additionalProperties = this.process(d.catchall, {
                          ...c,
                          path: [...c.path, 'additionalProperties'],
                        }))
                      : 'output' === this.io && (b.additionalProperties = !1));
                break;
              }
              case 'union':
                b.anyOf = d.options.map((a, b) =>
                  this.process(a, { ...c, path: [...c.path, 'anyOf', b] })
                );
                break;
              case 'intersection': {
                let a = this.process(d.left, { ...c, path: [...c.path, 'allOf', 0] }),
                  e = this.process(d.right, { ...c, path: [...c.path, 'allOf', 1] }),
                  f = (a) => 'allOf' in a && 1 === Object.keys(a).length;
                b.allOf = [...(f(a) ? a.allOf : [a]), ...(f(e) ? e.allOf : [e])];
                break;
              }
              case 'tuple': {
                b.type = 'array';
                let e = 'draft-2020-12' === this.target ? 'prefixItems' : 'items',
                  f =
                    'draft-2020-12' === this.target || 'openapi-3.0' === this.target
                      ? 'items'
                      : 'additionalItems',
                  g = d.items.map((a, b) => this.process(a, { ...c, path: [...c.path, e, b] })),
                  h = d.rest
                    ? this.process(d.rest, {
                        ...c,
                        path: [
                          ...c.path,
                          f,
                          ...('openapi-3.0' === this.target ? [d.items.length] : []),
                        ],
                      })
                    : null;
                'draft-2020-12' === this.target
                  ? ((b.prefixItems = g), h && (b.items = h))
                  : 'openapi-3.0' === this.target
                    ? ((b.items = { anyOf: g }),
                      h && b.items.anyOf.push(h),
                      (b.minItems = g.length),
                      h || (b.maxItems = g.length))
                    : ((b.items = g), h && (b.additionalItems = h));
                let { minimum: i, maximum: j } = a._zod.bag;
                ('number' == typeof i && (b.minItems = i),
                  'number' == typeof j && (b.maxItems = j));
                break;
              }
              case 'record':
                ((b.type = 'object'),
                  ('draft-7' === this.target || 'draft-2020-12' === this.target) &&
                    (b.propertyNames = this.process(d.keyType, {
                      ...c,
                      path: [...c.path, 'propertyNames'],
                    })),
                  (b.additionalProperties = this.process(d.valueType, {
                    ...c,
                    path: [...c.path, 'additionalProperties'],
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
                let a = u(d.entries);
                (a.every((a) => 'number' == typeof a) && (b.type = 'number'),
                  a.every((a) => 'string' == typeof a) && (b.type = 'string'),
                  (b.enum = a));
                break;
              }
              case 'literal': {
                let a = [];
                for (let b of d.values)
                  if (void 0 === b) {
                    if ('throw' === this.unrepresentable)
                      throw Error('Literal `undefined` cannot be represented in JSON Schema');
                  } else if ('bigint' == typeof b)
                    if ('throw' === this.unrepresentable)
                      throw Error('BigInt literals cannot be represented in JSON Schema');
                    else a.push(Number(b));
                  else a.push(b);
                if (0 === a.length);
                else if (1 === a.length) {
                  let c = a[0];
                  ((b.type = null === c ? 'null' : typeof c),
                    'draft-4' === this.target || 'openapi-3.0' === this.target
                      ? (b.enum = [c])
                      : (b.const = c));
                } else
                  (a.every((a) => 'number' == typeof a) && (b.type = 'number'),
                    a.every((a) => 'string' == typeof a) && (b.type = 'string'),
                    a.every((a) => 'boolean' == typeof a) && (b.type = 'string'),
                    a.every((a) => null === a) && (b.type = 'null'),
                    (b.enum = a));
                break;
              }
              case 'file': {
                let c = { type: 'string', format: 'binary', contentEncoding: 'binary' },
                  { minimum: d, maximum: e, mime: f } = a._zod.bag;
                (void 0 !== d && (c.minLength = d),
                  void 0 !== e && (c.maxLength = e),
                  f
                    ? 1 === f.length
                      ? ((c.contentMediaType = f[0]), Object.assign(b, c))
                      : (b.anyOf = f.map((a) => ({ ...c, contentMediaType: a })))
                    : Object.assign(b, c));
                break;
              }
              case 'transform':
                if ('throw' === this.unrepresentable)
                  throw Error('Transforms cannot be represented in JSON Schema');
                break;
              case 'nullable': {
                let a = this.process(d.innerType, c);
                'openapi-3.0' === this.target
                  ? ((f.ref = d.innerType), (b.nullable = !0))
                  : (b.anyOf = [a, { type: 'null' }]);
                break;
              }
              case 'nonoptional':
              case 'promise':
              case 'optional':
                (this.process(d.innerType, c), (f.ref = d.innerType));
                break;
              case 'default':
                (this.process(d.innerType, c),
                  (f.ref = d.innerType),
                  (b.default = JSON.parse(JSON.stringify(d.defaultValue))));
                break;
              case 'prefault':
                (this.process(d.innerType, c),
                  (f.ref = d.innerType),
                  'input' === this.io &&
                    (b._prefault = JSON.parse(JSON.stringify(d.defaultValue))));
                break;
              case 'catch': {
                let a;
                (this.process(d.innerType, c), (f.ref = d.innerType));
                try {
                  a = d.catchValue(void 0);
                } catch {
                  throw Error('Dynamic catch values are not supported in JSON Schema');
                }
                b.default = a;
                break;
              }
              case 'nan':
                if ('throw' === this.unrepresentable)
                  throw Error('NaN cannot be represented in JSON Schema');
                break;
              case 'template_literal': {
                let c = a._zod.pattern;
                if (!c) throw Error('Pattern not found in template literal');
                ((b.type = 'string'), (b.pattern = c.source));
                break;
              }
              case 'pipe': {
                let a =
                  'input' === this.io ? ('transform' === d.in._zod.def.type ? d.out : d.in) : d.out;
                (this.process(a, c), (f.ref = a));
                break;
              }
              case 'readonly':
                (this.process(d.innerType, c), (f.ref = d.innerType), (b.readOnly = !0));
                break;
              case 'lazy': {
                let b = a._zod.innerType;
                (this.process(b, c), (f.ref = b));
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
        let h = this.metadataRegistry.get(a);
        return (
          h && Object.assign(f.schema, h),
          'input' === this.io &&
            (function a(b, c) {
              let d = c ?? { seen: new Set() };
              if (d.seen.has(b)) return !1;
              d.seen.add(b);
              let e = b._zod.def;
              switch (e.type) {
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
                  return a(e.element, d);
                case 'object':
                  for (let b in e.shape) if (a(e.shape[b], d)) return !0;
                  return !1;
                case 'union':
                  for (let b of e.options) if (a(b, d)) return !0;
                  return !1;
                case 'intersection':
                  return a(e.left, d) || a(e.right, d);
                case 'tuple':
                  for (let b of e.items) if (a(b, d)) return !0;
                  if (e.rest && a(e.rest, d)) return !0;
                  return !1;
                case 'record':
                case 'map':
                  return a(e.keyType, d) || a(e.valueType, d);
                case 'set':
                  return a(e.valueType, d);
                case 'promise':
                case 'optional':
                case 'nonoptional':
                case 'nullable':
                case 'readonly':
                case 'default':
                case 'prefault':
                  return a(e.innerType, d);
                case 'lazy':
                  return a(e.getter(), d);
                case 'transform':
                  return !0;
                case 'pipe':
                  return a(e.in, d) || a(e.out, d);
              }
              throw Error(`Unknown schema type: ${e.type}`);
            })(a) &&
            (delete f.schema.examples, delete f.schema.default),
          'input' === this.io &&
            f.schema._prefault &&
            ((c = f.schema).default ?? (c.default = f.schema._prefault)),
          delete f.schema._prefault,
          this.seen.get(a).schema
        );
      }
      emit(a, b) {
        let c = {
            cycles: b?.cycles ?? 'ref',
            reused: b?.reused ?? 'inline',
            external: b?.external ?? void 0,
          },
          d = this.seen.get(a);
        if (!d) throw Error('Unprocessed schema. This is a bug in Zod.');
        let e = (a) => {
            let b = 'draft-2020-12' === this.target ? '$defs' : 'definitions';
            if (c.external) {
              let d = c.external.registry.get(a[0])?.id,
                e = c.external.uri ?? ((a) => a);
              if (d) return { ref: e(d) };
              let f = a[1].defId ?? a[1].schema.id ?? `schema${this.counter++}`;
              return ((a[1].defId = f), { defId: f, ref: `${e('__shared')}#/${b}/${f}` });
            }
            if (a[1] === d) return { ref: '#' };
            let e = `#/${b}/`,
              f = a[1].schema.id ?? `__schema${this.counter++}`;
            return { defId: f, ref: e + f };
          },
          f = (a) => {
            if (a[1].schema.$ref) return;
            let b = a[1],
              { ref: c, defId: d } = e(a);
            ((b.def = { ...b.schema }), d && (b.defId = d));
            let f = b.schema;
            for (let a in f) delete f[a];
            f.$ref = c;
          };
        if ('throw' === c.cycles)
          for (let a of this.seen.entries()) {
            let b = a[1];
            if (b.cycle)
              throw Error(`Cycle detected: #/${b.cycle?.join('/')}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let b of this.seen.entries()) {
          let d = b[1];
          if (a === b[0]) {
            f(b);
            continue;
          }
          if (c.external) {
            let d = c.external.registry.get(b[0])?.id;
            if (a !== b[0] && d) {
              f(b);
              continue;
            }
          }
          if (
            this.metadataRegistry.get(b[0])?.id ||
            d.cycle ||
            (d.count > 1 && 'ref' === c.reused)
          ) {
            f(b);
            continue;
          }
        }
        let g = (a, b) => {
          let c = this.seen.get(a),
            d = c.def ?? c.schema,
            e = { ...d };
          if (null === c.ref) return;
          let f = c.ref;
          if (((c.ref = null), f)) {
            g(f, b);
            let a = this.seen.get(f).schema;
            a.$ref &&
            ('draft-7' === b.target || 'draft-4' === b.target || 'openapi-3.0' === b.target)
              ? ((d.allOf = d.allOf ?? []), d.allOf.push(a))
              : (Object.assign(d, a), Object.assign(d, e));
          }
          c.isParent || this.override({ zodSchema: a, jsonSchema: d, path: c.path ?? [] });
        };
        for (let a of [...this.seen.entries()].reverse()) g(a[0], { target: this.target });
        let h = {};
        if (
          ('draft-2020-12' === this.target
            ? (h.$schema = 'https://json-schema.org/draft/2020-12/schema')
            : 'draft-7' === this.target
              ? (h.$schema = 'http://json-schema.org/draft-07/schema#')
              : 'draft-4' === this.target
                ? (h.$schema = 'http://json-schema.org/draft-04/schema#')
                : 'openapi-3.0' === this.target || console.warn(`Invalid target: ${this.target}`),
          c.external?.uri)
        ) {
          let b = c.external.registry.get(a)?.id;
          if (!b) throw Error('Schema is missing an `id` property');
          h.$id = c.external.uri(b);
        }
        Object.assign(h, d.def);
        let i = c.external?.defs ?? {};
        for (let a of this.seen.entries()) {
          let b = a[1];
          b.def && b.defId && (i[b.defId] = b.def);
        }
        c.external ||
          (Object.keys(i).length > 0 &&
            ('draft-2020-12' === this.target ? (h.$defs = i) : (h.definitions = i)));
        try {
          return JSON.parse(JSON.stringify(h));
        } catch (a) {
          throw Error('Error converting schema to JSON.');
        }
      }
    }
    function gl(a, b) {
      if (a instanceof ez) {
        let c = new gk(b),
          d = {};
        for (let b of a._idmap.entries()) {
          let [a, d] = b;
          c.process(d);
        }
        let e = {},
          f = { registry: a, uri: b?.uri, defs: d };
        for (let d of a._idmap.entries()) {
          let [a, g] = d;
          e[a] = c.emit(g, { ...b, external: f });
        }
        return (
          Object.keys(d).length > 0 &&
            (e.__shared = { ['draft-2020-12' === c.target ? '$defs' : 'definitions']: d }),
          { schemas: e }
        );
      }
      let c = new gk(b);
      return (c.process(a), c.emit(a, b));
    }
    (a.i(5489), a.s([], 88108));
    var gm = a.i(88108),
      gn = a.i(52495);
    a.s(
      [
        'ZodAny',
        () => hW,
        'ZodArray',
        () => h4,
        'ZodBase64',
        () => ho,
        'ZodBase64URL',
        () => hq,
        'ZodBigInt',
        () => hL,
        'ZodBigIntFormat',
        () => hN,
        'ZodBoolean',
        () => hJ,
        'ZodCIDRv4',
        () => hk,
        'ZodCIDRv6',
        () => hm,
        'ZodCUID',
        () => g6,
        'ZodCUID2',
        () => g8,
        'ZodCatch',
        () => iO,
        'ZodCodec',
        () => iU,
        'ZodCustom',
        () => i4,
        'ZodCustomStringFormat',
        () => hw,
        'ZodDate',
        () => h2,
        'ZodDefault',
        () => iG,
        'ZodDiscriminatedUnion',
        () => id,
        'ZodE164',
        () => hs,
        'ZodEmail',
        () => gS,
        'ZodEmoji',
        () => g2,
        'ZodEnum',
        () => is,
        'ZodFile',
        () => ix,
        'ZodFunction',
        () => i2,
        'ZodGUID',
        () => gU,
        'ZodIPv4',
        () => hg,
        'ZodIPv6',
        () => hi,
        'ZodIntersection',
        () => ig,
        'ZodJWT',
        () => hu,
        'ZodKSUID',
        () => he,
        'ZodLazy',
        () => i$,
        'ZodLiteral',
        () => iv,
        'ZodMap',
        () => io,
        'ZodNaN',
        () => iQ,
        'ZodNanoID',
        () => g4,
        'ZodNever',
        () => h$,
        'ZodNonOptional',
        () => iK,
        'ZodNull',
        () => hU,
        'ZodNullable',
        () => iD,
        'ZodNumber',
        () => hB,
        'ZodNumberFormat',
        () => hD,
        'ZodObject',
        () => h7,
        'ZodOptional',
        () => iB,
        'ZodPipe',
        () => iS,
        'ZodPrefault',
        () => iI,
        'ZodPromise',
        () => i0,
        'ZodReadonly',
        () => iW,
        'ZodRecord',
        () => ik,
        'ZodSet',
        () => iq,
        'ZodString',
        () => gP,
        'ZodStringFormat',
        () => gR,
        'ZodSuccess',
        () => iM,
        'ZodSymbol',
        () => hQ,
        'ZodTemplateLiteral',
        () => iY,
        'ZodTransform',
        () => iz,
        'ZodTuple',
        () => ii,
        'ZodType',
        () => gN,
        'ZodULID',
        () => ha,
        'ZodURL',
        () => g_,
        'ZodUUID',
        () => gW,
        'ZodUndefined',
        () => hS,
        'ZodUnion',
        () => ib,
        'ZodUnknown',
        () => hY,
        'ZodVoid',
        () => h0,
        'ZodXID',
        () => hc,
        '_ZodString',
        () => gO,
        '_default',
        () => iH,
        '_function',
        () => i3,
        'any',
        () => hX,
        'array',
        () => h5,
        'base64',
        () => hp,
        'base64url',
        () => hr,
        'bigint',
        () => hM,
        'boolean',
        () => hK,
        'catch',
        () => iP,
        'check',
        () => i5,
        'cidrv4',
        () => hl,
        'cidrv6',
        () => hn,
        'codec',
        () => iV,
        'cuid',
        () => g7,
        'cuid2',
        () => g9,
        'custom',
        () => i6,
        'date',
        () => h3,
        'discriminatedUnion',
        () => ie,
        'e164',
        () => ht,
        'email',
        () => gT,
        'emoji',
        () => g3,
        'enum',
        () => it,
        'file',
        () => iy,
        'float32',
        () => hF,
        'float64',
        () => hG,
        'function',
        () => i3,
        'guid',
        () => gV,
        'hash',
        () => hA,
        'hex',
        () => hz,
        'hostname',
        () => hy,
        'httpUrl',
        () => g1,
        'instanceof',
        () => i9,
        'int',
        () => hE,
        'int32',
        () => hH,
        'int64',
        () => hO,
        'intersection',
        () => ih,
        'ipv4',
        () => hh,
        'ipv6',
        () => hj,
        'json',
        () => jb,
        'jwt',
        () => hv,
        'keyof',
        () => h6,
        'ksuid',
        () => hf,
        'lazy',
        () => i_,
        'literal',
        () => iw,
        'looseObject',
        () => ia,
        'map',
        () => ip,
        'nan',
        () => iR,
        'nanoid',
        () => g5,
        'nativeEnum',
        () => iu,
        'never',
        () => h_,
        'nonoptional',
        () => iL,
        'null',
        () => hV,
        'nullable',
        () => iE,
        'nullish',
        () => iF,
        'number',
        () => hC,
        'object',
        () => h8,
        'optional',
        () => iC,
        'partialRecord',
        () => im,
        'pipe',
        () => iT,
        'prefault',
        () => iJ,
        'preprocess',
        () => jc,
        'promise',
        () => i1,
        'readonly',
        () => iX,
        'record',
        () => il,
        'refine',
        () => i7,
        'set',
        () => ir,
        'strictObject',
        () => h9,
        'string',
        () => gQ,
        'stringFormat',
        () => hx,
        'stringbool',
        () => ja,
        'success',
        () => iN,
        'superRefine',
        () => i8,
        'symbol',
        () => hR,
        'templateLiteral',
        () => iZ,
        'transform',
        () => iA,
        'tuple',
        () => ij,
        'uint32',
        () => hI,
        'uint64',
        () => hP,
        'ulid',
        () => hb,
        'undefined',
        () => hT,
        'union',
        () => ic,
        'unknown',
        () => hZ,
        'url',
        () => g0,
        'uuid',
        () => gX,
        'uuidv4',
        () => gY,
        'uuidv6',
        () => gZ,
        'uuidv7',
        () => g$,
        'void',
        () => h1,
        'xid',
        () => hd,
      ],
      98793
    );
    var go = dQ,
      gp = dP;
    a.s(
      [
        'ZodISODate',
        () => gs,
        'ZodISODateTime',
        () => gq,
        'ZodISODuration',
        () => gw,
        'ZodISOTime',
        () => gu,
        'date',
        () => gt,
        'datetime',
        () => gr,
        'duration',
        () => gx,
        'time',
        () => gv,
      ],
      39352
    );
    let gq = j('ZodISODateTime', (a, b) => {
      (cC.init(a, b), gR.init(a, b));
    });
    function gr(a) {
      return e_(gq, a);
    }
    let gs = j('ZodISODate', (a, b) => {
      (cD.init(a, b), gR.init(a, b));
    });
    function gt(a) {
      return e0(gs, a);
    }
    let gu = j('ZodISOTime', (a, b) => {
      (cE.init(a, b), gR.init(a, b));
    });
    function gv(a) {
      return e1(gu, a);
    }
    let gw = j('ZodISODuration', (a, b) => {
      (cF.init(a, b), gR.init(a, b));
    });
    function gx(a) {
      return e2(gw, a);
    }
    (a.s(
      [
        'decode',
        () => gG,
        'decodeAsync',
        () => gI,
        'encode',
        () => gF,
        'encodeAsync',
        () => gH,
        'parse',
        () => gB,
        'parseAsync',
        () => gC,
        'safeDecode',
        () => gK,
        'safeDecodeAsync',
        () => gM,
        'safeEncode',
        () => gJ,
        'safeEncodeAsync',
        () => gL,
        'safeParse',
        () => gD,
        'safeParseAsync',
        () => gE,
      ],
      99491
    ),
      a.s(['ZodError', () => gz, 'ZodRealError', () => gA], 3536));
    let gy = (a, b) => {
        (ay.init(a, b),
          (a.name = 'ZodError'),
          Object.defineProperties(a, {
            format: { value: (b) => aB(a, b) },
            flatten: { value: (b) => aA(a, b) },
            addIssue: {
              value: (b) => {
                (a.issues.push(b), (a.message = JSON.stringify(a.issues, w, 2)));
              },
            },
            addIssues: {
              value: (b) => {
                (a.issues.push(...b), (a.message = JSON.stringify(a.issues, w, 2)));
              },
            },
            isEmpty: { get: () => 0 === a.issues.length },
          }));
      },
      gz = j('ZodError', gy),
      gA = j('ZodError', gy, { Parent: Error }),
      gB = aF(gA),
      gC = aH(gA),
      gD = aJ(gA),
      gE = aL(gA),
      gF = aN(gA),
      gG = aP(gA),
      gH = aR(gA),
      gI = aT(gA),
      gJ = aV(gA),
      gK = aX(gA),
      gL = aZ(gA),
      gM = a_(gA),
      gN = j(
        'ZodType',
        (a, b) => (
          co.init(a, b),
          (a.def = b),
          (a.type = b.type),
          Object.defineProperty(a, '_def', { value: b }),
          (a.check = (...c) =>
            a.clone({
              ...b,
              checks: [
                ...(b.checks ?? []),
                ...c.map((a) =>
                  'function' == typeof a
                    ? { _zod: { check: a, def: { check: 'custom' }, onattach: [] } }
                    : a
                ),
              ],
            })),
          (a.clone = (b, c) => V(a, b, c)),
          (a.brand = () => a),
          (a.register = (b, c) => (b.add(a, c), a)),
          (a.parse = (b, c) => gB(a, b, c, { callee: a.parse })),
          (a.safeParse = (b, c) => gD(a, b, c)),
          (a.parseAsync = async (b, c) => gC(a, b, c, { callee: a.parseAsync })),
          (a.safeParseAsync = async (b, c) => gE(a, b, c)),
          (a.spa = a.safeParseAsync),
          (a.encode = (b, c) => gF(a, b, c)),
          (a.decode = (b, c) => gG(a, b, c)),
          (a.encodeAsync = async (b, c) => gH(a, b, c)),
          (a.decodeAsync = async (b, c) => gI(a, b, c)),
          (a.safeEncode = (b, c) => gJ(a, b, c)),
          (a.safeDecode = (b, c) => gK(a, b, c)),
          (a.safeEncodeAsync = async (b, c) => gL(a, b, c)),
          (a.safeDecodeAsync = async (b, c) => gM(a, b, c)),
          (a.refine = (b, c) => a.check(i7(b, c))),
          (a.superRefine = (b) => a.check(gg(b))),
          (a.overwrite = (b) => a.check(fN(b))),
          (a.optional = () => iC(a)),
          (a.nullable = () => iE(a)),
          (a.nullish = () => iC(iE(a))),
          (a.nonoptional = (b) => iL(a, b)),
          (a.array = () => h5(a)),
          (a.or = (b) => ic([a, b])),
          (a.and = (b) => ih(a, b)),
          (a.transform = (b) => iT(a, iA(b))),
          (a.default = (b) => iH(a, b)),
          (a.prefault = (b) => iJ(a, b)),
          (a.catch = (b) => iP(a, b)),
          (a.pipe = (b) => iT(a, b)),
          (a.readonly = () => iX(a)),
          (a.describe = (b) => {
            let c = a.clone();
            return (eB.add(c, { description: b }), c);
          }),
          Object.defineProperty(a, 'description', {
            get: () => eB.get(a)?.description,
            configurable: !0,
          }),
          (a.meta = (...b) => {
            if (0 === b.length) return eB.get(a);
            let c = a.clone();
            return (eB.add(c, b[0]), c);
          }),
          (a.isOptional = () => a.safeParse(void 0).success),
          (a.isNullable = () => a.safeParse(null).success),
          a
        )
      ),
      gO = j('_ZodString', (a, b) => {
        (cp.init(a, b), gN.init(a, b));
        let c = a._zod.bag;
        ((a.format = c.format ?? null),
          (a.minLength = c.minimum ?? null),
          (a.maxLength = c.maximum ?? null),
          (a.regex = (...b) => a.check(fF(...b))),
          (a.includes = (...b) => a.check(fI(...b))),
          (a.startsWith = (...b) => a.check(fJ(...b))),
          (a.endsWith = (...b) => a.check(fK(...b))),
          (a.min = (...b) => a.check(fD(...b))),
          (a.max = (...b) => a.check(fC(...b))),
          (a.length = (...b) => a.check(fE(...b))),
          (a.nonempty = (...b) => a.check(fD(1, ...b))),
          (a.lowercase = (b) => a.check(fG(b))),
          (a.uppercase = (b) => a.check(fH(b))),
          (a.trim = () => a.check(fP())),
          (a.normalize = (...b) => a.check(fO(...b))),
          (a.toLowerCase = () => a.check(fQ())),
          (a.toUpperCase = () => a.check(fR())));
      }),
      gP = j('ZodString', (a, b) => {
        (cp.init(a, b),
          gO.init(a, b),
          (a.email = (b) => a.check(eE(gS, b))),
          (a.url = (b) => a.check(eK(g_, b))),
          (a.jwt = (b) => a.check(eZ(hu, b))),
          (a.emoji = (b) => a.check(eL(g2, b))),
          (a.guid = (b) => a.check(eF(gU, b))),
          (a.uuid = (b) => a.check(eG(gW, b))),
          (a.uuidv4 = (b) => a.check(eH(gW, b))),
          (a.uuidv6 = (b) => a.check(eI(gW, b))),
          (a.uuidv7 = (b) => a.check(eJ(gW, b))),
          (a.nanoid = (b) => a.check(eM(g4, b))),
          (a.guid = (b) => a.check(eF(gU, b))),
          (a.cuid = (b) => a.check(eN(g6, b))),
          (a.cuid2 = (b) => a.check(eO(g8, b))),
          (a.ulid = (b) => a.check(eP(ha, b))),
          (a.base64 = (b) => a.check(eW(ho, b))),
          (a.base64url = (b) => a.check(eX(hq, b))),
          (a.xid = (b) => a.check(eQ(hc, b))),
          (a.ksuid = (b) => a.check(eR(he, b))),
          (a.ipv4 = (b) => a.check(eS(hg, b))),
          (a.ipv6 = (b) => a.check(eT(hi, b))),
          (a.cidrv4 = (b) => a.check(eU(hk, b))),
          (a.cidrv6 = (b) => a.check(eV(hm, b))),
          (a.e164 = (b) => a.check(eY(hs, b))),
          (a.datetime = (b) => a.check(gr(b))),
          (a.date = (b) => a.check(gt(b))),
          (a.time = (b) => a.check(gv(b))),
          (a.duration = (b) => a.check(gx(b))));
      });
    function gQ(a) {
      return eC(gP, a);
    }
    let gR = j('ZodStringFormat', (a, b) => {
        (cq.init(a, b), gO.init(a, b));
      }),
      gS = j('ZodEmail', (a, b) => {
        (ct.init(a, b), gR.init(a, b));
      });
    function gT(a) {
      return eE(gS, a);
    }
    let gU = j('ZodGUID', (a, b) => {
      (cr.init(a, b), gR.init(a, b));
    });
    function gV(a) {
      return eF(gU, a);
    }
    let gW = j('ZodUUID', (a, b) => {
      (cs.init(a, b), gR.init(a, b));
    });
    function gX(a) {
      return eG(gW, a);
    }
    function gY(a) {
      return eH(gW, a);
    }
    function gZ(a) {
      return eI(gW, a);
    }
    function g$(a) {
      return eJ(gW, a);
    }
    let g_ = j('ZodURL', (a, b) => {
      (cu.init(a, b), gR.init(a, b));
    });
    function g0(a) {
      return eK(g_, a);
    }
    function g1(a) {
      return eK(g_, { protocol: /^https?$/, hostname: go.domain, ...gp.normalizeParams(a) });
    }
    let g2 = j('ZodEmoji', (a, b) => {
      (cv.init(a, b), gR.init(a, b));
    });
    function g3(a) {
      return eL(g2, a);
    }
    let g4 = j('ZodNanoID', (a, b) => {
      (cw.init(a, b), gR.init(a, b));
    });
    function g5(a) {
      return eM(g4, a);
    }
    let g6 = j('ZodCUID', (a, b) => {
      (cx.init(a, b), gR.init(a, b));
    });
    function g7(a) {
      return eN(g6, a);
    }
    let g8 = j('ZodCUID2', (a, b) => {
      (cy.init(a, b), gR.init(a, b));
    });
    function g9(a) {
      return eO(g8, a);
    }
    let ha = j('ZodULID', (a, b) => {
      (cz.init(a, b), gR.init(a, b));
    });
    function hb(a) {
      return eP(ha, a);
    }
    let hc = j('ZodXID', (a, b) => {
      (cA.init(a, b), gR.init(a, b));
    });
    function hd(a) {
      return eQ(hc, a);
    }
    let he = j('ZodKSUID', (a, b) => {
      (cB.init(a, b), gR.init(a, b));
    });
    function hf(a) {
      return eR(he, a);
    }
    let hg = j('ZodIPv4', (a, b) => {
      (cG.init(a, b), gR.init(a, b));
    });
    function hh(a) {
      return eS(hg, a);
    }
    let hi = j('ZodIPv6', (a, b) => {
      (cH.init(a, b), gR.init(a, b));
    });
    function hj(a) {
      return eT(hi, a);
    }
    let hk = j('ZodCIDRv4', (a, b) => {
      (cI.init(a, b), gR.init(a, b));
    });
    function hl(a) {
      return eU(hk, a);
    }
    let hm = j('ZodCIDRv6', (a, b) => {
      (cJ.init(a, b), gR.init(a, b));
    });
    function hn(a) {
      return eV(hm, a);
    }
    let ho = j('ZodBase64', (a, b) => {
      (cL.init(a, b), gR.init(a, b));
    });
    function hp(a) {
      return eW(ho, a);
    }
    let hq = j('ZodBase64URL', (a, b) => {
      (cN.init(a, b), gR.init(a, b));
    });
    function hr(a) {
      return eX(hq, a);
    }
    let hs = j('ZodE164', (a, b) => {
      (cO.init(a, b), gR.init(a, b));
    });
    function ht(a) {
      return eY(hs, a);
    }
    let hu = j('ZodJWT', (a, b) => {
      (cQ.init(a, b), gR.init(a, b));
    });
    function hv(a) {
      return eZ(hu, a);
    }
    let hw = j('ZodCustomStringFormat', (a, b) => {
      (cR.init(a, b), gR.init(a, b));
    });
    function hx(a, b, c = {}) {
      return gj(hw, a, b, c);
    }
    function hy(a) {
      return gj(hw, 'hostname', go.hostname, a);
    }
    function hz(a) {
      return gj(hw, 'hex', go.hex, a);
    }
    function hA(a, b) {
      let c = b?.enc ?? 'hex',
        d = `${a}_${c}`,
        e = go[d];
      if (!e) throw Error(`Unrecognized hash format: ${d}`);
      return gj(hw, d, e, b);
    }
    let hB = j('ZodNumber', (a, b) => {
      (cS.init(a, b),
        gN.init(a, b),
        (a.gt = (b, c) => a.check(fs(b, c))),
        (a.gte = (b, c) => a.check(ft(b, c))),
        (a.min = (b, c) => a.check(ft(b, c))),
        (a.lt = (b, c) => a.check(fq(b, c))),
        (a.lte = (b, c) => a.check(fr(b, c))),
        (a.max = (b, c) => a.check(fr(b, c))),
        (a.int = (b) => a.check(hE(b))),
        (a.safe = (b) => a.check(hE(b))),
        (a.positive = (b) => a.check(fs(0, b))),
        (a.nonnegative = (b) => a.check(ft(0, b))),
        (a.negative = (b) => a.check(fq(0, b))),
        (a.nonpositive = (b) => a.check(fr(0, b))),
        (a.multipleOf = (b, c) => a.check(fy(b, c))),
        (a.step = (b, c) => a.check(fy(b, c))),
        (a.finite = () => a));
      let c = a._zod.bag;
      ((a.minValue = Math.max(c.minimum ?? -1 / 0, c.exclusiveMinimum ?? -1 / 0) ?? null),
        (a.maxValue = Math.min(c.maximum ?? 1 / 0, c.exclusiveMaximum ?? 1 / 0) ?? null),
        (a.isInt = (c.format ?? '').includes('int') || Number.isSafeInteger(c.multipleOf ?? 0.5)),
        (a.isFinite = !0),
        (a.format = c.format ?? null));
    });
    function hC(a) {
      return e3(hB, a);
    }
    let hD = j('ZodNumberFormat', (a, b) => {
      (cT.init(a, b), hB.init(a, b));
    });
    function hE(a) {
      return e5(hD, a);
    }
    function hF(a) {
      return e6(hD, a);
    }
    function hG(a) {
      return e7(hD, a);
    }
    function hH(a) {
      return e8(hD, a);
    }
    function hI(a) {
      return e9(hD, a);
    }
    let hJ = j('ZodBoolean', (a, b) => {
      (cU.init(a, b), gN.init(a, b));
    });
    function hK(a) {
      return fa(hJ, a);
    }
    let hL = j('ZodBigInt', (a, b) => {
      (cV.init(a, b),
        gN.init(a, b),
        (a.gte = (b, c) => a.check(ft(b, c))),
        (a.min = (b, c) => a.check(ft(b, c))),
        (a.gt = (b, c) => a.check(fs(b, c))),
        (a.gte = (b, c) => a.check(ft(b, c))),
        (a.min = (b, c) => a.check(ft(b, c))),
        (a.lt = (b, c) => a.check(fq(b, c))),
        (a.lte = (b, c) => a.check(fr(b, c))),
        (a.max = (b, c) => a.check(fr(b, c))),
        (a.positive = (b) => a.check(fs(BigInt(0), b))),
        (a.negative = (b) => a.check(fq(BigInt(0), b))),
        (a.nonpositive = (b) => a.check(fr(BigInt(0), b))),
        (a.nonnegative = (b) => a.check(ft(BigInt(0), b))),
        (a.multipleOf = (b, c) => a.check(fy(b, c))));
      let c = a._zod.bag;
      ((a.minValue = c.minimum ?? null),
        (a.maxValue = c.maximum ?? null),
        (a.format = c.format ?? null));
    });
    function hM(a) {
      return fc(hL, a);
    }
    let hN = j('ZodBigIntFormat', (a, b) => {
      (cW.init(a, b), hL.init(a, b));
    });
    function hO(a) {
      return fe(hN, a);
    }
    function hP(a) {
      return ff(hN, a);
    }
    let hQ = j('ZodSymbol', (a, b) => {
      (cX.init(a, b), gN.init(a, b));
    });
    function hR(a) {
      return fg(hQ, a);
    }
    let hS = j('ZodUndefined', (a, b) => {
      (cY.init(a, b), gN.init(a, b));
    });
    function hT(a) {
      return fh(hS, a);
    }
    let hU = j('ZodNull', (a, b) => {
      (cZ.init(a, b), gN.init(a, b));
    });
    function hV(a) {
      return fi(hU, a);
    }
    let hW = j('ZodAny', (a, b) => {
      (c$.init(a, b), gN.init(a, b));
    });
    function hX() {
      return fj(hW);
    }
    let hY = j('ZodUnknown', (a, b) => {
      (c_.init(a, b), gN.init(a, b));
    });
    function hZ() {
      return fk(hY);
    }
    let h$ = j('ZodNever', (a, b) => {
      (c0.init(a, b), gN.init(a, b));
    });
    function h_(a) {
      return fl(h$, a);
    }
    let h0 = j('ZodVoid', (a, b) => {
      (c1.init(a, b), gN.init(a, b));
    });
    function h1(a) {
      return fm(h0, a);
    }
    let h2 = j('ZodDate', (a, b) => {
      (c2.init(a, b),
        gN.init(a, b),
        (a.min = (b, c) => a.check(ft(b, c))),
        (a.max = (b, c) => a.check(fr(b, c))));
      let c = a._zod.bag;
      ((a.minDate = c.minimum ? new Date(c.minimum) : null),
        (a.maxDate = c.maximum ? new Date(c.maximum) : null));
    });
    function h3(a) {
      return fn(h2, a);
    }
    let h4 = j('ZodArray', (a, b) => {
      (c4.init(a, b),
        gN.init(a, b),
        (a.element = b.element),
        (a.min = (b, c) => a.check(fD(b, c))),
        (a.nonempty = (b) => a.check(fD(1, b))),
        (a.max = (b, c) => a.check(fC(b, c))),
        (a.length = (b, c) => a.check(fE(b, c))),
        (a.unwrap = () => a.element));
    });
    function h5(a, b) {
      return fS(h4, a, b);
    }
    function h6(a) {
      return it(Object.keys(a._zod.def.shape));
    }
    let h7 = j('ZodObject', (a, b) => {
      (c9.init(a, b),
        gN.init(a, b),
        gp.defineLazy(a, 'shape', () => b.shape),
        (a.keyof = () => it(Object.keys(a._zod.def.shape))),
        (a.catchall = (b) => a.clone({ ...a._zod.def, catchall: b })),
        (a.passthrough = () => a.clone({ ...a._zod.def, catchall: hZ() })),
        (a.loose = () => a.clone({ ...a._zod.def, catchall: hZ() })),
        (a.strict = () => a.clone({ ...a._zod.def, catchall: h_() })),
        (a.strip = () => a.clone({ ...a._zod.def, catchall: void 0 })),
        (a.extend = (b) => gp.extend(a, b)),
        (a.safeExtend = (b) => gp.safeExtend(a, b)),
        (a.merge = (b) => gp.merge(a, b)),
        (a.pick = (b) => gp.pick(a, b)),
        (a.omit = (b) => gp.omit(a, b)),
        (a.partial = (...b) => gp.partial(iB, a, b[0])),
        (a.required = (...b) => gp.required(iK, a, b[0])));
    });
    function h8(a, b) {
      return new h7({
        type: 'object',
        get shape() {
          return (gp.assignProp(this, 'shape', a ? gp.objectClone(a) : {}), this.shape);
        },
        ...gp.normalizeParams(b),
      });
    }
    function h9(a, b) {
      return new h7({
        type: 'object',
        get shape() {
          return (gp.assignProp(this, 'shape', gp.objectClone(a)), this.shape);
        },
        catchall: h_(),
        ...gp.normalizeParams(b),
      });
    }
    function ia(a, b) {
      return new h7({
        type: 'object',
        get shape() {
          return (gp.assignProp(this, 'shape', gp.objectClone(a)), this.shape);
        },
        catchall: hZ(),
        ...gp.normalizeParams(b),
      });
    }
    let ib = j('ZodUnion', (a, b) => {
      (db.init(a, b), gN.init(a, b), (a.options = b.options));
    });
    function ic(a, b) {
      return new ib({ type: 'union', options: a, ...gp.normalizeParams(b) });
    }
    let id = j('ZodDiscriminatedUnion', (a, b) => {
      (ib.init(a, b), dc.init(a, b));
    });
    function ie(a, b, c) {
      return new id({ type: 'union', options: b, discriminator: a, ...gp.normalizeParams(c) });
    }
    let ig = j('ZodIntersection', (a, b) => {
      (dd.init(a, b), gN.init(a, b));
    });
    function ih(a, b) {
      return new ig({ type: 'intersection', left: a, right: b });
    }
    let ii = j('ZodTuple', (a, b) => {
      (df.init(a, b), gN.init(a, b), (a.rest = (b) => a.clone({ ...a._zod.def, rest: b })));
    });
    function ij(a, b, c) {
      let d = b instanceof co,
        e = d ? c : b;
      return new ii({ type: 'tuple', items: a, rest: d ? b : null, ...gp.normalizeParams(e) });
    }
    let ik = j('ZodRecord', (a, b) => {
      (dh.init(a, b), gN.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType));
    });
    function il(a, b, c) {
      return new ik({ type: 'record', keyType: a, valueType: b, ...gp.normalizeParams(c) });
    }
    function im(a, b, c) {
      let d = V(a);
      return (
        (d._zod.values = void 0),
        new ik({ type: 'record', keyType: d, valueType: b, ...gp.normalizeParams(c) })
      );
    }
    let io = j('ZodMap', (a, b) => {
      (di.init(a, b), gN.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType));
    });
    function ip(a, b, c) {
      return new io({ type: 'map', keyType: a, valueType: b, ...gp.normalizeParams(c) });
    }
    let iq = j('ZodSet', (a, b) => {
      (dk.init(a, b),
        gN.init(a, b),
        (a.min = (...b) => a.check(fA(...b))),
        (a.nonempty = (b) => a.check(fA(1, b))),
        (a.max = (...b) => a.check(fz(...b))),
        (a.size = (...b) => a.check(fB(...b))));
    });
    function ir(a, b) {
      return new iq({ type: 'set', valueType: a, ...gp.normalizeParams(b) });
    }
    let is = j('ZodEnum', (a, b) => {
      (dm.init(a, b), gN.init(a, b), (a.enum = b.entries), (a.options = Object.values(b.entries)));
      let c = new Set(Object.keys(b.entries));
      ((a.extract = (a, d) => {
        let e = {};
        for (let d of a)
          if (c.has(d)) e[d] = b.entries[d];
          else throw Error(`Key ${d} not found in enum`);
        return new is({ ...b, checks: [], ...gp.normalizeParams(d), entries: e });
      }),
        (a.exclude = (a, d) => {
          let e = { ...b.entries };
          for (let b of a)
            if (c.has(b)) delete e[b];
            else throw Error(`Key ${b} not found in enum`);
          return new is({ ...b, checks: [], ...gp.normalizeParams(d), entries: e });
        }));
    });
    function it(a, b) {
      return new is({
        type: 'enum',
        entries: Array.isArray(a) ? Object.fromEntries(a.map((a) => [a, a])) : a,
        ...gp.normalizeParams(b),
      });
    }
    function iu(a, b) {
      return new is({ type: 'enum', entries: a, ...gp.normalizeParams(b) });
    }
    let iv = j('ZodLiteral', (a, b) => {
      (dn.init(a, b),
        gN.init(a, b),
        (a.values = new Set(b.values)),
        Object.defineProperty(a, 'value', {
          get() {
            if (b.values.length > 1)
              throw Error(
                'This schema contains multiple valid literal values. Use `.values` instead.'
              );
            return b.values[0];
          },
        }));
    });
    function iw(a, b) {
      return new iv({
        type: 'literal',
        values: Array.isArray(a) ? a : [a],
        ...gp.normalizeParams(b),
      });
    }
    let ix = j('ZodFile', (a, b) => {
      (dp.init(a, b),
        gN.init(a, b),
        (a.min = (b, c) => a.check(fA(b, c))),
        (a.max = (b, c) => a.check(fz(b, c))),
        (a.mime = (b, c) => a.check(fM(Array.isArray(b) ? b : [b], c))));
    });
    function iy(a) {
      return f1(ix, a);
    }
    let iz = j('ZodTransform', (a, b) => {
      (dq.init(a, b),
        gN.init(a, b),
        (a._zod.parse = (c, d) => {
          if ('backward' === d.direction) throw new m(a.constructor.name);
          c.addIssue = (d) => {
            'string' == typeof d
              ? c.issues.push(gp.issue(d, c.value, b))
              : (d.fatal && (d.continue = !1),
                d.code ?? (d.code = 'custom'),
                d.input ?? (d.input = c.value),
                d.inst ?? (d.inst = a),
                c.issues.push(gp.issue(d)));
          };
          let e = b.transform(c.value, c);
          return e instanceof Promise ? e.then((a) => ((c.value = a), c)) : ((c.value = e), c);
        }));
    });
    function iA(a) {
      return new iz({ type: 'transform', transform: a });
    }
    let iB = j('ZodOptional', (a, b) => {
      (ds.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iC(a) {
      return new iB({ type: 'optional', innerType: a });
    }
    let iD = j('ZodNullable', (a, b) => {
      (dt.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iE(a) {
      return new iD({ type: 'nullable', innerType: a });
    }
    function iF(a) {
      return iC(iE(a));
    }
    let iG = j('ZodDefault', (a, b) => {
      (du.init(a, b),
        gN.init(a, b),
        (a.unwrap = () => a._zod.def.innerType),
        (a.removeDefault = a.unwrap));
    });
    function iH(a, b) {
      return new iG({
        type: 'default',
        innerType: a,
        get defaultValue() {
          return 'function' == typeof b ? b() : gp.shallowClone(b);
        },
      });
    }
    let iI = j('ZodPrefault', (a, b) => {
      (dw.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iJ(a, b) {
      return new iI({
        type: 'prefault',
        innerType: a,
        get defaultValue() {
          return 'function' == typeof b ? b() : gp.shallowClone(b);
        },
      });
    }
    let iK = j('ZodNonOptional', (a, b) => {
      (dx.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iL(a, b) {
      return new iK({ type: 'nonoptional', innerType: a, ...gp.normalizeParams(b) });
    }
    let iM = j('ZodSuccess', (a, b) => {
      (dz.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iN(a) {
      return new iM({ type: 'success', innerType: a });
    }
    let iO = j('ZodCatch', (a, b) => {
      (dA.init(a, b),
        gN.init(a, b),
        (a.unwrap = () => a._zod.def.innerType),
        (a.removeCatch = a.unwrap));
    });
    function iP(a, b) {
      return new iO({
        type: 'catch',
        innerType: a,
        catchValue: 'function' == typeof b ? b : () => b,
      });
    }
    let iQ = j('ZodNaN', (a, b) => {
      (dB.init(a, b), gN.init(a, b));
    });
    function iR(a) {
      return fp(iQ, a);
    }
    let iS = j('ZodPipe', (a, b) => {
      (dC.init(a, b), gN.init(a, b), (a.in = b.in), (a.out = b.out));
    });
    function iT(a, b) {
      return new iS({ type: 'pipe', in: a, out: b });
    }
    let iU = j('ZodCodec', (a, b) => {
      (iS.init(a, b), dE.init(a, b));
    });
    function iV(a, b, c) {
      return new iU({
        type: 'pipe',
        in: a,
        out: b,
        transform: c.decode,
        reverseTransform: c.encode,
      });
    }
    let iW = j('ZodReadonly', (a, b) => {
      (dH.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function iX(a) {
      return new iW({ type: 'readonly', innerType: a });
    }
    let iY = j('ZodTemplateLiteral', (a, b) => {
      (dJ.init(a, b), gN.init(a, b));
    });
    function iZ(a, b) {
      return new iY({ type: 'template_literal', parts: a, ...gp.normalizeParams(b) });
    }
    let i$ = j('ZodLazy', (a, b) => {
      (dM.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.getter()));
    });
    function i_(a) {
      return new i$({ type: 'lazy', getter: a });
    }
    let i0 = j('ZodPromise', (a, b) => {
      (dL.init(a, b), gN.init(a, b), (a.unwrap = () => a._zod.def.innerType));
    });
    function i1(a) {
      return new i0({ type: 'promise', innerType: a });
    }
    let i2 = j('ZodFunction', (a, b) => {
      (dK.init(a, b), gN.init(a, b));
    });
    function i3(a) {
      return new i2({
        type: 'function',
        input: Array.isArray(a?.input) ? ij(a?.input) : (a?.input ?? h5(hZ())),
        output: a?.output ?? hZ(),
      });
    }
    let i4 = j('ZodCustom', (a, b) => {
      (dN.init(a, b), gN.init(a, b));
    });
    function i5(a) {
      let b = new b$({ check: 'custom' });
      return ((b._zod.check = a), b);
    }
    function i6(a, b) {
      return ge(i4, a ?? (() => !0), b);
    }
    function i7(a, b = {}) {
      return gf(i4, a, b);
    }
    function i8(a) {
      return gg(a);
    }
    function i9(a, b = { error: `Input not instance of ${a.name}` }) {
      let c = new i4({
        type: 'custom',
        check: 'custom',
        fn: (b) => b instanceof a,
        abort: !0,
        ...gp.normalizeParams(b),
      });
      return ((c._zod.bag.Class = a), c);
    }
    let ja = (...a) => gi({ Codec: iU, Boolean: hJ, String: gP }, ...a);
    function jb(a) {
      let b = i_(() => ic([gQ(a), hC(), hK(), hV(), h5(b), il(gQ(), b)]));
      return b;
    }
    function jc(a, b) {
      return iT(iA(a), b);
    }
    (a.i(98793),
      a.s(
        [
          'endsWith',
          () => fK,
          'gt',
          () => fs,
          'gte',
          () => ft,
          'includes',
          () => fI,
          'length',
          () => fE,
          'lowercase',
          () => fG,
          'lt',
          () => fq,
          'lte',
          () => fr,
          'maxLength',
          () => fC,
          'maxSize',
          () => fz,
          'mime',
          () => fM,
          'minLength',
          () => fD,
          'minSize',
          () => fA,
          'multipleOf',
          () => fy,
          'negative',
          () => fv,
          'nonnegative',
          () => fx,
          'nonpositive',
          () => fw,
          'normalize',
          () => fO,
          'overwrite',
          () => fN,
          'positive',
          () => fu,
          'property',
          () => fL,
          'regex',
          () => fF,
          'size',
          () => fB,
          'startsWith',
          () => fJ,
          'toLowerCase',
          () => fQ,
          'toUpperCase',
          () => fR,
          'trim',
          () => fP,
          'uppercase',
          () => fH,
        ],
        88821
      ),
      a.s([], 45195),
      a.i(45195),
      a.i(88821),
      a.i(3536),
      a.i(99491),
      a.s(
        [
          '$brand',
          () => k,
          'ZodFirstPartyTypeKind',
          () => b,
          'ZodIssueCode',
          () => jd,
          'config',
          () => o,
          'getErrorMap',
          () => jf,
          'setErrorMap',
          () => je,
        ],
        29271
      ),
      a.s(
        [
          'ZodFirstPartyTypeKind',
          () => b,
          'ZodIssueCode',
          () => jd,
          'getErrorMap',
          () => jf,
          'setErrorMap',
          () => je,
        ],
        97232
      ));
    let jd = {
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
    function je(a) {
      o({ customError: a });
    }
    function jf() {
      return o().customError;
    }
    (b || (b = {}), a.i(97232), a.i(29271));
    var go = dQ,
      gp = dP,
      jg = ew,
      jh = a.i(39352);
    function ji(a) {
      return eD(gP, a);
    }
    function jj(a) {
      return e4(hB, a);
    }
    function jk(a) {
      return fb(hJ, a);
    }
    function jl(a) {
      return fd(hL, a);
    }
    function jm(a) {
      return fo(h2, a);
    }
    a.s(
      [
        'bigint',
        () => jl,
        'boolean',
        () => jk,
        'date',
        () => jm,
        'number',
        () => jj,
        'string',
        () => ji,
      ],
      19209
    );
    var jn = a.i(19209),
      jo = a.i(13887),
      jo = jo;
    let jp = {
      title: (function (a) {
        let b = 'object' == typeof a.client ? a.client : {},
          c = 'object' == typeof a.server ? a.server : {},
          d = a.shared,
          e = a.runtimeEnv ? a.runtimeEnv : { ...process.env, ...a.experimental__runtimeEnv };
        return (function (a) {
          let b = a.runtimeEnvStrict ?? a.runtimeEnv ?? process.env;
          if (a.emptyStringAsUndefined)
            for (let [a, c] of Object.entries(b)) '' === c && delete b[a];
          if (a.skipValidation) return b;
          let c = 'object' == typeof a.client ? a.client : {},
            d = 'object' == typeof a.server ? a.server : {},
            e = 'object' == typeof a.shared ? a.shared : {},
            f = a.isServer ?? !0,
            g = f ? { ...d, ...e, ...c } : { ...c, ...e },
            i =
              a.createFinalSchema?.(g, f)['~standard'].validate(b) ??
              (function (a, b) {
                let c = {},
                  d = [];
                for (let e in a) {
                  let f = a[e]['~standard'].validate(b[e]);
                  if (
                    (h(f, `Validation must be synchronous, but ${e} returned a Promise.`), f.issues)
                  ) {
                    d.push(
                      ...f.issues.map((a) => ({
                        ...a,
                        message: a.message,
                        path: [e, ...(a.path ?? [])],
                      }))
                    );
                    continue;
                  }
                  c[e] = f.value;
                }
                return d.length ? { issues: d } : { value: c };
              })(g, b);
          h(i, 'Validation must be synchronous');
          let j =
              a.onValidationError ??
              ((a) => {
                throw (
                  console.error('❌ Invalid environment variables:', a),
                  Error('Invalid environment variables')
                );
              }),
            k =
              a.onInvalidAccess ??
              (() => {
                throw Error(
                  '❌ Attempted to access a server-side environment variable on the client'
                );
              });
          return i.issues
            ? j(i.issues)
            : new Proxy(
                Object.assign(
                  (a.extends ?? []).reduce((a, b) => Object.assign(a, b), {}),
                  i.value
                ),
                {
                  get(b, c) {
                    if ('string' == typeof c && '__esModule' !== c && '$$typeof' !== c)
                      return f || (a.clientPrefix && (c.startsWith(a.clientPrefix) || c in e))
                        ? Reflect.get(b, c)
                        : k(c);
                  },
                }
              );
        })({ ...a, shared: d, client: b, server: c, clientPrefix: 'NEXT_PUBLIC_', runtimeEnv: e });
      })({
        server: {
          NODE_ENV: jo.enum(['development', 'test', 'production']).default('development'),
          SENTRY_DSN: jo.string().url().optional(),
          SENTRY_ORG: jo.string().optional(),
          SENTRY_PROJECT: jo.string().optional(),
          DATABASE_URL: jo.string().url().optional(),
          SUPABASE_URL: jo.string().url().optional(),
          SUPABASE_ANON_KEY: jo.string().min(1).optional(),
          STRIPE_WEBHOOK_SECRET: jo.string().optional(),
        },
        client: {
          NEXT_PUBLIC_APP_NAME: jo.string().default('DL Starter'),
          NEXT_PUBLIC_POSTHOG_KEY: jo.string().optional(),
          NEXT_PUBLIC_SENTRY_DSN: jo.string().url().optional(),
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
      }).NEXT_PUBLIC_APP_NAME,
      description: 'Lightweight, LLM-friendly Next.js starter',
    };
    function jq({ children: a }) {
      return (0, c.jsx)('html', {
        lang: 'en',
        children: (0, c.jsx)('body', {
          className: `${e.variable} ${g.variable} antialiased`,
          children: a,
        }),
      });
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39a53cd5._.js.map
