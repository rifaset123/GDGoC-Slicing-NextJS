import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const BestsellerProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
  <div id="about" className="flex flex-col justify-center items-center mt-20 mb-20">
    <div className="container flex sm:justify-start sm:w-[1050px] sm:h-[32px] justify-center">
      <h1 className="text-3xl font-bold sm:mb-8">BESTSELLER PRODUCTS</h1>
    </div>
    <div className="container flex justify-center w-[1050px] h-[50px] ">
      <hr className="h-px w-[360] sm:w-[1050px] justify-start my-8 bg-gray-200 border-0 dark:bg-gray"></hr>
    </div>  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
};

export default BestsellerProducts;
