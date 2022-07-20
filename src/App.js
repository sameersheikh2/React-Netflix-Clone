import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'
import Account from './page/Account'
import { AuthContextProvider } from './context/AuthContext'


const App = () => {
  return (
    <AuthContextProvider>
    <>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/login' exact element={<Login/>} />
      <Route path='/signup' exact element={<Signup/>} />
      <Route path='/account' exact element={<Account/>} />
    </Routes>
    </>
    </AuthContextProvider>
  )
}

export default App