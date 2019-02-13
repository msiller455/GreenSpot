import React, { Component } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import OAuth from '../OAuth/OAuth'

const Splash = (props) => 
    <div className="splash-container">
        <div className="fullsize-header">
            <h1 className="splash-header"><div className="green">Green</div> Spot</h1>
            <div className="fullsize-header-flex">
                <button className="splash-header-btn">Who's Out Tonight?</button>
                <Link className="vender-header-login-link" to='/login'>Log in</Link>
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
        <div className="full-nav">
            <NavBar startAuth={props.startAuth}/>
        </div>
        <h1 className="nav-main-header"><div className="green">Green</div> Spot</h1>        
        <div className="body-flex">
            <img className="full-screen-image" src="https://s3-media2.fl.yelpcdn.com/bphoto/VC08EJZwfzU-vlhXcuS_4g/o.jpg" height="240rem" />    
            <img className="full-screen-image" src="https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2018/06/Vegan-Seafood-Company-to-Launch-Shrimp-Made-From-Algae-in-Restaurants-Across-U.S..jpg" height="240rem" width="400rem" />
            <img className="full-screen-image" src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F11%2F16064132%2Fthevegandoubledown-RECIPEonhotforfoodblog.jpeg" height="240rem" width="400rem" />
        </div>
        <div className="full-screen-design">
        <h1>The vegan food cart scene</h1>
        <div className="full-screen-section">
        <img className="full-screen-image" src="https://www.welikela.com/wp-content/uploads/2016/03/vegan-street-fair-2015.jpg" height="240rem" width="400rem" />
        <h3 className="full-screen-para">Our food system has a huge impact on the environment, which is why changing the way you eat is one way you can live more sustainably. One fifth of energy consumption in the U.S. is gobbled up by food production.
            As most TreeHuggers know, eating local and organic benefits the environment in myriad ways, but perhaps the greenest thing you can eat is your greens. That's because animal products are particularly energy-intensive and contribute heavily to greenhouse gasses. One study found the production of meat and diary contribute far more to greenhouse gasses in the U.S.</h3>
        </div>
        </div><br></br><br></br><br></br>
        <Button/><br></br>
        {!props.loggedIn ?
            <OAuth 
                socket={props.socket} 
                setUser={props.setUser} 
                closeCard={props.closeCard}
                checkPopup={props.checkPopup}
                openPopup={props.openPopup}
                startAuth={props.startAuth}
                closeCard={props.closeCard}
                /> : <button className="logout-btn" onClick={props.closeCard}>logout </button>
        }
        <div className="full-footer">
            <Footer/>
        </div>
    </div>

export default Splash 