import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData, // Preserve existing state
      [e.target.name]: e.target.value, // Dynamically update the field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Data Submitted:', formData);

    // Simulate saving data to the database
    // Replace this with an actual API call if needed
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User saved successfully:', data);

        // Clear the form after successful submission
        setFormData({ name: '', email: '', password: '' });
      })
      .catch((error) => {
        console.error('Error saving user:', error);
      });
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name} // Controlled input
            onChange={handleChange}
            required
          />
          <br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email} // Controlled input
            onChange={handleChange}
            required
          />
          <br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password} // Controlled input
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
