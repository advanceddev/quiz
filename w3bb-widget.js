var au = { exports: {} }, ye = {}, J = { exports: {} }, P = {}, Zn = Symbol.for("react.element"), kc = Symbol.for("react.portal"), Sc = Symbol.for("react.fragment"), xc = Symbol.for("react.strict_mode"), Ec = Symbol.for("react.profiler"), _c = Symbol.for("react.provider"), Cc = Symbol.for("react.context"), zc = Symbol.for("react.forward_ref"), Nc = Symbol.for("react.suspense"), Pc = Symbol.for("react.memo"), Lc = Symbol.for("react.lazy"), Qo = Symbol.iterator;
function Tc(e) {
  return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ou = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, iu = Object.assign, uu = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = uu, this.updater = n || ou;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function su() {
}
su.prototype = un.prototype;
function Ka(e, t, n) {
  this.props = e, this.context = t, this.refs = uu, this.updater = n || ou;
}
var Ya = Ka.prototype = new su();
Ya.constructor = Ka;
iu(Ya, un.prototype);
Ya.isPureReactComponent = !0;
var Ko = Array.isArray, cu = Object.prototype.hasOwnProperty, Xa = { current: null }, fu = { key: !0, ref: !0, __self: !0, __source: !0 };
function du(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t)
      cu.call(t, r) && !fu.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1)
    l.children = n;
  else if (1 < i) {
    for (var u = Array(i), c = 0; c < i; c++)
      u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in i = e.defaultProps, i)
      l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Zn, type: e, key: a, ref: o, props: l, _owner: Xa.current };
}
function Ic(e, t) {
  return { $$typeof: Zn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function Dc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yo = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36);
}
function Sr(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case kc:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + _l(o, 0) : r, Ko(l) ? (n = "", e != null && (n = e.replace(Yo, "$&/") + "/"), Sr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (Ga(l) && (l = Ic(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Yo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ko(e))
    for (var i = 0; i < e.length; i++) {
      a = e[i];
      var u = r + _l(a, i);
      o += Sr(a, t, n, u, l);
    }
  else if (u = Tc(e), typeof u == "function")
    for (e = u.call(e), i = 0; !(a = e.next()).done; )
      a = a.value, u = r + _l(a, i++), o += Sr(a, t, n, u, l);
  else if (a === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ar(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Mc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ue = { current: null }, xr = { transition: null }, Rc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: xr, ReactCurrentOwner: Xa };
P.Children = { map: ar, forEach: function(e, t, n) {
  ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ga(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
P.Component = un;
P.Fragment = Sc;
P.Profiler = Ec;
P.PureComponent = Ka;
P.StrictMode = xc;
P.Suspense = Nc;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rc;
P.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = iu({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Xa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var i = e.type.defaultProps;
    for (u in t)
      cu.call(t, u) && !fu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    r.children = n;
  else if (1 < u) {
    i = Array(u);
    for (var c = 0; c < u; c++)
      i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: a, props: r, _owner: o };
};
P.createContext = function(e) {
  return e = { $$typeof: Cc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _c, _context: e }, e.Consumer = e;
};
P.createElement = du;
P.createFactory = function(e) {
  var t = du.bind(null, e);
  return t.type = e, t;
};
P.createRef = function() {
  return { current: null };
};
P.forwardRef = function(e) {
  return { $$typeof: zc, render: e };
};
P.isValidElement = Ga;
P.lazy = function(e) {
  return { $$typeof: Lc, _payload: { _status: -1, _result: e }, _init: Mc };
};
P.memo = function(e, t) {
  return { $$typeof: Pc, type: e, compare: t === void 0 ? null : t };
};
P.startTransition = function(e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
P.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
P.useCallback = function(e, t) {
  return ue.current.useCallback(e, t);
};
P.useContext = function(e) {
  return ue.current.useContext(e);
};
P.useDebugValue = function() {
};
P.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
P.useEffect = function(e, t) {
  return ue.current.useEffect(e, t);
};
P.useId = function() {
  return ue.current.useId();
};
P.useImperativeHandle = function(e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
P.useInsertionEffect = function(e, t) {
  return ue.current.useInsertionEffect(e, t);
};
P.useLayoutEffect = function(e, t) {
  return ue.current.useLayoutEffect(e, t);
};
P.useMemo = function(e, t) {
  return ue.current.useMemo(e, t);
};
P.useReducer = function(e, t, n) {
  return ue.current.useReducer(e, t, n);
};
P.useRef = function(e) {
  return ue.current.useRef(e);
};
P.useState = function(e) {
  return ue.current.useState(e);
};
P.useSyncExternalStore = function(e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
P.useTransition = function() {
  return ue.current.useTransition();
};
P.version = "18.2.0";
(function(e) {
  e.exports = P;
})(J);
var pu = { exports: {} }, mu = {};
(function(e) {
  function t(x, z) {
    var N = x.length;
    x.push(z);
    e:
      for (; 0 < N; ) {
        var A = N - 1 >>> 1, K = x[A];
        if (0 < l(K, z))
          x[A] = z, x[N] = K, N = A;
        else
          break e;
      }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0)
      return null;
    var z = x[0], N = x.pop();
    if (N !== z) {
      x[0] = N;
      e:
        for (var A = 0, K = x.length, rr = K >>> 1; A < rr; ) {
          var vt = 2 * (A + 1) - 1, El = x[vt], bt = vt + 1, lr = x[bt];
          if (0 > l(El, N))
            bt < K && 0 > l(lr, El) ? (x[A] = lr, x[bt] = N, A = bt) : (x[A] = El, x[vt] = N, A = vt);
          else if (bt < K && 0 > l(lr, N))
            x[A] = lr, x[bt] = N, A = bt;
          else
            break e;
        }
    }
    return z;
  }
  function l(x, z) {
    var N = x.sortIndex - z.sortIndex;
    return N !== 0 ? N : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var u = [], c = [], h = 1, m = null, p = 3, b = !1, y = !1, w = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null)
        r(c);
      else if (z.startTime <= x)
        r(c), z.sortIndex = z.expirationTime, t(u, z);
      else
        break;
      z = n(c);
    }
  }
  function g(x) {
    if (w = !1, d(x), !y)
      if (n(u) !== null)
        y = !0, Sl(S);
      else {
        var z = n(c);
        z !== null && xl(g, z.startTime - x);
      }
  }
  function S(x, z) {
    y = !1, w && (w = !1, f(C), C = -1), b = !0;
    var N = p;
    try {
      for (d(z), m = n(u); m !== null && (!(m.expirationTime > z) || x && !ze()); ) {
        var A = m.callback;
        if (typeof A == "function") {
          m.callback = null, p = m.priorityLevel;
          var K = A(m.expirationTime <= z);
          z = e.unstable_now(), typeof K == "function" ? m.callback = K : m === n(u) && r(u), d(z);
        } else
          r(u);
        m = n(u);
      }
      if (m !== null)
        var rr = !0;
      else {
        var vt = n(c);
        vt !== null && xl(g, vt.startTime - z), rr = !1;
      }
      return rr;
    } finally {
      m = null, p = N, b = !1;
    }
  }
  var E = !1, _ = null, C = -1, q = 5, L = -1;
  function ze() {
    return !(e.unstable_now() - L < q);
  }
  function fn() {
    if (_ !== null) {
      var x = e.unstable_now();
      L = x;
      var z = !0;
      try {
        z = _(!0, x);
      } finally {
        z ? dn() : (E = !1, _ = null);
      }
    } else
      E = !1;
  }
  var dn;
  if (typeof s == "function")
    dn = function() {
      s(fn);
    };
  else if (typeof MessageChannel < "u") {
    var Ho = new MessageChannel(), wc = Ho.port2;
    Ho.port1.onmessage = fn, dn = function() {
      wc.postMessage(null);
    };
  } else
    dn = function() {
      D(fn, 0);
    };
  function Sl(x) {
    _ = x, E || (E = !0, dn());
  }
  function xl(x, z) {
    C = D(function() {
      x(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    y || b || (y = !0, Sl(S));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x || (q = 0 < x ? Math.floor(1e3 / x) : 5);
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var N = p;
    p = z;
    try {
      return x();
    } finally {
      p = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, z) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var N = p;
    p = x;
    try {
      return z();
    } finally {
      p = N;
    }
  }, e.unstable_scheduleCallback = function(x, z, N) {
    var A = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? A + N : A) : N = A, x) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = N + K, x = { id: h++, callback: z, priorityLevel: x, startTime: N, expirationTime: K, sortIndex: -1 }, N > A ? (x.sortIndex = N, t(c, x), n(u) === null && x === n(c) && (w ? (f(C), C = -1) : w = !0, xl(g, N - A))) : (x.sortIndex = K, t(u, x), y || b || (y = !0, Sl(S))), x;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(x) {
    var z = p;
    return function() {
      var N = p;
      p = z;
      try {
        return x.apply(this, arguments);
      } finally {
        p = N;
      }
    };
  };
})(mu);
(function(e) {
  e.exports = mu;
})(pu);
var hu = J.exports, be = pu.exports;
function v(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gu = /* @__PURE__ */ new Set(), Rn = {};
function It(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++)
    gu.add(t[e]);
}
var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ea = Object.prototype.hasOwnProperty, Oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xo = {}, Go = {};
function Fc(e) {
  return ea.call(Go, e) ? !0 : ea.call(Xo, e) ? !1 : Oc.test(e) ? Go[e] = !0 : (Xo[e] = !0, !1);
}
function Uc(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bc(e, t, n, r) {
  if (t === null || typeof t > "u" || Uc(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Za = /[\-:]([a-z])/g;
function Ja(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Za, Ja);
  te[t] = new se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Za, Ja);
  te[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Za, Ja);
  te[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eo(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bc(t, n, l, r) && (n = null), r || l === null ? Fc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = hu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, or = Symbol.for("react.element"), Rt = Symbol.for("react.portal"), Ot = Symbol.for("react.fragment"), to = Symbol.for("react.strict_mode"), ta = Symbol.for("react.profiler"), vu = Symbol.for("react.provider"), bu = Symbol.for("react.context"), no = Symbol.for("react.forward_ref"), na = Symbol.for("react.suspense"), ra = Symbol.for("react.suspense_list"), ro = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), yu = Symbol.for("react.offscreen"), Zo = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object" ? null : (e = Zo && e[Zo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var j = Object.assign, Cl;
function kn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = t && t[1] || "";
    }
  return `
` + Cl + e;
}
var zl = !1;
function Nl(e, t) {
  if (!e || zl)
    return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i]; )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (l[o] !== a[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== a[i]) {
                var u = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function jc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Nl(e.type, !1), e;
    case 11:
      return e = Nl(e.type.render, !1), e;
    case 1:
      return e = Nl(e.type, !0), e;
    default:
      return "";
  }
}
function la(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Rt:
      return "Portal";
    case ta:
      return "Profiler";
    case to:
      return "StrictMode";
    case na:
      return "Suspense";
    case ra:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bu:
        return (e.displayName || "Context") + ".Consumer";
      case vu:
        return (e._context.displayName || "Context") + ".Provider";
      case no:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ro:
        return t = e.displayName || null, t !== null ? t : la(e.type) || "Memo";
      case Ge:
        t = e._payload, e = e._init;
        try {
          return la(e(t));
        } catch {
        }
    }
  return null;
}
function Vc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return la(t);
    case 8:
      return t === to ? "StrictMode" : "Mode";
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
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qc(e) {
  var t = wu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = qc(e));
}
function ku(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = wu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Rr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function aa(e, t) {
  var n = t.checked;
  return j({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Su(e, t) {
  t = t.checked, t != null && eo(e, "checked", t, !1);
}
function oa(e, t) {
  Su(e, t);
  var n = dt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && ia(e, t.type, dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ei(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ia(e, t, n) {
  (t !== "number" || Rr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Kt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(v(91));
  return j({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ti(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(v(92));
      if (Sn(n)) {
        if (1 < n.length)
          throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: dt(n) };
}
function xu(e, t) {
  var n = dt(t.value), r = dt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ni(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Eu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Eu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ur, _u = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ur.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Ac = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function(e) {
  Ac.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _n[t] = _n[e];
  });
});
function Cu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _n.hasOwnProperty(e) && _n[e] ? ("" + t).trim() : t + "px";
}
function zu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Cu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var $c = j({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ca(e, t) {
  if (t) {
    if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(v(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(v(62));
  }
}
function fa(e, t) {
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
var da = null;
function lo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pa = null, Yt = null, Xt = null;
function ri(e) {
  if (e = tr(e)) {
    if (typeof pa != "function")
      throw Error(v(280));
    var t = e.stateNode;
    t && (t = sl(t), pa(e.stateNode, e.type, t));
  }
}
function Nu(e) {
  Yt ? Xt ? Xt.push(e) : Xt = [e] : Yt = e;
}
function Pu() {
  if (Yt) {
    var e = Yt, t = Xt;
    if (Xt = Yt = null, ri(e), t)
      for (e = 0; e < t.length; e++)
        ri(t[e]);
  }
}
function Lu(e, t) {
  return e(t);
}
function Tu() {
}
var Pl = !1;
function Iu(e, t, n) {
  if (Pl)
    return e(t, n);
  Pl = !0;
  try {
    return Lu(e, t, n);
  } finally {
    Pl = !1, (Yt !== null || Xt !== null) && (Tu(), Pu());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = sl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(v(231, t, typeof n));
  return n;
}
var ma = !1;
if (We)
  try {
    var mn = {};
    Object.defineProperty(mn, "passive", { get: function() {
      ma = !0;
    } }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
  } catch {
    ma = !1;
  }
function Wc(e, t, n, r, l, a, o, i, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1, Or = null, Fr = !1, ha = null, Hc = { onError: function(e) {
  Cn = !0, Or = e;
} };
function Qc(e, t, n, r, l, a, o, i, u) {
  Cn = !1, Or = null, Wc.apply(Hc, arguments);
}
function Kc(e, t, n, r, l, a, o, i, u) {
  if (Qc.apply(this, arguments), Cn) {
    if (Cn) {
      var c = Or;
      Cn = !1, Or = null;
    } else
      throw Error(v(198));
    Fr || (Fr = !0, ha = c);
  }
}
function Dt(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, (4098 & t.flags) !== 0 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Du(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function li(e) {
  if (Dt(e) !== e)
    throw Error(v(188));
}
function Yc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dt(e), t === null)
      throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var a = l.alternate;
    if (a === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n)
          return li(l), e;
        if (a === r)
          return li(l), t;
        a = a.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return)
      n = l, r = a;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!o)
          throw Error(v(189));
      }
    }
    if (n.alternate !== r)
      throw Error(v(190));
  }
  if (n.tag !== 3)
    throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function Mu(e) {
  return e = Yc(e), e !== null ? Ru(e) : null;
}
function Ru(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ru(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ou = be.unstable_scheduleCallback, ai = be.unstable_cancelCallback, Xc = be.unstable_shouldYield, Gc = be.unstable_requestPaint, $ = be.unstable_now, Zc = be.unstable_getCurrentPriorityLevel, ao = be.unstable_ImmediatePriority, Fu = be.unstable_UserBlockingPriority, Ur = be.unstable_NormalPriority, Jc = be.unstable_LowPriority, Uu = be.unstable_IdlePriority, al = null, Ue = null;
function ef(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(al, e, void 0, (128 & e.current.flags) === 128);
    } catch {
    }
}
var Ie = Math.clz32 ? Math.clz32 : rf, tf = Math.log, nf = Math.LN2;
function rf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tf(e) / nf | 0) | 0;
}
var sr = 64, cr = 4194304;
function xn(e) {
  switch (e & -e) {
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
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Br(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = 268435455 & n;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = xn(i) : (a &= o, a !== 0 && (r = xn(a)));
  } else
    o = n & ~l, o !== 0 ? r = xn(o) : a !== 0 && (r = xn(a));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, a = t & -t, l >= a || l === 16 && (4194240 & a) !== 0))
    return t;
  if ((4 & r) !== 0 && (r |= 16 & n), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function lf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function af(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Ie(a), i = 1 << o, u = l[o];
    u === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = lf(i, t)) : u <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function ga(e) {
  return e = -1073741825 & e.pendingLanes, e !== 0 ? e : 1073741824 & e ? 1073741824 : 0;
}
function Bu() {
  var e = sr;
  return sr <<= 1, (4194240 & sr) === 0 && (sr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Jn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
}
function of(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function oo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function ju(e) {
  return e &= -e, 1 < e ? 4 < e ? (268435455 & e) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Vu, io, qu, Au, $u, va = !1, fr = [], rt = null, lt = null, at = null, Un = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Je = [], uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function oi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bn.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = tr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return rt = hn(rt, e, t, n, r, l), !0;
    case "dragenter":
      return lt = hn(lt, e, t, n, r, l), !0;
    case "mouseover":
      return at = hn(at, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Un.set(a, hn(Un.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Bn.set(a, hn(Bn.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Wu(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Du(n), t !== null) {
          e.blockedOn = t, $u(e.priority, function() {
            qu(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      da = r, n.target.dispatchEvent(r), da = null;
    } else
      return t = tr(n), t !== null && io(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ii(e, t, n) {
  Er(e) && n.delete(t);
}
function cf() {
  va = !1, rt !== null && Er(rt) && (rt = null), lt !== null && Er(lt) && (lt = null), at !== null && Er(at) && (at = null), Un.forEach(ii), Bn.forEach(ii);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, va || (va = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, cf)));
}
function jn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < fr.length) {
    gn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rt !== null && gn(rt, e), lt !== null && gn(lt, e), at !== null && gn(at, e), Un.forEach(t), Bn.forEach(t), n = 0; n < Je.length; n++)
    r = Je[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && (n = Je[0], n.blockedOn === null); )
    Wu(n), n.blockedOn === null && Je.shift();
}
var Gt = Ye.ReactCurrentBatchConfig, jr = !0;
function ff(e, t, n, r) {
  var l = I, a = Gt.transition;
  Gt.transition = null;
  try {
    I = 1, uo(e, t, n, r);
  } finally {
    I = l, Gt.transition = a;
  }
}
function df(e, t, n, r) {
  var l = I, a = Gt.transition;
  Gt.transition = null;
  try {
    I = 4, uo(e, t, n, r);
  } finally {
    I = l, Gt.transition = a;
  }
}
function uo(e, t, n, r) {
  if (jr) {
    var l = ba(e, t, n, r);
    if (l === null)
      jl(e, t, r, Vr, n), oi(e, r);
    else if (sf(l, e, t, n, r))
      r.stopPropagation();
    else if (oi(e, r), 4 & t && -1 < uf.indexOf(e)) {
      for (; l !== null; ) {
        var a = tr(l);
        if (a !== null && Vu(a), a = ba(e, t, n, r), a === null && jl(e, t, r, Vr, n), a === l)
          break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else
      jl(e, t, r, null, n);
  }
}
var Vr = null;
function ba(e, t, n, r) {
  if (Vr = null, e = lo(r), e = St(e), e !== null)
    if (t = Dt(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Du(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Vr = e, null;
}
function Hu(e) {
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
      switch (Zc()) {
        case ao:
          return 1;
        case Fu:
          return 4;
        case Ur:
        case Jc:
          return 16;
        case Uu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null, so = null, _r = null;
function Qu() {
  if (_r)
    return _r;
  var e, t = so, n = t.length, r, l = "value" in tt ? tt.value : tt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++)
    ;
  return _r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Cr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dr() {
  return !0;
}
function ui() {
  return !1;
}
function we(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e)
      e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? dr : ui, this.isPropagationStopped = ui, this;
  }
  return j(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = dr);
  }, persist: function() {
  }, isPersistent: dr }), t;
}
var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, co = we(sn), er = j({}, sn, { view: 0, detail: 0 }), pf = we(er), Tl, Il, vn, ol = j({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (Tl = e.screenX - vn.screenX, Il = e.screenY - vn.screenY) : Il = Tl = 0, vn = e), Tl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), si = we(ol), mf = j({}, ol, { dataTransfer: 0 }), hf = we(mf), gf = j({}, er, { relatedTarget: 0 }), Dl = we(gf), vf = j({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = we(vf), yf = j({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wf = we(yf), kf = j({}, sn, { data: 0 }), ci = we(kf), Sf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _f(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function fo() {
  return _f;
}
var Cf = j({}, er, { key: function(e) {
  if (e.key) {
    var t = Sf[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fo, charCode: function(e) {
  return e.type === "keypress" ? Cr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zf = we(Cf), Nf = j({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fi = we(Nf), Pf = j({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fo }), Lf = we(Pf), Tf = j({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), If = we(Tf), Df = j({}, ol, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Mf = we(Df), Rf = [9, 13, 27, 32], po = We && "CompositionEvent" in window, zn = null;
We && "documentMode" in document && (zn = document.documentMode);
var Of = We && "TextEvent" in window && !zn, Ku = We && (!po || zn && 8 < zn && 11 >= zn), di = String.fromCharCode(32), pi = !1;
function Yu(e, t) {
  switch (e) {
    case "keyup":
      return Rf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function Ff(e, t) {
  switch (e) {
    case "compositionend":
      return Xu(t);
    case "keypress":
      return t.which !== 32 ? null : (pi = !0, di);
    case "textInput":
      return e = t.data, e === di && pi ? null : e;
    default:
      return null;
  }
}
function Uf(e, t) {
  if (Ft)
    return e === "compositionend" || !po && Yu(e, t) ? (e = Qu(), _r = so = tt = null, Ft = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ku && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bf[e.type] : t === "textarea";
}
function Gu(e, t, n, r) {
  Nu(r), t = qr(t, "onChange"), 0 < t.length && (n = new co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nn = null, Vn = null;
function jf(e) {
  us(e, 0);
}
function il(e) {
  var t = jt(e);
  if (ku(t))
    return e;
}
function Vf(e, t) {
  if (e === "change")
    return t;
}
var Zu = !1;
if (We) {
  var Ml;
  if (We) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var hi = document.createElement("div");
      hi.setAttribute("oninput", "return;"), Rl = typeof hi.oninput == "function";
    }
    Ml = Rl;
  } else
    Ml = !1;
  Zu = Ml && (!document.documentMode || 9 < document.documentMode);
}
function gi() {
  Nn && (Nn.detachEvent("onpropertychange", Ju), Vn = Nn = null);
}
function Ju(e) {
  if (e.propertyName === "value" && il(Vn)) {
    var t = [];
    Gu(t, Vn, e, lo(e)), Iu(jf, t);
  }
}
function qf(e, t, n) {
  e === "focusin" ? (gi(), Nn = t, Vn = n, Nn.attachEvent("onpropertychange", Ju)) : e === "focusout" && gi();
}
function Af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(Vn);
}
function $f(e, t) {
  if (e === "click")
    return il(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change")
    return il(t);
}
function Hf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Me = typeof Object.is == "function" ? Object.is : Hf;
function qn(e, t) {
  if (Me(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ea.call(t, l) || !Me(e[l], t[l]))
      return !1;
  }
  return !0;
}
function vi(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function bi(e, t) {
  var n = vi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vi(n);
  }
}
function es(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? es(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1;
}
function ts() {
  for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Rr(e.document);
  }
  return t;
}
function mo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Qf(e) {
  var t = ts(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && es(n.ownerDocument.documentElement, n)) {
    if (r !== null && mo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = bi(n, a);
        var o = bi(n, r);
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Kf = We && "documentMode" in document && 11 >= document.documentMode, Ut = null, ya = null, Pn = null, wa = !1;
function yi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wa || Ut == null || Ut !== Rr(r) || (r = Ut, "selectionStart" in r && mo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pn && qn(Pn, r) || (Pn = r, r = qr(ya, "onSelect"), 0 < r.length && (t = new co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ut)));
}
function pr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bt = { animationend: pr("Animation", "AnimationEnd"), animationiteration: pr("Animation", "AnimationIteration"), animationstart: pr("Animation", "AnimationStart"), transitionend: pr("Transition", "TransitionEnd") }, Ol = {}, ns = {};
We && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
function ul(e) {
  if (Ol[e])
    return Ol[e];
  if (!Bt[e])
    return e;
  var t = Bt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ns)
      return Ol[e] = t[n];
  return e;
}
var rs = ul("animationend"), ls = ul("animationiteration"), as = ul("animationstart"), os = ul("transitionend"), is = /* @__PURE__ */ new Map(), wi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
  is.set(e, t), It(t, [e]);
}
for (var Fl = 0; Fl < wi.length; Fl++) {
  var Ul = wi[Fl], Yf = Ul.toLowerCase(), Xf = Ul[0].toUpperCase() + Ul.slice(1);
  mt(Yf, "on" + Xf);
}
mt(rs, "onAnimationEnd");
mt(ls, "onAnimationIteration");
mt(as, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(os, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function ki(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kc(r, t, void 0, e), e.currentTarget = null;
}
function us(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], u = i.instance, c = i.currentTarget;
          if (i = i.listener, u !== a && l.isPropagationStopped())
            break e;
          ki(l, i, c), a = u;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (i = r[o], u = i.instance, c = i.currentTarget, i = i.listener, u !== a && l.isPropagationStopped())
            break e;
          ki(l, i, c), a = u;
        }
    }
  }
  if (Fr)
    throw e = ha, Fr = !1, ha = null, e;
}
function R(e, t) {
  var n = t[_a];
  n === void 0 && (n = t[_a] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ss(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ss(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[mr]) {
    e[mr] = !0, gu.forEach(function(n) {
      n !== "selectionchange" && (Gf.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || (t[mr] = !0, Bl("selectionchange", !1, t));
  }
}
function ss(e, t, n, r) {
  switch (Hu(t)) {
    case 1:
      var l = ff;
      break;
    case 4:
      l = df;
      break;
    default:
      l = uo;
  }
  n = l.bind(null, t, n, e), l = void 0, !ma || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function jl(e, t, n, r, l) {
  var a = r;
  if ((1 & t) === 0 && (2 & t) === 0 && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || i.nodeType === 8 && i.parentNode === l)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var u = o.tag;
              if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l))
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (o = St(i), o === null)
              return;
            if (u = o.tag, u === 5 || u === 6) {
              r = a = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
  Iu(function() {
    var c = a, h = lo(n), m = [];
    e: {
      var p = is.get(e);
      if (p !== void 0) {
        var b = co, y = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            b = zf;
            break;
          case "focusin":
            y = "focus", b = Dl;
            break;
          case "focusout":
            y = "blur", b = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            b = Dl;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = si;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Lf;
            break;
          case rs:
          case ls:
          case as:
            b = bf;
            break;
          case os:
            b = If;
            break;
          case "scroll":
            b = pf;
            break;
          case "wheel":
            b = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = wf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = fi;
        }
        var w = (4 & t) !== 0, D = !w && e === "scroll", f = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Fn(s, f), g != null && w.push($n(s, g, d)))), D)
            break;
          s = s.return;
        }
        0 < w.length && (p = new b(p, y, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if ((7 & t) === 0) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", p && n !== da && (y = n.relatedTarget || n.fromElement) && (St(y) || y[He]))
          break e;
        if ((b || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, b ? (y = n.relatedTarget || n.toElement, b = c, y = y ? St(y) : null, y !== null && (D = Dt(y), y !== D || y.tag !== 5 && y.tag !== 6) && (y = null)) : (b = null, y = c), b !== y)) {
          if (w = si, g = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = fi, g = "onPointerLeave", f = "onPointerEnter", s = "pointer"), D = b == null ? p : jt(b), d = y == null ? p : jt(y), p = new w(g, s + "leave", b, n, h), p.target = D, p.relatedTarget = d, g = null, St(h) === c && (w = new w(f, s + "enter", y, n, h), w.target = d, w.relatedTarget = D, g = w), D = g, b && y)
            t: {
              for (w = b, f = y, s = 0, d = w; d; d = Mt(d))
                s++;
              for (d = 0, g = f; g; g = Mt(g))
                d++;
              for (; 0 < s - d; )
                w = Mt(w), s--;
              for (; 0 < d - s; )
                f = Mt(f), d--;
              for (; s--; ) {
                if (w === f || f !== null && w === f.alternate)
                  break t;
                w = Mt(w), f = Mt(f);
              }
              w = null;
            }
          else
            w = null;
          b !== null && Si(m, p, b, w, !1), y !== null && D !== null && Si(m, D, y, w, !0);
        }
      }
      e: {
        if (p = c ? jt(c) : window, b = p.nodeName && p.nodeName.toLowerCase(), b === "select" || b === "input" && p.type === "file")
          var S = Vf;
        else if (mi(p))
          if (Zu)
            S = Wf;
          else {
            S = Af;
            var E = qf;
          }
        else
          (b = p.nodeName) && b.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = $f);
        if (S && (S = S(e, c))) {
          Gu(m, S, n, h);
          break e;
        }
        E && E(e, p, c), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && ia(p, "number", p.value);
      }
      switch (E = c ? jt(c) : window, e) {
        case "focusin":
          (mi(E) || E.contentEditable === "true") && (Ut = E, ya = c, Pn = null);
          break;
        case "focusout":
          Pn = ya = Ut = null;
          break;
        case "mousedown":
          wa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wa = !1, yi(m, n, h);
          break;
        case "selectionchange":
          if (Kf)
            break;
        case "keydown":
        case "keyup":
          yi(m, n, h);
      }
      var _;
      if (po)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Ft ? Yu(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Ku && n.locale !== "ko" && (Ft || C !== "onCompositionStart" ? C === "onCompositionEnd" && Ft && (_ = Qu()) : (tt = h, so = "value" in tt ? tt.value : tt.textContent, Ft = !0)), E = qr(c, C), 0 < E.length && (C = new ci(C, e, null, n, h), m.push({ event: C, listeners: E }), _ ? C.data = _ : (_ = Xu(n), _ !== null && (C.data = _)))), (_ = Of ? Ff(e, n) : Uf(e, n)) && (c = qr(c, "onBeforeInput"), 0 < c.length && (h = new ci("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    us(m, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Fn(e, n), a != null && r.unshift($n(e, a, l)), a = Fn(e, t), a != null && r.push($n(e, a, l))), e = e.return;
  }
  return r;
}
function Mt(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Si(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, u = i.alternate, c = i.stateNode;
    if (u !== null && u === r)
      break;
    i.tag === 5 && c !== null && (i = c, l ? (u = Fn(n, a), u != null && o.unshift($n(n, u, i))) : l || (u = Fn(n, a), u != null && o.push($n(n, u, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Zf = /\r\n?/g, Jf = /\u0000|\uFFFD/g;
function xi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zf, `
`).replace(Jf, "");
}
function hr(e, t, n) {
  if (t = xi(t), xi(e) !== t && n)
    throw Error(v(425));
}
function Ar() {
}
var ka = null, Sa = null;
function xa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ea = typeof setTimeout == "function" ? setTimeout : void 0, ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Ei = typeof Promise == "function" ? Promise : void 0, td = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ei < "u" ? function(e) {
  return Ei.resolve(null).then(e).catch(nd);
} : Ea;
function nd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Vl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), jn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  jn(t);
}
function ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function _i(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + cn, Wn = "__reactProps$" + cn, He = "__reactContainer$" + cn, _a = "__reactEvents$" + cn, rd = "__reactListeners$" + cn, ld = "__reactHandles$" + cn;
function St(e) {
  var t = e[Fe];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[He] || n[Fe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = _i(e); e !== null; ) {
          if (n = e[Fe])
            return n;
          e = _i(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tr(e) {
  return e = e[Fe] || e[He], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(v(33));
}
function sl(e) {
  return e[Wn] || null;
}
var Ca = [], Vt = -1;
function ht(e) {
  return { current: e };
}
function O(e) {
  0 > Vt || (e.current = Ca[Vt], Ca[Vt] = null, Vt--);
}
function M(e, t) {
  Vt++, Ca[Vt] = e.current, e.current = t;
}
var pt = {}, ae = ht(pt), de = ht(!1), zt = pt;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n)
    l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function $r() {
  O(de), O(ae);
}
function Ci(e, t, n) {
  if (ae.current !== pt)
    throw Error(v(168));
  M(ae, t), M(de, n);
}
function cs(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(v(108, Vc(e) || "Unknown", l));
  return j({}, n, r);
}
function Wr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, zt = ae.current, M(ae, e), M(de, de.current), !0;
}
function zi(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(v(169));
  n ? (e = cs(e, t, zt), r.__reactInternalMemoizedMergedChildContext = e, O(de), O(ae), M(ae, e)) : O(de), M(de, n);
}
var Ve = null, cl = !1, ql = !1;
function fs(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
function ad(e) {
  cl = !0, fs(e);
}
function gt() {
  if (!ql && Ve !== null) {
    ql = !0;
    var e = 0, t = I;
    try {
      var n = Ve;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ve = null, cl = !1;
    } catch (l) {
      throw Ve !== null && (Ve = Ve.slice(e + 1)), Ou(ao, gt), l;
    } finally {
      I = t, ql = !1;
    }
  }
  return null;
}
var qt = [], At = 0, Hr = null, Qr = 0, ke = [], Se = 0, Nt = null, qe = 1, Ae = "";
function wt(e, t) {
  qt[At++] = Qr, qt[At++] = Hr, Hr = e, Qr = t;
}
function ds(e, t, n) {
  ke[Se++] = qe, ke[Se++] = Ae, ke[Se++] = Nt, Nt = e;
  var r = qe;
  e = Ae;
  var l = 32 - Ie(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - Ie(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, qe = 1 << 32 - Ie(t) + l | n << l | r, Ae = a + e;
  } else
    qe = 1 << a | n << l | r, Ae = e;
}
function ho(e) {
  e.return !== null && (wt(e, 1), ds(e, 1, 0));
}
function go(e) {
  for (; e === Hr; )
    Hr = qt[--At], qt[At] = null, Qr = qt[--At], qt[At] = null;
  for (; e === Nt; )
    Nt = ke[--Se], ke[Se] = null, Ae = ke[--Se], ke[Se] = null, qe = ke[--Se], ke[Se] = null;
}
var ve = null, ge = null, F = !1, Te = null;
function ps(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ni(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nt !== null ? { id: qe, overflow: Ae } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function za(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function Na(e) {
  if (F) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Ni(e, t)) {
        if (za(e))
          throw Error(v(418));
        t = ot(n.nextSibling);
        var r = ve;
        t && Ni(e, t) ? ps(r, n) : (e.flags = -4097 & e.flags | 2, F = !1, ve = e);
      }
    } else {
      if (za(e))
        throw Error(v(418));
      e.flags = -4097 & e.flags | 2, F = !1, ve = e;
    }
  }
}
function Pi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function gr(e) {
  if (e !== ve)
    return !1;
  if (!F)
    return Pi(e), F = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps)), t && (t = ge)) {
    if (za(e))
      throw ms(), Error(v(418));
    for (; t; )
      ps(e, t), t = ot(t.nextSibling);
  }
  if (Pi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = ot(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else
    ge = ve ? ot(e.stateNode.nextSibling) : null;
  return !0;
}
function ms() {
  for (var e = ge; e; )
    e = ot(e.nextSibling);
}
function nn() {
  ge = ve = null, F = !1;
}
function vo(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var od = Ye.ReactCurrentBatchConfig;
function Pe(e, t) {
  if (e && e.defaultProps) {
    t = j({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kr = ht(null), Yr = null, $t = null, bo = null;
function yo() {
  bo = $t = Yr = null;
}
function wo(e) {
  var t = Kr.current;
  O(Kr), e._currentValue = t;
}
function Pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  Yr = e, bo = $t = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (bo !== e)
    if (e = { context: e, memoizedValue: t, next: null }, $t === null) {
      if (Yr === null)
        throw Error(v(308));
      $t = e, Yr.dependencies = { lanes: 0, firstContext: e };
    } else
      $t = $t.next = e;
  return t;
}
var xt = null;
function ko(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function hs(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ko(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Qe(e, r);
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ze = !1;
function So(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gs(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $e(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function it(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (2 & T) !== 0) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ko(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Qe(e, n);
}
function zr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (4194240 & n) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oo(e, n);
  }
}
function Li(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else
      l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Xr(e, t, n, r) {
  var l = e.updateQueue;
  Ze = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var u = i, c = u.next;
    u.next = null, o === null ? a = c : o.next = c, o = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = c : i.next = c, h.lastBaseUpdate = u));
  }
  if (a !== null) {
    var m = l.baseState;
    o = 0, h = c = u = null, i = a;
    do {
      var p = i.lane, b = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = { eventTime: b, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
        e: {
          var y = e, w = i;
          switch (p = t, b = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                m = y.call(b, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = -65537 & y.flags | 128;
            case 0:
              if (y = w.payload, p = typeof y == "function" ? y.call(b, m, p) : y, p == null)
                break e;
              m = j({}, m, p);
              break e;
            case 2:
              Ze = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else
        b = { eventTime: b, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = b, u = m) : h = h.next = b, o |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null)
          break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (u = m), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else
      a === null && (l.shared.lanes = 0);
    Lt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Ti(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(v(191, l));
        l.call(r);
      }
    }
}
var vs = new hu.Component().refs;
function La(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = st(e), a = $e(r, l);
  a.payload = t, n != null && (a.callback = n), t = it(e, a, l), t !== null && (De(t, e, l, r), zr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = st(e), a = $e(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = it(e, a, l), t !== null && (De(t, e, l, r), zr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = st(e), l = $e(n, r);
  l.tag = 2, t != null && (l.callback = t), t = it(e, l, r), t !== null && (De(t, e, r, n), zr(t, e, r));
} };
function Ii(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, a) : !0;
}
function bs(e, t, n) {
  var r = !1, l = pt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = _e(a) : (l = pe(t) ? zt : ae.current, r = t.contextTypes, a = (r = r != null) ? tn(e, l) : pt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Di(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Ta(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = vs, So(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = _e(a) : (a = pe(t) ? zt : ae.current, l.context = tn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (La(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(v(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        i === vs && (i = l.refs = {}), o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string")
      throw Error(v(284));
    if (!n._owner)
      throw Error(v(290, e));
  }
  return e;
}
function vr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mi(e) {
  var t = e._init;
  return t(e._payload);
}
function ys(e) {
  function t(f, s) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [s], f.flags |= 16) : d.push(s);
    }
  }
  function n(f, s) {
    if (!e)
      return null;
    for (; s !== null; )
      t(f, s), s = s.sibling;
    return null;
  }
  function r(f, s) {
    for (f = /* @__PURE__ */ new Map(); s !== null; )
      s.key !== null ? f.set(s.key, s) : f.set(s.index, s), s = s.sibling;
    return f;
  }
  function l(f, s) {
    return f = ct(f, s), f.index = 0, f.sibling = null, f;
  }
  function a(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, s, d, g) {
    return s === null || s.tag !== 6 ? (s = Yl(d, f.mode, g), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function u(f, s, d, g) {
    var S = d.type;
    return S === Ot ? h(f, s, d.props.children, g, d.key) : s !== null && (s.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ge && Mi(S) === s.type) ? (g = l(s, d.props), g.ref = bn(f, s, d), g.return = f, g) : (g = Dr(d.type, d.key, d.props, null, f.mode, g), g.ref = bn(f, s, d), g.return = f, g);
  }
  function c(f, s, d, g) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Xl(d, f.mode, g), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, g, S) {
    return s === null || s.tag !== 7 ? (s = Ct(d, f.mode, g, S), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function m(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number")
      return s = Yl("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case or:
          return d = Dr(s.type, s.key, s.props, null, f.mode, d), d.ref = bn(f, null, s), d.return = f, d;
        case Rt:
          return s = Xl(s, f.mode, d), s.return = f, s;
        case Ge:
          var g = s._init;
          return m(f, g(s._payload), d);
      }
      if (Sn(s) || pn(s))
        return s = Ct(s, f.mode, d, null), s.return = f, s;
      vr(f, s);
    }
    return null;
  }
  function p(f, s, d, g) {
    var S = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : i(f, s, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === S ? u(f, s, d, g) : null;
        case Rt:
          return d.key === S ? c(f, s, d, g) : null;
        case Ge:
          return S = d._init, p(f, s, S(d._payload), g);
      }
      if (Sn(d) || pn(d))
        return S !== null ? null : h(f, s, d, g, null);
      vr(f, d);
    }
    return null;
  }
  function b(f, s, d, g, S) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return f = f.get(d) || null, i(s, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case or:
          return f = f.get(g.key === null ? d : g.key) || null, u(s, f, g, S);
        case Rt:
          return f = f.get(g.key === null ? d : g.key) || null, c(s, f, g, S);
        case Ge:
          var E = g._init;
          return b(f, s, d, E(g._payload), S);
      }
      if (Sn(g) || pn(g))
        return f = f.get(d) || null, h(s, f, g, S, null);
      vr(s, g);
    }
    return null;
  }
  function y(f, s, d, g) {
    for (var S = null, E = null, _ = s, C = s = 0, q = null; _ !== null && C < d.length; C++) {
      _.index > C ? (q = _, _ = null) : q = _.sibling;
      var L = p(f, _, d[C], g);
      if (L === null) {
        _ === null && (_ = q);
        break;
      }
      e && _ && L.alternate === null && t(f, _), s = a(L, s, C), E === null ? S = L : E.sibling = L, E = L, _ = q;
    }
    if (C === d.length)
      return n(f, _), F && wt(f, C), S;
    if (_ === null) {
      for (; C < d.length; C++)
        _ = m(f, d[C], g), _ !== null && (s = a(_, s, C), E === null ? S = _ : E.sibling = _, E = _);
      return F && wt(f, C), S;
    }
    for (_ = r(f, _); C < d.length; C++)
      q = b(_, f, C, d[C], g), q !== null && (e && q.alternate !== null && _.delete(q.key === null ? C : q.key), s = a(q, s, C), E === null ? S = q : E.sibling = q, E = q);
    return e && _.forEach(function(ze) {
      return t(f, ze);
    }), F && wt(f, C), S;
  }
  function w(f, s, d, g) {
    var S = pn(d);
    if (typeof S != "function")
      throw Error(v(150));
    if (d = S.call(d), d == null)
      throw Error(v(151));
    for (var E = S = null, _ = s, C = s = 0, q = null, L = d.next(); _ !== null && !L.done; C++, L = d.next()) {
      _.index > C ? (q = _, _ = null) : q = _.sibling;
      var ze = p(f, _, L.value, g);
      if (ze === null) {
        _ === null && (_ = q);
        break;
      }
      e && _ && ze.alternate === null && t(f, _), s = a(ze, s, C), E === null ? S = ze : E.sibling = ze, E = ze, _ = q;
    }
    if (L.done)
      return n(f, _), F && wt(f, C), S;
    if (_ === null) {
      for (; !L.done; C++, L = d.next())
        L = m(f, L.value, g), L !== null && (s = a(L, s, C), E === null ? S = L : E.sibling = L, E = L);
      return F && wt(f, C), S;
    }
    for (_ = r(f, _); !L.done; C++, L = d.next())
      L = b(_, f, C, L.value, g), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? C : L.key), s = a(L, s, C), E === null ? S = L : E.sibling = L, E = L);
    return e && _.forEach(function(fn) {
      return t(f, fn);
    }), F && wt(f, C), S;
  }
  function D(f, s, d, g) {
    if (typeof d == "object" && d !== null && d.type === Ot && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var S = d.key, E = s; E !== null; ) {
              if (E.key === S) {
                if (S = d.type, S === Ot) {
                  if (E.tag === 7) {
                    n(f, E.sibling), s = l(E, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ge && Mi(S) === E.type) {
                  n(f, E.sibling), s = l(E, d.props), s.ref = bn(f, E, d), s.return = f, f = s;
                  break e;
                }
                n(f, E);
                break;
              } else
                t(f, E);
              E = E.sibling;
            }
            d.type === Ot ? (s = Ct(d.props.children, f.mode, g, d.key), s.return = f, f = s) : (g = Dr(d.type, d.key, d.props, null, f.mode, g), g.ref = bn(f, s, d), g.return = f, f = g);
          }
          return o(f);
        case Rt:
          e: {
            for (E = d.key; s !== null; ) {
              if (s.key === E)
                if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                  n(f, s.sibling), s = l(s, d.children || []), s.return = f, f = s;
                  break e;
                } else {
                  n(f, s);
                  break;
                }
              else
                t(f, s);
              s = s.sibling;
            }
            s = Xl(d, f.mode, g), s.return = f, f = s;
          }
          return o(f);
        case Ge:
          return E = d._init, D(f, s, E(d._payload), g);
      }
      if (Sn(d))
        return y(f, s, d, g);
      if (pn(d))
        return w(f, s, d, g);
      vr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (n(f, s.sibling), s = l(s, d), s.return = f, f = s) : (n(f, s), s = Yl(d, f.mode, g), s.return = f, f = s), o(f)) : n(f, s);
  }
  return D;
}
var rn = ys(!0), ws = ys(!1), nr = {}, Be = ht(nr), Hn = ht(nr), Qn = ht(nr);
function Et(e) {
  if (e === nr)
    throw Error(v(174));
  return e;
}
function xo(e, t) {
  switch (M(Qn, t), M(Hn, e), M(Be, nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = sa(t, e);
  }
  O(Be), M(Be, t);
}
function ln() {
  O(Be), O(Hn), O(Qn);
}
function ks(e) {
  Et(Qn.current);
  var t = Et(Be.current), n = sa(t, e.type);
  t !== n && (M(Hn, e), M(Be, n));
}
function Eo(e) {
  Hn.current === e && (O(Be), O(Hn));
}
var U = ht(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((128 & t.flags) !== 0)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Al = [];
function _o() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Nr = Ye.ReactCurrentDispatcher, $l = Ye.ReactCurrentBatchConfig, Pt = 0, B = null, H = null, X = null, Zr = !1, Ln = !1, Kn = 0, id = 0;
function ne() {
  throw Error(v(321));
}
function Co(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n]))
      return !1;
  return !0;
}
function zo(e, t, n, r, l, a) {
  if (Pt = a, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nr.current = e === null || e.memoizedState === null ? fd : dd, e = n(r, l), Ln) {
    a = 0;
    do {
      if (Ln = !1, Kn = 0, 25 <= a)
        throw Error(v(301));
      a += 1, X = H = null, t.updateQueue = null, Nr.current = pd, e = n(r, l);
    } while (Ln);
  }
  if (Nr.current = Jr, t = H !== null && H.next !== null, Pt = 0, X = H = B = null, Zr = !1, t)
    throw Error(v(300));
  return e;
}
function No() {
  var e = Kn !== 0;
  return Kn = 0, e;
}
function Oe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? B.memoizedState = X = e : X = X.next = e, X;
}
function Ce() {
  if (H === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = H.next;
  var t = X === null ? B.memoizedState : X.next;
  if (t !== null)
    X = t, H = e;
  else {
    if (e === null)
      throw Error(v(310));
    H = e, e = { memoizedState: H.memoizedState, baseState: H.baseState, baseQueue: H.baseQueue, queue: H.queue, next: null }, X === null ? B.memoizedState = X = e : X = X.next = e;
  }
  return X;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = Ce(), n = t.queue;
  if (n === null)
    throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = H, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, u = null, c = a;
    do {
      var h = c.lane;
      if ((Pt & h) === h)
        u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = { lane: h, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        u === null ? (i = u = m, o = r) : u = u.next = m, B.lanes |= h, Lt |= h;
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? o = r : u.next = i, Me(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, B.lanes |= a, Lt |= a, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = Ce(), n = t.queue;
  if (n === null)
    throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    Me(a, t.memoizedState) || (fe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Ss() {
}
function xs(e, t) {
  var n = B, r = Ce(), l = t(), a = !Me(r.memoizedState, l);
  if (a && (r.memoizedState = l, fe = !0), r = r.queue, Po(Cs.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || X !== null && 1 & X.memoizedState.tag) {
    if (n.flags |= 2048, Xn(9, _s.bind(null, n, r, l, t), void 0, null), G === null)
      throw Error(v(349));
    (30 & Pt) !== 0 || Es(n, t, l);
  }
  return l;
}
function Es(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _s(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zs(t) && Ns(e);
}
function Cs(e, t, n) {
  return n(function() {
    zs(t) && Ns(e);
  });
}
function zs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Ns(e) {
  var t = Qe(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ri(e) {
  var t = Oe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = cd.bind(null, B, e), [t.memoizedState, e];
}
function Xn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ps() {
  return Ce().memoizedState;
}
function Pr(e, t, n, r) {
  var l = Oe();
  B.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r);
}
function dl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (H !== null) {
    var o = H.memoizedState;
    if (a = o.destroy, r !== null && Co(r, o.deps)) {
      l.memoizedState = Xn(t, n, a, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = Xn(1 | t, n, a, r);
}
function Oi(e, t) {
  return Pr(8390656, 8, e, t);
}
function Po(e, t) {
  return dl(2048, 8, e, t);
}
function Ls(e, t) {
  return dl(4, 2, e, t);
}
function Ts(e, t) {
  return dl(4, 4, e, t);
}
function Is(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Ds(e, t, n) {
  return n = n != null ? n.concat([e]) : null, dl(4, 4, Is.bind(null, t, e), n);
}
function Lo() {
}
function Ms(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rs(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Os(e, t, n) {
  return (21 & Pt) === 0 ? (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n) : (Me(n, t) || (n = Bu(), B.lanes |= n, Lt |= n, e.baseState = !0), t);
}
function ud(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, $l.transition = r;
  }
}
function Fs() {
  return Ce().memoizedState;
}
function sd(e, t, n) {
  var r = st(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Us(e))
    Bs(t, n);
  else if (n = hs(e, t, n, r), n !== null) {
    var l = ie();
    De(n, e, r, l), js(n, t, r);
  }
}
function cd(e, t, n) {
  var r = st(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Us(e))
    Bs(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
      try {
        var o = t.lastRenderedState, i = a(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, Me(i, o)) {
          var u = t.interleaved;
          u === null ? (l.next = l, ko(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
    n = hs(e, t, l, r), n !== null && (l = ie(), De(n, e, r, l), js(n, t, r));
  }
}
function Us(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function Bs(e, t) {
  Ln = Zr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function js(e, t, n) {
  if ((4194240 & n) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oo(e, n);
  }
}
var Jr = { readContext: _e, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, fd = { readContext: _e, useCallback: function(e, t) {
  return Oe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Oi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pr(4194308, 4, Is.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Pr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Oe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Oe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sd.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Oe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ri, useDebugValue: Lo, useDeferredValue: function(e) {
  return Oe().memoizedState = e;
}, useTransition: function() {
  var e = Ri(!1), t = e[0];
  return e = ud.bind(null, e[1]), Oe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = Oe();
  if (F) {
    if (n === void 0)
      throw Error(v(407));
    n = n();
  } else {
    if (n = t(), G === null)
      throw Error(v(349));
    (30 & Pt) !== 0 || Es(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Oi(Cs.bind(null, r, a, e), [e]), r.flags |= 2048, Xn(9, _s.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Oe(), t = G.identifierPrefix;
  if (F) {
    var n = Ae, r = qe;
    n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = id++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dd = { readContext: _e, useCallback: Ms, useContext: _e, useEffect: Po, useImperativeHandle: Ds, useInsertionEffect: Ls, useLayoutEffect: Ts, useMemo: Rs, useReducer: Wl, useRef: Ps, useState: function() {
  return Wl(Yn);
}, useDebugValue: Lo, useDeferredValue: function(e) {
  var t = Ce();
  return Os(t, H.memoizedState, e);
}, useTransition: function() {
  var e = Wl(Yn)[0], t = Ce().memoizedState;
  return [e, t];
}, useMutableSource: Ss, useSyncExternalStore: xs, useId: Fs, unstable_isNewReconciler: !1 }, pd = { readContext: _e, useCallback: Ms, useContext: _e, useEffect: Po, useImperativeHandle: Ds, useInsertionEffect: Ls, useLayoutEffect: Ts, useMemo: Rs, useReducer: Hl, useRef: Ps, useState: function() {
  return Hl(Yn);
}, useDebugValue: Lo, useDeferredValue: function(e) {
  var t = Ce();
  return H === null ? t.memoizedState = e : Os(t, H.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Yn)[0], t = Ce().memoizedState;
  return [e, t];
}, useMutableSource: Ss, useSyncExternalStore: xs, useId: Fs, unstable_isNewReconciler: !1 };
function an(e, t) {
  try {
    var n = "", r = t;
    do
      n += jc(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function Ia(e, t) {
  try {
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var md = typeof WeakMap == "function" ? WeakMap : Map;
function Vs(e, t, n) {
  n = $e(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    tl || (tl = !0, qa = r), Ia(e, t);
  }, n;
}
function qs(e, t, n) {
  n = $e(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ia(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ia(e, t), typeof r != "function" && (ut === null ? ut = /* @__PURE__ */ new Set([this]) : ut.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Fi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new md();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Nd.bind(null, e, t, n), t.then(e, e));
}
function Ui(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bi(e, t, n, r, l) {
  return (1 & e.mode) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $e(-1, 1), t.tag = 2, it(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
}
var hd = Ye.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ws(t, null, n, r) : rn(t, e.child, n, r);
}
function ji(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Zt(t, l), r = zo(e, t, n, r, a, l), n = No(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : (F && n && ho(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Vi(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Uo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, As(e, t, a, r, l)) : (e = Dr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, (e.lanes & l) === 0) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref)
      return Ke(e, t, l);
  }
  return t.flags |= 1, e = ct(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function As(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qn(a, r) && e.ref === t.ref)
      if (fe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0)
        (131072 & e.flags) !== 0 && (fe = !0);
      else
        return t.lanes = e.lanes, Ke(e, t, l);
  }
  return Da(e, t, n, r, l);
}
function $s(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((1 & t.mode) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Ht, he), he |= n;
    else {
      if ((1073741824 & n) === 0)
        return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(Ht, he), he |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, M(Ht, he), he |= r;
    }
  else
    a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, M(Ht, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Ws(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Da(e, t, n, r, l) {
  var a = pe(n) ? zt : ae.current;
  return a = tn(t, a), Zt(t, l), n = zo(e, t, n, r, a, l), r = No(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : (F && r && ho(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function qi(e, t, n, r, l) {
  if (pe(n)) {
    var a = !0;
    Wr(t);
  } else
    a = !1;
  if (Zt(t, l), t.stateNode === null)
    Lr(e, t), bs(t, n, r), Ta(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var u = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = _e(c) : (c = pe(n) ? zt : ae.current, c = tn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || u !== c) && Di(t, o, r, c), Ze = !1;
    var p = t.memoizedState;
    o.state = p, Xr(t, r, o, l), u = t.memoizedState, i !== r || p !== u || de.current || Ze ? (typeof h == "function" && (La(t, n, h, r), u = t.memoizedState), (i = Ze || Ii(t, n, i, r, p, u, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = c, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, gs(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : Pe(t.type, i), o.props = c, m = t.pendingProps, p = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = _e(u) : (u = pe(n) ? zt : ae.current, u = tn(t, u));
    var b = n.getDerivedStateFromProps;
    (h = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== u) && Di(t, o, r, u), Ze = !1, p = t.memoizedState, o.state = p, Xr(t, r, o, l);
    var y = t.memoizedState;
    i !== m || p !== y || de.current || Ze ? (typeof b == "function" && (La(t, n, b, r), y = t.memoizedState), (c = Ze || Ii(t, n, c, r, p, y, u) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = u, r = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ma(e, t, n, r, a, l);
}
function Ma(e, t, n, r, l, a) {
  Ws(e, t);
  var o = (128 & t.flags) !== 0;
  if (!r && !o)
    return l && zi(t, n, !1), Ke(e, t, a);
  r = t.stateNode, hd.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = rn(t, e.child, null, a), t.child = rn(t, null, i, a)) : oe(e, t, i, a), t.memoizedState = r.state, l && zi(t, n, !0), t.child;
}
function Hs(e) {
  var t = e.stateNode;
  t.pendingContext ? Ci(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ci(e, t.context, !1), xo(e, t.containerInfo);
}
function Ai(e, t, n, r, l) {
  return nn(), vo(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qs(e, t, n) {
  var r = t.pendingProps, l = U.current, a = !1, o = (128 & t.flags) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (2 & l) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, 1 & l), e === null)
    return Na(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((1 & t.mode) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, (1 & r) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = hl(o, r, 0, null), e = Ct(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Oa(n), t.memoizedState = Ra, e) : To(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
    return gd(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return (1 & o) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ct(l, u), r.subtreeFlags = 14680064 & l.subtreeFlags), i !== null ? a = ct(i, a) : (a = Ct(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Oa(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ra, r;
  }
  return a = e.child, e = a.sibling, r = ct(a, { mode: "visible", children: r.children }), (1 & t.mode) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function To(e, t) {
  return t = hl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function br(e, t, n, r) {
  return r !== null && vo(r), rn(t, e.child, null, n), e = To(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gd(e, t, n, r, l, a, o) {
  if (n)
    return 256 & t.flags ? (t.flags &= -257, r = Ql(Error(v(422))), br(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = hl({ mode: "visible", children: r.children }, l, 0, null), a = Ct(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, (1 & t.mode) !== 0 && rn(t, e.child, null, o), t.child.memoizedState = Oa(o), t.memoizedState = Ra, a);
  if ((1 & t.mode) === 0)
    return br(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var i = r.dgst;
    return r = i, a = Error(v(419)), r = Ql(a, r, void 0), br(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, fe || i) {
    if (r = G, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Qe(e, l), De(r, e, l, -1));
    }
    return Fo(), r = Ql(Error(v(421))), br(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pd.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, ge = ot(l.nextSibling), ve = t, F = !0, Te = null, e !== null && (ke[Se++] = qe, ke[Se++] = Ae, ke[Se++] = Nt, qe = e.id, Ae = e.overflow, Nt = t), t = To(t, r.children), t.flags |= 4096, t);
}
function $i(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pa(e.return, t, n);
}
function Kl(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Ks(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (oe(e, t, r.children, n), r = U.current, (2 & r) !== 0)
    r = 1 & r | 2, t.flags |= 128;
  else {
    if (e !== null && (128 & e.flags) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && $i(e, n, t);
          else if (e.tag === 19)
            $i(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(U, r), (1 & t.mode) === 0)
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Gr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Kl(t, !1, l, n, a);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Gr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Kl(t, !0, n, null, a);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  (1 & t.mode) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ke(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Lt |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(v(153));
  if (t.child !== null) {
    for (e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = ct(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vd(e, t, n) {
  switch (t.tag) {
    case 3:
      Hs(t), nn();
      break;
    case 5:
      ks(t);
      break;
    case 1:
      pe(t.type) && Wr(t);
      break;
    case 4:
      xo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(Kr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(U, 1 & U.current), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Qs(e, t, n) : (M(U, 1 & U.current), e = Ke(e, t, n), e !== null ? e.sibling : null);
      M(U, 1 & U.current);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (128 & e.flags) !== 0) {
        if (r)
          return Ks(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $s(e, t, n);
  }
  return Ke(e, t, n);
}
var Ys, Fa, Xs, Gs;
Ys = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fa = function() {
};
Xs = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Et(Be.current);
    var a = null;
    switch (n) {
      case "input":
        l = aa(e, l), r = aa(e, r), a = [];
        break;
      case "select":
        l = j({}, l, { value: void 0 }), r = j({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = ua(e, l), r = ua(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
    }
    ca(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (o in i)
            i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Rn.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== i && (u != null || i != null))
        if (c === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in u)
              u.hasOwnProperty(o) && i[o] !== u[o] && (n || (n = {}), n[o] = u[o]);
          } else
            n || (a || (a = []), a.push(c, n)), n = u;
        else
          c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Rn.hasOwnProperty(c) ? (u != null && c === "onScroll" && R("scroll", e), a || i === u || (a = [])) : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Gs = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!F)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= 14680064 & l.subtreeFlags, r |= 14680064 & l.flags, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bd(e, t, n) {
  var r = t.pendingProps;
  switch (go(t), t.tag) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && $r(), re(t), null;
    case 3:
      return r = t.stateNode, ln(), O(de), O(ae), _o(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (256 & t.flags) === 0 || (t.flags |= 1024, Te !== null && (Wa(Te), Te = null))), Fa(e, t), re(t), null;
    case 5:
      Eo(t);
      var l = Et(Qn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Xs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(v(166));
          return re(t), null;
        }
        if (e = Et(Be.current), gr(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Fe] = t, r[Wn] = a, e = (1 & t.mode) !== 0, n) {
            case "dialog":
              R("cancel", r), R("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              R("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++)
                R(En[l], r);
              break;
            case "source":
              R("error", r);
              break;
            case "img":
            case "image":
            case "link":
              R("error", r), R("load", r);
              break;
            case "details":
              R("toggle", r);
              break;
            case "input":
              Jo(r, a), R("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, R("invalid", r);
              break;
            case "textarea":
              ti(r, a), R("invalid", r);
          }
          ca(n, a), l = null;
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var i = a[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && hr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && hr(r.textContent, i, e), l = ["children", "" + i]) : Rn.hasOwnProperty(o) && i != null && o === "onScroll" && R("scroll", r);
            }
          switch (n) {
            case "input":
              ir(r), ei(r, a, !0);
              break;
            case "textarea":
              ir(r), ni(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ar);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Eu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Fe] = t, e[Wn] = r, Ys(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = fa(n, r), n) {
              case "dialog":
                R("cancel", e), R("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                R("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++)
                  R(En[l], e);
                l = r;
                break;
              case "source":
                R("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                R("error", e), R("load", e), l = r;
                break;
              case "details":
                R("toggle", e), l = r;
                break;
              case "input":
                Jo(e, r), l = aa(e, r), R("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = j({}, r, { value: void 0 }), R("invalid", e);
                break;
              case "textarea":
                ti(e, r), l = ua(e, r), R("invalid", e);
                break;
              default:
                l = r;
            }
            ca(n, l), i = l;
            for (a in i)
              if (i.hasOwnProperty(a)) {
                var u = i[a];
                a === "style" ? zu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && _u(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && On(e, u) : typeof u == "number" && On(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Rn.hasOwnProperty(a) ? u != null && a === "onScroll" && R("scroll", e) : u != null && eo(e, a, u, o));
              }
            switch (n) {
              case "input":
                ir(e), ei(e, r, !1);
                break;
              case "textarea":
                ir(e), ni(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Kt(e, !!r.multiple, a, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null)
        Gs(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(v(166));
        if (n = Et(Qn.current), Et(Be.current), gr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (a = r.nodeValue !== n) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          a && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (O(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && ge !== null && (1 & t.mode) !== 0 && (128 & t.flags) === 0)
          ms(), nn(), t.flags |= 98560, a = !1;
        else if (a = gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a)
              throw Error(v(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(v(317));
            a[Fe] = t;
          } else
            nn(), (128 & t.flags) === 0 && (t.memoizedState = null), t.flags |= 4;
          re(t), a = !1;
        } else
          Te !== null && (Wa(Te), Te = null), a = !0;
        if (!a)
          return 65536 & t.flags ? t : null;
      }
      return (128 & t.flags) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (1 & t.mode) !== 0 && (e === null || (1 & U.current) !== 0 ? Q === 0 && (Q = 3) : Fo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return ln(), Fa(e, t), e === null && An(t.stateNode.containerInfo), re(t), null;
    case 10:
      return wo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && $r(), re(t), null;
    case 19:
      if (O(U), a = t.memoizedState, a === null)
        return re(t), null;
      if (r = (128 & t.flags) !== 0, o = a.rendering, o === null)
        if (r)
          yn(a, !1);
        else {
          if (Q !== 0 || e !== null && (128 & e.flags) !== 0)
            for (e = t.child; e !== null; ) {
              if (o = Gr(e), o !== null) {
                for (t.flags |= 128, yn(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return M(U, 1 & U.current | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && $() > on && (t.flags |= 128, r = !0, yn(a, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Gr(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yn(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !F)
              return re(t), null;
          } else
            2 * $() - a.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = !0, yn(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = $(), t.sibling = null, n = U.current, M(U, r ? 1 & n | 2 : 1 & n), t) : (re(t), null);
    case 22:
    case 23:
      return Oo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (1 & t.mode) !== 0 ? (1073741824 & he) !== 0 && (re(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function yd(e, t) {
  switch (go(t), t.tag) {
    case 1:
      return pe(t.type) && $r(), e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
    case 3:
      return ln(), O(de), O(ae), _o(), e = t.flags, (65536 & e) !== 0 && (128 & e) === 0 ? (t.flags = -65537 & e | 128, t) : null;
    case 5:
      return Eo(t), null;
    case 13:
      if (O(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(v(340));
        nn();
      }
      return e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
    case 19:
      return O(U), null;
    case 4:
      return ln(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Oo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, le = !1, wd = typeof WeakSet == "function" ? WeakSet : Set, k = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else
      n.current = null;
}
function Ua(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Wi = !1;
function kd(e, t) {
  if (ka = jr, e = ts(), mo(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, i = -1, u = -1, c = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var b; m !== n || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== a || r !== 0 && m.nodeType !== 3 || (u = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (b = m.firstChild) !== null; )
                p = m, m = b;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++c === l && (i = o), p === a && ++h === r && (u = o), (b = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = b;
            }
          n = i === -1 || u === -1 ? null : { start: i, end: u };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Sa = { focusedElem: e, selectionRange: n }, jr = !1, k = t; k !== null; )
    if (t = k, e = t.child, (1028 & t.subtreeFlags) !== 0 && e !== null)
      e.return = t, k = e;
    else
      for (; k !== null; ) {
        t = k;
        try {
          var y = t.alternate;
          if ((1024 & t.flags) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps, D = y.memoizedState, f = t.stateNode, s = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Pe(t.type, w), D);
                  f.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          V(t, t.return, g);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, k = e;
          break;
        }
        k = t.return;
      }
  return y = Wi, Wi = !1, y;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ua(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ba(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Zs(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zs(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Wn], delete t[_a], delete t[rd], delete t[ld])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Js(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hi(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Js(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (2 & e.flags || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(2 & e.flags))
        return e.stateNode;
    }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; )
      ja(e, t, n), e = e.sibling;
}
function Va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Va(e, t, n), e = e.sibling; e !== null; )
      Va(e, t, n), e = e.sibling;
}
var Z = null, Le = !1;
function Xe(e, t, n) {
  for (n = n.child; n !== null; )
    ec(e, t, n), n = n.sibling;
}
function ec(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(al, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = Z, l = Le;
      Z = null, Xe(e, t, n), Z = r, Le = l, Z !== null && (Le ? (e = Z, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Z.removeChild(n.stateNode));
      break;
    case 18:
      Z !== null && (Le ? (e = Z, n = n.stateNode, e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n), jn(e)) : Vl(Z, n.stateNode));
      break;
    case 4:
      r = Z, l = Le, Z = n.stateNode.containerInfo, Le = !0, Xe(e, t, n), Z = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && ((2 & a) !== 0 || (4 & a) !== 0) && Ua(n, t, o), l = l.next;
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (!le && (Wt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          V(n, t, i);
        }
      Xe(e, t, n);
      break;
    case 21:
      Xe(e, t, n);
      break;
    case 22:
      1 & n.mode ? (le = (r = le) || n.memoizedState !== null, Xe(e, t, n), le = r) : Xe(e, t, n);
      break;
    default:
      Xe(e, t, n);
  }
}
function Qi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wd()), t.forEach(function(r) {
      var l = Ld.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var a = e, o = t, i = o;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                Z = i.stateNode, Le = !1;
                break e;
              case 3:
                Z = i.stateNode.containerInfo, Le = !0;
                break e;
              case 4:
                Z = i.stateNode.containerInfo, Le = !0;
                break e;
            }
            i = i.return;
          }
        if (Z === null)
          throw Error(v(160));
        ec(a, o, l), Z = null, Le = !1;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null;
      } catch (c) {
        V(l, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; )
      tc(t, e), t = t.sibling;
}
function tc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(t, e), Re(e), 4 & r) {
        try {
          Tn(3, e, e.return), pl(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Tn(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      Ne(t, e), Re(e), 512 & r && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (Ne(t, e), Re(e), 512 & r && n !== null && Wt(n, n.return), 32 & e.flags) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (4 & r && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null)
          try {
            i === "input" && a.type === "radio" && a.name != null && Su(l, a), fa(i, o);
            var c = fa(i, a);
            for (o = 0; o < u.length; o += 2) {
              var h = u[o], m = u[o + 1];
              h === "style" ? zu(l, m) : h === "dangerouslySetInnerHTML" ? _u(l, m) : h === "children" ? On(l, m) : eo(l, h, m, c);
            }
            switch (i) {
              case "input":
                oa(l, a);
                break;
              case "textarea":
                xu(l, a);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var b = a.value;
                b != null ? Kt(l, !!a.multiple, b, !1) : p !== !!a.multiple && (a.defaultValue != null ? Kt(l, !!a.multiple, a.defaultValue, !0) : Kt(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[Wn] = a;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if (Ne(t, e), Re(e), 4 & r) {
        if (e.stateNode === null)
          throw Error(v(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ne(t, e), Re(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
        try {
          jn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      Ne(t, e), Re(e);
      break;
    case 13:
      Ne(t, e), Re(e), l = e.child, 8192 & l.flags && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Mo = $())), 4 & r && Qi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, 1 & e.mode ? (le = (c = le) || h, Ne(t, e), le = c) : Ne(t, e), Re(e), 8192 & r) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && (1 & e.mode) !== 0)
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (p = k, b = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, p, p.return);
                  break;
                case 1:
                  Wt(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Yi(m);
                    continue;
                  }
              }
              b !== null ? (b.return = p, k = b) : Yi(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, c ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = m.stateNode, u = m.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = Cu("display", o));
                } catch (w) {
                  V(e, e.return, w);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (w) {
                  V(e, e.return, w);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Ne(t, e), Re(e), 4 & r && Qi(e);
      break;
    case 21:
      break;
    default:
      Ne(t, e), Re(e);
  }
}
function Re(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Js(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          32 & r.flags && (On(l, ""), r.flags &= -33);
          var a = Hi(e);
          Va(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Hi(e);
          ja(e, i, o);
          break;
        default:
          throw Error(v(161));
      }
    } catch (u) {
      V(e, e.return, u);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function Sd(e, t, n) {
  k = e, nc(e);
}
function nc(e, t, n) {
  for (var r = (1 & e.mode) !== 0; k !== null; ) {
    var l = k, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr;
      if (!o) {
        var i = l.alternate, u = i !== null && i.memoizedState !== null || le;
        i = yr;
        var c = le;
        if (yr = o, (le = u) && !c)
          for (k = l; k !== null; )
            o = k, u = o.child, o.tag === 22 && o.memoizedState !== null ? Xi(l) : u !== null ? (u.return = o, k = u) : Xi(l);
        for (; a !== null; )
          k = a, nc(a), a = a.sibling;
        k = l, yr = i, le = c;
      }
      Ki(e);
    } else
      (8772 & l.subtreeFlags) !== 0 && a !== null ? (a.return = l, k = a) : Ki(e);
  }
}
function Ki(e) {
  for (; k !== null; ) {
    var t = k;
    if ((8772 & t.flags) !== 0) {
      var n = t.alternate;
      try {
        if ((8772 & t.flags) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && Ti(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ti(t, o, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = i;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && jn(m);
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
              throw Error(v(163));
          }
        le || 512 & t.flags && Ba(t);
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, k = n;
      break;
    }
    k = t.return;
  }
}
function Yi(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, k = n;
      break;
    }
    k = t.return;
  }
}
function Xi(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (u) {
            V(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              V(t, l, u);
            }
          }
          var a = t.return;
          try {
            Ba(t);
          } catch (u) {
            V(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ba(t);
          } catch (u) {
            V(t, o, u);
          }
      }
    } catch (u) {
      V(t, t.return, u);
    }
    if (t === e) {
      k = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, k = i;
      break;
    }
    k = t.return;
  }
}
var xd = Math.ceil, el = Ye.ReactCurrentDispatcher, Io = Ye.ReactCurrentOwner, Ee = Ye.ReactCurrentBatchConfig, T = 0, G = null, W = null, ee = 0, he = 0, Ht = ht(0), Q = 0, Gn = null, Lt = 0, ml = 0, Do = 0, In = null, ce = null, Mo = 0, on = 1 / 0, je = null, tl = !1, qa = null, ut = null, wr = !1, nt = null, nl = 0, Dn = 0, Aa = null, Tr = -1, Ir = 0;
function ie() {
  return (6 & T) !== 0 ? $() : Tr !== -1 ? Tr : Tr = $();
}
function st(e) {
  return (1 & e.mode) === 0 ? 1 : (2 & T) !== 0 && ee !== 0 ? ee & -ee : od.transition !== null ? (Ir === 0 && (Ir = Bu()), Ir) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hu(e.type)), e);
}
function De(e, t, n, r) {
  if (50 < Dn)
    throw Dn = 0, Aa = null, Error(v(185));
  Jn(e, n, r), ((2 & T) === 0 || e !== G) && (e === G && ((2 & T) === 0 && (ml |= n), Q === 4 && et(e, ee)), me(e, r), n === 1 && T === 0 && (1 & t.mode) === 0 && (on = $() + 500, cl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  af(e, t);
  var r = Br(e, e === G ? ee : 0);
  if (r === 0)
    n !== null && ai(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ai(n), t === 1)
      e.tag === 0 ? ad(Gi.bind(null, e)) : fs(Gi.bind(null, e)), td(function() {
        (6 & T) === 0 && gt();
      }), n = null;
    else {
      switch (ju(r)) {
        case 1:
          n = ao;
          break;
        case 4:
          n = Fu;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Uu;
          break;
        default:
          n = Ur;
      }
      n = cc(n, rc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rc(e, t) {
  if (Tr = -1, Ir = 0, (6 & T) !== 0)
    throw Error(v(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n)
    return null;
  var r = Br(e, e === G ? ee : 0);
  if (r === 0)
    return null;
  if ((30 & r) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = rl(e, r);
  else {
    t = r;
    var l = T;
    T |= 2;
    var a = ac();
    (G !== e || ee !== t) && (je = null, on = $() + 500, _t(e, t));
    do
      try {
        Cd();
        break;
      } catch (i) {
        lc(e, i);
      }
    while (1);
    yo(), el.current = a, T = l, W !== null ? t = 0 : (G = null, ee = 0, t = Q);
  }
  if (t !== 0) {
    if (t === 2 && (l = ga(e), l !== 0 && (r = l, t = $a(e, l))), t === 1)
      throw n = Gn, _t(e, 0), et(e, r), me(e, $()), n;
    if (t === 6)
      et(e, r);
    else {
      if (l = e.current.alternate, (30 & r) === 0 && !Ed(l) && (t = rl(e, r), t === 2 && (a = ga(e), a !== 0 && (r = a, t = $a(e, a))), t === 1))
        throw n = Gn, _t(e, 0), et(e, r), me(e, $()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          kt(e, ce, je);
          break;
        case 3:
          if (et(e, r), (130023424 & r) === r && (t = Mo + 500 - $(), 10 < t)) {
            if (Br(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ea(kt.bind(null, e, ce, je), t);
            break;
          }
          kt(e, ce, je);
          break;
        case 4:
          if (et(e, r), (4194240 & r) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = $() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ea(kt.bind(null, e, ce, je), r);
            break;
          }
          kt(e, ce, je);
          break;
        case 5:
          kt(e, ce, je);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return me(e, $()), e.callbackNode === n ? rc.bind(null, e) : null;
}
function $a(e, t) {
  var n = In;
  return e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Wa(t)), e;
}
function Wa(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Ed(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], a = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(a(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, 16384 & t.subtreeFlags && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function et(e, t) {
  for (t &= ~Do, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ie(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gi(e) {
  if ((6 & T) !== 0)
    throw Error(v(327));
  Jt();
  var t = Br(e, 0);
  if ((1 & t) === 0)
    return me(e, $()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ga(e);
    r !== 0 && (t = r, n = $a(e, r));
  }
  if (n === 1)
    throw n = Gn, _t(e, 0), et(e, t), me(e, $()), n;
  if (n === 6)
    throw Error(v(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kt(e, ce, je), me(e, $()), null;
}
function Ro(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    T = n, T === 0 && (on = $() + 500, cl && gt());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && (6 & T) === 0 && Jt();
  var t = T;
  T |= 1;
  var n = Ee.transition, r = I;
  try {
    if (Ee.transition = null, I = 1, e)
      return e();
  } finally {
    I = r, Ee.transition = n, T = t, (6 & T) === 0 && gt();
  }
}
function Oo() {
  he = Ht.current, O(Ht);
}
function _t(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ed(n)), W !== null)
    for (n = W.return; n !== null; ) {
      var r = n;
      switch (go(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $r();
          break;
        case 3:
          ln(), O(de), O(ae), _o();
          break;
        case 5:
          Eo(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          O(U);
          break;
        case 19:
          O(U);
          break;
        case 10:
          wo(r.type._context);
          break;
        case 22:
        case 23:
          Oo();
      }
      n = n.return;
    }
  if (G = e, W = e = ct(e.current, null), ee = he = t, Q = 0, Gn = null, Do = ml = Lt = 0, ce = In = null, xt !== null) {
    for (t = 0; t < xt.length; t++)
      if (n = xt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, a = n.pending;
        if (a !== null) {
          var o = a.next;
          a.next = l, r.next = o;
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function lc(e, t) {
  do {
    var n = W;
    try {
      if (yo(), Nr.current = Jr, Zr) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Zr = !1;
      }
      if (Pt = 0, X = H = B = null, Ln = !1, Kn = 0, Io.current = null, n === null || n.return === null) {
        Q = 1, Gn = t, W = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, u = t;
        if (t = ee, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, h = i, m = h.tag;
          if ((1 & h.mode) === 0 && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var b = Ui(o);
          if (b !== null) {
            b.flags &= -257, Bi(b, o, i, a, t), 1 & b.mode && Fi(a, c, t), t = b, u = c;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(u), t.updateQueue = w;
            } else
              y.add(u);
            break e;
          } else {
            if ((1 & t) === 0) {
              Fi(a, c, t), Fo();
              break e;
            }
            u = Error(v(426));
          }
        } else if (F && 1 & i.mode) {
          var D = Ui(o);
          if (D !== null) {
            (65536 & D.flags) === 0 && (D.flags |= 256), Bi(D, o, i, a, t), vo(an(u, i));
            break e;
          }
        }
        a = u = an(u, i), Q !== 4 && (Q = 2), In === null ? In = [a] : In.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Vs(a, u, t);
              Li(a, f);
              break e;
            case 1:
              i = u;
              var s = a.type, d = a.stateNode;
              if ((128 & a.flags) === 0 && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ut === null || !ut.has(d)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = qs(a, i, t);
                Li(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ic(n);
    } catch (S) {
      t = S, W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ac() {
  var e = el.current;
  return el.current = Jr, e === null ? Jr : e;
}
function Fo() {
  (Q === 0 || Q === 3 || Q === 2) && (Q = 4), G === null || (268435455 & Lt) === 0 && (268435455 & ml) === 0 || et(G, ee);
}
function rl(e, t) {
  var n = T;
  T |= 2;
  var r = ac();
  (G !== e || ee !== t) && (je = null, _t(e, t));
  do
    try {
      _d();
      break;
    } catch (l) {
      lc(e, l);
    }
  while (1);
  if (yo(), T = n, el.current = r, W !== null)
    throw Error(v(261));
  return G = null, ee = 0, Q;
}
function _d() {
  for (; W !== null; )
    oc(W);
}
function Cd() {
  for (; W !== null && !Xc(); )
    oc(W);
}
function oc(e) {
  var t = sc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? ic(e) : W = t, Io.current = null;
}
function ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (32768 & t.flags) === 0) {
      if (n = bd(n, t, he), n !== null) {
        W = n;
        return;
      }
    } else {
      if (n = yd(n, t), n !== null) {
        n.flags &= 32767, W = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Q = 6, W = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  Q === 0 && (Q = 5);
}
function kt(e, t, n) {
  var r = I, l = Ee.transition;
  try {
    Ee.transition = null, I = 1, zd(e, t, n, r);
  } finally {
    Ee.transition = l, I = r;
  }
  return null;
}
function zd(e, t, n, r) {
  do
    Jt();
  while (nt !== null);
  if ((6 & T) !== 0)
    throw Error(v(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(v(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (of(e, a), e === G && (W = G = null, ee = 0), (2064 & n.subtreeFlags) === 0 && (2064 & n.flags) === 0 || wr || (wr = !0, cc(Ur, function() {
    return Jt(), null;
  })), a = (15990 & n.flags) !== 0, (15990 & n.subtreeFlags) !== 0 || a) {
    a = Ee.transition, Ee.transition = null;
    var o = I;
    I = 1;
    var i = T;
    T |= 4, Io.current = null, kd(e, n), tc(n, e), Qf(Sa), jr = !!ka, Sa = ka = null, e.current = n, Sd(n), Gc(), T = i, I = o, Ee.transition = a;
  } else
    e.current = n;
  if (wr && (wr = !1, nt = e, nl = l), a = e.pendingLanes, a === 0 && (ut = null), ef(n.stateNode), me(e, $()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl)
    throw tl = !1, e = qa, qa = null, e;
  return (1 & nl) !== 0 && e.tag !== 0 && Jt(), a = e.pendingLanes, (1 & a) !== 0 ? e === Aa ? Dn++ : (Dn = 0, Aa = e) : Dn = 0, gt(), null;
}
function Jt() {
  if (nt !== null) {
    var e = ju(nl), t = Ee.transition, n = I;
    try {
      if (Ee.transition = null, I = 16 > e ? 16 : e, nt === null)
        var r = !1;
      else {
        if (e = nt, nt = null, nl = 0, (6 & T) !== 0)
          throw Error(v(331));
        var l = T;
        for (T |= 4, k = e.current; k !== null; ) {
          var a = k, o = a.child;
          if ((16 & k.flags) !== 0) {
            var i = a.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var c = i[u];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, h, a);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, k = m;
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling, b = h.return;
                      if (Zs(h), h === c) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = b, k = p;
                        break;
                      }
                      k = b;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var D = w.sibling;
                    w.sibling = null, w = D;
                  } while (w !== null);
                }
              }
              k = a;
            }
          }
          if ((2064 & a.subtreeFlags) !== 0 && o !== null)
            o.return = a, k = o;
          else
            e:
              for (; k !== null; ) {
                if (a = k, (2048 & a.flags) !== 0)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(9, a, a.return);
                  }
                var f = a.sibling;
                if (f !== null) {
                  f.return = a.return, k = f;
                  break e;
                }
                k = a.return;
              }
        }
        var s = e.current;
        for (k = s; k !== null; ) {
          o = k;
          var d = o.child;
          if ((2064 & o.subtreeFlags) !== 0 && d !== null)
            d.return = o, k = d;
          else
            e:
              for (o = s; k !== null; ) {
                if (i = k, (2048 & i.flags) !== 0)
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, i);
                    }
                  } catch (S) {
                    V(i, i.return, S);
                  }
                if (i === o) {
                  k = null;
                  break e;
                }
                var g = i.sibling;
                if (g !== null) {
                  g.return = i.return, k = g;
                  break e;
                }
                k = i.return;
              }
        }
        if (T = l, gt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(al, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      I = n, Ee.transition = t;
    }
  }
  return !1;
}
function Zi(e, t, n) {
  t = an(n, t), t = Vs(e, t, 1), e = it(e, t, 1), t = ie(), e !== null && (Jn(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3)
    Zi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r))) {
          e = an(n, e), e = qs(t, e, 1), t = it(t, e, 1), e = ie(), t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, G === e && (ee & n) === n && (Q === 4 || Q === 3 && (130023424 & ee) === ee && 500 > $() - Mo ? _t(e, 0) : Do |= n), me(e, t);
}
function uc(e, t) {
  t === 0 && ((1 & e.mode) === 0 ? t = 1 : (t = cr, cr <<= 1, (130023424 & cr) === 0 && (cr = 4194304)));
  var n = ie();
  e = Qe(e, t), e !== null && (Jn(e, t, n), me(e, n));
}
function Pd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uc(e, n);
}
function Ld(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), uc(e, n);
}
var sc;
sc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current)
      fe = !0;
    else {
      if ((e.lanes & n) === 0 && (128 & t.flags) === 0)
        return fe = !1, vd(e, t, n);
      fe = (131072 & e.flags) !== 0;
    }
  else
    fe = !1, F && (1048576 & t.flags) !== 0 && ds(t, Qr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Lr(e, t), e = t.pendingProps;
      var l = tn(t, ae.current);
      Zt(t, n), l = zo(null, t, r, e, l, n);
      var a = No();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (a = !0, Wr(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, So(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Ta(t, r, e, n), t = Ma(null, t, r, !0, a, n)) : (t.tag = 0, F && a && ho(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Lr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Id(r), e = Pe(r, e), l) {
          case 0:
            t = Da(null, t, r, e, n);
            break e;
          case 1:
            t = qi(null, t, r, e, n);
            break e;
          case 11:
            t = ji(null, t, r, e, n);
            break e;
          case 14:
            t = Vi(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Da(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), qi(e, t, r, l, n);
    case 3:
      e: {
        if (Hs(t), e === null)
          throw Error(v(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, gs(e, t), Xr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated)
          if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
            l = an(Error(v(423)), t), t = Ai(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = an(Error(v(424)), t), t = Ai(e, t, r, n, l);
            break e;
          } else
            for (ge = ot(t.stateNode.containerInfo.firstChild), ve = t, F = !0, Te = null, n = ws(t, null, r, n), t.child = n; n; )
              n.flags = -3 & n.flags | 4096, n = n.sibling;
        else {
          if (nn(), r === l) {
            t = Ke(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ks(t), e === null && Na(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, xa(r, l) ? o = null : a !== null && xa(r, a) && (t.flags |= 32), Ws(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Na(t), null;
    case 13:
      return Qs(e, t, n);
    case 4:
      return xo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rn(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), ji(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, M(Kr, r._currentValue), r._currentValue = o, a !== null)
          if (Me(a.value, o)) {
            if (a.children === l.children && !de.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var i = a.dependencies;
              if (i !== null) {
                o = a.child;
                for (var u = i.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      u = $e(-1, n & -n), u.tag = 2;
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? u.next = u : (u.next = h.next, h.next = u), c.pending = u;
                      }
                    }
                    a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), Pa(a.return, n, t), i.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10)
                o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (o = a.return, o === null)
                  throw Error(v(341));
                o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Pa(o, n, t), o = a.sibling;
              } else
                o = a.child;
              if (o !== null)
                o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (a = o.sibling, a !== null) {
                    a.return = o.return, o = a;
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Zt(t, n), l = _e(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Pe(r, t.pendingProps), l = Pe(r.type, l), Vi(e, t, r, l, n);
    case 15:
      return As(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Lr(e, t), t.tag = 1, pe(r) ? (e = !0, Wr(t)) : e = !1, Zt(t, n), bs(t, r, l), Ta(t, r, l, n), Ma(null, t, r, !0, e, n);
    case 19:
      return Ks(e, t, n);
    case 22:
      return $s(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function cc(e, t) {
  return Ou(e, t);
}
function Td(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new Td(e, t, n, r);
}
function Uo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function")
    return Uo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === no)
      return 11;
    if (e === ro)
      return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Dr(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function")
    Uo(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case Ot:
          return Ct(n.children, l, a, t);
        case to:
          o = 8, l |= 8;
          break;
        case ta:
          return e = xe(12, n, t, 2 | l), e.elementType = ta, e.lanes = a, e;
        case na:
          return e = xe(13, n, t, l), e.elementType = na, e.lanes = a, e;
        case ra:
          return e = xe(19, n, t, l), e.elementType = ra, e.lanes = a, e;
        case yu:
          return hl(n, l, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case vu:
                o = 10;
                break e;
              case bu:
                o = 9;
                break e;
              case no:
                o = 11;
                break e;
              case ro:
                o = 14;
                break e;
              case Ge:
                o = 16, r = null;
                break e;
            }
          throw Error(v(130, e == null ? e : typeof e, ""));
      }
  return t = xe(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Ct(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function hl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = yu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Yl(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function Xl(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Dd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Bo(e, t, n, r, l, a, o, i, u) {
  return e = new Dd(e, t, n, i, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = xe(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(a), e;
}
function Md(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fc(e) {
  if (!e)
    return pt;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1)
      throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n))
      return cs(e, n, t);
  }
  return t;
}
function dc(e, t, n, r, l, a, o, i, u) {
  return e = Bo(n, r, !0, e, l, a, o, i, u), e.context = fc(null), n = e.current, r = ie(), l = st(n), a = $e(r, l), a.callback = t != null ? t : null, it(n, a, l), e.current.lanes = l, Jn(e, l, r), me(e, r), e;
}
function gl(e, t, n, r) {
  var l = t.current, a = ie(), o = st(l);
  return n = fc(n), t.context === null ? t.context = n : t.pendingContext = n, t = $e(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = it(l, t, o), e !== null && (De(e, l, o, a), zr(e, l, o)), o;
}
function ll(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ji(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jo(e, t) {
  Ji(e, t), (e = e.alternate) && Ji(e, t);
}
function Rd() {
  return null;
}
var pc = typeof reportError == "function" ? reportError : function(e) {
};
function Vo(e) {
  this._internalRoot = e;
}
vl.prototype.render = Vo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(v(409));
  gl(e, t, null, null);
};
vl.prototype.unmount = Vo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function() {
      gl(null, e, null, null);
    }), t[He] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Au();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Je.length && t !== 0 && t < Je[n].priority; n++)
      ;
    Je.splice(n, 0, e), n === 0 && Wu(e);
  }
};
function qo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eu() {
}
function Od(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = ll(o);
        a.call(c);
      };
    }
    var o = dc(t, r, e, 0, null, !1, !1, "", eu);
    return e._reactRootContainer = o, e[He] = o.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = ll(u);
      i.call(c);
    };
  }
  var u = Bo(e, 0, !1, null, null, !1, !1, "", eu);
  return e._reactRootContainer = u, e[He] = u.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
    gl(t, u, n, r);
  }), u;
}
function yl(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var u = ll(o);
        i.call(u);
      };
    }
    gl(t, o, e, l);
  } else
    o = Od(n, t, e, l, r);
  return ll(o);
}
Vu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (oo(t, 1 | n), me(t, $()), (6 & T) === 0 && (on = $() + 500, gt()));
      }
      break;
    case 13:
      Tt(function() {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = ie();
          De(r, e, 1, l);
        }
      }), jo(e, 1);
  }
};
io = function(e) {
  if (e.tag === 13) {
    var t = Qe(e, 134217728);
    if (t !== null) {
      var n = ie();
      De(t, e, 134217728, n);
    }
    jo(e, 134217728);
  }
};
qu = function(e) {
  if (e.tag === 13) {
    var t = st(e), n = Qe(e, t);
    if (n !== null) {
      var r = ie();
      De(n, e, t, r);
    }
    jo(e, t);
  }
};
Au = function() {
  return I;
};
$u = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
pa = function(e, t, n) {
  switch (t) {
    case "input":
      if (oa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l)
              throw Error(v(90));
            ku(r), oa(r, l);
          }
        }
      }
      break;
    case "textarea":
      xu(e, n);
      break;
    case "select":
      t = n.value, t != null && Kt(e, !!n.multiple, t, !1);
  }
};
Lu = Ro;
Tu = Tt;
var Fd = { usingClientEntryPoint: !1, Events: [tr, jt, sl, Nu, Pu, Ro] }, wn = { findFiberByHostInstance: St, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ud = { bundleType: wn.bundleType, version: wn.version, rendererPackageName: wn.rendererPackageName, rendererConfig: wn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wn.findFiberByHostInstance || Rd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      al = kr.inject(Ud), Ue = kr;
    } catch {
    }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fd;
ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qo(t))
    throw Error(v(200));
  return Md(e, t, null, n);
};
ye.createRoot = function(e, t) {
  if (!qo(e))
    throw Error(v(299));
  var n = !1, r = "", l = pc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Bo(e, 1, !1, null, null, n, !1, r, l), e[He] = t.current, An(e.nodeType === 8 ? e.parentNode : e), new Vo(t);
};
ye.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
  return e = Mu(t), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return Tt(e);
};
ye.hydrate = function(e, t, n) {
  if (!bl(t))
    throw Error(v(200));
  return yl(null, e, t, !0, n);
};
ye.hydrateRoot = function(e, t, n) {
  if (!qo(e))
    throw Error(v(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = pc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = dc(t, null, e, 1, n != null ? n : null, l, !1, a, o), e[He] = t.current, An(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
ye.render = function(e, t, n) {
  if (!bl(t))
    throw Error(v(200));
  return yl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function(e) {
  if (!bl(e))
    throw Error(v(40));
  return e._reactRootContainer ? (Tt(function() {
    yl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[He] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = Ro;
ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bl(n))
    throw Error(v(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(v(38));
  return yl(e, t, n, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch {
      }
  }
  t(), e.exports = ye;
})(au);
var mc, hc = au.exports;
mc = hc.createRoot;
hc.hydrateRoot;
var wl = { exports: {} }, kl = {}, Bd = J.exports, jd = Symbol.for("react.element"), Vd = Symbol.for("react.fragment"), qd = Object.prototype.hasOwnProperty, Ad = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function gc(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    qd.call(t, r) && !$d.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: jd, type: e, key: a, ref: o, props: l, _owner: Ad.current };
}
kl.Fragment = Vd;
kl.jsx = gc;
kl.jsxs = gc;
(function(e) {
  e.exports = kl;
})(wl);
const tu = wl.exports.Fragment, Y = wl.exports.jsx, Mn = wl.exports.jsxs, Wd = ({ destroyModal: e }) => Y("button", { onClick: e, className: "w3bb-quiz-modal-close-button", id: "w3bb-quiz-modal-close-button", children: Y("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 1792 1792", children: Y("path", { fill: "#e34444", d: "M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z" }) }) }), Hd = J.exports.memo(Wd);
function Qd(e) {
  const [t, n] = J.exports.useState(!1), r = new IntersectionObserver(([l]) => n(l.isIntersecting));
  return J.exports.useEffect(() => (r.observe(e.current), () => {
    r.disconnect();
  }), []), t;
}
const Kd = 100, Yd = "\u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043F\u0440\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.", Xd = "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0446\u0435\u043B\u0435\u0439 \u0442\u0435\u0441\u0442\u0430, \u0447\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435.", Gd = "\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441", Zd = [{ id: 1, question: "\u0414\u0438\u0437\u0430\u0439\u043D \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0432\u0430\u043C \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C?", answers: [{ id: 1, text: "\u0414\u0430, \u0435\u0449\u0435 \u0431\u044B!", score: 10 }, { id: 2, text: "\u041D\u0435\u0442, \u043C\u043D\u0435 \u0442\u0430\u043A \u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F.", score: 6 }, { id: 3, text: "\u0411\u0435\u0437 \u043F\u043E\u043D\u044F\u0442\u043D\u0438\u044F...", score: 4 }] }, { id: 2, question: "\u0423\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043B\u0438 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441?", answers: [{ id: 1, text: "\u0411\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E!", score: 10 }, { id: 2, text: "\u0421\u0440\u0435\u0434\u043D\u0435. \u0417\u0430\u044F\u0432\u043E\u043A \u043C\u0430\u043B\u043E.", score: 5 }, { id: 3, text: "\u041C\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442.", score: 9 }] }, { id: 3, question: "\u0423\u0432\u0435\u0440\u0435\u043D\u044B \u043B\u0438 \u0412\u044B, \u0447\u0442\u043E \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?", answers: [{ id: 1, text: "\u0414\u0430, \u044F \u0437\u043D\u0430\u044E \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u043B\u0438\u0446\u043E!", score: 3 }, { id: 2, text: "\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D. \u041F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432\u0441\u0435 \u043F\u043E\u0434\u0440\u044F\u0434.", score: 6 }, { id: 3, text: "\u0414\u043B\u044F \u043C\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u044D\u0442\u043E \u043D\u0435 \u0432\u0430\u0436\u043D\u043E.", score: 1 }] }, { id: 4, question: "\u0425\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u0412\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0437\u0430\u0442\u0440\u0430\u0442\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443?", answers: [{ id: 1, text: "\u0415\u0441\u0442\u0435\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E! \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0436\u0435!", score: 10 }, { id: 2, text: "\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438?", score: 3 }, { id: 3, text: "\u041A\u0430\u043A\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?", score: 3 }] }], yt = { maxScore: Kd, welcomeTitle: Yd, welcomeDescription: Xd, welcomeButton: Gd, scenes: Zd }, Jd = () => {
  const e = J.exports.useRef(null), [t, n] = J.exports.useState(0), [r, l] = J.exports.useState([]), [a, o] = J.exports.useState(!1), [i, u] = J.exports.useState(!0), [c, h] = J.exports.useState(0), [m, p] = J.exports.useState(0);
  let b;
  const y = Qd(e);
  J.exports.useEffect(() => {
    if (a) {
      clearInterval(b);
      const f = { qa: r, score: c, elapsed_time: m };
    }
  }, [a]), J.exports.useEffect(() => (!i && !a && y && (b = setInterval(() => {
    p((f) => f + 1);
  }, 1e3)), () => {
    clearInterval(b);
  }), [i, a, y]), J.exports.useEffect(() => () => {
    clearInterval(b), l([]), n(0), h(0), o(!1);
  }, []);
  const w = () => {
    u(!1);
  }, D = ({ answer: f, score: s }) => {
    if (l(() => [...r, { q: yt.scenes[t].question, a: f }]), h((d) => d + s), t === yt.scenes.length - 1) {
      o(!0);
      return;
    }
    n((d) => d + 1);
  };
  return Y("div", { ref: e, children: a ? Mn("div", { className: "w3bb-quiz-success_screen", children: [Y("h1", { children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}" }), Y("p", { children: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!" })] }) : Y(tu, { children: i ? Mn("div", { className: "w3bb-quiz-welcome_screen", children: [Y("h1", { children: yt.welcomeTitle }), Y("p", { children: yt.welcomeDescription }), Y("button", { className: "w3bb-quiz-welcome_button", onClick: w, children: yt.welcomeButton }, 1)] }) : Mn(tu, { children: [Y("h1", { children: yt.scenes[t].question }), Y("div", { className: "w3bb-quiz-answers", children: yt.scenes[t].answers.map((f) => Y("button", { className: "w3bb-quiz-answer-button", onClick: () => D({ answer: f.text, score: f.score }), children: f.text }, f.id)) })] }) }) });
}, ep = J.exports.memo(Jd), tp = ({ id: e, destroyModal: t }) => Mn("div", { className: "w3bb-quiz-modal-body", children: [Y("div", { className: "w3bb-quiz-modal-image" }), Y(Hd, { destroyModal: t }), Y("div", { className: "w3bb-quiz-modal-main", children: Y(ep, {}) }), Mn("span", { className: "w3bb-quiz-modal-copyright", children: ["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432", Y("a", { href: "https://w3bb.ru", target: "_blank", rel: "noreferrer noopener", children: "W3BB" })] })] });
function vc() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
}
const np = (e, t) => t.some((n) => e instanceof n);
let nu, ru;
function rp() {
  return nu || (nu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function lp() {
  return ru || (ru = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}
const bc = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap();
function ap(e) {
  const t = new Promise((n, r) => {
    const l = () => {
      e.removeEventListener("success", a), e.removeEventListener("error", o);
    }, a = () => {
      n(ft(e.result)), l();
    }, o = () => {
      r(e.error), l();
    };
    e.addEventListener("success", a), e.addEventListener("error", o);
  });
  return t.then((n) => {
    n instanceof IDBCursor && bc.set(n, e);
  }).catch(() => {
  }), Ao.set(t, e), t;
}
function op(e) {
  if (Ha.has(e))
    return;
  const t = new Promise((n, r) => {
    const l = () => {
      e.removeEventListener("complete", a), e.removeEventListener("error", o), e.removeEventListener("abort", o);
    }, a = () => {
      n(), l();
    }, o = () => {
      r(e.error || new DOMException("AbortError", "AbortError")), l();
    };
    e.addEventListener("complete", a), e.addEventListener("error", o), e.addEventListener("abort", o);
  });
  Ha.set(e, t);
}
let Qa = { get(e, t, n) {
  if (e instanceof IDBTransaction) {
    if (t === "done")
      return Ha.get(e);
    if (t === "objectStoreNames")
      return e.objectStoreNames || yc.get(e);
    if (t === "store")
      return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
  }
  return ft(e[t]);
}, set(e, t, n) {
  return e[t] = n, !0;
}, has(e, t) {
  return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
} };
function ip(e) {
  Qa = e(Qa);
}
function up(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
    const r = e.call(Zl(this), t, ...n);
    return yc.set(r, t.sort ? t.sort() : [t]), ft(r);
  } : lp().includes(e) ? function(...t) {
    return e.apply(Zl(this), t), ft(bc.get(this));
  } : function(...t) {
    return ft(e.apply(Zl(this), t));
  };
}
function sp(e) {
  return typeof e == "function" ? up(e) : (e instanceof IDBTransaction && op(e), np(e, rp()) ? new Proxy(e, Qa) : e);
}
function ft(e) {
  if (e instanceof IDBRequest)
    return ap(e);
  if (Gl.has(e))
    return Gl.get(e);
  const t = sp(e);
  return t !== e && (Gl.set(e, t), Ao.set(t, e)), t;
}
const Zl = (e) => Ao.get(e);
function cp(e, t, { blocked: n, upgrade: r, blocking: l, terminated: a } = {}) {
  const o = indexedDB.open(e, t), i = ft(o);
  return r && o.addEventListener("upgradeneeded", (u) => {
    r(ft(o.result), u.oldVersion, u.newVersion, ft(o.transaction), u);
  }), n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)), i.then((u) => {
    a && u.addEventListener("close", () => a()), l && u.addEventListener("versionchange", (c) => l(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), i;
}
const fp = ["get", "getKey", "getAll", "getAllKeys", "count"], dp = ["put", "add", "delete", "clear"], Jl = /* @__PURE__ */ new Map();
function lu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return;
  if (Jl.get(t))
    return Jl.get(t);
  const n = t.replace(/FromIndex$/, ""), r = t !== n, l = dp.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(l || fp.includes(n)))
    return;
  const a = async function(o, ...i) {
    const u = this.transaction(o, l ? "readwrite" : "readonly");
    let c = u.store;
    return r && (c = c.index(i.shift())), (await Promise.all([c[n](...i), l && u.done]))[0];
  };
  return Jl.set(t, a), a;
}
ip((e) => ({ ...e, get: (t, n, r) => lu(t, n) || e.get(t, n, r), has: (t, n) => !!lu(t, n) || e.has(t, n) }));
async function pp() {
  return await cp("w3bb-quiz", 1, { upgrade(t) {
    t.createObjectStore("w3bb-quiz");
  } });
}
if (typeof window < "u") {
  const e = vc();
  localStorage.getItem("user_uuid") || localStorage.setItem("user_uuid", e);
}
const Qt = document.createElement("div");
Qt.classList.add("w3bb-quiz-modal-overlay");
const mp = document.createElement("div");
mp.classList.add("w3bb-quiz-modal-body");
const hp = mc(Qt);
async function gp({ visibleToggler: e }) {
  const t = await pp();
  let n = !1;
  const r = e.dataset.w3bbId, l = await t.get("w3bb-quiz", "user_uuid") || await t.put("w3bb-quiz", vc(), "user_uuid");
  if (!r)
    throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id.");
  const a = () => {
    document.body.removeChild(Qt), n = !1;
  }, o = () => {
    document.body.appendChild(Qt), hp.render(tp({ id: r, destroyModal: a }));
  }, i = () => {
    switch (n = !n, n) {
      case !0:
        o();
        return;
      case !1:
        n = !1, a();
        return;
      default:
        return;
    }
  };
  Qt.addEventListener("click", (u) => {
    u.target === Qt && (n = !1, a());
  }), e.addEventListener("click", () => i());
}
const vp = `
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
`, bp = `
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
    margin-bottom: .5em;
}
.w3bb-quiz-welcome_screen p {
    margin-bottom: 1.5em;
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
    .w3bb-quiz-modal-main {
        padding: 2em 0;
    }
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
	.w3bb-quiz-modal-overlay {
		background-color: rgb(185 185 185 / 50%);
		backdrop-filter: blur(8px);
	}
}

`, yp = `
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`, Mr = document.querySelector("#w3bb-widget-toggler"), $o = document.createElement("div");
$o.id = "w3bb-quiz-root";
document.body.appendChild($o);
const Wo = document.createElement("style");
document.head.appendChild(Wo);
Wo.appendChild(document.createTextNode(bp));
Mr || (Wo.appendChild(document.createTextNode(vp)), $o.innerHTML = yp);
const wp = document.querySelector("#w3bb-widget-default-toggler");
gp({ visibleToggler: Mr != null ? Mr : wp });
