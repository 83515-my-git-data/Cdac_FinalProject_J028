// src/components/Admin/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const AdminDashboard = () => {
  return (
    
    <div className="container">
    <Header />
      <h1 className="text-center my-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Customers</h5>
              <Link to="/admin/manage-users" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Guides</h5>
              <Link to="/admin/manage-guides" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Add Guide</h5>
              <Link to="/admin/add-guide" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
