import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home user={user} setUser={setUser} /> : <Navigate to={"/signin"} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/signin' element={<Signin setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
