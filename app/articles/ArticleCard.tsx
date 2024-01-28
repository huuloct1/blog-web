import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export type ArticleType = {
  id: number
  title: string
  outsideContent: string
  content: string
  image: string
}

type props = {
  article: ArticleType
}

const ArticleCard: React.FC<props> = ({ article }) => {
  const router = useRouter()

  const onClickArticle = () => {
    router.push(`/articles/${article.id}`)
  }
  return (
    <div className='flex flex-col items-center justify-between mx-auto border border-gray-300 rounded-lg'>
      <div>
        <div onClick={onClickArticle} className='h-auto w-full relative cursor-pointer'>
          <Image
            src={article.image}
            alt={article.title}
            width='800'
            height='600'
            className='rounded-t-lg'
          />
        </div>
        <div className='flex flex-col gap-4 p-3'>
          <h1 onClick={onClickArticle} className='text-2xl font-normal cursor-pointer'>
            {article.title}
          </h1>
          <p>{article.outsideContent}</p>
        </div>
      </div>
    </div>
  )
}
export default ArticleCard
