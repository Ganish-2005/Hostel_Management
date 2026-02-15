import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
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
      const data = await loginUser(form);

      // Store JWT
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Hostel Login</h3>

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
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-dark w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
