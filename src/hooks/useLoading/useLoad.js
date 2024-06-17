import { useState, useEffect } from "react";

export function useLoad(initialValue = 20) {
    const [progress, setProgress] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            setProgress(100);
        }, 200)
     }, []) 

    return { progress, setProgress }
}
