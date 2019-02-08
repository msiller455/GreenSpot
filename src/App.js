import React, { Component } from 'react';
import Login from './Login/Login'
import './App.css';
import Splash from './Splash/Splash'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash/>
        <Login/>
       
      </div>
    );
  }
}

export default App;
