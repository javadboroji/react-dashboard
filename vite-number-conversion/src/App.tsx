import { useState } from 'react'
import './App.css'
import { ConfigProvider, Layout } from 'antd';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import Login from "./Pages/Login/Login.tsx";
import Product from './Pages/Product/Product.tsx';
import HeaderLayout from './Components/Header/HeaderLayout.tsx';
import AdminRoute from './Routes/AdminRoute.tsx';
function App() {
  return (
    <ConfigProvider direction="rtl">
      <AdminRoute/>
    </ConfigProvider>
  )
}

export default App
