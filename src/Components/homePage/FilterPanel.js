import React, {useState} from "react";
import './FilterPanel.css'
import TrailFilterList from "./TrailFilterList";
import GroupFilterList from "./GroupFilterList";


const FilterPanel = (props) => {
    const [selected, setSelected] = useState('trails');

    return (
        <div className={'filter-panel'}>
            <div className={'top-panel'}>
                <h1>Search</h1>
                <div>
                    <button className={selected === 'trails' ? 'selected' : ''}
                            onClick={() => {setSelected('trails'); props.setUrl(`http://localhost:3000/api/trails/`)}}
                    >Trails
                    </button>
                    <button className={selected === 'groups' ? 'selected' : ''}
                            onClick={() => {setSelected('groups'); props.setUrl(`http://localhost:3000/api/groups/`)}}
                    >Groups
                    </button>
                </div>
            </div>
            <div className={'search-panel'}>
                <input type={'search'}/>
            </div>
            <div className={'filters'}>
                {selected === 'trails' ? <TrailFilterList setUrl={props.setUrl}/> : <GroupFilterList setUrl={props.setUrl}/>}
            </div>
            <div className={'bottom-panel'}>
                <button>Search</button>
            </div>
        </div>
    )
}

export default FilterPanel