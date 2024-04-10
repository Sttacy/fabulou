import React from 'react';
import Benefits from '../components/Benefits';
import "../components/MainBanner/MainBanner.css"
import MainBanner from '../components/MainBanner';
import TopProducts from '../components/TopProducts';
import UniqueSellingPoint from '../components/UniqueSellingPoint/UniqueSellingPoint';
import Add from '../components/advert/add';
import NewArrivals from '../components/NewArrivals';
import Sale from '../components/advert/sale';
import AboutUsMain from '../components/aboutUsMain/AboutUsMain.jsx';

const Home = () => {
    return (
        <> <MainBanner />   
           <TopProducts/>
           <Add/>
           <NewArrivals/> 
           <Sale/>
             <AboutUsMain/>
            <Benefits />
        </>
    );
};

export default Home;
