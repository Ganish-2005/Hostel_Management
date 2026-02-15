import { useEffect, useState } from "react";
import { getFees, createFee, deleteFee } from "../api/feeApi";

function Fees() {
  const [fees, setFees] = useState([]);
  const [form, setForm] = useState({
    student: "",
    amount: "",
    due_date: ""
  });

  const fetchFees = async () => {
    const data = await getFees();
    setFees(data);
  };

  useEffect(() => {
    fetchFees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFee(form);
    fetchFees();
  };

  const handleDelete = async (id) => {
    await deleteFee(id);
    fetchFees();
  };

  return (
    <div className="container mt-4">
      <h2>Fees Management</h2>

      <form onSubmit={handleSubmit} className="row mb-4">
        <div className="col">
          <input name="student" placeholder="Student ID" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <input name="amount" placeholder="Amount" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <input type="date" name="due_date" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col">
          <button className="btn btn-dark">Add Fee</button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((f) => (
            <tr key={f.id}>
              <td>{f.student}</td>
              <td>{f.amount}</td>
              <td>{f.status}</td>
              <td>{f.due_date}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(f.id)}>
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

export default Fees;
