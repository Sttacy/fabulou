import React from 'react';
import BrandLink from '../BrandLink';
import CartIcon from '../Icons/CartIcon';
import Auth from '../Icons/Auth';
import './NavLogo.css';
import { useCart } from '../../state/Cartprovider';

const NavLogo = () => {
      const { cartCount } = useCart();
      return <div><BrandLink  />
      <div className="flexStyle"><Auth/><CartIcon /><span className='amount'>{cartCount}</span></div>
      </div>
      
  
}
export default NavLogo;
