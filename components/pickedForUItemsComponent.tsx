import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaHeart } from "react-icons/fa6";
import { AddToCartComponent } from "./addToCartComponent";
import { DiscountComponent } from "./discountComponent";

type itemsProps = {
  id:string;
  img: string;
  name: string;
  discount: number;
  price: number;
};

export const PickedForUItemsComponent = ({
  img,
  name,
  discount,
  price,
  id,
}: itemsProps) => {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      className="featuredProductItem relative flex flex-col rounded-sm bg-gray-200 shadow-md dark:bg-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="img-container relative aspect-square w-full rounded-sm md:h-[150px]">
        <Image
          src={img}
          fill
          alt="image.name"
          className="rounded-t-sm object-cover transition delay-150 duration-300 ease-in-out"
        />

        {isHovered && <AddToCartComponent id = {id} />}
      </div>
      <div className="item-info flex flex-col gap-[10px] p-2 pt-1">
        <h5 className="name text-[14px] text-gray-900 md:text-[13px] dark:text-gray-100">
          {name}
        </h5>
        <h2 className="price flex items-center justify-between text-[13px] font-bold text-gray-900 md:text-[18px] dark:text-gray-100">
          ${price.toLocaleString()}
          <span className="cursor-pointer" onClick={handleLike}>
            {liked ? (
              <FaHeart className="text-main-500" />
            ) : (
              <Heart className="text-gray-500" size={20} />
            )}
          </span>
        </h2>
        <h2 className="price text-[9px] font-bold text-gray-900 line-through md:text-[10px] dark:text-gray-100">
          ${price.toLocaleString()}
        </h2>
      </div>
      <DiscountComponent discount={discount} />
    </div>
  );
};
