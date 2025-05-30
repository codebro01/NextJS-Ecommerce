import React from 'react';
import Link from 'next/link';
import { ShoppingCart, CircleAlert } from "lucide-react";
import { useCartControl } from 'hooks/useCartControl';
import { itemsDataType } from 'types/types';



export const AddToCartComponent = ({id, name, discount, img, price, quantity}: itemsDataType ) => {

  const {addToCart} = useCartControl();

  return (
   <div
              className={`flex z-5, animate__animated animate__fadeInUp animate__faster absolute bottom-0 left-0  w-full items-center justify-around gap-[10px] bg-[#000000e8] py-[5px]  `}
            >
              <div className="add-to-cart border-main-500 flex items-center justify-start gap-2 rounded-[4px] border-1 px-2 py-1.5 cursor-pointer" onClick={() => addToCart({id, name, discount, img, price, quantity})}>
                <p className="text-main-500 text-[9px] md:text-[11px]" >
                  Add to cart
                </p>
                <ShoppingCart size={20} className="text-main-500" />
              </div>
              <Link href={`/items-info/${id}`}>
                <CircleAlert size={20} className="text-main-500" />
              </Link>
            </div> )
}
