import './Home.css'

import SocialMediaIcon from '../../../Components/icons/SocialMediaIcons'

export default function Home() {
    return (
        <section className="f-col f-align-center" id="Home">
            <h1 className='land-subtitle f-row f-align-center g-10 '>Edgar Sanchez <span className='peru-flag'></span></h1>
            <h2 className='l-title'>Frontend Developer</h2>
            <div className='f-row g-30 mx-auto mt-30'>
                <a className='p-btn br-max' href='https://github.com/Lifo123' target='_blank' data-state='active'>
                    <span className='br-max h-100 w-100 f-row g-15 f-center'>
                        <SocialMediaIcon id={'github'} />
                        <p>Download CV</p>
                    </span>
                </a>
            </div>
            <ul className='f-row g-35 mx-auto mt-35 f-center txt-stl-none'>
                <li className='d-flex f-center'><a href="https://github.com/Lifo123" aria-label="Boton link Instagram" target='_blank'><SocialMediaIcon id={'github'} box={32} title='Instagram' hover={true} /></a></li>
                <li className='d-flex f-center'><a href="https://www.linkedin.com/in/lifo3/" aria-label="Boton link youtube" target='_blank'><SocialMediaIcon id={'linkedin'} box={30} title='youtube' hover={true} /></a></li>
                <li className='d-flex f-center'><a href="mailto:alberto_p-@hotmail.com?subject=Contact%20me" aria-label="Boton link Whatsapp" title='alberto_p-@hotmail.com'><SocialMediaIcon id={'outlook'} box={36} hover={true} /></a></li>
            </ul>
            <a className='arrow-land d-flex mt-120' href='#About' aria-label='Boton navigate bottom'>
                <svg height={40} viewBox="0 0 24 24" >
                    <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" />
                </svg>
            </a>
        </section>
    )
}