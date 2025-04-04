function RequestCard() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Be a Reviewer</h1>
        <p className="mt-4 text-gray-600">
          Reviewers play a crucial role in our hiring process. If you are
          interested in becoming a reviewer, please contact us.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Request to be a Reviewer
        </button>
      </div>
    </div>
  );
}

export default RequestCard;
