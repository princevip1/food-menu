import React from 'react';
import ReactStars from "react-rating-stars-component";
import { TiMessages } from 'react-icons/ti';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const BestDish = ({ item }) => {
    const { title, img } = item;
    // let { dishId } = useParams();
    const ratingValue = 4


    return (
        <div>
            {/* <Link to="./bestDish/:id"> */}
            <div className="w-full">
                <div className="bg-white rounded-lg overflow-hidden ">
                    <Link to={`/dishes/${item.id}`} >
                        <img src={img} alt="" className='w-full' />
                    </Link>
                    <div className=" text-center p-3">
                        <Link to={`/dishes/${item.id}`} >
                            <p className='font-semibold hover:text-primary' style={{ color: "#566265 " }}>{title}</p>
                        </Link>
                        <div className="flex justify-center ">
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
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
            {/* </Link> */}
        </div>
    );
};

export default BestDish;