import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { BlogType } from '@/app/TypeAlias'

type PropsType = {
  blog: BlogType
  alignFull?: boolean
  className?: string
}

const BlogCard = (props: PropsType) => {
  const { blog, alignFull, className } = props

  return (
    <div className={`flex flex-col py-4 bg-white ${className}`}>
      <Link href={blog.link || ''}>
        <Image src={blog.image} alt={blog.image} width={800} height={600} className='pb-4' />
      </Link>
      <div className={`flex-1 flex flex-col gap-2 px-4 justify-between ${alignFull && 'px-0'}`}>
        <Link href={blog.link || ''} className='link text-2xl hover:underline'>
          {blog.title}
        </Link>
        <span>{blog.subContent}</span>
        <div className='pb-2'>
          <Button text={blog.action} to={blog.link} />
        </div>
      </div>
    </div>
  )
}
export default BlogCard
