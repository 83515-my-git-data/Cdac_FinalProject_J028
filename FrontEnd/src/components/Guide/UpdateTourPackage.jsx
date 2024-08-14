// src/components/TourGuide/UpdateTourPackage.js
import React, { useState } from 'react';

const UpdateTourPackage = () => {
  const [packageId, setPackageId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update tour package
    console.log({ packageId, title, description, price, image });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Update Tour Package</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="packageId">Package ID</label>
          <input
            type="text"
            className="form-control"
            id="packageId"
            value={packageId}
            onChange={(e) => setPackageId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Package</button>
      </form>
    </div>
  );
};

export default UpdateTourPackage;
