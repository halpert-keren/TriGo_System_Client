import React from 'react';
import './Login.css'
import {GoogleLogin} from 'react-google-login'
import Header from "../shared/Header";

const Login = (props) => {

    const googleSuccess = () => {

    }

    const googleFailure = () => {

    }

return(
    <>
        <div className={'login-page'}>
            <Header/>
            <div className={'login-form'}/>
                <div className={'login-btn'}>
                    <h1>Login to TriGo</h1>
                    <GoogleLogin
                        clientId='554171649210-i97q2kqu31t4hg021qdpmjn9kbobor0h.apps.googleusercontent.com'
                        onSuccess={googleSuccess}
                        onFailure={googleFailure} />
                </div>
            </div>

    </>
)
}
export default Login