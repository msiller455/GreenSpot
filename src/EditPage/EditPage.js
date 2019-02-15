import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class EditPage extends Component {

    vendorUpdate = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.user.id}`, this.state)
            .then(res => {
                (res.status === 200)
                    ? this.props.history.push(`/users/${this.props.user.id}`)
                    : console.log(res.error)
            })
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1 className="vendor-edit-header">Edit your profile</h1>
                <form className="forms" onSubmit={(e) => this.vendorUpdate(e)}>
                    <h3 className="editpagename-text">Vendor Name</h3>
                    <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="vendorName"/><br/>
                    <h3 className="editpage-text">Location</h3>
                    <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" pattern="\d+\s+.+" name="location"/><br/>
                    <h3 className="editpage-text">Out Tonight?</h3>
                    <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="checkbox" name="outTonight"/><br/>
                    <h3 className="editpage-text">Website</h3>
                    <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="website"/><br/>
                    <h3 className="editpage-text">Food Pic</h3>
                    <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="image"/><br/>
                    <br/>
                    <input className="vendor-edit-submit" type="Submit"/>
                </form>
            </div>
        )
    }
}


export default withRouter(EditPage)
