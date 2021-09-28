import React from 'react'
import SubscribeForm from './SubscribeForm';
import {
    Link
} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <SubscribeForm />
            </div>
            <div className="bg-secondary py-3">
                <section className="container d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to="/dewick" className="nav-link text-white">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">ABOUT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/resources">RESOURCES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/projects">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/knowledge">KNOWLEDGE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                    <p className="text-white mb-0">© 2021 Dewick & Associates</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer
