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
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import {useCookies} from "react-cookie";

const GroupPage = (props) => {
    const [cookies] = useCookies(['user']);
    let history = useHistory()
    const [group, setGroup] = useState({});
    // const [trail, setTrail] = useState({});
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/${props.location.data}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => setGroup(result))
    }, [props.location.data])


    useEffect(() => {
        fetch(`http://localhost:3000/api/trails/${group.trail}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.images)
                setImages(result.images.map(url => ({original: `${url}`})))
            })
    }, [group])


    const joinGroup = () => {
        const body = {
            groupID: group._id,
            requesterID: cookies.user.googleID,
        }
        console.log(body)
        fetch(`http://localhost:3000/api/requests/`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <>
            <Header/>
            <div className={'group-page'}>
                <div className={'page-info'}>
                    <IconButton className={'go-back'} onClick={() => history.goBack()}>
                        <ArrowBackRoundedIcon fontSize={'large'}/>
                    </IconButton>
                    <h1>{group.name}</h1>
                    <div className={'info-item'}>
                        <LocationOnRoundedIcon fontSize={'large'}/>
                        <h3>{group.trail}</h3>
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
                    <ImageGallery showPlayButton={false} showNav={false} autoPlay={true}
                                  showFullscreenButton={false} showThumbnails={false} items={images? images:[{original:'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png'}]}/>
                    {/*<img alt={`${group.name}`}*/}
                    {/*     src={'https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S'}/>*/}
                </div>
            </div>
        </>
    )
}

export default GroupPage