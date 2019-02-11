import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


class ShowPage extends Component {


    render () {
        return (
            <div className="show-container">
                <header><NavBar/></header>
                <footer><Footer/></footer>
            </div>
        )
    }
}

export default ShowPage