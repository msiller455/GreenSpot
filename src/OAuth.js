import React, { Component } from 'react';


class OAuth extends Component {
    state = {
        user: {},
        disabled: ''
    }

    componentDidMount() {
        const { socket } = this.props

        socket.on('google', user => {
            console.log('google')
            this.popup.close()
            this.setState({ user })
        })
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this 
                if(!popup || popup.closed || popup.closed === undefined) {
                    clearInterval(check)
                    this.setState({disabled: ''})
                }
        }, 1000)
    }

    openPopup() {
        const { provider, socket } = this.props
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
      startAuth(e) {
          if(!this.state.disabled) {
              e.preventDefault()
              this.popup = this.openPopup() 
              this.checkPopup()
              this.setState({disabled:'disabled'})
          }
      }
      closeCard() {
          this.setState({user: {}})
      }
      render() {
        console.log(process.env)
        const { name, photo} = this.state.user
        const { disabled } = this.state
      
        return(
            <div>
                <div>
                    <button
                        onClick={this.startAuth.bind(this)}
                    >google</button>
                </div>
            </div>
        )
        }
}

export default OAuth