import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";
import ProductsPage from "../pages/user/Products";
import ProductDetailsPage from "../pages/user/ProductDetails";
import CartPage from "../pages/user/Cart";
import ProfilePage from "../pages/user/Profile";
import UserPrivatRoute from "../components/private/UserPrivatRoute";
import LoginPage from "../pages/user/Login";
import RegisterPage from "../pages/user/Register";
import AdminPrivatRoute from "../components/private/AdminPrivatRoute";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminProductForm from "../pages/admin/AdminProductForm";
import AdminCategories from "../pages/admin/AdminCategories";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminLoginPage from "../pages/admin/AdminLogin";
import AdminOrderDetails from "../pages/admin/AdminOrderDetails";
import OrdersPage from "../pages/user/Orders";
import CheckoutPage from "../pages/user/CheckoutPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        {/* user routes */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          <Route element={<UserPrivatRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Route>

        </Route>

         {/* admin routess */}

        <Route path="admin/login" element={<AdminLoginPage/>}/>

        <Route path="/admin" element={<AdminPrivatRoute/>}>
            <Route element={<AdminLayout/>}>
              <Route path="" element={<DashboardPage/>}/>
              <Route path="dashboard" element={<DashboardPage/>}/>
              <Route path="products" element={<AdminProducts/>}/>
              <Route path="products/new" element={<AdminProductForm/>}/>
              <Route path="products/:id" element={<AdminProductForm/>}/>
              <Route path="categories" element={<AdminCategories/>}/>
              <Route path="orders" element={<AdminOrders/>}/>
              <Route path="orders/:id" element={<AdminOrderDetails/>}/>
            </Route>
        </Route>
      </Routes>
    </>
  );
}
