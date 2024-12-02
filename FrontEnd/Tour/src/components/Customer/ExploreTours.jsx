// src/components/ExploreTours.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import TourPackage from './TourPackage';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ExploreTours = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetching tour packages from the API
    axiosInstance.get('/tour-packages')
      .then(response => {
        setTourPackages(response.data); // Store the tour packages in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message); // Store the error message if the request fails
        setLoading(false); // Set loading to false after attempt to fetch data
      });
  }, []);

  const handleBooking = (tourPackageId) => {
    // Redirect to booking details page
    navigate(`/customer/booking-details/${tourPackageId}`);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-12 text-center">
            <h1>Explore Tours</h1>
            <p>Discover our wide range of exciting tour packages and find your next adventure!</p>
          </div>
        </div>
        <div className="row">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-danger">Error: {error}</p>}
          {!loading && !error && tourPackages.map(pkg => (
            <TourPackage key={pkg.id} pkg={pkg} onBook={handleBooking} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreTours;
