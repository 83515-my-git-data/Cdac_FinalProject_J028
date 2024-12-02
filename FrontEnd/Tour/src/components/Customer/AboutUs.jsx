import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>
        <p className="mt-4">
          Welcome to Tour Management! We are dedicated to providing you with the best travel experiences. 
          Our team of experienced professionals is passionate about creating unforgettable journeys 
          tailored to your preferences. Whether you are looking for a relaxing vacation or an adventurous 
          getaway, we have something for everyone.
        </p>
        <p>
          Our mission is to make travel easy and accessible for everyone. We work tirelessly to ensure that 
          every aspect of your trip is perfect, from the moment you book to the moment you return home. 
          Thank you for choosing Tour Management. We look forward to helping you explore the world!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
