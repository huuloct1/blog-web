'use client'

import React, { useEffect, useState } from 'react'
import AboutCard from './components/AboutCard'
import BlogCard from './components/BlogCard'
import TopicRow from './components/TopicRow'
import { IntroBlogs, NewBlogs, SuggestedBlogs, TopicRows } from './Data/FakeData'
import Form from './components/Form'
import { TBlog, TTopicRow } from './TypeAlias'

const HomePage: React.FC = () => {
  const [introBlog, setIntroBlog] = useState<TBlog>()
  const [suggestedBlogList, setSuggestedBlogList] = useState<TBlog[]>()
  const [newBlogList, setNewBlogList] = useState<TBlog[]>()
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
