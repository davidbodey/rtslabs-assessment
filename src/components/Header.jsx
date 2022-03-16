import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo-default-monochrome-black.svg"
const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{padding:'10px'}}>
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/images">
                    Images
                </NavLink>

                <NavLink className="navbar-item" to="/videos">
                    Videos
                </NavLink>

                <NavLink className="navbar-item" to="/news">
                    News
                </NavLink>
                {/*<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"*/}
                {/*   data-target="nav-menu">*/}
                {/*    <span aria-hidden="true"></span>*/}
                {/*    <span aria-hidden="true"></span>*/}
                {/*    <span aria-hidden="true"></span>*/}
                {/*</a>*/}
            </div>

            <div>
                <img className="logo" src={logo}  />
            </div>
        </nav>
    );
}

export default Header;
