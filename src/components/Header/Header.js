import React from 'react';
import { NavLink } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header({ counter, favItem }) {
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            } to='/'>Home</NavLink></li>
                            <li><NavLink to='/department' className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            } >Departments</NavLink></li>
                            <li><NavLink to='/doctor' className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>Doctors</NavLink></li>
                            <li><NavLink to='/medicine' className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>Medicines</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>About</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to='/appointment' className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>
                    <NavLink to='/auth' className="appointment-btn scrollto">
                        <span className={({ isActive, isPending }) =>
                            isActive ? "active" : ""
                        }>Login/ Signup</span>
                    </NavLink>
                    <Badge className='badge' badgeContent={counter} color="primary">
                        <AddShoppingCartIcon />
                    </Badge>
                    <Badge badgeContent={favItem.length} color="primary">
                        <FavoriteBorderIcon />
                    </Badge>
                </div>
            </header>
        </div>
    );
}

export default Header;