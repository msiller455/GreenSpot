import React, { Component } from 'react';
import Login from './Login/Login'
import './App.css';
import Splash from './Splash/Splash'
import './Splash/Splash.css'
import Button from './Button/Button'
import './Button/Button.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Splash/>
      <Button/>
      </div>
    );
  }
}

export default App;
