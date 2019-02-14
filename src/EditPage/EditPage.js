import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class EditPage extends Component {
    state = {
        vendor:{}
    }

    componentDidMount() {
        axios(`/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    vendor: res.data.data
                })
            })
    }

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
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }

    render() {
        console.log(this.state, 'THIS IS state!!!')
        return (
            <div>
                <h1 className="vendor-edit-header">Edit your profile</h1>
                <form className="forms" onSubmit={(e) => this.vendorUpdate(e)}>
                    Vendor Name: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="vendorName" value={this.state.vendor.vendorName}/><br/>
                    Tonight's address: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" pattern="\d+\s+.+" name="location" value={this.state.vendor.location}/><br/>
                    Out tonight: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="checkbox" name="outTonight"/><br/>
                    Website: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="website" value={this.state.vendor.website}/><br/>
                    Post a food pic: <input className="edit-page-input" onChange={(e) => this.handleInput(e)} type="text" name="image"/><br/>
                    <br/>
                    <input className="vendor-edit-submit" type="Submit"/>
                </form>
            </div>
        )
    }
}


export default withRouter(EditPage)
