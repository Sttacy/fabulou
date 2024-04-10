import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(() => {
        const storedCount = localStorage.getItem('cartCount');
        const storedItems = localStorage.getItem('cartItems');
        if (!storedItems || JSON.parse(storedItems).length === 0) {
            return 0;
        }
        return storedCount ? parseInt(storedCount) : 0;
    });
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem('cartItems');
        console.log('Stored items:', storedItems);
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount.toString());
    }, [cartCount]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = product => {
        const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
        }

        setCartCount(prevCount => prevCount + 1);
    };

    const removeFromCart = productName => {
        const removedItem = cartItems.find(item => item.name === productName);
        if (removedItem) {
            const updatedCartItems = cartItems.filter(item => item.name !== productName);
            setCartItems(updatedCartItems);
            const updatedCount = cartCount - removedItem.quantity; 
            setCartCount(updatedCount);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            localStorage.setItem('cartCount', JSON.stringify(updatedCount)); 
        }
    };

    const clearCart = () => {
        setCartItems([]);
        setCartCount(0);
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartCount');
    };

    return (
        <CartContext.Provider
            value={{ cartCount, cartItems, addToCart, clearCart, removeFromCart, setCartItems, setCartCount }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
