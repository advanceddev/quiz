var qi = { exports: {} }, ge = {}, Le = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt = Symbol.for("react.element"), ic = Symbol.for("react.portal"), sc = Symbol.for("react.fragment"), ac = Symbol.for("react.strict_mode"), cc = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), pc = Symbol.for("react.forward_ref"), mc = Symbol.for("react.suspense"), hc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), Ao = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object" ? null : (e = Ao && e[Ao] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zi = Object.assign, Ji = {};
function it(e, n, t) {
  this.props = e, this.context = n, this.refs = Ji, this.updater = t || Gi;
}
it.prototype.isReactComponent = {};
it.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
it.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bi() {
}
bi.prototype = it.prototype;
function Vu(e, n, t) {
  this.props = e, this.context = n, this.refs = Ji, this.updater = t || Gi;
}
var Hu = Vu.prototype = new bi();
Hu.constructor = Vu;
Zi(Hu, it.prototype);
Hu.isPureReactComponent = !0;
var $o = Array.isArray, es = Object.prototype.hasOwnProperty, Wu = { current: null }, ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, n, t) {
  var r, l = {}, u = null, o = null;
  if (n != null)
    for (r in n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (u = "" + n.key), n)
      es.call(n, r) && !ns.hasOwnProperty(r) && (l[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1)
    l.children = t;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in i = e.defaultProps, i)
      l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Zt, type: e, key: u, ref: o, props: l, _owner: Wu.current };
}
function gc(e, n) {
  return { $$typeof: Zt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Vo = /\/+/g;
function Cl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (u) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case ic:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + Cl(o, 0) : r, $o(l) ? (t = "", e != null && (t = e.replace(Vo, "$&/") + "/"), Sr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Qu(l) && (l = gc(l, t + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Vo, "$&/") + "/") + e)), n.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", $o(e))
    for (var i = 0; i < e.length; i++) {
      u = e[i];
      var s = r + Cl(u, i);
      o += Sr(u, n, t, s, l);
    }
  else if (s = yc(e), typeof s == "function")
    for (e = s.call(e), i = 0; !(u = e.next()).done; )
      u = u.value, s = r + Cl(u, i++), o += Sr(u, n, t, s, l);
  else if (u === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function lr(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(u) {
    return n.call(t, u, l++);
  }), r;
}
function kc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ie = { current: null }, Er = { transition: null }, Sc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: Er, ReactCurrentOwner: Wu };
T.Children = { map: lr, forEach: function(e, n, t) {
  lr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return lr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return lr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Qu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = it;
T.Fragment = sc;
T.Profiler = cc;
T.PureComponent = Vu;
T.StrictMode = ac;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
T.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zi({}, e.props), l = e.key, u = e.ref, o = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (u = n.ref, o = Wu.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var i = e.type.defaultProps;
    for (s in n)
      es.call(n, s) && !ns.hasOwnProperty(s) && (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++)
      i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: u, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fc, _context: e }, e.Consumer = e;
};
T.createElement = ts;
T.createFactory = function(e) {
  var n = ts.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: pc, render: e };
};
T.isValidElement = Qu;
T.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: kc };
};
T.memo = function(e, n) {
  return { $$typeof: hc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = n;
  }
};
T.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function(e, n) {
  return ie.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ie.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ie.current.useEffect(e, n);
};
T.useId = function() {
  return ie.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ie.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ie.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ie.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ie.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ie.current.useRef(e);
};
T.useState = function(e) {
  return ie.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ie.current.useTransition();
};
T.version = "18.2.0";
(function(e) {
  e.exports = T;
})(Le);
var rs = { exports: {} }, ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(x, N) {
    var P = x.length;
    x.push(N);
    e:
      for (; 0 < P; ) {
        var H = P - 1 >>> 1, X = x[H];
        if (0 < l(X, N))
          x[H] = N, x[P] = X, P = H;
        else
          break e;
      }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0)
      return null;
    var N = x[0], P = x.pop();
    if (P !== N) {
      x[0] = P;
      e:
        for (var H = 0, X = x.length, tr = X >>> 1; H < tr; ) {
          var yn = 2 * (H + 1) - 1, xl = x[yn], gn = yn + 1, rr = x[gn];
          if (0 > l(xl, P))
            gn < X && 0 > l(rr, xl) ? (x[H] = rr, x[gn] = P, H = gn) : (x[H] = xl, x[yn] = P, H = yn);
          else if (gn < X && 0 > l(rr, P))
            x[H] = rr, x[gn] = P, H = gn;
          else
            break e;
        }
    }
    return N;
  }
  function l(x, N) {
    var P = x.sortIndex - N.sortIndex;
    return P !== 0 ? P : x.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function() {
      return u.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= x)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w)
      if (t(s) !== null)
        w = !0, Sl(E);
      else {
        var N = t(c);
        N !== null && El(v, N.startTime - x);
      }
  }
  function E(x, N) {
    w = !1, k && (k = !1, f(z), z = -1), g = !0;
    var P = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || x && !ze()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = H(m.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? m.callback = X : m === t(s) && r(s), d(N);
        } else
          r(s);
        m = t(s);
      }
      if (m !== null)
        var tr = !0;
      else {
        var yn = t(c);
        yn !== null && El(v, yn.startTime - N), tr = !1;
      }
      return tr;
    } finally {
      m = null, p = P, g = !1;
    }
  }
  var C = !1, _ = null, z = -1, V = 5, L = -1;
  function ze() {
    return !(e.unstable_now() - L < V);
  }
  function ct() {
    if (_ !== null) {
      var x = e.unstable_now();
      L = x;
      var N = !0;
      try {
        N = _(!0, x);
      } finally {
        N ? ft() : (C = !1, _ = null);
      }
    } else
      C = !1;
  }
  var ft;
  if (typeof a == "function")
    ft = function() {
      a(ct);
    };
  else if (typeof MessageChannel < "u") {
    var Bo = new MessageChannel(), oc = Bo.port2;
    Bo.port1.onmessage = ct, ft = function() {
      oc.postMessage(null);
    };
  } else
    ft = function() {
      I(ct, 0);
    };
  function Sl(x) {
    _ = x, C || (C = !0, ft());
  }
  function El(x, N) {
    z = I(function() {
      x(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Sl(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var P = p;
    p = N;
    try {
      return x();
    } finally {
      p = P;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, N) {
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
    var P = p;
    p = x;
    try {
      return N();
    } finally {
      p = P;
    }
  }, e.unstable_scheduleCallback = function(x, N, P) {
    var H = e.unstable_now();
    switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? H + P : H) : P = H, x) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = P + X, x = { id: h++, callback: N, priorityLevel: x, startTime: P, expirationTime: X, sortIndex: -1 }, P > H ? (x.sortIndex = P, n(c, x), t(s) === null && x === t(c) && (k ? (f(z), z = -1) : k = !0, El(v, P - H))) : (x.sortIndex = X, n(s, x), w || g || (w = !0, Sl(E))), x;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(x) {
    var N = p;
    return function() {
      var P = p;
      p = N;
      try {
        return x.apply(this, arguments);
      } finally {
        p = P;
      }
    };
  };
})(ls);
(function(e) {
  e.exports = ls;
})(rs);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us = Le.exports, ye = rs.exports;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var os = /* @__PURE__ */ new Set(), Mt = {};
function Dn(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++)
    os.add(n[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Ec = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ho = {}, Wo = {};
function xc(e) {
  return Gl.call(Wo, e) ? !0 : Gl.call(Ho, e) ? !1 : Ec.test(e) ? Wo[e] = !0 : (Ho[e] = !0, !1);
}
function Cc(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _c(e, n, t, r) {
  if (n === null || typeof n > "u" || Cc(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, u, o) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = o;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ku = /[\-:]([a-z])/g;
function Yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Ku,
    Yu
  );
  b[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Ku, Yu);
  b[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Ku, Yu);
  b[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xu(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (_c(n, t, l, r) && (t = null), r || l === null ? xc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var qe = us.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = Symbol.for("react.element"), On = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), qu = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), is = Symbol.for("react.provider"), ss = Symbol.for("react.context"), Gu = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), bl = Symbol.for("react.suspense_list"), Zu = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), as = Symbol.for("react.offscreen"), Qo = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, _l;
function kt(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      _l = n && n[1] || "";
    }
  return `
` + _l + e;
}
var zl = !1;
function Nl(e, n) {
  if (!e || zl)
    return "";
  zl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
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
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? kt(e) : "";
}
function zc(e) {
  switch (e.tag) {
    case 5:
      return kt(e.type);
    case 16:
      return kt("Lazy");
    case 13:
      return kt("Suspense");
    case 19:
      return kt("SuspenseList");
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
function eu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case In:
      return "Fragment";
    case On:
      return "Portal";
    case Zl:
      return "Profiler";
    case qu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ss:
        return (e.displayName || "Context") + ".Consumer";
      case is:
        return (e._context.displayName || "Context") + ".Provider";
      case Gu:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Zu:
        return n = e.displayName || null, n !== null ? n : eu(e.type) || "Memo";
      case Ze:
        n = e._payload, e = e._init;
        try {
          return eu(e(n));
        } catch {
        }
    }
  return null;
}
function Nc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eu(n);
    case 8:
      return n === qu ? "StrictMode" : "Mode";
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
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function dn(e) {
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
function cs(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Pc(e) {
  var n = cs(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, u = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, u.call(this, o);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Pc(e));
}
function fs(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Mr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nu(e, n) {
  var t = n.checked;
  return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t != null ? t : e._wrapperState.initialChecked });
}
function Ko(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = dn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ds(e, n) {
  n = n.checked, n != null && Xu(e, "checked", n, !1);
}
function tu(e, n) {
  ds(e, n);
  var t = dn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? ru(e, n.type, t) : n.hasOwnProperty("defaultValue") && ru(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Yo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function ru(e, n, t) {
  (n !== "number" || Mr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Xn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function lu(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Xo(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (St(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: dn(t) };
}
function ps(e, n) {
  var t = dn(n.value), r = dn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uu(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ms(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ir, hs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ir.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ct = {
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
}, Tc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ct).forEach(function(e) {
  Tc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Ct[n] = Ct[e];
  });
});
function vs(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ct.hasOwnProperty(e) && Ct[e] ? ("" + n).trim() : n + "px";
}
function ys(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = vs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var Lc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ou(e, n) {
  if (n) {
    if (Lc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function iu(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
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
var su = null;
function Ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var au = null, qn = null, Gn = null;
function Go(e) {
  if (e = er(e)) {
    if (typeof au != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = sl(n), au(e.stateNode, e.type, n));
  }
}
function gs(e) {
  qn ? Gn ? Gn.push(e) : Gn = [e] : qn = e;
}
function ws() {
  if (qn) {
    var e = qn, n = Gn;
    if (Gn = qn = null, Go(e), n)
      for (e = 0; e < n.length; e++)
        Go(n[e]);
  }
}
function ks(e, n) {
  return e(n);
}
function Ss() {
}
var Pl = !1;
function Es(e, n, t) {
  if (Pl)
    return e(n, t);
  Pl = !0;
  try {
    return ks(e, n, t);
  } finally {
    Pl = !1, (qn !== null || Gn !== null) && (Ss(), ws());
  }
}
function It(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = sl(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
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
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var cu = !1;
if (Qe)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", { get: function() {
      cu = !0;
    } }), window.addEventListener("test", pt, pt), window.removeEventListener("test", pt, pt);
  } catch {
    cu = !1;
  }
function Dc(e, n, t, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var _t = !1, Or = null, Ir = !1, fu = null, Fc = { onError: function(e) {
  _t = !0, Or = e;
} };
function Rc(e, n, t, r, l, u, o, i, s) {
  _t = !1, Or = null, Dc.apply(Fc, arguments);
}
function Mc(e, n, t, r, l, u, o, i, s) {
  if (Rc.apply(this, arguments), _t) {
    if (_t) {
      var c = Or;
      _t = !1, Or = null;
    } else
      throw Error(y(198));
    Ir || (Ir = !0, fu = c);
  }
}
function Fn(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function xs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function Zo(e) {
  if (Fn(e) !== e)
    throw Error(y(188));
}
function Oc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Fn(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var u = l.alternate;
    if (u === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === t)
          return Zo(l), e;
        if (u === r)
          return Zo(l), n;
        u = u.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = u;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === t) {
          o = !0, t = l, r = u;
          break;
        }
        if (i === r) {
          o = !0, r = l, t = u;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === t) {
            o = !0, t = u, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = u, t = l;
            break;
          }
          i = i.sibling;
        }
        if (!o)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Cs(e) {
  return e = Oc(e), e !== null ? _s(e) : null;
}
function _s(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = _s(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var zs = ye.unstable_scheduleCallback, Jo = ye.unstable_cancelCallback, Ic = ye.unstable_shouldYield, jc = ye.unstable_requestPaint, W = ye.unstable_now, Uc = ye.unstable_getCurrentPriorityLevel, bu = ye.unstable_ImmediatePriority, Ns = ye.unstable_UserBlockingPriority, jr = ye.unstable_NormalPriority, Bc = ye.unstable_LowPriority, Ps = ye.unstable_IdlePriority, ll = null, Ue = null;
function Ac(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Fe = Math.clz32 ? Math.clz32 : Hc, $c = Math.log, Vc = Math.LN2;
function Hc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - ($c(e) / Vc | 0) | 0;
}
var sr = 64, ar = 4194304;
function Et(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Ur(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Et(i) : (u &= o, u !== 0 && (r = Et(u)));
  } else
    o = t & ~l, o !== 0 ? r = Et(o) : u !== 0 && (r = Et(u));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && (n & l) === 0 && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0))
    return n;
  if ((r & 4) !== 0 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Fe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Wc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function Qc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var o = 31 - Fe(u), i = 1 << o, s = l[o];
    s === -1 ? ((i & t) === 0 || (i & r) !== 0) && (l[o] = Wc(i, n)) : s <= n && (e.expiredLanes |= i), u &= ~i;
  }
}
function du(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ts() {
  var e = sr;
  return sr <<= 1, (sr & 4194240) === 0 && (sr = 64), e;
}
function Tl(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function Jt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Fe(n), e[n] = t;
}
function Kc(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t), u = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
  }
}
function eo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var F = 0;
function Ls(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Ds, no, Fs, Rs, Ms, pu = !1, cr = [], rn = null, ln = null, un = null, jt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), be = [], Yc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      jt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ut.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, u) {
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = er(n), n !== null && no(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Xc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return rn = mt(rn, e, n, t, r, l), !0;
    case "dragenter":
      return ln = mt(ln, e, n, t, r, l), !0;
    case "mouseover":
      return un = mt(un, e, n, t, r, l), !0;
    case "pointerover":
      var u = l.pointerId;
      return jt.set(u, mt(jt.get(u) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return u = l.pointerId, Ut.set(u, mt(Ut.get(u) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Os(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = Fn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = xs(t), n !== null) {
          e.blockedOn = n, Ms(e.priority, function() {
            Fs(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = mu(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      su = r, t.target.dispatchEvent(r), su = null;
    } else
      return n = er(t), n !== null && no(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function ei(e, n, t) {
  xr(e) && t.delete(n);
}
function qc() {
  pu = !1, rn !== null && xr(rn) && (rn = null), ln !== null && xr(ln) && (ln = null), un !== null && xr(un) && (un = null), jt.forEach(ei), Ut.forEach(ei);
}
function ht(e, n) {
  e.blockedOn === n && (e.blockedOn = null, pu || (pu = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, qc)));
}
function Bt(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < cr.length) {
    ht(cr[0], e);
    for (var t = 1; t < cr.length; t++) {
      var r = cr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && ht(rn, e), ln !== null && ht(ln, e), un !== null && ht(un, e), jt.forEach(n), Ut.forEach(n), t = 0; t < be.length; t++)
    r = be[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (t = be[0], t.blockedOn === null); )
    Os(t), t.blockedOn === null && be.shift();
}
var Zn = qe.ReactCurrentBatchConfig, Br = !0;
function Gc(e, n, t, r) {
  var l = F, u = Zn.transition;
  Zn.transition = null;
  try {
    F = 1, to(e, n, t, r);
  } finally {
    F = l, Zn.transition = u;
  }
}
function Zc(e, n, t, r) {
  var l = F, u = Zn.transition;
  Zn.transition = null;
  try {
    F = 4, to(e, n, t, r);
  } finally {
    F = l, Zn.transition = u;
  }
}
function to(e, n, t, r) {
  if (Br) {
    var l = mu(e, n, t, r);
    if (l === null)
      Bl(e, n, r, Ar, t), bo(e, r);
    else if (Xc(l, e, n, t, r))
      r.stopPropagation();
    else if (bo(e, r), n & 4 && -1 < Yc.indexOf(e)) {
      for (; l !== null; ) {
        var u = er(l);
        if (u !== null && Ds(u), u = mu(e, n, t, r), u === null && Bl(e, n, r, Ar, t), u === l)
          break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else
      Bl(e, n, r, null, t);
  }
}
var Ar = null;
function mu(e, n, t, r) {
  if (Ar = null, e = Ju(r), e = Sn(e), e !== null)
    if (n = Fn(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = xs(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return Ar = e, null;
}
function Is(e) {
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
      switch (Uc()) {
        case bu:
          return 1;
        case Ns:
          return 4;
        case jr:
        case Bc:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, ro = null, Cr = null;
function js() {
  if (Cr)
    return Cr;
  var e, n = ro, t = n.length, r, l = "value" in nn ? nn.value : nn.textContent, u = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[u - r]; r++)
    ;
  return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fr() {
  return !0;
}
function ni() {
  return !1;
}
function we(e) {
  function n(t, r, l, u, o) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
    for (var i in e)
      e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(u) : u[i]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? fr : ni, this.isPropagationStopped = ni, this;
  }
  return A(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = fr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = fr);
  }, persist: function() {
  }, isPersistent: fr }), n;
}
var st = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, lo = we(st), bt = A({}, st, { view: 0, detail: 0 }), Jc = we(bt), Ll, Dl, vt, ul = A({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vt && (vt && e.type === "mousemove" ? (Ll = e.screenX - vt.screenX, Dl = e.screenY - vt.screenY) : Dl = Ll = 0, vt = e), Ll);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Dl;
} }), ti = we(ul), bc = A({}, ul, { dataTransfer: 0 }), ef = we(bc), nf = A({}, bt, { relatedTarget: 0 }), Fl = we(nf), tf = A({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rf = we(tf), lf = A({}, st, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uf = we(lf), of = A({}, st, { data: 0 }), ri = we(of), sf = {
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
}, af = {
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
}, cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ff(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = cf[e]) ? !!n[e] : !1;
}
function uo() {
  return ff;
}
var df = A({}, bt, { key: function(e) {
  if (e.key) {
    var n = sf[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? af[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uo, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), pf = we(df), mf = A({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), li = we(mf), hf = A({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uo }), vf = we(hf), yf = A({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gf = we(yf), wf = A({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), kf = we(wf), Sf = [9, 13, 27, 32], oo = Qe && "CompositionEvent" in window, zt = null;
Qe && "documentMode" in document && (zt = document.documentMode);
var Ef = Qe && "TextEvent" in window && !zt, Us = Qe && (!oo || zt && 8 < zt && 11 >= zt), ui = String.fromCharCode(32), oi = !1;
function Bs(e, n) {
  switch (e) {
    case "keyup":
      return Sf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function As(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function xf(e, n) {
  switch (e) {
    case "compositionend":
      return As(n);
    case "keypress":
      return n.which !== 32 ? null : (oi = !0, ui);
    case "textInput":
      return e = n.data, e === ui && oi ? null : e;
    default:
      return null;
  }
}
function Cf(e, n) {
  if (jn)
    return e === "compositionend" || !oo && Bs(e, n) ? (e = js(), Cr = ro = nn = null, jn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Us && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var _f = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ii(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!_f[e.type] : n === "textarea";
}
function $s(e, n, t, r) {
  gs(r), n = $r(n, "onChange"), 0 < n.length && (t = new lo("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Nt = null, At = null;
function zf(e) {
  Js(e, 0);
}
function ol(e) {
  var n = An(e);
  if (fs(n))
    return e;
}
function Nf(e, n) {
  if (e === "change")
    return n;
}
var Vs = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var si = document.createElement("div");
      si.setAttribute("oninput", "return;"), Ml = typeof si.oninput == "function";
    }
    Rl = Ml;
  } else
    Rl = !1;
  Vs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function ai() {
  Nt && (Nt.detachEvent("onpropertychange", Hs), At = Nt = null);
}
function Hs(e) {
  if (e.propertyName === "value" && ol(At)) {
    var n = [];
    $s(n, At, e, Ju(e)), Es(zf, n);
  }
}
function Pf(e, n, t) {
  e === "focusin" ? (ai(), Nt = n, At = t, Nt.attachEvent("onpropertychange", Hs)) : e === "focusout" && ai();
}
function Tf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(At);
}
function Lf(e, n) {
  if (e === "click")
    return ol(n);
}
function Df(e, n) {
  if (e === "input" || e === "change")
    return ol(n);
}
function Ff(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Me = typeof Object.is == "function" ? Object.is : Ff;
function $t(e, n) {
  if (Me(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Me(e[l], n[l]))
      return !1;
  }
  return !0;
}
function ci(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function fi(e, n) {
  var t = ci(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ci(t);
  }
}
function Ws(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ws(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Qs() {
  for (var e = window, n = Mr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = Mr(e.document);
  }
  return n;
}
function io(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Rf(e) {
  var n = Qs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Ws(t.ownerDocument.documentElement, t)) {
    if (r !== null && io(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = fi(t, u);
        var o = fi(
          t,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Mf = Qe && "documentMode" in document && 11 >= document.documentMode, Un = null, hu = null, Pt = null, vu = !1;
function di(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  vu || Un == null || Un !== Mr(r) || (r = Un, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pt && $t(Pt, r) || (Pt = r, r = $r(hu, "onSelect"), 0 < r.length && (n = new lo("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Un)));
}
function dr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Bn = { animationend: dr("Animation", "AnimationEnd"), animationiteration: dr("Animation", "AnimationIteration"), animationstart: dr("Animation", "AnimationStart"), transitionend: dr("Transition", "TransitionEnd") }, Ol = {}, Ks = {};
Qe && (Ks = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
function il(e) {
  if (Ol[e])
    return Ol[e];
  if (!Bn[e])
    return e;
  var n = Bn[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in Ks)
      return Ol[e] = n[t];
  return e;
}
var Ys = il("animationend"), Xs = il("animationiteration"), qs = il("animationstart"), Gs = il("transitionend"), Zs = /* @__PURE__ */ new Map(), pi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, n) {
  Zs.set(e, n), Dn(n, [e]);
}
for (var Il = 0; Il < pi.length; Il++) {
  var jl = pi[Il], Of = jl.toLowerCase(), If = jl[0].toUpperCase() + jl.slice(1);
  mn(Of, "on" + If);
}
mn(Ys, "onAnimationEnd");
mn(Xs, "onAnimationIteration");
mn(qs, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Gs, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));
function mi(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Mc(r, n, void 0, e), e.currentTarget = null;
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, c = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped())
            break e;
          mi(l, i, c), u = s;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, c = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped())
            break e;
          mi(l, i, c), u = s;
        }
    }
  }
  if (Ir)
    throw e = fu, Ir = !1, fu = null, e;
}
function M(e, n) {
  var t = n[Su];
  t === void 0 && (t = n[Su] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (bs(n, e, 2, !1), t.add(r));
}
function Ul(e, n, t) {
  var r = 0;
  n && (r |= 4), bs(t, e, r, n);
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[pr]) {
    e[pr] = !0, os.forEach(function(t) {
      t !== "selectionchange" && (jf.has(t) || Ul(t, !1, e), Ul(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[pr] || (n[pr] = !0, Ul("selectionchange", !1, n));
  }
}
function bs(e, n, t, r) {
  switch (Is(n)) {
    case 1:
      var l = Gc;
      break;
    case 4:
      l = Zc;
      break;
    default:
      l = to;
  }
  t = l.bind(null, n, t, e), l = void 0, !cu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Bl(e, n, t, r, l) {
  var u = r;
  if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
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
              var s = o.tag;
              if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (o = Sn(i), o === null)
              return;
            if (s = o.tag, s === 5 || s === 6) {
              r = u = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
  Es(function() {
    var c = u, h = Ju(t), m = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var g = lo, w = e;
        switch (e) {
          case "keypress":
            if (_r(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = pf;
            break;
          case "focusin":
            w = "focus", g = Fl;
            break;
          case "focusout":
            w = "blur", g = Fl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Fl;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ti;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ef;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = vf;
            break;
          case Ys:
          case Xs:
          case qs:
            g = rf;
            break;
          case Gs:
            g = gf;
            break;
          case "scroll":
            g = Jc;
            break;
          case "wheel":
            g = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = li;
        }
        var k = (n & 4) !== 0, I = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = It(a, f), v != null && k.push(Ht(a, v, d)))), I)
            break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, t, h), m.push({ event: p, listeners: k }));
      }
    }
    if ((n & 7) === 0) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== su && (w = t.relatedTarget || t.fromElement) && (Sn(w) || w[Ke]))
          break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? Sn(w) : null, w !== null && (I = Fn(w), w !== I || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = ti, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = li, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = g == null ? p : An(g), d = w == null ? p : An(w), p = new k(v, a + "leave", g, t, h), p.target = I, p.relatedTarget = d, v = null, Sn(h) === c && (k = new k(f, a + "enter", w, t, h), k.target = d, k.relatedTarget = I, v = k), I = v, g && w)
            n: {
              for (k = g, f = w, a = 0, d = k; d; d = Rn(d))
                a++;
              for (d = 0, v = f; v; v = Rn(v))
                d++;
              for (; 0 < a - d; )
                k = Rn(k), a--;
              for (; 0 < d - a; )
                f = Rn(f), d--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break n;
                k = Rn(k), f = Rn(f);
              }
              k = null;
            }
          else
            k = null;
          g !== null && hi(m, p, g, k, !1), w !== null && I !== null && hi(m, I, w, k, !0);
        }
      }
      e: {
        if (p = c ? An(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = Nf;
        else if (ii(p))
          if (Vs)
            E = Df;
          else {
            E = Tf;
            var C = Pf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Lf);
        if (E && (E = E(e, c))) {
          $s(m, E, t, h);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ru(p, "number", p.value);
      }
      switch (C = c ? An(c) : window, e) {
        case "focusin":
          (ii(C) || C.contentEditable === "true") && (Un = C, hu = c, Pt = null);
          break;
        case "focusout":
          Pt = hu = Un = null;
          break;
        case "mousedown":
          vu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vu = !1, di(m, t, h);
          break;
        case "selectionchange":
          if (Mf)
            break;
        case "keydown":
        case "keyup":
          di(m, t, h);
      }
      var _;
      if (oo)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        jn ? Bs(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (Us && t.locale !== "ko" && (jn || z !== "onCompositionStart" ? z === "onCompositionEnd" && jn && (_ = js()) : (nn = h, ro = "value" in nn ? nn.value : nn.textContent, jn = !0)), C = $r(c, z), 0 < C.length && (z = new ri(z, e, null, t, h), m.push({ event: z, listeners: C }), _ ? z.data = _ : (_ = As(t), _ !== null && (z.data = _)))), (_ = Ef ? xf(e, t) : Cf(e, t)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (h = new ri("onBeforeInput", "beforeinput", null, t, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    Js(m, n);
  });
}
function Ht(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, u = l.stateNode;
    l.tag === 5 && u !== null && (l = u, u = It(e, t), u != null && r.unshift(Ht(e, u, l)), u = It(e, n), u != null && r.push(Ht(e, u, l))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hi(e, n, t, r, l) {
  for (var u = n._reactName, o = []; t !== null && t !== r; ) {
    var i = t, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r)
      break;
    i.tag === 5 && c !== null && (i = c, l ? (s = It(t, u), s != null && o.unshift(Ht(t, s, i))) : l || (s = It(t, u), s != null && o.push(Ht(t, s, i)))), t = t.return;
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Uf = /\r\n?/g, Bf = /\u0000|\uFFFD/g;
function vi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Uf, `
`).replace(Bf, "");
}
function mr(e, n, t) {
  if (n = vi(n), vi(e) !== n && t)
    throw Error(y(425));
}
function Vr() {
}
var yu = null, gu = null;
function wu(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0, Af = typeof clearTimeout == "function" ? clearTimeout : void 0, yi = typeof Promise == "function" ? Promise : void 0, $f = typeof queueMicrotask == "function" ? queueMicrotask : typeof yi < "u" ? function(e) {
  return yi.resolve(null).then(e).catch(Vf);
} : ku;
function Vf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Al(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Bt(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Bt(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function gi(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2), je = "__reactFiber$" + at, Wt = "__reactProps$" + at, Ke = "__reactContainer$" + at, Su = "__reactEvents$" + at, Hf = "__reactListeners$" + at, Wf = "__reactHandles$" + at;
function Sn(e) {
  var n = e[je];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Ke] || t[je]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = gi(e); e !== null; ) {
          if (t = e[je])
            return t;
          e = gi(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function er(e) {
  return e = e[je] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function An(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Wt] || null;
}
var Eu = [], $n = -1;
function hn(e) {
  return { current: e };
}
function O(e) {
  0 > $n || (e.current = Eu[$n], Eu[$n] = null, $n--);
}
function R(e, n) {
  $n++, Eu[$n] = e.current, e.current = n;
}
var pn = {}, re = hn(pn), fe = hn(!1), zn = pn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, u;
  for (u in t)
    l[u] = n[u];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Hr() {
  O(fe), O(re);
}
function wi(e, n, t) {
  if (re.current !== pn)
    throw Error(y(168));
  R(re, n), R(fe, t);
}
function ea(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, Nc(e) || "Unknown", l));
  return A({}, t, r);
}
function Wr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, zn = re.current, R(re, e), R(fe, fe.current), !0;
}
function ki(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = ea(e, n, zn), r.__reactInternalMemoizedMergedChildContext = e, O(fe), O(re), R(re, e)) : O(fe), R(fe, t);
}
var $e = null, al = !1, $l = !1;
function na(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function Qf(e) {
  al = !0, na(e);
}
function vn() {
  if (!$l && $e !== null) {
    $l = !0;
    var e = 0, n = F;
    try {
      var t = $e;
      for (F = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $e = null, al = !1;
    } catch (l) {
      throw $e !== null && ($e = $e.slice(e + 1)), zs(bu, vn), l;
    } finally {
      F = n, $l = !1;
    }
  }
  return null;
}
var Vn = [], Hn = 0, Qr = null, Kr = 0, ke = [], Se = 0, Nn = null, Ve = 1, He = "";
function wn(e, n) {
  Vn[Hn++] = Kr, Vn[Hn++] = Qr, Qr = e, Kr = n;
}
function ta(e, n, t) {
  ke[Se++] = Ve, ke[Se++] = He, ke[Se++] = Nn, Nn = e;
  var r = Ve;
  e = He;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), t += 1;
  var u = 32 - Fe(n) + l;
  if (30 < u) {
    var o = l - l % 5;
    u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ve = 1 << 32 - Fe(n) + l | t << l | r, He = u + e;
  } else
    Ve = 1 << u | t << l | r, He = e;
}
function so(e) {
  e.return !== null && (wn(e, 1), ta(e, 1, 0));
}
function ao(e) {
  for (; e === Qr; )
    Qr = Vn[--Hn], Vn[Hn] = null, Kr = Vn[--Hn], Vn[Hn] = null;
  for (; e === Nn; )
    Nn = ke[--Se], ke[Se] = null, He = ke[--Se], ke[Se] = null, Ve = ke[--Se], ke[Se] = null;
}
var ve = null, he = null, j = !1, De = null;
function ra(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Si(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, he = on(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Nn !== null ? { id: Ve, overflow: He } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (j) {
    var n = he;
    if (n) {
      var t = n;
      if (!Si(e, n)) {
        if (xu(e))
          throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && Si(e, n) ? ra(r, t) : (e.flags = e.flags & -4097 | 2, j = !1, ve = e);
      }
    } else {
      if (xu(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, j = !1, ve = e;
    }
  }
}
function Ei(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function hr(e) {
  if (e !== ve)
    return !1;
  if (!j)
    return Ei(e), j = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !wu(e.type, e.memoizedProps)), n && (n = he)) {
    if (xu(e))
      throw la(), Error(y(418));
    for (; n; )
      ra(e, n), n = on(n.nextSibling);
  }
  if (Ei(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else
    he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function la() {
  for (var e = he; e; )
    e = on(e.nextSibling);
}
function tt() {
  he = ve = null, j = !1;
}
function co(e) {
  De === null ? De = [e] : De.push(e);
}
var Kf = qe.ReactCurrentBatchConfig;
function Pe(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Yr = hn(null), Xr = null, Wn = null, fo = null;
function po() {
  fo = Wn = Xr = null;
}
function mo(e) {
  var n = Yr.current;
  O(Yr), e._currentValue = n;
}
function _u(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  Xr = e, fo = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (fo !== e)
    if (e = { context: e, memoizedValue: n, next: null }, Wn === null) {
      if (Xr === null)
        throw Error(y(308));
      Wn = e, Xr.dependencies = { lanes: 0, firstContext: e };
    } else
      Wn = Wn.next = e;
  return n;
}
var En = null;
function ho(e) {
  En === null ? En = [e] : En.push(e);
}
function ua(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, ho(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ye(e, r);
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function vo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function oa(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (D & 2) !== 0) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ye(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, ho(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ye(e, t);
}
function zr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, eo(e, t);
  }
}
function xi(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, u = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        u === null ? l = u = o : u = u.next = o, t = t.next;
      } while (t !== null);
      u === null ? l = u = n : u = u.next = n;
    } else
      l = u = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function qr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, o === null ? u = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = c : i.next = c, h.lastBaseUpdate = s));
  }
  if (u !== null) {
    var m = l.baseState;
    o = 0, h = c = s = null, i = u;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, k = i;
          switch (p = n, g = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null)
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else
        g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, o |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null)
          break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        o |= l.lane, l = l.next;
      while (l !== n);
    } else
      u === null && (l.shared.lanes = 0);
    Tn |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Ci(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ia = new us.Component().refs;
function zu(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = cn(e), u = We(r, l);
  u.payload = n, t != null && (u.callback = t), n = sn(e, u, l), n !== null && (Re(n, e, l, r), zr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = cn(e), u = We(r, l);
  u.tag = 1, u.payload = n, t != null && (u.callback = t), n = sn(e, u, l), n !== null && (Re(n, e, l, r), zr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = cn(e), l = We(t, r);
  l.tag = 2, n != null && (l.callback = n), n = sn(e, l, r), n !== null && (Re(n, e, r, t), zr(n, e, r));
} };
function _i(e, n, t, r, l, u, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : n.prototype && n.prototype.isPureReactComponent ? !$t(t, r) || !$t(l, u) : !0;
}
function sa(e, n, t) {
  var r = !1, l = pn, u = n.contextType;
  return typeof u == "object" && u !== null ? u = Ce(u) : (l = de(n) ? zn : re.current, r = n.contextTypes, u = (r = r != null) ? nt(e, l) : pn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
}
function zi(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function Nu(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = ia, vo(e);
  var u = n.contextType;
  typeof u == "object" && u !== null ? l.context = Ce(u) : (u = de(n) ? zn : re.current, l.context = nt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (zu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && cl.enqueueReplaceState(l, l.state, null), qr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, u = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(o) {
        var i = l.refs;
        i === ia && (i = l.refs = {}), o === null ? delete i[u] : i[u] = o;
      }, n._stringRef = u, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function vr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Ni(e) {
  var n = e._init;
  return n(e._payload);
}
function aa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = fn(f, a), f.index = 0, f.sibling = null, f;
  }
  function u(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Xl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === In ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && Ni(E) === a.type) ? (v = l(a, d.props), v.ref = yt(f, a, d), v.return = f, v) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = yt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = _n(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Xl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ur:
          return d = Fr(a.type, a.key, a.props, null, f.mode, d), d.ref = yt(f, null, a), d.return = f, d;
        case On:
          return a = ql(a, f.mode, d), a.return = f, a;
        case Ze:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (St(a) || dt(a))
        return a = _n(a, f.mode, d, null), a.return = f, a;
      vr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          return d.key === E ? s(f, a, d, v) : null;
        case On:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (St(d) || dt(d))
        return E !== null ? null : h(f, a, d, v, null);
      vr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ur:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case On:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Ze:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (St(v) || dt(v))
        return f = f.get(d) || null, h(a, f, v, E, null);
      vr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, C = null, _ = a, z = a = 0, V = null; _ !== null && z < d.length; z++) {
      _.index > z ? (V = _, _ = null) : V = _.sibling;
      var L = p(f, _, d[z], v);
      if (L === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && L.alternate === null && n(f, _), a = u(L, a, z), C === null ? E = L : C.sibling = L, C = L, _ = V;
    }
    if (z === d.length)
      return t(f, _), j && wn(f, z), E;
    if (_ === null) {
      for (; z < d.length; z++)
        _ = m(f, d[z], v), _ !== null && (a = u(_, a, z), C === null ? E = _ : C.sibling = _, C = _);
      return j && wn(f, z), E;
    }
    for (_ = r(f, _); z < d.length; z++)
      V = g(_, f, z, d[z], v), V !== null && (e && V.alternate !== null && _.delete(V.key === null ? z : V.key), a = u(V, a, z), C === null ? E = V : C.sibling = V, C = V);
    return e && _.forEach(function(ze) {
      return n(f, ze);
    }), j && wn(f, z), E;
  }
  function k(f, a, d, v) {
    var E = dt(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var C = E = null, _ = a, z = a = 0, V = null, L = d.next(); _ !== null && !L.done; z++, L = d.next()) {
      _.index > z ? (V = _, _ = null) : V = _.sibling;
      var ze = p(f, _, L.value, v);
      if (ze === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && ze.alternate === null && n(f, _), a = u(ze, a, z), C === null ? E = ze : C.sibling = ze, C = ze, _ = V;
    }
    if (L.done)
      return t(
        f,
        _
      ), j && wn(f, z), E;
    if (_ === null) {
      for (; !L.done; z++, L = d.next())
        L = m(f, L.value, v), L !== null && (a = u(L, a, z), C === null ? E = L : C.sibling = L, C = L);
      return j && wn(f, z), E;
    }
    for (_ = r(f, _); !L.done; z++, L = d.next())
      L = g(_, f, z, L.value, v), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? z : L.key), a = u(L, a, z), C === null ? E = L : C.sibling = L, C = L);
    return e && _.forEach(function(ct) {
      return n(f, ct);
    }), j && wn(f, z), E;
  }
  function I(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === In && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === In) {
                  if (C.tag === 7) {
                    t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && Ni(E) === C.type) {
                  t(f, C.sibling), a = l(C, d.props), a.ref = yt(f, C, d), a.return = f, f = a;
                  break e;
                }
                t(f, C);
                break;
              } else
                n(f, C);
              C = C.sibling;
            }
            d.type === In ? (a = _n(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = yt(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case On:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = ql(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case Ze:
          return C = d._init, I(f, a, C(d._payload), v);
      }
      if (St(d))
        return w(f, a, d, v);
      if (dt(d))
        return k(f, a, d, v);
      vr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Xl(d, f.mode, v), a.return = f, f = a), o(f)) : t(f, a);
  }
  return I;
}
var rt = aa(!0), ca = aa(!1), nr = {}, Be = hn(nr), Qt = hn(nr), Kt = hn(nr);
function xn(e) {
  if (e === nr)
    throw Error(y(174));
  return e;
}
function yo(e, n) {
  switch (R(Kt, n), R(Qt, e), R(Be, nr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : uu(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = uu(n, e);
  }
  O(Be), R(Be, n);
}
function lt() {
  O(Be), O(Qt), O(Kt);
}
function fa(e) {
  xn(Kt.current);
  var n = xn(Be.current), t = uu(n, e.type);
  n !== t && (R(Qt, e), R(Be, t));
}
function go(e) {
  Qt.current === e && (O(Be), O(Qt));
}
var U = hn(0);
function Gr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if ((n.flags & 128) !== 0)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Vl = [];
function wo() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Nr = qe.ReactCurrentDispatcher, Hl = qe.ReactCurrentBatchConfig, Pn = 0, B = null, K = null, q = null, Zr = !1, Tt = !1, Yt = 0, Yf = 0;
function ee() {
  throw Error(y(321));
}
function ko(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Me(e[t], n[t]))
      return !1;
  return !0;
}
function So(e, n, t, r, l, u) {
  if (Pn = u, B = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Nr.current = e === null || e.memoizedState === null ? Zf : Jf, e = t(r, l), Tt) {
    u = 0;
    do {
      if (Tt = !1, Yt = 0, 25 <= u)
        throw Error(y(301));
      u += 1, q = K = null, n.updateQueue = null, Nr.current = bf, e = t(r, l);
    } while (Tt);
  }
  if (Nr.current = Jr, n = K !== null && K.next !== null, Pn = 0, q = K = B = null, Zr = !1, n)
    throw Error(y(300));
  return e;
}
function Eo() {
  var e = Yt !== 0;
  return Yt = 0, e;
}
function Ie() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? B.memoizedState = q = e : q = q.next = e, q;
}
function _e() {
  if (K === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var n = q === null ? B.memoizedState : q.next;
  if (n !== null)
    q = n, K = e;
  else {
    if (e === null)
      throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, q === null ? B.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function Xt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Wl(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, u = t.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = u.next, u.next = o;
    }
    r.baseQueue = l = u, t.pending = null;
  }
  if (l !== null) {
    u = l.next, r = r.baseState;
    var i = o = null, s = null, c = u;
    do {
      var h = c.lane;
      if ((Pn & h) === h)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = m, o = r) : s = s.next = m, B.lanes |= h, Tn |= h;
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? o = r : s.next = i, Me(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      u = l.lane, B.lanes |= u, Tn |= u, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Ql(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, u = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = l = l.next;
    do
      u = e(u, o.action), o = o.next;
    while (o !== l);
    Me(u, n.memoizedState) || (ce = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
  }
  return [u, r];
}
function da() {
}
function pa(e, n) {
  var t = B, r = _e(), l = n(), u = !Me(r.memoizedState, l);
  if (u && (r.memoizedState = l, ce = !0), r = r.queue, xo(va.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || q !== null && q.memoizedState.tag & 1) {
    if (t.flags |= 2048, qt(9, ha.bind(null, t, r, l, n), void 0, null), G === null)
      throw Error(y(349));
    (Pn & 30) !== 0 || ma(t, n, l);
  }
  return l;
}
function ma(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = B.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, B.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function ha(e, n, t, r) {
  n.value = t, n.getSnapshot = r, ya(n) && ga(e);
}
function va(e, n, t) {
  return t(function() {
    ya(n) && ga(e);
  });
}
function ya(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Me(e, t);
  } catch {
    return !0;
  }
}
function ga(e) {
  var n = Ye(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Pi(e) {
  var n = Ie();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: e }, n.queue = e, e = e.dispatch = Gf.bind(null, B, e), [n.memoizedState, e];
}
function qt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = B.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, B.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function wa() {
  return _e().memoizedState;
}
function Pr(e, n, t, r) {
  var l = Ie();
  B.flags |= e, l.memoizedState = qt(1 | n, t, void 0, r === void 0 ? null : r);
}
function fl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (u = o.destroy, r !== null && ko(r, o.deps)) {
      l.memoizedState = qt(n, t, u, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = qt(1 | n, t, u, r);
}
function Ti(e, n) {
  return Pr(8390656, 8, e, n);
}
function xo(e, n) {
  return fl(2048, 8, e, n);
}
function ka(e, n) {
  return fl(4, 2, e, n);
}
function Sa(e, n) {
  return fl(4, 4, e, n);
}
function Ea(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function xa(e, n, t) {
  return t = t != null ? t.concat([e]) : null, fl(4, 4, Ea.bind(null, n, e), t);
}
function Co() {
}
function Ca(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ko(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function _a(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ko(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function za(e, n, t) {
  return (Pn & 21) === 0 ? (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t) : (Me(t, n) || (t = Ts(), B.lanes |= t, Tn |= t, e.baseState = !0), n);
}
function Xf(e, n) {
  var t = F;
  F = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), n();
  } finally {
    F = t, Hl.transition = r;
  }
}
function Na() {
  return _e().memoizedState;
}
function qf(e, n, t) {
  var r = cn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Pa(e))
    Ta(n, t);
  else if (t = ua(e, n, t, r), t !== null) {
    var l = oe();
    Re(t, e, r, l), La(t, n, r);
  }
}
function Gf(e, n, t) {
  var r = cn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e))
    Ta(n, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null))
      try {
        var o = n.lastRenderedState, i = u(o, t);
        if (l.hasEagerState = !0, l.eagerState = i, Me(i, o)) {
          var s = n.interleaved;
          s === null ? (l.next = l, ho(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ua(e, n, l, r), t !== null && (l = oe(), Re(t, e, r, l), La(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === B || n !== null && n === B;
}
function Ta(e, n) {
  Tt = Zr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function La(e, n, t) {
  if ((t & 4194240) !== 0) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, eo(e, t);
  }
}
var Jr = { readContext: Ce, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, Zf = { readContext: Ce, useCallback: function(e, n) {
  return Ie().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Ti, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Pr(
    4194308,
    4,
    Ea.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Pr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Pr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ie();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ie();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = qf.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ie();
  return e = { current: e }, n.memoizedState = e;
}, useState: Pi, useDebugValue: Co, useDeferredValue: function(e) {
  return Ie().memoizedState = e;
}, useTransition: function() {
  var e = Pi(!1), n = e[0];
  return e = Xf.bind(null, e[1]), Ie().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = B, l = Ie();
  if (j) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), G === null)
      throw Error(y(349));
    (Pn & 30) !== 0 || ma(r, n, t);
  }
  l.memoizedState = t;
  var u = { value: t, getSnapshot: n };
  return l.queue = u, Ti(va.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, qt(9, ha.bind(null, r, u, t, n), void 0, null), t;
}, useId: function() {
  var e = Ie(), n = G.identifierPrefix;
  if (j) {
    var t = He, r = Ve;
    t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Yt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = Yf++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Jf = {
  readContext: Ce,
  useCallback: Ca,
  useContext: Ce,
  useEffect: xo,
  useImperativeHandle: xa,
  useInsertionEffect: ka,
  useLayoutEffect: Sa,
  useMemo: _a,
  useReducer: Wl,
  useRef: wa,
  useState: function() {
    return Wl(Xt);
  },
  useDebugValue: Co,
  useDeferredValue: function(e) {
    var n = _e();
    return za(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Wl(Xt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: da,
  useSyncExternalStore: pa,
  useId: Na,
  unstable_isNewReconciler: !1
}, bf = { readContext: Ce, useCallback: Ca, useContext: Ce, useEffect: xo, useImperativeHandle: xa, useInsertionEffect: ka, useLayoutEffect: Sa, useMemo: _a, useReducer: Ql, useRef: wa, useState: function() {
  return Ql(Xt);
}, useDebugValue: Co, useDeferredValue: function(e) {
  var n = _e();
  return K === null ? n.memoizedState = e : za(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Ql(Xt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: da, useSyncExternalStore: pa, useId: Na, unstable_isNewReconciler: !1 };
function ut(e, n) {
  try {
    var t = "", r = n;
    do
      t += zc(r), r = r.return;
    while (r);
    var l = t;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Kl(e, n, t) {
  return { value: e, source: null, stack: t != null ? t : null, digest: n != null ? n : null };
}
function Pu(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var ed = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, n, t) {
  t = We(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    el || (el = !0, Uu = r), Pu(e, n);
  }, t;
}
function Fa(e, n, t) {
  t = We(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Pu(e, n);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
    Pu(e, n), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var o = n.stack;
    this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Li(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ed();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = md.bind(null, e, n, t), n.then(e, e));
}
function Di(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fi(e, n, t, r, l) {
  return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = We(-1, 1), n.tag = 2, sn(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
}
var nd = qe.ReactCurrentOwner, ce = !1;
function le(e, n, t, r) {
  n.child = e === null ? ca(n, null, t, r) : rt(n, e.child, t, r);
}
function Ri(e, n, t, r, l) {
  t = t.render;
  var u = n.ref;
  return Jn(n, l), r = So(e, n, t, r, u, l), t = Eo(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (j && t && so(n), n.flags |= 1, le(e, n, r, l), n.child);
}
function Mi(e, n, t, r, l) {
  if (e === null) {
    var u = t.type;
    return typeof u == "function" && !Fo(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Ra(e, n, u, r, l)) : (e = Fr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (u = e.child, (e.lanes & l) === 0) {
    var o = u.memoizedProps;
    if (t = t.compare, t = t !== null ? t : $t, t(o, r) && e.ref === n.ref)
      return Xe(e, n, l);
  }
  return n.flags |= 1, e = fn(u, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if ($t(u, r) && e.ref === n.ref)
      if (ce = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)
        (e.flags & 131072) !== 0 && (ce = !0);
      else
        return n.lanes = e.lanes, Xe(e, n, l);
  }
  return Tu(e, n, t, r, l);
}
function Ma(e, n, t) {
  var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((n.mode & 1) === 0)
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, R(Kn, me), me |= t;
    else {
      if ((t & 1073741824) === 0)
        return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, R(Kn, me), me |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, R(Kn, me), me |= r;
    }
  else
    u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, R(Kn, me), me |= r;
  return le(e, n, l, t), n.child;
}
function Oa(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Tu(e, n, t, r, l) {
  var u = de(t) ? zn : re.current;
  return u = nt(n, u), Jn(n, l), t = So(e, n, t, r, u, l), r = Eo(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (j && r && so(n), n.flags |= 1, le(e, n, t, l), n.child);
}
function Oi(e, n, t, r, l) {
  if (de(t)) {
    var u = !0;
    Wr(n);
  } else
    u = !1;
  if (Jn(n, l), n.stateNode === null)
    Tr(e, n), sa(n, t, r), Nu(n, t, r, l), r = !0;
  else if (e === null) {
    var o = n.stateNode, i = n.memoizedProps;
    o.props = i;
    var s = o.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(t) ? zn : re.current, c = nt(n, c));
    var h = t.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== c) && zi(n, o, r, c), Je = !1;
    var p = n.memoizedState;
    o.state = p, qr(n, r, o, l), s = n.memoizedState, i !== r || p !== s || fe.current || Je ? (typeof h == "function" && (zu(n, t, h, r), s = n.memoizedState), (i = Je || _i(n, t, i, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = c, r = i) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    o = n.stateNode, oa(e, n), i = n.memoizedProps, c = n.type === n.elementType ? i : Pe(n.type, i), o.props = c, m = n.pendingProps, p = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(t) ? zn : re.current, s = nt(n, s));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== s) && zi(n, o, r, s), Je = !1, p = n.memoizedState, o.state = p, qr(n, r, o, l);
    var w = n.memoizedState;
    i !== m || p !== w || fe.current || Je ? (typeof g == "function" && (zu(n, t, g, r), w = n.memoizedState), (c = Je || _i(n, t, c, r, p, w, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Lu(e, n, t, r, u, l);
}
function Lu(e, n, t, r, l, u) {
  Oa(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o)
    return l && ki(n, t, !1), Xe(e, n, u);
  r = n.stateNode, nd.current = n;
  var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && o ? (n.child = rt(n, e.child, null, u), n.child = rt(n, null, i, u)) : le(e, n, i, u), n.memoizedState = r.state, l && ki(n, t, !0), n.child;
}
function Ia(e) {
  var n = e.stateNode;
  n.pendingContext ? wi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && wi(e, n.context, !1), yo(e, n.containerInfo);
}
function Ii(e, n, t, r, l) {
  return tt(), co(l), n.flags |= 256, le(e, n, t, r), n.child;
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ja(e, n, t) {
  var r = n.pendingProps, l = U.current, u = !1, o = (n.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), R(U, l & 1), e === null)
    return Cu(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = ml(o, r, 0, null), e = _n(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Fu(t), n.memoizedState = Du, e) : _o(n, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
    return td(e, n, o, r, i, l, t);
  if (u) {
    u = r.fallback, o = n.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return (o & 1) === 0 && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = fn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = fn(i, u) : (u = _n(u, o, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, o = e.child.memoizedState, o = o === null ? Fu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~t, n.memoizedState = Du, r;
  }
  return u = e.child, e = u.sibling, r = fn(u, { mode: "visible", children: r.children }), (n.mode & 1) === 0 && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function _o(e, n) {
  return n = ml({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function yr(e, n, t, r) {
  return r !== null && co(r), rt(n, e.child, null, t), e = _o(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function td(e, n, t, r, l, u, o) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Kl(Error(y(422))), yr(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), u = _n(u, l, o, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, (n.mode & 1) !== 0 && rt(n, e.child, null, o), n.child.memoizedState = Fu(o), n.memoizedState = Du, u);
  if ((n.mode & 1) === 0)
    return yr(e, n, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var i = r.dgst;
    return r = i, u = Error(y(419)), r = Kl(u, r, void 0), yr(e, n, o, r);
  }
  if (i = (o & e.childLanes) !== 0, ce || i) {
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
      l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ye(e, l), Re(r, e, l, -1));
    }
    return Do(), r = Kl(Error(y(421))), yr(e, n, o, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = hd.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, he = on(l.nextSibling), ve = n, j = !0, De = null, e !== null && (ke[Se++] = Ve, ke[Se++] = He, ke[Se++] = Nn, Ve = e.id, He = e.overflow, Nn = n), n = _o(n, r.children), n.flags |= 4096, n);
}
function ji(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), _u(e.return, n, t);
}
function Yl(e, n, t, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
}
function Ua(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, u = r.tail;
  if (le(e, n, r.children, t), r = U.current, (r & 2) !== 0)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ji(e, t, n);
          else if (e.tag === 19)
            ji(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (R(U, r), (n.mode & 1) === 0)
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && Gr(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Yl(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Gr(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Yl(n, !0, t, null, u);
        break;
      case "together":
        Yl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Tr(e, n) {
  (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Xe(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Tn |= n.lanes, (t & n.childLanes) === 0)
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = fn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function rd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ia(n), tt();
      break;
    case 5:
      fa(n);
      break;
    case 1:
      de(n.type) && Wr(n);
      break;
    case 4:
      yo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      R(Yr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (R(U, U.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? ja(e, n, t) : (R(U, U.current & 1), e = Xe(e, n, t), e !== null ? e.sibling : null);
      R(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return Ua(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ma(e, n, t);
  }
  return Xe(e, n, t);
}
var Ba, Ru, Aa, $a;
Ba = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Ru = function() {
};
Aa = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, xn(Be.current);
    var u = null;
    switch (t) {
      case "input":
        l = nu(e, l), r = nu(e, r), u = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = lu(e, l), r = lu(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    ou(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (o in i)
            i.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mt.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null))
        if (c === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
            for (o in s)
              s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
          } else
            t || (u || (u = []), u.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mt.hasOwnProperty(c) ? (s != null && c === "onScroll" && M("scroll", e), u || i === s || (u = [])) : (u = u || []).push(c, s));
    }
    t && (u = u || []).push("style", t);
    var c = u;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
$a = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function ld(e, n, t) {
  var r = n.pendingProps;
  switch (ao(n), n.tag) {
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
      return ne(n), null;
    case 1:
      return de(n.type) && Hr(), ne(n), null;
    case 3:
      return r = n.stateNode, lt(), O(fe), O(re), wo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, De !== null && ($u(De), De = null))), Ru(e, n), ne(n), null;
    case 5:
      go(n);
      var l = xn(Kt.current);
      if (t = n.type, e !== null && n.stateNode != null)
        Aa(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return ne(n), null;
        }
        if (e = xn(Be.current), hr(n)) {
          r = n.stateNode, t = n.type;
          var u = n.memoizedProps;
          switch (r[je] = n, r[Wt] = u, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xt.length; l++)
                M(xt[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M(
                "error",
                r
              ), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Ko(r, u), M("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, M("invalid", r);
              break;
            case "textarea":
              Xo(r, u), M("invalid", r);
          }
          ou(t, u), l = null;
          for (var o in u)
            if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && mr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && mr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : Mt.hasOwnProperty(o) && i != null && o === "onScroll" && M("scroll", r);
            }
          switch (t) {
            case "input":
              or(r), Yo(r, u, !0);
              break;
            case "textarea":
              or(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Vr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ms(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[je] = n, e[Wt] = r, Ba(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (o = iu(t, r), t) {
              case "dialog":
                M("cancel", e), M("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xt.length; l++)
                  M(xt[l], e);
                l = r;
                break;
              case "source":
                M("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                M(
                  "error",
                  e
                ), M("load", e), l = r;
                break;
              case "details":
                M("toggle", e), l = r;
                break;
              case "input":
                Ko(e, r), l = nu(e, r), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), M("invalid", e);
                break;
              case "textarea":
                Xo(e, r), l = lu(e, r), M("invalid", e);
                break;
              default:
                l = r;
            }
            ou(t, l), i = l;
            for (u in i)
              if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? ys(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && hs(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ot(e, s) : typeof s == "number" && Ot(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mt.hasOwnProperty(u) ? s != null && u === "onScroll" && M("scroll", e) : s != null && Xu(e, u, s, o));
              }
            switch (t) {
              case "input":
                or(e), Yo(e, r, !1);
                break;
              case "textarea":
                or(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, u = r.value, u != null ? Xn(e, !!r.multiple, u, !1) : r.defaultValue != null && Xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null)
        $a(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = xn(Kt.current), xn(Be.current), hr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[je] = n, (u = r.nodeValue !== t) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && mr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          u && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[je] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (O(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (j && he !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
          la(), tt(), n.flags |= 98560, u = !1;
        else if (u = hr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u)
              throw Error(y(318));
            if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u)
              throw Error(y(317));
            u[je] = n;
          } else
            tt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
          ne(n), u = !1;
        } else
          De !== null && ($u(De), De = null), u = !0;
        if (!u)
          return n.flags & 65536 ? n : null;
      }
      return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (U.current & 1) !== 0 ? Y === 0 && (Y = 3) : Do())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return lt(), Ru(e, n), e === null && Vt(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return mo(n.type._context), ne(n), null;
    case 17:
      return de(n.type) && Hr(), ne(n), null;
    case 19:
      if (O(U), u = n.memoizedState, u === null)
        return ne(n), null;
      if (r = (n.flags & 128) !== 0, o = u.rendering, o === null)
        if (r)
          gt(u, !1);
        else {
          if (Y !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = n.child; e !== null; ) {
              if (o = Gr(e), o !== null) {
                for (n.flags |= 128, gt(u, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  u = t, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return R(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          u.tail !== null && W() > ot && (n.flags |= 128, r = !0, gt(u, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Gr(o), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), gt(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !j)
              return ne(n), null;
          } else
            2 * W() - u.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, gt(u, !1), n.lanes = 4194304);
        u.isBackwards ? (o.sibling = n.child, n.child = o) : (t = u.last, t !== null ? t.sibling = o : n.child = o, u.last = o);
      }
      return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = W(), n.sibling = null, t = U.current, R(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return Lo(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && (n.mode & 1) !== 0 ? (me & 1073741824) !== 0 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function ud(e, n) {
  switch (ao(n), n.tag) {
    case 1:
      return de(n.type) && Hr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return lt(), O(fe), O(re), wo(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return go(n), null;
    case 13:
      if (O(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        tt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return O(U), null;
    case 4:
      return lt(), null;
    case 10:
      return mo(n.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1, te = !1, od = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        $(e, n, r);
      }
    else
      t.current = null;
}
function Mu(e, n, t) {
  try {
    t();
  } catch (r) {
    $(e, n, r);
  }
}
var Ui = !1;
function id(e, n) {
  if (yu = Br, e = Qs(), io(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0, i = -1, s = -1, c = 0, h = 0, m = e, p = null;
          n:
            for (; ; ) {
              for (var g; m !== t || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (g = m.firstChild) !== null; )
                p = m, m = g;
              for (; ; ) {
                if (m === e)
                  break n;
                if (p === t && ++c === l && (i = o), p === u && ++h === r && (s = o), (g = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = g;
            }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (gu = { focusedElem: e, selectionRange: t }, Br = !1, S = n; S !== null; )
    if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, S = e;
    else
      for (; S !== null; ) {
        n = S;
        try {
          var w = n.alternate;
          if ((n.flags & 1024) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps, I = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Pe(n.type, k), I);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          $(n, n.return, v);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, S = e;
          break;
        }
        S = n.return;
      }
  return w = Ui, Ui = !1, w;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && Mu(n, t, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ou(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Va(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Va(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[je], delete n[Wt], delete n[Su], delete n[Hf], delete n[Wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bi(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ha(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Iu(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Iu(e, n, t), e = e.sibling; e !== null; )
      Iu(e, n, t), e = e.sibling;
}
function ju(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (ju(e, n, t), e = e.sibling; e !== null; )
      ju(e, n, t), e = e.sibling;
}
var Z = null, Te = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; )
    Wa(e, n, t), t = t.sibling;
}
function Wa(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ll, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      te || Qn(t, n);
    case 6:
      var r = Z, l = Te;
      Z = null, Ge(e, n, t), Z = r, Te = l, Z !== null && (Te ? (e = Z, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Z.removeChild(t.stateNode));
      break;
    case 18:
      Z !== null && (Te ? (e = Z, t = t.stateNode, e.nodeType === 8 ? Al(e.parentNode, t) : e.nodeType === 1 && Al(e, t), Bt(e)) : Al(Z, t.stateNode));
      break;
    case 4:
      r = Z, l = Te, Z = t.stateNode.containerInfo, Te = !0, Ge(e, n, t), Z = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, o = u.destroy;
          u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Mu(t, n, o), l = l.next;
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!te && (Qn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          $(t, n, i);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Ge(e, n, t), te = r) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Ai(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new od()), n.forEach(function(r) {
      var l = vd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e, o = n, i = o;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                Z = i.stateNode, Te = !1;
                break e;
              case 3:
                Z = i.stateNode.containerInfo, Te = !0;
                break e;
              case 4:
                Z = i.stateNode.containerInfo, Te = !0;
                break e;
            }
            i = i.return;
          }
        if (Z === null)
          throw Error(y(160));
        Wa(u, o, l), Z = null, Te = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        $(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      Qa(n, e), n = n.sibling;
}
function Qa(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), Oe(e), r & 4) {
        try {
          Lt(3, e, e.return), dl(3, e);
        } catch (k) {
          $(e, e.return, k);
        }
        try {
          Lt(5, e, e.return);
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(n, e), Oe(e), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), Oe(e), r & 512 && t !== null && Qn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (k) {
          $(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var u = e.memoizedProps, o = t !== null ? t.memoizedProps : u, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            i === "input" && u.type === "radio" && u.name != null && ds(l, u), iu(i, o);
            var c = iu(i, u);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o], m = s[o + 1];
              h === "style" ? ys(l, m) : h === "dangerouslySetInnerHTML" ? hs(l, m) : h === "children" ? Ot(l, m) : Xu(l, h, m, c);
            }
            switch (i) {
              case "input":
                tu(l, u);
                break;
              case "textarea":
                ps(l, u);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var g = u.value;
                g != null ? Xn(l, !!u.multiple, g, !1) : p !== !!u.multiple && (u.defaultValue != null ? Xn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Wt] = u;
          } catch (k) {
            $(e, e.return, k);
          }
      }
      break;
    case 6:
      if (Ne(n, e), Oe(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, u = e.memoizedProps;
        try {
          l.nodeValue = u;
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Ne(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Bt(n.containerInfo);
        } catch (k) {
          $(e, e.return, k);
        }
      break;
    case 4:
      Ne(n, e), Oe(e);
      break;
    case 13:
      Ne(n, e), Oe(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Po = W())), r & 4 && Ai(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || h, Ne(n, e), te = c) : Ne(n, e), Oe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && (e.mode & 1) !== 0)
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (p = S, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lt(4, p, p.return);
                  break;
                case 1:
                  Qn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      $(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Qn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vi(m);
                    continue;
                  }
              }
              g !== null ? (g.return = p, S = g) : Vi(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = vs("display", o));
                } catch (k) {
                  $(e, e.return, k);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (k) {
                  $(e, e.return, k);
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
      Ne(n, e), Oe(e), r & 4 && Ai(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ha(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), r.flags &= -33);
          var u = Bi(e);
          ju(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Bi(e);
          Iu(e, i, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      $(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function sd(e, n, t) {
  S = e, Ka(e);
}
function Ka(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr;
      if (!o) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || te;
        i = gr;
        var c = te;
        if (gr = o, (te = s) && !c)
          for (S = l; S !== null; )
            o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? Hi(l) : s !== null ? (s.return = o, S = s) : Hi(l);
        for (; u !== null; )
          S = u, Ka(u), u = u.sibling;
        S = l, gr = i, te = c;
      }
      $i(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, S = u) : $i(e);
  }
}
function $i(e) {
  for (; S !== null; ) {
    var n = S;
    if ((n.flags & 8772) !== 0) {
      var t = n.alternate;
      try {
        if ((n.flags & 8772) !== 0)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              te || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !te)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : Pe(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var u = n.updateQueue;
              u !== null && Ci(n, u, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Ci(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
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
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Bt(m);
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
              throw Error(y(163));
          }
        te || n.flags & 512 && Ou(n);
      } catch (p) {
        $(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Vi(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Hi(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            $(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              $(n, l, s);
            }
          }
          var u = n.return;
          try {
            Ou(n);
          } catch (s) {
            $(n, u, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Ou(n);
          } catch (s) {
            $(n, o, s);
          }
      }
    } catch (s) {
      $(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      i.return = n.return, S = i;
      break;
    }
    S = n.return;
  }
}
var ad = Math.ceil, br = qe.ReactCurrentDispatcher, zo = qe.ReactCurrentOwner, xe = qe.ReactCurrentBatchConfig, D = 0, G = null, Q = null, J = 0, me = 0, Kn = hn(0), Y = 0, Gt = null, Tn = 0, pl = 0, No = 0, Dt = null, ae = null, Po = 0, ot = 1 / 0, Ae = null, el = !1, Uu = null, an = null, wr = !1, tn = null, nl = 0, Ft = 0, Bu = null, Lr = -1, Dr = 0;
function oe() {
  return (D & 6) !== 0 ? W() : Lr !== -1 ? Lr : Lr = W();
}
function cn(e) {
  return (e.mode & 1) === 0 ? 1 : (D & 2) !== 0 && J !== 0 ? J & -J : Kf.transition !== null ? (Dr === 0 && (Dr = Ts()), Dr) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Is(e.type)), e);
}
function Re(e, n, t, r) {
  if (50 < Ft)
    throw Ft = 0, Bu = null, Error(y(185));
  Jt(e, t, r), ((D & 2) === 0 || e !== G) && (e === G && ((D & 2) === 0 && (pl |= t), Y === 4 && en(e, J)), pe(e, r), t === 1 && D === 0 && (n.mode & 1) === 0 && (ot = W() + 500, al && vn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  Qc(e, n);
  var r = Ur(e, e === G ? J : 0);
  if (r === 0)
    t !== null && Jo(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Jo(t), n === 1)
      e.tag === 0 ? Qf(Wi.bind(null, e)) : na(Wi.bind(null, e)), $f(function() {
        (D & 6) === 0 && vn();
      }), t = null;
    else {
      switch (Ls(r)) {
        case 1:
          t = bu;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = jr;
      }
      t = ec(t, Ya.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Ya(e, n) {
  if (Lr = -1, Dr = 0, (D & 6) !== 0)
    throw Error(y(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t)
    return null;
  var r = Ur(e, e === G ? J : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n)
    n = tl(e, r);
  else {
    n = r;
    var l = D;
    D |= 2;
    var u = qa();
    (G !== e || J !== n) && (Ae = null, ot = W() + 500, Cn(e, n));
    do
      try {
        dd();
        break;
      } catch (i) {
        Xa(e, i);
      }
    while (1);
    po(), br.current = u, D = l, Q !== null ? n = 0 : (G = null, J = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = du(e), l !== 0 && (r = l, n = Au(e, l))), n === 1)
      throw t = Gt, Cn(e, 0), en(e, r), pe(e, W()), t;
    if (n === 6)
      en(e, r);
    else {
      if (l = e.current.alternate, (r & 30) === 0 && !cd(l) && (n = tl(e, r), n === 2 && (u = du(e), u !== 0 && (r = u, n = Au(e, u))), n === 1))
        throw t = Gt, Cn(e, 0), en(e, r), pe(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kn(e, ae, Ae);
          break;
        case 3:
          if (en(e, r), (r & 130023424) === r && (n = Po + 500 - W(), 10 < n)) {
            if (Ur(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ku(kn.bind(null, e, ae, Ae), n);
            break;
          }
          kn(e, ae, Ae);
          break;
        case 4:
          if (en(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            u = 1 << o, o = n[o], o > l && (l = o), r &= ~u;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ad(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ku(kn.bind(null, e, ae, Ae), r);
            break;
          }
          kn(e, ae, Ae);
          break;
        case 5:
          kn(e, ae, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === t ? Ya.bind(null, e) : null;
}
function Au(e, n) {
  var t = Dt;
  return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = tl(e, n), e !== 2 && (n = ae, ae = t, n !== null && $u(n)), e;
}
function $u(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function cd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(u(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function en(e, n) {
  for (n &= ~No, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Fe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Wi(e) {
  if ((D & 6) !== 0)
    throw Error(y(327));
  bn();
  var n = Ur(e, 0);
  if ((n & 1) === 0)
    return pe(e, W()), null;
  var t = tl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = du(e);
    r !== 0 && (n = r, t = Au(e, r));
  }
  if (t === 1)
    throw t = Gt, Cn(e, 0), en(e, n), pe(e, W()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, kn(e, ae, Ae), pe(e, W()), null;
}
function To(e, n) {
  var t = D;
  D |= 1;
  try {
    return e(n);
  } finally {
    D = t, D === 0 && (ot = W() + 500, al && vn());
  }
}
function Ln(e) {
  tn !== null && tn.tag === 0 && (D & 6) === 0 && bn();
  var n = D;
  D |= 1;
  var t = xe.transition, r = F;
  try {
    if (xe.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, xe.transition = t, D = n, (D & 6) === 0 && vn();
  }
}
function Lo() {
  me = Kn.current, O(Kn);
}
function Cn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Af(t)), Q !== null)
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch (ao(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Hr();
          break;
        case 3:
          lt(), O(fe), O(re), wo();
          break;
        case 5:
          go(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          O(U);
          break;
        case 19:
          O(U);
          break;
        case 10:
          mo(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      t = t.return;
    }
  if (G = e, Q = e = fn(e.current, null), J = me = n, Y = 0, Gt = null, No = pl = Tn = 0, ae = Dt = null, En !== null) {
    for (n = 0; n < En.length; n++)
      if (t = En[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, u = t.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        t.pending = r;
      }
    En = null;
  }
  return e;
}
function Xa(e, n) {
  do {
    var t = Q;
    try {
      if (po(), Nr.current = Jr, Zr) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Zr = !1;
      }
      if (Pn = 0, q = K = B = null, Tt = !1, Yt = 0, zo.current = null, t === null || t.return === null) {
        Y = 1, Gt = n, Q = null;
        break;
      }
      e: {
        var u = e, o = t.return, i = t, s = n;
        if (n = J, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = i, m = h.tag;
          if ((h.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Di(o);
          if (g !== null) {
            g.flags &= -257, Fi(g, o, i, u, n), g.mode & 1 && Li(u, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else
              w.add(s);
            break e;
          } else {
            if ((n & 1) === 0) {
              Li(u, c, n), Do();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && i.mode & 1) {
          var I = Di(o);
          if (I !== null) {
            (I.flags & 65536) === 0 && (I.flags |= 256), Fi(I, o, i, u, n), co(ut(s, i));
            break e;
          }
        }
        u = s = ut(s, i), Y !== 4 && (Y = 2), Dt === null ? Dt = [u] : Dt.push(u), u = o;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, n &= -n, u.lanes |= n;
              var f = Da(u, s, n);
              xi(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type, d = u.stateNode;
              if ((u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (an === null || !an.has(d)))) {
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var v = Fa(u, i, n);
                xi(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Za(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function qa() {
  var e = br.current;
  return br.current = Jr, e === null ? Jr : e;
}
function Do() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), G === null || (Tn & 268435455) === 0 && (pl & 268435455) === 0 || en(G, J);
}
function tl(e, n) {
  var t = D;
  D |= 2;
  var r = qa();
  (G !== e || J !== n) && (Ae = null, Cn(e, n));
  do
    try {
      fd();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (1);
  if (po(), D = t, br.current = r, Q !== null)
    throw Error(y(261));
  return G = null, J = 0, Y;
}
function fd() {
  for (; Q !== null; )
    Ga(Q);
}
function dd() {
  for (; Q !== null && !Ic(); )
    Ga(Q);
}
function Ga(e) {
  var n = ba(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, n === null ? Za(e) : Q = n, zo.current = null;
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, (n.flags & 32768) === 0) {
      if (t = ld(t, n, me), t !== null) {
        Q = t;
        return;
      }
    } else {
      if (t = ud(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function kn(e, n, t) {
  var r = F, l = xe.transition;
  try {
    xe.transition = null, F = 1, pd(e, n, t, r);
  } finally {
    xe.transition = l, F = r;
  }
  return null;
}
function pd(e, n, t, r) {
  do
    bn();
  while (tn !== null);
  if ((D & 6) !== 0)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var u = t.lanes | t.childLanes;
  if (Kc(e, u), e === G && (Q = G = null, J = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || wr || (wr = !0, ec(jr, function() {
    return bn(), null;
  })), u = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || u) {
    u = xe.transition, xe.transition = null;
    var o = F;
    F = 1;
    var i = D;
    D |= 4, zo.current = null, id(e, t), Qa(t, e), Rf(gu), Br = !!yu, gu = yu = null, e.current = t, sd(t), jc(), D = i, F = o, xe.transition = u;
  } else
    e.current = t;
  if (wr && (wr = !1, tn = e, nl = l), u = e.pendingLanes, u === 0 && (an = null), Ac(t.stateNode), pe(e, W()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el)
    throw el = !1, e = Uu, Uu = null, e;
  return (nl & 1) !== 0 && e.tag !== 0 && bn(), u = e.pendingLanes, (u & 1) !== 0 ? e === Bu ? Ft++ : (Ft = 0, Bu = e) : Ft = 0, vn(), null;
}
function bn() {
  if (tn !== null) {
    var e = Ls(nl), n = xe.transition, t = F;
    try {
      if (xe.transition = null, F = 16 > e ? 16 : e, tn === null)
        var r = !1;
      else {
        if (e = tn, tn = null, nl = 0, (D & 6) !== 0)
          throw Error(y(331));
        var l = D;
        for (D |= 4, S = e.current; S !== null; ) {
          var u = S, o = u.child;
          if ((S.flags & 16) !== 0) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(8, h, u);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, S = m;
                  else
                    for (; S !== null; ) {
                      h = S;
                      var p = h.sibling, g = h.return;
                      if (Va(h), h === c) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, S = p;
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = u.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var I = k.sibling;
                    k.sibling = null, k = I;
                  } while (k !== null);
                }
              }
              S = u;
            }
          }
          if ((u.subtreeFlags & 2064) !== 0 && o !== null)
            o.return = u, S = o;
          else
            e:
              for (; S !== null; ) {
                if (u = S, (u.flags & 2048) !== 0)
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  f.return = u.return, S = f;
                  break e;
                }
                S = u.return;
              }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && d !== null)
            d.return = o, S = d;
          else
            e:
              for (o = a; S !== null; ) {
                if (i = S, (i.flags & 2048) !== 0)
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, i);
                    }
                  } catch (E) {
                    $(i, i.return, E);
                  }
                if (i === o) {
                  S = null;
                  break e;
                }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, S = v;
                  break e;
                }
                S = i.return;
              }
        }
        if (D = l, vn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(ll, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = t, xe.transition = n;
    }
  }
  return !1;
}
function Qi(e, n, t) {
  n = ut(t, n), n = Da(e, n, 1), e = sn(e, n, 1), n = oe(), e !== null && (Jt(e, 1, n), pe(e, n));
}
function $(e, n, t) {
  if (e.tag === 3)
    Qi(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Qi(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
          e = ut(t, e), e = Fa(n, e, 1), n = sn(n, e, 1), e = oe(), n !== null && (Jt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function md(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, G === e && (J & t) === t && (Y === 4 || Y === 3 && (J & 130023424) === J && 500 > W() - Po ? Cn(e, 0) : No |= t), pe(e, n);
}
function Ja(e, n) {
  n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = ar, ar <<= 1, (ar & 130023424) === 0 && (ar = 4194304)));
  var t = oe();
  e = Ye(e, n), e !== null && (Jt(e, n, t), pe(e, t));
}
function hd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function vd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var ba;
ba = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current)
      ce = !0;
    else {
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0)
        return ce = !1, rd(e, n, t);
      ce = (e.flags & 131072) !== 0;
    }
  else
    ce = !1, j && (n.flags & 1048576) !== 0 && ta(n, Kr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Tr(e, n), e = n.pendingProps;
      var l = nt(n, re.current);
      Jn(n, t), l = So(null, n, r, e, l, t);
      var u = Eo();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (u = !0, Wr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vo(n), l.updater = cl, n.stateNode = l, l._reactInternals = n, Nu(n, r, e, t), n = Lu(null, n, r, !0, u, t)) : (n.tag = 0, j && u && so(n), le(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Tr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = gd(r), e = Pe(r, e), l) {
          case 0:
            n = Tu(null, n, r, e, t);
            break e;
          case 1:
            n = Oi(null, n, r, e, t);
            break e;
          case 11:
            n = Ri(null, n, r, e, t);
            break e;
          case 14:
            n = Mi(null, n, r, Pe(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Tu(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Oi(e, n, r, l, t);
    case 3:
      e: {
        if (Ia(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, u = n.memoizedState, l = u.element, oa(e, n), qr(n, r, null, t);
        var o = n.memoizedState;
        if (r = o.element, u.isDehydrated)
          if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
            l = ut(Error(y(423)), n), n = Ii(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = ut(Error(y(424)), n), n = Ii(e, n, r, t, l);
            break e;
          } else
            for (he = on(n.stateNode.containerInfo.firstChild), ve = n, j = !0, De = null, t = ca(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (tt(), r === l) {
            n = Xe(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return fa(n), e === null && Cu(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, wu(r, l) ? o = null : u !== null && wu(r, u) && (n.flags |= 32), Oa(e, n), le(e, n, o, t), n.child;
    case 6:
      return e === null && Cu(n), null;
    case 13:
      return ja(e, n, t);
    case 4:
      return yo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = rt(n, null, r, t) : le(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Ri(e, n, r, l, t);
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, o = l.value, R(Yr, r._currentValue), r._currentValue = o, u !== null)
          if (Me(u.value, o)) {
            if (u.children === l.children && !fe.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (u = n.child, u !== null && (u.return = n); u !== null; ) {
              var i = u.dependencies;
              if (i !== null) {
                o = u.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (u.tag === 1) {
                      s = We(-1, t & -t), s.tag = 2;
                      var c = u.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                      }
                    }
                    u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), _u(
                      u.return,
                      t,
                      n
                    ), i.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (u.tag === 10)
                o = u.type === n.type ? null : u.child;
              else if (u.tag === 18) {
                if (o = u.return, o === null)
                  throw Error(y(341));
                o.lanes |= t, i = o.alternate, i !== null && (i.lanes |= t), _u(o, t, n), o = u.sibling;
              } else
                o = u.child;
              if (o !== null)
                o.return = u;
              else
                for (o = u; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (u = o.sibling, u !== null) {
                    u.return = o.return, o = u;
                    break;
                  }
                  o = o.return;
                }
              u = o;
            }
        le(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Jn(n, t), l = Ce(l), r = r(l), n.flags |= 1, le(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Pe(r, n.pendingProps), l = Pe(r.type, l), Mi(e, n, r, l, t);
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Tr(e, n), n.tag = 1, de(r) ? (e = !0, Wr(n)) : e = !1, Jn(n, t), sa(n, r, l), Nu(n, r, l, t), Lu(null, n, r, !0, e, t);
    case 19:
      return Ua(e, n, t);
    case 22:
      return Ma(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ec(e, n) {
  return zs(e, n);
}
function yd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new yd(e, n, t, r);
}
function Fo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gd(e) {
  if (typeof e == "function")
    return Fo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Gu)
      return 11;
    if (e === Zu)
      return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Fr(e, n, t, r, l, u) {
  var o = 2;
  if (r = e, typeof e == "function")
    Fo(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case In:
          return _n(t.children, l, u, n);
        case qu:
          o = 8, l |= 8;
          break;
        case Zl:
          return e = Ee(12, t, n, l | 2), e.elementType = Zl, e.lanes = u, e;
        case Jl:
          return e = Ee(13, t, n, l), e.elementType = Jl, e.lanes = u, e;
        case bl:
          return e = Ee(19, t, n, l), e.elementType = bl, e.lanes = u, e;
        case as:
          return ml(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case is:
                o = 10;
                break e;
              case ss:
                o = 9;
                break e;
              case Gu:
                o = 11;
                break e;
              case Zu:
                o = 14;
                break e;
              case Ze:
                o = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Ee(o, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
}
function _n(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function ml(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = as, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Xl(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function ql(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function wd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ro(e, n, t, r, l, u, o, i, s) {
  return e = new wd(e, n, t, i, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Ee(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vo(u), e;
}
function kd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: On, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function nc(e) {
  if (!e)
    return pn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t))
      return ea(e, t, n);
  }
  return n;
}
function tc(e, n, t, r, l, u, o, i, s) {
  return e = Ro(t, r, !0, e, l, u, o, i, s), e.context = nc(null), t = e.current, r = oe(), l = cn(t), u = We(r, l), u.callback = n != null ? n : null, sn(t, u, l), e.current.lanes = l, Jt(e, l, r), pe(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, u = oe(), o = cn(l);
  return t = nc(t), n.context === null ? n.context = t : n.pendingContext = t, n = We(u, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = sn(l, n, o), e !== null && (Re(e, l, o, u), zr(e, l, o)), o;
}
function rl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ki(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mo(e, n) {
  Ki(e, n), (e = e.alternate) && Ki(e, n);
}
function Sd() {
  return null;
}
var rc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oo(e) {
  this._internalRoot = e;
}
vl.prototype.render = Oo.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Oo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function() {
      hl(null, e, null, null);
    }), n[Ke] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++)
      ;
    be.splice(t, 0, e), t === 0 && Os(e);
  }
};
function Io(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yi() {
}
function Ed(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = rl(o);
        u.call(c);
      };
    }
    var o = tc(n, r, e, 0, null, !1, !1, "", Yi);
    return e._reactRootContainer = o, e[Ke] = o.current, Vt(e.nodeType === 8 ? e.parentNode : e), Ln(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = rl(s);
      i.call(c);
    };
  }
  var s = Ro(e, 0, !1, null, null, !1, !1, "", Yi);
  return e._reactRootContainer = s, e[Ke] = s.current, Vt(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    hl(n, s, t, r);
  }), s;
}
function gl(e, n, t, r, l) {
  var u = t._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = rl(o);
        i.call(s);
      };
    }
    hl(n, o, e, l);
  } else
    o = Ed(t, n, e, l, r);
  return rl(o);
}
Ds = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Et(n.pendingLanes);
        t !== 0 && (eo(n, t | 1), pe(n, W()), (D & 6) === 0 && (ot = W() + 500, vn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }), Mo(e, 1);
  }
};
no = function(e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    Mo(e, 134217728);
  }
};
Fs = function(e) {
  if (e.tag === 13) {
    var n = cn(e), t = Ye(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    Mo(e, n);
  }
};
Rs = function() {
  return F;
};
Ms = function(e, n) {
  var t = F;
  try {
    return F = e, n();
  } finally {
    F = t;
  }
};
au = function(e, n, t) {
  switch (n) {
    case "input":
      if (tu(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l)
              throw Error(y(90));
            fs(r), tu(r, l);
          }
        }
      }
      break;
    case "textarea":
      ps(e, t);
      break;
    case "select":
      n = t.value, n != null && Xn(e, !!t.multiple, n, !1);
  }
};
ks = To;
Ss = Ln;
var xd = { usingClientEntryPoint: !1, Events: [er, An, sl, gs, ws, To] }, wt = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Cd = { bundleType: wt.bundleType, version: wt.version, rendererPackageName: wt.rendererPackageName, rendererConfig: wt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wt.findFiberByHostInstance || Sd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      ll = kr.inject(Cd), Ue = kr;
    } catch {
    }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
ge.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Io(n))
    throw Error(y(200));
  return kd(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!Io(e))
    throw Error(y(299));
  var t = !1, r = "", l = rc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ro(e, 1, !1, null, null, t, !1, r, l), e[Ke] = n.current, Vt(e.nodeType === 8 ? e.parentNode : e), new Oo(n);
};
ge.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Cs(n), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e) {
  return Ln(e);
};
ge.hydrate = function(e, n, t) {
  if (!yl(n))
    throw Error(y(200));
  return gl(null, e, n, !0, t);
};
ge.hydrateRoot = function(e, n, t) {
  if (!Io(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, u = "", o = rc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = tc(n, null, e, 1, t != null ? t : null, l, !1, u, o), e[Ke] = n.current, Vt(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new vl(n);
};
ge.render = function(e, n, t) {
  if (!yl(n))
    throw Error(y(200));
  return gl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function(e) {
  if (!yl(e))
    throw Error(y(40));
  return e._reactRootContainer ? (Ln(function() {
    gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = To;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!yl(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return gl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  n(), e.exports = ge;
})(qi);
var lc, Xi = qi.exports;
lc = Xi.createRoot, Xi.hydrateRoot;
var wl = { exports: {} }, kl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d = Le.exports, zd = Symbol.for("react.element"), Nd = Symbol.for("react.fragment"), Pd = Object.prototype.hasOwnProperty, Td = _d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, n, t) {
  var r, l = {}, u = null, o = null;
  t !== void 0 && (u = "" + t), n.key !== void 0 && (u = "" + n.key), n.ref !== void 0 && (o = n.ref);
  for (r in n)
    Pd.call(n, r) && !Ld.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: zd, type: e, key: u, ref: o, props: l, _owner: Td.current };
}
kl.Fragment = Nd;
kl.jsx = uc;
kl.jsxs = uc;
(function(e) {
  e.exports = kl;
})(wl);
const Dd = wl.exports.Fragment, ue = wl.exports.jsx, Rt = wl.exports.jsxs, Fd = ({
  destroyModal: e
}) => /* @__PURE__ */ ue("button", {
  onClick: e,
  className: "w3bb-quiz-modal-close-button",
  id: "w3bb-quiz-modal-close-button",
  children: /* @__PURE__ */ ue("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1792 1792",
    children: /* @__PURE__ */ ue("path", {
      fill: "#f00",
      d: "M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
    })
  })
}), Rd = Le.exports.memo(Fd), Mn = {
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
}, Md = () => {
  const [e, n] = Le.exports.useState(0), [t, r] = Le.exports.useState([]), [l, u] = Le.exports.useState(!1), [o, i] = Le.exports.useState(!0);
  Le.exports.useEffect(() => {
    l && console.log(t);
  }, [l]), Le.exports.useEffect(() => () => {
    r([]), n(0), u(!1);
  }, []);
  const s = () => {
    i(!1);
  }, c = (h) => {
    if (r(() => [...t, {
      q: Mn.scenes[e].question,
      a: h
    }]), e === Mn.scenes.length - 1) {
      u(!0);
      return;
    }
    n((m) => m + 1);
  };
  return o ? /* @__PURE__ */ Rt("div", {
    className: "w3bb-quiz-welcome_screen",
    children: [/* @__PURE__ */ ue("h1", {
      children: Mn.welcomeText
    }), /* @__PURE__ */ ue("button", {
      className: "w3bb-quiz-welcome_button",
      onClick: s,
      children: Mn.welcomeButton
    }, 1)]
  }) : l ? /* @__PURE__ */ Rt("div", {
    className: "w3bb-quiz-success_screen",
    children: [/* @__PURE__ */ ue("h1", {
      children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}"
    }), /* @__PURE__ */ ue("p", {
      children: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!"
    })]
  }) : /* @__PURE__ */ Rt(Dd, {
    children: [/* @__PURE__ */ ue("h1", {
      children: Mn.scenes[e].question
    }), /* @__PURE__ */ ue("div", {
      className: "w3bb-quiz-answers",
      children: Mn.scenes[e].answers.map((h) => /* @__PURE__ */ ue("button", {
        className: "w3bb-quiz-answer-button",
        onClick: () => c(h.text),
        children: h.text
      }, h.id))
    })]
  });
}, Od = Le.exports.memo(Md), Id = ({
  id: e,
  destroyModal: n
}) => (console.log("PROJECT_ID: ", e), /* @__PURE__ */ Rt("div", {
  className: "w3bb-quiz-modal-body",
  children: [/* @__PURE__ */ ue("div", {
    className: "w3bb-quiz-modal-image"
  }), /* @__PURE__ */ ue(Rd, {
    destroyModal: n
  }), /* @__PURE__ */ ue("div", {
    className: "w3bb-quiz-modal-main",
    children: /* @__PURE__ */ ue(Od, {})
  }), /* @__PURE__ */ Rt("span", {
    className: "w3bb-quiz-modal-copyright",
    children: ["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432", /* @__PURE__ */ ue("a", {
      href: "https://w3bb.ru",
      target: "_blank",
      rel: "noreferrer noopener",
      children: "W3BB"
    })]
  })]
})), Yn = document.createElement("div");
Yn.classList.add("w3bb-quiz-modal-overlay");
const jd = document.createElement("div");
jd.classList.add("w3bb-quiz-modal-body");
const Ud = lc(Yn);
async function Bd({ visibleToggler: e }) {
  let n = !1;
  const t = e.dataset.w3bbId;
  if (!t)
    throw new Error(
      "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id."
    );
  const r = () => {
    document.body.removeChild(Yn), n = !1;
  }, l = () => {
    document.body.appendChild(Yn), Ud.render(Id({ id: t, destroyModal: r }));
  }, u = () => {
    switch (n = !n, n) {
      case !0:
        l();
        return;
      case !1:
        n = !1, r();
        return;
      default:
        return;
    }
  };
  Yn.addEventListener("click", (o) => {
    o.target === Yn && (n = !1, r());
  }), e.addEventListener("click", () => u());
}
const Ad = `
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
`, $d = `
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

`, Vd = `
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`, Rr = document.querySelector(
  "#w3bb-widget-toggler"
), jo = document.createElement("div");
jo.id = "w3bb-quiz-root";
document.body.appendChild(jo);
const Uo = document.createElement("style");
document.head.appendChild(Uo);
Uo.appendChild(document.createTextNode($d));
Rr || (Uo.appendChild(document.createTextNode(Ad)), jo.innerHTML = Vd);
const Hd = document.querySelector(
  "#w3bb-widget-default-toggler"
);
Bd({ visibleToggler: Rr != null ? Rr : Hd });
