import React, { Component } from 'react';
import Login from './Login/Login'
import './App.css';
import Splash from './Splash/Splash'
import Maps from './Maps/Maps';
import './Maps/Maps.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Splash/>
      <Login />
      <Maps />
      </div>
    );
  }
}

export default App;
