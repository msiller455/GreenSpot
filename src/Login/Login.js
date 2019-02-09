import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        username : '',
        password : ''
    }
    handleLogin = (e) => {
        e.preventDefault()
        console.log('login clicked')
    }

    render () {
        return (
            <div>
                <h1 className="login-header">Log in</h1>
                <h4 className="login-header">New to Green Spot?</h4>
               
                <form className="forms">
                    <input className="login-email" type="email" name="email" placeholder="Email"/>
                    <input className="login-password" type="password" name="password" placeholder="Password"/><br></br>
                    <button className="login-btn" onClick={this.handleLogin}>Log in</button>
                </form>
            </div>

        )
    }


}

export default Login;
