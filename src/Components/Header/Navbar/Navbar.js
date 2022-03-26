import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container mx-auto">
                    <a className="navbar-brand" href="/">Lucky Phone</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;