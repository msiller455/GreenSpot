import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

class About extends Component {


    render () {
        return (
            <div>
                <NavBar/>
                <div className="about-container">
                    <h1 className="about-header">About</h1>
                    <h3 className="about-body">Shining a spotlight on the vegan food truck scene.</h3>
                </div>
                <Footer/>
             </div>
        )
    }
}

export default About
