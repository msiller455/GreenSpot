import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import {withRouter} from 'react-router-dom'



class VendorProfile extends Component {
    state = {
        fileSelected: null,
        vendor: {}
    }

    componentDidMount() {
        console.log('vendor mounted')
        axios(`/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    vendor: res.data.data
                })
            })
    }


    fileSelected = (e) => {
        this.setState({
            fileSelected : e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    fileUpload = () => {
        const fd = new FormData();
        fd.append('image', this.state.fileSelected, this.state.fileSelected.name)
        axios.post('/users', fd)
            .then(res => {
                console.log(res);
            })

    }

    routeChange = () => {
        this.props.history.push(`/users/${this.props.match.params.id}/edit`);
    }

    vendorUpdate = async (e) => {
        e.preventDefault()
        axios.put('/users/${this.props.match.params.id}', this.state)
    }



    render () {
        return (
            <div className="show-container">
                <NavBar/><br></br>
                <button class="edit-show-btn" onClick={this.routeChange} vendorUpdate={this.vendorUpdate} >Edit Profile</button>
                <h1 className="vendor-show-name">{this.state.vendor.vendorName}</h1>
                <div className="vendor-img-bio-flex">
                    <h3 className="vendor-location">{this.state.vendor.location}</h3>
                </div>                   
                     <img className="cara-img" src={this.state.vendor.image}/>                   
                    <h2 className="vendor-show-review">{this.state.vendor.website}</h2>

                <Footer/>

            </div>
        )
    }
}

export default withRouter(VendorProfile)
