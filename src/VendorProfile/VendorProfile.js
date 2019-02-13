import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Carousel from 'nuka-carousel';
import axios from 'axios';
import {withRouter} from 'react-router-dom'



class VendorProfile extends Component {
    state = {
        fileSelected: null
    }

    componentDidMount() {
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
        axios.post('/vendors', fd)
            .then(res => {
                console.log(res);
            })

    }
    routeChange = () => {
     this.props.history.push(`/vendor/${this.props.match.params.id}/edit`);
    }

 vendorUpdate = async (e) => {
     //edit
    }



    render () {
        return (
            <div className="show-container">
                <NavBar/><br></br>
                <h1 className="vendor-show-name">The Vegan Hooligans</h1>
                <button onClick={this.routeChange} vendorUpdate={this.vendorUpdate} >Edit Profile</button>
                <div className="vendor-img-bio-flex">
                    <img className="vendor-show-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KlOpbuI65oPgH5O7IisnrPTQ4XqZnFZ8sfHLwEZldPg0Y5ha" height="120rem"></img>
                    <h3 className="vendor-bio">We make vegan food fun. , we love giving ya'll them spicy pickles you love!
                        make sure to try our new Mac Melt sandwhich.
                    </h3>
                </div>
                    <Carousel>
                        <img className="cara-img" src="http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2018/05/vegan-hooligans.jpg" />
                        <img className="cara-img" src="https://images.happycow.net/venues/1024/11/54/hcmp115492_375128.jpeg" />
                        <img className="cara-img" src="https://static.wixstatic.com/media/afa30d_a284a182491549e0af7dd6b678cd6066~mv2_d_2400_1602_s_2.jpg" />
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

export default withRouter(VendorProfile)
