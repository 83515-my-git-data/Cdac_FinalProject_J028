package com.sunbeam.services;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDTO;
import com.sunbeam.dto.BookingRespDTO;
import com.sunbeam.dto.UserDTO;

import java.util.List;

public interface BookingService {
    ApiResponse saveBooking(BookingDTO bookingDTO);
    List<BookingRespDTO> getAllBookings();
    BookingRespDTO getBookingById(Long id);
    ApiResponse deleteBooking(Long id);
    ApiResponse updateBooking(Long id, BookingDTO bookingDTO);
    
}
