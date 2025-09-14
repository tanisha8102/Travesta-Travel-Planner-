import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-shadow duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition-colors"
        >
          Travesta 🌍
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 font-medium relative px-2 py-1 hover:text-blue-600 transition-colors
                ${location.pathname === link.path ? "text-blue-600 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-blue-600 before:rounded-full" : ""}
              `}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg flex flex-col py-4 px-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-gray-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors
                ${location.pathname === link.path ? "bg-blue-50 text-blue-600" : ""}
              `}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
