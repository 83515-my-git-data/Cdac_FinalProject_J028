import React, { useEffect, useState } from 'react';
import axiosInstance from '../Customer/axiosConfig';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get('/bookings');
        setBookings(response.data);
      } catch (err) {
        setError('Failed to fetch bookings. Please try again later.');
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4">View Bookings</h1>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        {bookings.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Tour Package</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customerName}</td>
                    <td>{booking.tourPackage}</td>
                    <td>{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <p>No bookings available.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ViewBookings;
