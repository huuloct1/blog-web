import Image from 'next/image'
import React from 'react'
import { TBlog } from '../TypeAlias'

type props = {
  article: TBlog
}

const ArticlesCard: React.FC<props> = (props) => {
  const { article } = props
  return (
    <div className='flex flex-col items-center justify-between mx-auto border border-gray-300 rounded-lg'>
      <div>
        <div className='h-auto w-full relative'>
          <Image
            src={article.image}
            alt={article.title}
            width='800'
            height='600'
            className='rounded-t-lg'
          />
        </div>
        <div className='flex flex-col gap-4 p-3'>
          <h1 className='text-2xl font-normal'>{article.title}</h1>
          <p>{article.subContent}</p>
          <div className='flex flex-wrap gap-2'>
            {article.category.map((item, index) => (
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
    </div>
  )
}
export default ArticlesCard
