import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css'

const Footer = () => {
    return (
        <div className={"footer"}>
            <CopyrightIcon className={'copyRight'} size={'small'}/>
            <h6>TriGo 2021</h6>
        </div>
    )
}

export default Footer