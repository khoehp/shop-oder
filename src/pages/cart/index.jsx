import React, { useMemo } from "react";
import CardCart from "../../components/CardCart";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart } from "../../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, cur) => (sum += cur.price), 0);
  }, [cart]);
  const navigate = useNavigate()

  const handleCheckOut = () => {
    dispatch(checkOutCart())
    toast.success('Thanh toán thành công!')
    navigate('/')
  }
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 mt-20">
      <div className="w-full md:w-[500px]">
        {cart.map((product) => (
          <CardCart key={product.id} {...product} />
        ))}
      </div>
      <div className="w-full md:w-[550px]">
        <h2 className="text-[25px]  md:text-[50px] uppercase text-slate-300 hover:text-slate-500">
          Total Items: {cart.length}
        </h2>
        <h2 className="text-[30px]  md:text-[60px] uppercase text-slate-500">
          Total PRICE: ${totalPrice}
        </h2>
        <button onClick={handleCheckOut} className="bg-black text-white w-full p-2 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
}
