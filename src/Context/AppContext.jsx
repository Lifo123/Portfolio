import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();

export default function AppContext({ children }) {
    const [LightMode, setLightMode] = useState(() => {
        const savedMode = localStorage.getItem('LightMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const toggleLightMode = () => {
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




    return (
        <GlobalContext.Provider value={{ LightMode, setLightMode, toggleLightMode }}>
            {children}
        </GlobalContext.Provider>
    )
}