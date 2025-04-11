import React from "react";
import { useState } from "react";

import API from "../../api";
import { useUser } from "../../context/UserContext";

const CandidateForm = ({ onClose, cardId }) => {
  const { user } = useUser(); // <- get the logged-in user
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    candidateExperience: "",
    candidatePhone: "",
    candidateLinkedIn: "",
    candidateResume: "",
    currentEmployer: "",
    noticePeriod: "",
    referredBy: "",
    positionId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/referrals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 👈 Include cookies/session if needed
      body: JSON.stringify({
        ...formData,
        positionId: cardId,
        referredBy: user?._id,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit referral");
    }

    setFormData({
      candidateName: "",
      candidateEmail: "",
      candidateExperience: "",
      candidatePhone: "",
      candidateLinkedIn: "",
      candidateResume: "",
      currentEmployer: "",
      noticePeriod: "",
    });
    alert("Referral submitted successfully!");
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-200 max-w-lg">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Candidate Form
      </h3>
      <form>
        {/* Full Name and Email */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="candidateName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="candidateName"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="candidateEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="candidateEmail"
              name="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Experience and Current Employer */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Experience */}
          <div>
            <label
              htmlFor="candidateExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience (in years)
            </label>
            <input
              type="number"
              id="candidateExperience"
              name="candidateExperience"
              value={formData.candidateExperience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Current Employer */}
          <div>
            <label
              htmlFor="currentEmployer"
              className="block text-sm font-medium text-gray-700"
            >
              Current Employer
            </label>
            <input
              type="text"
              id="currentEmployer"
              name="currentEmployer"
              value={formData.currentEmployer}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Notice Period and LinkedIn URL */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Notice Period */}
          <div>
            <label
              htmlFor="noticePeriod"
              className="block text-sm font-medium text-gray-700"
            >
              Notice Period
            </label>
            <input
              type="text"
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* LinkedIn URL */}
          <div>
            <label
              htmlFor="candidateLinkedIn"
              className="block text-sm font-medium text-gray-700"
            >
              LinkedIn URL
            </label>
            <input
              type="url"
              id="candidateLinkedIn"
              name="candidateLinkedIn"
              value={formData.candidateLinkedIn}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label
              htmlFor="candidateResume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume URL
            </label>
            <input
              type="url"
              id="candidateResume"
              name="candidateResume"
              required
              value={formData.candidateResume}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="candidatePhone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="candidatePhone"
              name="candidatePhone"
              value={formData.candidatePhone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
      >
        Close
      </button>
    </div>
  );
};

export default CandidateForm;
