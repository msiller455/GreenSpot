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
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchInput}&key=AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o`).then(res=>res.json()).then(function(data) {
        // console.log(data)})
        //GO TO THAT CITY
        //search the area for vendors
        //populate area with vendor markers. //with markers have vendor show info
        // var points = [
        //     { lat: 42.02, lng: -77.01 },
        //     { lat: 42.03, lng: -77.02 },
        //     { lat: 41.03, lng: -77.04 },
        //     { lat: 42.05, lng: -77.02 }
        // ]
        console.log(window.google.maps.Map.prototype.panTo)
        // console.log(this.props)
        // var bounds = new window.google.maps.LatLngBounds();
        // for (var i = 0; i < points.length; i++) {
        //   bounds.extend(points[i]);
        // }
        // console.log(bounds)
        // return (
        //     <Map
        //   google={this.props.google}
        // //   style={style}
        //   center={{
        //     lat: 40.854885,
        //     lng: -88.081807
        //   }}
        //   zoom={15}
        //   onClick={this.onMapClicked}
        // />
        // )
        
        
         
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