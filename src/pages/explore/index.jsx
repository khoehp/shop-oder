import React, { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsOfCategory,
} from "../../api/products";
import CardProduct from "../../components/CardProduct";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function ExplorePage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [data, setData] = useState({
    total: 4,
    skip: 0,
    limit: 8,
    products: [],
  });
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("q");
  const dispatch = useDispatch()

  useEffect(() => {
    const initData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    initData();
  }, []);

  useEffect(() => {
    const initData = async () => {
      let result = null;
      if (selectedCategory !== "All") {
        console.log(selectedCategory);
        result = await getProductsOfCategory(selectedCategory);
      } else {
        const { limit, skip } = data;
        const param = [`q=${query || ""}`, `limit=${limit}`, `skip=${skip}`].join('&');
        result = await getProducts({ param });
      }
      setData(result);
    };
    initData();
  }, [selectedCategory, query, data.skip]);

  const classActive = (active) => {
    return active ? "px-2 py-1 bg-blue-500 text-white rounded-md" : "px-2 py-1";
  };

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success('Thêm giỏ hàng thành công!')
  }

  return (
    <div className="py-10 px-14">
      <h1 className="font-semibold">Categories</h1>
      <div className="flex flex-wrap mt-4">
        <button
          onClick={() => handleClickCategory("All")}
          className={classActive(selectedCategory === "All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClickCategory(category)}
            className={classActive(selectedCategory === category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-5 mt-10">
        {data.products.map((product) => (
          <CardProduct product={product} key={product.id} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex gap-2 flex-wrap">
          {
            Array.from({ length: Math.ceil(data.total / data.limit) }, (_, i) => (
              <li key={i} className={`w-[30px] h-[30px] flex justify-center items-center hover:bg-blue-500 hover:text-white ${Math.floor(data.skip/data.limit) === i ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
                <button className="w-full h-full" onClick={() => setData({ ...data, skip: i * data.limit })}>{i + 1}</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
