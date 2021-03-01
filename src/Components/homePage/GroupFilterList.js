import React, {useEffect, useState} from "react";
import './FilterList.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Checkbox} from "@material-ui/core";

const GroupFilterList = (props) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState('');
    const [openTime, setOpenTime] = useState(false);
    const [time, setTime] = useState('');
    const [openArea, setOpenArea] = useState(false);
    const [areaChecks, setAreaChecks] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false
    });
    const [openDifficulty, setOpenDifficulty] = useState(false);
    const [difficultyChecks, setDifficultyChecks] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    });
    const [openAccessibility, setOpenAccessibility] = useState(false);
    const [accessibilityChecks, setAccessibilityChecks] = useState({
        1: false,
        2: false,
        3: false
    });
    const [openPicnicArea, setOpenPicnicArea] = useState(false);
    const [picnicAreaChecks, setPicnicAreaChecks] = useState({
        1: false,
        2: false
    });
    const [openLength, setOpenLength] = useState(false);
    const [lengthChecks, setLengthChecks] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const [openLengthOfTime, setOpenLengthOfTime] = useState(false);
    const [lengthOfTimeChecks, setLengthOfTimeChecks] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const [openTimeOfDay, setOpenTimeOfDay] = useState(false);
    const [timeOfDayChecks, setTimeOfDayChecks] = useState({
        1: false,
        2: false,
        3: false
    });

    useEffect(() => {
        getUrl()
    }, [date, time, areaChecks, difficultyChecks, accessibilityChecks, picnicAreaChecks, lengthChecks, lengthOfTimeChecks, timeOfDayChecks])

    const getUrl = () => {
        let url = 'https://trigo-system.herokuapp.com/api/groups/?'

        if(date !== '')
            url = url.concat(`date=${date}&`)
        if(time !== '')
            url = url.concat(`time=${time}&`)

        let areaUrl = 'area=['
        if (areaChecks[1]) areaUrl = areaUrl.concat("\"Golan-Heights\",")
        if (areaChecks[2]) areaUrl = areaUrl.concat("\"Upper-Galilee\",")
        if (areaChecks[3]) areaUrl = areaUrl.concat("\"Lower-Galilee\",")
        if (areaChecks[4]) areaUrl = areaUrl.concat("\"Western-Galilee\",")
        if (areaChecks[5]) areaUrl = areaUrl.concat("\"Coastal-Plain\",")
        if (areaChecks[6]) areaUrl = areaUrl.concat("\"Mount-Carmel\",")
        if (areaChecks[7]) areaUrl = areaUrl.concat("\"Jezreel-Valley\",")
        if (areaChecks[8]) areaUrl = areaUrl.concat("\"Judea-and-Samaria\",")
        if (areaChecks[9]) areaUrl = areaUrl.concat("\"Shephelah\",")
        if (areaChecks[10]) areaUrl = areaUrl.concat("\"Central-District\",")
        if (areaChecks[11]) areaUrl = areaUrl.concat("\"Aravah\",")
        if (areaChecks[12]) areaUrl = areaUrl.concat("\"Northern-Negev\",")
        if (areaChecks[13]) areaUrl = areaUrl.concat("\"Southern-Negev\",")
        if(areaUrl !== 'area=[') {
            areaUrl = areaUrl.substring(0,areaUrl.length-1);
            areaUrl = areaUrl.concat("]&")
            url = url.concat(areaUrl)
        }

        let difficultyUrl = 'difficulty=['
        if (difficultyChecks[1]) difficultyUrl = difficultyUrl.concat("\"Easy\",")
        if (difficultyChecks[2]) difficultyUrl = difficultyUrl.concat("\"Intermediate\",")
        if (difficultyChecks[3]) difficultyUrl = difficultyUrl.concat("\"Hard\",")
        if (difficultyChecks[4]) difficultyUrl = difficultyUrl.concat("\"Extreme\",")
        if(difficultyUrl !== 'difficulty=[') {
            difficultyUrl = difficultyUrl.substring(0,difficultyUrl.length-1);
            difficultyUrl = difficultyUrl.concat("]&")
            url = url.concat(difficultyUrl)
        }

        let accessibilityUrl = 'accessibility=['
        if (accessibilityChecks[1]) accessibilityUrl = accessibilityUrl.concat("\"Kid-friendly\",")
        if (accessibilityChecks[2]) accessibilityUrl = accessibilityUrl.concat("\"Wheelchair-Accessible\",")
        if (accessibilityChecks[3]) accessibilityUrl = accessibilityUrl.concat("\"Car-accessible\",")
        if(accessibilityUrl !== 'accessibility=[') {
            accessibilityUrl = accessibilityUrl.substring(0,accessibilityUrl.length-1);
            accessibilityUrl = accessibilityUrl.concat("]&")
            url = url.concat(accessibilityUrl)
        }

        let picnicAreaUrl = 'picnicArea=['
        if (picnicAreaChecks[1]) picnicAreaUrl = picnicAreaUrl.concat("\"false\",")
        if (picnicAreaChecks[2]) picnicAreaUrl = picnicAreaUrl.concat("\"true\",")
        if(picnicAreaUrl !== 'picnicArea=[') {
            picnicAreaUrl = picnicAreaUrl.substring(0,picnicAreaUrl.length-1);
            picnicAreaUrl = picnicAreaUrl.concat("]&")
            url = url.concat(picnicAreaUrl)
        }

        let lengthUrl = 'length=['
        if (lengthChecks[1]) lengthUrl = lengthUrl.concat("\"Less-than-1-km\",")
        if (lengthChecks[2]) lengthUrl = lengthUrl.concat("\"1-to-5-km\",")
        if (lengthChecks[3]) lengthUrl = lengthUrl.concat("\"5-to-10-km\",")
        if (lengthChecks[4]) lengthUrl = lengthUrl.concat("\"10-to-20-km\",")
        if (lengthChecks[5]) lengthUrl = lengthUrl.concat("\"More-than-20-km\",")
        if(lengthUrl !== 'length=[') {
            lengthUrl = lengthUrl.substring(0,lengthUrl.length-1);
            lengthUrl = lengthUrl.concat("]&")
            url = url.concat(lengthUrl)
        }

        let lengthOfTimeUrl = 'lengthOfTime=['
        if (lengthOfTimeChecks[1]) lengthOfTimeUrl = lengthOfTimeUrl.concat("\"Less-than-an-hour\",")
        if (lengthOfTimeChecks[2]) lengthOfTimeUrl = lengthOfTimeUrl.concat("\"1-to-3-hours\",")
        if (lengthOfTimeChecks[3]) lengthOfTimeUrl = lengthOfTimeUrl.concat("\"3-to-6-hours\",")
        if (lengthOfTimeChecks[4]) lengthOfTimeUrl = lengthOfTimeUrl.concat("\"6-to-10-hours\",")
        if (lengthOfTimeChecks[5]) lengthOfTimeUrl = lengthOfTimeUrl.concat("\"More-than-10-hours\",")
        if(lengthOfTimeUrl !== 'lengthOfTime=[') {
            lengthOfTimeUrl = lengthOfTimeUrl.substring(0,lengthOfTimeUrl.length-1);
            lengthOfTimeUrl = lengthOfTimeUrl.concat("]&")
            url = url.concat(lengthOfTimeUrl)
        }

        let timeOfDayUrl = 'timeOfDay=['
        if (timeOfDayChecks[1]) timeOfDayUrl = timeOfDayUrl.concat("\"Morning\",")
        if (timeOfDayChecks[2]) timeOfDayUrl = timeOfDayUrl.concat("\"Afternoon\",")
        if (timeOfDayChecks[3]) timeOfDayUrl = timeOfDayUrl.concat("\"Night\",")
        if(timeOfDayUrl !== 'timeOfDay=[') {
                    timeOfDayUrl = timeOfDayUrl.substring(0,timeOfDayUrl.length-1);
                    timeOfDayUrl = timeOfDayUrl.concat("]&")
                    url = url.concat(timeOfDayUrl)
                }

        if(url === 'https://trigo-system.herokuapp.com/api/groups/?')
            url = 'https://trigo-system.herokuapp.com/api/groups'
        props.setUrl(url)
    }

    const dateFilter = (
        <Collapse in={openDate}>
            <List disablePadding>
                <input type={'date'} value={date} onChange={(e) => setDate(e.target.value)}/>
            </List>
        </Collapse>
    )
    const timeFilter = (
        <Collapse in={openTime}>
            <List disablePadding>
                <input type={'time'} value={time} onChange={(e) => setTime(e.target.value)}/>
            </List>
        </Collapse>
    )
    const areaFilter = (
        <Collapse in={openArea}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={areaChecks[1]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 1: !areaChecks[1]})}/>
                    <ListItemText primary="Golan Heights"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[2]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 2: !areaChecks[2]})}/>
                    <ListItemText primary="Upper Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[3]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 3: !areaChecks[3]})}/>
                    <ListItemText primary="Lower Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[4]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 4: !areaChecks[4]})}/>
                    <ListItemText primary="Western Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[5]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 5: !areaChecks[5]})}/>
                    <ListItemText primary="Coastal Plain"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[6]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 6: !areaChecks[6]})}/>
                    <ListItemText primary="Mount Carmel"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[7]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 7: !areaChecks[7]})}/>
                    <ListItemText primary="Jezreel Valley"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[8]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 8: !areaChecks[8]})}/>
                    <ListItemText primary="Judea and Samaria"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[9]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 9: !areaChecks[9]})}/>
                    <ListItemText primary="Shephelah"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[10]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 10: !areaChecks[10]})}/>
                    <ListItemText primary="Central District"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[11]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 11: !areaChecks[11]})}/>
                    <ListItemText primary="Aravah"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[12]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 12: !areaChecks[12]})}/>
                    <ListItemText primary="Northern Negev"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={areaChecks[13]} color={'default'}
                              onChange={() => setAreaChecks({...areaChecks, 13: !areaChecks[13]})}/>
                    <ListItemText primary="Southern Negev"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const difficultyFilter = (
        <Collapse in={openDifficulty}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={difficultyChecks[1]} color={'default'}
                              onChange={() => setDifficultyChecks({...difficultyChecks, 1: !difficultyChecks[1]})}/>
                    <ListItemText primary="Easy"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={difficultyChecks[2]} color={'default'}
                              onChange={() => setDifficultyChecks({...difficultyChecks, 2: !difficultyChecks[2]})}/>
                    <ListItemText primary="Intermediate"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={difficultyChecks[3]} color={'default'}
                              onChange={() => setDifficultyChecks({...difficultyChecks, 3: !difficultyChecks[3]})}/>
                    <ListItemText primary="Hard"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={difficultyChecks[4]} color={'default'}
                              onChange={() => setDifficultyChecks({...difficultyChecks, 4: !difficultyChecks[4]})}/>
                    <ListItemText primary="Extreme"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const accessibilityFilter = (
        <Collapse in={openAccessibility}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={accessibilityChecks[1]} color={'default'}
                              onChange={() => {
                                  setAccessibilityChecks({...accessibilityChecks, 1: !accessibilityChecks[1]})
                                  getUrl()
                              }}/>
                    <ListItemText primary="Kid friendly"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={accessibilityChecks[2]} color={'default'}
                              onChange={() => {
                                  setAccessibilityChecks({...accessibilityChecks, 2: !accessibilityChecks[2]})
                                  getUrl()
                              }}/>
                    <ListItemText primary="Wheelchair accessible"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={accessibilityChecks[3]} color={'default'}
                              onChange={() => {
                                  setAccessibilityChecks({...accessibilityChecks, 3: !accessibilityChecks[3]})
                                  getUrl()
                              }}/>
                    <ListItemText primary="Car accessible"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const picnicAreaFilter = (
        <Collapse in={openPicnicArea}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={picnicAreaChecks[1]} color={'default'}
                              onChange={() => setPicnicAreaChecks({...picnicAreaChecks, 1: !picnicAreaChecks[1]})}/>
                    <ListItemText primary="No"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={picnicAreaChecks[2]} color={'default'}
                              onChange={() => setPicnicAreaChecks({...picnicAreaChecks, 2: !picnicAreaChecks[2]})}/>
                    <ListItemText primary="Yes"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const lengthFilter = (
        <Collapse in={openLength}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={lengthChecks[1]} color={'default'}
                              onChange={() => setLengthChecks({...lengthChecks, 1: !lengthChecks[1]})}/>
                    <ListItemText primary="Less than 1 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthChecks[2]} color={'default'}
                              onChange={() => setLengthChecks({...lengthChecks, 2: !lengthChecks[2]})}/>
                    <ListItemText primary="1 to 5 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthChecks[3]} color={'default'}
                              onChange={() => setLengthChecks({...lengthChecks, 3: !lengthChecks[3]})}/>
                    <ListItemText primary="5 to 10 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthChecks[4]} color={'default'}
                              onChange={() => setLengthChecks({...lengthChecks, 4: !lengthChecks[4]})}/>
                    <ListItemText primary="10 to 20 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthChecks[5]} color={'default'}
                              onChange={() => setLengthChecks({...lengthChecks, 5: !lengthChecks[5]})}/>
                    <ListItemText primary="More than 20 km"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const lengthOfTimeFilter = (
        <Collapse in={openLengthOfTime}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={lengthOfTimeChecks[1]} color={'default'}
                              onChange={() => setLengthOfTimeChecks({
                                  ...lengthOfTimeChecks,
                                  1: !lengthOfTimeChecks[1]
                              })}/>
                    <ListItemText primary="Less than an hour"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthOfTimeChecks[2]} color={'default'}
                              onChange={() => setLengthOfTimeChecks({
                                  ...lengthOfTimeChecks,
                                  2: !lengthOfTimeChecks[2]
                              })}/>
                    <ListItemText primary="1 to 3 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthOfTimeChecks[3]} color={'default'}
                              onChange={() => setLengthOfTimeChecks({
                                  ...lengthOfTimeChecks,
                                  3: !lengthOfTimeChecks[3]
                              })}/>
                    <ListItemText primary="3 to 6 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthOfTimeChecks[4]} color={'default'}
                              onChange={() => setLengthOfTimeChecks({
                                  ...lengthOfTimeChecks,
                                  4: !lengthOfTimeChecks[4]
                              })}/>
                    <ListItemText primary="6 to 10 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={lengthOfTimeChecks[5]} color={'default'}
                              onChange={() => setLengthOfTimeChecks({
                                  ...lengthOfTimeChecks,
                                  5: !lengthOfTimeChecks[5]
                              })}/>
                    <ListItemText primary="More than 10 hours"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const timeOfDayFilter = (
        <Collapse in={openTimeOfDay}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={timeOfDayChecks[1]} color={'default'}
                              onChange={() => setTimeOfDayChecks({...timeOfDayChecks, 1: !timeOfDayChecks[1]})}/>
                    <ListItemText primary="Morning"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={timeOfDayChecks[2]} color={'default'}
                              onChange={() => setTimeOfDayChecks({...timeOfDayChecks, 2: !timeOfDayChecks[2]})}/>
                    <ListItemText primary="Afternoon"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={timeOfDayChecks[3]} color={'default'}
                              onChange={() => setTimeOfDayChecks({...timeOfDayChecks, 3: !timeOfDayChecks[3]})}/>
                    <ListItemText primary="Night"/>
                </ListItem>
            </List>
        </Collapse>
    )

    return (
        <List className={'filter-list'}>
            <ListItem button onClick={() => setOpenDate(!openDate)}>
                <ListItemText primary="Date"/>
                {openDate ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {dateFilter}
            <ListItem button onClick={() => setOpenTime(!openTime)}>
                <ListItemText primary="Time"/>
                {openTime ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {timeFilter}
            <ListItem button onClick={() => setOpenArea(!openArea)}>
                <ListItemText primary="Area"/>
                {openArea ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {areaFilter}
            <ListItem button onClick={() => setOpenDifficulty(!openDifficulty)}>
                <ListItemText primary="Difficulty"/>
                {openDifficulty ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {difficultyFilter}
            <ListItem button onClick={() => setOpenAccessibility(!openAccessibility)}>
                <ListItemText primary="Accessibility"/>
                {openAccessibility ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {accessibilityFilter}
            <ListItem button onClick={() => setOpenPicnicArea(!openPicnicArea)}>
                <ListItemText primary="Picnic area"/>
                {openPicnicArea ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {picnicAreaFilter}
            <ListItem button onClick={() => setOpenLength(!openLength)}>
                <ListItemText primary="Length in km"/>
                {openLength ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {lengthFilter}
            <ListItem button onClick={() => setOpenLengthOfTime(!openLengthOfTime)}>
                <ListItemText primary="Length in hours"/>
                {openLengthOfTime ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {lengthOfTimeFilter}
            <ListItem button onClick={() => setOpenTimeOfDay(!openTimeOfDay)}>
                <ListItemText primary="Time of day"/>
                {openTimeOfDay ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            {timeOfDayFilter}
        </List>
    )
}

export default GroupFilterList