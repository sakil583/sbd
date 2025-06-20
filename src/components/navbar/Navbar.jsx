import { NavLink } from "react-router-dom"
import Search from './../page/Search.jsx';

const Navbar = () => {
  return (
    <>
    {/* sm:justify-between md:justify-around md:space-x-10  */}
    <div className="bg-red-200 w-full fixed text-center flex items-center sm:text-md lg:text-lg p-2 ">

      <div className="w-52 ">
        <h2>Logo</h2>
      </div>

      {/* search */}
      <div className="flex-grow ">
        <Search></Search>
      </div>

      {/* navbar */}
      <div>
        <ul className="flex w-96 text-md sm:space-x-4 md:space-x-10 sm:-mr-16 sm:ml-2 md:mr-6 md:ml-2 lg:space-x-8">
            <li><NavLink to="/home" className={({isActive})=>isActive?"text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>Home</NavLink></li>
            <li><NavLink to="/categories" className={({isActive})=>isActive?"text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>Categories</NavLink></li>
            <li><NavLink to="/cart" className={({isActive})=>isActive?"text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>Cart</NavLink></li>
            <li><NavLink to="/login" className={({isActive})=>isActive?"text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>Login</NavLink></li>
            <li><NavLink to="/signup" className={({isActive})=>isActive?"text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>SignUp</NavLink></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar