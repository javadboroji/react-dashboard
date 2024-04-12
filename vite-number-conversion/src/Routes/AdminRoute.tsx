import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard/Dashboard';
import Product from '../Pages/Product/Product';
import HeaderLayout from '../Components/Header/HeaderLayout';
import SideBar from '../Components/SideBar/SideBar';
import UsersList from '../Pages/Users/UsersList';
function AdminRoute() {
    return (
        <div>

            <BrowserRouter>

                <HeaderLayout />
                <div className='flex'>
                    <SideBar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/users" element={< UsersList/>} />
                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    )
}

export default AdminRoute