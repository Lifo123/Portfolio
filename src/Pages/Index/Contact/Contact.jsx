import './Contact.css'

import SocialMediaIcons from '../../../Components/icons/SocialMediaIcons'

export default function Contact() {
    return (
        <section className="view-anim" id="Contact">
            <span className='w-70 mx-auto f-col f-align-start'>
                <h2 className='l-subtitle'>Contact</h2>
                <p className='mt-10'>Send me a message belllow links </p>
            </span>
            <ul className='ctc-ul d-grid g-40'>
                <li className='txt-stl-none'>
                    <a className='ctc-item f-col f-center br-6' href="https://github.com/Lifo123" target='_blank'>
                        <h5>Github</h5>
                        <SocialMediaIcons id={'github'} box={40} />
                        <p>@Lifo123</p>
                    </a>
                </li>
                <li className='txt-stl-none'>
                    <a className='ctc-item f-col f-center br-6' href="mailto:alberto_p-@hotmail.com?subject=Contact%20me" target='_blank'>
                        <h5>Email</h5>
                        <SocialMediaIcons id={'outlook'} box={48} />
                        <p>alberto_p-@hotmail.com</p>
                    </a>
                </li>
                <li className='txt-stl-none'>
                    <a className='ctc-item f-col f-center br-6' href="https://www.linkedin.com/in/lifo3/" target='_blank'>
                        <h5>Linkedin</h5>
                        <SocialMediaIcons id={'linkedin'} box={40} />
                        <p>@lifo3</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}