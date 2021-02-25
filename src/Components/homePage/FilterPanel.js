import React from "react";
import './FilterPanel.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Checkbox} from "@material-ui/core";


const FilterPanel = (props) => {
    const [selected, setSelected] = React.useState('trails');

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
        <div className={'filter-panel'}>
            <div className={'top-panel'}>
                <h1>Search</h1>
                <div>
                    <button className={selected === 'trails' ? 'selected' : ''}
                            onClick={() => setSelected('trails')}
                    >Trails
                    </button>
                    <button className={selected === 'groups' ? 'selected' : ''}
                            onClick={() => setSelected('groups')}
                    >Groups
                    </button>
                </div>
            </div>
            <input type={'search'}/>
            <div className={'filters'}>
                <List>
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
                </List>
            </div>
            <div className={'bottom-panel'}>
                <button>Search</button>
            </div>
        </div>
    )

}

export default FilterPanel