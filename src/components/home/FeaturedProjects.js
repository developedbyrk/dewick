import React from 'react'
import P1 from "./images/p1.jpeg"
import P2 from "./images/p2.jpeg"
import P3 from "./images/p3.jpeg"
import {
    Link
} from "react-router-dom";


const FeaturedProjects = () => {

    const Projects = [
        {
            img: <img src={P1} alt="Mechanical Engineering Design | Sydney Opera House Redevelopment" />,
            title: 'Mechanical Engineering Design | Sydney Opera House Redevelopment',
            summary: '“It stands by itself as one of the indisputable masterpieces of human creativity, not only in the 20th century, but in the history of humankind.” Expert evaluation report to the UNESCO World Heritage Committee, 2007….',
            link: 'READ MORE'
        },
        {
            img: <img src={P2} alt="Builder Manual | Woodside Foodland" />,
            title: 'Builder Manual | Woodside Foodland',
            summary: 'The Klose family own several independent Foodland stores throughout the Adelaide Hills and in early 2020 relocated their Woodside store to a larger premise to enable them to better serve the local community for years…',
            link: 'READ MORE'
        },
        {
            img: <img src={P3} alt="Electrical Services O&M Manual + As Installed Drawings | Coca-Cola Warehouse and Distribution Centre, Salisbury" />,
            title: 'Electrical Services O&M Manual + As Installed Drawings | Coca-Cola Warehouse and Distribution Centre, Salisbury',
            summary: 'Coca-Cola is an established soft drink brand that has operated in Australia since the early 1900s.  Originally manufactured solely in Sydney, the company was able to expand after World War II to begin bottling in…',
            link: 'READ MORE'
        }
    ]

    return (
        <div className="bg-light py-md-5 py-3">
            <div className="container">
                <h1 className="fw-bold text-secondary text-center py-5">FEATURED PROJECTS</h1>
                <div className="d-flex gap-5 pb-5 flex-column flex-md-row">
                    {
                        Projects.map((item, index) => {
                            return <div className="item flex-grow-1" key={index}>
                                <figure className="overflow-hidden">
                                    {item.img}
                                </figure>
                                <h4>
                                    <Link to="#" className="text-decoration-none link-dark fw-bold">{item.title}</Link>
                                </h4>
                                <p className="">
                                    {item.summary} <Link className="link-success fw-bold text-decoration-none" to="#">{item.link}</Link>
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects
