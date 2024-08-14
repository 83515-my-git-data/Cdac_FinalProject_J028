import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import axiosInstance from '../utils/axiosConfig' // Import the custom axios instance

const Register = () => {
   const [credentials, setCredentials] = useState({
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      role: 'CUSTOMER' // Default role
   })

   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      // Add a check to ensure password and confirmPassword match
      if (credentials.password !== credentials.confirmPassword) {
         alert("Passwords do not match!")
         return
      }

      try {
         // Call the POST method to create a user with a default role 'CUSTOMER'
         const res = await axiosInstance.post('/users/signup', credentials)
         const result = res.data

         if (res.status !== 201) {
            alert(result.message)
         } else {
            navigate('/login')
         }
      } catch (err) {
         alert(err.message)
      }
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='Name' id='name' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Confirm Password' id='confirmPassword' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Register
