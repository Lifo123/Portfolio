import { useEffect, useState } from "react"
import Skeleton from "@Apps/Skeleton";

export default function ProjectCards({ max }) {
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
        <div className="f-row g-2 f-wrap f-center" >
            {
                Projects && Object.keys(Projects).length > 0 ? Object.keys(Projects).slice(0, (max || Object.keys(Projects).length)).map((key, i) => (
                    <div className="project-card px-4 py-3" key={i}>
                        <span className="fs-2 fw-500 text-common"> {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(Projects[key].date))}</span>
                        <h2 className="fs-5 mt-2">{Projects[key].tittle}</h2>
                        <div className="f-row g-2 py-1 mb-2">
                            {Projects[key].techs.map((item) => <span key={item} className="fs-6 fw-400 br-max tag" data-tag={item}>{item}</span>)}
                        </div>
                        <p className="mb-1">{Projects[key].description
                            .split(/\s+/)
                            .map((word) => word.replace(/,/g, ""))
                            .slice(0, 12)
                            .join(" ")}...
                        </p>
                        <div className="f-row g-2 f-justify-between mt-3 f-wrap">
                            <a className="btn btn-third  fs-2 fw-500 br-6 d-flex f-center f-grow" href={Projects[key].repository}>Source Code</a>
                            <a className="icon btn btn-third  fs-2 fw-600 br-6 d-flex f-center g-2 f-grow" href={Projects[key].websiteURL}>
                                <svg width="20" viewBox="0 1.75 24 24" fill="none" stroke="var(--f-p-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                )) : (
                    <>
                        <div className="project-card-skeleton f-col g-2 p-3">
                            <Skeleton className="w-20" />
                            <Skeleton className="w-70" />
                            <Skeleton className="w-100" />
                            <Skeleton className="w-80" />
                            <div className="f-row g-2 f-wrap w-100 f-justify-between">
                                <Skeleton className="w-40" />
                                <Skeleton className="w-40" />
                            </div>
                        </div>
                        <div className="project-card-skeleton f-col g-2 p-3">
                            <Skeleton className="w-20" />
                            <Skeleton className="w-70" />
                            <Skeleton className="w-100" />
                            <Skeleton className="w-80" />
                            <div className="f-row g-2 f-wrap w-100 f-justify-between">
                                <Skeleton className="w-40" />
                                <Skeleton className="w-40" />
                            </div>
                        </div>
                        <div className="project-card-skeleton f-col g-2 p-3">
                            <Skeleton className="w-20" />
                            <Skeleton className="w-70" />
                            <Skeleton className="w-100" />
                            <Skeleton className="w-80" />
                            <div className="f-row g-2 f-wrap w-100 f-justify-between">
                                <Skeleton className="w-40" />
                                <Skeleton className="w-40" />
                            </div>
                        </div>
                        <div className="project-card-skeleton f-col g-2 p-3">
                            <Skeleton className="w-20" />
                            <Skeleton className="w-70" />
                            <Skeleton className="w-100" />
                            <Skeleton className="w-80" />
                            <div className="f-row g-2 f-wrap w-100 f-justify-between">
                                <Skeleton className="w-40" />
                                <Skeleton className="w-40" />
                            </div>
                        </div>
                    </>
                )
            }
        </div>

    )
}