import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import Header from '../common/Header';
import Footer from '../common/Footer';

const BookingConfirmation = () => {
  const { id } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axiosInstance.get(`/bookings/${id}`);
        setBookingDetails(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mt-5 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container mt-5 text-center text-danger">
          <h1>Error</h1>
          <p>{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-5 text-center">
        <h1>Booking Confirmation</h1>
        <h2>Thank you for your booking!</h2>
        <p>Your booking ID is: {bookingDetails.id}</p>
        <p>Tour Package: {bookingDetails.tourPackage.title}</p>
        <p>Booking Date: {new Date(bookingDetails.booking_date).toLocaleDateString()}</p>
        <p>Status: {bookingDetails.status}</p>
        <p>We will contact you soon with more details.</p>
      </div>
      <Footer />
    </>
  );
};

export default BookingConfirmation;
