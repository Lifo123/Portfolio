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

    return (
        <main className='land-main relative f-col'>
            <Header />
            <div className='land-top' >
                <section className="f-col f-align-center mt-110" id="Home">
                    <h1 className='land-subtitle f-row f-align-center g-10 '>Edgar Sanchez <span className='peru-flag'></span></h1>
                    <h2>Frontend Developer</h2>
                    <span className='lnd-avalible br-6 mx-auto mt-30'>Open for work</span>
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
                                <p className='d-flex f-align-center' style={{ height: '30px' }}>Linkedin</p>
                            </label>
                        </a>
                    </div>
                    <ul className='f-row g-30 mx-auto mt-35 f-justify-center'>
                        <li><SocialMediaIcon id={'youtube'} box={32} /></li>
                        <li><SocialMediaIcon id={'discord'} box={32} /></li>
                        <li><SocialMediaIcon id={'whatsapp'} box={32} /></li>
                    </ul>
                    <a className='arrow-land' href='#About'>
                        <svg height={40} viewBox="0 0 24 24" >
                            <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" />
                        </svg>
                    </a>
                </section>
            </div>

            <section className="view-anim f-col" id="About">
                <h2 className='d-flex w-70 mx-auto' >About me</h2>
                <div className='f-row w-70 g-70 f-wrap mx-auto f-justify-center'>
                    <div className='p-btn br-10'>
                        <label className='d-flex f-center h-100 w-100 br-10'>
                            <img src="#" alt="pfp Lifo" />
                        </label>
                    </div>
                    <label className='f-col g-15 f-justify-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis iure iste cum ipsa sed. Cumque odit, doloribus temporibus animi quod molestiae vel consequuntur quis adipisci esse pariatur modi fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis iure iste cum ipsa sed. Cumque odit, doloribus temporibus animi quod molestiae vel consequuntur quis adipisci esse pariatur modi fuga.</p>
                    </label>
                </div>
            </section>

            <section className="view-anim f-col f-align-start" id="Contact">
                <div className='f-col f-align-start w-65 mx-auto g-20 mt-90'>
                    <h2>¿Do you need a Web Developer?</h2>
                    <p className='mb-15'>Let's start innovative Projects together.</p>
                    <div className='f-row g-30'>
                        <a href="">
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
                    <h2>Latest Projects</h2>
                    <section className='f-row g-50 mt-70 f-justify-center w-100'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </section>
                    <a className='br-max pointer mt-45 w-100'>View All</a>
                </div>
            </section>

            <section className="view-anim" id="Skills">
                <div className='f-col w-60 mx-auto f-align-start'>
                    <h2>Skills</h2>
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