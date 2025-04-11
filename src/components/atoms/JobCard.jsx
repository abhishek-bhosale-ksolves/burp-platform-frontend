import React from "react";
import { useState } from "react";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CandidateForm from "../forms/ReferralForm";

const Card = ({ cardId, title, experience, description, buttonText }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start border-1 border-black border-r-blue-500">
      {/* Title and Icon */}
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* Experience with Icon */}
      <div className="flex items-center text-sm text-gray-600 mt-2">
        <FontAwesomeIcon icon={faBriefcase} className="text-gray-500 mr-2" />
        <span>{experience}</span>
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-800 mb-3">{description}</p>

      {/* Button */}
      <button
        onClick={toggleForm}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {buttonText}
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <CandidateForm onClose={toggleForm} cardId={cardId} />{" "}
          {/* Pass onClose to handle form close */}
        </div>
      )}
    </div>
  );
};

export default Card;
