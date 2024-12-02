// src/components/Customer/BookingHistory.js
import React from 'react';

const bookings = [
  { id: 1, tourPackage: 'Beach Paradise', date: '2024-05-20', status: 'Completed' },
  { id: 2, tourPackage: 'Mountain Adventure', date: '2024-06-15', status: 'Cancelled' }
];

const BookingHistory = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Booking History</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tour Package</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.tourPackage}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
