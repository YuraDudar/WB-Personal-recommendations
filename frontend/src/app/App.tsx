import { useState } from 'react'
import './App.css'
import IndexPage from '../pages/indexPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />
  }
])

function App() {
  return (
    <IndexPage />
  )
}

export default App
