import ProductCart from '@/components/Products/ProductCard'
import ProductDetails from '@/components/Products/ProductDetails'
import React from 'react'

const ProductDetailsBySlug = () => {
  return (
    <div>
      <ProductDetails />
      {/* Recommended products */}
      <ProductCart productName={''} slug={''} imageSrc={''} imageAlt={''} price={''} />


    </div>
  )
}

export default ProductDetailsBySlug