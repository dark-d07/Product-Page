import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log('API Response:', response.data);
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h1>Products:</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
