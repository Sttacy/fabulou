import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import './TopProducts.css';
import { Navigation } from 'swiper/modules';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
      .then(response => response.json())
      .then(data => {
        const selectedProducts = data.slice(1, 9);
        setProducts(selectedProducts);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='TopCards'>
        <h2 className='new'>NEW</h2>
        <p className='sloganP'>Highlight the perfection in you</p>
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
          rewind={true}
          modules={[Navigation]}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard 
                id={product.id}
                name={product.name}
                brand={product.brand}
                imgUrl={product.image_link}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      )}
    </>
  );
};

export default TopProducts;
