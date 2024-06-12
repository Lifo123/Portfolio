import './Index.css'
import { useEffect } from 'react';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SocialMediaIcon from '../../Components/icons/SocialMediaIcons';
import PButton from '../../Components/Buttons/PButton';
import PButtonSecondary from '../../Components/Buttons/pButtonSecondary';
import ProjectCard from './Comps/ProjectCard/ProjectCard';


export default function Index() {

    useEffect(() => {
        const sections = document.querySelectorAll(".land-main  section");
        const headerLinks = document.querySelectorAll('.header > nav > ul > li  a');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    headerLinks.forEach((a) => {
                        if (a.innerHTML === entry.target.getAttribute('id')) {
                            a.classList.add('active');
                        } else {
                            a.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.75
        });

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const ProjectsData = [
        {
            img: 'https://media.discordapp.net/attachments/1249730382148927499/1249731063836839997/MetaTagEditor.webp?ex=66685e40&is=66670cc0&hm=0a3532c9f26e847ceb23ccb0e300ae8ced01e3bf7b6c970fcb28a18a9efadd3d&=&format=webp&width=340&height=140',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        },
        {
            img: 'https://media.discordapp.net/attachments/1249730382148927499/1249732031399858197/ManageTournaments.webp?ex=66685f27&is=66670da7&hm=5e5225b259073ca99057b7e6a034f22c7eab4c2c5abff4a41f97640af8c09149&=&format=webp&width=340&height=140',
            tittle: 'Manage Tournaments',
            description: 'Website for develop and manage custom Tournaments in seconds.',
            websiteURL: 'https://lifo123.github.io/ManageTournaments',
            repoURL: 'https://github.com/Lifo123/ManageTournaments'

        },
        {
            img: 'https://media.discordapp.net/attachments/1249730382148927499/1249731063836839997/MetaTagEditor.webp?ex=66685e40&is=66670cc0&hm=0a3532c9f26e847ceb23ccb0e300ae8ced01e3bf7b6c970fcb28a18a9efadd3d&=&format=webp&width=340&height=140',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        }
    ]

    return (
        <main className='land-main relative f-col'>
            <Header />
            <div className='land-top d-flex f-center' >
                <section className="f-col f-align-center" id="Home">
                    <h1 className='land-subtitle f-row f-align-center g-10 '>Edgar Sanchez <span className='peru-flag'></span></h1>
                    <h2 className='l-title'>Frontend Developer</h2>
                    <div className='f-row g-30 mx-auto mt-40'>
                        <a className='p-btn br-max' href='https://github.com/Lifo123' target='_blank' data-state='active'>
                            <label className='f-row f-align-center g-15 br-max no-select'>
                                <SocialMediaIcon id={'github'} />
                                <p>Download CV</p>
                            </label>
                        </a>
                    </div>
                    <ul className='f-row g-35 mx-auto mt-35 f-center txt-stl-none'>
                        <li><a href="https://www.youtube.com/channel/UCCgNa5xgsjI_DBZwFkD34Bw" aria-label="Boton link youtube"><SocialMediaIcon id={'linkedin'} box={30} title='youtube' hover={true}/></a></li>
                        <li><a href="https://www.instagram.com/li.fos/" aria-label="Boton link Instagram"><SocialMediaIcon id={'github'} box={32} title='Instagram' hover={true} /></a></li>
                        <li><a href="https://wa.me/51900081894/" aria-label="Boton link Whatsapp"><SocialMediaIcon id={'email'} box={32} hover={true}/></a></li>
                    </ul>
                    <a className='arrow-land d-flex mt-110' href='#About' aria-label='Boton navigate bottom'>
                        <svg height={40} viewBox="0 0 24 24" >
                            <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" />
                        </svg>
                    </a>
                </section>
            </div>

            <section className="view-anim f-col" id="About">
                <h2 className='d-flex w-65 mx-auto l-subtitle' >About me</h2>
                <div className='about-cont f-row w-65 g-70 f-wrap mx-auto f-center mt-70'>
                    <div className='about-img p-btn br-10'>
                        <span className='d-flex f-center br-10'>
                            <img src="#" height={250} width={380} alt="pfp Lifo" />
                        </span>
                    </div>
                    <label className='f-col g-15 f-justify-center'>
                        <p className='l-text-p'>Hello! I'm a 20 year old developer from Peru.</p>
                        <p className='l-text-p'>Specialized in building modern websites using <span className='p-blue'>ReactJS</span> and <span className='p-pink'>Sass</span>, with knowledge of Git.</p>
                        <p className='l-text-p'>Always improving my skills and staying updated with the latest industry trends.</p>
                    </label>
                </div>
            </section>

            <section className="view-anim f-col f-align-start" id='call-ac'>
                <div className='f-col f-align-start w-65 mx-auto g-20 mt-90'>
                    <h2 className=''>¿Do you need a Web Developer?</h2>
                    <p className='mb-15'>Let's start innovative new projects together.</p>
                    <div className='f-row g-30 f-wrap'>
                        <a className='land-btn-contact' href="https://wa.me/51900081894/">
                            <PButton text='Contact me' borderRadius={8} padding={[16, 46]} fontSize={17} className={'active'} />
                        </a>
                        <a className='' href="#Projects">
                            <PButtonSecondary text='View Projects' borderRadius={8} padding={[16, 46]} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="view-anim mt-100" id="Projects">
               
            </section>

            <section className="view-anim mt-50" id="Skills">
               
            </section>
            <section className="view-anim" id="Contact">
               
            </section>
            <Footer />
            <div className='bg-custom d-flex'></div>
        </main>
    )
}