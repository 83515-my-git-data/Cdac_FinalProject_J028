import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axiosInstance.post('/users/signin', { email, password });
      const { data } = response;

      console.log('Login successful:', data);

      // Check the user's role and navigate accordingly
      switch (data.role) {
        case 'CUSTOMER':
          navigate('/customer-home');
          break;
        case 'ADMIN':
          navigate('/admin');
          break;
        case 'GUIDE':
          navigate('/tour-guide');
          break;
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="d-flex justify-content-center">
            <div
              className="p-5 rounded shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#333',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              <h2 className="text-center mb-4" style={{ color: '#007bff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={loading}
                  style={{ borderRadius: '0.5rem' }}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="/forgot-password" style={{ color: '#007bff' }}>Forgot your password?</a>
              </div>
              <div className="text-center mt-3">
                <p>Are you new? <a href="/register" style={{ color: '#007bff' }}>Register here</a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
