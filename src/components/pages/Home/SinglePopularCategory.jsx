import React from 'react';
import { useHistory } from 'react-router-dom';

const SinglePopularCategory = ({ category }) => {
    const history = useHistory();
    const { name, preview_url,id } = category;


    const handleCategories = (id) => {
        history.push(`/categoryProducts/${id}`)


       
    }



    const singleCategoryStyle = {
        backgroundColor: "#375272" 
    }
    return (
        <div onClick={() => handleCategories(id)} style={singleCategoryStyle} className='rounded-lg py-3 px-5 '>
            <img className=' w-10 h-10' src={preview_url} alt="" />
            <p className='text-white mt-2 font-bold '> {name}</p>
        </div>
    );
};

export default SinglePopularCategory;