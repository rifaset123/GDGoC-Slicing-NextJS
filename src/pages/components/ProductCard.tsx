interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="p-2 rounded-lg hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full sm:w-full h-60 sm:h-40 object-cover" loading="lazy" />
      <div className="mx-4 my-4">
        <h2 className="text-lg font-semibold mt-2 mb-2">{product.name}</h2>
        <p className="text-gray-500 mb-5">English Department</p>
        <div className="container flex gap-4">
          <p className="text-gray-500 font-bold line-through">${product.price}</p>
          <p className="text-green-600 font-bold">${(product.price * 0.1).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
    