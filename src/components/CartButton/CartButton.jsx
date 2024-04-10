import React from 'react';
import { useCart } from '../../state/Cartprovider';

const CartButton = ({ name, price }) => {
    const { addToCart } = useCart();

    const handleClick = () => {
        addToCart({ name, price });
        alert('product added to basket')
            };

    return (
        <button onClick={handleClick} className="buttonToBasket">
            Add to Cart
        </button>
    );
};

export default CartButton;
