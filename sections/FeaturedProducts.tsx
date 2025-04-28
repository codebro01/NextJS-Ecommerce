'use client'

import React from 'react'
import { ItemComponent } from 'components/itemComponent';
import { ItemsData } from 'data'





export const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center justify-between px-[2vw] md:px-[7vw] dark:text-gray-100 text-gray-900 gap-5 mt-20 bg-white pt-[50px] dark:pt-[20px] dark:bg-neutral-950 pb-[50px]">
      <h3 className='md:text-4xl text-[1.7rem] font-extrabold'>Featured Products</h3>
      <p className='text-center md:text-xl text-[13px]'>
        Discover our handpicked selection of the season&apos;s most popular items
      </p>
      <div className="featuredProductsItems flex flex-wrap justify-center lg:justify-start gap-2 gap-y-[20px] md:gap-y-[30px] md:grid-cols-3 lg:grid-cols-4">
        {
          ItemsData.map((item) => {
            const {img, price, name, discount, id} = item;
              return (
                <ItemComponent key={id} id = {id} img = {img} price={price} name={name} discount={discount} />
              )
          })
        }
      </div>
    </section>
    
  );
}
