import './Index.css'
import { useEffect } from 'react';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from './Home/Home';
import About from './About/About';
import CallAc from './CallAc/CallAc';
import Projects from './Projects/Projects';


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

            <section className="view-anim mt-50" id="Skills">

            </section>
            <section className="view-anim" id="Contact">

            </section>
            <Footer />
            <div className='bg-custom d-flex'></div>
        </main>
    )
}