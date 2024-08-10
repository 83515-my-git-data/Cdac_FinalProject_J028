package com.sunbeam.services;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewDTO;
import com.sunbeam.dto.TourPackageDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface TourPackageService {

    // Method to save a new TourPackage with an optional image
    ApiResponse saveTourPackage(TourPackageDTO tourPackageDTO, MultipartFile imageFile) throws IOException;

    // Method to get a list of all TourPackages
    List<TourPackageDTO> getAllTourPackages();

    // Method to get a specific TourPackage by its ID
    TourPackageDTO getTourPackageById(Long id);

    // Method to delete a TourPackage by its ID
    ApiResponse deleteTourPackage(Long id);

    // Method to update a specific TourPackage by its ID with an optional new image
    ApiResponse updateTourPackage(Long id, TourPackageDTO tourPackageDTO, MultipartFile imageFile) throws IOException;

    // Method to add a review to a specific TourPackage
    ApiResponse addReview(Long tourPackageId, ReviewDTO reviewDTO);
    
    
}
