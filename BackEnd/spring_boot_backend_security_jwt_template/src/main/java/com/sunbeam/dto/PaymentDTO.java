package com.sunbeam.dto;

import com.sunbeam.entities.Payment.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class PaymentDTO {
    private Long id;
    private Long bookingId;
    private Double amount;
    private Status status;
    private LocalDateTime paymentDate;
}
