import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



class SearchBar extends Component {

//  const mapStyles = {
//   width: '90%',
//   height: '50%'
// };
    state = {
        searchInput: '',
        geoAddressLat: '',
        geoAddressLng: ''
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
        this.getGeoaddress();     
    }
    getGeoaddress = async () => {
        try { 
        const geoAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchInput}&key=AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o`);
        if(!geoAddress.ok) {
          throw Error(geoAddress.statusText);
        }
        const geoAddressParsedJson = await geoAddress.json();
        let geoAddressLat = geoAddressParsedJson.results[0].geometry.location.lat;
        let geoAddressLng = geoAddressParsedJson.results[0].geometry.location.lng;
        this.setState({
          geoAddressLat: geoAddressLat,
          geoAddressLng: geoAddressLng

        })
      } catch (err) {
        console.log(err, 'error in catch')
      }
      console.log(this.state.geoAddressLat, 'THIS IS GEOADDRESS LAT')
      console.log(this.state.geoAddressLng, 'THIS IS GEOADDRESS LNG')
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