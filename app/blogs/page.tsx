'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BlogType } from './BlogCard'
import BlogCard from './BlogCard'
import { FaCaretUp } from 'react-icons/fa6'
// import { fetchBlogList } from '../lib/data'
import PageTitle, { PageTitleType } from '../ui/components/PageTitle'

const BlogsPage: React.FC = () => {
  const [blogList, setBlogList] = useState<BlogType[]>()
  const [showMore, setShowMore] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    const lessBlogList = Blogs.slice(0, 12)
    const moreBlogList = Blogs.slice(0, 18)
    if (showMore) setBlogList(lessBlogList)
    else setBlogList(moreBlogList)
  }, [showMore])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {/* title */}
      <PageTitle pageTitle={BlogTitle} />

      {/* container */}
      <div className='pb-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-white'>
          {blogList?.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>

        <button
          onClick={toggleShowMore}
          className='flex gap-1 items-center mx-auto py-1 px-2 uppercase font-normal text-sm text-blue-700 hover:bg-blue-100 rounded-md duration-100'
        >
          {showMore ? (
            'More...'
          ) : (
            <>
              <FaCaretUp />
              Less
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default BlogsPage

const BlogTitle: PageTitleType = {
  title: 'Blog',
  content: 'Our latest news, updates, and stories for developers',
}

export const Blogs: BlogType[] = [
  {
    id: 1,
    title: 'New to the web platform in November',
    category: ['Blog'],
    createdAt: 'November 30, 2023',
    author: 'Rachel Andrew',
    content:
      'Discover some of the interesting features that have landed in stable and beta web browsers during November 2023.',
    subContent:
      'Discover some of the interesting features that have landed in stable and beta web browsers during November 2023.',
    image: 'https://web.dev/static/blog/web-platform-11-2023/hero.jpg',
  },
  {
    id: 2,
    title: 'Community highlight: Ramona Schwering',
    category: ['Blog'],
    createdAt: 'November 20, 2023',
    author: 'Jecelyn Yeen',
    content:
      'Ramona Schwering is a software engineer and Google Developer Expert with background in quality assurance.',
    subContent:
      'Ramona Schwering is a software engineer and Google Developer Expert with background in quality assurance.',
    image:
      'https://web.dev/static/blog/community-highlights/ramona-schwering/image/Ramona-Schwering_SW101116.jpeg',
  },
  {
    id: 3,
    title: 'Compression Streams are now supported on all browsers',
    category: ['Blog', 'JavaScript'],
    createdAt: 'November 2, 2023',
    author: 'Thomas Steiner',
    content:
      'The Compression Streams API is for compressing and decompressing streams of data using the gzip or deflate (or deflate-raw) formats. Using the built-in compression of the Compression Streams API,...',
    subContent:
      'The Compression Streams API is for compressing and decompressing streams of data using the gzip or deflate (or deflate-raw) formats. Using the built-in compression of the Compression Streams API,...',
    image: 'https://web.dev/static/images/social-wide.jpg',
  },
  {
    id: 4,
    title: 'Introducing Learn Performance',
    category: ['Blog'],
    createdAt: 'November 1, 2023',
    author: 'Jeremy Wagner',
    content:
      'Today we are launching Learn Performance—the next course in our series to help get you up to speed with modern web development.',
    subContent:
      'Today we are launching Learn Performance—the next course in our series to help get you up to speed with modern web development.',
    image: 'https://web.dev/static/blog/introducing-learn-performance/image/thumbnail.png',
  },
  {
    id: 5,
    title: 'New to the web platform in October',
    category: ['Blog'],
    createdAt: 'October 31, 2023',
    author: 'Rachel Andrew',
    content:
      'Discover some of the interesting features that have landed in stable and beta web browsers during October 2023.',
    subContent:
      'Discover some of the interesting features that have landed in stable and beta web browsers during October 2023.',
    image: 'https://web.dev/static/blog/web-platform-10-2023/hero.png',
  },
  {
    id: 6,
    title: 'Interop 2023 October update',
    category: ['Blog'],
    createdAt: 'October 30, 2023',
    author: 'Rachel Andrew',
    content:
      'Find out about the progress of the Interop 2023 project, and some of the features that have reached interoperability this year.',
    subContent:
      'Find out about the progress of the Interop 2023 project, and some of the features that have reached interoperability this year.',
    image: 'https://web.dev/static/blog/interop2023-update/hero.jpg',
  },
  {
    id: 7,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 8,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 9,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 10,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 11,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 12,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 13,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 14,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 15,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 16,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 17,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 18,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
]

const blogs = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    author: 'John Doe',
    createdAt: '2022-01-15T08:00:00Z',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    tags: ['AI', 'Technology'],
  },
  {
    id: 2,
    title: 'Web Development Trends in 2022',
    author: 'Jane Smith',
    createdAt: '2022-02-05T10:30:00Z',
    content: 'Nulla facilisi. Ut fringilla orci vel justo...',
    tags: ['Web Development', 'Trends'],
  },
  {
    id: 3,
    title: 'The Impact of Cryptocurrencies on Finance',
    author: 'Alice Johnson',
    createdAt: '2022-03-10T12:15:00Z',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    tags: ['Cryptocurrency', 'Finance'],
  },
  {
    id: 4,
    title: 'Exploring the World of Quantum Computing',
    author: 'Bob Williams',
    createdAt: '2022-04-05T09:45:00Z',
    content: 'Quisque sit amet justo eu justo feugiat eleifend...',
    tags: ['Quantum Computing', 'Technology'],
  },
  {
    id: 5,
    title: 'The Art of Design Thinking in Product Development',
    author: 'Eva Davis',
    createdAt: '2022-05-20T14:30:00Z',
    content: 'In hac habitasse platea dictumst. Suspendisse potenti...',
    tags: ['Design Thinking', 'Product Development'],
  },
  {
    id: 6,
    title: 'The Evolution of Mobile Technology',
    author: 'Sophie Miller',
    createdAt: '2022-06-15T11:10:00Z',
    content: 'Fusce sit amet sapien eget dui hendrerit vehicula...',
    tags: ['Mobile Technology', 'Innovation'],
  },
  {
    id: 7,
    title: 'Understanding Machine Learning Algorithms',
    author: 'Daniel Brown',
    createdAt: '2022-07-02T08:45:00Z',
    content: 'Vestibulum quis feugiat felis. Aliquam vel efficitur metus...',
    tags: ['Machine Learning', 'Algorithms'],
  },
  {
    id: 8,
    title: 'The Impact of Social Media on Society',
    author: 'Mia Johnson',
    createdAt: '2022-08-18T14:20:00Z',
    content: 'Duis eget tellus a libero pellentesque sagittis...',
    tags: ['Social Media', 'Society'],
  },
  {
    id: 9,
    title: 'Advancements in Renewable Energy Technologies',
    author: 'David Robinson',
    createdAt: '2022-09-05T13:30:00Z',
    content: 'Praesent auctor luctus sem, id lobortis quam pharetra eu...',
    tags: ['Renewable Energy', 'Technology'],
  },
  {
    id: 10,
    title: 'The Future of Space Exploration',
    author: 'Emma Wilson',
    createdAt: '2022-10-22T10:15:00Z',
    content: 'Nullam nec venenatis nisl. Suspendisse potenti...',
    tags: ['Space Exploration', 'Science'],
  },
  {
    id: 11,
    title: 'The Revolution of Artificial Neural Networks',
    author: 'Sophia Turner',
    createdAt: '2022-12-08T09:00:00Z',
    content: 'Curabitur luctus ligula ac ligula viverra, ac suscipit tortor aliquet...',
    tags: ['Artificial Neural Networks', 'Machine Learning'],
  },
  {
    id: 12,
    title: 'Emerging Trends in Augmented Reality',
    author: 'Oliver Davis',
    createdAt: '2023-01-05T14:30:00Z',
    content: 'Sed auctor ligula vel justo interdum, vel facilisis mi commodo...',
    tags: ['Augmented Reality', 'Technology'],
  },
  {
    id: 13,
    title: 'Challenges and Opportunities in Cybersecurity',
    author: 'Isabella Wright',
    createdAt: '2023-02-20T11:45:00Z',
    content: 'Vivamus ut lacus a libero tincidunt accumsan a non ligula...',
    tags: ['Cybersecurity', 'Security'],
  },
  {
    id: 14,
    title: 'The Future of Biotechnology',
    author: 'Benjamin Harris',
    createdAt: '2023-03-10T08:15:00Z',
    content: 'Quisque ut lacus quis elit tincidunt cursus. Nam ac nisl...',
    tags: ['Biotechnology', 'Science'],
  },
  {
    id: 15,
    title: 'Innovations in Quantum Cryptography',
    author: 'Evelyn Rodriguez',
    createdAt: '2023-04-02T16:20:00Z',
    content: 'Fusce at sapien non risus rhoncus eleifend at ac dui...',
    tags: ['Quantum Cryptography', 'Security'],
  },
  {
    id: 16,
    title: 'The Impact of Blockchain on Finance',
    author: 'William Baker',
    createdAt: '2023-05-18T13:10:00Z',
    content: 'Pellentesque eu urna non lectus egestas vestibulum at id libero...',
    tags: ['Blockchain', 'Finance'],
  },
  {
    id: 17,
    title: 'The Role of Data Analytics in Business Growth',
    author: 'Ava Martinez',
    createdAt: '2023-06-05T10:30:00Z',
    content: 'Vivamus auctor ante vitae suscipit euismod. Nulla tincidunt purus...',
    tags: ['Data Analytics', 'Business'],
  },
  {
    id: 18,
    title: 'The Impact of 5G Technology on Communication',
    author: 'Michael Thompson',
    createdAt: '2022-11-20T16:40:00Z',
    content: 'Pellentesque vel risus quis sem volutpat sagittis...',
    tags: ['5G Technology', 'Communication'],
  },
  {
    id: 19,
    title: 'The Rise of E-commerce in the Digital Age',
    author: 'Samuel White',
    createdAt: '2022-12-01T17:20:00Z',
    content: 'Integer id vehicula eros. Sed rhoncus metus nec nulla sodales...',
    tags: ['E-commerce', 'Digital'],
  },
  {
    id: 20,
    title: 'The Impact of Virtual Reality on Education',
    author: 'Alex Johnson',
    createdAt: '2022-03-20T15:45:00Z',
    content: 'Pellentesque habitant morbi tristique senectus et netus...',
    tags: ['Virtual Reality', 'Education'],
  },
]
