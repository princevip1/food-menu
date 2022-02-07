import React from 'react';
import Slider from "react-slick";
import bgImage from "../../../image/margarita-logo.png"
import BestDish from '../Home/BestDish';
const SimilerItems = () => {
    const items = [{
        key: 1,
        id:12,
        title: "Pepperoni Homemade Pizza",
        img: `${bgImage}`
    },

    {
        key: 2,
        id:123,
        title: "Pepperoni Homemade Pizza",
        img: `${bgImage}`
    }]
   
    return (
        <div>
            <p className='py-5 text-left'>Similar dishes</p>
            <div className="grid grid-cols-2 gap-4 my-4">
               
                {
                    items.map(item => <BestDish item={item} key={item.key} />)
                }
               
            </div>
        </div>
    );
};

export default SimilerItems;