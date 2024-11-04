import { local } from '@lifo123/library';
import { initializeApp } from 'firebase/app'
import { get, set, ref, getDatabase } from 'firebase/database'
import { toast } from 'sonner';

const firebaseConfig = {
    apiKey: "AIzaSyDxmPjhz8z50spDrNRQigNtkKTCRz9ZQdo",
    authDomain: "portfolio-f4e09.firebaseapp.com",
    databaseURL: "https://portfolio-f4e09-default-rtdb.firebaseio.com",
    projectId: "portfolio-f4e09",
    storageBucket: "portfolio-f4e09.firebasestorage.app",
    messagingSenderId: "681130197817",
    appId: "1:681130197817:web:55e18b525de4a2cddbdee8",
    measurementId: "G-BL1PXCHD4N"
};

const fb = initializeApp(firebaseConfig);
const db = getDatabase(fb);

export default function Add() {
    const DATA = document.querySelectorAll<HTMLInputElement>("input[name]");
    DATA.forEach(el => {
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        })
    })

    const handleLogin = async () => {

        if (!DATA[0]?.value || !DATA[1]?.value) {
            toast.error("Please fill all the fields");
            return;
        }

        try {
            const loginRef = ref(db, "Lifo");
            const user = await get(loginRef);
            const userSnap = await user.val();

            if (userSnap.user !== DATA[0].value && userSnap.password !== DATA[1].value) {
                toast.error("Invalid username or password");
                return;
            }
            window.location.href = "/Portfolio/Admin/Dashboard";

            const date = new Date();
            date.setTime(date.getTime() + (4 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = `F-User=${JSON.stringify(userSnap.user)}; ${expires}; path=/`;

        } catch (e) {
            console.log(e);
            return
        }

    }

    return (
        <span className="btn btn-primary br-6 mt-3 fs-3 mb-10" style={{ padding: ".6rem 1rem" }} onClick={handleLogin}>Login</span>
    )
}