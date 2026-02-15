import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Rooms from "./pages/Rooms";
import Allocations from "./pages/Allocations";
import Fees from "./pages/Fees";
import Complaints from "./pages/Complaints";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/allocations" element={<Allocations />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/complaints" element={<Complaints />} />
      </Routes>
    </>
  );
}

export default App;
