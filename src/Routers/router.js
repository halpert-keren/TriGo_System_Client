import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "../Components/homePage/HomePage";
import Login from "../Components/login/Login";
import Footer from "../Components/shared/Footer";
import Header from "../Components/shared/Header";
import GroupForm from "../Components/groupPage/NewGroupForm";
import GroupPage from "../Components/groupPage/GroupPage";

const ReactRouter = () => {
    return (
        <>
            <Header/>
            <Route exact path='/' component={Login}/>
            <Route path='/account' component={HomePage}/>
            <Route path='/favorites' component={HomePage}/>
            <Route path='/mygroups' component={HomePage}/>
            <Route path='/requests' component={HomePage}/>
            <Route path='/new-group' component={GroupForm}/>
            <Route path='/group' component={GroupPage}/>
            <Footer/>
        </>
    )
}

export default ReactRouter