import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useState, Fragment } from "react";

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

  const { data, isLoading, isSuccess, isFetching } = useQuery(
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

  if (!isFetching) {
    if (data?.paging?.total > 0) {
      return (
        <Fragment>
          <Head>
            <title>Clon de Mercado Libre</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              name="description"
              content="Clon de mercado libre, página de inicio, buscá productos"
            />
            <meta
              name="keywords"
              content="Mercado libre, clone, search, list, products, desing"
            />
            <meta name="robots" content="all" />
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
        <p className="2xl:text-2xl 2xl:text-bold 2xl:w-full 2xl:h-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:py-20 lg:text-2xl lg:text-bold lg:w-full lg:h-full lg:flex lg:justify-center lg:py-20">
          No sé encontró productos.
        </p>
      );
    }
  } else {
    return (
      <p className="2xl:text-2xl 2xl:text-bold 2xl:w-full 2xl:h-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:py-20 lg:text-2xl lg:text-bold lg:w-full lg:h-full lg:flex lg:justify-center lg:py-20">
        Cargando...
      </p>
    );
  }
};

export default Home;
