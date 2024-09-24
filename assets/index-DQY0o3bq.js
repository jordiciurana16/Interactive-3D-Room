(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ag(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zx={exports:{}},$f={},Hx={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Symbol.for("react.element"),RT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),LT=Symbol.for("react.strict_mode"),IT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),UT=Symbol.for("react.suspense"),kT=Symbol.for("react.memo"),FT=Symbol.for("react.lazy"),c0=Symbol.iterator;function BT(n){return n===null||typeof n!="object"?null:(n=c0&&n[c0]||n["@@iterator"],typeof n=="function"?n:null)}var Vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gx=Object.assign,Wx={};function Za(n,e,t){this.props=n,this.context=e,this.refs=Wx,this.updater=t||Vx}Za.prototype.isReactComponent={};Za.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Za.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jx(){}jx.prototype=Za.prototype;function lg(n,e,t){this.props=n,this.context=e,this.refs=Wx,this.updater=t||Vx}var cg=lg.prototype=new jx;cg.constructor=lg;Gx(cg,Za.prototype);cg.isPureReactComponent=!0;var u0=Array.isArray,Xx=Object.prototype.hasOwnProperty,ug={current:null},Yx={key:!0,ref:!0,__self:!0,__source:!0};function Kx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xx.call(e,i)&&!Yx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Cc,type:n,key:s,ref:o,props:r,_owner:ug.current}}function zT(n,e){return{$$typeof:Cc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function fg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Cc}function HT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var f0=/\/+/g;function Pd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?HT(""+n.key):e.toString(36)}function Uu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Cc:case RT:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pd(o,0):i,u0(r)?(t="",n!=null&&(t=n.replace(f0,"$&/")+"/"),Uu(r,e,t,"",function(c){return c})):r!=null&&(fg(r)&&(r=zT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(f0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",u0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Pd(s,a);o+=Uu(s,e,t,l,r)}else if(l=BT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Pd(s,a++),o+=Uu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hc(n,e,t){if(n==null)return n;var i=[],r=0;return Uu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function VT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Tn={current:null},ku={transition:null},GT={ReactCurrentDispatcher:Tn,ReactCurrentBatchConfig:ku,ReactCurrentOwner:ug};function qx(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Hc,forEach:function(n,e,t){Hc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Hc(n,function(){e++}),e},toArray:function(n){return Hc(n,function(e){return e})||[]},only:function(n){if(!fg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ze.Component=Za;Ze.Fragment=PT;Ze.Profiler=IT;Ze.PureComponent=lg;Ze.StrictMode=LT;Ze.Suspense=UT;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GT;Ze.act=qx;Ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Gx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ug.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Xx.call(e,l)&&!Yx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Cc,type:n.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(n){return n={$$typeof:DT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:NT,_context:n},n.Consumer=n};Ze.createElement=Kx;Ze.createFactory=function(n){var e=Kx.bind(null,n);return e.type=n,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(n){return{$$typeof:OT,render:n}};Ze.isValidElement=fg;Ze.lazy=function(n){return{$$typeof:FT,_payload:{_status:-1,_result:n},_init:VT}};Ze.memo=function(n,e){return{$$typeof:kT,type:n,compare:e===void 0?null:e}};Ze.startTransition=function(n){var e=ku.transition;ku.transition={};try{n()}finally{ku.transition=e}};Ze.unstable_act=qx;Ze.useCallback=function(n,e){return Tn.current.useCallback(n,e)};Ze.useContext=function(n){return Tn.current.useContext(n)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(n){return Tn.current.useDeferredValue(n)};Ze.useEffect=function(n,e){return Tn.current.useEffect(n,e)};Ze.useId=function(){return Tn.current.useId()};Ze.useImperativeHandle=function(n,e,t){return Tn.current.useImperativeHandle(n,e,t)};Ze.useInsertionEffect=function(n,e){return Tn.current.useInsertionEffect(n,e)};Ze.useLayoutEffect=function(n,e){return Tn.current.useLayoutEffect(n,e)};Ze.useMemo=function(n,e){return Tn.current.useMemo(n,e)};Ze.useReducer=function(n,e,t){return Tn.current.useReducer(n,e,t)};Ze.useRef=function(n){return Tn.current.useRef(n)};Ze.useState=function(n){return Tn.current.useState(n)};Ze.useSyncExternalStore=function(n,e,t){return Tn.current.useSyncExternalStore(n,e,t)};Ze.useTransition=function(){return Tn.current.useTransition()};Ze.version="18.3.1";Hx.exports=Ze;var Ae=Hx.exports;const dg=ag(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=Ae,jT=Symbol.for("react.element"),XT=Symbol.for("react.fragment"),YT=Object.prototype.hasOwnProperty,KT=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qT={key:!0,ref:!0,__self:!0,__source:!0};function $x(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YT.call(e,i)&&!qT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jT,type:n,key:s,ref:o,props:r,_owner:KT.current}}$f.Fragment=XT;$f.jsx=$x;$f.jsxs=$x;zx.exports=$f;var ae=zx.exports,Qh={},Zx={exports:{}},ni={},Qx={exports:{}},Jx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,Z){var Q=N.length;N.push(Z);e:for(;0<Q;){var re=Q-1>>>1,me=N[re];if(0<r(me,Z))N[re]=Z,N[Q]=me,Q=re;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Z=N[0],Q=N.pop();if(Q!==Z){N[0]=Q;e:for(var re=0,me=N.length,He=me>>>1;re<He;){var j=2*(re+1)-1,J=N[j],ce=j+1,fe=N[ce];if(0>r(J,Q))ce<me&&0>r(fe,J)?(N[re]=fe,N[ce]=Q,re=ce):(N[re]=J,N[j]=Q,re=j);else if(ce<me&&0>r(fe,Q))N[re]=fe,N[ce]=Q,re=ce;else break e}}return Z}function r(N,Z){var Q=N.sortIndex-Z.sortIndex;return Q!==0?Q:N.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var Z=t(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=N)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=t(c)}}function x(N){if(g=!1,y(N),!_)if(t(l)!==null)_=!0,H(w);else{var Z=t(c);Z!==null&&q(x,Z.startTime-N)}}function w(N,Z){_=!1,g&&(g=!1,h(R),R=-1),p=!0;var Q=d;try{for(y(Z),f=t(l);f!==null&&(!(f.expirationTime>Z)||N&&!L());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var me=re(f.expirationTime<=Z);Z=n.unstable_now(),typeof me=="function"?f.callback=me:f===t(l)&&i(l),y(Z)}else i(l);f=t(l)}if(f!==null)var He=!0;else{var j=t(c);j!==null&&q(x,j.startTime-Z),He=!1}return He}finally{f=null,d=Q,p=!1}}var A=!1,T=null,R=-1,M=5,E=-1;function L(){return!(n.unstable_now()-E<M)}function F(){if(T!==null){var N=n.unstable_now();E=N;var Z=!0;try{Z=T(!0,N)}finally{Z?U():(A=!1,T=null)}}else A=!1}var U;if(typeof v=="function")U=function(){v(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,K=$.port2;$.port1.onmessage=F,U=function(){K.postMessage(null)}}else U=function(){m(F,0)};function H(N){T=N,A||(A=!0,U())}function q(N,Z){R=m(function(){N(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,H(w))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var Q=d;d=Z;try{return N()}finally{d=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return Z()}finally{d=Q}},n.unstable_scheduleCallback=function(N,Z,Q){var re=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,N={id:u++,callback:Z,priorityLevel:N,startTime:Q,expirationTime:me,sortIndex:-1},Q>re?(N.sortIndex=Q,e(c,N),t(l)===null&&N===t(c)&&(g?(h(R),R=-1):g=!0,q(x,Q-re))):(N.sortIndex=me,e(l,N),_||p||(_=!0,H(w))),N},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(N){var Z=d;return function(){var Q=d;d=Z;try{return N.apply(this,arguments)}finally{d=Q}}}})(Jx);Qx.exports=Jx;var $T=Qx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=Ae,ei=$T;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eS=new Set,Ql={};function Mo(n,e){ba(n,e),ba(n+"Capture",e)}function ba(n,e){for(Ql[n]=e,n=0;n<e.length;n++)eS.add(e[n])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=Object.prototype.hasOwnProperty,QT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d0={},h0={};function JT(n){return Jh.call(h0,n)?!0:Jh.call(d0,n)?!1:QT.test(n)?h0[n]=!0:(d0[n]=!0,!1)}function ew(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function tw(n,e,t,i){if(e===null||typeof e>"u"||ew(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];rn[e]=new wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var hg=/[\-:]([a-z])/g;function pg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(hg,pg);rn[e]=new wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(hg,pg);rn[e]=new wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(hg,pg);rn[e]=new wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new wn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function mg(n,e,t,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tw(e,t,r,i)&&(t=null),i||r===null?JT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Nr=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vc=Symbol.for("react.element"),$o=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.suspense_list"),vg=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),iS=Symbol.for("react.offscreen"),p0=Symbol.iterator;function al(n){return n===null||typeof n!="object"?null:(n=p0&&n[p0]||n["@@iterator"],typeof n=="function"?n:null)}var Pt=Object.assign,Ld;function wl(n){if(Ld===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ld=e&&e[1]||""}return`
`+Ld+n}var Id=!1;function Nd(n,e){if(!n||Id)return"";Id=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?wl(n):""}function nw(n){switch(n.tag){case 5:return wl(n.type);case 16:return wl("Lazy");case 13:return wl("Suspense");case 19:return wl("SuspenseList");case 0:case 2:case 15:return n=Nd(n.type,!1),n;case 11:return n=Nd(n.type.render,!1),n;case 1:return n=Nd(n.type,!0),n;default:return""}}function ip(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zo:return"Fragment";case $o:return"Portal";case ep:return"Profiler";case gg:return"StrictMode";case tp:return"Suspense";case np:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case nS:return(n.displayName||"Context")+".Consumer";case tS:return(n._context.displayName||"Context")+".Provider";case _g:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vg:return e=n.displayName||null,e!==null?e:ip(n.type)||"Memo";case Yr:e=n._payload,n=n._init;try{return ip(n(e))}catch{}}return null}function iw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ip(e);case 8:return e===gg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function rS(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(n){var e=rS(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Gc(n){n._valueTracker||(n._valueTracker=rw(n))}function sS(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=rS(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function af(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rp(n,e){var t=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function m0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=xs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oS(n,e){e=e.checked,e!=null&&mg(n,"checked",e,!1)}function sp(n,e){oS(n,e);var t=xs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?op(n,e.type,t):e.hasOwnProperty("defaultValue")&&op(n,e.type,xs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function g0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function op(n,e,t){(e!=="number"||af(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Al=Array.isArray;function ha(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+xs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ap(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Al(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:xs(t)}}function aS(n,e){var t=xs(e.value),i=xs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function v0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function lS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?lS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Wc,cS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Wc=Wc||document.createElement("div"),Wc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Jl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(n){sw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ol[e]=Ol[n]})});function uS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ol.hasOwnProperty(n)&&Ol[n]?(""+e).trim():e+"px"}function fS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=uS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ow=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cp(n,e){if(e){if(ow[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function up(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=null;function yg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dp=null,pa=null,ma=null;function y0(n){if(n=Lc(n)){if(typeof dp!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=td(e),dp(n.stateNode,n.type,e))}}function dS(n){pa?ma?ma.push(n):ma=[n]:pa=n}function hS(){if(pa){var n=pa,e=ma;if(ma=pa=null,y0(n),e)for(n=0;n<e.length;n++)y0(e[n])}}function pS(n,e){return n(e)}function mS(){}var Dd=!1;function gS(n,e,t){if(Dd)return n(e,t);Dd=!0;try{return pS(n,e,t)}finally{Dd=!1,(pa!==null||ma!==null)&&(mS(),hS())}}function ec(n,e){var t=n.stateNode;if(t===null)return null;var i=td(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var hp=!1;if(Er)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){hp=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{hp=!1}function aw(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Ul=!1,lf=null,cf=!1,pp=null,lw={onError:function(n){Ul=!0,lf=n}};function cw(n,e,t,i,r,s,o,a,l){Ul=!1,lf=null,aw.apply(lw,arguments)}function uw(n,e,t,i,r,s,o,a,l){if(cw.apply(this,arguments),Ul){if(Ul){var c=lf;Ul=!1,lf=null}else throw Error(oe(198));cf||(cf=!0,pp=c)}}function Eo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _S(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function x0(n){if(Eo(n)!==n)throw Error(oe(188))}function fw(n){var e=n.alternate;if(!e){if(e=Eo(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return x0(r),n;if(s===i)return x0(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function vS(n){return n=fw(n),n!==null?yS(n):null}function yS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yS(n);if(e!==null)return e;n=n.sibling}return null}var xS=ei.unstable_scheduleCallback,S0=ei.unstable_cancelCallback,dw=ei.unstable_shouldYield,hw=ei.unstable_requestPaint,kt=ei.unstable_now,pw=ei.unstable_getCurrentPriorityLevel,xg=ei.unstable_ImmediatePriority,SS=ei.unstable_UserBlockingPriority,uf=ei.unstable_NormalPriority,mw=ei.unstable_LowPriority,MS=ei.unstable_IdlePriority,Zf=null,Xi=null;function gw(n){if(Xi&&typeof Xi.onCommitFiberRoot=="function")try{Xi.onCommitFiberRoot(Zf,n,void 0,(n.current.flags&128)===128)}catch{}}var Ri=Math.clz32?Math.clz32:yw,_w=Math.log,vw=Math.LN2;function yw(n){return n>>>=0,n===0?32:31-(_w(n)/vw|0)|0}var jc=64,Xc=4194304;function bl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ff(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=bl(a):(s&=o,s!==0&&(i=bl(s)))}else o=t&~r,o!==0?i=bl(o):s!==0&&(i=bl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ri(e),r=1<<t,i|=n[t],e&=~r;return i}function xw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ri(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ES(){var n=jc;return jc<<=1,!(jc&4194240)&&(jc=64),n}function Od(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Rc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ri(e),n[e]=t}function Mw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ri(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Sg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ri(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ft=0;function TS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wS,Mg,AS,bS,CS,gp=!1,Yc=[],ls=null,cs=null,us=null,tc=new Map,nc=new Map,$r=[],Ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function M0(n,e){switch(n){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":tc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(e.pointerId)}}function cl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Lc(e),e!==null&&Mg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Tw(n,e,t,i,r){switch(e){case"focusin":return ls=cl(ls,n,e,t,i,r),!0;case"dragenter":return cs=cl(cs,n,e,t,i,r),!0;case"mouseover":return us=cl(us,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return tc.set(s,cl(tc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,nc.set(s,cl(nc.get(s)||null,n,e,t,i,r)),!0}return!1}function RS(n){var e=Zs(n.target);if(e!==null){var t=Eo(e);if(t!==null){if(e=t.tag,e===13){if(e=_S(t),e!==null){n.blockedOn=e,CS(n.priority,function(){AS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_p(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fp=i,t.target.dispatchEvent(i),fp=null}else return e=Lc(t),e!==null&&Mg(e),n.blockedOn=t,!1;e.shift()}return!0}function E0(n,e,t){Fu(n)&&t.delete(e)}function ww(){gp=!1,ls!==null&&Fu(ls)&&(ls=null),cs!==null&&Fu(cs)&&(cs=null),us!==null&&Fu(us)&&(us=null),tc.forEach(E0),nc.forEach(E0)}function ul(n,e){n.blockedOn===e&&(n.blockedOn=null,gp||(gp=!0,ei.unstable_scheduleCallback(ei.unstable_NormalPriority,ww)))}function ic(n){function e(r){return ul(r,n)}if(0<Yc.length){ul(Yc[0],n);for(var t=1;t<Yc.length;t++){var i=Yc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ls!==null&&ul(ls,n),cs!==null&&ul(cs,n),us!==null&&ul(us,n),tc.forEach(e),nc.forEach(e),t=0;t<$r.length;t++)i=$r[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<$r.length&&(t=$r[0],t.blockedOn===null);)RS(t),t.blockedOn===null&&$r.shift()}var ga=Nr.ReactCurrentBatchConfig,df=!0;function Aw(n,e,t,i){var r=ft,s=ga.transition;ga.transition=null;try{ft=1,Eg(n,e,t,i)}finally{ft=r,ga.transition=s}}function bw(n,e,t,i){var r=ft,s=ga.transition;ga.transition=null;try{ft=4,Eg(n,e,t,i)}finally{ft=r,ga.transition=s}}function Eg(n,e,t,i){if(df){var r=_p(n,e,t,i);if(r===null)jd(n,e,i,hf,t),M0(n,i);else if(Tw(r,n,e,t,i))i.stopPropagation();else if(M0(n,i),e&4&&-1<Ew.indexOf(n)){for(;r!==null;){var s=Lc(r);if(s!==null&&wS(s),s=_p(n,e,t,i),s===null&&jd(n,e,i,hf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else jd(n,e,i,null,t)}}var hf=null;function _p(n,e,t,i){if(hf=null,n=yg(i),n=Zs(n),n!==null)if(e=Eo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_S(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return hf=n,null}function PS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pw()){case xg:return 1;case SS:return 4;case uf:case mw:return 16;case MS:return 536870912;default:return 16}default:return 16}}var Jr=null,Tg=null,Bu=null;function LS(){if(Bu)return Bu;var n,e=Tg,t=e.length,i,r="value"in Jr?Jr.value:Jr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Bu=r.slice(n,1<i?1-i:void 0)}function zu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Kc(){return!0}function T0(){return!1}function ii(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kc:T0,this.isPropagationStopped=T0,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Kc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Kc)},persist:function(){},isPersistent:Kc}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=ii(Qa),Pc=Pt({},Qa,{view:0,detail:0}),Cw=ii(Pc),Ud,kd,fl,Qf=Pt({},Pc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fl&&(fl&&n.type==="mousemove"?(Ud=n.screenX-fl.screenX,kd=n.screenY-fl.screenY):kd=Ud=0,fl=n),Ud)},movementY:function(n){return"movementY"in n?n.movementY:kd}}),w0=ii(Qf),Rw=Pt({},Qf,{dataTransfer:0}),Pw=ii(Rw),Lw=Pt({},Pc,{relatedTarget:0}),Fd=ii(Lw),Iw=Pt({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Nw=ii(Iw),Dw=Pt({},Qa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ow=ii(Dw),Uw=Pt({},Qa,{data:0}),A0=ii(Uw),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Bw[n])?!!e[n]:!1}function Ag(){return zw}var Hw=Pt({},Pc,{key:function(n){if(n.key){var e=kw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=zu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(n){return n.type==="keypress"?zu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vw=ii(Hw),Gw=Pt({},Qf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=ii(Gw),Ww=Pt({},Pc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),jw=ii(Ww),Xw=Pt({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yw=ii(Xw),Kw=Pt({},Qf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),qw=ii(Kw),$w=[9,13,27,32],bg=Er&&"CompositionEvent"in window,kl=null;Er&&"documentMode"in document&&(kl=document.documentMode);var Zw=Er&&"TextEvent"in window&&!kl,IS=Er&&(!bg||kl&&8<kl&&11>=kl),C0=" ",R0=!1;function NS(n,e){switch(n){case"keyup":return $w.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function DS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qo=!1;function Qw(n,e){switch(n){case"compositionend":return DS(e);case"keypress":return e.which!==32?null:(R0=!0,C0);case"textInput":return n=e.data,n===C0&&R0?null:n;default:return null}}function Jw(n,e){if(Qo)return n==="compositionend"||!bg&&NS(n,e)?(n=LS(),Bu=Tg=Jr=null,Qo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return IS&&e.locale!=="ko"?null:e.data;default:return null}}var eA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!eA[n.type]:e==="textarea"}function OS(n,e,t,i){dS(i),e=pf(e,"onChange"),0<e.length&&(t=new wg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Fl=null,rc=null;function tA(n){XS(n,0)}function Jf(n){var e=ta(n);if(sS(e))return n}function nA(n,e){if(n==="change")return e}var US=!1;if(Er){var Bd;if(Er){var zd="oninput"in document;if(!zd){var L0=document.createElement("div");L0.setAttribute("oninput","return;"),zd=typeof L0.oninput=="function"}Bd=zd}else Bd=!1;US=Bd&&(!document.documentMode||9<document.documentMode)}function I0(){Fl&&(Fl.detachEvent("onpropertychange",kS),rc=Fl=null)}function kS(n){if(n.propertyName==="value"&&Jf(rc)){var e=[];OS(e,rc,n,yg(n)),gS(tA,e)}}function iA(n,e,t){n==="focusin"?(I0(),Fl=e,rc=t,Fl.attachEvent("onpropertychange",kS)):n==="focusout"&&I0()}function rA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jf(rc)}function sA(n,e){if(n==="click")return Jf(e)}function oA(n,e){if(n==="input"||n==="change")return Jf(e)}function aA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ii=typeof Object.is=="function"?Object.is:aA;function sc(n,e){if(Ii(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Jh.call(e,r)||!Ii(n[r],e[r]))return!1}return!0}function N0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function D0(n,e){var t=N0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=N0(t)}}function FS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?FS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function BS(){for(var n=window,e=af();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=af(n.document)}return e}function Cg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function lA(n){var e=BS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&FS(t.ownerDocument.documentElement,t)){if(i!==null&&Cg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=D0(t,s);var o=D0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cA=Er&&"documentMode"in document&&11>=document.documentMode,Jo=null,vp=null,Bl=null,yp=!1;function O0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yp||Jo==null||Jo!==af(i)||(i=Jo,"selectionStart"in i&&Cg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bl&&sc(Bl,i)||(Bl=i,i=pf(vp,"onSelect"),0<i.length&&(e=new wg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Jo)))}function qc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ea={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")},Hd={},zS={};Er&&(zS=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function ed(n){if(Hd[n])return Hd[n];if(!ea[n])return n;var e=ea[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zS)return Hd[n]=e[t];return n}var HS=ed("animationend"),VS=ed("animationiteration"),GS=ed("animationstart"),WS=ed("transitionend"),jS=new Map,U0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cs(n,e){jS.set(n,e),Mo(e,[n])}for(var Vd=0;Vd<U0.length;Vd++){var Gd=U0[Vd],uA=Gd.toLowerCase(),fA=Gd[0].toUpperCase()+Gd.slice(1);Cs(uA,"on"+fA)}Cs(HS,"onAnimationEnd");Cs(VS,"onAnimationIteration");Cs(GS,"onAnimationStart");Cs("dblclick","onDoubleClick");Cs("focusin","onFocus");Cs("focusout","onBlur");Cs(WS,"onTransitionEnd");ba("onMouseEnter",["mouseout","mouseover"]);ba("onMouseLeave",["mouseout","mouseover"]);ba("onPointerEnter",["pointerout","pointerover"]);ba("onPointerLeave",["pointerout","pointerover"]);Mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cl));function k0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uw(i,e,void 0,n),n.currentTarget=null}function XS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;k0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;k0(r,a,c),s=l}}}if(cf)throw n=pp,cf=!1,pp=null,n}function vt(n,e){var t=e[Tp];t===void 0&&(t=e[Tp]=new Set);var i=n+"__bubble";t.has(i)||(YS(e,n,2,!1),t.add(i))}function Wd(n,e,t){var i=0;e&&(i|=4),YS(t,n,i,e)}var $c="_reactListening"+Math.random().toString(36).slice(2);function oc(n){if(!n[$c]){n[$c]=!0,eS.forEach(function(t){t!=="selectionchange"&&(dA.has(t)||Wd(t,!1,n),Wd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[$c]||(e[$c]=!0,Wd("selectionchange",!1,e))}}function YS(n,e,t,i){switch(PS(e)){case 1:var r=Aw;break;case 4:r=bw;break;default:r=Eg}t=r.bind(null,e,t,n),r=void 0,!hp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function jd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gS(function(){var c=s,u=yg(t),f=[];e:{var d=jS.get(n);if(d!==void 0){var p=wg,_=n;switch(n){case"keypress":if(zu(t)===0)break e;case"keydown":case"keyup":p=Vw;break;case"focusin":_="focus",p=Fd;break;case"focusout":_="blur",p=Fd;break;case"beforeblur":case"afterblur":p=Fd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=w0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jw;break;case HS:case VS:case GS:p=Nw;break;case WS:p=Yw;break;case"scroll":p=Cw;break;case"wheel":p=qw;break;case"copy":case"cut":case"paste":p=Ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=b0}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=ec(v,h),x!=null&&g.push(ac(v,x,y)))),m)break;v=v.return}0<g.length&&(d=new p(d,_,null,t,u),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==fp&&(_=t.relatedTarget||t.fromElement)&&(Zs(_)||_[Tr]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?Zs(_):null,_!==null&&(m=Eo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=w0,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=b0,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:ta(p),y=_==null?d:ta(_),d=new g(x,v+"leave",p,t,u),d.target=m,d.relatedTarget=y,x=null,Zs(u)===c&&(g=new g(h,v+"enter",_,t,u),g.target=y,g.relatedTarget=m,x=g),m=x,p&&_)t:{for(g=p,h=_,v=0,y=g;y;y=Co(y))v++;for(y=0,x=h;x;x=Co(x))y++;for(;0<v-y;)g=Co(g),v--;for(;0<y-v;)h=Co(h),y--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Co(g),h=Co(h)}g=null}else g=null;p!==null&&F0(f,d,p,g,!1),_!==null&&m!==null&&F0(f,m,_,g,!0)}}e:{if(d=c?ta(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=nA;else if(P0(d))if(US)w=oA;else{w=rA;var A=iA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=sA);if(w&&(w=w(n,c))){OS(f,w,t,u);break e}A&&A(n,d,c),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&op(d,"number",d.value)}switch(A=c?ta(c):window,n){case"focusin":(P0(A)||A.contentEditable==="true")&&(Jo=A,vp=c,Bl=null);break;case"focusout":Bl=vp=Jo=null;break;case"mousedown":yp=!0;break;case"contextmenu":case"mouseup":case"dragend":yp=!1,O0(f,t,u);break;case"selectionchange":if(cA)break;case"keydown":case"keyup":O0(f,t,u)}var T;if(bg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qo?NS(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(IS&&t.locale!=="ko"&&(Qo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qo&&(T=LS()):(Jr=u,Tg="value"in Jr?Jr.value:Jr.textContent,Qo=!0)),A=pf(c,R),0<A.length&&(R=new A0(R,n,null,t,u),f.push({event:R,listeners:A}),T?R.data=T:(T=DS(t),T!==null&&(R.data=T)))),(T=Zw?Qw(n,t):Jw(n,t))&&(c=pf(c,"onBeforeInput"),0<c.length&&(u=new A0("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=T))}XS(f,e)})}function ac(n,e,t){return{instance:n,listener:e,currentTarget:t}}function pf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ec(n,t),s!=null&&i.unshift(ac(n,s,r)),s=ec(n,e),s!=null&&i.push(ac(n,s,r))),n=n.return}return i}function Co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function F0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ec(t,s),l!=null&&o.unshift(ac(t,l,a))):r||(l=ec(t,s),l!=null&&o.push(ac(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hA=/\r\n?/g,pA=/\u0000|\uFFFD/g;function B0(n){return(typeof n=="string"?n:""+n).replace(hA,`
`).replace(pA,"")}function Zc(n,e,t){if(e=B0(e),B0(n)!==e&&t)throw Error(oe(425))}function mf(){}var xp=null,Sp=null;function Mp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ep=typeof setTimeout=="function"?setTimeout:void 0,mA=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,gA=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(n){return z0.resolve(null).then(n).catch(_A)}:Ep;function _A(n){setTimeout(function(){throw n})}function Xd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ic(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ic(e)}function fs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function H0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ja=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Ja,lc="__reactProps$"+Ja,Tr="__reactContainer$"+Ja,Tp="__reactEvents$"+Ja,vA="__reactListeners$"+Ja,yA="__reactHandles$"+Ja;function Zs(n){var e=n[Bi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Tr]||t[Bi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=H0(n);n!==null;){if(t=n[Bi])return t;n=H0(n)}return e}n=t,t=n.parentNode}return null}function Lc(n){return n=n[Bi]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function td(n){return n[lc]||null}var wp=[],na=-1;function Rs(n){return{current:n}}function xt(n){0>na||(n.current=wp[na],wp[na]=null,na--)}function _t(n,e){na++,wp[na]=n.current,n.current=e}var Ss={},mn=Rs(Ss),Rn=Rs(!1),uo=Ss;function Ca(n,e){var t=n.type.contextTypes;if(!t)return Ss;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(n){return n=n.childContextTypes,n!=null}function gf(){xt(Rn),xt(mn)}function V0(n,e,t){if(mn.current!==Ss)throw Error(oe(168));_t(mn,e),_t(Rn,t)}function KS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,iw(n)||"Unknown",r));return Pt({},t,i)}function _f(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ss,uo=mn.current,_t(mn,n),_t(Rn,Rn.current),!0}function G0(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=KS(n,e,uo),i.__reactInternalMemoizedMergedChildContext=n,xt(Rn),xt(mn),_t(mn,n)):xt(Rn),_t(Rn,t)}var mr=null,nd=!1,Yd=!1;function qS(n){mr===null?mr=[n]:mr.push(n)}function xA(n){nd=!0,qS(n)}function Ps(){if(!Yd&&mr!==null){Yd=!0;var n=0,e=ft;try{var t=mr;for(ft=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}mr=null,nd=!1}catch(r){throw mr!==null&&(mr=mr.slice(n+1)),xS(xg,Ps),r}finally{ft=e,Yd=!1}}return null}var ia=[],ra=0,vf=null,yf=0,ci=[],ui=0,fo=null,_r=1,vr="";function Ws(n,e){ia[ra++]=yf,ia[ra++]=vf,vf=n,yf=e}function $S(n,e,t){ci[ui++]=_r,ci[ui++]=vr,ci[ui++]=fo,fo=n;var i=_r;n=vr;var r=32-Ri(i)-1;i&=~(1<<r),t+=1;var s=32-Ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_r=1<<32-Ri(e)+r|t<<r|i,vr=s+n}else _r=1<<s|t<<r|i,vr=n}function Rg(n){n.return!==null&&(Ws(n,1),$S(n,1,0))}function Pg(n){for(;n===vf;)vf=ia[--ra],ia[ra]=null,yf=ia[--ra],ia[ra]=null;for(;n===fo;)fo=ci[--ui],ci[ui]=null,vr=ci[--ui],ci[ui]=null,_r=ci[--ui],ci[ui]=null}var $n=null,Kn=null,Et=!1,Ai=null;function ZS(n,e){var t=fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function W0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,$n=n,Kn=fs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,$n=n,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=fo!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,$n=n,Kn=null,!0):!1;default:return!1}}function Ap(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bp(n){if(Et){var e=Kn;if(e){var t=e;if(!W0(n,e)){if(Ap(n))throw Error(oe(418));e=fs(t.nextSibling);var i=$n;e&&W0(n,e)?ZS(i,t):(n.flags=n.flags&-4097|2,Et=!1,$n=n)}}else{if(Ap(n))throw Error(oe(418));n.flags=n.flags&-4097|2,Et=!1,$n=n}}}function j0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Qc(n){if(n!==$n)return!1;if(!Et)return j0(n),Et=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mp(n.type,n.memoizedProps)),e&&(e=Kn)){if(Ap(n))throw QS(),Error(oe(418));for(;e;)ZS(n,e),e=fs(e.nextSibling)}if(j0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Kn=fs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Kn=null}}else Kn=$n?fs(n.stateNode.nextSibling):null;return!0}function QS(){for(var n=Kn;n;)n=fs(n.nextSibling)}function Ra(){Kn=$n=null,Et=!1}function Lg(n){Ai===null?Ai=[n]:Ai.push(n)}var SA=Nr.ReactCurrentBatchConfig;function dl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function Jc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function X0(n){var e=n._init;return e(n._payload)}function JS(n){function e(h,v){if(n){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ms(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=eh(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var w=y.type;return w===Zo?u(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Yr&&X0(w)===v.type)?(x=r(v,y.props),x.ref=dl(h,v,y),x.return=h,x):(x=Yu(y.type,y.key,y.props,null,h.mode,x),x.ref=dl(h,v,y),x.return=h,x)}function c(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=th(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,x,w){return v===null||v.tag!==7?(v=io(y,h.mode,x,w),v.return=h,v):(v=r(v,y),v.return=h,v)}function f(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=eh(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vc:return y=Yu(v.type,v.key,v.props,null,h.mode,y),y.ref=dl(h,null,v),y.return=h,y;case $o:return v=th(v,h.mode,y),v.return=h,v;case Yr:var x=v._init;return f(h,x(v._payload),y)}if(Al(v)||al(v))return v=io(v,h.mode,y,null),v.return=h,v;Jc(h,v)}return null}function d(h,v,y,x){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vc:return y.key===w?l(h,v,y,x):null;case $o:return y.key===w?c(h,v,y,x):null;case Yr:return w=y._init,d(h,v,w(y._payload),x)}if(Al(y)||al(y))return w!==null?null:u(h,v,y,x,null);Jc(h,y)}return null}function p(h,v,y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vc:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,w);case $o:return h=h.get(x.key===null?y:x.key)||null,c(v,h,x,w);case Yr:var A=x._init;return p(h,v,y,A(x._payload),w)}if(Al(x)||al(x))return h=h.get(y)||null,u(v,h,x,w,null);Jc(v,x)}return null}function _(h,v,y,x){for(var w=null,A=null,T=v,R=v=0,M=null;T!==null&&R<y.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var E=d(h,T,y[R],x);if(E===null){T===null&&(T=M);break}n&&T&&E.alternate===null&&e(h,T),v=s(E,v,R),A===null?w=E:A.sibling=E,A=E,T=M}if(R===y.length)return t(h,T),Et&&Ws(h,R),w;if(T===null){for(;R<y.length;R++)T=f(h,y[R],x),T!==null&&(v=s(T,v,R),A===null?w=T:A.sibling=T,A=T);return Et&&Ws(h,R),w}for(T=i(h,T);R<y.length;R++)M=p(T,h,R,y[R],x),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),v=s(M,v,R),A===null?w=M:A.sibling=M,A=M);return n&&T.forEach(function(L){return e(h,L)}),Et&&Ws(h,R),w}function g(h,v,y,x){var w=al(y);if(typeof w!="function")throw Error(oe(150));if(y=w.call(y),y==null)throw Error(oe(151));for(var A=w=null,T=v,R=v=0,M=null,E=y.next();T!==null&&!E.done;R++,E=y.next()){T.index>R?(M=T,T=null):M=T.sibling;var L=d(h,T,E.value,x);if(L===null){T===null&&(T=M);break}n&&T&&L.alternate===null&&e(h,T),v=s(L,v,R),A===null?w=L:A.sibling=L,A=L,T=M}if(E.done)return t(h,T),Et&&Ws(h,R),w;if(T===null){for(;!E.done;R++,E=y.next())E=f(h,E.value,x),E!==null&&(v=s(E,v,R),A===null?w=E:A.sibling=E,A=E);return Et&&Ws(h,R),w}for(T=i(h,T);!E.done;R++,E=y.next())E=p(T,h,R,E.value,x),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?R:E.key),v=s(E,v,R),A===null?w=E:A.sibling=E,A=E);return n&&T.forEach(function(F){return e(h,F)}),Et&&Ws(h,R),w}function m(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Zo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vc:e:{for(var w=y.key,A=v;A!==null;){if(A.key===w){if(w=y.type,w===Zo){if(A.tag===7){t(h,A.sibling),v=r(A,y.props.children),v.return=h,h=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Yr&&X0(w)===A.type){t(h,A.sibling),v=r(A,y.props),v.ref=dl(h,A,y),v.return=h,h=v;break e}t(h,A);break}else e(h,A);A=A.sibling}y.type===Zo?(v=io(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=Yu(y.type,y.key,y.props,null,h.mode,x),x.ref=dl(h,v,y),x.return=h,h=x)}return o(h);case $o:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=th(y,h.mode,x),v.return=h,h=v}return o(h);case Yr:return A=y._init,m(h,v,A(y._payload),x)}if(Al(y))return _(h,v,y,x);if(al(y))return g(h,v,y,x);Jc(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,y),v.return=h,h=v):(t(h,v),v=eh(y,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return m}var Pa=JS(!0),e1=JS(!1),xf=Rs(null),Sf=null,sa=null,Ig=null;function Ng(){Ig=sa=Sf=null}function Dg(n){var e=xf.current;xt(xf),n._currentValue=e}function Cp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function _a(n,e){Sf=n,Ig=sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(bn=!0),n.firstContext=null)}function gi(n){var e=n._currentValue;if(Ig!==n)if(n={context:n,memoizedValue:e,next:null},sa===null){if(Sf===null)throw Error(oe(308));sa=n,Sf.dependencies={lanes:0,firstContext:n}}else sa=sa.next=n;return e}var Qs=null;function Og(n){Qs===null?Qs=[n]:Qs.push(n)}function t1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Og(e)):(t.next=r.next,r.next=t),e.interleaved=t,wr(n,i)}function wr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Kr=!1;function Ug(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Sr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ds(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wr(n,t)}return r=i.interleaved,r===null?(e.next=e,Og(i)):(e.next=r.next,r.next=e),i.interleaved=e,wr(n,t)}function Hu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sg(n,t)}}function Y0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Mf(n,e,t,i){var r=n.updateQueue;Kr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(d=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Pt({},f,d);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);po|=o,n.lanes=o,n.memoizedState=f}}function K0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ic={},Yi=Rs(Ic),cc=Rs(Ic),uc=Rs(Ic);function Js(n){if(n===Ic)throw Error(oe(174));return n}function kg(n,e){switch(_t(uc,e),_t(cc,n),_t(Yi,Ic),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lp(e,n)}xt(Yi),_t(Yi,e)}function La(){xt(Yi),xt(cc),xt(uc)}function i1(n){Js(uc.current);var e=Js(Yi.current),t=lp(e,n.type);e!==t&&(_t(cc,n),_t(Yi,t))}function Fg(n){cc.current===n&&(xt(Yi),xt(cc))}var At=Rs(0);function Ef(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kd=[];function Bg(){for(var n=0;n<Kd.length;n++)Kd[n]._workInProgressVersionPrimary=null;Kd.length=0}var Vu=Nr.ReactCurrentDispatcher,qd=Nr.ReactCurrentBatchConfig,ho=0,Rt=null,Vt=null,Yt=null,Tf=!1,zl=!1,fc=0,MA=0;function on(){throw Error(oe(321))}function zg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ii(n[t],e[t]))return!1;return!0}function Hg(n,e,t,i,r,s){if(ho=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=n===null||n.memoizedState===null?AA:bA,n=t(i,r),zl){s=0;do{if(zl=!1,fc=0,25<=s)throw Error(oe(301));s+=1,Yt=Vt=null,e.updateQueue=null,Vu.current=CA,n=t(i,r)}while(zl)}if(Vu.current=wf,e=Vt!==null&&Vt.next!==null,ho=0,Yt=Vt=Rt=null,Tf=!1,e)throw Error(oe(300));return n}function Vg(){var n=fc!==0;return fc=0,n}function Oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Rt.memoizedState=Yt=n:Yt=Yt.next=n,Yt}function _i(){if(Vt===null){var n=Rt.alternate;n=n!==null?n.memoizedState:null}else n=Vt.next;var e=Yt===null?Rt.memoizedState:Yt.next;if(e!==null)Yt=e,Vt=n;else{if(n===null)throw Error(oe(310));Vt=n,n={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Yt===null?Rt.memoizedState=Yt=n:Yt=Yt.next=n}return Yt}function dc(n,e){return typeof e=="function"?e(n):e}function $d(n){var e=_i(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=Vt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ho&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Rt.lanes|=u,po|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ii(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Rt.lanes|=s,po|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Zd(n){var e=_i(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ii(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function r1(){}function s1(n,e){var t=Rt,i=_i(),r=e(),s=!Ii(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,Gg(l1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(t.flags|=2048,hc(9,a1.bind(null,t,i,r,e),void 0,null),qt===null)throw Error(oe(349));ho&30||o1(t,e,r)}return r}function o1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function a1(n,e,t,i){e.value=t,e.getSnapshot=i,c1(e)&&u1(n)}function l1(n,e,t){return t(function(){c1(e)&&u1(n)})}function c1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ii(n,t)}catch{return!0}}function u1(n){var e=wr(n,1);e!==null&&Pi(e,n,1,-1)}function q0(n){var e=Oi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dc,lastRenderedState:n},e.queue=n,n=n.dispatch=wA.bind(null,Rt,n),[e.memoizedState,n]}function hc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function f1(){return _i().memoizedState}function Gu(n,e,t,i){var r=Oi();Rt.flags|=n,r.memoizedState=hc(1|e,t,void 0,i===void 0?null:i)}function id(n,e,t,i){var r=_i();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&zg(i,o.deps)){r.memoizedState=hc(e,t,s,i);return}}Rt.flags|=n,r.memoizedState=hc(1|e,t,s,i)}function $0(n,e){return Gu(8390656,8,n,e)}function Gg(n,e){return id(2048,8,n,e)}function d1(n,e){return id(4,2,n,e)}function h1(n,e){return id(4,4,n,e)}function p1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function m1(n,e,t){return t=t!=null?t.concat([n]):null,id(4,4,p1.bind(null,e,n),t)}function Wg(){}function g1(n,e){var t=_i();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _1(n,e){var t=_i();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function v1(n,e,t){return ho&21?(Ii(t,e)||(t=ES(),Rt.lanes|=t,po|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=t)}function EA(n,e){var t=ft;ft=t!==0&&4>t?t:4,n(!0);var i=qd.transition;qd.transition={};try{n(!1),e()}finally{ft=t,qd.transition=i}}function y1(){return _i().memoizedState}function TA(n,e,t){var i=ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},x1(n))S1(e,t);else if(t=t1(n,e,t,i),t!==null){var r=Mn();Pi(t,n,i,r),M1(t,e,i)}}function wA(n,e,t){var i=ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(x1(n))S1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Og(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=t1(n,e,r,i),t!==null&&(r=Mn(),Pi(t,n,i,r),M1(t,e,i))}}function x1(n){var e=n.alternate;return n===Rt||e!==null&&e===Rt}function S1(n,e){zl=Tf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function M1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sg(n,t)}}var wf={readContext:gi,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},AA={readContext:gi,useCallback:function(n,e){return Oi().memoizedState=[n,e===void 0?null:e],n},useContext:gi,useEffect:$0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Gu(4194308,4,p1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Gu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Gu(4,2,n,e)},useMemo:function(n,e){var t=Oi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Oi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=TA.bind(null,Rt,n),[i.memoizedState,n]},useRef:function(n){var e=Oi();return n={current:n},e.memoizedState=n},useState:q0,useDebugValue:Wg,useDeferredValue:function(n){return Oi().memoizedState=n},useTransition:function(){var n=q0(!1),e=n[0];return n=EA.bind(null,n[1]),Oi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Rt,r=Oi();if(Et){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),qt===null)throw Error(oe(349));ho&30||o1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$0(l1.bind(null,i,s,n),[n]),i.flags|=2048,hc(9,a1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Oi(),e=qt.identifierPrefix;if(Et){var t=vr,i=_r;t=(i&~(1<<32-Ri(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=fc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=MA++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},bA={readContext:gi,useCallback:g1,useContext:gi,useEffect:Gg,useImperativeHandle:m1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:_1,useReducer:$d,useRef:f1,useState:function(){return $d(dc)},useDebugValue:Wg,useDeferredValue:function(n){var e=_i();return v1(e,Vt.memoizedState,n)},useTransition:function(){var n=$d(dc)[0],e=_i().memoizedState;return[n,e]},useMutableSource:r1,useSyncExternalStore:s1,useId:y1,unstable_isNewReconciler:!1},CA={readContext:gi,useCallback:g1,useContext:gi,useEffect:Gg,useImperativeHandle:m1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:_1,useReducer:Zd,useRef:f1,useState:function(){return Zd(dc)},useDebugValue:Wg,useDeferredValue:function(n){var e=_i();return Vt===null?e.memoizedState=n:v1(e,Vt.memoizedState,n)},useTransition:function(){var n=Zd(dc)[0],e=_i().memoizedState;return[n,e]},useMutableSource:r1,useSyncExternalStore:s1,useId:y1,unstable_isNewReconciler:!1};function Ti(n,e){if(n&&n.defaultProps){e=Pt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Pt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var rd={isMounted:function(n){return(n=n._reactInternals)?Eo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Mn(),r=ps(n),s=Sr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ds(n,s,r),e!==null&&(Pi(e,n,r,i),Hu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Mn(),r=ps(n),s=Sr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ds(n,s,r),e!==null&&(Pi(e,n,r,i),Hu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Mn(),i=ps(n),r=Sr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ds(n,r,i),e!==null&&(Pi(e,n,i,t),Hu(e,n,i))}};function Z0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sc(t,i)||!sc(r,s):!0}function E1(n,e,t){var i=!1,r=Ss,s=e.contextType;return typeof s=="object"&&s!==null?s=gi(s):(r=Pn(e)?uo:mn.current,i=e.contextTypes,s=(i=i!=null)?Ca(n,r):Ss),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Q0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&rd.enqueueReplaceState(e,e.state,null)}function Pp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ug(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gi(s):(s=Pn(e)?uo:mn.current,r.context=Ca(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rd.enqueueReplaceState(r,r.state,null),Mf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ia(n,e){try{var t="",i=e;do t+=nw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Qd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var RA=typeof WeakMap=="function"?WeakMap:Map;function T1(n,e,t){t=Sr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bf||(bf=!0,Hp=i),Lp(n,e)},t}function w1(n,e,t){t=Sr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Lp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lp(n,e),typeof i!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function J0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new RA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=GA.bind(null,n,e,t),e.then(n,n))}function ev(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function tv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Sr(-1,1),e.tag=2,ds(t,e,1))),t.lanes|=1),n)}var PA=Nr.ReactCurrentOwner,bn=!1;function vn(n,e,t,i){e.child=n===null?e1(e,null,t,i):Pa(e,n.child,t,i)}function nv(n,e,t,i,r){t=t.render;var s=e.ref;return _a(e,r),i=Hg(n,e,t,i,s,r),t=Vg(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ar(n,e,r)):(Et&&t&&Rg(e),e.flags|=1,vn(n,e,i,r),e.child)}function iv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Qg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,A1(n,e,s,i,r)):(n=Yu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:sc,t(o,i)&&n.ref===e.ref)return Ar(n,e,r)}return e.flags|=1,n=ms(s,i),n.ref=e.ref,n.return=e,e.child=n}function A1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(sc(s,i)&&n.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(bn=!0);else return e.lanes=n.lanes,Ar(n,e,r)}return Ip(n,e,t,i,r)}function b1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(aa,Vn),Vn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,_t(aa,Vn),Vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,_t(aa,Vn),Vn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,_t(aa,Vn),Vn|=i;return vn(n,e,r,t),e.child}function C1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ip(n,e,t,i,r){var s=Pn(t)?uo:mn.current;return s=Ca(e,s),_a(e,r),t=Hg(n,e,t,i,s,r),i=Vg(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ar(n,e,r)):(Et&&i&&Rg(e),e.flags|=1,vn(n,e,t,r),e.child)}function rv(n,e,t,i,r){if(Pn(t)){var s=!0;_f(e)}else s=!1;if(_a(e,r),e.stateNode===null)Wu(n,e),E1(e,t,i),Pp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=gi(c):(c=Pn(t)?uo:mn.current,c=Ca(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Q0(e,o,i,c),Kr=!1;var d=e.memoizedState;o.state=d,Mf(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Rn.current||Kr?(typeof u=="function"&&(Rp(e,t,u,i),l=e.memoizedState),(a=Kr||Z0(e,t,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,n1(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ti(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=gi(l):(l=Pn(t)?uo:mn.current,l=Ca(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Q0(e,o,i,l),Kr=!1,d=e.memoizedState,o.state=d,Mf(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Rn.current||Kr?(typeof p=="function"&&(Rp(e,t,p,i),_=e.memoizedState),(c=Kr||Z0(e,t,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Np(n,e,t,i,s,r)}function Np(n,e,t,i,r,s){C1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&G0(e,t,!1),Ar(n,e,s);i=e.stateNode,PA.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Pa(e,n.child,null,s),e.child=Pa(e,null,a,s)):vn(n,e,a,s),e.memoizedState=i.state,r&&G0(e,t,!0),e.child}function R1(n){var e=n.stateNode;e.pendingContext?V0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&V0(n,e.context,!1),kg(n,e.containerInfo)}function sv(n,e,t,i,r){return Ra(),Lg(r),e.flags|=256,vn(n,e,t,i),e.child}var Dp={dehydrated:null,treeContext:null,retryLane:0};function Op(n){return{baseLanes:n,cachePool:null,transitions:null}}function P1(n,e,t){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),_t(At,r&1),n===null)return bp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ad(o,i,0,null),n=io(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Op(t),e.memoizedState=Dp,n):jg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return LA(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ms(a,s):(s=io(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Op(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Dp,i}return s=n.child,n=s.sibling,i=ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function jg(n,e){return e=ad({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function eu(n,e,t,i){return i!==null&&Lg(i),Pa(e,n.child,null,t),n=jg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function LA(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Qd(Error(oe(422))),eu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ad({mode:"visible",children:i.children},r,0,null),s=io(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Pa(e,n.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Dp,s);if(!(e.mode&1))return eu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Qd(s,i,void 0),eu(n,e,o,i)}if(a=(o&n.childLanes)!==0,bn||a){if(i=qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wr(n,r),Pi(i,n,r,-1))}return Zg(),i=Qd(Error(oe(421))),eu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=WA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Kn=fs(r.nextSibling),$n=e,Et=!0,Ai=null,n!==null&&(ci[ui++]=_r,ci[ui++]=vr,ci[ui++]=fo,_r=n.id,vr=n.overflow,fo=e),e=jg(e,i.children),e.flags|=4096,e)}function ov(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cp(n.return,e,t)}function Jd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function L1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(n,e,i.children,t),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ov(n,t,e);else if(n.tag===19)ov(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(_t(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ef(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ef(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jd(e,!0,t,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ar(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),po|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=ms(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ms(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function IA(n,e,t){switch(e.tag){case 3:R1(e),Ra();break;case 5:i1(e);break;case 1:Pn(e.type)&&_f(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(xf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(At,At.current&1),e.flags|=128,null):t&e.child.childLanes?P1(n,e,t):(_t(At,At.current&1),n=Ar(n,e,t),n!==null?n.sibling:null);_t(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return L1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,b1(n,e,t)}return Ar(n,e,t)}var I1,Up,N1,D1;I1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Up=function(){};N1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Js(Yi.current);var s=null;switch(t){case"input":r=rp(n,r),i=rp(n,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=ap(n,r),i=ap(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=mf)}cp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ql.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ql.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D1=function(n,e,t,i){t!==i&&(e.flags|=4)};function hl(n,e){if(!Et)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function NA(n,e,t){var i=e.pendingProps;switch(Pg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Pn(e.type)&&gf(),an(e),null;case 3:return i=e.stateNode,La(),xt(Rn),xt(mn),Bg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ai!==null&&(Wp(Ai),Ai=null))),Up(n,e),an(e),null;case 5:Fg(e);var r=Js(uc.current);if(t=e.type,n!==null&&e.stateNode!=null)N1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return an(e),null}if(n=Js(Yi.current),Qc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[lc]=s,n=(e.mode&1)!==0,t){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Cl.length;r++)vt(Cl[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":m0(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":_0(i,s),vt("invalid",i)}cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zc(i.textContent,a,n),r=["children",""+a]):Ql.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(t){case"input":Gc(i),g0(i,s,!0);break;case"textarea":Gc(i),v0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bi]=e,n[lc]=i,I1(n,e,!1,!1),e.stateNode=n;e:{switch(o=up(t,i),t){case"dialog":vt("cancel",n),vt("close",n),r=i;break;case"iframe":case"object":case"embed":vt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Cl.length;r++)vt(Cl[r],n);r=i;break;case"source":vt("error",n),r=i;break;case"img":case"image":case"link":vt("error",n),vt("load",n),r=i;break;case"details":vt("toggle",n),r=i;break;case"input":m0(n,i),r=rp(n,i),vt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),vt("invalid",n);break;case"textarea":_0(n,i),r=ap(n,i),vt("invalid",n);break;default:r=i}cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Jl(n,l):typeof l=="number"&&Jl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ql.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",n):l!=null&&mg(n,s,l,o))}switch(t){case"input":Gc(n),g0(n,i,!1);break;case"textarea":Gc(n),v0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+xs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ha(n,!!i.multiple,s,!1):i.defaultValue!=null&&ha(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=mf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)D1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=Js(uc.current),Js(Yi.current),Qc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==t)&&(n=$n,n!==null))switch(n.tag){case 3:Zc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return an(e),null;case 13:if(xt(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Et&&Kn!==null&&e.mode&1&&!(e.flags&128))QS(),Ra(),e.flags|=98560,s=!1;else if(s=Qc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Bi]=e}else Ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else Ai!==null&&(Wp(Ai),Ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||At.current&1?Gt===0&&(Gt=3):Zg())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return La(),Up(n,e),n===null&&oc(e.stateNode.containerInfo),an(e),null;case 10:return Dg(e.type._context),an(e),null;case 17:return Pn(e.type)&&gf(),an(e),null;case 19:if(xt(At),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)hl(s,!1);else{if(Gt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ef(n),o!==null){for(e.flags|=128,hl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return _t(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&kt()>Na&&(e.flags|=128,i=!0,hl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ef(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),hl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return an(e),null}else 2*kt()-s.renderingStartTime>Na&&t!==1073741824&&(e.flags|=128,i=!0,hl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,t=At.current,_t(At,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return $g(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Vn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function DA(n,e){switch(Pg(e),e.tag){case 1:return Pn(e.type)&&gf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return La(),xt(Rn),xt(mn),Bg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Fg(e),null;case 13:if(xt(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ra()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return xt(At),null;case 4:return La(),null;case 10:return Dg(e.type._context),null;case 22:case 23:return $g(),null;case 24:return null;default:return null}}var tu=!1,un=!1,OA=typeof WeakSet=="function"?WeakSet:Set,ve=null;function oa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Dt(n,e,i)}else t.current=null}function kp(n,e,t){try{t()}catch(i){Dt(n,e,i)}}var av=!1;function UA(n,e){if(xp=df,n=BS(),Cg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sp={focusedElem:n,selectionRange:t},df=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ti(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){Dt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return _=av,av=!1,_}function Hl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&kp(e,t,s)}r=r.next}while(r!==i)}}function sd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function O1(n){var e=n.alternate;e!==null&&(n.alternate=null,O1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bi],delete e[lc],delete e[Tp],delete e[vA],delete e[yA])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function U1(n){return n.tag===5||n.tag===3||n.tag===4}function lv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||U1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=mf));else if(i!==4&&(n=n.child,n!==null))for(Bp(n,e,t),n=n.sibling;n!==null;)Bp(n,e,t),n=n.sibling}function zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zp(n,e,t),n=n.sibling;n!==null;)zp(n,e,t),n=n.sibling}var en=null,wi=!1;function Fr(n,e,t){for(t=t.child;t!==null;)k1(n,e,t),t=t.sibling}function k1(n,e,t){if(Xi&&typeof Xi.onCommitFiberUnmount=="function")try{Xi.onCommitFiberUnmount(Zf,t)}catch{}switch(t.tag){case 5:un||oa(t,e);case 6:var i=en,r=wi;en=null,Fr(n,e,t),en=i,wi=r,en!==null&&(wi?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(wi?(n=en,t=t.stateNode,n.nodeType===8?Xd(n.parentNode,t):n.nodeType===1&&Xd(n,t),ic(n)):Xd(en,t.stateNode));break;case 4:i=en,r=wi,en=t.stateNode.containerInfo,wi=!0,Fr(n,e,t),en=i,wi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kp(t,e,o),r=r.next}while(r!==i)}Fr(n,e,t);break;case 1:if(!un&&(oa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Dt(t,e,a)}Fr(n,e,t);break;case 21:Fr(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Fr(n,e,t),un=i):Fr(n,e,t);break;default:Fr(n,e,t)}}function cv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new OA),e.forEach(function(i){var r=jA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function xi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,wi=!1;break e;case 3:en=a.stateNode.containerInfo,wi=!0;break e;case 4:en=a.stateNode.containerInfo,wi=!0;break e}a=a.return}if(en===null)throw Error(oe(160));k1(s,o,r),en=null,wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F1(e,n),e=e.sibling}function F1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(e,n),Di(n),i&4){try{Hl(3,n,n.return),sd(3,n)}catch(g){Dt(n,n.return,g)}try{Hl(5,n,n.return)}catch(g){Dt(n,n.return,g)}}break;case 1:xi(e,n),Di(n),i&512&&t!==null&&oa(t,t.return);break;case 5:if(xi(e,n),Di(n),i&512&&t!==null&&oa(t,t.return),n.flags&32){var r=n.stateNode;try{Jl(r,"")}catch(g){Dt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&oS(r,s),up(a,o);var c=up(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?fS(r,f):u==="dangerouslySetInnerHTML"?cS(r,f):u==="children"?Jl(r,f):mg(r,u,f,c)}switch(a){case"input":sp(r,s);break;case"textarea":aS(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ha(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ha(r,!!s.multiple,s.defaultValue,!0):ha(r,!!s.multiple,s.multiple?[]:"",!1))}r[lc]=s}catch(g){Dt(n,n.return,g)}}break;case 6:if(xi(e,n),Di(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Dt(n,n.return,g)}}break;case 3:if(xi(e,n),Di(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ic(e.containerInfo)}catch(g){Dt(n,n.return,g)}break;case 4:xi(e,n),Di(n);break;case 13:xi(e,n),Di(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kg=kt())),i&4&&cv(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||u,xi(e,n),un=c):xi(e,n),Di(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ve=n,u=n.child;u!==null;){for(f=ve=u;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:Hl(4,d,d.return);break;case 1:oa(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Dt(i,t,g)}}break;case 5:oa(d,d.return);break;case 22:if(d.memoizedState!==null){fv(f);continue}}p!==null?(p.return=d,ve=p):fv(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uS("display",o))}catch(g){Dt(n,n.return,g)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Dt(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xi(e,n),Di(n),i&4&&cv(n);break;case 21:break;default:xi(e,n),Di(n)}}function Di(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(U1(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jl(r,""),i.flags&=-33);var s=lv(n);zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lv(n);Bp(n,a,o);break;default:throw Error(oe(161))}}catch(l){Dt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function kA(n,e,t){ve=n,B1(n)}function B1(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=tu;var c=un;if(tu=o,(un=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?dv(r):l!==null?(l.return=o,ve=l):dv(r);for(;s!==null;)ve=s,B1(s),s=s.sibling;ve=r,tu=a,un=c}uv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):uv(n)}}function uv(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||sd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&K0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}K0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ic(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}un||e.flags&512&&Fp(e)}catch(d){Dt(e,e.return,d)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function fv(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function dv(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{sd(4,e)}catch(l){Dt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Fp(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{Fp(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===n){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var FA=Math.ceil,Af=Nr.ReactCurrentDispatcher,Xg=Nr.ReactCurrentOwner,mi=Nr.ReactCurrentBatchConfig,nt=0,qt=null,Ht=null,nn=0,Vn=0,aa=Rs(0),Gt=0,pc=null,po=0,od=0,Yg=0,Vl=null,An=null,Kg=0,Na=1/0,dr=null,bf=!1,Hp=null,hs=null,nu=!1,es=null,Cf=0,Gl=0,Vp=null,ju=-1,Xu=0;function Mn(){return nt&6?kt():ju!==-1?ju:ju=kt()}function ps(n){return n.mode&1?nt&2&&nn!==0?nn&-nn:SA.transition!==null?(Xu===0&&(Xu=ES()),Xu):(n=ft,n!==0||(n=window.event,n=n===void 0?16:PS(n.type)),n):1}function Pi(n,e,t,i){if(50<Gl)throw Gl=0,Vp=null,Error(oe(185));Rc(n,t,i),(!(nt&2)||n!==qt)&&(n===qt&&(!(nt&2)&&(od|=t),Gt===4&&Zr(n,nn)),Ln(n,i),t===1&&nt===0&&!(e.mode&1)&&(Na=kt()+500,nd&&Ps()))}function Ln(n,e){var t=n.callbackNode;Sw(n,e);var i=ff(n,n===qt?nn:0);if(i===0)t!==null&&S0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&S0(t),e===1)n.tag===0?xA(hv.bind(null,n)):qS(hv.bind(null,n)),gA(function(){!(nt&6)&&Ps()}),t=null;else{switch(TS(i)){case 1:t=xg;break;case 4:t=SS;break;case 16:t=uf;break;case 536870912:t=MS;break;default:t=uf}t=Y1(t,z1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function z1(n,e){if(ju=-1,Xu=0,nt&6)throw Error(oe(327));var t=n.callbackNode;if(va()&&n.callbackNode!==t)return null;var i=ff(n,n===qt?nn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Rf(n,i);else{e=i;var r=nt;nt|=2;var s=V1();(qt!==n||nn!==e)&&(dr=null,Na=kt()+500,no(n,e));do try{HA();break}catch(a){H1(n,a)}while(!0);Ng(),Af.current=s,nt=r,Ht!==null?e=0:(qt=null,nn=0,e=Gt)}if(e!==0){if(e===2&&(r=mp(n),r!==0&&(i=r,e=Gp(n,r))),e===1)throw t=pc,no(n,0),Zr(n,i),Ln(n,kt()),t;if(e===6)Zr(n,i);else{if(r=n.current.alternate,!(i&30)&&!BA(r)&&(e=Rf(n,i),e===2&&(s=mp(n),s!==0&&(i=s,e=Gp(n,s))),e===1))throw t=pc,no(n,0),Zr(n,i),Ln(n,kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:js(n,An,dr);break;case 3:if(Zr(n,i),(i&130023424)===i&&(e=Kg+500-kt(),10<e)){if(ff(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Mn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ep(js.bind(null,n,An,dr),e);break}js(n,An,dr);break;case 4:if(Zr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FA(i/1960))-i,10<i){n.timeoutHandle=Ep(js.bind(null,n,An,dr),i);break}js(n,An,dr);break;case 5:js(n,An,dr);break;default:throw Error(oe(329))}}}return Ln(n,kt()),n.callbackNode===t?z1.bind(null,n):null}function Gp(n,e){var t=Vl;return n.current.memoizedState.isDehydrated&&(no(n,e).flags|=256),n=Rf(n,e),n!==2&&(e=An,An=t,e!==null&&Wp(e)),n}function Wp(n){An===null?An=n:An.push.apply(An,n)}function BA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ii(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(n,e){for(e&=~Yg,e&=~od,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ri(e),i=1<<t;n[t]=-1,e&=~i}}function hv(n){if(nt&6)throw Error(oe(327));va();var e=ff(n,0);if(!(e&1))return Ln(n,kt()),null;var t=Rf(n,e);if(n.tag!==0&&t===2){var i=mp(n);i!==0&&(e=i,t=Gp(n,i))}if(t===1)throw t=pc,no(n,0),Zr(n,e),Ln(n,kt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,js(n,An,dr),Ln(n,kt()),null}function qg(n,e){var t=nt;nt|=1;try{return n(e)}finally{nt=t,nt===0&&(Na=kt()+500,nd&&Ps())}}function mo(n){es!==null&&es.tag===0&&!(nt&6)&&va();var e=nt;nt|=1;var t=mi.transition,i=ft;try{if(mi.transition=null,ft=1,n)return n()}finally{ft=i,mi.transition=t,nt=e,!(nt&6)&&Ps()}}function $g(){Vn=aa.current,xt(aa)}function no(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,mA(t)),Ht!==null)for(t=Ht.return;t!==null;){var i=t;switch(Pg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gf();break;case 3:La(),xt(Rn),xt(mn),Bg();break;case 5:Fg(i);break;case 4:La();break;case 13:xt(At);break;case 19:xt(At);break;case 10:Dg(i.type._context);break;case 22:case 23:$g()}t=t.return}if(qt=n,Ht=n=ms(n.current,null),nn=Vn=e,Gt=0,pc=null,Yg=od=po=0,An=Vl=null,Qs!==null){for(e=0;e<Qs.length;e++)if(t=Qs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Qs=null}return n}function H1(n,e){do{var t=Ht;try{if(Ng(),Vu.current=wf,Tf){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tf=!1}if(ho=0,Yt=Vt=Rt=null,zl=!1,fc=0,Xg.current=null,t===null||t.return===null){Gt=1,pc=e,Ht=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ev(o);if(p!==null){p.flags&=-257,tv(p,o,a,s,e),p.mode&1&&J0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){J0(s,c,e),Zg();break e}l=Error(oe(426))}}else if(Et&&a.mode&1){var m=ev(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tv(m,o,a,s,e),Lg(Ia(l,a));break e}}s=l=Ia(l,a),Gt!==4&&(Gt=2),Vl===null?Vl=[s]:Vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=T1(s,l,e);Y0(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hs===null||!hs.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=w1(s,a,e);Y0(s,x);break e}}s=s.return}while(s!==null)}W1(t)}catch(w){e=w,Ht===t&&t!==null&&(Ht=t=t.return);continue}break}while(!0)}function V1(){var n=Af.current;return Af.current=wf,n===null?wf:n}function Zg(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),qt===null||!(po&268435455)&&!(od&268435455)||Zr(qt,nn)}function Rf(n,e){var t=nt;nt|=2;var i=V1();(qt!==n||nn!==e)&&(dr=null,no(n,e));do try{zA();break}catch(r){H1(n,r)}while(!0);if(Ng(),nt=t,Af.current=i,Ht!==null)throw Error(oe(261));return qt=null,nn=0,Gt}function zA(){for(;Ht!==null;)G1(Ht)}function HA(){for(;Ht!==null&&!dw();)G1(Ht)}function G1(n){var e=X1(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,e===null?W1(n):Ht=e,Xg.current=null}function W1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=DA(t,e),t!==null){t.flags&=32767,Ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Gt=6,Ht=null;return}}else if(t=NA(t,e,Vn),t!==null){Ht=t;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=n}while(e!==null);Gt===0&&(Gt=5)}function js(n,e,t){var i=ft,r=mi.transition;try{mi.transition=null,ft=1,VA(n,e,t,i)}finally{mi.transition=r,ft=i}return null}function VA(n,e,t,i){do va();while(es!==null);if(nt&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Mw(n,s),n===qt&&(Ht=qt=null,nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nu||(nu=!0,Y1(uf,function(){return va(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=mi.transition,mi.transition=null;var o=ft;ft=1;var a=nt;nt|=4,Xg.current=null,UA(n,t),F1(t,n),lA(Sp),df=!!xp,Sp=xp=null,n.current=t,kA(t),hw(),nt=a,ft=o,mi.transition=s}else n.current=t;if(nu&&(nu=!1,es=n,Cf=r),s=n.pendingLanes,s===0&&(hs=null),gw(t.stateNode),Ln(n,kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bf)throw bf=!1,n=Hp,Hp=null,n;return Cf&1&&n.tag!==0&&va(),s=n.pendingLanes,s&1?n===Vp?Gl++:(Gl=0,Vp=n):Gl=0,Ps(),null}function va(){if(es!==null){var n=TS(Cf),e=mi.transition,t=ft;try{if(mi.transition=null,ft=16>n?16:n,es===null)var i=!1;else{if(n=es,es=null,Cf=0,nt&6)throw Error(oe(331));var r=nt;for(nt|=4,ve=n.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Hl(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var d=u.sibling,p=u.return;if(O1(u),u===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var v=n.current;for(ve=v;ve!==null;){o=ve;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ve=y;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sd(9,a)}}catch(w){Dt(a,a.return,w)}if(a===o){ve=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ve=x;break e}ve=a.return}}if(nt=r,Ps(),Xi&&typeof Xi.onPostCommitFiberRoot=="function")try{Xi.onPostCommitFiberRoot(Zf,n)}catch{}i=!0}return i}finally{ft=t,mi.transition=e}}return!1}function pv(n,e,t){e=Ia(t,e),e=T1(n,e,1),n=ds(n,e,1),e=Mn(),n!==null&&(Rc(n,1,e),Ln(n,e))}function Dt(n,e,t){if(n.tag===3)pv(n,n,t);else for(;e!==null;){if(e.tag===3){pv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hs===null||!hs.has(i))){n=Ia(t,n),n=w1(e,n,1),e=ds(e,n,1),n=Mn(),e!==null&&(Rc(e,1,n),Ln(e,n));break}}e=e.return}}function GA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Mn(),n.pingedLanes|=n.suspendedLanes&t,qt===n&&(nn&t)===t&&(Gt===4||Gt===3&&(nn&130023424)===nn&&500>kt()-Kg?no(n,0):Yg|=t),Ln(n,e)}function j1(n,e){e===0&&(n.mode&1?(e=Xc,Xc<<=1,!(Xc&130023424)&&(Xc=4194304)):e=1);var t=Mn();n=wr(n,e),n!==null&&(Rc(n,e,t),Ln(n,t))}function WA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),j1(n,t)}function jA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),j1(n,t)}var X1;X1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rn.current)bn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return bn=!1,IA(n,e,t);bn=!!(n.flags&131072)}else bn=!1,Et&&e.flags&1048576&&$S(e,yf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wu(n,e),n=e.pendingProps;var r=Ca(e,mn.current);_a(e,t),r=Hg(null,e,i,n,r,t);var s=Vg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,_f(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ug(e),r.updater=rd,e.stateNode=r,r._reactInternals=e,Pp(e,i,n,t),e=Np(null,e,i,!0,s,t)):(e.tag=0,Et&&s&&Rg(e),vn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Wu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YA(i),n=Ti(i,n),r){case 0:e=Ip(null,e,i,n,t);break e;case 1:e=rv(null,e,i,n,t);break e;case 11:e=nv(null,e,i,n,t);break e;case 14:e=iv(null,e,i,Ti(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Ip(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),rv(n,e,i,r,t);case 3:e:{if(R1(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,n1(n,e),Mf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ia(Error(oe(423)),e),e=sv(n,e,i,t,r);break e}else if(i!==r){r=Ia(Error(oe(424)),e),e=sv(n,e,i,t,r);break e}else for(Kn=fs(e.stateNode.containerInfo.firstChild),$n=e,Et=!0,Ai=null,t=e1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ra(),i===r){e=Ar(n,e,t);break e}vn(n,e,i,t)}e=e.child}return e;case 5:return i1(e),n===null&&bp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Mp(i,r)?o=null:s!==null&&Mp(i,s)&&(e.flags|=32),C1(n,e),vn(n,e,o,t),e.child;case 6:return n===null&&bp(e),null;case 13:return P1(n,e,t);case 4:return kg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Pa(e,null,i,t):vn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),nv(n,e,i,r,t);case 7:return vn(n,e,e.pendingProps,t),e.child;case 8:return vn(n,e,e.pendingProps.children,t),e.child;case 12:return vn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,_t(xf,i._currentValue),i._currentValue=o,s!==null)if(Ii(s.value,o)){if(s.children===r.children&&!Rn.current){e=Ar(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Sr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_a(e,t),r=gi(r),i=i(r),e.flags|=1,vn(n,e,i,t),e.child;case 14:return i=e.type,r=Ti(i,e.pendingProps),r=Ti(i.type,r),iv(n,e,i,r,t);case 15:return A1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Wu(n,e),e.tag=1,Pn(i)?(n=!0,_f(e)):n=!1,_a(e,t),E1(e,i,r),Pp(e,i,r,t),Np(null,e,i,!0,n,t);case 19:return L1(n,e,t);case 22:return b1(n,e,t)}throw Error(oe(156,e.tag))};function Y1(n,e){return xS(n,e)}function XA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,e,t,i){return new XA(n,e,t,i)}function Qg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function YA(n){if(typeof n=="function")return Qg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===_g)return 11;if(n===vg)return 14}return 2}function ms(n,e){var t=n.alternate;return t===null?(t=fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Qg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Zo:return io(t.children,r,s,e);case gg:o=8,r|=8;break;case ep:return n=fi(12,t,e,r|2),n.elementType=ep,n.lanes=s,n;case tp:return n=fi(13,t,e,r),n.elementType=tp,n.lanes=s,n;case np:return n=fi(19,t,e,r),n.elementType=np,n.lanes=s,n;case iS:return ad(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case tS:o=10;break e;case nS:o=9;break e;case _g:o=11;break e;case vg:o=14;break e;case Yr:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=fi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function io(n,e,t,i){return n=fi(7,n,i,e),n.lanes=t,n}function ad(n,e,t,i){return n=fi(22,n,i,e),n.elementType=iS,n.lanes=t,n.stateNode={isHidden:!1},n}function eh(n,e,t){return n=fi(6,n,null,e),n.lanes=t,n}function th(n,e,t){return e=fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function KA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jg(n,e,t,i,r,s,o,a,l){return n=new KA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ug(s),n}function qA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$o,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function K1(n){if(!n)return Ss;n=n._reactInternals;e:{if(Eo(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(Pn(t))return KS(n,t,e)}return e}function q1(n,e,t,i,r,s,o,a,l){return n=Jg(t,i,!0,n,r,s,o,a,l),n.context=K1(null),t=n.current,i=Mn(),r=ps(t),s=Sr(i,r),s.callback=e??null,ds(t,s,r),n.current.lanes=r,Rc(n,r,i),Ln(n,i),n}function ld(n,e,t,i){var r=e.current,s=Mn(),o=ps(r);return t=K1(t),e.context===null?e.context=t:e.pendingContext=t,e=Sr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ds(r,e,o),n!==null&&(Pi(n,r,o,s),Hu(n,r,o)),o}function Pf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function e_(n,e){mv(n,e),(n=n.alternate)&&mv(n,e)}function $A(){return null}var $1=typeof reportError=="function"?reportError:function(n){console.error(n)};function t_(n){this._internalRoot=n}cd.prototype.render=t_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));ld(n,e,null,null)};cd.prototype.unmount=t_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;mo(function(){ld(null,n,null,null)}),e[Tr]=null}};function cd(n){this._internalRoot=n}cd.prototype.unstable_scheduleHydration=function(n){if(n){var e=bS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<$r.length&&e!==0&&e<$r[t].priority;t++);$r.splice(t,0,n),t===0&&RS(n)}};function n_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ud(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gv(){}function ZA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pf(o);s.call(c)}}var o=q1(e,i,n,0,null,!1,!1,"",gv);return n._reactRootContainer=o,n[Tr]=o.current,oc(n.nodeType===8?n.parentNode:n),mo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pf(l);a.call(c)}}var l=Jg(n,0,!1,null,null,!1,!1,"",gv);return n._reactRootContainer=l,n[Tr]=l.current,oc(n.nodeType===8?n.parentNode:n),mo(function(){ld(e,l,t,i)}),l}function fd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pf(o);a.call(l)}}ld(e,o,n,r)}else o=ZA(t,e,n,r,i);return Pf(o)}wS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=bl(e.pendingLanes);t!==0&&(Sg(e,t|1),Ln(e,kt()),!(nt&6)&&(Na=kt()+500,Ps()))}break;case 13:mo(function(){var i=wr(n,1);if(i!==null){var r=Mn();Pi(i,n,1,r)}}),e_(n,1)}};Mg=function(n){if(n.tag===13){var e=wr(n,134217728);if(e!==null){var t=Mn();Pi(e,n,134217728,t)}e_(n,134217728)}};AS=function(n){if(n.tag===13){var e=ps(n),t=wr(n,e);if(t!==null){var i=Mn();Pi(t,n,e,i)}e_(n,e)}};bS=function(){return ft};CS=function(n,e){var t=ft;try{return ft=n,e()}finally{ft=t}};dp=function(n,e,t){switch(e){case"input":if(sp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=td(i);if(!r)throw Error(oe(90));sS(i),sp(i,r)}}}break;case"textarea":aS(n,t);break;case"select":e=t.value,e!=null&&ha(n,!!t.multiple,e,!1)}};pS=qg;mS=mo;var QA={usingClientEntryPoint:!1,Events:[Lc,ta,td,dS,hS,qg]},pl={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JA={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vS(n),n===null?null:n.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance||$A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Zf=iu.inject(JA),Xi=iu}catch{}}ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QA;ni.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!n_(e))throw Error(oe(200));return qA(n,e,null,t)};ni.createRoot=function(n,e){if(!n_(n))throw Error(oe(299));var t=!1,i="",r=$1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jg(n,1,!1,null,null,t,!1,i,r),n[Tr]=e.current,oc(n.nodeType===8?n.parentNode:n),new t_(e)};ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=vS(e),n=n===null?null:n.stateNode,n};ni.flushSync=function(n){return mo(n)};ni.hydrate=function(n,e,t){if(!ud(e))throw Error(oe(200));return fd(null,n,e,!0,t)};ni.hydrateRoot=function(n,e,t){if(!n_(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=$1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=q1(e,null,n,1,t??null,r,!1,s,o),n[Tr]=e.current,oc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new cd(e)};ni.render=function(n,e,t){if(!ud(e))throw Error(oe(200));return fd(null,n,e,!1,t)};ni.unmountComponentAtNode=function(n){if(!ud(n))throw Error(oe(40));return n._reactRootContainer?(mo(function(){fd(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1};ni.unstable_batchedUpdates=qg;ni.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ud(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return fd(n,e,t,!1,i)};ni.version="18.3.1-next-f1338f8080-20240426";function Z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z1)}catch(n){console.error(n)}}Z1(),Zx.exports=ni;var eb=Zx.exports,_v=eb;Qh.createRoot=_v.createRoot,Qh.hydrateRoot=_v.hydrateRoot;var Q1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=r(s,i(a)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=r(o,a));return o}function r(s,o){return o?s?s+" "+o:s+o:s}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Q1);var tb=Q1.exports;const i_=ag(tb),nb=["xxl","xl","lg","md","sm","xs"],ib="xs",rb=Ae.createContext({prefixes:{},breakpoints:nb,minBreakpoint:ib});function J1(n,e){const{prefixes:t}=Ae.useContext(rb);return n||t[e]||e}var eM={exports:{}},sb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ob=sb,ab=ob;function tM(){}function nM(){}nM.resetWarningCache=tM;var lb=function(){function n(i,r,s,o,a,l){if(l!==ab){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:nM,resetWarningCache:tM};return t.PropTypes=t,t};eM.exports=lb();var cb=eM.exports;const qe=ag(cb),ub=["as","disabled"];function fb(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function db(n){return!n||n.trim()==="#"}function iM({tagName:n,disabled:e,href:t,target:i,rel:r,role:s,onClick:o,tabIndex:a=0,type:l}){n||(t!=null||i!=null||r!=null?n="a":n="button");const c={tagName:n};if(n==="button")return[{type:l||"button",disabled:e},c];const u=d=>{if((e||n==="a"&&db(t))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},f=d=>{d.key===" "&&(d.preventDefault(),u(d))};return n==="a"&&(t||(t="#"),e&&(t=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:t,target:n==="a"?i:void 0,"aria-disabled":e||void 0,rel:n==="a"?r:void 0,onClick:u,onKeyDown:f},c]}const hb=Ae.forwardRef((n,e)=>{let{as:t,disabled:i}=n,r=fb(n,ub);const[s,{tagName:o}]=iM(Object.assign({tagName:t,disabled:i},r));return ae.jsx(o,Object.assign({},r,s,{ref:e}))});hb.displayName="Button";const Nc=Ae.forwardRef(({as:n,bsPrefix:e,variant:t="primary",size:i,active:r=!1,disabled:s=!1,className:o,...a},l)=>{const c=J1(e,"btn"),[u,{tagName:f}]=iM({tagName:n,disabled:s,...a}),d=f;return ae.jsx(d,{...u,...a,ref:l,disabled:s,className:i_(o,c,r&&"active",t&&`${c}-${t}`,i&&`${c}-${i}`,a.href&&s&&"disabled")})});Nc.displayName="Button";function pb(n,e){let t=0;return Ae.Children.map(n,i=>Ae.isValidElement(i)?e(i,t++):i)}const vv=1e3;function mb(n,e,t){const i=(n-e)/(t-e)*100;return Math.round(i*vv)/vv}function yv({min:n,now:e,max:t,label:i,visuallyHidden:r,striped:s,animated:o,className:a,style:l,variant:c,bsPrefix:u,...f},d){return ae.jsx("div",{ref:d,...f,role:"progressbar",className:i_(a,`${u}-bar`,{[`bg-${c}`]:c,[`${u}-bar-animated`]:o,[`${u}-bar-striped`]:o||s}),style:{width:`${mb(e,n,t)}%`,...l},"aria-valuenow":e,"aria-valuemin":n,"aria-valuemax":t,children:r?ae.jsx("span",{className:"visually-hidden",children:i}):i})}const rM=Ae.forwardRef(({isChild:n=!1,...e},t)=>{const i={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...e};if(i.bsPrefix=J1(i.bsPrefix,"progress"),n)return yv(i,t);const{min:r,now:s,max:o,label:a,visuallyHidden:l,striped:c,animated:u,bsPrefix:f,variant:d,className:p,children:_,...g}=i;return ae.jsx("div",{ref:t,...g,className:i_(p,f),children:_?pb(_,m=>Ae.cloneElement(m,{isChild:!0})):yv({min:r,now:s,max:o,label:a,visuallyHidden:l,striped:c,animated:u,bsPrefix:f,variant:d},t)})});rM.displayName="ProgressBar";const gb=({onClick:n})=>ae.jsxs(ae.Fragment,{children:[ae.jsx(Nc,{variant:"dark",className:"start-button",onClick:n,size:"lg",children:"Start"}),ae.jsx("h4",{className:"tour-text",children:"Take a tour of my room"})]}),jn=({text:n,speed:e=30,onComplete:t,showCursor:i=!0})=>{const[r,s]=Ae.useState(""),[o,a]=Ae.useState(0),l=Ae.useRef(null),c=Ae.useRef(null),u=f=>{l.current===null&&(l.current=f),f-l.current>=e&&o<n.length&&(s(p=>p+n[o]),a(p=>p+1),l.current=f),o<n.length?c.current=requestAnimationFrame(u):t&&t()};return Ae.useEffect(()=>(c.current=requestAnimationFrame(u),()=>cancelAnimationFrame(c.current)),[o,n,e,t]),ae.jsxs("span",{children:[r,i&&ae.jsx("span",{className:"blinking-cursor",children:"|"})]})},_b=({onShowInteractiveElements:n})=>{const[e,t]=Ae.useState(!1),[i,r]=Ae.useState(!1),[s,o]=Ae.useState(!1);return ae.jsxs("div",{className:"info-text",children:[ae.jsx("h3",{children:ae.jsx(jn,{text:"Welcome to my room",speed:15,onComplete:()=>t(!0),showCursor:!e})}),e&&ae.jsx("p",{children:ae.jsx(jn,{text:"Hello world! I'm Jordi, a digital communicator passionate about interactive experiences based in Barcelona.",speed:15,onComplete:()=>r(!0),showCursor:!i})}),i&&ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{children:ae.jsx(jn,{text:"To get to know me a bit better, take a tour of my room!",speed:15,onComplete:()=>o(!0),showCursor:!0})}),s&&ae.jsx(Nc,{variant:"dark",onClick:n,children:"Next"})]})]})},vb=({onShowUserControls:n})=>{const[e,t]=Ae.useState(!1),[i,r]=Ae.useState(!1),[s,o]=Ae.useState(!1);return ae.jsxs("div",{className:"info-text",children:[ae.jsx("h3",{children:ae.jsx(jn,{text:"Interactive elements",speed:15,onComplete:()=>t(!0),showCursor:!e})}),e&&ae.jsx(ae.Fragment,{children:ae.jsx("p",{children:ae.jsx(jn,{text:"Feel free to explore and click around the interactive elements to discover more about each item and its significance!",speed:15,onComplete:()=>r(!0),showCursor:!i})})}),i&&ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{children:ae.jsx(jn,{text:"What are the clickable elements? Well, you'll have to find out.",speed:15,onComplete:()=>o(!0),showCursor:!0})}),s&&ae.jsx(Nc,{variant:"dark",onClick:n,children:"Next"})]})]})},yb=({onHide:n})=>{const[e,t]=Ae.useState(!1),[i,r]=Ae.useState(!1),[s,o]=Ae.useState(!1),[a,l]=Ae.useState(!1),[c,u]=Ae.useState(!1);return ae.jsxs("div",{className:"info-text",children:[ae.jsx("h3",{children:ae.jsx(jn,{text:"Controls to move around",speed:15,onComplete:()=>t(!0),showCursor:!e})}),e&&ae.jsx("p",{children:ae.jsx(jn,{text:"Use the controls below to zoom in, zoom out, or change the camera angles while exploring the room.",speed:15,onComplete:()=>r(!0),showCursor:!i})}),i&&ae.jsxs("ul",{children:[ae.jsx("li",{children:ae.jsx(jn,{text:"Zoom in/out: Use the mouse wheel.",speed:15,onComplete:()=>o(!0),showCursor:!1})}),s&&ae.jsx("li",{children:ae.jsx(jn,{text:"Rotate angle: Drag the mouse.",speed:15,onComplete:()=>l(!0),showCursor:!1})}),a&&ae.jsx("li",{children:ae.jsx(jn,{text:"Move camera: Hold Shift and drag the mouse.",speed:15,onComplete:()=>u(!0),showCursor:!1})})]}),c&&ae.jsx("button",{className:"btn btn-dark",onClick:n,children:"Next"})]})},xb=({progress:n})=>ae.jsxs("div",{className:"loading-bar",children:[ae.jsx(rM,{now:n,variant:"dark",animated:!0})," ",ae.jsxs("h4",{className:"percentage text-center mt-2",children:[n.toFixed(0),"%"]})," "]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const r_="166",Ro={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sb=0,xv=1,Mb=2,sM=1,Eb=2,fr=3,br=0,In=1,zi=2,gs=0,ya=1,Sv=2,Mv=3,Ev=4,Tb=5,Ks=100,wb=101,Ab=102,bb=103,Cb=104,Rb=200,Pb=201,Lb=202,Ib=203,jp=204,Xp=205,Nb=206,Db=207,Ob=208,Ub=209,kb=210,Fb=211,Bb=212,zb=213,Hb=214,Vb=0,Gb=1,Wb=2,Lf=3,jb=4,Xb=5,Yb=6,Kb=7,oM=0,qb=1,$b=2,_s=0,Zb=1,Qb=2,Jb=3,dd=4,eC=5,tC=6,nC=7,Tv="attached",iC="detached",aM=300,Da=301,Oa=302,Yp=303,Kp=304,hd=306,Ua=1e3,ts=1001,If=1002,Sn=1003,lM=1004,Rl=1005,Xn=1006,Ku=1007,yr=1008,Cr=1009,cM=1010,uM=1011,mc=1012,s_=1013,go=1014,Ci=1015,Dc=1016,o_=1017,a_=1018,ka=1020,fM=35902,dM=1021,hM=1022,di=1023,pM=1024,mM=1025,xa=1026,Fa=1027,l_=1028,c_=1029,gM=1030,u_=1031,f_=1033,qu=33776,$u=33777,Zu=33778,Qu=33779,qp=35840,$p=35841,Zp=35842,Qp=35843,Jp=36196,em=37492,tm=37496,nm=37808,im=37809,rm=37810,sm=37811,om=37812,am=37813,lm=37814,cm=37815,um=37816,fm=37817,dm=37818,hm=37819,pm=37820,mm=37821,Ju=36492,gm=36494,_m=36495,_M=36283,vm=36284,ym=36285,xm=36286,gc=2300,_c=2301,nh=2302,wv=2400,Av=2401,bv=2402,rC=2500,sC=0,vM=1,Sm=2,oC=3200,aC=3201,yM=0,lC=1,Qr="",yn="srgb",sn="srgb-linear",d_="display-p3",pd="display-p3-linear",Nf="linear",yt="srgb",Df="rec709",Of="p3",Lo=7680,Cv=519,cC=512,uC=513,fC=514,xM=515,dC=516,hC=517,pC=518,mC=519,Mm=35044,Rv="300 es",xr=2e3,Uf=2001;class To{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pv=1234567;const Wl=Math.PI/180,Ba=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function h_(n,e){return(n%e+e)%e}function gC(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function _C(n,e,t){return n!==e?(t-n)/(e-n):0}function jl(n,e,t){return(1-t)*n+t*e}function vC(n,e,t,i){return jl(n,e,1-Math.exp(-t*i))}function yC(n,e=1){return e-Math.abs(h_(n,e*2)-e)}function xC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function SC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function MC(n,e){return n+Math.floor(Math.random()*(e-n+1))}function EC(n,e){return n+Math.random()*(e-n)}function TC(n){return n*(.5-Math.random())}function wC(n){n!==void 0&&(Pv=n);let e=Pv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AC(n){return n*Wl}function bC(n){return n*Ba}function CC(n){return(n&n-1)===0&&n!==0}function RC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LC(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kf={DEG2RAD:Wl,RAD2DEG:Ba,generateUUID:Li,clamp:tn,euclideanModulo:h_,mapLinear:gC,inverseLerp:_C,lerp:jl,damp:vC,pingpong:yC,smoothstep:xC,smootherstep:SC,randInt:MC,randFloat:EC,randFloatSpread:TC,seededRandom:wC,degToRad:AC,radToDeg:bC,isPowerOfTwo:CC,ceilPowerOfTwo:RC,floorPowerOfTwo:PC,setQuaternionFromProperEuler:LC,normalize:ct,denormalize:bi};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],y=r[4],x=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*g+a*v+l*w,s[3]=o*m+a*y+l*A,s[6]=o*h+a*x+l*T,s[1]=c*g+u*v+f*w,s[4]=c*m+u*y+f*A,s[7]=c*h+u*x+f*T,s[2]=d*g+p*v+_*w,s[5]=d*m+p*y+_*A,s[8]=d*h+p*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ih.makeScale(e,t)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new Ye;function SM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function IC(){const n=vc("canvas");return n.style.display="block",n}const Lv={};function p_(n){n in Lv||(Lv[n]=!0,console.warn(n))}function NC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Iv=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nv=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ru={[sn]:{transfer:Nf,primaries:Df,toReference:n=>n,fromReference:n=>n},[yn]:{transfer:yt,primaries:Df,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pd]:{transfer:Nf,primaries:Of,toReference:n=>n.applyMatrix3(Nv),fromReference:n=>n.applyMatrix3(Iv)},[d_]:{transfer:yt,primaries:Of,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nv),fromReference:n=>n.applyMatrix3(Iv).convertLinearToSRGB()}},DC=new Set([sn,pd]),it={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!DC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ru[e].toReference,r=ru[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ru[n].primaries},getTransfer:function(n){return n===Qr?Nf:ru[n].transfer}};function Sa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Io;class OC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Io===void 0&&(Io=vc("canvas")),Io.width=e.width,Io.height=e.height;const i=Io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Io}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Sa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sa(t[i]/255)*255):t[i]=Sa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UC=0;class MM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sh(r[o].image)):s.push(sh(r[o]))}else s=sh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kC=0;class $t extends To{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=ts,r=ts,s=Xn,o=yr,a=di,l=Cr,c=$t.DEFAULT_ANISOTROPY,u=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=Li(),this.name="",this.source=new MM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=aM;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,w=(h+1)/2,A=(u+d)/4,T=(f+g)/4,R=(_+m)/4;return y>x&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=T/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FC extends To{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new MM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _o extends FC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class EM extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BC extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*g,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,h*v);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+g*x,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-a*p,e[t+2]=c*_+u*p+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new D,Dv=new Ni;class Dr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),su.copy(i.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),ou.subVectors(this.max,ml),No.subVectors(e.a,ml),Do.subVectors(e.b,ml),Oo.subVectors(e.c,ml),Br.subVectors(Do,No),zr.subVectors(Oo,Do),Ns.subVectors(No,Oo);let t=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-Ns.z,Ns.y,Br.z,0,-Br.x,zr.z,0,-zr.x,Ns.z,0,-Ns.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-Ns.y,Ns.x,0];return!ah(t,No,Do,Oo,ou)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,No,Do,Oo,ou))?!1:(au.crossVectors(Br,zr),t=[au.x,au.y,au.z],ah(t,No,Do,Oo,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,su=new Dr,No=new D,Do=new D,Oo=new D,Br=new D,zr=new D,Ns=new D,ml=new D,ou=new D,au=new D,Ds=new D;function ah(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ds.fromArray(n,s);const a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=i.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zC=new Dr,gl=new D,lh=new D;class Ji{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);const t=gl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(lh)),this.expandByPoint(gl.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new D,ch=new D,lu=new D,Hr=new D,uh=new D,cu=new D,fh=new D;class el{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ch.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(ch);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lu),a=Hr.dot(this.direction),l=-Hr.dot(lu),c=Hr.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ch).addScaledVector(lu,d),p}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,i,r,s){uh.subVectors(t,e),cu.subVectors(i,e),fh.crossVectors(uh,cu);let o=this.direction.dot(fh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=a*this.direction.dot(cu.crossVectors(Hr,cu));if(l<0)return null;const c=a*this.direction.dot(uh.cross(Hr));if(c<0||l+c>o)return null;const u=-a*Hr.dot(fh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,_,g,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Uo.setFromMatrixColumn(e,0).length(),s=1/Uo.setFromMatrixColumn(e,1).length(),o=1/Uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HC,e,VC)}lookAt(e,t,i){const r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Vr.crossVectors(i,zn),Vr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Vr.crossVectors(i,zn)),Vr.normalize(),uu.crossVectors(zn,Vr),r[0]=Vr.x,r[4]=uu.x,r[8]=zn.x,r[1]=Vr.y,r[5]=uu.y,r[9]=zn.y,r[2]=Vr.z,r[6]=uu.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],y=i[7],x=i[11],w=i[15],A=r[0],T=r[4],R=r[8],M=r[12],E=r[1],L=r[5],F=r[9],U=r[13],$=r[2],K=r[6],H=r[10],q=r[14],N=r[3],Z=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*E+l*$+c*N,s[4]=o*T+a*L+l*K+c*Z,s[8]=o*R+a*F+l*H+c*Q,s[12]=o*M+a*U+l*q+c*re,s[1]=u*A+f*E+d*$+p*N,s[5]=u*T+f*L+d*K+p*Z,s[9]=u*R+f*F+d*H+p*Q,s[13]=u*M+f*U+d*q+p*re,s[2]=_*A+g*E+m*$+h*N,s[6]=_*T+g*L+m*K+h*Z,s[10]=_*R+g*F+m*H+h*Q,s[14]=_*M+g*U+m*q+h*re,s[3]=v*A+y*E+x*$+w*N,s[7]=v*T+y*L+x*K+w*Z,s[11]=v*R+y*F+x*H+w*Q,s[15]=v*M+y*U+x*q+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+g*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=f*m*c-g*d*c+g*l*p-a*m*p-f*l*h+a*d*h,y=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*g*c-_*f*c+_*a*p-o*g*p-u*a*h+o*f*h,w=_*f*l-u*g*l-_*a*d+o*g*d+u*a*m-o*f*m,A=t*v+i*y+r*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*h+t*d*h)*T,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*h-t*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*T,e[8]=x*T,e[9]=(_*f*s-u*g*s-_*i*p+t*g*p+u*i*h-t*f*h)*T,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*T,e[12]=w*T,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*T,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,g=o*u,m=o*f,h=a*f,v=l*c,y=l*u,x=l*f,w=i.x,A=i.y,T=i.z;return r[0]=(1-(g+h))*w,r[1]=(p+x)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+y)*T,r[9]=(m-v)*T,r[10]=(1-(d+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Uo.set(r[0],r[1],r[2]).length();const o=Uo.set(r[4],r[5],r[6]).length(),a=Uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const c=1/s,u=1/o,f=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=f,Mi.elements[9]*=f,Mi.elements[10]*=f,t.setFromRotationMatrix(Mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===xr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Uf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let _,g;if(a===xr)_=(o+s)*f,g=-2*f;else if(a===Uf)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Uo=new D,Mi=new je,HC=new D(0,0,0),VC=new D(1,1,1),Vr=new D,uu=new D,zn=new D,Ov=new je,Uv=new Ni;class $i{constructor(e=0,t=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ov,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";let m_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},GC=0;const kv=new D,ko=new Ni,or=new je,fu=new D,_l=new D,WC=new D,jC=new Ni,Fv=new D(1,0,0),Bv=new D(0,1,0),zv=new D(0,0,1),Hv={type:"added"},XC={type:"removed"},Fo={type:"childadded",child:null},dh={type:"childremoved",child:null};class Mt extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GC++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new $i,i=new Ni,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Ye}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.multiply(ko),this}rotateOnWorldAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.premultiply(ko),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis(zv,e)}translateOnAxis(e,t){return kv.copy(e).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis(zv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fu.copy(e):fu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(_l,fu,this.up):or.lookAt(fu,_l,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),ko.setFromRotationMatrix(or),this.quaternion.premultiply(ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hv),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XC),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hv),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,WC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,jC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new D,ar=new D,hh=new D,lr=new D,Bo=new D,zo=new D,Vv=new D,ph=new D,mh=new D,gh=new D;class Hi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ei.subVectors(e,t),r.cross(Ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ei.subVectors(r,t),ar.subVectors(i,t),hh.subVectors(e,t);const o=Ei.dot(Ei),a=Ei.dot(ar),l=Ei.dot(hh),c=ar.dot(ar),u=ar.dot(hh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static isFrontFacing(e,t,i,r){return Ei.subVectors(i,t),ar.subVectors(e,t),Ei.cross(ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ei.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Bo.subVectors(r,i),zo.subVectors(s,i),ph.subVectors(e,i);const l=Bo.dot(ph),c=zo.dot(ph);if(l<=0&&c<=0)return t.copy(i);mh.subVectors(e,r);const u=Bo.dot(mh),f=zo.dot(mh);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Bo,o);gh.subVectors(e,s);const p=Bo.dot(gh),_=zo.dot(gh);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(zo,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Vv.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Vv,a);const h=1/(m+g+d);return o=g*h,a=d*h,t.copy(i).addScaledVector(Bo,o).addScaledVector(zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const TM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},du={h:0,s:0,l:0};function _h(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=h_(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=_h(o,s,e+1/3),this.g=_h(o,s,e),this.b=_h(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=TM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=rh(e.r),this.g=rh(e.g),this.b=rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return it.fromWorkingColorSpace(cn.copy(this),e),Math.round(tn(cn.r*255,0,255))*65536+Math.round(tn(cn.g*255,0,255))*256+Math.round(tn(cn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=yn){it.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(du);const i=jl(Gr.h,du.h,t),r=jl(Gr.s,du.s,t),s=jl(Gr.l,du.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ge;Ge.NAMES=TM;let YC=0;class Ki extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YC++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ya,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jp,this.blendDst=Xp,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Lf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jp&&(i.blendSrc=this.blendSrc),this.blendDst!==Xp&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ns extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=oM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new D,hu=new De;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return p_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hu.fromBufferAttribute(this,t),hu.applyMatrix3(e),this.setXY(t,hu.x,hu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}}class wM extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class AM extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mr extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KC=0;const oi=new je,vh=new Mt,Ho=new D,Hn=new Dr,vl=new Dr,Xt=new D;class er extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SM(e)?AM:wM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vl.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Hn.min,vl.min),Hn.expandByPoint(Xt),Xt.addVectors(Hn.max,vl.max),Hn.expandByPoint(Xt)):(Hn.expandByPoint(vl.min),Hn.expandByPoint(vl.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Ho.fromBufferAttribute(e,c),Xt.add(Ho)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;const c=new D,u=new D,f=new D,d=new De,p=new De,_=new De,g=new D,m=new D;function h(R,M,E){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[R].add(g),a[M].add(g),a[E].add(g),l[R].add(m),l[M].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const E=v[R],L=E.start,F=E.count;for(let U=L,$=L+F;U<$;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new D,x=new D,w=new D,A=new D;function T(R){w.fromBufferAttribute(r,R),A.copy(w);const M=a[R];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(A,M);const L=x.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,M=v.length;R<M;++R){const E=v[R],L=E.start,F=E.count;for(let U=L,$=L+F;U<$;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new En(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new je,Os=new el,pu=new Ji,Wv=new D,Vo=new D,Go=new D,Wo=new D,yh=new D,mu=new D,gu=new De,_u=new De,vu=new De,jv=new D,Xv=new D,Yv=new D,yu=new D,xu=new D;class Cn extends Mt{constructor(e=new er,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(yh.fromBufferAttribute(f,e),o?mu.addScaledVector(yh,u):mu.addScaledVector(yh.sub(t),u))}t.add(mu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pu.copy(i.boundingSphere),pu.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(pu.containsPoint(Os.origin)===!1&&(Os.intersectSphere(pu,Wv)===null||Os.origin.distanceToSquared(Wv)>(e.far-e.near)**2))&&(Gv.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Gv),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=Su(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Su(this,o,e,i,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const A=x,T=x+1,R=x+2;r=Su(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,y=m+1,x=m+2;r=Su(this,o,e,i,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qC(n,e,t,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;xu.copy(a),xu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xu);return c<t.near||c>t.far?null:{distance:c,point:xu.clone(),object:n}}function Su(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Vo),n.getVertexPosition(l,Go),n.getVertexPosition(c,Wo);const u=qC(n,e,t,i,Vo,Go,Wo,yu);if(u){r&&(gu.fromBufferAttribute(r,a),_u.fromBufferAttribute(r,l),vu.fromBufferAttribute(r,c),u.uv=Hi.getInterpolation(yu,Vo,Go,Wo,gu,_u,vu,new De)),s&&(gu.fromBufferAttribute(s,a),_u.fromBufferAttribute(s,l),vu.fromBufferAttribute(s,c),u.uv1=Hi.getInterpolation(yu,Vo,Go,Wo,gu,_u,vu,new De)),o&&(jv.fromBufferAttribute(o,a),Xv.fromBufferAttribute(o,l),Yv.fromBufferAttribute(o,c),u.normal=Hi.getInterpolation(yu,Vo,Go,Wo,jv,Xv,Yv,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Hi.getNormal(Vo,Go,Wo,f.normal),u.face=f}return u}class tl extends er{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mr(c,3)),this.setAttribute("normal",new Mr(u,3)),this.setAttribute("uv",new Mr(f,2));function _(g,m,h,v,y,x,w,A,T,R,M){const E=x/T,L=w/R,F=x/2,U=w/2,$=A/2,K=T+1,H=R+1;let q=0,N=0;const Z=new D;for(let Q=0;Q<H;Q++){const re=Q*L-U;for(let me=0;me<K;me++){const He=me*E-F;Z[g]=He*v,Z[m]=re*y,Z[h]=$,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[h]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(me/T),f.push(1-Q/R),q+=1}}for(let Q=0;Q<R;Q++)for(let re=0;re<T;re++){const me=d+re+K*Q,He=d+re+K*(Q+1),j=d+(re+1)+K*(Q+1),J=d+(re+1)+K*Q;l.push(me,He,J),l.push(He,j,J),N+=6}a.addGroup(p,N,M),p+=N,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=za(n[t]);for(const r in i)e[r]=i[r]}return e}function $C(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ZC={clone:za,merge:_n};var QC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ms extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QC,this.fragmentShader=JC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=$C(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class CM extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new D,Kv=new De,qv=new De;class fn extends CM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Kv,qv),t.subVectors(qv,Kv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jo=-90,Xo=1;class eR extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(jo,Xo,e,t);r.layers=this.layers,this.add(r);const s=new fn(jo,Xo,e,t);s.layers=this.layers,this.add(s);const o=new fn(jo,Xo,e,t);o.layers=this.layers,this.add(o);const a=new fn(jo,Xo,e,t);a.layers=this.layers,this.add(a);const l=new fn(jo,Xo,e,t);l.layers=this.layers,this.add(l);const c=new fn(jo,Xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class RM extends $t{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Da,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tR extends _o{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new RM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tl(5,5,5),s=new Ms({name:"CubemapFromEquirect",uniforms:za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:gs});s.uniforms.tEquirect.value=t;const o=new Cn(r,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=Xn),new eR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const xh=new D,nR=new D,iR=new Ye;class qr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xh.subVectors(i,t).cross(nR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iR.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Ji,Mu=new D;class g_{constructor(e=new qr,t=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+v).normalize(),i[3].setComponents(l-o,d-u,m-_,x-v).normalize(),i[4].setComponents(l-a,d-f,m-g,x-y).normalize(),t===xr)i[5].setComponents(l+a,d+f,m+g,x+y).normalize();else if(t===Uf)i[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Mu.x=r.normal.x>0?e.max.x:e.min.x,Mu.y=r.normal.y>0?e.max.y:e.min.y,Mu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function PM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rR(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const g=d[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class md extends er{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let y=0;y<c;y++){const x=y*f-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,x=v+c*(h+1),w=v+1+c*(h+1),A=v+1+c*h;p.push(y,x,A),p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new Mr(_,3)),this.setAttribute("normal",new Mr(g,3)),this.setAttribute("uv",new Mr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.width,e.height,e.widthSegments,e.heightSegments)}}var sR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_R=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OR="gl_FragColor = linearToOutputTexel( gl_FragColor );",UR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$R=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_P=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$P=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,d2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:sR,alphahash_pars_fragment:oR,alphamap_fragment:aR,alphamap_pars_fragment:lR,alphatest_fragment:cR,alphatest_pars_fragment:uR,aomap_fragment:fR,aomap_pars_fragment:dR,batching_pars_vertex:hR,batching_vertex:pR,begin_vertex:mR,beginnormal_vertex:gR,bsdfs:_R,iridescence_fragment:vR,bumpmap_pars_fragment:yR,clipping_planes_fragment:xR,clipping_planes_pars_fragment:SR,clipping_planes_pars_vertex:MR,clipping_planes_vertex:ER,color_fragment:TR,color_pars_fragment:wR,color_pars_vertex:AR,color_vertex:bR,common:CR,cube_uv_reflection_fragment:RR,defaultnormal_vertex:PR,displacementmap_pars_vertex:LR,displacementmap_vertex:IR,emissivemap_fragment:NR,emissivemap_pars_fragment:DR,colorspace_fragment:OR,colorspace_pars_fragment:UR,envmap_fragment:kR,envmap_common_pars_fragment:FR,envmap_pars_fragment:BR,envmap_pars_vertex:zR,envmap_physical_pars_fragment:ZR,envmap_vertex:HR,fog_vertex:VR,fog_pars_vertex:GR,fog_fragment:WR,fog_pars_fragment:jR,gradientmap_pars_fragment:XR,lightmap_pars_fragment:YR,lights_lambert_fragment:KR,lights_lambert_pars_fragment:qR,lights_pars_begin:$R,lights_toon_fragment:QR,lights_toon_pars_fragment:JR,lights_phong_fragment:eP,lights_phong_pars_fragment:tP,lights_physical_fragment:nP,lights_physical_pars_fragment:iP,lights_fragment_begin:rP,lights_fragment_maps:sP,lights_fragment_end:oP,logdepthbuf_fragment:aP,logdepthbuf_pars_fragment:lP,logdepthbuf_pars_vertex:cP,logdepthbuf_vertex:uP,map_fragment:fP,map_pars_fragment:dP,map_particle_fragment:hP,map_particle_pars_fragment:pP,metalnessmap_fragment:mP,metalnessmap_pars_fragment:gP,morphinstance_vertex:_P,morphcolor_vertex:vP,morphnormal_vertex:yP,morphtarget_pars_vertex:xP,morphtarget_vertex:SP,normal_fragment_begin:MP,normal_fragment_maps:EP,normal_pars_fragment:TP,normal_pars_vertex:wP,normal_vertex:AP,normalmap_pars_fragment:bP,clearcoat_normal_fragment_begin:CP,clearcoat_normal_fragment_maps:RP,clearcoat_pars_fragment:PP,iridescence_pars_fragment:LP,opaque_fragment:IP,packing:NP,premultiplied_alpha_fragment:DP,project_vertex:OP,dithering_fragment:UP,dithering_pars_fragment:kP,roughnessmap_fragment:FP,roughnessmap_pars_fragment:BP,shadowmap_pars_fragment:zP,shadowmap_pars_vertex:HP,shadowmap_vertex:VP,shadowmask_pars_fragment:GP,skinbase_vertex:WP,skinning_pars_vertex:jP,skinning_vertex:XP,skinnormal_vertex:YP,specularmap_fragment:KP,specularmap_pars_fragment:qP,tonemapping_fragment:$P,tonemapping_pars_fragment:ZP,transmission_fragment:QP,transmission_pars_fragment:JP,uv_pars_fragment:e2,uv_pars_vertex:t2,uv_vertex:n2,worldpos_vertex:i2,background_vert:r2,background_frag:s2,backgroundCube_vert:o2,backgroundCube_frag:a2,cube_vert:l2,cube_frag:c2,depth_vert:u2,depth_frag:f2,distanceRGBA_vert:d2,distanceRGBA_frag:h2,equirect_vert:p2,equirect_frag:m2,linedashed_vert:g2,linedashed_frag:_2,meshbasic_vert:v2,meshbasic_frag:y2,meshlambert_vert:x2,meshlambert_frag:S2,meshmatcap_vert:M2,meshmatcap_frag:E2,meshnormal_vert:T2,meshnormal_frag:w2,meshphong_vert:A2,meshphong_frag:b2,meshphysical_vert:C2,meshphysical_frag:R2,meshtoon_vert:P2,meshtoon_frag:L2,points_vert:I2,points_frag:N2,shadow_vert:D2,shadow_frag:O2,sprite_vert:U2,sprite_frag:k2},de={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ki={basic:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:_n([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:_n([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:_n([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:_n([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:_n([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:_n([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:_n([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:_n([de.lights,de.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ki.physical={uniforms:_n([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Eu={r:0,b:0,g:0},ks=new $i,F2=new je;function B2(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const x=_(v);x===null?h(a,l):x&&x.isColor&&(h(x,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=_(y);x&&(x.isCubeTexture||x.mapping===hd)?(u===void 0&&(u=new Cn(new tl(1,1,1),new Ms({name:"BackgroundCubeMaterial",uniforms:za(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ks.copy(y.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F2.makeRotationFromEuler(ks)),u.material.toneMapped=it.getTransfer(x.colorSpace)!==yt,(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Cn(new md(2,2),new Ms({name:"BackgroundMaterial",uniforms:za(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(Eu,bM(n)),i.buffers.color.setClear(Eu.r,Eu.g,Eu.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function z2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,L,F,U,$){let K=!1;const H=f(U,F,L);s!==H&&(s=H,c(s.object)),K=p(E,U,F,$),K&&_(E,U,F,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(E,L,F,U),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,L,F){const U=F.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let K=$[L.id];K===void 0&&(K={},$[L.id]=K);let H=K[U];return H===void 0&&(H=d(l()),K[U]=H),H}function d(E){const L=[],F=[],U=[];for(let $=0;$<t;$++)L[$]=0,F[$]=0,U[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:U,object:E,attributes:{},index:null}}function p(E,L,F,U){const $=s.attributes,K=L.attributes;let H=0;const q=F.getAttributes();for(const N in q)if(q[N].location>=0){const Q=$[N];let re=K[N];if(re===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function _(E,L,F,U){const $={},K=L.attributes;let H=0;const q=F.getAttributes();for(const N in q)if(q[N].location>=0){let Q=K[N];Q===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),$[N]=re,H++}s.attributes=$,s.attributesNum=H,s.index=U}function g(){const E=s.newAttributes;for(let L=0,F=E.length;L<F;L++)E[L]=0}function m(E){h(E,0)}function h(E,L){const F=s.newAttributes,U=s.enabledAttributes,$=s.attributeDivisors;F[E]=1,U[E]===0&&(n.enableVertexAttribArray(E),U[E]=1),$[E]!==L&&(n.vertexAttribDivisor(E,L),$[E]=L)}function v(){const E=s.newAttributes,L=s.enabledAttributes;for(let F=0,U=L.length;F<U;F++)L[F]!==E[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function y(E,L,F,U,$,K,H){H===!0?n.vertexAttribIPointer(E,L,F,$,K):n.vertexAttribPointer(E,L,F,U,$,K)}function x(E,L,F,U){g();const $=U.attributes,K=F.getAttributes(),H=L.defaultAttributeValues;for(const q in K){const N=K[q];if(N.location>=0){let Z=$[q];if(Z===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor)),Z!==void 0){const Q=Z.normalized,re=Z.itemSize,me=e.get(Z);if(me===void 0)continue;const He=me.buffer,j=me.type,J=me.bytesPerElement,ce=j===n.INT||j===n.UNSIGNED_INT||Z.gpuType===s_;if(Z.isInterleavedBufferAttribute){const fe=Z.data,Re=fe.stride,Fe=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<N.locationSize;Ve++)h(N.location+Ve,fe.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<N.locationSize;Ve++)m(N.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ve=0;Ve<N.locationSize;Ve++)y(N.location+Ve,re/N.locationSize,j,Q,Re*J,(Fe+re/N.locationSize*Ve)*J,ce)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)h(N.location+fe,Z.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let fe=0;fe<N.locationSize;fe++)y(N.location+fe,re/N.locationSize,j,Q,re*J,re/N.locationSize*fe*J,ce)}}else if(H!==void 0){const Q=H[q];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(N.location,Q);break;case 3:n.vertexAttrib3fv(N.location,Q);break;case 4:n.vertexAttrib4fv(N.location,Q);break;default:n.vertexAttrib1fv(N.location,Q)}}}}v()}function w(){R();for(const E in i){const L=i[E];for(const F in L){const U=L[F];for(const $ in U)u(U[$].object),delete U[$];delete L[F]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const F in L){const U=L[F];for(const $ in U)u(U[$].object),delete U[$];delete L[F]}delete i[E.id]}function T(E){for(const L in i){const F=i[L];if(F[E.id]===void 0)continue;const U=F[E.id];for(const $ in U)u(U[$].object),delete U[$];delete F[E.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function H2(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<d.length;g++)t.update(_,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==di&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Dc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!T)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:w}}function G2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new qr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=u(_,d,y,p);for(let w=0;w!==y;++w)x[w]=t[w];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function W2(n){let e=new WeakMap;function t(o,a){return a===Yp?o.mapping=Da:a===Kp&&(o.mapping=Oa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yp||a===Kp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tR(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gd extends CM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const la=4,$v=[.125,.215,.35,.446,.526,.582],qs=20,Sh=new gd,Zv=new Ge;let Mh=null,Eh=0,Th=0,wh=!1;const Xs=(1+Math.sqrt(5))/2,Yo=1/Xs,Qv=[new D(-Xs,Yo,0),new D(Xs,Yo,0),new D(-Yo,0,Xs),new D(Yo,0,Xs),new D(0,Xs,-Yo),new D(0,Xs,Yo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ny(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ty(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,Eh,Th),this._renderer.xr.enabled=wh,e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Da||e.mapping===Oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Dc,format:di,colorSpace:sn,depthBuffer:!1},r=ey(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ey(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j2(s)),this._blurMaterial=X2(s,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Sh)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Zv),u.toneMapping=_s,u.autoClear=!1;const p=new ns({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new Cn(new tl,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Zv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Tu(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Da||e.mapping===Oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ny()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ty());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qv[(r-s-1)%Qv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):qs;m>qs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qs}`);const h=[];let v=0;for(let T=0;T<qs;++T){const R=T/g,M=Math.exp(-R*R/2);h.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const x=this._sizeLods[r],w=3*x*(r>y-la?r-y+la:0),A=4*(this._cubeSize-x);Tu(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Sh)}}function j2(n){const e=[],t=[],i=[];let r=n;const s=n-la+1+$v.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-la?l=$v[o-n+la-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(M,g*_*A),y.set(d,m*_*A);const E=[A,A,A,A,A,A];x.set(E,h*_*A)}const w=new er;w.setAttribute("position",new En(v,g)),w.setAttribute("uv",new En(y,m)),w.setAttribute("faceIndex",new En(x,h)),e.push(w),r>la&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ey(n,e,t){const i=new _o(n,e,t);return i.texture.mapping=hd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function X2(n,e,t){const i=new Float32Array(qs),r=new D(0,1,0);return new Ms({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ty(){return new Ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ny(){return new Ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function __(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yp||l===Kp,u=l===Da||l===Oa;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jv(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Jv(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&p_("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function q2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],A=v[y+1],T=v[y+2];d.push(w,A,A,T,T,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,A=y+1,T=y+2;d.push(w,A,A,T,T,w)}}else return;const m=new(SM(d)?AM:wM)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $2(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function f(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Z2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Q2(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*A*4*f),R=new EM(T,w,A,f);R.type=Ci,R.needsUpdate=!0;const M=x*4;for(let L=0;L<f;L++){const F=h[L],U=v[L],$=y[L],K=w*A*4*L;for(let H=0;H<F.count;H++){const q=H*M;_===!0&&(r.fromBufferAttribute(F,H),T[K+q+0]=r.x,T[K+q+1]=r.y,T[K+q+2]=r.z,T[K+q+3]=0),g===!0&&(r.fromBufferAttribute(U,H),T[K+q+4]=r.x,T[K+q+5]=r.y,T[K+q+6]=r.z,T[K+q+7]=0),m===!0&&(r.fromBufferAttribute($,H),T[K+q+8]=r.x,T[K+q+9]=r.y,T[K+q+10]=r.z,T[K+q+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new De(w,A)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function J2(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class LM extends $t{constructor(e,t,i,r,s,o,a,l,c,u=xa){if(u!==xa&&u!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xa&&(i=go),i===void 0&&u===Fa&&(i=ka),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const IM=new $t,iy=new LM(1,1),NM=new EM,DM=new BC,OM=new RM,ry=[],sy=[],oy=new Float32Array(16),ay=new Float32Array(9),ly=new Float32Array(4);function nl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ry[r];if(s===void 0&&(s=new Float32Array(r),ry[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _d(n,e){let t=sy[e];t===void 0&&(t=new Int32Array(e),sy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function nL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function iL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function rL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;ly.set(i),n.uniformMatrix2fv(this.addr,!1,ly),jt(t,i)}}function sL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;ay.set(i),n.uniformMatrix3fv(this.addr,!1,ay),jt(t,i)}}function oL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;oy.set(i),n.uniformMatrix4fv(this.addr,!1,oy),jt(t,i)}}function aL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function cL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function uL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function fL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function hL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function pL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function mL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(iy.compareFunction=xM,s=iy):s=IM,t.setTexture2D(e||s,r)}function gL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||DM,r)}function _L(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||OM,r)}function vL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||NM,r)}function yL(n){switch(n){case 5126:return eL;case 35664:return tL;case 35665:return nL;case 35666:return iL;case 35674:return rL;case 35675:return sL;case 35676:return oL;case 5124:case 35670:return aL;case 35667:case 35671:return lL;case 35668:case 35672:return cL;case 35669:case 35673:return uL;case 5125:return fL;case 36294:return dL;case 36295:return hL;case 36296:return pL;case 35678:case 36198:case 36298:case 36306:case 35682:return mL;case 35679:case 36299:case 36307:return gL;case 35680:case 36300:case 36308:case 36293:return _L;case 36289:case 36303:case 36311:case 36292:return vL}}function xL(n,e){n.uniform1fv(this.addr,e)}function SL(n,e){const t=nl(e,this.size,2);n.uniform2fv(this.addr,t)}function ML(n,e){const t=nl(e,this.size,3);n.uniform3fv(this.addr,t)}function EL(n,e){const t=nl(e,this.size,4);n.uniform4fv(this.addr,t)}function TL(n,e){const t=nl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wL(n,e){const t=nl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AL(n,e){const t=nl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bL(n,e){n.uniform1iv(this.addr,e)}function CL(n,e){n.uniform2iv(this.addr,e)}function RL(n,e){n.uniform3iv(this.addr,e)}function PL(n,e){n.uniform4iv(this.addr,e)}function LL(n,e){n.uniform1uiv(this.addr,e)}function IL(n,e){n.uniform2uiv(this.addr,e)}function NL(n,e){n.uniform3uiv(this.addr,e)}function DL(n,e){n.uniform4uiv(this.addr,e)}function OL(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||IM,s[o])}function UL(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||DM,s[o])}function kL(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||OM,s[o])}function FL(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||NM,s[o])}function BL(n){switch(n){case 5126:return xL;case 35664:return SL;case 35665:return ML;case 35666:return EL;case 35674:return TL;case 35675:return wL;case 35676:return AL;case 5124:case 35670:return bL;case 35667:case 35671:return CL;case 35668:case 35672:return RL;case 35669:case 35673:return PL;case 5125:return LL;case 36294:return IL;case 36295:return NL;case 36296:return DL;case 35678:case 36198:case 36298:case 36306:case 35682:return OL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return kL;case 36289:case 36303:case 36311:case 36292:return FL}}class zL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yL(t.type)}}class HL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BL(t.type)}}class VL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function cy(n,e){n.seq.push(e),n.map[e.id]=e}function GL(n,e,t){const i=n.name,r=i.length;for(Ah.lastIndex=0;;){const s=Ah.exec(i),o=Ah.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cy(t,c===void 0?new zL(a,n,e):new HL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new VL(a),cy(t,f)),t=f}}}class ef{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function uy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WL=37297;let jL=0;function XL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function YL(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===Of&&t===Df?i="LinearDisplayP3ToLinearSRGB":e===Df&&t===Of&&(i="LinearSRGBToLinearDisplayP3"),n){case sn:case pd:return[i,"LinearTransferOETF"];case yn:case d_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function fy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+XL(n.getShaderSource(e),o)}else return r}function KL(n,e){const t=YL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qL(n,e){let t;switch(e){case Zb:t="Linear";break;case Qb:t="Reinhard";break;case Jb:t="OptimizedCineon";break;case dd:t="ACESFilmic";break;case tC:t="AgX";break;case nC:t="Neutral";break;case eC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $L(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function ZL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pl(n){return n!==""}function dy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(n){return n.replace(JL,tI)}const eI=new Map;function tI(n,e){let t=Xe[e];if(t===void 0){const i=eI.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Em(t)}const nI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function py(n){return n.replace(nI,iI)}function iI(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function my(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rI(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Eb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function sI(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Da:case Oa:e="ENVMAP_TYPE_CUBE";break;case hd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oI(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oa:e="ENVMAP_MODE_REFRACTION";break}return e}function aI(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oM:e="ENVMAP_BLENDING_MULTIPLY";break;case qb:e="ENVMAP_BLENDING_MIX";break;case $b:e="ENVMAP_BLENDING_ADD";break}return e}function lI(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cI(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rI(t),c=sI(t),u=oI(t),f=aI(t),d=lI(t),p=$L(t),_=ZL(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pl).join(`
`),h.length>0&&(h+=`
`)):(m=[my(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),h=[my(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_s?qL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,KL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),o=Em(o),o=dy(o,t),o=hy(o,t),a=Em(a),a=dy(a,t),a=hy(a,t),o=py(o),a=py(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+o,x=v+h+a,w=uy(r,r.VERTEX_SHADER,y),A=uy(r,r.FRAGMENT_SHADER,x);r.attachShader(g,w),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(w).trim(),$=r.getShaderInfoLog(A).trim();let K=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,A);else{const q=fy(r,w,"vertex"),N=fy(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+q+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||$==="")&&(H=!1);H&&(L.diagnostics={runnable:K,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(w),r.deleteShader(A),R=new ef(r,g),M=QL(r,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,WL)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jL++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let uI=0;class fI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dI(e),t.set(e,i)),i}}class dI{constructor(e){this.id=uI++,this.code=e,this.usedTimes=0}}function hI(n,e,t,i,r,s,o){const a=new m_,l=new fI,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,L,F,U){const $=F.fog,K=U.geometry,H=M.isMeshStandardMaterial?F.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),N=q&&q.mapping===hd?q.image.height:null,Z=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=Q!==void 0?Q.length:0;let me=0;K.morphAttributes.position!==void 0&&(me=1),K.morphAttributes.normal!==void 0&&(me=2),K.morphAttributes.color!==void 0&&(me=3);let He,j,J,ce;if(Z){const Ce=ki[Z];He=Ce.vertexShader,j=Ce.fragmentShader}else He=M.vertexShader,j=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const fe=n.getRenderTarget(),Re=U.isInstancedMesh===!0,Fe=U.isBatchedMesh===!0,Ve=!!M.map,Qe=!!M.matcap,I=!!q,lt=!!M.aoMap,We=!!M.lightMap,Je=!!M.bumpMap,ye=!!M.normalMap,rt=!!M.displacementMap,be=!!M.emissiveMap,Pe=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,z=M.clearcoat>0,te=M.dispersion>0,ne=M.iridescence>0,ee=M.sheen>0,Te=M.transmission>0,ue=b&&!!M.anisotropyMap,he=z&&!!M.clearcoatMap,Oe=z&&!!M.clearcoatNormalMap,se=z&&!!M.clearcoatRoughnessMap,pe=ne&&!!M.iridescenceMap,Be=ne&&!!M.iridescenceThicknessMap,Ie=ee&&!!M.sheenColorMap,_e=ee&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Ue=!!M.specularColorMap,mt=!!M.specularIntensityMap,S=Te&&!!M.transmissionMap,B=Te&&!!M.thicknessMap,V=!!M.gradientMap,X=!!M.alphaMap,ie=M.alphaTest>0,Y=!!M.alphaHash,xe=!!M.extensions;let Ke=_s;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const tt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:j,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&U._colorsTexture!==null,instancing:Re,instancingColor:Re&&U.instanceColor!==null,instancingMorph:Re&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:sn,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:Qe,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:N,aoMap:lt,lightMap:We,bumpMap:Je,normalMap:ye,displacementMap:d&&rt,emissiveMap:be,normalMapObjectSpace:ye&&M.normalMapType===lC,normalMapTangentSpace:ye&&M.normalMapType===yM,metalnessMap:Pe,roughnessMap:P,anisotropy:b,anisotropyMap:ue,clearcoat:z,clearcoatMap:he,clearcoatNormalMap:Oe,clearcoatRoughnessMap:se,dispersion:te,iridescence:ne,iridescenceMap:pe,iridescenceThicknessMap:Be,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:mt,transmission:Te,transmissionMap:S,thicknessMap:B,gradientMap:V,opaque:M.transparent===!1&&M.blending===ya&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:ie,alphaHash:Y,combine:M.combine,mapUv:Ve&&g(M.map.channel),aoMapUv:lt&&g(M.aoMap.channel),lightMapUv:We&&g(M.lightMap.channel),bumpMapUv:Je&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:rt&&g(M.displacementMap.channel),emissiveMapUv:be&&g(M.emissiveMap.channel),metalnessMapUv:Pe&&g(M.metalnessMap.channel),roughnessMapUv:P&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:he&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(M.sheenRoughnessMap.channel),specularMapUv:Ne&&g(M.specularMap.channel),specularColorMapUv:Ue&&g(M.specularColorMap.channel),specularIntensityMapUv:mt&&g(M.specularIntensityMap.channel),transmissionMapUv:S&&g(M.transmissionMap.channel),thicknessMapUv:B&&g(M.thicknessMap.channel),alphaMapUv:X&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ye||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!K.attributes.uv&&(Ve||X),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zi,flipSided:M.side===In,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(E,M),y(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),M.push(a.mask)}function x(M){const E=_[M.type];let L;if(E){const F=ki[E];L=ZC.clone(F.uniforms)}else L=M.uniforms;return L}function w(M,E){let L;for(let F=0,U=u.length;F<U;F++){const $=u[F];if($.cacheKey===E){L=$,++L.usedTimes;break}}return L===void 0&&(L=new cI(n,E,M,s),u.push(L)),L}function A(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function pI(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function mI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _y(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||mI),i.length>1&&i.sort(d||gy),r.length>1&&r.sort(d||gy)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gI(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _y,n.set(i,[o])):r>=s.length?(o=new _y,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _I(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function vI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yI=0;function xI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SI(n){const e=new _I,t=vI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new je,o=new je;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,y=0,x=0,w=0,A=0,T=0;c.sort(xI);for(let M=0,E=c.length;M<E;M++){const L=c[M],F=L.color,U=L.intensity,$=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*U,f+=F.g*U,d+=F.b*U;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],U);T++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,N=t.get(L);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(U),H.distance=$,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[g]=H;const q=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[g]=q.matrix,L.castShadow){const N=t.get(L);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=K,x++}g++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(F).multiplyScalar(U),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const q=L.shadow,N=t.get(L);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=H,_++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(U),H.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=T,i.version=yI++)}function l(c,u){let f=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function vy(n){const e=new SI(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MI(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vy(n),e.set(r,[a])):s>=o.length?(a=new vy(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class EI extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TI extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bI(n,e,t){let i=new g_;const r=new De,s=new De,o=new dt,a=new EI({depthPacking:aC}),l=new TI,c={},u=t.maxTextureSize,f={[br]:In,[In]:br,[zi]:zi},d=new Ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:wI,fragmentShader:AI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new er;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Cn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sM;let h=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(gs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=h!==fr&&this.type===fr,$=h===fr&&this.type!==fr;for(let K=0,H=A.length;K<H;K++){const q=A[K],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Z=N.getFrameExtents();if(r.multiply(Z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,N.mapSize.y=s.y)),N.map===null||U===!0||$===!0){const re=this.type!==fr?{minFilter:Sn,magFilter:Sn}:{};N.map!==null&&N.map.dispose(),N.map=new _o(r.x,r.y,re),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Q=N.getViewportCount();for(let re=0;re<Q;re++){const me=N.getViewport(re);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),F.viewport(o),N.updateMatrices(q,re),i=N.getFrustum(),x(T,R,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===fr&&v(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,L)};function v(A,T){const R=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _o(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,p,g,null)}function y(A,T,R,M){let E=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)E=L;else if(E=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=E.uuid,U=T.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let K=$[U];K===void 0&&(K=E.clone(),$[U]=K,T.addEventListener("dispose",w)),E=K}if(E.visible=T.visible,E.wireframe=T.wireframe,M===fr?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=R}return E}function x(A,T,R,M,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===fr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const U=e.update(A),$=A.material;if(Array.isArray($)){const K=U.groups;for(let H=0,q=K.length;H<q;H++){const N=K[H],Z=$[N.materialIndex];if(Z&&Z.visible){const Q=y(A,Z,M,E);A.onBeforeShadow(n,A,T,R,U,Q,N),n.renderBufferDirect(R,null,U,Q,A,N),A.onAfterShadow(n,A,T,R,U,Q,N)}}}else if($.visible){const K=y(A,$,M,E);A.onBeforeShadow(n,A,T,R,U,K,null),n.renderBufferDirect(R,null,U,K,A,null),A.onAfterShadow(n,A,T,R,U,K,null)}}const F=A.children;for(let U=0,$=F.length;U<$;U++)x(F[U],T,R,M,E)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const M=c[R],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function CI(n){function e(){let S=!1;const B=new dt;let V=null;const X=new dt(0,0,0,0);return{setMask:function(ie){V!==ie&&!S&&(n.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){S=ie},setClear:function(ie,Y,xe,Ke,tt){tt===!0&&(ie*=Ke,Y*=Ke,xe*=Ke),B.set(ie,Y,xe,Ke),X.equals(B)===!1&&(n.clearColor(ie,Y,xe,Ke),X.copy(B))},reset:function(){S=!1,V=null,X.set(-1,0,0,0)}}}function t(){let S=!1,B=null,V=null,X=null;return{setTest:function(ie){ie?ce(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ie){B!==ie&&!S&&(n.depthMask(ie),B=ie)},setFunc:function(ie){if(V!==ie){switch(ie){case Vb:n.depthFunc(n.NEVER);break;case Gb:n.depthFunc(n.ALWAYS);break;case Wb:n.depthFunc(n.LESS);break;case Lf:n.depthFunc(n.LEQUAL);break;case jb:n.depthFunc(n.EQUAL);break;case Xb:n.depthFunc(n.GEQUAL);break;case Yb:n.depthFunc(n.GREATER);break;case Kb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=ie}},setLocked:function(ie){S=ie},setClear:function(ie){X!==ie&&(n.clearDepth(ie),X=ie)},reset:function(){S=!1,B=null,V=null,X=null}}}function i(){let S=!1,B=null,V=null,X=null,ie=null,Y=null,xe=null,Ke=null,tt=null;return{setTest:function(Ce){S||(Ce?ce(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ce){B!==Ce&&!S&&(n.stencilMask(Ce),B=Ce)},setFunc:function(Ce,ht,Lt){(V!==Ce||X!==ht||ie!==Lt)&&(n.stencilFunc(Ce,ht,Lt),V=Ce,X=ht,ie=Lt)},setOp:function(Ce,ht,Lt){(Y!==Ce||xe!==ht||Ke!==Lt)&&(n.stencilOp(Ce,ht,Lt),Y=Ce,xe=ht,Ke=Lt)},setLocked:function(Ce){S=Ce},setClear:function(Ce){tt!==Ce&&(n.clearStencil(Ce),tt=Ce)},reset:function(){S=!1,B=null,V=null,X=null,ie=null,Y=null,xe=null,Ke=null,tt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,h=null,v=null,y=null,x=null,w=null,A=new Ge(0,0,0),T=0,R=!1,M=null,E=null,L=null,F=null,U=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=H>=2);let N=null,Z={};const Q=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),me=new dt().fromArray(Q),He=new dt().fromArray(re);function j(S,B,V,X){const ie=new Uint8Array(4),Y=n.createTexture();n.bindTexture(S,Y),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<V;xe++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(B+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Y}const J={};J[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),s.setFunc(Lf),Je(!1),ye(xv),ce(n.CULL_FACE),lt(gs);function ce(S){c[S]!==!0&&(n.enable(S),c[S]=!0)}function fe(S){c[S]!==!1&&(n.disable(S),c[S]=!1)}function Re(S,B){return u[S]!==B?(n.bindFramebuffer(S,B),u[S]=B,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=B),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=B),!0):!1}function Fe(S,B){let V=d,X=!1;if(S){V=f.get(B),V===void 0&&(V=[],f.set(B,V));const ie=S.textures;if(V.length!==ie.length||V[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,xe=ie.length;Y<xe;Y++)V[Y]=n.COLOR_ATTACHMENT0+Y;V.length=ie.length,X=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,X=!0);X&&n.drawBuffers(V)}function Ve(S){return p!==S?(n.useProgram(S),p=S,!0):!1}const Qe={[Ks]:n.FUNC_ADD,[wb]:n.FUNC_SUBTRACT,[Ab]:n.FUNC_REVERSE_SUBTRACT};Qe[bb]=n.MIN,Qe[Cb]=n.MAX;const I={[Rb]:n.ZERO,[Pb]:n.ONE,[Lb]:n.SRC_COLOR,[jp]:n.SRC_ALPHA,[kb]:n.SRC_ALPHA_SATURATE,[Ob]:n.DST_COLOR,[Nb]:n.DST_ALPHA,[Ib]:n.ONE_MINUS_SRC_COLOR,[Xp]:n.ONE_MINUS_SRC_ALPHA,[Ub]:n.ONE_MINUS_DST_COLOR,[Db]:n.ONE_MINUS_DST_ALPHA,[Fb]:n.CONSTANT_COLOR,[Bb]:n.ONE_MINUS_CONSTANT_COLOR,[zb]:n.CONSTANT_ALPHA,[Hb]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(S,B,V,X,ie,Y,xe,Ke,tt,Ce){if(S===gs){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(ce(n.BLEND),_=!0),S!==Tb){if(S!==g||Ce!==R){if((m!==Ks||y!==Ks)&&(n.blendEquation(n.FUNC_ADD),m=Ks,y=Ks),Ce)switch(S){case ya:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sv:n.blendFunc(n.ONE,n.ONE);break;case Mv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ev:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case ya:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ev:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}h=null,v=null,x=null,w=null,A.set(0,0,0),T=0,g=S,R=Ce}return}ie=ie||B,Y=Y||V,xe=xe||X,(B!==m||ie!==y)&&(n.blendEquationSeparate(Qe[B],Qe[ie]),m=B,y=ie),(V!==h||X!==v||Y!==x||xe!==w)&&(n.blendFuncSeparate(I[V],I[X],I[Y],I[xe]),h=V,v=X,x=Y,w=xe),(Ke.equals(A)===!1||tt!==T)&&(n.blendColor(Ke.r,Ke.g,Ke.b,tt),A.copy(Ke),T=tt),g=S,R=!1}function We(S,B){S.side===zi?fe(n.CULL_FACE):ce(n.CULL_FACE);let V=S.side===In;B&&(V=!V),Je(V),S.blending===ya&&S.transparent===!1?lt(gs):lt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const X=S.stencilWrite;o.setTest(X),X&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),be(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(S){M!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),M=S)}function ye(S){S!==Sb?(ce(n.CULL_FACE),S!==E&&(S===xv?n.cullFace(n.BACK):S===Mb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),E=S}function rt(S){S!==L&&(K&&n.lineWidth(S),L=S)}function be(S,B,V){S?(ce(n.POLYGON_OFFSET_FILL),(F!==B||U!==V)&&(n.polygonOffset(B,V),F=B,U=V)):fe(n.POLYGON_OFFSET_FILL)}function Pe(S){S?ce(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function P(S){S===void 0&&(S=n.TEXTURE0+$-1),N!==S&&(n.activeTexture(S),N=S)}function b(S,B,V){V===void 0&&(N===null?V=n.TEXTURE0+$-1:V=N);let X=Z[V];X===void 0&&(X={type:void 0,texture:void 0},Z[V]=X),(X.type!==S||X.texture!==B)&&(N!==V&&(n.activeTexture(V),N=V),n.bindTexture(S,B||J[S]),X.type=S,X.texture=B)}function z(){const S=Z[N];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ie(S){me.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),me.copy(S))}function _e(S){He.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),He.copy(S))}function Ne(S,B){let V=l.get(B);V===void 0&&(V=new WeakMap,l.set(B,V));let X=V.get(S);X===void 0&&(X=n.getUniformBlockIndex(B,S.name),V.set(S,X))}function Ue(S,B){const X=l.get(B).get(S);a.get(B)!==X&&(n.uniformBlockBinding(B,X,S.__bindingPointIndex),a.set(B,X))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,Z={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,h=null,v=null,y=null,x=null,w=null,A=new Ge(0,0,0),T=0,R=!1,M=null,E=null,L=null,F=null,U=null,me.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:fe,bindFramebuffer:Re,drawBuffers:Fe,useProgram:Ve,setBlending:lt,setMaterial:We,setFlipSided:Je,setCullFace:ye,setLineWidth:rt,setPolygonOffset:be,setScissorTest:Pe,activeTexture:P,bindTexture:b,unbindTexture:z,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:pe,texImage3D:Be,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:Oe,texStorage3D:se,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:Ie,viewport:_e,reset:mt}}function yy(n,e,t,i){const r=RI(i);switch(t){case dM:return n*e;case pM:return n*e;case mM:return n*e*2;case l_:return n*e/r.components*r.byteLength;case c_:return n*e/r.components*r.byteLength;case gM:return n*e*2/r.components*r.byteLength;case u_:return n*e*2/r.components*r.byteLength;case hM:return n*e*3/r.components*r.byteLength;case di:return n*e*4/r.components*r.byteLength;case f_:return n*e*4/r.components*r.byteLength;case qu:case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zu:case Qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $p:case Qp:return Math.max(n,16)*Math.max(e,8)/4;case qp:case Zp:return Math.max(n,8)*Math.max(e,8)/2;case Jp:case em:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case im:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case om:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case am:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case um:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ju:case gm:case _m:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _M:case vm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ym:case xm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RI(n){switch(n){case Cr:case cM:return{byteLength:1,components:1};case mc:case uM:case Dc:return{byteLength:2,components:1};case o_:case a_:return{byteLength:2,components:4};case go:case s_:case Ci:return{byteLength:4,components:1};case fM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function PI(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return p?new OffscreenCanvas(P,b):vc("canvas")}function g(P,b,z){let te=1;const ne=Pe(P);if((ne.width>z||ne.height>z)&&(te=z/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(te*ne.width),Te=Math.floor(te*ne.height);f===void 0&&(f=_(ee,Te));const ue=b?_(ee,Te):f;return ue.width=ee,ue.height=Te,ue.getContext("2d").drawImage(P,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Te+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Sn&&P.minFilter!==Xn}function h(P){n.generateMipmap(P)}function v(P,b,z,te,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=b;if(b===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),b===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RG8UI),z===n.UNSIGNED_SHORT&&(ee=n.RG16UI),z===n.UNSIGNED_INT&&(ee=n.RG32UI),z===n.BYTE&&(ee=n.RG8I),z===n.SHORT&&(ee=n.RG16I),z===n.INT&&(ee=n.RG32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),b===n.RGBA){const Te=ne?Nf:it.getTransfer(te);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=Te===yt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(P,b){let z;return P?b===null||b===go||b===ka?z=n.DEPTH24_STENCIL8:b===Ci?z=n.DEPTH32F_STENCIL8:b===mc&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===go||b===ka?z=n.DEPTH_COMPONENT24:b===Ci?z=n.DEPTH_COMPONENT32F:b===mc&&(z=n.DEPTH_COMPONENT16),z}function x(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),T(b),b.isVideoTexture&&u.delete(b)}function A(P){const b=P.target;b.removeEventListener("dispose",A),M(b)}function T(P){const b=i.get(P);if(b.__webglInit===void 0)return;const z=P.source,te=d.get(z);if(te){const ne=te[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(te).length===0&&d.delete(z)}i.remove(P)}function R(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const z=P.source,te=d.get(z);delete te[b.__cacheKey],o.memory.textures--}function M(P){const b=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ne=0;ne<b.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)n.deleteFramebuffer(b.__webglFramebuffer[te]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let te=0,ne=z.length;te<ne;te++){const ee=i.get(z[te]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(z[te])}i.remove(P)}let E=0;function L(){E=0}function F(){const P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function U(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function $(P,b){const z=i.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(z,P,b);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function K(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){He(z,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function H(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){He(z,P,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function q(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){j(z,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const N={[Ua]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[If]:n.MIRRORED_REPEAT},Z={[Sn]:n.NEAREST,[lM]:n.NEAREST_MIPMAP_NEAREST,[Rl]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Ku]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},Q={[cC]:n.NEVER,[mC]:n.ALWAYS,[uC]:n.LESS,[xM]:n.LEQUAL,[fC]:n.EQUAL,[pC]:n.GEQUAL,[dC]:n.GREATER,[hC]:n.NOTEQUAL};function re(P,b){if(b.type===Ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===Ku||b.magFilter===Rl||b.magFilter===yr||b.minFilter===Xn||b.minFilter===Ku||b.minFilter===Rl||b.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,N[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,N[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,N[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==Rl&&b.minFilter!==yr||b.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function me(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const te=b.source;let ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));const ee=U(b);if(ee!==P.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[ee].usedTimes++;const Te=ne[P.__cacheKey];Te!==void 0&&(ne[P.__cacheKey].usedTimes--,Te.usedTimes===0&&R(b)),P.__cacheKey=ee,P.__webglTexture=ne[ee].texture}return z}function He(P,b,z){let te=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=n.TEXTURE_3D);const ne=me(P,b),ee=b.source;t.bindTexture(te,P.__webglTexture,n.TEXTURE0+z);const Te=i.get(ee);if(ee.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const ue=it.getPrimaries(it.workingColorSpace),he=b.colorSpace===Qr?null:it.getPrimaries(b.colorSpace),Oe=b.colorSpace===Qr||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let se=g(b.image,!1,r.maxTextureSize);se=be(b,se);const pe=s.convert(b.format,b.colorSpace),Be=s.convert(b.type);let Ie=v(b.internalFormat,pe,Be,b.colorSpace,b.isVideoTexture);re(te,b);let _e;const Ne=b.mipmaps,Ue=b.isVideoTexture!==!0,mt=Te.__version===void 0||ne===!0,S=ee.dataReady,B=x(b,se);if(b.isDepthTexture)Ie=y(b.format===Fa,b.type),mt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,pe,Be,null));else if(b.isDataTexture)if(Ne.length>0){Ue&&mt&&t.texStorage2D(n.TEXTURE_2D,B,Ie,Ne[0].width,Ne[0].height);for(let V=0,X=Ne.length;V<X;V++)_e=Ne[V],Ue?S&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,pe,Be,_e.data):t.texImage2D(n.TEXTURE_2D,V,Ie,_e.width,_e.height,0,pe,Be,_e.data);b.generateMipmaps=!1}else Ue?(mt&&t.texStorage2D(n.TEXTURE_2D,B,Ie,se.width,se.height),S&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,pe,Be,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,pe,Be,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,Ie,Ne[0].width,Ne[0].height,se.depth);for(let V=0,X=Ne.length;V<X;V++)if(_e=Ne[V],b.format!==di)if(pe!==null)if(Ue){if(S)if(b.layerUpdates.size>0){const ie=yy(_e.width,_e.height,b.format,b.type);for(const Y of b.layerUpdates){const xe=_e.data.subarray(Y*ie/_e.data.BYTES_PER_ELEMENT,(Y+1)*ie/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,Y,_e.width,_e.height,1,pe,xe,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,se.depth,pe,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?S&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,se.depth,pe,Be,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,_e.width,_e.height,se.depth,0,pe,Be,_e.data)}else{Ue&&mt&&t.texStorage2D(n.TEXTURE_2D,B,Ie,Ne[0].width,Ne[0].height);for(let V=0,X=Ne.length;V<X;V++)_e=Ne[V],b.format!==di?pe!==null?Ue?S&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?S&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,pe,Be,_e.data):t.texImage2D(n.TEXTURE_2D,V,Ie,_e.width,_e.height,0,pe,Be,_e.data)}else if(b.isDataArrayTexture)if(Ue){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,Ie,se.width,se.height,se.depth),S)if(b.layerUpdates.size>0){const V=yy(se.width,se.height,b.format,b.type);for(const X of b.layerUpdates){const ie=se.data.subarray(X*V/se.data.BYTES_PER_ELEMENT,(X+1)*V/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,se.width,se.height,1,pe,Be,ie)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Be,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,pe,Be,se.data);else if(b.isData3DTexture)Ue?(mt&&t.texStorage3D(n.TEXTURE_3D,B,Ie,se.width,se.height,se.depth),S&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Be,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,pe,Be,se.data);else if(b.isFramebufferTexture){if(mt)if(Ue)t.texStorage2D(n.TEXTURE_2D,B,Ie,se.width,se.height);else{let V=se.width,X=se.height;for(let ie=0;ie<B;ie++)t.texImage2D(n.TEXTURE_2D,ie,Ie,V,X,0,pe,Be,null),V>>=1,X>>=1}}else if(Ne.length>0){if(Ue&&mt){const V=Pe(Ne[0]);t.texStorage2D(n.TEXTURE_2D,B,Ie,V.width,V.height)}for(let V=0,X=Ne.length;V<X;V++)_e=Ne[V],Ue?S&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe,Be,_e):t.texImage2D(n.TEXTURE_2D,V,Ie,pe,Be,_e);b.generateMipmaps=!1}else if(Ue){if(mt){const V=Pe(se);t.texStorage2D(n.TEXTURE_2D,B,Ie,V.width,V.height)}S&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Be,se)}else t.texImage2D(n.TEXTURE_2D,0,Ie,pe,Be,se);m(b)&&h(te),Te.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function j(P,b,z){if(b.image.length!==6)return;const te=me(P,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const ee=i.get(ne);if(ne.version!==ee.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const Te=it.getPrimaries(it.workingColorSpace),ue=b.colorSpace===Qr?null:it.getPrimaries(b.colorSpace),he=b.colorSpace===Qr||Te===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let X=0;X<6;X++)!Oe&&!se?pe[X]=g(b.image[X],!0,r.maxCubemapSize):pe[X]=se?b.image[X].image:b.image[X],pe[X]=be(b,pe[X]);const Be=pe[0],Ie=s.convert(b.format,b.colorSpace),_e=s.convert(b.type),Ne=v(b.internalFormat,Ie,_e,b.colorSpace),Ue=b.isVideoTexture!==!0,mt=ee.__version===void 0||te===!0,S=ne.dataReady;let B=x(b,Be);re(n.TEXTURE_CUBE_MAP,b);let V;if(Oe){Ue&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,B,Ne,Be.width,Be.height);for(let X=0;X<6;X++){V=pe[X].mipmaps;for(let ie=0;ie<V.length;ie++){const Y=V[ie];b.format!==di?Ie!==null?Ue?S&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Y.width,Y.height,Ie,Y.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ne,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Y.width,Y.height,Ie,_e,Y.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ne,Y.width,Y.height,0,Ie,_e,Y.data)}}}else{if(V=b.mipmaps,Ue&&mt){V.length>0&&B++;const X=Pe(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,B,Ne,X.width,X.height)}for(let X=0;X<6;X++)if(se){Ue?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,pe[X].width,pe[X].height,Ie,_e,pe[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,pe[X].width,pe[X].height,0,Ie,_e,pe[X].data);for(let ie=0;ie<V.length;ie++){const xe=V[ie].image[X].image;Ue?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,xe.width,xe.height,Ie,_e,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ne,xe.width,xe.height,0,Ie,_e,xe.data)}}else{Ue?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ie,_e,pe[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,Ie,_e,pe[X]);for(let ie=0;ie<V.length;ie++){const Y=V[ie];Ue?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ie,_e,Y.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ne,Ie,_e,Y.image[X])}}}m(b)&&h(n.TEXTURE_CUBE_MAP),ee.__version=ne.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function J(P,b,z,te,ne,ee){const Te=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),he=v(z.internalFormat,Te,ue,z.colorSpace);if(!i.get(b).__hasExternalTextures){const se=Math.max(1,b.width>>ee),pe=Math.max(1,b.height>>ee);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,he,se,pe,b.depth,0,Te,ue,null):t.texImage2D(ne,ee,he,se,pe,0,Te,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(z).__webglTexture,0,Je(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(z).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(P,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const te=b.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ee=y(b.stencilBuffer,ne),Te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Je(b);ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ee,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{const te=b.textures;for(let ne=0;ne<te.length;ne++){const ee=te[ne],Te=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),he=v(ee.internalFormat,Te,ue,ee.colorSpace),Oe=Je(b);z&&ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,he,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,he,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,he,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const te=i.get(b.depthTexture).__webglTexture,ne=Je(b);if(b.depthTexture.format===xa)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(b.depthTexture.format===Fa)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Re(P){const b=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");fe(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=n.createRenderbuffer(),ce(b.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ce(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(P,b,z){const te=i.get(P);b!==void 0&&J(te.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(P)}function Ve(P){const b=P.texture,z=i.get(P),te=i.get(b);P.addEventListener("dispose",A);const ne=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=b.version,o.memory.textures++),ee){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)z.__webglFramebuffer[ue][he]=n.createFramebuffer()}else z.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)z.__webglFramebuffer[ue]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ue=0,he=ne.length;ue<he;ue++){const Oe=i.get(ne[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const he=ne[ue];z.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Oe=s.convert(he.format,he.colorSpace),se=s.convert(he.type),pe=v(he.internalFormat,Oe,se,he.colorSpace,P.isXRRenderTarget===!0),Be=Je(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),re(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)J(z.__webglFramebuffer[ue][he],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else J(z.__webglFramebuffer[ue],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,he=ne.length;ue<he;ue++){const Oe=ne[ue],se=i.get(Oe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),re(n.TEXTURE_2D,Oe),J(z.__webglFramebuffer,P,Oe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Oe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),re(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)J(z.__webglFramebuffer[he],P,b,n.COLOR_ATTACHMENT0,ue,he);else J(z.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,ue,0);m(b)&&h(ue),t.unbindTexture()}P.depthBuffer&&Re(P)}function Qe(P){const b=P.textures;for(let z=0,te=b.length;z<te;z++){const ne=b[z];if(m(ne)){const ee=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ne).__webglTexture;t.bindTexture(ee,Te),h(ee),t.unbindTexture()}}}const I=[],lt=[];function We(P){if(P.samples>0){if(ye(P)===!1){const b=P.textures,z=P.width,te=P.height;let ne=n.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),ue=b.length>1;if(ue)for(let he=0;he<b.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let he=0;he<b.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const Oe=i.get(b[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,z,te,0,0,z,te,ne,n.NEAREST),l===!0&&(I.length=0,lt.length=0,I.push(n.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.resolveDepthBuffer===!1&&(I.push(ee),lt.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<b.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const Oe=i.get(b[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Je(P){return Math.min(r.maxSamples,P.samples)}function ye(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function be(P,b){const z=P.colorSpace,te=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==sn&&z!==Qr&&(it.getTransfer(z)===yt?(te!==di||ne!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ye}function LI(n,e){function t(i,r=Qr){let s;const o=it.getTransfer(r);if(i===Cr)return n.UNSIGNED_BYTE;if(i===o_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===a_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cM)return n.BYTE;if(i===uM)return n.SHORT;if(i===mc)return n.UNSIGNED_SHORT;if(i===s_)return n.INT;if(i===go)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Dc)return n.HALF_FLOAT;if(i===dM)return n.ALPHA;if(i===hM)return n.RGB;if(i===di)return n.RGBA;if(i===pM)return n.LUMINANCE;if(i===mM)return n.LUMINANCE_ALPHA;if(i===xa)return n.DEPTH_COMPONENT;if(i===Fa)return n.DEPTH_STENCIL;if(i===l_)return n.RED;if(i===c_)return n.RED_INTEGER;if(i===gM)return n.RG;if(i===u_)return n.RG_INTEGER;if(i===f_)return n.RGBA_INTEGER;if(i===qu||i===$u||i===Zu||i===Qu)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qp||i===$p||i===Zp||i===Qp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$p)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jp||i===em||i===tm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jp||i===em)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nm||i===im||i===rm||i===sm||i===om||i===am||i===lm||i===cm||i===um||i===fm||i===dm||i===hm||i===pm||i===mm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===im)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===om)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===am)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===um)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mm)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ju||i===gm||i===_m)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ju)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_m)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_M||i===vm||i===ym||i===xm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ju)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ym)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class II extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eo extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NI={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const DI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ms({vertexShader:DI,fragmentShader:OI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new md(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kI extends To{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=new UI,m=t.getContextAttributes();let h=null,v=null;const y=[],x=[],w=new De;let A=null;const T=new fn;T.layers.enable(1),T.viewport=new dt;const R=new fn;R.layers.enable(2),R.viewport=new dt;const M=[T,R],E=new II;E.layers.enable(1),E.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=y[j];return J===void 0&&(J=new bh,y[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=y[j];return J===void 0&&(J=new bh,y[j]=J),J.getGripSpace()},this.getHand=function(j){let J=y[j];return J===void 0&&(J=new bh,y[j]=J),J.getHandSpace()};function U(j){const J=x.indexOf(j.inputSource);if(J===-1)return;const ce=y[J];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let j=0;j<y.length;j++){const J=x[j];J!==null&&(x[j]=null,y[j].disconnect(J))}L=null,F=null,g.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new _o(p.framebufferWidth,p.framebufferHeight,{format:di,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ce=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Fa:xa,ce=m.stencil?ka:go);const Re={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new _o(d.textureWidth,d.textureHeight,{format:di,type:Cr,depthTexture:new LM(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(j){for(let J=0;J<j.removed.length;J++){const ce=j.removed[J],fe=x.indexOf(ce);fe>=0&&(x[fe]=null,y[fe].disconnect(ce))}for(let J=0;J<j.added.length;J++){const ce=j.added[J];let fe=x.indexOf(ce);if(fe===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=x.length){x.push(ce),fe=Fe;break}else if(x[Fe]===null){x[Fe]=ce,fe=Fe;break}if(fe===-1)break}const Re=y[fe];Re&&Re.connect(ce)}}const H=new D,q=new D;function N(j,J,ce){H.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const fe=H.distanceTo(q),Re=J.projectionMatrix.elements,Fe=ce.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),Qe=Re[14]/(Re[10]+1),I=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],We=(Re[8]-1)/Re[0],Je=(Fe[8]+1)/Fe[0],ye=Ve*We,rt=Ve*Je,be=fe/(-We+Je),Pe=be*-We;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pe),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const P=Ve+be,b=Qe+be,z=ye-Pe,te=rt+(fe-Pe),ne=I*Qe/b*P,ee=lt*Qe/b*P;j.projectionMatrix.makePerspective(z,te,ne,ee,P,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;g.texture!==null&&(j.near=g.depthNear,j.far=g.depthFar),E.near=R.near=T.near=j.near,E.far=R.far=T.far=j.far,(L!==E.near||F!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,F=E.far,T.near=L,T.far=F,R.near=L,R.far=F,T.updateProjectionMatrix(),R.updateProjectionMatrix(),j.updateProjectionMatrix());const J=j.parent,ce=E.cameras;Z(E,J);for(let fe=0;fe<ce.length;fe++)Z(ce[fe],J);ce.length===2?N(E,T,R):E.projectionMatrix.copy(T.projectionMatrix),Q(j,E,J)};function Q(j,J,ce){ce===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ba*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let re=null;function me(j,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,fe=!0);for(let Fe=0;Fe<ce.length;Fe++){const Ve=ce[Fe];let Qe=null;if(p!==null)Qe=p.getViewport(Ve);else{const lt=f.getViewSubImage(d,Ve);Qe=lt.viewport,Fe===0&&(e.setRenderTargetTextures(v,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(v))}let I=M[Fe];I===void 0&&(I=new fn,I.layers.enable(Fe),I.viewport=new dt,M[Fe]=I),I.matrix.fromArray(Ve.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ve.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Fe===0&&(E.matrix.copy(I.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),fe===!0&&E.cameras.push(I)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=f.getDepthInformation(ce[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let ce=0;ce<y.length;ce++){const fe=x[ce],Re=y[ce];fe!==null&&Re!==void 0&&Re.update(fe,J,c||o)}re&&re(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const He=new PM;He.setAnimationLoop(me),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const Fs=new $i,FI=new je;function BI(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===In&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===In&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Fs.copy(x),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(FI.makeRotationFromEuler(Fs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zI(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(_(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const y=f();v.__bindingPointIndex=y;const x=n.createBuffer(),w=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],x=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,T=x.length;A<T;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,E=R.length;M<E;M++){const L=R[M];if(p(L,A,M,w)===!0){const F=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let K=0;K<U.length;K++){const H=U[K],q=g(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+$,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,$),$+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,w){const A=v.value,T=y+"_"+x;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const R=w[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(v){const y=v.uniforms;let x=0;const w=16;for(let T=0,R=y.length;T<R;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,L=M.length;E<L;E++){const F=M[E],U=Array.isArray(F.value)?F.value:[F.value];for(let $=0,K=U.length;$<K;$++){const H=U[$],q=g(H),N=x%w;N!==0&&w-N<q.boundary&&(x+=w-N),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=q.storage}}}const A=x%w;return A>0&&(x+=w-A),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class v_{constructor(e={}){const{canvas:t=IC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=_s,this.toneMappingExposure=1;const y=this;let x=!1,w=0,A=0,T=null,R=-1,M=null;const E=new dt,L=new dt;let F=null;const U=new Ge(0);let $=0,K=t.width,H=t.height,q=1,N=null,Z=null;const Q=new dt(0,0,K,H),re=new dt(0,0,K,H);let me=!1;const He=new g_;let j=!1,J=!1;const ce=new je,fe=new D,Re=new dt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Qe(){return T===null?q:1}let I=i;function lt(C,O){return t.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${r_}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ie,!1),I===null){const O="webgl2";if(I=lt(O,C),I===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,Je,ye,rt,be,Pe,P,b,z,te,ne,ee,Te,ue,he,Oe,se,pe,Be,Ie,_e,Ne,Ue,mt;function S(){We=new K2(I),We.init(),Ne=new LI(I,We),Je=new V2(I,We,e,Ne),ye=new CI(I),rt=new Z2(I),be=new pI,Pe=new PI(I,We,ye,be,Je,Ne,rt),P=new W2(y),b=new Y2(y),z=new rR(I),Ue=new z2(I,z),te=new q2(I,z,rt,Ue),ne=new J2(I,te,z,rt),Be=new Q2(I,Je,Pe),Oe=new G2(be),ee=new hI(y,P,b,We,Je,Ue,Oe),Te=new BI(y,be),ue=new gI,he=new MI(We),pe=new B2(y,P,b,ye,ne,d,l),se=new bI(y,ne,Je),mt=new zI(I,rt,Je,ye),Ie=new H2(I,We,rt),_e=new $2(I,We,rt),rt.programs=ee.programs,y.capabilities=Je,y.extensions=We,y.properties=be,y.renderLists=ue,y.shadowMap=se,y.state=ye,y.info=rt}S();const B=new kI(y,I);this.xr=B,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(K,H,!1))},this.getSize=function(C){return C.set(K,H)},this.setSize=function(C,O,G=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,H=O,t.width=Math.floor(C*q),t.height=Math.floor(O*q),G===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(K*q,H*q).floor()},this.setDrawingBufferSize=function(C,O,G){K=C,H=O,q=G,t.width=Math.floor(C*G),t.height=Math.floor(O*G),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,O,G,W){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,O,G,W),ye.viewport(E.copy(Q).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,O,G,W){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,O,G,W),ye.scissor(L.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){ye.setScissorTest(me=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,O=!0,G=!0){let W=0;if(C){let k=!1;if(T!==null){const le=T.texture.format;k=le===f_||le===u_||le===c_}if(k){const le=T.texture.type,ge=le===Cr||le===go||le===mc||le===ka||le===o_||le===a_,Me=pe.getClearColor(),Ee=pe.getClearAlpha(),ke=Me.r,ze=Me.g,Le=Me.b;ge?(p[0]=ke,p[1]=ze,p[2]=Le,p[3]=Ee,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=ke,_[1]=ze,_[2]=Le,_[3]=Ee,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ue.dispose(),he.dispose(),be.dispose(),P.dispose(),b.dispose(),ne.dispose(),Ue.dispose(),mt.dispose(),ee.dispose(),B.dispose(),B.removeEventListener("sessionstart",Lt),B.removeEventListener("sessionend",Ur),Qt.stop()};function V(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=rt.autoReset,O=se.enabled,G=se.autoUpdate,W=se.needsUpdate,k=se.type;S(),rt.autoReset=C,se.enabled=O,se.autoUpdate=G,se.needsUpdate=W,se.type=k}function ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Y(C){const O=C.target;O.removeEventListener("dispose",Y),xe(O)}function xe(C){Ke(C),be.remove(C)}function Ke(C){const O=be.get(C).programs;O!==void 0&&(O.forEach(function(G){ee.releaseProgram(G)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,G,W,k,le){O===null&&(O=Fe);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Me=wT(C,O,G,W,k);ye.setMaterial(W,ge);let Ee=G.index,ke=1;if(W.wireframe===!0){if(Ee=te.getWireframeAttribute(G),Ee===void 0)return;ke=2}const ze=G.drawRange,Le=G.attributes.position;let st=ze.start*ke,It=(ze.start+ze.count)*ke;le!==null&&(st=Math.max(st,le.start*ke),It=Math.min(It,(le.start+le.count)*ke)),Ee!==null?(st=Math.max(st,0),It=Math.min(It,Ee.count)):Le!=null&&(st=Math.max(st,0),It=Math.min(It,Le.count));const Nt=It-st;if(Nt<0||Nt===1/0)return;Ue.setup(k,W,Me,G,Ee);let Fn,ot=Ie;if(Ee!==null&&(Fn=z.get(Ee),ot=_e,ot.setIndex(Fn)),k.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*Qe()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(k.isLine){let we=W.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*Qe()),k.isLineSegments?ot.setMode(I.LINES):k.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else k.isPoints?ot.setMode(I.POINTS):k.isSprite&&ot.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const we=k._multiDrawStarts,Jt=k._multiDrawCounts,at=k._multiDrawCount,yi=Ee?z.get(Ee).bytesPerElement:1,bo=be.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<at;Bn++)bo.setValue(I,"_gl_DrawID",Bn),ot.render(we[Bn]/yi,Jt[Bn])}else if(k.isInstancedMesh)ot.renderInstances(st,Nt,k.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Jt=Math.min(G.instanceCount,we);ot.renderInstances(st,Nt,Jt)}else ot.render(st,Nt)};function tt(C,O,G){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,zc(C,O,G),C.side=br,C.needsUpdate=!0,zc(C,O,G),C.side=zi):zc(C,O,G)}this.compile=function(C,O,G=null){G===null&&(G=C),m=he.get(G),m.init(O),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==G&&C.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const W=new Set;return C.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Me=le[ge];tt(Me,G,k),W.add(Me)}else tt(le,G,k),W.add(le)}),v.pop(),m=null,W},this.compileAsync=function(C,O,G=null){const W=this.compile(C,O,G);return new Promise(k=>{function le(){if(W.forEach(function(ge){be.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){k(C);return}setTimeout(le,10)}We.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ce=null;function ht(C){Ce&&Ce(C)}function Lt(){Qt.stop()}function Ur(){Qt.start()}const Qt=new PM;Qt.setAnimationLoop(ht),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(C){Ce=C,B.setAnimationLoop(C),C===null?Qt.stop():Qt.start()},B.addEventListener("sessionstart",Lt),B.addEventListener("sessionend",Ur),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(O),O=B.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,O,T),m=he.get(C,v.length),m.init(O),v.push(m),ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(ce),J=this.localClippingEnabled,j=Oe.init(this.clippingPlanes,J),g=ue.get(C,h.length),g.init(),h.push(g),B.enabled===!0&&B.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&ir(le,O,-1/0,y.sortObjects)}ir(C,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(N,Z),Ve=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Ve&&pe.addToRenderList(g,C),this.info.render.frame++,j===!0&&Oe.beginShadows();const G=m.state.shadowsArray;se.render(G,C,O),j===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,k=g.transmissive;if(m.setupLights(),O.isArrayCamera){const le=O.cameras;if(k.length>0)for(let ge=0,Me=le.length;ge<Me;ge++){const Ee=le[ge];ol(W,k,C,Ee)}Ve&&pe.render(C);for(let ge=0,Me=le.length;ge<Me;ge++){const Ee=le[ge];Is(g,C,Ee,Ee.viewport)}}else k.length>0&&ol(W,k,C,O),Ve&&pe.render(C),Is(g,C,O);T!==null&&(Pe.updateMultisampleRenderTarget(T),Pe.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(y,C,O),Ue.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&Oe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function ir(C,O,G,W){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){W&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const ge=ne.update(C),Me=C.material;Me.visible&&g.push(C,ge,Me,G,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const ge=ne.update(C),Me=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Re.copy(ge.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Ee=ge.groups;for(let ke=0,ze=Ee.length;ke<ze;ke++){const Le=Ee[ke],st=Me[Le.materialIndex];st&&st.visible&&g.push(C,ge,st,G,Re.z,Le)}}else Me.visible&&g.push(C,ge,Me,G,Re.z,null)}}const le=C.children;for(let ge=0,Me=le.length;ge<Me;ge++)ir(le[ge],O,G,W)}function Is(C,O,G,W){const k=C.opaque,le=C.transmissive,ge=C.transparent;m.setupLightsView(G),j===!0&&Oe.setGlobalState(y.clippingPlanes,G),W&&ye.viewport(E.copy(W)),k.length>0&&Bc(k,O,G),le.length>0&&Bc(le,O,G),ge.length>0&&Bc(ge,O,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ol(C,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new _o(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Dc:Cr,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const le=m.state.transmissionRenderTarget[W.id],ge=W.viewport||E;le.setSize(ge.z,ge.w);const Me=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(U),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),Ve?pe.render(G):y.clear();const Ee=y.toneMapping;y.toneMapping=_s;const ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),j===!0&&Oe.setGlobalState(y.clippingPlanes,W),Bc(C,G,W),Pe.updateMultisampleRenderTarget(le),Pe.updateRenderTargetMipmap(le),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,st=O.length;Le<st;Le++){const It=O[Le],Nt=It.object,Fn=It.geometry,ot=It.material,we=It.group;if(ot.side===zi&&Nt.layers.test(W.layers)){const Jt=ot.side;ot.side=In,ot.needsUpdate=!0,s0(Nt,G,W,Fn,ot,we),ot.side=Jt,ot.needsUpdate=!0,ze=!0}}ze===!0&&(Pe.updateMultisampleRenderTarget(le),Pe.updateRenderTargetMipmap(le))}y.setRenderTarget(Me),y.setClearColor(U,$),ke!==void 0&&(W.viewport=ke),y.toneMapping=Ee}function Bc(C,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,le=C.length;k<le;k++){const ge=C[k],Me=ge.object,Ee=ge.geometry,ke=W===null?ge.material:W,ze=ge.group;Me.layers.test(G.layers)&&s0(Me,O,G,Ee,ke,ze)}}function s0(C,O,G,W,k,le){C.onBeforeRender(y,O,G,W,k,le),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.transparent===!0&&k.side===zi&&k.forceSinglePass===!1?(k.side=In,k.needsUpdate=!0,y.renderBufferDirect(G,O,W,k,C,le),k.side=br,k.needsUpdate=!0,y.renderBufferDirect(G,O,W,k,C,le),k.side=zi):y.renderBufferDirect(G,O,W,k,C,le),C.onAfterRender(y,O,G,W,k,le)}function zc(C,O,G){O.isScene!==!0&&(O=Fe);const W=be.get(C),k=m.state.lights,le=m.state.shadowsArray,ge=k.state.version,Me=ee.getParameters(C,k.state,le,O,G),Ee=ee.getProgramCacheKey(Me);let ke=W.programs;W.environment=C.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(C.isMeshStandardMaterial?b:P).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Y),ke=new Map,W.programs=ke);let ze=ke.get(Ee);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ge)return a0(C,Me),ze}else Me.uniforms=ee.getUniforms(C),C.onBeforeCompile(Me,y),ze=ee.acquireProgram(Me,Ee),ke.set(Ee,ze),W.uniforms=Me.uniforms;const Le=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),a0(C,Me),W.needsLights=bT(C),W.lightsStateVersion=ge,W.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function o0(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=ef.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function a0(C,O){const G=be.get(C);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function wT(C,O,G,W,k){O.isScene!==!0&&(O=Fe),Pe.resetTextureUnits();const le=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,Me=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,Ee=(W.isMeshStandardMaterial?b:P).get(W.envMap||ge),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,It=!!G.morphAttributes.color;let Nt=_s;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const Fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=Fn!==void 0?Fn.length:0,we=be.get(W),Jt=m.state.lights;if(j===!0&&(J===!0||C!==M)){const si=C===M&&W.id===R;Oe.setState(W,C,si)}let at=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Jt.state.version||we.outputColorSpace!==Me||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Ee||W.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Oe.numPlanes||we.numIntersection!==Oe.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==ze||we.morphTargets!==Le||we.morphNormals!==st||we.morphColors!==It||we.toneMapping!==Nt||we.morphTargetsCount!==ot)&&(at=!0):(at=!0,we.__version=W.version);let yi=we.currentProgram;at===!0&&(yi=zc(W,O,k));let bo=!1,Bn=!1,bd=!1;const Ft=yi.getUniforms(),kr=we.uniforms;if(ye.useProgram(yi.program)&&(bo=!0,Bn=!0,bd=!0),W.id!==R&&(R=W.id,Bn=!0),bo||M!==C){Ft.setValue(I,"projectionMatrix",C.projectionMatrix),Ft.setValue(I,"viewMatrix",C.matrixWorldInverse);const si=Ft.map.cameraPosition;si!==void 0&&si.setValue(I,fe.setFromMatrixPosition(C.matrixWorld)),Je.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Bn=!0,bd=!0)}if(k.isSkinnedMesh){Ft.setOptional(I,k,"bindMatrix"),Ft.setOptional(I,k,"bindMatrixInverse");const si=k.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),Ft.setValue(I,"boneTexture",si.boneTexture,Pe))}k.isBatchedMesh&&(Ft.setOptional(I,k,"batchingTexture"),Ft.setValue(I,"batchingTexture",k._matricesTexture,Pe),Ft.setOptional(I,k,"batchingIdTexture"),Ft.setValue(I,"batchingIdTexture",k._indirectTexture,Pe),Ft.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Ft.setValue(I,"batchingColorTexture",k._colorsTexture,Pe));const Cd=G.morphAttributes;if((Cd.position!==void 0||Cd.normal!==void 0||Cd.color!==void 0)&&Be.update(k,G,yi),(Bn||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,Ft.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(kr.envMap.value=Ee,kr.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(kr.envMapIntensity.value=O.environmentIntensity),Bn&&(Ft.setValue(I,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&AT(kr,bd),le&&W.fog===!0&&Te.refreshFogUniforms(kr,le),Te.refreshMaterialUniforms(kr,W,q,H,m.state.transmissionRenderTarget[C.id]),ef.upload(I,o0(we),kr,Pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ef.upload(I,o0(we),kr,Pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ft.setValue(I,"center",k.center),Ft.setValue(I,"modelViewMatrix",k.modelViewMatrix),Ft.setValue(I,"normalMatrix",k.normalMatrix),Ft.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const si=W.uniformsGroups;for(let Rd=0,CT=si.length;Rd<CT;Rd++){const l0=si[Rd];mt.update(l0,yi),mt.bind(l0,yi)}}return yi}function AT(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function bT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,O,G){be.get(C.texture).__webglTexture=O,be.get(C.depthTexture).__webglTexture=G;const W=be.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const G=be.get(C);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,G=0){T=C,w=O,A=G;let W=!0,k=null,le=!1,ge=!1;if(C){const Ee=be.get(C);Ee.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Ee.__webglFramebuffer===void 0?Pe.setupRenderTarget(C):Ee.__hasExternalTextures&&Pe.rebindTextures(C,be.get(C.texture).__webglTexture,be.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const ze=be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?k=ze[O][G]:k=ze[O],le=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?k=be.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[G]:k=ze,E.copy(C.viewport),L.copy(C.scissor),F=C.scissorTest}else E.copy(Q).multiplyScalar(q).floor(),L.copy(re).multiplyScalar(q).floor(),F=me;if(ye.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&ye.drawBuffers(C,k),ye.viewport(E),ye.scissor(L),ye.setScissorTest(F),le){const Ee=be.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,G)}else if(ge){const Ee=be.get(C.texture),ke=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,ke)}R=-1},this.readRenderTargetPixels=function(C,O,G,W,k,le,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){ye.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ee=C.texture,ke=Ee.format,ze=Ee.type;if(!Je.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-W&&G>=0&&G<=C.height-k&&I.readPixels(O,G,W,k,Ne.convert(ke),Ne.convert(ze),le)}finally{const Ee=T!==null?be.get(T).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(C,O,G,W,k,le,ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){ye.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ee=C.texture,ke=Ee.format,ze=Ee.type;if(!Je.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-W&&G>=0&&G<=C.height-k){const Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(O,G,W,k,Ne.convert(ke),Ne.convert(ze),0),I.flush();const st=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await NC(I,st,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le)}finally{I.deleteBuffer(Le),I.deleteSync(st)}return le}}finally{const Ee=T!==null?be.get(T).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(C,O=null,G=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(C.image.width*W),le=Math.floor(C.image.height*W),ge=O!==null?O.x:0,Me=O!==null?O.y:0;Pe.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ge,Me,k,le),ye.unbindTexture()},this.copyTextureToTexture=function(C,O,G=null,W=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let le,ge,Me,Ee,ke,ze;G!==null?(le=G.max.x-G.min.x,ge=G.max.y-G.min.y,Me=G.min.x,Ee=G.min.y):(le=C.image.width,ge=C.image.height,Me=0,Ee=0),W!==null?(ke=W.x,ze=W.y):(ke=0,ze=0);const Le=Ne.convert(O.format),st=Ne.convert(O.type);Pe.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),Nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(I.UNPACK_SKIP_PIXELS),ot=I.getParameter(I.UNPACK_SKIP_ROWS),we=I.getParameter(I.UNPACK_SKIP_IMAGES),Jt=C.isCompressedTexture?C.mipmaps[k]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ee),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,ke,ze,le,ge,Le,st,Jt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,ke,ze,Jt.width,Jt.height,Le,Jt.data):I.texSubImage2D(I.TEXTURE_2D,k,ke,ze,le,ge,Le,st,Jt),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we),k===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,O,G=null,W=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,C=arguments[2],O=arguments[3],k=arguments[4]||0);let le,ge,Me,Ee,ke,ze,Le,st,It;const Nt=C.isCompressedTexture?C.mipmaps[k]:C.image;G!==null?(le=G.max.x-G.min.x,ge=G.max.y-G.min.y,Me=G.max.z-G.min.z,Ee=G.min.x,ke=G.min.y,ze=G.min.z):(le=Nt.width,ge=Nt.height,Me=Nt.depth,Ee=0,ke=0,ze=0),W!==null?(Le=W.x,st=W.y,It=W.z):(Le=0,st=0,It=0);const Fn=Ne.convert(O.format),ot=Ne.convert(O.type);let we;if(O.isData3DTexture)Pe.setTexture3D(O,0),we=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Pe.setTexture2DArray(O,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Jt=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yi=I.getParameter(I.UNPACK_SKIP_PIXELS),bo=I.getParameter(I.UNPACK_SKIP_ROWS),Bn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(we,k,Le,st,It,le,ge,Me,Fn,ot,Nt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(we,k,Le,st,It,le,ge,Me,Fn,Nt.data):I.texSubImage3D(we,k,Le,st,It,le,ge,Me,Fn,ot,Nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yi),I.pixelStorei(I.UNPACK_SKIP_ROWS,bo),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bn),k===0&&O.generateMipmaps&&I.generateMipmap(we),ye.unbindTexture()},this.initRenderTarget=function(C){be.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,ye.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===d_?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===pd?"display-p3":"srgb"}}let y_=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class HI{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return p_("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new D;class x_{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new x_(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xy=new D,Sy=new dt,My=new dt,VI=new D,Ey=new je,wu=new D,Ch=new Ji,Ty=new je,Rh=new el;class GI extends Cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tv,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wu),this.boundingBox.expandByPoint(wu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wu),this.boundingSphere.expandByPoint(wu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(r),e.ray.intersectsSphere(Ch)!==!1&&(Ty.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(Ty),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Sy.fromBufferAttribute(r.attributes.skinIndex,e),My.fromBufferAttribute(r.attributes.skinWeight,e),xy.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=My.getComponent(s);if(o!==0){const a=Sy.getComponent(s);Ey.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(VI.copy(xy).applyMatrix4(Ey),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class UM extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kM extends $t{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Sn,u=Sn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wy=new je,WI=new je;class S_{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:WI;wy.multiplyMatrices(a,t[s]),wy.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new S_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new kM(t,e,e,di,Ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new UM),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Tm extends En{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ko=new je,Ay=new je,Au=[],by=new Dr,jI=new je,yl=new Cn,xl=new Ji;class XI extends Cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jI)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ko),by.copy(e.boundingBox).applyMatrix4(Ko),this.boundingBox.union(by)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ko),xl.copy(e.boundingSphere).applyMatrix4(Ko),this.boundingSphere.union(xl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ko),Ay.multiplyMatrices(i,Ko),yl.matrixWorld=Ay,yl.raycast(e,Au);for(let o=0,a=Au.length;o<a;o++){const l=Au[o];l.instanceId=s,l.object=this,t.push(l)}Au.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kM(new Float32Array(r*this.count),r,this.count,l_,Ci));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class FM extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ff=new D,Bf=new D,Cy=new je,Sl=new el,bu=new Ji,Ph=new D,Ry=new D;class M_ extends Mt{constructor(e=new er,t=new FM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ff.fromBufferAttribute(t,r-1),Bf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ff.distanceTo(Bf);e.setAttribute("lineDistance",new Mr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(r),bu.radius+=s,e.ray.intersectsSphere(bu)===!1)return;Cy.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(Cy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const h=u.getX(g),v=u.getX(g+1),y=Cu(this,e,Sl,l,h,v);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),h=Cu(this,e,Sl,l,g,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const h=Cu(this,e,Sl,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=Cu(this,e,Sl,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cu(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ff.fromBufferAttribute(o,r),Bf.fromBufferAttribute(o,s),t.distanceSqToSegment(Ff,Bf,Ph,Ry)>i)return;Ph.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ph);if(!(l<e.near||l>e.far))return{distance:l,point:Ry.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Py=new D,Ly=new D;class YI extends M_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Py.fromBufferAttribute(t,r),Ly.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Py.distanceTo(Ly);e.setAttribute("lineDistance",new Mr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KI extends M_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class BM extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iy=new je,wm=new el,Ru=new Ji,Pu=new D;class qI extends Mt{constructor(e=new er,t=new BM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ru.copy(i.boundingSphere),Ru.applyMatrix4(r),Ru.radius+=s,e.ray.intersectsSphere(Ru)===!1)return;Iy.copy(r).invert(),wm.copy(e.ray).applyMatrix4(Iy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Pu.fromBufferAttribute(f,m),Ny(Pu,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Pu.fromBufferAttribute(f,_),Ny(Pu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ny(n,e,t,i,r,s,o){const a=wm.distanceSqToPoint(n);if(a<t){const l=new D;wm.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class E_ extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yM,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends E_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Lu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $I(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ZI(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Dy(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function zM(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Oc{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class QI extends Oc{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wv,endingEnd:wv}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Av:s=e,a=2*t-i;break;case bv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Av:o=e,l=2*i-t;break;case bv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),g=_*_,m=g*_,h=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let w=0;w!==a;++w)s[w]=h*o[u+w]+v*o[c+w]+y*o[l+w]+x*o[f+w];return s}}class JI extends Oc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class eN extends Oc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class nr{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lu(t,this.TimeBufferType),this.values=Lu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lu(e.times,Array),values:Lu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new eN(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JI(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QI(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gc:t=this.InterpolantFactoryMethodDiscrete;break;case _c:t=this.InterpolantFactoryMethodLinear;break;case nh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gc;case this.InterpolantFactoryMethodLinear:return _c;case this.InterpolantFactoryMethodSmooth:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&$I(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===nh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const g=t[f+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}nr.prototype.TimeBufferType=Float32Array;nr.prototype.ValueBufferType=Float32Array;nr.prototype.DefaultInterpolation=_c;class il extends nr{constructor(e,t,i){super(e,t,i)}}il.prototype.ValueTypeName="bool";il.prototype.ValueBufferType=Array;il.prototype.DefaultInterpolation=gc;il.prototype.InterpolantFactoryMethodLinear=void 0;il.prototype.InterpolantFactoryMethodSmooth=void 0;class HM extends nr{}HM.prototype.ValueTypeName="color";class Ha extends nr{}Ha.prototype.ValueTypeName="number";class tN extends Oc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ni.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Va extends nr{InterpolantFactoryMethodLinear(e){return new tN(this.times,this.values,this.getValueSize(),e)}}Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;class rl extends nr{constructor(e,t,i){super(e,t,i)}}rl.prototype.ValueTypeName="string";rl.prototype.ValueBufferType=Array;rl.prototype.DefaultInterpolation=gc;rl.prototype.InterpolantFactoryMethodLinear=void 0;rl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ga extends nr{}Ga.prototype.ValueTypeName="vector";class nN{constructor(e="",t=-1,i=[],r=rC){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Li(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(rN(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(nr.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ZI(l);l=Dy(l,1,u),c=Dy(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ha(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,g){if(p.length!==0){const m=[],h=[];zM(p,m,h,_),m.length!==0&&g.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],h=[];for(let v=0;v!==d[_].morphTargets.length;++v){const y=d[_];m.push(y.time),h.push(y.morphTarget===g?1:0)}r.push(new Ha(".morphTargetInfluence["+g+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Ga,p+".position",d,"pos",r),i(Va,p+".quaternion",d,"rot",r),i(Ga,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iN(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ha;case"vector":case"vector2":case"vector3":case"vector4":return Ga;case"color":return HM;case"quaternion":return Va;case"bool":case"boolean":return il;case"string":return rl}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rN(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iN(n.type);if(n.times===void 0){const t=[],i=[];zM(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const is={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sN{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const oN=new sN;class wo{constructor(e){this.manager=e!==void 0?e:oN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class aN extends Error{constructor(e,t){super(e),this.response=t}}class T_ extends wo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=is.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:i,onError:r});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=cr[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(h){v();function v(){f.read().then(({done:y,value:x})=>{if(y)h.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let A=0,T=u.length;A<T;A++){const R=u[A];R.onProgress&&R.onProgress(w)}h.enqueue(x),v()}},y=>{h.error(y)})}}});return new Response(m)}else throw new aN(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{is.add(e,c);const u=cr[e];delete cr[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=cr[e];if(u===void 0)throw this.manager.itemError(e),c;delete cr[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lN extends wo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=is.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=vc("img");function l(){u(),is.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cN extends wo{constructor(e){super(e)}load(e,t,i,r){const s=new $t,o=new lN(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class vd extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Lh=new je,Oy=new D,Uy=new D;class w_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new g_,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oy.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oy),Uy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uy),t.updateMatrixWorld(),Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uN extends w_{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ba*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fN extends vd{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uN}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ky=new je,Ml=new D,Ih=new D;class dN extends w_{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ml.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ml),Ih.copy(i.position),Ih.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ih),i.updateMatrixWorld(),r.makeTranslation(-Ml.x,-Ml.y,-Ml.z),ky.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ky)}}class hN extends vd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pN extends w_{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yd extends vd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new pN}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A_ extends vd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xl{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mN extends wo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=is.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),is.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});is.add(e,l),s.manager.itemStart(e)}}let Iu;class VM{static getContext(){return Iu===void 0&&(Iu=new(window.AudioContext||window.webkitAudioContext)),Iu}static setContext(e){Iu=e}}class gN extends wo{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new T_(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);VM.getContext().decodeAudioData(c,function(f){t(f)}).catch(a)}catch(c){a(c)}},i,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class _N{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fy(){return(typeof performance>"u"?Date:performance).now()}const Bs=new D,By=new Ni,vN=new D,zs=new D;class yN extends Mt{constructor(){super(),this.type="AudioListener",this.context=VM.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _N}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Bs,By,vN),zs.set(0,0,-1).applyQuaternion(By),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Bs.x,r),t.positionY.linearRampToValueAtTime(Bs.y,r),t.positionZ.linearRampToValueAtTime(Bs.z,r),t.forwardX.linearRampToValueAtTime(zs.x,r),t.forwardY.linearRampToValueAtTime(zs.y,r),t.forwardZ.linearRampToValueAtTime(zs.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Bs.x,Bs.y,Bs.z),t.setOrientation(zs.x,zs.y,zs.z,i.x,i.y,i.z)}}class ur extends Mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const b_="\\[\\]\\.:\\/",xN=new RegExp("["+b_+"]","g"),C_="[^"+b_+"]",SN="[^"+b_.replace("\\.","")+"]",MN=/((?:WC+[\/:])*)/.source.replace("WC",C_),EN=/(WCOD+)?/.source.replace("WCOD",SN),TN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",C_),wN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",C_),AN=new RegExp("^"+MN+EN+TN+wN+"$"),bN=["material","materials","bones","map"];class CN{constructor(e,t,i){const r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ut{constructor(e,t,i){this.path=t,this.parsedPath=i||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,i):new ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xN,"")}static parseTrackName(e){const t=AN.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);bN.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=CN;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const zy=new je;class RN{constructor(e,t,i=0,r=1/0){this.ray=new el(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new m_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zy),this}intersectObject(e,t=!0,i=[]){return Am(e,this,i,t),i.sort(Hy),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Am(e[r],this,i,t);return i.sort(Hy),i}}function Hy(n,e){return n.distance-e.distance}function Am(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Am(s[o],e,t,!0)}}class Vy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:r_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=r_);function Gy(n,e){if(e===sC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sm||e===vM){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Sm)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class R_ extends wo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DN(t)}),this.register(function(t){return new ON(t)}),this.register(function(t){return new WN(t)}),this.register(function(t){return new jN(t)}),this.register(function(t){return new XN(t)}),this.register(function(t){return new kN(t)}),this.register(function(t){return new FN(t)}),this.register(function(t){return new BN(t)}),this.register(function(t){return new zN(t)}),this.register(function(t){return new NN(t)}),this.register(function(t){return new HN(t)}),this.register(function(t){return new UN(t)}),this.register(function(t){return new GN(t)}),this.register(function(t){return new VN(t)}),this.register(function(t){return new LN(t)}),this.register(function(t){return new YN(t)}),this.register(function(t){return new KN(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xl.extractUrlBase(e);o=Xl.resolveURL(c,this.path)}else o=Xl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new T_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===GM){try{o[$e.KHR_BINARY_GLTF]=new qN(e)}catch(f){r&&r(f);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lD(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case $e.KHR_MATERIALS_UNLIT:o[f]=new IN;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[f]=new $N(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[f]=new ZN;break;case $e.KHR_MESH_QUANTIZATION:o[f]=new QN;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function PN(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LN{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hN(u),c.distance=f;break;case"spot":c=new fN(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class IN{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ns}extendParams(e,t,i){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,yn))}return Promise.all(r)}}class NN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class DN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(s)}}class ON{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class UN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class kN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class FN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class BN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class zN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class HN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,yn)),Promise.all(s)}}class VN{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class GN{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class WN{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class jN{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XN{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YN{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class KN{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of f){const g=new je,m=new D,h=new Ni,v=new D(1,1,1),y=new XI(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,h,v));for(const x in l)if(x==="_COLOR_0"){const w=l[x];y.instanceColor=new Tm(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Mt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const GM="glTF",El=12,Wy={JSON:1313821514,BIN:5130562};class qN{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,El),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==GM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-El,s=new DataView(e,El);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Wy.JSON){const c=new Uint8Array(e,El+o,a);this.content=i.decode(c)}else if(l===Wy.BIN){const c=El+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $N{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=bm[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=bm[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=Ma[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}f(p)},a,c,sn,d)})})}}class ZN{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QN{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class WM extends Oc{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,d=f*f,p=d*f,_=e*c,g=_-c,m=-2*p+3*d,h=p-d,v=1-m,y=h-d+f;for(let x=0;x!==a;x++){const w=o[g+x+a],A=o[g+x+l]*u,T=o[_+x+a],R=o[_+x]*u;s[x]=v*w+y*A+m*T+h*R}return s}}const JN=new Ni;class eD extends WM{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return JN.fromArray(s).normalize().toArray(s),s}}const li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ma={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jy={9728:Sn,9729:Xn,9984:lM,9985:Ku,9986:Rl,9987:yr},Xy={33071:ts,33648:If,10497:Ua},Nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tD={CUBICSPLINE:void 0,LINEAR:_c,STEP:gc},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nD(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new E_({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),n.DefaultMaterial}function Hs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iD(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function rD(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sD(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oh(t.attributes):e=n.indices+":"+Oh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Oh(n.targets[i]);return e}function Oh(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Cm(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oD(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aD=new je;class lD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new cN(this.options.manager):this.textureLoader=new mN(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new T_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Hs(s,a,r),hr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Xl.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Nh[r.type],a=Ma[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new En(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nh[r.type],c=Ma[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let g,m;if(p&&p!==f){const h=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=t.cache.get(v);y||(g=new c(a,h*p,r.count*p/u),y=new HI(g,p/u),t.cache.add(v,y)),m=new x_(y,l,d%p/u,_)}else a===null?g=new c(r.count*l):g=new c(a,d,r.count*l),m=new En(g,l,_);if(r.sparse!==void 0){const h=Nh.SCALAR,v=Ma[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new v(o[1],y,r.sparse.count*h),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new En(m.array.slice(),m.itemSize,m.normalized));for(let T=0,R=w.length;T<R;T++){const M=w[T];if(m.setX(M,A[T*l]),l>=2&&m.setY(M,A[T*l+1]),l>=3&&m.setZ(M,A[T*l+2]),l>=4&&m.setW(M,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=jy[d.magFilter]||Xn,u.minFilter=jy[d.minFilter]||yr,u.wrapS=Xy[d.wrapS]||Ua,u.wrapT=Xy[d.wrapT]||Ua,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new $t(g);m.needsUpdate=!0,d(m)}),t.load(Xl.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),hr(f,o),f.userData.mimeType=o.mimeType||oD(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new BM,Ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new FM,Ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return E_}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const f=r[$e.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,yn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=zi);const u=s.alphaMode||Dh.OPAQUE;if(u===Dh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Dh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ns&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ns&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ns){const f=s.emissiveFactor;a.emissive=new Ge().setRGB(f[0],f[1],f[2],sn)}return s.emissiveTexture!==void 0&&o!==ns&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,yn)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),hr(f,s),t.associations.set(f,{materials:e}),s.extensions&&Hs(r,f,s),f})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yy(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sD(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yy(new er,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nD(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let h;const v=c[p];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new GI(g,v):new Cn(g,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?h.geometry=Gy(h.geometry,vM):m.mode===li.TRIANGLE_FAN&&(h.geometry=Gy(h.geometry,Sm));else if(m.mode===li.LINES)h=new YI(g,v);else if(m.mode===li.LINE_STRIP)h=new M_(g,v);else if(m.mode===li.LINE_LOOP)h=new KI(g,v);else if(m.mode===li.POINTS)h=new qI(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&rD(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),hr(h,s),m.extensions&&Hs(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Hs(r,f[0],s),f[0];const d=new eo;s.extensions&&Hs(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new fn(kf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new gd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new S_(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],g=p.target,m=g.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],_=f[2],g=f[3],m=f[4],h=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],w=p[v],A=_[v],T=g[v],R=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=i._createAnimationTracks(x,w,A,T,R);if(M)for(let E=0;E<M.length;E++)h.push(M[E])}return new nN(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,aD)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new UM:c.length>1?u=new eo:c.length===1?u=c[0]:u=new Mt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),hr(u,s),s.extensions&&Hs(i,u,s),s.matrix!==void 0){const f=new je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new eo;i.name&&(s.name=r.createUniqueName(i.name)),hr(s,i),i.extensions&&Hs(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof Ki||d instanceof $t)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];jr[s.path]===jr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(jr[s.path]){case jr.weights:c=Ha;break;case jr.rotation:c=Va;break;case jr.position:case jr.scale:c=Ga;break;default:switch(i.itemSize){case 1:c=Ha;break;case 2:case 3:default:c=Ga;break}break}const u=r.interpolation!==void 0?tD[r.interpolation]:_c,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+jr[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cm(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Va?eD:WM;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cD(n,e,t){const i=e.attributes,r=new Dr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Cm(Ma[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=Cm(Ma[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ji;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Yy(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=bm[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return it.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),hr(n,e),cD(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?iD(n,e.targets,t):n})}const Ky={type:"change"},Uh={type:"start"},qy={type:"end"},Nu=new el,$y=new qr,uD=Math.cos(70*kf.DEG2RAD);class jM extends To{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ro.ROTATE,MIDDLE:Ro.DOLLY,RIGHT:Ro.PAN},this.touches={ONE:Po.ROTATE,TWO:Po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",he),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ky),i.update(),s=r.NONE},this.update=function(){const S=new D,B=new Ni().setFromUnitVectors(e.up,new D(0,1,0)),V=B.clone().invert(),X=new D,ie=new Ni,Y=new D,xe=2*Math.PI;return function(tt=null){const Ce=i.object.position;S.copy(Ce).sub(i.target),S.applyQuaternion(B),a.setFromVector3(S),i.autoRotate&&s===r.NONE&&F(E(tt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ht=i.minAzimuthAngle,Lt=i.maxAzimuthAngle;isFinite(ht)&&isFinite(Lt)&&(ht<-Math.PI?ht+=xe:ht>Math.PI&&(ht-=xe),Lt<-Math.PI?Lt+=xe:Lt>Math.PI&&(Lt-=xe),ht<=Lt?a.theta=Math.max(ht,Math.min(Lt,a.theta)):a.theta=a.theta>(ht+Lt)/2?Math.max(ht,a.theta):Math.min(Lt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ur=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Qt=a.radius;a.radius=Q(a.radius*c),Ur=Qt!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(V),Ce.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let Qt=null;if(i.object.isPerspectiveCamera){const ir=S.length();Qt=Q(ir*c);const Is=ir-Qt;i.object.position.addScaledVector(x,Is),i.object.updateMatrixWorld(),Ur=!!Is}else if(i.object.isOrthographicCamera){const ir=new D(w.x,w.y,0);ir.unproject(i.object);const Is=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ur=Is!==i.object.zoom;const ol=new D(w.x,w.y,0);ol.unproject(i.object),i.object.position.sub(ol).add(ir),i.object.updateMatrixWorld(),Qt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Qt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Qt).add(i.object.position):(Nu.origin.copy(i.object.position),Nu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Nu.direction))<uD?e.lookAt(i.target):($y.setFromNormalAndCoplanarPoint(i.object.up,i.target),Nu.intersectPlane($y,i.target))))}else if(i.object.isOrthographicCamera){const Qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Qt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ur=!0)}return c=1,A=!1,Ur||X.distanceToSquared(i.object.position)>o||8*(1-ie.dot(i.object.quaternion))>o||Y.distanceToSquared(i.target)>o?(i.dispatchEvent(Ky),X.copy(i.object.position),ie.copy(i.object.quaternion),Y.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Pe),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Vy,l=new Vy;let c=1;const u=new D,f=new De,d=new De,p=new De,_=new De,g=new De,m=new De,h=new De,v=new De,y=new De,x=new D,w=new De;let A=!1;const T=[],R={};let M=!1;function E(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function L(S){const B=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*B)}function F(S){l.theta-=S}function U(S){l.phi-=S}const $=function(){const S=new D;return function(V,X){S.setFromMatrixColumn(X,0),S.multiplyScalar(-V),u.add(S)}}(),K=function(){const S=new D;return function(V,X){i.screenSpacePanning===!0?S.setFromMatrixColumn(X,1):(S.setFromMatrixColumn(X,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(V),u.add(S)}}(),H=function(){const S=new D;return function(V,X){const ie=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;S.copy(Y).sub(i.target);let xe=S.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*V*xe/ie.clientHeight,i.object.matrix),K(2*X*xe/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(V*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),K(X*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(S,B){if(!i.zoomToCursor)return;A=!0;const V=i.domElement.getBoundingClientRect(),X=S-V.left,ie=B-V.top,Y=V.width,xe=V.height;w.x=X/Y*2-1,w.y=-(ie/xe)*2+1,x.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function re(S){f.set(S.clientX,S.clientY)}function me(S){Z(S.clientX,S.clientX),h.set(S.clientX,S.clientY)}function He(S){_.set(S.clientX,S.clientY)}function j(S){d.set(S.clientX,S.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),U(2*Math.PI*p.y/B.clientHeight),f.copy(d),i.update()}function J(S){v.set(S.clientX,S.clientY),y.subVectors(v,h),y.y>0?q(L(y.y)):y.y<0&&N(L(y.y)),h.copy(v),i.update()}function ce(S){g.set(S.clientX,S.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(g),i.update()}function fe(S){Z(S.clientX,S.clientY),S.deltaY<0?N(L(S.deltaY)):S.deltaY>0&&q(L(S.deltaY)),i.update()}function Re(S){let B=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),B=!0;break}B&&(S.preventDefault(),i.update())}function Fe(S){if(T.length===1)f.set(S.pageX,S.pageY);else{const B=Ue(S),V=.5*(S.pageX+B.x),X=.5*(S.pageY+B.y);f.set(V,X)}}function Ve(S){if(T.length===1)_.set(S.pageX,S.pageY);else{const B=Ue(S),V=.5*(S.pageX+B.x),X=.5*(S.pageY+B.y);_.set(V,X)}}function Qe(S){const B=Ue(S),V=S.pageX-B.x,X=S.pageY-B.y,ie=Math.sqrt(V*V+X*X);h.set(0,ie)}function I(S){i.enableZoom&&Qe(S),i.enablePan&&Ve(S)}function lt(S){i.enableZoom&&Qe(S),i.enableRotate&&Fe(S)}function We(S){if(T.length==1)d.set(S.pageX,S.pageY);else{const V=Ue(S),X=.5*(S.pageX+V.x),ie=.5*(S.pageY+V.y);d.set(X,ie)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),U(2*Math.PI*p.y/B.clientHeight),f.copy(d)}function Je(S){if(T.length===1)g.set(S.pageX,S.pageY);else{const B=Ue(S),V=.5*(S.pageX+B.x),X=.5*(S.pageY+B.y);g.set(V,X)}m.subVectors(g,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(g)}function ye(S){const B=Ue(S),V=S.pageX-B.x,X=S.pageY-B.y,ie=Math.sqrt(V*V+X*X);v.set(0,ie),y.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),q(y.y),h.copy(v);const Y=(S.pageX+B.x)*.5,xe=(S.pageY+B.y)*.5;Z(Y,xe)}function rt(S){i.enableZoom&&ye(S),i.enablePan&&Je(S)}function be(S){i.enableZoom&&ye(S),i.enableRotate&&We(S)}function Pe(S){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",b)),!_e(S)&&(Be(S),S.pointerType==="touch"?Oe(S):z(S)))}function P(S){i.enabled!==!1&&(S.pointerType==="touch"?se(S):te(S))}function b(S){switch(Ie(S),T.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(qy),s=r.NONE;break;case 1:const B=T[0],V=R[B];Oe({pointerId:B,pageX:V.x,pageY:V.y});break}}function z(S){let B;switch(S.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Ro.DOLLY:if(i.enableZoom===!1)return;me(S),s=r.DOLLY;break;case Ro.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;He(S),s=r.PAN}else{if(i.enableRotate===!1)return;re(S),s=r.ROTATE}break;case Ro.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;re(S),s=r.ROTATE}else{if(i.enablePan===!1)return;He(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uh)}function te(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(S);break;case r.DOLLY:if(i.enableZoom===!1)return;J(S);break;case r.PAN:if(i.enablePan===!1)return;ce(S);break}}function ne(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(Uh),fe(ee(S)),i.dispatchEvent(qy))}function ee(S){const B=S.deltaMode,V={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(B){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return S.ctrlKey&&!M&&(V.deltaY*=10),V}function Te(S){S.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(S){S.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function he(S){i.enabled===!1||i.enablePan===!1||Re(S)}function Oe(S){switch(Ne(S),T.length){case 1:switch(i.touches.ONE){case Po.ROTATE:if(i.enableRotate===!1)return;Fe(S),s=r.TOUCH_ROTATE;break;case Po.PAN:if(i.enablePan===!1)return;Ve(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Po.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(S),s=r.TOUCH_DOLLY_PAN;break;case Po.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uh)}function se(S){switch(Ne(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;We(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Je(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;rt(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(S),i.update();break;default:s=r.NONE}}function pe(S){i.enabled!==!1&&S.preventDefault()}function Be(S){T.push(S.pointerId)}function Ie(S){delete R[S.pointerId];for(let B=0;B<T.length;B++)if(T[B]==S.pointerId){T.splice(B,1);return}}function _e(S){for(let B=0;B<T.length;B++)if(T[B]==S.pointerId)return!0;return!1}function Ne(S){let B=R[S.pointerId];B===void 0&&(B=new De,R[S.pointerId]=B),B.set(S.pageX,S.pageY)}function Ue(S){const B=S.pointerId===T[0]?T[1]:T[0];return R[B]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Pe),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",ne,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}function pr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function XM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wa={duration:.5,overwrite:!1,delay:0},P_,hn,Tt,hi=1e8,gt=1/hi,Rm=Math.PI*2,fD=Rm/4,dD=0,YM=Math.sqrt,hD=Math.cos,pD=Math.sin,Zt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},Rr=function(e){return typeof e=="number"},L_=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},I_=function(){return typeof window<"u"},Du=function(e){return Ot(e)||Zt(e)},KM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,Pm=/(?:-?\.?\d|\.)+/gi,qM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$M=/[+-]=-?[.\d]+/,ZM=/[^,'"\[\]\s]+/gi,mD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,Ui,Lm,N_,ti={},zf={},QM,JM=function(e){return(zf=vo(e,ti))&&kn},D_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yc=function(e,t){return!t&&console.warn(e)},eE=function(e,t){return e&&(ti[e]=t)&&zf&&(zf[e]=t)||ti},xc=function(){return 0},gD={suppressEvents:!0,isStart:!0,kill:!1},tf={suppressEvents:!0,kill:!1},_D={suppressEvents:!0},O_={},vs=[],Im={},tE,Wn={},Fh={},Zy=30,nf=[],U_="",k_=function(e){var t=e[0],i,r;if(Zi(t)||Ot(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=nf.length;r--&&!nf[r].targetTest(t););i=nf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wE(e[r],i)))||e.splice(r,1);return e},ro=function(e){return e._gsap||k_(pi(e))[0]._gsap},nE=function(e,t,i){return(i=e[t])&&Ot(i)?e[t]():L_(i)&&e.getAttribute&&e.getAttribute(t)||i},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Ea=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vD=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Hf=function(){var e=vs.length,t=vs.slice(0),i,r;for(Im={},vs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},iE=function(e,t,i,r){vs.length&&!hn&&Hf(),e.render(t,i,hn&&t<0&&(e._initted||e._startAt)),vs.length&&!hn&&Hf()},rE=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ZM).length<2?t:Zt(e)?e.trim():e},sE=function(e){return e},vi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},yD=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},vo=function(e,t){for(var i in t)e[i]=t[i];return e},Qy=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Zi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Vf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Yl=function(e){var t=e.parent||bt,i=e.keyframes?yD(pn(e.keyframes)):vi;if(Nn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},xD=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},oE=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},so=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},SD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nm=function(e,t,i,r){return e._startAt&&(hn?e._startAt.revert(tf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},MD=function n(e){return!e||e._ts&&n(e.parent)},Jy=function(e){return e._repeat?ja(e._tTime,e=e.duration()+e._rDelay)*e:0},ja=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Gf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sd=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},Md=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sd(e),i._dirty||so(i,e)),e},aE=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Gf(e.rawTime(),t),(!t._dur||Uc(0,t.totalDuration(),i)-t._tTime>gt)&&t.render(i,!0)),so(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-gt}},Vi=function(e,t,i,r){return t.parent&&Es(t),t._start=Kt((Rr(i)?i:i||e!==bt?ai(e,i,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),oE(e,t,"_first","_last",e._sort?"_start":0),Dm(t)||(e._recent=t),r||aE(e,t),e._ts<0&&Md(e,e._tTime),e},lE=function(e,t){return(ti.ScrollTrigger||D_("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},cE=function(e,t,i,r,s){if(B_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tE!==Yn.frame)return vs.push(e),e._lazy=[s,r],1},ED=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Dm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TD=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ED(e)&&!(!e._initted&&Dm(e))||(e._ts<0||e._dp._ts<0)&&!Dm(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Uc(0,e._tDur,t),u=ja(l,a),e._yoyo&&u&1&&(o=1-o),u!==ja(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&cE(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?gt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Nm(e,t,i,!0),e._onUpdate&&!i&&qn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Es(e,1),!i&&!hn&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wD=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Xa=function(e,t,i,r){var s=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Md(e,e._tTime=e._tDur*a),e.parent&&Sd(e),i||so(e.parent,e),e},ex=function(e){return e instanceof xn?so(e):Xa(e,e._dur)},AD={_start:0,endTime:xc,totalDuration:xc},ai=function n(e,t,i){var r=e.labels,s=e._recent||AD,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return Zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Kl=function(e,t,i){var r=Rr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},Ls=function(e,t){return e||e===0?t(e):t},Uc=function(e,t,i){return i<e?e:i>t?t:i},dn=function(e,t){return!Zt(e)||!(t=mD.exec(e))?"":t[1]},bD=function(e,t,i){return Ls(i,function(r){return Uc(e,t,r)})},Om=[].slice,uE=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Ui},CD=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Zt(r)&&!t||uE(r,1)?(s=i).push.apply(s,pi(r)):i.push(r)})||i},pi=function(e,t,i){return Tt&&!t&&Tt.selector?Tt.selector(e):Zt(e)&&!i&&(Lm||!Ya())?Om.call((t||N_).querySelectorAll(e),0):pn(e)?CD(e,i):uE(e)?Om.call(e,0):e?[e]:[]},Um=function(e){return e=pi(e)[0]||yc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return pi(t,i.querySelectorAll?i:i===e?yc("Invalid scope")||N_.createElement("div"):e)}},fE=function(e){return e.sort(function(){return .5-Math.random()})},dE=function(e){if(Ot(e))return e;var t=Zi(e)?e:{each:e},i=oo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Zt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,p,_){var g=(_||t).length,m=o[g],h,v,y,x,w,A,T,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,hi])[1],!M){for(T=-hi;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],h=l?Math.min(M,g)*u-.5:r%M,v=M===hi?0:l?g*f/M-.5:r/M|0,T=0,R=hi,A=0;A<g;A++)y=A%M-h,x=v-(A/M|0),m[A]=w=c?Math.abs(c==="y"?x:y):YM(y*y+x*x),w>T&&(T=w),w<R&&(R=w);r==="random"&&fE(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=dn(t.amount||t.each)||0,i=i&&g<0?ME(i):i}return g=(m[d]-m.min)/m.max||0,Kt(m.b+(i?i(g):g)*m.v)+m.u}},km=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Rr(i)?0:dn(i))}},hE=function(e,t){var i=pn(e),r,s;return!i&&Zi(e)&&(r=i=e.radius||hi,e.values?(e=pi(e.values),(s=!Rr(e[0]))&&(r*=r)):e=km(e.increment)),Ls(t,i?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,u=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Rr(o)?u:u+dn(o)}:km(e))},pE=function(e,t,i,r){return Ls(pn(e)?!t:i===!0?!!(i=0):!r,function(){return pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},RD=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},PD=function(e,t){return function(i){return e(parseFloat(i))+(t||dn(i))}},LD=function(e,t,i){return gE(e,t,0,1,i)},mE=function(e,t,i){return Ls(i,function(r){return e[~~t(r)]})},ID=function n(e,t,i){var r=t-e;return pn(e)?mE(e,n(0,e.length),t):Ls(i,function(s){return(r+(s-e)%r)%r+e})},ND=function n(e,t,i){var r=t-e,s=r*2;return pn(e)?mE(e,n(0,e.length-1),t):Ls(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Sc=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?ZM:Pm),i+=e.substr(t,r-t)+pE(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},gE=function(e,t,i,r,s){var o=t-e,a=r-i;return Ls(s,function(l){return i+((l-e)/o*a||0)})},DD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Zt(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},i=t}else r||(e=vo(pn(e)?[]:{},e));if(!u){for(l in t)F_.call(a,e,l,"get",t[l]);s=function(_){return V_(_,a)||(o?e.p:e)}}}return Ls(i,s)},tx=function(e,t,i){var r=e.labels,s=hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,i){var r=e.vars,s=r[t],o=Tt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&vs.length&&Hf(),a&&(Tt=a),u=l?s.apply(c,l):s.call(c),Tt=o,u},Ll=function(e){return Es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&qn(e,"onInterrupt"),e},ua,_E=[],vE=function(e){if(e)if(e=!e.name&&e.default||e,I_()||e.headless){var t=e.name,i=Ot(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:xc,render:V_,add:F_,kill:$D,modifier:qD,rawVars:0},o={targetTest:0,get:0,getSetter:H_,aliases:{},register:0};if(Ya(),e!==r){if(Wn[t])return;vi(r,vi(Vf(e,s),o)),vo(r.prototype,vo(s,Vf(e,o))),Wn[r.prop=t]=r,e.targetTest&&(nf.push(r),O_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eE(t,r),e.register&&e.register(kn,r,On)}else _E.push(e)},pt=255,Il={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Bh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*pt+.5|0},yE=function(e,t,i){var r=e?Rr(e)?[e>>16,e>>8&pt,e&pt]:0:Il.black,s,o,a,l,c,u,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Il[e])r=Il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Pm),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Bh(l+1/3,s,o),r[1]=Bh(l,s,o),r[2]=Bh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(qM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Pm)||Il.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/pt,o=r[1]/pt,a=r[2]/pt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(p=f-d,c=u>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},xE=function(e){var t=[],i=[],r=-1;return e.split(ys).forEach(function(s){var o=s.match(ca)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},nx=function(e,t,i){var r="",s=(e+r).match(ys),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=yE(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=xE(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ys,"1").split(ca),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ys),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ys=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Il)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),OD=/hsl[a]?\(/,SE=function(e){var t=e.join(" "),i;if(ys.lastIndex=0,ys.test(t))return i=OD.test(t),e[1]=nx(e[1],i),e[0]=nx(e[0],i,xE(e[1])),!0},Mc,Yn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,p,_=function g(m){var h=n()-r,v=m===!0,y,x,w,A;if((h>e||h<0)&&(i+=h-t),r+=h,w=r-i,y=w-o,(y>0||v)&&(A=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=c(g)),x)for(p=0;p<a.length;p++)a[p](w,d,A,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){QM&&(!Lm&&I_()&&(Ui=Lm=window,N_=Ui.document||{},ti.gsap=kn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(kn.version),JM(zf||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),_E.forEach(vE)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Mc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Mc=0,c=xc},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,v){var y=h?function(x,w,A,T){m(x,w,A,T),f.remove(y)}:m;return f.remove(m),a[v?"unshift":"push"](y),Ya(),y},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),Ya=function(){return!Mc&&Yn.wake()},et={},UD=/^[\d.\-M][\d.\-,\s]/,kD=/["']/g,FD=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(kD,"").trim():+c,r=l.substr(a+1).trim();return t},BD=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},zD=function(e){var t=(e+"").split("("),i=et[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[FD(t[1])]:BD(e).split(",").map(rE)):et._CE&&UD.test(e)?et._CE("",e):i},ME=function(e){return function(t){return 1-e(1-t)}},EE=function n(e,t){for(var i=e._first,r;i;)i instanceof xn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},oo=function(e,t){return e&&(Ot(e)?e:et[e]||zD(e))||t},Ao=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Dn(e,function(a){et[a]=ti[a]=s,et[o=a.toLowerCase()]=i;for(var l in s)et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[a+"."+l]=s[l]}),s},TE=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Rm*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*pD((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:TE(a);return s=Rm/s,l.config=function(c,u){return n(e,c,u)},l},Hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:TE(i);return r.config=function(s){return n(e,s)},r};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ao(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;Ao("Elastic",zh("in"),zh("out"),zh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ao("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ao("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Ao("Circ",function(n){return-(YM(1-n*n)-1)});Ao("Sine",function(n){return n===1?1:-hD(n*fD)+1});Ao("Back",Hh("in"),Hh("out"),Hh());et.SteppedEase=et.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((r*Uc(0,o,a)|0)+s)*i}}};Wa.ease=et["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return U_+=n+","+n+"Params,"});var wE=function(e,t){this.id=dD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nE,this.set=t?t.getSetter:H_},Ec=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xa(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Mc||Yn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Xa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Md(this,i),!s._dp||s.parent||aE(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),iE(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ja(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Gf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-gt?0:this._rts,this.totalTime(Uc(-Math.abs(this._delay),this._tDur,s),r!==!1),Sd(this),SD(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Nn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_D);var r=hn;return hn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),hn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ex(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ex(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ai(this,i),Nn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Nn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Ot(i)?i:sE,a=function(){var c=r.then;r.then=null,Ot(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ll(this)},n}();vi(Ec.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var xn=function(n){XM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Nn(i.sortChildren),bt&&Vi(i.parent||bt,pr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&lE(pr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Kl(0,arguments,this),this},t.from=function(r,s,o){return Kl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Kl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Yl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,ai(this,o),1),this},t.call=function(r,s,o){return Vi(this,zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new zt(r,o,ai(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Yl(o).immediateRender=Nn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Yl(a).immediateRender=Nn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Kt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,p,_,g,m,h,v,y,x,w,A,T;if(this!==bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,x=this._start,y=this._ts,h=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Kt(u%m),u===l?(g=this._repeat,d=c):(g=~~(u/m),g&&g===u/m&&(d=c,g--),d>c&&(d=c)),w=ja(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),A&&g&1&&(d=c-d,T=1),g!==w&&!this._lock){var R=A&&w&1,M=R===(A&&g&1);if(g<w&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Kt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;EE(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wD(this,Kt(a),Kt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!g&&(qn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,_&&(u+=this._zTime=-gt);break}}p=_}else{p=this._last;for(var E=r<0?r:d;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||hn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!h){v=0,_&&(u+=this._zTime=E?-gt:gt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=x,Sd(this),this.render(r,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Es(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Rr(s)||(s=ai(this,s,r)),!(r instanceof Ec)){if(pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Zt(r))return this.addLabel(r,s);if(Ot(r))r=zt.delayedCall(0,r);else return this}return this!==r?Vi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Zt(r)?this.removeLabel(r):Ot(r)?this.killTweensOf(r):(xd(this,r),r===this._recent&&(this._recent=this._last),so(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ai(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=zt.delayedCall(0,s||xc,o);return a.data="isPause",this._hasPause=1,Vi(this,a,ai(this,r))},t.removePause=function(r){var s=this._first;for(r=ai(this,r);s;)s._start===r&&s.data==="isPause"&&Es(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=pi(r),l=this._first,c=Rr(s),u;l;)l instanceof zt?vD(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ai(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=zt.to(o,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Xa(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,vi({startAt:{time:ai(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),tx(this,ai(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),tx(this,ai(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return so(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),so(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=hi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xa(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(bt._ts&&(iE(bt,Gf(r,bt)),tE=Yn.frame),Yn.frame>=Zy){Zy+=Zn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Zn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(Ec);vi(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var HD=function(e,t,i,r,s,o,a){var l=new On(this._pt,e,t,0,1,LE,null,s),c=0,u=0,f,d,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Sc(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(kh)||[];f=kh.exec(r);)_=f[0],g=r.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ea(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=kh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,($M.test(r)||h)&&(l.e=0),this._pt=l,l},F_=function(e,t,i,r,s,o,a,l,c,u){Ot(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Ot(f)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Ot(f)?c?XD:RE:z_,_;if(Zt(r)&&(~r.indexOf("random(")&&(r=Sc(r)),r.charAt(1)==="="&&(_=Ea(d,r)+(dn(d)||0),(_||_===0)&&(r=_))),!u||d!==r||Fm)return!isNaN(d*r)&&r!==""?(_=new On(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?KD:PE,0,p),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&D_(t,r),HD.call(this,e,t,d,r,p,l||Zn.stringFilter,c))},VD=function(e,t,i,r,s){if(Ot(e)&&(e=ql(e,s,t,i,r)),!Zi(e)||e.style&&e.nodeType||pn(e)||KM(e))return Zt(e)?ql(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ql(e[a],s,t,i,r);return o},AE=function(e,t,i,r,s,o){var a,l,c,u;if(Wn[e]&&(a=new Wn[e]).init(s,a.rawVars?t[e]:VD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new On(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ua))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rs,Fm,B_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,y=e._overwrite==="auto"&&!P_,x=e.timeline,w,A,T,R,M,E,L,F,U,$,K,H,q;if(x&&(!d||!s)&&(s="none"),e._ease=oo(s,Wa.ease),e._yEase=f?ME(oo(f===!0?s:f,Wa.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||d&&!r.stagger){if(F=m[0]?ro(m[0]).harness:0,H=F&&r[F.prop],w=Vf(r,O_),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!p?g.render(-1,!0):g.revert(u&&_?tf:gD),g._lazy=0),o){if(Es(e._startAt=zt.set(m,vi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!p)&&e._startAt.revert(tf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),T=vi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Nn(l),immediateRender:a,stagger:0,parent:h},w),H&&(T[F.prop]=H),Es(e._startAt=zt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(tf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Nn(l)||l&&!_,A=0;A<m.length;A++){if(M=m[A],L=M._gsap||k_(m)[A]._gsap,e._ptLookup[A]=$={},Im[L.id]&&vs.length&&Hf(),K=v===m?A:v.indexOf(M),F&&(U=new F).init(M,H||w,e,K,v)!==!1&&(e._pt=R=new On(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(N){$[N]=R}),U.priority&&(E=1)),!F||H)for(T in w)Wn[T]&&(U=AE(T,w,e,K,M,v))?U.priority&&(E=1):$[T]=R=F_.call(e,M,T,"get",w[T],K,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),y&&e._pt&&(rs=e,bt.killTweensOf(M,$,e.globalTime(t)),q=!e.parent,rs=0),e._pt&&l&&(Im[L.id]=1)}E&&IE(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&x.render(hi,!0,!0)},GD=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fm=1,e.vars[t]="+=0",B_(e,a),Fm=0,l?yc(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Ut(i)+dn(f.e)),f.b&&(f.b=u.s+dn(f.b))},WD=function(e,t){var i=e[0]?ro(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=vo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ql=function(e,t,i,r,s){return Ot(e)?e.call(t,i,r,s):Zt(e)&&~e.indexOf("random(")?Sc(e):e},bE=U_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",CE={};Dn(bE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return CE[n]=1});var zt=function(n){XM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Yl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||bt,y=(pn(i)||KM(i)?Rr(i[0]):"length"in r)?[i]:pi(i),x,w,A,T,R,M,E,L;if(a._targets=y.length?k_(y):yc("GSAP target "+i+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||Du(c)||Du(u)){if(r=a.vars,x=a.timeline=new xn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=pr(a),x._start=0,d||Du(c)||Du(u)){if(T=y.length,E=d&&dE(d),Zi(d))for(R in d)~bE.indexOf(R)&&(L||(L={}),L[R]=d[R]);for(w=0;w<T;w++)A=Vf(r,CE),A.stagger=0,h&&(A.yoyoEase=h),L&&vo(A,L),M=y[w],A.duration=+ql(c,pr(a),w,M,y),A.delay=(+ql(u,pr(a),w,M,y)||0)-a._delay,!d&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(M,A,E?E(w,M,y):0),x._ease=et.none;x.duration()?c=u=0:a.timeline=0}else if(_){Yl(vi(x.vars.defaults,{ease:"none"})),x._ease=oo(_.ease||r.ease||"none");var F=0,U,$,K;if(pn(_))_.forEach(function(H){return x.to(y,H,">")}),x.duration();else{A={};for(R in _)R==="ease"||R==="easeEach"||jD(R,_[R],A,_.easeEach);for(R in A)for(U=A[R].sort(function(H,q){return H.t-q.t}),F=0,w=0;w<U.length;w++)$=U[w],K={ease:$.e,duration:($.t-(w?U[w-1].t:0))/100*c},K[R]=$.v,x.to(y,K,F),F+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!P_&&(rs=pr(a),bt.killTweensOf(y),rs=0),Vi(v,pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===Kt(v._time)&&Nn(f)&&MD(pr(a))&&v.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),m&&lE(pr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-gt&&!u?l:r<gt?0:r,d,p,_,g,m,h,v,y,x;if(!c)TD(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=Kt(f%g),f===l?(_=this._repeat,d=c):(_=~~(f/g),_&&_===Kt(f/g)&&(d=c,_--),d>c&&(d=c)),h=this._yoyo&&_&1,h&&(x=this._yEase,d=c-d),m=ja(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(y&&this._yEase&&EE(y,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Kt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(cE(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!_&&(qn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(r<0?r:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Nm(this,r,s,o),qn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Nm(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Es(this,1),!s&&!(u&&!a)&&(f||a||h)&&(qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Mc||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||B_(this,c),u=this._ease(c/this._dur),GD(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Md(this,0),this.parent||oE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ll(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,rs&&rs.vars.overwrite!==!0)._first||Ll(this),this.parent&&o!==this.timeline.totalDuration()&&Xa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?pi(r):a,c=this._ptLookup,u=this._pt,f,d,p,_,g,m,h;if((!s||s==="all")&&xD(a,l))return s==="all"&&(this._pt=0),Ll(this);for(f=this._op=this._op||[],s!=="all"&&(Zt(s)&&(g={},Dn(s,function(v){return g[v]=1}),s=g),s=WD(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=c[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xd(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Ll(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Kl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Kl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return bt.killTweensOf(r,s,o)},e}(Ec);vi(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(n){zt[n]=function(){var e=new xn,t=Om.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var z_=function(e,t,i){return e[t]=i},RE=function(e,t,i){return e[t](i)},XD=function(e,t,i,r){return e[t](r.fp,i)},YD=function(e,t,i){return e.setAttribute(t,i)},H_=function(e,t){return Ot(e[t])?RE:L_(e[t])&&e.setAttribute?YD:z_},PE=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},LE=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},V_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qD=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},$D=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},ZD=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},IE=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},On=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||PE,this.d=l||this,this.set=c||z_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ZD,this.m=i,this.mt=s,this.tween=r},n}();Dn(U_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return O_[n]=1});ti.TweenMax=ti.TweenLite=zt;ti.TimelineLite=ti.TimelineMax=xn;bt=new xn({sortChildren:!1,defaults:Wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=SE;var ao=[],rf={},QD=[],ix=0,JD=0,Vh=function(e){return(rf[e]||QD).map(function(t){return t()})},Bm=function(){var e=Date.now(),t=[];e-ix>2&&(Vh("matchMediaInit"),ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Ui.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Vh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ix=e,Vh("matchMedia"))},NE=function(){function n(t,i){this.selector=i&&Um(i),this.data=[],this._r=[],this.isReverted=!1,this.id=JD++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Ot(i)&&(s=r,r=i,i=Ot);var o=this,a=function(){var c=Tt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Um(s)),Tt=o,f=r.apply(o,arguments),Ot(f)&&o._r.push(f),Tt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Ot?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Tt;Tt=null,i(this),Tt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ao.length;o--;)ao[o].id===this.id&&ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),e3=function(){function n(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Zi(i)||(i={matches:i});var o=new NE(0,s||this.scope),a=o.conditions={},l,c,u;Tt&&!o.selector&&(o.selector=Tt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Ui.matchMedia(i[c]),l&&(ao.indexOf(o)<0&&ao.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bm):l.addEventListener("change",Bm)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Wf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return vE(r)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Zt(e)&&(e=pi(e)[0]);var s=ro(e||{}).get,o=i?sE:rE;return i==="native"&&(i=""),e&&(t?o((Wn[t]&&Wn[t].get||s)(e,t,i,r)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=pi(e),e.length>1){var r=e.map(function(u){return kn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Wn[t],a=ro(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ua._pt=0,f.init(e,i?u+i:u,ua,0,[e]),f.render(1,f),ua._pt&&V_(1,ua)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=kn.to(e,vo((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oo(e.ease,Wa.ease)),Qy(Wa,e||{})},config:function(e){return Qy(Zn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Wn[a]&&!ti[a]&&yc(t+" effect requires "+a+" plugin.")}),Fh[t]=function(a,l,c){return i(pi(a),vi(l||{},s),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(Fh[t](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=oo(t)},parseEase:function(e,t){return arguments.length?oo(e,t):et},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new xn(e),r,s;for(i.smoothChildTiming=Nn(e.smoothChildTiming),bt.remove(i),i._dp=0,i._time=i._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&Vi(i,r,r._start-r._delay),r=s;return Vi(bt,i,0),i},context:function(e,t){return e?new NE(e,t):Tt},matchMedia:function(e){return new e3(e)},matchMediaRefresh:function(){return ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Bm()},addEventListener:function(e,t){var i=rf[e]||(rf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=rf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:ID,wrapYoyo:ND,distribute:dE,random:pE,snap:hE,normalize:LD,getUnit:dn,clamp:bD,splitColor:yE,toArray:pi,selector:Um,mapRange:gE,pipe:RD,unitize:PD,interpolate:DD,shuffle:fE},install:JM,effects:Fh,ticker:Yn,updateRoot:xn.updateRoot,plugins:Wn,globalTimeline:bt,core:{PropTween:On,globals:eE,Tween:zt,Timeline:xn,Animation:Ec,getCache:ro,_removeLinkedListItem:xd,reverting:function(){return hn},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return P_=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Wf[n]=zt[n]});Yn.add(xn.updateRoot);ua=Wf.to({},{duration:0});var t3=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},n3=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=t3(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Gh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Zt(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}n3(a,s)}}}},kn=Wf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)hn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Gh("roundProps",km),Gh("modifiers"),Gh("snap",hE))||Wf;zt.version=xn.version=kn.version="3.12.5";QM=1;I_()&&Ya();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rx,ss,Ta,G_,to,sx,W_,i3=function(){return typeof window<"u"},Pr={},Ys=180/Math.PI,wa=Math.PI/180,qo=Math.atan2,ox=1e8,j_=/([A-Z])/g,r3=/(left|right|width|margin|padding|x)/i,s3=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},o3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},a3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},l3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},DE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},OE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},c3=function(e,t,i){return e.style[t]=i},u3=function(e,t,i){return e.style.setProperty(t,i)},f3=function(e,t,i){return e._gsap[t]=i},d3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},h3=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},p3=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ct="transform",Un=Ct+"Origin",m3=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=gr(r,a)}):this.tfm[e]=o.x?o[e]:gr(r,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},UE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},g3=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(j_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=W_(),(!s||!s.isStart)&&!i[Ct]&&(UE(i),r.zOrigin&&i[Un]&&(i[Un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kE=function(e,t){var i={target:e,props:[],revert:g3,save:m3};return e._gsap||kn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},FE,Hm=function(e,t){var i=ss.createElementNS?ss.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ss.createElement(e);return i&&i.style?i:ss.createElement(e)},qi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(j_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ka(t)||t,1)||""},ax="O,Moz,ms,Ms,Webkit".split(","),Ka=function(e,t,i){var r=t||to,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ax[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ax[o]:"")+e},Vm=function(){i3()&&window.document&&(rx=window,ss=rx.document,Ta=ss.documentElement,to=Hm("div")||{style:{}},Hm("div"),Ct=Ka(Ct),Un=Ct+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",FE=!!Ka("perspective"),W_=kn.core.reverting,G_=1)},Wh=function n(e){var t=Hm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Ta.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ta.removeChild(t),this.style.cssText=s,o},lx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},BE=function(e){var t;try{t=e.getBBox()}catch{t=Wh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wh||(t=Wh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+lx(e,["x","cx","x1"])||0,y:+lx(e,["y","cy","y1"])||0,width:0,height:0}:t},zE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&BE(e))},yo=function(e,t){if(t){var i=e.style,r;t in Pr&&t!==Un&&(t=Ct),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(j_,"-$1").toLowerCase())):i.removeAttribute(t)}},os=function(e,t,i,r,s,o){var a=new On(e._pt,t,i,0,1,o?OE:DE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},cx={deg:1,rad:1,turn:1},_3={grid:1,flex:1},Ts=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=to.style,l=r3.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||cx[r]||cx[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&zE(e),(p||o==="%")&&(Pr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[u],Ut(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ss||!g.appendChild)&&(g=ss.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Yn.time&&!m.uncache)return Ut(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[u],v?e.style[t]=v:yo(e,t)}else(p||o==="%")&&!_3[qi(g,"display")]&&(a.position=qi(e,"position")),g===e&&(a.position="static"),g.appendChild(to),_=to[u],g.removeChild(to),a.position="absolute";return l&&p&&(m=ro(g),m.time=Yn.time,m.width=g[u]),Ut(d?_*s/f:_&&s?f/_*s:0)},gr=function(e,t,i,r){var s;return G_||Vm(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pr[t]&&t!=="transform"?(s=wc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xf(qi(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=jf[t]&&jf[t](e,t,i)||qi(e,t)||nE(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ts(e,t,s,i)+i:s},v3=function(e,t,i,r){if(!i||i==="none"){var s=Ka(t,e,1),o=s&&qi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=qi(e,"borderTopColor"))}var a=new On(this._pt,e.style,t,0,1,LE),l=0,c=0,u,f,d,p,_,g,m,h,v,y,x,w;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=qi(e,t)||r,g?e.style[t]=g:yo(e,t)),u=[i,r],SE(u),i=u[0],r=u[1],d=i.match(ca)||[],w=r.match(ca)||[],w.length){for(;f=ca.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ea(p,m)+x),h=parseFloat(m),y=m.substr((h+"").length),l=ca.lastIndex-y.length,y||(y=y||Zn.units[t]||x,l===r.length&&(r+=y,a.e+=y)),x!==y&&(p=Ts(e,t,g,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?OE:DE;return $M.test(r)&&(a.e=0),this._pt=a,a},ux={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},y3=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=ux[i]||i,t[1]=ux[r]||r,t.join(" ")},x3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pr[a]&&(l=1,a=a==="transformOrigin"?Un:Ct),yo(i,a);l&&(yo(i,Ct),o&&(o.svg&&i.removeAttribute("transform"),wc(i,1),o.uncache=1,UE(r)))}},jf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new On(e._pt,t,i,0,0,x3);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Tc=[1,0,0,1,0,0],HE={},VE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fx=function(e){var t=qi(e,Ct);return VE(t)?Tc:t.substr(7).match(qM).map(Ut)},X_=function(e,t){var i=e._gsap||ro(e),r=e.style,s=fx(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tc:s):(s===Tc&&!e.offsetParent&&e!==Ta&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ta.appendChild(e)),s=fx(e),l?r.display=l:yo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ta.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gm=function(e,t,i,r,s,o){var a=e._gsap,l=s||X_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,w=parseFloat(y[1])||0,A,T,R,M;i?l!==Tc&&(T=p*m-_*g)&&(R=x*(m/T)+w*(-g/T)+(g*v-m*h)/T,M=x*(-_/T)+w*(p/T)-(p*v-_*h)/T,x=R,w=M):(A=BE(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(y[1]||y[0]).indexOf("%")?w/100*A.height:w)),r||r!==!1&&a.smooth?(h=x-c,v=w-u,a.xOffset=f+(h*p+v*g)-h,a.yOffset=d+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Un]="0px 0px",o&&(os(o,a,"xOrigin",c,x),os(o,a,"yOrigin",u,w),os(o,a,"xOffset",f,a.xOffset),os(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},wc=function(e,t){var i=e._gsap||new wE(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qi(e,Un)||"0",u,f,d,p,_,g,m,h,v,y,x,w,A,T,R,M,E,L,F,U,$,K,H,q,N,Z,Q,re,me,He,j,J;return u=f=d=g=m=h=v=y=x=0,p=_=1,i.svg=!!(e.getCTM&&zE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),r.scale=r.rotate=r.translate="none"),T=X_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),c=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Gm(e,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,A=i.yOrigin||0,T!==Tc&&(L=T[0],F=T[1],U=T[2],$=T[3],u=K=T[4],f=H=T[5],T.length===6?(p=Math.sqrt(L*L+F*F),_=Math.sqrt($*$+U*U),g=L||F?qo(F,L)*Ys:0,v=U||$?qo(U,$)*Ys+g:0,v&&(_*=Math.abs(Math.cos(v*wa))),i.svg&&(u-=w-(w*L+A*U),f-=A-(w*F+A*$))):(J=T[6],He=T[7],Q=T[8],re=T[9],me=T[10],j=T[11],u=T[12],f=T[13],d=T[14],R=qo(J,me),m=R*Ys,R&&(M=Math.cos(-R),E=Math.sin(-R),q=K*M+Q*E,N=H*M+re*E,Z=J*M+me*E,Q=K*-E+Q*M,re=H*-E+re*M,me=J*-E+me*M,j=He*-E+j*M,K=q,H=N,J=Z),R=qo(-U,me),h=R*Ys,R&&(M=Math.cos(-R),E=Math.sin(-R),q=L*M-Q*E,N=F*M-re*E,Z=U*M-me*E,j=$*E+j*M,L=q,F=N,U=Z),R=qo(F,L),g=R*Ys,R&&(M=Math.cos(R),E=Math.sin(R),q=L*M+F*E,N=K*M+H*E,F=F*M-L*E,H=H*M-K*E,L=q,K=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Ut(Math.sqrt(L*L+F*F+U*U)),_=Ut(Math.sqrt(H*H+J*J)),R=qo(K,H),v=Math.abs(R)>2e-4?R*Ys:0,x=j?1/(j<0?-j:j):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!VE(qi(e,Ct)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ut(p),i.scaleY=Ut(_),i.rotation=Ut(g)+a,i.rotationX=Ut(m)+a,i.rotationY=Ut(h)+a,i.skewX=v+a,i.skewY=y+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Un]=Xf(c)),i.xOffset=i.yOffset=0,i.force3D=Zn.force3D,i.renderTransform=i.svg?M3:FE?GE:S3,i.uncache=0,i},Xf=function(e){return(e=e.split(" "))[0]+" "+e[1]},jh=function(e,t,i){var r=dn(t);return Ut(parseFloat(t)+parseFloat(Ts(e,"x",i+"px",r)))+r},S3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,GE(e,t)},Vs="0deg",Tl="0px",Gs=") ",GE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,y=i.zOrigin,x="",w=h==="auto"&&e&&e!==1||h===!0;if(y&&(f!==Vs||u!==Vs)){var A=parseFloat(u)*wa,T=Math.sin(A),R=Math.cos(A),M;A=parseFloat(f)*wa,M=Math.cos(A),o=jh(v,o,T*M*-y),a=jh(v,a,-Math.sin(A)*-y),l=jh(v,l,R*M*-y+y)}m!==Tl&&(x+="perspective("+m+Gs),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==Tl||a!==Tl||l!==Tl)&&(x+=l!==Tl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gs),c!==Vs&&(x+="rotate("+c+Gs),u!==Vs&&(x+="rotateY("+u+Gs),f!==Vs&&(x+="rotateX("+f+Gs),(d!==Vs||p!==Vs)&&(x+="skew("+d+", "+p+Gs),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Gs),v.style[Ct]=x||"translate(0, 0)"},M3=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,y=parseFloat(o),x=parseFloat(a),w,A,T,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wa,c*=wa,w=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=wa,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=Ut(w),A=Ut(A),T=Ut(T),R=Ut(R)):(w=f,R=d,A=T=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Ts(p,"x",o,"px"),x=Ts(p,"y",a,"px")),(_||g||m||h)&&(y=Ut(y+_-(_*w+g*T)+m),x=Ut(x+g-(_*A+g*R)+h)),(r||s)&&(M=p.getBBox(),y=Ut(y+r/100*M.width),x=Ut(x+s/100*M.height)),M="matrix("+w+","+A+","+T+","+R+","+y+","+x+")",p.setAttribute("transform",M),v&&(p.style[Ct]=M)},E3=function(e,t,i,r,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ys:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*ox)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*ox)%o-~~(c/o)*o)),e._pt=d=new On(e._pt,t,i,r,c,o3),d.e=u,d.u="deg",e._props.push(i),d},dx=function(e,t){for(var i in t)e[i]=t[i];return e},T3=function(e,t,i){var r=dx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,p,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ct]=t,a=wc(i,1),yo(i,Ct),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ct],o[Ct]=t,a=wc(i,1),o[Ct]=c);for(l in Pr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=dn(c),_=dn(u),f=p!==_?Ts(i,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new On(e._pt,a,l,f,d-f,zm),e._pt.u=_||0,e._props.push(l));dx(a,r)};Dn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});jf[e>1?"border"+n:n]=function(a,l,c,u,f){var d,p;if(arguments.length<4)return d=o.map(function(_){return gr(a,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},o.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,f)}});var WE={name:"css",register:Vm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,p,_,g,m,h,v,y,x,w,A,T,R;G_||Vm(),this.styles=this.styles||kE(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Wn[g]&&AE(g,t,i,r,e,s)))){if(p=typeof u,_=jf[g],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Sc(u)),_)_(this,e,g,u,i)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ys.lastIndex=0,ys.test(c)||(m=dn(c),h=dn(u)),h?m!==h&&(c=Ts(e,g,c,h)+h):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Zt(c)&&~c.indexOf("random(")&&(c=Sc(c)),dn(c+"")||c==="auto"||(c+=Zn.units[g]||dn(gr(e,g))||""),(c+"").charAt(1)==="="&&(c=gr(e,g))):c=gr(e,g),d=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(d===1&&gr(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),os(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Pr,y){if(this.styles.save(g),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||wc(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new On(this._pt,a,Ct,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new On(this._pt,w,"scaleY",w.scaleY,(v?Ea(w.scaleY,v+f):f)-w.scaleY||0,zm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Un,0,a[Un]),u=y3(u),w.svg?Gm(e,u,0,A,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==w.zOrigin&&os(this,w,"zOrigin",w.zOrigin,h),os(this,a,g,Xf(c),Xf(u)));continue}else if(g==="svgOrigin"){Gm(e,u,1,A,0,this);continue}else if(g in HE){E3(this,w,g,d,v?Ea(d,v+u):u);continue}else if(g==="smoothOrigin"){os(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){T3(this,u,e);continue}}else g in a||(g=Ka(g)||g);if(y||(f||f===0)&&(d||d===0)&&!s3.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),h=dn(u)||(g in Zn.units?Zn.units[g]:m),m!==h&&(d=Ts(e,g,c,h)),this._pt=new On(this._pt,y?w:a,g,d,(v?Ea(d,v+f):f)-d,!y&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?l3:zm),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=a3);else if(g in a)v3.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,r,s);else if(g!=="parseTransform"){D_(g,u);continue}y||(g in a?R.push(g,0,a[g]):R.push(g,1,c||e[g])),o.push(g)}}T&&IE(this)},render:function(e,t){if(t.tween._time||!W_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:gr,aliases:Gi,getSetter:function(e,t,i){var r=Gi[t];return r&&r.indexOf(",")<0&&(t=r),t in Pr&&t!==Un&&(e._gsap.x||gr(e,"x"))?i&&sx===i?t==="scale"?d3:f3:(sx=i||{})&&(t==="scale"?h3:p3):e.style&&!L_(e.style[t])?c3:~t.indexOf("-")?u3:H_(e,t)},core:{_removeProperty:yo,_getMatrix:X_}};kn.utils.checkPrefix=Ka;kn.core.getStyleSaver=kE;(function(n,e,t,i){var r=Dn(n+","+e+","+t,function(s){Pr[s]=1});Dn(e,function(s){Zn.units[s]="deg",HE[s]=1}),Gi[r[13]]=n+","+e,Dn(i,function(s){var o=s.split(":");Gi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Zn.units[n]="px"});kn.registerPlugin(WE);var Gn=kn.registerPlugin(WE)||kn;Gn.core.Tween;const w3=({onOpenGift:n})=>{const[e,t]=Ae.useState(!1),[i,r]=Ae.useState(!1),[s,o]=Ae.useState(!1),a=Ae.useRef(null);Ae.useEffect(()=>{if(!a.current||s)return;const c=new y_,u=new fn(50,1,.1,1e3);u.position.set(0,2,4),u.lookAt(new D(0,0,0));const f=new v_({alpha:!0,antialias:!0});f.setSize(300,300),f.setPixelRatio(window.devicePixelRatio),f.outputEncoding=void 0,f.toneMapping=dd,f.toneMappingExposure=.9,a.current.appendChild(f.domElement);const d=new A_(16777215,2);c.add(d);const p=new yd(16777215);p.position.set(0,5,0),c.add(p),new R_().load("/Interactive-3D-Room/model/gift.glb",m=>{const h=m.scene;h.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),c.add(h);const v=()=>{Gn.to(h.scale,{x:1.2,y:1.2,z:1.2,duration:.3})},y=()=>{Gn.to(h.scale,{x:1,y:1,z:1,duration:.3})};f.domElement.addEventListener("mouseover",v),f.domElement.addEventListener("mouseout",y),g()},void 0,function(m){console.error("Error carregant el model:",m)});function g(){requestAnimationFrame(g),f.render(c,u)}return()=>{a.current&&a.current.removeChild(f.domElement)}},[i,s]);const l=()=>{o(!0)};return ae.jsx("div",{className:"info-text",style:{marginBottom:"0px"},children:s?ae.jsxs("div",{style:{position:"relative",width:"fit-content",margin:"0 auto"},children:[ae.jsx("img",{src:"/Interactive-3D-Room/model/assets/letter.jpg",alt:"Letter",style:{width:"450px",height:"auto",display:"block"}}),ae.jsx(Nc,{variant:"dark",onClick:n,style:{position:"absolute",bottom:"140px",left:"50%",transform:"translateX(-50%)"},children:"Open Gift"})]}):ae.jsxs(ae.Fragment,{children:[ae.jsx("h3",{children:ae.jsx(jn,{text:"Someone sent you a gift!",speed:15,onComplete:()=>t(!0),showCursor:!e})}),e&&ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{children:ae.jsx(jn,{text:"There is a letter outside the package.",speed:15,onComplete:()=>r(!0),showCursor:!i})}),i&&ae.jsx("div",{ref:a,style:{width:"220px",height:"220px",cursor:"pointer"},onClick:l})]})]})})},A3=({onShowPokeball:n})=>{const e=Ae.useRef(null);let t;return Ae.useEffect(()=>{if(!e.current)return;const i=new y_,r=new fn(50,1,.1,1e3);r.position.set(0,.1,.4),r.lookAt(new D(0,0,0));const s=new v_({alpha:!0,antialias:!0});s.setSize(100,100),s.setPixelRatio(window.devicePixelRatio),s.outputEncoding=void 0,s.toneMapping=dd,s.toneMappingExposure=.9,e.current.appendChild(s.domElement);const o=new jM(r,s.domElement);o.enableDamping=!0;const a=new A_(16777215,2);i.add(a);const l=new yd(16777215);l.position.set(0,5,0),i.add(l),new R_().load("/Interactive-3D-Room/model/pokeball.glb",f=>{t=f.scene,t.scale.set(1,1,1),i.add(t);const d=()=>{Gn.to(t.scale,{x:1.2,y:1.2,z:1.2,duration:.3}),document.body.style.cursor="pointer"},p=()=>{Gn.to(t.scale,{x:1,y:1,z:1,duration:.3}),document.body.style.cursor="default"},_=()=>{n&&n()};s.domElement.addEventListener("mouseover",d),s.domElement.addEventListener("mouseout",p),s.domElement.addEventListener("click",_),u()},void 0,function(f){console.error("Error carregant el model de la Pokeball:",f)});function u(){requestAnimationFrame(u),o.update(),s.render(i,r)}return()=>{e.current&&e.current.removeChild(s.domElement),document.body.style.cursor="default"}},[n]),ae.jsxs("div",{className:"info-text",style:{marginBottom:"0px",position:"absolute",zIndex:2,top:"10%",left:"5%"},children:[ae.jsx("h3",{children:"It's a pokèmon!"}),ae.jsx("div",{ref:e,style:{width:"100px",height:"100px",marginTop:"10px",position:"relative",cursor:"pointer"}})]})},b3=({moveCamera:n,onLoadingProgress:e,allowInteraction:t})=>{const i=Ae.useRef(null),r=Ae.useRef(),s=Ae.useRef(null),o=Ae.useRef(null),a=Ae.useRef(null),l=Ae.useRef(null),[c,u]=Ae.useState(!1),[f,d]=Ae.useState(!1),p=Ae.useRef();Ae.useEffect(()=>{const h=i.current,v=new y_,y=window.innerWidth/window.innerHeight,x=7.5,w=new gd(-x*y,x*y,x,-x,.1,3e3);w.position.set(3,2,3),w.lookAt(new D(0,0,0)),r.current=w;const A=new v_({antialias:!0,alpha:!0});A.setSize(window.innerWidth,window.innerHeight),A.setPixelRatio(window.devicePixelRatio),A.outputEncoding=void 0,A.toneMapping=dd,A.toneMappingExposure=.9,h.appendChild(A.domElement);const T=new A_(16777215,2);v.add(T);const R=new yd(16777215);R.position.set(0,5,0),v.add(R);const M=new R_;let E,L,F,U,$,K,H,q,N,Z,Q,re,me,He,j,J,ce,fe,Re,Fe,Ve,Qe,I,lt;M.manager.onProgress=function(Y,xe,Ke){const tt=xe/Ke*100;e(tt)},M.load("/Interactive-3D-Room/model/room.glb",function(Y){if(v.add(Y.scene),E=Y.scene.getObjectByName("movieCounter"),L=Y.scene.getObjectByName("fantasticMrFox"),F=Y.scene.getObjectByName("eStataLaManoDiDio"),U=Y.scene.getObjectByName("theTrumanShow"),$=Y.scene.getObjectByName("forrestGump"),j=Y.scene.getObjectByName("boxCounter"),J=Y.scene.getObjectByName("box"),ce=Y.scene.getObjectByName("coin"),Qe=Y.scene.getObjectByName("gift"),I=Y.scene.getObjectByName("giftCounter"),lt=Y.scene.getObjectByName("pokeball"),p.current=lt,lt){lt.visible=!1;const xe=new Cn(new tl(1,1,1),new ns({visible:!1}));xe.position.copy(lt.position),xe.scale.set(1.2,1.2,1.2),v.add(xe),p.current.hitbox=xe}N=Y.scene.getObjectByName("paintingCounter"),Z=Y.scene.getObjectByName("greatWave"),Q=Y.scene.getObjectByName("persistenceMemory"),re=Y.scene.getObjectByName("theScream"),me=Y.scene.getObjectByName("venusBirth"),He=Y.scene.getObjectByName("headCounter"),K=Y.scene.getObjectByName("creeper"),H=Y.scene.getObjectByName("ender"),q=Y.scene.getObjectByName("skeleton"),fe=Y.scene.getObjectByName("redMushroom"),Re=Y.scene.getObjectByName("greenMushroom"),Fe=Y.scene.getObjectByName("musicCounter"),Ve=Y.scene.getObjectByName("vinyl"),E&&(E.visible=!1),L&&(L.visible=!0),F&&(F.visible=!1),U&&(U.visible=!1),$&&($.visible=!1),N&&(N.visible=!1),Z&&(Z.visible=!0),Q&&(Q.visible=!1),re&&(re.visible=!1),me&&(me.visible=!1),I&&(I.visible=!1),He&&(He.visible=!1),K&&(K.visible=!0),H&&(H.visible=!1),q&&(q.visible=!1),j&&(j.visible=!1),Fe&&(Fe.visible=!1),ce&&(ce.visible=!1,o.current=ce.position.clone()),J&&(s.current=J.position.clone()),fe&&(fe.visible=!1,a.current=fe.position.clone()),Re&&(Re.visible=!1,l.current=Re.position.clone()),Ve&&(Ve.visible=!0),X()},void 0,function(Y){console.error(Y)});const We=new jM(w,A.domElement);We.enableDamping=!0,We.dampingFactor=.25,We.screenSpacePanning=!1,We.enablePan=!1,We.enableZoom=!0,We.enableRotate=!0,We.update();const Je=new RN,ye=new De;let rt=0,be=0,Pe=0,P=0,b=0;const z=new yN;w.add(z);const te=new ur(z),ne=new ur(z),ee=new ur(z),Te=new ur(z),ue=new ur(z),he=new ur(z),Oe=new ur(z),se=new ur(z),pe=new ur(z),Be=new gN;function Ie(){Be.load("/Interactive-3D-Room/model/assets/sound/creeper.mp3",function(Y){te.setBuffer(Y),te.setLoop(!1),te.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/ender.mp3",function(Y){ne.setBuffer(Y),ne.setLoop(!1),ne.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/skeleton.mp3",function(Y){ee.setBuffer(Y),ee.setLoop(!1),ee.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/coin.ogg",function(Y){Te.setBuffer(Y),Te.setLoop(!1),Te.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/redMushroom.mp3",function(Y){ue.setBuffer(Y),ue.setLoop(!1),ue.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/greenMushroom.mp3",function(Y){he.setBuffer(Y),he.setLoop(!1),he.setVolume(.3)}),Be.load("/Interactive-3D-Room/model/assets/sound/vinyl.mp3",function(Y){se.setBuffer(Y),se.setLoop(!0),se.setVolume(.5)}),Be.load("/Interactive-3D-Room/model/assets/sound/gift.mp3",function(Y){pe.setBuffer(Y),pe.setLoop(!1),pe.setVolume(.5)}),Be.load("/Interactive-3D-Room/model/assets/sound/pokeball.mp3",function(Y){Oe.setBuffer(Y),Oe.setLoop(!1),Oe.setVolume(.5)})}function _e(Y){return 2.5/w.position.distanceTo(Y.position)}const Ne=Y=>{if(!t)return;ye.x=Y.clientX/window.innerWidth*2-1,ye.y=-(Y.clientY/window.innerHeight)*2+1,Je.setFromCamera(ye,w),Je.intersectObjects([E,N,He,j,Fe,I,p.current.hitbox].filter(Boolean),!0).length>0?document.body.style.cursor="pointer":document.body.style.cursor="default"};window.addEventListener("mousemove",Ne);function Ue(){R.intensity=1,T.intensity=.4}function mt(){R.intensity=.1,T.intensity=.1}function S(Y,xe){if(!Y)return;const Ke=4,tt=Gn.timeline({onComplete:()=>{Y.position.copy(xe),Y.visible=!1}});function Ce(ht){return ht/Ke}tt.to(Y.position,{y:"+=0.5",duration:Ce(.8),ease:"power2.out"}).to(Y.position,{x:"+=0.8",duration:Ce(.8),ease:"linear"}).to(Y.position,{y:"-=2.9",duration:Ce(2.9),ease:"linear"}).to(Y.position,{x:"+=1.2",duration:Ce(1.2),ease:"linear"}).to(Y.position,{z:"+=1.4",duration:Ce(1.4),ease:"linear"}).to(Y.position,{y:"-=1.05",duration:Ce(1.05),ease:"linear"}).to(Y.position,{z:"+=3.2",duration:Ce(3.2),ease:"linear"}).to(Y.position,{y:"-=10",duration:Ce(10),ease:"linear"}),tt.play()}function B(Y){if(!t)return;Y.preventDefault(),Y.touches?(ye.x=Y.touches[0].clientX/window.innerWidth*2-1,ye.y=-(Y.touches[0].clientY/window.innerHeight)*2+1):(ye.x=Y.clientX/window.innerWidth*2-1,ye.y=-(Y.clientY/window.innerHeight)*2+1),Je.setFromCamera(ye,w);const xe=Je.intersectObjects(v.children,!0);if(xe.length>0){let Ke=xe[0].object;if(Ke===p.current.hitbox&&(console.log("Clic detectat a pokeball"),M.load("/Interactive-3D-Room/model/teddiursa.glb",tt=>{const Ce=tt.scene;Ce.scale.set(1,1,1),Ce.position.set(-.7,1.71,-.7);function ht(Lt){return Lt*(Math.PI/180)}Ce.rotation.x=ht(-70),Ce.rotation.z=ht(85),v.add(Ce),console.log("Model Teddiursa carregat correctament!")},void 0,function(tt){console.error("Error carregant el model Teddiursa:",tt)}),d(!1),lt.visible=!1,v.remove(p.current.hitbox),console.log("Reproduint so Pokeball"),Oe.play()),Ke.name==="movieCounter"&&(console.log("Clic detectat a movieCounter"),rt=(rt+1)%4,L&&(L.visible=!1),F&&(F.visible=!1),U&&(U.visible=!1),$&&($.visible=!1),rt===0&&L?L.visible=!0:rt===1&&$?$.visible=!0:rt===2&&F?F.visible=!0:rt===3&&U&&(U.visible=!0),console.log("Pel·lícula visible:",rt)),Ke.name==="giftCounter"&&(console.log("Clic detectat a giftCounter"),b++,Qe&&b===1)){const tt=Qe.position.clone(),Ce=Qe.rotation.clone(),ht=Gn.timeline();pe.play(),ht.to(Qe.position,{y:tt.y+.5,duration:.2,ease:"power1.out"}).to(Qe.rotation,{x:Ce.x-1,duration:.2,ease:"power1.inOut"}).to(Qe.rotation,{x:Ce.x+.5,duration:.2,ease:"power1.inOut"}).to(Qe.rotation,{x:Ce.x,duration:.2,ease:"power1.inOut"}).to(Qe.position,{y:tt.y,duration:.5,ease:"bounce.out"}),ht.eventCallback("onComplete",()=>{u(!0),Qe.visible=!1})}if(Ke.name==="boxCounter")if(console.log("Clic detectat a boxCounter"),P=(P+1)%11,P===4&&fe)fe.visible=!0,ue.play(),S(fe,a.current);else if(P===10&&Re)Re.visible=!0,he.play(),S(Re,l.current),P=0;else{Gn.killTweensOf(J.position),J.position.copy(s.current);const tt=_e(J);Gn.to(J.position,{y:s.current.y+tt,duration:.2,yoyo:!0,repeat:1,ease:"power1.inOut",onComplete:()=>{J.position.copy(s.current)}}),ce&&J.position.y===s.current.y&&(ce.visible=!0,Gn.to(ce.position,{y:o.current.y+2,duration:.5,onStart:()=>Te.play(),onComplete:()=>{ce.visible=!1,ce.position.copy(o.current)}}),Gn.to(ce.rotation,{y:"+=720",duration:.5,ease:"power1.inOut"}))}for(Ke.name==="paintingCounter"&&(console.log("Clic detectat a paintingCounter"),be=(be+1)%4,Z&&(Z.visible=!1),Q&&(Q.visible=!1),re&&(re.visible=!1),me&&(me.visible=!1),be===0&&Z?Z.visible=!0:be===1&&Q?Q.visible=!0:be===2&&re?re.visible=!0:be===3&&me&&(me.visible=!0),console.log("Quadre visible:",be)),Ke.name==="headCounter"&&(console.log("Clic detectat a headCounter"),Pe=(Pe+1)%3,K&&(K.visible=!1),H&&(H.visible=!1),q&&(q.visible=!1),Pe===0&&K?(K.visible=!0,te.play()):Pe===1&&H?(H.visible=!0,ne.play()):Pe===2&&q&&(q.visible=!0,ee.play()),console.log("Cap visible:",Pe)),Ke.name==="musicCounter"&&(console.log("Clic detectat a musicCounter"),se.isPlaying?se.pause():se.play(),console.log("Estat del vinil:",se.isPlaying?"Reproduint":"Pausat"));Ke.parent&&Ke.parent.type!=="Scene"&&Ke.name!=="creeper";)Ke=Ke.parent}}function V(){Ie(),window.addEventListener("click",B),window.addEventListener("touchstart",B),window.addEventListener("keydown",function(Y){Y.key==="d"?Ue():Y.key==="n"&&mt()})}function X(){requestAnimationFrame(X),We.update(),A.render(v,w)}const ie=()=>{kf.degToRad(-20);const Y=kf.degToRad(20);Gn.to(v.rotation,{y:Y,duration:15,ease:"power1.inOut",yoyo:!0,repeat:-1})};return window.addEventListener("resize",function(){const Y=window.innerWidth,xe=window.innerHeight;A.setSize(Y,xe),w.left=-x*Y/xe,w.right=x*Y/xe,w.top=x,w.bottom=-x,w.updateProjectionMatrix()}),V(),X(),ie(),()=>{h.removeChild(A.domElement),window.removeEventListener("mousemove",Ne)}},[t,e]),Ae.useEffect(()=>{n&&r.current&&r.current.position.set(5,4,5)},[n]);const _=()=>{d(!1),p.current&&(p.current.visible=!0,g())},g=()=>{const h=p.current;h&&(h.position.y=5,Gn.to(h.position,{y:1.7,duration:1.3,ease:"bounce.out"}))},m=()=>{u(!1),d(!0)};return ae.jsxs("div",{ref:i,className:"canvas-container",children:[c&&ae.jsx(w3,{onOpenGift:m}),f&&ae.jsx(A3,{onShowPokeball:_,onHidePokeball:_})]})},hx=()=>{};let Y_={},jE={},XE=null,YE={mark:hx,measure:hx};try{typeof window<"u"&&(Y_=window),typeof document<"u"&&(jE=document),typeof MutationObserver<"u"&&(XE=MutationObserver),typeof performance<"u"&&(YE=performance)}catch{}const{userAgent:px=""}=Y_.navigator||{},ws=Y_,St=jE,mx=XE,Ou=YE;ws.document;const Or=!!St.documentElement&&!!St.head&&typeof St.addEventListener=="function"&&typeof St.createElement=="function",KE=~px.indexOf("MSIE")||~px.indexOf("Trident/");var wt="classic",qE="duotone",Qn="sharp",Jn="sharp-duotone",C3=[wt,qE,Qn,Jn],R3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},gx={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},P3=["kit"],L3=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,I3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,N3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},O3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},U3={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},k3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},F3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},B3=["solid","regular","light","thin","duotone","brands"],ZE=[1,2,3,4,5,6,7,8,9,10],z3=ZE.concat([11,12,13,14,15,16,17,18,19,20]),Nl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H3=[...Object.keys(U3),...B3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nl.GROUP,Nl.SWAP_OPACITY,Nl.PRIMARY,Nl.SECONDARY].concat(ZE.map(n=>"".concat(n,"x"))).concat(z3.map(n=>"w-".concat(n))),V3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},G3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},W3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},_x={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Lr="___FONT_AWESOME___",Wm=16,QE="fa",JE="svg-inline--fa",xo="data-fa-i2svg",jm="data-fa-pseudo-element",j3="data-fa-pseudo-element-pending",K_="data-prefix",q_="data-icon",vx="fontawesome-i2svg",X3="async",Y3=["HTML","HEAD","STYLE","SCRIPT"],eT=(()=>{try{return!0}catch{return!1}})(),tT=[wt,Qn,Jn];function kc(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[wt]}})}const nT={...$E};nT[wt]={...$E[wt],...gx.kit,...gx["kit-duotone"]};const lo=kc(nT),Xm={...F3};Xm[wt]={...Xm[wt],..._x.kit,..._x["kit-duotone"]};const Ac=kc(Xm),Ym={...k3};Ym[wt]={...Ym[wt],...W3.kit};const co=kc(Ym),Km={...O3};Km[wt]={...Km[wt],...G3.kit};const K3=kc(Km),q3=L3,iT="fa-layers-text",$3=I3,Z3={...R3};kc(Z3);const Q3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xh=Nl,qa=new Set;Object.keys(Ac[wt]).map(qa.add.bind(qa));Object.keys(Ac[Qn]).map(qa.add.bind(qa));Object.keys(Ac[Jn]).map(qa.add.bind(qa));const J3=[...P3,...H3],$l=ws.FontAwesomeConfig||{};function eO(n){var e=St.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function tO(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}St&&typeof St.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const r=tO(eO(t));r!=null&&($l[i]=r)});const rT={styleDefault:"solid",familyDefault:"classic",cssPrefix:QE,replacementClass:JE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$l.familyPrefix&&($l.cssPrefix=$l.familyPrefix);const $a={...rT,...$l};$a.autoReplaceSvg||($a.observeMutations=!1);const Se={};Object.keys(rT).forEach(n=>{Object.defineProperty(Se,n,{enumerable:!0,set:function(e){$a[n]=e,Zl.forEach(t=>t(Se))},get:function(){return $a[n]}})});Object.defineProperty(Se,"familyPrefix",{enumerable:!0,set:function(n){$a.cssPrefix=n,Zl.forEach(e=>e(Se))},get:function(){return $a.cssPrefix}});ws.FontAwesomeConfig=Se;const Zl=[];function nO(n){return Zl.push(n),()=>{Zl.splice(Zl.indexOf(n),1)}}const Xr=Wm,Wi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iO(n){if(!n||!Or)return;const e=St.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=St.head.childNodes;let i=null;for(let r=t.length-1;r>-1;r--){const s=t[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return St.head.insertBefore(e,i),n}const rO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bc(){let n=12,e="";for(;n-- >0;)e+=rO[Math.random()*62|0];return e}function sl(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function $_(n){return n.classList?sl(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function sT(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sO(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(sT(n[t]),'" '),"").trim()}function Ed(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Z_(n){return n.size!==Wi.size||n.x!==Wi.x||n.y!==Wi.y||n.rotate!==Wi.rotate||n.flipX||n.flipY}function oO(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function aO(n){let{transform:e,width:t=Wm,height:i=Wm,startCentered:r=!1}=n,s="";return r&&KE?s+="translate(".concat(e.x/Xr-t/2,"em, ").concat(e.y/Xr-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Xr,"em), calc(-50% + ").concat(e.y/Xr,"em)) "):s+="translate(".concat(e.x/Xr,"em, ").concat(e.y/Xr,"em) "),s+="scale(".concat(e.size/Xr*(e.flipX?-1:1),", ").concat(e.size/Xr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var lO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function oT(){const n=QE,e=JE,t=Se.cssPrefix,i=Se.replacementClass;let r=lO;if(t!==n||i!==e){const s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(i))}return r}let yx=!1;function Yh(){Se.autoAddCss&&!yx&&(iO(oT()),yx=!0)}var cO={mixout(){return{dom:{css:oT,insertCss:Yh}}},hooks(){return{beforeDOMElementCreation(){Yh()},beforeI2svg(){Yh()}}}};const Ir=ws||{};Ir[Lr]||(Ir[Lr]={});Ir[Lr].styles||(Ir[Lr].styles={});Ir[Lr].hooks||(Ir[Lr].hooks={});Ir[Lr].shims||(Ir[Lr].shims=[]);var ji=Ir[Lr];const aT=[],lT=function(){St.removeEventListener("DOMContentLoaded",lT),Yf=1,aT.map(n=>n())};let Yf=!1;Or&&(Yf=(St.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(St.readyState),Yf||St.addEventListener("DOMContentLoaded",lT));function uO(n){Or&&(Yf?setTimeout(n,0):aT.push(n))}function Fc(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?sT(n):"<".concat(e," ").concat(sO(t),">").concat(i.map(Fc).join(""),"</").concat(e,">")}function xx(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Kh=function(e,t,i,r){var s=Object.keys(e),o=s.length,a=t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function fO(n){const e=[];let t=0;const i=n.length;for(;t<i;){const r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){const s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function qm(n){const e=fO(n);return e.length===1?e[0].toString(16):null}function dO(n,e){const t=n.length;let i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Sx(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function $m(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,r=Sx(e);typeof ji.hooks.addPack=="function"&&!i?ji.hooks.addPack(n,Sx(e)):ji.styles[n]={...ji.styles[n]||{},...r},n==="fas"&&$m("fa",e)}const{styles:$s,shims:hO}=ji,pO={[wt]:Object.values(co[wt]),[Qn]:Object.values(co[Qn]),[Jn]:Object.values(co[Jn])};let Q_=null,cT={},uT={},fT={},dT={},hT={};const mO={[wt]:Object.keys(lo[wt]),[Qn]:Object.keys(lo[Qn]),[Jn]:Object.keys(lo[Jn])};function gO(n){return~J3.indexOf(n)}function _O(n,e){const t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!gO(r)?r:null}const pT=()=>{const n=i=>Kh($s,(r,s,o)=>(r[o]=Kh(s,i,{}),r),{});cT=n((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),uT=n((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),hT=n((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in $s||Se.autoFetchSvg,t=Kh(hO,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});fT=t.names,dT=t.unicodes,Q_=Td(Se.styleDefault,{family:Se.familyDefault})};nO(n=>{Q_=Td(n.styleDefault,{family:Se.familyDefault})});pT();function J_(n,e){return(cT[n]||{})[e]}function vO(n,e){return(uT[n]||{})[e]}function as(n,e){return(hT[n]||{})[e]}function mT(n){return fT[n]||{prefix:null,iconName:null}}function yO(n){const e=dT[n],t=J_("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function As(){return Q_}const e0=()=>({prefix:null,iconName:null,rest:[]});function Td(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=wt}=e,i=lo[t][n],r=Ac[t][n]||Ac[t][i],s=n in ji.styles?n:null;return r||s||null}const xO={[wt]:Object.keys(co[wt]),[Qn]:Object.keys(co[Qn]),[Jn]:Object.keys(co[Jn])};function wd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,i={[wt]:"".concat(Se.cssPrefix,"-").concat(wt),[Qn]:"".concat(Se.cssPrefix,"-").concat(Qn),[Jn]:"".concat(Se.cssPrefix,"-").concat(Jn)};let r=null,s=wt;const o=C3.filter(l=>l!==qE);o.forEach(l=>{(n.includes(i[l])||n.some(c=>xO[l].includes(c)))&&(s=l)});const a=n.reduce((l,c)=>{const u=_O(Se.cssPrefix,c);if($s[c]?(c=pO[s].includes(c)?K3[s][c]:c,r=c,l.prefix=c):mO[s].indexOf(c)>-1?(r=c,l.prefix=Td(c,{family:s})):u?l.iconName=u:c!==Se.replacementClass&&!o.some(f=>c===i[f])&&l.rest.push(c),!t&&l.prefix&&l.iconName){const f=r==="fa"?mT(l.iconName):{},d=as(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!$s.far&&$s.fas&&!Se.autoFetchSvg&&(l.prefix="fas")}return l},e0());return(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Qn&&($s.fass||Se.autoFetchSvg)&&(a.prefix="fass",a.iconName=as(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Jn&&($s.fasds||Se.autoFetchSvg)&&(a.prefix="fasds",a.iconName=as(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=As()||"fas"),a}class SO{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},$m(s,r[s]);const o=co[wt][s];o&&$m(o,r[s]),pT()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Mx=[],fa={};const Aa={},MO=Object.keys(Aa);function EO(n,e){let{mixoutsTo:t}=e;return Mx=n,fa={},Object.keys(Aa).forEach(i=>{MO.indexOf(i)===-1&&delete Aa[i]}),Mx.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(t[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{t[s]||(t[s]={}),t[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{fa[o]||(fa[o]=[]),fa[o].push(s[o])})}i.provides&&i.provides(Aa)}),t}function Zm(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return(fa[n]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function So(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(fa[n]||[]).forEach(s=>{s.apply(null,t)})}function bs(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Aa[n]?Aa[n].apply(null,e):void 0}function Qm(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||As();if(e)return e=as(t,e)||e,xx(gT.definitions,t,e)||xx(ji.styles,t,e)}const gT=new SO,TO=()=>{Se.autoReplaceSvg=!1,Se.observeMutations=!1,So("noAuto")},wO={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Or?(So("beforeI2svg",n),bs("pseudoElements2svg",n),bs("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;Se.autoReplaceSvg===!1&&(Se.autoReplaceSvg=!0),Se.observeMutations=!0,uO(()=>{bO({autoReplaceSvgRoot:e}),So("watch",n)})}},AO={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:as(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Td(n[0]);return{prefix:t,iconName:as(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(Se.cssPrefix,"-"))>-1||n.match(q3))){const e=wd(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||As(),iconName:as(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=As();return{prefix:e,iconName:as(e,n)||n}}}},ri={noAuto:TO,config:Se,dom:wO,parse:AO,library:gT,findIconDefinition:Qm,toHtml:Fc},bO=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=St}=n;(Object.keys(ji.styles).length>0||Se.autoFetchSvg)&&Or&&Se.autoReplaceSvg&&ri.dom.i2svg({node:e})};function Ad(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>Fc(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Or)return;const t=St.createElement("div");return t.innerHTML=n.html,t.children}}),n}function CO(n){let{children:e,main:t,mask:i,attributes:r,styles:s,transform:o}=n;if(Z_(o)&&t.found&&!i.found){const{width:a,height:l}=t,c={x:a/l/2,y:.5};r.style=Ed({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function RO(n){let{prefix:e,iconName:t,children:i,attributes:r,symbol:s}=n;const o=s===!0?"".concat(e,"-").concat(Se.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function t0(n){const{icons:{main:e,mask:t},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=n,{width:d,height:p}=t.found?t:e,_=i==="fak",g=[Se.replacementClass,r?"".concat(Se.cssPrefix,"-").concat(r):""].filter(w=>u.classes.indexOf(w)===-1).filter(w=>w!==""||!!w).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)}};const h=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(m.attributes[xo]=""),a&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||bc())},children:[a]}),delete m.attributes.title);const v={...m,prefix:i,iconName:r,main:e,mask:t,maskId:l,transform:s,symbol:o,styles:{...h,...u.styles}},{children:y,attributes:x}=t.found&&e.found?bs("generateAbstractMask",v)||{children:[],attributes:{}}:bs("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=y,v.attributes=x,o?RO(v):CO(v)}function Ex(n){const{content:e,width:t,height:i,transform:r,title:s,extra:o,watchable:a=!1}=n,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[xo]="");const c={...o.styles};Z_(r)&&(c.transform=aO({transform:r,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);const u=Ed(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function PO(n){const{content:e,title:t,extra:i}=n,r={...i.attributes,...t?{title:t}:{},class:i.classes.join(" ")},s=Ed(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}const{styles:qh}=ji;function Jm(n){const e=n[0],t=n[1],[i]=n.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Se.cssPrefix,"-").concat(Xh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Se.cssPrefix,"-").concat(Xh.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Se.cssPrefix,"-").concat(Xh.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:r}}const LO={found:!1,width:512,height:512};function IO(n,e){!eT&&!Se.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function eg(n,e){let t=e;return e==="fa"&&Se.styleDefault!==null&&(e=As()),new Promise((i,r)=>{if(t==="fa"){const s=mT(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&qh[e]&&qh[e][n]){const s=qh[e][n];return i(Jm(s))}IO(n,e),i({...LO,icon:Se.showMissingIcons&&n?bs("missingIconAbstract")||{}:{}})})}const Tx=()=>{},tg=Se.measurePerformance&&Ou&&Ou.mark&&Ou.measure?Ou:{mark:Tx,measure:Tx},Dl='FA "6.6.0"',NO=n=>(tg.mark("".concat(Dl," ").concat(n," begins")),()=>_T(n)),_T=n=>{tg.mark("".concat(Dl," ").concat(n," ends")),tg.measure("".concat(Dl," ").concat(n),"".concat(Dl," ").concat(n," begins"),"".concat(Dl," ").concat(n," ends"))};var n0={begin:NO,end:_T};const sf=()=>{};function wx(n){return typeof(n.getAttribute?n.getAttribute(xo):null)=="string"}function DO(n){const e=n.getAttribute?n.getAttribute(K_):null,t=n.getAttribute?n.getAttribute(q_):null;return e&&t}function OO(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Se.replacementClass)}function UO(){return Se.autoReplaceSvg===!0?of.replace:of[Se.autoReplaceSvg]||of.replace}function kO(n){return St.createElementNS("http://www.w3.org/2000/svg",n)}function FO(n){return St.createElement(n)}function vT(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?kO:FO}=e;if(typeof n=="string")return St.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(s){i.setAttribute(s,n.attributes[s])}),(n.children||[]).forEach(function(s){i.appendChild(vT(s,{ceFn:t}))}),i}function BO(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const of={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(vT(t),e)}),e.getAttribute(xo)===null&&Se.keepOriginalSource){let t=St.createComment(BO(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~$_(e).indexOf(Se.replacementClass))return of.replace(n);const i=new RegExp("".concat(Se.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const s=t[0].attributes.class.split(" ").reduce((o,a)=>(a===Se.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});t[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=t.map(s=>Fc(s)).join(`
`);e.setAttribute(xo,""),e.innerHTML=r}};function Ax(n){n()}function yT(n,e){const t=typeof e=="function"?e:sf;if(n.length===0)t();else{let i=Ax;Se.mutateApproach===X3&&(i=ws.requestAnimationFrame||Ax),i(()=>{const r=UO(),s=n0.begin("mutate");n.map(r),s(),t()})}}let i0=!1;function xT(){i0=!0}function ng(){i0=!1}let Kf=null;function bx(n){if(!mx||!Se.observeMutations)return;const{treeCallback:e=sf,nodeCallback:t=sf,pseudoElementsCallback:i=sf,observeMutationsRoot:r=St}=n;Kf=new mx(s=>{if(i0)return;const o=As();sl(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!wx(a.addedNodes[0])&&(Se.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Se.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&wx(a.target)&&~Q3.indexOf(a.attributeName))if(a.attributeName==="class"&&DO(a.target)){const{prefix:l,iconName:c}=wd($_(a.target));a.target.setAttribute(K_,l||o),c&&a.target.setAttribute(q_,c)}else OO(a.target)&&t(a.target)})}),Or&&Kf.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function zO(){Kf&&Kf.disconnect()}function HO(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),t}function VO(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let r=wd($_(n));return r.prefix||(r.prefix=As()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=vO(r.prefix,n.innerText)||J_(r.prefix,qm(n.innerText))),!r.iconName&&Se.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function GO(n){const e=sl(n.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return Se.autoA11y&&(t?e["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(i||bc()):(e["aria-hidden"]="true",e.focusable="false")),e}function WO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Wi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:r}=VO(n),s=GO(n),o=Zm("parseNodeAttributes",{},n);let a=e.styleParser?HO(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:Wi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:jO}=ji;function ST(n){const e=Se.autoReplaceSvg==="nest"?Cx(n,{styleParser:!1}):Cx(n);return~e.extra.classes.indexOf(iT)?bs("generateLayersText",n,e):bs("generateSvgReplacementMutation",n,e)}let Qi=new Set;tT.map(n=>{Qi.add("fa-".concat(n))});Object.keys(lo[wt]).map(Qi.add.bind(Qi));Object.keys(lo[Qn]).map(Qi.add.bind(Qi));Object.keys(lo[Jn]).map(Qi.add.bind(Qi));Qi=[...Qi];function Rx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Or)return Promise.resolve();const t=St.documentElement.classList,i=u=>t.add("".concat(vx,"-").concat(u)),r=u=>t.remove("".concat(vx,"-").concat(u)),s=Se.autoFetchSvg?Qi:tT.map(u=>"fa-".concat(u)).concat(Object.keys(jO));s.includes("fa")||s.push("fa");const o=[".".concat(iT,":not([").concat(xo,"])")].concat(s.map(u=>".".concat(u,":not([").concat(xo,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=sl(n.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=n0.begin("onTree"),c=a.reduce((u,f)=>{try{const d=ST(f);d&&u.push(d)}catch(d){eT||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{yT(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function XO(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ST(n).then(t=>{t&&yT([t],e)})}function YO(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Qm(e||{});let{mask:r}=t;return r&&(r=(r||{}).icon?r:Qm(r||{})),n(i,{...t,mask:r})}}const KO=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Wi,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!n)return;const{prefix:f,iconName:d,icon:p}=n;return Ad({type:"icon",...n},()=>(So("beforeDOMElementCreation",{iconDefinition:n,params:e}),Se.autoA11y&&(o?c["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(a||bc()):(c["aria-hidden"]="true",c.focusable="false")),t0({icons:{main:Jm(p),mask:r?Jm(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...Wi,...t},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var qO={mixout(){return{icon:YO(KO)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Rx,n.nodeCallback=XO,n}}},provides(n){n.i2svg=function(e){const{node:t=St,callback:i=()=>{}}=e;return Rx(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=t;return new Promise((d,p)=>{Promise.all([eg(i,o),c.iconName?eg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[g,m]=_;d([e,t0({icons:{main:g,mask:m},prefix:o,iconName:i,transform:a,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(p)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:r,transform:s,styles:o}=e;const a=Ed(o);a.length>0&&(i.style=a);let l;return Z_(s)&&(l=bs("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:i}}}},$O={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Ad({type:"layer"},()=>{So("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Se.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},ZO={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:r={},styles:s={}}=e;return Ad({type:"counter",content:n},()=>(So("beforeDOMElementCreation",{content:n,params:e}),PO({content:n.toString(),title:t,extra:{attributes:r,styles:s,classes:["".concat(Se.cssPrefix,"-layers-counter"),...i]}})))}}}},QO={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Wi,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return Ad({type:"text",content:n},()=>(So("beforeDOMElementCreation",{content:n,params:e}),Ex({content:n,transform:{...Wi,...t},title:i,extra:{attributes:s,styles:o,classes:["".concat(Se.cssPrefix,"-layers-text"),...r]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:r,extra:s}=t;let o=null,a=null;if(KE){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return Se.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Ex({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const JO=new RegExp('"',"ug"),Px=[1105920,1112319],Lx={FontAwesome:{normal:"fas",400:"fas"},...D3,...N3,...V3},ig=Object.keys(Lx).reduce((n,e)=>(n[e.toLowerCase()]=Lx[e],n),{}),eU=Object.keys(ig).reduce((n,e)=>{const t=ig[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function tU(n){const e=n.replace(JO,""),t=dO(e,0),i=t>=Px[0]&&t<=Px[1],r=e.length===2?e[0]===e[1]:!1;return{value:qm(r?e[0]:e),isSecondary:i||r}}function nU(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(ig[t]||{})[r]||eU[t]}function Ix(n,e){const t="".concat(j3).concat(e.replace(":","-"));return new Promise((i,r)=>{if(n.getAttribute(t)!==null)return i();const o=sl(n.children).filter(d=>d.getAttribute(jm)===e)[0],a=ws.getComputedStyle(n,e),l=a.getPropertyValue("font-family"),c=l.match($3),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return n.removeChild(o),i();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=nU(l,u);const{value:_,isSecondary:g}=tU(d),m=c[0].startsWith("FontAwesome");let h=J_(p,_),v=h;if(m){const y=yO(_);y.iconName&&y.prefix&&(h=y.iconName,p=y.prefix)}if(h&&!g&&(!o||o.getAttribute(K_)!==p||o.getAttribute(q_)!==v)){n.setAttribute(t,v),o&&n.removeChild(o);const y=WO(),{extra:x}=y;x.attributes[jm]=e,eg(h,p).then(w=>{const A=t0({...y,icons:{main:w,mask:e0()},prefix:p,iconName:v,extra:x,watchable:!0}),T=St.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(T,n.firstChild):n.appendChild(T),T.outerHTML=A.map(R=>Fc(R)).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function iU(n){return Promise.all([Ix(n,"::before"),Ix(n,"::after")])}function rU(n){return n.parentNode!==document.head&&!~Y3.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(jm)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Nx(n){if(Or)return new Promise((e,t)=>{const i=sl(n.querySelectorAll("*")).filter(rU).map(iU),r=n0.begin("searchPseudoElements");xT(),Promise.all(i).then(()=>{r(),ng(),e()}).catch(()=>{r(),ng(),t()})})}var sU={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Nx,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=St}=e;Se.searchPseudoElements&&Nx(t)}}};let Dx=!1;var oU={mixout(){return{dom:{unwatch(){xT(),Dx=!0}}}},hooks(){return{bootstrap(){bx(Zm("mutationObserverCallbacks",{}))},noAuto(){zO()},watch(n){const{observeMutationsRoot:e}=n;Dx?ng():bx(Zm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ox=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return t.flipX=!0,t;if(s&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(s){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},e)};var aU={mixout(){return{parse:{transform:n=>Ox(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=Ox(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...d.path}}]}]}}}};const $h={x:0,y:0,width:"100%",height:"100%"};function Ux(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function lU(n){return n.tag==="g"?n.children:[n]}var cU={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?wd(t.split(" ").map(r=>r.trim())):e0();return i.prefix||(i.prefix=As()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,d=oO({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...$h,fill:"white"}},_=c.children?{children:c.children.map(Ux)}:{},g={tag:"g",attributes:{...d.inner},children:[Ux({tag:c.tag,attributes:{...c.attributes,...d.path},..._})]},m={tag:"g",attributes:{...d.outer},children:[g]},h="mask-".concat(o||bc()),v="clip-".concat(o||bc()),y={tag:"mask",attributes:{...$h,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:lU(f)},y]};return t.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")"),...$h}}),{children:t,attributes:i}}}},uU={provides(n){let e=!1;ws.matchMedia&&(e=ws.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),t.push(o),t.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},fU={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},dU=[cO,qO,$O,ZO,QO,sU,oU,aU,cU,uU,fU];EO(dU,{mixoutsTo:ri});ri.noAuto;ri.config;ri.library;ri.dom;const rg=ri.parse;ri.findIconDefinition;ri.toHtml;const hU=ri.icon;ri.layer;ri.text;ri.counter;function kx(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Fi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kx(Object(t),!0).forEach(function(i){da(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kx(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function qf(n){"@babel/helpers - typeof";return qf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qf(n)}function da(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pU(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function mU(n,e){if(n==null)return{};var t=pU(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function sg(n){return gU(n)||_U(n)||vU(n)||yU()}function gU(n){if(Array.isArray(n))return og(n)}function _U(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function vU(n,e){if(n){if(typeof n=="string")return og(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return og(n,e)}}function og(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function yU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xU(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,o=n.shake,a=n.flash,l=n.spin,c=n.spinPulse,u=n.spinReverse,f=n.pulse,d=n.fixedWidth,p=n.inverse,_=n.border,g=n.listItem,m=n.flip,h=n.size,v=n.rotation,y=n.pull,x=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":_,"fa-li":g,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},da(e,"fa-".concat(h),typeof h<"u"&&h!==null),da(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),da(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),da(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(x).map(function(w){return x[w]?w:null}).filter(function(w){return w})}function SU(n){return n=n-0,n===n}function MT(n){return SU(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var MU=["style"];function EU(n){return n.charAt(0).toUpperCase()+n.slice(1)}function TU(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=MT(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[EU(r)]=s:e[r]=s,e},{})}function ET(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return ET(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=TU(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[MT(c)]=u}return l},{attrs:{}}),s=t.style,o=s===void 0?{}:s,a=mU(t,MU);return r.attrs.style=Fi(Fi({},r.attrs.style),o),n.apply(void 0,[e.tag,Fi(Fi({},r.attrs),a)].concat(sg(i)))}var TT=!1;try{TT=!0}catch{}function wU(){if(!TT&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Fx(n){if(n&&qf(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(rg.icon)return rg.icon(n);if(n===null)return null;if(n&&qf(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Zh(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?da({},n,e):{}}var Bx={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},r0=dg.forwardRef(function(n,e){var t=Fi(Fi({},Bx),n),i=t.icon,r=t.mask,s=t.symbol,o=t.className,a=t.title,l=t.titleId,c=t.maskId,u=Fx(i),f=Zh("classes",[].concat(sg(xU(t)),sg((o||"").split(" ")))),d=Zh("transform",typeof t.transform=="string"?rg.transform(t.transform):t.transform),p=Zh("mask",Fx(r)),_=hU(u,Fi(Fi(Fi(Fi({},f),d),p),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!_)return wU("Could not find icon",u),null;var g=_.abstract,m={ref:e};return Object.keys(t).forEach(function(h){Bx.hasOwnProperty(h)||(m[h]=t[h])}),AU(g[0],m)});r0.displayName="FontAwesomeIcon";r0.propTypes={beat:qe.bool,border:qe.bool,beatFade:qe.bool,bounce:qe.bool,className:qe.string,fade:qe.bool,flash:qe.bool,mask:qe.oneOfType([qe.object,qe.array,qe.string]),maskId:qe.string,fixedWidth:qe.bool,inverse:qe.bool,flip:qe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:qe.oneOfType([qe.object,qe.array,qe.string]),listItem:qe.bool,pull:qe.oneOf(["right","left"]),pulse:qe.bool,rotation:qe.oneOf([0,90,180,270]),shake:qe.bool,size:qe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:qe.bool,spinPulse:qe.bool,spinReverse:qe.bool,symbol:qe.oneOfType([qe.bool,qe.string]),title:qe.string,titleId:qe.string,transform:qe.oneOfType([qe.string,qe.object]),swapOpacity:qe.bool};var AU=ET.bind(null,dg.createElement);const bU={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},CU={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},RU=({likes:n,views:e})=>{const[t,i]=Ae.useState(!1),r=()=>{i(!t)};return ae.jsxs("div",{className:"user-interface",children:[ae.jsxs("div",{className:"pe-2",children:[ae.jsx("div",{className:"likes-counter",children:ae.jsxs("span",{children:[n," likes"]})}),ae.jsx("div",{className:"views-counter",children:ae.jsxs("span",{children:[e," visits"]})})]}),ae.jsx("button",{onClick:r,className:"like-button",children:ae.jsx(r0,{icon:t?bU:CU,color:"black"})})]})};function PU(){const[n,e]=Ae.useState(0),[t,i]=Ae.useState(0),[r,s]=Ae.useState(!1),[o,a]=Ae.useState(!0),[l,c]=Ae.useState(0),[u,f]=Ae.useState(0),[d,p]=Ae.useState(!1);Ae.useEffect(()=>{f(950),c(643)},[]);const _=()=>{n===3?(a(!1),p(!0)):e(m=>m+1)};Ae.useEffect(()=>{const m=Date.now(),h=setInterval(()=>{const v=Date.now()-m,y=Math.min(v/3e3*100,99);i(y),v>=3e3&&(clearInterval(h),i(100),setTimeout(()=>{s(!0)},500))},100);return()=>clearInterval(h)},[]);const g=()=>{_()};return ae.jsx("div",{className:"App",children:ae.jsxs("div",{className:"canvas-container",children:[ae.jsx(b3,{moveCamera:n>0,allowInteraction:d}),r?ae.jsxs(ae.Fragment,{children:[n===0&&ae.jsx(gb,{onClick:g}),n===1&&ae.jsx(_b,{onShowInteractiveElements:_}),n===2&&ae.jsx(vb,{onShowUserControls:_}),n===3&&o&&ae.jsx(yb,{onHide:_})]}):ae.jsx(xb,{progress:t}),ae.jsx(RU,{likes:l,views:u})]})})}Qh.createRoot(document.getElementById("root")).render(ae.jsx(dg.StrictMode,{children:ae.jsx(PU,{})}));
