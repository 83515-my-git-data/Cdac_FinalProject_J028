package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.daos.TourPackageDao;
import com.sunbeam.daos.ReviewDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewDTO;
import com.sunbeam.dto.TourPackageDTO;
import com.sunbeam.entities.Review;
import com.sunbeam.entities.TourPackage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TourPackageServiceImpl implements TourPackageService {

    private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private TourPackageDao tourPackageDao;

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ApiResponse saveTourPackage(TourPackageDTO tourPackageDTO, MultipartFile imageFile) throws IOException {
        TourPackage tourPackage = modelMapper.map(tourPackageDTO, TourPackage.class);

        if (imageFile != null && !imageFile.isEmpty()) {
            String fileName = imageFile.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR, fileName);
            Files.createDirectories(filePath.getParent());
            Files.write(filePath, imageFile.getBytes());

            // Set the image URL in the database
            tourPackage.setImageUrl("/" + UPLOAD_DIR + fileName);
        }

        tourPackage = tourPackageDao.save(tourPackage);
        return new ApiResponse("Tour Package created successfully");
    }


    @Override
    public List<TourPackageDTO> getAllTourPackages() {
        List<TourPackage> tourPackages = tourPackageDao.findAll();
        return tourPackages.stream()
                .map(tourPackage -> modelMapper.map(tourPackage, TourPackageDTO.class))
                .collect(Collectors.toList());  // Updated to use Collectors.toList()
    }

    @Override
    public TourPackageDTO getTourPackageById(Long id) {
        TourPackage tourPackage = tourPackageDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tour Package not found"));
        return modelMapper.map(tourPackage, TourPackageDTO.class);
    }

    @Override
    public ApiResponse deleteTourPackage(Long id) {
        if (tourPackageDao.existsById(id)) {
            tourPackageDao.deleteById(id);
            return new ApiResponse("Tour Package deleted successfully");
        }
        return new ApiResponse("Tour Package deletion failed");
    }

    @Override
    public ApiResponse updateTourPackage(Long id, TourPackageDTO tourPackageDTO, MultipartFile imageFile) throws IOException {
        TourPackage tourPackage = tourPackageDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tour Package not found"));

        modelMapper.map(tourPackageDTO, tourPackage);

        if (imageFile != null && !imageFile.isEmpty()) {
            String fileName = imageFile.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR, fileName);
            Files.createDirectories(filePath.getParent());
            Files.write(filePath, imageFile.getBytes());

            // Update the image URL in the database
            tourPackage.setImageUrl("/" + UPLOAD_DIR + fileName);
        }

        tourPackage = tourPackageDao.save(tourPackage);
        return new ApiResponse("Tour Package updated successfully");
    }

    @Override
    public ApiResponse addReview(Long tourPackageId, ReviewDTO reviewDTO) {
        TourPackage tourPackage = tourPackageDao.findById(tourPackageId)
                .orElseThrow(() -> new ResourceNotFoundException("Tour Package not found"));

        Review review = modelMapper.map(reviewDTO, Review.class);
        tourPackage.addReview(review);
        review.setTourPackage(tourPackage);
        reviewDao.save(review);

        return new ApiResponse("Review added successfully");
    }
}
