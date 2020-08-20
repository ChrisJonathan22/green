import React from 'react';
import './LoginPage.scss';
import EmailInput from '../EmailInput/EmailInput';
import LoginBtn from '../LoginBtn/LoginBtn';

export default function LoginPage () {
    return (
        <div className="container">
            <div className="inner__container">
                <div className="logo__container">
                    <img src='/green_logo.svg' alt='logo' />
                </div>
                <h1 className="title">Example login screen</h1>
                <h2 className="subtitle">Getting started with Green</h2>
                <div className="email__container">
                    <EmailInput />
                    <LoginBtn />
                </div>
            </div>
        </div>
    )
}