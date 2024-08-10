package com.sunbeam.services;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewDTO;
import com.sunbeam.dto.ReviewRespDTO;

import java.util.List;

public interface ReviewService {
    ApiResponse saveReview(ReviewDTO reviewDTO);
    List<ReviewRespDTO> getAllReviews();
    ReviewRespDTO getReviewById(Long id);
    ApiResponse deleteReview(Long id);
    ApiResponse updateReview(Long id, ReviewDTO reviewDTO);
}
