import React, { useState } from 'react';

const Empform = () => {
    const [employeedetails, setEmployeedetails] = useState({
        name: "",
        id: "",
        Department: "",
        email: "",
        Role: ""
    });

    const handleChange = (e) => {
        setEmployeedetails({
            ...employeedetails,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Submitting form...");
        try {
            const response = await fetch("http://localhost:5000/employeescreate", { // Fixed endpoint
                method: 'POST',
                headers: { "Content-Type": "application/json" }, // Fixed `headers` key
                body: JSON.stringify(employeedetails)
            });

            if (response.ok) { // Check for successful response
                const result = await response.json();
                console.log("Employee details saved successfully", result);
                alert("Employee details saved successfully");
                setEmployeedetails({
                    name: "",
                    id: "",
                    Department: "",
                    email: "",
                    Role: ""
                });
            } else {
                alert("Failed to submit form");
            }
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <div className="empForm">
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <h1>Employee Form</h1>
                    <label>Employee Name</label>
                    <input
                        type="text"
                        id="name"
                        value={employeedetails.name}
                        placeholder="Enter your name here"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Employee ID</label>
                    <input
                        type="number"
                        id="id"
                        value={employeedetails.id}
                        placeholder="Enter your ID here"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Employee Department</label>
                    <input
                        type="text"
                        id="Department"
                        value={employeedetails.Department}
                        placeholder="Enter your department here"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Employee Email</label>
                    <input
                        type="email"
                        id="email"
                        value={employeedetails.email}
                        placeholder="Enter your email here"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Employee Role</label>
                    <input
                        type="text"
                        id="Role"
                        value={employeedetails.Role}
                        placeholder="Enter your role here"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Empform;
