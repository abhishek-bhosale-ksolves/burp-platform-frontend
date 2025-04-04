import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/burp.png";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sign-up successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-150 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white inset-shadow-2xs rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Welcome to
        </h2>
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <div>
            <span
              className="text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer"
              onClick={handleSubmit}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
