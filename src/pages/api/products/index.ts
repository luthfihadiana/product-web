// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProducts } from "@/services";
import { ProductItem } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductItem[]>,
) {
  const q = req.query?.q ?? "";
  const sort = req.query?.sort ?? "";
  try{
    const items = await getProducts({ q: q as string, sort: sort as string });
    res.status(200).json(items);
  } catch{
    res.status(200).json([]);
  }
}
