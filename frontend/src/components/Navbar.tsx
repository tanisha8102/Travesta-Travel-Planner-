import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus } from "lucide-react";

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
          className="text-2xl font-extrabold tracking-wide transition-colors"
          style={{ color: "#c78e44" }}
        >
          Travesta
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 text-sm font-medium relative px-2 py-1 transition-colors`}
              style={{
                color:
                  location.pathname === link.path ? "#c78e44" : undefined,
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c78e44] rounded-full"></span>
              )}
            </Link>
          ))}

          <Link
            to="/login"
            className="flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: "#c78e44" }}
          >
            <LogIn size={16} /> Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: "#c78e44" }}
          >
            <UserPlus size={16} /> Sign Up
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Login / SignUp Icons only */}
          <Link to="/login" className="text-[#c78e44]">
            <LogIn size={22} />
          </Link>
          <Link to="/register" className="text-[#c78e44]">
            <UserPlus size={22} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="transition"
            style={{ color: "#c78e44" }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#b3783b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#c78e44")
            }
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg flex flex-col py-4 px-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors`}
              style={{
                color:
                  location.pathname === link.path ? "#c78e44" : "#333",
                backgroundColor:
                  location.pathname === link.path
                    ? "#fef3e6"
                    : "transparent",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
