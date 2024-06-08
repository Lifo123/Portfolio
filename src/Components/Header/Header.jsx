import './Styles/Header.css'

import Icon from '../icons/Icon'
import SocialMediaIcons from '../icons/SocialMediaIcons'
import userDarkMode from '../../hooks/useDarkMode/useDarkMode'


export default function Header({ type = 'normal' }) {
    const { ToggleDM } = userDarkMode();

    const HandleActive = (e) => {
        e.target.classList.add('active');
        const parent = e.target.parentElement.parentElement;
        parent.querySelectorAll('li > a').forEach(item => {
            item.classList.remove('active');
        });
    }

    return (
        <header className="header d-flex sticky">
            <nav className='f-row f-justify-between f-align-center w-100 relative'>
                <h3 className='h-log'><a href="/">LIFO.COM</a></h3>
                {
                    type !== 'error' ? (
                        <>
                            <ul className='f-row g-50 absolute'>
                                <li><a href='#About' onClick={HandleActive}>About</a></li>
                                <li><a href='#Contact' onClick={HandleActive}>Contact</a></li>
                                <li><a href='#Projects' onClick={HandleActive}>Projects</a></li>
                                <li><a href='#Skills' onClick={HandleActive}>Skills</a></li>
                            </ul>
                            <div className='f-row g-20 f-align-center'>
                                <Icon id='toggleDarkMode' color={`var(--p-icon-high)`} funct={ToggleDM} />
                                <a className='f-row g-20 f-align-center' href='https://github.com/Lifo123' target='_blank'>Lifo123 <SocialMediaIcons id='github' color={`var(--p-icon-high)`} /></a>
                            </div>
                        </>
                    ) : null
                }
            </nav>

        </header>
    )
}