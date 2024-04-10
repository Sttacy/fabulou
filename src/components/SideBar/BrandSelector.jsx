import React from 'react';
import { BRANDS } from '../../utils/brands';
import { setFilter } from '../../state/actionCreators';
import { useSearchState } from '../../state/search-context';

import Dropdown from '../Dropdown';

const BrandSelector = () => {
    const [, dispatch] = useSearchState();

    const handleOnChange = e => {
        const { name, value } = e.target;
        dispatch(setFilter(name, value));
    };

    return (
        <div className='brandSelector' style={{margin:"3% 0 4% 0"}}>
            <Dropdown type="brand" values={['all', ...BRANDS]} onChange={handleOnChange} />
        </div>
    );
};

export default BrandSelector;
