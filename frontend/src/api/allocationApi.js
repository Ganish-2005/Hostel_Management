import API from "./axiosConfig";

export const getAllocations = async () => {
  const response = await API.get("allocations/");
  return response.data;
};

export const createAllocation = async (data) => {
  const response = await API.post("allocations/", data);
  return response.data;
};

export const deleteAllocation = async (id) => {
  await API.delete(`allocations/${id}/`);
};
