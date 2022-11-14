import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useState, Fragment, useCallback } from "react";

import ProductList from "../components/ProductList/ProductList";
import Paginate from "../components/Paginate/Paginate";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../services/services";

const Home: NextPage = () => {
  const router = useRouter();

  const { search, page } = router.query;

  const pageNumber = !isNaN(Number(page)) ? Number(page) : 1;

  const [currentPage, setCurrentPage] = useState<number>(pageNumber);
  const [pageCount, setPageCount] = useState<number>(1);

  const { data, isLoading } = useQuery(
    ["products", { search: search, page: currentPage }],
    getProducts,
    {
      keepPreviousData: true,
      onSuccess: (data) => pagesQuantityHandler(data),
    }
  );

  let pagesQuantity = 0;

  const pagesQuantityHandler = (data: any) => {
    pagesQuantity = Math.max(
      Math.ceil(data?.paging?.total / data?.paging?.limit),
      1
    );
    setPageCount(pagesQuantity);
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    if (router.query.search === "" || router.query.search === undefined) {
      router.push("/");
    } else {
      router.push(
        {
          pathname: "/",
          query: { search: router.query.search, page: selected + 1 },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  };

  const handlePageChange = ({
    isNext,
    isPrevious,
  }: {
    isNext: boolean;
    isPrevious: boolean;
  }) => {
    if (isNext && pageNumber < Number(pagesQuantity)) {
      setPageCount((prev) => prev - 1);
    } else {
      return;
    }
    if (isPrevious && pageNumber > 1) {
      setPageCount((prev) => prev + 1);
    } else {
      return;
    }
  };

  if (!isLoading) {
    if (data?.results?.length > 0) {
      return (
        <Fragment>
          <Head>
            <title>Clon de Mercado Libre</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <section className="rounded bg-white my-20 flex flex-col gap-1">
            {data?.results?.map(
              ({ id, title, price, condition, thumbnail, shipping }: any) => (
                <ProductList
                  key={id}
                  prodId={id}
                  title={title}
                  price={price}
                  thumbnail={thumbnail}
                  condition={condition}
                  shipping={shipping}
                />
              )
            )}
          </section>
          <Paginate
            pageCount={pageCount}
            initialPage={pageNumber - 1}
            onChange={handlePageClick}
            onClick={handlePageChange}
          />
        </Fragment>
      );
    } else {
      return (
        <p className="text-2xl text-bold w-full h-full flex justify-center items-center py-20">
          Buscá un producto
        </p>
      );
    }
  } else {
    return (
      <p className="text-2xl text-bold w-full h-full flex justify-center items-center py-20">
        Cargando...
      </p>
    );
  }
};

export default Home;
