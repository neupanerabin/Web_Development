import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const addProduct = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  const searchProducts = () => {
    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    return searchResults;
  };

  return (
    <div className="App">
      <h1>Ecommerce Store</h1>
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={e => setProductPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={e => setProductDescription(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div>
        <h2>Search Products</h2>
        <input
          type="text"
          placeholder="Search Keyword"
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
        />
        <ul>
          {searchProducts().map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
