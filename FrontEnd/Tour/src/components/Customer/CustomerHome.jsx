import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';

const HomePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="text-center">
          <h1>Welcome to Our Tour Management System</h1>
          <p>Your journey to explore the world starts here. Discover exciting tour packages, book your next adventure, and create unforgettable memories!</p>
          <Button variant="primary" as={Link} to="/explore-tours">Explore Tours</Button>
        </div>
        
        {/* Image Section */}
        <div className="mt-5">
          <div className="row">
            <div className="col-md-4">
              <img 
                src="src\images\pexels-asadphoto-1268855.jpg" 
                alt="Tour Image 1" 
                className="img-fluid rounded shadow-sm" 
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-4">
              <img 
                src="src\images\pexels-asadphoto-1450340.jpg" 
                alt="Tour Image 2" 
                className="img-fluid rounded shadow-sm" 
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-4">
              <img 
                src="src\images\pexels-chevanon-333525.jpg" 
                alt="Tour Image 3" 
                className="img-fluid rounded shadow-sm" 
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-5 text-center">
          <img 
            src="src/images/pexels-asadphoto-1268855.jpg" 
            alt="Explore Tours" 
            className="img-fluid rounded shadow-lg" 
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
