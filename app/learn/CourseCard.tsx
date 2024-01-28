'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export type CourseType = {
  id: number
  title: string
  createdAt?: string
  author?: string
  content: string
  subContent: string
  image: string
}

type PropsType = {
  course: CourseType
}

const CourseCard: React.FC<PropsType> = ({ course }) => {
  const router = useRouter()

  const onClickCourse = () => {
    router.push(`/learn/${course.id}`)
  }

  return (
    <div className='flex flex-col justify-between mx-auto border border-gray-300 rounded-lg'>
      <div>
        <div onClick={onClickCourse} className='h-auto w-full relative cursor-pointer'>
          <Image
            src={course.image}
            alt={course.title}
            width='400'
            height='300'
            className='rounded-t-lg'
          />
        </div>
        <div className='flex flex-col gap-4 p-3'>
          <h1 onClick={onClickCourse} className='text-2xl font-normal cursor-pointer'>
            {course.title}
          </h1>
          <p>{course.subContent}</p>
          <div className='flex flex-wrap gap-2'>
            <span className='w-fit py-1 px-2 text-sm font-normal bg-purple-800 text-white rounded-md'>
              Course
            </span>
          </div>
        </div>
      </div>
      <Link href={'#'} className='p-3 text-sm uppercase textColorPrimary font-bold'>
        Start Course
      </Link>
    </div>
  )
}
export default CourseCard
