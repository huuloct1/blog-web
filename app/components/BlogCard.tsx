import { TBlog } from '@/app/TypeAlias'
import Image from 'next/image'
import Link from 'next/link'

type props = {
  blog: TBlog
  className: string
}

const BlogCard = (props: props) => {
  const { blog, className } = props

  return (
    <div
      className={`flex flex-col mx-3 py-4 my-4 bg-white border rounded-lg border-gray-300 ${className}`}
    >
      <Link href={blog.link || ''}>
        <Image src={blog.image} alt={blog.image} width={800} height={600} className='pb-4' />
      </Link>
      <div className='flex-1 flex flex-col justify-between'>
        <Link href={blog.link || ''} className='link text-2xl px-4 py-2 hover:underline'>
          {blog.title}
        </Link>
        <span className='px-4 py-2'>{blog.subContent}</span>
        <button className='m-4 px-4 py-2 w-fit bgColorPrimary'>
          <Link href={blog.link || ''} className='text-sm uppercase text-white font-medium'>
            {blog.action}
          </Link>
        </button>
      </div>
    </div>
  )
}
export default BlogCard
