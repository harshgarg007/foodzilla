import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQtys = cartItems.reduce((totalQty,item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((totalPr, item) => totalPr + item.price * item.qty, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-2 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-zinc-700">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-zinc-600 text-xl rounded-md hover:text-red-500 hover:border-red-500 hover:scale-90 duration-300 cursor-pointer "
          />
        </div>

          {cartItems.length > 0 ?
            cartItems.map((food,i) => {
              return <ItemCard key={i} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
            }) : <Empty/>
          }
        
        

        <div className="absolute bottom-0 p-3">
          <h3 className="font-semibold text-zinc-700">Items : {totalQtys} </h3>
          <h3 className="font-semibold text-zinc-700">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] border border-zinc-200 lg:w-[18vw] mb-2" />
          <button
          onClick={() => navigate("/success")}
          className="bg-green-500 py-2 px-3 text-white rounded-md w-[90vw] lg:w-[18vw] ">
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        className={`bg-white p-3 text-5xl rounded-lg shadow-md fixed bottom-10 right-3 lg:right-3 ${totalQtys > 0 && 'animate-bounce delay-500 transition-all'}  `}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
