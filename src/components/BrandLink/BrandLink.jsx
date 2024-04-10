import React from 'react';
import { Link } from 'react-router-dom';
import "./BrandLink.css"
const BrandLink = ({ classes }) => (
    <div style={{ textAlign: "center" }} className='brandLink'>
        <span style={{ cursor: "text", fontWeight: "bold", margin: 0 }}>Fabulous</span>
        <div className="flex1">
            <span style={{ cursor: "text", paddingRight: '3px', display: "block", marginTop: "-3px", fontSize: "10px" }}>BEAUTY</span>
            <div className='point'></div>
        </div>
        <hr style={{ marginTop: "20px", height: "0.1px", border: "0", backgroundColor: "#f0f0f0" }} />
    </div>
);


export default BrandLink;
