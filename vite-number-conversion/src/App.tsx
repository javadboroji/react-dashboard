import { useState } from 'react'
import './App.css'
import { ConfigProvider } from 'antd';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
function App() {
  return (
    <ConfigProvider direction="rtl">
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
        
        </Routes>
      </BrowserRouter>

    </ConfigProvider>
  )
}

export default App
