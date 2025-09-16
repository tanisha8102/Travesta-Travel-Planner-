import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../apis/auth";
import type { LoginData } from "../apis/auth"; // ✅ type-only import

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

      // ✅ Save user & token in localStorage
      localStorage.setItem("token", result.token);
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      navigate("/"); // redirect home
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex h-screen font-sans"
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Left Side - Image */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://solarpoweredblonde.com/wp-content/uploads/2020/09/Travel-photography-tips-and-ideas-2_0000_Travel-Photography-tips-and-ideas-blogg.jpg')",
        }}
      ></div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your credentials to continue your journey!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md transition hover:bg-[#c78e44]"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
