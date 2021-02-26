import React from "react";
import './FilterList.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Checkbox} from "@material-ui/core";


const GroupFilterList = (props) => {
    const [openArea, setOpenArea] = React.useState(false);
    const [openDifficulty, setOpenDifficulty] = React.useState(false);

    const areaFilter = (
        <Collapse in={openArea}>
            <List disablePadding>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="North"/>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false}/>
                    <ListItemText primary="South"/>
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
                    <ListItemText primary="Hard"/>
                </ListItem>
            </List>
        </Collapse>
    )

    return (
        <div className={'filter-list'}>
            <List>
                <ListItem button onClick={() => setOpenArea(!openArea)}>
                    <ListItemText primary="Picnic"/>
                    {openArea ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                {areaFilter}
                <ListItem button onClick={() => setOpenDifficulty(!openDifficulty)}>
                    <ListItemText primary="blabla"/>
                    {openDifficulty ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                {difficultyFilter}
            </List>
        </div>
    )

}

export default GroupFilterList