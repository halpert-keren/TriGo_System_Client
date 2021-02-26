import React, {useState} from "react";
import './NewTrailForm.css'
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const TrailForm = (props) => {
    let history = useHistory()

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

    return (
        <div className={'form-page'}>
            <div className={'form'}>
                <div className={'form-left'}>
                    <div className={'input-grp'}>
                        <label>Trail Name</label>
                        <input required name="Trail Name" value={trailName}
                               onChange={e => setTrailName(e.target.value)}/>
                    </div>
                    {location.map((item, index) => {
                        return (
                            <div className={'input-grp'}>
                                <label>Location</label>
                                <input name="Invite User" value={item.location}
                                       onChange={e => {
                                           const list = [...location];
                                           list[index]['location'] = e.target.value;
                                           setLocation(list)}}/>
                                <IconButton onClick={() => setLocation(oldArray => [...oldArray, {location: ''}])}>
                                    <AddRoundedIcon style={{color: '#213C14'}}/>
                                </IconButton>
                            </div>
                        )
                    })
                    }
                    <div className={'input-grp'}>
                        <label>Area</label>
                        <select name="Area" value={area}
                                onChange={e => setArea(e.target.value)}>
                            <option value="Central">Central</option>
                            <option value="Southern">Southern</option>
                            <option value="Northern">Northern</option>
                            <option value="Haifa">Haifa</option>
                            <option value="Tel-Aviv">Tel-Aviv</option>
                            <option value="Beer-Sheva">Beer-Sheva</option>
                        </select>
                    </div>
                    <div className={'input-grp'}>
                        <label>Difficulty</label>
                        <select name="Difficulty" value={difficulty}
                                onChange={e => setDifficulty(e.target.value)}>
                            <option value="Easy">Easy</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                    <div className={'input-grp'}>
                        <label>Length</label>
                        <input required name="Length" value={length}
                               onChange={e => setLength(e.target.value)}/>
                    </div>
                    <div className={'input-grp'}>
                        <label>Accessibility</label>
                        <select name="Accessibility" value={accessibility}
                                onChange={e => setAccessibility(e.target.value)}>
                            <option value="kid friendly">kid friendly</option>
                            <option value="wheelchair accessible">wheelchair accessible</option>
                            <option value="Car accessible">Car accessible</option>
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
                            <option value="Less than an hour">Less than an hour</option>
                            <option value="1 to 3">1 to 3</option>
                            <option value="4 to 6">4 to 6</option>
                            <option value="overnight">overnight</option>
                        </select>
                    </div>
                    <div className={'input-grp'}>
                        <label>Picnic Area</label>
                        <select name="PicnicArea" value={picnicArea}
                                onChange={e => setPicnicArea(e.target.value)}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
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
    )
}

export default TrailForm