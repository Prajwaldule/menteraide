import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/about.jsx'
import Home from './pages/home.jsx'
import Notes from './pages/note.jsx'
import Todo from './pages/todo.jsx'
import Exptracker from './pages/exptracker.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: < About/>
  },
  {
    path: '/notes',
    element: < Notes/>
  },
  {
    path: '/todo',
    element: < Todo/>
  },
  {
    path: '/expensetracker',
    element: < Exptracker/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
