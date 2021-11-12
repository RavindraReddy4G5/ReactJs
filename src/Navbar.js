import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span><a className="navbar-brand" href="#">MyApp</a></span>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link to="/">
                            <li className="nav-item active mx-3">
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link to="/music">
                            <li className="nav-item mx-3">
                                <span>Music Songs</span>
                            </li>
                        </Link>
                        <Link to="/imgdownloader">
                            <li className="nav-item mx-3">
                                <span>ImgDownLoader</span>
                            </li>
                        </Link>
                        <Link to="/login">
                            <li className="nav-item mx-3">
                                <span>Login</span>
                            </li>
                        </Link>
                        <Link to="/msgcount">
                            <li className="nav-item mx-3">
                                <span>NotificationsBar</span>
                            </li>
                        </Link>
                        <Link to="/signupform">
                            <li className="nav-item mx-3">
                                <span>SignUpForm</span>
                            </li>
                        </Link>
                        <Link to="/popupform">
                            <li className="nav-item mx-3">
                                <span>PopUpForm</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
