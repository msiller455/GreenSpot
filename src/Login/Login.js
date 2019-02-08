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
            <form>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <button onClick={this.handleLogin}>Login</button>
            </form>

        )
    }


}

export default Login;
