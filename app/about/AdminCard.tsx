import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TProfile } from '../TypeAlias'

type props = {
  admin: TProfile
}

const AdminCard: React.FC<props> = (props) => {
  const { admin } = props
  return (
    <div className='w-full flex flex-col gap-4 items-center p-6 border border-gray-300 rounded-lg'>
      <Image src={admin.image} alt={admin.name} width={180} height={180} className='rounded-full' />
      <Link href={admin.link || ''} className='mt-6 text-2xl'>
        {admin.name}
      </Link>
      <span className='text-center'>{admin.position}</span>
    </div>
  )
}

export default AdminCard
