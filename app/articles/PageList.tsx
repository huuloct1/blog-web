import React, { useState } from 'react'

type propsType = {
  pageList: number[]
  currentPage: number
  onCurrentPageChange: (value: number) => void
}

const PageList: React.FC<propsType> = ({ pageList, currentPage, onCurrentPageChange }) => {
  const handleChangeCurrentPage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement
    onCurrentPageChange(Number.parseInt(target.value))
  }

  return (
    <div className='p-6'>
      <ul className='flex gap-3 text-lg'>
        {pageList?.map((item) => {
          return (
            <li
              key={item}
              value={item}
              onClick={(e) => handleChangeCurrentPage(e)}
              className={`textColorPrimary cursor-pointer ${currentPage === item && 'underline'}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default PageList
