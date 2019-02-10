import React, { Component } from 'react';
import './App.css';
import Splash from './Splash/Splash'
import './Splash/Splash.css'
import './Button/Button.css'
import SignUp from './SignUp/SignUp'
import './SignUp/SignUp.css'
import Login from './Login/Login'
import './Login/Login.css'
import { Route, Switch } from 'react-router-dom'

const my404 = () => {
  return(
    <div>
      there is an error
    </div>
  )
}
const App = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={ Splash }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/signup' component={ SignUp }/>
        <Route component={ my404 }/>
      </Switch>
    </main>
  )
}

export default App;
