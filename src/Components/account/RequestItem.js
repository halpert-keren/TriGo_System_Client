import React, {useEffect, useState} from "react";
import './RequestItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActions} from "@material-ui/core";

const id = '6002fb8ed6fd9e28e064080f';
const RequestListItem = (props) => {

    const [group, setGroup] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/${props.item.groupID}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroup(result)
            })
    }, [])

    const acceptRequest = () =>{
        const body = {
            status : 'approved'
        }

        fetch(`http://localhost:3000/api/requests/${props.item._id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    const declineRequest = () =>{
        const body = {
            status : 'declined'
        }

        fetch(`http://localhost:3000/api/requests/${props.item._id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    const deleteRequest = () =>{
        fetch(`http://localhost:3000/api/requests/${props.item._id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className={'list-item'}>
            <Card className={'card'} elevation={5}>
                {/*<CardActionArea className={'card-item'} style={{display: 'flex'}} onClick={() => {}}>*/}
                <CardContent className={'card-content'}>
                    <Typography variant="h5">
                        {group.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {group.description}
                    </Typography>
                </CardContent>
                <div className={'btns'}>
                <CardActions>
                    {id === props.item.ownerID ?
                        (
                            <>
                                <button className={'accept'} onClick={acceptRequest}> accept</button>
                                <button className={'decline'} onClick={declineRequest}> decline</button>
                            </>
                        ) : (
                            <button className={'cancel'} onClick={deleteRequest}> cancel </button>)
                    }
                </CardActions>
                </div>
            </Card>
        </div>
    )

}

export default RequestListItem