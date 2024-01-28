import Link from 'next/link'

type PropsType = {
  text?: string
  to?: string
}

const Button = (props: PropsType) => {
  const { text, to } = props
  return (
    <button className='px-4 py-2 w-fit rounded-md bgColorPrimary'>
      <Link href={to || ''} className='text-sm uppercase text-white font-medium'>
        {text}
      </Link>
    </button>
  )
}
export default Button
