import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';
import SearchBox from '../../shared/SearchBox/SearchBox';
import dishImage from '../../../image/margarita-logo.png'
import { useState } from 'react';
import { TiMessages } from 'react-icons/ti';
import { BsCart3 } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";
import { FaConciergeBell } from 'react-icons/fa';
import { MdTimer } from "react-icons/md";
import SimilerItems from './SimilerItems';

const SingleItem = () => {
    const { item, setItem } = useState({});
    let { dishId } = useParams();
    const ratingValue = 4;
    const items = [{
        key: 1,
        id: 12,
        title: "Pepperoni Homemade Pizza",
        img: `${dishImage}`
    },

    {
        key: 2,
        id: 123,
        title: "Pepperoni Homemade Pizza",
        img: `${dishImage}`
    }];

    items.map(i => {
        if (parseInt(dishId) === i.id) {
            // setItem(i);
        }
    })
    return (

        <div>
            <SearchBox />
            <div className="flex justify-center">
                <div className="single-item w-11/12 text-center bg-white p-5 rounded">
                    <img src={dishImage} alt="" />
                    <h1 className='text-2xl'>Wavos rencheros</h1>
                    <p>This is a classic homemade salsa made from tomatoes, chili, fresh and smoked. What makes it different from others? Lots of chili. This is a thick, burning hot salsa, cooked in a hot way - heat treated. We choose ripe fleshy tomatoes, chili of different varieties and spiciness for ranchers, and smoked chili for piquancy and smoky aroma (in my photo, black and wrinkled chipotle morita).</p>
                    <div className="flex justify-around my-4 ">
                        <p className='flex items-center gap-1 text-gray-600'><TiMessages /><span>120</span> </p>
                        <p className='flex items-center gap-1 text-gray-600'><BsCart3 /><span>120</span> </p>
                        <p className='flex items-center gap-1 text-gray-600'><MdTimer/><span>10min</span> </p>
                        <ReactStars count={5} value={ratingValue} size={20} activeColor="#FB7500" />
                    </div>
                    <div className="flex justify-around my-4 ">
                        <p className='text-green-600 font-bold text-2xl'>$5.20</p>
                        <button className='flex items-center gap-2 text-orange-500 outline outline-1 rounded px-4 py-2 '><span>Add to order</span><FaConciergeBell/></button>
                    </div>
                </div>
            </div>
            
            <SimilerItems/>

            <Navigation />
        </div>
    );
};

export default SingleItem;