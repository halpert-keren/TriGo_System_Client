import React from "react";
import './HomePage.css'
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultList from "./ResultList";

const HomePage = (props) => {

    return (
        <div className={'home-page'}>
            <div className={'left-side'}>
                <FilterPanel/>
            </div>
            <div className={'right-side'}>
                <NavBar/>
                <ResultList/>
            </div>
        </div>
    )

}

export default HomePage