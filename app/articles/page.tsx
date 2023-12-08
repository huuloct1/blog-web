'use client'

import React, { useEffect, useState } from 'react'
import { TBlog } from '../TypeAlias'
import { Articles } from '../Data/FakeData'
import ArticlesCard from './ArticlesCard'
import { FaCaretUp } from 'react-icons/fa6'

const ArticlesPage: React.FC = () => {
  const [articleList, setArticleList] = useState<TBlog[]>()
  const [showMore, setShowMore] = useState<boolean>(true)
  const [pageList, setPageList] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    let maxPage = 0
    let list = []
    if (Articles) {
      maxPage = Math.ceil(Articles.length / 4)
    }
    if (maxPage != 0) {
      for (let i = 1; i <= maxPage; i++) {
        list.push(i)
      }
    }
    setPageList(list)
  }, [])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {/* Intro header */}
      <div className='p-6 text-xl text-white bgColorPrimary'>
        <span>Articles</span>
      </div>

      {/* title */}
      <div className='flex flex-col gap-4 p-6 items-center sm:p-12 lg:p-20'>
        <h1 className='text-3xl font-normal'>Articles</h1>
        <p className='text-lg text-center'>
          Discover everything you need to know about building for the modern web.
        </p>
      </div>

      {/* container */}
      <div className='pb-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-white'>
          {articleList?.map((item) => (
            <ArticlesCard key={item.id} article={item} />
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
export default ArticlesPage
