import { useEffect, useState } from "react";
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

const candidates = [
  {
    name: "John Doe",
    experience: 5,
    email: "john@example.com",
    phone: "+123456789",
    dateAdded: "2025-04-02",
    resumeLink: "https://example.com/resume.pdf",
    linkedinLink: "https://linkedin.com/in/johndoe",
    status: "Accepted",
    referredBy: "Abhishek Singh",
  },
  {
    name: "Jane Smith",
    experience: 3,
    email: "jane@example.com",
    phone: "+987654321",
    dateAdded: "2025-03-28",
    resumeLink: "https://example.com/resume2.pdf",
    linkedinLink: "https://linkedin.com/in/janesmith",
    status: "Rejected",
    referredBy: "Elon Musk",
  },
];

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
