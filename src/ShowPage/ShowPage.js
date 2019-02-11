import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button'
import Maps from '../Maps/Maps'


class ShowPage extends Component {


    render () {
        return (
            <div className="show-container">
                <header><NavBar/></header>
                <div className="show-flex">
                    <SearchBar/>
                </div>
                    <Maps/>
                <footer><Footer/></footer>
            </div>
        )
    }
}

export default ShowPage