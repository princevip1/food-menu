import React from 'react';
import { FiPhone } from 'react-icons/fi';
import bgImage from "../../../image/registrationBg.png"

const Registration = () => {
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
        <div style={backgroungImage}>
            <h1>Registration</h1>
            <form action="">
            <label className="relative block">
                <span className="sr-only">Phone</span>
                <span className="absolute inset-y-0 left-10 -top-3 flex items-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300 text-white" viewBox="0 0 20 20"><FiPhone/></svg>
                </span>
                <input className="bg-white/40 px-12 py-3 mb-4   placeholder:text-white text-white  w-80  rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white "  placeholder="Phone" type="text" name="name" />
            </label>
            <label className="relative block">
                <span className="sr-only">Name</span>
                <span className="absolute inset-y-0 left-10 -top-3 flex items-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300 text-white" viewBox="0 0 20 20"><FiPhone/></svg>
                </span>
                <input className="bg-white/40 px-12 py-3 mb-4  placeholder:text-white text-white  w-80  rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white "  placeholder="Phone" type="text" name="phone" />
            </label>
            <label className="relative block">
                <span className="sr-only">Phone</span>
                <span className="absolute inset-y-0 left-10 -top-3 flex items-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300 text-white" viewBox="0 0 20 20"><FiPhone/></svg>
                </span>
                <input className="bg-white/40 px-12 py-3  mb-4 placeholder:text-white text-white  w-80  rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white "  placeholder="Phone" type="text" name="password" />
            </label>
            <label className="relative block">
                <span className="sr-only">Password</span>
                <span className="absolute inset-y-0 left-10 -top-3 flex items-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300 text-white" viewBox="0 0 20 20"><FiPhone/></svg>
                </span>
                <input className="bg-white/40 px-12 py-3 mb-4  placeholder:text-white text-white  w-80  rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white "  placeholder="Phone" type="text" name="Confirm password" />
            </label>
            <button className="rounded bg-gradient-to-t from-orange-600 to-orange-400 w-80 text-md py-3 text-white font-bold">Registration</button>
        
            </form>
        </div>
    );
};

export default Registration;