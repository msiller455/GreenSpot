import React, { Component } from 'react';
import './App.css';
import Splash from './Splash/Splash'
import './Splash/Splash.css'
import Button from './Button/Button'
import './Button/Button.css'
import Login from './Login/Login'
import { Route, Switch } from 'react-router-dom'

const my404 = () => {
  return(
    <div>
      You are Lost!
    </div>
  )
}
const App = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={ Splash } />
        <Route component={ 404 }/>
      </Switch>
    </main>
  )
}

export default App;
