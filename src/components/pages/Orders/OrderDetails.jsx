import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const OrderDetails = () => {
    return (
        <div className='-4'>
           <div className="mx-4">
               <p className="text-left my-4 text-white text-xl font-semibold">Order Details</p>
               <div className="">
                   <p  style={{ backgroundColor:"#375272" }} className='flex items-center gap-4 my-3 rounded text-white p-4 '><BsTelephone/> <span>0987654321</span> </p>
                   <p  style={{ backgroundColor:"#375272" }} className='flex items-center gap-4 my-3  rounded text-white p-4 '><GoLocation/> <span>USA, Oklahoma, Springdale</span> </p>
                   <p  style={{ backgroundColor:"#375272" }} className='flex items-center gap-4 my-3  rounded text-white p-4 '><GoLocation/> <span>Auto detection of geolocation</span> </p>
                   <br /><br /><br />  
               </div>
           </div>
        </div>
    );
};

export default OrderDetails;