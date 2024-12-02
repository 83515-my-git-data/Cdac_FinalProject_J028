import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Tour Management. All rights reserved.</p>
        <p className="mb-0">
          <a href="/customer/about-us">About Us</a> | <a href="/customer/contact-us">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
