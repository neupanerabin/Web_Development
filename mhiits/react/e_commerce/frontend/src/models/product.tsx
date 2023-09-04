export interface Product{
    _id:string;
    name:string;
    slug: { current: string };
    isFeatured:boolean;
    isPopular: boolean;
    isRecommended: boolean;
    price:number;
    images: Array<{
        _key:string;
        url:string;
    }>;
    categories: {name:string, slug: {current: string} };
    quantity: number;
    description: string;

}