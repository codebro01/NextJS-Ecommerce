'use client'
import React from 'react'
import { Button } from 'components/button'
import { FormField } from 'components/formField'

const SignupPage = () => {
  return (
    <div className='min-h-[50vh] flex w-full justify-center font-gabarito'>

        <form className='w-[300px] md:w-[350px] bg-white dark:bg-black rounded-md p-5 text-sm' >
            <h2 className="form-header text-center text-xl">Sign up now!</h2>
            <div className="signup-with-google  p-2.5 rounded-sm" style={{ 
  background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)' 
}}>
                <h3>Sign up with google</h3>
            </div>
           <div className="form-fields flex flex-col gap-3 mt-3">
            <FormField id = 'email' htmlFor='email' label='Email' type='text' name='email' placeholder='abc@xyz.com' />
            <FormField id = 'username' htmlFor='username' label='Username' type='text' name='username' placeholder='clover' />
            <FormField id = 'password' htmlFor='password' label='Password' type='password' name='password' placeholder='slkSKJa@Iu1' />

            <div className='mt-2 w-full'>
            <Button name = {'Signup'} bg='bg-green-600' />
            </div>
           </div>
        </form>
    </div>
  )
}

export default SignupPage