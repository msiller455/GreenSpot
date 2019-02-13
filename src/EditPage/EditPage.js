import React, { Component } from 'react';

const EditPage = (props) => {

        return (
            <div>
                <h1>Edit Page</h1>
                <form className="forms">
                    <input type="text" name="vendorName" placeholder="Vendor name"/>
                    <input type="address" name="location" placeholder="Location"/>
                    <input type="text" name="image" placeholder="image"/><br></br>
                    <input type="text" name="website" placeholder="Website"/><br></br>
                    <input type="text" name="email" placeholder="Email"/><br></br>
                    <button onClick={this.handleLogin}>Edit Profile</button>
                </form>
            </div>
        )
}


export default EditPage