import React from 'react'
import { ButtonType } from 'types/types'



export const Button = ({bg, color, name, icon, cb, type = 'button'}: ButtonType) => {
  return (
        <button onClick={() => cb ? cb() : null} type={type} className = {`${bg ? bg : 'bg-main-500'} ${color ? color : 'text-gray-200 dark:text-neutral-900'}  px-4 py-2.5 rounded-md cursor-pointer flex justify-center items-center w-full`}>{name} {icon}</button>
  )
}
