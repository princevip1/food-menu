import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { TiMessages } from 'react-icons/ti';
import { BsCart3 } from 'react-icons/bs';

const BestDish = ({ item }) => {
    const { title, img } = item;
    const ratingValue = 4

    return (
        <div>
            <div className="w-full">
                <div className="bg-white rounded-lg overflow-hidden ">
                    <img src={img} alt="" className='w-full' />
                    <div className=" text-center">
                        <p className='font-semibold hover:text-primary' style={{ color: "#566265 " }}>
                            <a href="#"> {title}</a>
                        </p>

                        <div className="flex justify-center">
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            value={ratingValue}
                            size={20}
                            activeColor="#FB7500"
                        />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <p className='flex items-center gap-1 text-gray-600'><TiMessages/><span>120</span> </p>
                        <p className='flex items-center gap-1 text-gray-600'><BsCart3/><span>120</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDish;