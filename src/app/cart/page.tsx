'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCartControl } from 'hooks/useCartControl';
import { itemsDataType } from 'types/types';
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Button } from 'components/button';
import { LinkComponent } from 'components/link';


 const CartPage = () => {
     const {cart, upddateCart, removeFromCart, getTotalPrice, getTotalItems} = useCartControl();
     console.log(cart)
  return (
    <section className='cart page min-h-[50vh] w-full flex justify-center px-3 md:px-0 text-sm '>
        <div className='w-full md:w-[70vw] bg-transparent text-neutral-[900] dark:bg-transparent dark:text-neutral-100 font-gabarito '>
        {cart.length < 1 ? <div>
            <h1>Your Cart is Empty</h1>
           <Link href = '/'><button>Shop Now!</button></Link> 
        </div> : (
            <div className="cart-items flex flex-col gap-5">
                <h1 className='text-center text-2xl font-noto'>Review Your Cart Items</h1>
                <div className="cart-items-list flex flex-col gap-4">
                    {cart.map((item) => {
                        const {id, name, discount, price, img, quantity} = item;
                        return (
                            <div  key = {id} className="flex justify-start bg-gray-200 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 items-center rounded-lg p-2 h-[90px] gap-2">
                                <div className="img w-1/8">
                                    <Image
                                        width={50}
                                        height={30}
                                        src={img}
                                        alt={name}
                                        className='rounded-sm object-fit'
                                    >

                                    </Image>
                                </div>
                               <div className='flex w-full items-center gap-3 flex-wrap'>
                               <h2 className="item-name text-xl capitalize w-full uppercase text-[13px] md:text-sm">{name}</h2>
                                <div className="quantity-control flex gap-1 md:gap-2 items-center w-1/6 md:w-1/4">
                                    <button className="decrement cursor-pointer" onClick={() => upddateCart(id, quantity - 1)}>
                                        <ChevronLeft size={15} className='text-main-500' />
                                    </button>
                                        <p>{quantity}</p>
                                    <button className="decrement cursor-pointer" onClick={() => upddateCart(id, quantity + 1)} >
                                    <ChevronRight size={15} className=' text-main-500' />

                                    </button>
                                </div>
                                <h2 className="price w-1/4">Unit Price: {price.toLocaleString()}</h2>
                                <h2 className="amount w-1/4">Unit Total: {(price * quantity).toLocaleString()}</h2>

                                <button className="remove ml-auto mr-5 cursor-pointer" onClick={() => removeFromCart(id)}>
                                    <Trash className='text-main-500'/>
                                </button>
                               </div>
                            </div>
                        )
                    })}
                </div>
                <div className="summary flex justify-around w-full min-h-[150px] rounded-md bg-gray-200 dark:bg-neutral-900 text-neutral-900 dark:text-gray-200 flex-wrap p-5 gap-5">
                    <h1 className='w-full text-center text-3xl'>Order Summary</h1>
                    <h1 className="total-amount text-xl">Total Price: $ {getTotalPrice().toLocaleString()}</h1>
                    <h1 className="total-items text-xl">Total Items: {getTotalItems().toLocaleString()}</h1>
                    <div className='w-full flex justify-between'>
                    <LinkComponent href='/' iconPosition='left' icon = {<ChevronLeft/>} name='Shop more'  />
                    <LinkComponent href='/' iconPosition='right' icon = {<ChevronRight/>} name='Proceed to Payment' bg='bg-green-600' />
                  
                    </div>
                </div>
            </div>
        )}
        </div>

    </section>
  )
}

export default CartPage
