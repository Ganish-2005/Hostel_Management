import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight, AlertCircle, Loader2 } from "lucide-react";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Use the exact endpoint from your Django views: 'forgot-password/'
      const res = await API.post("forgot-password/", { email: email.trim().toLowerCase() });
      
      // Store email so the Verify page knows which user we are talking about
      localStorage.setItem("reset_email", email.trim().toLowerCase());
      
      alert("OTP sent to your email!");
      navigate("/verify");
    } catch (err) {
      console.error("Email error:", err.response?.data);
      const msg = err.response?.data?.error || "Failed to send OTP. Please check your email or connection.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card border-0 shadow-lg col-md-5 col-lg-4 overflow-hidden">
        <div className="bg-warning p-4 text-dark text-center">
          <Mail size={40} className="mb-2" />
          <h2 className="fw-bold">Forgot Password</h2>
          <p className="small opacity-75">We'll send a 6-digit code to your inbox</p>
        </div>

        <div className="card-body p-4">
          {error && (
            <div className="alert alert-danger d-flex align-items-center small py-2" role="alert">
              <AlertCircle size={16} className="me-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label small fw-bold text-muted">Email Address</label>
              <input
                type="email"
                className="form-control bg-light"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button 
              className="btn btn-warning w-100 py-2 fw-bold d-flex align-items-center justify-content-center shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="me-2 animate-spin" size={18} /> Sending...
                </>
              ) : (
                <>
                  Send OTP <ArrowRight size={18} className="ms-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;