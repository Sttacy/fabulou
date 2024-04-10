// CheckoutPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const totalPrice = location.state?.totalPrice || 0;

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default CheckoutPage;
