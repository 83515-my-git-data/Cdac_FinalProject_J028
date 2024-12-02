// src/components/TourGuide/TourGuideDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const TourGuideDashboard = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="text-center my-4">Tour Guide Dashboard</h1>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Add Tour Packages</h5>
              <Link to="/tour-guide/add-tour-packages" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">View Bookings</h5>
              <Link to="/tour-guide/view-bookings" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Customer Details</h5>
              <Link to="/tour-guide/view-customers" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourGuideDashboard;
