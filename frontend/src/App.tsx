import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Home from "./pages/Home";
import TripPage from "./pages/TripPage";
import FullDestinationPage from "./components/FullDestinationPage";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import FavoritesPage from "./pages/FavoritesPage";

function AppLayout() {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> 
      {!hideNavbar && <Navbar />}  {/* ✅ only show if not login/register */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip" element={<TripPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/destination" element={<FullDestinationPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
