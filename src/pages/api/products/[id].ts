// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProductDetail } from "@/services";
import { ProductItem } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductItem>,
) {
  const q = req.query?.id ?? 0;
  try{
    const items = await getProductDetail({ id: Number(q) });
    res.status(200).json(items);
  } catch{
    res.status(200).json({
      name: "",
      categories: [],
      id: 0,
      image_url: "",
      price: 0,
      description: "",
      sold_number: 0,
      likes: 0,
    });
  }
}
