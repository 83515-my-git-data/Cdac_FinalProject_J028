import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/users/role/CUSTOMER')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axiosInstance.delete(`/users/${userId}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(err => {
          console.error('Failed to delete user', err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4">Manage Customers</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">Error: {error}</p>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-hover table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="text-center">
                    <Link to={`/admin/update-user/${user.id}`} className="btn btn-sm mr-2">
                      <i className="fas fa-edit"></i> {/* Edit Icon */}
                    </Link>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="fas fa-trash-alt text-danger"></i> {/* Delete Icon */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
