import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiOrange } from 'react-icons/gi';
import { IoHomeOutline,IoCompassOutline } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";
import { BiUser } from "react-icons/bi";


const Navigation = () => {
    const navStyle = {
        position:"fixed",
        bottom: 0,
        textAlign:"center",
        backgroundColor:"#375272"
    }
    return (
        <div className='w-full p-2' style={navStyle}>
            <nav className="flex justify-around space-x-6 px-5">
            <div>
               <div style={{ backgroundColor:"#375272" }} className='absolute bottom-5 left-6 p-3 shadow-xl shadow-black-500 rounded-full'>
               <p className='text-white text-xl border-2 rounded-full p-1 '> <Link to="/home" ><GiOrange/></Link></p>
               </div>
            </div>
            <div className="flex justify-between space-x-12 py-2">
                <p className='text-white text-3xl font-bold'> <NavLink to="/home" activeStyle={{ color: '#FB7500' }}><IoHomeOutline/></NavLink></p>
                <p className='text-white  text-3xl font-bold'><NavLink to="/hello" activeStyle={{ color: '#FB7500' }}><IoCompassOutline/></NavLink></p>
                <span class="relative inline-block">
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">1</span>
                <p className='text-white text-3xl font-bold'> <NavLink to="/orders" activeStyle={{ color: '#FB7500' }}><FaConciergeBell/></NavLink></p>
                </span>
                <p className='text-white text-3xl font-bold'><NavLink to="/hello3" activeStyle={{ color: '#FB7500' }}><BiUser/></NavLink></p>
            </div>
        </nav>
        </div>
    );
};

export default Navigation;