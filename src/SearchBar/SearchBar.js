import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchInput: ''
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            searchInput : e.target.value
        })
        console.log(this.state);
        //search the area for vendors
        //populate area with vendor markers. //with markers have vendor show info
    }


    render () {
        return (
            <div className="search-container">
                <input className="search-input" onChange={this.handleChange} type="text" placeholder="Enter your address"></input>
               <button onClick={this.handleSearch}>Search </button>
            </div>
        )
    }
}

export default SearchBar