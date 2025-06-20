import { NavLink, Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from './components/page/Footer.jsx';
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="pt-20">
       <Outlet></Outlet>
    </div>
       <NavLink to="/userAccess"className={({ isActive }) =>isActive? "text-green-600 underline font-semibold":"text-gray-700 hover:text-red-800"}>Account</NavLink>  
     <Footer></Footer>
    </>
  )
}

export default App