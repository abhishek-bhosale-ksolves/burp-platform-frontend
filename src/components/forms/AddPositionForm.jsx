import React from "react";
import { useState } from "react";

function AddPosition() {
  const [formData, setFormData] = useState({
    title: "",
    experience: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/positions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit position");
      }

      alert("Position submitted successfully!");
      // Optionally clear form
      setFormData({ title: "", experience: "", description: "" });
    } catch (error) {
      console.error("Submission error:", error.message);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Add Position</h1>
        <p className="mt-4 text-gray-600">
          Use the form below to add a new position. Please fill out the details
          accurately and submit your request.
        </p>

        <form className="mt-6 text-left space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter position title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter experience required"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter job description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Submit Position
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPosition;
