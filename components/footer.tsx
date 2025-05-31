import React from 'react'
import Link from 'next/link'
import { ChevronRight, MailCheck, Phone, House} from 'lucide-react'
import { FaXTwitter, FaTiktok, FaFacebookF, FaInstagram  } from "react-icons/fa6";
import { FormField } from './formField';
import { Button } from './button';


export const Footer = () => {
  return (
    <section className = 'footer flex-wrap flex mt-10 px-3  justify-start md:justify-around items-start py-5  md:py-10 bg-white text-[14px] text-neutral-950 dark:bg-black dark:text-gray-100 min-h-20vh gap-10 md:gap-5 relative border-bottom'>
        <div className='flex flex-col gap-2 font-gabarito text-[17px]'>
        <div className="logo bg-main-500 min-w-[150px] p-5 flex justify-center items-center rounded-md font-noto text-xl md:text-2xl font-extrabold shadow-main-500 uppercase cursor-pointer dark:text-neutral-950 text-gray-100 md:basis-auto basis-[45%]">
            <h2 className='text-[18px]'>U-Shop</h2>
        </div>
        <div className="email mt-5 flex items-center gap-2"><MailCheck size={22} className={'text-main-500'}/> contact-us@ushop.com</div>
            <div className="hot-line flex items-center gap-2"><Phone size={22} className={'text-main-500'}/> +91xxxxxxxxxx</div>
            <div className="address flex items-center gap-2"><House size={22} className={'text-main-500'}/> No. 10 e-commerce street, Arizona</div>
            <div className="social text-main-500 flex gap-3 text-2xl mt-4">
            <Link href={'#'}><FaFacebookF  /></Link>
            <Link href={'#'}><FaXTwitter  /></Link>
            <Link href={'#'}><FaInstagram /></Link>
            <Link href={'#'}><FaTiktok /></Link>
        </div>
        </div>
        <div className="links flex justify-start items-start text-[17px] gap-2 flex-col min-w-[150px] md:basis-auto basis-[45%]">
            <h1 className='font-gabarito text-2xl font-bold'>Quick Links</h1>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center '><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Computer & Accessories</span></Link>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center'><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Phones & Tablets</span></Link>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center'><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Fashion</span></Link>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center'><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Electronics</span></Link>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center'><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Home & Kitchen</span></Link>
            <Link href={'./'} className='flex gap-1 font-gabarito items-center'><ChevronRight size={15} className='text-main-500'/><span className='hover:text-main-500'>Beauty & Personal care</span></Link>
        </div>
        <div className="newsLetter font-noto justify-start items-center mt-8 md:mt-0 flex flex-col gap-3 min-w-[150px] md:basis-auto basis-[100%]">
                <h5 className='text-2xl text-left font-bold'>Receive updates on our hot deals.</h5>
            <form className='flex flex-col gap-3 w-full'>
                <FormField htmlFor='email' type='email' name = 'email' placeholder='abc@xyz.com' label='E-mail' id='email'  />
                <Button name='Submit Email' bg='bg-green-600'/>
            </form>
        </div>
    </section>
  )
}
