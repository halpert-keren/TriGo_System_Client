import React from 'react';
import './Login.css'
import Header from "../shared/Header";
import GoogleLogin from "react-google-login";

const Login = (props) => {

    const googleSuccess = () => {

    }

    const googleFailure = () => {

    }

    return (
        <>
            <div className={'login-page'}>
                <Header/>
                <div/>
                <div className={'login-form'}/>
                <div className={'login-btn'}>
                    <h1>Login to TriGo</h1>
                    <GoogleLogin
                        clientId='129785276981-93n59qvk1b173ppqq5sf0kq4oskd6t69.apps.googleusercontent.com'
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}/>
                </div>
            </div>
        </>
    )
}

export default Login