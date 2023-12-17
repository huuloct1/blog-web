'use client'

import { BlogType } from '@/app/TypeAlias'
import React, { useEffect, useState } from 'react'
import { Blogs } from '../page'
import { stringify } from 'querystring'

type propsType = {
  params: { blogId: string }
}

const BlogDetail: React.FC<propsType> = ({ params }) => {
  const [blog, setBlog] = useState<BlogType>()

  useEffect(() => {
    const data = Blogs.find((item) => item.id === Number.parseInt(params.blogId))
    setBlog(data)
  }, [params.blogId])

  return <div>{blog && stringify(blog)}</div>
}
export default BlogDetail
