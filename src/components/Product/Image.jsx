import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ name, img }) => (
    <div className="">
        <img style={{borderStyle:"none" , width:"300px"}} src={img} alt={name} />
    </div>
);

export default Image;

Image.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
