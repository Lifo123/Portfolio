import './Contact.css'
import { Link } from 'react-router-dom'

import SocialMediaIcons from '../../../Components/icons/SocialMediaIcons'

export default function Contact() {
    return (
        <section className="view-anim" id="Contact">
            <span className='w-70 mx-auto f-col f-align-start'>
                <h2 className='l-subtitle'>Contact</h2>
                <p className='mt-10 l-subpgrafh'>Send me a message belllow links </p>
            </span>
            <ul className='ctc-ul d-grid g-40'>
                <li className='txt-stl-none'>
                    <Link className='ctc-item f-col f-center br-6' to="https://github.com/Lifo123" target='_blank'>
                        <h2>Github</h2>
                        <SocialMediaIcons id={'github'} box={40} />
                        <p>@Lifo123</p>
                    </Link>
                </li>
                <li className='txt-stl-none'>
                    <Link className='ctc-item f-col f-center br-6' to="mailto:alberto_p-@hotmail.com?subject=Contact%20me" target='_blank'>
                        <h2>Email</h2>
                        <SocialMediaIcons id={'outlook'} box={48} />
                        <p>alberto_p-@hotmail.com</p>
                    </Link>
                </li>
                <li className='txt-stl-none'>
                    <Link className='ctc-item f-col f-center br-6' to="https://www.linkedin.com/in/lifo3/" target='_blank'>
                        <h2>Linkedin</h2>
                        <SocialMediaIcons id={'linkedin'} box={40} />
                        <p>@lifo3</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}