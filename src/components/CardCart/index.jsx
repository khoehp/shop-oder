import React from "react";

export default function CardCart({ title, description, price, thumbnail}) {
  return (
    <div className="bg-slate-100 hover:shadow-md p-2 rounded-md mt-5">
      <img src={thumbnail} className="w-full md:w-[200px] h-[200px]" />
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <span className="text-yellow-500 text-lg font-bold">$ {price}</span>
      </div>
    </div>
  );
}
