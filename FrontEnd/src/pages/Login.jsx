import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import axiosInstance from '../utils/axiosConfig' // Import the custom axios instance

const Login = () => {
   const [credentials, setCredentials] = useState({
      email: '',
      password: ''
   })

   const { dispatch } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      dispatch({ type: 'LOGIN_START' })

      try {
         debugger;
         const res = await axiosInstance.post('/users/signin', credentials)
         console.log(res);
         const result = res.data

         if (res.status !== 201) {
            alert(result.message)
         } else {
            dispatch({ type: 'LOGIN_SUCCESS', payload: result })

            // Redirect based on user role
            const role = result.role
            if (role === 'ADMIN') {
               navigate('/admin-dashboard')
            } else if (role === 'GUIDE') {
               navigate('/guide-dashboard')
            } else {
               navigate('/') // Default for CUSTOMER and others
            }
         }
      } catch (err) {
         dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
         alert('Login failed. Please check your credentials.')
      }
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={loginImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Login
