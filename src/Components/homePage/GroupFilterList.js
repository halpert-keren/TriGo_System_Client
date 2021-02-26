import React, {useState} from "react";
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
    const [openTime, setOpenTime] = useState(false);
    const [openArea, setOpenArea] = useState(false);
    const [openDifficulty, setOpenDifficulty] = useState(false);
    const [openAccessibility, setOpenAccessibility] = useState(false);
    const [openPicnicArea, setOpenPicnicArea] = useState(false);
    const [openLength, setOpenLength] = useState(false);
    const [openLengthOfTime, setOpenLengthOfTime] = useState(false);
    const [openTimeOfDay, setOpenTimeOfDay] = useState(false);

    const dateFilter = (
        <Collapse in={openDate}>
            <List disablePadding>
                <input type={'date'}/>
            </List>
        </Collapse>
    )

    const timeFilter = (
        <Collapse in={openTime}>
            <List disablePadding>
                <input type={'time'}/>
            </List>
        </Collapse>
    )

    const areaFilter = (
        <Collapse in={openArea}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Golan Heights"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Upper Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Lower Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Western Galilee"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Coastal Plain"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Mount Carmel"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Jezreel Valley"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Judea and Samaria"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Shephelah"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Central District"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Aravah"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Northern Negev"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Southern Negev"/>
                </ListItem>
            </List>
        </Collapse>
    )

    const difficultyFilter = (
        <Collapse in={openDifficulty}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Easy"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Intermediate"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Hard"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Extreme"/>
                </ListItem>
            </List>
        </Collapse>
    )

    const accessibilityFilter = (
        <Collapse in={openAccessibility}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Wheelchair/Stroller Accessible"/>
                </ListItem>
            </List>
        </Collapse>
    )

    const picnicAreaFilter = (
        <Collapse in={openPicnicArea}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="None"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Picnic tables only"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Full picnic facilities"/>
                </ListItem>
            </List>
        </Collapse>
    )

    const lengthFilter = (
        <Collapse in={openLength}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Less than 1 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="1 to 5 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="5 to 10 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="10 to 20 km"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="More than 20 km"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const lengthOfTimeFilter = (
        <Collapse in={openLengthOfTime}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Less than an hour"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="1 to 3 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="3 to 6 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="6 to 10 hours"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="More than 10 hours"/>
                </ListItem>
            </List>
        </Collapse>
    )
    const timeOfDayFilter = (
        <Collapse in={openTimeOfDay}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Morning"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="Afternoon"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
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