import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Maps from '../Maps/Maps'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import openSocket from 'socket.io-client'

class VendorProfile extends Component {
    state = {
        vendor: {},
        user: {}
    }
    componentDidMount() {
        // if (this.props.user){
        //     localStorage.setItem("current", JSON.stringify(this.props.user))
        //   }
        //   var currentUser = JSON.parse(localStorage.getItem("current"))
    axios(`/users/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                vendor: res.data.data,
                user: this.props.user
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
        console.log(this.state.vendor._id === this.props.match.params.id)
        console.log(this.state)
        const { _id } = this.state.vendor
        const { id } = this.state.user
        return (
            <div className="show-container">
                <NavBar/><br></br>
                <h1 className="vendor-show-name">{this.state.vendor.vendorName}</h1>
                <div className="vendor-img-bio-flex">
                    <h3 className="vendor-location">{this.state.vendor.location}</h3>   
                </div>
                    {(id === _id)
                    ?
                    <div>
                    <button className="edit-show-btn" onClick={this.routeChange} vendorUpdate={this.vendorUpdate} >Edit Profile</button>
                    <button className="delete-show-btn" onClick={this.deleteVendor} >Delete Profile</button>
                    </div>
                    :(
                        <div>
                        </div>
                    )
                    } 
                    <Maps location={this.state.vendor.coordinates}/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(VendorProfile)
