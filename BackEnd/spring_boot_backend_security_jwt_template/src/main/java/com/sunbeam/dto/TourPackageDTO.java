package com.sunbeam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TourPackageDTO {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer duration;
    private String startDate;
    private String endDate;
    
    // Field to store the image URL
    private String imageUrl;
}
