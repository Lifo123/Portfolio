import { useEffect, useState } from "react";

export default function useLightMode() {
    const [LightMode, setLightMode] = useState(() => {
        const savedMode = localStorage.getItem('LightMode');
        return savedMode ? JSON.parse(savedMode) : true;
    });

    const ToggleLM = () => {
        setLightMode(prevMode => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem('LightMode', LightMode);
        if (!LightMode) {
            document.body.classList.add('LightMode');
        } else {
            document.body.classList.remove('LightMode');
        }
    }, [LightMode]);

    return { LightMode, ToggleLM }
}