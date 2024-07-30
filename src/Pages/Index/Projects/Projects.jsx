import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";
import './Projects.css'


export default function Projects() {

    const ProjectsData = [
        {
            img: 'https://pbs.twimg.com/media/GTrzwwbXkAAgBHj?format=png&name=large',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            techs: `Javascript,React,Sass`,
            state: true

        },
        {
            img: 'https://pbs.twimg.com/media/GQyQ7oqWAAAQrox?format=webp&name=medium',
            tittle: 'Manage Tournaments',
            description: 'Website for develop and manage custom Tournaments in seconds.',
            websiteURL: 'https://lifo123.github.io/ManageTournaments',
            techs: `Javascript,React,Sass`,
            state: false
        },
        {
            img: 'https://pbs.twimg.com/media/GTrzwwbXkAAgBHj?format=png&name=large',
            tittle: 'Meta Tag Editor',
            description: 'Simple editor of metatag for testing the result in engines Searchs',
            websiteURL: 'https://lifo123.github.io/MetaTag-Editor/',
            techs: `Javascript,React,Sass`,
            state: false
        }
    ]

    return (
        <section className="view-anim" id="Projects">
            <span className="f-col w-70 f-align-start mx-auto">
                <h2 className='l-subtitle'>Latest Projects</h2>
                <p className="mt-10 l-subpgrafh">My lasts projects and destacable content</p>
            </span>
            <div className='w-70 mx-auto f-row f-justify-around f-wrap g-30'>
                {
                    ProjectsData.map((item, index) => (
                        <ProjectCard key={index} data={item} />
                    ))
                }
                <Link className='vi-btn-all f-row br-max w-100 f-center mt-10 pointer' to='/Projects'>View All</Link>
            </div>
        </section>
    )
}