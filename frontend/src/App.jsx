import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
