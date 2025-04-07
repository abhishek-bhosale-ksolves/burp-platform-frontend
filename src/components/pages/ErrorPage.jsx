import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-160">
      <div className="bg-white p-8 shadow-md rounded-lg text-center max-w-md border border-gray-300">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
