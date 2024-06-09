import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer f-row f-justify-between absolute w-100">
            <p>2024 - Made by <a href="https://github.com/Lifo123">Lifo123</a></p>
            <ul className="f-row g-30">
                <li>
                    <a href={'#Home'}>Home</a>
                </li>
                <li>
                    <a href={'#About'}>About</a>
                </li>
                <li>
                    <a href={'#Contact'}>Contact</a>
                </li>
                <li>
                    <a href={'#Projects'}>Projects</a>
                </li>
                <li>
                    <a href={'#Skills'}>Skills</a>
                </li>
            </ul>
        </footer>
    )
}