package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.daos.ReviewDao;
import com.sunbeam.daos.TourPackageDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewDTO;
import com.sunbeam.dto.ReviewRespDTO;
import com.sunbeam.entities.Review;
import com.sunbeam.entities.TourPackage;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDao reviewDao;
    
    @Autowired
    private TourPackageDao tourPackageDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ApiResponse saveReview(ReviewDTO reviewDTO) {
        TourPackage tourPackage = tourPackageDao.findById(reviewDTO.getTourPackageId())
            .orElseThrow(() -> new ResourceNotFoundException("Invalid TourPackage id !!!!"));

        Review review = modelMapper.map(reviewDTO, Review.class);
        tourPackage.addReview(review);
        reviewDao.save(review);

        return new ApiResponse("Review created successfully");
    }

    @Override
    public List<ReviewRespDTO> getAllReviews() {
        return reviewDao.findAll().stream()
            .map(review -> modelMapper.map(review, ReviewRespDTO.class))
            .collect(Collectors.toList());
    }

    @Override
    public ReviewRespDTO getReviewById(Long id) {
        Review review = reviewDao.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Review not found"));
        return modelMapper.map(review, ReviewRespDTO.class);
    }

    @Override
    public ApiResponse deleteReview(Long id) {
        Review review = reviewDao.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Review not found"));
        TourPackage tourPackage = tourPackageDao.findById(review.getTourPackage().getId())
            .orElseThrow(() -> new ResourceNotFoundException("Tour Package not Available!!!!"));

//        tourPackage.removeReview(review);
        reviewDao.delete(review);

        return new ApiResponse("Review deleted successfully");
    }

    @Override
    public ApiResponse updateReview(Long id, ReviewDTO reviewDTO) {
        Review review = reviewDao.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Review not found"));

        review.setRating(reviewDTO.getRating());
        review.setComment(reviewDTO.getComment());
        reviewDao.save(review);

        return new ApiResponse("Review updated successfully");
    }
}
