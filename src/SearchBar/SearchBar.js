import React, { Component } from 'react';

class SearchBar extends Component {


    render () {
        return (
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search vendors"></input>
            </div>
        )
    }
}

export default SearchBar