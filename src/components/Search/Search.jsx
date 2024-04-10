import React from 'react';

import useSearch from '../../hooks/useSearch';

import Loader from '../Loader';
import Products from '../Products';
import SideBar from '../SideBar';

const Search = () => {
    const { isLoading } = useSearch();

    return (
        <div className="search">
            <div className="results">{isLoading ? <Loader /> : <Products />}</div>
            <div className="sidebar">
                <SideBar />
            </div>
        </div>
    );
};

export default Search;
