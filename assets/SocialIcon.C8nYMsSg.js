import{r as H}from"./index.B52nOzfP.js";var v={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=H,Z=Symbol.for("react.element"),V=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,W=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function f(s,t,n){var r,o={},i=null,d=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(d=t.ref);for(r in t)E.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Z,type:s,key:i,ref:d,props:o,_owner:W.current}}j.Fragment=V;j.jsx=f;j.jsxs=f;v.exports=j;var e=v.exports;let l=[],c=0;const x=4;let g=s=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(r){return n.lc=t.push(r),()=>{for(let i=c+x;i<l.length;)l[i]===r?l.splice(i,x):i+=x;let o=t.indexOf(r);~o&&(t.splice(o,1),--n.lc||n.off())}},notify(r,o){let i=!l.length;for(let d of t)l.push(d,n.value,r,o);if(i){for(c=0;c<l.length;c+=x)l[c](l[c+1],l[c+2],l[c+3]);l.length=0}},off(){},set(r){let o=n.value;o!==r&&(n.value=r,n.notify(o))},subscribe(r){let o=n.listen(r);return r(n.value),o},value:s};return n},L=(s={})=>{let t=g(s);return t.setKey=function(n,r){let o=t.value;typeof r>"u"&&n in t.value?(t.value={...t.value},delete t.value[n],t.notify(o,n)):t.value[n]!==r&&(t.value={...t.value,[n]:r},t.notify(o,n))},t};const I=()=>Date.now()+Math.random();let R=0;const A=()=>{const s=Date.now().toString(36),t=Math.random().toString(36).substring(2,8),n=(R++).toString(36);return`${s}-${n}-${t}`},$={IDnumber:I,IDstring:A};class D{constructor(){Object.defineProperty(this,"eventListeners",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"resizeListeners",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"handleDocumentClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{this.eventListeners.forEach(n=>n(t))}}),Object.defineProperty(this,"handleResize",{enumerable:!0,configurable:!0,writable:!0,value:t=>{this.resizeListeners.forEach(n=>n(t))}}),typeof window<"u"&&(document.addEventListener("click",this.handleDocumentClick),window.addEventListener("resize",this.handleResize))}OutsideClick(t,n,r){const o=i=>{n&&!n.contains(i.target)&&r()};this.eventListeners.set(t,o)}removeOutsideClick(t){this.eventListeners.delete(t)}Resize(t,n){this.resizeListeners.set(t,n)}removeResize(t){this.resizeListeners.delete(t)}clearAllEvents(){this.eventListeners.clear(),this.resizeListeners.clear()}destroy(){document.removeEventListener("click",this.handleDocumentClick),window.removeEventListener("resize",this.handleResize),this.clearAllEvents()}}const Y=new D,h=s=>{const t=document.documentElement,n=window.innerWidth-t.clientWidth,r=window.innerWidth<=700;s?(t.style.paddingRight="0px",t.setAttribute("data-scroll-state","false")):(!r&&n>0&&(t.style.paddingRight=`${n}px`),t.setAttribute("data-scroll-state","true"))},O=(s,t)=>{if(!t)return h(s);setTimeout(()=>{h(s)},t)},M={set:h,show:()=>h(!0),hide:()=>h(!1),delay:O},a=L([]),m=s=>{const t=a.get(),n=$.IDnumber();if(t.length>0){console.warn("An alert is already active. Please dismiss the existing dialog before opening a new one.");return}return a.set([...t,{...s,id:n,state:!0}]),M.hide(),n},S=s=>m({...s,state:!0}),z=s=>{const t=a.get();if(s){const r=t.map(o=>o.id===s?{...o,state:!1}:o);a.set([...r]);return}const n=t.map(r=>({...r,state:!1}));a.set([...n])},w=s=>{if(M.show(),s){const n=a.get().filter(r=>r.id!==s);a.set(n);return}a.set([])},P=(s,t)=>{setTimeout(()=>{w(s)},t||0)},N=(s,t)=>m({children:s,...t,state:!0}),X={show:S,remove:w,dismiss:z,removeDelay:P,custom:N},y=L({G_all:!1,G_fetch:!1}),u=(s,t)=>{y.setKey(s,t)},T=async(s,t)=>{const n=t?.id||"G_fetch";if(y.get()[n]){console.warn(`Promise for ${n} is already running.`);return}try{u(n,!0),t?.delayIn&&await new Promise(r=>setTimeout(r,t.delayIn)),await s()}catch(r){console.error(`Error in Loading.promise for ${n}:`,r)}finally{await new Promise(r=>setTimeout(()=>{u(n,!1),r()},t?.delayOut||0))}},e1={set:u,start:s=>u(s,!0),end:s=>u(s,!1),promise:T},F=typeof window<"u",b=g(F&&localStorage.getItem("F-Theme")||"system"),G=s=>{const t=b.get();if(t==="system"){const n=k();p(s,n?"light":"dark");return}p(s,t==="dark"?"light":"dark")},p=(s,t)=>{if(localStorage.setItem(s,t),b.set(t),t==="system"){const r=k();document.documentElement.classList[r?"add":"remove"]("dark"),document.documentElement.style.colorScheme=r?"dark":"light";return}const n=t==="dark";document.documentElement.classList[n?"add":"remove"]("dark"),document.documentElement.style.colorScheme=n?"dark":"light"},k=()=>window.matchMedia("(prefers-color-scheme: dark)").matches,Q=(s,t)=>{const n=s.target;n.classList.remove("light","dark"),n.classList.add(t)},U=s=>{s.classList.remove("light","dark")},t1={local:Q,remove:U,toggle:G,change:p,preferTheme:k},q={redirect:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 3h6v6"}),e.jsx("path",{d:"M10 14 21 3"}),e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),refresh:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 9.69494 20.1334 7.59227 18.7083 6L16 3M12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18L8 21M21 3H16M16 3V8M3 21H8M8 21V16","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),bell:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[e.jsx("path",{d:"M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),palette:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M15.5 8.5H15.51M10.5 7.5H10.51M7.5 11.5H7.51M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.6569 19.6569 15 18 15H17.4C17.0284 15 16.8426 15 16.6871 15.0246C15.8313 15.1602 15.1602 15.8313 15.0246 16.6871C15 16.8426 15 17.0284 15 17.4V18C15 19.6569 13.6569 21 12 21ZM16 8.5C16 8.77614 15.7761 9 15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5ZM11 7.5C11 7.77614 10.7761 8 10.5 8C10.2239 8 10 7.77614 10 7.5C10 7.22386 10.2239 7 10.5 7C10.7761 7 11 7.22386 11 7.5ZM8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),setting:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," ",e.jsx("path",{d:"M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),bookmark:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z","stroke-width":"2","stroke-linejoin":"round"})," "]})}),microphone:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),paperclip:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M19.8278 11.2437L12.7074 18.3641C10.7548 20.3167 7.58896 20.3167 5.63634 18.3641C3.68372 16.4114 3.68372 13.2456 5.63634 11.293L12.4717 4.45763C13.7735 3.15589 15.884 3.15589 17.1858 4.45763C18.4875 5.75938 18.4875 7.86993 17.1858 9.17168L10.3614 15.9961C9.71048 16.647 8.6552 16.647 8.00433 15.9961C7.35345 15.3452 7.35345 14.2899 8.00433 13.6391L14.2258 7.41762","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleClose:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M9 9L15 15M15 9L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleCheck:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[e.jsx("path",{d:"M8 12.3333L10.4615 15L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleDanger:e.jsx("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-4.373v5.5m0 3.246v-.5"})}),circleMinus:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circlePlus:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleArrow:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleInfo:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),circleQuestionMark:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M11.967 12.75C12.967 11.75 13.967 11.3546 13.967 10.25C13.967 9.14543 13.0716 8.25 11.967 8.25C11.0351 8.25 10.252 8.88739 10.03 9.75M11.967 15.75H11.977M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2","stroke-linecap":"round"})," "]})}),linkAlt:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5","stroke-width":"2","stroke-linecap":"round"})," "]})}),folder:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})}),turnOff:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13","stroke-width":"2","stroke-linecap":"round"})," "]})}),menu:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[e.jsx("path",{d:"M4 6H20M4 12H20M4 18H20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})}),heart:e.jsx("svg",{viewBox:"0 0 16 16",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"})," "]})}),dots3:e.jsx("svg",{viewBox:"0 0 24 24",stroke:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"})," ",e.jsx("path",{d:"M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"})," ",e.jsx("path",{d:"M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"})," "]})}),dotsGrid:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})}),infosquare:e.jsxs("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"}),e.jsx("path",{d:"M12 16v-5h-.5m0 5h1M12 8.5V8"})]}),image:e.jsxs("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6.5 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14.427 1.99c-6.61-.908-12.31 4-11.927 10.51"}),e.jsx("path",{d:"M3 13.066c2.78-.385 5.275.958 6.624 3.1"}),e.jsx("path",{d:"M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"})]}),search:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"})," "]})}),star:e.jsx("svg",{stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12.854 3.5a.979.979 0 0 0-1.708 0 26.978 26.978 0 0 0-2.057 4.762c-.139.431-.551.73-1.023.743a29.398 29.398 0 0 0-4.267.425c-.774.136-1.065 1.018-.515 1.556a31.484 31.484 0 0 0 3.41 2.892c.367.269.518.73.378 1.152a26.807 26.807 0 0 0-1.14 4.927c-.1.755.708 1.288 1.41.928a28.593 28.593 0 0 0 3.98-2.472 1.148 1.148 0 0 1 1.356 0 28.505 28.505 0 0 0 3.98 2.472c.701.36 1.51-.173 1.41-.928a26.81 26.81 0 0 0-1.14-4.928c-.14-.42.01-.882.378-1.151a31.497 31.497 0 0 0 3.41-2.892c.55-.538.26-1.42-.515-1.556a29.046 29.046 0 0 0-4.267-.425 1.097 1.097 0 0 1-1.023-.743 26.982 26.982 0 0 0-2.057-4.761"})}),arrow:e.jsx("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m18 15-6-6-6 6"})}),arrowLarge:e.jsx("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 19.5v-15m0 0-6 5.625M12 4.5l6 5.625"})}),upload:e.jsx("svg",{fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M4 16.004V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-8-.5v-11M15.5 8 12 4.5 8.5 8"})}),pumpkinHallowen:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[" ",e.jsx("path",{d:"M7 10L9.5 11L8.5 12M16.5 10L14 11L15 12M7 15L8 16.5L9.5 15.5L10.5 17L12 15.5L13.5 17L14.5 15.5L16 16.5L17 15M14 6.42676V4.30278C14 3.58327 13.4167 3 12.6972 3C12.2616 3 11.8549 3.2177 11.6132 3.58013L9.7778 6.3347M14 6.42676C14.6256 6.15039 15.2987 6 16 6C19.3137 6 22 9.35786 22 13.5C22 17.6421 19.3137 21 16 21C15.2987 21 14.6256 20.8496 14 20.5732C13.3744 20.8496 12.7013 21 12 21C11.2987 21 10.6256 20.8496 10 20.5732C9.37444 20.8496 8.70127 21 8 21C4.68629 21 2 17.6421 2 13.5C2 9.35786 4.68629 6 8 6C8.70127 6 9.37444 6.15039 10 6.42676C10.6256 6.15039 11.2987 6 12 6C12.7013 6 13.3744 6.15039 14 6.42676Z","stroke-width":"1.56","stroke-linecap":"round","stroke-linejoin":"round"})," "]})})};function n1({icon:s="linkedin",size:t=24,style:n,stroke:r,fill:o,className:i,funct:d=()=>console.log("No function")}){const C=q[s]||null;return e.jsx("span",{className:`icon ${i||"pointer"}`,style:{...n,height:t,width:t,stroke:r,fill:o,display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:d,children:C||e.jsx("span",{className:"btn btn-third fs-2",children:"None"})})}const K={github:e.jsx("svg",{viewBox:"0 0 16 16",stroke:"none",children:e.jsx("g",{children:e.jsx("path",{fillRule:"evenodd",d:"M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z",clipRule:"evenodd"})})}),linkedin:e.jsx("svg",{viewBox:"0 0 24 24",stroke:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsxs("g",{children:[e.jsx("path",{d:"M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"}),e.jsx("path",{d:"M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"}),e.jsx("path",{d:"M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"})]})}),discord:e.jsx("svg",{stroke:"none",viewBox:"0 0 32 32",children:e.jsxs("g",{children:[e.jsx("path",{d:"M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"})," "]})}),email:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:e.jsxs("g",{children:[e.jsx("path",{d:"M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2",strokeWidth:"2",strokeLinecap:"round"})]})})};function s1({icon:s="linkedin",size:t=24,style:n,stroke:r,fill:o,className:i,funct:d=()=>console.log("No function")}){const C=K[s]||null;return e.jsx("span",{className:`icon ${i||"pointer"}`,style:{...n,height:t,width:t,stroke:r,fill:o,display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:d,children:C||e.jsx("span",{className:"btn btn-third fs-2",children:"None"})})}export{a as $,X as A,t1 as D,Y as E,$ as F,n1 as I,e1 as L,s1 as S,y as a,b,g as c,e as j,L as m};
