import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About";
import ShopPage from "./pages/Shop";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
