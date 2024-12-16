import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'

const Authentication = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default Authentication