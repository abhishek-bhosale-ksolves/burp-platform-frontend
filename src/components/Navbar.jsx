import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Logo from "../assets/ksolves-logo.png";
import UserLogo from "../assets/user-logo.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600" : "text-black";
  };

  return (
    <nav className="bg-[#F4FFF3] text-white px-4 py-3 flex justify-between items-center">
      {/* Left side: Logo and Action Buttons */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <a href="/" className="text-white">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <a href="/open-positions" className={isActive("/open-positions")}>
            Open Positions
          </a>
          <a href="/your-referrals" className={isActive("/your-referrals")}>
            Your Referrals
          </a>
          <a href="/be-reviewer" className={isActive("/be-reviewer")}>
            Be Reviewer
          </a>
        </div>
      </div>

      {/* Right side: Profile Photo and Name */}
      <div className="flex items-center space-x-4">
        {/* Profile Info */}
        <div className="text-black">
          <span className="font-semibold">Abhishek Bhosale</span>
          <span className="block text-xs">Software Engineer</span>
        </div>
        <img src={UserLogo} alt="User" className="rounded-full h-5 w-5" />
      </div>
    </nav>
  );
};

export default Navbar;
