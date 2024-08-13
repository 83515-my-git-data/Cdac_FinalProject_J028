import React from 'react';

const Hero = () => {
  return (
    <div className="jumbotron text-center" style={{ backgroundImage: "url('hero-image.jpg')", backgroundSize: 'cover', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 className="display-4">Welcome to TourBuddy</h1>
      <p className="lead">Your ultimate app for booking tour packages and planning unforgettable trips.</p>
      <a className="btn btn-primary btn-lg" href="#features" role="button">Explore Now</a>
    </div>
  );
};

export default Hero;
