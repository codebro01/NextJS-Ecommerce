"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Moon as NightIcon,
  Sun as LightIcon,
  Menu,
  X,
  UserRound,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useThemeStore } from "hooks/useThemeStore";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const { mode, toggleMode } = useThemeStore();
  let darkMode;
  if (mode === "dark") darkMode = true;
  return (
    <nav className="flex  w-full items-center justify-center bg-white dark:bg-black dark:text-white md:px-[50px] fixed z-10">
      <div className="nav-content-container w-full  top-0 left-0 z-10 flex items-center justify-around gap-2 md:px-5 h-full flex-wrap">
        <div
          className="icon col-span-2 md:hidden text-gray-900 dark:text-gray-100 font-bold"
          onClick={() => setNavActive(!navActive)}
        >
          {navActive ? <X /> : <Menu />}
        </div>
        <div className="col-span-3 flex items-center justify-start py-[20px] cursor-pointer">
          <h4 className="font-extrabold uppercase md:text-2xl font-gabarito text-gray-900 dark:text-gray-100">U-Shop</h4>
        </div>
        <div className={`md:flex px-5 pt-[10%] md:pt-0 md:mt-0 mt-[65px] w-full   md:px-0 md:items-center md:justify-center md:flex-row flex-col absolute md:relative top-0 left-0 h-[100vh] md:h-auto md:gap-[5%]  md:flex-1/3 ${navActive ? 'flex' : 'hidden'} ${navActive ? 'dark:bg-black bg-offWhite-500' : 'bg-transparent'} `}>
          <div className="link md:order-1 order-3 py-[10px]">
            <Link href={"#"} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Store</Link>
          </div>
          <div className="link flex items-center gap-1 cursor-pointer relative py-[10px] md:py-[20px] md:order-2 order-4 " 
                onMouseEnter={() => setDropdown(true)} 
                onMouseLeave={() => setDropdown(false)} 
                >
            <Link href={"#"} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Category</Link>
            <ChevronDown className="text-gray-900 dark:text-gray-100 font-bold" />
            <ul className={`dropdown-container grid grid-cols-3 bg-white dark:bg-light-dark-500 dark:text-offWhite-500 absolute top-[100%]  border-2 border-main-500 left-[50%] transform translate-x-[-50%] min-w-full md:min-w-[400px] rounded-[5px] p-3  ${dropdown ? 'grid' : 'hidden'}`}>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold" >Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-ubuntu text-gray-900 dark:text-gray-100 font-bold">Item 1</Link>
                </li>
              
            </ul>

          </div>
          <div className="search font-ubuntu md:order-3 order-1 py-[10px] text-gray-900 dark:text-gray-100 font-bold">
            <input
              type="search"
              name=""
              id=""
              placeholder="search"
              className="dark:bg-light-dark-500  border-2 md:rounded-full border-main-500 rounded-[5px] outline-0 text-[14px] py-1 px-2 dark:placeholder:text-offWhite-500"

            />
          </div>
          <div className="account flex items-center gap-0.5 cursor-pointer md:order-4 order-2 py-[10px]">
            {navActive ? (<Link href={'/account'} className="font-ubuntu dark:text-gray-100 text-gray-900 font-extrabold">Account</Link>): (
                <>
                <UserRound className="text-main-500" />
            <ChevronDown className="text-main-500" />
                </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-around  gap-[5vw] md:gap-[3vw]">
          <div className="cart cursor-pointer">
            <ShoppingCart className="text-main-500" />
          </div>
          <div className="toggle-mode cursor-pointer text-gray-900 dark:text-gray-100 font-bold" onClick={() => toggleMode()}>
            {mode === "dark" ? <LightIcon /> : <NightIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};
