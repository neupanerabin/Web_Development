
import { getCategory } from '@/libs/api';
import React from 'react'

const ProductCategory = async (props: { params: { slug: string } }) => {
  const {
    params: {slug}
     }=props;
     

     const {name} = await getCategory(slug);

  return (
    <div>
          <h2>{name}</h2>
    </div>
  )
}

export default ProductCategory