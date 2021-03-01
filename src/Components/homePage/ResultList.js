import React from "react";
import './ResultList.css'
import image from '../shared/groupPlaceholder.png'
import ListItem from "../shared/ListItem";

const ResultList = (props) => {
    const eachItem = (item, index) => {
        console.log(item)
        if(props.type === 'trails')
            return (<ListItem type={props.type} key={index} item={item} path={props.path} images={item.images}/>)
        else
            return (<ListItem type={props.type} key={index} item={item} path={props.path} images={item.trail ? item.trail.images:[image]}/>)
    }
    
    return (
        <div className={'result-list'}>
            {props.list.map(eachItem)}
        </div>
    )

}

export default ResultList