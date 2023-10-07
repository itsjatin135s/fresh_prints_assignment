import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUserHistory = localStorage.getItem("searchHistory");
    if (savedUserHistory) {
      setUsers(JSON.parse(savedUserHistory));
    }
  }, []);

  const handleDeleteHistory = () => {
    localStorage.removeItem("searchHistory");
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">User History</h1>
        <div className="mb-4">
          <button
            onClick={handleDeleteHistory}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete History
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <img
                src={user.avatarUrl}
                alt={`${user.username}'s Profile`}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold text-center">
                {user.username}
              </h2>
              <Link
                to={`/profile/${user.username}`}
                className="text-blue-500 hover:underline text-center mt-2"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
