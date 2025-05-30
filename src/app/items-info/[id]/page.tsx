

import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { ShoppingCart, ArrowLeft } from "lucide-react";
import { ImageSpliderComponent } from "components/imageSpliderComponent";
import { ItemsData } from "data";
import { FaNairaSign } from "react-icons/fa6";
import {BackButtonArrow} from 'components/backButtonArrow';
import { AddToCartButton } from "components/addToCartButton";
import { itemsDataType } from "types/types";

interface Props {
  params: {
    id: string;
  };
}

export default async function ItemInfo({ params }: Props) {
  const { id } = await params;
  console.log(id);
  ;

  
  const itemData:itemsDataType = ItemsData.find((item) => item.id === id)  || {
    id: '',
    name: '',
    discount: 0,
    img: '',
    price: 0,
    quantity: 0,
  };

  console.log(itemData)

  

  return (
    <section className="font-noto flex min-h-[100vh] w-full items-start justify-center bg-gray-100 text-neutral-950 dark:bg-transparent dark:text-gray-100">
      <div className="items-info-container w-90vw flex w-[90vw] max-w-[1400px] flex-col gap-10 lg:w-[70vw]">
        <BackButtonArrow/>
        <div className="img_item-summary-section items-between flex flex-col justify-start gap-3 rounded-md bg-gray-200 p-5 sm:flex-row md:gap-10 dark:bg-neutral-800 dark:text-gray-100">
          <div className="img-container relative aspect-square basis-full sm:basis-[20%] md:aspect-[11/9] md:basis-1/2">
            <Image
              src={`${itemData?.img}`}
              alt={`${itemData?.name}`}
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="item-summary font-gabarito flex basis-full flex-col justify-between gap-[8px] sm:basis-[65%] md:basis-1/2">
            <h3 className="text-2xl font-bold capitalize md:text-xl">
              <span className="text-2xl font-medium">{itemData?.name}</span>
            </h3>
            <span>Brand: Brand name</span>
            <h4 className="flex items-center gap-2">
              <FaNairaSign />
              <span className="text-2xl font-medium">
                {itemData?.price.toLocaleString()}
              </span>
            </h4>

            <h4>Other Info</h4>
            <h4>Other Info</h4>
            <div className="flex-start flex items-center">
              <span className="rounded-lg bg-gray-100 p-3 dark:bg-neutral-950">
                In Stock
              </span>
            </div>
          <AddToCartButton id= {itemData?.id} name= {itemData?.name} discount= {itemData?.discount} img= {itemData?.img} quantity= {itemData?.quantity} price= {itemData?.price}  />
          </div>
        </div>
        <div className="full-item-info bg-gray-150 rounded-md bg-gray-200 p-3 p-5 shadow-xl dark:bg-neutral-800">
          <h3>Product full information</h3>
          <hr className="border border-gray-300 dark:border-neutral-700" />
          <p className="text-[13px]/7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quasi non sed! Ea quod iste omnis quos doloribus consequatur illo
            quisquam. Facere aliquam eos asperiores similique neque totam, ipsa
            sunt saepe facilis ipsam dignissimos animi quisquam corrupti
            doloribus molestiae doloremque ea consequuntur tempore fugiat.
            Facilis officia vitae ducimus distinctio laboriosam.
          </p>
        </div>
        <div className="similar-items wrap flex gap-3 self-center overflow-x-hidden">
          <ImageSpliderComponent ItemsData={ItemsData} />
        </div>
      </div>
    </section>
  );
}
