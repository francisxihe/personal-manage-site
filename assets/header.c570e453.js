import{a as g,r as D,b as O,j as s,_ as w,S as N,ap as E,bf as y}from"./index.295caa00.js";import{S as x}from"./index.df914e5e.js";import{s as c}from"./index.module.c0778cea.js";import{I as V}from"./index.fa059fad.js";var u="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/icon/react-icon/IconHome/index.js";function b(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function h(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?b(Object(r),!0).forEach(function(e){w(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _(t,o){var r=D.exports.useContext(O),e=r.prefixCls,i=e===void 0?"arco":e,m=t.spin,l=t.className,a=h(h({"aria-hidden":!0,focusable:!1,ref:o},t),{},{className:"".concat(l?l+" ":"").concat(i,"-icon ").concat(i,"-icon-home")});return m&&(a.className="".concat(a.className," ").concat(i,"-icon-loading")),delete a.spin,delete a.isIcon,s.exports.jsxDEV("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:[s.exports.jsxDEV("path",{d:"M7 17 24 7l17 10v24H7V17Z"},void 0,!1,{fileName:u,lineNumber:38,columnNumber:27},this),s.exports.jsxDEV("path",{d:"M20 28h8v13h-8V28Z"},void 0,!1,{fileName:u,lineNumber:40,columnNumber:20},this)]},void 0,!0,{fileName:u,lineNumber:33,columnNumber:23},this)}var f=g.forwardRef(_);f.defaultProps={isIcon:!0};f.displayName="IconHome";var I=f,d="/Users/xuwenhua/code/project/home-manage/node_modules/.pnpm/@arco-design+web-react@2.64.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@arco-design/web-react/icon/react-icon/IconLocation/index.js";function v(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function j(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?v(Object(r),!0).forEach(function(e){w(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function C(t,o){var r=D.exports.useContext(O),e=r.prefixCls,i=e===void 0?"arco":e,m=t.spin,l=t.className,a=j(j({"aria-hidden":!0,focusable:!1,ref:o},t),{},{className:"".concat(l?l+" ":"").concat(i,"-icon ").concat(i,"-icon-location")});return m&&(a.className="".concat(a.className," ").concat(i,"-icon-loading")),delete a.spin,delete a.isIcon,s.exports.jsxDEV("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:[s.exports.jsxDEV("circle",{cx:"24",cy:"19",r:"5"},void 0,!1,{fileName:d,lineNumber:38,columnNumber:27},this),s.exports.jsxDEV("path",{d:"M39 20.405C39 28.914 24 43 24 43S9 28.914 9 20.405C9 11.897 15.716 5 24 5c8.284 0 15 6.897 15 15.405Z"},void 0,!1,{fileName:d,lineNumber:42,columnNumber:20},this)]},void 0,!0,{fileName:d,lineNumber:33,columnNumber:23},this)}var p=g.forwardRef(C);p.defaultProps={isIcon:!0};p.displayName="IconLocation";var P=p,n="/Users/xuwenhua/code/project/home-manage/src/pages/user/info/header.tsx";function L(t){const{userInfo:o={},loading:r}=t,e=s.exports.jsxDEV(x,{text:{rows:1,style:{width:"100px",height:"20px",marginBottom:"-4px"},width:["100%"]},animation:!0},void 0,!1,{fileName:n,lineNumber:26,columnNumber:5},this),i=s.exports.jsxDEV(x,{text:{rows:0},image:{style:{width:"64px",height:"64px"},shape:"circle"},animation:!0},void 0,!1,{fileName:n,lineNumber:36,columnNumber:5},this);return s.exports.jsxDEV("div",{className:c.header,children:s.exports.jsxDEV(N,{size:8,direction:"vertical",align:"center",className:c["header-content"],children:[r?i:s.exports.jsxDEV(E,{size:64,triggerIcon:s.exports.jsxDEV(V,{},void 0,!1,{fileName:n,lineNumber:53,columnNumber:42},this),children:s.exports.jsxDEV("img",{src:o.avatar},void 0,!1,{fileName:n,lineNumber:54,columnNumber:13},this)},void 0,!1,{fileName:n,lineNumber:53,columnNumber:11},this),s.exports.jsxDEV("div",{className:c.username,children:r?e:o.name},void 0,!1,{fileName:n,lineNumber:57,columnNumber:9},this),s.exports.jsxDEV("div",{className:c["user-msg"],children:s.exports.jsxDEV(N,{size:18,children:[s.exports.jsxDEV("div",{children:[s.exports.jsxDEV(y,{},void 0,!1,{fileName:n,lineNumber:63,columnNumber:15},this),s.exports.jsxDEV("span",{className:c["user-msg-text"],children:r?e:o.jobName},void 0,!1,{fileName:n,lineNumber:64,columnNumber:15},this)]},void 0,!0,{fileName:n,lineNumber:62,columnNumber:13},this),s.exports.jsxDEV("div",{children:[s.exports.jsxDEV(I,{},void 0,!1,{fileName:n,lineNumber:69,columnNumber:15},this),s.exports.jsxDEV("span",{className:c["user-msg-text"],children:r?e:o.organizationName},void 0,!1,{fileName:n,lineNumber:70,columnNumber:15},this)]},void 0,!0,{fileName:n,lineNumber:68,columnNumber:13},this),s.exports.jsxDEV("div",{children:[s.exports.jsxDEV(P,{},void 0,!1,{fileName:n,lineNumber:75,columnNumber:15},this),s.exports.jsxDEV("span",{className:c["user-msg-text"],children:r?e:o.locationName},void 0,!1,{fileName:n,lineNumber:76,columnNumber:15},this)]},void 0,!0,{fileName:n,lineNumber:74,columnNumber:13},this)]},void 0,!0,{fileName:n,lineNumber:61,columnNumber:11},this)},void 0,!1,{fileName:n,lineNumber:60,columnNumber:9},this)]},void 0,!0,{fileName:n,lineNumber:44,columnNumber:7},this)},void 0,!1,{fileName:n,lineNumber:43,columnNumber:5},this)}export{L as default};
