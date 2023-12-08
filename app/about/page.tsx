'use client'

import AboutCard from '../components/AboutCard'
import { AdminList, IntroBlogs, SuggestedTool } from '../Data/FakeData'
import Link from 'next/link'
import AdminCard from './AdminCard'
import React, { useEffect, useState } from 'react'
import { TProfile, TBlog, TSuggestedTool } from '../TypeAlias'
import Image from 'next/image'
import { RiErrorWarningFill } from 'react-icons/ri'
import { MdModeEdit } from 'react-icons/md'

const AboutPage: React.FC = () => {
  const [introBlog, setIntroBlog] = useState<TBlog>()
  const [adminList, setAdminList] = useState<TProfile[]>([])
  const [suggestedTool, setSuggestedTool] = useState<TSuggestedTool>()

  // fake api
  useEffect(() => {
    setIntroBlog(IntroBlogs[1])
    setAdminList(AdminList)
    setSuggestedTool(SuggestedTool)
  }, [])

  return (
    <div>
      {/* About brand header */}
      {introBlog && (
        <div className='p-6'>
          <AboutCard blog={introBlog} />
        </div>
      )}

      {/* On the site */}
      <div className='flex flex-col gap-y-8 p-12 bg-white'>
        <h1 className='text-3xl font-normal'>On this site</h1>
        <p>
          Explore our archive of content, covering subjects across the web development stack. Find
          the latest news and content on our{' '}
          <Link href={'/blog'} className='link'>
            blog
          </Link>
          , see the latest{' '}
          <Link href={'/articles'} className='link'>
            articles
          </Link>
          , and discover content by groups on the{' '}
          <Link href={'/explore'} className='link'>
            explore
          </Link>{' '}
          page.
        </p>
        <p>
          For complete courses on key web development topics, check out{' '}
          <Link href={'/learn'} className='link'>
            Learn
          </Link>
          . Developed by industry experts, these courses take you right through a subject. They are
          structured to allow you to just dip into one or two modules of interest too.
        </p>
        <p>
          Want some grab and go code? Our{' '}
          <Link href={'/patterns'} className='link'>
            Patterns
          </Link>{' '}
          break down common web development requirements. Whether you want to understand how to
          approach a certain UI component, or need to know how to copy an image to the{' '}
          <Link href={'/patterns/clipboard'} className='link'>
            clipboard
          </Link>
          , you’ll find a solution there.
        </p>
        <p>
          To help you make a case for work on UI or Performance, we have{' '}
          <Link href={'/case-studies'} className='link'>
            case studies
          </Link>{' '}
          . Find out how other companies have used metrics such as Core Web Vitals to see real
          results. And, if that’s quite enough reading for one day we also have a great archive of{' '}
          <Link href={'/shows'} className='link'>
            podcasts and shows
          </Link>
          .
        </p>
        <p>
          We believe that a web with multiple browser engines is important, and that web sites and
          applications should work well no matter which browser your visitors use. We know that you
          care about that too, and so content on this site should have cross-browser status clearly
          explained. You’ll see that many articles have a component showing browser support—the data
          comes from our friends at MDN, via the Browser Compat Data project that powers the data on
          MDN pages.
        </p>
      </div>

      {/* The team */}

      <div className='flex flex-col gap-6 p-6 items-center bg-white border-t border-gray-200'>
        <h1 className='text-3xl font-normal'>The team</h1>
        <p className='text-lg'>This site is brought to you by the Chrome DevRel team led by:</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {adminList?.map((item) => {
            return <AdminCard key={item.id} admin={item} />
          })}
        </div>
      </div>

      {/* Chrome Introduce */}
      {suggestedTool ? (
        <div className='flex flex-col items-center gap-6 p-12'>
          <Image src={suggestedTool.image} alt={suggestedTool.image} width={236} height={144} />
          <p className='text-3xl font-normal text-center'>{suggestedTool.title}</p>
          <p className='text-center'>{suggestedTool.content}</p>
          <button className='px-4 py-1 bg-white rounded-sm transition duration-200 hover:bg-blue-100'>
            <Link
              href={suggestedTool.btn.link}
              className='text-sm font-medium uppercase text-blue-700'
            >
              {suggestedTool.btn.content}
            </Link>
          </button>
        </div>
      ) : null}

      {/* contact */}
      <div className='grid grid-cols-1 gap-12 p-6 sm:grid-cols-2 bg-white'>
        <div className='flex flex-col gap-6 items-center'>
          <RiErrorWarningFill size={50} />
          <h3 className='text-xl font-normal'>Spotted an error?</h3>
          <p className='text-center'>
            Please{' '}
            <Link href={''} className='link'>
              raise an issue
            </Link>{' '}
            with information about the page and what&apos;s wrong, and we&apos;ll take a look.
          </p>
        </div>
        <div className='flex flex-col gap-6 items-center'>
          <MdModeEdit size={50} />
          <h3 className='text-xl font-normal'>Want to contribute?</h3>
          <p className='text-center'>
            We feature articles and larger sections of content from external authors. If you would
            like to pitch an article,{' '}
            <Link href={''} className='link'>
              contact Rachel Andrew
            </Link>{' '}
            with an outline of your idea.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutPage
