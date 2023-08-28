import ProductCart from '@/components/Products/ProductCard'
import ProductDetails from '@/components/Products/ProductDetails'
import React from 'react'

const ProductDetailsBySlug = () => {
  return (
    <div>
      <ProductDetails />
      {/* Recommended products */}
      <ProductCart />

    </div>
  )
}

export default ProductDetailsBySlug