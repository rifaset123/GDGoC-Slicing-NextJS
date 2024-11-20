import React from 'react';
import data from '../../../public/data.json';
import ProductDetail from './ProductDetail';

const ProductList: React.FC = () => {
  const { products } = data;
  const product = products.find((product) => product.id === 1);

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductList;