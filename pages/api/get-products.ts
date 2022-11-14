// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../types";

import axios from "axios";

type QueryResult = {
  data: {
    results: Product[];
  };
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
};

const getItems = async (
  id: string | string[],
  page: string | string[] | undefined
) => {
  if (id === undefined || page === undefined) {
    return;
  }
  const DEFAULT_OFFSET = 50;

  const newOffset = Number(page) * DEFAULT_OFFSET;

  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${id}&offset=${newOffset}`
  );

  return response.data;
};

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<QueryResult>
) {
  if (req.query.q === undefined) {
    return;
  }

  const { q, page } = req.query;
  if (req.method == "GET") {
    const response = getItems(q, page).then((data: any) =>
      res.status(200).json(data)
    );
  }
}
