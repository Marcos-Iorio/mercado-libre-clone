import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import Images from "../../components/Images/Images";
import Button from "../../components/Button/Button";
import Attributes from "../../components/Attributes/Attributes";

import { Product, Seller, ProductAttr } from "../../types";

import { TbArrowBack } from "react-icons/tb";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { SlTrophy } from "react-icons/sl";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiMedalLine } from "react-icons/ri";

import {
  getItemData,
  getSellerData,
  getProductAttr,
} from "../../services/services";
import Thermometer from "../../components/Thermometer/Thermometer";

const ProductPage: NextPage = () => {
  const router = useRouter();

  const { productId } = router.query;

  const [units, setUnits] = useState<number>(1);

  //Retrieves data
  const { data: productData } = useQuery<Product>(
    ["productData", { id: productId }],
    getItemData
  );

  const sellerId = productData?.seller_id;
  const attrId = productData?.catalog_product_id;

  const { data: sellerData } = useQuery<Seller>(
    ["sellerData", { id: sellerId }],
    getSellerData,
    {
      enabled: !!sellerId,
    }
  );

  const { data: attributes } = useQuery<ProductAttr>(
    ["productAttr", { id: attrId }],
    getProductAttr,
    {
      enabled: !!attrId,
    }
  );

  const formattedCondition =
    productData?.condition === "new" ? "Nuevo" : "Usado";

  const options1 = { style: "currency", currency: "USD" };
  const numberFormat1 = new Intl.NumberFormat("en-US", options1);

  return (
    <Fragment>
      <main className="rounded bg-white my-20 shadow-sm">
        <section className=" flex flex-row gap-1 h-auto">
          <div className="basis-5/6">
            <div className="flex flex-row gap-5">
              <div className="basis-2/12 sticky">
                <Images
                  pictures={productData?.pictures}
                  title={productData?.title}
                />
              </div>
              <div className="basis-[47%] py-10 px-5 relative w-full h-full box-border">
                <div className="flex gap-2 flex-col">
                  <div className="flex flex-col">
                    <p className="text-[14px] h-5 font-[400] whitespace-pre-wrap antialiased leading-tight font-['Proxima Nova Rg'] text-black/[.55]">
                      {formattedCondition} | {productData?.sold_quantity}{" "}
                      vendidos
                    </p>
                  </div>
                  <h1 className="font-bold font-['Proxima Nova Rg'] text-[22px] leading-7 font-medium w-full">
                    {productData?.title}
                  </h1>
                  <p className="text-4xl font-light font-['Proxima Nova Rg'] flex flex-col my-5">
                    {numberFormat1.format(Number(productData?.price))}
                    <span className="text-sm mt-2 font-normal text-[#3483FA]">
                      Ver medios de pago.
                    </span>
                  </p>
                  <div>
                    {attributes?.main_features !== undefined ? (
                      attributes?.main_features !== null ? (
                        <Attributes attributes={attributes?.main_features} />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div
                  id="enlarged-image"
                  className=" absolute top-5 left-0 object-contain aspect-square z-40 w-fit box-border max-w-[500px] flex justify-center"
                ></div>
              </div>
            </div>
            {productData?.catalog_product_id != null ? (
              <Fragment>
                <div className="block m-auto w-[90%] h-[0.5px] bg-gray-200"></div>
                <div className="h-full px-12 py-12">
                  <h5 className="text-2xl font-normal font-['Proxima Nova Rg']">
                    Descripción
                  </h5>
                  <p className="font-['Proxima Nova Rg'] text-xl font-normal text-[#666] whitespace-pre-line py-6">
                    {attributes?.short_description.content.replace(
                      /<[^>]*>/g,
                      ""
                    )}
                  </p>
                </div>
              </Fragment>
            ) : (
              ""
            )}
          </div>
          <div className="basis-1/3 p-5 flex flex-col gap-6">
            <div className="rounded-md border-solid border border-gray-200 p-[15px] flex flex-col gap-5">
              {productData?.shipping.free_shipping && (
                <p className="w-fit p-1 rounded text-[14px] text-[#00a650] font-medium font-['Proxima Nova Rg']">
                  Envío gratis
                </p>
              )}
              <div className="flex gap-2 items-center">
                <p className="text-black/90 text-sm">Vendido por:</p>
                <span>
                  <a
                    href={sellerData?.permalink}
                    target="_blank"
                    className="text-[11px] text-[#3483FA] font-[400]"
                  >
                    {sellerData?.nickname}
                  </a>
                </span>
              </div>
              <div>
                {sellerData?.seller_reputation.transactions.completed !=
                undefined ? (
                  sellerData?.seller_reputation?.transactions.completed >
                  10000 ? (
                    <p className="text-sm">
                      Mercado Lider{" "}
                      <span className="relative ml-5 before:block before:h-3 before:border-[1px] before:border-l-[#e6e6e6] before:border-solid before:absolute before:top-[5px] before:left-[-25%]">
                        {sellerData?.seller_reputation?.transactions.completed}
                      </span>{" "}
                    </p>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div>
                {productData?.available_quantity != undefined ? (
                  productData?.available_quantity > 1 ? (
                    <h2 className="font-medium">Stock disponible</h2>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="flex gap-2 items-center">
                <p>Cantidad:</p>
                <span className="font-medium">{units} unidad</span>
                <span className="text-sm text-gray-400">
                  ({productData?.available_quantity} disponibles)
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  text="Comprar ahora"
                  color="white"
                  bgColor="#3483FA"
                  hoverBgColor="#2D74DE"
                />
                <Button
                  text="Agregar al carrito"
                  color="#3483FA"
                  bgColor="rgba(65, 137, 230, 0.15)"
                  hoverBgColor="rgba(65, 137, 230, 0.2)"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <TbArrowBack className="w-[30px] h-auto text-black/50" />
                  <p className="text-sm text-gray-400">
                    <span className="text-[#3483FA]">Devolución gratis.</span>{" "}
                    Tenés 30 días desde que lo recibís.
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <HiOutlineShieldCheck
                    className="w-[40px] h-auto text-black/50"
                    aria-hidden
                  />
                  <p className="text-sm text-gray-400">
                    <span className="text-[#3483FA]">Compra protegida.</span>{" "}
                    recibí el producto que esperabas o te devolvemos tu dinero.
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <SlTrophy className="w-[18px] h-auto text-black/50" />
                  <p className="text-sm text-gray-400">
                    <span className="text-[#3483FA]">Mercado Puntos.</span>{" "}
                    Sumás{" "}
                    {productData != undefined &&
                      Math.max(Math.round(productData?.price / 100))}{" "}
                    puntos.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md border-solid border border-gray-200 p-[15px] flex flex-col gap-5">
              <h4 className="text-md">Información sobre el vendedor.</h4>
              <div className="flex flex-row items-start">
                <HiOutlineMapPin className="w-[20px] h-auto mr-2" aria-hidden />
                <div className="flex flex-col">
                  Ubicación
                  <span className="text-sm text-gray-400 font-light">
                    {sellerData?.address.city}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start w-full">
                <RiMedalLine className="w-[20px] h-auto mr-2 text-green-600" />
                <div className="flex flex-col w-full text-green-600 font-medium">
                  MercadoLíder{" "}
                  {sellerData?.seller_reputation.power_seller_status != null
                    ? sellerData?.seller_reputation.power_seller_status !=
                      "platinum"
                      ? ""
                      : sellerData?.seller_reputation?.power_seller_status[0].toUpperCase() +
                        sellerData?.seller_reputation?.power_seller_status.substring(
                          1
                        )
                    : ""}
                  <span className="text-sm text-gray-400 font-light">
                    ¡Es uno de los mejores del sitio!
                  </span>
                </div>
              </div>
              {sellerData?.seller_reputation !== undefined && (
                <Thermometer
                  seller_reputation={sellerData?.seller_reputation}
                />
              )}
              <span>
                <a
                  href={sellerData?.permalink}
                  className="text-[#3483FA] text-sm font-normal"
                  target="_blank"
                >
                  Ver más datos de este vendedor.
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ProductPage;
