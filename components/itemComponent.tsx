'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import { AddToCartComponent } from './addToCartComponent';
import { DiscountComponent } from './discountComponent';


type ItemComponentProps = {
  img: string;
  price: number;
  name: string;
  discount: number;
  id: string,
  quantity: number,
}


export const ItemComponent = ({img, price, name, discount, id, quantity}: ItemComponentProps) => {
        const [isHovered, setIsHovered] = useState(false);


//         function formatNumberWithCommas(number) {
//   return number.toLocaleString(); // works like magic ✨
// }

  return (
     <div
          className="featuredProductItem relative flex flex-col bg-gray-200 dark:bg-neutral-900 shadow-md rounded-b-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="img-container relative aspect-square w-full md:h-[150px]">
            <Image
              src={
                img
              }
              alt={name}
              fill
              className="w-[160px] md:w-[200px] rounded-t-sm lg:w-[250px] transition delay-150 md:h-[150px] duration-300 ease-in-out object-cover "
            />
            {isHovered && (
          <AddToCartComponent img ={img} price = {price} name = {name} quantity = {quantity} discount = {discount} id={id}/>
            )}
           
          </div>
          <div className="item-info flex flex-col gap-[10px] pt-1 p-2 ">
             <h5 className="name text-[14px] text-gray-900 md:text-[13px] dark:text-gray-100 ">
            {name}
          </h5>
          <h2 className="price text-[13px] font-bold text-gray-900 md:text-[18px] dark:text-gray-100">
            ${price.toLocaleString()}
          </h2>
          </div>
        <DiscountComponent discount = {discount} />
        </div>
  )
}
