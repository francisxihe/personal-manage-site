import{r as R,e as $,j as l,ab as G,Z as L,C as M,x as W,G as Z,a as O}from"./index.295caa00.js";var c="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/es/Steps/step.js";function q(e,m){var i,u=e.style,d=e.className,r=e.prefixCls,g=e.index,t=g===void 0?1:g,C=e.current,f=C===void 0?1:C,_=e.status,p=e.title,v=e.description,x=e.icon,y=e.nextStepError,s=e.type,j=e.customDot,D=e.labelPlacement,S=e.disabled,E=e.onClick,b=e.onChange,n=e.direction,N=e.id,h=e.lineless;function k(P){if(s==="dot")return null;var V=t;return x?V=x:P==="finish"?V=l.exports.jsxDEV(G,{},void 0,!1,{fileName:c,lineNumber:17,columnNumber:23},this):P==="error"&&(V=l.exports.jsxDEV(L,{},void 0,!1,{fileName:c,lineNumber:20,columnNumber:23},this)),l.exports.jsxDEV("div",{className:r+"-icon",children:V},void 0,!1,{fileName:c,lineNumber:22,columnNumber:16},this)}function o(P){S||(b&&f!==t&&b(t,N),E&&E(t,N,P))}var a;_?a=_:(f<t&&(a="wait"),f===t&&(a="process"),f>t&&(a="finish"));var w=$(r+"-item",r+"-item-"+a,(i={},i[r+"-item-custom"]=!!x,i[r+"-item-next-error"]=y,i[r+"-item-disabled"]=S,i[r+"-item-active"]=t===f,i),d),T=k(a),I=l.exports.jsxDEV("div",{className:r+"-item-icon",children:T},void 0,!1,{fileName:c,lineNumber:54,columnNumber:27},this),U=j?j(I,{index:t,status:a,title:p,description:v}):I;return l.exports.jsxDEV("div",{ref:m,className:w,style:u,onClick:o,children:[!h&&(D==="vertical"||n==="vertical")&&l.exports.jsxDEV("div",{className:r+"-item-tail"},void 0,!1,{fileName:c,lineNumber:64,columnNumber:86},this),s!=="arrow"&&U,l.exports.jsxDEV("div",{className:r+"-item-content",children:[l.exports.jsxDEV("div",{className:r+"-item-title",children:p},void 0,!1,{fileName:c,lineNumber:67,columnNumber:13},this),v&&l.exports.jsxDEV("div",{className:r+"-item-description",children:v},void 0,!1,{fileName:c,lineNumber:68,columnNumber:28},this)]},void 0,!0,{fileName:c,lineNumber:66,columnNumber:9},this)]},void 0,!0,{fileName:c,lineNumber:63,columnNumber:13},this)}var A=R.exports.forwardRef(q);A.displayName="Step";var B=A,H="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/es/Steps/index.js",z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(e){for(var m,i=1,u=arguments.length;i<u;i++){m=arguments[i];for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&(e[d]=m[d])}return e},z.apply(this,arguments)},J={current:1,type:"default",size:"default",direction:"horizontal",labelPlacement:"horizontal"};function K(e,m){var i,u=R.exports.useContext(M),d=u.getPrefixCls,r=u.componentConfig,g=u.rtl,t=W(e,J,r==null?void 0:r.Steps),C=t.className,f=t.style,_=t.children,p=t.current,v=p===void 0?1:p,x=t.status,y=t.onChange,s=t.type,j=t.size,D=t.direction,S=t.labelPlacement,E=t.customDot,b=t.lineless,n=d("steps"),N=S;s==="dot"&&(N=D==="vertical"?"horizontal":"vertical"),s==="navigation"&&(N="horizontal");var h=D;(s==="navigation"||s==="arrow")&&(h="horizontal");var k=$(n,n+"-"+h,n+"-label-"+N,n+"-size-"+j,(i={},i[n+"-change-onclick"]=typeof y=="function",i[n+"-mode-"+s]=s!=="default",i[n+"-lineless"]=b,i[n+"-rtl"]=g,i),C);return l.exports.jsxDEV("div",{...z({ref:m,style:f,className:k},Z(t)),children:O.Children.toArray(_).filter(function(o){return o&&o.type&&o.type.displayName==="Step"}).map(function(o,a){if(a+=1,o){var w=z({prefixCls:n,type:s,index:a,current:v,status:v===a?x:void 0,customDot:E,labelPlacement:N,direction:h,onChange:y,lineless:b},o.props);return x==="error"&&v===a+1&&(w.nextStepError=!0),O.cloneElement(o,w)}return null})},void 0,!1,{fileName:H,lineNumber:48,columnNumber:13},this)}var Q=R.exports.forwardRef(K),F=Q;F.displayName="Steps";F.Step=B;var Y=F;export{Y as S};
