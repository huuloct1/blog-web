'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BlogType } from '../TypeAlias'
import BlogCard from './BlogCard'
import { FaCaretUp } from 'react-icons/fa6'
// import { fetchBlogList } from '../lib/data'
import PageTitle, { PageTitleType } from '../components/PageTitle'

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
