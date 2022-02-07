import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { TiMessages } from 'react-icons/ti';
import { BsCart3 } from 'react-icons/bs';

const CategoryProduct = ({product}) => {
    const ratingValue = 4;
    const{name,id}=product;
    return (
        <div>
            <div className="w-full">
                <div className="bg-white rounded-lg overflow-hidden ">
                    <Link to={`/dishes/${id}`} >
                        <img src={product.galleries[0].url} alt="" className='w-full' />
                    </Link>
                    <div className=" text-center p-3">
                        <Link to={`/dishes/${id}`} >
                            <p className='font-semibold hover:text-primary' style={{ color: "#566265 " }}>{name}</p>
                        </Link>
                        <div className="flex justify-center ">
                            <ReactStars
                                count={5}
                                value={ratingValue}
                                size={20}
                                activeColor="#FB7500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-around mb-3">
                        <p className='flex items-center gap-1 text-gray-600'><TiMessages /><span>120</span> </p>
                        <p className='flex items-center gap-1 text-gray-600'><BsCart3 /><span>120</span> </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;