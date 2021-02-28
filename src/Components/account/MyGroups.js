import React, {useState, useEffect} from "react";
import './MyGroups.css'
import ListItem from "../shared/ListItem";
import Header from "../shared/Header";
import {useCookies} from "react-cookie";

const MyGroups = (props) => {
    const [cookies] = useCookies(['user']);
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/?userID=${cookies.user.googleID}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroupList(result)
            })
    }, [])

    const eachItem = (item, index) => {
        fetch(`http://localhost:3000/api/trails/${item.trail}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                return (<ListItem key={index} item={item} path={'/group'} images={result.images}/>)
            })
    }

    return (
        <>
            <Header/>
            <div className={'my-groups'}>
                <h2>My Groups</h2>
                <div className={'result-list'}>
                    {groupList.map(eachItem)}
                </div>
            </div>
        </>
    )
}

export default MyGroups