import React from "react";
import './FilterPanel.css'
import TrailFilterList from "./TrailFilterList";
import GroupFilterList from "./GroupFilterList";

const FilterPanel = (props) => {

    return (
        <div className={'filter-panel'}>
            <div className={'top-panel'}>
                <h1>Search</h1>
                <div>
                    <button className={props.selected === 'trails' ? 'selected' : ''}
                            onClick={() => {
                                props.setSelected('trails');
                                props.setUrl(`https://trigo-system.herokuapp.com/api/trails/`)
                            }}
                    >Trails
                    </button>
                    <button className={props.selected === 'groups' ? 'selected' : ''}
                            onClick={() => {
                                props.setSelected('groups');
                                props.setUrl(`https://trigo-system.herokuapp.com/api/groups/`)
                            }}
                    >Groups
                    </button>
                </div>
            </div>
            <div className={'filters'}>
                {props.selected === 'trails' ? <TrailFilterList setUrl={props.setUrl}/> :
                    <GroupFilterList setUrl={props.setUrl}/>}
            </div>
        </div>
    )
}

export default FilterPanel