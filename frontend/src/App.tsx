import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Home from "./pages/Home";
import TripPage from "./pages/TripPage"; // ✅ import TripPage
import FullDestinationPage from "./components/FullDestinationPage";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import TripDetails from "./pages/TripDetails";




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
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trip/:id" element={<TripDetails />} /> */}
             <Route path="/destination" element={<FullDestinationPage  />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
