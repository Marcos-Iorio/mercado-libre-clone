import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import axios from "axios";

export const getItemData = async (params: Params) => {
  const [, { id }] = params.queryKey;

  const data = await (
    await fetch(`https://api.mercadolibre.com/items/${id?.toString()}`)
  ).json();

  return data;
};

export const getSellerData = async (params: Params) => {
  const [, { id }] = params.queryKey;

  const data = await (
    await fetch(`https://api.mercadolibre.com/users/${id}`)
  ).json();

  return data;
};

export const getProductAttr = async (params: Params) => {
  const [, { id }] = params.queryKey;

  const data = await (
    await fetch(`https://api.mercadolibre.com/products/${id}`)
  ).json();

  return data;
};

export const getProducts = async (params: Params) => {
  const [, { search, page }] = params.queryKey;

  if (search !== undefined) {
    const response = await axios.get(
      `/api/get-products?q=${search}&page=${page}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.data;

    return data;
  } else {
    return "No hay datos";
  }

  /* setPageCount(pagesQuantity);

    setProducts(data.results);
    setIsLoading(false); */
};
