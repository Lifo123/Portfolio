import { useEffect } from "react";

export default function userLightMode() {
    const ToggleDM = () => {
        let LMstate = localStorage.getItem('LightMode') === 'true';
        LMstate = !LMstate
        if (LMstate) {
            document.body.classList.add('LightMode');
            localStorage.setItem('LightMode', LMstate);
        } else {
            document.body.classList.remove('LightMode');
            localStorage.setItem('LightMode', LMstate);
        }

    }

    return { ToggleDM }
}