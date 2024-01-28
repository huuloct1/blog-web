/* eslint-disable jsx-a11y/alt-text */
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from './SearchBar'
import { faCaretDown, faEarthAmerica, faSortDown } from '@fortawesome/free-solid-svg-icons'
import constants from '@/lib/constants'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  const [isMenuHidden, setIsMenuHidden] = useState(false)
  const [isSearchHidden, setIsSearchHidden] = useState(false)

  const pathname = usePathname()
  const active = 'border-b-2 borderColorPrimary'

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    if (windowWidth < 1180) setIsMenuHidden(true)
    else setIsMenuHidden(false)

    if (windowWidth >= 700) setIsSearchHidden(true)
    else setIsSearchHidden(false)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowWidth])

  return (
    <nav className='w-full flex sticky z-50 top-0 justify-between px-3 mt-[-48px] h-12 items-center bg-white text-l font-sans shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Link href={'/'}>
          <Image
            src={
              'https://www.gstatic.com/devrel-devsite/prod/v032f5e834ea07ceb506abc7629b7ff47ac48c72d9122b91b2cecfd4022841b1c/web/images/lockup.svg'
            }
            alt='avatar-brand'
            width={108}
            height={42}
            className='pl-2 cursor-pointer'
          />
        </Link>
        {!isMenuHidden ? (
          <div className='flex flex-wrap text-sm font-light ml-4'>
            {constants.navHeader.map((item) => {
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={pathname == item.to ? `px-4 py-3 ${active}` : `px-4 py-3`}
                >
                  {item.text}
                </Link>
              )
            })}
          </div>
        ) : (
          <div className='group relative dropdown'>
            <button className='group text-sm font-light ml-4 px-4'>
              More
              <FontAwesomeIcon icon={faCaretDown} className='px-2 group-hover:rotate-180' />
            </button>
            <ul className='w-[148px] hidden absolute top-6 left-2 py-2 group-hover:flex flex-col text-sm font-light bg-white shadow-lg'>
              {constants.navHeader.map((item) => {
                return (
                  <li key={item.to} className='p-2 hoverBgColorPrimary hover:text-white'>
                    <Link href={item.to} className='px-4'>
                      {item.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Right */}
      <div className='flex items-center gap-2'>
        {isSearchHidden && <SearchBar />}
        <button className='flex items-center justify-center h-8 text-sm font-medium border border-gray-300 p-2'>
          <FontAwesomeIcon
            icon={faEarthAmerica}
            className='flex items-center justify-center h-4 px-1'
          />
          English
          <FontAwesomeIcon icon={faSortDown} className='h-4 px-1 mt-[-6px]' />
        </button>
        <Link href={'/login'} className='flex items-center px-4 text-sm font-medium uppercase'>
          Sign in
        </Link>
      </div>
    </nav>
  )
}
export default Header
