import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login/Login';
function AuthRout() {
  return (
    <div className="surface h-screen w-full">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AuthRout