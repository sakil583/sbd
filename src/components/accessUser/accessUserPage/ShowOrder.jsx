import { CiSearch } from "react-icons/ci"

const ShowOrder = () => {
  return (
    <>
        <div className="w-full flex bg-red-200 p-2 rounded-md mt-1">
          <input type="text" placeholder="Search..." className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition">
            <CiSearch size={20}/>
          </button>
        </div>
        <div className="mt-4">   ShowOrder</div>
    </>
  )
}

export default ShowOrder