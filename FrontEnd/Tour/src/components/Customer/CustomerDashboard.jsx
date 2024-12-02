// src/components/Customer/CustomerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Customer Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Explore Tours</h5>
              <Link to="/customer/explore-tours" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Booking Management</h5>
              <Link to="/customer/booking-management" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Profile</h5>
              <Link to="/customer/profile" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
