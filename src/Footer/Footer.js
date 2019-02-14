import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {


    render () {
        return (
            <div className="footer-container">
            <ul className="footer-flex">
                    <li className="footer-links"><Link to='#'>About</Link></li>
                    <li className="footer-links"><Link to='#'>Contact</Link></li>
                    <li className="footer-links"><Link to='/'>Log out</Link></li>
            </ul>        
        </div>
        )
    }
}


export default Footer 