import React, { Component } from 'react';


class SingUp extends Component {
    state = {
        username : '',
        password : ''
    }
    handlesubmit = (e) => {
        e.preventDefault()
        console.log('login clicked')
    }

    render () {
        return (
            <div className="signup-container">
                <h1 className="signup-header">Sign up</h1>
                <form className="forms">
                    <input className="signup-email" type="email" name="email" placeholder="Email"/>
                    <input className="signup-password" type="password" name="password" placeholder="Password"/><br></br>
                    <button className="signup-btn" onClick={this.handleSubmit}>Continue</button>
                </form>
            </div>

        )
    }


}

export default SingUp