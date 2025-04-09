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
        const res = await API.get("/api/user");
        setUser(res.data.user);
      } catch {
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
