import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    otp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("verify-otp/", form);
      alert("OTP Verified Successfully");
      navigate("/reset");
    } catch {
      alert("Invalid or Expired OTP");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card shadow p-4">
        <h4 className="text-center mb-3">Verify OTP</h4>

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
            placeholder="Enter OTP"
            onChange={(e) =>
              setForm({ ...form, otp: e.target.value })
            }
          />

          <button className="btn btn-warning w-100">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOTP;
