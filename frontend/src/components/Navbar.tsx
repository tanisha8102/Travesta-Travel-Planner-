import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Travesta Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold relative px-2 py-1 transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              style={{
                color:
                  location.pathname === link.path
                    ? "#c78e44"
                    : undefined,
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
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <LogIn size={16} /> Login
          </Link>

          <Link
            to="/register"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <UserPlus size={16} /> Sign Up
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            to="/login"
            className={`${scrolled ? "text-gray-800" : "text-[#c78e44]"}`}
          >
            <LogIn size={22} />
          </Link>
          <Link
            to="/register"
            className={`${scrolled ? "text-gray-800" : "text-[#c78e44]"}`}
          >
            <UserPlus size={22} />
          </Link>

          <button
            className="transition"
            style={{ color: scrolled ? "#333" : "#c78e44" }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = scrolled ? "#555" : "#b3783b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = scrolled ? "#333" : "#c78e44")
            }
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col py-4 px-6 space-y-4 shadow-md animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "text-[#c78e44] bg-[#fef3e6]"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
