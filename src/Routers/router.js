import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "../Components/homePage/HomePage";
import Login from "../Components/login/Login";
import Footer from "../Components/shared/Footer";
import Header from "../Components/shared/Header";
import GroupForm from "../Components/groupPage/NewGroupForm";
import GroupPage from "../Components/groupPage/GroupPage";
import TrailPage from "../Components/trailPage/TrailPage";
import TrailForm from "../Components/trailPage/NewTrailForm";
import MyGroups from "../Components/account/MyGroups";
import MyTrails from "../Components/account/SavedTrails";

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
            <Route path='/trail' component={TrailPage}/>
            <Route path='/new-trail' component={TrailForm}/>
            <Route path='/my-groups' component={MyGroups}/>
            <Route path='/saved-Trails' component={MyTrails}/>
            <Footer/>
        </>
    )
}

export default ReactRouter