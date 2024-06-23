import './Header.css'

import Icon from '../icons/Icon'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/AppContext';


export default function Header({ type = 'normal' }) {
    const GContext = useContext(GlobalContext);

    const HandleActive = (e) => {
        e.target.classList.add('active');
        const parent = e.target.parentElement.parentElement;
        parent.querySelectorAll('li > a').forEach(item => {
            item.classList.remove('active');
        });
    }

    return (
        <header className="header d-flex sticky mx-auto">
            <nav className='f-row f-justify-between f-align-center w-100 relative'>
                <h3 className='h-log relative f-row f-align-center'>
                    <a href={type !== 'error' ? '#Home' : '/'}>LIFO.COM</a>
                    <span className='br-max'>Available</span>
                </h3>
                {
                    type !== 'error' ? (
                        <>
                            <ul className='h-navigation f-row absolute'>
                                <li><a href='#Home' onClick={HandleActive}>Home</a></li>
                                <li><a href='#About' onClick={HandleActive}>About</a></li>
                                <li><a href='#Projects' onClick={HandleActive}>Projects</a></li>
                                <li><a href='#Skills' onClick={HandleActive}>Skills</a></li>
                                <li><a href='#Contact' onClick={HandleActive}>Contact</a></li>
                            </ul>
                            <div className='h-cta f-row f-align-center'>
                                <Icon id='toggleDarkMode' color={`var(--p-icon-high)`} funct={() => GContext.ToggleLM()} />
                                <a className='h-talk br-10' href='#Contact'>Let's Talk</a>
                            </div>
                        </>
                    ) : null
                }
            </nav>

        </header>
    )
}