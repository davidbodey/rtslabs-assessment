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

                <NavLink className="navbar-item" to="/news">
                    News
                </NavLink>
                <div className={'navbar-item'}>
                    <img className="logo" src={logo}  />
                </div>
            </div>




        </nav>
    );
}

export default Header;
