import { createContext, useEffect, useState } from "react"
import useLightMode from "../hooks/useLightMode/useLightMode";

export const GlobalContext = createContext();

export default function AppContext({ children }) {
    const { LightMode, ToggleLM } = useLightMode();

    return (
        <GlobalContext.Provider value={{ LightMode, ToggleLM }}>
            {children}
        </GlobalContext.Provider>
    )
}