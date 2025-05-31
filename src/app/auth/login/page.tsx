'use client'
import React, {useState} from 'react'
import { FormField } from 'components/formField'
import Image from 'next/image'
import { Button } from 'components/button'
import { ResetPasswordComponent } from 'components/resetPasswordComponent'


 const LoginPage = () => {
    const [resetPwdPageIsOpen, setResetPwdPageIsOpen] = useState(false)
  return (
     <div className='min-h-[50vh] flex w-full justify-center font-gabarito relative '>
    
            <form className='w-[250px] md:w-[350px] bg-white dark:bg-black rounded-md p-5 text-[12px] md:text-sm flex flex-col gap-3 shadow-xl dark:shadow-neutral-700' >
                <h2 className="form-header text-center text-xl">Welcome Back!</h2>
                <div className="signup-with-google flex bg-gray-200 dark:bg-neutral-900 justify-center p-1.5 gap-3 items-center cursor-pointer rounded-sm">
                    <h3 className='text-center'>Login with google</h3>
                    <Image
                        src={'/google.png'}
                        alt='google logo'
                        height={30}
                        width={30}
                        className='p-[3px] bg-gray-200 rounded-sm'
                    ></Image>
                </div>
                <div className="flex items-center gap-2">
      <div className="flex-grow h-px bg-gray-400 dark:bg-neutral-700" />
      <span className="text-sm text-gray-500">or</span>
      <div className="flex-grow h-px bg-gray-400 dark:bg-neutral-700" />
    </div>
    
               <div className="form-fields flex flex-col gap-3">
                <FormField id = 'username' htmlFor='username' label='Username' type='text' name='username' placeholder='clover' />
                <FormField id = 'password' htmlFor='password' label='Password' type='password' name='password' placeholder='slkSKJa@Iu1' />
                <div className="forgot-password text-right text-blue-500 w-full cursor-pointer" onClick={() => setResetPwdPageIsOpen(!resetPwdPageIsOpen)}>Forgot password?</div>
                <div className='mt-2 w-full'>
                <Button type='submit' name = {'Login'} bg='bg-green-600' />
                </div>
               </div>
            </form>

            {resetPwdPageIsOpen && <ResetPasswordComponent resetPwdPageIsOpen = {resetPwdPageIsOpen} setResetPwdPageIsOpen={setResetPwdPageIsOpen} />}
        </div>
  )
}

export default LoginPage
