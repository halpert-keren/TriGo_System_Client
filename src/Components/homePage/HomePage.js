import React, {useState, useEffect} from "react";
import './HomePage.css'
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultList from "./ResultList";

const HomePage = (props) => {
    const [itemList, setItemList] = useState([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        console.log(url)
        fetch(url, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                setItemList(result)
            })
    }, [url])

    return (
        <div className={'home-page'}>
            <div className={'left-side'}>
                <FilterPanel setUrl={setUrl}/>
            </div>
            <div className={'right-side'}>
                <NavBar/>
                <ResultList list={itemList}/>
            </div>
        </div>
    )

}

export default HomePage