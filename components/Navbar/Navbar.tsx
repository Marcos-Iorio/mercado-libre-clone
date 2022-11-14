import promo from "./promo.webp";
import Image from "next/image";
import { BsCart2, BsSearch } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FFF159] h-[100px]  flex flex-col justify-end border-solid border-b border-gray-300">
      <div className="flex flex-row flex-center px-80 justify-center my-2 items-center">
        <Link href="/">
          <img
            className="mr-10 h-22 cursor-pointer"
            src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"
            alt="Mercado Libre logo"
          />
        </Link>

        <form
          action="/"
          method="GET"
          className="relative flex flex-row max-w-xl w-full mr-[50px]"
        >
          <input
            className="flex-1 w-[100px] bg-white h-[39px] pr-12 rounded-[2px] shadow-md text-black p-3 placeholder:text-gray-300 outline-none overflow-hidden"
            type="search"
            placeholder="Buscar productos, marcas y más..."
            name="search"
            id="search"
          />
          <button className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center p-3 z-10  before:block before:h-6 before:border-l before:border-l-[#e6e6e6] before:border-solid before:absolute before:top-[6.5px] before:left-0">
            <BsSearch className="h-4 w-4 text-gray-600" />
          </button>
        </form>

        <Image
          className=" space-x-10 w-full h-full"
          src="/promo.webp"
          alt="Promociones"
          width="340"
          height="39"
        />
      </div>
      <div className="flex flex-row flex-center px-96 justify-start items-center">
        <div className="flex h-18 flex-wrap text-[#555] text-sm relative p-1 w-fit ">
          <HiOutlineMapPin
            className="absolute top-0 left-0 antialiased h-7 w-7 text-[#333]"
            aria-hidden
          />
          <span className="whitespace-nowrap inline-block h-4 leading-1 text-[12px] text-gray-500 justify-center pl-7 w-full">
            Enviar a
          </span>
          <span className="inline-block text-md text-normal pl-7 text-black ">
            Capital Federal
          </span>
        </div>
        <ul className="flex flex-row items-end flex-1 gap-5 text-sm text-[#33333399] justify-start pr-10 font-['Proxima Nova Rg']">
          <li>Categorias</li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>Supermercado</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Ayuda</li>
        </ul>
        <ul className="flex flex-row gap-5 text-sm text-[#333] font-['Proxima Nova Rg']">
          <li>Creá tu cuenta</li>
          <li>Ingresá</li>
          <li>Mis compras</li>
          <li>
            <BsCart2 className="w-5 h-auto" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
