import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ text }) => <p style={{width:"90%"}}>{text}</p>;

export default Description;

Description.propTypes = {
    text: PropTypes.string.isRequired,
};
