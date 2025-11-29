import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
