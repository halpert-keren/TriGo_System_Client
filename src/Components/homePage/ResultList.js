import React from "react";
import './ResultList.css'
import ListItem from "../shared/ListItem";

const ResultList = (props) => {
    const eachItem = (item, index) => {
        return (<ListItem key={index} item={item} path={props.path}/>)
    }
    
    return (
        <div className={'result-list'}>
            {props.list.map(eachItem)}
        </div>
    )

}

export default ResultList