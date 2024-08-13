// src/components/BookingSuccess.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import Header from '../common/Header';
import Footer from '../common/Footer';

const BookingSuccess = () => {
  const { id } = useParams(); // Tour package ID
  const [userDetails, setUserDetails] = useState({ name: '', email: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axiosInstance.post('/bookings', {
        tourPackageId: id,
        ...userDetails,
      });
      setSuccess('Booking confirmed! Your details have been submitted.');
    } catch (error) {
      setError('Booking failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center">Booking Details</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
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
              value={userDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Booking'}
          </button>
          {success && <p className="text-success mt-3">{success}</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingSuccess;
