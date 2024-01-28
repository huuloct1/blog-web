'use client'

import { useState } from 'react'
import Link from 'next/link'
import constants from '@/lib/constants'

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleDropdownChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  return (
    <form action='POST' className='p-6 bg-white'>
      <h1 className='pb-3 text-3xl font-normal text-center'>Developer Newsletter</h1>
      <h3 className='pb-6 text-xl font-light text-center'>
        Get the latest news, techniques and updates straight to your inbox.
      </h3>
      <div className='flex flex-col pb-4'>
        <label htmlFor='first-name' className='text-xs text-gray-600 pb-1'>
          First Name
        </label>
        <input id='first-name' type='text' placeholder='First Name' className='p-1 border' />
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='last-name' className='text-xs text-gray-600 pb-1'>
          Last Name
        </label>
        <input id='last-name' type='text' placeholder='Last Name' className='p-1 border' />
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='email' className='text-xs text-gray-600 pb-1'>
          Your Email
        </label>
        <input id='email' type='text' placeholder='Email' className='p-1 border' />
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='dropdown' className='text-xs text-gray-600 pb-1'>
          Country
        </label>
        <select
          id='dropdown'
          name='dropdown'
          value={selectedOption}
          onChange={handleDropdownChange}
          className='text-xs p-2 bg-white border'
        >
          {constants.languages.map((item) => {
            return (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <p className='pb-4'>
        Don&apos;t worry, no spam here! Your information will only be used for web.dev and Chrome
        related updates and our emails are typically no more than 1-2 times a month. You can
        unsubscribe anytime.
      </p>
      <div className='flex items-center gap-4 pb-2'>
        <input id='sub-newsletter' type='checkbox' value={'unconfirmed'} className='h-4 w-4' />
        <label htmlFor='sub-newsletter' className='flex-1'>
          Add me to the web.dev mailing list.
        </label>
      </div>
      <div className='flex items-center gap-4 pb-4'>
        <input id='accept-rules' type='checkbox' value={'unconfirmed'} className='h-4 w-4' />
        <label htmlFor='accept-rules' className='flex-1'>
          I accept{' '}
          <Link href={'https://policies.google.com/terms'} className='link hover:underline'>
            Google&apos;s Terms and Conditions
          </Link>{' '}
          and acknowledge that my information will be used in accordance with{' '}
          <Link href={'https://policies.google.com/privacy'} className='link hover:underline'>
            Google&apos;s Privacy Policy
          </Link>
          .
        </label>
      </div>
      <button
        type='submit'
        className='flex px-4 py-2 mx-auto w-fit border shadow-lg hover:bg-blue-50'
      >
        <Link href={'#'} className='text-sm uppercase textColorPrimary font-medium'>
          subscribe
        </Link>
      </button>
    </form>
  )
}
export default Form
