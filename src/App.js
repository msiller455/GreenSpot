import React, { Component } from 'react';

import './App.css';
import Splash from './Splash/Splash'
import './Maps/Maps.css';
import './Splash/Splash.css'
import './Button/Button.css'
import SignUp from './SignUp/SignUp'
import './SignUp/SignUp.css'
import Login from './Login/Login'
import './Login/Login.css'
import './NavBar/NavBar.css'
import './Footer/Footer.css'
import './SearchBar/SearchBar.css'
import './OAuth/OAuth.css'
import VendorList from './VendorList/VendorList'
import './VendorList/VendorList.css'
import VendorProfile from './VendorProfile/VendorProfile'
import './VendorProfile/VendorProfile.css'
import ShowPage from './ShowPage/ShowPage'
import { Route, Switch, withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import Maps from './Maps/Maps'
import EditPage from './EditPage/EditPage'

const socket = io('http://localhost:3030')

const my404 = () => {
  return(
    <div>
      there is an error
    </div>
  )
}

class App extends Component  {
    state = {
      user: {},
      disabled: '',
      loggedIn: false,
      vendors: [],
      vendorsToEdit: {
        vendorName: '',
        location: '',
        image: '',
        website: '',
        bio: '',
        _id: null
      }
  }
  componentDidMount() {
      socket.on('google', user => {
          this.popup.close()
          this.setState({user, loggedIn: true})
          this.props.history.push(`/vendor/${user.id}`)
      })
  }

  checkPopup = () => {
      const check = setInterval(() => {
          const { popup } = this
              if(!popup || popup.closed || popup.closed === undefined) {
                  clearInterval(check)
                  this.setState({disabled: ''})
              }
      }, 1000)
  }

  openPopup = () => {
      const width = 600, height = 600
      const left = (window.innerWidth / 2) - (width / 2)
      const top = (window.innerHeight / 2) - (height / 2)
      const url = `http://localhost:9000/google?socketId=${socket.id}`

      return window.open(url,null,
        `toolbar=no, location=no, directories=no, status=no, menubar=no,
        scrollbars=no, resizable=no, copyhistory=no, width=${width},
        height=${height}, top=${top}, left=${left}`
      )
    }
    startAuth = (e) => {
        if(!this.state.disabled) {
            e.preventDefault()
            this.popup = this.openPopup()
            this.checkPopup()
            this.props.history.push("/vendor")
        }
    }

    closeCard = () => {
        this.setState({user: {}, loggedIn: false})
    }

  render() {
    return(
      <div>
        {/* {this.state.loggedIn ? <div>logged in</div> : <div>sign in</div>} */}
        <Switch>
          <Route exact path='/' component={ () => <Splash
            socket={socket}
            checkPopup={this.checkPopup}
            openPopup={this.openPopup}
            startAuth={this.startAuth}
            closeCard={this.closeCard}
            loggedIn={this.state.loggedIn}
          /> }/>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/signup' component={ SignUp }/>
          <Route exact path='/main' component={ ShowPage }/>
          <Route exact path='/vendor/:id' component={ VendorProfile }/>
          <Route exact path='/vendor/:id/edit' component={ EditPage }/>
          <Route exact path='/vendorlist' component={ VendorList }/>
          <Route exact path='/maps' component={ Maps }/>
          <Route component={ my404 }/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
