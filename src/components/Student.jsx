
//Hook
import { useEffect, useState } from 'react';
//api
import { getStudent } from '../api/StudentAxios';
//component
import StudentList from "../components/StudentList";
//react-bootstrap
import {Table, Spinner } from "react-bootstrap";

const Student = () => {
  const [studentData, setStudentData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      setError("");
      const data = await getStudent();
      setStudentData(Array.isArray(data) ? data : []);
      
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  return (
    <div className="student">
      <h1 className="page-title text-center">
        Student Management System
      </h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentData.map((s, index) => (
            <StudentList
              key={s._id}
              studentData={s}
              index={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Student;