import React from 'react'
import BannerArea from '../components/BannerArea'
import "../styles/Pages.css"
import SideMenu from '../components/SideMenu'
import Accordion from '../components/Accordion'
import AccordionData from '../components/AccordionData'

const Services = () => {

    const sidebarLinks = [
        {
            text: "O&M Manuals"
        },
        {
            text: "Commissioning Plans"
        },
        {
            text: "Mechanical Engineering"
        },
        {
            text: "Builders Manuals"
        }
    ]

    return (
        <>
            <BannerArea bannerTitle="Services : O&M Manuals" />
            <div className="container py-5 sh">
                <div className="row gx-5 py-5">
                    <div className="col-lg-9 col-12 pe-lg-5">
                        <p>Dewick & Associates provide Operating and Maintenance Manuals for all building services including:</p>
                        <div className="fw-light lh-lg">
                            <ul>
                                <li>Mechanical O&M Manuals</li>
                                <li>Electrical O&M Manuals</li>
                                <li>Hydraulic O&M Manuals</li>
                                <li>Fire O&M Manuals</li>
                            </ul>
                            <p>We write the complete O&M Manual including:</p>
                            <ul>
                                <li>Title page and Table of Contents</li>
                                <li>Introduction section project specific, including contact list and references</li>
                                <li>Detailed system descriptions and scope</li>
                                <li>Operating Instructions</li>
                                <li>Maintenance and Fault Finding</li>
                                <li>Technical Data Schedules</li>
                                <li>Source and include all relevant manufacturer’s literature</li>
                                <li>As Installed Drawings</li>
                            </ul>
                        </div>
                        <div className="accordion_wrapper border-bottom pt-4 mb-4">
                            {
                                AccordionData.map(item => {
                                    const { title, content, id } = item;
                                    return <Accordion title={title} content={content} key={id} />
                                })
                            }
                        </div>
                    </div>
                    <SideMenu sidebarTitle="SERVICES" links={sidebarLinks} />
                </div>
            </div>
        </>
    )
}

export default Services

