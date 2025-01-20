import{am as h,an as s,a4 as v,u as j,r as n,j as u,U as r,I as g,aj as y,af as V,Y as L}from"./index.295caa00.js";import{C as R}from"./index.d0e2df9e.js";import{l as q,C as T}from"./card-block.8338aafe.js";import{s as o}from"./index.module.27984758.js";import k from"./card-add.c66fcd65.js";import"./index.df914e5e.js";import"./index.32f11c60.js";import"./index.e1783cec.js";import"./index.215c31ce.js";const w=["\u89C6\u9891\u7C7B","\u56FE\u6587\u7C7B","\u7EAF\u6587\u672C"],S=["\u5386\u53F2\u5BFC\u5165","\u5185\u5BB9\u7248\u6743","\u654F\u611F\u5185\u5BB9","\u5546\u4E1A\u54C1\u724C"],E=["\u6F0F\u6597\u5206\u6790","\u7528\u6237\u5206\u5E03","\u8D44\u6E90\u5206\u53D1","\u7528\u6237\u753B\u50CF\u5206\u6790","\u4E8B\u4EF6\u5206\u6790"],Y=["\u7528\u6237\u884C\u4E3A\u5206\u6790\u4E4B\u6F0F\u6597\u5206\u6790\u6A21\u578B\u662F\u4F01\u4E1A\u5B9E\u73B0\u7CBE\u7EC6\u5316\u8FD0\u8425\u3001\u8FDB\u884C\u7528\u6237\u884C\u4E3A\u5206\u6790\u7684\u91CD\u8981\u6570\u636E\u5206\u6790\u6A21\u578B\u3002 ","\u5FEB\u901F\u8BCA\u65AD\u7528\u6237\u4EBA\u7FA4\uFF0C\u5730\u57DF\u7EC6\u5206\u60C5\u51B5\uFF0C\u4E86\u89E3\u6570\u636E\u5206\u5E03\u7684\u96C6\u4E2D\u5EA6\uFF0C\u4EE5\u53CA\u4E3B\u8981\u7684\u6570\u636E\u5206\u5E03\u7684\u533A\u95F4\u6BB5\u662F\u4EC0\u4E48\u3002","\u79FB\u52A8\u7AEF\u52A8\u6001\u5316\u8D44\u6E90\u5206\u53D1\u89E3\u51B3\u65B9\u6848\u3002\u63D0\u4F9B\u7A33\u5B9A\u5927\u6D41\u91CF\u670D\u52A1\u652F\u6301\u3001\u7075\u6D3B\u5B9A\u5236\u7684\u5206\u53D1\u5708\u9009\u89C4\u5219\uFF0C\u901A\u8FC7\u79BB\u7EBF\u5316\u9884\u52A0\u8F7D\u3002  ","\u7528\u6237\u753B\u50CF\u5C31\u662F\u5C06\u5178\u578B\u7528\u6237\u4FE1\u606F\u6807\u7B7E\u5316\uFF0C\u6839\u636E\u7528\u6237\u7279\u5F81\u3001\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u884C\u4E3A\u7B49\u4FE1\u606F\uFF0C\u6784\u5EFA\u4E00\u4E2A\u6807\u7B7E\u5316\u7684\u7528\u6237\u6A21\u578B\u3002 ","\u4E8B\u4EF6\u5206\u6790\u5373\u53EF\u8FDB\u884C\u7B5B\u9009\u3001\u5206\u7EC4\u3001\u805A\u5408\u7684\u7075\u6D3B\u591A\u7EF4\u6570\u636E\u5206\u6790\u3002\u8BE6\u60C5\u8BF7\u70B9\u51FB\u5361\u7247\u3002"],F=["\u5185\u5BB9\u5C4F\u853D\u89C4\u5219","\u5185\u5BB9\u7F6E\u9876\u89C4\u5219","\u5185\u5BB9\u52A0\u6743\u89C4\u5219","\u5185\u5BB9\u5206\u53D1\u89C4\u5219","\u591A\u8BED\u8A00\u6587\u5B57\u7B26\u53F7\u8BC6\u522B"],M=["\u7528\u6237\u5728\u6267\u884C\u7279\u5B9A\u7684\u5185\u5BB9\u5206\u53D1\u4EFB\u52A1\u65F6\uFF0C\u53EF\u4F7F\u7528\u5185\u5BB9\u5C4F\u853D\u89C4\u5219\u6839\u636E\u7279\u5B9A\u6807\u7B7E\uFF0C\u8FC7\u6EE4\u5185\u5BB9\u96C6\u5408\u3002  ","\u8BE5\u89C4\u5219\u652F\u6301\u7528\u6237\u5728\u6267\u884C\u7279\u5B9A\u5185\u5BB9\u5206\u53D1\u4EFB\u52A1\u65F6\uFF0C\u5BF9\u56FA\u5B9A\u7684\u51E0\u6761\u5185\u5BB9\u7F6E\u9876\u3002","\u9009\u5B9A\u5185\u5BB9\u52A0\u6743\u89C4\u5219\u540E\u53EF\u81EA\u5B9A\u4E49\u4ECE\u4E0D\u540C\u5185\u5BB9\u96C6\u5408\u83B7\u53D6\u5185\u5BB9\u7684\u6982\u7387\u3002","\u5185\u5BB9\u5206\u53D1\u65F6\uFF0C\u5BF9\u67D0\u4E9B\u5185\u5BB9\u9700\u8981\u56FA\u5B9A\u5728C\u7AEF\u5C55\u793A\u7684\u4F4D\u7F6E\u3002","\u7CBE\u51C6\u8BC6\u522B\u82F1\u8BED\u3001\u7EF4\u8BED\u3001\u85CF\u8BED\u3001\u8499\u53E4\u8BED\u3001\u671D\u9C9C\u8BED\u7B49\u591A\u79CD\u8BED\u8A00\u4EE5\u53CAemoji\u8868\u60C5\u5F62\u6001\u7684\u8BED\u4E49\u8BC6\u522B\u3002"],P=()=>{const{list:t}=s.mock({"list|10":[{title:()=>`${s.Random.pick(w)}-${s.Random.pick(S)}`,time:()=>v().subtract(s.Random.natural(0,30),"days").format("YYYY-MM-DD HH:mm:ss"),qualityCount:()=>s.Random.natural(100,500),randomCount:()=>s.Random.natural(0,100),duration:()=>s.Random.natural(0,200)}]});return t},$=()=>{const{list:t}=s.mock({"list|10":[{icon:()=>s.Random.natural(0,E.length-1),title:function(){return E[this.icon]},description:function(){return Y[this.icon]},status:()=>s.Random.natural(0,2)}]});return t},H=()=>{const{list:t}=s.mock({"list|10":[{index:()=>s.Random.natural(0,F.length-1),title:function(){return F[this.index]},description:function(){return M[this.index]},status:()=>s.Random.natural(0,1)}]});return t};h({setup:()=>{s.mock(new RegExp("/api/cardList"),()=>({quality:P(),service:$(),rules:H()}))}});var e="/Users/xuwenhua/code/project/home-manage/src/pages/list/card/index.tsx";const{Title:d}=y,{Row:I,Col:C}=L,m=new Array(10).fill({});function X(){const t=j(q),[D,x]=n.exports.useState(!0),[c,N]=n.exports.useState({quality:m,service:m,rules:m}),[i,A]=n.exports.useState("all"),p=()=>{V.get("/api/cardList").then(a=>{N(a.data)}).finally(()=>x(!1))};n.exports.useEffect(()=>{p()},[]);const B=(a,l)=>u.exports.jsxDEV(I,{gutter:24,className:o["card-content"],children:[l==="quality"&&u.exports.jsxDEV(C,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:6,children:u.exports.jsxDEV(k,{description:t["cardList.add.quality"]},void 0,!1,{fileName:e,lineNumber:48,columnNumber:13},this)},void 0,!1,{fileName:e,lineNumber:47,columnNumber:11},this),a.map((f,b)=>u.exports.jsxDEV(C,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:6,children:u.exports.jsxDEV(T,{card:f,type:l,loading:D},void 0,!1,{fileName:e,lineNumber:53,columnNumber:13},this)},b,!1,{fileName:e,lineNumber:52,columnNumber:11},this))]},void 0,!0,{fileName:e,lineNumber:45,columnNumber:7},this);return u.exports.jsxDEV(R,{children:[u.exports.jsxDEV(d,{heading:6,children:t["menu.list.card"]},void 0,!1,{fileName:e,lineNumber:62,columnNumber:7},this),u.exports.jsxDEV(r,{activeTab:i,type:"rounded",onChange:A,extra:u.exports.jsxDEV(g.Search,{style:{width:"240px"},placeholder:t[`cardList.tab.${i}.placeholder`]},void 0,!1,{fileName:e,lineNumber:68,columnNumber:11},this),children:[u.exports.jsxDEV(r.TabPane,{title:t["cardList.tab.title.all"]},"all",!1,{fileName:e,lineNumber:74,columnNumber:9},this),u.exports.jsxDEV(r.TabPane,{title:t["cardList.tab.title.quality"]},"quality",!1,{fileName:e,lineNumber:75,columnNumber:9},this),u.exports.jsxDEV(r.TabPane,{title:t["cardList.tab.title.service"]},"service",!1,{fileName:e,lineNumber:76,columnNumber:9},this),u.exports.jsxDEV(r.TabPane,{title:t["cardList.tab.title.rules"]},"rules",!1,{fileName:e,lineNumber:77,columnNumber:9},this)]},void 0,!0,{fileName:e,lineNumber:63,columnNumber:7},this),u.exports.jsxDEV("div",{className:o.container,children:i==="all"?Object.entries(c).map(([a,l])=>u.exports.jsxDEV("div",{children:[u.exports.jsxDEV(d,{heading:6,children:t[`cardList.tab.title.${a}`]},void 0,!1,{fileName:e,lineNumber:83,columnNumber:15},this),B(l,a)]},a,!0,{fileName:e,lineNumber:82,columnNumber:13},this)):u.exports.jsxDEV("div",{className:o["single-content"],children:B(c[i],i)},void 0,!1,{fileName:e,lineNumber:88,columnNumber:11},this)},void 0,!1,{fileName:e,lineNumber:79,columnNumber:7},this)]},void 0,!0,{fileName:e,lineNumber:61,columnNumber:5},this)}export{X as default};
