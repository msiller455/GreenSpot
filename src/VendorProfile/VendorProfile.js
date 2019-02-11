import React, { Component } from 'react';



class VendorProfile extends Component {


    render () {
        return (
            <div className="show-container">
                <header><NavBar/></header>
                <div className="show-flex">
                    <SearchBar/>
                </div>
                    <Maps/>
                <footer><Footer/></footer>
            </div>
        )
    }
}

export default VendorProfile  