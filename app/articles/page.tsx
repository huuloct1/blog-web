'use client'

import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import { ArticleType } from '../TypeAlias'
import ArticlesCard from './ArticlesCard'
import { FaCaretUp } from 'react-icons/fa6'
import PageList from './PageList'
import PageTitle, { PageTitleType } from '../components/PageTitle'

const ArticlesPage: React.FC = () => {
  const [articleList, setArticleList] = useState<ArticleType[]>()
  const [showMore, setShowMore] = useState<boolean>(true)
  const [pageList, setPageList] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  const blogPerPage = 4

  useEffect(() => {
    let maxPage = 0
    let list = []
    if (Articles) {
      maxPage = Math.ceil(Articles.length / blogPerPage)
    }
    if (maxPage != 0) {
      for (let i = 1; i <= maxPage; i++) {
        list.push(i)
      }
    }
    setPageList(list)
  }, [])

  useEffect(() => {
    setArticleList(Articles.slice(blogPerPage * (currentPage - 1), currentPage * blogPerPage))
  }, [currentPage])

  const handleCurrentPageChange = (value: number) => {
    setCurrentPage(value)
  }

  return (
    <div>
      {/* Intro header */}
      <div className='p-6 text-xl text-white bgColorPrimary'>
        <span>Articles</span>
      </div>

      {/* title */}
      <PageTitle pageTitle={ArticlesTitle} />

      {/* container */}
      <div className='pb-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-white'>
          {articleList?.map((item) => {
            return <ArticlesCard key={item.id} article={item} />
          })}
        </div>

        {/* page list */}
        <PageList
          pageList={pageList}
          currentPage={currentPage}
          onCurrentPageChange={handleCurrentPageChange}
        />
      </div>
    </div>
  )
}
export default ArticlesPage

const ArticlesTitle: PageTitleType = {
  title: 'Articles',
  content: 'Discover everything you need to know about building for the modern web. ',
}

