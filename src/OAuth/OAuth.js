import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { withRouter } from 'react-router-dom'



class OAuth extends Component {


    render() {
        return(
            <div className="google-fullscreen-login-btn">
                <div className={'button-wrapper fadein-fast'}>
                    <button
                        onClick={(e) => this.props.startAuth(e)}
                        className={`google button`}
                    >
                        Login with Google <FontAwesome name={'google'} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(OAuth)