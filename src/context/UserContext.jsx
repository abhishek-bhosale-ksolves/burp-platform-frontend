import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const API = axios.create({
  baseURL: "https://burp-platform-backend.onrender.com",
  withCredentials: true,
});

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/api/user", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser(res.data.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.info("User is not authenticated yet.");
        } else {
          console.error("Failed to fetch user:", error);
        }
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
