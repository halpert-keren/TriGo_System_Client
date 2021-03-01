import React, {useEffect, useState} from "react";
import './GroupPage.css'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import image from '../shared/groupPlaceholder.png'
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";
import {IconButton, Modal} from "@material-ui/core";
import {useCookies} from "react-cookie";

const GroupPage = (props) => {
    const [cookies] = useCookies(['user']);
    let history = useHistory()
    const [group, setGroup] = useState({});
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://trigo-system.herokuapp.com/api/groups/${props.location.data}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setGroup(result)
                setImages(
                    result.trail.images.map(url => ({
                        original: `${url}`
                    }))
                )
            })
    }, [props.location.data])

    const joinGroup = () => {
        const body = {
            groupID: group._id,
            requesterID: cookies.user.email,
        }
        console.log(body)
        fetch(`https://trigo-system.herokuapp.com/api/requests/`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                setOpen(true)
            })
    }

    const requestModal = (
        <Modal disableAutoFocus disableEnforceFocus className={'request-alert'} open={open} onClose={()=>setOpen(false)}>
            <div className={'modal'}>
                <p> Your request has been sent! </p>
            </div>
        </Modal>
    )

    return (
        <>
            {requestModal}
            <Header/>
            <div className={'group-page'}>
                <div className={'page-info'}>
                    <IconButton className={'go-back'} onClick={() => history.goBack()}>
                        <ArrowBackRoundedIcon fontSize={'large'}/>
                    </IconButton>
                    <h1>{group.name}</h1>
                    <div className={'info-item'}>
                        <LocationOnRoundedIcon fontSize={'large'}/>
                        <h3>{group.trail ? group.trail.name:'no info'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <TodayRoundedIcon fontSize={'large'}/>
                        <h3>{group.date}</h3>
                    </div>
                    <div className={'info-item'}>
                        <ScheduleRoundedIcon fontSize={'large'}/>
                        <h3>{group.time}</h3>
                    </div>
                    <div className={'info-item'}>
                        <LockRoundedIcon fontSize={'large'}/>
                        <h3>{group.privacy ? 'Private' : 'Public'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <GroupRoundedIcon fontSize={'large'}/>
                        <h3>{group.users ? group.users.length : '1'} Members</h3>
                    </div>
                    <div className={'info-item'}>
                        <p>{group.description}</p>
                    </div>
                    <button className={'success'} onClick={joinGroup}>Join</button>
                </div>
                <div className={'group-page-img'}>
                    <ImageGallery showPlayButton={false} showNav={false} autoPlay={true} slideInterval={5000}
                                  showFullscreenButton={false} showThumbnails={false} items={images? images:[{original:image}]}/>
                </div>
            </div>
        </>
    )
}

export default GroupPage