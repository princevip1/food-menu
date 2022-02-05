import React from 'react';
import { FiPhone } from 'react-icons/fi';

const PhoneInput = () => {
    
    return (
        <div >
            <label className="relative block">
                <span className="sr-only">Phone</span>
                <span className="absolute inset-y-0 left-10 top-1 flex items-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300 text-white" viewBox="0 0 20 20"><FiPhone/></svg>
                </span>
                <input className="bg-white/40 px-12 py-3 my-8  placeholder:text-white text-white  w-80  rounded  focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 focus:text-white "  placeholder="Phone" type="text" name="phone" />
            </label>
            <button className="rounded bg-gradient-to-t from-orange-600 to-orange-400 w-80 text-md py-3 text-white font-bold">Send</button>
        </div>
    );
};

export default PhoneInput;