package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.PaymentDao;
import com.sunbeam.daos.BookingDao;
import com.sunbeam.entities.Payment;
import com.sunbeam.entities.Booking;
import com.sunbeam.dto.PaymentDTO;
import com.sunbeam.dto.PaymentResponseDTO;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.custom_exceptions.ResourceNotFoundException;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentDao paymentDao;
    
    @Autowired
    private BookingDao bookingDao;
    
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ApiResponse createPayment(PaymentDTO paymentDTO) {
        Booking booking = bookingDao.findById(paymentDTO.getBookingId())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Booking ID!"));
        Payment payment = modelMapper.map(paymentDTO, Payment.class);
        payment.setBooking(booking);
        payment = paymentDao.save(payment);
        return new ApiResponse("Payment created successfully");
    }

    @Override
    public List<PaymentResponseDTO> getAllPayments() {
        return paymentDao.findAll().stream()
                .map(payment -> modelMapper.map(payment, PaymentResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public PaymentResponseDTO getPaymentById(Long id) {
        Payment payment = paymentDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found"));
        return modelMapper.map(payment, PaymentResponseDTO.class);
    }

    @Override
    public ApiResponse updatePayment(Long id, PaymentDTO paymentDTO) {
        Payment payment = paymentDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found"));
        payment.setAmount(paymentDTO.getAmount());
        payment.setStatus(paymentDTO.getStatus());
        paymentDao.save(payment);
        return new ApiResponse("Payment updated successfully");
    }

    @Override
    public ApiResponse deletePayment(Long id) {
        Payment payment = paymentDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found"));
        paymentDao.delete(payment);
        return new ApiResponse("Payment deleted successfully");
    }
}
