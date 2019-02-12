import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'



class VendorList extends Component {


    render () {
        return (
            <div className="show-container">
                <NavBar/><br></br>
                    <h1 className="vendor-list-header">Veggie Fam</h1>
                    <img className="vendor-list-img" src="https://images.happycow.net/venues/1024/14/22/hcmp142266_510002.jpeg" height="240rem"></img>
                    <h1 className="vendor-list-header">Lettuce Feast</h1>
                    <img className="vendor-list-img" src="https://www.foodtruckconnector.com/images/cities/Los-Angeles/Food-Trucks/Lettuce-Feast/Lettuce-Feast-Truck-1000x600.jpg" height="240rem"></img>
                    <h1 className="vendor-list-header">Vegatinos</h1>
                    <img className="vendor-list-img" src="https://karmicvintage.files.wordpress.com/2018/02/vegatinos-1.jpg" height="240rem"></img><br></br><br></br>
                    <h1 className="vendor-list-header">Jackfruit Cafe</h1>
                    <img className="vendor-list-img" src="https://images.happycow.net/venues/1024/10/02/hcmp100259_300958.jpeg" height="240rem"></img><br></br><br></br>
                <Footer/>
            </div>
        )
    }
}

export default VendorList 