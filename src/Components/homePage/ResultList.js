import React from "react";
import './ResultList.css'
import ListItem from "./ListItem";

const ResultList = (props) => {
    return (
        <div className={'result-list'}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    )

}

export default ResultList