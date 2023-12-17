'use client'

import { BlogType } from '@/app/TypeAlias'
import React, { useEffect, useState } from 'react'
import { Articles } from '../page'
import { stringify } from 'querystring'

type propsType = {
  params: { articleId: string }
}

const BlogDetail: React.FC<propsType> = ({ params }) => {
  const [article, setArticle] = useState<BlogType>()

  useEffect(() => {
    const data = Articles.find((item) => item.id === Number.parseInt(params.articleId))
    setArticle(data)
  }, [params.articleId])

  return <div>{article && stringify(article)}</div>
}
export default BlogDetail
