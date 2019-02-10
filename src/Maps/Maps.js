import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
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
          Geocode.setApiKey("AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o");
          
          // Get latidude & longitude from address.
          let address = '15678 la subida drive, hacienda height, ca'
          Geocode.fromAddress(address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, 'THIS IS LAT');
              console.log(lng, 'this is long')
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
          geoAddress: ''
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
    return (
    <div className="map-container">
      <Map
        google={this.props.google}
        zoom={14}
        // style={mapStyles}
        initialCenter={{ lat: 33.9905825, lng: -117.9736137 }}
      >
      <Marker
      onClick={this.onMarkerClick}
      name={'Kenyatta International Convention Centre'}
      />
      <Marker
          onClick = { this.onMarkerClick }
          title = { 'ABE HOUSE' }
          position = {{ lat: this.state.geoAddressLat, 
                        lng: this.state.geoAddressLong }}
          name = { 'ABE HOUSE' }  
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