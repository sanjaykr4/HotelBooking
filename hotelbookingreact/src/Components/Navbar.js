import React from 'react'
import "../Components/Navbar.css";

export default function Navbar() {
    return (
        // <div>
        //     <nav className="navbar navbar-light bg-light">
        //         <a className="navbar-brand"><h1>Hotel Khojo</h1></a>
        //         <button className="btn btn-outline-success btn-lg my-2 my-sm-0" type="submit">Admin Login</button>
        //     </nav>
        // </div>



        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3" href="#"><h3>Hotel Khojo</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  mx-3" href="#"><b>Hotels</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#"><b>About us</b></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link mx-3"><b>Contact us</b></a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success btn-lg my-2 my-sm-0" id="admin" type="submit">Admin Login</button>
                    </div>
                </div>
            </nav>
        </div>

    )
}
