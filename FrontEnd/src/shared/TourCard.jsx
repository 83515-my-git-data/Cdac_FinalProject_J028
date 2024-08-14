import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'

const TourCard = ({ tour }) => {
   const { id, name, imageUrl, price, reviews, duration, startDate, endDate } = tour
   const { totalRating, avgRating } = calculateAvgRating(reviews)

   return (
      <div className='tour__card'>
         <Card>
            <div className="tour__img">
               <img src={imageUrl} alt={`${name} tour image`} />
            </div>

            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__rating d-flex align-items-center gap-1">
                     <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
                  </span>
               </div>

               <h5 className='tour__title'><Link to={`/tours/${id}`}>{name}</Link></h5>

               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                  <h5>${price} <span> /per person</span></h5>
                  <Link to={`/tours/${id}`}>
                     <button className='booking__btn'>Book Now</button>
                  </Link>
               </div>

               <div className="tour__details mt-3">
                  <p>Duration: {duration} days</p>
                  <p>Start Date: {startDate}</p>
                  <p>End Date: {endDate}</p>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}

export default TourCard
