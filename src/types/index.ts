export enum ProductCategory {
  Electronics = "Electronics", 
  Clothing = "Clothing", 
  HomeAppliances = "Home Appliances", 
  Books="Books", 
  Sports= "Sports", 
  Toys= "Toys", 
  Groceries="Groceries", 
  Automotive="Automotive", 
  HealthBeauty="Health & Beauty",
  Furniture="Furniture"
}

export type ProductItem = {
  id: number,
  name: string,
  categories: ProductCategory[],
  image_url: string,
  price: number,
  description: string,
  sold_number: number,
  likes: number,
}

export type SortOptionValue = "price" | "likes" | "sold_number"