import Navbar from "./components/Navbar";
import CardsGrid from "./components/CardsGrid";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./index.css";
import ReferralTable from "./components/ReferralTable";
import Hero from "./components/Hero";

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

function App() {
  const location = useLocation();
  return (
    <div>
      {/* Hide Navbar on ErrorPage */}
      {["/", "/open-positions", "/your-referrals", "/be-reviewer"].includes(
        location.pathname
      ) && <Navbar />}

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/open-positions"
            element={<CardsGrid allPositions={allPositions} />}
          />
          <Route
            path="/your-referrals"
            element={<ReferralTable candidates={candidates} />}
          />
          <Route
            path="/be-reviewer"
            element={
              <div className="flex justify-center items-center min-h-[60vh]">
                <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border border-gray-200">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Be a Reviewer
                  </h1>
                  <p className="mt-4 text-gray-600">
                    Reviewers play a crucial role in our hiring process. If you
                    are interested in becoming a reviewer, please contact us.
                  </p>
                  <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                    Request to be a Reviewer
                  </button>
                </div>
              </div>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
