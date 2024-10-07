import { FIcons } from "@Components/Icons";


export default function PrimaryBTN({ text = "Enter Text", url = "#", logo = "#" }) {
    return (
        <a href={url} className="p-btn br-max mt-3 mb-4 pointer">
            <span className="p-btn-in f-row g-3 f-center br-max h-100 w-100 relative">
                {logo ? <FIcons id={logo} /> : null}
                {text}
            </span>
        </a>
    )
}