import React, {useState, useEffect} from "react";
import './HomePage.css'
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultList from "./ResultList";

const HomePage = (props) => {
    const [itemList, setItemList] = useState([]);
    const [selected, setSelected] = useState('trails');

    useEffect(() => {
        let url = `http://localhost:3000/api/groups/`
        if(selected === 'trails')
            url = `http://localhost:3000/api/trails/`

        fetch(url, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setItemList(result)
            })
    }, [selected])

    return (
        <div className={'home-page'}>
            <div className={'left-side'}>
                <FilterPanel selected={selected} setSelected={setSelected}/>
            </div>
            <div className={'right-side'}>
                <NavBar/>
                <ResultList list={itemList}/>
            </div>
        </div>
    )

}

export default HomePage