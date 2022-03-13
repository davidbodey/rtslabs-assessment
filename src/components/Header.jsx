import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbar" className="navbar-brand">
                <NavLink className="navbar-item" to="/image">
                    Images
                </NavLink>

                <NavLink className="navbar-item" to="/news">
                    News
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
