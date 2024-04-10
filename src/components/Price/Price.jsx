import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price, isLarge }) => (
    <div className="relative">
        <div></div>
      <span className='spanPrice'></span>  <p className='priceBrand' style={{fontWeight:"600" , fontSize:"17px"}}>{price} &euro;</p>
    </div>
);

export default Price;

Price.propTypes = {
    price: PropTypes.string,
    isLarge: PropTypes.bool,
};

Price.defaultProps = {
    price: '0.0',
    isLarge: false,
};
