import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class EditPage extends Component {
    vendorUpdate = (e) => {
        e.preventDefault()
        console.log(this.props.user)
        axios.put(`/users/${this.props.user.id}`, this.state)
            .then(res => {
                (res.status === 200)
                    ? this.props.history.push(`/users/${this.props.user.id}`)
                    : console.log(res.error)
            })
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Vendor Edit Page</h1>
                <form className="forms" onSubmit={(e) => this.vendorUpdate(e)}>
                    Vendor Name: <input onChange={(e) => this.handleInput(e)} type="text" name="vendorName"/><br/>
                    Tonight's location: <input onChange={(e) => this.handleInput(e)} type="text" name="location"/><br/>
                    Phone Number: <input onChange={(e) => this.handleInput(e)} type="text" name="phone"/><br/>
                    Website: <input onChange={(e) => this.handleInput(e)} type="text" name="website"/><br/>
                    Profile Picture: <input onChange={(e) => this.handleInput(e)} type="text" name="profilePic"/><br/>
                    Food images (At least 1 preferably): <input onChange={(e) => this.handleInput(e)} type="text" name="image"/><br/>
                    <br/>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }

}


export default withRouter(EditPage)
