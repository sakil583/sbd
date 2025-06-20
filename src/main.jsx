import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/page/Home.jsx';
import Categories from './components/page/Categories.jsx';
import Cart from './components/page/Cart.jsx';
import Login from './components/page/Login.jsx';
import SignUp from './components/page/SignUp.jsx';
import AccessUser from './components/accessUser/AccessUser.jsx';
import AllProduct from './components/accessUser/accessUserPage/AllProduct.jsx';
import BalanceUser from './components/accessUser/accessUserPage/BalanceUser.jsx';
import ShowOrder from './components/accessUser/accessUserPage/ShowOrder.jsx';
import PostProduct from './components/accessUser/accessUserPage/PostProduct.jsx';
import DeliveryOrder from './components/accessUser/accessUserPage/DeliveryOrder.jsx';
import UserAccount from './components/accessUser/accessUserPage/userAccount/UserAccount.jsx';



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"home",element:<Home></Home>},
      {path:"categories",element:<Categories></Categories>},
      {path:"cart",element:<Cart></Cart>},
      {path:"login",element:<Login></Login>},
      {path:"signup",element:<SignUp></SignUp>},
  ]
  },
  {path:"/userAccess",element:<AccessUser/>,
    children:[
      {path:"balanceUser",element:<BalanceUser/>},
      {path:"allProduct",element:<AllProduct/>},
      {path:"postProduct",element:<PostProduct/>},
      {path:"showOrder",element:<ShowOrder/>},
      {path:"deliveryOrder",element:<DeliveryOrder/>},
      {path:"userAccount",element:<UserAccount />},
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
