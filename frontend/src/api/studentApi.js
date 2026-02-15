import API from "./axiosConfig";

// Get all students
export const getStudents = async () => {
  const response = await API.get("students/");
  return response.data;
};

// Create student
export const createStudent = async (data) => {
  const response = await API.post("students/", data);
  return response.data;
};

// Update student
export const updateStudent = async (id, data) => {
  const response = await API.put(`students/${id}/`, data);
  return response.data;
};

// Delete student
export const deleteStudent = async (id) => {
  const response = await API.delete(`students/${id}/`);
  return response.data;
};
