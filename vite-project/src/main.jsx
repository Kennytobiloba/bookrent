import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Favorite from './Pages/Favorite/Favorite.jsx'
import Upcoming from './Pages/Upcoming/Upcoming.jsx'
import Trending from './Pages/Trending/Trending.jsx'
import NewReleases from './Pages/NewReleases/NewReleases.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element:<Home/> 
        },
        {
          path: "/new-releases",
          element: <NewReleases/>
        },
        {
          path: "/trending-books",
          element: <Trending/>
        },
        {
          path: "/upcoming-books",
          element: <Upcoming/>
        },
        {
          path: "/favorite-books",
          element:<Favorite/> 
        },
        {
          path: "/cart",
          element:<Favorite/> 
        }
      ]
    },
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>,
)
