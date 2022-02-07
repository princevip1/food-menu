import React, { useState, useEffect } from "react";
import SinglePopularCategory from "./SinglePopularCategory";

const PopularCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories/pos")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-4 px-4">
      <p className="text-left text-white">Popular Categories</p>
      <div className="grid grid-cols-4 gap-3  mt-3">
        {categories.map((category) => (
          <SinglePopularCategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
