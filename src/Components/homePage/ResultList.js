import React from "react";
import './ResultList.css'
import ListItem from "../shared/ListItem";

const ResultList = (props) => {
    const eachItem = (item, index) => {
        let images = []
        if(item.images) {
            images = item.images
        } else {
            fetch(`http://localhost:3000/api/trails/${item.trail}`, {
                credentials: 'include',
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .then(result => {images = result.images})
        }
        return (<ListItem key={index} item={item} path={props.path} images={images}/>)
    }
    
    return (
        <div className={'result-list'}>
            {props.list.map(eachItem)}
        </div>
    )

}

export default ResultList