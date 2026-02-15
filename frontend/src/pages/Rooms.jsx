import { useEffect, useState } from "react";
import API from "../api/axiosConfig";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    API.get("rooms/")
      .then(res => setRooms(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Rooms</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Room No</th>
            <th>Capacity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(r => (
            <tr key={r.id}>
              <td>{r.room_number}</td>
              <td>{r.capacity}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
