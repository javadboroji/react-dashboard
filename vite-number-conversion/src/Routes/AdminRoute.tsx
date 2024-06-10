import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard/Dashboard';
import Product from '../Pages/Product/Product';
import HeaderLayout from '../Components/Header/HeaderLayout';
import SideBar from '../Components/SideBar/SideBar';
import UsersList from '../Pages/Users/UsersList';
import Buttons from '../Components/Buttons/Buttons';
import ButtonsCom from '../Pages/Components/Buttons/ButtonsCom';
import FormsBas from '../Pages/Components/Forms/Forms.basic';
import ModalBas from '../Pages/Components/Modals/Modal.basic';
import HeaderBasic from '../Pages/Components/Header/Header.basic';
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
                        <Route path='/forms' element={<FormsBas/>}  />
                        <Route path='/modals' element={<ModalBas/>}  />
                        <Route path='/headers' element={<HeaderBasic/>}  />
                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    )
}

export default AdminRoute