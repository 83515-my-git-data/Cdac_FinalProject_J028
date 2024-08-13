// src/components/Customer/BookingManagement.js
import React from 'react';
import { Link } from 'react-router-dom';

const bookings = [
  { id: 1, tourPackage: 'Beach Paradise', date: '2024-05-20', status: 'Confirmed' },
  { id: 2, tourPackage: 'Mountain Adventure', date: '2024-06-15', status: 'Pending' }
];

const BookingManagement = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Booking Management</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tour Package</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.tourPackage}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
              <td>
                <Link to={`/customer/booking-details/${booking.id}`} className="btn btn-primary btn-sm">Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
