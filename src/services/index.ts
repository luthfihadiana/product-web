import { ProductItem } from "@/types"

type GetProductsReq = {
  q: string,
  sort: string,
}

type GetProductDetail = {
  id: number,
}

type GetProductsRes = ProductItem[]

type GetProductDetailRes = ProductItem;

export const getProducts = async ({q,sort}:GetProductsReq):Promise<GetProductsRes> => {
  const url = new URL('https://my-json-server.typicode.com/luthfihadiana/product-web/products');
  if (!!q.length) {
    url.searchParams.append('name', q);
  }
  if(!!sort.length){
    url.searchParams.append('_sort', sort);
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getProductDetail = async ({id}:GetProductDetail):Promise<GetProductDetailRes> => {
  const response = await fetch(`https://my-json-server.typicode.com/luthfihadiana/product-web/products/${id}`);
  const data = await response.json();
  return data;
}