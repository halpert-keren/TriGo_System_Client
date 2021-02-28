import React, {useState, useEffect} from "react";
import './Requests.css'
import RequestListItem from "./RequestItem";
import {useCookies} from "react-cookie";
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {IconButton} from "@material-ui/core";

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

    const backHistory = useHistory();
    const goBack = () =>{
        let path = `/home`;
        backHistory.push(path);
    }

    return (
        <>
            <Header/>
            <div className={'my-requests'}>
                <IconButton className={'go-back'} onClick={goBack}>
                    <ArrowBackRoundedIcon fontSize={'large'}/>
                </IconButton>
                <h2>My Requests</h2>
                <div className={'R-result-list'}>
                    {requestsList.map(eachItem)}
                </div>
            </div>
        </>
    )

}

export default Requests