import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axiosInstance from './axiosConfig';  // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(''); // State for OTP input
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP has been sent
  const [waiting, setWaiting] = useState(false); // State to track waiting message
  const navigate = useNavigate();  // Initialize useNavigate

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setWaiting(false);  // Reset waiting state

    try {
      // Replace '/send-otp' with your actual endpoint for sending OTP
      const response = await axiosInstance.post('/send-otp', { email });
      console.log('OTP sent successfully:', response.data);
      setSuccess('OTP has been sent to your email.');
      setOtpSent(true);  // Indicate OTP has been sent
    } catch (err) {
      console.error('Failed to send OTP:', err);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace '/verify-otp' with your actual endpoint for OTP verification
      const response = await axiosInstance.post('/verify-otp', { email, otp });
      console.log('OTP verification successful:', response.data);
      setSuccess('OTP verified successfully.');
      // Redirect to the password reset page
      navigate('/reset-password');  // Adjust the path as needed
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
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?technology,abstract")', // Replace with your image URL
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
              <h2 className="text-center mb-4" style={{ color: '#007bff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>Forgot Password</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && !waiting && <Alert variant="success">{success}</Alert>}
              {waiting && <div className="text-center">Waiting for OTP verification...</div>} {/* Waiting message */}
              {!otpSent ? (
                <Form onSubmit={handleResetPassword}>
                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    {loading ? 'Sending OTP...' : 'Send OTP'}
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={handleVerifyOtp}>
                  <Form.Group controlId="formOtp" className="mb-4">
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP sent to your email"
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
                    {loading ? 'Verifying OTP...' : 'Verify OTP'}
                  </Button>
                </Form>
              )}
              <div className="text-center mt-3">
                <a href="/login" style={{ color: '#007bff' }}>Remembered your password? Login here</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
