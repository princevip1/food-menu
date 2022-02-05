import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import SearchBox from '../../shared/SearchBox/SearchBox';
import BestDishes from './BestDishes';
import PopularCategory from './PopularCategory';

const Home = () => {
    return (
        <div>
            <SearchBox/>
            <PopularCategory />
            <BestDishes/>
            <Navigation/>
        </div>
    );
};

export default Home;