import{r as i}from"./index.B52nOzfP.js";function f(e,t,n){let r=new Set([...t,void 0]);return e.listen((s,l,u)=>{r.has(u)&&n(s,l,u)})}let c=(e,t)=>n=>{e.current=n,t()};function o(e,{keys:t,deps:n=[e,t]}={}){let r=i.useRef();r.current=e.get();let s=i.useCallback(u=>t?.length>0?f(e,t,c(r,u)):e.listen(c(r,u)),n),l=()=>r.current;return i.useSyncExternalStore(s,l,l)}export{o as u};
