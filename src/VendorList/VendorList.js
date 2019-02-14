import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import axios from 'axios';
import { withRouter } from 'react-router-dom'



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
                <li key={user._id}>
                    <h1 className="vendor-list-header">{user.vendorName}</h1>
                    <img className="vendor-list-img" src="{user.image}" height="240rem"></img>
                </li>
            )
        })
        return (
            <div className="show-container">
                <NavBar/><br></br>
                    <ul>
                        {whoIsOut}
                    </ul>
                    {/* <h1 className="vendor-list-header">Veggie Fam</h1>
                    <img className="vendor-list-img" src="https://images.happycow.net/venues/1024/14/22/hcmp142266_510002.jpeg" height="240rem"></img>               
                    <h1 className="vendor-list-header">Lettuce Feast</h1>
                    <img className="vendor-list-img" src="https://www.foodtruckconnector.com/images/cities/Los-Angeles/Food-Trucks/Lettuce-Feast/Lettuce-Feast-Truck-1000x600.jpg" height="240rem"></img>           
                    <h1 className="vendor-list-header">Vegatinos</h1>
                    <img className="vendor-list-img" src="https://karmicvintage.files.wordpress.com/2018/02/vegatinos-1.jpg" height="240rem"></img><br></br><br></br>                              
                    <h1 className="vendor-list-header">Jackfruit Cafe</h1>
                    <img className="vendor-list-img" src="https://www.foodtruckconnector.com/images/cities/Los-Angeles/Food-Trucks/Jackfruit-Cafe/Jackfruit-Cafe-Truck.jpeg" height="240rem"></img><br></br><br></br>
                
                    <div className="vendor-list-flex">
                    <div className="vendor-column">
                        <h1 className="vendor-list-head">Veggie Fam</h1>
                        <img className="vendor-list-imgur" src="https://images.happycow.net/venues/1024/14/22/hcmp142266_510002.jpeg" height="240rem"></img>
                    </div>
                    <div className="vendor-column">
                        <h1 className="vendor-list-head">Lettuce Feast</h1>
                        <img className="vendor-list-imgur" src="https://www.foodtruckconnector.com/images/cities/Los-Angeles/Food-Trucks/Lettuce-Feast/Lettuce-Feast-Truck-1000x600.jpg" height="240rem"></img>
                    </div>
                    <div className="vendor-column">
                        <h1 className="vendor-list-head">Vegatinos</h1>
                        <img className="vendor-list-imgur" src="https://karmicvintage.files.wordpress.com/2018/02/vegatinos-1.jpg" height="240rem"></img><br></br><br></br>
                    </div>
                    <div className="vendor-column">
                        <h1 className="vendor-list-head">Jackfruit Cafe</h1>
                        <img className="vendor-list-imgur" src="https://www.foodtruckconnector.com/images/cities/Los-Angeles/Food-Trucks/Jackfruit-Cafe/Jackfruit-Cafe-Truck.jpeg" height="240rem"></img><br></br><br></br>
                    </div>
                    </div> */}
                <Footer/>
            </div>
        )
    }
}

export default withRouter(VendorList) 