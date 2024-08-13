import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axiosInstance from '../Customer/axiosConfig'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'CUSTOMER' // Default role set to CUSTOMER
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post('/users', form);
      console.log('Registration successful:', response.data);
      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?travel,adventure")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333', // Slightly darker text for better contrast
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="d-flex justify-content-center">
            <div
              className="p-5 rounded shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)', // Increased opacity for better text visibility
                color: '#333', // Text color adjusted for better visibility
                width: '100%',
                maxWidth: '500px' // Adjusted width for better fit
              }}
            >
              <h2 className="text-center mb-4" style={{ color: '#007bff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formRole" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={form.role}
                    readOnly
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ borderRadius: '0.5rem' }}
                >
                  Sign Up
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p style={{ color: '#007bff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>Already have an account? <a href="/login" style={{ color: '#0056b3', textDecoration: 'underline' }}>Log in here</a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
