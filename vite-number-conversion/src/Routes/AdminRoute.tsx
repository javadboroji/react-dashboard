import React, {
  createContext,
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "../Context/UserProvider";
import SideBar from "../DyComponents/SideBar/SideBar";
import HeaderLayout from "../DyComponents/Header/HeaderLayout";
import { Spin } from "antd";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import HomePage from "../Pages/HomePage/HomePage";

const LazyDashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const LazyProduct = lazy(() => import("../Pages/Dashboard/Product/Product"));
const LazyHeaderLayout = lazy(
  () => import("../DyComponents/Header/HeaderLayout")
);
const LazySideBar = lazy(() => import("../DyComponents/SideBar/SideBar"));
const LazyUsersList = lazy(() => import("../Pages/Dashboard/Users/UsersList"));
const LazyButtonsCom = lazy(
  () => import("../Pages/Components/Buttons/ButtonsCom")
);
const LazyFormsBas = lazy(
  () => import("../Pages/Components/Forms/Forms.basic")
);
const LazyModalBas = lazy(
  () => import("../Pages/Components/Modals/Modal.basic")
);
const LazyHeaderBasic = lazy(
  () => import("../Pages/Components/Header/Header.basic")
);
const LazyCardsBasic = lazy(
  () => import("../Pages/Components/Cards/Cards.basic")
);
const LazyToastBasic = lazy(
  () => import("../Pages/Components/Toasts/Toast.Basic")
);
const LazyFooter = lazy(
  () => import("../Pages/Components/Footers/Footer.basic")
);
const LazCheckout = lazy(() => import("../Pages/Checkout/Checkout"));
const LazFilter = lazy(() => import("../Pages/Filter/Filter"));

function AdminRoute() {
  const user = JSON.parse(localStorage.getItem("useInfo") as string);
  useEffect(() => {
  }, [user]);

  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="min-w-full min-h-screen">
              <Spin size="small" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Checkout" element={<LazCheckout />} />
            <Route path="/filter" element={<LazFilter />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
        {user?.role ? (
          <>
            
            <div className="flex">
              
              <Suspense
                fallback={
                  <div className="min-w-full min-h-screen">
                    <Spin size="small" />
                  </div>
                }
              >
                <Routes>
                  <>
                    <Route path="/dashboard" element={<LazyDashboard />} />
                    <Route path="/product" element={<LazyProduct />} />
                    <Route path="/users" element={<LazyUsersList />} />
                    <Route path="/buttons" element={<LazyButtonsCom />} />
                    <Route path="/forms" element={<LazyFormsBas />} />
                    <Route path="/modals" element={<LazyModalBas />} />
                    <Route path="/headers" element={<LazyHeaderBasic />} />
                    <Route path="/cards" element={<LazyCardsBasic />} />
                    {/* <Route path='/toasts' element={<LazyToastBasic />} /> */}
                    <Route path="/footers" element={<LazyFooter />} />
                  </>
                </Routes>
              </Suspense>
            </div>
          </>
        ) : null}
      </BrowserRouter>
    </div>
  );
}

export default AdminRoute;
