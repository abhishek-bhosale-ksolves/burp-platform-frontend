import React from "react";
import { Link } from "react-router-dom";

// import Illustration from "../assets/buddy-image.png";
import Lottie from "lottie-react";

import animationData from "../../assets/animations/hero-section-animation.json";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-180 w-full px-6 overflow-hidden">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-7xl font-bold text-gray-800 leading-tight">
          Welcome to the{" "}
          <span className="text-blue-600">Buddy Referral Platform</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Refer your friends and colleagues for open positions and get rewarded.
          Help your network find amazing opportunities while earning incentives!
        </p>
        <div className="mt-6">
          <Link
            to="/open-positions"
            className="bg-[#e2504b] text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Explore Open Positions
          </Link>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="w-3/4 md:w-1/2">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
