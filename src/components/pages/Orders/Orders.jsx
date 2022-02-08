import React, { useEffect, useState } from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import SearchBox from '../../shared/SearchBox/SearchBox';
import Order from './Order';
import { MdTimer } from "react-icons/md";
import { AiOutlineWallet } from "react-icons/ai";
import OrderDetails from './OrderDetails';
import OrderConfirmModal from './OrderConfirmModal/OrderConfirmModal';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false)

    const handleConfirmOrder=()=>{
        setShowModal(true)
    }

    useEffect(() => {
      fetch("/categories/pos")
        .then((response) => response.json())
        .then((data) => setOrders(data.categories))
        .catch((err) => console.error(err));
    }, []);


    
    return (
        <div>
            <SearchBox/>
            {
               orders.map(order =>  <Order order={order} key={order.key} />)
            }
           <div className="price-chcekout">
               <div style={{ backgroundColor:"#375272" }} className=" mx-4 p-5 rounded">
                <span className="flex items-center justify-between my-3">
                    <p className='flex items-center gap-1 text-white'><MdTimer/><span>10min</span> </p>
                    <p className='flex items-center gap-5 text-white text-lg font-semibold pr-16'><AiOutlineWallet/>$40</p>
                </span>
                <button onClick={handleConfirmOrder} className="my-5 rounded bg-gradient-to-t from-orange-600 to-orange-400 w-80 text-md py-3 text-white font-bold">Checkout</button>
               </div>
           </div>
           <OrderDetails/>
           {showModal &&  <OrderConfirmModal setShowModal={setShowModal}/> }
            <Navigation/>
        </div>
    );
};

export default Orders;