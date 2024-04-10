import React from 'react';
import PropTypes from 'prop-types';

import CartButton from '../CartButton';
import Price from '../Price';
import Image from './Image';
import Info from './Info';
import Description from './Description';
import Title from './Title';

const Product = ({ name, img, type, category, price, description }) => (
    <>
        <div className="ProductPage">
            <Image  name={name} img={img} />

            <div className='infoProductPage'>
                <Info name={name} type={type} category={category} />

                <div className="flexPage">
                    <Price price={price} isLarge />
                    <CartButton name={name} price={price} />
                </div>

                <Description text={description} />
            </div>
        </div>
    </>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Product;
