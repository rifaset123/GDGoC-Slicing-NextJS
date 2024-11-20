import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import data from "../../../public/data.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    image: string;
    altImage?: string;
    price: number;
    description: string;
    favorite: boolean;
    cart: boolean;
  };
}

const defaultProduct = {
  id: 0,
  name: "",
  image: "",
  altImage: "",
  price: 0,
  description: "",
  favorite: false,
  cart: false,
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product = defaultProduct }) => {
  const [isClicked, setIsClicked] = useState(product.favorite);
  const [activeImage, setActiveImage] = useState(0);

  const handleSwipe = (index: React.SetStateAction<number>) => {
    setActiveImage(index);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    updateFavoriteStatus(product.id, !isClicked);
  };

  const handleCartClick = () => {
    console.log("Cart button clicked");
    // logic
  };

  const handleEyeClick = () => {
    console.log("Eye button clicked");
    // logic
  };

  const updateFavoriteStatus = (id: number, status: boolean) => {
    const updatedData = data.products.map((prod) =>
      prod.id === id ? { ...prod, favorite: status } : prod
    );

    // save json (tapi karena statis gbisa read write api)
    fetch("/public/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: updatedData }),
    });
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="p-10 sm:p-4 rounded sm:flex justify-center ">
      <div className="sm:w-[506px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src={product.image}
              alt={product.name}
              className="object-fill mr-4 "
              loading="lazy"
              style={{ width: "100%" }}
              onMouseEnter={() => handleSwipe(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={product.altImage}
              alt={product.name}
              className="object-fill mr-4 w-[500px] h-[400px] sm:h-[500px] sm:mb-0 mb-10"
              loading="lazy"
              onMouseEnter={() => handleSwipe(0)}
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-[200px] h-[75px] mt-1 sm:mt-6 flex gap-4 opacity-70 ">
          <img
            src={product.altImage}
            alt={`Alternative view of ${product.name}`}
            className={`object-fill w-1/2 h-full ${
              activeImage === 0 ? "opacity-100" : "opacity-70"
            } hover:opacity-100`}
            loading="lazy"
            onMouseEnter={() => handleSwipe(0)}
          />
          <img
            src={product.image}
            alt={`Alternative view of ${product.name}`}
            className={`object-fill w-1/2 h-full ${
              activeImage === 1 ? "opacity-100" : "opacity-70"
            } hover:opacity-100`}
            loading="lazy"
            onMouseEnter={() => handleSwipe(1)}
          />
        </div>
      </div>
      <div className="ms-5 mt-16 sm:mt-0 sm:ms-14">
        <h2 className="text-2xl font-bold mt-2 mb-4">{product.name}</h2>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="gold" size={22} />
          ))}
        </div>
        <p className="text-black text-3xl mt-4 mb-4 font-bold">
          {formattedPrice}
        </p>
        <p className="font-bold text-[#737373]">
          Availability : <span className="text-[#23A6F0]">In Stock</span>
        </p>
        <p className="mt-4 text-[#858585] max-w-xl break-words">
          {product.description}
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
        <div className="flex gap-3">
          <button
            type="button"
            className="border rounded-full px-3 py-3 bg-[#23A6F0] size-10 hover:bg-[#23a5f06f] focus:ring-4 focus:ring-blue-300 text-sm me-2 dark:bg-[#23A6F0] dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-200"
          ></button>
          <button
            type="button"
            className="border rounded-full px-3 py-3 bg-[#2DC071] size-10 hover:bg-[#2dc0726e]"
          ></button>
          <button
            type="button"
            className="border rounded-full px-3 py-3 bg-[#E77C40] size-10 hover:bg-[#e77d408e]"
          ></button>
          <button
            type="button"
            className="border rounded-full px-3 py-3 bg-black size-10 hover:bg-[#00000061]"
          ></button>
        </div>
        <div className="flex gap-2 mt-20">
          <button
            type="button"
            className="text-white font-bold bg-[#23A6F0] hover:bg-[#31abf2] focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-3 me-2 dark:bg-[#23A6F0] dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-200"
          >
            Select Option
          </button>
          <button
            type="button"
            className={`border rounded-full px-3 py-3 ${
              isClicked ? "bg-slate-400" : "hover:bg-slate-200"
            }`}
            onClick={handleClick}
          >
            {isClicked ? <IoMdHeart size={24} /> : <CiHeart size={24} />}
          </button>
          <button
            type="button"
            onClick={handleCartClick}
            className="border rounded-full px-3 py-3 hover:bg-slate-200"
          >
            <CiShoppingCart size={24} />
          </button>
          <button
            type="button"
            onClick={handleEyeClick}
            className="border rounded-full px-3 py-3 hover:bg-slate-200"
          >
            <FaEye size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
