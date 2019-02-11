import React, { Component } from 'react';

class SearchBar extends Component {


    render () {
        return (
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Enter your address"></input>
            </div>
        )
    }
}

export default SearchBar