import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoBan, IoCheckmarkDone } from "react-icons/io5";

import { useUser } from "../../context/UserContext";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const user = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.designation.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function onEdit(user) {
    console.log("Edit user:", user);
  }

  function onDelete(userId) {
    console.log("Delete user with ID:", userId);
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Requests</h2>
        <p className="text-gray-600">Pending Reviewer Requests</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Users</h2>
        <p className="text-gray-600">All organization users</p>
      </div>
      <div className="overflow-x-auto p-4">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-start gap-4">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg border overflow-hidden">
          <thead className="bg-[#e2504b] text-white rounded-t-lg">
            <tr>
              <th className="py-2 px-4 text-left">Employee Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center"
                    onClick={() => onEdit(user)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center"
                    onClick={() => onDelete(user.empId)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
