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
import './EditPage/EditPage.css'
import Contact from './Contact /Contact'
import './Contact /Contact.css'
import VendorList from './VendorList/VendorList'
import './VendorList/VendorList.css'
import VendorProfile from './VendorProfile/VendorProfile'
import './VendorProfile/VendorProfile.css'
import ShowPage from './ShowPage/ShowPage'
import { Route, Switch, withRouter } from 'react-router-dom'
import io from 'socket.io-client'
import Maps from './Maps/Maps'
import EditPage from './EditPage/EditPage'

const socket = io(process.env.REACT_APP_API_URL)

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
          user.created
            ? this.props.history.push(`/users/${user.id}/edit`)
            : this.props.history.push(`/users/${user.id}`)
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
      const url = `${process.env.REACT_APP_API_URL}/google?socketId=${socket.id}`

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
          <Route exact path='/users/:id' component={ VendorProfile }/>
          <Route exact path='/users/:id/edit' component={() => <EditPage user={this.state.user}/> }/>
          <Route exact path='/users' component={ VendorList }/>
          <Route exact path='/maps' component={ Maps }/>
          <Route exact path='/contact' component={ Contact }/>
          <Route component={ my404 }/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
