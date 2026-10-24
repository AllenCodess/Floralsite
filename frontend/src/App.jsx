import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About";
import ShopPage from "./pages/Shop";
import InquiryPage from "./pages/Inquiry";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
