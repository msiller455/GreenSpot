import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import Maps from '../Maps/Maps'

class ShowPage extends Component {
    state = {
        location: {lat: 34.121105, lng: -118.204905}
    }

    doUpdateLocation = (localObj) => 
        this.setState({location: localObj})

    render () {
        console.log('this is the show page')
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