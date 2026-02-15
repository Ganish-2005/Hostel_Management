import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/dashboard">
          🏨 Hostel Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/allocations">
                Allocations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/fees">
                Fees
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/complaints">
                Complaints
              </Link>
            </li>
          </ul>

          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
