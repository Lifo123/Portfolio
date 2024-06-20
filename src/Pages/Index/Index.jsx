import './Index.css'
import { useEffect } from 'react';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProjectCard from './ProjectCard/ProjectCard';
import Home from './Home/Home';
import About from './About/About';
import CallAc from './CallAc/CallAc';


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
            img: 'https://cdn.discordapp.com/attachments/1249730382148927499/1249731063836839997/MetaTagEditor.webp?ex=667198c0&is=66704740&hm=b58b92ac540393487a8339ce678583dbbc77d08c019812d86ba3eaf440b02de0&=&format=webp&width=340&height=140',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        },
        {
            img: 'https://cdn.discordapp.com/attachments/1249730382148927499/1249732031399858197&format=webp&width=340&height=140',
            tittle: 'Manage Tournaments',
            description: 'Website for develop and manage custom Tournaments in seconds.',
            websiteURL: 'https://lifo123.github.io/ManageTournaments',
            repoURL: 'https://github.com/Lifo123/ManageTournaments'

        },
        {
            img: 'https://cdn.discordapp.com/attachments/1249730382148927499/1249731063836839997/MetaTagEditor.webp?ex=667198c0&is=66704740&hm=b58b92ac540393487a8339ce678583dbbc77d08c019812d86ba3eaf440b02de0&=&format=webp&width=340&height=140',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            repoURL: 'https://github.com/Lifo123/MetaTag-Editer'

        }
    ]

    return (
        <main className='land-main relative f-col'>
            <Header />

            <Home />
            <About />
            <CallAc />


            <section className="view-anim" id="Projects">
                <h2 className='l-subtitle'>Latest Projects</h2>
                <p>My lasts projects and destacable content</p>
                <div className='w-70 mx-auto f-row f-justify-around f-wrap g-30'>
                    {
                        ProjectsData.map((item, index) => (
                            <ProjectCard key={index} data={item} />
                        ))
                    }
                    <span className='vi-btn-all f-row br-max w-100 f-center mt-10 pointer'>View All</span>
                </div>
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