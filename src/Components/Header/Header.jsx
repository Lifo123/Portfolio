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
                <h3 className='h-log relative f-row f-align-center g-15'>
                    <a href="/">LIFO.COM</a>
                    <span className='br-max'>Available</span>
                </h3>
                {
                    type !== 'error' ? (
                        <>
                            <ul className='f-row g-50 absolute'>
                                <li><a href='#About' onClick={HandleActive}>About</a></li>
                                <li><a href='#Contact' onClick={HandleActive}>Contact</a></li>
                                <li><a href='#Projects' onClick={HandleActive}>Projects</a></li>
                                <li><a href='#Skills' onClick={HandleActive}>Skills</a></li>
                            </ul>
                            <div className='f-row g-30 f-align-center'>
                                <Icon id='toggleDarkMode' color={`var(--p-icon-high)`} funct={ToggleDM} />
                                <a className='h-talk br-max' href='https://github.com/Lifo123' target='_blank'>Let's Talk</a>
                            </div>
                        </>
                    ) : null
                }
            </nav>

        </header>
    )
}