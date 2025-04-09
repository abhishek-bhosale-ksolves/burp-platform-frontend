import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/burp.png";
import { useUser } from "../../context/UserContext";
import GoogleAuthButton from "./GoogleAuthButton";

const Navbar = () => {
  const { user } = useUser();
  const navLinks = {
    employee: [
      { path: "/open-positions", label: "Open Positions" },
      { path: "/your-referrals", label: "Your Referrals" },
      { path: "/be-reviewer", label: "Be a Reviewer" },
    ],
    reviewer: [
      { path: "/all-referrals", label: "All Referrals" },
      { path: "/open-positions", label: "Open Positions" },
      { path: "/add-position", label: "Add Position+" },
      { path: "/your-referrals", label: "Your Referrals" },
    ],
    admin: [
      { path: "/manage-users", label: "Manage Users" },
      { path: "/requests", label: "Requests" },
      { path: "/all-referrals", label: "All Referrals" },
      { path: "/add-position", label: "Add Position+" },
    ],
  };

  return (
    <nav className="bg-[#F4FFF3] px-4 py-3 flex justify-between items-center">
      {/* Left side: Logo and Action Buttons */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </NavLink>
        </div>

        {/* Dynamic Navigation Links */}
        <div className="flex space-x-4">
          {user &&
            navLinks[user.role]?.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
              >
                {link.label}
              </NavLink>
            ))}
        </div>
      </div>

      {/* Right side: Profile Photo and Name */}
      <GoogleAuthButton />
    </nav>
  );
};

export default Navbar;
