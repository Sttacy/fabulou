import React from 'react';

const PriceRange = ({ onChange }) => {
    let currentTimeout;

    const onChangeHandler = e => {
        clearTimeout(currentTimeout);

        currentTimeout = setTimeout(() => {
            onChange(e);
        }, 1500);
    };

    return (
        <div className='priceRange'>
            <h4 className='selectPrice'>select price</h4>
            <div>
                <div>
                    <input
                        name="minPrice"
                        id="min"
                        type="text"
                        placeholder="min"
                        className='inputPrice'
                        onChange={onChangeHandler}
                    />
                </div>
                <hr />
                <div>
                    <input
                        name="maxPrice"
                        id="max"
                        type="text"
                        placeholder="max"
                        className='inputPrice'
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
