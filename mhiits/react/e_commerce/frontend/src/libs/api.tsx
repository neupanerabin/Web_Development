import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Product } from "@/models/product";

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type=="category"];
    {
        _id,
        name,
        slug{current},
        image,
        desciption
    }`;

  const categories: Category[] = await sanityClient.fetch({ query });
  return categories;
};

export const getCategory = async (slug: string): Promise<Category> => {
  const query = `*[_type == "category" && slug.current == "${slug}"][0]`;

  const category: Category = await sanityClient.fetch({ query });

  return category;
};

export const getProducts = async (): Promise<Product[]> => {
  const query = `*[_type=="category"]
    {
            _id,
            name,
            slug {current},
            image,
            isFeatured,
            isPopular,
            isRecommended,
            'category': *[_id == ^.category.ref],[0]{
                name,
                slug {
                  current
                },
            },
            desciption
        }`;

  const products: Product[] = await sanityClient.fetch({ query });
  return products;
};
