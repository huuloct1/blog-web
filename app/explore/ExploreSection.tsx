import React from 'react'
import ExploreCard from './ExploreCard'
import { ExploreDataType } from './page'
import Link from 'next/link'

type PropsType = {
  exploreData: ExploreDataType
  //size card to responsive
  itemSize: 'sm' | 'md' | 'lg' | 'full'
}

const ExploreSection: React.FC<PropsType> = ({ exploreData, itemSize }) => {
  let responsiveClass = ''
  switch (itemSize) {
    case 'sm':
      responsiveClass = 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      break
    case 'md':
      responsiveClass = 'md:grid-cols-2 lg:grid-cols-3'
      break
    case 'lg':
      responsiveClass = 'md:grid-cols-2'
      break
    case 'full':
      responsiveClass = 'lg:flex'
      break
  }

  return (
    <div className='p-6'>
      <p className='pb-6 text-4xl'>{exploreData?.title}</p>
      <div className={`grid grid-cols-1 ${responsiveClass} gap-4`}>
        {exploreData?.arrayCardData?.map((item) => {
          return (
            <div key={item.id}>
              <ExploreCard cardData={item} className={itemSize} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ExploreSection
