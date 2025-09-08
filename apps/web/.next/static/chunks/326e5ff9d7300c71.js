(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  93425,
  (e) => {
    'use strict';
    let t;
    e.s(['default', () => lz], 93425);
    var n,
      r = e.i(36109);
    let i = '10.10.0',
      a = globalThis;
    function o() {
      return (u(a), a);
    }
    function u(e) {
      let t = (e.__SENTRY__ = e.__SENTRY__ || {});
      return ((t.version = t.version || i), (t[i] = t[i] || {}));
    }
    function c(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
        r = (n.__SENTRY__ = n.__SENTRY__ || {}),
        o = (r[i] = r[i] || {});
      return o[e] || (o[e] = t());
    }
    let s = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      l = Object.prototype.toString;
    function d(e, t) {
      return l.call(e) === '[object '.concat(t, ']');
    }
    function m(e) {
      return d(e, 'String');
    }
    function f(e) {
      return !!((null == e ? void 0 : e.then) && 'function' == typeof e.then);
    }
    let p = {};
    function v(e) {
      if (!('console' in a)) return e();
      let t = a.console,
        n = {},
        r = Object.keys(p);
      r.forEach((e) => {
        let r = p[e];
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
    function g(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      s &&
        (function () {
          return s ? c('loggerSettings', () => ({ enabled: !1 })) : { enabled: !1 };
        })().enabled &&
        v(() => {
          a.console[e](''.concat('Sentry Logger ', '[').concat(e, ']:'), ...n);
        });
    }
    let h = {
      log: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        g('log', ...t);
      },
      warn: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        g('warn', ...t);
      },
    };
    function _(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return !!m(e) && (d(t, 'RegExp') ? t.test(e) : !!m(t) && (n ? e === t : e.includes(t)));
    }
    function y(e, t, n) {
      try {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
      } catch (n) {
        s && h.log('Failed to add non-enumerable property "'.concat(t, '" to object'), e);
      }
    }
    function b() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.crypto || a.msCrypto,
        t = () => 16 * Math.random();
      try {
        if (null == e ? void 0 : e.randomUUID) return e.randomUUID().replace(/-/g, '');
        (null == e ? void 0 : e.getRandomValues) &&
          (t = () => {
            let t = new Uint8Array(1);
            return (e.getRandomValues(t), t[0]);
          });
      } catch (e) {}
      return '10000000100040008000100000000000'.replace(/[018]/g, (e) =>
        (e ^ ((15 & t()) >> (e / 4))).toString(16)
      );
    }
    function k() {
      return Date.now() / 1e3;
    }
    function I() {
      return (
        null != t
          ? t
          : (t = (function () {
              let { performance: e } = a;
              if (!(null == e ? void 0 : e.now) || !e.timeOrigin) return k;
              let t = e.timeOrigin;
              return () => (t + e.now()) / 1e3;
            })())
      )();
    }
    function S() {
      return b().substring(16);
    }
    let w = '_sentrySpan';
    function x(e, t) {
      t ? y(e, w, t) : delete e[w];
    }
    class z {
      clone() {
        let e = new z();
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
          x(e, this[w]),
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
          this._session &&
            (function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                (t.user &&
                  (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
                  e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
                (e.timestamp = t.timestamp || I()),
                t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
                t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
                t.sid && (e.sid = 32 === t.sid.length ? t.sid : b()),
                void 0 !== t.init && (e.init = t.init),
                !e.did && t.did && (e.did = ''.concat(t.did)),
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
            })(this._session, { user: e }),
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
            fingerprint: u = [],
            propagationContext: c,
          } = (t instanceof z ? t.getScopeData() : d(t, 'Object') ? e : void 0) || {};
        return (
          (this._tags = { ...this._tags, ...n }),
          (this._extra = { ...this._extra, ...r }),
          (this._contexts = { ...this._contexts, ...a }),
          i && Object.keys(i).length && (this._user = i),
          o && (this._level = o),
          u.length && (this._fingerprint = u),
          c && (this._propagationContext = c),
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
          x(this, void 0),
          (this._attachments = []),
          this.setPropagationContext({ traceId: b(), sampleRand: Math.random() }),
          this._notifyScopeListeners(),
          this
        );
      }
      addBreadcrumb(e, t) {
        let n = 'number' == typeof t ? t : 100;
        if (n <= 0) return this;
        let r = {
          timestamp: k(),
          ...e,
          message: e.message
            ? (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return 'string' != typeof e || 0 === t || e.length <= t
                  ? e
                  : ''.concat(e.slice(0, t), '...');
              })(e.message, 2048)
            : e.message,
        };
        if ((this._breadcrumbs.push(r), this._breadcrumbs.length > n)) {
          var i;
          ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
            null == (i = this._client) || i.recordDroppedEvent('buffer_overflow', 'log_item'));
        }
        return (this._notifyScopeListeners(), this);
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
          span: this[w],
        };
      }
      setSDKProcessingMetadata(e) {
        return (
          (this._sdkProcessingMetadata = (function e(t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            if (!n || 'object' != typeof n || r <= 0) return n;
            if (t && 0 === Object.keys(n).length) return t;
            let i = { ...t };
            for (let t in n)
              Object.prototype.hasOwnProperty.call(n, t) && (i[t] = e(i[t], n[t], r - 1));
            return i;
          })(this._sdkProcessingMetadata, e, 2)),
          this
        );
      }
      setPropagationContext(e) {
        return ((this._propagationContext = e), this);
      }
      getPropagationContext() {
        return this._propagationContext;
      }
      captureException(e, t) {
        let n = (null == t ? void 0 : t.event_id) || b();
        if (!this._client)
          return (s && h.warn('No client configured on scope - will not capture exception!'), n);
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
        let r = (null == n ? void 0 : n.event_id) || b();
        if (!this._client)
          return (s && h.warn('No client configured on scope - will not capture message!'), r);
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
        let n = (null == t ? void 0 : t.event_id) || b();
        return (
          this._client
            ? this._client.captureEvent(e, { ...t, event_id: n }, this)
            : s && h.warn('No client configured on scope - will not capture event!'),
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
          (this._propagationContext = { traceId: b(), sampleRand: Math.random() }));
      }
    }
    class Z {
      withScope(e) {
        let t,
          n = this._pushScope();
        try {
          t = e(n);
        } catch (e) {
          throw (this._popScope(), e);
        }
        return f(t)
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
      constructor(e, t) {
        let n, r;
        ((n = e || new z()),
          (r = t || new z()),
          (this._stack = [{ scope: n }]),
          (this._isolationScope = r));
      }
    }
    function U() {
      let e = u(o());
      return (e.stack =
        e.stack ||
        new Z(
          c('defaultCurrentScope', () => new z()),
          c('defaultIsolationScope', () => new z())
        ));
    }
    function O(e) {
      return U().withScope(e);
    }
    function N(e, t) {
      let n = U();
      return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
    }
    function j(e) {
      return U().withScope(() => e(U().getIsolationScope()));
    }
    function D(e) {
      let t = u(e);
      return t.acs
        ? t.acs
        : {
            withIsolationScope: j,
            withScope: O,
            withSetScope: N,
            withSetIsolationScope: (e, t) => j(t),
            getCurrentScope: () => U().getScope(),
            getIsolationScope: () => U().getIsolationScope(),
          };
    }
    function P() {
      return D(o()).getCurrentScope();
    }
    function E() {
      return D(o()).getIsolationScope();
    }
    function $() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      let r = D(o());
      if (2 === t.length) {
        let [e, n] = t;
        return e ? r.withSetScope(e, n) : r.withScope(n);
      }
      return r.withScope(t[0]);
    }
    function T() {
      return P().getClient();
    }
    let A = 'sentry.source',
      C = 'sentry.sample_rate',
      R = 'sentry.op',
      L = 'sentry.origin',
      J = 'sentry.custom_span_name',
      F = /^sentry-/;
    function M(e) {
      return e
        .split(',')
        .map((e) =>
          e.split('=').map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch (e) {
              return;
            }
          })
        )
        .reduce((e, t) => {
          let [n, r] = t;
          return (n && r && (e[n] = r), e);
        }, {});
    }
    let B = /^o(\d+)\./;
    function W(e) {
      var t;
      if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
      let n = e || (null == (t = T()) ? void 0 : t.getOptions());
      return !!n && (null != n.tracesSampleRate || !!n.tracesSampler);
    }
    let G = '_sentryScope',
      K = '_sentryIsolationScope';
    function V(e) {
      return { scope: e[G], isolationScope: e[K] };
    }
    function X(e) {
      if ('boolean' == typeof e) return Number(e);
      let t = 'string' == typeof e ? parseFloat(e) : e;
      if (!('number' != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t;
    }
    RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
    let Y = !1;
    function q(e) {
      return e && e.length > 0
        ? e.map((e) => {
            let {
              context: { spanId: t, traceId: n, traceFlags: r, ...i },
              attributes: a,
            } = e;
            return { span_id: t, trace_id: n, sampled: 1 === r, attributes: a, ...i };
          })
        : void 0;
    }
    function H(e) {
      return 'number' == typeof e
        ? Q(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1e9
          : e instanceof Date
            ? Q(e.getTime())
            : I();
    }
    function Q(e) {
      return e > 0x2540be3ff ? e / 1e3 : e;
    }
    function ee(e) {
      var t, n;
      if ('function' == typeof e.getSpanJSON) return e.getSpanJSON();
      let { spanId: r, traceId: i } = e.spanContext();
      if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
        let { attributes: t, startTime: a, name: o, endTime: u, status: c, links: s } = e;
        return {
          span_id: r,
          trace_id: i,
          data: t,
          description: o,
          parent_span_id:
            'parentSpanId' in e
              ? e.parentSpanId
              : 'parentSpanContext' in e
                ? null == (n = e.parentSpanContext)
                  ? void 0
                  : n.spanId
                : void 0,
          start_timestamp: H(a),
          timestamp: H(u) || void 0,
          status: en(c),
          op: t[R],
          origin: t[L],
          links: q(s),
        };
      }
      return { span_id: r, trace_id: i, start_timestamp: 0, data: {} };
    }
    function et(e) {
      let { traceFlags: t } = e.spanContext();
      return 1 === t;
    }
    function en(e) {
      if (e && 0 !== e.code) return 1 === e.code ? 'ok' : e.message || 'unknown_error';
    }
    let er = '_sentryChildSpans',
      ei = '_sentryRootSpan';
    function ea(e, t) {
      let n = e[ei] || e;
      (y(t, ei, n), e[er] ? e[er].add(t) : y(e, er, new Set([t])));
    }
    function eo(e) {
      return e[ei] || e;
    }
    let eu = '_frozenDsc';
    function ec(e) {
      var t, n, r, i;
      let a = T();
      if (!a) return {};
      let o = eo(e),
        u = ee(o),
        c = u.data,
        s = o.spanContext().traceState,
        l =
          null != (n = null != (t = null == s ? void 0 : s.get('sentry.sample_rate')) ? t : c[C])
            ? n
            : c['sentry.previous_trace_sample_rate'];
      function d(e) {
        return (
          ('number' == typeof l || 'string' == typeof l) && (e.sample_rate = ''.concat(l)),
          e
        );
      }
      let f = o[eu];
      if (f) return d(f);
      let p = null == s ? void 0 : s.get('sentry.dsc'),
        v =
          p &&
          (function (e) {
            let t = (function (e) {
              if (e && (m(e) || Array.isArray(e)))
                return Array.isArray(e)
                  ? e.reduce(
                      (e, t) => (
                        Object.entries(M(t)).forEach((t) => {
                          let [n, r] = t;
                          e[n] = r;
                        }),
                        e
                      ),
                      {}
                    )
                  : M(e);
            })(e);
            if (!t) return;
            let n = Object.entries(t).reduce((e, t) => {
              let [n, r] = t;
              return (n.match(F) && (e[n.slice(7)] = r), e);
            }, {});
            return Object.keys(n).length > 0 ? n : void 0;
          })(p);
      if (v) return d(v);
      let g = (function (e, t) {
          let n = t.getOptions(),
            { publicKey: r } = t.getDsn() || {},
            i = {
              environment: n.environment || 'production',
              release: n.release,
              public_key: r,
              trace_id: e,
              org_id: (function (e) {
                let t,
                  n = e.getOptions(),
                  { host: r } = e.getDsn() || {};
                return (
                  n.orgId
                    ? (t = String(n.orgId))
                    : r &&
                      (t = (function (e) {
                        let t = e.match(B);
                        return null == t ? void 0 : t[1];
                      })(r)),
                  t
                );
              })(t),
            };
          return (t.emit('createDsc', i), i);
        })(e.spanContext().traceId, a),
        h = c[A],
        _ = u.description;
      return (
        'url' !== h && _ && (g.transaction = _),
        W() &&
          ((g.sampled = String(et(o))),
          (g.sample_rand =
            null != (i = null == s ? void 0 : s.get('sentry.sample_rand'))
              ? i
              : null == (r = V(o).scope)
                ? void 0
                : r.getPropagationContext().sampleRand.toString())),
        d(g),
        a.emit('createDsc', g, o),
        g
      );
    }
    let es = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'propagationContext'];
    function el(e, t) {
      return P().captureException(
        e,
        (function (e) {
          if (e) {
            var t;
            return (t = e) instanceof z ||
              'function' == typeof t ||
              Object.keys(e).some((e) => es.includes(e))
              ? { captureContext: e }
              : e;
          }
        })(t)
      );
    }
    class ed {
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
      constructor(e = {}) {
        ((this._traceId = e.traceId || b()), (this._spanId = e.spanId || S()));
      }
    }
    function em(e) {
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
    class ef {
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
        this._startTime = H(e);
      }
      setStatus(e) {
        return ((this._status = e), this);
      }
      updateName(e) {
        return ((this._name = e), this.setAttribute(A, 'custom'), this);
      }
      end(e) {
        this._endTime ||
          ((this._endTime = H(e)),
          (function (e) {
            if (!s) return;
            let { description: t = '< unknown name >', op: n = '< unknown op >' } = ee(e),
              { spanId: r } = e.spanContext(),
              i = eo(e) === e,
              a = '[Tracing] Finishing "'
                .concat(n, '" ')
                .concat(i ? 'root ' : '', 'span "')
                .concat(t, '" with ID ')
                .concat(r);
            h.log(a);
          })(this),
          this._onSpanEnded());
      }
      getSpanJSON() {
        return {
          data: this._attributes,
          description: this._name,
          op: this._attributes[R],
          parent_span_id: this._parentSpanId,
          span_id: this._spanId,
          start_timestamp: this._startTime,
          status: en(this._status),
          timestamp: this._endTime,
          trace_id: this._traceId,
          origin: this._attributes[L],
          profile_id: this._attributes['sentry.profile_id'],
          exclusive_time: this._attributes['sentry.exclusive_time'],
          measurements: em(this._events),
          is_segment: (this._isStandaloneSpan && eo(this) === this) || void 0,
          segment_id: this._isStandaloneSpan ? eo(this).spanContext().spanId : void 0,
          links: q(this._links),
        };
      }
      isRecording() {
        return !this._endTime && !!this._sampled;
      }
      addEvent(e, t, n) {
        s && h.log('[Tracing] Adding an event to span:', e);
        let r = ep(t) ? t : n || I(),
          i = ep(t) ? {} : t || {},
          a = { name: e, time: H(r), attributes: i };
        return (this._events.push(a), this);
      }
      isStandaloneSpan() {
        return !!this._isStandaloneSpan;
      }
      _onSpanEnded() {
        let e = T();
        if ((e && e.emit('spanEnd', this), !(this._isStandaloneSpan || this === eo(this)))) return;
        if (this._isStandaloneSpan)
          return void (this._sampled
            ? (function (e) {
                let t = T();
                if (!t) return;
                let n = e[1];
                if (!n || 0 === n.length) return t.recordDroppedEvent('before_send', 'span');
                t.sendEnvelope(e);
              })(
                (function (e, t) {
                  let n = ec(e[0]),
                    r = null == t ? void 0 : t.getDsn(),
                    i = null == t ? void 0 : t.getOptions().tunnel,
                    a = {
                      sent_at: new Date().toISOString(),
                      ...(!!n.trace_id && !!n.public_key && { trace: n }),
                      ...(!!i &&
                        r && {
                          dsn: (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              {
                                host: n,
                                path: r,
                                pass: i,
                                port: a,
                                projectId: o,
                                protocol: u,
                                publicKey: c,
                              } = e;
                            return (
                              ''
                                .concat(u, '://')
                                .concat(c)
                                .concat(t && i ? ':'.concat(i) : '') +
                              '@'
                                .concat(n)
                                .concat(a ? ':'.concat(a) : '', '/')
                                .concat(r ? ''.concat(r, '/') : r)
                                .concat(o)
                            );
                          })(r),
                        }),
                    },
                    { beforeSendSpan: o, ignoreSpans: u } =
                      (null == t ? void 0 : t.getOptions()) || {},
                    c = (null == u ? void 0 : u.length)
                      ? e.filter(
                          (e) =>
                            !(function (e, t) {
                              if (!(null == t ? void 0 : t.length) || !e.description) return !1;
                              for (let r of t) {
                                var n;
                                if ('string' == typeof (n = r) || n instanceof RegExp) {
                                  if (_(e.description, r)) return !0;
                                  continue;
                                }
                                if (!r.name && !r.op) continue;
                                let t = !r.name || _(e.description, r.name),
                                  i = !r.op || (e.op && _(e.op, r.op));
                                if (t && i) return !0;
                              }
                              return !1;
                            })(ee(e), u)
                        )
                      : e,
                    s = e.length - c.length;
                  s && (null == t || t.recordDroppedEvent('before_send', 'span', s));
                  let l = o
                      ? (e) => {
                          let t = ee(e),
                            n = o(t);
                          return (
                            n ||
                            (Y ||
                              (v(() => {
                                console.warn(
                                  '[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.'
                                );
                              }),
                              (Y = !0)),
                            t)
                          );
                        }
                      : ee,
                    d = [];
                  for (let e of c) {
                    let t = l(e);
                    t && d.push([{ type: 'span' }, t]);
                  }
                  return (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return [e, t];
                  })(a, d);
                })([this], e)
              )
            : (s &&
                h.log(
                  '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'
                ),
              e && e.recordDroppedEvent('sample_rate', 'span')));
        let t = this._convertSpanToTransaction();
        t && (V(this).scope || P()).captureEvent(t);
      }
      _convertSpanToTransaction() {
        var e;
        if (!ev(ee(this))) return;
        this._name ||
          (s && h.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
          (this._name = '<unlabeled transaction>'));
        let { scope: t, isolationScope: n } = V(this),
          r =
            null == t || null == (e = t.getScopeData().sdkProcessingMetadata)
              ? void 0
              : e.normalizedRequest;
        if (!0 !== this._sampled) return;
        let i = (function (e) {
            let t = new Set();
            return (
              !(function e(n) {
                if (!t.has(n) && et(n))
                  for (let r of (t.add(n), n[er] ? Array.from(n[er]) : [])) e(r);
              })(e),
              Array.from(t)
            );
          })(this)
            .filter((e) => {
              var t;
              return e !== this && !((t = e) instanceof ef && t.isStandaloneSpan());
            })
            .map((e) => ee(e))
            .filter(ev),
          a = this._attributes[A];
        (delete this._attributes[J],
          i.forEach((e) => {
            delete e.data[J];
          }));
        let o = {
            contexts: {
              trace: (function (e) {
                let { spanId: t, traceId: n } = e.spanContext(),
                  { data: r, op: i, parent_span_id: a, status: o, origin: u, links: c } = ee(e);
                return {
                  parent_span_id: a,
                  span_id: t,
                  trace_id: n,
                  data: r,
                  op: i,
                  status: o,
                  origin: u,
                  links: c,
                };
              })(this),
            },
            spans:
              i.length > 1e3
                ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3)
                : i,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: 'transaction',
            sdkProcessingMetadata: {
              capturedSpanScope: t,
              capturedSpanIsolationScope: n,
              dynamicSamplingContext: ec(this),
            },
            request: r,
            ...(a && { transaction_info: { source: a } }),
          },
          u = em(this._events);
        return (
          u &&
            Object.keys(u).length &&
            (s &&
              h.log(
                '[Measurements] Adding measurements to transaction event',
                JSON.stringify(u, void 0, 2)
              ),
            (o.measurements = u)),
          o
        );
      }
      constructor(e = {}) {
        ((this._traceId = e.traceId || b()),
          (this._spanId = e.spanId || S()),
          (this._startTime = e.startTimestamp || I()),
          (this._links = e.links),
          (this._attributes = {}),
          this.setAttributes({ [L]: 'manual', [R]: e.op, ...e.attributes }),
          (this._name = e.name),
          e.parentSpanId && (this._parentSpanId = e.parentSpanId),
          'sampled' in e && (this._sampled = e.sampled),
          e.endTimestamp && (this._endTime = e.endTimestamp),
          (this._events = []),
          (this._isStandaloneSpan = e.isStandalone),
          this._endTime && this._onSpanEnded());
      }
    }
    function ep(e) {
      return (e && 'number' == typeof e) || e instanceof Date || Array.isArray(e);
    }
    function ev(e) {
      return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
    }
    let eg = '__SENTRY_SUPPRESS_TRACING__';
    function eh(e, t, n) {
      var r, i;
      let a = T(),
        o = (null == a ? void 0 : a.getOptions()) || {},
        { name: u = '' } = e,
        c = { spanAttributes: { ...e.attributes }, spanName: u, parentSampled: n };
      null == a || a.emit('beforeSampling', c, { decision: !1 });
      let l = null != (i = c.parentSampled) ? i : n,
        d = c.spanAttributes,
        m = t.getPropagationContext(),
        [f, p, v] = t.getScopeData().sdkProcessingMetadata[eg]
          ? [!1]
          : (function (e, t, n) {
              let r, i;
              if (!W(e)) return [!1];
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
              let a = X(r);
              if (void 0 === a)
                return (
                  s &&
                    h.warn(
                      '[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got '
                        .concat(JSON.stringify(r), ' of type ')
                        .concat(JSON.stringify(typeof r), '.')
                    ),
                  [!1]
                );
              if (!a)
                return (
                  s &&
                    h.log(
                      '[Tracing] Discarding transaction because '.concat(
                        'function' == typeof e.tracesSampler
                          ? 'tracesSampler returned 0 or false'
                          : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
                      )
                    ),
                  [!1, a, i]
                );
              let o = n < a;
              return (
                !o &&
                  s &&
                  h.log(
                    "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(
                      Number(r),
                      ')'
                    )
                  ),
                [o, a, i]
              );
            })(
              o,
              {
                name: u,
                parentSampled: l,
                attributes: d,
                parentSampleRate: X(null == (r = m.dsc) ? void 0 : r.sample_rate),
              },
              m.sampleRand
            ),
        g = new ef({
          ...e,
          attributes: { [A]: 'custom', [C]: void 0 !== p && v ? p : void 0, ...d },
          sampled: f,
        });
      return (
        !f &&
          a &&
          (s &&
            h.log('[Tracing] Discarding root span because its trace was not chosen to be sampled.'),
          a.recordDroppedEvent('sample_rate', 'transaction')),
        a && a.emit('spanStart', g),
        g
      );
    }
    var e_ = e.i(8774);
    function ey(e, t) {
      if (e instanceof Promise) throw Error(t);
    }
    function eb(e) {
      return e;
    }
    function ek(e) {
      return e;
    }
    function eI(e) {}
    function eS(e) {
      throw Error();
    }
    function ew(e) {}
    function ex(e) {
      let t = Object.values(e).filter((e) => 'number' == typeof e);
      return Object.entries(e)
        .filter((e) => {
          let [n, r] = e;
          return -1 === t.indexOf(+n);
        })
        .map((e) => {
          let [t, n] = e;
          return n;
        });
    }
    function ez(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '|';
      return e.map((e) => e4(e)).join(t);
    }
    function eZ(e, t) {
      return 'bigint' == typeof t ? t.toString() : t;
    }
    function eU(e) {
      return {
        get value() {
          {
            let t = e();
            return (Object.defineProperty(this, 'value', { value: t }), t);
          }
        },
      };
    }
    function eO(e) {
      return null == e;
    }
    function eN(e) {
      let t = +!!e.startsWith('^'),
        n = e.endsWith('$') ? e.length - 1 : e.length;
      return e.slice(t, n);
    }
    function ej(e, t) {
      let n = (e.toString().split('.')[1] || '').length,
        r = t.toString(),
        i = (r.split('.')[1] || '').length;
      if (0 === i && /\d?e-\d?/.test(r)) {
        let e = r.match(/\d?e-(\d?)/);
        (null == e ? void 0 : e[1]) && (i = Number.parseInt(e[1]));
      }
      let a = n > i ? n : i;
      return (
        (Number.parseInt(e.toFixed(a).replace('.', '')) %
          Number.parseInt(t.toFixed(a).replace('.', ''))) /
        10 ** a
      );
    }
    (e.s(
      [
        '$brand',
        () => re,
        '$input',
        () => aj,
        '$output',
        () => aN,
        'NEVER',
        () => n5,
        'TimePrecision',
        () => a9,
        'ZodAny',
        () => cK,
        'ZodArray',
        () => c1,
        'ZodBase64',
        () => cf,
        'ZodBase64URL',
        () => cv,
        'ZodBigInt',
        () => cT,
        'ZodBigIntFormat',
        () => cC,
        'ZodBoolean',
        () => cE,
        'ZodCIDRv4',
        () => cs,
        'ZodCIDRv6',
        () => cd,
        'ZodCUID',
        () => u9,
        'ZodCUID2',
        () => u8,
        'ZodCatch',
        () => sA,
        'ZodCodec',
        () => sM,
        'ZodCustom',
        () => s4,
        'ZodCustomStringFormat',
        () => ck,
        'ZodDate',
        () => c4,
        'ZodDefault',
        () => sO,
        'ZodDiscriminatedUnion',
        () => sn,
        'ZodE164',
        () => ch,
        'ZodEmail',
        () => uM,
        'ZodEmoji',
        () => u4,
        'ZodEnum',
        () => sv,
        'ZodError',
        () => uw,
        'ZodFile',
        () => sb,
        'ZodFirstPartyTypeKind',
        () => n,
        'ZodFunction',
        () => sQ,
        'ZodGUID',
        () => uW,
        'ZodIPv4',
        () => ca,
        'ZodIPv6',
        () => cu,
        'ZodISODate',
        () => ln,
        'ZodISODateTime',
        () => le,
        'ZodISODuration',
        () => lo,
        'ZodISOTime',
        () => li,
        'ZodIntersection',
        () => si,
        'ZodIssueCode',
        () => lg,
        'ZodJWT',
        () => cy,
        'ZodKSUID',
        () => cr,
        'ZodLazy',
        () => sX,
        'ZodLiteral',
        () => s_,
        'ZodMap',
        () => sd,
        'ZodNaN',
        () => sR,
        'ZodNanoID',
        () => u1,
        'ZodNever',
        () => cq,
        'ZodNonOptional',
        () => sP,
        'ZodNull',
        () => cW,
        'ZodNullable',
        () => sz,
        'ZodNumber',
        () => cz,
        'ZodNumberFormat',
        () => cU,
        'ZodObject',
        () => c3,
        'ZodOptional',
        () => sw,
        'ZodPipe',
        () => sJ,
        'ZodPrefault',
        () => sj,
        'ZodPromise',
        () => sq,
        'ZodReadonly',
        () => sW,
        'ZodRealError',
        () => ux,
        'ZodRecord',
        () => sc,
        'ZodSet',
        () => sf,
        'ZodString',
        () => uL,
        'ZodStringFormat',
        () => uF,
        'ZodSuccess',
        () => s$,
        'ZodSymbol',
        () => cJ,
        'ZodTemplateLiteral',
        () => sK,
        'ZodTransform',
        () => sI,
        'ZodTuple',
        () => so,
        'ZodType',
        () => uC,
        'ZodULID',
        () => u7,
        'ZodURL',
        () => uH,
        'ZodUUID',
        () => uK,
        'ZodUndefined',
        () => cM,
        'ZodUnion',
        () => se,
        'ZodUnknown',
        () => cX,
        'ZodVoid',
        () => cQ,
        'ZodXID',
        () => ct,
        '_ZodString',
        () => uR,
        '_default',
        () => sN,
        '_function',
        () => s0,
        'any',
        () => cV,
        'array',
        () => c2,
        'base64',
        () => cp,
        'base64url',
        () => cg,
        'bigint',
        () => cA,
        'boolean',
        () => c$,
        'catch',
        () => sC,
        'check',
        () => s6,
        'cidrv4',
        () => cl,
        'cidrv6',
        () => cm,
        'clone',
        () => eH,
        'codec',
        () => sB,
        'coerce',
        () => lk,
        'config',
        () => ri,
        'core',
        () => lv,
        'cuid',
        () => u3,
        'cuid2',
        () => u5,
        'custom',
        () => s1,
        'date',
        () => c6,
        'decode',
        () => uj,
        'decodeAsync',
        () => uP,
        'discriminatedUnion',
        () => sr,
        'e164',
        () => c_,
        'email',
        () => uB,
        'emoji',
        () => u6,
        'encode',
        () => uN,
        'encodeAsync',
        () => uD,
        'endsWith',
        () => oM,
        'enum',
        () => sg,
        'file',
        () => sk,
        'flattenError',
        () => rc,
        'float32',
        () => cN,
        'float64',
        () => cj,
        'formatError',
        () => rs,
        'function',
        () => s0,
        'getErrorMap',
        () => l_,
        'globalRegistry',
        () => aE,
        'gt',
        () => ox,
        'gte',
        () => oz,
        'guid',
        () => uG,
        'hash',
        () => cx,
        'hex',
        () => cw,
        'hostname',
        () => cS,
        'httpUrl',
        () => u0,
        'includes',
        () => oJ,
        'instanceof',
        () => s3,
        'int',
        () => cO,
        'int32',
        () => cD,
        'int64',
        () => cR,
        'intersection',
        () => sa,
        'ipv4',
        () => co,
        'ipv6',
        () => cc,
        'iso',
        () => lb,
        'json',
        () => s5,
        'jwt',
        () => cb,
        'keyof',
        () => c9,
        'ksuid',
        () => ci,
        'lazy',
        () => sY,
        'length',
        () => oA,
        'literal',
        () => sy,
        'locales',
        () => ly,
        'looseObject',
        () => c7,
        'lowercase',
        () => oR,
        'lt',
        () => oS,
        'lte',
        () => ow,
        'map',
        () => sm,
        'maxLength',
        () => o$,
        'maxSize',
        () => oD,
        'mime',
        () => oW,
        'minLength',
        () => oT,
        'minSize',
        () => oP,
        'multipleOf',
        () => oj,
        'nan',
        () => sL,
        'nanoid',
        () => u2,
        'nativeEnum',
        () => sh,
        'negative',
        () => oU,
        'never',
        () => cH,
        'nonnegative',
        () => oN,
        'nonoptional',
        () => sE,
        'nonpositive',
        () => oO,
        'normalize',
        () => oK,
        'null',
        () => cG,
        'nullable',
        () => sZ,
        'nullish',
        () => sU,
        'number',
        () => cZ,
        'object',
        () => c8,
        'optional',
        () => sx,
        'overwrite',
        () => oG,
        'parse',
        () => uz,
        'parseAsync',
        () => uZ,
        'partialRecord',
        () => sl,
        'pipe',
        () => sF,
        'positive',
        () => oZ,
        'prefault',
        () => sD,
        'preprocess',
        () => s7,
        'prettifyError',
        () => rm,
        'promise',
        () => sH,
        'property',
        () => oB,
        'readonly',
        () => sG,
        'record',
        () => ss,
        'refine',
        () => s2,
        'regex',
        () => oC,
        'regexes',
        () => uk,
        'registry',
        () => aP,
        'safeDecode',
        () => u$,
        'safeDecodeAsync',
        () => uA,
        'safeEncode',
        () => uE,
        'safeEncodeAsync',
        () => uT,
        'safeParse',
        () => uU,
        'safeParseAsync',
        () => uO,
        'set',
        () => sp,
        'setErrorMap',
        () => lh,
        'size',
        () => oE,
        'startsWith',
        () => oF,
        'strictObject',
        () => c5,
        'string',
        () => uJ,
        'stringFormat',
        () => cI,
        'stringbool',
        () => s8,
        'success',
        () => sT,
        'superRefine',
        () => s9,
        'symbol',
        () => cF,
        'templateLiteral',
        () => sV,
        'toJSONSchema',
        () => u_,
        'toLowerCase',
        () => oX,
        'toUpperCase',
        () => oY,
        'transform',
        () => sS,
        'treeifyError',
        () => rl,
        'trim',
        () => oV,
        'tuple',
        () => su,
        'uint32',
        () => cP,
        'uint64',
        () => cL,
        'ulid',
        () => ce,
        'undefined',
        () => cB,
        'union',
        () => st,
        'unknown',
        () => cY,
        'uppercase',
        () => oL,
        'url',
        () => uQ,
        'util',
        () => uI,
        'uuid',
        () => uV,
        'uuidv4',
        () => uX,
        'uuidv6',
        () => uY,
        'uuidv7',
        () => uq,
        'void',
        () => c0,
        'xid',
        () => cn,
      ],
      48969
    ),
      e.s([], 39499),
      e.s(
        [
          '$ZodAny',
          () => iR,
          '$ZodArray',
          () => iW,
          '$ZodAsyncError',
          () => rt,
          '$ZodBase64',
          () => iw,
          '$ZodBase64URL',
          () => iz,
          '$ZodBigInt',
          () => iE,
          '$ZodBigIntFormat',
          () => i$,
          '$ZodBoolean',
          () => iP,
          '$ZodCIDRv4',
          () => ik,
          '$ZodCIDRv6',
          () => iI,
          '$ZodCUID',
          () => is,
          '$ZodCUID2',
          () => il,
          '$ZodCatch',
          () => am,
          '$ZodCheck',
          () => rA,
          '$ZodCheckBigIntFormat',
          () => rM,
          '$ZodCheckEndsWith',
          () => r6,
          '$ZodCheckGreaterThan',
          () => rL,
          '$ZodCheckIncludes',
          () => r0,
          '$ZodCheckLengthEquals',
          () => rX,
          '$ZodCheckLessThan',
          () => rR,
          '$ZodCheckLowerCase',
          () => rH,
          '$ZodCheckMaxLength',
          () => rK,
          '$ZodCheckMaxSize',
          () => rB,
          '$ZodCheckMimeType',
          () => r9,
          '$ZodCheckMinLength',
          () => rV,
          '$ZodCheckMinSize',
          () => rW,
          '$ZodCheckMultipleOf',
          () => rJ,
          '$ZodCheckNumberFormat',
          () => rF,
          '$ZodCheckOverwrite',
          () => r3,
          '$ZodCheckProperty',
          () => r2,
          '$ZodCheckRegex',
          () => rq,
          '$ZodCheckSizeEquals',
          () => rG,
          '$ZodCheckStartsWith',
          () => r4,
          '$ZodCheckStringFormat',
          () => rY,
          '$ZodCheckUpperCase',
          () => rQ,
          '$ZodCodec',
          () => ag,
          '$ZodCustom',
          () => ax,
          '$ZodCustomStringFormat',
          () => iN,
          '$ZodDate',
          () => iM,
          '$ZodDefault',
          () => ao,
          '$ZodDiscriminatedUnion',
          () => iQ,
          '$ZodE164',
          () => iZ,
          '$ZodEmail',
          () => ia,
          '$ZodEmoji',
          () => iu,
          '$ZodEncodeError',
          () => rn,
          '$ZodEnum',
          () => i7,
          '$ZodError',
          () => ro,
          '$ZodFile',
          () => at,
          '$ZodFunction',
          () => aI,
          '$ZodGUID',
          () => ir,
          '$ZodIPv4',
          () => iy,
          '$ZodIPv6',
          () => ib,
          '$ZodISODate',
          () => ig,
          '$ZodISODateTime',
          () => iv,
          '$ZodISODuration',
          () => i_,
          '$ZodISOTime',
          () => ih,
          '$ZodIntersection',
          () => i0,
          '$ZodJWT',
          () => iO,
          '$ZodKSUID',
          () => ip,
          '$ZodLazy',
          () => aw,
          '$ZodLiteral',
          () => ae,
          '$ZodMap',
          () => i9,
          '$ZodNaN',
          () => af,
          '$ZodNanoID',
          () => ic,
          '$ZodNever',
          () => iJ,
          '$ZodNonOptional',
          () => as,
          '$ZodNull',
          () => iC,
          '$ZodNullable',
          () => aa,
          '$ZodNumber',
          () => ij,
          '$ZodNumberFormat',
          () => iD,
          '$ZodObject',
          () => iX,
          '$ZodObjectJIT',
          () => iY,
          '$ZodOptional',
          () => ai,
          '$ZodPipe',
          () => ap,
          '$ZodPrefault',
          () => ac,
          '$ZodPromise',
          () => aS,
          '$ZodReadonly',
          () => ay,
          '$ZodRealError',
          () => ru,
          '$ZodRecord',
          () => i2,
          '$ZodRegistry',
          () => aD,
          '$ZodSet',
          () => i8,
          '$ZodString',
          () => ie,
          '$ZodStringFormat',
          () => it,
          '$ZodSuccess',
          () => ad,
          '$ZodSymbol',
          () => iT,
          '$ZodTemplateLiteral',
          () => ak,
          '$ZodTransform',
          () => an,
          '$ZodTuple',
          () => i6,
          '$ZodType',
          () => r7,
          '$ZodULID',
          () => id,
          '$ZodURL',
          () => io,
          '$ZodUUID',
          () => ii,
          '$ZodUndefined',
          () => iA,
          '$ZodUnion',
          () => iH,
          '$ZodUnknown',
          () => iL,
          '$ZodVoid',
          () => iF,
          '$ZodXID',
          () => im,
          '$brand',
          () => re,
          '$constructor',
          () => n7,
          '$input',
          () => aj,
          '$output',
          () => aN,
          'Doc',
          () => r8,
          'JSONSchema',
          () => uy,
          'JSONSchemaGenerator',
          () => uh,
          'NEVER',
          () => n5,
          'TimePrecision',
          () => a9,
          '_any',
          () => og,
          '_array',
          () => oq,
          '_base64',
          () => a4,
          '_base64url',
          () => a6,
          '_bigint',
          () => os,
          '_boolean',
          () => ou,
          '_catch',
          () => ua,
          '_check',
          () => up,
          '_cidrv4',
          () => aQ,
          '_cidrv6',
          () => a0,
          '_coercedBigint',
          () => ol,
          '_coercedBoolean',
          () => oc,
          '_coercedDate',
          () => ok,
          '_coercedNumber',
          () => ot,
          '_coercedString',
          () => aT,
          '_cuid',
          () => aG,
          '_cuid2',
          () => aK,
          '_custom',
          () => ud,
          '_date',
          () => ob,
          '_decode',
          () => rS,
          '_decodeAsync',
          () => rZ,
          '_default',
          () => un,
          '_discriminatedUnion',
          () => oQ,
          '_e164',
          () => a1,
          '_email',
          () => aA,
          '_emoji',
          () => aB,
          '_encode',
          () => rk,
          '_encodeAsync',
          () => rx,
          '_endsWith',
          () => oM,
          '_enum',
          () => o9,
          '_file',
          () => o5,
          '_float32',
          () => or,
          '_float64',
          () => oi,
          '_gt',
          () => ox,
          '_gte',
          () => oz,
          '_guid',
          () => aC,
          '_includes',
          () => oJ,
          '_int',
          () => on,
          '_int32',
          () => oa,
          '_int64',
          () => od,
          '_intersection',
          () => o0,
          '_ipv4',
          () => aq,
          '_ipv6',
          () => aH,
          '_isoDate',
          () => a8,
          '_isoDateTime',
          () => a3,
          '_isoDuration',
          () => a7,
          '_isoTime',
          () => a5,
          '_jwt',
          () => a2,
          '_ksuid',
          () => aY,
          '_lazy',
          () => us,
          '_length',
          () => oA,
          '_literal',
          () => o8,
          '_lowercase',
          () => oR,
          '_lt',
          () => oS,
          '_lte',
          () => ow,
          '_map',
          () => o1,
          '_max',
          () => ow,
          '_maxLength',
          () => o$,
          '_maxSize',
          () => oD,
          '_mime',
          () => oW,
          '_min',
          () => oz,
          '_minLength',
          () => oT,
          '_minSize',
          () => oP,
          '_multipleOf',
          () => oj,
          '_nan',
          () => oI,
          '_nanoid',
          () => aW,
          '_nativeEnum',
          () => o3,
          '_negative',
          () => oU,
          '_never',
          () => o_,
          '_nonnegative',
          () => oN,
          '_nonoptional',
          () => ur,
          '_nonpositive',
          () => oO,
          '_normalize',
          () => oK,
          '_null',
          () => ov,
          '_nullable',
          () => ut,
          '_number',
          () => oe,
          '_optional',
          () => ue,
          '_overwrite',
          () => oG,
          '_parse',
          () => rf,
          '_parseAsync',
          () => rv,
          '_pipe',
          () => uo,
          '_positive',
          () => oZ,
          '_promise',
          () => ul,
          '_property',
          () => oB,
          '_readonly',
          () => uu,
          '_record',
          () => o6,
          '_refine',
          () => um,
          '_regex',
          () => oC,
          '_safeDecode',
          () => rj,
          '_safeDecodeAsync',
          () => r$,
          '_safeEncode',
          () => rO,
          '_safeEncodeAsync',
          () => rP,
          '_safeParse',
          () => rh,
          '_safeParseAsync',
          () => ry,
          '_set',
          () => o2,
          '_size',
          () => oE,
          '_startsWith',
          () => oF,
          '_string',
          () => a$,
          '_stringFormat',
          () => ug,
          '_stringbool',
          () => uv,
          '_success',
          () => ui,
          '_superRefine',
          () => uf,
          '_symbol',
          () => of,
          '_templateLiteral',
          () => uc,
          '_toLowerCase',
          () => oX,
          '_toUpperCase',
          () => oY,
          '_transform',
          () => o7,
          '_trim',
          () => oV,
          '_tuple',
          () => o4,
          '_uint32',
          () => oo,
          '_uint64',
          () => om,
          '_ulid',
          () => aV,
          '_undefined',
          () => op,
          '_union',
          () => oH,
          '_unknown',
          () => oh,
          '_uppercase',
          () => oL,
          '_url',
          () => aM,
          '_uuid',
          () => aR,
          '_uuidv4',
          () => aL,
          '_uuidv6',
          () => aJ,
          '_uuidv7',
          () => aF,
          '_void',
          () => oy,
          '_xid',
          () => aX,
          'clone',
          () => eH,
          'config',
          () => ri,
          'decode',
          () => rw,
          'decodeAsync',
          () => rU,
          'encode',
          () => rI,
          'encodeAsync',
          () => rz,
          'flattenError',
          () => rc,
          'formatError',
          () => rs,
          'globalConfig',
          () => rr,
          'globalRegistry',
          () => aE,
          'isValidBase64',
          () => iS,
          'isValidBase64URL',
          () => ix,
          'isValidJWT',
          () => iU,
          'locales',
          () => aO,
          'parse',
          () => rp,
          'parseAsync',
          () => rg,
          'prettifyError',
          () => rm,
          'regexes',
          () => aU,
          'registry',
          () => aP,
          'safeDecode',
          () => rD,
          'safeDecodeAsync',
          () => rT,
          'safeEncode',
          () => rN,
          'safeEncodeAsync',
          () => rE,
          'safeParse',
          () => r_,
          'safeParseAsync',
          () => rb,
          'toDotPath',
          () => rd,
          'toJSONSchema',
          () => u_,
          'treeifyError',
          () => rl,
          'util',
          () => aZ,
          'version',
          () => r5,
        ],
        18048
      ),
      e.s([], 8168),
      e.s(
        [
          'BIGINT_FORMAT_RANGES',
          () => e2,
          'Class',
          () => tg,
          'NUMBER_FORMAT_RANGES',
          () => e1,
          'aborted',
          () => tn,
          'allowsEval',
          () => eB,
          'assert',
          () => ew,
          'assertEqual',
          () => eb,
          'assertIs',
          () => eI,
          'assertNever',
          () => eS,
          'assertNotEqual',
          () => ek,
          'assignProp',
          () => e$,
          'base64ToUint8Array',
          () => tl,
          'base64urlToUint8Array',
          () => tm,
          'cached',
          () => eU,
          'captureStackTrace',
          () => eF,
          'cleanEnum',
          () => ts,
          'cleanRegex',
          () => eN,
          'clone',
          () => eH,
          'cloneDef',
          () => eA,
          'createTransparentProxy',
          () => e0,
          'defineLazy',
          () => eP,
          'esc',
          () => eJ,
          'escapeRegex',
          () => eq,
          'extend',
          () => e8,
          'finalizeIssue',
          () => ta,
          'floatSafeRemainder',
          () => ej,
          'getElementAtPath',
          () => eC,
          'getEnumValues',
          () => ex,
          'getLengthableOrigin',
          () => tu,
          'getParsedType',
          () => eV,
          'getSizableOrigin',
          () => to,
          'hexToUint8Array',
          () => tp,
          'isObject',
          () => eM,
          'isPlainObject',
          () => eW,
          'issue',
          () => tc,
          'joinValues',
          () => ez,
          'jsonStringifyReplacer',
          () => eZ,
          'merge',
          () => e7,
          'mergeDefs',
          () => eT,
          'normalizeParams',
          () => eQ,
          'nullish',
          () => eO,
          'numKeys',
          () => eK,
          'objectClone',
          () => eE,
          'omit',
          () => e3,
          'optionalKeys',
          () => e6,
          'partial',
          () => te,
          'pick',
          () => e9,
          'prefixIssues',
          () => tr,
          'primitiveTypes',
          () => eY,
          'promiseAllObject',
          () => eR,
          'propertyKeyTypes',
          () => eX,
          'randomString',
          () => eL,
          'required',
          () => tt,
          'safeExtend',
          () => e5,
          'shallowClone',
          () => eG,
          'stringifyPrimitive',
          () => e4,
          'uint8ArrayToBase64',
          () => td,
          'uint8ArrayToBase64url',
          () => tf,
          'uint8ArrayToHex',
          () => tv,
          'unwrapMessage',
          () => ti,
        ],
        25401
      ));
    let eD = Symbol('evaluating');
    function eP(e, t, n) {
      let r;
      Object.defineProperty(e, t, {
        get() {
          if (r !== eD) return (void 0 === r && ((r = eD), (r = n())), r);
        },
        set(n) {
          Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
      });
    }
    function eE(e) {
      return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
    }
    function e$(e, t, n) {
      Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
    }
    function eT() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      let r = {};
      for (let e of t) Object.assign(r, Object.getOwnPropertyDescriptors(e));
      return Object.defineProperties({}, r);
    }
    function eA(e) {
      return eT(e._zod.def);
    }
    function eC(e, t) {
      return t ? t.reduce((e, t) => (null == e ? void 0 : e[t]), e) : e;
    }
    function eR(e) {
      let t = Object.keys(e);
      return Promise.all(t.map((t) => e[t])).then((e) => {
        let n = {};
        for (let r = 0; r < t.length; r++) n[t[r]] = e[r];
        return n;
      });
    }
    function eL() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = 'abcdefghijklmnopqrstuvwxyz',
        n = '';
      for (let r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
      return n;
    }
    function eJ(e) {
      return JSON.stringify(e);
    }
    let eF =
      'captureStackTrace' in Error
        ? Error.captureStackTrace
        : function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          };
    function eM(e) {
      return 'object' == typeof e && null !== e && !Array.isArray(e);
    }
    let eB = eU(() => {
      var e, t;
      if (
        'undefined' != typeof navigator &&
        (null == (t = navigator) || null == (e = t.userAgent) ? void 0 : e.includes('Cloudflare'))
      )
        return !1;
      try {
        return (Function(''), !0);
      } catch (e) {
        return !1;
      }
    });
    function eW(e) {
      if (!1 === eM(e)) return !1;
      let t = e.constructor;
      if (void 0 === t) return !0;
      let n = t.prototype;
      return !1 !== eM(n) && !1 !== Object.prototype.hasOwnProperty.call(n, 'isPrototypeOf');
    }
    function eG(e) {
      return eW(e) ? { ...e } : e;
    }
    function eK(e) {
      let t = 0;
      for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
      return t;
    }
    let eV = (e) => {
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
            throw Error('Unknown data type: '.concat(t));
        }
      },
      eX = new Set(['string', 'number', 'symbol']),
      eY = new Set(['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined']);
    function eq(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function eH(e, t, n) {
      let r = new e._zod.constr(null != t ? t : e._zod.def);
      return ((!t || (null == n ? void 0 : n.parent)) && (r._zod.parent = e), r);
    }
    function eQ(e) {
      if (!e) return {};
      if ('string' == typeof e) return { error: () => e };
      if ((null == e ? void 0 : e.message) !== void 0) {
        if ((null == e ? void 0 : e.error) !== void 0)
          throw Error('Cannot specify both `message` and `error` params');
        e.error = e.message;
      }
      return (delete e.message, 'string' == typeof e.error) ? { ...e, error: () => e.error } : e;
    }
    function e0(e) {
      let t;
      return new Proxy(
        {},
        {
          get: (n, r, i) => (null != t || (t = e()), Reflect.get(t, r, i)),
          set: (n, r, i, a) => (null != t || (t = e()), Reflect.set(t, r, i, a)),
          has: (n, r) => (null != t || (t = e()), Reflect.has(t, r)),
          deleteProperty: (n, r) => (null != t || (t = e()), Reflect.deleteProperty(t, r)),
          ownKeys: (n) => (null != t || (t = e()), Reflect.ownKeys(t)),
          getOwnPropertyDescriptor: (n, r) => (
            null != t || (t = e()),
            Reflect.getOwnPropertyDescriptor(t, r)
          ),
          defineProperty: (n, r, i) => (null != t || (t = e()), Reflect.defineProperty(t, r, i)),
        }
      );
    }
    function e4(e) {
      return 'bigint' == typeof e
        ? e.toString() + 'n'
        : 'string' == typeof e
          ? '"'.concat(e, '"')
          : ''.concat(e);
    }
    function e6(e) {
      return Object.keys(e).filter(
        (t) => 'optional' === e[t]._zod.optin && 'optional' === e[t]._zod.optout
      );
    }
    let e1 = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      },
      e2 = {
        int64: [BigInt('-9223372036854775808'), BigInt('9223372036854775807')],
        uint64: [BigInt(0), BigInt('18446744073709551615')],
      };
    function e9(e, t) {
      let n = e._zod.def,
        r = eT(e._zod.def, {
          get shape() {
            let e = {};
            for (let r in t) {
              if (!(r in n.shape)) throw Error('Unrecognized key: "'.concat(r, '"'));
              t[r] && (e[r] = n.shape[r]);
            }
            return (e$(this, 'shape', e), e);
          },
          checks: [],
        });
      return eH(e, r);
    }
    function e3(e, t) {
      let n = e._zod.def,
        r = eT(e._zod.def, {
          get shape() {
            let r = { ...e._zod.def.shape };
            for (let e in t) {
              if (!(e in n.shape)) throw Error('Unrecognized key: "'.concat(e, '"'));
              t[e] && delete r[e];
            }
            return (e$(this, 'shape', r), r);
          },
          checks: [],
        });
      return eH(e, r);
    }
    function e8(e, t) {
      if (!eW(t)) throw Error('Invalid input to extend: expected a plain object');
      let n = e._zod.def.checks;
      if (n && n.length > 0)
        throw Error(
          'Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.'
        );
      let r = eT(e._zod.def, {
        get shape() {
          let n = { ...e._zod.def.shape, ...t };
          return (e$(this, 'shape', n), n);
        },
        checks: [],
      });
      return eH(e, r);
    }
    function e5(e, t) {
      if (!eW(t)) throw Error('Invalid input to safeExtend: expected a plain object');
      let n = {
        ...e._zod.def,
        get shape() {
          let n = { ...e._zod.def.shape, ...t };
          return (e$(this, 'shape', n), n);
        },
        checks: e._zod.def.checks,
      };
      return eH(e, n);
    }
    function e7(e, t) {
      let n = eT(e._zod.def, {
        get shape() {
          let n = { ...e._zod.def.shape, ...t._zod.def.shape };
          return (e$(this, 'shape', n), n);
        },
        get catchall() {
          return t._zod.def.catchall;
        },
        checks: [],
      });
      return eH(e, n);
    }
    function te(e, t, n) {
      let r = eT(t._zod.def, {
        get shape() {
          let r = t._zod.def.shape,
            i = { ...r };
          if (n)
            for (let t in n) {
              if (!(t in r)) throw Error('Unrecognized key: "'.concat(t, '"'));
              n[t] && (i[t] = e ? new e({ type: 'optional', innerType: r[t] }) : r[t]);
            }
          else for (let t in r) i[t] = e ? new e({ type: 'optional', innerType: r[t] }) : r[t];
          return (e$(this, 'shape', i), i);
        },
        checks: [],
      });
      return eH(t, r);
    }
    function tt(e, t, n) {
      let r = eT(t._zod.def, {
        get shape() {
          let r = t._zod.def.shape,
            i = { ...r };
          if (n)
            for (let t in n) {
              if (!(t in i)) throw Error('Unrecognized key: "'.concat(t, '"'));
              n[t] && (i[t] = new e({ type: 'nonoptional', innerType: r[t] }));
            }
          else for (let t in r) i[t] = new e({ type: 'nonoptional', innerType: r[t] });
          return (e$(this, 'shape', i), i);
        },
        checks: [],
      });
      return eH(t, r);
    }
    function tn(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (!0 === e.aborted) return !0;
      for (let r = t; r < e.issues.length; r++) {
        var n;
        if ((null == (n = e.issues[r]) ? void 0 : n.continue) !== !0) return !0;
      }
      return !1;
    }
    function tr(e, t) {
      return t.map((t) => (null != t.path || (t.path = []), t.path.unshift(e), t));
    }
    function ti(e) {
      return 'string' == typeof e ? e : null == e ? void 0 : e.message;
    }
    function ta(e, t, n) {
      var r, i, a, o, u, c, s, l, d, m, f;
      let p = { ...e, path: null != (r = e.path) ? r : [] };
      return (
        e.message ||
          (p.message =
            null !=
            (f =
              null !=
              (m =
                null !=
                (d =
                  null !=
                  (l = ti(
                    null == (o = e.inst) || null == (a = o._zod.def) || null == (i = a.error)
                      ? void 0
                      : i.call(a, e)
                  ))
                    ? l
                    : ti(null == t || null == (u = t.error) ? void 0 : u.call(t, e)))
                  ? d
                  : ti(null == (c = n.customError) ? void 0 : c.call(n, e)))
                ? m
                : ti(null == (s = n.localeError) ? void 0 : s.call(n, e)))
              ? f
              : 'Invalid input'),
        delete p.inst,
        delete p.continue,
        (null == t ? void 0 : t.reportInput) || delete p.input,
        p
      );
    }
    function to(e) {
      return e instanceof Set
        ? 'set'
        : e instanceof Map
          ? 'map'
          : e instanceof File
            ? 'file'
            : 'unknown';
    }
    function tu(e) {
      return Array.isArray(e) ? 'array' : 'string' == typeof e ? 'string' : 'unknown';
    }
    function tc() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      let [r, i, a] = t;
      return 'string' == typeof r ? { message: r, code: 'custom', input: i, inst: a } : { ...r };
    }
    function ts(e) {
      return Object.entries(e)
        .filter((e) => {
          let [t, n] = e;
          return Number.isNaN(Number.parseInt(t, 10));
        })
        .map((e) => e[1]);
    }
    function tl(e) {
      let t = atob(e),
        n = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
      return n;
    }
    function td(e) {
      let t = '';
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return btoa(t);
    }
    function tm(e) {
      let t = e.replace(/-/g, '+').replace(/_/g, '/'),
        n = '='.repeat((4 - (t.length % 4)) % 4);
      return tl(t + n);
    }
    function tf(e) {
      return td(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    function tp(e) {
      let t = e.replace(/^0x/, '');
      if (t.length % 2 != 0) throw Error('Invalid hex string length');
      let n = new Uint8Array(t.length / 2);
      for (let e = 0; e < t.length; e += 2) n[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
      return n;
    }
    function tv(e) {
      return Array.from(e)
        .map((e) => e.toString(16).padStart(2, '0'))
        .join('');
    }
    class tg {
      constructor(...e) {}
    }
    var th = e.i(25401);
    e.s(
      [
        'base64',
        () => tF,
        'base64url',
        () => tM,
        'bigint',
        () => tQ,
        'boolean',
        () => t6,
        'browserEmail',
        () => tT,
        'cidrv4',
        () => tL,
        'cidrv6',
        () => tJ,
        'cuid',
        () => t_,
        'cuid2',
        () => ty,
        'date',
        () => tV,
        'datetime',
        () => tq,
        'domain',
        () => tW,
        'duration',
        () => tw,
        'e164',
        () => tG,
        'email',
        () => tj,
        'emoji',
        () => tA,
        'extendedDuration',
        () => tx,
        'guid',
        () => tz,
        'hex',
        () => t8,
        'hostname',
        () => tB,
        'html5Email',
        () => tD,
        'idnEmail',
        () => t$,
        'integer',
        () => t0,
        'ipv4',
        () => tC,
        'ipv6',
        () => tR,
        'ksuid',
        () => tI,
        'lowercase',
        () => t9,
        'md5_base64',
        () => nt,
        'md5_base64url',
        () => nn,
        'md5_hex',
        () => ne,
        'nanoid',
        () => tS,
        'null',
        () => t1,
        'number',
        () => t4,
        'rfc5322Email',
        () => tP,
        'sha1_base64',
        () => ni,
        'sha1_base64url',
        () => na,
        'sha1_hex',
        () => nr,
        'sha256_base64',
        () => nu,
        'sha256_base64url',
        () => nc,
        'sha256_hex',
        () => no,
        'sha384_base64',
        () => nl,
        'sha384_base64url',
        () => nd,
        'sha384_hex',
        () => ns,
        'sha512_base64',
        () => nf,
        'sha512_base64url',
        () => np,
        'sha512_hex',
        () => nm,
        'string',
        () => tH,
        'time',
        () => tY,
        'ulid',
        () => tb,
        'undefined',
        () => t2,
        'unicodeEmail',
        () => tE,
        'uppercase',
        () => t3,
        'uuid',
        () => tZ,
        'uuid4',
        () => tU,
        'uuid6',
        () => tO,
        'uuid7',
        () => tN,
        'xid',
        () => tk,
      ],
      30591
    );
    let t_ = /^[cC][^\s-]{8,}$/,
      ty = /^[0-9a-z]+$/,
      tb = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
      tk = /^[0-9a-vA-V]{20}$/,
      tI = /^[A-Za-z0-9]{27}$/,
      tS = /^[a-zA-Z0-9_-]{21}$/,
      tw =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
      tx =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
      tz = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
      tZ = (e) =>
        e
          ? new RegExp(
              '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-'.concat(
                e,
                '[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$'
              )
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      tU = tZ(4),
      tO = tZ(6),
      tN = tZ(7),
      tj =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      tD =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      tP =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      tE = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      t$ = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
      tT =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    function tA() {
      return RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u');
    }
    let tC =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
      tR =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
      tL =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
      tJ =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      tF = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
      tM = /^[A-Za-z0-9_-]*$/,
      tB =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
      tW = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      tG = /^\+(?:[0-9]){6,14}[0-9]$/,
      tK =
        '(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))',
      tV = new RegExp('^'.concat(tK, '$'));
    function tX(e) {
      let t = '(?:[01]\\d|2[0-3]):[0-5]\\d';
      return 'number' == typeof e.precision
        ? -1 === e.precision
          ? ''.concat(t)
          : 0 === e.precision
            ? ''.concat(t, ':[0-5]\\d')
            : ''.concat(t, ':[0-5]\\d\\.\\d{').concat(e.precision, '}')
        : ''.concat(t, '(?::[0-5]\\d(?:\\.\\d+)?)?');
    }
    function tY(e) {
      return new RegExp('^'.concat(tX(e), '$'));
    }
    function tq(e) {
      let t = tX({ precision: e.precision }),
        n = ['Z'];
      (e.local && n.push(''), e.offset && n.push('([+-](?:[01]\\d|2[0-3]):[0-5]\\d)'));
      let r = ''.concat(t, '(?:').concat(n.join('|'), ')');
      return new RegExp('^'.concat(tK, 'T(?:').concat(r, ')$'));
    }
    let tH = (e) => {
        var t, n;
        let r = e
          ? '[\\s\\S]{'
              .concat(null != (t = null == e ? void 0 : e.minimum) ? t : 0, ',')
              .concat(null != (n = null == e ? void 0 : e.maximum) ? n : '', '}')
          : '[\\s\\S]*';
        return new RegExp('^'.concat(r, '$'));
      },
      tQ = /^\d+n?$/,
      t0 = /^\d+$/,
      t4 = /^-?\d+(?:\.\d+)?/i,
      t6 = /true|false/i,
      t1 = /null/i,
      t2 = /undefined/i,
      t9 = /^[^A-Z]*$/,
      t3 = /^[^a-z]*$/,
      t8 = /^[0-9a-fA-F]*$/;
    function t5(e, t) {
      return new RegExp('^[A-Za-z0-9+/]{'.concat(e, '}').concat(t, '$'));
    }
    function t7(e) {
      return new RegExp('^[A-Za-z0-9-_]{'.concat(e, '}$'));
    }
    let ne = /^[0-9a-fA-F]{32}$/,
      nt = t5(22, '=='),
      nn = t7(22),
      nr = /^[0-9a-fA-F]{40}$/,
      ni = t5(27, '='),
      na = t7(27),
      no = /^[0-9a-fA-F]{64}$/,
      nu = t5(43, '='),
      nc = t7(43),
      ns = /^[0-9a-fA-F]{96}$/,
      nl = t5(64, ''),
      nd = t7(64),
      nm = /^[0-9a-fA-F]{128}$/,
      nf = t5(86, '=='),
      np = t7(86);
    var nv = e.i(30591);
    function ng() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'حرف', verb: 'أن يحوي' },
            file: { unit: 'بايت', verb: 'أن يحوي' },
            array: { unit: 'عنصر', verb: 'أن يحوي' },
            set: { unit: 'عنصر', verb: 'أن يحوي' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'مدخلات غير مقبولة: يفترض إدخال '
                  .concat(e.expected, '، ولكن تم إدخال ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'مدخلات غير مقبولة: يفترض إدخال '.concat(e4(e.values[0]));
                return 'اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: '.concat(
                  ez(e.values, '|')
                );
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return ' أكبر من اللازم: يفترض أن تكون '
                    .concat(null != (r = e.origin) ? r : 'القيمة', ' ')
                    .concat(n, ' ')
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'عنصر');
                return 'أكبر من اللازم: يفترض أن تكون '
                  .concat(null != (a = e.origin) ? a : 'القيمة', ' ')
                  .concat(n, ' ')
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'أصغر من اللازم: يفترض لـ '
                    .concat(e.origin, ' أن يكون ')
                    .concat(n, ' ')
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'أصغر من اللازم: يفترض لـ '
                  .concat(e.origin, ' أن يكون ')
                  .concat(n, ' ')
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'نَص غير مقبول: يجب أن يبدأ بـ "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'نَص غير مقبول: يجب أن ينتهي بـ "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'نَص غير مقبول: يجب أن يتضمَّن "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'نَص غير مقبول: يجب أن يطابق النمط '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' غير مقبول');
              case 'not_multiple_of':
                return 'رقم غير مقبول: يجب أن يكون من مضاعفات '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'معرف'
                  .concat(e.keys.length > 1 ? 'ات' : '', ' غريب')
                  .concat(e.keys.length > 1 ? 'ة' : '', ': ')
                  .concat(ez(e.keys, '، '));
              case 'invalid_key':
                return 'معرف غير مقبول في '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'مدخل غير مقبول';
              case 'invalid_element':
                return 'مدخل غير مقبول في '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nh() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'simvol', verb: 'olmalıdır' },
            file: { unit: 'bayt', verb: 'olmalıdır' },
            array: { unit: 'element', verb: 'olmalıdır' },
            set: { unit: 'element', verb: 'olmalıdır' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Yanlış dəyər: gözlənilən '.concat(e.expected, ', daxil olan ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Yanlış dəyər: gözlənilən '.concat(e4(e.values[0]));
                return 'Yanlış seçim: aşağıdakılardan biri olmalıdır: '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Çox böyük: gözlənilən '
                    .concat(null != (r = e.origin) ? r : 'dəyər', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'element');
                return 'Çox böyük: gözlənilən '
                  .concat(null != (a = e.origin) ? a : 'dəyər', ' ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Çox kiçik: gözlənilən '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Çox kiçik: gözlənilən '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Yanlış mətn: "'.concat(e.prefix, '" ilə başlamalıdır');
                if ('ends_with' === e.format)
                  return 'Yanlış mətn: "'.concat(e.suffix, '" ilə bitməlidir');
                if ('includes' === e.format)
                  return 'Yanlış mətn: "'.concat(e.includes, '" daxil olmalıdır');
                if ('regex' === e.format)
                  return 'Yanlış mətn: '.concat(e.pattern, ' şablonuna uyğun olmalıdır');
                return 'Yanlış '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Yanlış ədəd: '.concat(e.divisor, ' ilə bölünə bilən olmalıdır');
              case 'unrecognized_keys':
                return 'Tanınmayan açar'
                  .concat(e.keys.length > 1 ? 'lar' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return ''.concat(e.origin, ' daxilində yanlış açar');
              case 'invalid_union':
              default:
                return 'Yanlış dəyər';
              case 'invalid_element':
                return ''.concat(e.origin, ' daxilində yanlış dəyər');
            }
          };
        })(),
      };
    }
    function n_(e, t, n, r) {
      let i = Math.abs(e),
        a = i % 10,
        o = i % 100;
      return o >= 11 && o <= 19 ? r : 1 === a ? t : a >= 2 && a <= 4 ? n : r;
    }
    function ny() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: { one: 'сімвал', few: 'сімвалы', many: 'сімвалаў' }, verb: 'мець' },
            array: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
            set: { unit: { one: 'элемент', few: 'элементы', many: 'элементаў' }, verb: 'мець' },
            file: { unit: { one: 'байт', few: 'байты', many: 'байтаў' }, verb: 'мець' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a;
            switch (e.code) {
              case 'invalid_type':
                return 'Няправільны ўвод: чакаўся '.concat(e.expected, ', атрымана ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Няправільны ўвод: чакалася '.concat(e4(e.values[0]));
                return 'Няправільны варыянт: чакаўся адзін з '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  a = t(e.origin);
                if (a) {
                  let t = n_(Number(e.maximum), a.unit.one, a.unit.few, a.unit.many);
                  return 'Занадта вялікі: чакалася, што '
                    .concat(null != (r = e.origin) ? r : 'значэнне', ' павінна ')
                    .concat(a.verb, ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(t);
                }
                return 'Занадта вялікі: чакалася, што '
                  .concat(null != (i = e.origin) ? i : 'значэнне', ' павінна быць ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r) {
                  let t = n_(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
                  return 'Занадта малы: чакалася, што '
                    .concat(e.origin, ' павінна ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(t);
                }
                return 'Занадта малы: чакалася, што '
                  .concat(e.origin, ' павінна быць ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Няправільны радок: павінен пачынацца з "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Няправільны радок: павінен заканчвацца на "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Няправільны радок: павінен змяшчаць "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Няправільны радок: павінен адпавядаць шаблону '.concat(e.pattern);
                return 'Няправільны '.concat(null != (a = n[e.format]) ? a : e.format);
              case 'not_multiple_of':
                return 'Няправільны лік: павінен быць кратным '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Нераспазнаны '
                  .concat(e.keys.length > 1 ? 'ключы' : 'ключ', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Няправільны ключ у '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Няправільны ўвод';
              case 'invalid_element':
                return 'Няправільнае значэнне ў '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nb() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caràcters', verb: 'contenir' },
            file: { unit: 'bytes', verb: 'contenir' },
            array: { unit: 'elements', verb: 'contenir' },
            set: { unit: 'elements', verb: 'contenir' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return "Tipus invàlid: s'esperava ".concat(e.expected, ", s'ha rebut ").concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return "Valor invàlid: s'esperava ".concat(e4(e.values[0]));
                return "Opció invàlida: s'esperava una de ".concat(ez(e.values, ' o '));
              case 'too_big': {
                let n = e.inclusive ? 'com a màxim' : 'menys de',
                  o = t(e.origin);
                if (o)
                  return "Massa gran: s'esperava que "
                    .concat(null != (r = e.origin) ? r : 'el valor', ' contingués ')
                    .concat(n, ' ')
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elements');
                return "Massa gran: s'esperava que "
                  .concat(null != (a = e.origin) ? a : 'el valor', ' fos ')
                  .concat(n, ' ')
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? 'com a mínim' : 'més de',
                  r = t(e.origin);
                if (r)
                  return "Massa petit: s'esperava que "
                    .concat(e.origin, ' contingués ')
                    .concat(n, ' ')
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return "Massa petit: s'esperava que "
                  .concat(e.origin, ' fos ')
                  .concat(n, ' ')
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Format invàlid: ha de començar amb "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Format invàlid: ha d\'acabar amb "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Format invàlid: ha d\'incloure "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Format invàlid: ha de coincidir amb el patró '.concat(e.pattern);
                return 'Format invàlid per a '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Número invàlid: ha de ser múltiple de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Clau'
                  .concat(e.keys.length > 1 ? 's' : '', ' no reconeguda')
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Clau invàlida a '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Entrada invàlida';
              case 'invalid_element':
                return 'Element invàlid a '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nk() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'znaků', verb: 'mít' },
            file: { unit: 'bajtů', verb: 'mít' },
            array: { unit: 'prvků', verb: 'mít' },
            set: { unit: 'prvků', verb: 'mít' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o, u, c, s;
            switch (e.code) {
              case 'invalid_type':
                return 'Neplatný vstup: očekáváno '.concat(e.expected, ', obdrženo ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Neplatný vstup: očekáváno '.concat(e4(e.values[0]));
                return 'Neplatná možnost: očekávána jedna z hodnot '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Hodnota je příliš velká: '
                    .concat(null != (r = e.origin) ? r : 'hodnota', ' musí mít ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'prvků');
                return 'Hodnota je příliš velká: '
                  .concat(null != (a = e.origin) ? a : 'hodnota', ' musí být ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Hodnota je příliš malá: '
                    .concat(null != (o = e.origin) ? o : 'hodnota', ' musí mít ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(null != (u = r.unit) ? u : 'prvků');
                return 'Hodnota je příliš malá: '
                  .concat(null != (c = e.origin) ? c : 'hodnota', ' musí být ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Neplatný řetězec: musí začínat na "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Neplatný řetězec: musí končit na "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Neplatný řetězec: musí obsahovat "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Neplatný řetězec: musí odpovídat vzoru '.concat(e.pattern);
                return 'Neplatný formát '.concat(null != (s = n[e.format]) ? s : e.format);
              case 'not_multiple_of':
                return 'Neplatné číslo: musí být násobkem '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Neznámé klíče: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Neplatný klíč v '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Neplatný vstup';
              case 'invalid_element':
                return 'Neplatná hodnota v '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nI() {
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
            };
          function n(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          function r(e) {
            var n;
            return null != (n = t[e]) ? n : e;
          }
          let i = {
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
          return (e) => {
            var t, a;
            switch (e.code) {
              case 'invalid_type':
                return 'Ugyldigt input: forventede '.concat(r(e.expected), ', fik ').concat(
                  r(
                    ((e) => {
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
                    })(e.input)
                  )
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ugyldig værdi: forventede '.concat(e4(e.values[0]));
                return 'Ugyldigt valg: forventede en af følgende '.concat(ez(e.values, '|'));
              case 'too_big': {
                let i = e.inclusive ? '<=' : '<',
                  a = n(e.origin),
                  o = r(e.origin);
                if (a)
                  return 'For stor: forventede '
                    .concat(null != o ? o : 'value', ' ')
                    .concat(a.verb, ' ')
                    .concat(i, ' ')
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (t = a.unit) ? t : 'elementer');
                return 'For stor: forventede '
                  .concat(null != o ? o : 'value', ' havde ')
                  .concat(i, ' ')
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let t = e.inclusive ? '>=' : '>',
                  i = n(e.origin),
                  a = r(e.origin);
                if (i)
                  return 'For lille: forventede '
                    .concat(a, ' ')
                    .concat(i.verb, ' ')
                    .concat(t, ' ')
                    .concat(e.minimum.toString(), ' ')
                    .concat(i.unit);
                return 'For lille: forventede '
                  .concat(a, ' havde ')
                  .concat(t, ' ')
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ugyldig streng: skal starte med "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Ugyldig streng: skal ende med "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Ugyldig streng: skal indeholde "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Ugyldig streng: skal matche mønsteret '.concat(e.pattern);
                return 'Ugyldig '.concat(null != (a = i[e.format]) ? a : e.format);
              case 'not_multiple_of':
                return 'Ugyldigt tal: skal være deleligt med '.concat(e.divisor);
              case 'unrecognized_keys':
                return ''
                  .concat(e.keys.length > 1 ? 'Ukendte nøgler' : 'Ukendt nøgle', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Ugyldig nøgle i '.concat(e.origin);
              case 'invalid_union':
                return 'Ugyldigt input: matcher ingen af de tilladte typer';
              case 'invalid_element':
                return 'Ugyldig værdi i '.concat(e.origin);
              default:
                return 'Ugyldigt input';
            }
          };
        })(),
      };
    }
    function nS() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'Zeichen', verb: 'zu haben' },
            file: { unit: 'Bytes', verb: 'zu haben' },
            array: { unit: 'Elemente', verb: 'zu haben' },
            set: { unit: 'Elemente', verb: 'zu haben' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Ungültige Eingabe: erwartet '.concat(e.expected, ', erhalten ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ungültige Eingabe: erwartet '.concat(e4(e.values[0]));
                return 'Ungültige Option: erwartet eine von '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Zu groß: erwartet, dass '
                    .concat(null != (r = e.origin) ? r : 'Wert', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'Elemente', ' hat');
                return 'Zu groß: erwartet, dass '
                  .concat(null != (a = e.origin) ? a : 'Wert', ' ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' ist');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Zu klein: erwartet, dass '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' hat');
                return 'Zu klein: erwartet, dass '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' ist');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ungültiger String: muss mit "'.concat(e.prefix, '" beginnen');
                if ('ends_with' === e.format)
                  return 'Ungültiger String: muss mit "'.concat(e.suffix, '" enden');
                if ('includes' === e.format)
                  return 'Ungültiger String: muss "'.concat(e.includes, '" enthalten');
                if ('regex' === e.format)
                  return 'Ungültiger String: muss dem Muster '.concat(e.pattern, ' entsprechen');
                return 'Ungültig: '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Ungültige Zahl: muss ein Vielfaches von '.concat(e.divisor, ' sein');
              case 'unrecognized_keys':
                return ''
                  .concat(
                    e.keys.length > 1 ? 'Unbekannte Schlüssel' : 'Unbekannter Schlüssel',
                    ': '
                  )
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Ungültiger Schlüssel in '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Ungültige Eingabe';
              case 'invalid_element':
                return 'Ungültiger Wert in '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nw() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'characters', verb: 'to have' },
            file: { unit: 'bytes', verb: 'to have' },
            array: { unit: 'items', verb: 'to have' },
            set: { unit: 'items', verb: 'to have' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Invalid input: expected '.concat(e.expected, ', received ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Invalid input: expected '.concat(e4(e.values[0]));
                return 'Invalid option: expected one of '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Too big: expected '
                    .concat(null != (r = e.origin) ? r : 'value', ' to have ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elements');
                return 'Too big: expected '
                  .concat(null != (a = e.origin) ? a : 'value', ' to be ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Too small: expected '
                    .concat(e.origin, ' to have ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Too small: expected '
                  .concat(e.origin, ' to be ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Invalid string: must start with "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Invalid string: must end with "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Invalid string: must include "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Invalid string: must match pattern '.concat(e.pattern);
                return 'Invalid '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Invalid number: must be a multiple of '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Unrecognized key'
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Invalid key in '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Invalid input';
              case 'invalid_element':
                return 'Invalid value in '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nx() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'karaktrojn', verb: 'havi' },
            file: { unit: 'bajtojn', verb: 'havi' },
            array: { unit: 'elementojn', verb: 'havi' },
            set: { unit: 'elementojn', verb: 'havi' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Nevalida enigo: atendiĝis '.concat(e.expected, ', riceviĝis ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Nevalida enigo: atendiĝis '.concat(e4(e.values[0]));
                return 'Nevalida opcio: atendiĝis unu el '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Tro granda: atendiĝis ke '
                    .concat(null != (r = e.origin) ? r : 'valoro', ' havu ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementojn');
                return 'Tro granda: atendiĝis ke '
                  .concat(null != (a = e.origin) ? a : 'valoro', ' havu ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Tro malgranda: atendiĝis ke '
                    .concat(e.origin, ' havu ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Tro malgranda: atendiĝis ke '
                  .concat(e.origin, ' estu ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Nevalida karaktraro: devas komenciĝi per "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Nevalida karaktraro: devas finiĝi per "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Nevalida karaktraro: devas inkluzivi "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Nevalida karaktraro: devas kongrui kun la modelo '.concat(e.pattern);
                return 'Nevalida '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Nevalida nombro: devas esti oblo de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Nekonata'
                  .concat(e.keys.length > 1 ? 'j' : '', ' ŝlosilo')
                  .concat(e.keys.length > 1 ? 'j' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Nevalida ŝlosilo en '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Nevalida enigo';
              case 'invalid_element':
                return 'Nevalida valoro en '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nz() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caracteres', verb: 'tener' },
            file: { unit: 'bytes', verb: 'tener' },
            array: { unit: 'elementos', verb: 'tener' },
            set: { unit: 'elementos', verb: 'tener' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Entrada inválida: se esperaba '.concat(e.expected, ', recibido ').concat(
                  ((e) => {
                    let t = typeof e;
                    switch (t) {
                      case 'number':
                        return Number.isNaN(e) ? 'NaN' : 'número';
                      case 'object':
                        if (Array.isArray(e)) return 'arreglo';
                        if (null === e) return 'nulo';
                        if (Object.getPrototypeOf(e) !== Object.prototype)
                          return e.constructor.name;
                    }
                    return t;
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Entrada inválida: se esperaba '.concat(e4(e.values[0]));
                return 'Opción inválida: se esperaba una de '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Demasiado grande: se esperaba que '
                    .concat(null != (r = e.origin) ? r : 'valor', ' tuviera ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementos');
                return 'Demasiado grande: se esperaba que '
                  .concat(null != (a = e.origin) ? a : 'valor', ' fuera ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Demasiado pequeño: se esperaba que '
                    .concat(e.origin, ' tuviera ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Demasiado pequeño: se esperaba que '
                  .concat(e.origin, ' fuera ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Cadena inválida: debe comenzar con "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Cadena inválida: debe terminar en "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Cadena inválida: debe incluir "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Cadena inválida: debe coincidir con el patrón '.concat(e.pattern);
                return 'Inválido '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Número inválido: debe ser múltiplo de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Llave'
                  .concat(e.keys.length > 1 ? 's' : '', ' desconocida')
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Llave inválida en '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Entrada inválida';
              case 'invalid_element':
                return 'Valor inválido en '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nZ() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'کاراکتر', verb: 'داشته باشد' },
            file: { unit: 'بایت', verb: 'داشته باشد' },
            array: { unit: 'آیتم', verb: 'داشته باشد' },
            set: { unit: 'آیتم', verb: 'داشته باشد' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'ورودی نامعتبر: می‌بایست '.concat(e.expected, ' می‌بود، ').concat(
                  ((e) => {
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
                  })(e.input),
                  ' دریافت شد'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'ورودی نامعتبر: می‌بایست '.concat(e4(e.values[0]), ' می‌بود');
                return 'گزینه نامعتبر: می‌بایست یکی از '.concat(ez(e.values, '|'), ' می‌بود');
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'خیلی بزرگ: '
                    .concat(null != (r = e.origin) ? r : 'مقدار', ' باید ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'عنصر', ' باشد');
                return 'خیلی بزرگ: '
                  .concat(null != (a = e.origin) ? a : 'مقدار', ' باید ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' باشد');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'خیلی کوچک: '
                    .concat(e.origin, ' باید ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' باشد');
                return 'خیلی کوچک: '
                  .concat(e.origin, ' باید ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' باشد');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'رشته نامعتبر: باید با "'.concat(e.prefix, '" شروع شود');
                if ('ends_with' === e.format)
                  return 'رشته نامعتبر: باید با "'.concat(e.suffix, '" تمام شود');
                if ('includes' === e.format)
                  return 'رشته نامعتبر: باید شامل "'.concat(e.includes, '" باشد');
                if ('regex' === e.format)
                  return 'رشته نامعتبر: باید با الگوی '.concat(e.pattern, ' مطابقت داشته باشد');
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' نامعتبر');
              case 'not_multiple_of':
                return 'عدد نامعتبر: باید مضرب '.concat(e.divisor, ' باشد');
              case 'unrecognized_keys':
                return 'کلید'
                  .concat(e.keys.length > 1 ? 'های' : '', ' ناشناس: ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'کلید ناشناس در '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'ورودی نامعتبر';
              case 'invalid_element':
                return 'مقدار نامعتبر در '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nU() {
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
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            switch (e.code) {
              case 'invalid_type':
                return 'Virheellinen tyyppi: odotettiin '.concat(e.expected, ', oli ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Virheellinen syöte: täytyy olla '.concat(e4(e.values[0]));
                return 'Virheellinen valinta: täytyy olla yksi seuraavista: '.concat(
                  ez(e.values, '|')
                );
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  r = t(e.origin);
                if (r)
                  return 'Liian suuri: '
                    .concat(r.subject, ' täytyy olla ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(r.unit)
                    .trim();
                return 'Liian suuri: arvon täytyy olla '.concat(n).concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Liian pieni: '
                    .concat(r.subject, ' täytyy olla ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit)
                    .trim();
                return 'Liian pieni: arvon täytyy olla '.concat(n).concat(e.minimum.toString());
              }
              case 'invalid_format':
                var r;
                if ('starts_with' === e.format)
                  return 'Virheellinen syöte: täytyy alkaa "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Virheellinen syöte: täytyy loppua "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Virheellinen syöte: täytyy sisältää "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Virheellinen syöte: täytyy vastata säännöllistä lauseketta '.concat(
                    e.pattern
                  );
                return 'Virheellinen '.concat(null != (r = n[e.format]) ? r : e.format);
              case 'not_multiple_of':
                return 'Virheellinen luku: täytyy olla luvun '.concat(e.divisor, ' monikerta');
              case 'unrecognized_keys':
                return ''
                  .concat(e.keys.length > 1 ? 'Tuntemattomat avaimet' : 'Tuntematon avain', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Virheellinen avain tietueessa';
              case 'invalid_union':
                return 'Virheellinen unioni';
              case 'invalid_element':
                return 'Virheellinen arvo joukossa';
              default:
                return 'Virheellinen syöte';
            }
          };
        })(),
      };
    }
    function nO() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caractères', verb: 'avoir' },
            file: { unit: 'octets', verb: 'avoir' },
            array: { unit: 'éléments', verb: 'avoir' },
            set: { unit: 'éléments', verb: 'avoir' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Entrée invalide : '.concat(e.expected, ' attendu, ').concat(
                  ((e) => {
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
                  })(e.input),
                  ' reçu'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Entrée invalide : '.concat(e4(e.values[0]), ' attendu');
                return 'Option invalide : une valeur parmi '.concat(ez(e.values, '|'), ' attendue');
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Trop grand : '
                    .concat(null != (r = e.origin) ? r : 'valeur', ' doit ')
                    .concat(o.verb, ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'élément(s)');
                return 'Trop grand : '
                  .concat(null != (a = e.origin) ? a : 'valeur', ' doit être ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Trop petit : '
                    .concat(e.origin, ' doit ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Trop petit : '
                  .concat(e.origin, ' doit être ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Chaîne invalide : doit commencer par "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Chaîne invalide : doit se terminer par "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Chaîne invalide : doit inclure "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Chaîne invalide : doit correspondre au modèle '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' invalide');
              case 'not_multiple_of':
                return 'Nombre invalide : doit être un multiple de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Clé'
                  .concat(e.keys.length > 1 ? 's' : '', ' non reconnue')
                  .concat(e.keys.length > 1 ? 's' : '', ' : ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Clé invalide dans '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Entrée invalide';
              case 'invalid_element':
                return 'Valeur invalide dans '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nN() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caractères', verb: 'avoir' },
            file: { unit: 'octets', verb: 'avoir' },
            array: { unit: 'éléments', verb: 'avoir' },
            set: { unit: 'éléments', verb: 'avoir' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a;
            switch (e.code) {
              case 'invalid_type':
                return 'Entrée invalide : attendu '.concat(e.expected, ', reçu ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Entrée invalide : attendu '.concat(e4(e.values[0]));
                return "Option invalide : attendu l'une des valeurs suivantes ".concat(
                  ez(e.values, '|')
                );
              case 'too_big': {
                let n = e.inclusive ? '≤' : '<',
                  a = t(e.origin);
                if (a)
                  return 'Trop grand : attendu que '
                    .concat(null != (r = e.origin) ? r : 'la valeur', ' ait ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(a.unit);
                return 'Trop grand : attendu que '
                  .concat(null != (i = e.origin) ? i : 'la valeur', ' soit ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '≥' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Trop petit : attendu que '
                    .concat(e.origin, ' ait ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Trop petit : attendu que '
                  .concat(e.origin, ' soit ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Chaîne invalide : doit commencer par "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Chaîne invalide : doit se terminer par "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Chaîne invalide : doit inclure "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Chaîne invalide : doit correspondre au motif '.concat(e.pattern);
                return ''.concat(null != (a = n[e.format]) ? a : e.format, ' invalide');
              case 'not_multiple_of':
                return 'Nombre invalide : doit être un multiple de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Clé'
                  .concat(e.keys.length > 1 ? 's' : '', ' non reconnue')
                  .concat(e.keys.length > 1 ? 's' : '', ' : ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Clé invalide dans '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Entrée invalide';
              case 'invalid_element':
                return 'Valeur invalide dans '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nj() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'אותיות', verb: 'לכלול' },
            file: { unit: 'בייטים', verb: 'לכלול' },
            array: { unit: 'פריטים', verb: 'לכלול' },
            set: { unit: 'פריטים', verb: 'לכלול' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'קלט לא תקין: צריך '.concat(e.expected, ', התקבל ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length) return 'קלט לא תקין: צריך '.concat(e4(e.values[0]));
                return 'קלט לא תקין: צריך אחת מהאפשרויות  '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'גדול מדי: '
                    .concat(null != (r = e.origin) ? r : 'value', ' צריך להיות ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elements');
                return 'גדול מדי: '
                  .concat(null != (a = e.origin) ? a : 'value', ' צריך להיות ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'קטן מדי: '
                    .concat(e.origin, ' צריך להיות ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'קטן מדי: '
                  .concat(e.origin, ' צריך להיות ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'מחרוזת לא תקינה: חייבת להתחיל ב"'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'מחרוזת לא תקינה: חייבת להסתיים ב "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'מחרוזת לא תקינה: חייבת לכלול "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'מחרוזת לא תקינה: חייבת להתאים לתבנית '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' לא תקין');
              case 'not_multiple_of':
                return 'מספר לא תקין: חייב להיות מכפלה של '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'מפתח'
                  .concat(e.keys.length > 1 ? 'ות' : '', ' לא מזוה')
                  .concat(e.keys.length > 1 ? 'ים' : 'ה', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'מפתח לא תקין ב'.concat(e.origin);
              case 'invalid_union':
              default:
                return 'קלט לא תקין';
              case 'invalid_element':
                return 'ערך לא תקין ב'.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nD() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'karakter', verb: 'legyen' },
            file: { unit: 'byte', verb: 'legyen' },
            array: { unit: 'elem', verb: 'legyen' },
            set: { unit: 'elem', verb: 'legyen' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Érvénytelen bemenet: a várt érték '
                  .concat(e.expected, ', a kapott érték ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Érvénytelen bemenet: a várt érték '.concat(e4(e.values[0]));
                return 'Érvénytelen opció: valamelyik érték várt '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Túl nagy: '
                    .concat(null != (r = e.origin) ? r : 'érték', ' mérete túl nagy ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elem');
                return 'Túl nagy: a bemeneti érték '
                  .concat(null != (a = e.origin) ? a : 'érték', ' túl nagy: ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Túl kicsi: a bemeneti érték '
                    .concat(e.origin, ' mérete túl kicsi ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Túl kicsi: a bemeneti érték '
                  .concat(e.origin, ' túl kicsi ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Érvénytelen string: "'.concat(e.prefix, '" értékkel kell kezdődnie');
                if ('ends_with' === e.format)
                  return 'Érvénytelen string: "'.concat(e.suffix, '" értékkel kell végződnie');
                if ('includes' === e.format)
                  return 'Érvénytelen string: "'.concat(e.includes, '" értéket kell tartalmaznia');
                if ('regex' === e.format)
                  return 'Érvénytelen string: '.concat(e.pattern, ' mintának kell megfelelnie');
                return 'Érvénytelen '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Érvénytelen szám: '.concat(e.divisor, ' többszörösének kell lennie');
              case 'unrecognized_keys':
                return 'Ismeretlen kulcs'
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Érvénytelen kulcs '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Érvénytelen bemenet';
              case 'invalid_element':
                return 'Érvénytelen érték: '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nP() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'karakter', verb: 'memiliki' },
            file: { unit: 'byte', verb: 'memiliki' },
            array: { unit: 'item', verb: 'memiliki' },
            set: { unit: 'item', verb: 'memiliki' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Input tidak valid: diharapkan '.concat(e.expected, ', diterima ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Input tidak valid: diharapkan '.concat(e4(e.values[0]));
                return 'Pilihan tidak valid: diharapkan salah satu dari '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Terlalu besar: diharapkan '
                    .concat(null != (r = e.origin) ? r : 'value', ' memiliki ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elemen');
                return 'Terlalu besar: diharapkan '
                  .concat(null != (a = e.origin) ? a : 'value', ' menjadi ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Terlalu kecil: diharapkan '
                    .concat(e.origin, ' memiliki ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Terlalu kecil: diharapkan '
                  .concat(e.origin, ' menjadi ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'String tidak valid: harus dimulai dengan "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'String tidak valid: harus berakhir dengan "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'String tidak valid: harus menyertakan "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'String tidak valid: harus sesuai pola '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' tidak valid');
              case 'not_multiple_of':
                return 'Angka tidak valid: harus kelipatan dari '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Kunci tidak dikenali '
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Kunci tidak valid di '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Input tidak valid';
              case 'invalid_element':
                return 'Nilai tidak valid di '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nE() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'stafi', verb: 'að hafa' },
            file: { unit: 'bæti', verb: 'að hafa' },
            array: { unit: 'hluti', verb: 'að hafa' },
            set: { unit: 'hluti', verb: 'að hafa' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Rangt gildi: Þú slóst inn '
                  .concat(
                    ((e) => {
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
                    })(e.input),
                    ' þar sem á að vera '
                  )
                  .concat(e.expected);
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Rangt gildi: gert ráð fyrir '.concat(e4(e.values[0]));
                return 'Ógilt val: má vera eitt af eftirfarandi '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Of stórt: gert er ráð fyrir að '
                    .concat(null != (r = e.origin) ? r : 'gildi', ' hafi ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'hluti');
                return 'Of stórt: gert er ráð fyrir að '
                  .concat(null != (a = e.origin) ? a : 'gildi', ' sé ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Of lítið: gert er ráð fyrir að '
                    .concat(e.origin, ' hafi ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Of lítið: gert er ráð fyrir að '
                  .concat(e.origin, ' sé ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ógildur strengur: verður að byrja á "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Ógildur strengur: verður að enda á "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Ógildur strengur: verður að innihalda "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Ógildur strengur: verður að fylgja mynstri '.concat(e.pattern);
                return 'Rangt '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Röng tala: verður að vera margfeldi af '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Óþekkt '
                  .concat(e.keys.length > 1 ? 'ir lyklar' : 'ur lykill', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Rangur lykill í '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Rangt gildi';
              case 'invalid_element':
                return 'Rangt gildi í '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function n$() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caratteri', verb: 'avere' },
            file: { unit: 'byte', verb: 'avere' },
            array: { unit: 'elementi', verb: 'avere' },
            set: { unit: 'elementi', verb: 'avere' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Input non valido: atteso '.concat(e.expected, ', ricevuto ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Input non valido: atteso '.concat(e4(e.values[0]));
                return 'Opzione non valida: atteso uno tra '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Troppo grande: '
                    .concat(null != (r = e.origin) ? r : 'valore', ' deve avere ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementi');
                return 'Troppo grande: '
                  .concat(null != (a = e.origin) ? a : 'valore', ' deve essere ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Troppo piccolo: '
                    .concat(e.origin, ' deve avere ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Troppo piccolo: '
                  .concat(e.origin, ' deve essere ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Stringa non valida: deve iniziare con "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Stringa non valida: deve terminare con "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Stringa non valida: deve includere "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Stringa non valida: deve corrispondere al pattern '.concat(e.pattern);
                return 'Invalid '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Numero non valido: deve essere un multiplo di '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Chiav'
                  .concat(e.keys.length > 1 ? 'i' : 'e', ' non riconosciut')
                  .concat(e.keys.length > 1 ? 'e' : 'a', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Chiave non valida in '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Input non valido';
              case 'invalid_element':
                return 'Valore non valido in '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nT() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: '文字', verb: 'である' },
            file: { unit: 'バイト', verb: 'である' },
            array: { unit: '要素', verb: 'である' },
            set: { unit: '要素', verb: 'である' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return '無効な入力: '.concat(e.expected, 'が期待されましたが、').concat(
                  ((e) => {
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
                  })(e.input),
                  'が入力されました'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return '無効な入力: '.concat(e4(e.values[0]), 'が期待されました');
                return '無効な選択: '.concat(ez(e.values, '、'), 'のいずれかである必要があります');
              case 'too_big': {
                let n = e.inclusive ? '以下である' : 'より小さい',
                  o = t(e.origin);
                if (o)
                  return '大きすぎる値: '
                    .concat(null != (r = e.origin) ? r : '値', 'は')
                    .concat(e.maximum.toString())
                    .concat(null != (i = o.unit) ? i : '要素')
                    .concat(n, '必要があります');
                return '大きすぎる値: '
                  .concat(null != (a = e.origin) ? a : '値', 'は')
                  .concat(e.maximum.toString())
                  .concat(n, '必要があります');
              }
              case 'too_small': {
                let n = e.inclusive ? '以上である' : 'より大きい',
                  r = t(e.origin);
                if (r)
                  return '小さすぎる値: '
                    .concat(e.origin, 'は')
                    .concat(e.minimum.toString())
                    .concat(r.unit)
                    .concat(n, '必要があります');
                return '小さすぎる値: '
                  .concat(e.origin, 'は')
                  .concat(e.minimum.toString())
                  .concat(n, '必要があります');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return '無効な文字列: "'.concat(e.prefix, '"で始まる必要があります');
                if ('ends_with' === e.format)
                  return '無効な文字列: "'.concat(e.suffix, '"で終わる必要があります');
                if ('includes' === e.format)
                  return '無効な文字列: "'.concat(e.includes, '"を含む必要があります');
                if ('regex' === e.format)
                  return '無効な文字列: パターン'.concat(e.pattern, 'に一致する必要があります');
                return '無効な'.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return '無効な数値: '.concat(e.divisor, 'の倍数である必要があります');
              case 'unrecognized_keys':
                return '認識されていないキー'
                  .concat(e.keys.length > 1 ? '群' : '', ': ')
                  .concat(ez(e.keys, '、'));
              case 'invalid_key':
                return ''.concat(e.origin, '内の無効なキー');
              case 'invalid_union':
              default:
                return '無効な入力';
              case 'invalid_element':
                return ''.concat(e.origin, '内の無効な値');
            }
          };
        })(),
      };
    }
    function nA() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'តួអក្សរ', verb: 'គួរមាន' },
            file: { unit: 'បៃ', verb: 'គួរមាន' },
            array: { unit: 'ធាតុ', verb: 'គួរមាន' },
            set: { unit: 'ធាតុ', verb: 'គួរមាន' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ '
                  .concat(e.expected, ' ប៉ុន្តែទទួលបាន ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ '.concat(e4(e.values[0]));
                return 'ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'ធំពេក៖ ត្រូវការ '
                    .concat(null != (r = e.origin) ? r : 'តម្លៃ', ' ')
                    .concat(n, ' ')
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'ធាតុ');
                return 'ធំពេក៖ ត្រូវការ '
                  .concat(null != (a = e.origin) ? a : 'តម្លៃ', ' ')
                  .concat(n, ' ')
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'តូចពេក៖ ត្រូវការ '
                    .concat(e.origin, ' ')
                    .concat(n, ' ')
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'តូចពេក៖ ត្រូវការ '
                  .concat(e.origin, ' ')
                  .concat(n, ' ')
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ '.concat(
                    e.pattern
                  );
                return 'មិនត្រឹមត្រូវ៖ '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'រកឃើញសោមិនស្គាល់៖ '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'សោមិនត្រឹមត្រូវនៅក្នុង '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'ទិន្នន័យមិនត្រឹមត្រូវ';
              case 'invalid_element':
                return 'ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nC() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: '문자', verb: 'to have' },
            file: { unit: '바이트', verb: 'to have' },
            array: { unit: '개', verb: 'to have' },
            set: { unit: '개', verb: 'to have' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o, u, c, s;
            switch (e.code) {
              case 'invalid_type':
                return '잘못된 입력: 예상 타입은 '.concat(e.expected, ', 받은 타입은 ').concat(
                  ((e) => {
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
                  })(e.input),
                  '입니다'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return '잘못된 입력: 값은 '.concat(e4(e.values[0]), ' 이어야 합니다');
                return '잘못된 옵션: '.concat(ez(e.values, '또는 '), ' 중 하나여야 합니다');
              case 'too_big': {
                let n = e.inclusive ? '이하' : '미만',
                  o = '미만' === n ? '이어야 합니다' : '여야 합니다',
                  u = t(e.origin),
                  c = null != (r = null == u ? void 0 : u.unit) ? r : '요소';
                if (u)
                  return ''
                    .concat(null != (i = e.origin) ? i : '값', '이 너무 큽니다: ')
                    .concat(e.maximum.toString())
                    .concat(c, ' ')
                    .concat(n)
                    .concat(o);
                return ''
                  .concat(null != (a = e.origin) ? a : '값', '이 너무 큽니다: ')
                  .concat(e.maximum.toString(), ' ')
                  .concat(n)
                  .concat(o);
              }
              case 'too_small': {
                let n = e.inclusive ? '이상' : '초과',
                  r = '이상' === n ? '이어야 합니다' : '여야 합니다',
                  i = t(e.origin),
                  a = null != (o = null == i ? void 0 : i.unit) ? o : '요소';
                if (i)
                  return ''
                    .concat(null != (u = e.origin) ? u : '값', '이 너무 작습니다: ')
                    .concat(e.minimum.toString())
                    .concat(a, ' ')
                    .concat(n)
                    .concat(r);
                return ''
                  .concat(null != (c = e.origin) ? c : '값', '이 너무 작습니다: ')
                  .concat(e.minimum.toString(), ' ')
                  .concat(n)
                  .concat(r);
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return '잘못된 문자열: "'.concat(e.prefix, '"(으)로 시작해야 합니다');
                if ('ends_with' === e.format)
                  return '잘못된 문자열: "'.concat(e.suffix, '"(으)로 끝나야 합니다');
                if ('includes' === e.format)
                  return '잘못된 문자열: "'.concat(e.includes, '"을(를) 포함해야 합니다');
                if ('regex' === e.format)
                  return '잘못된 문자열: 정규식 '.concat(e.pattern, ' 패턴과 일치해야 합니다');
                return '잘못된 '.concat(null != (s = n[e.format]) ? s : e.format);
              case 'not_multiple_of':
                return '잘못된 숫자: '.concat(e.divisor, '의 배수여야 합니다');
              case 'unrecognized_keys':
                return '인식할 수 없는 키: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return '잘못된 키: '.concat(e.origin);
              case 'invalid_union':
              default:
                return '잘못된 입력';
              case 'invalid_element':
                return '잘못된 값: '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nR() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'знаци', verb: 'да имаат' },
            file: { unit: 'бајти', verb: 'да имаат' },
            array: { unit: 'ставки', verb: 'да имаат' },
            set: { unit: 'ставки', verb: 'да имаат' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Грешен внес: се очекува '.concat(e.expected, ', примено ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Invalid input: expected '.concat(e4(e.values[0]));
                return 'Грешана опција: се очекува една '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Премногу голем: се очекува '
                    .concat(null != (r = e.origin) ? r : 'вредноста', ' да има ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'елементи');
                return 'Премногу голем: се очекува '
                  .concat(null != (a = e.origin) ? a : 'вредноста', ' да биде ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Премногу мал: се очекува '
                    .concat(e.origin, ' да има ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Премногу мал: се очекува '
                  .concat(e.origin, ' да биде ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Неважечка низа: мора да започнува со "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Неважечка низа: мора да завршува со "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Неважечка низа: мора да вклучува "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Неважечка низа: мора да одгоара на патернот '.concat(e.pattern);
                return 'Invalid '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Грешен број: мора да биде делив со '.concat(e.divisor);
              case 'unrecognized_keys':
                return ''
                  .concat(e.keys.length > 1 ? 'Непрепознаени клучеви' : 'Непрепознаен клуч', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Грешен клуч во '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Грешен внес';
              case 'invalid_element':
                return 'Грешна вредност во '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nL() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'aksara', verb: 'mempunyai' },
            file: { unit: 'bait', verb: 'mempunyai' },
            array: { unit: 'elemen', verb: 'mempunyai' },
            set: { unit: 'elemen', verb: 'mempunyai' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Input tidak sah: dijangka '.concat(e.expected, ', diterima ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Input tidak sah: dijangka '.concat(e4(e.values[0]));
                return 'Pilihan tidak sah: dijangka salah satu daripada '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Terlalu besar: dijangka '
                    .concat(null != (r = e.origin) ? r : 'nilai', ' ')
                    .concat(o.verb, ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elemen');
                return 'Terlalu besar: dijangka '
                  .concat(null != (a = e.origin) ? a : 'nilai', ' adalah ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Terlalu kecil: dijangka '
                    .concat(e.origin, ' ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Terlalu kecil: dijangka '
                  .concat(e.origin, ' adalah ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'String tidak sah: mesti bermula dengan "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'String tidak sah: mesti berakhir dengan "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'String tidak sah: mesti mengandungi "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'String tidak sah: mesti sepadan dengan corak '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' tidak sah');
              case 'not_multiple_of':
                return 'Nombor tidak sah: perlu gandaan '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Kunci tidak dikenali: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Kunci tidak sah dalam '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Input tidak sah';
              case 'invalid_element':
                return 'Nilai tidak sah dalam '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nJ() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'tekens' },
            file: { unit: 'bytes' },
            array: { unit: 'elementen' },
            set: { unit: 'elementen' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Ongeldige invoer: verwacht '.concat(e.expected, ', ontving ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ongeldige invoer: verwacht '.concat(e4(e.values[0]));
                return 'Ongeldige optie: verwacht één van '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Te lang: verwacht dat '
                    .concat(null != (r = e.origin) ? r : 'waarde', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementen', ' bevat');
                return 'Te lang: verwacht dat '
                  .concat(null != (a = e.origin) ? a : 'waarde', ' ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' is');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Te kort: verwacht dat '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' bevat');
                return 'Te kort: verwacht dat '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' is');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ongeldige tekst: moet met "'.concat(e.prefix, '" beginnen');
                if ('ends_with' === e.format)
                  return 'Ongeldige tekst: moet op "'.concat(e.suffix, '" eindigen');
                if ('includes' === e.format)
                  return 'Ongeldige tekst: moet "'.concat(e.includes, '" bevatten');
                if ('regex' === e.format)
                  return 'Ongeldige tekst: moet overeenkomen met patroon '.concat(e.pattern);
                return 'Ongeldig: '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Ongeldig getal: moet een veelvoud van '.concat(e.divisor, ' zijn');
              case 'unrecognized_keys':
                return 'Onbekende key'
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Ongeldige key in '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Ongeldige invoer';
              case 'invalid_element':
                return 'Ongeldige waarde in '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nF() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'tegn', verb: 'å ha' },
            file: { unit: 'bytes', verb: 'å ha' },
            array: { unit: 'elementer', verb: 'å inneholde' },
            set: { unit: 'elementer', verb: 'å inneholde' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Ugyldig input: forventet '.concat(e.expected, ', fikk ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ugyldig verdi: forventet '.concat(e4(e.values[0]));
                return 'Ugyldig valg: forventet en av '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'For stor(t): forventet '
                    .concat(null != (r = e.origin) ? r : 'value', ' til å ha ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementer');
                return 'For stor(t): forventet '
                  .concat(null != (a = e.origin) ? a : 'value', ' til å ha ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'For lite(n): forventet '
                    .concat(e.origin, ' til å ha ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'For lite(n): forventet '
                  .concat(e.origin, ' til å ha ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ugyldig streng: må starte med "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Ugyldig streng: må ende med "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Ugyldig streng: må inneholde "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Ugyldig streng: må matche mønsteret '.concat(e.pattern);
                return 'Ugyldig '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Ugyldig tall: må være et multiplum av '.concat(e.divisor);
              case 'unrecognized_keys':
                return ''
                  .concat(e.keys.length > 1 ? 'Ukjente nøkler' : 'Ukjent nøkkel', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Ugyldig nøkkel i '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Ugyldig input';
              case 'invalid_element':
                return 'Ugyldig verdi i '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nM() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'harf', verb: 'olmalıdır' },
            file: { unit: 'bayt', verb: 'olmalıdır' },
            array: { unit: 'unsur', verb: 'olmalıdır' },
            set: { unit: 'unsur', verb: 'olmalıdır' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Fâsit giren: umulan '.concat(e.expected, ', alınan ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length) return 'Fâsit giren: umulan '.concat(e4(e.values[0]));
                return 'Fâsit tercih: mûteberler '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Fazla büyük: '
                    .concat(null != (r = e.origin) ? r : 'value', ', ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elements', ' sahip olmalıydı.');
                return 'Fazla büyük: '
                  .concat(null != (a = e.origin) ? a : 'value', ', ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' olmalıydı.');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Fazla küçük: '
                    .concat(e.origin, ', ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' sahip olmalıydı.');
                return 'Fazla küçük: '
                  .concat(e.origin, ', ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' olmalıydı.');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Fâsit metin: "'.concat(e.prefix, '" ile başlamalı.');
                if ('ends_with' === e.format)
                  return 'Fâsit metin: "'.concat(e.suffix, '" ile bitmeli.');
                if ('includes' === e.format)
                  return 'Fâsit metin: "'.concat(e.includes, '" ihtivâ etmeli.');
                if ('regex' === e.format)
                  return 'Fâsit metin: '.concat(e.pattern, ' nakşına uymalı.');
                return 'Fâsit '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Fâsit sayı: '.concat(e.divisor, ' katı olmalıydı.');
              case 'unrecognized_keys':
                return 'Tanınmayan anahtar '
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return ''.concat(e.origin, ' için tanınmayan anahtar var.');
              case 'invalid_union':
                return 'Giren tanınamadı.';
              case 'invalid_element':
                return ''.concat(e.origin, ' için tanınmayan kıymet var.');
              default:
                return 'Kıymet tanınamadı.';
            }
          };
        })(),
      };
    }
    function nB() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'توکي', verb: 'ولري' },
            file: { unit: 'بایټس', verb: 'ولري' },
            array: { unit: 'توکي', verb: 'ولري' },
            set: { unit: 'توکي', verb: 'ولري' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'ناسم ورودي: باید '.concat(e.expected, ' وای, مګر ').concat(
                  ((e) => {
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
                  })(e.input),
                  ' ترلاسه شو'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'ناسم ورودي: باید '.concat(e4(e.values[0]), ' وای');
                return 'ناسم انتخاب: باید یو له '.concat(ez(e.values, '|'), ' څخه وای');
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'ډیر لوی: '
                    .concat(null != (r = e.origin) ? r : 'ارزښت', ' باید ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'عنصرونه', ' ولري');
                return 'ډیر لوی: '
                  .concat(null != (a = e.origin) ? a : 'ارزښت', ' باید ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' وي');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'ډیر کوچنی: '
                    .concat(e.origin, ' باید ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' ولري');
                return 'ډیر کوچنی: '
                  .concat(e.origin, ' باید ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' وي');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'ناسم متن: باید د "'.concat(e.prefix, '" سره پیل شي');
                if ('ends_with' === e.format)
                  return 'ناسم متن: باید د "'.concat(e.suffix, '" سره پای ته ورسيږي');
                if ('includes' === e.format) return 'ناسم متن: باید "'.concat(e.includes, '" ولري');
                if ('regex' === e.format)
                  return 'ناسم متن: باید د '.concat(e.pattern, ' سره مطابقت ولري');
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' ناسم دی');
              case 'not_multiple_of':
                return 'ناسم عدد: باید د '.concat(e.divisor, ' مضرب وي');
              case 'unrecognized_keys':
                return 'ناسم '
                  .concat(e.keys.length > 1 ? 'کلیډونه' : 'کلیډ', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'ناسم کلیډ په '.concat(e.origin, ' کې');
              case 'invalid_union':
              default:
                return 'ناسمه ورودي';
              case 'invalid_element':
                return 'ناسم عنصر په '.concat(e.origin, ' کې');
            }
          };
        })(),
      };
    }
    function nW() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'znaków', verb: 'mieć' },
            file: { unit: 'bajtów', verb: 'mieć' },
            array: { unit: 'elementów', verb: 'mieć' },
            set: { unit: 'elementów', verb: 'mieć' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o, u, c, s;
            switch (e.code) {
              case 'invalid_type':
                return 'Nieprawidłowe dane wejściowe: oczekiwano '
                  .concat(e.expected, ', otrzymano ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Nieprawidłowe dane wejściowe: oczekiwano '.concat(e4(e.values[0]));
                return 'Nieprawidłowa opcja: oczekiwano jednej z wartości '.concat(
                  ez(e.values, '|')
                );
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Za duża wartość: oczekiwano, że '
                    .concat(null != (r = e.origin) ? r : 'wartość', ' będzie mieć ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementów');
                return 'Zbyt duż(y/a/e): oczekiwano, że '
                  .concat(null != (a = e.origin) ? a : 'wartość', ' będzie wynosić ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Za mała wartość: oczekiwano, że '
                    .concat(null != (o = e.origin) ? o : 'wartość', ' będzie mieć ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(null != (u = r.unit) ? u : 'elementów');
                return 'Zbyt mał(y/a/e): oczekiwano, że '
                  .concat(null != (c = e.origin) ? c : 'wartość', ' będzie wynosić ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Nieprawidłowy ciąg znaków: musi zaczynać się od "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Nieprawidłowy ciąg znaków: musi kończyć się na "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Nieprawidłowy ciąg znaków: musi zawierać "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi '.concat(e.pattern);
                return 'Nieprawidłow(y/a/e) '.concat(null != (s = n[e.format]) ? s : e.format);
              case 'not_multiple_of':
                return 'Nieprawidłowa liczba: musi być wielokrotnością '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Nierozpoznane klucze'
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Nieprawidłowy klucz w '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Nieprawidłowe dane wejściowe';
              case 'invalid_element':
                return 'Nieprawidłowa wartość w '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nG() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'caracteres', verb: 'ter' },
            file: { unit: 'bytes', verb: 'ter' },
            array: { unit: 'itens', verb: 'ter' },
            set: { unit: 'itens', verb: 'ter' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Tipo inválido: esperado '.concat(e.expected, ', recebido ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Entrada inválida: esperado '.concat(e4(e.values[0]));
                return 'Opção inválida: esperada uma das '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Muito grande: esperado que '
                    .concat(null != (r = e.origin) ? r : 'valor', ' tivesse ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementos');
                return 'Muito grande: esperado que '
                  .concat(null != (a = e.origin) ? a : 'valor', ' fosse ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Muito pequeno: esperado que '
                    .concat(e.origin, ' tivesse ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Muito pequeno: esperado que '
                  .concat(e.origin, ' fosse ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Texto inválido: deve começar com "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Texto inválido: deve terminar com "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Texto inválido: deve incluir "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Texto inválido: deve corresponder ao padrão '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' inválido');
              case 'not_multiple_of':
                return 'Número inválido: deve ser múltiplo de '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Chave'
                  .concat(e.keys.length > 1 ? 's' : '', ' desconhecida')
                  .concat(e.keys.length > 1 ? 's' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Chave inválida em '.concat(e.origin);
              case 'invalid_union':
                return 'Entrada inválida';
              case 'invalid_element':
                return 'Valor inválido em '.concat(e.origin);
              default:
                return 'Campo inválido';
            }
          };
        })(),
      };
    }
    function nK(e, t, n, r) {
      let i = Math.abs(e),
        a = i % 10,
        o = i % 100;
      return o >= 11 && o <= 19 ? r : 1 === a ? t : a >= 2 && a <= 4 ? n : r;
    }
    function nV() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: { one: 'символ', few: 'символа', many: 'символов' }, verb: 'иметь' },
            file: { unit: { one: 'байт', few: 'байта', many: 'байт' }, verb: 'иметь' },
            array: { unit: { one: 'элемент', few: 'элемента', many: 'элементов' }, verb: 'иметь' },
            set: { unit: { one: 'элемент', few: 'элемента', many: 'элементов' }, verb: 'иметь' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a;
            switch (e.code) {
              case 'invalid_type':
                return 'Неверный ввод: ожидалось '.concat(e.expected, ', получено ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Неверный ввод: ожидалось '.concat(e4(e.values[0]));
                return 'Неверный вариант: ожидалось одно из '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  a = t(e.origin);
                if (a) {
                  let t = nK(Number(e.maximum), a.unit.one, a.unit.few, a.unit.many);
                  return 'Слишком большое значение: ожидалось, что '
                    .concat(null != (r = e.origin) ? r : 'значение', ' будет иметь ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(t);
                }
                return 'Слишком большое значение: ожидалось, что '
                  .concat(null != (i = e.origin) ? i : 'значение', ' будет ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r) {
                  let t = nK(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
                  return 'Слишком маленькое значение: ожидалось, что '
                    .concat(e.origin, ' будет иметь ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(t);
                }
                return 'Слишком маленькое значение: ожидалось, что '
                  .concat(e.origin, ' будет ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Неверная строка: должна начинаться с "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Неверная строка: должна заканчиваться на "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Неверная строка: должна содержать "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Неверная строка: должна соответствовать шаблону '.concat(e.pattern);
                return 'Неверный '.concat(null != (a = n[e.format]) ? a : e.format);
              case 'not_multiple_of':
                return 'Неверное число: должно быть кратным '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Нераспознанн'
                  .concat(e.keys.length > 1 ? 'ые' : 'ый', ' ключ')
                  .concat(e.keys.length > 1 ? 'и' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Неверный ключ в '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Неверные входные данные';
              case 'invalid_element':
                return 'Неверное значение в '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nX() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'znakov', verb: 'imeti' },
            file: { unit: 'bajtov', verb: 'imeti' },
            array: { unit: 'elementov', verb: 'imeti' },
            set: { unit: 'elementov', verb: 'imeti' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Neveljaven vnos: pričakovano '.concat(e.expected, ', prejeto ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Neveljaven vnos: pričakovano '.concat(e4(e.values[0]));
                return 'Neveljavna možnost: pričakovano eno izmed '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Preveliko: pričakovano, da bo '
                    .concat(null != (r = e.origin) ? r : 'vrednost', ' imelo ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'elementov');
                return 'Preveliko: pričakovano, da bo '
                  .concat(null != (a = e.origin) ? a : 'vrednost', ' ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Premajhno: pričakovano, da bo '
                    .concat(e.origin, ' imelo ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Premajhno: pričakovano, da bo '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Neveljaven niz: mora se začeti z "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Neveljaven niz: mora se končati z "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Neveljaven niz: mora vsebovati "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Neveljaven niz: mora ustrezati vzorcu '.concat(e.pattern);
                return 'Neveljaven '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Neveljavno število: mora biti večkratnik '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Neprepoznan'
                  .concat(e.keys.length > 1 ? 'i ključi' : ' ključ', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Neveljaven ključ v '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Neveljaven vnos';
              case 'invalid_element':
                return 'Neveljavna vrednost v '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function nY() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'tecken', verb: 'att ha' },
            file: { unit: 'bytes', verb: 'att ha' },
            array: { unit: 'objekt', verb: 'att innehålla' },
            set: { unit: 'objekt', verb: 'att innehålla' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o, u, c, s, l;
            switch (e.code) {
              case 'invalid_type':
                return 'Ogiltig inmatning: förväntat '.concat(e.expected, ', fick ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ogiltig inmatning: förväntat '.concat(e4(e.values[0]));
                return 'Ogiltigt val: förväntade en av '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'För stor(t): förväntade '
                    .concat(null != (r = e.origin) ? r : 'värdet', ' att ha ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'element');
                return 'För stor(t): förväntat '
                  .concat(null != (a = e.origin) ? a : 'värdet', ' att ha ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'För lite(t): förväntade '
                    .concat(null != (o = e.origin) ? o : 'värdet', ' att ha ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'För lite(t): förväntade '
                  .concat(null != (u = e.origin) ? u : 'värdet', ' att ha ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ogiltig sträng: måste börja med "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Ogiltig sträng: måste sluta med "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Ogiltig sträng: måste innehålla "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Ogiltig sträng: måste matcha mönstret "'.concat(e.pattern, '"');
                return 'Ogiltig(t) '.concat(null != (c = n[e.format]) ? c : e.format);
              case 'not_multiple_of':
                return 'Ogiltigt tal: måste vara en multipel av '.concat(e.divisor);
              case 'unrecognized_keys':
                return ''
                  .concat(e.keys.length > 1 ? 'Okända nycklar' : 'Okänd nyckel', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Ogiltig nyckel i '.concat(null != (s = e.origin) ? s : 'värdet');
              case 'invalid_union':
              default:
                return 'Ogiltig input';
              case 'invalid_element':
                return 'Ogiltigt värde i '.concat(null != (l = e.origin) ? l : 'värdet');
            }
          };
        })(),
      };
    }
    function nq() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'எழுத்துக்கள்', verb: 'கொண்டிருக்க வேண்டும்' },
            file: { unit: 'பைட்டுகள்', verb: 'கொண்டிருக்க வேண்டும்' },
            array: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
            set: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது '
                  .concat(e.expected, ', பெறப்பட்டது ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது '.concat(e4(e.values[0]));
                return 'தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது '.concat(
                  ez(e.values, '|'),
                  ' இல் ஒன்று'
                );
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'மிக பெரியது: எதிர்பார்க்கப்பட்டது '
                    .concat(null != (r = e.origin) ? r : 'மதிப்பு', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'உறுப்புகள்', ' ஆக இருக்க வேண்டும்');
                return 'மிக பெரியது: எதிர்பார்க்கப்பட்டது '
                  .concat(null != (a = e.origin) ? a : 'மதிப்பு', ' ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' ஆக இருக்க வேண்டும்');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'மிகச் சிறியது: எதிர்பார்க்கப்பட்டது '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' ஆக இருக்க வேண்டும்');
                return 'மிகச் சிறியது: எதிர்பார்க்கப்பட்டது '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' ஆக இருக்க வேண்டும்');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'தவறான சரம்: "'.concat(e.prefix, '" இல் தொடங்க வேண்டும்');
                if ('ends_with' === e.format)
                  return 'தவறான சரம்: "'.concat(e.suffix, '" இல் முடிவடைய வேண்டும்');
                if ('includes' === e.format)
                  return 'தவறான சரம்: "'.concat(e.includes, '" ஐ உள்ளடக்க வேண்டும்');
                if ('regex' === e.format)
                  return 'தவறான சரம்: '.concat(e.pattern, ' முறைபாட்டுடன் பொருந்த வேண்டும்');
                return 'தவறான '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'தவறான எண்: '.concat(e.divisor, ' இன் பலமாக இருக்க வேண்டும்');
              case 'unrecognized_keys':
                return 'அடையாளம் தெரியாத விசை'
                  .concat(e.keys.length > 1 ? 'கள்' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return ''.concat(e.origin, ' இல் தவறான விசை');
              case 'invalid_union':
              default:
                return 'தவறான உள்ளீடு';
              case 'invalid_element':
                return ''.concat(e.origin, ' இல் தவறான மதிப்பு');
            }
          };
        })(),
      };
    }
    function nH() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'ตัวอักษร', verb: 'ควรมี' },
            file: { unit: 'ไบต์', verb: 'ควรมี' },
            array: { unit: 'รายการ', verb: 'ควรมี' },
            set: { unit: 'รายการ', verb: 'ควรมี' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น '.concat(e.expected, ' แต่ได้รับ ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length) return 'ค่าไม่ถูกต้อง: ควรเป็น '.concat(e4(e.values[0]));
                return 'ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? 'ไม่เกิน' : 'น้อยกว่า',
                  o = t(e.origin);
                if (o)
                  return 'เกินกำหนด: '
                    .concat(null != (r = e.origin) ? r : 'ค่า', ' ควรมี')
                    .concat(n, ' ')
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'รายการ');
                return 'เกินกำหนด: '
                  .concat(null != (a = e.origin) ? a : 'ค่า', ' ควรมี')
                  .concat(n, ' ')
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? 'อย่างน้อย' : 'มากกว่า',
                  r = t(e.origin);
                if (r)
                  return 'น้อยกว่ากำหนด: '
                    .concat(e.origin, ' ควรมี')
                    .concat(n, ' ')
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'น้อยกว่ากำหนด: '
                  .concat(e.origin, ' ควรมี')
                  .concat(n, ' ')
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'รูปแบบไม่ถูกต้อง: ข้อความต้องมี "'.concat(e.includes, '" อยู่ในข้อความ');
                if ('regex' === e.format)
                  return 'รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด '.concat(e.pattern);
                return 'รูปแบบไม่ถูกต้อง: '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย '.concat(e.divisor, ' ได้ลงตัว');
              case 'unrecognized_keys':
                return 'พบคีย์ที่ไม่รู้จัก: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'คีย์ไม่ถูกต้องใน '.concat(e.origin);
              case 'invalid_union':
                return 'ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้';
              case 'invalid_element':
                return 'ข้อมูลไม่ถูกต้องใน '.concat(e.origin);
              default:
                return 'ข้อมูลไม่ถูกต้อง';
            }
          };
        })(),
      };
    }
    function nQ() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'karakter', verb: 'olmalı' },
            file: { unit: 'bayt', verb: 'olmalı' },
            array: { unit: 'öğe', verb: 'olmalı' },
            set: { unit: 'öğe', verb: 'olmalı' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Geçersiz değer: beklenen '.concat(e.expected, ', alınan ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Geçersiz değer: beklenen '.concat(e4(e.values[0]));
                return 'Geçersiz seçenek: aşağıdakilerden biri olmalı: '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Çok büyük: beklenen '
                    .concat(null != (r = e.origin) ? r : 'değer', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'öğe');
                return 'Çok büyük: beklenen '
                  .concat(null != (a = e.origin) ? a : 'değer', ' ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Çok küçük: beklenen '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Çok küçük: beklenen '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Geçersiz metin: "'.concat(e.prefix, '" ile başlamalı');
                if ('ends_with' === e.format)
                  return 'Geçersiz metin: "'.concat(e.suffix, '" ile bitmeli');
                if ('includes' === e.format)
                  return 'Geçersiz metin: "'.concat(e.includes, '" içermeli');
                if ('regex' === e.format)
                  return 'Geçersiz metin: '.concat(e.pattern, ' desenine uymalı');
                return 'Geçersiz '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Geçersiz sayı: '.concat(e.divisor, ' ile tam bölünebilmeli');
              case 'unrecognized_keys':
                return 'Tanınmayan anahtar'
                  .concat(e.keys.length > 1 ? 'lar' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return ''.concat(e.origin, ' içinde geçersiz anahtar');
              case 'invalid_union':
              default:
                return 'Geçersiz değer';
              case 'invalid_element':
                return ''.concat(e.origin, ' içinde geçersiz değer');
            }
          };
        })(),
      };
    }
    function n0() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'символів', verb: 'матиме' },
            file: { unit: 'байтів', verb: 'матиме' },
            array: { unit: 'елементів', verb: 'матиме' },
            set: { unit: 'елементів', verb: 'матиме' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Неправильні вхідні дані: очікується '
                  .concat(e.expected, ', отримано ')
                  .concat(
                    ((e) => {
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
                    })(e.input)
                  );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Неправильні вхідні дані: очікується '.concat(e4(e.values[0]));
                return 'Неправильна опція: очікується одне з '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Занадто велике: очікується, що '
                    .concat(null != (r = e.origin) ? r : 'значення', ' ')
                    .concat(o.verb, ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'елементів');
                return 'Занадто велике: очікується, що '
                  .concat(null != (a = e.origin) ? a : 'значення', ' буде ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Занадто мале: очікується, що '
                    .concat(e.origin, ' ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Занадто мале: очікується, що '
                  .concat(e.origin, ' буде ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Неправильний рядок: повинен починатися з "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Неправильний рядок: повинен закінчуватися на "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Неправильний рядок: повинен містити "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Неправильний рядок: повинен відповідати шаблону '.concat(e.pattern);
                return 'Неправильний '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'Неправильне число: повинно бути кратним '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Нерозпізнаний ключ'
                  .concat(e.keys.length > 1 ? 'і' : '', ': ')
                  .concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Неправильний ключ у '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Неправильні вхідні дані';
              case 'invalid_element':
                return 'Неправильне значення у '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function n4() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'حروف', verb: 'ہونا' },
            file: { unit: 'بائٹس', verb: 'ہونا' },
            array: { unit: 'آئٹمز', verb: 'ہونا' },
            set: { unit: 'آئٹمز', verb: 'ہونا' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'غلط ان پٹ: '.concat(e.expected, ' متوقع تھا، ').concat(
                  ((e) => {
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
                  })(e.input),
                  ' موصول ہوا'
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'غلط ان پٹ: '.concat(e4(e.values[0]), ' متوقع تھا');
                return 'غلط آپشن: '.concat(ez(e.values, '|'), ' میں سے ایک متوقع تھا');
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'بہت بڑا: '
                    .concat(null != (r = e.origin) ? r : 'ویلیو', ' کے ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'عناصر', ' ہونے متوقع تھے');
                return 'بہت بڑا: '
                  .concat(null != (a = e.origin) ? a : 'ویلیو', ' کا ')
                  .concat(n)
                  .concat(e.maximum.toString(), ' ہونا متوقع تھا');
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'بہت چھوٹا: '
                    .concat(e.origin, ' کے ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit, ' ہونے متوقع تھے');
                return 'بہت چھوٹا: '
                  .concat(e.origin, ' کا ')
                  .concat(n)
                  .concat(e.minimum.toString(), ' ہونا متوقع تھا');
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'غلط سٹرنگ: "'.concat(e.prefix, '" سے شروع ہونا چاہیے');
                if ('ends_with' === e.format)
                  return 'غلط سٹرنگ: "'.concat(e.suffix, '" پر ختم ہونا چاہیے');
                if ('includes' === e.format)
                  return 'غلط سٹرنگ: "'.concat(e.includes, '" شامل ہونا چاہیے');
                if ('regex' === e.format)
                  return 'غلط سٹرنگ: پیٹرن '.concat(e.pattern, ' سے میچ ہونا چاہیے');
                return 'غلط '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return 'غلط نمبر: '.concat(e.divisor, ' کا مضاعف ہونا چاہیے');
              case 'unrecognized_keys':
                return 'غیر تسلیم شدہ کی'
                  .concat(e.keys.length > 1 ? 'ز' : '', ': ')
                  .concat(ez(e.keys, '، '));
              case 'invalid_key':
                return ''.concat(e.origin, ' میں غلط کی');
              case 'invalid_union':
              default:
                return 'غلط ان پٹ';
              case 'invalid_element':
                return ''.concat(e.origin, ' میں غلط ویلیو');
            }
          };
        })(),
      };
    }
    function n6() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'ký tự', verb: 'có' },
            file: { unit: 'byte', verb: 'có' },
            array: { unit: 'phần tử', verb: 'có' },
            set: { unit: 'phần tử', verb: 'có' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return 'Đầu vào không hợp lệ: mong đợi '.concat(e.expected, ', nhận được ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Đầu vào không hợp lệ: mong đợi '.concat(e4(e.values[0]));
                return 'Tùy chọn không hợp lệ: mong đợi một trong các giá trị '.concat(
                  ez(e.values, '|')
                );
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return 'Quá lớn: mong đợi '
                    .concat(null != (r = e.origin) ? r : 'giá trị', ' ')
                    .concat(o.verb, ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : 'phần tử');
                return 'Quá lớn: mong đợi '
                  .concat(null != (a = e.origin) ? a : 'giá trị', ' ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Quá nhỏ: mong đợi '
                    .concat(e.origin, ' ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return 'Quá nhỏ: mong đợi '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Chuỗi không hợp lệ: phải bắt đầu bằng "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Chuỗi không hợp lệ: phải kết thúc bằng "'.concat(e.suffix, '"');
                if ('includes' === e.format)
                  return 'Chuỗi không hợp lệ: phải bao gồm "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return 'Chuỗi không hợp lệ: phải khớp với mẫu '.concat(e.pattern);
                return ''.concat(null != (o = n[e.format]) ? o : e.format, ' không hợp lệ');
              case 'not_multiple_of':
                return 'Số không hợp lệ: phải là bội số của '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Khóa không được nhận dạng: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Khóa không hợp lệ trong '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Đầu vào không hợp lệ';
              case 'invalid_element':
                return 'Giá trị không hợp lệ trong '.concat(e.origin);
            }
          };
        })(),
      };
    }
    function n1() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: '字符', verb: '包含' },
            file: { unit: '字节', verb: '包含' },
            array: { unit: '项', verb: '包含' },
            set: { unit: '项', verb: '包含' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return '无效输入：期望 '.concat(e.expected, '，实际接收 ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length) return '无效输入：期望 '.concat(e4(e.values[0]));
                return '无效选项：期望以下之一 '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return '数值过大：期望 '
                    .concat(null != (r = e.origin) ? r : '值', ' ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : '个元素');
                return '数值过大：期望 '
                  .concat(null != (a = e.origin) ? a : '值', ' ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return '数值过小：期望 '
                    .concat(e.origin, ' ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return '数值过小：期望 '
                  .concat(e.origin, ' ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return '无效字符串：必须以 "'.concat(e.prefix, '" 开头');
                if ('ends_with' === e.format)
                  return '无效字符串：必须以 "'.concat(e.suffix, '" 结尾');
                if ('includes' === e.format)
                  return '无效字符串：必须包含 "'.concat(e.includes, '"');
                if ('regex' === e.format)
                  return '无效字符串：必须满足正则表达式 '.concat(e.pattern);
                return '无效'.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return '无效数字：必须是 '.concat(e.divisor, ' 的倍数');
              case 'unrecognized_keys':
                return '出现未知的键(key): '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return ''.concat(e.origin, ' 中的键(key)无效');
              case 'invalid_union':
              default:
                return '无效输入';
              case 'invalid_element':
                return ''.concat(e.origin, ' 中包含无效值(value)');
            }
          };
        })(),
      };
    }
    function n2() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: '字元', verb: '擁有' },
            file: { unit: '位元組', verb: '擁有' },
            array: { unit: '項目', verb: '擁有' },
            set: { unit: '項目', verb: '擁有' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i, a, o;
            switch (e.code) {
              case 'invalid_type':
                return '無效的輸入值：預期為 '.concat(e.expected, '，但收到 ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length) return '無效的輸入值：預期為 '.concat(e4(e.values[0]));
                return '無效的選項：預期為以下其中之一 '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  o = t(e.origin);
                if (o)
                  return '數值過大：預期 '
                    .concat(null != (r = e.origin) ? r : '值', ' 應為 ')
                    .concat(n)
                    .concat(e.maximum.toString(), ' ')
                    .concat(null != (i = o.unit) ? i : '個元素');
                return '數值過大：預期 '
                  .concat(null != (a = e.origin) ? a : '值', ' 應為 ')
                  .concat(n)
                  .concat(e.maximum.toString());
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return '數值過小：預期 '
                    .concat(e.origin, ' 應為 ')
                    .concat(n)
                    .concat(e.minimum.toString(), ' ')
                    .concat(r.unit);
                return '數值過小：預期 '
                  .concat(e.origin, ' 應為 ')
                  .concat(n)
                  .concat(e.minimum.toString());
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return '無效的字串：必須以 "'.concat(e.prefix, '" 開頭');
                if ('ends_with' === e.format)
                  return '無效的字串：必須以 "'.concat(e.suffix, '" 結尾');
                if ('includes' === e.format)
                  return '無效的字串：必須包含 "'.concat(e.includes, '"');
                if ('regex' === e.format) return '無效的字串：必須符合格式 '.concat(e.pattern);
                return '無效的 '.concat(null != (o = n[e.format]) ? o : e.format);
              case 'not_multiple_of':
                return '無效的數字：必須為 '.concat(e.divisor, ' 的倍數');
              case 'unrecognized_keys':
                return '無法識別的鍵值'
                  .concat(e.keys.length > 1 ? '們' : '', '：')
                  .concat(ez(e.keys, '、'));
              case 'invalid_key':
                return ''.concat(e.origin, ' 中有無效的鍵值');
              case 'invalid_union':
              default:
                return '無效的輸入值';
              case 'invalid_element':
                return ''.concat(e.origin, ' 中有無效的值');
            }
          };
        })(),
      };
    }
    function n9() {
      return {
        localeError: (() => {
          let e = {
            string: { unit: 'àmi', verb: 'ní' },
            file: { unit: 'bytes', verb: 'ní' },
            array: { unit: 'nkan', verb: 'ní' },
            set: { unit: 'nkan', verb: 'ní' },
          };
          function t(t) {
            var n;
            return null != (n = e[t]) ? n : null;
          }
          let n = {
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
          return (e) => {
            var r, i;
            switch (e.code) {
              case 'invalid_type':
                return 'Ìbáwọlé aṣìṣe: a ní láti fi '.concat(e.expected, ', àmọ̀ a rí ').concat(
                  ((e) => {
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
                  })(e.input)
                );
              case 'invalid_value':
                if (1 === e.values.length)
                  return 'Ìbáwọlé aṣìṣe: a ní láti fi '.concat(e4(e.values[0]));
                return 'Àṣàyàn aṣìṣe: yan ọ̀kan lára '.concat(ez(e.values, '|'));
              case 'too_big': {
                let n = e.inclusive ? '<=' : '<',
                  i = t(e.origin);
                if (i)
                  return 'Tó pọ̀ jù: a ní láti jẹ́ pé '
                    .concat(null != (r = e.origin) ? r : 'iye', ' ')
                    .concat(i.verb, ' ')
                    .concat(n)
                    .concat(e.maximum, ' ')
                    .concat(i.unit);
                return 'Tó pọ̀ jù: a ní láti jẹ́ '.concat(n).concat(e.maximum);
              }
              case 'too_small': {
                let n = e.inclusive ? '>=' : '>',
                  r = t(e.origin);
                if (r)
                  return 'Kéré ju: a ní láti jẹ́ pé '
                    .concat(e.origin, ' ')
                    .concat(r.verb, ' ')
                    .concat(n)
                    .concat(e.minimum, ' ')
                    .concat(r.unit);
                return 'Kéré ju: a ní láti jẹ́ '.concat(n).concat(e.minimum);
              }
              case 'invalid_format':
                if ('starts_with' === e.format)
                  return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "'.concat(e.prefix, '"');
                if ('ends_with' === e.format)
                  return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "'.concat(e.suffix, '"');
                if ('includes' === e.format) return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "'.concat(e.includes, '"');
                if ('regex' === e.format) return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu '.concat(e.pattern);
                return 'Aṣìṣe: '.concat(null != (i = n[e.format]) ? i : e.format);
              case 'not_multiple_of':
                return 'Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti '.concat(e.divisor);
              case 'unrecognized_keys':
                return 'Bọtìnì àìmọ̀: '.concat(ez(e.keys, ', '));
              case 'invalid_key':
                return 'Bọtìnì aṣìṣe nínú '.concat(e.origin);
              case 'invalid_union':
              default:
                return 'Ìbáwọlé aṣìṣe';
              case 'invalid_element':
                return 'Iye aṣìṣe nínú '.concat(e.origin);
            }
          };
        })(),
      };
    }
    (e.s(
      [
        'ar',
        () => ng,
        'az',
        () => nh,
        'be',
        () => ny,
        'ca',
        () => nb,
        'cs',
        () => nk,
        'da',
        () => nI,
        'de',
        () => nS,
        'en',
        () => nw,
        'eo',
        () => nx,
        'es',
        () => nz,
        'fa',
        () => nZ,
        'fi',
        () => nU,
        'fr',
        () => nO,
        'frCA',
        () => nN,
        'he',
        () => nj,
        'hu',
        () => nD,
        'id',
        () => nP,
        'is',
        () => nE,
        'it',
        () => n$,
        'ja',
        () => nT,
        'kh',
        () => nA,
        'ko',
        () => nC,
        'mk',
        () => nR,
        'ms',
        () => nL,
        'nl',
        () => nJ,
        'no',
        () => nF,
        'ota',
        () => nM,
        'pl',
        () => nW,
        'ps',
        () => nB,
        'pt',
        () => nG,
        'ru',
        () => nV,
        'sl',
        () => nX,
        'sv',
        () => nY,
        'ta',
        () => nq,
        'th',
        () => nH,
        'tr',
        () => nQ,
        'ua',
        () => n0,
        'ur',
        () => n4,
        'vi',
        () => n6,
        'yo',
        () => n9,
        'zhCN',
        () => n1,
        'zhTW',
        () => n2,
      ],
      29921
    ),
      e.s([], 55638),
      e.i(55638));
    var n3 = e.i(29921);
    e.s([], 51276);
    var n8 = e.i(51276);
    (e.i(8168),
      e.s(
        [
          '$ZodAsyncError',
          () => rt,
          '$ZodEncodeError',
          () => rn,
          '$brand',
          () => re,
          '$constructor',
          () => n7,
          'NEVER',
          () => n5,
          'config',
          () => ri,
          'globalConfig',
          () => rr,
        ],
        93483
      ));
    let n5 = Object.freeze({ status: 'aborted' });
    function n7(e, t, n) {
      var r;
      function i(n, r) {
        var i, a;
        for (let o in (Object.defineProperty(n, '_zod', {
          value: null != (a = n._zod) ? a : {},
          enumerable: !1,
        }),
        null != (i = n._zod).traits || (i.traits = new Set()),
        n._zod.traits.add(e),
        t(n, r),
        u.prototype))
          o in n || Object.defineProperty(n, o, { value: u.prototype[o].bind(n) });
        ((n._zod.constr = u), (n._zod.def = r));
      }
      let a = null != (r = null == n ? void 0 : n.Parent) ? r : Object;
      class o extends a {}
      function u(e) {
        var t;
        let r = (null == n ? void 0 : n.Parent) ? new o() : this;
        for (let n of (i(r, e),
        null != (t = r._zod).deferred || (t.deferred = []),
        r._zod.deferred))
          n();
        return r;
      }
      return (
        Object.defineProperty(o, 'name', { value: e }),
        Object.defineProperty(u, 'init', { value: i }),
        Object.defineProperty(u, Symbol.hasInstance, {
          value: (t) => {
            var r, i;
            return (
              (null != n && !!n.Parent && t instanceof n.Parent) ||
              (null == t || null == (i = t._zod) || null == (r = i.traits) ? void 0 : r.has(e))
            );
          },
        }),
        Object.defineProperty(u, 'name', { value: e }),
        u
      );
    }
    let re = Symbol('zod_brand');
    class rt extends Error {
      constructor() {
        super('Encountered Promise during synchronous parse. Use .parseAsync() instead.');
      }
    }
    class rn extends Error {
      constructor(e) {
        (super('Encountered unidirectional transform during encode: '.concat(e)),
          (this.name = 'ZodEncodeError'));
      }
    }
    let rr = {};
    function ri(e) {
      return (e && Object.assign(rr, e), rr);
    }
    (e.i(93483),
      e.s(
        [
          '_decode',
          () => rS,
          '_decodeAsync',
          () => rZ,
          '_encode',
          () => rk,
          '_encodeAsync',
          () => rx,
          '_parse',
          () => rf,
          '_parseAsync',
          () => rv,
          '_safeDecode',
          () => rj,
          '_safeDecodeAsync',
          () => r$,
          '_safeEncode',
          () => rO,
          '_safeEncodeAsync',
          () => rP,
          '_safeParse',
          () => rh,
          '_safeParseAsync',
          () => ry,
          'decode',
          () => rw,
          'decodeAsync',
          () => rU,
          'encode',
          () => rI,
          'encodeAsync',
          () => rz,
          'parse',
          () => rp,
          'parseAsync',
          () => rg,
          'safeDecode',
          () => rD,
          'safeDecodeAsync',
          () => rT,
          'safeEncode',
          () => rN,
          'safeEncodeAsync',
          () => rE,
          'safeParse',
          () => r_,
          'safeParseAsync',
          () => rb,
        ],
        17447
      ),
      e.s(
        [
          '$ZodError',
          () => ro,
          '$ZodRealError',
          () => ru,
          'flattenError',
          () => rc,
          'formatError',
          () => rs,
          'prettifyError',
          () => rm,
          'toDotPath',
          () => rd,
          'treeifyError',
          () => rl,
        ],
        81852
      ));
    let ra = (e, t) => {
        ((e.name = '$ZodError'),
          Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, eZ, 2)),
          Object.defineProperty(e, 'toString', { value: () => e.message, enumerable: !1 }));
      },
      ro = n7('$ZodError', ra),
      ru = n7('$ZodError', ra, { Parent: Error });
    function rc(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e) => e.message,
        n = {},
        r = [];
      for (let i of e.issues)
        i.path.length > 0
          ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
          : r.push(t(i));
      return { formErrors: r, fieldErrors: n };
    }
    function rs(e, t) {
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
    function rl(e, t) {
      let n =
          t ||
          function (e) {
            return e.message;
          },
        r = { errors: [] },
        i = function (e) {
          var t, a;
          let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          for (let u of e.issues)
            if ('invalid_union' === u.code && u.errors.length)
              u.errors.map((e) => i({ issues: e }, u.path));
            else if ('invalid_key' === u.code) i({ issues: u.issues }, u.path);
            else if ('invalid_element' === u.code) i({ issues: u.issues }, u.path);
            else {
              let e = [...o, ...u.path];
              if (0 === e.length) {
                r.errors.push(n(u));
                continue;
              }
              let i = r,
                c = 0;
              for (; c < e.length; ) {
                let r = e[c],
                  o = c === e.length - 1;
                ('string' == typeof r
                  ? (null != i.properties || (i.properties = {}),
                    null != (t = i.properties)[r] || (t[r] = { errors: [] }),
                    (i = i.properties[r]))
                  : (null != i.items || (i.items = []),
                    null != (a = i.items)[r] || (a[r] = { errors: [] }),
                    (i = i.items[r])),
                  o && i.errors.push(n(u)),
                  c++);
              }
            }
        };
      return (i(e), r);
    }
    function rd(e) {
      let t = [];
      for (let n of e.map((e) => ('object' == typeof e ? e.key : e)))
        'number' == typeof n
          ? t.push('['.concat(n, ']'))
          : 'symbol' == typeof n
            ? t.push('['.concat(JSON.stringify(String(n)), ']'))
            : /[^\w$]/.test(n)
              ? t.push('['.concat(JSON.stringify(n), ']'))
              : (t.length && t.push('.'), t.push(n));
      return t.join('');
    }
    function rm(e) {
      let t = [];
      for (let r of [...e.issues].sort((e, t) => {
        var n, r;
        return (null != (n = e.path) ? n : []).length - (null != (r = t.path) ? r : []).length;
      })) {
        var n;
        (t.push('✖ '.concat(r.message)),
          (null == (n = r.path) ? void 0 : n.length) && t.push('  → at '.concat(rd(r.path))));
      }
      return t.join('\n');
    }
    let rf = (e) => (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !1 }) : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new rt();
        if (o.issues.length) {
          var u;
          let t = new (null != (u = null == i ? void 0 : i.Err) ? u : e)(
            o.issues.map((e) => ta(e, a, ri()))
          );
          throw (eF(t, null == i ? void 0 : i.callee), t);
        }
        return o.value;
      },
      rp = rf(ru),
      rv = (e) => async (t, n, r, i) => {
        let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          var u;
          let t = new (null != (u = null == i ? void 0 : i.Err) ? u : e)(
            o.issues.map((e) => ta(e, a, ri()))
          );
          throw (eF(t, null == i ? void 0 : i.callee), t);
        }
        return o.value;
      },
      rg = rv(ru),
      rh = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new rt();
        return a.issues.length
          ? { success: !1, error: new (null != e ? e : ro)(a.issues.map((e) => ta(e, i, ri()))) }
          : { success: !0, data: a.value };
      },
      r_ = rh(ru),
      ry = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => ta(e, i, ri()))) }
            : { success: !0, data: a.value }
        );
      },
      rb = ry(ru),
      rk = (e) => (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return rf(e)(t, n, i);
      },
      rI = rk(ru),
      rS = (e) => (t, n, r) => rf(e)(t, n, r),
      rw = rS(ru),
      rx = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return rv(e)(t, n, i);
      },
      rz = rx(ru),
      rZ = (e) => async (t, n, r) => rv(e)(t, n, r),
      rU = rZ(ru),
      rO = (e) => (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return rh(e)(t, n, i);
      },
      rN = rO(ru),
      rj = (e) => (t, n, r) => rh(e)(t, n, r),
      rD = rj(ru),
      rP = (e) => async (t, n, r) => {
        let i = r ? Object.assign(r, { direction: 'backward' }) : { direction: 'backward' };
        return ry(e)(t, n, i);
      },
      rE = rP(ru),
      r$ = (e) => async (t, n, r) => ry(e)(t, n, r),
      rT = r$(ru);
    (e.i(17447),
      e.i(81852),
      e.s(
        [
          '$ZodAny',
          () => iR,
          '$ZodArray',
          () => iW,
          '$ZodBase64',
          () => iw,
          '$ZodBase64URL',
          () => iz,
          '$ZodBigInt',
          () => iE,
          '$ZodBigIntFormat',
          () => i$,
          '$ZodBoolean',
          () => iP,
          '$ZodCIDRv4',
          () => ik,
          '$ZodCIDRv6',
          () => iI,
          '$ZodCUID',
          () => is,
          '$ZodCUID2',
          () => il,
          '$ZodCatch',
          () => am,
          '$ZodCodec',
          () => ag,
          '$ZodCustom',
          () => ax,
          '$ZodCustomStringFormat',
          () => iN,
          '$ZodDate',
          () => iM,
          '$ZodDefault',
          () => ao,
          '$ZodDiscriminatedUnion',
          () => iQ,
          '$ZodE164',
          () => iZ,
          '$ZodEmail',
          () => ia,
          '$ZodEmoji',
          () => iu,
          '$ZodEnum',
          () => i7,
          '$ZodFile',
          () => at,
          '$ZodFunction',
          () => aI,
          '$ZodGUID',
          () => ir,
          '$ZodIPv4',
          () => iy,
          '$ZodIPv6',
          () => ib,
          '$ZodISODate',
          () => ig,
          '$ZodISODateTime',
          () => iv,
          '$ZodISODuration',
          () => i_,
          '$ZodISOTime',
          () => ih,
          '$ZodIntersection',
          () => i0,
          '$ZodJWT',
          () => iO,
          '$ZodKSUID',
          () => ip,
          '$ZodLazy',
          () => aw,
          '$ZodLiteral',
          () => ae,
          '$ZodMap',
          () => i9,
          '$ZodNaN',
          () => af,
          '$ZodNanoID',
          () => ic,
          '$ZodNever',
          () => iJ,
          '$ZodNonOptional',
          () => as,
          '$ZodNull',
          () => iC,
          '$ZodNullable',
          () => aa,
          '$ZodNumber',
          () => ij,
          '$ZodNumberFormat',
          () => iD,
          '$ZodObject',
          () => iX,
          '$ZodObjectJIT',
          () => iY,
          '$ZodOptional',
          () => ai,
          '$ZodPipe',
          () => ap,
          '$ZodPrefault',
          () => ac,
          '$ZodPromise',
          () => aS,
          '$ZodReadonly',
          () => ay,
          '$ZodRecord',
          () => i2,
          '$ZodSet',
          () => i8,
          '$ZodString',
          () => ie,
          '$ZodStringFormat',
          () => it,
          '$ZodSuccess',
          () => ad,
          '$ZodSymbol',
          () => iT,
          '$ZodTemplateLiteral',
          () => ak,
          '$ZodTransform',
          () => an,
          '$ZodTuple',
          () => i6,
          '$ZodType',
          () => r7,
          '$ZodULID',
          () => id,
          '$ZodURL',
          () => io,
          '$ZodUUID',
          () => ii,
          '$ZodUndefined',
          () => iA,
          '$ZodUnion',
          () => iH,
          '$ZodUnknown',
          () => iL,
          '$ZodVoid',
          () => iF,
          '$ZodXID',
          () => im,
          'clone',
          () => eH,
          'isValidBase64',
          () => iS,
          'isValidBase64URL',
          () => ix,
          'isValidJWT',
          () => iU,
        ],
        79938
      ),
      e.s(
        [
          '$ZodAny',
          () => iR,
          '$ZodArray',
          () => iW,
          '$ZodBase64',
          () => iw,
          '$ZodBase64URL',
          () => iz,
          '$ZodBigInt',
          () => iE,
          '$ZodBigIntFormat',
          () => i$,
          '$ZodBoolean',
          () => iP,
          '$ZodCIDRv4',
          () => ik,
          '$ZodCIDRv6',
          () => iI,
          '$ZodCUID',
          () => is,
          '$ZodCUID2',
          () => il,
          '$ZodCatch',
          () => am,
          '$ZodCodec',
          () => ag,
          '$ZodCustom',
          () => ax,
          '$ZodCustomStringFormat',
          () => iN,
          '$ZodDate',
          () => iM,
          '$ZodDefault',
          () => ao,
          '$ZodDiscriminatedUnion',
          () => iQ,
          '$ZodE164',
          () => iZ,
          '$ZodEmail',
          () => ia,
          '$ZodEmoji',
          () => iu,
          '$ZodEnum',
          () => i7,
          '$ZodFile',
          () => at,
          '$ZodFunction',
          () => aI,
          '$ZodGUID',
          () => ir,
          '$ZodIPv4',
          () => iy,
          '$ZodIPv6',
          () => ib,
          '$ZodISODate',
          () => ig,
          '$ZodISODateTime',
          () => iv,
          '$ZodISODuration',
          () => i_,
          '$ZodISOTime',
          () => ih,
          '$ZodIntersection',
          () => i0,
          '$ZodJWT',
          () => iO,
          '$ZodKSUID',
          () => ip,
          '$ZodLazy',
          () => aw,
          '$ZodLiteral',
          () => ae,
          '$ZodMap',
          () => i9,
          '$ZodNaN',
          () => af,
          '$ZodNanoID',
          () => ic,
          '$ZodNever',
          () => iJ,
          '$ZodNonOptional',
          () => as,
          '$ZodNull',
          () => iC,
          '$ZodNullable',
          () => aa,
          '$ZodNumber',
          () => ij,
          '$ZodNumberFormat',
          () => iD,
          '$ZodObject',
          () => iX,
          '$ZodObjectJIT',
          () => iY,
          '$ZodOptional',
          () => ai,
          '$ZodPipe',
          () => ap,
          '$ZodPrefault',
          () => ac,
          '$ZodPromise',
          () => aS,
          '$ZodReadonly',
          () => ay,
          '$ZodRecord',
          () => i2,
          '$ZodSet',
          () => i8,
          '$ZodString',
          () => ie,
          '$ZodStringFormat',
          () => it,
          '$ZodSuccess',
          () => ad,
          '$ZodSymbol',
          () => iT,
          '$ZodTemplateLiteral',
          () => ak,
          '$ZodTransform',
          () => an,
          '$ZodTuple',
          () => i6,
          '$ZodType',
          () => r7,
          '$ZodULID',
          () => id,
          '$ZodURL',
          () => io,
          '$ZodUUID',
          () => ii,
          '$ZodUndefined',
          () => iA,
          '$ZodUnion',
          () => iH,
          '$ZodUnknown',
          () => iL,
          '$ZodVoid',
          () => iF,
          '$ZodXID',
          () => im,
          'isValidBase64',
          () => iS,
          'isValidBase64URL',
          () => ix,
          'isValidJWT',
          () => iU,
        ],
        61612
      ),
      e.s(
        [
          '$ZodCheck',
          () => rA,
          '$ZodCheckBigIntFormat',
          () => rM,
          '$ZodCheckEndsWith',
          () => r6,
          '$ZodCheckGreaterThan',
          () => rL,
          '$ZodCheckIncludes',
          () => r0,
          '$ZodCheckLengthEquals',
          () => rX,
          '$ZodCheckLessThan',
          () => rR,
          '$ZodCheckLowerCase',
          () => rH,
          '$ZodCheckMaxLength',
          () => rK,
          '$ZodCheckMaxSize',
          () => rB,
          '$ZodCheckMimeType',
          () => r9,
          '$ZodCheckMinLength',
          () => rV,
          '$ZodCheckMinSize',
          () => rW,
          '$ZodCheckMultipleOf',
          () => rJ,
          '$ZodCheckNumberFormat',
          () => rF,
          '$ZodCheckOverwrite',
          () => r3,
          '$ZodCheckProperty',
          () => r2,
          '$ZodCheckRegex',
          () => rq,
          '$ZodCheckSizeEquals',
          () => rG,
          '$ZodCheckStartsWith',
          () => r4,
          '$ZodCheckStringFormat',
          () => rY,
          '$ZodCheckUpperCase',
          () => rQ,
        ],
        59698
      ));
    let rA = n7('$ZodCheck', (e, t) => {
        var n;
        (null != e._zod || (e._zod = {}),
          (e._zod.def = t),
          null != (n = e._zod).onattach || (n.onattach = []));
      }),
      rC = { number: 'number', bigint: 'bigint', object: 'date' },
      rR = n7('$ZodCheckLessThan', (e, t) => {
        rA.init(e, t);
        let n = rC[typeof t.value];
        (e._zod.onattach.push((e) => {
          var n;
          let r = e._zod.bag,
            i = null != (n = t.inclusive ? r.maximum : r.exclusiveMaximum) ? n : 1 / 0;
          t.value < i && (t.inclusive ? (r.maximum = t.value) : (r.exclusiveMaximum = t.value));
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
      rL = n7('$ZodCheckGreaterThan', (e, t) => {
        rA.init(e, t);
        let n = rC[typeof t.value];
        (e._zod.onattach.push((e) => {
          var n;
          let r = e._zod.bag,
            i = null != (n = t.inclusive ? r.minimum : r.exclusiveMinimum) ? n : -1 / 0;
          t.value > i && (t.inclusive ? (r.minimum = t.value) : (r.exclusiveMinimum = t.value));
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
      rJ = n7('$ZodCheckMultipleOf', (e, t) => {
        (rA.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            null != (n = e._zod.bag).multipleOf || (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error('Cannot mix number and bigint in multiple_of check.');
            ('bigint' == typeof n.value
              ? n.value % t.value === BigInt(0)
              : 0 === ej(n.value, t.value)) ||
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
      rF = n7('$ZodCheckNumberFormat', (e, t) => {
        var n;
        (rA.init(e, t), (t.format = t.format || 'float64'));
        let r = null == (n = t.format) ? void 0 : n.includes('int'),
          i = r ? 'int' : 'number',
          [a, o] = e1[t.format];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag;
          ((n.format = t.format), (n.minimum = a), (n.maximum = o), r && (n.pattern = t0));
        }),
          (e._zod.check = (n) => {
            let u = n.value;
            if (r) {
              if (!Number.isInteger(u))
                return void n.issues.push({
                  expected: i,
                  format: t.format,
                  code: 'invalid_type',
                  continue: !1,
                  input: u,
                  inst: e,
                });
              if (!Number.isSafeInteger(u))
                return void (u > 0
                  ? n.issues.push({
                      input: u,
                      code: 'too_big',
                      maximum: Number.MAX_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: e,
                      origin: i,
                      continue: !t.abort,
                    })
                  : n.issues.push({
                      input: u,
                      code: 'too_small',
                      minimum: Number.MIN_SAFE_INTEGER,
                      note: 'Integers must be within the safe integer range.',
                      inst: e,
                      origin: i,
                      continue: !t.abort,
                    }));
            }
            (u < a &&
              n.issues.push({
                origin: 'number',
                input: u,
                code: 'too_small',
                minimum: a,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              u > o &&
                n.issues.push({
                  origin: 'number',
                  input: u,
                  code: 'too_big',
                  maximum: o,
                  inst: e,
                }));
          }));
      }),
      rM = n7('$ZodCheckBigIntFormat', (e, t) => {
        rA.init(e, t);
        let [n, r] = e2[t.format];
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
      rB = n7('$ZodCheckMaxSize', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            var n;
            let r = null != (n = e._zod.bag.maximum) ? n : 1 / 0;
            t.maximum < r && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            r.size <= t.maximum ||
              n.issues.push({
                origin: to(r),
                code: 'too_big',
                maximum: t.maximum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      rW = n7('$ZodCheckMinSize', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.size;
            }),
          e._zod.onattach.push((e) => {
            var n;
            let r = null != (n = e._zod.bag.minimum) ? n : -1 / 0;
            t.minimum > r && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            r.size >= t.minimum ||
              n.issues.push({
                origin: to(r),
                code: 'too_small',
                minimum: t.minimum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      rG = n7('$ZodCheckSizeEquals', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.size;
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
              origin: to(r),
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
      rK = n7('$ZodCheckMaxLength', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            var n;
            let r = null != (n = e._zod.bag.maximum) ? n : 1 / 0;
            t.maximum < r && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length <= t.maximum) return;
            let i = tu(r);
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
      rV = n7('$ZodCheckMinLength', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            var n;
            let r = null != (n = e._zod.bag.minimum) ? n : -1 / 0;
            t.minimum > r && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length >= t.minimum) return;
            let i = tu(r);
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
      rX = n7('$ZodCheckLengthEquals', (e, t) => {
        var n;
        (rA.init(e, t),
          null != (n = e._zod.def).when ||
            (n.when = (e) => {
              let t = e.value;
              return !eO(t) && void 0 !== t.length;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.length;
            if (i === t.length) return;
            let a = tu(r),
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
      rY = n7('$ZodCheckStringFormat', (e, t) => {
        var n, r;
        (rA.init(e, t),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.format = t.format), t.pattern) &&
              (null != n.patterns || (n.patterns = new Set()), n.patterns.add(t.pattern));
          }),
          t.pattern
            ? null != (n = e._zod).check ||
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
              })
            : null != (r = e._zod).check || (r.check = () => {}));
      }),
      rq = n7('$ZodCheckRegex', (e, t) => {
        (rY.init(e, t),
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
      rH = n7('$ZodCheckLowerCase', (e, t) => {
        (null != t.pattern || (t.pattern = t9), rY.init(e, t));
      }),
      rQ = n7('$ZodCheckUpperCase', (e, t) => {
        (null != t.pattern || (t.pattern = t3), rY.init(e, t));
      }),
      r0 = n7('$ZodCheckIncludes', (e, t) => {
        rA.init(e, t);
        let n = eq(t.includes),
          r = new RegExp(
            'number' == typeof t.position ? '^.{'.concat(t.position, '}').concat(n) : n
          );
        ((t.pattern = r),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (null != t.patterns || (t.patterns = new Set()), t.patterns.add(r));
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
      r4 = n7('$ZodCheckStartsWith', (e, t) => {
        rA.init(e, t);
        let n = new RegExp('^'.concat(eq(t.prefix), '.*'));
        (null != t.pattern || (t.pattern = n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (null != t.patterns || (t.patterns = new Set()), t.patterns.add(n));
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
      r6 = n7('$ZodCheckEndsWith', (e, t) => {
        rA.init(e, t);
        let n = new RegExp('.*'.concat(eq(t.suffix), '$'));
        (null != t.pattern || (t.pattern = n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            (null != t.patterns || (t.patterns = new Set()), t.patterns.add(n));
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
    function r1(e, t, n) {
      e.issues.length && t.issues.push(...tr(n, e.issues));
    }
    let r2 = n7('$ZodCheckProperty', (e, t) => {
        (rA.init(e, t),
          (e._zod.check = (e) => {
            let n = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {});
            if (n instanceof Promise) return n.then((n) => r1(n, e, t.property));
            r1(n, e, t.property);
          }));
      }),
      r9 = n7('$ZodCheckMimeType', (e, t) => {
        rA.init(e, t);
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
      r3 = n7('$ZodCheckOverwrite', (e, t) => {
        (rA.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      });
    e.s(['Doc', () => r8], 93802);
    class r8 {
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
        var e;
        return Function(
          ...(null === this || void 0 === this ? void 0 : this.args),
          [
            ...(null != (e = null === this || void 0 === this ? void 0 : this.content)
              ? e
              : ['']
            ).map((e) => '  '.concat(e)),
          ].join('\n')
        );
      }
      constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
      }
    }
    e.s(['version', () => r5], 90107);
    let r5 = { major: 4, minor: 1, patch: 5 },
      r7 = n7('$ZodType', (e, t) => {
        var n, r, i;
        (null != e || (e = {}),
          (e._zod.def = t),
          (e._zod.bag = e._zod.bag || {}),
          (e._zod.version = r5));
        let a = [...(null != (r = e._zod.def.checks) ? r : [])];
        for (let t of (e._zod.traits.has('$ZodCheck') && a.unshift(e), a))
          for (let n of t._zod.onattach) n(e);
        if (0 === a.length)
          (null != (n = e._zod).deferred || (n.deferred = []),
            null == (i = e._zod.deferred) ||
              i.push(() => {
                e._zod.run = e._zod.parse;
              }));
        else {
          let t = (e, t, n) => {
              let r,
                i = tn(e);
              for (let a of t) {
                if (a._zod.def.when) {
                  if (!a._zod.def.when(e)) continue;
                } else if (i) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && (null == n ? void 0 : n.async) === !1) throw new rt();
                if (r || o instanceof Promise)
                  r = (null != r ? r : Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (i || (i = tn(e, t))));
                  });
                else {
                  if (e.issues.length === t) continue;
                  i || (i = tn(e, t));
                }
              }
              return r ? r.then(() => e) : e;
            },
            n = (n, r, i) => {
              if (tn(n)) return ((n.aborted = !0), n);
              let o = t(r, a, i);
              if (o instanceof Promise) {
                if (!1 === i.async) throw new rt();
                return o.then((t) => e._zod.parse(t, i));
              }
              return e._zod.parse(o, i);
            };
          e._zod.run = (r, i) => {
            if (i.skipChecks) return e._zod.parse(r, i);
            if ('backward' === i.direction) {
              let t = e._zod.parse({ value: r.value, issues: [] }, { ...i, skipChecks: !0 });
              return t instanceof Promise ? t.then((e) => n(e, r, i)) : n(t, r, i);
            }
            let o = e._zod.parse(r, i);
            if (o instanceof Promise) {
              if (!1 === i.async) throw new rt();
              return o.then((e) => t(e, a, i));
            }
            return t(o, a, i);
          };
        }
        e['~standard'] = {
          validate: (t) => {
            try {
              var n;
              let r = r_(e, t);
              return r.success
                ? { value: r.data }
                : { issues: null == (n = r.error) ? void 0 : n.issues };
            } catch (n) {
              return rb(e, t).then((e) => {
                var t;
                return e.success
                  ? { value: e.data }
                  : { issues: null == (t = e.error) ? void 0 : t.issues };
              });
            }
          },
          vendor: 'zod',
          version: 1,
        };
      }),
      ie = n7('$ZodString', (e, t) => {
        var n, r, i;
        (r7.init(e, t),
          (e._zod.pattern =
            null !=
            (i = [
              ...(null != (r = null == e || null == (n = e._zod.bag) ? void 0 : n.patterns)
                ? r
                : []),
            ].pop())
              ? i
              : tH(e._zod.bag)),
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
      it = n7('$ZodStringFormat', (e, t) => {
        (rY.init(e, t), ie.init(e, t));
      }),
      ir = n7('$ZodGUID', (e, t) => {
        (null != t.pattern || (t.pattern = tz), it.init(e, t));
      }),
      ii = n7('$ZodUUID', (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (void 0 === e) throw Error('Invalid UUID version: "'.concat(t.version, '"'));
          null != t.pattern || (t.pattern = tZ(e));
        } else null != t.pattern || (t.pattern = tZ());
        it.init(e, t);
      }),
      ia = n7('$ZodEmail', (e, t) => {
        (null != t.pattern || (t.pattern = tj), it.init(e, t));
      }),
      io = n7('$ZodURL', (e, t) => {
        (it.init(e, t),
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
                    pattern: tB.source,
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
      iu = n7('$ZodEmoji', (e, t) => {
        (null != t.pattern || (t.pattern = tA()), it.init(e, t));
      }),
      ic = n7('$ZodNanoID', (e, t) => {
        (null != t.pattern || (t.pattern = tS), it.init(e, t));
      }),
      is = n7('$ZodCUID', (e, t) => {
        (null != t.pattern || (t.pattern = t_), it.init(e, t));
      }),
      il = n7('$ZodCUID2', (e, t) => {
        (null != t.pattern || (t.pattern = ty), it.init(e, t));
      }),
      id = n7('$ZodULID', (e, t) => {
        (null != t.pattern || (t.pattern = tb), it.init(e, t));
      }),
      im = n7('$ZodXID', (e, t) => {
        (null != t.pattern || (t.pattern = tk), it.init(e, t));
      }),
      ip = n7('$ZodKSUID', (e, t) => {
        (null != t.pattern || (t.pattern = tI), it.init(e, t));
      }),
      iv = n7('$ZodISODateTime', (e, t) => {
        (null != t.pattern || (t.pattern = tq(t)), it.init(e, t));
      }),
      ig = n7('$ZodISODate', (e, t) => {
        (null != t.pattern || (t.pattern = tV), it.init(e, t));
      }),
      ih = n7('$ZodISOTime', (e, t) => {
        (null != t.pattern || (t.pattern = tY(t)), it.init(e, t));
      }),
      i_ = n7('$ZodISODuration', (e, t) => {
        (null != t.pattern || (t.pattern = tw), it.init(e, t));
      }),
      iy = n7('$ZodIPv4', (e, t) => {
        (null != t.pattern || (t.pattern = tC),
          it.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.format = 'ipv4';
          }));
      }),
      ib = n7('$ZodIPv6', (e, t) => {
        (null != t.pattern || (t.pattern = tR),
          it.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.format = 'ipv6';
          }),
          (e._zod.check = (n) => {
            try {
              new URL('http://['.concat(n.value, ']'));
            } catch (r) {
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
      ik = n7('$ZodCIDRv4', (e, t) => {
        (null != t.pattern || (t.pattern = tL), it.init(e, t));
      }),
      iI = n7('$ZodCIDRv6', (e, t) => {
        (null != t.pattern || (t.pattern = tJ),
          it.init(e, t),
          (e._zod.check = (n) => {
            let [r, i] = n.value.split('/');
            try {
              if (!i) throw Error();
              let e = Number(i);
              if (''.concat(e) !== i || e < 0 || e > 128) throw Error();
              new URL('http://['.concat(r, ']'));
            } catch (r) {
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
    function iS(e) {
      if ('' === e) return !0;
      if (e.length % 4 != 0) return !1;
      try {
        return (atob(e), !0);
      } catch (e) {
        return !1;
      }
    }
    let iw = n7('$ZodBase64', (e, t) => {
      (null != t.pattern || (t.pattern = tF),
        it.init(e, t),
        e._zod.onattach.push((e) => {
          e._zod.bag.contentEncoding = 'base64';
        }),
        (e._zod.check = (n) => {
          iS(n.value) ||
            n.issues.push({
              code: 'invalid_format',
              format: 'base64',
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
        }));
    });
    function ix(e) {
      if (!tM.test(e)) return !1;
      let t = e.replace(/[-_]/g, (e) => ('-' === e ? '+' : '/'));
      return iS(t.padEnd(4 * Math.ceil(t.length / 4), '='));
    }
    let iz = n7('$ZodBase64URL', (e, t) => {
        (null != t.pattern || (t.pattern = tM),
          it.init(e, t),
          e._zod.onattach.push((e) => {
            e._zod.bag.contentEncoding = 'base64url';
          }),
          (e._zod.check = (n) => {
            ix(n.value) ||
              n.issues.push({
                code: 'invalid_format',
                format: 'base64url',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      iZ = n7('$ZodE164', (e, t) => {
        (null != t.pattern || (t.pattern = tG), it.init(e, t));
      });
    function iU(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      try {
        let n = e.split('.');
        if (3 !== n.length) return !1;
        let [r] = n;
        if (!r) return !1;
        let i = JSON.parse(atob(r));
        if (
          ('typ' in i && (null == i ? void 0 : i.typ) !== 'JWT') ||
          !i.alg ||
          (t && (!('alg' in i) || i.alg !== t))
        )
          return !1;
        return !0;
      } catch (e) {
        return !1;
      }
    }
    let iO = n7('$ZodJWT', (e, t) => {
        (it.init(e, t),
          (e._zod.check = (n) => {
            iU(n.value, t.alg) ||
              n.issues.push({
                code: 'invalid_format',
                format: 'jwt',
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      }),
      iN = n7('$ZodCustomStringFormat', (e, t) => {
        (it.init(e, t),
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
      ij = n7('$ZodNumber', (e, t) => {
        var n;
        (r7.init(e, t),
          (e._zod.pattern = null != (n = e._zod.bag.pattern) ? n : t4),
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
      iD = n7('$ZodNumber', (e, t) => {
        (rF.init(e, t), ij.init(e, t));
      }),
      iP = n7('$ZodBoolean', (e, t) => {
        (r7.init(e, t),
          (e._zod.pattern = t6),
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
      iE = n7('$ZodBigInt', (e, t) => {
        (r7.init(e, t),
          (e._zod.pattern = tQ),
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
      i$ = n7('$ZodBigInt', (e, t) => {
        (rM.init(e, t), iE.init(e, t));
      }),
      iT = n7('$ZodSymbol', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              'symbol' == typeof r ||
                t.issues.push({ expected: 'symbol', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      iA = n7('$ZodUndefined', (e, t) => {
        (r7.init(e, t),
          (e._zod.pattern = t2),
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
      iC = n7('$ZodNull', (e, t) => {
        (r7.init(e, t),
          (e._zod.pattern = t1),
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
      iR = n7('$ZodAny', (e, t) => {
        (r7.init(e, t), (e._zod.parse = (e) => e));
      }),
      iL = n7('$ZodUnknown', (e, t) => {
        (r7.init(e, t), (e._zod.parse = (e) => e));
      }),
      iJ = n7('$ZodNever', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: 'never', code: 'invalid_type', input: t.value, inst: e }),
            t
          )));
      }),
      iF = n7('$ZodVoid', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              void 0 === r ||
                t.issues.push({ expected: 'void', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      iM = n7('$ZodDate', (e, t) => {
        (r7.init(e, t),
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
    function iB(e, t, n) {
      (e.issues.length && t.issues.push(...tr(n, e.issues)), (t.value[n] = e.value));
    }
    let iW = n7('$ZodArray', (e, t) => {
      (r7.init(e, t),
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
              u = t.element._zod.run({ value: o, issues: [] }, r);
            u instanceof Promise ? a.push(u.then((t) => iB(t, n, e))) : iB(u, n, e);
          }
          return a.length ? Promise.all(a).then(() => n) : n;
        }));
    });
    function iG(e, t, n, r) {
      (e.issues.length && t.issues.push(...tr(n, e.issues)),
        void 0 === e.value ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value));
    }
    function iK(e) {
      let t = Object.keys(e.shape);
      for (let n of t)
        if (!e.shape[n]._zod.traits.has('$ZodType'))
          throw Error('Invalid element at key "'.concat(n, '": expected a Zod schema'));
      let n = e6(e.shape);
      return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
    }
    function iV(e, t, n, r, i, a) {
      let o = [],
        u = i.keySet,
        c = i.catchall._zod,
        s = c.def.type;
      for (let i of Object.keys(t)) {
        if (u.has(i)) continue;
        if ('never' === s) {
          o.push(i);
          continue;
        }
        let a = c.run({ value: t[i], issues: [] }, r);
        a instanceof Promise ? e.push(a.then((e) => iG(e, n, i, t))) : iG(a, n, i, t);
      }
      return (o.length && n.issues.push({ code: 'unrecognized_keys', keys: o, input: t, inst: a }),
      e.length)
        ? Promise.all(e).then(() => n)
        : n;
    }
    let iX = n7('$ZodObject', (e, t) => {
        let n;
        r7.init(e, t);
        let r = eU(() => iK(t));
        eP(e._zod, 'propValues', () => {
          let e = t.shape,
            n = {};
          for (let t in e) {
            let r = e[t]._zod;
            if (r.values) {
              for (let e of (null != n[t] || (n[t] = new Set()), r.values)) n[t].add(e);
            }
          }
          return n;
        });
        let i = t.catchall;
        e._zod.parse = (t, a) => {
          null != n || (n = r.value);
          let o = t.value;
          if (!eM(o))
            return (
              t.issues.push({ expected: 'object', code: 'invalid_type', input: o, inst: e }),
              t
            );
          t.value = {};
          let u = [],
            c = n.shape;
          for (let e of n.keys) {
            let n = c[e]._zod.run({ value: o[e], issues: [] }, a);
            n instanceof Promise ? u.push(n.then((n) => iG(n, t, e, o))) : iG(n, t, e, o);
          }
          return i ? iV(u, o, t, a, r.value, e) : u.length ? Promise.all(u).then(() => t) : t;
        };
      }),
      iY = n7('$ZodObjectJIT', (e, t) => {
        let n, r;
        iX.init(e, t);
        let i = e._zod.parse,
          a = eU(() => iK(t)),
          o = !rr.jitless,
          u = o && eB.value,
          c = t.catchall;
        e._zod.parse = (s, l) => {
          null != r || (r = a.value);
          let d = s.value;
          return eM(d)
            ? o && u && (null == l ? void 0 : l.async) === !1 && !0 !== l.jitless
              ? (n ||
                  (n = ((e) => {
                    let t = new r8(['shape', 'payload', 'ctx']),
                      n = a.value,
                      r = (e) => {
                        let t = eJ(e);
                        return 'shape['
                          .concat(t, ']._zod.run({ value: input[')
                          .concat(t, '], issues: [] }, ctx)');
                      };
                    t.write('const input = payload.value;');
                    let i = Object.create(null),
                      o = 0;
                    for (let e of n.keys) i[e] = 'key_'.concat(o++);
                    for (let e of (t.write('const newResult = {}'), n.keys)) {
                      let n = i[e],
                        a = eJ(e);
                      (t.write('const '.concat(n, ' = ').concat(r(e), ';')),
                        t.write(
                          '\n        if ('
                            .concat(
                              n,
                              '.issues.length) {\n          payload.issues = payload.issues.concat('
                            )
                            .concat(
                              n,
                              '.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? ['
                            )
                            .concat(a, ', ...iss.path] : [')
                            .concat(a, ']\n          })));\n        }\n        \n        if (')
                            .concat(n, '.value === undefined) {\n          if (')
                            .concat(a, ' in input) {\n            newResult[')
                            .concat(
                              a,
                              '] = undefined;\n          }\n        } else {\n          newResult['
                            )
                            .concat(a, '] = ')
                            .concat(n, '.value;\n        }\n      ')
                        ));
                    }
                    (t.write('payload.value = newResult;'), t.write('return payload;'));
                    let u = t.compile();
                    return (t, n) => u(e, t, n);
                  })(t.shape)),
                (s = n(s, l)),
                c)
                ? iV([], d, s, l, r, e)
                : s
              : i(s, l)
            : (s.issues.push({ expected: 'object', code: 'invalid_type', input: d, inst: e }), s);
        };
      });
    function iq(e, t, n, r) {
      for (let n of e) if (0 === n.issues.length) return ((t.value = n.value), t);
      let i = e.filter((e) => !tn(e));
      return 1 === i.length
        ? ((t.value = i[0].value), i[0])
        : (t.issues.push({
            code: 'invalid_union',
            input: t.value,
            inst: n,
            errors: e.map((e) => e.issues.map((e) => ta(e, r, ri()))),
          }),
          t);
    }
    let iH = n7('$ZodUnion', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'optin', () =>
            t.options.some((e) => 'optional' === e._zod.optin) ? 'optional' : void 0
          ),
          eP(e._zod, 'optout', () =>
            t.options.some((e) => 'optional' === e._zod.optout) ? 'optional' : void 0
          ),
          eP(e._zod, 'values', () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
          }),
          eP(e._zod, 'pattern', () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return new RegExp('^('.concat(e.map((e) => eN(e.source)).join('|'), ')$'));
            }
          }));
        let n = 1 === t.options.length,
          r = t.options[0]._zod.run;
        e._zod.parse = (i, a) => {
          if (n) return r(i, a);
          let o = !1,
            u = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: i.value, issues: [] }, a);
            if (t instanceof Promise) (u.push(t), (o = !0));
            else {
              if (0 === t.issues.length) return t;
              u.push(t);
            }
          }
          return o ? Promise.all(u).then((t) => iq(t, i, e, a)) : iq(u, i, e, a);
        };
      }),
      iQ = n7('$ZodDiscriminatedUnion', (e, t) => {
        iH.init(e, t);
        let n = e._zod.parse;
        eP(e._zod, 'propValues', () => {
          let e = {};
          for (let n of t.options) {
            let r = n._zod.propValues;
            if (!r || 0 === Object.keys(r).length)
              throw Error(
                'Invalid discriminated union option at index "'.concat(t.options.indexOf(n), '"')
              );
            for (let [t, n] of Object.entries(r))
              for (let r of (e[t] || (e[t] = new Set()), n)) e[t].add(r);
          }
          return e;
        });
        let r = eU(() => {
          let e = t.options,
            n = new Map();
          for (let i of e) {
            var r;
            let e = null == (r = i._zod.propValues) ? void 0 : r[t.discriminator];
            if (!e || 0 === e.size)
              throw Error(
                'Invalid discriminated union option at index "'.concat(t.options.indexOf(i), '"')
              );
            for (let t of e) {
              if (n.has(t)) throw Error('Duplicate discriminator value "'.concat(String(t), '"'));
              n.set(t, i);
            }
          }
          return n;
        });
        e._zod.parse = (i, a) => {
          let o = i.value;
          if (!eM(o))
            return (
              i.issues.push({ code: 'invalid_type', expected: 'object', input: o, inst: e }),
              i
            );
          let u = r.value.get(null == o ? void 0 : o[t.discriminator]);
          return u
            ? u._zod.run(i, a)
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
      i0 = n7('$ZodIntersection', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then((t) => {
                  let [n, r] = t;
                  return i4(e, n, r);
                })
              : i4(e, i, a);
          }));
      });
    function i4(e, t, n) {
      if (
        (t.issues.length && e.issues.push(...t.issues),
        n.issues.length && e.issues.push(...n.issues),
        tn(e))
      )
        return e;
      let r = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n))
          return { valid: !0, data: t };
        if (eW(t) && eW(n)) {
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
        throw Error(
          'Unmergable intersection. Error path: ' + ''.concat(JSON.stringify(r.mergeErrorPath))
        );
      return ((e.value = r.data), e);
    }
    let i6 = n7('$ZodTuple', (e, t) => {
      r7.init(e, t);
      let n = t.items,
        r = n.length - [...n].reverse().findIndex((e) => 'optional' !== e._zod.optin);
      e._zod.parse = (i, a) => {
        let o = i.value;
        if (!Array.isArray(o))
          return (i.issues.push({ input: o, inst: e, expected: 'tuple', code: 'invalid_type' }), i);
        i.value = [];
        let u = [];
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
        let c = -1;
        for (let e of n) {
          if (++c >= o.length && c >= r) continue;
          let t = e._zod.run({ value: o[c], issues: [] }, a);
          t instanceof Promise ? u.push(t.then((e) => i1(e, i, c))) : i1(t, i, c);
        }
        if (t.rest)
          for (let e of o.slice(n.length)) {
            c++;
            let n = t.rest._zod.run({ value: e, issues: [] }, a);
            n instanceof Promise ? u.push(n.then((e) => i1(e, i, c))) : i1(n, i, c);
          }
        return u.length ? Promise.all(u).then(() => i) : i;
      };
    });
    function i1(e, t, n) {
      (e.issues.length && t.issues.push(...tr(n, e.issues)), (t.value[n] = e.value));
    }
    let i2 = n7('$ZodRecord', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!eW(i))
              return (
                n.issues.push({ expected: 'record', code: 'invalid_type', input: i, inst: e }),
                n
              );
            let a = [];
            if (t.keyType._zod.values) {
              let o,
                u = t.keyType._zod.values;
              for (let e of ((n.value = {}), u))
                if ('string' == typeof e || 'number' == typeof e || 'symbol' == typeof e) {
                  let o = t.valueType._zod.run({ value: i[e], issues: [] }, r);
                  o instanceof Promise
                    ? a.push(
                        o.then((t) => {
                          (t.issues.length && n.issues.push(...tr(e, t.issues)),
                            (n.value[e] = t.value));
                        })
                      )
                    : (o.issues.length && n.issues.push(...tr(e, o.issues)),
                      (n.value[e] = o.value));
                }
              for (let e in i) u.has(e) || (o = null != o ? o : []).push(e);
              o &&
                o.length > 0 &&
                n.issues.push({ code: 'unrecognized_keys', input: i, inst: e, keys: o });
            } else
              for (let o of ((n.value = {}), Reflect.ownKeys(i))) {
                if ('__proto__' === o) continue;
                let u = t.keyType._zod.run({ value: o, issues: [] }, r);
                if (u instanceof Promise)
                  throw Error('Async schemas not supported in object keys currently');
                if (u.issues.length) {
                  (n.issues.push({
                    code: 'invalid_key',
                    origin: 'record',
                    issues: u.issues.map((e) => ta(e, r, ri())),
                    input: o,
                    path: [o],
                    inst: e,
                  }),
                    (n.value[u.value] = u.value));
                  continue;
                }
                let c = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                c instanceof Promise
                  ? a.push(
                      c.then((e) => {
                        (e.issues.length && n.issues.push(...tr(o, e.issues)),
                          (n.value[u.value] = e.value));
                      })
                    )
                  : (c.issues.length && n.issues.push(...tr(o, c.issues)),
                    (n.value[u.value] = c.value));
              }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      }),
      i9 = n7('$ZodMap', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!(i instanceof Map))
              return (
                n.issues.push({ expected: 'map', code: 'invalid_type', input: i, inst: e }),
                n
              );
            let a = [];
            for (let [o, u] of ((n.value = new Map()), i)) {
              let c = t.keyType._zod.run({ value: o, issues: [] }, r),
                s = t.valueType._zod.run({ value: u, issues: [] }, r);
              c instanceof Promise || s instanceof Promise
                ? a.push(
                    Promise.all([c, s]).then((t) => {
                      let [a, u] = t;
                      i3(a, u, n, o, i, e, r);
                    })
                  )
                : i3(c, s, n, o, i, e, r);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      });
    function i3(e, t, n, r, i, a, o) {
      (e.issues.length &&
        (eX.has(typeof r)
          ? n.issues.push(...tr(r, e.issues))
          : n.issues.push({
              code: 'invalid_key',
              origin: 'map',
              input: i,
              inst: a,
              issues: e.issues.map((e) => ta(e, o, ri())),
            })),
        t.issues.length &&
          (eX.has(typeof r)
            ? n.issues.push(...tr(r, t.issues))
            : n.issues.push({
                origin: 'map',
                code: 'invalid_element',
                input: i,
                inst: a,
                key: r,
                issues: t.issues.map((e) => ta(e, o, ri())),
              })),
        n.value.set(e.value, t.value));
    }
    let i8 = n7('$ZodSet', (e, t) => {
      (r7.init(e, t),
        (e._zod.parse = (n, r) => {
          let i = n.value;
          if (!(i instanceof Set))
            return (n.issues.push({ input: i, inst: e, expected: 'set', code: 'invalid_type' }), n);
          let a = [];
          for (let e of ((n.value = new Set()), i)) {
            let i = t.valueType._zod.run({ value: e, issues: [] }, r);
            i instanceof Promise ? a.push(i.then((e) => i5(e, n))) : i5(i, n);
          }
          return a.length ? Promise.all(a).then(() => n) : n;
        }));
    });
    function i5(e, t) {
      (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
    }
    let i7 = n7('$ZodEnum', (e, t) => {
        r7.init(e, t);
        let n = ex(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = new RegExp(
            '^('.concat(
              n
                .filter((e) => eX.has(typeof e))
                .map((e) => ('string' == typeof e ? eq(e) : e.toString()))
                .join('|'),
              ')$'
            )
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (
              r.has(a) || t.issues.push({ code: 'invalid_value', values: n, input: a, inst: e }),
              t
            );
          }));
      }),
      ae = n7('$ZodLiteral', (e, t) => {
        if ((r7.init(e, t), 0 === t.values.length))
          throw Error('Cannot create literal schema with no valid values');
        ((e._zod.values = new Set(t.values)),
          (e._zod.pattern = new RegExp(
            '^('.concat(
              t.values
                .map((e) => ('string' == typeof e ? eq(e) : e ? eq(e.toString()) : String(e)))
                .join('|'),
              ')$'
            )
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
      at = n7('$ZodFile', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              r instanceof File ||
                t.issues.push({ expected: 'file', code: 'invalid_type', input: r, inst: e }),
              t
            );
          }));
      }),
      an = n7('$ZodTransform', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (n, r) => {
            if ('backward' === r.direction) throw new rn(e.constructor.name);
            let i = t.transform(n.value, n);
            if (r.async)
              return (i instanceof Promise ? i : Promise.resolve(i)).then(
                (e) => ((n.value = e), n)
              );
            if (i instanceof Promise) throw new rt();
            return ((n.value = i), n);
          }));
      });
    function ar(e, t) {
      return e.issues.length && void 0 === t ? { issues: [], value: void 0 } : e;
    }
    let ai = n7('$ZodOptional', (e, t) => {
        (r7.init(e, t),
          (e._zod.optin = 'optional'),
          (e._zod.optout = 'optional'),
          eP(e._zod, 'values', () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0
          ),
          eP(e._zod, 'pattern', () => {
            let e = t.innerType._zod.pattern;
            return e ? new RegExp('^('.concat(eN(e.source), ')?$')) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if ('optional' === t.innerType._zod.optin) {
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise ? r.then((t) => ar(t, e.value)) : ar(r, e.value);
            }
            return void 0 === e.value ? e : t.innerType._zod.run(e, n);
          }));
      }),
      aa = n7('$ZodNullable', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'optin', () => t.innerType._zod.optin),
          eP(e._zod, 'optout', () => t.innerType._zod.optout),
          eP(e._zod, 'pattern', () => {
            let e = t.innerType._zod.pattern;
            return e ? new RegExp('^('.concat(eN(e.source), '|null)$')) : void 0;
          }),
          eP(e._zod, 'values', () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0
          ),
          (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n))));
      }),
      ao = n7('$ZodDefault', (e, t) => {
        (r7.init(e, t),
          (e._zod.optin = 'optional'),
          eP(e._zod, 'values', () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) return t.innerType._zod.run(e, n);
            if (void 0 === e.value) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => au(e, t)) : au(r, t);
          }));
      });
    function au(e, t) {
      return (void 0 === e.value && (e.value = t.defaultValue), e);
    }
    let ac = n7('$ZodPrefault', (e, t) => {
        (r7.init(e, t),
          (e._zod.optin = 'optional'),
          eP(e._zod, 'values', () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            'backward' === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      }),
      as = n7('$ZodNonOptional', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'values', () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => al(t, e)) : al(i, e);
          }));
      });
    function al(e, t) {
      return (
        e.issues.length ||
          void 0 !== e.value ||
          e.issues.push({ code: 'invalid_type', expected: 'nonoptional', input: e.value, inst: t }),
        e
      );
    }
    let ad = n7('$ZodSuccess', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) throw new rn('ZodSuccess');
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise
              ? r.then((t) => ((e.value = 0 === t.issues.length), e))
              : ((e.value = 0 === r.issues.length), e);
          }));
      }),
      am = n7('$ZodCatch', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'optin', () => t.innerType._zod.optin),
          eP(e._zod, 'optout', () => t.innerType._zod.optout),
          eP(e._zod, 'values', () => t.innerType._zod.values),
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
                        error: { issues: r.issues.map((e) => ta(e, n, ri())) },
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
                    error: { issues: r.issues.map((e) => ta(e, n, ri())) },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e);
          }));
      }),
      af = n7('$ZodNaN', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (t, n) => (
            ('number' == typeof t.value && Number.isNaN(t.value)) ||
              t.issues.push({ input: t.value, inst: e, expected: 'nan', code: 'invalid_type' }),
            t
          )));
      }),
      ap = n7('$ZodPipe', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'values', () => t.in._zod.values),
          eP(e._zod, 'optin', () => t.in._zod.optin),
          eP(e._zod, 'optout', () => t.out._zod.optout),
          eP(e._zod, 'propValues', () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if ('backward' === n.direction) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => av(e, t.in, n)) : av(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => av(e, t.out, n)) : av(r, t.out, n);
          }));
      });
    function av(e, t, n) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, n);
    }
    let ag = n7('$ZodCodec', (e, t) => {
      (r7.init(e, t),
        eP(e._zod, 'values', () => t.in._zod.values),
        eP(e._zod, 'optin', () => t.in._zod.optin),
        eP(e._zod, 'optout', () => t.out._zod.optout),
        eP(e._zod, 'propValues', () => t.in._zod.propValues),
        (e._zod.parse = (e, n) => {
          if ('forward' === (n.direction || 'forward')) {
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => ah(e, t, n)) : ah(r, t, n);
          }
          {
            let r = t.out._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => ah(e, t, n)) : ah(r, t, n);
          }
        }));
    });
    function ah(e, t, n) {
      if (e.issues.length) return ((e.aborted = !0), e);
      if ('forward' === (n.direction || 'forward')) {
        let r = t.transform(e.value, e);
        return r instanceof Promise ? r.then((r) => a_(e, r, t.out, n)) : a_(e, r, t.out, n);
      }
      {
        let r = t.reverseTransform(e.value, e);
        return r instanceof Promise ? r.then((r) => a_(e, r, t.in, n)) : a_(e, r, t.in, n);
      }
    }
    function a_(e, t, n, r) {
      return e.issues.length
        ? ((e.aborted = !0), e)
        : n._zod.run({ value: t, issues: e.issues }, r);
    }
    let ay = n7('$ZodReadonly', (e, t) => {
      (r7.init(e, t),
        eP(e._zod, 'propValues', () => t.innerType._zod.propValues),
        eP(e._zod, 'values', () => t.innerType._zod.values),
        eP(e._zod, 'optin', () => t.innerType._zod.optin),
        eP(e._zod, 'optout', () => t.innerType._zod.optout),
        (e._zod.parse = (e, n) => {
          if ('backward' === n.direction) return t.innerType._zod.run(e, n);
          let r = t.innerType._zod.run(e, n);
          return r instanceof Promise ? r.then(ab) : ab(r);
        }));
    });
    function ab(e) {
      return ((e.value = Object.freeze(e.value)), e);
    }
    let ak = n7('$ZodTemplateLiteral', (e, t) => {
        r7.init(e, t);
        let n = [];
        for (let e of t.parts)
          if ('object' == typeof e && null !== e) {
            if (!e._zod.pattern)
              throw Error(
                'Invalid template literal part, no pattern found: '.concat(
                  [...e._zod.traits].shift()
                )
              );
            let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
            if (!t) throw Error('Invalid template literal part: '.concat(e._zod.traits));
            let r = +!!t.startsWith('^'),
              i = t.endsWith('$') ? t.length - 1 : t.length;
            n.push(t.slice(r, i));
          } else if (null === e || eY.has(typeof e)) n.push(eq(''.concat(e)));
          else throw Error('Invalid template literal part: '.concat(e));
        ((e._zod.pattern = new RegExp('^'.concat(n.join(''), '$'))),
          (e._zod.parse = (n, r) => {
            if ('string' != typeof n.value)
              return (
                n.issues.push({
                  input: n.value,
                  inst: e,
                  expected: 'template_literal',
                  code: 'invalid_type',
                }),
                n
              );
            if (((e._zod.pattern.lastIndex = 0), !e._zod.pattern.test(n.value))) {
              var i;
              n.issues.push({
                input: n.value,
                inst: e,
                code: 'invalid_format',
                format: null != (i = t.format) ? i : 'template_literal',
                pattern: e._zod.pattern.source,
              });
            }
            return n;
          }));
      }),
      aI = n7(
        '$ZodFunction',
        (e, t) => (
          r7.init(e, t),
          (e._def = t),
          (e._zod.def = t),
          (e.implement = (t) => {
            if ('function' != typeof t) throw Error('implement() must be called with a function');
            return function () {
              for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              let a = Reflect.apply(t, this, e._def.input ? rp(e._def.input, r) : r);
              return e._def.output ? rp(e._def.output, a) : a;
            };
          }),
          (e.implementAsync = (t) => {
            if ('function' != typeof t)
              throw Error('implementAsync() must be called with a function');
            return async function () {
              for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              let a = e._def.input ? await rg(e._def.input, r) : r,
                o = await Reflect.apply(t, this, a);
              return e._def.output ? await rg(e._def.output, o) : o;
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
          (e.input = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            let i = e.constructor;
            return new i(
              Array.isArray(n[0])
                ? {
                    type: 'function',
                    input: new i6({ type: 'tuple', items: n[0], rest: n[1] }),
                    output: e._def.output,
                  }
                : { type: 'function', input: n[0], output: e._def.output }
            );
          }),
          (e.output = (t) =>
            new e.constructor({ type: 'function', input: e._def.input, output: t })),
          e
        )
      ),
      aS = n7('$ZodPromise', (e, t) => {
        (r7.init(e, t),
          (e._zod.parse = (e, n) =>
            Promise.resolve(e.value).then((e) =>
              t.innerType._zod.run({ value: e, issues: [] }, n)
            )));
      }),
      aw = n7('$ZodLazy', (e, t) => {
        (r7.init(e, t),
          eP(e._zod, 'innerType', () => t.getter()),
          eP(e._zod, 'pattern', () => e._zod.innerType._zod.pattern),
          eP(e._zod, 'propValues', () => e._zod.innerType._zod.propValues),
          eP(e._zod, 'optin', () => {
            var t;
            return null != (t = e._zod.innerType._zod.optin) ? t : void 0;
          }),
          eP(e._zod, 'optout', () => {
            var t;
            return null != (t = e._zod.innerType._zod.optout) ? t : void 0;
          }),
          (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n)));
      }),
      ax = n7('$ZodCustom', (e, t) => {
        (rA.init(e, t),
          r7.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => az(t, n, r, e));
            az(i, n, r, e);
          }));
      });
    function az(e, t, n, r) {
      if (!e) {
        var i;
        let e = {
          code: 'custom',
          input: n,
          inst: r,
          path: [...(null != (i = r._zod.def.path) ? i : [])],
          continue: !r._zod.def.abort,
        };
        (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(tc(e)));
      }
    }
    (e.i(61612), e.i(79938), e.i(59698), e.i(90107));
    var aZ = th,
      aU = nv,
      aO = n3;
    e.s(
      [
        '$ZodRegistry',
        () => aD,
        '$input',
        () => aj,
        '$output',
        () => aN,
        'globalRegistry',
        () => aE,
        'registry',
        () => aP,
      ],
      84415
    );
    let aN = Symbol('ZodOutput'),
      aj = Symbol('ZodInput');
    class aD {
      add(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        let i = n[0];
        if ((this._map.set(e, i), i && 'object' == typeof i && 'id' in i)) {
          if (this._idmap.has(i.id))
            throw Error('ID '.concat(i.id, ' already exists in the registry'));
          this._idmap.set(i.id, e);
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
          var n;
          let r = { ...(null != (n = this.get(t)) ? n : {}) };
          delete r.id;
          let i = { ...r, ...this._map.get(e) };
          return Object.keys(i).length ? i : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
      constructor() {
        ((this._map = new Map()), (this._idmap = new Map()));
      }
    }
    function aP() {
      return new aD();
    }
    let aE = aP();
    function a$(e, t) {
      return new e({ type: 'string', ...eQ(t) });
    }
    function aT(e, t) {
      return new e({ type: 'string', coerce: !0, ...eQ(t) });
    }
    function aA(e, t) {
      return new e({
        type: 'string',
        format: 'email',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function aC(e, t) {
      return new e({ type: 'string', format: 'guid', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aR(e, t) {
      return new e({ type: 'string', format: 'uuid', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aL(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v4',
        ...eQ(t),
      });
    }
    function aJ(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v6',
        ...eQ(t),
      });
    }
    function aF(e, t) {
      return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v7',
        ...eQ(t),
      });
    }
    function aM(e, t) {
      return new e({ type: 'string', format: 'url', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aB(e, t) {
      return new e({
        type: 'string',
        format: 'emoji',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function aW(e, t) {
      return new e({
        type: 'string',
        format: 'nanoid',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function aG(e, t) {
      return new e({ type: 'string', format: 'cuid', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aK(e, t) {
      return new e({
        type: 'string',
        format: 'cuid2',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function aV(e, t) {
      return new e({ type: 'string', format: 'ulid', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aX(e, t) {
      return new e({ type: 'string', format: 'xid', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aY(e, t) {
      return new e({
        type: 'string',
        format: 'ksuid',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function aq(e, t) {
      return new e({ type: 'string', format: 'ipv4', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aH(e, t) {
      return new e({ type: 'string', format: 'ipv6', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function aQ(e, t) {
      return new e({
        type: 'string',
        format: 'cidrv4',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function a0(e, t) {
      return new e({
        type: 'string',
        format: 'cidrv6',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function a4(e, t) {
      return new e({
        type: 'string',
        format: 'base64',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function a6(e, t) {
      return new e({
        type: 'string',
        format: 'base64url',
        check: 'string_format',
        abort: !1,
        ...eQ(t),
      });
    }
    function a1(e, t) {
      return new e({ type: 'string', format: 'e164', check: 'string_format', abort: !1, ...eQ(t) });
    }
    function a2(e, t) {
      return new e({ type: 'string', format: 'jwt', check: 'string_format', abort: !1, ...eQ(t) });
    }
    (e.i(84415),
      e.i(93802),
      e.s(
        [
          'TimePrecision',
          () => a9,
          '_any',
          () => og,
          '_array',
          () => oq,
          '_base64',
          () => a4,
          '_base64url',
          () => a6,
          '_bigint',
          () => os,
          '_boolean',
          () => ou,
          '_catch',
          () => ua,
          '_check',
          () => up,
          '_cidrv4',
          () => aQ,
          '_cidrv6',
          () => a0,
          '_coercedBigint',
          () => ol,
          '_coercedBoolean',
          () => oc,
          '_coercedDate',
          () => ok,
          '_coercedNumber',
          () => ot,
          '_coercedString',
          () => aT,
          '_cuid',
          () => aG,
          '_cuid2',
          () => aK,
          '_custom',
          () => ud,
          '_date',
          () => ob,
          '_default',
          () => un,
          '_discriminatedUnion',
          () => oQ,
          '_e164',
          () => a1,
          '_email',
          () => aA,
          '_emoji',
          () => aB,
          '_endsWith',
          () => oM,
          '_enum',
          () => o9,
          '_file',
          () => o5,
          '_float32',
          () => or,
          '_float64',
          () => oi,
          '_gt',
          () => ox,
          '_gte',
          () => oz,
          '_guid',
          () => aC,
          '_includes',
          () => oJ,
          '_int',
          () => on,
          '_int32',
          () => oa,
          '_int64',
          () => od,
          '_intersection',
          () => o0,
          '_ipv4',
          () => aq,
          '_ipv6',
          () => aH,
          '_isoDate',
          () => a8,
          '_isoDateTime',
          () => a3,
          '_isoDuration',
          () => a7,
          '_isoTime',
          () => a5,
          '_jwt',
          () => a2,
          '_ksuid',
          () => aY,
          '_lazy',
          () => us,
          '_length',
          () => oA,
          '_literal',
          () => o8,
          '_lowercase',
          () => oR,
          '_lt',
          () => oS,
          '_lte',
          () => ow,
          '_map',
          () => o1,
          '_max',
          () => ow,
          '_maxLength',
          () => o$,
          '_maxSize',
          () => oD,
          '_mime',
          () => oW,
          '_min',
          () => oz,
          '_minLength',
          () => oT,
          '_minSize',
          () => oP,
          '_multipleOf',
          () => oj,
          '_nan',
          () => oI,
          '_nanoid',
          () => aW,
          '_nativeEnum',
          () => o3,
          '_negative',
          () => oU,
          '_never',
          () => o_,
          '_nonnegative',
          () => oN,
          '_nonoptional',
          () => ur,
          '_nonpositive',
          () => oO,
          '_normalize',
          () => oK,
          '_null',
          () => ov,
          '_nullable',
          () => ut,
          '_number',
          () => oe,
          '_optional',
          () => ue,
          '_overwrite',
          () => oG,
          '_pipe',
          () => uo,
          '_positive',
          () => oZ,
          '_promise',
          () => ul,
          '_property',
          () => oB,
          '_readonly',
          () => uu,
          '_record',
          () => o6,
          '_refine',
          () => um,
          '_regex',
          () => oC,
          '_set',
          () => o2,
          '_size',
          () => oE,
          '_startsWith',
          () => oF,
          '_string',
          () => a$,
          '_stringFormat',
          () => ug,
          '_stringbool',
          () => uv,
          '_success',
          () => ui,
          '_superRefine',
          () => uf,
          '_symbol',
          () => of,
          '_templateLiteral',
          () => uc,
          '_toLowerCase',
          () => oX,
          '_toUpperCase',
          () => oY,
          '_transform',
          () => o7,
          '_trim',
          () => oV,
          '_tuple',
          () => o4,
          '_uint32',
          () => oo,
          '_uint64',
          () => om,
          '_ulid',
          () => aV,
          '_undefined',
          () => op,
          '_union',
          () => oH,
          '_unknown',
          () => oh,
          '_uppercase',
          () => oL,
          '_url',
          () => aM,
          '_uuid',
          () => aR,
          '_uuidv4',
          () => aL,
          '_uuidv6',
          () => aJ,
          '_uuidv7',
          () => aF,
          '_void',
          () => oy,
          '_xid',
          () => aX,
        ],
        85169
      ));
    let a9 = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
    function a3(e, t) {
      return new e({
        type: 'string',
        format: 'datetime',
        check: 'string_format',
        offset: !1,
        local: !1,
        precision: null,
        ...eQ(t),
      });
    }
    function a8(e, t) {
      return new e({ type: 'string', format: 'date', check: 'string_format', ...eQ(t) });
    }
    function a5(e, t) {
      return new e({
        type: 'string',
        format: 'time',
        check: 'string_format',
        precision: null,
        ...eQ(t),
      });
    }
    function a7(e, t) {
      return new e({ type: 'string', format: 'duration', check: 'string_format', ...eQ(t) });
    }
    function oe(e, t) {
      return new e({ type: 'number', checks: [], ...eQ(t) });
    }
    function ot(e, t) {
      return new e({ type: 'number', coerce: !0, checks: [], ...eQ(t) });
    }
    function on(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'safeint',
        ...eQ(t),
      });
    }
    function or(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float32',
        ...eQ(t),
      });
    }
    function oi(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float64',
        ...eQ(t),
      });
    }
    function oa(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'int32',
        ...eQ(t),
      });
    }
    function oo(e, t) {
      return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'uint32',
        ...eQ(t),
      });
    }
    function ou(e, t) {
      return new e({ type: 'boolean', ...eQ(t) });
    }
    function oc(e, t) {
      return new e({ type: 'boolean', coerce: !0, ...eQ(t) });
    }
    function os(e, t) {
      return new e({ type: 'bigint', ...eQ(t) });
    }
    function ol(e, t) {
      return new e({ type: 'bigint', coerce: !0, ...eQ(t) });
    }
    function od(e, t) {
      return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'int64',
        ...eQ(t),
      });
    }
    function om(e, t) {
      return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'uint64',
        ...eQ(t),
      });
    }
    function of(e, t) {
      return new e({ type: 'symbol', ...eQ(t) });
    }
    function op(e, t) {
      return new e({ type: 'undefined', ...eQ(t) });
    }
    function ov(e, t) {
      return new e({ type: 'null', ...eQ(t) });
    }
    function og(e) {
      return new e({ type: 'any' });
    }
    function oh(e) {
      return new e({ type: 'unknown' });
    }
    function o_(e, t) {
      return new e({ type: 'never', ...eQ(t) });
    }
    function oy(e, t) {
      return new e({ type: 'void', ...eQ(t) });
    }
    function ob(e, t) {
      return new e({ type: 'date', ...eQ(t) });
    }
    function ok(e, t) {
      return new e({ type: 'date', coerce: !0, ...eQ(t) });
    }
    function oI(e, t) {
      return new e({ type: 'nan', ...eQ(t) });
    }
    function oS(e, t) {
      return new rR({ check: 'less_than', ...eQ(t), value: e, inclusive: !1 });
    }
    function ow(e, t) {
      return new rR({ check: 'less_than', ...eQ(t), value: e, inclusive: !0 });
    }
    function ox(e, t) {
      return new rL({ check: 'greater_than', ...eQ(t), value: e, inclusive: !1 });
    }
    function oz(e, t) {
      return new rL({ check: 'greater_than', ...eQ(t), value: e, inclusive: !0 });
    }
    function oZ(e) {
      return ox(0, e);
    }
    function oU(e) {
      return oS(0, e);
    }
    function oO(e) {
      return ow(0, e);
    }
    function oN(e) {
      return oz(0, e);
    }
    function oj(e, t) {
      return new rJ({ check: 'multiple_of', ...eQ(t), value: e });
    }
    function oD(e, t) {
      return new rB({ check: 'max_size', ...eQ(t), maximum: e });
    }
    function oP(e, t) {
      return new rW({ check: 'min_size', ...eQ(t), minimum: e });
    }
    function oE(e, t) {
      return new rG({ check: 'size_equals', ...eQ(t), size: e });
    }
    function o$(e, t) {
      return new rK({ check: 'max_length', ...eQ(t), maximum: e });
    }
    function oT(e, t) {
      return new rV({ check: 'min_length', ...eQ(t), minimum: e });
    }
    function oA(e, t) {
      return new rX({ check: 'length_equals', ...eQ(t), length: e });
    }
    function oC(e, t) {
      return new rq({ check: 'string_format', format: 'regex', ...eQ(t), pattern: e });
    }
    function oR(e) {
      return new rH({ check: 'string_format', format: 'lowercase', ...eQ(e) });
    }
    function oL(e) {
      return new rQ({ check: 'string_format', format: 'uppercase', ...eQ(e) });
    }
    function oJ(e, t) {
      return new r0({ check: 'string_format', format: 'includes', ...eQ(t), includes: e });
    }
    function oF(e, t) {
      return new r4({ check: 'string_format', format: 'starts_with', ...eQ(t), prefix: e });
    }
    function oM(e, t) {
      return new r6({ check: 'string_format', format: 'ends_with', ...eQ(t), suffix: e });
    }
    function oB(e, t, n) {
      return new r2({ check: 'property', property: e, schema: t, ...eQ(n) });
    }
    function oW(e, t) {
      return new r9({ check: 'mime_type', mime: e, ...eQ(t) });
    }
    function oG(e) {
      return new r3({ check: 'overwrite', tx: e });
    }
    function oK(e) {
      return oG((t) => t.normalize(e));
    }
    function oV() {
      return oG((e) => e.trim());
    }
    function oX() {
      return oG((e) => e.toLowerCase());
    }
    function oY() {
      return oG((e) => e.toUpperCase());
    }
    function oq(e, t, n) {
      return new e({ type: 'array', element: t, ...eQ(n) });
    }
    function oH(e, t, n) {
      return new e({ type: 'union', options: t, ...eQ(n) });
    }
    function oQ(e, t, n, r) {
      return new e({ type: 'union', options: n, discriminator: t, ...eQ(r) });
    }
    function o0(e, t, n) {
      return new e({ type: 'intersection', left: t, right: n });
    }
    function o4(e, t, n, r) {
      let i = n instanceof r7,
        a = i ? r : n;
      return new e({ type: 'tuple', items: t, rest: i ? n : null, ...eQ(a) });
    }
    function o6(e, t, n, r) {
      return new e({ type: 'record', keyType: t, valueType: n, ...eQ(r) });
    }
    function o1(e, t, n, r) {
      return new e({ type: 'map', keyType: t, valueType: n, ...eQ(r) });
    }
    function o2(e, t, n) {
      return new e({ type: 'set', valueType: t, ...eQ(n) });
    }
    function o9(e, t, n) {
      return new e({
        type: 'enum',
        entries: Array.isArray(t) ? Object.fromEntries(t.map((e) => [e, e])) : t,
        ...eQ(n),
      });
    }
    function o3(e, t, n) {
      return new e({ type: 'enum', entries: t, ...eQ(n) });
    }
    function o8(e, t, n) {
      return new e({ type: 'literal', values: Array.isArray(t) ? t : [t], ...eQ(n) });
    }
    function o5(e, t) {
      return new e({ type: 'file', ...eQ(t) });
    }
    function o7(e, t) {
      return new e({ type: 'transform', transform: t });
    }
    function ue(e, t) {
      return new e({ type: 'optional', innerType: t });
    }
    function ut(e, t) {
      return new e({ type: 'nullable', innerType: t });
    }
    function un(e, t, n) {
      return new e({
        type: 'default',
        innerType: t,
        get defaultValue() {
          return 'function' == typeof n ? n() : eG(n);
        },
      });
    }
    function ur(e, t, n) {
      return new e({ type: 'nonoptional', innerType: t, ...eQ(n) });
    }
    function ui(e, t) {
      return new e({ type: 'success', innerType: t });
    }
    function ua(e, t, n) {
      return new e({
        type: 'catch',
        innerType: t,
        catchValue: 'function' == typeof n ? n : () => n,
      });
    }
    function uo(e, t, n) {
      return new e({ type: 'pipe', in: t, out: n });
    }
    function uu(e, t) {
      return new e({ type: 'readonly', innerType: t });
    }
    function uc(e, t, n) {
      return new e({ type: 'template_literal', parts: t, ...eQ(n) });
    }
    function us(e, t) {
      return new e({ type: 'lazy', getter: t });
    }
    function ul(e, t) {
      return new e({ type: 'promise', innerType: t });
    }
    function ud(e, t, n) {
      let r = eQ(n);
      return (
        null != r.abort || (r.abort = !0),
        new e({ type: 'custom', check: 'custom', fn: t, ...r })
      );
    }
    function um(e, t, n) {
      return new e({ type: 'custom', check: 'custom', fn: t, ...eQ(n) });
    }
    function uf(e) {
      let t = up(
        (n) => (
          (n.addIssue = (e) => {
            if ('string' == typeof e) n.issues.push(tc(e, n.value, t._zod.def));
            else
              (e.fatal && (e.continue = !1),
                null != e.code || (e.code = 'custom'),
                null != e.input || (e.input = n.value),
                null != e.inst || (e.inst = t),
                null != e.continue || (e.continue = !t._zod.def.abort),
                n.issues.push(tc(e)));
          }),
          e(n.value, n)
        )
      );
      return t;
    }
    function up(e, t) {
      let n = new rA({ check: 'custom', ...eQ(t) });
      return ((n._zod.check = e), n);
    }
    function uv(e, t) {
      var n, r, i, a, o;
      let u = eQ(t),
        c = null != (n = u.truthy) ? n : ['true', '1', 'yes', 'on', 'y', 'enabled'],
        s = null != (r = u.falsy) ? r : ['false', '0', 'no', 'off', 'n', 'disabled'];
      'sensitive' !== u.case &&
        ((c = c.map((e) => ('string' == typeof e ? e.toLowerCase() : e))),
        (s = s.map((e) => ('string' == typeof e ? e.toLowerCase() : e))));
      let l = new Set(c),
        d = new Set(s),
        m = null != (i = e.Codec) ? i : ag,
        f = null != (a = e.Boolean) ? a : iP,
        p = new m({
          type: 'pipe',
          in: new (null != (o = e.String) ? o : ie)({ type: 'string', error: u.error }),
          out: new f({ type: 'boolean', error: u.error }),
          transform: (e, t) => {
            let n = e;
            return (
              'sensitive' !== u.case && (n = n.toLowerCase()),
              !!l.has(n) ||
                (!d.has(n) &&
                  (t.issues.push({
                    code: 'invalid_value',
                    expected: 'stringbool',
                    values: [...l, ...d],
                    input: t.value,
                    inst: p,
                    continue: !1,
                  }),
                  {}))
            );
          },
          reverseTransform: (e, t) => (!0 === e ? c[0] || 'true' : s[0] || 'false'),
          error: u.error,
        });
      return p;
    }
    function ug(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = eQ(r),
        a = {
          ...eQ(r),
          check: 'string_format',
          type: 'string',
          format: t,
          fn: 'function' == typeof n ? n : (e) => n.test(e),
          ...i,
        };
      return (n instanceof RegExp && (a.pattern = n), new e(a));
    }
    (e.i(85169), e.s(['JSONSchemaGenerator', () => uh, 'toJSONSchema', () => u_], 17783));
    class uh {
      process(e) {
        var t, n, r, i, a;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { path: [], schemaPath: [] },
          u = e._zod.def,
          c = this.seen.get(e);
        if (c) return (c.count++, o.schemaPath.includes(e) && (c.cycle = o.path), c.schema);
        let s = { schema: {}, count: 1, cycle: void 0, path: o.path };
        this.seen.set(e, s);
        let l = null == (t = (n = e._zod).toJSONSchema) ? void 0 : t.call(n);
        if (l) s.schema = l;
        else {
          let t = { ...o, schemaPath: [...o.schemaPath, e], path: o.path },
            n = e._zod.parent;
          if (n) ((s.ref = n), this.process(n, t), (this.seen.get(n).isParent = !0));
          else {
            let n = s.schema;
            switch (u.type) {
              case 'string': {
                n.type = 'string';
                let {
                  minimum: t,
                  maximum: r,
                  format: a,
                  patterns: o,
                  contentEncoding: u,
                } = e._zod.bag;
                if (
                  ('number' == typeof t && (n.minLength = t),
                  'number' == typeof r && (n.maxLength = r),
                  a &&
                    ((n.format =
                      null !=
                      (i = {
                        guid: 'uuid',
                        url: 'uri',
                        datetime: 'date-time',
                        json_string: 'json-string',
                        regex: '',
                      }[a])
                        ? i
                        : a),
                    '' === n.format && delete n.format),
                  u && (n.contentEncoding = u),
                  o && o.size > 0)
                ) {
                  let e = [...o];
                  1 === e.length
                    ? (n.pattern = e[0].source)
                    : e.length > 1 &&
                      (s.schema.allOf = [
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
                  minimum: t,
                  maximum: r,
                  format: i,
                  multipleOf: a,
                  exclusiveMaximum: o,
                  exclusiveMinimum: u,
                } = e._zod.bag;
                ('string' == typeof i && i.includes('int')
                  ? (n.type = 'integer')
                  : (n.type = 'number'),
                  'number' == typeof u &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((n.minimum = u), (n.exclusiveMinimum = !0))
                      : (n.exclusiveMinimum = u)),
                  'number' == typeof t &&
                    ((n.minimum = t),
                    'number' == typeof u &&
                      'draft-4' !== this.target &&
                      (u >= t ? delete n.minimum : delete n.exclusiveMinimum)),
                  'number' == typeof o &&
                    ('draft-4' === this.target || 'openapi-3.0' === this.target
                      ? ((n.maximum = o), (n.exclusiveMaximum = !0))
                      : (n.exclusiveMaximum = o)),
                  'number' == typeof r &&
                    ((n.maximum = r),
                    'number' == typeof o &&
                      'draft-4' !== this.target &&
                      (o <= r ? delete n.maximum : delete n.exclusiveMaximum)),
                  'number' == typeof a && (n.multipleOf = a));
                break;
              }
              case 'boolean':
              case 'success':
                n.type = 'boolean';
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
                  ? ((n.type = 'string'), (n.nullable = !0), (n.enum = [null]))
                  : (n.type = 'null');
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
                n.not = {};
                break;
              case 'date':
                if ('throw' === this.unrepresentable)
                  throw Error('Date cannot be represented in JSON Schema');
                break;
              case 'array': {
                let { minimum: r, maximum: i } = e._zod.bag;
                ('number' == typeof r && (n.minItems = r),
                  'number' == typeof i && (n.maxItems = i),
                  (n.type = 'array'),
                  (n.items = this.process(u.element, { ...t, path: [...t.path, 'items'] })));
                break;
              }
              case 'object': {
                ((n.type = 'object'), (n.properties = {}));
                let e = u.shape;
                for (let r in e)
                  n.properties[r] = this.process(e[r], {
                    ...t,
                    path: [...t.path, 'properties', r],
                  });
                let r = new Set(
                  [...new Set(Object.keys(e))].filter((e) => {
                    let t = u.shape[e]._zod;
                    return 'input' === this.io ? void 0 === t.optin : void 0 === t.optout;
                  })
                );
                (r.size > 0 && (n.required = Array.from(r)),
                  (null == (a = u.catchall) ? void 0 : a._zod.def.type) === 'never'
                    ? (n.additionalProperties = !1)
                    : u.catchall
                      ? u.catchall &&
                        (n.additionalProperties = this.process(u.catchall, {
                          ...t,
                          path: [...t.path, 'additionalProperties'],
                        }))
                      : 'output' === this.io && (n.additionalProperties = !1));
                break;
              }
              case 'union':
                n.anyOf = u.options.map((e, n) =>
                  this.process(e, { ...t, path: [...t.path, 'anyOf', n] })
                );
                break;
              case 'intersection': {
                let e = this.process(u.left, { ...t, path: [...t.path, 'allOf', 0] }),
                  r = this.process(u.right, { ...t, path: [...t.path, 'allOf', 1] }),
                  i = (e) => 'allOf' in e && 1 === Object.keys(e).length;
                n.allOf = [...(i(e) ? e.allOf : [e]), ...(i(r) ? r.allOf : [r])];
                break;
              }
              case 'tuple': {
                n.type = 'array';
                let r = 'draft-2020-12' === this.target ? 'prefixItems' : 'items',
                  i =
                    'draft-2020-12' === this.target || 'openapi-3.0' === this.target
                      ? 'items'
                      : 'additionalItems',
                  a = u.items.map((e, n) => this.process(e, { ...t, path: [...t.path, r, n] })),
                  o = u.rest
                    ? this.process(u.rest, {
                        ...t,
                        path: [
                          ...t.path,
                          i,
                          ...('openapi-3.0' === this.target ? [u.items.length] : []),
                        ],
                      })
                    : null;
                'draft-2020-12' === this.target
                  ? ((n.prefixItems = a), o && (n.items = o))
                  : 'openapi-3.0' === this.target
                    ? ((n.items = { anyOf: a }),
                      o && n.items.anyOf.push(o),
                      (n.minItems = a.length),
                      o || (n.maxItems = a.length))
                    : ((n.items = a), o && (n.additionalItems = o));
                let { minimum: c, maximum: s } = e._zod.bag;
                ('number' == typeof c && (n.minItems = c),
                  'number' == typeof s && (n.maxItems = s));
                break;
              }
              case 'record':
                ((n.type = 'object'),
                  ('draft-7' === this.target || 'draft-2020-12' === this.target) &&
                    (n.propertyNames = this.process(u.keyType, {
                      ...t,
                      path: [...t.path, 'propertyNames'],
                    })),
                  (n.additionalProperties = this.process(u.valueType, {
                    ...t,
                    path: [...t.path, 'additionalProperties'],
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
                let e = ex(u.entries);
                (e.every((e) => 'number' == typeof e) && (n.type = 'number'),
                  e.every((e) => 'string' == typeof e) && (n.type = 'string'),
                  (n.enum = e));
                break;
              }
              case 'literal': {
                let e = [];
                for (let t of u.values)
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
                  let t = e[0];
                  ((n.type = null === t ? 'null' : typeof t),
                    'draft-4' === this.target || 'openapi-3.0' === this.target
                      ? (n.enum = [t])
                      : (n.const = t));
                } else
                  (e.every((e) => 'number' == typeof e) && (n.type = 'number'),
                    e.every((e) => 'string' == typeof e) && (n.type = 'string'),
                    e.every((e) => 'boolean' == typeof e) && (n.type = 'string'),
                    e.every((e) => null === e) && (n.type = 'null'),
                    (n.enum = e));
                break;
              }
              case 'file': {
                let t = { type: 'string', format: 'binary', contentEncoding: 'binary' },
                  { minimum: r, maximum: i, mime: a } = e._zod.bag;
                (void 0 !== r && (t.minLength = r),
                  void 0 !== i && (t.maxLength = i),
                  a
                    ? 1 === a.length
                      ? ((t.contentMediaType = a[0]), Object.assign(n, t))
                      : (n.anyOf = a.map((e) => ({ ...t, contentMediaType: e })))
                    : Object.assign(n, t));
                break;
              }
              case 'transform':
                if ('throw' === this.unrepresentable)
                  throw Error('Transforms cannot be represented in JSON Schema');
                break;
              case 'nullable': {
                let e = this.process(u.innerType, t);
                'openapi-3.0' === this.target
                  ? ((s.ref = u.innerType), (n.nullable = !0))
                  : (n.anyOf = [e, { type: 'null' }]);
                break;
              }
              case 'nonoptional':
              case 'promise':
              case 'optional':
                (this.process(u.innerType, t), (s.ref = u.innerType));
                break;
              case 'default':
                (this.process(u.innerType, t),
                  (s.ref = u.innerType),
                  (n.default = JSON.parse(JSON.stringify(u.defaultValue))));
                break;
              case 'prefault':
                (this.process(u.innerType, t),
                  (s.ref = u.innerType),
                  'input' === this.io &&
                    (n._prefault = JSON.parse(JSON.stringify(u.defaultValue))));
                break;
              case 'catch': {
                let e;
                (this.process(u.innerType, t), (s.ref = u.innerType));
                try {
                  e = u.catchValue(void 0);
                } catch (e) {
                  throw Error('Dynamic catch values are not supported in JSON Schema');
                }
                n.default = e;
                break;
              }
              case 'nan':
                if ('throw' === this.unrepresentable)
                  throw Error('NaN cannot be represented in JSON Schema');
                break;
              case 'template_literal': {
                let t = e._zod.pattern;
                if (!t) throw Error('Pattern not found in template literal');
                ((n.type = 'string'), (n.pattern = t.source));
                break;
              }
              case 'pipe': {
                let e =
                  'input' === this.io ? ('transform' === u.in._zod.def.type ? u.out : u.in) : u.out;
                (this.process(e, t), (s.ref = e));
                break;
              }
              case 'readonly':
                (this.process(u.innerType, t), (s.ref = u.innerType), (n.readOnly = !0));
                break;
              case 'lazy': {
                let n = e._zod.innerType;
                (this.process(n, t), (s.ref = n));
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
        let d = this.metadataRegistry.get(e);
        return (
          d && Object.assign(s.schema, d),
          'input' === this.io &&
            (function e(t, n) {
              let r = null != n ? n : { seen: new Set() };
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
              throw Error('Unknown schema type: '.concat(i.type));
            })(e) &&
            (delete s.schema.examples, delete s.schema.default),
          'input' === this.io &&
            s.schema._prefault &&
            (null != (r = s.schema).default || (r.default = s.schema._prefault)),
          delete s.schema._prefault,
          this.seen.get(e).schema
        );
      }
      emit(e, t) {
        var n, r, i, a, o, u, c, s, l, d;
        let m = {
            cycles: null != (i = null == t ? void 0 : t.cycles) ? i : 'ref',
            reused: null != (a = null == t ? void 0 : t.reused) ? a : 'inline',
            external: null != (o = null == t ? void 0 : t.external) ? o : void 0,
          },
          f = this.seen.get(e);
        if (!f) throw Error('Unprocessed schema. This is a bug in Zod.');
        let p = (e) => {
            var t, n, r, i, a;
            let o = 'draft-2020-12' === this.target ? '$defs' : 'definitions';
            if (m.external) {
              let a = null == (t = m.external.registry.get(e[0])) ? void 0 : t.id,
                u = null != (n = m.external.uri) ? n : (e) => e;
              if (a) return { ref: u(a) };
              let c =
                null != (i = null != (r = e[1].defId) ? r : e[1].schema.id)
                  ? i
                  : 'schema'.concat(this.counter++);
              return (
                (e[1].defId = c),
                { defId: c, ref: ''.concat(u('__shared'), '#/').concat(o, '/').concat(c) }
              );
            }
            if (e[1] === f) return { ref: '#' };
            let u = ''.concat('#', '/').concat(o, '/'),
              c = null != (a = e[1].schema.id) ? a : '__schema'.concat(this.counter++);
            return { defId: c, ref: u + c };
          },
          v = (e) => {
            if (e[1].schema.$ref) return;
            let t = e[1],
              { ref: n, defId: r } = p(e);
            ((t.def = { ...t.schema }), r && (t.defId = r));
            let i = t.schema;
            for (let e in i) delete i[e];
            i.$ref = n;
          };
        if ('throw' === m.cycles)
          for (let e of this.seen.entries()) {
            let t = e[1];
            if (t.cycle)
              throw Error(
                'Cycle detected: ' +
                  '#/'.concat(null == (u = t.cycle) ? void 0 : u.join('/'), '/<root>') +
                  '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.'
              );
          }
        for (let t of this.seen.entries()) {
          let n = t[1];
          if (e === t[0]) {
            v(t);
            continue;
          }
          if (m.external) {
            let n = null == (s = m.external.registry.get(t[0])) ? void 0 : s.id;
            if (e !== t[0] && n) {
              v(t);
              continue;
            }
          }
          if (
            (null == (c = this.metadataRegistry.get(t[0])) ? void 0 : c.id) ||
            n.cycle ||
            (n.count > 1 && 'ref' === m.reused)
          ) {
            v(t);
            continue;
          }
        }
        let g = (e, t) => {
          var n, r, i;
          let a = this.seen.get(e),
            o = null != (n = a.def) ? n : a.schema,
            u = { ...o };
          if (null === a.ref) return;
          let c = a.ref;
          if (((a.ref = null), c)) {
            g(c, t);
            let e = this.seen.get(c).schema;
            e.$ref &&
            ('draft-7' === t.target || 'draft-4' === t.target || 'openapi-3.0' === t.target)
              ? ((o.allOf = null != (r = o.allOf) ? r : []), o.allOf.push(e))
              : (Object.assign(o, e), Object.assign(o, u));
          }
          a.isParent ||
            this.override({ zodSchema: e, jsonSchema: o, path: null != (i = a.path) ? i : [] });
        };
        for (let e of [...this.seen.entries()].reverse()) g(e[0], { target: this.target });
        let h = {};
        if (
          ('draft-2020-12' === this.target
            ? (h.$schema = 'https://json-schema.org/draft/2020-12/schema')
            : 'draft-7' === this.target
              ? (h.$schema = 'http://json-schema.org/draft-07/schema#')
              : 'draft-4' === this.target
                ? (h.$schema = 'http://json-schema.org/draft-04/schema#')
                : 'openapi-3.0' === this.target ||
                  console.warn('Invalid target: '.concat(this.target)),
          null == (n = m.external) ? void 0 : n.uri)
        ) {
          let t = null == (l = m.external.registry.get(e)) ? void 0 : l.id;
          if (!t) throw Error('Schema is missing an `id` property');
          h.$id = m.external.uri(t);
        }
        Object.assign(h, f.def);
        let _ = null != (d = null == (r = m.external) ? void 0 : r.defs) ? d : {};
        for (let e of this.seen.entries()) {
          let t = e[1];
          t.def && t.defId && (_[t.defId] = t.def);
        }
        m.external ||
          (Object.keys(_).length > 0 &&
            ('draft-2020-12' === this.target ? (h.$defs = _) : (h.definitions = _)));
        try {
          return JSON.parse(JSON.stringify(h));
        } catch (e) {
          throw Error('Error converting schema to JSON.');
        }
      }
      constructor(e) {
        var t, n, r, i, a;
        ((this.counter = 0),
          (this.metadataRegistry = null != (t = null == e ? void 0 : e.metadata) ? t : aE),
          (this.target = null != (n = null == e ? void 0 : e.target) ? n : 'draft-2020-12'),
          (this.unrepresentable =
            null != (r = null == e ? void 0 : e.unrepresentable) ? r : 'throw'),
          (this.override = null != (i = null == e ? void 0 : e.override) ? i : () => {}),
          (this.io = null != (a = null == e ? void 0 : e.io) ? a : 'output'),
          (this.seen = new Map()));
      }
    }
    function u_(e, t) {
      if (e instanceof aD) {
        let n = new uh(t),
          r = {};
        for (let t of e._idmap.entries()) {
          let [e, r] = t;
          n.process(r);
        }
        let i = {},
          a = { registry: e, uri: null == t ? void 0 : t.uri, defs: r };
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
      let n = new uh(t);
      return (n.process(e), n.emit(e, t));
    }
    e.i(17783);
    var uy = n8,
      ub = e.i(18048);
    (e.s(
      [
        'ZodISODate',
        () => ln,
        'ZodISODateTime',
        () => le,
        'ZodISODuration',
        () => lo,
        'ZodISOTime',
        () => li,
        'date',
        () => lr,
        'datetime',
        () => lt,
        'duration',
        () => lu,
        'time',
        () => la,
      ],
      74509
    ),
      e.s(
        [
          'ZodAny',
          () => cK,
          'ZodArray',
          () => c1,
          'ZodBase64',
          () => cf,
          'ZodBase64URL',
          () => cv,
          'ZodBigInt',
          () => cT,
          'ZodBigIntFormat',
          () => cC,
          'ZodBoolean',
          () => cE,
          'ZodCIDRv4',
          () => cs,
          'ZodCIDRv6',
          () => cd,
          'ZodCUID',
          () => u9,
          'ZodCUID2',
          () => u8,
          'ZodCatch',
          () => sA,
          'ZodCodec',
          () => sM,
          'ZodCustom',
          () => s4,
          'ZodCustomStringFormat',
          () => ck,
          'ZodDate',
          () => c4,
          'ZodDefault',
          () => sO,
          'ZodDiscriminatedUnion',
          () => sn,
          'ZodE164',
          () => ch,
          'ZodEmail',
          () => uM,
          'ZodEmoji',
          () => u4,
          'ZodEnum',
          () => sv,
          'ZodFile',
          () => sb,
          'ZodFunction',
          () => sQ,
          'ZodGUID',
          () => uW,
          'ZodIPv4',
          () => ca,
          'ZodIPv6',
          () => cu,
          'ZodIntersection',
          () => si,
          'ZodJWT',
          () => cy,
          'ZodKSUID',
          () => cr,
          'ZodLazy',
          () => sX,
          'ZodLiteral',
          () => s_,
          'ZodMap',
          () => sd,
          'ZodNaN',
          () => sR,
          'ZodNanoID',
          () => u1,
          'ZodNever',
          () => cq,
          'ZodNonOptional',
          () => sP,
          'ZodNull',
          () => cW,
          'ZodNullable',
          () => sz,
          'ZodNumber',
          () => cz,
          'ZodNumberFormat',
          () => cU,
          'ZodObject',
          () => c3,
          'ZodOptional',
          () => sw,
          'ZodPipe',
          () => sJ,
          'ZodPrefault',
          () => sj,
          'ZodPromise',
          () => sq,
          'ZodReadonly',
          () => sW,
          'ZodRecord',
          () => sc,
          'ZodSet',
          () => sf,
          'ZodString',
          () => uL,
          'ZodStringFormat',
          () => uF,
          'ZodSuccess',
          () => s$,
          'ZodSymbol',
          () => cJ,
          'ZodTemplateLiteral',
          () => sK,
          'ZodTransform',
          () => sI,
          'ZodTuple',
          () => so,
          'ZodType',
          () => uC,
          'ZodULID',
          () => u7,
          'ZodURL',
          () => uH,
          'ZodUUID',
          () => uK,
          'ZodUndefined',
          () => cM,
          'ZodUnion',
          () => se,
          'ZodUnknown',
          () => cX,
          'ZodVoid',
          () => cQ,
          'ZodXID',
          () => ct,
          '_ZodString',
          () => uR,
          '_default',
          () => sN,
          '_function',
          () => s0,
          'any',
          () => cV,
          'array',
          () => c2,
          'base64',
          () => cp,
          'base64url',
          () => cg,
          'bigint',
          () => cA,
          'boolean',
          () => c$,
          'catch',
          () => sC,
          'check',
          () => s6,
          'cidrv4',
          () => cl,
          'cidrv6',
          () => cm,
          'codec',
          () => sB,
          'cuid',
          () => u3,
          'cuid2',
          () => u5,
          'custom',
          () => s1,
          'date',
          () => c6,
          'discriminatedUnion',
          () => sr,
          'e164',
          () => c_,
          'email',
          () => uB,
          'emoji',
          () => u6,
          'enum',
          () => sg,
          'file',
          () => sk,
          'float32',
          () => cN,
          'float64',
          () => cj,
          'function',
          () => s0,
          'guid',
          () => uG,
          'hash',
          () => cx,
          'hex',
          () => cw,
          'hostname',
          () => cS,
          'httpUrl',
          () => u0,
          'instanceof',
          () => s3,
          'int',
          () => cO,
          'int32',
          () => cD,
          'int64',
          () => cR,
          'intersection',
          () => sa,
          'ipv4',
          () => co,
          'ipv6',
          () => cc,
          'json',
          () => s5,
          'jwt',
          () => cb,
          'keyof',
          () => c9,
          'ksuid',
          () => ci,
          'lazy',
          () => sY,
          'literal',
          () => sy,
          'looseObject',
          () => c7,
          'map',
          () => sm,
          'nan',
          () => sL,
          'nanoid',
          () => u2,
          'nativeEnum',
          () => sh,
          'never',
          () => cH,
          'nonoptional',
          () => sE,
          'null',
          () => cG,
          'nullable',
          () => sZ,
          'nullish',
          () => sU,
          'number',
          () => cZ,
          'object',
          () => c8,
          'optional',
          () => sx,
          'partialRecord',
          () => sl,
          'pipe',
          () => sF,
          'prefault',
          () => sD,
          'preprocess',
          () => s7,
          'promise',
          () => sH,
          'readonly',
          () => sG,
          'record',
          () => ss,
          'refine',
          () => s2,
          'set',
          () => sp,
          'strictObject',
          () => c5,
          'string',
          () => uJ,
          'stringFormat',
          () => cI,
          'stringbool',
          () => s8,
          'success',
          () => sT,
          'superRefine',
          () => s9,
          'symbol',
          () => cF,
          'templateLiteral',
          () => sV,
          'transform',
          () => sS,
          'tuple',
          () => su,
          'uint32',
          () => cP,
          'uint64',
          () => cL,
          'ulid',
          () => ce,
          'undefined',
          () => cB,
          'union',
          () => st,
          'unknown',
          () => cY,
          'url',
          () => uQ,
          'uuid',
          () => uV,
          'uuidv4',
          () => uX,
          'uuidv6',
          () => uY,
          'uuidv7',
          () => uq,
          'void',
          () => c0,
          'xid',
          () => cn,
        ],
        98439
      ));
    var uk = nv,
      uI = th;
    (e.s(
      [
        'decode',
        () => uj,
        'decodeAsync',
        () => uP,
        'encode',
        () => uN,
        'encodeAsync',
        () => uD,
        'parse',
        () => uz,
        'parseAsync',
        () => uZ,
        'safeDecode',
        () => u$,
        'safeDecodeAsync',
        () => uA,
        'safeEncode',
        () => uE,
        'safeEncodeAsync',
        () => uT,
        'safeParse',
        () => uU,
        'safeParseAsync',
        () => uO,
      ],
      67315
    ),
      e.s(['ZodError', () => uw, 'ZodRealError', () => ux], 34986));
    let uS = (e, t) => {
        (ro.init(e, t),
          (e.name = 'ZodError'),
          Object.defineProperties(e, {
            format: { value: (t) => rs(e, t) },
            flatten: { value: (t) => rc(e, t) },
            addIssue: {
              value: (t) => {
                (e.issues.push(t), (e.message = JSON.stringify(e.issues, eZ, 2)));
              },
            },
            addIssues: {
              value: (t) => {
                (e.issues.push(...t), (e.message = JSON.stringify(e.issues, eZ, 2)));
              },
            },
            isEmpty: { get: () => 0 === e.issues.length },
          }));
      },
      uw = n7('ZodError', uS),
      ux = n7('ZodError', uS, { Parent: Error }),
      uz = rf(ux),
      uZ = rv(ux),
      uU = rh(ux),
      uO = ry(ux),
      uN = rk(ux),
      uj = rS(ux),
      uD = rx(ux),
      uP = rZ(ux),
      uE = rO(ux),
      u$ = rj(ux),
      uT = rP(ux),
      uA = r$(ux),
      uC = n7(
        'ZodType',
        (e, t) => (
          r7.init(e, t),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, '_def', { value: t }),
          (e.check = function () {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return e.clone({
              ...t,
              checks: [
                ...(null != (n = t.checks) ? n : []),
                ...i.map((e) =>
                  'function' == typeof e
                    ? { _zod: { check: e, def: { check: 'custom' }, onattach: [] } }
                    : e
                ),
              ],
            });
          }),
          (e.clone = (t, n) => eH(e, t, n)),
          (e.brand = () => e),
          (e.register = (t, n) => (t.add(e, n), e)),
          (e.parse = (t, n) => uz(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => uU(e, t, n)),
          (e.parseAsync = async (t, n) => uZ(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => uO(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => uN(e, t, n)),
          (e.decode = (t, n) => uj(e, t, n)),
          (e.encodeAsync = async (t, n) => uD(e, t, n)),
          (e.decodeAsync = async (t, n) => uP(e, t, n)),
          (e.safeEncode = (t, n) => uE(e, t, n)),
          (e.safeDecode = (t, n) => u$(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => uT(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => uA(e, t, n)),
          (e.refine = (t, n) => e.check(s2(t, n))),
          (e.superRefine = (t) => e.check(uf(t))),
          (e.overwrite = (t) => e.check(oG(t))),
          (e.optional = () => sx(e)),
          (e.nullable = () => sZ(e)),
          (e.nullish = () => sx(sZ(e))),
          (e.nonoptional = (t) => sE(e, t)),
          (e.array = () => c2(e)),
          (e.or = (t) => st([e, t])),
          (e.and = (t) => sa(e, t)),
          (e.transform = (t) => sF(e, sS(t))),
          (e.default = (t) => sN(e, t)),
          (e.prefault = (t) => sD(e, t)),
          (e.catch = (t) => sC(e, t)),
          (e.pipe = (t) => sF(e, t)),
          (e.readonly = () => sG(e)),
          (e.describe = (t) => {
            let n = e.clone();
            return (aE.add(n, { description: t }), n);
          }),
          Object.defineProperty(e, 'description', {
            get() {
              var t;
              return null == (t = aE.get(e)) ? void 0 : t.description;
            },
            configurable: !0,
          }),
          (e.meta = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            if (0 === n.length) return aE.get(e);
            let i = e.clone();
            return (aE.add(i, n[0]), i);
          }),
          (e.isOptional = () => e.safeParse(void 0).success),
          (e.isNullable = () => e.safeParse(null).success),
          e
        )
      ),
      uR = n7('_ZodString', (e, t) => {
        var n, r, i;
        (ie.init(e, t), uC.init(e, t));
        let a = e._zod.bag;
        ((e.format = null != (n = a.format) ? n : null),
          (e.minLength = null != (r = a.minimum) ? r : null),
          (e.maxLength = null != (i = a.maximum) ? i : null),
          (e.regex = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oC(...n));
          }),
          (e.includes = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oJ(...n));
          }),
          (e.startsWith = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oF(...n));
          }),
          (e.endsWith = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oM(...n));
          }),
          (e.min = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oT(...n));
          }),
          (e.max = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(o$(...n));
          }),
          (e.length = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oA(...n));
          }),
          (e.nonempty = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oT(1, ...n));
          }),
          (e.lowercase = (t) => e.check(oR(t))),
          (e.uppercase = (t) => e.check(oL(t))),
          (e.trim = () => e.check(oV())),
          (e.normalize = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return e.check(oK(...n));
          }),
          (e.toLowerCase = () => e.check(oX())),
          (e.toUpperCase = () => e.check(oY())));
      }),
      uL = n7('ZodString', (e, t) => {
        (ie.init(e, t),
          uR.init(e, t),
          (e.email = (t) => e.check(aA(uM, t))),
          (e.url = (t) => e.check(aM(uH, t))),
          (e.jwt = (t) => e.check(a2(cy, t))),
          (e.emoji = (t) => e.check(aB(u4, t))),
          (e.guid = (t) => e.check(aC(uW, t))),
          (e.uuid = (t) => e.check(aR(uK, t))),
          (e.uuidv4 = (t) => e.check(aL(uK, t))),
          (e.uuidv6 = (t) => e.check(aJ(uK, t))),
          (e.uuidv7 = (t) => e.check(aF(uK, t))),
          (e.nanoid = (t) => e.check(aW(u1, t))),
          (e.guid = (t) => e.check(aC(uW, t))),
          (e.cuid = (t) => e.check(aG(u9, t))),
          (e.cuid2 = (t) => e.check(aK(u8, t))),
          (e.ulid = (t) => e.check(aV(u7, t))),
          (e.base64 = (t) => e.check(a4(cf, t))),
          (e.base64url = (t) => e.check(a6(cv, t))),
          (e.xid = (t) => e.check(aX(ct, t))),
          (e.ksuid = (t) => e.check(aY(cr, t))),
          (e.ipv4 = (t) => e.check(aq(ca, t))),
          (e.ipv6 = (t) => e.check(aH(cu, t))),
          (e.cidrv4 = (t) => e.check(aQ(cs, t))),
          (e.cidrv6 = (t) => e.check(a0(cd, t))),
          (e.e164 = (t) => e.check(a1(ch, t))),
          (e.datetime = (t) => e.check(lt(t))),
          (e.date = (t) => e.check(lr(t))),
          (e.time = (t) => e.check(la(t))),
          (e.duration = (t) => e.check(lu(t))));
      });
    function uJ(e) {
      return a$(uL, e);
    }
    let uF = n7('ZodStringFormat', (e, t) => {
        (it.init(e, t), uR.init(e, t));
      }),
      uM = n7('ZodEmail', (e, t) => {
        (ia.init(e, t), uF.init(e, t));
      });
    function uB(e) {
      return aA(uM, e);
    }
    let uW = n7('ZodGUID', (e, t) => {
      (ir.init(e, t), uF.init(e, t));
    });
    function uG(e) {
      return aC(uW, e);
    }
    let uK = n7('ZodUUID', (e, t) => {
      (ii.init(e, t), uF.init(e, t));
    });
    function uV(e) {
      return aR(uK, e);
    }
    function uX(e) {
      return aL(uK, e);
    }
    function uY(e) {
      return aJ(uK, e);
    }
    function uq(e) {
      return aF(uK, e);
    }
    let uH = n7('ZodURL', (e, t) => {
      (io.init(e, t), uF.init(e, t));
    });
    function uQ(e) {
      return aM(uH, e);
    }
    function u0(e) {
      return aM(uH, { protocol: /^https?$/, hostname: uk.domain, ...uI.normalizeParams(e) });
    }
    let u4 = n7('ZodEmoji', (e, t) => {
      (iu.init(e, t), uF.init(e, t));
    });
    function u6(e) {
      return aB(u4, e);
    }
    let u1 = n7('ZodNanoID', (e, t) => {
      (ic.init(e, t), uF.init(e, t));
    });
    function u2(e) {
      return aW(u1, e);
    }
    let u9 = n7('ZodCUID', (e, t) => {
      (is.init(e, t), uF.init(e, t));
    });
    function u3(e) {
      return aG(u9, e);
    }
    let u8 = n7('ZodCUID2', (e, t) => {
      (il.init(e, t), uF.init(e, t));
    });
    function u5(e) {
      return aK(u8, e);
    }
    let u7 = n7('ZodULID', (e, t) => {
      (id.init(e, t), uF.init(e, t));
    });
    function ce(e) {
      return aV(u7, e);
    }
    let ct = n7('ZodXID', (e, t) => {
      (im.init(e, t), uF.init(e, t));
    });
    function cn(e) {
      return aX(ct, e);
    }
    let cr = n7('ZodKSUID', (e, t) => {
      (ip.init(e, t), uF.init(e, t));
    });
    function ci(e) {
      return aY(cr, e);
    }
    let ca = n7('ZodIPv4', (e, t) => {
      (iy.init(e, t), uF.init(e, t));
    });
    function co(e) {
      return aq(ca, e);
    }
    let cu = n7('ZodIPv6', (e, t) => {
      (ib.init(e, t), uF.init(e, t));
    });
    function cc(e) {
      return aH(cu, e);
    }
    let cs = n7('ZodCIDRv4', (e, t) => {
      (ik.init(e, t), uF.init(e, t));
    });
    function cl(e) {
      return aQ(cs, e);
    }
    let cd = n7('ZodCIDRv6', (e, t) => {
      (iI.init(e, t), uF.init(e, t));
    });
    function cm(e) {
      return a0(cd, e);
    }
    let cf = n7('ZodBase64', (e, t) => {
      (iw.init(e, t), uF.init(e, t));
    });
    function cp(e) {
      return a4(cf, e);
    }
    let cv = n7('ZodBase64URL', (e, t) => {
      (iz.init(e, t), uF.init(e, t));
    });
    function cg(e) {
      return a6(cv, e);
    }
    let ch = n7('ZodE164', (e, t) => {
      (iZ.init(e, t), uF.init(e, t));
    });
    function c_(e) {
      return a1(ch, e);
    }
    let cy = n7('ZodJWT', (e, t) => {
      (iO.init(e, t), uF.init(e, t));
    });
    function cb(e) {
      return a2(cy, e);
    }
    let ck = n7('ZodCustomStringFormat', (e, t) => {
      (iN.init(e, t), uF.init(e, t));
    });
    function cI(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return ug(ck, e, t, n);
    }
    function cS(e) {
      return ug(ck, 'hostname', uk.hostname, e);
    }
    function cw(e) {
      return ug(ck, 'hex', uk.hex, e);
    }
    function cx(e, t) {
      var n;
      let r = null != (n = null == t ? void 0 : t.enc) ? n : 'hex',
        i = ''.concat(e, '_').concat(r),
        a = uk[i];
      if (!a) throw Error('Unrecognized hash format: '.concat(i));
      return ug(ck, i, a, t);
    }
    let cz = n7('ZodNumber', (e, t) => {
      var n, r, i, a, o, u, c, s, l;
      (ij.init(e, t),
        uC.init(e, t),
        (e.gt = (t, n) => e.check(ox(t, n))),
        (e.gte = (t, n) => e.check(oz(t, n))),
        (e.min = (t, n) => e.check(oz(t, n))),
        (e.lt = (t, n) => e.check(oS(t, n))),
        (e.lte = (t, n) => e.check(ow(t, n))),
        (e.max = (t, n) => e.check(ow(t, n))),
        (e.int = (t) => e.check(cO(t))),
        (e.safe = (t) => e.check(cO(t))),
        (e.positive = (t) => e.check(ox(0, t))),
        (e.nonnegative = (t) => e.check(oz(0, t))),
        (e.negative = (t) => e.check(oS(0, t))),
        (e.nonpositive = (t) => e.check(ow(0, t))),
        (e.multipleOf = (t, n) => e.check(oj(t, n))),
        (e.step = (t, n) => e.check(oj(t, n))),
        (e.finite = () => e));
      let d = e._zod.bag;
      ((e.minValue =
        null !=
        (i = Math.max(
          null != (n = d.minimum) ? n : -1 / 0,
          null != (r = d.exclusiveMinimum) ? r : -1 / 0
        ))
          ? i
          : null),
        (e.maxValue =
          null !=
          (u = Math.min(
            null != (a = d.maximum) ? a : 1 / 0,
            null != (o = d.exclusiveMaximum) ? o : 1 / 0
          ))
            ? u
            : null),
        (e.isInt =
          (null != (c = d.format) ? c : '').includes('int') ||
          Number.isSafeInteger(null != (s = d.multipleOf) ? s : 0.5)),
        (e.isFinite = !0),
        (e.format = null != (l = d.format) ? l : null));
    });
    function cZ(e) {
      return oe(cz, e);
    }
    let cU = n7('ZodNumberFormat', (e, t) => {
      (iD.init(e, t), cz.init(e, t));
    });
    function cO(e) {
      return on(cU, e);
    }
    function cN(e) {
      return or(cU, e);
    }
    function cj(e) {
      return oi(cU, e);
    }
    function cD(e) {
      return oa(cU, e);
    }
    function cP(e) {
      return oo(cU, e);
    }
    let cE = n7('ZodBoolean', (e, t) => {
      (iP.init(e, t), uC.init(e, t));
    });
    function c$(e) {
      return ou(cE, e);
    }
    let cT = n7('ZodBigInt', (e, t) => {
      var n, r, i;
      (iE.init(e, t),
        uC.init(e, t),
        (e.gte = (t, n) => e.check(oz(t, n))),
        (e.min = (t, n) => e.check(oz(t, n))),
        (e.gt = (t, n) => e.check(ox(t, n))),
        (e.gte = (t, n) => e.check(oz(t, n))),
        (e.min = (t, n) => e.check(oz(t, n))),
        (e.lt = (t, n) => e.check(oS(t, n))),
        (e.lte = (t, n) => e.check(ow(t, n))),
        (e.max = (t, n) => e.check(ow(t, n))),
        (e.positive = (t) => e.check(ox(BigInt(0), t))),
        (e.negative = (t) => e.check(oS(BigInt(0), t))),
        (e.nonpositive = (t) => e.check(ow(BigInt(0), t))),
        (e.nonnegative = (t) => e.check(oz(BigInt(0), t))),
        (e.multipleOf = (t, n) => e.check(oj(t, n))));
      let a = e._zod.bag;
      ((e.minValue = null != (n = a.minimum) ? n : null),
        (e.maxValue = null != (r = a.maximum) ? r : null),
        (e.format = null != (i = a.format) ? i : null));
    });
    function cA(e) {
      return os(cT, e);
    }
    let cC = n7('ZodBigIntFormat', (e, t) => {
      (i$.init(e, t), cT.init(e, t));
    });
    function cR(e) {
      return od(cC, e);
    }
    function cL(e) {
      return om(cC, e);
    }
    let cJ = n7('ZodSymbol', (e, t) => {
      (iT.init(e, t), uC.init(e, t));
    });
    function cF(e) {
      return of(cJ, e);
    }
    let cM = n7('ZodUndefined', (e, t) => {
      (iA.init(e, t), uC.init(e, t));
    });
    function cB(e) {
      return op(cM, e);
    }
    let cW = n7('ZodNull', (e, t) => {
      (iC.init(e, t), uC.init(e, t));
    });
    function cG(e) {
      return ov(cW, e);
    }
    let cK = n7('ZodAny', (e, t) => {
      (iR.init(e, t), uC.init(e, t));
    });
    function cV() {
      return og(cK);
    }
    let cX = n7('ZodUnknown', (e, t) => {
      (iL.init(e, t), uC.init(e, t));
    });
    function cY() {
      return oh(cX);
    }
    let cq = n7('ZodNever', (e, t) => {
      (iJ.init(e, t), uC.init(e, t));
    });
    function cH(e) {
      return o_(cq, e);
    }
    let cQ = n7('ZodVoid', (e, t) => {
      (iF.init(e, t), uC.init(e, t));
    });
    function c0(e) {
      return oy(cQ, e);
    }
    let c4 = n7('ZodDate', (e, t) => {
      (iM.init(e, t),
        uC.init(e, t),
        (e.min = (t, n) => e.check(oz(t, n))),
        (e.max = (t, n) => e.check(ow(t, n))));
      let n = e._zod.bag;
      ((e.minDate = n.minimum ? new Date(n.minimum) : null),
        (e.maxDate = n.maximum ? new Date(n.maximum) : null));
    });
    function c6(e) {
      return ob(c4, e);
    }
    let c1 = n7('ZodArray', (e, t) => {
      (iW.init(e, t),
        uC.init(e, t),
        (e.element = t.element),
        (e.min = (t, n) => e.check(oT(t, n))),
        (e.nonempty = (t) => e.check(oT(1, t))),
        (e.max = (t, n) => e.check(o$(t, n))),
        (e.length = (t, n) => e.check(oA(t, n))),
        (e.unwrap = () => e.element));
    });
    function c2(e, t) {
      return oq(c1, e, t);
    }
    function c9(e) {
      return sg(Object.keys(e._zod.def.shape));
    }
    let c3 = n7('ZodObject', (e, t) => {
      (iY.init(e, t),
        uC.init(e, t),
        uI.defineLazy(e, 'shape', () => t.shape),
        (e.keyof = () => sg(Object.keys(e._zod.def.shape))),
        (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: cY() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: cY() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: cH() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (t) => uI.extend(e, t)),
        (e.safeExtend = (t) => uI.safeExtend(e, t)),
        (e.merge = (t) => uI.merge(e, t)),
        (e.pick = (t) => uI.pick(e, t)),
        (e.omit = (t) => uI.omit(e, t)),
        (e.partial = function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return uI.partial(sw, e, n[0]);
        }),
        (e.required = function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return uI.required(sP, e, n[0]);
        }));
    });
    function c8(e, t) {
      return new c3({
        type: 'object',
        get shape() {
          return (uI.assignProp(this, 'shape', e ? uI.objectClone(e) : {}), this.shape);
        },
        ...uI.normalizeParams(t),
      });
    }
    function c5(e, t) {
      return new c3({
        type: 'object',
        get shape() {
          return (uI.assignProp(this, 'shape', uI.objectClone(e)), this.shape);
        },
        catchall: cH(),
        ...uI.normalizeParams(t),
      });
    }
    function c7(e, t) {
      return new c3({
        type: 'object',
        get shape() {
          return (uI.assignProp(this, 'shape', uI.objectClone(e)), this.shape);
        },
        catchall: cY(),
        ...uI.normalizeParams(t),
      });
    }
    let se = n7('ZodUnion', (e, t) => {
      (iH.init(e, t), uC.init(e, t), (e.options = t.options));
    });
    function st(e, t) {
      return new se({ type: 'union', options: e, ...uI.normalizeParams(t) });
    }
    let sn = n7('ZodDiscriminatedUnion', (e, t) => {
      (se.init(e, t), iQ.init(e, t));
    });
    function sr(e, t, n) {
      return new sn({ type: 'union', options: t, discriminator: e, ...uI.normalizeParams(n) });
    }
    let si = n7('ZodIntersection', (e, t) => {
      (i0.init(e, t), uC.init(e, t));
    });
    function sa(e, t) {
      return new si({ type: 'intersection', left: e, right: t });
    }
    let so = n7('ZodTuple', (e, t) => {
      (i6.init(e, t), uC.init(e, t), (e.rest = (t) => e.clone({ ...e._zod.def, rest: t })));
    });
    function su(e, t, n) {
      let r = t instanceof r7,
        i = r ? n : t;
      return new so({ type: 'tuple', items: e, rest: r ? t : null, ...uI.normalizeParams(i) });
    }
    let sc = n7('ZodRecord', (e, t) => {
      (i2.init(e, t), uC.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType));
    });
    function ss(e, t, n) {
      return new sc({ type: 'record', keyType: e, valueType: t, ...uI.normalizeParams(n) });
    }
    function sl(e, t, n) {
      let r = eH(e);
      return (
        (r._zod.values = void 0),
        new sc({ type: 'record', keyType: r, valueType: t, ...uI.normalizeParams(n) })
      );
    }
    let sd = n7('ZodMap', (e, t) => {
      (i9.init(e, t), uC.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType));
    });
    function sm(e, t, n) {
      return new sd({ type: 'map', keyType: e, valueType: t, ...uI.normalizeParams(n) });
    }
    let sf = n7('ZodSet', (e, t) => {
      (i8.init(e, t),
        uC.init(e, t),
        (e.min = function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return e.check(oP(...n));
        }),
        (e.nonempty = (t) => e.check(oP(1, t))),
        (e.max = function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return e.check(oD(...n));
        }),
        (e.size = function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return e.check(oE(...n));
        }));
    });
    function sp(e, t) {
      return new sf({ type: 'set', valueType: e, ...uI.normalizeParams(t) });
    }
    let sv = n7('ZodEnum', (e, t) => {
      (i7.init(e, t), uC.init(e, t), (e.enum = t.entries), (e.options = Object.values(t.entries)));
      let n = new Set(Object.keys(t.entries));
      ((e.extract = (e, r) => {
        let i = {};
        for (let r of e)
          if (n.has(r)) i[r] = t.entries[r];
          else throw Error('Key '.concat(r, ' not found in enum'));
        return new sv({ ...t, checks: [], ...uI.normalizeParams(r), entries: i });
      }),
        (e.exclude = (e, r) => {
          let i = { ...t.entries };
          for (let t of e)
            if (n.has(t)) delete i[t];
            else throw Error('Key '.concat(t, ' not found in enum'));
          return new sv({ ...t, checks: [], ...uI.normalizeParams(r), entries: i });
        }));
    });
    function sg(e, t) {
      return new sv({
        type: 'enum',
        entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
        ...uI.normalizeParams(t),
      });
    }
    function sh(e, t) {
      return new sv({ type: 'enum', entries: e, ...uI.normalizeParams(t) });
    }
    let s_ = n7('ZodLiteral', (e, t) => {
      (ae.init(e, t),
        uC.init(e, t),
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
    function sy(e, t) {
      return new s_({
        type: 'literal',
        values: Array.isArray(e) ? e : [e],
        ...uI.normalizeParams(t),
      });
    }
    let sb = n7('ZodFile', (e, t) => {
      (at.init(e, t),
        uC.init(e, t),
        (e.min = (t, n) => e.check(oP(t, n))),
        (e.max = (t, n) => e.check(oD(t, n))),
        (e.mime = (t, n) => e.check(oW(Array.isArray(t) ? t : [t], n))));
    });
    function sk(e) {
      return o5(sb, e);
    }
    let sI = n7('ZodTransform', (e, t) => {
      (an.init(e, t),
        uC.init(e, t),
        (e._zod.parse = (n, r) => {
          if ('backward' === r.direction) throw new rn(e.constructor.name);
          n.addIssue = (r) => {
            if ('string' == typeof r) n.issues.push(uI.issue(r, n.value, t));
            else
              (r.fatal && (r.continue = !1),
                null != r.code || (r.code = 'custom'),
                null != r.input || (r.input = n.value),
                null != r.inst || (r.inst = e),
                n.issues.push(uI.issue(r)));
          };
          let i = t.transform(n.value, n);
          return i instanceof Promise ? i.then((e) => ((n.value = e), n)) : ((n.value = i), n);
        }));
    });
    function sS(e) {
      return new sI({ type: 'transform', transform: e });
    }
    let sw = n7('ZodOptional', (e, t) => {
      (ai.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sx(e) {
      return new sw({ type: 'optional', innerType: e });
    }
    let sz = n7('ZodNullable', (e, t) => {
      (aa.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sZ(e) {
      return new sz({ type: 'nullable', innerType: e });
    }
    function sU(e) {
      return sx(sZ(e));
    }
    let sO = n7('ZodDefault', (e, t) => {
      (ao.init(e, t),
        uC.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
    });
    function sN(e, t) {
      return new sO({
        type: 'default',
        innerType: e,
        get defaultValue() {
          return 'function' == typeof t ? t() : uI.shallowClone(t);
        },
      });
    }
    let sj = n7('ZodPrefault', (e, t) => {
      (ac.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sD(e, t) {
      return new sj({
        type: 'prefault',
        innerType: e,
        get defaultValue() {
          return 'function' == typeof t ? t() : uI.shallowClone(t);
        },
      });
    }
    let sP = n7('ZodNonOptional', (e, t) => {
      (as.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sE(e, t) {
      return new sP({ type: 'nonoptional', innerType: e, ...uI.normalizeParams(t) });
    }
    let s$ = n7('ZodSuccess', (e, t) => {
      (ad.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sT(e) {
      return new s$({ type: 'success', innerType: e });
    }
    let sA = n7('ZodCatch', (e, t) => {
      (am.init(e, t),
        uC.init(e, t),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
    });
    function sC(e, t) {
      return new sA({
        type: 'catch',
        innerType: e,
        catchValue: 'function' == typeof t ? t : () => t,
      });
    }
    let sR = n7('ZodNaN', (e, t) => {
      (af.init(e, t), uC.init(e, t));
    });
    function sL(e) {
      return oI(sR, e);
    }
    let sJ = n7('ZodPipe', (e, t) => {
      (ap.init(e, t), uC.init(e, t), (e.in = t.in), (e.out = t.out));
    });
    function sF(e, t) {
      return new sJ({ type: 'pipe', in: e, out: t });
    }
    let sM = n7('ZodCodec', (e, t) => {
      (sJ.init(e, t), ag.init(e, t));
    });
    function sB(e, t, n) {
      return new sM({
        type: 'pipe',
        in: e,
        out: t,
        transform: n.decode,
        reverseTransform: n.encode,
      });
    }
    let sW = n7('ZodReadonly', (e, t) => {
      (ay.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sG(e) {
      return new sW({ type: 'readonly', innerType: e });
    }
    let sK = n7('ZodTemplateLiteral', (e, t) => {
      (ak.init(e, t), uC.init(e, t));
    });
    function sV(e, t) {
      return new sK({ type: 'template_literal', parts: e, ...uI.normalizeParams(t) });
    }
    let sX = n7('ZodLazy', (e, t) => {
      (aw.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.getter()));
    });
    function sY(e) {
      return new sX({ type: 'lazy', getter: e });
    }
    let sq = n7('ZodPromise', (e, t) => {
      (aS.init(e, t), uC.init(e, t), (e.unwrap = () => e._zod.def.innerType));
    });
    function sH(e) {
      return new sq({ type: 'promise', innerType: e });
    }
    let sQ = n7('ZodFunction', (e, t) => {
      (aI.init(e, t), uC.init(e, t));
    });
    function s0(e) {
      var t, n;
      return new sQ({
        type: 'function',
        input: Array.isArray(null == e ? void 0 : e.input)
          ? su(null == e ? void 0 : e.input)
          : null != (t = null == e ? void 0 : e.input)
            ? t
            : c2(cY()),
        output: null != (n = null == e ? void 0 : e.output) ? n : cY(),
      });
    }
    let s4 = n7('ZodCustom', (e, t) => {
      (ax.init(e, t), uC.init(e, t));
    });
    function s6(e) {
      let t = new rA({ check: 'custom' });
      return ((t._zod.check = e), t);
    }
    function s1(e, t) {
      return ud(s4, null != e ? e : () => !0, t);
    }
    function s2(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return um(s4, e, t);
    }
    function s9(e) {
      return uf(e);
    }
    function s3(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { error: 'Input not instance of '.concat(e.name) },
        n = new s4({
          type: 'custom',
          check: 'custom',
          fn: (t) => t instanceof e,
          abort: !0,
          ...uI.normalizeParams(t),
        });
      return ((n._zod.bag.Class = e), n);
    }
    let s8 = function () {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return uv({ Codec: sM, Boolean: cE, String: uL }, ...t);
    };
    function s5(e) {
      let t = sY(() => st([uJ(e), cZ(), c$(), cG(), c2(t), ss(uJ(), t)]));
      return t;
    }
    function s7(e, t) {
      return sF(sS(e), t);
    }
    let le = n7('ZodISODateTime', (e, t) => {
      (iv.init(e, t), uF.init(e, t));
    });
    function lt(e) {
      return a3(le, e);
    }
    let ln = n7('ZodISODate', (e, t) => {
      (ig.init(e, t), uF.init(e, t));
    });
    function lr(e) {
      return a8(ln, e);
    }
    let li = n7('ZodISOTime', (e, t) => {
      (ih.init(e, t), uF.init(e, t));
    });
    function la(e) {
      return a5(li, e);
    }
    let lo = n7('ZodISODuration', (e, t) => {
      (i_.init(e, t), uF.init(e, t));
    });
    function lu(e) {
      return a7(lo, e);
    }
    var lc = e.i(74509);
    function ls(e) {
      return aT(uL, e);
    }
    function ll(e) {
      return ot(cz, e);
    }
    function ld(e) {
      return oc(cE, e);
    }
    function lm(e) {
      return ol(cT, e);
    }
    function lf(e) {
      return ok(c4, e);
    }
    e.s(
      [
        'bigint',
        () => lm,
        'boolean',
        () => ld,
        'date',
        () => lf,
        'number',
        () => ll,
        'string',
        () => ls,
      ],
      80588
    );
    var lp = e.i(80588);
    (ri(nw()), e.i(39499));
    var lv = ub;
    (e.i(98439),
      e.s(
        [
          'endsWith',
          () => oM,
          'gt',
          () => ox,
          'gte',
          () => oz,
          'includes',
          () => oJ,
          'length',
          () => oA,
          'lowercase',
          () => oR,
          'lt',
          () => oS,
          'lte',
          () => ow,
          'maxLength',
          () => o$,
          'maxSize',
          () => oD,
          'mime',
          () => oW,
          'minLength',
          () => oT,
          'minSize',
          () => oP,
          'multipleOf',
          () => oj,
          'negative',
          () => oU,
          'nonnegative',
          () => oN,
          'nonpositive',
          () => oO,
          'normalize',
          () => oK,
          'overwrite',
          () => oG,
          'positive',
          () => oZ,
          'property',
          () => oB,
          'regex',
          () => oC,
          'size',
          () => oE,
          'startsWith',
          () => oF,
          'toLowerCase',
          () => oX,
          'toUpperCase',
          () => oY,
          'trim',
          () => oV,
          'uppercase',
          () => oL,
        ],
        91909
      ),
      e.s([], 73210),
      e.i(73210),
      e.i(91909),
      e.i(34986),
      e.i(67315),
      e.s(
        [
          '$brand',
          () => re,
          'ZodFirstPartyTypeKind',
          () => n,
          'ZodIssueCode',
          () => lg,
          'config',
          () => ri,
          'getErrorMap',
          () => l_,
          'setErrorMap',
          () => lh,
        ],
        41688
      ),
      e.s(
        [
          'ZodFirstPartyTypeKind',
          () => n,
          'ZodIssueCode',
          () => lg,
          'getErrorMap',
          () => l_,
          'setErrorMap',
          () => lh,
        ],
        42770
      ));
    let lg = {
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
    function lh(e) {
      ri({ customError: e });
    }
    function l_() {
      return ri().customError;
    }
    (n || (n = {}), e.i(42770), e.i(41688));
    var uk = nv,
      uI = th,
      ly = n3,
      lb = lc,
      lk = lp,
      lI = e.i(48969),
      lI = lI;
    let lS = (function (e) {
        let t = 'object' == typeof e.client ? e.client : {},
          n = 'object' == typeof e.server ? e.server : {},
          r = e.shared,
          i = e.runtimeEnv ? e.runtimeEnv : { ...e_.default.env, ...e.experimental__runtimeEnv };
        return (function (e) {
          var t, n, r, i, a, o, u, c, s;
          let l =
            null != (r = null != (n = e.runtimeEnvStrict) ? n : e.runtimeEnv) ? r : e_.default.env;
          if (null != (i = e.emptyStringAsUndefined) && i)
            for (let [e, t] of Object.entries(l)) '' === t && delete l[e];
          if (e.skipValidation) return l;
          let d = 'object' == typeof e.client ? e.client : {},
            m = 'object' == typeof e.server ? e.server : {},
            f = 'object' == typeof e.shared ? e.shared : {},
            p = null != (a = e.isServer) ? a : 'undefined' == typeof window || 'Deno' in window,
            v = p ? { ...m, ...f, ...d } : { ...d, ...f },
            g =
              null !=
              (o =
                null == (t = e.createFinalSchema)
                  ? void 0
                  : t.call(e, v, p)['~standard'].validate(l))
                ? o
                : (function (e, t) {
                    let n = {},
                      r = [];
                    for (let i in e) {
                      let a = e[i]['~standard'].validate(t[i]);
                      if (
                        (ey(
                          a,
                          'Validation must be synchronous, but '.concat(i, ' returned a Promise.')
                        ),
                        a.issues)
                      ) {
                        r.push(
                          ...a.issues.map((e) => {
                            var t;
                            return {
                              ...e,
                              message: e.message,
                              path: [i, ...(null != (t = e.path) ? t : [])],
                            };
                          })
                        );
                        continue;
                      }
                      n[i] = a.value;
                    }
                    return r.length ? { issues: r } : { value: n };
                  })(v, l);
          ey(g, 'Validation must be synchronous');
          let h =
              null != (u = e.onValidationError)
                ? u
                : (e) => {
                    throw (
                      console.error('❌ Invalid environment variables:', e),
                      Error('Invalid environment variables')
                    );
                  },
            _ =
              null != (c = e.onInvalidAccess)
                ? c
                : () => {
                    throw Error(
                      '❌ Attempted to access a server-side environment variable on the client'
                    );
                  };
          return g.issues
            ? h(g.issues)
            : new Proxy(
                Object.assign(
                  (null != (s = e.extends) ? s : []).reduce((e, t) => Object.assign(e, t), {}),
                  g.value
                ),
                {
                  get(t, n) {
                    if ('string' == typeof n && '__esModule' !== n && '$$typeof' !== n)
                      return p || (e.clientPrefix && (n.startsWith(e.clientPrefix) || n in f))
                        ? Reflect.get(t, n)
                        : _(n);
                  },
                }
              );
        })({ ...e, shared: r, client: t, server: n, clientPrefix: 'NEXT_PUBLIC_', runtimeEnv: i });
      })({
        server: {
          NODE_ENV: lI.enum(['development', 'test', 'production']).default('development'),
          SENTRY_DSN: lI.string().url().optional(),
          SENTRY_ORG: lI.string().optional(),
          SENTRY_PROJECT: lI.string().optional(),
          DATABASE_URL: lI.string().url().optional(),
          SUPABASE_URL: lI.string().url().optional(),
          SUPABASE_ANON_KEY: lI.string().min(1).optional(),
          STRIPE_WEBHOOK_SECRET: lI.string().optional(),
        },
        client: {
          NEXT_PUBLIC_APP_NAME: lI.string().default('DL Starter'),
          NEXT_PUBLIC_POSTHOG_KEY: lI.string().optional(),
          NEXT_PUBLIC_SENTRY_DSN: lI.string().url().optional(),
        },
        runtimeEnv: {
          NODE_ENV: 'production',
          SENTRY_DSN: e_.default.env.SENTRY_DSN,
          SENTRY_ORG: e_.default.env.SENTRY_ORG,
          SENTRY_PROJECT: e_.default.env.SENTRY_PROJECT,
          DATABASE_URL: e_.default.env.DATABASE_URL,
          SUPABASE_URL: e_.default.env.SUPABASE_URL,
          SUPABASE_ANON_KEY: e_.default.env.SUPABASE_ANON_KEY,
          STRIPE_WEBHOOK_SECRET: e_.default.env.STRIPE_WEBHOOK_SECRET,
          NEXT_PUBLIC_APP_NAME: e_.default.env.NEXT_PUBLIC_APP_NAME,
          NEXT_PUBLIC_POSTHOG_KEY: e_.default.env.NEXT_PUBLIC_POSTHOG_KEY,
          NEXT_PUBLIC_SENTRY_DSN: e_.default.env.NEXT_PUBLIC_SENTRY_DSN,
        },
        emptyStringAsUndefined: !0,
      }),
      lw =
        lS.SENTRY_DSN || lS.NEXT_PUBLIC_SENTRY_DSN
          ? new (class {
              captureException(e, t) {
                $((n) => {
                  ((null == t ? void 0 : t.user) && n.setUser(t.user),
                    (null == t ? void 0 : t.tags) && n.setTags(t.tags),
                    (null == t ? void 0 : t.level) && n.setLevel(t.level),
                    (null == t ? void 0 : t.extra) && n.setExtras(t.extra),
                    'string' == typeof e ? el(Error(e)) : el(e));
                });
              }
              captureMessage(e, t) {
                $((n) => {
                  ((null == t ? void 0 : t.user) && n.setUser(t.user),
                    (null == t ? void 0 : t.tags) && n.setTags(t.tags),
                    (null == t ? void 0 : t.level) && n.setLevel(t.level),
                    (null == t ? void 0 : t.extra) && n.setExtras(t.extra),
                    (function (e, t) {
                      let n = 'string' == typeof t ? t : void 0,
                        r = 'string' != typeof t ? { captureContext: t } : void 0;
                      P().captureMessage(e, n, r);
                    })(e, (null == t ? void 0 : t.level) || 'info'));
                });
              }
              setUser(e) {
                E().setUser(e);
              }
              addBreadcrumb(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'custom',
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'info';
                !(function (e, t) {
                  let n = T(),
                    r = E();
                  if (!n) return;
                  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = 100 } = n.getOptions();
                  if (a <= 0) return;
                  let o = { timestamp: k(), ...e },
                    u = i ? v(() => i(o, void 0)) : o;
                  null !== u &&
                    (n.emit && n.emit('beforeAddBreadcrumb', u, void 0), r.addBreadcrumb(u, a));
                })({ message: e, category: t, level: n, timestamp: Date.now() / 1e3 });
              }
              startTransaction(e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'navigation';
                return {
                  finish: () =>
                    (function (e, t) {
                      let n = D(o());
                      if (n.startSpan) return n.startSpan(e, t);
                      let r = (function (e) {
                          let t = { isStandalone: (e.experimental || {}).standalone, ...e };
                          if (e.startTime) {
                            let n = { ...t };
                            return ((n.startTimestamp = H(e.startTime)), delete n.startTime, n);
                          }
                          return t;
                        })(e),
                        { forceTransaction: i, parentSpan: a, scope: u } = e;
                      return $(null == u ? void 0 : u.clone(), () => {
                        var n;
                        return (
                          void 0 !== (n = a)
                            ? (e) =>
                                (function (e, t) {
                                  let n = D(o());
                                  return n.withActiveSpan
                                    ? n.withActiveSpan(e, t)
                                    : $((n) => (x(n, e || void 0), t(n)));
                                })(n, e)
                            : (e) => e()
                        )(() => {
                          let n = P(),
                            o = (function (e, t) {
                              if (t) return t;
                              if (null === t) return;
                              let n = e[w];
                              if (!n) return;
                              let r = T();
                              return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan
                                ? eo(n)
                                : n;
                            })(n, a),
                            u =
                              e.onlyIfParent && !o
                                ? new ed()
                                : (function (e) {
                                    var t;
                                    let n,
                                      {
                                        parentSpan: r,
                                        spanArguments: i,
                                        forceTransaction: a,
                                        scope: o,
                                      } = e;
                                    if (!W()) {
                                      let e = new ed();
                                      if (a || !r) {
                                        let t = {
                                          sampled: 'false',
                                          sample_rate: '0',
                                          transaction: i.name,
                                          ...ec(e),
                                        };
                                        y(e, eu, t);
                                      }
                                      return e;
                                    }
                                    let u = E();
                                    if (r && !a)
                                      ((n = (function (e, t, n) {
                                        let { spanId: r, traceId: i } = e.spanContext(),
                                          a = !t.getScopeData().sdkProcessingMetadata[eg] && et(e),
                                          o = a
                                            ? new ef({
                                                ...n,
                                                parentSpanId: r,
                                                traceId: i,
                                                sampled: a,
                                              })
                                            : new ed({ traceId: i });
                                        ea(e, o);
                                        let u = T();
                                        return (
                                          u &&
                                            (u.emit('spanStart', o),
                                            n.endTimestamp && u.emit('spanEnd', o)),
                                          o
                                        );
                                      })(r, o, i)),
                                        ea(r, n));
                                    else if (r) {
                                      let e = ec(r),
                                        { traceId: t, spanId: a } = r.spanContext(),
                                        u = et(r);
                                      y(
                                        (n = eh({ traceId: t, parentSpanId: a, ...i }, o, u)),
                                        eu,
                                        e
                                      );
                                    } else {
                                      let {
                                        traceId: e,
                                        dsc: t,
                                        parentSpanId: r,
                                        sampled: a,
                                      } = {
                                        ...u.getPropagationContext(),
                                        ...o.getPropagationContext(),
                                      };
                                      ((n = eh({ traceId: e, parentSpanId: r, ...i }, o, a)),
                                        t && y(n, eu, t));
                                    }
                                    return (
                                      !(function (e) {
                                        if (!s) return;
                                        let {
                                            description: t = '< unknown name >',
                                            op: n = '< unknown op >',
                                            parent_span_id: r,
                                          } = ee(e),
                                          { spanId: i } = e.spanContext(),
                                          a = et(e),
                                          o = eo(e),
                                          u = o === e,
                                          c = '[Tracing] Starting '
                                            .concat(a ? 'sampled' : 'unsampled', ' ')
                                            .concat(u ? 'root ' : '', 'span'),
                                          l = [
                                            'op: '.concat(n),
                                            'name: '.concat(t),
                                            'ID: '.concat(i),
                                          ];
                                        if ((r && l.push('parent ID: '.concat(r)), !u)) {
                                          let { op: e, description: t } = ee(o);
                                          (l.push('root ID: '.concat(o.spanContext().spanId)),
                                            e && l.push('root op: '.concat(e)),
                                            t && l.push('root description: '.concat(t)));
                                        }
                                        h.log(''.concat(c, '\n  ').concat(l.join('\n  ')));
                                      })(n),
                                      (t = n) && (y(t, K, u), y(t, G, o)),
                                      n
                                    );
                                  })({
                                    parentSpan: o,
                                    spanArguments: r,
                                    forceTransaction: i,
                                    scope: n,
                                  });
                          return (
                            x(n, u),
                            (function (e, t) {
                              var n, r, i;
                              let a,
                                o =
                                  arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : () => {};
                              try {
                                a = e();
                              } catch (e) {
                                throw (t(e), o(), e);
                              }
                              return (
                                (n = a),
                                (r = t),
                                (i = o),
                                f(n)
                                  ? n.then(
                                      (e) => (i(), e),
                                      (e) => {
                                        throw (r(e), i(), e);
                                      }
                                    )
                                  : (i(), n)
                              );
                            })(
                              () => t(u),
                              () => {
                                let { status: e } = ee(u);
                                u.isRecording() &&
                                  (!e || 'ok' === e) &&
                                  u.setStatus({ code: 2, message: 'internal_error' });
                              },
                              () => {
                                u.end();
                              }
                            )
                          );
                        });
                      });
                    })({ name: e, op: t }, () => {}),
                };
              }
            })()
          : new (class {
              captureException() {}
              captureMessage() {}
              setUser() {}
              addBreadcrumb() {}
              startTransaction() {
                return { finish: () => {} };
              }
            })(),
      lx = { features: { billing: !1, orgs: !1, ai: !1, monitoring: !0 } };
    function lz() {
      return lx.features.monitoring
        ? (0, r.jsxs)('div', {
            className: 'container py-8 space-y-6',
            children: [
              (0, r.jsx)('h1', { className: 'text-2xl font-bold', children: 'Test Monitoring' }),
              (0, r.jsx)('p', {
                className: 'text-muted-foreground',
                children: 'Test error reporting and monitoring functionality.',
              }),
              (0, r.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, r.jsx)('button', {
                    onClick: () => {
                      try {
                        throw Error('Test client-side error');
                      } catch (e) {
                        lw.captureException(e, {
                          tags: { source: 'test-page', type: 'client' },
                          level: 'error',
                        });
                      }
                    },
                    className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
                    children: 'Test Handled Error',
                  }),
                  (0, r.jsx)('button', {
                    onClick: () => {
                      lw.captureMessage('Test monitoring message', {
                        tags: { source: 'test-page', type: 'info' },
                        level: 'info',
                      });
                    },
                    className: 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600',
                    children: 'Test Info Message',
                  }),
                  (0, r.jsx)('button', {
                    onClick: () => {
                      throw Error('Uncaught test error');
                    },
                    className: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600',
                    children: 'Test Uncaught Error',
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded',
                children: [
                  (0, r.jsx)('h2', { className: 'font-semibold mb-2', children: 'Instructions:' }),
                  (0, r.jsxs)('ol', {
                    className: 'list-decimal list-inside space-y-1 text-sm',
                    children: [
                      (0, r.jsx)('li', {
                        children: 'Set NEXT_PUBLIC_SENTRY_DSN in your .env.local',
                      }),
                      (0, r.jsx)('li', {
                        children: 'Click the buttons above to test error reporting',
                      }),
                      (0, r.jsx)('li', {
                        children: 'Check your Sentry dashboard for captured events',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : (0, r.jsxs)('div', {
            className: 'container py-8',
            children: [
              (0, r.jsx)('h1', {
                className: 'text-2xl font-bold mb-4',
                children: 'Monitoring Disabled',
              }),
              (0, r.jsx)('p', {
                children: 'Enable monitoring in app.config.ts to test error reporting.',
              }),
            ],
          });
    }
  },
]);

//# sourceMappingURL=3c4db6a5f5dbb9f4.js.map
