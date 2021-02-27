import React, {useState} from "react";
import './NewGroupForm.css'
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Header from "../shared/Header";

const GroupForm = (props) => {
    let history = useHistory()

    const [groupName, setGroupName] = useState('');
    const [trailName, setTrailName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [privacy, setPrivacy] = useState('No');
    const [inviteUser, setInviteUser] = useState([{user: ''}]);
    const [description, setDescription] = useState('');

    const addNewGroup = () => {
        const body = {
            name: groupName,
            trail: trailName,
            date: date,
            time: time,
            privacy: privacy,
            description: description,
            users: inviteUser
        }
        fetch(`http://localhost:3000/api/groups`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                history.push('/')
            })
    }

    return (
        <>
            <Header/>
            <div className={'form-page'}>
                <div className={'form'}>
                    <div className={'form-left'}>
                        <div className={'input-grp'}>
                            <label>Group Name</label>
                            <input required name="Group Name" value={groupName}
                                   onChange={e => setGroupName(e.target.value)}/>
                        </div>
                        <div className={'input-grp'}>
                            <label>Trail Name</label>
                            <input required name="Trail Name" value={trailName}
                                   onChange={e => setTrailName(e.target.value)}/>
                        </div>
                        <div className={'input-grp'}>
                            <label>Date</label>
                            <input type={'date'} name="Date" value={date}
                                   onChange={e => setDate(e.target.value)}/>
                        </div>
                        <div className={'input-grp'}>
                            <label>Time</label>
                            <input type={'time'} name="Time" value={time}
                                   onChange={e => setTime(e.target.value)}/>
                        </div>
                        <div className={'input-grp'}>
                            <label>Privacy</label>
                            <select name="Privacy" value={privacy}
                                    onChange={e => setPrivacy(e.target.value)}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        {inviteUser.map((item, index) => {
                            return (
                                <div className={'input-grp'}>
                                    <label>Invite User</label>
                                    <input name="Invite User" value={item.user}
                                           onChange={e => {
                                               const list = [...inviteUser];
                                               list[index]['user'] = e.target.value;
                                               setInviteUser(list)
                                           }}/>
                                    <IconButton onClick={() => setInviteUser(oldArray => [...oldArray, {user: ''}])}>
                                        <AddRoundedIcon style={{color: '#213C14'}}/>
                                    </IconButton>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'form-right'}>
                        <div className={'input-grp-right'}>
                            <label>Description</label>
                            <textarea name="Description" rows={10} value={description}
                                      onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className={'form-btns'}>
                            <button className={'success'} onClick={addNewGroup}>Create</button>
                            <button className={'failure'} onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupForm