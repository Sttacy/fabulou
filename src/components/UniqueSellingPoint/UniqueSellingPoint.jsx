import React from 'react';
import "./Unique.css"
import img1 from "../../assets/pic2.webp"
import eye from "../../assets/eye.png"
import foundation from "../../assets/foundation.png"
import lip from "../../assets/lip.png"
import makeup from "../../assets/makeup.png"


const UniqueSellingPoint = () => (
    <section className="about_us">
    <div className="container2">   
        <div className="infoAboutUs">
          <span>the products</span>
          <span>Welcome to our exclusive makeup collection</span>
          <hr />
          <p>Whether you're looking for everyday essentials or glamorous must-haves, we've got you covered.Elevate your makeup routine and express your unique style with our premium products.Shop now and discover the beauty within you.Explore the latest trends and find your perfect look.Our carefully curated selection includes:</p>
          <div className='infoCardColumn'>
            <div className="cardInfo">
              <img src={lip} alt="" />
              <p>Luxurious lipsticks in vibrant shades</p>
            </div>
            <div className="cardInfo">
              <img src={foundation} alt="" />
              <p>High-quality foundations for flawless skin</p>
            </div>
            <div className="cardInfo">
              <img src={eye} alt="" />
              <p>Stunning eyeshadow palettes for captivating eyes</p>
            </div>
            <div className="cardInfo">
              <img src={makeup} alt="" />
              <p>Radiant highlighters and bronzers for a luminous glow</p>
            </div>
          </div>
      </div>  
  <img src={img1} alt="" />
    </div>   
   <button className="AboutUsbtn" onClick={() => window.location.href = '/About'}>About us</button>
  </section>
);

export default UniqueSellingPoint;
