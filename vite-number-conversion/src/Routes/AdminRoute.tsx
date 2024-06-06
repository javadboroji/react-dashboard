import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard/Dashboard';
import Product from '../Pages/Product/Product';
import HeaderLayout from '../Components/Header/HeaderLayout';
import SideBar from '../Components/SideBar/SideBar';
import UsersList from '../Pages/Users/UsersList';
import Components from '../Pages/Components/Components';
import Buttons from '../Components/Buttons/Buttons';
import ButtonsCom from '../Pages/Components/Buttons/ButtonsCom';
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
                        <Route path="/buttons" element={<ButtonsCom />} />
                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    )
}

export default AdminRoute