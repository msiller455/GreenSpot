import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Maps from '../Maps/Maps'
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class VendorProfile extends Component {
    state = {
        vendor: {}
    }
    componentDidMount() {
        axios(`${process.env.REACT_APP_API_URL}/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    vendor: res.data.data
                })
            })
    }
    routeChange = () => {
        this.props.history.push(`/users/${this.props.match.params.id}/edit`);
    }

    vendorUpdate = (e) => {
     e.preventDefault()
     axios.put(`/users/${this.props.match.params.id}`, this.state)
    }

    deleteVendor = () => {
        axios.delete(`/users/${this.props.match.params.id}`, this.state)
        this.props.history.push(`/`);
    }
    render () {
        console.log((this.state.vendor._id), 'THIS IS ID')
        return (
            <div className="show-container">
                <NavBar/><br></br>
                <h1 className="vendor-show-name">{this.state.vendor.vendorName}</h1>
                <div className="vendor-img-bio-flex">
                    <h3 className="vendor-location">{this.state.vendor.location}</h3>   
                </div>
                    <h2 className="vendor-show-review">{this.state.vendor.website}</h2>
                    <button className="edit-show-btn" onClick={this.routeChange} vendorUpdate={this.vendorUpdate} >Edit Profile</button>

                    <Maps location={this.state.vendor.coordinates}/> 
                    <button className="delete-show-btn" onClick={this.deleteVendor} >Delete Profile</button>
 
                    <img className="cara-img" src={this.state.vendor.image}/> 
                  
                <Footer/>
            </div>
        )
    }
}

export default withRouter(VendorProfile)
