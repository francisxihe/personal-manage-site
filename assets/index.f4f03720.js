import{r as f,j as e,B as r}from"./index.295caa00.js";var u="/Users/xuwenhua/code/project/home-manage/src/pages/ai/media/index.tsx";function N(){let o;const[a,l]=f.exports.useState([]);function c(){navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>{o=new MediaRecorder(i),o.start(),o.ondataavailable=t=>{l(n=>[...n,t.data])}}).catch(i=>{console.error("\u83B7\u53D6\u9EA6\u514B\u98CE\u6743\u9650\u5931\u8D25:",i)})}function s(){o.stop()}function d(){o.stop()}function m(){const i=new Blob(a,{type:"audio/webm"}),t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download="recording.webm",n.click()}function h(){l([])}return e.exports.jsxDEV("div",{children:[e.exports.jsxDEV(r,{onClick:c,children:"\u5F00\u59CB\u5F55\u97F3"},void 0,!1,{fileName:u,lineNumber:49,columnNumber:7},this),e.exports.jsxDEV(r,{onClick:s,children:"\u505C\u6B62\u5F55\u97F3"},void 0,!1,{fileName:u,lineNumber:50,columnNumber:7},this),e.exports.jsxDEV(r,{onClick:d,children:"\u53D6\u6D88\u5F55\u97F3"},void 0,!1,{fileName:u,lineNumber:51,columnNumber:7},this),e.exports.jsxDEV(r,{onClick:m,children:["\u4E0B\u8F7D\u5F55\u97F3 ",a.length]},void 0,!0,{fileName:u,lineNumber:52,columnNumber:7},this),e.exports.jsxDEV(r,{onClick:h,children:"\u6E05\u7A7A\u97F3\u9891\u5757"},void 0,!1,{fileName:u,lineNumber:55,columnNumber:7},this)]},void 0,!0,{fileName:u,lineNumber:48,columnNumber:5},this)}export{N as default};
