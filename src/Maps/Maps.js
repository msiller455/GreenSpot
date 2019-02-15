import React, { Component } from 'react';
import './Maps.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
   

  
  initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: this.props.location,
    zoom: 18
  });
  new window.google.maps.Marker({
    position: this.props.location,
    map: map,
    title: 'Hello World!'
  });
}
    render () {
      return (    
        <div>
          <div id="map"></div>
        </div>
      )
  }  
}  


export default MapContainer;
