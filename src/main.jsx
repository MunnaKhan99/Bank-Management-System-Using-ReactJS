import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
// import Root from './layout/Root.jsx'
// import Login from './components/Login/Login.jsx'
// import Register from './components/Register/Register.jsx'
// import Home from './components/Home/Home.jsx'
// import Deposit from './components/Deposit/Deposit.jsx'
// import Withdraw from './components/Withdraw/Withdraw.jsx'
// import Transactions from './components/Transactions/Transactions.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { index: true, path: "/", element: <Home /> },
//       { path: 'login', element: <Login /> },
//       { path: 'register', element: <Register /> },
//       { path: 'deposit', element: <Deposit /> },
//       { path: 'withdraw', element: <Withdraw /> },
//       { path: 'transaction', element: <Transactions /> }
//     ]
//   }

// ])
createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <App />
  </BrowserRouter>

)
