import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-4">
      <div className="container">
        <h1 className="display-4">Welcome to Tour Management System</h1>
        <p className="lead">Your gateway to amazing adventures</p>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3.5rem;
          }
          p {
            font-size: 1.25rem;
          }
        }
        header {
          background: linear-gradient(135deg, #007bff 0%, #00c6ff 100%);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .container {
          padding: 2rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
