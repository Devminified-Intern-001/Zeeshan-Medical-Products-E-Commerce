import { ReactElement } from 'react'
import About from '../Page/About'
import Checkout from '../Page/Checkout'
import Home from '../Page/Home'
import Landing from '../Page/Landing'
import Login from '../Page/Login'
import Product from '../Page/Product'
import Profile from '../Page/Profile'
import ShopItem from '../Page/ShopItem'
import Signup from '../Page/Signup'
import { Outlet} from 'react-router-dom'
interface RouteObject {
    path: string;
    element:ReactElement
    children?:RouteObject[]
}
export const publicRoutes: RouteObject[] =[
    {
        path: "/",
        element: <Outlet />,
        children: [
          {
            path: "/About",
            element: <About/> ,
          },
          {
            path: "/Checkout",
            element: <Checkout/> ,
          },
          {
            path: "/Home",
            element: <Home/> ,
          },
          {
            path: "/Landing",
            element: <Landing/> ,
          },
          {
            path: "/Login",
            element: <Login/> ,
          },
          {
            path: "/Product",
            element: <Product/> ,
          },
          {
            path: "/Profile",
            element: <Profile/> ,
          },
          {
            path: "/ShopItem",
            element: <ShopItem/> ,
          },
          {
            path: "/Signup",
            element: <Signup/> ,
          },
          
          
        ],
      },
]
