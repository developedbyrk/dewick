import React from 'react'
import BannerArea from '../components/BannerArea'
import { MechanicalProjects } from '../components/MechanicalProjects'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <BannerArea bannerTitle="Mechanical Projects" />
            <div className="container py-5 sh">
                <h2 className="fw-bold text-secondary text-center py-5 mt-lg-3 mt-0">Mechanical Projects</h2>
                <div className="row">
                    {
                        MechanicalProjects.map(project => {
                            const { id, link, title, image, detail } = project;

                            return <div className="col-lg-4 col-sm-6 col-12 pb-5" key={id}>
                                <figure className="project-image overflow-hidden">
                                    {image}
                                </figure>
                                <h4 className="pt-4 pb-2"><Link to={link} className="text-decoration-none link-dark fw-bold">{title}</Link></h4>
                                <p>{detail} <Link to={link} className="link-success text-decoration-none fw-bold">READ MORE</Link></p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects
