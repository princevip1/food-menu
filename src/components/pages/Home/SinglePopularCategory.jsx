import React from 'react';

const SinglePopularCategory = ({ popularItem }) => {
    const { title, img } = popularItem;
    const singleCategoryStyle = {
        backgroundColor: "#375272" 
    }
    return (
        <div style={singleCategoryStyle} className='rounded-lg py-3 px-5 '>
            <img className='ml-1 w-10 h-10' src={img} alt="" />
            <p className='text-white mt-2 font-bold '> {title}</p>
        </div>
    );
};

export default SinglePopularCategory;