import API from "./axiosConfig";

// Get all complaints
export const getComplaints = async () => {
  const response = await API.get("complaints/");
  return response.data;
};

// Create complaint
export const createComplaint = async (data) => {
  const response = await API.post("complaints/", data);
  return response.data;
};

// Update complaint
export const updateComplaint = async (id, data) => {
  const response = await API.put(`complaints/${id}/`, data);
  return response.data;
};

// Delete complaint
export const deleteComplaint = async (id) => {
  const response = await API.delete(`complaints/${id}/`);
  return response.data;
};
