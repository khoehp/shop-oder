import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct({ product, onAddToCart }) {
  const { id, title, thumbnail, description, price, discountPercentage } =
    product;

    return (
    <div className=" border-2 border-gray-100 transition-all duration-150 bg-white hover:shadow-md rounded-md p-4 flex flex-col h-[350px] justify-between">
      <div className=" relative">
        <Link to={`/product/${id}`}>
          <button className="absolute -right-3 -top-3 bg-red-500 px-2 py-1 rounded-md text-xs text-white animate-bounce">
            Giảm {discountPercentage}%
          </button>
          <div className="h-[150px] overflow-hidden">
            <img src={thumbnail} className="w-full h-full object-contain" />
          </div>
          <h2 className="font-semibold mt-4">{title}</h2>
          <p className="text-xs mt-2 line-clamp-3">{description}</p>
        </Link>
      </div>
      <div className="flex justify-between">
        <button className="bg-black px-3 py-1 text-sm text-white rounded-md" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <span className="font-bold">$ {price}</span>
      </div>
    </div>
  );
}
