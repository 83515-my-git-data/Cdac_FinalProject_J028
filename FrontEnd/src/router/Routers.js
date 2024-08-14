import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import AdminDashboard from '../components/Admin/AdminDashboard'
import ManageUsers from '../components/Admin/ManageUsers'
import ManageGuides from '../components/Admin/ManageGuides'
import AddGuide from '../components/Admin/AddGuide'
import UpdateUserPage from '../components/Admin/UpdateUser'
import CustomersByTourGuide from '../components/Guide/CustomersByTourGuide'
import ViewBookinge from '../components/Guide/ViewBookings'
import AddTourPackages from '../components/Guide/AddTourPackages'
import UpdateTourPackage from '../components/Guide/UpdateTourPackage'
import TourGuideDashboard from '../components/Guide/TourGuideDashboard'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />


         {/* Admin */}
         <Route path='/admin' element={<AdminDashboard/>} />
         <Route path='/admin/manage-users' element={<ManageUsers/>} />
         <Route path='/admin/manage-guides' element={<ManageGuides/>} />
         <Route path='/admin/add-guide' element={<AddGuide/>} />
         <Route path='/admin/update-user/:id' element={<UpdateUserPage/>} />
         

         {/* Guide */}
         <Route path="/tour-guide" element={<TourGuideDashboard />} />
         <Route path="/tour-guide/add-tour-packages" element={<AddTourPackages />} />
         <Route path="/tour-guide/view-bookings" element={<ViewBookinge />} />
         <Route path="/tour-guide/customers-by-tour-guide" element={<CustomersByTourGuide />} />
         <Route path="/tour-guide/update-tour-package" element={<UpdateTourPackage />} />




      </Routes>
   )
}

export default Routers