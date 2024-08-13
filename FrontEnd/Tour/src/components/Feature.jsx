import React from 'react';

const Features = () => {
  return (
    <section id="features" className="container my-5">
      <h2 className="text-center mb-4">Features</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-4">
          <img src="src\images\pexels-asadphoto-1268855.jpg" alt="Tour Booking" className="img-fluid rounded-circle mb-3" />
          <h3>Easy Tour Booking</h3>
          <p>Discover and book tour packages with just a few clicks.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img src="src\images\pexels-asadphoto-1268855.jpg" alt="Trip Planning" className="img-fluid rounded-circle mb-3" />
          <h3>Trip Planning</h3>
          <p>Customize your itinerary and manage your trips efficiently.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img src="src\pexels-asadphoto-1268855.jpg" alt="Customer Support" className="img-fluid rounded-circle mb-3" />
          <h3>24/7 Customer Support</h3>
          <p>Get assistance anytime during your travel journey.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
