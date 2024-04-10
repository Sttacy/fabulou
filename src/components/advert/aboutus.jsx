import React from 'react'
import add from "../../assets/slide2.png"
import "./aboutUs.css"
import lip from "../../assets/lip.png"
import foundation from "../../assets/foundation.png"


export default function AboutUs() {
    return (
        <>  <img style={{width:"100vw" , height:"85vh" , objectFit:"cover"  , position:"absolute"}} src={add} alt="" />
        <div className="aboutUsInfo">
            <span className='theProducts'>The products</span>
            <h2>What is fabulous ?</h2>
            <hr style={{width:"20%" , textAlign:"start" , margin:"0" , border:"1px solid #7dd8cf"}} />
            <p>At <span className='fabulous'>fabulous</span>, we're passionate about helping you discover the beauty within. As your go-to destination for all things cosmetics, we offer a wide selection of premium skincare, makeup, haircare, and fragrance products to help you look and feel your best every day.</p>
            <p>Whether you're a long-time customer or just discovering us for the first time, we invite you to join us on this journey. Together, let's create something truly fabulous.</p>
            <div className="flexAbout">
                <div className="left">
<img src={lip} alt="" />
<div className="infoLeft"><h5>Glossy makeup</h5>
<p>Enhance Your Features with Luminous Makeup</p></div>

                </div>
                <div className="right">
<img src={foundation} alt="" />
<div className="infoRight"><h5>Foundation Fix</h5>
<p>Build Your Beauty from the Base</p></div>

                </div>
            </div>
        </div>
        </>
      
      )
}
