import React, {useState} from "react";
import './NewTrailForm.css'
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Header from "../shared/Header";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {useCookies} from "react-cookie";

const TrailForm = (props) => {
    let history = useHistory()

    const [cookies] = useCookies(['user']);
    const [user, setUser] = useState();
    const [trailName, setTrailName] = useState('');
    const [location, setLocation] = useState([{location: ''}]);
    const [area, setArea] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [length, setLength] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [lengthOfTime, setLengthOfTime] = useState('');
    const [picnicArea, setPicnicArea] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    const addNewTrail = () => {
        // setUser.unshift(cookies.user.googleID)
        // console.log(user)
        const body = {
            name: trailName,
            location: location,
            area: area,
            difficulty: difficulty,
            length: length,
            accessibility: accessibility,
            timeOfDay: timeOfDay,
            lengthOfTime: lengthOfTime,
            picnicArea: picnicArea,
            photo: photo,
            description: description
        }
        fetch(`http://localhost:3000/api/trails`, {
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

    const uploadPhoto = () => {

    }

    const backHistory = useHistory();
    const goBack = () =>{
        let path = `/home`;
        backHistory.push(path);
    }

    return (
        <>
            <Header/>
            <div className={'form-page'}>
                <IconButton className={'go-back'} onClick={goBack}>
                    <ArrowBackRoundedIcon fontSize={'large'}/></IconButton>
                <div className={'form'}>
                    <div className={'form-left'}>
                        <div className={'input-grp'}>
                            <label>Trail Name</label>
                            <input required name="Trail Name" value={trailName}
                                   onChange={e => setTrailName(e.target.value)}/>
                        </div>
                        {location.map((item, index) => {
                            return (
                                <div key={index} className={'input-grp'}>
                                    <label>Location</label>
                                    <input name="Invite User" value={item.location}
                                           onChange={e => {
                                               const list = [...location];
                                               list[index]['location'] = e.target.value;
                                               setLocation(list)
                                           }}/>
                                    <IconButton onClick={() => setLocation(oldArray => [...oldArray, {location: ''}])}>
                                        <AddRoundedIcon style={{color: '#213C14'}}/>
                                    </IconButton>
                                </div>
                            )
                        })}
                        <div className={'input-grp'}>
                            <label>Area</label>
                            <select name="Area" value={area}
                                    onChange={e => setArea(e.target.value)}>
                                <option value="Golan-Heights">Golan Heights</option>
                                <option value="Upper-Galilee">Upper Galilee</option>
                                <option value="Lower-Galilee">Lower Galilee</option>
                                <option value="Western-Galilee">Western Galilee</option>
                                <option value="Coastal-Plain">Coastal Plain</option>
                                <option value="Mount-Carmel">Mount Carmel</option>
                                <option value="Jezreel-Valley">Jezreel Valley</option>
                                <option value="Judea-and-Samaria">Judea and Samaria</option>
                                <option value="Shephelah">Shephelah</option>
                                <option value="Central-District">Central District</option>
                                <option value="Aravah">Aravah</option>
                                <option value="Northern-Negev">Northern Negev</option>
                                <option value="Southern-Negev">Southern Negev</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Difficulty</label>
                            <select name="Difficulty" value={difficulty}
                                    onChange={e => setDifficulty(e.target.value)}>
                                <option value="Easy">Easy</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Hard">Hard</option>
                                <option value="Extreme">Extreme</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Length</label>
                            <select required name="Length" value={length}
                                    onChange={e => setLength(e.target.value)}>
                                <option value="Less-than-1-km">Less than 1 km</option>
                                <option value="1-to-5-km">1 to 5 km</option>
                                <option value="5-to-10-km">5 to 10 km</option>
                                <option value="10-to-20-km">10 to 20 km</option>
                                <option value="More-than-20-km">More than 20 km</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Accessibility</label>
                            <select name="Accessibility" value={accessibility}
                                    onChange={e => setAccessibility(e.target.value)}>
                                <option value="Kid-friendly">Kid friendly</option>
                                <option value="Wheelchair-Accessible">Wheelchair accessible</option>
                                <option value="Car-accessible">Car accessible</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Time of Day</label>
                            <select name="TimeOfDay" value={timeOfDay}
                                    onChange={e => setTimeOfDay(e.target.value)}>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Night">Night</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Length of Time</label>
                            <select name="LengthOfTime" value={lengthOfTime}
                                    onChange={e => setLengthOfTime(e.target.value)}>
                                <option value="Less-than-an-hour">Less than an hour</option>
                                <option value="1-to-3-hours">1 to 3 hours</option>
                                <option value="3-to-6-hours">3 to 6 hours</option>
                                <option value="6-to-10-hours">6 to 10 hours</option>
                                <option value="More-than-10-hours">More than 10 hours</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Picnic Area</label>
                            <select name="PicnicArea" value={picnicArea}
                                    onChange={e => setPicnicArea(e.target.value)}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className={'form-right'}>
                        <div className={'input-grp-right'}>
                            <label>Photo</label>
                            <button className={'upload'} onClick={uploadPhoto}>Upload</button>
                            <textarea className={'photo'} name="Photo" rows={10} value={photo}
                                      onChange={e => setPhoto(e.target.value)}/>
                        </div>
                        <div className={'input-grp-right'}>
                            <label>Description</label>
                            <textarea name="Description" rows={10} value={description}
                                      onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className={'form-btns'}>
                            <button className={'success'} onClick={addNewTrail}>Create</button>
                            <button className={'failure'} onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrailForm