import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import CustomStickersPage from "./pages/CustomStickersPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/customstickers" element={<CustomStickersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;