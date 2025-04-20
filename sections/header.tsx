import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export const Header = () => {
  return (
    <section className='flex flex-col md:flex-row md:gap-[20px] gap-10 lg:px-[10vw] px-[5vw] dark:text-gray-100 text-neutral-950 '>
            <div className="header-left flex flex-col basis-[50%] gap-5  md:gap-6  ">
                    <div className="new-collection">
                        <button className='font-ubuntu bg-error-500 text-gray-100 px-[10px] py-[5px] rounded-full ' >New Collection</button>
                    </div>
                    <div className="focus flex md:flex-col gap-[12px] text-4xl lg:text-6xl flex-wrap font-extrabold text-neutral-950 dark:text-gray-100 ">
                        <h3>
                            Discover
                        </h3>
                        <h3>
                            Summer
                        </h3>
                        <h3 className='text-main-500'>
                            Essentials
                        </h3>
                    </div>
                    <p className="text text-[12px] md:text-[16px] text-neutral-950   dark:text-gray-100 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum voluptate asperiores odio iusto ab sapiente dolorem quod odit magnam accusamus animi, eveniet labore commodi quo placeat maiores tenetur magni incidunt nam, fugit autem veritatis? Perspiciatis veritatis dolor consequatur! Eligendi impedit vitae magnam? Ea fugiat delectus recusandae rem magnam doloribus.
                    </p>
                    <div className="buttons flex gap-5">
                        <div className="flex items-center gap-2  custom-shadow shop-now bg-main-500 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-[5px] ">
                            <a>Shop Now</a>
                            <MoveRight/>
                        </div>
                        <div className="shop-now bg-transparent text-main-500 items-center gap-2 shop-now dark:text-gray-100 px-2 py-1 rounded-[5px] border-1 border-main-500 ">
                            <a>View LifeBook</a>
                        </div>
                    </div>
            </div>
            <div className=" flex items-start justify-center header-right basis-[50%] ">
               <div className="image-container relative aspect-square lg:aspect-[16/13]  w-full">
                <Image
               src={'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
               fill
               alt='Fashion model wearing summer collection'
               className='object-cover rounded-[10px]'
               />
               <div className="absolute flex flex-col gap-4 rounded-sm dark:bg-neutral-950 bg-gray-100  bottom-[30px] left-[30px] p-5 ">
                    <p >Summer Collection</p>
                    <p className='text-2xl font-bold ' >Up to 40% off</p>
               </div>
               </div>

            </div>
    </section>
  )
}
