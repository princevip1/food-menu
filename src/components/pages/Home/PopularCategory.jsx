import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import SinglePopularCategory from "./SinglePopularCategory";
import categoryImage from "../../../image/drink_color_icon.png";
import { useEffect } from "react";

const PopularCategory = () => {
  const { categories, setCategories } = useState({});

  useEffect(() => {
    fetch("http://example.com/songs")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const popularItems = [
    { title: "Drinks", img: `${categoryImage}` },
    { title: "Barger", img: `${categoryImage}` },
    { title: "Sushi", img: `${categoryImage}` },
    { title: "Pizza", img: `${categoryImage}` },
  ];
  return (
    <div className="my-4 px-4">
      <p className="text-left text-white">Popular Categories</p>
      <div className="grid grid-cols-4 gap-3  mt-3">
        {categories.map((popularItem) => (
          <SinglePopularCategory
            popularItem={popularItem}
            key={popularItem.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
