import{j as s}from"./jsx-runtime.D5qyYPMi.js";import{r as n}from"./index.CZlPm10g.js";function e({className:r}){return s.jsx("span",{className:`d-flex skeleton ${r}`})}function m({max:r}){const[a,j]=n.useState({});return n.useEffect(()=>{(async()=>{const t=await(await fetch("https://app-xr5kdq6jkq-uc.a.run.app/projects/")).json();j(t)})(),console.log("execute")},[]),s.jsx("div",{className:"f-row g-2 f-wrap f-center",children:a&&Object.keys(a).length>0?Object.keys(a).slice(0,r||Object.keys(a).length).map((c,l)=>s.jsxs("div",{className:"project-card px-4 py-3",children:[s.jsxs("span",{className:"fs-2 fw-500 text-common",children:[" ",new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(a[c].date))]}),s.jsx("h2",{className:"fs-5 mt-2",children:a[c].tittle}),s.jsx("div",{className:"f-row g-2 py-1 mb-2",children:a[c].techs.map(t=>s.jsx("span",{className:"fs-6 fw-400 br-max tag","data-tag":t,children:t},t))}),s.jsxs("p",{className:"mb-1",children:[a[c].description.split(/\s+/).map(t=>t.replace(/,/g,"")).slice(0,12).join(" "),"..."]}),s.jsxs("div",{className:"f-row g-2 f-justify-between mt-3 f-wrap",children:[s.jsx("a",{className:"btn btn-third  fs-2 fw-500 br-6 d-flex f-center f-grow",href:a[c].repository,children:"Source Code"}),s.jsxs("a",{className:"icon btn btn-third  fs-2 fw-600 br-6 d-flex f-center g-2 f-grow",href:a[c].websiteURL,children:[s.jsxs("svg",{width:"20",viewBox:"0 1.75 24 24",fill:"none",stroke:"var(--f-p-icon)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M15 3h6v6"}),s.jsx("path",{d:"M10 14 21 3"}),s.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),"Live Demo"]})]})]},l)):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"project-card-skeleton f-col g-2 p-3",children:[s.jsx(e,{className:"w-20"}),s.jsx(e,{className:"w-70"}),s.jsx(e,{className:"w-100"}),s.jsx(e,{className:"w-80"}),s.jsxs("div",{className:"f-row g-2 f-wrap w-100 f-justify-between",children:[s.jsx(e,{className:"w-40"}),s.jsx(e,{className:"w-40"})]})]}),s.jsxs("div",{className:"project-card-skeleton f-col g-2 p-3",children:[s.jsx(e,{className:"w-20"}),s.jsx(e,{className:"w-70"}),s.jsx(e,{className:"w-100"}),s.jsx(e,{className:"w-80"}),s.jsxs("div",{className:"f-row g-2 f-wrap w-100 f-justify-between",children:[s.jsx(e,{className:"w-40"}),s.jsx(e,{className:"w-40"})]})]}),s.jsxs("div",{className:"project-card-skeleton f-col g-2 p-3",children:[s.jsx(e,{className:"w-20"}),s.jsx(e,{className:"w-70"}),s.jsx(e,{className:"w-100"}),s.jsx(e,{className:"w-80"}),s.jsxs("div",{className:"f-row g-2 f-wrap w-100 f-justify-between",children:[s.jsx(e,{className:"w-40"}),s.jsx(e,{className:"w-40"})]})]}),s.jsxs("div",{className:"project-card-skeleton f-col g-2 p-3",children:[s.jsx(e,{className:"w-20"}),s.jsx(e,{className:"w-70"}),s.jsx(e,{className:"w-100"}),s.jsx(e,{className:"w-80"}),s.jsxs("div",{className:"f-row g-2 f-wrap w-100 f-justify-between",children:[s.jsx(e,{className:"w-40"}),s.jsx(e,{className:"w-40"})]})]})]})})}export{m as default};
