import React, {useState, useEffect} from "react";
import './Requests.css'
import RequestListItem from "./RequestItem";

const id = '6002d4fe60075a2e14bfa282';
const Requests = (props) => {
    const [requestsList, setRequestsList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/requests/?userID=${id}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setRequestsList(result)
            })
    }, [])

    const eachItem = (item, index) => {
        return (<RequestListItem key={index} item={item}/>)
    }

    return (
        <div className={'my-requests'}>
            <h2>My Requests</h2>
            <div className={'result-list'}>
                {requestsList.map(eachItem)}
            </div>
        </div>
    )

}

export default Requests