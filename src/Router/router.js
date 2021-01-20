import React from 'react';
import {Route} from 'react-router-dom';
import TriGo from "../Components/TriGo";
import Footer from "../Components/shared/Footer";
import Header from "../Components/shared/Header";

const ReactRouter = () => {
    return (
        <>
            <Header/>
            <Route exact path="/" component={TriGo}/>
            <Footer/>
        </>
    )
}

export default ReactRouter