import React, { useEffect, useState } from "react";
import { getProductById } from "../../api/products";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  const [imageBanner, setImageBanner] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Thêm giỏ hàng thành công!')
  };
  const { id, title, description, thumbnail, brand, price, images, rating } =
    product;
  useEffect(() => {
    const initData = async () => {
      const result = await getProductById(productId);
      setProduct(result);
    };

    initData();
  }, [productId]);
  console.log(product);

  const handleChangeImage = (image) => {
    setImageBanner(image);
  };

  return (
    <div className="h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="flex gap-5 flex-col md:flex-row justify-center ">
        <div>
          <img
            src={imageBanner || thumbnail}
            className="w-[400px] h-[350px] object-contain"
          />
          <Swiper
            style={{
              border: "1px solid gray",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            slidesPerView={2}
            className="mySwiper md:w-[400px] "
          >
            {images?.map((image, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => handleChangeImage(image)}
                >
                  <img
                    src={image}
                    className="w-[70px] h-[70px] object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-[350px] md:w-[500px] p-3">
          <span className="text-sm text-slate-500">{brand}</span>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-600" />
            {rating}
          </span>
          <span className="text-xl text-yellow-600 font-semibold">
            $ {price}
          </span>
          <p className="text-xs mt-5">{description}</p>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-black text-white px-4 py-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-black text-white px-2 py-1">
              <FaHeart width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
