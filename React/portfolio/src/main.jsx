import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Mainpage from './pages/Mainpage.jsx'
import Projectspage from './pages/Projectspage.jsx'
import './App.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainpage />,
  },
  {
    path: '/moreprojects',
    element: <Projectspage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
