import React, {useEffect, useState} from "react";
import './NewGroupForm.css'
import {useHistory} from "react-router-dom";
import {IconButton, TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Header from "../shared/Header";
import {useCookies} from "react-cookie";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const GroupForm = (props) => {
    let history = useHistory()

    const [cookies] = useCookies(['user']);
    const [groupName, setGroupName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [privacy, setPrivacy] = useState('No');
    const [inviteUser, setInviteUser] = useState(['']);
    const [description, setDescription] = useState('');
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        fetch(`https://trigo-system.herokuapp.com/api/users`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json',}
        })
            .then(response => response.json())
            .then(result => {
                result.forEach(user => setEmailList(prevArray => [...prevArray, user['email']]))
            })
    }, [])

    const getUserIDs = () => {
        let users = []
        let i = 0
        const promise = new Promise((resolve, reject) => {
            inviteUser.forEach((user, index)=>{
               users.push(user)
            })
            if (i === inviteUser.length-1)
                resolve()
        })
        promise.then(() => {
            addNewGroup(users)
        })
    }

    const addNewGroup = () => {

        console.log('users')
        if (inviteUser[inviteUser.length - 1] === '')
            inviteUser.pop()
        inviteUser.unshift(cookies.user.email)
        console.log(inviteUser)
        const body = {
            name: groupName,
            trail: props.location.data,
            date: date,
            time: time,
            privacy: privacy,
            description: description,
            users: inviteUser
        }
        fetch(`https://trigo-system.herokuapp.com/api/groups`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                history.push('/home')
            })
    }

    const goBack = () =>{
        history.push(`/home`);
    }

    return (
        <>
            <Header/>
            <div className={'form-page'}>
                <IconButton className={'go-back'} onClick={goBack}>
                <ArrowBackRoundedIcon fontSize={'large'}/>
                </IconButton>
                <div className={'form'}>
                    <div className={'form-left'}>
                        <div className={'input-grp inp'}>
                            <label>Group Name</label>
                            <input required name="Group Name" value={groupName}
                                   onChange={e => setGroupName(e.target.value)}/>
                        </div>
                        <div className={'input-grp inp'}>
                            <label>Date</label>
                            <input type={'date'} name="Date" value={date}
                                   onChange={e => setDate(e.target.value)}/>
                        </div>
                        <div className={'input-grp inp'}>
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
                                <div key={index} className={'input-grp'}>
                                    <label>Invite User</label>
                                        <Autocomplete
                                            style={{width: '100%', paddingTop: '5%'}}
                                            options={emailList} getOptionLabel={(emailList) => emailList} value={inviteUser[index]}
                                            onChange={(e, newVal) => {
                                                const list = [...inviteUser];
                                                list[index] = newVal;
                                                setInviteUser(list)
                                            }}
                                            renderInput={(params) => <TextField variant={'outlined'} {...params} label=" "/>}/>
                                    <IconButton onClick={() => setInviteUser(oldArray => [...oldArray, ''])}>
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
                            <button className={'failure'} onClick={() => history.push('/home')}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupForm