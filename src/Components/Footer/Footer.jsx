import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer f-row f-justify-between w-100">
            <p>Made by <a href="https://github.com/Lifo123" target='_blank'>Lifo123</a> - 2024</p>
            <ul className="f-row g-30">
                <li><a href={'#Home'}>Home</a></li>
                <li><a href={'#About'}>About</a></li>
                <li><a href={'#Projects'}>Projects</a></li>
                <li><a href={'#Skills'}>Skills</a></li>
                <li><a href={'#Contact'}>Contact</a></li>
            </ul>
        </footer>
    )
}