export const Articles: ArticleType[] = [
  {
    id: 1,
    title: 'Baseline',
    outsideContent:
      'Web Platform Baseline brings clarity to information about browser support for web platform features.',
    content:
      'Web Platform Baseline brings clarity to information about browser support for web platform features.',
    image: 'https://web.dev/static/baseline/image/thumbnail.png',
  },
  {
    id: 2,
    title: "It's time to lazy-load offscreen iframes!",
    outsideContent:
      'This post covers the loading attribute and how it can be used to control the loading of iframes.',
    content:
      'This post covers the loading attribute and how it can be used to control the loading of iframes.',
    image:
      'https://web.dev/static/articles/iframe-lazy-loading/image/data-savings-using-ifram-721849ff3b329.png',
  },
  {
    id: 3,
    title: "ResizeObserver: it's like document.onresize for elements",
    outsideContent:
      "`ResizeObserver` notifies you when an element's content rectangle changes size so that you can react accordingly.",
    content: '',
    image:
      'https://web.dev/static/articles/resize-observer/image/a-diagram-the-css-box-mo-f526084ad034e.png',
  },
  {
    id: 4,
    title: 'Avoid invisible text during font loading',
    outsideContent:
      'Fonts are often large files that take a while to load. To deal with this, some browsers hide text until the font loads (the "flash of invisible text"). If you&apos;re optimizing for performance, you&apos;ll want to avoid the "flash of invisible text" and show',
    content: '',
    image: 'https://web.dev/static/baseline/image/thumbnail.png',
  },
  {
    id: 5,
    title: 'Optimize the encoding and transfer size of text-based assets',
    outsideContent:
      'Next to eliminating unnecessary resource downloads, the best thing you can do to improve page load speed is to minimize the overall',
    content: '',
    image:
      'https://web.dev/static/articles/optimizing-content-efficiency-optimize-encoding-and-transfer/image/resource-size-fig.png',
  },
  {
    id: 6,
    title: 'The inert attribute',
    outsideContent:
      'The inert property is a global HTML attribute that simplifies how to remove and restore user input events for an element, including',
    content: '',
    image: 'https://web.dev/static/baseline/image/thumbnail.png',
  },
  {
    id: 7,
    title: 'Preload modules',
    outsideContent:
      'Module preload offers a way of declaratively loading JavaScript modules ahead of time.',
    content: '',
    image: 'https://web.dev/static/baseline/image/thumbnail.png',
  },
  {
    id: 8,
    title: 'OffscreenCanvas—speed up your canvas operations with a web worker',
    outsideContent:
      'This document explains how you can use the OffscreenCanvas API to achieve performance improvements when rendering',
    content: '',
    image: 'https://web.dev/static/baseline/image/thumbnail.png',
  },
  {
    id: 9,
    title: 'First Contentful Paint (FCP)',
    outsideContent:
      'This post introduces the First Contentful Paint (FCP) metric and explains how to measure it',
    content: '',
    image: 'https://web.dev/static/articles/fcp/image/fcp-timeline-googlecom.png',
  },
  {
    id: 10,
    title: 'Largest Contentful Paint (LCP)',
    outsideContent:
      'This post introduces the Largest Contentful Paint (LCP) metric and explains how to measure it',
    content: '',
    image: 'https://web.dev/static/articles/lcp/image/good-lcp-values-are-25-s-28836be83d1aa.svg',
  },
  {
    id: 11,
    title: 'Content delivery networks (CDNs)',
    outsideContent:
      'This article provides a comprehensive overview of content delivery networks (CDNs). In addition, it explains how to',
    content: '',
    image:
      'https://web.dev/static/articles/content-delivery-networks/image/comparison-connection-se-9ca81d466f08f.png',
  },
  {
    id: 12,
    title: 'What makes for a good sign-out experience?',
    outsideContent:
      'Practical developer guidance about what to do when a user logs out of the website.',
    content: '',
    image: 'https://web.dev/static/articles/sign-out-best-practices/image/thumbnail.jpg',
  },
  {
    id: 13,
    title: 'Back/forward cache',
    outsideContent:
      "Learn how to optimize your pages for instant loads when using the browser's back and forward buttons.",
    content: '',
    image: 'https://web.dev/static/articles/bfcache/image/thumbnail.png',
  },
  {
    id: 14,
    title: 'Total Blocking Time (TBT)',
    outsideContent:
      'This post introduces the Total Blocking Time (TBT) metric and explains how to measure it',
    content: '',
    image: 'https://web.dev/static/articles/tbt/image/a-tasks-timeline-the-mai-72582d2e9e8a8.svg',
  },
  {
    id: 15,
    title: 'Time to Interactive (TTI)',
    outsideContent:
      'This post introduces the Time to Interactive (TTI) metric and explains how to measure it',
    content: '',
    image: 'https://web.dev/static/articles/tti/image/a-page-load-timeline-show-762f93f25ad4b.svg',
  },
  {
    id: 16,
    title: 'Optimizing resource loading with the Fetch Priority API',
    outsideContent:
      'The Fetch Priority API indicates the relative priority of resources to the browser. It can enable optimal loading and improve Core Web',
    content: '',
    image: 'https://web.dev/static/articles/fetch-priority/image/thumbnail.jpg',
  },
  {
    id: 17,
    title: 'Manually diagnose slow interactions in the lab',
    outsideContent:
      "You've looked through your field data, and it turns out that you have some slow interactions. The next step is to learn more about how to manually test those interactions, and identify the causes behind them.",
    content: '',
    image:
      'https://web.dev/static/articles/manually-diagnose-slow-interactions-in-the-lab/image/thumbnail.jpg',
  },
  {
    id: 18,
    title: 'The :user-valid and :user-invalid pseudo-classes',
    outsideContent:
      'About the :user-valid and :user-invalid pseudo-classes and how to use them to improve the user experience of input validation.',
    content: '',
    image:
      'https://web.dev/static/articles/user-valid-and-user-invalid-pseudo-classes/image/behzad-ghaffarian-1FkuY2PReLc-unsplash-cropped.jpg',
  },
  {
    id: 19,
    title: 'CSS subgrid',
    outsideContent:
      'Subgrid enables grid shareability, allowing nested grids to align to ancestors and siblings.',
    content: '',
    image: 'https://web.dev/static/articles/loading-ads-page-speed/image/thumbnail.jpg',
  },
  {
    id: 20,
    title: 'The nuances of base64 encoding strings in JavaScript',
    outsideContent:
      'Understand and avoid common problems when applying base64 encoding and decoding to strings.',
    content: '',
    image: 'https://web.dev/static/articles/base64-encoding/image/thumbnail.jpg',
  },
]
