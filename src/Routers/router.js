import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "../Components/homePage/HomePage";
import Login from "../Components/login/Login";
import Footer from "../Components/shared/Footer";
import Header from "../Components/shared/Header";

const ReactRouter = () => {
    return (
        <>
            <Header/>
            <Route exact path='/' component={Login}/>
            <Route path='/account' component={HomePage}/>
            <Route path='/favorites' component={HomePage}/>
            <Route path='/mygroups' component={HomePage}/>
            <Route path='/requests' component={HomePage}/>
            <Footer/>
        </>
    )
}

export default ReactRouter