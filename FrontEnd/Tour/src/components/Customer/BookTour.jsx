import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import Header from '../common/Header';
import Footer from '../common/Footer';

const BookTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tourPackage, setTourPackage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch tour package details from the backend using Axios
    axiosInstance.get(`/tour-packages/${id}`)
      .then(response => {
        setTourPackage(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send booking data to the backend using Axios
    axiosInstance.post('/bookings', {
      user_id: 1, // Replace with the actual user ID from your authentication system
      tour_package_id: id,
      booking_date: new Date(),
      status: 'PENDING'
    })
      .then(response => {
        setSuccess(true);
        setTimeout(() => navigate(`/booking-success/${response.data.id}`), 2000); // Redirect to the booking success page after 2 seconds
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center">Book Tour</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-danger">Error: {error}</p>}
        {tourPackage && (
          <>
            <p className="text-center">Booking tour: {tourPackage.title}</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Book Now</button>
              {success && <p className="text-success text-center mt-3">Booking successful! Redirecting...</p>}
            </form>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookTour;

















// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../common/Header';
// import Footer from '../common/Footer';

// const BookTour = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [tourPackage, setTourPackage] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     // Simulate fetching tour package details with hardcoded data
//     const mockTourPackage = {
//       id: id,
//       title: 'Amazing Tour Package',
//       description: 'Experience the best tour ever!',
//     };

//     setTimeout(() => {
//       setTourPackage(mockTourPackage);
//       setLoading(false);
//     }, 1000); // Simulate loading time
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate booking process with hardcoded response
//     const mockResponse = {
//       data: {
//         id: 12345, // Mock booking ID
//       },
//     };

//     setTimeout(() => {
//       setSuccess(true);
//       setTimeout(() => navigate(`/booking-success/${mockResponse.data.id}`), 2000); // Redirect to booking success page after 2 seconds
//     }, 1000); // Simulate processing time
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mt-5">
//         <h1 className="text-center">Book Tour</h1>
//         {loading && <p className="text-center">Loading...</p>}
//         {error && <p className="text-center text-danger">Error: {error}</p>}
//         {tourPackage && (
//           <>
//             <p className="text-center">Booking tour: {tourPackage.title}</p>
//             <form onSubmit={handleSubmit} className="mt-4">
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary btn-block">Book Now</button>
//               {success && <p className="text-success text-center mt-3">Booking successful! Redirecting...</p>}
//             </form>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BookTour;



























// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axiosInstance from './axiosConfig';
// // import Header from '../common/Header';
// // import Footer from '../common/Footer';

// // const BookTour = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [tourPackage, setTourPackage] = useState(null);
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(false);

// //   useEffect(() => {
// //     // Fetch tour package details
// //     axiosInstance.get(`/tour-packages/${id}`)
// //       .then(response => {
// //         setTourPackage(response.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         setError(error.message);
// //         setLoading(false);
// //       });
// //   }, [id]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Simulate booking process
// //     axiosInstance.post('/bookings', {
// //       user_id: 1, // Replace with actual user ID
// //       tour_package_id: id,
// //       booking_date: new Date(),
// //       status: 'PENDING'
// //     })
// //       .then(response => {
// //         setSuccess(true);
// //         setTimeout(() => navigate(`/booking-success/${response.data.id}`), 2000); // Redirect to booking success page after 2 seconds
// //       })
// //       .catch(error => {
// //         setError(error.message);
// //       });
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div className="container mt-5">
// //         <h1 className="text-center">Book Tour</h1>
// //         {loading && <p className="text-center">Loading...</p>}
// //         {error && <p className="text-center text-danger">Error: {error}</p>}
// //         {tourPackage && (
// //           <>
// //             <p className="text-center">Booking tour: {tourPackage.title}</p>
// //             <form onSubmit={handleSubmit} className="mt-4">
// //               <div className="form-group">
// //                 <label htmlFor="name">Name</label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   id="name"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="email">Email</label>
// //                 <input
// //                   type="email"
// //                   className="form-control"
// //                   id="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="phone">Phone</label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   id="phone"
// //                   value={phone}
// //                   onChange={(e) => setPhone(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="btn btn-primary btn-block">Book Now</button>
// //               {success && <p className="text-success text-center mt-3">Booking successful! Redirecting...</p>}
// //             </form>
// //           </>
// //         )}
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default BookTour;
