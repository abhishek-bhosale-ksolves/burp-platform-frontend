import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/atoms/Navbar";
import RequestCard from "./components/atoms/RequestCard";
import AddPosition from "./components/forms/AddPositionForm";
import ErrorPage from "./components/pages/ErrorPage";
import Hero from "./components/pages/LandingPage";
import CardsGrid from "./components/pages/OpeningsPage";
import ReferralTable from "./components/pages/ReferralsPage";
import UsersTable from "./components/pages/UsersPage";
import "./index.css";

const allPositions = [
  {
    title: "Salesforce Developer",
    experience: "3 years",
    description:
      "We are looking for a skilled Salesforce Developer to join our team and drive the development, customization, and maintenance of our Salesforce platform.",
  },
  {
    title: "React Developer",
    experience: "2 years",
    description: "Join our team to develop amazing React applications.",
  },
  {
    title: "Node.js Developer",
    experience: "2 years",
    description: "We are looking for a Node.js Developer to join our team.",
  },
  {
    title: "Senior Flutter Developer",
    experience: "10 years",
    description:
      "We are looking for a skilled Senior Flutter Developer to join our team and drive the development, customization, and maintenance of our Flutter platform.",
  },
];

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

const users = [
  {
    empId: "KS1189",
    name: "Abhishek Bhosale",
    email: "abhishek.bhosale@ksolves.com",
    designation: "Software Engineer",
  },
  {
    empId: "KS1191",
    name: "Fedrick Nishant",
    email: "fedrick.n@ksolves.com",
    designation: "Senior Software Engineer",
  },
  {
    empId: "KS1192",
    name: "Ramesh Shinde",
    email: "ramesh@ksolves.com",
    designation: "Delivery Head",
  },
];

function App() {
  const location = useLocation();
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
        "/home",
      ].includes(location.pathname) && <Navbar />}

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/open-positions"
            element={<CardsGrid allPositions={allPositions} />}
          />
          <Route
            path="/your-referrals"
            element={<ReferralTable candidates={candidates} />}
          />
          <Route path="/be-reviewer" element={<RequestCard></RequestCard>} />
          <Route
            path="/manage-users"
            element={<UsersTable users={users} isRequest={false} />}
          />
          <Route
            path="/requests"
            element={<UsersTable users={users} isRequest={true} />}
          />
          <Route
            path="/all-referrals"
            element={<ReferralTable candidates={candidates} />}
          />
          <Route path="/add-position" element={<AddPosition />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
