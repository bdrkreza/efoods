import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/layout/DashboardLayout";
import {
  Analytics,
  Calendar,
  Chat,
  Customer,
  Dashboard,
  FoodDetails,
  FoodGrid,
  FoodItemList,
  OrderList,
  Reviews,
  Wallet,
} from "./admin/views";
import AddFoodItem from "./admin/views/Food/addFoodItem/AddFoodItem";
import ArticleDetails from "./components/article/ArticleDetails";
import DefaultLayout from "./layout/DefaultLayout";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export default function AppRouter() {
  return (
    <>
      <DefaultLayout>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/article/:Id" element={<ArticleDetails />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="orderList" element={<OrderList />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="customer" element={<Customer />} />
              <Route path="addFoodItem" element={<AddFoodItem />} />
              <Route path="foodItemList" element={<FoodItemList />} />
              <Route path="foodGrid" element={<FoodGrid />} />
              <Route path="foodItemDetails" element={<FoodDetails />} />
              <Route path="review" element={<Reviews />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="chat" element={<Chat />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
}
