package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserDao extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(Role role);
    @Query("SELECT b.customer FROM Booking b WHERE b.tourPackage.guide.id = :guideId")
    List<User> findCustomersByTourGuide(@Param("guideId") Long guideId);
}
