import { BlogType } from '@/app/TypeAlias'
import BlogCard from '../components/BlogCard'

const NewBlogs = () => {
  return (
    <div className='p-6 bg-white border border-gray-300'>
      <span className='block py-6 text-3xl font-normal'>What&apos;s new?</span>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2'>
        {newBlogs?.map((item) => {
          return <BlogCard key={item.id} blog={item} alignFull />
        })}
      </div>
    </div>
  )
}
export default NewBlogs

const newBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Introducing Baseline',
    author: 'Admin',
    content:
      "At Google I/O 2023 we announced Baseline, learn more about this initiative and why we think it's important.",
    image: '/Baseline_cover_1920.png',
    action: 'learn more about Baseline',
    link: '#',
  },
  {
    id: 2,
    title: 'New to the web platform in October.',
    author: 'Admin',
    content:
      'Discover some of the interesting features that landed in stable and beta web browsers during September 2023.',
    image: '/new-to-the-web-oct_960.webp',
    action: "discover what's new",
    link: '#',
  },
  {
    id: 3,
    title: 'The CSS Podcast',
    author: 'Admin',
    content:
      'Follow Una Kravets and Adam Argyle, developer advocates from Google, who gleefully breakdown complex aspects from CSS into disgestible episodes of this podcast.',
    image: '/css-podcast_960.webp',
    action: 'listen now',
    link: '#',
  },
]
