'use client'

import React, { useEffect, useState } from 'react'
import { TBlog } from '../TypeAlias'
import { Blogs } from '../Data/FakeData'
import BlogCard from './BlogCard'
import { FaCaretUp } from 'react-icons/fa6'

const BlogsPage: React.FC = () => {
  const [blogList, setBlogList] = useState<TBlog[]>()
  const [showMore, setShowMore] = useState<boolean>(true)

  useEffect(() => {
    const lessBlogList = Blogs.slice(0, 12)
    const moreBlogList = Blogs.slice(0, 18)
    if (showMore) setBlogList(lessBlogList)
    else setBlogList(moreBlogList)
  }, [showMore])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {/* title */}
      <div className='flex flex-col gap-4 p-6 items-center sm:p-12 lg:p-20'>
        <h1 className='text-3xl font-normal'>Blog</h1>
        <p className='text-lg text-center'>Our latest news, updates, and stories for developers</p>
      </div>

      {/* container */}
      <div className='pb-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-white'>
          {blogList?.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>
        {showMore ? (
          <button
            onClick={toggleShowMore}
            className='flex mx-auto py-1 px-2 uppercase font-normal text-sm text-blue-700 hover:bg-blue-100 rounded-md duration-100'
          >
            More...
          </button>
        ) : (
          <button
            onClick={toggleShowMore}
            className='flex gap-1 items-center mx-auto py-1 px-2 uppercase font-normal text-sm text-blue-700 hover:bg-blue-100 rounded-md duration-100'
          >
            <FaCaretUp />
            Less
          </button>
        )}
      </div>
    </div>
  )
}
export default BlogsPage
