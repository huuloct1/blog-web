import React from 'react'

export type PageTitleType = {
  title: string
  content: string
}

type propsType = {
  pageTitle: PageTitleType
}

const PageTitle: React.FC<propsType> = ({ pageTitle }) => {
  return (
    <div className='flex flex-col gap-4 p-6 items-center sm:p-12 lg:p-20'>
      <h1 className='text-3xl font-normal'>{pageTitle.title}</h1>
      <p className='text-lg text-center'>{pageTitle.content}</p>
    </div>
  )
}

export default PageTitle
