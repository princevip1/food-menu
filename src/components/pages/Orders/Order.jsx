import React from "react";
import { ImCross } from "react-icons/im";

const Order = ({ order }) => {
  const { name, id, preview_url } = order;
  console.log(order);
  return (
    <div className="mb-4">
      <div style={{ backgroundColor:"#375272" }} className="flex items-center justify-between mx-4 p-5 rounded">
        <img className="h-14 w-14 rounded" src={preview_url} alt="" />
        <p className="text-white font-semibold text-xl">{name}</p>
        <p className="text-white text-lg font-semibold">$10</p>
        <p className="text-white"><ImCross/></p>
      </div>
    </div>
  );
};

export default Order;
