import API from "./axiosConfig";

// Get all fees
export const getFees = async () => {
  const response = await API.get("fees/");
  return response.data;
};

// Create fee record
export const createFee = async (data) => {
  const response = await API.post("fees/", data);
  return response.data;
};

// Update fee status
export const updateFee = async (id, data) => {
  const response = await API.put(`fees/${id}/`, data);
  return response.data;
};

// Delete fee
export const deleteFee = async (id) => {
  const response = await API.delete(`fees/${id}/`);
  return response.data;
};
