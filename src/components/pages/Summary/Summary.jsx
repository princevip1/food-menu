import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import { MdTimer } from "react-icons/md";
import { AiOutlineWallet } from "react-icons/ai";

const Summary = () => {
    return (
        <div>
            <h1 className='text-white my-5 text-xl font-semibold'>Your Order Summary</h1>
            <div style={{ backgroundColor:"#375272" }} className=" mx-4 p-5 rounded">
                <span className="flex items-center justify-between my-3">
                    <p className='flex items-center gap-1 text-white'><MdTimer/><span>10min</span> </p>
                    <p className='flex items-center gap-5 text-white text-lg font-semibold'><AiOutlineWallet/>$40</p>
                </span>
                <div className="flex justify-between items-center text-white my-5">
                    <p>Your Order Satus </p>
                    <p>Pending</p>
                </div>
               </div>
            <Navigation/>
        </div>
    );
};

export default Summary;