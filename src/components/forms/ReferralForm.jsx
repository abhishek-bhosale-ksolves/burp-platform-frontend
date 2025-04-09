import React from "react";
import { useState } from "react";

const CandidateForm = ({ onClose }) => {
  const { user } = useUser(); // <- get the logged-in user
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    candidateLinkedIn: "",
    candidateResume: "",
    currentEmployer: "",
    noticePeriod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await API.post("/api/referrals", {
        ...formData,
        positionId,
        referredBy: user?._id,
      });
      alert("Referral submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Something went wrong.");
    }
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
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
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
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700"
            >
              LinkedIn URL
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Resume URL */}
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume URL
          </label>
          <input
            type="url"
            id="resume"
            name="resume"
            required
            value={formData.resume}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
