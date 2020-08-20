import React, { Fragment } from 'react';
import './EmailInput.scss';

export default function EmailInput () {
    return (
        <Fragment>
            <label className="email__label">Email Address</label>
            <input className="email__input" type="email" name="email" />
            <input className="remember__checkbox" id="remember" type="checkbox" name="remember" />
            <label className="email__checkbox__label" htmlFor="remember">Remember this device</label>
        </Fragment>
        
    )
}