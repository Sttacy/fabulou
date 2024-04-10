import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ category, name, type }) => (
    <>
        <h1>{name}</h1>
        <p>{category}</p>
    </>
);

export default Info;

Info.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
