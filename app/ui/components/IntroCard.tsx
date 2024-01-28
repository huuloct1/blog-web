import { BlogType } from '@/app/TypeAlias'
import Image from 'next/image'
import Link from 'next/link'

// type PropsType = {
//   blog: BlogType
//   className?: string
// }

const IntroCard = () => {
  return (
    <div className='p-6 flex flex-col md:flex-row-reverse md:grid-cols-2'>
      {/* Image */}
      <div className='flex justify-center items-center w-full pl-3 py-3 md:w-1/2'>
        <Link href={IntroArticle.link || ''}>
          <Image src={IntroArticle.image} alt={IntroArticle.image} width={400} height={280} />
        </Link>
      </div>

      {/* Container */}
      <div className='flex flex-col w-full pr-3 pt-3 md:w-1/2'>
        <Link href={IntroArticle.link || ''} className='text-5xl py-4'>
          {IntroArticle.title}
        </Link>
        <span className='py-4'>{IntroArticle.content}</span>
        {IntroArticle.action && (
          <button className='mt-4 px-4 py-2 w-fit bgColorPrimary'>
            <Link
              href={IntroArticle.link || ''}
              className='text-sm uppercase text-white font-medium'
            >
              {IntroArticle.action}
            </Link>
          </button>
        )}
      </div>
    </div>
  )
}
export default IntroCard

const IntroArticle: BlogType = {
  id: 1,
  title: 'Building a better web, together',
  author: 'Admin',
  createdAt: '2022-01-15T08:00:00Z',
  content:
    'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
  image: '/home.svg',
  action: 'about dev.web',
  link: '/about',
}
