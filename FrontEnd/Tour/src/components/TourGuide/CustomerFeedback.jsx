// src/components/TourGuide/CustomerFeedback.js
import React from 'react';

const CustomerFeedback = () => {
  const feedbacks = [
    { id: 1, customerName: 'John Doe', feedback: 'Great tour, had an amazing time!' },
    { id: 2, customerName: 'Jane Smith', feedback: 'Well organized and informative.' }
  ];

  return (
    <div className="container">
      <h1 className="text-center my-4">Customer Feedback</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.customerName}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerFeedback;
