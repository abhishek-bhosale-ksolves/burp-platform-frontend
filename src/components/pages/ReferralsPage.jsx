import React, { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import { useUser } from "../../context/UserContext";

const ReferralsTable = ({ candidates }) => {
  const [referrals, setAllReferrals] = useState([]);
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/referrals", {
          withCredentials: true,
        });
        setAllReferrals(res.data);
      } catch (error) {
        console.error("Error fetching referrals:", error);
      }
    };

    fetchReferrals();
  }, []);
  const { user } = useUser();
  const [statusFilter, setStatusFilter] = useState("All");

  function handleStatusChange(referralId, newStatus) {
    fetch(`http://localhost:5000/api/referrals/${referralId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedReferral) => {
        // Update the local state with the new status
        setAllReferrals((prevReferrals) =>
          prevReferrals.map((referral) =>
            referral._id === referralId
              ? { ...referral, status: updatedReferral.status }
              : referral,
          ),
        );
      })
      .catch((error) => {
        console.error("Failed to update referral status:", error);
      });
  }

  console.log("Referrals:", referrals);

  const filteredCandidates =
    statusFilter === "All"
      ? referrals
      : referrals.filter((referral) => referral.status === statusFilter);

  return (
    <div className="overflow-x-auto p-4">
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Status:</label>
        <select
          className="border rounded px-2 py-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg border overflow-hidden">
        <thead className="bg-[#e2504b] text-white rounded-t-lg">
          <tr>
            <th className="py-2 px-4 text-left">Candidate Name</th>
            {user.role !== "employee" && (
              <th className="py-2 px-4 text-left">Referred By</th>
            )}
            <th className="py-2 px-4 text-left">Experience</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Date Added</th>
            <th className="py-2 px-4 text-left">Resume</th>
            <th className="py-2 px-4 text-left">LinkedIn</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((referral, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{referral.candidateName}</td>
              {user.role !== "employee" && (
                <td className="py-2 px-4">{referral.referredBy}</td>
              )}
              <td className="py-2 px-4">
                {referral.candidateExperience} years
              </td>
              <td className="py-2 px-4">{referral.candidateEmail}</td>
              <td className="py-2 px-4">{referral.candidatePhone}</td>
              <td className="py-2 px-4">{referral.createdAt}</td>
              <td className="py-2 px-4">
                <a
                  href={referral.candidateResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </td>
              <td className="py-2 px-4">
                <a
                  href={referral.candidateLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </td>
              <td className="py-2 px-4">
                {user.role === "admin" || user.role === "reviewer" ? (
                  <select
                    value={referral.status}
                    onChange={(e) =>
                      handleStatusChange(referral._id, e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="In Progress" className="text-green-600">
                      In Progress
                    </option>
                    <option value="Hired" className="text-green-600">
                      Hired
                    </option>
                    <option value="Rejected" className="text-red-600">
                      Rejected
                    </option>
                    <option value="Pending" className="text-yellow-600">
                      Pending
                    </option>
                  </select>
                ) : (
                  <span
                    className={`${
                      referral.status === "Accepted"
                        ? "text-green-600"
                        : referral.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                    }`}
                  >
                    {referral.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralsTable;
