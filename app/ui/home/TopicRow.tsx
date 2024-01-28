import Link from 'next/link'

export type TTopicRow = {
  id: number
  title: string
  subTitle: string
  description: string
  btnLink?: string
  itemList: {
    id: number
    title: string
    description: string
  }[]
}

type props = {
  topicRow: TTopicRow
  className?: string
}

const TopicRow = (props: props) => {
  const { topicRow, className } = props

  return (
    <div className={`border-b border-gray-300 ${className}`}>
      <span className='block p-6 text-center text-3xl font-normal'>{topicRow.title}</span>
      <div className='flex flex-col gap-6 p-6 pt-0 md:flex-row'>
        <div className='flex flex-col gap-2 pr-3 sm:w-full md:w-1/3'>
          <span className='text-3xl font-normal text-center md:text-start'>
            {topicRow.subTitle}
          </span>
          <span className='text-center md:text-start'>{topicRow.description}</span>
          {topicRow.btnLink ? (
            <button className='px-4 py-2 mx-auto mt-4 w-fit bgColorPrimary md:mx-0'>
              <Link href={'#'} className='text-sm uppercase text-white font-medium'>
                {topicRow.btnLink}
              </Link>
            </button>
          ) : null}
        </div>
        <div className='flex flex-wrap gap-6 pl-0 justify-between sm:w-full md:w-2/3 md:pl-3'>
          {topicRow.itemList.map((item) => {
            return (
              <div key={item.id} className='flex flex-col gap-2 w-full sm:w-[46%]'>
                <Link href={'#'} className='text-lg link hover:underline'>
                  {item.title}
                </Link>
                <span>{item.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default TopicRow
