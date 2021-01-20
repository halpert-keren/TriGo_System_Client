import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={"header"}>
            <div className={'header-content'}>
                <NavLink exact to="/" className={'logo'}/>
                <div className={'userAvatar'}/>
            </div>
        </div>
    )
}

export default Header