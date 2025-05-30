import { ReactNode } from "react";

export type itemsDataType = {
  id: string, 
  name: string, 
  discount: number, 
  img: string, 
  price: number, 
  quantity: number, 
}

export type ButtonType  = {
    bg?: string;
    color?: string; 
    name?: string;
    icon?: ReactNode;
    cb?:() => void;
}
export type LinkType  = {
    bg?: string;
    color?: string; 
    name?: string;
    icon?: ReactNode;
    href:string;
    iconPosition?: 'left' | 'right'
}