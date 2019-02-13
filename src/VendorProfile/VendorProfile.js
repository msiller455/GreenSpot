import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Carousel from 'nuka-carousel';
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
                <h1 className="vendor-show-name">{this.state.vendor.vendorName}</h1>
                <button onClick={this.routeChange} vendorUpdate={this.vendorUpdate} >Edit Profile</button>
                <div className="vendor-img-bio-flex">
                    <img className="vendor-show-logo" src="{this.state.image}" height="120rem"></img>
                    <h3 className="vendor-bio">{this.state.vendor.location}</h3>
                </div>
                    <Carousel>
                        <img className="cara-img" src="http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2018/05/vegan-hooligans.jpg" />
                        <img className="cara-img" src="https://images.happycow.net/venues/1024/11/54/hcmp115492_375128.jpeg" />
                        <img className="cara-img" src="https://static.wixstatic.com/media/afa30d_a284a182491549e0af7dd6b678cd6066~mv2_d_2400_1602_s_2.jpg" />
                    </Carousel>
                    <h2 className="vendor-show-review">{this.state.vendor.website}</h2>

                <Footer/>

            </div>
        )
    }
}

export default withRouter(VendorProfile)
