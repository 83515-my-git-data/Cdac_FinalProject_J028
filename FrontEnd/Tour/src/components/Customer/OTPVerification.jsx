import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axiosInstance from './axiosConfig';  // Adjust the import path as needed

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace '/verify-otp' with your actual endpoint for OTP verification
      const response = await axiosInstance.post('/verify-otp', { otp });
      console.log('OTP verification successful:', response.data);
      setSuccess('OTP verified successfully. Redirecting...');
      // Handle successful OTP verification (e.g., redirect to another page)
    } catch (err) {
      console.error('OTP verification failed:', err);
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?technology,code")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
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
              <h2 className="text-center mb-4" style={{ color: '#007bff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>Verify OTP</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleVerifyOtp}>
                <Form.Group controlId="formOtp" className="mb-4">
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the OTP sent to your email/phone"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
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
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="/resend-otp" style={{ color: '#007bff' }}>Didn't receive the OTP? Resend it</a>
              </div>
              <div className="text-center mt-3">
                <a href="/login" style={{ color: '#007bff' }}>Go back to Login</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OTPVerification;
