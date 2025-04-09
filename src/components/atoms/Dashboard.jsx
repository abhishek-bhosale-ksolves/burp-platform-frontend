import { useEffect, useState } from "react";

import API from "./api";

const logout = async () => {
  await API.get("/api/logout");
  window.location.href = "/";
};

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/api/user")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <img src={user.photo} alt="profile" />
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
