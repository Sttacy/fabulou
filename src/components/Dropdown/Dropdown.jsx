import React, { useState } from 'react';

const Dropdown = ({ type, values, onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedValue(selectedOption);
        onChange(e);
    };

    return (
        <div>
         <select className='selector'
                name={type}
                id={type}
                value={selectedValue}
                onChange={handleSelectChange}
                style={{ fontSize: '15px' }}
            >
                <option value="" disabled hidden>Select Brand</option>
                {values.map((value, index) => (
                    <option key={`${index}-${value}`} value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
