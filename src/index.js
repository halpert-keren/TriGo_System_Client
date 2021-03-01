import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './Routers/router';
import {CookiesProvider} from "react-cookie";
import './index.css'

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <ReactRouter/>
        </Router>
    </CookiesProvider>,
    document.getElementById('root')
);

//emails
// const express = require('express')
// const app = express()
// const port = 3000
//
//
// app.listen(port, () => {
//     console.log(`nodemailerProject is listening at http://localhost:${port}`)
// })