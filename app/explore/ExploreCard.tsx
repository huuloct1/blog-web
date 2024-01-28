import Image from 'next/image'
import React from 'react'
import { CardDataType } from './page'
import Link from 'next/link'

type PropsType = {
  cardData: CardDataType
  className?: string
}

const ExploreCard: React.FC<PropsType> = ({ cardData, className }) => {
  return (
    <div
      className={`w-full min-h-[350px] border border-gray-300 flex flex-col ${
        className === 'full' && 'md:flex-row md:justify-around'
      }`}
    >
      <Link href={`/explore/${cardData.link}`}>
        <div className='py-6 w-fit'>
          <Image src={cardData.image} alt='CoreWebVitals_cover' width={600} height={400} />
        </div>
      </Link>
      <div className={`flex flex-col gap-3 px-4 w-fit ${className === 'full' && 'pt-4'}`}>
        <Link href={`/explore/${cardData.link}`}>
          <p className='text-2xl'>{cardData.title}</p>
        </Link>
        <p className='pb-4'>{cardData.content}</p>
      </div>
    </div>
  )
}
export default ExploreCard
