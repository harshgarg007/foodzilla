import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const [categories, setCategories] = useState([]);
  // console.log(categories);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    // ... new Set = ek new array banegi jisme category aayega only new se Set(4) AAYEGA console me
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex gap-3 my-5 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 font-bold rounded-md bg-gray-200 hover:bg-green-600 hover:text-white duration-300 ${selectedCategory === "All" && "bg-green-600 text-white"} `}
        >
          All
        </button>

        {categories.map((category, i) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={i}
              className={`px-3 py-2 font-bold rounded-md bg-gray-200 hover:bg-green-600 hover:text-white duration-300 ${selectedCategory === category && "bg-green-600 text-white"} `}
            >
              {" "}
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
