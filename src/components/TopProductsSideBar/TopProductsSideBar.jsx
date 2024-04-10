import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../Loader';
import "./TopSideBar.css"

const TopProductsSideBar = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon')
      .then(response => response.json())
      .then(data => {
        const selectedProducts = data.slice(0, 3);
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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='TopBarProducts'>
            <h3 className='popularSidebar'>Popular items</h3>
          {chunkedProducts.map((column, index) => (
            <div key={index}>
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
        </div>
      )}
    </div>
  );
};
export default TopProductsSideBar;
