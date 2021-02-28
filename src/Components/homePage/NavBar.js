import React from "react";
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={'navbar'}>
            <NavLink to={'/new-trail'}>Create Trail</NavLink>
        </div>
    )

}

export default NavBar