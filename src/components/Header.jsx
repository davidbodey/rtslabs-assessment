import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbar" className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    Home
                </NavLink>

                <NavLink className="navbar-item" to="/history">
                    History
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
