'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Languages } from '../Data/FakeData'
import { useState } from 'react'
import { FaCaretUp } from 'react-icons/fa6'

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleDropdownChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  return (
    <footer className='flex flex-col gap-6 p-6 text-sm bg-white border-t border-gray-300'>
      {/* title */}
      <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>
        <div className='lg:w-1/2 lg:pr-12'>
          <Image
            src={
              'https://www.gstatic.com/devrel-devsite/prod/v032f5e834ea07ceb506abc7629b7ff47ac48c72d9122b91b2cecfd4022841b1c/web/images/lockup.svg'
            }
            alt='avatar-brand'
            width={132}
            height={42}
            className=''
          />
          <p className='pt-2 text-gray-600'>
            We want to help you build beautiful, accessible, fast, and secure websites that work
            cross-browser, and for all of your users. This site is our home for content to help you
            on that journey, written by members of the Chrome team, and external experts.
          </p>
        </div>

        {/* container */}
        <div className='flex flex-col gap-y-2 lg:w-1/6'>
          <h3 className='font-medium'>Contribute</h3>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            File a bug
          </Link>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            See open issues
          </Link>
        </div>
        <div className='flex flex-col gap-y-2 lg:w-1/6'>
          <h3 className='font-medium'>Related Content</h3>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            Chrome for Developers
          </Link>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            Chromium updates
          </Link>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            Case studies
          </Link>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            Podcasts & shows
          </Link>
        </div>
        <div className='flex flex-col gap-y-2 lg:w-1/6'>
          <h3 className='font-medium'>Contribute</h3>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            @ChromiumDev on X
          </Link>
          <Link href={'#'} className='w-fit hover:text-blue-600 hover:underline'>
            YouTube
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className='flex justify-between pt-6 border-t border-gray-300'>
        <div>
          <Link href={'#'} className='pr-4 border-r border-gray-300'>
            Terms
          </Link>
          <Link href={'#'} className='pl-4'>
            Privacy
          </Link>
        </div>
        <div>
          <select
            id='dropdown'
            name='dropdown'
            value={selectedOption}
            onChange={handleDropdownChange}
            className='text-xs p-2 bg-white border'
          >
            {Languages.map((item) => {
              return (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </footer>
  )
}
export default Footer
