import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import './TopProducts.css';
import { Navigation } from 'swiper/modules';
import useGetTopProducts from '../../hooks/useGetTopProducts';

const TopProducts = () => {
  const { products, loading } = useGetTopProducts('maybelline'); // Fetch top products with the specified brand

  if (loading) {
    return <Loader />;
  }

  return (
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
  );
};

export default TopProducts;
