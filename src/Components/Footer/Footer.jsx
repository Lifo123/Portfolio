import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer f-row f-justify-between w-100">
            <p>Made by <Link to="https://github.com/Lifo123" target='_blank'>Lifo123</Link> - 2024</p>
            <ul className="f-row g-30">
                <li><HashLink to={'#Home'}>Home</HashLink></li>
                <li><HashLink to={'#About'}>About</HashLink></li>
                <li><HashLink to={'#Projects'}>Projects</HashLink></li>
                <li><HashLink to={'#Skills'}>Skills</HashLink></li>
                <li><HashLink to={'#Contact'}>Contact</HashLink></li>
            </ul>
        </footer>
    )
}