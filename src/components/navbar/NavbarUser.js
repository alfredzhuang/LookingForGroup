import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


function NavbarUser() {
    return (
    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo">
                <Link to="/homepage">
                    <img src="images/logo.png" alt="lfg logo"/>
                </Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <Link to="/browse">
                        <li className="navbar-link-item">
                            <p>Browse</p>
                        </li>
                    </Link>
                    <Link to="/findgroup">
                        <li className="navbar-link-item">
                            <p>Find Group</p>
                        </li>
                    </Link>
                    <Link to="/create">
                        <li className="navbar-link-item">
                            <p>Create Group</p>
                        </li>
                    </Link>
                    <li className="navbar-login-button">
                        <p>Log Out</p>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavbarUser
