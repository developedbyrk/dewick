import React from 'react'
import { Link } from 'react-router-dom'
import Folders from "../images/Folders.jpeg"

const NewEnquiries = () => {
    return (
        <div className="col-md-6 col-12 pe-lg-5 pe-md-3">
            <h2 className="fw-bold text-secondary">Dewick & Associates</h2>
            <h4 className="pt-4 pb-2">New Enquiries:</h4>
            <p className="mb-0">UK/Ireland: <Link to="#" className="link-success text-decoration-none">+44 (0)20 8144 8263</Link></p>
            <p className="mb-0">Canada: <Link to="#" className="link-success text-decoration-none">+1 647 727 8856</Link></p>
            <p className="mb-0">Aus/NZ: <Link to="#" className="link-success text-decoration-none">+61 (0)8 7200 0588</Link></p>
            <p className="mb-0">Email: <Link to="#" className="link-success text-decoration-none">enquiries@dewick.com</Link></p>
            <img className="py-lg-5 py-3" src={Folders} alt={Folders} />
        </div>
    )
}

export default NewEnquiries
