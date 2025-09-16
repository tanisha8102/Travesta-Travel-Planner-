import React, { useState } from "react";
import { motion } from "framer-motion";
import { registerUser } from "../apis/auth"; // import API
import { useNavigate } from "react-router-dom";

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
  const [success] = useState<string | null>(null);
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

    // save token + user in localStorage
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));

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
      {/* Left Side */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://solarpoweredblonde.com/wp-content/uploads/2020/09/Travel-photography-tips-and-ideas-2_0000_Travel-Photography-tips-and-ideas-blogg.jpg')",
        }}
      ></div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Register Now!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Register now to start your journey!
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="flex gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Password */}
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Checkbox */}
            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                id="terms"
                className="mt-1 accent-blue-600"
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md transition disabled:opacity-50"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          {/* Sign in */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
