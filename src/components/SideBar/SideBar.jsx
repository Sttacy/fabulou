import React from 'react';
import { setFilter } from '../../state/actionCreators';
import { useSearchState } from '../../state/search-context';
import Dropdown from '../Dropdown';
import CategoriesBar from '../CategoriesBar';
import PriceRange from '../PriceRange';
import "./SideBar.css"
import  TopProductsSideBar from '../TopProductsSideBar/TopProductsSideBar.jsx';
import SideBarAdd from '../advert/sidebaradd';

const Sidebar = () => {
    const [, dispatch] = useSearchState();

    const handleOnChange = e => {
        const { name, value } = e.target;
        dispatch(setFilter(name, value));
    };

    const handleOnSelect = value => {
        dispatch(setFilter('productType', value));
    };

    return (
        <div className="sidebar">
            <PriceRange onChange={handleOnChange} />
            <div className="category-wrapper">
                <CategoriesBar onSelect={handleOnSelect} />
            </div>
            <TopProductsSideBar/>
            <SideBarAdd/>
        </div>
    );
};

export default Sidebar;
