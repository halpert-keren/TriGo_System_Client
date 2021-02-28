import React, {useState, useEffect} from "react";
import './SavedTrails.css'
import ListItem from "../shared/ListItem";
import Header from "../shared/Header";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {IconButton} from "@material-ui/core";

const MyTrails = (props) => {
    const [cookies] = useCookies(['user']);
    const [trailList, setTrailList] = useState([]);
    // const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/users/${cookies.user.googleID}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                // setUser(result)
                result.savedTrails.forEach((trail) => {
                    fetch(`http://localhost:3000/api/trails/${trail}`, {
                        credentials: 'include',
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(response => response.json())
                        .then(result => {
                            setTrailList(oldArray => [...oldArray, result]);
                        })
                })
            })
    }, [])

    const eachItem = (item, index) => {
        return (<ListItem type={'trail'} key={index} item={item} path={'/trail'} images={item.images}/>)
    }

    const backHistory = useHistory();
    const goBack = () =>{
        let path = `/home`;
        backHistory.push(path);
    }

    return (
        <>
            <Header/>
            <div className={'my-trails'}>
                <IconButton className={'go-back'} onClick={goBack}>
                    <ArrowBackRoundedIcon fontSize={'large'}/>
                </IconButton>
                <h2>My Trails</h2>
                <div className={'result-list'}>
                    {trailList.map(eachItem)}
                </div>
            </div>
        </>
    )

}

export default MyTrails