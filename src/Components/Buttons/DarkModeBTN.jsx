import { FIcons } from "@Components/Icons";

export default function DarkModeBTN() {

    const handleClick = (e) => {
        let isDark = localStorage.getItem("DMstate") === "true";
        let body = document.querySelector("body");
        
        localStorage.setItem("DMstate", !isDark);
        
        if(isDark){
            body.classList.add("DarkMode");
        }else{
            body.classList.remove("DarkMode");
        }
        
    
    }

    return (
        <span className="d-flex pointer" onClick={handleClick}>
            <FIcons id="toggleDarkMode" />
        </span>
    )
}