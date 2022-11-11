var Yi = { exports: {} }, ye = {}, J = { exports: {} }, P = {}, Gn = Symbol.for("react.element"), uc = Symbol.for("react.portal"), sc = Symbol.for("react.fragment"), cc = Symbol.for("react.strict_mode"), fc = Symbol.for("react.profiler"), dc = Symbol.for("react.provider"), pc = Symbol.for("react.context"), mc = Symbol.for("react.forward_ref"), hc = Symbol.for("react.suspense"), gc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), Vo = Symbol.iterator;
function bc(e) {
  return e === null || typeof e != "object" ? null : (e = Vo && e[Vo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gi = Object.assign, Zi = {};
function on(e, t, n) {
  this.props = e, this.context = t, this.refs = Zi, this.updater = n || Xi;
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ji() {
}
Ji.prototype = on.prototype;
function Aa(e, t, n) {
  this.props = e, this.context = t, this.refs = Zi, this.updater = n || Xi;
}
var $a = Aa.prototype = new Ji();
$a.constructor = Aa;
Gi($a, on.prototype);
$a.isPureReactComponent = !0;
var qo = Array.isArray, eu = Object.prototype.hasOwnProperty, Ba = { current: null }, tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function nu(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t)
      eu.call(t, r) && !tu.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1)
    l.children = n;
  else if (1 < i) {
    for (var u = Array(i), f = 0; f < i; f++)
      u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in i = e.defaultProps, i)
      l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Gn, type: e, key: a, ref: o, props: l, _owner: Ba.current };
}
function yc(e, t) {
  return { $$typeof: Gn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ao = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36);
}
function kr(e, t, n, r, l) {
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
          case Gn:
          case uc:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + El(o, 0) : r, qo(l) ? (n = "", e != null && (n = e.replace(Ao, "$&/") + "/"), kr(l, t, n, "", function(f) {
      return f;
    })) : l != null && (Ha(l) && (l = yc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ao, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", qo(e))
    for (var i = 0; i < e.length; i++) {
      a = e[i];
      var u = r + El(a, i);
      o += kr(a, t, n, u, l);
    }
  else if (u = bc(e), typeof u == "function")
    for (e = u.call(e), i = 0; !(a = e.next()).done; )
      a = a.value, u = r + El(a, i++), o += kr(a, t, n, u, l);
  else if (a === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function lr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return kr(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function kc(e) {
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
var ue = { current: null }, Sr = { transition: null }, Sc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Ba };
P.Children = { map: lr, forEach: function(e, t, n) {
  lr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return lr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return lr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ha(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
P.Component = on;
P.Fragment = sc;
P.Profiler = fc;
P.PureComponent = Aa;
P.StrictMode = cc;
P.Suspense = hc;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
P.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Gi({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Ba.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var i = e.type.defaultProps;
    for (u in t)
      eu.call(t, u) && !tu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    r.children = n;
  else if (1 < u) {
    i = Array(u);
    for (var f = 0; f < u; f++)
      i[f] = arguments[f + 2];
    r.children = i;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: a, props: r, _owner: o };
};
P.createContext = function(e) {
  return e = { $$typeof: pc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dc, _context: e }, e.Consumer = e;
};
P.createElement = nu;
P.createFactory = function(e) {
  var t = nu.bind(null, e);
  return t.type = e, t;
};
P.createRef = function() {
  return { current: null };
};
P.forwardRef = function(e) {
  return { $$typeof: mc, render: e };
};
P.isValidElement = Ha;
P.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: kc };
};
P.memo = function(e, t) {
  return { $$typeof: gc, type: e, compare: t === void 0 ? null : t };
};
P.startTransition = function(e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
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
var ru = { exports: {} }, lu = {};
(function(e) {
  function t(x, z) {
    var N = x.length;
    x.push(z);
    e:
      for (; 0 < N; ) {
        var $ = N - 1 >>> 1, K = x[$];
        if (0 < l(K, z))
          x[$] = z, x[N] = K, N = $;
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
        for (var $ = 0, K = x.length, nr = K >>> 1; $ < nr; ) {
          var gt = 2 * ($ + 1) - 1, xl = x[gt], vt = gt + 1, rr = x[vt];
          if (0 > l(xl, N))
            vt < K && 0 > l(rr, xl) ? (x[$] = rr, x[vt] = N, $ = vt) : (x[$] = xl, x[gt] = N, $ = gt);
          else if (vt < K && 0 > l(rr, N))
            x[$] = rr, x[vt] = N, $ = vt;
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
  var u = [], f = [], h = 1, m = null, p = 3, b = !1, y = !1, w = !1, M = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null)
        r(f);
      else if (z.startTime <= x)
        r(f), z.sortIndex = z.expirationTime, t(u, z);
      else
        break;
      z = n(f);
    }
  }
  function g(x) {
    if (w = !1, d(x), !y)
      if (n(u) !== null)
        y = !0, kl(S);
      else {
        var z = n(f);
        z !== null && Sl(g, z.startTime - x);
      }
  }
  function S(x, z) {
    y = !1, w && (w = !1, c(C), C = -1), b = !0;
    var N = p;
    try {
      for (d(z), m = n(u); m !== null && (!(m.expirationTime > z) || x && !ze()); ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          m.callback = null, p = m.priorityLevel;
          var K = $(m.expirationTime <= z);
          z = e.unstable_now(), typeof K == "function" ? m.callback = K : m === n(u) && r(u), d(z);
        } else
          r(u);
        m = n(u);
      }
      if (m !== null)
        var nr = !0;
      else {
        var gt = n(f);
        gt !== null && Sl(g, gt.startTime - z), nr = !1;
      }
      return nr;
    } finally {
      m = null, p = N, b = !1;
    }
  }
  var E = !1, _ = null, C = -1, A = 5, T = -1;
  function ze() {
    return !(e.unstable_now() - T < A);
  }
  function cn() {
    if (_ !== null) {
      var x = e.unstable_now();
      T = x;
      var z = !0;
      try {
        z = _(!0, x);
      } finally {
        z ? fn() : (E = !1, _ = null);
      }
    } else
      E = !1;
  }
  var fn;
  if (typeof s == "function")
    fn = function() {
      s(cn);
    };
  else if (typeof MessageChannel < "u") {
    var jo = new MessageChannel(), ic = jo.port2;
    jo.port1.onmessage = cn, fn = function() {
      ic.postMessage(null);
    };
  } else
    fn = function() {
      M(cn, 0);
    };
  function kl(x) {
    _ = x, E || (E = !0, fn());
  }
  function Sl(x, z) {
    C = M(function() {
      x(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    y || b || (y = !0, kl(S));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x || (A = 0 < x ? Math.floor(1e3 / x) : 5);
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
    var $ = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? $ + N : $) : N = $, x) {
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
    return K = N + K, x = { id: h++, callback: z, priorityLevel: x, startTime: N, expirationTime: K, sortIndex: -1 }, N > $ ? (x.sortIndex = N, t(f, x), n(u) === null && x === n(f) && (w ? (c(C), C = -1) : w = !0, Sl(g, N - $))) : (x.sortIndex = K, t(u, x), y || b || (y = !0, kl(S))), x;
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
})(lu);
(function(e) {
  e.exports = lu;
})(ru);
var au = J.exports, be = ru.exports;
function v(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ou = /* @__PURE__ */ new Set(), Fn = {};
function Lt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++)
    ou.add(t[e]);
}
var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xl = Object.prototype.hasOwnProperty, xc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $o = {}, Bo = {};
function Ec(e) {
  return Xl.call(Bo, e) ? !0 : Xl.call($o, e) ? !1 : xc.test(e) ? Bo[e] = !0 : ($o[e] = !0, !1);
}
function _c(e, t, n, r) {
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
function Cc(e, t, n, r) {
  if (t === null || typeof t > "u" || _c(e, t, n, r))
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
var Wa = /[\-:]([a-z])/g;
function Qa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Wa, Qa);
  te[t] = new se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Wa, Qa);
  te[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Wa, Qa);
  te[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ka(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Cc(t, n, l, r) && (n = null), r || l === null ? Ec(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ot = Symbol.for("react.fragment"), Ya = Symbol.for("react.strict_mode"), Gl = Symbol.for("react.profiler"), iu = Symbol.for("react.provider"), uu = Symbol.for("react.context"), Xa = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Jl = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), su = Symbol.for("react.offscreen"), Ho = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object" ? null : (e = Ho && e[Ho] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, _l;
function wn(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = t && t[1] || "";
    }
  return `
` + _l + e;
}
var Cl = !1;
function zl(e, t) {
  if (!e || Cl)
    return "";
  Cl = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
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
    Cl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function zc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zl(e.type, !1), e;
    case 11:
      return e = zl(e.type.render, !1), e;
    case 1:
      return e = zl(e.type, !0), e;
    default:
      return "";
  }
}
function ea(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Ft:
      return "Portal";
    case Gl:
      return "Profiler";
    case Ya:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uu:
        return (e.displayName || "Context") + ".Consumer";
      case iu:
        return (e._context.displayName || "Context") + ".Provider";
      case Xa:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ga:
        return t = e.displayName || null, t !== null ? t : ea(e.type) || "Memo";
      case Ge:
        t = e._payload, e = e._init;
        try {
          return ea(e(t));
        } catch {
        }
    }
  return null;
}
function Nc(e) {
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
      return ea(t);
    case 8:
      return t === Ya ? "StrictMode" : "Mode";
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
function ft(e) {
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
function cu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pc(e) {
  var t = cu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function or(e) {
  e._valueTracker || (e._valueTracker = Pc(e));
}
function fu(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = cu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Wo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function du(e, t) {
  t = t.checked, t != null && Ka(e, "checked", t, !1);
}
function na(e, t) {
  du(e, t);
  var n = ft(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ra(e, t.type, n) : t.hasOwnProperty("defaultValue") && ra(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ra(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Qt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function la(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(v(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ko(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(v(92));
      if (kn(n)) {
        if (1 < n.length)
          throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ft(n) };
}
function pu(e, t) {
  var n = ft(t.value), r = ft(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Yo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function aa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? mu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ir, hu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ir.firstChild; e.firstChild; )
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
var En = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Tc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
  Tc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e];
  });
});
function gu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px";
}
function vu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = gu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var Lc = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oa(e, t) {
  if (t) {
    if (Lc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function ia(e, t) {
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
var ua = null;
function Za(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var sa = null, Kt = null, Yt = null;
function Xo(e) {
  if (e = er(e)) {
    if (typeof sa != "function")
      throw Error(v(280));
    var t = e.stateNode;
    t && (t = ul(t), sa(e.stateNode, e.type, t));
  }
}
function bu(e) {
  Kt ? Yt ? Yt.push(e) : Yt = [e] : Kt = e;
}
function yu() {
  if (Kt) {
    var e = Kt, t = Yt;
    if (Yt = Kt = null, Xo(e), t)
      for (e = 0; e < t.length; e++)
        Xo(t[e]);
  }
}
function wu(e, t) {
  return e(t);
}
function ku() {
}
var Nl = !1;
function Su(e, t, n) {
  if (Nl)
    return e(t, n);
  Nl = !0;
  try {
    return wu(e, t, n);
  } finally {
    Nl = !1, (Kt !== null || Yt !== null) && (ku(), yu());
  }
}
function In(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ul(n);
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
var ca = !1;
if (He)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", { get: function() {
      ca = !0;
    } }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    ca = !1;
  }
function Rc(e, t, n, r, l, a, o, i, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var _n = !1, Or = null, Ir = !1, fa = null, Mc = { onError: function(e) {
  _n = !0, Or = e;
} };
function Fc(e, t, n, r, l, a, o, i, u) {
  _n = !1, Or = null, Rc.apply(Mc, arguments);
}
function Oc(e, t, n, r, l, a, o, i, u) {
  if (Fc.apply(this, arguments), _n) {
    if (_n) {
      var f = Or;
      _n = !1, Or = null;
    } else
      throw Error(v(198));
    Ir || (Ir = !0, fa = f);
  }
}
function Rt(e) {
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
function xu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Go(e) {
  if (Rt(e) !== e)
    throw Error(v(188));
}
function Ic(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Rt(e), t === null)
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
          return Go(l), e;
        if (a === r)
          return Go(l), t;
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
function Eu(e) {
  return e = Ic(e), e !== null ? _u(e) : null;
}
function _u(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = _u(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Cu = be.unstable_scheduleCallback, Zo = be.unstable_cancelCallback, Dc = be.unstable_shouldYield, Uc = be.unstable_requestPaint, B = be.unstable_now, jc = be.unstable_getCurrentPriorityLevel, Ja = be.unstable_ImmediatePriority, zu = be.unstable_UserBlockingPriority, Dr = be.unstable_NormalPriority, Vc = be.unstable_LowPriority, Nu = be.unstable_IdlePriority, ll = null, Ue = null;
function qc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ll, e, void 0, (128 & e.current.flags) === 128);
    } catch {
    }
}
var Re = Math.clz32 ? Math.clz32 : Bc, Ac = Math.log, $c = Math.LN2;
function Bc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ac(e) / $c | 0) | 0;
}
var ur = 64, sr = 4194304;
function Sn(e) {
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
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = 268435455 & n;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Sn(i) : (a &= o, a !== 0 && (r = Sn(a)));
  } else
    o = n & ~l, o !== 0 ? r = Sn(o) : a !== 0 && (r = Sn(a));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, a = t & -t, l >= a || l === 16 && (4194240 & a) !== 0))
    return t;
  if ((4 & r) !== 0 && (r |= 16 & n), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Hc(e, t) {
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
function Wc(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Re(a), i = 1 << o, u = l[o];
    u === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = Hc(i, t)) : u <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function da(e) {
  return e = -1073741825 & e.pendingLanes, e !== 0 ? e : 1073741824 & e ? 1073741824 : 0;
}
function Pu() {
  var e = ur;
  return ur <<= 1, (4194240 & ur) === 0 && (ur = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Zn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n;
}
function Qc(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var R = 0;
function Tu(e) {
  return e &= -e, 1 < e ? 4 < e ? (268435455 & e) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Lu, to, Ru, Mu, Fu, pa = !1, cr = [], rt = null, lt = null, at = null, Dn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), Je = [], Kc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jo(e, t) {
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
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = er(t), t !== null && to(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Yc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return rt = mn(rt, e, t, n, r, l), !0;
    case "dragenter":
      return lt = mn(lt, e, t, n, r, l), !0;
    case "mouseover":
      return at = mn(at, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Dn.set(a, mn(Dn.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Un.set(a, mn(Un.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ou(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xu(n), t !== null) {
          e.blockedOn = t, Fu(e.priority, function() {
            Ru(n);
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
function xr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ua = r, n.target.dispatchEvent(r), ua = null;
    } else
      return t = er(n), t !== null && to(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ei(e, t, n) {
  xr(e) && n.delete(t);
}
function Xc() {
  pa = !1, rt !== null && xr(rt) && (rt = null), lt !== null && xr(lt) && (lt = null), at !== null && xr(at) && (at = null), Dn.forEach(ei), Un.forEach(ei);
}
function hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, pa || (pa = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, Xc)));
}
function jn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < cr.length) {
    hn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rt !== null && hn(rt, e), lt !== null && hn(lt, e), at !== null && hn(at, e), Dn.forEach(t), Un.forEach(t), n = 0; n < Je.length; n++)
    r = Je[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && (n = Je[0], n.blockedOn === null); )
    Ou(n), n.blockedOn === null && Je.shift();
}
var Xt = Ye.ReactCurrentBatchConfig, jr = !0;
function Gc(e, t, n, r) {
  var l = R, a = Xt.transition;
  Xt.transition = null;
  try {
    R = 1, no(e, t, n, r);
  } finally {
    R = l, Xt.transition = a;
  }
}
function Zc(e, t, n, r) {
  var l = R, a = Xt.transition;
  Xt.transition = null;
  try {
    R = 4, no(e, t, n, r);
  } finally {
    R = l, Xt.transition = a;
  }
}
function no(e, t, n, r) {
  if (jr) {
    var l = ma(e, t, n, r);
    if (l === null)
      jl(e, t, r, Vr, n), Jo(e, r);
    else if (Yc(l, e, t, n, r))
      r.stopPropagation();
    else if (Jo(e, r), 4 & t && -1 < Kc.indexOf(e)) {
      for (; l !== null; ) {
        var a = er(l);
        if (a !== null && Lu(a), a = ma(e, t, n, r), a === null && jl(e, t, r, Vr, n), a === l)
          break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else
      jl(e, t, r, null, n);
  }
}
var Vr = null;
function ma(e, t, n, r) {
  if (Vr = null, e = Za(r), e = kt(e), e !== null)
    if (t = Rt(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = xu(t), e !== null)
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
function Iu(e) {
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
      switch (jc()) {
        case Ja:
          return 1;
        case zu:
          return 4;
        case Dr:
        case Vc:
          return 16;
        case Nu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null, ro = null, Er = null;
function Du() {
  if (Er)
    return Er;
  var e, t = ro, n = t.length, r, l = "value" in tt ? tt.value : tt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++)
    ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fr() {
  return !0;
}
function ti() {
  return !1;
}
function we(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e)
      e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? fr : ti, this.isPropagationStopped = ti, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fr);
  }, persist: function() {
  }, isPersistent: fr }), t;
}
var un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, lo = we(un), Jn = V({}, un, { view: 0, detail: 0 }), Jc = we(Jn), Tl, Ll, gn, al = V({}, Jn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Tl = e.screenX - gn.screenX, Ll = e.screenY - gn.screenY) : Ll = Tl = 0, gn = e), Tl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ll;
} }), ni = we(al), ef = V({}, al, { dataTransfer: 0 }), tf = we(ef), nf = V({}, Jn, { relatedTarget: 0 }), Rl = we(nf), rf = V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lf = we(rf), af = V({}, un, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), of = we(af), uf = V({}, un, { data: 0 }), ri = we(uf), sf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, cf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, ff = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ff[e]) ? !!t[e] : !1;
}
function ao() {
  return df;
}
var pf = V({}, Jn, { key: function(e) {
  if (e.key) {
    var t = sf[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mf = we(pf), hf = V({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), li = we(hf), gf = V({}, Jn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), vf = we(gf), bf = V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yf = we(bf), wf = V({}, al, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), kf = we(wf), Sf = [9, 13, 27, 32], oo = He && "CompositionEvent" in window, Cn = null;
He && "documentMode" in document && (Cn = document.documentMode);
var xf = He && "TextEvent" in window && !Cn, Uu = He && (!oo || Cn && 8 < Cn && 11 >= Cn), ai = String.fromCharCode(32), oi = !1;
function ju(e, t) {
  switch (e) {
    case "keyup":
      return Sf.indexOf(t.keyCode) !== -1;
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
function Vu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return Vu(t);
    case "keypress":
      return t.which !== 32 ? null : (oi = !0, ai);
    case "textInput":
      return e = t.data, e === ai && oi ? null : e;
    default:
      return null;
  }
}
function _f(e, t) {
  if (It)
    return e === "compositionend" || !oo && ju(e, t) ? (e = Du(), Er = ro = tt = null, It = !1, e) : null;
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
      return Uu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cf[e.type] : t === "textarea";
}
function qu(e, t, n, r) {
  bu(r), t = qr(t, "onChange"), 0 < t.length && (n = new lo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zn = null, Vn = null;
function zf(e) {
  Zu(e, 0);
}
function ol(e) {
  var t = jt(e);
  if (fu(t))
    return e;
}
function Nf(e, t) {
  if (e === "change")
    return t;
}
var Au = !1;
if (He) {
  var Ml;
  if (He) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var ui = document.createElement("div");
      ui.setAttribute("oninput", "return;"), Fl = typeof ui.oninput == "function";
    }
    Ml = Fl;
  } else
    Ml = !1;
  Au = Ml && (!document.documentMode || 9 < document.documentMode);
}
function si() {
  zn && (zn.detachEvent("onpropertychange", $u), Vn = zn = null);
}
function $u(e) {
  if (e.propertyName === "value" && ol(Vn)) {
    var t = [];
    qu(t, Vn, e, Za(e)), Su(zf, t);
  }
}
function Pf(e, t, n) {
  e === "focusin" ? (si(), zn = t, Vn = n, zn.attachEvent("onpropertychange", $u)) : e === "focusout" && si();
}
function Tf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Vn);
}
function Lf(e, t) {
  if (e === "click")
    return ol(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change")
    return ol(t);
}
function Mf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Mf;
function qn(e, t) {
  if (Fe(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Xl.call(t, l) || !Fe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function ci(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function fi(e, t) {
  var n = ci(e);
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
    n = ci(n);
  }
}
function Bu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1;
}
function Hu() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Fr(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ff(e) {
  var t = Hu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bu(n.ownerDocument.documentElement, n)) {
    if (r !== null && io(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = fi(n, a);
        var o = fi(n, r);
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Of = He && "documentMode" in document && 11 >= document.documentMode, Dt = null, ha = null, Nn = null, ga = !1;
function di(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga || Dt == null || Dt !== Fr(r) || (r = Dt, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nn && qn(Nn, r) || (Nn = r, r = qr(ha, "onSelect"), 0 < r.length && (t = new lo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dt)));
}
function dr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ut = { animationend: dr("Animation", "AnimationEnd"), animationiteration: dr("Animation", "AnimationIteration"), animationstart: dr("Animation", "AnimationStart"), transitionend: dr("Transition", "TransitionEnd") }, Ol = {}, Wu = {};
He && (Wu = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);
function il(e) {
  if (Ol[e])
    return Ol[e];
  if (!Ut[e])
    return e;
  var t = Ut[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Wu)
      return Ol[e] = t[n];
  return e;
}
var Qu = il("animationend"), Ku = il("animationiteration"), Yu = il("animationstart"), Xu = il("transitionend"), Gu = /* @__PURE__ */ new Map(), pi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pt(e, t) {
  Gu.set(e, t), Lt(t, [e]);
}
for (var Il = 0; Il < pi.length; Il++) {
  var Dl = pi[Il], If = Dl.toLowerCase(), Df = Dl[0].toUpperCase() + Dl.slice(1);
  pt(If, "on" + Df);
}
pt(Qu, "onAnimationEnd");
pt(Ku, "onAnimationIteration");
pt(Yu, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Xu, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function mi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Oc(r, t, void 0, e), e.currentTarget = null;
}
function Zu(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], u = i.instance, f = i.currentTarget;
          if (i = i.listener, u !== a && l.isPropagationStopped())
            break e;
          mi(l, i, f), a = u;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (i = r[o], u = i.instance, f = i.currentTarget, i = i.listener, u !== a && l.isPropagationStopped())
            break e;
          mi(l, i, f), a = u;
        }
    }
  }
  if (Ir)
    throw e = fa, Ir = !1, fa = null, e;
}
function O(e, t) {
  var n = t[ka];
  n === void 0 && (n = t[ka] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ju(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
  var r = 0;
  t && (r |= 4), Ju(n, e, r, t);
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[pr]) {
    e[pr] = !0, ou.forEach(function(n) {
      n !== "selectionchange" && (Uf.has(n) || Ul(n, !1, e), Ul(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pr] || (t[pr] = !0, Ul("selectionchange", !1, t));
  }
}
function Ju(e, t, n, r) {
  switch (Iu(t)) {
    case 1:
      var l = Gc;
      break;
    case 4:
      l = Zc;
      break;
    default:
      l = no;
  }
  n = l.bind(null, t, n, e), l = void 0, !ca || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
            if (o = kt(i), o === null)
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
  Su(function() {
    var f = a, h = Za(n), m = [];
    e: {
      var p = Gu.get(e);
      if (p !== void 0) {
        var b = lo, y = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            b = mf;
            break;
          case "focusin":
            y = "focus", b = Rl;
            break;
          case "focusout":
            y = "blur", b = Rl;
            break;
          case "beforeblur":
          case "afterblur":
            b = Rl;
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
            b = ni;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = tf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = vf;
            break;
          case Qu:
          case Ku:
          case Yu:
            b = lf;
            break;
          case Xu:
            b = yf;
            break;
          case "scroll":
            b = Jc;
            break;
          case "wheel":
            b = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = li;
        }
        var w = (4 & t) !== 0, M = !w && e === "scroll", c = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var s = f, d; s !== null; ) {
          d = s;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, c !== null && (g = In(s, c), g != null && w.push($n(s, g, d)))), M)
            break;
          s = s.return;
        }
        0 < w.length && (p = new b(p, y, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if ((7 & t) === 0) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", p && n !== ua && (y = n.relatedTarget || n.fromElement) && (kt(y) || y[We]))
          break e;
        if ((b || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, b ? (y = n.relatedTarget || n.toElement, b = f, y = y ? kt(y) : null, y !== null && (M = Rt(y), y !== M || y.tag !== 5 && y.tag !== 6) && (y = null)) : (b = null, y = f), b !== y)) {
          if (w = ni, g = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = li, g = "onPointerLeave", c = "onPointerEnter", s = "pointer"), M = b == null ? p : jt(b), d = y == null ? p : jt(y), p = new w(g, s + "leave", b, n, h), p.target = M, p.relatedTarget = d, g = null, kt(h) === f && (w = new w(c, s + "enter", y, n, h), w.target = d, w.relatedTarget = M, g = w), M = g, b && y)
            t: {
              for (w = b, c = y, s = 0, d = w; d; d = Mt(d))
                s++;
              for (d = 0, g = c; g; g = Mt(g))
                d++;
              for (; 0 < s - d; )
                w = Mt(w), s--;
              for (; 0 < d - s; )
                c = Mt(c), d--;
              for (; s--; ) {
                if (w === c || c !== null && w === c.alternate)
                  break t;
                w = Mt(w), c = Mt(c);
              }
              w = null;
            }
          else
            w = null;
          b !== null && hi(m, p, b, w, !1), y !== null && M !== null && hi(m, M, y, w, !0);
        }
      }
      e: {
        if (p = f ? jt(f) : window, b = p.nodeName && p.nodeName.toLowerCase(), b === "select" || b === "input" && p.type === "file")
          var S = Nf;
        else if (ii(p))
          if (Au)
            S = Rf;
          else {
            S = Tf;
            var E = Pf;
          }
        else
          (b = p.nodeName) && b.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = Lf);
        if (S && (S = S(e, f))) {
          qu(m, S, n, h);
          break e;
        }
        E && E(e, p, f), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && ra(p, "number", p.value);
      }
      switch (E = f ? jt(f) : window, e) {
        case "focusin":
          (ii(E) || E.contentEditable === "true") && (Dt = E, ha = f, Nn = null);
          break;
        case "focusout":
          Nn = ha = Dt = null;
          break;
        case "mousedown":
          ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ga = !1, di(m, n, h);
          break;
        case "selectionchange":
          if (Of)
            break;
        case "keydown":
        case "keyup":
          di(m, n, h);
      }
      var _;
      if (oo)
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
        It ? ju(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Uu && n.locale !== "ko" && (It || C !== "onCompositionStart" ? C === "onCompositionEnd" && It && (_ = Du()) : (tt = h, ro = "value" in tt ? tt.value : tt.textContent, It = !0)), E = qr(f, C), 0 < E.length && (C = new ri(C, e, null, n, h), m.push({ event: C, listeners: E }), _ ? C.data = _ : (_ = Vu(n), _ !== null && (C.data = _)))), (_ = xf ? Ef(e, n) : _f(e, n)) && (f = qr(f, "onBeforeInput"), 0 < f.length && (h = new ri("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: f }), h.data = _));
    }
    Zu(m, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = In(e, n), a != null && r.unshift($n(e, a, l)), a = In(e, t), a != null && r.push($n(e, a, l))), e = e.return;
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
function hi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, u = i.alternate, f = i.stateNode;
    if (u !== null && u === r)
      break;
    i.tag === 5 && f !== null && (i = f, l ? (u = In(n, a), u != null && o.unshift($n(n, u, i))) : l || (u = In(n, a), u != null && o.push($n(n, u, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jf = /\r\n?/g, Vf = /\u0000|\uFFFD/g;
function gi(e) {
  return (typeof e == "string" ? e : "" + e).replace(jf, `
`).replace(Vf, "");
}
function mr(e, t, n) {
  if (t = gi(t), gi(e) !== t && n)
    throw Error(v(425));
}
function Ar() {
}
var va = null, ba = null;
function ya(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var wa = typeof setTimeout == "function" ? setTimeout : void 0, qf = typeof clearTimeout == "function" ? clearTimeout : void 0, vi = typeof Promise == "function" ? Promise : void 0, Af = typeof queueMicrotask == "function" ? queueMicrotask : typeof vi < "u" ? function(e) {
  return vi.resolve(null).then(e).catch($f);
} : wa;
function $f(e) {
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
function bi(e) {
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
var sn = Math.random().toString(36).slice(2), De = "__reactFiber$" + sn, Bn = "__reactProps$" + sn, We = "__reactContainer$" + sn, ka = "__reactEvents$" + sn, Bf = "__reactListeners$" + sn, Hf = "__reactHandles$" + sn;
function kt(e) {
  var t = e[De];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[We] || n[De]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = bi(e); e !== null; ) {
          if (n = e[De])
            return n;
          e = bi(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function er(e) {
  return e = e[De] || e[We], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(v(33));
}
function ul(e) {
  return e[Bn] || null;
}
var Sa = [], Vt = -1;
function mt(e) {
  return { current: e };
}
function I(e) {
  0 > Vt || (e.current = Sa[Vt], Sa[Vt] = null, Vt--);
}
function F(e, t) {
  Vt++, Sa[Vt] = e.current, e.current = t;
}
var dt = {}, ae = mt(dt), de = mt(!1), Ct = dt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return dt;
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
  I(de), I(ae);
}
function yi(e, t, n) {
  if (ae.current !== dt)
    throw Error(v(168));
  F(ae, t), F(de, n);
}
function es(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(v(108, Nc(e) || "Unknown", l));
  return V({}, n, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dt, Ct = ae.current, F(ae, e), F(de, de.current), !0;
}
function wi(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(v(169));
  n ? (e = es(e, t, Ct), r.__reactInternalMemoizedMergedChildContext = e, I(de), I(ae), F(ae, e)) : I(de), F(de, n);
}
var qe = null, sl = !1, ql = !1;
function ts(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function Wf(e) {
  sl = !0, ts(e);
}
function ht() {
  if (!ql && qe !== null) {
    ql = !0;
    var e = 0, t = R;
    try {
      var n = qe;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, sl = !1;
    } catch (l) {
      throw qe !== null && (qe = qe.slice(e + 1)), Cu(Ja, ht), l;
    } finally {
      R = t, ql = !1;
    }
  }
  return null;
}
var qt = [], At = 0, Hr = null, Wr = 0, ke = [], Se = 0, zt = null, Ae = 1, $e = "";
function yt(e, t) {
  qt[At++] = Wr, qt[At++] = Hr, Hr = e, Wr = t;
}
function ns(e, t, n) {
  ke[Se++] = Ae, ke[Se++] = $e, ke[Se++] = zt, zt = e;
  var r = Ae;
  e = $e;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - Re(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ae = 1 << 32 - Re(t) + l | n << l | r, $e = a + e;
  } else
    Ae = 1 << a | n << l | r, $e = e;
}
function uo(e) {
  e.return !== null && (yt(e, 1), ns(e, 1, 0));
}
function so(e) {
  for (; e === Hr; )
    Hr = qt[--At], qt[At] = null, Wr = qt[--At], qt[At] = null;
  for (; e === zt; )
    zt = ke[--Se], ke[Se] = null, $e = ke[--Se], ke[Se] = null, Ae = ke[--Se], ke[Se] = null;
}
var ve = null, ge = null, D = !1, Le = null;
function rs(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ki(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ae, overflow: $e } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function xa(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function Ea(e) {
  if (D) {
    var t = ge;
    if (t) {
      var n = t;
      if (!ki(e, t)) {
        if (xa(e))
          throw Error(v(418));
        t = ot(n.nextSibling);
        var r = ve;
        t && ki(e, t) ? rs(r, n) : (e.flags = -4097 & e.flags | 2, D = !1, ve = e);
      }
    } else {
      if (xa(e))
        throw Error(v(418));
      e.flags = -4097 & e.flags | 2, D = !1, ve = e;
    }
  }
}
function Si(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function hr(e) {
  if (e !== ve)
    return !1;
  if (!D)
    return Si(e), D = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ya(e.type, e.memoizedProps)), t && (t = ge)) {
    if (xa(e))
      throw ls(), Error(v(418));
    for (; t; )
      rs(e, t), t = ot(t.nextSibling);
  }
  if (Si(e), e.tag === 13) {
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
function ls() {
  for (var e = ge; e; )
    e = ot(e.nextSibling);
}
function tn() {
  ge = ve = null, D = !1;
}
function co(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var Qf = Ye.ReactCurrentBatchConfig;
function Pe(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Qr = mt(null), Kr = null, $t = null, fo = null;
function po() {
  fo = $t = Kr = null;
}
function mo(e) {
  var t = Qr.current;
  I(Qr), e._currentValue = t;
}
function _a(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Gt(e, t) {
  Kr = e, fo = $t = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (fo !== e)
    if (e = { context: e, memoizedValue: t, next: null }, $t === null) {
      if (Kr === null)
        throw Error(v(308));
      $t = e, Kr.dependencies = { lanes: 0, firstContext: e };
    } else
      $t = $t.next = e;
  return t;
}
var St = null;
function ho(e) {
  St === null ? St = [e] : St.push(e);
}
function as(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ho(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Qe(e, r);
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ze = !1;
function go(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function os(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function it(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (2 & L) !== 0) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ho(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Qe(e, n);
}
function Cr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (4194240 & n) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
  }
}
function xi(e, t) {
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
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  Ze = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var u = i, f = u.next;
    u.next = null, o === null ? a = f : o.next = f, o = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = f : i.next = f, h.lastBaseUpdate = u));
  }
  if (a !== null) {
    var m = l.baseState;
    o = 0, h = f = u = null, i = a;
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
              m = V({}, m, p);
              break e;
            case 2:
              Ze = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else
        b = { eventTime: b, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (f = h = b, u = m) : h = h.next = b, o |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null)
          break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (u = m), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else
      a === null && (l.shared.lanes = 0);
    Pt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Ei(e, t, n) {
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
var is = new au.Component().refs;
function Ca(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = st(e), a = Be(r, l);
  a.payload = t, n != null && (a.callback = n), t = it(e, a, l), t !== null && (Me(t, e, l, r), Cr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = st(e), a = Be(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = it(e, a, l), t !== null && (Me(t, e, l, r), Cr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = st(e), l = Be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = it(e, l, r), t !== null && (Me(t, e, r, n), Cr(t, e, r));
} };
function _i(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, a) : !0;
}
function us(e, t, n) {
  var r = !1, l = dt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = _e(a) : (l = pe(t) ? Ct : ae.current, r = t.contextTypes, a = (r = r != null) ? en(e, l) : dt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Ci(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function za(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = is, go(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = _e(a) : (a = pe(t) ? Ct : ae.current, l.context = en(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ca(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && cl.enqueueReplaceState(l, l.state, null), Yr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
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
        i === is && (i = l.refs = {}), o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string")
      throw Error(v(284));
    if (!n._owner)
      throw Error(v(290, e));
  }
  return e;
}
function gr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zi(e) {
  var t = e._init;
  return t(e._payload);
}
function ss(e) {
  function t(c, s) {
    if (e) {
      var d = c.deletions;
      d === null ? (c.deletions = [s], c.flags |= 16) : d.push(s);
    }
  }
  function n(c, s) {
    if (!e)
      return null;
    for (; s !== null; )
      t(c, s), s = s.sibling;
    return null;
  }
  function r(c, s) {
    for (c = /* @__PURE__ */ new Map(); s !== null; )
      s.key !== null ? c.set(s.key, s) : c.set(s.index, s), s = s.sibling;
    return c;
  }
  function l(c, s) {
    return c = ct(c, s), c.index = 0, c.sibling = null, c;
  }
  function a(c, s, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < s ? (c.flags |= 2, s) : d) : (c.flags |= 2, s)) : (c.flags |= 1048576, s);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function i(c, s, d, g) {
    return s === null || s.tag !== 6 ? (s = Kl(d, c.mode, g), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function u(c, s, d, g) {
    var S = d.type;
    return S === Ot ? h(c, s, d.props.children, g, d.key) : s !== null && (s.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ge && zi(S) === s.type) ? (g = l(s, d.props), g.ref = vn(c, s, d), g.return = c, g) : (g = Rr(d.type, d.key, d.props, null, c.mode, g), g.ref = vn(c, s, d), g.return = c, g);
  }
  function f(c, s, d, g) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Yl(d, c.mode, g), s.return = c, s) : (s = l(s, d.children || []), s.return = c, s);
  }
  function h(c, s, d, g, S) {
    return s === null || s.tag !== 7 ? (s = _t(d, c.mode, g, S), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function m(c, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number")
      return s = Kl("" + s, c.mode, d), s.return = c, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case ar:
          return d = Rr(s.type, s.key, s.props, null, c.mode, d), d.ref = vn(c, null, s), d.return = c, d;
        case Ft:
          return s = Yl(s, c.mode, d), s.return = c, s;
        case Ge:
          var g = s._init;
          return m(c, g(s._payload), d);
      }
      if (kn(s) || dn(s))
        return s = _t(s, c.mode, d, null), s.return = c, s;
      gr(c, s);
    }
    return null;
  }
  function p(c, s, d, g) {
    var S = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : i(c, s, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === S ? u(c, s, d, g) : null;
        case Ft:
          return d.key === S ? f(c, s, d, g) : null;
        case Ge:
          return S = d._init, p(c, s, S(d._payload), g);
      }
      if (kn(d) || dn(d))
        return S !== null ? null : h(c, s, d, g, null);
      gr(c, d);
    }
    return null;
  }
  function b(c, s, d, g, S) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return c = c.get(d) || null, i(s, c, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ar:
          return c = c.get(g.key === null ? d : g.key) || null, u(s, c, g, S);
        case Ft:
          return c = c.get(g.key === null ? d : g.key) || null, f(s, c, g, S);
        case Ge:
          var E = g._init;
          return b(c, s, d, E(g._payload), S);
      }
      if (kn(g) || dn(g))
        return c = c.get(d) || null, h(s, c, g, S, null);
      gr(s, g);
    }
    return null;
  }
  function y(c, s, d, g) {
    for (var S = null, E = null, _ = s, C = s = 0, A = null; _ !== null && C < d.length; C++) {
      _.index > C ? (A = _, _ = null) : A = _.sibling;
      var T = p(c, _, d[C], g);
      if (T === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && T.alternate === null && t(c, _), s = a(T, s, C), E === null ? S = T : E.sibling = T, E = T, _ = A;
    }
    if (C === d.length)
      return n(c, _), D && yt(c, C), S;
    if (_ === null) {
      for (; C < d.length; C++)
        _ = m(c, d[C], g), _ !== null && (s = a(_, s, C), E === null ? S = _ : E.sibling = _, E = _);
      return D && yt(c, C), S;
    }
    for (_ = r(c, _); C < d.length; C++)
      A = b(_, c, C, d[C], g), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? C : A.key), s = a(A, s, C), E === null ? S = A : E.sibling = A, E = A);
    return e && _.forEach(function(ze) {
      return t(c, ze);
    }), D && yt(c, C), S;
  }
  function w(c, s, d, g) {
    var S = dn(d);
    if (typeof S != "function")
      throw Error(v(150));
    if (d = S.call(d), d == null)
      throw Error(v(151));
    for (var E = S = null, _ = s, C = s = 0, A = null, T = d.next(); _ !== null && !T.done; C++, T = d.next()) {
      _.index > C ? (A = _, _ = null) : A = _.sibling;
      var ze = p(c, _, T.value, g);
      if (ze === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && ze.alternate === null && t(c, _), s = a(ze, s, C), E === null ? S = ze : E.sibling = ze, E = ze, _ = A;
    }
    if (T.done)
      return n(c, _), D && yt(c, C), S;
    if (_ === null) {
      for (; !T.done; C++, T = d.next())
        T = m(c, T.value, g), T !== null && (s = a(T, s, C), E === null ? S = T : E.sibling = T, E = T);
      return D && yt(c, C), S;
    }
    for (_ = r(c, _); !T.done; C++, T = d.next())
      T = b(_, c, C, T.value, g), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? C : T.key), s = a(T, s, C), E === null ? S = T : E.sibling = T, E = T);
    return e && _.forEach(function(cn) {
      return t(c, cn);
    }), D && yt(c, C), S;
  }
  function M(c, s, d, g) {
    if (typeof d == "object" && d !== null && d.type === Ot && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var S = d.key, E = s; E !== null; ) {
              if (E.key === S) {
                if (S = d.type, S === Ot) {
                  if (E.tag === 7) {
                    n(c, E.sibling), s = l(E, d.props.children), s.return = c, c = s;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ge && zi(S) === E.type) {
                  n(c, E.sibling), s = l(E, d.props), s.ref = vn(c, E, d), s.return = c, c = s;
                  break e;
                }
                n(c, E);
                break;
              } else
                t(c, E);
              E = E.sibling;
            }
            d.type === Ot ? (s = _t(d.props.children, c.mode, g, d.key), s.return = c, c = s) : (g = Rr(d.type, d.key, d.props, null, c.mode, g), g.ref = vn(c, s, d), g.return = c, c = g);
          }
          return o(c);
        case Ft:
          e: {
            for (E = d.key; s !== null; ) {
              if (s.key === E)
                if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                  n(c, s.sibling), s = l(s, d.children || []), s.return = c, c = s;
                  break e;
                } else {
                  n(c, s);
                  break;
                }
              else
                t(c, s);
              s = s.sibling;
            }
            s = Yl(d, c.mode, g), s.return = c, c = s;
          }
          return o(c);
        case Ge:
          return E = d._init, M(c, s, E(d._payload), g);
      }
      if (kn(d))
        return y(c, s, d, g);
      if (dn(d))
        return w(c, s, d, g);
      gr(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (n(c, s.sibling), s = l(s, d), s.return = c, c = s) : (n(c, s), s = Kl(d, c.mode, g), s.return = c, c = s), o(c)) : n(c, s);
  }
  return M;
}
var nn = ss(!0), cs = ss(!1), tr = {}, je = mt(tr), Hn = mt(tr), Wn = mt(tr);
function xt(e) {
  if (e === tr)
    throw Error(v(174));
  return e;
}
function vo(e, t) {
  switch (F(Wn, t), F(Hn, e), F(je, tr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : aa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = aa(t, e);
  }
  I(je), F(je, t);
}
function rn() {
  I(je), I(Hn), I(Wn);
}
function fs(e) {
  xt(Wn.current);
  var t = xt(je.current), n = aa(t, e.type);
  t !== n && (F(Hn, e), F(je, n));
}
function bo(e) {
  Hn.current === e && (I(je), I(Hn));
}
var U = mt(0);
function Xr(e) {
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
function yo() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var zr = Ye.ReactCurrentDispatcher, $l = Ye.ReactCurrentBatchConfig, Nt = 0, j = null, W = null, X = null, Gr = !1, Pn = !1, Qn = 0, Kf = 0;
function ne() {
  throw Error(v(321));
}
function wo(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n]))
      return !1;
  return !0;
}
function ko(e, t, n, r, l, a) {
  if (Nt = a, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? Zf : Jf, e = n(r, l), Pn) {
    a = 0;
    do {
      if (Pn = !1, Qn = 0, 25 <= a)
        throw Error(v(301));
      a += 1, X = W = null, t.updateQueue = null, zr.current = ed, e = n(r, l);
    } while (Pn);
  }
  if (zr.current = Zr, t = W !== null && W.next !== null, Nt = 0, X = W = j = null, Gr = !1, t)
    throw Error(v(300));
  return e;
}
function So() {
  var e = Qn !== 0;
  return Qn = 0, e;
}
function Ie() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? j.memoizedState = X = e : X = X.next = e, X;
}
function Ce() {
  if (W === null) {
    var e = j.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = W.next;
  var t = X === null ? j.memoizedState : X.next;
  if (t !== null)
    X = t, W = e;
  else {
    if (e === null)
      throw Error(v(310));
    W = e, e = { memoizedState: W.memoizedState, baseState: W.baseState, baseQueue: W.baseQueue, queue: W.queue, next: null }, X === null ? j.memoizedState = X = e : X = X.next = e;
  }
  return X;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Ce(), n = t.queue;
  if (n === null)
    throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = W, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, u = null, f = a;
    do {
      var h = f.lane;
      if ((Nt & h) === h)
        u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = { lane: h, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null };
        u === null ? (i = u = m, o = r) : u = u.next = m, j.lanes |= h, Pt |= h;
      }
      f = f.next;
    } while (f !== null && f !== a);
    u === null ? o = r : u.next = i, Fe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, j.lanes |= a, Pt |= a, l = l.next;
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
    Fe(a, t.memoizedState) || (fe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function ds() {
}
function ps(e, t) {
  var n = j, r = Ce(), l = t(), a = !Fe(r.memoizedState, l);
  if (a && (r.memoizedState = l, fe = !0), r = r.queue, xo(gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || X !== null && 1 & X.memoizedState.tag) {
    if (n.flags |= 2048, Yn(9, hs.bind(null, n, r, l, t), void 0, null), G === null)
      throw Error(v(349));
    (30 & Nt) !== 0 || ms(n, t, l);
  }
  return l;
}
function ms(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = j.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, j.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hs(e, t, n, r) {
  t.value = n, t.getSnapshot = r, vs(t) && bs(e);
}
function gs(e, t, n) {
  return n(function() {
    vs(t) && bs(e);
  });
}
function vs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function bs(e) {
  var t = Qe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Ni(e) {
  var t = Ie();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gf.bind(null, j, e), [t.memoizedState, e];
}
function Yn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = j.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, j.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ys() {
  return Ce().memoizedState;
}
function Nr(e, t, n, r) {
  var l = Ie();
  j.flags |= e, l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r);
}
function fl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (W !== null) {
    var o = W.memoizedState;
    if (a = o.destroy, r !== null && wo(r, o.deps)) {
      l.memoizedState = Yn(t, n, a, r);
      return;
    }
  }
  j.flags |= e, l.memoizedState = Yn(1 | t, n, a, r);
}
function Pi(e, t) {
  return Nr(8390656, 8, e, t);
}
function xo(e, t) {
  return fl(2048, 8, e, t);
}
function ws(e, t) {
  return fl(4, 2, e, t);
}
function ks(e, t) {
  return fl(4, 4, e, t);
}
function Ss(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function xs(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fl(4, 4, Ss.bind(null, t, e), n);
}
function Eo() {
}
function Es(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function _s(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cs(e, t, n) {
  return (21 & Nt) === 0 ? (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n) : (Fe(n, t) || (n = Pu(), j.lanes |= n, Pt |= n, e.baseState = !0), t);
}
function Yf(e, t) {
  var n = R;
  R = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    R = n, $l.transition = r;
  }
}
function zs() {
  return Ce().memoizedState;
}
function Xf(e, t, n) {
  var r = st(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ns(e))
    Ps(t, n);
  else if (n = as(e, t, n, r), n !== null) {
    var l = ie();
    Me(n, e, r, l), Ts(n, t, r);
  }
}
function Gf(e, t, n) {
  var r = st(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ns(e))
    Ps(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
      try {
        var o = t.lastRenderedState, i = a(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, Fe(i, o)) {
          var u = t.interleaved;
          u === null ? (l.next = l, ho(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
    n = as(e, t, l, r), n !== null && (l = ie(), Me(n, e, r, l), Ts(n, t, r));
  }
}
function Ns(e) {
  var t = e.alternate;
  return e === j || t !== null && t === j;
}
function Ps(e, t) {
  Pn = Gr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ts(e, t, n) {
  if ((4194240 & n) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
  }
}
var Zr = { readContext: _e, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, Zf = { readContext: _e, useCallback: function(e, t) {
  return Ie().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Pi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Nr(4194308, 4, Ss.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Nr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Nr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ie();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ie();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Xf.bind(null, j, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ie();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ni, useDebugValue: Eo, useDeferredValue: function(e) {
  return Ie().memoizedState = e;
}, useTransition: function() {
  var e = Ni(!1), t = e[0];
  return e = Yf.bind(null, e[1]), Ie().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = j, l = Ie();
  if (D) {
    if (n === void 0)
      throw Error(v(407));
    n = n();
  } else {
    if (n = t(), G === null)
      throw Error(v(349));
    (30 & Nt) !== 0 || ms(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Pi(gs.bind(null, r, a, e), [e]), r.flags |= 2048, Yn(9, hs.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Ie(), t = G.identifierPrefix;
  if (D) {
    var n = $e, r = Ae;
    n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Kf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Jf = { readContext: _e, useCallback: Es, useContext: _e, useEffect: xo, useImperativeHandle: xs, useInsertionEffect: ws, useLayoutEffect: ks, useMemo: _s, useReducer: Bl, useRef: ys, useState: function() {
  return Bl(Kn);
}, useDebugValue: Eo, useDeferredValue: function(e) {
  var t = Ce();
  return Cs(t, W.memoizedState, e);
}, useTransition: function() {
  var e = Bl(Kn)[0], t = Ce().memoizedState;
  return [e, t];
}, useMutableSource: ds, useSyncExternalStore: ps, useId: zs, unstable_isNewReconciler: !1 }, ed = { readContext: _e, useCallback: Es, useContext: _e, useEffect: xo, useImperativeHandle: xs, useInsertionEffect: ws, useLayoutEffect: ks, useMemo: _s, useReducer: Hl, useRef: ys, useState: function() {
  return Hl(Kn);
}, useDebugValue: Eo, useDeferredValue: function(e) {
  var t = Ce();
  return W === null ? t.memoizedState = e : Cs(t, W.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Kn)[0], t = Ce().memoizedState;
  return [e, t];
}, useMutableSource: ds, useSyncExternalStore: ps, useId: zs, unstable_isNewReconciler: !1 };
function ln(e, t) {
  try {
    var n = "", r = t;
    do
      n += zc(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function Na(e, t) {
  try {
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var td = typeof WeakMap == "function" ? WeakMap : Map;
function Ls(e, t, n) {
  n = Be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    el || (el = !0, Ua = r), Na(e, t);
  }, n;
}
function Rs(e, t, n) {
  n = Be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Na(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Na(e, t), typeof r != "function" && (ut === null ? ut = /* @__PURE__ */ new Set([this]) : ut.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ti(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new td();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = hd.bind(null, e, t, n), t.then(e, e));
}
function Li(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ri(e, t, n, r, l) {
  return (1 & e.mode) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Be(-1, 1), t.tag = 2, it(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
}
var nd = Ye.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? cs(t, null, n, r) : nn(t, e.child, n, r);
}
function Mi(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Gt(t, l), r = ko(e, t, n, r, a, l), n = So(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : (D && n && uo(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Fi(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Ro(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ms(e, t, a, r, l)) : (e = Rr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, (e.lanes & l) === 0) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref)
      return Ke(e, t, l);
  }
  return t.flags |= 1, e = ct(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ms(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qn(a, r) && e.ref === t.ref)
      if (fe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0)
        (131072 & e.flags) !== 0 && (fe = !0);
      else
        return t.lanes = e.lanes, Ke(e, t, l);
  }
  return Pa(e, t, n, r, l);
}
function Fs(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((1 & t.mode) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Ht, he), he |= n;
    else {
      if ((1073741824 & n) === 0)
        return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Ht, he), he |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, F(Ht, he), he |= r;
    }
  else
    a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, F(Ht, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Os(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Pa(e, t, n, r, l) {
  var a = pe(n) ? Ct : ae.current;
  return a = en(t, a), Gt(t, l), n = ko(e, t, n, r, a, l), r = So(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : (D && r && uo(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Oi(e, t, n, r, l) {
  if (pe(n)) {
    var a = !0;
    Br(t);
  } else
    a = !1;
  if (Gt(t, l), t.stateNode === null)
    Pr(e, t), us(t, n, r), za(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var u = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = _e(f) : (f = pe(n) ? Ct : ae.current, f = en(t, f));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || u !== f) && Ci(t, o, r, f), Ze = !1;
    var p = t.memoizedState;
    o.state = p, Yr(t, r, o, l), u = t.memoizedState, i !== r || p !== u || de.current || Ze ? (typeof h == "function" && (Ca(t, n, h, r), u = t.memoizedState), (i = Ze || _i(t, n, i, r, p, u, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = f, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, os(e, t), i = t.memoizedProps, f = t.type === t.elementType ? i : Pe(t.type, i), o.props = f, m = t.pendingProps, p = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = _e(u) : (u = pe(n) ? Ct : ae.current, u = en(t, u));
    var b = n.getDerivedStateFromProps;
    (h = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== u) && Ci(t, o, r, u), Ze = !1, p = t.memoizedState, o.state = p, Yr(t, r, o, l);
    var y = t.memoizedState;
    i !== m || p !== y || de.current || Ze ? (typeof b == "function" && (Ca(t, n, b, r), y = t.memoizedState), (f = Ze || _i(t, n, f, r, p, y, u) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = u, r = f) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ta(e, t, n, r, a, l);
}
function Ta(e, t, n, r, l, a) {
  Os(e, t);
  var o = (128 & t.flags) !== 0;
  if (!r && !o)
    return l && wi(t, n, !1), Ke(e, t, a);
  r = t.stateNode, nd.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = nn(t, e.child, null, a), t.child = nn(t, null, i, a)) : oe(e, t, i, a), t.memoizedState = r.state, l && wi(t, n, !0), t.child;
}
function Is(e) {
  var t = e.stateNode;
  t.pendingContext ? yi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yi(e, t.context, !1), vo(e, t.containerInfo);
}
function Ii(e, t, n, r, l) {
  return tn(), co(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var La = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ds(e, t, n) {
  var r = t.pendingProps, l = U.current, a = !1, o = (128 & t.flags) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (2 & l) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(U, 1 & l), e === null)
    return Ea(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((1 & t.mode) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, (1 & r) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = ml(o, r, 0, null), e = _t(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ra(n), t.memoizedState = La, e) : _o(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
    return rd(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return (1 & o) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ct(l, u), r.subtreeFlags = 14680064 & l.subtreeFlags), i !== null ? a = ct(i, a) : (a = _t(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ra(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = La, r;
  }
  return a = e.child, e = a.sibling, r = ct(a, { mode: "visible", children: r.children }), (1 & t.mode) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _o(e, t) {
  return t = ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vr(e, t, n, r) {
  return r !== null && co(r), nn(t, e.child, null, n), e = _o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function rd(e, t, n, r, l, a, o) {
  if (n)
    return 256 & t.flags ? (t.flags &= -257, r = Wl(Error(v(422))), vr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), a = _t(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, (1 & t.mode) !== 0 && nn(t, e.child, null, o), t.child.memoizedState = Ra(o), t.memoizedState = La, a);
  if ((1 & t.mode) === 0)
    return vr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var i = r.dgst;
    return r = i, a = Error(v(419)), r = Wl(a, r, void 0), vr(e, t, o, r);
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
      l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Qe(e, l), Me(r, e, l, -1));
    }
    return Lo(), r = Wl(Error(v(421))), vr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gd.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, ge = ot(l.nextSibling), ve = t, D = !0, Le = null, e !== null && (ke[Se++] = Ae, ke[Se++] = $e, ke[Se++] = zt, Ae = e.id, $e = e.overflow, zt = t), t = _o(t, r.children), t.flags |= 4096, t);
}
function Di(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _a(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Us(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (oe(e, t, r.children, n), r = U.current, (2 & r) !== 0)
    r = 1 & r | 2, t.flags |= 128;
  else {
    if (e !== null && (128 & e.flags) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Di(e, n, t);
          else if (e.tag === 19)
            Di(e, n, t);
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
  if (F(U, r), (1 & t.mode) === 0)
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, !1, l, n, a);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Xr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ql(t, !0, n, null, a);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  (1 & t.mode) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ke(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Pt |= t.lanes, (n & t.childLanes) === 0)
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
function ld(e, t, n) {
  switch (t.tag) {
    case 3:
      Is(t), tn();
      break;
    case 5:
      fs(t);
      break;
    case 1:
      pe(t.type) && Br(t);
      break;
    case 4:
      vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(U, 1 & U.current), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ds(e, t, n) : (F(U, 1 & U.current), e = Ke(e, t, n), e !== null ? e.sibling : null);
      F(U, 1 & U.current);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (128 & e.flags) !== 0) {
        if (r)
          return Us(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fs(e, t, n);
  }
  return Ke(e, t, n);
}
var js, Ma, Vs, qs;
js = function(e, t) {
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
Ma = function() {
};
Vs = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, xt(je.current);
    var a = null;
    switch (n) {
      case "input":
        l = ta(e, l), r = ta(e, r), a = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = la(e, l), r = la(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
    }
    oa(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var i = l[f];
          for (o in i)
            i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Fn.hasOwnProperty(f) ? a || (a = []) : (a = a || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (i = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== i && (u != null || i != null))
        if (f === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in u)
              u.hasOwnProperty(o) && i[o] !== u[o] && (n || (n = {}), n[o] = u[o]);
          } else
            n || (a || (a = []), a.push(f, n)), n = u;
        else
          f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (a = a || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Fn.hasOwnProperty(f) ? (u != null && f === "onScroll" && O("scroll", e), a || i === u || (a = [])) : (a = a || []).push(f, u));
    }
    n && (a = a || []).push("style", n);
    var f = a;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
qs = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bn(e, t) {
  if (!D)
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
function ad(e, t, n) {
  var r = t.pendingProps;
  switch (so(t), t.tag) {
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
      return r = t.stateNode, rn(), I(de), I(ae), yo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (256 & t.flags) === 0 || (t.flags |= 1024, Le !== null && (qa(Le), Le = null))), Ma(e, t), re(t), null;
    case 5:
      bo(t);
      var l = xt(Wn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(v(166));
          return re(t), null;
        }
        if (e = xt(je.current), hr(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[De] = t, r[Bn] = a, e = (1 & t.mode) !== 0, n) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++)
                O(xn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Wo(r, a), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, O("invalid", r);
              break;
            case "textarea":
              Ko(r, a), O("invalid", r);
          }
          oa(n, a), l = null;
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var i = a[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && mr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && mr(r.textContent, i, e), l = ["children", "" + i]) : Fn.hasOwnProperty(o) && i != null && o === "onScroll" && O("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Qo(r, a, !0);
              break;
            case "textarea":
              or(r), Yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ar);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[De] = t, e[Bn] = r, js(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ia(n, r), n) {
              case "dialog":
                O("cancel", e), O("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++)
                  O(xn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), l = r;
                break;
              case "details":
                O("toggle", e), l = r;
                break;
              case "input":
                Wo(e, r), l = ta(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Ko(e, r), l = la(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            oa(n, l), i = l;
            for (a in i)
              if (i.hasOwnProperty(a)) {
                var u = i[a];
                a === "style" ? vu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && hu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && On(e, u) : typeof u == "number" && On(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Fn.hasOwnProperty(a) ? u != null && a === "onScroll" && O("scroll", e) : u != null && Ka(e, a, u, o));
              }
            switch (n) {
              case "input":
                or(e), Qo(e, r, !1);
                break;
              case "textarea":
                or(e), Yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Qt(e, !!r.multiple, a, !1) : r.defaultValue != null && Qt(e, !!r.multiple, r.defaultValue, !0);
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
        qs(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(v(166));
        if (n = xt(Wn.current), xt(je.current), hr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[De] = t, (a = r.nodeValue !== n) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && mr(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          a && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[De] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (I(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (D && ge !== null && (1 & t.mode) !== 0 && (128 & t.flags) === 0)
          ls(), tn(), t.flags |= 98560, a = !1;
        else if (a = hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a)
              throw Error(v(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(v(317));
            a[De] = t;
          } else
            tn(), (128 & t.flags) === 0 && (t.memoizedState = null), t.flags |= 4;
          re(t), a = !1;
        } else
          Le !== null && (qa(Le), Le = null), a = !0;
        if (!a)
          return 65536 & t.flags ? t : null;
      }
      return (128 & t.flags) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (1 & t.mode) !== 0 && (e === null || (1 & U.current) !== 0 ? Q === 0 && (Q = 3) : Lo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return rn(), Ma(e, t), e === null && An(t.stateNode.containerInfo), re(t), null;
    case 10:
      return mo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && $r(), re(t), null;
    case 19:
      if (I(U), a = t.memoizedState, a === null)
        return re(t), null;
      if (r = (128 & t.flags) !== 0, o = a.rendering, o === null)
        if (r)
          bn(a, !1);
        else {
          if (Q !== 0 || e !== null && (128 & e.flags) !== 0)
            for (e = t.child; e !== null; ) {
              if (o = Xr(e), o !== null) {
                for (t.flags |= 128, bn(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return F(U, 1 & U.current | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && B() > an && (t.flags |= 128, r = !0, bn(a, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Xr(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bn(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !D)
              return re(t), null;
          } else
            2 * B() - a.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, bn(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = B(), t.sibling = null, n = U.current, F(U, r ? 1 & n | 2 : 1 & n), t) : (re(t), null);
    case 22:
    case 23:
      return To(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (1 & t.mode) !== 0 ? (1073741824 & he) !== 0 && (re(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function od(e, t) {
  switch (so(t), t.tag) {
    case 1:
      return pe(t.type) && $r(), e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
    case 3:
      return rn(), I(de), I(ae), yo(), e = t.flags, (65536 & e) !== 0 && (128 & e) === 0 ? (t.flags = -65537 & e | 128, t) : null;
    case 5:
      return bo(t), null;
    case 13:
      if (I(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(v(340));
        tn();
      }
      return e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
    case 19:
      return I(U), null;
    case 4:
      return rn(), null;
    case 10:
      return mo(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1, le = !1, id = typeof WeakSet == "function" ? WeakSet : Set, k = null;
function Bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else
      n.current = null;
}
function Fa(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ui = !1;
function ud(e, t) {
  if (va = jr, e = Hu(), io(e)) {
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
          var o = 0, i = -1, u = -1, f = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var b; m !== n || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== a || r !== 0 && m.nodeType !== 3 || (u = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (b = m.firstChild) !== null; )
                p = m, m = b;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++f === l && (i = o), p === a && ++h === r && (u = o), (b = m.nextSibling) !== null)
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
  for (ba = { focusedElem: e, selectionRange: n }, jr = !1, k = t; k !== null; )
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
                  var w = y.memoizedProps, M = y.memoizedState, c = t.stateNode, s = c.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Pe(t.type, w), M);
                  c.__reactInternalSnapshotBeforeUpdate = s;
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
          q(t, t.return, g);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, k = e;
          break;
        }
        k = t.return;
      }
  return y = Ui, Ui = !1, y;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Fa(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
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
function Oa(e) {
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
function As(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, As(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[De], delete t[Bn], delete t[ka], delete t[Bf], delete t[Hf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $s(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ji(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $s(e.return))
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
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ia(e, t, n), e = e.sibling; e !== null; )
      Ia(e, t, n), e = e.sibling;
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null; )
      Da(e, t, n), e = e.sibling;
}
var Z = null, Te = !1;
function Xe(e, t, n) {
  for (n = n.child; n !== null; )
    Bs(e, t, n), n = n.sibling;
}
function Bs(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ll, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      le || Bt(n, t);
    case 6:
      var r = Z, l = Te;
      Z = null, Xe(e, t, n), Z = r, Te = l, Z !== null && (Te ? (e = Z, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Z.removeChild(n.stateNode));
      break;
    case 18:
      Z !== null && (Te ? (e = Z, n = n.stateNode, e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n), jn(e)) : Vl(Z, n.stateNode));
      break;
    case 4:
      r = Z, l = Te, Z = n.stateNode.containerInfo, Te = !0, Xe(e, t, n), Z = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && ((2 & a) !== 0 || (4 & a) !== 0) && Fa(n, t, o), l = l.next;
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (!le && (Bt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          q(n, t, i);
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
function Vi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new id()), t.forEach(function(r) {
      var l = vd.bind(null, e, r);
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
          throw Error(v(160));
        Bs(a, o, l), Z = null, Te = !1;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null;
      } catch (f) {
        q(l, t, f);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; )
      Hs(t, e), t = t.sibling;
}
function Hs(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(t, e), Oe(e), 4 & r) {
        try {
          Tn(3, e, e.return), dl(3, e);
        } catch (w) {
          q(e, e.return, w);
        }
        try {
          Tn(5, e, e.return);
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 1:
      Ne(t, e), Oe(e), 512 & r && n !== null && Bt(n, n.return);
      break;
    case 5:
      if (Ne(t, e), Oe(e), 512 & r && n !== null && Bt(n, n.return), 32 & e.flags) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (w) {
          q(e, e.return, w);
        }
      }
      if (4 & r && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null)
          try {
            i === "input" && a.type === "radio" && a.name != null && du(l, a), ia(i, o);
            var f = ia(i, a);
            for (o = 0; o < u.length; o += 2) {
              var h = u[o], m = u[o + 1];
              h === "style" ? vu(l, m) : h === "dangerouslySetInnerHTML" ? hu(l, m) : h === "children" ? On(l, m) : Ka(l, h, m, f);
            }
            switch (i) {
              case "input":
                na(l, a);
                break;
              case "textarea":
                pu(l, a);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var b = a.value;
                b != null ? Qt(l, !!a.multiple, b, !1) : p !== !!a.multiple && (a.defaultValue != null ? Qt(l, !!a.multiple, a.defaultValue, !0) : Qt(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[Bn] = a;
          } catch (w) {
            q(e, e.return, w);
          }
      }
      break;
    case 6:
      if (Ne(t, e), Oe(e), 4 & r) {
        if (e.stateNode === null)
          throw Error(v(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ne(t, e), Oe(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
        try {
          jn(t.containerInfo);
        } catch (w) {
          q(e, e.return, w);
        }
      break;
    case 4:
      Ne(t, e), Oe(e);
      break;
    case 13:
      Ne(t, e), Oe(e), l = e.child, 8192 & l.flags && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (No = B())), 4 & r && Vi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, 1 & e.mode ? (le = (f = le) || h, Ne(t, e), le = f) : Ne(t, e), Oe(e), 8192 & r) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && (1 & e.mode) !== 0)
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
                  Bt(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (w) {
                      q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ai(m);
                    continue;
                  }
              }
              b !== null ? (b.return = p, k = b) : Ai(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, f ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = m.stateNode, u = m.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = gu("display", o));
                } catch (w) {
                  q(e, e.return, w);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = f ? "" : m.memoizedProps;
                } catch (w) {
                  q(e, e.return, w);
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
      Ne(t, e), Oe(e), 4 & r && Vi(e);
      break;
    case 21:
      break;
    default:
      Ne(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($s(n)) {
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
          var a = ji(e);
          Da(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = ji(e);
          Ia(e, i, o);
          break;
        default:
          throw Error(v(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function sd(e, t, n) {
  k = e, Ws(e);
}
function Ws(e, t, n) {
  for (var r = (1 & e.mode) !== 0; k !== null; ) {
    var l = k, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || br;
      if (!o) {
        var i = l.alternate, u = i !== null && i.memoizedState !== null || le;
        i = br;
        var f = le;
        if (br = o, (le = u) && !f)
          for (k = l; k !== null; )
            o = k, u = o.child, o.tag === 22 && o.memoizedState !== null ? $i(l) : u !== null ? (u.return = o, k = u) : $i(l);
        for (; a !== null; )
          k = a, Ws(a), a = a.sibling;
        k = l, br = i, le = f;
      }
      qi(e);
    } else
      (8772 & l.subtreeFlags) !== 0 && a !== null ? (a.return = l, k = a) : qi(e);
  }
}
function qi(e) {
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
              le || dl(5, t);
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
              a !== null && Ei(t, a, r);
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
                Ei(t, o, n);
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
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
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
        le || 512 & t.flags && Oa(t);
      } catch (p) {
        q(t, t.return, p);
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
function Ai(e) {
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
function $i(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, l, u);
            }
          }
          var a = t.return;
          try {
            Oa(t);
          } catch (u) {
            q(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oa(t);
          } catch (u) {
            q(t, o, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
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
var cd = Math.ceil, Jr = Ye.ReactCurrentDispatcher, Co = Ye.ReactCurrentOwner, Ee = Ye.ReactCurrentBatchConfig, L = 0, G = null, H = null, ee = 0, he = 0, Ht = mt(0), Q = 0, Xn = null, Pt = 0, pl = 0, zo = 0, Ln = null, ce = null, No = 0, an = 1 / 0, Ve = null, el = !1, Ua = null, ut = null, yr = !1, nt = null, tl = 0, Rn = 0, ja = null, Tr = -1, Lr = 0;
function ie() {
  return (6 & L) !== 0 ? B() : Tr !== -1 ? Tr : Tr = B();
}
function st(e) {
  return (1 & e.mode) === 0 ? 1 : (2 & L) !== 0 && ee !== 0 ? ee & -ee : Qf.transition !== null ? (Lr === 0 && (Lr = Pu()), Lr) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Iu(e.type)), e);
}
function Me(e, t, n, r) {
  if (50 < Rn)
    throw Rn = 0, ja = null, Error(v(185));
  Zn(e, n, r), ((2 & L) === 0 || e !== G) && (e === G && ((2 & L) === 0 && (pl |= n), Q === 4 && et(e, ee)), me(e, r), n === 1 && L === 0 && (1 & t.mode) === 0 && (an = B() + 500, sl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  Wc(e, t);
  var r = Ur(e, e === G ? ee : 0);
  if (r === 0)
    n !== null && Zo(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zo(n), t === 1)
      e.tag === 0 ? Wf(Bi.bind(null, e)) : ts(Bi.bind(null, e)), Af(function() {
        (6 & L) === 0 && ht();
      }), n = null;
    else {
      switch (Tu(r)) {
        case 1:
          n = Ja;
          break;
        case 4:
          n = zu;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Nu;
          break;
        default:
          n = Dr;
      }
      n = ec(n, Qs.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Qs(e, t) {
  if (Tr = -1, Lr = 0, (6 & L) !== 0)
    throw Error(v(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n)
    return null;
  var r = Ur(e, e === G ? ee : 0);
  if (r === 0)
    return null;
  if ((30 & r) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = nl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var a = Ys();
    (G !== e || ee !== t) && (Ve = null, an = B() + 500, Et(e, t));
    do
      try {
        pd();
        break;
      } catch (i) {
        Ks(e, i);
      }
    while (1);
    po(), Jr.current = a, L = l, H !== null ? t = 0 : (G = null, ee = 0, t = Q);
  }
  if (t !== 0) {
    if (t === 2 && (l = da(e), l !== 0 && (r = l, t = Va(e, l))), t === 1)
      throw n = Xn, Et(e, 0), et(e, r), me(e, B()), n;
    if (t === 6)
      et(e, r);
    else {
      if (l = e.current.alternate, (30 & r) === 0 && !fd(l) && (t = nl(e, r), t === 2 && (a = da(e), a !== 0 && (r = a, t = Va(e, a))), t === 1))
        throw n = Xn, Et(e, 0), et(e, r), me(e, B()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          wt(e, ce, Ve);
          break;
        case 3:
          if (et(e, r), (130023424 & r) === r && (t = No + 500 - B(), 10 < t)) {
            if (Ur(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = wa(wt.bind(null, e, ce, Ve), t);
            break;
          }
          wt(e, ce, Ve);
          break;
        case 4:
          if (et(e, r), (4194240 & r) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = B() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = wa(wt.bind(null, e, ce, Ve), r);
            break;
          }
          wt(e, ce, Ve);
          break;
        case 5:
          wt(e, ce, Ve);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return me(e, B()), e.callbackNode === n ? Qs.bind(null, e) : null;
}
function Va(e, t) {
  var n = Ln;
  return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), e = nl(e, t), e !== 2 && (t = ce, ce = n, t !== null && qa(t)), e;
}
function qa(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function fd(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], a = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(a(), l))
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
  for (t &= ~zo, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Re(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Bi(e) {
  if ((6 & L) !== 0)
    throw Error(v(327));
  Zt();
  var t = Ur(e, 0);
  if ((1 & t) === 0)
    return me(e, B()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = da(e);
    r !== 0 && (t = r, n = Va(e, r));
  }
  if (n === 1)
    throw n = Xn, Et(e, 0), et(e, t), me(e, B()), n;
  if (n === 6)
    throw Error(v(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ce, Ve), me(e, B()), null;
}
function Po(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (an = B() + 500, sl && ht());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && (6 & L) === 0 && Zt();
  var t = L;
  L |= 1;
  var n = Ee.transition, r = R;
  try {
    if (Ee.transition = null, R = 1, e)
      return e();
  } finally {
    R = r, Ee.transition = n, L = t, (6 & L) === 0 && ht();
  }
}
function To() {
  he = Ht.current, I(Ht);
}
function Et(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, qf(n)), H !== null)
    for (n = H.return; n !== null; ) {
      var r = n;
      switch (so(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $r();
          break;
        case 3:
          rn(), I(de), I(ae), yo();
          break;
        case 5:
          bo(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          mo(r.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (G = e, H = e = ct(e.current, null), ee = he = t, Q = 0, Xn = null, zo = pl = Pt = 0, ce = Ln = null, St !== null) {
    for (t = 0; t < St.length; t++)
      if (n = St[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, a = n.pending;
        if (a !== null) {
          var o = a.next;
          a.next = l, r.next = o;
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Ks(e, t) {
  do {
    var n = H;
    try {
      if (po(), zr.current = Zr, Gr) {
        for (var r = j.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Nt = 0, X = W = j = null, Pn = !1, Qn = 0, Co.current = null, n === null || n.return === null) {
        Q = 1, Xn = t, H = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, u = t;
        if (t = ee, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, h = i, m = h.tag;
          if ((1 & h.mode) === 0 && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var b = Li(o);
          if (b !== null) {
            b.flags &= -257, Ri(b, o, i, a, t), 1 & b.mode && Ti(a, f, t), t = b, u = f;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(u), t.updateQueue = w;
            } else
              y.add(u);
            break e;
          } else {
            if ((1 & t) === 0) {
              Ti(a, f, t), Lo();
              break e;
            }
            u = Error(v(426));
          }
        } else if (D && 1 & i.mode) {
          var M = Li(o);
          if (M !== null) {
            (65536 & M.flags) === 0 && (M.flags |= 256), Ri(M, o, i, a, t), co(ln(u, i));
            break e;
          }
        }
        a = u = ln(u, i), Q !== 4 && (Q = 2), Ln === null ? Ln = [a] : Ln.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var c = Ls(a, u, t);
              xi(a, c);
              break e;
            case 1:
              i = u;
              var s = a.type, d = a.stateNode;
              if ((128 & a.flags) === 0 && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ut === null || !ut.has(d)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Rs(a, i, t);
                xi(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Gs(n);
    } catch (S) {
      t = S, H === n && n !== null && (H = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ys() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function Lo() {
  (Q === 0 || Q === 3 || Q === 2) && (Q = 4), G === null || (268435455 & Pt) === 0 && (268435455 & pl) === 0 || et(G, ee);
}
function nl(e, t) {
  var n = L;
  L |= 2;
  var r = Ys();
  (G !== e || ee !== t) && (Ve = null, Et(e, t));
  do
    try {
      dd();
      break;
    } catch (l) {
      Ks(e, l);
    }
  while (1);
  if (po(), L = n, Jr.current = r, H !== null)
    throw Error(v(261));
  return G = null, ee = 0, Q;
}
function dd() {
  for (; H !== null; )
    Xs(H);
}
function pd() {
  for (; H !== null && !Dc(); )
    Xs(H);
}
function Xs(e) {
  var t = Js(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? Gs(e) : H = t, Co.current = null;
}
function Gs(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (32768 & t.flags) === 0) {
      if (n = ad(n, t, he), n !== null) {
        H = n;
        return;
      }
    } else {
      if (n = od(n, t), n !== null) {
        n.flags &= 32767, H = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Q = 6, H = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      H = t;
      return;
    }
    H = t = e;
  } while (t !== null);
  Q === 0 && (Q = 5);
}
function wt(e, t, n) {
  var r = R, l = Ee.transition;
  try {
    Ee.transition = null, R = 1, md(e, t, n, r);
  } finally {
    Ee.transition = l, R = r;
  }
  return null;
}
function md(e, t, n, r) {
  do
    Zt();
  while (nt !== null);
  if ((6 & L) !== 0)
    throw Error(v(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(v(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Qc(e, a), e === G && (H = G = null, ee = 0), (2064 & n.subtreeFlags) === 0 && (2064 & n.flags) === 0 || yr || (yr = !0, ec(Dr, function() {
    return Zt(), null;
  })), a = (15990 & n.flags) !== 0, (15990 & n.subtreeFlags) !== 0 || a) {
    a = Ee.transition, Ee.transition = null;
    var o = R;
    R = 1;
    var i = L;
    L |= 4, Co.current = null, ud(e, n), Hs(n, e), Ff(ba), jr = !!va, ba = va = null, e.current = n, sd(n), Uc(), L = i, R = o, Ee.transition = a;
  } else
    e.current = n;
  if (yr && (yr = !1, nt = e, tl = l), a = e.pendingLanes, a === 0 && (ut = null), qc(n.stateNode), me(e, B()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el)
    throw el = !1, e = Ua, Ua = null, e;
  return (1 & tl) !== 0 && e.tag !== 0 && Zt(), a = e.pendingLanes, (1 & a) !== 0 ? e === ja ? Rn++ : (Rn = 0, ja = e) : Rn = 0, ht(), null;
}
function Zt() {
  if (nt !== null) {
    var e = Tu(tl), t = Ee.transition, n = R;
    try {
      if (Ee.transition = null, R = 16 > e ? 16 : e, nt === null)
        var r = !1;
      else {
        if (e = nt, nt = null, tl = 0, (6 & L) !== 0)
          throw Error(v(331));
        var l = L;
        for (L |= 4, k = e.current; k !== null; ) {
          var a = k, o = a.child;
          if ((16 & k.flags) !== 0) {
            var i = a.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var f = i[u];
                for (k = f; k !== null; ) {
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
                      if (As(h), h === f) {
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
                    var M = w.sibling;
                    w.sibling = null, w = M;
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
                var c = a.sibling;
                if (c !== null) {
                  c.return = a.return, k = c;
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
                        dl(9, i);
                    }
                  } catch (S) {
                    q(i, i.return, S);
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
        if (L = l, ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(ll, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      R = n, Ee.transition = t;
    }
  }
  return !1;
}
function Hi(e, t, n) {
  t = ln(n, t), t = Ls(e, t, 1), e = it(e, t, 1), t = ie(), e !== null && (Zn(e, 1, t), me(e, t));
}
function q(e, t, n) {
  if (e.tag === 3)
    Hi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r))) {
          e = ln(n, e), e = Rs(t, e, 1), t = it(t, e, 1), e = ie(), t !== null && (Zn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, G === e && (ee & n) === n && (Q === 4 || Q === 3 && (130023424 & ee) === ee && 500 > B() - No ? Et(e, 0) : zo |= n), me(e, t);
}
function Zs(e, t) {
  t === 0 && ((1 & e.mode) === 0 ? t = 1 : (t = sr, sr <<= 1, (130023424 & sr) === 0 && (sr = 4194304)));
  var n = ie();
  e = Qe(e, t), e !== null && (Zn(e, t, n), me(e, n));
}
function gd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Zs(e, n);
}
function vd(e, t) {
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
  r !== null && r.delete(t), Zs(e, n);
}
var Js;
Js = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current)
      fe = !0;
    else {
      if ((e.lanes & n) === 0 && (128 & t.flags) === 0)
        return fe = !1, ld(e, t, n);
      fe = (131072 & e.flags) !== 0;
    }
  else
    fe = !1, D && (1048576 & t.flags) !== 0 && ns(t, Wr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Pr(e, t), e = t.pendingProps;
      var l = en(t, ae.current);
      Gt(t, n), l = ko(null, t, r, e, l, n);
      var a = So();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (a = !0, Br(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, go(t), l.updater = cl, t.stateNode = l, l._reactInternals = t, za(t, r, e, n), t = Ta(null, t, r, !0, a, n)) : (t.tag = 0, D && a && uo(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Pr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = yd(r), e = Pe(r, e), l) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = Oi(null, t, r, e, n);
            break e;
          case 11:
            t = Mi(null, t, r, e, n);
            break e;
          case 14:
            t = Fi(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Pa(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Oi(e, t, r, l, n);
    case 3:
      e: {
        if (Is(t), e === null)
          throw Error(v(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, os(e, t), Yr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated)
          if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
            l = ln(Error(v(423)), t), t = Ii(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = ln(Error(v(424)), t), t = Ii(e, t, r, n, l);
            break e;
          } else
            for (ge = ot(t.stateNode.containerInfo.firstChild), ve = t, D = !0, Le = null, n = cs(t, null, r, n), t.child = n; n; )
              n.flags = -3 & n.flags | 4096, n = n.sibling;
        else {
          if (tn(), r === l) {
            t = Ke(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fs(t), e === null && Ea(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, ya(r, l) ? o = null : a !== null && ya(r, a) && (t.flags |= 32), Os(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Ea(t), null;
    case 13:
      return Ds(e, t, n);
    case 4:
      return vo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nn(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Mi(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, F(Qr, r._currentValue), r._currentValue = o, a !== null)
          if (Fe(a.value, o)) {
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
                      u = Be(-1, n & -n), u.tag = 2;
                      var f = a.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null ? u.next = u : (u.next = h.next, h.next = u), f.pending = u;
                      }
                    }
                    a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), _a(a.return, n, t), i.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10)
                o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (o = a.return, o === null)
                  throw Error(v(341));
                o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), _a(o, n, t), o = a.sibling;
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
      return l = t.type, r = t.pendingProps.children, Gt(t, n), l = _e(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Pe(r, t.pendingProps), l = Pe(r.type, l), Fi(e, t, r, l, n);
    case 15:
      return Ms(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Pr(e, t), t.tag = 1, pe(r) ? (e = !0, Br(t)) : e = !1, Gt(t, n), us(t, r, l), za(t, r, l, n), Ta(null, t, r, !0, e, n);
    case 19:
      return Us(e, t, n);
    case 22:
      return Fs(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function ec(e, t) {
  return Cu(e, t);
}
function bd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new bd(e, t, n, r);
}
function Ro(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function yd(e) {
  if (typeof e == "function")
    return Ro(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xa)
      return 11;
    if (e === Ga)
      return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rr(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function")
    Ro(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case Ot:
          return _t(n.children, l, a, t);
        case Ya:
          o = 8, l |= 8;
          break;
        case Gl:
          return e = xe(12, n, t, 2 | l), e.elementType = Gl, e.lanes = a, e;
        case Zl:
          return e = xe(13, n, t, l), e.elementType = Zl, e.lanes = a, e;
        case Jl:
          return e = xe(19, n, t, l), e.elementType = Jl, e.lanes = a, e;
        case su:
          return ml(n, l, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case iu:
                o = 10;
                break e;
              case uu:
                o = 9;
                break e;
              case Xa:
                o = 11;
                break e;
              case Ga:
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
function _t(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function ml(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = su, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function Yl(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function wd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Mo(e, t, n, r, l, a, o, i, u) {
  return e = new wd(e, t, n, i, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = xe(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, go(a), e;
}
function kd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tc(e) {
  if (!e)
    return dt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1)
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
      return es(e, n, t);
  }
  return t;
}
function nc(e, t, n, r, l, a, o, i, u) {
  return e = Mo(n, r, !0, e, l, a, o, i, u), e.context = tc(null), n = e.current, r = ie(), l = st(n), a = Be(r, l), a.callback = t != null ? t : null, it(n, a, l), e.current.lanes = l, Zn(e, l, r), me(e, r), e;
}
function hl(e, t, n, r) {
  var l = t.current, a = ie(), o = st(l);
  return n = tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Be(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = it(l, t, o), e !== null && (Me(e, l, o, a), Cr(e, l, o)), o;
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
function Wi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fo(e, t) {
  Wi(e, t), (e = e.alternate) && Wi(e, t);
}
function Sd() {
  return null;
}
var rc = typeof reportError == "function" ? reportError : function(e) {
};
function Oo(e) {
  this._internalRoot = e;
}
gl.prototype.render = Oo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(v(409));
  hl(e, t, null, null);
};
gl.prototype.unmount = Oo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function() {
      hl(null, e, null, null);
    }), t[We] = null;
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Mu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Je.length && t !== 0 && t < Je[n].priority; n++)
      ;
    Je.splice(n, 0, e), n === 0 && Ou(e);
  }
};
function Io(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qi() {
}
function xd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var f = rl(o);
        a.call(f);
      };
    }
    var o = nc(t, r, e, 0, null, !1, !1, "", Qi);
    return e._reactRootContainer = o, e[We] = o.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var f = rl(u);
      i.call(f);
    };
  }
  var u = Mo(e, 0, !1, null, null, !1, !1, "", Qi);
  return e._reactRootContainer = u, e[We] = u.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
    hl(t, u, n, r);
  }), u;
}
function bl(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var u = rl(o);
        i.call(u);
      };
    }
    hl(t, o, e, l);
  } else
    o = xd(n, t, e, l, r);
  return rl(o);
}
Lu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 && (eo(t, 1 | n), me(t, B()), (6 & L) === 0 && (an = B() + 500, ht()));
      }
      break;
    case 13:
      Tt(function() {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = ie();
          Me(r, e, 1, l);
        }
      }), Fo(e, 1);
  }
};
to = function(e) {
  if (e.tag === 13) {
    var t = Qe(e, 134217728);
    if (t !== null) {
      var n = ie();
      Me(t, e, 134217728, n);
    }
    Fo(e, 134217728);
  }
};
Ru = function(e) {
  if (e.tag === 13) {
    var t = st(e), n = Qe(e, t);
    if (n !== null) {
      var r = ie();
      Me(n, e, t, r);
    }
    Fo(e, t);
  }
};
Mu = function() {
  return R;
};
Fu = function(e, t) {
  var n = R;
  try {
    return R = e, t();
  } finally {
    R = n;
  }
};
sa = function(e, t, n) {
  switch (t) {
    case "input":
      if (na(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l)
              throw Error(v(90));
            fu(r), na(r, l);
          }
        }
      }
      break;
    case "textarea":
      pu(e, n);
      break;
    case "select":
      t = n.value, t != null && Qt(e, !!n.multiple, t, !1);
  }
};
wu = Po;
ku = Tt;
var Ed = { usingClientEntryPoint: !1, Events: [er, jt, ul, bu, yu, Po] }, yn = { findFiberByHostInstance: kt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, _d = { bundleType: yn.bundleType, version: yn.version, rendererPackageName: yn.rendererPackageName, rendererConfig: yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Eu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yn.findFiberByHostInstance || Sd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      ll = wr.inject(_d), Ue = wr;
    } catch {
    }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ed;
ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Io(t))
    throw Error(v(200));
  return kd(e, t, null, n);
};
ye.createRoot = function(e, t) {
  if (!Io(e))
    throw Error(v(299));
  var n = !1, r = "", l = rc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Mo(e, 1, !1, null, null, n, !1, r, l), e[We] = t.current, An(e.nodeType === 8 ? e.parentNode : e), new Oo(t);
};
ye.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
  return e = Eu(t), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return Tt(e);
};
ye.hydrate = function(e, t, n) {
  if (!vl(t))
    throw Error(v(200));
  return bl(null, e, t, !0, n);
};
ye.hydrateRoot = function(e, t, n) {
  if (!Io(e))
    throw Error(v(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = rc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = nc(t, null, e, 1, n != null ? n : null, l, !1, a, o), e[We] = t.current, An(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new gl(t);
};
ye.render = function(e, t, n) {
  if (!vl(t))
    throw Error(v(200));
  return bl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function(e) {
  if (!vl(e))
    throw Error(v(40));
  return e._reactRootContainer ? (Tt(function() {
    bl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[We] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = Po;
ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vl(n))
    throw Error(v(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(v(38));
  return bl(e, t, n, !1, r);
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
})(Yi);
var lc, ac = Yi.exports;
lc = ac.createRoot;
ac.hydrateRoot;
var yl = { exports: {} }, wl = {}, Cd = J.exports, zd = Symbol.for("react.element"), Nd = Symbol.for("react.fragment"), Pd = Object.prototype.hasOwnProperty, Td = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    Pd.call(t, r) && !Ld.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: zd, type: e, key: a, ref: o, props: l, _owner: Td.current };
}
wl.Fragment = Nd;
wl.jsx = oc;
wl.jsxs = oc;
(function(e) {
  e.exports = wl;
})(yl);
const Ki = yl.exports.Fragment, Y = yl.exports.jsx, Mn = yl.exports.jsxs, Rd = ({ destroyModal: e }) => Y("button", { onClick: e, className: "w3bb-quiz-modal-close-button", id: "w3bb-quiz-modal-close-button", children: Y("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 1792 1792", children: Y("path", { fill: "#e34444", d: "M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z" }) }) }), Md = J.exports.memo(Rd);
function Fd(e) {
  const [t, n] = J.exports.useState(!1), r = new IntersectionObserver(([l]) => n(l.isIntersecting));
  return J.exports.useEffect(() => (r.observe(e.current), () => {
    r.disconnect();
  }), []), t;
}
const Od = 100, Id = "\u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043F\u0440\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.", Dd = "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0446\u0435\u043B\u0435\u0439 \u0442\u0435\u0441\u0442\u0430, \u0447\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435.", Ud = "\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441", jd = [{ id: 1, question: "\u0414\u0438\u0437\u0430\u0439\u043D \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0432\u0430\u043C \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C?", answers: [{ id: 1, text: "\u0414\u0430, \u0435\u0449\u0435 \u0431\u044B!", score: 10 }, { id: 2, text: "\u041D\u0435\u0442, \u043C\u043D\u0435 \u0442\u0430\u043A \u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F.", score: 6 }, { id: 3, text: "\u0411\u0435\u0437 \u043F\u043E\u043D\u044F\u0442\u043D\u0438\u044F...", score: 4 }] }, { id: 2, question: "\u0423\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043B\u0438 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441?", answers: [{ id: 1, text: "\u0411\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E!", score: 10 }, { id: 2, text: "\u0421\u0440\u0435\u0434\u043D\u0435. \u0417\u0430\u044F\u0432\u043E\u043A \u043C\u0430\u043B\u043E.", score: 5 }, { id: 3, text: "\u041C\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442.", score: 9 }] }, { id: 3, question: "\u0423\u0432\u0435\u0440\u0435\u043D\u044B \u043B\u0438 \u0412\u044B, \u0447\u0442\u043E \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?", answers: [{ id: 1, text: "\u0414\u0430, \u044F \u0437\u043D\u0430\u044E \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u043B\u0438\u0446\u043E!", score: 3 }, { id: 2, text: "\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D. \u041F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432\u0441\u0435 \u043F\u043E\u0434\u0440\u044F\u0434.", score: 6 }, { id: 3, text: "\u0414\u043B\u044F \u043C\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u044D\u0442\u043E \u043D\u0435 \u0432\u0430\u0436\u043D\u043E.", score: 1 }] }, { id: 4, question: "\u0425\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u0412\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0437\u0430\u0442\u0440\u0430\u0442\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443?", answers: [{ id: 1, text: "\u0415\u0441\u0442\u0435\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E! \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0436\u0435!", score: 10 }, { id: 2, text: "\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438?", score: 3 }, { id: 3, text: "\u041A\u0430\u043A\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?", score: 3 }] }], bt = { maxScore: Od, welcomeTitle: Id, welcomeDescription: Dd, welcomeButton: Ud, scenes: jd }, Vd = () => {
  const e = J.exports.useRef(null), [t, n] = J.exports.useState(0), [r, l] = J.exports.useState([]), [a, o] = J.exports.useState(!1), [i, u] = J.exports.useState(!0), [f, h] = J.exports.useState(0), [m, p] = J.exports.useState(0);
  let b;
  const y = Fd(e);
  J.exports.useEffect(() => {
    if (a) {
      clearInterval(b);
      const c = { qa: r, score: f, elapsed_time: m };
    }
  }, [a]), J.exports.useEffect(() => (!i && !a && y && (b = setInterval(() => {
    p((c) => c + 1);
  }, 1e3)), () => {
    clearInterval(b);
  }), [i, a, y]), J.exports.useEffect(() => () => {
    clearInterval(b), l([]), n(0), h(0), o(!1);
  }, []);
  const w = () => {
    u(!1);
  }, M = ({ answer: c, score: s }) => {
    if (l(() => [...r, { q: bt.scenes[t].question, a: c }]), h((d) => d + s), t === bt.scenes.length - 1) {
      o(!0);
      return;
    }
    n((d) => d + 1);
  };
  return Y("div", { ref: e, children: a ? Mn("div", { className: "w3bb-quiz-success_screen", children: [Y("h1", { children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}" }), Y("p", { children: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!" })] }) : Y(Ki, { children: i ? Mn("div", { className: "w3bb-quiz-welcome_screen", children: [Y("h1", { children: bt.welcomeTitle }), Y("p", { children: bt.welcomeDescription }), Y("button", { className: "w3bb-quiz-welcome_button", onClick: w, children: bt.welcomeButton }, 1)] }) : Mn(Ki, { children: [Y("h1", { children: bt.scenes[t].question }), Y("div", { className: "w3bb-quiz-answers", children: bt.scenes[t].answers.map((c) => Y("button", { className: "w3bb-quiz-answer-button", onClick: () => M({ answer: c.text, score: c.score }), children: c.text }, c.id)) })] }) }) });
}, qd = J.exports.memo(Vd), Ad = ({ id: e, destroyModal: t }) => Mn("div", { className: "w3bb-quiz-modal-body", children: [Y("div", { className: "w3bb-quiz-modal-image" }), Y(Md, { destroyModal: t }), Y("div", { className: "w3bb-quiz-modal-main", children: Y(qd, {}) }), Mn("span", { className: "w3bb-quiz-modal-copyright", children: ["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432", Y("a", { href: "https://w3bb.ru", target: "_blank", rel: "noreferrer noopener", children: "W3BB" })] })] }), Wt = document.createElement("div");
Wt.classList.add("w3bb-quiz-modal-overlay");
const $d = document.createElement("div");
$d.classList.add("w3bb-quiz-modal-body");
const Bd = lc(Wt);
async function Hd({ visibleToggler: e }) {
  let t = !1;
  const n = e.dataset.w3bbId;
  if (!n)
    throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id.");
  const r = () => {
    document.body.removeChild(Wt), t = !1;
  }, l = () => {
    document.body.appendChild(Wt), Bd.render(Ad({ id: n, destroyModal: r }));
  }, a = () => {
    switch (t = !t, t) {
      case !0:
        l();
        return;
      case !1:
        t = !1, r();
        return;
      default:
        return;
    }
  };
  Wt.addEventListener("click", (o) => {
    o.target === Wt && (t = !1, r());
  }), e.addEventListener("click", () => a());
}
const Wd = `
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
`, Qd = `
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

`;
function Kd() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
}
const Yd = `
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`, Mr = document.querySelector("#w3bb-widget-toggler");
if (typeof window < "u") {
  const e = Kd();
  localStorage.getItem("user_uuid") || localStorage.setItem("user_uuid", e);
}
const Do = document.createElement("div");
Do.id = "w3bb-quiz-root";
document.body.appendChild(Do);
const Uo = document.createElement("style");
document.head.appendChild(Uo);
Uo.appendChild(document.createTextNode(Qd));
Mr || (Uo.appendChild(document.createTextNode(Wd)), Do.innerHTML = Yd);
const Xd = document.querySelector("#w3bb-widget-default-toggler");
Hd({ visibleToggler: Mr != null ? Mr : Xd });
