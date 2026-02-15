import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "STUDENT", // default role
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Hostel Register</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <select
              name="role"
              className="form-control"
              onChange={handleChange}
            >
              <option value="STUDENT">Student</option>
              <option value="WARDEN">Warden</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button className="btn btn-dark w-100">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
