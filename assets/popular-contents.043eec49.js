import{u as g,r as o,af as v,j as t,aj as u,f as y,g as w,a3 as j}from"./index.295caa00.js";/* empty css              */import{T as k}from"./index.1ba7cba6.js";import{C as D}from"./index.d0e2df9e.js";import{i as E}from"./index.9464998a.js";import{R as V}from"./radio.d5ff39d6.js";import"./b-tween.es.d368a2a1.js";const C="_symbol_coctx_1";var S={symbol:C},a="/Users/xuwenhua/code/project/home-manage/src/pages/dashboard/workplace/popular-contents.tsx";function R(){const r=g(E),[l,m]=o.exports.useState(0),[c,p]=o.exports.useState([]),[d,i]=o.exports.useState(!0),[s,x]=o.exports.useState(1),[b,f]=o.exports.useState(0),n=o.exports.useCallback(()=>{i(!0),v.get(`/api/workplace/popular-contents?page=${s}&pageSize=5&category=${l}`).then(e=>{p(e.data.list),f(e.data.total)}).finally(()=>{i(!1)})},[s,l]);o.exports.useEffect(()=>{n()},[s,n]);const N=[{title:r["workplace.column.rank"],dataIndex:"rank",width:65},{title:r["workplace.column.title"],dataIndex:"title",render:e=>t.exports.jsxDEV(u.Paragraph,{style:{margin:0},ellipsis:!0,children:e},void 0,!1,{fileName:a,lineNumber:46,columnNumber:9},this)},{title:r["workplace.column.pv"],dataIndex:"pv",width:100,render:e=>`${e/1e3}k`},{title:r["workplace.column.increase"],dataIndex:"increase",sorter:(e,h)=>e.increase-h.increase,width:110,render:e=>t.exports.jsxDEV("span",{children:[`${(e*100).toFixed(2)}%`,t.exports.jsxDEV("span",{className:S.symbol,children:e<0?t.exports.jsxDEV(y,{style:{color:"rgb(var(--green-6))"}},void 0,!1,{fileName:a,lineNumber:70,columnNumber:17},this):t.exports.jsxDEV(w,{style:{color:"rgb(var(--red-6))"}},void 0,!1,{fileName:a,lineNumber:72,columnNumber:17},this)},void 0,!1,{fileName:a,lineNumber:68,columnNumber:13},this)]},void 0,!0,{fileName:a,lineNumber:66,columnNumber:11},this)}];return t.exports.jsxDEV(D,{children:[t.exports.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.exports.jsxDEV(u.Title,{heading:6,children:r["workplace.popularContents"]},void 0,!1,{fileName:a,lineNumber:84,columnNumber:9},this),t.exports.jsxDEV(j,{children:r["workplace.seeMore"]},void 0,!1,{fileName:a,lineNumber:87,columnNumber:9},this)]},void 0,!0,{fileName:a,lineNumber:83,columnNumber:7},this),t.exports.jsxDEV(V.Group,{type:"button",value:l,onChange:m,options:[{label:r["workplace.text"],value:0},{label:r["workplace.image"],value:1},{label:r["workplace.video"],value:2}],style:{marginBottom:16}},void 0,!1,{fileName:a,lineNumber:89,columnNumber:7},this),t.exports.jsxDEV(k,{rowKey:"rank",columns:N,data:c,loading:d,tableLayoutFixed:!0,onChange:e=>{x(e.current)},pagination:{total:b,current:s,pageSize:5,simple:!0}},void 0,!1,{fileName:a,lineNumber:100,columnNumber:7},this)]},void 0,!0,{fileName:a,lineNumber:82,columnNumber:5},this)}export{R as default};
