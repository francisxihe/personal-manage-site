import{r as u,j as s,a8 as d,I as g}from"./index.295caa00.js";import{X as N}from"./x.aabcad2e.js";var r="/Users/xuwenhua/code/project/home-manage/src/pages/todo/components/TagInput.tsx";function j({value:t,onChange:i,placeholder:p}){t||(t=[]);const[o,a]=u.exports.useState(""),l=u.exports.useRef(null),f=e=>{e.key==="Enter"||e.key===","?(e.preventDefault(),c()):e.key==="Backspace"&&!o&&t.length>0&&m(t.length-1)},c=()=>{const e=o.trim();e&&!t.includes(e)&&(i([...t,e]),a(""))},m=e=>{i(t.filter((n,x)=>x!==e))};return s.exports.jsxDEV("div",{className:"flex flex-wrap gap-2 p-2 border rounded-md bg-bg-1",onClick:()=>{var e;return(e=l.current)==null?void 0:e.focus()},children:[t.map((e,n)=>s.exports.jsxDEV(d,{className:"flex items-center gap-1",children:[e,s.exports.jsxDEV(N,{className:"h-3 w-3 cursor-pointer hover:text-destructive",onClick:()=>m(n)},void 0,!1,{fileName:r,lineNumber:49,columnNumber:11},this)]},n,!0,{fileName:r,lineNumber:47,columnNumber:9},this)),s.exports.jsxDEV(g,{ref:l,type:"text",value:o,onChange:e=>a(e),onKeyDown:f,onBlur:c,className:"flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0",placeholder:t.length===0?p:""},void 0,!1,{fileName:r,lineNumber:55,columnNumber:7},this)]},void 0,!0,{fileName:r,lineNumber:42,columnNumber:5},this)}export{j as T};
