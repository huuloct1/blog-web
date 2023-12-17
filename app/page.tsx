'use client'

import React, { useEffect, useState } from 'react'
import AboutCard from './components/AboutCard'
import BlogCard from './components/BlogCard'
import TopicRow from './components/TopicRow'
import { NewBlogs, SuggestedBlogs, TopicRows } from './Data/FakeData'
import Form from './components/Form'
import { BlogType, TTopicRow } from './TypeAlias'

const HomePage: React.FC = () => {
  const [introBlog, setIntroBlog] = useState<BlogType>()
  const [suggestedBlogList, setSuggestedBlogList] = useState<BlogType[]>()
  const [newBlogList, setNewBlogList] = useState<BlogType[]>()
  const [topicRowList, setTopicRowList] = useState<TTopicRow[]>()

  useEffect(() => {
    setIntroBlog(IntroBlogs[0])
    setSuggestedBlogList(SuggestedBlogs)
    setNewBlogList(NewBlogs)
    setTopicRowList(TopicRows)
  }, [])

  return (
    <div>
      {/* Intro header */}
      <div className='p-6 text-white bgColorPrimary'>
        <span>Guidance to build modern web experiences that work on any browser.</span>
      </div>

      {/* About brand header */}
      {introBlog && (
        <div className='p-6'>
          <AboutCard blog={introBlog} />
        </div>
      )}

      {/* Dev site */}
      <div className='flex flex-col py-6 px-3 md:flex-row'>
        {suggestedBlogList?.map((item) => {
          return <BlogCard key={item.id} blog={item} className='md:w-1/2' />
        })}
      </div>

      {/* What's new? */}
      <div className='bg-white border border-gray-300'>
        <span className='block p-6 pb-0 text-3xl font-normal'>What&apos;s new?</span>
        <div className='flex py-6 px-3 flex-col md:flex-row'>
          {newBlogList?.map((item) => {
            return <BlogCard key={item.id} blog={item} className='md:w-1/3' />
          })}
        </div>
      </div>

      {/* Topic summary */}
      <div>
        {topicRowList?.map((item) => {
          return item.id % 2 === 1 ? (
            <TopicRow key={item.id} topicRow={item} className='' />
          ) : (
            <TopicRow key={item.id} topicRow={item} className='bg-white' />
          )
        })}
      </div>

      {/* Topic summary */}
      <Form />
    </div>
  )
}
export default HomePage

export const IntroBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Building a better web, together',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/images/home.svg',
    action: 'about dev.web',
    link: '/about',
  },
  {
    id: 2,
    title: 'Guidance from Chrome Developer Relations',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/about/about_1440.png',
  },
]
