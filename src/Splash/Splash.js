import React, { Component } from 'react';
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Splash = () => 
    <div className="splash-container">
        <h1 className="splash-header">Green Spot</h1>
        <img className="splash-img" src="http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2018/05/vegan-hooligans.jpg"></img>
        <Button/>
        <Link to='#'>Venue Login</Link>
    </div>

export default Splash 