import React from 'react';
import ButtonLink from '../ButtonLink';
import bg from '../../assets/Untitled-1.png';

import 'swiper/css';
import 'swiper/css/pagination';
import './MainBanner.css';

export default function MainBanner() {
  return (
    <div>
            <div className='MainBanner' id='app'>
              <img className='image' style={{width:"98.9vw" , height:"75vh" , }} src={bg} alt="" />
              <div className='logoTitle'>
              <h3>
              Everyone is beautiful, we just make it clear!
              </h3>
              <p>
              Their Beauty products are created to help bring out the true beauty inside you. Cosmetics slogan for cosmetics Their beauty products are created to help true beauty inside you
              </p>
              <div className='flexLogo'>
              <ButtonLink path="/about" text="see more" isMain />
              <span className='logoSpan'>Fabulous Beauty </span>
              </div>
              </div>
            </div>
            </div>
  );
}
