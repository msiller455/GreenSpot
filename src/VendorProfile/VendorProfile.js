import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Carousel from 'nuka-carousel';



class VendorProfile extends Component {


    render () {
        return (
            <div className="show-container">
                <NavBar/><br></br>
                <h1 className="vendor-show-name">The Vegan Hooligans</h1>
                <div className="vendor-img-bio-flex">
                    <img className="vendor-show-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KlOpbuI65oPgH5O7IisnrPTQ4XqZnFZ8sfHLwEZldPg0Y5ha" height="120rem"></img>
                    <h3 className="vendor-bio">We make vegan food fun. , we love giving ya'll them spicy pickles you love! 
                        make sure to try our new Mac Melt sandwhich.
                    </h3>
                </div>
                    <Carousel>
                        <img src="http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2018/05/vegan-hooligans.jpg" />
                        <img src="https://images.happycow.net/venues/1024/11/54/hcmp115492_375128.jpeg" />
                    </Carousel>
                    <h1 className="vendor-show-review">Reviews</h1>
                    <h3 className="user-reviews">Brent: This place is bomb!!! My favorite spot in the York Zone. Highly recommand.
                        this is a must for anyone new to the vegan street food world.
                    </h3><br></br><br></br>

                <Footer/>

            </div>
        )
    }
}

export default VendorProfile  