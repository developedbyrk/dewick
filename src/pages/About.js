import React from 'react'
import BannerArea from '../components/BannerArea'
import AboutProfile from '../components/AboutProfile'
import "../styles/Pages.css"
import SideMenu from '../components/SideMenu'

const About = () => {

    const sidebarLinks = [
        {
            text: "Company Profile"
        },
        {
            text: "Our Approach"
        },
        {
            text: "Our Team"
        },
        {
            text: "FAQ"
        },
        {
            text: "Testimonials"
        }
    ]

    return (
        <>
            <BannerArea bannerTitle="Company Profile" />
            <div className="container py-5 sh">
                <div className="row gx-5 py-5">
                    <div className="col-lg-9 col-12 pe-lg-5">
                        <div className="fw-light">
                            <p>Dewick & Associates has been operating since 2008, providing a practical, flexible and professional Technical Writing and Engineering Service to contractors across Australia and New Zealand.</p>
                            <p>Our team of experienced and dedicated staff provide an efficient and personalised outsourcing option to the building industry. Experience has shown that outsourcing ensures tasks are completed accurately and on time, enabling you to concentrate on the more pressing coordination / on-site works.</p>
                            <p>Drawing on our expertise in both Consulting and Contractor Project Management and with team members who are RPEQ, VBA registered and Chartered Professional Engineers, we can offer an extensive range of services including Engineering, O&M Manuals, and Builder’s manuals:</p>
                        </div>
                        <AboutProfile />
                    </div>
                    <SideMenu sidebarTitle="ABOUT US" links={sidebarLinks} />
                </div>
            </div>
        </>
    )
}

export default About
