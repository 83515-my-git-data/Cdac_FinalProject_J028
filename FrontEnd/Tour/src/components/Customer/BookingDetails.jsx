import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosConfig';

const BookingDetails = () => {
  const { id } = useParams(); // Get the tour package ID from URL params
  const [tourPackage, setTourPackage] = useState(null);
  const [email, setEmail] = useState(''); // Initialize with empty string
  const [password, setPassword] = useState(''); // Initialize with empty string
  const [date, setDate] = useState(''); // Initialize with empty string for booking date
  const [userError, setUserError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch the specific tour package details
    axiosInstance.get(`/tour-packages/${id}`)
      .then(response => {
        setTourPackage(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  const handleUserFetch = async () => {
    try {
      const response = await axiosInstance.post('/users/signin', {
        email,
        password,
      });
      return response.data.userId; // Return the user ID for booking
    } catch (err) {
      setUserError('Failed to fetch user details. Please check your email and password.');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = await handleUserFetch();
    if (!userId) return; // Abort if user ID is not fetched successfully

    try {
      // Submit booking details
      await axiosInstance.post('/bookings', {
        userId,
        packageId: id,
        status: 'CONFIRMED',
        date, // Include the date in the booking request
      });
      navigate('/booking-successful'); // Redirect to booking success page
    } catch (err) {
      setError('Failed to confirm booking. Please try again.');
    }
  };

  if (!tourPackage) return <p>Loading...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container mt-5">
      <h2>Booking Details</h2>
      <div>
        <h3>{tourPackage.name}</h3>
        <p>{tourPackage.description}</p>
        <p>Price: ₹{tourPackage.price}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Booking Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          {userError && <p className="text-danger">{userError}</p>}
          <button type="submit" className="btn btn-primary">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetails;
