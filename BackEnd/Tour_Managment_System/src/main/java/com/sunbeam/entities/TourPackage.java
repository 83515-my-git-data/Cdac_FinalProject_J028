package com.sunbeam.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tour_packages")
@Getter
@Setter
@ToString
public class TourPackage extends BaseEntity {

    private String name;
    private String description;
    private Double price;
    private Integer duration;
    private String startDate;
    private String endDate;
    
    // Store the image URL instead of the image bytes
    @Column(name = "image_url")
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guide_id")
    private User guide;

	public void addReview(Review review) {
		// TODO Auto-generated method stub
		
	}

    // Additional fields and methods, if needed
}
