import { useEffect, useState } from "react";

import axios from "axios";

import { useUser } from "../../context/UserContext";

function RequestCard() {
  const { user } = useUser();
  const [hasRequested, setHasRequested] = useState(false);

  useEffect(() => {
    const checkRequestStatus = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/request/${user._id}`,
          { withCredentials: true },
        );
        console.log("**********:", res.data);
        console.log("Request status&&&&&:", hasRequested);
        console.log("R========= :", res.data.length);
        if (res.data.length === 1) {
          setHasRequested(true);
        }
        console.log("Request status checked:(((((((", hasRequested);
      } catch (error) {
        console.error(
          "Error checking request status:",
          error.response || error,
        );
      }
    };

    if (user?._id) {
      checkRequestStatus();
    }
  }, [user]);

  useEffect(() => {
    console.log("🚀 hasRequested changed:", hasRequested);
  }, [hasRequested]);

  // Handle new request
  const sendRequest = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/users/request/${user._id}`,
        {},
        {
          withCredentials: true,
        },
      );
      setHasRequested(true);
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Request failed:", error.response || error);
      alert("Failed to send request. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Be a Reviewer</h1>
        <p className="mt-4 text-gray-600">
          Reviewers play a crucial role in our hiring process. If you are
          interested in becoming a reviewer, please contact us.
        </p>
        <button
          style={{ color: "white" }}
          onClick={sendRequest}
          disabled={hasRequested}
          className={`mt-6 px-4 py-2 rounded-lg transition duration-200 ${
            hasRequested
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {hasRequested ? "Request Already Sent" : "Request to be a Reviewer"}
        </button>
      </div>
    </div>
  );
}

export default RequestCard;
