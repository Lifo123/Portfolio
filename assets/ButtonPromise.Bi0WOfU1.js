import{j as s,$ as c,L as m}from"./Alert.Store.DMJPT_ah.js";import{u as p}from"./index.DcIy302Z.js";function h({id:e="G_fetch",text:a,className:n,style:o,stroke:i,funct:r}){const t=p(c),l=async()=>{r&&m.promise(r,{id:e,delayOut:20})};return s.jsxs("span",{className:`btn-promise f-row f-center btn br-6 relative ${n||"btn-third"}`,onClick:l,style:o,"data-btn-promise":e,children:[t[e]&&s.jsx("span",{className:"lb-loading-indicator absolute",children:s.jsx("span",{className:"lb-circular-root",style:{height:20},children:s.jsx("svg",{viewBox:"22 22 44 44",stroke:i||"rgb(var(--lb-black))",children:s.jsx("circle",{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"4"})})})}),s.jsx("p",{className:`m-0 opacity-${t[e]&&"0"}`,children:a||"Button"})]})}export{h as B};
