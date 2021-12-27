import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
export default function AppRouter({ children }: any) {
  return (
    <div>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
