import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/register'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
