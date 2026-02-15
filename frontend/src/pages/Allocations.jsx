import { useEffect, useState } from "react";
import { getAllocations, createAllocation, deleteAllocation } from "../api/allocationApi";

function Allocations() {
  const [allocations, setAllocations] = useState([]);
  const [form, setForm] = useState({
    student: "",
    room: "",
    allocated_date: ""
  });

  const fetchAllocations = async () => {
    const data = await getAllocations();
    setAllocations(data);
  };

  useEffect(() => {
    fetchAllocations();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAllocation(form);
    fetchAllocations();
  };

  const handleDelete = async (id) => {
    await deleteAllocation(id);
    fetchAllocations();
  };

  return (
    <div className="container mt-4">
      <h2>Room Allocations</h2>

      <form onSubmit={handleSubmit} className="row mb-4">
        <div className="col">
          <input name="student" placeholder="Student ID" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <input name="room" placeholder="Room ID" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <input type="date" name="allocated_date" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <button className="btn btn-dark">Allocate</button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Room</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((a) => (
            <tr key={a.id}>
              <td>{a.student}</td>
              <td>{a.room}</td>
              <td>{a.allocated_date}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a.id)}>
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

export default Allocations;
