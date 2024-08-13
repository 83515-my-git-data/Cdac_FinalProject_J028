
// src/components/TourPackage.js
import React from 'react';

const TourPackage = ({ pkg, onBook }) => {
  console.log(pkg); // Log the package object to check the imageUrl
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        {pkg.imageUrl && (
          <img
            src={pkg.imageUrl}
            className="card-img-top"
            alt={pkg.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{pkg.name}</h5>
          <p className="card-text">{pkg.description}</p>
          <p className="card-text">Duration: {pkg.duration} days</p>
          <p className="card-text">Price: ₹{pkg.price}</p>
          <button className="btn btn-primary" onClick={() => onBook(pkg.id)}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
