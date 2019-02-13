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
                <h1 className="vendor-edit-header">Edit your profile</h1>
                <form className="forms" onSubmit={(e) => this.vendorUpdate(e)}>
                    Vendor Name: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="vendorName"/><br/>
                    Tonight's address: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="location"/><br/>
                    Out tonight: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="checkbox" name="outTonight"/><br/>
                    Website: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="website"/><br/>
                    Post a food pic: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="image"/><br/>
                    <br/>
                    <input className="vendor-edit-submit" type="Submit"/>
                </form>
            </div>
        )
    }
}


export default withRouter(EditPage)
