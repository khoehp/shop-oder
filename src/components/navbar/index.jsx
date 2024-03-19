import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaBox, FaHome, FaProductHunt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [inputSearch, setInputSearch] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleSearch = () => {
    navigate(`/explore?q=${inputSearch}`);
  };

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="flex items-center justify-between h-[70px] py-2 px-5 shadow-md">
      <div>
        <Link to="/">
          <img
            src="https://incucdep.com/wp-content/uploads/2014/12/logo-thoi-trang.jpg"
            className="w-[80px] h-[50px]"
          />
        </Link>
      </div>
      <div className="gap-5 hidden md:flex">
        <div className="flex gap-2  items-center">
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            className="px-2 border-gray-300 outline-none focus:border-blue-500 border-2 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 w-[25px] h-[25px] rounded-full flex justify-center items-center"
          >
            <FaSearch color="white" />
          </button>
        </div>
        <div className="py-2 px-5 hover:bg-slate-100 rounded-md">
          <Link to="/">Home</Link>
        </div>
        <div className="py-2 px-5 hover:bg-slate-100 rounded-md">
          <Link to="/explore">Explore</Link>
        </div>
        <div className="relative py-2 px-5 hover:bg-slate-100 rounded-md flex justify-center items-center">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <span className="absolute top-0 right-1 animate-bounce bg-green-500 w-[20px] h-[20px] font-bold flex justify-center items-center rounded-full text-white">
            {cart.length}
          </span>
        </div>
      </div>
      <div className="block md:hidden">
        <button className="p-5" onClick={handleShow}>
          <FaBars />
        </button>
      </div>
      <div className={`${show ? 'fixed' : 'hidden'} top-[70px] w-full left-0 bg-white z-10 py-5 shadow-md`}>
        <div className="gap-5 flex flex-col">
          <div className="py-2 px-5 hover:bg-slate-100 rounded-md  flex items-center gap-2">
           <FaHome /> <Link to="/">Home</Link>
          </div>
          <div className="py-2 px-5 hover:bg-slate-100 rounded-md  flex items-center gap-2">
           <FaBox /> <Link to="/explore">Explore</Link>
          </div>
          <div className="relative py-2 px-5 hover:bg-slate-100 rounded-md flex items-center gap-2">
            <FaShoppingCart /> <Link to="/cart">Đơn hàng</Link>
            <span className="absolute top-0 left-7 animate-bounce bg-green-500 w-[20px] h-[20px] font-bold flex justify-center items-center rounded-full text-white">
              {cart.length}
            </span>
          </div>
          <div className="flex gap-2 justify-between items-center px-5">
            <input
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              className="w-[60%] px-2 border-gray-300 outline-none focus:border-blue-500 border-2 rounded-md"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 w-[25px] h-[25px] rounded-full flex justify-center items-center"
            >
              <FaSearch color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
