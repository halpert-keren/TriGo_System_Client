import React, {useState, useEffect} from "react";
import './MyGroups.css'
import ListItem from "./ListItem";

const id = '6002d4fe60075a2e14bfa282';
const MyGroups = (props) => {
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/?userID=${id}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroupList(result)
            })
    }, [])

    const eachItem = (item, index) => {
        return (<ListItem key={index} item={item}/>)
    }

    return (
        <div className={'my-groups'}>
            <h2>My Groups</h2>
            <div className={'result-list'}>
            {groupList.map(eachItem)}
            </div>
        </div>
    )

}

export default MyGroups