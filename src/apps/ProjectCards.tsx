import { useEffect, useState } from "react"

export default function ProjectCards() {
    const [Projects, setProjects] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://app-xr5kdq6jkq-uc.a.run.app/projects/",);
            const data = await res.json();
            setProjects(data);
        }
        fetchData();
        console.log('execute');

    }, [])




    return (
        <div className="f-row g-2 f-wrap f-center">
            {
                Projects && Object.keys(Projects).length > 0 ? Object.keys(Projects).map((key, i) => (
                    <div className="project-card px-4 py-3" key={i}>
                        <h3>{Projects[key].tittle}</h3>
                        <div className="f-row g-2 py-1 mb-2">
                            {Projects[key].techs.map((item) => <span key={item} className="fs-6 fw-400 br-max tag" data-tag={item}>{item}</span>)}
                        </div>
                        <p className="fs-2 mb-1">{Projects[key].description
                            .split(/\s+/)
                            .map((word) => word.replace(/,/g, ""))
                            .slice(0, 12)
                            .join(" ")}...
                        </p>
                        <div className="f-row g-2 f-justify-between mt-3">
                            <a className="btn btn-secondary fw-500 br-6 d-flex f-center" href={Projects[key].repository}>Source Code</a>
                            <a className="btn btn-secondary fw-600 br-6 d-flex f-center" href={Projects[key].websiteURL}>Live Demo</a>
                        </div>
                    </div>
                )) : (
                    <>
                        <div className="project-card-skeleton"></div>
                        <div className="project-card-skeleton"></div>
                        <div className="project-card-skeleton"></div>
                    </>
                )
            }
        </div>

    )
}