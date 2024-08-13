import React, { useState } from 'react';
import axiosInstance from '../Customer/axiosConfig';
import Header from '../common/Header';
import Footer from '../common/Footer';

const AddTourPackage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('duration', duration);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axiosInstance.post('/tour-packages/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(true);
      setError('');
      // Clear form fields after successful submission
      setName('');
      setDescription('');
      setPrice('');
      setDuration('');
      setStartDate('');
      setEndDate('');
      setImage(null);
    } catch (err) {
      setSuccess(false);
      setError('Failed to add tour package. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-lg-8 col-md-10">
            <h1 className="text-center mb-4">Add New Tour Package</h1>
            {success && <div className="alert alert-success">Tour package added successfully!</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Package Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group mb-3">
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
              <div className="form-group mb-3">
                <label htmlFor="duration">Duration (days)</label>
                <input
                  type="number"
                  className="form-control"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="image">Package Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Tour Package</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddTourPackage;
