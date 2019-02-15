import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

class Contact extends Component {


    render () {
        return (
            <div className="contact-container">
                <NavBar/>
                    <h1 className="contact-headline">Contact</h1> 
                    <div className ="contact-move-left">
                    <div className="contact-flex">
                        <h3 className="contact-name">Brent Ahrens </h3>
                        <img className="contact-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40rem" alt="logo"></img>
                        <a className="github-link" href="https://github.com/brentahrens1">GitHub</a>

                    </div>
                    <div className="contact-flex">
                        <h3 className="contact-name">Michael Siller </h3>
                        <img className="contact-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40rem" alt="logo"></img>
                        <a className="github-link" href="https://github.com/msiller455">GitHub</a>
                    </div>
                    <div className="contact-flex">
                        <h3 className="contact-name">Abraham Hsu </h3>
                        <img className="contact-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40rem" alt="logo"></img>
                        <a className="github-link" href="https://github.com/smokiebacon">Git Hub</a>
                    </div> 
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact
