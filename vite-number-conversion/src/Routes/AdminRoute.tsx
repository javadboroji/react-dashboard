import React, {
  createContext,
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/HomePage/HomePage";
import { user } from "../Types/Types";
import ProtectedRoute from "./ProtectedRoute";
import useUserLogin from "../store/UserAuth";
import NewProductForm from "../Pages/Dashboard/Product/NewProductForm";

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
  const { user } = useUserLogin();
  const [userLogin, setUserlogin] = useState<user | null>(user);
  useEffect(() => {
    if (user) {
      setUserlogin(user);
    }
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

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyProduct />
                </ProtectedRoute>
              }
            >
           
            </Route>
            <Route
                path="/product/newProduct"
                element={
                  <ProtectedRoute user={userLogin}>
                    <NewProductForm />
                  </ProtectedRoute>
                }
              />
            <Route
              path="/users"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyUsersList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buttons"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyButtonsCom />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forms"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyFormsBas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/modals"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyModalBas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/headers"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyHeaderBasic />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cards"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyCardsBasic />
                </ProtectedRoute>
              }
            />
            {/* <Route path='/toasts' element={<LazyToastBasic />} /> */}
            <Route
              path="/footers"
              element={
                <ProtectedRoute user={userLogin}>
                  <LazyFooter />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default AdminRoute;
