import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/layout/DashboardLayout";
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
            <Route path="/dashboard" element={<DashboardLayout />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
}
