import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About";
import ShopPage from "./pages/Shop";
import InquiryPage from "./pages/Inquiry";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import LoginPage from "./pages/LoginPage";
import AdminRoute from "./components/AdminRoute";
import AdminOrders from "./pages/AdminOrders";

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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/order/:id" element={<OrderConfirmation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AdminRoute />}>
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
