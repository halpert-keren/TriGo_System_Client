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
import Header from "../shared/Header";

const id = '600481161f767f3dfc3b78ce'
const TrailPage = (props) => {
    const [trail, setTrail] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/trails/${id}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTrail(result)
            })
    }, [])

    const createGroup = () => {

    }

    // const addToFavorite = () => {
    //
    // }

    return (
        <>
            <Header/>
            <div className={'trail-page'}>
                <div className={'trail-page-info'}>
                    <h1>{trail.name}</h1>
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