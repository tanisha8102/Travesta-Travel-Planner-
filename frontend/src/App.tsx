import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Home from "./pages/Home";
import TripPage from "./pages/TripPage"; // ✅ import TripPage
import FullDestinationPage from "./components/FullDestinationPage";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import FavoritesPage from "./pages/FavoritesPage";





function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
         <ScrollToTop /> 
        <Navbar /> {/* Navbar always visible */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip" element={<TripPage />} /> {/* ✅ Trip Page route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
             <Route path="/destination" element={<FullDestinationPage  />} />
              <Route path="/favourites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
