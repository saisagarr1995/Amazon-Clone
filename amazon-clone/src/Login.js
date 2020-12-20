import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase'

import loginLogo from "./Images/loginLogo.jpg"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (takesAnEvent) => {
        //*this stops the represh the page & this is for login
        takesAnEvent.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //if logedin redrict to homepage
                history.push('/')
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const register = (event) => {
        //*this is for register
        event.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')

            })
            .catch((error) => {
                alert(error.message)
            })

    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={loginLogo}
                    alt="loginLogo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signinButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
