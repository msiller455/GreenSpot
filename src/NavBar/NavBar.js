import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {


    render () {
        return (
            <div className="nav-container">
                <h1 className="nav-header"><div className="green">Green</div> Spot</h1>
            <ul className="nav-flex">
                <li className="nav-links"><Link to='#'>Venders</Link></li>
                <li className="nav-links"><Link to='#'>Reviews</Link></li>
                <li className="nav-links"><Link to='#'>Log Out</Link></li>
            </ul>  
                <input className="search-header-input" type="text" placeholder="Enter your address"></input>      
        </div>
        )
    }
}




export default NavBar 