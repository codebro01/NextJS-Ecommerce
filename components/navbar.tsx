"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Moon as NightIcon,
  Sun as LightIcon,
  Menu,
  X,
  UserRound,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useThemeStore } from "hooks/useThemeStore";
import { useSearchPageState } from "hooks/useSearchPageState";
import { useCartControl } from "hooks/useCartControl";


export const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    category: false, 
    account: false,
  });
  const [navActive, setNavActive] = useState(false);
  const { mode, toggleMode } = useThemeStore();
  const {toggleOpen: toggleSearchPage} = useSearchPageState(); 
  const {cart} = useCartControl();
  // let darkMode;
  // if (mode === "dark") darkMode = true;
  return (
    <>
    <nav className="flex w-full  items-center justify-center bg-white dark:bg-black dark:text-white md:px-[50px] fixed z-10">
      <div className="nav-content-container max-w-[1400px] w-full  top-0 left-0 z-10 flex items-center justify-around gap-2 md:px-5 h-full flex-wrap">
        <div
          className="icon col-span-2 md:hidden text-gray-900 dark:text-gray-100 font-medium"
          onClick={() => setNavActive(!navActive)}
        >
          {navActive ? <X /> : <Menu />}
        </div>
        <div className="col-span-3 flex items-center justify-start py-[20px] cursor-pointer">
          <Link href={'/'} className="font-extrabold uppercase text-2xl md:text-2xl font-gabarito text-gray-900 dark:text-gray-100">U-Shop</Link>
        </div>
        <div className={`md:flex px-5 pt-[10%] md:pt-0 md:mt-0 mt-[65px] w-full   md:px-0 md:items-center md:justify-center md:flex-row flex-col absolute md:relative top-0 left-0 h-[100vh] md:h-auto md:gap-[5%]  md:flex-1/3 ${navActive ? 'flex' : 'hidden'} ${navActive ? 'dark:bg-black bg-offWhite-500' : 'bg-transparent'} `}>
          <div className="link md:order-1 order-3 py-[10px]">
            <Link href={"#"} className="font-gabarito text-gray-900 dark:text-gray-100 font-medium">Store</Link>
          </div>
          <div className="link flex items-center gap-1 cursor-pointer relative py-[10px] md:py-[20px] md:order-2 order-4 " 
                onMouseEnter={() => setDropdown((prevState) => {
                    return {...prevState, category: true}
                })} 
                onMouseLeave={() => setDropdown((prevState) => {
                    return {...prevState, category: false}
                })} 
                >
            <Link href={"#"} className="font-gabarito text-gray-900 dark:text-gray-100 font-medium">Category</Link>
            <ChevronDown className="text-gray-900 dark:text-gray-100 font-medium" />
            <ul className={`dropdown-container grid grid-cols-3 bg-white dark:bg-black dark:text-offWhite-500 absolute top-[100%]  border-t-2 rounded-b-sm border-main-500 left-[50%] transform translate-x-[-50%] min-w-full md:min-w-[400px]  p-3  ${dropdown.category ? 'grid' : 'hidden'}`}>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium" >Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
                <li>
                    <Link href={'#'} className="font-noto text-gray-900 dark:text-gray-100 font-medium">Item 1</Link>
                </li>
              
            </ul>

          </div>
          <div className="search cursor-pointer font-ubuntu md:order-3 order-1 py-[10px] text-gray-900 dark:text-gray-100 font-medium">
            <input
              type="search"
              name=""
              id=""
              placeholder="Click to search"
              className="dark:bg-light-dark-500 cursor-pointer md:rounded-full bg-gray-200 dark:bg-neutral-800 border-none rounded-[5px] outline-0 text-[14px] px-3 py-2 dark:placeholder:text-offWhite-500"
              onClick={toggleSearchPage}
              // onFocus={toggleSearchPage}
            />
          </div>
          <div className="account flex items-center gap-0.5 cursor-pointer md:order-4 order-2 relative py-[10px] md:py-[20px] "
              onMouseEnter={() => setDropdown((prevState) => {
                    return {...prevState, account: true}
                })} 
                onMouseLeave={() => setDropdown((prevState) => {
                    return {...prevState, account: false}
                })} 
          >
            {navActive ? (<Link href={'/account'} className="font-ubuntu dark:text-gray-100 text-gray-900 font-extrabold">Account</Link>): (
                <>
                <UserRound className="text-neutral-950 dark:text-gray-100" />
            <ChevronDown className="text-neutral-950 dark:text-gray-100" />
                </>
            )}

            {dropdown.account && (
              <ul className="account-dropdown absolute top-[100%] left-[50%] transform translate-x-[-50%] rounded-b-sm border-t-2 border-main-500 flex flex-col justify-center bg-white dark:bg-black w-[60vw] md:w-[100px] font-gabarito gap-3 p-2 text-neutral-950 dark:text-gray-100">
                <Link href={'/auth/login'} className="dark:bg-neutral-900 bg-gray-200 p-2 ">Login</Link>
                <Link href={'/auth/signup'} className="dark:bg-neutral-900 bg-gray-200 p-2">Sign up</Link>
            </ul>
            )}
          </div>
        </div>
        <div className="flex items-center justify-around  gap-[5vw] md:gap-[3vw]">
          <Link href={'/cart'}>
          <div className="cart cursor-pointer bg-main-500 px-6 py-[7px] rounded-sm relative">
            <ShoppingCart className="text-gray-100 dark:text-neutral-950" />
            <span className = 'cartItems bg-transparent font-gabarito text-white dark:text-neutral-950 flex justify-center items-center px-2 absolute top-[-1px] right-[7px] text-[12px]'>{cart.length}</span>
          </div>
          </Link>
          <div className="toggle-mode cursor-pointer text-gray-900 dark:text-gray-100 font-medium" onClick={() => toggleMode()}>
            {mode === "dark" ? <LightIcon /> : <NightIcon />}
          </div>
        </div>
      </div>
    </nav>

    {/* {searchPageIsOpen && <SearchPageComponent  SetSearchPageIsOpen = {setSearchPageIsOpen} />} */}
    </>
  );
};
