import React, {useEffect, useState} from "react";
import './RequestItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActions} from "@material-ui/core";
import {useCookies} from "react-cookie";
import {IconButton, Modal} from "@material-ui/core";

const RequestListItem = (props) => {
    const [cookies] = useCookies(['user']);
    const [group, setGroup] = useState({});
    const [openAccept, setOpenAccept] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openDecline, setOpenDecline] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/${props.item.groupID}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroup(result)
            })
    }, [props.item.groupID])

    const acceptRequest = () =>{
        const body={
            users: props.item.requesterID
        }
        fetch(`http://localhost:3000/api/groups/${props.item.groupID}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                fetch(`http://localhost:3000/api/requests/${props.item._id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                })
                    .then(response => response.json())
                    .then(result => {
                        props.update()
                        setOpenAccept(true)
                    })
            })
    }

    const declineRequest = () =>{
        fetch(`http://localhost:3000/api/requests/${props.item._id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(result => {
                props.update()
                setOpenDelete(true)
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
                props.update()
                setOpenDecline(true)
            })
    }

    const acceptModal = (
        <Modal disableAutoFocus disableEnforceFocus className={'request-alert'} open={openAccept} onClose={()=>setOpenAccept(false)}>
            <div className={'modal'}>
                <p> Your approved has been sent! </p>
            </div>
        </Modal>
    )
    const deleteModal = (
        <Modal disableAutoFocus disableEnforceFocus className={'request-alert'} open={openDelete} onClose={()=>setOpenDelete(false)}>
            <div className={'modal'}>
                <p> We deleted your request! </p>
            </div>
        </Modal>
    )
    const declineModal = (
        <Modal disableAutoFocus disableEnforceFocus className={'request-alert'} open={openDecline} onClose={()=>setOpenDecline(false)}>
            <div className={'modal'}>
                <p> We got your decline! </p>
            </div>
        </Modal>
    )

    return (
        <div className={'list-item'}>
            {acceptModal}
            {deleteModal}
            {declineModal}
            <Card className={'R-card'} elevation={5}>
                {/*<CardActionArea className={'card-item'} style={{display: 'flex'}} onClick={() => {}}>*/}
                <CardContent className={'R-card-content'}>
                    <Typography variant="h5">
                        {group.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {group.description}
                    </Typography>
                </CardContent>
                <div className={'btns'}>
                <CardActions>
                    {cookies.user.googleID === props.item.ownerID ?
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