import React from 'react';

import useGetRecommendedProducts from '../../hooks/useGetRecommendedProducts';
import Loader from '../Loader/Loader';

import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';

const RecommendedProducts = ({ product }) => {
    const products = useGetRecommendedProducts(product);

    return (
        <>
            <h3 className="sectionTitle">For you</h3>
            {products.length === 0 ? (
                <Loader />
            ) : (
                <div className="Recomendedproducts flex flex-wrap justify-center">
                    {products.map(item => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            brand={item.brand}
                            imgUrl={item.api_featured_image}
                            price={item.price}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default RecommendedProducts;
