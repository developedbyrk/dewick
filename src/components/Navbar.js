import React from 'react';
import Logo from "./home/images/logo@2x.png";
import {
    Link
} from "react-router-dom";

const Navbar = (props) => {

    return (
        <header className={props.offset > 250 ? 'scroll' : ''} ref={props.heightRef}>
            <div className="container p-2">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dewick"><img src={Logo} alt="Dewick" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <Link to="/dewick" className="nav-link text-black">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/about">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/services">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/resources">RESOURCES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/projects">PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/knowledge">KNOWLEDGE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-black" to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
