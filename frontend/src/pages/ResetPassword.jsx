import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    otp: "",
    new_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("reset-password/", form);
      alert("Password Reset Successful");
      navigate("/login");
    } catch {
      alert("Reset Failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card shadow p-4">
        <h4 className="text-center mb-3">Reset Password</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="OTP"
            onChange={(e) =>
              setForm({ ...form, otp: e.target.value })
            }
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="New Password"
            onChange={(e) =>
              setForm({ ...form, new_password: e.target.value })
            }
          />

          <button className="btn btn-danger w-100">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
