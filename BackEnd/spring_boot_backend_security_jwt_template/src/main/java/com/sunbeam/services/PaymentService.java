package com.sunbeam.services;

import com.sunbeam.dto.PaymentDTO;
import com.sunbeam.dto.PaymentResponseDTO;
import com.sunbeam.dto.ApiResponse;

import java.util.List;

public interface PaymentService {
    ApiResponse createPayment(PaymentDTO paymentDTO);
    List<PaymentResponseDTO> getAllPayments();
    PaymentResponseDTO getPaymentById(Long id);
    ApiResponse updatePayment(Long id, PaymentDTO paymentDTO);
    ApiResponse deletePayment(Long id);
}
