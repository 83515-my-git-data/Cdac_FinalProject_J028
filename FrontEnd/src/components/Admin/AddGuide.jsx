import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';

const AddGuide = () => {
  const navigate = useNavigate(); // For navigating after submission
  const [guide, setGuide] = useState({
    name: '',
    email: '',
    password: '', // Added password field
    role: 'GUIDE' // Pre-set the role to GUIDE
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuide({
      ...guide,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form to add a new guide
    axiosInstance.post('/users', guide)
      .then(() => {
        alert('Guide added successfully!');
        navigate('/admin/manage-guides'); // Redirect to manage users page
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4">Add Guide</h1>
      {error && <p className="text-center text-danger">Error: {error}</p>}
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={guide.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={guide.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={guide.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value="GUIDE"
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Guide</button>
      </form>
    </div>
  );
};

export default AddGuide;
