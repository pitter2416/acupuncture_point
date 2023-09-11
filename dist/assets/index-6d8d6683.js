(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xa(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const tt={},$i=[],on=()=>{},gd=()=>!1,_d=/^on[^a-z]/,io=n=>_d.test(n),qa=n=>n.startsWith("onUpdate:"),xt=Object.assign,ja=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xd=Object.prototype.hasOwnProperty,Ye=(n,e)=>xd.call(n,e),Fe=Array.isArray,Ps=n=>so(n)==="[object Map]",vd=n=>so(n)==="[object Set]",Ge=n=>typeof n=="function",yt=n=>typeof n=="string",Ya=n=>typeof n=="symbol",ot=n=>n!==null&&typeof n=="object",_h=n=>ot(n)&&Ge(n.then)&&Ge(n.catch),yd=Object.prototype.toString,so=n=>yd.call(n),Md=n=>so(n).slice(8,-1),Sd=n=>so(n)==="[object Object]",Ka=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ro=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ed=/-(\w)/g,gn=ro(n=>n.replace(Ed,(e,t)=>t?t.toUpperCase():"")),bd=/\B([A-Z])/g,fs=ro(n=>n.replace(bd,"-$1").toLowerCase()),oo=ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),To=ro(n=>n?`on${oo(n)}`:""),Gs=(n,e)=>!Object.is(n,e),Ao=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},jr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Td=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bl;const _a=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Cd(i):$a(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(yt(n))return n;if(ot(n))return n}}const Ad=/;(?![^(]*\))/g,wd=/:([^]+)/,Rd=/\/\*[^]*?\*\//g;function Cd(n){const e={};return n.replace(Rd,"").split(Ad).forEach(t=>{if(t){const i=t.split(wd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Za(n){let e="";if(yt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Za(n[t]);i&&(e+=i+" ")}else if(ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ld=Xa(Pd);function xh(n){return!!n||n===""}let Zt;class zd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ud(n,e=Zt){e&&e.active&&e.effects.push(n)}function Dd(){return Zt}const Ja=n=>{const e=new Set(n);return e.w=0,e.n=0,e},vh=n=>(n.w&ei)>0,yh=n=>(n.n&ei)>0,Id=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ei},Nd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];vh(s)&&!yh(s)?s.delete(n):e[t++]=s,s.w&=~ei,s.n&=~ei}e.length=t}},xa=new WeakMap;let Ts=0,ei=1;const va=30;let Qt;const di=Symbol(""),ya=Symbol("");class Qa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ud(this,i)}run(){if(!this.active)return this.fn();let e=Qt,t=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,Yn=!0,ei=1<<++Ts,Ts<=va?Id(this):Hl(this),this.fn()}finally{Ts<=va&&Nd(this),ei=1<<--Ts,Qt=this.parent,Yn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Hl(this),this.onStop&&this.onStop(),this.active=!1)}}function Hl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Yn=!0;const Mh=[];function ds(){Mh.push(Yn),Yn=!1}function ps(){const n=Mh.pop();Yn=n===void 0?!0:n}function It(n,e,t){if(Yn&&Qt){let i=xa.get(n);i||xa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Ja()),Sh(s)}}function Sh(n,e){let t=!1;Ts<=va?yh(n)||(n.n|=ei,t=!vh(n)):t=!n.has(Qt),t&&(n.add(Qt),Qt.deps.push(n))}function Dn(n,e,t,i,s,r){const o=xa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?Ka(t)&&a.push(o.get("length")):(a.push(o.get(di)),Ps(n)&&a.push(o.get(ya)));break;case"delete":Fe(n)||(a.push(o.get(di)),Ps(n)&&a.push(o.get(ya)));break;case"set":Ps(n)&&a.push(o.get(di));break}if(a.length===1)a[0]&&Ma(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ma(Ja(l))}}function Ma(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&Gl(i);for(const i of t)i.computed||Gl(i)}function Gl(n,e){(n!==Qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Od=Xa("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ya)),Fd=el(),Bd=el(!1,!0),Hd=el(!0),Vl=Gd();function Gd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let r=0,o=this.length;r<o;r++)It(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ds();const i=Ke(this)[e].apply(this,t);return ps(),i}}),n}function Vd(n){const e=Ke(this);return It(e,"has",n),e.hasOwnProperty(n)}function el(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?sp:Rh:e?wh:Ah).get(i))return i;const o=Fe(i);if(!n){if(o&&Ye(Vl,s))return Reflect.get(Vl,s,r);if(s==="hasOwnProperty")return Vd}const a=Reflect.get(i,s,r);return(Ya(s)?Eh.has(s):Od(s))||(n||It(i,"get",s),e)?a:bt(a)?o&&Ka(s)?a:a.value:ot(a)?n?Ph(a):lo(a):a}}const kd=bh(),Wd=bh(!0);function bh(n=!1){return function(t,i,s,r){let o=t[i];if(is(o)&&bt(o)&&!bt(s))return!1;if(!n&&(!Yr(s)&&!is(s)&&(o=Ke(o),s=Ke(s)),!Fe(t)&&bt(o)&&!bt(s)))return o.value=s,!0;const a=Fe(t)&&Ka(i)?Number(i)<t.length:Ye(t,i),l=Reflect.set(t,i,s,r);return t===Ke(r)&&(a?Gs(s,o)&&Dn(t,"set",i,s):Dn(t,"add",i,s)),l}}function Xd(n,e){const t=Ye(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Dn(n,"delete",e,void 0),i}function qd(n,e){const t=Reflect.has(n,e);return(!Ya(e)||!Eh.has(e))&&It(n,"has",e),t}function jd(n){return It(n,"iterate",Fe(n)?"length":di),Reflect.ownKeys(n)}const Th={get:Fd,set:kd,deleteProperty:Xd,has:qd,ownKeys:jd},Yd={get:Hd,set(n,e){return!0},deleteProperty(n,e){return!0}},Kd=xt({},Th,{get:Bd,set:Wd}),tl=n=>n,ao=n=>Reflect.getPrototypeOf(n);function or(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ke(n),r=Ke(e);t||(e!==r&&It(s,"get",e),It(s,"get",r));const{has:o}=ao(s),a=i?tl:t?sl:Vs;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function ar(n,e=!1){const t=this.__v_raw,i=Ke(t),s=Ke(n);return e||(n!==s&&It(i,"has",n),It(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function lr(n,e=!1){return n=n.__v_raw,!e&&It(Ke(n),"iterate",di),Reflect.get(n,"size",n)}function kl(n){n=Ke(n);const e=Ke(this);return ao(e).has.call(e,n)||(e.add(n),Dn(e,"add",n,n)),this}function Wl(n,e){e=Ke(e);const t=Ke(this),{has:i,get:s}=ao(t);let r=i.call(t,n);r||(n=Ke(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Gs(e,o)&&Dn(t,"set",n,e):Dn(t,"add",n,e),this}function Xl(n){const e=Ke(this),{has:t,get:i}=ao(e);let s=t.call(e,n);s||(n=Ke(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Dn(e,"delete",n,void 0),r}function ql(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&Dn(n,"clear",void 0,void 0),t}function cr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ke(o),l=e?tl:n?sl:Vs;return!n&&It(a,"iterate",di),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ur(n,e,t){return function(...i){const s=this.__v_raw,r=Ke(s),o=Ps(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tl:e?sl:Vs;return!e&&It(r,"iterate",l?ya:di),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function On(n){return function(...e){return n==="delete"?!1:this}}function $d(){const n={get(r){return or(this,r)},get size(){return lr(this)},has:ar,add:kl,set:Wl,delete:Xl,clear:ql,forEach:cr(!1,!1)},e={get(r){return or(this,r,!1,!0)},get size(){return lr(this)},has:ar,add:kl,set:Wl,delete:Xl,clear:ql,forEach:cr(!1,!0)},t={get(r){return or(this,r,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:cr(!0,!1)},i={get(r){return or(this,r,!0,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ur(r,!1,!1),t[r]=ur(r,!0,!1),e[r]=ur(r,!1,!0),i[r]=ur(r,!0,!0)}),[n,t,e,i]}const[Zd,Jd,Qd,ep]=$d();function nl(n,e){const t=e?n?ep:Qd:n?Jd:Zd;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ye(t,s)&&s in i?t:i,s,r)}const tp={get:nl(!1,!1)},np={get:nl(!1,!0)},ip={get:nl(!0,!1)},Ah=new WeakMap,wh=new WeakMap,Rh=new WeakMap,sp=new WeakMap;function rp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(n){return n.__v_skip||!Object.isExtensible(n)?0:rp(Md(n))}function lo(n){return is(n)?n:il(n,!1,Th,tp,Ah)}function Ch(n){return il(n,!1,Kd,np,wh)}function Ph(n){return il(n,!0,Yd,ip,Rh)}function il(n,e,t,i,s){if(!ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=op(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Zi(n){return is(n)?Zi(n.__v_raw):!!(n&&n.__v_isReactive)}function is(n){return!!(n&&n.__v_isReadonly)}function Yr(n){return!!(n&&n.__v_isShallow)}function Lh(n){return Zi(n)||is(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function zh(n){return jr(n,"__v_skip",!0),n}const Vs=n=>ot(n)?lo(n):n,sl=n=>ot(n)?Ph(n):n;function Uh(n){Yn&&Qt&&(n=Ke(n),Sh(n.dep||(n.dep=Ja())))}function Dh(n,e){n=Ke(n);const t=n.dep;t&&Ma(t)}function bt(n){return!!(n&&n.__v_isRef===!0)}function Ih(n){return Nh(n,!1)}function ap(n){return Nh(n,!0)}function Nh(n,e){return bt(n)?n:new lp(n,e)}class lp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Vs(e)}get value(){return Uh(this),this._value}set value(e){const t=this.__v_isShallow||Yr(e)||is(e);e=t?e:Ke(e),Gs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Vs(e),Dh(this))}}function Ji(n){return bt(n)?n.value:n}const cp={get:(n,e,t)=>Ji(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return bt(s)&&!bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Oh(n){return Zi(n)?n:new Proxy(n,cp)}class up{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qa(e,()=>{this._dirty||(this._dirty=!0,Dh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ke(this);return Uh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hp(n,e,t=!1){let i,s;const r=Ge(n);return r?(i=n,s=on):(i=n.get,s=n.set),new up(i,s,r||!s,t)}function Kn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){co(r,e,t)}return s}function an(n,e,t,i){if(Ge(n)){const r=Kn(n,e,t,i);return r&&_h(r)&&r.catch(o=>{co(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(an(n[r],e,t,i));return s}function co(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[n,o,a]);return}}fp(n,t,s,i)}function fp(n,e,t,i=!0){console.error(n)}let ks=!1,Sa=!1;const Et=[];let dn=0;const Qi=[];let Pn=null,ui=0;const Fh=Promise.resolve();let rl=null;function Bh(n){const e=rl||Fh;return n?e.then(this?n.bind(this):n):e}function dp(n){let e=dn+1,t=Et.length;for(;e<t;){const i=e+t>>>1;Ws(Et[i])<n?e=i+1:t=i}return e}function ol(n){(!Et.length||!Et.includes(n,ks&&n.allowRecurse?dn+1:dn))&&(n.id==null?Et.push(n):Et.splice(dp(n.id),0,n),Hh())}function Hh(){!ks&&!Sa&&(Sa=!0,rl=Fh.then(Vh))}function pp(n){const e=Et.indexOf(n);e>dn&&Et.splice(e,1)}function mp(n){Fe(n)?Qi.push(...n):(!Pn||!Pn.includes(n,n.allowRecurse?ui+1:ui))&&Qi.push(n),Hh()}function jl(n,e=ks?dn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function Gh(n){if(Qi.length){const e=[...new Set(Qi)];if(Qi.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((t,i)=>Ws(t)-Ws(i)),ui=0;ui<Pn.length;ui++)Pn[ui]();Pn=null,ui=0}}const Ws=n=>n.id==null?1/0:n.id,gp=(n,e)=>{const t=Ws(n)-Ws(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Vh(n){Sa=!1,ks=!0,Et.sort(gp);const e=on;try{for(dn=0;dn<Et.length;dn++){const t=Et[dn];t&&t.active!==!1&&Kn(t,null,14)}}finally{dn=0,Et.length=0,Gh(),ks=!1,rl=null,(Et.length||Qi.length)&&Vh()}}function _p(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||tt;f&&(s=t.map(p=>yt(p)?p.trim():p)),h&&(s=t.map(Td))}let a,l=i[a=To(e)]||i[a=To(gn(e))];!l&&r&&(l=i[a=To(fs(e))]),l&&an(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,s)}}function kh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=kh(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ot(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>o[l]=null):xt(o,r),ot(n)&&i.set(n,o),o)}function uo(n,e){return!n||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,fs(e))||Ye(n,e))}let sn=null,Wh=null;function Kr(n){const e=sn;return sn=n,Wh=n&&n.type.__scopeId||null,e}function xp(n,e=sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sc(-1);const r=Kr(e);let o;try{o=n(...s)}finally{Kr(r),i._d&&sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:x}=n;let m,d;const E=Kr(n);try{if(t.shapeFlag&4){const M=s||i;m=hn(u.call(M,M,h,r,p,f,_)),d=l}else{const M=e;m=hn(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),d=e.props?l:vp(l)}}catch(M){zs.length=0,co(M,n,1),m=qt(Xs)}let y=m;if(d&&x!==!1){const M=Object.keys(d),{shapeFlag:P}=y;M.length&&P&7&&(o&&M.some(qa)&&(d=yp(d,o)),y=ss(y,d))}return t.dirs&&(y=ss(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,Kr(E),m}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||io(t))&&((e||(e={}))[t]=n[t]);return e},yp=(n,e)=>{const t={};for(const i in n)(!qa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mp(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Yl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!uo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yl(i,o,c):!0:!!o;return!1}function Yl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!uo(t,r))return!0}return!1}function Sp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Ep=n=>n.__isSuspense;function bp(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):mp(n)}const hr={};function Gr(n,e,t){return Xh(n,e,t)}function Xh(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=tt){var a;const l=Dd()===((a=vt)==null?void 0:a.scope)?vt:null;let c,u=!1,h=!1;if(bt(n)?(c=()=>n.value,u=Yr(n)):Zi(n)?(c=()=>n,i=!0):Fe(n)?(h=!0,u=n.some(M=>Zi(M)||Yr(M)),c=()=>n.map(M=>{if(bt(M))return M.value;if(Zi(M))return ji(M);if(Ge(M))return Kn(M,l,2)})):Ge(n)?e?c=()=>Kn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),an(n,l,3,[p])}:c=on,e&&i){const M=c;c=()=>ji(M())}let f,p=M=>{f=E.onStop=()=>{Kn(M,l,4)}},_;if(js)if(p=on,e?t&&an(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const M=y0();_=M.__watcherHandles||(M.__watcherHandles=[])}else return on;let x=h?new Array(n.length).fill(hr):hr;const m=()=>{if(E.active)if(e){const M=E.run();(i||u||(h?M.some((P,L)=>Gs(P,x[L])):Gs(M,x)))&&(f&&f(),an(e,l,3,[M,x===hr?void 0:h&&x[0]===hr?[]:x,p]),x=M)}else E.run()};m.allowRecurse=!!e;let d;s==="sync"?d=m:s==="post"?d=()=>Lt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>ol(m));const E=new Qa(c,d);e?t?m():x=E.run():s==="post"?Lt(E.run.bind(E),l&&l.suspense):E.run();const y=()=>{E.stop(),l&&l.scope&&ja(l.scope.effects,E)};return _&&_.push(y),y}function Tp(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?qh(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=vt;rs(this);const a=Xh(s,r.bind(i),t);return o?rs(o):pi(),a}function qh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ji(n,e){if(!ot(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),bt(n))ji(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)ji(n[t],e);else if(vd(n)||Ps(n))n.forEach(t=>{ji(t,e)});else if(Sd(n))for(const t in n)ji(n[t],e);return n}function ii(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ds(),an(l,t,8,[n.el,a,n,e]),ps())}}function jh(n,e){return Ge(n)?(()=>xt({name:n.name},e,{setup:n}))():n}const Vr=n=>!!n.type.__asyncLoader,Yh=n=>n.type.__isKeepAlive;function Ap(n,e){Kh(n,"a",e)}function wp(n,e){Kh(n,"da",e)}function Kh(n,e,t=vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ho(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Yh(s.parent.vnode)&&Rp(i,e,t,s),s=s.parent}}function Rp(n,e,t,i){const s=ho(e,n,i,!0);Zh(()=>{ja(i[e],s)},t)}function ho(n,e,t=vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ds(),rs(t);const a=an(e,t,n,o);return pi(),ps(),a});return i?s.unshift(r):s.push(r),r}}const Nn=n=>(e,t=vt)=>(!js||n==="sp")&&ho(n,(...i)=>e(...i),t),Cp=Nn("bm"),$h=Nn("m"),Pp=Nn("bu"),Lp=Nn("u"),zp=Nn("bum"),Zh=Nn("um"),Up=Nn("sp"),Dp=Nn("rtg"),Ip=Nn("rtc");function Np(n,e=vt){ho("ec",n,e)}const Jh="components";function Op(n,e){return Bp(Jh,n,!0,e)||n}const Fp=Symbol.for("v-ndc");function Bp(n,e,t=!0,i=!1){const s=sn||vt;if(s){const r=s.type;if(n===Jh){const a=_0(r,!1);if(a&&(a===e||a===gn(e)||a===oo(gn(e))))return r}const o=Kl(s[n]||r[n],e)||Kl(s.appContext[n],e);return!o&&i?r:o}}function Kl(n,e){return n&&(n[e]||n[gn(e)]||n[oo(gn(e))])}const Ea=n=>n?ff(n)?hl(n)||n.proxy:Ea(n.parent):null,Ls=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ea(n.parent),$root:n=>Ea(n.root),$emit:n=>n.emit,$options:n=>al(n),$forceUpdate:n=>n.f||(n.f=()=>ol(n.update)),$nextTick:n=>n.n||(n.n=Bh.bind(n.proxy)),$watch:n=>Tp.bind(n)}),Ro=(n,e)=>n!==tt&&!n.__isScriptSetup&&Ye(n,e),Hp={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ro(i,e))return o[e]=1,i[e];if(s!==tt&&Ye(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,r[e];if(t!==tt&&Ye(t,e))return o[e]=4,t[e];ba&&(o[e]=0)}}const u=Ls[e];let h,f;if(u)return e==="$attrs"&&It(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==tt&&Ye(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ye(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ro(s,e)?(s[e]=t,!0):i!==tt&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==tt&&Ye(n,o)||Ro(e,o)||(a=r[0])&&Ye(a,o)||Ye(i,o)||Ye(Ls,o)||Ye(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $l(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ba=!0;function Gp(n){const e=al(n),t=n.proxy,i=n.ctx;ba=!1,e.beforeCreate&&Zl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:y,unmounted:M,render:P,renderTracked:L,renderTriggered:C,errorCaptured:H,serverPrefetch:S,expose:A,inheritAttrs:J,components:de,directives:F,filters:G}=e;if(c&&Vp(c,i,null),o)for(const V in o){const $=o[V];Ge($)&&(i[V]=$.bind(t))}if(s){const V=s.call(t,t);ot(V)&&(n.data=lo(V))}if(ba=!0,r)for(const V in r){const $=r[V],pe=Ge($)?$.bind(t,t):Ge($.get)?$.get.bind(t,t):on,ce=!Ge($)&&Ge($.set)?$.set.bind(t):on,k=en({get:pe,set:ce});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>k.value,set:j=>k.value=j})}if(a)for(const V in a)Qh(a[V],i,t,V);if(l){const V=Ge(l)?l.call(t):l;Reflect.ownKeys(V).forEach($=>{kr($,V[$])})}u&&Zl(u,n,"c");function te(V,$){Fe($)?$.forEach(pe=>V(pe.bind(t))):$&&V($.bind(t))}if(te(Cp,h),te($h,f),te(Pp,p),te(Lp,_),te(Ap,x),te(wp,m),te(Np,H),te(Ip,L),te(Dp,C),te(zp,E),te(Zh,M),te(Up,S),Fe(A))if(A.length){const V=n.exposed||(n.exposed={});A.forEach($=>{Object.defineProperty(V,$,{get:()=>t[$],set:pe=>t[$]=pe})})}else n.exposed||(n.exposed={});P&&n.render===on&&(n.render=P),J!=null&&(n.inheritAttrs=J),de&&(n.components=de),F&&(n.directives=F)}function Vp(n,e,t=on){Fe(n)&&(n=Ta(n));for(const i in n){const s=n[i];let r;ot(s)?"default"in s?r=pn(s.from||i,s.default,!0):r=pn(s.from||i):r=pn(s),bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zl(n,e,t){an(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qh(n,e,t,i){const s=i.includes(".")?qh(t,i):()=>t[i];if(yt(n)){const r=e[n];Ge(r)&&Gr(s,r)}else if(Ge(n))Gr(s,n.bind(t));else if(ot(n))if(Fe(n))n.forEach(r=>Qh(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&Gr(s,r,n)}}function al(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>$r(l,c,o,!0)),$r(l,e,o)),ot(e)&&r.set(e,l),l}function $r(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&$r(n,r,t,!0),s&&s.forEach(o=>$r(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=kp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const kp={data:Jl,props:Ql,emits:Ql,methods:As,computed:As,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:As,directives:As,watch:Xp,provide:Jl,inject:Wp};function Jl(n,e){return e?n?function(){return xt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Wp(n,e){return As(Ta(n),Ta(e))}function Ta(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function As(n,e){return n?xt(Object.create(null),n,e):e}function Ql(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:xt(Object.create(null),$l(n),$l(e??{})):e}function Xp(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function ef(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function jp(n,e){return function(i,s=null){Ge(i)||(i=xt({},i)),s!=null&&!ot(s)&&(s=null);const r=ef(),o=new Set;let a=!1;const l=r.app={_uid:qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:M0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=qt(i,s);return f.appContext=r,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,hl(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Zr=l;try{return c()}finally{Zr=null}}};return l}}let Zr=null;function kr(n,e){if(vt){let t=vt.provides;const i=vt.parent&&vt.parent.provides;i===t&&(t=vt.provides=Object.create(i)),t[n]=e}}function pn(n,e,t=!1){const i=vt||sn;if(i||Zr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Zr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function Yp(n,e,t,i=!1){const s={},r={};jr(r,po,1),n.propsDefaults=Object.create(null),tf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Ch(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Kp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ke(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(uo(n.emitsOptions,f))continue;const p=e[f];if(l)if(Ye(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=gn(f);s[_]=Aa(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{tf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ye(e,h)&&((u=fs(h))===h||!Ye(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Aa(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ye(e,h))&&(delete r[h],c=!0)}c&&Dn(n,"set","$attrs")}function tf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;s&&Ye(s,u=gn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ke(t),c=a||tt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Aa(s,l,h,c[h],n,!Ye(c,h))}}return o}function Aa(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(rs(s),i=c[t]=l.call(null,e),pi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===fs(t))&&(i=!0))}return i}function nf(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=h=>{l=!0;const[f,p]=nf(h,e,!0);xt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ot(n)&&i.set(n,$i),$i;if(Fe(r))for(let u=0;u<r.length;u++){const h=gn(r[u]);ec(h)&&(o[h]=tt)}else if(r)for(const u in r){const h=gn(u);if(ec(h)){const f=r[u],p=o[h]=Fe(f)||Ge(f)?{type:f}:xt({},f);if(p){const _=ic(Boolean,p.type),x=ic(String,p.type);p[0]=_>-1,p[1]=x<0||_<x,(_>-1||Ye(p,"default"))&&a.push(h)}}}const c=[o,a];return ot(n)&&i.set(n,c),c}function ec(n){return n[0]!=="$"}function tc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function nc(n,e){return tc(n)===tc(e)}function ic(n,e){return Fe(e)?e.findIndex(t=>nc(t,n)):Ge(e)&&nc(e,n)?0:-1}const sf=n=>n[0]==="_"||n==="$stable",ll=n=>Fe(n)?n.map(hn):[hn(n)],$p=(n,e,t)=>{if(e._n)return e;const i=xp((...s)=>ll(e(...s)),t);return i._c=!1,i},rf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(sf(s))continue;const r=n[s];if(Ge(r))e[s]=$p(s,r,i);else if(r!=null){const o=ll(r);e[s]=()=>o}}},of=(n,e)=>{const t=ll(e);n.slots.default=()=>t},Zp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),jr(e,"_",t)):rf(e,n.slots={})}else n.slots={},e&&of(n,e);jr(n.slots,po,1)},Jp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(xt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,rf(e,s)),o=e}else e&&(of(n,e),o={default:1});if(r)for(const a in s)!sf(a)&&!(a in o)&&delete s[a]};function wa(n,e,t,i,s=!1){if(Fe(n)){n.forEach((f,p)=>wa(f,e&&(Fe(e)?e[p]:e),t,i,s));return}if(Vr(i)&&!s)return;const r=i.shapeFlag&4?hl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,Ye(h,c)&&(h[c]=null)):bt(c)&&(c.value=null)),Ge(l))Kn(l,a,12,[o,u]);else{const f=yt(l),p=bt(l);if(f||p){const _=()=>{if(n.f){const x=f?Ye(h,l)?h[l]:u[l]:l.value;s?Fe(x)&&ja(x,r):Fe(x)?x.includes(r)||x.push(r):f?(u[l]=[r],Ye(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Ye(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Lt(_,t)):_()}}}const Lt=bp;function Qp(n){return e0(n)}function e0(n,e){const t=_a();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=on,insertStaticContent:_}=n,x=(g,T,w,D=null,U=null,W=null,Q=!1,q=null,ie=!!T.dynamicChildren)=>{if(g===T)return;g&&!vs(g,T)&&(D=B(g),j(g,U,W,!0),g=null),T.patchFlag===-2&&(ie=!1,T.dynamicChildren=null);const{type:ne,ref:Ae,shapeFlag:b}=T;switch(ne){case fo:m(g,T,w,D);break;case Xs:d(g,T,w,D);break;case Co:g==null&&E(T,w,D,Q);break;case Ln:de(g,T,w,D,U,W,Q,q,ie);break;default:b&1?P(g,T,w,D,U,W,Q,q,ie):b&6?F(g,T,w,D,U,W,Q,q,ie):(b&64||b&128)&&ne.process(g,T,w,D,U,W,Q,q,ie,fe)}Ae!=null&&U&&wa(Ae,g&&g.ref,W,T||g,!T)},m=(g,T,w,D)=>{if(g==null)i(T.el=a(T.children),w,D);else{const U=T.el=g.el;T.children!==g.children&&c(U,T.children)}},d=(g,T,w,D)=>{g==null?i(T.el=l(T.children||""),w,D):T.el=g.el},E=(g,T,w,D)=>{[g.el,g.anchor]=_(g.children,T,w,D,g.el,g.anchor)},y=({el:g,anchor:T},w,D)=>{let U;for(;g&&g!==T;)U=f(g),i(g,w,D),g=U;i(T,w,D)},M=({el:g,anchor:T})=>{let w;for(;g&&g!==T;)w=f(g),s(g),g=w;s(T)},P=(g,T,w,D,U,W,Q,q,ie)=>{Q=Q||T.type==="svg",g==null?L(T,w,D,U,W,Q,q,ie):S(g,T,U,W,Q,q,ie)},L=(g,T,w,D,U,W,Q,q)=>{let ie,ne;const{type:Ae,props:b,shapeFlag:v,transition:O,dirs:se}=g;if(ie=g.el=o(g.type,W,b&&b.is,b),v&8?u(ie,g.children):v&16&&H(g.children,ie,null,D,U,W&&Ae!=="foreignObject",Q,q),se&&ii(g,null,D,"created"),C(ie,g,g.scopeId,Q,D),b){for(const ue in b)ue!=="value"&&!Hr(ue)&&r(ie,ue,null,b[ue],W,g.children,D,U,Le);"value"in b&&r(ie,"value",null,b.value),(ne=b.onVnodeBeforeMount)&&un(ne,D,g)}se&&ii(g,null,D,"beforeMount");const ae=(!U||U&&!U.pendingBranch)&&O&&!O.persisted;ae&&O.beforeEnter(ie),i(ie,T,w),((ne=b&&b.onVnodeMounted)||ae||se)&&Lt(()=>{ne&&un(ne,D,g),ae&&O.enter(ie),se&&ii(g,null,D,"mounted")},U)},C=(g,T,w,D,U)=>{if(w&&p(g,w),D)for(let W=0;W<D.length;W++)p(g,D[W]);if(U){let W=U.subTree;if(T===W){const Q=U.vnode;C(g,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},H=(g,T,w,D,U,W,Q,q,ie=0)=>{for(let ne=ie;ne<g.length;ne++){const Ae=g[ne]=q?kn(g[ne]):hn(g[ne]);x(null,Ae,T,w,D,U,W,Q,q)}},S=(g,T,w,D,U,W,Q)=>{const q=T.el=g.el;let{patchFlag:ie,dynamicChildren:ne,dirs:Ae}=T;ie|=g.patchFlag&16;const b=g.props||tt,v=T.props||tt;let O;w&&si(w,!1),(O=v.onVnodeBeforeUpdate)&&un(O,w,T,g),Ae&&ii(T,g,w,"beforeUpdate"),w&&si(w,!0);const se=U&&T.type!=="foreignObject";if(ne?A(g.dynamicChildren,ne,q,w,D,se,W):Q||$(g,T,q,null,w,D,se,W,!1),ie>0){if(ie&16)J(q,T,b,v,w,D,U);else if(ie&2&&b.class!==v.class&&r(q,"class",null,v.class,U),ie&4&&r(q,"style",b.style,v.style,U),ie&8){const ae=T.dynamicProps;for(let ue=0;ue<ae.length;ue++){const Te=ae[ue],me=b[Te],Z=v[Te];(Z!==me||Te==="value")&&r(q,Te,me,Z,U,g.children,w,D,Le)}}ie&1&&g.children!==T.children&&u(q,T.children)}else!Q&&ne==null&&J(q,T,b,v,w,D,U);((O=v.onVnodeUpdated)||Ae)&&Lt(()=>{O&&un(O,w,T,g),Ae&&ii(T,g,w,"updated")},D)},A=(g,T,w,D,U,W,Q)=>{for(let q=0;q<T.length;q++){const ie=g[q],ne=T[q],Ae=ie.el&&(ie.type===Ln||!vs(ie,ne)||ie.shapeFlag&70)?h(ie.el):w;x(ie,ne,Ae,null,D,U,W,Q,!0)}},J=(g,T,w,D,U,W,Q)=>{if(w!==D){if(w!==tt)for(const q in w)!Hr(q)&&!(q in D)&&r(g,q,w[q],null,Q,T.children,U,W,Le);for(const q in D){if(Hr(q))continue;const ie=D[q],ne=w[q];ie!==ne&&q!=="value"&&r(g,q,ne,ie,Q,T.children,U,W,Le)}"value"in D&&r(g,"value",w.value,D.value)}},de=(g,T,w,D,U,W,Q,q,ie)=>{const ne=T.el=g?g.el:a(""),Ae=T.anchor=g?g.anchor:a("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:O}=T;O&&(q=q?q.concat(O):O),g==null?(i(ne,w,D),i(Ae,w,D),H(T.children,w,Ae,U,W,Q,q,ie)):b>0&&b&64&&v&&g.dynamicChildren?(A(g.dynamicChildren,v,w,U,W,Q,q),(T.key!=null||U&&T===U.subTree)&&af(g,T,!0)):$(g,T,w,Ae,U,W,Q,q,ie)},F=(g,T,w,D,U,W,Q,q,ie)=>{T.slotScopeIds=q,g==null?T.shapeFlag&512?U.ctx.activate(T,w,D,Q,ie):G(T,w,D,U,W,Q,ie):Y(g,T,ie)},G=(g,T,w,D,U,W,Q)=>{const q=g.component=f0(g,D,U);if(Yh(g)&&(q.ctx.renderer=fe),d0(q),q.asyncDep){if(U&&U.registerDep(q,te),!g.el){const ie=q.subTree=qt(Xs);d(null,ie,T,w)}return}te(q,g,T,w,U,W,Q)},Y=(g,T,w)=>{const D=T.component=g.component;if(Mp(g,T,w))if(D.asyncDep&&!D.asyncResolved){V(D,T,w);return}else D.next=T,pp(D.update),D.update();else T.el=g.el,D.vnode=T},te=(g,T,w,D,U,W,Q)=>{const q=()=>{if(g.isMounted){let{next:Ae,bu:b,u:v,parent:O,vnode:se}=g,ae=Ae,ue;si(g,!1),Ae?(Ae.el=se.el,V(g,Ae,Q)):Ae=se,b&&Ao(b),(ue=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&un(ue,O,Ae,se),si(g,!0);const Te=wo(g),me=g.subTree;g.subTree=Te,x(me,Te,h(me.el),B(me),g,U,W),Ae.el=Te.el,ae===null&&Sp(g,Te.el),v&&Lt(v,U),(ue=Ae.props&&Ae.props.onVnodeUpdated)&&Lt(()=>un(ue,O,Ae,se),U)}else{let Ae;const{el:b,props:v}=T,{bm:O,m:se,parent:ae}=g,ue=Vr(T);if(si(g,!1),O&&Ao(O),!ue&&(Ae=v&&v.onVnodeBeforeMount)&&un(Ae,ae,T),si(g,!0),b&&Ee){const Te=()=>{g.subTree=wo(g),Ee(b,g.subTree,g,U,null)};ue?T.type.__asyncLoader().then(()=>!g.isUnmounted&&Te()):Te()}else{const Te=g.subTree=wo(g);x(null,Te,w,D,g,U,W),T.el=Te.el}if(se&&Lt(se,U),!ue&&(Ae=v&&v.onVnodeMounted)){const Te=T;Lt(()=>un(Ae,ae,Te),U)}(T.shapeFlag&256||ae&&Vr(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&Lt(g.a,U),g.isMounted=!0,T=w=D=null}},ie=g.effect=new Qa(q,()=>ol(ne),g.scope),ne=g.update=()=>ie.run();ne.id=g.uid,si(g,!0),ne()},V=(g,T,w)=>{T.component=g;const D=g.vnode.props;g.vnode=T,g.next=null,Kp(g,T.props,D,w),Jp(g,T.children,w),ds(),jl(),ps()},$=(g,T,w,D,U,W,Q,q,ie=!1)=>{const ne=g&&g.children,Ae=g?g.shapeFlag:0,b=T.children,{patchFlag:v,shapeFlag:O}=T;if(v>0){if(v&128){ce(ne,b,w,D,U,W,Q,q,ie);return}else if(v&256){pe(ne,b,w,D,U,W,Q,q,ie);return}}O&8?(Ae&16&&Le(ne,U,W),b!==ne&&u(w,b)):Ae&16?O&16?ce(ne,b,w,D,U,W,Q,q,ie):Le(ne,U,W,!0):(Ae&8&&u(w,""),O&16&&H(b,w,D,U,W,Q,q,ie))},pe=(g,T,w,D,U,W,Q,q,ie)=>{g=g||$i,T=T||$i;const ne=g.length,Ae=T.length,b=Math.min(ne,Ae);let v;for(v=0;v<b;v++){const O=T[v]=ie?kn(T[v]):hn(T[v]);x(g[v],O,w,null,U,W,Q,q,ie)}ne>Ae?Le(g,U,W,!0,!1,b):H(T,w,D,U,W,Q,q,ie,b)},ce=(g,T,w,D,U,W,Q,q,ie)=>{let ne=0;const Ae=T.length;let b=g.length-1,v=Ae-1;for(;ne<=b&&ne<=v;){const O=g[ne],se=T[ne]=ie?kn(T[ne]):hn(T[ne]);if(vs(O,se))x(O,se,w,null,U,W,Q,q,ie);else break;ne++}for(;ne<=b&&ne<=v;){const O=g[b],se=T[v]=ie?kn(T[v]):hn(T[v]);if(vs(O,se))x(O,se,w,null,U,W,Q,q,ie);else break;b--,v--}if(ne>b){if(ne<=v){const O=v+1,se=O<Ae?T[O].el:D;for(;ne<=v;)x(null,T[ne]=ie?kn(T[ne]):hn(T[ne]),w,se,U,W,Q,q,ie),ne++}}else if(ne>v)for(;ne<=b;)j(g[ne],U,W,!0),ne++;else{const O=ne,se=ne,ae=new Map;for(ne=se;ne<=v;ne++){const ge=T[ne]=ie?kn(T[ne]):hn(T[ne]);ge.key!=null&&ae.set(ge.key,ne)}let ue,Te=0;const me=v-se+1;let Z=!1,z=0;const he=new Array(me);for(ne=0;ne<me;ne++)he[ne]=0;for(ne=O;ne<=b;ne++){const ge=g[ne];if(Te>=me){j(ge,U,W,!0);continue}let ve;if(ge.key!=null)ve=ae.get(ge.key);else for(ue=se;ue<=v;ue++)if(he[ue-se]===0&&vs(ge,T[ue])){ve=ue;break}ve===void 0?j(ge,U,W,!0):(he[ve-se]=ne+1,ve>=z?z=ve:Z=!0,x(ge,T[ve],w,null,U,W,Q,q,ie),Te++)}const Re=Z?t0(he):$i;for(ue=Re.length-1,ne=me-1;ne>=0;ne--){const ge=se+ne,ve=T[ge],De=ge+1<Ae?T[ge+1].el:D;he[ne]===0?x(null,ve,w,De,U,W,Q,q,ie):Z&&(ue<0||ne!==Re[ue]?k(ve,w,De,2):ue--)}}},k=(g,T,w,D,U=null)=>{const{el:W,type:Q,transition:q,children:ie,shapeFlag:ne}=g;if(ne&6){k(g.component.subTree,T,w,D);return}if(ne&128){g.suspense.move(T,w,D);return}if(ne&64){Q.move(g,T,w,fe);return}if(Q===Ln){i(W,T,w);for(let b=0;b<ie.length;b++)k(ie[b],T,w,D);i(g.anchor,T,w);return}if(Q===Co){y(g,T,w);return}if(D!==2&&ne&1&&q)if(D===0)q.beforeEnter(W),i(W,T,w),Lt(()=>q.enter(W),U);else{const{leave:b,delayLeave:v,afterLeave:O}=q,se=()=>i(W,T,w),ae=()=>{b(W,()=>{se(),O&&O()})};v?v(W,se,ae):ae()}else i(W,T,w)},j=(g,T,w,D=!1,U=!1)=>{const{type:W,props:Q,ref:q,children:ie,dynamicChildren:ne,shapeFlag:Ae,patchFlag:b,dirs:v}=g;if(q!=null&&wa(q,null,w,g,!0),Ae&256){T.ctx.deactivate(g);return}const O=Ae&1&&v,se=!Vr(g);let ae;if(se&&(ae=Q&&Q.onVnodeBeforeUnmount)&&un(ae,T,g),Ae&6)Pe(g.component,w,D);else{if(Ae&128){g.suspense.unmount(w,D);return}O&&ii(g,null,T,"beforeUnmount"),Ae&64?g.type.remove(g,T,w,U,fe,D):ne&&(W!==Ln||b>0&&b&64)?Le(ne,T,w,!1,!0):(W===Ln&&b&384||!U&&Ae&16)&&Le(ie,T,w),D&&xe(g)}(se&&(ae=Q&&Q.onVnodeUnmounted)||O)&&Lt(()=>{ae&&un(ae,T,g),O&&ii(g,null,T,"unmounted")},w)},xe=g=>{const{type:T,el:w,anchor:D,transition:U}=g;if(T===Ln){Se(w,D);return}if(T===Co){M(g);return}const W=()=>{s(w),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:q}=U,ie=()=>Q(w,W);q?q(g.el,W,ie):ie()}else W()},Se=(g,T)=>{let w;for(;g!==T;)w=f(g),s(g),g=w;s(T)},Pe=(g,T,w)=>{const{bum:D,scope:U,update:W,subTree:Q,um:q}=g;D&&Ao(D),U.stop(),W&&(W.active=!1,j(Q,g,T,w)),q&&Lt(q,T),Lt(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Le=(g,T,w,D=!1,U=!1,W=0)=>{for(let Q=W;Q<g.length;Q++)j(g[Q],T,w,D,U)},B=g=>g.shapeFlag&6?B(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),le=(g,T,w)=>{g==null?T._vnode&&j(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,w),jl(),Gh(),T._vnode=g},fe={p:x,um:j,m:k,r:xe,mt:G,mc:H,pc:$,pbc:A,n:B,o:n};let Me,Ee;return e&&([Me,Ee]=e(fe)),{render:le,hydrate:Me,createApp:jp(le,Me)}}function si({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function af(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=kn(s[r]),a.el=o.el),t||af(o,a)),a.type===fo&&(a.el=o.el)}}function t0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const n0=n=>n.__isTeleport,Ln=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Xs=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),zs=[];let rn=null;function lf(n=!1){zs.push(rn=n?null:[])}function i0(){zs.pop(),rn=zs[zs.length-1]||null}let qs=1;function sc(n){qs+=n}function cf(n){return n.dynamicChildren=qs>0?rn||$i:null,i0(),qs>0&&rn&&rn.push(n),n}function s0(n,e,t,i,s,r){return cf(hf(n,e,t,i,s,r,!0))}function r0(n,e,t,i,s){return cf(qt(n,e,t,i,s,!0))}function Ra(n){return n?n.__v_isVNode===!0:!1}function vs(n,e){return n.type===e.type&&n.key===e.key}const po="__vInternal",uf=({key:n})=>n??null,Wr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||bt(n)||Ge(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function hf(n,e=null,t=null,i=0,s=null,r=n===Ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&uf(e),ref:e&&Wr(e),scopeId:Wh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(cl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),qs>0&&!o&&rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rn.push(l),l}const qt=o0;function o0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Fp)&&(n=Xs),Ra(n)){const a=ss(n,e,!0);return t&&cl(a,t),qs>0&&!r&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag|=-2,a}if(x0(n)&&(n=n.__vccOpts),e){e=a0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Za(a)),ot(l)&&(Lh(l)&&!Fe(l)&&(l=xt({},l)),e.style=$a(l))}const o=yt(n)?1:Ep(n)?128:n0(n)?64:ot(n)?4:Ge(n)?2:0;return hf(n,e,t,i,s,o,r,!0)}function a0(n){return n?Lh(n)||po in n?xt({},n):n:null}function ss(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?c0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&uf(a),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Wr(e)):[s,Wr(e)]:Wr(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ln?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ss(n.ssContent),ssFallback:n.ssFallback&&ss(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function l0(n=" ",e=0){return qt(fo,null,n,e)}function hn(n){return n==null||typeof n=="boolean"?qt(Xs):Fe(n)?qt(Ln,null,n.slice()):typeof n=="object"?kn(n):qt(fo,null,String(n))}function kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ss(n)}function cl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),cl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(po in e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[l0(e)]):t=8);n.children=e,n.shapeFlag|=t}function c0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Za([e.class,i.class]));else if(s==="style")e.style=$a([e.style,i.style]);else if(io(s)){const r=e[s],o=i[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function un(n,e,t,i=null){an(n,e,7,[t,i])}const u0=ef();let h0=0;function f0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||u0,r={uid:h0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nf(i,s),emitsOptions:kh(i,s),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_p.bind(null,r),n.ce&&n.ce(r),r}let vt=null,ul,Ti,rc="__VUE_INSTANCE_SETTERS__";(Ti=_a()[rc])||(Ti=_a()[rc]=[]),Ti.push(n=>vt=n),ul=n=>{Ti.length>1?Ti.forEach(e=>e(n)):Ti[0](n)};const rs=n=>{ul(n),n.scope.on()},pi=()=>{vt&&vt.scope.off(),ul(null)};function ff(n){return n.vnode.shapeFlag&4}let js=!1;function d0(n,e=!1){js=e;const{props:t,children:i}=n.vnode,s=ff(n);Yp(n,t,s,e),Zp(n,i);const r=s?p0(n,e):void 0;return js=!1,r}function p0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=zh(new Proxy(n.ctx,Hp));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?g0(n):null;rs(n),ds();const r=Kn(i,n,0,[n.props,s]);if(ps(),pi(),_h(r)){if(r.then(pi,pi),e)return r.then(o=>{oc(n,o,e)}).catch(o=>{co(o,n,0)});n.asyncDep=r}else oc(n,r,e)}else df(n,e)}function oc(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ot(e)&&(n.setupState=Oh(e)),df(n,t)}let ac;function df(n,e,t){const i=n.type;if(!n.render){if(!e&&ac&&!i.render){const s=i.template||al(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:r,delimiters:a},o),l);i.render=ac(s,c)}}n.render=i.render||on}rs(n),ds(),Gp(n),ps(),pi()}function m0(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return It(n,"get","$attrs"),e[t]}}))}function g0(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return m0(n)},slots:n.slots,emit:n.emit,expose:e}}function hl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Oh(zh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ls)return Ls[t](n)},has(e,t){return t in e||t in Ls}}))}function _0(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function x0(n){return Ge(n)&&"__vccOpts"in n}const en=(n,e)=>hp(n,e,js);function pf(n,e,t){const i=arguments.length;return i===2?ot(e)&&!Fe(e)?Ra(e)?qt(n,null,[e]):qt(n,e):qt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ra(t)&&(t=[t]),qt(n,e,t))}const v0=Symbol.for("v-scx"),y0=()=>pn(v0),M0="3.3.4",S0="http://www.w3.org/2000/svg",hi=typeof document<"u"?document:null,lc=hi&&hi.createElement("template"),E0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?hi.createElementNS(S0,n):hi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{lc.innerHTML=i?`<svg>${n}</svg>`:n;const a=lc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function b0(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function T0(n,e,t){const i=n.style,s=yt(t);if(t&&!s){if(e&&!yt(e))for(const r in e)t[r]==null&&Ca(i,r,"");for(const r in t)Ca(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const cc=/\s*!important$/;function Ca(n,e,t){if(Fe(t))t.forEach(i=>Ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=A0(n,e);cc.test(t)?n.setProperty(fs(i),t.replace(cc,""),"important"):n[i]=t}}const uc=["Webkit","Moz","ms"],Po={};function A0(n,e){const t=Po[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return Po[e]=i;i=oo(i);for(let s=0;s<uc.length;s++){const r=uc[s]+i;if(r in n)return Po[e]=r}return e}const hc="http://www.w3.org/1999/xlink";function w0(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(hc,e.slice(6,e.length)):n.setAttributeNS(hc,e,t);else{const r=Ld(e);t==null||r&&!xh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function R0(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=xh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function C0(n,e,t,i){n.addEventListener(e,t,i)}function P0(n,e,t,i){n.removeEventListener(e,t,i)}function L0(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=z0(e);if(i){const c=r[e]=I0(i,s);C0(n,a,c,l)}else o&&(P0(n,a,o,l),r[e]=void 0)}}const fc=/(?:Once|Passive|Capture)$/;function z0(n){let e;if(fc.test(n)){e={};let i;for(;i=n.match(fc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fs(n.slice(2)),e]}let Lo=0;const U0=Promise.resolve(),D0=()=>Lo||(U0.then(()=>Lo=0),Lo=Date.now());function I0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(N0(i,t.value),e,5,[i])};return t.value=n,t.attached=D0(),t}function N0(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const dc=/^on[a-z]/,O0=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?b0(n,i,s):e==="style"?T0(n,t,i):io(e)?qa(e)||L0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(n,e,i,s))?R0(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),w0(n,e,i,s))};function F0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&dc.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||dc.test(e)&&yt(t)?!1:e in n}const B0=xt({patchProp:O0},E0);let pc;function H0(){return pc||(pc=Qp(B0))}const G0=(...n)=>{const e=H0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=V0(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function V0(n){return yt(n)?document.querySelector(n):n}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Wi=typeof window<"u";function k0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function zo(n,e){const t={};for(const i in e){const s=e[i];t[i]=ln(s)?s.map(n):n(s)}return t}const Us=()=>{},ln=Array.isArray,W0=/\/$/,X0=n=>n.replace(W0,"");function Uo(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=K0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function q0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function mc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function j0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&os(e.matched[i],t.matched[s])&&mf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function os(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function mf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Y0(n[t],e[t]))return!1;return!0}function Y0(n,e){return ln(n)?gc(n,e):ln(e)?gc(e,n):n===e}function gc(n,e){return ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function K0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ys;(function(n){n.pop="pop",n.push="push"})(Ys||(Ys={}));var Ds;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ds||(Ds={}));function $0(n){if(!n)if(Wi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),X0(n)}const Z0=/^[^#]+#/;function J0(n,e){return n.replace(Z0,"#")+e}function Q0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function em(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Q0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _c(n,e){return(history.state?history.state.position-e:-1)+n}const Pa=new Map;function tm(n,e){Pa.set(n,e)}function nm(n){const e=Pa.get(n);return Pa.delete(n),e}let im=()=>location.protocol+"//"+location.host;function gf(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),mc(l,"")}return mc(t,n)+i+s}function sm(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=gf(n,location),_=t.value,x=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===_){o=null;return}m=x?f.position-x.position:0}else i(p);s.forEach(d=>{d(t.value,_,{delta:m,type:Ys.pop,direction:m?m>0?Ds.forward:Ds.back:Ds.unknown})})};function l(){o=t.value}function c(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ze({},f.state,{scroll:mo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function xc(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?mo():null}}function rm(n){const{history:e,location:t}=window,i={value:gf(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:im()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ze({},e.state,xc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ze({},s.value,e.state,{forward:l,scroll:mo()});r(u.current,u,!0);const h=Ze({},xc(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function om(n){n=$0(n);const e=rm(n),t=sm(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Ze({location:"",base:n,go:i,createHref:J0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function am(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),om(n)}function lm(n){return typeof n=="string"||n&&typeof n=="object"}function _f(n){return typeof n=="string"||typeof n=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var vc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vc||(vc={}));function as(n,e){return Ze(new Error,{type:n,[xf]:!0},e)}function Mn(n,e){return n instanceof Error&&xf in n&&(e==null||!!(n.type&e))}const yc="[^/]+?",cm={sensitive:!1,strict:!1,start:!0,end:!0},um=/[.+*?^${}()[\]/\\]/g;function hm(n,e){const t=Ze({},cm,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(um,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:x,optional:m,regexp:d}=f;r.push({name:_,repeatable:x,optional:m});const E=d||yc;if(E!==yc){p+=10;try{new RegExp(`(${E})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+M.message)}}let y=x?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),s+=y,p+=20,m&&(p+=-8),x&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=r[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:m}=p,d=_ in c?c[_]:"";if(ln(d)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=ln(d)?d.join("/"):d;if(!E)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function fm(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dm(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=fm(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Mc(i))return 1;if(Mc(s))return-1}return s.length-i.length}function Mc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const pm={type:0,value:""},mm=/[a-zA-Z0-9_]/;function gm(n){if(!n)return[[]];if(n==="/")return[[pm]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:mm.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function _m(n,e,t){const i=hm(gm(n.path),t),s=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xm(n,e){const t=[],i=new Map;e=bc({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const p=!f,_=vm(u);_.aliasOf=f&&f.record;const x=bc(e,u),m=[_];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of y)m.push(Ze({},_,{components:f?f.record.components:_.components,path:M,aliasOf:f?f.record:_}))}let d,E;for(const y of m){const{path:M}=y;if(h&&M[0]!=="/"){const P=h.record.path,L=P[P.length-1]==="/"?"":"/";y.path=h.record.path+(M&&L+M)}if(d=_m(y,h,x),f?f.alias.push(d):(E=E||d,E!==d&&E.alias.push(d),p&&u.name&&!Ec(d)&&o(u.name)),_.children){const P=_.children;for(let L=0;L<P.length;L++)r(P[L],d,f&&f.children[L])}f=f||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return E?()=>{o(E)}:Us}function o(u){if(_f(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&dm(u,t[h])>=0&&(u.record.path!==t[h].record.path||!vf(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Ec(u)&&i.set(u.record.name,u)}function c(u,h){let f,p={},_,x;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw as(1,{location:u});x=f.record.name,p=Ze(Sc(h.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Sc(u.params,f.keys.map(E=>E.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=t.find(E=>E.re.test(_)),f&&(p=f.parse(_),x=f.record.name);else{if(f=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!f)throw as(1,{location:u,currentLocation:h});x=f.record.name,p=Ze({},h.params,u.params),_=f.stringify(p)}const m=[];let d=f;for(;d;)m.unshift(d.record),d=d.parent;return{name:x,path:_,params:p,matched:m,meta:Mm(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Sc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function vm(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ym(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ym(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ec(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mm(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function bc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function vf(n,e){return e.children.some(t=>t===n||vf(n,t))}const yf=/#/g,Sm=/&/g,Em=/\//g,bm=/=/g,Tm=/\?/g,Mf=/\+/g,Am=/%5B/g,wm=/%5D/g,Sf=/%5E/g,Rm=/%60/g,Ef=/%7B/g,Cm=/%7C/g,bf=/%7D/g,Pm=/%20/g;function fl(n){return encodeURI(""+n).replace(Cm,"|").replace(Am,"[").replace(wm,"]")}function Lm(n){return fl(n).replace(Ef,"{").replace(bf,"}").replace(Sf,"^")}function La(n){return fl(n).replace(Mf,"%2B").replace(Pm,"+").replace(yf,"%23").replace(Sm,"%26").replace(Rm,"`").replace(Ef,"{").replace(bf,"}").replace(Sf,"^")}function zm(n){return La(n).replace(bm,"%3D")}function Um(n){return fl(n).replace(yf,"%23").replace(Tm,"%3F")}function Dm(n){return n==null?"":Um(n).replace(Em,"%2F")}function Jr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Im(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Mf," "),o=r.indexOf("="),a=Jr(o<0?r:r.slice(0,o)),l=o<0?null:Jr(r.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tc(n){let e="";for(let t in n){const i=n[t];if(t=zm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(i)?i.map(r=>r&&La(r)):[i&&La(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Nm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ln(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Om=Symbol(""),Ac=Symbol(""),dl=Symbol(""),pl=Symbol(""),za=Symbol("");function ys(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Wn(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(as(4,{from:t,to:e})):h instanceof Error?a(h):lm(h)?a(as(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Do(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Fm(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Wn(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=k0(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Wn(f,t,i,r,o)()}))}}return s}function Fm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function wc(n){const e=pn(dl),t=pn(pl),i=en(()=>e.resolve(Ji(n.to))),s=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(os.bind(null,u));if(f>-1)return f;const p=Rc(l[c-2]);return c>1&&Rc(u)===p&&h[h.length-1].path!==p?h.findIndex(os.bind(null,l[c-2])):f}),r=en(()=>s.value>-1&&Vm(t.params,i.value.params)),o=en(()=>s.value>-1&&s.value===t.matched.length-1&&mf(t.params,i.value.params));function a(l={}){return Gm(l)?e[Ji(n.replace)?"replace":"push"](Ji(n.to)).catch(Us):Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Bm=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wc,setup(n,{slots:e}){const t=lo(wc(n)),{options:i}=pn(dl),s=en(()=>({[Cc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Cc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:pf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Hm=Bm;function Gm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vm(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ln(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Rc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Cc=(n,e,t)=>n??e??t,km=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=pn(za),s=en(()=>n.route||i.value),r=pn(Ac,0),o=en(()=>{let c=Ji(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=en(()=>s.value.matched[o.value]);kr(Ac,en(()=>o.value+1)),kr(Om,a),kr(za,s);const l=Ih();return Gr(()=>[l.value,a.value,n.name],([c,u,h],[f,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!os(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Pc(t.default,{Component:f,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=pf(f,Ze({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pc(t.default,{Component:m,route:c})||m}}});function Pc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wm=km;function Xm(n){const e=xm(n.routes,n),t=n.parseQuery||Im,i=n.stringifyQuery||Tc,s=n.history,r=ys(),o=ys(),a=ys(),l=ap(Fn);let c=Fn;Wi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,B=>""+B),h=zo.bind(null,Dm),f=zo.bind(null,Jr);function p(B,le){let fe,Me;return _f(B)?(fe=e.getRecordMatcher(B),Me=le):Me=B,e.addRoute(Me,fe)}function _(B){const le=e.getRecordMatcher(B);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function d(B,le){if(le=Ze({},le||l.value),typeof B=="string"){const w=Uo(t,B,le.path),D=e.resolve({path:w.path},le),U=s.createHref(w.fullPath);return Ze(w,D,{params:f(D.params),hash:Jr(w.hash),redirectedFrom:void 0,href:U})}let fe;if("path"in B)fe=Ze({},B,{path:Uo(t,B.path,le.path).path});else{const w=Ze({},B.params);for(const D in w)w[D]==null&&delete w[D];fe=Ze({},B,{params:h(w)}),le.params=h(le.params)}const Me=e.resolve(fe,le),Ee=B.hash||"";Me.params=u(f(Me.params));const g=q0(i,Ze({},B,{hash:Lm(Ee),path:Me.path})),T=s.createHref(g);return Ze({fullPath:g,hash:Ee,query:i===Tc?Nm(B.query):B.query||{}},Me,{redirectedFrom:void 0,href:T})}function E(B){return typeof B=="string"?Uo(t,B,l.value.path):Ze({},B)}function y(B,le){if(c!==B)return as(8,{from:le,to:B})}function M(B){return C(B)}function P(B){return M(Ze(E(B),{replace:!0}))}function L(B){const le=B.matched[B.matched.length-1];if(le&&le.redirect){const{redirect:fe}=le;let Me=typeof fe=="function"?fe(B):fe;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=E(Me):{path:Me},Me.params={}),Ze({query:B.query,hash:B.hash,params:"path"in Me?{}:B.params},Me)}}function C(B,le){const fe=c=d(B),Me=l.value,Ee=B.state,g=B.force,T=B.replace===!0,w=L(fe);if(w)return C(Ze(E(w),{state:typeof w=="object"?Ze({},Ee,w.state):Ee,force:g,replace:T}),le||fe);const D=fe;D.redirectedFrom=le;let U;return!g&&j0(i,Me,fe)&&(U=as(16,{to:D,from:Me}),k(Me,Me,!0,!1)),(U?Promise.resolve(U):A(D,Me)).catch(W=>Mn(W)?Mn(W,2)?W:ce(W):$(W,D,Me)).then(W=>{if(W){if(Mn(W,2))return C(Ze({replace:T},E(W.to),{state:typeof W.to=="object"?Ze({},Ee,W.to.state):Ee,force:g}),le||D)}else W=de(D,Me,!0,T,Ee);return J(D,Me,W),W})}function H(B,le){const fe=y(B,le);return fe?Promise.reject(fe):Promise.resolve()}function S(B){const le=Se.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(B):B()}function A(B,le){let fe;const[Me,Ee,g]=qm(B,le);fe=Do(Me.reverse(),"beforeRouteLeave",B,le);for(const w of Me)w.leaveGuards.forEach(D=>{fe.push(Wn(D,B,le))});const T=H.bind(null,B,le);return fe.push(T),Le(fe).then(()=>{fe=[];for(const w of r.list())fe.push(Wn(w,B,le));return fe.push(T),Le(fe)}).then(()=>{fe=Do(Ee,"beforeRouteUpdate",B,le);for(const w of Ee)w.updateGuards.forEach(D=>{fe.push(Wn(D,B,le))});return fe.push(T),Le(fe)}).then(()=>{fe=[];for(const w of g)if(w.beforeEnter)if(ln(w.beforeEnter))for(const D of w.beforeEnter)fe.push(Wn(D,B,le));else fe.push(Wn(w.beforeEnter,B,le));return fe.push(T),Le(fe)}).then(()=>(B.matched.forEach(w=>w.enterCallbacks={}),fe=Do(g,"beforeRouteEnter",B,le),fe.push(T),Le(fe))).then(()=>{fe=[];for(const w of o.list())fe.push(Wn(w,B,le));return fe.push(T),Le(fe)}).catch(w=>Mn(w,8)?w:Promise.reject(w))}function J(B,le,fe){a.list().forEach(Me=>S(()=>Me(B,le,fe)))}function de(B,le,fe,Me,Ee){const g=y(B,le);if(g)return g;const T=le===Fn,w=Wi?history.state:{};fe&&(Me||T?s.replace(B.fullPath,Ze({scroll:T&&w&&w.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,k(B,le,fe,T),ce()}let F;function G(){F||(F=s.listen((B,le,fe)=>{if(!Pe.listening)return;const Me=d(B),Ee=L(Me);if(Ee){C(Ze(Ee,{replace:!0}),Me).catch(Us);return}c=Me;const g=l.value;Wi&&tm(_c(g.fullPath,fe.delta),mo()),A(Me,g).catch(T=>Mn(T,12)?T:Mn(T,2)?(C(T.to,Me).then(w=>{Mn(w,20)&&!fe.delta&&fe.type===Ys.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(fe.delta&&s.go(-fe.delta,!1),$(T,Me,g))).then(T=>{T=T||de(Me,g,!1),T&&(fe.delta&&!Mn(T,8)?s.go(-fe.delta,!1):fe.type===Ys.pop&&Mn(T,20)&&s.go(-1,!1)),J(Me,g,T)}).catch(Us)}))}let Y=ys(),te=ys(),V;function $(B,le,fe){ce(B);const Me=te.list();return Me.length?Me.forEach(Ee=>Ee(B,le,fe)):console.error(B),Promise.reject(B)}function pe(){return V&&l.value!==Fn?Promise.resolve():new Promise((B,le)=>{Y.add([B,le])})}function ce(B){return V||(V=!B,G(),Y.list().forEach(([le,fe])=>B?fe(B):le()),Y.reset()),B}function k(B,le,fe,Me){const{scrollBehavior:Ee}=n;if(!Wi||!Ee)return Promise.resolve();const g=!fe&&nm(_c(B.fullPath,0))||(Me||!fe)&&history.state&&history.state.scroll||null;return Bh().then(()=>Ee(B,le,g)).then(T=>T&&em(T)).catch(T=>$(T,B,le))}const j=B=>s.go(B);let xe;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:x,resolve:d,options:n,push:M,replace:P,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:pe,install(B){const le=this;B.component("RouterLink",Hm),B.component("RouterView",Wm),B.config.globalProperties.$router=le,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ji(l)}),Wi&&!xe&&l.value===Fn&&(xe=!0,M(s.location).catch(Ee=>{}));const fe={};for(const Ee in Fn)Object.defineProperty(fe,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(dl,le),B.provide(pl,Ch(fe)),B.provide(za,l);const Me=B.unmount;Se.add(B),B.unmount=function(){Se.delete(B),Se.size<1&&(c=Fn,F&&F(),F=null,l.value=Fn,xe=!1,V=!1),Me()}}};function Le(B){return B.reduce((le,fe)=>le.then(()=>S(fe)),Promise.resolve())}return Pe}function qm(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>os(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>os(c,l))||s.push(l))}return[t,i,s]}function jm(){return pn(pl)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="156",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ym=0,Lc=1,Km=2,Tf=1,$m=2,Cn=3,In=0,Ut=1,zn=2,$n=0,es=1,zc=2,Uc=3,Dc=4,Zm=5,Xi=100,Jm=101,Qm=102,Ic=103,Nc=104,e1=200,t1=201,n1=202,i1=203,Af=204,wf=205,s1=206,r1=207,o1=208,a1=209,l1=210,c1=0,u1=1,h1=2,Ua=3,f1=4,d1=5,p1=6,m1=7,gl=0,g1=1,_1=2,Zn=0,x1=1,v1=2,y1=3,Rf=4,M1=5,Cf=300,ls=301,cs=302,Da=303,Ia=304,go=306,Qr=1e3,tn=1001,Na=1002,Pt=1003,Oc=1004,Io=1005,Wt=1006,S1=1007,Ks=1008,Jn=1009,E1=1010,b1=1011,_l=1012,Pf=1013,qn=1014,jn=1015,$s=1016,Lf=1017,zf=1018,mi=1020,T1=1021,nn=1023,A1=1024,w1=1025,gi=1026,us=1027,R1=1028,Uf=1029,C1=1030,Df=1031,If=1033,No=33776,Oo=33777,Fo=33778,Bo=33779,Fc=35840,Bc=35841,Hc=35842,Gc=35843,P1=36196,Vc=37492,kc=37496,Wc=37808,Xc=37809,qc=37810,jc=37811,Yc=37812,Kc=37813,$c=37814,Zc=37815,Jc=37816,Qc=37817,eu=37818,tu=37819,nu=37820,iu=37821,Ho=36492,su=36494,ru=36495,L1=36283,ou=36284,au=36285,lu=36286,Nf=3e3,Qn=3001,z1=3200,U1=3201,xl=0,D1=1,_i="",et="srgb",_n="srgb-linear",_o="display-p3",Go=7680,I1=519,N1=512,O1=513,F1=514,B1=515,H1=516,G1=517,V1=518,k1=519,cu=35044,uu="300 es",Oa=1035,Un=2e3,eo=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hu=1234567;const Is=Math.PI/180,Zs=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function vl(n,e){return(n%e+e)%e}function W1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function X1(n,e,t){return n!==e?(t-n)/(e-n):0}function Ns(n,e,t){return(1-t)*n+t*e}function q1(n,e,t,i){return Ns(n,e,1-Math.exp(-t*i))}function j1(n,e=1){return e-Math.abs(vl(n,e*2)-e)}function Y1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function K1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Z1(n,e){return n+Math.random()*(e-n)}function J1(n){return n*(.5-Math.random())}function Q1(n){n!==void 0&&(hu=n);let e=hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e2(n){return n*Is}function t2(n){return n*Zs}function Fa(n){return(n&n-1)===0&&n!==0}function n2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function to(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i2(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const s2={DEG2RAD:Is,RAD2DEG:Zs,generateUUID:Ei,clamp:gt,euclideanModulo:vl,mapLinear:W1,inverseLerp:X1,lerp:Ns,damp:q1,pingpong:j1,smoothstep:Y1,smootherstep:K1,randInt:$1,randFloat:Z1,randFloatSpread:J1,seededRandom:Q1,degToRad:e2,radToDeg:t2,isPowerOfTwo:Fa,ceilPowerOfTwo:n2,floorPowerOfTwo:to,setQuaternionFromProperEuler:i2,normalize:Rt,denormalize:qi};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,s,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],E=s[1],y=s[4],M=s[7],P=s[2],L=s[5],C=s[8];return r[0]=o*x+a*E+l*P,r[3]=o*m+a*y+l*L,r[6]=o*d+a*M+l*C,r[1]=c*x+u*E+h*P,r[4]=c*m+u*y+h*L,r[7]=c*d+u*M+h*C,r[2]=f*x+p*E+_*P,r[5]=f*m+p*y+_*L,r[8]=f*d+p*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new ke;function Of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r2(){const n=Js("canvas");return n.style.display="block",n}const fu={};function Os(n){n in fu||(fu[n]=!0,console.warn(n))}function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const o2=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),a2=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function l2(n){return n.convertSRGBToLinear().applyMatrix3(a2)}function c2(n){return n.applyMatrix3(o2).convertLinearToSRGB()}const u2={[_n]:n=>n,[et]:n=>n.convertSRGBToLinear(),[_o]:l2},h2={[_n]:n=>n,[et]:n=>n.convertLinearToSRGB(),[_o]:c2},jt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return _n},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=u2[e],s=h2[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ri;class Ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Js("canvas")),Ri.width=e.width,Ri.height=e.height;const i=Ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f2=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d2=0;class Dt extends Si{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=tn,s=tn,r=Wt,o=Ks,a=nn,l=Jn,c=Dt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Ei(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qn?et:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?Qn:Nf}set encoding(e){Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?et:_i}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Cf;Dt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(p+1)/2,P=(d+1)/2,L=(u+f)/4,C=(h+x)/4,H=(_+m)/4;return y>M&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=C/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=H/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=C/r,s=H/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p2 extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?et:_i),this.texture=new Dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends p2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hf extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class m2 extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=1-a;const d=l*f+c*p+u*_+h*x,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),L=Math.atan2(P,d*E);m=Math.sin(m*L)/P,a=Math.sin(a*L)/P}const M=a*E;if(l=l*m+f*M,c=c*m+p*M,u=u*m+_*M,h=h*m+x*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,h=l*s+r*i-o*t,f=-r*t-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new I,du=new vi;class ms{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)En.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(En)}else s.boundingBox===null&&s.computeBoundingBox(),Ci.copy(s.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),fr.subVectors(this.max,Ms),Pi.subVectors(e.a,Ms),Li.subVectors(e.b,Ms),zi.subVectors(e.c,Ms),Bn.subVectors(Li,Pi),Hn.subVectors(zi,Li),ri.subVectors(Pi,zi);let t=[0,-Bn.z,Bn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Bn.z,0,-Bn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Bn.y,Bn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!qo(t,Pi,Li,zi,fr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Pi,Li,zi,fr))?!1:(dr.crossVectors(Bn,Hn),t=[dr.x,dr.y,dr.z],qo(t,Pi,Li,zi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new I,new I,new I,new I,new I,new I,new I,new I],En=new I,Ci=new ms,Pi=new I,Li=new I,zi=new I,Bn=new I,Hn=new I,ri=new I,Ms=new I,fr=new I,dr=new I,oi=new I;function qo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const g2=new ms,Ss=new I,jo=new I;class nr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):g2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ss,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(jo)),this.expandByPoint(Ss.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new I,Yo=new I,pr=new I,Gn=new I,Ko=new I,mr=new I,$o=new I;class ir{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yo.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=Gn.dot(this.direction),l=-Gn.dot(pr),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yo).addScaledVector(pr,f),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),s=bn.dot(bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,s,r){Ko.subVectors(t,e),mr.subVectors(i,e),$o.crossVectors(Ko,mr);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(mr.crossVectors(Gn,mr));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot($o);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_2,e,x2)}lookAt(e,t,i){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Vn.crossVectors(i,Bt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Vn.crossVectors(i,Bt)),Vn.normalize(),gr.crossVectors(Bt,Vn),s[0]=Vn.x,s[4]=gr.x,s[8]=Bt.x,s[1]=Vn.y,s[5]=gr.y,s[9]=Bt.y,s[2]=Vn.z,s[6]=gr.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],E=i[3],y=i[7],M=i[11],P=i[15],L=s[0],C=s[4],H=s[8],S=s[12],A=s[1],J=s[5],de=s[9],F=s[13],G=s[2],Y=s[6],te=s[10],V=s[14],$=s[3],pe=s[7],ce=s[11],k=s[15];return r[0]=o*L+a*A+l*G+c*$,r[4]=o*C+a*J+l*Y+c*pe,r[8]=o*H+a*de+l*te+c*ce,r[12]=o*S+a*F+l*V+c*k,r[1]=u*L+h*A+f*G+p*$,r[5]=u*C+h*J+f*Y+p*pe,r[9]=u*H+h*de+f*te+p*ce,r[13]=u*S+h*F+f*V+p*k,r[2]=_*L+x*A+m*G+d*$,r[6]=_*C+x*J+m*Y+d*pe,r[10]=_*H+x*de+m*te+d*ce,r[14]=_*S+x*F+m*V+d*k,r[3]=E*L+y*A+M*G+P*$,r[7]=E*C+y*J+M*Y+P*pe,r[11]=E*H+y*de+M*te+P*ce,r[15]=E*S+y*F+M*V+P*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],E=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,y=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,M=u*x*c-_*h*c+_*a*p-o*x*p-u*a*d+o*h*d,P=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,L=t*E+i*y+s*M+r*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=E*C,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*C,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*C,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*C,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*C,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*C,e[8]=M*C,e[9]=(_*h*r-u*x*r-_*i*p+t*x*p+u*i*d-t*h*d)*C,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*d+t*a*d)*C,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*C,e[12]=P*C,e[13]=(u*x*s-_*h*s+_*i*f-t*x*f-u*i*m+t*h*m)*C,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,x=o*u,m=o*h,d=a*h,E=l*c,y=l*u,M=l*h,P=i.x,L=i.y,C=i.z;return s[0]=(1-(x+d))*P,s[1]=(p+M)*P,s[2]=(_-y)*P,s[3]=0,s[4]=(p-M)*L,s[5]=(1-(f+d))*L,s[6]=(m+E)*L,s[7]=0,s[8]=(_+y)*C,s[9]=(m-E)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const c=1/r,u=1/o,h=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===Un)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===eo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u;let _,x;if(a===Un)_=(o+r)*h,x=-2*h;else if(a===eo)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new I,Yt=new it,_2=new I(0,0,0),x2=new I(1,1,1),Vn=new I,gr=new I,Bt=new I,pu=new it,mu=new vi;class xo{constructor(e=0,t=0,i=0,s=xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xo.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v2=0;const gu=new I,Di=new vi,Tn=new it,_r=new I,Es=new I,y2=new I,M2=new vi,_u=new I(1,0,0),xu=new I(0,1,0),vu=new I(0,0,1),S2={type:"added"},E2={type:"removed"};class ft extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new xo,i=new vi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new ke}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_r.copy(e):_r.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Es,_r,this.up):Tn.lookAt(_r,Es,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Tn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,y2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,M2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new I,An=new I,Zo=new I,wn=new I,Ii=new I,Ni=new I,yu=new I,Jo=new I,Qo=new I,ea=new I;let xr=!1;class Jt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kt.subVectors(e,t),s.cross(Kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kt.subVectors(s,t),An.subVectors(i,t),Zo.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(An),l=Kt.dot(Zo),c=An.dot(An),u=An.dot(Zo),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,i,s,r,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wn),l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(e,t,i,s){return Kt.subVectors(i,t),An.subVectors(e,t),Kt.cross(An).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Kt.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,i),Ni.subVectors(r,i),Jo.subVectors(e,i);const l=Ii.dot(Jo),c=Ni.dot(Jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,s);const u=Ii.dot(Qo),h=Ni.dot(Qo);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ii,o);ea.subVectors(e,r);const p=Ii.dot(ea),_=Ni.dot(ea);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ni,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return yu.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(yu,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let b2=0;class xn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=es,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=wf,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},vr={h:0,s:0,l:0};function ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=jt.workingColorSpace){return this.r=e,this.g=t,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=jt.workingColorSpace){if(e=vl(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ta(o,r,e+1/3),this.g=ta(o,r,e),this.b=ta(o,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){const i=Gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return jt.fromWorkingColorSpace(St.copy(this),e),Math.round(gt(St.r*255,0,255))*65536+Math.round(gt(St.g*255,0,255))*256+Math.round(gt(St.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(St.copy(this),t);const i=St.r,s=St.g,r=St.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=et){jt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,s=St.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=i,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(vr);const i=Ns($t.h,vr.h,t),s=Ns($t.s,vr.s,t),r=Ns($t.l,vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ve;Ve.NAMES=Gf;class Ml extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new I,yr=new ye;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRange={offset:0,count:-1},this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Vf extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kf extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let T2=0;const Vt=new it,na=new ft,Oi=new I,Ht=new ms,bs=new ms,mt=new I;class Nt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?kf:Vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ht.min,bs.min),Ht.expandByPoint(mt),mt.addVectors(Ht.max,bs.max),Ht.expandByPoint(mt)):(Ht.expandByPoint(bs.min),Ht.expandByPoint(bs.max))}Ht.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),mt.add(Oi)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const h=new I,f=new I,p=new I,_=new ye,x=new ye,m=new ye,d=new I,E=new I;function y(A,J,de){h.fromArray(s,A*3),f.fromArray(s,J*3),p.fromArray(s,de*3),_.fromArray(o,A*2),x.fromArray(o,J*2),m.fromArray(o,de*2),f.sub(h),p.sub(h),x.sub(_),m.sub(_);const F=1/(x.x*m.y-m.x*x.y);isFinite(F)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(F),E.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(F),c[A].add(d),c[J].add(d),c[de].add(d),u[A].add(E),u[J].add(E),u[de].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,J=M.length;A<J;++A){const de=M[A],F=de.start,G=de.count;for(let Y=F,te=F+G;Y<te;Y+=3)y(i[Y+0],i[Y+1],i[Y+2])}const P=new I,L=new I,C=new I,H=new I;function S(A){C.fromArray(r,A*3),H.copy(C);const J=c[A];P.copy(J),P.sub(C.multiplyScalar(C.dot(J))).normalize(),L.crossVectors(H,J);const F=L.dot(u[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=F}for(let A=0,J=M.length;A<J;++A){const de=M[A],F=de.start,G=de.count;for(let Y=F,te=F+G;Y<te;Y+=3)S(i[Y+0]),S(i[Y+1]),S(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new it,ai=new ir,Mr=new nr,Su=new I,Fi=new I,Bi=new I,Hi=new I,ia=new I,Sr=new I,Er=new ye,br=new ye,Tr=new ye,Eu=new I,bu=new I,Tu=new I,Ar=new I,wr=new I;class zt extends ft{constructor(e=new Nt,t=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ia.fromBufferAttribute(h,e),o?Sr.addScaledVector(ia,u):Sr.addScaledVector(ia.sub(t),u))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Mr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Mr,Su)===null||ai.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,P=y;M<P;M+=3){const L=a.getX(M),C=a.getX(M+1),H=a.getX(M+2);s=Rr(this,d,e,i,c,u,h,L,C,H),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Rr(this,o,e,i,c,u,h,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,P=y;M<P;M+=3){const L=M,C=M+1,H=M+2;s=Rr(this,d,e,i,c,u,h,L,C,H),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const E=m,y=m+1,M=m+2;s=Rr(this,o,e,i,c,u,h,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function A2(n,e,t,i,s,r,o,a){let l;if(e.side===Ut?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===In,a),l===null)return null;wr.copy(a),wr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:n}}function Rr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Fi),n.getVertexPosition(l,Bi),n.getVertexPosition(c,Hi);const u=A2(n,e,t,i,Fi,Bi,Hi,Ar);if(u){s&&(Er.fromBufferAttribute(s,a),br.fromBufferAttribute(s,l),Tr.fromBufferAttribute(s,c),u.uv=Jt.getInterpolation(Ar,Fi,Bi,Hi,Er,br,Tr,new ye)),r&&(Er.fromBufferAttribute(r,a),br.fromBufferAttribute(r,l),Tr.fromBufferAttribute(r,c),u.uv1=Jt.getInterpolation(Ar,Fi,Bi,Hi,Er,br,Tr,new ye),u.uv2=u.uv1),o&&(Eu.fromBufferAttribute(o,a),bu.fromBufferAttribute(o,l),Tu.fromBufferAttribute(o,c),u.normal=Jt.getInterpolation(Ar,Fi,Bi,Hi,Eu,bu,Tu,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Jt.getNormal(Fi,Bi,Hi,h.normal),u.face=h}return u}class gs extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function _(x,m,d,E,y,M,P,L,C,H,S){const A=M/C,J=P/H,de=M/2,F=P/2,G=L/2,Y=C+1,te=H+1;let V=0,$=0;const pe=new I;for(let ce=0;ce<te;ce++){const k=ce*J-F;for(let j=0;j<Y;j++){const xe=j*A-de;pe[x]=xe*E,pe[m]=k*y,pe[d]=G,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=L>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(j/C),h.push(1-ce/H),V+=1}}for(let ce=0;ce<H;ce++)for(let k=0;k<C;k++){const j=f+k+Y*ce,xe=f+k+Y*(ce+1),Se=f+(k+1)+Y*(ce+1),Pe=f+(k+1)+Y*ce;l.push(j,xe,Pe),l.push(xe,Se,Pe),$+=6}a.addGroup(p,$,S),p+=$,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const s in i)e[s]=i[s]}return e}function w2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){return n.getRenderTarget()===null?n.outputColorSpace:_n}const R2={clone:hs,merge:Ct};var C2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C2,this.fragmentShader=P2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=w2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Xf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class L2 extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Xt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Xt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class qf extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z2 extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?et:_i),this.texture=new qf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gs(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:$n});r.uniforms.tEquirect.value=t;const o=new zt(s,r),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=Wt),new L2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const sa=new I,U2=new I,D2=new ke;class Xn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=sa.subVectors(i,t).cross(U2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D2.getNormalMatrix(e),s=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new nr,Cr=new I;class Sl{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],E=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-p,M-d).normalize(),i[1].setComponents(l+r,f+c,m+p,M+d).normalize(),i[2].setComponents(l+o,f+u,m+_,M+E).normalize(),i[3].setComponents(l-o,f-u,m-_,M-E).normalize(),i[4].setComponents(l-a,f-h,m-x,M-y).normalize(),t===Un)i[5].setComponents(l+a,f+h,m+x,M+y).normalize();else if(t===eo)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function I2(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class El extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let y=0;y<c;y++){const M=y*h-r;_.push(M,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const y=E+c*d,M=E+c*(d+1),P=E+1+c*(d+1),L=E+1+c*d;p.push(y,M,L),p.push(M,P,L)}this.setIndex(p),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var N2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O2=`#ifdef USE_ALPHAHASH
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
#endif`,F2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j2=`#ifdef USE_IRIDESCENCE
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
#endif`,Y2=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i3=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,s3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,r3=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u3="gl_FragColor = linearToOutputTexel( gl_FragColor );",h3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,d3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p3=`#ifdef USE_ENVMAP
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
#endif`,m3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
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
#endif`,_3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M3=`#ifdef USE_GRADIENTMAP
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
}`,S3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,w3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,R3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,U3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,D3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,O3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W3=`#if defined( USE_POINTS_UV )
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
#endif`,X3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Z3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,J3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vg=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Yg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,$g=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e_=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,n_=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,s_=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,o_=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,a_=`uniform float size;
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
}`,l_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,c_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,u_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,f_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,He={alphahash_fragment:N2,alphahash_pars_fragment:O2,alphamap_fragment:F2,alphamap_pars_fragment:B2,alphatest_fragment:H2,alphatest_pars_fragment:G2,aomap_fragment:V2,aomap_pars_fragment:k2,begin_vertex:W2,beginnormal_vertex:X2,bsdfs:q2,iridescence_fragment:j2,bumpmap_pars_fragment:Y2,clipping_planes_fragment:K2,clipping_planes_pars_fragment:$2,clipping_planes_pars_vertex:Z2,clipping_planes_vertex:J2,color_fragment:Q2,color_pars_fragment:e3,color_pars_vertex:t3,color_vertex:n3,common:i3,cube_uv_reflection_fragment:s3,defaultnormal_vertex:r3,displacementmap_pars_vertex:o3,displacementmap_vertex:a3,emissivemap_fragment:l3,emissivemap_pars_fragment:c3,colorspace_fragment:u3,colorspace_pars_fragment:h3,envmap_fragment:f3,envmap_common_pars_fragment:d3,envmap_pars_fragment:p3,envmap_pars_vertex:m3,envmap_physical_pars_fragment:w3,envmap_vertex:g3,fog_vertex:_3,fog_pars_vertex:x3,fog_fragment:v3,fog_pars_fragment:y3,gradientmap_pars_fragment:M3,lightmap_fragment:S3,lightmap_pars_fragment:E3,lights_lambert_fragment:b3,lights_lambert_pars_fragment:T3,lights_pars_begin:A3,lights_toon_fragment:R3,lights_toon_pars_fragment:C3,lights_phong_fragment:P3,lights_phong_pars_fragment:L3,lights_physical_fragment:z3,lights_physical_pars_fragment:U3,lights_fragment_begin:D3,lights_fragment_maps:I3,lights_fragment_end:N3,logdepthbuf_fragment:O3,logdepthbuf_pars_fragment:F3,logdepthbuf_pars_vertex:B3,logdepthbuf_vertex:H3,map_fragment:G3,map_pars_fragment:V3,map_particle_fragment:k3,map_particle_pars_fragment:W3,metalnessmap_fragment:X3,metalnessmap_pars_fragment:q3,morphcolor_vertex:j3,morphnormal_vertex:Y3,morphtarget_pars_vertex:K3,morphtarget_vertex:$3,normal_fragment_begin:Z3,normal_fragment_maps:J3,normal_pars_fragment:Q3,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:_g,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:yg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:Eg,specularmap_pars_fragment:bg,tonemapping_fragment:Tg,tonemapping_pars_fragment:Ag,transmission_fragment:wg,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:zg,background_vert:Ug,background_frag:Dg,backgroundCube_vert:Ig,backgroundCube_frag:Ng,cube_vert:Og,cube_frag:Fg,depth_vert:Bg,depth_frag:Hg,distanceRGBA_vert:Gg,distanceRGBA_frag:Vg,equirect_vert:kg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:jg,meshbasic_frag:Yg,meshlambert_vert:Kg,meshlambert_frag:$g,meshmatcap_vert:Zg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:a_,points_frag:l_,shadow_vert:c_,shadow_frag:u_,sprite_vert:h_,sprite_frag:f_},we={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},fn={basic:{uniforms:Ct([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([we.points,we.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([we.common,we.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([we.sprite,we.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ct([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ct([we.lights,we.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fn.physical={uniforms:Ct([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pr={r:0,b:0,g:0};function d_(n,e,t,i,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(m,d){let E=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),E=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===go)?(u===void 0&&(u=new zt(new gs(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:hs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=y.colorSpace!==et,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zt(new El(2,2),new yi({name:"BackgroundMaterial",uniforms:hs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=y.colorSpace!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(Pr,Wf(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function p_(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(G,Y,te,V,$){let pe=!1;if(o){const ce=x(V,te,Y);c!==ce&&(c=ce,p(c.object)),pe=d(G,V,te,$),pe&&E(G,V,te,$)}else{const ce=Y.wireframe===!0;(c.geometry!==V.id||c.program!==te.id||c.wireframe!==ce)&&(c.geometry=V.id,c.program=te.id,c.wireframe=ce,pe=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,H(G,Y,te,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(G){return i.isWebGL2?n.bindVertexArray(G):r.bindVertexArrayOES(G)}function _(G){return i.isWebGL2?n.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function x(G,Y,te){const V=te.wireframe===!0;let $=a[G.id];$===void 0&&($={},a[G.id]=$);let pe=$[Y.id];pe===void 0&&(pe={},$[Y.id]=pe);let ce=pe[V];return ce===void 0&&(ce=m(f()),pe[V]=ce),ce}function m(G){const Y=[],te=[],V=[];for(let $=0;$<s;$++)Y[$]=0,te[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:V,object:G,attributes:{},index:null}}function d(G,Y,te,V){const $=c.attributes,pe=Y.attributes;let ce=0;const k=te.getAttributes();for(const j in k)if(k[j].location>=0){const Se=$[j];let Pe=pe[j];if(Pe===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Pe=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Pe=G.instanceColor)),Se===void 0||Se.attribute!==Pe||Pe&&Se.data!==Pe.data)return!0;ce++}return c.attributesNum!==ce||c.index!==V}function E(G,Y,te,V){const $={},pe=Y.attributes;let ce=0;const k=te.getAttributes();for(const j in k)if(k[j].location>=0){let Se=pe[j];Se===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor));const Pe={};Pe.attribute=Se,Se&&Se.data&&(Pe.data=Se.data),$[j]=Pe,ce++}c.attributes=$,c.attributesNum=ce,c.index=V}function y(){const G=c.newAttributes;for(let Y=0,te=G.length;Y<te;Y++)G[Y]=0}function M(G){P(G,0)}function P(G,Y){const te=c.newAttributes,V=c.enabledAttributes,$=c.attributeDivisors;te[G]=1,V[G]===0&&(n.enableVertexAttribArray(G),V[G]=1),$[G]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Y),$[G]=Y)}function L(){const G=c.newAttributes,Y=c.enabledAttributes;for(let te=0,V=Y.length;te<V;te++)Y[te]!==G[te]&&(n.disableVertexAttribArray(te),Y[te]=0)}function C(G,Y,te,V,$,pe,ce){ce===!0?n.vertexAttribIPointer(G,Y,te,$,pe):n.vertexAttribPointer(G,Y,te,V,$,pe)}function H(G,Y,te,V){if(i.isWebGL2===!1&&(G.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const $=V.attributes,pe=te.getAttributes(),ce=Y.defaultAttributeValues;for(const k in pe){const j=pe[k];if(j.location>=0){let xe=$[k];if(xe===void 0&&(k==="instanceMatrix"&&G.instanceMatrix&&(xe=G.instanceMatrix),k==="instanceColor"&&G.instanceColor&&(xe=G.instanceColor)),xe!==void 0){const Se=xe.normalized,Pe=xe.itemSize,Le=t.get(xe);if(Le===void 0)continue;const B=Le.buffer,le=Le.type,fe=Le.bytesPerElement,Me=i.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||xe.gpuType===Pf);if(xe.isInterleavedBufferAttribute){const Ee=xe.data,g=Ee.stride,T=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let w=0;w<j.locationSize;w++)P(j.location+w,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let w=0;w<j.locationSize;w++)M(j.location+w);n.bindBuffer(n.ARRAY_BUFFER,B);for(let w=0;w<j.locationSize;w++)C(j.location+w,Pe/j.locationSize,le,Se,g*fe,(T+Pe/j.locationSize*w)*fe,Me)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<j.locationSize;Ee++)P(j.location+Ee,xe.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<j.locationSize;Ee++)M(j.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,B);for(let Ee=0;Ee<j.locationSize;Ee++)C(j.location+Ee,Pe/j.locationSize,le,Se,Pe*fe,Pe/j.locationSize*Ee*fe,Me)}}else if(ce!==void 0){const Se=ce[k];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(j.location,Se);break;case 3:n.vertexAttrib3fv(j.location,Se);break;case 4:n.vertexAttrib4fv(j.location,Se);break;default:n.vertexAttrib1fv(j.location,Se)}}}}L()}function S(){de();for(const G in a){const Y=a[G];for(const te in Y){const V=Y[te];for(const $ in V)_(V[$].object),delete V[$];delete Y[te]}delete a[G]}}function A(G){if(a[G.id]===void 0)return;const Y=a[G.id];for(const te in Y){const V=Y[te];for(const $ in V)_(V[$].object),delete V[$];delete Y[te]}delete a[G.id]}function J(G){for(const Y in a){const te=a[Y];if(te[G.id]===void 0)continue;const V=te[G.id];for(const $ in V)_(V[$].object),delete V[$];delete te[G.id]}}function de(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:de,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:M,disableUnusedAttributes:L}}function m_(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function g_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,M=o||e.has("OES_texture_float"),P=y&&M,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:L}}function __(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,y=E*4;let M=d.clippingState||null;l.value=M,M=u(_,f,y,p);for(let P=0;P!==y;++P)M[P]=t[P];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function x_(n){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=ls:a===Ia&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Da||a===Ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z2(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Yf extends Xf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Au=[.125,.215,.35,.446,.526,.582],fi=20,ra=new Yf,wu=new Ve;let oa=null;const ci=(1+Math.sqrt(5))/2,ki=1/ci,Ru=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ci,ki),new I(0,ci,-ki),new I(ki,0,ci),new I(-ki,0,ci),new I(ci,ki,0),new I(-ci,ki,0)];class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){oa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa),e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:$s,format:nn,colorSpace:_n,depthBuffer:!1},s=Pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=y_(r,e,t)}return s}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,s){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=Zn,u.autoClear=!1;const p=new Ml({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new zt(new gs,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(wu),x=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;Lr(s,E*y,d>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Lr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(s-1)%Ru.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const d=[];let E=0;for(let C=0;C<fi;++C){const H=C/x,S=Math.exp(-H*H/2);d.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const M=this._sizeLods[s],P=3*M*(s>y-Yi?s-y+Yi:0),L=4*(this._cubeSize-M);Lr(t,P,L,3*M,2*M),l.setRenderTarget(t),l.render(h,ra)}}function v_(n){const e=[],t=[],i=[];let s=n;const r=n-Yi+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Yi?l=Au[o-n+Yi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,E=new Float32Array(x*_*p),y=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,H=L>2?0:-1,S=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];E.set(S,x*_*L),y.set(f,m*_*L);const A=[L,L,L,L,L,L];M.set(A,d*_*L)}const P=new Nt;P.setAttribute("position",new mn(E,x)),P.setAttribute("uv",new mn(y,m)),P.setAttribute("faceIndex",new mn(M,d)),e.push(P),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pu(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function y_(n,e,t){const i=new Float32Array(fi),s=new I(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Lu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function zu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function M_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ia,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Cu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Cu(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function S_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function E_(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let y=0,M=E.length;y<M;y+=3){const P=E[y+0],L=E[y+1],C=E[y+2];f.push(P,L,L,C,C,P)}}else if(_!==void 0){const E=_.array;x=_.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const P=y+0,L=y+1,C=y+2;f.push(P,L,L,C,C,P)}}else return;const m=new(Of(f)?kf:Vf)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function b_(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,_){if(_===0)return;let x,m;if(s)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,p,a,f*l,_),t.update(p,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function T_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function A_(n,e){return n[0]-e[0]}function w_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function R_(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==x){let Y=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var p=Y;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),P===!0&&(S=3);let A=u.attributes.position.count*S,J=1;A>e.maxTextureSize&&(J=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const de=new Float32Array(A*J*4*x),F=new Hf(de,A,J,x);F.type=jn,F.needsUpdate=!0;const G=S*4;for(let te=0;te<x;te++){const V=L[te],$=C[te],pe=H[te],ce=A*J*4*te;for(let k=0;k<V.count;k++){const j=k*G;y===!0&&(o.fromBufferAttribute(V,k),de[ce+j+0]=o.x,de[ce+j+1]=o.y,de[ce+j+2]=o.z,de[ce+j+3]=0),M===!0&&(o.fromBufferAttribute($,k),de[ce+j+4]=o.x,de[ce+j+5]=o.y,de[ce+j+6]=o.z,de[ce+j+7]=0),P===!0&&(o.fromBufferAttribute(pe,k),de[ce+j+8]=o.x,de[ce+j+9]=o.y,de[ce+j+10]=o.z,de[ce+j+11]=pe.itemSize===4?o.w:1)}}m={count:x,texture:F,size:new ye(A,J)},r.set(u,m),u.addEventListener("dispose",Y)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let M=0;M<_;M++)x[M]=[M,0];i[u.id]=x}for(let M=0;M<_;M++){const P=x[M];P[0]=M,P[1]=f[M]}x.sort(w_);for(let M=0;M<8;M++)M<_&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(A_);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const P=a[M],L=P[0],C=P[1];L!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+M)!==m[L]&&u.setAttribute("morphTarget"+M,m[L]),d&&u.getAttribute("morphNormal"+M)!==d[L]&&u.setAttribute("morphNormal"+M,d[L]),s[M]=C,E+=C):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const y=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function C_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Kf=new Dt,$f=new Hf,Zf=new m2,Jf=new qf,Uu=[],Du=[],Iu=new Float32Array(16),Nu=new Float32Array(9),Ou=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vo(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function P_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function D_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),pt(t,i)}}function I_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Nu.set(i),n.uniformMatrix3fv(this.addr,!1,Nu),pt(t,i)}}function N_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Iu.set(i),n.uniformMatrix4fv(this.addr,!1,Iu),pt(t,i)}}function O_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function G_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function X_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Kf,s)}function q_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zf,s)}function j_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jf,s)}function Y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$f,s)}function K_(n){switch(n){case 5126:return P_;case 35664:return L_;case 35665:return z_;case 35666:return U_;case 35674:return D_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return k_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Y_}}function $_(n,e){n.uniform1fv(this.addr,e)}function Z_(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function J_(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function Q_(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function ex(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tx(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nx(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ix(n,e){n.uniform1iv(this.addr,e)}function sx(n,e){n.uniform2iv(this.addr,e)}function rx(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function ax(n,e){n.uniform1uiv(this.addr,e)}function lx(n,e){n.uniform2uiv(this.addr,e)}function cx(n,e){n.uniform3uiv(this.addr,e)}function ux(n,e){n.uniform4uiv(this.addr,e)}function hx(n,e,t){const i=this.cache,s=e.length,r=vo(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kf,r[o])}function fx(n,e,t){const i=this.cache,s=e.length,r=vo(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zf,r[o])}function dx(n,e,t){const i=this.cache,s=e.length,r=vo(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jf,r[o])}function px(n,e,t){const i=this.cache,s=e.length,r=vo(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$f,r[o])}function mx(n){switch(n){case 5126:return $_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=K_(t.type)}}class _x{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=mx(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function vx(n,e,t){const i=n.name,s=i.length;for(aa.lastIndex=0;;){const r=aa.exec(i),o=aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fu(t,c===void 0?new gx(a,n,e):new _x(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new xx(a),Fu(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vx(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let yx=0;function Mx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Sx(n){switch(n){case _n:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Hu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mx(n.getShaderSource(e),o)}else return s}function Ex(n,e){const t=Sx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bx(n,e){let t;switch(e){case x1:t="Linear";break;case v1:t="Reinhard";break;case y1:t="OptimizedCineon";break;case Rf:t="ACESFilmic";break;case M1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function Ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ws(n){return n!==""}function Gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(Rx,Px)}const Cx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Px(n,e){let t=He[e];if(t===void 0){const i=Cx.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(Lx,zx)}function zx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ix(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case g1:e="ENVMAP_BLENDING_MIX";break;case _1:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ux(t),c=Dx(t),u=Ix(t),h=Nx(t),f=Ox(t),p=t.isWebGL2?"":Tx(t),_=Ax(r),x=s.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ws).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ws).join(`
`),d.length>0&&(d+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),d=[p,Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?He.tonemapping_pars_fragment:"",t.toneMapping!==Zn?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=Ba(o),o=Gu(o,t),o=Vu(o,t),a=Ba(a),a=Gu(a,t),a=Vu(a,t),o=ku(o),a=ku(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+m+o,M=E+d+a,P=Bu(s,s.VERTEX_SHADER,y),L=Bu(s,s.FRAGMENT_SHADER,M);if(s.attachShader(x,P),s.attachShader(x,L),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),n.debug.checkShaderErrors){const S=s.getProgramInfoLog(x).trim(),A=s.getShaderInfoLog(P).trim(),J=s.getShaderInfoLog(L).trim();let de=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,L);else{const G=Hu(s,P,"vertex"),Y=Hu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+G+`
`+Y)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||J==="")&&(F=!1);F&&(this.diagnostics={runnable:de,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(P),s.deleteShader(L);let C;this.getUniforms=function(){return C===void 0&&(C=new Xr(s,x)),C};let H;return this.getAttributes=function(){return H===void 0&&(H=wx(s,x)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=L,this}let Bx=0;class Hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gx(e),t.set(e,i)),i}}class Gx{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}}function Vx(n,e,t,i,s,r,o){const a=new yl,l=new Hx,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,A,J,de,F){const G=de.fog,Y=F.geometry,te=S.isMeshStandardMaterial?de.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||te),$=V&&V.mapping===go?V.image.height:null,pe=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,k=ce!==void 0?ce.length:0;let j=0;Y.morphAttributes.position!==void 0&&(j=1),Y.morphAttributes.normal!==void 0&&(j=2),Y.morphAttributes.color!==void 0&&(j=3);let xe,Se,Pe,Le;if(pe){const Qe=fn[pe];xe=Qe.vertexShader,Se=Qe.fragmentShader}else xe=S.vertexShader,Se=S.fragmentShader,l.update(S),Pe=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const B=n.getRenderTarget(),le=F.isInstancedMesh===!0,fe=!!S.map,Me=!!S.matcap,Ee=!!V,g=!!S.aoMap,T=!!S.lightMap,w=!!S.bumpMap,D=!!S.normalMap,U=!!S.displacementMap,W=!!S.emissiveMap,Q=!!S.metalnessMap,q=!!S.roughnessMap,ie=S.anisotropy>0,ne=S.clearcoat>0,Ae=S.iridescence>0,b=S.sheen>0,v=S.transmission>0,O=ie&&!!S.anisotropyMap,se=ne&&!!S.clearcoatMap,ae=ne&&!!S.clearcoatNormalMap,ue=ne&&!!S.clearcoatRoughnessMap,Te=Ae&&!!S.iridescenceMap,me=Ae&&!!S.iridescenceThicknessMap,Z=b&&!!S.sheenColorMap,z=b&&!!S.sheenRoughnessMap,he=!!S.specularMap,Re=!!S.specularColorMap,ge=!!S.specularIntensityMap,ve=v&&!!S.transmissionMap,De=v&&!!S.thicknessMap,je=!!S.gradientMap,N=!!S.alphaMap,Ce=S.alphaTest>0,ee=!!S.alphaHash,_e=!!S.extensions,be=!!Y.attributes.uv1,We=!!Y.attributes.uv2,$e=!!Y.attributes.uv3;let Je=Zn;return S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:u,shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:Se,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:le,instancingColor:le&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:_n,map:fe,matcap:Me,envMap:Ee,envMapMode:Ee&&V.mapping,envMapCubeUVHeight:$,aoMap:g,lightMap:T,bumpMap:w,normalMap:D,displacementMap:f&&U,emissiveMap:W,normalMapObjectSpace:D&&S.normalMapType===D1,normalMapTangentSpace:D&&S.normalMapType===xl,metalnessMap:Q,roughnessMap:q,anisotropy:ie,anisotropyMap:O,clearcoat:ne,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:Ae,iridescenceMap:Te,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Z,sheenRoughnessMap:z,specularMap:he,specularColorMap:Re,specularIntensityMap:ge,transmission:v,transmissionMap:ve,thicknessMap:De,gradientMap:je,opaque:S.transparent===!1&&S.blending===es,alphaMap:N,alphaTest:Ce,alphaHash:ee,combine:S.combine,mapUv:fe&&x(S.map.channel),aoMapUv:g&&x(S.aoMap.channel),lightMapUv:T&&x(S.lightMap.channel),bumpMapUv:w&&x(S.bumpMap.channel),normalMapUv:D&&x(S.normalMap.channel),displacementMapUv:U&&x(S.displacementMap.channel),emissiveMapUv:W&&x(S.emissiveMap.channel),metalnessMapUv:Q&&x(S.metalnessMap.channel),roughnessMapUv:q&&x(S.roughnessMap.channel),anisotropyMapUv:O&&x(S.anisotropyMap.channel),clearcoatMapUv:se&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:z&&x(S.sheenRoughnessMap.channel),specularMapUv:he&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:ge&&x(S.specularIntensityMap.channel),transmissionMapUv:ve&&x(S.transmissionMap.channel),thicknessMapUv:De&&x(S.thicknessMap.channel),alphaMapUv:N&&x(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(D||ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:We,vertexUv3s:$e,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(fe||N),fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:j,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&S.map.colorSpace===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:_e&&S.extensions.derivatives===!0,extensionFragDepth:_e&&S.extensions.fragDepth===!0,extensionDrawBuffers:_e&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)A.push(J),A.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(E(A,S),y(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function E(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const A=_[S.type];let J;if(A){const de=fn[A];J=R2.clone(de.uniforms)}else J=S.uniforms;return J}function P(S,A){let J;for(let de=0,F=c.length;de<F;de++){const G=c[de];if(G.cacheKey===A){J=G,++J.usedTimes;break}}return J===void 0&&(J=new Fx(n,A,S,r),c.push(J)),J}function L(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:P,releaseProgram:L,releaseShaderCache:C,programs:c,dispose:H}}function kx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Wx),i.length>1&&i.sort(f||Xu),s.length>1&&s.sort(f||Xu)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Xx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new qu,n.set(i,[o])):s>=r.length?(o=new qu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function jx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yx=0;function Kx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $x(n,e){const t=new qx,i=jx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,o=new it,a=new it;function l(u,h){let f=0,p=0,_=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let x=0,m=0,d=0,E=0,y=0,M=0,P=0,L=0,C=0,H=0;u.sort(Kx);const S=h===!0?Math.PI:1;for(let J=0,de=u.length;J<de;J++){const F=u[J],G=F.color,Y=F.intensity,te=F.distance,V=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=G.r*Y*S,p+=G.g*Y*S,_+=G.b*Y*S;else if(F.isLightProbe)for(let $=0;$<9;$++)s.probe[$].addScaledVector(F.sh.coefficients[$],Y);else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const pe=F.shadow,ce=i.get(F);ce.shadowBias=pe.bias,ce.shadowNormalBias=pe.normalBias,ce.shadowRadius=pe.radius,ce.shadowMapSize=pe.mapSize,s.directionalShadow[x]=ce,s.directionalShadowMap[x]=V,s.directionalShadowMatrix[x]=F.shadow.matrix,M++}s.directional[x]=$,x++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(G).multiplyScalar(Y*S),$.distance=te,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,s.spot[d]=$;const pe=F.shadow;if(F.map&&(s.spotLightMap[C]=F.map,C++,pe.updateMatrices(F),F.castShadow&&H++),s.spotLightMatrix[d]=pe.matrix,F.castShadow){const ce=i.get(F);ce.shadowBias=pe.bias,ce.shadowNormalBias=pe.normalBias,ce.shadowRadius=pe.radius,ce.shadowMapSize=pe.mapSize,s.spotShadow[d]=ce,s.spotShadowMap[d]=V,L++}d++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(G).multiplyScalar(Y),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),s.rectArea[E]=$,E++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*S),$.distance=F.distance,$.decay=F.decay,F.castShadow){const pe=F.shadow,ce=i.get(F);ce.shadowBias=pe.bias,ce.shadowNormalBias=pe.normalBias,ce.shadowRadius=pe.radius,ce.shadowMapSize=pe.mapSize,ce.shadowCameraNear=pe.camera.near,ce.shadowCameraFar=pe.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=V,s.pointShadowMatrix[m]=F.shadow.matrix,P++}s.point[m]=$,m++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(Y*S),$.groundColor.copy(F.groundColor).multiplyScalar(Y*S),s.hemi[y]=$,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==x||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==E||A.hemiLength!==y||A.numDirectionalShadows!==M||A.numPointShadows!==P||A.numSpotShadows!==L||A.numSpotMaps!==C)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=E,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+C-H,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=H,A.directionalLength=x,A.pointLength=m,A.spotLength=d,A.rectAreaLength=E,A.hemiLength=y,A.numDirectionalShadows=M,A.numPointShadows=P,A.numSpotShadows=L,A.numSpotMaps=C,s.version=Yx++)}function c(u,h){let f=0,p=0,_=0,x=0,m=0;const d=h.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const M=u[E];if(M.isDirectionalLight){const P=s.directional[f];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(M.isSpotLight){const P=s.spot[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const P=s.rectArea[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const P=s.point[p];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const P=s.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function ju(n,e){const t=new $x(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zx(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new ju(n,e),t.set(r,[l])):o>=a.length?(l=new ju(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Jx extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qx extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t4=`uniform sampler2D shadow_pass;
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
}`;function n4(n,e,t){let i=new Sl;const s=new ye,r=new ye,o=new _t,a=new Jx({depthPacking:U1}),l=new Qx,c={},u=t.maxTextureSize,h={[In]:Ut,[Ut]:In,[zn]:zn},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:e4,fragmentShader:t4}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let d=this.type;this.render=function(P,L,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const H=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),J=n.state;J.setBlending($n),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const de=d!==Cn&&this.type===Cn,F=d===Cn&&this.type!==Cn;for(let G=0,Y=P.length;G<Y;G++){const te=P[G],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||de===!0||F===!0){const ce=this.type!==Cn?{minFilter:Pt,magFilter:Pt}:{};V.map!==null&&V.map.dispose(),V.map=new xi(s.x,s.y,ce),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const pe=V.getViewportCount();for(let ce=0;ce<pe;ce++){const k=V.getViewport(ce);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),J.viewport(o),V.updateMatrices(te,ce),i=V.getFrustum(),M(L,C,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&E(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(H,S,A)};function E(P,L){const C=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,C,f,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,C,p,x,null)}function y(P,L,C,H){let S=null;const A=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const J=S.uuid,de=L.uuid;let F=c[J];F===void 0&&(F={},c[J]=F);let G=F[de];G===void 0&&(G=S.clone(),F[de]=G),S=G}if(S.visible=L.visible,S.wireframe=L.wireframe,H===Cn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=n.properties.get(S);J.light=C}return S}function M(P,L,C,H,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Cn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const de=e.update(P),F=P.material;if(Array.isArray(F)){const G=de.groups;for(let Y=0,te=G.length;Y<te;Y++){const V=G[Y],$=F[V.materialIndex];if($&&$.visible){const pe=y(P,$,H,S);n.renderBufferDirect(C,null,de,pe,P,V)}}}else if(F.visible){const G=y(P,F,H,S);n.renderBufferDirect(C,null,de,G,P,null)}}const J=P.children;for(let de=0,F=J.length;de<F;de++)M(J[de],L,C,H,S)}}function i4(n,e,t){const i=t.isWebGL2;function s(){let N=!1;const Ce=new _t;let ee=null;const _e=new _t(0,0,0,0);return{setMask:function(be){ee!==be&&!N&&(n.colorMask(be,be,be,be),ee=be)},setLocked:function(be){N=be},setClear:function(be,We,$e,Je,Ot){Ot===!0&&(be*=Je,We*=Je,$e*=Je),Ce.set(be,We,$e,Je),_e.equals(Ce)===!1&&(n.clearColor(be,We,$e,Je),_e.copy(Ce))},reset:function(){N=!1,ee=null,_e.set(-1,0,0,0)}}}function r(){let N=!1,Ce=null,ee=null,_e=null;return{setTest:function(be){be?B(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(be){Ce!==be&&!N&&(n.depthMask(be),Ce=be)},setFunc:function(be){if(ee!==be){switch(be){case c1:n.depthFunc(n.NEVER);break;case u1:n.depthFunc(n.ALWAYS);break;case h1:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case f1:n.depthFunc(n.EQUAL);break;case d1:n.depthFunc(n.GEQUAL);break;case p1:n.depthFunc(n.GREATER);break;case m1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=be}},setLocked:function(be){N=be},setClear:function(be){_e!==be&&(n.clearDepth(be),_e=be)},reset:function(){N=!1,Ce=null,ee=null,_e=null}}}function o(){let N=!1,Ce=null,ee=null,_e=null,be=null,We=null,$e=null,Je=null,Ot=null;return{setTest:function(Qe){N||(Qe?B(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Qe){Ce!==Qe&&!N&&(n.stencilMask(Qe),Ce=Qe)},setFunc:function(Qe,cn,Tt){(ee!==Qe||_e!==cn||be!==Tt)&&(n.stencilFunc(Qe,cn,Tt),ee=Qe,_e=cn,be=Tt)},setOp:function(Qe,cn,Tt){(We!==Qe||$e!==cn||Je!==Tt)&&(n.stencilOp(Qe,cn,Tt),We=Qe,$e=cn,Je=Tt)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Ot!==Qe&&(n.clearStencil(Qe),Ot=Qe)},reset:function(){N=!1,Ce=null,ee=null,_e=null,be=null,We=null,$e=null,Je=null,Ot=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,x=[],m=null,d=!1,E=null,y=null,M=null,P=null,L=null,C=null,H=null,S=!1,A=null,J=null,de=null,F=null,G=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,V=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),te=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),te=V>=2);let pe=null,ce={};const k=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),xe=new _t().fromArray(k),Se=new _t().fromArray(j);function Pe(N,Ce,ee,_e){const be=new Uint8Array(4),We=n.createTexture();n.bindTexture(N,We),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ee;$e++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ce,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ce+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return We}const Le={};Le[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(n.DEPTH_TEST),l.setFunc(Ua),U(!1),W(Lc),B(n.CULL_FACE),w($n);function B(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function le(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function fe(N,Ce){return p[N]!==Ce?(n.bindFramebuffer(N,Ce),p[N]=Ce,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ce),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function Me(N,Ce){let ee=x,_e=!1;if(N)if(ee=_.get(Ce),ee===void 0&&(ee=[],_.set(Ce,ee)),N.isWebGLMultipleRenderTargets){const be=N.texture;if(ee.length!==be.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let We=0,$e=be.length;We<$e;We++)ee[We]=n.COLOR_ATTACHMENT0+We;ee.length=be.length,_e=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,_e=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,_e=!0);_e&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ee(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const g={[Xi]:n.FUNC_ADD,[Jm]:n.FUNC_SUBTRACT,[Qm]:n.FUNC_REVERSE_SUBTRACT};if(i)g[Ic]=n.MIN,g[Nc]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(g[Ic]=N.MIN_EXT,g[Nc]=N.MAX_EXT)}const T={[e1]:n.ZERO,[t1]:n.ONE,[n1]:n.SRC_COLOR,[Af]:n.SRC_ALPHA,[l1]:n.SRC_ALPHA_SATURATE,[o1]:n.DST_COLOR,[s1]:n.DST_ALPHA,[i1]:n.ONE_MINUS_SRC_COLOR,[wf]:n.ONE_MINUS_SRC_ALPHA,[a1]:n.ONE_MINUS_DST_COLOR,[r1]:n.ONE_MINUS_DST_ALPHA};function w(N,Ce,ee,_e,be,We,$e,Je){if(N===$n){d===!0&&(le(n.BLEND),d=!1);return}if(d===!1&&(B(n.BLEND),d=!0),N!==Zm){if(N!==E||Je!==S){if((y!==Xi||L!==Xi)&&(n.blendEquation(n.FUNC_ADD),y=Xi,L=Xi),Je)switch(N){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,P=null,C=null,H=null,E=N,S=Je}return}be=be||Ce,We=We||ee,$e=$e||_e,(Ce!==y||be!==L)&&(n.blendEquationSeparate(g[Ce],g[be]),y=Ce,L=be),(ee!==M||_e!==P||We!==C||$e!==H)&&(n.blendFuncSeparate(T[ee],T[_e],T[We],T[$e]),M=ee,P=_e,C=We,H=$e),E=N,S=!1}function D(N,Ce){N.side===zn?le(n.CULL_FACE):B(n.CULL_FACE);let ee=N.side===Ut;Ce&&(ee=!ee),U(ee),N.blending===es&&N.transparent===!1?w($n):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const _e=N.stencilWrite;c.setTest(_e),_e&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function W(N){N!==Ym?(B(n.CULL_FACE),N!==J&&(N===Lc?n.cullFace(n.BACK):N===Km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),J=N}function Q(N){N!==de&&(te&&n.lineWidth(N),de=N)}function q(N,Ce,ee){N?(B(n.POLYGON_OFFSET_FILL),(F!==Ce||G!==ee)&&(n.polygonOffset(Ce,ee),F=Ce,G=ee)):le(n.POLYGON_OFFSET_FILL)}function ie(N){N?B(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+Y-1),pe!==N&&(n.activeTexture(N),pe=N)}function Ae(N,Ce,ee){ee===void 0&&(pe===null?ee=n.TEXTURE0+Y-1:ee=pe);let _e=ce[ee];_e===void 0&&(_e={type:void 0,texture:void 0},ce[ee]=_e),(_e.type!==N||_e.texture!==Ce)&&(pe!==ee&&(n.activeTexture(ee),pe=ee),n.bindTexture(N,Ce||Le[N]),_e.type=N,_e.texture=Ce)}function b(){const N=ce[pe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){xe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function ge(N){Se.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Se.copy(N))}function ve(N,Ce){let ee=h.get(Ce);ee===void 0&&(ee=new WeakMap,h.set(Ce,ee));let _e=ee.get(N);_e===void 0&&(_e=n.getUniformBlockIndex(Ce,N.name),ee.set(N,_e))}function De(N,Ce){const _e=h.get(Ce).get(N);u.get(Ce)!==_e&&(n.uniformBlockBinding(Ce,_e,N.__bindingPointIndex),u.set(Ce,_e))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pe=null,ce={},p={},_=new WeakMap,x=[],m=null,d=!1,E=null,y=null,M=null,P=null,L=null,C=null,H=null,S=!1,A=null,J=null,de=null,F=null,G=null,xe.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:le,bindFramebuffer:fe,drawBuffers:Me,useProgram:Ee,setBlending:w,setMaterial:D,setFlipSided:U,setCullFace:W,setLineWidth:Q,setPolygonOffset:q,setScissorTest:ie,activeTexture:ne,bindTexture:Ae,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:z,texImage3D:he,updateUBOMapping:ve,uniformBlockBinding:De,texStorage2D:me,texStorage3D:Z,texSubImage2D:se,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Te,scissor:Re,viewport:ge,reset:je}}function s4(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,v){return d?new OffscreenCanvas(b,v):Js("canvas")}function y(b,v,O,se){let ae=1;if((b.width>se||b.height>se)&&(ae=se/Math.max(b.width,b.height)),ae<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ue=v?to:Math.floor,Te=ue(ae*b.width),me=ue(ae*b.height);x===void 0&&(x=E(Te,me));const Z=O?E(Te,me):x;return Z.width=Te,Z.height=me,Z.getContext("2d").drawImage(b,0,0,Te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Te+"x"+me+")."),Z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return Fa(b.width)&&Fa(b.height)}function P(b){return a?!1:b.wrapS!==tn||b.wrapT!==tn||b.minFilter!==Pt&&b.minFilter!==Wt}function L(b,v){return b.generateMipmaps&&v&&b.minFilter!==Pt&&b.minFilter!==Wt}function C(b){n.generateMipmap(b)}function H(b,v,O,se,ae=!1){if(a===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=v;return v===n.RED&&(O===n.FLOAT&&(ue=n.R32F),O===n.HALF_FLOAT&&(ue=n.R16F),O===n.UNSIGNED_BYTE&&(ue=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ue=n.R8UI),O===n.UNSIGNED_SHORT&&(ue=n.R16UI),O===n.UNSIGNED_INT&&(ue=n.R32UI),O===n.BYTE&&(ue=n.R8I),O===n.SHORT&&(ue=n.R16I),O===n.INT&&(ue=n.R32I)),v===n.RG&&(O===n.FLOAT&&(ue=n.RG32F),O===n.HALF_FLOAT&&(ue=n.RG16F),O===n.UNSIGNED_BYTE&&(ue=n.RG8)),v===n.RGBA&&(O===n.FLOAT&&(ue=n.RGBA32F),O===n.HALF_FLOAT&&(ue=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ue=se===et&&ae===!1?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)),(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(b,v,O){return L(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){return b===Pt||b===Oc||b===Io?n.NEAREST:n.LINEAR}function J(b){const v=b.target;v.removeEventListener("dispose",J),F(v),v.isVideoTexture&&_.delete(v)}function de(b){const v=b.target;v.removeEventListener("dispose",de),Y(v)}function F(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,se=m.get(O);if(se){const ae=se[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(b),Object.keys(se).length===0&&m.delete(O)}i.remove(b)}function G(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const O=b.source,se=m.get(O);delete se[v.__cacheKey],o.memory.textures--}function Y(b){const v=b.texture,O=i.get(b),se=i.get(v);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(O.__webglFramebuffer[ae]))for(let ue=0;ue<O.__webglFramebuffer[ae].length;ue++)n.deleteFramebuffer(O.__webglFramebuffer[ae][ue]);else n.deleteFramebuffer(O.__webglFramebuffer[ae]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ae])}else{if(Array.isArray(O.__webglFramebuffer))for(let ae=0;ae<O.__webglFramebuffer.length;ae++)n.deleteFramebuffer(O.__webglFramebuffer[ae]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ae=0;ae<O.__webglColorRenderbuffer.length;ae++)O.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ae]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,ue=v.length;ae<ue;ae++){const Te=i.get(v[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(v[ae])}i.remove(v),i.remove(b)}let te=0;function V(){te=0}function $(){const b=te;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),te+=1,b}function pe(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ce(b,v){const O=i.get(b);if(b.isVideoTexture&&ne(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,b,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function k(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){fe(O,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function j(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){fe(O,b,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function xe(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Me(O,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const Se={[Qr]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},Pe={[Pt]:n.NEAREST,[Oc]:n.NEAREST_MIPMAP_NEAREST,[Io]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[S1]:n.LINEAR_MIPMAP_NEAREST,[Ks]:n.LINEAR_MIPMAP_LINEAR},Le={[N1]:n.NEVER,[k1]:n.ALWAYS,[O1]:n.LESS,[B1]:n.LEQUAL,[F1]:n.EQUAL,[V1]:n.GEQUAL,[H1]:n.GREATER,[G1]:n.NOTEQUAL};function B(b,v,O){if(O?(n.texParameteri(b,n.TEXTURE_WRAP_S,Se[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Se[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Se[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Pe[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Pe[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==tn||v.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Pt&&v.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Pt||v.minFilter!==Io&&v.minFilter!==Ks||v.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function le(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",J));const se=v.source;let ae=m.get(se);ae===void 0&&(ae={},m.set(se,ae));const ue=pe(v);if(ue!==b.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ae[ue].usedTimes++;const Te=ae[b.__cacheKey];Te!==void 0&&(ae[b.__cacheKey].usedTimes--,Te.usedTimes===0&&G(v)),b.__cacheKey=ue,b.__webglTexture=ae[ue].texture}return O}function fe(b,v,O){let se=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=n.TEXTURE_3D);const ae=le(b,v),ue=v.source;t.bindTexture(se,b.__webglTexture,n.TEXTURE0+O);const Te=i.get(ue);if(ue.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+O),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const me=P(v)&&M(v.image)===!1;let Z=y(v.image,me,!1,u);Z=Ae(v,Z);const z=M(Z)||a,he=r.convert(v.format,v.colorSpace);let Re=r.convert(v.type),ge=H(v.internalFormat,he,Re,v.colorSpace,v.isVideoTexture);B(se,v,z);let ve;const De=v.mipmaps,je=a&&v.isVideoTexture!==!0,N=Te.__version===void 0||ae===!0,Ce=S(v,Z,z);if(v.isDepthTexture)ge=n.DEPTH_COMPONENT,a?v.type===jn?ge=n.DEPTH_COMPONENT32F:v.type===qn?ge=n.DEPTH_COMPONENT24:v.type===mi?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:v.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===gi&&ge===n.DEPTH_COMPONENT&&v.type!==_l&&v.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=qn,Re=r.convert(v.type)),v.format===us&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,v.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=mi,Re=r.convert(v.type))),N&&(je?t.texStorage2D(n.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,he,Re,null));else if(v.isDataTexture)if(De.length>0&&z){je&&N&&t.texStorage2D(n.TEXTURE_2D,Ce,ge,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)ve=De[ee],je?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,he,Re,ve.data):t.texImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,he,Re,ve.data);v.generateMipmaps=!1}else je?(N&&t.texStorage2D(n.TEXTURE_2D,Ce,ge,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,he,Re,Z.data)):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,he,Re,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,ge,De[0].width,De[0].height,Z.depth);for(let ee=0,_e=De.length;ee<_e;ee++)ve=De[ee],v.format!==nn?he!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,Z.depth,he,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ge,ve.width,ve.height,Z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,Z.depth,he,Re,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ge,ve.width,ve.height,Z.depth,0,he,Re,ve.data)}else{je&&N&&t.texStorage2D(n.TEXTURE_2D,Ce,ge,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)ve=De[ee],v.format!==nn?he!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,he,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,he,Re,ve.data):t.texImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,he,Re,ve.data)}else if(v.isDataArrayTexture)je?(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,Re,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,he,Re,Z.data);else if(v.isData3DTexture)je?(N&&t.texStorage3D(n.TEXTURE_3D,Ce,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,Re,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,he,Re,Z.data);else if(v.isFramebufferTexture){if(N)if(je)t.texStorage2D(n.TEXTURE_2D,Ce,ge,Z.width,Z.height);else{let ee=Z.width,_e=Z.height;for(let be=0;be<Ce;be++)t.texImage2D(n.TEXTURE_2D,be,ge,ee,_e,0,he,Re,null),ee>>=1,_e>>=1}}else if(De.length>0&&z){je&&N&&t.texStorage2D(n.TEXTURE_2D,Ce,ge,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)ve=De[ee],je?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he,Re,ve):t.texImage2D(n.TEXTURE_2D,ee,ge,he,Re,ve);v.generateMipmaps=!1}else je?(N&&t.texStorage2D(n.TEXTURE_2D,Ce,ge,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Re,Z)):t.texImage2D(n.TEXTURE_2D,0,ge,he,Re,Z);L(v,z)&&C(se),Te.__version=ue.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Me(b,v,O){if(v.image.length!==6)return;const se=le(b,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const ue=i.get(ae);if(ae.version!==ue.__version||se===!0){t.activeTexture(n.TEXTURE0+O),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,me=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ee=0;ee<6;ee++)!Te&&!me?Z[ee]=y(v.image[ee],!1,!0,c):Z[ee]=me?v.image[ee].image:v.image[ee],Z[ee]=Ae(v,Z[ee]);const z=Z[0],he=M(z)||a,Re=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),ve=H(v.internalFormat,Re,ge,v.colorSpace),De=a&&v.isVideoTexture!==!0,je=ue.__version===void 0||se===!0;let N=S(v,z,he);B(n.TEXTURE_CUBE_MAP,v,he);let Ce;if(Te){De&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,ve,z.width,z.height);for(let ee=0;ee<6;ee++){Ce=Z[ee].mipmaps;for(let _e=0;_e<Ce.length;_e++){const be=Ce[_e];v.format!==nn?Re!==null?De?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,be.width,be.height,Re,ge,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,ve,be.width,be.height,0,Re,ge,be.data)}}}else{Ce=v.mipmaps,De&&je&&(Ce.length>0&&N++,t.texStorage2D(n.TEXTURE_CUBE_MAP,N,ve,Z[0].width,Z[0].height));for(let ee=0;ee<6;ee++)if(me){De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Z[ee].width,Z[ee].height,Re,ge,Z[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ve,Z[ee].width,Z[ee].height,0,Re,ge,Z[ee].data);for(let _e=0;_e<Ce.length;_e++){const We=Ce[_e].image[ee].image;De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,We.width,We.height,Re,ge,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,ve,We.width,We.height,0,Re,ge,We.data)}}else{De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,ge,Z[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ve,Re,ge,Z[ee]);for(let _e=0;_e<Ce.length;_e++){const be=Ce[_e];De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Re,ge,be.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,ve,Re,ge,be.image[ee])}}}L(v,he)&&C(n.TEXTURE_CUBE_MAP),ue.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ee(b,v,O,se,ae,ue){const Te=r.convert(O.format,O.colorSpace),me=r.convert(O.type),Z=H(O.internalFormat,Te,me,O.colorSpace);if(!i.get(v).__hasExternalTextures){const he=Math.max(1,v.width>>ue),Re=Math.max(1,v.height>>ue);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,Z,he,Re,v.depth,0,Te,me,null):t.texImage2D(ae,ue,Z,he,Re,0,Te,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ae,i.get(O).__webglTexture,0,q(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ae,i.get(O).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let se=n.DEPTH_COMPONENT16;if(O||ie(v)){const ae=v.depthTexture;ae&&ae.isDepthTexture&&(ae.type===jn?se=n.DEPTH_COMPONENT32F:ae.type===qn&&(se=n.DEPTH_COMPONENT24));const ue=q(v);ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,se,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,se,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const se=q(v);O&&ie(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const se=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ae=0;ae<se.length;ae++){const ue=se[ae],Te=r.convert(ue.format,ue.colorSpace),me=r.convert(ue.type),Z=H(ue.internalFormat,Te,me,ue.colorSpace),z=q(v);O&&ie(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,Z,v.width,v.height):ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function T(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const se=i.get(v.depthTexture).__webglTexture,ae=q(v);if(v.depthTexture.format===gi)ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===us)ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function w(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");T(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]=n.createRenderbuffer(),g(v.__webglDepthbuffer[se],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),g(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(b,v,O){const se=i.get(b);v!==void 0&&Ee(se.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&w(b)}function U(b){const v=b.texture,O=i.get(b),se=i.get(v);b.addEventListener("dispose",de),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=v.version,o.memory.textures++);const ae=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,Te=M(b)||a;if(ae){O.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[me]=[];for(let Z=0;Z<v.mipmaps.length;Z++)O.__webglFramebuffer[me][Z]=n.createFramebuffer()}else O.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)O.__webglFramebuffer[me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){const me=b.texture;for(let Z=0,z=me.length;Z<z;Z++){const he=i.get(me[Z]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ie(b)===!1){const me=ue?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<me.length;Z++){const z=me[Z];O.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const he=r.convert(z.format,z.colorSpace),Re=r.convert(z.type),ge=H(z.internalFormat,he,Re,z.colorSpace,b.isXRRenderTarget===!0),ve=q(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),g(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),B(n.TEXTURE_CUBE_MAP,v,Te);for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ee(O.__webglFramebuffer[me][Z],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Z);else Ee(O.__webglFramebuffer[me],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);L(v,Te)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const me=b.texture;for(let Z=0,z=me.length;Z<z;Z++){const he=me[Z],Re=i.get(he);t.bindTexture(n.TEXTURE_2D,Re.__webglTexture),B(n.TEXTURE_2D,he,Te),Ee(O.__webglFramebuffer,b,he,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),L(he,Te)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,se.__webglTexture),B(me,v,Te),a&&v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ee(O.__webglFramebuffer[Z],b,v,n.COLOR_ATTACHMENT0,me,Z);else Ee(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,me,0);L(v,Te)&&C(me),t.unbindTexture()}b.depthBuffer&&w(b)}function W(b){const v=M(b)||a,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ae=O.length;se<ae;se++){const ue=O[se];if(L(ue,v)){const Te=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ue).__webglTexture;t.bindTexture(Te,me),C(Te),t.unbindTexture()}}}function Q(b){if(a&&b.samples>0&&ie(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,se=b.height;let ae=n.COLOR_BUFFER_BIT;const ue=[],Te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),Z=b.isWebGLMultipleRenderTargets===!0;if(Z)for(let z=0;z<v.length;z++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let z=0;z<v.length;z++){ue.push(n.COLOR_ATTACHMENT0+z),b.depthBuffer&&ue.push(Te);const he=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(he===!1&&(b.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[z]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Z){const Re=i.get(v[z]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,O,se,0,0,O,se,ae,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let z=0;z<v.length;z++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,me.__webglColorRenderbuffer[z]);const he=i.get(v[z]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function q(b){return Math.min(h,b.samples)}function ie(b){const v=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(b){const v=o.render.frame;_.get(b)!==v&&(_.set(b,v),b.update())}function Ae(b,v){const O=b.colorSpace,se=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Oa||O!==_n&&O!==_i&&(O===et||O===_o?a===!1?e.has("EXT_sRGB")===!0&&se===nn?(b.format=Oa,b.minFilter=Wt,b.generateMipmaps=!1):v=Ff.sRGBToLinear(v):(se!==nn||ae!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.setTexture2D=ce,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=xe,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ie}const r4=0,ht=1;function o4(n,e,t){const i=t.isWebGL2;function s(r,o=_i){let a;const l=o===et||o===_o?ht:r4;if(r===Jn)return n.UNSIGNED_BYTE;if(r===Lf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===E1)return n.BYTE;if(r===b1)return n.SHORT;if(r===_l)return n.UNSIGNED_SHORT;if(r===Pf)return n.INT;if(r===qn)return n.UNSIGNED_INT;if(r===jn)return n.FLOAT;if(r===$s)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===T1)return n.ALPHA;if(r===nn)return n.RGBA;if(r===A1)return n.LUMINANCE;if(r===w1)return n.LUMINANCE_ALPHA;if(r===gi)return n.DEPTH_COMPONENT;if(r===us)return n.DEPTH_STENCIL;if(r===Oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===R1)return n.RED;if(r===Uf)return n.RED_INTEGER;if(r===C1)return n.RG;if(r===Df)return n.RG_INTEGER;if(r===If)return n.RGBA_INTEGER;if(r===No||r===Oo||r===Fo||r===Bo)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===No)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===No)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fc||r===Bc||r===Hc||r===Gc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===P1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vc||r===kc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vc)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===kc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wc||r===Xc||r===qc||r===jc||r===Yc||r===Kc||r===$c||r===Zc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$c)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===iu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ho||r===su||r===ru)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ho)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===su)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ru)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===L1||r===ou||r===au||r===lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ho)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ou)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===au)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class a4 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l4={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l4)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class c4 extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:gi,u!==gi&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gi&&(i=qn),i===void 0&&u===us&&(i=mi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class u4 extends Si{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=t.getContextAttributes();let m=null,d=null;const E=[],y=[],M=new Xt;M.layers.enable(1),M.viewport=new _t;const P=new Xt;P.layers.enable(2),P.viewport=new _t;const L=[M,P],C=new a4;C.layers.enable(1),C.layers.enable(2);let H=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=E[k];return j===void 0&&(j=new la,E[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=E[k];return j===void 0&&(j=new la,E[k]=j),j.getGripSpace()},this.getHand=function(k){let j=E[k];return j===void 0&&(j=new la,E[k]=j),j.getHandSpace()};function A(k){const j=y.indexOf(k.inputSource);if(j===-1)return;const xe=E[j];xe!==void 0&&(xe.update(k.inputSource,k.frame,c||o),xe.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",de);for(let k=0;k<E.length;k++){const j=y[k];j!==null&&(y[k]=null,E[k].disconnect(j))}H=null,S=null,e.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",J),s.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),d=new xi(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,xe=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?us:gi,xe=x.stencil?mi:qn);const Pe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),d=new xi(f.textureWidth,f.textureHeight,{format:nn,type:Jn,depthTexture:new c4(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function de(k){for(let j=0;j<k.removed.length;j++){const xe=k.removed[j],Se=y.indexOf(xe);Se>=0&&(y[Se]=null,E[Se].disconnect(xe))}for(let j=0;j<k.added.length;j++){const xe=k.added[j];let Se=y.indexOf(xe);if(Se===-1){for(let Le=0;Le<E.length;Le++)if(Le>=y.length){y.push(xe),Se=Le;break}else if(y[Le]===null){y[Le]=xe,Se=Le;break}if(Se===-1)break}const Pe=E[Se];Pe&&Pe.connect(xe)}}const F=new I,G=new I;function Y(k,j,xe){F.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(xe.matrixWorld);const Se=F.distanceTo(G),Pe=j.projectionMatrix.elements,Le=xe.projectionMatrix.elements,B=Pe[14]/(Pe[10]-1),le=Pe[14]/(Pe[10]+1),fe=(Pe[9]+1)/Pe[5],Me=(Pe[9]-1)/Pe[5],Ee=(Pe[8]-1)/Pe[0],g=(Le[8]+1)/Le[0],T=B*Ee,w=B*g,D=Se/(-Ee+g),U=D*-Ee;j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(U),k.translateZ(D),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const W=B+D,Q=le+D,q=T-U,ie=w+(Se-U),ne=fe*le/Q*W,Ae=Me*le/Q*W;k.projectionMatrix.makePerspective(q,ie,ne,Ae,W,Q),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function te(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;C.near=P.near=M.near=k.near,C.far=P.far=M.far=k.far,(H!==C.near||S!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,S=C.far);const j=k.parent,xe=C.cameras;te(C,j);for(let Se=0;Se<xe.length;Se++)te(xe[Se],j);xe.length===2?Y(C,M,P):C.projectionMatrix.copy(M.projectionMatrix),V(k,C,j)};function V(k,j,xe){xe===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(xe.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Zs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let $=null;function pe(k,j){if(u=j.getViewerPose(c||o),_=j,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Se=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Pe=0;Pe<xe.length;Pe++){const Le=xe[Pe];let B=null;if(p!==null)B=p.getViewport(Le);else{const fe=h.getViewSubImage(f,Le);B=fe.viewport,Pe===0&&(e.setRenderTargetTextures(d,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(d))}let le=L[Pe];le===void 0&&(le=new Xt,le.layers.enable(Pe),le.viewport=new _t,L[Pe]=le),le.matrix.fromArray(Le.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Le.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(B.x,B.y,B.width,B.height),Pe===0&&(C.matrix.copy(le.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(le)}}for(let xe=0;xe<E.length;xe++){const Se=y[xe],Pe=E[xe];Se!==null&&Pe!==void 0&&Pe.update(Se,j,c||o)}$&&$(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const ce=new jf;ce.setAnimationLoop(pe),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function h4(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Wf(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f4(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const M=y.program;i.uniformBlockBinding(E,M)}function c(E,y){let M=s[E.id];M===void 0&&(_(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(E,P);const L=e.render.frame;r[E.id]!==L&&(f(E),r[E.id]=L)}function u(E){const y=h();E.__bindingPointIndex=y;const M=n.createBuffer(),P=E.__size,L=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],M=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,C=M.length;L<C;L++){const H=M[L];if(p(H,L,P)===!0){const S=H.__offset,A=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let de=0;de<A.length;de++){const F=A[de],G=x(F);typeof F=="number"?(H.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,S+J,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=F.elements[0],H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=F.elements[0],H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=F.elements[0]):(F.toArray(H.__data,J),J+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,M){const P=E.value;if(M[y]===void 0){if(typeof P=="number")M[y]=P;else{const L=Array.isArray(P)?P:[P],C=[];for(let H=0;H<L.length;H++)C.push(L[H].clone());M[y]=C}return!0}else if(typeof P=="number"){if(M[y]!==P)return M[y]=P,!0}else{const L=Array.isArray(M[y])?M[y]:[M[y]],C=Array.isArray(P)?P:[P];for(let H=0;H<L.length;H++){const S=L[H];if(S.equals(C[H])===!1)return S.copy(C[H]),!0}}return!1}function _(E){const y=E.uniforms;let M=0;const P=16;let L=0;for(let C=0,H=y.length;C<H;C++){const S=y[C],A={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let de=0,F=J.length;de<F;de++){const G=J[de],Y=x(G);A.boundary+=Y.boundary,A.storage+=Y.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,C>0){L=M%P;const de=P-L;L!==0&&de-A.boundary<0&&(M+=P-L,S.__offset=M)}M+=A.storage}return L=M%P,L>0&&(M+=P-L),E.__size=M,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Qf{constructor(e={}){const{canvas:t=r2(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const y=this;let M=!1,P=0,L=0,C=null,H=-1,S=null;const A=new _t,J=new _t;let de=null;const F=new Ve(0);let G=0,Y=t.width,te=t.height,V=1,$=null,pe=null;const ce=new _t(0,0,Y,te),k=new _t(0,0,Y,te);let j=!1;const xe=new Sl;let Se=!1,Pe=!1,Le=null;const B=new it,le=new ye,fe=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return C===null?V:1}let g=i;function T(R,X){for(let re=0;re<R.length;re++){const K=R[re],oe=t.getContext(K,X);if(oe!==null)return oe}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",_e,!1),g===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),g=T(X,R),g===null)throw T(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let w,D,U,W,Q,q,ie,ne,Ae,b,v,O,se,ae,ue,Te,me,Z,z,he,Re,ge,ve,De;function je(){w=new S_(g),D=new g_(g,w,e),w.init(D),ge=new o4(g,w,D),U=new i4(g,w,D),W=new T_(g),Q=new kx,q=new s4(g,w,U,Q,D,ge,W),ie=new x_(y),ne=new M_(y),Ae=new I2(g,D),ve=new p_(g,w,Ae,D),b=new E_(g,Ae,W,ve),v=new C_(g,b,Ae,W),z=new R_(g,D,q),Te=new __(Q),O=new Vx(y,ie,ne,w,D,ve,Te),se=new h4(y,Q),ae=new Xx,ue=new Zx(w,D),Z=new d_(y,ie,ne,U,v,f,l),me=new n4(y,v,D),De=new f4(g,W,D,U),he=new m_(g,w,W,D),Re=new b_(g,w,W,D),W.programs=O.programs,y.capabilities=D,y.extensions=w,y.properties=Q,y.renderLists=ae,y.shadowMap=me,y.state=U,y.info=W}je();const N=new u4(y,g);this.xr=N,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=w.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=w.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(Y,te,!1))},this.getSize=function(R){return R.set(Y,te)},this.setSize=function(R,X,re=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,te=X,t.width=Math.floor(R*V),t.height=Math.floor(X*V),re===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Y*V,te*V).floor()},this.setDrawingBufferSize=function(R,X,re){Y=R,te=X,V=re,t.width=Math.floor(R*re),t.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,X,re,K){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,X,re,K),U.viewport(A.copy(ce).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,X,re,K){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,X,re,K),U.scissor(J.copy(k).multiplyScalar(V).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(R){U.setScissorTest(j=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(R=!0,X=!0,re=!0){let K=0;if(R){let oe=!1;if(C!==null){const ze=C.texture.format;oe=ze===If||ze===Df||ze===Uf}if(oe){const ze=C.texture.type,Ue=ze===Jn||ze===qn||ze===_l||ze===mi||ze===Lf||ze===zf,Ne=Z.getClearColor(),Oe=Z.getClearAlpha(),Xe=Ne.r,Ie=Ne.g,Be=Ne.b;Ue?(p[0]=Xe,p[1]=Ie,p[2]=Be,p[3]=Oe,g.clearBufferuiv(g.COLOR,0,p)):(_[0]=Xe,_[1]=Ie,_[2]=Be,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else K|=g.COLOR_BUFFER_BIT}X&&(K|=g.DEPTH_BUFFER_BIT),re&&(K|=g.STENCIL_BUFFER_BIT),g.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),ue.dispose(),Q.dispose(),ie.dispose(),ne.dispose(),v.dispose(),ve.dispose(),De.dispose(),O.dispose(),N.dispose(),N.removeEventListener("sessionstart",Qe),N.removeEventListener("sessionend",cn),Le&&(Le.dispose(),Le=null),Tt.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=W.autoReset,X=me.enabled,re=me.autoUpdate,K=me.needsUpdate,oe=me.type;je(),W.autoReset=R,me.enabled=X,me.autoUpdate=re,me.needsUpdate=K,me.type=oe}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const X=R.target;X.removeEventListener("dispose",be),We(X)}function We(R){$e(R),Q.remove(R)}function $e(R){const X=Q.get(R).programs;X!==void 0&&(X.forEach(function(re){O.releaseProgram(re)}),R.isShaderMaterial&&O.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,K,oe,ze){X===null&&(X=Me);const Ue=oe.isMesh&&oe.matrixWorld.determinant()<0,Ne=fd(R,X,re,K,oe);U.setMaterial(K,Ue);let Oe=re.index,Xe=1;if(K.wireframe===!0){if(Oe=b.getWireframeAttribute(re),Oe===void 0)return;Xe=2}const Ie=re.drawRange,Be=re.attributes.position;let st=Ie.start*Xe,rt=(Ie.start+Ie.count)*Xe;ze!==null&&(st=Math.max(st,ze.start*Xe),rt=Math.min(rt,(ze.start+ze.count)*Xe)),Oe!==null?(st=Math.max(st,0),rt=Math.min(rt,Oe.count)):Be!=null&&(st=Math.max(st,0),rt=Math.min(rt,Be.count));const Gt=rt-st;if(Gt<0||Gt===1/0)return;ve.setup(oe,K,Ne,re,Oe);let yn,at=he;if(Oe!==null&&(yn=Ae.get(Oe),at=Re,at.setIndex(yn)),oe.isMesh)K.wireframe===!0?(U.setLineWidth(K.wireframeLinewidth*Ee()),at.setMode(g.LINES)):at.setMode(g.TRIANGLES);else if(oe.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),U.setLineWidth(qe*Ee()),oe.isLineSegments?at.setMode(g.LINES):oe.isLineLoop?at.setMode(g.LINE_LOOP):at.setMode(g.LINE_STRIP)}else oe.isPoints?at.setMode(g.POINTS):oe.isSprite&&at.setMode(g.TRIANGLES);if(oe.isInstancedMesh)at.renderInstances(st,Gt,oe.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Mo=Math.min(re.instanceCount,qe);at.renderInstances(st,Gt,Mo)}else at.render(st,Gt)},this.compile=function(R,X){function re(K,oe,ze){K.transparent===!0&&K.side===zn&&K.forceSinglePass===!1?(K.side=Ut,K.needsUpdate=!0,rr(K,oe,ze),K.side=In,K.needsUpdate=!0,rr(K,oe,ze),K.side=zn):rr(K,oe,ze)}m=ue.get(R),m.init(),E.push(m),R.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(y._useLegacyLights),R.traverse(function(K){const oe=K.material;if(oe)if(Array.isArray(oe))for(let ze=0;ze<oe.length;ze++){const Ue=oe[ze];re(Ue,R,K)}else re(oe,R,K)}),E.pop(),m=null};let Je=null;function Ot(R){Je&&Je(R)}function Qe(){Tt.stop()}function cn(){Tt.start()}const Tt=new jf;Tt.setAnimationLoop(Ot),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(R){Je=R,N.setAnimationLoop(R),R===null?Tt.stop():Tt.start()},N.addEventListener("sessionstart",Qe),N.addEventListener("sessionend",cn),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(X),X=N.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,X,C),m=ue.get(R,E.length),m.init(),E.push(m),B.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),xe.setFromProjectionMatrix(B),Pe=this.localClippingEnabled,Se=Te.init(this.clippingPlanes,Pe),x=ae.get(R,d.length),x.init(),d.push(x),Ul(R,X,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort($,pe),this.info.render.frame++,Se===!0&&Te.beginShadows();const re=m.state.shadowsArray;if(me.render(re,R,X),Se===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(x,R),m.setupLights(y._useLegacyLights),X.isArrayCamera){const K=X.cameras;for(let oe=0,ze=K.length;oe<ze;oe++){const Ue=K[oe];Dl(x,R,Ue,Ue.viewport)}}else Dl(x,R,X);C!==null&&(q.updateMultisampleRenderTarget(C),q.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(y,R,X),ve.resetDefaultState(),H=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Ul(R,X,re,K){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xe.intersectsSprite(R)){K&&fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(B);const Ue=v.update(R),Ne=R.material;Ne.visible&&x.push(R,Ue,Ne,re,fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xe.intersectsObject(R))){const Ue=v.update(R),Ne=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fe.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),fe.copy(Ue.boundingSphere.center)),fe.applyMatrix4(R.matrixWorld).applyMatrix4(B)),Array.isArray(Ne)){const Oe=Ue.groups;for(let Xe=0,Ie=Oe.length;Xe<Ie;Xe++){const Be=Oe[Xe],st=Ne[Be.materialIndex];st&&st.visible&&x.push(R,Ue,st,re,fe.z,Be)}}else Ne.visible&&x.push(R,Ue,Ne,re,fe.z,null)}}const ze=R.children;for(let Ue=0,Ne=ze.length;Ue<Ne;Ue++)Ul(ze[Ue],X,re,K)}function Dl(R,X,re,K){const oe=R.opaque,ze=R.transmissive,Ue=R.transparent;m.setupLightsView(re),Se===!0&&Te.setGlobalState(y.clippingPlanes,re),ze.length>0&&hd(oe,ze,X,re),K&&U.viewport(A.copy(K)),oe.length>0&&sr(oe,X,re),ze.length>0&&sr(ze,X,re),Ue.length>0&&sr(Ue,X,re),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function hd(R,X,re,K){const oe=D.isWebGL2;Le===null&&(Le=new xi(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?$s:Jn,minFilter:Ks,samples:oe?4:0})),y.getDrawingBufferSize(le),oe?Le.setSize(le.x,le.y):Le.setSize(to(le.x),to(le.y));const ze=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(F),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=Zn,sr(R,re,K),q.updateMultisampleRenderTarget(Le),q.updateRenderTargetMipmap(Le);let Ne=!1;for(let Oe=0,Xe=X.length;Oe<Xe;Oe++){const Ie=X[Oe],Be=Ie.object,st=Ie.geometry,rt=Ie.material,Gt=Ie.group;if(rt.side===zn&&Be.layers.test(K.layers)){const yn=rt.side;rt.side=Ut,rt.needsUpdate=!0,Il(Be,re,K,st,rt,Gt),rt.side=yn,rt.needsUpdate=!0,Ne=!0}}Ne===!0&&(q.updateMultisampleRenderTarget(Le),q.updateRenderTargetMipmap(Le)),y.setRenderTarget(ze),y.setClearColor(F,G),y.toneMapping=Ue}function sr(R,X,re){const K=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,ze=R.length;oe<ze;oe++){const Ue=R[oe],Ne=Ue.object,Oe=Ue.geometry,Xe=K===null?Ue.material:K,Ie=Ue.group;Ne.layers.test(re.layers)&&Il(Ne,X,re,Oe,Xe,Ie)}}function Il(R,X,re,K,oe,ze){R.onBeforeRender(y,X,re,K,oe,ze),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(y,X,re,K,R,ze),oe.transparent===!0&&oe.side===zn&&oe.forceSinglePass===!1?(oe.side=Ut,oe.needsUpdate=!0,y.renderBufferDirect(re,X,K,oe,R,ze),oe.side=In,oe.needsUpdate=!0,y.renderBufferDirect(re,X,K,oe,R,ze),oe.side=zn):y.renderBufferDirect(re,X,K,oe,R,ze),R.onAfterRender(y,X,re,K,oe,ze)}function rr(R,X,re){X.isScene!==!0&&(X=Me);const K=Q.get(R),oe=m.state.lights,ze=m.state.shadowsArray,Ue=oe.state.version,Ne=O.getParameters(R,oe.state,ze,X,re),Oe=O.getProgramCacheKey(Ne);let Xe=K.programs;K.environment=R.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(R.isMeshStandardMaterial?ne:ie).get(R.envMap||K.environment),Xe===void 0&&(R.addEventListener("dispose",be),Xe=new Map,K.programs=Xe);let Ie=Xe.get(Oe);if(Ie!==void 0){if(K.currentProgram===Ie&&K.lightsStateVersion===Ue)return Nl(R,Ne),Ie}else Ne.uniforms=O.getUniforms(R),R.onBuild(re,Ne,y),R.onBeforeCompile(Ne,y),Ie=O.acquireProgram(Ne,Oe),Xe.set(Oe,Ie),K.uniforms=Ne.uniforms;const Be=K.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=Te.uniform),Nl(R,Ne),K.needsLights=pd(R),K.lightsStateVersion=Ue,K.needsLights&&(Be.ambientLightColor.value=oe.state.ambient,Be.lightProbe.value=oe.state.probe,Be.directionalLights.value=oe.state.directional,Be.directionalLightShadows.value=oe.state.directionalShadow,Be.spotLights.value=oe.state.spot,Be.spotLightShadows.value=oe.state.spotShadow,Be.rectAreaLights.value=oe.state.rectArea,Be.ltc_1.value=oe.state.rectAreaLTC1,Be.ltc_2.value=oe.state.rectAreaLTC2,Be.pointLights.value=oe.state.point,Be.pointLightShadows.value=oe.state.pointShadow,Be.hemisphereLights.value=oe.state.hemi,Be.directionalShadowMap.value=oe.state.directionalShadowMap,Be.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Be.spotShadowMap.value=oe.state.spotShadowMap,Be.spotLightMatrix.value=oe.state.spotLightMatrix,Be.spotLightMap.value=oe.state.spotLightMap,Be.pointShadowMap.value=oe.state.pointShadowMap,Be.pointShadowMatrix.value=oe.state.pointShadowMatrix);const st=Ie.getUniforms(),rt=Xr.seqWithValue(st.seq,Be);return K.currentProgram=Ie,K.uniformsList=rt,Ie}function Nl(R,X){const re=Q.get(R);re.outputColorSpace=X.outputColorSpace,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function fd(R,X,re,K,oe){X.isScene!==!0&&(X=Me),q.resetTextureUnits();const ze=X.fog,Ue=K.isMeshStandardMaterial?X.environment:null,Ne=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_n,Oe=(K.isMeshStandardMaterial?ne:ie).get(K.envMap||Ue),Xe=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ie=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!re.morphAttributes.position,st=!!re.morphAttributes.normal,rt=!!re.morphAttributes.color;let Gt=Zn;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Gt=y.toneMapping);const yn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,at=yn!==void 0?yn.length:0,qe=Q.get(K),Mo=m.state.lights;if(Se===!0&&(Pe===!0||R!==S)){const Ft=R===S&&K.id===H;Te.setState(K,R,Ft)}let lt=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Mo.state.version||qe.outputColorSpace!==Ne||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||qe.envMap!==Oe||K.fog===!0&&qe.fog!==ze||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ie||qe.morphTargets!==Be||qe.morphNormals!==st||qe.morphColors!==rt||qe.toneMapping!==Gt||D.isWebGL2===!0&&qe.morphTargetsCount!==at)&&(lt=!0):(lt=!0,qe.__version=K.version);let ti=qe.currentProgram;lt===!0&&(ti=rr(K,X,oe));let Ol=!1,xs=!1,So=!1;const At=ti.getUniforms(),ni=qe.uniforms;if(U.useProgram(ti.program)&&(Ol=!0,xs=!0,So=!0),K.id!==H&&(H=K.id,xs=!0),Ol||S!==R){At.setValue(g,"projectionMatrix",R.projectionMatrix),At.setValue(g,"viewMatrix",R.matrixWorldInverse);const Ft=At.map.cameraPosition;Ft!==void 0&&Ft.setValue(g,fe.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&At.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,xs=!0,So=!0)}if(oe.isSkinnedMesh){At.setOptional(g,oe,"bindMatrix"),At.setOptional(g,oe,"bindMatrixInverse");const Ft=oe.skeleton;Ft&&(D.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),At.setValue(g,"boneTexture",Ft.boneTexture,q),At.setValue(g,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Eo=re.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&D.isWebGL2===!0)&&z.update(oe,re,ti),(xs||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,At.setValue(g,"receiveShadow",oe.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ni.envMap.value=Oe,ni.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),xs&&(At.setValue(g,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&dd(ni,So),ze&&K.fog===!0&&se.refreshFogUniforms(ni,ze),se.refreshMaterialUniforms(ni,K,V,te,Le),Xr.upload(g,qe.uniformsList,ni,q)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Xr.upload(g,qe.uniformsList,ni,q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(g,"center",oe.center),At.setValue(g,"modelViewMatrix",oe.modelViewMatrix),At.setValue(g,"normalMatrix",oe.normalMatrix),At.setValue(g,"modelMatrix",oe.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ft=K.uniformsGroups;for(let bo=0,md=Ft.length;bo<md;bo++)if(D.isWebGL2){const Fl=Ft[bo];De.update(Fl,ti),De.bind(Fl,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function dd(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function pd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,re){Q.get(R.texture).__webglTexture=X,Q.get(R.depthTexture).__webglTexture=re;const K=Q.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const re=Q.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,re=0){C=R,P=X,L=re;let K=!0,oe=null,ze=!1,Ue=!1;if(R){const Oe=Q.get(R);Oe.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(g.FRAMEBUFFER,null),K=!1):Oe.__webglFramebuffer===void 0?q.setupRenderTarget(R):Oe.__hasExternalTextures&&q.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const Ie=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ie[X])?oe=Ie[X][re]:oe=Ie[X],ze=!0):D.isWebGL2&&R.samples>0&&q.useMultisampledRTT(R)===!1?oe=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?oe=Ie[re]:oe=Ie,A.copy(R.viewport),J.copy(R.scissor),de=R.scissorTest}else A.copy(ce).multiplyScalar(V).floor(),J.copy(k).multiplyScalar(V).floor(),de=j;if(U.bindFramebuffer(g.FRAMEBUFFER,oe)&&D.drawBuffers&&K&&U.drawBuffers(R,oe),U.viewport(A),U.scissor(J),U.setScissorTest(de),ze){const Oe=Q.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,re)}else if(Ue){const Oe=Q.get(R.texture),Xe=X||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,re||0,Xe)}H=-1},this.readRenderTargetPixels=function(R,X,re,K,oe,ze,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){U.bindFramebuffer(g.FRAMEBUFFER,Ne);try{const Oe=R.texture,Xe=Oe.format,Ie=Oe.type;if(Xe!==nn&&ge.convert(Xe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ie===$s&&(w.has("EXT_color_buffer_half_float")||D.isWebGL2&&w.has("EXT_color_buffer_float"));if(Ie!==Jn&&ge.convert(Ie)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===jn&&(D.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-K&&re>=0&&re<=R.height-oe&&g.readPixels(X,re,K,oe,ge.convert(Xe),ge.convert(Ie),ze)}finally{const Oe=C!==null?Q.get(C).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,X,re=0){const K=Math.pow(2,-re),oe=Math.floor(X.image.width*K),ze=Math.floor(X.image.height*K);q.setTexture2D(X,0),g.copyTexSubImage2D(g.TEXTURE_2D,re,0,0,R.x,R.y,oe,ze),U.unbindTexture()},this.copyTextureToTexture=function(R,X,re,K=0){const oe=X.image.width,ze=X.image.height,Ue=ge.convert(re.format),Ne=ge.convert(re.type);q.setTexture2D(re,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,re.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,re.unpackAlignment),X.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,K,R.x,R.y,oe,ze,Ue,Ne,X.image.data):X.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,K,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,K,R.x,R.y,Ue,Ne,X.image),K===0&&re.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(R,X,re,K,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Ne=R.max.z-R.min.z+1,Oe=ge.convert(K.format),Xe=ge.convert(K.type);let Ie;if(K.isData3DTexture)q.setTexture3D(K,0),Ie=g.TEXTURE_3D;else if(K.isDataArrayTexture)q.setTexture2DArray(K,0),Ie=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const Be=g.getParameter(g.UNPACK_ROW_LENGTH),st=g.getParameter(g.UNPACK_IMAGE_HEIGHT),rt=g.getParameter(g.UNPACK_SKIP_PIXELS),Gt=g.getParameter(g.UNPACK_SKIP_ROWS),yn=g.getParameter(g.UNPACK_SKIP_IMAGES),at=re.isCompressedTexture?re.mipmaps[0]:re.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,at.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,R.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,R.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?g.texSubImage3D(Ie,oe,X.x,X.y,X.z,ze,Ue,Ne,Oe,Xe,at.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Ie,oe,X.x,X.y,X.z,ze,Ue,Ne,Oe,at.data)):g.texSubImage3D(Ie,oe,X.x,X.y,X.z,ze,Ue,Ne,Oe,Xe,at),g.pixelStorei(g.UNPACK_ROW_LENGTH,Be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(g.UNPACK_SKIP_PIXELS,rt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Gt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,yn),oe===0&&K.generateMipmaps&&g.generateMipmap(Ie),U.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),U.unbindTexture()},this.resetState=function(){P=0,L=0,C=null,U.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?Qn:Nf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?et:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class d4 extends Qf{}d4.prototype.isWebGL1Renderer=!0;class p4 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fs extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new I,Ku=new I,$u=new it,ca=new ir,zr=new nr;class ed extends ft{constructor(e=new Nt,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Yu.fromBufferAttribute(t,s-1),Ku.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Yu.distanceTo(Ku);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;$u.copy(s).invert(),ca.copy(e.ray).applyMatrix4($u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),E=Math.min(_.count,o.start+o.count);for(let y=d,M=E-1;y<M;y+=p){const P=_.getX(y),L=_.getX(y+1);if(c.fromBufferAttribute(m,P),u.fromBufferAttribute(m,L),ca.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(f);H<e.near||H>e.far||t.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let y=d,M=E-1;y<M;y+=p){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),ca.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Zu=new I,Ju=new I;class Qu extends ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Zu.fromBufferAttribute(t,s),Ju.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zu.distanceTo(Ju);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cs extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new it,Ha=new ir,Ur=new nr,Dr=new I;class ua extends ft{constructor(e=new Nt,t=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;eh.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);Dr.fromBufferAttribute(h,m),th(Dr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,x=p;_<x;_++)Dr.fromBufferAttribute(h,_),th(Dr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(n,e,t,i,s,r,o){const a=Ha.distanceSqToPoint(n);if(a<t){const l=new I;Ha.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ye:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,l=new it;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(gt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tl extends vn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ye,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m4 extends Tl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Ir=new I,ha=new Al,fa=new Al,da=new Al;class g4 extends vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),c=Ir);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),ha.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,x,m),fa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,x,m),da.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),fa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),da.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ha.calc(l),fa.calc(l),da.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function _4(n,e){const t=1-n;return t*t*e}function x4(n,e){return 2*(1-n)*n*e}function v4(n,e){return n*n*e}function Bs(n,e,t,i){return _4(n,e)+x4(n,t)+v4(n,i)}function y4(n,e){const t=1-n;return t*t*t*e}function M4(n,e){const t=1-n;return 3*t*t*n*e}function S4(n,e){return 3*(1-n)*n*n*e}function E4(n,e){return n*n*n*e}function Hs(n,e,t,i,s){return y4(n,e)+M4(n,t)+S4(n,i)+E4(n,s)}class td extends vn{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b4 extends vn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y),Hs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wl extends vn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T4 extends vn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends vn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A4 extends vn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y),Bs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(nh(a,l.x,c.x,u.x,h.x),nh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var sd=Object.freeze({__proto__:null,ArcCurve:m4,CatmullRomCurve3:g4,CubicBezierCurve:td,CubicBezierCurve3:b4,EllipseCurve:Tl,LineCurve:wl,LineCurve3:T4,QuadraticBezierCurve:nd,QuadraticBezierCurve3:A4,SplineCurve:id});class w4 extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new wl(t,e))}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new sd[s.type]().fromJSON(s))}return this}}class Ga extends w4{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wl(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new nd(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new td(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new id(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Tl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends Ga{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ga().fromJSON(s))}return this}}const R4={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=rd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=U4(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<s;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Qs(r,o,t,a,l,p,0),o}};function rd(n,e,t,i,s){let r,o;if(s===W4(n,e,t,i)>0)for(r=e;r<t;r+=i)o=ih(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=ih(r,n[r],n[r+1],o);return o&&yo(o,o.next)&&(tr(o),o=o.next),o}function Mi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yo(t,t.next)||nt(t.prev,t,t.next)===0)){if(tr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qs(n,e,t,i,s,r,o){if(!n)return;!o&&r&&F4(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?P4(n,i,s,r):C4(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),tr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=L4(Mi(n),e,t),Qs(n,e,t,i,s,r,2)):o===2&&z4(n,e,t,i,s,r):Qs(Mi(n),e,t,i,s,r,1);break}}}function C4(n){const e=n.prev,t=n,i=n.next;if(nt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&Ki(s,a,r,l,o,c,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function P4(n,e,t,i){const s=n.prev,r=n,o=n.next;if(nt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Va(p,_,e,t,i),E=Va(x,m,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=d&&M&&M.z<=E;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Ki(a,u,l,h,c,f,y.x,y.y)&&nt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Ki(a,u,l,h,c,f,M.x,M.y)&&nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Ki(a,u,l,h,c,f,y.x,y.y)&&nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=p&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Ki(a,u,l,h,c,f,M.x,M.y)&&nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function L4(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!yo(s,r)&&od(s,i,i.next,r)&&er(s,r)&&er(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),tr(i),tr(i.next),i=n=r),i=i.next}while(i!==n);return Mi(i)}function z4(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G4(o,a)){let l=ad(o,a);o=Mi(o,o.next),l=Mi(l,l.next),Qs(o,e,t,i,s,r,0),Qs(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function U4(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=rd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(H4(c));for(s.sort(D4),r=0;r<s.length;r++)t=I4(s[r],t);return t}function D4(n,e){return n.x-e.x}function I4(n,e){const t=N4(n,e);if(!t)return e;const i=ad(t,n);return Mi(i,i.next),Mi(t,t.next)}function N4(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ki(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),er(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&O4(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function O4(n,e){return nt(n.prev,n,e.prev)<0&&nt(e.next,n,n.next)<0}function F4(n,e,t,i){let s=n;do s.z===0&&(s.z=Va(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B4(s)}function B4(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Va(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function H4(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ki(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function G4(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!V4(n,e)&&(er(n,e)&&er(e,n)&&k4(n,e)&&(nt(n.prev,n,e.prev)||nt(n,e.prev,e))||yo(n,e)&&nt(n.prev,n,n.next)>0&&nt(e.prev,e,e.next)>0)}function nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yo(n,e){return n.x===e.x&&n.y===e.y}function od(n,e,t,i){const s=Or(nt(n,e,t)),r=Or(nt(n,e,i)),o=Or(nt(t,i,n)),a=Or(nt(t,i,e));return!!(s!==r&&o!==a||s===0&&Nr(n,t,e)||r===0&&Nr(n,i,e)||o===0&&Nr(t,n,i)||a===0&&Nr(t,e,i))}function Nr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Or(n){return n>0?1:n<0?-1:0}function V4(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function er(n,e){return nt(n.prev,n,n.next)<0?nt(n,e,n.next)>=0&&nt(n,n.prev,e)>=0:nt(n,e,n.prev)<0||nt(n,n.next,e)<0}function k4(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ad(n,e){const t=new ka(n.i,n.x,n.y),i=new ka(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ih(n,e,t,i){const s=new ka(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ka(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W4(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ns{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ns.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];sh(e),rh(i,e);let o=e.length;t.forEach(sh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rh(i,t[l]);const a=R4.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function sh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Rl extends Nt{constructor(e=new qr([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:X4;let y,M=!1,P,L,C,H;d&&(y=d.getSpacedPoints(u),M=!0,f=!1,P=d.computeFrenetFrames(u,!1),L=new I,C=new I,H=new I),f||(m=0,p=0,_=0,x=0);const S=a.extractPoints(c);let A=S.shape;const J=S.holes;if(!ns.isClockWise(A)){A=A.reverse();for(let g=0,T=J.length;g<T;g++){const w=J[g];ns.isClockWise(w)&&(J[g]=w.reverse())}}const F=ns.triangulateShape(A,J),G=A;for(let g=0,T=J.length;g<T;g++){const w=J[g];A=A.concat(w)}function Y(g,T,w){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),g.clone().addScaledVector(T,w)}const te=A.length,V=F.length;function $(g,T,w){let D,U,W;const Q=g.x-T.x,q=g.y-T.y,ie=w.x-g.x,ne=w.y-g.y,Ae=Q*Q+q*q,b=Q*ne-q*ie;if(Math.abs(b)>Number.EPSILON){const v=Math.sqrt(Ae),O=Math.sqrt(ie*ie+ne*ne),se=T.x-q/v,ae=T.y+Q/v,ue=w.x-ne/O,Te=w.y+ie/O,me=((ue-se)*ne-(Te-ae)*ie)/(Q*ne-q*ie);D=se+Q*me-g.x,U=ae+q*me-g.y;const Z=D*D+U*U;if(Z<=2)return new ye(D,U);W=Math.sqrt(Z/2)}else{let v=!1;Q>Number.EPSILON?ie>Number.EPSILON&&(v=!0):Q<-Number.EPSILON?ie<-Number.EPSILON&&(v=!0):Math.sign(q)===Math.sign(ne)&&(v=!0),v?(D=-q,U=Q,W=Math.sqrt(Ae)):(D=Q,U=q,W=Math.sqrt(Ae/2))}return new ye(D/W,U/W)}const pe=[];for(let g=0,T=G.length,w=T-1,D=g+1;g<T;g++,w++,D++)w===T&&(w=0),D===T&&(D=0),pe[g]=$(G[g],G[w],G[D]);const ce=[];let k,j=pe.concat();for(let g=0,T=J.length;g<T;g++){const w=J[g];k=[];for(let D=0,U=w.length,W=U-1,Q=D+1;D<U;D++,W++,Q++)W===U&&(W=0),Q===U&&(Q=0),k[D]=$(w[D],w[W],w[Q]);ce.push(k),j=j.concat(k)}for(let g=0;g<m;g++){const T=g/m,w=p*Math.cos(T*Math.PI/2),D=_*Math.sin(T*Math.PI/2)+x;for(let U=0,W=G.length;U<W;U++){const Q=Y(G[U],pe[U],D);B(Q.x,Q.y,-w)}for(let U=0,W=J.length;U<W;U++){const Q=J[U];k=ce[U];for(let q=0,ie=Q.length;q<ie;q++){const ne=Y(Q[q],k[q],D);B(ne.x,ne.y,-w)}}}const xe=_+x;for(let g=0;g<te;g++){const T=f?Y(A[g],j[g],xe):A[g];M?(C.copy(P.normals[0]).multiplyScalar(T.x),L.copy(P.binormals[0]).multiplyScalar(T.y),H.copy(y[0]).add(C).add(L),B(H.x,H.y,H.z)):B(T.x,T.y,0)}for(let g=1;g<=u;g++)for(let T=0;T<te;T++){const w=f?Y(A[T],j[T],xe):A[T];M?(C.copy(P.normals[g]).multiplyScalar(w.x),L.copy(P.binormals[g]).multiplyScalar(w.y),H.copy(y[g]).add(C).add(L),B(H.x,H.y,H.z)):B(w.x,w.y,h/u*g)}for(let g=m-1;g>=0;g--){const T=g/m,w=p*Math.cos(T*Math.PI/2),D=_*Math.sin(T*Math.PI/2)+x;for(let U=0,W=G.length;U<W;U++){const Q=Y(G[U],pe[U],D);B(Q.x,Q.y,h+w)}for(let U=0,W=J.length;U<W;U++){const Q=J[U];k=ce[U];for(let q=0,ie=Q.length;q<ie;q++){const ne=Y(Q[q],k[q],D);M?B(ne.x,ne.y+y[u-1].y,y[u-1].x+w):B(ne.x,ne.y,h+w)}}}Se(),Pe();function Se(){const g=s.length/3;if(f){let T=0,w=te*T;for(let D=0;D<V;D++){const U=F[D];le(U[2]+w,U[1]+w,U[0]+w)}T=u+m*2,w=te*T;for(let D=0;D<V;D++){const U=F[D];le(U[0]+w,U[1]+w,U[2]+w)}}else{for(let T=0;T<V;T++){const w=F[T];le(w[2],w[1],w[0])}for(let T=0;T<V;T++){const w=F[T];le(w[0]+te*u,w[1]+te*u,w[2]+te*u)}}i.addGroup(g,s.length/3-g,0)}function Pe(){const g=s.length/3;let T=0;Le(G,T),T+=G.length;for(let w=0,D=J.length;w<D;w++){const U=J[w];Le(U,T),T+=U.length}i.addGroup(g,s.length/3-g,1)}function Le(g,T){let w=g.length;for(;--w>=0;){const D=w;let U=w-1;U<0&&(U=g.length-1);for(let W=0,Q=u+m*2;W<Q;W++){const q=te*W,ie=te*(W+1),ne=T+D+q,Ae=T+U+q,b=T+U+ie,v=T+D+ie;fe(ne,Ae,b,v)}}}function B(g,T,w){l.push(g),l.push(T),l.push(w)}function le(g,T,w){Me(g),Me(T),Me(w);const D=s.length/3,U=E.generateTopUV(i,s,D-3,D-2,D-1);Ee(U[0]),Ee(U[1]),Ee(U[2])}function fe(g,T,w,D){Me(g),Me(T),Me(D),Me(T),Me(w),Me(D);const U=s.length/3,W=E.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Ee(W[0]),Ee(W[1]),Ee(W[3]),Ee(W[1]),Ee(W[2]),Ee(W[3])}function Me(g){s.push(l[g*3+0]),s.push(l[g*3+1]),s.push(l[g*3+2])}function Ee(g){r.push(g.x),r.push(g.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return q4(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sd[s.type]().fromJSON(s)),new Rl(i,e.options)}}const X4={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ye(r,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],p=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(f,1-_),new ye(x,1-d)]:[new ye(a,1-l),new ye(u,1-h),new ye(p,1-_),new ye(m,1-d)]}};function q4(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cl extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const E=[],y=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const L=P/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(L+M,1-y),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const y=u[d][E+1],M=u[d][E],P=u[d+1][E],L=u[d+1][E+1];(d!==0||o>0)&&p.push(y,M,L),(d!==i-1||l<Math.PI)&&p.push(M,P,L)}this.setIndex(p),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pl extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j4 extends xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const no={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Y4{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const ld=new Y4;class bi{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class K4 extends Error{constructor(e,t){super(e),this.response=t}}class Ll extends bi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=no.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){E();function E(){h.read().then(({done:y,value:M})=>{if(y)d.close();else{x+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let L=0,C=u.length;L<C;L++){const H=u[L];H.onProgress&&H.onProgress(P)}d.enqueue(M),E()}})}}});return new Response(m)}else throw new K4(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{no.add(e,c);const u=Rn[e];delete Rn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $4 extends bi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=no.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Js("img");function l(){u(),no.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class cd extends bi{constructor(e){super(e)}load(e,t,i,s){const r=new Dt,o=new $4(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class zl extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Z4 extends zl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pa=new it,oh=new I,ah=new I;class J4{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q4 extends J4{constructor(){super(new Yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e5 extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Q4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t5 extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n5{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i5{constructor(e,t,i=0,s=1/0){this.ray=new ir(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Wa(e,this,i,t),i.sort(lh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wa(e[s],this,i,t);return i.sort(lh),i}}function lh(n,e){return n.distance-e.distance}function Wa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Wa(s[r],e,t,!0)}}class ch{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class s5{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ga,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const E=[];for(let y=0,M=d.length;y<M;y++){const P=d[y],L=new qr;L.curves=P.curves,E.push(L)}return E}function i(d,E){const y=E.length;let M=!1;for(let P=y-1,L=0;L<y;P=L++){let C=E[P],H=E[L],S=H.x-C.x,A=H.y-C.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(C=E[L],S=-S,H=E[P],A=-A),d.y<C.y||d.y>H.y)continue;if(d.y===C.y){if(d.x===C.x)return!0}else{const J=A*(d.x-C.x)-S*(d.y-C.y);if(J===0)return!0;if(J<0)continue;M=!M}}else{if(d.y!==C.y)continue;if(H.x<=d.x&&d.x<=C.x||C.x<=d.x&&d.x<=H.x)return!0}}return M}const s=ns.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new qr,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],_=0,x;f[_]=void 0,p[_]=[];for(let d=0,E=r.length;d<E;d++)a=r[d],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new qr,p:x},f[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let d=!1,E=0;for(let y=0,M=f.length;y<M;y++)h[y]=[];for(let y=0,M=f.length;y<M;y++){const P=p[y];for(let L=0;L<P.length;L++){const C=P[L];let H=!0;for(let S=0;S<f.length;S++)i(C.p,f[S].p)&&(y!==S&&E++,H?(H=!1,h[S].push(C)):d=!0);H&&h[y].push(C)}}E>0&&d===!1&&(p=h)}let m;for(let d=0,E=f.length;d<E;d++){l=f[d].s,c.push(l),m=p[d];for(let y=0,M=m.length;y<M;y++)l.holes.push(m[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);const uh={type:"change"},ma={type:"start"},hh={type:"end"},Fr=new ir,fh=new Xn,r5=Math.cos(70*s2.DEG2RAD);class o5 extends Si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",v),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(uh),i.update(),r=s.NONE},this.update=function(){const z=new I,he=new vi().setFromUnitVectors(e.up,new I(0,1,0)),Re=he.clone().invert(),ge=new I,ve=new vi,De=new I,je=2*Math.PI;return function(Ce=null){const ee=i.object.position;z.copy(ee).sub(i.target),z.applyQuaternion(he),a.setFromVector3(z),i.autoRotate&&r===s.NONE&&J(S(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let _e=i.minAzimuthAngle,be=i.maxAzimuthAngle;isFinite(_e)&&isFinite(be)&&(_e<-Math.PI?_e+=je:_e>Math.PI&&(_e-=je),be<-Math.PI?be+=je:be>Math.PI&&(be-=je),_e<=be?a.theta=Math.max(_e,Math.min(be,a.theta)):a.theta=a.theta>(_e+be)/2?Math.max(_e,a.theta):Math.min(be,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&L||i.object.isOrthographicCamera?a.radius=pe(a.radius):a.radius=pe(a.radius*c),z.setFromSpherical(a),z.applyQuaternion(Re),ee.copy(i.target).add(z),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let We=!1;if(i.zoomToCursor&&L){let $e=null;if(i.object.isPerspectiveCamera){const Je=z.length();$e=pe(Je*c);const Ot=Je-$e;i.object.position.addScaledVector(M,Ot),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Je=new I(P.x,P.y,0);Je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0;const Ot=new I(P.x,P.y,0);Ot.unproject(i.object),i.object.position.sub(Ot).add(Je),i.object.updateMatrixWorld(),$e=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($e).add(i.object.position):(Fr.origin.copy(i.object.position),Fr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fr.direction))<r5?e.lookAt(i.target):(fh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fr.intersectPlane(fh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0);return c=1,L=!1,We||ge.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||De.distanceToSquared(i.target)>0?(i.dispatchEvent(uh),ge.copy(i.object.position),ve.copy(i.object.quaternion),De.copy(i.target),We=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ae),i.domElement.removeEventListener("pointerdown",Q),i.domElement.removeEventListener("pointercancel",ie),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",ie),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new ch,l=new ch;let c=1;const u=new I,h=new ye,f=new ye,p=new ye,_=new ye,x=new ye,m=new ye,d=new ye,E=new ye,y=new ye,M=new I,P=new ye;let L=!1;const C=[],H={};function S(z){return z!==null?2*Math.PI/60*i.autoRotateSpeed*z:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function J(z){l.theta-=z}function de(z){l.phi-=z}const F=function(){const z=new I;return function(Re,ge){z.setFromMatrixColumn(ge,0),z.multiplyScalar(-Re),u.add(z)}}(),G=function(){const z=new I;return function(Re,ge){i.screenSpacePanning===!0?z.setFromMatrixColumn(ge,1):(z.setFromMatrixColumn(ge,0),z.crossVectors(i.object.up,z)),z.multiplyScalar(Re),u.add(z)}}(),Y=function(){const z=new I;return function(Re,ge){const ve=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;z.copy(De).sub(i.target);let je=z.length();je*=Math.tan(i.object.fov/2*Math.PI/180),F(2*Re*je/ve.clientHeight,i.object.matrix),G(2*ge*je/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(Re*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),G(ge*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(z){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(z){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(z){if(!i.zoomToCursor)return;L=!0;const he=i.domElement.getBoundingClientRect(),Re=z.clientX-he.left,ge=z.clientY-he.top,ve=he.width,De=he.height;P.x=Re/ve*2-1,P.y=-(ge/De)*2+1,M.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function pe(z){return Math.max(i.minDistance,Math.min(i.maxDistance,z))}function ce(z){h.set(z.clientX,z.clientY)}function k(z){$(z),d.set(z.clientX,z.clientY)}function j(z){_.set(z.clientX,z.clientY)}function xe(z){f.set(z.clientX,z.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;J(2*Math.PI*p.x/he.clientHeight),de(2*Math.PI*p.y/he.clientHeight),h.copy(f),i.update()}function Se(z){E.set(z.clientX,z.clientY),y.subVectors(E,d),y.y>0?te(A()):y.y<0&&V(A()),d.copy(E),i.update()}function Pe(z){x.set(z.clientX,z.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(x),i.update()}function Le(z){$(z),z.deltaY<0?V(A()):z.deltaY>0&&te(A()),i.update()}function B(z){let he=!1;switch(z.code){case i.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?de(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?de(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),he=!0;break}he&&(z.preventDefault(),i.update())}function le(){if(C.length===1)h.set(C[0].pageX,C[0].pageY);else{const z=.5*(C[0].pageX+C[1].pageX),he=.5*(C[0].pageY+C[1].pageY);h.set(z,he)}}function fe(){if(C.length===1)_.set(C[0].pageX,C[0].pageY);else{const z=.5*(C[0].pageX+C[1].pageX),he=.5*(C[0].pageY+C[1].pageY);_.set(z,he)}}function Me(){const z=C[0].pageX-C[1].pageX,he=C[0].pageY-C[1].pageY,Re=Math.sqrt(z*z+he*he);d.set(0,Re)}function Ee(){i.enableZoom&&Me(),i.enablePan&&fe()}function g(){i.enableZoom&&Me(),i.enableRotate&&le()}function T(z){if(C.length==1)f.set(z.pageX,z.pageY);else{const Re=Z(z),ge=.5*(z.pageX+Re.x),ve=.5*(z.pageY+Re.y);f.set(ge,ve)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;J(2*Math.PI*p.x/he.clientHeight),de(2*Math.PI*p.y/he.clientHeight),h.copy(f)}function w(z){if(C.length===1)x.set(z.pageX,z.pageY);else{const he=Z(z),Re=.5*(z.pageX+he.x),ge=.5*(z.pageY+he.y);x.set(Re,ge)}m.subVectors(x,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(x)}function D(z){const he=Z(z),Re=z.pageX-he.x,ge=z.pageY-he.y,ve=Math.sqrt(Re*Re+ge*ge);E.set(0,ve),y.set(0,Math.pow(E.y/d.y,i.zoomSpeed)),te(y.y),d.copy(E)}function U(z){i.enableZoom&&D(z),i.enablePan&&w(z)}function W(z){i.enableZoom&&D(z),i.enableRotate&&T(z)}function Q(z){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(z.pointerId),i.domElement.addEventListener("pointermove",q),i.domElement.addEventListener("pointerup",ie)),ue(z),z.pointerType==="touch"?O(z):ne(z))}function q(z){i.enabled!==!1&&(z.pointerType==="touch"?se(z):Ae(z))}function ie(z){Te(z),C.length===0&&(i.domElement.releasePointerCapture(z.pointerId),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",ie)),i.dispatchEvent(hh),r=s.NONE}function ne(z){let he;switch(z.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Ai.DOLLY:if(i.enableZoom===!1)return;k(z),r=s.DOLLY;break;case Ai.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enablePan===!1)return;j(z),r=s.PAN}else{if(i.enableRotate===!1)return;ce(z),r=s.ROTATE}break;case Ai.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enableRotate===!1)return;ce(z),r=s.ROTATE}else{if(i.enablePan===!1)return;j(z),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ma)}function Ae(z){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;xe(z);break;case s.DOLLY:if(i.enableZoom===!1)return;Se(z);break;case s.PAN:if(i.enablePan===!1)return;Pe(z);break}}function b(z){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(z.preventDefault(),i.dispatchEvent(ma),Le(z),i.dispatchEvent(hh))}function v(z){i.enabled===!1||i.enablePan===!1||B(z)}function O(z){switch(me(z),C.length){case 1:switch(i.touches.ONE){case wi.ROTATE:if(i.enableRotate===!1)return;le(),r=s.TOUCH_ROTATE;break;case wi.PAN:if(i.enablePan===!1)return;fe(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case wi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(),r=s.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;g(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ma)}function se(z){switch(me(z),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;T(z),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;w(z),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(z),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;W(z),i.update();break;default:r=s.NONE}}function ae(z){i.enabled!==!1&&z.preventDefault()}function ue(z){C.push(z)}function Te(z){delete H[z.pointerId];for(let he=0;he<C.length;he++)if(C[he].pointerId==z.pointerId){C.splice(he,1);return}}function me(z){let he=H[z.pointerId];he===void 0&&(he=new ye,H[z.pointerId]=he),he.set(z.pageX,z.pageY)}function Z(z){const he=z.pointerId===C[0].pointerId?C[1]:C[0];return H[he.pointerId]}i.domElement.addEventListener("contextmenu",ae),i.domElement.addEventListener("pointerdown",Q),i.domElement.addEventListener("pointercancel",ie),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}class a5 extends bi{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Ll(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new l5(e)}}class l5{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=c5(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function c5(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=r;else{const h=u5(u,s,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function u5(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new s5;let a,l,c,u,h,f,p,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=x.length;m<d;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,h=x[m++]*e+t,f=x[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,h=x[m++]*e+t,f=x[m++]*e+i,p=x[m++]*e+t,_=x[m++]*e+i,o.bezierCurveTo(h,f,p,_,c,u);break}}return{offsetX:r.ha*e,path:o}}const h5=/^[og]\s*(.+)?/,f5=/^mtllib /,d5=/^usemtl /,p5=/^usemap /,dh=/\s+/,ph=new I,ga=new I,mh=new I,gh=new I,kt=new I,Br=new Ve;function m5(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;ph.fromArray(s,e),ga.fromArray(s,t),mh.fromArray(s,i),kt.subVectors(mh,ga),gh.subVectors(ph,ga),kt.cross(gh),kt.normalize(),r.push(kt.x,kt.y,kt.z),r.push(kt.x,kt.y,kt.z),r.push(kt.x,kt.y,kt.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(i,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class g5 extends bi{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new Ll(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new m5;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(dh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Br.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Br.r,Br.g,Br.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(dh),p=[];for(let x=0,m=f.length;x<m;x++){const d=f[x];if(d.length>0){const E=d.split("/");p.push(E)}}const _=p[0];for(let x=1,m=p.length-1;x<m;x++){const d=p[x],E=p[x+1];t.addFace(_[0],d[0],E[0],_[1],d[1],E[1],_[2],d[2],E[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,x=h.length;_<x;_++){const m=h[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=h5.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(d5.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(f5.test(c))t.materialLibraries.push(c.substring(7).trim());else if(p5.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Rs;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new Nt;x.setAttribute("position",new ut(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new ut(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new ut(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new ut(u.uvs,2));const m=[];for(let E=0,y=h.length;E<y;E++){const M=h[E],P=M.name+"_"+M.smooth+"_"+_;let L=t.materials[P];if(this.materials!==null){if(L=this.materials.create(M.name),f&&L&&!(L instanceof Fs)){const C=new Fs;xn.prototype.copy.call(C,L),C.color.copy(L.color),L=C}else if(p&&L&&!(L instanceof Cs)){const C=new Cs({size:10,sizeAttenuation:!1});xn.prototype.copy.call(C,L),C.color.copy(L.color),C.map=L.map,L=C}}L===void 0&&(f?L=new Fs:p?L=new Cs({size:1,sizeAttenuation:!1}):L=new Pl,L.name=M.name,L.flatShading=!M.smooth,L.vertexColors=_,t.materials[P]=L),m.push(L)}let d;if(m.length>1){for(let E=0,y=h.length;E<y;E++){const M=h[E];x.addGroup(M.groupStart,M.groupCount,E)}f?d=new Qu(x,m):p?d=new ua(x,m):d=new zt(x,m)}else f?d=new Qu(x,m[0]):p?d=new ua(x,m[0]):d=new zt(x,m[0]);d.name=c.name,r.add(d)}else if(t.vertices.length>0){const a=new Cs({size:1,sizeAttenuation:!1}),l=new Nt;l.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ut(t.colors,3)),a.vertexColors=!0);const c=new ua(l,a);r.add(c)}return r}}class _5 extends bi{constructor(e){super(e)}load(e,t,i,s){const r=this,o=this.path===""?n5.extractUrlBase(e):this.path,a=new Ll(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let s={};const r=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let f=u>=0?c.substring(u+1):"";if(f=f.trim(),h==="newmtl")s={name:f},o[f]=s;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const p=f.split(r,3);s[h]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else s[h]=f}const a=new x5(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class x5{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:In,this.wrap=this.options.wrap!==void 0?this.options.wrap:Qr}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const s=e[i],r={};t[i]=r;for(const o in s){let a=!0,l=s[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(r[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(s[a])return;const c=t.getTextureParams(l,s),u=t.loadTexture(r(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=et),s[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":s.color=new Ve().fromArray(l).convertSRGBToLinear();break;case"ks":s.specular=new Ve().fromArray(l).convertSRGBToLinear();break;case"ke":s.emissive=new Ve().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[e]=new Pl(s),this.materials[e]}getTextureParams(e,t){const i={scale:new ye(1,1),offset:new ye(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,r){const o=this.manager!==void 0?this.manager:ld;let a=o.getHandler(e);a===null&&(a=new cd(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,s,r);return t!==void 0&&(l.mapping=t),l}}class v5 extends Rl{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const y5=[{id:1,name:"手太阴肺经",shortName:"肺经",free:!0,message:1,acupoints:[{id:1,name:"中府",position:{x:4.859493988481198,y:23.892296034868934,z:1.0573650990247927},x:12.25303891842968,y:130.26449370389457,z:4.655280429983179},{id:2,name:"云门",position:{x:4.810125427219926,y:25.630490177697226,z:.15361402773184452},x:12.154301795907138,y:133.74088198955116,z:2.847778287397283},{id:3,name:"天府",position:{x:9.840229861271045,y:18.84990250975823,z:-.4090892439622529},x:22.214510664009374,y:120.17970665367316,z:1.722371744009088},{id:4,name:"侠白",position:{x:9.933019495629594,y:17.983004393904785,z:-.3393341490980717},x:22.400089932726473,y:118.44591042196627,z:1.8618819337374504},{id:5,name:"尺泽",position:{x:10.616735158793983,y:13.332053438729147,z:-.9307294146050964},x:23.76752125905525,y:109.144008511615,z:.679091402723401},{id:6,name:"孔最",position:{x:11.468909725874935,y:8.507902207964285,z:-.5604303015214214},x:25.471870393217156,y:99.49570605008527,z:1.419689628890751},{id:7,name:"列缺",position:{x:12.72976311945672,y:4.1899200630811535,z:-1.3525859536210234},x:27.993577180380726,y:90.85974176031901,z:-.16462167530845306},{id:8,name:"经渠",position:{x:12.243847813222388,y:3.068951547913329,z:-.6778732546897857},x:27.02174656791206,y:88.61780472998336,z:1.1848037225540224},{id:9,name:"太渊",position:{x:12.484780156323325,y:1.9515829132499363,z:-.4612266970139416},x:27.503611254113935,y:86.38306746065658,z:1.6180968379057106},{id:10,name:"鱼际",position:{x:13.257140478459302,y:.3225095474002657,z:.2007554289723288},x:29.04833189838589,y:83.12492072895724,z:2.9420610898782513},{id:11,name:"少商",position:{x:14.910574134584973,y:-2.438408688903671,z:.8361342127970772},x:32.35519921063723,y:77.60308425634936,z:4.212818657527748}]},{id:2,name:"手阳明大肠经",free:!0,shortName:"大肠",message:1,acupoints:[{id:12,name:"商阳",position:{x:13.840600741452263,y:-5.5399481878504275,z:-1.4239850576594135},x:30.215252424371812,y:71.40000525845585,z:-.3074198833852333},{id:13,name:"二间",position:{x:14.049639033966173,y:-2.1852769256541222,z:-2.3081641580927004},x:30.63332900939963,y:78.10934778284846,z:-2.075778084251807},{id:14,name:"三间",position:{x:14.094590012900412,y:-.7370809719375657,z:-2.2374448775928024},x:30.72323096726811,y:81.00573969028157,z:-1.934339523252011},{id:15,name:"合谷",position:{x:13.73371260741311,y:1.0673231900468778,z:-1.959506679560245},x:30.001476156293506,y:84.61454801425046,z:-1.3784631271868961},{id:16,name:"阳溪",position:{x:13.078064212553073,y:2.367257859554556,z:-1.7466023639053763},x:28.69017936657343,y:87.21441735326582,z:-.9526544958771588},{id:17,name:"偏历",position:{x:12.708374593128724,y:5.492793756125671,z:-2.080066661162742},x:27.950800127724733,y:93.46548914640805,z:-1.61958309039189},{id:18,name:"温溜",position:{x:12.65180428408867,y:7.1316982723386175,z:-2.2132268904136003},x:27.837659509644624,y:96.74329817883394,z:-1.885903548893607},{id:19,name:"下廉",position:{x:12.60353167548466,y:9.855819495163281,z:-2.3437646575068634},x:27.741114292436606,y:102.19154062448327,z:-2.146979083080133},{id:20,name:"上廉",position:{x:12.4995818772136,y:10.87193519918867,z:-2.409240772874001},x:27.533214695894486,y:104.22377203253404,z:-2.277931313814408},{id:21,name:"手三里",position:{x:12.350026711305631,y:11.751504807518586,z:-2.54301402326983},x:27.234104364078547,y:105.98291124919388,z:-2.545477814606066},{id:22,name:"曲池",position:{x:11.901587738896154,y:13.309444789511836,z:-2.538135114553603},x:26.337226419259594,y:109.09879121318038,z:-2.5357199971736124},{id:23,name:"肘髎",position:{x:11.554156455350636,y:14.39805776457559,z:-3.424621484651202},x:25.642363852168558,y:111.27601716330788,z:-4.30869273736881},{id:24,name:"手五里",position:{x:11.602101751721094,y:16.296975689868013,z:-2.393665529242522},x:25.738254444909472,y:115.07385301389273,z:-2.2467808265514506},{id:25,name:"臂臑",position:{x:10.959974329247189,y:20.178963413048812,z:-3.203687231247023},x:24.453999599961662,y:122.83782846025433,z:-3.866824230560452},{id:26,name:"肩髃",position:{x:9.356871804432302,y:25.053990005208988,z:-2.5731222995566263},x:21.24779455033189,y:132.58788164457468,z:-2.605694367179659},{id:27,name:"巨骨",position:{x:6.737411405045378,y:26.402913381336376,z:-4.104508972446716},x:16.008873751558042,y:135.28572839682946,z:-5.668467712959838},{id:28,name:"天鼎",position:{x:1.1663909254444391,y:27.250944960439085,z:.5481324754613723},x:4.866832792356163,y:136.98179155503487,z:3.6368151828563384},{id:29,name:"扶突",position:{x:1.0575842016251293,y:28.94327869905557,z:.6377265109880028},x:4.649219344717544,y:140.36645903226784,z:3.8160032539095994},{id:30,name:"口禾髎",position:{x:-.8338912063451573,y:33.201904396107025,z:4.431580088641219},x:.8662685287769705,y:148.88371042637075,z:11.403710409216032},{id:31,name:"迎香",position:{x:-.15434634155053573,y:34.28544261552517,z:3.7434849045564604},x:2.2253582583662137,y:151.05078686520704,z:10.027520041046515}]},{id:3,name:"足阳明胃经",shortName:"胃经",message:1,acupoints:[{id:32,name:"承泣",position:{x:.35959642302889705,y:34.906709888324826,z:3.369185912091808},x:3.2532437875250793,y:152.29332141080636,z:9.27892205611721},{id:33,name:"四白",position:{x:.33875047730981933,y:34.2977816047794,z:3.5258621485949746},x:3.211551896086924,y:151.0754648437155,z:9.592274529123543},{id:34,name:"巨髎",position:{x:.31912940295000425,y:33.50501013494625,z:3.592475040753463},x:3.1723097473672937,y:149.4899219040492,z:9.72550031344052},{id:35,name:"地仓",position:{x:.2174389736480471,y:32.60627397705841,z:3.772227652864835},x:2.9689288887633793,y:147.69244958827352,z:10.085005537663264},{id:36,name:"大迎",position:{x:1.0402586935799363,y:31.47533892600542,z:2.5002239206089953},x:4.614568328627158,y:145.43057948616755,z:7.540998073151584},{id:37,name:"颊车",position:{x:2.0747731761207575,y:32.62474273162462,z:.5880537537137194},x:6.6835972937088,y:147.72938709740595,z:3.7166577393610325},{id:38,name:"下关",position:{x:2.1322964986036794,y:33.992543635776414,z:1.0557247530433642},x:6.798643938674644,y:150.46498890570953,z:4.651999738020322},{id:39,name:"头维",position:{x:1.7058766985856053,y:39.30730698436153,z:.14488342414136213},x:5.945804338638496,y:161.09451560287977,z:2.830317080216318},{id:40,name:"人迎",position:{x:-.1929313641698691,y:29.19669542985676,z:1.2899356149673622},x:2.148188213127547,y:140.87329249387022,z:5.120421461868318},{id:41,name:"水突",position:{x:-.2264091545007325,y:27.249593964236496,z:1.155315456936151},x:2.08123263246582,y:136.9790895626297,z:4.851181145805896},{id:42,name:"气舍",position:{x:-.15676603461935557,y:25.710458874986458,z:1.4066918867199405},x:2.220518872228574,y:133.90081938412962,z:5.353934005373475},{id:43,name:"缺盆",position:{x:2.512370966092103,y:26.101138797193215,z:.42211518691651406},x:7.558792873651491,y:134.68217922854313,z:3.384780605766622},{id:44,name:"气户",position:{x:2.685167571546277,y:24.74734776448649,z:1.4650210044290262},x:7.904386084559839,y:131.9745971631297,z:5.470592240791646},{id:45,name:"库房",position:{x:2.797545356553597,y:23.3512446171527,z:2.2431917898883498},x:8.129141654574479,y:129.1823908684621,z:7.026933811710293},{id:46,name:"屋翳",position:{x:2.96629301484003,y:21.776732905334285,z:3.0701476379313846},x:8.466636971147345,y:126.03336744482527,z:8.680845507796363},{id:47,name:"膺窗",position:{x:2.946317814051506,y:20.17211782964897,z:3.6297131262505573},x:8.426686569570297,y:122.82413729345464,z:9.799976484434708},{id:48,name:"乳中",position:{x:3.032782198225986,y:18.748224265358076,z:3.761758056323501},x:8.599615337919257,y:119.97635016487285,z:10.064066344580596},{id:49,name:"乳根",position:{x:2.9940357293958666,y:16.897710548714684,z:3.3506529049214535},x:8.522122400259018,y:116.27532273158607,z:9.2418560417765},{id:50,name:"不容",position:{x:1.4208018748041091,y:13.871161940908905,z:3.3833317059352694},x:5.375654691075503,y:110.22222551597451,z:9.307213643804133},{id:51,name:"承满",position:{x:1.3397713257561925,y:12.812940428771874,z:3.2307272565124023},x:5.21359359297967,y:108.10578249170045,z:9.002004744958398},{id:52,name:"梁门",position:{x:1.3449262315233206,y:12.059465995153943,z:3.0742794828332833},x:5.223903404513926,y:106.59883362446459,z:8.68910919760016},{id:53,name:"关门",position:{x:1.3196417467942219,y:11.221253206937874,z:2.9686822687343977},x:5.173334435055729,y:104.92240804803245,z:8.477914769402389},{id:54,name:"太乙",position:{x:1.2927181864732091,y:10.236686071988672,z:2.855215510039031},x:5.119487314413703,y:102.95327377813405,z:8.250981252011655},{id:55,name:"滑肉门",position:{x:1.2988998741539994,y:9.275927131978293,z:2.696747261073682},x:5.131850689775284,y:101.03175589811329,z:7.934044754080958},{id:56,name:"天枢",position:{x:1.277839608626504,y:8.41703773956047,z:2.606214447436564},x:5.089730158720293,y:99.31397711327764,z:7.752979126806721},{id:57,name:"外陵",position:{x:1.2714854736518149,y:7.197607029597606,z:2.5675559155368006},x:5.077021888770915,y:96.87511569335192,z:7.675662063007195},{id:58,name:"大巨",position:{x:1.2919311461814118,y:6.083355193080834,z:2.4580581785379536},x:5.117913233830109,y:94.64661202031837,z:7.456666589009501},{id:59,name:"水道",position:{x:1.2653592196670687,y:5.045027275051986,z:2.3433990097174373},x:5.0647693808014225,y:92.56995618426068,z:7.227348251368468},{id:60,name:"归来",position:{x:1.1413754268807104,y:3.8327224635512067,z:2.20771811631316},x:4.816801795228706,y:90.14534656125912,z:6.955986464559913},{id:61,name:"气冲",position:{x:1.2187850911787308,y:2.5794218303325067,z:1.9560607937808072},x:4.971621123824747,y:87.63874529482172,z:6.452671819495208},{id:62,name:"髀关",position:{x:4.888266349801537,y:-3.049343364673213,z:1.9043037554644329},x:12.310583641070359,y:76.38121490481028,z:6.3491577428624595},{id:63,name:"伏兔",position:{x:4.503797589594257,y:-9.222993028441891,z:1.8265789207523682},x:11.541646120655798,y:64.03391557727292,z:6.19370807343833},{id:64,name:"阴市",position:{x:4.15651379225957,y:-11.845015842867703,z:1.4729629769135357},x:10.847078525986426,y:58.7898699484213,z:5.486476185760665},{id:65,name:"梁丘",position:{x:3.9114737872489407,y:-13.312435046019122,z:1.21113145673597},x:10.356998515965167,y:55.85503154211846,z:4.9628131454055335},{id:66,name:"犊鼻",position:{x:3.8284175299428362,y:-18.710381308950947,z:.6748445084424333},x:10.190886001352958,y:45.05913901625481,z:3.8902392488184603},{id:67,name:"足三里",position:{x:3.53793736653439,y:-21.61014860966716,z:.0050613820269802545},x:9.609925674536065,y:39.259604414822384,z:2.5506729959875543},{id:68,name:"上巨虚",position:{x:3.5610921668302353,y:-25.213489612311278,z:-.23334376313475502},x:9.656235275127756,y:32.05292240953415,z:2.0738627056640837},{id:69,name:"条口",position:{x:3.5058515553135514,y:-27.351696757196144,z:-.3171119490131389},x:9.545754052094388,y:27.776508119764415,z:1.906326333907316},{id:70,name:"下巨虚",position:{x:3.490412083894615,y:-28.34574611661774,z:-.4135839719034209},x:9.514875109256515,y:25.788409400921225,z:1.713382288126752},{id:71,name:"丰隆",position:{x:4.223648167455373,y:-27.59741864787967,z:-1.1543696637146112},x:10.981347276378031,y:27.285064338397362,z:.23181090450437125},{id:72,name:"解溪",position:{x:3.0132248097120353,y:-36.12531727032558,z:-.05426992952074272},x:8.560500560891356,y:10.229267093505541,z:2.4320103728921083},{id:73,name:"冲阳",position:{x:3.339160790182362,y:-37.28338026065936,z:1.146581183073998},x:9.212372521832009,y:7.913141112837991,z:4.83371259808159},{id:74,name:"陷谷",position:{x:3.8277227636416455,y:-38.32569473256743,z:2.485427171099765},x:10.189496468750576,y:5.828512169021849,z:7.511404574133124},{id:75,name:"内庭",position:{x:4.238182562349465,y:-39.349949829698176,z:4.290313548327397},x:11.010416066166215,y:3.780001974760353,z:11.121177328588388},{id:76,name:"厉兑",position:{x:4.823694623267457,y:-40.07314824431025,z:6.251409833069495},x:12.181440188002199,y:2.333605145536211,z:15.043369898072584}]},{id:4,name:"足太阴脾经",shortName:"脾经",message:1,acupoints:[{id:77,name:"隐白",position:{x:2.2447689692553325,y:-40.49347074908621,z:7.614625359244712},x:7.02358887997795,y:1.4929601359842906,z:17.76980095042302},{id:78,name:"大都",position:{x:1.8922999841511796,y:-40.32267395637745,z:6.128489988850582},x:6.318650909769644,y:1.8345537214018037,z:14.797530209634758},{id:79,name:"太白",position:{x:1.4584195189186318,y:-39.939894813197334,z:4.43030400845219},x:5.450889979304549,y:2.6001120077620357,z:11.401158248837973},{id:80,name:"公孙",position:{x:1.1896662479545341,y:-39.79509307089567,z:2.957037363017399},x:4.913383437376353,y:2.8897154923653687,z:8.454624957968392},{id:81,name:"商丘",position:{x:1.4027005896320475,y:-36.43045894853578,z:-.46036374664805635},x:5.33945212073138,y:9.618983737085145,z:1.619822738637481},{id:82,name:"三阴交",position:{x:.897922679058766,y:-31.128612102499318,z:-1.128207202903468},x:4.329896299584817,y:20.222677429158068,z:.2841358261266578},{id:83,name:"漏谷",position:{x:.3762548760737161,y:-26.932140628853183,z:-1.3034567839561788},x:3.2865606936147174,y:28.615620376450337,z:-.06636333597876387},{id:84,name:"地机",position:{x:.24706105382111332,y:-22.88980491977653,z:-.9136560570957215},x:3.028173049109512,y:36.70029179460364,z:.7132381177421507},{id:85,name:"阴陵泉",position:{x:.4302268852711393,y:-20.257330724470936,z:-.7035282255584505},x:3.3945047120095637,y:41.96524018521483,z:1.1334937808166927},{id:86,name:"血海",position:{x:1.4851464777069303,y:-13.089328668448779,z:1.7426070275093508},x:5.504343896881146,y:56.301244297259146,z:6.025764286952295},{id:87,name:"箕门",position:{x:1.8092924469740357,y:-6.931385981724723,z:2.0229809982605644},x:6.1526358354153565,y:68.61712967070726,z:6.586512228454723},{id:88,name:"冲门",position:{x:3.2163539826041756,y:2.534806527368751,z:1.4937248475108618},x:8.966758906675636,y:87.5495146888942,z:5.527999926955317},{id:89,name:"府舍",position:{x:3.3393734083703954,y:3.630295095456475,z:1.447172163632402},x:9.212797758208076,y:89.74049182506965,z:5.434894559198398},{id:90,name:"腹结",position:{x:3.1408617765716365,y:7.35400705137944,z:1.684442445684084},x:8.815774494610558,y:97.18791573691558,z:5.909435123301762},{id:91,name:"大横",position:{x:3.084958458889327,y:8.625623599413686,z:1.6554776769464468},x:8.703967859245939,y:99.73114883298408,z:5.851505585826487},{id:92,name:"腹哀",position:{x:3.028782123753741,y:11.53546063315708,z:2.265652650271605},x:8.591615188974767,y:105.55082290047086,z:7.071855532476803},{id:93,name:"食窦",position:{x:4.785460479279955,y:17.474008449936285,z:2.386130337887213},x:12.104971900027195,y:117.42791853402927,z:7.31281090770802},{id:94,name:"天溪",position:{x:5.083399050847639,y:18.640691937291507,z:2.368731787906956},x:12.700849043162563,y:119.76128550873972,z:7.278013807747506},{id:95,name:"胸乡",position:{x:5.285615090965322,y:20.013130482251228,z:2.2124298819408175},x:13.10528112339793,y:122.50616259865916,z:6.965409995815229},{id:96,name:"周荣",position:{x:5.25652207655763,y:21.724055872111236,z:1.8005962689738197},x:13.047095094582545,y:125.92801337837918,z:6.141742769881233},{id:97,name:"大包",position:{x:5.62796994406915,y:15.2267752123239,z:.843231347791324},x:13.789990829605586,y:112.9334520588045,z:4.227012927516242}]},{id:5,name:"手少阴心经",shortName:"心经",message:1,acupoints:[{id:98,name:"极泉",position:{x:6.033384512107624,y:19.582098973879965,z:-.7001219800320087},x:14.600819965682533,y:121.64409958191663,z:1.1403062718695764},{id:99,name:"青灵",position:{x:7.550595081154707,y:15.370850965857514,z:-1.8649825752533928},x:17.6352411037767,y:113.22160356587173,z:-1.189414918573192},{id:100,name:"少海",position:{x:8.276770006432166,y:13.019134840963645,z:-1.545592561436976},x:19.087590954331617,y:108.518171316084,z:-.5506348909403584},{id:101,name:"灵道",position:{x:10.18686358165735,y:3.7204187291322413,z:-.8457150144761698},x:22.907778104781986,y:89.92073909242119,z:.8491202029812541},{id:102,name:"通里",position:{x:10.32049178282988,y:2.9234000470964645,z:-.8507686479014893},x:23.175034507127044,y:88.32670172834963,z:.8390129361306151},{id:103,name:"阴郄",position:{x:10.531978439988503,y:2.212600228891702,z:-.7853254648742904},x:23.59800782144429,y:86.90510209194011,z:.9698993021850129},{id:104,name:"神门",position:{x:10.66008837064053,y:1.4596760685035761,z:-.7552389227092249},x:23.854227682748345,y:85.39925377116386,z:1.030072386515144},{id:105,name:"少府",position:{x:10.723251867914952,y:-1.0678761131776398,z:-1.1641465930269277},x:23.98055467729719,y:80.34414940780142,z:.21225704587973837},{id:106,name:"少冲",position:{x:10.33031642171879,y:-4.76441584227026,z:-1.2147310101984914},x:23.194683784904864,y:72.95106994961618,z:.11108821153661097}]},{id:6,name:"手太阳小肠经",shortName:"小肠",message:1,acupoints:[{id:107,name:"少泽",position:{x:-15.18062691134232,y:-4.103870502442135,z:-2.6825264871608567},x:-27.827202881217353,y:74.27216062927243,z:-2.8245027423881197},{id:108,name:"前谷",position:{x:-15.573260591215995,y:-1.4135161060333346,z:-2.6264583309546907},x:-28.612470240964704,y:79.65286942209003,z:-2.7123664299757877},{id:109,name:"后溪",position:{x:-15.525983694367003,y:.13127529239005042,z:-2.9783789987652796},x:-28.51791644726672,y:82.7424522189368,z:-3.4162077655969654},{id:110,name:"腕骨",position:{x:-15.2978317904724,y:1.6338709759088204,z:-3.228197420621079},x:-28.061612639477516,y:85.74764358597434,z:-3.9158446093085644},{id:111,name:"阳谷",position:{x:-14.944064923505799,y:3.0515350647272186,z:-3.121697230598766},x:-27.354078905544313,y:88.58297176361114,z:-3.7028442292639383},{id:112,name:"养老",position:{x:-15.008879702536646,y:3.803792830923257,z:-2.8114764660245974},x:-27.483708463606007,y:90.08748729600322,z:-3.082402700115601},{id:113,name:"支正",position:{x:-13.544327598592304,y:8.142639637305273,z:-5.24038073658992},x:-24.554604255717322,y:98.76518090876725,z:-7.940211241246246},{id:114,name:"小海",position:{x:-12.543321804565375,y:12.887434058833875,z:-5.814540908030473},x:-22.552592667663465,y:108.25476975182445,z:-9.088531584127352},{id:115,name:"肩贞",position:{x:-8.532856428690426,y:21.025328901703354,z:-6.019761742585786},x:-14.531661915913567,y:124.53055943756341,z:-9.498973253237978},{id:116,name:"臑俞",position:{x:-8.840487824487543,y:23.363894181930448,z:-6.133320041376614},x:-15.1469247075078,y:129.2076899980176,z:-9.726089850819633},{id:117,name:"天宗",position:{x:-6.433496138700878,y:21.85957107787054,z:-6.373245237451734},x:-10.332941335934471,y:126.19904378989779,z:-10.205940242969874},{id:118,name:"秉风",position:{x:-6.898657995316935,y:24.352871926327964,z:-5.9973212871249615},x:-11.263265049166584,y:131.18564548681263,z:-9.45409234231633},{id:119,name:"曲垣",position:{x:-4.9909753803147225,y:24.736519116475108,z:-6.204234967866228},x:-7.44789981916216,y:131.95293986710692,z:-9.867919703798862},{id:120,name:"肩外俞",position:{x:-4.493814390776779,y:26.237124663698737,z:-5.754248100913415},x:-6.4535778400862736,y:134.95415096155418,z:-8.967945969893236},{id:121,name:"肩中俞",position:{x:-3.8496864426218096,y:27.554938667234197,z:-4.881984115548441},x:-5.165321943776334,y:137.5897789686251,z:-7.2234179991632885},{id:122,name:"天窗",position:{x:-4.0619947923587745,y:29.963262649803568,z:-.33457472050325876},x:-5.589938643250264,y:142.40642693376384,z:1.8714007909270762},{id:123,name:"天容",position:{x:-4.120136658543984,y:31.273614109557172,z:.3749882595610998},x:-5.706222375620683,y:145.02712985327105,z:3.2905267510557934},{id:124,name:"颧髎",position:{x:-4.365641871292603,y:34.14869804742811,z:2.0639464865997432},x:-6.19723280111792,y:150.77729772901293,z:6.66844320513308},{id:125,name:"听宫",position:{x:-4.913354764017569,y:34.834233883558426,z:.27568508219760446},x:-7.292658586567853,y:152.14836940127356,z:3.0919203963288027}]},{id:7,name:"足太阳膀胱经",shortName:"膀胱",message:1,acupoints:[{id:126,name:"睛明",position:{x:-.6356525460837625,y:35.899991171602025,z:3.5113638546339203},x:1.26274584929976,y:154.27988397736075,z:9.563277941201434},{id:127,name:"攒竹",position:{x:-.5952077269623048,y:36.66748168323622,z:3.816227482352147},x:1.3436354875426755,y:155.81486500062914,z:10.173005196637888},{id:128,name:"眉冲",position:{x:-.6564666937200556,y:40.065127043651415,z:2.479470113717543},x:1.221117554027174,y:162.61015572145953,z:7.49949045936868},{id:129,name:"曲差",position:{x:-.059589644476250925,y:40.14116097481367,z:2.0405818531365334},x:2.4148716525147833,y:162.76222358378405,z:6.6217139382066605},{id:130,name:"五处",position:{x:-.05860981581339786,y:40.60717504055805,z:1.1853044040097132},x:2.4168313098404894,y:163.6942517152728,z:4.91115903995302},{id:131,name:"承光",position:{x:-.04642737099425176,y:40.88431875255972,z:-.0002691435502910622},x:2.4411961994787816,y:164.24853913927615,z:2.5400119448330116},{id:132,name:"通天",position:{x:-.058156756884162775,y:40.771358302393296,z:-2.194133185673241},x:2.4177374276989596,y:164.0226182389433,z:-1.8477161394128885},{id:133,name:"络却",position:{x:-.11869222881020391,y:40.12054347882844,z:-3.6841777631587327},x:2.2966664838468773,y:162.72098859181358,z:-4.827805294383872},{id:134,name:"玉枕",position:{x:-.15247572453624514,y:34.988782288192255,z:-4.961391152813732},x:2.229099492394795,y:152.4574662105412,z:-7.382232073693871},{id:135,name:"天柱",position:{x:.019547109627547243,y:32.02777496966745,z:-3.4619758169976365},x:2.5731451607223796,y:146.5354515734916,z:-4.383401402061679},{id:136,name:"大杼",position:{x:.12838997461644475,y:25.77007673964208,z:-5.71240263705478},x:2.7908308907001746,y:134.02005511344086,z:-8.884255042175965},{id:137,name:"风门",position:{x:.13272944916260343,y:24.615536283216684,z:-6.083564961589715},x:2.799509839792492,y:131.71097420059007,z:-9.626579691245837},{id:138,name:"肺俞",position:{x:.12454928565776768,y:23.175883077600318,z:-6.357135703441159},x:2.7831495127828205,y:128.83166778935734,z:-10.173721174948724},{id:139,name:"厥阴俞",position:{x:.18397168117751583,y:21.953203809400527,z:-6.493452216898746},x:2.901994303822317,y:126.38630925295776,z:-10.446354201863898},{id:140,name:"心俞",position:{x:.223815755150234,y:20.473326075781294,z:-6.4808889075176666},x:2.981682451767753,y:123.42655378571929,z:-10.42122758310174},{id:141,name:"督俞",position:{x:.3080832566837248,y:19.246738459126462,z:-6.480683342665486},x:3.150217454834735,y:120.97337855240963,z:-10.420816453397379},{id:142,name:"膈俞",position:{x:.2113062477561236,y:18.010189381831374,z:-6.398172184690864},x:2.9566634369795324,y:118.50028039781945,z:-10.255794137448135},{id:143,name:"肝俞",position:{x:.3257113337780666,y:15.706696822708295,z:-6.303827129163082},x:3.1854736090234184,y:113.8932952795733,z:-10.06710402639257},{id:144,name:"胆俞",position:{x:.31002296637047166,y:14.45505551517379,z:-6.187385566896708},x:3.1540968742082285,y:111.39001266450428,z:-9.834220901859823},{id:145,name:"脾俞",position:{x:.3397227620159633,y:13.372680353186027,z:-6.0892839336246425},x:3.2134964654992118,y:109.22526234052876,z:-9.638017635315691},{id:146,name:"胃俞",position:{x:.2834926793136425,y:12.199196838918311,z:-5.991228926401206},x:3.10103630009457,y:106.87829531199333,z:-9.441907620868818},{id:147,name:"三焦俞",position:{x:.3115522505371633,y:10.891290768463882,z:-5.8800909763953655},x:3.1571554425416117,y:104.26248317108447,z:-9.219631720857137},{id:148,name:"肾俞",position:{x:.2526831169001671,y:9.445805149424928,z:-5.764157849261039},x:3.0394171752676193,y:101.37151193300656,z:-8.987765466588485},{id:149,name:"气海俞",position:{x:.29880474617753805,y:8.591020054742224,z:-5.791702843916241},x:3.1316604338223613,y:99.66194174364115,z:-9.042855455898888},{id:150,name:"大肠俞",position:{x:.2819746190462986,y:7.6081979936869075,z:-6.004212001099063},x:3.0980001795598824,y:97.69629762153052,z:-9.467873770264532},{id:151,name:"关元俞",position:{x:.28687039523987323,y:6.761107245353983,z:-6.383833096774481},x:3.1077917319470316,y:96.00211612486467,z:-10.227115961615368},{id:152,name:"小肠俞",position:{x:.27397726499285113,y:5.848356917060094,z:-6.952446574714614},x:3.0820054714529874,y:94.17661546827689,z:-11.364342917495634},{id:153,name:"膀胱俞",position:{x:.19812926154035893,y:5.196805657681956,z:-7.35041012351347},x:2.930309464548003,y:92.87351294952062,z:-12.160270015093346},{id:154,name:"中膂俞",position:{x:.2905639099646944,y:4.388245269013751,z:-7.739394125924051},x:3.115178761396674,y:91.2563921721842,z:-12.938238019914508},{id:155,name:"白环俞",position:{x:.3183896769378993,y:3.4923453991928994,z:-7.957797247082105},x:3.170830295343084,y:89.4645924325425,z:-13.375044262230617},{id:156,name:"上髎",position:{x:-.42113825158465623,y:5.758626335936384,z:-6.850935717345465},x:1.6917744382979727,y:93.99715430602947,z:-11.161321202757335},{id:157,name:"次髎",position:{x:-.46515998505545575,y:4.99267247448806,z:-7.14952452588382},x:1.6037309713563737,y:92.46524658313282,z:-11.758498819834045},{id:158,name:"中髎",position:{x:-.4250083691884079,y:4.233799142043871,z:-7.439809430120718},x:1.6840342030904694,y:90.94749991824445,z:-12.339068628307842},{id:159,name:"下髎",position:{x:-.41529964282950615,y:3.4495916861872615,z:-7.671024051706908},x:1.7034516558082728,y:89.37908500653123,z:-12.801497871480223},{id:160,name:"会阳",position:{x:-.8429099364684429,y:2.788752642097549,z:-7.52074268903678},x:.8482310685303993,y:88.0574069183518,z:-12.500935146139966},{id:161,name:"承扶",position:{x:1.6778283060705919,y:-3.6814190101147446,z:-5.456097334606568},x:5.889707553608469,y:75.11706361392721,z:-8.371644437279542},{id:162,name:"殷门",position:{x:1.8715871415431833,y:-11.219494854049309,z:-5.263745301844899},x:6.277225224553652,y:60.04091192605809,z:-7.986940371756205},{id:163,name:"浮郄",position:{x:3.544415007891647,y:-16.99495599571737,z:-4.16183672369425},x:9.62288095725058,y:48.489989642721966,z:-5.783123215454907},{id:164,name:"委阳",position:{x:3.4535152886260754,y:-18.06985962824672,z:-4.353702730816316},x:9.441081518719436,y:46.34018237766326,z:-6.166855229699038},{id:165,name:"委中",position:{x:2.2601107613487805,y:-17.975665657337856,z:-4.615524258331014},x:7.054272464164846,y:46.52857031948099,z:-6.690498284728434},{id:166,name:"附分",position:{x:1.4300192056946006,y:24.516392727599566,z:-6.325683336982152},x:5.394089352856486,y:131.51268708935584,z:-10.11081644203071},{id:167,name:"魄户",position:{x:1.5702064448673934,y:23.21174195648605,z:-6.523744786807541},x:5.674463831202072,y:128.9033855471288,z:-10.506939341681488},{id:168,name:"膏肓",position:{x:1.4795760087243188,y:22.03206474752688,z:-6.597788978665861},x:5.493202958915923,y:126.54403112921047,z:-10.655027725398128},{id:169,name:"神堂",position:{x:1.4964545956140434,y:20.466762688675317,z:-6.6036053293858075},x:5.526960132695372,y:123.41342701150734,z:-10.666660426838021},{id:170,name:"譩譆",position:{x:1.5225263437686039,y:19.27034833620005,z:-6.567064126572127},x:5.579103629004493,y:121.0205983065568,z:-10.59357802121066},{id:171,name:"膈关",position:{x:1.517667630092653,y:17.980821655773575,z:-6.492744477348275},x:5.569386201652591,y:118.44154494570385,z:-10.444938722762956},{id:172,name:"魂门",position:{x:1.4016568816028432,y:15.751346639943847,z:-6.380482397166986},x:5.3373647046729715,y:113.9825949140444,z:-10.220414562400379},{id:173,name:"阳纲",position:{x:1.4964495415311383,y:14.469381722191926,z:-6.270401425575379},x:5.526950024529562,y:111.41866507854056,z:-10.000252619217164},{id:174,name:"意舍",position:{x:1.4525275573239504,y:13.435104177045517,z:-6.163852646351849},x:5.439106056115186,y:109.35010998824774,z:-9.787155060770104},{id:175,name:"胃仓",position:{x:1.3828361813029488,y:12.171280688242021,z:-6.001981602278903},x:5.299723304073183,y:106.82246301064075,z:-9.463412972624212},{id:176,name:"肓门",position:{x:1.3976026748480805,y:10.93696486917456,z:-5.855073661428435},x:5.329256291163446,y:104.35383137250582,z:-9.169597090923276},{id:177,name:"志室",position:{x:1.4324258867409547,y:9.460714487271524,z:-5.651691262920579},x:5.398902714949195,y:101.40133060869975,z:-8.762832293907564},{id:178,name:"胞肓",position:{x:1.3010888055465735,y:5.243402313359532,z:-7.477932797703197},x:5.136228552560432,y:92.96670626087577,z:-12.4153153634728},{id:179,name:"秩边",position:{x:1.3829124119664016,y:3.6311514504369597,z:-7.977154022460077},x:5.299875765400088,y:89.74220453503062,z:-13.41375781298656},{id:180,name:"合阳",position:{x:2.080615650676422,y:-20.28922006845842,z:-5.266729771262199},x:6.695282242820129,y:41.901461497239865,z:-7.992909310590804},{id:181,name:"承筋",position:{x:2.0584411012778787,y:-24.036530471151714,z:-6.166377280903333},x:6.650933144023043,y:34.406840691853276,z:-9.792204329873073},{id:182,name:"承山",position:{x:2.1380388116981948,y:-27.726268148745657,z:-5.947262031670931},x:6.810128564863675,y:27.02736533666539,z:-9.353973831408268},{id:183,name:"飞扬",position:{x:3.639094613246524,y:-28.936235966162084,z:-5.25659205460029},x:9.812240167960333,y:24.607429701832537,z:-7.972633877266986},{id:184,name:"跗阳",position:{x:3.0241413079556807,y:-33.02075384010991,z:-3.9998940597101083},x:8.582333557378647,y:16.43839395393688,z:-5.459237887486623},{id:185,name:"昆仑",position:{x:2.909265263417428,y:-37.59551489879075,z:-3.4722493880606606},x:8.35258146830214,y:7.288871836575197,z:-4.4039485441877275},{id:186,name:"仆参",position:{x:3.154667031461525,y:-39.37157084734541,z:-3.41234242398329},x:8.843385004390335,y:3.736759939465884,z:-4.284134616032986},{id:187,name:"申脉",position:{x:3.6946562362052155,y:-38.75154911099858,z:-2.513455555436501},x:9.923363413877716,y:4.976803412159541,z:-2.486360878939408},{id:188,name:"金门",position:{x:4.262969176504161,y:-39.07404211946893,z:-1.4734487296840726},x:11.059989294475606,y:4.331817395218849,z:-.40634722743455143},{id:189,name:"京骨",position:{x:4.791713195676408,y:-39.594451176262226,z:-.6625021447248329},x:12.117477332820101,y:3.290999281632253,z:1.2155459424839279},{id:190,name:"束骨",position:{x:5.436369374690834,y:-40.09833162060213,z:.38181869885470476},x:13.406789690848953,y:2.283238392952441,z:3.3041876296430033},{id:191,name:"足通谷",position:{x:6.204330930745719,y:-40.56111732211039,z:1.9018787691475794},x:14.942712802958724,y:1.3576669899359217,z:6.3443077702287525},{id:192,name:"至阴",position:{x:6.56515917640678,y:-40.591640328216116,z:3.573754984648314},x:15.664369294280846,y:1.2966209777244728,z:9.688060201230222}]},{id:8,name:"足少阴肾经",shortName:"肾经",message:1,acupoints:[{id:193,name:"涌泉",position:{x:3.492201757663808,y:-41.16780364415135,z:2.623186476554835},x:9.5184544567949,y:.14429434585400713,z:7.786923185043264},{id:194,name:"然谷",position:{x:.9462075970131565,y:-38.78072710032369,z:.2015410559355928},x:4.426466135493598,y:4.9184474335093284,z:2.9436323438047793},{id:195,name:"太溪",position:{x:.29802627189518205,y:-37.94249101303353,z:-3.0733150610790005},x:3.1301034852576493,y:6.59491960808964,z:-3.6060798902244073},{id:196,name:"大钟",position:{x:.2564191384727863,y:-38.36270033167479,z:-3.6491186758472693},x:3.0468892184128578,y:5.754500970807129,z:-4.757687119760945},{id:197,name:"水泉",position:{x:.016298372156242635,y:-38.962826570006825,z:-3.2709670392610093},x:2.5666476857797704,y:4.554248494143053,z:-4.001383846588425},{id:198,name:"照海",position:{x:.2918588115617453,y:-38.638368990840384,z:-2.149466185062039},x:3.117768564590776,y:5.203163652475936,z:-1.758382138190484},{id:199,name:"复溜",position:{x:.7540344090965192,y:-32.38721964026573,z:-3.2239611441076548},x:4.0421197596603236,y:17.70546235362525,z:-3.907372056281716},{id:200,name:"交信",position:{x:.7174522382640873,y:-32.17202903775286,z:-2.2612291212163527},x:3.96895541799546,y:18.13584355865099,z:-1.9819080104991116},{id:201,name:"筑宾",position:{x:.39312214556805714,y:-29.33160503499806,z:-2.8345657126349693},x:3.3202952326033994,y:23.816691564160585,z:-3.1285811933363448},{id:202,name:"阴谷",position:{x:.925574985088133,y:-17.854862044533746,z:-4.133154258783463},x:4.385200911643551,y:46.77017754508921,z:-5.725758285633333},{id:203,name:"横骨",position:{x:-.12608282406330407,y:2.5792494605771736,z:2.2420182513672984},x:2.281885293340677,y:87.63840055531105,z:7.0245867346681905},{id:204,name:"大赫",position:{x:-.1734339735000212,y:3.883927679523886,z:2.4599262883298394},x:2.1871829944672427,y:90.24775699320448,z:7.4604028085932725},{id:205,name:"气穴",position:{x:-.21213287382231805,y:5.0459438859291765,z:2.613995081945262},x:2.109785193822649,y:92.57178940601506,z:7.768540395824118},{id:206,name:"四满",position:{x:-.2439088780271339,y:6.072314447348461,z:2.722378647693901},x:2.0462331854130174,y:94.62453052885363,z:7.985307527321396},{id:207,name:"中注",position:{x:-.23368395598764558,y:7.251546776440556,z:2.7802779156759527},x:2.066683029491994,y:96.98299518703782,z:8.1011060632855},{id:208,name:"肓俞",position:{x:-.15510925487570337,y:8.406579576281814,z:2.7554828477413693},x:2.2238324317158784,y:99.29306078672033,z:8.051515927416332},{id:209,name:"商曲",position:{x:-.2653610146353902,y:10.375203890654923,z:3.0928184229625515},x:2.0033289121965048,y:103.23030941546655,z:8.726187077858697},{id:210,name:"石关",position:{x:-.19863328494690036,y:11.179494343268708,z:3.1967113710289397},x:2.1367843715734844,y:104.83889032069412,z:8.933972973991473},{id:211,name:"阴都",position:{x:-.16389596064205936,y:11.964816190772027,z:3.2899131141337676},x:2.2062590201831664,y:106.40953401570076,z:9.120376460201129},{id:212,name:"腹通谷",position:{x:-.1648543259346753,y:12.821030104762684,z:3.418702804483715},x:2.2043422895979345,y:108.12196184368207,z:9.377955840901024},{id:213,name:"幽门",position:{x:-.23951203367116003,y:13.854083987641701,z:3.561073426936453},x:2.055026874124965,y:110.1880696094401,z:9.6626970858065},{id:214,name:"步廊",position:{x:1.123276864011176,y:16.833222829261402,z:3.7463913182679036},x:4.780604669489637,y:116.14634729267951,z:10.033332868469401},{id:215,name:"神封",position:{x:1.0435038864595292,y:18.295165465642157,z:4.017802060765916},x:4.6210587143863435,y:119.07023256544102,z:10.576154353465427},{id:216,name:"灵墟",position:{x:1.0732855204001006,y:20.31270057259175,z:3.8904136092273305},x:4.680621982267486,y:123.1053027793402,z:10.321377450388255},{id:217,name:"神藏",position:{x:1.0555968634836859,y:21.844399882318186,z:3.438001589404699},x:4.645244668434657,y:126.16870139879308,z:9.416553410742992},{id:218,name:"彧中",position:{x:.9786896499390254,y:23.364475820068662,z:2.6690820318923443},x:4.491430241345336,y:129.20885327429403,z:7.878714295718282},{id:219,name:"俞府",position:{x:.8713664466558453,y:24.70085230453178,z:1.951197068786307},x:4.276783834778976,y:131.88160624322026,z:6.442944369506208}]},{id:9,name:"手厥阴心包经",shortName:"心包",message:1,acupoints:[{id:220,name:"天池",position:{x:4.157963762839266,y:18.61856075078962,z:3.2786775685538885},x:10.849978467145817,y:119.71702313573594,z:9.09790536904137},{id:221,name:"天泉",position:{x:8.532384705290397,y:19.613258316930768,z:-.30130596674312926},x:19.59882035204808,y:121.70641826801824,z:1.9379382984473352},{id:222,name:"曲泽",position:{x:8.95869660260248,y:13.038511315787886,z:-1.0018666757845551},x:20.451444146672245,y:108.55692426573248,z:.5368168803644835},{id:223,name:"郄门",position:{x:10.458280436240518,y:6.316823094563574,z:-.5054571678356936},x:23.45061181394832,y:95.11354782328385,z:1.5296358962622065},{id:224,name:"间使",position:{x:10.778454902493582,y:4.794227940353984,z:-.5771106647877744},x:24.09096074645445,y:92.06835751486467,z:1.386328902358045},{id:225,name:"内关",position:{x:11.01034497568865,y:3.80920829269985,z:-.6105657087428753},x:24.554740892844585,y:90.0983182195564,z:1.3194188144478431},{id:226,name:"大陵",position:{x:11.461199652204236,y:1.621329548388296,z:-.5494461407791107},x:25.456450245875757,y:85.7225607309333,z:1.4416579503753724},{id:227,name:"劳宫",position:{x:12.431328667329257,y:-1.2760764738186552,z:-1.1736510487226823},x:27.3967082761258,y:79.9277486865194,z:.19324813448822908},{id:228,name:"中冲",position:{x:12.314411752783837,y:-3.957854002184355,z:-1.7749876275436023},x:27.16287444703496,y:74.564193629788,z:-1.0094250231536108}]},{id:10,name:"手少阳三焦经",shortName:"三焦",message:1,acupoints:[{id:229,name:"关冲",position:{x:10.888490877684156,y:-4.873584770454997,z:-1.9834745747767641},x:24.311032696835596,y:72.73273209324671,z:-1.4263989176199345},{id:230,name:"液门",position:{x:10.7310175630672,y:-1.6251019404935718,z:-3.0441175034295043},x:23.996086067601684,y:79.22969775316956,z:-3.547684774925415},{id:231,name:"中渚",position:{x:10.764470716007569,y:-.7641613074722358,z:-3.044899902295924},x:24.062992373482423,y:80.95157901921223,z:-3.5492495726582547},{id:232,name:"阳池",position:{x:11.28362370762159,y:2.060274898198294,z:-2.822548455155534},x:25.101298356710465,y:86.60045143055329,z:-3.1045466783774742},{id:233,name:"外关",position:{x:11.068919519692269,y:3.8415785130019913,z:-3.113783586928193},x:24.671889980851823,y:90.16305866016069,z:-3.687016941922792},{id:234,name:"支沟",position:{x:10.96789821645039,y:4.654721084323555,z:-3.2767175056448465},x:24.469847374368065,y:91.78934380280381,z:-4.012884779356099},{id:235,name:"会宗",position:{x:10.516333453568937,y:4.783181987877157,z:-3.2427701884645117},x:23.56671784860516,y:92.04626560991102,z:-3.9449901449954297},{id:236,name:"三阳络",position:{x:10.95727931939674,y:5.3691066816707576,z:-3.435585531359905},x:24.448609580260765,y:93.21811499749822,z:-4.330620830786216},{id:237,name:"四渎",position:{x:10.469797582771083,y:8.64731855335959,z:-4.182430716125047},x:23.47364610700945,y:99.77453874087588,z:-5.824311200316501},{id:238,name:"天井",position:{x:9.689680208791707,y:14.390583671813268,z:-4.905826054186541},x:21.9134113590507,y:111.26106897778324,z:-7.271101876439488},{id:239,name:"清冷渊",position:{x:9.63118009566279,y:15.163752327918395,z:-5.0641070285056955},x:21.796411132792866,y:112.8074062899935,z:-7.587663825077797},{id:240,name:"消泺",position:{x:9.309157375940401,y:17.92702095054007,z:-5.4924290974037575},x:21.152365693348088,y:118.33394353523684,z:-8.444307962873921},{id:241,name:"臑会",position:{x:9.073459375701741,y:19.569888646598898,z:-5.573200516728761},x:20.680969692870768,y:121.6196789273545,z:-8.605850801523928},{id:242,name:"肩髎",position:{x:8.372282319243132,y:24.579775950700707,z:-5.20714527983688},x:19.27861557995355,y:131.63945353555812,z:-7.873740327740165},{id:243,name:"天髎",position:{x:2.9374645796609435,y:25.911698141265987,z:-5.733822249593672},x:8.408980100789172,y:134.30329791668868,z:-8.92709426725375},{id:244,name:"天牖",position:{x:1.8222957395759565,y:31.916511492606276,z:-1.165369295403174},x:6.178642420619198,y:146.31292461936926,z:.2098116411272457},{id:245,name:"翳风",position:{x:2.20786671087302,y:33.0582298137448,z:-.9503261434691037},x:6.949784363213325,y:148.5963612616463,z:.6398979449953863},{id:246,name:"瘈脉",position:{x:2.4391987113751057,y:34.177394388872585,z:-1.6979551120335126},x:7.4124483642174965,y:150.83469041190187,z:-.8553599921334314},{id:247,name:"颅息",position:{x:2.5938444008674892,y:35.33649961772569,z:-1.8320232226888038},x:7.721739743202264,y:153.1529008696081,z:-1.1234962134440138},{id:248,name:"角孙",position:{x:2.6207146210217473,y:36.04489277871143,z:-1.3919699568043296},x:7.77548018351078,y:154.56968719157956,z:-.24338968167506536},{id:249,name:"耳门",position:{x:2.4225025117297037,y:35.18693850240413,z:.2503584881290486},x:7.3790559649266925,y:152.85377863896497,z:3.041267208191691},{id:250,name:"耳和髎",position:{x:2.26571312239971,y:35.761884063912476,z:.5954388904289516},x:7.065477186266705,y:154.00366976198166,z:3.731428012791497},{id:251,name:"丝竹空",position:{x:1.645288552263672,y:36.54589214020159,z:2.0710810655148197},x:5.824628045994629,y:155.57168591455988,z:6.682712362963233}]},{id:11,name:"足少阳胆经",shortName:"胆经",message:1,acupoints:[{id:252,name:"瞳子髎",position:{x:1.728258126907896,y:35.63996121965728,z:2.219802015398912},x:5.990567195283077,y:153.75982407347126,z:6.980154262731418},{id:253,name:"听会",position:{x:2.352230549963487,y:34.284678197261,z:.3279502077959666},x:7.238512041394259,y:151.0492580286787,z:3.196450647525527},{id:254,name:"上关",position:{x:2.174545751293202,y:35.391833473978465,z:.9896465282527114},x:6.883142444053689,y:153.26356858211363,z:4.5198432884390165},{id:255,name:"颔厌",position:{x:2.1332671501233307,y:38.26808188622702,z:.07287585196064228},x:6.8005852417139465,y:159.01606540661075,z:2.6863019358548783},{id:256,name:"悬颅",position:{x:2.2695751178376753,y:37.5587548401906,z:.10751109438992046},x:7.073201177142636,y:157.5974113145379,z:2.7555724207134347},{id:257,name:"悬厘",position:{x:2.377066925395937,y:36.90934424355625,z:.04434812182654113},x:7.288184792259159,y:156.2985901212692,z:2.629246475586676},{id:258,name:"曲鬓",position:{x:2.45759051726305,y:36.13199805147724,z:-.1662826351428084},x:7.449231975993385,y:154.74389773711118,z:2.207984961647977},{id:259,name:"率谷",position:{x:2.511735920285915,y:37.32453392108597,z:-1.157253548736536},x:7.557522782039115,y:157.12896947632865,z:.2260431344605216},{id:260,name:"天冲",position:{x:2.511894381959685,y:37.31480726507844,z:-1.8086818572666585},x:7.557839705386655,y:157.1095161643136,z:-1.0768134825997233},{id:261,name:"浮白",position:{x:2.4444325548488735,y:36.60641494365747,z:-2.620141809876854},x:7.422916051165032,y:155.69273152147164,z:-2.699733387820114},{id:262,name:"头窍阴",position:{x:2.39604923888475,y:35.035183467618694,z:-2.5899287966386764},x:7.326149419236785,y:152.5502685693941,z:-2.639307361343759},{id:263,name:"完骨",position:{x:2.254706475836926,y:33.67443164552731,z:-1.960369332318451},x:7.043463893141137,y:149.82876492521132,z:-1.3801884327033083},{id:264,name:"本神",position:{x:1.0749546842998985,y:39.7746311107735,z:.9968053324815429},x:4.683960310067082,y:162.0291638557037,z:4.53416089689668},{id:265,name:"阳白",position:{x:.7239512239368082,y:37.70316579738157,z:3.045873836661677},x:3.9819533893409016,y:157.88623322891985,z:8.632297905256948},{id:266,name:"头临泣",position:{x:.5509098638368952,y:40.01339461189187,z:1.5732093035575865},x:3.6358706691410756,y:162.50669085794044,z:5.686968839048767},{id:267,name:"目窗",position:{x:.6431170801632069,y:40.39262083049438,z:.30255115911432284},x:3.820285101793699,y:163.26514329514546,z:3.1456525501622394},{id:268,name:"正营",position:{x:.7956005646199698,y:40.510961069006925,z:-1.411389704951855},x:4.125252070707225,y:163.50182377217055,z:-.28222917797011604},{id:269,name:"承灵",position:{x:.9132235055504143,y:39.97841656774396,z:-3.047923220618543},x:4.360497952568114,y:162.43673476964463,z:-3.555296209303492},{id:270,name:"脑空",position:{x:1.078011313729963,y:35.122350428151876,z:-4.40220548560599},x:4.690073568927211,y:152.72460249046046,z:-6.263860739278385},{id:271,name:"风池",position:{x:1.0315605005214152,y:32.36636548892557,z:-2.8619334728676833},x:4.597171942510116,y:147.21263261200784,z:-3.183316713801773},{id:272,name:"肩井",position:{x:3.2387489690729048,y:27.34563580944007,z:-4.686320759777239},x:9.011548879613095,y:137.17117325303684,z:-6.832091287620884},{id:273,name:"渊腋",position:{x:5.7624936802968385,y:18.140741838360967,z:.7217321492157325},x:14.059038302060962,y:118.76138531087864,z:3.9840145303650587},{id:274,name:"辄筋",position:{x:5.41261854973866,y:17.583535685612446,z:1.49986791524411},x:13.359288040944605,y:117.6469730053816,z:5.5402860624218135},{id:275,name:"日月",position:{x:3.1652785855143257,y:13.026860063994462,z:2.6528835646761664},x:8.864608112495937,y:108.53362176214563,z:7.8463173612859265},{id:276,name:"京门",position:{x:4.715429290388066,y:9.356680189579848,z:-3.0192134659141274},x:11.964909522243417,y:101.1932620133164,z:-3.497876699894661},{id:277,name:"带脉",position:{x:4.870671109233577,y:7.62989198915227,z:-.12576619302825165},x:12.275393159934438,y:97.73968561246124,z:2.2890178458770905},{id:278,name:"五枢",position:{x:3.9621841877717117,y:4.857728768566034,z:1.1231019638199413},x:10.458419317010708,y:92.19535917128877,z:4.786754159573476},{id:279,name:"维道",position:{x:3.8202628731282786,y:4.002132981112048,z:1.2204672259650167},x:10.174576687723842,y:90.4841675963808,z:4.981484683863627},{id:280,name:"居髎",position:{x:5.952303167831786,y:3.2778046057509442,z:-.39613805548284375},x:14.438657277130858,y:89.03551084565859,z:1.7482741209679062},{id:281,name:"环跳",position:{x:5.804805127282457,y:1.0026828039400186,z:-4.058860313823075},x:14.143661196032198,y:84.48526724203674,z:-5.577170395712557},{id:282,name:"风市",position:{x:6.089947836278903,y:-8.855182716422853,z:-1.7883408486991463},x:14.71394661402509,y:64.769536201311,z:-1.036131465464699},{id:283,name:"中渎",position:{x:5.42646734925593,y:-11.885265938599645,z:-1.3994983885670003},x:13.386985639979144,y:58.709369756957415,z:-.2584465452004068},{id:284,name:"膝阳关",position:{x:4.63107616036136,y:-15.523447663845715,z:-1.5042279879677274},x:11.796203262190005,y:51.43300630646527,z:-.467905744001861},{id:285,name:"阳陵泉",position:{x:4.617443473718112,y:-19.29717360120643,z:-2.103024745732629},x:11.768937888903508,y:43.88555443174384,z:-1.6654992595316642},{id:286,name:"阳交",position:{x:4.445789352933261,y:-28.630301734839094,z:-4.284573179056464},x:11.425629647333807,y:25.219298164478516,z:-6.028596126179334},{id:287,name:"外丘",position:{x:4.753729404092645,y:-28.115535655309987,z:-3.0509505738509812},x:12.041509749652576,y:26.24883032353673,z:-3.5613509157683687},{id:288,name:"光明",position:{x:4.3844566053850755,y:-29.789691016835768,z:-2.862910729307556},x:11.302964152237436,y:22.90051960048517,z:-3.185271226681518},{id:289,name:"阳辅",position:{x:4.018159107265866,y:-31.396169942598057,z:-2.7556582143009134},x:10.570369155999018,y:19.68756174896059,z:-2.970766196668233},{id:290,name:"悬钟",position:{x:3.6435202079903277,y:-32.92687504885666,z:-3.0943022619245166},x:9.82109135744794,y:16.626151536443388,z:-3.6480542919154395},{id:291,name:"丘墟",position:{x:3.8795690362757114,y:-36.95156055018676,z:-1.2288363472502546},x:10.293189014018708,y:8.576780533783179,z:.08287753743308457},{id:292,name:"足临泣",position:{x:4.591820518314428,y:-38.272450600815176,z:.3865855289826676},x:11.717691978096141,y:5.935000432526351,z:3.313721289898929},{id:293,name:"地五会",position:{x:5.027331577483544,y:-38.98010841580897,z:1.5718514669747705},x:12.588714096434373,y:4.519684802538762,z:5.684253165883135},{id:294,name:"侠溪",position:{x:5.470646959459295,y:-39.490794711230194,z:2.7415202286569524},x:13.475344860385874,y:3.498312211696316,z:8.023590689247499},{id:295,name:"足窍阴",position:{x:6.132129535769813,y:-40.22882838723425,z:4.326528253852777},x:14.798310013006912,y:2.0222448596882003,z:11.193606739639147}]},{id:12,name:"足厥阴肝经",shortName:"肝经",message:1,acupoints:[{id:296,name:"大敦",position:{x:3.8356393699557145,y:-40.01302571504844,z:6.582349782876051},x:10.205329681378714,y:2.453850204059819,z:15.705249797685696},{id:297,name:"行间",position:{x:3.3528683843362694,y:-39.466462238479764,z:4.869704556200816},x:9.239787710139824,y:3.546977157197176,z:12.279959344335225},{id:298,name:"太冲",position:{x:2.753981686726796,y:-38.40362858198661,z:2.99386214634886},x:8.042014314920877,y:5.672644470183485,z:8.528274524631314},{id:299,name:"中封",position:{x:2.132594029983541,y:-36.20288764361122,z:.030093209683997202},x:6.799239001434367,y:10.074126346934264,z:2.600736651301588},{id:300,name:"蠡沟",position:{x:1.2645038545941532,y:-27.831067937001073,z:-.5725849610494009},x:5.0630586506555915,y:26.817765760154558,z:1.3953803098347919},{id:301,name:"中都",position:{x:.7191926447326793,y:-25.171822140962114,z:-.6144974808281916},x:3.9724362309326438,y:32.13625735223248,z:1.3115552702772106},{id:302,name:"膝关",position:{x:.04096643065612682,y:-20.24432056713258,z:-2.7059166419492016},x:2.615983802779539,y:41.991260499891546,z:-2.8712830519648094},{id:303,name:"曲泉",position:{x:-.061656523209741465,y:-17.87972323774355,z:-2.942045138421122},x:2.4107378950478022,y:46.7204551586696,z:-3.34354004490865},{id:304,name:"阴包",position:{x:-.133802044151345,y:-11.122153253094766,z:.4290422927221158},x:2.266446853164595,y:60.23559512796717,z:3.3986348173778254},{id:305,name:"足五里",position:{x:1.8208721694451668,y:-.8455721927533943,z:1.5987837657919002},x:6.175795280357619,y:80.78875724864992,z:5.738117763517394},{id:306,name:"阴廉",position:{x:1.7934102695867686,y:.17289529847296592,z:1.5341317213005254},x:6.120871480640822,y:82.82569223110264,z:5.608813674534645},{id:307,name:"急脉",position:{x:1.80204805972447,y:1.3464945143831812,z:1.6426198919908686},x:6.138147060916225,y:85.17289066292307,z:5.825790015915331},{id:308,name:"章门",position:{x:4.826554127765462,y:10.059523270852281,z:-.7756353218206016},x:12.18715919699821,y:102.59894817586127,z:.9892795882923906},{id:309,name:"期门",position:{x:3.235700490361104,y:14.11639555542014,z:2.930358925498151},x:9.005451922189494,y:110.71269274499699,z:8.401268082929896}]},{id:13,name:"任脉",shortName:"任脉",message:1,acupoints:[{id:310,name:"会阴",position:{x:-1.1994947865234877,y:-2.6463954865264725,z:-.07268381963167059},x:.1350613684203097,y:77.18711066110376,z:2.3951825926702526},{id:311,name:"曲骨",position:{x:-1.1939713519864394,y:2.693668568322245,z:2.3323370306122655},x:.14610823749440627,y:87.8672387708012,z:7.205224293158125},{id:312,name:"中极",position:{x:-1.1613870752488213,y:3.911939111712911,z:2.5179701425712366},x:.21127679096964247,y:90.30377985758253,z:7.576490517076067},{id:313,name:"关元",position:{x:-1.2228690532530182,y:5.0656494540051185,z:2.6636422120377503},x:.08831283496124875,y:92.61120054216694,z:7.867834656009094},{id:314,name:"石门",position:{x:-1.2524138471978463,y:5.931389688429,z:2.7472020682169713},x:.029223247071592517,y:94.3426810110147,z:8.034954368367536},{id:315,name:"气海",position:{x:-1.2625723779752747,y:6.510098302416893,z:2.7784694580939515},x:.008906185516735832,y:95.50009823899049,z:8.097489148121497},{id:316,name:"阴交",position:{x:-1.2636210464483888,y:7.035947979696324,z:2.7754665488644648},x:.006808848570507564,y:96.55179759354935,z:8.091483329662523},{id:317,name:"神阙",position:{x:-1.2618728921594702,y:8.436262729113004,z:2.6722553290937086},x:.01030515714834479,y:99.35242709238271,z:7.885060890121011},{id:318,name:"水分",position:{x:-1.3217129581886056,y:9.573898930083494,z:2.9136123313638365},x:-.10937497490992598,y:101.62769949432369,z:8.367774894661267},{id:319,name:"下脘",position:{x:-1.3580178318364204,y:10.285531554866381,z:3.0389228176793637},x:-.18198472220555573,y:103.05096474388947,z:8.618395867292321},{id:320,name:"建里",position:{x:-1.3439881056294816,y:11.173044307531022,z:3.1442154563101},x:-.15392526979167798,y:104.82599024921875,z:8.828981144553794},{id:321,name:"中脘",position:{x:-1.3674377430277218,y:11.994807246163809,z:3.2499405839098614},x:-.20082454458815846,y:106.46951612648432,z:9.040431399753317},{id:322,name:"上脘",position:{x:-1.3002477059875055,y:12.774424069579283,z:3.3746163344677953},x:-.06644447050772584,y:108.02874977331527,z:9.289782900869184},{id:323,name:"巨阙",position:{x:-1.2920804666647001,y:13.781483638454304,z:3.520903111738228},x:-.050109991862115066,y:110.04286891106531,z:9.58235645541005},{id:324,name:"鸠尾",position:{x:-1.3279453095655427,y:15.190750345489917,z:3.6648489605719377},x:-.12183967766380022,y:112.86140232513654,z:9.870248153077469},{id:325,name:"中庭",position:{x:-1.3770845497988402,y:16.64951752414207,z:3.794648964699249},x:-.22011815813039526,y:115.77893668244084,z:10.129848161332092},{id:326,name:"膻中",position:{x:-1.4043968145569217,y:18.50740370329614,z:3.920691056379553},x:-.2747426876465582,y:119.49470904074899,z:10.3819323446927},{id:327,name:"玉堂",position:{x:-1.3335242072209619,y:20.25386031733437,z:3.8730718533739434},x:-.1329974729746386,y:122.98762226882545,z:10.28669393868148},{id:328,name:"紫宫",position:{x:-1.309146142750409,y:21.676676702554637,z:3.584791905602671},x:-.08424134403353278,y:125.83325503926598,z:9.710134043138936},{id:329,name:"华盖",position:{x:-1.2385196544134347,y:23.39427820765252,z:2.8583160578571025},x:.057011632640415755,y:129.26845804946174,z:8.257182347647799},{id:330,name:"璇玑",position:{x:-1.2463526932640177,y:24.731797593747544,z:2.0246725797169134},x:.04134555493924985,y:131.9434968216518,z:6.5898953913674205},{id:331,name:"天突",position:{x:-1.1700299026050338,y:25.706226638635073,z:1.4677758343764467},x:.19399113625721753,y:133.89235491142685,z:5.476101900686487},{id:332,name:"廉泉",position:{x:-1.2840509473451673,y:29.088163190433633,z:1.81549678811092},x:-.03405095322304952,y:140.65622801502397,z:6.171543808155434},{id:333,name:"承浆",position:{x:-1.2764722423134547,y:31.34612949506119,z:4.222306612043695},x:-.018893543159624215,y:145.1721606242791,z:10.985163456020985}]},{id:14,name:"督脉",shortName:"督脉",message:1,acupoints:[{id:334,name:"长强",position:{x:-1.2158642588932604,y:1.761944956451984,z:-7.164209457673401},x:.10232242368076427,y:86.00379154706067,z:-11.787868683413208},{id:335,name:"腰俞",position:{x:-1.344132319676258,y:3.3814287892489716,z:-7.240282872335349},x:-.15421369788523087,y:89.24275921265465,z:-11.940015512737105},{id:336,name:"腰阳关",position:{x:-1.2749933062842875,y:4.081083944427078,z:-7.102221262523486},x:-.015935671101289905,y:90.64206952301086,z:-11.663892293113378},{id:337,name:"命门",position:{x:-1.3642906221490927,y:6.647416889927825,z:-6.2312180591067445},x:-.19453030283090023,y:95.77473541401235,z:-9.921885886279895},{id:338,name:"悬枢",position:{x:-1.3149257838983963,y:7.531527749847157,z:-5.800808473696257},x:-.09580062632950748,y:97.54295713385102,z:-9.06106671545892},{id:339,name:"脊中",position:{x:-1.2695845377391946,y:8.489495561817364,z:-5.583582170443364},x:-.0051181340111039475,y:99.45889275779143,z:-8.626614108953135},{id:340,name:"中枢",position:{x:-1.254628211297281,y:9.5381141757588,z:-5.519627150110345},x:.024794518872722993,y:101.5561299856743,z:-8.498704068287097},{id:341,name:"筋缩",position:{x:-1.2367439333672285,y:10.952880867707748,z:-5.534723712870743},x:.06056307473282807,y:104.3856633695722,z:-8.528897193807893},{id:342,name:"至阳",position:{x:-1.2565418663873866,y:13.342143667619482,z:-5.449707868515823},x:.020967208692511896,y:109.16418896939567,z:-8.358865505098052},{id:343,name:"灵台",position:{x:-1.2420170765235585,y:14.543509408486898,z:-5.532654145800613},x:.0500167884201681,y:111.5669204511305,z:-8.524758059667633},{id:344,name:"神道",position:{x:-1.2520692675607334,y:15.81075549165076,z:-5.623892257361611},x:.029912406345818265,y:114.10141261745822,z:-8.707234282789628},{id:345,name:"身柱",position:{x:-1.2939707612411278,y:18.116883780243057,z:-5.853504016146623},x:-.05389058101497035,y:118.71366919464282,z:-9.166457800359652},{id:346,name:"陶道",position:{x:-1.2447353326917054,y:19.268464547405443,z:-5.951285011487251},x:.04458027608387427,y:121.01683072896759,z:-9.362019791040908},{id:347,name:"大椎",position:{x:-1.2462878032400546,y:20.574612204320346,z:-6.009218651257733},x:.04147533498717593,y:123.6291260427974,z:-9.477887070581872},{id:348,name:"哑门",position:{x:-1.248033123658847,y:23.169395466861147,z:-5.979857727153238},x:.037984694149590936,y:128.818692567879,z:-9.419165222372882},{id:349,name:"风府",position:{x:-1.1560826885089992,y:25.673700619762272,z:-5.467680722999134},x:.22188556444928675,y:133.82730287368125,z:-8.394811214064674},{id:350,name:"脑户",position:{x:-1.2933021337716715,y:27.082796543917368,z:-4.874345393315096},x:-.05255332607605778,y:136.64549472199144,z:-7.208140554696598},{id:351,name:"强间",position:{x:-1.309361386920291,y:31.88963823584622,z:-3.633472787018576},x:-.08467183237329667,y:146.25917810584914,z:-4.726395342103558},{id:352,name:"后顶",position:{x:-1.309028363057474,y:32.67682672993281,z:-3.996841379683282},x:-.08400578464766273,y:147.83355509402233,z:-5.45313252743297},{id:353,name:"百会",position:{x:-1.2834213494431606,y:34.96226613725426,z:-5.102545814084266},x:-.03279175741903595,y:152.40443390866523,z:-7.664541396234938},{id:354,name:"前顶",position:{x:-1.339205747999667,y:36.82856867733547,z:-5.362860128579506},x:-.144360554532049,y:156.13703898882764,z:-8.185170025225418},{id:355,name:"囟会",position:{x:-1.3138321579706134,y:38.630573832654775,z:-5.016454536274814},x:-.09361337447394158,y:159.74104929946625,z:-7.492358840616035},{id:356,name:"上星",position:{x:-1.2417330449417157,y:39.69043980200421,z:-4.317292389001707},x:.05058485158385384,y:161.86078123816512,z:-6.094034546069821},{id:357,name:"神庭",position:{x:-1.2199260625198671,y:40.66705073389318,z:-3.156855899379032},x:.0941988164275509,y:163.81400310194306,z:-3.77316156682447},{id:358,name:"素髎",position:{x:-1.2700925761691715,y:41.09679174008767,z:-1.7522583896984614},x:-.00613421087105781,y:164.67348511433204,z:-.963966547463329},{id:359,name:"水沟",position:{x:-1.225930634796196,y:41.19656612227507,z:-.7733295988907258},x:.08218967187489312,y:164.87303387870685,z:.9938910341521421},{id:360,name:"兑端",position:{x:-1.2464109705385393,y:41.022246593650024,z:.7359386845578726},x:.041229000390206494,y:164.52439482145675,z:4.012427601049339},{id:361,name:"龈交",position:{x:-1.3583868076520123,y:40.68503551892246,z:1.6670309110493733},x:-.18272267383673935,y:163.84997267200163,z:5.87461205403234},{id:362,name:"印堂",position:{x:-1.307654265945315,y:40.063387295923405,z:2.556435883773517},x:-.0812575904233448,y:162.60667622600351,z:7.653421999480628}]},{id:99,name:"经外奇穴",shortName:"奇穴",message:1,acupoints:[{id:363,name:"四神聪",position:{x:-.2216243935944977,y:40.46378316415654,z:-3.1751906793369074},x:2.0908021542782897,y:163.40746796246978,z:-3.809831126740221},{id:364,name:"当阳",position:{x:-3.6201587821931476,y:39.749569568886415,z:1.0180695713210532},x:-4.70626662291901,y:161.97904077192953,z:4.5766893745757},{id:365,name:"鱼腰",position:{x:-3.2523279608669036,y:37.7057713289102,z:3.027579239339417},x:-3.970604980266522,y:157.8914442919771,z:8.595708710612428},{id:366,name:"太阳",position:{x:-4.1389629794714295,y:36.51601899338495,z:2.1079799251410236},x:-5.743875017475574,y:155.5119396209266,z:6.756510082215641},{id:367,name:"耳尖",position:{x:-5.583455039621313,y:35.6402284745395,z:-.8117887512507771},x:-8.632859137775341,y:153.7603585832357,z:.9169727294320396},{id:368,name:"球后",position:{x:-3.5582554616440976,y:35.1808766009552,z:3.0272861585610897},x:-4.58245998182091,y:152.8416548360671,z:8.595122549055773},{id:369,name:"上迎香",position:{x:-2.150385286382619,y:34.72686047890504,z:3.7293910207489276},x:-1.7667196312979527,y:151.93362259196678,z:9.999332273431449},{id:370,name:"内迎香",position:{x:-.155912021234494,y:34.27114884520611,z:3.745898607008357},x:2.222226898998297,y:151.02219932456893,z:10.032347445950307},{id:371,name:"聚泉",position:{x:-1.2820020813272934,y:32.43742078415062,z:4.422622754058054},x:-.029953221187301704,y:147.35474320245794,z:11.385795740049701},{id:372,name:"海泉",position:{x:-.9028208421392147,y:32.44461284185074,z:4.375538024824621},x:.7284092571888559,y:147.3691273178582,z:11.291626281582836},{id:373,name:"金津",position:{x:-.4818646385950337,y:32.60099836641997,z:4.125180154275583},x:1.5703216642772178,y:147.68189836699665,z:10.79091054048476},{id:374,name:"玉液",position:{x:-2.0505529513421092,y:32.59442051997266,z:4.104769338307406},x:-1.5670549612169333,y:147.66874267410202,z:10.750088908548406},{id:375,name:"夹承浆",position:{x:-3.523418131012093,y:31.465106428702356,z:2.5471437408493145},x:-4.512785320556901,y:145.41011449156142,z:7.634837713632223},{id:376,name:"牵正",position:{x:-4.844177936771082,y:34.30431619644213,z:.3144506713500146},x:-7.154304932074879,y:151.08853402704096,z:3.169451574633623},{id:377,name:"翳明",position:{x:-4.56409242271733,y:32.992329840792266,z:-1.6007522694528689},x:-6.594133903967375,y:148.46456131574124,z:-.660954306972144},{id:378,name:"颈百劳",position:{x:-1.9248378193569806,y:29.12951923266276,z:-3.8767518683793867},x:-1.315624697246676,y:140.73894009948222,z:-5.21295350482518},{id:379,name:"安眠",position:{x:-3.5840439060266363,y:32.45140258791372,z:-2.8533013066488877},x:-4.634036870585987,y:147.38270680998414,z:-3.1660523813641817},{id:380,name:"子宫",position:{x:.40855989833514883,y:2.3978339746215127,z:2.1140420408154768},x:3.351170738137583,y:87.27556958339973,z:6.768634313564547},{id:381,name:"三角灸",position:{x:.2476649411549685,y:6.397026389191318,z:2.6987881808870924},x:3.029380823777222,y:95.27395441253934,z:7.9381265937077785},{id:382,name:"定喘",position:{x:-1.9497071693355377,y:27.100542877700164,z:-4.9375474732609845},x:-1.3653633972037902,y:136.68098738955703,z:-7.334544714588375},{id:383,name:"夹脊",position:{x:-1.9210926389580223,y:25.73116086316176,z:-5.562093882485634},x:-1.3081343364487594,y:133.94222336048023,z:-8.583637533037674},{id:384,name:"胃脘下俞",position:{x:-2.81375969149488,y:16.918968142571508,z:-6.390982953442418},x:-3.093468441522475,y:116.31783791929972,z:-10.241415674951241},{id:385,name:"痞根",position:{x:-4.814403145391264,y:10.855422272257172,z:-5.643078923041159},x:-7.094755349315243,y:104.19074617867105,z:-8.745607614148724},{id:386,name:"下极俞",position:{x:-1.2910795132027886,y:8.44438360493541,z:-5.591498130753813},x:-.048108084938291995,y:99.36866884402752,z:-8.642446029574032},{id:387,name:"腰宜",position:{x:-3.9853541341375553,y:9.522824318318918,z:-5.674765015822274},x:-5.4366573268078255,y:101.52555027079454,z:-8.808979799710954},{id:388,name:"腰眼",position:{x:-5.037577693986434,y:7.396120184360534,z:-5.603559215109392},x:-7.541104446505583,y:97.27214200287777,z:-8.66656819828519},{id:389,name:"十七椎",position:{x:-1.3412140399261627,y:6.541636389876139,z:-6.287073767443005},x:-.1483771383850403,y:95.56317441390898,z:-10.033597302952415},{id:390,name:"腰奇",position:{x:-1.7036830599042005,y:2.77681964399639,z:-7.580157806216512},x:-.8733151783411159,y:88.03354092214948,z:-12.61976538049943},{id:391,name:"肩前",position:{x:-8.535915941806564,y:21.054587330075698,z:-6.026477409111628},x:-14.537780942145844,y:124.5890762943081,z:-9.512404586289662},{id:392,name:"肘尖",position:{x:9.767653461727571,y:13.366464296810378,z:-4.71297850714803},x:22.069357864922427,y:109.21283022777746,z:-6.885406782362466},{id:393,name:"二白",position:{x:-12.511455547576585,y:4.194288789685885,z:-3.204156438084027},x:-22.488860153685884,y:90.86847921352847,z:-3.8677626442344604},{id:394,name:"中泉",position:{x:-13.672773234947297,y:3.1109648263983303,z:-1.243461481339267},x:-24.811495528427308,y:88.70183128695336,z:.05362726925505967},{id:395,name:"中魁",position:{x:-13.919467599397453,y:-3.5129541221691696,z:-.3106569437712281},x:-25.304884257327622,y:75.45399338981836,z:1.9192363443911375},{id:396,name:"大骨空",position:{x:15.004491294170478,y:-.7826838563427998,z:-.3225963909057725},x:32.54303352980824,y:80.9145339214711,z:1.8953574501220487},{id:397,name:"小骨空",position:{x:10.19867875774904,y:-3.110992366640275,z:-2.761665123971362},x:22.931408456965364,y:76.25791690087615,z:-2.98278001600913},{id:398,name:"腰痛点",position:{x:-13.698544958432311,y:1.697104607672351,z:-.9041445172614431},x:-24.863038975397338,y:85.8741108495014,z:.7322611974107076},{id:399,name:"外劳宫",position:{x:-13.800441716604665,y:.39003853727830773,z:-.5809564994963665},x:-25.066832491742044,y:83.25997870871332,z:1.3786372329408607},{id:400,name:"八邪",position:{x:-14.326677550187867,y:-1.2053039988930934,z:-.5260530147538347},x:-26.11930415890845,y:80.06929363637052,z:1.4884442024259243},{id:401,name:"四缝",position:{x:-13.521294572967694,y:-3.2256269122676287,z:-1.2811531662811078},x:-24.508538204468103,y:76.02864780962145,z:-.021756100628621766},{id:402,name:"十宣",position:{x:-13.08003289690625,y:-5.300541047942652,z:-2.2584299156158494},x:-23.626014852345214,y:71.8788195382714,z:-1.976309599298105},{id:403,name:"髋骨",position:{x:-7.320240478066978,y:-13.77609910779072,z:-.3877778930564162},x:-12.106430014666671,y:54.92770341857526,z:1.7649944458207614},{id:404,name:"鹤顶",position:{x:-5.360785208166341,y:-15.741604252070818,z:1.4084273765879232},x:-8.187519474865397,y:50.99669313001507,z:5.35740498510944},{id:405,name:"百虫窝",position:{x:-4.0971439810671395,y:-11.701233926932389,z:1.8684413253842251},x:-5.660237020666994,y:59.077433780291926,z:6.277432882702044},{id:406,name:"内膝眼",position:{x:-4.363319057470723,y:-19.10592698917221,z:1.2276583089013968},x:-6.192587173474161,y:44.26804765581228,z:4.995866849736387},{id:407,name:"胆囊",position:{x:-7.188755915452724,y:-22.3600291110928,z:-1.7177843052836224},x:-11.843460889438163,y:37.759843411971104,z:-.895018378633651},{id:408,name:"阑尾",position:{x:-6.048849469138293,y:-24.345868823477467,z:-.1997304557192905},x:-9.563647996809301,y:33.78816398720177,z:2.1410893204950128},{id:409,name:"内踝尖",position:{x:-2.6226826778029633,y:-37.13890065894988,z:-1.643524879617118},x:-2.7113144141386414,y:8.202100316256946,z:-.7464995273006423},{id:410,name:"外踝尖",position:{x:-6.487914544291073,y:-37.59744624245178,z:-2.4669247424490806},x:-10.44177814711486,y:7.285009149253142,z:-2.3932992529645674},{id:411,name:"八风",position:{x:-7.463423106515947,y:-39.449805880078635,z:3.8170374249423276},x:-12.392795271564609,y:3.5802898739994333,z:10.174625081818249},{id:412,name:"独阴",position:{x:-5.657932620977386,y:-40.91256046796157,z:4.9345715127713525},x:-8.781814300487486,y:.6547806982335658,z:12.409693257476299},{id:413,name:"气端",position:{x:3.0631164372374293,y:-39.977049973611315,z:7.97340736004648},x:8.660283815942144,y:2.5258016869340736,z:18.487364952026553}]}],M5={__name:"ManModelPage",setup(n){const e=jm(),t=(e.query.ids||"").split(",").map(H=>parseInt(H)),i=Ih();var s;const r=[],o=[],a=[],l=window.innerWidth,c=window.innerHeight,u=new p4,h=new a5;var f,p=new cd;const _=new _5,x=new g5,m=new Xt(40,l/c,3,1e3),d=new Qf({antialias:!0});function E(){d.setPixelRatio(window.devicePixelRatio),d.setSize(l,c),d.setClearColor(16777215),i.value.appendChild(d.domElement),m.position.z=120;const H=new o5(m,i.value);H.minDistance=50,H.maxDistance=200,u.add(new t5(4469555));const S=new Z4(16764108,4469555,5);S.position.set(1,100,5),u.add(S);const A=new e5(16777215,1.5);A.position.set(20,150,5),A.castShadow=!0,A.shadow.camera.top=2,A.shadow.camera.bottom=-2,A.shadow.camera.left=-2,A.shadow.camera.right=2,A.shadow.camera.near=.5,A.shadow.camera.far=20,u.add(A);const J=new Nt;J.setFromPoints([new I,new I]);const de=new ed(J,new Fs);u.add(de);var F=p.load("model/man/man.jpg");_.load("model/man/man.mtl",function(Y){Y.preload(),x.setMaterials(Y),x.load("model/man/man.obj",function(te){s=te.children[0],te.traverse(function(Se){Se instanceof zt&&(Se.material.map=F)}),P(),u.add(te),te.scale.set(.5,.5,.5);let V=new ms().setFromObject(te),$=V.max.x-V.min.x,pe=V.max.z-V.min.z,ce=V.max.y-V.min.y,k=V.min.x+$/2,j=V.min.y+ce/2,xe=V.min.z+pe/2;te.position.set(-k,-j,-xe),d.toneMapping=Rf,d.outputEncoding=Qn,te.position.set(-k,-j,-xe)})}),new i5;const G=new zt(new gs(1,1,10),new j4);G.visible=!1,u.add(G)}function y(){requestAnimationFrame(y),d.render(u,m)}function M(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)}function P(){for(var H of y5)for(var S of H.acupoints)a.push(S);for(var A=0;A<a.length;A++){var J=a[A],de=new Cl(.5,20,20),F=new Ml({color:255,transparent:!0,opacity:0}),G=new zt(de,F),Y=new it;Y.makeTranslation(J.x,J.y,J.z),G.matrix=Y,G.position.setFromMatrixPosition(Y),G.rotation.setFromRotationMatrix(Y),G.name=`${J.id}`,s.attach(G),t.indexOf(J.id)!=-1&&(G.material.opacity=1,o.push(G),G.material.color=new Ve(Math.random()*65280<<0),L(G,J))}}function L(H,S){if(f!=null){var A=S.name,J=new v5(A,{font:f,size:1.2,height:0,curveSegments:11,bevelEnabled:!1,bevelThickness:.1,bevelSize:1,bevelSegments:1}),de=new Pl({color:H.material.color,opacity:.3,shininess:1}),F=new zt(J,de);F.needsUpdate=!0,F.position.copy(S.position),F.position.z+=S.z<0?-1.5:1.5,F.rotation.y=S.z<0?-Math.PI:F.rotation.y,F.position.x+=S.z<0&&S.position.x>9&&S.position.x<13.5?5:.1,S.position.y>-40&&S.position.y<-36?(F.position.y+=1,F.position.x+=S.position.x):S.position.y>-42&&S.position.y<=-40?F.position.y-=1.5:S.position.y>33.05&&S.position.y<=37.5?S.position.z<-1?F.position.x+=1.8*S.name.length:F.position.x-=1.8*S.name.length:S.position.y==9.356680189579848&&(F.position.x+=3.2),s.attach(F),r.push(F);return}h.load("fonts/helvetiker_bold.typeface.json",G=>{f=G,L(H,S)})}function C(){r.forEach(function(H){s.remove(H)}),r.length=0,o.forEach(function(H){H.material.opacity=0}),o.length=0}return $h(()=>{E(),y(),window.addEventListener("resize",M)}),ud.afterEach((H,S)=>{C();const A=(e.query.ids||"").split(",").map(G=>parseInt(G));for(var J=0;J<a.length;J++){var de=a[J];if(A.indexOf(de.id)!=-1){var F=s.children.find(G=>G.name==`${de.id}`);F.material.opacity=1,o.push(F),F.material.color=new Ve(Math.random()*65280<<0),L(F,de)}}}),(H,S)=>(lf(),s0("div",{ref_key:"target",ref:i},null,512))}},S5=[{path:"/",component:M5}],ud=Xm({history:am(),routes:S5}),E5=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},b5={};function T5(n,e){const t=Op("router-view");return lf(),r0(t)}const A5=E5(b5,[["render",T5]]);G0(A5).use(ud).mount("#app");
