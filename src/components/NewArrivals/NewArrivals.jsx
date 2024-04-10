import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import './NewArrivals.css';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => response.json())
      .then(data => {
        const selectedProducts = data.slice(0, 9);
        setProducts(selectedProducts);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  };

  const chunkedProducts = chunkArray(products, 3);

  return (
    <div style={{ marginTop: '100px' }} className="new-arrivals">
      <h2 className="new">BESTSELERS</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-columns">
          {chunkedProducts.map((column, index) => (
            <div key={index} className="product-column">
              {column.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  imgUrl={product.image_link}
                  price={product.price}
                />
              ))}
            </div>
          ))}
          <button className="SeeMore" onClick={() => window.location.href = '/search'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>
            <div className="text">Go to shop</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
