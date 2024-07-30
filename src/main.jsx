import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import BookDetails from './Pages/BookDetails.jsx'
import BookCategory from './Pages/CategoriesPage/BookCategory.jsx'
 const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
        
      },
      {
        path:"/items/:itemId",
        element:<BookDetails/>
        
      },
      {
        path:"/category",
        element:<BookCategory/>
        
      },
    
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
)
