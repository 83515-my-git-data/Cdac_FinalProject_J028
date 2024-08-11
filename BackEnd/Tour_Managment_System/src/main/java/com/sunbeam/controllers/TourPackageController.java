package com.sunbeam.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sunbeam.dto.TourPackageDTO;
import com.sunbeam.services.TourPackageService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tour-packages")
public class TourPackageController {
    @Autowired
    private TourPackageService tourPackageService;

    @PostMapping
    public ResponseEntity<?> createTourPackage(@RequestParam("tourPackage") String tourPackageDTOString,
                                               @RequestParam(value = "image", required = false) MultipartFile imageFile) throws IOException {
        TourPackageDTO tourPackageDTO = new ObjectMapper().readValue(tourPackageDTOString, TourPackageDTO.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(tourPackageService.saveTourPackage(tourPackageDTO, imageFile));
    }

    @GetMapping
    public ResponseEntity<?> getAllTourPackages() {
        return ResponseEntity.ok(tourPackageService.getAllTourPackages());
    }

    @GetMapping("/{tourPkgId}")
    public ResponseEntity<?> getTourPackageById(@PathVariable Long tourPkgId) {
        return ResponseEntity.ok(tourPackageService.getTourPackageById(tourPkgId));
    }

    @PutMapping("/{tourPkgId}")
    public ResponseEntity<?> updateTourPackage(@PathVariable Long tourPkgId,
                                               @RequestParam("tourPackage") String tourPackageDTOString,
                                               @RequestParam(value = "image", required = false) MultipartFile imageFile) throws IOException {
        TourPackageDTO tourPackageDTO = new ObjectMapper().readValue(tourPackageDTOString, TourPackageDTO.class);
        return ResponseEntity.ok(tourPackageService.updateTourPackage(tourPkgId, tourPackageDTO, imageFile));
    }

    @DeleteMapping("/{tourPkgId}")
    public ResponseEntity<?> deleteTourPackage(@PathVariable Long tourPkgId) {
        return ResponseEntity.ok(tourPackageService.deleteTourPackage(tourPkgId));
    }
    
    @PostMapping("/add")
    public ResponseEntity<?> createTourPackage(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("duration") Integer duration,
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate,
            @RequestParam(value = "image", required = false) MultipartFile imageFile) throws IOException {

        TourPackageDTO tourPackageDTO = new TourPackageDTO();
        tourPackageDTO.setName(name);
        tourPackageDTO.setDescription(description);
        tourPackageDTO.setPrice(price);
        tourPackageDTO.setDuration(duration);
        tourPackageDTO.setStartDate(startDate);
        tourPackageDTO.setEndDate(endDate);

        return ResponseEntity.status(HttpStatus.CREATED).body(tourPackageService.saveTourPackage(tourPackageDTO, imageFile));
    }

}
