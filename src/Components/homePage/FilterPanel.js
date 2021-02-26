import React, {useState} from "react";
import './FilterPanel.css'
import TrailFilterList from "./TrailFilterList";
import GroupFilterList from "./GroupFilterList";


const FilterPanel = (props) => {
    // const [selected, setSelected] = useState('trails');

    return (
        <div className={'filter-panel'}>
            <div className={'top-panel'}>
                <h1>Search</h1>
                <div>
                    <button className={props.selected === 'trails' ? 'selected' : ''}
                            onClick={() => props.setSelected('trails')}
                    >Trails
                    </button>
                    <button className={props.selected === 'groups' ? 'selected' : ''}
                            onClick={() => props.setSelected('groups')}
                    >Groups
                    </button>
                </div>
            </div>
            <div className={'search-panel'}>
                <input type={'search'}/>
            </div>
            <div className={'filters'}>
                {props.selected === 'trails' ? <TrailFilterList/> : <GroupFilterList/>}
            </div>
            <div className={'bottom-panel'}>
                <button>Search</button>
            </div>
        </div>
    )

}

export default FilterPanel