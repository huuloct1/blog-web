import { TBlog } from '@/app/TypeAlias'
import Image from 'next/image'
import Link from 'next/link'

type props = {
  blog: TBlog
  className?: string
}

const AboutCard = (props: props) => {
  const { blog, className } = props
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:grid-cols-2'>
      <div className='flex flex-col w-full sm:w-1/2 pr-3 py-3'>
        <Link href={blog.link || ''} className='text-5xl py-4'>
          {blog.title}
        </Link>
        <span className='py-4'>{blog.subContent}</span>
        {blog.action ? (
          <button className='my-4 px-4 py-2 w-fit bgColorPrimary'>
            <Link href={blog.link || ''} className='text-sm uppercase text-white font-medium'>
              {blog.action}
            </Link>
          </button>
        ) : null}
      </div>
      <div className='flex justify-center items-center w-full sm:w-1/2 pl-3 py-3'>
        <Link href={blog.link || ''}>
          <Image src={blog.image} alt={blog.image} width={400} height={280} />
        </Link>
      </div>
    </div>
  )
}
export default AboutCard
