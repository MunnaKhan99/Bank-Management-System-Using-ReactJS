import { Routes, Route, Navigate, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Deposit from "./components/Deposit/Deposit"
import Withdraw from "./components/Withdraw/Withdraw"
import Transactions from "./components/Transactions/Transactions"

function App() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    try {
      const raw = localStorage.getItem("bank_users");
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  const [transactions, setTransactions] = useState(() => {
    try {
      const raw = localStorage.getItem("bank_transactions");
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const raw = localStorage.getItem("bank_currentUser")
    return raw ? JSON.parse(raw) : null
  })
  useEffect(() => {
    localStorage.setItem("bank_users", JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem("bank_currentUser", JSON.stringify(currentUser))
  }, [currentUser])

  useEffect(() => {
    localStorage.setItem("bank_transactions", JSON.stringify(transactions))
  }, [transactions])



  const handleRegister = (newUser) => {
    setUsers(prev => [...prev, newUser])
  }

  const handleLogin = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      setCurrentUser(found)
      return true
    }
    return false
  }

  const handleDeposit = (depositAmount, description) => {
    if (!currentUser) return
    const newBalance = currentUser.balance + Number(depositAmount);
    const updatedUser = {
      ...currentUser,
      balance: newBalance
    }
    setCurrentUser(updatedUser);
    setUsers(prev => {
      if (!Array.isArray(prev)) return [updatedUser];

      const cleanUsers = prev.filter(u => typeof u === "object" && u !== null && u.email);

      // email match করে update
      return cleanUsers.map(u =>
        u.email === updatedUser.email ? updatedUser : u
      );
    })

    setTransactions(prev => [
      ...prev,
      {
        type: "Deposit",
        amount: Number(depositAmount),
        description: description,
        Date: new Date().toLocaleString(),
        user: currentUser.email
      }
    ]);
  }
  const handleWithdraw = (withdrawAmount, description) => {
    if (!currentUser) return;

    const amount = Number(withdrawAmount);
    if (amount > currentUser.balance) {
      alert("Insufficient fund");
      return;
    }
    const newBalance = currentUser.balance - amount;
    const updatedUser = {
      ...currentUser,
      balance: newBalance
    }
    setCurrentUser(updatedUser);

    // Update user list
    setUsers(prev => {
      const cleanUsers = prev.filter(u => typeof u === "object" && u !== null && u.email);

      return cleanUsers.map(u =>
        u.email === updatedUser.email ? updatedUser : u
      );
    });

    setTransactions(prev => [
      ...prev,
      {
        type: "Withdraw",
        amount: Number(withdrawAmount),
        description: description,
        Date: new Date().toLocaleString(),
        user: currentUser.email
      }
    ]);

  }


  const totalDeposit = currentUser
    ? transactions
      .filter(tx => tx.user === currentUser.email && tx.type === "Deposit")
      .reduce((sum, tx) => sum + tx.amount, 0)
    : 0;


  const totalWithdraw = currentUser
    ? transactions
      .filter(tx => tx.user === currentUser.email && tx.type === "Withdraw")
      .reduce((sum, tx) => sum + tx.amount, 0)
    : 0;


  const totalTransaction = currentUser
    ? transactions.filter(tx => tx.user === currentUser.email).length
    : 0;



  console.log(totalDeposit, totalWithdraw);
  const handleLogout = () => {
    setCurrentUser(null)
    navigate('/login')
  }


  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#FFFFFF" }}>

      {currentUser && (
        <Sidebar handleLogout={handleLogout} />
      )}

      <div style={{ flex: 1, padding: "20px", overflow: "auto", backgroundColor: "#E8F2FF" }}>

        <Routes>

          {/* Default redirect */}
          <Route
            path="/"
            element={
              currentUser
                ? <Navigate to="/home" />
                : <Navigate to="/login" />
            }
          />

          {/* Protected: Home */}
          <Route
            path="/home"
            element={
              currentUser
                ? <Home currentUser={currentUser} totalTransaction={totalTransaction} totalWithdraw={totalWithdraw} totalDeposit={totalDeposit} transactions={transactions} />
                : <Navigate to="/login" />
            }
          />

          {/* Public: Login */}
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />

          {/* Public: Register */}
          <Route
            path="/register"
            element={<Register handleRegister={handleRegister} />}
          />

          {/* Protected: Deposit */}
          <Route
            path="/deposit"
            element={
              currentUser
                ? <Deposit handleDeposit={handleDeposit} />
                : <Navigate to="/login" />
            }
          />

          {/* Protected: Withdraw */}
          <Route
            path="/withdraw"
            element={
              currentUser
                ? <Withdraw handleWithdraw={handleWithdraw} currentUser={currentUser} />
                : <Navigate to="/login" />
            }
          />

          {/* Protected: Transactions */}
          <Route
            path="/transaction"
            element={
              currentUser
                ? <Transactions transactions={transactions} currentUser={currentUser} />
                : <Navigate to="/login" />
            }
          />

        </Routes>


      </div>
    </div>
  )
}

export default App
