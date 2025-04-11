import { useEffect, useState } from "react";

import axios from "axios";

const RequestCard = ({ request }) => {
  const handleAccept = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/request/${request._id}`,
        { status: "accepted" },
        { withCredentials: true },
      );
      window.location.reload();
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };
  const handleReject = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/request/${request._id}`,
        { status: "rejected" },
        { withCredentials: true },
      );
      window.location.reload();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto border border-gray-200 mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {request.userId.name}
      </h2>
      <p className="mb-2">Requested to be an reviewer</p>

      {request.status === "Pending" && (
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            style={{ backgroundColor: "#4CAF50" }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Reject
          </button>
        </div>
      )}

      {request.status === "accepted" && (
        <div className="flex gap-4">
          <p className="text-green-500 font-semibold">Accepted</p>
        </div>
      )}
    </div>
  );
};

const RequestPage = () => {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/request",
          { withCredentials: true },
        );
        setAllRequests(response.data);
      } catch (error) {
        console.error("Failed to fetch requests", error);
      }
    };

    fetchRequestData();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Reviewer Requests</h1>
      {allRequests.length === 0 ? (
        <p className="text-gray-500">No requests found.</p>
      ) : (
        allRequests.map((request, index) => (
          <RequestCard request={request} key={index} />
        ))
      )}
    </div>
  );
};

export default RequestPage;
