import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button'
import Maps, { MapContainer } from '../Maps/Maps'


class ShowPage extends Component {
    state = {
        location: {}
    }

    doUpdateLocation = (localObj) => 
        this.setState({location: localObj})

    
    render () {
        console.log('render this')
        return (
            <div className="show-container">
                <header><NavBar/></header>
                <div className="show-flex">
                <SearchBar doUpdateLocation={this.doUpdateLocation}/>
                </div>
                <Maps location={this.state.location}/>
                <footer><Footer/></footer>
            </div>
        )
    }
}

export default ShowPage 