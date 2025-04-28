'use client'
import React, {useState} from 'react'
import { PickedForUItemsComponent } from 'components/pickedForUItemsComponent'
import { ItemsData } from 'data'




export const PickedForU = () => {




  return (
     <section className="flex flex-col items-center justify-between px-[2vw] md:px-[7vw] dark:text-gray-100 text-gray-900 gap-5 mt-20 mt-[50px] dark:pt-[20px] dark:bg-neutral-950">
          <h3 className='md:text-4xl text-[1.7rem] font-extrabold'>Pick for U</h3>
          <p className='text-center md:text-xl text-[13px]'>
            Selected items that are meant for you
          </p>
          <div className="featuredProductsItems flex flex-wrap justify-center lg:justify-start gap-2 gap-y-[20px] md:gap-y-[30px]">
            {
              ItemsData.map((item) => {
                const {img, price, name, discount, id} = item;
                  return (
                     <PickedForUItemsComponent key = {id} id= {id} img={img} price={price} name = {name} discount={discount} />
                    
                  )
              })
            }
          </div>
        </section>
  )
}
