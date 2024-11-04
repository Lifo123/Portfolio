import { useState } from "react";

interface CountProps {
    
}
 
export default function Count(){
    const [count, setCount] = useState(0);


   return (
       <span className="btn btn-primary br-6" onClick={() => setCount(count + 1)}>
           Count {count}
       </span>
   )
}