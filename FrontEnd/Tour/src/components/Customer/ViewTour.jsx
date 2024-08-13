// src/components/Customer/ViewTour.js
import React from 'react';

const ViewTour = ({ match }) => {
  const tourId = match.params.id;
  const tour = {
    id: tourId,
    title: 'Beach Paradise',
    description: 'Enjoy a relaxing vacation on the beautiful beaches of the Caribbean.',
    price: '$999',
    image: 'https://via.placeholder.com/300x200'
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">{tour.title}</h1>
      <div className="card">
        <img src={tour.image} className="card-img-top" alt={tour.title} />
        <div className="card-body">
          <h5 className="card-title">{tour.title}</h5>
          <p className="card-text">{tour.description}</p>
          <p className="card-text"><strong>Price: </strong>{tour.price}</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default ViewTour;
