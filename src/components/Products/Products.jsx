import React from 'react';
import { useSearchState } from '../../state/search-context';
import ProductCard from '../ProductCard';
import BrandSelector from '../SideBar/BrandSelector';

const Products = () => {
    const [{ products }] = useSearchState();

    return (
        <div className="product-grid">
            {products.length === 0 ? (
                <div>
                    <h4>Sorry, no products</h4>
                    <p>Please try changing your filters</p>
                </div>
            ) : (
                <>
                    {products.map(product => (
                        <div className='shop' key={product.id}>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                brand={product.brand}
                                imgUrl={product.api_featured_image}
                                price={product.price}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Products;
