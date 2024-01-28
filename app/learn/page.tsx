import BlogCard from '../blogs/BlogCard'
import PageTitle, { PageTitleType } from '../ui/components/PageTitle'
import CourseCard, { CourseType } from './CourseCard'

const LearnPage = () => {
  return (
    <div>
      {/* title */}
      <PageTitle pageTitle={CourseTitle} />

      {/* container */}
      <div className='pb-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-white'>
          {Courses?.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>

        {/* <button
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
        </button> */}
      </div>
    </div>
  )
}
export default LearnPage

const CourseTitle: PageTitleType = {
  title: ' Learn web development',
  content:
    'Explore our growing collection of courses on key web design and development subjects. An industry expert has written each course, helped by members of the Chrome team. Follow the modules sequentially, or dip into the topics you most want to learn about.',
}

export const Courses: CourseType[] = [
  {
    id: 1,
    title: 'Learn Performance',
    content: '',
    subContent:
      'This course is designed for those new to web performance, a vital aspect of the user experience. It covers key web performance concepts and techniques for improving performance.',
    image: 'https://web.dev/static/learn/performance/card.svg',
  },
  {
    id: 2,
    title: 'Learn Performance',
    content: '',
    subContent:
      'This course is designed for those new to web performance, a vital aspect of the user experience. It covers key web performance concepts and techniques for improving performance.',
    image: 'https://web.dev/static/learn/performance/card.svg',
  },
  {
    id: 3,
    title: 'Learn Performance',
    content: '',
    subContent:
      'This course is designed for those new to web performance, a vital aspect of the user experience. It covers key web performance concepts and techniques for improving performance.',
    image: 'https://web.dev/static/learn/performance/card.svg',
  },
  {
    id: 4,
    title: 'Learn Performance',
    content: '',
    subContent:
      'This course is designed for those new to web performance, a vital aspect of the user experience. It covers key web performance concepts and techniques for improving performance.',
    image: 'https://web.dev/static/learn/performance/card.svg',
  },
  {
    id: 5,
    title: 'Learn Performance',
    content: '',
    subContent:
      'This course is designed for those new to web performance, a vital aspect of the user experience. It covers key web performance concepts and techniques for improving performance.',
    image: 'https://web.dev/static/learn/performance/card.svg',
  },
]
