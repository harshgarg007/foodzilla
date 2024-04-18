import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex p-2 gap-2 shadow-lg rounded-lg mt-2 mb-2  ">
      <MdDeleteForever
    //     onClick={() => dispatch(removeFromCart({ id }))}
    //    toast(`${name} Removed!`)
    onClick={() => {
        dispatch(removeFromCart({ id, img, name, price, qty }));
        toast(`${name} Removed!`, {
          icon: "👋",
        });
      }}
        className="absolute right-7 cursor-pointer text-xl text-zinc-800"
      />
      <img src={img} alt="foodimg" className="w-[70px] h-[50px] " />
      <div className="">
        <h2 className="font-bold text-zinc-800">{name}</h2>
        <div className="flex">
          <span className="text-green-600">₹{price}</span>
          <div className="flex justify-between  items-center gap-2 absolute right-7">
            <AiOutlineMinus
            onClick={() => {
                qty > 1 && dispatch(decrementQty({ id }));
                if(qty > 1) {
                  toast(`${name} Removed!`,{
                      icon: "😟",
                  })
                }
            }}
            className="border-2 border-zinc-700 text-zinc-900 hover:bg-red-600 hover:border-none hover:text-white rounded-md p-1 text-xl transition-all ease-linear cursor-pointer " />
            <span className="">{qty}</span>
            <AiOutlinePlus
            onClick={() => {
                dispatch(incrementQty({ id }));
                toast(`${name} Added!`,{
                    icon: "😍",
                })
            }}
            className="border-2 border-zinc-700 text-zinc-900 hover:bg-green-600 hover:border-none hover:text-white rounded-md p-1 text-xl transition-all ease-linear cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
