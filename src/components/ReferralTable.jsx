import React, { useState } from "react";
import { userRole } from "../context/userRole";

const CandidateTable = ({ candidates }) => {
  const [statusFilter, setStatusFilter] = useState("All");

  function handleStatusChange(userId, newStatus) {
    console.log("Update status for", userId, "to", newStatus);
    // Update logic (API call or local state update) goes here
  }

  const filteredCandidates =
    statusFilter === "All"
      ? candidates
      : candidates.filter((candidate) => candidate.status === statusFilter);

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
            {userRole !== "employee" && (
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
          {filteredCandidates.map((candidate, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{candidate.name}</td>
              {userRole !== "employee" && (
                <td className="py-2 px-4">{candidate.referredBy}</td>
              )}
              <td className="py-2 px-4">{candidate.experience} years</td>
              <td className="py-2 px-4">{candidate.email}</td>
              <td className="py-2 px-4">{candidate.phone}</td>
              <td className="py-2 px-4">{candidate.dateAdded}</td>
              <td className="py-2 px-4">
                <a
                  href={candidate.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </td>
              <td className="py-2 px-4">
                <a
                  href={candidate.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </td>
              <td className="py-2 px-4">
                {userRole === "admin" || userRole === "reviewer" ? (
                  <select
                    value={candidate.status}
                    onChange={(e) =>
                      handleStatusChange(candidate.empId, e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="Accepted" className="text-green-600">
                      Accepted
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
                      candidate.status === "Accepted"
                        ? "text-green-600"
                        : candidate.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {candidate.status}
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

export default CandidateTable;
