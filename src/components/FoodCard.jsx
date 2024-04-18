import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, img, name, rating, desc, price, handleToast }) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({id, name, img, price, rating, qty: 1}));
    handleToast(name);
  };

  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg hover:shadow-lg gap-2 ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 transition-all ease-in-out duration-500 cursor-grab "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-600">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 80)}...</p>
      <div className="flex justify-between">
        <span className="flex items-center ">
          <AiFillStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button onClick={addToCartHandler} className="p-1 text-white bg-green-500 hover:bg-green-600 text-sm rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
