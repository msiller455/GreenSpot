import React from 'react';

const EditPage = (props) => {

        return (
            <div>
                <h1>Vendor Edit Page</h1>
                <form className="forms" onSubmit={props.vendorUpdate}>
                    Vendor Name: <input type="text" name="vendorName"/><br/>
                    Tonight's location: <input type="text" name="location"/><br/>
                    Phone Number: <input type="text" name="phone"/><br/>
                    Website: <input type="text" name="website"/><br/>
                    Profile Picture: <input type="text" name="profilePic"/><br/>
                    Food images (At least 1 preferably): <input type="text" name="image"/><br/>
                    <br/>
                    <input type="Submit"/>
                </form>
            </div>
        )
}


export default EditPage
