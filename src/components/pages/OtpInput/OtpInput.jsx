import React, { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import bgImage from "../../../image/otp_bg.png"
import { BiMessage } from "react-icons/bi";

const OtpInput = () => {
    const [OTP, setOTP] = useState("");

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
        <div className='flex justify-center items-center' style={backgroungImage}>
            <div>
            <span className='text-white text-6xl flex justify-center'><BiMessage/></span>
            <h1 className='text-white text-2xl font-bold my-3'> SMS password</h1>
            <p  className='text-white text-lg my-3'>Insert a four-digit code from SMS.</p>
            <OTPInput inputClassName="bg-white/30 my-5 p-8 text-white text-3xl rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white" className=" ml-4" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  />
            <button className="rounded bg-gradient-to-t from-orange-600 to-orange-400 w-80 text-md py-3 my-5 text-white font-bold">Apply</button>
            </div>
        </div>
    );
};

export default OtpInput;