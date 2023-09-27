import Link from "next/link";
import TeslaLogo from "./TeslaLogo";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between fixed pl-[20px] md:pl-[52px] pr-[10px] md:pr-[40px] w-full h-[60px] text-white z-10">
      <nav className="w-auto h-[50px] flex items-center ">
        <TeslaLogo />
      </nav>
      <nav className="pl-[15%] md:w-[60%] md:h-[50px] md:flex md:items-center md:justify-center">
        <ul className="md:flex md:gap-8 md:text-[14px]">
          <li>
            <Link className="hidden md:flex font-medium text-[15px]" href={"#"}>
              Vehicles
            </Link>
          </li>
          <li>
            <Link className="hidden md:flex font-medium text-[15px]" href={"#"}>
              Energy
            </Link>
          </li>
          <li>
            <Link className="hidden md:flex font-medium text-[15px]" href={"#"}>
              Charging
            </Link>
          </li>
          <li>
            <Link className="hidden md:flex font-medium text-[15px]" href={"#"}>
              Discover
            </Link>
          </li>
          <li>
            <Link className="hidden md:flex font-medium text-[15px]" href={"#"}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:w-[20%] md:h-[50px] md:flex md:items-center md:justify-end">
        <ul className="hidden md:flex gap-4">
          <li>
            <Link href={"#"} className="hidden md:flex">
              <GoQuestion className="text-[24px]" />
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hidden md:flex">
              <TbWorld className="text-[24px]" />
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hidden md:flex">
              <CgProfile className="text-[24px]" />
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="h-[50px] flex items-center md:hidden">
        <button className="w-[80px] h-[35px] rounded-md border ">
          <span>Menu</span>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
