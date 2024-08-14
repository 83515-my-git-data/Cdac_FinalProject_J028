import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig';

const UpdateUserPage = () => {
  const { id } = useParams(); // Get user ID from URL parameters
  const navigate = useNavigate(); // To programmatically navigate after update
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user details by ID when the component mounts
    axiosInstance.get(`/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user details
    axiosInstance.put(`/users/${id}`, user)
      .then(() => {
        alert('User updated successfully!');
        navigate('/admin/manage-guides'); // Redirect to the ManageUsers page
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4">Update User</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">Error: {error}</p>}
      {!loading && !error && (
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
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
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={user.role}
              onChange={handleChange}
              required
            >
              <option value="CUSTOMER">Customer</option>
              <option value="ADMIN">Admin</option>
              <option value="GUIDE">Guide</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Update User</button>
        </form>
      )}
    </div>
  );
};

export default UpdateUserPage;
