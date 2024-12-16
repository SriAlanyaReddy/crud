import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [currentEmployee, setCurrentEmployee] = useState({ name: '', age: '', position: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/viewEmployees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const handleEditClick = (employee) => {
    setIsEditing(employee._id);
    setCurrentEmployee(employee);
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:5000/updateEmployee/${id}`, currentEmployee)
      .then(response => {
        setEmployees(employees.map(emp => (emp._id === id ? response.data : emp)));
        setIsEditing(null);
      })
      .catch(error => console.error('Error updating employee:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteEmployee/${id}`)
      .then(() => {
        setEmployees(employees.filter(emp => emp._id !== id));
      })
      .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div className="container mt-5">
      <h3>Employee List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              {isEditing === employee._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={currentEmployee.name}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      value={currentEmployee.Role}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="position"
                      className="form-control"
                      value={currentEmployee.email}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleSave(employee._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary ms-2"
                      onClick={() => setIsEditing(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{employee.name}</td>
                  <td>{employee.Role}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(employee)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployees;
