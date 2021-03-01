import React from 'react';
import './Login.css'
import {GoogleLogin} from 'react-google-login'
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const Login = (props) => {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);

    const googleSuccess = async (response) => {
        const body = {token: response.tokenId}
        fetch(`https://trigo-system.herokuapp.com/auth`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                const cookiePromise = new Promise((resolve, reject) => {
                    setCookie('user', result)
                    resolve()
                })
                cookiePromise.then(() => {
                    if (result)
                        history.push('/home')
                })
            })
    }
    const googleFailure = (response) => {
        console.log(response);
    }

    return (
        <div className={'login-page'}>
            <Header/>
            <div className={'login-btn'}>
                <h1>Login to TriGo</h1>
                <GoogleLogin
                    clientId='129785276981-89amm0mok55s4rp6l50ki6go1lh34eoh.apps.googleusercontent.com'
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}/>
            </div>
        </div>
    )
}
export default Login