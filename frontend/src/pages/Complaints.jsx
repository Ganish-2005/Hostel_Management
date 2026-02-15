import { useEffect, useState } from "react";
import { getComplaints, createComplaint, deleteComplaint } from "../api/complaintApi";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({
    student: "",
    title: "",
    description: ""
  });

  const fetchComplaints = async () => {
    const data = await getComplaints();
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComplaint(form);
    fetchComplaints();
  };

  const handleDelete = async (id) => {
    await deleteComplaint(id);
    fetchComplaints();
  };

  return (
    <div className="container mt-4">
      <h2>Complaints</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input name="student" placeholder="Student ID" className="form-control mb-2" onChange={handleChange} required />
        <input name="title" placeholder="Title" className="form-control mb-2" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-dark">Submit Complaint</button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.student}</td>
              <td>{c.title}</td>
              <td>{c.status}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Complaints;
