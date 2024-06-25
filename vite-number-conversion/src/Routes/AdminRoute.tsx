import React, { createContext, useEffect, useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const LazyDashboard = lazy(() => import('../Pages/Dashboard/Dashboard'))
const LazyProduct = lazy(() => import('../Pages/Dashboard/Product/Product'))
const LazyHeaderLayout = lazy(() => import('../Components/Header/HeaderLayout'))
const LazySideBar = lazy(() => import('../Components/SideBar/SideBar'))
const LazyUsersList = lazy(() => import('../Pages/Dashboard/Users/UsersList'))
const LazyButtonsCom = lazy(() => import('../Pages/Components/Buttons/ButtonsCom'))
const LazyFormsBas = lazy(() => import('../Pages/Components/Forms/Forms.basic'))
const LazyModalBas = lazy(() => import('../Pages/Components/Modals/Modal.basic'))
const LazyHeaderBasic = lazy(() => import('../Pages/Components/Header/Header.basic'))
const LazyCardsBasic = lazy(() => import('../Pages/Components/Cards/Cards.basic'))
const LazyToastBasic = lazy(() => import('../Pages/Components/Toasts/Toast.Basic'))
const LazyFooter=lazy(()=>import("../Pages/Components/Footers/Footer.basic"))
const LazyLogin = lazy(() => import('../Pages/Login/Login'))
const LazyHome = lazy(() => import("../Pages/HomePage/HomePage"))
import { useAppContext } from '../Context/UserProvider';
import SideBar from '../Components/SideBar/SideBar';
import HeaderLayout from '../Components/Header/HeaderLayout';
import { Spin } from 'antd';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
function AdminRoute() {
    const { userLogin, setUserLogin } = useAppContext()
    useEffect(() => {

    }, [userLogin])
    return (
        <div>

            <BrowserRouter>
                {userLogin ?
                    <>
                        <HeaderLayout />
                        <div className='flex'>
                            <SideBar />
                            <Suspense fallback={<div className='min-w-full min-h-screen'><Spin size="small" /></div>}>
                                <Routes>

                                    <>
                                        <Route path="/dashboard" element={<LazyDashboard />} />
                                        <Route path="/product" element={<LazyProduct />} />
                                        <Route path="/users" element={< LazyUsersList />} />
                                        <Route path="/buttons" element={<LazyButtonsCom />} />
                                        <Route path='/forms' element={<LazyFormsBas />} />
                                        <Route path='/modals' element={<LazyModalBas />} />
                                        <Route path='/headers' element={<LazyHeaderBasic />} />
                                        <Route path='/cards' element={<LazyCardsBasic />} />
                                        <Route path='/toasts' element={<LazyToastBasic />} />
                                        <Route path='/footers' element={<LazyFooter/>} />
                                    </>

                                </Routes>
                            </Suspense>

                        </div>
                    </>
                    : <Routes>
                 
                        <Route path="/" element={<HomePage />} />

                        <Route path="/login" element={<Login setUserLogin={setUserLogin} />} />
                    </Routes>

                }

            </BrowserRouter>

        </div>
    )
}

export default AdminRoute