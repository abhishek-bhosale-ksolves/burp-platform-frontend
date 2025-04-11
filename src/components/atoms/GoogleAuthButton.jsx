import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const GoogleAuthButton = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/api/user");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const handleLogout = async () => {
    await API.get("/auth/api/logout");
    setUser(null);
    window.location.reload();
  };

  return (
    <div>
      {user ? (
        <>
          <div className="flex items-center space-x-4">
            <div className="text-black">
              <span className="font-semibold">Welcome, {user.firstName}</span>
              <span className="block text-xs text-right">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </span>
            </div>
            <img
              src={user.photo}
              alt="User"
              className="rounded-full h-10 w-10"
            />
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#fff", // Google red
                color: "black",
                display: "flex",
                border: "1px solid #ccc",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#fff", // Google red
            color: "black",
            display: "flex",
            border: "1px solid #ccc",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FcGoogle
            size={25}
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
          Login with Google
        </button>
      )}
    </div>
  );
};

export default GoogleAuthButton;
