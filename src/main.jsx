import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/user/User.jsx'
import Admin from './components/admin/Admin.jsx'
import Services from './components/service/Services.jsx'
import Meetings from './components/meeting/Meetings.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
    errorElement:<div>error </div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement:<div>error</div>,
    children: [
      {
        path: '',
        element: <div></div>,
      },
      {
        path: 'services',
        element: <Services/>,
        errorElement: <div>error contant not found</div>
      },
      {
        path: 'meetings',
        element: <Meetings/>,
        errorElement: <div>error contant not found</div>
      }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
