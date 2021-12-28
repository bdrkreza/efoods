import { Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/article/ArticleDetails";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

export default function AppRouter({ children }: any) {
  return (
    <div>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/article/:Id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
