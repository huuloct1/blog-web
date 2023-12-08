import Image from 'next/image'
import React from 'react'
import { TBlog } from '../TypeAlias'

type props = {
  blog: TBlog
}

const BlogCard: React.FC<props> = (props) => {
  const { blog } = props
  return (
    <div className='flex flex-col items-center justify-between mx-auto border border-gray-300 rounded-lg'>
      <div>
        <div className='h-auto w-full relative'>
          <Image
            src={blog.image}
            alt={blog.title}
            width='800'
            height='600'
            className='rounded-t-lg'
          />
        </div>
        <div className='flex flex-col gap-4 p-3'>
          <h1 className='text-2xl font-normal'>{blog.title}</h1>
          <p>{blog.subContent}</p>
          <div className='flex flex-wrap gap-2'>
            {blog.category.map((item, index) => (
              <span
                key={index}
                className='w-fit py-1 px-2 text-sm font-normal bg-gray-100 rounded-md'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-2 p-3 text-xs border-t border-gray-300'>
        <p className='text-end'>{blog.author}</p>
        <p className='text-end'>{blog.createdAt}</p>
      </div>
    </div>
  )
}
export default BlogCard
