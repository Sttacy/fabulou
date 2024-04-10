import React from 'react';
import { Link } from 'react-router-dom';

import BrandLink from '../BrandLink';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import up from '../../assets/up.png';

import './Footer.css';

const Footer = () => (
    <footer className="">
        <div className="blockFooterInfo">
            <div className="first">
                <BrandLink/>
                <p>Elevate your makeup routine and express your unique style with our premium products. Shop now and unveil the beauty within you.</p>
                <div className="iconsApp">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="">
                        <FacebookIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="">
                        <TwitterIcon />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div className="second">
                <h4>Menu</h4>
                <ul>
                    <li><a onClick={() => window.location.href = '/'}>Home</a></li>
                    <li><a onClick={() => window.location.href = '/Search'}>Shop</a></li>
                    <li><a onClick={() => window.location.href = '/About'}>About us</a></li>
                </ul>
            </div>
            <div className="third">
                <h4>Information</h4>
                <ul>
                    <li><a href="">Refund policy</a></li>
                    <li><a href="">Terms of service</a></li>
                    <li><a href="">Shipping policy</a></li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter</p>
                <form action="">
                    <input type="email" placeholder='Your email address' />
                    <button type="submit" className="submit-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 arrow-icon"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                    </button>
                </form>
                <p style={{fontSize:"12.5px" , letterSpacing:"1px"}}>© 2024 Fabulous beauty, All Rights Reserved</p>
            </div>
        </div>
        <a className="up" href="#top"><img src={up} alt="" /></a>
    </footer>
);

export default Footer;
