import React, {useState} from "react";
import './NewTrailForm.css'
import {useHistory} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Header from "../shared/Header";
import {useCookies} from "react-cookie";

const TrailForm = (props) => {
    let history = useHistory()

    const [trailName, setTrailName] = useState('');
    const [locations, setLocations] = useState(['']);
    const [area, setArea] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [length, setLength] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [lengthOfTime, setLengthOfTime] = useState('');
    const [picnicArea, setPicnicArea] = useState(false);
    const [photos, setPhotos] = useState(['']);
    const [description, setDescription] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    const addNewTrail = () => {
        if(locations[locations.length-1]==='')
            locations.pop()
        if(photos[photos.length-1]==='')
            photos.pop()
        const body = {
            name: trailName,
            location: locations,
            area: area,
            difficulty: difficulty,
            length: length,
            accessibility: accessibility,
            timeOfDay: timeOfDay,
            lengthOfTime: lengthOfTime,
            picnicArea: picnicArea,
            images: photos,
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
                const saveTrailBody = {
                    savedTrails: [result._id],
                    action: true
                }

                fetch(`http://localhost:3000/api/users/${cookies.user.googleID}`, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(saveTrailBody),
                })
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        setCookie('user', result)
                        history.push('/home')
                    })

            })
    }


    return (
        <>
            <Header/>
            <div className={'form-page'}>
                <div className={'form'}>
                    <div className={'form-left'}>
                        <div className={'input-grp inp'}>
                            <label><span>*</span>Trail Name</label>
                            <input required name="Trail Name" value={trailName}
                                   onChange={e => setTrailName(e.target.value)}/>
                        </div>
                        {locations.map((item, index) => {
                            return (
                                <div key={index} className={'input-grp inp'}>
                                    <label><span>*</span>Location</label>
                                    <input required name="Location" value={item}
                                           onChange={e => {
                                               const list = [...locations];
                                               list[index] = e.target.value;
                                               setLocations(list)
                                           }}/>
                                    <IconButton onClick={() => setLocations(oldArray => [...oldArray, ''])}>
                                        <AddRoundedIcon style={{color: '#213C14'}}/>
                                    </IconButton>
                                </div>
                            )
                        })}
                        <div className={'input-grp'}>
                            <label><span>*</span>Area</label>
                            <select name="Area" value={area} onChange={e => setArea(e.target.value)}>
                                <option value="">Select</option>
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
                            <label><span>*</span>Difficulty</label>
                            <select name="Difficulty" value={difficulty}
                                    onChange={e => setDifficulty(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Easy">Easy</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Hard">Hard</option>
                                <option value="Extreme">Extreme</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label><span>*</span>Length</label>
                            <select required name="Length" value={length}
                                    onChange={e => setLength(e.target.value)}>
                                <option value="">Select</option>
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
                                <option value="">Select</option>
                                <option value="Kid-friendly">Kid friendly</option>
                                <option value="Wheelchair-Accessible">Wheelchair accessible</option>
                                <option value="Car-accessible">Car accessible</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Time of Day</label>
                            <select name="TimeOfDay" value={timeOfDay}
                                    onChange={e => setTimeOfDay(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Night">Night</option>
                            </select>
                        </div>
                        <div className={'input-grp'}>
                            <label>Length of Time</label>
                            <select name="LengthOfTime" value={lengthOfTime}
                                    onChange={e => setLengthOfTime(e.target.value)}>
                                <option value="">Select</option>
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
                                <option value="">Select</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className={'form-right'}>
                        {photos.map((item, index) => {
                            return (
                                <div key={index} className={'input-grp-right'}>
                                    <label>Photos</label>
                                    <input name="photos" value={item}
                                           onChange={e => {
                                               const list = [...photos];
                                               list[index] = e.target.value;
                                               setPhotos(list)
                                           }}/>
                                    <IconButton onClick={() => setPhotos(oldArray => [...oldArray, ''])}>
                                        <AddRoundedIcon style={{color: '#213C14'}}/>
                                    </IconButton>
                                </div>
                            )
                        })}
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