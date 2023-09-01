import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10.0 },
    { id: 2, name: 'Product B', price: 20.0 },
    { id: 3, name: 'Product C', price: 15.0 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <h1>Ecommerce Store</h1>
      <div className="product-list">
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={emptyCart}>Empty Cart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
