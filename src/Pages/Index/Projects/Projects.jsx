import './Projects.css'

import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";

import ProjectsData from '../../../../Json/Projects.json'




export default function Projects() {

    return (
        <section className="view-anim" id="Projects">
            <span className="f-col w-70 f-align-start mx-auto">
                <h2 className='l-subtitle'>Latest Projects</h2>
                <p className="mt-10 l-subpgrafh">My lasts projects and destacable content</p>
            </span>
            <div className='w-70 mx-auto f-row f-justify-around f-wrap g-30'>
                {
                    ProjectsData && ProjectsData.map((item, index) => (
                        <ProjectCard key={index} data={item} />
                    ))
                }
                <Link className='vi-btn-all f-row br-max w-100 f-center mt-10 pointer' to='/Projects'>View All</Link>
            </div>
        </section>
    )
}