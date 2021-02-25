import React, {useEffect, useState} from "react";
import './GroupPage.css'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

const id = '603796c923a5b04718d1298f'
const GroupPage = (props) => {
    const [group, setGroup] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/groups/${id}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setGroup(result)
            })
    }, [])

    const joinGroup = () => {

    }

    return (
        <div className={'group-page'}>
            <div className={'group-page-info'}>
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
                    <h3>{group.users.length} Members</h3>
                </div>
                <div className={'info-item'}>
                    <p>{group.description}</p>
                </div>
                <button className={'success'} onClick={joinGroup}>Join</button>
            </div>
            <div className={'group-page-img'}>
                <img alt={`${'trail_name'}`}
                     src={'https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S'}/>
            </div>
        </div>
    )
}

export default GroupPage