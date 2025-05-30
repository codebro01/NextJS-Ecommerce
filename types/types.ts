import { ReactNode } from "react";

export type itemsDataType = {
  id: string, 
  name: string, 
  discount: number, 
  img: string, 
  price: number, 
  quantity: number, 
}

export type ButtonType = {
  bg?: string;
  color?: string;
  name?: string;
  icon?: ReactNode;
  cb?: () => void;
  type?: "button" | "submit";
};
export type LinkType  = {
    bg?: string;
    color?: string; 
    name?: string;
    icon?: ReactNode;
    href:string;
    iconPosition?: 'left' | 'right'
}

export type ResetPwdPropsType = {
  resetPwdPageIsOpen: boolean;
  setResetPwdPageIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export type NavSectionProps = {
  title: string;
  links: { label: string; href: string }[];
};
