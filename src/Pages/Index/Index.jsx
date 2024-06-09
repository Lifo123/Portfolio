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
        const sections = document.querySelectorAll(".land-main > section");
        const headerLinks = document.querySelectorAll('.header > nav > ul > li > a');

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
            img: '',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        },
        {
            img: '',
            tittle: 'Manage Tournaments',
            description: 'Website for develop and manage custom Tournaments in seconds.',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        },
        {
            img: '',
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
                        <a className='p-btn br-max' href='https://github.com/Lifo123' target='_blank'>
                            <label className='f-row f-align-center g-15 br-max'>
                                <SocialMediaIcon id={'github'} />
                                <p>Github</p>
                            </label>
                        </a>
                        <a className='p-btn br-max' href='https://www.linkedin.com/in/lifo3/' target='_blank'>
                            <label className='f-row f-align-center g-15 br-max'>
                                <SocialMediaIcon id={'linkedin'} box={28} />
                                <p className='d-flex f-align-center' style={{ height: '30px' }}>LinkedIn</p>
                            </label>
                        </a>
                    </div>
                    <ul className='f-row g-35 mx-auto mt-35 f-center txt-stl-none'>
                        <li><a href="https://www.youtube.com/channel/UCCgNa5xgsjI_DBZwFkD34Bw"><SocialMediaIcon id={'youtube'} box={32} /></a></li>
                        <li><a href="https://www.instagram.com/li.fos/"><SocialMediaIcon id={'instagram'} box={30} /></a></li>
                        <li><a href="https://wa.me/51900081894/"><SocialMediaIcon id={'whatsapp'} box={32} /></a></li>
                    </ul>
                    <a className='arrow-land d-flex mt-110' href='#About'>
                        <svg height={40} viewBox="0 0 24 24" >
                            <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" />
                        </svg>
                    </a>
                </section>
            </div>

            <section className="view-anim f-col" id="About">
                <h2 className='d-flex w-65 mx-auto l-subtitle' >About me</h2>
                <div className='f-row w-65 g-70 f-wrap mx-auto f-center mt-70'>
                    <div className='about-img p-btn br-10'>
                        <label className='d-flex f-center h-100 w-100 br-10'>
                            <img src="#" height={250} width={380} alt="pfp Lifo" />
                        </label>
                    </div>
                    <label className='f-col g-15 f-justify-center'>
                        <p className='l-text-p'>Hello! I'm a 20-year-old developer from Peru.</p>
                        <p className='l-text-p'>I specialize in building modern websites using ReactJS, with knowledge of Git, Sass, NodeJS, Express, and MySQL.</p>
                        <p className='l-text-p'>Always improving my skills and staying updated with the latest industry trends.</p>
                    </label>
                </div>
            </section>

            <section className="view-anim f-col f-align-start" id="Contact">
                <div className='f-col f-align-start w-65 mx-auto g-20 mt-90'>
                    <h2 className=''>¿Do you need a Web Developer?</h2>
                    <p className='mb-15'>Let's start innovative Projects together.</p>
                    <div className='f-row g-30'>
                        <a className='land-btn-contact' href="">
                            <PButton text='Contact me' borderRadius={8} padding={[16, 46]} fontSize={17} className={'active'} />
                        </a>
                        <a href="#Projects">
                            <PButtonSecondary text='View Projects' borderRadius={8} padding={[16, 46]} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="view-anim mt-100" id="Projects">
                <div className='f-col w-75 mx-auto f-align-start'>
                    <h2 className='l-subtitle'>Latest Projects</h2>
                    <section className='project-grid d-grid mt-70 w-100'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </section>
                    <a className='project-btn br-max pointer mt-45 w-100'>View All</a>
                </div>
            </section>

            <section className="view-anim mt-50" id="Skills">
                <div className='f-col w-60 mx-auto f-align-start'>
                    <h2 className='l-subtitle mt-40'>Skills</h2>
                    <div className="ski-logo-wrapper d-flex f-align-center">
                        <div className="logo "></div>
                        <div className="logo "></div>
                        <div className="logo "></div>
                        <div className="logo"></div>
                        <div className="logo "></div>
                        <div className="logo "></div>
                    </div>
                </div>
            </section>
            <Footer />
            <div className='bg-custom d-flex'></div>
        </main>
    )
}