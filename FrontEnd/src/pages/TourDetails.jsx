import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import axiosInstance from '../utils/axiosConfig';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
   const { id } = useParams();
   const reviewMsgRef = useRef('');
   const [tour, setTour] = useState(null);
   const [tourRating, setTourRating] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const { user } = useContext(AuthContext);

   useEffect(() => {
      const fetchTourDetails = async () => {
         try {
            const res = await axiosInstance.get(`/tours/${id}`, {
               params: {
                  fields: 'description,duration,end_date,image,name,price,start_date'
               }
            });
            setTour(res.data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchTourDetails();
      window.scrollTo(0, 0);
   }, [id]);

   const submitHandler = async e => {
      e.preventDefault();
      const reviewText = reviewMsgRef.current.value;

      try {
         if (!user) {
            alert('Please sign in');
            return;
         }

         const reviewObj = {
            username: user?.username,
            reviewText,
            rating: tourRating,
         };

         const res = await axiosInstance.post(`/review/${id}`, reviewObj);

         if (res.status !== 200) {
            return alert(res.data.message);
         }
         alert(res.data.message);
      } catch (error) {
         alert(error.message);
      }
   };

   if (loading) return <h4 className='text-center pt-5'>LOADING.........</h4>;
   if (error) return <h4 className='text-center pt-5'>{error}</h4>;

   const { description, duration, end_date, image, name, price, start_date } = tour;

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8'>
                  <div className="tour__content">
                     <img src={image} alt={name} />

                     <div className="tour__info">
                        <h2>{name}</h2>
                        <div className="tour__extra-details">
                           <span>Duration: {duration} days</span>
                           <span>Start Date: {start_date}</span>
                           <span>End Date: {end_date}</span>
                           <span>Price: ${price}</span>
                        </div>
                        <h5>Description</h5>
                        <p>{description}</p>
                     </div>

                     <div className="tour__reviews mt-4">
                        <h4>Leave a Review</h4>

                        <Form onSubmit={submitHandler}>
                           <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                              <span onClick={() => setTourRating(1)}>1 <i className='ri-star-s-fill'></i></span>
                              <span onClick={() => setTourRating(2)}>2 <i className='ri-star-s-fill'></i></span>
                              <span onClick={() => setTourRating(3)}>3 <i className='ri-star-s-fill'></i></span>
                              <span onClick={() => setTourRating(4)}>4 <i className='ri-star-s-fill'></i></span>
                              <span onClick={() => setTourRating(5)}>5 <i className='ri-star-s-fill'></i></span>
                           </div>

                           <div className="review__input">
                              <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                              <button className='btn primary__btn text-white' type='submit'>Submit</button>
                           </div>
                        </Form>

                        <ListGroup className='user__reviews'>
                           {/* Reviews will be displayed here */}
                        </ListGroup>
                     </div>
                  </div>
               </Col>

               <Col lg='4'>
                  <Booking tour={tour} />
               </Col>
            </Row>
         </Container>
         <Newsletter />
      </section>
   );
};

export default TourDetails;
