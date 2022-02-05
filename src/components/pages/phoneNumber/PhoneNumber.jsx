import React from 'react';
import bgImage from "../../../image/bg.png"
import PhoneInput from './PhoneInput';

const PhoneNumber = () => {
    const backgroungImage={
        backgroundImage: `url(${bgImage})`,
        // backgroundAttachment: "fixed"
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        width:"100%",
        height: "845px",
        backgroundPosition: "center",
        // padding:"310px 0"
         
    }


    return (
        <div  className="flex justify-center  h-full w-full" style={backgroungImage}>
            <div className='mt-60'>
                <p className='text-2xl text-white font-bold my-4'>Enter Phone Number</p>
                <p className='text-md text-white mx-5'>Write your phone number and we will send a password recovery code.Forgot password</p>
                <PhoneInput/>
            </div>
        </div>
    );
};

export default PhoneNumber;