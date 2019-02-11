import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
//const API_KEY = process.env.API_KEY;


// const mapStyles = {
//   width: '90%',
//   height: '50%'
// };

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},        //Shows the infoWindow to the selected place upon a marker
        geoAddressLat: '',
        geoAddressLong: ''          
        }; 

  componentDidMount () {
        this.GeoAddress();
        
    }        
  GeoAddress = () => {
      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
      Geocode.setApiKey('AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o');
      
      // Get latidude & longitude from address.
      let address = '90042'

      Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({
            geoAddressLat : lat,
            geoAddressLong: lng
        })
        },
        error => {
          console.error(error);
        }
      )
    }
    
  onMarkerClick = (props, marker, e) => {
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
    })
  }
  onClose = prop => {
      if (this.state.showingInfoWindow) {
          this.setState({
              showingInfoWindow: false,
              activeMarker: null
          })
      }
  }     

  render() {
    console.log(this.state.geoAddressLat);
    console.log(this.state.geoAddressLong);

    return (
    <div className="map-container">
      <Map
        google={this.props.google}
        zoom={20}
        // style={mapStyles}
        initialCenter={{ lat: 34.121105, lng: -118.204905}}
      >
      <Marker
      onClick={this.onMarkerClick}
      name={'YORK VEGAN VENDORS'}
      />
      <Marker
          onClick = { this.onMarkerClick }
          title = { 'VEGAN HOOLIGANS' }
          position = {{ lat: -9.1814, 
                        lng: 37.8234 }}
          name = { 'VEGAN HOOLIGANS' }
          geoAddressLat ={'HELLO WOLRD'}
          geoAddressLong = {'this.state.geoAddressLong'}    
       />
       <Marker
          onClick = { this.onMarkerClick }
          title = { 'PIZZA PLANT' }
          position = {{ lat: -9.2814, lng: 36.8234 }}
          name = { 'PIZZA PLANT' }
       />
      <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
      >
      <div>
        <h4>{this.state.selectedPlace.name}</h4>
        <h4>{this.state.geoAddressLat}</h4>
        <h4>{this.state.geoAddressLong}</h4>
      </div>
    </InfoWindow>
    </Map>
    </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o'
})(MapContainer);