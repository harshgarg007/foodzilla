import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center p-4 mb-10 shadow-lg ">
      <div className="flex items-center justify-between  ">
       <div className="lg:w-[90%] flex flex-col lg:mr-[400px]">
       <h3 className="text-xl font-bold text-zinc-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Foodzilla Food's</h1>
       </div>
       
     
      
      </div>

   

      <div className="mt-3 lg:mt-0">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-zinc-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] "
        />
       
      </div>
    </nav>
  );
};

export default Navbar;
