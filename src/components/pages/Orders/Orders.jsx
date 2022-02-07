import React, { useEffect, useState } from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import SearchBox from '../../shared/SearchBox/SearchBox';
import Order from './Order';

const Orders = () => {

    const [orders, setOrders] = useState([]);

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
               orders.map(order=>  <Order order={order} key={order.key} />)
            }
            <h1>Orders</h1>
            <Navigation/>
        </div>
    );
};

export default Orders;