import div from '@/components/Footer/Footer';
import ProductCard from '@/components/Products/ProductCard';
import ProductDetails from '@/components/Products/ProductDetails';
import React from 'react'

const ProductDetailsBySlug = () => {
  return (
    <div>
      <ProductDetails/>
      {/* {Recommended lists} */}
      <ProductCard productName={''} slug={''} imageSrc={''} imageAlt={''} price={0}/>
        
    </div>

  );
};

export default ProductDetailsBySlug