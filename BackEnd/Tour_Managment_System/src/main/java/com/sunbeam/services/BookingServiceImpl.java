package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.daos.BookingDao;
import com.sunbeam.daos.TourPackageDao;
import com.sunbeam.daos.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDTO;
import com.sunbeam.dto.BookingRespDTO;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.TourPackage;
import com.sunbeam.entities.User;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    
    @Autowired
    private BookingDao bookingDao;
    
    @Autowired
    private UserDao userDao;
    
    @Autowired
    private TourPackageDao tourPackageDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ApiResponse saveBooking(BookingDTO bookingDTO) {
        User user = userDao.findById(bookingDTO.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Customer ID!"));
        TourPackage tourPackage = tourPackageDao.findById(bookingDTO.getTourPackageId())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Tour Package ID!"));

        Booking booking = modelMapper.map(bookingDTO, Booking.class);
        booking.setCustomer(user);
        booking.setTourPackage(tourPackage);
        booking = bookingDao.save(booking);

        return new ApiResponse("Booking created successfully");
    }

    @Override
    public List<BookingRespDTO> getAllBookings() {
        return bookingDao.findAll().stream()
                .map(booking -> {
                    BookingRespDTO dto = modelMapper.map(booking, BookingRespDTO.class);
                    dto.setTourPackageName(booking.getTourPackage().getName());
                    dto.setCustomerName(booking.getCustomer().getName());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public BookingRespDTO getBookingById(Long id) {
        Booking booking = bookingDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));
        BookingRespDTO dto = modelMapper.map(booking, BookingRespDTO.class);
        dto.setTourPackageName(booking.getTourPackage().getName());
        dto.setCustomerName(booking.getCustomer().getName());
        return dto;
    }

    @Override
    public ApiResponse deleteBooking(Long id) {
        Booking booking = bookingDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));
        bookingDao.delete(booking);
        return new ApiResponse("Booking deleted successfully");
    }

    @Override
    public ApiResponse updateBooking(Long id, BookingDTO bookingDTO) {
        Booking booking = bookingDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));
        
        booking.setStatus(bookingDTO.getStatus());
        booking.setBookingDate(bookingDTO.getBookingDate());
        
        bookingDao.save(booking);
        return new ApiResponse("Booking updated successfully");
    }


}
