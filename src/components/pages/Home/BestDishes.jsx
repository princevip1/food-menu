import React from 'react';
import BestDish from './BestDish';
import dishImage from '../../../image/anthony-duran-QbOvrpDU1KA-unsplash.png'

const BestDishes = () => {
    const items = [{
            title: "Pepperoni Homemade Pizza",
            img:`${dishImage}`
        },
        
        {
            title: "Pepperoni Homemade Pizza",
            img:`${dishImage}`
        }]
    return (
        <div className='my-4 px-4' >
            <p className='text-left  text-white'>Best dishes</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
                {
                     items.map(item => <BestDish item={item} />)
                }
            </div>
        </div>
    );
};

export default BestDishes;