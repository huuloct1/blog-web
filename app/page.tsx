import React from 'react'
import Form from './ui/home/Form'
import IntroCard from './ui/components/IntroCard'
import SuggestedBlogs from './ui/home/SuggestedBlogs'
import NewBlogs from './ui/home/NewBlogs'
import TopicRows from './ui/home/TopicRows'
import { BlogType } from './TypeAlias'

const HomePage: React.FC = () => {
  return (
    <div>
      <IntroCard />
      <SuggestedBlogs />
      <NewBlogs />
      <TopicRows />
      <Form />
    </div>
  )
}
export default HomePage

export const IntroBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Building a better web, together',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/images/home.svg',
    action: 'about dev.web',
    link: '/about',
  },
  {
    id: 2,
    title: 'Guidance from Chrome Developer Relations',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/about/about_1440.png',
  },
]
