import React from 'react'
import Link from 'next/link'
import { LinkType } from 'types/types';





export const LinkComponent = ({bg, color, name, icon, href, iconPosition = 'right'}: LinkType) => {
  return (
    <Link href={`${href}`} className={`${bg ? bg : 'bg-main-500'} ${color ? color : 'text-gray-200 dark:text-neutral-900'} rounded-sm p-3 flex items-center justify-center hover:brightness-90 `}>
        {iconPosition === 'left' && icon}
         {name}
        {iconPosition === 'right' && icon}
         </Link>  )
}
