import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const Footer = () => {
  return (
    <section className = 'footer flex-wrap flex mt-10 px-3  justify-around items-center py-5  md:py-10 bg-white text-[14px] text-neutral-950 dark:bg-black dark:text-gray-100 min-h-20vh gap-5'>
        <div className="logo bg-main-500 min-w-[150px] p-5 flex justify-center items-center rounded-md font-noto shadow-2xl text-xl md:text-2xl font-extrabold shadow-main-500 uppercase cursor-pointer dark:text-neutral-950 text-gray-100 md:basis-auto basis-[45%]">
            <h2>U-Shop</h2>
        </div>
        <div className="links flex justify-between items-start gap-2 flex-col min-w-[150px] md:basis-auto basis-[45%]">
            <Link href={'./'} className='flex gap-1 font-noto'><ChevronRight className='text-main-500'/><span className='hover:text-main-500'>Accessories</span></Link>
            <Link href={'./'} className='flex gap-1 font-noto'><ChevronRight className='text-main-500'/><span className='hover:text-main-500'>Wears</span></Link>
            <Link href={'./'} className='flex gap-1 font-noto'><ChevronRight className='text-main-500'/><span className='hover:text-main-500'>Furnitures</span></Link>
        </div>
        <div className="newsLetter font-noto justify-center items-center mt-8 md:mt-0 flex flex-col gap-3 min-w-[150px] md:basis-auto basis-[100%]">
                <h5>Receive updated on our hot deals.</h5>
            <form>
                <input type="text"  placeholder='email' className='dark:bg-neutral-800 bg-gray-200 px-2 outline-none border-none py-2 rounded-l-sm' />
                <button className='bg-main-500 dark:text-neutral-950 font-bold text-gray-100 p-2 rounded-r-sm cursor-pointer hover:shadow-2xl shadow-main-500'>Submit</button>
            </form>
        </div>
    </section>
  )
}
