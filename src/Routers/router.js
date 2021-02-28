import React from 'react';
import {Route} from 'react-router-dom';
import UserRouter from "./UserRouter";
import HomePage from "../Components/homePage/HomePage";
import Login from "../Components/login/Login";
import Footer from "../Components/shared/Footer";
import GroupForm from "../Components/groupPage/NewGroupForm";
import GroupPage from "../Components/groupPage/GroupPage";
import TrailPage from "../Components/trailPage/TrailPage";
import TrailForm from "../Components/trailPage/NewTrailForm";
import MyGroups from "../Components/account/MyGroups";
import MyTrails from "../Components/account/SavedTrails";
import Requests from "../Components/account/Requests";

const ReactRouter = () => {
    return (
        <>
            <Route exact path='/' component={Login}/>
            <UserRouter path='/home' component={HomePage}/>
            <UserRouter path='/new-group' component={GroupForm}/>
            <UserRouter path='/group' component={GroupPage}/>
            <UserRouter path='/trail' component={TrailPage}/>
            <UserRouter path='/new-trail' component={TrailForm}/>
            <UserRouter path='/my-groups' component={MyGroups}/>
            <UserRouter path='/saved-Trails' component={MyTrails}/>
            <UserRouter path='/requests' component={Requests}/>
            <Footer/>
        </>
    )
}

export default ReactRouter