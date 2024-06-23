import './Index.css'
import { useEffect } from 'react';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from './Home/Home';
import About from './About/About';
import CallAc from './CallAc/CallAc';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';


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

    return (
        <main className='land-main relative f-col'>
            <Header />

            <Home />
            <About />
            <CallAc />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <div className='bg-custom d-flex'></div>
        </main>
    )
}