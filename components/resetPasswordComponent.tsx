import React from 'react';
import { Button } from './button';
import { FormField } from './formField';
import { X } from 'lucide-react';
import { ResetPwdPropsType } from 'types/types';

export const ResetPasswordComponent = ({resetPwdPageIsOpen, setResetPwdPageIsOpen}: ResetPwdPropsType) => {
  return (

    <>
        {resetPwdPageIsOpen && (

<div className='w-full h-full flex justify-center absolute fixed backdrop-blur-[30px] top-0 bottom-0 left-0 right-0 items-center'>
<div className=' w-[250px] md:w-[300px] bg-white dark:bg-black p-5 rounded-md flex flex-col gap-3'>
            <div className='flex justify-end cursor-pointer' onClick={() => setResetPwdPageIsOpen(!resetPwdPageIsOpen)}>
            <X />
            </div>
            <h3>Note: If the email you entered is registered with us you will receive an email instantly!</h3>
            <form className='flex flex-col gap-3'>
            <FormField id = 'email' htmlFor='email' label='Email' type='text' name='email' placeholder='abc@xyz.com' />
            <Button type = {'submit'} name='Reset Password' bg='bg-green-600' />
            </form>
    </div>
</div>
        )}
    </>
  )
}
