import React from "react";
import './ResultList.css'
import image from '../shared/imagePlaceholder.png'
import ListItem from "../shared/ListItem";

const ResultList = (props) => {
    const eachItem = (item, index) => {
        if(props.type === 'trail')
            return (<ListItem type={props.type} key={index} item={item} path={props.path} images={item.images}/>)
        else
            return (<ListItem type={props.type} key={index} item={item} path={props.path} images={[image]}/>)
    }
    
    return (
        <div className={'result-list'}>
            {props.list.map(eachItem)}
        </div>
    )

}

export default ResultList