import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'



class OAuth extends Component {


    render() {
        return(
            <div>
                <div className={'button-wrapper fadein-fast'}>
                    <button
                        onClick={(e) => this.props.startAuth(e)}
                        className={`google button`}
                    >
                        Login with Goolge<FontAwesome name={'google'} />
                    </button>
                </div>
            </div>
        )
    }
}

export default OAuth