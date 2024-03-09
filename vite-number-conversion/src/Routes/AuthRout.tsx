import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login/Login';
function AuthRout() {
  return (
    <div className="surface h-screen w-full">
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AuthRout