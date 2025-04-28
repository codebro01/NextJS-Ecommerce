import React from 'react';
import  Image  from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { ImageSpliderComponent } from 'components/imageSpliderComponent';
import { ItemsData } from 'data';
import { FaNairaSign } from 'react-icons/fa6';


interface Props {
    params: {
        id: string
    }
}


    export default async function ItemInfo({params}: Props) {
    console.log('hello item-info')
    const {id} = await params;
    console.log(id);

        const itemData = ItemsData.find(item => item.id === id);

  return (
        <section className="bg-gray-100 text-neutral-950 dark:bg-transparent font-noto dark:text-gray-100 min-h-[100vh] w-full flex justify-center items-start">
            <div className="items-info-container flex flex-col gap-10 md:w-[70vw]  ">
                <div className="img_item-summary-section flex gap-3 md:gap-10 bg-gray-200 rounded-md p-5 dark:bg-neutral-800 dark:text-gray-100 ">
                <div className="img-container aspect-[11/9] relative w-full h-full basis-1/2">
                    <Image
                        src = {`${itemData?.img}`}
                        alt = {`${itemData?.name}`}
                        fill
                        // width={500}
                        // height={500}
                        className = 'object-cover rounded-md'
                    />

            
                </div>
                <div className="item-summary basis-1/2 flex justify-between flex-col font-gabarito">
                    <h3 className='font-bold text-xl md:text-xl capitalize'><span className='font-medium'>{itemData?.name}</span></h3>
                    <h4 className = 'flex gap-2 items-center' ><FaNairaSign/><span className='font-medium'>{itemData?.price}</span></h4>
                    <h4>Other Info</h4>
                    <h4>Other Info</h4>
                    <div className="add-to-cart transition duration-300 ease-in-out flex items-center gap-3 p-3 bg-main-500 justify-center rounded-sm cursor-pointer hover:scale-[1.02]">
                        <button className='text-[13px] text-bold text-gray-100 '>Add to cart</button>
                        <ShoppingCart className='text-gray-100' />
                    </div>
                </div>

            </div>
            <div className="full-item-info bg-gray-150 p-3 rounded-md shadow-xl bg-gray-200 rounded-md p-5 dark:bg-neutral-800" >
                <h3>Product full information</h3>
                <hr className=' border border-gray-300 dark:border-neutral-700 '/>
                <p className='text-[13px]/7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi non sed! Ea quod iste omnis quos doloribus consequatur illo quisquam. Facere aliquam eos asperiores similique neque totam, ipsa sunt saepe facilis ipsam dignissimos animi quisquam corrupti doloribus molestiae doloremque ea consequuntur tempore fugiat. Facilis officia vitae ducimus distinctio laboriosam.</p>

            </div>
            <div className="similar-items flex gap-3 wrap">
                <ImageSpliderComponent ItemsData={ItemsData}/>
            </div>
       
            </div>
        </section>
  )
}
