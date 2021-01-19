import React from 'react';
import {Route} from 'react-router-dom';
import TriGo from "../Components/TriGo";

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={TriGo}/>
        </>
    )
}

export default ReactRouter