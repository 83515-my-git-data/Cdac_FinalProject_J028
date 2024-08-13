import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import { BASE_URL } from '../utils/config'

const Tours = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)
   const [tours, setTours] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchTours = async () => {
         try {
            setLoading(true)
            const response = await axios.get(`${BASE_URL}/tour-packages`, {
               params: { page },
            })
            setTours(response.data.tours)
            setPageCount(Math.ceil(response.data.totalCount / 8))
         } catch (err) {
            setError('Failed to fetch tours')
         } finally {
            setLoading(false)
         }
      }

      fetchTours()
      window.scrollTo(0, 0)
   }, [page])

   return (
      <>
         <CommonSection title={"All Tours"} />
         <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {tours.map(tour => (
                        <Col lg='3' md='6' sm='6' className='mb-4' key={tour.id}>
                           <TourCard tour={tour} />
                        </Col>
                     ))}

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default Tours
