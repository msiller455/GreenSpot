import React, { Component } from 'react';


class SearchBar extends Component {
    state = {
        searchInput: '',
        geoAddress: ''
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
        console.log(this.state.searchInput);
    //      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchInput}&key=AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o`).then(res=>res.json()).then(function(data) {
    //  console.log(data)})
        //search the area for vendors
        //populate area with vendor markers. //with markers have vendor show info
    }
  
  

      getGeoaddress = async () => {
        try { 
        const geoAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchInput}&key=AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o`);
        if(!geoAddress.ok) {
          throw Error(geoAddress.statusText);
        }
        const geoAddressParsedJson = await geoAddress.json();
        console.log(geoAddressParsedJson, 'THIS IS PARSED');
        this.setState({
          geoAddress: geoAddressParsedJson.data
        })
      } catch (err) {
        console.log(err, 'error in catch')
      }
    }
    
    componentDidMount () {
        this.getGeoaddress();  
    } 


    render () {
        return (
            <div className="search-container">
                <input name="searchInput"className="search-input" onChange={this.handleChange} type="text" placeholder="Enter your address"></input>
               <button onClick={this.handleSearch}>Search </button>
            </div>
        )
    }
}

export default SearchBar