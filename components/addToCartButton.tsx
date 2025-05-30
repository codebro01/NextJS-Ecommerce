'use client'
import React from 'react';
import { useCartControl } from 'hooks/useCartControl';
import { itemsDataType } from 'types/types';
import { ShoppingCart } from 'lucide-react';

export const AddToCartButton = ({id, name, discount, price, quantity, img}: itemsDataType) => {

    const {addToCart} = useCartControl();

    
  return (
    <>
               <div className="add-to-cart bg-main-500 flex cursor-pointer items-center justify-center gap-3 rounded-sm p-3 transition duration-300 ease-in-out hover:scale-[1.02]" onClick={() => addToCart({id, name, discount, price, img, quantity})}>
            <button className="text-bold text-[13px] text-gray-100">
                Add to cart
              </button>
              <ShoppingCart className="text-gray-100" />
            </div>
    </>
  )
}
