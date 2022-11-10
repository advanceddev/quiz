(function(F,j){typeof exports=="object"&&typeof module<"u"?j(require("react-dom"),require("react")):typeof define=="function"&&define.amd?define(["react-dom","react"],j):(F=typeof globalThis<"u"?globalThis:F||self,j(F.require$$0,F.React))})(this,function(F,j){"use strict";const le=o=>o&&typeof o=="object"&&"default"in o?o:{default:o};function Ie(o){if(o&&o.__esModule)return o;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const h in o)if(h!=="default"){const p=Object.getOwnPropertyDescriptor(o,h);Object.defineProperty(l,h,p.get?p:{enumerable:!0,get:()=>o[h]})}}return l.default=o,Object.freeze(l)}const Le=le(F),ce=le(j),T=Ie(j);var Q,M=Le.default;if(process.env.NODE_ENV==="production")Q=M.createRoot,M.hydrateRoot;else{var fe=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Q=function(o,l){fe.usingClientEntryPoint=!0;try{return M.createRoot(o,l)}finally{fe.usingClientEntryPoint=!1}}}var Y={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function We(){if(de)return N;de=1;var o=ce.default,l=Symbol.for("react.element"),h=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,y=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function _(R,b,D){var d,w={},k=null,V=null;D!==void 0&&(k=""+D),b.key!==void 0&&(k=""+b.key),b.ref!==void 0&&(V=b.ref);for(d in b)p.call(b,d)&&!x.hasOwnProperty(d)&&(w[d]=b[d]);if(R&&R.defaultProps)for(d in b=R.defaultProps,b)w[d]===void 0&&(w[d]=b[d]);return{$$typeof:l,type:R,key:k,ref:V,props:w,_owner:y.current}}return N.Fragment=h,N.jsx=_,N.jsxs=_,N}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function $e(){return be||(be=1,process.env.NODE_ENV!=="production"&&function(){var o=ce.default,l=Symbol.for("react.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),R=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),pe=Symbol.iterator,uu="@@iterator";function tu(e){if(e===null||typeof e!="object")return null;var u=pe&&e[pe]||e[uu];return typeof u=="function"?u:null}var q=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var u=arguments.length,t=new Array(u>1?u-1:0),r=1;r<u;r++)t[r-1]=arguments[r];ru("error",e,t)}}function ru(e,u,t){{var r=q.ReactDebugCurrentFrame,i=r.getStackAddendum();i!==""&&(u+="%s",t=t.concat([i]));var s=t.map(function(a){return String(a)});s.unshift("Warning: "+u),Function.prototype.apply.call(console[e],console,s)}}var nu=!1,ou=!1,au=!1,iu=!1,su=!1,me;me=Symbol.for("react.module.reference");function lu(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===x||su||e===y||e===D||e===d||iu||e===V||nu||ou||au||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===w||e.$$typeof===_||e.$$typeof===R||e.$$typeof===b||e.$$typeof===me||e.getModuleId!==void 0))}function cu(e,u,t){var r=e.displayName;if(r)return r;var i=u.displayName||u.name||"";return i!==""?t+"("+i+")":t}function ve(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case h:return"Portal";case x:return"Profiler";case y:return"StrictMode";case D:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var u=e;return ve(u)+".Consumer";case _:var t=e;return ve(t._context)+".Provider";case b:return cu(e,e.render,"ForwardRef");case w:var r=e.displayName||null;return r!==null?r:C(e.type)||"Memo";case k:{var i=e,s=i._payload,a=i._init;try{return C(a(s))}catch{return null}}}return null}var O=Object.assign,W=0,ge,he,Ee,we,ye,xe,_e;function Re(){}Re.__reactDisabledLog=!0;function fu(){{if(W===0){ge=console.log,he=console.info,Ee=console.warn,we=console.error,ye=console.group,xe=console.groupCollapsed,_e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Re,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function du(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:ge}),info:O({},e,{value:he}),warn:O({},e,{value:Ee}),error:O({},e,{value:we}),group:O({},e,{value:ye}),groupCollapsed:O({},e,{value:xe}),groupEnd:O({},e,{value:_e})})}W<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ue=q.ReactCurrentDispatcher,te;function J(e,u,t){{if(te===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);te=r&&r[1]||""}return`
`+te+e}}var re=!1,H;{var bu=typeof WeakMap=="function"?WeakMap:Map;H=new bu}function Ce(e,u){if(!e||re)return"";{var t=H.get(e);if(t!==void 0)return t}var r;re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=ue.current,ue.current=null,fu();try{if(u){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(S){r=S}Reflect.construct(e,[],a)}else{try{a.call()}catch(S){r=S}e.call(a.prototype)}}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var n=S.stack.split(`
`),g=r.stack.split(`
`),c=n.length-1,f=g.length-1;c>=1&&f>=0&&n[c]!==g[f];)f--;for(;c>=1&&f>=0;c--,f--)if(n[c]!==g[f]){if(c!==1||f!==1)do if(c--,f--,f<0||n[c]!==g[f]){var E=`
`+n[c].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,E),E}while(c>=1&&f>=0);break}}}finally{re=!1,ue.current=s,du(),Error.prepareStackTrace=i}var B=e?e.displayName||e.name:"",Ne=B?J(B):"";return typeof e=="function"&&H.set(e,Ne),Ne}function pu(e,u,t){return Ce(e,!1)}function mu(e){var u=e.prototype;return!!(u&&u.isReactComponent)}function G(e,u,t){if(e==null)return"";if(typeof e=="function")return Ce(e,mu(e));if(typeof e=="string")return J(e);switch(e){case D:return J("Suspense");case d:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return pu(e.render);case w:return G(e.type,u,t);case k:{var r=e,i=r._payload,s=r._init;try{return G(s(i),u,t)}catch{}}}return""}var K=Object.prototype.hasOwnProperty,Se={},Te=q.ReactDebugCurrentFrame;function X(e){if(e){var u=e._owner,t=G(e.type,e._source,u?u.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}function vu(e,u,t,r,i){{var s=Function.call.bind(K);for(var a in e)if(s(e,a)){var n=void 0;try{if(typeof e[a]!="function"){var g=Error((r||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw g.name="Invariant Violation",g}n=e[a](u,a,r,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){n=c}n&&!(n instanceof Error)&&(X(i),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",t,a,typeof n),X(null)),n instanceof Error&&!(n.message in Se)&&(Se[n.message]=!0,X(i),v("Failed %s type: %s",t,n.message),X(null))}}}var gu=Array.isArray;function ne(e){return gu(e)}function hu(e){{var u=typeof Symbol=="function"&&Symbol.toStringTag,t=u&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Eu(e){try{return De(e),!1}catch{return!0}}function De(e){return""+e}function ke(e){if(Eu(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",hu(e)),De(e)}var $=q.ReactCurrentOwner,wu={key:!0,ref:!0,__self:!0,__source:!0},Oe,Fe,oe;oe={};function yu(e){if(K.call(e,"ref")){var u=Object.getOwnPropertyDescriptor(e,"ref").get;if(u&&u.isReactWarning)return!1}return e.ref!==void 0}function xu(e){if(K.call(e,"key")){var u=Object.getOwnPropertyDescriptor(e,"key").get;if(u&&u.isReactWarning)return!1}return e.key!==void 0}function _u(e,u){if(typeof e.ref=="string"&&$.current&&u&&$.current.stateNode!==u){var t=C($.current.type);oe[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C($.current.type),e.ref),oe[t]=!0)}}function Ru(e,u){{var t=function(){Oe||(Oe=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",u))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Cu(e,u){{var t=function(){Fe||(Fe=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",u))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Su=function(e,u,t,r,i,s,a){var n={$$typeof:l,type:e,key:u,ref:t,props:a,_owner:s};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function Tu(e,u,t,r,i){{var s,a={},n=null,g=null;t!==void 0&&(ke(t),n=""+t),xu(u)&&(ke(u.key),n=""+u.key),yu(u)&&(g=u.ref,_u(u,i));for(s in u)K.call(u,s)&&!wu.hasOwnProperty(s)&&(a[s]=u[s]);if(e&&e.defaultProps){var c=e.defaultProps;for(s in c)a[s]===void 0&&(a[s]=c[s])}if(n||g){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&Ru(a,f),g&&Cu(a,f)}return Su(e,n,g,i,r,$.current,a)}}var ae=q.ReactCurrentOwner,je=q.ReactDebugCurrentFrame;function A(e){if(e){var u=e._owner,t=G(e.type,e._source,u?u.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}var ie;ie=!1;function se(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function ze(){{if(ae.current){var e=C(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Du(e){{if(e!==void 0){var u=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+u+":"+t+"."}return""}}var Pe={};function ku(e){{var u=ze();if(!u){var t=typeof e=="string"?e:e.displayName||e.name;t&&(u=`

Check the top-level render call using <`+t+">.")}return u}}function qe(e,u){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ku(u);if(Pe[t])return;Pe[t]=!0;var r="";e&&e._owner&&e._owner!==ae.current&&(r=" It was passed a child from "+C(e._owner.type)+"."),A(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,r),A(null)}}function Ae(e,u){{if(typeof e!="object")return;if(ne(e))for(var t=0;t<e.length;t++){var r=e[t];se(r)&&qe(r,u)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var i=tu(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),a;!(a=s.next()).done;)se(a.value)&&qe(a.value,u)}}}function Ou(e){{var u=e.type;if(u==null||typeof u=="string")return;var t;if(typeof u=="function")t=u.propTypes;else if(typeof u=="object"&&(u.$$typeof===b||u.$$typeof===w))t=u.propTypes;else return;if(t){var r=C(u);vu(t,e.props,"prop",r,e)}else if(u.PropTypes!==void 0&&!ie){ie=!0;var i=C(u);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof u.getDefaultProps=="function"&&!u.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Fu(e){{for(var u=Object.keys(e.props),t=0;t<u.length;t++){var r=u[t];if(r!=="children"&&r!=="key"){A(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),A(null);break}}e.ref!==null&&(A(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Be(e,u,t,r,i,s){{var a=lu(e);if(!a){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var g=Du(i);g?n+=g:n+=ze();var c;e===null?c="null":ne(e)?c="array":e!==void 0&&e.$$typeof===l?(c="<"+(C(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,n)}var f=Tu(e,u,t,i,s);if(f==null)return f;if(a){var E=u.children;if(E!==void 0)if(r)if(ne(E)){for(var B=0;B<E.length;B++)Ae(E[B],e);Object.freeze&&Object.freeze(E)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ae(E,e)}return e===p?Fu(f):Ou(f),f}}function ju(e,u,t){return Be(e,u,t,!0)}function zu(e,u,t){return Be(e,u,t,!1)}var Pu=zu,qu=ju;I.Fragment=p,I.jsx=Pu,I.jsxs=qu}()),I}(function(o){process.env.NODE_ENV==="production"?o.exports=We():o.exports=$e()})(Y);const Me=Y.exports.Fragment,m=Y.exports.jsx,L=Y.exports.jsxs,Ye=({destroyModal:o})=>m("button",{onClick:o,className:"w3bb-quiz-modal-close-button",id:"w3bb-quiz-modal-close-button",children:m("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 1792 1792",children:m("path",{fill:"#f00",d:"M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"})})}),Ue=T.memo(Ye),z={welcomeText:"\u041F\u0440\u0438\u0432\u0435\u0442! \u0421\u0435\u0439\u0447\u0430\u0441 \u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438.",welcomeButton:"\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C",scenes:[{id:1,question:"\u0412\u0430\u043C \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0434\u0438\u0437\u0430\u0439\u043D \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C?",answers:[{id:1,text:"\u0414\u0430, \u0432\u043F\u043E\u043B\u043D\u0435!"},{id:2,text:"\u041D\u0435\u0442, \u043C\u043D\u0435 \u0442\u0430\u043A \u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F."},{id:3,text:"\u0411\u0435\u0437 \u043F\u043E\u043D\u044F\u0442\u043D\u0438\u044F..."}]},{id:2,question:"\u0423\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043B\u0438 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441?",answers:[{id:1,text:"\u0411\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u043D\u043E \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0431\u044B \u0431\u043E\u043B\u044C\u0448\u0435!"},{id:2,text:"\u0421\u0440\u0435\u0434\u043D\u0435. \u0417\u0430\u044F\u0432\u043E\u043A \u043C\u0430\u043B\u043E."},{id:3,text:"\u041C\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442."}]},{id:3,question:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B \u043B\u0438 \u0412\u044B, \u0447\u0442\u043E \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?",answers:[{id:1,text:"\u0414\u0430, \u044F \u0437\u043D\u0430\u044E \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0447\u043D\u043E!"},{id:2,text:"\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D. \u041F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432\u0441\u0435 \u043F\u043E\u0434\u0440\u044F\u0434."},{id:3,text:"\u0414\u043B\u044F \u043C\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u044D\u0442\u043E \u043D\u0435 \u0432\u0430\u0436\u043D\u043E."}]},{id:4,question:"\u0425\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u0412\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?",answers:[{id:1,text:"\u0415\u0441\u0442\u0435\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E! \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0436\u0435!"},{id:2,text:"\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438?"},{id:3,text:"\u041A\u0430\u043A\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442?"}]}]},Ve=()=>{const[o,l]=T.useState(0),[h,p]=T.useState([]),[y,x]=T.useState(!1),[_,R]=T.useState(!0);T.useEffect(()=>{y&&console.log(h)},[y]),T.useEffect(()=>()=>{p([]),l(0),x(!1)},[]);const b=()=>{R(!1)},D=d=>{if(p(()=>[...h,{q:z.scenes[o].question,a:d}]),o===z.scenes.length-1){x(!0);return}l(w=>w+1)};return _?L("div",{className:"w3bb-quiz-welcome_screen",children:[m("h1",{children:z.welcomeText}),m("button",{className:"w3bb-quiz-welcome_button",onClick:b,children:z.welcomeButton},1)]}):y?L("div",{className:"w3bb-quiz-success_screen",children:[m("h1",{children:"\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u{1F60A}"}),m("p",{children:"\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0412\u0430\u043C \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043B\u0443\u0447\u0448\u0435!"})]}):L(Me,{children:[m("h1",{children:z.scenes[o].question}),m("div",{className:"w3bb-quiz-answers",children:z.scenes[o].answers.map(d=>m("button",{className:"w3bb-quiz-answer-button",onClick:()=>D(d.text),children:d.text},d.id))})]})},Je=T.memo(Ve),He=({id:o,destroyModal:l})=>(console.log("PROJECT_ID: ",o),L("div",{className:"w3bb-quiz-modal-body",children:[m("div",{className:"w3bb-quiz-modal-image"}),m(Ue,{destroyModal:l}),m("div",{className:"w3bb-quiz-modal-main",children:m(Je,{})}),L("span",{className:"w3bb-quiz-modal-copyright",children:["\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432",m("a",{href:"https://w3bb.ru",target:"_blank",rel:"noreferrer noopener",children:"W3BB"})]})]})),P=document.createElement("div");P.classList.add("w3bb-quiz-modal-overlay"),document.createElement("div").classList.add("w3bb-quiz-modal-body");const Ge=Q(P);async function Ke({visibleToggler:o}){let l=!1;const h=o.dataset.w3bbId;if(!h)throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C ID \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-w3bb-id.");const p=()=>{document.body.removeChild(P),l=!1},y=()=>{document.body.appendChild(P),Ge.render(He({id:h,destroyModal:p}))},x=()=>{switch(l=!l,l){case!0:y();return;case!1:l=!1,p();return;default:return}};P.addEventListener("click",_=>{_.target===P&&(l=!1,p())}),o.addEventListener("click",()=>x())}const Xe=`
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
`,Qe=`
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

`,Ze=`
  <div class="w3bb-widget-wrapper" role="button" id="w3bb-widget-default-toggler" data-w3bb-id="1234567890">
    <span>\u041F\u0440\u043E\u0439\u0442\u0438 \u043E\u043F\u0440\u043E\u0441</span>
  </div>
`,U=document.querySelector("#w3bb-widget-toggler"),Z=document.createElement("div");Z.id="w3bb-quiz-root",document.body.appendChild(Z);const ee=document.createElement("style");document.head.appendChild(ee),ee.appendChild(document.createTextNode(Qe)),U||(ee.appendChild(document.createTextNode(Xe)),Z.innerHTML=Ze);const eu=document.querySelector("#w3bb-widget-default-toggler");Ke({visibleToggler:U!=null?U:eu})});
