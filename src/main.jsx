import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Configs of use the React Router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Budgets from './routes/budgets.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/budgets",
    element: <Budgets />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
