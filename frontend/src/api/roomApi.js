import API from "./axiosConfig";

// Get all rooms
export const getRooms = async () => {
  const response = await API.get("rooms/");
  return response.data;
};

// Create room
export const createRoom = async (data) => {
  const response = await API.post("rooms/", data);
  return response.data;
};

// Update room
export const updateRoom = async (id, data) => {
  const response = await API.put(`rooms/${id}/`, data);
  return response.data;
};

// Delete room
export const deleteRoom = async (id) => {
  const response = await API.delete(`rooms/${id}/`);
  return response.data;
};
