import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages/indexPage/IndexPage.tsx'
import './index.css'
import AdminPage from './pages/adminPage'

const router = createBrowserRouter([
  {
    path: 'intro',
    element: <IndexPage />,
    errorElement: <div style={{margin: 'auto auto'}}>К сожалению, сайт недоступен</div>
  },
  {
    path: '/*',
    element: <AdminPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
