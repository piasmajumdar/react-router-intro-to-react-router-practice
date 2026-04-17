import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'
import Posts from './Components/Posts/Posts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      { path: 'users2', Component: Users2 },
      { path: 'posts', Component: Posts }
    ],
  },
  {
    path: '*',
    element: <h3>Error!!! Not Found in our website</h3>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
