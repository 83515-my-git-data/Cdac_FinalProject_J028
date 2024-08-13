// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddGuide from './components/Admin/AddGuide';
import UpdateUsers from './components/Admin/UpdateUsers';
import ManageUsers from './components/Admin/ManageUsers';
import TourGuideDashboard from './components/TourGuide/TourGuideDashboard';
import AddTourPackages from './components/TourGuide/AddTourPackages';
import ViewBookings from './components/TourGuide/ViewBookings';
import CustomersByTourGuide from './components/TourGuide/CustomersByTourGuide';
import UpdateTourPackage from './components/TourGuide/UpdateTourPackage';
import CustomerFeedback from './components/TourGuide/CustomerFeedback';
import Login from './components/Customer/Login';
import Register from './components/Customer/Register';
import ForgotPassword from './components/Customer/ForgotPassword';
import BookTour from './components/Customer/BookTour';
import Payment from './components/Customer/Payment';
import BookingManagement from './components/Customer/BookingManagement';
import Profile from './components/Customer/Profile';
import ViewTour from './components/Customer/ViewTour';
import BookingDetails from './components/Customer/BookingDetails';
import TourDetails from './components/Customer/TourDetails';
import BookingHistory from './components/Customer/BookingHistory';
import EditProfile from './components/Customer/EditProfile';
import AboutUs from './components/Customer/AboutUs';
import ContactUs from './components/Customer/ContactUs';
import LandingPage from './components/Customer/CustomerHome';
import ExploreTours from './components/Customer/ExploreTours';
import BookingConfirmation from './components/Customer/BookingConfirmation';
import BookingSuccess from './components/Customer/BookingSuccess';
import UpdateUser from './components/Admin/UpdateUser';
import ManageGuide from './components/Admin/ManageGuides';
import Logout from './components/Customer/Logout';
import HomePage from './components/Customer/CustomerHome';
import Ok from './ok';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/customer-home" element={<HomePage />} />
        <Route path="/explore-tours" element={<ExploreTours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/book-tour/" element={<BookTour />} />
        <Route path="/booking-success/:id" element={<BookingSuccess />} />
        <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/customer/booking-management" element={<BookingManagement />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/view-tour/:id" element={<ViewTour />} />
        <Route path="/customer/booking-details/:id" element={<BookingDetails />} />
        <Route path="/customer/tour-details/:id" element={<TourDetails />} />
        <Route path="/customer/booking-history" element={<BookingHistory />} />
        <Route path="/customer/edit-profile" element={<EditProfile />} />
        <Route path="/customer/about-us" element={<AboutUs />} />
        <Route path="/customer/contact-us" element={<ContactUs />} />

        <Route path="/ok" element={<Ok />} />



        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-guide" element={<AddGuide />} />
        <Route path="/admin/update-users" element={<UpdateUsers />} />
        <Route path="/admin/manage-guides" element={<ManageGuide />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/update-user/:id" element={<UpdateUser />} />
        <Route path="/logout" element={<Logout />} />

        


        
        <Route path="/tour-guide" element={<TourGuideDashboard />} />
        <Route path="/tour-guide/add-tour-packages" element={<AddTourPackages />} />
        <Route path="/tour-guide/view-bookings" element={<ViewBookings />} />
        <Route path="/tour-guide/customers-by-tour-guide" element={<CustomersByTourGuide />} />
        <Route path="/tour-guide/update-tour-package" element={<UpdateTourPackage />} />
        <Route path="/tour-guide/customer-feedback" element={<CustomerFeedback />} />
      </Routes>
    </Router>
  );
};

export default App;
