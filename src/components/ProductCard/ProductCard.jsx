import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price';
import "./ProductCard.css"

const ProductCard = ({ id, name, brand, imgUrl, price }) => {
    const isAvailable = parseFloat(price) !== 0;

    return (
        <Link style={{ textDecoration: "none" }} className={`productCard ${isAvailable ? 'available' : 'unavailable'}`} to={`/product/${id}`}>
            <div className="div"> <div className='eachCard'>
                <img width="120" src={imgUrl} alt={name} className="mx-auto" />
            </div>
            <div className='brandCard' style={{ color: "black" }}>
                <p className='productName'>{name.replace(/^(.{12}[^\s]*).*/, '$1')}</p>
                <p style={{fontSize:' 11px'}} className='brandp'>{brand}</p>
                <Price price={price} />
            </div></div>
           
        </Link>
    );
};

export default ProductCard;
