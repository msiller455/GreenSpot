import React, { Component } from 'react';
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Splash = () => 
    <div className="splash-container">
        <div className="fullsize-header">
            <h1 className="splash-header"><div className="green">Green</div> Spot</h1>
            <div className="fullsize-header-flex">
                <button className="splash-header-btn">Who's Out Tonight?</button>
                <Link className="vender-header-login-link" to='/login'>Vender Login</Link>
            </div>
        </div>
        <div id="slider">
            <figure>
                <img className="splash-img" src="https://s3-media2.fl.yelpcdn.com/bphoto/VC08EJZwfzU-vlhXcuS_4g/o.jpg" height="240rem"></img>
                <img className="splash-img" src="https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2018/06/Vegan-Seafood-Company-to-Launch-Shrimp-Made-From-Algae-in-Restaurants-Across-U.S..jpg" height="240rem"></img>
                <img className="splash-img" src="https://res-3.cloudinary.com/dostuff-media/image/upload//w_1200,q_75,c_limit,f_auto/v1510706893/page-image-10601-9229a425-3c3f-482b-bfb7-6c644755cc47.jpg" height="240rem"></img>
                <img className="splash-img" src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F11%2F16064132%2Fthevegandoubledown-RECIPEonhotforfoodblog.jpeg" height="240rem"></img>
                <img className="splash-img" src="https://images1.laweekly.com/imager/u/745xauto/8700336/nacho-boat-cena-vegan-credit-cena-vegan.jpeg" height="240rem"></img>
            </figure>
        </div>
        <Button/><br></br>
        <Link className="vender-login-link" to='/login'>Log in</Link>
    </div>

export default Splash 