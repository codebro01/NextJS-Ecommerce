'use client'
import React, {useState} from 'react'
import { PickedForUItemsComponent } from 'components/pickedForUItemsComponent'



interface itemsData {
  id: number,
  price: number, 
  name: string, 
  discount: number, 
  img: string
}

const ItemsData:itemsData[] = [
  {price: 22000, 
    name: "givency brown bag", 
    discount: -20, 
    img: "https://cdn.pixabay.com/photo/2015/08/10/20/14/handbag-883113_1280.jpg",
 id: 1,
  }, 
  {price: 15000, 
    name: "Givenchy Bag", 
    discount: -10, 
    img: "https://cdn.pixabay.com/photo/2015/08/10/20/15/handbag-883116_1280.jpg",
 id: 8,
  }, 
  {price: 15000, 
    name: "Givenchy Bag", 
    discount: 10, 
    img: "https://cdn.pixabay.com/photo/2015/08/10/20/15/handbag-883116_1280.jpg",
 id: 9,
  }, 
  {price: 15000, 
    name: "Givenchy Bag", 
    discount: -10, 
    img: "https://cdn.pixabay.com/photo/2015/08/10/20/15/handbag-883116_1280.jpg",
 id: 10,
  }, 
  {price: 9000, 
    name: "Red Sweater", 
    discount: -20, 
    img: "https://cdn.pixabay.com/photo/2020/03/27/09/43/boy-4973056_1280.jpg", 

 id: 3,
  }, 
  {price: 22000, 
    name: "givency brown bag", 
    discount: -20, 
    img: "https://cdn.pixabay.com/photo/2017/05/23/10/53/t-shirt-design-2336850_640.jpg",
 id: 4,
  }, 
  {price: 12999, 
    name: "givency brown bag", 
    discount: -25, 
    img: "https://cdn.pixabay.com/photo/2023/08/10/00/19/japanese-8180481_640.jpg",
 id: 5,
  }, 
  {price: 12999, 
    name: "givency brown bag", 
    discount: -25, 
    img: "https://cdn.pixabay.com/photo/2023/08/10/00/19/japanese-8180481_640.jpg",
 id: 6,
  }, 
  {price: 24000, 
    name: "Men Jean Trouser", 
    discount: 15, 
    img: "https://cdn.pixabay.com/photo/2019/03/12/13/26/jeans-4050815_1280.jpg",
 id: 7,
  }, 
]

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
                     <PickedForUItemsComponent key = {id} img={img} price={price} name = {name} discount={discount} />
                    
                  )
              })
            }
          </div>
        </section>
  )
}
