import gu from "react-dom";
import * as D from "react";
import qe from "react";
var ne, J = gu;
if (process.env.NODE_ENV === "production")
  ne = J.createRoot, J.hydrateRoot;
else {
  var ze = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ne = function(l, f) {
    ze.usingClientEntryPoint = !0;
    try {
      return J.createRoot(l, f);
    } finally {
      ze.usingClientEntryPoint = !1;
    }
  };
}
var G = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function hu() {
  if (Pe)
    return I;
  Pe = 1;
  var l = qe, f = Symbol.for("react.element"), y = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, w = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(R, b, k) {
    var d, E = {}, T = null, W = null;
    k !== void 0 && (T = "" + k), b.key !== void 0 && (T = "" + b.key), b.ref !== void 0 && (W = b.ref);
    for (d in b)
      g.call(b, d) && !x.hasOwnProperty(d) && (E[d] = b[d]);
    if (R && R.defaultProps)
      for (d in b = R.defaultProps, b)
        E[d] === void 0 && (E[d] = b[d]);
    return { $$typeof: f, type: R, key: T, ref: W, props: E, _owner: w.current };
  }
  return I.Fragment = y, I.jsx = _, I.jsxs = _, I;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Eu() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var l = qe, f = Symbol.for("react.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), R = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ae = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var u = ie && e[ie] || e[Ae];
      return typeof u == "function" ? u : null;
    }
    var F = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var u = arguments.length, r = new Array(u > 1 ? u - 1 : 0), t = 1; t < u; t++)
          r[t - 1] = arguments[t];
        Ie("error", e, r);
      }
    }
    function Ie(e, u, r) {
      {
        var t = F.ReactDebugCurrentFrame, a = t.getStackAddendum();
        a !== "" && (u += "%s", r = r.concat([a]));
        var i = r.map(function(o) {
          return String(o);
        });
        i.unshift("Warning: " + u), Function.prototype.apply.call(console[e], console, i);
      }
    }
    var Ne = !1, Le = !1, We = !1, $e = !1, Me = !1, se;
    se = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === x || Me || e === w || e === k || e === d || $e || e === W || Ne || Le || We || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === R || e.$$typeof === b || e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ue(e, u, r) {
      var t = e.displayName;
      if (t)
        return t;
      var a = u.displayName || u.name || "";
      return a !== "" ? r + "(" + a + ")" : r;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case y:
          return "Portal";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case k:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var u = e;
            return le(u) + ".Consumer";
          case _:
            var r = e;
            return le(r._context) + ".Provider";
          case b:
            return Ue(e, e.render, "ForwardRef");
          case E:
            var t = e.displayName || null;
            return t !== null ? t : C(e.type) || "Memo";
          case T: {
            var a = e, i = a._payload, o = a._init;
            try {
              return C(o(i));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, ce, fe, de, be, pe, me, ve;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ve() {
      {
        if (A === 0) {
          ce = console.log, fe = console.info, de = console.warn, be = console.error, pe = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Je() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ce
            }),
            info: O({}, e, {
              value: fe
            }),
            warn: O({}, e, {
              value: de
            }),
            error: O({}, e, {
              value: be
            }),
            group: O({}, e, {
              value: pe
            }),
            groupCollapsed: O({}, e, {
              value: me
            }),
            groupEnd: O({}, e, {
              value: ve
            })
          });
        }
        A < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = F.ReactCurrentDispatcher, X;
    function $(e, u, r) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            X = t && t[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Q = !1, M;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      M = new He();
    }
    function he(e, u) {
      if (!e || Q)
        return "";
      {
        var r = M.get(e);
        if (r !== void 0)
          return r;
      }
      var t;
      Q = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      i = K.current, K.current = null, Ve();
      try {
        if (u) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (S) {
              t = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              t = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            t = S;
          }
          e();
        }
      } catch (S) {
        if (S && t && typeof S.stack == "string") {
          for (var n = S.stack.split(`
`), m = t.stack.split(`
`), s = n.length - 1, c = m.length - 1; s >= 1 && c >= 0 && n[s] !== m[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (n[s] !== m[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || n[s] !== m[c]) {
                    var h = `
` + n[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, h), h;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = i, Je(), Error.prepareStackTrace = a;
      }
      var P = e ? e.displayName || e.name : "", Fe = P ? $(P) : "";
      return typeof e == "function" && M.set(e, Fe), Fe;
    }
    function Ge(e, u, r) {
      return he(e, !1);
    }
    function Ke(e) {
      var u = e.prototype;
      return !!(u && u.isReactComponent);
    }
    function Y(e, u, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ke(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case k:
          return $("Suspense");
        case d:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ge(e.render);
          case E:
            return Y(e.type, u, r);
          case T: {
            var t = e, a = t._payload, i = t._init;
            try {
              return Y(i(a), u, r);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Ee = {}, we = F.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var u = e._owner, r = Y(e.type, e._source, u ? u.type : null);
        we.setExtraStackFrame(r);
      } else
        we.setExtraStackFrame(null);
    }
    function Xe(e, u, r, t, a) {
      {
        var i = Function.call.bind(U);
        for (var o in e)
          if (i(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((t || "React class") + ": " + r + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              n = e[o](u, o, t, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              n = s;
            }
            n && !(n instanceof Error) && (V(a), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", r, o, typeof n), V(null)), n instanceof Error && !(n.message in Ee) && (Ee[n.message] = !0, V(a), p("Failed %s type: %s", r, n.message), V(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Z(e) {
      return Qe(e);
    }
    function Ze(e) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, r = u && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function eu(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function xe(e) {
      if (eu(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), ye(e);
    }
    var B = F.ReactCurrentOwner, uu = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Re, ee;
    ee = {};
    function ru(e) {
      if (U.call(e, "ref")) {
        var u = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tu(e) {
      if (U.call(e, "key")) {
        var u = Object.getOwnPropertyDescriptor(e, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nu(e, u) {
      if (typeof e.ref == "string" && B.current && u && B.current.stateNode !== u) {
        var r = C(B.current.type);
        ee[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), e.ref), ee[r] = !0);
      }
    }
    function ou(e, u) {
      {
        var r = function() {
          _e || (_e = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function au(e, u) {
      {
        var r = function() {
          Re || (Re = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var iu = function(e, u, r, t, a, i, o) {
      var n = {
        $$typeof: f,
        type: e,
        key: u,
        ref: r,
        props: o,
        _owner: i
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function su(e, u, r, t, a) {
      {
        var i, o = {}, n = null, m = null;
        r !== void 0 && (xe(r), n = "" + r), tu(u) && (xe(u.key), n = "" + u.key), ru(u) && (m = u.ref, nu(u, a));
        for (i in u)
          U.call(u, i) && !uu.hasOwnProperty(i) && (o[i] = u[i]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (i in s)
            o[i] === void 0 && (o[i] = s[i]);
        }
        if (n || m) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && ou(o, c), m && au(o, c);
        }
        return iu(e, n, m, a, t, B.current, o);
      }
    }
    var ue = F.ReactCurrentOwner, Ce = F.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var u = e._owner, r = Y(e.type, e._source, u ? u.type : null);
        Ce.setExtraStackFrame(r);
      } else
        Ce.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Se() {
      {
        if (ue.current) {
          var e = C(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lu(e) {
      {
        if (e !== void 0) {
          var u = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + u + ":" + r + ".";
        }
        return "";
      }
    }
    var ke = {};
    function cu(e) {
      {
        var u = Se();
        if (!u) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (u = `

Check the top-level render call using <` + r + ">.");
        }
        return u;
      }
    }
    function De(e, u) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = cu(u);
        if (ke[r])
          return;
        ke[r] = !0;
        var t = "";
        e && e._owner && e._owner !== ue.current && (t = " It was passed a child from " + C(e._owner.type) + "."), z(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, t), z(null);
      }
    }
    function Te(e, u) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var r = 0; r < e.length; r++) {
            var t = e[r];
            te(t) && De(t, u);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var a = Be(e);
          if (typeof a == "function" && a !== e.entries)
            for (var i = a.call(e), o; !(o = i.next()).done; )
              te(o.value) && De(o.value, u);
        }
      }
    }
    function fu(e) {
      {
        var u = e.type;
        if (u == null || typeof u == "string")
          return;
        var r;
        if (typeof u == "function")
          r = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === b || u.$$typeof === E))
          r = u.propTypes;
        else
          return;
        if (r) {
          var t = C(u);
          Xe(r, e.props, "prop", t, e);
        } else if (u.PropTypes !== void 0 && !re) {
          re = !0;
          var a = C(u);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function du(e) {
      {
        for (var u = Object.keys(e.props), r = 0; r < u.length; r++) {
          var t = u[r];
          if (t !== "children" && t !== "key") {
            z(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Oe(e, u, r, t, a, i) {
      {
        var o = Ye(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = lu(a);
          m ? n += m : n += Se();
          var s;
          e === null ? s = "null" : Z(e) ? s = "array" : e !== void 0 && e.$$typeof === f ? (s = "<" + (C(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, n);
        }
        var c = su(e, u, r, a, i);
        if (c == null)
          return c;
        if (o) {
          var h = u.children;
          if (h !== void 0)
            if (t)
              if (Z(h)) {
                for (var P = 0; P < h.length; P++)
                  Te(h[P], e);
                Object.freeze && Object.freeze(h);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(h, e);
        }
        return e === g ? du(c) : fu(c), c;
      }
    }
    function bu(e, u, r) {
      return Oe(e, u, r, !0);
    }
    function pu(e, u, r) {
      return Oe(e, u, r, !1);
    }
    var mu = pu, vu = bu;
    N.Fragment = g, N.jsx = mu, N.jsxs = vu;
  }()), N;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = hu() : l.exports = Eu();
})(G);
const wu = G.exports.Fragment, v = G.exports.jsx, L = G.exports.jsxs, yu = ({
  destroyModal: l
}) => /* @__PURE__ */ v("button", {
  onClick: l,
  className: "w3bb-quiz-modal-close-button",
  id: "w3bb-quiz-modal-close-button",
  children: /* @__PURE__ */ v("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1792 1792",
    children: /* @__PURE__ */ v("path", {
      fill: "#f00",
      d: "M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
    })
  })
}), xu = D.memo(yu), j = {
  welcomeText: "\u041F\u0440\u0438\u0432\u0435\u0442! \u0421\u0435\u0439\u0447\u0430\u0441 \u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438.",
  welcomeButton: "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C",
  scenes: [{
    id: 1,
    question: "\u0412\u0430\u043C \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0434\u0438\u0437\u0430\u0439\u043D \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C?",
    answers: [{
      id: 1,
      text: "\u0414\u0430, \u0432\u043F\u043E\u043B\u043D\u0435!"
    }, {
      id: 2,
      text: "\u041D\u0435\u0442, \u043C\u043D\u0435 \u0442\u0430\u043A \u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F."
    }, {
      id: 3,
      text: "\u0411\u0435\u0437 \u043F\u043E\u043D\u044F\u0442\u043D\u0438\u044F..."
    }]
  }, {
    id: 2,
    question: "\u0423\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043B\u0438 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441?",
    answers: [{
      id: 1,
      text: "\u0411\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u043D\u043E \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0431\u044B \u0431\u043E\u043B\u044C\u0448\u0435!"
    }, {
      id: 2,
      text: "\u0421\u0440\u0435\u0434\u043D\u0435. \u0417\u0430\u044F\u0432\u043E\u043A \u043C\u0430\u043B\u043E."
    }, {
      id: 3,
      text: "\u041C\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442."
    }]
  }, {
    id: 3,
    question: "\u0423\u0432\u0435\u0440\u0435\u043D\u044B \u043B\u0438 \u0412\u044B, \u0447\u0442\u043E \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?",
    answers: [{
      id: 1,
      text: "\u0414\u0430, \u044F \u0437\u043D\u0430\u044E \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0447\u043D\u043E!"
    }, {
      id: 2,
      text: "\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D. \u041F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432\u0441\u0435 \u043F\u043E\u0434\u0440\u044F\u0434."
    }, {
      id: 3,
      text: "\u0414\u043B\u044F \u043C\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u044D\u0442\u043E \u043D\u0435 \u0432\u0430\u0436\u043D\u043E."
    }]
  }, {
    id: 4,
    question: "\u0425\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u0412\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?",
    answers: [{
      id: 1,
      text: "\u0415\u0441\u0442\u0435\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E! \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0436\u0435!"
    }, {
      id: 2,
      text: "\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438?"
    }, {
      id: 3,
      text: "\u041A\u0430\u043A\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?"
    }]
  }]
}, _u = () => {
  const [l, f] = D.useState(0), [y, g] = D.useState([]), [w, x] = D.useState(!1), [_, R] = D.useState(!0);
  D.useEffect(() => {
    w && console.log(y);
  }, [w]), D.useEffect(() => () => {
    g([]), f(0), x(!1);
  }, []);
  const b = () => {
    R(!1);
  }, k = (d) => {
    if (g(() => [...y, {
      q: j.scenes[l].question,
      a: d
    }]), l === j.scenes.length - 1) {
      x(!0);
      return;
    }
    f((E) => E + 1);
  };
  return _ ? /* @__PURE__ */ L("div", {
    className: "w3bb-quiz-welcome_screen",
    children: [/* @__PURE__ */ v("h1", {
      children: j.welcomeText
    }), /* @__PURE__ */ v("button", {
      className: "w3bb-quiz-welcome_button",
      onClick: b,
      children: j.welcomeButton
    }, 1)]
  }) : w ? /* @__PURE__ */ L("div", {
    className: "w3bb-quiz-success_screen",
    children: [/* @__PURE__ */ v("h1", {
      children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}"
    }), /* @__PURE__ */ v("p", {
      children: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!"
    })]
  }) : /* @__PURE__ */ L(wu, {
    children: [/* @__PURE__ */ v("h1", {
      children: j.scenes[l].question
    }), /* @__PURE__ */ v("div", {
      className: "w3bb-quiz-answers",
      children: j.scenes[l].answers.map((d) => /* @__PURE__ */ v("button", {
        className: "w3bb-quiz-answer-button",
        onClick: () => k(d.text),
        children: d.text
      }, d.id))
    })]
  });
}, Ru = D.memo(_u), Cu = ({
  id: l,
  destroyModal: f
}) => (console.log("PROJECT_ID: ", l), /* @__PURE__ */ L("div", {
  className: "w3bb-quiz-modal-body",
  children: [/* @__PURE__ */ v("div", {
    className: "w3bb-quiz-modal-image"
  }), /* @__PURE__ */ v(xu, {
    destroyModal: f
  }), /* @__PURE__ */ v("div", {
    className: "w3bb-quiz-modal-main",
    children: /* @__PURE__ */ v(Ru, {})
  }), /* @__PURE__ */ L("span", {
    className: "w3bb-quiz-modal-copyright",
    children: ["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432", /* @__PURE__ */ v("a", {
      href: "https://w3bb.ru",
      target: "_blank",
      rel: "noreferrer noopener",
      children: "W3BB"
    })]
  })]
})), q = document.createElement("div");
q.classList.add("w3bb-quiz-modal-overlay");
const Su = document.createElement("div");
Su.classList.add("w3bb-quiz-modal-body");
const ku = ne(q);
async function Du({ visibleToggler: l }) {
  let f = !1;
  const y = l.dataset.w3bbId;
  if (!y)
    throw new Error(
      "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id."
    );
  const g = () => {
    document.body.removeChild(q), f = !1;
  }, w = () => {
    document.body.appendChild(q), ku.render(Cu({ id: y, destroyModal: g }));
  }, x = () => {
    switch (f = !f, f) {
      case !0:
        w();
        return;
      case !1:
        f = !1, g();
        return;
      default:
        return;
    }
  };
  q.addEventListener("click", (_) => {
    _.target === q && (f = !1, g());
  }), l.addEventListener("click", () => x());
}
const Tu = `
.w3bb-widget-wrapper {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 1em;
    right: 1em;
    padding: 12px 18px;
    background: #fc0;
    border-radius: 4px;
    transition: all .05s;
    z-index: 999;
}
.w3bb-widget-wrapper span {
    display: block;
    font-size: 14px;
    font-weight: 500;
}
.w3bb-widget-wrapper:hover {
    cursor: pointer;
    background: #fd0;
}
`, Ou = `
.w3bb-quiz-modal-overlay {
    position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	min-height: 100vh;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(185 185 185 / 50%);
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
	z-index: 999;
}
.w3bb-quiz-modal-body {
    position: relative;
    width: 640px;
    height: auto;
    max-height: 100%;
    padding: 1em;
    border-radius: 4px;
    background: #fff;
    color: #000;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: rgb(0 0 0 / 8%) 0px 3.9px 4.6px, rgb(0 0 0 / 6%) 0px 12.3px 8.4px, rgb(0 0 0 / 4%) 0px 18.8px 19.2px, rgb(0 0 0 / 2%) 0px 22px 40px;
}
.w3bb-quiz-modal-image {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 36px;
    background-size: cover;
    background-position: center;
    // background-image: url('https://catherineasquithgallery.com/uploads/posts/2021-02/1613307402_31-p-sinii-kiber-fon-39.jpg');
}
.w3bb-quiz-modal-close-button {
    position: absolute;
    right: 1em;
    top: 1em;
    background: transparent;
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    opacity: 0.5;
    z-index: 9999;
}
.w3bb-quiz-modal-close-button:hover {
    opacity: 1;
    cursor: pointer;
}
.w3bb-quiz-modal-main {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2em 42px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: center;
    height: 100%;
}
.w3bb-quiz-modal-main h1, .w3bb-quiz-modal-main h2, .w3bb-quiz-modal-main h3 {
    margin-top: 0;
    font-size: 1.25em;
}
.w3bb-quiz-modal-main--item {
    position: relative;
    margin-bottom: 1em;
}
.w3bb-quiz-modal-copyright {
    position: fixed;
    bottom: 8px;
    right: 12px;
    font-size: 8px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
}
.w3bb-quiz-modal-copyright a {
    color: #fff;
    text-decoration: none;
}
.w3bb-quiz-answers {
    margin-top: 24px;
}
.w3bb-quiz-answer-button {
    display: block;
    width: 100%;
    padding: 16px;
    border: none;
    background: #efefef;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 12px;
    color: #000;
    outline: none;
}
.w3bb-quiz-answer-button:last-child {
    margin-bottom: 0;
}
.w3bb-quiz-answer-button:hover {
    cursor: pointer;
    background: #ddd;
}
.w3bb-quiz-success_screen {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
}
.w3bb-quiz-welcome_screen {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
}
.w3bb-quiz-welcome_button {
    width: 100%;
    max-width: 256px;
    padding: 16px;
    border: none;
    background: #fc0;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 12px;
    color: #000;
    outline: none;
}
.w3bb-quiz-welcome_button:hover {
    cursor: pointer;
    background: #fd0;
}
.w3bb-quiz-welcome_screen h1 {
    margin-bottom: 1em;
}
@media screen and (max-width: 512px) {
    .w3bb-quiz-modal-body {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 1em;
        border-radius: 0;
        background: #fff;
        color: #000;
    }
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
	.w3bb-quiz-modal-overlay {
		background-color: rgb(185 185 185 / 50%);
		backdrop-filter: blur(8px);
	}
}

`, Fu = `
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`, H = document.querySelector(
  "#w3bb-widget-toggler"
), oe = document.createElement("div");
oe.id = "w3bb-quiz-root";
document.body.appendChild(oe);
const ae = document.createElement("style");
document.head.appendChild(ae);
ae.appendChild(document.createTextNode(Ou));
H || (ae.appendChild(document.createTextNode(Tu)), oe.innerHTML = Fu);
const zu = document.querySelector(
  "#w3bb-widget-default-toggler"
);
Du({ visibleToggler: H != null ? H : zu });
