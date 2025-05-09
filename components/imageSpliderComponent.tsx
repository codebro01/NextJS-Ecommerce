"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ItemComponent } from "./itemComponent";
import React from "react";

interface itemDataType {
  name: string;
  price: number;
  id: string;
  discount: number;
  img: string;
}
interface itemsDataType {
  ItemsData: itemDataType[];
}

export const ImageSpliderComponent = ({ ItemsData }: itemsDataType) => {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: 950,
          gap: "1rem",
          type: "loop",
          perPage: 6,
          perMove: 1,
          autoplay: true,
          autoHeight: true,
          mediaQuery: "max",
          pagination:false,
          // fixedWidth: 150,

          breakpoints: {
            1300: {
              width: "70vw",
              perPage: 6,
            },
            1100: {
              width: "80vw",
              perPage: 5,
            },
            899.98: {
              perPage: 4,
              width: "80vw",
            },
            549.98: {
              perPage: 3,
              width: "90vw",
              gap: "0.5rem",
              // fixedWidth: 350,
            },
          },
        }}
      >
        {ItemsData.map((item) => {
          const { id, price, discount, img, name } = item;
          return (
            <SplideSlide key={id}>
              <ItemComponent
                id={id}
                price={price}
                discount={discount}
                img={img}
                name={name}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
