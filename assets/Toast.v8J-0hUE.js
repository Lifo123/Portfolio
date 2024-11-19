import{$ as d,T as f,L as x}from"./ToastAssets.LrJY-75u.js";import{j as t}from"./Alert.Store.DMJPT_ah.js";import{R as a}from"./index.B52nOzfP.js";import{u as h}from"./index.DcIy302Z.js";import{B as T}from"./ButtonPromise.Bi0WOfU1.js";import{C as j}from"./CloseBtn.Cfbmu-64.js";function E({id:e="init",position:m="bottom-center",duration:l=2250,animate:n="normal",maxToasts:c=3,parent:u}){const o=h(d);if(a.useEffect(()=>{document.querySelectorAll('[data-toaster-id="init"]').length>1&&console.warn(`Toaster with id "${e}" already exists. Skipping render.`)},[e]),!o[e])return null;const i=o[e].slice(-c-1);return t.jsx("section",{className:`toaster-container ${u?"absolute":"fixed"} h-100 w-100`,"data-toaster-id":e,children:i&&i.map((s,r)=>t.jsx(b,{...s,duration:s.duration||l,position:s.position||m,animate:s.animate||n,closeBtn:s.closeBtn,state:!(r===0&&i.length>c)},s.id))})}const b=e=>{const[m,l]=a.useState(!1),[n,c]=a.useState(!1),[u,o]=a.useState(!1),i=async()=>{l(!1),setTimeout(()=>{e.toastID&&e.id!==void 0&&e.duration!==void 0&&(x.removeKey(e.toastID,e.id),c(!0))},300)};return a.useEffect(()=>{const s=setTimeout(()=>l(!0),10);return()=>clearTimeout(s)},[]),a.useEffect(()=>{if(n)return;const s=setTimeout(()=>{u||i()},e.duration);return()=>clearTimeout(s)},[u,e.duration,n]),a.useEffect(()=>{e.state||setTimeout(()=>{i()},50)},[e.state]),n?null:e?.children&&t.jsx("span",{className:"d-flex",style:{pointerEvents:"visible"},children:e.children})||t.jsxs("span",{className:`toast-row f-row f-justify-between f-align-center absolute br-6 sd-1 ${m?"visible":"delete"} ${e.animate} ${e.className||""}`,"data-position":e.position,"data-axis-y":e.position?.split("-")[0],"data-axis-x":e.position?.split("-")[1],"data-animate":e?.animate,style:{...e.style,zIndex:e.id},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[t.jsxs("div",{className:"f-row g-1",children:[e.customIcon||e.icon||e.type&&t.jsx("span",{className:"toast-icon mr-2 d-flex f-center",children:e.customIcon?e.customIcon:f[e.icon||e.type]}),t.jsxs("div",{className:"f-col g-1 f-justify-center",children:[e.title&&t.jsx("h3",{className:"fs-2",children:e?.title}),t.jsx("p",{className:"fs-custom-13-5 m-0",children:e?.message}),e.link&&t.jsx("a",{className:"info fs-2 br-6 w-max",href:e.link,children:"More"})]})]}),e.action?t.jsx(T,{text:e.actionText||"Continue",funct:async()=>{await e.action(),i()}}):e.closeBtn?t.jsx("span",{className:"ml-3 d-block",onClick:()=>{i()},children:t.jsx(j,{size:24})}):null]})};export{E as Toaster};
