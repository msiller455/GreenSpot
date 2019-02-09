import React, { Component } from 'react';

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
                <form className="forms">
                    <input className="login-email" type="email" name="email" placeholder="Email"/>
                    <input className="login-password" type="password" name="password" placeholder="Password"/><br></br>
                    <button className="login-btn" onClick={this.handleLogin}>Login</button>
                </form>
            </div>

        )
    }


}

export default Login;
