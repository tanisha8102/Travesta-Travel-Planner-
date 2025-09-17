import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{ name?: string } | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Load user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Travesta Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-md font-semibold relative px-2 py-1 transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              style={{
                color: location.pathname === link.path ? "#c78e44" : undefined,
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c78e44] rounded-full"></span>
              )}
            </Link>
          ))}

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <User size={18} /> Profile
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  >
      
                    <Link
                      to="/favourites"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Favourites
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Plans
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`${scrolled ? "text-gray-800" : "text-[#c78e44]"}`}
              >
                <User size={22} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  >

                    <Link
                      to="/favourites"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Favourites
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Plans
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
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
            </>
          )}

          <button
            className="transition"
            style={{ color: scrolled ? "#333" : "#c78e44" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
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
