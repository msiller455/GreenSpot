import React, { Component } from 'react';
import './Maps.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

//const API_KEY = process.env.API_KEY;
// const mapStyles = {
//   width: '90%',
//   height: '50%'
// };

export class MapContainer extends Component {
  state = {
    vendor : {}
  }

  componentDidUpdate(props, state) {
    this.initMap()
  }

  componentDidMount () {
    this.initMap()
  }
   

  //   // console.log('vendor mounted POROPPPPOSPAODPASD')
  //   // axios(`/users/${this.props.match.params.id}`)
  //   //     .then(res => {
  //   //         this.setState({
  //   //             vendor: res.data.data
  //   //         })
  //   //     })
  //   // console.log((this.state.vendor._id), 'THIS IS ID')
  //   // console.log((this.state.vendor.coordinates &&  this.state.vendor.coordinates.lat), 'THIS IS LAT')
  //   // console.log((this.state.vendor.coordinates &&  this.state.vendor.coordinates.lng), 'THIS IS LONG')

  //   this.initMap()
   
  // }

  // loadMap = () => {
  //   loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCzdgTlTndmIPFlvVcelpUoYWykNd7Qq4o&callback=initMap')
  //   window.initMap = this.initMap
  // }
 
  initMap = () => {
  // var uluru = {lat: 34.121105, lng: -118.204905};
  new window.google.maps.Map(document.getElementById('map'), {
    center: {lat: this.props.location && this.props.location.lat, lng: this.props.location && this.props.location.lng},
    zoom: 18
  });
  // var marker = window.google && new window.google.maps.Marker({
  //   position: uluru,
  //   map: map,
  //   title: 'Uluru (Ayers Rock)'
  // });
  // var contentString = '<h1>VEGAN HOOLIGANS</h1>';

// var infowindow = window.google && new window.google.maps.InfoWindow({
// content: contentString
// });
  
  // marker && marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
  // marker && marker.setMap(map);
  // map && map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
  //   window.setTimeout(function() {
  //     map.setCenter(marker.getPosition());
  //   }, 3000);
  // });

  // addMarker({lat: 34.221105, lng: -118.104905})
  // addMarker({lat: 34.121105, lng: -118.304905})

    // function addMarker (coords) {
    //   var marker = window.google && new window.google.maps.Marker({
    //     position: coords,
    //     map: map,
    //     title: 'YUM'
    //   });
    // }
}
    render () {
      // console.log('this is the maps')
      // window.initMap && window.initMap()
      // this.initMap()
      return (    
        <div>
          <div id="map"></div>
        </div>
      )
  }  
}  
  // function loadScript(url) {
  //   var index = window.document.getElementsByTagName("script")[0]
  //   var script = window.document.createElement('script')
  //   script.src = url
  //   script.async = true
  //   script.defer = true
  //   index.parentNode.insertBefore(script, index)

  // }
export default MapContainer;
