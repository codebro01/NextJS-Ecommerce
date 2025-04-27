import React from 'react';
import  Image  from 'next/image';
import { ShoppingCart } from 'lucide-react';


interface Props {
    params: {
        id: string
    }
}


    export default async function ItemInfo({params}: Props) {
    console.log('hello item-info')
    const {id} = await params;
    console.log(id)
  return (
        <section className="bg-gray-100 text-neutral-950 dark:bg-transparent font-noto dark:text-gray-100 min-h-[100vh] w-full flex justify-center items-start">
            <div className="items-info-container flex flex-col gap-5 md:w-[70vw]  ">
                <div className="img_item-summary-section flex gap-3 md:gap-10 bg-gray-200 rounded-md p-5 dark:bg-neutral-800 dark:text-gray-100 ">
                <div className="img-container aspect-[11/9] relative w-full h-full basis-1/2">
                    <Image
                        src = 'https://cdn.pixabay.com/photo/2023/08/10/00/19/japanese-8180481_640.jpg'
                        alt = 'goods'
                        fill
                        // width={500}
                        // height={500}
                        className = 'object-cover rounded-md'
                    />

            
                </div>
                <div className="item-summary basis-1/2 flex justify-between flex-col">
                    <h3 className='font-bold text-xl md:text-2xl'>Items Name</h3>
                    <h4>Item Ammount</h4>
                    <h4>Other Info</h4>
                    <h4>Other Info</h4>
                    <div className="add-to-cart transition duration-300 ease-in-out flex items-center gap-3 p-3 bg-main-500 justify-center rounded-sm cursor-pointer hover:scale-[1.02]">
                        <button className='text-xl text-bold text-gray-100 '>Add to cart</button>
                        <ShoppingCart className='text-gray-100' />
                    </div>
                </div>
            </div>
            <div className="full-item-info bg-gray-150 p-3 rounded-md shadow-xl bg-gray-200 rounded-md p-5 dark:bg-neutral-800" >
                <h3>Product full information</h3>
                <hr className=' border border-gray-300 dark:border-neutral-700 '/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi non sed! Ea quod iste omnis quos doloribus consequatur illo quisquam. Facere aliquam eos asperiores similique neque totam, ipsa sunt saepe facilis ipsam dignissimos animi quisquam corrupti doloribus molestiae doloremque ea consequuntur tempore fugiat. Facilis officia vitae ducimus distinctio laboriosam.</p>

            </div>
            <div className="similar-items">

            </div>
            </div>
        </section>
  )
}
