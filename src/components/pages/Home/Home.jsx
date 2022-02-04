import React from 'react';
import SearchBox from '../../shared/SearchBox/SearchBox';
import BestDishes from './BestDishes';
import PopularCategory from './PopularCategory';

const Home = () => {
    return (
        <div>
            <SearchBox/>
            <PopularCategory />
            <BestDishes/>
        </div>
    );
};

export default Home;