import { useEffect, useState } from "react";
import API from "../api/axiosConfig";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.get("students/")
      .then(res => setStudents(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Students</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
