import{r as u,C as A,a4 as B,N as G,j as s,e as J,x as re,p as R,K as te}from"./index.295caa00.js";import{T as ae}from"./b-tween.es.d368a2a1.js";import{p as ie,g as L,a as W}from"./pad.b909f4f4.js";import{S as ne}from"./index.df914e5e.js";var le=globalThis&&globalThis.__read||function(e,n){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var t=a.call(e),i,l=[],o;try{for(;(n===void 0||n-- >0)&&!(i=t.next()).done;)l.push(i.value)}catch(r){o={error:r}}finally{try{i&&!i.done&&(a=t.return)&&a.call(t)}finally{if(o)throw o.error}}return l},oe=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Y(e,n){var a=e;return oe.reduce(function(t,i){var l=le(i,2),o=l[0],r=l[1];if(t.indexOf(o)!==-1){var N=Math.floor(a/r);return a-=N*r,t.replace(new RegExp(o+"+","g"),function(w){var b=w.length;return ie(N.toString(),b,"0")})}return t},n)}var M="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/es/Statistic/countdown.js",z=globalThis&&globalThis.__read||function(e,n){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var t=a.call(e),i,l=[],o;try{for(;(n===void 0||n-- >0)&&!(i=t.next()).done;)l.push(i.value)}catch(r){o={error:r}}finally{try{i&&!i.done&&(a=t.return)&&a.call(t)}finally{if(o)throw o.error}}return l};function se(e,n){var a=u.exports.useContext(A).getPrefixCls,t=e.className,i=e.style,l=e.title,o=e.styleValue,r=e.value,N=e.onFinish,w=e.renderFormat,b=e.format,y=b===void 0?"HH:mm:ss":b,D=e.start,g=D===void 0?!0:D,h=L(r,y)||B(),S=L(e.now,y),x=a("statistic"),V=z(u.exports.useState(h.diff(S,"millisecond")),2),F=V[0],U=V[1],O=z(u.exports.useState(Y(Math.max(F,0),y)),2),T=O[0],p=O[1],_=u.exports.useRef(null),C=function(){clearInterval(_.current),_.current=null},c=function(){_.current=setInterval(function(){var m=h.diff(W()),j=h.diff(W(),"millisecond");j<=0&&(C(),N==null||N());var P=Y(Math.max(j,0),y);p(P),U(m)},1e3/30)};u.exports.useEffect(function(){return!_.current&&g&&h.valueOf()>=Date.now()&&c(),function(){C()}},[e.start]);var E=G(w)?w(F,T):T;return s.exports.jsxDEV("div",{ref:n,className:J(""+x,x+"-countdown",t),style:i,children:[l&&s.exports.jsxDEV("div",{className:x+"-title",children:l},void 0,!1,{fileName:M,lineNumber:62,columnNumber:18},this),s.exports.jsxDEV("div",{className:x+"-content",children:s.exports.jsxDEV("div",{className:x+"-value",style:o,children:E},void 0,!1,{fileName:M,lineNumber:64,columnNumber:13},this)},void 0,!1,{fileName:M,lineNumber:63,columnNumber:9},this)]},void 0,!0,{fileName:M,lineNumber:61,columnNumber:13},this)}var Q=u.exports.forwardRef(se);Q.displayName="StatisticCountdown";var ue=Q,v="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/es/Statistic/index.js",I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},I.apply(this,arguments)},ce=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},me=globalThis&&globalThis.__read||function(e,n){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var t=a.call(e),i,l=[],o;try{for(;(n===void 0||n-- >0)&&!(i=t.next()).done;)l.push(i.value)}catch(r){o={error:r}}finally{try{i&&!i.done&&(a=t.return)&&a.call(t)}finally{if(o)throw o.error}}return l},fe={countFrom:0,countDuration:2e3};function de(e,n){var a,t=u.exports.useContext(A),i=t.getPrefixCls,l=t.componentConfig,o=t.rtl,r=re(e,fe,l==null?void 0:l.Statistic),N=r.className,w=r.style,b=r.title,y=r.extra,D=r.groupSeparator,g=r.precision,h=r.prefix,S=r.suffix,x=r.format,V=r.renderFormat,F=r.styleValue,U=r.styleDecimal,O=r.loading,T=ce(r,["className","style","title","extra","groupSeparator","precision","prefix","suffix","format","renderFormat","styleValue","styleDecimal","loading"]),p=u.exports.useRef(),_=u.exports.useRef(),C=me(u.exports.useState("value"in r?r.value:void 0),2),c=C[0],E=C[1],m=i("statistic"),j=function(d,f){d===void 0&&(d=r.countFrom),f===void 0&&(f=r.value);var H=r.countDuration;d!==f&&(p.current=new ae({from:{value:d},to:{value:f},duration:H,easing:"quartOut",onUpdate:function(ee){E(ee.value.toFixed(g))},onFinish:function(){E(f)}}),p.current.start())};u.exports.useEffect(function(){return r.countUp?(p.current&&p.current.stop(),c!==r.value?j(Number(c),r.value):j()):E(r.value),function(){p.current&&p.current.stop(),p.current=null}},[r.value]),u.exports.useImperativeHandle(n,function(){return{countUp:j,getRootDOMNode:function(){return _.current}}});var P=u.exports.useMemo(function(){var d=c;x&&(d=B(c).format(x)),R(g)&&g>=0&&(d=Number(c).toFixed(g));var f=String(d).split(".")[0],H=String(d).split(".")[1];return D&&R(Number(c))&&(f=Number(f).toLocaleString("en-US")),{int:f,decimal:H}},[x,D,g,c]),X=P.int,$=P.decimal,Z=G(V)?V:function(d,f){return f},q=R(Number(c)),K=s.exports.jsxDEV(s.exports.Fragment,{children:[h!=null?s.exports.jsxDEV("span",{className:m+"-value-prefix",children:h},void 0,!1,{fileName:v,lineNumber:133,columnNumber:52},this):null,Z(c,q?X:c)]},void 0,!0);return s.exports.jsxDEV("div",{...I({className:J(""+m,(a={},a[m+"-rtl"]=o,a),N),style:w},te(T,["value","countUp","countFrom","countDuration"]),{ref:_}),children:[b&&s.exports.jsxDEV("div",{className:m+"-title",children:b},void 0,!1,{fileName:v,lineNumber:136,columnNumber:18},this),s.exports.jsxDEV("div",{className:m+"-content",children:[s.exports.jsxDEV(ne,{animation:!0,loading:!!O,text:{rows:1,width:"100%"},children:s.exports.jsxDEV("div",{className:m+"-value",style:F,children:[q?s.exports.jsxDEV("span",{className:m+"-value-int",children:K},void 0,!1,{fileName:v,lineNumber:140,columnNumber:38},this):K,$!==void 0||S?s.exports.jsxDEV("span",{className:m+"-value-decimal",style:U,children:[R(Number(c))&&$!==void 0&&"."+$,S!=null?s.exports.jsxDEV("span",{className:m+"-value-suffix",children:S},void 0,!1,{fileName:v,lineNumber:143,columnNumber:68},this):null]},void 0,!0,{fileName:v,lineNumber:141,columnNumber:56},this):null]},void 0,!0,{fileName:v,lineNumber:139,columnNumber:17},this)},void 0,!1,{fileName:v,lineNumber:138,columnNumber:13},this),y&&s.exports.jsxDEV("div",{className:m+"-extra",children:y},void 0,!1,{fileName:v,lineNumber:144,columnNumber:22},this)]},void 0,!0,{fileName:v,lineNumber:137,columnNumber:9},this)]},void 0,!0,{fileName:v,lineNumber:135,columnNumber:13},this)}var ve=u.exports.forwardRef(de),k=ve;k.displayName="Statistic";k.Countdown=ue;var be=k;export{be as S};
