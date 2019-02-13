import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {


    render () {
        return (
            <div className="nav-container">
                <h1 className="nav-header"><div className="green">Green</div> Spot</h1>
            <ul className="nav-flex">
                <li className="nav-links"><Link to='/main'>Map</Link></li>
                <li className="nav-links"><Link to='/users'>Vendors</Link></li>
                <li className="nav-links" onClick={(e) => this.props.startAuth(e)}><a>Log in</a></li>
            </ul>  
                <input className="search-header-input" type="text" placeholder="Enter your address"></input>      
        </div>
        )
    }
}




export default NavBar 