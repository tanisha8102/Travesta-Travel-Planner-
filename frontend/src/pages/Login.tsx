import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../apis/auth";
import type { LoginData } from "../apis/auth";

import logo from "../assets/logo.png"; // ✅ your logo file

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginData>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await loginUser(form);

      localStorage.setItem("token", result.token);
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="relative flex flex-col md:flex-row h-screen font-sans"
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Left Side - Image with logo */}
      <div
        className="relative w-full md:w-1/2 h-1/3 md:h-auto bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://solarpoweredblonde.com/wp-content/uploads/2020/09/Travel-photography-tips-and-ideas-2_0000_Travel-Photography-tips-and-ideas-blogg.jpg')",
        }}
      >
        {/* ✅ Logo in corner */}
        <Link to="/" className="absolute top-6 left-6">
          <img src={logo} alt="Logo" className="h-12 md:h-14" />
        </Link>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 relative top-10 md:top-0">
        <div className="max-w-sm w-full text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#c78e44] mb-2">Welcome</h2>
          <p className="text-gray-600 text-sm mb-8">
            Login in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
            />

            <div className="flex justify-end">
              <a href="#" className="text-xs text-gray-500 hover:text-black mt-1">
                forgot your password?
              </a>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 rounded-full bg-black text-white font-medium overflow-hidden"
              initial="initial"
              whileHover="hover"
              variants={{}}
            >
              {/* Golden shutter overlay */}
              <motion.span
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#c78e44] z-0"
              />

              {/* Button text */}
              <span className="relative z-10">
                {loading ? "Signing In..." : "LOG IN"}
              </span>
            </motion.button>
          </form>

          <p className="text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#c78e44] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
