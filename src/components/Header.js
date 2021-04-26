import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="/usman.jpg" width="5%" style={{ borderRadius: "50%" }} height="5%" alt="" />
                    &nbsp; 	&nbsp; H M Usman</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link" >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
