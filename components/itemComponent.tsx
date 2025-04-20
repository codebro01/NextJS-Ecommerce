'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { ShoppingCart, CircleAlert } from "lucide-react";


export const ItemComponent = ({img, price, name, discount, }) => {
        const [isHovered, setIsHovered] = useState(false);


//         function formatNumberWithCommas(number) {
//   return number.toLocaleString(); // works like magic ✨
// }

  return (
     <div
          className="featuredProductItem relative flex flex-col bg-gray-200 dark:bg-neutral-900 shadow-md "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="img-container relative aspect-[9/11] w-full md:h-[270px] lg:h-[320px]">
            <Image
              src={
                img
              }
              alt="image.name"
              fill
              className="w-[160px] md:w-[200px] lg:w-[250px] transition delay-150 duration-300 ease-in-out object-cover "
            />
            {isHovered && (
             <div
              className={`flex z-5, animate__animated animate__fadeInUp animate__faster absolute bottom-0 left-0  w-full items-center justify-around gap-[10px] bg-[#000000e8] py-[5px]  `}
            >
              <div className="add-to-cart border-main-500 flex items-center justify-start gap-2 rounded-[4px] border-1 px-2 py-1.5 cursor-pointer">
                <p className="text-main-500 text-[12px] md:text-[15px]">
                  Add to cart
                </p>
                <ShoppingCart size={20} className="text-main-500" />
              </div>
              <Link href={"/#"}>
                <CircleAlert size={25} className="text-main-500" />
              </Link>
            </div>  
            )}
           
          </div>
          <div className="item-info flex flex-col gap-[10px] z-10 pt-1 p-2 ">
             <h5 className="name text-[14px] text-gray-900 md:text-[16px] dark:text-gray-100 ">
            {name}
          </h5>
          <h2 className="price text-[16px] font-bold text-gray-900 md:text-2xl dark:text-gray-100">
            ${price.toLocaleString()}
          </h2>
          </div>
          <span className="absolute top-3 left-3 bg-red-500 px-2.5 py-0.5 text-[12px] text-gray-100 ">
            {discount}
          </span>
        </div>
  )
}
