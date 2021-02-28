import React, {useEffect, useState} from "react";
import './TrailPage.css'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import EmojiFlagsRoundedIcon from '@material-ui/icons/EmojiFlagsRounded';
import LinearScaleRoundedIcon from '@material-ui/icons/LinearScaleRounded';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import AccessibleRoundedIcon from '@material-ui/icons/AccessibleRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Header from "../shared/Header";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const TrailPage = (props) => {
    let history = useHistory()
    const [trail, setTrail] = useState({});
    const [favorite, setFavorite] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        fetch(`http://localhost:3000/api/trails/${props.location.data}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTrail(result)
                console.log(cookies.user)
                if(cookies.user.savedTrails.includes(result._id)) {
                    setFavorite(true)
                }
            })
    }, [])

    const createGroup = () => {

    }

    const addToFavorite = () => {
        if(favorite){
            const body={
                savedTrails:[trail._id],
                action:false
            }

            fetch(`http://localhost:3000/api/users/${cookies.user._id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setFavorite(false)
                    setCookie('user', result)
                })
        }
        else{
            const body={
                savedTrails:[trail._id],
                action:true
            }

            fetch(`http://localhost:3000/api/users/${cookies.user._id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setFavorite(true)
                    setCookie('user', result)
                })
        }
    }

    return (
        <>
            <Header/>
            <div className={'trail-page'}>
                <div className={'page-info'}>
                    <IconButton className={'go-back'} onClick={() => history.goBack()}>
                        <ArrowBackRoundedIcon fontSize={'large'}/></IconButton>
                    <div className={'favorite'}>
                    <h1>{trail.name}</h1>
                        <IconButton onClick={addToFavorite} >
                            { favorite?
                                <FavoriteRoundedIcon fontSize={'large'}/>:
                                <FavoriteBorderRoundedIcon fontSize={'large'}/>
                            }
                        </IconButton>
                    </div>
                    <div className={'info-item'}>
                        <LocationOnRoundedIcon fontSize={'large'}/>
                        <h3>{trail.location}</h3>
                    </div>
                    <div className={'info-item'}>
                        <LinearScaleRoundedIcon fontSize={'large'}/>
                        <h3>{trail.length}</h3>
                    </div>
                    <div className={'info-item'}>
                        <EmojiFlagsRoundedIcon fontSize={'large'}/>
                        <h3>{trail.area ? trail.area : 'no info'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <FitnessCenterRoundedIcon fontSize={'large'}/>
                        <h3>{trail.difficulty}</h3>
                    </div>
                    <div className={'info-item'}>
                        <AccessibleRoundedIcon fontSize={'large'}/>
                        <h3>{trail.accessibility ? trail.accessibility : 'no info'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <Brightness4RoundedIcon fontSize={'large'}/>
                        <h3>{trail.timeOfDay ? trail.timeOfDay : 'no info'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <RestaurantRoundedIcon fontSize={'large'}/>
                        <h3>{trail.picnicArea ? 'yes' : 'no'}</h3>
                    </div>
                    <div className={'info-item'}>
                        <ScheduleRoundedIcon fontSize={'large'}/>
                        <h3>{trail.lengthOfTime}</h3>
                    </div>
                    <div className={'info-item'}>
                        <LocalMallRoundedIcon fontSize={'large'}/>
                        <h3>{trail.equipment === undefined ? 'no info' : (trail.equipment.map((item, i) => <span
                            key={i}>{item}{' /'}</span>))}</h3>
                    </div>
                    <div className={'info-item'}>
                        <p>{trail.description}</p>
                    </div>
                    <button className={'createGroup'} onClick={createGroup}>Create Group</button>
                </div>
                <div className={'trail-page-img'}>
                    <img alt={`${trail.name}`}
                         src={'https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S'}/>
                </div>
            </div>
        </>
    )
}

export default TrailPage