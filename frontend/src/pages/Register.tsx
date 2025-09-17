import React, { useState } from "react";
import { motion } from "framer-motion";
import { registerUser } from "../apis/auth";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ your logo

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await registerUser(form);

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

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
      {/* Left Side with Logo */}
      <div
        className="relative w-full md:w-1/2 h-1/3 md:h-auto bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://solarpoweredblonde.com/wp-content/uploads/2020/09/Travel-photography-tips-and-ideas-2_0000_Travel-Photography-tips-and-ideas-blogg.jpg')",
        }}
      >
        <Link to="/" className="absolute top-6 left-6">
          <img src={logo} alt="Logo" className="h-12 md:h-14 drop-shadow-lg" />
        </Link>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 relative top-10 md:top-0">
        <div className="max-w-sm w-full text-center">
          <h2 className="text-3xl font-bold text-[#c78e44] mb-2">Register</h2>
          <p className="text-gray-600 text-sm mb-8">
            Create your account to get started
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="flex gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
                required
              />
            </div>

            {/* Email */}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
              required
            />

            {/* Password */}
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-[#f7f3ef] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c78e44]"
              required
            />

            {/* Terms */}
            <div className="flex items-start text-sm text-gray-600">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                id="terms"
                className="mt-1 accent-[#c78e44]"
              />
              <label htmlFor="terms" className="ml-2 text-left">
                I agree to{" "}
                <a href="#" className="text-[#c78e44] underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#c78e44] underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Button with shutter animation */}
            <motion.button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 rounded-full bg-black text-white font-medium overflow-hidden"
              initial="initial"
              whileHover="hover"
              variants={{}}
            >
              <motion.span
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#c78e44] z-0"
              />
              <span className="relative z-10">
                {loading ? "Registering..." : "Sign Up"}
              </span>
            </motion.button>
          </form>

          {/* Link to Login */}
          <p className="text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-[#c78e44] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
