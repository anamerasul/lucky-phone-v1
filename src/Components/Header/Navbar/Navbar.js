import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container mx-auto">
                    <a className="navbar-brand fs-2 fw-bold text-uppercase text-dark" href="/">Favored <span className="text-secondary">Phone</span></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;