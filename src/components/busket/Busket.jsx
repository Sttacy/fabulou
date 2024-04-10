import React from 'react';
import { useCart } from '../../state/Cartprovider';
import './busket.css';

const Basket = () => {
    const { cartItems, clearCart, removeFromCart, addToCart, setCartItems, setCartCount, cartCount } = useCart();
    const handleAddQuantity = index => {
        const updatedCartItems = cartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
    const handleRemoveQuantity = index => {
        const itemToRemove = cartItems[index];
        if (itemToRemove.quantity === 1) {
            removeFromCart(itemToRemove.name);
            setCartCount(cartCount - 1);
        } else {
            const updatedCartItems = cartItems.map((item, i) => {
                if (i === index) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setCartItems(updatedCartItems);
        }
    };

    const handleRemoveItem = productName => {
        const removedItem = cartItems.find(item => item.name === productName);
        if (removedItem) {
            removeFromCart(productName);
            setCartCount(cartCount - 1);
        }
    };

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
        return totalPrice.toFixed(2);
    };

    const resetBasket = () => {
        clearCart();
    };

    return (
        <div className="basket-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <>
                    <div className="items">
                        {cartItems.map((item, index) => (
<div key={index} className="item">
<div className="item-info">
<p className='itemName'>{item.name}</p>
<div className='spanPrice'><p className='itemPrice'>${item.price} </p></div>

</div>
 <div className="item-actions">
<button style={{marginTop:"-3%"}} className="quantity-button" onClick={() => handleRemoveQuantity(index)}>
                                        -
</button>
<span className="item-quantity">{item.quantity}</span>
<button className="quantity-button" onClick={() => handleAddQuantity(index)}>
                                        +
 </button> </div>
<button className="remove-button" onClick={() => handleRemoveItem(item.name)}>
                                        Remove
</button>

  </div>
                        ))}
 </div>
 <div className="total"><p className="total-price"><span style={{fontWeight:"500" , fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Subtotal:</span>  ${calculateTotalPrice()}</p>
                    <button className="clear-button" onClick={resetBasket}>
                        Clear Basket
                    </button></div>

                </>
            )}
        </div>
    );
};

export default Basket;
