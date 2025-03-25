import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  if (!query.trim()) throw new Error("Please enter at least one search criterion.");

  try {
    const response = await axios.get(`${BASE_URL}${query}&per_page=10`);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};
