import React from 'react'

type discountType = {
    discount: number
}

export const DiscountComponent = ({discount}:discountType) => {
  return (
  <span className="absolute top-3 left-3 bg-red-500 px-1 md:px-2  py-0.5  text-[10px] md:text-[12px] text-gray-100 ">
            {discount}%
          </span>  )
}
