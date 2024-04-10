import React from 'react'
import './aboutUsMAin.css'
import about from '../../assets/about.jpg'
import ButtonLink from '../ButtonLink'

export default function AboutUsMain() {
  return (
    <div className='Usmain'>
    <div className="infoMainAbout">
        <span className="aboutTitle">About us</span>
        <h2>Clean, Cruelty-Free, Dermatologist-Tested</h2>
        <p>Welcome to Fabulous, your premier destination for high-quality cosmetics and beauty products online! At Fabulous, we're dedicated to helping you look and feel your best every day.</p>
        <p>Our journey began with a passion for beauty and a vision to create a one-stop shop for all your cosmetic needs. From skincare essentials to makeup must-haves, we curate a wide range of products from top brands to cater to every skin type and style preference. What sets us apart is our commitment to quality, authenticity, and customer satisfaction. We carefully select each product to ensure it meets our rigorous standards, so you can shop with confidence knowing you're getting the best of the best.</p>
        <ul className="aboutList">
            <div className="divAbout"><div className="leftLi"><li>Elevate Your Beauty Routine</li>
            <li>Unleash Your Inner Glow</li>
            <li>Embrace Your Natural Beauty</li></div>
            <div className="rightLi"> <li>Radiate Confidence Every Day</li>
            <li>Express Yourself Through Beauty</li>
            <li>Beauty Beyond Boundaries</li></div>
           </div>
            
        </ul>
        <ButtonLink path="/about" text="Explore more" className='exploreMore' isMain={true} />
    </div>
    <img src={about} alt="About Us" className="aboutImage" />
</div>
  )
}
