import './Header.css'

import Icon from '../icons/Icon'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


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
                    {type !== 'error' ? <HashLink to="#Home">LIFO.COM</HashLink> : <Link to='/'>LIFO.COM</Link>}
                    <span className='br-max'>Available</span>
                </h3>
                {
                    type !== 'error' ? (
                        <>
                            <ul className='h-navigation f-row absolute'>
                                <li><HashLink to='#Home' onClick={HandleActive}>Home</HashLink></li>
                                <li><HashLink to='#About' onClick={HandleActive}>About</HashLink></li>
                                <li><HashLink to='#Projects' onClick={HandleActive}>Projects</HashLink></li>
                                <li><HashLink to='#Skills' onClick={HandleActive}>Skills</HashLink></li>
                                <li><HashLink to='#Contact' onClick={HandleActive}>Contact</HashLink></li>
                            </ul>
                            <div className='h-cta f-row f-align-center'>
                                <Icon id='toggleDarkMode' color={`var(--p-icon-high)`} funct={() => GContext.ToggleLM()} />
                                <HashLink className='h-talk br-10' to='#Contact'>Let's Talk</HashLink>
                            </div>
                        </>
                    ) : null
                }
            </nav>

        </header>
    )
}