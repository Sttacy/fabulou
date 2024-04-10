import React from 'react';
import Shop from '../components/advert/shop';
import Search from '../components/Search';
import BrandSelector from '../components/SideBar/BrandSelector';
import SearchProvider from '../state/search-context';

const SearchPage = () => {
    return (
        <>
            <SearchProvider>
                <Shop/>
                <BrandSelector/>
                <Search />
            </SearchProvider>
        </>
    );
};

export default SearchPage;
