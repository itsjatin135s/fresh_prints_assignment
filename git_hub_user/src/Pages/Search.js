import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const loadSearchHistory = () => {
  const savedSearchHistory = localStorage.getItem("searchHistory");
  return savedSearchHistory ? JSON.parse(savedSearchHistory) : [];
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState(loadSearchHistory());

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
  }, [searchTerm]);

  const saveUserHistory = (username, avatarUrl) => {
    const user = {
      username: username,
      profileUrl: `https://github.com/${username}`,
      avatarUrl:
        avatarUrl ||
        "https://www.macworld.com/wp-content/uploads/2023/01/learn_git_mac.jpg?quality=50&strip=all",
    };

    const updatedSearchHistory = [...searchHistory, user];
    setSearchHistory(updatedSearchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    console.log("Done setting", updatedSearchHistory);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchTerm}`
        );
        return response.data.items;
      } catch (error) {
        console.error("Error fetching GitHub data: ", error);
        return [];
      }
    };

    fetchData()
      .then((users) => {
        setSearchResults(users);
      })
      .catch((error) => {
        console.error("Error while fetching GitHub data: ", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Search GitHub Users</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Enter GitHub Username"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white ml-2 px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s Profile`}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold text-center">
                {user.login}
              </h2>
              <span
                onClick={() => saveUserHistory(user.login, user.avatar_url)}
              >
                <NavLink
                  to={`/profile/${user.login}`}
                  onClick={() => saveUserHistory(user.login, user.avatar_url)}
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-center block mt-2"
                >
                  View Profile
                </NavLink>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
