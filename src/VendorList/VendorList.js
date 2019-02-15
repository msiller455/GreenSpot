import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom'



class VendorList extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        console.log('these vendors are mounting')
        axios('/users')
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data.data
                })
            }) 
    }

    
    render () {
        const whoIsOut = this.state.users.map((user) => {
            return (
                <div>
                    <li key={user._id}>
                        <Link to={`/users/${user._id}`}><h1 className="vendor-list-header">{user.vendorName}</h1></Link>
                        <img className="vendor-list-image" src={`${user.image}`} height="240rem" alt="food"></img>
                    </li>
                    <div className="full-screen-vendorlist">
                        <li key={user._id}>
                        <Link to={`/users/${user._id}`}><h1 className="fullvendor-list-header">{user.vendorName}</h1></Link>
                        <img className="fullvendor-list-image" src={`${user.image}`} height="240rem" alt="food"></img>
                        </li>
                    </div>
                </div>
            )
        })
        return (
            <div className="show-container">
                <NavBar/><br></br>
                    <ul>
                        {whoIsOut}
                    </ul>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(VendorList) 