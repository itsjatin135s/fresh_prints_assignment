// src/api/githubApi.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (searchTerm) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchTerm}`
    );
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
