var oR = { exports: {} }, Qa = {}, li = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function X4() {
  if (ZC)
    return Et;
  ZC = 1;
  var W = Symbol.for("react.element"), G = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), xt = Symbol.for("react.strict_mode"), zt = Symbol.for("react.profiler"), Ge = Symbol.for("react.provider"), S = Symbol.for("react.context"), Ut = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), te = Symbol.iterator;
  function me(T) {
    return T === null || typeof T != "object" ? null : (T = te && T[te] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, Ct = {};
  function st(T, B, ue) {
    this.props = T, this.context = B, this.refs = Ct, this.updater = ue || ie;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(T, B) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, B, "setState");
  }, st.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = st.prototype;
  function at(T, B, ue) {
    this.props = T, this.context = B, this.refs = Ct, this.updater = ue || ie;
  }
  var We = at.prototype = new fn();
  We.constructor = at, Ve(We, st.prototype), We.isPureReactComponent = !0;
  var ct = Array.isArray, xe = Object.prototype.hasOwnProperty, it = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nn(T, B, ue) {
    var $e, Fe = {}, ht = null, tt = null;
    if (B != null)
      for ($e in B.ref !== void 0 && (tt = B.ref), B.key !== void 0 && (ht = "" + B.key), B)
        xe.call(B, $e) && !He.hasOwnProperty($e) && (Fe[$e] = B[$e]);
    var ft = arguments.length - 2;
    if (ft === 1)
      Fe.children = ue;
    else if (1 < ft) {
      for (var nt = Array(ft), Ft = 0; Ft < ft; Ft++)
        nt[Ft] = arguments[Ft + 2];
      Fe.children = nt;
    }
    if (T && T.defaultProps)
      for ($e in ft = T.defaultProps, ft)
        Fe[$e] === void 0 && (Fe[$e] = ft[$e]);
    return { $$typeof: W, type: T, key: ht, ref: tt, props: Fe, _owner: it.current };
  }
  function wn(T, B) {
    return { $$typeof: W, type: T.type, key: B, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Qt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === W;
  }
  function Dt(T) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ue) {
      return B[ue];
    });
  }
  var En = /\/+/g;
  function Ue(T, B) {
    return typeof T == "object" && T !== null && T.key != null ? Dt("" + T.key) : B.toString(36);
  }
  function Ke(T, B, ue, $e, Fe) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var tt = !1;
    if (T === null)
      tt = !0;
    else
      switch (ht) {
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case W:
            case G:
              tt = !0;
          }
      }
    if (tt)
      return tt = T, Fe = Fe(tt), T = $e === "" ? "." + Ue(tt, 0) : $e, ct(Fe) ? (ue = "", T != null && (ue = T.replace(En, "$&/") + "/"), Ke(Fe, B, ue, "", function(Ft) {
        return Ft;
      })) : Fe != null && (Qt(Fe) && (Fe = wn(Fe, ue + (!Fe.key || tt && tt.key === Fe.key ? "" : ("" + Fe.key).replace(En, "$&/") + "/") + T)), B.push(Fe)), 1;
    if (tt = 0, $e = $e === "" ? "." : $e + ":", ct(T))
      for (var ft = 0; ft < T.length; ft++) {
        ht = T[ft];
        var nt = $e + Ue(ht, ft);
        tt += Ke(ht, B, ue, nt, Fe);
      }
    else if (nt = me(T), typeof nt == "function")
      for (T = nt.call(T), ft = 0; !(ht = T.next()).done; )
        ht = ht.value, nt = $e + Ue(ht, ft++), tt += Ke(ht, B, ue, nt, Fe);
    else if (ht === "object")
      throw B = String(T), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return tt;
  }
  function At(T, B, ue) {
    if (T == null)
      return T;
    var $e = [], Fe = 0;
    return Ke(T, $e, "", "", function(ht) {
      return B.call(ue, ht, Fe++);
    }), $e;
  }
  function Rt(T) {
    if (T._status === -1) {
      var B = T._result;
      B = B(), B.then(function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ue);
      }, function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ue);
      }), T._status === -1 && (T._status = 0, T._result = B);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var ye = { current: null }, Z = { transition: null }, be = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Z, ReactCurrentOwner: it };
  return Et.Children = { map: At, forEach: function(T, B, ue) {
    At(T, function() {
      B.apply(this, arguments);
    }, ue);
  }, count: function(T) {
    var B = 0;
    return At(T, function() {
      B++;
    }), B;
  }, toArray: function(T) {
    return At(T, function(B) {
      return B;
    }) || [];
  }, only: function(T) {
    if (!Qt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Et.Component = st, Et.Fragment = A, Et.Profiler = zt, Et.PureComponent = at, Et.StrictMode = xt, Et.Suspense = ve, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Et.cloneElement = function(T, B, ue) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var $e = Ve({}, T.props), Fe = T.key, ht = T.ref, tt = T._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ht = B.ref, tt = it.current), B.key !== void 0 && (Fe = "" + B.key), T.type && T.type.defaultProps)
        var ft = T.type.defaultProps;
      for (nt in B)
        xe.call(B, nt) && !He.hasOwnProperty(nt) && ($e[nt] = B[nt] === void 0 && ft !== void 0 ? ft[nt] : B[nt]);
    }
    var nt = arguments.length - 2;
    if (nt === 1)
      $e.children = ue;
    else if (1 < nt) {
      ft = Array(nt);
      for (var Ft = 0; Ft < nt; Ft++)
        ft[Ft] = arguments[Ft + 2];
      $e.children = ft;
    }
    return { $$typeof: W, type: T.type, key: Fe, ref: ht, props: $e, _owner: tt };
  }, Et.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: Ge, _context: T }, T.Consumer = T;
  }, Et.createElement = nn, Et.createFactory = function(T) {
    var B = nn.bind(null, T);
    return B.type = T, B;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: Ut, render: T };
  }, Et.isValidElement = Qt, Et.lazy = function(T) {
    return { $$typeof: Qe, _payload: { _status: -1, _result: T }, _init: Rt };
  }, Et.memo = function(T, B) {
    return { $$typeof: pe, type: T, compare: B === void 0 ? null : B };
  }, Et.startTransition = function(T) {
    var B = Z.transition;
    Z.transition = {};
    try {
      T();
    } finally {
      Z.transition = B;
    }
  }, Et.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Et.useCallback = function(T, B) {
    return ye.current.useCallback(T, B);
  }, Et.useContext = function(T) {
    return ye.current.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T) {
    return ye.current.useDeferredValue(T);
  }, Et.useEffect = function(T, B) {
    return ye.current.useEffect(T, B);
  }, Et.useId = function() {
    return ye.current.useId();
  }, Et.useImperativeHandle = function(T, B, ue) {
    return ye.current.useImperativeHandle(T, B, ue);
  }, Et.useInsertionEffect = function(T, B) {
    return ye.current.useInsertionEffect(T, B);
  }, Et.useLayoutEffect = function(T, B) {
    return ye.current.useLayoutEffect(T, B);
  }, Et.useMemo = function(T, B) {
    return ye.current.useMemo(T, B);
  }, Et.useReducer = function(T, B, ue) {
    return ye.current.useReducer(T, B, ue);
  }, Et.useRef = function(T) {
    return ye.current.useRef(T);
  }, Et.useState = function(T) {
    return ye.current.useState(T);
  }, Et.useSyncExternalStore = function(T, B, ue) {
    return ye.current.useSyncExternalStore(T, B, ue);
  }, Et.useTransition = function() {
    return ye.current.useTransition();
  }, Et.version = "18.2.0", Et;
}
var Fm = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function K4() {
  return JC || (JC = 1, function(W, G) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.2.0", xt = Symbol.for("react.element"), zt = Symbol.for("react.portal"), Ge = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ct = Symbol.for("react.offscreen"), st = Symbol.iterator, fn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        current: null
      }, ct = {
        transition: null
      }, xe = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        current: null
      }, He = {}, nn = null;
      function wn(h) {
        nn = h;
      }
      He.setExtraStackFrame = function(h) {
        nn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        nn && (h += nn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, Dt = !1, En = !1, Ue = !1, Ke = !1, At = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: it
      };
      At.ReactDebugCurrentFrame = He, At.ReactCurrentActQueue = xe;
      function Rt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("warn", h, N);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("error", h, N);
        }
      }
      function Z(h, C, N) {
        {
          var F = At.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var Ne = N.map(function(ae) {
            return String(ae);
          });
          Ne.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ne);
        }
      }
      var be = {};
      function T(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", X = F + "." + C;
          if (be[X])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), be[X] = !0;
        }
      }
      var B = {
        isMounted: function(h) {
          return !1;
        },
        enqueueForceUpdate: function(h, C, N) {
          T(h, "forceUpdate");
        },
        enqueueReplaceState: function(h, C, N, F) {
          T(h, "replaceState");
        },
        enqueueSetState: function(h, C, N, F) {
          T(h, "setState");
        }
      }, ue = Object.assign, $e = {};
      Object.freeze($e);
      function Fe(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || B;
      }
      Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Fe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, C) {
          Object.defineProperty(Fe.prototype, h, {
            get: function() {
              Rt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ht)
          ht.hasOwnProperty(ft) && tt(ft, ht[ft]);
      }
      function nt() {
      }
      nt.prototype = Fe.prototype;
      function Ft(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || B;
      }
      var Vr = Ft.prototype = new nt();
      Vr.constructor = Ft, ue(Vr, Fe.prototype), Vr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Pr = Array.isArray;
      function dn(h) {
        return Pr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function An(h) {
        try {
          return Fn(h), !1;
        } catch {
          return !0;
        }
      }
      function Fn(h) {
        return "" + h;
      }
      function xn(h) {
        if (An(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Fn(h);
      }
      function Br(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ge:
            return "Fragment";
          case zt:
            return "Portal";
          case Ut:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return $r(C) + ".Consumer";
            case ve:
              var N = h;
              return $r(N._context) + ".Provider";
            case Qe:
              return Br(h, h.render, "ForwardRef");
            case ie:
              var F = h.displayName || null;
              return F !== null ? F : In(h.type) || "Memo";
            case Ve: {
              var X = h, Ne = X._payload, ae = X._init;
              try {
                return In(ae(Ne));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function Ir(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function br(h, C) {
        var N = function() {
          hr || (hr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function oi(h, C) {
        var N = function() {
          sa || (sa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && it.current && h.__self && it.current.stateNode !== h.__self) {
          var C = In(it.current.type);
          er[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var J = function(h, C, N, F, X, Ne, ae) {
        var Le = {
          $$typeof: xt,
          type: h,
          key: C,
          ref: N,
          props: ae,
          _owner: Ne
        };
        return Le._store = {}, Object.defineProperty(Le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
      };
      function we(h, C, N) {
        var F, X = {}, Ne = null, ae = null, Le = null, lt = null;
        if (C != null) {
          Ir(C) && (ae = C.ref, ca(C)), pn(C) && (xn(C.key), Ne = "" + C.key), Le = C.__self === void 0 ? null : C.__self, lt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          X.children = N;
        else if (wt > 1) {
          for (var Gt = Array(wt), It = 0; It < wt; It++)
            Gt[It] = arguments[It + 2];
          Object.freeze && Object.freeze(Gt), X.children = Gt;
        }
        if (h && h.defaultProps) {
          var Xt = h.defaultProps;
          for (F in Xt)
            X[F] === void 0 && (X[F] = Xt[F]);
        }
        if (Ne || ae) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ne && br(X, tn), ae && oi(X, tn);
        }
        return J(h, Ne, ae, Le, lt, it.current, X);
      }
      function rt(h, C) {
        var N = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Mt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = ue({}, h.props), Ne = h.key, ae = h.ref, Le = h._self, lt = h._source, wt = h._owner;
        if (C != null) {
          Ir(C) && (ae = C.ref, wt = it.current), pn(C) && (xn(C.key), Ne = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (C[F] === void 0 && Gt !== void 0 ? X[F] = Gt[F] : X[F] = C[F]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          X.children = N;
        else if (It > 1) {
          for (var Xt = Array(It), tn = 0; tn < It; tn++)
            Xt[tn] = arguments[tn + 2];
          X.children = Xt;
        }
        return J(h.type, Ne, ae, Le, lt, wt, X);
      }
      function Ht(h) {
        return typeof h == "object" && h !== null && h.$$typeof === xt;
      }
      var _n = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + F;
      }
      var Yt = !1, wr = /\/+/g;
      function jt(h) {
        return h.replace(wr, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (xn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function qa(h, C, N, F, X) {
        var Ne = typeof h;
        (Ne === "undefined" || Ne === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Ne) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case xt:
                case zt:
                  ae = !0;
              }
          }
        if (ae) {
          var Le = h, lt = X(Le), wt = F === "" ? _n + Vt(Le, 0) : F;
          if (dn(lt)) {
            var Gt = "";
            wt != null && (Gt = jt(wt) + "/"), qa(lt, C, Gt, "", function($f) {
              return $f;
            });
          } else
            lt != null && (Ht(lt) && (lt.key && (!Le || Le.key !== lt.key) && xn(lt.key), lt = rt(
              lt,
              N + (lt.key && (!Le || Le.key !== lt.key) ? jt("" + lt.key) + "/" : "") + wt
            )), C.push(lt));
          return 1;
        }
        var It, Xt, tn = 0, vt = F === "" ? _n : F + vn;
        if (dn(h))
          for (var Ni = 0; Ni < h.length; Ni++)
            It = h[Ni], Xt = vt + Vt(It, Ni), tn += qa(It, C, N, Xt, X);
        else {
          var Zl = at(h);
          if (typeof Zl == "function") {
            var Ko = h;
            Zl === Ko.entries && (Yt || Rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Bf = Zl.call(Ko), Za, Zo = 0; !(Za = Bf.next()).done; )
              It = Za.value, Xt = vt + Vt(It, Zo++), tn += qa(It, C, N, Xt, X);
          } else if (Ne === "object") {
            var Jo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Jo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Jo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function xa(h, C, N) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return qa(h, F, "", "", function(Ne) {
          return C.call(N, Ne, X++);
        }), F;
      }
      function uu(h) {
        var C = 0;
        return xa(h, function() {
          C++;
        }), C;
      }
      function Xu(h, C, N) {
        xa(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Vl(h) {
        return xa(h, function(C) {
          return C;
        }) || [];
      }
      function Oi(h) {
        if (!Ht(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function lu(h) {
        var C = {
          $$typeof: pe,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ve,
          _context: C
        };
        var N = !1, F = !1, X = !1;
        {
          var Ne = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(Ne, {
            Provider: {
              get: function() {
                return F || (F = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                X || (Rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), X = !0);
              }
            }
          }), C.Consumer = Ne;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, si = 0, da = 1, ci = 2;
      function xr(h) {
        if (h._status === fa) {
          var C = h._result, N = C();
          if (N.then(function(Ne) {
            if (h._status === si || h._status === fa) {
              var ae = h;
              ae._status = da, ae._result = Ne;
            }
          }, function(Ne) {
            if (h._status === si || h._status === fa) {
              var ae = h;
              ae._status = ci, ae._result = Ne;
            }
          }), h._status === fa) {
            var F = h;
            F._status = si, F._result = N;
          }
        }
        if (h._status === da) {
          var X = h._result;
          return X === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          _status: fa,
          _result: h
        }, N = {
          $$typeof: Ve,
          _payload: C,
          _init: xr
        };
        {
          var F, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ne) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ne, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Ne) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Ne, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function fi(h) {
        h != null && h.$$typeof === ie ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Qe,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ge || h === Ut || Ke || h === S || h === te || h === me || Ue || h === Ct || Qt || Dt || En || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === ie || h.$$typeof === ve || h.$$typeof === pe || h.$$typeof === Qe || h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ee(h, C) {
        $(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function ce() {
        var h = We.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Xe(h) {
        var C = ce();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function mt(h) {
        var C = ce();
        return C.useState(h);
      }
      function Ze(h, C, N) {
        var F = ce();
        return F.useReducer(h, C, N);
      }
      function ke(h) {
        var C = ce();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var N = ce();
        return N.useEffect(h, C);
      }
      function Jt(h, C) {
        var N = ce();
        return N.useInsertionEffect(h, C);
      }
      function en(h, C) {
        var N = ce();
        return N.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var N = ce();
        return N.useCallback(h, C);
      }
      function di(h, C) {
        var N = ce();
        return N.useMemo(h, C);
      }
      function Pl(h, C, N) {
        var F = ce();
        return F.useImperativeHandle(h, C, N);
      }
      function Tt(h, C) {
        {
          var N = ce();
          return N.useDebugValue(h, C);
        }
      }
      function Vf() {
        var h = ce();
        return h.useTransition();
      }
      function Ga(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function ut() {
        var h = ce();
        return h.useId();
      }
      function pi(h, C, N) {
        var F = ce();
        return F.useSyncExternalStore(h, C, N);
      }
      var ou = 0, Bl, su, Qr, Wo, _r, qo, Go;
      function Ks() {
      }
      Ks.__reactDisabledLog = !0;
      function $l() {
        {
          if (ou === 0) {
            Bl = console.log, su = console.info, Qr = console.warn, Wo = console.error, _r = console.group, qo = console.groupCollapsed, Go = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ks,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ou++;
        }
      }
      function cu() {
        {
          if (ou--, ou === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ue({}, h, {
                value: Bl
              }),
              info: ue({}, h, {
                value: su
              }),
              warn: ue({}, h, {
                value: Qr
              }),
              error: ue({}, h, {
                value: Wo
              }),
              group: ue({}, h, {
                value: _r
              }),
              groupCollapsed: ue({}, h, {
                value: qo
              }),
              groupEnd: ue({}, h, {
                value: Go
              })
            });
          }
          ou < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = At.ReactCurrentDispatcher, Dr;
      function fu(h, C, N) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              Dr = F && F[1] || "";
            }
          return `
` + Dr + h;
        }
      }
      var du = !1, pu;
      {
        var Yl = typeof WeakMap == "function" ? WeakMap : Map;
        pu = new Yl();
      }
      function Il(h, C) {
        if (!h || du)
          return "";
        {
          var N = pu.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        du = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = Xa.current, Xa.current = null, $l();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (vt) {
                F = vt;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (vt) {
                F = vt;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vt) {
              F = vt;
            }
            h();
          }
        } catch (vt) {
          if (vt && F && typeof vt.stack == "string") {
            for (var Le = vt.stack.split(`
`), lt = F.stack.split(`
`), wt = Le.length - 1, Gt = lt.length - 1; wt >= 1 && Gt >= 0 && Le[wt] !== lt[Gt]; )
              Gt--;
            for (; wt >= 1 && Gt >= 0; wt--, Gt--)
              if (Le[wt] !== lt[Gt]) {
                if (wt !== 1 || Gt !== 1)
                  do
                    if (wt--, Gt--, Gt < 0 || Le[wt] !== lt[Gt]) {
                      var It = `
` + Le[wt].replace(" at new ", " at ");
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && pu.set(h, It), It;
                    }
                  while (wt >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          du = !1, Xa.current = Ne, cu(), Error.prepareStackTrace = X;
        }
        var Xt = h ? h.displayName || h.name : "", tn = Xt ? fu(Xt) : "";
        return typeof h == "function" && pu.set(h, tn), tn;
      }
      function Li(h, C, N) {
        return Il(h, !1);
      }
      function Pf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function vi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Il(h, Pf(h));
        if (typeof h == "string")
          return fu(h);
        switch (h) {
          case te:
            return fu("Suspense");
          case me:
            return fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Qe:
              return Li(h.render);
            case ie:
              return vi(h.type, C, N);
            case Ve: {
              var F = h, X = F._payload, Ne = F._init;
              try {
                return vi(Ne(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var kt = {}, Ql = At.ReactDebugCurrentFrame;
      function Ku(h) {
        if (h) {
          var C = h._owner, N = vi(h.type, h._source, C ? C.type : null);
          Ql.setExtraStackFrame(N);
        } else
          Ql.setExtraStackFrame(null);
      }
      function Wl(h, C, N, F, X) {
        {
          var Ne = Function.call.bind(vr);
          for (var ae in h)
            if (Ne(h, ae)) {
              var Le = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var lt = Error((F || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw lt.name = "Invariant Violation", lt;
                }
                Le = h[ae](C, ae, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                Le = wt;
              }
              Le && !(Le instanceof Error) && (Ku(X), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ae, typeof Le), Ku(null)), Le instanceof Error && !(Le.message in kt) && (kt[Le.message] = !0, Ku(X), ye("Failed %s type: %s", N, Le.message), Ku(null));
            }
        }
      }
      function bt(h) {
        if (h) {
          var C = h._owner, N = vi(h.type, h._source, C ? C.type : null);
          wn(N);
        } else
          wn(null);
      }
      var ql;
      ql = !1;
      function Gl() {
        if (it.current) {
          var h = In(it.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Zu(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Gl();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function kr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Wr(C);
          if (!hn[N]) {
            hn[N] = !0;
            var F = "";
            h && h._owner && h._owner !== it.current && (F = " It was passed a child from " + In(h._owner.type) + "."), bt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), bt(null);
          }
        }
      }
      function vu(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              Ht(F) && kr(F, C);
            }
          else if (Ht(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = at(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Ne = X.call(h), ae; !(ae = Ne.next()).done; )
                Ht(ae.value) && kr(ae.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Qe || C.$$typeof === ie))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = In(C);
            Wl(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !ql) {
            ql = !0;
            var X = In(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              bt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), bt(null);
              break;
            }
          }
          h.ref !== null && (bt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), bt(null));
        }
      }
      function Zs(h, C, N) {
        var F = $(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Zu(C);
          Ne ? X += Ne : X += Gl();
          var ae;
          h === null ? ae = "null" : dn(h) ? ae = "array" : h !== void 0 && h.$$typeof === xt ? (ae = "<" + (In(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, X);
        }
        var Le = we.apply(this, arguments);
        if (Le == null)
          return Le;
        if (F)
          for (var lt = 2; lt < arguments.length; lt++)
            vu(arguments[lt], h);
        return h === Ge ? Pt(Le) : Cn(Le), Le;
      }
      var qr = !1;
      function Qn(h) {
        var C = Zs.bind(null, h);
        return C.type = h, qr || (qr = !0, Rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function hi(h, C, N) {
        for (var F = Mt.apply(this, arguments), X = 2; X < arguments.length; X++)
          vu(arguments[X], F.type);
        return Cn(F), F;
      }
      function Js(h, C) {
        var N = ct.transition;
        ct.transition = {};
        var F = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = N, N === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && Rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Mi = !1, hu = null;
      function ec(h) {
        if (hu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = W && W[C];
            hu = N.call(W, "timers").setImmediate;
          } catch {
            hu = function(X) {
              Mi === !1 && (Mi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ne = new MessageChannel();
              Ne.port1.onmessage = X, Ne.port2.postMessage(void 0);
            };
          }
        return hu(h);
      }
      var _a = 0, mu = !1;
      function yu(h) {
        {
          var C = _a;
          _a++, xe.current === null && (xe.current = []);
          var N = xe.isBatchingLegacy, F;
          try {
            if (xe.isBatchingLegacy = !0, F = h(), !N && xe.didScheduleLegacyUpdate) {
              var X = xe.current;
              X !== null && (xe.didScheduleLegacyUpdate = !1, Su(X));
            }
          } catch (Xt) {
            throw Da(C), Xt;
          } finally {
            xe.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ne = F, ae = !1, Le = {
              then: function(Xt, tn) {
                ae = !0, Ne.then(function(vt) {
                  Da(C), _a === 0 ? Xl(vt, Xt, tn) : Xt(vt);
                }, function(vt) {
                  Da(C), tn(vt);
                });
              }
            };
            return !mu && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (mu = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Le;
          } else {
            var lt = F;
            if (Da(C), _a === 0) {
              var wt = xe.current;
              wt !== null && (Su(wt), xe.current = null);
              var Gt = {
                then: function(Xt, tn) {
                  xe.current === null ? (xe.current = [], Xl(lt, Xt, tn)) : Xt(lt);
                }
              };
              return Gt;
            } else {
              var It = {
                then: function(Xt, tn) {
                  Xt(lt);
                }
              };
              return It;
            }
          }
        }
      }
      function Da(h) {
        h !== _a - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _a = h;
      }
      function Xl(h, C, N) {
        {
          var F = xe.current;
          if (F !== null)
            try {
              Su(F), ec(function() {
                F.length === 0 ? (xe.current = null, C(h)) : Xl(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var gu = !1;
      function Su(h) {
        if (!gu) {
          gu = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            gu = !1;
          }
        }
      }
      var Ju = Zs, Kl = hi, Xo = Qn, Ka = {
        map: xa,
        forEach: Xu,
        count: uu,
        toArray: Vl,
        only: Oi
      };
      G.Children = Ka, G.Component = Fe, G.Fragment = Ge, G.Profiler = Ut, G.PureComponent = Ft, G.StrictMode = S, G.Suspense = te, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, G.cloneElement = Kl, G.createContext = lu, G.createElement = Ju, G.createFactory = Xo, G.createRef = pr, G.forwardRef = fi, G.isValidElement = Ht, G.lazy = pa, G.memo = ee, G.startTransition = Js, G.unstable_act = yu, G.useCallback = tr, G.useContext = Xe, G.useDebugValue = Tt, G.useDeferredValue = Ga, G.useEffect = Ln, G.useId = ut, G.useImperativeHandle = Pl, G.useInsertionEffect = Jt, G.useLayoutEffect = en, G.useMemo = di, G.useReducer = Ze, G.useRef = ke, G.useState = mt, G.useSyncExternalStore = pi, G.useTransition = Vf, G.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Fm, Fm.exports)), Fm.exports;
}
(function(W) {
  process.env.NODE_ENV === "production" ? W.exports = X4() : W.exports = K4();
})(li);
var dS = { exports: {} }, pS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function Z4() {
  return eR || (eR = 1, function(W) {
    function G(Z, be) {
      var T = Z.length;
      Z.push(be);
      e:
        for (; 0 < T; ) {
          var B = T - 1 >>> 1, ue = Z[B];
          if (0 < zt(ue, be))
            Z[B] = be, Z[T] = ue, T = B;
          else
            break e;
        }
    }
    function A(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function xt(Z) {
      if (Z.length === 0)
        return null;
      var be = Z[0], T = Z.pop();
      if (T !== be) {
        Z[0] = T;
        e:
          for (var B = 0, ue = Z.length, $e = ue >>> 1; B < $e; ) {
            var Fe = 2 * (B + 1) - 1, ht = Z[Fe], tt = Fe + 1, ft = Z[tt];
            if (0 > zt(ht, T))
              tt < ue && 0 > zt(ft, ht) ? (Z[B] = ft, Z[tt] = T, B = tt) : (Z[B] = ht, Z[Fe] = T, B = Fe);
            else if (tt < ue && 0 > zt(ft, T))
              Z[B] = ft, Z[tt] = T, B = tt;
            else
              break e;
          }
      }
      return be;
    }
    function zt(Z, be) {
      var T = Z.sortIndex - be.sortIndex;
      return T !== 0 ? T : Z.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ge = performance;
      W.unstable_now = function() {
        return Ge.now();
      };
    } else {
      var S = Date, Ut = S.now();
      W.unstable_now = function() {
        return S.now() - Ut;
      };
    }
    var ve = [], pe = [], Qe = 1, te = null, me = 3, ie = !1, Ve = !1, Ct = !1, st = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(Z) {
      for (var be = A(pe); be !== null; ) {
        if (be.callback === null)
          xt(pe);
        else if (be.startTime <= Z)
          xt(pe), be.sortIndex = be.expirationTime, G(ve, be);
        else
          break;
        be = A(pe);
      }
    }
    function ct(Z) {
      if (Ct = !1, We(Z), !Ve)
        if (A(ve) !== null)
          Ve = !0, Rt(xe);
        else {
          var be = A(pe);
          be !== null && ye(ct, be.startTime - Z);
        }
    }
    function xe(Z, be) {
      Ve = !1, Ct && (Ct = !1, fn(nn), nn = -1), ie = !0;
      var T = me;
      try {
        for (We(be), te = A(ve); te !== null && (!(te.expirationTime > be) || Z && !Dt()); ) {
          var B = te.callback;
          if (typeof B == "function") {
            te.callback = null, me = te.priorityLevel;
            var ue = B(te.expirationTime <= be);
            be = W.unstable_now(), typeof ue == "function" ? te.callback = ue : te === A(ve) && xt(ve), We(be);
          } else
            xt(ve);
          te = A(ve);
        }
        if (te !== null)
          var $e = !0;
        else {
          var Fe = A(pe);
          Fe !== null && ye(ct, Fe.startTime - be), $e = !1;
        }
        return $e;
      } finally {
        te = null, me = T, ie = !1;
      }
    }
    var it = !1, He = null, nn = -1, wn = 5, Qt = -1;
    function Dt() {
      return !(W.unstable_now() - Qt < wn);
    }
    function En() {
      if (He !== null) {
        var Z = W.unstable_now();
        Qt = Z;
        var be = !0;
        try {
          be = He(!0, Z);
        } finally {
          be ? Ue() : (it = !1, He = null);
        }
      } else
        it = !1;
    }
    var Ue;
    if (typeof at == "function")
      Ue = function() {
        at(En);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), At = Ke.port2;
      Ke.port1.onmessage = En, Ue = function() {
        At.postMessage(null);
      };
    } else
      Ue = function() {
        st(En, 0);
      };
    function Rt(Z) {
      He = Z, it || (it = !0, Ue());
    }
    function ye(Z, be) {
      nn = st(function() {
        Z(W.unstable_now());
      }, be);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, W.unstable_continueExecution = function() {
      Ve || ie || (Ve = !0, Rt(xe));
    }, W.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, W.unstable_getFirstCallbackNode = function() {
      return A(ve);
    }, W.unstable_next = function(Z) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = me;
      }
      var T = me;
      me = be;
      try {
        return Z();
      } finally {
        me = T;
      }
    }, W.unstable_pauseExecution = function() {
    }, W.unstable_requestPaint = function() {
    }, W.unstable_runWithPriority = function(Z, be) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var T = me;
      me = Z;
      try {
        return be();
      } finally {
        me = T;
      }
    }, W.unstable_scheduleCallback = function(Z, be, T) {
      var B = W.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, Z) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = T + ue, Z = { id: Qe++, callback: be, priorityLevel: Z, startTime: T, expirationTime: ue, sortIndex: -1 }, T > B ? (Z.sortIndex = T, G(pe, Z), A(ve) === null && Z === A(pe) && (Ct ? (fn(nn), nn = -1) : Ct = !0, ye(ct, T - B))) : (Z.sortIndex = ue, G(ve, Z), Ve || ie || (Ve = !0, Rt(xe))), Z;
    }, W.unstable_shouldYield = Dt, W.unstable_wrapCallback = function(Z) {
      var be = me;
      return function() {
        var T = me;
        me = be;
        try {
          return Z.apply(this, arguments);
        } finally {
          me = T;
        }
      };
    };
  }(pS)), pS;
}
var vS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function J4() {
  return tR || (tR = 1, function(W) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var G = !1, A = !1, xt = 5;
      function zt(J, we) {
        var rt = J.length;
        J.push(we), Ut(J, we, rt);
      }
      function Ge(J) {
        return J.length === 0 ? null : J[0];
      }
      function S(J) {
        if (J.length === 0)
          return null;
        var we = J[0], rt = J.pop();
        return rt !== we && (J[0] = rt, ve(J, rt, 0)), we;
      }
      function Ut(J, we, rt) {
        for (var Mt = rt; Mt > 0; ) {
          var Ht = Mt - 1 >>> 1, _n = J[Ht];
          if (pe(_n, we) > 0)
            J[Ht] = we, J[Mt] = _n, Mt = Ht;
          else
            return;
        }
      }
      function ve(J, we, rt) {
        for (var Mt = rt, Ht = J.length, _n = Ht >>> 1; Mt < _n; ) {
          var vn = (Mt + 1) * 2 - 1, mr = J[vn], Yt = vn + 1, wr = J[Yt];
          if (pe(mr, we) < 0)
            Yt < Ht && pe(wr, mr) < 0 ? (J[Mt] = wr, J[Yt] = we, Mt = Yt) : (J[Mt] = mr, J[vn] = we, Mt = vn);
          else if (Yt < Ht && pe(wr, we) < 0)
            J[Mt] = wr, J[Yt] = we, Mt = Yt;
          else
            return;
        }
      }
      function pe(J, we) {
        var rt = J.sortIndex - we.sortIndex;
        return rt !== 0 ? rt : J.id - we.id;
      }
      var Qe = 1, te = 2, me = 3, ie = 4, Ve = 5;
      function Ct(J, we) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var fn = performance;
        W.unstable_now = function() {
          return fn.now();
        };
      } else {
        var at = Date, We = at.now();
        W.unstable_now = function() {
          return at.now() - We;
        };
      }
      var ct = 1073741823, xe = -1, it = 250, He = 5e3, nn = 1e4, wn = ct, Qt = [], Dt = [], En = 1, Ue = null, Ke = me, At = !1, Rt = !1, ye = !1, Z = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(J) {
        for (var we = Ge(Dt); we !== null; ) {
          if (we.callback === null)
            S(Dt);
          else if (we.startTime <= J)
            S(Dt), we.sortIndex = we.expirationTime, zt(Qt, we);
          else
            return;
          we = Ge(Dt);
        }
      }
      function ue(J) {
        if (ye = !1, B(J), !Rt)
          if (Ge(Qt) !== null)
            Rt = !0, Ir($e);
          else {
            var we = Ge(Dt);
            we !== null && pn(ue, we.startTime - J);
          }
      }
      function $e(J, we) {
        Rt = !1, ye && (ye = !1, br()), At = !0;
        var rt = Ke;
        try {
          var Mt;
          if (!A)
            return Fe(J, we);
        } finally {
          Ue = null, Ke = rt, At = !1;
        }
      }
      function Fe(J, we) {
        var rt = we;
        for (B(rt), Ue = Ge(Qt); Ue !== null && !G && !(Ue.expirationTime > rt && (!J || $r())); ) {
          var Mt = Ue.callback;
          if (typeof Mt == "function") {
            Ue.callback = null, Ke = Ue.priorityLevel;
            var Ht = Ue.expirationTime <= rt, _n = Mt(Ht);
            rt = W.unstable_now(), typeof _n == "function" ? Ue.callback = _n : Ue === Ge(Qt) && S(Qt), B(rt);
          } else
            S(Qt);
          Ue = Ge(Qt);
        }
        if (Ue !== null)
          return !0;
        var vn = Ge(Dt);
        return vn !== null && pn(ue, vn.startTime - rt), !1;
      }
      function ht(J, we) {
        switch (J) {
          case Qe:
          case te:
          case me:
          case ie:
          case Ve:
            break;
          default:
            J = me;
        }
        var rt = Ke;
        Ke = J;
        try {
          return we();
        } finally {
          Ke = rt;
        }
      }
      function tt(J) {
        var we;
        switch (Ke) {
          case Qe:
          case te:
          case me:
            we = me;
            break;
          default:
            we = Ke;
            break;
        }
        var rt = Ke;
        Ke = we;
        try {
          return J();
        } finally {
          Ke = rt;
        }
      }
      function ft(J) {
        var we = Ke;
        return function() {
          var rt = Ke;
          Ke = we;
          try {
            return J.apply(this, arguments);
          } finally {
            Ke = rt;
          }
        };
      }
      function nt(J, we, rt) {
        var Mt = W.unstable_now(), Ht;
        if (typeof rt == "object" && rt !== null) {
          var _n = rt.delay;
          typeof _n == "number" && _n > 0 ? Ht = Mt + _n : Ht = Mt;
        } else
          Ht = Mt;
        var vn;
        switch (J) {
          case Qe:
            vn = xe;
            break;
          case te:
            vn = it;
            break;
          case Ve:
            vn = wn;
            break;
          case ie:
            vn = nn;
            break;
          case me:
          default:
            vn = He;
            break;
        }
        var mr = Ht + vn, Yt = {
          id: En++,
          callback: we,
          priorityLevel: J,
          startTime: Ht,
          expirationTime: mr,
          sortIndex: -1
        };
        return Ht > Mt ? (Yt.sortIndex = Ht, zt(Dt, Yt), Ge(Qt) === null && Yt === Ge(Dt) && (ye ? br() : ye = !0, pn(ue, Ht - Mt))) : (Yt.sortIndex = mr, zt(Qt, Yt), !Rt && !At && (Rt = !0, Ir($e))), Yt;
      }
      function Ft() {
      }
      function Vr() {
        !Rt && !At && (Rt = !0, Ir($e));
      }
      function pr() {
        return Ge(Qt);
      }
      function Pr(J) {
        J.callback = null;
      }
      function dn() {
        return Ke;
      }
      var Yn = !1, An = null, Fn = -1, xn = xt, Br = -1;
      function $r() {
        var J = W.unstable_now() - Br;
        return !(J < xn);
      }
      function In() {
      }
      function vr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? xn = Math.floor(1e3 / J) : xn = xt;
      }
      var Yr = function() {
        if (An !== null) {
          var J = W.unstable_now();
          Br = J;
          var we = !0, rt = !0;
          try {
            rt = An(we, J);
          } finally {
            rt ? hr() : (Yn = !1, An = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof T == "function")
        hr = function() {
          T(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          Z(Yr, 0);
        };
      function Ir(J) {
        An = J, Yn || (Yn = !0, hr());
      }
      function pn(J, we) {
        Fn = Z(function() {
          J(W.unstable_now());
        }, we);
      }
      function br() {
        be(Fn), Fn = -1;
      }
      var oi = In, ca = null;
      W.unstable_IdlePriority = Ve, W.unstable_ImmediatePriority = Qe, W.unstable_LowPriority = ie, W.unstable_NormalPriority = me, W.unstable_Profiling = ca, W.unstable_UserBlockingPriority = te, W.unstable_cancelCallback = Pr, W.unstable_continueExecution = Vr, W.unstable_forceFrameRate = vr, W.unstable_getCurrentPriorityLevel = dn, W.unstable_getFirstCallbackNode = pr, W.unstable_next = tt, W.unstable_pauseExecution = Ft, W.unstable_requestPaint = oi, W.unstable_runWithPriority = ht, W.unstable_scheduleCallback = nt, W.unstable_shouldYield = $r, W.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vS)), vS;
}
var nR;
function sR() {
  return nR || (nR = 1, function(W) {
    process.env.NODE_ENV === "production" ? W.exports = Z4() : W.exports = J4();
  }(dS)), dS.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function e_() {
  if (rR)
    return Qa;
  rR = 1;
  var W = li.exports, G = sR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xt = /* @__PURE__ */ new Set(), zt = {};
  function Ge(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (zt[n] = r, n = 0; n < r.length; n++)
      xt.add(r[n]);
  }
  var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ve = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qe = {}, te = {};
  function me(n) {
    return ve.call(te, n) ? !0 : ve.call(Qe, n) ? !1 : pe.test(n) ? te[n] = !0 : (Qe[n] = !0, !1);
  }
  function ie(n, r, u, o) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, u, o) {
    if (r === null || typeof r > "u" || ie(n, r, u, o))
      return !0;
    if (o)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ct(n, r, u, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new Ct(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new Ct(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new Ct(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new Ct(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new Ct(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      at
    );
    st[r] = new Ct(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new Ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, u, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, u, c, o) && (u = null), o || c === null ? me(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, o = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, o ? n.setAttributeNS(o, r, u) : n.setAttribute(r, u))));
  }
  var ct = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xe = Symbol.for("react.element"), it = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), nn = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), Dt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, B;
  function ue(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var $e = !1;
  function Fe(n, r) {
    if (!n || $e)
      return "";
    $e = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var b = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      $e = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? ue(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return ue(n.type);
      case 16:
        return ue("Lazy");
      case 13:
        return ue("Suspense");
      case 19:
        return ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Fe(n.type, !1), n;
      case 11:
        return n = Fe(n.type.render, !1), n;
      case 1:
        return n = Fe(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case it:
        return "Portal";
      case wn:
        return "Profiler";
      case nn:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Dt:
          return (n.displayName || "Context") + ".Consumer";
        case Qt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case At:
          return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
        case Rt:
          r = n._payload, n = n._init;
          try {
            return tt(n(r));
          } catch {
          }
      }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === nn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function nt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vr(n) {
    var r = Ft(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var c = u.get, d = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Vr(n));
  }
  function Pr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), o = "";
    return n && (o = Ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== u ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var u = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u != null ? u : n._wrapperState.initialChecked });
  }
  function An(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    u = nt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: o, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function xn(n, r) {
    Fn(n, r);
    var u = nt(r.value), o = r.type;
    if (u != null)
      o === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, u) : r.hasOwnProperty("defaultValue") && $r(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function $r(n, r, u) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var In = Array.isArray;
  function vr(n, r, u, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < u.length; c++)
        r["$" + u[c]] = !0;
      for (u = 0; u < n.length; u++)
        c = r.hasOwnProperty("$" + n[u].value), n[u].selected !== c && (n[u].selected = c), c && o && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + nt(u), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === u) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(A(92));
        if (In(u)) {
          if (1 < u.length)
            throw Error(A(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: nt(u) };
  }
  function sa(n, r) {
    var u = nt(r.value), o = nt(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var br, oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = br.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, we = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    we.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function rt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var o = u.indexOf("--") === 0, c = rt(u, r[u], o);
        u === "float" && (u = "cssFloat"), o ? n.setProperty(u, c) : n[u] = c;
      }
  }
  var Ht = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _n(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(A(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var wr = null, jt = null, Vt = null;
  function qa(n) {
    if (n = cs(n)) {
      if (typeof wr != "function")
        throw Error(A(280));
      var r = n.stateNode;
      r && (r = De(r), wr(n.stateNode, n.type, r));
    }
  }
  function xa(n) {
    jt ? Vt ? Vt.push(n) : Vt = [n] : jt = n;
  }
  function uu() {
    if (jt) {
      var n = jt, r = Vt;
      if (Vt = jt = null, qa(n), r)
        for (n = 0; n < r.length; n++)
          qa(r[n]);
    }
  }
  function Xu(n, r) {
    return n(r);
  }
  function Vl() {
  }
  var Oi = !1;
  function lu(n, r, u) {
    if (Oi)
      return n(r, u);
    Oi = !0;
    try {
      return Xu(n, r, u);
    } finally {
      Oi = !1, (jt !== null || Vt !== null) && (Vl(), uu());
    }
  }
  function fa(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var o = De(u);
    if (o === null)
      return null;
    u = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(A(231, r, typeof u));
    return u;
  }
  var si = !1;
  if (Ut)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        si = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      si = !1;
    }
  function ci(n, r, u, o, c, d, m, E, b) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, U);
    } catch (I) {
      this.onError(I);
    }
  }
  var xr = !1, pa = null, fi = !1, R = null, $ = { onError: function(n) {
    xr = !0, pa = n;
  } };
  function ee(n, r, u, o, c, d, m, E, b) {
    xr = !1, pa = null, ci.apply($, arguments);
  }
  function ce(n, r, u, o, c, d, m, E, b) {
    if (ee.apply(this, arguments), xr) {
      if (xr) {
        var U = pa;
        xr = !1, pa = null;
      } else
        throw Error(A(198));
      fi || (fi = !0, R = U);
    }
  }
  function Xe(n) {
    var r = n, u = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ze(n) {
    if (Xe(n) !== n)
      throw Error(A(188));
  }
  function ke(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Xe(n), r === null)
        throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var u = n, o = r; ; ) {
      var c = u.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          u = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === u)
            return Ze(c), n;
          if (d === o)
            return Ze(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (u.return !== o.return)
        u = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === u) {
            m = !0, u = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, u = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === u) {
              m = !0, u = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, u = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(A(189));
        }
      }
      if (u.alternate !== o)
        throw Error(A(190));
    }
    if (u.tag !== 3)
      throw Error(A(188));
    return u.stateNode.current === u ? n : r;
  }
  function Ln(n) {
    return n = ke(n), n !== null ? Jt(n) : null;
  }
  function Jt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Jt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = G.unstable_scheduleCallback, tr = G.unstable_cancelCallback, di = G.unstable_shouldYield, Pl = G.unstable_requestPaint, Tt = G.unstable_now, Vf = G.unstable_getCurrentPriorityLevel, Ga = G.unstable_ImmediatePriority, ut = G.unstable_UserBlockingPriority, pi = G.unstable_NormalPriority, ou = G.unstable_LowPriority, Bl = G.unstable_IdlePriority, su = null, Qr = null;
  function Wo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(su, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var _r = Math.clz32 ? Math.clz32 : Ks, qo = Math.log, Go = Math.LN2;
  function Ks(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qo(n) / Go | 0) | 0;
  }
  var $l = 64, cu = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Dr(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = u & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else
      m = u & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        u = 31 - _r(r), c = 1 << u, o |= n[u], r &= ~c;
    return o;
  }
  function fu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function du(n, r) {
    for (var u = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), E = 1 << m, b = c[m];
      b === -1 ? ((E & u) === 0 || (E & o) !== 0) && (c[m] = fu(E, r)) : b <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Yl() {
    var n = $l;
    return $l <<= 1, ($l & 4194240) === 0 && ($l = 64), n;
  }
  function Il(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Li(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = u;
  }
  function Pf(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - _r(u), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function vi(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var o = 31 - _r(u), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), u &= ~c;
    }
  }
  var kt = 0;
  function Ql(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ku, Wl, bt, ql, Gl, Ye = !1, Zu = [], hn = null, Wr = null, kr = null, vu = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Pt = [], Zs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        kr = null;
        break;
      case "pointerover":
      case "pointerout":
        vu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, u, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && Wl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function hi(n, r, u, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, u, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, u, o, c), !0;
      case "mouseover":
        return kr = Qn(kr, n, r, u, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return vu.set(d, Qn(vu.get(d) || null, n, r, u, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, u, o, c)), !0;
    }
    return !1;
  }
  function Js(n) {
    var r = Oa(n.target);
    if (r !== null) {
      var u = Xe(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = mt(u), r !== null) {
            n.blockedOn = r, Gl(n.priority, function() {
              bt(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Mi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = Kl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var o = new u.constructor(u.type, u);
        mr = o, u.target.dispatchEvent(o), mr = null;
      } else
        return r = cs(u), r !== null && Wl(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function hu(n, r, u) {
    Mi(n) && u.delete(r);
  }
  function ec() {
    Ye = !1, hn !== null && Mi(hn) && (hn = null), Wr !== null && Mi(Wr) && (Wr = null), kr !== null && Mi(kr) && (kr = null), vu.forEach(hu), Cn.forEach(hu);
  }
  function _a(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ye || (Ye = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, ec)));
  }
  function mu(n) {
    function r(c) {
      return _a(c, n);
    }
    if (0 < Zu.length) {
      _a(Zu[0], n);
      for (var u = 1; u < Zu.length; u++) {
        var o = Zu[u];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && _a(hn, n), Wr !== null && _a(Wr, n), kr !== null && _a(kr, n), vu.forEach(r), Cn.forEach(r), u = 0; u < Pt.length; u++)
      o = Pt[u], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Pt.length && (u = Pt[0], u.blockedOn === null); )
      Js(u), u.blockedOn === null && Pt.shift();
  }
  var yu = ct.ReactCurrentBatchConfig, Da = !0;
  function Xl(n, r, u, o) {
    var c = kt, d = yu.transition;
    yu.transition = null;
    try {
      kt = 1, Su(n, r, u, o);
    } finally {
      kt = c, yu.transition = d;
    }
  }
  function gu(n, r, u, o) {
    var c = kt, d = yu.transition;
    yu.transition = null;
    try {
      kt = 4, Su(n, r, u, o);
    } finally {
      kt = c, yu.transition = d;
    }
  }
  function Su(n, r, u, o) {
    if (Da) {
      var c = Kl(n, r, u, o);
      if (c === null)
        sc(n, r, o, Ju, u), qr(n, o);
      else if (hi(c, n, r, u, o))
        o.stopPropagation();
      else if (qr(n, o), r & 4 && -1 < Zs.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Ku(d), d = Kl(n, r, u, o), d === null && sc(n, r, o, Ju, u), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        sc(n, r, o, null, u);
    }
  }
  var Ju = null;
  function Kl(n, r, u, o) {
    if (Ju = null, n = Yt(o), n = Oa(n), n !== null)
      if (r = Xe(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ju = n, null;
  }
  function Xo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Vf()) {
          case Ga:
            return 1;
          case ut:
            return 4;
          case pi:
          case ou:
            return 16;
          case Bl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ka = null, h = null, C = null;
  function N() {
    if (C)
      return C;
    var n, r = h, u = r.length, o, c = "value" in Ka ? Ka.value : Ka.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++)
      ;
    var m = u - n;
    for (o = 1; o <= m && r[u - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Ne() {
    return !1;
  }
  function ae(n) {
    function r(u, o, c, d, m) {
      this._reactName = u, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (u = n[E], this[E] = u ? u(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Ne, this.isPropagationStopped = Ne, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Le = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, lt = ae(Le), wt = T({}, Le, { view: 0, detail: 0 }), Gt = ae(wt), It, Xt, tn, vt = T({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tn && (tn && n.type === "mousemove" ? (It = n.screenX - tn.screenX, Xt = n.screenY - tn.screenY) : Xt = It = 0, tn = n), It);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xt;
  } }), Ni = ae(vt), Zl = T({}, vt, { dataTransfer: 0 }), Ko = ae(Zl), Bf = T({}, wt, { relatedTarget: 0 }), Za = ae(Bf), Zo = T({}, Le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jo = ae(Zo), $f = T({}, Le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pm = ae($f), Bm = T({}, Le, { data: 0 }), Yf = ae(Bm), If = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Zp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ev(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Jp[n]) ? !!r[n] : !1;
  }
  function Qf() {
    return ev;
  }
  var zi = T({}, wt, { key: function(n) {
    if (n.key) {
      var r = If[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Zp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = ae(zi), Wf = T({}, vt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tc = ae(Wf), qf = T({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qf }), Ym = ae(qf), nc = T({}, Le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = ae(nc), Gr = T({}, vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ui = ae(Gr), Mn = [9, 13, 27, 32], Ja = Ut && "CompositionEvent" in window, el = null;
  Ut && "documentMode" in document && (el = document.documentMode);
  var rc = Ut && "TextEvent" in window && !el, nv = Ut && (!Ja || el && 8 < el && 11 >= el), Jl = String.fromCharCode(32), rv = !1;
  function av(n, r) {
    switch (n) {
      case "keyup":
        return Mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var eo = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return ac(r);
      case "keypress":
        return r.which !== 32 ? null : (rv = !0, Jl);
      case "textInput":
        return n = r.data, n === Jl && rv ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (eo)
      return n === "compositionend" || !Ja && av(n, r) ? (n = N(), C = h = Ka = null, eo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return nv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var iv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!iv[n.type] : r === "textarea";
  }
  function lv(n, r, u, o) {
    xa(o), r = ls(r, "onChange"), 0 < r.length && (u = new lt("onChange", "change", null, u, o), n.push({ event: u, listeners: r }));
  }
  var es = null, to = null;
  function no(n) {
    oc(n, 0);
  }
  function ro(n) {
    var r = io(n);
    if (Pr(r))
      return n;
  }
  function ov(n, r) {
    if (n === "change")
      return r;
  }
  var Gf = !1;
  if (Ut) {
    var Xf;
    if (Ut) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var sv = document.createElement("div");
        sv.setAttribute("oninput", "return;"), Kf = typeof sv.oninput == "function";
      }
      Xf = Kf;
    } else
      Xf = !1;
    Gf = Xf && (!document.documentMode || 9 < document.documentMode);
  }
  function cv() {
    es && (es.detachEvent("onpropertychange", fv), to = es = null);
  }
  function fv(n) {
    if (n.propertyName === "value" && ro(to)) {
      var r = [];
      lv(r, to, n, Yt(n)), lu(no, r);
    }
  }
  function Wm(n, r, u) {
    n === "focusin" ? (cv(), es = r, to = u, es.attachEvent("onpropertychange", fv)) : n === "focusout" && cv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ro(to);
  }
  function Gm(n, r) {
    if (n === "click")
      return ro(r);
  }
  function dv(n, r) {
    if (n === "input" || n === "change")
      return ro(r);
  }
  function Xm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ka = typeof Object.is == "function" ? Object.is : Xm;
  function ts(n, r) {
    if (ka(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), o = Object.keys(r);
    if (u.length !== o.length)
      return !1;
    for (o = 0; o < u.length; o++) {
      var c = u[o];
      if (!ve.call(r, c) || !ka(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function pv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function vv(n, r) {
    var u = pv(n);
    n = 0;
    for (var o; u; ) {
      if (u.nodeType === 3) {
        if (o = n + u.textContent.length, n <= r && o >= r)
          return { node: u, offset: r - n };
        n = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = pv(u);
    }
  }
  function hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ic() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function Ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uc(n) {
    var r = ic(), u = n.focusedElem, o = n.selectionRange;
    if (r !== u && u && u.ownerDocument && hv(u.ownerDocument.documentElement, u)) {
      if (o !== null && Ai(u)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = u.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vv(u, d);
          var m = vv(
            u,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mv = Ut && "documentMode" in document && 11 >= document.documentMode, ei = null, Zf = null, ns = null, Jf = !1;
  function yv(n, r, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Jf || ei == null || ei !== dn(o) || (o = ei, "selectionStart" in o && Ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && ts(ns, o) || (ns = o, o = ls(Zf, "onSelect"), 0 < o.length && (r = new lt("onSelect", "select", null, r, u), n.push({ event: r, listeners: o }), r.target = ei)));
  }
  function lc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var tl = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, ed = {}, td = {};
  Ut && (td = document.createElement("div").style, "AnimationEvent" in window || (delete tl.animationend.animation, delete tl.animationiteration.animation, delete tl.animationstart.animation), "TransitionEvent" in window || delete tl.transitionend.transition);
  function Wn(n) {
    if (ed[n])
      return ed[n];
    if (!tl[n])
      return n;
    var r = tl[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in td)
        return ed[n] = r[u];
    return n;
  }
  var nd = Wn("animationend"), gv = Wn("animationiteration"), Sv = Wn("animationstart"), Ev = Wn("transitionend"), Cv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fi(n, r) {
    Cv.set(n, r), Ge(r, [n]);
  }
  for (var rs = 0; rs < Rv.length; rs++) {
    var nl = Rv[rs], Km = nl.toLowerCase(), as = nl[0].toUpperCase() + nl.slice(1);
    Fi(Km, "on" + as);
  }
  Fi(nd, "onAnimationEnd"), Fi(gv, "onAnimationIteration"), Fi(Sv, "onAnimationStart"), Fi("dblclick", "onDoubleClick"), Fi("focusin", "onFocus"), Fi("focusout", "onBlur"), Fi(Ev, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Tv(n, r, u) {
    var o = n.type || "unknown-event";
    n.currentTarget = u, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function oc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], b = E.instance, U = E.currentTarget;
            if (E = E.listener, b !== d && c.isPropagationStopped())
              break e;
            Tv(c, E, U), d = b;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], b = E.instance, U = E.currentTarget, E = E.listener, b !== d && c.isPropagationStopped())
              break e;
            Tv(c, E, U), d = b;
          }
      }
    }
    if (fi)
      throw n = R, fi = !1, R = null, n;
  }
  function Kt(n, r) {
    var u = r[sd];
    u === void 0 && (u = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (bv(r, n, 2, !1), u.add(o));
  }
  function Eu(n, r, u) {
    var o = 0;
    r && (o |= 4), bv(u, n, o, r);
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function ao(n) {
    if (!n[Hi]) {
      n[Hi] = !0, xt.forEach(function(u) {
        u !== "selectionchange" && (Zm.has(u) || Eu(u, !1, n), Eu(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Hi] || (r[Hi] = !0, Eu("selectionchange", !1, r));
    }
  }
  function bv(n, r, u, o) {
    switch (Xo(r)) {
      case 1:
        var c = Xl;
        break;
      case 4:
        c = gu;
        break;
      default:
        c = Su;
    }
    u = c.bind(null, r, u, n), c = void 0, !si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
  }
  function sc(n, r, u, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var b = m.tag;
                if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Oa(E), m === null)
                return;
              if (b = m.tag, b === 5 || b === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    lu(function() {
      var U = d, I = Yt(u), Q = [];
      e: {
        var Y = Cv.get(n);
        if (Y !== void 0) {
          var oe = lt, ge = n;
          switch (n) {
            case "keypress":
              if (F(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = $m;
              break;
            case "focusin":
              ge = "focus", oe = Za;
              break;
            case "focusout":
              ge = "blur", oe = Za;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Za;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Ko;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Ym;
              break;
            case nd:
            case gv:
            case Sv:
              oe = Jo;
              break;
            case Ev:
              oe = tv;
              break;
            case "scroll":
              oe = Gt;
              break;
            case "wheel":
              oe = Ui;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = tc;
          }
          var Ce = (r & 4) !== 0, kn = !Ce && n === "scroll", D = Ce ? Y !== null ? Y + "Capture" : null : Y;
          Ce = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = fa(x, D), K != null && Ce.push(us(x, K, L)))), kn)
              break;
            x = x.return;
          }
          0 < Ce.length && (Y = new oe(Y, ge, null, u, I), Q.push({ event: Y, listeners: Ce }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", Y && u !== mr && (ge = u.relatedTarget || u.fromElement) && (Oa(ge) || ge[ji]))
            break e;
          if ((oe || Y) && (Y = I.window === I ? I : (Y = I.ownerDocument) ? Y.defaultView || Y.parentWindow : window, oe ? (ge = u.relatedTarget || u.toElement, oe = U, ge = ge ? Oa(ge) : null, ge !== null && (kn = Xe(ge), ge !== kn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (oe = null, ge = U), oe !== ge)) {
            if (Ce = Ni, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = tc, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), kn = oe == null ? Y : io(oe), L = ge == null ? Y : io(ge), Y = new Ce(K, x + "leave", oe, u, I), Y.target = kn, Y.relatedTarget = L, K = null, Oa(I) === U && (Ce = new Ce(D, x + "enter", ge, u, I), Ce.target = L, Ce.relatedTarget = kn, K = Ce), kn = K, oe && ge)
              t: {
                for (Ce = oe, D = ge, x = 0, L = Ce; L; L = rl(L))
                  x++;
                for (L = 0, K = D; K; K = rl(K))
                  L++;
                for (; 0 < x - L; )
                  Ce = rl(Ce), x--;
                for (; 0 < L - x; )
                  D = rl(D), L--;
                for (; x--; ) {
                  if (Ce === D || D !== null && Ce === D.alternate)
                    break t;
                  Ce = rl(Ce), D = rl(D);
                }
                Ce = null;
              }
            else
              Ce = null;
            oe !== null && rd(Q, Y, oe, Ce, !1), ge !== null && kn !== null && rd(Q, kn, ge, Ce, !0);
          }
        }
        e: {
          if (Y = U ? io(U) : window, oe = Y.nodeName && Y.nodeName.toLowerCase(), oe === "select" || oe === "input" && Y.type === "file")
            var Re = ov;
          else if (uv(Y))
            if (Gf)
              Re = dv;
            else {
              Re = qm;
              var Se = Wm;
            }
          else
            (oe = Y.nodeName) && oe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Re = Gm);
          if (Re && (Re = Re(n, U))) {
            lv(Q, Re, u, I);
            break e;
          }
          Se && Se(n, Y, U), n === "focusout" && (Se = Y._wrapperState) && Se.controlled && Y.type === "number" && $r(Y, "number", Y.value);
        }
        switch (Se = U ? io(U) : window, n) {
          case "focusin":
            (uv(Se) || Se.contentEditable === "true") && (ei = Se, Zf = U, ns = null);
            break;
          case "focusout":
            ns = Zf = ei = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, yv(Q, u, I);
            break;
          case "selectionchange":
            if (mv)
              break;
          case "keydown":
          case "keyup":
            yv(Q, u, I);
        }
        var _e;
        if (Ja)
          e: {
            switch (n) {
              case "compositionstart":
                var Be = "onCompositionStart";
                break e;
              case "compositionend":
                Be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Be = "onCompositionUpdate";
                break e;
            }
            Be = void 0;
          }
        else
          eo ? av(n, u) && (Be = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Be = "onCompositionStart");
        Be && (nv && u.locale !== "ko" && (eo || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && eo && (_e = N()) : (Ka = I, h = "value" in Ka ? Ka.value : Ka.textContent, eo = !0)), Se = ls(U, Be), 0 < Se.length && (Be = new Yf(Be, n, null, u, I), Q.push({ event: Be, listeners: Se }), _e ? Be.data = _e : (_e = ac(u), _e !== null && (Be.data = _e)))), (_e = rc ? Im(n, u) : Qm(n, u)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (I = new Yf("onBeforeInput", "beforeinput", null, u, I), Q.push({ event: I, listeners: U }), I.data = _e));
      }
      oc(Q, r);
    });
  }
  function us(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function ls(n, r) {
    for (var u = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, u), d != null && o.unshift(us(n, d, c)), d = fa(n, r), d != null && o.push(us(n, d, c))), n = n.return;
    }
    return o;
  }
  function rl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, u, o, c) {
    for (var d = r._reactName, m = []; u !== null && u !== o; ) {
      var E = u, b = E.alternate, U = E.stateNode;
      if (b !== null && b === o)
        break;
      E.tag === 5 && U !== null && (E = U, c ? (b = fa(u, d), b != null && m.unshift(us(u, b, E))) : c || (b = fa(u, d), b != null && m.push(us(u, b, E)))), u = u.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ad = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function id(n) {
    return (typeof n == "string" ? n : "" + n).replace(ad, `
`).replace(Jm, "");
  }
  function cc(n, r, u) {
    if (r = id(r), id(n) !== r && u)
      throw Error(A(425));
  }
  function fc() {
  }
  var ud = null, al = null;
  function os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var il = typeof setTimeout == "function" ? setTimeout : void 0, wv = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(ey);
  } : il;
  function ey(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cu(n, r) {
    var u = r, o = 0;
    do {
      var c = u.nextSibling;
      if (n.removeChild(u), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (o === 0) {
            n.removeChild(c), mu(r);
            return;
          }
          o--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || o++;
      u = c;
    } while (u);
    mu(r);
  }
  function ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ss(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ru = Math.random().toString(36).slice(2), mi = "__reactFiber$" + Ru, ul = "__reactProps$" + Ru, ji = "__reactContainer$" + Ru, sd = "__reactEvents$" + Ru, ty = "__reactListeners$" + Ru, cd = "__reactHandles$" + Ru;
  function Oa(n) {
    var r = n[mi];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[ji] || u[mi]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = ss(n); n !== null; ) {
            if (u = n[mi])
              return u;
            n = ss(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[mi] || n[ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function io(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(A(33));
  }
  function De(n) {
    return n[ul] || null;
  }
  var Tu = [], rn = -1;
  function Je(n) {
    return { current: n };
  }
  function Nt(n) {
    0 > rn || (n.current = Tu[rn], Tu[rn] = null, rn--);
  }
  function Bt(n, r) {
    rn++, Tu[rn] = n.current, n.current = r;
  }
  var yi = {}, Pe = Je(yi), Rn = Je(!1), Xr = yi;
  function La(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return yi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in u)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ma() {
    Nt(Rn), Nt(Pe);
  }
  function bu(n, r, u) {
    if (Pe.current !== yi)
      throw Error(A(168));
    Bt(Pe, r), Bt(Rn, u);
  }
  function fs(n, r, u) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return u;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(A(108, ft(n) || "Unknown", c));
    return T({}, u, o);
  }
  function dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || yi, Xr = Pe.current, Bt(Pe, n), Bt(Rn, Rn.current), !0;
  }
  function xv(n, r, u) {
    var o = n.stateNode;
    if (!o)
      throw Error(A(169));
    u ? (n = fs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Nt(Rn), Nt(Pe), Bt(Pe, n)) : Nt(Rn), Bt(Rn, u);
  }
  var va = null, qn = !1, ds = !1;
  function fd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function dd(n) {
    qn = !0, fd(n);
  }
  function Kr() {
    if (!ds && va !== null) {
      ds = !0;
      var n = 0, r = kt;
      try {
        var u = va;
        for (kt = 1; n < u.length; n++) {
          var o = u[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, qn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), en(Ga, Kr), c;
      } finally {
        kt = r, ds = !1;
      }
    }
    return null;
  }
  var wu = [], Zr = 0, ll = null, uo = 0, Jr = [], yr = 0, Na = null, nr = 1, Vi = "";
  function ha(n, r) {
    wu[Zr++] = uo, wu[Zr++] = ll, ll = n, uo = r;
  }
  function pd(n, r, u) {
    Jr[yr++] = nr, Jr[yr++] = Vi, Jr[yr++] = Na, Na = n;
    var o = nr;
    n = Vi;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), u += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - _r(r) + c | u << c | o, Vi = d + n;
    } else
      nr = 1 << d | u << c | o, Vi = n;
  }
  function pc(n) {
    n.return !== null && (ha(n, 1), pd(n, 1, 0));
  }
  function vd(n) {
    for (; n === ll; )
      ll = wu[--Zr], wu[Zr] = null, uo = wu[--Zr], wu[Zr] = null;
    for (; n === Na; )
      Na = Jr[--yr], Jr[yr] = null, Vi = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, an = !1, za = null;
  function hd(n, r) {
    var u = Va(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function _v(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Na !== null ? { id: nr, overflow: Vi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Va(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hc(n) {
    if (an) {
      var r = ea;
      if (r) {
        var u = r;
        if (!_v(n, r)) {
          if (vc(n))
            throw Error(A(418));
          r = ti(u.nextSibling);
          var o = ma;
          r && _v(n, r) ? hd(o, u) : (n.flags = n.flags & -4097 | 2, an = !1, ma = n);
        }
      } else {
        if (vc(n))
          throw Error(A(418));
        n.flags = n.flags & -4097 | 2, an = !1, ma = n;
      }
    }
  }
  function Dv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function mc(n) {
    if (n !== ma)
      return !1;
    if (!an)
      return Dv(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !os(n.type, n.memoizedProps)), r && (r = ea)) {
      if (vc(n))
        throw kv(), Error(A(418));
      for (; r; )
        hd(n, r), r = ti(r.nextSibling);
    }
    if (Dv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                ea = ti(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function kv() {
    for (var n = ea; n; )
      n = ti(n.nextSibling);
  }
  function mn() {
    ea = ma = null, an = !1;
  }
  function md(n) {
    za === null ? za = [n] : za.push(n);
  }
  var yc = ct.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var gi = Je(null), gc = null, xu = null, yd = null;
  function gd() {
    yd = xu = gc = null;
  }
  function _u(n) {
    var r = gi.current;
    Nt(gi), n._currentValue = r;
  }
  function Gn(n, r, u) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function ne(n, r) {
    gc = n, yd = xu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Nn = !0), n.firstContext = null);
  }
  function Dn(n) {
    var r = n._currentValue;
    if (yd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, xu === null) {
        if (gc === null)
          throw Error(A(308));
        xu = n, gc.dependencies = { lanes: 0, firstContext: n };
      } else
        xu = xu.next = n;
    return r;
  }
  var rr = null;
  function Sd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function Ov(n, r, u, o) {
    var c = r.interleaved;
    return c === null ? (u.next = u, Sd(r)) : (u.next = c.next, c.next = u), r.interleaved = u, Pi(n, o);
  }
  function Pi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Du = !1;
  function Ed(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Bi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ku(n, r, u) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (dt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Pi(n, u);
    }
    return c = o.interleaved, c === null ? (r.next = r, Sd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Pi(n, u);
  }
  function Sc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, vi(n, u);
    }
  }
  function Cd(n, r) {
    var u = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, u === o)) {
      var c = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          d === null ? c = d = m : d = d.next = m, u = u.next;
        } while (u !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      u = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function Ou(n, r, u, o) {
    var c = n.updateQueue;
    Du = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var b = E, U = b.next;
      b.next = null, m === null ? d = U : m.next = U, m = b;
      var I = n.alternate;
      I !== null && (I = I.updateQueue, E = I.lastBaseUpdate, E !== m && (E === null ? I.firstBaseUpdate = U : E.next = U, I.lastBaseUpdate = b));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, I = U = b = null, E = d;
      do {
        var Y = E.lane, oe = E.eventTime;
        if ((o & Y) === Y) {
          I !== null && (I = I.next = {
            eventTime: oe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (Y = r, oe = u, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  Q = ge.call(oe, Q, Y);
                  break e;
                }
                Q = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, Y = typeof ge == "function" ? ge.call(oe, Q, Y) : ge, Y == null)
                  break e;
                Q = T({}, Q, Y);
                break e;
              case 2:
                Du = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else
          oe = { eventTime: oe, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, I === null ? (U = I = oe, b = Q) : I = I.next = oe, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (1);
      if (I === null && (b = Q), c.baseState = b, c.firstBaseUpdate = U, c.lastBaseUpdate = I, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Qi |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function ol(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = u, typeof c != "function")
            throw Error(A(191, c));
          c.call(o);
        }
      }
  }
  var Lv = new W.Component().refs;
  function Rd(n, r, u, o) {
    r = n.memoizedState, u = u(o, r), u = u == null ? r : T({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Ec = { isMounted: function(n) {
    return (n = n._reactInternals) ? Xe(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Bi(o, c);
    d.payload = r, u != null && (d.callback = u), r = ku(n, d, c), r !== null && (Rr(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Bi(o, c);
    d.tag = 1, d.payload = r, u != null && (d.callback = u), r = ku(n, d, c), r !== null && (Rr(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Cr(), o = zn(n), c = Bi(u, o);
    c.tag = 2, r != null && (c.callback = r), r = ku(n, c, o), r !== null && (Rr(r, n, o, u), Sc(r, n, o));
  } };
  function Mv(n, r, u, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(u, o) || !ts(c, d) : !0;
  }
  function Nv(n, r, u) {
    var o = !1, c = yi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Dn(d) : (c = sn(r) ? Xr : Pe.current, o = r.contextTypes, d = (o = o != null) ? La(n, c) : yi), r = new r(u, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ec, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function zv(n, r, u, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, o), r.state !== n && Ec.enqueueReplaceState(r, r.state, null);
  }
  function Cc(n, r, u, o) {
    var c = n.stateNode;
    c.props = u, c.state = n.memoizedState, c.refs = Lv, Ed(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Dn(d) : (d = sn(r) ? Xr : Pe.current, c.context = La(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Rd(n, r, d, u), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ec.enqueueReplaceState(c, c.state, null), Ou(n, u, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function lo(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(A(309));
          var o = u.stateNode;
        }
        if (!o)
          throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Lv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(A(284));
      if (!u._owner)
        throw Error(A(290, n));
    }
    return n;
  }
  function Rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function u(D, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Hu(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = Ls(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function b(D, x, L, K) {
      var Re = L.type;
      return Re === He ? I(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Rt && Uv(Re) === x.type) ? (K = c(x, L.props), K.ref = lo(D, x, L), K.return = D, K) : (K = ef(L.type, L.key, L.props, null, D.mode, K), K.ref = lo(D, x, L), K.return = D, K);
    }
    function U(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = _l(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function I(D, x, L, K, Re) {
      return x === null || x.tag !== 7 ? (x = xl(L, D.mode, K, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ls("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case xe:
            return L = ef(x.type, x.key, x.props, null, D.mode, L), L.ref = lo(D, null, x), L.return = D, L;
          case it:
            return x = _l(x, D.mode, L), x.return = D, x;
          case Rt:
            var K = x._init;
            return Q(D, K(x._payload), L);
        }
        if (In(x) || be(x))
          return x = xl(x, D.mode, L, null), x.return = D, x;
        Rc(D, x);
      }
      return null;
    }
    function Y(D, x, L, K) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return Re !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case xe:
            return L.key === Re ? b(D, x, L, K) : null;
          case it:
            return L.key === Re ? U(D, x, L, K) : null;
          case Rt:
            return Re = L._init, Y(
              D,
              x,
              Re(L._payload),
              K
            );
        }
        if (In(L) || be(L))
          return Re !== null ? null : I(D, x, L, K, null);
        Rc(D, L);
      }
      return null;
    }
    function oe(D, x, L, K, Re) {
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return D = D.get(L) || null, E(x, D, "" + K, Re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case xe:
            return D = D.get(K.key === null ? L : K.key) || null, b(x, D, K, Re);
          case it:
            return D = D.get(K.key === null ? L : K.key) || null, U(x, D, K, Re);
          case Rt:
            var Se = K._init;
            return oe(D, x, L, Se(K._payload), Re);
        }
        if (In(K) || be(K))
          return D = D.get(L) || null, I(x, D, K, Re, null);
        Rc(x, K);
      }
      return null;
    }
    function ge(D, x, L, K) {
      for (var Re = null, Se = null, _e = x, Be = x = 0, Zn = null; _e !== null && Be < L.length; Be++) {
        _e.index > Be ? (Zn = _e, _e = null) : Zn = _e.sibling;
        var _t = Y(D, _e, L[Be], K);
        if (_t === null) {
          _e === null && (_e = Zn);
          break;
        }
        n && _e && _t.alternate === null && r(D, _e), x = d(_t, x, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t, _e = Zn;
      }
      if (Be === L.length)
        return u(D, _e), an && ha(D, Be), Re;
      if (_e === null) {
        for (; Be < L.length; Be++)
          _e = Q(D, L[Be], K), _e !== null && (x = d(_e, x, Be), Se === null ? Re = _e : Se.sibling = _e, Se = _e);
        return an && ha(D, Be), Re;
      }
      for (_e = o(D, _e); Be < L.length; Be++)
        Zn = oe(_e, D, Be, L[Be], K), Zn !== null && (n && Zn.alternate !== null && _e.delete(Zn.key === null ? Be : Zn.key), x = d(Zn, x, Be), Se === null ? Re = Zn : Se.sibling = Zn, Se = Zn);
      return n && _e.forEach(function(ju) {
        return r(D, ju);
      }), an && ha(D, Be), Re;
    }
    function Ce(D, x, L, K) {
      var Re = be(L);
      if (typeof Re != "function")
        throw Error(A(150));
      if (L = Re.call(L), L == null)
        throw Error(A(151));
      for (var Se = Re = null, _e = x, Be = x = 0, Zn = null, _t = L.next(); _e !== null && !_t.done; Be++, _t = L.next()) {
        _e.index > Be ? (Zn = _e, _e = null) : Zn = _e.sibling;
        var ju = Y(D, _e, _t.value, K);
        if (ju === null) {
          _e === null && (_e = Zn);
          break;
        }
        n && _e && ju.alternate === null && r(D, _e), x = d(ju, x, Be), Se === null ? Re = ju : Se.sibling = ju, Se = ju, _e = Zn;
      }
      if (_t.done)
        return u(
          D,
          _e
        ), an && ha(D, Be), Re;
      if (_e === null) {
        for (; !_t.done; Be++, _t = L.next())
          _t = Q(D, _t.value, K), _t !== null && (x = d(_t, x, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t);
        return an && ha(D, Be), Re;
      }
      for (_e = o(D, _e); !_t.done; Be++, _t = L.next())
        _t = oe(_e, D, Be, _t.value, K), _t !== null && (n && _t.alternate !== null && _e.delete(_t.key === null ? Be : _t.key), x = d(_t, x, Be), Se === null ? Re = _t : Se.sibling = _t, Se = _t);
      return n && _e.forEach(function(Cy) {
        return r(D, Cy);
      }), an && ha(D, Be), Re;
    }
    function kn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case xe:
            e: {
              for (var Re = L.key, Se = x; Se !== null; ) {
                if (Se.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (Se.tag === 7) {
                      u(D, Se.sibling), x = c(Se, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Se.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Rt && Uv(Re) === Se.type) {
                    u(D, Se.sibling), x = c(Se, L.props), x.ref = lo(D, Se, L), x.return = D, D = x;
                    break e;
                  }
                  u(D, Se);
                  break;
                } else
                  r(D, Se);
                Se = Se.sibling;
              }
              L.type === He ? (x = xl(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = ef(L.type, L.key, L.props, null, D.mode, K), K.ref = lo(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case it:
            e: {
              for (Se = L.key; x !== null; ) {
                if (x.key === Se)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    u(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                    break e;
                  } else {
                    u(D, x);
                    break;
                  }
                else
                  r(D, x);
                x = x.sibling;
              }
              x = _l(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case Rt:
            return Se = L._init, kn(D, x, Se(L._payload), K);
        }
        if (In(L))
          return ge(D, x, L, K);
        if (be(L))
          return Ce(D, x, L, K);
        Rc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (u(D, x.sibling), x = c(x, L), x.return = D, D = x) : (u(D, x), x = Ls(L, D.mode, K), x.return = D, D = x), m(D)) : u(D, x);
    }
    return kn;
  }
  var oo = Av(!0), Fv = Av(!1), ps = {}, ni = Je(ps), vs = Je(ps), so = Je(ps);
  function sl(n) {
    if (n === ps)
      throw Error(A(174));
    return n;
  }
  function Td(n, r) {
    switch (Bt(so, r), Bt(vs, n), Bt(ni, ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Nt(ni), Bt(ni, r);
  }
  function Lu() {
    Nt(ni), Nt(vs), Nt(so);
  }
  function Me(n) {
    sl(so.current);
    var r = sl(ni.current), u = pn(r, n.type);
    r !== u && (Bt(vs, n), Bt(ni, u));
  }
  function ot(n) {
    vs.current === n && (Nt(ni), Nt(vs));
  }
  var ze = Je(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ua = [];
  function Tc() {
    for (var n = 0; n < Ua.length; n++)
      Ua[n]._workInProgressVersionPrimary = null;
    Ua.length = 0;
  }
  var bc = ct.ReactCurrentDispatcher, bd = ct.ReactCurrentBatchConfig, cl = 0, un = null, V = null, yt = null, Ae = !1, Si = !1, ga = 0, fl = 0;
  function ln() {
    throw Error(A(321));
  }
  function dl(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!ka(n[u], r[u]))
        return !1;
    return !0;
  }
  function Mu(n, r, u, o, c, d) {
    if (cl = d, un = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bc.current = n === null || n.memoizedState === null ? ry : ay, n = u(o, c), Si) {
      d = 0;
      do {
        if (Si = !1, ga = 0, 25 <= d)
          throw Error(A(301));
        d += 1, yt = V = null, r.updateQueue = null, bc.current = xd, n = u(o, c);
      } while (Si);
    }
    if (bc.current = Vc, r = V !== null && V.next !== null, cl = 0, yt = V = un = null, Ae = !1, r)
      throw Error(A(300));
    return n;
  }
  function pl() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? un.memoizedState = yt = n : yt = yt.next = n, yt;
  }
  function ta() {
    if (V === null) {
      var n = un.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = V.next;
    var r = yt === null ? un.memoizedState : yt.next;
    if (r !== null)
      yt = r, V = n;
    else {
      if (n === null)
        throw Error(A(310));
      V = n, n = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, yt === null ? un.memoizedState = yt = n : yt = yt.next = n;
    }
    return yt;
  }
  function vl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function hs(n) {
    var r = ta(), u = r.queue;
    if (u === null)
      throw Error(A(311));
    u.lastRenderedReducer = n;
    var o = V, c = o.baseQueue, d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, u.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, b = null, U = d;
      do {
        var I = U.lane;
        if ((cl & I) === I)
          b !== null && (b = b.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var Q = {
            lane: I,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          b === null ? (E = b = Q, m = o) : b = b.next = Q, un.lanes |= I, Qi |= I;
        }
        U = U.next;
      } while (U !== null && U !== d);
      b === null ? m = o : b.next = E, ka(o, r.memoizedState) || (Nn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, u.lastRenderedState = o;
    }
    if (n = u.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, un.lanes |= d, Qi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function ms(n) {
    var r = ta(), u = r.queue;
    if (u === null)
      throw Error(A(311));
    u.lastRenderedReducer = n;
    var o = u.dispatch, c = u.pending, d = r.memoizedState;
    if (c !== null) {
      u.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ka(d, r.memoizedState) || (Nn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), u.lastRenderedState = d;
    }
    return [d, o];
  }
  function wc() {
  }
  function xc(n, r) {
    var u = un, o = ta(), c = r(), d = !ka(o.memoizedState, c);
    if (d && (o.memoizedState = c, Nn = !0), o = o.queue, ys(kc.bind(null, u, o, n), [n]), o.getSnapshot !== r || d || yt !== null && yt.memoizedState.tag & 1) {
      if (u.flags |= 2048, hl(9, Dc.bind(null, u, o, c, r), void 0, null), gn === null)
        throw Error(A(349));
      (cl & 30) !== 0 || _c(u, r, c);
    }
    return c;
  }
  function _c(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Dc(n, r, u, o) {
    r.value = u, r.getSnapshot = o, Oc(r) && Lc(n);
  }
  function kc(n, r, u) {
    return u(function() {
      Oc(r) && Lc(n);
    });
  }
  function Oc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !ka(n, u);
    } catch {
      return !0;
    }
  }
  function Lc(n) {
    var r = Pi(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function Mc(n) {
    var r = Aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vl, lastRenderedState: n }, r.queue = n, n = n.dispatch = jc.bind(null, un, n), [r.memoizedState, n];
  }
  function hl(n, r, u, o) {
    return n = { tag: n, create: r, destroy: u, deps: o, next: null }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Nc() {
    return ta().memoizedState;
  }
  function ml(n, r, u, o) {
    var c = Aa();
    un.flags |= n, c.memoizedState = hl(1 | r, u, void 0, o === void 0 ? null : o);
  }
  function $i(n, r, u, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (V !== null) {
      var m = V.memoizedState;
      if (d = m.destroy, o !== null && dl(o, m.deps)) {
        c.memoizedState = hl(r, u, d, o);
        return;
      }
    }
    un.flags |= n, c.memoizedState = hl(1 | r, u, d, o);
  }
  function zc(n, r) {
    return ml(8390656, 8, n, r);
  }
  function ys(n, r) {
    return $i(2048, 8, n, r);
  }
  function Uc(n, r) {
    return $i(4, 2, n, r);
  }
  function Ac(n, r) {
    return $i(4, 4, n, r);
  }
  function wd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function co(n, r, u) {
    return u = u != null ? u.concat([n]) : null, $i(4, 4, wd.bind(null, r, n), u);
  }
  function Fc() {
  }
  function fo(n, r) {
    var u = ta();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && dl(r, o[1]) ? o[0] : (u.memoizedState = [n, r], n);
  }
  function Nu(n, r) {
    var u = ta();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && dl(r, o[1]) ? o[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function na(n, r, u) {
    return (cl & 21) === 0 ? (n.baseState && (n.baseState = !1, Nn = !0), n.memoizedState = u) : (ka(u, r) || (u = Yl(), un.lanes |= u, Qi |= u, n.baseState = !0), r);
  }
  function ny(n, r) {
    var u = kt;
    kt = u !== 0 && 4 > u ? u : 4, n(!0);
    var o = bd.transition;
    bd.transition = {};
    try {
      n(!1), r();
    } finally {
      kt = u, bd.transition = o;
    }
  }
  function Zt() {
    return ta().memoizedState;
  }
  function Hc(n, r, u) {
    var o = zn(n);
    if (u = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null }, po(n))
      gs(r, u);
    else if (u = Ov(n, r, u, o), u !== null) {
      var c = Cr();
      Rr(u, n, o, c), Hv(u, r, o);
    }
  }
  function jc(n, r, u) {
    var o = zn(n), c = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (po(n))
      gs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, u);
          if (c.hasEagerState = !0, c.eagerState = E, ka(E, m)) {
            var b = r.interleaved;
            b === null ? (c.next = c, Sd(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      u = Ov(n, r, c, o), u !== null && (c = Cr(), Rr(u, n, o, c), Hv(u, r, o));
    }
  }
  function po(n) {
    var r = n.alternate;
    return n === un || r !== null && r === un;
  }
  function gs(n, r) {
    Si = Ae = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function Hv(n, r, u) {
    if ((u & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, vi(n, u);
    }
  }
  var Vc = { readContext: Dn, useCallback: ln, useContext: ln, useEffect: ln, useImperativeHandle: ln, useInsertionEffect: ln, useLayoutEffect: ln, useMemo: ln, useReducer: ln, useRef: ln, useState: ln, useDebugValue: ln, useDeferredValue: ln, useTransition: ln, useMutableSource: ln, useSyncExternalStore: ln, useId: ln, unstable_isNewReconciler: !1 }, ry = { readContext: Dn, useCallback: function(n, r) {
    return Aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Dn, useEffect: zc, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, ml(
      4194308,
      4,
      wd.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return ml(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ml(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Aa();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var o = Aa();
    return r = u !== void 0 ? u(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hc.bind(null, un, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Mc, useDebugValue: Fc, useDeferredValue: function(n) {
    return Aa().memoizedState = n;
  }, useTransition: function() {
    var n = Mc(!1), r = n[0];
    return n = ny.bind(null, n[1]), Aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var o = un, c = Aa();
    if (an) {
      if (u === void 0)
        throw Error(A(407));
      u = u();
    } else {
      if (u = r(), gn === null)
        throw Error(A(349));
      (cl & 30) !== 0 || _c(o, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, zc(kc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, hl(9, Dc.bind(null, o, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Aa(), r = gn.identifierPrefix;
    if (an) {
      var u = Vi, o = nr;
      u = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = ga++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = fl++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: Dn,
    useCallback: fo,
    useContext: Dn,
    useEffect: ys,
    useImperativeHandle: co,
    useInsertionEffect: Uc,
    useLayoutEffect: Ac,
    useMemo: Nu,
    useReducer: hs,
    useRef: Nc,
    useState: function() {
      return hs(vl);
    },
    useDebugValue: Fc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, V.memoizedState, n);
    },
    useTransition: function() {
      var n = hs(vl)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: wc,
    useSyncExternalStore: xc,
    useId: Zt,
    unstable_isNewReconciler: !1
  }, xd = { readContext: Dn, useCallback: fo, useContext: Dn, useEffect: ys, useImperativeHandle: co, useInsertionEffect: Uc, useLayoutEffect: Ac, useMemo: Nu, useReducer: ms, useRef: Nc, useState: function() {
    return ms(vl);
  }, useDebugValue: Fc, useDeferredValue: function(n) {
    var r = ta();
    return V === null ? r.memoizedState = n : na(r, V.memoizedState, n);
  }, useTransition: function() {
    var n = ms(vl)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: wc, useSyncExternalStore: xc, useId: Zt, unstable_isNewReconciler: !1 };
  function vo(n, r) {
    try {
      var u = "", o = r;
      do
        u += ht(o), o = o.return;
      while (o);
      var c = u;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ss(n, r, u) {
    return { value: n, source: null, stack: u != null ? u : null, digest: r != null ? r : null };
  }
  function Pc(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var iy = typeof WeakMap == "function" ? WeakMap : Map;
  function jv(n, r, u) {
    u = Bi(-1, u), u.tag = 3, u.payload = { element: null };
    var o = r.value;
    return u.callback = function() {
      qc || (qc = !0, Cl = o), Pc(n, r);
    }, u;
  }
  function Es(n, r, u) {
    u = Bi(-1, u), u.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      u.payload = function() {
        return o(c);
      }, u.callback = function() {
        Pc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (u.callback = function() {
      Pc(n, r), typeof o != "function" && (Ri === null ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), u;
  }
  function Vv(n, r, u) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new iy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(u) || (c.add(u), n = dy.bind(null, n, r, u), r.then(n, n));
  }
  function _d(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Dd(n, r, u, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Bi(-1, 1), r.tag = 2, ku(u, r, 1))), u.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var uy = ct.ReactCurrentOwner, Nn = !1;
  function jn(n, r, u, o) {
    r.child = n === null ? Fv(r, null, u, o) : oo(r, n.child, u, o);
  }
  function zu(n, r, u, o, c) {
    u = u.render;
    var d = r.ref;
    return ne(r, c), o = Mu(n, r, u, o, d, c), u = pl(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (an && u && pc(r), r.flags |= 1, jn(n, r, o, c), r.child);
  }
  function Bc(n, r, u, o, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = ef(u.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ts, u(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Hu(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, u, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref)
        if (Nn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (Nn = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return ho(n, r, u, o, c);
  }
  function yl(n, r, u) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Bt(Co, Sa), Sa |= u;
      else {
        if ((u & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Bt(Co, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : u, Bt(Co, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | u, r.memoizedState = null) : o = u, Bt(Co, Sa), Sa |= o;
    return jn(n, r, c, u), r.child;
  }
  function et(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ho(n, r, u, o, c) {
    var d = sn(u) ? Xr : Pe.current;
    return d = La(r, d), ne(r, c), u = Mu(n, r, u, o, d, c), o = pl(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (an && o && pc(r), r.flags |= 1, jn(n, r, u, c), r.child);
  }
  function kd(n, r, u, o, c) {
    if (sn(u)) {
      var d = !0;
      dc(r);
    } else
      d = !1;
    if (ne(r, c), r.stateNode === null)
      gr(n, r), Nv(r, u, o), Cc(r, u, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var b = m.context, U = u.contextType;
      typeof U == "object" && U !== null ? U = Dn(U) : (U = sn(u) ? Xr : Pe.current, U = La(r, U));
      var I = u.getDerivedStateFromProps, Q = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || b !== U) && zv(r, m, o, U), Du = !1;
      var Y = r.memoizedState;
      m.state = Y, Ou(r, o, m, c), b = r.memoizedState, E !== o || Y !== b || Rn.current || Du ? (typeof I == "function" && (Rd(r, u, I, o), b = r.memoizedState), (E = Du || Mv(r, u, E, o, Y, b, U)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Hn(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ya(r.type, E), m.props = U, Q = r.pendingProps, Y = m.context, b = u.contextType, typeof b == "object" && b !== null ? b = Dn(b) : (b = sn(u) ? Xr : Pe.current, b = La(r, b));
      var oe = u.getDerivedStateFromProps;
      (I = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || Y !== b) && zv(r, m, o, b), Du = !1, Y = r.memoizedState, m.state = Y, Ou(r, o, m, c);
      var ge = r.memoizedState;
      E !== Q || Y !== ge || Rn.current || Du ? (typeof oe == "function" && (Rd(r, u, oe, o), ge = r.memoizedState), (U = Du || Mv(r, u, U, o, Y, ge, b) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = b, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Pv(n, r, u, o, d, c);
  }
  function Pv(n, r, u, o, c, d) {
    et(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && xv(r, u, !1), ar(n, r, d);
    o = r.stateNode, uy.current = r;
    var E = m && typeof u.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = oo(r, n.child, null, d), r.child = oo(r, null, E, d)) : jn(n, r, E, d), r.memoizedState = o.state, c && xv(r, u, !0), r.child;
  }
  function Bv(n) {
    var r = n.stateNode;
    r.pendingContext ? bu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bu(n, r.context, !1), Td(n, r.containerInfo);
  }
  function $c(n, r, u, o, c) {
    return mn(), md(c), r.flags |= 256, jn(n, r, u, o), r.child;
  }
  var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Od(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ld(n, r, u) {
    var o = r.pendingProps, c = ze.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Bt(ze, c & 1), n === null)
      return hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Os(m, o, 0, null), n = xl(n, o, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Od(u), r.memoizedState = gl, n) : Md(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ly(n, r, m, o, E, c, u);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Hu(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hu(E, d) : (d = xl(d, m, u, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Od(u) : { baseLanes: m.baseLanes | u, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~u, r.memoizedState = gl, o;
    }
    return d = n.child, n = d.sibling, o = Hu(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = u), o.return = r, o.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Md(n, r) {
    return r = Os({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mo(n, r, u, o) {
    return o !== null && md(o), oo(r, n.child, null, u), n = Md(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ly(n, r, u, o, c, d, m) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, o = Ss(Error(A(422))), mo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Os({ mode: "visible", children: o.children }, c, 0, null), d = xl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && oo(r, n.child, null, m), r.child.memoizedState = Od(m), r.memoizedState = gl, d);
    if ((r.mode & 1) === 0)
      return mo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(A(419)), o = Ss(d, o, void 0), mo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Nn || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Pi(n, c), Rr(o, n, c, -1));
      }
      return Yd(), o = Ss(Error(A(421))), mo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ti(c.nextSibling), ma = r, an = !0, za = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = Vi, Jr[yr++] = Na, nr = n.id, Vi = n.overflow, Na = r), r = Md(r, o.children), r.flags |= 4096, r);
  }
  function Nd(n, r, u) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Gn(n.return, r, u);
  }
  function Yc(n, r, u, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: u, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = u, d.tailMode = c);
  }
  function zd(n, r, u) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (jn(n, r, o.children, u), o = ze.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Nd(n, u, r);
            else if (n.tag === 19)
              Nd(n, u, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Bt(ze, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (u = r.child, c = null; u !== null; )
            n = u.alternate, n !== null && yn(n) === null && (c = u), u = u.sibling;
          u = c, u === null ? (c = r.child, r.child = null) : (c = u.sibling, u.sibling = null), Yc(r, !1, c, u, d);
          break;
        case "backwards":
          for (u = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = u, u = c, c = n;
          }
          Yc(r, !0, u, null, d);
          break;
        case "together":
          Yc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Qi |= r.lanes, (u & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, u = Hu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Hu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Yi(n, r, u) {
    switch (r.tag) {
      case 3:
        Bv(r), mn();
        break;
      case 5:
        Me(r);
        break;
      case 1:
        sn(r.type) && dc(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Bt(gi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Bt(ze, ze.current & 1), r.flags |= 128, null) : (u & r.child.childLanes) !== 0 ? Ld(n, r, u) : (Bt(ze, ze.current & 1), n = ar(n, r, u), n !== null ? n.sibling : null);
        Bt(ze, ze.current & 1);
        break;
      case 19:
        if (o = (u & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return zd(n, r, u);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Bt(ze, ze.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yl(n, r, u);
    }
    return ar(n, r, u);
  }
  var Cs, Sl, Fa, Vn;
  Cs = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, Sl = function() {
  }, Fa = function(n, r, u, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, sl(ni.current);
      var d = null;
      switch (u) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = fc);
      }
      _n(u, o);
      var m;
      u = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var E = c[U];
            for (m in E)
              E.hasOwnProperty(m) && (u || (u = {}), u[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (zt.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var b = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && b !== E && (b != null || E != null))
          if (U === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (u || (u = {}), u[m] = "");
              for (m in b)
                b.hasOwnProperty(m) && E[m] !== b[m] && (u || (u = {}), u[m] = b[m]);
            } else
              u || (d || (d = []), d.push(
                U,
                u
              )), u = b;
          else
            U === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, E = E ? E.__html : void 0, b != null && E !== b && (d = d || []).push(U, b)) : U === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(U, "" + b) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (zt.hasOwnProperty(U) ? (b != null && U === "onScroll" && Kt("scroll", n), d || E === b || (d = [])) : (d = d || []).push(U, b));
      }
      u && (d = d || []).push("style", u);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Vn = function(n, r, u, o) {
    u !== o && (r.flags |= 4);
  };
  function Rs(n, r) {
    if (!an)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var u = null; r !== null; )
            r.alternate !== null && (u = r), r = r.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var o = null; u !== null; )
            u.alternate !== null && (o = u), u = u.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = u, r;
  }
  function oy(n, r, u) {
    var o = r.pendingProps;
    switch (vd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sr(r), null;
      case 1:
        return sn(r.type) && Ma(), Sr(r), null;
      case 3:
        return o = r.stateNode, Lu(), Nt(Rn), Nt(Pe), Tc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, za !== null && (ks(za), za = null))), Sl(n, r), Sr(r), null;
      case 5:
        ot(r);
        var c = sl(so.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Fa(n, r, u, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(A(166));
            return Sr(r), null;
          }
          if (n = sl(ni.current), mc(r)) {
            o = r.stateNode, u = r.type;
            var d = r.memoizedProps;
            switch (o[mi] = r, o[ul] = d, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++)
                  Kt(is[c], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                An(o, d), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                hr(o, d), Kt("invalid", o);
            }
            _n(u, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && cc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : zt.hasOwnProperty(m) && E != null && m === "onScroll" && Kt("scroll", o);
              }
            switch (u) {
              case "input":
                pr(o), Br(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = fc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(u, { is: o.is }) : (n = m.createElement(u), u === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, u), n[mi] = r, n[ul] = o, Cs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(u, o), u) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++)
                    Kt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Kt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = o;
                  break;
                case "details":
                  Kt("toggle", n), c = o;
                  break;
                case "input":
                  An(n, o), c = Yn(n, o), Kt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), Kt("invalid", n);
                  break;
                default:
                  c = o;
              }
              _n(u, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var b = E[d];
                  d === "style" ? Mt(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && oi(n, b)) : d === "children" ? typeof b == "string" ? (u !== "textarea" || b !== "") && ca(n, b) : typeof b == "number" && ca(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (zt.hasOwnProperty(d) ? b != null && d === "onScroll" && Kt("scroll", n) : b != null && We(n, d, b, m));
                }
              switch (u) {
                case "input":
                  pr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = fc);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Vn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(A(166));
          if (u = sl(so.current), sl(ni.current), mc(r)) {
            if (o = r.stateNode, u = r.memoizedProps, o[mi] = r, (d = o.nodeValue !== u) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  cc(o.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && cc(o.nodeValue, u, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(o), o[mi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Nt(ze), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && ea !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            kv(), mn(), r.flags |= 98560, d = !1;
          else if (d = mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(A(317));
              d[mi] = r;
            } else
              mn(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            za !== null && (ks(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = u, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (ze.current & 1) !== 0 ? Bn === 0 && (Bn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return Lu(), Sl(n, r), n === null && ao(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return _u(r.type._context), Sr(r), null;
      case 17:
        return sn(r.type) && Ma(), Sr(r), null;
      case 19:
        if (Nt(ze), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Rs(d, !1);
          else {
            if (Bn !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Rs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = u, u = r.child; u !== null; )
                    d = u, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Bt(ze, ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Tt() > To && (r.flags |= 128, o = !0, Rs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Rs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an)
                return Sr(r), null;
            } else
              2 * Tt() - d.renderingStartTime > To && u !== 1073741824 && (r.flags |= 128, o = !0, Rs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (u = d.last, u !== null ? u.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Tt(), r.sibling = null, u = ze.current, Bt(ze, o ? u & 1 | 2 : u & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Sa & 1073741824) !== 0 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Ud(n, r) {
    switch (vd(r), r.tag) {
      case 1:
        return sn(r.type) && Ma(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Lu(), Nt(Rn), Nt(Pe), Tc(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ot(r), null;
      case 13:
        if (Nt(ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(A(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Nt(ze), null;
      case 4:
        return Lu(), null;
      case 10:
        return _u(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ts = !1, Pn = !1, $v = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function yo(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (o) {
          bn(n, r, o);
        }
      else
        u.current = null;
  }
  function bs(n, r, u) {
    try {
      u();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var Yv = !1;
  function Iv(n, r) {
    if (ud = Da, n = ic(), Ai(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var o = u.getSelection && u.getSelection();
          if (o && o.rangeCount !== 0) {
            u = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              u.nodeType, d.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, E = -1, b = -1, U = 0, I = 0, Q = n, Y = null;
            t:
              for (; ; ) {
                for (var oe; Q !== u || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (b = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (oe = Q.firstChild) !== null; )
                  Y = Q, Q = oe;
                for (; ; ) {
                  if (Q === n)
                    break t;
                  if (Y === u && ++U === c && (E = m), Y === d && ++I === o && (b = m), (oe = Q.nextSibling) !== null)
                    break;
                  Q = Y, Y = Q.parentNode;
                }
                Q = oe;
              }
            u = E === -1 || b === -1 ? null : { start: E, end: b };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (al = { focusedElem: n, selectionRange: u }, Da = !1, he = r; he !== null; )
      if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, he = n;
      else
        for (; he !== null; ) {
          r = he;
          try {
            var ge = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, kn = ge.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ya(r.type, Ce), kn);
                    D.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (K) {
            bn(r, r.return, K);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, he = n;
            break;
          }
          he = r.return;
        }
    return ge = Yv, Yv = !1, ge;
  }
  function ws(n, r, u) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && bs(r, u, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var o = u.create;
          u.destroy = o();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function Ad(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Fd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Fd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[mi], delete r[ul], delete r[sd], delete r[ty], delete r[cd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Qv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ic(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Qv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function go(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = fc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (go(n, r, u), n = n.sibling; n !== null; )
        go(n, r, u), n = n.sibling;
  }
  function Ei(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ei(n, r, u), n = n.sibling; n !== null; )
        Ei(n, r, u), n = n.sibling;
  }
  var cn = null, Xn = !1;
  function Ha(n, r, u) {
    for (u = u.child; u !== null; )
      So(n, r, u), u = u.sibling;
  }
  function So(n, r, u) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(su, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Pn || yo(u, r);
      case 6:
        var o = cn, c = Xn;
        cn = null, Ha(n, r, u), cn = o, Xn = c, cn !== null && (Xn ? (n = cn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : cn.removeChild(u.stateNode));
        break;
      case 18:
        cn !== null && (Xn ? (n = cn, u = u.stateNode, n.nodeType === 8 ? Cu(n.parentNode, u) : n.nodeType === 1 && Cu(n, u), mu(n)) : Cu(cn, u.stateNode));
        break;
      case 4:
        o = cn, c = Xn, cn = u.stateNode.containerInfo, Xn = !0, Ha(n, r, u), cn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pn && (o = u.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && bs(u, r, m), c = c.next;
          } while (c !== o);
        }
        Ha(n, r, u);
        break;
      case 1:
        if (!Pn && (yo(u, r), o = u.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = u.memoizedProps, o.state = u.memoizedState, o.componentWillUnmount();
          } catch (E) {
            bn(u, r, E);
          }
        Ha(n, r, u);
        break;
      case 21:
        Ha(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Pn = (o = Pn) || u.memoizedState !== null, Ha(n, r, u), Pn = o) : Ha(n, r, u);
        break;
      default:
        Ha(n, r, u);
    }
  }
  function Ii(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new $v()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
        u.has(o) || (u.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var o = 0; o < u.length; o++) {
        var c = u[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  cn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (cn === null)
            throw Error(A(160));
          So(d, m, c), cn = null, Xn = !1;
          var b = c.alternate;
          b !== null && (b.return = null), c.return = null;
        } catch (U) {
          bn(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Wv(r, n), r = r.sibling;
  }
  function Wv(n, r) {
    var u = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), Ci(n), o & 4) {
          try {
            ws(3, n, n.return), xs(3, n);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
          try {
            ws(5, n, n.return);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ri(r, n), Ci(n), o & 512 && u !== null && yo(u, u.return);
        break;
      case 5:
        if (ri(r, n), Ci(n), o & 512 && u !== null && yo(u, u.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = u !== null ? u.memoizedProps : d, E = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Fn(c, d), vn(E, m);
              var U = vn(E, d);
              for (m = 0; m < b.length; m += 2) {
                var I = b[m], Q = b[m + 1];
                I === "style" ? Mt(c, Q) : I === "dangerouslySetInnerHTML" ? oi(c, Q) : I === "children" ? ca(c, Q) : We(c, I, Q, U);
              }
              switch (E) {
                case "input":
                  xn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var Y = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var oe = d.value;
                  oe != null ? vr(c, !!d.multiple, oe, !1) : Y !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[ul] = d;
            } catch (Ce) {
              bn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (ri(r, n), Ci(n), o & 4) {
          if (n.stateNode === null)
            throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ri(r, n), Ci(n), o & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            mu(r.containerInfo);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        break;
      case 4:
        ri(r, n), Ci(n);
        break;
      case 13:
        ri(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Tt())), o & 4 && Ii(n);
        break;
      case 22:
        if (I = u !== null && u.memoizedState !== null, n.mode & 1 ? (Pn = (U = Pn) || I, ri(r, n), Pn = U) : ri(r, n), Ci(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !I && (n.mode & 1) !== 0)
            for (he = n, I = n.child; I !== null; ) {
              for (Q = he = I; he !== null; ) {
                switch (Y = he, oe = Y.child, Y.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, Y, Y.return);
                    break;
                  case 1:
                    yo(Y, Y.return);
                    var ge = Y.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = Y, u = Y.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        bn(o, u, Ce);
                      }
                    }
                    break;
                  case 5:
                    yo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      Hd(Q);
                      continue;
                    }
                }
                oe !== null ? (oe.return = Y, he = oe) : Hd(Q);
              }
              I = I.sibling;
            }
          e:
            for (I = null, Q = n; ; ) {
              if (Q.tag === 5) {
                if (I === null) {
                  I = Q;
                  try {
                    c = Q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, b = Q.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, E.style.display = rt("display", m));
                  } catch (Ce) {
                    bn(n, n.return, Ce);
                  }
                }
              } else if (Q.tag === 6) {
                if (I === null)
                  try {
                    Q.stateNode.nodeValue = U ? "" : Q.memoizedProps;
                  } catch (Ce) {
                    bn(n, n.return, Ce);
                  }
              } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
                Q.child.return = Q, Q = Q.child;
                continue;
              }
              if (Q === n)
                break e;
              for (; Q.sibling === null; ) {
                if (Q.return === null || Q.return === n)
                  break e;
                I === Q && (I = null), Q = Q.return;
              }
              I === Q && (I = null), Q.sibling.return = Q.return, Q = Q.sibling;
            }
        }
        break;
      case 19:
        ri(r, n), Ci(n), o & 4 && Ii(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (Qv(u)) {
              var o = u;
              break e;
            }
            u = u.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Ic(n);
            Ei(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ic(n);
            go(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (b) {
        bn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function qv(n, r, u) {
    he = n, Eo(n);
  }
  function Eo(n, r, u) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ts;
        if (!m) {
          var E = c.alternate, b = E !== null && E.memoizedState !== null || Pn;
          E = Ts;
          var U = Pn;
          if (Ts = m, (Pn = b) && !U)
            for (he = c; he !== null; )
              m = he, b = m.child, m.tag === 22 && m.memoizedState !== null ? Xv(c) : b !== null ? (b.return = m, he = b) : Xv(c);
          for (; d !== null; )
            he = d, Eo(d), d = d.sibling;
          he = c, Ts = E, Pn = U;
        }
        Gv(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, he = d) : Gv(n);
    }
  }
  function Gv(n) {
    for (; he !== null; ) {
      var r = he;
      if ((r.flags & 8772) !== 0) {
        var u = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Pn || xs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Pn)
                  if (u === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? u.memoizedProps : ya(r.type, u.memoizedProps);
                    o.componentDidUpdate(c, u.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ol(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  ol(r, m, u);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = E;
                  var b = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      b.autoFocus && u.focus();
                      break;
                    case "img":
                      b.src && (u.src = b.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var I = U.memoizedState;
                    if (I !== null) {
                      var Q = I.dehydrated;
                      Q !== null && mu(Q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          Pn || r.flags & 512 && Ad(r);
        } catch (Y) {
          bn(r, r.return, Y);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, he = u;
        break;
      }
      he = r.return;
    }
  }
  function Hd(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, he = u;
        break;
      }
      he = r.return;
    }
  }
  function Xv(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              xs(4, r);
            } catch (b) {
              bn(r, u, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                bn(r, c, b);
              }
            }
            var d = r.return;
            try {
              Ad(r);
            } catch (b) {
              bn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ad(r);
            } catch (b) {
              bn(r, m, b);
            }
        }
      } catch (b) {
        bn(r, r.return, b);
      }
      if (r === n) {
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var Qc = Math.ceil, _s = ct.ReactCurrentDispatcher, jd = ct.ReactCurrentOwner, Er = ct.ReactCurrentBatchConfig, dt = 0, gn = null, Tn = null, Kn = 0, Sa = 0, Co = Je(0), Bn = 0, Ds = null, Qi = 0, Wc = 0, Ro = 0, El = null, Or = null, Vd = 0, To = 1 / 0, Wi = null, qc = !1, Cl = null, Ri = null, Uu = !1, Au = null, Gc = 0, bo = 0, Xc = null, Rl = -1, Tl = 0;
  function Cr() {
    return (dt & 6) !== 0 ? Tt() : Rl !== -1 ? Rl : Rl = Tt();
  }
  function zn(n) {
    return (n.mode & 1) === 0 ? 1 : (dt & 2) !== 0 && Kn !== 0 ? Kn & -Kn : yc.transition !== null ? (Tl === 0 && (Tl = Yl()), Tl) : (n = kt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Xo(n.type)), n);
  }
  function Rr(n, r, u, o) {
    if (50 < bo)
      throw bo = 0, Xc = null, Error(A(185));
    Li(n, u, o), ((dt & 2) === 0 || n !== gn) && (n === gn && ((dt & 2) === 0 && (Wc |= u), Bn === 4 && ja(n, Kn)), Tr(n, o), u === 1 && dt === 0 && (r.mode & 1) === 0 && (To = Tt() + 500, qn && Kr()));
  }
  function Tr(n, r) {
    var u = n.callbackNode;
    du(n, r);
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      u !== null && tr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (u != null && tr(u), r === 1)
        n.tag === 0 ? dd(Kv.bind(null, n)) : fd(Kv.bind(null, n)), od(function() {
          (dt & 6) === 0 && Kr();
        }), u = null;
      else {
        switch (Ql(o)) {
          case 1:
            u = Ga;
            break;
          case 4:
            u = ut;
            break;
          case 16:
            u = pi;
            break;
          case 536870912:
            u = Bl;
            break;
          default:
            u = pi;
        }
        u = Qd(u, wo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function wo(n, r) {
    if (Rl = -1, Tl = 0, (dt & 6) !== 0)
      throw Error(A(327));
    var u = n.callbackNode;
    if (_o() && n.callbackNode !== u)
      return null;
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = Zc(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Kc();
      (gn !== n || Kn !== r) && (Wi = null, To = Tt() + 500, bl(n, r));
      do
        try {
          cy();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (1);
      gd(), _s.current = d, dt = c, Tn !== null ? r = 0 : (gn = null, Kn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = pu(n), c !== 0 && (o = c, r = Pd(n, c))), r === 1)
        throw u = Ds, bl(n, 0), ja(n, o), Tr(n, Tt()), u;
      if (r === 6)
        ja(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Bd(c) && (r = Zc(n, o), r === 2 && (d = pu(n), d !== 0 && (o = d, r = Pd(n, d))), r === 1))
          throw u = Ds, bl(n, 0), ja(n, o), Tr(n, Tt()), u;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            wl(n, Or, Wi);
            break;
          case 3:
            if (ja(n, o), (o & 130023424) === o && (r = Vd + 500 - Tt(), 10 < r)) {
              if (Dr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = il(wl.bind(null, n, Or, Wi), r);
              break;
            }
            wl(n, Or, Wi);
            break;
          case 4:
            if (ja(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Qc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = il(wl.bind(null, n, Or, Wi), o);
              break;
            }
            wl(n, Or, Wi);
            break;
          case 5:
            wl(n, Or, Wi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Tr(n, Tt()), n.callbackNode === u ? wo.bind(null, n) : null;
  }
  function Pd(n, r) {
    var u = El;
    return n.current.memoizedState.isDehydrated && (bl(n, r).flags |= 256), n = Zc(n, r), n !== 2 && (r = Or, Or = u, r !== null && ks(r)), n;
  }
  function ks(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function Bd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var o = 0; o < u.length; o++) {
            var c = u[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ka(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null)
        u.return = r, r = u;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ja(n, r) {
    for (r &= ~Ro, r &= ~Wc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - _r(r), o = 1 << u;
      n[u] = -1, r &= ~o;
    }
  }
  function Kv(n) {
    if ((dt & 6) !== 0)
      throw Error(A(327));
    _o();
    var r = Dr(n, 0);
    if ((r & 1) === 0)
      return Tr(n, Tt()), null;
    var u = Zc(n, r);
    if (n.tag !== 0 && u === 2) {
      var o = pu(n);
      o !== 0 && (r = o, u = Pd(n, o));
    }
    if (u === 1)
      throw u = Ds, bl(n, 0), ja(n, r), Tr(n, Tt()), u;
    if (u === 6)
      throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wl(n, Or, Wi), Tr(n, Tt()), null;
  }
  function xo(n, r) {
    var u = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = u, dt === 0 && (To = Tt() + 500, qn && Kr());
    }
  }
  function Fu(n) {
    Au !== null && Au.tag === 0 && (dt & 6) === 0 && _o();
    var r = dt;
    dt |= 1;
    var u = Er.transition, o = kt;
    try {
      if (Er.transition = null, kt = 1, n)
        return n();
    } finally {
      kt = o, Er.transition = u, dt = r, (dt & 6) === 0 && Kr();
    }
  }
  function $d() {
    Sa = Co.current, Nt(Co);
  }
  function bl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, wv(u)), Tn !== null)
      for (u = Tn.return; u !== null; ) {
        var o = u;
        switch (vd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Ma();
            break;
          case 3:
            Lu(), Nt(Rn), Nt(Pe), Tc();
            break;
          case 5:
            ot(o);
            break;
          case 4:
            Lu();
            break;
          case 13:
            Nt(ze);
            break;
          case 19:
            Nt(ze);
            break;
          case 10:
            _u(o.type._context);
            break;
          case 22:
          case 23:
            $d();
        }
        u = u.return;
      }
    if (gn = n, Tn = n = Hu(n.current, null), Kn = Sa = r, Bn = 0, Ds = null, Ro = Wc = Qi = 0, Or = El = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (u = rr[r], o = u.interleaved, o !== null) {
          u.interleaved = null;
          var c = o.next, d = u.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          u.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Zv(n, r) {
    do {
      var u = Tn;
      try {
        if (gd(), bc.current = Vc, Ae) {
          for (var o = un.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ae = !1;
        }
        if (cl = 0, yt = V = un = null, Si = !1, ga = 0, jd.current = null, u === null || u.return === null) {
          Bn = 1, Ds = r, Tn = null;
          break;
        }
        e: {
          var d = n, m = u.return, E = u, b = r;
          if (r = Kn, E.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var U = b, I = E, Q = I.tag;
            if ((I.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var Y = I.alternate;
              Y ? (I.updateQueue = Y.updateQueue, I.memoizedState = Y.memoizedState, I.lanes = Y.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var oe = _d(m);
            if (oe !== null) {
              oe.flags &= -257, Dd(oe, m, E, d, r), oe.mode & 1 && Vv(d, U, r), r = oe, b = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(b), r.updateQueue = Ce;
              } else
                ge.add(b);
              break e;
            } else {
              if ((r & 1) === 0) {
                Vv(d, U, r), Yd();
                break e;
              }
              b = Error(A(426));
            }
          } else if (an && E.mode & 1) {
            var kn = _d(m);
            if (kn !== null) {
              (kn.flags & 65536) === 0 && (kn.flags |= 256), Dd(kn, m, E, d, r), md(vo(b, E));
              break e;
            }
          }
          d = b = vo(b, E), Bn !== 4 && (Bn = 2), El === null ? El = [d] : El.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = jv(d, b, r);
                Cd(d, D);
                break e;
              case 1:
                E = b;
                var x = d.type, L = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ri === null || !Ri.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Es(d, E, r);
                  Cd(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Id(u);
      } catch (Re) {
        r = Re, Tn === u && u !== null && (Tn = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kc() {
    var n = _s.current;
    return _s.current = Vc, n === null ? Vc : n;
  }
  function Yd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), gn === null || (Qi & 268435455) === 0 && (Wc & 268435455) === 0 || ja(gn, Kn);
  }
  function Zc(n, r) {
    var u = dt;
    dt |= 2;
    var o = Kc();
    (gn !== n || Kn !== r) && (Wi = null, bl(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (1);
    if (gd(), dt = u, _s.current = o, Tn !== null)
      throw Error(A(261));
    return gn = null, Kn = 0, Bn;
  }
  function sy() {
    for (; Tn !== null; )
      Jv(Tn);
  }
  function cy() {
    for (; Tn !== null && !di(); )
      Jv(Tn);
  }
  function Jv(n) {
    var r = th(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Id(n) : Tn = r, jd.current = null;
  }
  function Id(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (u = oy(u, r, Sa), u !== null) {
          Tn = u;
          return;
        }
      } else {
        if (u = Ud(u, r), u !== null) {
          u.flags &= 32767, Tn = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, Tn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Tn = r;
        return;
      }
      Tn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function wl(n, r, u) {
    var o = kt, c = Er.transition;
    try {
      Er.transition = null, kt = 1, fy(n, r, u, o);
    } finally {
      Er.transition = c, kt = o;
    }
    return null;
  }
  function fy(n, r, u, o) {
    do
      _o();
    while (Au !== null);
    if ((dt & 6) !== 0)
      throw Error(A(327));
    u = n.finishedWork;
    var c = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = u.lanes | u.childLanes;
    if (Pf(n, d), n === gn && (Tn = gn = null, Kn = 0), (u.subtreeFlags & 2064) === 0 && (u.flags & 2064) === 0 || Uu || (Uu = !0, Qd(pi, function() {
      return _o(), null;
    })), d = (u.flags & 15990) !== 0, (u.subtreeFlags & 15990) !== 0 || d) {
      d = Er.transition, Er.transition = null;
      var m = kt;
      kt = 1;
      var E = dt;
      dt |= 4, jd.current = null, Iv(n, u), Wv(u, n), uc(al), Da = !!ud, al = ud = null, n.current = u, qv(u), Pl(), dt = E, kt = m, Er.transition = d;
    } else
      n.current = u;
    if (Uu && (Uu = !1, Au = n, Gc = c), d = n.pendingLanes, d === 0 && (Ri = null), Wo(u.stateNode), Tr(n, Tt()), r !== null)
      for (o = n.onRecoverableError, u = 0; u < r.length; u++)
        c = r[u], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (qc)
      throw qc = !1, n = Cl, Cl = null, n;
    return (Gc & 1) !== 0 && n.tag !== 0 && _o(), d = n.pendingLanes, (d & 1) !== 0 ? n === Xc ? bo++ : (bo = 0, Xc = n) : bo = 0, Kr(), null;
  }
  function _o() {
    if (Au !== null) {
      var n = Ql(Gc), r = Er.transition, u = kt;
      try {
        if (Er.transition = null, kt = 16 > n ? 16 : n, Au === null)
          var o = !1;
        else {
          if (n = Au, Au = null, Gc = 0, (dt & 6) !== 0)
            throw Error(A(331));
          var c = dt;
          for (dt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if ((he.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var b = 0; b < E.length; b++) {
                  var U = E[b];
                  for (he = U; he !== null; ) {
                    var I = he;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, I, d);
                    }
                    var Q = I.child;
                    if (Q !== null)
                      Q.return = I, he = Q;
                    else
                      for (; he !== null; ) {
                        I = he;
                        var Y = I.sibling, oe = I.return;
                        if (Fd(I), I === U) {
                          he = null;
                          break;
                        }
                        if (Y !== null) {
                          Y.return = oe, he = Y;
                          break;
                        }
                        he = oe;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var kn = Ce.sibling;
                      Ce.sibling = null, Ce = kn;
                    } while (Ce !== null);
                  }
                }
                he = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null)
              m.return = d, he = m;
            else
              e:
                for (; he !== null; ) {
                  if (d = he, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, he = D;
                    break e;
                  }
                  he = d.return;
                }
          }
          var x = n.current;
          for (he = x; he !== null; ) {
            m = he;
            var L = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && L !== null)
              L.return = m, he = L;
            else
              e:
                for (m = x; he !== null; ) {
                  if (E = he, (E.flags & 2048) !== 0)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xs(9, E);
                      }
                    } catch (Re) {
                      bn(E, E.return, Re);
                    }
                  if (E === m) {
                    he = null;
                    break e;
                  }
                  var K = E.sibling;
                  if (K !== null) {
                    K.return = E.return, he = K;
                    break e;
                  }
                  he = E.return;
                }
          }
          if (dt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(su, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        kt = u, Er.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, u) {
    r = vo(u, r), r = jv(n, r, 1), n = ku(n, r, 1), r = Cr(), n !== null && (Li(n, 1, r), Tr(n, r));
  }
  function bn(n, r, u) {
    if (n.tag === 3)
      eh(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          eh(r, n, u);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ri === null || !Ri.has(o))) {
            n = vo(u, n), n = Es(r, n, 1), r = ku(r, n, 1), n = Cr(), r !== null && (Li(r, 1, n), Tr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function dy(n, r, u) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & u, gn === n && (Kn & u) === u && (Bn === 4 || Bn === 3 && (Kn & 130023424) === Kn && 500 > Tt() - Vd ? bl(n, 0) : Ro |= u), Tr(n, r);
  }
  function Jc(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = cu, cu <<= 1, (cu & 130023424) === 0 && (cu = 4194304)));
    var u = Cr();
    n = Pi(n, r), n !== null && (Li(n, r, u), Tr(n, u));
  }
  function py(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), Jc(n, u);
  }
  function vy(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (u = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), Jc(n, u);
  }
  var th;
  th = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Nn = !0;
      else {
        if ((n.lanes & u) === 0 && (r.flags & 128) === 0)
          return Nn = !1, Yi(n, r, u);
        Nn = (n.flags & 131072) !== 0;
      }
    else
      Nn = !1, an && (r.flags & 1048576) !== 0 && pd(r, uo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = La(r, Pe.current);
        ne(r, u), c = Mu(null, r, o, n, c, u);
        var d = pl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ed(r), c.updater = Ec, r.stateNode = c, c._reactInternals = r, Cc(r, o, n, u), r = Pv(null, r, o, !0, d, u)) : (r.tag = 0, an && d && pc(r), jn(null, r, c, u), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ya(o, n), c) {
            case 0:
              r = ho(null, r, o, n, u);
              break e;
            case 1:
              r = kd(null, r, o, n, u);
              break e;
            case 11:
              r = zu(null, r, o, n, u);
              break e;
            case 14:
              r = Bc(null, r, o, ya(o.type, n), u);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), ho(n, r, o, c, u);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), kd(n, r, o, c, u);
      case 3:
        e: {
          if (Bv(r), n === null)
            throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Hn(n, r), Ou(r, o, null, u);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = vo(Error(A(423)), r), r = $c(n, r, o, u, c);
              break e;
            } else if (o !== c) {
              c = vo(Error(A(424)), r), r = $c(n, r, o, u, c);
              break e;
            } else
              for (ea = ti(r.stateNode.containerInfo.firstChild), ma = r, an = !0, za = null, u = Fv(r, null, o, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, u);
              break e;
            }
            jn(n, r, o, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Me(r), n === null && hc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, os(o, c) ? m = null : d !== null && os(o, d) && (r.flags |= 32), et(n, r), jn(n, r, m, u), r.child;
      case 6:
        return n === null && hc(r), null;
      case 13:
        return Ld(n, r, u);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = oo(r, null, o, u) : jn(n, r, o, u), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), zu(n, r, o, c, u);
      case 7:
        return jn(n, r, r.pendingProps, u), r.child;
      case 8:
        return jn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return jn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Bt(gi, o._currentValue), o._currentValue = m, d !== null)
            if (ka(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = ar(n, r, u);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var b = E.firstContext; b !== null; ) {
                    if (b.context === o) {
                      if (d.tag === 1) {
                        b = Bi(-1, u & -u), b.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var I = U.pending;
                          I === null ? b.next = b : (b.next = I.next, I.next = b), U.pending = b;
                        }
                      }
                      d.lanes |= u, b = d.alternate, b !== null && (b.lanes |= u), Gn(
                        d.return,
                        u,
                        r
                      ), E.lanes |= u;
                      break;
                    }
                    b = b.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(A(341));
                  m.lanes |= u, E = m.alternate, E !== null && (E.lanes |= u), Gn(m, u, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          jn(n, r, c.children, u), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ne(r, u), c = Dn(c), o = o(c), r.flags |= 1, jn(n, r, o, u), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Bc(n, r, o, c, u);
      case 15:
        return ra(n, r, r.type, r.pendingProps, u);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, sn(o) ? (n = !0, dc(r)) : n = !1, ne(r, u), Nv(r, o, c), Cc(r, o, c, u), Pv(null, r, o, !0, n, u);
      case 19:
        return zd(n, r, u);
      case 22:
        return yl(n, r, u);
    }
    throw Error(A(156, r.tag));
  };
  function Qd(n, r) {
    return en(n, r);
  }
  function hy(n, r, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, u, o) {
    return new hy(n, r, u, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === At)
        return 14;
    }
    return 2;
  }
  function Hu(n, r) {
    var u = n.alternate;
    return u === null ? (u = Va(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function ef(n, r, u, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Wd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case He:
            return xl(u.children, c, d, r);
          case nn:
            m = 8, c |= 8;
            break;
          case wn:
            return n = Va(12, u, r, c | 2), n.elementType = wn, n.lanes = d, n;
          case Ue:
            return n = Va(13, u, r, c), n.elementType = Ue, n.lanes = d, n;
          case Ke:
            return n = Va(19, u, r, c), n.elementType = Ke, n.lanes = d, n;
          case ye:
            return Os(u, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Qt:
                  m = 10;
                  break e;
                case Dt:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case At:
                  m = 14;
                  break e;
                case Rt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(A(130, n == null ? n : typeof n, ""));
        }
    return r = Va(m, u, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function xl(n, r, u, o) {
    return n = Va(7, n, o, r), n.lanes = u, n;
  }
  function Os(n, r, u, o) {
    return n = Va(22, n, o, r), n.elementType = ye, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Ls(n, r, u) {
    return n = Va(6, n, null, r), n.lanes = u, n;
  }
  function _l(n, r, u) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function yy(n, r, u, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Il(0), this.expirationTimes = Il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Il(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function tf(n, r, u, o, c, d, m, E, b) {
    return n = new yy(n, r, u, E, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(d), n;
  }
  function nh(n, r, u) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: u };
  }
  function qd(n) {
    if (!n)
      return yi;
    n = n._reactInternals;
    e: {
      if (Xe(n) !== n || n.tag !== 1)
        throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (sn(u))
        return fs(n, u, r);
    }
    return r;
  }
  function rh(n, r, u, o, c, d, m, E, b) {
    return n = tf(u, o, !0, n, c, d, m, E, b), n.context = qd(null), u = n.current, o = Cr(), c = zn(u), d = Bi(o, c), d.callback = r != null ? r : null, ku(u, d, c), n.current.lanes = c, Li(n, c, o), Tr(n, o), n;
  }
  function Ms(n, r, u, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return u = qd(u), r.context === null ? r.context = u : r.pendingContext = u, r = Bi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ku(c, r, m), n !== null && (Rr(n, c, m, d), Sc(n, c, m)), m;
  }
  function nf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function Gd(n, r) {
    ah(n, r), (n = n.alternate) && ah(n, r);
  }
  function ih() {
    return null;
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rf(n) {
    this._internalRoot = n;
  }
  qi.prototype.render = rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(A(409));
    Ms(n, r, null, null);
  }, qi.prototype.unmount = rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fu(function() {
        Ms(null, n, null, null);
      }), r[ji] = null;
    }
  };
  function qi(n) {
    this._internalRoot = n;
  }
  qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ql();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Pt.length && r !== 0 && r < Pt[u].priority; u++)
        ;
      Pt.splice(u, 0, n), u === 0 && Js(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function uh() {
  }
  function gy(n, r, u, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = nf(m);
          d.call(U);
        };
      }
      var m = rh(r, o, n, 0, null, !1, !1, "", uh);
      return n._reactRootContainer = m, n[ji] = m.current, ao(n.nodeType === 8 ? n.parentNode : n), Fu(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = nf(b);
        E.call(U);
      };
    }
    var b = tf(n, 0, !1, null, null, !1, !1, "", uh);
    return n._reactRootContainer = b, n[ji] = b.current, ao(n.nodeType === 8 ? n.parentNode : n), Fu(function() {
      Ms(r, b, u, o);
    }), b;
  }
  function uf(n, r, u, o, c) {
    var d = u._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var b = nf(m);
          E.call(b);
        };
      }
      Ms(r, m, n, c);
    } else
      m = gy(u, r, n, c, o);
    return nf(m);
  }
  Ku = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = Xa(r.pendingLanes);
          u !== 0 && (vi(r, u | 1), Tr(r, Tt()), (dt & 6) === 0 && (To = Tt() + 500, Kr()));
        }
        break;
      case 13:
        Fu(function() {
          var o = Pi(n, 1);
          if (o !== null) {
            var c = Cr();
            Rr(o, n, 1, c);
          }
        }), Gd(n, 1);
    }
  }, Wl = function(n) {
    if (n.tag === 13) {
      var r = Pi(n, 134217728);
      if (r !== null) {
        var u = Cr();
        Rr(r, n, 134217728, u);
      }
      Gd(n, 134217728);
    }
  }, bt = function(n) {
    if (n.tag === 13) {
      var r = zn(n), u = Pi(n, r);
      if (u !== null) {
        var o = Cr();
        Rr(u, n, r, o);
      }
      Gd(n, r);
    }
  }, ql = function() {
    return kt;
  }, Gl = function(n, r) {
    var u = kt;
    try {
      return kt = n, r();
    } finally {
      kt = u;
    }
  }, wr = function(n, r, u) {
    switch (r) {
      case "input":
        if (xn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var o = u[r];
            if (o !== n && o.form === n.form) {
              var c = De(o);
              if (!c)
                throw Error(A(90));
              Pr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, u);
        break;
      case "select":
        r = u.value, r != null && vr(n, !!u.multiple, r, !1);
    }
  }, Xu = xo, Vl = Fu;
  var Sy = { usingClientEntryPoint: !1, Events: [cs, io, De, xa, uu, xo] }, Do = { findFiberByHostInstance: Oa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ey = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Do.findFiberByHostInstance || ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lf.isDisabled && lf.supportsFiber)
      try {
        su = lf.inject(Ey), Qr = lf;
      } catch {
      }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Qa.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r))
      throw Error(A(200));
    return nh(n, r, null, u);
  }, Qa.createRoot = function(n, r) {
    if (!Kd(n))
      throw Error(A(299));
    var u = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = tf(n, 1, !1, null, null, u, !1, o, c), n[ji] = r.current, ao(n.nodeType === 8 ? n.parentNode : n), new rf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Fu(n);
  }, Qa.hydrate = function(n, r, u) {
    if (!af(r))
      throw Error(A(200));
    return uf(null, n, r, !0, u);
  }, Qa.hydrateRoot = function(n, r, u) {
    if (!Kd(n))
      throw Error(A(405));
    var o = u != null && u.hydratedSources || null, c = !1, d = "", m = Xd;
    if (u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onRecoverableError !== void 0 && (m = u.onRecoverableError)), r = rh(r, null, n, 1, u != null ? u : null, c, !1, d, m), n[ji] = r.current, ao(n), o)
      for (n = 0; n < o.length; n++)
        u = o[n], c = u._getVersion, c = c(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, c] : r.mutableSourceEagerHydrationData.push(
          u,
          c
        );
    return new qi(r);
  }, Qa.render = function(n, r, u) {
    if (!af(r))
      throw Error(A(200));
    return uf(null, n, r, !1, u);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!af(n))
      throw Error(A(40));
    return n._reactRootContainer ? (Fu(function() {
      uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ji] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = xo, Qa.unstable_renderSubtreeIntoContainer = function(n, r, u, o) {
    if (!af(u))
      throw Error(A(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(A(38));
    return uf(n, r, u, !1, o);
  }, Qa.version = "18.2.0-next-9e3b772b8-20220608", Qa;
}
var Wa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function t_() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var W = li.exports, G = sR(), A = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = !1;
    function zt(e) {
      xt = e;
    }
    function Ge(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ut("warn", e, a);
      }
    }
    function S(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ut("error", e, a);
      }
    }
    function Ut(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ve = 0, pe = 1, Qe = 2, te = 3, me = 4, ie = 5, Ve = 6, Ct = 7, st = 8, fn = 9, at = 10, We = 11, ct = 12, xe = 13, it = 14, He = 15, nn = 16, wn = 17, Qt = 18, Dt = 19, En = 21, Ue = 22, Ke = 23, At = 24, Rt = 25, ye = !0, Z = !1, be = !1, T = !1, B = !1, ue = !0, $e = !1, Fe = !1, ht = !0, tt = !0, ft = !0, nt = /* @__PURE__ */ new Set(), Ft = {}, Vr = {};
    function pr(e, t) {
      Pr(e, t), Pr(e + "Capture", t);
    }
    function Pr(e, t) {
      Ft[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ft[e] = t;
      {
        var a = e.toLowerCase();
        Vr[a] = e, e === "onDoubleClick" && (Vr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return xn(e), !1;
      } catch {
        return !0;
      }
    }
    function xn(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Fn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function $r(e) {
      if (Fn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function In(e, t) {
      if (Fn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function vr(e, t) {
      if (Fn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function Yr(e) {
      if (Fn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function hr(e) {
      if (Fn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    var sa = 0, er = 1, Ir = 2, pn = 3, br = 4, oi = 5, ca = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + J + "][" + we + "]*$"), Mt = {}, Ht = {};
    function _n(e) {
      return Yn.call(Ht, e) ? !0 : Yn.call(Mt, e) ? !1 : rt.test(e) ? (Ht[e] = !0, !0) : (Mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case br:
            return t === !1;
          case oi:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function wr(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function jt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Ir || t === pn || t === br, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, qa = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    qa.forEach(function(e) {
      Vt[e] = new jt(
        e,
        sa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new jt(
        t,
        er,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        Ir,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        Ir,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new jt(
        e,
        pn,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Vt[e] = new jt(
        e,
        pn,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Vt[e] = new jt(
        e,
        br,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Vt[e] = new jt(
        e,
        ca,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        oi,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var xa = /[\-\:]([a-z])/g, uu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(xa, uu);
      Vt[t] = new jt(
        t,
        er,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(xa, uu);
      Vt[t] = new jt(
        t,
        er,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(xa, uu);
      Vt[t] = new jt(
        t,
        er,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        er,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var Xu = "xlinkHref";
    Vt[Xu] = new jt(
      "xlinkHref",
      er,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        er,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var Vl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Oi = !1;
    function lu(e) {
      !Oi && Vl.test(e) && (Oi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Br(a, t), i.sanitizeURL && lu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === br) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Yt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Yt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return Yt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Br(a, t), l === "" + a ? a : l;
      }
    }
    function da(e, t, a, i) {
      var l = wr(t);
      if (!vn(t, l, i)) {
        if (Yt(t, a, l, i) && (a = null), i || l === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var v = l.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = l.attributeName, g = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = l.type, w;
          _ === pn || _ === br && a === !0 ? w = "" : (Br(a, y), w = "" + a, l.sanitizeURL && lu(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ci = Symbol.for("react.element"), xr = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ee = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), Jt = Symbol.for("react.debug_trace_mode"), en = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), di = Symbol.for("react.cache"), Pl = Symbol.for("react.tracing_marker"), Tt = Symbol.iterator, Vf = "@@iterator";
    function Ga(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Tt && e[Tt] || e[Vf];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, pi = 0, ou, Bl, su, Qr, Wo, _r, qo;
    function Go() {
    }
    Go.__reactDisabledLog = !0;
    function Ks() {
      {
        if (pi === 0) {
          ou = console.log, Bl = console.info, su = console.warn, Qr = console.error, Wo = console.group, _r = console.groupCollapsed, qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Go,
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
        pi++;
      }
    }
    function $l() {
      {
        if (pi--, pi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: ou
            }),
            info: ut({}, e, {
              value: Bl
            }),
            warn: ut({}, e, {
              value: su
            }),
            error: ut({}, e, {
              value: Qr
            }),
            group: ut({}, e, {
              value: Wo
            }),
            groupCollapsed: ut({}, e, {
              value: _r
            }),
            groupEnd: ut({}, e, {
              value: qo
            })
          });
        }
        pi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var cu = A.ReactCurrentDispatcher, Xa;
    function Dr(e, t, a) {
      {
        if (Xa === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Xa = i && i[1] || "";
          }
        return `
` + Xa + e;
      }
    }
    var fu = !1, du;
    {
      var pu = typeof WeakMap == "function" ? WeakMap : Map;
      du = new pu();
    }
    function Yl(e, t) {
      if (!e || fu)
        return "";
      {
        var a = du.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      fu = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = cu.current, cu.current = null, Ks();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && du.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        fu = !1, cu.current = s, $l(), Error.prepareStackTrace = l;
      }
      var w = e ? e.displayName || e.name : "", M = w ? Dr(w) : "";
      return typeof e == "function" && du.set(e, M), M;
    }
    function Il(e, t, a) {
      return Yl(e, !0);
    }
    function Li(e, t, a) {
      return Yl(e, !1);
    }
    function Pf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Yl(e, Pf(e));
      if (typeof e == "string")
        return Dr(e);
      switch (e) {
        case Xe:
          return Dr("Suspense");
        case mt:
          return Dr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return Li(e.render);
          case Ze:
            return vi(e.type, t, a);
          case ke: {
            var i = e, l = i._payload, s = i._init;
            try {
              return vi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function kt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return Dr(e.type);
        case nn:
          return Dr("Lazy");
        case xe:
          return Dr("Suspense");
        case Dt:
          return Dr("SuspenseList");
        case ve:
        case Qe:
        case He:
          return Li(e.type);
        case We:
          return Li(e.type.render);
        case pe:
          return Il(e.type);
        default:
          return "";
      }
    }
    function Ql(e) {
      try {
        var t = "", a = e;
        do
          t += kt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ku(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Wl(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case xr:
          return "Portal";
        case R:
          return "Profiler";
        case fi:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            var t = e;
            return Wl(t) + ".Consumer";
          case $:
            var a = e;
            return Wl(a._context) + ".Provider";
          case ce:
            return Ku(e, e.render, "ForwardRef");
          case Ze:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case ke: {
            var l = e, s = l._payload, f = l._init;
            try {
              return bt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ql(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Gl(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case fn:
          var i = a;
          return Gl(i) + ".Consumer";
        case at:
          var l = a;
          return Gl(l._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case We:
          return ql(a, a.render, "ForwardRef");
        case Ct:
          return "Fragment";
        case ie:
          return a;
        case me:
          return "Portal";
        case te:
          return "Root";
        case Ve:
          return "Text";
        case nn:
          return bt(a);
        case st:
          return a === fi ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ct:
          return "Profiler";
        case En:
          return "Scope";
        case xe:
          return "Suspense";
        case Dt:
          return "SuspenseList";
        case Rt:
          return "TracingMarker";
        case pe:
        case ve:
        case wn:
        case Qe:
        case it:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = A.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function kr() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function vu() {
      return hn === null ? "" : Ql(hn);
    }
    function Cn() {
      Zu.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Pt(e) {
      Zu.getCurrentStack = e === null ? null : vu, hn = e, Wr = !1;
    }
    function Zs() {
      return hn;
    }
    function qr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function hi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Js = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Mi(e, t) {
      Js[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function hu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ec(e) {
      return e._valueTracker;
    }
    function _a(e) {
      e._valueTracker = null;
    }
    function mu(e) {
      var t = "";
      return e && (hu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function yu(e) {
      var t = hu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            _a(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Da(e) {
      ec(e) || (e._valueTracker = yu(e));
    }
    function Xl(e) {
      if (!e)
        return !1;
      var t = ec(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = mu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function gu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Su = !1, Ju = !1, Kl = !1, Xo = !1;
    function Ka(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, l = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return l;
    }
    function C(e, t) {
      Mi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ju && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Ju = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Su && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Su = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: hi(t.value != null ? t.value : i),
        controlled: Ka(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Ka(t);
        !a._wrapperState.controlled && i && !Xo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xo = !0), a._wrapperState.controlled && !i && !Kl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Kl = !0);
      }
      N(e, t);
      var l = hi(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || a.value != l) && (a.value = Qn(l)) : a.value !== Qn(l) && (a.value = Qn(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, l) : t.hasOwnProperty("defaultValue") && Le(a, t.type, hi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function X(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ne(e, t) {
      var a = e;
      F(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Xl(f), F(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      (t !== "number" || gu(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var lt = !1, wt = !1, Gt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? W.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || wt || (wt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Gt || (Gt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !lt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), lt = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", Qn(hi(t.value)));
    }
    var tn = Array.isArray;
    function vt(e) {
      return tn(e);
    }
    var Ni;
    Ni = !1;
    function Zl() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ko = ["value", "defaultValue"];
    function Bf(e) {
      {
        Mi("select", e);
        for (var t = 0; t < Ko.length; t++) {
          var a = Ko[t];
          if (e[a] != null) {
            var i = vt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Zl()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Zl());
          }
        }
      }
    }
    function Za(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < l.length; v++) {
          var y = f.hasOwnProperty("$" + l[v].value);
          l[v].selected !== y && (l[v].selected = y), y && i && (l[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(hi(a)), _ = null, w = 0; w < l.length; w++) {
          if (l[w].value === g) {
            l[w].selected = !0, i && (l[w].defaultSelected = !0);
            return;
          }
          _ === null && !l[w].disabled && (_ = l[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Zo(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function Jo(e, t) {
      var a = e;
      Bf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ni && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ni = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Za(a, !!t.multiple, i, !1) : t.defaultValue != null && Za(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Za(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Za(a, !!t.multiple, t.defaultValue, !0) : Za(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Bm(e, t) {
      var a = e, i = t.value;
      i != null && Za(a, !!t.multiple, i, !1);
    }
    var Yf = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zp(e, t) {
      var a = e;
      Mi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Yf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Yf = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (vt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: hi(i)
      };
    }
    function Jp(e, t) {
      var a = e, i = hi(t.value), l = hi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Qn(l));
    }
    function ev(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qf(e, t) {
      Jp(e, t);
    }
    var zi = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Wf = "http://www.w3.org/2000/svg";
    function tc(e) {
      switch (e) {
        case "svg":
          return Wf;
        case "math":
          return $m;
        default:
          return zi;
      }
    }
    function qf(e, t) {
      return e == null || e === zi ? tc(t) : e === Wf && t === "foreignObject" ? zi : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, nc, tv = Ym(function(e, t) {
      if (e.namespaceURI === Wf && !("innerHTML" in e)) {
        nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Ui = 3, Mn = 8, Ja = 9, el = 11, rc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ui) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, nv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jl).forEach(function(e) {
      av.forEach(function(t) {
        Jl[rv(t, e)] = Jl[e];
      });
    });
    function ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jl.hasOwnProperty(e) && Jl[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var eo = /([A-Z])/g, Im = /^ms-/;
    function Qm(e) {
      return e.replace(eo, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var iv = function() {
    };
    {
      var uv = /^(?:webkit|moz|o)[A-Z]/, lv = /^-ms-/, es = /-(.)/g, to = /;\s*$/, no = {}, ro = {}, ov = !1, Gf = !1, Xf = function(e) {
        return e.replace(es, function(t, a) {
          return a.toUpperCase();
        });
      }, Kf = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          Xf(e.replace(lv, "ms-"))
        ));
      }, sv = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, cv = function(e, t) {
        ro.hasOwnProperty(t) && ro[t] || (ro[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(to, "")));
      }, fv = function(e, t) {
        ov || (ov = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Wm = function(e, t) {
        Gf || (Gf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      iv = function(e, t) {
        e.indexOf("-") > -1 ? Kf(e) : uv.test(e) ? sv(e) : to.test(t) && cv(e, t), typeof t == "number" && (isNaN(t) ? fv(e, t) : isFinite(t) || Wm(e, t));
      };
    }
    var qm = iv;
    function Gm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qm(i)) + ":", t += ac(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || qm(i, t[i]);
          var s = ac(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ka(e) {
      var t = {};
      for (var a in e)
        for (var i = nv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ts(e, t) {
      {
        if (!t)
          return;
        var a = ka(e), i = ka(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (l[v])
              continue;
            l[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Xm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var pv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, vv = ut({
      menuitem: !0
    }, pv), hv = "__html";
    function ic(e, t) {
      if (!!t) {
        if (vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var uc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, mv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ei = {}, Zf = new RegExp("^(aria)-[" + we + "]*$"), ns = new RegExp("^(aria)[A-Z][" + we + "]*$");
    function Jf(e, t) {
      {
        if (Yn.call(ei, t) && ei[t])
          return !0;
        if (ns.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = mv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ei[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ei[t] = !0, !0;
        }
        if (Zf.test(t)) {
          var l = t.toLowerCase(), s = mv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return ei[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ei[t] = !0, !0;
        }
      }
      return !0;
    }
    function yv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Jf(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      Ai(e, t) || yv(e, t);
    }
    var tl = !1;
    function ed(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !tl && (tl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var td = function() {
    };
    {
      var Wn = {}, nd = /^on./, gv = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + we + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + we + "]*$");
      td = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (nd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (nd.test(t))
          return gv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (l === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (l === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = wr(t), y = v !== null && v.type === sa;
        if (uc.hasOwnProperty(l)) {
          var g = uc[l];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== l)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = td(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Ai(e, t) || Cv(e, t, a);
    }
    var Fi = 1, rs = 1 << 1, nl = 1 << 2, Km = Fi | rs | nl, as = null;
    function is(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function Zm() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function Tv(e) {
      return e === as;
    }
    function oc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ui ? t.parentNode : t;
    }
    var Kt = null, Eu = null, Hi = null;
    function ao(e) {
      var t = Lo(e);
      if (!!t) {
        if (typeof Kt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          Kt(t.stateNode, t.type, i);
        }
      }
    }
    function bv(e) {
      Kt = e;
    }
    function sc(e) {
      Eu ? Hi ? Hi.push(e) : Hi = [e] : Eu = e;
    }
    function us() {
      return Eu !== null || Hi !== null;
    }
    function ls() {
      if (!!Eu) {
        var e = Eu, t = Hi;
        if (Eu = null, Hi = null, ao(e), t)
          for (var a = 0; a < t.length; a++)
            ao(t[a]);
      }
    }
    var rl = function(e, t) {
      return e(t);
    }, rd = function() {
    }, ad = !1;
    function Jm() {
      var e = us();
      e && (rd(), ls());
    }
    function id(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return rl(e, t, a);
      } finally {
        ad = !1, Jm();
      }
    }
    function cc(e, t, a) {
      rl = e, rd = a;
    }
    function fc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ud(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && fc(t));
        default:
          return !1;
      }
    }
    function al(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var l = i[t];
      if (ud(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var os = !1;
    if (dn)
      try {
        var il = {};
        Object.defineProperty(il, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", il, il), window.removeEventListener("test", il, il);
      } catch {
        os = !1;
      }
    function wv(e, t, a, i, l, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ld = wv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      ld = function(t, a, i, l, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, M = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          od.removeEventListener(j, Oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var fe = Array.prototype.slice.call(arguments, 3);
        function Oe() {
          _ = !0, H(), a.apply(i, fe), w = !1;
        }
        var Te, St = !1, pt = !1;
        function k(O) {
          if (Te = O.error, St = !0, Te === null && O.colno === 0 && O.lineno === 0 && (pt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var j = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), od.addEventListener(j, Oe, !1), g.initEvent(j, !1, !1), od.dispatchEvent(g), z && Object.defineProperty(window, "event", z), _ && w && (St ? pt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !_)
          return H(), wv.apply(this, arguments);
      };
    }
    var ey = ld, Cu = !1, ti = null, ss = !1, Ru = null, mi = {
      onError: function(e) {
        Cu = !0, ti = e;
      }
    };
    function ul(e, t, a, i, l, s, f, p, v) {
      Cu = !1, ti = null, ey.apply(mi, arguments);
    }
    function ji(e, t, a, i, l, s, f, p, v) {
      if (ul.apply(this, arguments), Cu) {
        var y = cd();
        ss || (ss = !0, Ru = y);
      }
    }
    function sd() {
      if (ss) {
        var e = Ru;
        throw ss = !1, Ru = null, e;
      }
    }
    function ty() {
      return Cu;
    }
    function cd() {
      if (Cu) {
        var e = ti;
        return Cu = !1, ti = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Oa(e) {
      return e._reactInternals;
    }
    function cs(e) {
      return e._reactInternals !== void 0;
    }
    function io(e, t) {
      e._reactInternals = t;
    }
    var De = 0, Tu = 1, rn = 2, Je = 4, Nt = 16, Bt = 32, yi = 64, Pe = 128, Rn = 256, Xr = 512, La = 1024, sn = 2048, Ma = 4096, bu = 8192, fs = 16384, dc = sn | Je | yi | Xr | La | fs, xv = 32767, va = 32768, qn = 65536, ds = 131072, fd = 1048576, dd = 2097152, Kr = 4194304, wu = 8388608, Zr = 16777216, ll = 33554432, uo = Je | La | 0, Jr = rn | Je | Nt | Bt | Xr | Ma | bu, yr = Je | yi | Xr | bu, Na = sn | Nt, nr = Kr | wu | dd, Vi = A.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (rn | Ma)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function pd(e) {
      if (e.tag === xe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function pc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function vd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Vi.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Oa(e);
      return l ? ha(l) === l : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function an(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === l)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, l = f;
              break;
            }
            if (g === l) {
              y = !0, l = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, l = s;
                break;
              }
              if (g === l) {
                y = !0, l = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function za(e) {
      var t = an(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _v(e) {
      var t = an(e);
      return t !== null ? vc(t) : null;
    }
    function vc(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hc = G.unstable_scheduleCallback, Dv = G.unstable_cancelCallback, mc = G.unstable_shouldYield, kv = G.unstable_requestPaint, mn = G.unstable_now, md = G.unstable_getCurrentPriorityLevel, yc = G.unstable_ImmediatePriority, ya = G.unstable_UserBlockingPriority, gi = G.unstable_NormalPriority, gc = G.unstable_LowPriority, xu = G.unstable_IdlePriority, yd = G.unstable_yieldValue, gd = G.unstable_setDisableYieldValue, _u = null, Gn = null, ne = null, Dn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Sd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ht && (e = ut({}, e, {
          getLaneLabelMap: ku,
          injectProfilingHooks: Bi
        })), _u = t.inject(e), Gn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ov(e, t) {
      if (Gn && typeof Gn.onScheduleFiberRoot == "function")
        try {
          Gn.onScheduleFiberRoot(_u, e, t);
        } catch (a) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Pi(e, t) {
      if (Gn && typeof Gn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Pe) === Pe;
          if (tt) {
            var i;
            switch (t) {
              case gr:
                i = yc;
                break;
              case ar:
                i = ya;
                break;
              case Yi:
                i = gi;
                break;
              case Cs:
                i = xu;
                break;
              default:
                i = gi;
                break;
            }
            Gn.onCommitFiberRoot(_u, e, i, a);
          }
        } catch (l) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", l));
        }
    }
    function Du(e) {
      if (Gn && typeof Gn.onPostCommitFiberRoot == "function")
        try {
          Gn.onPostCommitFiberRoot(_u, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (Gn && typeof Gn.onCommitFiberUnmount == "function")
        try {
          Gn.onCommitFiberUnmount(_u, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Hn(e) {
      if (typeof yd == "function" && (gd(e), zt(e)), Gn && typeof Gn.setStrictMode == "function")
        try {
          Gn.setStrictMode(_u, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bi(e) {
      ne = e;
    }
    function ku() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < un; a++) {
          var i = ny(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Sc(e) {
      ne !== null && typeof ne.markCommitStarted == "function" && ne.markCommitStarted(e);
    }
    function Cd() {
      ne !== null && typeof ne.markCommitStopped == "function" && ne.markCommitStopped();
    }
    function Ou(e) {
      ne !== null && typeof ne.markComponentRenderStarted == "function" && ne.markComponentRenderStarted(e);
    }
    function ol() {
      ne !== null && typeof ne.markComponentRenderStopped == "function" && ne.markComponentRenderStopped();
    }
    function Lv(e) {
      ne !== null && typeof ne.markComponentPassiveEffectMountStarted == "function" && ne.markComponentPassiveEffectMountStarted(e);
    }
    function Rd() {
      ne !== null && typeof ne.markComponentPassiveEffectMountStopped == "function" && ne.markComponentPassiveEffectMountStopped();
    }
    function Ec(e) {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStarted == "function" && ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function Mv() {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStopped == "function" && ne.markComponentPassiveEffectUnmountStopped();
    }
    function Nv(e) {
      ne !== null && typeof ne.markComponentLayoutEffectMountStarted == "function" && ne.markComponentLayoutEffectMountStarted(e);
    }
    function zv() {
      ne !== null && typeof ne.markComponentLayoutEffectMountStopped == "function" && ne.markComponentLayoutEffectMountStopped();
    }
    function Cc(e) {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStarted == "function" && ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStopped == "function" && ne.markComponentLayoutEffectUnmountStopped();
    }
    function Rc(e, t, a) {
      ne !== null && typeof ne.markComponentErrored == "function" && ne.markComponentErrored(e, t, a);
    }
    function Uv(e, t, a) {
      ne !== null && typeof ne.markComponentSuspended == "function" && ne.markComponentSuspended(e, t, a);
    }
    function Av(e) {
      ne !== null && typeof ne.markLayoutEffectsStarted == "function" && ne.markLayoutEffectsStarted(e);
    }
    function oo() {
      ne !== null && typeof ne.markLayoutEffectsStopped == "function" && ne.markLayoutEffectsStopped();
    }
    function Fv(e) {
      ne !== null && typeof ne.markPassiveEffectsStarted == "function" && ne.markPassiveEffectsStarted(e);
    }
    function ps() {
      ne !== null && typeof ne.markPassiveEffectsStopped == "function" && ne.markPassiveEffectsStopped();
    }
    function ni(e) {
      ne !== null && typeof ne.markRenderStarted == "function" && ne.markRenderStarted(e);
    }
    function vs() {
      ne !== null && typeof ne.markRenderYielded == "function" && ne.markRenderYielded();
    }
    function so() {
      ne !== null && typeof ne.markRenderStopped == "function" && ne.markRenderStopped();
    }
    function sl(e) {
      ne !== null && typeof ne.markRenderScheduled == "function" && ne.markRenderScheduled(e);
    }
    function Td(e, t) {
      ne !== null && typeof ne.markForceUpdateScheduled == "function" && ne.markForceUpdateScheduled(e, t);
    }
    function Lu(e, t) {
      ne !== null && typeof ne.markStateUpdateScheduled == "function" && ne.markStateUpdateScheduled(e, t);
    }
    var Me = 0, ot = 1, ze = 2, yn = 8, Ua = 16, Tc = Math.clz32 ? Math.clz32 : cl, bc = Math.log, bd = Math.LN2;
    function cl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (bc(t) / bd | 0) | 0;
    }
    var un = 31, V = 0, yt = 0, Ae = 1, Si = 2, ga = 4, fl = 8, ln = 16, dl = 32, Mu = 4194240, pl = 64, Aa = 128, ta = 256, vl = 512, hs = 1024, ms = 2048, wc = 4096, xc = 8192, _c = 16384, Dc = 32768, kc = 65536, Oc = 131072, Lc = 262144, Mc = 524288, hl = 1048576, Nc = 2097152, ml = 130023424, $i = 4194304, zc = 8388608, ys = 16777216, Uc = 33554432, Ac = 67108864, wd = $i, co = 134217728, Fc = 268435455, fo = 268435456, Nu = 536870912, na = 1073741824;
    function ny(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & fl)
          return "DefaultHydration";
        if (e & ln)
          return "Default";
        if (e & dl)
          return "TransitionHydration";
        if (e & Mu)
          return "Transition";
        if (e & ml)
          return "Retry";
        if (e & co)
          return "SelectiveHydration";
        if (e & fo)
          return "IdleHydration";
        if (e & Nu)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Zt = -1, Hc = pl, jc = $i;
    function po(e) {
      switch (Nn(e)) {
        case Ae:
          return Ae;
        case Si:
          return Si;
        case ga:
          return ga;
        case fl:
          return fl;
        case ln:
          return ln;
        case dl:
          return dl;
        case pl:
        case Aa:
        case ta:
        case vl:
        case hs:
        case ms:
        case wc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case hl:
        case Nc:
          return e & Mu;
        case $i:
        case zc:
        case ys:
        case Uc:
        case Ac:
          return e & ml;
        case co:
          return co;
        case fo:
          return fo;
        case Nu:
          return Nu;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function gs(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, l = e.suspendedLanes, s = e.pingedLanes, f = a & Fc;
      if (f !== V) {
        var p = f & ~l;
        if (p !== V)
          i = po(p);
        else {
          var v = f & s;
          v !== V && (i = po(v));
        }
      } else {
        var y = a & ~l;
        y !== V ? i = po(y) : s !== V && (i = po(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && (t & l) === V) {
        var g = Nn(i), _ = Nn(t);
        if (g >= _ || g === ln && (_ & Mu) !== V)
          return t;
      }
      (i & ga) !== V && (i |= a & ln);
      var w = e.entangledLanes;
      if (w !== V)
        for (var M = e.entanglements, z = i & w; z > 0; ) {
          var H = zu(z), fe = 1 << H;
          i |= M[H], z &= ~fe;
        }
      return i;
    }
    function Hv(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var l = zu(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vc(e, t) {
      switch (e) {
        case Ae:
        case Si:
        case ga:
          return t + 250;
        case fl:
        case ln:
        case dl:
        case pl:
        case Aa:
        case ta:
        case vl:
        case hs:
        case ms:
        case wc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case hl:
        case Nc:
          return t + 5e3;
        case $i:
        case zc:
        case ys:
        case Uc:
        case Ac:
          return Zt;
        case co:
        case fo:
        case Nu:
        case na:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function ry(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zu(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === V || (v & l) !== V) && (s[p] = Vc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ay(e) {
      return po(e.pendingLanes);
    }
    function xd(e) {
      var t = e.pendingLanes & ~na;
      return t !== V ? t : t & na ? na : V;
    }
    function vo(e) {
      return (e & Ae) !== V;
    }
    function Ss(e) {
      return (e & Fc) !== V;
    }
    function Pc(e) {
      return (e & ml) === e;
    }
    function iy(e) {
      var t = Ae | ga | ln;
      return (e & t) === V;
    }
    function jv(e) {
      return (e & Mu) === e;
    }
    function Es(e, t) {
      var a = Si | ga | fl | ln;
      return (t & a) !== V;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function _d(e) {
      return (e & Mu) !== V;
    }
    function Dd() {
      var e = Hc;
      return Hc <<= 1, (Hc & Mu) === V && (Hc = pl), e;
    }
    function uy() {
      var e = jc;
      return jc <<= 1, (jc & ml) === V && (jc = $i), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function jn(e) {
      return Nn(e);
    }
    function zu(e) {
      return 31 - Tc(e);
    }
    function Bc(e) {
      return zu(e);
    }
    function ra(e, t) {
      return (e & t) !== V;
    }
    function yl(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function ho(e, t) {
      return e & ~t;
    }
    function kd(e, t) {
      return e & t;
    }
    function Pv(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== yt && e < t ? e : t;
    }
    function $c(e) {
      for (var t = [], a = 0; a < un; a++)
        t.push(e);
      return t;
    }
    function gl(e, t, a) {
      e.pendingLanes |= t, t !== Nu && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, l = Bc(t);
      i[l] = a;
    }
    function Od(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = zu(i), s = 1 << l;
        a[l] = Zt, i &= ~s;
      }
    }
    function Ld(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Md(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zu(f), v = 1 << p;
        i[p] = V, l[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function mo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = zu(l), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function ly(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case ga:
          i = Si;
          break;
        case ln:
          i = fl;
          break;
        case pl:
        case Aa:
        case ta:
        case vl:
        case hs:
        case ms:
        case wc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case hl:
        case Nc:
        case $i:
        case zc:
        case ys:
        case Uc:
        case Ac:
          i = dl;
          break;
        case Nu:
          i = fo;
          break;
        default:
          i = yt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== yt ? yt : i;
    }
    function Nd(e, t, a) {
      if (!!rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Bc(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Yc(e, t) {
      if (!!rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Bc(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function zd(e, t) {
      return null;
    }
    var gr = Ae, ar = ga, Yi = ln, Cs = Nu, Sl = yt;
    function Fa() {
      return Sl;
    }
    function Vn(e) {
      Sl = e;
    }
    function Rs(e, t) {
      var a = Sl;
      try {
        return Sl = e, t();
      } finally {
        Sl = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ud(e, t) {
      return e !== 0 && e < t;
    }
    function Ts(e) {
      var t = Nn(e);
      return Ud(gr, t) ? Ud(ar, t) ? Ss(t) ? Yi : Cs : ar : gr;
    }
    function Pn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $v;
    function he(e) {
      $v = e;
    }
    function yo(e) {
      $v(e);
    }
    var bs;
    function Yv(e) {
      bs = e;
    }
    var Iv;
    function ws(e) {
      Iv = e;
    }
    var xs;
    function Ad(e) {
      xs = e;
    }
    var Fd;
    function Qv(e) {
      Fd = e;
    }
    var Ic = !1, go = [], Ei = null, cn = null, Xn = null, Ha = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Ii = [], ri = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Wv(e) {
      return ri.indexOf(e) > -1;
    }
    function Ci(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ei = null;
          break;
        case "dragenter":
        case "dragleave":
          cn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ha.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          So.delete(i);
          break;
        }
      }
    }
    function Eo(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ci(t, a, i, l, s);
        if (t !== null) {
          var p = Lo(t);
          p !== null && bs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return l !== null && v.indexOf(l) === -1 && v.push(l), e;
    }
    function Gv(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Ei = Eo(Ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return cn = Eo(cn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Xn = Eo(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = l, y = v.pointerId;
          return Ha.set(y, Eo(Ha.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = l, _ = g.pointerId;
          return So.set(_, Eo(So.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Us(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === xe) {
            var l = pd(a);
            if (l !== null) {
              e.blockedOn = l, Fd(e.priority, function() {
                Iv(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (Pn(s)) {
              e.blockedOn = pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Xv(e) {
      for (var t = xs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ii.length && Ud(t, Ii[i].priority); i++)
        ;
      Ii.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Qc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = El(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          is(s), l.target.dispatchEvent(s), Zm();
        } else {
          var f = Lo(i);
          return f !== null && bs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _s(e, t, a) {
      Qc(e) && a.delete(t);
    }
    function jd() {
      Ic = !1, Ei !== null && Qc(Ei) && (Ei = null), cn !== null && Qc(cn) && (cn = null), Xn !== null && Qc(Xn) && (Xn = null), Ha.forEach(_s), So.forEach(_s);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, jd)));
    }
    function dt(e) {
      if (go.length > 0) {
        Er(go[0], e);
        for (var t = 1; t < go.length; t++) {
          var a = go[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ei !== null && Er(Ei, e), cn !== null && Er(cn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Ha.forEach(i), So.forEach(i);
      for (var l = 0; l < Ii.length; l++) {
        var s = Ii[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ii.length > 0; ) {
        var f = Ii[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Ii.shift();
      }
    }
    var gn = A.ReactCurrentBatchConfig, Tn = !0;
    function Kn(e) {
      Tn = !!e;
    }
    function Sa() {
      return Tn;
    }
    function Co(e, t, a) {
      var i = Or(t), l;
      switch (i) {
        case gr:
          l = Bn;
          break;
        case ar:
          l = Ds;
          break;
        case Yi:
        default:
          l = Qi;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Bn(e, t, a, i) {
      var l = Fa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(gr), Qi(e, t, a, i);
      } finally {
        Vn(l), gn.transition = s;
      }
    }
    function Ds(e, t, a, i) {
      var l = Fa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(ar), Qi(e, t, a, i);
      } finally {
        Vn(l), gn.transition = s;
      }
    }
    function Qi(e, t, a, i) {
      !Tn || Wc(e, t, a, i);
    }
    function Wc(e, t, a, i) {
      var l = El(e, t, a, i);
      if (l === null) {
        Dy(e, t, i, Ro, a), qv(e, i);
        return;
      }
      if (Gv(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (qv(e, i), t & nl && Wv(e)) {
        for (; l !== null; ) {
          var s = Lo(l);
          s !== null && yo(s);
          var f = El(e, t, a, i);
          if (f === null && Dy(e, t, i, Ro, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Ro = null;
    function El(e, t, a, i) {
      Ro = null;
      var l = oc(i), s = Us(l);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === xe) {
            var v = pd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (Pn(y))
              return pc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ro = s, null;
    }
    function Or(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return gr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ar;
        case "message": {
          var t = md();
          switch (t) {
            case yc:
              return gr;
            case ya:
              return ar;
            case gi:
            case gc:
              return Yi;
            case xu:
              return Cs;
            default:
              return Yi;
          }
        }
        default:
          return Yi;
      }
    }
    function Vd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Wi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function qc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Cl = null, Ri = null, Uu = null;
    function Au(e) {
      return Cl = e, Ri = Xc(), !0;
    }
    function Gc() {
      Cl = null, Ri = null, Uu = null;
    }
    function bo() {
      if (Uu)
        return Uu;
      var e, t = Ri, a = t.length, i, l = Xc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Uu = l.slice(e, p), Uu;
    }
    function Xc() {
      return "value" in Cl ? Cl.value : Cl.textContent;
    }
    function Rl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Tl() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Tl : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tl);
        },
        persist: function() {
        },
        isPersistent: Tl
      }), t;
    }
    var Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Tr = zn(Rr), wo = ut({}, Rr, {
      view: 0,
      detail: 0
    }), Pd = zn(wo), ks, Bd, ja;
    function Kv(e) {
      e !== ja && (ja && e.type === "mousemove" ? (ks = e.screenX - ja.screenX, Bd = e.screenY - ja.screenY) : (ks = 0, Bd = 0), ja = e);
    }
    var xo = ut({}, wo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Kv(e), ks);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Bd;
      }
    }), Fu = zn(xo), $d = ut({}, xo, {
      dataTransfer: 0
    }), bl = zn($d), Zv = ut({}, wo, {
      relatedTarget: 0
    }), Kc = zn(Zv), Yd = ut({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zc = zn(Yd), sy = ut({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cy = zn(sy), Jv = ut({}, Rr, {
      data: 0
    }), Id = zn(Jv), wl = Id, fy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, _o = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function eh(e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Rl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? _o[e.keyCode] || "Unidentified" : "";
    }
    var bn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bn[e];
      return i ? !!a[i] : !1;
    }
    function Jc(e) {
      return dy;
    }
    var py = ut({}, wo, {
      key: eh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jc,
      charCode: function(e) {
        return e.type === "keypress" ? Rl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = zn(py), th = ut({}, xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Qd = zn(th), hy = ut({}, wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jc
    }), Va = zn(hy), Wd = ut({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), my = zn(Wd), Hu = ut({}, xo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), ef = zn(Hu), xl = [9, 13, 27, 32], Os = 229, Ls = dn && "CompositionEvent" in window, _l = null;
    dn && "documentMode" in document && (_l = document.documentMode);
    var yy = dn && "TextEvent" in window && !_l, tf = dn && (!Ls || _l && _l > 8 && _l <= 11), nh = 32, qd = String.fromCharCode(nh);
    function rh() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ms = !1;
    function nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function ah(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Gd(e, t) {
      return e === "keydown" && t.keyCode === Os;
    }
    function ih(e, t) {
      switch (e) {
        case "keyup":
          return xl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Os;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Xd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function rf(e) {
      return e.locale === "ko";
    }
    var qi = !1;
    function Kd(e, t, a, i, l) {
      var s, f;
      if (Ls ? s = ah(t) : qi ? ih(t, i) && (s = "onCompositionEnd") : Gd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      tf && !rf(i) && (!qi && s === "onCompositionStart" ? qi = Au(l) : s === "onCompositionEnd" && qi && (f = bo()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Id(s, t, null, i, l);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function af(e, t) {
      switch (e) {
        case "compositionend":
          return Xd(t);
        case "keypress":
          var a = t.which;
          return a !== nh ? null : (Ms = !0, qd);
        case "textInput":
          var i = t.data;
          return i === qd && Ms ? null : i;
        default:
          return null;
      }
    }
    function uh(e, t) {
      if (qi) {
        if (e === "compositionend" || !Ls && ih(e, t)) {
          var a = bo();
          return Gc(), qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return tf && !rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function gy(e, t, a, i, l) {
      var s;
      if (yy ? s = af(t, i) : s = uh(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new wl("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function uf(e, t, a, i, l, s, f) {
      Kd(e, t, a, i, l), gy(e, t, a, i, l);
    }
    var Sy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Do(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ey(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function lf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      sc(i);
      var l = ch(t, "onChange");
      if (l.length > 0) {
        var s = new Tr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, u = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, u, e, oc(e)), id(d, t);
    }
    function d(e) {
      OS(e, 0);
    }
    function m(e) {
      var t = pf(e);
      if (Xl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    dn && (b = Ey("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", Q);
    }
    function I() {
      !r || (r.detachEvent("onpropertychange", Q), r = null, u = null);
    }
    function Q(e) {
      e.propertyName === "value" && m(u) && c(e);
    }
    function Y(e, t, a) {
      e === "focusin" ? (I(), U(t, a)) : e === "focusout" && I();
    }
    function oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(u);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return m(t);
    }
    function kn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function x(e, t, a, i, l, s, f) {
      var p = a ? pf(a) : window, v, y;
      if (o(p) ? v = E : Do(p) ? b ? v = kn : (v = oe, y = Y) : ge(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, l);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      Pr("onMouseEnter", ["mouseout", "mouseover"]), Pr("onMouseLeave", ["mouseout", "mouseover"]), Pr("onPointerEnter", ["pointerout", "pointerover"]), Pr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function K(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Tv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Us(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (l.window === l)
          g = l;
        else {
          var _ = l.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (w = a, M = z ? Us(z) : null, M !== null) {
            var H = ha(M);
            (M !== H || M.tag !== ie && M.tag !== Ve) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var fe = Fu, Oe = "onMouseLeave", Te = "onMouseEnter", St = "mouse";
          (t === "pointerout" || t === "pointerover") && (fe = Qd, Oe = "onPointerLeave", Te = "onPointerEnter", St = "pointer");
          var pt = w == null ? g : pf(w), k = M == null ? g : pf(M), j = new fe(Oe, St + "leave", w, i, l);
          j.target = pt, j.relatedTarget = k;
          var O = null, q = Us(l);
          if (q === a) {
            var de = new fe(Te, St + "enter", M, i, l);
            de.target = k, de.relatedTarget = pt, O = de;
          }
          kR(e, j, O, w, M);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Re;
    function _e(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Yn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Be(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function _t(e, t) {
      for (var a = Be(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ui) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Be(Zn(a));
      }
    }
    function ju(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Cy(e, l, s, f, p);
    }
    function Cy(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === Ui) && (f = s + a), g === i && (l === 0 || g.nodeType === Ui) && (p = s + l), g.nodeType === Ui && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            _ = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (_ === t && ++v === a && (f = s), _ === i && ++y === l && (p = s), (w = g.nextSibling) !== null)
              break;
            g = _, _ = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function cR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = _t(e, f), g = _t(e, p);
        if (y && g) {
          if (l.rangeCount === 1 && l.anchorNode === y.node && l.anchorOffset === y.offset && l.focusNode === g.node && l.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), l.removeAllRanges(), f > p ? (l.addRange(_), l.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), l.addRange(_));
        }
      }
    }
    function gS(e) {
      return e && e.nodeType === Ui;
    }
    function SS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : gS(e) ? !1 : gS(t) ? SS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fR(e) {
      return e && e.ownerDocument && SS(e.ownerDocument.documentElement, e);
    }
    function dR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ES() {
      for (var e = window, t = gu(); t instanceof e.HTMLIFrameElement; ) {
        if (dR(t))
          e = t.contentWindow;
        else
          return t;
        t = gu(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function pR() {
      var e = ES();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? hR(e) : null
      };
    }
    function vR(e) {
      var t = ES(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fR(a)) {
        i !== null && Ry(a) && mR(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function hR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ju(e), t || {
        start: 0,
        end: 0
      };
    }
    function mR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cR(e, t);
    }
    var yR = dn && "documentMode" in document && document.documentMode <= 11;
    function gR() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var of = null, Ty = null, Zd = null, by = !1;
    function SR(e) {
      if ("selectionStart" in e && Ry(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ER(e) {
      return e.window === e ? e.document : e.nodeType === Ja ? e : e.ownerDocument;
    }
    function CS(e, t, a) {
      var i = ER(a);
      if (!(by || of == null || of !== gu(i))) {
        var l = SR(of);
        if (!Zd || !_e(Zd, l)) {
          Zd = l;
          var s = ch(Ty, "onSelect");
          if (s.length > 0) {
            var f = new Tr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = of;
          }
        }
      }
    }
    function CR(e, t, a, i, l, s, f) {
      var p = a ? pf(a) : window;
      switch (t) {
        case "focusin":
          (Do(p) || p.contentEditable === "true") && (of = p, Ty = a, Zd = null);
          break;
        case "focusout":
          of = null, Ty = null, Zd = null;
          break;
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, CS(e, i, l);
          break;
        case "selectionchange":
          if (yR)
            break;
        case "keydown":
        case "keyup":
          CS(e, i, l);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var sf = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, wy = {}, RS = {};
    dn && (RS = document.createElement("div").style, "AnimationEvent" in window || (delete sf.animationend.animation, delete sf.animationiteration.animation, delete sf.animationstart.animation), "TransitionEvent" in window || delete sf.transitionend.transition);
    function oh(e) {
      if (wy[e])
        return wy[e];
      if (!sf[e])
        return e;
      var t = sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RS)
          return wy[e] = t[a];
      return e;
    }
    var TS = oh("animationend"), bS = oh("animationiteration"), wS = oh("animationstart"), xS = oh("transitionend"), _S = /* @__PURE__ */ new Map(), DS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      _S.set(e, t), pr(t, [e]);
    }
    function RR() {
      for (var e = 0; e < DS.length; e++) {
        var t = DS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(TS, "onAnimationEnd"), ko(bS, "onAnimationIteration"), ko(wS, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(xS, "onTransitionEnd");
    }
    function TR(e, t, a, i, l, s, f) {
      var p = _S.get(t);
      if (p !== void 0) {
        var v = Tr, y = t;
        switch (t) {
          case "keypress":
            if (Rl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            y = "focus", v = Kc;
            break;
          case "focusout":
            y = "blur", v = Kc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Kc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = bl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Va;
            break;
          case TS:
          case bS:
          case wS:
            v = Zc;
            break;
          case xS:
            v = my;
            break;
          case "scroll":
            v = Pd;
            break;
          case "wheel":
            v = ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Qd;
            break;
        }
        var g = (s & nl) !== 0;
        {
          var _ = !g && t === "scroll", w = _R(a, p, i.type, g, _);
          if (w.length > 0) {
            var M = new v(p, y, null, i, l);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    RR(), L(), lf(), gR(), rh();
    function bR(e, t, a, i, l, s, f) {
      TR(e, t, a, i, l, s);
      var p = (s & Km) === 0;
      p && (K(e, t, a, i, l), x(e, t, a, i, l), CR(e, t, a, i, l), uf(e, t, a, i, l));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function kS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ji(i, t, void 0, e), e.currentTarget = null;
    }
    function wR(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          kS(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          kS(e, M, w), i = _;
        }
    }
    function OS(e, t) {
      for (var a = (t & nl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        wR(s, f, a);
      }
      sd();
    }
    function xR(e, t, a, i, l) {
      var s = oc(a), f = [];
      bR(f, e, i, a, s, t), OS(f, t);
    }
    function Sn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nb(t), l = OR(e, a);
      i.has(l) || (LS(t, e, rs, a), i.add(l));
    }
    function _y(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= nl), LS(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[sh]) {
        e[sh] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === Ja ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function LS(e, t, a, i, l) {
      var s = Co(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Wi(e, t, s, f) : To(e, t, s) : f !== void 0 ? qc(e, t, s, f) : Vd(e, t, s);
    }
    function MS(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Dy(e, t, a, i, l) {
      var s = i;
      if ((t & Fi) === 0 && (t & rs) === 0) {
        var f = l;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === me) {
                var y = p.stateNode.containerInfo;
                if (MS(y, f))
                  break;
                if (v === me)
                  for (var g = p.return; g !== null; ) {
                    var _ = g.tag;
                    if (_ === te || _ === me) {
                      var w = g.stateNode.containerInfo;
                      if (MS(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var M = Us(y);
                  if (M === null)
                    return;
                  var z = M.tag;
                  if (z === ie || z === Ve) {
                    p = s = M;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      id(function() {
        return xR(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _R(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, M = _.tag;
        if (M === ie && w !== null && (g = w, p !== null)) {
          var z = al(y, p);
          z != null && v.push(tp(y, z, g));
        }
        if (l)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = al(l, a);
          y != null && i.unshift(tp(l, y, v));
          var g = al(l, t);
          g != null && i.push(tp(l, g, v));
        }
        l = l.return;
      }
      return i;
    }
    function cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function DR(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = cf(s))
        l++;
      for (var f = 0, p = i; p; p = cf(p))
        f++;
      for (; l - f > 0; )
        a = cf(a), l--;
      for (; f - l > 0; )
        i = cf(i), f--;
      for (var v = l; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = cf(a), i = cf(i);
      }
      return null;
    }
    function NS(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ie && g !== null) {
          var w = g;
          if (l) {
            var M = al(p, s);
            M != null && f.unshift(tp(p, M, w));
          } else if (!l) {
            var z = al(p, s);
            z != null && f.push(tp(p, z, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kR(e, t, a, i, l) {
      var s = i && l ? DR(i, l) : null;
      i !== null && NS(e, t, i, s, !1), l !== null && a !== null && NS(e, a, l, s, !0);
    }
    function OR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Pa = !1, np = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", zS = "autoFocus", Ns = "children", zs = "style", dh = "__html", ky, ph, rp, US, vh, AS, FS;
    ky = {
      dialog: !0,
      webview: !0
    }, ph = function(e, t) {
      lc(e, t), ed(e, t), Rv(e, t, {
        registrationNameDependencies: Ft,
        possibleRegistrationNames: Vr
      });
    }, AS = dn && !document.documentMode, rp = function(e, t, a) {
      if (!Pa) {
        var i = hh(a), l = hh(t);
        l !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, US = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, FS = function(e, t) {
      var a = e.namespaceURI === zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LR = /\r\n?/g, MR = /\u0000|\uFFFD/g;
    function hh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LR, `
`).replace(MR, "");
    }
    function mh(e, t, a, i) {
      var l = hh(t), s = hh(e);
      if (s !== l && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function HS(e) {
      return e.nodeType === Ja ? e : e.ownerDocument;
    }
    function NR() {
    }
    function yh(e) {
      e.onclick = NR;
    }
    function zR(e, t, a, i, l) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === zs)
            f && Object.freeze(f), dv(t, f);
          else if (s === np) {
            var p = f ? f[dh] : void 0;
            p != null && tv(t, p);
          } else if (s === Ns)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && rc(t, f);
            } else
              typeof f == "number" && rc(t, "" + f);
          else
            s === fh || s === Oo || s === zS || (Ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, l));
        }
    }
    function UR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === zs ? dv(e, f) : s === np ? tv(e, f) : s === Ns ? rc(e, f) : da(e, s, f, i);
      }
    }
    function AR(e, t, a, i) {
      var l, s = HS(a), f, p = i;
      if (p === zi && (p = tc(e)), p === zi) {
        if (l = Ai(e, t), !l && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === zi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FR(e, t) {
      return HS(t).createTextNode(e);
    }
    function HR(e, t, a, i) {
      var l = Ai(t, a);
      ph(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Sn(Jd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          Jo(e, a), s = Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zp(e, a), s = If(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ic(t, s), zR(t, e, i, s, l), t) {
        case "input":
          Da(e), X(e, a, !1);
          break;
        case "textarea":
          Da(e), ev(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          $f(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function jR(e, t, a, i, l) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Zo(e, a), p = Zo(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ic(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === zs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === np || v === Ns || v === fh || v === Oo || v === zS || (Ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === zs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === np) {
            var z = w ? w[dh] : void 0, H = M ? M[dh] : void 0;
            z != null && H !== z && (s = s || []).push(v, z);
          } else
            v === Ns ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === fh || v === Oo || (Ft.hasOwnProperty(v) ? (w != null && (typeof w != "function" && vh(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ts(g, p[zs]), (s = s || []).push(zs, g)), s;
    }
    function VR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && N(e, l);
      var s = Ai(a, i), f = Ai(a, l);
      switch (UR(e, t, s, f), a) {
        case "input":
          F(e, l);
          break;
        case "textarea":
          Jp(e, l);
          break;
        case "select":
          Pm(e, l);
          break;
      }
    }
    function PR(e) {
      {
        var t = e.toLowerCase();
        return uc.hasOwnProperty(t) && uc[t] || null;
      }
    }
    function BR(e, t, a, i, l, s, f) {
      var p, v;
      switch (p = Ai(t, a), ph(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Sn(Jd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          Jo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zp(e, a), Sn("invalid", e);
          break;
      }
      ic(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var z in a)
        if (!!a.hasOwnProperty(z)) {
          var H = a[z];
          if (z === Ns)
            typeof H == "string" ? e.textContent !== H && (a[Oo] !== !0 && mh(e.textContent, H, s, f), M = [Ns, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Oo] !== !0 && mh(e.textContent, H, s, f), M = [Ns, "" + H]);
          else if (Ft.hasOwnProperty(z))
            H != null && (typeof H != "function" && vh(z, H), z === "onScroll" && Sn("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var fe = void 0, Oe = p && $e ? null : wr(z);
            if (a[Oo] !== !0) {
              if (!(z === fh || z === Oo || z === "value" || z === "checked" || z === "selected")) {
                if (z === np) {
                  var Te = e.innerHTML, St = H ? H[dh] : void 0;
                  if (St != null) {
                    var pt = FS(e, St);
                    pt !== Te && rp(z, Te, pt);
                  }
                } else if (z === zs) {
                  if (v.delete(z), AS) {
                    var k = Gm(H);
                    fe = e.getAttribute("style"), k !== fe && rp(z, fe, k);
                  }
                } else if (p && !$e)
                  v.delete(z.toLowerCase()), fe = si(e, z, H), H !== fe && rp(z, fe, H);
                else if (!vn(z, Oe, p) && !Yt(z, H, Oe, p)) {
                  var j = !1;
                  if (Oe !== null)
                    v.delete(Oe.attributeName), fe = fa(e, z, H, Oe);
                  else {
                    var O = i;
                    if (O === zi && (O = tc(t)), O === zi)
                      v.delete(z.toLowerCase());
                    else {
                      var q = PR(z);
                      q !== null && q !== z && (j = !0, v.delete(q)), v.delete(z);
                    }
                    fe = si(e, z, H);
                  }
                  var de = $e;
                  !de && H !== fe && !j && rp(z, fe, H);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[Oo] !== !0 && US(v), t) {
        case "input":
          Da(e), X(e, a, !0);
          break;
        case "textarea":
          Da(e), ev(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return M;
    }
    function $R(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YR(e, t, a) {
      switch (t) {
        case "input":
          Ne(e, a);
          return;
        case "textarea":
          Qf(e, a);
          return;
        case "select":
          Bm(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var IR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], QR = jS.concat(["button"]), WR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], VS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = ut({}, e || VS), i = {
          tag: t
        };
        return jS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return WR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, PS = {};
      ap = function(e, t, a) {
        a = a || VS;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qR(e, l) ? null : i, f = s ? null : GR(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!PS[y]) {
            PS[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", up = "$?", lp = "$!", XR = "style", zy = null, Uy = null;
    function KR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ja:
        case el: {
          t = i === Ja ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : qf(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZR(e, t, a) {
      {
        var i = e, l = qf(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function y_(e) {
      return e;
    }
    function JR(e) {
      zy = Sa(), Uy = pR();
      var t = null;
      return Kn(!1), t;
    }
    function eT(e) {
      vR(Uy), Kn(zy), zy = null, Uy = null;
    }
    function tT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = AR(e, t, a, s);
      return cp(l, y), $y(y, t), y;
    }
    function nT(e, t) {
      e.appendChild(t);
    }
    function rT(e, t, a, i, l) {
      switch (HR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return jR(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iT(e, t, a, i) {
      {
        var l = a;
        ap(null, e, l.ancestorInfo);
      }
      var s = FR(e, t);
      return cp(i, s), s;
    }
    function uT() {
      var e = window.event;
      return e === void 0 ? Yi : Or(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, lT = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, BS = typeof Promise == "function" ? Promise : void 0, oT = typeof queueMicrotask == "function" ? queueMicrotask : typeof BS < "u" ? function(e) {
      return BS.resolve(null).then(e).catch(sT);
    } : Fy;
    function sT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fT(e, t, a, i, l, s) {
      VR(e, t, a, i, l), $y(e, l);
    }
    function $S(e) {
      rc(e, "");
    }
    function dT(e, t, a) {
      e.nodeValue = a;
    }
    function pT(e, t) {
      e.appendChild(t);
    }
    function vT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function hT(e, t, a) {
      e.insertBefore(t, a);
    }
    function mT(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yT(e, t) {
      e.removeChild(t);
    }
    function gT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Mn) {
          var s = l.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(l), dt(t);
              return;
            } else
              i--;
          else
            (s === Sh || s === up || s === lp) && i++;
        }
        a = l;
      } while (a);
      dt(t);
    }
    function ST(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === Gr && jy(e, t), dt(e);
    }
    function ET(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CT(e) {
      e.nodeValue = "";
    }
    function RT(e, t) {
      e = e;
      var a = t[XR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ac("display", i);
    }
    function TT(e, t) {
      e.nodeValue = t;
    }
    function bT(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Ja && e.documentElement && e.removeChild(e.documentElement);
    }
    function wT(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xT(e, t) {
      return t === "" || e.nodeType !== Ui ? null : e;
    }
    function _T(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function YS(e) {
      return e.data === up;
    }
    function Vy(e) {
      return e.data === lp;
    }
    function DT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function kT(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Ui)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Sh || a === lp || a === up)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Ch(e.nextSibling);
    }
    function OT(e) {
      return Ch(e.firstChild);
    }
    function LT(e) {
      return Ch(e.firstChild);
    }
    function MT(e) {
      return Ch(e.nextSibling);
    }
    function NT(e, t, a, i, l, s, f) {
      cp(s, e), $y(e, a);
      var p;
      {
        var v = l;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== Me;
      return BR(e, t, a, p, i, y, f);
    }
    function zT(e, t, a, i) {
      return cp(a, e), a.mode & ot, $R(e, t);
    }
    function UT(e, t) {
      cp(t, e);
    }
    function AT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return op(t);
            a--;
          } else
            (i === Sh || i === lp || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function IS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Sh || i === lp || i === up) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FT(e) {
      dt(e);
    }
    function HT(e) {
      dt(e);
    }
    function jT(e) {
      return e !== "head" && e !== "body";
    }
    function VT(e, t, a, i) {
      var l = !0;
      mh(t.nodeValue, a, i, l);
    }
    function PT(e, t, a, i, l, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, l, s, f);
      }
    }
    function BT(e, t) {
      t.nodeType === Gr ? Oy(e, t) : t.nodeType === Mn || Ly(e, t);
    }
    function $T(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? Oy(a, t) : t.nodeType === Mn || Ly(a, t));
      }
    }
    function YT(e, t, a, i, l) {
      (l || t[gh] !== !0) && (i.nodeType === Gr ? Oy(a, i) : i.nodeType === Mn || Ly(a, i));
    }
    function IT(e, t, a) {
      My(e, t);
    }
    function QT(e, t) {
      Ny(e, t);
    }
    function WT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function qT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function GT(e, t, a, i, l, s) {
      (s || t[gh] !== !0) && My(a, i);
    }
    function XT(e, t, a, i, l) {
      (l || t[gh] !== !0) && Ny(a, i);
    }
    function KT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZT(e) {
      ep(e);
    }
    var ff = Math.random().toString(36).slice(2), df = "__reactFiber$" + ff, Py = "__reactProps$" + ff, sp = "__reactContainer$" + ff, By = "__reactEvents$" + ff, JT = "__reactListeners$" + ff, eb = "__reactHandles$" + ff;
    function tb(e) {
      delete e[df], delete e[Py], delete e[By], delete e[JT], delete e[eb];
    }
    function cp(e, t) {
      t[df] = e;
    }
    function Rh(e, t) {
      t[sp] = e;
    }
    function QS(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Us(e) {
      var t = e[df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = IS(e); l !== null; ) {
              var s = l[df];
              if (s)
                return s;
              l = IS(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lo(e) {
      var t = e[df] || e[sp];
      return t && (t.tag === ie || t.tag === Ve || t.tag === xe || t.tag === te) ? t : null;
    }
    function pf(e) {
      if (e.tag === ie || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Py] || null;
    }
    function $y(e, t) {
      e[Py] = t;
    }
    function nb(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var WS = {}, qS = A.ReactDebugCurrentFrame;
    function bh(e) {
      if (e) {
        var t = e._owner, a = vi(e.type, e._source, t ? t.type : null);
        qS.setExtraStackFrame(a);
      } else
        qS.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, l) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (bh(l), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), bh(null)), p instanceof Error && !(p.message in WS) && (WS[p.message] = !0, bh(l), S("Failed %s type: %s", a, p.message), bh(null));
          }
      }
    }
    var Yy = [], wh;
    wh = [];
    var Dl = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Dl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== wh[Dl] && S("Unexpected Fiber popped."), e.current = Yy[Dl], Yy[Dl] = null, wh[Dl] = null, Dl--;
    }
    function ia(e, t, a) {
      Dl++, Yy[Dl] = e.current, wh[Dl] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ai = {};
    Object.freeze(ai);
    var kl = Mo(ai), Vu = Mo(!1), Qy = ai;
    function vf(e, t, a) {
      return a && Pu(t) ? Qy : kl.current;
    }
    function GS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return l && GS(e, t, s), s;
      }
    }
    function xh() {
      return Vu.current;
    }
    function Pu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      aa(Vu, e), aa(kl, e);
    }
    function Wy(e) {
      aa(Vu, e), aa(kl, e);
    }
    function XS(e, t, a) {
      {
        if (kl.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(kl, t, e), ia(Vu, a, e);
      }
    }
    function KS(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          Gi(l, f, "child context", v);
        }
        return ut({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return Qy = kl.current, ia(kl, a, e), ia(Vu, Vu.current, e), !0;
      }
    }
    function ZS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = KS(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = l, aa(Vu, e), aa(kl, e), ia(kl, l, e), ia(Vu, a, e);
        } else
          aa(Vu, e), ia(Vu, a, e);
      }
    }
    function rb(e) {
      {
        if (!vd(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Pu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, kh = 1, Ol = null, qy = !1, Gy = !1;
    function JS(e) {
      Ol === null ? Ol = [e] : Ol.push(e);
    }
    function ab(e) {
      qy = !0, JS(e);
    }
    function eE() {
      qy && zo();
    }
    function zo() {
      if (!Gy && Ol !== null) {
        Gy = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Ol;
          for (Vn(gr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ol = null, qy = !1;
        } catch (s) {
          throw Ol !== null && (Ol = Ol.slice(e + 1)), hc(yc, zo), s;
        } finally {
          Vn(t), Gy = !1;
        }
      }
      return null;
    }
    var mf = [], yf = 0, Oh = null, Lh = 0, Ti = [], bi = 0, As = null, Ll = 1, Ml = "";
    function ib(e) {
      return Hs(), (e.flags & fd) !== De;
    }
    function ub(e) {
      return Hs(), Lh;
    }
    function lb() {
      var e = Ml, t = Ll, a = t & ~ob(t);
      return a.toString(32) + e;
    }
    function Fs(e, t) {
      Hs(), mf[yf++] = Lh, mf[yf++] = Oh, Oh = e, Lh = t;
    }
    function tE(e, t, a) {
      Hs(), Ti[bi++] = Ll, Ti[bi++] = Ml, Ti[bi++] = As, As = e;
      var i = Ll, l = Ml, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, M = s - y, z = Mh(t) + M, H = p << M, fe = H | w, Oe = _ + l;
        Ll = 1 << z | fe, Ml = Oe;
      } else {
        var Te = p << s, St = Te | f, pt = l;
        Ll = 1 << v | St, Ml = pt;
      }
    }
    function Xy(e) {
      Hs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Fs(e, a), tE(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - Tc(e);
    }
    function ob(e) {
      return 1 << Mh(e) - 1;
    }
    function Ky(e) {
      for (; e === Oh; )
        Oh = mf[--yf], mf[yf] = null, Lh = mf[--yf], mf[yf] = null;
      for (; e === As; )
        As = Ti[--bi], Ti[bi] = null, Ml = Ti[--bi], Ti[bi] = null, Ll = Ti[--bi], Ti[bi] = null;
    }
    function sb() {
      return Hs(), As !== null ? {
        id: Ll,
        overflow: Ml
      } : null;
    }
    function cb(e, t) {
      Hs(), Ti[bi++] = Ll, Ti[bi++] = Ml, Ti[bi++] = As, Ll = t.id, Ml = t.overflow, As = e;
    }
    function Hs() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, wi = null, Xi = !1, js = !1, Uo = null;
    function fb() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nE() {
      js = !0;
    }
    function db() {
      return js;
    }
    function pb(e) {
      var t = e.stateNode.containerInfo;
      return wi = LT(t), Lr = e, Xi = !0, Uo = null, js = !1, !0;
    }
    function vb(e, t, a) {
      return wi = MT(t), Lr = e, Xi = !0, Uo = null, js = !1, a !== null && cb(e, a), !0;
    }
    function rE(e, t) {
      switch (e.tag) {
        case te: {
          BT(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ot) !== Me;
          YT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case xe: {
          var i = e.memoizedState;
          i.dehydrated !== null && $T(i.dehydrated, t);
          break;
        }
      }
    }
    function aE(e, t) {
      rE(e, t);
      var a = y4();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Nt) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (js)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, IT(a, i);
                break;
              case Ve:
                var l = t.pendingProps;
                QT(a, l);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== Me;
                GT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  g
                );
                break;
              }
              case Ve: {
                var _ = t.pendingProps, w = (e.mode & ot) !== Me;
                XT(
                  s,
                  f,
                  p,
                  _,
                  w
                );
                break;
              }
            }
            break;
          }
          case xe: {
            var M = e.memoizedState, z = M.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ie:
                  var H = t.type;
                  t.pendingProps, WT(z, H);
                  break;
                case Ve:
                  var fe = t.pendingProps;
                  qT(z, fe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function iE(e, t) {
      t.flags = t.flags & ~Ma | rn, Zy(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = wT(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, wi = OT(i), !0) : !1;
        }
        case Ve: {
          var l = e.pendingProps, s = xT(t, l);
          return s !== null ? (e.stateNode = s, Lr = e, wi = null, !0) : !1;
        }
        case xe: {
          var f = _T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sb(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = g4(f);
            return v.return = e, e.child = v, Lr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & ot) !== Me && (e.flags & Pe) === De;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (!!Xi) {
        var t = wi;
        if (!t) {
          Jy(e) && (Zy(Lr, e), eg()), iE(Lr, e), Xi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          Jy(e) && (Zy(Lr, e), eg()), t = op(a);
          var i = Lr;
          if (!t || !uE(e, t)) {
            iE(Lr, e), Xi = !1, Lr = e;
            return;
          }
          aE(i, a);
        }
      }
    }
    function hb(e, t, a) {
      var i = e.stateNode, l = !js, s = NT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function mb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zT(t, a, e);
      if (i) {
        var l = Lr;
        if (l !== null)
          switch (l.tag) {
            case te: {
              var s = l.stateNode.containerInfo, f = (l.mode & ot) !== Me;
              VT(
                s,
                t,
                a,
                f
              );
              break;
            }
            case ie: {
              var p = l.type, v = l.memoizedProps, y = l.stateNode, g = (l.mode & ot) !== Me;
              PT(
                p,
                v,
                y,
                t,
                a,
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function yb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      UT(a, e);
    }
    function gb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return AT(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== te && t.tag !== xe; )
        t = t.return;
      Lr = t;
    }
    function Nh(e) {
      if (e !== Lr)
        return !1;
      if (!Xi)
        return lE(e), Xi = !0, !1;
      if (e.tag !== te && (e.tag !== ie || jT(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Jy(e))
            oE(e), eg();
          else
            for (; t; )
              aE(e, t), t = op(t);
      }
      return lE(e), e.tag === xe ? wi = gb(e) : wi = Lr ? op(e.stateNode) : null, !0;
    }
    function Sb() {
      return Xi && wi !== null;
    }
    function oE(e) {
      for (var t = wi; t; )
        rE(e, t), t = op(t);
    }
    function gf() {
      Lr = null, wi = null, Xi = !1, js = !1;
    }
    function sE() {
      Uo !== null && (rC(Uo), Uo = null);
    }
    function Mr() {
      return Xi;
    }
    function ng(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var Eb = A.ReactCurrentBatchConfig, Cb = null;
    function Rb() {
      return Eb.transition;
    }
    var Ki = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Tb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, Vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ps = /* @__PURE__ */ new Set();
      Ki.recordUnsafeLifecycleWarnings = function(e, t) {
        Ps.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, Ki.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          e.add(Ye(w) || "Component"), Ps.add(w.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          t.add(Ye(w) || "Component"), Ps.add(w.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          a.add(Ye(w) || "Component"), Ps.add(w.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          i.add(Ye(w) || "Component"), Ps.add(w.type);
        }), hp = []);
        var l = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          l.add(Ye(w) || "Component"), Ps.add(w.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(w) {
          s.add(Ye(w) || "Component"), Ps.add(w.type);
        }), yp = []), t.size > 0) {
          var f = Vs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Vs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Vs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Vs(e);
          Ge(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Vs(a);
          Ge(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (l.size > 0) {
          var _ = Vs(l);
          Ge(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var zh = /* @__PURE__ */ new Map(), cE = /* @__PURE__ */ new Set();
      Ki.recordLegacyContextWarning = function(e, t) {
        var a = Tb(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cE.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, Ki.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), cE.add(s.type);
            });
            var l = Vs(i);
            try {
              Pt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Cn();
            }
          }
        });
      }, Ki.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], zh = /* @__PURE__ */ new Map();
      };
    }
    function Zi(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var rg = Mo(null), ag;
    ag = {};
    var Uh = null, Sf = null, ig = null, Ah = !1;
    function Fh() {
      Uh = null, Sf = null, ig = null, Ah = !1;
    }
    function fE() {
      Ah = !0;
    }
    function dE() {
      Ah = !1;
    }
    function pE(e, t, a) {
      ia(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function ug(e, t) {
      var a = rg.current;
      aa(rg, t), e._currentValue = a;
    }
    function lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (yl(i.childLanes, t) ? l !== null && !yl(l.childLanes, t) && (l.childLanes = et(l.childLanes, t)) : (i.childLanes = et(i.childLanes, t), l !== null && (l.childLanes = et(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bb(e, t, a) {
      wb(e, t, a);
    }
    function wb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = jn(a), v = Nl(Zt, p);
                v.tag = jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = et(w.lanes, a)), lg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = et(M.lanes, a);
          var z = M.alternate;
          z !== null && (z.lanes = et(z.lanes, a)), lg(M, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var H = l.sibling;
            if (H !== null) {
              H.return = l.return, l = H;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Ef(e, t) {
      Uh = e, Sf = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function Jn(e) {
      Ah && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Sf === null) {
          if (Uh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Sf = a, Uh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          Sf = Sf.next = a;
      }
      return t;
    }
    var Bs = null;
    function og(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function xb() {
      if (Bs !== null) {
        for (var e = 0; e < Bs.length; e++) {
          var t = Bs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Bs = null;
      }
    }
    function vE(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, og(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Hh(e, i);
    }
    function _b(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, og(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Db(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, og(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Hh(e, i);
    }
    function Ba(e, t) {
      return Hh(e, t);
    }
    var kb = Hh;
    function Hh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (rn | Ma)) !== De && hC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = et(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (l.flags & (rn | Ma)) !== De && hC(e), i = l, l = l.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hE = 0, mE = 1, jh = 2, sg = 3, Vh = !1, cg, Ph;
    cg = !1, Ph = null;
    function fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Nl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Ph === l && !cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), kx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, kb(e, a);
      } else
        return Db(e, l, t, a);
    }
    function Bh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (_d(a)) {
          var s = l.lanes;
          s = kd(s, e.pendingLanes);
          var f = et(s, a);
          l.lanes = f, mo(e, f);
        }
      }
    }
    function dg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ob(e, t, a, i, l, s) {
      switch (a.tag) {
        case mE: {
          var f = a.payload;
          if (typeof f == "function") {
            fE();
            var p = f.call(s, i, l);
            {
              if (e.mode & yn) {
                Hn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              dE();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~qn | Pe;
        case hE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fE(), y = v.call(s, i, l);
            {
              if (e.mode & yn) {
                Hn(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              dE();
            }
          } else
            y = v;
          return y == null ? i : ut({}, i, y);
        }
        case jh:
          return Vh = !0, i;
      }
      return i;
    }
    function $h(e, t, a, i) {
      var l = e.updateQueue;
      Vh = !1, Ph = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = l.baseState, z = V, H = null, fe = null, Oe = null, Te = s;
        do {
          var St = Te.lane, pt = Te.eventTime;
          if (yl(i, St)) {
            if (Oe !== null) {
              var j = {
                eventTime: pt,
                lane: yt,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Oe = Oe.next = j;
            }
            M = Ob(e, l, Te, M, t, a);
            var O = Te.callback;
            if (O !== null && Te.lane !== yt) {
              e.flags |= yi;
              var q = l.effects;
              q === null ? l.effects = [Te] : q.push(Te);
            }
          } else {
            var k = {
              eventTime: pt,
              lane: St,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Oe === null ? (fe = Oe = k, H = M) : Oe = Oe.next = k, z = et(z, St);
          }
          if (Te = Te.next, Te === null) {
            if (p = l.shared.pending, p === null)
              break;
            var de = p, le = de.next;
            de.next = null, Te = le, l.lastBaseUpdate = de, l.shared.pending = null;
          }
        } while (!0);
        Oe === null && (H = M), l.baseState = H, l.firstBaseUpdate = fe, l.lastBaseUpdate = Oe;
        var je = l.shared.interleaved;
        if (je !== null) {
          var qe = je;
          do
            z = et(z, qe.lane), qe = qe.next;
          while (qe !== je);
        } else
          s === null && (l.shared.lanes = V);
        $p(z), e.lanes = z, e.memoizedState = M;
      }
      Ph = null;
    }
    function Lb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gE() {
      Vh = !1;
    }
    function Yh() {
      return Vh;
    }
    function SE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, Lb(f, a));
        }
    }
    var pg = {}, EE = new W.Component().refs, vg, hg, mg, yg, gg, CE, Ih, Sg, Eg, Cg;
    {
      vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set();
      var RE = /* @__PURE__ */ new Set();
      Ih = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          RE.has(a) || (RE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, CE = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          gg.has(a) || (gg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(pg);
    }
    function Rg(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & yn) {
          Hn(!0);
          try {
            s = a(i, l);
          } finally {
            Hn(!1);
          }
        }
        CE(t, s);
      }
      var f = s == null ? l : ut({}, l, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Tg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = Oa(e), l = Ra(), s = Yo(i), f = Nl(l, s);
        f.payload = t, a != null && (Ih(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, l), Bh(p, i, s)), Lu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Oa(e), l = Ra(), s = Yo(i), f = Nl(l, s);
        f.tag = mE, f.payload = t, a != null && (Ih(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, l), Bh(p, i, s)), Lu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Oa(e), i = Ra(), l = Yo(a), s = Nl(i, l);
        s.tag = jh, t != null && (Ih(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, l);
        f !== null && (dr(f, a, l, i), Bh(f, a, l)), Td(a, l);
      }
    };
    function TE(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            Hn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Hn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_e(a, i) || !_e(l, s) : !0;
    }
    function Mb(e, t, a) {
      var i = e.stateNode;
      {
        var l = bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Eg.has(t) && (Eg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !mg.has(t) && (mg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || vt(p)) && S("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function bE(e, t) {
      t.updater = Tg, e.stateNode = t, io(t, e), t._reactInternalInstance = pg;
    }
    function wE(e, t, a) {
      var i = !1, l = ai, s = ai, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === ee && f._context === void 0;
        if (!p && !Cg.has(t)) {
          Cg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === $ ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        l = vf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? hf(e, l) : ai;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        Hn(!0);
        try {
          g = new t(a, s);
        } finally {
          Hn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      bE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = bt(t) || "Component";
          hg.has(w) || (hg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, z = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), M !== null || z !== null || H !== null) {
            var fe = bt(t) || "Component", Oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yg.has(fe) || (yg.add(fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fe, Oe, M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && GS(e, l, s), g;
    }
    function Nb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), Tg.enqueueReplaceState(t, t.state, null));
    }
    function xE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = Ye(e) || "Component";
          vg.has(s) || (vg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Tg.enqueueReplaceState(t, t.state, null);
      }
    }
    function bg(e, t, a, i) {
      Mb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = EE, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Jn(s);
      else {
        var f = vf(e, t, !0);
        l.context = hf(e, f);
      }
      {
        if (l.state === a) {
          var p = bt(t) || "Component";
          Sg.has(p) || (Sg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && Ki.recordLegacyContextWarning(e, l), Ki.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Rg(e, t, v, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Nb(e, l), $h(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var y = Je;
        y |= Kr, (e.mode & Ua) !== Me && (y |= Zr), e.flags |= y;
      }
    }
    function zb(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, v = ai;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = vf(e, t, !0);
        v = hf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !_ && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== v) && xE(e, l, a, v), gE();
      var w = e.memoizedState, M = l.state = w;
      if ($h(e, a, l, i), M = e.memoizedState, s === a && w === M && !xh() && !Yh()) {
        if (typeof l.componentDidMount == "function") {
          var z = Je;
          z |= Kr, (e.mode & Ua) !== Me && (z |= Zr), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (Rg(e, t, g, a), M = e.memoizedState);
      var H = Yh() || TE(e, t, s, a, w, M, v);
      if (H) {
        if (!_ && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var fe = Je;
          fe |= Kr, (e.mode & Ua) !== Me && (fe |= Zr), e.flags |= fe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Oe = Je;
          Oe |= Kr, (e.mode & Ua) !== Me && (Oe |= Zr), e.flags |= Oe;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return l.props = a, l.state = M, l.context = v, H;
    }
    function Ub(e, t, a, i, l) {
      var s = t.stateNode;
      yE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Zi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ai;
      if (typeof g == "object" && g !== null)
        _ = Jn(g);
      else {
        var w = vf(t, a, !0);
        _ = hf(t, w);
      }
      var M = a.getDerivedStateFromProps, z = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && xE(t, s, i, _), gE();
      var H = t.memoizedState, fe = s.state = H;
      if ($h(t, i, s, l), fe = t.memoizedState, f === v && H === fe && !xh() && !Yh() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= La), !1;
      typeof M == "function" && (Rg(t, a, M, i), fe = t.memoizedState);
      var Oe = Yh() || TE(t, a, p, i, H, fe, _) || be;
      return Oe ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, fe, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, fe, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= La)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= La), t.memoizedProps = i, t.memoizedState = fe), s.props = i, s.state = fe, s.context = _, Oe;
    }
    var wg, xg, _g, Dg, kg, _E = function(e, t) {
    };
    wg = !1, xg = !1, _g = {}, Dg = {}, kg = {}, _E = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        Dg[a] || (Dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Fe) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = Ye(e) || "Component";
          _g[l] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), _g[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          In(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            w === EE && (w = v.refs = {}), _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Qh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ye(e) || "Component";
        if (kg[t])
          return;
        kg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function DE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kE(e) {
      function t(k, j) {
        if (!!e) {
          var O = k.deletions;
          O === null ? (k.deletions = [j], k.flags |= Nt) : O.push(j);
        }
      }
      function a(k, j) {
        if (!e)
          return null;
        for (var O = j; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, j) {
        for (var O = /* @__PURE__ */ new Map(), q = j; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function l(k, j) {
        var O = Xs(k, j);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, j, O) {
        if (k.index = O, !e)
          return k.flags |= fd, j;
        var q = k.alternate;
        if (q !== null) {
          var de = q.index;
          return de < j ? (k.flags |= rn, j) : de;
        } else
          return k.flags |= rn, j;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= rn), k;
      }
      function p(k, j, O, q) {
        if (j === null || j.tag !== Ve) {
          var de = nS(O, k.mode, q);
          return de.return = k, de;
        } else {
          var le = l(j, O);
          return le.return = k, le;
        }
      }
      function v(k, j, O, q) {
        var de = O.type;
        if (de === pa)
          return g(k, j, O.props.children, q, O.key);
        if (j !== null && (j.elementType === de || SC(j, O) || typeof de == "object" && de !== null && de.$$typeof === ke && DE(de) === j.type)) {
          var le = l(j, O.props);
          return le.ref = gp(k, j, O), le.return = k, le._debugSource = O._source, le._debugOwner = O._owner, le;
        }
        var je = tS(O, k.mode, q);
        return je.ref = gp(k, j, O), je.return = k, je;
      }
      function y(k, j, O, q) {
        if (j === null || j.tag !== me || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation) {
          var de = rS(O, k.mode, q);
          return de.return = k, de;
        } else {
          var le = l(j, O.children || []);
          return le.return = k, le;
        }
      }
      function g(k, j, O, q, de) {
        if (j === null || j.tag !== Ct) {
          var le = Qo(O, k.mode, q, de);
          return le.return = k, le;
        } else {
          var je = l(j, O);
          return je.return = k, je;
        }
      }
      function _(k, j, O) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var q = nS("" + j, k.mode, O);
          return q.return = k, q;
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case ci: {
              var de = tS(j, k.mode, O);
              return de.ref = gp(k, null, j), de.return = k, de;
            }
            case xr: {
              var le = rS(j, k.mode, O);
              return le.return = k, le;
            }
            case ke: {
              var je = j._payload, qe = j._init;
              return _(k, qe(je), O);
            }
          }
          if (vt(j) || Ga(j)) {
            var qt = Qo(j, k.mode, O, null);
            return qt.return = k, qt;
          }
          Qh(k, j);
        }
        return typeof j == "function" && Wh(k), null;
      }
      function w(k, j, O, q) {
        var de = j !== null ? j.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(k, j, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ci:
              return O.key === de ? v(k, j, O, q) : null;
            case xr:
              return O.key === de ? y(k, j, O, q) : null;
            case ke: {
              var le = O._payload, je = O._init;
              return w(k, j, je(le), q);
            }
          }
          if (vt(O) || Ga(O))
            return de !== null ? null : g(k, j, O, q, null);
          Qh(k, O);
        }
        return typeof O == "function" && Wh(k), null;
      }
      function M(k, j, O, q, de) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var le = k.get(O) || null;
          return p(j, le, "" + q, de);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case ci: {
              var je = k.get(q.key === null ? O : q.key) || null;
              return v(j, je, q, de);
            }
            case xr: {
              var qe = k.get(q.key === null ? O : q.key) || null;
              return y(j, qe, q, de);
            }
            case ke:
              var qt = q._payload, Ot = q._init;
              return M(k, j, O, Ot(qt), de);
          }
          if (vt(q) || Ga(q)) {
            var $n = k.get(O) || null;
            return g(j, $n, q, de, null);
          }
          Qh(j, q);
        }
        return typeof q == "function" && Wh(j), null;
      }
      function z(k, j, O) {
        {
          if (typeof k != "object" || k === null)
            return j;
          switch (k.$$typeof) {
            case ci:
            case xr:
              _E(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (j === null) {
                j = /* @__PURE__ */ new Set(), j.add(q);
                break;
              }
              if (!j.has(q)) {
                j.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", q);
              break;
            case ke:
              var de = k._payload, le = k._init;
              z(le(de), j, O);
              break;
          }
        }
        return j;
      }
      function H(k, j, O, q) {
        for (var de = null, le = 0; le < O.length; le++) {
          var je = O[le];
          de = z(je, de, k);
        }
        for (var qe = null, qt = null, Ot = j, $n = 0, Lt = 0, Un = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (Un = Ot, Ot = null) : Un = Ot.sibling;
          var la = w(k, Ot, O[Lt], q);
          if (la === null) {
            Ot === null && (Ot = Un);
            break;
          }
          e && Ot && la.alternate === null && t(k, Ot), $n = s(la, $n, Lt), qt === null ? qe = la : qt.sibling = la, qt = la, Ot = Un;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Mr()) {
            var jr = Lt;
            Fs(k, jr);
          }
          return qe;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var ui = _(k, O[Lt], q);
            ui !== null && ($n = s(ui, $n, Lt), qt === null ? qe = ui : qt.sibling = ui, qt = ui);
          }
          if (Mr()) {
            var Ta = Lt;
            Fs(k, Ta);
          }
          return qe;
        }
        for (var ba = i(k, Ot); Lt < O.length; Lt++) {
          var oa = M(ba, k, Lt, O[Lt], q);
          oa !== null && (e && oa.alternate !== null && ba.delete(oa.key === null ? Lt : oa.key), $n = s(oa, $n, Lt), qt === null ? qe = oa : qt.sibling = oa, qt = oa);
        }
        if (e && ba.forEach(function(Ff) {
          return t(k, Ff);
        }), Mr()) {
          var jl = Lt;
          Fs(k, jl);
        }
        return qe;
      }
      function fe(k, j, O, q) {
        var de = Ga(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && O[Symbol.toStringTag] === "Generator" && (xg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xg = !0), O.entries === de && (wg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var le = de.call(O);
          if (le)
            for (var je = null, qe = le.next(); !qe.done; qe = le.next()) {
              var qt = qe.value;
              je = z(qt, je, k);
            }
        }
        var Ot = de.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Lt = null, Un = j, la = 0, jr = 0, ui = null, Ta = Ot.next(); Un !== null && !Ta.done; jr++, Ta = Ot.next()) {
          Un.index > jr ? (ui = Un, Un = null) : ui = Un.sibling;
          var ba = w(k, Un, Ta.value, q);
          if (ba === null) {
            Un === null && (Un = ui);
            break;
          }
          e && Un && ba.alternate === null && t(k, Un), la = s(ba, la, jr), Lt === null ? $n = ba : Lt.sibling = ba, Lt = ba, Un = ui;
        }
        if (Ta.done) {
          if (a(k, Un), Mr()) {
            var oa = jr;
            Fs(k, oa);
          }
          return $n;
        }
        if (Un === null) {
          for (; !Ta.done; jr++, Ta = Ot.next()) {
            var jl = _(k, Ta.value, q);
            jl !== null && (la = s(jl, la, jr), Lt === null ? $n = jl : Lt.sibling = jl, Lt = jl);
          }
          if (Mr()) {
            var Ff = jr;
            Fs(k, Ff);
          }
          return $n;
        }
        for (var qp = i(k, Un); !Ta.done; jr++, Ta = Ot.next()) {
          var Gu = M(qp, k, jr, Ta.value, q);
          Gu !== null && (e && Gu.alternate !== null && qp.delete(Gu.key === null ? jr : Gu.key), la = s(Gu, la, jr), Lt === null ? $n = Gu : Lt.sibling = Gu, Lt = Gu);
        }
        if (e && qp.forEach(function(G4) {
          return t(k, G4);
        }), Mr()) {
          var q4 = jr;
          Fs(k, q4);
        }
        return $n;
      }
      function Oe(k, j, O, q) {
        if (j !== null && j.tag === Ve) {
          a(k, j.sibling);
          var de = l(j, O);
          return de.return = k, de;
        }
        a(k, j);
        var le = nS(O, k.mode, q);
        return le.return = k, le;
      }
      function Te(k, j, O, q) {
        for (var de = O.key, le = j; le !== null; ) {
          if (le.key === de) {
            var je = O.type;
            if (je === pa) {
              if (le.tag === Ct) {
                a(k, le.sibling);
                var qe = l(le, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (le.elementType === je || SC(le, O) || typeof je == "object" && je !== null && je.$$typeof === ke && DE(je) === le.type) {
              a(k, le.sibling);
              var qt = l(le, O.props);
              return qt.ref = gp(k, le, O), qt.return = k, qt._debugSource = O._source, qt._debugOwner = O._owner, qt;
            }
            a(k, le);
            break;
          } else
            t(k, le);
          le = le.sibling;
        }
        if (O.type === pa) {
          var Ot = Qo(O.props.children, k.mode, q, O.key);
          return Ot.return = k, Ot;
        } else {
          var $n = tS(O, k.mode, q);
          return $n.ref = gp(k, j, O), $n.return = k, $n;
        }
      }
      function St(k, j, O, q) {
        for (var de = O.key, le = j; le !== null; ) {
          if (le.key === de)
            if (le.tag === me && le.stateNode.containerInfo === O.containerInfo && le.stateNode.implementation === O.implementation) {
              a(k, le.sibling);
              var je = l(le, O.children || []);
              return je.return = k, je;
            } else {
              a(k, le);
              break;
            }
          else
            t(k, le);
          le = le.sibling;
        }
        var qe = rS(O, k.mode, q);
        return qe.return = k, qe;
      }
      function pt(k, j, O, q) {
        var de = typeof O == "object" && O !== null && O.type === pa && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ci:
              return f(Te(k, j, O, q));
            case xr:
              return f(St(k, j, O, q));
            case ke:
              var le = O._payload, je = O._init;
              return pt(k, j, je(le), q);
          }
          if (vt(O))
            return H(k, j, O, q);
          if (Ga(O))
            return fe(k, j, O, q);
          Qh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Oe(k, j, "" + O, q)) : (typeof O == "function" && Wh(k), a(k, j));
      }
      return pt;
    }
    var Cf = kE(!0), OE = kE(!1);
    function Ab(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Xs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Xs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Fb(e, t) {
      for (var a = e.child; a !== null; )
        d4(a, t), a = a.sibling;
    }
    var Sp = {}, Fo = Mo(Sp), Ep = Mo(Sp), qh = Mo(Sp);
    function Gh(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = Gh(qh.current);
      return e;
    }
    function Og(e, t) {
      ia(qh, t, e), ia(Ep, e, e), ia(Fo, Sp, e);
      var a = KR(t);
      aa(Fo, e), ia(Fo, a, e);
    }
    function Rf(e) {
      aa(Fo, e), aa(Ep, e), aa(qh, e);
    }
    function Lg() {
      var e = Gh(Fo.current);
      return e;
    }
    function ME(e) {
      Gh(qh.current);
      var t = Gh(Fo.current), a = ZR(t, e.type);
      t !== a && (ia(Ep, e, e), ia(Fo, a, e));
    }
    function Mg(e) {
      Ep.current === e && (aa(Fo, e), aa(Ep, e));
    }
    var Hb = 0, NE = 1, zE = 1, Cp = 2, Ji = Mo(Hb);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Tf(e) {
      return e & NE;
    }
    function zg(e, t) {
      return e & NE | t;
    }
    function jb(e, t) {
      return e | t;
    }
    function Ho(e, t) {
      ia(Ji, t, e);
    }
    function bf(e) {
      aa(Ji, e);
    }
    function Vb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Xh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === xe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YS(i) || Vy(i))
              return t;
          }
        } else if (t.tag === Dt && t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Pe) !== De;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = 0, ir = 1, Bu = 2, ur = 4, Nr = 8, Ug = [];
    function Ag() {
      for (var e = 0; e < Ug.length; e++) {
        var t = Ug[e];
        t._workInProgressVersionPrimary = null;
      }
      Ug.length = 0;
    }
    function Pb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, Fg, wf;
    Fg = /* @__PURE__ */ new Set();
    var $s = V, Wt = null, lr = null, or = null, Kh = !1, Tp = !1, bp = 0, Bb = 0, $b = 25, P = null, xi = null, jo = -1, Hg = !1;
    function $t() {
      {
        var e = P;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function re() {
      {
        var e = P;
        xi !== null && (jo++, xi[jo] !== e && Yb(e));
      }
    }
    function xf(e) {
      e != null && !vt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Yb(e) {
      {
        var t = Ye(Wt);
        if (!Fg.has(t) && (Fg.add(t), xi !== null)) {
          for (var a = "", i = 30, l = 0; l <= jo; l++) {
            for (var s = xi[l], f = l === jo ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jg(e, t) {
      if (Hg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function _f(e, t, a, i, l, s) {
      $s = s, Wt = t, xi = e !== null ? e._debugHookTypes : null, jo = -1, Hg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? se.current = n1 : xi !== null ? se.current = t1 : se.current = e1;
      var f = a(i, l);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, bp = 0, p >= $b)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Hg = !1, lr = null, or = null, t.updateQueue = null, jo = -1, se.current = r1, f = a(i, l);
        } while (Tp);
      }
      se.current = cm, t._debugHookTypes = xi;
      var v = lr !== null && lr.next !== null;
      if ($s = V, Wt = null, lr = null, or = null, P = null, xi = null, jo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && (e.mode & ot) !== Me && S("Internal React error: Expected static flag was missing. Please notify the React team."), Kh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Df() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ua) !== Me ? t.flags &= ~(ll | Zr | sn | Je) : t.flags &= ~(sn | Je), e.lanes = ho(e.lanes, a);
    }
    function AE() {
      if (se.current = cm, Kh) {
        for (var e = Wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Kh = !1;
      }
      $s = V, Wt = null, lr = null, or = null, xi = null, jo = -1, P = null, GE = !1, Tp = !1, bp = 0;
    }
    function $u() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? Wt.memoizedState = or = e : or = or.next = e, or;
    }
    function _i() {
      var e;
      if (lr === null) {
        var t = Wt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = lr.next;
      var a;
      if (or === null ? a = Wt.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, lr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        lr = e;
        var i = {
          memoizedState: lr.memoizedState,
          baseState: lr.baseState,
          baseQueue: lr.baseQueue,
          queue: lr.queue,
          next: null
        };
        or === null ? Wt.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function FE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = $u(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = qb.bind(null, Wt, s);
      return [i.memoizedState, f];
    }
    function Bg(e, t, a) {
      var i = _i(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = lr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, M = null, z = null, H = g;
        do {
          var fe = H.lane;
          if (yl($s, fe)) {
            if (z !== null) {
              var Te = {
                lane: yt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              z = z.next = Te;
            }
            if (H.hasEagerState)
              _ = H.eagerState;
            else {
              var St = H.action;
              _ = e(_, St);
            }
          } else {
            var Oe = {
              lane: fe,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            z === null ? (M = z = Oe, w = _) : z = z.next = Oe, Wt.lanes = et(Wt.lanes, fe), $p(fe);
          }
          H = H.next;
        } while (H !== null && H !== g);
        z === null ? w = _ : z.next = M, Se(_, i.memoizedState) || Lp(), i.memoizedState = _, i.baseState = w, i.baseQueue = z, l.lastRenderedState = _;
      }
      var pt = l.interleaved;
      if (pt !== null) {
        var k = pt;
        do {
          var j = k.lane;
          Wt.lanes = et(Wt.lanes, j), $p(j), k = k.next;
        } while (k !== pt);
      } else
        f === null && (l.lanes = V);
      var O = l.dispatch;
      return [i.memoizedState, O];
    }
    function $g(e, t, a) {
      var i = _i(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function g_(e, t, a) {
    }
    function S_(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = Wt, l = $u(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), wf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), wf = !0);
      } else {
        if (s = t(), !wf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(v, $s) || HE(i, t, s);
      }
      l.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return l.queue = y, nm(VE.bind(null, i, y, e), [e]), i.flags |= sn, wp(ir | Nr, jE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Zh(e, t, a) {
      var i = Wt, l = _i(), s = t();
      if (!wf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
      }
      var p = l.memoizedState, v = !Se(p, s);
      v && (l.memoizedState = s, Lp());
      var y = l.queue;
      if (_p(VE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || or !== null && or.memoizedState.tag & ir) {
        i.flags |= sn, wp(ir | Nr, jE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(g, $s) || HE(i, t, s);
      }
      return s;
    }
    function HE(e, t, a) {
      e.flags |= fs;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Wt.updateQueue;
      if (l === null)
        l = FE(), Wt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function jE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, PE(t) && BE(e);
    }
    function VE(e, t, a) {
      var i = function() {
        PE(t) && BE(e);
      };
      return a(i);
    }
    function PE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function BE(e) {
      var t = Ba(e, Ae);
      t !== null && dr(t, e, Ae, Zt);
    }
    function Jh(e) {
      var t = $u();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Vg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gb.bind(null, Wt, a);
      return [t.memoizedState, i];
    }
    function Ig(e) {
      return Bg(Vg);
    }
    function Qg(e) {
      return $g(Vg);
    }
    function wp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = Wt.updateQueue;
      if (s === null)
        s = FE(), Wt.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function Wg(e) {
      var t = $u();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function em(e) {
      var t = _i();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var l = $u(), s = i === void 0 ? null : i;
      Wt.flags |= e, l.memoizedState = wp(ir | t, a, void 0, s);
    }
    function tm(e, t, a, i) {
      var l = _i(), s = i === void 0 ? null : i, f = void 0;
      if (lr !== null) {
        var p = lr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            l.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Wt.flags |= e, l.memoizedState = wp(ir | t, a, f, s);
    }
    function nm(e, t) {
      return (Wt.mode & Ua) !== Me ? xp(ll | sn | wu, Nr, e, t) : xp(sn | wu, Nr, e, t);
    }
    function _p(e, t) {
      return tm(sn, Nr, e, t);
    }
    function qg(e, t) {
      return xp(Je, Bu, e, t);
    }
    function rm(e, t) {
      return tm(Je, Bu, e, t);
    }
    function Gg(e, t) {
      var a = Je;
      return a |= Kr, (Wt.mode & Ua) !== Me && (a |= Zr), xp(a, ur, e, t);
    }
    function am(e, t) {
      return tm(Je, ur, e, t);
    }
    function $E(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function Xg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Je;
      return l |= Kr, (Wt.mode & Ua) !== Me && (l |= Zr), xp(l, ur, $E.bind(null, t, e), i);
    }
    function im(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return tm(Je, ur, $E.bind(null, t, e), i);
    }
    function Ib(e, t) {
    }
    var um = Ib;
    function Kg(e, t) {
      var a = $u(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = _i(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (jg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = $u(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function om(e, t) {
      var a = _i(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (jg(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = $u();
      return t.memoizedState = e, e;
    }
    function YE(e) {
      var t = _i(), a = lr, i = a.memoizedState;
      return QE(t, i, e);
    }
    function IE(e) {
      var t = _i();
      if (lr === null)
        return t.memoizedState = e, e;
      var a = lr.memoizedState;
      return QE(t, a, e);
    }
    function QE(e, t, a) {
      var i = !iy($s);
      if (i) {
        if (!Se(a, t)) {
          var l = Dd();
          Wt.lanes = et(Wt.lanes, l), $p(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Qb(e, t, a) {
      var i = Fa();
      Vn(Sr(i, ar)), e(!0);
      var l = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), Rp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function e0() {
      var e = Jh(!1), t = e[0], a = e[1], i = Qb.bind(null, a), l = $u();
      return l.memoizedState = i, [t, i];
    }
    function WE() {
      var e = Ig(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = Qg(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    var GE = !1;
    function Wb() {
      return GE;
    }
    function t0() {
      var e = $u(), t = Dm(), a = t.identifierPrefix, i;
      if (Mr()) {
        var l = lb();
        i = ":" + a + "R" + l;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function sm() {
      var e = _i(), t = e.memoizedState;
      return t;
    }
    function qb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        KE(t, l);
      else {
        var s = vE(e, t, l, i);
        if (s !== null) {
          var f = Ra();
          dr(s, e, i, f), ZE(s, t, i);
        }
      }
      JE(e, i);
    }
    function Gb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        KE(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = eu;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (l.hasEagerState = !0, l.eagerState = y, Se(y, v)) {
                _b(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = vE(e, t, l, i);
        if (g !== null) {
          var _ = Ra();
          dr(g, e, i, _), ZE(g, t, i);
        }
      }
      JE(e, i);
    }
    function XE(e) {
      var t = e.alternate;
      return e === Wt || t !== null && t === Wt;
    }
    function KE(e, t) {
      Tp = Kh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ZE(e, t, a) {
      if (_d(a)) {
        var i = t.lanes;
        i = kd(i, e.pendingLanes);
        var l = et(i, a);
        t.lanes = l, mo(e, l);
      }
    }
    function JE(e, t, a) {
      Lu(e, t);
    }
    var cm = {
      readContext: Jn,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: Z
    }, e1 = null, t1 = null, n1 = null, r1 = null, Yu = null, eu = null, fm = null;
    {
      var n0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      e1 = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $t(), xf(t), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $t(), xf(t), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $t(), xf(a), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $t(), xf(t), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $t(), xf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $t(), xf(t);
          var a = se.current;
          se.current = Yu;
          try {
            return Zg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $t();
          var i = se.current;
          se.current = Yu;
          try {
            return Pg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $t(), Wg(e);
        },
        useState: function(e) {
          P = "useState", $t();
          var t = se.current;
          se.current = Yu;
          try {
            return Jh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $t(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", $t(), e0();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $t(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", $t(), t0();
        },
        unstable_isNewReconciler: Z
      }, t1 = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), Gg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = se.current;
          se.current = Yu;
          try {
            return Zg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = se.current;
          se.current = Yu;
          try {
            return Pg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), Wg(e);
        },
        useState: function(e) {
          P = "useState", re();
          var t = se.current;
          se.current = Yu;
          try {
            return Jh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), e0();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", re(), t0();
        },
        unstable_isNewReconciler: Z
      }, n1 = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), am(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = se.current;
          se.current = eu;
          try {
            return om(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = se.current;
          se.current = eu;
          try {
            return Bg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), em();
        },
        useState: function(e) {
          P = "useState", re();
          var t = se.current;
          se.current = eu;
          try {
            return Ig(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), YE(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Zh(e, t);
        },
        useId: function() {
          return P = "useId", re(), sm();
        },
        unstable_isNewReconciler: Z
      }, r1 = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), am(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = se.current;
          se.current = fm;
          try {
            return om(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = se.current;
          se.current = fm;
          try {
            return $g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), em();
        },
        useState: function(e) {
          P = "useState", re();
          var t = se.current;
          se.current = fm;
          try {
            return Qg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), IE(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Zh(e, t);
        },
        useId: function() {
          return P = "useId", re(), sm();
        },
        unstable_isNewReconciler: Z
      }, Yu = {
        readContext: function(e) {
          return n0(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), $t(), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), $t(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), $t(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), $t(), qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), $t(), Gg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), $t();
          var a = se.current;
          se.current = Yu;
          try {
            return Zg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), $t();
          var i = se.current;
          se.current = Yu;
          try {
            return Pg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), $t(), Wg(e);
        },
        useState: function(e) {
          P = "useState", Ie(), $t();
          var t = se.current;
          se.current = Yu;
          try {
            return Jh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), $t(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), $t(), e0();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), $t(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ie(), $t(), t0();
        },
        unstable_isNewReconciler: Z
      }, eu = {
        readContext: function(e) {
          return n0(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), re(), am(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), re();
          var a = se.current;
          se.current = eu;
          try {
            return om(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), re();
          var i = se.current;
          se.current = eu;
          try {
            return Bg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), re(), em();
        },
        useState: function(e) {
          P = "useState", Ie(), re();
          var t = se.current;
          se.current = eu;
          try {
            return Ig(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), re(), YE(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), re(), Zh(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), re(), sm();
        },
        unstable_isNewReconciler: Z
      }, fm = {
        readContext: function(e) {
          return n0(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), re(), am(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), re();
          var a = se.current;
          se.current = eu;
          try {
            return om(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), re();
          var i = se.current;
          se.current = eu;
          try {
            return $g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), re(), em();
        },
        useState: function(e) {
          P = "useState", Ie(), re();
          var t = se.current;
          se.current = eu;
          try {
            return Qg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), re(), IE(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), re(), Zh(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), re(), sm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Vo = G.unstable_now, a1 = 0, dm = -1, Dp = -1, pm = -1, r0 = !1, vm = !1;
    function i1() {
      return r0;
    }
    function Xb() {
      vm = !0;
    }
    function Kb() {
      r0 = !1, vm = !1;
    }
    function Zb() {
      r0 = vm, vm = !1;
    }
    function u1() {
      return a1;
    }
    function l1() {
      a1 = Vo();
    }
    function a0(e) {
      Dp = Vo(), e.actualStartTime < 0 && (e.actualStartTime = Vo());
    }
    function o1(e) {
      Dp = -1;
    }
    function hm(e, t) {
      if (Dp >= 0) {
        var a = Vo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Iu(e) {
      if (dm >= 0) {
        var t = Vo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function i0(e) {
      if (pm >= 0) {
        var t = Vo() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Qu() {
      dm = Vo();
    }
    function u0() {
      pm = Vo();
    }
    function l0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ys(e, t) {
      return {
        value: e,
        source: t,
        stack: Ql(t),
        digest: null
      };
    }
    function o0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function Jb(e, t) {
      return !0;
    }
    function s0(e, t) {
      try {
        var a = Jb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = l ? Ye(l) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function s1(e, t, a) {
      var i = Nl(Zt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Qx(l), s0(e, t);
      }, i;
    }
    function c0(e, t, a) {
      var i = Nl(Zt, a);
      i.tag = sg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          EC(e), s0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        EC(e), s0(e, t), typeof l != "function" && Yx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof l != "function" && (ra(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function c1(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new ew(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Wx.bind(null, e, t, a);
        rr && Yp(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Me && (a === ve || a === We || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function f1(e) {
      var t = e;
      do {
        if (t.tag === xe && Vb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function d1(e, t, a, i, l) {
      if ((e.mode & ot) === Me) {
        if (e === t)
          e.flags |= qn;
        else {
          if (e.flags |= Pe, a.flags |= ds, a.flags &= ~(dc | va), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = wn;
            else {
              var f = Nl(Zt, Ae);
              f.tag = jh, Ao(a, f, Ae);
            }
          }
          a.lanes = et(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= qn, e.lanes = l, e;
    }
    function rw(e, t, a, i, l) {
      if (a.flags |= va, rr && Yp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), Mr() && a.mode & ot && nE();
        var f = f1(t);
        if (f !== null) {
          f.flags &= ~Rn, d1(f, t, a, e, l), f.mode & ot && c1(e, s, l), tw(f, e, s);
          return;
        } else {
          if (!vo(l)) {
            c1(e, s, l), $0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mr() && a.mode & ot) {
        nE();
        var v = f1(t);
        if (v !== null) {
          (v.flags & qn) === De && (v.flags |= Rn), d1(v, t, a, e, l), ng(Ys(i, a));
          return;
        }
      }
      i = Ys(i, a), Ax(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= qn;
            var _ = jn(l);
            y.lanes = et(y.lanes, _);
            var w = s1(y, g, _);
            dg(y, w);
            return;
          }
          case pe:
            var M = i, z = y.type, H = y.stateNode;
            if ((y.flags & Pe) === De && (typeof z.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !fC(H))) {
              y.flags |= qn;
              var fe = jn(l);
              y.lanes = et(y.lanes, fe);
              var Oe = c0(y, M, fe);
              dg(y, Oe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function aw() {
      return null;
    }
    var kp = A.ReactCurrentOwner, tu = !1, f0, Op, d0, p0, v0, Is, h0, mm;
    f0 = {}, Op = {}, d0 = {}, p0 = {}, v0 = {}, Is = !1, h0 = {}, mm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = OE(t, null, a, i) : t.child = Cf(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = Cf(t, e.child, null, i), t.child = Cf(t, null, a, i);
    }
    function p1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          "prop",
          bt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Ef(t, l), Ou(t);
      {
        if (kp.current = t, qr(!0), v = _f(e, t, f, i, p, l), y = Df(), t.mode & yn) {
          Hn(!0);
          try {
            v = _f(e, t, f, i, p, l), y = Df();
          } finally {
            Hn(!1);
          }
        }
        qr(!1);
      }
      return ol(), e !== null && !tu ? (UE(e, t, l), zl(e, t, l)) : (Mr() && y && Xy(t), t.flags |= Tu, Ea(e, t, v, l), t.child);
    }
    function v1(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (c4(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = Af(s), t.tag = He, t.type = f, g0(t, s), h1(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          p && Gi(
            p,
            i,
            "prop",
            bt(s)
          );
        }
        var v = eS(a.type, null, i, t, t.mode, l);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Gi(
          g,
          i,
          "prop",
          bt(y)
        );
      }
      var _ = e.child, w = b0(e, l);
      if (!w) {
        var M = _.memoizedProps, z = a.compare;
        if (z = z !== null ? z : _e, z(M, i) && e.ref === t.ref)
          return zl(e, t, l);
      }
      t.flags |= Tu;
      var H = Xs(_, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function h1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Gi(
            y,
            i,
            "prop",
            bt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (_e(g, i) && e.ref === t.ref && t.type === e.type)
          if (tu = !1, t.pendingProps = i = g, b0(e, l))
            (e.flags & ds) !== De && (tu = !0);
          else
            return t.lanes = e.lanes, zl(e, t, l);
      }
      return m0(e, t, a, i, l);
    }
    function m1(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ot) === Me) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (ra(a, na)) {
          var _ = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          km(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = et(s.baseLanes, a), t.memoizedState = null) : M = a, km(t, M);
      }
      return Ea(e, t, l, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= Je;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ea(e, t, s, a), t.child;
    }
    function y1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= dd);
    }
    function m0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          "prop",
          bt(a)
        );
      }
      var f;
      {
        var p = vf(t, a, !0);
        f = hf(t, p);
      }
      var v, y;
      Ef(t, l), Ou(t);
      {
        if (kp.current = t, qr(!0), v = _f(e, t, a, i, f, l), y = Df(), t.mode & yn) {
          Hn(!0);
          try {
            v = _f(e, t, a, i, f, l), y = Df();
          } finally {
            Hn(!1);
          }
        }
        qr(!1);
      }
      return ol(), e !== null && !tu ? (UE(e, t, l), zl(e, t, l)) : (Mr() && y && Xy(t), t.flags |= Tu, Ea(e, t, v, l), t.child);
    }
    function g1(e, t, a, i, l) {
      {
        switch (w4(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Pe, t.flags |= qn;
            var y = new Error("Simulated error coming from DevTools"), g = jn(l);
            t.lanes = et(t.lanes, g);
            var _ = c0(t, Ys(y, t), g);
            dg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Gi(
            w,
            i,
            "prop",
            bt(a)
          );
        }
      }
      var M;
      Pu(a) ? (M = !0, Dh(t)) : M = !1, Ef(t, l);
      var z = t.stateNode, H;
      z === null ? (gm(e, t), wE(t, a, i), bg(t, a, i, l), H = !0) : e === null ? H = zb(t, a, i, l) : H = Ub(e, t, a, i, l);
      var fe = y0(e, t, a, H, M, l);
      {
        var Oe = t.stateNode;
        H && Oe.props !== i && (Is || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Is = !0);
      }
      return fe;
    }
    function y0(e, t, a, i, l, s) {
      y1(e, t);
      var f = (t.flags & Pe) !== De;
      if (!i && !f)
        return l && ZS(t, a, !1), zl(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, o1();
      else {
        Ou(t);
        {
          if (qr(!0), v = p.render(), t.mode & yn) {
            Hn(!0);
            try {
              p.render();
            } finally {
              Hn(!1);
            }
          }
          qr(!1);
        }
        ol();
      }
      return t.flags |= Tu, e !== null && f ? iw(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, l && ZS(t, a, !0), t.child;
    }
    function S1(e) {
      var t = e.stateNode;
      t.pendingContext ? XS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XS(e, t.context, !1), Og(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (S1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      yE(e, t), $h(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Ys(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return E1(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Ys(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return E1(e, t, p, a, _);
        } else {
          pb(t);
          var w = OE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~rn | Ma, M = M.sibling;
        }
      } else {
        if (gf(), p === s)
          return zl(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function E1(e, t, a, i, l) {
      return gf(), ng(l), t.flags |= Rn, Ea(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      ME(t), e === null && tg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = Ay(i, l);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= Bt), y1(e, t), Ea(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && tg(t), null;
    }
    function dw(e, t, a, i) {
      gm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f4(v), g = Zi(v, l), _;
      switch (y) {
        case ve:
          return g0(t, v), t.type = v = Af(v), _ = m0(null, t, v, g, i), _;
        case pe:
          return t.type = v = q0(v), _ = g1(null, t, v, g, i), _;
        case We:
          return t.type = v = G0(v), _ = p1(null, t, v, g, i), _;
        case it: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Gi(
              w,
              g,
              "prop",
              bt(v)
            );
          }
          return _ = v1(
            null,
            t,
            v,
            Zi(v.type, g),
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ke && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function pw(e, t, a, i, l) {
      gm(e, t), t.tag = pe;
      var s;
      return Pu(a) ? (s = !0, Dh(t)) : s = !1, Ef(t, l), wE(t, a, i), bg(t, a, i, l), y0(null, t, a, !0, s, l);
    }
    function vw(e, t, a, i) {
      gm(e, t);
      var l = t.pendingProps, s;
      {
        var f = vf(t, a, !1);
        s = hf(t, f);
      }
      Ef(t, i);
      var p, v;
      Ou(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = bt(a) || "Unknown";
          f0[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), f0[y] = !0);
        }
        t.mode & yn && Ki.recordLegacyContextWarning(t, null), qr(!0), kp.current = t, p = _f(null, t, a, l, s, i), v = Df(), qr(!1);
      }
      if (ol(), t.flags |= Tu, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = bt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var _ = bt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Pu(a) ? (w = !0, Dh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), bE(t, p), bg(t, a, l, i), y0(null, t, a, !0, w, i);
      } else {
        if (t.tag = ve, t.mode & yn) {
          Hn(!0);
          try {
            p = _f(null, t, a, l, s, i), v = Df();
          } finally {
            Hn(!1);
          }
        }
        return Mr() && v && Xy(t), Ea(null, t, p, i), g0(t, a), t.child;
      }
    }
    function g0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), v0[l] || (v0[l] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = bt(t) || "Unknown";
          p0[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), p0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = bt(t) || "Unknown";
          d0[p] || (S("%s: Function components do not support contextType.", p), d0[p] = !0);
        }
      }
    }
    var S0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: yt
    };
    function E0(e) {
      return {
        baseLanes: e,
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Ng(e, Cp);
    }
    function yw(e, t) {
      return ho(e.childLanes, t);
    }
    function C1(e, t, a) {
      var i = t.pendingProps;
      x4(t) && (t.flags |= Pe);
      var l = Ji.current, s = !1, f = (t.flags & Pe) !== De;
      if (f || mw(l, e) ? (s = !0, t.flags &= ~Pe) : (e === null || e.memoizedState !== null) && (l = jb(l, zE)), l = Tf(l), Ho(t, l), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = gw(t, y, g, a), w = t.child;
          return w.memoizedState = E0(a), t.memoizedState = S0, _;
        } else
          return C0(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var z = M.dehydrated;
          if (z !== null)
            return Tw(e, t, f, i, z, M, a);
        }
        if (s) {
          var H = i.fallback, fe = i.children, Oe = Ew(e, t, fe, H, a), Te = t.child, St = e.child.memoizedState;
          return Te.memoizedState = St === null ? E0(a) : hw(St, a), Te.childLanes = yw(e, a), t.memoizedState = S0, Oe;
        } else {
          var pt = i.children, k = Sw(e, t, pt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function C0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = R0(l, i);
      return s.return = e, e.child = s, s;
    }
    function gw(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (l & ot) === Me && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & ze && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, l, i, null)) : (p = R0(f, l), v = Qo(a, l, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function R0(e, t, a) {
      return RC(e, t, V, null);
    }
    function R1(e, t) {
      return Xs(e, t);
    }
    function Sw(e, t, a, i) {
      var l = e.child, s = l.sibling, f = R1(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Nt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ew(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if ((s & ot) === Me && t.child !== f) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & ze && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = R1(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var _;
      return p !== null ? _ = Xs(p, i) : (_ = Qo(i, s, l, null), _.flags |= rn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function ym(e, t, a, i) {
      i !== null && ng(i), Cf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = C0(t, s);
      return f.flags |= rn, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = R0(f, s), v = Qo(i, s, l, null);
      return v.flags |= rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== Me && Cf(t, e.child, null, l), v;
    }
    function Rw(e, t, a) {
      return (e.mode & ot) === Me ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Vy(t) ? e.lanes = fl : e.lanes = na, null;
    }
    function Tw(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var k = o0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Pe, null;
          var j = i.children, O = i.fallback, q = Cw(e, t, j, O, f), de = t.child;
          return de.memoizedState = E0(f), t.memoizedState = S0, q;
        }
      else {
        if (fb(), (t.mode & ot) === Me)
          return ym(
            e,
            t,
            f,
            null
          );
        if (Vy(l)) {
          var p, v, y;
          {
            var g = DT(l);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = o0(_, p, y);
          return ym(e, t, f, w);
        }
        var M = ra(f, e.childLanes);
        if (tu || M) {
          var z = Dm();
          if (z !== null) {
            var H = ly(z, f);
            if (H !== yt && H !== s.retryLane) {
              s.retryLane = H;
              var fe = Zt;
              Ba(e, H), dr(z, e, H, fe);
            }
          }
          $0();
          var Oe = o0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, Oe);
        } else if (YS(l)) {
          t.flags |= Pe, t.child = e.child;
          var Te = qx.bind(null, e);
          return kT(l, Te), null;
        } else {
          vb(t, l, s.treeContext);
          var St = i.children, pt = C0(t, St);
          return pt.flags |= Ma, pt;
        }
      }
    }
    function T1(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), lg(e.return, t, a);
    }
    function bw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === xe) {
          var l = i.memoizedState;
          l !== null && T1(i, a, e);
        } else if (i.tag === Dt)
          T1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Xh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !h0[e])
        if (h0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _w(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function b1(e, t) {
      {
        var a = vt(e), i = !a && typeof Ga(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!b1(e[a], a))
              return;
        } else {
          var i = Ga(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!b1(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function T0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function w1(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      xw(l), _w(s, l), Dw(f, l), Ea(e, t, f, a);
      var p = Ji.current, v = Ng(p, Cp);
      if (v)
        p = zg(p, Cp), t.flags |= Pe;
      else {
        var y = e !== null && (e.flags & Pe) !== De;
        y && bw(t, t.child, a), p = Tf(p);
      }
      if (Ho(t, p), (t.mode & ot) === Me)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var g = ww(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), T0(
              t,
              !1,
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var z = M.alternate;
              if (z !== null && Xh(z) === null) {
                t.child = M;
                break;
              }
              var H = M.sibling;
              M.sibling = w, w = M, M = H;
            }
            T0(
              t,
              !0,
              w,
              null,
              s
            );
            break;
          }
          case "together": {
            T0(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kw(e, t, a) {
      Og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var x1 = !1;
    function Ow(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || x1 || (x1 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (pE(t, l, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !xh())
            return zl(e, t, a);
        } else
          bb(t, l, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var _1 = !1;
    function Lw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_1 || (_1 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ef(t, a);
      var f = Jn(i);
      Ou(t);
      var p;
      return kp.current = t, qr(!0), p = s(f), qr(!1), ol(), t.flags |= Tu, Ea(e, t, p, a), t.child;
    }
    function Lp() {
      tu = !0;
    }
    function gm(e, t) {
      (t.mode & ot) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= rn);
    }
    function zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), o1(), $p(t.lanes), ra(a, t.childLanes) ? (Ab(e, t), t.child) : null;
    }
    function Mw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Nt) : s.push(e), a.flags |= rn, a;
      }
    }
    function b0(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function Nw(e, t, a) {
      switch (t.tag) {
        case te:
          S1(t), t.stateNode, gf();
          break;
        case ie:
          ME(t);
          break;
        case pe: {
          var i = t.type;
          Pu(i) && Dh(t);
          break;
        }
        case me:
          Og(t, t.stateNode.containerInfo);
          break;
        case at: {
          var l = t.memoizedProps.value, s = t.type._context;
          pE(t, s, l);
          break;
        }
        case ct:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Je);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case xe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ho(t, Tf(Ji.current)), t.flags |= Pe, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return C1(e, t, a);
            Ho(t, Tf(Ji.current));
            var _ = zl(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ho(t, Tf(Ji.current));
          break;
        }
        case Dt: {
          var w = (e.flags & Pe) !== De, M = ra(a, t.childLanes);
          if (w) {
            if (M)
              return w1(e, t, a);
            t.flags |= Pe;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Ho(t, Ji.current), M)
            break;
          return null;
        }
        case Ue:
        case Ke:
          return t.lanes = V, m1(e, t, a);
      }
      return zl(e, t, a);
    }
    function D1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mw(e, t, eS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || xh() || t.type !== e.type)
          tu = !0;
        else {
          var s = b0(e, a);
          if (!s && (t.flags & Pe) === De)
            return tu = !1, Nw(e, t, a);
          (e.flags & ds) !== De ? tu = !0 : tu = !1;
        }
      } else if (tu = !1, Mr() && ib(t)) {
        var f = t.index, p = ub();
        tE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case Qe:
          return vw(e, t, t.type, a);
        case nn: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case ve: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : Zi(y, g);
          return m0(e, t, y, _, a);
        }
        case pe: {
          var w = t.type, M = t.pendingProps, z = t.elementType === w ? M : Zi(w, M);
          return g1(e, t, w, z, a);
        }
        case te:
          return sw(e, t, a);
        case ie:
          return cw(e, t, a);
        case Ve:
          return fw(e, t);
        case xe:
          return C1(e, t, a);
        case me:
          return kw(e, t, a);
        case We: {
          var H = t.type, fe = t.pendingProps, Oe = t.elementType === H ? fe : Zi(H, fe);
          return p1(e, t, H, Oe, a);
        }
        case Ct:
          return uw(e, t, a);
        case st:
          return lw(e, t, a);
        case ct:
          return ow(e, t, a);
        case at:
          return Ow(e, t, a);
        case fn:
          return Lw(e, t, a);
        case it: {
          var Te = t.type, St = t.pendingProps, pt = Zi(Te, St);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && Gi(
              k,
              pt,
              "prop",
              bt(Te)
            );
          }
          return pt = Zi(Te.type, pt), v1(e, t, Te, pt, a);
        }
        case He:
          return h1(e, t, t.type, t.pendingProps, a);
        case wn: {
          var j = t.type, O = t.pendingProps, q = t.elementType === j ? O : Zi(j, O);
          return pw(e, t, j, q, a);
        }
        case Dt:
          return w1(e, t, a);
        case En:
          break;
        case Ue:
          return m1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kf(e) {
      e.flags |= Je;
    }
    function k1(e) {
      e.flags |= Xr, e.flags |= dd;
    }
    var O1, w0, L1, M1;
    O1 = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === ie || l.tag === Ve)
          nT(e, l.stateNode);
        else if (l.tag !== me) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, w0 = function(e, t) {
    }, L1 = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = aT(f, a, s, i, l, p);
        t.updateQueue = v, v && kf(t);
      }
    }, M1 = function(e, t, a, i) {
      a !== i && kf(t);
    };
    function Mp(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = De;
      if (t) {
        if ((e.mode & ze) !== Me) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ze) !== Me) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (Sb() && (t.mode & ot) !== Me && (t.flags & Pe) === De)
        return oE(t), gf(), t.flags |= Rn | va | qn, !1;
      var i = Nh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yb(t), zr(t), (t.mode & ze) !== Me) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (gf(), (t.flags & Pe) === De && (t.memoizedState = null), t.flags |= Je, zr(t), (t.mode & ze) !== Me) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sE(), !0;
    }
    function N1(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Qe:
        case nn:
        case He:
        case ve:
        case We:
        case Ct:
        case st:
        case ct:
        case fn:
        case it:
          return zr(t), null;
        case pe: {
          var l = t.type;
          return Pu(l) && _h(t), zr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Rf(t), Wy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Nh(t);
            if (f)
              kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & Rn) !== De) && (t.flags |= La, sE());
            }
          }
          return w0(e, t), zr(t), null;
        }
        case ie: {
          Mg(t);
          var v = LE(), y = t.type;
          if (e !== null && t.stateNode != null)
            L1(e, t, y, i, v), e.ref !== t.ref && k1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = Lg(), _ = Nh(t);
            if (_)
              hb(t, v, g) && kf(t);
            else {
              var w = tT(y, i, v, g, t);
              O1(w, t, !1, !1), t.stateNode = w, rT(w, y, i, v) && kf(t);
            }
            t.ref !== null && k1(t);
          }
          return zr(t), null;
        }
        case Ve: {
          var M = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            M1(e, t, z, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = LE(), fe = Lg(), Oe = Nh(t);
            Oe ? mb(t) && kf(t) : t.stateNode = iT(M, H, fe, t);
          }
          return zr(t), null;
        }
        case xe: {
          bf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var St = zw(e, t, Te);
            if (!St)
              return t.flags & qn ? t : null;
          }
          if ((t.flags & Pe) !== De)
            return t.lanes = a, (t.mode & ze) !== Me && l0(t), t;
          var pt = Te !== null, k = e !== null && e.memoizedState !== null;
          if (pt !== k && pt) {
            var j = t.child;
            if (j.flags |= bu, (t.mode & ot) !== Me) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              O || Ng(Ji.current, zE) ? Ux() : $0();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Je), zr(t), (t.mode & ze) !== Me && pt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Rf(t), w0(e, t), e === null && ZT(t.stateNode.containerInfo), zr(t), null;
        case at:
          var le = t.type._context;
          return ug(le, t), zr(t), null;
        case wn: {
          var je = t.type;
          return Pu(je) && _h(t), zr(t), null;
        }
        case Dt: {
          bf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return zr(t), null;
          var qt = (t.flags & Pe) !== De, Ot = qe.rendering;
          if (Ot === null)
            if (qt)
              Mp(qe, !1);
            else {
              var $n = Fx() && (e === null || (e.flags & Pe) === De);
              if (!$n)
                for (var Lt = t.child; Lt !== null; ) {
                  var Un = Xh(Lt);
                  if (Un !== null) {
                    qt = !0, t.flags |= Pe, Mp(qe, !1);
                    var la = Un.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Je), t.subtreeFlags = De, Fb(t, a), Ho(t, zg(Ji.current, Cp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              qe.tail !== null && mn() > eC() && (t.flags |= Pe, qt = !0, Mp(qe, !1), t.lanes = wd);
            }
          else {
            if (!qt) {
              var jr = Xh(Ot);
              if (jr !== null) {
                t.flags |= Pe, qt = !0;
                var ui = jr.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= Je), Mp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Ot.alternate && !Mr())
                  return zr(t), null;
              } else
                mn() * 2 - qe.renderingStartTime > eC() && a !== na && (t.flags |= Pe, qt = !0, Mp(qe, !1), t.lanes = wd);
            }
            if (qe.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var Ta = qe.last;
              Ta !== null ? Ta.sibling = Ot : t.child = Ot, qe.last = Ot;
            }
          }
          if (qe.tail !== null) {
            var ba = qe.tail;
            qe.rendering = ba, qe.tail = ba.sibling, qe.renderingStartTime = mn(), ba.sibling = null;
            var oa = Ji.current;
            return qt ? oa = zg(oa, Cp) : oa = Tf(oa), Ho(t, oa), ba;
          }
          return zr(t), null;
        }
        case En:
          break;
        case Ue:
        case Ke: {
          B0(t);
          var jl = t.memoizedState, Ff = jl !== null;
          if (e !== null) {
            var qp = e.memoizedState, Gu = qp !== null;
            Gu !== Ff && !T && (t.flags |= bu);
          }
          return !Ff || (t.mode & ot) === Me ? zr(t) : ra(qu, na) && (zr(t), t.subtreeFlags & (rn | Je) && (t.flags |= bu)), null;
        }
        case At:
          return null;
        case Rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Ky(t), t.tag) {
        case pe: {
          var i = t.type;
          Pu(i) && _h(t);
          var l = t.flags;
          return l & qn ? (t.flags = l & ~qn | Pe, (t.mode & ze) !== Me && l0(t), t) : null;
        }
        case te: {
          t.stateNode, Rf(t), Wy(t), Ag();
          var s = t.flags;
          return (s & qn) !== De && (s & Pe) === De ? (t.flags = s & ~qn | Pe, t) : null;
        }
        case ie:
          return Mg(t), null;
        case xe: {
          bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            gf();
          }
          var p = t.flags;
          return p & qn ? (t.flags = p & ~qn | Pe, (t.mode & ze) !== Me && l0(t), t) : null;
        }
        case Dt:
          return bf(t), null;
        case me:
          return Rf(t), null;
        case at:
          var v = t.type._context;
          return ug(v, t), null;
        case Ue:
        case Ke:
          return B0(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function z1(e, t, a) {
      switch (Ky(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case te: {
          t.stateNode, Rf(t), Wy(t), Ag();
          break;
        }
        case ie: {
          Mg(t);
          break;
        }
        case me:
          Rf(t);
          break;
        case xe:
          bf(t);
          break;
        case Dt:
          bf(t);
          break;
        case at:
          var l = t.type._context;
          ug(l, t);
          break;
        case Ue:
        case Ke:
          B0(t);
          break;
      }
    }
    var U1 = null;
    U1 = /* @__PURE__ */ new Set();
    var Sm = !1, Ur = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Of = null, Lf = null;
    function Fw(e) {
      ul(null, function() {
        throw e;
      }), cd();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ze)
        try {
          Qu(), t.componentWillUnmount();
        } finally {
          Iu(e);
        }
      else
        t.componentWillUnmount();
    };
    function A1(e, t) {
      try {
        Po(ur, e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function x0(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function jw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function F1(e, t) {
      try {
        j1(e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function Mf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (tt && ft && e.mode & ze)
              try {
                Qu(), i = a(null);
              } finally {
                Iu(e);
              }
            else
              i = a(null);
          } catch (l) {
            on(e, t, l);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        on(e, t, i);
      }
    }
    var H1 = !1;
    function Vw(e, t) {
      JR(e.containerInfo), Ee = t, Pw();
      var a = H1;
      return H1 = !1, a;
    }
    function Pw() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & uo) !== De && t !== null ? (t.return = e, Ee = t) : Bw();
      }
    }
    function Bw() {
      for (; Ee !== null; ) {
        var e = Ee;
        Pt(e);
        try {
          $w(e);
        } catch (a) {
          on(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function $w(e) {
      var t = e.alternate, a = e.flags;
      if ((a & La) !== De) {
        switch (Pt(e), e.tag) {
          case ve:
          case We:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Is && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Zi(e.type, i), l);
              {
                var p = U1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              bT(v.containerInfo);
            }
            break;
          }
          case ie:
          case Ve:
          case me:
          case wn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function nu(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== $a ? Ec(t) : (e & ur) !== $a && Cc(t), (e & Bu) !== $a && Ip(!0), Em(t, a, p), (e & Bu) !== $a && Ip(!1), (e & Nr) !== $a ? Mv() : (e & ur) !== $a && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Po(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== $a ? Lv(t) : (e & ur) !== $a && Nv(t);
            var f = s.create;
            (e & Bu) !== $a && Ip(!0), s.destroy = f(), (e & Bu) !== $a && Ip(!1), (e & Nr) !== $a ? Rd() : (e & ur) !== $a && zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== De ? v = "useLayoutEffect" : (s.tag & Bu) !== De ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function Yw(e, t) {
      if ((t.flags & Je) !== De)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = u1(), p = t.alternate === null ? "mount" : "update";
            i1() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ct:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Iw(e, t, a, i) {
      if ((a.flags & yr) !== De)
        switch (a.tag) {
          case ve:
          case We:
          case He: {
            if (!Ur)
              if (a.mode & ze)
                try {
                  Qu(), Po(ur | ir, a);
                } finally {
                  Iu(a);
                }
              else
                Po(ur | ir, a);
            break;
          }
          case pe: {
            var l = a.stateNode;
            if (a.flags & Je && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Is && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    Qu(), l.componentDidMount();
                  } finally {
                    Iu(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Zi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Is && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    Qu(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Iu(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Is && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), SE(a, p, l));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              SE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Je) {
              var _ = a.type, w = a.memoizedProps;
              cT(g, _, w);
            }
            break;
          }
          case Ve:
            break;
          case me:
            break;
          case ct: {
            {
              var M = a.memoizedProps, z = M.onCommit, H = M.onRender, fe = a.stateNode.effectDuration, Oe = u1(), Te = t === null ? "mount" : "update";
              i1() && (Te = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Oe);
              {
                typeof z == "function" && z(a.memoizedProps.id, Te, fe, Oe), Bx(a);
                var St = a.return;
                e:
                  for (; St !== null; ) {
                    switch (St.tag) {
                      case te:
                        var pt = St.stateNode;
                        pt.effectDuration += fe;
                        break e;
                      case ct:
                        var k = St.stateNode;
                        k.effectDuration += fe;
                        break e;
                    }
                    St = St.return;
                  }
              }
            }
            break;
          }
          case xe: {
            Jw(e, a);
            break;
          }
          case Dt:
          case wn:
          case En:
          case Ue:
          case Ke:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & Xr && j1(a);
    }
    function Qw(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          if (e.mode & ze)
            try {
              Qu(), A1(e, e.return);
            } finally {
              Iu(e);
            }
          else
            A1(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jw(e, e.return, t), F1(e, e.return);
          break;
        }
        case ie: {
          F1(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? ET(l) : RT(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CT(s) : TT(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === Ke) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function j1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & ze)
            try {
              Qu(), l = t(i);
            } finally {
              Iu(e);
            }
          else
            l = t(i);
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function V1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, V1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && tb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gw(e) {
      for (var t = e.return; t !== null; ) {
        if (P1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function P1(e) {
      return e.tag === ie || e.tag === te || e.tag === me;
    }
    function B1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || P1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Ve && t.tag !== Qt; ) {
            if (t.flags & rn || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & rn))
            return t.stateNode;
        }
    }
    function Xw(e) {
      var t = Gw(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & Bt && ($S(a), t.flags &= ~Bt);
          var i = B1(e);
          D0(e, i, a);
          break;
        }
        case te:
        case me: {
          var l = t.stateNode.containerInfo, s = B1(e);
          _0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _0(e, t, a) {
      var i = e.tag, l = i === ie || i === Ve;
      if (l) {
        var s = e.stateNode;
        t ? mT(a, s, t) : vT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          _0(f, t, a);
          for (var p = f.sibling; p !== null; )
            _0(p, t, a), p = p.sibling;
        }
      }
    }
    function D0(e, t, a) {
      var i = e.tag, l = i === ie || i === Ve;
      if (l) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          D0(f, t, a);
          for (var p = f.sibling; p !== null; )
            D0(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, ru = !1;
    function Kw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                Ar = i.stateNode, ru = !1;
                break e;
              }
              case te: {
                Ar = i.stateNode.containerInfo, ru = !0;
                break e;
              }
              case me: {
                Ar = i.stateNode.containerInfo, ru = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $1(e, t, a), Ar = null, ru = !1;
      }
      qw(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        $1(e, t, i), i = i.sibling;
    }
    function $1(e, t, a) {
      switch (Ed(a), a.tag) {
        case ie:
          Ur || Mf(a, t);
        case Ve: {
          {
            var i = Ar, l = ru;
            Ar = null, Bo(e, t, a), Ar = i, ru = l, Ar !== null && (ru ? gT(Ar, a.stateNode) : yT(Ar, a.stateNode));
          }
          return;
        }
        case Qt: {
          Ar !== null && (ru ? ST(Ar, a.stateNode) : jy(Ar, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Ar, f = ru;
            Ar = a.stateNode.containerInfo, ru = !0, Bo(e, t, a), Ar = s, ru = f;
          }
          return;
        }
        case ve:
        case We:
        case it:
        case He: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, M = _.tag;
                  w !== void 0 && ((M & Bu) !== $a ? Em(a, t, w) : (M & ur) !== $a && (Cc(a), a.mode & ze ? (Qu(), Em(a, t, w), Iu(a)) : Em(a, t, w), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case pe: {
          if (!Ur) {
            Mf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && x0(a, t, z);
          }
          Bo(e, t, a);
          return;
        }
        case En: {
          Bo(e, t, a);
          return;
        }
        case Ue: {
          if (a.mode & ot) {
            var H = Ur;
            Ur = H || a.memoizedState !== null, Bo(e, t, a), Ur = H;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function Zw(e) {
      e.memoizedState;
    }
    function Jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && HT(s);
          }
        }
      }
    }
    function Y1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Aw()), t.forEach(function(i) {
          var l = Gx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (Of !== null && Lf !== null)
                Yp(Lf, Of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function ex(e, t, a) {
      Of = a, Lf = e, Pt(t), I1(t, e), Pt(t), Of = null, Lf = null;
    }
    function au(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            Kw(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = Zs();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Pt(p), I1(p, e), p = p.sibling;
      Pt(f);
    }
    function I1(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case ve:
        case We:
        case it:
        case He: {
          if (au(t, e), Wu(e), l & Je) {
            try {
              nu(Bu | ir, e, e.return), Po(Bu | ir, e);
            } catch (je) {
              on(e, e.return, je);
            }
            if (e.mode & ze) {
              try {
                Qu(), nu(ur | ir, e, e.return);
              } catch (je) {
                on(e, e.return, je);
              }
              Iu(e);
            } else
              try {
                nu(ur | ir, e, e.return);
              } catch (je) {
                on(e, e.return, je);
              }
          }
          return;
        }
        case pe: {
          au(t, e), Wu(e), l & Xr && i !== null && Mf(i, i.return);
          return;
        }
        case ie: {
          au(t, e), Wu(e), l & Xr && i !== null && Mf(i, i.return);
          {
            if (e.flags & Bt) {
              var s = e.stateNode;
              try {
                $S(s);
              } catch (je) {
                on(e, e.return, je);
              }
            }
            if (l & Je) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fT(f, g, y, v, p, e);
                  } catch (je) {
                    on(e, e.return, je);
                  }
              }
            }
          }
          return;
        }
        case Ve: {
          if (au(t, e), Wu(e), l & Je) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              dT(_, M, w);
            } catch (je) {
              on(e, e.return, je);
            }
          }
          return;
        }
        case te: {
          if (au(t, e), Wu(e), l & Je && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                FT(t.containerInfo);
              } catch (je) {
                on(e, e.return, je);
              }
          }
          return;
        }
        case me: {
          au(t, e), Wu(e);
          return;
        }
        case xe: {
          au(t, e), Wu(e);
          var H = e.child;
          if (H.flags & bu) {
            var fe = H.stateNode, Oe = H.memoizedState, Te = Oe !== null;
            if (fe.isHidden = Te, Te) {
              var St = H.alternate !== null && H.alternate.memoizedState !== null;
              St || zx();
            }
          }
          if (l & Je) {
            try {
              Zw(e);
            } catch (je) {
              on(e, e.return, je);
            }
            Y1(e);
          }
          return;
        }
        case Ue: {
          var pt = i !== null && i.memoizedState !== null;
          if (e.mode & ot) {
            var k = Ur;
            Ur = k || pt, au(t, e), Ur = k;
          } else
            au(t, e);
          if (Wu(e), l & bu) {
            var j = e.stateNode, O = e.memoizedState, q = O !== null, de = e;
            if (j.isHidden = q, q && !pt && (de.mode & ot) !== Me) {
              Ee = de;
              for (var le = de.child; le !== null; )
                Ee = le, nx(le), le = le.sibling;
            }
            Ww(de, q);
          }
          return;
        }
        case Dt: {
          au(t, e), Wu(e), l & Je && Y1(e);
          return;
        }
        case En:
          return;
        default: {
          au(t, e), Wu(e);
          return;
        }
      }
    }
    function Wu(e) {
      var t = e.flags;
      if (t & rn) {
        try {
          Xw(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~rn;
      }
      t & Ma && (e.flags &= ~Ma);
    }
    function tx(e, t, a) {
      Of = a, Lf = t, Ee = e, Q1(e, t, a), Of = null, Lf = null;
    }
    function Q1(e, t, a) {
      for (var i = (e.mode & ot) !== Me; Ee !== null; ) {
        var l = Ee, s = l.child;
        if (l.tag === Ue && i) {
          var f = l.memoizedState !== null, p = f || Sm;
          if (p) {
            k0(e, t, a);
            continue;
          } else {
            var v = l.alternate, y = v !== null && v.memoizedState !== null, g = y || Ur, _ = Sm, w = Ur;
            Sm = p, Ur = g, Ur && !w && (Ee = l, rx(l));
            for (var M = s; M !== null; )
              Ee = M, Q1(
                M,
                t,
                a
              ), M = M.sibling;
            Ee = l, Sm = _, Ur = w, k0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & yr) !== De && s !== null ? (s.return = l, Ee = s) : k0(e, t, a);
      }
    }
    function k0(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & yr) !== De) {
          var l = i.alternate;
          Pt(i);
          try {
            Iw(t, l, i, a);
          } catch (f) {
            on(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function nx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case ve:
          case We:
          case it:
          case He: {
            if (t.mode & ze)
              try {
                Qu(), nu(ur, t, t.return);
              } finally {
                Iu(t);
              }
            else
              nu(ur, t, t.return);
            break;
          }
          case pe: {
            Mf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && x0(t, t.return, i);
            break;
          }
          case ie: {
            Mf(t, t.return);
            break;
          }
          case Ue: {
            var l = t.memoizedState !== null;
            if (l) {
              W1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : W1(e);
      }
    }
    function W1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function rx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            q1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : q1(e);
      }
    }
    function q1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Pt(t);
        try {
          Qw(t);
        } catch (i) {
          on(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ax(e, t, a, i) {
      Ee = t, ix(t, e, a, i);
    }
    function ix(e, t, a, i) {
      for (; Ee !== null; ) {
        var l = Ee, s = l.child;
        (l.subtreeFlags & Na) !== De && s !== null ? (s.return = l, Ee = s) : ux(e, t, a, i);
      }
    }
    function ux(e, t, a, i) {
      for (; Ee !== null; ) {
        var l = Ee;
        if ((l.flags & sn) !== De) {
          Pt(l);
          try {
            lx(t, l, a, i);
          } catch (f) {
            on(l, l.return, f);
          }
          Cn();
        }
        if (l === e) {
          Ee = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ee = s;
          return;
        }
        Ee = l.return;
      }
    }
    function lx(e, t, a, i) {
      switch (t.tag) {
        case ve:
        case We:
        case He: {
          if (t.mode & ze) {
            u0();
            try {
              Po(Nr | ir, t);
            } finally {
              i0(t);
            }
          } else
            Po(Nr | ir, t);
          break;
        }
      }
    }
    function ox(e) {
      Ee = e, sx();
    }
    function sx() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Nt) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ee = l, dx(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Na) !== De && t !== null ? (t.return = e, Ee = t) : cx();
      }
    }
    function cx() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & sn) !== De && (Pt(e), fx(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function fx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & ze ? (u0(), nu(Nr | ir, e, e.return), i0(e)) : nu(Nr | ir, e, e.return);
          break;
        }
      }
    }
    function dx(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Pt(a), vx(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : px(e);
      }
    }
    function px(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (V1(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function vx(e, t) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & ze ? (u0(), nu(Nr, e, t), i0(e)) : nu(Nr, e, t);
          break;
        }
      }
    }
    function hx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            Po(ur | ir, e);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
      }
    }
    function mx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            Po(Nr | ir, e);
          } catch (t) {
            on(e, e.return, t);
          }
          break;
        }
      }
    }
    function yx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            nu(ur | ir, e, e.return);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && x0(e, e.return, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He:
          try {
            nu(Nr | ir, e, e.return);
          } catch (t) {
            on(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var Sx = [];
    function Ex() {
      Sx.forEach(function(e) {
        return e();
      });
    }
    var Cx = A.ReactCurrentActQueue;
    function Rx(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function G1() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && Cx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tx = Math.ceil, O0 = A.ReactCurrentDispatcher, L0 = A.ReactCurrentOwner, Fr = A.ReactCurrentBatchConfig, iu = A.ReactCurrentActQueue, sr = 0, X1 = 1, Hr = 2, Di = 4, Ul = 0, zp = 1, Qs = 2, Cm = 3, Up = 4, K1 = 5, M0 = 6, gt = sr, Ca = null, On = null, cr = V, qu = V, N0 = Mo(V), fr = Ul, Ap = null, Rm = V, Fp = V, Tm = V, Hp = null, Ya = null, z0 = 0, Z1 = 500, J1 = 1 / 0, bx = 500, Al = null;
    function jp() {
      J1 = mn() + bx;
    }
    function eC() {
      return J1;
    }
    var bm = !1, U0 = null, Nf = null, Ws = !1, $o = null, Vp = V, A0 = [], F0 = null, wx = 50, Pp = 0, H0 = null, j0 = !1, wm = !1, xx = 50, zf = 0, xm = null, Bp = Zt, _m = V, tC = !1;
    function Dm() {
      return Ca;
    }
    function Ra() {
      return (gt & (Hr | Di)) !== sr ? mn() : (Bp !== Zt || (Bp = mn()), Bp);
    }
    function Yo(e) {
      var t = e.mode;
      if ((t & ot) === Me)
        return Ae;
      if ((gt & Hr) !== sr && cr !== V)
        return jn(cr);
      var a = Rb() !== Cb;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === yt && (_m = Dd()), _m;
      }
      var l = Fa();
      if (l !== yt)
        return l;
      var s = uT();
      return s;
    }
    function _x(e) {
      var t = e.mode;
      return (t & ot) === Me ? Ae : uy();
    }
    function dr(e, t, a, i) {
      Kx(), tC && S("useInsertionEffect must not schedule updates."), j0 && (wm = !0), gl(e, a, i), (gt & Hr) !== V && e === Ca ? e4(t) : (rr && Nd(e, t, a), t4(t), e === Ca && ((gt & Hr) === sr && (Fp = et(Fp, a)), fr === Up && Io(e, cr)), Ia(e, i), a === Ae && gt === sr && (t.mode & ot) === Me && !iu.isBatchingLegacy && (jp(), eE()));
    }
    function Dx(e, t, a) {
      var i = e.current;
      i.lanes = t, gl(e, t, a), Ia(e, a);
    }
    function kx(e) {
      return (gt & Hr) !== sr;
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      ry(e, t);
      var i = gs(e, e === Ca ? cr : V);
      if (i === V) {
        a !== null && yC(a), e.callbackNode = null, e.callbackPriority = yt;
        return;
      }
      var l = Nn(i), s = e.callbackPriority;
      if (s === l && !(iu.current !== null && a !== Q0)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yC(a);
      var f;
      if (l === Ae)
        e.tag === No ? (iu.isBatchingLegacy !== null && (iu.didScheduleLegacyUpdate = !0), ab(aC.bind(null, e))) : JS(aC.bind(null, e)), iu.current !== null ? iu.current.push(zo) : oT(function() {
          (gt & (Hr | Di)) === sr && zo();
        }), f = null;
      else {
        var p;
        switch (Ts(i)) {
          case gr:
            p = yc;
            break;
          case ar:
            p = ya;
            break;
          case Yi:
            p = gi;
            break;
          case Cs:
            p = xu;
            break;
          default:
            p = gi;
            break;
        }
        f = W0(p, nC.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function nC(e, t) {
      if (Kb(), Bp = Zt, _m = V, (gt & (Hr | Di)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Hl();
      if (i && e.callbackNode !== a)
        return null;
      var l = gs(e, e === Ca ? cr : V);
      if (l === V)
        return null;
      var s = !Es(e, l) && !Vv(e, l) && !t, f = s ? jx(e, l) : Om(e, l);
      if (f !== Ul) {
        if (f === Qs) {
          var p = xd(e);
          p !== V && (l = p, f = V0(e, p));
        }
        if (f === zp) {
          var v = Ap;
          throw qs(e, V), Io(e, l), Ia(e, mn()), v;
        }
        if (f === M0)
          Io(e, l);
        else {
          var y = !Es(e, l), g = e.current.alternate;
          if (y && !Lx(g)) {
            if (f = Om(e, l), f === Qs) {
              var _ = xd(e);
              _ !== V && (l = _, f = V0(e, _));
            }
            if (f === zp) {
              var w = Ap;
              throw qs(e, V), Io(e, l), Ia(e, mn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = l, Ox(e, f, l);
        }
      }
      return Ia(e, mn()), e.callbackNode === a ? nC.bind(null, e) : null;
    }
    function V0(e, t) {
      var a = Hp;
      if (Pn(e)) {
        var i = qs(e, t);
        i.flags |= Rn, KT(e.containerInfo);
      }
      var l = Om(e, t);
      if (l !== Qs) {
        var s = Ya;
        Ya = a, s !== null && rC(s);
      }
      return l;
    }
    function rC(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Ox(e, t, a) {
      switch (t) {
        case Ul:
        case zp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Qs: {
          Gs(e, Ya, Al);
          break;
        }
        case Cm: {
          if (Io(e, a), Pc(a) && !gC()) {
            var i = z0 + Z1 - mn();
            if (i > 10) {
              var l = gs(e, V);
              if (l !== V)
                break;
              var s = e.suspendedLanes;
              if (!yl(s, a)) {
                Ra(), Ld(e, s);
                break;
              }
              e.timeoutHandle = Fy(Gs.bind(null, e, Ya, Al), i);
              break;
            }
          }
          Gs(e, Ya, Al);
          break;
        }
        case Up: {
          if (Io(e, a), jv(a))
            break;
          if (!gC()) {
            var f = Hv(e, a), p = f, v = mn() - p, y = Xx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Fy(Gs.bind(null, e, Ya, Al), y);
              break;
            }
          }
          Gs(e, Ya, Al);
          break;
        }
        case K1: {
          Gs(e, Ya, Al);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lx(e) {
      for (var t = e; ; ) {
        if (t.flags & fs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & fs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Io(e, t) {
      t = ho(t, Tm), t = ho(t, Fp), Od(e, t);
    }
    function aC(e) {
      if (Zb(), (gt & (Hr | Di)) !== sr)
        throw new Error("Should not already be working.");
      Hl();
      var t = gs(e, V);
      if (!ra(t, Ae))
        return Ia(e, mn()), null;
      var a = Om(e, t);
      if (e.tag !== No && a === Qs) {
        var i = xd(e);
        i !== V && (t = i, a = V0(e, i));
      }
      if (a === zp) {
        var l = Ap;
        throw qs(e, V), Io(e, t), Ia(e, mn()), l;
      }
      if (a === M0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, Ya, Al), Ia(e, mn()), null;
    }
    function Mx(e, t) {
      t !== V && (mo(e, et(t, Ae)), Ia(e, mn()), (gt & (Hr | Di)) === sr && (jp(), zo()));
    }
    function P0(e, t) {
      var a = gt;
      gt |= X1;
      try {
        return e(t);
      } finally {
        gt = a, gt === sr && !iu.isBatchingLegacy && (jp(), eE());
      }
    }
    function Nx(e, t, a, i, l) {
      var s = Fa(), f = Fr.transition;
      try {
        return Fr.transition = null, Vn(gr), e(t, a, i, l);
      } finally {
        Vn(s), Fr.transition = f, gt === sr && jp();
      }
    }
    function Fl(e) {
      $o !== null && $o.tag === No && (gt & (Hr | Di)) === sr && Hl();
      var t = gt;
      gt |= X1;
      var a = Fr.transition, i = Fa();
      try {
        return Fr.transition = null, Vn(gr), e ? e() : void 0;
      } finally {
        Vn(i), Fr.transition = a, gt = t, (gt & (Hr | Di)) === sr && zo();
      }
    }
    function iC() {
      return (gt & (Hr | Di)) !== sr;
    }
    function km(e, t) {
      ia(N0, qu, e), qu = et(qu, t);
    }
    function B0(e) {
      qu = N0.current, aa(N0, e);
    }
    function qs(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, lT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var l = i.alternate;
          z1(l, i), i = i.return;
        }
      Ca = e;
      var s = Xs(e.current, null);
      return On = s, cr = qu = t, fr = Ul, Ap = null, Rm = V, Fp = V, Tm = V, Hp = null, Ya = null, xb(), Ki.discardPendingWarnings(), s;
    }
    function uC(e, t) {
      do {
        var a = On;
        try {
          if (Fh(), AE(), Cn(), L0.current = null, a === null || a.return === null) {
            fr = zp, Ap = t, On = null;
            return;
          }
          if (tt && a.mode & ze && hm(a, !0), ht)
            if (ol(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Uv(a, i, cr);
            } else
              Rc(a, t, cr);
          rw(e, a.return, a, t, cr), cC(a);
        } catch (l) {
          t = l, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function lC() {
      var e = O0.current;
      return O0.current = cm, e === null ? cm : e;
    }
    function oC(e) {
      O0.current = e;
    }
    function zx() {
      z0 = mn();
    }
    function $p(e) {
      Rm = et(e, Rm);
    }
    function Ux() {
      fr === Ul && (fr = Cm);
    }
    function $0() {
      (fr === Ul || fr === Cm || fr === Qs) && (fr = Up), Ca !== null && (Ss(Rm) || Ss(Fp)) && Io(Ca, cr);
    }
    function Ax(e) {
      fr !== Up && (fr = Qs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Fx() {
      return fr === Ul;
    }
    function Om(e, t) {
      var a = gt;
      gt |= Hr;
      var i = lC();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Yp(e, cr), l.clear()), Yc(e, t);
        }
        Al = zd(), qs(e, t);
      }
      ni(t);
      do
        try {
          Hx();
          break;
        } catch (s) {
          uC(e, s);
        }
      while (!0);
      if (Fh(), gt = a, oC(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return so(), Ca = null, cr = V, fr;
    }
    function Hx() {
      for (; On !== null; )
        sC(On);
    }
    function jx(e, t) {
      var a = gt;
      gt |= Hr;
      var i = lC();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Yp(e, cr), l.clear()), Yc(e, t);
        }
        Al = zd(), jp(), qs(e, t);
      }
      ni(t);
      do
        try {
          Vx();
          break;
        } catch (s) {
          uC(e, s);
        }
      while (!0);
      return Fh(), oC(i), gt = a, On !== null ? (vs(), Ul) : (so(), Ca = null, cr = V, fr);
    }
    function Vx() {
      for (; On !== null && !mc(); )
        sC(On);
    }
    function sC(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & ze) !== Me ? (a0(e), a = Y0(t, e, qu), hm(e, !0)) : a = Y0(t, e, qu), Cn(), e.memoizedProps = e.pendingProps, a === null ? cC(e) : On = a, L0.current = null;
    }
    function cC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === De) {
          Pt(t);
          var l = void 0;
          if ((t.mode & ze) === Me ? l = N1(a, t, qu) : (a0(t), l = N1(a, t, qu), hm(t, !1)), Cn(), l !== null) {
            On = l;
            return;
          }
        } else {
          var s = Uw(a, t);
          if (s !== null) {
            s.flags &= xv, On = s;
            return;
          }
          if ((t.mode & ze) !== Me) {
            hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = De, i.deletions = null;
          else {
            fr = M0, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      fr === Ul && (fr = K1);
    }
    function Gs(e, t, a) {
      var i = Fa(), l = Fr.transition;
      try {
        Fr.transition = null, Vn(gr), Px(e, t, a, i);
      } finally {
        Fr.transition = l, Vn(i);
      }
      return null;
    }
    function Px(e, t, a, i) {
      do
        Hl();
      while ($o !== null);
      if (Zx(), (gt & (Hr | Di)) !== sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Sc(s), l === null)
        return Cd(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = yt;
      var f = et(l.lanes, l.childLanes);
      Md(e, f), e === Ca && (Ca = null, On = null, cr = V), ((l.subtreeFlags & Na) !== De || (l.flags & Na) !== De) && (Ws || (Ws = !0, F0 = a, W0(gi, function() {
        return Hl(), null;
      })));
      var p = (l.subtreeFlags & (uo | Jr | yr | Na)) !== De, v = (l.flags & (uo | Jr | yr | Na)) !== De;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var g = Fa();
        Vn(gr);
        var _ = gt;
        gt |= Di, L0.current = null, Vw(e, l), l1(), ex(e, l, s), eT(e.containerInfo), e.current = l, Av(s), tx(l, e, s), oo(), kv(), gt = _, Vn(g), Fr.transition = y;
      } else
        e.current = l, l1();
      var w = Ws;
      if (Ws ? (Ws = !1, $o = e, Vp = s) : (zf = 0, xm = null), f = e.pendingLanes, f === V && (Nf = null), w || vC(e.current, !1), Pi(l.stateNode, i), rr && e.memoizedUpdaters.clear(), Ex(), Ia(e, mn()), t !== null)
        for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
          var H = t[z], fe = H.stack, Oe = H.digest;
          M(H.value, {
            componentStack: fe,
            digest: Oe
          });
        }
      if (bm) {
        bm = !1;
        var Te = U0;
        throw U0 = null, Te;
      }
      return ra(Vp, Ae) && e.tag !== No && Hl(), f = e.pendingLanes, ra(f, Ae) ? (Xb(), e === H0 ? Pp++ : (Pp = 0, H0 = e)) : Pp = 0, zo(), Cd(), null;
    }
    function Hl() {
      if ($o !== null) {
        var e = Ts(Vp), t = oy(Yi, e), a = Fr.transition, i = Fa();
        try {
          return Fr.transition = null, Vn(t), $x();
        } finally {
          Vn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function Bx(e) {
      A0.push(e), Ws || (Ws = !0, W0(gi, function() {
        return Hl(), null;
      }));
    }
    function $x() {
      if ($o === null)
        return !1;
      var e = F0;
      F0 = null;
      var t = $o, a = Vp;
      if ($o = null, Vp = V, (gt & (Hr | Di)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      j0 = !0, wm = !1, Fv(a);
      var i = gt;
      gt |= Di, ox(t.current), ax(t, t.current, a, e);
      {
        var l = A0;
        A0 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          Yw(t, f);
        }
      }
      ps(), vC(t.current, !0), gt = i, zo(), wm ? t === xm ? zf++ : (zf = 0, xm = t) : zf = 0, j0 = !1, wm = !1, Du(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function fC(e) {
      return Nf !== null && Nf.has(e);
    }
    function Yx(e) {
      Nf === null ? Nf = /* @__PURE__ */ new Set([e]) : Nf.add(e);
    }
    function Ix(e) {
      bm || (bm = !0, U0 = e);
    }
    var Qx = Ix;
    function dC(e, t, a) {
      var i = Ys(a, t), l = s1(e, i, Ae), s = Ao(e, l, Ae), f = Ra();
      s !== null && (gl(s, Ae, f), Ia(s, f));
    }
    function on(e, t, a) {
      if (Fw(a), Ip(!1), e.tag === te) {
        dC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          dC(i, e, a);
          return;
        } else if (i.tag === pe) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fC(s)) {
            var f = Ys(a, e), p = c0(i, f, Ae), v = Ao(i, p, Ae), y = Ra();
            v !== null && (gl(v, Ae, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ra();
      Ld(e, a), n4(e), Ca === e && yl(cr, a) && (fr === Up || fr === Cm && Pc(cr) && mn() - z0 < Z1 ? qs(e, V) : Tm = et(Tm, a)), Ia(e, l);
    }
    function pC(e, t) {
      t === yt && (t = _x(e));
      var a = Ra(), i = Ba(e, t);
      i !== null && (gl(i, t, a), Ia(i, a));
    }
    function qx(e) {
      var t = e.memoizedState, a = yt;
      t !== null && (a = t.retryLane), pC(e, a);
    }
    function Gx(e, t) {
      var a = yt, i;
      switch (e.tag) {
        case xe:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Dt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), pC(e, a);
    }
    function Xx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tx(e / 1960) * 1960;
    }
    function Kx() {
      if (Pp > wx)
        throw Pp = 0, H0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      zf > xx && (zf = 0, xm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zx() {
      Ki.flushLegacyContextWarning(), Ki.flushPendingUnsafeLifecycleWarnings();
    }
    function vC(e, t) {
      Pt(e), Lm(e, Zr, yx), t && Lm(e, ll, gx), Lm(e, Zr, hx), t && Lm(e, ll, mx), Cn();
    }
    function Lm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Mm = null;
    function hC(e) {
      {
        if ((gt & Hr) !== sr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== Qe && t !== te && t !== pe && t !== ve && t !== We && t !== it && t !== He)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Pt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : Cn();
        }
      }
    }
    var Y0;
    {
      var Jx = null;
      Y0 = function(e, t, a) {
        var i = TC(Jx, t);
        try {
          return D1(e, t, a);
        } catch (s) {
          if (db() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), AE(), z1(e, t), TC(t, i), t.mode & ze && a0(t), ul(null, D1, null, e, t, a), ty()) {
            var l = cd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var mC = !1, I0;
    I0 = /* @__PURE__ */ new Set();
    function e4(e) {
      if (Wr && !Wb())
        switch (e.tag) {
          case ve:
          case We:
          case He: {
            var t = On && Ye(On) || "Unknown", a = t;
            if (!I0.has(a)) {
              I0.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            mC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), mC = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nd(e, i, t);
        });
      }
    }
    var Q0 = {};
    function W0(e, t) {
      {
        var a = iu.current;
        return a !== null ? (a.push(t), Q0) : hc(e, t);
      }
    }
    function yC(e) {
      if (e !== Q0)
        return Dv(e);
    }
    function gC() {
      return iu.current !== null;
    }
    function t4(e) {
      {
        if (e.mode & ot) {
          if (!G1())
            return;
        } else if (!Rx() || gt !== sr || e.tag !== ve && e.tag !== We && e.tag !== He)
          return;
        if (iu.current === null) {
          var t = hn;
          try {
            Pt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Pt(e) : Cn();
          }
        }
      }
    }
    function n4(e) {
      e.tag !== No && G1() && iu.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      tC = e;
    }
    var ki = null, Uf = null, r4 = function(e) {
      ki = e;
    };
    function Af(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function q0(e) {
      return Af(e);
    }
    function G0(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Af(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function SC(e, t) {
      {
        if (ki === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (l = !0);
            break;
          }
          case ve: {
            (typeof i == "function" || s === ke) && (l = !0);
            break;
          }
          case We: {
            (s === ce || s === ke) && (l = !0);
            break;
          }
          case it:
          case He: {
            (s === Ze || s === ke) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = ki(a);
          if (f !== void 0 && f === ki(i))
            return !0;
        }
        return !1;
      }
    }
    function EC(e) {
      {
        if (ki === null || typeof WeakSet != "function")
          return;
        Uf === null && (Uf = /* @__PURE__ */ new WeakSet()), Uf.add(e);
      }
    }
    var a4 = function(e, t) {
      {
        if (ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Hl(), Fl(function() {
          X0(e.current, i, a);
        });
      }
    }, i4 = function(e, t) {
      {
        if (e.context !== ai)
          return;
        Hl(), Fl(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function X0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ve:
          case He:
          case pe:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ki(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === pe ? g = !0 : y = !0));
        }
        if (Uf !== null && (Uf.has(e) || i !== null && Uf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ba(e, Ae);
          w !== null && dr(w, e, Ae, Zt);
        }
        l !== null && !g && X0(l, t, a), s !== null && X0(s, t, a);
      }
    }
    var u4 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return K0(e.current, i, a), a;
      }
    };
    function K0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ve:
          case He:
          case pe:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? l4(e, a) : i !== null && K0(i, t, a), l !== null && K0(l, t, a);
      }
    }
    function l4(e, t) {
      {
        var a = o4(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o4(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Z0;
    {
      Z0 = !1;
      try {
        var CC = Object.preventExtensions({});
      } catch {
        Z0 = !0;
      }
    }
    function s4(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Z0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new s4(e, t, a, i);
    };
    function J0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c4(e) {
      return typeof e == "function" && !J0(e) && e.defaultProps === void 0;
    }
    function f4(e) {
      if (typeof e == "function")
        return J0(e) ? pe : ve;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return We;
        if (t === Ze)
          return it;
      }
      return Qe;
    }
    function Xs(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Qe:
        case ve:
        case He:
          a.type = Af(e.type);
          break;
        case pe:
          a.type = q0(e.type);
          break;
        case We:
          a.type = G0(e.type);
          break;
      }
      return a;
    }
    function d4(e, t) {
      e.flags &= nr | rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p4(e, t, a) {
      var i;
      return e === kh ? (i = ot, t === !0 && (i |= yn, i |= Ua)) : i = Me, rr && (i |= ze), ii(te, null, null, i);
    }
    function eS(e, t, a, i, l, s) {
      var f = Qe, p = e;
      if (typeof e == "function")
        J0(e) ? (f = pe, p = q0(p)) : p = Af(p);
      else if (typeof e == "string")
        f = ie;
      else {
        e:
          switch (e) {
            case pa:
              return Qo(a.children, l, s, t);
            case fi:
              f = st, l |= yn, (l & ot) !== Me && (l |= Ua);
              break;
            case R:
              return v4(a, l, s, t);
            case Xe:
              return h4(a, l, s, t);
            case mt:
              return m4(a, l, s, t);
            case en:
              return RC(a, l, s, t);
            case tr:
            case Ln:
            case di:
            case Pl:
            case Jt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case $:
                    f = at;
                    break e;
                  case ee:
                    f = fn;
                    break e;
                  case ce:
                    f = We, p = G0(p);
                    break e;
                  case Ze:
                    f = it;
                    break e;
                  case ke:
                    f = nn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ye(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = ii(f, a, t, l);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function tS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = eS(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var l = ii(Ct, e, i, t);
      return l.lanes = a, l;
    }
    function v4(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ii(ct, e, i, t | ze);
      return l.elementType = R, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function h4(e, t, a, i) {
      var l = ii(xe, e, i, t);
      return l.elementType = Xe, l.lanes = a, l;
    }
    function m4(e, t, a, i) {
      var l = ii(Dt, e, i, t);
      return l.elementType = mt, l.lanes = a, l;
    }
    function RC(e, t, a, i) {
      var l = ii(Ue, e, i, t);
      l.elementType = en, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function nS(e, t, a) {
      var i = ii(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function y4() {
      var e = ii(ie, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function g4(e) {
      var t = ii(Qt, null, null, Me);
      return t.stateNode = e, t;
    }
    function rS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = ii(me, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, l;
    }
    function TC(e, t) {
      return e === null && (e = ii(Qe, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S4(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = yt, this.eventTimes = $c(V), this.expirationTimes = $c(Zt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = $c(V), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < un; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function bC(e, t, a, i, l, s, f, p, v, y) {
      var g = new S4(e, t, a, p, v), _ = p4(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return fg(_), g;
    }
    var aS = "18.2.0";
    function E4(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        $$typeof: xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var iS, uS;
    iS = !1, uS = {};
    function wC(e) {
      if (!e)
        return ai;
      var t = Oa(e), a = rb(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Pu(i))
          return KS(t, i, a);
      }
      return a;
    }
    function C4(e, t) {
      {
        var a = Oa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = za(a);
        if (l === null)
          return null;
        if (l.mode & yn) {
          var s = Ye(a) || "Component";
          if (!uS[s]) {
            uS[s] = !0;
            var f = hn;
            try {
              Pt(l), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : Cn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function xC(e, t, a, i, l, s, f, p) {
      var v = !1, y = null;
      return bC(e, t, v, y, a, i, l, s, f);
    }
    function _C(e, t, a, i, l, s, f, p, v, y) {
      var g = !0, _ = bC(a, i, g, e, l, s, f, p, v);
      _.context = wC(null);
      var w = _.current, M = Ra(), z = Yo(w), H = Nl(M, z);
      return H.callback = t != null ? t : null, Ao(w, H, z), Dx(_, z, M), _;
    }
    function Qp(e, t, a, i) {
      Ov(t, e);
      var l = t.current, s = Ra(), f = Yo(l);
      sl(f);
      var p = wC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !iS && (iS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(hn) || "Unknown"));
      var v = Nl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(l, v, f);
      return y !== null && (dr(y, l, f, s), Bh(y, l, f)), f;
    }
    function Nm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R4(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (Pn(t)) {
            var a = ay(t);
            Mx(t, a);
          }
          break;
        }
        case xe: {
          Fl(function() {
            var l = Ba(e, Ae);
            if (l !== null) {
              var s = Ra();
              dr(l, e, Ae, s);
            }
          });
          var i = Ae;
          lS(e, i);
          break;
        }
      }
    }
    function DC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function lS(e, t) {
      DC(e, t);
      var a = e.alternate;
      a && DC(a, t);
    }
    function T4(e) {
      if (e.tag === xe) {
        var t = co, a = Ba(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        lS(e, t);
      }
    }
    function b4(e) {
      if (e.tag === xe) {
        var t = Yo(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        lS(e, t);
      }
    }
    function kC(e) {
      var t = _v(e);
      return t === null ? null : t.stateNode;
    }
    var OC = function(e) {
      return null;
    };
    function w4(e) {
      return OC(e);
    }
    var LC = function(e) {
      return !1;
    };
    function x4(e) {
      return LC(e);
    }
    var MC = null, NC = null, zC = null, UC = null, AC = null, FC = null, HC = null, jC = null, VC = null;
    {
      var PC = function(e, t, a) {
        var i = t[a], l = vt(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (vt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = PC(e[i], t, a + 1), l);
      }, BC = function(e, t) {
        return PC(e, t, 0);
      }, $C = function(e, t, a, i) {
        var l = t[i], s = vt(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], vt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = $C(
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, YC = function(e, t, a) {
        if (t.length !== a.length) {
          Ge("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ge("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $C(e, t, a, 0);
      }, IC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = vt(e) ? e.slice() : ut({}, e);
        return s[l] = IC(e[l], t, a + 1, i), s;
      }, QC = function(e, t, a) {
        return IC(e, t, 0, a);
      }, oS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      MC = function(e, t, a, i) {
        var l = oS(e, t);
        if (l !== null) {
          var s = QC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ba(e, Ae);
          f !== null && dr(f, e, Ae, Zt);
        }
      }, NC = function(e, t, a) {
        var i = oS(e, t);
        if (i !== null) {
          var l = BC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = ut({}, e.memoizedProps);
          var s = Ba(e, Ae);
          s !== null && dr(s, e, Ae, Zt);
        }
      }, zC = function(e, t, a, i) {
        var l = oS(e, t);
        if (l !== null) {
          var s = YC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ba(e, Ae);
          f !== null && dr(f, e, Ae, Zt);
        }
      }, UC = function(e, t, a) {
        e.pendingProps = QC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ae);
        i !== null && dr(i, e, Ae, Zt);
      }, AC = function(e, t) {
        e.pendingProps = BC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Ae);
        a !== null && dr(a, e, Ae, Zt);
      }, FC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ae);
        i !== null && dr(i, e, Ae, Zt);
      }, HC = function(e) {
        var t = Ba(e, Ae);
        t !== null && dr(t, e, Ae, Zt);
      }, jC = function(e) {
        OC = e;
      }, VC = function(e) {
        LC = e;
      };
    }
    function _4(e) {
      var t = za(e);
      return t === null ? null : t.stateNode;
    }
    function D4(e) {
      return null;
    }
    function k4() {
      return hn;
    }
    function O4(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return Sd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: MC,
        overrideHookStateDeletePath: NC,
        overrideHookStateRenamePath: zC,
        overrideProps: UC,
        overridePropsDeletePath: AC,
        overridePropsRenamePath: FC,
        setErrorHandler: jC,
        setSuspenseHandler: VC,
        scheduleUpdate: HC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: _4,
        findFiberByHostInstance: t || D4,
        findHostInstancesForRefresh: u4,
        scheduleRefresh: a4,
        scheduleRoot: i4,
        setRefreshHandler: r4,
        getCurrentFiber: k4,
        reconcilerVersion: aS
      });
    }
    var WC = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function sS(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = sS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = kC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, zm.prototype.unmount = sS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Fl(function() {
          Qp(null, e, null, null);
        }), QS(t);
      }
    };
    function L4(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var a = !1, i = !1, l = "", s = WC;
      t != null && (t.hydrate ? Ge("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ci && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xC(e, kh, null, a, i, l, s);
      Rh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new sS(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function M4(e) {
      e && Xv(e);
    }
    zm.prototype.unstable_scheduleHydration = M4;
    function N4(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _C(t, null, e, kh, i, s, f, p, v);
      if (Rh(y.current, e), ep(e), l)
        for (var g = 0; g < l.length; g++) {
          var _ = l[g];
          Pb(y, _);
        }
      return new zm(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ja || e.nodeType === el || !ue));
    }
    function Wp(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ja || e.nodeType === el || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z4 = A.ReactCurrentOwner, GC;
    GC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = kC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = cS(e), l = !!(i && Lo(i));
      l && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function cS(e) {
      return e ? e.nodeType === Ja ? e.documentElement : e.firstChild : null;
    }
    function XC() {
    }
    function U4(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Nm(f);
            s.call(w);
          };
        }
        var f = _C(
          t,
          i,
          e,
          No,
          null,
          !1,
          !1,
          "",
          XC
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Fl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Nm(g);
            y.call(w);
          };
        }
        var g = xC(
          e,
          No,
          null,
          !1,
          !1,
          "",
          XC
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var _ = e.nodeType === Mn ? e.parentNode : e;
        return ep(_), Fl(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function A4(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, l) {
      GC(a), A4(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U4(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var v = Nm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, l);
      }
      return Nm(f);
    }
    function F4(e) {
      {
        var t = z4.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : C4(e, "findDOMNode");
    }
    function H4(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function j4(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function V4(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !cs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    function P4(e) {
      if (!Wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = cS(e), i = a && !Lo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Fl(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, QS(e);
          });
        }), !0;
      } else {
        {
          var l = cS(e), s = !!(l && Lo(l)), f = e.nodeType === Gr && Wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    he(R4), Yv(T4), ws(b4), Ad(Fa), Qv(Rs), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), bv(YR), cc(P0, Nx, Fl);
    function B4(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return E4(e, t, null, a);
    }
    function $4(e, t, a, i) {
      return V4(e, t, a, i);
    }
    var fS = {
      usingClientEntryPoint: !1,
      Events: [Lo, pf, Th, sc, ls, P0]
    };
    function Y4(e, t) {
      return fS.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L4(e, t);
    }
    function I4(e, t, a) {
      return fS.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N4(e, t, a);
    }
    function Q4(e) {
      return iC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Fl(e);
    }
    var W4 = O4({
      findFiberByHostInstance: Us,
      bundleType: 1,
      version: aS,
      rendererPackageName: "react-dom"
    });
    if (!W4 && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KC = window.location.protocol;
      /^(https?|file):$/.test(KC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS, Wa.createPortal = B4, Wa.createRoot = Y4, Wa.findDOMNode = F4, Wa.flushSync = Q4, Wa.hydrate = H4, Wa.hydrateRoot = I4, Wa.render = j4, Wa.unmountComponentAtNode = P4, Wa.unstable_batchedUpdates = P0, Wa.unstable_renderSubtreeIntoContainer = $4, Wa.version = aS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wa;
}
(function(W) {
  function G() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G);
      } catch (A) {
        console.error(A);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (G(), W.exports = e_()) : W.exports = t_();
})(oR);
var hS, Hm = oR.exports;
if (process.env.NODE_ENV === "production")
  hS = Hm.createRoot, Hm.hydrateRoot;
else {
  var iR = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hS = function(W, G) {
    iR.usingClientEntryPoint = !0;
    try {
      return Hm.createRoot(W, G);
    } finally {
      iR.usingClientEntryPoint = !1;
    }
  };
}
var Vm = { exports: {} }, Gp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function n_() {
  if (uR)
    return Gp;
  uR = 1;
  var W = li.exports, G = Symbol.for("react.element"), A = Symbol.for("react.fragment"), xt = Object.prototype.hasOwnProperty, zt = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Ut, ve, pe) {
    var Qe, te = {}, me = null, ie = null;
    pe !== void 0 && (me = "" + pe), ve.key !== void 0 && (me = "" + ve.key), ve.ref !== void 0 && (ie = ve.ref);
    for (Qe in ve)
      xt.call(ve, Qe) && !Ge.hasOwnProperty(Qe) && (te[Qe] = ve[Qe]);
    if (Ut && Ut.defaultProps)
      for (Qe in ve = Ut.defaultProps, ve)
        te[Qe] === void 0 && (te[Qe] = ve[Qe]);
    return { $$typeof: G, type: Ut, key: me, ref: ie, props: te, _owner: zt.current };
  }
  return Gp.Fragment = A, Gp.jsx = S, Gp.jsxs = S, Gp;
}
var Xp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function r_() {
  return lR || (lR = 1, process.env.NODE_ENV !== "production" && function() {
    var W = li.exports, G = Symbol.for("react.element"), A = Symbol.for("react.portal"), xt = Symbol.for("react.fragment"), zt = Symbol.for("react.strict_mode"), Ge = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ut = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Ve = Symbol.iterator, Ct = "@@iterator";
    function st(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = Ve && R[Ve] || R[Ct];
      return typeof $ == "function" ? $ : null;
    }
    var fn = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var $ = arguments.length, ee = new Array($ > 1 ? $ - 1 : 0), ce = 1; ce < $; ce++)
          ee[ce - 1] = arguments[ce];
        We("error", R, ee);
      }
    }
    function We(R, $, ee) {
      {
        var ce = fn.ReactDebugCurrentFrame, Xe = ce.getStackAddendum();
        Xe !== "" && ($ += "%s", ee = ee.concat([Xe]));
        var mt = ee.map(function(Ze) {
          return String(Ze);
        });
        mt.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, mt);
      }
    }
    var ct = !1, xe = !1, it = !1, He = !1, nn = !1, wn;
    wn = Symbol.for("react.module.reference");
    function Qt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === xt || R === Ge || nn || R === zt || R === pe || R === Qe || He || R === ie || ct || xe || it || typeof R == "object" && R !== null && (R.$$typeof === me || R.$$typeof === te || R.$$typeof === S || R.$$typeof === Ut || R.$$typeof === ve || R.$$typeof === wn || R.getModuleId !== void 0));
    }
    function Dt(R, $, ee) {
      var ce = R.displayName;
      if (ce)
        return ce;
      var Xe = $.displayName || $.name || "";
      return Xe !== "" ? ee + "(" + Xe + ")" : ee;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case xt:
          return "Fragment";
        case A:
          return "Portal";
        case Ge:
          return "Profiler";
        case zt:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Qe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ut:
            var $ = R;
            return En($) + ".Consumer";
          case S:
            var ee = R;
            return En(ee._context) + ".Provider";
          case ve:
            return Dt(R, R.render, "ForwardRef");
          case te:
            var ce = R.displayName || null;
            return ce !== null ? ce : Ue(R.type) || "Memo";
          case me: {
            var Xe = R, mt = Xe._payload, Ze = Xe._init;
            try {
              return Ue(Ze(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, At = 0, Rt, ye, Z, be, T, B, ue;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Fe() {
      {
        if (At === 0) {
          Rt = console.log, ye = console.info, Z = console.warn, be = console.error, T = console.group, B = console.groupCollapsed, ue = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        At++;
      }
    }
    function ht() {
      {
        if (At--, At === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, R, {
              value: Rt
            }),
            info: Ke({}, R, {
              value: ye
            }),
            warn: Ke({}, R, {
              value: Z
            }),
            error: Ke({}, R, {
              value: be
            }),
            group: Ke({}, R, {
              value: T
            }),
            groupCollapsed: Ke({}, R, {
              value: B
            }),
            groupEnd: Ke({}, R, {
              value: ue
            })
          });
        }
        At < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = fn.ReactCurrentDispatcher, ft;
    function nt(R, $, ee) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var ce = Xe.stack.trim().match(/\n( *(at )?)/);
            ft = ce && ce[1] || "";
          }
        return `
` + ft + R;
      }
    }
    var Ft = !1, Vr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Vr = new pr();
    }
    function Pr(R, $) {
      if (!R || Ft)
        return "";
      {
        var ee = Vr.get(R);
        if (ee !== void 0)
          return ee;
      }
      var ce;
      Ft = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = tt.current, tt.current = null, Fe();
      try {
        if ($) {
          var Ze = function() {
            throw Error();
          };
          if (Object.defineProperty(Ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ze, []);
            } catch (Tt) {
              ce = Tt;
            }
            Reflect.construct(R, [], Ze);
          } else {
            try {
              Ze.call();
            } catch (Tt) {
              ce = Tt;
            }
            R.call(Ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            ce = Tt;
          }
          R();
        }
      } catch (Tt) {
        if (Tt && ce && typeof Tt.stack == "string") {
          for (var ke = Tt.stack.split(`
`), Ln = ce.stack.split(`
`), Jt = ke.length - 1, en = Ln.length - 1; Jt >= 1 && en >= 0 && ke[Jt] !== Ln[en]; )
            en--;
          for (; Jt >= 1 && en >= 0; Jt--, en--)
            if (ke[Jt] !== Ln[en]) {
              if (Jt !== 1 || en !== 1)
                do
                  if (Jt--, en--, en < 0 || ke[Jt] !== Ln[en]) {
                    var tr = `
` + ke[Jt].replace(" at new ", " at ");
                    return R.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Vr.set(R, tr), tr;
                  }
                while (Jt >= 1 && en >= 0);
              break;
            }
        }
      } finally {
        Ft = !1, tt.current = mt, ht(), Error.prepareStackTrace = Xe;
      }
      var di = R ? R.displayName || R.name : "", Pl = di ? nt(di) : "";
      return typeof R == "function" && Vr.set(R, Pl), Pl;
    }
    function dn(R, $, ee) {
      return Pr(R, !1);
    }
    function Yn(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function An(R, $, ee) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pr(R, Yn(R));
      if (typeof R == "string")
        return nt(R);
      switch (R) {
        case pe:
          return nt("Suspense");
        case Qe:
          return nt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ve:
            return dn(R.render);
          case te:
            return An(R.type, $, ee);
          case me: {
            var ce = R, Xe = ce._payload, mt = ce._init;
            try {
              return An(mt(Xe), $, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, xn = {}, Br = fn.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var $ = R._owner, ee = An(R.type, R._source, $ ? $.type : null);
        Br.setExtraStackFrame(ee);
      } else
        Br.setExtraStackFrame(null);
    }
    function In(R, $, ee, ce, Xe) {
      {
        var mt = Function.call.bind(Fn);
        for (var Ze in R)
          if (mt(R, Ze)) {
            var ke = void 0;
            try {
              if (typeof R[Ze] != "function") {
                var Ln = Error((ce || "React class") + ": " + ee + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              ke = R[Ze]($, Ze, ce, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Jt) {
              ke = Jt;
            }
            ke && !(ke instanceof Error) && ($r(Xe), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ee, Ze, typeof ke), $r(null)), ke instanceof Error && !(ke.message in xn) && (xn[ke.message] = !0, $r(Xe), at("Failed %s type: %s", ee, ke.message), $r(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(R) {
      return vr(R);
    }
    function hr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, ee = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ee;
      }
    }
    function sa(R) {
      try {
        return er(R), !1;
      } catch {
        return !0;
      }
    }
    function er(R) {
      return "" + R;
    }
    function Ir(R) {
      if (sa(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(R)), er(R);
    }
    var pn = fn.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oi, ca, J;
    J = {};
    function we(R) {
      if (Fn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Fn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, $) {
      if (typeof R.ref == "string" && pn.current && $ && pn.current.stateNode !== $) {
        var ee = Ue(pn.current.type);
        J[ee] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ue(pn.current.type), R.ref), J[ee] = !0);
      }
    }
    function Ht(R, $) {
      {
        var ee = function() {
          oi || (oi = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function _n(R, $) {
      {
        var ee = function() {
          ca || (ca = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ee.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var vn = function(R, $, ee, ce, Xe, mt, Ze) {
      var ke = {
        $$typeof: G,
        type: R,
        key: $,
        ref: ee,
        props: Ze,
        _owner: mt
      };
      return ke._store = {}, Object.defineProperty(ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)), ke;
    };
    function mr(R, $, ee, ce, Xe) {
      {
        var mt, Ze = {}, ke = null, Ln = null;
        ee !== void 0 && (Ir(ee), ke = "" + ee), rt($) && (Ir($.key), ke = "" + $.key), we($) && (Ln = $.ref, Mt($, Xe));
        for (mt in $)
          Fn.call($, mt) && !br.hasOwnProperty(mt) && (Ze[mt] = $[mt]);
        if (R && R.defaultProps) {
          var Jt = R.defaultProps;
          for (mt in Jt)
            Ze[mt] === void 0 && (Ze[mt] = Jt[mt]);
        }
        if (ke || Ln) {
          var en = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ke && Ht(Ze, en), Ln && _n(Ze, en);
        }
        return vn(R, ke, Ln, Xe, ce, pn.current, Ze);
      }
    }
    var Yt = fn.ReactCurrentOwner, wr = fn.ReactDebugCurrentFrame;
    function jt(R) {
      if (R) {
        var $ = R._owner, ee = An(R.type, R._source, $ ? $.type : null);
        wr.setExtraStackFrame(ee);
      } else
        wr.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function qa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === G;
    }
    function xa() {
      {
        if (Yt.current) {
          var R = Ue(Yt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function uu(R) {
      {
        if (R !== void 0) {
          var $ = R.fileName.replace(/^.*[\\\/]/, ""), ee = R.lineNumber;
          return `

Check your code at ` + $ + ":" + ee + ".";
        }
        return "";
      }
    }
    var Xu = {};
    function Vl(R) {
      {
        var $ = xa();
        if (!$) {
          var ee = typeof R == "string" ? R : R.displayName || R.name;
          ee && ($ = `

Check the top-level render call using <` + ee + ">.");
        }
        return $;
      }
    }
    function Oi(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ee = Vl($);
        if (Xu[ee])
          return;
        Xu[ee] = !0;
        var ce = "";
        R && R._owner && R._owner !== Yt.current && (ce = " It was passed a child from " + Ue(R._owner.type) + "."), jt(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ce), jt(null);
      }
    }
    function lu(R, $) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var ee = 0; ee < R.length; ee++) {
            var ce = R[ee];
            qa(ce) && Oi(ce, $);
          }
        else if (qa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Xe = st(R);
          if (typeof Xe == "function" && Xe !== R.entries)
            for (var mt = Xe.call(R), Ze; !(Ze = mt.next()).done; )
              qa(Ze.value) && Oi(Ze.value, $);
        }
      }
    }
    function fa(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var ee;
        if (typeof $ == "function")
          ee = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === ve || $.$$typeof === te))
          ee = $.propTypes;
        else
          return;
        if (ee) {
          var ce = Ue($);
          In(ee, R.props, "prop", ce, R);
        } else if ($.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var Xe = Ue($);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function si(R) {
      {
        for (var $ = Object.keys(R.props), ee = 0; ee < $.length; ee++) {
          var ce = $[ee];
          if (ce !== "children" && ce !== "key") {
            jt(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), jt(null);
            break;
          }
        }
        R.ref !== null && (jt(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function da(R, $, ee, ce, Xe, mt) {
      {
        var Ze = Qt(R);
        if (!Ze) {
          var ke = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = uu(Xe);
          Ln ? ke += Ln : ke += xa();
          var Jt;
          R === null ? Jt = "null" : Yr(R) ? Jt = "array" : R !== void 0 && R.$$typeof === G ? (Jt = "<" + (Ue(R.type) || "Unknown") + " />", ke = " Did you accidentally export a JSX literal instead of a component?") : Jt = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Jt, ke);
        }
        var en = mr(R, $, ee, Xe, mt);
        if (en == null)
          return en;
        if (Ze) {
          var tr = $.children;
          if (tr !== void 0)
            if (ce)
              if (Yr(tr)) {
                for (var di = 0; di < tr.length; di++)
                  lu(tr[di], R);
                Object.freeze && Object.freeze(tr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lu(tr, R);
        }
        return R === xt ? si(en) : fa(en), en;
      }
    }
    function ci(R, $, ee) {
      return da(R, $, ee, !0);
    }
    function xr(R, $, ee) {
      return da(R, $, ee, !1);
    }
    var pa = xr, fi = ci;
    Xp.Fragment = xt, Xp.jsx = pa, Xp.jsxs = fi;
  }()), Xp;
}
(function(W) {
  process.env.NODE_ENV === "production" ? W.exports = n_() : W.exports = r_();
})(Vm);
const a_ = Vm.exports.Fragment, wa = Vm.exports.jsx, Kp = Vm.exports.jsxs, i_ = ({
  destroyModal: W
}) => /* @__PURE__ */ wa("button", {
  onClick: W,
  className: "w3bb-quiz-modal-close-button",
  id: "w3bb-quiz-modal-close-button",
  children: /* @__PURE__ */ wa("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1792 1792",
    children: /* @__PURE__ */ wa("path", {
      fill: "#f00",
      d: "M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
    })
  })
}), u_ = li.exports.memo(i_), Hf = {
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
}, l_ = () => {
  const [W, G] = li.exports.useState(0), [A, xt] = li.exports.useState([]), [zt, Ge] = li.exports.useState(!1), [S, Ut] = li.exports.useState(!0);
  li.exports.useEffect(() => {
    zt && console.log(A);
  }, [zt]), li.exports.useEffect(() => () => {
    xt([]), G(0), Ge(!1);
  }, []);
  const ve = () => {
    Ut(!1);
  }, pe = (Qe) => {
    if (xt(() => [...A, {
      q: Hf.scenes[W].question,
      a: Qe
    }]), W === Hf.scenes.length - 1) {
      Ge(!0);
      return;
    }
    G((te) => te + 1);
  };
  return S ? /* @__PURE__ */ Kp("div", {
    className: "w3bb-quiz-welcome_screen",
    children: [/* @__PURE__ */ wa("h1", {
      children: Hf.welcomeText
    }), /* @__PURE__ */ wa("button", {
      className: "w3bb-quiz-welcome_button",
      onClick: ve,
      children: Hf.welcomeButton
    }, 1)]
  }) : zt ? /* @__PURE__ */ Kp("div", {
    className: "w3bb-quiz-success_screen",
    children: [/* @__PURE__ */ wa("h1", {
      children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}"
    }), /* @__PURE__ */ wa("p", {
      children: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!"
    })]
  }) : /* @__PURE__ */ Kp(a_, {
    children: [/* @__PURE__ */ wa("h1", {
      children: Hf.scenes[W].question
    }), /* @__PURE__ */ wa("div", {
      className: "w3bb-quiz-answers",
      children: Hf.scenes[W].answers.map((Qe) => /* @__PURE__ */ wa("button", {
        className: "w3bb-quiz-answer-button",
        onClick: () => pe(Qe.text),
        children: Qe.text
      }, Qe.id))
    })]
  });
}, o_ = li.exports.memo(l_), s_ = ({
  id: W,
  destroyModal: G
}) => (console.log("PROJECT_ID: ", W), /* @__PURE__ */ Kp("div", {
  className: "w3bb-quiz-modal-body",
  children: [/* @__PURE__ */ wa("div", {
    className: "w3bb-quiz-modal-image"
  }), /* @__PURE__ */ wa(u_, {
    destroyModal: G
  }), /* @__PURE__ */ wa("div", {
    className: "w3bb-quiz-modal-main",
    children: /* @__PURE__ */ wa(o_, {})
  }), /* @__PURE__ */ Kp("span", {
    className: "w3bb-quiz-modal-copyright",
    children: ["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432", /* @__PURE__ */ wa("a", {
      href: "https://w3bb.ru",
      target: "_blank",
      rel: "noreferrer noopener",
      children: "W3BB"
    })]
  })]
})), jf = document.createElement("div");
jf.classList.add("w3bb-quiz-modal-overlay");
const c_ = document.createElement("div");
c_.classList.add("w3bb-quiz-modal-body");
const f_ = hS(jf);
async function d_({ visibleToggler: W }) {
  let G = !1;
  const A = W.dataset.w3bbId;
  if (!A)
    throw new Error(
      "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id."
    );
  const xt = () => {
    document.body.removeChild(jf), G = !1;
  }, zt = () => {
    document.body.appendChild(jf), f_.render(s_({ id: A, destroyModal: xt }));
  }, Ge = () => {
    switch (G = !G, G) {
      case !0:
        zt();
        return;
      case !1:
        G = !1, xt();
        return;
      default:
        return;
    }
  };
  jf.addEventListener("click", (S) => {
    S.target === jf && (G = !1, xt());
  }), W.addEventListener("click", () => Ge());
}
const p_ = `
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
`, v_ = `
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

`, h_ = `
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`, jm = document.querySelector(
  "#w3bb-widget-toggler"
), mS = document.createElement("div");
mS.id = "w3bb-quiz-root";
document.body.appendChild(mS);
const yS = document.createElement("style");
document.head.appendChild(yS);
yS.appendChild(document.createTextNode(v_));
jm || (yS.appendChild(document.createTextNode(p_)), mS.innerHTML = h_);
const m_ = document.querySelector(
  "#w3bb-widget-default-toggler"
);
d_({ visibleToggler: jm != null ? jm : m_ });
