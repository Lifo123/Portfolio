import { useEffect } from "react";

export default function userDarkMode() {
    const ToggleDM = () => {
        const DMstate = localStorage.getItem('DarkMode') === 'true';
        if (DMstate) {
            document.body.classList.add('DarkMode');
            localStorage.setItem('DarkMode', !DMstate);
        } else {
            document.body.classList.remove('DarkMode');
            localStorage.setItem('DarkMode', !DMstate);
        }

    }

    useEffect(() => {
        const DMstate = localStorage.getItem('DarkMode') === 'true';
        if (DMstate) {
            document.body.classList.remove('DarkMode');
            localStorage.setItem('DarkMode', DMstate);
        } else {
            document.body.classList.add('DarkMode');
            localStorage.setItem('DarkMode', DMstate);
        }
    }, [])

    return { ToggleDM }
}