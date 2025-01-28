import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Main/Products";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Main/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import ShoppingBag from "./components/Header/ShopingBag/ShoppingBag";
import CategoryPage from "./components/Main/Sidebar/CategoryPage/CategoryPage";
import ProductDetalies from "./components/Main/ProductDetalies/ProductDetailes";
function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetalies />} />
        <Route path="/shopping-bag" element={<ShoppingBag />} />
        <Route path="/sidebar/category/:id" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
