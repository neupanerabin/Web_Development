import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Product } from "@/models/product";

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type=="category"]
    {
        _id,
        name,
        slug {current},
        image,
        description
    }`;
  const categories: Category[] = await sanityClient.fetch({ query });
  return categories;
};
export const getCategory = async (slug: string): Promise<Category> => {
    const query = `*[_type == "category" && slug.current == "${slug}"][0]`;
  
    const category: Category = await sanityClient.fetch({ query });
  
    return category;
  };
  export const getCategoryProduct = async (slug: string): Promise<Product[]> => {
    const query = `*[_type == "product" && category->slug.current == "${slug}"] {
      name,
      price,
      images,
      isFeatured,
      isTrending,
      slug,
      quantity,
      description,
      category->{
        name,
        subtitle
      }
    }`;
  
    const products: Product[] = await sanityClient.fetch({ query });
  
    return products;
  };
export const getProducts = async (): Promise<Product[]> => {
  const query = `*[_type=="product"]
    {
        _id,
        name,
        slug {current},
        images,
        isFeatured,
        isPopular,
        isRecomended,
        'category':*[_id == ^.category.ref][0]{
            name,
            slug {
                current
            },
        },
        descriptions,
    }`;
  const products: Product[] = await sanityClient.fetch({ query });
  return products;
};
export const getProduct = async (slug: string): Promise<Product> => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        name,
        price,
        images,
        isFeatured,
        isTrending,
        'category': *[_id == ^.category._ref][0] {
          name,
          slug {
            current
          }
        },
        slug,
        quantity,
        description
  }`;

  const product: Product = await sanityClient.fetch({ query });

  return product;
};