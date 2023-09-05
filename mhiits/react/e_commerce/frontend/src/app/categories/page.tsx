import { getCategory, getCategoryProduct } from "@/libs/api";
import ProductCard from "@/components/Products/ProductCard";
import React from "react";

const ProductCategory = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const products = await getCategoryProduct(slug);
  const { name , description } = await getCategory(slug);

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl text-lime-600 py-3">{name}</h2>
      <h2 className="text-2xl text-lime-600 py-3">{description}</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 xl:gap-x-8">
         {products.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.name}
            slug={product.slug.current}
            imageSrc={product.images[0].url}
            imageAlt={product.name}
            price={product.price} 
          />
        ))}
      </div>
    </div>
  </div>
  );
};


export default ProductCategory;
