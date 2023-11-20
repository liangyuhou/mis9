import React, { useState } from 'react';

import StandardLayout from '../components/layout/StandardLayout';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const productList = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <StandardLayout>
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
                <div className="product-list">
                    <h2>Available Products</h2>
                    <ul>
                        {productList.map((product) => (
                            <li key={product.id}>
                                <div className="product-details">
                                    <span>{product.name}</span>
                                    <span>${product.price}</span>
                                </div>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart">
                    <h2>Your Cart</h2>
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id}>
                                <div className="product-details">
                                    <span>{product.name}</span>
                                    <span>${product.price}</span>
                                </div>
                                <button onClick={() => removeFromCart(product.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${getTotalPrice()}</p>
                </div>
            </div>
        </StandardLayout>
    );
}

export default ShoppingCart;
