import { NavLink, Outlet } from 'react-router-dom'
import { MdPublishedWithChanges } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import {  MdHourglassEmpty  } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
const AccessUserNav = () => {
  return (
    <>
    
    <div className='flex justify-around bg-red-200 w-full fixed text-center items-center font-mono p-2' >
          <NavLink to="balanceUser"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}> <span ><HiCurrencyBangladeshi size={30}/></span> </NavLink>
          <NavLink to="allProduct"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}><span><AiOutlineUnorderedList size={30}/></span></NavLink>
          <NavLink to="postProduct"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}><span><FaStoreAlt size={30} /></span></NavLink>
          <NavLink to="showOrder"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}><span>< MdHourglassEmpty  size={30}/></span></NavLink>
          <NavLink to="deliveryOrder"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}><span><MdPublishedWithChanges size={30} /></span></NavLink>
          <NavLink to="userAccount"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}> <span><FaUserCircle size={30} /></span></NavLink>  
    </div>
     <div className="pt-10">
       <Outlet></Outlet> 
 </div>
    </>
  )
}

export default AccessUserNav