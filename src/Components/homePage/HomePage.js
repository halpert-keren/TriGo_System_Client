import React, {useState, useEffect} from "react";
import './HomePage.css'
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultList from "./ResultList";
import Header from "../shared/Header";

const HomePage = (props) => {
    const [itemList, setItemList] = useState([]);
    const [url, setUrl] = useState('');
    const [selected, setSelected] = useState('trails');

    useEffect(() => {
        console.log(url)
        fetch(url, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => setItemList(result))
    }, [url])

    return (
        <>
            <Header/>
            <div className={'home-page'}>
                <div className={'left-side'}>
                    <FilterPanel setUrl={setUrl} selected={selected} setSelected={setSelected}/>
                </div>
                <div className={'right-side'}>
                    <NavBar/>
                    <ResultList type={selected} list={itemList} path={ selected === 'trails' ? '/trail': '/group'}/>
                </div>
            </div>
        </>
    )
}

export default HomePage