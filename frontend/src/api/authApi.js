import API from "./axiosConfig";

// Login
export const loginUser = async (data) => {
  const response = await API.post("auth/login/", data);
  return response.data;
};

// Register
export const registerUser = async (data) => {
  const response = await API.post("auth/register/", data);
  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};
