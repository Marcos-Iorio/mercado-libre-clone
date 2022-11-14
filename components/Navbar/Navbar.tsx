import promo from "./promo.webp";
import Image from "next/image";
import { BsCart2, BsSearch } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="2xl:w-full bg-[#FFF159] 2xl:h-[100px]  2xl:flex 2xl:flex-col 2xl:justify-end 2xl:border-solid 2xl:border-b 2xl:border-gray-300 lg:h-[100px] lg:flex lg:flex-col lg:w-full">
      <div className="2xl:flex 2xl:flex-row 2xl:px-80 2xl:justify-center 2xl:my-2 2xl:items-center lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-4 lg:my-2">
        <Link href="/">
          <img
            className="2xl:mr-10 2xl:h-22 2xl:cursor-pointer lg:cursor-pointer lg:mr-10"
            src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"
            alt="Mercado Libre logo"
          />
        </Link>

        <form
          action="/"
          method="GET"
          className="2xl:relative 2xl:flex 2xl:flex-row 2xl:max-w-xl 2xl:w-full 2xl:mr-[50px] lg:flex lg:relative lg:flex-row lg:basis-auto lg:max-w-xl lg:w-full"
        >
          <input
            className="2xl:flex-1 2xl:w-[100px] 2xl:bg-white 2xl:h-[39px] 2xl:pr-12 2xl:rounded-[2px] 2xl:shadow-md 2xl:text-black 2xl:p-3 2xl:placeholder:text-gray-300 2xl:outline-none 2xl:overflow-hidden lg:flex-1 lg:w-[100px] lg:h-[39px] lg:rounded-[2px] lg:p-3 lg:overflow-hidden lg:shadow-md"
            type="search"
            placeholder="Buscar productos, marcas y más..."
            name="search"
            id="search"
          />
          <button className="lg:absolute lg:top-0 lg:right-0 lg:h-10 lg:flex lg:items-center lg:w-10 lg:justify-center lg:p-3 lg:z-10  lg:before:block lg:before:h-6 lg:before:border-l lg:before:border-l-[#e6e6e6] lg:before:border-solid lg:before:absolute lg:before:top-[6.5px] lg:before:left-0 2xl:absolute 2xl:top-0 2xl:right-0 2xl:h-10 2xl:w-10 2xl:flex 2xl:items-center 2xl:justify-center 2xl:p-3 2xl:z-10  2xl:before:block 2xl:before:h-6 2xl:before:border-l 2xl:before:border-l-[#e6e6e6] 2xl:before:border-solid 2xl:before:absolute 2xl:before:top-[6.5px] 2xl:before:left-0">
            <BsSearch className="h-4 w-4 text-gray-600" />
          </button>
        </form>

        <Image
          className=" 2xl:space-x-10 2xl:w-full 2xl:h-full lg:space-x-10"
          src="/promo.webp"
          alt="Promociones"
          width="340"
          height="39"
        />
      </div>
      <div className="2xl:flex 2xl:flex-row 2xl:px-96 2xl:justify-start 2xl:items-center lg:flex lg:flex-row lg:justify-start lg:px-4 lg:items-center">
        <div className="2xl:flex 2xl:h-18 2xl:flex-wrap 2xl:text-[#555] 2xl:text-sm 2xl:relative 2xl:p-1 2xl:w-fit lg:basis-[18.5%] lg:relative lg:flex lg:flex-wrap lg-text-[#555] lg:text-sm lg:p-1 lg:w-fit ">
          <HiOutlineMapPin
            className="2xl:absolute 2xl:top-0 2xl:left-0 2xl:antialiased 2xl:h-7 2xl:w-7 2xl:text-[#333] lg:absolute lg:top-0 lg:left-0 lg:h-7 lg:w-7"
            aria-hidden
          />
          <span className="2xl:whitespace-nowrap 2xl:inline-block 2xl:h-4 2xl:leading-1 2xl:text-[12px] 2xl:text-gray-500 2xl:justify-center 2xl:pl-7 2xl:w-full lg:whitespace-nowrap lg:inline-block lg:h-4 lg:leading-1 lg:text-[12px] lg:text-gray-500 lg:justify-center lg:pl-7 lg:w-full">
            Enviar a
          </span>
          <span className="2xl:inline-block 2xl:text-md 2xl:text-normal 2xl:pl-7 2xl:text-black lg:inline-block lg:text-md lg:text-normal lg:pl-7">
            Capital Federal
          </span>
        </div>
        <ul className="lg:flex lg:flex-row lg:items-end lg:flex-1 lg:gap-3 lg:text-[#3339] lg:text-sm 2xl:flex 2xl:flex-row 2xl:items-end 2xl:flex-1 2xl:gap-5 2xl:text-sm 2xl:text-[#33333399] 2xl:justify-start 2xl:pr-10 2xl:font-['Proxima Nova Rg']">
          <li>Categorias</li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>Supermercado</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Ayuda</li>
        </ul>
        <ul className="lg:flex lg:flex-row lg:gap-3 2xl:flex 2xl:flex-row 2xl:gap-5 2xl:text-sm 2xl:text-[#333] 2xl:font-['Proxima Nova Rg'] lg:text-sm">
          <li>Creá tu cuenta</li>
          <li>Ingresá</li>
          <li>Mis compras</li>
          <li>
            <BsCart2 className="2xl:w-5 2xl:h-auto lg:w-5 lg:h-auto text-[#3339]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
