import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GitHubProfile = ({ match }) => {
  const { username } = useParams();
  console.log(username);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub user data: ", error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-800 text-white">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-semibold text-center mb-4">
          {userData.login.charAt(0).toUpperCase() + userData.login.slice(1)}'s
          Profile
        </h1>
        <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-md text-center">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s Profile`}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h2 className="text-2xl font-semibold">{userData.login}</h2>
          <p className="text-gray-300 mt-2">
            {userData.bio || "No bio available"}
          </p>
          <div className="flex justify-center mt-4">
            <div className="mx-4">
              <span className="text-lg font-semibold">
                {userData.followers}
              </span>
              <br />
              Followers
            </div>
            <div className="mx-4">
              <span className="text-lg font-semibold">
                {userData.following}
              </span>
              <br />
              Following
            </div>
            <div className="mx-4">
              <span className="text-lg font-semibold">
                {userData.public_repos}
              </span>
              <br />
              Repositories
            </div>
          </div>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
