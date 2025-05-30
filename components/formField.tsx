import React from 'react';

type formFieldType = {
    htmlFor: string,
    label: string,
    type: string, 
    name: string, 
    id: string, 
    placeholder: string, 
}

export const FormField = ({htmlFor, label, type, name, id, placeholder}: formFieldType) => {
  return (
<div className="form-field flex flex-col gap-2">
                <label htmlFor={htmlFor}>{label}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} className='outline-none border-none bg-gray-200 dark:bg-neutral-900 px-2 rounded-sm w-full h-[40px]'/>
            </div>  )
}
