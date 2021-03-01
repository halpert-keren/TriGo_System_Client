import React, {useState, useEffect} from "react";
import './MyGroups.css'
import ListItem from "../shared/ListItem";
import Header from "../shared/Header";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {IconButton} from "@material-ui/core";

const MyGroups = (props) => {
    const [cookies] = useCookies(['user']);
    const [groupList, setGroupList] = useState(null);

    useEffect(() => {
        fetch(`https://trigo-system.herokuapp.com/api/groups/?email=${cookies.user.email}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroupList(result)
            })
    })

    const eachItem = (item, index) => {
        return (<ListItem type={'group'} key={index} item={item} path={'/group'} images={item.trail.images}/>)
    }

    const backHistory = useHistory();
    const goBack = () =>{
        let path = `/home`;
        backHistory.push(path);
    }

    return (
        <>
            <Header/>
            <div className={'my-groups'}>
                <IconButton className={'go-back'} onClick={goBack}>
                    <ArrowBackRoundedIcon fontSize={'large'}/>
                </IconButton>
                <h2>My Groups</h2>
                <div className={'result-list'}>
                    {groupList ? groupList.map(eachItem): null}
                </div>
            </div>
        </>
    )
}

export default MyGroups