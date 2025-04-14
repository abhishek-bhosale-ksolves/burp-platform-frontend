import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/atoms/Navbar";
import RequestCard from "./components/atoms/RequestCard";
import AddPosition from "./components/forms/AddPositionForm";
import ErrorPage from "./components/pages/ErrorPage";
import Hero from "./components/pages/LandingPage";
import CardsGrid from "./components/pages/OpeningsPage";
import ReferralsTable from "./components/pages/ReferralsPage";
import RequestPage from "./components/pages/RequestPage";
import UsersTable from "./components/pages/UsersPage";
import "./index.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [allReferrals, setAllReferrals] = useState([]);

  return (
    <div>
      {/* Hide Navbar on ErrorPage */}
      {[
        "/open-positions",
        "/your-referrals",
        "/be-reviewer",
        "/manage-users",
        "/requests",
        "/all-referrals",
        "/add-position",
        "/",
      ].includes(location.pathname) && <Navbar />}

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/open-positions" element={<CardsGrid />} />
          <Route path="/your-referrals" element={<ReferralsTable />} />
          <Route path="/be-reviewer" element={<RequestCard></RequestCard>} />
          <Route path="/manage-users" element={<UsersTable />} />
          <Route path="/requests" element={<RequestPage />} />
          <Route
            path="/all-referrals"
            element={<ReferralsTable candidates={allReferrals} />}
          />
          <Route path="/add-position" element={<AddPosition />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
