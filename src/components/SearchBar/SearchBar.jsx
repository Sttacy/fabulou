import React, { useState } from 'react';
import { useSearchState } from '../../state/search-context';
import { setFilter } from '../../state/actionCreators';
import { useSearch } from '../../hooks';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [, dispatch] = useSearchState();
    const { isLoading } = useSearch(); 

    const handleSearch = () => {
        dispatch(setFilter('productTags', searchTerm));
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default SearchBar;
