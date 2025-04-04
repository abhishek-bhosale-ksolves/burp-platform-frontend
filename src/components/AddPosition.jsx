import React from "react";

function AddPosition() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Add Position</h1>
        <p className="mt-4 text-gray-600">
          Use the form below to add a new position. Please fill out the details
          accurately and submit your request.
        </p>

        <form className="mt-6 text-left space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position Title
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter position title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter department"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
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
