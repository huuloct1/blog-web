import { BlogType } from '@/app/TypeAlias'
import BlogCard from '../components/BlogCard'

const SuggestedBlogs = () => {
  return (
    <div className='p-6 flex flex-col gap-6 md:flex-row'>
      {suggestedBlogs?.map((item) => {
        return (
          <BlogCard
            key={item.id}
            blog={item}
            className='border border-gray-300 rounded-lg md:w-1/2'
          />
        )
      })}
    </div>
  )
}
export default SuggestedBlogs

const suggestedBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Learn how modern web technology can help you succeed',
    author: 'Admin',
    content:
      'Learn about use cases that have been made much easier by innovative new web technologies.',
    image: '/wcdw_1440.webp',
    action: 'get started',
    link: '#',
  },
  {
    id: 2,
    title: 'Case Study',
    author: 'Admin',
    content: 'How Back/forward Cache Helped Yahoo! JAPAN News Increase Revenue by 9% on Mobile.',
    image: '/yahoo-bfcache_1440.webp',
    action: 'learn more',
    link: '#',
  },
]
