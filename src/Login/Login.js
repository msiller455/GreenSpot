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
            <div className="login-container">
                <img className="vegan-logo" src="https://www.v-label.eu/wp-content/uploads/2016/10/allergien2.png" height="70px" width="70px"></img>
                <h1 className="login-main-header">Log in</h1>
                <h4 className="login-header">New to Green Spot? <Link className="signup-link" to='/signup'>Sign up</Link></h4>
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
