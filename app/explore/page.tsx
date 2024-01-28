import PageTitle, { PageTitleType } from '../ui/components/PageTitle'
import ExploreSection from './ExploreSection'

export type ExploreDataType = {
  id: number
  title: string
  arrayCardData: CardDataType[]
}

export type CardDataType = {
  id: number
  title: string
  content: string
  image: string
  link?: string
}

const ExplorePage = () => {
  return (
    <div>
      <div>
        <PageTitle pageTitle={ExploreTitle} />
      </div>
      <div className='bg-white'>
        <ExploreSection exploreData={ExploreData[0]} itemSize={'sm'} />
        <ExploreSection exploreData={ExploreData[1]} itemSize={'md'} />
        <ExploreSection exploreData={ExploreData[2]} itemSize={'full'} />
        <ExploreSection exploreData={ExploreData[3]} itemSize={'lg'} />
      </div>
    </div>
  )
}
export default ExplorePage

const ExploreTitle: PageTitleType = {
  title: 'Explore',
  content:
    ' Explore our structured learning paths to discover everything you need to know about building for the modern web.',
}

const ExploreData: ExploreDataType[] = [
  {
    id: 1,
    title: 'Performance',
    arrayCardData: [
      {
        id: 1,
        title: 'Core Web Vitals',
        content: 'Essential metrics for a healthy site.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 2,
        title: 'Core Web Vitals',
        content: 'Essential metrics for a healthy site.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 3,
        title: 'Core Web Vitals',
        content: 'Essential metrics for a healthy site.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 4,
        title: 'Core Web Vitals',
        content: 'Essential metrics for a healthy site.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Build excellent websites',
    arrayCardData: [
      {
        id: 1,
        title: 'Progressive Web App',
        content: 'Capabilities that enable app experiences, built and deployed on the web.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 2,
        title: 'Progressive Web App',
        content: 'Capabilities that enable app experiences, built and deployed on the web.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 3,
        title: 'Progressive Web App',
        content: 'Capabilities that enable app experiences, built and deployed on the web.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 4,
        title: 'Progressive Web App',
        content: 'Capabilities that enable app experiences, built and deployed on the web.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Baseline',
    arrayCardData: [
      {
        id: 1,
        title: 'Baseline 2023',
        content: 'The features included in Baseline 2023.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
    ],
  },
  {
    id: 4,
    title: 'Frameworks',
    arrayCardData: [
      {
        id: 1,
        title: 'React',
        content: 'Build performant and progressive React applications.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
      {
        id: 2,
        title: 'Angular',
        content: 'Build performant and progressive React applications.',
        image: 'https://web.dev/static/explore/learn-core-web-vitals/cover.svg',
        link: '#',
      },
    ],
  },
]
