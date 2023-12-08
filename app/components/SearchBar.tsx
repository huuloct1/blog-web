import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='flex bg-gray-50 hover:bg-gray-100 rounded-lg'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 p-2 rounded-l-lg' />
      <input
        type='text'
        placeholder='Search...'
        className='h-8 bg-inherit focus:outline-none rounded-r-lg placeholder-gray-500 font-light'
      />
    </div>
  )
}
export default SearchBar
