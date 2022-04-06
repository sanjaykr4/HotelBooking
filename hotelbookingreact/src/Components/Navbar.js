import React from 'react'
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3" href="/"><h3>Hotel Khojo</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/about"><b>About us</b></Link>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/about"><b>Contact us</b></a>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-primary btn-lg my-5 my-sm-0" id="user" type="submit" to="/userlogin">User Login</Link>
                        <Link className="btn btn-outline-success btn-lg my-2 my-sm-0" id="admin" type="submit" to="/adminlogin">Admin Login</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}
