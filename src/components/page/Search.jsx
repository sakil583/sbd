import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className='flex w-full'>
      <input type='text' placeholder='Search...' className="w-full"></input>
      <p type='submit' className='border bg-gray-900 text-white p-4 hover:bg-gray-600'><span><CiSearch /></span></p>
    </div>
  )
}

export default Search