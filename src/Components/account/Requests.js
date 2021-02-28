import React, {useState, useEffect} from "react";
import './Requests.css'
import RequestListItem from "./RequestItem";
import {useCookies} from "react-cookie";
import Header from "../shared/Header";

const Requests = (props) => {
    const [requestsList, setRequestsList] = useState([]);
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        fetch(`http://localhost:3000/api/requests/?userID=${cookies.user.googleID}`, {
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
        <>
            <Header/>
            <div className={'my-requests'}>
                <h2>My Requests</h2>
                <div className={'R-result-list'}>
                    {requestsList.map(eachItem)}
                </div>
            </div>
        </>
    )

}

export default Requests