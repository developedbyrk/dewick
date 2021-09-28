import React from 'react'
import {
    Link
} from "react-router-dom";


const HomeLocation = () => {
    return (
        <div className="row py-5">
            <div className="py-0 py-md-5 d-flex justify-content-center flex-column align-items-center col-12 col-md-8 text-center offset-md-2">
                <h3 className="fw-bold">United Kingdom | Canada | Australia | New Zealand | Ireland</h3>
                <p className="fs-5 fw-bold pt-2 pb-4">
                    <Link to="#" className="link-success ps-1 text-decoration-none">Mechanical</Link> |
                    <Link to="#" className="link-success ps-1 text-decoration-none">Electrical</Link> |
                    <Link to="#" className="link-success ps-1 text-decoration-none">Hydraulic</Link> |
                    <Link to="#" className="link-success ps-1 text-decoration-none">Fire</Link> |
                    <Link to="#" className="link-success ps-1 text-decoration-none">General Contractors</Link>
                </p>
                <p className="fs-5 mb-3 text-black fw-light">Leave the O&M Manual writing to us so you can concentrate on what you are good at.</p>
                <p className="fs-5 mb-3 text-black fw-light">We fully understand the fast-paced construction industry and our experienced and dedicated team are ready to assist you.</p>
                <p className="fs-5 mb-3 text-black fw-light">Our other services include:</p>
                <p className="fs-5 mb-3 text-black fw-light"> Commissioning Plans | As Installed Drawings | Mechanical Engineering</p>
            </div>
        </div>
    )
}

export default HomeLocation
