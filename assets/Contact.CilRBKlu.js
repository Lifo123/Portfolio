import{j as a}from"./jsx-runtime.D5qyYPMi.js";import{t as n}from"./_astro-entry_sonner.5UspnSoG.js";import"./index.CZlPm10g.js";import"./index.9Z45dc0C.js";function g(){const s=t=>{const r=t.target.closest(".contact-form");r.querySelectorAll("input").forEach(e=>{e.value=""}),r.querySelector("textarea").value="",n.dismiss()},l=async t=>{const e=t.target.closest(".contact-form").querySelectorAll("[placeholder]");if(e[0].value.length===0||e[1].value.length===0||e[2].value.length===0){n.error("Please fill all fields");return}const i=async()=>{try{await fetch("https://app-xr5kdq6jkq-uc.a.run.app/Email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e[0].value,topic:e[1].value,message:e[2].value})})}catch(c){console.log(c)}};n.promise(i,{loading:"Sending...",error:"Error sending message"})};return a.jsxs("div",{className:"f-row g-2 f-justify-between px-4 py-3 f-wrap",style:{borderTop:"solid 1px rgba(var(--lb-br), .5)"},children:[a.jsx("span",{className:"btn btn-third br-6 fw-600 pointer text-center",style:{padding:".6rem 2.25rem",maxWidth:216},onClick:s,children:"Clear"}),a.jsx("span",{className:"btn btn-primary br-6 fw-700 pointer text-center",style:{padding:".6rem 2.25rem",maxWidth:216},onClick:l,children:"Send"})]})}export{g as default};