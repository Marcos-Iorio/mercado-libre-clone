import Link from "next/link";

interface Product {
  [key: string]: any;
  title: string;
  price: string;
  condition: string;
  thumbnail: string;
  shipping: {
    free_shipping: string;
  };
}

const ProductList = ({
  prodId,
  title,
  price,
  condition,
  thumbnail,
  shipping,
}: Product) => {
  const options1 = { style: "currency", currency: "USD" };
  const numberFormat1 = new Intl.NumberFormat("en-US", options1);

  let formattedPrice;

  if (price.toString().includes(".")) {
    formattedPrice = price.toString().split("").slice(0, -3).join("");
    formattedPrice = numberFormat1.format(Number(formattedPrice));
  }

  /* const formattedPrice = numberFormat1.format(Number(data.price)).toString(); */

  return (
    <article key={prodId} className="border-b p-8 flex flex-row gap-5">
      <Link href={`/product/${prodId}`}>
        <div className="2xl:w-[160px] 2xl:h-[200px] 2xl:block 2xl:cursor-pointer lg:w-[160px] lg:h-[180px]">
          <img
            src={thumbnail}
            alt={title}
            className="object-contain block w-full h-full"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-3">
        <Link href={`/product/${prodId}`}>
          <h1 className="text-xl font-light font-['Proxima Nova Rg'] cursor-pointer">
            {title}
          </h1>
        </Link>
        <p className="text-2xl font-normal font-['Proxima Nova Rg']">
          {price.toString().includes(".")
            ? formattedPrice
            : `${numberFormat1.format(Number(price))}`}
        </p>
        {shipping.free_shipping && (
          <p className="w-fit p-1 rounded text-[14px] text-[#00a650] font-medium font-['Proxima Nova Rg']">
            Envío gratis
          </p>
        )}
      </div>
    </article>
  );
};

export default ProductList;
