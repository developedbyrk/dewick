import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = ({ sidebarTitle, links }) => {
    return (
        <div className="col-lg-3 col-12 pt-5 pt-lg-0">
            <div className="bg-secondary p-4">
                <h5 className="text-white fw-bold">{sidebarTitle}</h5>
                <nav className="navbar">
                    <ul className="nav flex-column">
                        {
                            links.map((link, id) => {
                                return <li key={id}><Link to="#" className="link-light text-decoration-none lh-lg">{link.text}</Link></li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideMenu
