import React from 'react';

const EditPage = (props) => {

        return (
            <div>
                <h1>Vendor Edit Page</h1>
                <form className="forms" onSubmit={props.vendorUpdate}>
                    <input type="text" name="vendorName" placeholder="Vendor name"/>
                    <label>WHERE ARE YOU TONIGHT? <br/>
                        <input type="address" name="location" placeholder="Location"/>
                    </label><br/>
                    <input type="text" name="image" placeholder="image"/><br></br>
                    <input type="number" name="phone" placeholder="Phone #"/><br></br>
                    <input type="text" name="website" placeholder="Website"/><br></br>
                    <br/>
                    <input type="Submit"/>
                </form>
            </div>
        )
}


export default EditPage
